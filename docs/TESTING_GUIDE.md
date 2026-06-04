# 🧪 博客管理系统测试指南

## 📋 测试清单

### 第一部分：数据迁移（必须先完成）

#### 1. 运行数据迁移脚本

在本地终端执行：
```bash
cd silkbridge
node migrate-blog-data.mjs
```

**预期结果：**
```
Starting migration of 3 blog posts...

✓ Migrated: How to Find Reliable EV Charging Suppliers in China
✓ Migrated: CCS1 vs CCS2: Key Differences for EV Charging Buyers
✓ Migrated: What Is NACS? Tesla's Connector Becomes North America's Standard

✅ Migration complete!
```

**如果出错：**
- 检查 `.env.local` 中的环境变量
- 确认 Supabase 表已创建
- 查看错误信息（可能是 RLS 权限问题）

---

### 第二部分：博客前端测试

#### 2. 测试博客列表页

**访问：** `https://your-domain.com/blog`

**测试项：**
- [ ] 页面正常加载
- [ ] 显示 3 篇博客文章（迁移后）
- [ ] 文章标题、描述、分类显示正确
- [ ] 文章封面图片正常显示
- [ ] 日期和阅读时间显示正确
- [ ] 响应式布局正常（调整浏览器窗口大小）

#### 3. 测试搜索功能 🔍

在博客列表页：

**测试 A：关键词搜索**
1. 在搜索框输入 "NACS"
2. 按 Enter 或等待自动过滤
3. ✅ 应该只显示包含 "NACS" 的文章
4. ✅ 关键词应该高亮显示（黄色背景）
5. ✅ 显示 "找到 X 篇文章 包含 'NACS'"

**测试 B：分类筛选**
1. 点击 "EV Charging Basics" 分类标签
2. ✅ 只显示该分类的文章
3. ✅ 标签变为蓝色（选中状态）
4. 点击 "全部" 返回所有文章
5. ✅ 所有文章重新显示

**测试 C：组合搜索**
1. 选择一个分类
2. 再输入搜索关键词
3. ✅ 同时应用两个筛选条件
4. 点击搜索框的 X 按钮清除搜索
5. ✅ 保持分类筛选

**测试 D：空结果**
1. 输入不存在的关键词（如 "zzzzz"）
2. ✅ 显示空状态插图和提示
3. ✅ 显示 "清除筛选" 按钮
4. 点击清除按钮
5. ✅ 返回所有文章

#### 4. 测试博客详情页

**访问：** 点击任意博客文章

**测试项：**
- [ ] 文章内容正确显示
- [ ] Markdown 格式正确渲染（标题、列表、粗体等）
- [ ] 封面图片显示
- [ ] 阅读进度条（顶部）随滚动变化
- [ ] "Back to all articles" 链接可用
- [ ] CTA 区域显示正常
- [ ] Email 订阅表单显示

---

### 第三部分：管理后台测试

#### 5. 测试登录页面

**访问：** `https://your-domain.com/admin`

**测试 A：错误密码**
1. 输入错误密码
2. 点击"登录"
3. ✅ 显示红色错误提示："密码错误，请重试"
4. ✅ 不跳转页面

**测试 B：正确密码**
1. 输入 `.env` 中配置的 `ADMIN_PASSWORD`
2. 点击"登录"
3. ✅ 自动跳转到 `/admin/blog`

#### 6. 测试博客管理列表

**访问：** `https://your-domain.com/admin/blog`

**测试项：**
- [ ] 显示所有博客文章表格
- [ ] 显示文章标题、分类、日期、状态
- [ ] "已发布" 标签为绿色
- [ ] "查看博客" 按钮可点击
- [ ] "新建博客" 按钮可点击

#### 7. 测试创建新博客 ✍️

点击 "新建博客" 按钮

**测试 A：表单自动功能**
1. 在"标题"输入：`Test Blog Post`
2. ✅ Slug 自动生成：`test-blog-post`
3. 修改标题不影响 slug（因为是新建）

**测试 B：Markdown 编辑器**
1. 在正文区域输入：
   ```markdown
   ## 这是标题
   
   这是段落文字。
   
   - 列表项 1
   - 列表项 2
   
   **粗体** 和 *斜体*
   ```
2. 点击"预览"标签
3. ✅ Markdown 正确渲染
4. ✅ 标题、列表、粗体斜体都正确显示
5. 点击"编辑"返回编辑模式

**测试 C：图片上传**

*方法 1：上传本地图片*
1. 点击"点击上传图片"区域
2. 选择一张图片（<5MB）
3. ✅ 显示"上传中..."
4. ✅ 上传成功提示
5. ✅ 图片 URL 自动填充
6. ✅ 右侧显示预览

*方法 2：使用外部 URL*
1. 在图片 URL 输入框输入：
   ```
   https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80
   ```
2. ✅ 右侧显示预览

*错误测试：*
1. 尝试上传 >5MB 的图片
2. ✅ 显示 "文件太大！最大支持 5MB"
3. 尝试上传非图片文件
4. ✅ 显示错误提示

**测试 D：完成创建**
1. 填写所有必填字段：
   - 标题：`Test Blog Post`
   - Slug：`test-blog-post`
   - 描述：`This is a test blog post`
   - 正文：（任意 Markdown 内容）
   - 图片：（上传或 URL）
   - 日期：今天
   - 阅读时间：`5 min read`
   - 分类：`Product Guide`
2. 勾选"发布"
3. 点击"创建"
4. ✅ 显示 "✅ 博客创建成功！"
5. ✅ 表单关闭
6. ✅ 表格中显示新文章

**测试 E：创建草稿**
1. 再次点击"新建博客"
2. 填写基本信息
3. **取消勾选**"发布"
4. 点击"创建"
5. ✅ 状态显示为 "草稿"（黄色标签）

#### 8. 测试编辑博客 ✏️

在表格中点击某篇文章的"编辑"按钮

**测试项：**
1. ✅ 表单打开，所有字段预填充
2. ✅ 标题、内容、图片等都正确显示
3. 修改标题为：`Updated Test Post`
4. ✅ Slug **不自动变化**（编辑模式保护 URL）
5. 修改正文内容
6. 点击"更新"
7. ✅ 显示 "✅ 博客更新成功！"
8. ✅ 表格中内容已更新

**测试发布/取消发布：**
1. 编辑一篇草稿文章
2. 勾选"发布"
3. 点击"更新"
4. ✅ 状态变为 "已发布"（绿色）

#### 9. 测试删除博客 🗑️

点击某篇文章的"删除"按钮

**测试项：**
1. ✅ 弹出确认对话框："确定要删除「xxx」吗？此操作无法撤销。"
2. 点击"取消"
3. ✅ 不删除，对话框关闭
4. 再次点击"删除"，点击"确定"
5. ✅ 显示 "✅ 删除成功！"
6. ✅ 文章从表格中消失

---

### 第四部分：前后端联动测试

#### 10. 测试发布流程

**完整流程：**
1. 在管理后台创建新博客（发布状态）
2. 访问 `/blog` 博客列表
3. ✅ 新文章出现在列表中
4. 点击文章进入详情页
5. ✅ 内容正确显示

**草稿测试：**
1. 在管理后台创建草稿（未发布）
2. 访问 `/blog` 博客列表
3. ✅ 草稿**不显示**在前端
4. 在管理后台将草稿发布
5. 刷新 `/blog`
6. ✅ 文章现在显示了

#### 11. 测试搜索新文章

1. 在管理后台创建一篇标题包含 "Tesla" 的文章
2. 访问 `/blog`
3. 在搜索框输入 "Tesla"
4. ✅ 新文章出现在搜索结果中
5. ✅ "Tesla" 高亮显示

---

### 第五部分：SEO 测试

#### 12. 测试 Sitemap

**访问：** `https://your-domain.com/sitemap.xml`

**测试项：**
- [ ] 页面正常加载（显示 XML）
- [ ] 包含首页 URL
- [ ] 包含 `/blog` URL
- [ ] 包含所有已发布博客文章的 URL
- [ ] 每个 URL 有 `lastmod`（最后修改时间）
- [ ] 每个 URL 有 `changefreq` 和 `priority`

#### 13. 测试 robots.txt

**访问：** `https://your-domain.com/robots.txt`

**测试项：**
- [ ] 页面正常加载
- [ ] 包含 `User-agent: *`
- [ ] 包含 `Disallow: /admin/`
- [ ] 包含 `Disallow: /api/`
- [ ] 包含 Sitemap URL

#### 14. 测试 SEO Meta 标签

**访问：** 任意博客文章页面

**操作：**
1. 右键 → "查看网页源代码"
2. 搜索以下标签：

**Open Graph 标签：**
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:type" content="article">
<meta property="og:url" content="...">
```

**Twitter Card 标签：**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

**JSON-LD 结构化数据：**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  ...
}
</script>
```

✅ 所有标签都应该存在且内容正确

#### 15. 测试社交分享预览

**Facebook 调试工具：**
1. 访问：https://developers.facebook.com/tools/debug/
2. 输入博客文章 URL
3. 点击"调试"
4. ✅ 显示正确的标题、描述、图片

**Twitter Card 验证器：**
1. 访问：https://cards-dev.twitter.com/validator
2. 输入博客文章 URL
3. ✅ 显示正确的卡片预览

---

### 第六部分：响应式和性能测试

#### 16. 移动端测试 📱

**操作：**
1. 打开浏览器开发者工具（F12）
2. 切换到移动设备视图
3. 测试以下页面：

**博客列表：**
- [ ] 布局变为单列
- [ ] 搜索框正常
- [ ] 分类标签可滚动/换行
- [ ] 触摸友好

**博客详情：**
- [ ] 内容自适应宽度
- [ ] 图片响应式
- [ ] 阅读进度条显示

**管理后台：**
- [ ] 表单可用
- [ ] 表格横向滚动
- [ ] 按钮大小适中

#### 17. 性能测试 ⚡

**使用 Chrome DevTools：**
1. 打开 Lighthouse（F12 → Lighthouse）
2. 选择 "Performance" 和 "SEO"
3. 运行测试
4. 检查分数：
   - Performance: 目标 >80
   - SEO: 目标 >90

---

## 🐛 常见问题排查

### 问题 1：博客列表为空
**检查：**
- 数据迁移是否成功？
- 浏览器控制台有错误吗？
- Supabase 中 `blog_posts` 表有数据吗？

### 问题 2：图片上传失败
**检查：**
- Supabase Storage bucket 已创建？
- Storage policies 配置正确？
- 文件大小 <5MB？
- 文件格式支持（JPEG, PNG, WebP, GIF）？

### 问题 3：无法登录管理后台
**检查：**
- `ADMIN_PASSWORD` 环境变量设置正确？
- Vercel 部署后重新部署了吗？（环境变量更改需要重新部署）
- 浏览器控制台有错误吗？

### 问题 4：搜索不工作
**检查：**
- JavaScript 是否启用？
- 浏览器控制台有错误吗？
- 尝试刷新页面

### 问题 5：Sitemap 404
**检查：**
- 访问 `/sitemap.xml`（不是 `/sitemap`）
- 检查构建日志是否有错误
- 确认 `src/app/sitemap.ts` 文件存在

---

## ✅ 测试完成检查清单

完成所有测试后，确认：

- [ ] 数据迁移成功
- [ ] 博客列表显示正常
- [ ] 搜索功能正常
- [ ] 分类筛选正常
- [ ] 博客详情页正常
- [ ] 管理后台可登录
- [ ] 创建博客成功
- [ ] 编辑博客成功
- [ ] 删除博客成功
- [ ] 图片上传成功
- [ ] Markdown 预览正常
- [ ] 草稿功能正常
- [ ] Sitemap 可访问
- [ ] robots.txt 可访问
- [ ] SEO meta 标签正确
- [ ] 社交分享预览正确
- [ ] 移动端响应式正常
- [ ] 性能分数合格

---

## 🎉 测试完成！

如果所有测试都通过，恭喜你！博客管理系统已经成功部署并正常运行。

**接下来可以：**
1. 开始创建真实的博客内容
2. 配置 Google Search Console
3. 分享博客文章到社交媒体
4. 监控网站性能和流量

有问题随时问我！
