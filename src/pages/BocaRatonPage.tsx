import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';
import { CITY_SERVICE_AREA_SEO_OVERRIDES } from '../config/cityServiceAreaSEO';

interface PhotoBreakProps {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}

function PhotoBreak({ src, alt, loading = 'lazy' }: PhotoBreakProps) {
  return (
    <div className="my-12 max-w-4xl mx-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-lg hover:border-zinc-700 transition-all duration-300">
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default function BocaRatonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // City configuration
  const citySlug = 'boca-raton';
  const cityName = 'Boca Raton';

  // Get SEO data with override system
  const seoOverride = CITY_SERVICE_AREA_SEO_OVERRIDES[citySlug];
  const seoTitle = seoOverride?.title || `Roofer in ${cityName} FL | All Phase Construction USA`;
  const seoDescription = seoOverride?.description || `Licensed roofer in ${cityName} FL providing inspections, repairs, and roof replacement. Dual-licensed, permit-ready, hurricane-rated systems.`;

  // FAQ data for the page
  const faqData = [
    {
      question: 'What is the 25% reroofing rule in Florida?',
      answer: 'It refers to code language about how much of a roof can be repaired or replaced within a 12-month period before additional code compliance may be required. SB 4-D revised application for many roofs, often allowing compliance work to be limited to the repaired portion when conditions are met.'
    },
    {
      question: 'What is the average cost for a new roof in Florida?',
      answer: 'It varies heavily by material and scope. Statewide averages published by remodeling and roofing cost sources commonly show broad ranges, with full replacements on typical homes often landing in the tens of thousands depending on system choice and tear-off needs.'
    },
    {
      question: 'How much does a 2,000 sq ft shingle roof cost?',
      answer: '"2,000 sq ft" can mean home size, not roof area, so pricing needs a measurement. Many pricing references estimate asphalt systems by cost per square foot or per square (100 sq ft), then adjust for pitch, tear-off, deck work, and code items.'
    },
    {
      question: 'What is the hourly rate for a roofer in Florida?',
      answer: 'Worker pay and contractor billing are different numbers. Wage datasets and salary aggregators often show Florida roofer wages around the low-to-mid $20s per hour on average, but contractor labor billed to a job is typically higher because it includes overhead, insurance, supervision, and warranty risk.'
    },
    {
      question: 'Do you handle permits and inspections in Boca Raton?',
      answer: 'Yes. We manage permits and coordinate inspections as part of a proper reroof process.'
    },
    {
      question: 'How fast can you inspect a leak?',
      answer: 'We prioritize active leaks and storm-related damage. Call and we will schedule the fastest available inspection slot.'
    }
  ];

  // Generate schemas
  const coordinates = getCityCoordinates(cityName);
  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: cityName,
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '137'
    }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://allphaseconstructionfl.com' },
    { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations' },
    { name: cityName, url: `https://allphaseconstructionfl.com/locations/${citySlug}` }
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/locations/${citySlug}`}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-[#09090b]">
        <div className="pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Boca Raton</span>
          </nav>

          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofer in Boca Raton FL
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              All Phase Construction USA | Roofing Contractor Serving Boca Raton, Palm Beach, and Broward County
            </h2>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                If you're searching for a roofer in Boca Raton FL, you want one thing: a roof that passes inspection, survives storms, and does not turn into a "surprise leak" two months later. That is what we build. Our commitment to quality, customer satisfaction, and safety standards sets us apart as a trusted member of the local community.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                All Phase Construction USA is a licensed Florida roofing contractor—fully insured and bonded for your peace of mind. We are proud to have an expert team of professional roofers dedicated to delivering reliable, high-quality workmanship. Our team takes pride in serving the Boca Raton community and building lasting relationships with our customers.
              </p>

              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-6">
                <p className="text-white text-lg mb-2">
                  <strong>Call 24/7:</strong> <a href="tel:+17542275605" className="text-red-500 hover:text-red-400">(754) 227-5605</a>
                </p>
                <p className="text-white text-lg mb-2">
                  <strong>Address:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442
                </p>
                <p className="text-white text-lg">
                  <strong>Google Rating:</strong> 4.8★ with 137 reviews
                </p>
              </div>

              <p className="text-lg text-zinc-300 leading-relaxed mb-12">
                As a long-standing business in the area, we are dedicated to the local community and our customers. Emergency roofing services are available 24/7, providing fast response for roof leaks and storm damage—crucial for maintaining the safety and comfort of your home. We are proud of our strong BBB rating (A+) and recent positive Google reviews. When choosing a roofer in Boca Raton, always prioritize local, licensed, insured, and bonded contractors with a proven commitment to customer satisfaction and community trust.
              </p>
            </div>

            <PhotoBreak
              src="/step-01-inspection-optimized.jpg"
              alt="Roof inspection in Boca Raton FL documenting conditions before repair or replacement"
              loading="eager"
            />

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Boca Raton Homeowners Hire All Phase Construction USA
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">
                Not a "random crew with a ladder"
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                In Boca Raton, the roof that "looks fine" can still fail the moment wind-driven rain hits a weak transition. That's why we run our jobs like a code-and-inspection system, not a patch-and-pray operation.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Our experienced and trained contractors handle all aspects of roof installation and repair, ensuring every project meets the highest standards. We plan the build, document the condition, pull permits correctly, and execute with specialized crews by roofing system.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Built for permits, inspections, and hurricane reality
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                South Florida roofing is not only about materials. It is about details that pass inspection and hold up when storms start pushing water sideways.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-12">
                Boca Raton weather stresses edges, flashings, valleys, penetrations, and underlayment first. We focus there because that's where roofs usually lose. Our team follows strict safety protocols and ensures all work meets or exceeds safety standards.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                The Proof Stack
              </h3>
              <p className="text-zinc-300 mb-4">Trust is not a slogan. It is receipts you can verify.</p>
              <ul className="space-y-3 mb-12">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>BBB A+ rated</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>4.8★ Google rating (137 reviews)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Dual-licensed: Roofing Contractor CCC-1331464 + General Contractor CGC-1526236</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Manufacturer certifications including Tamko Platinum Preferred and multiple major system credentials</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Specialized crews by system</span>
                </li>
              </ul>

              <p className="text-zinc-300 leading-relaxed mb-6">
                Different roof types fail in different ways. We assign the right crew to the right system so installs are cleaner, repairs are tighter, and callbacks drop.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Shingle crew for shingles. Tile crew for tile. Metal crew for metal. Flat crew for flat systems.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                All Phase Construction USA installs code-compliant roofing systems in Boca Raton and handles permits and inspections for reroof projects.
              </p>
            </div>

            <PhotoBreak
              src="/deck-inspection.jpg"
              alt="Roof deck inspection during Boca Raton roof replacement by All Phase Construction USA"
            />

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing Company in Boca Raton FL with a "Show-You" Inspection Process
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Most roof problems are invisible from the driveway. Our inspection is designed to reduce guesswork and help you make a clean decision.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                What you get from a real roof inspection:
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Photos of key roof areas</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Clear notes on what is failed vs. what is aging</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Recommendations matched to the roof's condition and your timeline</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">
                Repair vs Replacement (how we decide):
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>A roof can be repaired when the system is stable and failures are isolated</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>A roof should be replaced when the system is at end-of-life or failing in multiple zones</span>
                </li>
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                About All Phase Construction USA
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                All Phase Construction USA is a Florida roofing contractor based in Deerfield Beach, serving Boca Raton and the surrounding region with repairs, replacements, and inspections.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                We operate like a builder, not a sales script. You get direct oversight, clear scope, and a roof system designed for South Florida weather.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-8">
                <strong>Find us:</strong> 590 Goolsby Blvd, Deerfield Beach, FL 33442
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing Contractor in Boca Raton FL: What We Do
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We deliver permit-ready, inspection-ready, storm-ready roofing services for residential and commercial properties.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Core Services
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Roof inspections and leak investigations</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Roof repair (tile, shingle, metal, flat)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Full roof replacement and reroofing</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Storm and hurricane damage assessments</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Preventive maintenance for aging roofs</span>
                </li>
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                What We Typically Find During Boca Raton Roof Inspections
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Common findings include:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Cracked or slipped tiles exposing underlayment</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Nail pops and lifted shingles</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Failed pipe boots and vent flashings</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Valley and wall transition leaks</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Flat roof seam and drainage issues</span>
                </li>
              </ul>
            </div>

            <PhotoBreak
              src="/flashing-details.jpg"
              alt="Flashing detail repair on Boca Raton home to prevent wind-driven rain leaks"
            />

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roof Repair in Boca Raton FL
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Speed matters—but correctness matters more. A rushed patch often becomes a repeat leak.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Common repairs we handle:
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Leak detection and targeted sealing</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Flashing repair</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Tile reset and replacement</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Shingle blow-off repair</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Flat roof seam and penetration repairs</span>
                </li>
              </ul>
            </div>

            <PhotoBreak
              src="/step-06-tearoff.jpg"
              alt="Roof tear-off in progress at Boca Raton residential roofing project"
            />

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roof Replacement in Boca Raton FL
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Roof replacements are system builds, not surface swaps. We install:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Architectural shingles</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Clay and concrete tile</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Metal roofing systems</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Flat roofing membranes</span>
                </li>
              </ul>

              <p className="text-zinc-300 leading-relaxed">
                High-wind-rated systems are available when appropriate.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Service Areas
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-8">
                We serve Boca Raton plus surrounding areas in Palm Beach and Broward County, including Deerfield Beach, Delray Beach, Boynton Beach, Pompano Beach, Fort Lauderdale, and more.
              </p>
            </div>

            <PhotoBreak
              src="/step-09-installed.jpg"
              alt="Completed residential roof installation in Boca Raton FL by All Phase Construction USA"
            />

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                FAQ
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                    >
                      <span className="font-semibold text-white pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                        <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Schedule a Roof Inspection
              </h2>
              <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
                If you need a roofer in Boca Raton FL, start with an inspection that shows you what is happening and what it costs to fix correctly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call All Phase Construction USA 24/7: (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
