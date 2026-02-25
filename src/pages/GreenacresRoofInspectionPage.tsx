import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Plus, Minus, Phone, Home } from 'lucide-react';

export default function GreenacresRoofInspectionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Roof Inspection Greenacres FL | All Phase Construction USA';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional roof inspection in Greenacres FL. Maximize insurance discounts and know if you need repair or replacement. Licensed & insured. Free inspection. Call 754 227-5605.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional roof inspection in Greenacres FL. Maximize insurance discounts and know if you need repair or replacement. Licensed & insured. Free inspection. Call 754 227-5605.';
      document.head.appendChild(meta);
    }
  }, []);

  const faqs = [
    {
      question: 'How often should I inspect my roof in Greenacres?',
      answer: 'Every 3-5 years for roofs under 10 years old, annually for older roofs. Florida\'s extreme weather conditions &mdash; intense UV, heavy rain, and hurricane winds &mdash; accelerate wear faster than northern climates. Regular inspections catch storm damage early, prevent leaks, and satisfy insurance requirements.',
    },
    {
      question: 'What insurance discounts am I currently eligible for?',
      answer: 'That depends on several factors including roof age, materials, installation date, and mitigation features like hurricane straps and secondary water barriers. Our inspection identifies exactly which credits apply to your situation.',
    },
    {
      question: 'How much can roof upgrades save on insurance premiums?',
      answer: 'Upgrading to HVHZ-compliant materials and adding features like reinforced decking can qualify you for 10-40% premium reductions &mdash; potentially $1,000-$5,000 in annual savings depending on your home\'s value and current coverage.',
    },
    {
      question: 'When should I repair vs. replace my roof?',
      answer: 'Generally, repairs covering less than 25% of roof area avoid permit requirements and make sense for localized issues. Roofs with widespread granule loss, curling shingles, or multiple existing issues typically warrant replacement for maximum durability and insurance benefits.',
    },
    {
      question: 'What documentation do I need for insurance claims?',
      answer: 'Insurers require detailed photos of damage, professional assessment of cause and scope, repair cost estimates from a licensed roofing contractor, and often wind mitigation reports. Our comprehensive inspection provides all necessary documentation.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
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
            <span className="text-white">Greenacres</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-b from-zinc-900 to-[#09090b]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Roof Inspection Greenacres FL — <span className="text-red-500">Maximize Insurance Discounts & Protect Your Home</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-3xl">
            Get the facts about your roof\'s condition before spending thousands on repairs or replacement you may not need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+17542275605" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              <Phone size={20} /> 754 227-5605
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-5 text-lg text-zinc-300">
          <p>
            That water stain on your ceiling has you worried. Water stains on your ceilings are a clear indication of a leaky roof. Maybe missing shingles after last month\'s storm have you searching for answers. Before you commit to expensive roof repairs or a full replacement, there\'s a smarter first step &mdash; a professional roof inspection in Greenacres, FL.
          </p>
          <p>
            Many homeowners in the Greenacres area face a frustrating dilemma &mdash; they know something\'s wrong with their roof, but they don\'t know whether they need minor repairs or an entire roof replacement. Without a thorough inspection, you\'re essentially guessing with your money. Some contractors push full replacements when targeted repairs would solve the problem. Others recommend quick fixes on a damaged roof that\'s beyond saving.
          </p>
          <p>
            A professional inspection eliminates this uncertainty. In South Florida\'s climate, where intense UV rays, humidity, hurricane season, and heavy rains constantly test your roofing materials, understanding your roof\'s true condition isn\'t optional &mdash; it\'s essential for making cost-effective decisions that protect both your home\'s interior and your wallet. The unique climate of Greenacres, Florida, requires roofing solutions that can withstand intense sun and heavy rainfall. Regular roof inspections can help maintain the value of your home &mdash; a well-maintained roof can last for decades, but neglecting regular inspections can significantly shorten its lifespan.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Our Greenacres Roof Inspection Service?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Early Detection Prevents Costly Repairs',
                body: 'Small cracks, minor issues with flashing, and damaged shingles caught early cost hundreds to fix. Left undetected, they escalate into structural damage requiring thousands in repairs or full replacement.',
              },
              {
                title: 'Accurate Assessment of Repair vs. Replacement Needs',
                body: "A roof inspector provides objective analysis of your roof\'s condition and specifically evaluates your roof\'s integrity. This assessment determines whether targeted roof repairs will restore your roof\'s integrity or if a full replacement is truly necessary.",
              },
              {
                title: 'Storm Damage Documentation for Insurance Claims',
                body: 'After high winds, hail, or hurricane season events, a thorough assessment with detailed photos streamlines the claims process and helps you recover maximum reimbursement.',
              },
              {
                title: 'South Florida Climate Expertise',
                body: "Experienced roofers understand how South Florida\'s climate accelerates wear on tile roofing, metal roofing, shingle systems, and flat roofs differently than northern climates.",
              },
              {
                title: 'Free Inspection Eliminates Guesswork',
                body: 'A free roof inspection removes the financial barrier to getting answers, preventing contractor overselling and ensuring you invest only in work your roof actually needs.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-zinc-800 rounded-lg">
                <CheckCircle2 className="text-red-500 flex-shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs Replace Table */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Repair vs. Replace Decision Guide</h2>
          <p className="text-zinc-400 mb-8">Not sure whether you need a repair or a full replacement? Here\'s how we evaluate your situation:</p>
          <div className="overflow-x-auto rounded-lg border border-zinc-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="text-left py-4 px-6 text-white font-semibold">Situation</th>
                  <th className="text-left py-4 px-6 text-white font-semibold">Recommended Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Isolated damaged shingles or tiles', 'Repair'],
                  ['Storm damage affecting under 30% of surface', 'Repair'],
                  ['Roof age under 15 years with good structure', 'Repair'],
                  ['Multiple active leaks with widespread damage', 'Replace'],
                  ['Roof age 20+ years with significant granule loss', 'Replace'],
                  ['Failed deck or structural damage present', 'Replace'],
                ].map(([situation, action], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800/50'}>
                    <td className="py-4 px-6 text-zinc-300">{situation}</td>
                    <td className="py-4 px-6">
                      <span className={`font-semibold ${action === 'Repair' ? 'text-green-400' : 'text-red-400'}`}>
                        {action}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">How Our Greenacres Roof Inspection Process Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                step: '01',
                title: 'Free Consultation and Exterior Visual Assessment',
                body: "We start with a ground-level evaluation and careful exterior examination of your entire roof. This includes checking for missing or damaged shingles, granule loss, sagging sections, and visible storm damage. We assess all roofing materials \u2014 whether you have asphalt shingles, tile roofing, metal roofing, or flat roofs common throughout Greenacres neighborhoods.",
              },
              {
                step: '02',
                title: 'Comprehensive Interior Inspection and Structural Evaluation',
                body: "The interior inspection reveals problems invisible from outside. We examine your attic space for water infiltration signs, proper ventilation, mold indicators, and structural integrity issues. Ceiling stains, active leaks, and moisture damage in your home\'s interior tell us what\'s happening beneath the surface.",
              },
              {
                step: '03',
                title: 'Detailed Report with Photos Showing Exact Issues',
                body: 'You receive documentation showing precisely what we found \u2014 nail pops, cracking tiles, sealant degradation, ventilation systems problems, and any areas needing immediate attention. This thorough inspection report becomes valuable for insurance claims, home sales, and warranty purposes.',
              },
              {
                step: '04',
                title: 'Clear Explanation of Repair vs. Replacement Options',
                body: "We sit down with you to explain findings honestly. You\'ll understand whether minor repairs will fix leaks and extend your roof\'s life, or if your roof\'s age and extensive damage make replacement the smarter investment. No pressure \u2014 just facts to guide your decision.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-800 rounded-lg border border-zinc-700">
                <div className="text-4xl font-bold text-red-500 mb-3">{item.step}</div>
                <h3 className="font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Roof Problems */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Common Roof Problems in Greenacres Homes</h2>
          <p className="text-zinc-400 mb-8">Greenacres homes face unique roofing challenges due to the subtropical climate &mdash; high winds, heavy rainfall, and intense sunlight. Here are the most common issues we find:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Wind and Storm Damage',
                body: 'High winds during hurricane season can lift shingles, dislodge tiles, or tear sections of roofing material from the roof. This leaves your home vulnerable to water infiltration and further damage, especially if not caught early.',
              },
              {
                title: 'Water Leaks and Moisture Intrusion',
                body: 'Heavy rainfall common in South Florida can exploit even the smallest vulnerabilities in your roof. Leaky roofs often start as minor issues &mdash; small cracks or missing shingles &mdash; but can quickly lead to structural damage and costly repairs.',
              },
              {
                title: 'Sun and Heat Degradation',
                body: "Intense sunlight and high temperatures accelerate the aging of roofing materials. Over time, shingles become brittle, tiles crack, and flat roofs develop blisters or splits &mdash; all of which compromise your roof\'s integrity.",
              },
              {
                title: 'Mold, Algae, and Mildew Growth',
                body: 'The combination of humidity and frequent rain creates ideal conditions for mold and algae to thrive on Greenacres roofs. These growths weaken roofing materials and lead to further damage if left untreated.',
              },
              {
                title: 'Clogged or Damaged Gutters',
                body: 'Blocked gutters prevent proper drainage, causing water to back up and seep under roofing materials. This can result in rot, leaks, and even foundation issues if not addressed promptly.',
              },
              {
                title: 'Aging Roof Systems',
                body: "As roofs age, their ability to withstand South Florida\'s harsh weather conditions diminishes. Regular roof inspections help homeowners monitor their roof\'s condition and plan for timely repairs or replacement before extensive damage occurs.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-800 rounded-lg border border-zinc-700">
                <h3 className="font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">What Makes Our Greenacres Roof Inspections Different?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Drone Technology Integration',
                body: 'Advanced aerial inspection capabilities provide complete roof surface evaluation without risking damage to your roof or landscaping — perfect for steep metal roofing, flat roofing systems, and multi-story homes.',
              },
              {
                title: 'Hurricane Damage Specialists',
                body: 'Post-Hurricane Andrew codes require specific wind-resistant standards. We verify whether your roof meets current Broward County HVHZ requirements &mdash; critical information if you\'re planning any roofing project or selling your home.',
              },
              {
                title: 'No-Pressure, Best-Interest Approach',
                body: 'Extensive experience identifying wind, hail, and water leak damage specific to South Florida storms, including subtle red flags that untrained eyes miss. We know what Greenacres’s weather does to roofs.',
              },
              {
                title: 'Restoration-First Philosophy',
                body: 'We prioritize cost-effective roofing solutions over expensive full replacements whenever your roof remains structurally sound. A well-maintained roof can often be restored rather than replaced — saving you thousands.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-zinc-800 rounded-lg">
                <CheckCircle2 className="text-red-500 flex-shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Google Reviews */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">What Our Customers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: 'Last month I had my roof replaced by All Phase Construction. From the beginning of the project to the end I have nothing to say other than I love dealing with every member of that team. Karl Walczak came to the house, went on the roof into the crawl space and presented a very clear picture of what had to be done and the cost. From that moment on I knew that I could trust him. They kept me informed every step of the way, were on time, and did exactly what they were supposed to. My roof is beautiful and well done. I would recommend you 100%.',
                name: 'Evelyn Tainsky',
              },
              {
                text: 'Recently I had a roof put on my house by All Phase USA. I cannot say enough good about this company. Matt and Dillon brought in all the materials and showed me by computer how it was going to be installed. I got a call every week from Carissa letting me know where we were in the process. Matt was the project manager and kept on top of things. The crew covered all my plants and cleaned everything up at the end of the day. If you need a new roof call All Phase USA.',
                name: 'Betty Fronizer',
              },
              {
                text: 'I had a tile roof installed with a solar attic fan by All Phase Construction, and I couldn\'t be happier with the results. From start to finish, the communication was clear and thorough. I had plenty of choices when it came to companies, and yes, some were less expensive, but the professionalism, quality, and peace of mind I got with All Phase made it absolutely worth it. A special shoutout to Graham, my salesman, and to Matt, the project manager. Highly recommend this team if you want it done right the first time!',
                name: 'Mom',
              },
            ].map((review, i) => (
              <div key={i} className="p-6 bg-zinc-800 rounded-lg border border-zinc-700 flex flex-col gap-4">
                <div className="flex gap-1 text-yellow-400 text-lg">{'★'.repeat(5)}</div>
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

      {/* Investment Value */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Inspection Investment Value</h2>
          <h3 className="text-xl font-semibold text-red-500 mb-4">Free Initial Roof Inspection for Greenacres Homeowners</h3>
          <p className="text-zinc-300 mb-6">
            We believe every homeowner deserves to know their roof\'s condition without financial barriers. That\'s why we offer a free roof inspection to residents throughout Greenacres and surrounding Broward County communities.
          </p>
          <p className="text-zinc-300 mb-8">
            Consider the math: The average roof replacement costs $8,000 to $20,000 for typical Greenacres homes. Meanwhile, targeted roof repairs often range from $500 to $5,000 depending on the issue. A thorough inspection ensures you\'re investing in the right solution.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Clear understanding of whether you need repair or replacement',
              'Documentation that strengthens insurance claims &mdash; potentially recovering 70&ndash;100% of repair costs',
              'Negotiating power for real estate transactions',
              'Prevention of further damage from undetected problems',
              'Peace of mind about your roof\'s condition',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <p className="text-zinc-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Frequently Asked Questions About Greenacres Roof Inspections</h2>
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
          <h2 className="text-3xl font-bold mb-4 text-white">Schedule Your Greenacres Roof Inspection Today</h2>
          <p className="text-zinc-300 mb-4 max-w-3xl mx-auto">
            Stop guessing about your roof\'s condition. Whether you\'re seeing warning signs like roof leaks, noticing missing or damaged shingles, or simply want to prevent costly repairs before they happen, a professional inspection gives you the answers you need.
          </p>
          <p className="text-zinc-400 mb-8 max-w-3xl mx-auto text-sm">
            We serve all Greenacres neighborhoods including Chapel Trail, Pembroke Falls, Silver Lakes, Nautica, Pines City Center, and properties along the Pembroke Road corridor near the western Broward edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+17542275605" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              <Phone size={20} /> 754 227-5605
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Request Free Inspection
            </Link>
          </div>
          <p className="text-zinc-500 text-sm">
            Dual Licensed: CGC-1526236 &amp; CCC-1331464 &nbsp;&nbsp;|&nbsp;&nbsp; Fully Insured &nbsp;&nbsp;|&nbsp;&nbsp; Serving Greenacres, FL and Broward County
          </p>
        </div>
      </section>

    </div>
  );
}
