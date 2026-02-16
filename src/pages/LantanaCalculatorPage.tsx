import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function LantanaCalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Lantana Roof Cost Calculator | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Use this tool for a ballpark estimate only. Roof pricing in South Florida can vary due to wind codes, material availability, and roof complexity. Estimates are not guarantees.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Use this tool for a ballpark estimate only. Roof pricing in South Florida can vary due to wind codes, material availability, and roof complexity. Estimates are not guarantees.';
      document.head.appendChild(meta);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How accurate is the Lantana roof cost calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator provides a rough estimate based on typical Lantana homes and Florida pricing. Final costs require an on-site inspection."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect roof cost in Lantana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof size, pitch, material choice, tear-off, decking repairs, and Florida wind-load codes all impact pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits and code compliance included for Lantana roofs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Permits and compliance with Florida Building Code are required and can affect total cost."
          }
        },
        {
          "@type": "Question",
          "name": "Can I estimate monthly payments for a roof in Lantana?",
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
      perSquare: '$450 – $650',
      totalRange: '$12,000 – $20,000'
    },
    {
      system: 'Concrete or Clay Tile Roof',
      perSquare: '$900 – $1,400',
      totalRange: '$25,000 – $45,000'
    },
    {
      system: 'Mechanically Seamed Metal Roof',
      perSquare: '$1,100 – $1,700',
      totalRange: '$28,000 – $55,000'
    },
    {
      system: 'Flat / Low-Slope Roof',
      perSquare: '$550 – $850',
      totalRange: '$10,000 – $18,000'
    }
  ];

  const quickFaqs = [
    {
      question: 'How much does a new roof cost in Lantana, FL?',
      answer: 'Most homes fall between $12,000 and $30,000 depending on material and size.'
    },
    {
      question: 'What is the cheapest roofing option in Lantana?',
      answer: 'Architectural shingles are typically the lowest upfront cost.'
    },
    {
      question: 'How long does a roof last in Lantana\'s climate?',
      answer: 'Shingles average 15–20 years; tile and metal can last 30–50+ years with maintenance.'
    },
    {
      question: 'Do roof prices increase after storms in Lantana?',
      answer: 'Yes. Demand, material shortages, and inspections can raise prices after major storms.'
    },
    {
      question: 'Does insurance affect roof replacement cost in Lantana?',
      answer: 'Insurance may cover part of the cost depending on policy, age, and cause of damage.'
    }
  ];

  const detailedFaqs = [
    {
      question: 'How accurate is the Lantana roof cost calculator?',
      answer: "The calculator provides a rough estimate based on typical Lantana homes and Florida pricing. Final costs require an on-site inspection."
    },
    {
      question: 'What factors affect roof cost in Lantana?',
      answer: "Roof size, pitch, material choice, tear-off, decking repairs, and Florida wind-load codes all impact pricing."
    },
    {
      question: 'Are permits and code compliance included for Lantana roofs?',
      answer: "Permits and compliance with Florida Building Code are required and can affect total cost."
    },
    {
      question: 'Can I estimate monthly payments for a roof in Lantana?',
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
            <Link to="/locations/deerfield-beach/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach/service-area/lantana/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Lantana
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
              Lantana{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Use this tool for a ballpark estimate only. Roof pricing in South Florida can vary due to wind codes, material availability, and roof complexity. Estimates are not guarantees.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
          </div>

          <EmbeddedRoofCalculator
            city="Lantana"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Estimates in Lantana by Roofing System
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These are typical installed price ranges for homes in Lantana, FL. Actual costs vary by roof size, slope, tear-off needs, and Florida code requirements.
            </p>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <thead className="bg-zinc-800/50">
                  <tr>
                    <th className="text-left py-4 px-6 text-white font-semibold">Roofing System</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Typical Cost Per Square (100 sq ft)</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Estimated Total Cost Range</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  {pricingData.map((row, index) => (
                    <tr key={index} className={index < pricingData.length - 1 ? "border-b border-zinc-800" : ""}>
                      <td className="py-4 px-6 font-medium text-white">{row.system}</td>
                      <td className="py-4 px-6">{row.perSquare}</td>
                      <td className="py-4 px-6">{row.totalRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div id="monthly-payment" className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in Lantana?
            </h2>
          </div>

          <div id="finance-calculator" className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Estimate monthly payments for your Lantana roof using financing options.
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
              Roof Cost Questions in Lantana
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
              Frequently Asked Questions – Lantana Roof Cost Calculator
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
