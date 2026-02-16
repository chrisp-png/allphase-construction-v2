import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function HaverillCalculatorPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Haverhill Roof Cost Calculator | All Phase Construction USA';

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
          "name": "How accurate is the Haverhill roof cost calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator provides a rough estimate based on typical Haverhill homes. Final pricing requires an on-site inspection."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect roof cost in Haverhill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof size, material choice, pitch, tear-off, decking repairs, and Florida wind-load codes affect cost."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits and code compliance included for Haverhill roofs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Permits and Florida Building Code compliance are required and can impact total pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I estimate monthly payments for a roof in Haverhill?",
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

  const costQuestions = [
    {
      question: 'How much does a new roof cost in Haverhill, FL?',
      answer: 'Most homes range from $12,000 to $30,000 depending on roof type and size.'
    },
    {
      question: 'What is the cheapest roofing option in Haverhill?',
      answer: 'Architectural shingles typically have the lowest upfront cost.'
    },
    {
      question: 'How long does a roof last in Haverhill\'s climate?',
      answer: 'Shingle roofs last about 15–20 years, while tile and metal can last 30–50+ years.'
    },
    {
      question: 'Do roof prices increase after storms in Haverhill?',
      answer: 'Yes. Post-storm demand, inspections, and material costs often increase pricing.'
    },
    {
      question: 'Does insurance affect roof replacement cost in Haverhill?',
      answer: 'Insurance coverage depends on roof age, policy terms, and cause of damage.'
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the Haverhill roof cost calculator?',
      answer: "The calculator provides a rough estimate based on typical Haverhill homes. Final pricing requires an on-site inspection."
    },
    {
      question: 'What factors affect roof cost in Haverhill?',
      answer: "Roof size, material choice, pitch, tear-off, decking repairs, and Florida wind-load codes affect cost."
    },
    {
      question: 'Are permits and code compliance included for Haverhill roofs?',
      answer: "Permits and Florida Building Code compliance are required and can impact total pricing."
    },
    {
      question: 'Can I estimate monthly payments for a roof in Haverhill?',
      answer: "Yes. The payment estimator provides approximate monthly costs based on financing terms."
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
            <Link to="/locations/deerfield-beach/" className="text-zinc-500 hover:text-white transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach/service-area/haverhill/" className="text-zinc-500 hover:text-white transition-colors">
              Haverhill
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Roof Cost Calculator</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-600/20">
              <Calculator className="w-4 h-4" />
              Roof Cost Calculator
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Haverhill{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-amber-200 text-sm leading-relaxed text-left">
                  Use this calculator for a ballpark estimate only. Roof pricing in South Florida varies due to wind-load requirements, material availability, and roof design. Estimates are not guarantees.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
          </div>

          <EmbeddedRoofCalculator
            city="Haverhill"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Estimates in Haverhill by Roofing System
            </h2>
            <p className="text-zinc-400 text-center max-w-4xl mx-auto mb-8 leading-relaxed">
              These are typical installed price ranges for homes in Haverhill, FL. Actual costs vary by roof size, slope, tear-off needs, and Florida Building Code requirements.
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
                  <tbody className="text-zinc-300">
                    <tr className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                      <td className="py-4 px-6 font-medium">Architectural Shingle Roof</td>
                      <td className="py-4 px-6">$450 – $650</td>
                      <td className="py-4 px-6 text-green-400 font-semibold">$12,000 – $20,000</td>
                    </tr>
                    <tr className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                      <td className="py-4 px-6 font-medium">Concrete or Clay Tile Roof</td>
                      <td className="py-4 px-6">$900 – $1,400</td>
                      <td className="py-4 px-6 text-blue-400 font-semibold">$24,000 – $44,000</td>
                    </tr>
                    <tr className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                      <td className="py-4 px-6 font-medium">Mechanically Seamed Metal Roof</td>
                      <td className="py-4 px-6">$1,100 – $1,700</td>
                      <td className="py-4 px-6 text-purple-400 font-semibold">$28,000 – $55,000</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/30 transition-colors">
                      <td className="py-4 px-6 font-medium">Flat / Low-Slope Roof</td>
                      <td className="py-4 px-6">$550 – $850</td>
                      <td className="py-4 px-6 text-orange-400 font-semibold">$10,000 – $18,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="finance-calculator" className="mb-20 scroll-mt-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in Haverhill?
            </h2>
          </div>

          <div id="monthly-payment" className="mb-20 scroll-mt-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Estimate monthly payments for your Haverhill roof using financing options.
            </p>
            <div className="bg-gradient-to-br from-blue-900/20 to-zinc-900/20 border border-blue-900/30 rounded-lg p-8 text-center max-w-3xl mx-auto">
              <p className="text-zinc-300 mb-6 leading-relaxed">
                Contact us to discuss financing options and payment plans for your Haverhill roofing project. We offer flexible terms to fit your budget.
              </p>
              <Link
                to="/contact/"
                className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                Request Financing Information
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Questions in Haverhill
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
              Frequently Asked Questions – Haverhill Roof Cost Calculator
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

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for an Accurate Quote?
            </h2>
            <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a detailed, site-specific estimate. Schedule your free roof inspection today.
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
