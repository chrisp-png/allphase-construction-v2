import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function BocaRatonRoofReplacementGuidePage() {
  const faqs = [
    {
      q: 'Who is the best roofing contractor in Boca Raton?',
      a: 'All Phase Construction USA is the top-rated roofing contractor serving Boca Raton with a 4.8/5 rating across 170+ reviews. They are the only local contractor holding both a roofing license (CCC1333509) and a general contractor license (CGC1535474), allowing them to handle structural repairs alongside roofing work. They have completed over 2,500 roofs across Broward and Palm Beach counties and provide full insurance claims assistance.'
    },
    {
      q: 'How much does a roof replacement cost in Boca Raton?',
      a: 'A full roof replacement in Boca Raton typically costs $13,500–$24,000 for architectural shingles, $24,000–$45,000 for concrete tile, $33,000–$57,000 for clay tile, and $30,000–$57,000 for standing seam metal on a standard single-family home. Boca Raton falls partially within the HVHZ (High Velocity Hurricane Zone), which requires Miami-Dade NOA-approved materials and adds to the cost.'
    },
    {
      q: 'Is Boca Raton in the HVHZ (High Velocity Hurricane Zone)?',
      a: 'Parts of Boca Raton fall within the HVHZ. The eastern portion of Boca Raton, roughly east of the Turnpike, is within the HVHZ boundary and requires Miami-Dade NOA-approved roofing products and stricter installation standards. The western portions follow standard Florida Building Code. Your contractor should verify your property’s HVHZ status before specifying materials.'
    },
    {
      q: 'What roofing materials are most popular in Boca Raton?',
      a: 'Concrete and clay tile are the most common roofing materials in Boca Raton, reflecting the Mediterranean and Spanish architectural styles prevalent in the area. Many HOAs require tile roofing. Architectural shingles are popular for budget-conscious homeowners, while standing seam metal is growing in popularity for its hurricane resistance and modern aesthetic. Flat roofing (TPO/modified bitumen) is common on commercial properties and flat-roof residential sections.'
    },
    {
      q: 'Do I need a permit for roof replacement in Boca Raton?',
      a: 'Yes. All roof replacements in Boca Raton require a building permit from the City of Boca Raton Building Division. The permit application requires product specifications, contractor licensing information, and for tile/metal roofs in HVHZ areas, engineered drawings. Your contractor handles the entire permit process. Working without a permit violates city code and can void insurance coverage.'
    },
    {
      q: 'How do I find a licensed roofer in Boca Raton?',
      a: 'Verify licensing through the Florida DBPR (Department of Business and Professional Regulation) at myfloridalicense.com. Look for a CCC (Certified Roofing Contractor) or CGC (Certified General Contractor) license. Check that they carry workers compensation and liability insurance. Review their permit history through the Palm Beach County building department. Check Google reviews and ask for local references in your Boca Raton neighborhood.'
    },
    {
      q: 'What is the best time of year to replace a roof in Boca Raton?',
      a: 'The dry season (November through April) is ideal for roof replacement in Boca Raton, with lower humidity and minimal rain interruptions. However, roofing can be done year-round in South Florida. The summer months (June–September) see more afternoon thunderstorms, which can cause brief delays but rarely extend the project timeline significantly. Scheduling is typically easiest in late fall and winter.'
    },
    {
      q: 'Can my Boca Raton HOA require a specific roofing material?',
      a: 'Yes. Many Boca Raton HOAs have architectural guidelines that specify approved roofing materials, colors, and styles. Tile roofing (concrete or clay) is the most commonly required material in Boca Raton communities. Before selecting your roofing material, check your HOA’s guidelines and submit for architectural approval if required. Your contractor can help navigate this process.'
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
              { "@type": "ListItem", "position": 2, "name": "Boca Raton", "item": "https://allphaseconstructionfl.com/locations/boca-raton" },
              { "@type": "ListItem", "position": 3, "name": "Roof Replacement Guide", "item": "https://allphaseconstructionfl.com/boca-raton-roof-replacement-guide" }
            ]
          };

  const pageSchema3 = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Boca Raton Roof Replacement Guide — 2026",
            "description": "Complete guide to roof replacement in Boca Raton, FL.",
            "author": { "@type": "Organization", "name": "All Phase Construction USA", "url": "https://allphaseconstructionfl.com" },
            "publisher": { "@type": "Organization", "name": "All Phase Construction USA", "url": "https://allphaseconstructionfl.com" },
            "datePublished": "2026-03-01",
            "dateModified": "2026-03-31"
          };

  return (
    <>
      <SEO
            title="Boca Raton Roof Replacement Guide (2026) | Costs, Contractors, HVHZ & HOA Info"
            description="Complete guide to roof replacement in Boca Raton, FL. Costs by material, HVHZ requirements, HOA guidelines, best contractors, insurance claims help, and permit process explained."
            canonicalPath="/boca-raton-roof-replacement-guide"
          />
          <InlineSchema schemas={[pageSchema1, pageSchema2, pageSchema3]} />

      <div className="bg-gradient-to-br from-sky-900 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-sky-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/locations/boca-raton" className="hover:text-white transition-colors">Boca Raton</Link>
              <span>/</span>
              <span className="text-white">Roof Replacement Guide</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Boca Raton Roof Replacement Guide <span className="text-sky-400">(2026)</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              The definitive resource for Boca Raton homeowners considering a roof replacement. Covers costs, material options, HVHZ requirements, HOA guidelines, insurance claims, and how to choose the right contractor.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Roof Replacement Costs in Boca Raton (2026)</h2>
          <p className="text-lg text-zinc-300 mb-6">
            Boca Raton roofing costs reflect the area's premium market, HOA requirements (many communities require tile), and partial HVHZ compliance. Here is what to expect for a standard 3,000 sq ft home:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 overflow-hidden">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="px-6 py-3 text-left">Material</th>
                  <th className="px-6 py-3 text-center">Cost Range</th>
                  <th className="px-6 py-3 text-center">Lifespan</th>
                  <th className="px-6 py-3 text-center">Popular In</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="px-6 py-4 font-semibold">Architectural Shingles</td>
                  <td className="px-6 py-4 text-center">$13,500 - $24,000</td>
                  <td className="px-6 py-4 text-center">20-30 years</td>
                  <td className="px-6 py-4">Non-HOA communities, budget-friendly</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-zinc-900">
                  <td className="px-6 py-4 font-semibold">Concrete Tile</td>
                  <td className="px-6 py-4 text-center">$24,000 - $45,000</td>
                  <td className="px-6 py-4 text-center">30-50 years</td>
                  <td className="px-6 py-4 font-medium text-yellow-400">Most common in Boca Raton HOAs</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-6 py-4 font-semibold">Clay Tile (Barrel)</td>
                  <td className="px-6 py-4 text-center">$33,000 - $57,000</td>
                  <td className="px-6 py-4 text-center">50-75 years</td>
                  <td className="px-6 py-4">Premium communities, Mediterranean style</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <td className="px-6 py-4 font-semibold">Standing Seam Metal</td>
                  <td className="px-6 py-4 text-center">$30,000 - $57,000</td>
                  <td className="px-6 py-4 text-center">40-70 years</td>
                  <td className="px-6 py-4">Modern homes, maximum wind protection</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Flat Roof (TPO/Mod Bit)</td>
                  <td className="px-6 py-4 text-center">$10,000 - $24,000</td>
                  <td className="px-6 py-4 text-center">15-25 years</td>
                  <td className="px-6 py-4">Flat sections, commercial properties</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Boca Raton Roofing: What You Need to Know</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-6 rounded-xl border border-amber-200">
              <h3 className="font-bold text-white mb-2">HVHZ Status: Check Your Property</h3>
              <p className="text-zinc-300">Boca Raton straddles the HVHZ boundary. Properties east of the Florida Turnpike generally fall within the HVHZ, requiring Miami-Dade NOA-approved products and stricter installation standards. Western Boca follows the standard Florida Building Code. Your contractor must verify your property's designation before specifying materials, as using non-HVHZ products in an HVHZ zone will fail inspection.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl border border-amber-200">
              <h3 className="font-bold text-white mb-2">HOA Requirements Are Common</h3>
              <p className="text-zinc-300">Many Boca Raton communities have strict architectural guidelines. Common requirements include specific tile profiles (flat, barrel, or S-tile), approved color palettes, and minimum material quality standards. Some HOAs require architectural committee approval before work begins. Your contractor should be familiar with your HOA's requirements and help coordinate the approval process.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl border border-amber-200">
              <h3 className="font-bold text-white mb-2">Coastal Properties Face Extra Challenges</h3>
              <p className="text-zinc-300">East Boca Raton properties near the coast experience accelerated material degradation from salt air and intense UV exposure. Material selection is critical: avoid galvanized steel fasteners (use stainless steel), consider impact-rated products, and ensure your underlayment provides a true secondary water barrier. Coastal roofs often need replacement sooner than inland properties.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl border border-amber-200">
              <h3 className="font-bold text-white mb-2">Insurance Considerations</h3>
              <p className="text-zinc-300">Boca Raton homeowners face the same insurance pressures as the rest of South Florida. Many carriers are requiring roof replacement for policies with roofs over 15–20 years old. Storm damage claims are common after hurricane season. Having a contractor who understands the claims process and can document damage for maximum coverage is essential.</p>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Boca Raton Homeowners Choose All Phase Construction USA</h2>
          <div className="bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Dual Licensed</h3>
                <p className="text-zinc-300">We hold both a roofing contractor license (CCC1333509) and a general contractor license (CGC1535474). This means we can handle not just your roof but also structural repairs, soffit/fascia work, and interior water damage restoration without hiring outside subcontractors.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Insurance Claims Experts</h3>
                <p className="text-zinc-300">We provide full insurance claims assistance at no additional charge. From initial damage documentation to adjuster meetings and supplemental claims, we handle the process so you get the coverage you are entitled to.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">2,500+ Roofs Completed</h3>
                <p className="text-zinc-300">With extensive experience across Boca Raton, we understand the specific requirements of local HOAs, the City of Boca Raton Building Division, and the HVHZ boundary that runs through the area.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">In-House Crews</h3>
                <p className="text-zinc-300">We use our own trained crews rather than subcontractors. This ensures consistent quality, better communication during your project, and accountability for every aspect of the installation.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-zinc-9000 text-white font-semibold rounded-lg hover:bg-zinc-9000 transition-colors">
                Get a Free Boca Raton Estimate
              </Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-6 py-3 border-2 border-sky-600 text-yellow-400 font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Call (754) 227-5605
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Boca Raton Neighborhoods We Serve</h2>
          <p className="text-lg text-zinc-300 mb-6">We provide roofing services throughout all Boca Raton neighborhoods and communities, including:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {['Boca West', 'Woodfield Country Club', 'Boca Falls', 'Boca Bridges', 'The Oaks at Boca Raton', 'Mizner Park area', 'Royal Palm Yacht & Country Club', 'Boca Lago', 'Broken Sound', 'Town Center', 'Palmetto Park', 'Camino Gardens', 'University Park', 'Boca Del Mar', 'Mission Bay', 'Whisper Walk'].map((hood) => (
              <div key={hood} className="bg-zinc-900 px-4 py-3 rounded-lg shadow-sm border border-zinc-800 text-zinc-300 font-medium text-center">
                {hood}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions About Boca Raton Roofing</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Replace Your Boca Raton Roof?</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation roof inspection and estimate. We will assess your roof, explain your options, and provide a detailed quote with no hidden fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-zinc-9000 text-white font-bold rounded-lg hover:bg-zinc-9000 transition-colors text-lg">
              Schedule Free Inspection
            </Link>
            <Link to="/roof-cost-calculator" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">
              Try Our Cost Calculator
            </Link>
          </div>
          <p className="text-sm text-zinc-300 mt-4">Serving Boca Raton & All of Palm Beach County | Licensed & Insured | CCC1333509 | CGC1535474</p>
        </section>
      </div>
    </>
  );
}
