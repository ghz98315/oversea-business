# Request Sample 功能 - 配置指南

## 概述
Request Sample 系统允许用户通过产品页面的模态框表单或 OEM/Supplier Match 页面的完整表单提交产品样品请求。

## 已创建的文件

### 1. 组件
- `src/components/RequestSampleModal.tsx` - 主模态框表单组件
- `src/components/ProductPageClient.tsx` - 产品详情页客户端包装器
- `src/components/MobileStickyButton.tsx` - 移动端悬浮 CTA 按钮

### 2. API 路由
- `src/app/api/request-sample/route.ts` - 处理表单提交

### 3. 页面
- `src/app/thank-you/page.tsx` - 提交后确认页面

## 表单字段

### 必填字段
- 姓名
- 公司名称
- 邮箱（带格式验证）
- 国家
- 目标市场

### 可选字段
- WhatsApp/电话
- 充电标准（下拉选择：CCS1, CCS2, NACS, GB/T, Type 1, Type 2, CHAdeMO, 不确定）
- 所需认证（多选：CE, UL, FCC, RoHS, ETL, IEC 62196, SAE J3400, 不确定）
- 预期用途
- 预估订单量
- OEM/定制要求
- 附加留言

### 自动填充字段（隐藏）
- 产品名称
- 产品分类
- 产品 URL

## 智能功能

### 认证推荐
表单会根据产品分类自动推荐相应认证：
- **CCS2/Type 2**: CE, IEC 62196, RoHS
- **CCS1/Type 1**: UL, FCC, ETL
- **NACS**: UL, SAE J3400, FCC

### Reference ID 格式
`PG-YYYYMMDD-XXX`（例如：PG-20260602-001）

## 需要配置的项目

### 1. 邮件服务集成
当前 API 路由将邮件内容输出到控制台。需要集成真实的邮件服务：

**推荐服务：**
- **Resend**（推荐用于 Next.js）
- **SendGrid**
- **Amazon SES**
- **Mailgun**

**需要更新的文件：**
- `src/app/api/request-sample/route.ts`

```typescript
// 替换 console.log 为实际邮件服务
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@pearlgatesourcing.com',
  to: data.email,
  subject: '样品请求确认',
  text: confirmationBody,
});
```

### 2. 数据库集成
当前输出到控制台。可集成：

**选项：**
- **Airtable**（最简单，无代码数据库）
- **Notion Database**
- **PostgreSQL/MySQL**
- **MongoDB**

**需要更新的文件：**
- `src/app/api/request-sample/route.ts`

**Airtable 示例：**
```typescript
const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

await base('Sample Requests').create([
  {
    fields: {
      'Reference ID': referenceId,
      'Full Name': data.fullName,
      'Company': data.company,
      'Email': data.email,
      // ... 其他字段
    }
  }
]);
```

### 3. 联系信息
更新占位符联系方式：

**文件：`src/app/thank-you/page.tsx`**
```typescript
// 第 95 行：WhatsApp 链接
href="https://wa.me/您的WhatsApp号码"

// 第 98 行：WhatsApp 号码显示
<span className="text-sm text-gray-600">+X XXX XXX XXXX</span>

// 第 113 行：LinkedIn URL
href="https://linkedin.com/company/您的公司"

// 第 116 行：LinkedIn 显示
<span className="text-sm text-gray-600">您的公司名称</span>
```

**文件：`src/app/api/request-sample/route.ts`**
```typescript
// 第 60 行：确认邮件中的 WhatsApp
- WhatsApp: [待配置]

// 第 63 行：确认邮件中的 LinkedIn
- LinkedIn: [待配置]
```

### 4. 环境变量
创建 `.env.local` 文件：

```env
# 邮件服务（选择其一）
RESEND_API_KEY=your_resend_api_key
# 或
SENDGRID_API_KEY=your_sendgrid_api_key

# 数据库（选择其一）
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id
# 或
DATABASE_URL=your_database_connection_string

# 业务联系信息
BUSINESS_EMAIL=hello@pearlgatesourcing.com
BUSINESS_WHATSAPP=+1234567890
BUSINESS_LINKEDIN=https://linkedin.com/company/your-company
```

## CTA 按钮位置

### 产品详情页
1. **Hero 区域** - 产品信息下方的主要 CTA
2. **规格说明后** - 横幅样式 CTA
3. **页面底部** - 深色区域大型 CTA
4. **移动端悬浮按钮** - 滚动 300px 后出现（仅移动设备）

### 产品列表页
- 尚未添加（将在下一阶段添加）

### 首页
- 现有的"Submit EVSE Inquiry"按钮将更新为打开模态框

## 用户流程

1. 用户点击"Request Sample"按钮
2. 打开模态框表单（或全页表单在 OEM Match 路由）
3. 表单自动填充产品详情（如果在产品页面）
4. 显示智能认证推荐
5. 用户填写必填字段
6. 提交时：
   - 表单验证必填字段
   - 生成 Reference ID（PG-YYYYMMDD-XXX）
   - 发送通知邮件给企业
   - 发送确认邮件给用户
   - 保存到数据库
   - 跳转到 Thank You 页面
7. Thank You 页面显示：
   - Reference ID
   - 后续步骤（3步）
   - 快速联系选项（WhatsApp、邮箱、LinkedIn）
   - CTA 浏览更多产品

## 测试清单

- [ ] 模态框正常打开和关闭
- [ ] 所有表单字段正常工作
- [ ] 表单验证生效（必填字段、邮箱格式）
- [ ] 认证推荐正确显示
- [ ] 表单提交成功流程
- [ ] Thank You 页面显示
- [ ] Reference ID 正确生成
- [ ] 邮件通知发送（配置后）
- [ ] 数据库记录创建（配置后）
- [ ] 移动端悬浮按钮在滚动后出现
- [ ] 响应式设计在手机/平板/桌面端正常

## 后续阶段（未来开发）

### Phase 2: OEM/Supplier Match 页面
- 全页表单（非模态框）
- 10 section 布局及案例研究
- 相同表单字段但呈现方式不同

### Phase 3: 其他 CTA 位置
- 产品列表页
- 首页 CTA 集成
- 导航栏集成（可选）

### Phase 4: 分析追踪
- Google Analytics 事件
- 转化追踪
- 表单放弃追踪

## 注意事项

- 模态框使用与网站设计系统匹配的 Tailwind CSS 类
- 所有颜色使用 orange-500/orange-600 作为 CTA
- 表单适配移动端响应式
- 模态框打开时阻止 body 滚动
- 成功状态在跳转前短暂显示
- 表单数据包含用于追踪来源页面的隐藏字段

## 产品分类页面

### 已创建的 4 个分类页面
1. `/products/portable-ev-chargers/` - 便携式充电器
2. `/products/ev-charging-cables/` - 充电线缆
3. `/products/ev-charging-adapters/` - 充电适配器
4. `/products/ev-connectors/` - 连接器和插座

### 每页结构
- **What is Section** - 200-300 词专业内容
- **Standards & Options** - 标准对比表
- **Use Cases** - 3 个应用场景
- **OEM Customization** - 4 项定制服务
- **FAQ** - 5-6 个常见问题
- **Related Products** - 相关产品链接
- **3× Request Sample CTAs** - Hero、中部、底部

### 内容特点
- EV 行业专业术语密度 80%+
- 技术规格详细说明（电流、电压、认证）
- B2B 采购信息（MOQ、交期、价格）
- 认证验证方法说明
- SEO 优化的内容结构

## 导航菜单

### Products 下拉菜单（6 个条目）
1. Portable EV Chargers
2. EV Charging Cables
3. EV Charging Adapters
4. EV Connectors
5. Wallbox（Coming Soon 标签）
6. Charging Accessories（Coming Soon 标签）

### 功能
- **Desktop**: 鼠标悬停展开
- **Mobile**: 点击切换展开/折叠
- Coming Soon 项目灰色显示且不可点击
- ChevronDown 图标旋转动画

## 技术栈

- **Next.js 16.2.6** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式
- **Lucide React** - 图标
- **Framer Motion** - 动画（FadeIn, Stagger）

## 部署状态

✅ **44 页静态生成成功**
- 首页及核心页面
- 6 个博客文章
- 6 个产品详情页
- 4 个产品分类页
- OEM/Supplier Match 页面
- Thank You 页面
- 其他页面

## 支持

如有问题或需要帮助配置，请参考：
- Next.js 文档：https://nextjs.org/docs
- Resend 文档：https://resend.com/docs
- Airtable API：https://airtable.com/developers/web/api/introduction
