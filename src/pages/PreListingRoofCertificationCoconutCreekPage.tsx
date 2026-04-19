import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function PreListingRoofCertificationCoconutCreekPage() {
  const items = [
    'Documented remaining useful life signed by a licensed contractor.',
    'Date-stamped photo report of every roof slope and penetration.',
    'Confirmation of HVHZ code compliance (post-2002 systems) or notation of pre-code status.',
    'Wind mitigation OIR-B1-1802 form for the buyer to use on their new policy.',
    'Notation of any open permits, prior insurance claims, or unresolved repairs.',
    'Disclosure-ready summary the listing agent can hand to every buyer.',
  ];
  const faqs = [
    { q: 'What is a pre-listing roof certification and why does my Coconut Creek listing need one?', a: 'A pre-listing roof certification is a written document from a licensed roofing contractor that states the current condition of the roof and the estimated remaining useful life. In the 2026 Florida market, buyer-side insurance underwriting has become so strict that many Coconut Creek deals fall apart at the inspection stage over roof age. A pre-listing certification gets ahead of that problem by giving every buyer (and every buyer\'s insurance carrier) a clean answer before the offer.' },
    { q: 'How much does a pre-listing roof certification cost in Coconut Creek?', a: 'All Phase Construction USA provides pre-listing roof certifications for Coconut Creek listings at no charge. The certification includes a full inspection, dated photo report, written remaining-useful-life statement, and wind mitigation form. Our cost is recovered if the listing converts to repair or replacement work — and the listing agent gets the deliverable they need either way.' },
    { q: 'Will a pre-listing roof certification actually help my Coconut Creek home sell?', a: 'In the 2026 Florida market, yes — substantially. Buyers and their carriers are walking away from Florida deals over roof concerns at unprecedented rates. A clean pre-listing certification removes the single biggest source of last-minute deal failure and lets the listing agent answer the "what about the roof?" question on the first showing instead of in the inspection period.' },
    { q: 'What if my Coconut Creek roof fails the pre-listing certification?', a: 'If the inspection reveals that the roof has only 1 to 3 years of remaining life, the seller has three options: replace before listing (and price the home accordingly), offer a closing credit toward a buyer-side replacement, or list the home as-is at a discounted price. All three options work in the right market, and All Phase walks every Coconut Creek seller through the math before the listing goes live.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Pre-Listing Roof Certification in Coconut Creek', item: 'https://allphaseconstructionfl.com/pre-listing-roof-certification-coconut-creek' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Pre-Listing Roof Certification in Coconut Creek (2026)', description: 'Why Coconut Creek listings need a pre-listing roof certification before going to market in 2026, what the certification includes, and how it prevents last-minute deal failure.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-07', dateModified: '2026-04-07' };

  return (
    <>
      <SEO
        title="Pre-Listing Roof Certification in Coconut Creek (2026)"
        description="Why Coconut Creek listings need a pre-listing roof certification before going to market in 2026, what it includes, and how it prevents deals from"
        canonicalPath="/pre-listing-roof-certification-coconut-creek"
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
              <span className="text-white">Pre-Listing Roof Certification in Coconut Creek</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Pre-Listing Roof Certification in <span className="text-yellow-400">Coconut Creek</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              Why every Coconut Creek listing in 2026 should ship with a contractor-signed roof certification — and how it prevents the deal from falling apart in the inspection period.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">A pre-listing roof certification is a contractor-signed document that establishes the current condition and remaining useful life of the roof on a Coconut Creek listing. In the 2026 Florida market, buyer-side insurance underwriting is so strict that roof condition is the #1 reason deals fail at inspection. A clean pre-listing certification gets ahead of that problem and lets the listing agent answer the "what about the roof?" question before the first showing. All Phase provides pre-listing certifications free for Coconut Creek listings.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What the Certification Includes</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              {items.map(i => <li key={i}>{i}</li>)}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why 2026 Is Different From 2020</h2>
            <p className="text-lg text-zinc-300">The Florida insurance market has tightened dramatically over the past few years. Carriers that used to write any roof under 25 years are now refusing to write any roof over 15 to 18, and the few who will write older roofs charge premiums that often kill deals on their own. The result is that a Coconut Creek listing with an aging roof — even one in good condition — can sit on the market for months while one offer after another falls through over insurance. The pre-listing certification fixes that by putting a licensed contractor\'s signed opinion in front of the buyer\'s carrier before the offer is even written.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Who Should Get a Certification</h2>
            <p className="text-lg text-zinc-300">Any Coconut Creek listing with a roof over 10 years old should have a pre-listing certification. Listings over 15 years old absolutely require one — there is no realistic path to closing without it in the current market. Even newer roofs benefit from the certification because it gives the buyer\'s carrier a clean wind mitigation form right out of the gate, which often reduces the buyer\'s out-of-pocket insurance cost and makes the offer more competitive against other listings.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How Listing Agents Use the Certification</h2>
            <p className="text-lg text-zinc-300">The smart Coconut Creek listing agents we work with hand the certification to every buyer at the first showing, attach it to the MLS listing as a public document, and reference it in the listing description. The result is faster offers, fewer inspection-period surprises, and significantly higher closing rates. Several agents we work with regularly close listings 30 to 60 days faster than the market average specifically because they front-load the roof question.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">If the Certification Reveals Problems</h2>
            <p className="text-lg text-zinc-300">When the inspection reveals that the roof has only a year or two of remaining life, the seller has three options: replace before listing (recover the cost in the asking price plus a premium), offer a closing credit, or list as-is at a discount. The right answer depends on the asking price, the local comp set, and how fast the seller needs to close. All Phase walks every Coconut Creek seller through the math before the listing goes live and provides the pre-listing replacement scope at the same fixed pricing we offer to homeowner clients.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for a Coconut Creek Pre-Listing Certification</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA partners with listing agents across Coconut Creek, Margate, and the rest of north Broward County to deliver pre-listing roof certifications inside 48 hours. Every certification includes the dated photo report, the wind mitigation form, and a written remaining-useful-life statement. For the broader picture of how we work, see our <Link to="/florida-roof-insurance-claims-guide" className="text-yellow-400 underline">Florida roof insurance claims guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Free Coconut Creek Pre-Listing Certification</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">List with confidence. An All Phase project manager will deliver the full certification package in 48 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Schedule Free Certification</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Coconut Creek & All of Broward County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
