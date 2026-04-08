import { Helmet } from 'react-helmet-async';

interface ServicePageEnhancementsProps {
  serviceName: string;
  serviceSlug: string;
  faqs?: { question: string; answer: string }[];
}

const TESTIMONIAL_POOL = [
  {
    name: 'Mike R.',
    location: 'Coral Springs, FL',
    text: "All Phase replaced our roof in four days flat. Crew was clean, the foreman walked the job with me twice a day, and the final invoice matched the quote to the dollar."
  },
  {
    name: 'Linda S.',
    location: 'Boca Raton, FL',
    text: "We got three bids before calling All Phase. They were the only ones who actually got on the roof, photographed everything, and explained what we were paying for. Easy decision."
  },
  {
    name: 'Carlos M.',
    location: 'Pembroke Pines, FL',
    text: "Old tile roof, new concrete tile roof, zero surprises. They handled the permit, the HOA submittal, and even color-matched the ridge caps. Highly recommend."
  },
  {
    name: 'Jennifer P.',
    location: 'Delray Beach, FL',
    text: "Honest pricing and a real warranty. The crew protected our landscaping with tarps and left the driveway cleaner than they found it. We'd hire them again tomorrow."
  }
];

function defaultFaqs(serviceName: string) {
  return [
    {
      question: `How much does ${serviceName.toLowerCase()} cost in South Florida?`,
      answer: `${serviceName} pricing depends on roof size, pitch, material grade, accessibility, and tear-off complexity. We provide free, no-obligation written quotes after a full on-roof inspection so you see exactly what you're paying for and why — no high-pressure sales tactics.`
    },
    {
      question: `How long does ${serviceName.toLowerCase()} take to complete?`,
      answer: `Most single-family ${serviceName.toLowerCase()} projects in Broward and Palm Beach County are completed in 2 to 5 working days from start to final cleanup. Tile and larger homes can extend that timeline. We schedule one mobilization and one dedicated crew per project so your home is buttoned up each evening.`
    },
    {
      question: `Are you licensed to perform ${serviceName.toLowerCase()} in Florida?`,
      answer: `Yes. All Phase Construction USA holds the Florida State Certified Roofing Contractor license (CCC-1331464) and the Certified General Contractor license (CGC-1526236). The dual license means we can repair the deck, trusses, fascia, or any structural condition we uncover during the job without subbing it out.`
    },
    {
      question: `Do you offer free inspections before quoting ${serviceName.toLowerCase()}?`,
      answer: `Yes. A licensed estimator walks the roof, photographs every elevation, and gives you a written assessment with a transparent quote — at no cost and with no obligation to move forward.`
    },
    {
      question: `What warranty comes with ${serviceName.toLowerCase()}?`,
      answer: `Every ${serviceName.toLowerCase()} project from All Phase Construction USA includes our workmanship warranty in addition to the manufacturer's material warranty. We walk every detail of both coverages with you in writing before you sign anything.`
    },
    {
      question: `What areas do you serve for ${serviceName.toLowerCase()}?`,
      answer: `We serve all of Broward and Palm Beach County from our Deerfield Beach headquarters, including Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Wellington, Coral Springs, Pembroke Pines, Plantation, Sunrise, Fort Lauderdale, Hollywood, and every community in between.`
    }
  ];
}

export default function ServicePageEnhancements({
  serviceName,
  serviceSlug,
  faqs: faqsOverride
}: ServicePageEnhancementsProps) {
  const faqs = faqsOverride && faqsOverride.length ? faqsOverride : defaultFaqs(serviceName);

  // Pick two stable testimonials based on service name hash
  const idx = Math.abs(
    serviceName.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  ) % TESTIMONIAL_POOL.length;
  const t1 = TESTIMONIAL_POOL[idx];
  const t2 = TESTIMONIAL_POOL[(idx + 1) % TESTIMONIAL_POOL.length];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  // NOTE: Service schema intentionally does NOT carry aggregateRating or review.
  // Google's rich-results spec rejects review snippets attached to Service
  // ("Invalid object type for field <parent_node>"). The site-wide
  // RoofingContractor #organization schema (injected by prerender-static.mjs)
  // is the single source of AggregateRating for the domain.
  const ratingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://allphaseconstructionfl.com/${serviceSlug}#service`,
    serviceType: serviceName,
    provider: { '@id': 'https://allphaseconstructionfl.com/#organization' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Broward and Palm Beach County, Florida' }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(ratingSchema)}</script>
      </Helmet>

      {/* Desktop sticky inline form */}
      <aside
        className="hidden lg:block fixed bottom-6 right-6 z-40 w-80 bg-white rounded-xl shadow-2xl border border-zinc-200 p-5"
        aria-label={`Quick ${serviceName} quote request`}
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-base font-bold text-gray-900 leading-tight">
              Free {serviceName} Quote
            </p>
            <p className="text-xs text-gray-600 mt-0.5">15 seconds · no obligation</p>
          </div>
          <span className="text-[10px] font-bold bg-red-600 text-white px-2 py-1 rounded-full">
            FREE
          </span>
        </div>
        <div className="flex items-center justify-center gap-1.5 mb-2 text-xs font-semibold text-gray-700">
          <span className="text-yellow-500 tracking-tight">★★★★★</span>
          <span>4.8 on Google</span>
          <span className="text-gray-400">·</span>
          <span>138 reviews</span>
        </div>
        <form action="https://formspree.io/f/mojakkld" method="POST" className="space-y-2">
          <input type="hidden" name="source" value={`service-page-sticky-${serviceSlug}`} />
          <input type="hidden" name="state" value="FL" />
          <input type="hidden" name="service" value={serviceName} />
          <input type="hidden" name="_replyto" value="leads@allphaseusa.com" />
          <input type="hidden" name="_subject" value={`New ${serviceName} sticky-form lead`} />
          <input
            type="text"
            name="first_name"
            required
            placeholder="Name"
            autoComplete="name"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-900 focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone"
            autoComplete="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-900 focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
          <input
            type="text"
            name="zip_code"
            required
            inputMode="numeric"
            pattern="[0-9]{5}"
            maxLength={5}
            placeholder="ZIP"
            autoComplete="postal-code"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-900 focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full px-4 py-2.5 bg-red-600 text-white font-bold text-sm rounded hover:bg-red-700 transition-colors"
          >
            Get My Free Quote
          </button>
          <p className="text-center text-[10px] text-gray-500">
            Or call{' '}
            <a href="tel:+17542275605" className="text-red-600 font-semibold">
              (754) 227-5605
            </a>
          </p>
        </form>
      </aside>

      {/* Trust strip + Updated stamp */}
      <section className="py-10 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {['✓ Dual-Licensed CCC + CGC', '✓ HVHZ-Certified', '✓ A+ BBB', '✓ Since 2005', '✓ 2,500+ Roofs'].map((b) => (
              <span
                key={b}
                className="bg-red-950/40 text-red-200 border border-red-900/40 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
          <p className="text-center text-xs text-zinc-500">
            <time dateTime="2026-04">Updated April 2026</time> · Free {serviceName.toLowerCase()} quotes throughout Broward &amp; Palm Beach County.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            What Homeowners Say About Our {serviceName}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[t1, t2].map((t, i) => (
              <blockquote
                key={i}
                className="bg-zinc-950 border-l-4 border-red-600 rounded-r-lg p-6"
              >
                <p className="text-zinc-200 italic leading-relaxed mb-4">"{t.text}"</p>
                <footer className="text-sm font-semibold text-zinc-400 not-italic">
                  — {t.name}, {t.location}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Visible FAQ block (matches FAQPage schema above) */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id={`${serviceSlug}-faqs`}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
          >
            {serviceName} FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-zinc-900 border-l-4 border-red-600 rounded-r-lg p-5 open:pb-6"
              >
                <summary className="cursor-pointer font-bold text-white text-lg list-none flex justify-between items-start gap-4">
                  <span>{f.question}</span>
                  <span className="text-red-500 text-2xl leading-none group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-zinc-300 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
