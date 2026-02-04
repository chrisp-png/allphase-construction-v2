/*
  # Fix Security Issues
  
  1. Policy Consolidation
    - Consolidate multiple SELECT policies on projects table into a single policy
    - Remove redundant policies that cause "multiple permissive policies" warning
    
  2. Function Security
    - Fix search_path for update_updated_at_column function to be immutable
    
  3. Index Usage Note
    - Indexes flagged as "unused" are actually needed for query performance
    - They may show as unused because:
      * Database is new with limited query history
      * Queries haven't been executed enough times to register usage
    - All indexes serve specific query patterns and should be retained
    
  Note: Auth DB connection strategy must be changed in Supabase Dashboard:
  Settings → Database → Connection Pooling → Change from fixed to percentage-based
*/

-- Drop the existing SELECT policies on projects table
DROP POLICY IF EXISTS "Anyone can view published projects" ON public.projects;
DROP POLICY IF EXISTS "Authenticated users can view all projects" ON public.projects;

-- Create a single consolidated SELECT policy
CREATE POLICY "View projects based on role"
  ON public.projects
  FOR SELECT
  TO public
  USING (
    -- Anonymous users can only see published projects
    (auth.role() = 'anon' AND is_published = true)
    OR
    -- Authenticated users can see all projects
    (auth.role() = 'authenticated')
  );

-- Fix the update_updated_at_column function to have immutable search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Verify indexes exist and are properly configured
-- These indexes ARE needed for query performance:

-- Blog posts indexes (used by blog index and post pages)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE indexname = 'idx_blog_posts_slug'
  ) THEN
    CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE indexname = 'idx_blog_posts_published_date'
  ) THEN
    CREATE INDEX idx_blog_posts_published_date ON public.blog_posts(published_date DESC);
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE indexname = 'idx_blog_posts_published'
  ) THEN
    CREATE INDEX idx_blog_posts_published ON public.blog_posts(published) WHERE published = true;
  END IF;
END $$;

-- Calculator leads indexes (used by admin page)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE indexname = 'idx_calculator_leads_created_at'
  ) THEN
    CREATE INDEX idx_calculator_leads_created_at ON public.calculator_leads(created_at DESC);
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE indexname = 'idx_calculator_leads_email'
  ) THEN
    CREATE INDEX idx_calculator_leads_email ON public.calculator_leads(email);
  END IF;
END $$;

-- Projects indexes (used by projects page and admin)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE indexname = 'idx_projects_display_order'
  ) THEN
    CREATE INDEX idx_projects_display_order ON public.projects(display_order);
  END IF;
END $$;
