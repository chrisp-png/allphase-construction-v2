/*
  # Insert Roof Replacement Frequency Blog Post

  1. New Blog Post
    - Insert comprehensive guide about roof replacement frequency in South Florida
    - Covers material lifespans, climate factors, insurance requirements
    - Published March 29, 2026
    - SEO optimized for "how often replace roof South Florida", "roof lifespan Broward County"

  2. Content Details
    - Title: "How Often Should I Replace My Roof in South Florida?"
    - Slug: how-often-should-i-replace-my-roof-in-south-florida
    - Focus: Roof replacement timelines by material type in harsh Florida climate
    - Target audience: South Florida homeowners with aging roofs
*/

INSERT INTO blog_posts (
  slug,
  title,
  excerpt,
  content,
  author,
  published_date,
  featured_image,
  categories,
  tags,
  meta_title,
  meta_description,
  published,
  faqs
) VALUES (
  'how-often-should-i-replace-my-roof-in-south-florida',
  'How Often Should I Replace My Roof in South Florida?',
  'Discover how long roofs actually last in South Florida''s extreme climate. Learn replacement timelines for shingles (15-20 years), tile (25-50 years), metal (40-70 years), and why Florida roofs don''t last as long as manufacturer estimates.',
  'See blog/how-often-should-i-replace-my-roof-in-south-florida.md for full content',
  'All Phase Construction USA',
  '2026-03-29',
  '/social-proof/all-phase-construction-usa-Team-photo.JPG',
  '["Roofing", "Maintenance", "Insurance"]'::jsonb,
  '["roof replacement", "roof lifespan", "South Florida", "HVHZ", "insurance", "shingle roof", "tile roof", "metal roof", "flat roof", "roof inspection", "Broward County", "Palm Beach County"]'::jsonb,
  'How Often Should I Replace My Roof in South Florida? | All Phase Construction',
  'Learn how long roofs last in South Florida''s harsh climate. Discover roof replacement timelines for shingles, tile, metal, and flat roofs in Broward and Palm Beach Counties.',
  true,
  '[
    {
      "question": "How often should I replace my roof in South Florida?",
      "answer": "Roof replacement frequency in South Florida depends on material type: asphalt shingles need replacement every 15-20 years, tile roofs every 25-50 years (though underlayment may need replacement at 20-25 years), metal roofs every 40-70 years, and flat roofs (TPO/EPDM) every 15-25 years. These timelines are 20-40% shorter than in northern climates due to extreme UV exposure, hurricane stress, salt air corrosion, and constant humidity. Additionally, most insurance companies won''t renew policies on shingle roofs over 15 years old or tile roofs over 20-25 years old, regardless of condition — making replacement timing critical for maintaining insurance coverage."
    },
    {
      "question": "What is the lifespan of a shingle roof in Broward County?",
      "answer": "Asphalt shingle roofs in Broward County typically last 15-20 years, significantly shorter than the 25-30 year manufacturer estimates based on moderate climates. Broward County is designated High Velocity Hurricane Zone (HVHZ), which means roofs face 180mph wind requirements, extreme UV radiation, salt air corrosion (especially near the coast), heavy rainfall, and hurricane stress. By year 12-15, most shingle roofs show significant wear including granule loss, curling, and algae growth. By year 15, insurance companies often require roof inspections or replacement for policy renewal. If your shingle roof in Broward County is approaching 15 years old, schedule a professional inspection immediately to avoid insurance non-renewal and potential claims denial."
    },
    {
      "question": "How do I know when my roof needs to be replaced in Florida?",
      "answer": "Key signs your Florida roof needs replacement include: age approaching maximum lifespan (15+ years for shingles, 25+ years for tile), missing or curling shingles, interior leaks or water stains on ceilings, heavy granule loss in gutters, visible sagging or dips in the roof line, black algae streaks covering 30%+ of the roof, dramatically increased energy bills (15-25% higher), and daylight visible through roof boards in the attic. Additionally, if your insurance company requires a roof inspection or threatens non-renewal due to roof age, replacement is typically necessary. The combination of multiple symptoms — especially age plus visible damage — indicates end-of-life condition. Don''t wait until catastrophic failure; schedule a professional inspection if you notice any of these warning signs."
    },
    {
      "question": "Will insurance cover roof replacement in South Florida?",
      "answer": "Insurance will cover roof replacement in South Florida if damage is caused by a covered peril (hurricane, tornado, hail, fire) and the roof is within acceptable age limits. However, coverage is increasingly difficult for older roofs: most carriers won''t renew policies on shingle roofs over 15 years old or tile roofs over 20-25 years old. If your roof is damaged in a storm but is at or near maximum lifespan, insurance companies often argue the damage is \"age-related deterioration\" rather than storm damage, resulting in denied or partial claims. To maximize insurance coverage, document your roof''s condition with regular inspections, report storm damage within 1-2 years, and replace aging roofs proactively before they become uninsurable. For roofs under 10 years old with clear storm damage, insurance typically covers replacement minus your deductible."
    },
    {
      "question": "How much does it cost to replace a roof in Palm Beach County?",
      "answer": "Roof replacement costs in Palm Beach County range from $8,000-$35,000+ depending on material and home size. For a typical 2,000 square foot home: asphalt shingles cost $8,000-$15,000 (15-20 year lifespan), concrete tile costs $15,000-$25,000 (25-50 year lifespan), clay tile costs $20,000-$30,000+ (40-50 year lifespan), standing seam metal costs $18,000-$35,000 (40-70 year lifespan), and flat roof TPO/PVC costs $10,000-$20,000 (15-25 year lifespan). Palm Beach County is High Velocity Hurricane Zone (HVHZ), which adds 15-25% to costs due to enhanced fastening requirements, synthetic underlayment, engineering fees ($500-$1,500), and stricter permitting. Coastal properties within 5 miles of the ocean face additional requirements."
    }
  ]'::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  tags = EXCLUDED.tags,
  faqs = EXCLUDED.faqs,
  updated_at = NOW();
