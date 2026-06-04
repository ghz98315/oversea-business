# Supabase 博客系统 - 完整设置和使用指南

## ✅ 已完成的功能

### 核心功能
- ✅ Supabase 数据库集成（blog_posts 表）
- ✅ Supabase Storage 图片存储（blog-images bucket）
- ✅ 完整的博客 CRUD API
- ✅ 图片上传和管理
- ✅ Markdown 编辑器（带实时预览）
- ✅ 密码保护的管理后台
- ✅ 响应式 UI 设计
- ✅ 草稿和发布状态管理

---

## 🚀 快速开始

### 1. 配置环境变量

在 `silkbridge/.env.local` 中添加：

```bash
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=你的_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的_anon_key
SUPABASE_SERVICE_ROLE_KEY=你的_service_role_key

# 管理员密码（请修改为强密码！）
ADMIN_PASSWORD=your_secure_password
```

### 2. 执行 SQL 脚本

在 Supabase Dashboard → SQL Editor 中依次执行：

1. `docs/supabase_blog_schema.sql` - 创建数据库表
2. `docs/supabase_storage_setup.sql` - 创建 Storage bucket

### 3. 迁移现有博客数据

有两种方法解决 RLS 权限问题：

#### 方法 A：使用 Service Role Key（推荐）

```bash
# 确保 .env.local 包含 SUPABASE_SERVICE_ROLE_KEY
cd silkbridge
node migrate-blog-data.mjs
```

#### 方法 B：临时禁用 RLS

在 Supabase SQL Editor 执行：
```sql
ALTER TABLE public.blog_posts DISABLE ROW LEVEL SECURITY;
```

运行迁移后重新启用：
```sql
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
```

### 4. 启动开发服务器

```bash
cd silkbridge
npm run dev
```

### 5. 访问管理后台

```
http://localhost:3000/admin
```

使用 `.env.local` 中设置的 `ADMIN_PASSWORD` 登录。

---

## 📖 功能详解

### 管理后台 (`/admin/blog`)

**登录保护**
- 访问 `/admin` 输入密码
- Session 存储认证状态
- 自动跳转到博客管理

**博客列表**
- 查看所有博客（标题、分类、日期、状态）
- 快速编辑和删除
- 发布/草稿状态标识

**创建/编辑博客**
- 标题自动生成 slug
- Markdown 编辑器（编辑/预览双模式）
- 图片上传（拖拽或选择文件）
- 支持外部图片 URL
- 分类选择
- 发布状态切换
- 实时表单验证

**图片上传**
- 支持格式：JPEG, PNG, WebP, GIF
- 最大文件：5MB
- 自动上传到 Supabase Storage
- 返回公开访问 URL
- 实时预览

### Markdown 编辑器

**功能**
- 编辑/预览模式切换
- 语法高亮
- 实时预览渲染
- 支持 GitHub Flavored Markdown

**支持的语法**
```markdown
## 标题 2
### 标题 3

**粗体** 和 *斜体*

- 无序列表
1. 有序列表

`行内代码`

​```
代码块
​```

[链接](https://example.com)

> 引用
```

### 前端博客页面

**博客列表** (`/blog`)
- 从 Supabase 实时读取
- 只显示已发布的文章
- 按日期倒序排列
- 响应式卡片布局

**博客详情** (`/blog/[slug]`)
- 动态路由
- Markdown 渲染
- 阅读进度条
- 相关 CTA 和 Email 订阅

---

## 🗄️ 数据库结构

### `blog_posts` 表

| 字段 | 类型 | 说明 |
|------|------|------|
| id | UUID | 主键 |
| slug | TEXT | URL slug（唯一） |
| title | TEXT | 标题 |
| description | TEXT | 描述 |
| content | TEXT | 正文（Markdown） |
| image | TEXT | 封面图片 URL |
| date | DATE | 发布日期 |
| read_time | TEXT | 阅读时间 |
| category | TEXT | 分类 |
| published | BOOLEAN | 发布状态 |
| created_at | TIMESTAMP | 创建时间 |
| updated_at | TIMESTAMP | 更新时间（自动） |

**索引**
- `slug` - 快速查找
- `date` - 排序
- `published` - 筛选

**RLS 策略**
- 公开读取已发布的文章
- 认证用户可管理所有文章

### Storage: `blog-images`

- 公开访问
- 路径格式：`blog/{timestamp}-{random}.{ext}`
- 支持的格式：JPEG, PNG, WebP, GIF

---

## 🔒 安全说明

### 当前实现

**密码保护**
- 简单的密码认证
- Session storage 存储状态
- 适合个人博客或小团队

**局限性**
- 密码明文比对（服务端）
- Session storage（刷新后需重新登录）
- 无用户管理系统

### 生产环境建议

1. **使用 Supabase Auth**
   - 完整的用户认证系统
   - Email/密码、OAuth 等多种登录方式
   - 更安全的 token 管理

2. **环境变量保护**
   - 永远不要将 `.env.local` 提交到 Git
   - 使用强密码
   - Service Role Key 仅用于服务端

3. **API 路由保护**
   - 添加 API 认证中间件
   - 验证用户身份
   - 限制请求频率

---

## 🎨 UI/UX 优化

### 已实现
- ✅ 加载状态动画
- ✅ 表单验证提示
- ✅ 成功/错误提示
- ✅ 图片上传进度
- ✅ 保存状态指示
- ✅ 响应式设计
- ✅ Markdown 预览
- ✅ 自动 slug 生成
- ✅ 确认删除对话框

### 用户体验
- 标题自动生成 URL slug
- 图片上传实时预览
- Markdown 实时预览
- 平滑滚动到表单
- 友好的错误提示

---

## 📝 使用示例

### 创建新博客

1. 登录管理后台
2. 点击「新建博客」
3. 输入标题（slug 自动生成）
4. 填写描述
5. 使用 Markdown 编辑器编写内容
6. 上传封面图片
7. 选择分类和日期
8. 勾选「发布」或保存为草稿
9. 点击「创建」

### 编辑博客

1. 在列表中点击「编辑」
2. 修改内容
3. 点击「更新」

### 图片管理

**上传新图片**
- 点击上传区域
- 选择图片文件
- 等待上传完成
- URL 自动填充

**使用外部图片**
- 直接输入图片 URL
- 支持任何公开访问的图片

---

## 🚧 后续优化建议

### 短期改进
- [ ] 添加图片列表管理
- [ ] 批量操作（批量删除、发布）
- [ ] 博客搜索功能
- [ ] 标签系统
- [ ] 分类管理

### 中期改进
- [ ] 使用 Supabase Auth 替代简单密码
- [ ] 添加用户角色（管理员、编辑）
- [ ] 图片自动压缩和优化
- [ ] SEO 优化（Open Graph 标签）
- [ ] 博客统计（阅读量、点击量）

### 长期改进
- [ ] 评论系统
- [ ] 相关文章推荐
- [ ] RSS Feed
- [ ] 多语言支持
- [ ] 版本历史和恢复

---

## 🐛 故障排除

### 无法登录管理后台
- 检查 `.env.local` 中的 `ADMIN_PASSWORD`
- 清除浏览器 Session Storage

### 博客列表为空
- 确认数据库表已创建
- 确认已运行数据迁移脚本
- 检查浏览器控制台错误

### 图片上传失败
- 确认 Storage bucket 已创建
- 检查文件大小（最大 5MB）
- 检查文件格式
- 查看 Supabase Dashboard 的 Storage policies

### 数据迁移失败（RLS 错误）
- 使用 Service Role Key
- 或临时禁用 RLS

### API 请求失败
- 检查 Supabase URL 和 API Key
- 查看浏览器 Network 标签
- 检查 Supabase Dashboard 的 API 日志

---

## 📞 支持

如有问题，请检查：
1. Supabase Dashboard 的错误日志
2. 浏览器开发者工具 Console
3. Network 请求状态

---

**🎉 恭喜！你的博客管理系统已经准备就绪。**

访问 `http://localhost:3000/admin` 开始管理你的博客吧！
