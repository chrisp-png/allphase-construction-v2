import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function FlatRoofTpoVsPvcWestPalmBeachPage() {
  const compare = [
    { f: 'Material Cost', tpo: '$8 – $11 per sq ft', pvc: '$10 – $14 per sq ft' },
    { f: 'Lifespan in HVHZ', tpo: '18 – 25 years', pvc: '25 – 30 years' },
    { f: 'Chemical Resistance', tpo: 'Good', pvc: 'Excellent (grease, oils, restaurant exhaust)' },
    { f: 'Heat Reflectivity (white)', tpo: '0.78 – 0.81', pvc: '0.83 – 0.87' },
    { f: 'Hot-Air Welded Seams', tpo: 'Yes', pvc: 'Yes (proven longer track record)' },
    { f: 'Florida Product Approval', tpo: 'Yes', pvc: 'Yes' },
    { f: 'Best Use Case', tpo: 'Residential flat sections, condos, low-slope additions', pvc: 'Restaurants, AC-heavy roofs, condo amenity decks, ponding-prone roofs' },
  ];
  const lineItems = [
    'Tear-off and dump fees for the existing modified bitumen, BUR, or single-ply roof.',
    'Insulation board (typically 1.5" to 2.5" polyiso) to bring the roof to current Florida energy code R-value.',
    'Cover board (high-density polyiso or gypsum) for puncture and wind-uplift performance.',
    'Mechanically fastened or fully adhered membrane per Florida Product Approval.',
    'Hot-air welded seams (no adhesive seams — adhesive flat roof seams fail in HVHZ).',
    'New tapered crickets to eliminate ponding behind AC stands and skylight curbs.',
    'New flashing at every wall, parapet, scupper, drain, and pipe penetration.',
    'New scupper and overflow scupper sleeves where required by code.',
    'City of West Palm Beach permit, plan review, and required inspections.',
    'Wind-mitigation documentation and manufacturer warranty registration (typically 15 to 25 years).',
  ];
  const faqs = [
    { q: 'TPO or PVC for a West Palm Beach flat roof?', a: 'For most West Palm Beach residential flat sections and condo amenity decks, TPO offers the best value at $8 to $11 per square foot installed. PVC at $10 to $14 per square foot is the right call when the roof carries restaurant exhaust, frequent grease or chemical exposure, or has chronic ponding water — PVC handles all three significantly better than TPO. Both systems are HVHZ-approved and both use hot-air welded seams.' },
    { q: 'How long does a TPO or PVC roof last in West Palm Beach?', a: 'A properly installed TPO roof in West Palm Beach lasts 18 to 25 years before the membrane begins to chalk and lose flexibility. PVC typically lasts 25 to 30 years thanks to a more stable plasticizer chemistry. Both systems will reach the upper end of those ranges only if the seams are hot-air welded, the cover board is included, and the drains are kept clear.' },
    { q: 'Can I install a flat roof over my existing flat roof in West Palm Beach?', a: 'In most cases no. Florida code allows up to two roof system layers, but HVHZ requires the deck to be inspected and re-fastened, and most flat roofs already carry insulation that has absorbed moisture by the end of their service life. A full tear-off down to the deck is almost always the right call for a West Palm Beach flat roof replacement.' },
    { q: 'What does a flat roof replacement cost in West Palm Beach in 2026?', a: 'A typical 2,000 square foot residential flat roof in West Palm Beach runs $16,000 to $22,000 in TPO and $20,000 to $28,000 in PVC, including tear-off, insulation, cover board, membrane, and permit. Roofs with multiple skylight curbs, AC stands, and complex parapet flashing push toward the upper end of each range.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Flat Roof TPO vs PVC in West Palm Beach', item: 'https://allphaseconstructionfl.com/flat-roof-tpo-vs-pvc-west-palm-beach' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Flat Roof: TPO vs PVC in West Palm Beach (2026)', description: 'TPO vs PVC flat roof comparison for West Palm Beach, FL — pricing, lifespan, chemical resistance, ponding water, hot-air welded seams, and HVHZ code requirements.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Flat Roof TPO vs PVC in West Palm Beach (2026) | Side-by-Side Guide"
        description="TPO or PVC for your West Palm Beach flat roof? 2026 pricing, 25-year lifespan numbers, chemical and ponding resistance, and the HVHZ code that decides which one fits."
        canonicalPath="/flat-roof-tpo-vs-pvc-west-palm-beach"
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
              <span className="text-white">Flat Roof TPO vs PVC in West Palm Beach</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Flat Roof: TPO vs PVC in <span className="text-yellow-400">West Palm Beach</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              Side-by-side pricing, lifespan, and chemical resistance — and the three things that actually decide which membrane belongs on your West Palm Beach flat roof.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">For most West Palm Beach residential and condo flat roofs, TPO is the best value at $8 to $11 per square foot installed and 18 to 25 years of service life. PVC at $10 to $14 per square foot is the right call any time the roof has chronic ponding, restaurant or kitchen exhaust grease exposure, or chemical contact — PVC handles all three significantly better and lasts 25 to 30 years. Both systems use hot-air welded seams and both hold current Florida Product Approval for HVHZ.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Side-by-Side: TPO vs PVC</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 overflow-hidden text-zinc-200">
                <thead>
                  <tr className="bg-zinc-900 text-white">
                    <th className="px-6 py-3 text-left">Factor</th>
                    <th className="px-6 py-3 text-left">TPO</th>
                    <th className="px-6 py-3 text-left">PVC</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((c, i) => (
                    <tr key={c.f} className={`border-b border-zinc-800 ${i % 2 ? 'bg-zinc-900/50' : ''}`}>
                      <td className="px-6 py-4 font-semibold text-zinc-200">{c.f}</td>
                      <td className="px-6 py-4 text-zinc-200">{c.tpo}</td>
                      <td className="px-6 py-4 text-zinc-200">{c.pvc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">When TPO Is the Right Choice</h2>
            <p className="text-lg text-zinc-300">TPO is the workhorse single-ply membrane for West Palm Beach. It is the right call on residential flat sections (additions, modern flat-roof homes, low-slope dormers), condo and townhouse roofs without restaurant exhaust, commercial warehouses with low chemical exposure, and any project where the roof drains well and stays clean. The white TPO membrane has a solar reflectance index over 100, which can cut summer cooling costs by 5 to 15% on a typical West Palm Beach building.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">When PVC Is Worth the Premium</h2>
            <p className="text-lg text-zinc-300">PVC earns its higher price tag in three specific situations. The first is restaurant and food-service roofs where grease, animal fats, and exhaust oils degrade TPO seams within 8 to 10 years. The second is roofs with chronic ponding water — PVC's plasticizer chemistry handles 48-plus hours of standing water without losing seam strength, while TPO can show seam failure under those conditions. The third is roofs with frequent foot traffic and rooftop equipment service. PVC's puncture resistance and longer plasticizer life make it the better long-term investment when the roof is going to be walked on regularly.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What's Inside a West Palm Beach Flat Roof Quote</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              {lineItems.map(li => <li key={li}>{li}</li>)}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">HVHZ Code on Single-Ply Roofs</h2>
            <p className="text-lg text-zinc-300">Palm Beach County is part of the High Velocity Hurricane Zone, and single-ply membrane systems must hold a current Florida Product Approval (NOA) covering the specific deck, insulation, cover board, membrane, and fastener pattern. The NOA dictates fastener spacing (typically 12 inches on center in the field, 6 inches at perimeter and corners), the cover board requirement, and the seam-welding procedure. Adhesive-only seams are not permitted in HVHZ — every TPO and PVC seam must be hot-air welded with a robotic welder or hand welder set to the manufacturer-specified temperature.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Permit and Inspection in West Palm Beach</h2>
            <p className="text-lg text-zinc-300">The City of West Palm Beach Building Division processes commercial and residential flat roof permits through its Compass online portal. Expect $400 to $1,200 in permit fees for a typical residential or small commercial replacement, plus the Florida state surcharge. The permit covers plan review, an in-progress dry-in inspection, and a final inspection. All Phase pulls every permit under our license and schedules every inspection.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for a West Palm Beach Flat Roof</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA installs both TPO and PVC single-ply systems across West Palm Beach, Palm Beach Gardens, Lake Worth Beach, and the rest of Palm Beach County. Every quote includes the full HVHZ scope, the cover board, hot-air welded seams, and the manufacturer warranty registration. For the full picture of your flat roof options, see our <Link to="/flat-roofing" className="text-yellow-400 underline">flat roofing service overview</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free West Palm Beach Flat Roof Quote</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">An All Phase project manager will be on your roof within 48 hours and your fixed TPO or PVC quote will be in your inbox within 24 hours after that.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving West Palm Beach & All of Palm Beach County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
