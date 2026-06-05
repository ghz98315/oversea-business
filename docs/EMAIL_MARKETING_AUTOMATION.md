# 📧 邮件营销自动化实施方案

## 🎯 目标

根据用户行为自动触发邮件序列，提升转化率和客户关系管理。

---

## 🏗️ 当前技术栈

### ✅ 已有基础
- **Resend** - 邮件发送服务（已集成）
- **立即发送** - `/api/quote` 已实现询盘确认邮件
- **邮箱收集** - `/api/emails` 存储到 JSON 文件
- **Supabase** - 数据库

---

## 🛠️ 三种实现方案

### 方案 1：Loops.so（推荐 - 快速上线）

**成本：** 免费 2000 邮件/月，付费 $29/月  
**实施时间：** 1-2 小时  
**优点：** 无需开发，可视化编辑器，快速上线

#### 技术实现

```typescript
// app/api/emails/route.ts
export async function POST(request: NextRequest) {
  const { email, source } = await request.json();

  // 发送到 Loops.so
  await fetch('https://app.loops.so/api/v1/contacts/create', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      source,
      subscribed: true,
      userGroup: 'newsletter'
    })
  });

  return NextResponse.json({ success: true });
}
```

#### 邮件序列设计

**欢迎序列（Welcome Sequence）：**
- 邮件 1 (立即) - 欢迎 + 介绍服务
- 邮件 2 (3天后) - 案例研究 + 社会证明
- 邮件 3 (7天后) - Lead Magnet（检查清单PDF）
- 邮件 4 (14天后) - 询盘邀请

**询盘跟进序列（Quote Follow-up）：**
- 邮件 1 (立即) - 确认收到（已有）
- 邮件 2 (2天后) - "正在为您匹配供应商"
- 邮件 3 (5天后) - "有问题吗？我可以帮忙"
- 邮件 4 (10天后) - 满意度调查

**样品申请序列（Sample Request）：**
- 邮件 1 (立即) - 样品申请确认
- 邮件 2 (3天后) - "样品已发送"
- 邮件 3 (7天后) - "收到样品了吗？"
- 邮件 4 (14天后) - 量产询盘邀请

---

### 方案 2：Supabase + Edge Functions（自建系统）

**成本：** 免费（Supabase 免费额度）  
**实施时间：** 3-5 天  
**优点：** 完全控制，灵活定制

#### 数据库设计

```sql
-- 邮件订阅者表
CREATE TABLE email_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  source TEXT,
  status TEXT DEFAULT 'active',
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  metadata JSONB
);

-- 邮件序列表
CREATE TABLE email_sequences (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT
);

-- 邮件序列步骤表
CREATE TABLE email_sequence_steps (
  id UUID PRIMARY KEY,
  sequence_id UUID REFERENCES email_sequences(id),
  step_number INT NOT NULL,
  subject TEXT NOT NULL,
  template_name TEXT NOT NULL,
  delay_days INT DEFAULT 0,
  delay_hours INT DEFAULT 0
);

-- 邮件队列表
CREATE TABLE email_queue (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  subscriber_id UUID REFERENCES email_subscribers(id),
  sequence_id UUID REFERENCES email_sequences(id),
  step_id UUID REFERENCES email_sequence_steps(id),
  scheduled_at TIMESTAMPTZ NOT NULL,
  sent_at TIMESTAMPTZ,
  status TEXT DEFAULT 'pending',
  error TEXT
);
```

#### 核心函数

```typescript
// 加入序列
async function enrollInSequence(subscriberId: string, sequenceName: string) {
  const steps = await supabase
    .from('email_sequence_steps')
    .select('*')
    .eq('sequence_id', sequenceName)
    .order('step_number');

  for (const step of steps) {
    const scheduledAt = new Date();
    scheduledAt.setDate(scheduledAt.getDate() + step.delay_days);
    scheduledAt.setHours(scheduledAt.getHours() + step.delay_hours);

    await supabase.from('email_queue').insert({
      subscriber_id: subscriberId,
      sequence_id: step.sequence_id,
      step_id: step.id,
      scheduled_at: scheduledAt,
      status: 'pending'
    });
  }
}

// 处理邮件队列（定时任务每小时运行）
async function processEmailQueue() {
  const { data: pending } = await supabase
    .from('email_queue')
    .select('*, subscriber:email_subscribers(*), step:email_sequence_steps(*)')
    .eq('status', 'pending')
    .lte('scheduled_at', new Date().toISOString())
    .limit(100);

  for (const item of pending) {
    try {
      await resend.emails.send({
        from: 'PearlGate <hello@pearlgatesourcing.com>',
        to: item.subscriber.email,
        subject: item.step.subject,
        html: renderTemplate(item.step.template_name, item.subscriber)
      });

      await supabase
        .from('email_queue')
        .update({ status: 'sent', sent_at: new Date().toISOString() })
        .eq('id', item.id);
    } catch (error) {
      await supabase
        .from('email_queue')
        .update({ status: 'failed', error: error.message })
        .eq('id', item.id);
    }
  }
}
```

---

### 方案 3：Vercel Cron + Supabase

**成本：** Vercel Pro $20/月  
**实施时间：** 2-3 天  
**优点：** 简单，Vercel 内置

#### Vercel 配置

```json
// vercel.json
{
  "crons": [
    {
      "path": "/api/cron/send-emails",
      "schedule": "0 * * * *"
    }
  ]
}
```

#### API 路由

```typescript
// app/api/cron/send-emails/route.ts
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  await processEmailQueue();
  return Response.json({ success: true });
}
```

---

## 📋 实施建议

### 🎯 短期（立即）：方案 1 - Loops.so
1. 注册 Loops.so
2. 创建欢迎邮件序列
3. 集成 API
4. 测试

**时间：1-2 小时**

### 🚀 中期（1-2个月）：方案 2 - Supabase
当邮件量增长后，迁移到自建系统获得更多控制。

---

## 📧 邮件序列内容模板

### 欢迎序列

#### 邮件 1 - 立即发送
**主题：** Welcome to PearlGate — Here's What Happens Next
**内容：**
- 感谢订阅
- 介绍 PearlGate 服务
- 设定期望（每周1-2封邮件）
- CTA：浏览供应商数据库

#### 邮件 2 - 3天后
**主题：** How We Helped [Company] Avoid $50K in Fake Certifications
**内容：**
- 真实案例研究
- 工厂验证流程
- CTA：免费工厂审核咨询

#### 邮件 3 - 7天后
**主题：** Free Download: EV Charging Supplier Selection Checklist
**内容：**
- 提供 PDF 下载
- 检查清单预览
- CTA：下载完整版

#### 邮件 4 - 14天后
**主题：** Ready to Source EV Charging Products?
**内容：**
- 询盘邀请
- 快速匹配承诺（48小时）
- CTA：提交询盘

---

### 询盘跟进序列

#### 邮件 1 - 立即（已有）
**主题：** We received your sourcing request — PearlGate
**内容：** 确认收到询盘

#### 邮件 2 - 2天后
**主题：** [Name], We're Matching You With 3 Verified Suppliers
**内容：**
- 进度更新
- 匹配标准说明
- 预计完成时间

#### 邮件 3 - 5天后
**主题：** Quick Question About Your EV Charging Project
**内容：**
- 询问是否有问题
- 提供直接联系方式
- 常见问题解答链接

#### 邮件 4 - 10天后
**主题：** How Was Your Experience With PearlGate?
**内容：**
- 满意度调查
- 请求反馈
- 推荐激励

---

## 🎯 KPI 追踪

### 关键指标
- 邮件打开率 > 25%
- 点击率 > 5%
- 退订率 < 0.5%
- 询盘转化率 > 2%

### 工具
- Loops.so 内置分析
- Google Analytics（UTM 追踪）
- Supabase 自定义追踪

---

## ⚠️ 注意事项

### 合规性
- ✅ 添加退订链接（Loops.so 自动添加）
- ✅ 遵守 GDPR（仅发送给订阅者）
- ✅ 明确隐私政策

### 最佳实践
- 避免过度发送（每周不超过2封）
- 个性化内容（使用名字、公司）
- A/B 测试主题行
- 移动端优化

---

## 📅 下一步

**优先级：中等**  
**依赖：内容营销建立后实施**  
**预计启动：2-4 周后**

当博客内容和 Lead Magnet 准备好后，再启动邮件自动化以确保有高质量内容可发送。
