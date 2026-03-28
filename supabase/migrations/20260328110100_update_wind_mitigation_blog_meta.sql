-- Update wind mitigation blog meta tags for CTR optimization
-- Current: 785 impressions, 0.3% CTR, position 6.3 (already page 1!)
UPDATE blog_posts
SET
  meta_title = 'Wind Mitigation Roof Upgrades | Cut Insurance 20-50% (2026 Guide)',
  meta_description = 'Roof wind mitigation can save Florida homeowners 20-50% on insurance. What qualifies, what to upgrade & how to get your inspection in Broward & Palm Beach County.',
  updated_at = NOW()
WHERE slug = 'wind-mitigation-roof-south-florida';
