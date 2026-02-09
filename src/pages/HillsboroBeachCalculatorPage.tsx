import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function HillsboroBeachCalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuickFaq, setOpenQuickFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Hillsboro Beach Roof Cost Calculator | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Use this calculator for a ballpark estimate only. Roof pricing in South Florida is affected by coastal exposure, hurricane wind requirements, and material availability. Estimates are not guarantees.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Use this calculator for a ballpark estimate only. Roof pricing in South Florida is affected by coastal exposure, hurricane wind requirements, and material availability. Estimates are not guarantees.';
      document.head.appendChild(meta);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How accurate is the Hillsboro Beach roof cost calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator provides a rough estimate based on typical Hillsboro Beach homes. Final costs require an on-site inspection."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect roof cost in Hillsboro Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof size, material type, pitch, tear-off, decking repairs, and coastal wind-load codes affect pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits and code compliance included for Hillsboro Beach roofs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Permits and Florida Building Code compliance are required and can impact total cost."
          }
        },
        {
          "@type": "Question",
          "name": "Can I estimate monthly payments for a roof in Hillsboro Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The payment estimator shows approximate monthly costs based on financing terms."
          }
        }
      ]
    };

    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  const pricingData = [
    {
      system: 'Architectural Shingle Roof',
      perSquare: '$500 – $700',
      totalRange: '$14,000 – $24,000'
    },
    {
      system: 'Concrete or Clay Tile Roof',
      perSquare: '$1,000 – $1,550',
      totalRange: '$30,000 – $55,000'
    },
    {
      system: 'Mechanically Seamed Metal Roof',
      perSquare: '$1,200 – $1,850',
      totalRange: '$35,000 – $65,000'
    },
    {
      system: 'Flat / Low-Slope Roof',
      perSquare: '$600 – $950',
      totalRange: '$12,000 – $22,000'
    }
  ];

  const quickFaqs = [
    {
      question: 'How much does a new roof cost in Hillsboro Beach, FL?',
      answer: 'Most homes range from $14,000 to over $45,000 depending on roof type and size.'
    },
    {
      question: 'What is the cheapest roofing option in Hillsboro Beach?',
      answer: 'Architectural shingles typically have the lowest upfront cost.'
    },
    {
      question: 'How long does a roof last in Hillsboro Beach\'s climate?',
      answer: 'Shingle roofs average 15–20 years, while tile and metal roofs can last 30–50+ years.'
    },
    {
      question: 'Do roof prices increase after storms in Hillsboro Beach?',
      answer: 'Yes. Coastal storm activity often increases demand, inspections, and material costs.'
    },
    {
      question: 'Does insurance affect roof replacement cost in Hillsboro Beach?',
      answer: 'Insurance coverage depends on roof age, policy terms, and storm-related damage.'
    }
  ];

  const detailedFaqs = [
    {
      question: 'How accurate is the Hillsboro Beach roof cost calculator?',
      answer: 'The calculator provides a rough estimate based on typical Hillsboro Beach homes. Final costs require an on-site inspection.'
    },
    {
      question: 'What factors affect roof cost in Hillsboro Beach?',
      answer: 'Roof size, material type, pitch, tear-off, decking repairs, and coastal wind-load codes affect pricing.'
    },
    {
      question: 'Are permits and code compliance included for Hillsboro Beach roofs?',
      answer: 'Permits and Florida Building Code compliance are required and can impact total cost.'
    },
    {
      question: 'Can I estimate monthly payments for a roof in Hillsboro Beach?',
      answer: 'Yes. The payment estimator shows approximate monthly costs based on financing terms.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <div className="pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-zinc-500 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach" className="text-zinc-500 hover:text-white transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations" className="text-zinc-500 hover:text-white transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach/service-area/hillsboro-beach" className="text-zinc-500 hover:text-white transition-colors">
              Hillsboro Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Roof Cost Calculator</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 text-red-500 text-sm font-semibold mb-6">
              <Calculator className="w-4 h-4" />
              Roof Cost Calculator
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hillsboro Beach{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-4 leading-relaxed">
              Use this calculator for a ballpark estimate only. Roof pricing in South Florida is affected by coastal exposure, hurricane wind requirements, and material availability. Estimates are not guarantees.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
            <EmbeddedRoofCalculator
              city="Hillsboro Beach"
              county="Broward"
              isHVHZ={false}
            />
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Estimates in Hillsboro Beach by Roofing System
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These are typical installed price ranges for homes in Hillsboro Beach, FL. Actual costs vary by roof size, slope, tear-off needs, and Florida Building Code requirements.
            </p>
            <div className="max-w-5xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-700 bg-zinc-900/50">
                      <th className="text-left py-4 px-6 text-white font-semibold">Roofing System</th>
                      <th className="text-left py-4 px-6 text-white font-semibold">Typical Cost Per Square (100 sq ft)</th>
                      <th className="text-left py-4 px-6 text-white font-semibold">Estimated Total Cost Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((row, index) => (
                      <tr key={index} className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                        <td className="py-4 px-6 text-white font-medium">{row.system}</td>
                        <td className="py-4 px-6 text-zinc-300">{row.perSquare}</td>
                        <td className="py-4 px-6 text-zinc-300">{row.totalRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="monthly-payment" className="mb-20 scroll-mt-36">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in Hillsboro Beach?
            </h2>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Want a Monthly Payment Estimate?
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Use the financing calculator below to estimate monthly payments for your roofing project in Hillsboro Beach.
                </p>
              </div>
            </div>

            <div id="finance-calculator" className="scroll-mt-36">
              <EmbeddedRoofCalculator
                city="Hillsboro Beach"
                county="Broward"
                isHVHZ={false}
                defaultTab="financing"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Questions in Hillsboro Beach
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {quickFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenQuickFaq(openQuickFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    {openQuickFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openQuickFaq === index && (
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                      <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions – Hillsboro Beach Roof Cost Calculator
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {detailedFaqs.map((faq, index) => (
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

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for an Accurate Quote?
            </h2>
            <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              While our calculator provides helpful estimates, the best way to know your exact costs is with a free on-site inspection in Hillsboro Beach.
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
                <span>Same-Week Scheduling Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
