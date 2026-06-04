# PearlGate 全业务手工测试清单

测试日期：____________
测试环境：http://localhost:3000 (或生产环境)
测试人员：____________

---

## 📋 测试前准备

### 环境检查
- [ ] 开发服务器正在运行 (`npm run dev`)
- [ ] 浏览器已打开（推荐 Chrome）
- [ ] 开发者工具已打开（F12）
- [ ] 邮箱客户端已打开（Alex.Guan@pearlgatesourcing.com）

---

## 1️⃣ Request Sample 表单测试（产品页 Modal）

### 测试步骤
1. 访问：http://localhost:3000/products/portable-ev-chargers
2. 点击 "Request Product Sample" 按钮
3. 填写表单：
   - Full Name: `Test User`
   - Company: `Test Company`
   - Email: `Alex.Guan@pearlgatesourcing.com`（用你自己的邮箱）
   - WhatsApp: `+86 138 1234 5678`
   - Country: `China`
   - Target Market: `North America`
   - Charging Standard: 选择 `CCS1`
   - Certifications: 勾选 `UL` 和 `FCC`
   - Intended Use: `Testing purpose`
   - Estimated Volume: `1000 units/month`
   - OEM Requirements: `Custom branding for testing`
   - Message: `This is a test submission`
4. 点击 "Submit Request"

### 验证项
- [ ] Modal 正常打开
- [ ] 产品名称自动填充为 "Portable EV Chargers"
- [ ] 认证推荐显示（UL, FCC 应该被推荐）
- [ ] 表单验证工作（尝试不填必填项提交）
- [ ] 提交后显示成功消息
- [ ] 跳转到 `/thank-you` 页面
- [ ] Thank You 页面显示 Reference ID（格式：PG-YYYYMMDD-HHMMSS）
- [ ] **邮箱收到 2 封邮件**：
  * [ ] 客户确认邮件（发给你填写的邮箱）
    - 标题：`Sample Request Confirmation — PearlGate`
    - 包含 Reference ID
    - 包含后续步骤说明
  * [ ] 管理员通知邮件（发给 Alex.Guan@pearlgatesourcing.com）
    - 标题：`[New Sample Request] Portable EV Chargers — Test User`
    - 包含完整表单数据
- [ ] **Supabase 数据库有新记录**：
  * 访问：https://supabase.com/dashboard
  * 进入项目 → Table Editor → `sample_requests` 表
  * 查看是否有刚提交的记录
  * 检查 Reference ID 是否正确

### 记录问题
```
问题描述：


截图：

```

---

## 2️⃣ OEM/Supplier Match 表单测试（独立页面）

### 测试步骤
1. 访问：http://localhost:3000/supplier-match
2. 滚动到表单区域
3. 填写相同的测试数据（参考上面）
4. 点击 "Submit Request"

### 验证项
- [ ] 表单正常显示
- [ ] 产品名称自动填充为 "OEM/Supplier Match"
- [ ] 提交后跳转到 `/thank-you`
- [ ] **邮箱收到 2 封邮件**：
  * [ ] 客户确认邮件
  * [ ] 管理员通知邮件（标题包含 "OEM/Supplier Match"）
- [ ] **Supabase 数据库有新记录**

### 记录问题
```
问题描述：


截图：

```

---

## 3️⃣ Quote 表单测试（旧表单）

### 测试步骤
1. 访问：http://localhost:3000/quote
2. 填写表单：
   - Name: `Test User`
   - Email: `Alex.Guan@pearlgatesourcing.com`
   - Company: `Test Company`
   - Category: 选择一个分类
   - Product: `Test Product`
   - Quantity: `1000 units`
   - Target Price: `$100`
   - Details: `Test submission`
3. 提交表单

### 验证项
- [ ] 表单正常显示
- [ ] 提交成功
- [ ] **邮箱收到 2 封邮件**：
  * [ ] 客户确认邮件
  * [ ] 管理员通知邮件

### 记录问题
```
问题描述：


截图：

```

---

## 4️⃣ 导航菜单测试

### Desktop 版本
1. 访问首页
2. 测试导航栏

### 验证项
- [ ] Logo 显示正常
- [ ] 菜单顺序正确：Home → Products → Verification → Insights → About
- [ ] Products 下拉菜单：
  * [ ] 鼠标悬停时平滑展开
  * [ ] 显示 6 个选项
  * [ ] 前 4 项可点击
  * [ ] Wallbox 和 Charging Accessories 显示 "Coming Soon"
  * [ ] 点击有效项跳转正确
- [ ] "Get Matched" 按钮工作正常

### Mobile 版本（缩小浏览器窗口或使用手机）
- [ ] 汉堡菜单图标显示
- [ ] 点击展开菜单
- [ ] Products 下拉展开/折叠正常
- [ ] 所有链接可点击

### 记录问题
```
问题描述：


截图：

```

---

## 5️⃣ 页面可访问性测试

访问以下页面，确认正常显示：

### 核心页面
- [ ] 首页 `/`
- [ ] About `/about`
- [ ] Blog `/blog`
- [ ] Factory Verification `/factory-verification`
- [ ] Supplier Match `/supplier-match`
- [ ] Thank You `/thank-you`

### 产品分类页面（4 个）
- [ ] Portable EV Chargers `/products/portable-ev-chargers`
- [ ] EV Charging Cables `/products/ev-charging-cables`
- [ ] EV Charging Adapters `/products/ev-charging-adapters`
- [ ] EV Connectors `/products/ev-connectors`

### 产品详情页（抽查 3 个）
- [ ] CCS1 Cable `/products/ccs1-cable`
- [ ] CCS2 Cable `/products/ccs2-cable`
- [ ] NACS Cable `/products/nacs-cable`

### 供应商页面（抽查 2 个）
- [ ] 东莞兴合 `/suppliers/dongguan-xinghe-precision`
- [ ] 其他供应商（任选一个）

### 记录问题
```
无法访问的页面：


错误信息：

```

---

## 6️⃣ About 页面优化验证

### 测试步骤
1. 访问：http://localhost:3000/about

### 验证项
- [ ] Hero 区域显示正常（红色警告徽章）
- [ ] "Common Problems We Solve" 部分显示 4 个痛点卡片
- [ ] 每个卡片有毛玻璃悬浮效果（鼠标悬停时向上浮动）
- [ ] "Why Work With Us" 显示 3 个优势卡片
- [ ] "Industries We Support" 显示 6 个行业卡片（2x3 布局）
- [ ] 所有 CTA 按钮跳转到 `/supplier-match`
- [ ] 页面简洁，无冗余内容

### 记录问题
```
问题描述：


截图：

```

---

## 7️⃣ Who Should Work With Me 组件测试

### 测试步骤
1. 访问首页，滚动到 "Who Should Work With Me" 部分

### 验证项
- [ ] 左侧 "Good Fit" 显示 4 项
- [ ] 右侧 "Not a Good Fit" 显示 4 项
- [ ] 所有卡片高度一致
- [ ] 卡片有毛玻璃悬浮效果
- [ ] 鼠标悬停时卡片向上浮动、阴影增强

### 记录问题
```
问题描述：


截图：

```

---

## 8️⃣ 响应式设计测试

### 测试不同屏幕尺寸
使用浏览器开发者工具（F12 → 设备模拟器）

### 验证项

**Mobile (375px)**
- [ ] 导航菜单汉堡图标显示
- [ ] 产品分类页卡片单列显示
- [ ] Request Sample Modal 适配移动端
- [ ] 移动端悬浮按钮出现（滚动后）

**Tablet (768px)**
- [ ] 导航菜单正常显示
- [ ] 卡片 2 列布局
- [ ] 表单布局合理

**Desktop (1920px)**
- [ ] 导航菜单完整显示
- [ ] 卡片 3-4 列布局
- [ ] 所有内容居中对齐

### 记录问题
```
问题描述：


截图：

```

---

## 9️⃣ Supabase 数据库验证

### 测试步骤
1. 访问：https://supabase.com/dashboard
2. 选择项目（gbvjtamwtkosftccaeif）
3. 点击左侧 **Table Editor**
4. 选择 **sample_requests** 表

### 验证项
- [ ] 表已创建
- [ ] 有测试提交的记录
- [ ] Reference ID 格式正确（PG-YYYYMMDD-HHMMSS）
- [ ] 所有字段数据完整：
  * [ ] 联系信息（full_name, company, email, country, target_market）
  * [ ] 产品信息（product_name, product_category）
  * [ ] 项目详情（charging_standard, certifications_needed[]）
  * [ ] 时间戳（created_at, updated_at）
  * [ ] 状态（status = 'pending'）

### SQL 查询测试（可选）
在 SQL Editor 中运行：
```sql
-- 查询最近 5 条记录
SELECT * FROM sample_requests ORDER BY created_at DESC LIMIT 5;

-- 查询今天的记录
SELECT reference_id, full_name, company, email, created_at 
FROM sample_requests 
WHERE DATE(created_at) = CURRENT_DATE 
ORDER BY created_at DESC;
```

### 记录问题
```
问题描述：


截图：

```

---

## 🔟 邮件内容验证

### 客户确认邮件检查
打开邮箱中的 "Sample Request Confirmation — PearlGate"

### 验证项
- [ ] 发件人：`PearlGate <Alex.Guan@pearlgatesourcing.com>`
- [ ] 标题包含产品名称
- [ ] 邮件内容：
  * [ ] 包含 Reference ID（橙色高亮框）
  * [ ] 说明后续 3 个步骤
  * [ ] 联系方式正确（邮箱、WhatsApp、LinkedIn）
  * [ ] 品牌设计统一（橙色主题）
- [ ] 可以直接回复邮件

### 管理员通知邮件检查
打开邮箱中的 "[New Sample Request] ..." 邮件

### 验证项
- [ ] 发件人：`PearlGate Samples <samples@pearlgatesourcing.com>`
- [ ] 标题包含产品名称和客户姓名
- [ ] 邮件内容：
  * [ ] 显示 Reference ID
  * [ ] 显示提交时间
  * [ ] 完整的表单数据（表格格式）
  * [ ] 所有字段都显示
  * [ ] 客户邮箱可点击
- [ ] Reply-To 设置为客户邮箱

### 记录问题
```
问题描述：


截图：

```

---

## 📊 测试总结

### 统计
- 总测试项：______
- 通过：______
- 失败：______
- 通过率：______%

### 关键问题汇总
```
1. 

2. 

3. 

```

### 建议修复优先级
```
P0 (紧急):


P1 (重要):


P2 (一般):

```

### 测试结论
- [ ] 所有核心功能正常，可以上线
- [ ] 有小问题，需要修复后上线
- [ ] 有重大问题，需要全面修复

---

## ✅ 测试完成签字

测试人员：____________
完成时间：____________
