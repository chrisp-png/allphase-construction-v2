/*
  # Update Projects Table for Gallery Page

  1. Changes
    - Add `title` (text) - e.g., "Tile Roof Replacement"
    - Add `slug` (text, unique) - URL-friendly identifier
    - Add `city` (text) - e.g., "Boca Raton"
    - Add `county` (text) - "Broward" or "Palm Beach"
    - Add `roof_type` (text) - e.g., "Barrel Tile", "Shingle", "Metal"
    - Add `project_type` (text) - "Residential" or "Commercial"
    - Add `description` (text) - 1-2 sentences describing project
    - Add `featured` (boolean) - for homepage display
    - Add `completed_date` (date) - when project was completed
    - Make existing fields nullable for backward compatibility

  2. Security
    - Update RLS policy to allow public viewing of all projects
    - Maintain existing admin policies

  3. Indexes
    - Add indexes for new filterable fields
*/

-- Add new columns
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'title'
  ) THEN
    ALTER TABLE projects ADD COLUMN title text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'slug'
  ) THEN
    ALTER TABLE projects ADD COLUMN slug text UNIQUE;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'city'
  ) THEN
    ALTER TABLE projects ADD COLUMN city text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'county'
  ) THEN
    ALTER TABLE projects ADD COLUMN county text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'roof_type'
  ) THEN
    ALTER TABLE projects ADD COLUMN roof_type text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'project_type'
  ) THEN
    ALTER TABLE projects ADD COLUMN project_type text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'description'
  ) THEN
    ALTER TABLE projects ADD COLUMN description text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'featured'
  ) THEN
    ALTER TABLE projects ADD COLUMN featured boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'completed_date'
  ) THEN
    ALTER TABLE projects ADD COLUMN completed_date date;
  END IF;
END $$;

-- Make existing fields nullable for backward compatibility
ALTER TABLE projects ALTER COLUMN alt_text DROP NOT NULL;
ALTER TABLE projects ALTER COLUMN caption DROP NOT NULL;

-- Drop old policy and create new one for public viewing
DROP POLICY IF EXISTS "Anyone can view published projects" ON projects;

CREATE POLICY "Anyone can view all projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);

-- Create indexes for new filterable fields
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_city ON projects(city);
CREATE INDEX IF NOT EXISTS idx_projects_county ON projects(county);
CREATE INDEX IF NOT EXISTS idx_projects_roof_type ON projects(roof_type);
CREATE INDEX IF NOT EXISTS idx_projects_project_type ON projects(project_type);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_completed_date ON projects(completed_date DESC);