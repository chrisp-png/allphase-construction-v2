/*
  # Insert Blog Post: What Makes a Roof Hurricane-Resistant in South Florida

  1. New Content
    - Slug: what-makes-a-roof-hurricane-resistant
    - Title: What Makes a Roof Hurricane-Resistant in South Florida
    - Previously 301-redirected to /blog/metal-roof-vs-tile-roof-south-florida-hurricanes
      via netlify/edge-functions/blog-redirects.ts; this PR removes that redirect and
      publishes a real article at the slug.

  2. Content
    - ~2,200-word Markdown body covering: the five systems that make a roof
      hurricane-resistant (tested assembly, sealed deck, enhanced fasteners,
      impact openings, code-correct installation), Broward vs Palm Beach code
      differences, FORTIFIED Roof standard, wind mitigation credits, dual CCC+CGC
      licensing, homeowner checklist, and 5-question FAQ.
    - Source: Surfer SEO keyword-targeted draft, fact-checked and stripped of
      off-topic material (slate, wood shakes, "hurricane-proof" marketing claims)
      before commit.

  3. Technical facts pinned
    - HVHZ = Miami-Dade + Broward only. Palm Beach is NOT in HVHZ.
    - Broward design wind speed ~175 mph; Palm Beach 170-180 mph.
    - Miami-Dade NOA required in HVHZ; Florida Product Approval (FL#) elsewhere.
    - Large-missile test: 9 lb 2x4 @ 50 ft/sec.
    - Secondary water barrier: full-coverage peel-and-stick in Broward; hybrid
      allowed in Palm Beach.
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
  'What Makes a Roof Hurricane-Resistant in South Florida',
  'what-makes-a-roof-hurricane-resistant',
  'Hurricane resistance is a layered system -- tested assembly, sealed deck, enhanced fasteners, impact openings, and code-correct installation. Here is what actually matters in Broward and Palm Beach.',
  $BODY$# What Makes a Roof Hurricane-Resistant in South Florida

**Key Takeaways**

- A hurricane-resistant roof is a tested **system** of components -- deck, underlayment, fasteners, covering, and protected openings -- not a single strong material.
- The High Velocity Hurricane Zone (HVHZ) covers only Miami-Dade and Broward counties and requires Miami-Dade NOA products rated for roughly 175 mph winds.
- Palm Beach County is coastal but not in the HVHZ; it uses Florida Product Approval (FL#) with design wind speeds of 170-180 mph depending on proximity to the ocean.
- Secondary water barriers, sealed decks, ring-shank nails, and impact-rated windows all matter as much as the visible roof covering.
- Working with a contractor holding both a Roofing Contractor license (CCC-1331464) and a Certified General Contractor license (CGC-1526236) is important when hidden structural issues surface during a re-roof.

## Introduction: Why Some Roofs Fail and Others Survive

Hurricane Andrew hit South Florida on August 24, 1992, as a Category 5 storm with sustained winds near 165 mph. It destroyed or damaged more than 125,000 homes and caused roughly $25 billion in damage. Post-storm engineering studies traced a large share of structural losses back to roof failures -- tiles detached en masse, shingles peeled away, and untested assemblies turned into flying debris.

Andrew's devastation led directly to the creation of the High Velocity Hurricane Zone and stricter wind and impact standards for Miami-Dade and Broward roofs. The Florida Building Code now requires roofing materials in those counties to meet specific wind uplift and impact resistance standards.

What makes a roof hurricane-resistant is not a single product but a layered defense: an engineered roof assembly, sealed deck, secondary water barrier, enhanced fasteners, and protected openings. "Hurricane-proof" is a marketing word we try to avoid -- no roof is invincible. A well-built **hurricane-resistant** roof is designed to withstand hurricane-force winds, flying debris, and heavy rain through smart design, reinforced installation, and code compliance.

## The Five Systems That Make a Hurricane-Resistant Roof

Building code, lab testing, and real storm performance all point to five interlocking systems that determine whether your roof stays attached in severe weather.

### 1. Wind-Rated Roof Assembly (Tested, Not Guessed)

Every hurricane-resistant roof starts with a tested assembly -- deck, underlayment, fasteners, and covering -- designed to handle specific wind pressures under ASCE 7. The difference between a **Miami-Dade Notice of Acceptance (NOA)** product (required in the HVHZ) and a **Florida Product Approval (FL#)** product (used in Palm Beach and the rest of the state) comes down to how rigorously the assembly was tested.

Common hurricane-rated coverings in South Florida:

- **Miami-Dade NOA concrete or clay tile systems** -- tested assemblies commonly rated for 150+ mph uplift performance when installed per the NOA. Heavy, durable, 50+ year expected lifespan.
- **Standing-seam metal roofing** -- many Miami-Dade NOA-approved panels are rated for winds of 150-180+ mph when fastened to spec. Typical lifespan is two to three times that of an asphalt shingle roof.
- **Architectural asphalt shingles (HVHZ-rated)** -- must meet ASTM D3161 Class F or ASTM D7158 Class H for high wind performance, installed with a 6-nail pattern and full peel-and-stick underlayment. Shorter lifespan than tile or metal, but lower upfront cost.

Warranty programs such as Owens Corning WindProven and the IBHS FORTIFIED Roof standard offer additional wind coverage when the system is installed to their specifications.

Ask roofers which NOA or FL# their proposed system uses and what ASCE 7 design wind speed it is rated for at your specific address.

### 2. Sealed Roof Deck and Secondary Water Barrier

The roof deck -- typically plywood or OSB -- is your last line of defense against water intrusion once shingles or tiles blow off. Wind-driven rain can find weak spots in minutes once the covering is compromised.

A **sealed roof deck** combines taped seams between sheathing panels with a full-coverage peel-and-stick membrane that self-seals around nails. In Broward's HVHZ, code generally requires a full-coverage self-adhering underlayment over the entire deck. Palm Beach often allows a hybrid system -- mechanically attached underlayment plus peel-and-stick in valleys and around penetrations.

This is the core idea behind the IBHS FORTIFIED Roof standard: keep water out for hours or days even after the covering is lost. A secondary water barrier typically adds $2-$4 per square foot but generates meaningful insurance credits and dramatically reduces interior damage during a storm.

### 3. Enhanced Fastening Schedule

In extreme winds, pressure differences try to peel the roof off the structure. The fastener schedule -- type, spacing, and pattern -- is what keeps the system attached.

HVHZ roofs in Broward typically use **ring-shank nails** for improved withdrawal resistance, **6 nails per shingle**, and edge spacing as tight as **3 inches on-center**. Non-HVHZ areas often allow 4-5 nails per shingle with wider spacing, leaving edges and corners more vulnerable.

Tile and metal systems have specific NOA fastening requirements -- clips, screws, foam beads, or adhesive patterns -- that must be followed exactly. On new construction, hurricane straps and ties also help secure the roof to the framing below; on most existing homes, straps are difficult to retrofit without major renovation.

### 4. Impact-Rated Windows, Doors, and Openings

Roof performance depends directly on what happens to your windows and doors. If a single opening fails during a storm, internal pressure spikes and can push the roof off from below.

HVHZ opening protection must pass:

- **Large-missile test** -- a 9-pound 2x4 fired at 50 feet per second
- **Small-missile test** -- multiple steel ball impacts at high velocity

In Broward and Miami-Dade, you need either impact-rated windows and doors, tested shutters, or other approved hurricane protection. Coastal Palm Beach falls under the wind-borne debris region and uses a different code pathway but still requires opening protection. Garage doors, skylights, and roof-mounted equipment are common early failure points -- protecting these openings keeps the roof from pressurizing from the inside out.

### 5. Code-Correct Installation and Inspection

Even the best Miami-Dade NOA or Florida Product Approval means nothing if the installer cuts corners. Professional installation following the manufacturer's instructions is non-negotiable.

The typical inspection sequence includes:

- **Sheathing inspection** -- nail patterns, spacing, deck seams
- **Dry-in inspection** -- underlayment coverage and flashing integrity
- **Final inspection** -- covering installed to the NOA or FL# drawings

Inspectors verify details like correct nail depth (not overdriven), proper flashing at walls and valleys, correctly installed ridge cap shingles, and end-to-end sealing. As a dual-licensed contractor, All Phase Construction USA (CCC-1331464 and CGC-1526236) can address structural issues uncovered during inspections without handing off to a separate general contractor.

## Broward vs Palm Beach: Why the County Line Changes the Requirements

Broward is in the HVHZ along with Miami-Dade; Palm Beach is not. That single boundary drives significant differences in which products and assemblies are allowed.

- **Broward:** designed for ultimate wind speeds of about **175 mph**, Miami-Dade NOA products required, tighter fastener schedules, full-coverage peel-and-stick underlayment.
- **Palm Beach:** most addresses designed around **170 mph**, some coastal zones approaching **180 mph**, Florida Product Approval (FL#) products used rather than NOA.

Palm Beach homeowners can still choose HVHZ-level roofs voluntarily if the contractor designs the assembly correctly -- it just is not mandated by code. For a deeper breakdown, read our [guide to Palm Beach vs Broward building codes](/blog/why-palm-beach-and-broward-county-building-codes-differ-a-south-florida-guide-by-all-phase-construction-usa).

## The FORTIFIED Roof Standard (Optional Upgrade Worth Considering)

The IBHS FORTIFIED Roof program is a voluntary standard that exceeds minimum code for enhanced protection against high-wind events.

Core elements include:

- Sealed roof deck with taped seams
- Enhanced nailing patterns at edges and corners
- Stronger drip edge and flashing details
- Installation verified by an independent FORTIFIED evaluator

FORTIFIED does not guarantee a roof will never be damaged, but IBHS field studies after storms like Hurricane Irma have shown meaningfully better survival rates for FORTIFIED homes compared to conventionally built roofs. Many Florida insurers offer premium discounts when a home carries FORTIFIED designation.

## Insurance Mitigation Credits and Wind Mitigation Inspections

Florida insurers use the **OIR-B1-1802** wind mitigation inspection form to document features that earn premium credits. The form covers roof shape (hip roofs generally deflect wind better than gable roofs), roof-to-wall connections (clips, wraps, straps), secondary water barrier, nail types and patterns, and impact-rated openings.

Upgrades like a sealed deck, full peel-and-stick underlayment, ring-shank fasteners, and an HVHZ-rated covering often translate into lower premiums over the life of the roof. Carriers including Citizens Property Insurance rely heavily on these reports when setting rates. Ask your roofer which features will show up on the post-installation OIR-B1-1802 form -- and get an updated inspection filed with your insurer after any [full roof replacement](/roof-replacement).

## Why Licensing Matters (Dual CCC + CGC)

A Florida Roofing Contractor license (**CCC**) covers roof installation. A Certified General Contractor license (**CGC**) authorizes structural repairs. During a re-roof in Broward or Palm Beach, it is common to uncover damaged trusses, rotten decking, or other structural issues that a roofing-only license cannot legally address.

All Phase Construction USA holds both **CCC-1331464** and **CGC-1526236**, so the same crew can complete structural repairs and finish the roof without pausing the job or bringing in a second company. With a 4.8/5 rating from over 136 verified reviews and 2,500+ completed roofs, you can see [reviews from South Florida homeowners](/south-florida-roofing-reviews) for examples across both counties.

## Practical Checklist for Homeowners Comparing Bids

Save these questions for your next meeting with a roofer:

- Which NOA or Florida Product Approval does this roof system use, and what design wind speed is it rated for at my address?
- Will you install a full peel-and-stick membrane over the entire deck, or a hybrid system?
- What fasteners will you use -- type, number per shingle, and edge spacing?
- Will this roof and my current windows and doors qualify for better wind mitigation credits on the OIR-B1-1802 form?
- Are you licensed as both a roofing contractor and a general contractor to handle structural repairs mid-project?
- How will you document the installation for future insurance claims and resale?

Before signing, consider scheduling a professional [roof inspection](/roof-inspection) and reading our [repair vs replacement decision guide](/blog/choosing-between-roof-repair-and-full-replacement).

## Next Steps

Ready to get your roof ready for hurricane season? Schedule a free inspection to assess your current hurricane resistance. Call All Phase Construction USA at **(754) 227-5605** or visit our [contact page](/contact) to talk through roof replacement options.

With the right tested system, proper installation, and verified documentation, your next roof can be significantly more hurricane-resistant than what was common before Hurricane Andrew changed the South Florida building code.$BODY$,
  '/social-proof/adding-enhanced-fastening-for-maximum-uplift-resistance.jpg',
  '2026-04-21 12:00:00-04',
  'All Phase Construction USA',
  '["Roofing Education", "Homeowner Guide", "Storm & Hurricane Preparedness"]'::jsonb,
  '["Hurricane Resistance", "HVHZ", "Miami-Dade NOA", "Florida Product Approval", "Wind Mitigation", "FORTIFIED Roof", "Broward County", "Palm Beach County", "South Florida Roofing"]'::jsonb,
  'Hurricane-Resistant Roofs in South Florida: What Actually Works',
  'Five features that actually make a roof hurricane-resistant in Broward and Palm Beach -- HVHZ code, Miami-Dade NOAs, sealed decks, enhanced fasteners, and impact-rated openings. A plain-English guide from a dual-licensed South Florida roofer.',
  true,
  $FAQ$[
    {
      "question": "Is a metal roof more hurricane-resistant than tile?",
      "answer": "Both standing-seam metal and Miami-Dade NOA tile systems can be highly hurricane-resistant when properly installed. Standing-seam metal is typically rated to withstand very high winds and often outlasts other materials by decades. Tile is widely used in South Florida and performs well in high winds thanks to its weight and the tested fastening systems used in NOA assemblies. The right choice depends on your budget, home structure, and the specific tested assembly -- not the material category by itself."
    },
    {
      "question": "What design wind speed should my roof be rated for in Deerfield Beach or Boca Raton?",
      "answer": "Deerfield Beach in Broward County is in the HVHZ with design wind speeds around 175 mph -- roofs there should use Miami-Dade NOA systems. Boca Raton and most Palm Beach addresses are designed around 170 mph, with some coastal zones approaching 180 mph. Ask your roofer or local building department for the specific ASCE 7 design wind speed that applies to your address."
    },
    {
      "question": "Can I make my Palm Beach roof HVHZ-compliant if I want to?",
      "answer": "Palm Beach does not require Miami-Dade NOA products by code, but you can choose HVHZ-rated assemblies voluntarily. Using NOA-rated tile, metal, or shingle systems with HVHZ-style fastener schedules and full peel-and-stick underlayment brings your roof beyond the minimum standard. Expect a higher upfront cost in exchange for improved hurricane resistance and potentially better wind mitigation credits."
    },
    {
      "question": "How do I know if my existing roof has a sealed deck?",
      "answer": "From the ground, you cannot tell whether the deck seams are taped or whether a full-coverage peel-and-stick was used. Check prior permit records or ask for documentation from the last re-roof. A professional roof inspection can also look at weak spots at attic penetrations and roof edges to infer what underlayment was installed."
    },
    {
      "question": "Do impact windows replace the need for shutters?",
      "answer": "Properly tested impact-rated windows generally remove the need for separate shutters on those openings, since the glazing itself has already passed the required impact tests. From the roof's perspective, what matters is that every opening -- windows, doors, garage door, skylights -- is protected so internal pressure does not push the roof off during the storm. Check your local code and insurance requirements to confirm your specific protection package qualifies."
    }
  ]$FAQ$::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  published_date = EXCLUDED.published_date,
  author = EXCLUDED.author,
  categories = EXCLUDED.categories,
  tags = EXCLUDED.tags,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  published = EXCLUDED.published,
  faqs = EXCLUDED.faqs,
  updated_at = NOW();
