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
      answer: "We check your roofing materials, flashing, fasteners, and drainage. We also inspect the deck structure. You get a full report on any issues and what needs to be fixed."
    },
    {
      question: `How long does a roof inspection take in ${cityName}?`,
      answer: "Most home inspections take 45-90 minutes. The time depends on roof size and how easy it is to access. Commercial roofs take longer based on building size."
    },
    {
      question: "Do I need a roof inspection before selling my home?",
      answer: `Finding problems early helps your home sale go smoothly. Many buyers ask for an inspection anyway. Getting one first puts you ahead.`
    },
    {
      question: "Will you provide a written inspection report?",
      answer: "Yes. You get a written report with photos. It shows what we found and what work you need."
    },
    {
      question: "Can a roof inspection help with insurance claims?",
      answer: `Yes. We document storm damage with photos and notes for your insurance claim. Our licensed contractors can also confirm how many years your roof should last for ${county} insurance.`
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
        title={`Roof Inspection ${cityName} FL | All Phase Construction USA`}
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
                  A roof inspection tells you exactly what shape your roof is in. Our team checks every part — from the materials and flashing to the structure and drainage. We take photos and write up a full report. You can use it for home sales, insurance needs, or to plan repairs.
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
                    We check the condition of your roofing materials. This includes wear patterns, how well the fasteners hold, and how much life your roof has left.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Flashing & Detail Evaluation
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    We inspect all the seams and edges where your roof meets walls, valleys, and vents. These spots are where leaks start, so we check them closely.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Structural & Deck Inspection
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    We look at the wood decking under your roof. If any boards are soft, warped, or weak, we flag them so they can be fixed.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Drainage & Water Management
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    We check your gutters, downspouts, and drainage flow. If water pools anywhere on the roof, we'll find it.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Photographic Documentation
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    We photograph every issue we find. You get a visual record you can share with your insurer, realtor, or repair contractor.
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
                        Before you buy a home, an inspection shows what work has been put off and how long the roof should last. It also shows sellers what they need to know.
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
                        Many insurers want a roof inspection before they renew your policy. This is common for roofs over 15 years old. A licensed contractor can certify how many years your roof has left.
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
                        After a storm, we document wind and hail damage for your insurance claim. We also check if the repairs need a permit.
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
