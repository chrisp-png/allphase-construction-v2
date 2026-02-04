import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function SouthwestRanchesCalculatorPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingData = [
    {
      system: 'Architectural Shingle Roof',
      perSquare: '$475 – $675',
      totalRange: '$15,000 – $25,000'
    },
    {
      system: 'Concrete or Clay Tile Roof',
      perSquare: '$950 – $1,500',
      totalRange: '$30,000 – $55,000'
    },
    {
      system: 'Mechanically Seamed Metal Roof',
      perSquare: '$1,150 – $1,800',
      totalRange: '$35,000 – $65,000'
    },
    {
      system: 'Flat / Low-Slope Roof',
      perSquare: '$575 – $900',
      totalRange: '$12,000 – $22,000'
    }
  ];

  const costQuestions = [
    {
      question: 'How much does a new roof cost in Southwest Ranches, FL?',
      answer: 'Most homes range from $15,000 to over $45,000 depending on roof size and material.'
    },
    {
      question: 'What is the cheapest roofing option in Southwest Ranches?',
      answer: 'Architectural shingles typically have the lowest upfront cost.'
    },
    {
      question: 'How long does a roof last in Southwest Ranches\' climate?',
      answer: 'Shingle roofs average 15–20 years, while tile and metal roofs can last 30–50+ years.'
    },
    {
      question: 'Do roof prices increase after storms in Southwest Ranches?',
      answer: 'Yes. Post-storm demand, inspections, and material costs often increase pricing.'
    },
    {
      question: 'Does insurance affect roof replacement cost in Southwest Ranches?',
      answer: 'Insurance coverage depends on roof age, policy terms, and cause of damage.'
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the Southwest Ranches roof cost calculator?',
      answer: 'The calculator provides a rough estimate based on typical Southwest Ranches homes. Final pricing requires an on-site inspection.'
    },
    {
      question: 'What factors affect roof cost in Southwest Ranches?',
      answer: 'Roof size, material choice, pitch, tear-off, decking repairs, and Florida wind-load codes affect cost.'
    },
    {
      question: 'Are permits and code compliance included for Southwest Ranches roofs?',
      answer: 'Permits and Florida Building Code compliance are required and can impact total pricing.'
    },
    {
      question: 'Can I estimate monthly payments for a roof in Southwest Ranches?',
      answer: 'Yes. The payment estimator provides approximate monthly costs based on financing terms.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#09090b]">
      <Helmet>
        <title>Southwest Ranches Roof Cost Calculator | All Phase Construction USA</title>
        <meta
          name="description"
          content="Use this roof cost calculator to get a fast ballpark estimate for Southwest Ranches roofing projects. Final pricing depends on inspection results, roof complexity, and material selection."
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />

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
            <Link to="/locations/deerfield-beach/service-area/southwest-ranches" className="text-zinc-400 hover:text-red-600 transition-colors">
              Southwest Ranches
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
              Southwest Ranches{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Use this calculator for a ballpark estimate only. Roof pricing in South Florida varies due to wind-load requirements, larger custom homes, and material availability. Estimates are not guarantees.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
          </div>

          <EmbeddedRoofCalculator
            city="Southwest Ranches"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Estimates in Southwest Ranches by Roofing System
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These are typical installed price ranges for homes in Southwest Ranches, FL. Actual costs vary by roof size, slope, tear-off needs, and Florida Building Code requirements.
            </p>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-zinc-900">
                    <th className="px-6 py-4 text-left text-white font-bold border-b border-zinc-800">Roofing System</th>
                    <th className="px-6 py-4 text-left text-white font-bold border-b border-zinc-800">Typical Cost Per Square (100 sq ft)</th>
                    <th className="px-6 py-4 text-left text-white font-bold border-b border-zinc-800">Estimated Total Cost Range</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, index) => (
                    <tr key={index} className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/30 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{row.system}</td>
                      <td className="px-6 py-4 text-zinc-300">{row.perSquare}</td>
                      <td className="px-6 py-4 text-zinc-300">{row.totalRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-20" id="monthly-payment">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in Southwest Ranches?
            </h2>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate?
            </h3>
            <div id="finance-calculator" className="mb-8">
              <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
                Estimate monthly payments for your Southwest Ranches roof using financing options.
              </p>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center max-w-3xl mx-auto">
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
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roof Cost Questions in Southwest Ranches
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {costQuestions.map((question, index) => (
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
              Frequently Asked Questions – Southwest Ranches Roof Cost Calculator
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

      <Footer />
    </div>
  );
}
