import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ArrowRight, ChevronDown, ChevronUp, Home, Wrench, Search, Shield } from 'lucide-react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function DaviePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Davie Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Davie FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Davie FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const coordinates = getCityCoordinates('Davie');
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Davie',
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
      { name: 'Davie', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/davie' }
    ]);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide roofing services in Davie, FL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide residential and commercial roofing services throughout Davie."
          }
        },
        {
          "@type": "Question",
          "name": "What roof types do you install in Davie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We install shingle roofs, tile roofs, flat roofing systems, and mechanically seamed metal roofing systems."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer roof repairs in Davie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We repair leaks, flashing issues, penetrations, and localized damage based on inspection findings and a defined scope of work."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a roof cost in Davie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof pricing depends on roof size, roof type, tear-off requirements, and roof complexity. Start with our roof cost calculator for a ballpark estimate and monthly payment range: https://allphaseconstructionfl.com/roof-cost-calculator/"
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if I need a repair or a replacement?",
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
      question: 'Do you provide roofing services in Davie, FL?',
      shortAnswer: 'Yes. We provide residential and commercial roofing services throughout Davie.',
      answer: 'Yes. We provide residential and commercial roofing services throughout Davie.'
    },
    {
      question: 'What roof types do you install in Davie?',
      shortAnswer: 'Shingle, tile, flat roofing systems, and mechanically seamed metal roofing systems.',
      answer: 'We install shingle roofs, tile roofs, flat roofing systems, and mechanically seamed metal roofing systems.'
    },
    {
      question: 'Do you offer roof repairs in Davie?',
      shortAnswer: 'Yes. We repair leaks, flashing issues, penetrations, and localized damage based on inspection findings.',
      answer: 'Yes. We repair leaks, flashing issues, penetrations, and localized damage based on inspection findings and a defined scope of work.'
    },
    {
      question: 'How much does a roof cost in Davie?',
      shortAnswer: 'Costs vary by size, roof type, and complexity. Use the Davie roof cost calculator for a quick estimate and monthly payment range.',
      answer: (
        <div>
          <p className="mb-3">
            Roof pricing depends on roof size, roof type, tear-off requirements, and roof complexity. Start here for a ballpark estimate:
          </p>
          <a
            href="https://allphaseconstructionfl.com/roof-cost-calculator/"
            className="text-red-500 hover:text-red-400 underline transition-colors block mb-3"
          >
            https://allphaseconstructionfl.com/roof-cost-calculator/
          </a>
          <p>
            For monthly payments, jump directly to the financing calculator section:
          </p>
          <a
            href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
            className="text-red-500 hover:text-red-400 underline transition-colors block"
          >
            https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator
          </a>
        </div>
      )
    },
    {
      question: 'How do I know if I need a repair or a replacement?',
      shortAnswer: 'A roof inspection determines whether a targeted repair is sufficient or replacement is the smarter option.',
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
            <Link to="/locations/deerfield-beach/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Davie</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Services in Davie, FL
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Davie and nearby communities. Davie homeowners need roofing systems built for South Florida heat, wind, and seasonal storms. All Phase Construction USA provides roofing-only services in Davie with clean workmanship, code-aligned installation, and clear communication from inspection through completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
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
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roofing Services in Davie
            </h2>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 mb-8">
              <p className="text-zinc-400 mb-6 leading-relaxed">
                We provide complete roofing services for Davie property owners, including:
              </p>
              <ul className="space-y-3 text-zinc-400 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Roof replacement (shingle, tile, flat, and mechanically seamed metal)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Roof repairs (leaks, flashing, penetrations, localized damage)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Roof inspections (maintenance, real estate, and pre-project planning)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Preventative maintenance to extend roof life and reduce leak risk</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-white font-semibold mb-3">Explore services:</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/roof-repair"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 border border-zinc-700 hover:border-red-600"
                  >
                    <Wrench className="w-4 h-4" />
                    Roof Repair
                  </Link>
                  <Link
                    to="/roof-inspection/"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 border border-zinc-700 hover:border-red-600"
                  >
                    <Search className="w-4 h-4" />
                    Roof Inspection
                  </Link>
                  <Link
                    to="/metal-roofing/"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 border border-zinc-700 hover:border-red-600"
                  >
                    <Shield className="w-4 h-4" />
                    Metal Roofing
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Tools for Davie
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-600 transition-colors">
                    Roof Cost Calculator
                  </h3>
                  <ArrowRight className="w-6 h-6 text-red-500 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Start with the Davie roof cost calculator to get a ballpark estimate based on roof size and roof type.
                </p>
              </a>
              <a
                href="https://allphaseconstructionfl.com/roof-cost-calculator/#finance-calculator"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-600 transition-colors">
                    Monthly Payment Estimate
                  </h3>
                  <ArrowRight className="w-6 h-6 text-red-500 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Estimate monthly payments on the same page using the financing calculator.
                </p>
              </a>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Helpful Internal Links
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/roof-inspection/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                  Not sure what you need yet?
                </h3>
                <p className="text-zinc-400 text-sm mb-3">Start with a roof inspection</p>
                <div className="flex items-center text-red-500 font-medium text-sm">
                  <span>Roof Inspection</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link
                to="/roof-repair"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                  Need a fast fix for a leak?
                </h3>
                <p className="text-zinc-400 text-sm mb-3">Targeted roof repairs</p>
                <div className="flex items-center text-red-500 font-medium text-sm">
                  <span>Roof Repair</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link
                to="/residential-roofing/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                  Planning a full upgrade?
                </h3>
                <p className="text-zinc-400 text-sm mb-3">Complete roof replacement</p>
                <div className="flex items-center text-red-500 font-medium text-sm">
                  <span>Roof Replacement</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions – Davie Roofing
            </h2>

            <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="px-6 py-4 text-left text-white font-semibold">Question</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Short Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faqs.map((faq, index) => (
                      <tr key={index} className="border-b border-zinc-800 last:border-b-0">
                        <td className="px-6 py-4 text-zinc-300">{faq.question}</td>
                        <td className="px-6 py-4 text-zinc-400">{faq.shortAnswer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">FAQ Answers – Davie Roofing</h3>
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
                      <div className="text-zinc-400 leading-relaxed">{faq.answer}</div>
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
              Schedule your free roof inspection in Davie today. We'll assess your roof's condition and provide honest recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact/"
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
                <span>HVHZ Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
