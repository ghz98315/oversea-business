# Supabase 博客系统设置指南

## 第一步：在 Supabase 中执行 SQL

1. 登录 [Supabase Dashboard](https://supabase.com/dashboard)
2. 选择你的项目
3. 进入 **SQL Editor**
4. 依次执行以下两个 SQL 文件：

### 1. 创建数据库表

复制并执行 `docs/supabase_blog_schema.sql` 的内容

### 2. 创建 Storage Bucket

复制并执行 `docs/supabase_storage_setup.sql` 的内容

## 第二步：迁移现有博客数据

执行迁移脚本将现有的博客文章导入 Supabase：

```bash
cd silkbridge
node migrate-blog-data.mjs
```

**注意**：确保你的 `.env.local` 文件包含以下环境变量：
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 第三步：访问博客管理后台

启动开发服务器后，访问：

```
http://localhost:3000/admin/blog
```

## 功能说明

### 博客管理后台 (`/admin/blog`)

- ✅ 查看所有博客文章列表
- ✅ 创建新博客文章
- ✅ 编辑现有博客文章
- ✅ 删除博客文章
- ✅ 上传博客封面图片到 Supabase Storage
- ✅ 支持草稿状态（未发布）
- ✅ Markdown 内容编辑

### 前端博客页面

- ✅ `/blog` - 显示所有已发布的博客
- ✅ `/blog/[slug]` - 显示单篇博客文章
- ✅ 从 Supabase 实时读取数据

## API 路由

### 博客 CRUD

- `GET /api/blog` - 获取所有博客文章
  - 查询参数：`slug` (获取单篇), `published` (筛选发布状态)
- `POST /api/blog` - 创建新博客文章
- `PUT /api/blog/[id]` - 更新博客文章
- `DELETE /api/blog/[id]` - 删除博客文章

### 图片上传

- `POST /api/upload-image` - 上传图片到 Supabase Storage
  - 接受 `multipart/form-data` 格式
  - 支持：JPEG, PNG, WebP, GIF
  - 最大文件大小：5MB
- `DELETE /api/upload-image?path=xxx` - 删除图片

## 数据库结构

### `blog_posts` 表

| 字段 | 类型 | 说明 |
|------|------|------|
| id | UUID | 主键 |
| slug | TEXT | URL 友好的唯一标识符 |
| title | TEXT | 标题 |
| description | TEXT | 描述 |
| content | TEXT | 正文（Markdown） |
| image | TEXT | 封面图片 URL |
| date | DATE | 发布日期 |
| read_time | TEXT | 阅读时间（如 "5 min read"） |
| category | TEXT | 分类 |
| published | BOOLEAN | 是否发布 |
| created_at | TIMESTAMP | 创建时间 |
| updated_at | TIMESTAMP | 更新时间 |

### Storage Bucket: `blog-images`

- 公开访问（public）
- 存储博客封面图片和文章内图片
- 路径格式：`blog/{timestamp}-{random}.{ext}`

## 安全说明

### Row Level Security (RLS)

已启用 RLS 并配置以下策略：

1. **公开读取**：所有人都可以读取已发布的博客文章
2. **认证用户管理**：只有登录用户可以创建/编辑/删除博客

**注意**：当前 API 路由使用 `NEXT_PUBLIC_SUPABASE_ANON_KEY`，这意味着任何人都可以调用 API。如果需要保护管理功能，应该：

1. 添加身份验证系统（Supabase Auth）
2. 在 API 路由中验证用户身份
3. 或者使用 Supabase 的 Service Role Key（服务端）

## 后续改进建议

1. **富文本编辑器**：集成 TipTap、Quill 或 React Markdown Editor
2. **身份验证**：添加 Supabase Auth 保护管理后台
3. **图片优化**：自动压缩和优化上传的图片
4. **SEO 优化**：添加 Open Graph 元标签
5. **草稿预览**：允许预览草稿文章
6. **标签系统**：添加标签功能
7. **搜索功能**：全文搜索博客内容

## 故障排除

### 无法连接 Supabase

检查 `.env.local` 文件中的环境变量是否正确。

### 图片上传失败

1. 确认 Storage bucket `blog-images` 已创建
2. 确认 Storage policies 已正确配置
3. 检查文件大小是否超过 5MB
4. 检查文件类型是否支持

### 博客页面为空

1. 确认数据库表已创建
2. 确认已执行数据迁移脚本
3. 检查浏览器控制台的错误信息
