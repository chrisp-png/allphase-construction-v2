import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function HailDamageRoofParklandPage() {
  const signs = [
    'Round, dark "bruises" on shingle surfaces where impact has dislodged the protective granules.',
    'Granule loss in concentrated patches, especially visible at the base of downspouts and in valleys.',
    'Cracked or chipped concrete and clay tile surfaces, often on the windward slope.',
    'Dented or pitted metal panels, vents, gutters, and AC condenser fins.',
    'Splintered wood deck surfaces visible in the attic where hail penetrated.',
    'Damaged or shattered skylights, solar tubes, and plastic vent caps.',
    'Spider-web cracking on shingle granule surfaces (impact fractures).',
    'Broken or missing pipe boots and rubber flashing components.',
  ];
  const faqs = [
    { q: 'Does hail really damage roofs in Parkland?', a: 'Yes. Parkland sits in a part of Broward County that has seen multiple significant hail events over the past decade, often associated with severe thunderstorms moving in from the west. Hail of 1 inch in diameter or larger can damage asphalt shingles, dent metal panels and gutters, and crack concrete or clay tile. Most hail roof damage in Parkland is invisible from the ground and requires a trained inspector to identify.' },
    { q: 'How long do I have to file a hail damage claim in Parkland?', a: 'Florida statute gives homeowners one year from the date of loss to file a windstorm or hail claim, and 18 months for supplemental claims. Hail damage often appears slowly as granules continue to wash off, so it is critical to inspect after every reported severe weather event in your zip code.' },
    { q: 'How can I tell if my Parkland roof has hail damage?', a: 'Most hail damage is invisible from the ground. The reliable test is a contractor inspection from the roof surface looking for round bruises, granule loss patterns, dented vents and gutters, and concentrated impact in valleys. All Phase Construction USA provides free hail damage inspections after any severe weather event in Parkland.' },
    { q: 'Will my Parkland insurance cover hail damage?', a: 'In most cases yes, if the roof is less than 20 to 25 years old and a licensed contractor documents the damage as storm-related. Hail damage claims typically run on the standard wind/hail deductible rather than the separate hurricane deductible, which is usually a much smaller out-of-pocket amount.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Hail Damage Roof Assessment in Parkland', item: 'https://allphaseconstructionfl.com/hail-damage-roof-parkland' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Hail Damage Roof Assessment in Parkland (2026)', description: 'How to spot hail damage on a Parkland, FL roof, document it for insurance, and avoid the most common claim denials. Free inspection details inside.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Hail Damage Roof Assessment in Parkland, FL (2026)"
        description="How to identify hail damage on a Parkland roof, document it for insurance, and file a successful claim. The 8 visible signs and the inspection process explained."
        canonicalPath="/hail-damage-roof-parkland"
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
              <span className="text-white">Hail Damage Roof Assessment in Parkland</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Hail Damage Roof Assessment in <span className="text-yellow-400">Parkland</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              The 8 visible signs of hail damage on a Parkland roof, how to document them for your insurance carrier, and the most common reasons hail claims get denied.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">Hail damage is common in Parkland but almost always invisible from the ground. The reliable test is a roof-surface inspection by a licensed contractor looking for round bruises, granule loss patterns, dented metal vents and gutters, and impact concentration in valleys. Florida gives homeowners one year from the date of loss to file a hail claim, and most claims fall under the standard wind/hail deductible rather than the larger hurricane deductible. All Phase provides free hail inspections after any severe weather event in Parkland.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">8 Signs of Hail Damage</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              {signs.map(s => <li key={s}>{s}</li>)}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Hail Damage Goes Unnoticed</h2>
            <p className="text-lg text-zinc-300">Unlike wind damage, which lifts shingles and creates visible problems within hours, hail damage works on a slower timeline. The initial impact bruises the shingle and dislodges the protective granule layer, but the asphalt mat itself does not fail immediately. Over the following 6 to 18 months, UV exposure attacks the unprotected mat, granules continue to wash off in every rain, and the bruised area eventually develops a crack or a soft spot that begins to leak. By the time the homeowner sees an interior stain, the original hail event may have happened a year or more earlier — and the carrier can argue the damage is from "wear and tear" rather than a covered event. The fix is to inspect after every reported severe weather event, not after the first leak.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How to Document Hail Damage</h2>
            <p className="text-lg text-zinc-300">A successful Parkland hail claim depends on three pieces of evidence: a date for the storm event from the National Weather Service or local weather stations, a date-stamped contractor photo report of the visible damage, and corroborating damage on softer surfaces like AC condenser fins, gutters, and metal vents. The condenser fins matter because they bend under impact pressure that is too low to dent shingles but high enough to bruise them — they often serve as the proof that the storm carried hail at all. All Phase photographs every soft-metal surface on a hail inspection so the file is bulletproof.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Hail Deductible vs Hurricane Deductible</h2>
            <p className="text-lg text-zinc-300">Florida policies carry two separate deductibles. The hurricane deductible (usually 2% to 5% of dwelling coverage) applies only to claims caused by a named storm. The wind/hail deductible (usually a flat $1,000 to $2,500) applies to every other windstorm event, including hail. On a $400,000 dwelling, that is the difference between $8,000 to $20,000 out of pocket on a hurricane claim and $1,000 to $2,500 on a hail-only claim. Knowing which deductible applies before you file is critical.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Common Reasons Hail Claims Get Denied</h2>
            <p className="text-lg text-zinc-300">The three most common denials we see on Parkland hail claims are: lack of a documented storm date in the homeowner's specific zip code, no corroborating damage on soft metal surfaces, and damage that the carrier classifies as "mechanical wear" or "manufacturer defect" rather than impact. All three are usually beatable with a thorough inspection report and a supplemental request, but the homeowner needs a contractor on the file who knows how to document around each one.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for a Parkland Hail Inspection</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA provides free post-storm hail inspections across Parkland, Coral Springs, and the rest of north Broward County. Every inspection produces a date-stamped photo report, a soft-metal corroboration page, and an itemized scope of repair ready for your carrier. For the broader picture of the Florida claim process, see our <Link to="/florida-roof-insurance-claims-guide" className="text-yellow-400 underline">Florida roof insurance claims guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Free Parkland Hail Inspection</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">An All Phase project manager will inspect your roof and provide a date-stamped report ready for your carrier within 24 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Parkland & All of Broward County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
