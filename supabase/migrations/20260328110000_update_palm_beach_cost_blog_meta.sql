-- Update Palm Beach County roof cost blog meta tags for CTR optimization
-- Current: 910 impressions, 0.2% CTR, position 6.4 (already page 1!)
UPDATE blog_posts
SET
  meta_title = 'Roof Replacement Cost Palm Beach County 2026 | $9K–$38K+ Guide',
  meta_description = 'Palm Beach County roof replacement costs $9,000–$38,000+ in 2026. Exact pricing by shingle, tile & metal, plus wind-code requirements. Free estimates from a contractor with 2,500+ roofs.',
  updated_at = NOW()
WHERE slug = 'roof-replacement-cost-palm-beach-county-2026';
