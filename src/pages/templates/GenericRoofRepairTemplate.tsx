import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ChevronRight, Plus, Minus } from 'lucide-react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';
import NearbyServiceAreas from '../../components/NearbyServiceAreas';
import cities from '../../data/cities.json';
import { isCityIndexable } from '../../config/indexableCities';
import { getNearbyCities } from '../../data/nearbyRoofRepairCities';

export default function GenericRoofRepairTemplate() {
  const { city: citySlug } = useParams<{ city: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const cityData = cities.find(c => c.slug === citySlug);
  const cityName = cityData?.city || citySlug;
  const county = cityData?.county || 'South Florida';

  // Check if this city should be indexed
  const isIndexable = citySlug ? isCityIndexable(citySlug) : false;

  // Get nearby cities for this location
  const nearbyCities = citySlug ? getNearbyCities(citySlug, cities) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: `How do I know if my ${cityName} roof needs repair or replacement?`,
      answer: "We inspect the damage, check your roof's age, and review code rules. Then we tell you if a repair will hold up or if you need a new roof."
    },
    {
      question: `Are roof repairs in ${cityName} required to meet current building codes?`,
      answer: "Yes. Repairs must follow the Florida Building Code and any local rules that apply at the time of work."
    },
    {
      question: "Can cracked or slipped tile roofs be repaired without full replacement?",
      answer: "Yes, in many cases. We can repair single tiles and small underlayment areas if the rest of the roof is in good shape."
    },
    {
      question: "Will my HOA need to approve roof repairs?",
      answer: `Many ${cityName} HOAs require approval, especially for visible work. We can help with the HOA process.`
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
                  Roofs in {cityName} take a beating. Strong sun, heavy storms, and year-round heat all speed up wear and tear. That's why we start every repair with a <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic roof inspection</Link>. We find the real cause of the problem — whether it's a leak, loose fasteners, or worn materials. Then we give you a clear plan: fix the issue or replace the roof.
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
                    We remove cracked, slipped, or wind-lifted tiles and check the layer beneath. Then we install matching tiles in their place. If the underlayment is worn, we replace that section too.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Flat Roof Leak Repairs
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    We find where the membrane has failed and cut out the damaged area. Then we heat-weld or torch-apply new material to seal it up. This works for TPO, modified bitumen, and built-up flat roofs.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Shingle Roof Repairs
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    We pull out the damaged shingles and put in new ones that match. If rain got through and soaked the wood deck or underlayment, we dry and reinforce those areas first.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3" />
                    Metal Roof Repairs
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Loose panels, failed sealant, or rust spots — we fix them all. We re-secure the panels, swap out bad fasteners, and reseal every opening with flexible, UV-resistant sealant.
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
                      If less than 25% of your roof is damaged, a repair usually makes sense. But if the damage is spread across the whole roof, a full replacement is the better call.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Age of Existing System</h3>
                    <p className="text-zinc-300">
                      If your roof is past its expected lifespan, repairs may not last long. A new roof could save you money over time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Code Compliance Thresholds</h3>
                    <p className="text-zinc-300">
                      Florida law has a rule: if the repair covers too large an area, you must bring the whole roof up to current code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Structural Integrity</h3>
                    <p className="text-zinc-300">
                      If the wood decking is damaged across a big area, it's often cheaper to replace the roof than to patch it piece by piece.
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

        <NearbyServiceAreas nearbyCities={nearbyCities} serviceType="roof-repair" />

        <section id="contact" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </section>
      </div>
    </>
  );
}
