/*
  # PR-23: Convert pr-21 blog content from Markdown to HTML

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
SET content = $BODY$<p><strong>Key Takeaways</strong></p>
<ul>
<li>Broward County is entirely within the High Velocity Hurricane Zone (HVHZ); Palm Beach County is not, despite being coastal.</li>
<li>Broward roofs in cities like Deerfield Beach, Fort Lauderdale, Pembroke Pines, and Coral Springs must meet stricter HVHZ requirements — affecting materials, installation methods, and overall price.</li>
<li>Palm Beach roofs in Boca Raton, Delray Beach, West Palm Beach, and Jupiter still face strong wind requirements, but use Florida Product Approval instead of Miami-Dade NOA documentation.</li>
<li>Quotes can look significantly different across the county line because of secondary water barrier rules, fastener schedules, and tested tile system requirements in HVHZ areas.</li>
<li>All Phase Construction USA holds both CCC-1331464 (roofing) and CGC-1526236 (general contractor) licenses, so we handle both Broward and Palm Beach code sets and can explain line-item differences on competing bids.</li>
</ul>
<h2>Introduction: Why &ldquo;Palm Beach vs Broward Building Code&rdquo; Affects Your Roof Quote</h2>
<p>When homeowners compare roof bids from contractors working in Deerfield Beach versus Boca Raton, the price differences often look puzzling. The distinction between the Palm Beach and Broward building codes isn&rsquo;t about one county being &ldquo;loose&rdquo; and the other &ldquo;strict&rdquo; — it comes down to whether your property falls inside or outside the High Velocity Hurricane Zone.</p>
<p>Hurricane Andrew in 1992 caused over $25 billion in damage and exposed critical weaknesses in South Florida construction. The resulting code overhaul created the HVHZ designation, which applies only to Miami-Dade and Broward counties. Palm Beach, despite sitting along the Atlantic Ocean, operates under different provisions of the Florida Building Code.</p>
<p>This article focuses on residential re-roofing and is written for homeowners, not engineers. Keep in mind that specific city building departments — whether Fort Lauderdale or Jupiter — add their own permit processes on top of county-level rules.</p>
<h2>What the HVHZ Is and Why the Boundary Matters</h2>
<p>HVHZ stands for High Velocity Hurricane Zone, a specialized section of the Florida Building Code created after Hurricane Andrew. HVHZ provisions impose the most stringent wind-load, testing, and installation requirements anywhere in Florida.</p>
<p>The HVHZ covers only Miami-Dade County and Broward County. Palm Beach County is <strong>not</strong> in the HVHZ, even along the coast. Every permitted re-roof in Broward — from Deerfield Beach to Pembroke Pines — must meet these enhanced standards.</p>
<p>Design wind speed differences matter for roofing calculations:</p>
<ul>
<li>Broward&rsquo;s ultimate design wind speed is generally <strong>175 mph</strong> countywide under current ASCE 7 mapping.</li>
<li>Palm Beach is mapped at roughly <strong>170 mph</strong> for most areas, with some coastal risk zones reaching up to <strong>180 mph</strong>.</li>
<li>Inland Florida drops to <strong>140 mph and below</strong> under standard wind zones.</li>
<li>The boundary between Boca Raton (Palm Beach) and Deerfield Beach (Broward) can change which products are allowed, what underlayment is required, and how tightly fasteners are spaced.</li>
</ul>
<p>Palm Beach remains a high-wind coastal county under the Florida Building Code with its own robust requirements, but it follows different chapters and testing pathways than Broward&rsquo;s HVHZ standards. HVHZ construction requires higher design pressures, tested roof assemblies, and mandatory large- and small-missile impact testing for windows and doors.</p>
<h2>Product Approvals: Miami-Dade NOA vs Florida Product Approval</h2>
<p>Roofing materials and other building products must be formally approved before installation. The Palm Beach vs Broward distinction directly affects which approval documentation appears on your permit package.</p>
<p><strong>Miami-Dade Notice of Acceptance (NOA):</strong></p>
<ul>
<li>Issued by Miami-Dade County after rigorous testing including cyclic wind uplift and large/small missile impact resistance.</li>
<li>Covers complete roof assemblies plus other building products such as windows, doors, underlayments, fasteners, metal panels, and battens.</li>
<li>Required for all HVHZ counties, including Broward.</li>
</ul>
<p><strong>Florida Product Approval (FL#):</strong></p>
<ul>
<li>Statewide approval system under the Florida Building Code.</li>
<li>Uses FL# numbers and is the standard path for non-HVHZ counties like Palm Beach.</li>
<li>Covers shingles, metal panels, tile systems, windows, and doors through accredited-lab testing.</li>
</ul>
<p>In practical terms: a homeowner in West Palm Beach will see &ldquo;FL#&rdquo; references on a quote, while a homeowner in Fort Lauderdale will see &ldquo;NOA#&rdquo; references for the same type of tile or metal roof.</p>
<p><strong>Quick comparison:</strong></p>
<ul>
<li>Broward = Miami-Dade NOA required for roofing, plus impact-rated windows and doors.</li>
<li>Palm Beach = Florida Product Approval accepted.</li>
</ul>
<h2>On-the-Roof Differences (Secondary Water Barrier, Fasteners, Tile Attachment)</h2>
<p>Beyond paperwork, HVHZ rules in Broward change what actually gets installed on your roof deck. These differences drive real cost variations and are central to why HVHZ roofs tend to weather storms better.</p>
<p><strong>Secondary Water Barrier:</strong></p>
<ul>
<li>Broward HVHZ requires a full-coverage self-adhering peel-and-stick membrane over the entire roof deck.</li>
<li>Palm Beach often allows hybrid systems with mechanically attached underlayment and peel-and-stick limited to critical areas.</li>
<li>This single item can add $2–$4 per square foot in material and labor.</li>
</ul>
<p><strong>Fasteners and Nailing Patterns:</strong></p>
<ul>
<li>HVHZ mandates ring-shank nails with tighter spacing (as close as 3&rdquo; on-center at edges).</li>
<li>Palm Beach requires enhanced nailing over inland Florida but typically allows wider spacing.</li>
<li>HVHZ typically requires 6 nails per shingle versus 4–5 in non-HVHZ areas.</li>
</ul>
<p><strong>Tile Roof Systems:</strong></p>
<ul>
<li>Broward demands fully tested roof assemblies installed exactly per the NOA, including specific batten spacing, foam beads, and fastener patterns.</li>
<li>Palm Beach follows Florida Product Approval pathways with slightly different uplift criteria.</li>
</ul>
<p><strong>Example comparison:</strong> A Coral Springs tile roof quote will include full peel-and-stick, ring-shank nailing, and an NOA-tested tile assembly. A similar roof in Delray Beach may show Florida Product Approval tile, standard high-wind underlayment, and a lower labor line — often 15–25% less overall.</p>
<p>HVHZ details add cost but also add resilience, and they can help on the insurance side. A wind-mitigation inspection after an HVHZ-spec re-roof commonly unlocks meaningful premium credits with Citizens Property Insurance and private carriers.</p>
<h2>Permits and Inspections Across County and City Lines</h2>
<p>Both Broward and Palm Beach require a building permit for roofing work along with multiple inspections, but the forms, reviewers, and on-site expectations differ. Broward County also enforces the Building Safety Inspection Program: structures reach their first mandatory re-inspection at 30 years (coastal high-hazard) or 40 years, then every 10 years thereafter. Miami-Dade runs a parallel program. Palm Beach does not currently impose a county-wide structural recertification.</p>
<p><strong>Broward Permitting (HVHZ):</strong></p>
<ul>
<li>Plan reviewers scrutinize NOAs, fastening schedules, and uplift calculations closely.</li>
<li>Typical inspections include dry-in (underlayment verification), in-progress, and final.</li>
<li>Cities like Pembroke Pines and Fort Lauderdale commonly reject submissions with incomplete HVHZ documentation.</li>
</ul>
<p><strong>Palm Beach Permitting:</strong></p>
<ul>
<li>Cities like Boca Raton, Delray Beach, and Jupiter review Florida Product Approvals and wind design data.</li>
<li>Inspections still include sheathing, underlayment, and final roof checks.</li>
<li>Processing typically runs 2–4 weeks versus 4–6 weeks in Broward.</li>
</ul>
<p>Some city building departments add local amendments, photo-documentation requirements, or specific forms. Mistakes with code zones — treating a Broward job like Palm Beach — can cause permit rejections, mid-job corrections, or failed inspections. For a deeper look at inspection stages, see our <a href="/roof-replacement-process">complete roof replacement process guide</a>.</p>
<h2>Why Licensing (Dual CCC + CGC) Matters at the County Line</h2>
<p>Not all contractors are equally licensed. When working near the county border, it helps to use a company that routinely operates under both Broward HVHZ and Palm Beach non-HVHZ rules.</p>
<p>All Phase Construction USA holds both a Florida roofing contractor license (<strong>CCC-1331464</strong>) and a certified general contractor license (<strong>CGC-1526236</strong>). This dual licensing covers both structural and roofing scopes — including work that must meet HVHZ standards.</p>
<p><strong>CCC License Benefits:</strong></p>
<ul>
<li>Specifically qualifies the contractor for roofing work, permits, and affidavits.</li>
<li>Valid across municipalities from Coral Springs to West Palm Beach.</li>
<li>Required for roof-only scopes.</li>
</ul>
<p><strong>CGC License Benefits:</strong></p>
<ul>
<li>Covers structural issues discovered during re-roofing (damaged trusses, rotten fascia, deck replacement).</li>
<li>Eliminates the need for separate subcontractors when problems exceed &ldquo;roofing only&rdquo; scope.</li>
<li>Essential for complex HVHZ jobs requiring engineering.</li>
</ul>
<p>A contractor familiar with both counties&rsquo; codes will avoid misusing NOAs, mixing up product approvals, or under-designing a Broward roof using Palm Beach assumptions. You can see examples of our work across both counties on our <a href="/south-florida-roofing-reviews">South Florida roofing reviews page</a>.</p>
<h2>Practical Takeaways for Homeowners</h2>
<p>Here&rsquo;s how to use this information when reviewing quotes and choosing a contractor.</p>
<p><strong>Questions to ask Broward roofers:</strong></p>
<ul>
<li>Which Miami-Dade NOA covers my roof system?</li>
<li>Where on the proposal do you show peel-and-stick secondary water barrier?</li>
<li>What is the fastener schedule for my sheathing and shingles?</li>
</ul>
<p><strong>Questions to ask Palm Beach roofers:</strong></p>
<ul>
<li>Which Florida Product Approval numbers are you using?</li>
<li>What wind speed and exposure category did you design to for my address?</li>
<li>Is the underlayment system appropriate for a wind-borne debris region?</li>
</ul>
<p>Broward quotes should explicitly include HVHZ items like full-coverage self-adhered underlayment, ring-shank nails, and HVHZ-rated systems — not vague &ldquo;upgrades.&rdquo; Palm Beach homeowners should verify their quote meets current design pressure requirements for their specific city.</p>
<p>If you&rsquo;re near the county border (Deerfield Beach versus Boca Raton), compare at least two quotes and ask each contractor to explain how local code drives their price differences. If you have quotes you&rsquo;d like us to review, our team can walk you through which line items are code-driven versus optional upgrades.</p>
<h2>FAQ: Palm Beach vs Broward Building Code for Roofing</h2>
<p><strong>Is any part of Palm Beach County considered HVHZ for roofing?</strong></p>
<p>No. Under the current Florida Building Code, Palm Beach County is treated as non-HVHZ for roofing purposes, even along the coast. Only Miami-Dade and Broward are officially defined as HVHZ. Palm Beach still has high-wind and wind-borne-debris rules, but they are enforced under non-HVHZ chapters using Florida Product Approval rather than the HVHZ sections used in Broward.</p>
<p><strong>What does &ldquo;building to HVHZ standards&rdquo; actually require?</strong></p>
<p>HVHZ-compliant construction uses tested roof assemblies with Miami-Dade Notices of Acceptance, full-coverage self-adhered secondary water barriers, tighter fastener schedules, and impact-rated windows and doors that pass large- and small-missile impact testing. These requirements are the most stringent in Florida and are designed for sustained hurricane-force wind and flying-debris conditions.</p>
<p><strong>Does a Broward-style HVHZ roof cost more than a Palm Beach roof?</strong></p>
<p>Generally, yes. HVHZ compliance in Broward adds cost through full peel-and-stick coverage, more fasteners, stricter inspections, and Miami-Dade NOA systems. A comparable roof is often 15–25% more expensive than in nearby Palm Beach. Actual price depends on size, material choice, and existing deck condition.</p>
<p><strong>Can I choose to &ldquo;build to HVHZ&rdquo; in Palm Beach for extra safety?</strong></p>
<p>Yes. While Palm Beach does not require HVHZ compliance, many Miami-Dade NOA products and HVHZ-style installation methods can be voluntarily used if accepted by the local building department. This usually increases upfront cost but can improve wind resistance and help with insurance mitigation credits.</p>
<p><strong>What happens if a Broward roof is installed using non-HVHZ methods or products?</strong></p>
<p>Using non-HVHZ products or skipping secondary water barriers in Broward can lead to failed inspections, stop-work orders, and costly tear-offs before final approval. Non-compliant work can also create issues with future insurance claims or home sales if the as-built roof doesn&rsquo;t match approved permit documents.</p>
<p><strong>How do I verify that my roofer understands both Broward and Palm Beach codes?</strong></p>
<p>Check the contractor&rsquo;s license numbers on myfloridalicense.com, ask for recent project addresses in both counties, and request copies of sample NOA packages (for Broward) or Florida Product Approval sheets (for Palm Beach). A contractor with ongoing work from Coral Springs to Jupiter should be able to explain these code differences in simple terms before you sign anything.</p>$BODY$
WHERE slug = 'why-palm-beach-and-broward-county-building-codes-differ-a-south-florida-guide-by-all-phase-construction-usa';
