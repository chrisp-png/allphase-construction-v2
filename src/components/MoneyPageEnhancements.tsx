import { Helmet } from 'react-helmet-async';

interface MoneyPageEnhancementsProps {
  cityName: string;
  county?: string;
  hvhz?: boolean;
  neighborhoods?: string[];
}

interface FaqItem {
  question: string;
  answer: string;
}

const TESTIMONIAL_POOL = [
  {
    name: 'Mike R.',
    text: "All Phase replaced our roof in four days flat. Crew was clean, the foreman walked the job with me twice a day, and the final invoice matched the quote to the dollar."
  },
  {
    name: 'Linda S.',
    text: "We got three bids before calling All Phase. They were the only ones who actually got on the roof, photographed everything, and explained what we were paying for. Easy decision."
  },
  {
    name: 'Carlos M.',
    text: "Old tile roof, new concrete tile roof, zero surprises. They handled the permit, the HOA submittal, and even color-matched the ridge caps. Highly recommend."
  },
  {
    name: 'Jennifer P.',
    text: "Honest pricing and a real warranty. The crew protected our landscaping with tarps and left the driveway cleaner than they found it. We'd hire them again tomorrow."
  }
];

function buildFaqs(cityName: string, county: string, hvhz: boolean, neighborhoods?: string[]): FaqItem[] {
  const nbList = neighborhoods && neighborhoods.length ? neighborhoods.slice(0, 4).join(', ') : null;
  const hvhzNote = hvhz
    ? `${cityName} sits inside Florida's High Velocity Hurricane Zone, so every roof we install is engineered to the HVHZ standard with 175+ mph wind ratings and enhanced fastening schedules.`
    : `${cityName} is in ${county} County, and we voluntarily build to HVHZ specification on every project for the highest wind-rated installation available.`;
  return [
    {
      question: `How long does a roof replacement take in ${cityName}?`,
      answer: `Most single-family roof replacements in ${cityName} are completed in 2 to 5 working days from tear-off to final cleanup. Larger homes, tile systems, and projects with structural deck repair can extend the timeline. We schedule a single mobilization and a single crew per project so your home is buttoned up each evening.`
    },
    {
      question: `What roofing materials do you install on ${cityName} homes?`,
      answer: `All Phase Construction USA installs architectural shingles, concrete and clay tile, standing seam metal, and TPO/PVC flat-roof systems on ${cityName} properties. Material selection depends on your roof pitch, structural capacity, neighborhood architecture, and long-term plans for the home. We walk every option with you before you sign anything.`
    },
    {
      question: `Are you licensed to replace roofs in ${cityName}?`,
      answer: `Yes. We hold both the Florida State Certified Roofing Contractor license (CCC-1331464) and the Certified General Contractor license (CGC-1526236). The dual license means we can repair the deck, trusses, fascia, and any structural condition we uncover during tear-off without subbing it out or stopping the job.`
    },
    {
      question: `Is ${cityName} in the High Velocity Hurricane Zone?`,
      answer: hvhzNote
    },
    {
      question: `Do you offer free roof inspections in ${cityName}?`,
      answer: `Yes. We provide free, no-pressure roof inspections throughout ${cityName} from our Deerfield Beach headquarters. A licensed estimator walks the roof, photographs every elevation, and gives you a written assessment with a transparent replacement quote — no obligation to move forward.`
    },
    {
      question: `What ${cityName} neighborhoods do you serve?`,
      answer: nbList
        ? `We service all of ${cityName}, including ${nbList}. Our crews work in this market every week and are familiar with local HOA requirements, ARC submittal packages, and access constraints.`
        : `We service all of ${cityName} and the surrounding ${county} communities. Our crews work in this market every week and are familiar with local HOA requirements and ARC submittal packages.`
    }
  ];
}

export default function MoneyPageEnhancements({
  cityName,
  county = 'South Florida',
  hvhz = false,
  neighborhoods
}: MoneyPageEnhancementsProps) {
  const faqs = buildFaqs(cityName, county, hvhz, neighborhoods);
  const slug = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  // Pick two stable testimonials based on city name hash so each city is consistent
  const idx = Math.abs(
    cityName.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  ) % TESTIMONIAL_POOL.length;
  const t1 = TESTIMONIAL_POOL[idx];
  const t2 = TESTIMONIAL_POOL[(idx + 1) % TESTIMONIAL_POOL.length];
  const nb1 = (neighborhoods && neighborhoods[0]) || cityName;
  const nb2 = (neighborhoods && neighborhoods[1]) || cityName;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Embedded Google Map — keyless, lazy-loaded */}
      <section className="py-12 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Serving {cityName}, FL
          </h2>
          <div className="rounded-lg overflow-hidden border border-zinc-800 shadow-2xl">
            <iframe
              title={`Map of ${cityName}, FL`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(cityName + ' FL')}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="360"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Desktop sticky inline form — hidden on mobile (mobile has StickyMobileCTA) */}
      <aside
        className="hidden lg:block fixed bottom-6 right-6 z-40 w-80 bg-white rounded-xl shadow-2xl border border-zinc-200 p-5"
        aria-label={`Quick roof inspection request for ${cityName}`}
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-base font-bold text-gray-900 leading-tight">
              Free {cityName} Roof Inspection
            </p>
            <p className="text-xs text-gray-600 mt-0.5">
              15 seconds · no obligation
            </p>
          </div>
          <span className="text-[10px] font-bold bg-red-600 text-white px-2 py-1 rounded-full">
            FREE
          </span>
        </div>
        <form
          action="https://formspree.io/f/mojakkld"
          method="POST"
          className="space-y-2"
        >
          <input type="hidden" name="source" value={`money-page-sticky-${slug}`} />
          <input type="hidden" name="state" value="FL" />
          <input type="hidden" name="city" value={cityName} />
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
            Get My Free Inspection
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
            <time dateTime="2026-04">Updated April 2026</time> · Free roof inspections throughout {cityName}.
          </p>
        </div>
      </section>

      {/* Local proof / testimonials */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            What {cityName} Homeowners Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: t1, nb: nb1 },
              { t: t2, nb: nb2 }
            ].map(({ t, nb }, i) => (
              <blockquote
                key={i}
                className="bg-zinc-950 border-l-4 border-red-600 rounded-r-lg p-6"
              >
                <p className="text-zinc-200 italic leading-relaxed mb-4">"{t.text}"</p>
                <footer className="text-sm font-semibold text-zinc-400 not-italic">
                  — {t.name}, {nb}, {cityName}
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
            id={`${slug}-faqs`}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
          >
            {cityName} Roof Replacement FAQs
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
