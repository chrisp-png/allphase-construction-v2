/*
  # Add FAQs support to blog posts

  1. Changes
    - Add `faqs` column to `blog_posts` table
      - Type: JSONB (for efficient querying and storage)
      - Nullable: true (not all posts will have FAQs)
      - Format: Array of objects with "question" and "answer" keys
      
  2. Purpose
    - Enable FAQPage structured data schema for SEO
    - Store FAQ question/answer pairs for blog posts
    - Improve search engine visibility with rich results
    
  3. Example data format
    [
      {
        "question": "How often should I replace my roof?",
        "answer": "In South Florida, asphalt shingles last 15-20 years, metal 40-50 years, and tile 50+ years."
      },
      {
        "question": "Does my roof need inspection after a storm?",
        "answer": "Yes, even minor storms can cause hidden damage. Schedule an inspection within 48 hours."
      }
    ]
*/

-- Add faqs column to blog_posts table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'faqs'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN faqs JSONB DEFAULT NULL;
  END IF;
END $$;