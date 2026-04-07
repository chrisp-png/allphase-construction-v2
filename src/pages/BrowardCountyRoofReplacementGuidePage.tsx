import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function BrowardCountyRoofReplacementGuidePage() {
  const faqs = [
    {
      q: 'How much does a roof replacement cost in Broward County?',
      a: 'A full roof replacement in Broward County typically costs $9,000–$16,000 for asphalt shingles, $16,000–$30,000 for concrete tile, and $20,000–$38,000 for standing seam metal on a standard single-family home. Costs are higher than the state average because all of Broward County is in the High Velocity Hurricane Zone (HVHZ), which requires Miami-Dade NOA-approved materials, engineered installation, and additional inspections.'
    },
    {
      q: 'What is the 25% rule for roofing in Broward County?',
      a: 'Under the Florida Building Code, if 25% or more of your roof system is repaired, replaced, or recovered within any 12-month period, the entire roof must be brought into compliance with the current building code. In Broward County, this means full HVHZ compliance including Miami-Dade NOA-approved products, proper underlayment, and engineered attachment methods. This rule frequently comes into play after storm damage when insurance adjusters assess the extent of repairs needed.'
    },
    {
      q: 'Do I need a permit for a roof replacement in Broward County?',
      a: 'Yes. Every roof replacement in Broward County requires a building permit from the local municipality. Because Broward is entirely within the HVHZ, permits also require product approval documentation (Miami-Dade NOA), engineered drawings for tile and metal roofs, and the project must pass multiple inspections including a final inspection. Working without a permit is illegal and can void your insurance coverage and create problems when selling your home.'
    },
    {
      q: 'How long does a roof replacement take in Broward County?',
      a: 'The physical installation takes 2–5 days for shingles and 5–10 days for tile or metal. However, the full timeline including permitting typically runs 3–6 weeks. Permit processing times vary by municipality — Fort Lauderdale, Pompano Beach, Deerfield Beach, and Coral Springs each have their own building departments with different turnaround times.'
    },
    {
      q: 'What roofing materials are approved for Broward County HVHZ?',
      a: 'All roofing materials installed in Broward County must have Miami-Dade NOA (Notice of Acceptance) approval. This includes specific product lines of asphalt shingles, concrete and clay tiles, metal roofing panels, and flat roofing membranes. Your roofing contractor should provide the NOA documentation as part of the permit application. Not all products sold in Florida meet HVHZ standards, so material selection matters.'
    },
    {
      q: 'Will my insurance cover a roof replacement in Broward County?',
      a: 'Coverage depends on your policy and the cause of damage. Storm damage from hurricanes, wind, or hail is typically covered under homeowners insurance, though deductibles (often 2–5% of your home value for hurricane deductibles) apply. Age-related wear is generally not covered. Many insurers are now requiring roof replacement as a condition of policy renewal for roofs over 15–20 years old. A contractor experienced with insurance claims can help maximize your coverage through proper documentation and supplemental claims.'
    },
    {
      q: 'What happens during a Broward County roof inspection?',
      a: 'Broward County requires multiple inspections during a roof replacement. The initial inspection verifies the tear-off and examines the roof deck condition. Subsequent inspections check underlayment installation, flashing, and proper attachment. The final inspection confirms the completed installation meets all HVHZ code requirements. Your contractor coordinates all inspections with the local building department.'
    },
    {
      q: 'Should I repair or replace my Broward County roof?',
      a: 'If your roof is under 10 years old with minor, isolated damage, repair is usually sufficient. If it is over 15 years old, has multiple leak points, or if the damage exceeds 25% of the roof area (triggering the 25% rule), replacement is the better investment. A free roof inspection from a licensed contractor can help you make this decision based on the actual condition of your roof system.'
    },
    {
      q: 'What does a roof replacement cost in Deerfield Beach in 2026?',
      a: 'A typical asphalt shingle roof replacement in Deerfield Beach runs $14,000 to $22,000, while concrete tile and standing-seam metal roofs land between $25,000 and $42,000 depending on square footage, deck condition, and HVHZ permit fees. Shingle pricing is higher than non-HVHZ Florida because Broward County requires upgraded peel-and-stick underlayment, NOA-approved fastening patterns, and shingles rated for 170+ mph wind uplift. All Phase delivers a fixed all-inclusive quote within 24 hours of a free roof inspection. See our complete Deerfield Beach roof replacement cost breakdown at /roof-replacement-cost-deerfield-beach.'
    },
    {
      q: 'Is a permit required to replace a roof in Coral Springs?',
      a: 'Yes. Florida law requires a permit any time more than 25% of a roof is replaced, the material changes, or the structure is altered. In Coral Springs, the City Building Division typically issues residential roofing permits in 5 to 10 business days, with fees ranging $150 to $500. All Phase Construction USA handles the entire permit, HVHZ inspection, and final close-out for you. See our full Coral Springs roof permit guide at /coral-springs-roof-permit-guide.'
    },
    {
      q: 'When is it time to replace your roof in Pompano Beach?',
      a: 'Pompano Beach homeowners should plan a replacement when shingles are curling or missing, when granules are filling the gutters, when daylight shows through the attic deck, or when the roof is past 18 years for shingles or 35+ years for tile. South Florida sun and salt air shorten lifespans by 15 to 25 percent. Schedule a free Pompano Beach roof inspection at /pompano-beach-roof-inspection to confirm what your roof needs.'
    }
  ];
  const pageSchema1 = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          };

  const pageSchema2 = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allphaseconstructionfl.com" },
              { "@type": "ListItem", "position": 2, "name": "Broward County Roof Replacement Guide", "item": "https://allphaseconstructionfl.com/broward-county-roof-replacement-guide" }
            ]
          };

  const pageSchema3 = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Broward County Roof Replacement Guide — 2026",
            "description": "Complete guide to roof replacement in Broward County, FL.",
            "author": { "@type": "Organization", "name": "All Phase Construction USA", "url": "https://allphaseconstructionfl.com" },
            "publisher": { "@type": "Organization", "name": "All Phase Construction USA", "url": "https://allphaseconstructionfl.com" },
            "datePublished": "2026-03-01",
            "dateModified": "2026-03-31"
          };

  return (
    <>
      <SEO
            title="Broward County Roof Replacement Guide (2026) | Costs, Permits, HVHZ Requirements"
            description="Complete guide to roof replacement in Broward County, FL. HVHZ requirements, costs by material, the 25% rule, permit process, insurance claims, and how to choose a licensed contractor."
            canonicalPath="/broward-county-roof-replacement-guide"
          />
          <InlineSchema schemas={[pageSchema1, pageSchema2, pageSchema3]} />

      <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-yellow-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Broward County Roof Replacement Guide</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Broward County Roof Replacement Guide <span className="text-yellow-400">(2026)</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              Everything homeowners need to know about replacing a roof in Broward County — from HVHZ requirements and the 25% rule to costs, permits, and insurance claims. Written by licensed roofing professionals with 2,500+ completed roofs in the area.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Broward County Roofing Is Different</h2>
          <div className="bg-zinc-900 border border-amber-200 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">The HVHZ Factor</h3>
            <p className="text-lg text-zinc-300 mb-4">
              All of Broward County falls within Florida's High Velocity Hurricane Zone (HVHZ). This is the strictest building code zone in the state, originally developed after Hurricane Andrew devastated South Florida in 1992. What this means for your roof:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-1">Product Approvals Required</h4>
                <p className="text-zinc-300">Every roofing product must carry a Miami-Dade NOA (Notice of Acceptance). Standard Florida-approved products are not sufficient in the HVHZ.</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-1">Engineered Installations</h4>
                <p className="text-zinc-300">Tile and metal roofing installations require engineering calculations specifying attachment methods, fastener patterns, and wind load resistance for your specific roof geometry.</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-1">Enhanced Underlayment</h4>
                <p className="text-zinc-300">HVHZ requires self-adhering modified bitumen underlayment or equivalent secondary water barrier, which provides protection even if the primary roofing material is displaced during a hurricane.</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-1">Rigorous Inspections</h4>
                <p className="text-zinc-300">Multiple mandatory inspections during installation ensure every layer meets code. Inspectors verify product NOA compliance, attachment methods, and proper installation technique.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Understanding the Florida 25% Rule</h2>
          <div className="bg-zinc-900 border border-red-200 rounded-2xl p-8">
            <p className="text-lg text-zinc-300 mb-4">
              Under the Florida Building Code (Section 706.1.1), if more than 25% of a roof system is repaired, replaced, or recovered within any 12-month period, the entire roofing system must be brought into compliance with the current building code.
            </p>
            <h3 className="text-xl font-bold text-white mb-3">What This Means in Broward County:</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-start">
                <span className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                <p className="text-zinc-300">If storm damage affects more than 25% of your roof area, you cannot simply patch it — a full replacement to current HVHZ standards is required.</p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                <p className="text-zinc-300">This includes all repairs within a rolling 12-month period, so multiple small repairs can trigger the full replacement requirement.</p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                <p className="text-zinc-300">Insurance companies are aware of this rule and may require full replacement even when their initial assessment suggests only partial damage.</p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                <p className="text-zinc-300">A knowledgeable contractor can document the full extent of damage to ensure your insurance claim accounts for the 25% rule.</p>
              </div>
            </div>
            <p className="text-sm text-zinc-300 italic">This is one of the most important concepts for Broward County homeowners to understand. Many are surprised when a seemingly minor repair triggers a full roof replacement requirement.</p>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Roof Replacement Costs in Broward County (2026)</h2>
          <p className="text-lg text-zinc-300 mb-6">
            Broward County roofing costs are among the highest in Florida due to HVHZ requirements. These prices include material, labor, permitting, engineering (where required), and all inspections for a standard 2,000 sq ft single-family home:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 overflow-hidden text-zinc-200">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="px-6 py-3 text-left">Roofing Material</th>
                  <th className="px-6 py-3 text-center">Cost Range</th>
                  <th className="px-6 py-3 text-center">Expected Lifespan</th>
                  <th className="px-6 py-3 text-center">HVHZ Wind Rating</th>
                </tr>
              </thead>
              <tbody className="text-zinc-200">
                <tr className="border-b border-zinc-800">
                  <td className="px-6 py-4 font-semibold text-zinc-200">Architectural Shingles</td>
                  <td className="px-6 py-4 text-center text-zinc-200">$9,000 - $16,000</td>
                  <td className="px-6 py-4 text-center text-zinc-200">15-25 years</td>
                  <td className="px-6 py-4 text-center text-zinc-200">130 mph</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <td className="px-6 py-4 font-semibold text-zinc-200">Concrete Tile</td>
                  <td className="px-6 py-4 text-center text-zinc-200">$16,000 - $30,000</td>
                  <td className="px-6 py-4 text-center text-zinc-200">30-50 years</td>
                  <td className="px-6 py-4 text-center text-zinc-200">150 mph</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-6 py-4 font-semibold text-zinc-200">Clay Tile (Barrel or Flat)</td>
                  <td className="px-6 py-4 text-center text-zinc-200">$22,000 - $38,000</td>
                  <td className="px-6 py-4 text-center text-zinc-200">50-75 years</td>
                  <td className="px-6 py-4 text-center text-zinc-200">150 mph</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <td className="px-6 py-4 font-semibold text-zinc-200">Standing Seam Metal</td>
                  <td className="px-6 py-4 text-center text-zinc-200">$20,000 - $38,000</td>
                  <td className="px-6 py-4 text-center text-zinc-200">40-70 years</td>
                  <td className="px-6 py-4 text-center text-zinc-200">180 mph</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-zinc-200">TPO / Modified Bitumen (Flat Roof)</td>
                  <td className="px-6 py-4 text-center text-zinc-200">$10,000 - $24,000</td>
                  <td className="px-6 py-4 text-center text-zinc-200">15-25 years</td>
                  <td className="px-6 py-4 text-center text-zinc-200">120 mph</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-zinc-300">* All prices are for fully permitted, HVHZ-compliant installations in Broward County as of 2026. Actual cost depends on roof size, pitch, complexity, access, and municipality. <Link to="/roof-cost-calculator" className="text-yellow-400 hover:underline">Use our free roof cost calculator</Link> for a personalized estimate.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">The Broward County Roof Replacement Process</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Free Roof Inspection & Assessment</h3>
                <p className="text-zinc-300">A licensed inspector examines your entire roof system, documenting existing conditions with photos and measurements. If insurance is involved, this documentation becomes the foundation of your claim.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Material Selection & Engineering</h3>
                <p className="text-zinc-300">Choose your roofing material based on budget, aesthetics, and performance needs. For tile and metal, an engineer prepares attachment calculations specific to your roof geometry and wind exposure. All products must have Miami-Dade NOA approval.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Permit Application</h3>
                <p className="text-zinc-300">Your contractor files for a building permit with the local municipality (Fort Lauderdale, Pompano Beach, Deerfield Beach, Coral Springs, etc.). The application includes product NOA documentation, engineered drawings, and the scope of work. Processing time varies by city.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Tear-Off & Deck Inspection</h3>
                <p className="text-zinc-300">The existing roof is removed and the underlying decking is inspected. Damaged or deteriorated decking is replaced. A building inspector verifies the deck condition before new materials are installed.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">5</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Underlayment & Waterproofing</h3>
                <p className="text-zinc-300">HVHZ code requires self-adhering modified bitumen underlayment or an approved secondary water barrier. This critical layer protects your home even if the primary roofing material is displaced in a storm.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">6</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Roofing Installation & Final Inspection</h3>
                <p className="text-zinc-300">The new roofing system is installed according to manufacturer specifications and HVHZ code requirements. After completion, the building department conducts a final inspection to verify full compliance.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Insurance Claims for Broward County Roof Replacement</h2>
          <div className="bg-zinc-900 border border-yellow-400/30 rounded-2xl p-8">
            <p className="text-lg text-zinc-300 mb-6">
              Many Broward County homeowners need a roof replacement because of storm damage or an insurance company requirement. Here is how the insurance process typically works:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-5 rounded-xl shadow-sm">
                <h3 className="font-bold text-white mb-2">Document Everything</h3>
                <p className="text-zinc-300">Before making temporary repairs, photograph all damage from multiple angles. A professional roof inspection report with photos strengthens your claim significantly.</p>
              </div>
              <div className="bg-zinc-900 p-5 rounded-xl shadow-sm">
                <h3 className="font-bold text-white mb-2">File Promptly</h3>
                <p className="text-zinc-300">Florida law requires timely notice to your insurer. File your claim as soon as damage is discovered. Delays can result in claim denial.</p>
              </div>
              <div className="bg-zinc-900 p-5 rounded-xl shadow-sm">
                <h3 className="font-bold text-white mb-2">Attend the Adjuster Meeting</h3>
                <p className="text-zinc-300">Have your roofing contractor present during the adjuster's inspection. An experienced contractor can identify damage the adjuster may miss and ensure the 25% rule is properly applied.</p>
              </div>
              <div className="bg-zinc-900 p-5 rounded-xl shadow-sm">
                <h3 className="font-bold text-white mb-2">File Supplements When Needed</h3>
                <p className="text-zinc-300">Initial insurance estimates often undervalue the work required for HVHZ compliance. Supplemental claims document additional costs for proper underlayment, engineering, NOA-approved products, and code-required upgrades.</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-zinc-900 rounded-lg">
              <p className="text-white font-medium">All Phase Construction USA provides full insurance claims assistance — from initial documentation and damage assessment through adjuster meetings and supplemental claims filing. <Link to="/contact" className="text-yellow-400 underline font-bold">Contact us for a free insurance claim consultation</Link>.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Broward County Cities We Serve</h2>
          <p className="text-lg text-zinc-300 mb-6">All Phase Construction USA provides licensed, HVHZ-compliant roof replacements throughout Broward County:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: 'Fort Lauderdale', link: '/locations/fort-lauderdale' },
              { name: 'Pompano Beach', link: '/locations/pompano-beach' },
              { name: 'Deerfield Beach', link: '/locations/deerfield-beach' },
              { name: 'Coral Springs', link: '/locations/coral-springs' },
              { name: 'Plantation', link: '/locations/plantation' },
              { name: 'Sunrise', link: '/locations/sunrise' },
              { name: 'Hollywood', link: '/locations/hollywood' },
              { name: 'Miramar', link: '/locations/miramar' },
              { name: 'Coconut Creek', link: '/locations/coconut-creek' },
              { name: 'Tamarac', link: '/locations/tamarac' },
              { name: 'Parkland', link: '/locations/parkland' },
              { name: 'Davie', link: '/locations/davie' }
            ].map((city) => (
              <Link key={city.name} to={city.link} className="bg-zinc-900 px-4 py-3 rounded-lg shadow-sm border border-zinc-800 hover:border-yellow-400/40 hover:shadow-md border border-zinc-800 transition-all text-zinc-300 hover:text-yellow-400 font-medium text-center">
                {city.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-800 border border-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-zinc-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Free Broward County Roof Inspection</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            All Phase Construction USA has completed over 2,500 roofs across Broward and Palm Beach counties. We handle everything from permits and engineering to insurance claims and final inspection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">
              Schedule Free Inspection
            </Link>
            <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">
              Call (754) 227-5605
            </a>
          </div>
          <p className="text-sm text-zinc-300 mt-4">Licensed & Insured | CCC1333509 | CGC1535474</p>
        </section>
      </div>
      </div>
    </>
  );
}
