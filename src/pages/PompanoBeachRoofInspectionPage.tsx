import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function PompanoBeachRoofInspectionPage() {
  const signs = [
    { h: '1. Curling, Cupping, or Clawing Shingles', p: "South Florida UV exposure dries out the asphalt in shingles faster than almost anywhere in the country. When the edges curl up or the centers cup, the shingle has lost its ability to shed water and wind can lift it off in a single gust. Curling on more than 10% of the roof is a strong replacement signal." },
    { h: '2. Granules in the Gutters or at the Downspout', p: "The granules embedded in your shingles are the UV shield that protects the asphalt mat. When you see piles of granules in the gutter splash zone — especially after a rainstorm — the shingles are at end of life. Some granule loss is normal in the first year after installation; ongoing loss after year five is not." },
    { h: '3. Bald or Shiny Spots on the Roof Surface', p: "Once the granules are gone, the asphalt mat is exposed to direct sunlight and the shingle will fail rapidly. Bald spots visible from the ground or from a drone photo are an immediate replacement trigger in Pompano Beach because hurricane season turns those spots into tear-off zones overnight." },
    { h: '4. Daylight or Water Stains in the Attic', p: "If you can see daylight coming through the roof deck from inside your attic, the underlayment has failed and the deck is compromised. Brown water stains on the underside of the deck or on the rafters mean water is already getting through. This is one of the clearest replacement signals there is." },
    { h: '5. Sagging Roof Line', p: "A roof that visibly sags between the rafters means the deck is saturated, the structural members are compromised, or both. Sagging is never normal and never fixable with a repair — it requires a full tear-off, a deck inspection, and almost always replacement of the affected plywood and possibly framing." },
    { h: '6. Missing or Lifted Shingles After a Storm', p: "Pompano Beach takes a beating during hurricane and tropical storm season. If you can count missing or lifted shingles after a storm, your roof is no longer functioning as a single weather barrier. Insurance carriers will often pay for a full replacement if storm damage exceeds 25% of the surface or if matching shingles are unavailable." },
    { h: '7. Cracked or Broken Tiles', p: "Concrete and clay tile roofs can last 35 to 75 years, but individual tiles crack from foot traffic, falling debris, and impact damage. A handful of cracked tiles can be replaced one for one. Widespread cracking, broken hip or ridge tiles, or any tile movement under foot indicates the underlayment beneath has failed and the entire roof needs to be re-laid or replaced." },
    { h: '8. Algae Streaks, Moss, or Plant Growth', p: "Black algae streaks are mostly cosmetic, but moss and plant growth hold moisture against the shingle and accelerate failure. If you see green growth on a Pompano Beach roof, the shingles are past their UV-resistant life and the underlying mat is staying wet — both are end-of-life signals." },
    { h: '9. The Roof Is Past Its Lifespan', p: "South Florida sun and salt air shorten roof lifespans by 15 to 25 percent compared to the national average. As a rule of thumb, plan to replace a Pompano Beach shingle roof at 18 years, an architectural shingle roof at 20 to 22 years, a concrete tile roof at 35+ years, and a clay tile or standing-seam metal roof at 45+ years. Insurance carriers are now non-renewing many policies on shingle roofs over 15 to 20 years, which is the most common reason Pompano Beach homeowners replace before visible failure." },
  ];
  const faqs = [
    { q: 'How often should I have my Pompano Beach roof inspected?', a: 'Annually, plus after any major storm or hurricane. South Florida sun, salt air, and tropical weather shorten roof lifespans by 15 to 25 percent compared to the national average, so a yearly inspection catches issues before they become emergency repairs.' },
    { q: 'When should I replace my roof in Pompano Beach?', a: 'Plan a replacement when shingles are curling or missing, when granules are filling the gutters, when daylight shows through the attic deck, or when the roof is past 18 years for shingles or 35+ years for tile.' },
    { q: 'How much does a roof inspection cost in Pompano Beach?', a: 'A roof inspection from All Phase Construction USA is free, with no obligation. We provide drone photos, deck condition notes, and a written assessment of repair vs replacement options within 24 hours.' },
    { q: 'Will my insurance pay for a new roof in Pompano Beach?', a: 'If a licensed contractor documents storm or wind damage and the roof is less than 25 years old, most carriers will issue an actual cash value payment up front and a recoverable depreciation payment after the work is complete.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Pompano Beach Roof Inspection', item: 'https://allphaseconstructionfl.com/pompano-beach-roof-inspection' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Pompano Beach Roof Inspection: 9 Signs You Need a New Roof', description: 'Nine clear signs that a Pompano Beach roof has reached end-of-life and needs replacement, with insurance and timing notes.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-01', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Pompano Beach Roof Inspection: 9 Signs You Need a New Roof (2026)"
        description="The nine clearest signs that your Pompano Beach roof has reached end-of-life — from curling shingles to insurance non-renewal — plus what to do next."
        canonicalPath="/pompano-beach-roof-inspection"
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
              <span className="text-white">Pompano Beach Roof Inspection</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Pompano Beach Roof Inspection: <span className="text-yellow-400">9 Signs You Need a New Roof</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              How to tell from the ground — and from your attic — that a Pompano Beach roof has reached the end of its life and is ready for replacement.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">Pompano Beach homeowners should plan a replacement when shingles are curling or missing, when granules are filling the gutters, when daylight shows through the attic deck, or when the roof is past 18 years for shingles or 35+ years for tile. South Florida sun and salt air shorten lifespans by 15 to 25 percent. Below are the nine clearest signs to watch for.</p>
          </section>

          {signs.map(s => (
            <section key={s.h} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{s.h}</h2>
              <p className="text-lg text-zinc-300">{s.p}</p>
            </section>
          ))}

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What to Do If You See Any of These Signs</h2>
            <p className="text-lg text-zinc-300">Schedule a free roof inspection. All Phase Construction USA will be on your roof within 48 hours, take drone photos, document the condition of every slope, and email you a written assessment within 24 hours. If a repair will buy you reliable years, we will tell you. If replacement is the right call, the same report becomes your insurance documentation. For more on costs and timing, see our <Link to="/broward-county-roof-replacement-guide" className="text-yellow-400 underline">Broward County roof replacement guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Free Pompano Beach Roof Inspection</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">Drone photos, written assessment, and a fixed quote within 24 hours — no obligation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Pompano Beach & All of Broward County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
