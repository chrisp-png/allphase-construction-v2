/*
  # PR-23: Convert pr-22e blog content from Markdown to HTML

  The site's BlogPostPage.tsx component renders blog content via
  dangerouslySetInnerHTML wrapped in a `prose prose-lg prose-invert` container
  (@tailwindcss/typography). Earlier migrations for this slug stored the body
  as raw Markdown, which rendered as a single unformatted text blob since the
  browser does not parse `##`, `**`, or `[text](/link)` syntax.

  This migration replaces the Markdown body with clean semantic HTML (h2, h3,
  p, ul, li, strong, em, a, table). The typography plugin handles styling.

  Idempotent: UPDATE by slug.
*/

UPDATE blog_posts
SET content = $BODY$<h2>Key Takeaways</h2>
<ul>
<li>Waiting for a leak before thinking about your roof is one of the most expensive mistakes Broward and Palm Beach homeowners make.</li>
<li>Roof lifespan in South Florida depends heavily on material, installation quality, and coastal exposure — not on a generic &ldquo;20–30 year&rdquo; rule.</li>
<li>Overlays, unlicensed repairs, and blind faith in insurance are three common roofing myths that regularly lead to denied claims and complete replacements.</li>
<li>A real roof inspection — at least once a year and after major storms — is the best way to separate myths from reality.</li>
<li>All Phase Construction USA is licensed CCC-1331464 and CGC-1526236 and focuses on inspection-first guidance for Broward and Palm Beach homeowners.</li>
</ul>
<h2>Introduction: Why Roofing Myths Are So Costly in South Florida</h2>
<p>Most homeowners only think about their roof twice: when they buy the house, and when it starts leaking. That long stretch of inattention in between is where roofing myths do their damage. In South Florida, where hurricane season runs June through November, heavy afternoon thunderstorms are routine, and the insurance market has tightened considerably, believing the wrong thing about your roof can cost you real money — sometimes an entire replacement that could have been avoided, sometimes a denied claim, sometimes an improper repair that never should have been attempted.</p>
<p>This guide runs through the most common roofing myths we still hear from Broward and Palm Beach homeowners and explains what is actually true. Each section is short and scannable.</p>
<h2>Myth 1: &ldquo;If My Roof Isn&rsquo;t Leaking, It&rsquo;s Fine.&rdquo;</h2>
<p><strong>Reality:</strong> Leaks are usually the final symptom of long-running problems, not the first sign. Visible water stains are often the last indicator of failure — moisture can rot underlayment and decking for months before it appears indoors.</p>
<p>In South Florida, hidden damage develops gradually through wind-driven rain saturating permeable underlayment, rusted fasteners from salt exposure, and soft or rotted sheathing around flashing and penetrations. Curled, cracked, or loose shingles create openings for water. Granule loss on asphalt shingles leaves a smooth, bald appearance that indicates the shingles are nearing the end of their life. Dark streaks can signal algae growth, which thrives in humid conditions and contributes to roof deterioration.</p>
<p>By the time water shows up on ceilings or walls, insurance adjusters may classify much of the damage as pre-existing, which makes claims harder to collect in full. Staining on roof decking, musty smells in the attic, and discoloration around vents often appear months or years before an indoor drip. A <a href="/roof-inspection">roof inspection</a> catches these issues while they are still repairable — see our guide on <a href="/blog/choosing-between-roof-repair-and-full-replacement">choosing between roof repair and full replacement</a> for how we evaluate the decision once a problem is identified.</p>
<h2>Myth 2: &ldquo;All Roofs Last 20–30 Years No Matter What.&rdquo;</h2>
<p><strong>Reality:</strong> That rule-of-thumb comes from lab conditions, not coastal South Florida.</p>
<p>Lifespan varies significantly by material. Metal roofs generally last the longest, followed by tile and high-quality asphalt shingles. Asphalt shingles often underperform their brochure ratings here because of intense UV exposure, while well-installed tile and metal roofs can exceed published lifespans with proper maintenance. High humidity and salt exposure speed up degradation compared with drier, inland regions.</p>
<p>Installation quality matters as much as material choice. Fastener patterns, underlayment type, flashing details, and drainage routing all affect lifespan. Even a brand-new roof can suffer premature wear from poor installation — which is why an inspection shortly after installation is a smart move to verify workmanship while it is still covered by the installer.</p>
<p>An aging but well-maintained roof may still be a candidate for targeted repair. For systems at true end-of-life, see our <a href="/roof-replacement">roof replacement</a> services.</p>
<h2>Myth 3: &ldquo;A New Layer Over Old Shingles Saves Money.&rdquo;</h2>
<p><strong>Reality:</strong> This approach conflicts with Florida Building Code in most South Florida situations.</p>
<p>Overlays add weight to trusses and decking, trap heat and moisture, and hide problems like soft sheathing, rusted nails, or prior storm damage that should be corrected during a proper tear-off. In the High Velocity Hurricane Zone (HVHZ), which includes all of Broward County, shingle overlays are generally not allowed. Palm Beach County is not in HVHZ but still enforces FBC limits on re-roofs.</p>
<p>Florida&rsquo;s 25% rule also comes into play — when more than 25% of a roof is repaired or replaced within any 12-month period, the work generally has to bring that portion up to current code for wind and waterproofing. Most modern shingle manufacturers will not honor full wind and material warranties on an overlay installation.</p>
<p>A full tear-off with new underlayment and a code-compliant system costs more upfront but produces a stronger roof, better resale value, and fewer costly repairs down the road.</p>
<h2>Myth 4: &ldquo;My Insurance Will Cover Any Hurricane Damage Automatically.&rdquo;</h2>
<p><strong>Reality:</strong> Claims are subject to age-of-roof depreciation, policy exclusions, and deductibles.</p>
<p>Hurricane deductibles in Florida are typically percentage-based (commonly 2%, 5%, or 10% of dwelling coverage) and apply specifically to damage from named storms — much higher than standard peril deductibles. Replacement-cost policies pay differently than actual-cash-value (ACV) policies, which depreciate older roofs substantially.</p>
<p>Many insurers now ask for a recent inspection report at renewal. Lack of documented maintenance — missing shingles left unrepaired, clogged gutters, ignored flashing issues — can reduce or even deny portions of a claim. Manufacturer warranties also require routine inspections to remain valid, and warranties never cover storm damage, normal wear, or neglect.</p>
<p>Document your roof maintenance with photos, inspection reports, and invoices. Schedule a professional inspection before and after hurricane season to protect both your roof and your future claims.</p>
<h2>Myth 5: &ldquo;A Handyman Can Do a Quick Roof Repair — License Doesn&rsquo;t Matter.&rdquo;</h2>
<p><strong>Reality:</strong> Roofing is a licensed trade in Florida.</p>
<p>Roofing professionals carry a CCC license (Certified Roofing Contractor), and some firms also hold a CGC license (Certified General Contractor) for broader structural scope. Unlicensed roofing work is one of the top reasons insurance claims get denied, warranties get voided, and permitting problems show up at sale.</p>
<p>A small leak often looks like an easy DIY fix, but water travels along beams and barriers, so the true source is rarely where it drips. Common failures from unlicensed work include mismatched tile repairs, improperly sealed penetrations around vents or satellite dishes, and caulk-only patches where flashing should be replaced.</p>
<p>Always verify your contractor&rsquo;s CCC number on the Florida DBPR website. All Phase Construction USA carries both CCC-1331464 (Roofing) and CGC-1526236 (General Contractor), and we can show those credentials on request.</p>
<h2>Myth 6: &ldquo;All Flat Roofs Leak — It&rsquo;s Just a Matter of Time.&rdquo;</h2>
<p><strong>Reality:</strong> The real problem is usually poor design and installation shortcuts, not the flat profile itself.</p>
<p>A well-designed flat roof in South Florida uses tapered insulation for positive drainage, properly sized drains and scuppers, and high-quality membrane systems installed to manufacturer spec. Most premature flat-roof failures show up at edges, seams, and penetrations — HVAC stands, vents, parapet walls — rather than in the wide-open field of the membrane.</p>
<p>For the full breakdown on how slope affects drainage and material choice, see our guide on <a href="/blog/the-role-of-roof-pitch-in-water-drainage-and-design">the role of roof pitch in water drainage and design</a>. A properly engineered flat or low-slope system can perform reliably for 15–25+ years in Broward and Palm Beach when it is paired with regular maintenance and inspections.</p>
<h2>Myth 7: &ldquo;Impact-Resistant Shingles Give Me Hurricane-Proof Protection.&rdquo;</h2>
<p><strong>Reality:</strong> Impact resistance and wind performance are separate ratings.</p>
<p>UL 2218 impact ratings (Class 1–4) measure resistance to hail or falling debris. Hurricane performance relies on wind uplift ratings, fastening schedules, and edge details — a different set of specifications entirely.</p>
<p>Class H shingles are rated for wind speeds around 150 mph when installed exactly per manufacturer instructions and current code. Other hurricane-rated options include engineered metal systems (150–180+ mph) and NOA-approved tile systems (150+ mph), each with their own installation requirements. No roof is &ldquo;hurricane-proof&rdquo; in an absolute sense — the entire system determines storm performance.</p>
<p>For the engineering picture on fastening, uplift, and wind ratings, see our guide on <a href="/blog/what-makes-a-roof-hurricane-resistant">what makes a roof hurricane-resistant</a>.</p>
<h2>Myth 8: &ldquo;My Whole Roof Ages Evenly Across the House.&rdquo;</h2>
<p><strong>Reality:</strong> Roofs age in micro-climates.</p>
<p>South- and west-facing slopes in South Florida often degrade faster because of stronger afternoon sun. North-facing areas stay cooler but may hold moisture longer. Valleys, low spots, and areas behind chimneys or walls may experience ponding or slower drying after daily thunderstorms, increasing wear compared with open slopes.</p>
<p>Penetrations — plumbing stacks, HVAC units, vents, skylights — typically fail before the surrounding field. A proper roof evaluation examines each slope and each penetration individually. A quick ground-level glance that reveals no visible damage is no substitute for a thorough professional inspection.</p>
<h2>Why These Myths Are Especially Risky in Broward and Palm Beach</h2>
<p>These myths are costlier here than in most other parts of the state.</p>
<p>Broward County&rsquo;s HVHZ status means stricter fastening and material rules than most other Florida counties, and the 2023 Florida Building Code raised standards for wind resistance and secondary water barriers. For detail on how the two counties diverge, see our guide on <a href="/blog/why-palm-beach-and-broward-county-building-codes-differ-a-south-florida-guide-by-all-phase-construction-usa">why Palm Beach and Broward County building codes differ</a>.</p>
<p>Afternoon thunderstorms, king tides, and peak hurricane months magnify the cost of poor ventilation, clogged gutters, and neglected repairs. The tightening insurance market has made documented maintenance and code-compliant roofing work essential for keeping coverage.</p>
<h2>How to Cut Through the Myths: Get a Real Roof Inspection</h2>
<p>An honest, documented roof inspection from a licensed contractor is the most effective way to replace generic roofing advice with facts about your specific home.</p>
<p>A thorough inspection should include an exterior walk-through on every accessible slope, an attic check where possible, photographs of any problem areas, and a written summary of necessary repairs or monitoring items. Professional inspections are recommended annually — ideally before hurricane season — and after any major storm.</p>
<p>Catching small issues early typically costs a small fraction of the repair bill once the problem has escalated. Schedule a <a href="/roof-inspection">roof inspection</a> to replace guesswork with a real picture of your roof&rsquo;s condition.</p>
<h2>How All Phase Construction USA Approaches These Myths</h2>
<p>All Phase Construction USA serves Broward and Palm Beach homeowners with an inspection-first approach rather than immediate replacement pitches.</p>
<p>Our credentials are Florida Certified Roofing Contractor CCC-1331464 and Florida Certified General Contractor CGC-1526236. We maintain a 4.8/5 rating from over 136 verified reviews — see them on our <a href="/south-florida-roofing-reviews">reviews page</a>.</p>
<p>If repair is the right call, we say so, and our <a href="/roof-repair">roof repair</a> team handles the work. When a roof has reached true end-of-life, we also handle full <a href="/roof-replacement">roof replacement</a> projects.</p>
<h2>FAQ: Common Follow-Up Questions</h2>
<p><strong>How often should I have my roof inspected in South Florida?</strong></p>
<p>Annual inspections are a smart baseline, plus an additional inspection after any major storm — hurricane, named tropical system, or severe hail. Coastal homes with older roofs or complex flat and low-slope sections often benefit from both pre- and post-hurricane-season inspections each year.</p>
<p><strong>Does a leaking roof always mean I need a full replacement?</strong></p>
<p>No. Many leaks are localized problems at flashing, underlayment, or penetrations and can be addressed with a targeted repair if caught early. Review the decision framework in our guide on <a href="/blog/choosing-between-roof-repair-and-full-replacement">choosing between roof repair and full replacement</a> and schedule an inspection to understand the real scope of any damage.</p>
<p><strong>Will my insurance cover my whole roof if it&rsquo;s damaged in a storm?</strong></p>
<p>Coverage depends on your policy language, roof age, deductible amount, and whether the policy pays replacement cost or actual cash value. Review your declarations page, talk to your agent before storm season, and keep organized maintenance records and professional inspections on file to support any future claim.</p>
<p><strong>Is adding a new layer over my existing shingles allowed in my county?</strong></p>
<p>In Broward County&rsquo;s HVHZ, shingle overlays are generally not allowed under current Florida Building Code. Palm Beach County is not in HVHZ but still follows FBC rules that limit or prohibit multiple layers in most scenarios. Confirm with a licensed local contractor and your building department before planning any re-roof — tear-off and full replacement are often required for permit approval.</p>
<p><strong>How can I verify that my roofing contractor is properly licensed in Florida?</strong></p>
<p>Ask for the contractor&rsquo;s Florida license numbers and verify them on the Florida Department of Business and Professional Regulation (DBPR) website. All Phase Construction USA carries CCC-1331464 (Certified Roofing Contractor) and CGC-1526236 (Certified General Contractor). Never proceed with anyone who cannot provide valid license numbers or show current proof of credentials.</p>
<h2>Next Steps for South Florida Homeowners</h2>
<p>Believing common myths can turn small, affordable maintenance into large, stressful projects — especially under South Florida&rsquo;s weather and code environment. If you are not sure what your roof actually needs, an inspection is the right first step.</p>
<p>Schedule a professional <a href="/roof-inspection">roof inspection</a> or reach out through our <a href="/contact">contact page</a> with questions, even if you are not ready for major work. To see what other homeowners across Broward and Palm Beach have said about working with us, visit our <a href="/south-florida-roofing-reviews">reviews page</a>.</p>
<p>Licensed CCC-1331464 (Roofing) and CGC-1526236 (General Contractor).</p>$BODY$
WHERE slug = 'common-roofing-myths-that-homeowners-still-believe';
