-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Policy: Allow public read access to blog images
CREATE POLICY "Allow public read access to blog images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'blog-images');

-- Policy: Allow authenticated users to upload blog images
CREATE POLICY "Allow authenticated users to upload blog images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'blog-images'
    AND auth.role() = 'authenticated'
  );

-- Policy: Allow authenticated users to update blog images
CREATE POLICY "Allow authenticated users to update blog images"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'blog-images'
    AND auth.role() = 'authenticated'
  );

-- Policy: Allow authenticated users to delete blog images
CREATE POLICY "Allow authenticated users to delete blog images"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'blog-images'
    AND auth.role() = 'authenticated'
  );
