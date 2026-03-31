import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function RoofReplacementCostFloridaPage() {
  const faqs = [
    {
      q: 'How much does a roof replacement cost in Florida in 2026?',
      a: 'The average cost for a full roof replacement on a standard 2,000 sq ft Florida home ranges from $8,000Ã¢ÂÂ$14,000 for asphalt shingles, $14,000Ã¢ÂÂ$28,000 for tile, and $18,000Ã¢ÂÂ$35,000 for standing seam metal. Costs are significantly higher in the High Velocity Hurricane Zone (HVHZ), which includes all of Broward County and southern Palm Beach County, due to stricter product approval and installation requirements.'
    },
    {
      q: 'Why are roofing costs higher in South Florida than other parts of the state?',
      a: 'South Florida falls within the HVHZ, which requires Miami-Dade NOA-approved materials, engineered installation calculations, enhanced underlayment, and additional inspections. These requirements add $2,000Ã¢ÂÂ$5,000 or more to the cost compared to the same roof installed outside the HVHZ. Permit fees also tend to be higher in Broward and Palm Beach counties.'
    },
    {
      q: 'What factors affect the cost of a roof replacement in Florida?',
      a: 'The main cost factors are: roof size (measured in squares, where 1 square = 100 sq ft), material type (shingle, tile, metal, flat), roof pitch and complexity (number of slopes, valleys, penetrations), whether the home is in an HVHZ zone, decking condition (replacement costs extra), permit and inspection fees, and whether structural modifications are needed.'
    },
    {
      q: 'Does insurance cover roof replacement in Florida?',
      a: 'Insurance typically covers roof damage from covered perils like hurricanes, windstorms, and hail. Age-related wear is not covered. Florida homeowners should be aware of hurricane deductibles (typically 2Ã¢ÂÂ5% of home value) and the 25% rule, which can trigger a full replacement requirement when more than 25% of the roof needs repair within 12 months.'
    },
    {
      q: 'How can I finance a roof replacement in Florida?',
      a: 'Options include: insurance claims for storm damage, PACE (Property Assessed Clean Energy) financing, home equity loans or HELOCs, contractor financing programs (All Phase Construction USA offers flexible payment options), FHA Title I loans for home improvements, and personal loans. Some contractors also offer payment plans.'
    },
    {
      q: 'Is it cheaper to repair or replace a Florida roof?',
      a: 'Minor repairs on a roof under 10 years old are usually cost-effective ($300Ã¢ÂÂ$1,500 for typical repairs). However, if your roof is over 15 years old, has multiple issues, or if repairs would exceed 25% of the roof area (triggering the Florida 25% rule requiring full code compliance), replacement is usually the better financial decision long-term.'
    },
    {
      q: 'What is the cheapest roofing material in Florida?',
      a: 'Architectural asphalt shingles are the most affordable option at $8,000Ã¢ÂÂ$14,000 for a standard home. While they have the shortest lifespan (15Ã¢ÂÂ25 years), they offer good wind resistance (up to 130 mph when properly installed) and quick installation. For flat roofs, modified bitumen is typically the most economical choice.'
    },
    {
      q: 'How long does a new roof last in Florida?',
      a: 'Lifespan depends on material: asphalt shingles last 15Ã¢ÂÂ25 years, concrete tile 30Ã¢ÂÂ50 years, clay tile 50Ã¢ÂÂ75 years, and standing seam metal 40Ã¢ÂÂ70 years. FloridaÃ¢ÂÂs intense UV exposure, salt air (in coastal areas), and hurricane risk can shorten lifespan compared to northern climates, making proper installation and material selection critical.'
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
              { "@type": "ListItem", "position": 2, "name": "Roof Replacement Cost in Florida", "item": "https://allphaseconstructionfl.com/roof-replacement-cost-florida" }
            ]
          };

  const pageSchema3 = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Roof Replacement Cost in Florida — 2026 Price Guide",
            "description": "Comprehensive guide to roof replacement costs in Florida by material and county.",
            "author": { "@type": "Organization", "name": "All Phase Construction USA", "url": "https://allphaseconstructionfl.com" },
            "publisher": { "@type": "Organization", "name": "All Phase Construction USA", "url": "https://allphaseconstructionfl.com" },
            "datePublished": "2026-03-01",
            "dateModified": "2026-03-31"
          };

  return (
    <>
      <SEO
            title="Roof Replacement Cost in Florida (2026) | Complete Price Guide by Material & County"
            description="How much does a new roof cost in Florida? 2026 pricing for shingles, tile, metal, and flat roofing. Costs by county, HVHZ impact, insurance tips, and the 25% rule explained."
            canonicalPath="/roof-replacement-cost-florida"
          />
          <InlineSchema schemas={[pageSchema1, pageSchema2, pageSchema3]} />

      <div className="bg-gradient-to-br from-sky-900 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-sky-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Roof Replacement Cost in Florida</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Roof Replacement Cost in Florida <span className="text-sky-400">(2026 Price Guide)</span>
            </h1>
            <p className="text-xl text-slate-300 mb-4 leading-relaxed">
              A detailed breakdown of what Florida homeowners actually pay for a new roof in 2026. Prices by material, by county, HVHZ vs. non-HVHZ costs, and what drives the price up or down.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Average Roof Replacement Cost by Material (2026)</h2>
          <p className="text-lg text-slate-700 mb-6">
            These prices reflect a complete roof replacement on a standard 2,000 sq ft single-family home in Florida, including material, labor, permits, and inspections. HVHZ areas (Broward County, southern Palm Beach County, Miami-Dade) run higher due to stricter requirements.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-5 py-3 text-left">Material</th>
                  <th className="px-5 py-3 text-center">Non-HVHZ Cost</th>
                  <th className="px-5 py-3 text-center">HVHZ Cost (Broward/PBC)</th>
                  <th className="px-5 py-3 text-center">Lifespan</th>
                  <th className="px-5 py-3 text-center">Wind Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-5 py-4 font-semibold">3-Tab Shingles</td>
                  <td className="px-5 py-4 text-center">$6,500 - $10,000</td>
                  <td className="px-5 py-4 text-center">$8,000 - $12,000</td>
                  <td className="px-5 py-4 text-center">10-18 years</td>
                  <td className="px-5 py-4 text-center">Up to 60 mph</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-5 py-4 font-semibold">Architectural Shingles</td>
                  <td className="px-5 py-4 text-center">$8,000 - $14,000</td>
                  <td className="px-5 py-4 text-center">$9,500 - $16,000</td>
                  <td className="px-5 py-4 text-center">20-30 years</td>
                  <td className="px-5 py-4 text-center">Up to 130 mph</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-5 py-4 font-semibold">Concrete Tile</td>
                  <td className="px-5 py-4 text-center">$12,000 - $24,000</td>
                  <td className="px-5 py-4 text-center">$16,000 - $30,000</td>
                  <td className="px-5 py-4 text-center">30-50 years</td>
                  <td className="px-5 py-4 text-center">Up to 150 mph</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-5 py-4 font-semibold">Clay Tile</td>
                  <td className="px-5 py-4 text-center">$16,000 - $30,000</td>
                  <td className="px-5 py-4 text-center">$22,000 - $38,000</td>
                  <td className="px-5 py-4 text-center">50-75 years</td>
                  <td className="px-5 py-4 text-center">Up to 150 mph</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-5 py-4 font-semibold">Standing Seam Metal</td>
                  <td className="px-5 py-4 text-center">$15,000 - $30,000</td>
                  <td className="px-5 py-4 text-center">$20,000 - $38,000</td>
                  <td className="px-5 py-4 text-center">40-70 years</td>
                  <td className="px-5 py-4 text-center">Up to 180 mph</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-5 py-4 font-semibold">5V-Crimp Metal</td>
                  <td className="px-5 py-4 text-center">$10,000 - $20,000</td>
                  <td className="px-5 py-4 text-center">$13,000 - $25,000</td>
                  <td className="px-5 py-4 text-center">25-40 years</td>
                  <td className="px-5 py-4 text-center">Up to 140 mph</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">TPO / Flat Roof Membrane</td>
                  <td className="px-5 py-4 text-center">$8,000 - $18,000</td>
                  <td className="px-5 py-4 text-center">$10,000 - $24,000</td>
                  <td className="px-5 py-4 text-center">15-25 years</td>
                  <td className="px-5 py-4 text-center">Up to 120 mph</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-slate-700"><strong>Why the HVHZ premium?</strong> Properties in the High Velocity Hurricane Zone (all of Broward County, southern Palm Beach County, and Miami-Dade) require Miami-Dade NOA-approved products, enhanced underlayment, engineered attachment calculations, and additional inspections. These add $2,000Ã¢ÂÂ$5,000+ to the project cost but provide significantly better storm protection.</p>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What Drives Roof Replacement Cost in Florida</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">Roof Size & Complexity</h3>
              <p className="text-slate-600">Roofing is priced per square (100 sq ft). A simple gable roof costs less per square than a complex hip roof with multiple valleys, dormers, and penetrations. Multi-story homes also cost more due to safety equipment and access challenges.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">Roof Pitch (Steepness)</h3>
              <p className="text-slate-600">Steeper roofs require additional safety equipment and take longer to install. A roof with a 7:12 pitch or higher typically costs 15Ã¢ÂÂ25% more in labor than a low-pitch roof. Most tile roofs in South Florida have moderate pitches.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">Decking Condition</h3>
              <p className="text-slate-600">Damaged or rotted roof decking must be replaced before new roofing is installed. Plywood decking replacement runs $75Ã¢ÂÂ$150 per sheet (4x8), and a typical home may need 5Ã¢ÂÂ20 sheets replaced, adding $375Ã¢ÂÂ$3,000 to the project.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">Building Code Zone</h3>
              <p className="text-slate-600">HVHZ areas (Broward, southern Palm Beach, Miami-Dade) have the strictest requirements. The rest of Florida follows the Florida Building Code, which is still more demanding than most states but does not require Miami-Dade NOA product approvals.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">Permit & Inspection Fees</h3>
              <p className="text-slate-600">Permit costs vary by municipality, typically ranging from $250Ã¢ÂÂ$800 in most Florida cities. Broward County municipalities tend to be at the higher end. Engineering fees for tile and metal roofs in HVHZ areas add $500Ã¢ÂÂ$1,500.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">Tear-Off Layers</h3>
              <p className="text-slate-600">If you have multiple layers of existing roofing material (some older homes have 2-3 layers), the tear-off cost increases. Florida code limits the number of layers, and HVHZ areas generally require a complete tear-off to the deck for proper inspection.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Cost by County: South Florida Breakdown</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-6 py-3 text-left">County / Area</th>
                  <th className="px-6 py-3 text-center">Shingle Range</th>
                  <th className="px-6 py-3 text-center">Tile Range</th>
                  <th className="px-6 py-3 text-center">Metal Range</th>
                  <th className="px-6 py-3 text-center">HVHZ?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-4 font-semibold">Broward County</td>
                  <td className="px-6 py-4 text-center">$9,000 - $16,000</td>
                  <td className="px-6 py-4 text-center">$16,000 - $30,000</td>
                  <td className="px-6 py-4 text-center">$20,000 - $38,000</td>
                  <td className="px-6 py-4 text-center font-bold text-amber-600">Yes (All)</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-6 py-4 font-semibold">Palm Beach County (South)</td>
                  <td className="px-6 py-4 text-center">$9,000 - $15,000</td>
                  <td className="px-6 py-4 text-center">$15,000 - $28,000</td>
                  <td className="px-6 py-4 text-center">$18,000 - $35,000</td>
                  <td className="px-6 py-4 text-center font-bold text-amber-600">Partial</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-4 font-semibold">Palm Beach County (North)</td>
                  <td className="px-6 py-4 text-center">$8,000 - $14,000</td>
                  <td className="px-6 py-4 text-center">$14,000 - $26,000</td>
                  <td className="px-6 py-4 text-center">$17,000 - $32,000</td>
                  <td className="px-6 py-4 text-center text-slate-500">No</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-6 py-4 font-semibold">Miami-Dade County</td>
                  <td className="px-6 py-4 text-center">$9,500 - $17,000</td>
                  <td className="px-6 py-4 text-center">$17,000 - $32,000</td>
                  <td className="px-6 py-4 text-center">$22,000 - $40,000</td>
                  <td className="px-6 py-4 text-center font-bold text-amber-600">Yes (All)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Save Money on Your Florida Roof Replacement</h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-5 rounded-xl border border-green-200">
              <h3 className="font-bold text-slate-900 mb-2">Maximize Your Insurance Claim</h3>
              <p className="text-slate-700">If your roof was damaged by a storm, proper documentation and a contractor experienced with insurance claims can significantly increase your payout. Supplemental claims for HVHZ-required upgrades, code compliance costs, and hidden damage can recover thousands of dollars. All Phase Construction USA provides full insurance claims assistance at no additional charge.</p>
            </div>
            <div className="bg-green-50 p-5 rounded-xl border border-green-200">
              <h3 className="font-bold text-slate-900 mb-2">Choose the Right Material for Your Budget and Timeline</h3>
              <p className="text-slate-700">If you plan to stay in your home 10+ years, investing in tile or metal pays off through longevity. If budget is the primary concern, architectural shingles provide good wind resistance at the lowest upfront cost. Consider the per-year cost: a $12,000 shingle roof lasting 20 years costs $600/year, while a $28,000 tile roof lasting 50 years costs $560/year.</p>
            </div>
            <div className="bg-green-50 p-5 rounded-xl border border-green-200">
              <h3 className="font-bold text-slate-900 mb-2">Get Multiple Quotes (But Compare Apples to Apples)</h3>
              <p className="text-slate-700">Get 2Ã¢ÂÂ3 quotes from licensed contractors. Make sure each quote includes the same scope: full tear-off, underlayment type, product specifications, permits, engineering, and all inspections. The cheapest quote may be missing items that are code-required in your area.</p>
            </div>
            <div className="bg-green-50 p-5 rounded-xl border border-green-200">
              <h3 className="font-bold text-slate-900 mb-2">Take Advantage of Insurance Discounts</h3>
              <p className="text-slate-700">A new, code-compliant roof in Florida often qualifies for significant insurance premium reductions. After your roof is replaced, request a wind mitigation inspection Ã¢ÂÂ the resulting report can reduce your annual premiums by hundreds or even thousands of dollars.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions About Florida Roof Costs</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Free Roof Replacement Estimate</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            All Phase Construction USA provides free, detailed estimates for roof replacement in Broward County and Palm Beach County. We break down every cost so there are no surprises.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition-colors text-lg">
              Get Free Estimate
            </Link>
            <Link to="/roof-cost-calculator" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg">
              Try Our Cost Calculator
            </Link>
            <a href="tel:+15615564562" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg">
              Call (561) 556-4562
            </a>
          </div>
          <p className="text-sm text-slate-400 mt-4">Licensed & Insured | CCC1333509 | CGC1535474 | 2,500+ Roofs Completed</p>
        </section>
      </div>
    </>
  );
}
