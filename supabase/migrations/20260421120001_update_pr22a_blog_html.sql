/*
  # PR-23: Convert pr-22a blog content from Markdown to HTML

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
<li>In Broward and Palm Beach Counties, three things decide repair vs. replacement faster than anything else: roof age, the extent of damage, and Florida&rsquo;s 25% rule.</li>
<li>South Florida real-world lifespans are shorter than the manufacturer warranty suggests — asphalt shingles 15–20 years, tile underlayment 20–25 years, metal 40–50+ years.</li>
<li>The 25% rule can flip a &ldquo;big repair&rdquo; into a mandatory full replacement: if work covers more than 25% of the roof within any 12-month period, the whole roof must be brought up to current code.</li>
<li>Broward County is in the High Velocity Hurricane Zone (HVHZ); Palm Beach County is not, but still enforces high-wind installation standards.</li>
<li>All Phase Construction USA holds both a roofing license (CCC-1331464) and a certified general contractor license (CGC-1526236), and gives written repair-vs-replace assessments — with photos and measurements — in Broward and Palm Beach Counties.</li>
</ul>
<h2>Introduction</h2>
<p>For South Florida homeowners, the repair-or-replace decision is almost always a money decision. Go too conservative on a roof that&rsquo;s already past its useful life and you end up paying twice. Replace too early and you leave years of serviceable roof on the table. The trick is pairing an honest damage assessment with a few South Florida-specific rules that most national roofing content gets wrong — especially Florida Building Code&rsquo;s 25% rule and the real (not marketing) lifespans of shingles, tile, and metal in this climate.</p>
<h2>Quick Decision Framework</h2>
<p>If you need an answer right now, walk through these four filters before scheduling an inspection.</p>
<p><strong>Roof age:</strong></p>
<ul>
<li>Asphalt shingle over 15–18 years often leans toward replacement.</li>
<li>Tile roofs with underlayment over 20–25 years are likely candidates for a reroof, even if the tiles themselves look fine.</li>
<li>Metal roofs at 30+ years are case-by-case depending on condition.</li>
</ul>
<p><strong>Damage extent:</strong></p>
<ul>
<li>One or two isolated leaks or a few missing shingles or tiles may be repairable.</li>
<li>Widespread curling, cracking, soft decking, or multiple leak points across different rooms usually signals replacement.</li>
</ul>
<p><strong>Location:</strong></p>
<ul>
<li>Broward County sits in the HVHZ, which triggers stricter product approvals and nailing patterns on any major work.</li>
<li>Palm Beach County is outside the HVHZ but still enforces strong high-wind installation rules.</li>
</ul>
<p><strong>Insurance status:</strong></p>
<ul>
<li>Active policies on newer roofs typically cover both repair and replacement options.</li>
<li>Older roofs past carrier age limits may have restricted coverage or higher deductibles.</li>
<li>Some carriers require full replacement once damage passes internal thresholds.</li>
</ul>
<p>Still unsure? The next two sections walk through when each option makes sense.</p>
<h2>When Roof Repair Is Enough</h2>
<p>Targeted repair makes financial sense in a few specific scenarios.</p>
<p><strong>Young roof, localized damage.</strong> Asphalt shingles under 10–12 years with solid granule retention, tile systems under 15 years with no prior leak history, or metal roofs under 25 years with intact seams can almost always be repaired rather than replaced after a single event.</p>
<p><strong>Isolated storm damage.</strong> A 10×10-foot section of missing shingles after a June thunderstorm in Deerfield Beach, a handful of cracked tiles from a fallen palm frond in Boca Raton, or impact damage confined to one slope are textbook repair scenarios.</p>
<p><strong>Single-source leaks.</strong> Staining around a specific penetration (skylight, vent stack, chimney) with an attic inspection showing dry decking elsewhere is almost always a flashing, sealant, or boot failure — not a roof-system failure.</p>
<p><strong>Flashing and sealant issues.</strong> Failed flashing around walls, valleys, or vents and dried or cracked sealant can be replaced without disturbing the surrounding roof system.</p>
<p>The cost-vs-remaining-life math is the simplest sanity check. An $800–$1,500 repair on a 7-year-old roof that buys another 8–10 years is a strong investment. That same $1,500 repair on a 20-year-old shingle roof only delays the inevitable by a year or two — not a strong use of money.</p>
<p>As long as you stay under the 25% threshold, a repair does not require bringing the rest of the roof up to current code, which keeps costs predictable.</p>
<h2>When Full Roof Replacement Is the Smarter Call</h2>
<p>Once certain red flags appear, replacement is usually the cheaper long-term move even though it costs more up front.</p>
<p><strong>Age limits by material (real South Florida, not brochure):</strong></p>
<ul>
<li>Asphalt shingle: 15–20 years despite 30/40-year manufacturer warranties designed for northern climates.</li>
<li>Concrete and clay tile: 25–40+ years on the tile itself, but underlayment typically fails at 20–25 years — and underlayment is what keeps water out.</li>
<li>Metal: 40–50+ years with proper maintenance.</li>
</ul>
<p><strong>Widespread surface damage.</strong> Whole slopes of curled or missing shingles in Coral Springs, large fields of cracked tiles in Parkland, or granule loss and exposed fiberglass mat across multiple roof planes all point to system failure rather than localized damage.</p>
<p><strong>Multiple leaks and interior damage.</strong> Ceiling staining in several rooms, leaks returning in the same spot after past repairs, or mold and deck rot found during attic inspection are signs the roof is done — not just injured.</p>
<p><strong>Structural and deck issues.</strong> Soft or spongy decking when walked on, visible sagging, or prior unpermitted repairs that don&rsquo;t meet current Florida Building Code generally need to be addressed with a full tear-off and proper deck repair.</p>
<p><strong>Discontinued materials.</strong> When a shingle or tile product is no longer manufactured, matching becomes impossible, and insurance carriers often push toward full replacement once visible damage crosses a threshold.</p>
<p><strong>Storm-history fatigue.</strong> Roofs repeatedly patched after Irma (2017), Nicole (2022), or other tropical storms often reach a point where repairs keep stacking up without solving the underlying problem. See our <a href="/roof-replacement-process">step-by-step roof replacement process guide</a> for what a full reroof actually involves.</p>
<h2>The Florida 25% Rule — The Tipping Point</h2>
<p>This rule is often what turns a &ldquo;big repair&rdquo; into a mandatory full replacement.</p>
<p><strong>The exact requirement:</strong> Florida Building Code&rsquo;s 25% rule states that if repair or replacement work covers more than 25% of a roof area within any 12-month period, the entire roof must be brought up to current code.</p>
<p><strong>What &ldquo;roof area&rdquo; means:</strong> The calculation applies to the total roof, or to individual roof sections separated by ridges, valleys, or other features. Multiple smaller repairs can stack — if a spring repair plus a fall repair cross 25% in the same 12-month window, the rule applies.</p>
<p><strong>Worked example:</strong> A 2,000-square-foot roof in Pompano Beach sustains 600 square feet of damage after a summer storm. That&rsquo;s 30% — above the threshold — which triggers a full reroof under current code requirements.</p>
<p><strong>Broward vs. Palm Beach code impact:</strong> In Broward, hitting the 25% threshold means the rebuilt roof must meet HVHZ rules — Miami-Dade NOA-tested products, full-coverage self-adhered underlayment, and tighter fastener schedules. In Palm Beach, the code-upgrade is to the current high-wind non-HVHZ standard. The cost delta between a repair that stays under 25% and a repair that goes over is often thousands of dollars. For more on how the two counties&rsquo; codes differ, see our guide to <a href="/blog/why-palm-beach-and-broward-county-building-codes-differ-a-south-florida-guide-by-all-phase-construction-usa">Palm Beach vs. Broward building codes</a>.</p>
<p><strong>Why honest measurement matters:</strong> A contractor should measure, photograph, and document the damaged area so you understand exactly why the 25% rule does or does not apply in your case. Vague &ldquo;it&rsquo;s probably over 25%&rdquo; handwaving usually means the contractor wants the larger job.</p>
<h2>Cost Ranges in South Florida (2026)</h2>
<p>Ballpark 2026 pricing for Broward and Palm Beach residential roofs. Actual quotes vary with roof size, pitch, material, and access conditions.</p>
<p><strong>Repair ranges:</strong></p>
<table>
<thead>
<tr>
<th>Repair Type</th>
<th>Estimated Cost</th>
</tr>
</thead>
<tbody>
<tr>
<td>Small shingle repair</td>
<td>$350 – $750</td>
</tr>
<tr>
<td>Moderate leak repair with flashing</td>
<td>$800 – $1,800</td>
</tr>
<tr>
<td>Tile repairs in several spots</td>
<td>$1,000 – $3,000</td>
</tr>
</tbody>
</table>
<p><strong>Replacement ranges by material:</strong></p>
<table>
<thead>
<tr>
<th>Material</th>
<th>Estimated Total Cost</th>
</tr>
</thead>
<tbody>
<tr>
<td>Asphalt shingle reroof</td>
<td>$8,000 – $15,000</td>
</tr>
<tr>
<td>Tile reroof with underlayment</td>
<td>$12,000 – $25,000</td>
</tr>
<tr>
<td>Standing-seam metal system</td>
<td>$20,000 – $35,000</td>
</tr>
</tbody>
</table>
<p><strong>Cost-per-year math:</strong> A $2,000 repair on a 19-year-old shingle roof that buys another 1–2 years costs $1,000–$2,000 per year of use. A $12,000 replacement lasting 18+ years costs roughly $666 per year — better value over time.</p>
<p>Hitting the 25% threshold can raise project cost meaningfully because the full roof has to meet current code, often adding upgraded underlayment and fasteners to the scope. For a deeper Broward-specific cost breakdown, see our <a href="/blog/roof-replacement-cost-broward-county-2026">2026 Broward roof replacement cost guide</a>.</p>
<h2>Insurance Considerations</h2>
<p>This section is context only. Talk directly with your insurance agent or a licensed public adjuster before making a decision based on coverage.</p>
<p><strong>Age and condition reviews.</strong> Older asphalt roofs (18–20 years) or tile roofs with original underlayment approaching 25 years may have limited coverage, age-based exclusions, or higher deductibles under current policies.</p>
<p><strong>Carrier thresholds.</strong> Some insurance carriers require full replacement rather than patching when materials are discontinued or when damage exceeds a carrier-defined threshold, even if a targeted repair would work from a purely technical standpoint.</p>
<p><strong>Actual cash value vs. replacement cost.</strong> ACV policies depreciate older roofs and can pay significantly less than full replacement cost; RCV policies typically pay closer to current replacement prices minus your deductible. The specific depreciation schedule depends entirely on your policy — check your declarations page or ask your agent.</p>
<p><strong>Documentation matters.</strong> Photos, moisture readings, and written findings from a licensed contractor strengthen claims for either a repair or a replacement path.</p>
<p><strong>Code compliance is independent.</strong> The Florida 25% rule applies regardless of what your insurance pays. Carriers generally won&rsquo;t pay for work that violates code requirements.</p>
<h2>Why Licensing Matters for This Decision</h2>
<p>A contractor with only a roofing license can work on roof coverings — shingles, tiles, metal panels, underlayment. Structural issues discovered during a tear-off (rotten decking, damaged trusses, failing fascia) typically require a general contractor to address.</p>
<p>All Phase Construction USA holds both a Florida roofing license (<strong>CCC-1331464</strong>) and a certified general contractor license (<strong>CGC-1526236</strong>). One call, one permit, one project manager handles everything from shingle work to structural deck repair — no subcontractor markups and no coordination delays.</p>
<p>Dual licensing also reduces bias on the repair-vs-replace diagnosis. Because our business includes both targeted <a href="/roof-repair">roof repair</a> work and full <a href="/roof-replacement">roof replacement</a>, we&rsquo;re not financially pushed toward only selling reroofs. Smaller jobs are part of what we do too.</p>
<p><strong>How our assessment works:</strong></p>
<ul>
<li>On-roof inspection of visible damage</li>
<li>Attic check where accessible</li>
<li>Measurement of damaged area for 25% rule calculations</li>
<li>Photo documentation of findings</li>
<li>Written repair-vs-replace comparison you can review at your own pace</li>
</ul>
<p>Service area includes Deerfield Beach, Pompano Beach, Coral Springs, Parkland, Fort Lauderdale, Boca Raton, Delray Beach, West Palm Beach, and neighboring communities across Broward and Palm Beach Counties. Before accepting any repair-only or replacement-only recommendation, ask for license numbers, proof of insurance, and recent local references.</p>
<h2>FAQ: Roof Repair vs. Replacement in South Florida</h2>
<p><strong>How do I know when a roof is too damaged to repair?</strong></p>
<p>Look for multiple active leaks, large soft spots when walking the roof, visible sagging, or deck rot discovered once shingles or tiles are lifted. When 25% or more of the roof area needs work within a 12-month window, Florida Building Code usually forces a full replacement to current standards. Repeated storm patching in Broward&rsquo;s HVHZ is often a sign the underlying system has reached end-of-life.</p>
<p><strong>Should I repair or replace my 18-year-old shingle roof in Broward?</strong></p>
<p>Eighteen years is near the upper end of the realistic 15–20 year shingle lifespan in South Florida. If damage is minor and the rest of the roof is flat, well-granulated, and leak-free, one last targeted repair can be reasonable. If there&rsquo;s widespread curling, granule loss, or prior repairs scattered across multiple slopes, replacement is usually the smarter long-term investment — especially with HVHZ code upgrades baked in.</p>
<p><strong>Is it ever smart to replace a roof that isn&rsquo;t leaking yet?</strong></p>
<p>Yes. Proactive replacement makes sense when an older roof is clearly near end-of-life — a 22-year-old shingle roof, or original tile underlayment from the early 2000s that still sheds water but shows advanced wear. Benefits include better insurance eligibility, a code-compliant system in place before hurricane season, and lower risk of emergency leaks during a storm.</p>
<p><strong>Does Palm Beach County have the same wind requirements as Broward?</strong></p>
<p>No. Broward County is in the HVHZ (High Velocity Hurricane Zone) and Palm Beach County is not. Product approvals and fastening patterns differ between the two. Palm Beach still enforces strong high-wind installation rules — just not the stricter HVHZ standards. Work with a licensed contractor who operates under both sets of rules, especially if you&rsquo;re near the county border.</p>
<p><strong>What should I do before calling a roofer to check my damage?</strong></p>
<p>Take clear photos of ceiling stains, exterior damage, and any debris in your yard. Note when leaks appear — for example, only during wind-driven rain from a specific direction. Check your policy documents so you know your deductible and whether your carrier has age limits on roof coverage. Then schedule an on-site inspection with a licensed contractor rather than relying on drone photos or drive-by &ldquo;free estimates.&rdquo;</p>
<h2>Next Steps</h2>
<p>If you&rsquo;re in Broward or Palm Beach County and weighing your options, we&rsquo;ll come out, document the damage with photos and measurements, and give you a written repair-only vs. replacement comparison so you can decide at your own pace. No pressure. For homeowners who want to learn more first, we have guides on <a href="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive">how to spot early signs of roof damage</a> and <a href="/roof-replacement-process">what to expect during a replacement project</a>.</p>$BODY$
WHERE slug = 'choosing-between-roof-repair-and-full-replacement';
