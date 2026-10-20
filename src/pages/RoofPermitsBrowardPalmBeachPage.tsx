import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

/**
 * PR-243: county-level permit explainer (content program, Deliverable 2).
 * HARD RULE: no specific day counts, fee amounts, or jurisdiction-specific
 * requirements on this page — qualitative ranges only, until Chris or Joy
 * confirms figures. See the content-program spec (10/20/2026).
 */
export default function RoofPermitsBrowardPalmBeachPage() {
  const sections = [
    {
      h: 'Who Pulls the Permit — and Why It Should Never Be You',
      p: "The licensed contractor pulls the roofing permit, under the contractor's own license. That is not a courtesy — it is how the accountability is supposed to work. When a contractor's license number is on the permit, the contractor is the party responsible for code compliance, inspections, and corrections. Florida does allow an owner-occupant to pull an owner-builder permit, but signing that disclosure transfers the full legal responsibility for the work onto the homeowner. If a roofer ever asks you to pull your own permit, treat it as a red flag: it usually means the company cannot pull it, either because of licensing or insurance problems. All Phase Construction USA pulls every permit under our own state roofing license (CCC-1331464), and our general contractor license (CGC-1526236) covers structural work like decking and truss repair under the same job."
    },
    {
      h: 'What a Roofing Permit Application Actually Includes',
      p: "A roofing permit is more than a form. A complete submittal in Broward or Palm Beach County generally includes the signed permit application, a copy of the signed contract, proof of the contractor's active license and local registration, a recorded Notice of Commencement once the contract value crosses the statutory threshold, and — the part that takes real work — the product approval package: a Florida Product Approval or Miami-Dade Notice of Acceptance for every component of the roof system, from the underlayment and fasteners to the shingle, tile, or metal panel itself. Tile and metal roofs usually also require engineered uplift calculations. An incomplete package is the single most common reason an application bounces, which is why we build the full package before we submit rather than letting the reviewer find the gaps."
    },
    {
      h: "How Long It Takes — and Why an Honest Answer Is a Range",
      p: "Anyone who promises you an exact permit date is guessing. Broward and Palm Beach counties contain dozens of municipalities, each with its own building department, its own review queue, and its own workload — and the same application can move at very different speeds in two neighboring cities. A clean, complete residential reroof submittal is often issued in a matter of days to a few weeks. Tile and metal roofs can take longer because the engineered attachment details route through structural review. What actually drives the timeline is completeness on day one, how quickly reviewer comments get answered, and the department's seasonal volume. The part a good contractor controls is responding to comments fast — we monitor our permit queues daily so a reviewer's question costs a day, not a review cycle."
    },
    {
      h: 'The Inspection Sequence, From Tear-Off to Final',
      p: "The permit does not end when it is issued — it ends when the final inspection passes. On a typical South Florida reroof the first checkpoint is the dry-in inspection: after tear-off, the inspector verifies the condition of the deck, the re-nailing pattern, and the fully adhered secondary water barrier before any roof covering is allowed to go on. Tile and metal systems usually add an in-progress inspection of the attachment — the screws, foam, or clips that hold the roof on in a windstorm. Last comes the final inspection of the completed system, flashings, and penetrations. Inspections are scheduled with the municipality and ride on the inspector's route, which is one more reason day-level promises are not honest."
    },
    {
      h: 'What Commonly Causes Delays',
      p: "In our experience the usual suspects are, in order: incomplete submittals (most often a missing product approval or an unsigned document), reviewer comment cycles where a question sits unanswered, structural review on tile and metal systems, seasonal volume — departments slow down noticeably when a storm has the whole county reroofing at once — and surprises attached to the property itself, like an old open or expired permit from previous work that has to be resolved before a new permit can issue. Homeowners association approvals run on a separate clock from the building department, and on HOA properties the two together determine the real start date."
    },
    {
      h: 'What You Should Hear From Your Contractor While You Wait',
      p: "Permitting is the one phase of a roofing job where the contractor is waiting on someone else, and it is where communication usually dies. It should not. The standard we hold ourselves to: the application goes in promptly after the contract is signed, and you hear from us every week while the permit is in review — what the status is, what the department is reviewing, and what, if anything, is holding it. If a reviewer asks a question, you hear what it was and how we answered it. Silence during permitting is not a sign that things are fine; it is a sign that nobody is watching the queue."
    },
  ];
  const faqs = [
    { q: 'Do I need a permit to replace my roof in Broward or Palm Beach County?', a: 'Effectively yes. Florida law requires a permit any time more than 25% of a roof is replaced within 12 months, any time the roofing material changes, and any time the structure is altered — which covers essentially every full roof replacement in both counties.' },
    { q: 'Who is supposed to pull the roofing permit?', a: "The licensed contractor, under the contractor's own license. A homeowner can legally pull an owner-builder permit, but doing so shifts responsibility for code compliance onto the homeowner. A contractor who asks you to pull the permit is waving a red flag." },
    { q: 'How long does a roofing permit take in South Florida?', a: 'It varies by municipality and by roof system. A complete residential submittal is often issued within days to a few weeks; tile and metal roofs can take longer because of structural review. Completeness of the application and fast responses to reviewer comments matter more than anything else.' },
    { q: 'What inspections happen during a reroof?', a: 'A dry-in inspection after tear-off (deck, re-nailing, and secondary water barrier), usually an in-progress attachment inspection on tile and metal systems, and a final inspection of the completed roof.' },
    { q: 'What happens if roofing work is done without a permit?', a: 'Unpermitted work can bring a stop-work order and fines, can require tearing off finished work for inspection, can surface as a problem at resale, and can jeopardize homeowners insurance coverage on the property.' },
    { q: 'Will I be kept informed while the permit is in review?', a: 'You should be — by whoever you hire. At All Phase, you hear from us every week during the permit phase with the current status and what, if anything, is holding it.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Roof Permits in Broward and Palm Beach County', item: 'https://allphaseconstructionfl.com/roof-permits-broward-palm-beach-county' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Roof Permits in Broward and Palm Beach County — What Actually Happens and How Long It Takes', description: 'Who pulls a roofing permit, what the application includes, realistic timelines, the inspection sequence, and what causes delays.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-10-20' };

  return (
    <>
      <SEO
        title="Roof Permits in Broward & Palm Beach County: How It Works"
        description="Who pulls your roofing permit, what's in the application, realistic timelines, the inspection sequence & common delays in Broward & Palm Beach County."
        canonicalPath="/roof-permits-broward-palm-beach-county"
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
              <span className="text-white">Roof Permits in Broward &amp; Palm Beach County</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Roof Permits in Broward and Palm Beach County — <span className="text-yellow-400">What Actually Happens and How Long It Takes</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              Permitting is the slowest, least predictable phase of a roofing job — and the one almost nobody explains honestly. Here is how it really works, from a contractor who has pulled roofing permits across both counties since 2006.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The Short Answer</h2>
            <p className="text-lg text-zinc-300">Essentially every roof replacement in Broward or Palm Beach County requires a permit, your contractor — not you — should pull it, and the honest timeline is a range that depends on the municipality, the roof system, and how complete the application is on day one. The application is reviewed by the city or county building department, the job is inspected at least twice (dry-in and final), and the permit closes when the final inspection passes. While it is in review, your contractor should be telling you what is happening every week.</p>
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

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Go Deeper</h2>
            <p className="text-lg text-zinc-300">
              City-specific detail: our <Link to="/coral-springs-roof-permit-guide" className="text-yellow-400 underline">Coral Springs roof permit guide</Link>. The full project picture: the <Link to="/broward-county-roof-replacement-guide" className="text-yellow-400 underline">Broward County</Link> and <Link to="/palm-beach-county-roof-replacement-guide" className="text-yellow-400 underline">Palm Beach County</Link> roof replacement guides, and our step-by-step <Link to="/roof-replacement-process" className="text-yellow-400 underline">roof replacement process</Link>.
            </p>
          </section>

          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">We Pull the Permit. You Get the Updates.</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">Every All Phase permit is pulled under our own licenses and tracked daily. A live person answers every call, and we guarantee scheduling within 24 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Inspection</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Broward &amp; Palm Beach Counties from Deerfield Beach | Licensed &amp; Insured | CCC-1331464 | CGC-1526236</p>
          </section>
        </div>
      </div>
    </>
  );
}
