# PearlGate 项目进度表 (Checkpoint)

**更新日期：** 2026-05-22
**当前阶段：** Week 2 — 供应商数据填充 + 获客准备

---

## 仓库信息

| 仓库 | 地址 | 最新 commit |
|------|------|-------------|
| business_discuss | github.com/ghz98315/oversea-business | b3178b6 |
| pearlgate | github.com/ghz98315/pearlgate (private) | a13eced |

---

## 已完成功能

### 网站核心页面
- [x] Landing Page（Hero / PainPoints / DualProduct / StatsBar / DatabasePreview / Services / WhyGuangdong / Process / Trust / FAQ / EmailCapture / CTA）
- [x] About 页面（个人故事 / 核心优势 / 产业带地图 / 工厂画廊）
- [x] Blog 系统 + 5 篇 SEO 文章
- [x] Pricing 页面（Free / Pro / Agency 三档）
- [x] Suppliers 展示页（7 家真实东莞模具厂）
- [x] Quote 询价表单（含邮件通知）
- [x] Login 页面
- [x] 404 自定义页面
- [x] BlogPreview / SocialProof 组件

### 供应商数据（Supabase 已入库）
| 编号 | 工厂 | 认证 | 图片状态 |
|------|------|------|---------|
| GD-019 | 东莞星河精密技术股份有限公司 | ISO 9001, ISO 14001, IATF 16949, ISO 45001, ISO 27001 | 官网图 ✅ |
| GD-015 | 东莞市宇辉压铸有限公司 | ISO 9001, ISO 14001, IATF 16949 | 用户提供 ✅ |
| GD-027 | 东莞市兄友模具塑胶有限公司 | ISO 9001, IATF 16949, ISO 13485 | 部分官网图（需替换小文件） |
| GD-021 | 东莞市宜泽模具有限公司 | ISO 9001, ISO 13485 | 官网图 ✅ |
| GD-058 | 东莞市安普特双色模塑科技有限公司 | ISO 9001, ISO 14001, IATF 16949, ISO 45001 | ❌ 缺3张（需手动下载） |
| GD-064 | 东莞市友强橡塑制品有限公司 | ISO 9001, ISO 14001, FDA, IATF 16949, RoHS, REACH | 官网图 ✅ |
| GD-065 | 广东红运硅胶制品有限公司 | ISO 9001, ISO 14001, BSCI, FDA, UL, RoHS, LFGB | ❌ 缺3张（需手动下载） |

### 飞书表格
- [x] 7 家已标记"是否上架平台 = true"
- 飞书 App: cli_aa8c33bd6ef99ccc
- 表格: UcNcbvYjwaS6a6sDg44c3WuGnBf / tblKOx70cdurpV7e


1. How to Find a Reliable Knife Supplier in Yangjiang, China
2. CNC Machining in China: A Buyer's Guide to Dongguan Factories
3. 5 Red Flags When Choosing a Chinese Supplier
4. What Does a Sourcing Agent Actually Do?
5. Aluminum Extrusion from Foshan: What Importers Need to Know

### 技术集成
- [x] Vercel 部署（自动从 GitHub 构建）
- [x] Google Analytics (G-EZ49XXCGPG)
- [x] Resend 邮件通知（Quote 提交 → 客户确认 + 管理员通知）
- [x] Supabase 数据层（延迟初始化，生产可用）
- [x] Stripe 支付集成（延迟初始化，需配置 API key）
- [x] NextAuth 认证（Google OAuth + Credentials）
- [x] SEO（sitemap 含全部页面 + blog 文章、robots.txt、OpenGraph metadata）
- [x] 响应式设计 + Framer Motion 动效

### 部署配置
- [x] next.config.ts（Unsplash 图片域名白名单）
- [x] .env.example（完整环境变量文档）
- [x] .gitignore（排除 data/ 目录和 .env 文件）
- [x] 构建通过（30 个页面全部静态生成）

---

## 待完成事项

### 高优先级
- [ ] 补充安普特/红运/兄友的图片（需手动从官网下载到 silkbridge/public/suppliers/）
- [ ] 更新 Supabase 图片数组（补图后执行）
- [ ] 绑定自定义域名（用户稍后提供）
- [ ] Resend 域名验证（绑定域名后才能给客户发邮件）
- [ ] 获客内容准备（Reddit / LinkedIn / 冷邮件模板）

### 中优先级
- [ ] 认证系统迁移 Supabase Auth（当前 JSON 文件在 Vercel 上会丢数据）
- [ ] 邮件订阅迁移 Supabase（同上）
- [ ] 替换 Unsplash 占位图为真实工厂照片
- [ ] Blog 文章添加 JSON-LD structured data

### 低优先级
- [ ] Admin 后台完善
- [ ] Stripe 支付流程测试
- [ ] Google Search Console 提交 sitemap
- [ ] 页面性能优化（framer-motion lazy load）

---

## 环境变量清单

```
# 必需（网站基本运行）
AUTH_SECRET=
NEXTAUTH_URL=

# Supabase（数据库功能）
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# 邮件通知
RESEND_API_KEY=
ADMIN_EMAIL=

# Stripe（付费功能，可选）
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_AGENCY_PRICE_ID=
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=
NEXT_PUBLIC_STRIPE_AGENCY_PRICE_ID=

# Google OAuth（可选）
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

# Admin API
SUPPLIER_API_KEY=
```

---

## 30 天路线图进度

| 阶段 | 时间 | 状态 |
|------|------|------|
| Week 1: 建基础设施 | Day 1-7 | ✅ 完成 |
| Week 2: 获客启动 | Day 8-14 | 🔄 进行中 |
| Week 3: 主动出击 | Day 15-21 | ⏳ 待开始 |
| Week 4: 成交+迭代 | Day 22-30 | ⏳ 待开始 |

---

*下次继续：补充缺失图片 → 更新DB图片数组 → 部署验证 → 绑定域名 → 获客内容*

## 恢复提示词

```
上次进度：7家东莞模具厂供应商数据已入库Supabase并部署到pearlgate仓库。
待办：
1. 补充安普特(szamport.com)、红运(hongyun31.com)、兄友(in-moldmatic.com)的图片（各需3张：workshop/product-02/product-03）
2. 图片放好后更新Supabase的images/product_images数组
3. 提交到silkbridge目录的git（remote是pearlgate仓库）触发Vercel部署
4. 注意：silkbridge目录有独立git仓库指向github.com/ghz98315/pearlgate，部署推送在此目录操作
```
