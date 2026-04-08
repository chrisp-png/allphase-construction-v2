import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function AnnualRoofInspectionSunrisePage() {
  const checklist = [
    'Shingle, tile, or panel surface condition — granule loss, cracking, slippage, uplift.',
    'Ridge, hip, and rake edges — the first place wind damage shows up.',
    'Flashing at chimneys, walls, skylights, and pipe boots — the #1 source of leaks.',
    'Valleys and drip edge — debris buildup, rust, displaced metal.',
    'Soffit, fascia, and ventilation — blocked vents and rotted wood.',
    'Gutters and downspouts — sag, separation, granule deposits.',
    'Attic interior — water staining, soft decking, daylight, mold.',
    'Caulking and sealants at all penetrations — UV failure cycle.',
    'Satellite dish, solar, and AC stand mounting points — flashing integrity.',
    'Overall photographic condition report dated for insurance file.',
  ];
  const faqs = [
    { q: 'How often should I get my Sunrise roof inspected?', a: 'Once a year minimum, plus an additional inspection after any named storm or severe weather event. South Florida UV, salt air, and afternoon thunderstorms age roofs faster than almost anywhere in the country, and early detection of minor issues prevents the small problems from becoming structural ones.' },
    { q: 'How much does an annual roof inspection cost in Sunrise?', a: 'All Phase Construction USA provides free annual roof inspections for Sunrise homeowners as part of our standing relationship with the community. Every inspection includes a date-stamped photo report and a written punch-list of any issues found.' },
    { q: 'What does a real annual roof inspection include?', a: 'A real inspection covers ten points: surface condition, ridge and edge integrity, flashing at all penetrations, valleys and drip edge, soffit and ventilation, gutters, attic interior, sealants, equipment mounting, and a dated photo report. Any inspection that does not include time on the roof and time in the attic is incomplete.' },
    { q: 'Can an annual inspection actually save me money?', a: 'Yes. Catching a failed pipe boot at the inspection stage runs $150 to $300. Missing it and discovering the leak six months later after the ceiling has failed runs $2,500 to $6,000 in interior repairs plus the original boot. Annual inspections also keep your insurance file clean and your renewal premium predictable.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Annual Roof Inspection in Sunrise', item: 'https://allphaseconstructionfl.com/annual-roof-inspection-sunrise' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Annual Roof Inspection in Sunrise (10-Point Checklist)', description: '10-point annual roof inspection checklist for Sunrise, FL homeowners. What real inspections cover, what they cost, and why they save money.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Annual Roof Inspection in Sunrise, FL (10-Point Checklist)"
        description="10-point annual roof inspection checklist for Sunrise, FL homeowners. What real inspections cover, what they cost, and how they save thousands in interior damage."
        canonicalPath="/annual-roof-inspection-sunrise"
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
              <span className="text-white">Annual Roof Inspection in Sunrise</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Annual Roof Inspection in <span className="text-yellow-400">Sunrise</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              The 10-point annual inspection that catches small issues before they turn into $6,000 ceiling repairs — and why every Sunrise homeowner should schedule one before storm season.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">Every Sunrise roof should be inspected once a year minimum, ideally in April or May before hurricane season starts on June 1. A real inspection takes 45 to 90 minutes, includes time on the roof and in the attic, covers ten distinct check points, and produces a date-stamped photo report. All Phase Construction USA provides free annual inspections for Sunrise homeowners — the goal is to catch the small issues before they become the structural ones.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The 10-Point Annual Inspection Checklist</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              {checklist.map(c => <li key={c}>{c}</li>)}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why April or May Is the Right Month</h2>
            <p className="text-lg text-zinc-300">Sunrise sits in the heart of Broward County, which means hurricane season starts on June 1 every year. Scheduling the annual inspection in April or May gives the homeowner time to address any issues — replace a failed pipe boot, re-seal a flashing detail, clear a blocked valley — before the first named system of the season. It also creates a clean dated baseline for the insurance file. If a hurricane damages the roof in August, the April photo report becomes the strongest possible evidence that the damage was storm-related and not pre-existing.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Most Roof Failures Start Small</h2>
            <p className="text-lg text-zinc-300">The vast majority of South Florida roof failures we see do not start as catastrophic events. They start as a single failed pipe boot, a torn rubber collar around an AC condenser stand, a dislodged ridge cap, or a hairline crack in a valley sealant. The leak runs into the attic for weeks or months before it shows up as a ceiling stain — and by then the insulation is soaked, the drywall is failing, and the original $200 fix has turned into a $5,000 interior repair plus the original roof work. The point of the annual inspection is to catch the leak in week one, not week thirty.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Makes a Real Inspection Different</h2>
            <p className="text-lg text-zinc-300">There are two kinds of roof inspections in South Florida. The "drive-by" inspection is what most free contractors actually deliver — a five-minute look from the driveway, a sales pitch for a new roof, and no photo report. The real inspection includes time on the roof surface, time in the attic, photographs of every penetration and edge, and a written report you can hand to your insurance agent. All Phase only does the second kind. Every Sunrise inspection produces a photo report dated for the file, and we do not push a replacement scope when a $200 repair is the right call.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Insurance Renewal and the Inspection Report</h2>
            <p className="text-lg text-zinc-300">Florida homeowners insurance carriers have spent the last several years aggressively non-renewing policies on roofs they consider to be aging or unmaintained. A current annual inspection report — especially one with photos showing the roof in good condition — is one of the strongest tools a Sunrise homeowner has to defend against a non-renewal letter. We have helped multiple Sunrise homeowners reverse a non-renewal flag by submitting a fresh All Phase inspection report through their agent.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for a Sunrise Inspection</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA has been inspecting Sunrise roofs for years. Every inspection is free, includes time on the roof and in the attic, and produces a dated photo report formatted for your insurance file. For the broader picture of how we work, see our <Link to="/florida-roof-insurance-claims-guide" className="text-yellow-400 underline">Florida roof insurance claims guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Free Annual Roof Inspection in Sunrise</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">Schedule before hurricane season. An All Phase project manager will produce a full 10-point report with date-stamped photos.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Sunrise & All of Broward County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
