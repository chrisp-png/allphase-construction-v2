import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function DelrayBeachRoofOverlayVsTearOffPage() {
  const sections = [
    {
      h: 'What Florida Code Actually Says',
      p: "Florida Building Code allows up to two layers of asphalt shingles on a residential roof, provided the existing layer is in good condition, the deck is sound, and the new layer is installed per manufacturer specifications. That single sentence is why some contractors still pitch a roof-over in Delray Beach. What gets left out is the second sentence: any reroof inside the High Velocity Hurricane Zone — which includes all of Palm Beach County east of the Turnpike — requires that the existing roof be removed so the deck can be inspected, re-nailed, and sealed with a peel-and-stick secondary water barrier. In practice, the HVHZ amendments make a true overlay almost impossible on a Delray Beach home."
    },
    {
      h: 'Why Delray Beach Almost Always Requires a Full Tear-Off',
      p: "Delray Beach sits inside Florida's HVHZ, which exists for one reason: hurricane wind uplift. The 2004 and 2005 hurricane seasons proved that the difference between a roof that survives a Category 3 storm and one that ends up in the next county is what is happening underneath the shingles. Code now requires the deck to be re-nailed to current standards using 8d ring-shank nails on a tighter pattern, and a peel-and-stick underlayment to be installed across 100% of the deck as a secondary water barrier. Neither of those things is possible without removing the existing roof. A roof-over hides the deck, hides the old nails, and leaves the secondary water barrier missing — three things an HVHZ inspector will not approve."
    },
    {
      h: 'The Hidden Costs of an Overlay',
      p: "Even if a Delray Beach property could legally get an overlay, the math rarely works in the homeowner's favor. A second layer of shingles adds roughly 250 to 400 pounds per square of dead load to a structure that was originally engineered for one layer. That extra weight stresses the rafters and accelerates deck deflection. The second layer also traps heat against the first, dramatically shortening its life — most overlays fail within 8 to 12 years instead of the 18 to 22 years a full tear-off provides. And almost every shingle manufacturer voids the longest tier of warranty coverage on overlays, so you lose 20-plus years of warranty in exchange for saving roughly $1,500 to $3,000 up front."
    },
    {
      h: 'What a Proper Tear-Off Includes',
      p: "A code-compliant tear-off in Delray Beach removes every layer of existing roofing down to the bare deck, exposes 100% of the plywood for inspection, replaces any rotten or delaminated sheets, re-nails the entire deck to current HVHZ pattern, installs new drip edge and valley metal, applies peel-and-stick secondary water barrier across the entire deck with proper laps and end-of-roll seals, and only then begins installing the primary roofing material. The process takes one extra day compared to an overlay but unlocks the longest manufacturer warranties available, the highest insurance discounts, and the actual hurricane protection your house was permitted for."
    },
    {
      h: 'Insurance Implications',
      p: "Most Florida homeowners insurance carriers now require documentation of the underlayment, deck condition, and fastening pattern when they renew a policy on a roof less than 25 years old. An overlay cannot produce that documentation because the deck and underlayment are hidden. Carriers are increasingly non-renewing policies on overlay roofs and refusing wind mitigation credits — credits that can be worth $400 to $1,200 per year on a Delray Beach policy. A proper tear-off, on the other hand, generates a complete wind mitigation inspection that captures every premium discount available."
    },
    {
      h: 'When an Overlay Is Actually Legal in Florida',
      p: "Outside the HVHZ — generally Florida counties north of Lake Okeechobee — an overlay can be legal if the existing roof is in good condition, the deck is sound, the new layer is the same material type, and the manufacturer approves it. Even then, most reputable contractors recommend against it because of the warranty, weight, and lifespan tradeoffs. Inside Palm Beach County and Broward County, the HVHZ amendments effectively eliminate the option for residential properties."
    },
    {
      h: 'The Bottom Line for Delray Beach Homeowners',
      p: "Tear-off is not just the right choice in Delray Beach — it is essentially the only choice if you want a code-compliant roof, the longest warranty, the best insurance pricing, and real hurricane protection. The marginal upfront savings from an overlay are erased within a few years by higher insurance, shorter lifespan, and lost warranty coverage. Any contractor pitching an overlay on a Delray Beach property is either uninformed about HVHZ code or hoping you are."
    },
  ];
  const faqs = [
    { q: 'Can I install a new roof over my existing roof in Delray Beach?', a: 'Florida code allows up to two layers of shingles total, but in HVHZ counties like Palm Beach, most roofs in Delray Beach require a full tear-off so the deck can be inspected, re-nailed to current code, and sealed with a peel-and-stick underlayment. A tear-off also unlocks the longest manufacturer warranties.' },
    { q: 'How much more does a tear-off cost than an overlay?', a: 'A full tear-off typically adds $1,500 to $3,000 to the project compared to an overlay, but it unlocks longer manufacturer warranties, higher insurance discounts, and a 6 to 10 year longer roof lifespan — the math almost always favors tear-off.' },
    { q: 'Will my insurance cover a tear-off in Delray Beach?', a: 'If the replacement is triggered by storm damage, most carriers will pay for a code-compliant tear-off including HVHZ underlayment and re-nailing. Florida law-and-ordinance coverage typically includes the cost of bringing the roof up to current code.' },
    { q: 'Does an overlay void my shingle warranty?', a: 'Most major shingle manufacturers void or significantly limit the longest-tier warranty on overlays. A full tear-off is required to qualify for the 25-year and 50-year warranty programs that come with premium architectural shingles.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Delray Beach Roof Overlay vs Tear-Off', item: 'https://allphaseconstructionfl.com/delray-beach-roof-overlay-vs-tear-off' },
  ]};
  const businessSchema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', '@id': 'https://allphaseconstructionfl.com/#organization', name: 'All Phase Construction USA', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '170', bestRating: '5', worstRating: '1' } };
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Delray Beach: Roof Overlay vs Tear-Off (2026)', description: 'Why a full tear-off is almost always the right call for a Delray Beach roof — HVHZ code, warranty, insurance, and lifespan all favor tear-off over overlay.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-01', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Delray Beach Roof Overlay vs Tear-Off (2026) | Why HVHZ Code Decides"
        description="Roof overlay or full tear-off in Delray Beach? HVHZ code, warranty, insurance, and lifespan all point to one answer. Here is the full breakdown."
        canonicalPath="/delray-beach-roof-overlay-vs-tear-off"
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
              <span className="text-white">Delray Beach Roof Overlay vs Tear-Off</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Delray Beach: Roof Overlay vs <span className="text-yellow-400">Tear-Off</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              Why HVHZ code, warranty, insurance, and lifespan all point to a full tear-off on a Delray Beach reroof.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">Florida code allows up to two layers of shingles total, but in HVHZ counties like Palm Beach, most roofs in Delray Beach require a full tear-off so the deck can be inspected, re-nailed to current code, and sealed with a peel-and-stick underlayment. A tear-off also unlocks the longest manufacturer warranties and the best insurance pricing — the marginal savings from an overlay almost never make sense in Delray Beach.</p>
          </section>

          {sections.map(s => (
            <section key={s.h} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{s.h}</h2>
              <p className="text-lg text-zinc-300">{s.p}</p>
            </section>
          ))}

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
            <h2 className="text-3xl font-bold mb-4">Get a Code-Compliant Delray Beach Quote</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">Every All Phase quote in Delray Beach includes the full HVHZ tear-off scope, peel-and-stick underlayment, and deck re-nail — no surprises later. See the rest of the picture in our <Link to="/boca-raton-roof-replacement-guide" className="text-yellow-400 underline">Palm Beach County roof replacement guide</Link>.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Delray Beach & All of Palm Beach County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
