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
                  Roofs in {cityName} take a beating. Strong sun, heavy storms, and year-round heat all speed up wear and tear. That's why we start every repair with a <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic roof inspection</Link>. We find the real cause of the problem — whether it's a leak, loose fasteners, or worn materials. Then we give you a clear plan based on <a href="https://www.floridabuilding.org/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 underline transition-colors">Florida Building Code</a> standards: fix the issue or replace the roof.
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

        {/* Why Timely Roof Repair Matters */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Timely Roof Repair Matters in {cityName}
              </h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  A small roof leak in {cityName} can escalate quickly. Florida's humidity means moisture trapped under damaged roofing materials promotes mold growth within 48–72 hours. What starts as a minor drip can lead to rotted decking, compromised trusses, and interior damage that costs thousands more than the original repair would have.
                </p>
                <p>
                  Beyond structural concerns, delaying repairs can affect your insurance coverage. Many Florida insurers require roofs to be in good condition as a condition of coverage. If an adjuster finds pre-existing damage that wasn't addressed, storm damage claims can be denied or reduced. Keeping your roof in repair-ready condition protects both your home and your policy.
                </p>
                <p>
                  Our repair process starts with a thorough <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic inspection</Link> to identify every issue — not just the obvious one. We document everything with photos and provide a written scope of work before any repair begins. No guesswork, no surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Repair Process */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Our Roof Repair Process
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { step: '1', title: 'Free Diagnostic Inspection', desc: `We inspect your entire roof system — not just the area you noticed. We check for hidden damage, code compliance issues, and potential problem areas specific to ${cityName}'s weather patterns.` },
                  { step: '2', title: 'Written Scope & Estimate', desc: 'You receive a detailed proposal explaining exactly what needs to be done, what materials we\'ll use, and what it will cost. No vague estimates or hidden charges.' },
                  { step: '3', title: 'Permitting (When Required)', desc: 'For repairs that exceed Florida Building Code thresholds, we pull all necessary permits and coordinate inspections. We handle the paperwork so you don\'t have to.' },
                  { step: '4', title: 'Professional Repair', desc: 'Our crews use code-compliant materials and installation methods. We don\'t cut corners on fasteners, sealants, or underlayment — even on small repairs.' },
                  { step: '5', title: 'Documentation & Photos', desc: 'We photograph before, during, and after every repair. This documentation supports insurance claims, future wind mitigation inspections, and resale disclosures.' },
                  { step: '6', title: 'Final Inspection & Warranty', desc: 'After completion, we walk you through the work and provide warranty documentation. For qualifying repairs, we can issue a 5-year certification letter for insurance purposes.' },
                ].map((item) => (
                  <div key={item.step} className="bg-black border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3">{item.step}</span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-zinc-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Storm Damage Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Storm Damage Roof Repair in {cityName}
              </h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  {cityName} sits in one of the most storm-active regions in the United States. Hurricane-force winds, driving rain, and hail can damage even well-maintained roofs. After a storm, the priority is getting your home protected quickly while ensuring the repair meets Florida Building Code standards.
                </p>
                <p>
                  We respond to storm damage calls promptly with emergency tarping when needed to prevent further water intrusion. Once conditions allow, we perform a full inspection and provide documentation you can submit to your insurance carrier. We don't inflate damage reports or push unnecessary replacements — we tell you exactly what happened and what it takes to fix it properly.
                </p>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-bold mb-4 text-white">After a Storm: What to Do</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" /><span>Document visible damage with photos from ground level — do not climb on the roof</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" /><span>Contact your insurance company to open a claim, even before repairs are estimated</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" /><span>Call a licensed contractor for a professional inspection — avoid door-to-door storm chasers</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" /><span>Keep all receipts for temporary repairs (tarps, water extraction) as these are typically reimbursable</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost & Insurance Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Roof Repair Costs in {cityName}
              </h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Roof repair costs in {cityName} vary based on the type of damage, roofing material, and scope of work. Minor repairs like replacing a few cracked tiles or resealing a vent boot typically range from $300 to $800. More extensive repairs involving underlayment replacement, structural patching, or large-area restoration can range from $1,500 to $5,000 or more.
                </p>
                <p>
                  We provide detailed, itemized estimates so you know exactly what you're paying for. There are no hidden fees or surprise charges. If we discover additional issues during the repair that weren't visible during inspection, we stop and discuss them with you before proceeding.
                </p>
                <p>
                  For homeowners concerned about costs, a comprehensive repair with a <strong className="text-white">5-year certification letter</strong> can be a smart alternative to full replacement — extending your roof's insurable life at a fraction of the cost. Learn more about the <Link to="/roof-repair/" className="text-red-600 hover:text-red-500 underline transition-colors">5-year roof certification process</Link>.
                </p>
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
                      The <a href="https://www.floridabuilding.org/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 underline transition-colors">Florida Building Code</a> has a rule: if the repair covers too large an area, you must bring the whole roof up to current code.
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
