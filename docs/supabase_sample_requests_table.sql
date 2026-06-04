-- 创建 sample_requests 表
CREATE TABLE IF NOT EXISTS sample_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reference_id TEXT NOT NULL UNIQUE,

  -- 联系信息
  full_name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT,
  country TEXT NOT NULL,
  target_market TEXT NOT NULL,

  -- 产品信息
  product_name TEXT NOT NULL,
  product_category TEXT NOT NULL,
  product_url TEXT,

  -- 项目详情
  charging_standard TEXT,
  certifications_needed TEXT[], -- 数组类型
  intended_use TEXT,
  estimated_volume TEXT,
  oem_requirements TEXT,
  message TEXT,

  -- 元数据
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- 状态跟踪
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'quoted', 'closed')),
  notes TEXT
);

-- 创建索引以提高查询性能
CREATE INDEX idx_sample_requests_reference_id ON sample_requests(reference_id);
CREATE INDEX idx_sample_requests_email ON sample_requests(email);
CREATE INDEX idx_sample_requests_created_at ON sample_requests(created_at DESC);
CREATE INDEX idx_sample_requests_status ON sample_requests(status);

-- 创建更新时间触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_sample_requests_updated_at
  BEFORE UPDATE ON sample_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 添加注释
COMMENT ON TABLE sample_requests IS 'Request Sample 表单提交记录';
COMMENT ON COLUMN sample_requests.reference_id IS 'Reference ID (PG-YYYYMMDD-HHMMSS)';
COMMENT ON COLUMN sample_requests.status IS '状态: pending=待处理, contacted=已联系, quoted=已报价, closed=已关闭';
