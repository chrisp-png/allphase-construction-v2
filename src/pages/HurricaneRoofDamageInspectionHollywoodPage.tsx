import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function HurricaneRoofDamageInspectionHollywoodPage() {
  const checks = [
    'Lifted, creased, or missing shingle tabs along ridges, hips, and rake edges.',
    'Granule loss in valleys and at the base of downspouts (a sign of impact and uplift).',
    'Tile slippage, cracked tiles, and broken hip or ridge tile mortar bond.',
    'Bent, dented, or unseated metal panels and seam separation on standing-seam roofs.',
    'Lifted or torn flashing at chimneys, walls, skylights, and AC stands.',
    'Damaged or missing pipe boots and vent collars.',
    'Soft spots, sagging, or visible deck deflection from inside the attic.',
    'Water staining on rafters, decking, or top-floor ceilings (interior leak signs).',
    'Soffit and fascia damage that exposes the attic to wind-driven rain.',
    'Debris impact damage from limbs, signs, or wind-borne tile fragments.',
  ];
  const faqs = [
    { q: 'What should I do first after a hurricane damages my Hollywood roof?', a: 'Document the damage with date-stamped photos from the ground and from inside the attic, get an emergency tarp on any active leak, and call a licensed Hollywood roofing contractor for a full inspection within 48 hours. Do not climb the roof yourself — wet decking and lifted shingles cause serious falls every storm season. All Phase Construction USA dispatches inspectors within 24 hours during a declared storm event.' },
    { q: 'Will my Hollywood homeowners insurance cover hurricane roof damage?', a: 'In most cases yes, if a licensed contractor documents that the damage is storm-related and the roof was less than 25 years old at the time of loss. Florida requires you to file a windstorm or hurricane claim within one year of the date of loss. Most carriers will issue an actual cash value payment up front and a recoverable depreciation payment after the work is completed.' },
    { q: 'How long do I have to file a hurricane roof claim in Florida?', a: 'Florida statute gives homeowners one year from the date of loss to file a hurricane or windstorm claim, and 18 months for a supplemental or reopened claim. The sooner you file, the cleaner the chain of evidence — wait too long and the carrier may argue the damage was pre-existing.' },
    { q: 'How much does an emergency hurricane roof inspection cost in Hollywood?', a: 'All Phase Construction USA provides free post-storm inspections for Hollywood homeowners. We document every damage point with date-stamped photos, prepare an itemized scope of repair, and coordinate directly with your insurance adjuster at no cost.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Hurricane Roof Damage Inspection in Hollywood', item: 'https://allphaseconstructionfl.com/hurricane-roof-damage-inspection-hollywood' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Hurricane Roof Damage Inspection in Hollywood (2026)', description: 'Step-by-step hurricane roof damage inspection guide for Hollywood, FL homeowners — what to check, how to document for insurance, and the 24-hour window that matters.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Hurricane Roof Damage Inspection in Hollywood, FL (2026)"
        description="What to do after a hurricane damages your Hollywood, FL roof — the 10-point inspection checklist, insurance documentation, and the 24-hour window that protects your claim."
        canonicalPath="/hurricane-roof-damage-inspection-hollywood"
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
              <span className="text-white">Hurricane Roof Damage Inspection in Hollywood</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Hurricane Roof Damage Inspection in <span className="text-yellow-400">Hollywood</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              The 10-point post-storm inspection, the insurance documentation that wins claims, and the 24-hour window that decides whether your Hollywood hurricane claim gets paid.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">After a hurricane hits Hollywood, document every damage point with date-stamped photos within 24 hours, get an emergency tarp on any active leak, and call a licensed roofing contractor for a full inspection. Florida law gives you one year from the date of loss to file a hurricane claim, but the cleaner your documentation chain, the faster the carrier pays. All Phase Construction USA dispatches free post-storm inspections within 24 hours for every Hollywood homeowner during a declared storm event.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why the First 24 Hours Matter</h2>
            <p className="text-lg text-zinc-300">Florida insurance carriers scrutinize the gap between the storm date and the first documented inspection. A clean photo timeline with dates inside the first 24 to 48 hours after landfall is the single strongest piece of evidence in a hurricane claim. It locks in the chain of causation, prevents the carrier from arguing pre-existing damage, and gives the adjuster everything they need to write the estimate on the first visit. Hollywood homeowners who wait two or three weeks to call a contractor commonly see their claims reduced or denied for "lack of causal evidence" — even when the damage is obvious.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The 10-Point Hurricane Roof Inspection</h2>
            <p className="text-lg text-zinc-300 mb-4">Every All Phase post-storm inspection covers all ten of the following points and produces a date-stamped photo report you can hand directly to your adjuster:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              {checks.map(c => <li key={c}>{c}</li>)}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What to Document Before You Call</h2>
            <p className="text-lg text-zinc-300">From the ground, photograph all four sides of the home and capture any visible debris, lifted shingles, or missing tiles. From inside, photograph every ceiling stain, every wet spot in the attic, and any daylight visible through the roof deck. Save weather data for the storm — the National Hurricane Center publishes the exact track and wind speeds for every named system, and that data becomes the backbone of your claim. Do not throw away any debris from your roof until the adjuster has seen it.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Working With Your Insurance Adjuster</h2>
            <p className="text-lg text-zinc-300">When the carrier sends an adjuster to your Hollywood home, having a licensed roofing contractor on site changes the math significantly. The contractor walks the roof with the adjuster, points out every damage item, and answers technical questions about HVHZ scope, deck condition, and code-required upgrades. Florida law-and-ordinance coverage typically pays for bringing the entire roof up to current code — peel-and-stick underlayment, NOA-approved fasteners, and re-nail patterns — even if only a portion of the roof is damaged. Most homeowners do not know to ask for that, and the carrier will not volunteer it.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Common Hollywood Hurricane Damage Patterns</h2>
            <p className="text-lg text-zinc-300">Hollywood sits in the heart of the High Velocity Hurricane Zone, with most of the city east of I-95 facing the strongest wind exposure during a major storm. We typically see the heaviest damage on the windward side of the roof — east-facing slopes during a typical Atlantic hurricane track — with lifted shingle tabs along the ridge and rake edges, displaced or cracked tile on Mediterranean homes east of US-1, and metal panel uplift on older mechanical-lock standing seam systems. Beach-block homes on Hollywood Beach often see additional debris impact from wind-borne sand, palm fronds, and tile fragments from neighboring buildings.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Repair vs Replace After a Hollywood Hurricane</h2>
            <p className="text-lg text-zinc-300">If less than 25% of the roof surface is damaged and the deck is sound, a code-compliant repair is usually the right call. If more than 25% is damaged, if the deck shows water intrusion, or if the existing roof is over 18 years old, full replacement is almost always the right path — and Florida law-and-ordinance coverage typically pays for the upgrade.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase After a Hollywood Hurricane</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA is dual-licensed in Florida (CCC1333509 and CGC1535474) and has worked Hollywood hurricane claims through every major storm of the past decade. Our post-storm inspections are free, our photo reports are insurance-grade, and our project managers attend every adjuster meeting at no cost to the homeowner. For the broader picture of how we handle every Broward County roof project, see our <Link to="/broward-county-roof-replacement-guide" className="text-yellow-400 underline">Broward County roof replacement guide</Link> or our <Link to="/florida-roof-insurance-claims-guide" className="text-yellow-400 underline">Florida roof insurance claims guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Free Post-Storm Inspection in Hollywood</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">An All Phase project manager will be on your roof within 24 hours of a declared storm event with a date-stamped photo report ready for your adjuster.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Hollywood & All of Broward County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
