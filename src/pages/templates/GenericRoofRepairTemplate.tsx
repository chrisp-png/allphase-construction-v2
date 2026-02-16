import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ChevronRight, Plus, Minus } from 'lucide-react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';
import cities from '../../data/cities.json';
import { isCityIndexable } from '../../config/indexableCities';

export default function GenericRoofRepairTemplate() {
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
      question: `How do I know if my ${cityName} roof needs repair or replacement?`,
      answer: "A diagnostic inspection evaluates damage extent, system age, and code thresholds to determine whether repair is feasible."
    },
    {
      question: `Are roof repairs in ${cityName} required to meet current building codes?`,
      answer: "Yes. Repairs must comply with the Florida Building Code and any applicable local requirements at the time of work."
    },
    {
      question: "Can cracked or slipped tile roofs be repaired without full replacement?",
      answer: "In many cases, individual tiles and localized underlayment sections can be repaired if surrounding materials remain serviceable."
    },
    {
      question: "Will my HOA need to approve roof repairs?",
      answer: `Many ${cityName} HOAs require review or approval, especially for visible repairs. Coordination is often part of the process.`
    },
    {
      question: "How does roof repair affect insurance claims?",
      answer: "Insurance considerations vary by policy. Inspection documentation can help support discussions with carriers."
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
        title={`Roof Repair in ${cityName}, FL`}
        description={`Expert roof repair in ${cityName}, Florida. Tile, shingle, metal & flat roof repairs. Licensed ${county} contractor. Free inspection: (754) 227-5605.`}
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
                <Link to="/roof-repair/" className="hover:text-red-600 transition-colors">Roof Repair</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">{cityName}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Roof Repair in {cityName}, Florida
              </h1>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  Homes and commercial properties in {cityName} face intense UV exposure, seasonal storm activity, and long-term heat cycling that can accelerate roof wear. All Phase Construction USA provides inspection-first roof repair services designed to identify the root cause of leaks, fastener failure, or material deterioration before recommending a repair approach. Every project begins with a <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic roof inspection</Link> to assess conditions under the Florida Building Code and determine whether targeted repair is appropriate versus broader corrective work.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center text-lg shadow-lg shadow-red-600/20"
                >
                  Schedule a Free Roof Inspection
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
                Common Roof Repair Scenarios in {cityName}
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Tile Roof Repairs
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Cracked, slipped, or wind-lifted tile is repaired by removing affected units, inspecting underlayment integrity, and reinstalling matching replacement tiles. If underlayment deterioration is discovered, localized sections can be replaced during the repair.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Flat Roof Leak Repairs
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Modified bitumen, TPO, or built-up roofing systems are repaired by identifying membrane breaches, removing damaged sections, and heat-welding or torch-applying patching materials that restore waterproofing continuity.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Shingle Roof Repairs
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Damaged shingles are removed and replaced with matching units. If wind-driven rain has compromised decking or underlayment, affected areas are dried and reinforced before new shingles are installed.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Metal Roof Repairs
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Panel fastener failure, sealant breakdown, or localized corrosion is addressed by re-securing panels, replacing damaged fasteners, and resealing penetrations with UV-stable elastomeric compounds.
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
                Repair or Replace? Key Decision Factors
              </h2>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 space-y-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Extent of Damage</h3>
                    <p className="text-zinc-300">
                      If damage is localized (under 25% of the roof surface), repair is often feasible. Widespread deterioration typically warrants full replacement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Age of Existing System</h3>
                    <p className="text-zinc-300">
                      Repairs on roofs beyond their expected service life may not provide long-term value compared to replacement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Code Compliance Thresholds</h3>
                    <p className="text-zinc-300">
                      Florida Building Code may require bringing the entire roof to current standards if repair area exceeds threshold percentages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Structural Integrity</h3>
                    <p className="text-zinc-300">
                      If decking is compromised over large areas, replacement may be more cost-effective than piecemeal structural reinforcement.
                    </p>
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
