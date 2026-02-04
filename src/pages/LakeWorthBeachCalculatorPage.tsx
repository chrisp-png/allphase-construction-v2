import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function LakeWorthBeachCalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Lake Worth Beach Roof Cost Calculator | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Use this calculator for a ballpark estimate only. Roof pricing in South Florida is influenced by coastal weather, wind-load requirements, and material availability.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Use this calculator for a ballpark estimate only. Roof pricing in South Florida is influenced by coastal weather, wind-load requirements, and material availability.';
      document.head.appendChild(meta);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How accurate is the Lake Worth Beach roof cost calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator provides a rough estimate based on typical Lake Worth Beach homes. Final costs require an on-site inspection."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect roof cost in Lake Worth Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof size, material type, pitch, tear-off, decking repairs, and coastal wind-load codes affect pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits and code compliance included for Lake Worth Beach roofs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Permits and Florida Building Code compliance are required and can impact total cost."
          }
        },
        {
          "@type": "Question",
          "name": "Can I estimate monthly payments for a roof in Lake Worth Beach?",
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

  const faqs = [
    {
      question: 'How accurate is the Lake Worth Beach roof cost calculator?',
      answer: "The calculator provides a rough estimate based on typical Lake Worth Beach homes. Final costs require an on-site inspection."
    },
    {
      question: 'What factors affect roof cost in Lake Worth Beach?',
      answer: "Roof size, material type, pitch, tear-off, decking repairs, and coastal wind-load codes affect pricing."
    },
    {
      question: 'Are permits and code compliance included for Lake Worth Beach roofs?',
      answer: "Permits and Florida Building Code compliance are required and can impact total cost."
    },
    {
      question: 'Can I estimate monthly payments for a roof in Lake Worth Beach?',
      answer: "Yes. The payment estimator shows approximate monthly costs based on financing terms."
    }
  ];

  const costQuestions = [
    {
      question: 'How much does a new roof cost in Lake Worth Beach, FL?',
      answer: "Most homes range from $13,000 to $35,000 depending on roof type and size."
    },
    {
      question: 'What is the cheapest roofing option in Lake Worth Beach?',
      answer: "Architectural shingles typically offer the lowest upfront cost."
    },
    {
      question: "How long does a roof last in Lake Worth Beach's climate?",
      answer: "Shingle roofs average 15–20 years, while tile and metal roofs can last 30–50+ years."
    },
    {
      question: 'Do roof prices increase after storms in Lake Worth Beach?',
      answer: "Yes. Coastal storms often increase demand, inspections, and material costs."
    },
    {
      question: 'Does insurance affect roof replacement cost in Lake Worth Beach?',
      answer: "Insurance coverage depends on roof age, policy terms, and storm-related damage."
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
            <Link to="/locations/deerfield-beach/service-area/lake-worth-beach" className="text-zinc-400 hover:text-red-600 transition-colors">
              Lake Worth Beach
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
              Lake Worth Beach{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Use this calculator for a ballpark estimate only. Roof pricing in South Florida is influenced by coastal weather, wind-load requirements, and material availability. Estimates are not guarantees.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
          </div>

          <EmbeddedRoofCalculator
            city="Lake Worth Beach"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Estimates in Lake Worth Beach by Roofing System
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These are typical installed price ranges for homes in Lake Worth Beach, FL. Actual costs vary by roof size, slope, tear-off needs, and Florida Building Code requirements.
            </p>
            <div className="max-w-5xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Roofing System</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Typical Cost Per Square (100 sq ft)</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Estimated Total Cost Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr className="hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4 text-zinc-300">Architectural Shingle Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$475 – $675</td>
                      <td className="px-6 py-4 text-zinc-300">$13,000 – $22,000</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4 text-zinc-300">Concrete or Clay Tile Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$950 – $1,450</td>
                      <td className="px-6 py-4 text-zinc-300">$26,000 – $48,000</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4 text-zinc-300">Mechanically Seamed Metal Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$1,150 – $1,750</td>
                      <td className="px-6 py-4 text-zinc-300">$30,000 – $58,000</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4 text-zinc-300">Flat / Low-Slope Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$575 – $900</td>
                      <td className="px-6 py-4 text-zinc-300">$11,000 – $20,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="finance-calculator" className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Estimate monthly payments for your Lake Worth Beach roof using the financing calculator below.
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

          <div id="monthly-payment" className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in Lake Worth Beach?
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {costQuestions.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                >
                  <h3 className="font-semibold text-white mb-2">{item.question}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions – Lake Worth Beach Roof Cost Calculator
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
              Ready for Roofing Services in Lake Worth Beach?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free roof inspection with our South Florida roofing team today.
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
                Call (754) 227-5605
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
