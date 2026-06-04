-- Alternative migration approach: Temporarily disable RLS
-- Run this BEFORE running the migration script

ALTER TABLE public.blog_posts DISABLE ROW LEVEL SECURITY;

-- After migration is complete, run this to re-enable RLS:
-- ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
