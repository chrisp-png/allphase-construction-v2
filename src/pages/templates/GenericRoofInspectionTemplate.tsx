import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Plus, Minus, Camera, FileText, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';
import cities from '../../data/cities.json';
import { isCityIndexable } from '../../config/indexableCities';

export default function GenericRoofInspectionTemplate() {
  const { city: citySlug } = useParams<{ city: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const cityData = cities.find(c => c.slug === citySlug);
  const cityName = cityData?.city || citySlug;
  const county = cityData?.county || 'South Florida';

  // Check if this city should be indexed
  const isIndexable = citySlug ? isCityIndexable(citySlug) : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: `What does a roof inspection in ${cityName} include?`,
      answer: "A comprehensive roof inspection includes evaluation of roofing materials, flashing details, fastening systems, drainage, structural deck condition, and documentation of any code compliance concerns or maintenance recommendations."
    },
    {
      question: `How long does a roof inspection take in ${cityName}?`,
      answer: "Most residential roof inspections take 45-90 minutes depending on roof size, complexity, and accessibility. Commercial inspections vary based on building size and roof system type."
    },
    {
      question: "Do I need a roof inspection before selling my home?",
      answer: `Pre-listing roof inspections in ${cityName} help identify issues before they become transaction obstacles. Many buyers request inspections, so proactive assessment can streamline the sales process.`
    },
    {
      question: "Will you provide a written inspection report?",
      answer: "Yes. All inspections include a detailed written report with findings, photographic documentation, and recommendations for repairs or maintenance."
    },
    {
      question: "Can a roof inspection help with insurance claims?",
      answer: `Yes. Professional documentation of storm damage or existing conditions can support insurance discussions. Florida-licensed contractors can also certify remaining useful life for ${county} insurance requirements.`
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title={`Roof Inspection in ${cityName}, FL`}
        description={`Professional roof inspection services in ${cityName}, Florida. Licensed ${county} contractor. Detailed reports for home sales, insurance, and maintenance planning: (754) 227-5605.`}
        schema={faqSchema}
        noindex={false}
      />
      <div className="bg-zinc-950 text-white min-h-screen">
        <Header />

        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
                <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-zinc-500">Roofing</span>
                <ChevronRight className="w-4 h-4" />
                <Link to="/roof-inspection/" className="hover:text-red-600 transition-colors">Roof Inspection</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">{cityName}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Roof Inspection in {cityName}, Florida
              </h1>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  Professional roof inspections in {cityName} provide comprehensive diagnostic assessment of roofing system condition, structural integrity, and code compliance. All Phase Construction USA performs detailed visual inspections covering material condition, flashing details, fastening systems, drainage patterns, and potential areas of concern. Every inspection includes photographic documentation and a written report suitable for real estate transactions, insurance requirements, or pre-repair planning.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center text-lg shadow-lg shadow-red-600/20"
                >
                  Schedule a Roof Inspection
                </a>
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-center text-lg"
                >
                  (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                What's Included in a {cityName} Roof Inspection
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Roofing Material Assessment
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Evaluation of material condition, degradation patterns, fastening integrity, and remaining service life based on exposure and manufacturer specifications.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Flashing & Detail Evaluation
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Assessment of roof-to-wall terminations, valley flashings, penetrations, and all transition details for water-tightness and code compliance.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Structural & Deck Inspection
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Evaluation of roof deck integrity, structural support adequacy, and identification of any compromised decking requiring reinforcement.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Drainage & Water Management
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Review of drainage systems, identification of ponding areas, and assessment of gutter and downspout functionality.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Photographic Documentation
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Comprehensive photographic record of conditions, deficiencies, and areas of concern suitable for insurance, real estate, or repair planning purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Why Get a Professional Roof Inspection
              </h2>

              <div className="space-y-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                  <div className="flex items-start">
                    <Camera className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Real Estate Transactions</h3>
                      <p className="text-zinc-300">
                        Pre-purchase inspections identify deferred maintenance and estimate remaining service life. Seller inspections document condition before listing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                  <div className="flex items-start">
                    <FileText className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Insurance Requirements</h3>
                      <p className="text-zinc-300">
                        Many insurers require roof inspections for policy renewals, especially for roofs 15+ years old. Licensed contractors can certify remaining useful life.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                  <div className="flex items-start">
                    <Shield className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Storm Damage Assessment</h3>
                      <p className="text-zinc-300">
                        Post-storm inspections document wind and hail damage for insurance claims and determine if repairs trigger permit thresholds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-black border border-zinc-800 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-950 transition-colors"
                    >
                      <span className="text-lg font-semibold pr-8">{item.question}</span>
                      {openFaqIndex === index ? (
                        <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-5">
                        <p className="text-zinc-300 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </section>
      </div>
    </>
  );
}
