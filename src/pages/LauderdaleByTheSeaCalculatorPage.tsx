import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function LauderdaleByTheSeaCalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Lauderdale By The Sea Roof Cost Calculator | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Use this tool for a ballpark estimate only. Roof pricing in South Florida is affected by coastal exposure, wind codes, and material requirements. Estimates are not guarantees.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Use this tool for a ballpark estimate only. Roof pricing in South Florida is affected by coastal exposure, wind codes, and material requirements. Estimates are not guarantees.';
      document.head.appendChild(meta);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How accurate is the Lauderdale By The Sea roof cost calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It provides a general estimate based on typical homes and South Florida pricing. Final costs require a physical inspection."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect roof cost in Lauderdale By The Sea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof size, material, pitch, tear-off needs, decking repairs, and coastal wind-load codes all influence pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits and code compliance included for Lauderdale By The Sea roofs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Permits and Florida Building Code compliance are required and can affect the final cost."
          }
        },
        {
          "@type": "Question",
          "name": "Can I estimate monthly payments for a roof in Lauderdale By The Sea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The payment estimator provides approximate monthly payments based on financing terms."
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
      costPerSquare: '$475 – $675',
      totalRange: '$13,000 – $21,000'
    },
    {
      system: 'Concrete or Clay Tile Roof',
      costPerSquare: '$950 – $1,450',
      totalRange: '$26,000 – $48,000'
    },
    {
      system: 'Mechanically Seamed Metal Roof',
      costPerSquare: '$1,150 – $1,750',
      totalRange: '$30,000 – $58,000'
    },
    {
      system: 'Flat / Low-Slope Roof',
      costPerSquare: '$575 – $875',
      totalRange: '$11,000 – $19,000'
    }
  ];

  const quickFaqs = [
    {
      question: 'How much does a new roof cost in Lauderdale By The Sea, FL?',
      answer: 'Most homes range from $13,000 to $32,000 depending on roofing system and size.'
    },
    {
      question: 'What is the cheapest roofing option in Lauderdale By The Sea?',
      answer: 'Architectural shingles usually have the lowest upfront cost.'
    },
    {
      question: "How long does a roof last in Lauderdale By The Sea's climate?",
      answer: 'Shingle roofs last about 15–20 years, while tile and metal can last 30–50+ years.'
    },
    {
      question: 'Do roof prices increase after storms in Lauderdale By The Sea?',
      answer: 'Yes. Coastal storm activity often increases demand, inspections, and material costs.'
    },
    {
      question: 'Does insurance affect roof replacement cost in Lauderdale By The Sea?',
      answer: 'Insurance coverage depends on roof age, material, and the cause of damage.'
    }
  ];

  const detailedFaqs = [
    {
      question: 'How accurate is the Lauderdale By The Sea roof cost calculator?',
      answer: "It provides a general estimate based on typical homes and South Florida pricing. Final costs require a physical inspection."
    },
    {
      question: 'What factors affect roof cost in Lauderdale By The Sea?',
      answer: "Roof size, material, pitch, tear-off needs, decking repairs, and coastal wind-load codes all influence pricing."
    },
    {
      question: 'Are permits and code compliance included for Lauderdale By The Sea roofs?',
      answer: "Permits and Florida Building Code compliance are required and can affect the final cost."
    },
    {
      question: 'Can I estimate monthly payments for a roof in Lauderdale By The Sea?',
      answer: "Yes. The payment estimator provides approximate monthly payments based on financing terms."
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
            <Link to="/locations/deerfield-beach/service-area/lauderdale-by-the-sea/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Lauderdale By The Sea
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
              Lauderdale By The Sea{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-amber-200 text-sm leading-relaxed text-left">
                  Use this tool for a ballpark estimate only. Roof pricing in South Florida is affected by coastal exposure, wind codes, and material requirements. Estimates are not guarantees.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Calculator
            </h2>
            <EmbeddedRoofCalculator
              city="Lauderdale By The Sea"
              county="Broward"
              isHVHZ={true}
            />
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Estimates in Lauderdale By The Sea by Roofing System
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These are typical installed price ranges for homes in Lauderdale By The Sea, FL. Actual costs vary by roof size, slope, tear-off needs, and Florida code requirements.
            </p>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-800">
                    <th className="px-6 py-4 text-left text-white font-semibold">Roofing System</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Typical Cost Per Square (100 sq ft)</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Estimated Total Cost Range</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, index) => (
                    <tr key={index} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-800/30 transition-colors">
                      <td className="px-6 py-4 text-zinc-300 font-medium">{row.system}</td>
                      <td className="px-6 py-4 text-zinc-400">{row.costPerSquare}</td>
                      <td className="px-6 py-4 text-zinc-400 font-semibold">{row.totalRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div id="monthly-payment" className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in Lauderdale By The Sea?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Most residential roof replacements in Lauderdale By The Sea range from $13,000 to $48,000 depending on material choice, home size, and project complexity. Use the calculator above for a customized estimate.
            </p>
          </div>

          <div id="finance-calculator" className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Estimate monthly payments for your Lauderdale By The Sea roof using the financing calculator below.
            </p>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <p className="text-zinc-300 mb-6">
                Contact us to discuss financing options and payment plans for your roofing project.
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
              Roof Cost Questions in Lauderdale By The Sea
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {quickFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions – Lauderdale By The Sea Roof Cost Calculator
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
