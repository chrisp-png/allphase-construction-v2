import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Shield, CheckCircle2, Phone, ChevronDown, ChevronUp, Home } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function DaniaBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Dania Beach Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dania Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Dania Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Dania Beach');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Dania Beach',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '150'
      }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Dania Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/dania-beach' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide roofing services in Dania Beach, FL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide residential and commercial roofing services throughout Dania Beach."
          }
        },
        {
          "@type": "Question",
          "name": "What roof types do you install in Dania Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We install shingle roofs, tile roofs, flat roofing systems, and mechanically seamed metal roofing systems."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer roof repairs in Dania Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We repair leaks, flashing issues, penetrations, and localized damage based on inspection findings and a defined scope of work."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a roof cost in Dania Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof pricing depends on roof size, roof type, tear-off requirements, and roof complexity. Start with the Dania Beach roof cost calculator for a ballpark estimate and monthly payment range: /locations/deerfield-beach/service-area/dania-beach/roof-cost-calculator."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if I need a repair or a full replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A roof inspection is the fastest way to determine the right path. We evaluate the roof surface, flashings, penetrations, leak points, and visible indicators of system age to determine whether repair or replacement makes more sense."
          }
        }
      ]
    };

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    [localBusinessSchema, breadcrumbSchema, faqSchema].forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      schemaScripts.forEach(script => script.remove());
    };
  }, []);

  const faqs = [
    {
      question: 'Do you provide roofing services in Dania Beach, FL?',
      answer: 'Yes. We provide residential and commercial roofing services throughout Dania Beach.'
    },
    {
      question: 'What roof types do you install in Dania Beach?',
      answer: 'We install shingle roofs, tile roofs, flat roofing systems, and mechanically seamed metal roofing systems.'
    },
    {
      question: 'Do you offer roof repairs in Dania Beach?',
      answer: 'Yes. We repair leaks, flashing issues, penetrations, and localized damage based on inspection findings and a defined scope of work.'
    },
    {
      question: 'How much does a roof cost in Dania Beach?',
      answer: 'Roof pricing depends on roof size, roof type, tear-off requirements, and roof complexity.',
      link: '/locations/deerfield-beach/service-area/dania-beach/roof-cost-calculator',
      linkText: 'Use the Dania Beach roof cost calculator'
    },
    {
      question: 'How do I know if I need a repair or a full replacement?',
      answer: 'A roof inspection is the fastest way to determine the right path. We evaluate the roof surface, flashings, penetrations, leak points, and visible indicators of system age to determine whether repair or replacement makes more sense.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <div className="pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Dania Beach</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-600/20">
              <MapPin className="w-4 h-4" />
              Dania Beach, FL
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Dania Beach, FL
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Dania Beach homeowners need roofing built for South Florida heat, wind, and seasonal storms. All Phase Construction USA provides roofing-only services in Dania Beach with a focus on clean workmanship, code-aligned systems, and clear communication from inspection through completion.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Services in Dania Beach
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-zinc-400 mb-8 leading-relaxed">
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Dania Beach and nearby communities. We provide complete roofing services for Dania Beach property owners, including:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Roof replacement (shingle, tile, flat, and mechanically seamed metal)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Roof repairs (leaks, flashing, penetrations, localized damage)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Roof inspections (maintenance, real estate, and pre-project planning)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Preventative maintenance to extend roof life and reduce leak risk</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Link
                  to="/roofing-services/roof-repair"
                  className="text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Roof Repair
                </Link>
                <span className="text-zinc-600">·</span>
                <Link
                  to="/tile-roofing"
                  className="text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Roof Replacement
                </Link>
                <span className="text-zinc-600">·</span>
                <Link
                  to="/roof-inspection"
                  className="text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Roof Inspection
                </Link>
                <span className="text-zinc-600">·</span>
                <Link
                  to="/metal-roofing"
                  className="text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Metal Roofing
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roof Cost Tools for Dania Beach
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-zinc-400 mb-8 leading-relaxed">
                If you're researching pricing, start with the Dania Beach roof cost calculator:
              </p>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Roof cost calculator:</h3>
                <Link
                  to="/locations/deerfield-beach/service-area/dania-beach/roof-cost-calculator"
                  className="text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  /locations/deerfield-beach/service-area/dania-beach/roof-cost-calculator
                </Link>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
                <h3 className="text-xl font-bold text-white mb-4">Monthly payment estimate:</h3>
                <p className="text-zinc-400 mb-4">
                  If you want to estimate monthly payments, use the financing calculator on that page:
                </p>
                <Link
                  to="/locations/deerfield-beach/service-area/dania-beach/roof-cost-calculator#finance-calculator"
                  className="text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  /locations/deerfield-beach/service-area/dania-beach/roof-cost-calculator#finance-calculator
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Dania Beach Homeowners Choose All Phase Construction USA
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Florida-licensed and insured roofing contractor</h3>
                    <p className="text-zinc-400 text-sm">
                      Fully licensed and insured for roofing work in South Florida.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Experienced with South Florida code requirements</h3>
                    <p className="text-zinc-400 text-sm">
                      We understand local building codes and HVHZ requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Home className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Clear scope, clean job sites, and dependable scheduling</h3>
                    <p className="text-zinc-400 text-sm">
                      Transparent communication and professional project management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Options for shingle, tile, flat roofing, and mechanically seamed metal systems</h3>
                    <p className="text-zinc-400 text-sm">
                      Complete roofing solutions for residential and commercial properties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions – Dania Beach Roofing
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
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
                      <p className="text-zinc-400 leading-relaxed mb-4">{faq.answer}</p>
                      {faq.link && (
                        <Link
                          to={faq.link}
                          className="text-red-500 hover:text-red-400 font-semibold transition-colors inline-block"
                        >
                          {faq.linkText}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your free roof inspection in Dania Beach. We'll assess your roof condition and provide clear recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection
              </Link>
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700"
              >
                <Phone className="w-5 h-5" />
                (754) 227-5605
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Free Inspection</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>No Obligation</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
