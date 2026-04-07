import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function WindMitigationInspectionPalmBeachGardensPage() {
  const features = [
    { f: 'Roof Covering', d: 'Whether the roof meets current Florida Building Code or the older 1994 SFBC standard. Newer code = bigger discount.' },
    { f: 'Roof Deck Attachment', d: 'Nail size and spacing — 8d ring-shank nails at 6/6 pattern delivers the largest credit.' },
    { f: 'Roof-to-Wall Connection', d: 'Toe-nail, clips, single wraps, or double wraps. Double wraps deliver the strongest credit.' },
    { f: 'Roof Geometry', d: 'Hip roofs receive a much larger discount than gable roofs because they shed wind in every direction.' },
    { f: 'Secondary Water Resistance (SWR)', d: 'Peel-and-stick underlayment across 100% of the deck — a major standalone credit.' },
    { f: 'Opening Protection', d: 'Impact-rated windows, doors, and shutters across all openings. Partial protection earns nothing.' },
    { f: 'Roof Shape (Hip vs Gable)', d: 'Documented separately from geometry on the OIR-B1-1802 form for credit calculation.' },
  ];
  const faqs = [
    { q: 'How much can a wind mitigation inspection save me on Palm Beach Gardens insurance?', a: 'Most Palm Beach Gardens homeowners save $400 to $1,800 per year on their homeowners premium after a clean wind mitigation inspection. Homes with hip roofs, peel-and-stick underlayment, and impact-rated openings often see savings closer to $2,000 or more annually. The inspection costs $75 to $150 and pays for itself in the first month.' },
    { q: 'How long is a wind mitigation report valid in Florida?', a: 'A Florida wind mitigation report (OIR-B1-1802) is valid for five years from the date of inspection. After that, the carrier requires a fresh inspection to continue applying the credits. If a roof replacement happens during that five-year window, the homeowner should order a new inspection immediately to capture the upgraded credits.' },
    { q: 'Who can perform a wind mitigation inspection in Florida?', a: 'Florida law restricts wind mitigation inspections to licensed contractors, professional engineers, registered architects, building code inspectors, and certified home inspectors. All Phase Construction USA performs wind mitigation inspections through our licensed contractor credentials and submits the OIR-B1-1802 form directly to your carrier.' },
    { q: 'Do I need a new wind mitigation report after a roof replacement?', a: 'Absolutely yes. A new roof replacement almost always changes the deck attachment, the underlayment, and the secondary water resistance — all of which are major credit categories on the form. Skipping the post-replacement inspection means leaving 12 to 24 months of insurance discount on the table before the carrier catches up at the next renewal.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Wind Mitigation Inspection in Palm Beach Gardens', item: 'https://allphaseconstructionfl.com/wind-mitigation-inspection-palm-beach-gardens' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Wind Mitigation Inspection in Palm Beach Gardens (2026)', description: 'How a Florida wind mitigation inspection can save Palm Beach Gardens homeowners $400 to $2,000 per year on insurance, what the OIR-B1-1802 form covers, and how the credits work.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Wind Mitigation Inspection in Palm Beach Gardens (2026 Savings Guide)"
        description="How a Florida wind mitigation inspection saves Palm Beach Gardens homeowners $400 to $2,000 per year on insurance — every credit category on the OIR-B1-1802 form explained."
        canonicalPath="/wind-mitigation-inspection-palm-beach-gardens"
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
              <span className="text-white">Wind Mitigation Inspection in Palm Beach Gardens</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Wind Mitigation Inspection in <span className="text-yellow-400">Palm Beach Gardens</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              Every credit category on the Florida OIR-B1-1802 form, the average savings, and why most Palm Beach Gardens homeowners are leaving $1,000+ a year on the table.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">A Florida wind mitigation inspection produces an OIR-B1-1802 form that documents seven roof and structural features your insurance carrier is required by law to apply premium credits for. Most Palm Beach Gardens homeowners save $400 to $1,800 per year after a clean inspection, and homes with hip roofs, peel-and-stick underlayment, and impact-rated openings often save more than $2,000 annually. The inspection runs $75 to $150 and is valid for five years. After a roof replacement, a fresh inspection is essential to capture the new credits.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The 7 Credit Categories on the OIR-B1-1802</h2>
            <div className="space-y-4">
              {features.map(c => (
                <div key={c.f} className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
                  <h3 className="text-lg font-semibold text-white mb-1">{c.f}</h3>
                  <p className="text-zinc-300">{c.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Palm Beach Gardens Homes Often Score Well</h2>
            <p className="text-lg text-zinc-300">Most Palm Beach Gardens homes were built after Florida adopted the post-Andrew building code, and many newer subdivisions use hip roof geometry, modern roof-to-wall straps, and impact-rated openings as standard features. That combination scores high across the OIR-B1-1802 form and unlocks the largest possible credit stack. The challenge is that many homeowners never order the inspection in the first place — or never re-order one after a roof replacement. Either oversight commonly costs $1,000 to $2,000 per year.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The Single Biggest Credit: Secondary Water Resistance</h2>
            <p className="text-lg text-zinc-300">Of all seven credit categories, secondary water resistance (SWR) tends to deliver the most dramatic standalone savings. SWR means peel-and-stick underlayment installed across 100% of the roof deck — not just at valleys and edges, but everywhere. Most modern Florida roof replacements install SWR as a standard part of the scope, but the homeowner has to know to ask for the wind mitigation inspection afterward to actually unlock the credit. All Phase installs SWR on every replacement and provides the post-job wind mitigation inspection as a free add-on.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Hip vs Gable: The Geometry Credit</h2>
            <p className="text-lg text-zinc-300">A hip roof — one where every slope drains to the eaves on all four sides — sheds high winds in every direction and is structurally far more resistant to uplift than a gable roof. The OIR-B1-1802 form awards a substantial standalone credit to hip roofs. Most Palm Beach Gardens homes built after 1995 use hip geometry as standard, but older homes in some neighborhoods east of US-1 still have gables and pay the premium penalty. There is nothing the homeowner can do to change geometry short of a full re-roof reframe, but knowing whether the home qualifies is essential for premium math.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for a Palm Beach Gardens Wind Mitigation Inspection</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA performs wind mitigation inspections across Palm Beach Gardens, Jupiter, and the rest of north Palm Beach County under our Florida contractor license. Every inspection produces the official OIR-B1-1802 form ready to submit to your carrier. After any roof replacement, the wind mitigation inspection comes free with the job. For the broader picture of the Florida claim and inspection process, see our <Link to="/florida-roof-insurance-claims-guide" className="text-yellow-400 underline">Florida roof insurance claims guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Wind Mitigation Inspection in Palm Beach Gardens</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">Most homeowners save $400 to $2,000 per year. The inspection takes one hour and the report goes straight to your carrier.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Palm Beach Gardens & All of Palm Beach County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
