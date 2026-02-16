import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ChevronRight,
  Shield,
  Wind,
  Wrench,
  AlertTriangle,
  ClipboardCheck,
  Camera,
  Layers,
  MapPin,
  BadgeCheck,
} from 'lucide-react';

export default function MetalRoofInspectionPalmBeachCountyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Metal Roof Inspection Palm Beach County';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional metal roof inspection services in Palm Beach County. Diagnostic evaluations of standing seam and structural metal roofing systems. Licensed contractors familiar with coastal wind exposure and HVHZ requirements.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Metal Roof Inspection in Palm Beach County",
      "serviceType": "Metal Roof Inspection",
      "description": "Professional metal roof inspections for standing seam and structural metal roofing systems throughout Palm Beach County, Florida. Diagnostic evaluation of concealed fastening, thermal movement, and panel integrity.",
      "url": "https://allphaseconstructionfl.com/metal-roof-inspection-palm-beach-county",
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

  const inspectionComponents = [
    "Panel condition and seam integrity",
    "Fastener, clip, and attachment performance",
    "Thermal movement accommodation",
    "Flashing and penetration details",
    "Sealant and transition degradation",
    "Water intrusion indicators",
    "Structural deck condition",
    "Florida Building Code and HVHZ considerations",
    "Photographic documentation"
  ];

  const whenInspectionNeeded = [
    "Suspected fastener back-out or clip failure",
    "Panel movement or separation",
    "Storm or coastal wind exposure",
    "Aging metal roofs with uncertain remaining service life",
    "Insurance underwriting or renewal",
    "Uncertainty between repair, retrofit, or replacement"
  ];

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
            <span className="text-white">Metal Roof Inspection Palm Beach County</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Metal Roof Inspection Services in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Palm Beach County
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-4xl">
            Diagnostic Metal Roof Evaluations for Coastal, Wind-Exposed, and Aging Properties
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact/"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20 text-center"
            >
              Schedule Metal Roof Inspection
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

      {/* Section 1 - Introduction */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Professional Metal Roof Inspections in Palm Beach County
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              Metal roofing systems depend on concealed attachment systems and thermal movement control that cannot be reliably evaluated from visual surface inspection alone. Panel appearance provides limited information about clip integrity, fastener performance, or structural attachment adequacy.
            </p>

            <p>
              Palm Beach County's coastal exposure subjects metal roofing systems to sustained wind loading, salt-laden moisture, and thermal cycling that accelerate fastener corrosion and panel fatigue. Standing seam systems installed in High Velocity Hurricane Zone jurisdictions require specific clip spacing, attachment methods, and seam strength that differ from standard construction.
            </p>

            <p>
              A professional metal roof inspection evaluates the performance of concealed components, identifies developing failure mechanisms, and provides the diagnostic information necessary to determine whether repair, retrofit, or replacement is appropriate. Surface aesthetics do not correlate reliably with structural performance.
            </p>

            <p>
              Inspection is required before repair, retrofit, or replacement decisions can be made with technical confidence. Without diagnostic evaluation, corrective work addresses symptoms rather than underlying system deficiencies.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Why Metal Roofs Require Inspection */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Metal Roofs Require Specialized Inspection
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-8">
            <p>
              Metal roofing systems function through complex interactions between panel geometry, attachment method, and thermal movement accommodation. Failure modes differ substantially from those affecting tile, shingle, or membrane systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <Shield className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Concealed Fastening and Clip Systems</h3>
              <p className="text-zinc-300 leading-relaxed">
                Standing seam metal roofs use concealed clips to secure panels to the substrate while allowing thermal movement. Clip failure, fastener back-out, and inadequate attachment spacing are not visible from the roof surface but directly affect wind resistance and panel retention.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <Layers className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Thermal Expansion and Contraction Stresses</h3>
              <p className="text-zinc-300 leading-relaxed">
                Metal panels expand and contract with temperature changes. Systems that do not adequately accommodate this movement develop panel distortion, fastener fatigue, and seam separation. Coastal environments accelerate thermal cycling effects.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <AlertTriangle className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Panel Separation, Oil Canning, and Fatigue</h3>
              <p className="text-zinc-300 leading-relaxed">
                Oil canning refers to visible panel waviness caused by stress, improper fastening, or inadequate substrate support. Panel separation at seams indicates clip failure or thermal movement restriction. Both conditions require diagnostic evaluation to determine cause and appropriate correction.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <Wind className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Coastal Wind Exposure and Uplift Forces</h3>
              <p className="text-zinc-300 leading-relaxed">
                Palm Beach County's coastal exposure subjects metal roofs to sustained wind loading and periodic high-intensity storm events. Uplift forces concentrate at panel edges, seams, and penetrations. Attachment deficiencies that remain stable under normal conditions may fail catastrophically under wind loading.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:col-span-2">
              <ClipboardCheck className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Aging Standing Seam and Exposed Fastener Systems Common in Palm Beach County</h3>
              <p className="text-zinc-300 leading-relaxed">
                Many metal roofs installed in Palm Beach County during the 1990s and early 2000s are now approaching or exceeding their design service life. Fastener corrosion, sealant degradation, and panel fatigue accumulate over time. Inspection determines whether the system retains sufficient integrity for continued service or requires replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - What a Metal Roof Inspection Evaluates */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            What a Metal Roof Inspection Evaluates
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            A professional metal roof inspection assesses both visible and concealed components to determine system performance, identify developing failure mechanisms, and document conditions affecting remaining service life.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {inspectionComponents.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-zinc-950 border border-zinc-800 rounded-lg p-6">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - When a Metal Roof Inspection Is Necessary */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When a Metal Roof Inspection Is Necessary
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Metal roof inspection becomes appropriate when system performance is uncertain, when corrective work is being considered, or when documentation is required for insurance or underwriting purposes.
          </p>

          <div className="space-y-4">
            {whenInspectionNeeded.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-lg text-zinc-300 pt-1">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Inspection vs Repair vs Replacement */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Metal Roof Inspection vs Repair vs Replacement
          </h2>

          <div className="space-y-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Camera className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Inspection: Diagnostic Evaluation</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Inspection is a diagnostic process that identifies existing conditions, evaluates system performance, and documents deficiencies. The inspection produces information and recommendations but does not include corrective work. Diagnostic evaluation precedes repair or replacement decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Wrench className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Repair: Addressing Isolated Defects</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Repair work addresses specific, confirmed defects while preserving the existing metal roofing system. Isolated fastener replacement, seam resealing, or flashing correction may be appropriate when the underlying panel system retains adequate integrity. Repair becomes technically viable only after inspection confirms that deficiencies are localized.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Retrofit or Replacement: System-Level Solutions</h3>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    Retrofit involves substantial modification of the existing system, such as re-fastening all panels, replacing concealed clips, or upgrading attachment methods to current code. Full replacement removes the existing metal roof and installs a new system meeting current Florida Building Code requirements.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    The inspection process determines which approach is technically appropriate based on panel condition, attachment integrity, and remaining service life. Cost considerations follow technical feasibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-zinc-950 border-l-4 border-red-600 p-8">
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              For comprehensive information about roof inspection services for all material types, including diagnostic methodology and Florida Building Code requirements, see our main <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">Roof Inspection Services</Link> page.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              For detailed information about metal roofing systems, installation methods, and material specifications, see our <Link to="/metal-roofing/" className="text-red-600 hover:text-red-500 underline transition-colors">Metal Roofing Services</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 - Service Area Context */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Metal Roof Inspection Services Throughout Palm Beach County
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              All Phase Construction USA provides metal roof inspection services throughout Palm Beach County, including <Link to="/roofing-contractor-west-palm-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">West Palm Beach</Link>, <Link to="/roofing-contractor-boca-raton-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Boca Raton</Link>, <Link to="/roofing-contractor-delray-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Delray Beach</Link>, <Link to="/roofing-contractor-boynton-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Boynton Beach</Link>, <Link to="/roofing-contractor-wellington-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Wellington</Link>, Palm Beach Gardens, Jupiter, Lake Worth Beach, and surrounding communities.
            </p>

            <p>
              Our familiarity with coastal construction practices, High Velocity Hurricane Zone requirements, and regional metal roofing installation methods informs the inspection process. We understand the material specifications, attachment systems, and code provisions applicable to metal roofs installed in Palm Beach County over the past three decades.
            </p>

            <p>
              Metal roofing systems have become increasingly prevalent in Palm Beach County due to their wind resistance, longevity, and performance characteristics in coastal environments. Standing seam metal roofs are common on both residential and commercial structures. Exposed fastener metal panels remain in service on many older buildings. Each system type has characteristic failure modes that experienced inspectors recognize.
            </p>

            <p>
              Portions of Palm Beach County fall within the High Velocity Hurricane Zone, requiring enhanced wind load provisions and specific attachment methods for metal roofing systems. Our inspections evaluate compliance with applicable code requirements and identify deficiencies that may affect wind performance or insurance eligibility.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Visual */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-8 h-8 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Serving Palm Beach County
            </h2>
          </div>

          <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            <Link to="/roofing-contractor-west-palm-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">West Palm Beach</Link> • <Link to="/roofing-contractor-boca-raton-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Boca Raton</Link> • <Link to="/roofing-contractor-delray-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Delray Beach</Link> • <Link to="/roofing-contractor-boynton-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Boynton Beach</Link> • <Link to="/roofing-contractor-wellington-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Wellington</Link> • Palm Beach Gardens • Jupiter • Lake Worth Beach • Royal Palm Beach • Lantana • Palm Beach • and surrounding communities
          </p>
        </div>
      </section>

      {/* Related Inspection Services */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Related Roof Inspection Services
          </h2>
          <p className="text-lg text-zinc-300 mb-10">
            Material-specific inspection protocols for all roofing systems throughout South Florida
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/roof-inspection/"
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
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
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Insurance Roof Inspection & Certification
              </h3>
              <p className="text-zinc-400">
                Carrier-compliant roof certification for Citizens Property Insurance and private carriers
              </p>
            </Link>

            <Link
              to="/tile-roof-inspection-palm-beach-county/"
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Tile Roof Inspection — Palm Beach County
              </h3>
              <p className="text-zinc-400">
                Concrete and clay tile system evaluation including underlayment assessment
              </p>
            </Link>

            <Link
              to="/flat-roof-inspection-palm-beach-county/"
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Flat & Single-Ply Roof Inspection — Palm Beach County
              </h3>
              <p className="text-zinc-400">
                TPO, PVC, EPDM, and modified bitumen membrane inspection for commercial and low-slope systems
              </p>
            </Link>

            <Link
              to="/metal-roof-inspection-broward-county/"
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Metal Roof Inspection — Broward County
              </h3>
              <p className="text-zinc-400">
                Standing seam and structural metal roofing evaluation in Broward County
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule a Metal Roof Inspection
          </h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Diagnostic evaluation of metal roofing systems performed by licensed roofing contractors. We provide the technical analysis necessary to determine repair, retrofit, or replacement requirements based on documented conditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact/"
              className="px-10 py-5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-xl shadow-lg shadow-red-600/20"
            >
              Schedule Metal Roof Inspection
            </Link>
            <a
              href="tel:+17542275605"
              className="px-10 py-5 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              (754) 227-5605
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Licensed Roofing Contractors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Metal Roof Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>HVHZ Experience</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
