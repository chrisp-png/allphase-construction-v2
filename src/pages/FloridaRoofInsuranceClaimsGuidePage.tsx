import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function FloridaRoofInsuranceClaimsGuidePage() {
  const faqs = [
    {
      q: 'Does homeowners insurance cover roof replacement in Florida?',
      a: 'Yes, if the damage was caused by a covered peril such as a hurricane, windstorm, hail, or fallen tree. Normal wear and tear, aging, and lack of maintenance are generally not covered. Your policy type matters: replacement cost value (RCV) policies pay for a new roof of like kind and quality, while actual cash value (ACV) policies deduct depreciation.'
    },
    {
      q: 'What is a hurricane deductible in Florida?',
      a: 'A hurricane deductible is a separate, higher deductible that applies only to hurricane-related claims. It is typically 2\u20135% of your home\u2019s insured value. For a home insured at $400,000, a 2% hurricane deductible would be $8,000 that you pay out of pocket before insurance coverage begins. This is different from your standard deductible.'
    },
    {
      q: 'My insurance company sent a letter saying I need to replace my roof. What should I do?',
      a: 'This is increasingly common in Florida. Insurance companies are conducting aerial inspections and requiring roof replacement for older roofs as a condition of policy renewal. First, get a professional roof inspection from a licensed contractor to assess your roof\u2019s actual condition. Then obtain quotes for replacement. If the roof has storm damage, you may be able to file a claim to cover part or all of the replacement cost.'
    },
    {
      q: 'How do I file a roof insurance claim in Florida?',
      a: 'Step 1: Document the damage with photos and video. Step 2: Make temporary repairs to prevent further damage (save receipts). Step 3: Contact your insurance company to file the claim. Step 4: Schedule a professional roof inspection with a licensed contractor. Step 5: Be present (with your contractor) for the adjuster\u2019s inspection. Step 6: Review the estimate and file supplements if the scope is undervalued.'
    },
    {
      q: 'What is a supplemental insurance claim for roofing?',
      a: 'A supplemental claim is filed when the initial insurance estimate does not cover the full scope of work required. This commonly happens when: hidden damage is discovered during tear-off, the 25% rule triggers full replacement, HVHZ code requirements add cost not in the original estimate, or decking replacement is needed beyond what the adjuster estimated. An experienced contractor can document and file supplements on your behalf.'
    },
    {
      q: 'Can my roofer help with my insurance claim?',
      a: 'Yes, but the level of assistance varies greatly between contractors. Some only provide an estimate. All Phase Construction USA provides comprehensive claims assistance including: initial damage documentation, being present at the adjuster inspection, identifying damage the adjuster may miss, preparing supplemental claims with detailed line-item documentation, and coordinating directly with the insurance company throughout the process.'
    },
    {
      q: 'How long do I have to file a roof insurance claim in Florida?',
      a: 'Florida law requires that you report property damage to your insurer within a reasonable time, generally interpreted as promptly after discovery. For hurricane damage, file as soon as it is safe to do so. Delaying your claim can result in denial, as insurers may argue the damage worsened due to neglect. The statute of limitations for filing a lawsuit against your insurer is currently 2 years from the date of loss in Florida.'
    },
    {
      q: 'What if my insurance company denies my roof claim?',
      a: 'First, request the denial in writing with the specific reason. Common denial reasons include: damage attributed to wear and tear, filing past the deadline, or the insurer claiming pre-existing damage. You can dispute a denial by providing additional documentation (a detailed contractor inspection report can be powerful), requesting re-inspection, or hiring a public adjuster. Florida law protects homeowners\u2019 right to dispute claim decisions.'
    }
  ];
  return (
    <>
      <Helmet>
        <title>Florida Roof Insurance Claims Guide (2025) | How to File, Supplements, & Get Approved</title>
        <meta name="description" content="Complete guide to filing roof insurance claims in Florida. Hurricane deductibles, the claims process, supplemental claims, insurance company letters, and how to maximize your payout." />
        <meta name="keywords" content="florida roof insurance claim, roof insurance claim process, hurricane roof damage claim, insurance company roof replacement letter, supplemental roof claim, florida roof insurance denial, how to file roof claim florida, roof insurance broward county, roof insurance palm beach county" />
        <link rel="canonical" href="https://allphaseconstructionfl.com/florida-roof-insurance-claims-guide" />
        <meta property="og:title" content="Florida Roof Insurance Claims Guide (2025)" />
        <meta property="og:description" content="Step-by-step guide to filing and maximizing your Florida roof insurance claim. Covers hurricane deductibles, supplements, denials, and the 25% rule." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allphaseconstructionfl.com" },
              { "@type": "ListItem", "position": 2, "name": "Florida Roof Insurance Claims Guide", "item": "https://allphaseconstructionfl.com/florida-roof-insurance-claims-guide" }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-sky-900 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-sky-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Florida Roof Insurance Claims Guide</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Florida Roof Insurance Claims Guide <span className="text-sky-400">(2025)</span>
            </h1>
            <p className="text-xl text-slate-300 mb-4 leading-relaxed">
              Navigating a roof insurance claim in Florida can be complex. This guide covers everything from filing your initial claim to supplemental claims, dealing with denials, and understanding how the 25% rule and HVHZ requirements affect your coverage.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Florida Roof Insurance Claim Process: Step by Step</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-sky-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">1</div>
              <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Document the Damage Immediately</h3>
                <p className="text-slate-700">Take photos and video of all visible damage from multiple angles, including wide shots and close-ups. Document the date the damage occurred or was discovered. If you make temporary repairs (tarping, etc.), photograph the damage before and after, and save all receipts. This documentation is the foundation of your claim.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">2</div>
              <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get a Professional Roof Inspection</h3>
                <p className="text-slate-700">Contact a licensed roofing contractor for a thorough inspection. A professional inspection identifies damage that may not be visible from the ground, including cracked tiles, lifted shingles, damaged underlayment, and compromised flashing. All Phase Construction USA provides free inspections with detailed photo reports specifically formatted for insurance claims.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">3</div>
              <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">File Your Claim with Your Insurance Company</h3>
                <p className="text-slate-700">Call your insurance company's claims number (found on your policy or declarations page). Provide basic information: date of loss, type of damage, and your policy number. The insurer will assign a claim number and schedule an adjuster visit. File promptly \u2014 delays can jeopardize your claim.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">4</div>
              <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Attend the Adjuster Inspection</h3>
                <p className="text-slate-700">This is one of the most critical steps. Have your roofing contractor present during the adjuster's inspection. Your contractor can point out damage the adjuster may miss, explain why specific repairs or replacement methods are required by code, and ensure the scope of work is accurately documented. Many claims are underpaid because damage was missed during this initial inspection.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">5</div>
              <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Review the Insurance Estimate</h3>
                <p className="text-slate-700">Once you receive your insurance company's estimate, have your contractor review it carefully. Common shortfalls include: underestimating the number of damaged squares, not accounting for HVHZ code requirements, omitting engineering costs for tile/metal, using non-NOA-approved product pricing, and missing related damage (soffit, fascia, gutters, interior).</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1 flex-shrink-0">6</div>
              <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">File Supplemental Claims When Needed</h3>
                <p className="text-slate-700">If the insurance estimate falls short, your contractor files a supplement with detailed documentation of the additional costs. This is standard practice and not adversarial \u2014 it simply provides the insurer with the information needed to properly fund the repair. Supplements can recover thousands of dollars that the initial estimate missed.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Insurance Company Requiring Roof Replacement?</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <p className="text-lg text-slate-700 mb-6">
              Many Florida homeowners are receiving letters from their insurance company stating that their roof must be replaced as a condition of continued coverage. This trend has accelerated since 2022, with insurers using aerial imagery to assess roof condition remotely.
            </p>
            <h3 className="text-xl font-bold text-slate-900 mb-4">If You Have Received This Letter:</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-1">Do Not Panic</h4>
                <p className="text-slate-600">You typically have 30\u201390 days to respond. Use this time to get a professional inspection and explore your options.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-1">Get a Professional Inspection</h4>
                <p className="text-slate-600">The insurer's aerial assessment may not accurately reflect your roof's condition. A licensed contractor's inspection report can sometimes be used to dispute the requirement or negotiate a timeline extension.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-1">Check for Storm Damage</h4>
                <p className="text-slate-600">If your roof has any storm damage, even minor, you may be able to file a claim that covers part or all of the replacement cost. This is where having a contractor experienced with insurance claims is invaluable.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-1">Understand Your Options</h4>
                <p className="text-slate-600">Options include: replacing the roof to keep your current policy, shopping for a new insurance carrier (some accept older roofs), filing a claim if storm damage exists, or exploring financing options if paying out of pocket.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The 25% Rule and Insurance Claims</h2>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <p className="text-lg text-slate-700 mb-4">
              The Florida 25% rule is particularly important for insurance claims. Under Florida Building Code, if more than 25% of the roof is repaired or replaced within 12 months, the entire roof must be brought to current code.
            </p>
            <h3 className="text-xl font-bold text-slate-900 mb-3">How This Affects Your Claim:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-slate-700"><strong>Partial Damage May Trigger Full Replacement:</strong> If a storm damages more than 25% of your roof area, you are entitled to a full roof replacement to current code under your insurance policy, not just a patch repair.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-slate-700"><strong>Code Upgrade Coverage:</strong> Many Florida policies include code upgrade coverage that pays for the additional cost of bringing the entire roof to current code when the 25% rule is triggered.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-slate-700"><strong>HVHZ Adds Significant Cost:</strong> In Broward County and southern Palm Beach County, current code means full HVHZ compliance. This can add thousands to the claim value through required Miami-Dade NOA products and engineering.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-slate-700"><strong>Documentation Is Key:</strong> Your contractor needs to thoroughly document the percentage of the roof affected. This documentation, combined with the 25% rule, often converts a partial repair claim into a full replacement claim.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions About Roof Insurance Claims</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help With Your Roof Insurance Claim?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            All Phase Construction USA provides full insurance claims assistance at no additional charge. From initial documentation to supplemental claims, we handle the process so you can focus on your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition-colors text-lg">
              Free Claims Consultation
            </Link>
            <a href="tel:+15615564562" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg">
              Call (561) 556-4562
            </a>
          </div>
          <p className="text-sm text-slate-400 mt-4">Licensed & Insured | CCC1333509 | CGC1535474 | Serving Broward & Palm Beach County</p>
        </section>
      </div>
    </>
  );
}
