import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ChevronRight,
  Thermometer,
  Droplets,
  Camera,
  AlertTriangle,
  Eye,
  Layers,
  Gauge,
  MapPin,
  FileText,
  Shield,
  TrendingDown,
  Zap,
  Radio,
  Scan,
} from 'lucide-react';
import InspectionCTA from '../components/InspectionCTA';

export default function FlatRoofMoistureInfraredInspectionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Flat Roof Infrared Inspection South Florida';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional infrared thermography and moisture detection for flat roofing systems. Non-invasive diagnostic imaging reveals concealed water intrusion, saturated insulation, and membrane failure in commercial and low-slope roofs.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Infrared Roof Inspection & Moisture Detection",
      "serviceType": "Infrared Roof Inspection and Moisture Detection",
      "description": "Infrared thermography and moisture detection services for commercial flat roofing systems. Non-invasive diagnostic imaging identifies concealed moisture intrusion, insulation saturation, and membrane defects.",
      "url": "https://allphaseconstructionfl.com/flat-roof-moisture-infrared-inspection",
      "provider": {
        "@id": "https://allphaseconstructionfl.com/#business"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Broward County, Florida"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Palm Beach County, Florida"
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/roof-inspection/" className="hover:text-red-500 transition-colors">Roof Inspection</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Flat Roof Moisture & Infrared Inspection</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Flat Roof Moisture Intrusion &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Infrared Inspection
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-4xl">
            Non-invasive thermal imaging and moisture detection for commercial and low-slope roofing systems.
            Infrared thermography reveals concealed water intrusion, saturated insulation, and membrane failure
            patterns invisible to visual inspection—establishing factual conditions before capital commitment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact/"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20 text-center"
            >
              Schedule Infrared Inspection
            </Link>
            <a
              href="tel:+17542275605"
              className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              (754) 227-5605
            </a>
          </div>

          {/* License Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-6 py-3">
              <Shield className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-sm text-red-600 font-medium">General Contractor</p>
                <p className="text-xl font-bold text-white">CGC-1526236</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-6 py-3">
              <Shield className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-sm text-red-600 font-medium">Roofing Contractor</p>
                <p className="text-xl font-bold text-white">CCC-1331464</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Flat Roofs Require Infrared Inspection */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Flat Roofs Require Infrared Inspection
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Flat and low-slope roofing assemblies conceal moisture intrusion beneath membrane surfaces. Water
            entering through compromised seams, failed flashings, or punctured membranes migrates laterally
            within the roofing assembly—saturating insulation and deteriorating substrate far from the entry
            point. By the time interior damage becomes visible, the problem has existed for months or years.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <Eye className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Visual Inspection Limitations</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Surface observation identifies obvious conditions—ponding water, blistered membrane,
                    exposed fasteners—but cannot detect concealed moisture beneath intact roofing materials.
                    Seam separation, adhesion failure, and saturated insulation produce no external symptoms
                    until deterioration reaches advanced stages.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <Thermometer className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Thermal Imaging Detection</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Infrared thermography detects temperature differentials caused by moisture presence.
                    Wet insulation retains heat differently than dry materials—creating thermal signatures
                    visible to infrared cameras but invisible to human vision. This non-invasive method
                    maps subsurface moisture without destructive testing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <Droplets className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Lateral Migration Patterns</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Water does not penetrate vertically through flat roof assemblies. It enters at failure
                    points then migrates horizontally along membrane-to-substrate interfaces before
                    penetrating the deck. The interior leak location rarely corresponds to the actual
                    entry point—requiring systematic moisture mapping for accurate diagnosis.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <TrendingDown className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Progressive Deterioration</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Saturated insulation loses thermal performance, increases structural dead load, and
                    promotes deck deterioration. Trapped moisture creates ongoing damage that continues
                    even after surface repairs address visible symptoms. Infrared inspection establishes
                    the full extent of saturation requiring remediation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Moisture Migration in Flat Roof Systems */}
      <section className="py-20 bg-black border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <Droplets className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Understanding Moisture Migration in Flat Roof Systems
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Water behavior in flat roofing assemblies defies intuition. The visible interior leak is rarely
              directly below the roof defect. Understanding how moisture migrates laterally through roofing
              layers explains why surface symptoms mislead—and why diagnostic tools are essential.
            </p>
          </div>

          {/* The Entry Point vs. Leak Location Problem */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-red-600/30 rounded-2xl p-10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              The Entry Point vs. Leak Location Problem
            </h3>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                A building occupant reports water staining on a ceiling tile in the northwest corner office.
                The natural assumption: there's a roof defect directly above that location. In steep-slope
                roofing, this assumption often proves correct—water runs downhill along the slope, penetrates
                at a failure point, and drips onto the nearest interior surface.
              </p>

              <p>
                Flat and low-slope roofs operate differently. The water entering the roofing assembly <span className="text-white font-semibold">does
                not travel straight down</span>. Instead, it follows the path of least resistance through the layered
                roofing assembly—often migrating 10, 20, or 50 feet horizontally before finding a penetration
                point through the structural deck.
              </p>

              <p className="text-white font-semibold text-xl border-l-4 border-red-600 pl-6 py-2">
                The ceiling stain reveals where water finally penetrated the deck—not where it entered the roof.
              </p>

              <p>
                This disconnect between entry and manifestation creates the fundamental diagnostic challenge
                for flat roofing systems. Repairing only the area above the visible leak addresses a symptom
                location, not the actual defect. The moisture entry point remains active, continuing to
                saturate insulation and create new leak paths.
              </p>
            </div>
          </div>

          {/* How Water Migrates Through Flat Roof Assemblies */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8">
              How Water Migrates Through Flat Roof Assemblies
            </h3>

            <div className="space-y-8">
              <div className="bg-zinc-900 border-l-4 border-red-600 rounded-r-xl p-8">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  Initial Membrane Penetration
                </h4>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Water enters through discrete failure points: separated seams where heat-welded or adhered
                  joints have lost integrity, failed penetration flashings around HVAC equipment or roof drains,
                  punctures from foot traffic or impact damage, or deteriorated edge metal where the membrane
                  terminates at perimeter walls or parapets.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Single-ply membranes (TPO, PVC, EPDM) are impermeable when intact—but a 1-inch seam
                  separation or quarter-sized puncture provides sufficient entry for gallons of water during
                  a typical South Florida thunderstorm. The membrane surface may appear completely intact
                  except at the specific 2-3 inch failure zone.
                </p>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 rounded-r-xl p-8">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  Lateral Spread at the Membrane-Insulation Interface
                </h4>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Once water penetrates the membrane, it encounters the insulation layer. Most flat roof
                  assemblies use rigid foam insulation (polyisocyanurate, extruded polystyrene) installed in
                  panels with joints between boards. Water spreads laterally along the membrane-to-insulation
                  interface, following board seams and areas where adhesive coverage is incomplete.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Gravity plays minimal role in low-slope applications—the roof pitch (typically 1/4 inch per
                  foot or less) provides insufficient grade for water to flow directionally. Instead, capillary
                  action, wind pressure differentials during storm events, and the physical path of least
                  resistance determine migration patterns.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  A single entry point can saturate insulation across hundreds of square feet before any interior
                  symptoms appear. The water spreads outward from the entry point like a subsurface stain,
                  completely invisible from interior or exterior observation.
                </p>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 rounded-r-xl p-8">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  Insulation Saturation and Storage
                </h4>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Rigid foam insulation is not designed to resist moisture. Once water contacts the insulation,
                  it begins absorbing into the material structure. Polyisocyanurate (polyiso) insulation—the
                  most common type in commercial flat roofing—has a closed-cell structure that resists initial
                  absorption but deteriorates when continuously exposed to moisture.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Board edges and faces where the factory-applied facer has been damaged or cut during
                  installation become preferential absorption zones. The insulation acts as a reservoir,
                  holding significant water volume within the roofing assembly. A 4x8 foot insulation board
                  can absorb several gallons of water, dramatically increasing its weight and completely
                  destroying its thermal resistance properties.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  This saturated insulation can remain wet for months or years after the membrane entry point
                  has been repaired—continuing to deteriorate the deck substrate and create conditions for
                  secondary leaks at new locations.
                </p>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 rounded-r-xl p-8">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  Substrate Penetration and Interior Manifestation
                </h4>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Water saturating the insulation eventually reaches the structural deck—concrete, lightweight
                  concrete fill, gypsum, plywood, or metal decking depending on building construction. The deck
                  itself is not uniformly permeable. Water finds penetration points at deck joints, fastener
                  penetrations, conduit pass-throughs, or areas where deck material has deteriorated from
                  moisture exposure.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Once water breaches the deck, it follows ceiling joists, light fixture penetrations, or HVAC
                  ductwork routing before manifesting as visible interior damage. The first sign may be ceiling
                  staining, tile sag, or wall discoloration—often 15 to 50 feet horizontally displaced from
                  the actual roof membrane failure point.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Building occupants and facility managers naturally assume the leak source is directly above
                  the visible damage. Contractors unfamiliar with flat roof moisture behavior may cut out and
                  replace membrane in that location—while the actual entry point remains active elsewhere,
                  ensuring the leak recurs after the next significant rain event.
                </p>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 rounded-r-xl p-8">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  Multiple Simultaneous Entry Points
                </h4>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Complex leak scenarios involve multiple membrane failures contributing water to the same
                  general saturation zone. A building may have three separate seam separations, a failed HVAC
                  curb flashing, and deteriorated edge metal all introducing moisture into overlapping areas
                  of the roofing assembly.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  The interior manifestation appears as a single leak—leading to the assumption of a single
                  roof defect. Repair work addressing only the most obvious failure leaves other entry points
                  active. The building owner experiences continued leaking after contractor intervention,
                  creating frustration and distrust. Comprehensive moisture mapping identifies all entry points
                  so remediation work addresses every failure mechanism simultaneously.
                </p>
              </div>
            </div>
          </div>

          {/* Why This Migration Pattern Makes Diagnosis Critical */}
          <div className="bg-gradient-to-br from-red-950/30 to-zinc-900/50 border-2 border-red-600/50 rounded-xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Why This Migration Pattern Makes Professional Diagnosis Critical
            </h3>

            <div className="space-y-4 text-lg text-zinc-200 leading-relaxed">
              <p>
                The lateral migration behavior of moisture in flat roof assemblies means that guesswork-based
                repairs fail predictably. Without diagnostic information establishing where water actually
                entered the system—versus where it manifested internally—repair work becomes expensive trial
                and error.
              </p>

              <p>
                Property owners may engage multiple contractors who each repair different areas above the leak
                location, with the problem persisting after each intervention. The building continues suffering
                water damage. Insulation saturation continues. Interior finishes require repeated restoration.
                The actual membrane failure point remains unaddressed.
              </p>

              <p>
                Infrared thermography and moisture detection tools provide the diagnostic information necessary
                to locate actual entry points, map saturation extent, and identify all contributing failure
                mechanisms. This converts the repair process from guesswork into systematic remediation based
                on factual assessment of conditions.
              </p>

              <p className="text-white font-semibold border-t border-red-600/50 pt-6 mt-6">
                The diagnostic tools do not fix the roof—they provide the information necessary to fix it
                correctly. Understanding what these tools reveal, and how that information guides remediation
                strategy, is essential to achieving lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Infrared Thermography Works */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <Radio className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How Infrared Thermography Works for Roof Moisture Detection
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Infrared roof inspection exploits the thermal properties of wet versus dry roofing materials
              to create moisture maps without physical intrusion into the roofing assembly.
            </p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-zinc-800 rounded-2xl p-10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">The Physics of Thermal Detection</h3>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Solar Energy Absorption</h4>
                  <p>
                    During daylight hours, roofing membranes absorb solar radiation and convert it to heat.
                    Surface temperatures on black membranes can exceed 180°F under direct Florida sun. This
                    absorbed energy radiates into the roofing assembly, heating both membrane and substrate.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Differential Thermal Retention</h4>
                  <p>
                    Water has high specific heat capacity—requiring more energy to change temperature than
                    dry materials. Wet insulation retains absorbed heat longer than dry insulation as
                    ambient temperatures drop after sunset. This creates temperature differentials between
                    wet and dry areas of the same roofing assembly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Evening Thermal Imaging Window</h4>
                  <p>
                    Optimal infrared scanning occurs 1-3 hours after sunset when surface temperatures
                    equalize but subsurface differentials remain. Wet areas appear warmer than surrounding
                    dry sections—creating thermal patterns visible to infrared cameras operating in the
                    8-14 micron wavelength range.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Digital Thermal Mapping</h4>
                  <p>
                    Infrared cameras capture thermal radiation emitted by the roof surface, converting it
                    to digital images where color gradients represent temperature variations. Wet insulation
                    areas appear as distinct thermal anomalies—warmer than surrounding dry sections. These
                    patterns are documented, measured, and overlaid on roof plans for remediation planning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/30 to-zinc-900/50 border-2 border-red-600/50 rounded-xl p-10">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Critical Environmental Requirements</h3>
                <p className="text-zinc-200 text-lg leading-relaxed mb-4">
                  Infrared thermography requires specific weather and timing conditions to produce valid
                  results. The roof must be dry with no recent precipitation. Clear skies are essential—cloud
                  cover interferes with thermal imaging. Wind speeds must be below 15 mph to prevent
                  convective cooling that masks thermal differentials.
                </p>
                <p className="text-zinc-200 text-lg leading-relaxed">
                  South Florida's climate provides favorable conditions most of the year, but summer
                  afternoon thunderstorms and tropical weather systems create extended periods where infrared
                  scanning cannot produce reliable data. Scheduling must account for recent weather and
                  forecast conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Infrared Inspection Reveals */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Infrared Inspection Reveals About Your Flat Roof
          </h2>
          <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
            Thermal imaging provides diagnostic information impossible to obtain through visual observation
            or isolated physical testing. The infrared scan establishes the full scope of moisture
            intrusion—essential for accurate remediation planning and cost estimation.
          </p>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4">
                <Scan className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Extent of Insulation Saturation</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                    Infrared thermography maps the boundaries of wet insulation throughout the roofing
                    assembly. A visible interior leak may correspond to 500 square feet of saturated
                    insulation—or 5,000 square feet. The thermal scan establishes actual conditions rather
                    than assumptions based on visible symptoms.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    This information determines whether selective repair addresses the problem or whether
                    widespread saturation necessitates full roof replacement. Cost estimates based on
                    thermal mapping reflect actual remediation requirements rather than preliminary guesses.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4">
                <MapPin className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Multiple Entry Point Identification</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                    Flat roofs frequently have multiple simultaneous leak sources—a failed HVAC curb,
                    separated membrane seam, and deteriorated drain flashing all contributing moisture to
                    the same general area. Interior damage appears as one leak while infrared imaging
                    reveals three distinct entry points requiring individual repair.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Addressing only the most obvious defect leaves other moisture sources active. Thermal
                    imaging identifies all entry points so remediation work addresses every failure
                    mechanism contributing to the problem.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4">
                <Layers className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Substrate Condition Indicators</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                    Extensive moisture saturation often indicates substrate deterioration beneath the
                    insulation layer. Wood decks rot when continuously exposed to moisture. Lightweight
                    concrete fills deteriorate. Structural steel corrodes. While infrared imaging cannot
                    directly assess substrate conditions, extensive saturation patterns suggest deck
                    investigation is warranted.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Core sampling or test cuts in thermally-identified wet areas verify substrate condition
                    before committing to repair versus replacement decisions. This targeted investigation
                    approach minimizes unnecessary destructive testing while ensuring critical information
                    is obtained.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4">
                <FileText className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Documentation for Insurance & Engineering</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                    Infrared inspection reports include thermal images, moisture maps overlaid on roof
                    plans, and quantified estimates of affected area. This documentation supports insurance
                    claims by establishing the extent of damage through technical means rather than
                    subjective assessment.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Engineering firms, property management companies, and condominium associations use
                    infrared documentation for capital planning, reserve studies, and stakeholder
                    communication. The thermal imaging report provides defensible technical data for
                    decision-making and budget justification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Documentation and Reporting */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <FileText className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Inspection Documentation and Reporting
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Infrared roof inspection produces comprehensive documentation establishing factual conditions.
              Professional reports combine thermal imaging, visual photography, site mapping, and written
              analysis—providing the information necessary for informed decision-making.
            </p>
          </div>

          <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-2 border-zinc-800 rounded-2xl p-10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">What Professional Inspection Reports Include</h3>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Thermal Imagery</h4>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                    High-resolution infrared photographs capture temperature differentials across the entire
                    roof surface. Color-coded thermal images display heat patterns—with saturated areas
                    appearing as distinct temperature zones contrasting with dry roofing materials. Each
                    thermal image is labeled with date, time, ambient conditions, and camera settings
                    establishing documentation authenticity.
                  </p>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Thermal images show the big-picture moisture distribution—identifying primary saturation
                    zones, secondary moisture areas, and dry regions. Side-by-side comparison of thermal and
                    visual images of the same locations correlates temperature anomalies with visible roof
                    features like seams, penetrations, and equipment.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Visual Photography</h4>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                    Standard digital photographs document visible roof conditions—membrane appearance,
                    surface defects, flashing details, equipment installations, drainage patterns, and access
                    points. Visual documentation establishes context for thermal findings by showing what the
                    roof actually looks like beyond temperature data.
                  </p>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Close-up photography captures specific defects identified during inspection: separated
                    seams, cracked flashings, punctured membrane, missing fasteners, or deteriorated edge
                    metal. These detailed images support repair recommendations by showing exactly what
                    requires attention. Photographs are GPS-tagged when possible to ensure precise location
                    identification.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Mapped Areas of Concern</h4>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                    Thermal imaging findings are overlaid onto roof plans or site maps, creating visual
                    representations showing where moisture intrusion exists. Saturated areas are outlined
                    and labeled with approximate square footage. Entry points—identified through thermal
                    pattern analysis and visual inspection—are marked with specific location indicators.
                  </p>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                    Color-coded zones distinguish between wet, questionable, and dry areas. This mapping
                    allows property owners, contractors, and insurance adjusters to understand problem
                    extent at a glance without interpreting raw thermal data. The map serves as the
                    foundation for scope-of-work development and cost estimation.
                  </p>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    For multi-building facilities or complex roof configurations, individual maps are
                    provided for each distinct roof area. Mapping includes reference markers—HVAC units,
                    skylights, drains, access hatches—enabling field crews to locate identified areas
                    precisely during remediation work.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Written Inspection Findings</h4>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                    Comprehensive written narrative documents inspection conditions, methodology, findings,
                    and observations. The report begins with property identification, inspection date and
                    time, weather conditions (temperature, wind, cloud cover, time since last precipitation),
                    and inspection scope definition. This establishes the context under which data was
                    collected.
                  </p>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                    <span className="text-white font-semibold">Roof system description</span> identifies membrane type, insulation
                    configuration, approximate age, visible conditions, and maintenance history when available.
                    Understanding the existing assembly informs interpretation of moisture patterns and
                    failure mechanisms.
                  </p>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                    <span className="text-white font-semibold">Findings summary</span> quantifies the inspection results: total
                    roof area surveyed, estimated wet area, percentage of roof affected, number of distinct
                    saturation zones, and severity classification (minor isolated moisture versus extensive
                    saturation). This section answers the fundamental question: "How bad is it?"
                  </p>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                    <span className="text-white font-semibold">Detailed observations</span> describe specific problem areas identified
                    through thermal imaging and visual inspection. Each area of concern receives individual
                    notation: approximate size, thermal signature characteristics, suspected entry point
                    location, visible surface conditions, and contributing factors. Multiple photos (thermal
                    and visual) support each described area.
                  </p>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    <span className="text-white font-semibold">Recommendations</span> outline suggested next steps based on findings.
                    For roofs with minor moisture intrusion, targeted repair recommendations identify specific
                    defects requiring attention. For extensively saturated systems, the report may recommend
                    core sampling to verify substrate conditions, comprehensive replacement consideration, or
                    additional investigation before final scope determination. Recommendations remain technical
                    and factual—avoiding sales pressure while providing clear guidance on appropriate action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Report Delivery and Use */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-red-600" />
                Report Delivery Format
              </h3>
              <ul className="space-y-3 text-zinc-300 text-lg">
                <li className="flex gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Digital PDF report with embedded photographs and maps</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>High-resolution image files provided separately for insurance submission or engineering review</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Editable format roof maps (AutoCAD or PDF) for contractor use when requested</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Typical delivery within 3-5 business days of field inspection completion</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Rush reporting available for time-sensitive situations (insurance deadlines, imminent transactions)</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600" />
                How Reports Are Used
              </h3>
              <ul className="space-y-3 text-zinc-300 text-lg">
                <li className="flex gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Contractor scope-of-work development and accurate cost estimation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Insurance claims documentation substantiating damage extent</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Pre-purchase due diligence for commercial property acquisitions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Capital reserve studies establishing replacement timing and budget requirements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Condominium board communication with unit owners regarding special assessments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Engineering analysis determining structural implications of long-term moisture exposure</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Physical Verification When Applicable */}
          <div className="bg-gradient-to-br from-red-950/30 to-zinc-900 border-2 border-red-600/50 rounded-xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Scan className="w-8 h-8 text-red-600" />
              Physical Verification When Applicable
            </h3>

            <div className="space-y-4 text-lg text-zinc-200 leading-relaxed">
              <p>
                Thermal imaging patterns indicate probable moisture presence based on temperature differentials.
                For definitive confirmation—particularly when findings will drive expensive remediation decisions
                or insurance claims—physical verification through capacitance moisture meter readings or strategic
                core sampling may be warranted.
              </p>

              <p>
                <span className="text-white font-semibold">Moisture meter verification:</span> Electronic meters measure
                electrical conductivity or capacitance in roofing materials. Wet insulation conducts electricity
                differently than dry materials—providing numerical readings confirming thermal imaging observations.
                Meter verification adds minimal time and cost while establishing definitive moisture presence beyond
                thermal inference.
              </p>

              <p>
                <span className="text-white font-semibold">Core sampling:</span> In specific situations—substrate condition
                assessment, warranty investigation, forensic evaluation—physical core samples are extracted from
                thermally-identified wet zones. Laboratory analysis of core samples provides absolute moisture
                content measurements, substrate condition verification, and sometimes identification of failure
                causes through material examination.
              </p>

              <p>
                Inspection reports note when physical verification was performed and include documentation of
                meter readings or core sample locations. When thermal imaging alone forms the basis of findings,
                this is clearly stated. Professional reporting distinguishes between inferred moisture presence
                (based on thermal signatures) and confirmed moisture presence (verified through physical testing).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrared vs Other Methods */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Infrared Thermography vs. Other Moisture Detection Methods
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-zinc-700">
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">Detection Method</th>
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">Coverage Area</th>
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">Invasiveness</th>
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">Accuracy</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-red-500 mb-2">Infrared Thermography</div>
                    <div className="text-sm">Thermal imaging of entire roof surface</div>
                  </td>
                  <td className="py-6 px-4 align-top">
                    100% of roof area scanned in single session
                  </td>
                  <td className="py-6 px-4 align-top">
                    Completely non-invasive—no physical contact with roof
                  </td>
                  <td className="py-6 px-4 align-top">
                    Highly accurate for mapping saturation extent under proper conditions
                  </td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-zinc-400 mb-2">Capacitance Moisture Meter</div>
                    <div className="text-sm">Electronic scanning device</div>
                  </td>
                  <td className="py-6 px-4 align-top">
                    Spot measurements—requires systematic grid survey
                  </td>
                  <td className="py-6 px-4 align-top">
                    Non-invasive but requires walking entire roof surface
                  </td>
                  <td className="py-6 px-4 align-top">
                    Accurate but time-intensive for large roofs
                  </td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-zinc-400 mb-2">Core Sampling</div>
                    <div className="text-sm">Physical removal of roof sections</div>
                  </td>
                  <td className="py-6 px-4 align-top">
                    Strategic samples only—cannot survey entire roof
                  </td>
                  <td className="py-6 px-4 align-top">
                    Destructive—creates penetrations requiring sealing
                  </td>
                  <td className="py-6 px-4 align-top">
                    Definitive for sampled locations but limited scope
                  </td>
                </tr>
                <tr>
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-zinc-400 mb-2">Nuclear Moisture Scan</div>
                    <div className="text-sm">Radioactive isotope detection</div>
                  </td>
                  <td className="py-6 px-4 align-top">
                    Full roof coverage possible but time-intensive
                  </td>
                  <td className="py-6 px-4 align-top">
                    Non-invasive but requires specialized licensing
                  </td>
                  <td className="py-6 px-4 align-top">
                    Highly accurate but expensive and regulatory complexity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-xl p-10">
            <h3 className="text-2xl font-bold text-white mb-4">Combined Methodology Approach</h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Optimal flat roof moisture evaluation uses infrared thermography for comprehensive mapping,
              then employs capacitance moisture meters or core sampling in thermally-identified wet areas
              for verification and substrate assessment. This combined approach provides complete diagnostic
              information efficiently.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Infrared imaging establishes the big picture—where moisture exists and how extensively.
              Physical verification methods confirm findings and assess conditions beneath the insulation
              layer where thermal imaging cannot penetrate. Together, these methods produce insurance-defensible
              documentation of actual roof conditions.
            </p>
          </div>
        </div>
      </section>

      {/* When Infrared Inspection Is Appropriate */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When Infrared Inspection Is the Appropriate Diagnostic Method
          </h2>

          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Infrared thermography serves specific diagnostic purposes in flat roof evaluation. Understanding
            when thermal imaging provides value—and when other methods are more appropriate—ensures
            resources are allocated effectively.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-zinc-900 border-l-4 border-green-600 rounded-r-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Appropriate Use Cases
              </h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Active leaks with unknown source or extent of concealed damage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Pre-purchase due diligence for commercial property acquisitions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Insurance documentation requirements for moisture-related claims</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Capital planning for aging flat roof systems requiring condition assessment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Post-storm evaluation where wind-driven rain may have penetrated membrane</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Warranty investigation for recently installed systems with performance issues</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Determining repair scope versus replacement for roofs with known moisture intrusion</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border-l-4 border-amber-600 rounded-r-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                When Other Methods Are Better
              </h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Routine maintenance inspection where no moisture symptoms exist</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Steep-slope roofing systems where thermal differentials are less pronounced</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Recently installed roofs still under contractor warranty and no leak history</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Roof coating evaluation where moisture presence is not the primary concern</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Budget constraints where visual inspection provides sufficient information</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Weather conditions incompatible with thermal imaging (rain, clouds, high wind)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Urgent leak requiring immediate temporary repair without time for diagnostic survey</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/30 to-zinc-900/50 border-2 border-red-600/50 rounded-xl p-10">
            <h3 className="text-2xl font-bold text-white mb-4">Cost-Benefit Consideration</h3>
            <p className="text-zinc-200 text-lg leading-relaxed mb-4">
              Infrared thermography represents an investment in diagnostic information. For large commercial
              roofs where repair decisions involve tens or hundreds of thousands of dollars, thermal imaging
              provides essential data that prevents under-scoping (incomplete repairs that fail to address
              all moisture sources) or over-scoping (replacement when targeted repair would suffice).
            </p>
            <p className="text-zinc-200 text-lg leading-relaxed">
              For small residential flat roofs or situations where obvious symptoms clearly indicate full
              replacement is necessary, infrared inspection may not alter decision-making enough to justify
              the additional cost. Professional assessment determines whether thermal imaging adds value to
              the specific diagnostic situation.
            </p>
          </div>
        </div>
      </section>

      {/* The Inspection Process */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <Camera className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Infrared Inspection Process
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Professional infrared roof inspection follows specific protocols to ensure reliable results
              and actionable documentation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Pre-Scan Roof Assessment & Weather Verification</h3>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Before infrared scanning, the roof receives visual inspection to identify obvious damage,
                  assess surface conditions, and verify the roof is completely dry. Recent weather history
                  is reviewed—infrared scanning requires at least 24-48 hours without precipitation and clear
                  skies during the scanning window.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Roof access logistics, safety requirements, and optimal camera positions are established.
                  For large commercial buildings, aerial platforms or drone-mounted thermal cameras may be
                  required to achieve comprehensive coverage.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Evening Thermal Imaging Survey</h3>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Infrared scanning begins 1-3 hours after sunset when surface temperatures have equalized
                  but subsurface moisture differentials remain detectable. The technician systematically
                  surveys the entire roof surface using a calibrated thermal imaging camera, capturing
                  overlapping images to ensure complete coverage.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Thermal anomalies are documented with GPS coordinates or physical markers for later
                  verification. Camera settings are adjusted for ambient conditions to maximize thermal
                  contrast between wet and dry areas. The scan typically requires 1-3 hours depending on
                  roof size and complexity.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Physical Verification of Thermal Anomalies</h3>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Following thermal imaging, identified wet areas receive physical verification using
                  capacitance moisture meters or strategic core samples. This confirms that thermal signatures
                  correspond to actual moisture presence rather than other factors affecting thermal
                  characteristics (material changes, structural elements, HVAC discharge).
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Core sampling in wet areas provides additional information about substrate condition,
                  insulation type, and assembly construction. Samples are photographed, measured, and retained
                  for documentation. Penetrations created during sampling are properly sealed.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Moisture Map Creation & Documentation</h3>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  Thermal imaging data is processed to create moisture maps showing the extent and location
                  of wet insulation. These maps are overlaid on roof plans with measurements and square
                  footage calculations. Thermal images, verification data, and core sample documentation are
                  compiled into a comprehensive report.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  The report includes narrative findings, quantified estimates of affected area, probable
                  entry point identification, and recommendations for remediation. Documentation is suitable
                  for insurance submission, engineering review, contractor bidding, or internal capital
                  planning purposes.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Results Delivery & Remediation Planning</h3>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  The completed infrared inspection report is delivered with explanation of findings and
                  discussion of remediation options. The moisture map establishes whether targeted repair,
                  comprehensive restoration, or full replacement represents the appropriate intervention
                  based on saturation extent and pattern.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Property owners use this information to obtain competitive proposals from contractors,
                  prepare insurance documentation, or develop multi-year capital improvement plans. The
                  infrared report provides factual basis for decision-making that eliminates guesswork from
                  the remediation planning process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations & Realities */}
      <section className="py-20 bg-black border-y border-red-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Limitations & Realities of Infrared Inspection
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Infrared thermography is a powerful diagnostic tool—but not a universal solution. Understanding
              what thermal imaging can and cannot accomplish ensures realistic expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-red-600" />
                Weather Dependency
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Infrared scanning requires specific environmental conditions—dry roof surface, clear skies,
                minimal wind, proper temperature differentials. South Florida's summer weather pattern
                (afternoon thunderstorms) creates extended periods where scanning cannot be conducted.
                Hurricane season, tropical systems, and frontal passages interrupt scheduling. Infrared
                inspection may require multiple rescheduling attempts before suitable conditions occur.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-red-600" />
                Surface Detection Only
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Thermal imaging detects temperature differentials at or near the membrane surface. It cannot
                assess substrate conditions beneath insulation layers, evaluate structural deck integrity,
                or identify all failure mechanisms. Infrared findings require verification through physical
                testing. Thermal signatures indicate probable moisture—not definitive proof without
                confirmation.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Gauge className="w-6 h-6 text-red-600" />
                Interpretation Requirements
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Infrared images show thermal patterns—not moisture presence directly. Trained technicians
                interpret thermal signatures to distinguish moisture from other conditions affecting
                temperature (structural elements, material transitions, HVAC effects, drainage patterns).
                Inexperienced operators produce false positives or miss actual moisture. Professional
                interpretation backed by physical verification ensures accuracy.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-red-600" />
                Does Not Identify Causes
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Infrared inspection maps where moisture exists—not why it entered. Identifying the source
                defect (failed seam, separated flashing, punctured membrane) requires additional visual
                inspection and diagnostic work. The thermal scan establishes the problem extent; determining
                remediation methods requires understanding failure mechanisms.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/50 to-zinc-900 border-2 border-red-600 rounded-xl p-10">
            <h3 className="text-2xl font-bold text-white mb-4">Infrared as Part of Complete Diagnostic Evaluation</h3>
            <p className="text-zinc-200 text-lg leading-relaxed mb-4">
              Optimal diagnostic protocols combine infrared thermography with comprehensive visual inspection,
              physical moisture verification, strategic core sampling, and analysis of failure mechanisms.
              Thermal imaging provides the big-picture moisture map efficiently—other methods supply the
              detail and confirmation necessary for remediation planning.
            </p>
            <p className="text-zinc-200 text-lg leading-relaxed">
              Professional <Link to="/flat-roof-inspection-broward-county/" className="text-red-500 hover:text-red-400 underline transition-colors">flat roof inspection services</Link> integrate multiple diagnostic methods
              to establish comprehensive understanding of roof conditions. Infrared thermography serves as
              one component of thorough evaluation—not a standalone solution.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnostic Tools vs. Remediation Solutions */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black border-y border-red-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Diagnostic Tools Inform Solutions—They Are Not Solutions Themselves
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Infrared thermography and moisture detection establish factual conditions. These diagnostic
              findings guide remediation strategy—but the repair work itself requires roofing expertise,
              proper materials, and skilled execution completely separate from the diagnostic process.
            </p>
          </div>

          <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-2 border-red-600 rounded-2xl p-10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">What Diagnostic Information Provides</h3>

            <div className="space-y-6 text-lg text-zinc-200 leading-relaxed">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Location of Moisture Intrusion</h4>
                  <p>
                    Infrared thermal imaging and capacitance moisture meters map where water has penetrated the
                    roofing assembly and saturated insulation. This information distinguishes between localized
                    problems amenable to targeted repair versus widespread saturation requiring comprehensive
                    remediation or replacement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Extent of Saturation</h4>
                  <p>
                    Diagnostic surveying quantifies how much of the roof assembly has been compromised. A single
                    interior leak may correspond to 200 square feet or 2,000 square feet of wet insulation. This
                    measurement determines repair scope, material requirements, and cost estimates based on actual
                    conditions rather than assumptions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Identification of Entry Points</h4>
                  <p>
                    Thermal imaging patterns combined with visual inspection identify where water is entering the
                    roofing system—distinguishing between the actual membrane failure locations and the interior
                    manifestation sites. This prevents wasted effort repairing symptom areas while leaving the
                    source defects active.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Documentation for Stakeholders</h4>
                  <p>
                    Infrared reports with thermal images, moisture maps, and quantified data provide defensible
                    documentation for insurance claims, property transactions, condominium association decisions,
                    and internal capital planning. The diagnostic information supports informed decision-making
                    backed by technical evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/50 to-zinc-900 border-2 border-red-600 rounded-2xl p-10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">What Diagnostic Information Does NOT Provide</h3>

            <div className="space-y-6 text-lg text-zinc-200 leading-relaxed">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mt-1">
                  ✗
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Repair of the Roof System</h4>
                  <p>
                    Infrared scanning does not fix leaks, replace saturated insulation, or restore membrane
                    integrity. The diagnostic work establishes what needs repair—the actual remediation requires
                    roofing contractor expertise, appropriate materials, and proper installation methods. Diagnostic
                    services and construction services are distinct professional activities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mt-1">
                  ✗
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Remediation Method Selection</h4>
                  <p>
                    Diagnostic findings reveal the extent of the problem—but determining whether targeted repair,
                    coating restoration, or complete replacement represents the optimal strategy requires additional
                    consideration of roof age, budget constraints, building use requirements, and long-term capital
                    planning objectives. The moisture map informs this decision without making it.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mt-1">
                  ✗
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Prevention of Future Problems</h4>
                  <p>
                    Infrared inspection documents current conditions at the time of scanning. It does not prevent
                    future moisture intrusion, ensure proper repair execution, or monitor ongoing roof performance.
                    Comprehensive roof maintenance programs—separate from diagnostic evaluation—are necessary to
                    sustain roof integrity over time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mt-1">
                  ✗
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Substrate or Structural Assessment</h4>
                  <p>
                    Thermal imaging detects surface and near-surface moisture conditions—it cannot evaluate structural
                    deck integrity, load capacity, or substrate deterioration beneath the insulation layer. Areas
                    identified as wet may require core sampling or structural engineering evaluation before remediation
                    work begins to assess substrate conditions properly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-2 border-zinc-800 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">The Complete Process: Diagnosis {'\u2192'} Planning {'\u2192'} Remediation</h3>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <h4 className="text-xl font-bold text-white">Diagnostic Phase</h4>
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed pl-15">
                  Infrared thermography, moisture meters, visual inspection, and strategic core sampling establish
                  factual conditions. The diagnostic report quantifies saturation extent, identifies entry points,
                  and documents findings with thermal images and moisture maps. This phase answers: <span className="text-white font-semibold">"What
                  is the actual condition of this roofing system?"</span>
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <h4 className="text-xl font-bold text-white">Planning Phase</h4>
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed pl-15">
                  Diagnostic findings inform remediation strategy development. Property owners, facility managers,
                  engineers, and roofing contractors evaluate whether targeted repair, comprehensive restoration,
                  or replacement best serves the building's needs within budget and timeline constraints. Material
                  selection, scope definition, and contractor selection occur during this phase. This answers: <span className="text-white font-semibold">"What
                  intervention strategy addresses the documented conditions most effectively?"</span>
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <h4 className="text-xl font-bold text-white">Remediation Phase</h4>
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed pl-15">
                  Licensed roofing contractors execute the planned intervention—removing saturated materials,
                  replacing compromised components, repairing membrane defects, and restoring system integrity
                  according to manufacturer specifications and Florida Building Code requirements. This phase
                  implements the solution informed by diagnostic findings. This answers: <span className="text-white font-semibold">"Is
                  the work being performed correctly to achieve lasting results?"</span>
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-700">
              <p className="text-zinc-200 text-lg leading-relaxed mb-4">
                <span className="text-white font-semibold">All Phase Construction USA provides both diagnostic services
                and remediation expertise.</span> Our infrared inspection capabilities establish factual conditions.
                Our roofing construction experience translates diagnostic findings into effective repair strategy
                and skilled execution. We understand the complete process from initial assessment through final
                remediation—ensuring diagnostic information produces actionable solutions.
              </p>
              <p className="text-zinc-200 text-lg leading-relaxed">
                Property owners benefit from working with contractors who offer comprehensive capabilities: the
                technical knowledge to interpret diagnostic findings accurately, the construction experience to
                develop appropriate remediation strategies, and the installation expertise to execute repairs
                correctly. Infrared inspection alone provides information—combining diagnostic services with
                qualified remediation converts that information into lasting roof performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Infrared Roof Inspection Service Areas
            </h2>
          </div>

          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            All Phase Construction USA provides infrared thermography and moisture detection services for
            commercial and low-slope residential properties throughout Broward and Palm Beach Counties:
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-red-600" />
                Broward County
              </h3>
              <div className="grid grid-cols-2 gap-3 text-lg text-zinc-300">
                <Link to="/locations/fort-lauderdale" className="text-red-500 hover:text-red-400 underline transition-colors">Fort Lauderdale</Link>
                <Link to="/locations/pompano-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Pompano Beach</Link>
                <Link to="/locations/coral-springs" className="text-red-500 hover:text-red-400 underline transition-colors">Coral Springs</Link>
                <span>Deerfield Beach</span>
                <Link to="/locations/plantation" className="text-red-500 hover:text-red-400 underline transition-colors">Plantation</Link>
                <Link to="/locations/hollywood" className="text-red-500 hover:text-red-400 underline transition-colors">Hollywood</Link>
                <Link to="/locations/davie" className="text-red-500 hover:text-red-400 underline transition-colors">Davie</Link>
                <Link to="/locations/weston" className="text-red-500 hover:text-red-400 underline transition-colors">Weston</Link>
                <span>Parkland</span>
                <span>Miramar</span>
                <span>Pembroke Pines</span>
                <span>Coconut Creek</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-red-600" />
                Palm Beach County
              </h3>
              <div className="grid grid-cols-2 gap-3 text-lg text-zinc-300">
                <Link to="/locations/west-palm-beach" className="text-red-500 hover:text-red-400 underline transition-colors">West Palm Beach</Link>
                <Link to="/locations/boca-raton" className="text-red-500 hover:text-red-400 underline transition-colors">Boca Raton</Link>
                <Link to="/locations/delray-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Delray Beach</Link>
                <Link to="/locations/boynton-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Boynton Beach</Link>
                <Link to="/locations/wellington" className="text-red-500 hover:text-red-400 underline transition-colors">Wellington</Link>
                <span>Palm Beach Gardens</span>
                <span>Jupiter</span>
                <span>Royal Palm Beach</span>
                <span>Lake Worth Beach</span>
                <span>Palm Beach</span>
                <span>Lantana</span>
                <span>Ocean Ridge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Related Diagnostic & Inspection Services
          </h2>
          <p className="text-lg text-zinc-300 mb-10">
            Comprehensive flat roof evaluation services throughout South Florida
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/flat-roof-inspection-broward-county/"
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Flat Roof Inspection — Broward County
              </h3>
              <p className="text-zinc-400">
                Comprehensive diagnostic evaluation for TPO, PVC, EPDM, and modified bitumen systems
              </p>
            </Link>

            <Link
              to="/flat-roof-inspection-palm-beach-county/"
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Flat Roof Inspection — Palm Beach County
              </h3>
              <p className="text-zinc-400">
                Single-ply membrane and built-up roofing system diagnostic services
              </p>
            </Link>

            <Link
              to="/roof-inspection/"
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Comprehensive Roof Inspection
              </h3>
              <p className="text-zinc-400">
                Diagnostic evaluation for all roofing systems across South Florida
              </p>
            </Link>

            <Link
              to="/insurance-roof-inspection/"
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Insurance Roof Inspection & Certification
              </h3>
              <p className="text-zinc-400">
                Carrier-compliant documentation for Citizens Property Insurance and private carriers
              </p>
            </Link>

            <Link
              to="/flat-roofing/"
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Commercial Flat Roofing
              </h3>
              <p className="text-zinc-400">
                Installation, restoration, and replacement of single-ply membrane systems
              </p>
            </Link>

            <Link
              to="/commercial-roofing/"
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Commercial Roofing Services
              </h3>
              <p className="text-zinc-400">
                Complete roofing solutions for commercial and multi-unit properties
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Inspection Services */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Related Inspection Services
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              All Phase Construction USA provides comprehensive roof inspection services throughout
              Broward and Palm Beach Counties—from thermal imaging to traditional visual assessment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar Page Link */}
            <Link
              to="/roof-inspection/"
              className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-2 border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                    Roof Inspection Services
                  </h3>
                  <p className="text-zinc-400 text-sm">Complete inspection overview</p>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Comprehensive guide to professional roof inspection services—covering all roofing types,
                inspection methods, and documentation standards for South Florida properties.
              </p>
            </Link>

            {/* Broward County Flat Roof */}
            <Link
              to="/flat-roof-inspection-broward-county/"
              className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-2 border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                    Flat Roof Inspection Broward
                  </h3>
                  <p className="text-zinc-400 text-sm">Broward County service area</p>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Professional flat and low-slope roof inspection services throughout Broward County—
                Fort Lauderdale, Coral Springs, Plantation, Pompano Beach, and all surrounding cities.
              </p>
            </Link>

            {/* Palm Beach County Flat Roof */}
            <Link
              to="/flat-roof-inspection-palm-beach-county/"
              className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-2 border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                    Flat Roof Inspection Palm Beach
                  </h3>
                  <p className="text-zinc-400 text-sm">Palm Beach County service area</p>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Comprehensive flat roof inspection services throughout Palm Beach County—Boca Raton,
                West Palm Beach, Wellington, Boynton Beach, and all surrounding communities.
              </p>
            </Link>
          </div>

          <div className="mt-12 bg-gradient-to-br from-red-950/30 to-zinc-900 border-2 border-red-600/50 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Complete Inspection Coverage
                </h3>
                <p className="text-zinc-200 text-lg leading-relaxed">
                  Whether you need infrared moisture detection, traditional visual inspection, or comprehensive
                  diagnostic evaluation—All Phase Construction USA provides professional roof assessment services
                  backed by decades of South Florida roofing experience. Our inspection reports deliver the
                  technical documentation necessary for informed repair decisions, insurance claims, and capital
                  planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <InspectionCTA />
    </div>
  );
}
