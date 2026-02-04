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
} from 'lucide-react';

export default function TileRoofInspectionBrowardCountyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Tile Roof Inspection Broward County | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional tile roof inspections in Broward County. Diagnostic evaluation of underlayment, fastening systems, and concealed failure patterns. Licensed contractors familiar with HVHZ requirements.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tile Roof Inspection in Broward County",
      "serviceType": "Tile Roof Inspection",
      "description": "Professional tile roof inspections for concrete and clay tile systems throughout Broward County, Florida. Diagnostic evaluation includes underlayment assessment, fastening integrity, and structural attachment analysis.",
      "url": "https://allphaseconstructionfl.com/tile-roof-inspection-broward-county",
      "provider": {
        "@id": "https://allphaseconstructionfl.com/#business"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Broward County, Florida"
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
            <Link to="/roof-inspection" className="hover:text-red-500 transition-colors">Roof Inspection</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Tile Roof Inspection Broward County</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tile Roof Inspection Services in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Broward County
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-4xl">
            Diagnostic Tile Roof Evaluations for Aging, Storm-Affected, and Insured Properties
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
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
            Professional Tile Roof Inspections in Broward County
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              Tile roof failures occur beneath the surface, where underlayment, fastening systems, and structural components deteriorate long before visible tile damage becomes apparent. Surface evaluation of tile condition provides incomplete information and frequently results in misdiagnosis.
            </p>

            <p>
              Broward County's coastal climate, sustained wind exposure, and inventory of aging tile installations create conditions where concealed system degradation is common. The region falls entirely within Florida's High Velocity Hurricane Zone, subjecting tile roof assemblies to enhanced wind load requirements and specific fastening provisions that differ substantially from standard code.
            </p>

            <p>
              Water intrusion in tile roof systems often originates at flashing transitions, penetration details, or underlayment compromise rather than at displaced tiles. Capillary action and inadequate lapping allow moisture to migrate beneath tiles without producing obvious exterior symptoms. By the time interior staining appears, extensive deck and structural damage may already exist.
            </p>

            <p>
              Professional tile roof inspection identifies conditions not visible from grade or casual observation. Inspection establishes the factual state of the roofing assembly and provides the diagnostic information necessary to determine whether repair, restoration, or full replacement represents the appropriate corrective approach.
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
                  <h3 className="text-2xl font-bold mb-4 text-white">Concealed Underlayment Failure</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Tile roof underlayment degrades from thermal cycling, moisture exposure, and UV penetration through tile gaps. Underlayment failure produces water intrusion symptoms long before tile material deterioration becomes visible. Standard 30-pound felt and early synthetic underlayments deteriorate within 15–20 years in South Florida conditions, yet tiles may retain structural integrity for decades beyond that point. Surface inspection cannot determine underlayment condition.
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
                    Florida Building Code requires mechanical fastening for concrete and clay tile in the High Velocity Hurricane Zone. However, older installations may rely on foam adhesive alone, and even mechanically fastened systems use foam to supplement attachment. Foam adhesive degrades over time, losing bond strength and allowing tiles to shift under wind load. Fasteners may back out, corrode, or pull through deteriorated deck material. These failures occur beneath the tiles and are not apparent without systematic inspection involving selective tile removal.
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
                    Tile roof systems are not sealed assemblies. Water routinely migrates beneath tiles through capillary action, driven by wind pressure, surface tension, and gravity. The underlayment serves as the primary water barrier. When underlayment integrity fails or when flashing details are improperly integrated, water enters the building envelope far from the point where tile displacement or visible damage exists. Leak diagnosis based solely on interior staining location is unreliable in tile roof systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Wind className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Wind Uplift Exposure</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Tile roofs in Broward County must resist sustained wind loads exceeding 170 mph in the HVHZ. Attachment methods that appear adequate under normal conditions may fail catastrophically during hurricane-force wind events. Fastener spacing, foam coverage, and batten securement all affect uplift resistance. Inspection evaluates attachment integrity and identifies deficiencies that increase failure risk during severe weather.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Home className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Aging Concrete and Clay Tile Systems Common in Broward</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Tile roofing installations proliferated throughout Broward County during the 1990s and 2000s building boom. Many of these systems have reached or exceeded the service life of their underlayment and fastening components. Concrete tiles from this era may exhibit surface spalling and structural degradation from prolonged exposure. Inspection establishes whether the existing tile material retains sufficient integrity to justify underlayment replacement or whether full system replacement is warranted.
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
                    Assessment of tile fractures, spalling, displacement, and material degradation. Identification of loose, missing, or improperly secured tiles.
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
                    Evaluation of underlayment condition through selective tile removal where necessary. Identification of deterioration, improper lapping, or inadequate materials.
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
                    Verification of mechanical fastening presence, spacing, and adequacy. Assessment of foam adhesive coverage, bond strength, and degradation.
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
                    Identification of active leaks, moisture staining, and historical water intrusion patterns. Tracing of leak pathways to actual failure points.
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
                    Assessment of roof deck integrity, deflection, deterioration, and load-bearing capacity where accessible during inspection.
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
                    Documentation of existing installation methods relative to current code requirements and High Velocity Hurricane Zone provisions.
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
                    Comprehensive photographic record of findings, deficiencies, and conditions for insurance, sale transactions, or engineering review.
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
                  When water intrusion occurs but exterior tile appears intact, inspection identifies the actual cause — typically underlayment failure, flashing deficiencies, or concealed fastening problems.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Storm Exposure</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Post-storm evaluation documents wind damage, tile displacement, and attachment failures for insurance claims and determines whether repairs meet code thresholds requiring permits or full replacement.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Aging Tile Roofs (15+ Years)</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Tile roof systems approaching or exceeding 15 years typically experience underlayment degradation regardless of visible tile condition. Inspection establishes remaining service life and identifies developing issues before catastrophic failure.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Insurance Underwriting or Renewal</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Insurers increasingly require roof inspections for policy renewals, especially for roofs 15+ years old. Florida Statute 627.7011(5) authorizes licensed contractors to certify remaining useful life to prevent non-renewal based solely on age.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Pre-Purchase Evaluations</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Homebuyers should obtain tile roof inspections before purchase. Surface appearance provides no reliable indication of remaining service life. Pre-purchase inspection identifies deferred maintenance and estimates near-term replacement costs.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Uncertainty Between Repair and Replacement</h3>
                <p className="text-zinc-300 leading-relaxed">
                  When the appropriate corrective action is unclear, inspection provides the diagnostic information necessary to determine whether repair, underlayment replacement, or full system replacement represents the technically sound and cost-effective approach.
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
              A tile roof inspection establishes the factual condition of the roofing assembly. It documents tile integrity, underlayment performance, fastening adequacy, and flashing condition. The inspection process does not include repair work — it produces documentation and professional recommendations.
            </p>

            <p>
              Repair addresses isolated, confirmed defects while preserving the existing roofing system. For tile roofs, repair may include replacing damaged tiles, correcting flashing deficiencies, or addressing localized leak sources. Repair becomes appropriate when the underlying underlayment and attachment systems retain sufficient service life and the deficiencies are limited in scope.
            </p>

            <p>
              Replacement involves complete system removal and installation of a new roofing assembly meeting current code. Tile roof replacement becomes necessary when underlayment has failed, when tile material has degraded beyond repair, or when the cost of comprehensive restoration approaches or exceeds replacement cost. In many cases, existing tile may be salvaged and reinstalled over new underlayment if material condition is adequate.
            </p>

            <p>
              Inspection determines the correct path. The inspection findings establish whether repair is technically sufficient or whether replacement is required. This evaluation should be based on material condition, code compliance, and remaining service life — not predetermined sales objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/roof-inspection" className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <ClipboardCheck className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Professional Roof Inspection Services
              </h3>
              <p className="text-zinc-400 mb-4">
                Comprehensive diagnostic evaluations for all roofing systems, including detailed reports and professional recommendations
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link to="/tile-roofing" className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Layers className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Tile Roofing Installation & Restoration
              </h3>
              <p className="text-zinc-400 mb-4">
                Concrete and clay tile roof systems with proper underlayment, fastening, and HVHZ-compliant installation
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
              Tile Roof Inspection Coverage Throughout Broward County
            </h2>
          </div>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              All Phase Construction USA provides professional tile roof inspection services throughout Broward County, including <Link to="/roofing-contractor-fort-lauderdale-fl" className="text-red-500 hover:text-red-400 underline transition-colors">Fort Lauderdale</Link>, <Link to="/roofing-contractor-coral-springs-fl" className="text-red-500 hover:text-red-400 underline transition-colors">Coral Springs</Link>, <Link to="/roofing-contractor-pompano-beach-fl" className="text-red-500 hover:text-red-400 underline transition-colors">Pompano Beach</Link>, Deerfield Beach, <Link to="/roofing-contractor-plantation-fl" className="text-red-500 hover:text-red-400 underline transition-colors">Plantation</Link>, Hollywood, <Link to="/roofing-contractor-davie-fl" className="text-red-500 hover:text-red-400 underline transition-colors">Davie</Link>, Weston, Pembroke Pines, Miramar, and all surrounding communities.
            </p>

            <p>
              Our familiarity with local construction practices, prevalent tile roofing materials, and regional failure patterns informs the inspection process. Broward County construction methods evolved substantially over the past three decades, with significant differences in tile attachment, underlayment materials, and code compliance between installations from different eras. Understanding these regional patterns enables accurate diagnosis and appropriate recommendations.
            </p>

            <p>
              Tile roof prevalence in the region reflects both architectural preference and material performance in coastal conditions. Concrete and clay tile systems dominate residential construction across Broward County, particularly in developments constructed during the 1990s and 2000s. This widespread tile roof inventory has now reached the age where underlayment deterioration becomes a common occurrence requiring systematic evaluation.
            </p>

            <p>
              All Phase Construction USA holds both General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) licenses. Our tile roof inspections are performed by personnel with direct installation experience in tile roofing systems, familiarity with HVHZ requirements applicable throughout Broward County, and the statutory authorization to provide insurance certification under Florida Statute 627.7011(5). For properties requiring insurance-compliant certification for Citizens Property Insurance or private carriers, our <Link to="/insurance-roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">Insurance Roof Inspection & Certification Services</Link> provide carrier-accepted documentation and remaining useful life attestation.
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
              to="/roof-inspection"
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
              to="/insurance-roof-inspection"
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
              to="/metal-roof-inspection-broward-county"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Metal Roof Inspection — Broward County
              </h3>
              <p className="text-zinc-400">
                Standing seam and structural metal roofing evaluation
              </p>
            </Link>

            <Link
              to="/flat-roof-inspection-broward-county"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Flat & Single-Ply Roof Inspection — Broward County
              </h3>
              <p className="text-zinc-400">
                TPO, PVC, EPDM, and modified bitumen membrane inspection for commercial and low-slope systems
              </p>
            </Link>

            <Link
              to="/tile-roof-inspection-palm-beach-county"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Tile Roof Inspection — Palm Beach County
              </h3>
              <p className="text-zinc-400">
                Concrete and clay tile system evaluation in Palm Beach County
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
            Professional diagnostic evaluation of your tile roofing system performed by licensed roofing contractors. We provide the documentation and analysis needed to determine repair versus replacement and establish remaining service life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
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
              <span>HVHZ Familiarity</span>
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
