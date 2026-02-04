import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, Phone, AlertCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';

export default function NorthLauderdaleCalculatorPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#monthly-payment' || hash === '#finance-calculator') {
      setTimeout(() => {
        const element = document.getElementById('finance-calculator');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const costFaqs = [
    {
      question: 'How much does a new roof cost in North Lauderdale, FL?',
      answer: "Most homes range from $12,000 to $30,000 depending on roof type and size."
    },
    {
      question: 'What is the cheapest roofing option in North Lauderdale?',
      answer: "Architectural shingles typically have the lowest upfront cost."
    },
    {
      question: 'How long does a roof last in North Lauderdale\'s climate?',
      answer: "Shingle roofs average 15–20 years, while tile and metal roofs can last 30–50+ years."
    },
    {
      question: 'Do roof prices increase after storms in North Lauderdale?',
      answer: "Yes. Post-storm demand, inspections, and material costs often increase pricing."
    },
    {
      question: 'Does insurance affect roof replacement cost in North Lauderdale?',
      answer: "Insurance coverage depends on roof age, policy terms, and cause of damage."
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the North Lauderdale roof cost calculator?',
      answer: "The calculator provides a rough estimate based on typical North Lauderdale homes. Final pricing requires an on-site inspection."
    },
    {
      question: 'What factors affect roof cost in North Lauderdale?',
      answer: "Roof size, material choice, pitch, tear-off, decking repairs, and Florida wind-load codes affect cost."
    },
    {
      question: 'Are permits and code compliance included for North Lauderdale roofs?',
      answer: "Permits and Florida Building Code compliance are required and can impact total pricing."
    },
    {
      question: 'Can I estimate monthly payments for a roof in North Lauderdale?',
      answer: "Yes. The payment estimator provides approximate monthly costs based on financing terms."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate is the North Lauderdale roof cost calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The calculator provides a rough estimate based on typical North Lauderdale homes. Final pricing requires an on-site inspection."
        }
      },
      {
        "@type": "Question",
        "name": "What factors affect roof cost in North Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roof size, material choice, pitch, tear-off, decking repairs, and Florida wind-load codes affect cost."
        }
      },
      {
        "@type": "Question",
        "name": "Are permits and code compliance included for North Lauderdale roofs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Permits and Florida Building Code compliance are required and can impact total pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I estimate monthly payments for a roof in North Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The payment estimator provides approximate monthly costs based on financing terms."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#09090b]">
      <Helmet>
        <title>North Lauderdale Roof Cost Calculator | Free Estimate Tool</title>
        <meta name="description" content="Calculate roof replacement costs in North Lauderdale, FL. Get instant estimates for shingle, tile, metal, and flat roofing systems. Free inspection available." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />

      <div className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              North Lauderdale{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <div className="bg-amber-600/10 border border-amber-600/20 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-amber-200 text-sm text-left leading-relaxed">
                Use this calculator for a ballpark estimate only. Roof pricing in South Florida varies due to wind-load requirements, material availability, and roof design. Estimates are not guarantees.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Calculator
            </h2>
            <EmbeddedRoofCalculator city="North Lauderdale" county="Broward" isHVHZ={true} />
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Roof Cost Estimates in North Lauderdale by <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">Roofing System</span>
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              These are typical installed price ranges for homes in North Lauderdale, FL. Actual costs vary by roof size, slope, tear-off needs, and Florida Building Code requirements.
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Roofing System</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Typical Cost Per Square (100 sq ft)</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Estimated Total Cost Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="px-6 py-4 text-zinc-300">Architectural Shingle Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$450 – $650</td>
                      <td className="px-6 py-4 text-zinc-300">$12,000 – $20,000</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="px-6 py-4 text-zinc-300">Concrete or Clay Tile Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$900 – $1,400</td>
                      <td className="px-6 py-4 text-zinc-300">$24,000 – $44,000</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="px-6 py-4 text-zinc-300">Mechanically Seamed Metal Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$1,100 – $1,700</td>
                      <td className="px-6 py-4 text-zinc-300">$28,000 – $55,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-zinc-300">Flat / Low-Slope Roof</td>
                      <td className="px-6 py-4 text-zinc-300">$550 – $850</td>
                      <td className="px-6 py-4 text-zinc-300">$10,000 – $18,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="monthly-payment" className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              How much does a roof cost in <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">North Lauderdale?</span>
            </h2>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Want a Monthly Payment Estimate?</h3>
              <div id="finance-calculator" className="max-w-2xl mx-auto">
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
                  <p className="text-zinc-300 text-center mb-4">
                    Contact us for personalized financing options and monthly payment estimates for your North Lauderdale roofing project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:754-227-5605"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call (754) 227-5605
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all border border-zinc-700"
                    >
                      Request Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Questions in <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">North Lauderdale</span>
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {costFaqs.map((faq, index) => (
                <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions – <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">North Lauderdale Roof Cost Calculator</span>
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {faqs.map((item, index) => (
                <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{item.question}</h3>
                  <p className="text-zinc-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/locations/deerfield-beach/service-area/north-lauderdale"
              className="inline-flex items-center text-red-500 hover:text-red-400 font-semibold transition-colors"
            >
              ← Back to North Lauderdale Roofing Services
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
