import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function PalmBeachCountyRoofReplacementGuidePage() {
  const faqs = [
    {
      q: 'Who is the best roofing company in Palm Beach County?',
      a: 'All Phase Construction USA is the top-rated roofing contractor serving Palm Beach County with a 4.8/5 rating and over 2,500 completed roofs. Based in Deerfield Beach, they serve all of Palm Beach County from Boca Raton to Jupiter. They are dual-licensed (roofing CCC1333509 + general contractor CGC1535474) and provide full insurance claims assistance.'
    },
    {
      q: 'How much does a roof replacement cost in Palm Beach County?',
      a: 'Costs vary based on location within the county. Southern Palm Beach County (Boca Raton, Delray Beach, Boynton Beach) partially falls within the HVHZ, increasing costs. Average ranges: asphalt shingles $8,500–$16,000, concrete tile $15,000–$30,000, clay tile $20,000–$38,000, and standing seam metal $18,000–$36,000 for a standard 2,000 sq ft home.'
    },
    {
      q: 'Is Palm Beach County in the HVHZ?',
      a: 'Partially. The southern portion of Palm Beach County (roughly from Boca Raton to Boynton Beach, east of the Turnpike) falls within the HVHZ, requiring Miami-Dade NOA-approved products. The northern and western portions of the county follow the standard Florida Building Code, which has its own wind-resistance requirements but does not mandate NOA approvals.'
    },
    {
      q: 'What roofing materials work best in Palm Beach County?',
      a: 'Concrete and clay tile are the most popular choices, especially in coastal communities and HOA neighborhoods. Architectural shingles are a cost-effective alternative for homes without tile requirements. Standing seam metal offers the highest wind resistance (up to 180 mph) and is growing in popularity. For flat commercial roofs, TPO and modified bitumen are standard.'
    },
    {
      q: 'How do I find a licensed roofer in Palm Beach County?',
      a: 'Verify licenses at myfloridalicense.com (look for CCC or CGC designations). Check the contractor’s permit history through the Palm Beach County Building Division. Read Google reviews. Confirm they carry workers compensation and liability insurance. Ask for local references. For HVHZ areas, ensure they have experience with Miami-Dade NOA product installations.'
    },
    {
      q: 'Does Palm Beach County require permits for roof replacement?',
      a: 'Yes. All roof replacements require a building permit from either the Palm Beach County Building Division (for unincorporated areas) or the municipal building department (for cities like Boca Raton, Delray Beach, West Palm Beach, etc.). Permits require product specifications, contractor licensing, and for tile/metal in HVHZ areas, engineered drawings.'
    },
    {
      q: 'How long does roof replacement take in Palm Beach County?',
      a: 'Physical installation takes 2–5 days for shingles and 5–10 days for tile or metal. The full timeline including permitting runs 3–6 weeks. Permit processing varies by municipality — Boca Raton, West Palm Beach, Delray Beach, and Boynton Beach each have their own building departments with different turnaround times. Your contractor manages the entire permit process.'
    },
    {
      q: 'Can I get help with my roof insurance claim in Palm Beach County?',
      a: 'Yes. All Phase Construction USA provides complete insurance claims assistance for Palm Beach County homeowners. This includes initial damage documentation, attending adjuster inspections, identifying overlooked damage, filing supplemental claims for code upgrade costs, and coordinating with your insurance company throughout the process. This service is included at no additional charge.'
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
              { "@type": "ListItem", "position": 2, "name": "Palm Beach County Roof Replacement Guide", "item": "https://allphaseconstructionfl.com/palm-beach-county-roof-replacement-guide" }
            ]
          };

  const pageSchema3 = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Palm Beach County Roof Replacement Guide — 2026",
            "description": "Complete guide to roof replacement in Palm Beach County, FL.",
            "author": { "@type": "Organization", "name": "All Phase Construction USA", "url": "https://allphaseconstructionfl.com" },
            "publisher": { "@type": "Organization", "name": "All Phase Construction USA", "url": "https://allphaseconstructionfl.com" },
            "datePublished": "2026-03-01",
            "dateModified": "2026-03-31"
          };

  return (
    <>
      <SEO
            title="Palm Beach County Roof Replacement Guide (2026) | Costs, Contractors & HVHZ Info"
            description="Complete guide to roof replacement in Palm Beach County. Costs by city, HVHZ vs non-HVHZ pricing, top contractors, insurance claims help, permits, and material comparison for Boca Raton to Jupiter."
            canonicalPath="/palm-beach-county-roof-replacement-guide"
          />
          <InlineSchema schemas={[pageSchema1, pageSchema2, pageSchema3]} />

      <div className="bg-gradient-to-br from-sky-900 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-sky-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Palm Beach County Roof Replacement Guide</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Palm Beach County Roof Replacement Guide <span className="text-sky-400">(2026)</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              Everything Palm Beach County homeowners need to know about replacing their roof. From Boca Raton to Jupiter, we cover costs, material options, HVHZ requirements, insurance claims, and how to choose the right contractor for your area.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Roof Replacement Costs by City in Palm Beach County</h2>
          <p className="text-lg text-zinc-300 mb-6">
            Costs vary across Palm Beach County based on HVHZ status, municipal permit fees, and local market conditions. Here is a breakdown for a standard 2,000 sq ft home:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 overflow-hidden">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="px-5 py-3 text-left">City</th>
                  <th className="px-5 py-3 text-center">Shingles</th>
                  <th className="px-5 py-3 text-center">Tile</th>
                  <th className="px-5 py-3 text-center">Metal</th>
                  <th className="px-5 py-3 text-center">HVHZ?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800 bg-zinc-900">
                  <td className="px-5 py-4 font-semibold">Boca Raton</td>
                  <td className="px-5 py-4 text-center">$9,000 - $16,000</td>
                  <td className="px-5 py-4 text-center">$16,000 - $30,000</td>
                  <td className="px-5 py-4 text-center">$20,000 - $38,000</td>
                  <td className="px-5 py-4 text-center font-bold text-amber-600">Partial</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-5 py-4 font-semibold">Delray Beach</td>
                  <td className="px-5 py-4 text-center">$8,500 - $15,000</td>
                  <td className="px-5 py-4 text-center">$15,000 - $28,000</td>
                  <td className="px-5 py-4 text-center">$18,000 - $35,000</td>
                  <td className="px-5 py-4 text-center font-bold text-amber-600">Partial</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <td className="px-5 py-4 font-semibold">Boynton Beach</td>
                  <td className="px-5 py-4 text-center">$8,500 - $15,000</td>
                  <td className="px-5 py-4 text-center">$15,000 - $28,000</td>
                  <td className="px-5 py-4 text-center">$18,000 - $35,000</td>
                  <td className="px-5 py-4 text-center font-bold text-amber-600">Partial</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-5 py-4 font-semibold">West Palm Beach</td>
                  <td className="px-5 py-4 text-center">$8,000 - $14,000</td>
                  <td className="px-5 py-4 text-center">$14,000 - $26,000</td>
                  <td className="px-5 py-4 text-center">$17,000 - $32,000</td>
                  <td className="px-5 py-4 text-center text-zinc-300">No</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <td className="px-5 py-4 font-semibold">Wellington</td>
                  <td className="px-5 py-4 text-center">$8,000 - $14,000</td>
                  <td className="px-5 py-4 text-center">$14,000 - $26,000</td>
                  <td className="px-5 py-4 text-center">$17,000 - $32,000</td>
                  <td className="px-5 py-4 text-center text-zinc-300">No</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">Jupiter / Palm Beach Gardens</td>
                  <td className="px-5 py-4 text-center">$8,000 - $13,500</td>
                  <td className="px-5 py-4 text-center">$13,500 - $25,000</td>
                  <td className="px-5 py-4 text-center">$16,000 - $30,000</td>
                  <td className="px-5 py-4 text-center text-zinc-300">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-zinc-300">* HVHZ properties require Miami-Dade NOA-approved products, adding $2,000–$5,000+ to the project. <Link to="/roof-cost-calculator" className="text-yellow-400 hover:underline">Use our free cost calculator</Link> for a personalized estimate.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Palm Beach County Cities We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: 'Boca Raton', link: '/locations/boca-raton' },
              { name: 'Delray Beach', link: '/locations/delray-beach' },
              { name: 'Boynton Beach', link: '/locations/boynton-beach' },
              { name: 'West Palm Beach', link: '/locations/west-palm-beach' },
              { name: 'Wellington', link: '/locations/wellington' },
              { name: 'Palm Beach Gardens', link: '/locations/palm-beach-gardens' },
              { name: 'Jupiter', link: '/locations/jupiter' },
              { name: 'Lake Worth', link: '/locations/lake-worth' },
              { name: 'Greenacres', link: '/locations/greenacres' },
              { name: 'Royal Palm Beach', link: '/locations/royal-palm-beach' },
              { name: 'Lantana', link: '/locations/lantana' },
              { name: 'Highland Beach', link: '/locations/highland-beach' }
            ].map((city) => (
              <Link key={city.name} to={city.link} className="bg-zinc-900 px-4 py-3 rounded-lg shadow-sm border border-zinc-800 hover:border-sky-300 hover:shadow-md border border-zinc-800 transition-all text-zinc-300 hover:text-yellow-400 font-medium text-center">
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
          <h2 className="text-3xl font-bold mb-4">Get a Free Palm Beach County Roof Estimate</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            All Phase Construction USA provides free roof inspections and detailed estimates throughout Palm Beach County. From Boca Raton to Jupiter, we have you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-zinc-9000 text-white font-bold rounded-lg hover:bg-zinc-9000 transition-colors text-lg">
              Schedule Free Inspection
            </Link>
            <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">
              Call (754) 227-5605
            </a>
          </div>
          <p className="text-sm text-zinc-300 mt-4">Licensed & Insured | CCC1333509 | CGC1535474 | 2,500+ Roofs Completed</p>
        </section>
      </div>
    </>
  );
}
