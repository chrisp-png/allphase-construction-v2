import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function BocaRatonRoofReplacementTimelinePage() {
  const phases = [
    { h: 'Phase 1 — Inspection and Quote (Day 0)', p: "The clock starts the day you book a free inspection. An All Phase project manager will be on your Boca Raton roof within 48 hours, take measurements and drone photos, document any damage, and email you a fixed all-inclusive quote within 24 hours. Most homeowners have a signed contract in hand within 3 to 5 days of the first call." },
    { h: 'Phase 2 — Contract Signing and Material Order (Days 1–5)', p: "Once your contract is signed, your project enters the production queue. We order your shingles, tile, or metal panels directly from the manufacturer with HVHZ NOA documentation attached. Most architectural shingle orders arrive within 3 to 5 business days, while concrete and clay tile orders can take 1 to 3 weeks depending on color and profile." },
    { h: 'Phase 3 — Palm Beach County Permit (Days 5–15)', p: "Palm Beach County requires a permit for any roof replacement over 25% of the surface, any material change, or any structural alteration. We submit the permit electronically with a sealed product approval package. Most Boca Raton residential roofing permits are issued within 5 to 10 business days. We monitor the queue daily and respond to any reviewer questions the same day they come in." },
    { h: 'Phase 4 — Tear-Off and Dry-In (Day 1 of Install)', p: "On the morning of install, our crew arrives at sunrise, protects your landscaping with tarps and plywood, and begins tearing off the existing roof down to the deck. By mid-afternoon the entire deck is exposed, inspected, and re-nailed to current Florida code. Before the crew leaves on Day 1, the entire roof is sealed with peel-and-stick HVHZ underlayment so it is fully waterproof — even if a Boca Raton afternoon thunderstorm rolls in that night." },
    { h: 'Phase 5 — Deck Repair and Underlayment (Day 2)', p: "Day 2 is when any rotten or delaminated plywood is replaced, all flashings are stripped and prepped, drip edge is installed, and the secondary water barrier is fully sealed at every penetration. On a shingle home, the crew often begins laying starter strip and the first courses of shingles before the day ends." },
    { h: 'Phase 6 — Primary Material Installation (Days 2–5)', p: "This phase varies the most by material. A standard architectural shingle roof on a single-story Boca Raton home is usually fully installed in 1 to 2 days. Standing-seam metal panels typically take 3 to 4 days because every panel is custom-cut and mechanically seamed on site. Concrete tile takes the longest — 4 to 6 days — because every tile is screw-attached or foam-set per HVHZ requirements and the hip and ridge tiles are mortar-finished." },
    { h: 'Phase 7 — Cleanup and Magnetic Sweep', p: "On the final day of installation, the crew tarps off the entire perimeter of the home, runs an industrial magnetic sweeper across every walkable surface (driveway, lawn, pool deck), removes the dumpster, and walks the property with you. Our standard is to leave the job site cleaner than we found it." },
    { h: 'Phase 8 — City Final Inspection and Warranty Activation', p: "After cleanup, we schedule the Palm Beach County final inspection — typically within 3 to 5 business days. Once the inspector signs off, we register your manufacturer warranty (which can be up to 50 years on premium systems) and email you a complete digital project package: permit, inspection sign-offs, NOAs, warranty certificates, and before-and-after photos." },
  ];
  const homeownerTips = [
    'Move vehicles out of the driveway each install morning by 6:30 AM.',
    'Take down any wall art that hangs near vibration-sensitive walls (hammering creates vibration).',
    'Keep pets and small children indoors during tear-off and install.',
    'Plan for moderate noise from 7 AM to 5 PM each install day.',
    'Be available by phone during the inspection in case the inspector has access questions.',
  ];
  const faqs = [
    { q: 'How many days does a roof replacement take in Boca Raton?', a: 'Most Boca Raton shingle roof replacements are completed in 2 to 4 working days once the Palm Beach County permit is issued, while concrete tile homes typically take 5 to 7 days. The full timeline from contract to final inspection runs 2 to 6 weeks.' },
    { q: 'How long does a Palm Beach County roofing permit take?', a: 'Most Boca Raton residential roofing permits are issued within 5 to 10 business days when submitted with a complete sealed product approval package.' },
    { q: 'Will my house be exposed overnight during a roof replacement?', a: 'No. All Phase Construction USA schedules tear-off and dry-in on the same day, so the entire roof is sealed with peel-and-stick HVHZ underlayment before the crew leaves. Your home is fully waterproof every night of the install.' },
    { q: 'Can a roof replacement happen during hurricane season?', a: 'Yes, but we track the radar in real time and our same-day dry-in protocol means your home is never left exposed overnight. If a tropical system threatens during your install window, we will reschedule the tear-off rather than risk a partially-open roof.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Boca Raton Roof Replacement Timeline', item: 'https://allphaseconstructionfl.com/boca-raton-roof-replacement-timeline' },
  ]};
  const businessSchema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', '@id': 'https://allphaseconstructionfl.com/#organization', name: 'All Phase Construction USA', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '170', bestRating: '5', worstRating: '1' } };
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Boca Raton Roof Replacement Timeline: A Day-by-Day Guide', description: 'How long a roof replacement takes in Boca Raton, FL — phase-by-phase from inspection through final inspection, with permit and weather notes.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-01', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Boca Raton Roof Replacement Timeline (2026) | Day-by-Day Guide"
        description="How long does a roof replacement take in Boca Raton? A phase-by-phase day-by-day timeline from inspection to final inspection, with permit and weather contingencies."
        canonicalPath="/boca-raton-roof-replacement-timeline"
      />
      <InlineSchema schemas={[faqSchema, breadcrumbSchema, articleSchema, businessSchema]} />

      <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-yellow-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/learning-center" className="hover:text-white transition-colors">Learning Center</Link>
              <span>/</span>
              <span className="text-white">Boca Raton Roof Replacement Timeline</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Boca Raton Roof Replacement Timeline <span className="text-yellow-400">Day-by-Day</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              Exactly what happens — and when — from your first inspection call to final inspection sign-off in Palm Beach County.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">Most Boca Raton shingle roof replacements are completed in 2 to 4 working days once the Palm Beach County permit is issued, while concrete tile homes typically take 5 to 7 days. The full timeline from contract to final inspection runs 2 to 6 weeks. All Phase Construction USA schedules tear-off and dry-in on the same day to keep your home protected. Below is the full day-by-day breakdown so you know what to expect at every stage.</p>
          </section>

          {phases.map(ph => (
            <section key={ph.h} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{ph.h}</h2>
              <p className="text-lg text-zinc-300">{ph.p}</p>
            </section>
          ))}

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Weather Contingencies in South Florida</h2>
            <p className="text-lg text-zinc-300">Boca Raton averages an afternoon thunderstorm 75+ days per year, and hurricane season runs June through November. We track the radar in real time during every install, and our same-day dry-in protocol means your home is never left exposed overnight. If a tropical system threatens during your install window, we will reschedule the tear-off rather than risk a partially-open roof.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What the Homeowner Should Do During Each Phase</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              {homeownerTips.map(t => <li key={t}>{t}</li>)}
            </ul>
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
            <h2 className="text-3xl font-bold mb-4">Schedule Your Free Boca Raton Roof Inspection</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">We will be on your roof within 48 hours and you will have a written timeline plus a fixed quote in hand within 24 hours after that. For the rest of the questions Boca Raton homeowners ask, see our complete <Link to="/boca-raton-roof-replacement-guide" className="text-yellow-400 underline">Boca Raton roof replacement guide</Link>.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Boca Raton & All of Palm Beach County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
