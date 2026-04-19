import SEO from '../components/SEO';
import InlineSchema from '../components/InlineSchema';
import { Link } from 'react-router-dom';

export default function EmergencyRoofTarpLighthousePointPage() {
  const whenToCall = [
    'Active interior leak during or immediately after a storm — water coming through a ceiling or running down a wall.',
    'Visibly missing shingles, tiles, or panels that expose the underlayment or deck to rain.',
    'A tree limb strike that has punctured the roof or left a visible hole.',
    'Wind-lifted flashing at a chimney, wall, skylight, or roof-to-wall joint.',
    'Any damage where a second round of rain is forecast within 24 to 48 hours and a permanent repair cannot happen that fast.',
  ];

  const faqs = [
    {
      q: 'How fast can you get an emergency roof tarp on my Lighthouse Point home?',
      a: 'Our Deerfield Beach headquarters is about five minutes from Lighthouse Point, which means we can typically have a crew on site within one to two hours of your call during business hours, and under six hours after-hours during a storm event. During a declared hurricane or tropical system, we pre-stage crews and materials so tarping starts the moment it is safe to climb.'
    },
    {
      q: 'How much does an emergency roof tarp cost in Lighthouse Point?',
      a: 'A standard emergency tarp install on a Lighthouse Point home typically runs $400 to $1,200 depending on roof pitch, tarp size, and complexity. Very large tarps on high or complex roofs can run higher. The cost is almost always reimbursable under the homeowners insurance claim for the underlying damage, and All Phase provides a receipt formatted for submission to your carrier.'
    },
    {
      q: 'Will my homeowners insurance reimburse an emergency tarp in Lighthouse Point?',
      a: 'In almost every case yes. Florida homeowners policies include "reasonable emergency mitigation" as a covered expense because protecting the interior from further water damage is the homeowner\'s duty of care after a loss. The tarp cost is submitted with the rest of the damage claim and reimbursed once the carrier processes the file. Keep the receipt and document the install with photos.'
    },
    {
      q: 'How long will an emergency tarp last on my roof?',
      a: 'A properly installed tarp from a licensed roofing contractor typically holds for 30 to 60 days in South Florida conditions. After that, UV starts to break down the tarp material and the fasteners begin to work loose. The tarp is a temporary measure while the permanent repair or replacement scope is being priced, permitted, and scheduled — not a long-term solution.'
    }
  ];

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Center', item: 'https://allphaseconstructionfl.com/learning-center' },
    { '@type': 'ListItem', position: 3, name: 'Emergency Roof Tarp in Lighthouse Point', item: 'https://allphaseconstructionfl.com/emergency-roof-tarp-lighthouse-point' },
  ]};
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Emergency Roof Tarp in Lighthouse Point (24-Hour Service)', description: 'Emergency roof tarp service in Lighthouse Point, FL — when to call, how fast we can be on site, what it costs, and how insurance reimbursement works on the underlying claim.', author: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, publisher: { '@type': 'Organization', name: 'All Phase Construction USA', url: 'https://allphaseconstructionfl.com' }, datePublished: '2026-04-08', dateModified: '2026-04-08' };

  return (
    <>
      <SEO
        title="Emergency Roof Tarp in Lighthouse Point (24-Hour Service)"
        description="Emergency roof tarp service in Lighthouse Point, FL — five minutes from our Deerfield Beach HQ."
        canonicalPath="/emergency-roof-tarp-lighthouse-point"
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
              <span className="text-white">Emergency Roof Tarp in Lighthouse Point</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Emergency Roof Tarp in <span className="text-yellow-400">Lighthouse Point</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              Five minutes from our Deerfield Beach HQ. When to call, what it costs, how fast we can be on site, and how insurance reimbursement works on the underlying damage claim.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Answer</h2>
            <p className="text-lg text-zinc-300">If your Lighthouse Point roof has an active leak, exposed deck, or storm damage that cannot wait, call All Phase Construction USA and we will have a crew on site within one to two hours during business hours. Our headquarters is on Goolsby Blvd in Deerfield Beach — about five minutes from any point in Lighthouse Point — which makes us one of the fastest emergency response options in east Broward. A standard tarp install runs $400 to $1,200 and is almost always reimbursable under the homeowners insurance claim for the underlying damage.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">When to Call for an Emergency Tarp</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              {whenToCall.map(w => <li key={w}>{w}</li>)}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Proximity Matters in Emergency Response</h2>
            <p className="text-lg text-zinc-300">Most emergency roof tarp requests in Lighthouse Point happen during or immediately after a storm, which means the next rain band is often one to four hours away. A contractor coming from Miami, West Kendall, or even west Broward simply cannot get a tarp on your roof before the next round of water enters the house. Our Deerfield Beach location means we are literally five minutes up Federal Highway — and during hurricane events we pre-stage crews and materials at the shop so tarping begins the moment it is safe to climb.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How a Professional Tarp Install Actually Works</h2>
            <p className="text-lg text-zinc-300">A real emergency tarp install is not a blue plastic sheet thrown over a hole and weighed down with bricks. Our crews use heavy-duty reinforced poly tarps, run the edges up and over the ridge on at least one side to shed water properly, and fasten the tarp to the deck with furring strips and ring-shank nails so it cannot lift in the next wind gust. We photograph every step for the insurance file and leave a typed receipt on site. A proper install from a licensed contractor typically holds for 30 to 60 days in South Florida conditions — long enough to get the permanent repair scope priced, permitted, and scheduled.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Insurance Reimbursement on the Tarp Cost</h2>
            <p className="text-lg text-zinc-300">Florida homeowners policies include "reasonable emergency mitigation" as a covered expense because protecting the interior from further water damage is the homeowner\'s legal duty of care after a loss. The tarp cost gets submitted with the rest of the damage claim and is reimbursed once the carrier processes the file. Keep the receipt, photograph the install, and make sure the tarp is noted in the adjuster report — All Phase handles all of that as part of the service.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose All Phase for Lighthouse Point Emergency Service</h2>
            <p className="text-lg text-zinc-300">All Phase Construction USA is dual-licensed in Florida (CCC1333509 and CGC1535474), headquartered five minutes from Lighthouse Point in Deerfield Beach, and on-call 24/7 during declared storm events. After the tarp is on, our project managers walk the full damage scope with your insurance adjuster at no cost to you. For the broader picture of how we handle Florida roof claims, see our <Link to="/florida-roof-insurance-claims-guide" className="text-yellow-400 underline">Florida roof insurance claims guide</Link>.</p>
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
            <h2 className="text-3xl font-bold mb-4">Lighthouse Point Emergency Tarp Service</h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">Five minutes from our Deerfield Beach HQ. Call now and we will have a crew on your roof within one to two hours during business hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors text-lg">Request Emergency Service</Link>
              <a href="tel:+17542275605" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-zinc-900/10 transition-colors text-lg">Call (754) 227-5605</a>
            </div>
            <p className="text-sm text-zinc-300 mt-4">Serving Lighthouse Point & All of East Broward County | Licensed & Insured | CCC1333509 | CGC1535474</p>
          </section>
        </div>
      </div>
    </>
  );
}
