# 部署前检查清单

## ✅ 环境变量配置

### Vercel 环境变量
在 Vercel Dashboard → Settings → Environment Variables 中添加：

```bash
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# 管理员密码（生产环境使用强密码！）
ADMIN_PASSWORD=your_strong_password_here

# 可选：Service Role Key（仅用于数据迁移，部署后可删除）
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

**注意事项：**
- ⚠️ 确保使用强密码作为 `ADMIN_PASSWORD`
- ⚠️ 不要将 `.env.local` 提交到 Git
- ⚠️ Service Role Key 仅用于数据迁移，部署后可以移除

## ✅ 代码检查

### 需要更新域名的文件
部署后，将以下文件中的 `https://pearlgate.com` 替换为实际域名：

1. **src/lib/seo.ts** - 第 23 行
   ```typescript
   const fullUrl = `https://your-actual-domain.com${url}`;
   ```

2. **src/app/sitemap.xml/route.ts** - 第 28 行
   ```typescript
   const baseUrl = 'https://your-actual-domain.com';
   ```

3. **public/robots.txt** - 最后一行
   ```txt
   Sitemap: https://your-actual-domain.com/sitemap.xml
   ```

### 构建测试
在部署前先本地测试构建：

```bash
cd silkbridge
npm run build
```

如果构建成功，可以继续部署。

## ✅ Git 提交

### 提交新功能

```bash
cd silkbridge
git add .
git commit -m "feat: 添加博客管理系统和 SEO 优化

- 添加 Supabase 博客数据库和 Storage 集成
- 实现博客管理后台（/admin/blog）
- 添加 Markdown 编辑器（编辑/预览模式）
- 实现图片上传功能
- 添加密码保护的管理后台
- 优化 SEO（Open Graph、Twitter Card、JSON-LD）
- 生成动态 sitemap.xml
- 添加博客搜索和分类筛选功能
- 创建 robots.txt"

git push origin master
```

## ✅ Vercel 部署

### 选项 1：自动部署（推荐）

如果已连接 GitHub 仓库：
1. 推送代码到 GitHub
2. Vercel 自动检测并部署
3. 查看部署日志

### 选项 2：手动部署

```bash
# 安装 Vercel CLI（如果还没有）
npm install -g vercel

# 登录 Vercel
vercel login

# 部署
cd silkbridge
vercel --prod
```

## ✅ 部署后配置

### 1. 数据库迁移
部署成功后，需要迁移博客数据：

```bash
# 方法 A：在本地运行（推荐）
cd silkbridge
node migrate-blog-data.mjs

# 方法 B：在 Vercel 中运行
# 暂时不支持，建议在本地完成迁移
```

### 2. 验证部署

访问以下 URL 检查：
- `https://your-domain.com/blog` - 博客列表
- `https://your-domain.com/admin` - 管理后台登录
- `https://your-domain.com/sitemap.xml` - Sitemap
- `https://your-domain.com/robots.txt` - robots.txt

### 3. Google Search Console

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加网站属性
3. 验证所有权（使用 DNS 或 HTML 文件验证）
4. 提交 sitemap：`https://your-domain.com/sitemap.xml`
5. 请求索引主要页面

### 4. 社交分享测试

**Facebook 调试工具：**
```
https://developers.facebook.com/tools/debug/
```

**Twitter Card 验证：**
```
https://cards-dev.twitter.com/validator
```

**LinkedIn Post Inspector：**
```
https://www.linkedin.com/post-inspector/
```

## ✅ 常见问题

### 构建失败
- 检查所有依赖是否正确安装
- 确保没有 TypeScript 错误
- 查看 Vercel 构建日志

### 环境变量未生效
- 确认在 Vercel Dashboard 中正确设置
- 重新部署触发变量更新
- 检查变量名拼写

### 图片上传失败
- 确认 Supabase Storage bucket 已创建
- 检查 Storage policies 配置
- 确认环境变量正确

### 博客数据为空
- 确认数据库表已创建
- 运行数据迁移脚本
- 检查 RLS 策略

## 📊 性能优化建议

### Vercel 配置优化

创建 `vercel.json`（可选）：
```json
{
  "headers": [
    {
      "source": "/sitemap.xml",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=3600"
        }
      ]
    },
    {
      "source": "/(.*).jpg",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Next.js 配置优化

在 `next.config.ts` 中：
```typescript
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'your-supabase-project.supabase.co'],
    formats: ['image/avif', 'image/webp'],
  },
  // 启用压缩
  compress: true,
  // 静态页面生成
  output: 'standalone',
};
```

## 🔒 安全检查

### 生产环境安全
- ✅ `.env.local` 已加入 `.gitignore`
- ✅ 使用强密码作为 `ADMIN_PASSWORD`
- ✅ Service Role Key 不暴露给客户端
- ✅ API 路由受密码保护
- ✅ RLS 策略正确配置

### 建议改进（可选）
- 使用 Supabase Auth 替代简单密码
- 添加 API 速率限制
- 启用 CORS 保护
- 添加 CSP（Content Security Policy）

## 📈 监控和分析

### 推荐工具
- **Vercel Analytics** - 内置分析
- **Google Analytics** - 流量分析
- **Google Search Console** - SEO 监控
- **Sentry** - 错误追踪（可选）

## ✅ 部署完成检查清单

- [ ] 代码已提交到 Git
- [ ] Vercel 环境变量已配置
- [ ] 部署成功（检查 Vercel Dashboard）
- [ ] 博客数据已迁移
- [ ] 管理后台可访问
- [ ] 博客列表显示正常
- [ ] 搜索功能正常
- [ ] Sitemap 可访问
- [ ] robots.txt 可访问
- [ ] 图片上传测试通过
- [ ] Google Search Console 已配置
- [ ] 社交分享预览测试通过

---

## 🎉 部署成功！

部署完成后，你的博客管理系统就可以正式使用了。

**管理后台地址：**
```
https://your-domain.com/admin
```

**博客地址：**
```
https://your-domain.com/blog
```

祝部署顺利！🚀
