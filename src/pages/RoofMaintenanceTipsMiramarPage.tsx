import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function RoofMaintenanceTipsMiramarPage() {
  const tips = [
    'Clear debris from valleys, gutters, and downspouts every 3 months — wet leaves on a flat valley accelerate underlayment failure.',
    'Trim back any tree branches within 6 feet of the roof surface — abrasion, falling limbs, and squirrel access all start here.',
    'Inspect every pipe boot, vent collar, and flashing point twice per year — boots are the #1 source of unexpected leaks.',
    'Re-seal exposed nail heads and caulk joints every 3 to 5 years before UV breaks them down.',
    'Walk the attic with a flashlight after every heavy rain looking for fresh staining or wet insulation.',
    'Wash organic algae and lichen off shingle and tile surfaces with a soft-wash chemical (not pressure wash) every 2 to 3 years.',
    'Photograph the roof from all four sides annually so you have a dated baseline if a storm hits.',
    'Schedule a professional inspection in April or May before hurricane season starts on June 1.',
    'Replace any cracked or missing tiles immediately — exposed underlayment in South Florida sun fails in 60 days.',
    'Keep gutters securely fastened and pitched correctly so water moves off the roof and away from the foundation.',
  ];
  const faqs = [
    { q: 'How often should I do roof maintenance on my Miramar home?', a: 'Light maintenance — debris clearing, gutter cleaning, visible inspection — every 3 months. A full walk-the-roof maintenance check twice per year, ideally in April (pre-hurricane) and November (post-hurricane). A professional inspection once per year. South Florida roofs age fast and the small habit beats the big repair every time.' },
    { q: 'Can I do roof maintenance myself in Miramar?', a: 'Light maintenance from a ladder — gutter cleaning, debris removal at the eaves, branch trimming — is reasonable for a fit homeowner. Walking the actual roof surface is not. South Florida tile, especially when wet or covered with algae, is one of the slipperiest surfaces a person can stand on, and the falls cause permanent injuries every storm season. Hire it out.' },
    { q: 'How much does professional roof maintenance cost in Miramar?', a: 'A standalone professional maintenance visit in Miramar runs $250 to $500 depending on roof size, complexity, and what is found. All Phase Construction USA includes the first annual maintenance visit free for any homeowner whose roof we have inspected or worked on in the previous 12 months.' },
    { q: 'Does roof maintenance actually extend the life of my roof?', a: 'Substantially yes. A well-maintained asphalt shingle roof in Miramar lasts the full 20 to 25 year manufacturer-rated life. A neglected one fails at 12 to 15. Tile and metal systems show even larger gaps — a maintained tile roof can outlive a neglected one by 20+ years. The math on $300 a year of maintenance vs $20,000 of premature replacement is not subtle.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Roof Maintenance Tips for Miramar', item: 'https://allphaseconstructionfl.com/roof-maintenance-tips-miramar' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: '10 Roof Maintenance Tips for Miramar Homeowners (2026)', description: '10 practical roof maintenance habits that extend the life of a Miramar roof, prevent leaks, and protect insurance renewability.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="10 Roof Maintenance Tips for Miramar Homeowners (2026)"
        description="10 practical Miramar roof maintenance habits that extend roof life, prevent leaks, and protect insurance renewability. The full pre-hurricane checklist."
        canonicalPath="/roof-maintenance-tips-miramar"
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
              <span className="text-white">Roof Maintenance Tips for Miramar</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              10 Roof Maintenance Tips for <span className="text-yellow-400">Miramar</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              The 10 practical maintenance habits that take a Miramar roof from a 12-year early failure to a full 25-year lifespan — and protect insurance renewability along the way.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">Maintain your Miramar roof on a quarterly rhythm: clear debris and gutters every 3 months, walk the attic after every heavy rain, schedule a professional inspection once a year before hurricane season, and address small issues immediately. A maintained roof in South Florida lasts the full 20 to 25 year manufacturer life. A neglected one fails in 12 to 15 — and the carrier non-renews on the way out.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The 10 Maintenance Habits</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              {tips.map(t => <li key={t}>{t}</li>)}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Miramar Roofs Age Faster Than Most</h2>
            <p className="text-lg text-zinc-300">Miramar sits in the southern half of Broward County with classic South Florida exposure — intense UV from morning to dusk, near-daily afternoon thunderstorms during the wet season, salt air pulled inland from the coast, and 50 to 70 inches of annual rainfall. Every one of those factors attacks a roof system in a different way. UV breaks down asphalt binders and tile surface coatings. Rain finds any pinhole in flashing or sealant. Salt accelerates fastener corrosion. The combination is why a Florida roof is rated for 20 to 25 years instead of the 40+ years the same material delivers in a dry climate. Maintenance is what closes the gap between rated life and actual delivered life.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The Quarterly Checklist</h2>
            <p className="text-lg text-zinc-300">Every 3 months, walk around the home and look up. Clear leaves and debris from gutters and visible valleys. Photograph anything that looks new — a dropped ridge cap, a lifted shingle, a cracked tile. Walk the attic with a flashlight after the next heavy rain. Twenty minutes per quarter prevents the vast majority of unexpected leaks and gives you a dated record if you ever need to file a claim.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Pre-Hurricane Season (April–May) Priority List</h2>
            <p className="text-lg text-zinc-300">Before June 1 every year: schedule a professional roof inspection, trim any tree branches within 6 feet of the roof, clear all gutters and downspouts, photograph the roof from all four sides, and verify your wind mitigation report is current. These five tasks — together — are the difference between a routine claim experience after the next storm and a long, painful fight with the carrier.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">When to Call a Professional</h2>
            <p className="text-lg text-zinc-300">Call for professional service the moment you see any of the following: a fresh interior ceiling stain, daylight visible from inside the attic, a dropped or cracked tile, a lifted or missing shingle, soft spots underfoot when you walk near the eaves, or a granule deposit at the base of a downspout that suddenly increases. None of these are emergencies if caught early — but every one of them becomes an emergency if ignored.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for Miramar Roof Maintenance</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA provides scheduled maintenance and inspection service across Miramar, Pembroke Pines, and the entire Broward County footprint. Every visit produces a written punch-list and a dated photo report. For the broader picture of how we work, see our <Link to="/florida-roof-insurance-claims-guide" className="text-yellow-400 underline">Florida roof insurance claims guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Schedule Miramar Roof Maintenance</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">Get on a quarterly maintenance rhythm. An All Phase project manager will set the inspection, the punch-list, and the calendar.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Maintenance</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Miramar & All of Broward County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
