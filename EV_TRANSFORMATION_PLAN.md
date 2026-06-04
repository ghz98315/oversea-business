# PearlGate → EV Charging 供应链转型执行方案

**战略定位：** 从"泛B2B供应商目录" → "新能源充电枪供应链信任入口"  
**核心差异化：** BYD背景 + 珠三角制造经验 + 新能源行业理解  
**执行方式：** 在现有Next.js框架上改造（3-5天完成）

---

## 📊 改造策略总览

### ✅ 保留的技术基础
- Next.js + TypeScript 架构
- Supabase 数据层
- Vercel 部署流程
- Resend 邮件系统
- 核心组件（Hero/Services/Process/FAQ/CTA）
- SEO基础设施（sitemap/robots/metadata）

### 🔄 需要改造的内容层
1. **文案定位**：从泛制造 → EV充电枪垂直
2. **产品分类**：删除mold/CNC/knife → 聚焦EV charging
3. **供应商数据**：7家模具厂 → 替换为EV充电枪供应商
4. **Blog内容**：泛制造文章 → EV充电枪SEO文章
5. **视觉素材**：通用工厂图 → EV充电枪生产线

---

## 🎯 Phase 1: 核心内容改造（今天完成）

### 1.1 首页 Hero Section 改造
**文件：** `silkbridge/src/components/Hero.tsx`

**当前问题：**
- ❌ "Verified China Factories. No Alibaba Guesswork" - 太泛
- ❌ "20+ personally-vetted factories in hardware tools and molds" - 行业不聚焦
- ❌ "Browse Suppliers" CTA - 像目录站

**改造方案：**
```tsx
// 主标题
Reliable EV Charging Supply Chain From China

// 副标题
Helping overseas buyers source verified EV charging suppliers, components, 
and manufacturing partners from the Pearl River Delta.

// 描述段落
Carefully verified EV charging manufacturers specializing in cables, adapters, 
portable chargers, and connectors. Submit your requirements — we'll match you 
with 2-3 verified options within 48 hours.

// CTA按钮
主按钮: "Request Supplier Match"
次按钮: "Explore Insights"

// Stats Bar（删除"20+ factories"数字）
- "Verified Network" (不显示数字)
- "EV Charging Focus"
- "10yr Factory Experience"
- "48h Free Matching"
```

### 1.2 Services Section 改造
**文件：** `silkbridge/src/components/Services.tsx`

**改造为4个核心能力：**
1. **Supplier Sourcing**  
   Match reliable EV charging manufacturers from China's Pearl River Delta.

2. **Factory Verification**  
   Reduce sourcing risks through on-site factory audits and capability assessment.

3. **OEM Support**  
   Support custom branding, packaging, and OEM manufacturing coordination.

4. **Supply Chain Insights**  
   Understand China's EV charging supply chain through industry research and reports.

### 1.3 产品分类改造
**删除：** Hardware Tools / Molds / CNC / Knife / Silicone  
**替换为：**
- EV Charging Cable
- EV Adapter
- Portable EV Charger
- EV Connector
- Charging Accessories

### 1.4 About 页面改造
**文件：** `silkbridge/src/app/about/page.tsx`

**核心改动：**
- 强化 BYD 新能源背景（不只是"electronics manufacturer"）
- 增加对 EV 供应链的理解
- 突出珠三角新能源产业带优势

**新增段落：**
```
Why EV Charging?

After 11 years in manufacturing, I watched China's EV ecosystem explode. 
The Pearl River Delta became the global hub for EV charging components — 
cables, connectors, adapters, portable chargers. But overseas buyers still 
struggle to find reliable suppliers who understand both manufacturing quality 
and EV safety standards.

That's why PearlGate focuses exclusively on EV charging supply chain. 
Every supplier in our network is vetted for EV-specific certifications 
(UL, CE, TUV), production capability, and export experience.
```

---

## 🎯 Phase 2: 新增关键页面（本周完成）

### 2.1 Factory Verification 独立页面
**新建：** `silkbridge/src/app/factory-verification/page.tsx`

**页面结构：**
1. Hero: "Reduce Sourcing Risks in China"
2. What We Verify:
   - Certifications (UL/CE/TUV/CCC)
   - Production Lines
   - QC Process
   - OEM Capability
   - Export Experience
3. Verification Process (4 steps)
4. Pricing: Free basic check / Paid detailed audit
5. CTA: "Request Verification"

### 2.2 Supplier Match 流程页面
**新建：** `silkbridge/src/app/supplier-match/page.tsx`

**页面结构：**
```
Step 1: Tell us your requirements
Step 2: Factory evaluation (48h)
Step 3: Supplier shortlist (2-3 options)
Step 4: Sample coordination
Step 5: QC & production support
```

### 2.3 Insights Hub（Blog升级）
**改造：** `silkbridge/src/app/blog/page.tsx`

**分类：**
- EV Charging Basics
- Supplier Verification
- China Manufacturing
- OEM Guide
- Certifications

---

## 🎯 Phase 3: 内容生产（本周-本月）

### 3.1 首批5篇EV SEO文章（本周）
1. **How to Verify EV Charger Suppliers in China**  
   关键词: EV charger supplier, factory verification, China sourcing

2. **CCS1 vs CCS2: What Importers Need to Know**  
   关键词: CCS1, CCS2, EV charging standard

3. **EV Charging Cable Certifications Explained (UL/CE/TUV)**  
   关键词: EV charging certification, UL certification, CE marking

4. **Why EV Charging Cables Overheat (And How to Prevent It)**  
   关键词: EV cable overheating, charging safety, quality control

5. **China's EV Charging Supply Chain: Pearl River Delta Guide**  
   关键词: China EV supply chain, Pearl River Delta, Guangdong manufacturing

### 3.2 LinkedIn 内容同步
- 每篇Blog发布后，LinkedIn发布摘要 + 链接
- 定位：Former BYD Factory Manager | EV Charging Supply Chain
- 每周2-3条行业洞察

---

## 🎯 Phase 4: 数据层改造（下周）

### 4.1 供应商数据替换
**当前：** 7家东莞模具厂  
**目标：** 5-7家EV充电枪供应商

**数据来源：**
1. 阿里巴巴国际站搜索 "EV charging cable manufacturer"
2. 筛选条件：
   - 位于珠三角（深圳/东莞/广州）
   - 有UL/CE认证
   - 有官网
   - 有工厂照片
3. 手动验证官网 + 下载图片

**Supabase表结构调整：**
```sql
-- 新增字段
ALTER TABLE suppliers ADD COLUMN focus_area TEXT; -- 'EV Charging'
ALTER TABLE suppliers ADD COLUMN ev_certifications TEXT[]; -- ['UL2251', 'CE', 'TUV']
ALTER TABLE suppliers ADD COLUMN connector_types TEXT[]; -- ['Type 1', 'Type 2', 'CCS']
```

### 4.2 产品分类数据
**新建表：** `product_categories`
```sql
CREATE TABLE product_categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  order_index INT
);

INSERT INTO product_categories VALUES
('ev-cable', 'EV Charging Cable', 'ev-charging-cable', 'Type 1/2, CCS, CHAdeMO cables', 'cable', 1),
('ev-adapter', 'EV Adapter', 'ev-adapter', 'Charging adapters and converters', 'plug', 2),
('portable-charger', 'Portable EV Charger', 'portable-ev-charger', 'Level 1/2 portable EVSE', 'battery', 3),
('ev-connector', 'EV Connector', 'ev-connector', 'Charging plugs and sockets', 'zap', 4),
('accessories', 'Charging Accessories', 'charging-accessories', 'Cable organizers, wall mounts', 'box', 5);
```

---

## 🎯 执行时间表

### 今天（Day 1）
- [x] 制定完整改造方案
- [ ] 改造 Hero.tsx
- [ ] 改造 Services.tsx
- [ ] 改造 About page
- [ ] 删除泛行业产品分类
- [ ] 本地测试 + 提交

### 明天（Day 2）
- [ ] 新建 Factory Verification 页面
- [ ] 新建 Supplier Match 页面
- [ ] 改造 Blog 首页（Insights Hub）
- [ ] 更新导航栏
- [ ] 部署到 Vercel

### Day 3-5（本周）
- [ ] 撰写5篇EV SEO文章
- [ ] 搜集5-7家EV充电枪供应商数据
- [ ] 下载供应商官网图片
- [ ] 更新 Supabase 数据
- [ ] LinkedIn 同步更新

### Day 6-14（下周）
- [ ] 持续内容输出（每周2篇Blog）
- [ ] 建立询盘表单优化（增加EV专业字段）
- [ ] Google Search Console 提交
- [ ] 监控SEO表现

### Day 15-30（本月）
- [ ] 每周2篇Blog + 3条LinkedIn
- [ ] 建立第一批真实EV供应商资源
- [ ] 准备Reddit/LinkedIn获客内容
- [ ] 域名绑定 + Resend验证

---

## 📊 成功指标

### 短期（1个月）
- [ ] 网站100%聚焦EV充电枪
- [ ] 发布10篇EV SEO文章
- [ ] Google收录所有新页面
- [ ] LinkedIn建立行业定位

### 中期（3个月）
- [ ] 5-10个关键词进入Google前3页
- [ ] 每周5-10个自然流量询盘
- [ ] 建立3-5家真实供应商合作

### 长期（6个月）
- [ ] 成为"China EV charging supplier"关键词权威站
- [ ] 月访问量1000+
- [ ] 月询盘50+
- [ ] 成交第一批客户

---

## 🚨 关键注意事项

1. **不要再提"20+ factories"数字** - 降低高级感
2. **删除所有泛行业内容** - 避免Google认为是泛B2B站
3. **强化BYD新能源背景** - 这是最大差异化
4. **Blog是核心资产** - 未来流量主要来源
5. **不要急着做会员系统** - 先建立信任和内容
6. **珠三角定位不能丢** - 地域差异化很强

---

## 下一步行动

**现在立即确认：**
1. 是否同意在现有框架上改造？
2. 是否同意今天先完成Phase 1（核心内容改造）？
3. 是否需要我立即开始修改Hero.tsx？

确认后我立即开始执行。
