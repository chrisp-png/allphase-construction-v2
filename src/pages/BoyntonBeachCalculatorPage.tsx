import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function BoyntonBeachCalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Boynton Beach Roof Cost Calculator | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Use this roof cost calculator to get a fast ballpark estimate for Boynton Beach roofing projects. Final pricing depends on inspection results, roof complexity, and material selection.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Use this roof cost calculator to get a fast ballpark estimate for Boynton Beach roofing projects. Final pricing depends on inspection results, roof complexity, and material selection.';
      document.head.appendChild(meta);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is this roof cost calculator accurate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This provides a starting estimate. Final pricing is confirmed after an on-site inspection."
          }
        },
        {
          "@type": "Question",
          "name": "What factors influence roof pricing in Boynton Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof size, roof type, slope and complexity, tear-off requirements, decking condition, and flashing details."
          }
        },
        {
          "@type": "Question",
          "name": "Does this estimate include permits and code requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Permitting and code-related costs are confirmed during inspection and quoting."
          }
        },
        {
          "@type": "Question",
          "name": "Can I estimate monthly payments here?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Use the Boynton Beach financing calculator above to estimate monthly payments."
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
      question: 'Is this roof cost calculator accurate?',
      answer: "This provides a starting estimate. Final pricing is confirmed after an on-site inspection."
    },
    {
      question: 'What factors influence roof pricing in Boynton Beach?',
      answer: "Roof size, roof type, slope and complexity, tear-off requirements, decking condition, and flashing details."
    },
    {
      question: 'Does this estimate include permits and code requirements?',
      answer: "No. Permitting and code-related costs are confirmed during inspection and quoting."
    },
    {
      question: 'Can I estimate monthly payments here?',
      answer: "Yes. Use the Boynton Beach financing calculator above to estimate monthly payments."
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
            <Link to="/locations/deerfield-beach/service-area/boynton-beach/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Boynton Beach
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
              Boynton Beach{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Use this roof cost calculator to get a fast ballpark estimate based on roof size and roof type. Final pricing depends on inspection results, roof complexity, and material selection.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
          </div>

          <EmbeddedRoofCalculator
            city="Boynton Beach"
            county="Palm Beach"
            isHVHZ={false}
          />

          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Estimate monthly payments for your Boynton Beach roof using the financing calculator below.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Helpful Links
            </h2>
            <div className="max-w-4xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <ul className="space-y-3 text-zinc-400 leading-relaxed">
                <li>
                  Schedule a roof inspection: <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline transition-colors">/roof-inspection</Link>
                </li>
                <li>
                  Roof replacement services: <Link to="/tile-roofing/" className="text-red-500 hover:text-red-400 underline transition-colors">/roof-replacement</Link>
                </li>
                <li>
                  Roof repair services: <Link to="/roofing-services/roof-repair/" className="text-red-500 hover:text-red-400 underline transition-colors">/roof-repair</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in Boynton Beach?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto leading-relaxed">
              Use the calculator above to get a fast estimate based on your roof size and material preferences. Final pricing depends on your specific project requirements.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions – Boynton Beach Roof Cost Calculator
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
