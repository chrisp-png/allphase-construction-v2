/*
  # Create blog_posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each post
      - `title` (text) - Blog post title
      - `slug` (text, unique) - URL-friendly slug for routing
      - `excerpt` (text) - Short preview text for blog cards
      - `content` (text) - Full HTML/markdown content of the post
      - `featured_image` (text) - URL to the featured image
      - `author` (text) - Author name
      - `published_date` (timestamptz) - Publication date
      - `categories` (jsonb) - Array of categories
      - `tags` (jsonb) - Array of tags
      - `meta_title` (text) - SEO meta title
      - `meta_description` (text) - SEO meta description
      - `faqs` (jsonb) - FAQ section data [{question, answer}]
      - `related_post_ids` (jsonb) - Array of related post UUIDs
      - `published` (boolean) - Publication status
      - `view_count` (integer) - Track post views
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access to published posts
    - Add policy for authenticated users to manage all posts (for admin)

  3. Indexes
    - Index on slug for fast lookup
    - Index on published_date for sorting
    - Index on published status
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text NOT NULL,
  author text DEFAULT 'All Phase Construction USA' NOT NULL,
  published_date timestamptz DEFAULT now() NOT NULL,
  categories jsonb DEFAULT '[]'::jsonb,
  tags jsonb DEFAULT '[]'::jsonb,
  meta_title text,
  meta_description text,
  faqs jsonb DEFAULT '[]'::jsonb,
  related_post_ids jsonb DEFAULT '[]'::jsonb,
  published boolean DEFAULT false NOT NULL,
  view_count integer DEFAULT 0 NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Public can read published posts
CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Authenticated users can manage all posts (admin access)
CREATE POLICY "Authenticated users can insert posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_date ON blog_posts(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published) WHERE published = true;

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();