import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function FourPointInspectionRoofLakeWorthBeachPage() {
  const points = [
    { f: 'Roof', d: 'Age, material, remaining useful life, visible damage, ventilation, flashing condition, and overall expected lifespan. The single most-scrutinized section of the entire form.' },
    { f: 'Electrical', d: 'Panel brand and amperage, wiring type (no aluminum branch wiring or knob-and-tube), grounding, breakers vs fuses, and any visible double-tapping or open splices.' },
    { f: 'Plumbing', d: 'Supply line material (copper, PEX, or polybutylene — polybutylene is an automatic decline), drain material, water heater age and condition, and any visible leaks or corrosion.' },
    { f: 'HVAC', d: 'System age, type, condition, and visible maintenance. Most carriers want air conditioning systems under 15 years old in service.' },
  ];
  const faqs = [
    { q: 'What is a 4-point inspection in Florida and why does my Lake Worth Beach insurer require one?', a: 'A 4-point inspection is a Florida insurance form that documents the condition of the four major home systems: roof, electrical, plumbing, and HVAC. Most Florida carriers require a current 4-point inspection to issue or renew a homeowners policy on any home over 25 to 30 years old. Many older Lake Worth Beach homes east of I-95 fall into that age range, which is why the form is so common in this market.' },
    { q: 'How much does a 4-point inspection cost in Lake Worth Beach?', a: 'A standalone 4-point inspection in Lake Worth Beach runs $75 to $150 from a licensed home inspector. All Phase Construction USA provides the roof portion of the 4-point inspection at no charge to any Lake Worth Beach homeowner who books a free roof inspection — the same dated photo report we produce satisfies most carrier requirements for the roof section of the form.' },
    { q: 'Will my Lake Worth Beach insurance non-renew me over the roof section of the 4-point?', a: 'Yes, this is the single most common reason Florida carriers issue a non-renewal letter. Carriers commonly require the roof to have at least 3 to 5 years of remaining useful life on the form. A failing or undocumented roof is the fastest path to a non-renewal in 2026. The fix is either a documented repair scope or a full replacement, depending on the age and condition of the existing system.' },
    { q: 'Can I get a 4-point inspection passed on a 25-year-old roof?', a: 'Sometimes, if the roof is well-maintained and a licensed contractor documents the remaining useful life with a signed report. However, most carriers will not write or renew on a roof over 20 years old without significant documentation, and many will not write at all over 25 years. If your Lake Worth Beach roof is in that range, the right move is usually to budget for replacement before the next renewal cycle rather than after a denial letter.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: '4-Point Inspection Roof Section in Lake Worth Beach', item: 'https://allphaseconstructionfl.com/four-point-inspection-roof-lake-worth-beach' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: '4-Point Inspection Roof Section in Lake Worth Beach (2026)', description: 'How the Florida 4-point inspection roof section works for Lake Worth Beach homeowners, what carriers require, and how to avoid a non-renewal letter.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="4-Point Inspection Roof Section in Lake Worth Beach (2026)"
        description="How the Florida 4-point inspection roof section works for Lake Worth Beach homeowners, what carriers require, and how to avoid a non-renewal letter."
        canonicalPath="/four-point-inspection-roof-lake-worth-beach"
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
              <span className="text-white">4-Point Inspection Roof Section in Lake Worth Beach</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              4-Point Inspection (Roof Section) in <span className="text-yellow-400">Lake Worth Beach</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              The Florida 4-point inspection that decides whether your Lake Worth Beach home gets renewed — and how the roof section is the make-or-break category for almost every older home in the city.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">A Florida 4-point inspection documents the condition of the four major home systems: roof, electrical, plumbing, and HVAC. Most carriers require it on any Lake Worth Beach home over 25 to 30 years old. The roof section is by far the most common reason carriers non-renew or refuse to write a policy. If your roof is over 20 years old or showing visible damage, the 4-point is going to be the deciding factor on your next renewal.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The 4 Sections of the Form</h2>
            <div className="space-y-4">
              {points.map(p => (
                <div key={p.f} className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
                  <h3 className="text-lg font-semibold text-white mb-1">{p.f}</h3>
                  <p className="text-zinc-300">{p.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why the Roof Section Matters Most</h2>
            <p className="text-lg text-zinc-300">Of the four sections, the roof is the one carriers scrutinize hardest, because it is also the one that triggers the most expensive claims. A failing electrical panel or an old water heater is a $2,000 to $5,000 problem. A failing roof in a hurricane is a $30,000 to $80,000 problem — and that asymmetry is why every Florida carrier writes its underwriting rules around roof age and condition first. On a Lake Worth Beach 4-point, the roof section either passes or it does not, and most non-renewals trace directly back to that single line on the form.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Lake Worth Beach Housing Stock Reality</h2>
            <p className="text-lg text-zinc-300">A large share of Lake Worth Beach housing was built between 1950 and 1985, particularly in the neighborhoods east of I-95 and within walking distance of the downtown core. That means a substantial number of homes in this market are now well past the 25-year threshold that triggers carrier 4-point requirements, and many are on second or third roofs. The pattern we see most often is a homeowner who has owned the home for 15 to 20 years, has done minor maintenance but no major roof work, and gets blindsided by a non-renewal letter the year their roof crosses the 20-year mark. The fix is to get ahead of the renewal cycle with an inspection and a plan.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What "Remaining Useful Life" Actually Means</h2>
            <p className="text-lg text-zinc-300">The 4-point form asks the inspector to document the "remaining useful life" of the roof in years. Most carriers want to see at least 3 to 5 years of remaining life before they will write or renew. A licensed contractor can document remaining useful life based on the visible condition of the surface, the deck, the flashing, the underlayment, and the overall maintenance history. A well-maintained 18-year-old shingle roof can sometimes carry 5+ years of remaining life. A neglected 14-year-old roof might only carry 2. The number on the form drives the carrier decision.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">If the Roof Fails the 4-Point</h2>
            <p className="text-lg text-zinc-300">If the inspection finds the roof does not have enough remaining life to satisfy the carrier, the homeowner has three options: a documented repair scope that addresses the specific issues, a full roof replacement, or a switch to a non-standard carrier (typically Citizens Insurance or a surplus lines carrier) at higher premium. Replacement is usually the most cost-effective long-term play, especially when you factor in the wind mitigation credits available on a brand-new HVHZ-compliant roof system.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for a Lake Worth Beach 4-Point Roof Inspection</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA provides free roof inspections across Lake Worth Beach and the rest of Palm Beach County. Our dated photo reports satisfy the roof section of most carrier 4-point requirements, and our project managers can walk you through the repair-vs-replace decision honestly. For the broader picture of the Florida insurance and inspection process, see our <Link to="/florida-roof-insurance-claims-guide" className="text-yellow-400 underline">Florida roof insurance claims guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Free Lake Worth Beach 4-Point Roof Inspection</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">Get ahead of your renewal cycle. An All Phase project manager will produce a dated report that satisfies the roof section of your 4-point.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Lake Worth Beach & All of Palm Beach County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
