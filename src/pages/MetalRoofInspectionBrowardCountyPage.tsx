import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  Shield,
  ChevronRight,
  ClipboardCheck,
  AlertTriangle,
  Wind,
  Wrench,
  FileText,
  MapPin,
  ThermometerSun
} from 'lucide-react';

export default function MetalRoofInspectionBrowardCountyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Metal Roof Inspection Broward County | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional metal roof inspections in Broward County. Diagnostic evaluations for wind-exposed, aging, and insured metal roofing systems. HVHZ-compliant assessments.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Metal Roof Inspection in Broward County",
      "serviceType": "Metal Roof Inspection",
      "description": "Professional metal roof inspections for standing seam and structural metal roofing systems throughout Broward County, Florida. Diagnostic evaluation of concealed fastening, thermal movement, and panel integrity.",
      "url": "https://allphaseconstructionfl.com/metal-roof-inspection-broward-county",
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
            <Link to="/roof-inspection/" className="hover:text-red-500 transition-colors">Roof Inspection</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Metal Roof Inspection — Broward County</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Metal Roof Inspection Services in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Broward County
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl leading-relaxed">
            Diagnostic Metal Roof Evaluations for Wind-Exposed, Aging, and Insured Properties
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Metal Roof Inspection
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              (754) 227-5605
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Professional Metal Roof Inspections in Broward County
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 max-w-4xl">
            <p>
              Metal roofing systems function as integrated assemblies where performance depends on attachment
              systems, thermal movement control, and structural interface coordination. Surface condition alone
              provides insufficient data to determine system integrity or remaining service life.
            </p>

            <p>
              Unlike single-membrane or tile systems where visible damage often correlates directly with failure
              mechanisms, metal roofs rely on concealed fastening, clip engagement, and panel interlock — elements
              that cannot be evaluated through visual observation of the finished surface.
            </p>

            <p>
              Broward County's classification as a High Velocity Hurricane Zone imposes stricter attachment
              requirements, wind uplift calculations, and product approval standards. Metal roofing systems
              installed in this jurisdiction must accommodate sustained wind exposure while maintaining thermal
              movement capacity across panels that expand and contract with temperature variation.
            </p>

            <p>
              Professional inspection is required before determining whether a metal roofing system requires
              targeted repair, partial retrofit, or complete replacement. Visual assessment from ground level
              or drone imagery cannot provide the diagnostic data necessary for these decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Metal Roofs Require Inspection */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Metal Roofs Require Inspection
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <Wrench className="w-7 h-7 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Concealed Fastening and Clip Systems</h3>
                  <p className="text-zinc-400">
                    Standing seam metal roofing systems use hidden clips and fasteners that secure panels to
                    the roof deck. These components are not visible once installation is complete. Fastener
                    back-out, clip fatigue, or inadequate attachment cannot be diagnosed without direct inspection
                    of the attachment interface.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <ThermometerSun className="w-7 h-7 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Thermal Expansion and Contraction Stresses</h3>
                  <p className="text-zinc-400">
                    Metal panels expand and contract significantly with temperature changes. In South Florida,
                    surface temperatures can reach 160°F, causing dimensional changes that stress fastening
                    systems. Improperly designed clip placement or rigid attachment can result in panel distortion,
                    seam separation, or fastener failure over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-7 h-7 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Panel Separation, Oil Canning, and Fatigue</h3>
                  <p className="text-zinc-400">
                    Oil canning — visible waviness in flat metal surfaces — indicates stress concentration or
                    inadequate panel support. While often cosmetic, it can signal improper installation or
                    structural movement. Panel separation at seams, fastener pattern failure, or localized
                    deformation requires inspection to determine whether the condition is isolated or systemic.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <Wind className="w-7 h-7 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Wind Uplift Exposure in HVHZ Conditions</h3>
                  <p className="text-zinc-400">
                    High Velocity Hurricane Zone requirements impose specific wind uplift resistance standards.
                    Metal roofs installed before current code revisions may not meet current attachment
                    requirements. Wind-driven panel movement, even if panels remain attached, can indicate
                    inadequate fastening density or clip engagement failure.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <ClipboardCheck className="w-7 h-7 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Aging Standing Seam and Exposed Fastener Systems</h3>
                  <p className="text-zinc-400">
                    Exposed fastener systems (common in commercial or agricultural applications) rely on
                    fasteners that penetrate the metal panel directly. Thermal cycling causes fasteners to
                    loosen over time, creating water intrusion pathways. Standing seam systems age differently,
                    with clip degradation and seam integrity loss being primary concerns. Inspection determines
                    the rate and extent of deterioration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Inspection Evaluates */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            What a Metal Roof Inspection Evaluates
          </h2>

          <p className="text-lg text-zinc-300 mb-8 max-w-4xl">
            A comprehensive metal roof inspection assesses both visible and concealed system components to
            determine structural integrity, attachment performance, and compliance with applicable building codes.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Panel condition and seam integrity:</strong> Assessment of metal
                  panel surfaces for corrosion, coating degradation, impact damage, and seam separation. Evaluation
                  of seam engagement and panel interlock functionality.
                </span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Fastener, clip, and attachment performance:</strong> Inspection
                  of concealed clip systems, fastener engagement, and attachment density. Testing for fastener
                  back-out, clip fatigue, or inadequate penetration. Verification of attachment pattern compliance
                  with wind zone requirements.
                </span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Thermal movement accommodation:</strong> Evaluation of whether
                  the fastening system allows for thermal expansion and contraction without inducing stress on
                  panels or fasteners. Assessment of oil canning and panel distortion as indicators of movement
                  restriction.
                </span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Flashing and penetration details:</strong> Inspection of ridge
                  caps, rake edges, eave trim, valley flashings, and penetration boots. Evaluation of sealant
                  condition and fastener exposure at detail locations.
                </span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Sealant and transition degradation:</strong> Assessment of
                  sealant at panel end laps, reglets, curbs, and roof-to-wall transitions. Determination of
                  whether sealant failure is cosmetic or functional.
                </span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Water intrusion indicators:</strong> Identification of water
                  staining, rust tracking, or active leaks. Correlation of interior water damage with specific
                  roof defects or entry points.
                </span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Structural deck condition:</strong> Where accessible, evaluation
                  of roof deck integrity, fastener pullout resistance, and structural adequacy for the installed
                  metal roofing system.
                </span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Florida Building Code and HVHZ compliance:</strong> Review of
                  installation against current Florida Building Code requirements and High Velocity Hurricane
                  Zone standards. Identification of code-deficient conditions.
                </span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Photographic documentation:</strong> Comprehensive photo
                  documentation of findings, including defect locations, attachment conditions, and detail
                  installations. Visual record provided for reference or insurance purposes.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* When Inspection is Necessary */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When a Metal Roof Inspection is Necessary
          </h2>

          <p className="text-lg text-zinc-300 mb-8 max-w-4xl">
            Metal roof inspection is recommended in the following circumstances:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Suspected Fastener Back-Out or Clip Failure</h3>
                  <p className="text-zinc-400 text-sm">
                    Visible panel movement, audible noise during wind events, or fastener heads backing out
                    through panel surfaces indicate attachment system degradation requiring inspection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Wrench className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Panel Movement or Separation</h3>
                  <p className="text-zinc-400 text-sm">
                    Seam separation, panel buckling, or standing seam deformation require diagnostic evaluation
                    to determine whether the condition is repairable or systemic.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Wind className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Storm or Wind Exposure</h3>
                  <p className="text-zinc-400 text-sm">
                    Following hurricane or tropical storm exposure, inspection verifies attachment integrity
                    even when no visible damage is present. Wind-driven uplift can compromise fastening without
                    causing immediate failure.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <ClipboardCheck className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Aging Metal Roofs with Uncertain Service Life</h3>
                  <p className="text-zinc-400 text-sm">
                    Metal roofs approaching 20-30 years of service, particularly those installed before current
                    HVHZ requirements, benefit from inspection to determine remaining service life and necessary
                    maintenance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Insurance Underwriting or Renewal</h3>
                  <p className="text-zinc-400 text-sm">
                    Insurance carriers may require roof certification or condition assessment for policy
                    underwriting. Professional inspection provides documentation required for coverage decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Uncertainty Between Repair, Retrofit, or Replacement</h3>
                  <p className="text-zinc-400 text-sm">
                    When visual assessment suggests potential problems but the scope of necessary work is unclear,
                    inspection determines whether isolated repair is sufficient or whether system-level intervention
                    is required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection vs Repair vs Replacement */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Inspection vs Repair vs Replacement
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 max-w-4xl mb-12">
            <p>
              Metal roof inspection is a diagnostic process that evaluates system condition and determines the
              appropriate course of action. It is distinct from repair and replacement:
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Inspection</h3>
              <p className="text-zinc-300 mb-4">
                A systematic evaluation of roof condition, attachment integrity, and code compliance. Inspection
                identifies defects, quantifies deterioration, and provides diagnostic data necessary to determine
                whether repair, retrofit, or replacement is technically appropriate.
              </p>
              <p className="text-sm text-zinc-400">
                Inspection is a prerequisite to informed decision-making, not a corrective action.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Repair</h3>
              <p className="text-zinc-300 mb-4">
                Targeted intervention to address isolated defects without replacing the entire roofing system.
                Repairs may include fastener replacement, panel re-engagement, sealant renewal, or flashing
                correction. Repair is appropriate when defects are localized and the underlying system remains
                structurally sound.
              </p>
              <p className="text-sm text-zinc-400">
                For more information, see our{' '}
                <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">
                  diagnostic roof inspection services
                </Link>.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Retrofit or Replacement</h3>
              <p className="text-zinc-300 mb-4">
                System-level intervention when inspection reveals widespread deterioration, code non-compliance,
                or attachment system failure. Replacement involves complete removal and reinstallation of the
                metal roofing assembly. Retrofit may involve overlay systems or re-fastening operations depending
                on existing conditions.
              </p>
              <p className="text-sm text-zinc-400">
                For more information, see our{' '}
                <Link to="/metal-roofing/" className="text-red-600 hover:text-red-500 underline transition-colors">
                  metal roofing services
                </Link>.
              </p>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
            <p className="text-lg text-zinc-300">
              Inspection determines the correct path. Attempting repair without diagnostic evaluation risks
              addressing symptoms while underlying system failure continues.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Context */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Metal Roof Inspection Services Throughout Broward County
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 max-w-4xl mb-8">
            <p>
              All Phase Construction provides metal roof inspection services throughout Broward County, including <Link to="/locations/fort-lauderdale" className="text-red-500 hover:text-red-400 underline transition-colors">Fort Lauderdale</Link>, <Link to="/locations/coral-springs" className="text-red-500 hover:text-red-400 underline transition-colors">Coral Springs</Link>, <Link to="/locations/pompano-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Pompano Beach</Link>, <Link to="/locations/plantation" className="text-red-500 hover:text-red-400 underline transition-colors">Plantation</Link>, <Link to="/locations/davie" className="text-red-500 hover:text-red-400 underline transition-colors">Davie</Link>, and all municipalities subject to High Velocity Hurricane Zone requirements and local building code enforcement.
            </p>

            <p>
              Our familiarity with local wind zone classifications, permitting requirements, and regional metal
              roofing installation practices allows for technically accurate evaluation of both new and aging systems.
            </p>

            <p>
              Metal roofing systems are common in South Florida commercial, industrial, and residential applications.
              Standing seam systems, exposed fastener panels, and architectural metal roofing each present distinct
              inspection considerations. Our inspection approach accounts for system type, installation era, and
              environmental exposure specific to Broward County conditions.
            </p>
          </div>

          <div className="flex items-start gap-3 text-zinc-400">
            <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
            <p>
              Service area includes <Link to="/locations/fort-lauderdale" className="text-red-500 hover:text-red-400 underline transition-colors">Fort Lauderdale</Link>, <Link to="/locations/pompano-beach" className="text-red-500 hover:text-red-400 underline transition-colors">Pompano Beach</Link>, <Link to="/locations/coral-springs" className="text-red-500 hover:text-red-400 underline transition-colors">Coral Springs</Link>, Deerfield Beach, <Link to="/locations/plantation" className="text-red-500 hover:text-red-400 underline transition-colors">Plantation</Link>, <Link to="/locations/davie" className="text-red-500 hover:text-red-400 underline transition-colors">Davie</Link>, Parkland, Weston, Miramar, Hollywood, and all Broward County municipalities.
            </p>
          </div>
        </div>
      </section>

      {/* Related Inspection Services */}
      <section className="py-20 px-4 bg-zinc-950">
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
              to="/tile-roof-inspection-broward-county/"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Tile Roof Inspection — Broward County
              </h3>
              <p className="text-zinc-400">
                Concrete and clay tile system evaluation including underlayment assessment
              </p>
            </Link>

            <Link
              to="/flat-roof-inspection-broward-county/"
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
              to="/metal-roof-inspection-palm-beach-county/"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Metal Roof Inspection — Palm Beach County
              </h3>
              <p className="text-zinc-400">
                Standing seam and structural metal roofing evaluation in Palm Beach County
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule a Metal Roof Inspection
          </h2>

          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Professional diagnostic evaluation of metal roofing systems in Broward County. Comprehensive
            assessment of panel condition, attachment integrity, and code compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Metal Roof Inspection
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now to Speak With a Roofing Specialist
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Diagnostic Evaluation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Photo Documentation Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>HVHZ Compliance Assessment</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
