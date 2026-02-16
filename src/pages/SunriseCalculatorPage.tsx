import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function SunriseCalculatorPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const costQuestions = [
    {
      question: 'How much does a new roof cost in Sunrise, FL?',
      answer: 'Most homes range from $14,000 to over $40,000 depending on roofing system and code requirements.'
    },
    {
      question: 'What is the cheapest roofing option in Sunrise?',
      answer: 'Architectural shingles are usually the lowest upfront cost, though HVHZ requirements can raise pricing.'
    },
    {
      question: 'How long does a roof last in Sunrise\'s climate?',
      answer: 'Shingle roofs average 15–20 years; tile and metal roofs can last 30–50+ years.'
    },
    {
      question: 'Do roof prices increase after storms in Sunrise?',
      answer: 'Yes. Labor demand, inspections, and material costs often increase after major storms.'
    },
    {
      question: 'Does insurance affect roof replacement cost in Sunrise?',
      answer: 'Insurance coverage depends on roof age, material, and cause of damage.'
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the Sunrise roof cost calculator?',
      answer: 'The calculator provides a general estimate based on typical Florida homes and HVHZ pricing. Final costs require an on-site inspection.'
    },
    {
      question: 'What factors affect roof cost in Sunrise?',
      answer: 'Roof size, material choice, pitch, tear-off needs, decking repairs, and Florida wind-load codes all impact pricing.'
    },
    {
      question: 'Are permits and code compliance included for Sunrise roofs?',
      answer: 'Permits and Florida Building Code compliance are required and can affect total roof cost.'
    },
    {
      question: 'Can I estimate monthly payments for a roof in Sunrise?',
      answer: 'Yes. The payment estimator shows approximate monthly payments based on financing terms.'
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

  const roofingTypes = [
    {
      type: 'Architectural Shingle Roof (HVHZ Rated)',
      costPerSquare: '$550 – $1,200',
      totalRange: '$14,000 – $30,000+'
    },
    {
      type: 'Concrete or Clay Tile Roof',
      costPerSquare: '$950 – $1,500',
      totalRange: '$28,000 – $55,000+'
    },
    {
      type: 'Mechanically Seamed Metal Roof',
      costPerSquare: '$1,150 – $1,800',
      totalRange: '$32,000 – $65,000+'
    },
    {
      type: 'Flat / Low-Slope Roof',
      costPerSquare: '$850 – $1,300',
      totalRange: '$14,000 – $28,000+'
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <Helmet>
        <title>Sunrise Roof Cost Calculator | All Phase Construction USA</title>
        <meta
          name="description"
          content="Use this calculator for ballpark estimates only. Roof pricing in South Florida varies due to hurricane wind-load requirements, Florida Building Code compliance, roof complexity, and material availability."
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
            <Link to="/locations/deerfield-beach/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach/service-area/sunrise/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Sunrise
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
              Sunrise{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Use this calculator for ballpark estimates only. Roof pricing in South Florida varies due to hurricane wind-load requirements, Florida Building Code compliance, roof complexity, and material availability. Estimates are not guarantees.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
          </div>

          <EmbeddedRoofCalculator
            city="Sunrise"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20 mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Estimates in Sunrise by Roofing System
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              These are typical installed price ranges for homes in Sunrise, FL. Actual costs vary based on roof size, slope, tear-off requirements, decking condition, and HVHZ code compliance.
            </p>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">
                      Roofing System
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">
                      Typical Cost Per Square (100 sq ft)
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold border-b border-zinc-800">
                      Estimated Total Cost Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {roofingTypes.map((item, index) => (
                    <tr key={index} className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4 text-zinc-300">{item.type}</td>
                      <td className="px-6 py-4 text-zinc-300">{item.costPerSquare}</td>
                      <td className="px-6 py-4 text-zinc-300 font-semibold">{item.totalRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-20" id="finance-calculator">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in Sunrise?
            </h2>
          </div>

          <div className="mb-20" id="monthly-payment">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Want a Monthly Payment Estimate?
            </h2>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Estimate monthly payments for your Sunrise roof using the financing calculator.
            </p>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center max-w-3xl mx-auto">
              <p className="text-zinc-300 mb-6 leading-relaxed">
                Contact us to discuss financing options and payment plans for your Sunrise roofing project.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roof Cost Questions in Sunrise
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
              Frequently Asked Questions – Sunrise Roof Cost Calculator
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
