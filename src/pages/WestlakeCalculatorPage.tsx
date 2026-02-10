import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp, Phone, AlertCircle } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function WestlakeCalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCostFaq, setOpenCostFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Westlake Roof Cost Calculator | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your Westlake roof replacement cost. Instant estimates for shingle, tile, metal, and flat roofing. Free financing options available. Licensed & insured.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Calculate your Westlake roof replacement cost. Instant estimates for shingle, tile, metal, and flat roofing. Free financing options available. Licensed & insured.';
      document.head.appendChild(meta);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How accurate is the Westlake roof cost calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator provides a rough estimate based on typical Westlake homes. Final costs require an on-site inspection."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect roof cost in Westlake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof size, material type, pitch, tear-off, decking repairs, and Florida wind-load codes affect pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits and code compliance included for Westlake roofs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Permits and Florida Building Code compliance are required and can impact total cost."
          }
        },
        {
          "@type": "Question",
          "name": "Can I estimate monthly payments for a roof in Westlake?",
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

  const costFaqs = [
    {
      question: 'How much does a new roof cost in Westlake, FL?',
      answer: "Most homes range from $13,000 to $35,000 depending on roof type and size."
    },
    {
      question: 'What is the cheapest roofing option in Westlake?',
      answer: "Architectural shingles usually have the lowest upfront cost."
    },
    {
      question: 'How long does a roof last in Westlake\'s climate?',
      answer: "Shingle roofs average 15–20 years, while tile and metal roofs can last 30–50+ years."
    },
    {
      question: 'Do roof prices increase after storms in Westlake?',
      answer: "Yes. Post-storm demand, inspections, and material costs often increase pricing."
    },
    {
      question: 'Does insurance affect roof replacement cost in Westlake?',
      answer: "Insurance coverage depends on roof age, policy terms, and cause of damage."
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the Westlake roof cost calculator?',
      answer: "The calculator provides a rough estimate based on typical Westlake homes. Final costs require an on-site inspection."
    },
    {
      question: 'What factors affect roof cost in Westlake?',
      answer: "Roof size, material type, pitch, tear-off, decking repairs, and Florida wind-load codes affect pricing."
    },
    {
      question: 'Are permits and code compliance included for Westlake roofs?',
      answer: "Permits and Florida Building Code compliance are required and can impact total cost."
    },
    {
      question: 'Can I estimate monthly payments for a roof in Westlake?',
      answer: "Yes. The payment estimator shows approximate monthly costs based on financing terms."
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
            <Link to="/locations/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach/service-area/westlake" className="text-zinc-400 hover:text-red-600 transition-colors">
              Westlake
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
              Westlake{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <div className="bg-amber-600/10 border border-amber-600/20 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-amber-200 text-sm text-left leading-relaxed">
                Use this calculator for a ballpark estimate only. Roof pricing in South Florida varies due to wind-load requirements, newer construction standards, and material availability. Estimates are not guarantees.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
          </div>

          <EmbeddedRoofCalculator
            city="Westlake"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Estimates in Westlake by Roofing System
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These are typical installed price ranges for homes in Westlake, FL. Actual costs vary by roof size, slope, tear-off needs, and Florida Building Code requirements.
            </p>
            <div className="max-w-5xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="px-6 py-4 text-left text-white font-semibold">Roofing System</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Typical Cost Per Square (100 sq ft)</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Estimated Total Cost Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="px-6 py-4 text-zinc-300">Architectural Shingle Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$475 – $675</td>
                      <td className="px-6 py-4 text-zinc-300">$13,000 – $22,000</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="px-6 py-4 text-zinc-300">Concrete or Clay Tile Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$950 – $1,450</td>
                      <td className="px-6 py-4 text-zinc-300">$26,000 – $48,000</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="px-6 py-4 text-zinc-300">Mechanically Seamed Metal Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$1,150 – $1,750</td>
                      <td className="px-6 py-4 text-zinc-300">$30,000 – $58,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-zinc-300">Flat / Low-Slope Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$575 – $900</td>
                      <td className="px-6 py-4 text-zinc-300">$11,000 – $20,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="finance-calculator" className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Estimate monthly payments for your Westlake roof using the financing calculator above. Scroll up to the calculator section and click on the "Financing" tab to see payment options.
            </p>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center max-w-4xl mx-auto">
              <p className="text-zinc-300 mb-6">
                Need help with financing? Contact us to discuss available payment plans and financing options for your Westlake roofing project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
                >
                  Request Financing Information
                </Link>
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 border border-zinc-700"
                >
                  <Phone className="w-5 h-5" />
                  (754) 227-5605
                </a>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roof Cost Questions in Westlake
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {costFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenCostFaq(openCostFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    {openCostFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openCostFaq === index && (
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                      <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions – Westlake Roof Cost Calculator
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
              Get a detailed, site-specific estimate. Schedule your free roof inspection in Westlake today.
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
