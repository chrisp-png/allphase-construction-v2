import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function RoofLeakDetectionWestonPage() {
  const sources = [
    'Failed pipe boots and rubber vent collars (the #1 source on virtually every Florida roof).',
    'Cracked or improperly sealed flashing at chimneys, walls, and skylights.',
    'Lifted, slipped, or cracked tiles and broken hip/ridge tile mortar.',
    'Lifted shingles along ridge, hip, and rake edges from wind uplift.',
    'Failed sealant around AC condenser stands, satellite dishes, and solar mounts.',
    'Clogged valleys where debris dams water against the underlayment.',
    'Wind-driven rain entering soffit vents on the windward side.',
    'Failed underlayment that has aged out beyond its useful life.',
  ];
  const faqs = [
    { q: 'How can I find the source of a roof leak in my Weston home?', a: 'The interior leak point is almost never directly under the actual roof leak. Water enters at one point on the roof, runs along a rafter or the underside of the deck, and shows up on the ceiling somewhere else entirely. The reliable way to find the actual source is a professional inspection that combines roof-surface walking, attic infrared or moisture meter scanning, and (if needed) a controlled water test. All Phase provides free leak detection inspections across Weston.' },
    { q: 'How much does roof leak detection cost in Weston?', a: 'Standalone professional leak detection in Weston runs $250 to $600 depending on roof size and complexity. All Phase Construction USA provides free leak detection as part of any inspection request — we only charge if the homeowner asks for advanced infrared or controlled water testing on a tough-to-find source.' },
    { q: 'Can a small roof leak really cause major damage in Weston?', a: 'Yes, and faster than most homeowners expect. South Florida humidity means the moisture from a slow leak has nowhere to go. Within 30 to 60 days a small leak typically produces wet insulation, mold growth in the attic cavity, and stained drywall. Within 6 to 12 months it produces failed ceiling sections and rotted decking. The cost difference between catching it in week one vs month six is usually 10x to 20x.' },
    { q: 'Should I pay for roof leak repair out of pocket or file a claim?', a: 'It depends on the cause. Sudden storm-related damage is almost always worth filing on your homeowners policy. Slow wear-and-tear leaks from a failed pipe boot or aging sealant are typically not covered and are best paid out of pocket. The first step is the inspection — once you know the actual source, the right path becomes obvious. All Phase walks every Weston homeowner through that decision.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Roof Leak Detection in Weston', item: 'https://allphaseconstructionfl.com/roof-leak-detection-weston' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Roof Leak Detection in Weston (8 Common Sources)', description: 'How to find the actual source of a roof leak in a Weston home, the 8 most common Florida leak sources, and when to repair vs file an insurance claim.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Roof Leak Detection in Weston, FL (2026 Guide)"
        description="How to find the source of a roof leak in a Weston home, the 8 most common Florida leak sources, and when to repair vs file an insurance claim."
        canonicalPath="/roof-leak-detection-weston"
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
              <span className="text-white">Roof Leak Detection in Weston</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Roof Leak Detection in <span className="text-yellow-400">Weston</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              The 8 most common Florida roof leak sources, why the interior stain is almost never directly under the actual leak, and how a professional inspection saves Weston homeowners from $5,000+ ceiling repairs.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">A roof leak in a Weston home almost never originates directly above the interior stain. Water enters the roof at one point, runs along the underside of the deck or down a rafter, and surfaces on the ceiling somewhere else entirely. The reliable way to find the actual source is a professional inspection that combines surface walking, attic moisture detection, and (when needed) a controlled water test. All Phase Construction USA provides free leak detection inspections across Weston.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The 8 Most Common Florida Leak Sources</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              {sources.map(s => <li key={s}>{s}</li>)}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why the Interior Stain Lies About the Source</h2>
            <p className="text-lg text-zinc-300">Water always follows gravity and the path of least resistance. When it enters at a failed pipe boot near the ridge, it commonly runs 8 to 15 feet along the underside of the deck, follows a rafter, and finally drips down through the drywall in a completely different room. Homeowners who try to chase the leak based on the location of the ceiling stain almost always end up patching the wrong spot. The fix is to start at the high point of the roof above the stain and work systematically — which is exactly what a professional inspection does.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Pipe Boots: The #1 Source on Almost Every Roof</h2>
            <p className="text-lg text-zinc-300">If we had to bet on a single component as the source of any given South Florida leak, we would bet on a failed pipe boot every time. Standard rubber pipe boots last 8 to 12 years before South Florida UV breaks down the rubber collar around the plumbing vent stack. Once the rubber cracks, water runs straight down the pipe, into the attic, and onto the ceiling below. The fix is fast and inexpensive — a new lead boot or a high-quality silicone collar runs $200 to $400 installed — but only if you find it before the secondary damage compounds.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">When to Use Infrared or a Water Test</h2>
            <p className="text-lg text-zinc-300">Most Weston roof leaks are findable with a careful surface walk and an attic inspection with a moisture meter. Some leaks — especially intermittent ones that only appear during driving wind or heavy rain — require either an infrared scan from inside the attic or a controlled water test where one section of the roof at a time is sprayed with a hose while a second person watches the attic for the entry point. Both techniques add cost but they reliably find the leaks that simple inspection cannot. All Phase only escalates to these methods when the basic inspection fails.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Repair vs Insurance Claim Decision</h2>
            <p className="text-lg text-zinc-300">If the leak is sudden and storm-related, file the claim. If the leak is the slow result of an aged pipe boot, failed sealant, or wear-and-tear, pay the repair out of pocket — most carriers will deny wear-and-tear claims and the denial goes on the homeowner's claim history, which affects renewability. The first step in either case is a professional inspection that documents the actual cause. All Phase provides that inspection at no cost across Weston and helps the homeowner make the right call.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for Weston Leak Detection</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA provides free roof leak detection across Weston, Davie, Cooper City, and the rest of west Broward County. Every inspection includes a dated photo report and an honest recommendation on whether to repair, replace, or file a claim. For the broader picture of how we work, see our <Link to="/florida-roof-insurance-claims-guide" className="text-yellow-400 underline">Florida roof insurance claims guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Free Weston Leak Detection</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">Have an active leak? An All Phase project manager will find the actual source and give you a written repair plan within 24 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Weston & All of Broward County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
