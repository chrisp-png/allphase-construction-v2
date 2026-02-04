/*
  # Create Projects Gallery Table

  1. New Tables
    - `projects`
      - `id` (uuid, primary key) - Unique identifier for each project
      - `image_url` (text) - URL to the image in Supabase Storage
      - `alt_text` (text) - Alternative text for accessibility
      - `caption` (text) - Display caption for the project
      - `display_order` (integer) - Order for displaying projects (lower numbers first)
      - `is_published` (boolean) - Whether the project is visible to public
      - `created_at` (timestamptz) - When the project was created
      - `updated_at` (timestamptz) - When the project was last updated

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public to view published projects
    - Add policy for authenticated users to manage all projects
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  alt_text text NOT NULL,
  caption text NOT NULL,
  display_order integer DEFAULT 0,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view published projects
CREATE POLICY "Anyone can view published projects"
  ON projects
  FOR SELECT
  USING (is_published = true);

-- Allow authenticated users to view all projects
CREATE POLICY "Authenticated users can view all projects"
  ON projects
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to insert projects
CREATE POLICY "Authenticated users can insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update projects
CREATE POLICY "Authenticated users can update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete projects
CREATE POLICY "Authenticated users can delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_projects_is_published ON projects(is_published);