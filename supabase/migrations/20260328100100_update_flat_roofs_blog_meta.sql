-- Update residential flat roofs blog post meta tags for CTR optimization
-- Current: 2,101 impressions, 0.4% CTR, position 10.5 (page 1 opportunity)
UPDATE blog_posts
SET
  meta_title = 'Residential Flat Roofs in Florida: Types, Costs & Honest Pros/Cons (2026)',
  meta_description = 'Thinking about a flat roof in Florida? A licensed contractor breaks down TPO vs. modified bitumen vs. built-up roofing — real costs, drainage issues, and which systems survive hurricanes.',
  updated_at = NOW()
WHERE slug = 'residential-flat-roofs-types-options-and-florida-considerations';
