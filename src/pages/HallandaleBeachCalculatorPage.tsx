import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ChevronDown, ChevronUp, DollarSign, AlertCircle } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import CalculatorLeadCapture from '../components/CalculatorLeadCapture';

export default function HallandaleBeachCalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Hallandale Beach Roof Cost Calculator | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Use this calculator for a ballpark estimate only. Roof costs in South Florida vary due to coastal exposure, wind-load requirements, and roof design.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Use this calculator for a ballpark estimate only. Roof costs in South Florida vary due to coastal exposure, wind-load requirements, and roof design.';
      document.head.appendChild(meta);
    }

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Hallandale Beach Roof Cost Calculator",
        "description": "Calculate roof replacement costs for Hallandale Beach with detailed pricing ranges for shingle, tile, metal, and flat roofs.",
        "url": window.location.href,
        "about": {
          "@type": "Service",
          "serviceType": "Roof Cost Estimation",
          "areaServed": {
            "@type": "City",
            "name": "Hallandale Beach",
            "containedIn": {
              "@type": "State",
              "name": "Florida"
            }
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How accurate is the Hallandale Beach roof cost calculator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The calculator provides a rough estimate based on typical Hallandale Beach homes. Final costs require an on-site inspection."
            }
          },
          {
            "@type": "Question",
            "name": "What factors affect roof cost in Hallandale Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roof size, material, pitch, tear-off needs, decking repairs, and coastal wind-load codes impact pricing."
            }
          },
          {
            "@type": "Question",
            "name": "Are permits and code compliance included for Hallandale Beach roofs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Permits and Florida Building Code compliance are required and can affect total cost."
            }
          },
          {
            "@type": "Question",
            "name": "Can I estimate monthly payments for a roof in Hallandale Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The payment estimator shows approximate monthly costs based on financing terms."
            }
          }
        ]
      }
    ];

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(s => s.remove());

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      schemaScripts.forEach(s => s.remove());
    };
  }, []);

  const pricingData = [
    {
      system: 'Architectural Shingle Roof',
      perSquare: '$475 – $675',
      totalRange: '$13,000 – $22,000'
    },
    {
      system: 'Concrete or Clay Tile Roof',
      perSquare: '$950 – $1,450',
      totalRange: '$26,000 – $48,000'
    },
    {
      system: 'Mechanically Seamed Metal Roof',
      perSquare: '$1,150 – $1,750',
      totalRange: '$30,000 – $58,000'
    },
    {
      system: 'Flat / Low-Slope Roof',
      perSquare: '$575 – $900',
      totalRange: '$11,000 – $20,000'
    }
  ];

  const costQuestions = [
    {
      question: 'How much does a new roof cost in Hallandale Beach, FL?',
      answer: 'Most homes range from $13,000 to $35,000 depending on roof type and size.'
    },
    {
      question: 'What is the cheapest roofing option in Hallandale Beach?',
      answer: 'Architectural shingles usually have the lowest upfront cost.'
    },
    {
      question: 'How long does a roof last in Hallandale Beach\'s climate?',
      answer: 'Shingle roofs average 15–20 years; tile and metal roofs can last 30–50+ years.'
    },
    {
      question: 'Do roof prices increase after storms in Hallandale Beach?',
      answer: 'Yes. Coastal storm activity often increases demand, inspections, and material costs.'
    },
    {
      question: 'Does insurance affect roof replacement cost in Hallandale Beach?',
      answer: 'Insurance coverage depends on policy terms, roof age, and storm-related damage.'
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the Hallandale Beach roof cost calculator?',
      answer: 'The calculator provides a rough estimate based on typical Hallandale Beach homes. Final costs require an on-site inspection.'
    },
    {
      question: 'What factors affect roof cost in Hallandale Beach?',
      answer: 'Roof size, material, pitch, tear-off needs, decking repairs, and coastal wind-load codes impact pricing.'
    },
    {
      question: 'Are permits and code compliance included for Hallandale Beach roofs?',
      answer: 'Permits and Florida Building Code compliance are required and can affect total cost.'
    },
    {
      question: 'Can I estimate monthly payments for a roof in Hallandale Beach?',
      answer: 'Yes. The payment estimator shows approximate monthly costs based on financing terms.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <div className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-zinc-500 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations" className="text-zinc-500 hover:text-white transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach/service-area/hallandale-beach" className="text-zinc-500 hover:text-white transition-colors">
              Hallandale Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Roof Cost Calculator</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-600/20">
              <Calculator className="w-4 h-4" />
              Hallandale Beach Roof Cost Calculator
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hallandale Beach{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <div className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-amber-200/90 leading-relaxed text-left">
                  Use this calculator for a ballpark estimate only. Roof costs in South Florida vary due to coastal exposure, wind-load requirements, and roof design. Estimates are not guarantees.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Calculator
            </h2>
            <EmbeddedRoofCalculator
              city="Hallandale Beach"
              county="Broward"
              isHVHZ={true}
            />
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Estimates in Hallandale Beach by Roofing System
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These are typical installed price ranges for homes in Hallandale Beach, FL. Actual costs vary by roof size, slope, tear-off needs, and Florida code requirements.
            </p>
            <div className="max-w-5xl mx-auto">
              <div className="hidden md:block bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-zinc-900/50 border-b border-zinc-800">
                      <th className="px-6 py-4 text-left text-white font-semibold">Roofing System</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Typical Cost Per Square (100 sq ft)</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Estimated Total Cost Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((item, index) => (
                      <tr key={index} className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-900/30 transition-colors">
                        <td className="px-6 py-4 text-zinc-300 font-medium">{item.system}</td>
                        <td className="px-6 py-4 text-zinc-400">{item.perSquare}</td>
                        <td className="px-6 py-4 text-zinc-400 font-semibold">{item.totalRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:hidden space-y-4">
                {pricingData.map((item, index) => (
                  <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">{item.system}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Per Square:</span>
                        <span className="text-zinc-300 font-medium">{item.perSquare}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Total Range:</span>
                        <span className="text-red-500 font-semibold">{item.totalRange}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="monthly-payment" className="mb-20 scroll-mt-32">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in Hallandale Beach?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Want a Monthly Payment Estimate?
            </p>
          </div>

          <div id="finance-calculator" className="mb-20 scroll-mt-32">
            <div className="bg-gradient-to-br from-red-900/20 to-zinc-900/20 border border-red-900/30 rounded-2xl p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <DollarSign className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Estimate Your Monthly Payment
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Use the financing calculator below to estimate monthly payments for your Hallandale Beach roofing project.
                </p>
              </div>
              <CalculatorLeadCapture
                city="Hallandale Beach"
                source="Hallandale Beach Roof Cost Calculator - Finance Calculator"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Questions in Hallandale Beach
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {costQuestions.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{item.question}</span>
                    {openQuestion === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                      <p className="text-zinc-400 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions – Hallandale Beach Roof Cost Calculator
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
                    <h3 className="font-semibold text-white pr-4 text-lg">{faq.question}</h3>
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
        </div>
      </div>
    </div>
  );
}
