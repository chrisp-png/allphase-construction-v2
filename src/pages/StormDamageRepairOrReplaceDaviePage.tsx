import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function StormDamageRepairOrReplaceDaviePage() {
  const matrix = [
    { f: 'Damaged Surface Area', repair: 'Less than 25% of total roof', replace: 'More than 25% or multiple slopes' },
    { f: 'Roof Age', repair: 'Under 12 years', replace: 'Over 18 years (shingle) / 35 (tile)' },
    { f: 'Deck Condition', repair: 'Sound, no water intrusion', replace: 'Soft spots or water staining in attic' },
    { f: 'Existing Underlayment', repair: 'Intact, peel-and-stick or 30-lb felt', replace: 'Synthetic felt 15+ years old' },
    { f: 'Insurance Carrier Status', repair: 'Active policy, no non-renewal flag', replace: 'Non-renewal threat or roof-age letter' },
    { f: 'Number of Prior Repairs', repair: 'Zero or one', replace: 'Two or more in 5 years' },
    { f: 'HVHZ Code Compliance', repair: 'Pre-2002 roof: full HVHZ scope on damaged area only', replace: 'Pre-2002 roof: full re-nail and underlayment recommended' },
  ];
  const faqs = [
    { q: 'Should I repair or replace my Davie roof after a storm?', a: 'If less than 25% of the roof is damaged, the deck is sound, and the roof is under 12 years old, a code-compliant repair is almost always the right call. If more than 25% is damaged, if the deck shows water intrusion, or if the existing roof is over 18 years old, full replacement is usually the right path — and Florida law-and-ordinance coverage typically pays for the upgrade.' },
    { q: 'Will my Davie insurance pay for a full roof replacement after a partial storm loss?', a: 'In many cases yes, especially if the damaged shingles cannot be matched to the rest of the roof or if Florida statute Section 626.9744 (the matching statute) applies. The matching statute requires carriers to pay for matching adjacent surfaces when a partial repair would leave a visible mismatch — which is almost always the case on a 10-year-old roof. All Phase walks every Davie storm claim through the matching statute.' },
    { q: 'How long does a Davie storm damage repair take?', a: 'Most spot repairs are completed in 1 day once materials are on site. Full replacements run 2 to 4 days for shingle and 5 to 7 days for tile. The bottleneck is usually the insurance approval, not the work itself — typical claim-to-completion runs 3 to 8 weeks.' },
    { q: 'What is the Florida matching statute and how does it help my Davie claim?', a: 'Florida statute 626.9744 requires homeowners insurance carriers to repair or replace adjacent surfaces "with material of like kind and quality" when a covered loss damages part of a continuous surface. On a roof claim, that often means the carrier must pay to replace an entire slope — or even the entire roof — when the damaged shingles cannot be matched to the existing surface. It is one of the strongest pro-homeowner provisions in Florida insurance law.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Storm Damage: Repair or Replace in Davie', item: 'https://allphaseconstructionfl.com/storm-damage-repair-or-replace-davie' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Storm Damage: Repair or Replace in Davie (Decision Matrix)', description: 'Side-by-side decision matrix for Davie, FL homeowners deciding whether to repair or replace a storm-damaged roof. Florida matching statute, law-and-ordinance, and insurance angle explained.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Storm Damage: Repair or Replace in Davie? (2026 Decision Matrix)"
        description="Repair or replace a storm-damaged Davie, FL roof? Decision matrix, Florida matching statute, law-and-ordinance coverage, and the insurance angle that decides the call."
        canonicalPath="/storm-damage-repair-or-replace-davie"
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
              <span className="text-white">Storm Damage: Repair or Replace in Davie</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Storm Damage: Repair or <span className="text-yellow-400">Replace</span> in Davie?
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              The 7-factor decision matrix, the Florida matching statute, and the law-and-ordinance math that decide whether your Davie roof gets repaired or replaced after a storm.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">A code-compliant repair is the right call for a Davie storm claim if less than 25% of the roof is damaged, the deck is sound, the roof is under 12 years old, and the existing shingles can be matched. Replacement is the right call if any one of those conditions fails — especially the matching condition. Florida statute 626.9744 (the matching statute) and Florida law-and-ordinance coverage often combine to require the carrier to pay for a full replacement even when only one slope was damaged. Most homeowners do not know to ask for either provision.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The 7-Factor Decision Matrix</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 overflow-hidden text-zinc-200">
                <thead>
                  <tr className="bg-zinc-900 text-white">
                    <th className="px-6 py-3 text-left">Factor</th>
                    <th className="px-6 py-3 text-left">Repair Indicator</th>
                    <th className="px-6 py-3 text-left">Replace Indicator</th>
                  </tr>
                </thead>
                <tbody>
                  {matrix.map((m, i) => (
                    <tr key={m.f} className={`border-b border-zinc-800 ${i % 2 ? 'bg-zinc-900/50' : ''}`}>
                      <td className="px-6 py-4 font-semibold text-zinc-200">{m.f}</td>
                      <td className="px-6 py-4 text-zinc-200">{m.repair}</td>
                      <td className="px-6 py-4 text-zinc-200">{m.replace}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The Florida Matching Statute (626.9744)</h2>
            <p className="text-lg text-zinc-300">Florida statute 626.9744 requires homeowners insurance carriers to repair or replace adjacent surfaces "with material of like kind and quality" when a covered loss damages part of a continuous surface. On a roof claim, that often means the carrier must pay to replace an entire slope — and frequently the entire roof — when the damaged shingles cannot be matched to the existing surface. Most 10-year-old asphalt shingles cannot be perfectly matched because the manufacturer has either discontinued the color, weathered the surrounding shingles to a different shade, or both. A licensed contractor who knows how to invoke the matching statute can convert a partial repair scope into a full replacement on most Davie claims.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Law-and-Ordinance Coverage</h2>
            <p className="text-lg text-zinc-300">Florida law-and-ordinance coverage requires carriers to pay for any building code upgrade triggered by a covered loss, up to the policy limit. On a Davie roof claim, this typically pays for peel-and-stick secondary water barrier across 100% of the deck, deck re-nail to the current 8d ring-shank pattern, NOA-approved fasteners, and any code-required ventilation upgrades. Combined with the matching statute, law-and-ordinance often turns a $4,000 repair scope into a full $18,000 to $25,000 replacement that the carrier pays in full minus the deductible.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">When Repair Is Genuinely the Right Call</h2>
            <p className="text-lg text-zinc-300">Not every Davie storm claim needs to escalate to a full replacement. If the roof is under 5 years old, the damaged section is small and isolated, the shingles are still in production with the original color code, and the deck shows no water intrusion, a clean spot repair preserves the rest of the roof's life and avoids burning a claim history that could affect future renewability. The right contractor will tell you when repair is actually the right call rather than always pushing toward replacement.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">When Replacement Is the Only Path</h2>
            <p className="text-lg text-zinc-300">Replacement is the only path forward when the deck shows water intrusion (soft spots, sagging, or visible staining in the attic), when more than 25% of the roof surface is damaged, when the existing roof is over 18 years old, when the shingles cannot be matched, when the carrier has already issued a non-renewal letter due to roof age, or when multiple prior repairs in the last 5 years suggest the system has reached end-of-life. In any of these scenarios, attempting a repair only delays the inevitable while leaving the home exposed to the next storm.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for a Davie Storm Claim</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA has handled hundreds of storm damage claims across Davie, Cooper City, and the rest of central Broward County. Every inspection includes a free written scope, a date-stamped photo report, and a matching statute analysis if the damage is partial. For the broader picture of the Florida claim process, see our <Link to="/florida-roof-insurance-claims-guide" className="text-yellow-400 underline">Florida roof insurance claims guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Free Davie Storm Damage Inspection</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">An All Phase project manager will inspect your roof, run the matching statute analysis, and tell you honestly whether you should repair or replace.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Davie & All of Broward County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
