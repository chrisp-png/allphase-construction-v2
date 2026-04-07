import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function TileRoofReplacementWellingtonPage() {
  const tiles = [
    { type: 'Concrete Flat Tile', sq: '$1,000 – $1,400', total: '$22,000 – $30,800', life: '40 – 50 yrs' },
    { type: 'Concrete S-Tile (Spanish profile)', sq: '$1,100 – $1,600', total: '$24,200 – $35,200', life: '40 – 50 yrs' },
    { type: 'Concrete Barrel / Mediterranean', sq: '$1,250 – $1,750', total: '$27,500 – $38,500', life: '50 yrs' },
    { type: 'Clay S-Tile', sq: '$1,400 – $1,950', total: '$30,800 – $42,900', life: '60 – 100 yrs' },
    { type: 'Clay Two-Piece Barrel', sq: '$1,600 – $2,250', total: '$35,200 – $49,500', life: '75 – 100 yrs' },
  ];
  const lineItems = [
    'Engineered tile load review (Wellington HOAs and Palm Beach County require this on most reroofs).',
    'Tear-off, dump fees, and disposal of existing tile or shingle layers.',
    'Deck inspection, plywood replacement, and HVHZ re-nail with 8d ring-shank fasteners.',
    'Peel-and-stick secondary water barrier across 100% of the deck.',
    'Engineered tile attachment system per current Florida Product Approval (foam-set, mechanical, or hybrid).',
    'New eave riser, anti-ponding metal, and pan flashing.',
    'New ridge, hip, and rake tile with mortar or polyurethane foam set per NOA.',
    'New lead pipe boots and tile pan flashing for every penetration.',
    'Palm Beach County / Village of Wellington permit, plan review, and inspections.',
    'HOA architectural review submission and color approval coordination.',
    'Wind-mitigation report and manufacturer warranty registration.',
  ];
  const faqs = [
    { q: 'How much does a tile roof replacement cost in Wellington in 2026?', a: 'A typical 22-square Wellington home runs $22,000 to $42,000 for concrete tile and $35,000 to $50,000 for clay tile, installed to current HVHZ code. The exact number depends on the tile profile, the existing deck condition, the engineered tile load review, and HOA-required color and profile approvals.' },
    { q: 'Will my Wellington HOA let me change tile colors?', a: 'Most Wellington HOAs require an Architectural Review Board submission for any change in tile profile or color, and many limit replacement to the same family of profile and color. Submitting two or three pre-approved options up front and including a manufacturer color sample is the fastest path to approval. All Phase handles the ARB submission as part of every Wellington tile replacement.' },
    { q: 'Does my Wellington home need an engineered tile load review?', a: 'In most cases yes. Palm Beach County and the Village of Wellington require a registered engineer or design professional to certify that the truss and rafter system can carry the dead load of the new tile system, especially if you are switching from concrete to clay (clay is heavier) or upgrading to a barrel profile. The review typically costs $250 to $600 and is included in an All Phase Wellington tile quote.' },
    { q: 'Can I switch from tile to shingles in Wellington?', a: 'Technically yes — but most Wellington HOAs prohibit it, and a switch from tile to shingle on a tile-rated home almost always requires HOA architectural approval and can hurt resale value. Insurance carriers also tend to write better terms on tile roofs in HVHZ. We typically recommend staying with tile in Wellington unless the HOA actively encourages a change.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Tile Roof Replacement in Wellington', item: 'https://allphaseconstructionfl.com/tile-roof-replacement-wellington' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Tile Roof Replacement in Wellington (HOA + Weight Load Guide)', description: 'Complete 2026 Wellington tile roof guide — concrete vs clay pricing, HOA architectural approval, engineered weight load review, and HVHZ tile attachment requirements.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Tile Roof Replacement in Wellington (2026) | HOA + Weight Load Guide"
        description="2026 Wellington tile roof pricing for concrete and clay, with HOA architectural approval, engineered weight load review, and HVHZ attachment requirements explained."
        canonicalPath="/tile-roof-replacement-wellington"
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
              <span className="text-white">Tile Roof Replacement in Wellington</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Tile Roof Replacement in <span className="text-yellow-400">Wellington</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              Concrete vs clay pricing, HOA architectural approval, engineered weight load review, and the HVHZ attachment system that determines whether your tile roof passes inspection.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">A Wellington tile roof replacement runs $22,000 to $42,000 for concrete and $35,000 to $50,000 for clay on a typical 22-square home. Almost every Wellington tile reroof requires three things on top of the basic install — an HOA architectural review, an engineered tile load certification, and an HVHZ-compliant attachment system. Skipping any of the three is the most common reason a Wellington tile job fails inspection or gets stop-worked by code enforcement.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Wellington Tile Roof Pricing by Profile</h2>
            <p className="text-lg text-zinc-300 mb-6">Tile pricing in Wellington varies more by profile and material than by brand. Concrete tile is the most common across the village's primary subdivisions, while clay barrel and Mediterranean profiles are required by deed restriction in several communities west of 441. Pricing below assumes a clean tear-off and full HVHZ scope on a single-story 22-square home.</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 overflow-hidden text-zinc-200">
                <thead>
                  <tr className="bg-zinc-900 text-white">
                    <th className="px-6 py-3 text-left">Tile Type</th>
                    <th className="px-6 py-3 text-center">Per Square</th>
                    <th className="px-6 py-3 text-center">22-Square Home</th>
                    <th className="px-6 py-3 text-center">Lifespan</th>
                  </tr>
                </thead>
                <tbody>
                  {tiles.map((t, i) => (
                    <tr key={t.type} className={`border-b border-zinc-800 ${i % 2 ? 'bg-zinc-900/50' : ''}`}>
                      <td className="px-6 py-4 font-semibold text-zinc-200">{t.type}</td>
                      <td className="px-6 py-4 text-center text-zinc-200">{t.sq}</td>
                      <td className="px-6 py-4 text-center text-zinc-200">{t.total}</td>
                      <td className="px-6 py-4 text-center text-zinc-200">{t.life}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-zinc-300">Two-story homes, steep pitches, and complex hip-and-valley layouts add 10 – 20% to each range.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What's Inside a Wellington Tile Quote</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
              {lineItems.map(li => <li key={li}>{li}</li>)}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">HOA Architectural Approval in Wellington</h2>
            <p className="text-lg text-zinc-300">Almost every Wellington subdivision is governed by an HOA with architectural review authority over roof tile color, profile, and material. Olympia, Versailles, Binks Forest, the Equestrian Club, and the Aero Club all require an Architectural Review Board (ARB) application before any tile work can begin. The ARB typically wants three things: the manufacturer color sample board, the proposed profile cut sheet, and the contractor's license and insurance package. Submission lead time runs 2 to 6 weeks depending on the community. All Phase prepares and submits the ARB package as part of every Wellington tile replacement so the homeowner does not have to navigate the form themselves.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Engineered Tile Load Review</h2>
            <p className="text-lg text-zinc-300">Concrete tile weighs roughly 900 to 1,100 pounds per square. Clay barrel tile can exceed 1,200 pounds per square. Most Wellington homes were originally engineered for one specific tile system, and Palm Beach County requires a registered design professional to certify the truss and rafter system can carry the load before any reroof permit is issued. The certification runs $250 to $600 and becomes critical the moment a homeowner wants to switch from concrete to clay, or from flat tile to a barrel profile. All Phase coordinates the engineered review on every Wellington tile job so there are no permit delays.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">HVHZ Tile Attachment Systems</h2>
            <p className="text-lg text-zinc-300">Inside the High Velocity Hurricane Zone, tile cannot simply be mortar-set the way it was 25 years ago. Current Florida Product Approval requires one of three engineered systems: a screwed-and-foamed hybrid where each tile is mechanically fastened to the deck and bonded with polyurethane foam, a fully foam-set system using NOA-approved single-component foam in a documented pattern, or a fully mechanical screw-down for steeper pitches. The system must match the manufacturer NOA exactly — including foam brand, screw length, and bead pattern. A Wellington tile job that uses a non-NOA attachment will fail inspection and require complete tear-off and re-install at the contractor's expense.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Permit and Inspection in the Village of Wellington</h2>
            <p className="text-lg text-zinc-300">The Village of Wellington Building Division processes residential roofing permits through an online portal. Expect $400 to $850 in permit fees for a tile replacement plus the Florida state surcharge. The permit covers plan review, an in-progress dry-in inspection, and a final inspection. All Phase pulls every Wellington permit under our license and schedules every inspection.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for a Wellington Tile Roof</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA has installed concrete and clay tile across Wellington's largest equestrian and residential communities. Every quote includes the engineered load review, HOA submission, full HVHZ scope, NOA-approved attachment system, and the wind-mitigation report. For the full picture of your tile options, see our <Link to="/tile-roofing" className="text-yellow-400 underline">tile roofing service overview</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Wellington Tile Roof Quote</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">An All Phase project manager will be on your roof within 48 hours and your fixed quote — including the HOA package and engineered review — will be in your inbox within 24 hours after that.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Wellington & All of Palm Beach County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
