-- Migration: Update meta_title and meta_description for the Broward County roof replacement cost blog post
-- Purpose: Improve CTR from Google Search Console (currently 0.3% CTR at position 7.9)
-- The new title adds pricing range and year; the new description adds specific costs and social proof

UPDATE blog_posts
SET
  meta_title = 'Roof Replacement Cost Broward County 2026 | $8.5K–$35K+ Guide',
  meta_description = 'Broward County roof replacement costs $8,500–$35,000+ in 2026. See exact pricing by shingle, tile & metal, plus HVHZ code requirements. Free estimates from a local contractor with 2,500+ roofs completed.',
  updated_at = NOW()
WHERE slug = 'roof-replacement-cost-broward-county-2026';
