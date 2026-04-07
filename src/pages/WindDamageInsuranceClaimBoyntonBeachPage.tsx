import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function WindDamageInsuranceClaimBoyntonBeachPage() {
  const steps = [
    { n: 1, h: 'Document Within 24 Hours', p: 'Photograph all four sides of the home, every visible damage point on the roof from the ground, and every interior ceiling stain or attic leak. Date stamps are critical.' },
    { n: 2, h: 'Get an Emergency Tarp', p: 'If there is an active leak, a temporary tarp prevents secondary water damage that the carrier can later argue should be excluded.' },
    { n: 3, h: 'Call a Licensed Contractor', p: 'Have a Florida-licensed roofing contractor inspect the roof and produce a written, date-stamped damage report before you call the carrier.' },
    { n: 4, h: 'File the Claim', p: 'Open the claim with your carrier within the first week. Florida law gives you up to one year, but early filing produces faster payment and stronger evidence.' },
    { n: 5, h: 'Meet the Adjuster With Your Contractor', p: 'Have the licensed contractor on the roof when the adjuster arrives. They walk together, agree on scope, and sign the same notes.' },
    { n: 6, h: 'Review the Estimate Line by Line', p: 'Compare the adjuster estimate against the contractor scope. Missing line items (peel-and-stick, re-nail, ridge cap, flashing) are the most common underpayments.' },
    { n: 7, h: 'Request Law and Ordinance Coverage', p: 'Florida statute requires carriers to pay for code-required upgrades on covered claims. Most homeowners do not know to ask — and the carrier will not volunteer it.' },
    { n: 8, h: 'Sign the Contract and Begin Work', p: 'Once the scope is agreed, sign the contract with the contractor and submit the signed AOB or direction-to-pay to the carrier.' },
    { n: 9, h: 'Submit Recoverable Depreciation', p: 'After the work is complete and inspected, the contractor submits the final invoice and the carrier releases the recoverable depreciation portion.' },
  ];
  const faqs = [
    { q: 'How long do I have to file a wind damage claim in Boynton Beach?', a: 'Florida statute gives homeowners one year from the date of loss to file a hurricane or windstorm claim, and 18 months for supplemental or reopened claims. The sooner you file, the cleaner the chain of evidence.' },
    { q: 'Will my Boynton Beach insurance cover the full cost of a wind-damaged roof?', a: 'In most cases yes, minus your hurricane deductible. Florida law-and-ordinance coverage typically pays for bringing the entire roof up to current HVHZ code — peel-and-stick underlayment, NOA fasteners, and re-nail patterns — even if only a portion is damaged. Most carriers issue an actual cash value payment up front and a recoverable depreciation payment after the work is complete.' },
    { q: 'What is a hurricane deductible in Florida and how much is it?', a: 'Florida homeowners policies carry a separate hurricane deductible, usually 2% to 5% of the dwelling coverage limit, that applies only to claims caused by named storms. On a $400,000 home with a 2% hurricane deductible, that is $8,000 out of pocket before the carrier pays.' },
    { q: 'Should I hire a public adjuster for a Boynton Beach roof claim?', a: 'Public adjusters can help on complex or disputed claims, but most straightforward wind claims are best handled with a licensed roofing contractor walking the roof with the carrier adjuster. All Phase Construction USA handles every adjuster meeting at no cost to the homeowner.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Wind Damage Insurance Claim in Boynton Beach', item: 'https://allphaseconstructionfl.com/wind-damage-insurance-claim-boynton-beach' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Wind Damage Insurance Claim in Boynton Beach (Step-by-Step)', description: 'The 9-step Boynton Beach wind damage roof insurance claim process — filing windows, hurricane deductibles, law-and-ordinance coverage, and how to avoid the most common underpayments.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Wind Damage Insurance Claim in Boynton Beach (Step-by-Step Guide)"
        description="The 9-step Boynton Beach wind damage roof insurance claim process — filing windows, hurricane deductibles, law-and-ordinance coverage, and how to avoid common underpayments."
        canonicalPath="/wind-damage-insurance-claim-boynton-beach"
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
              <span className="text-white">Wind Damage Insurance Claim in Boynton Beach</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Wind Damage Insurance Claim in <span className="text-yellow-400">Boynton Beach</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              The full 9-step process for filing a Boynton Beach roof wind damage claim — from the first photo to the recoverable depreciation check — without leaving money on the table.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">A successful Boynton Beach wind damage roof claim follows nine steps: document within 24 hours, tarp any active leaks, get a licensed contractor inspection, file the claim within the first week, meet the adjuster with your contractor on the roof, review the estimate line by line, request law-and-ordinance coverage, sign the contract and begin work, then submit recoverable depreciation after final inspection. Skipping or compressing any step typically results in an underpayment of $2,000 to $8,000 — money you are entitled to under Florida law.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The 9-Step Boynton Beach Claim Process</h2>
            <div className="space-y-6">
              {steps.map(s => (
                <div key={s.n} className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                  <h3 className="text-xl font-semibold text-white mb-2">Step {s.n}: {s.h}</h3>
                  <p className="text-zinc-300 leading-relaxed">{s.p}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Florida Hurricane Deductible Math</h2>
            <p className="text-lg text-zinc-300">Every Florida homeowners policy carries a separate hurricane deductible that applies only to claims caused by a named storm. The deductible is typically 2% to 5% of the dwelling coverage limit, not a flat dollar amount. On a $400,000 dwelling limit with a 2% hurricane deductible, the homeowner pays the first $8,000 of the loss out of pocket. On a 5% deductible the same home pays $20,000 before the carrier pays anything. Knowing your exact deductible before you file is critical — it determines whether the claim is worth pursuing or whether the repair scope falls below your out-of-pocket threshold.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Law and Ordinance Coverage Explained</h2>
            <p className="text-lg text-zinc-300">Florida law-and-ordinance coverage requires carriers to pay for any building code upgrade triggered by a covered loss, up to the policy limit (usually 25% to 50% of the dwelling coverage). On a Boynton Beach roof claim, this typically means the carrier pays for peel-and-stick secondary water barrier across 100% of the deck, deck re-nail to the current 8d ring-shank pattern, NOA-approved fasteners, and any code-required ventilation upgrades — even if only a portion of the roof was directly damaged by wind. Most homeowners and adjusters either forget to apply this coverage or apply it incorrectly. All Phase walks every Boynton Beach claim through the law-and-ordinance line items as a standard part of our adjuster meetings.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Common Underpayments (and How to Catch Them)</h2>
            <p className="text-lg text-zinc-300">The most common items missing from a first-pass adjuster estimate on a Boynton Beach wind claim are: peel-and-stick underlayment, ridge cap shingles, drip edge replacement, valley metal, pipe boots, satellite dish removal/reinstall, magnetic nail sweep, and the dump fee. Individually each item is small. Together they often add $2,500 to $6,000 of underpayment to the original estimate. A licensed contractor reviewing the line items catches every one of them and submits a supplemental request to the carrier.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">When the Carrier Denies the Claim</h2>
            <p className="text-lg text-zinc-300">If the carrier issues a denial or a partial denial, Florida law gives the homeowner the right to dispute the decision through appraisal, mediation, or — as a last resort — civil suit. Most disputed Boynton Beach roof claims are resolved at the appraisal stage, where each side hires an independent appraiser and the two appraisers agree on a third "umpire" if they cannot reach agreement on their own. All Phase coordinates the appraisal process at no cost when the homeowner is denied or underpaid on a legitimate claim.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for a Boynton Beach Wind Claim</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA has handled hundreds of wind damage claims across Boynton Beach, Delray, and the rest of Palm Beach County. Our project managers attend every adjuster meeting, prepare insurance-grade photo reports, and submit every supplemental needed to capture full law-and-ordinance coverage. For the full picture of the Florida claim process, see our <Link to="/florida-roof-insurance-claims-guide" className="text-yellow-400 underline">Florida roof insurance claims guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Free Boynton Beach Wind Claim Inspection</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">An All Phase project manager will inspect your roof, prepare a date-stamped photo report, and walk it through the carrier with you at no cost.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Boynton Beach & All of Palm Beach County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
