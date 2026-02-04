import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp, Phone, DollarSign } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function LauderhillCalculatorPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Lauderhill Roof Cost Calculator | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Use this calculator for a ballpark estimate only. Roof pricing in South Florida varies due to wind-load requirements, material availability, and roof design.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Use this calculator for a ballpark estimate only. Roof pricing in South Florida varies due to wind-load requirements, material availability, and roof design.';
      document.head.appendChild(meta);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How accurate is the Lauderhill roof cost calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator provides a rough estimate based on typical Lauderhill homes. Final pricing requires an on-site inspection."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect roof cost in Lauderhill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof size, material choice, pitch, tear-off, decking repairs, and Florida wind-load codes affect cost."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits and code compliance included for Lauderhill roofs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Permits and Florida Building Code compliance are required and can impact total pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I estimate monthly payments for a roof in Lauderhill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The payment estimator provides approximate monthly costs based on financing terms."
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
      costPerSquare: '$450 – $650',
      totalRange: '$12,000 – $20,000'
    },
    {
      system: 'Concrete or Clay Tile Roof',
      costPerSquare: '$900 – $1,400',
      totalRange: '$24,000 – $44,000'
    },
    {
      system: 'Mechanically Seamed Metal Roof',
      costPerSquare: '$1,100 – $1,700',
      totalRange: '$28,000 – $55,000'
    },
    {
      system: 'Flat / Low-Slope Roof',
      costPerSquare: '$550 – $850',
      totalRange: '$10,000 – $18,000'
    }
  ];

  const questions = [
    {
      question: 'How much does a new roof cost in Lauderhill, FL?',
      answer: 'Most homes range from $12,000 to $30,000 depending on roof type and size.'
    },
    {
      question: 'What is the cheapest roofing option in Lauderhill?',
      answer: 'Architectural shingles typically have the lowest upfront cost.'
    },
    {
      question: 'How long does a roof last in Lauderhill\'s climate?',
      answer: 'Shingle roofs average 15–20 years, while tile and metal roofs can last 30–50+ years.'
    },
    {
      question: 'Do roof prices increase after storms in Lauderhill?',
      answer: 'Yes. Post-storm demand, inspections, and material costs often increase pricing.'
    },
    {
      question: 'Does insurance affect roof replacement cost in Lauderhill?',
      answer: 'Insurance coverage depends on roof age, policy terms, and cause of damage.'
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the Lauderhill roof cost calculator?',
      answer: 'The calculator provides a rough estimate based on typical Lauderhill homes. Final pricing requires an on-site inspection.'
    },
    {
      question: 'What factors affect roof cost in Lauderhill?',
      answer: 'Roof size, material choice, pitch, tear-off, decking repairs, and Florida wind-load codes affect cost.'
    },
    {
      question: 'Are permits and code compliance included for Lauderhill roofs?',
      answer: 'Permits and Florida Building Code compliance are required and can impact total pricing.'
    },
    {
      question: 'Can I estimate monthly payments for a roof in Lauderhill?',
      answer: 'Yes. The payment estimator provides approximate monthly costs based on financing terms.'
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
            <Link to="/locations/deerfield-beach/service-area/lauderhill" className="text-zinc-400 hover:text-red-600 transition-colors">
              Lauderhill
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Roof Cost Calculator</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-600/20">
              <Calculator className="w-4 h-4" />
              Roof Cost Calculator
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Lauderhill{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Use this calculator for a ballpark estimate only. Roof pricing in South Florida varies due to wind-load requirements, material availability, and roof design. Estimates are not guarantees.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
          </div>

          <EmbeddedRoofCalculator
            city="Lauderhill"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Estimates in Lauderhill by Roofing System
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These are typical installed price ranges for homes in Lauderhill, FL. Actual costs vary by roof size, slope, tear-off needs, and Florida Building Code requirements.
            </p>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left px-6 py-4 text-white font-semibold">Roofing System</th>
                      <th className="text-left px-6 py-4 text-white font-semibold">Typical Cost Per Square (100 sq ft)</th>
                      <th className="text-left px-6 py-4 text-white font-semibold">Estimated Total Cost Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((item, index) => (
                      <tr key={index} className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                        <td className="px-6 py-4 text-zinc-300">{item.system}</td>
                        <td className="px-6 py-4 text-zinc-300">{item.costPerSquare}</td>
                        <td className="px-6 py-4 text-zinc-300 font-semibold">{item.totalRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-20" id="monthly-payment">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in Lauderhill?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto leading-relaxed">
              Use the calculator above to get a fast estimate based on your roof size and material preferences. Final pricing depends on your specific project requirements.
            </p>
          </div>

          <div className="mb-20" id="finance-calculator">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate?
            </h2>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="w-8 h-8 text-red-500" />
              </div>
              <p className="text-zinc-300 mb-6">
                Contact us to discuss financing options and payment plans for your roofing project.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                Request Financing Information
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roof Cost Questions in Lauderhill
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {questions.map((item, index) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions – Lauderhill Roof Cost Calculator
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
                      <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for an Accurate Quote for Your Lauderhill Roof?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Get a detailed, site-specific estimate based on your actual roof conditions. Schedule your free roof inspection today.
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
                <span>Same-Week Scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
