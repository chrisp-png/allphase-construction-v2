import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ChevronRight,
  Camera,
  FileText,
  ClipboardCheck,
  Layers,
  Droplets,
  Wind,
  Shield,
  AlertTriangle,
  BadgeCheck,
  MapPin,
  Home,
  Waves,
} from 'lucide-react';

export default function TileRoofInspectionPalmBeachCountyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Tile Roof Inspection Palm Beach County | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional tile roof inspections in Palm Beach County. Diagnostic evaluation of underlayment, fastening systems, and concealed failure patterns in coastal environments. Licensed contractors familiar with HVHZ requirements.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tile Roof Inspection in Palm Beach County",
      "serviceType": "Tile Roof Inspection",
      "description": "Professional tile roof inspections for concrete and clay tile systems throughout Palm Beach County, Florida. Diagnostic evaluation includes underlayment assessment, fastening integrity, and structural attachment analysis.",
      "url": "https://allphaseconstructionfl.com/tile-roof-inspection-palm-beach-county",
      "provider": {
        "@id": "https://allphaseconstructionfl.com/#business"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Palm Beach County, Florida"
      }
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
            <span className="text-white">Tile Roof Inspection Palm Beach County</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tile Roof Inspection Services in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Palm Beach County
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-4xl">
            Diagnostic Tile Roof Evaluations for Coastal, Aging, and Insured Properties
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact/"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20 text-center"
            >
              Schedule Tile Roof Inspection
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
              <BadgeCheck className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-sm text-red-600 font-medium">General Contractor</p>
                <p className="text-xl font-bold text-white">CGC-1526236</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-6 py-3">
              <BadgeCheck className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-sm text-red-600 font-medium">Roofing Contractor</p>
                <p className="text-xl font-bold text-white">CCC-1331464</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — INTRODUCTION */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Professional Tile Roof Inspections in Palm Beach County
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              Tile roof failures commonly occur beneath the surface, where underlayment, fastening systems, and structural components deteriorate independent of visible tile condition. The tile material itself may appear intact while the roofing system beneath has reached the end of its functional service life.
            </p>

            <p>
              Palm Beach County's coastal environment produces accelerated deterioration of concealed roofing components through sustained heat exposure, salt air infiltration, and elevated moisture levels. Coastal wind loads, particularly in barrier island and oceanfront locations, subject tile attachment systems to constant stress that gradually degrades fastening integrity over time.
            </p>

            <p>
              The region's large inventory of aging tile installations, many dating from the building activity of the 1990s and 2000s, has reached the service life threshold where underlayment replacement becomes necessary. Visual assessment from grade provides no reliable indication of underlayment condition, fastener integrity, or concealed water intrusion patterns.
            </p>

            <p>
              Water penetration in tile roof assemblies typically originates at flashing junctions, penetration seals, or compromised underlayment rather than at displaced or damaged tiles. The open design of tile roofing allows water to migrate beneath tiles through capillary action and wind-driven movement. By the time interior evidence appears, substantial deck deterioration may already exist.
            </p>

            <p>
              Professional tile roof inspection establishes the factual condition of the complete roofing assembly through systematic evaluation of both visible and concealed components. This diagnostic process provides the information necessary to determine whether repair, restoration, or complete replacement represents the technically appropriate and cost-effective solution.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY TILE ROOFS REQUIRE INSPECTION */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Tile Roofs Require Inspection
          </h2>

          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Layers className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Concealed Underlayment Deterioration</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Tile roof underlayment experiences thermal cycling, UV penetration through tile gaps, and moisture exposure that produce gradual material breakdown. Standard 30-pound felt and first-generation synthetic underlayments commonly installed in Palm Beach County through the early 2000s deteriorate within 15–20 years under local climatic conditions. Underlayment failure produces water intrusion while tile material remains structurally sound. Surface inspection cannot determine underlayment condition without selective tile removal and direct examination.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Tile Adhesion and Fastening Systems</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Florida Building Code mandates mechanical fastening for concrete and clay tile in High Velocity Hurricane Zones, which includes the entirety of Palm Beach County's coastal municipalities. However, older installations may rely solely on foam adhesive, and even properly fastened systems incorporate foam as supplemental attachment. Foam adhesives degrade over time through thermal exposure and moisture infiltration, losing bond strength and allowing tile movement under wind load. Mechanical fasteners may corrode in coastal environments, back out from thermal cycling, or pull through deteriorated deck substrate. These concealed failures are not apparent without systematic inspection involving selective tile removal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Droplets className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Capillary Water Migration</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Tile roof systems are not continuous sealed assemblies. Water routinely migrates beneath tiles through capillary action, surface tension, wind pressure, and gravity. The underlayment functions as the primary water barrier, not the tile material itself. When underlayment integrity fails or when flashing details are improperly executed, water enters the building envelope at locations distant from any visible tile damage or displacement. Leak diagnosis based solely on interior staining location is unreliable in tile roof systems due to water migration patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Waves className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Coastal Wind Exposure and Uplift</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Coastal locations throughout Palm Beach County experience sustained exposure to onshore wind patterns and periodic tropical weather systems. Tile roofs must resist design wind loads exceeding 170 mph in HVHZ zones, with elevated pressures in coastal exposure categories. Attachment methods that perform adequately under normal conditions may fail catastrophically during hurricane-force wind events. Fastener spacing, foam coverage patterns, and batten attachment all affect uplift resistance. Professional inspection evaluates attachment integrity and identifies deficiencies that elevate failure risk during severe weather exposure.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Home className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Aging Concrete and Clay Tile Systems Common in Palm Beach County</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Tile roofing installations proliferated throughout Palm Beach County during the residential construction boom of the 1990s and 2000s. A substantial portion of the county's tile roof inventory has reached or exceeded the typical service life of underlayment and fastening components. Concrete tiles from this period may exhibit surface spalling, efflorescence, and structural degradation from decades of thermal cycling and coastal exposure. Clay tiles generally demonstrate superior longevity but are equally dependent on underlayment and fastening system integrity. Professional inspection establishes whether existing tile material retains sufficient condition to justify underlayment replacement or whether complete system replacement is warranted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT A TILE ROOF INSPECTION EVALUATES */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            What a Tile Roof Inspection Evaluates
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Professional tile roof inspection involves systematic evaluation of visible and concealed system components to establish factual conditions and identify deficiencies affecting performance and remaining service life.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Layers className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Tile Condition and Displacement</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Assessment of tile fractures, spalling, displacement, and material degradation. Identification of loose, missing, or improperly secured tiles that compromise weather protection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Underlayment Performance</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Evaluation of underlayment condition through selective tile removal where necessary. Identification of deterioration, improper lapping, inadequate materials, or installation deficiencies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <ClipboardCheck className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Fastener and Attachment Integrity</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Verification of mechanical fastening presence, spacing, and adequacy. Assessment of foam adhesive coverage, bond strength, and degradation in coastal environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Flashing and Transition Details</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Evaluation of valley flashings, roof-to-wall terminations, penetration boots, and hip/ridge cap integration for proper installation and water-tightness.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Droplets className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Water Intrusion Indicators</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Identification of active leaks, moisture staining, and historical water intrusion patterns. Tracing of leak pathways to actual failure points within the roofing assembly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Home className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Structural Deck Condition</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Assessment of roof deck integrity, deflection, deterioration, and load-bearing capacity where accessible during the inspection process.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Florida Building Code and HVHZ Considerations</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Documentation of existing installation methods relative to current code requirements and High Velocity Hurricane Zone provisions applicable in coastal Palm Beach County.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Camera className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Photographic Documentation</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Comprehensive photographic record of findings, deficiencies, and conditions for insurance claims, real estate transactions, or engineering review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHEN A TILE ROOF INSPECTION IS NECESSARY */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When a Tile Roof Inspection Is Necessary
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Tile roof inspection becomes necessary when diagnostic information is required to determine the appropriate corrective action or when documentation is needed for insurance, underwriting, or transaction purposes.
          </p>

          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Leaks Without Visible Tile Damage</h3>
                <p className="text-zinc-300 leading-relaxed">
                  When water intrusion occurs but exterior tile appears intact, inspection identifies the actual cause — typically underlayment failure, flashing deficiencies, or concealed attachment deterioration rather than tile damage.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Storm or Coastal Wind Exposure</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Post-storm evaluation documents wind damage, tile displacement, and attachment failures for insurance claims. Coastal properties should obtain periodic inspections to verify attachment integrity given sustained wind exposure and salt air corrosion effects.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Aging Tile Roofs (15+ Years)</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Tile roof systems approaching or exceeding 15 years typically experience underlayment degradation regardless of visible tile condition. Inspection establishes remaining service life and identifies developing issues before catastrophic failure or extensive water damage.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Insurance Underwriting or Renewal</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Insurance carriers increasingly require roof inspections for policy renewals, particularly for roofs 15+ years old. Florida Statute 627.7011(5) authorizes licensed contractors to certify remaining useful life to prevent policy non-renewal based solely on roof age.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Pre-Purchase Evaluations</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Prospective homebuyers should obtain professional tile roof inspections before purchase. Surface appearance provides no reliable indication of remaining service life or concealed deficiencies. Pre-purchase inspection identifies deferred maintenance and estimates near-term replacement costs.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Uncertainty Between Repair and Replacement</h3>
                <p className="text-zinc-300 leading-relaxed">
                  When the appropriate corrective action is unclear, professional inspection provides the diagnostic information necessary to determine whether repair, underlayment replacement, or full system replacement represents the technically sound and cost-effective approach.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 5 — INSPECTION VS REPAIR VS REPLACEMENT */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Inspection vs Repair vs Replacement
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-10">
            <p>
              Inspection is a diagnostic process that identifies conditions and provides information. Repair and replacement are corrective actions based on inspection findings.
            </p>

            <p>
              A tile roof inspection establishes the factual condition of the roofing assembly. It documents tile integrity, underlayment performance, fastening adequacy, and flashing condition. The inspection process does not include repair work — it produces documentation and professional recommendations based on observed conditions.
            </p>

            <p>
              Repair addresses isolated, confirmed defects while preserving the existing roofing system. For tile roofs, repair may include replacing damaged tiles, correcting flashing deficiencies, or addressing localized leak sources. Repair becomes appropriate when the underlying underlayment and attachment systems retain sufficient service life and the deficiencies are limited in scope and extent.
            </p>

            <p>
              Replacement involves complete system removal and installation of a new roofing assembly meeting current Florida Building Code requirements. Tile roof replacement becomes necessary when underlayment has failed system-wide, when tile material has degraded beyond repair, or when the cost of comprehensive restoration approaches or exceeds replacement cost. In many cases, existing tile may be salvaged and reinstalled over new underlayment if material condition and design remain adequate.
            </p>

            <p>
              Inspection determines the correct path. The inspection findings establish whether repair is technically sufficient or whether replacement is required. This evaluation should be based on material condition, code compliance, remaining service life, and engineering judgment — not predetermined sales objectives or arbitrary policies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/roof-inspection/" className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <ClipboardCheck className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Professional Roof Inspection Services
              </h3>
              <p className="text-zinc-400 mb-4">
                Comprehensive diagnostic evaluations for all roofing systems, including detailed reports and professional recommendations based on code and condition
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link to="/tile-roofing/" className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Layers className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Tile Roofing Installation & Restoration
              </h3>
              <p className="text-zinc-400 mb-4">
                Concrete and clay tile roof systems with proper underlayment, mechanical fastening, and HVHZ-compliant installation methods
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SERVICE AREA CONTEXT */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <MapPin className="w-12 h-12 text-red-600 flex-shrink-0" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Tile Roof Inspection Coverage Throughout Palm Beach County
            </h2>
          </div>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              All Phase Construction USA provides professional tile roof inspection services throughout Palm Beach County, including <Link to="/locations/west-palm-beach" className="text-red-500 hover:text-red-400 underline transition-colors">West Palm Beach</Link>, <Link to="/locations/boca-raton" className="text-red-500 hover:text-red-400 underline transition-colors">Boca Raton</Link>, <Link to="/locations/delray-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Delray Beach</Link>, <Link to="/locations/boynton-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Boynton Beach</Link>, <Link to="/locations/wellington" className="text-red-500 hover:text-red-400 underline transition-colors">Wellington</Link>, Jupiter, Palm Beach Gardens, Lake Worth Beach, Royal Palm Beach, and all surrounding municipalities.
            </p>

            <p>
              Our familiarity with coastal construction practices, prevalent tile roofing materials, and regional failure patterns specific to Palm Beach County informs the inspection process. Construction methods and material specifications have evolved substantially over the past three decades, with significant differences in tile attachment methods, underlayment materials, and code compliance between installations from different eras. Understanding these regional patterns and construction timelines enables accurate diagnosis and appropriate recommendations.
            </p>

            <p>
              Tile roof prevalence in the region reflects both architectural tradition and material performance in coastal subtropical conditions. Concrete and clay tile systems dominate residential construction throughout Palm Beach County, particularly in developments constructed during the 1990s and 2000s building expansion. This widespread tile roof inventory has now reached the age threshold where underlayment deterioration becomes a common occurrence requiring systematic professional evaluation.
            </p>

            <p>
              Coastal exposure in Palm Beach County creates unique challenges for tile roofing systems. Oceanfront and barrier island properties experience salt air infiltration, sustained onshore wind patterns, and elevated moisture levels that accelerate material degradation. Interior county locations experience less salt exposure but sustained heat and UV radiation that affect underlayment service life. Professional inspection must account for these location-specific exposure factors when evaluating system condition and estimating remaining service life.
            </p>

            <p>
              All Phase Construction USA holds both General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) licenses. Our tile roof inspections are performed by personnel with direct installation experience in tile roofing systems, familiarity with HVHZ requirements applicable throughout coastal Palm Beach County, and the statutory authorization to provide insurance certification under Florida Statute 627.7011(5). For properties requiring insurance-compliant certification for Citizens Property Insurance or private carriers, our <Link to="/insurance-roof-inspection/" className="text-red-500 hover:text-red-400 underline transition-colors">Insurance Roof Inspection & Certification Services</Link> provide carrier-accepted documentation and remaining useful life attestation.
            </p>
          </div>
        </div>
      </section>

      {/* Related Inspection Services */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Related Roof Inspection Services
          </h2>
          <p className="text-lg text-zinc-300 mb-10">
            Material-specific inspection protocols for all roofing systems throughout South Florida
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/roof-inspection/"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Comprehensive Roof Inspection
              </h3>
              <p className="text-zinc-400">
                Diagnostic evaluation for all roofing systems across Broward and Palm Beach Counties
              </p>
            </Link>

            <Link
              to="/insurance-roof-inspection/"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Insurance Roof Inspection & Certification
              </h3>
              <p className="text-zinc-400">
                Carrier-compliant roof certification for Citizens Property Insurance and private carriers
              </p>
            </Link>

            <Link
              to="/metal-roof-inspection-palm-beach-county/"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Metal Roof Inspection — Palm Beach County
              </h3>
              <p className="text-zinc-400">
                Standing seam and structural metal roofing evaluation
              </p>
            </Link>

            <Link
              to="/flat-roof-inspection-palm-beach-county/"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Flat & Single-Ply Roof Inspection — Palm Beach County
              </h3>
              <p className="text-zinc-400">
                TPO, PVC, EPDM, and modified bitumen membrane inspection for commercial and low-slope systems
              </p>
            </Link>

            <Link
              to="/tile-roof-inspection-broward-county/"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Tile Roof Inspection — Broward County
              </h3>
              <p className="text-zinc-400">
                Concrete and clay tile system evaluation in Broward County
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule a Tile Roof Inspection
          </h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Professional diagnostic evaluation of your tile roofing system performed by licensed roofing contractors. We provide the documentation and analysis needed to determine repair versus replacement and establish remaining service life for coastal and inland properties.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact/"
              className="px-10 py-5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-xl shadow-lg shadow-red-600/20"
            >
              Schedule a Tile Roof Inspection
            </Link>
            <a
              href="tel:+17542275605"
              className="px-10 py-5 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              Call Now to Speak With a Roofing Specialist
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Licensed & Experienced</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Coastal HVHZ Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Insurance Certification Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
