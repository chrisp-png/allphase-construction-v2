import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Plus, Minus, Phone, Home } from 'lucide-react';

export default function HollywoodRoofInspectionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Roof Inspection Hollywood FL | All Phase Construction USA';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional roof inspection in Hollywood FL. Catch hidden damage before it becomes an emergency. Licensed & insured. Free inspection. Call (754) 227-5605.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional roof inspection in Hollywood FL. Catch hidden damage before it becomes an emergency. Licensed & insured. Free inspection. Call (754) 227-5605.';
      document.head.appendChild(meta);
    }
  }, []);

  const faqs = [
    {
      question: 'How often should I get my roof inspected in Hollywood?',
      answer: 'Every 1\u20132 years for routine maintenance, plus after any major tropical storms or hurricanes that affect Broward County.',
    },
    {
      question: 'Do I need an inspection if my roof is only 5\u201310 years old?',
      answer: 'Yes. Even newer roofs can develop issues from storm damage or installation problems. Identifying problems early prevents larger failures later.',
    },
    {
      question: 'Will the inspection report help with my insurance company?',
      answer: 'Absolutely. Detailed reports with photos support maintenance claims and can help demonstrate proper upkeep if coverage questions arise.',
    },
    {
      question: 'Do you walk the roof or use drones?',
      answer: 'Our inspectors typically perform walk-overs for thorough hands-on evaluation. Advanced technology like thermal imaging may be used to detect moisture not visible to the naked eye.',
    },
    {
      question: 'Is the inspection really free?',
      answer: 'Yes. All Phase offers complimentary inspections with no obligation. The goal is helping you understand your options before you need them.',
    },
    {
      question: 'What if you find serious damage?',
      answer: 'We\u2019ll explain the issue clearly, provide repair or replacement options with estimated costs, and answer your questions. You decide if and when to move forward.',
    },
    {
      question: 'How does this help me plan for energy efficiency?',
      answer: 'Inspections can identify ventilation issues and recommend roofing materials that improve energy-efficient performance, potentially lowering cooling costs in Hollywood\u2019s hot climate.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-[#09090b] border-b border-zinc-800 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-zinc-400">
            <Link to="/" className="hover:text-white flex items-center gap-1"><Home size={14} /> Home</Link>
            <ChevronRight size={14} />
            <Link to="/roofing-services" className="hover:text-white">Roofing</Link>
            <ChevronRight size={14} />
            <Link to="/roof-inspection" className="hover:text-white">Roof Inspection</Link>
            <ChevronRight size={14} />
            <span className="text-white">Hollywood</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-b from-zinc-900 to-[#09090b]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Roof Inspection Hollywood FL &mdash; <span className="text-red-500">Catch Hidden Damage Before It Becomes an Emergency</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-3xl">
            All Phase Construction USA offers complimentary, professional roof inspections for homeowners throughout Hollywood, FL &mdash; tailored to the storm, heat, and high humidity conditions that affect roofs in Broward County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+17542275605" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              <Phone size={20} /> (754) 227-5605
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Why Hollywood Needs Inspections */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Hollywood, Florida Homeowners Need Regular Roof Inspections</h2>
          <p className="text-zinc-300 mb-8">
            Hollywood sits in one of the most demanding climates for roofing materials in the country. Located in western Broward County with direct wind exposure off the Everglades, and home to communities surrounding Amerant Bank Arena and Sawgrass Mills Mall, Hollywood properties face year-round UV exposure, daily humidity levels exceeding 70%, and frequent summer storms that create constant stress on every roofing system.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'UV Degradation', body: 'Intense South Florida sun breaks down roofing materials 2\u20133 times faster than in moderate climates.' },
              { title: 'Daily Thermal Expansion', body: 'Temperature swings cause materials to expand and contract, loosening fasteners and cracking sealants.' },
              { title: 'Wind-Driven Rain', body: 'Tropical storms and afternoon thunderstorms push water under shingles and tiles, especially on the western Broward edge.' },
              { title: 'Hurricane-Season Gusts', body: 'Even outer bands from distant storms can lift shingles and displace tiles on Hollywood homes.' },
              { title: 'High Humidity', body: 'Constant moisture accelerates mold growth in attics and beneath roofing materials throughout the year.' },
              { title: 'Insurance Requirements', body: 'Florida insurers increasingly require clear documentation of roof condition to maintain coverage and control premiums.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-800 rounded-lg border border-zinc-700">
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-300 text-sm bg-zinc-800 p-4 rounded-lg border border-zinc-700">
            Even roofs installed between 2010 and 2018 in neighborhoods like Hollywood Golf Village and Inverrary can already show hidden issues like loose fasteners, cracked tiles, or dried sealant. Minor problems are often invisible from the yard but can lead to costly repairs if ignored.
          </p>
        </div>
      </section>

      {/* Inspection vs Waiting Table */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Proactive Inspection vs. Waiting for a Leak</h2>
          <p className="text-zinc-400 mb-8">
            Many Hollywood homeowners call only after a roof leak appears &mdash; which is usually the most expensive time to discover a problem. Water damage that reaches ceilings and walls can cost thousands more than catching issues early.
          </p>
          <div className="overflow-x-auto rounded-lg border border-zinc-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="text-left py-4 px-6 text-white font-semibold">Factor</th>
                  <th className="text-left py-4 px-6 text-green-400 font-semibold">With Regular Inspections</th>
                  <th className="text-left py-4 px-6 text-red-400 font-semibold">Waiting Until You See a Leak</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Average repair cost', '$350\u2013$1,200 for minor fixes', '$3,000\u2013$8,000+ including interior damage'],
                  ['Interior damage likelihood', 'Low \u2014 caught before water intrusion', 'High \u2014 damage to ceilings, walls, insulation'],
                  ['Insurance claim denial risk', 'Low \u2014 documented maintenance history', 'Higher \u2014 lack of maintenance can void claims'],
                  ['Impact on premiums', 'Stable or reduced with mitigation docs', 'Potential increases after claim filing'],
                  ['Roof lifespan', 'Extended through early intervention', 'Shortened by unaddressed deterioration'],
                  ['Homeowner stress', 'Low \u2014 planned maintenance, no emergencies', 'High \u2014 emergency repairs, displaced schedules'],
                ].map(([factor, proactive, reactive], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800/50'}>
                    <td className="py-4 px-6 text-zinc-300 font-medium">{factor}</td>
                    <td className="py-4 px-6 text-green-400 text-xs">{proactive}</td>
                    <td className="py-4 px-6 text-red-400 text-xs">{reactive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">What All Phase Checks During a Hollywood Roof Inspection</h2>
          <p className="text-zinc-300 mb-8">
            All Phase performs a systematic, on-roof and attic review &mdash; not just a quick glance from the street. Our inspectors work from the bottom up around the entire perimeter, documenting every component that affects your roof's performance.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Roof Coverings', items: ['Asphalt shingles (1980s\u20132020s homes)', 'Concrete and clay tile roofs', 'Metal panels (standing seam)', 'Flat systems (TPO, modified bitumen)'] },
              { title: 'Key Components', items: ['Missing shingles, cracks, wind damage', 'Fasteners and nailing patterns', 'Flashing around chimneys and vents', 'Ridge caps, hip caps, drip edge'] },
              { title: 'Attic & Underlayment', items: ['Moisture staining on decking or rafters', 'Soft or deteriorated decking', 'Mold growth or musty odors', 'Ventilation adequacy'] },
            ].map((section, i) => (
              <div key={i} className="p-6 bg-zinc-800 rounded-lg border border-zinc-700">
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 items-start text-sm text-zinc-400">
                      <CheckCircle2 className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Hollywood Roof Inspection Process &mdash; Step by Step</h2>
          <p className="text-zinc-400 mb-8">
            The inspection process is straightforward and usually takes 45–90 minutes for a typical single-family home in Hollywood.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Scheduling', body: 'Call or submit an online request and choose a morning or late-afternoon slot to avoid mid-day heat. Same-week availability for most Hollywood properties.' },
              { step: '02', title: 'Arrival & Safety Setup', body: 'Uniformed All Phase inspector arrives, reviews your concerns, and sets up safety equipment before beginning the evaluation.' },
              { step: '03', title: 'Ground-Level Review', body: 'Visual scan of roof from multiple angles to identify obvious issues before climbing &mdash; including checking for displaced tiles and obvious storm damage.' },
              { step: '04', title: 'On-Roof Inspection', body: 'Systematic check of covering materials, flashing, penetrations, and drainage paths. Every finding is photographed and documented.' },
              { step: '05', title: 'Attic Inspection', body: 'Checking underside of decking, insulation condition, moisture signs, and ventilation airflow where accessible.' },
              { step: '06', title: 'Review with Homeowner', body: 'Inspector sits down with you (same visit or later that day) to review a clear written summary and actionable recommendations.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-800 rounded-lg border border-zinc-700">
                <div className="text-4xl font-bold text-red-500 mb-3">{item.step}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Types */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Types of Roof Systems We Commonly Inspect in Hollywood</h2>
          <p className="text-zinc-300 mb-8">
            Hollywood neighborhoods &mdash; from Downtown Hollywood and Hollywood Hills to the Hollywood Beach Broadwalk area near Seminole Hard Rock Hotel &amp; Casino &mdash; include a mix of roofing systems. All Phase tailors each inspection checklist based on the exact system and year of last replacement.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Asphalt Shingle Roofs', body: 'Common on 1- and 2-story homes built 1980s\u20132000s. Common issues include granule loss, lifted shingles, and aging sealant around penetrations.' },
              { title: 'Concrete or Clay Tile Roofs', body: 'Found in many Hollywood subdivisions. Watch for cracked tiles, slipped tiles, and underlayment aging around the 15\u201320 year mark.' },
              { title: 'Metal Roofing', body: 'Increasingly popular after major storm seasons. Focus on fastener integrity, panel anchoring, and seam leaks. 40\u201360 year lifespan with proper maintenance.' },
              { title: 'Flat or Low-Slope Roofs', body: 'Common on additions, patios, and modern homes throughout western Broward. Concerns include ponding water, membrane blisters, and seal failures around plumbing penetrations.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-800 rounded-lg border border-zinc-700">
                <h3 className="font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance / Wind Mitigation */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Maximizing Insurance Discounts With the Right Roof</h2>
          <p className="text-zinc-300 mb-8">
            Florida insurance companies offer significant credits for specific roof features and installation methods, especially in Broward County where high winds are a documented risk. Upgrades can reduce premiums by 25–50% in some cases.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">What We Review</h3>
              <ul className="space-y-3">
                {[
                  'Existing roof-to-wall connections (clips, straps, or toe-nails)',
                  'Underlayment type and condition',
                  'Nailing patterns and fastener spacing',
                  'Secondary water barriers (when visible)',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-zinc-300">
                    <CheckCircle2 className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Features That Improve Wind Mitigation Results</h3>
              <ul className="space-y-3">
                {[
                  'Upgraded self-adhering underlayment',
                  'Enhanced nailing patterns (6-nail vs. 4-nail)',
                  'Hurricane clips or straps at roof-to-wall connections',
                  'Hip roof designs (more wind-resistant than gable)',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-zinc-300">
                    <CheckCircle2 className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Season */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Hollywood Storm Season &amp; Post-Storm Evaluations</h2>
          <p className="text-zinc-300 mb-6">
            Atlantic hurricane season runs June 1 through November 30, with late-summer storms posing the greatest threat to Hollywood properties. Even when a named storm does not make a direct hit, outer bands and strong thunderstorms can still damage roofs through high winds and flying debris.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-zinc-800 rounded-lg border border-zinc-700">
              <h3 className="font-semibold text-white mb-4">Post-Storm Inspection Focus</h3>
              <ul className="space-y-2">
                {[
                  'Wind damage patterns (creased or lifted materials)',
                  'Impact marks from debris',
                  'Missing materials or displaced tiles',
                  'New leaks not yet visible inside the home',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-zinc-400">
                    <CheckCircle2 className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-red-950 rounded-lg border border-red-800">
              <h3 className="font-semibold text-red-400 mb-3">Safety Warning</h3>
              <p className="text-zinc-300 text-sm">
                Do not go on the roof yourself after a storm. Wet surfaces, hidden structural damage, and downed power lines create serious hazards. Rely on trained inspectors with proper equipment to evaluate damage safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Google Reviews */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">What Our Customers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: 'Last month I had my roof replaced by All Phase Construction. From the beginning of the project to the end I have nothing to say other than I love dealing with every member of that team. Karl Walczak came to the house, went on the roof into the crawl space and presented a very clear picture of what had to be done and the cost. From that moment on I knew that I could trust him. They kept me informed every step of the way, were on time, and did exactly what they were supposed to. My roof is beautiful and well done. I would recommend you 100%.', name: 'Evelyn Tainsky' },
              { text: 'Recently I had a roof put on my house by All Phase USA. I cannot say enough good about this company. Matt and Dillon brought in all the materials and showed me by computer how it was going to be installed. I got a call every week from Carissa letting me know where we were in the process. Matt was the project manager and kept on top of things. The crew covered all my plants and cleaned everything up at the end of the day. If you need a new roof call All Phase USA.', name: 'Betty Fronizer' },
              { text: 'I had a tile roof installed with a solar attic fan by All Phase Construction, and I could not be happier with the results. From start to finish, the communication was clear and thorough. I had plenty of choices when it came to companies, and yes, some were less expensive, but the professionalism, quality, and peace of mind I got with All Phase made it absolutely worth it. A special shoutout to Graham, my salesman, and to Matt, the project manager. Highly recommend this team if you want it done right the first time!', name: 'Mom' },
            ].map((review, i) => (
              <div key={i} className="p-6 bg-zinc-800 rounded-lg border border-zinc-700 flex flex-col gap-4">
                <div className="text-yellow-400 text-lg">&star;&star;&star;&star;&star;</div>
                <p className="text-zinc-300 text-sm leading-relaxed">{review.text}</p>
                <div className="mt-auto">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-zinc-500">Google Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Report */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">What to Expect From Your Inspection Report</h2>
          <p className="text-zinc-300 mb-8">
            Homeowners receive clear, actionable information &mdash; not technical jargon that requires a contractor to interpret.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Condition Summary', body: 'Overall assessment of your roof using plain language ratings &mdash; no confusing contractor-speak.' },
              { title: 'Estimated Service Life', body: 'Range of remaining years based on material condition and local Hollywood climate factors.' },
              { title: 'Prioritized Recommendations', body: 'Which issues need immediate attention versus which can wait &mdash; so you can budget accordingly.' },
              { title: 'Annotated Photos', body: 'Images showing exact locations of concern (e.g., rear left slope above patio, front valley near garage).' },
              { title: 'Review Session', body: 'All Phase walks through findings, answers questions, and outlines next steps &mdash; whether simple maintenance, a small repair, or planning for replacement.' },
              { title: 'Saved Documentation', body: 'Reports can be referenced later when comparing bids, planning budgets, or filing insurance claims.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-800 rounded-lg border border-zinc-700">
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Frequently Asked Questions About Hollywood Roof Inspections</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-zinc-700 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <Minus className="text-red-500 flex-shrink-0" size={20} />
                  ) : (
                    <Plus className="text-red-500 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === i && (
                  <div className="p-5 bg-zinc-900 text-zinc-300 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Schedule Your Complimentary Hollywood Roof Inspection Today</h2>
          <p className="text-zinc-300 mb-4 max-w-3xl mx-auto">
            Do not wait for leaks, water damage, or insurance complications to learn what condition your roof is in. A complimentary inspection from All Phase Construction USA gives Hollywood homeowners the peace of mind that comes from knowing exactly where they stand.
          </p>
          <p className="text-zinc-400 mb-8 max-w-3xl mx-auto text-sm">
            We serve all Hollywood neighborhoods including Downtown Hollywood, Hollywood Hills, Hollywood Beach, Driftwood, Hillcrest, and communities throughout eastern Broward County near the Seminole Hard Rock Hotel &amp; Casino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+17542275605" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              <Phone size={20} /> (754) 227-5605
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Request Free Inspection
            </Link>
          </div>
          <p className="text-zinc-500 text-sm">
            Dual Licensed (CGC-1526236 &amp; CCC-1331464) &nbsp;&nbsp;|&nbsp;&nbsp; Fully Insured &nbsp;&nbsp;|&nbsp;&nbsp; Serving Hollywood, FL and Broward County
          </p>
        </div>
      </section>
    </div>
  );
}
