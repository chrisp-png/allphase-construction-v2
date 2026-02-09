import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function CoralSpringsRoofRepairPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you determine whether my Coral Springs roof needs repair or replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We start with an inspection to confirm whether issues are localized (repairable) or systemic (widespread underlayment failure, extensive moisture intrusion, or recurring detail failures across multiple areas). The recommendation depends on roof type, age indicators, and how consistently the system is performing—not just a single leak."
        }
      },
      {
        "@type": "Question",
        "name": "Do roof repairs in Coral Springs have to meet HVHZ or Florida Building Code requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Coral Springs is in Broward County, where roofing work is commonly reviewed under Florida Building Code requirements associated with the High Velocity Hurricane Zone. Even when a repair is small, the repair method and materials should remain compatible with code expectations—especially at edges, flashings, and wind-exposed details."
        }
      },
      {
        "@type": "Question",
        "name": "Can a tile roof in Coral Springs be repaired, or does broken tile mean the whole roof is failing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many tile issues are repairable when the problem is limited to broken/slipped tiles or a specific flashing/transition. However, tile roofs rely heavily on the underlayment and details beneath the tile. If the underlayment is aged or repeatedly saturated, repairs may need to address more than just the visible tile."
        }
      },
      {
        "@type": "Question",
        "name": "What if my HOA has restrictions on tile or shingle appearance for repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HOAs often require approved colors, profiles, or material documentation—especially on street-facing slopes. We can provide a repair description and help identify compatible materials so you can submit for approval. Final approval timing and requirements remain HOA-controlled."
        }
      },
      {
        "@type": "Question",
        "name": "Will a roof repair affect my insurance coverage or claim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Insurance outcomes depend on your policy and claim review. What we can do is document observable conditions, the likely construction cause of the leak or damage, and the repair scope needed to restore the roof system. Use that documentation when coordinating with your insurer or representative."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Coral Springs Roof Repair | Licensed Roofer in Coral Springs FL"
        description="Expert roof repair in Coral Springs, Florida. Tile, shingle, metal & flat roof repairs. Licensed Broward/Palm Beach contractor. Free inspection: (754) 227-5605."
        schema={faqSchema}
      />
      <main className="flex-grow pt-20">
      <section id="hero" className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white py-20">
            <div className="max-w-6xl mx-auto px-6">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
                <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-zinc-500">Roofing</span>
                <ChevronRight className="w-4 h-4" />
                <Link to="/roofing-services/roof-repair" className="hover:text-red-600 transition-colors">Roof Repair</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Coral Springs</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Roof Repair in Coral Springs, FL
              </h1>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  Roof repair in Coral Springs should start with a diagnosis—not a guess. All Phase Construction USA performs an inspection-first evaluation to confirm the leak path, quantify wind or wear-related damage, and identify any code or installation issues before recommending a repair scope. If you're seeing staining, missing components, or recurring leaks, schedule a <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">diagnostic roof inspection</Link> so repairs target the cause (not just the symptom) and remain compatible with Florida Building Code requirements, including High Velocity Hurricane Zone (HVHZ) detailing used across Broward County.
                </p>
                <p className="text-base">
                  Service area resources: <Link to="/service-areas/coral-springs" className="text-red-600 hover:text-red-500 underline transition-colors">Coral Springs service area</Link> • <a href="https://allphaseconstructionfl.com/roof-cost-calculator/" className="text-red-600 hover:text-red-500 underline transition-colors">roof cost estimate</a> • <Link to="/easy-payments" className="text-red-600 hover:text-red-500 underline transition-colors">financing options</Link>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:7542275605"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (754) 227-5605
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-900 font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  Schedule Inspection
                </Link>
              </div>
            </div>
      </section>

      <section id="common-issues" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
            Common Roof Repair Issues in Coral Springs
          </h2>
          <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
            Coral Springs roofs deal with intense sun, frequent wind-driven rain, and seasonal storm pressure that can expose small weak points quickly. We commonly find issues that look like "a leak," but actually originate from transitions, fastener patterns, or underlayment breakdown—especially after gust events or prolonged UV exposure.
          </p>
          <ul className="space-y-4 text-zinc-700">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span><strong>Active leaks at valleys, wall flashings, and roof-to-wall transitions</strong> (water tracks that show up far from the entry point)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span><strong>Cracked, slipped, or tented tile</strong> from impact, foot traffic, or aging attachment methods</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span><strong>Shingle blow-offs, lifted tabs, and exposed nail lines</strong> after storms (often tied to fastening and adhesive strip performance)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span><strong>Flat/low-slope ponding and seam issues</strong> on patios, modern additions, and commercial roofs</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span><strong>Metal edge and flashing separation</strong> leading to wind-driven rain intrusion at perimeters</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span><strong>Underlayment wear and secondary water barrier failures</strong> that create recurring leaks even after surface patching</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span><strong>Ventilation-related heat stress</strong> (premature aging, brittle materials, and moisture imbalance in the attic)</span>
            </li>
          </ul>
        </div>
      </section>

          <section id="process" className="py-16 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
                Diagnostic Roof Repair Process
              </h2>
              <ol className="space-y-6 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-4">1.</span>
                  <div>
                    <strong className="text-xl text-zinc-900">Symptom mapping and interior context</strong>
                    <p className="mt-2">We note where staining appears, when leaks occur (wind direction, heavy rain, intermittent), and whether prior repairs exist.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-4">2.</span>
                  <div>
                    <strong className="text-xl text-zinc-900">Roof-surface and perimeter inspection</strong>
                    <p className="mt-2">We inspect field areas, perimeters, penetrations, walls, and transitions. Many Coral Springs leaks originate at edges and details—not the middle of the roof plane.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-4">3.</span>
                  <div>
                    <strong className="text-xl text-zinc-900">Material-specific evaluation</strong>
                    <p className="mt-2"><strong>Tile:</strong> check broken/slipped units, hip/ridge conditions, mortar/adhesive condition, and underlayment age indicators.</p>
                    <p className="mt-2"><strong>Shingle:</strong> check tab lift, missing shingles, nail placement patterns, flashing interfaces, and granule loss.</p>
                    <p className="mt-2"><strong>Flat:</strong> check seams, scuppers/drains, penetrations, and ponding-related stress points.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-4">4.</span>
                  <div>
                    <strong className="text-xl text-zinc-900">Code and wind-resistance considerations (HVHZ)</strong>
                    <p className="mt-2">In Broward County, repair details often need to align with HVHZ expectations—especially at edges, fastening, adhesives, and flashing methods that influence wind performance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-4">5.</span>
                  <div>
                    <strong className="text-xl text-zinc-900">Repair scope definition</strong>
                    <p className="mt-2">We separate cosmetic issues from water-entry risks, identify any deck/fastener substrate concerns, and define a repair that restores function without creating mismatched materials or incompatible transitions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-4">6.</span>
                  <div>
                    <strong className="text-xl text-zinc-900">Documentation and execution plan</strong>
                    <p className="mt-2">We document repair areas, outline sequencing, and coordinate access requirements (especially for HOA communities and multi-unit properties).</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section id="roof-systems" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
                Roof Systems Repaired in Coral Springs
              </h2>
              <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
                Coral Springs properties include a mix of tile, shingle, and low-slope roofing—often with complex transitions over entries, patios, and lanais. We repair roof systems by matching the material behavior and detailing requirements, not by applying one-size patching.
              </p>
              <ul className="space-y-4 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span><strong>Concrete and clay tile roofing</strong> (individual tile replacement, hip/ridge repairs, flashing corrections, underlayment-targeted repairs where appropriate)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span><strong>Architectural asphalt shingles</strong> (wind damage repairs, flashing repairs, selective replacement sections, ventilation-related corrective repairs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span><strong>Flat and low-slope systems</strong> including modified bitumen and single-ply (seam and penetration repairs, drainage corrections, perimeter metal integration)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span><strong>Metal roofing details</strong> (edge metal/flashing repairs, fastener/sealant corrections at penetrations and terminations)</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="hoa-insurance" className="py-16 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
                HOA and Insurance Coordination
              </h2>
              <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
                <p>
                  Many Coral Springs neighborhoods operate under HOA architectural standards. Roof repairs may require approved materials, color matching, and defined work hours—especially for visible slopes and perimeter details. We can help by documenting the issue, providing a repair description that aligns with HOA submittal expectations, and planning staging/access to reduce disruption.
                </p>
                <p>
                  If insurance is involved, the most useful first step is clear documentation of what's present, what failed, and what repairs are technically appropriate. We focus on construction facts—roof system components, observed damage, and repair feasibility—so you can coordinate next steps with your insurer or representative without relying on assumptions or guarantees.
                </p>
              </div>
            </div>
          </section>

          <section id="planning-tools" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
                Roof Repair Planning Tools
              </h2>
              <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
                Use the guide below to connect common Coral Springs roof symptoms with likely causes and repair approaches. A diagnostic inspection confirms the actual entry point and whether adjacent details (flashing, underlayment, edges, transitions) need to be included for a durable repair.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-zinc-300">
                  <thead>
                    <tr className="bg-zinc-100">
                      <th className="border border-zinc-300 px-4 py-3 text-left font-semibold text-zinc-900">What You're Seeing</th>
                      <th className="border border-zinc-300 px-4 py-3 text-left font-semibold text-zinc-900">Common Coral Springs Cause</th>
                      <th className="border border-zinc-300 px-4 py-3 text-left font-semibold text-zinc-900">Why It Matters</th>
                      <th className="border border-zinc-300 px-4 py-3 text-left font-semibold text-zinc-900">Typical Repair Approach</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-700">
                    <tr>
                      <td className="border border-zinc-300 px-4 py-3">Ceiling stain that grows after wind-driven rain</td>
                      <td className="border border-zinc-300 px-4 py-3">Flashing separation at a wall transition or penetration; water traveling along underlayment</td>
                      <td className="border border-zinc-300 px-4 py-3">Leak paths often migrate; patching the "stain location" misses the entry point</td>
                      <td className="border border-zinc-300 px-4 py-3">Trace leak path, correct flashing/termination, reseal as required, verify surrounding details</td>
                    </tr>
                    <tr className="bg-zinc-50">
                      <td className="border border-zinc-300 px-4 py-3">Tile pieces in yard or visible cracked tiles</td>
                      <td className="border border-zinc-300 px-4 py-3">Impact damage, foot traffic cracking, or aging attachment at field tiles</td>
                      <td className="border border-zinc-300 px-4 py-3">Broken tiles expose underlayment and allow repeated wetting that accelerates failure</td>
                      <td className="border border-zinc-300 px-4 py-3">Replace damaged tiles with compatible units; check nearby tiles and transitions for displacement</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-300 px-4 py-3">Recurring leak near a valley</td>
                      <td className="border border-zinc-300 px-4 py-3">Valley metal wear, debris buildup, or underlayment fatigue at concentrated flow area</td>
                      <td className="border border-zinc-300 px-4 py-3">Valleys handle high water volume; small defects become major intrusion points</td>
                      <td className="border border-zinc-300 px-4 py-3">Clean/inspect valley, repair or replace valley metal as needed, address underlayment at the valley line</td>
                    </tr>
                    <tr className="bg-zinc-50">
                      <td className="border border-zinc-300 px-4 py-3">Missing shingles or lifted tabs</td>
                      <td className="border border-zinc-300 px-4 py-3">Storm uplift, adhesive strip failure from heat cycling, or fastening pattern issues</td>
                      <td className="border border-zinc-300 px-4 py-3">Wind entry can unzip rows and expose nail lines; leaks can follow quickly</td>
                      <td className="border border-zinc-300 px-4 py-3">Replace missing/damaged shingles, correct fastening where accessible, verify perimeter and flashing integration</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-300 px-4 py-3">Water intrusion around a vent/pipe boot</td>
                      <td className="border border-zinc-300 px-4 py-3">Cracked boot collar, failed sealant, or improper flashing integration</td>
                      <td className="border border-zinc-300 px-4 py-3">Penetrations are frequent leak sources and worsen with UV exposure</td>
                      <td className="border border-zinc-300 px-4 py-3">Replace boot/flashing as appropriate, integrate correctly with the roof covering, seal to manufacturer standards</td>
                    </tr>
                    <tr className="bg-zinc-50">
                      <td className="border border-zinc-300 px-4 py-3">Drips at patio/flat roof edge during heavy rain</td>
                      <td className="border border-zinc-300 px-4 py-3">Edge metal separation, membrane termination failure, or poor drainage/ponding</td>
                      <td className="border border-zinc-300 px-4 py-3">Perimeter failures allow wind-driven water under the system; ponding stresses seams and terminations</td>
                      <td className="border border-zinc-300 px-4 py-3">Repair termination and edge metal integration, address seam/penetration details, evaluate drainage improvements</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-300 px-4 py-3">Rust staining at flashing or metal edge</td>
                      <td className="border border-zinc-300 px-4 py-3">Coating wear, incompatible fasteners, or long-term moisture exposure</td>
                      <td className="border border-zinc-300 px-4 py-3">Corroded metal loses integrity and can open pathways at critical transitions</td>
                      <td className="border border-zinc-300 px-4 py-3">Replace compromised metal/flashing, upgrade fasteners where needed, reseal terminations</td>
                    </tr>
                    <tr className="bg-zinc-50">
                      <td className="border border-zinc-300 px-4 py-3">Granules in gutters and brittle shingle feel</td>
                      <td className="border border-zinc-300 px-4 py-3">UV-driven aging and thermal cycling common in South Florida heat</td>
                      <td className="border border-zinc-300 px-4 py-3">Advanced wear reduces water-shedding and wind resistance; repairs may need broader context</td>
                      <td className="border border-zinc-300 px-4 py-3">Targeted repairs where feasible; evaluate whether widespread aging is driving repeated failures</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="why-us" className="py-16 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
                Why Coral Springs Property Owners Choose All Phase Construction USA
              </h2>
              <ul className="space-y-4 text-zinc-700">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span><strong>Inspection-first repair scope</strong>: We focus on isolating the entry point and the system detail that failed so repairs are functional, not cosmetic.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span><strong>HVHZ-aware detailing</strong>: Coral Springs is in Broward County, where wind-resistance expectations are higher. We plan repairs with perimeter, fastening, and flashing performance in mind.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span><strong>System compatibility</strong>: Repairs are selected to match the existing roof type and its behavior (tile, shingle, low-slope), reducing the risk of creating new weak points.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span><strong>HOA coordination readiness</strong>: We provide repair descriptions and documentation that help homeowners navigate common HOA submission steps without overpromising outcomes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <span><strong>Clear communication</strong>: You'll get a practical explanation of what failed, what's optional vs necessary, and how to plan the repair with minimal disruption.</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="faqs" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
                Roof Repair FAQs – Coral Springs, FL
              </h2>
              <div className="space-y-8">
                <div className="faq-item">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                    How do you determine whether my Coral Springs roof needs repair or replacement?
                  </h3>
                  <p className="text-zinc-700 leading-relaxed">
                    We start with an inspection to confirm whether issues are localized (repairable) or systemic (widespread underlayment failure, extensive moisture intrusion, or recurring detail failures across multiple areas). The recommendation depends on roof type, age indicators, and how consistently the system is performing—not just a single leak.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                    Do roof repairs in Coral Springs have to meet HVHZ or Florida Building Code requirements?
                  </h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Yes. Coral Springs is in Broward County, where roofing work is commonly reviewed under Florida Building Code requirements associated with the High Velocity Hurricane Zone. Even when a repair is small, the repair method and materials should remain compatible with code expectations—especially at edges, flashings, and wind-exposed details.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                    Can a tile roof in Coral Springs be repaired, or does broken tile mean the whole roof is failing?
                  </h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Many tile issues are repairable when the problem is limited to broken/slipped tiles or a specific flashing/transition. However, tile roofs rely heavily on the underlayment and details beneath the tile. If the underlayment is aged or repeatedly saturated, repairs may need to address more than just the visible tile.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                    What if my HOA has restrictions on tile or shingle appearance for repairs?
                  </h3>
                  <p className="text-zinc-700 leading-relaxed">
                    HOAs often require approved colors, profiles, or material documentation—especially on street-facing slopes. We can provide a repair description and help identify compatible materials so you can submit for approval. Final approval timing and requirements remain HOA-controlled.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                    Will a roof repair affect my insurance coverage or claim?
                  </h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Insurance outcomes depend on your policy and claim review. What we can do is document observable conditions, the likely construction cause of the leak or damage, and the repair scope needed to restore the roof system. Use that documentation when coordinating with your insurer or representative.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="cta" className="py-16 bg-red-600 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule a Roof Repair Inspection
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                If you're dealing with a leak, wind damage, or recurring issues, schedule an inspection so the repair is based on verified conditions and code-aware detailing.
              </p>

              <div className="bg-white text-zinc-900 rounded-lg p-8 mb-8 inline-block text-left">
                <p className="font-bold text-xl mb-4">All Phase Construction USA</p>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-red-600" />
                    590 Goolsby Blvd, Deerfield Beach, FL 33442
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-red-600" />
                    <a href="tel:7542275605" className="hover:text-red-600 transition-colors">(754) 227-5605</a>
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-red-600" />
                    <a href="mailto:leads@allphaseusa.com" className="hover:text-red-600 transition-colors">leads@allphaseusa.com</a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7542275605"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  Request Inspection
                </Link>
              </div>
            </div>
          </section>
      </main>
    </>
  );
}
