import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

/**
 * PR-268: dedicated senior discount page (Chris, 11/23/26).
 * Offer terms confirmed by Chris: age 65+, $750 off projects of $25,000 or
 * more (measured BEFORE the discount), combinable with financing AND My Safe
 * Florida Home, age confirmed from the photo ID already required at signing
 * for the notarized permit application. No Offer/price schema on purpose.
 */
export default function SeniorRoofDiscountPage() {
  const steps = [
    { h: '1. Request a free roof assessment', p: 'Call or request an assessment online and mention the senior discount. We inspect the roof from above and from the attic and tell you honestly whether it needs a repair or a replacement.' },
    { h: '2. See the discount on your proposal', p: 'If your project is $25,000 or more, the $750 senior discount appears as its own line on your written proposal, so you can see exactly what it takes off.' },
    { h: '3. Show your photo ID at signing', p: 'Every roofing permit application needs a notarized signature, so we already ask for a photo ID when you sign. That same ID confirms you are 65 or older. There is nothing else to fill out.' },
  ];
  const faqs = [
    { q: 'Who qualifies for the All Phase senior discount?', a: 'Homeowners age 65 and older, on any roofing project of $25,000 or more in Broward or Palm Beach County.' },
    { q: 'How much is the senior discount?', a: '$750 off. The $25,000 minimum is measured before the discount, so a $25,000 project qualifies.' },
    { q: 'Do I need a coupon or a promo code?', a: 'No. The discount is applied automatically for homeowners 65 and older. Mentioning it when you call helps us make sure it shows on your proposal.' },
    { q: 'How do you confirm my age?', a: 'From the photo ID you already show us at signing. Every permit application needs a notarized signature, so we ask for ID from every customer anyway.' },
    { q: 'Can I combine the senior discount with financing?', a: 'Yes. The senior discount works together with our financing options for qualified homeowners.' },
    { q: 'Can I use it on a My Safe Florida Home project?', a: 'Yes. The senior discount can be combined with a My Safe Florida Home project.' },
    { q: 'Does the discount expire?', a: 'It does not expire at the end of the month, and there is no deadline to sign. We will never pressure you to decide on the spot.' },
    { q: 'Is there a free roof replacement program for seniors?', a: 'We are not aware of any program that gives every senior a free roof. Some programs offer grants or low-interest loans to homeowners who meet age and income rules. Check any "free roof" ad against an official .gov source before you share personal information.' },
  ];
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Senior Roof Discount', item: 'https://allphaseconstructionfl.com/senior-roof-discount' },
  ]};

  return (
    <>
      <SEO
        title="Senior Roof Discount: $750 Off for Homeowners 65+ | All Phase"
        description="Homeowners 65 and older get $750 off roof projects of $25,000 or more in Broward & Palm Beach. Applied automatically, works with financing and MSFH."
        canonicalPath="/senior-roof-discount"
      />
      <InlineSchema schemas={[faqSchema, breadcrumbSchema]} />

      <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-yellow-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Senior Roof Discount</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Senior Roof Discount: <span className="text-yellow-400">$750 Off for Homeowners 65 and Older</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              We can't give anyone a free roof, and we won't pretend to. What we can do is help our older neighbors in a way that's clear and real: homeowners 65 and older automatically receive $750 off any roofing project of $25,000 or more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/roof-inspection" className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg">Request a Free Roof Assessment</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The Discount at a Glance</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-lg text-zinc-300">
              <li className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"><strong className="text-white">Who:</strong> homeowners age 65 and older in Broward and Palm Beach County</li>
              <li className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"><strong className="text-white">How much:</strong> $750 off any project of $25,000 or more, measured before the discount</li>
              <li className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"><strong className="text-white">How to get it:</strong> applied automatically. No coupon, no promo code</li>
              <li className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"><strong className="text-white">Works with:</strong> our <Link to="/easy-payments" className="text-yellow-400 underline">financing options</Link> and <Link to="/blog/my-safe-florida-home-roof-grant-guide" className="text-yellow-400 underline">My Safe Florida Home</Link> projects</li>
              <li className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"><strong className="text-white">Proof of age:</strong> the photo ID you already show us at signing for the notarized permit application</li>
              <li className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"><strong className="text-white">Deadline:</strong> none. It doesn't expire at the end of the month, and there's no pressure to sign</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
            <div className="space-y-6">
              {steps.map(s => (
                <div key={s.h} className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                  <h3 className="text-xl font-semibold text-white mb-2">{s.h}</h3>
                  <p className="text-zinc-300 leading-relaxed">{s.p}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Start With an Honest Answer</h2>
            <p className="text-lg text-zinc-300 mb-4">Not every older roof needs replacing yet. Sometimes a targeted repair keeps a roof watertight while you plan and save, and we will tell you when that's the smarter move. When the roof really is done, the discount, financing and the My Safe Florida Home program can make a replacement more manageable.</p>
            <p className="text-lg text-zinc-300">For every option we know of, including city and county repair programs and federal help for seniors, read our guide: <Link to="/blog/i-need-a-new-roof-but-cant-afford-it" className="text-yellow-400 underline">I Need a New Roof but Can't Afford It</Link>.</p>
          </section>

          <section className="mb-16 bg-zinc-900 border-l-4 border-yellow-400 rounded-r-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">Watch Out for "Free Senior Roof" Ads</h2>
            <p className="text-zinc-300 mb-3">A real government program has published rules, an official application, and a named agency that runs it. If an ad promises a free roof to anyone over a certain age, asks for personal information before telling you who runs the program, or pushes you to sign quickly, stop and check it on an official .gov website first.</p>
            <p className="text-zinc-300">Never sign a contract or hand over documents to "lock in" a grant. If you aren't sure whether something is real, call us. We'll tell you what we know, even if it doesn't lead to a job for us.</p>
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
            <h2 className="text-3xl font-bold mb-4">Find Out What Your Roof Really Needs</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">Free, no-obligation assessments across Broward and Palm Beach County since 2006. A live person answers every call, and we guarantee scheduling within 24 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/roof-inspection" className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg">Request a Free Roof Assessment</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">All Phase Construction USA · 590 Goolsby Blvd, Deerfield Beach · GAF Certified Contractor · Licensed Roofing Contractor CCC-1331464 | CGC-1526236</p>
          </section>
        </div>
      </div>
    </>
  );
}
