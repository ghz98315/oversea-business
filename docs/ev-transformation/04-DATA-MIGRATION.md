# Phase 4: 数据层改造 - 详细方案

**执行时间：** Week 2-3  
**预计工时：** 8-10小时  
**目标：** 供应商数据切换到EV领域

---

## 📋 任务清单

- [ ] 4.1 搜集EV供应商数据
- [ ] 4.2 下载供应商图片
- [ ] 4.3 Supabase表结构调整
- [ ] 4.4 数据导入Supabase
- [ ] 4.5 前端页面适配
- [ ] 4.6 测试验证

---

## 4.1 搜集EV供应商数据

### 目标

- 当前：7家东莞模具厂
- 目标：5-7家EV充电枪供应商（珠三角）

### 搜索渠道

1. **阿里巴巴国际站**
   - 搜索词："EV charging cable manufacturer"
   - 搜索词："EV charger factory China"
   - 搜索词："Type 2 charging cable supplier"
   - 筛选：Gold Supplier, Trade Assurance

2. **Google搜索**
   - "Shenzhen EV charger factory"
   - "Dongguan EV charging cable manufacturer"
   - "Guangzhou EV connector supplier"

3. **Made-in-China.com**
   - 分类：Auto Electronics > EV Charging
   - 筛选：Verified Manufacturer

4. **行业展会名录**
   - Canton Fair参展商
   - Shenzhen CPSE参展商

### 筛选标准

**必须满足：**
- ✅ 位于珠三角（深圳/东莞/广州/惠州）
- ✅ 有官网（中英文）
- ✅ 有UL/CE/TUV认证（至少一个）
- ✅ 有工厂照片（workshop/production line）
- ✅ 有英文沟通能力
- ✅ 有出口经验（海外客户案例）

**加分项：**
- ⭐ 有UL2251认证（北美市场）
- ⭐ 有IEC 62196认证（国际标准）
- ⭐ 有Tesla/ChargePoint等品牌客户
- ⭐ 工厂规模200+员工
- ⭐ 成立5年以上

---

### 数据收集清单

**每家供应商需要收集：**

```
基本信息：
- 公司名称（中文）
- 公司名称（英文）
- 官网URL
- 成立年份
- 员工数量
- 工厂位置（城市+区）

产品信息：
- 主营产品（cable/adapter/charger/connector）
- 产品分类（勾选适用的）
- 连接器类型（Type 1/Type 2/CCS1/CCS2/CHAdeMO/NACS）

认证信息：
- 认证列表（UL2251, CE, TUV, CCC, FCC, RoHS等）
- 认证证书编号（如有）

市场信息：
- 主要出口市场（North America/Europe/Australia/Asia）
- 主要客户类型（OEM/Distributor/Installer）
- MOQ范围（100-500 / 500-1000 / 1000+）

生产信息：
- 月产能
- 交货周期（15-25天 / 25-35天）
- OEM能力（Yes/No）

图片：
- 工厂外观 (factory-exterior.jpg)
- 车间环境 (workshop.jpg)
- 生产线 (production-line.jpg)
- 产品图1 (product-01.jpg)
- 产品图2 (product-02.jpg)
```

---

### 供应商数据示例

**供应商1 - 示例：**

```json
{
  "id": "GD-EV-001",
  "name_en": "Shenzhen EV-Tech Electronics Co., Ltd.",
  "name_cn": "深圳市电动科技电子有限公司",
  "slug": "shenzhen-evtech",
  "focus_area": "EV Charging",
  "location": "Shenzhen, Guangdong",
  "district": "Bao'an District",
  "founded_year": 2015,
  "employees": "200-300",
  "website": "https://www.example-evtech.com",
  
  "product_categories": ["cable", "adapter", "portable-charger"],
  "connector_types": ["Type 1", "Type 2", "CCS1", "CCS2"],
  
  "ev_certifications": ["UL2251", "CE", "TUV", "CCC", "FCC"],
  "certification_details": {
    "UL2251": "E123456",
    "CE": "Verified",
    "TUV": "TUV-CN-12345"
  },
  
  "main_markets": ["North America", "Europe", "Australia"],
  "client_types": ["OEM", "Distributor", "Installer"],
  "moq_range": "100-500 units",
  "lead_time": "15-25 days",
  "monthly_capacity": "50,000 units",
  "oem_capability": true,
  
  "images": [
    "/suppliers/shenzhen-evtech-factory.jpg",
    "/suppliers/shenzhen-evtech-workshop.jpg",
    "/suppliers/shenzhen-evtech-production.jpg",
    "/suppliers/shenzhen-evtech-product-01.jpg",
    "/suppliers/shenzhen-evtech-product-02.jpg"
  ],
  
  "description": "Specialized EV charging cable and adapter manufacturer with UL2251 certification. Serving North American and European markets with Type 1, Type 2, and CCS charging solutions.",
  
  "specialties": [
    "UL2251 certified charging cables",
    "Custom cable length and amperage",
    "OEM branding and packaging",
    "Fast sample turnaround (3-5 days)"
  ],
  
  "contact": {
    "email": "sales@example-evtech.com",
    "phone": "+86-755-1234-5678",
    "wechat": "evtech_sales"
  }
}
```

---

## 4.2 下载供应商图片

### 图片规范

**命名格式：**
```
{company-slug}-{type}.jpg

例如：
shenzhen-evtech-factory.jpg
shenzhen-evtech-workshop.jpg
shenzhen-evtech-production.jpg
shenzhen-evtech-product-01.jpg
shenzhen-evtech-product-02.jpg
```

**存放路径：**
```
silkbridge/public/suppliers/
```

**图片要求：**
- 尺寸：1200x800px（3:2比例）
- 格式：JPG
- 质量：优化后 <200KB
- 内容：真实工厂照片（不用stock图）

**图片类型：**
1. **factory-exterior.jpg** - 工厂外观
2. **workshop.jpg** - 车间环境
3. **production-line.jpg** - 生产线特写
4. **product-01.jpg** - 主打产品
5. **product-02.jpg** - 其他产品

### 图片下载流程

```bash
# 1. 从供应商官网下载原图
# 2. 使用图片压缩工具优化
# 3. 重命名为规范格式
# 4. 放入 silkbridge/public/suppliers/

# 批量优化示例（使用ImageMagick）
mogrify -resize 1200x800^ -gravity center -extent 1200x800 -quality 85 *.jpg
```

---

## 4.3 Supabase表结构调整

### 新增字段

```sql
-- 供应商表新增EV相关字段
ALTER TABLE suppliers 
ADD COLUMN IF NOT EXISTS focus_area TEXT DEFAULT 'EV Charging',
ADD COLUMN IF NOT EXISTS ev_certifications TEXT[],
ADD COLUMN IF NOT EXISTS certification_details JSONB,
ADD COLUMN IF NOT EXISTS connector_types TEXT[],
ADD COLUMN IF NOT EXISTS product_categories TEXT[],
ADD COLUMN IF NOT EXISTS main_markets TEXT[],
ADD COLUMN IF NOT EXISTS client_types TEXT[],
ADD COLUMN IF NOT EXISTS moq_range TEXT,
ADD COLUMN IF NOT EXISTS lead_time TEXT,
ADD COLUMN IF NOT EXISTS monthly_capacity TEXT,
ADD COLUMN IF NOT EXISTS oem_capability BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS specialties TEXT[],
ADD COLUMN IF NOT EXISTS district TEXT;

-- 添加索引
CREATE INDEX IF NOT EXISTS idx_suppliers_focus_area ON suppliers(focus_area);
CREATE INDEX IF NOT EXISTS idx_suppliers_product_categories ON suppliers USING GIN(product_categories);
CREATE INDEX IF NOT EXISTS idx_suppliers_connector_types ON suppliers USING GIN(connector_types);
```

### 创建产品分类表

```sql
-- 产品分类表
CREATE TABLE IF NOT EXISTS product_categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  seo_keywords TEXT[],
  order_index INT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 插入EV产品分类
INSERT INTO product_categories (id, name, slug, description, icon, seo_keywords, order_index) VALUES
('ev-cable', 'EV Charging Cable', 'ev-charging-cable', 'Type 1, Type 2, CCS, CHAdeMO charging cables for home and public charging', 'cable', ARRAY['EV cable', 'charging cable', 'Type 2 cable', 'CCS cable'], 1),
('ev-adapter', 'EV Adapter', 'ev-adapter', 'Charging adapters and converters for different plug standards', 'plug', ARRAY['EV adapter', 'NACS adapter', 'Tesla adapter'], 2),
('portable-charger', 'Portable EV Charger', 'portable-ev-charger', 'Level 1 and Level 2 portable EVSE for home and travel', 'battery', ARRAY['portable charger', 'EVSE', 'Level 2 charger'], 3),
('ev-connector', 'EV Connector', 'ev-connector', 'Charging plugs, sockets, and inlet components', 'zap', ARRAY['EV connector', 'Type 2 plug', 'CCS connector'], 4),
('accessories', 'Charging Accessories', 'charging-accessories', 'Cable organizers, wall mounts, protective cases', 'box', ARRAY['cable organizer', 'wall mount'], 5)
ON CONFLICT (id) DO NOTHING;
```

### Blog文章表调整

```sql
-- Blog文章表新增分类
ALTER TABLE blog_posts
ADD COLUMN IF NOT EXISTS category TEXT,
ADD COLUMN IF NOT EXISTS seo_keywords TEXT[],
ADD COLUMN IF NOT EXISTS reading_time INT,
ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;

-- 添加索引
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured);

-- 创建分类枚举（可选）
CREATE TYPE blog_category AS ENUM (
  'ev-basics',
  'supplier-verification',
  'china-manufacturing',
  'oem-guide',
  'certifications'
);
```

---

## 4.4 数据导入Supabase

### 方式1：使用Supabase Dashboard

1. 登录 Supabase Dashboard
2. 进入 Table Editor
3. 选择 `suppliers` 表
4. 点击 "Insert row"
5. 填入数据
6. 保存

### 方式2：使用SQL脚本

```sql
-- 插入供应商数据示例
INSERT INTO suppliers (
  id, name_en, name_cn, slug, focus_area, location, district,
  founded_year, employees, website,
  product_categories, connector_types,
  ev_certifications, certification_details,
  main_markets, client_types,
  moq_range, lead_time, monthly_capacity, oem_capability,
  images, description, specialties
) VALUES (
  'GD-EV-001',
  'Shenzhen EV-Tech Electronics Co., Ltd.',
  '深圳市电动科技电子有限公司',
  'shenzhen-evtech',
  'EV Charging',
  'Shenzhen, Guangdong',
  'Bao''an District',
  2015,
  '200-300',
  'https://www.example-evtech.com',
  ARRAY['cable', 'adapter', 'portable-charger'],
  ARRAY['Type 1', 'Type 2', 'CCS1', 'CCS2'],
  ARRAY['UL2251', 'CE', 'TUV', 'CCC', 'FCC'],
  '{"UL2251": "E123456", "CE": "Verified", "TUV": "TUV-CN-12345"}'::jsonb,
  ARRAY['North America', 'Europe', 'Australia'],
  ARRAY['OEM', 'Distributor', 'Installer'],
  '100-500 units',
  '15-25 days',
  '50,000 units',
  true,
  ARRAY[
    '/suppliers/shenzhen-evtech-factory.jpg',
    '/suppliers/shenzhen-evtech-workshop.jpg',
    '/suppliers/shenzhen-evtech-production.jpg',
    '/suppliers/shenzhen-evtech-product-01.jpg',
    '/suppliers/shenzhen-evtech-product-02.jpg'
  ],
  'Specialized EV charging cable and adapter manufacturer with UL2251 certification. Serving North American and European markets with Type 1, Type 2, and CCS charging solutions.',
  ARRAY[
    'UL2251 certified charging cables',
    'Custom cable length and amperage',
    'OEM branding and packaging',
    'Fast sample turnaround (3-5 days)'
  ]
);
```

### 方式3：使用TypeScript脚本

```typescript
// scripts/import-ev-suppliers.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const evSuppliers = [
  {
    id: 'GD-EV-001',
    name_en: 'Shenzhen EV-Tech Electronics Co., Ltd.',
    name_cn: '深圳市电动科技电子有限公司',
    slug: 'shenzhen-evtech',
    focus_area: 'EV Charging',
    location: 'Shenzhen, Guangdong',
    district: "Bao'an District",
    founded_year: 2015,
    employees: '200-300',
    website: 'https://www.example-evtech.com',
    product_categories: ['cable', 'adapter', 'portable-charger'],
    connector_types: ['Type 1', 'Type 2', 'CCS1', 'CCS2'],
    ev_certifications: ['UL2251', 'CE', 'TUV', 'CCC', 'FCC'],
    certification_details: {
      UL2251: 'E123456',
      CE: 'Verified',
      TUV: 'TUV-CN-12345'
    },
    main_markets: ['North America', 'Europe', 'Australia'],
    client_types: ['OEM', 'Distributor', 'Installer'],
    moq_range: '100-500 units',
    lead_time: '15-25 days',
    monthly_capacity: '50,000 units',
    oem_capability: true,
    images: [
      '/suppliers/shenzhen-evtech-factory.jpg',
      '/suppliers/shenzhen-evtech-workshop.jpg',
      '/suppliers/shenzhen-evtech-production.jpg',
      '/suppliers/shenzhen-evtech-product-01.jpg',
      '/suppliers/shenzhen-evtech-product-02.jpg'
    ],
    description: 'Specialized EV charging cable and adapter manufacturer...',
    specialties: [
      'UL2251 certified charging cables',
      'Custom cable length and amperage',
      'OEM branding and packaging',
      'Fast sample turnaround (3-5 days)'
    ]
  },
  // ... 更多供应商
];

async function importSuppliers() {
  for (const supplier of evSuppliers) {
    const { data, error } = await supabase
      .from('suppliers')
      .upsert(supplier);
    
    if (error) {
      console.error(`Error importing ${supplier.name_en}:`, error);
    } else {
      console.log(`✓ Imported ${supplier.name_en}`);
    }
  }
}

importSuppliers();
```

---

## 4.5 前端页面适配

### 更新Suppliers列表页

**文件：** `silkbridge/src/app/suppliers/page.tsx`

**需要调整：**
1. 筛选器：按产品分类筛选
2. 显示：EV认证标签
3. 显示：连接器类型
4. 排序：按认证/产能排序

### 更新Supplier详情页

**文件：** `silkbridge/src/app/suppliers/[id]/page.tsx`

**需要显示：**
- EV认证列表（带图标）
- 连接器类型
- 产品分类
- 主要市场
- MOQ范围
- 交货周期
- OEM能力
- 专长列表

---

## 4.6 测试验证

### 测试清单

```bash
# 1. 数据库测试
- [ ] 所有字段正确导入
- [ ] 图片路径正确
- [ ] 数组字段格式正确
- [ ] JSONB字段可查询

# 2. 前端测试
- [ ] Suppliers列表页显示正常
- [ ] 筛选功能正常
- [ ] 详情页显示完整
- [ ] 图片加载正常
- [ ] 响应式设计正常

# 3. SEO测试
- [ ] Meta标签包含EV关键词
- [ ] 图片alt text正确
- [ ] 结构化数据正确

# 4. 性能测试
- [ ] 页面加载速度 <3秒
- [ ] 图片优化正确
- [ ] 无控制台错误
```

---

## ✅ Phase 4 完成标准

1. ✅ 搜集5-7家EV供应商数据
2. ✅ 下载并优化所有图片
3. ✅ Supabase表结构调整完成
4. ✅ 数据成功导入
5. ✅ 前端页面适配完成
6. ✅ 测试验证通过
7. ✅ 部署到生产环境

---

**下一步：** 持续优化和内容输出（参考 `05-EXECUTION-CHECKLIST.md`）
