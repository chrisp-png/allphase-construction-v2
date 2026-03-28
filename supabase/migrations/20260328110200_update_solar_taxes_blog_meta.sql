-- Update solar property tax blog meta tags for CTR optimization
-- Current: 439 impressions, 0.2% CTR, position 12.1 (near page 1!)
UPDATE blog_posts
SET
  meta_title = 'Do Solar Panels Raise Property Taxes in Florida? (2026 Answer: No)',
  meta_description = 'Florida solar panels are 100% exempt from property tax increases — permanently. How the exemption works, what qualifies & the real financial impact on your home value.',
  updated_at = NOW()
WHERE slug = 'how-solar-impacts-property-taxes-in-florida';
