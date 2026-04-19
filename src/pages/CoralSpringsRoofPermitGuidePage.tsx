import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function CoralSpringsRoofPermitGuidePage() {
  const sections = [
    {
      h: 'When Is a Roofing Permit Required in Coral Springs?',
      p: "Florida statute requires a permit any time more than 25% of a roof is replaced within a 12-month period, any time the roofing material is changed (for example shingle to metal), and any time the roof structure is altered. Coral Springs follows the Florida Building Code 7th Edition and the Broward County HVHZ amendments, so even modest reroofs almost always require a permit pulled through the Coral Springs Building Division. The only exception is small spot repairs under 25% of the roof surface that do not penetrate the deck or change the material — and even those should be documented in case of a future insurance claim."
    },
    {
      h: 'What the Coral Springs Building Division Requires in the Submittal',
      p: "Coral Springs has one of the more complete intake checklists in Broward County. Your contractor must submit a signed permit application, a copy of the contract showing the property owner's signature, the contractor's active state license and Broward County Certificate of Competency, a Notice of Commencement for any project over $2,500, the manufacturer's Florida Product Approval (FPA) or Miami-Dade NOA for every component (underlayment, shingle/tile/metal panel, fasteners, drip edge, ridge vent), an engineered uplift calculation for tile and metal roofs, and a completed Owner-Builder disclosure if the homeowner is pulling the permit themselves. Missing any one of these items will bounce the application back the same day."
    },
    {
      h: 'How Long Does a Coral Springs Roofing Permit Take?',
      p: "Most residential roofing permits in Coral Springs are issued in 5 to 10 business days when the submittal is complete. Tile and metal roofs that require engineered uplift calculations sometimes take an additional 3 to 5 days because they route through structural review. The City uses an online ePlan system, and All Phase Construction USA monitors the queue daily so any reviewer comments are answered within 24 hours instead of slipping into the next review cycle."
    },
    {
      h: 'Coral Springs Roofing Permit Fees in 2026',
      p: "Coral Springs calculates permit fees based on the contract valuation. Expect $150 to $500 in city permit fees for a standard residential reroof, plus a small Florida state surcharge (about 3.5%) and a Broward County code-enforcement fee. Tile and metal roofs land at the higher end because the structural review carries an additional engineering fee. All Phase rolls every fee into the fixed quote you receive up front — there are no permit add-on charges later in the project."
    },
    {
      h: 'Required Inspections from Tear-Off to Final',
      p: "Coral Springs requires at minimum two inspections on a residential reroof. The first is an in-progress dry-in inspection performed after the existing roof has been torn off, the deck has been re-nailed to current HVHZ code, and the peel-and-stick secondary water barrier is fully installed. The inspector verifies the nail pattern, deck condition, and underlayment laps before any primary roofing material is allowed to go on top. The second is a final inspection after the entire roof system is installed and all flashings, ridge vents, and penetrations are sealed. Some tile and metal roofs also trigger a mid-install inspection of the engineered attachment system."
    },
    {
      h: 'HVHZ Code Requirements That Apply to Every Coral Springs Reroof',
      p: "Because Coral Springs sits inside Broward County's High Velocity Hurricane Zone, every roof must meet the strictest wind-uplift standards in the country. The big-ticket HVHZ requirements that show up on every Coral Springs permit are 8d ring-shank deck re-nailing on a 6/6 pattern, peel-and-stick secondary water barrier across 100% of the deck, NOA-approved fastening for the primary material (tile must be screw-attached or foam-set, metal must use approved clip systems), engineered ridge and hip attachment, and corrosion-resistant flashings at every penetration. There are no shortcuts — and a competent contractor will not try to take any."
    },
    {
      h: 'What Happens If You Skip the Permit',
      p: "Working without a Coral Springs roofing permit is a code violation that can result in a stop-work order, daily fines, and a requirement to tear off the unpermitted work for inspection. Worse, it can void your homeowners insurance: most carriers will deny any future claim — including unrelated water damage — if they discover an unpermitted roof on the property. It also creates a major problem at resale, because the unpermitted work shows up on the city's open-permit list and kills closings."
    },
    {
      h: 'How All Phase Construction USA Handles the Permit for You',
      p: "All Phase Construction USA pulls every Coral Springs roofing permit under our state license (CCC1333509) and Broward County Certificate of Competency. We submit the entire ePlan package the same day your contract is signed, monitor the queue daily, schedule both inspections directly with the city, and email you the final close-out package — permit, inspection sign-offs, NOAs, and warranty certificates — the day the final inspection passes. You never have to call the city or chase down a single document."
    },
  ];
  const faqs = [
    { q: 'Do I need a permit to replace my roof in Coral Springs?', a: 'Yes. Florida law requires a permit any time more than 25% of a roof is replaced, the material changes, or the structure is altered. Coral Springs follows the Florida Building Code with Broward County HVHZ amendments, so essentially every full roof replacement requires a permit through the Coral Springs Building Division.' },
    { q: 'How long does a Coral Springs roofing permit take to issue?', a: 'Most residential roofing permits in Coral Springs are issued in 5 to 10 business days when the submittal is complete. Tile and metal roofs may add 3 to 5 days for structural review.' },
    { q: 'How much are roofing permit fees in Coral Springs?', a: 'Expect $150 to $500 in city permit fees for a standard residential reroof, plus a small Florida state surcharge and Broward County code fee. Tile and metal roofs land at the higher end because of engineering review.' },
    { q: 'Can a homeowner pull their own roofing permit in Coral Springs?', a: "Yes, an owner-occupant can pull an Owner-Builder permit, but they must sign a disclosure acknowledging full liability for code compliance, workers compensation, and warranty enforcement. Most homeowners let a licensed contractor pull the permit so the contractor's license is on the line, not theirs." },
    { q: 'What inspections are required during a Coral Springs reroof?', a: 'At minimum two: an in-progress dry-in inspection after tear-off and underlayment, and a final inspection after the entire roof system is installed. Some tile and metal roofs also trigger a mid-install inspection of the engineered attachment system.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Coral Springs Roof Permit Guide', item: 'https://allphaseconstructionfl.com/coral-springs-roof-permit-guide' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Coral Springs Roof Permit Guide (2026)', description: 'Everything Coral Springs homeowners need to know about roofing permits — when required, fees, timelines, inspections, and HVHZ code.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-01', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Coral Springs Roof Permit Guide (2026)"
        description="When you need a roofing permit in Coral Springs, what the city requires, how long it takes, fees, required inspections, and HVHZ code requirements."
        canonicalPath="/coral-springs-roof-permit-guide"
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
              <span className="text-white">Coral Springs Roof Permit Guide</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Coral Springs Roof Permit Guide <span className="text-yellow-400">(2026)</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              When a permit is required, what the city wants in the submittal, how long approval takes, fees, inspections, and the HVHZ rules every reroof must follow.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">Yes — Florida law requires a permit any time more than 25% of a roof is replaced, the material changes, or the structure is altered. In Coral Springs, the City Building Division typically issues residential roofing permits in 5 to 10 business days, with fees ranging $150 to $500. All Phase Construction USA handles the entire permit, HVHZ inspection, and final close-out for you.</p>
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
            <h2 className="text-3xl font-bold mb-4">Let Us Pull the Permit for You</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">All Phase Construction USA pulls every Coral Springs permit under our state license and handles every inspection. For the full picture, see our <Link to="/broward-county-roof-replacement-guide" className="text-yellow-400 underline">Broward County roof replacement guide</Link>.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Coral Springs & All of Broward County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
