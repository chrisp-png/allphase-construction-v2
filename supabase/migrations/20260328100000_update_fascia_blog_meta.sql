-- Update fascia blog post meta tags for CTR optimization
-- Current: 2,219 impressions, 1% CTR, position 10.1 (page 1 opportunity)
UPDATE blog_posts
SET
  meta_title = 'Can I Replace Fascia Without Replacing My Roof? (2026 Answer)',
  meta_description = 'Yes — but only if done right. A South Florida roofer explains when you can replace fascia boards without a full reroof, what code requires, and the #1 mistake that voids warranties.',
  updated_at = NOW()
WHERE slug = 'can-i-replace-my-bad-fascia-without-damaging-or-replacing-my-roof-in-south-florida';
