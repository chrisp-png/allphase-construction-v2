/*
  # Insert Roof Replacement Expectations Blog Post

  1. New Blog Post
    - Insert comprehensive guide about what to expect during roof replacement
    - Covers timeline, permits, daily activities, HVHZ inspections
    - Published March 29, 2026
    - SEO optimized for "roof replacement process South Florida", "what to expect roof replacement"

  2. Content Details
    - Title: "What to Expect During a Roof Replacement Project in South Florida"
    - Slug: what-to-expect-during-a-roof-replacement-project
    - Focus: Day-by-day breakdown of roof replacement process
    - Target audience: Homeowners preparing for roof replacement
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
  'what-to-expect-during-a-roof-replacement-project',
  'What to Expect During a Roof Replacement Project in South Florida',
  'Complete day-by-day guide to roof replacement in Broward and Palm Beach Counties. Learn the timeline (1-3 days for shingles, 3-5 for tile), HVHZ inspection requirements, noise levels, weather delays, and how to prepare your home.',
  'See blog/what-to-expect-during-a-roof-replacement-project.md for full content',
  'All Phase Construction USA',
  '2026-03-29',
  '/social-proof/tile-roof-installation-hvhz-south-florida.jpg',
  '["Roofing", "Home Improvement", "HVHZ"]'::jsonb,
  '["roof replacement", "roof installation", "South Florida", "HVHZ", "permits", "inspections", "timeline", "Broward County", "Palm Beach County", "what to expect", "roof replacement process"]'::jsonb,
  'What to Expect During a Roof Replacement in South Florida | All Phase Construction',
  'Complete timeline and process guide for roof replacement in Broward and Palm Beach Counties. Learn what happens each day, HVHZ inspections, permits, and how to prepare.',
  true,
  '[
    {
      "question": "How long does a roof replacement take in South Florida?",
      "answer": "A typical residential roof replacement in South Florida takes 1-3 days for asphalt shingle roofs, 3-5 days for tile roofs, and 3-7 days for metal roofs. The timeline includes tear-off (Day 1), underlayment and material installation (Days 2-3), and cleanup/final details (Day 3). However, weather delays are common during Florida''s rainy season (May-October) and can add 1-3 days to the schedule. Complex roofs with multiple stories, valleys, or unusual features take longer. Final building inspection typically occurs 1-2 days after completion, bringing total timeline to approximately 1 week from start to permit closure. The permit acquisition process takes an additional 1-2 weeks before work can begin."
    },
    {
      "question": "What are the permit requirements for roof replacement in Broward County?",
      "answer": "All roof replacements in Broward County require building permits, which your contractor should handle. The permit process includes: application submission with plans and photos ($300-$800 fee), engineering review for HVHZ compliance (may require stamped engineering), and approval before work begins. During the project, building inspectors conduct multiple required inspections: deck inspection after tear-off (verifies proper decking and fastening), underlayment inspection (verifies HVHZ-approved materials and proper installation), nailing inspection (verifies enhanced fastening patterns with 6-8 nails per shingle), and final inspection (comprehensive review before Certificate of Completion). Attempting roof replacement without permits is illegal, voids your homeowners insurance, creates resale problems, and eliminates wind mitigation insurance discounts. Professional contractors include all permitting and inspection coordination in their service."
    },
    {
      "question": "How loud is a roof replacement and how can I prepare?",
      "answer": "Roof replacement is extremely loud, especially during tear-off on Day 1, which sounds like constant demolition directly above your head and makes phone calls or video meetings impossible. Nail gun installation (Days 2-3) is also very loud with rhythmic hammering sounds throughout the day. Work typically starts at 7:00-8:00 AM and continues until 5:00-6:00 PM. The entire house vibrates during work, which can knock pictures off walls, shift items on shelves, and create significant dust. To prepare: move outdoor furniture 10+ feet from house, remove wall decorations from rooms below the roof, cover attic belongings with tarps, keep pets indoors in quietest room or board them elsewhere during work days, close windows and use white noise to reduce stress for pets, park vehicles away from driveway, and plan to be away from home if possible during tear-off day. Notify neighbors 24-48 hours in advance about the noise."
    },
    {
      "question": "What happens if it rains during my roof replacement?",
      "answer": "Rain delays are common during Florida''s rainy season (May-October) when afternoon thunderstorms typically occur between 1:00-5:00 PM. When rain begins, professional contractors immediately stop work and tarp all exposed areas to protect your home. Work resumes once the roof surface dries, which may take 1-3 hours after rain stops. Rain delays typically add 1-2 days to overall project timeline. Contractors may work extended hours after rain passes to stay on schedule. During hurricane season (June-November), contractors monitor forecasts closely and may pause work 3-5 days before a storm, securing the roof with emergency tarps if incomplete. Your contract should specify that you''re not charged extra for weather delays. To minimize rain risk, schedule roof replacements during Florida''s dry season (November-April) when weather is more predictable and timelines are more reliable."
    },
    {
      "question": "What questions should I ask my roofing contractor before work begins?",
      "answer": "Before roof replacement begins, ask your contractor these critical questions: 1) What''s the exact day-by-day timeline for my roof, including all inspection points? 2) Who will be the on-site supervisor and what''s their direct phone number? 3) How will you protect my property during work (tarps, dumpster placement, landscaping protection)? 4) Will you pull all required permits and what''s the inspection schedule? 5) Exactly what materials are you using and are they HVHZ-rated? 6) What warranties will I receive (manufacturer and workmanship) and will I get written copies? 7) Will you provide completed wind mitigation form OIR-B1-1802 for insurance discounts? 8) What''s the payment schedule (never pay 100% upfront)? 9) What are potential additional costs like rotted decking replacement (get per-unit pricing)? 10) What happens if it rains or we fail an inspection? Get all answers in writing before signing contract."
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
