import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ChevronDown, ChevronUp, DollarSign } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import CalculatorLeadCapture from '../components/CalculatorLeadCapture';

export default function GreenacresCalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openPeopleAsk, setOpenPeopleAsk] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Greenacres Roof Cost Calculator | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Use this roof cost calculator to get a fast ballpark estimate for Greenacres roofing projects. Final pricing depends on inspection, roof complexity, and material selection.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Use this roof cost calculator to get a fast ballpark estimate for Greenacres roofing projects. Final pricing depends on inspection, roof complexity, and material selection.';
      document.head.appendChild(meta);
    }

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Greenacres Roof Cost Calculator",
        "description": "Calculate roof replacement costs for Greenacres with detailed pricing ranges for shingle, tile, metal, and flat roofs.",
        "url": window.location.href,
        "about": {
          "@type": "Service",
          "serviceType": "Roof Cost Estimation",
          "areaServed": {
            "@type": "City",
            "name": "Greenacres",
            "containedIn": {
              "@type": "State",
              "name": "Florida"
            }
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this Greenacres roof cost calculator accurate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This provides a starting estimate for Greenacres homes. Final pricing is confirmed after an on-site inspection."
            }
          },
          {
            "@type": "Question",
            "name": "What factors influence roof pricing in Greenacres?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roof size, roof type, slope and complexity, tear-off requirements, decking condition, and flashing details."
            }
          },
          {
            "@type": "Question",
            "name": "Does this Greenacres roof estimate include permits and code requirements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Permitting and Greenacres-specific code-related costs are confirmed during inspection and quoting."
            }
          },
          {
            "@type": "Question",
            "name": "Can I estimate monthly payments for a Greenacres roof here?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Use the Greenacres financing calculator above to estimate monthly payments."
            }
          }
        ]
      }
    ];

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(s => s.remove());

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      schemaScripts.forEach(s => s.remove());
    };
  }, []);

  const peopleAlsoAsk = [
    {
      question: 'How long does a roof last in Greenacres, FL?',
      answer: 'Asphalt shingle roofs typically last 15-20 years, metal roofs 40-70 years, and tile roofs 50+ years in Greenacres. Lifespan depends on maintenance, installation quality, and exposure to Florida weather conditions.'
    },
    {
      question: 'What is the average cost to replace a roof in Greenacres?',
      answer: 'The average roof replacement in Greenacres ranges from $9,000 to $40,000 depending on material type, roof size, and complexity. Asphalt shingles are most affordable, while tile and metal systems cost more but last longer.'
    },
    {
      question: 'Does homeowners insurance cover roof replacement in Greenacres?',
      answer: 'Insurance typically covers sudden damage from storms or qualifying events, but not gradual wear or poor maintenance. Coverage depends on your policy, roof age, and cause of damage. Always document damage and file claims promptly.'
    },
    {
      question: 'What roofing material is best for South Florida homes?',
      answer: 'Tile and metal roofs perform best in South Florida due to superior wind resistance, longevity, and heat reflection. Asphalt shingles are popular for affordability. Choose based on budget, home style, and long-term value.'
    }
  ];

  const faqs = [
    {
      question: 'Is this Greenacres roof cost calculator accurate?',
      answer: 'This provides a starting estimate for Greenacres homes. Final pricing is confirmed after an on-site inspection.'
    },
    {
      question: 'What factors influence roof pricing in Greenacres?',
      answer: 'Roof size, roof type, slope and complexity, tear-off requirements, decking condition, and flashing details.'
    },
    {
      question: 'Does this Greenacres roof estimate include permits and code requirements?',
      answer: 'No. Permitting and Greenacres-specific code-related costs are confirmed during inspection and quoting.'
    },
    {
      question: 'Can I estimate monthly payments for a Greenacres roof here?',
      answer: 'Yes. Use the Greenacres financing calculator above to estimate monthly payments.'
    }
  ];

  const roofCostData = [
    { type: 'Asphalt Shingle Roof', range: '$9,000 – $18,000' },
    { type: 'Metal Roof', range: '$15,000 – $30,000' },
    { type: 'Tile Roof (Concrete or Clay)', range: '$18,000 – $40,000' },
    { type: 'Flat / Modified Bitumen Roof', range: '$8,000 – $16,000' },
    { type: 'TPO / PVC Flat Roof', range: '$10,000 – $22,000' }
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
            <Link to="/service-areas" className="text-zinc-500 hover:text-white transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/greenacres" className="text-zinc-500 hover:text-white transition-colors">
              Greenacres
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Roof Cost Calculator</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-600/20">
              <Calculator className="w-4 h-4" />
              Greenacres Roof Cost Calculator
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Greenacres{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Roof Cost Calculator
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Use this roof cost calculator to get a fast ballpark estimate based on roof size and roof type. Final pricing depends on inspection results, roof complexity, and material selection.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Roof Cost Calculator
            </h2>
            <EmbeddedRoofCalculator
              city="Greenacres"
              county="Palm Beach"
              isHVHZ={false}
            />
          </div>

          <div id="finance-calculator" className="mb-20 scroll-mt-32">
            <div className="bg-gradient-to-br from-red-900/20 to-zinc-900/20 border border-red-900/30 rounded-2xl p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <DollarSign className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Want a Monthly Payment Estimate?
                </h2>
                <p className="text-zinc-300 leading-relaxed">
                  Estimate monthly payments for your Greenacres roof using the financing calculator below.
                </p>
              </div>
              <CalculatorLeadCapture
                city="Greenacres"
                source="Greenacres Roof Cost Calculator - Finance Calculator"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              How much does a roof cost in Greenacres?
            </h2>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Average Roof Costs in Greenacres (By Roofing System)
              </h3>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-zinc-900/50 border-b border-zinc-800">
                        <th className="px-6 py-4 text-left text-white font-semibold">Roofing Type</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Average Cost Range (Greenacres)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roofCostData.map((item, index) => (
                        <tr
                          key={index}
                          className={`border-b border-zinc-800 last:border-b-0 ${
                            index % 2 === 0 ? 'bg-zinc-900/30' : 'bg-[#27272a]'
                          }`}
                        >
                          <td className="px-6 py-4 text-zinc-300">{item.type}</td>
                          <td className="px-6 py-4 text-zinc-300 font-semibold">{item.range}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-zinc-400 text-center mt-6 leading-relaxed">
                Pricing varies based on roof size, pitch, tear-off needs, and material selection. These are ballpark estimates only.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              People Also Ask — Greenacres Roofing Costs
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {peopleAlsoAsk.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenPeopleAsk(openPeopleAsk === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <h3 className="font-semibold text-white pr-4 text-lg">{item.question}</h3>
                    {openPeopleAsk === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openPeopleAsk === index && (
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
              Frequently Asked Questions — Greenacres Roof Cost Calculator
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

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-zinc-300 leading-relaxed text-lg">
              This Greenacres roof cost calculator provides budget ranges, not final pricing, and is designed to help homeowners understand typical roofing costs before scheduling an inspection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
