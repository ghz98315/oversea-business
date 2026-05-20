# PearlGate 项目进度表 (Checkpoint)

**更新日期：** 2026-05-20
**当前阶段：** Week 1 完成，进入 Week 2 获客启动

---

## 仓库信息

| 仓库 | 地址 | 最新 commit |
|------|------|-------------|
| business_discuss | github.com/ghz98315/oversea-business | f66bd11 |
| pearlgate | github.com/ghz98315/pearlgate (private) | e786308 |

---

## 已完成功能

### 网站核心页面
- [x] Landing Page（Hero / PainPoints / DualProduct / StatsBar / DatabasePreview / Services / WhyGuangdong / Process / Trust / FAQ / EmailCapture / CTA）
- [x] About 页面（个人故事 / 核心优势 / 产业带地图 / 工厂画廊）
- [x] Blog 系统 + 5 篇 SEO 文章
- [x] Pricing 页面（Free / Pro / Agency 三档）
- [x] Suppliers 展示页（5 家工厂数据）
- [x] Quote 询价表单（含邮件通知）
- [x] Login 页面

### Blog 文章清单
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

*下次继续：绑定域名 → 获客内容准备 → Supabase 迁移*
