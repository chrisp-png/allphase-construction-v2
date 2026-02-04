import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function LoxahatcheeGrovesCalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Loxahatchee Groves Roof Cost Calculator | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Use this roof cost calculator to get a fast ballpark estimate for Loxahatchee Groves roofing projects. Final pricing depends on inspection, roof complexity, and material selection.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Use this roof cost calculator to get a fast ballpark estimate for Loxahatchee Groves roofing projects. Final pricing depends on inspection, roof complexity, and material selection.';
      document.head.appendChild(meta);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How accurate is the Loxahatchee Groves roof cost calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator provides a rough estimate based on typical Loxahatchee Groves homes. Final costs require an on-site inspection."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect roof cost in Loxahatchee Groves?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof size, material choice, pitch, tear-off, decking repairs, and Florida wind-load codes affect cost."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits and code compliance included for Loxahatchee Groves roofs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Permits and Florida Building Code compliance are required and can impact total pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I estimate monthly payments for a roof in Loxahatchee Groves?",
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

  const questions = [
    {
      question: 'How much does a new roof cost in Loxahatchee Groves, FL?',
      answer: 'Most homes range from $13,000 to $35,000 depending on roof size and material.'
    },
    {
      question: 'What is the cheapest roofing option in Loxahatchee Groves?',
      answer: 'Architectural shingles typically have the lowest upfront cost.'
    },
    {
      question: 'How long does a roof last in Loxahatchee Groves\' climate?',
      answer: 'Shingle roofs average 15–20 years, while tile and metal roofs can last 30–50+ years.'
    },
    {
      question: 'Do roof prices increase after storms in Loxahatchee Groves?',
      answer: 'Yes. Post-storm demand, inspections, and material availability can raise prices.'
    },
    {
      question: 'Does insurance affect roof replacement cost in Loxahatchee Groves?',
      answer: 'Insurance coverage depends on roof age, policy terms, and cause of damage.'
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the Loxahatchee Groves roof cost calculator?',
      answer: 'The calculator provides a rough estimate based on typical Loxahatchee Groves homes. Final costs require an on-site inspection.'
    },
    {
      question: 'What factors affect roof cost in Loxahatchee Groves?',
      answer: 'Roof size, material choice, pitch, tear-off, decking repairs, and Florida wind-load codes affect cost.'
    },
    {
      question: 'Are permits and code compliance included for Loxahatchee Groves roofs?',
      answer: 'Permits and Florida Building Code compliance are required and can impact total pricing.'
    },
    {
      question: 'Can I estimate monthly payments for a roof in Loxahatchee Groves?',
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
            <Link to="/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach/service-area/loxahatchee-groves" className="text-zinc-400 hover:text-red-600 transition-colors">
              Loxahatchee Groves
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
              Loxahatchee Groves{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Use this calculator for a ballpark estimate only. Roof pricing in South Florida varies due to wind-load requirements, material availability, and rural property roof designs. Estimates are not guarantees.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
          </div>

          <EmbeddedRoofCalculator
            city="Loxahatchee Groves"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Estimates in Loxahatchee Groves by Roofing System
            </h2>
            <p className="text-zinc-400 text-center max-w-4xl mx-auto mb-8 leading-relaxed">
              These are typical installed price ranges for homes in Loxahatchee Groves, FL. Actual costs vary by roof size, slope, tear-off needs, and Florida Building Code requirements.
            </p>
            <div className="max-w-6xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-700 bg-zinc-900/50">
                      <th className="text-left py-4 px-6 text-white font-semibold">Roofing System</th>
                      <th className="text-left py-4 px-6 text-white font-semibold">Typical Cost Per Square (100 sq ft)</th>
                      <th className="text-left py-4 px-6 text-white font-semibold">Estimated Total Cost Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">Architectural Shingle Roof</td>
                      <td className="py-4 px-6">$450 – $650</td>
                      <td className="py-4 px-6">$13,000 – $22,000</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">Concrete or Clay Tile Roof</td>
                      <td className="py-4 px-6">$900 – $1,400</td>
                      <td className="py-4 px-6">$25,000 – $45,000</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-6 font-medium text-white">Mechanically Seamed Metal Roof</td>
                      <td className="py-4 px-6">$1,100 – $1,700</td>
                      <td className="py-4 px-6">$30,000 – $58,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-white">Flat / Low-Slope Roof</td>
                      <td className="py-4 px-6">$550 – $850</td>
                      <td className="py-4 px-6">$11,000 – $19,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-20" id="monthly-payment">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in Loxahatchee Groves?
            </h2>
          </div>

          <div className="mb-20" id="finance-calculator">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Estimate monthly payments for your Loxahatchee Groves roof using the financing calculator below.
            </p>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
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
              Roof Cost Questions in Loxahatchee Groves
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{question.question}</span>
                    {openQuestion === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                      <p className="text-zinc-400 leading-relaxed">{question.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions – Loxahatchee Groves Roof Cost Calculator
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
              Ready for an Accurate Quote?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Get a detailed, site-specific estimate. Schedule your free roof inspection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}
