ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS keywords text;

UPDATE blog_posts
SET keywords = '25% rule, Florida Building Code, roof repair, repair vs replacement, HVHZ'
WHERE slug = 'what-is-25-percent-rule-roofing-florida';
