/*
  # Insert Blog Post: Roof Repair vs. Replacement in South Florida

  1. New Content
    - Slug: choosing-between-roof-repair-and-full-replacement
    - Title: Roof Repair vs. Replacement: How South Florida Homeowners Should Decide
    - Previously 301-redirected to /blog via netlify/edge-functions/blog-redirects.ts;
      this PR removes that redirect and publishes a real article at the slug.

  2. Content
    - ~2,200-word Markdown body covering: quick decision framework, when to repair,
      when to replace, the Florida Building Code 25% rule, South Florida cost ranges,
      insurance considerations, dual CCC+CGC licensing, and 5-question FAQ.
    - Source: Surfer SEO keyword-targeted draft, fact-checked and stripped of
      off-topic AI analogies (car/collision repair) before commit.

  3. Technical facts pinned
    - 25% rule: work exceeding 25% of roof area in any 12-month period triggers
      full code upgrade.
    - HVHZ boundary: Broward only; Palm Beach not in HVHZ but enforces high-wind
      standards.
    - Realistic SoFla lifespans: asphalt 15-20yr, tile underlayment 20-25yr,
      metal 40-50+yr.
    - Both license numbers cited: CCC-1331464 and CGC-1526236.

  4. Idempotency
    - INSERT ... ON CONFLICT (slug) DO UPDATE. Safe to re-run.

  5. Risk: Low. New blog_posts row, no schema change.
*/

INSERT INTO blog_posts (
  title,
  slug,
  excerpt,
  content,
  featured_image,
  published_date,
  author,
  categories,
  tags,
  meta_title,
  meta_description,
  published,
  faqs
) VALUES (
  'Roof Repair vs. Replacement: How South Florida Homeowners Should Decide',
  'choosing-between-roof-repair-and-full-replacement',
  'Three things decide repair vs. replacement in South Florida faster than anything else: roof age, damage extent, and Florida''s 25% rule. Here''s how the math actually works in Broward and Palm Beach Counties.',
  $BODY$
# Roof Repair vs. Replacement: How South Florida Homeowners Should Decide

**Key Takeaways**

- In Broward and Palm Beach Counties, three things decide repair vs. replacement faster than anything else: roof age, the extent of damage, and Florida's 25% rule.
- South Florida real-world lifespans are shorter than the manufacturer warranty suggests — asphalt shingles 15–20 years, tile underlayment 20–25 years, metal 40–50+ years.
- The 25% rule can flip a "big repair" into a mandatory full replacement: if work covers more than 25% of the roof within any 12-month period, the whole roof must be brought up to current code.
- Broward County is in the High Velocity Hurricane Zone (HVHZ); Palm Beach County is not, but still enforces high-wind installation standards.
- All Phase Construction USA holds both a roofing license (CCC-1331464) and a certified general contractor license (CGC-1526236), and gives written repair-vs-replace assessments — with photos and measurements — in Broward and Palm Beach Counties.

## Introduction

For South Florida homeowners, the repair-or-replace decision is almost always a money decision. Go too conservative on a roof that's already past its useful life and you end up paying twice. Replace too early and you leave years of serviceable roof on the table. The trick is pairing an honest damage assessment with a few South Florida-specific rules that most national roofing content gets wrong — especially Florida Building Code's 25% rule and the real (not marketing) lifespans of shingles, tile, and metal in this climate.

## Quick Decision Framework

If you need an answer right now, walk through these four filters before scheduling an inspection.

**Roof age:**

- Asphalt shingle over 15–18 years often leans toward replacement.
- Tile roofs with underlayment over 20–25 years are likely candidates for a reroof, even if the tiles themselves look fine.
- Metal roofs at 30+ years are case-by-case depending on condition.

**Damage extent:**

- One or two isolated leaks or a few missing shingles or tiles may be repairable.
- Widespread curling, cracking, soft decking, or multiple leak points across different rooms usually signals replacement.

**Location:**

- Broward County sits in the HVHZ, which triggers stricter product approvals and nailing patterns on any major work.
- Palm Beach County is outside the HVHZ but still enforces strong high-wind installation rules.

**Insurance status:**

- Active policies on newer roofs typically cover both repair and replacement options.
- Older roofs past carrier age limits may have restricted coverage or higher deductibles.
- Some carriers require full replacement once damage passes internal thresholds.

Still unsure? The next two sections walk through when each option makes sense.

## When Roof Repair Is Enough

Targeted repair makes financial sense in a few specific scenarios.

**Young roof, localized damage.** Asphalt shingles under 10–12 years with solid granule retention, tile systems under 15 years with no prior leak history, or metal roofs under 25 years with intact seams can almost always be repaired rather than replaced after a single event.

**Isolated storm damage.** A 10×10-foot section of missing shingles after a June thunderstorm in Deerfield Beach, a handful of cracked tiles from a fallen palm frond in Boca Raton, or impact damage confined to one slope are textbook repair scenarios.

**Single-source leaks.** Staining around a specific penetration (skylight, vent stack, chimney) with an attic inspection showing dry decking elsewhere is almost always a flashing, sealant, or boot failure — not a roof-system failure.

**Flashing and sealant issues.** Failed flashing around walls, valleys, or vents and dried or cracked sealant can be replaced without disturbing the surrounding roof system.

The cost-vs-remaining-life math is the simplest sanity check. An $800–$1,500 repair on a 7-year-old roof that buys another 8–10 years is a strong investment. That same $1,500 repair on a 20-year-old shingle roof only delays the inevitable by a year or two — not a strong use of money.

As long as you stay under the 25% threshold, a repair does not require bringing the rest of the roof up to current code, which keeps costs predictable.

## When Full Roof Replacement Is the Smarter Call

Once certain red flags appear, replacement is usually the cheaper long-term move even though it costs more up front.

**Age limits by material (real South Florida, not brochure):**

- Asphalt shingle: 15–20 years despite 30/40-year manufacturer warranties designed for northern climates.
- Concrete and clay tile: 25–40+ years on the tile itself, but underlayment typically fails at 20–25 years — and underlayment is what keeps water out.
- Metal: 40–50+ years with proper maintenance.

**Widespread surface damage.** Whole slopes of curled or missing shingles in Coral Springs, large fields of cracked tiles in Parkland, or granule loss and exposed fiberglass mat across multiple roof planes all point to system failure rather than localized damage.

**Multiple leaks and interior damage.** Ceiling staining in several rooms, leaks returning in the same spot after past repairs, or mold and deck rot found during attic inspection are signs the roof is done — not just injured.

**Structural and deck issues.** Soft or spongy decking when walked on, visible sagging, or prior unpermitted repairs that don't meet current Florida Building Code generally need to be addressed with a full tear-off and proper deck repair.

**Discontinued materials.** When a shingle or tile product is no longer manufactured, matching becomes impossible, and insurance carriers often push toward full replacement once visible damage crosses a threshold.

**Storm-history fatigue.** Roofs repeatedly patched after Irma (2017), Nicole (2022), or other tropical storms often reach a point where repairs keep stacking up without solving the underlying problem. See our [step-by-step roof replacement process guide](/roof-replacement-process) for what a full reroof actually involves.

## The Florida 25% Rule — The Tipping Point

This rule is often what turns a "big repair" into a mandatory full replacement.

**The exact requirement:** Florida Building Code's 25% rule states that if repair or replacement work covers more than 25% of a roof area within any 12-month period, the entire roof must be brought up to current code.

**What "roof area" means:** The calculation applies to the total roof, or to individual roof sections separated by ridges, valleys, or other features. Multiple smaller repairs can stack — if a spring repair plus a fall repair cross 25% in the same 12-month window, the rule applies.

**Worked example:** A 2,000-square-foot roof in Pompano Beach sustains 600 square feet of damage after a summer storm. That's 30% — above the threshold — which triggers a full reroof under current code requirements.

**Broward vs. Palm Beach code impact:** In Broward, hitting the 25% threshold means the rebuilt roof must meet HVHZ rules — Miami-Dade NOA-tested products, full-coverage self-adhered underlayment, and tighter fastener schedules. In Palm Beach, the code-upgrade is to the current high-wind non-HVHZ standard. The cost delta between a repair that stays under 25% and a repair that goes over is often thousands of dollars. For more on how the two counties' codes differ, see our guide to [Palm Beach vs. Broward building codes](/blog/why-palm-beach-and-broward-county-building-codes-differ-a-south-florida-guide-by-all-phase-construction-usa).

**Why honest measurement matters:** A contractor should measure, photograph, and document the damaged area so you understand exactly why the 25% rule does or does not apply in your case. Vague "it's probably over 25%" handwaving usually means the contractor wants the larger job.

## Cost Ranges in South Florida (2026)

Ballpark 2026 pricing for Broward and Palm Beach residential roofs. Actual quotes vary with roof size, pitch, material, and access conditions.

**Repair ranges:**

| Repair Type | Estimated Cost |
|---|---|
| Small shingle repair | $350 – $750 |
| Moderate leak repair with flashing | $800 – $1,800 |
| Tile repairs in several spots | $1,000 – $3,000 |

**Replacement ranges by material:**

| Material | Estimated Total Cost |
|---|---|
| Asphalt shingle reroof | $8,000 – $15,000 |
| Tile reroof with underlayment | $12,000 – $25,000 |
| Standing-seam metal system | $20,000 – $35,000 |

**Cost-per-year math:** A $2,000 repair on a 19-year-old shingle roof that buys another 1–2 years costs $1,000–$2,000 per year of use. A $12,000 replacement lasting 18+ years costs roughly $666 per year — better value over time.

Hitting the 25% threshold can raise project cost meaningfully because the full roof has to meet current code, often adding upgraded underlayment and fasteners to the scope. For a deeper Broward-specific cost breakdown, see our [2026 Broward roof replacement cost guide](/blog/roof-replacement-cost-broward-county-2026).

## Insurance Considerations

This section is context only. Talk directly with your insurance agent or a licensed public adjuster before making a decision based on coverage.

**Age and condition reviews.** Older asphalt roofs (18–20 years) or tile roofs with original underlayment approaching 25 years may have limited coverage, age-based exclusions, or higher deductibles under current policies.

**Carrier thresholds.** Some insurance carriers require full replacement rather than patching when materials are discontinued or when damage exceeds a carrier-defined threshold, even if a targeted repair would work from a purely technical standpoint.

**Actual cash value vs. replacement cost.** ACV policies depreciate older roofs and can pay significantly less than full replacement cost; RCV policies typically pay closer to current replacement prices minus your deductible. The specific depreciation schedule depends entirely on your policy — check your declarations page or ask your agent.

**Documentation matters.** Photos, moisture readings, and written findings from a licensed contractor strengthen claims for either a repair or a replacement path.

**Code compliance is independent.** The Florida 25% rule applies regardless of what your insurance pays. Carriers generally won't pay for work that violates code requirements.

## Why Licensing Matters for This Decision

A contractor with only a roofing license can work on roof coverings — shingles, tiles, metal panels, underlayment. Structural issues discovered during a tear-off (rotten decking, damaged trusses, failing fascia) typically require a general contractor to address.

All Phase Construction USA holds both a Florida roofing license (**CCC-1331464**) and a certified general contractor license (**CGC-1526236**). One call, one permit, one project manager handles everything from shingle work to structural deck repair — no subcontractor markups and no coordination delays.

Dual licensing also reduces bias on the repair-vs-replace diagnosis. Because our business includes both targeted [roof repair](/roof-repair) work and full [roof replacement](/roof-replacement), we're not financially pushed toward only selling reroofs. Smaller jobs are part of what we do too.

**How our assessment works:**

- On-roof inspection of visible damage
- Attic check where accessible
- Measurement of damaged area for 25% rule calculations
- Photo documentation of findings
- Written repair-vs-replace comparison you can review at your own pace

Service area includes Deerfield Beach, Pompano Beach, Coral Springs, Parkland, Fort Lauderdale, Boca Raton, Delray Beach, West Palm Beach, and neighboring communities across Broward and Palm Beach Counties. Before accepting any repair-only or replacement-only recommendation, ask for license numbers, proof of insurance, and recent local references.

## FAQ: Roof Repair vs. Replacement in South Florida

**How do I know when a roof is too damaged to repair?**

Look for multiple active leaks, large soft spots when walking the roof, visible sagging, or deck rot discovered once shingles or tiles are lifted. When 25% or more of the roof area needs work within a 12-month window, Florida Building Code usually forces a full replacement to current standards. Repeated storm patching in Broward's HVHZ is often a sign the underlying system has reached end-of-life.

**Should I repair or replace my 18-year-old shingle roof in Broward?**

Eighteen years is near the upper end of the realistic 15–20 year shingle lifespan in South Florida. If damage is minor and the rest of the roof is flat, well-granulated, and leak-free, one last targeted repair can be reasonable. If there's widespread curling, granule loss, or prior repairs scattered across multiple slopes, replacement is usually the smarter long-term investment — especially with HVHZ code upgrades baked in.

**Is it ever smart to replace a roof that isn't leaking yet?**

Yes. Proactive replacement makes sense when an older roof is clearly near end-of-life — a 22-year-old shingle roof, or original tile underlayment from the early 2000s that still sheds water but shows advanced wear. Benefits include better insurance eligibility, a code-compliant system in place before hurricane season, and lower risk of emergency leaks during a storm.

**Does Palm Beach County have the same wind requirements as Broward?**

No. Broward County is in the HVHZ (High Velocity Hurricane Zone) and Palm Beach County is not. Product approvals and fastening patterns differ between the two. Palm Beach still enforces strong high-wind installation rules — just not the stricter HVHZ standards. Work with a licensed contractor who operates under both sets of rules, especially if you're near the county border.

**What should I do before calling a roofer to check my damage?**

Take clear photos of ceiling stains, exterior damage, and any debris in your yard. Note when leaks appear — for example, only during wind-driven rain from a specific direction. Check your policy documents so you know your deductible and whether your carrier has age limits on roof coverage. Then schedule an on-site inspection with a licensed contractor rather than relying on drone photos or drive-by "free estimates."

## Next Steps

If you're in Broward or Palm Beach County and weighing your options, we'll come out, document the damage with photos and measurements, and give you a written repair-only vs. replacement comparison so you can decide at your own pace. No pressure. For homeowners who want to learn more first, we have guides on [how to spot early signs of roof damage](/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive) and [what to expect during a replacement project](/roof-replacement-process).
$BODY$,
  '/social-proof/all-phase-construction-tile-roof-restoration-in-progress.jpg',
  '2026-04-21 10:00:00-04',
  'All Phase Construction USA',
  '["Roofing Education", "Homeowner Guide", "Maintenance & Repair"]'::jsonb,
  '["Roof Repair", "Roof Replacement", "Florida Building Code", "25 Percent Rule", "HVHZ", "Broward County", "Palm Beach County", "Homeowner Guide", "South Florida Roofing"]'::jsonb,
  'Roof Repair vs. Replacement: South Florida Homeowner Guide',
  'Repair or replace your South Florida roof? Age, damage extent, and Florida''s 25% rule decide it. Real lifespans, cost ranges, and code impacts for Broward and Palm Beach.',
  true,
  $FAQ$[
    {
      "question": "How do I know when a roof is too damaged to repair?",
      "answer": "Look for multiple active leaks, large soft spots when walking the roof, visible sagging, or deck rot discovered once shingles or tiles are lifted. When 25% or more of the roof area needs work within a 12-month window, Florida Building Code usually forces a full replacement to current standards. Repeated storm patching in Broward's HVHZ is often a sign the underlying system has reached end-of-life."
    },
    {
      "question": "Should I repair or replace my 18-year-old shingle roof in Broward?",
      "answer": "Eighteen years is near the upper end of the realistic 15-20 year shingle lifespan in South Florida. If damage is minor and the rest of the roof is flat, well-granulated, and leak-free, one last targeted repair can be reasonable. If there's widespread curling, granule loss, or prior repairs scattered across multiple slopes, replacement is usually the smarter long-term investment -- especially with HVHZ code upgrades baked in."
    },
    {
      "question": "Is it ever smart to replace a roof that isn't leaking yet?",
      "answer": "Yes. Proactive replacement makes sense when an older roof is clearly near end-of-life -- a 22-year-old shingle roof, or original tile underlayment from the early 2000s that still sheds water but shows advanced wear. Benefits include better insurance eligibility, a code-compliant system in place before hurricane season, and lower risk of emergency leaks during a storm."
    },
    {
      "question": "Does Palm Beach County have the same wind requirements as Broward?",
      "answer": "No. Broward County is in the HVHZ (High Velocity Hurricane Zone) and Palm Beach County is not. Product approvals and fastening patterns differ between the two. Palm Beach still enforces strong high-wind installation rules -- just not the stricter HVHZ standards. Work with a licensed contractor who operates under both sets of rules, especially if you're near the county border."
    },
    {
      "question": "What should I do before calling a roofer to check my damage?",
      "answer": "Take clear photos of ceiling stains, exterior damage, and any debris in your yard. Note when leaks appear -- for example, only during wind-driven rain from a specific direction. Check your policy documents so you know your deductible and whether your carrier has age limits on roof coverage. Then schedule an on-site inspection with a licensed contractor rather than relying on drone photos or drive-by free estimates."
    }
  ]$FAQ$::jsonb
)
ON CONFLICT (slug) DO UPDATE
SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  categories = EXCLUDED.categories,
  tags = EXCLUDED.tags,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  published = EXCLUDED.published,
  faqs = EXCLUDED.faqs,
  updated_at = NOW();
