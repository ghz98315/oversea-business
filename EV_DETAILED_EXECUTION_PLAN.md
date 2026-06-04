# PearlGate EV Charging 转型 - 详细执行方案 v2.0

## 🎯 核心战略定位（最重要）

**你不是：**
- ❌ 跨境零售商城
- ❌ 产品目录网站  
- ❌ Dropshipping平台
- ❌ 供应商黄页

**你是：**
- ✅ 新能源供应链信任入口
- ✅ EV充电枪采购顾问平台
- ✅ 中国制造风险降低方案商
- ✅ 供应链情报与验厂服务商

**核心价值主张：**
> "帮助海外客户降低中国新能源供应链采购风险"

---

## 📋 改造策略总览

### 在现有框架上改造（不重新搭建）

**保留的技术基础：**
- ✅ Next.js + TypeScript 架构
- ✅ Supabase 数据层
- ✅ Vercel 部署流程
- ✅ Resend 邮件系统
- ✅ 核心组件可复用
- ✅ SEO基础设施

**改造的内容层：**
- 🔄 文案定位：泛制造 → EV充电枪垂直
- 🔄 产品分类：删除mold/CNC → 聚焦EV charging
- 🔄 供应商数据：模具厂 → EV充电枪供应商
- 🔄 Blog内容：泛制造 → EV充电枪SEO
- 🔄 视觉素材：通用工厂 → EV生产线

---

## 📋 Phase 1: 核心内容改造（今天完成）

### 1.1 Hero Section 改造

**文件：** `silkbridge/src/components/Hero.tsx`

**改造方案：**
- 主标题: Reliable EV Charging Supply Chain From China
- 副标题: Helping overseas buyers source verified EV charging suppliers, components, and manufacturing partners from the Pearl River Delta
- CTA主按钮: "Request Supplier Match"
- CTA次按钮: "Explore Insights"
- Stats删除数字，改为能力描述

### 1.2 Services Section 改造

**文件：** `silkbridge/src/components/Services.tsx`

**4个核心能力：**
1. Supplier Sourcing - 供应商匹配
2. Factory Verification - 工厂验证
3. OEM Support - OEM支持
4. Supply Chain Insights - 供应链洞察

### 1.3 About Page 改造

**文件：** `silkbridge/src/app/about/page.tsx`

**核心改动：**
- 增加"Why EV Charging"段落
- 强化BYD新能源背景
- 突出EV-specific认证理解

### 1.4 产品分类改造

**删除：** Hardware/Mold/CNC/Knife/Silicone
**替换为：** EV Cable/Adapter/Portable Charger/Connector/Accessories

---

## 📋 Phase 2: 新增关键页面（明天完成）

### 2.1 Factory Verification 页面
- 路径: `/factory-verification`
- 定位: 降低采购风险的验厂服务
- 核心: What We Verify + Process + Pricing

### 2.2 Supplier Match 页面
- 路径: `/supplier-match`
- 定位: 专业采购流程
- 核心: 5步流程 + 结构化表单

### 2.3 Sample Program 页面
- 路径: `/sample-program`
- 定位: 低风险产品评估（不是零售）
- 明确说明: Not dropshipping

---

## 📋 Phase 3: Blog内容体系（本周开始）

### 5大内容栏目

1. **EV Charging Basics (40%)** - 流量入口
2. **Supplier Verification (30%)** - 核心差异化
3. **China Manufacturing Insights (20%)** - 独特价值
4. **OEM & Sourcing Guide (10%)** - 高转化
5. **Certifications & Compliance** - 补充

### 首批10篇文章

**Week 1:**
1. How to Find Reliable EV Charging Suppliers in China
2. CCS1 vs CCS2: Key Differences Explained
3. What Is NACS and Why It Matters
4. How to Verify EV Charger Certifications
5. Portable EV Charger Buying Guide

**Week 2:**
6. Why EV Charging Cables Overheat
7. China's EV Charging Supply Chain: Pearl River Delta Guide
8. OEM EV Charger Manufacturing Process
9. Common Problems When Sourcing EV Products
10. How Factory Verification Reduces Risks

### 写作风格
- 工程顾问风格（不是营销风）
- 实用、技术导向、透明
- 基于制造经验的洞察

---

## 📋 Phase 4: 数据层改造（下周）

### 供应商数据替换
- 当前: 7家东莞模具厂
- 目标: 5-7家EV充电枪供应商（珠三角）

### 数据搜集
- 渠道: 阿里国际站/Google/Made-in-China
- 筛选: 珠三角+官网+认证+工厂照片+英文+出口经验

### Supabase结构调整
```sql
ALTER TABLE suppliers 
ADD COLUMN focus_area TEXT DEFAULT 'EV Charging',
ADD COLUMN ev_certifications TEXT[],
ADD COLUMN connector_types TEXT[],
ADD COLUMN product_categories TEXT[],
ADD COLUMN main_markets TEXT[],
ADD COLUMN moq_range TEXT;
```

---

## 📋 执行时间表

### 今天（Day 1）
- [x] 制定完整改造方案
- [ ] 改造 Hero/Services/About
- [ ] 删除泛行业分类
- [ ] 本地测试

### 明天（Day 2）
- [ ] 新建3个关键页面
- [ ] 更新导航栏
- [ ] 部署Vercel

### Day 3-5（本周）
- [ ] 撰写5篇SEO文章
- [ ] 搜集EV供应商数据
- [ ] LinkedIn同步

### Day 6-14（下周）
- [ ] 持续内容输出
- [ ] 优化询盘表单
- [ ] Google Search Console

### Day 15-30（本月）
- [ ] 每周2篇Blog
- [ ] 建立真实供应商资源
- [ ] 域名绑定

---

## 📊 成功指标

### 短期（1个月）
- 网站100%聚焦EV
- 发布10篇文章
- Google收录
- LinkedIn定位

### 中期（3个月）
- 5-10个关键词前3页
- 每周5-10个询盘
- 3-5家供应商合作

### 长期（6个月）
- 成为关键词权威站
- 月访问1000+
- 月询盘50+
- 成交首批客户

---

## 🚨 关键注意事项

1. 不要提"20+ factories"数字
2. 删除所有泛行业内容
3. 强化BYD新能源背景
4. Blog是核心资产
5. 不做会员系统（先建信任）
6. 珠三角定位不能丢
7. 不做零售商城
8. Sample不是Dropshipping

---

## 🎯 核心战略原则

**PearlGate 不卖产品。**
**PearlGate 降低采购不确定性。**

核心价值：
- Trust（信任）
- Manufacturing Understanding（制造理解）
- Supply Chain Intelligence（供应链情报）
- Supplier Verification（供应商验证）
- Engineering-Driven Support（工程驱动支持）

---

## 🚀 长期愿景

成为全球买家信赖的中国EV充电枪供应链情报与采购平台。

不是最大的供应商目录，而是最值得信赖的供应链入口。

---

## 下一步行动

**现在立即确认：**
1. 是否同意这个详细方案？
2. 是否今天开始Phase 1改造？
3. 是否需要我立即开始修改代码？

确认后立即执行。
