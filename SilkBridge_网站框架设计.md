# SilkBridge 网站框架设计文档

## 一、项目概览

| 项目 | 内容 |
|------|------|
| 品牌名 | SilkBridge（暂定） |
| 定位 | 立足广东珠三角产业带，面向海外中小买家的中国采购代理服务 |
| 网站类型 | 方案C：强转化Landing Page + Blog |
| 风格 | 友好伙伴型 + 专业感 |
| 技术栈 | Next.js + Tailwind CSS + Vercel部署 |
| 配色 | 深蓝（专业）+ 暖橙/琥珀（友好）|
| 字体 | Inter / Plus Jakarta Sans（圆润无衬线） |

---

## 二、网站结构总览

```
首页（完整Landing Page，独立转化能力）
├── About（个人故事+产业带优势）
├── Blog（SEO内容）
└── Get a Quote（独立询价表单页）
```

---

## 三、首页内容结构（9个区块）

### 区块1：Hero

**目标**：3秒内让访客知道你是谁、你在哪、能帮他做什么

| 元素 | 内容 |
|------|------|
| 标题 | Your Sourcing Partner in Guangdong — China's Manufacturing Heartland |
| 副标题 | We're former factory managers based in the Pearl River Delta. We know every major hardware cluster from Yangjiang to Foshan — and we can walk into any factory tomorrow. |
| CTA按钮 | Get a Free Quote |
| 背景 | 工厂实拍照片（或占位图） |
| 信任标签 | "Former BYD Technical Manager · 8+ Years in Manufacturing · Based in Pearl River Delta" |
| 补充信息 | "Vetted supplier network across Yangjiang, Dongguan, Foshan & Guangzhou · On-site QC available · Shipped from Guangzhou/Shenzhen Port" |

---

### 区块2：痛点共鸣

**目标**：让客户觉得"这人懂我的问题"

4个痛点卡片：

1. **Too many suppliers, no way to tell who's legit**
   "Alibaba shows 10,000 results — but which one won't ghost you after payment?"

2. **Samples looked great, bulk order didn't**
   "You've been burned by quality gaps between samples and mass production."

3. **Communication is exhausting**
   "Time zones, language barriers, and vague replies slow everything down."

4. **Minimum orders are too high**
   "You need 500 units, not 5,000 — but factories won't take you seriously."

---

### 区块3：服务介绍

**目标**：清晰展示你能提供的3个核心服务

| 服务 | 标题 | 描述 |
|------|------|------|
| 🔍 | Supplier Sourcing | I find and vet 3+ factories for your product, with comparative quotes ready in 48 hours. |
| ✅ | Quality Control | On-site inspection before shipping — photos, video, and a detailed report so you know exactly what you're getting. |
| 📦 | Order Management | I handle factory communication, production tracking, and logistics coordination from order to delivery. |

---

### 区块4：Why Guangdong（产业带优势）

**目标**：解释为什么广东是采购最优选择，强化地理信任

标题：Why Guangdong?

副标题：We're not a trading company. We're former factory managers based in the Pearl River Delta — the world's most complete manufacturing ecosystem.

4个优势点：
1. **Complete industrial clusters** — Knives (Yangjiang), Precision parts (Dongguan), Building materials (Foshan), Garments (Guangzhou) — all within 2 hours
2. **Direct port access** — Guangzhou & Shenzhen ports, among the world's busiest
3. **On-the-ground presence** — We can visit any factory within 24 hours, not remote middlemen
4. **Mature export infrastructure** — Decades of export experience, English-speaking factories, established logistics

---

### 区块5：产业带品类展示

**目标**：展示你的采购覆盖范围，用产业带背书建立专业信任

#### 卡片1：Knives & Hand Tools
- 地理标签：Yangjiang, Guangdong
- 产品：Kitchen knives · Garden tools · Hand tools · Scissors
- 背书："World's largest knife export base — 60% of China's knife exports"
- CTA：Source Tools →

#### 卡片2：Precision Parts & OEM
- 地理标签：Dongguan / Shenzhen, Guangdong
- 产品：CNC machining · Stamping · Molds · Precision components
- 背书："Global precision manufacturing hub for OEM/ODM"
- CTA：Source Parts →

#### 卡片3：Aluminum & Building Hardware
- 地理标签：Foshan, Guangdong
- 产品：Aluminum extrusion · Stainless steel fittings · Architectural hardware
- 背书："China's building materials capital — direct factory access"
- CTA：Source Hardware →

#### 卡片4：Workwear & Corporate Uniforms
- 地理标签：Guangzhou / Humen, Guangdong
- 产品：Work uniforms · Safety wear · Corporate apparel · Custom garments
- 背书："Fast fashion & B2B garment hub — flexible MOQ for custom orders"
- CTA：Source Apparel →

---

### 区块6：合作流程

**目标**：让客户觉得"跟他合作很简单，我只需要4步"

```
Step 1: Tell Me What You Need
→ Submit a quick form with your product details, quantity, and budget.

Step 2: I Find the Best Factories
→ Within 48 hours, you get quotes from 3+ verified suppliers with my recommendation.

Step 3: You Choose, I Handle the Rest
→ I manage the order, track production, and inspect quality before shipping.

Step 4: Products Arrive at Your Door
→ Shipping arranged, customs docs prepared, delivered to your warehouse.
```

---

### 区块7：信任背书（About预览）

**目标**：用真人身份和背景建立信任

| 元素 | 内容 |
|------|------|
| 照片 | 个人照片（工厂环境中） |
| 标题 | "I've been inside hundreds of factories — now I go in for you." |
| 简介 | 2-3句话：BYD背景 → 为什么做这个 → 你的承诺 |
| 关键数字 | 8+ years in manufacturing · 10+ verified factory partners · Based in Guangdong, China's manufacturing heartland |
| 链接 | → Read my full story (链接到About页) |
| LinkedIn | LinkedIn图标链接 |

---

### 区块8：FAQ

**目标**：打消最后的决策顾虑

| 问题 | 回答要点 |
|------|---------|
| Is the first quote really free? | Yes. No commitment, no hidden fees. You only pay when you decide to place an order. |
| What's the minimum order? | Depends on the product, but I work with factories that accept orders as low as $500. |
| How do I pay? Is it safe? | PayPal or bank transfer. PayPal gives you 180-day buyer protection. |
| What if quality doesn't match? | I inspect every order before shipping. If something's wrong, I negotiate with the factory before it leaves China. |
| How long does the whole process take? | Typically 2-4 weeks from quote to delivery, depending on product complexity and shipping method. |
| Do you only source from Guangdong? | These are my core areas with the deepest factory relationships. For other regions or products, I can still help — just ask. |
| Do you only source the categories listed? | Those are my strongest areas, but I can source most manufactured products from the Pearl River Delta. Just ask. |

---

### 区块9：底部CTA

**目标**：最后一次推动行动

| 元素 | 内容 |
|------|------|
| 标题 | Ready to source from China the right way? |
| 副标题 | Get your first quote free. No commitment, no risk. |
| CTA按钮 | Get a Free Quote |
| 补充文字 | "I typically respond within 24 hours." |

---

## 四、About 页面

### 内容结构

1. **个人故事**
   - 在BYD的经历（技术经理，管理工厂流程和质量）
   - 为什么离开做sourcing agent（看到海外买家被坑的痛点）
   - 你的承诺（站在买家这边，用工厂内部人的视角帮他们避坑）

2. **核心优势**
   - Factory insider perspective（不是贸易商，是懂工厂的人）
   - Quality-first approach（质量管理出身）
   - Guangdong-based（就在制造业核心区）

3. **产业带地图**（可视化展示你覆盖的4个产业带）

4. **工厂实拍画廊**（6-8张工厂/产线/质检照片）

5. **CTA** → Get a Quote

---

## 五、Blog 页面

### 初期文章规划（3-5篇）

| 文章标题 | SEO关键词 | 目的 |
|---------|----------|------|
| How to Find a Reliable Knife Supplier in Yangjiang, China | yangjiang knife supplier | 精准引流刀具买家 |
| CNC Machining in China: A Buyer's Guide to Dongguan Factories | CNC machining China, Dongguan factory | 引流精密加工买家 |
| 5 Red Flags When Choosing a Chinese Supplier | Chinese supplier red flags | 通用引流+建立专业形象 |
| What Does a Sourcing Agent Actually Do? | China sourcing agent | 教育市场+引流 |
| Aluminum Extrusion from Foshan: What Importers Need to Know | Foshan aluminum extrusion | 引流建材买家 |

### 每篇文章结构
- 800-1200词
- 实用信息为主，不灌水
- 底部CTA：Need help sourcing? → Get a Free Quote

---

## 六、Get a Quote 页面

### 表单字段

| 字段 | 类型 | 必填 |
|------|------|------|
| Your Name | 文本 | ✅ |
| Email | 邮箱 | ✅ |
| Company (optional) | 文本 | ❌ |
| Product Description | 多行文本 | ✅ |
| Quantity Needed | 文本 | ✅ |
| Target Price (optional) | 文本 | ❌ |
| Category | 下拉选择（Knives & Tools / Precision Parts / Building Hardware / Workwear / Other） | ✅ |
| Additional Details | 多行文本 | ❌ |
| How did you find us? | 下拉选择 | ❌ |

### 表单提交后
- 显示感谢页面："Thanks! I'll review your request and get back to you within 24 hours."
- 自动发送确认邮件给客户
- 通知发送到你的邮箱/微信

---

## 七、全局元素

### 导航栏
```
Logo(SilkBridge)    Home | About | Blog | Get a Quote [按钮高亮]
```

### 页脚
```
SilkBridge
Your sourcing partner inside China's factories.

Quick Links: Home · About · Blog · Get a Quote
Contact: email@silkbridge.com
Social: LinkedIn图标

© 2026 SilkBridge. All rights reserved.
```

---

## 八、技术实现要点

| 项目 | 方案 |
|------|------|
| 框架 | Next.js 14 (App Router) |
| 样式 | Tailwind CSS |
| 部署 | Vercel（免费tier） |
| 表单后端 | Formspree（免费50次/月）或自建API |
| 邮件通知 | Formspree自带 或 Resend |
| 分析 | Google Analytics 4（免费） |
| SEO | Next.js内置meta + sitemap |
| 图片 | next/image优化，WebP格式 |
| 响应式 | 移动端优先设计 |

---

## 九、开发优先级

| 优先级 | 内容 | 预计时间 |
|--------|------|---------|
| P0 | 首页（8个区块完整实现） | 2-3天 |
| P0 | Get a Quote表单页 | 半天 |
| P1 | About页面 | 半天 |
| P1 | 全局导航+页脚+SEO基础 | 半天 |
| P2 | Blog系统+第一篇文章 | 1天 |
| P2 | 移动端适配优化 | 半天 |
| P3 | Google Analytics接入 | 1小时 |
| P3 | 域名+邮箱配置 | 1小时 |

**总计：约5-6天完成全部开发**

---

*文档版本：v1.0*
*创建日期：2026-05-14*
*状态：待确认，确认后开始开发*
