import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function SwitchFromShinglesToMetalPlantationPage() {
  const compare = [
    { f: 'Upfront Cost (22-square Plantation home)', shingle: '$14,300 – $22,000', metal: '$22,000 – $34,000' },
    { f: 'Lifespan in HVHZ', shingle: '18 – 22 years', metal: '40 – 50+ years' },
    { f: 'Insurance Premium Impact', shingle: 'Baseline', metal: '$400 – $1,400 / yr in credits' },
    { f: 'Energy Reflectivity', shingle: '0.20 – 0.30', metal: '0.65 – 0.85 (Kynar)' },
    { f: 'Hurricane Resilience', shingle: 'Good (with HVHZ shingle + 8d nail pattern)', metal: 'Excellent (NOA clip + seamed panel)' },
    { f: 'Maintenance', shingle: 'Replace lifted shingles after each storm', metal: 'Inspect fasteners and sealants every 5 yrs' },
    { f: 'Warranty (manufacturer)', shingle: '25 – 50 yr limited', metal: '35 – 45 yr Kynar paint + lifetime panel' },
    { f: 'Resale Value Impact', shingle: 'Neutral', metal: '+1 – 6% on coastal and modern homes' },
  ];
  const faqs = [
    { q: 'Should I replace my Plantation shingle roof with metal?', a: 'If your current shingle roof is at or near end-of-life, switching to metal in Plantation usually pays for itself within 12 to 15 years through insurance credits, lower energy bills, and avoiding one full shingle replacement at year 18 to 22. The upfront cost is $6,000 to $14,000 higher, but the 40-year total cost of ownership is almost always lower.' },
    { q: 'How much more does metal cost than shingles in Plantation in 2026?', a: 'On a typical 22-square Plantation home, expect $14,300 to $22,000 for an HVHZ-compliant architectural shingle roof and $22,000 to $34,000 for a quality metal roof in 2026. The $6,000 to $14,000 premium is the price of buying 25 to 30 extra years of service life and the maximum wind-mitigation insurance credits.' },
    { q: 'Will my Plantation HOA let me put metal on my roof?', a: 'Most Plantation HOAs allow metal roofs, but many require Architectural Review Board approval of the panel profile and color. Standing seam in earth tones, charcoal, or matte black is approved in almost every Plantation community. Bright colors, exposed-fastener R-panel, and corrugated profiles are sometimes restricted. All Phase handles the ARB submission as part of every Plantation metal roof project.' },
    { q: 'Is metal noisier than shingles in a Plantation rainstorm?', a: 'No. The noise myth comes from old barns where panels were attached directly to wood purlins with no underlayment or insulation. A modern Plantation residential metal roof installed over a fully decked attic with peel-and-stick underlayment is no louder than a shingle roof during rain — most homeowners cannot tell the difference from inside the house.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Switch From Shingles to Metal in Plantation', item: 'https://allphaseconstructionfl.com/switch-from-shingles-to-metal-plantation' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Is It Time to Switch From Shingles to Metal in Plantation?', description: 'Side-by-side decision guide for Plantation, FL homeowners considering switching from shingles to metal — 2026 pricing, insurance credits, lifespan, HOA approval, and resale impact.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Switch From Shingles to Metal in Plantation? (2026 Decision Guide)"
        description="Should you replace your Plantation shingle roof with metal in 2026? Side-by-side cost, lifespan, insurance, HOA, and 40-year total-cost-of-ownership math."
        canonicalPath="/switch-from-shingles-to-metal-plantation"
      />
      <InlineSchema schemas={[faqSchema, breadcrumbSchema, articleSchema]} />

      <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-yellow-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/learning-center" className="hover:text-white transition-colors">Learning Center</Link>
              <span>/</span>
              <span className="text-white">Switch From Shingles to Metal in Plantation</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Is It Time to Switch From Shingles to <span className="text-yellow-400">Metal</span> in Plantation?
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              The 40-year cost-of-ownership math, insurance credit numbers, HOA realities, and lifespan tradeoffs that decide whether your next Plantation roof should be shingle or metal.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">If your current Plantation shingle roof is at or near end-of-life, switching to metal usually pays for itself within 12 to 15 years through insurance credits, lower cooling bills, and avoiding one full shingle replacement at year 18 to 22. The upfront cost is $6,000 to $14,000 higher than another shingle roof, but the 40-year total cost of ownership is almost always lower in HVHZ. The decision really comes down to how long you plan to stay in the home and whether your HOA allows the panel profile you want.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Side-by-Side: Shingle vs Metal in Plantation</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 overflow-hidden text-zinc-200">
                <thead>
                  <tr className="bg-zinc-900 text-white">
                    <th className="px-6 py-3 text-left">Factor</th>
                    <th className="px-6 py-3 text-left">Architectural Shingle</th>
                    <th className="px-6 py-3 text-left">Metal (Standing Seam or 5V)</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((c, i) => (
                    <tr key={c.f} className={`border-b border-zinc-800 ${i % 2 ? 'bg-zinc-900/50' : ''}`}>
                      <td className="px-6 py-4 font-semibold text-zinc-200">{c.f}</td>
                      <td className="px-6 py-4 text-zinc-200">{c.shingle}</td>
                      <td className="px-6 py-4 text-zinc-200">{c.metal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The 40-Year Math</h2>
            <p className="text-lg text-zinc-300">Take a typical Plantation 22-square home. An architectural shingle roof costs roughly $18,000 in 2026 and lasts 20 years on average. Over 40 years that is two replacements — call it $42,000 in nominal dollars after accounting for inflation. A metal roof costs roughly $28,000 today and lasts 40 to 50 years — one replacement total. The metal roof also generates roughly $700 a year in wind-mitigation insurance credits and saves 8% to 12% on summer cooling. Over 40 years that is $28,000 in insurance savings and $5,000 to $9,000 in energy savings. Net 40-year cost of ownership: roughly $42,000 for shingles versus roughly negative $5,000 to negative $9,000 for metal once credits and energy savings are subtracted.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">When Shingles Still Make Sense</h2>
            <p className="text-lg text-zinc-300">Shingles are the right call in Plantation if you plan to sell within 5 to 7 years and your HOA buyer pool prefers the traditional look, if your HOA explicitly prohibits metal panels, if your budget caps out below $22,000 and an insurance claim is not in play, or if you want to match an existing shingle look across a multi-building HOA. Architectural shingles in HVHZ-rated wind classes are still an excellent product — they just lose the lifetime math against metal in Broward County over a 40-year horizon.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">When Metal Is the Clear Winner</h2>
            <p className="text-lg text-zinc-300">Metal wins almost every time when the homeowner plans to stay in the house 10 or more years, when the existing roof is at or near replacement age, when the home has high cooling bills (single-story with limited shade), when the HOA permits standing seam in dark earth tones, or when the homeowner has been hit with an insurance non-renewal threat over roof age. Plantation has thousands of single-family homes that fit this profile — the math is more favorable to metal here than almost anywhere else in Broward.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Plantation HOA Considerations</h2>
            <p className="text-lg text-zinc-300">Most Plantation HOAs — including Plantation Acres, Jacaranda Lakes, Sunset Strip, and the Plantation Country Club communities — allow metal roofs but require Architectural Review Board approval of the profile and color. Standing seam in charcoal, matte black, dark bronze, and earth tones is almost universally approved. Bright colors, corrugated R-panel, and exposed-fastener systems are sometimes restricted. All Phase prepares and submits the ARB package, including the manufacturer color sample and profile cut sheet, as part of every Plantation metal roof quote.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How to Decide for Your Specific Plantation Home</h2>
            <p className="text-lg text-zinc-300">The most accurate way to answer the shingle-or-metal question for a specific home is to get both quotes side by side, then run a 40-year amortization that includes the wind-mitigation credit, the avoided second replacement, and the cooling savings. All Phase Construction USA provides both quotes free of charge along with the 40-year math at the bottom of the proposal. For a deeper look at each material option, see our <Link to="/shingle-roofing" className="text-yellow-400 underline">shingle roofing</Link> and <Link to="/metal-roofing" className="text-yellow-400 underline">metal roofing</Link> service overviews.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <div key={i} className="bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-800">
                  <h3 className="text-xl font-semibold text-white mb-3">{f.q}</h3>
                  <p className="text-zinc-300 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Both Quotes Side by Side</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">An All Phase project manager will inspect your Plantation home and deliver a fixed shingle quote and a fixed metal quote — with the full 40-year math at the bottom — within 24 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Plantation & All of Broward County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
