import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  CheckCircle,
  ChevronRight,
  Camera,
  FileText,
  ClipboardCheck,
  Search,
  AlertTriangle,
  Shield,
  BadgeCheck,
  Droplets,
  Wind,
  Layers,
  Building2,
  MapPin,
  Gauge,
  Thermometer,
  EyeOff,
  TrendingDown,
  Wrench,
  HelpCircle,
} from 'lucide-react';

export default function FlatRoofInspectionPalmBeachCountyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Flat Roof Inspection Palm Beach County';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Diagnostic flat roof inspections for commercial and low-slope residential properties in Palm Beach County. Membrane analysis, drainage evaluation, and fastening integrity assessment by licensed contractors.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Flat Roof Inspection in Palm Beach County",
      "serviceType": "Flat Roof Inspection",
      "description": "Professional flat roof inspections for commercial and low-slope residential properties throughout Palm Beach County, Florida. Inspections include diagnostic analysis, photo documentation, and insurance-defensible reporting.",
      "url": "https://allphaseconstructionfl.com/flat-roof-inspection-palm-beach-county",
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
    {
      icon: <Layers className="w-8 h-8 text-red-600" />,
      title: "Membrane Condition Assessment",
      description: "Material-specific evaluation of TPO, PVC, EPDM, modified bitumen, or built-up roofing systems for punctures, shrinkage, delamination, and UV degradation"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Seam & Weld Integrity",
      description: "Inspection of heat-welded or adhesive seams for separation, incomplete fusion, or stress concentration at transitions"
    },
    {
      icon: <Droplets className="w-8 h-8 text-red-600" />,
      title: "Drainage & Ponding Analysis",
      description: "Documentation of water retention areas, evaluation of slope adequacy, and assessment of internal drain functionality"
    },
    {
      icon: <Wind className="w-8 h-8 text-red-600" />,
      title: "Fastening & Uplift Resistance",
      description: "Verification of attachment methods, plate spacing, edge securement, and perimeter load requirements per HVHZ provisions"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: "Flashing & Termination Evaluation",
      description: "Assessment of parapet walls, curbs, penetrations, and all roof-to-vertical transitions for proper integration and deterioration"
    },
    {
      icon: <Thermometer className="w-8 h-8 text-red-600" />,
      title: "Thermal Imaging Analysis",
      description: "Non-destructive moisture detection using infrared thermography to identify wet insulation and concealed leak pathways"
    },
    {
      icon: <Gauge className="w-8 h-8 text-red-600" />,
      title: "Deck & Substrate Condition",
      description: "Evaluation of structural deck integrity, insulation board condition, and substrate deflection where accessible"
    },
    {
      icon: <Camera className="w-8 h-8 text-red-600" />,
      title: "Documentation & Reporting",
      description: "Comprehensive photographic record with time-stamped images and written findings suitable for insurance or engineering review"
    }
  ];

  const failureModes = [
    {
      title: "Ponding Water & Drainage Failure",
      description: "Low-slope roofs are designed to drain within 48 hours. Persistent ponding accelerates membrane degradation, increases dead load on the structure, and promotes biological growth. Ponding occurs due to inadequate initial slope, structural deflection, blocked drains, or settlement. Inspection identifies areas retaining water and evaluates whether corrective action requires only drain maintenance or structural intervention."
    },
    {
      title: "Seam Separation & Weld Failure",
      description: "Single-ply membranes rely on heat-welded or adhesive seams. Improper installation temperature, contaminated surfaces, insufficient overlap, or thermal cycling cause seam separation. Wind-driven rain penetrates failed seams and migrates laterally beneath the membrane. Visual inspection from the surface does not reliably detect early-stage seam failure—systematic probing and documentation are required."
    },
    {
      title: "Fastener Backup & Edge Blow-Off",
      description: "Mechanically attached systems use plates and fasteners to resist wind uplift. Fastener backup occurs when screws pull out of the deck due to over-driven installation, inadequate embedment, or deck deterioration. Perimeter and corner zones experience the highest uplift pressures. HVHZ requirements mandate specific fastening schedules that differ from standard code—non-compliance creates liability exposure."
    },
    {
      title: "Flashing Deterioration & Termination Failure",
      description: "Vertical transitions at parapets, curbs, and penetrations are the most common leak sources on flat roofs. Flashings experience greater thermal movement and UV exposure than field membrane. Sealants degrade, metal corrodes, and membrane-to-metal bonds separate. Proactive flashing inspection identifies deterioration before water intrusion occurs."
    },
    {
      title: "Concealed Moisture & Insulation Saturation",
      description: "Water intrusion on flat roofs often travels horizontally beneath the membrane before appearing at an interior location. Wet insulation loses R-value, increases dead load, and promotes deck rot. Infrared thermography detects temperature differentials caused by moisture without destructive testing. Identifying the extent of saturation is critical to determining whether isolated repair or full replacement is technically appropriate."
    },
    {
      title: "Membrane Shrinkage & Stress Concentration",
      description: "Certain single-ply membranes exhibit dimensional instability over time, particularly in South Florida's thermal environment. Shrinkage creates tensile stress at seams, fasteners, and terminations—eventually causing rupture. Inspection evaluates whether membrane remains adequately slack or has developed stress indicators requiring intervention."
    }
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
            <span className="text-white">Flat Roof Inspection — Palm Beach County</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Flat & Single-Ply Roof Inspection —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Palm Beach County
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-4xl">
            <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline transition-colors">Diagnostic evaluation</Link> of commercial and low-slope residential roofing systems. Material-specific inspection protocols for <Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline transition-colors">TPO, PVC, EPDM, modified bitumen, and built-up roofing</Link> assemblies. Licensed contractor analysis focused on drainage performance, fastening integrity, and code compliance in High Velocity Hurricane Zone jurisdictions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact/"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20 text-center"
            >
              Schedule Inspection
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

      {/* Hidden Failure Warning - Above the Fold */}
      <section className="py-20 px-4 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Your Flat Roof Is Failing Beneath the Membrane<br />
              <span className="text-red-500">Before You See Any Leak</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Commercial and low-slope roofing systems in <Link to="/locations/" className="text-red-500 hover:text-red-400 underline transition-colors">Palm Beach County</Link> deteriorate for years before interior damage becomes visible. By the time water appears at a ceiling, the problem has already existed—and spread—far beyond the obvious location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <Droplets className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Hidden Moisture Migration</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Water enters through a failed seam, cracked flashing, or separated termination—then travels horizontally beneath the membrane for 20, 50, or 100 feet before saturating insulation and penetrating the deck. The interior leak location bears zero relationship to the actual entry point.
                  </p>
                  <p className="text-red-400 font-semibold mt-4">
                    Surface observation cannot identify the source. Infrared thermography and systematic probing are required.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Seam Fatigue Without Symptoms</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Heat-welded seams on TPO and PVC membranes separate due to incomplete fusion, thermal stress, or contamination during installation. Adhesive seams on EPDM degrade from UV exposure. These failures admit wind-driven rain that accumulates in the roofing assembly—with no visible surface indicators.
                  </p>
                  <p className="text-red-400 font-semibold mt-4">
                    Seam failure is invisible from above until the membrane pulls apart under stress.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <Layers className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Insulation Saturation & Deck Rot</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Polyisocyanurate and polystyrene insulation boards absorb water like sponges. Once saturated, they lose thermal performance, add structural dead load, and create concealed reservoirs that promote wood deck deterioration. Wet insulation remains trapped between membrane and substrate—causing ongoing damage.
                  </p>
                  <p className="text-red-400 font-semibold mt-4">
                    You cannot see saturation extent without thermal imaging or destructive investigation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <EyeOff className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Coatings Conceal Deeper Problems</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Elastomeric coatings and silicone systems create uniform surface appearance that masks underlying membrane condition. A recently coated roof looks serviceable while the base layer beneath has separated seams, saturated insulation, and deteriorated flashings. Coating application does not repair structural defects.
                  </p>
                  <p className="text-red-400 font-semibold mt-4">
                    Coatings hide problems—they do not fix them. Diagnostic inspection reveals what lies beneath.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/50 to-zinc-900 border-2 border-red-600 rounded-2xl p-10 mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              The Problem Started Long Before You Noticed
            </h3>
            <div className="space-y-4 text-lg text-zinc-200 leading-relaxed">
              <p>
                The ceiling stain you observe today corresponds to a seam failure that began 12–24 months ago. The ponding water area has been degrading membrane integrity through hundreds of wet/dry cycles. The fastener plates showing rust have been admitting moisture for years through microscopic pathways around screw penetrations.
              </p>
              <p>
                Flat roofing systems fail gradually—not suddenly. Membrane shrinkage stresses seams millimeters per year. Flashings separate incrementally from thermal cycling. Fasteners back out from daily expansion/contraction. These processes produce no dramatic event—just progressive loss of weather resistance until a storm overwhelms the weakened assembly.
              </p>
              <p className="text-xl font-bold text-red-400 pt-4 border-t border-zinc-700">
                By the time interior damage appears, the roofing system has been compromised for an extended period—and the extent of concealed damage determines whether repair or replacement is technically appropriate.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Inspection Establishes Facts Before Capital Decisions
            </h3>
            <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Diagnostic inspection by a licensed contractor identifies actual failure mechanisms, documents concealed moisture extent, and establishes whether your <Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline transition-colors">flat or single-ply roofing system</Link> requires localized repair or full replacement. Insurance-defensible documentation. Material-specific analysis. No sales pressure—technical findings only.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-10 py-5 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all duration-300 text-xl shadow-xl shadow-red-600/30 inline-block"
              >
                Schedule Diagnostic Inspection
              </Link>
              <a
                href="tel:+17542275605"
                className="px-10 py-5 bg-zinc-800 text-white rounded-lg font-bold hover:bg-zinc-700 transition-all duration-300 text-xl flex items-center justify-center gap-3 shadow-xl"
              >
                <Phone className="w-6 h-6" />
                (754) 227-5605
              </a>
            </div>
            <p className="mt-6 text-sm text-zinc-400">
              Licensed General Contractor CGC-1526236 | Roofing Contractor CCC-1331464 | Palm Beach County
            </p>
          </div>
        </div>
      </section>

      {/* Flat Roof Risks Specific to Palm Beach County */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Flat Roof Risks Specific to Palm Beach County
          </h2>
          <p className="text-xl text-zinc-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            Regional climate conditions, wind exposure, and building code requirements create accelerated deterioration patterns that require <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline transition-colors">specialized inspection protocols</Link> and documentation strategies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-red-600/40 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <Thermometer className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-white">Extreme Thermal Cycling</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Surface temperatures on black membranes exceed 180°F under direct sun, then cool 70+ degrees overnight. This daily expansion/contraction cycle stresses fastener plates, causes seam separation, and accelerates membrane aging far beyond manufacturer predictions.
              </p>
              <p className="text-red-400 font-semibold text-sm">
                Inspection detects early-stage fastener backout and membrane shrinkage before catastrophic failure.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-red-600/40 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <Wind className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-white">Wind Uplift Exposure</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-4">
                HVHZ designation requires specific fastening densities in perimeter and corner zones. Non-compliant attachment patterns create blow-off risk during tropical storm events—and may void insurance coverage when wind damage occurs.
              </p>
              <p className="text-red-400 font-semibold text-sm">
                Inspection verifies code-compliant fastener spacing and identifies under-attached areas requiring corrective action.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-red-600/40 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <Droplets className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-white">Coastal Moisture & Salt Air</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Salt-laden air accelerates corrosion of metal fasteners, coping caps, and HVAC equipment penetrations. Prolonged humidity prevents complete moisture evaporation between rain events, creating persistent wet conditions that promote biological growth and membrane degradation.
              </p>
              <p className="text-red-400 font-semibold text-sm">
                Inspection identifies corrosion at concealed connections and evaluates membrane condition in perpetually shaded areas.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-red-600/40 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <Building2 className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-white">Aging Commercial Roof Inventory</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Many commercial buildings in <Link to="/locations/" className="text-red-500 hover:text-red-400 underline transition-colors">Palm Beach County</Link> contain roofing systems installed in the 1990s or early 2000s that have exceeded design service life. Material formulations used during that era—particularly early TPO generations—show premature deterioration patterns not anticipated during original installation.
              </p>
              <p className="text-red-400 font-semibold text-sm">
                Inspection establishes actual remaining service life and informs capital planning for replacement timing.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-red-600/40 transition-all md:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-white">Insurance Documentation Requirements</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Property insurers now require documented roof condition assessments, maintenance records, and remaining service life estimates. Failure to provide professional inspection reports can result in coverage denial, premium increases, or non-renewal of commercial property policies.
              </p>
              <p className="text-red-400 font-semibold text-sm">
                Licensed contractor inspection provides insurance-defensible documentation that satisfies carrier requirements and supports claims.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/30 to-zinc-900/50 border-2 border-red-600/50 rounded-2xl p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Inspection as Risk Mitigation
            </h3>
            <p className="text-xl text-zinc-200 leading-relaxed max-w-4xl mx-auto">
              <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline transition-colors">Diagnostic inspection</Link> before failure occurs provides the documentation needed to schedule replacement during favorable weather windows, secure financing on planned terms, and maintain continuous insurance coverage—rather than responding to emergency conditions under time pressure with limited contractor availability and uncertain insurance claim outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Flat & Single-Ply Roofs Require Diagnostic Inspection */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <Search className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Flat & Single-Ply Roofs Require<br />
              <span className="text-red-500">Diagnostic Inspection</span>
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Low-slope roofing systems fail in ways that surface observation cannot detect. Visual inspection from above provides incomplete information—diagnostic methods are required to establish actual condition and identify concealed deterioration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <Droplets className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Water Travels Laterally Beneath Membranes</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                When water penetrates a flat roofing system, it does not simply drip straight down. Instead, it migrates horizontally through the insulation layer, following the path of least resistance—often traveling tens of feet before saturating through to the structural deck or appearing as an interior ceiling stain.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                This lateral migration occurs because water spreads across the top surface of vapor barriers, between insulation board seams, and along the membrane-to-substrate interface. The entry point and the interior damage location bear no spatial relationship.
              </p>
              <div className="bg-red-950/30 border border-red-600/30 rounded-lg p-6">
                <p className="text-red-400 font-semibold text-lg">
                  Consequence: Visual inspection of interior damage cannot identify the actual source. Diagnostic inspection with moisture mapping and thermal imaging is required to establish entry point location.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <MapPin className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Leaks Rarely Appear at Point of Entry</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Property owners and building managers naturally assume that repairing the roof area directly above an interior ceiling stain will resolve the problem. This assumption is incorrect for flat roofing systems and leads to repeated unsuccessful repair attempts.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                The actual breach in the waterproofing membrane may be 30, 60, or 100 feet away from the interior symptom. Water entry occurs at a failed seam, deteriorated flashing, or separated termination—then travels concealed beneath the membrane until deck saturation creates interior evidence.
              </p>
              <div className="bg-red-950/30 border border-red-600/30 rounded-lg p-6">
                <p className="text-red-400 font-semibold text-lg">
                  Consequence: Repair costs escalate as contractors make multiple unsuccessful interventions. Diagnostic inspection traces moisture pathways back to actual source before repair work begins.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <EyeOff className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Coatings Mask Membrane Failure</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Elastomeric coatings, acrylic systems, and silicone roof restoration products create a uniform surface appearance that conceals the condition of the underlying membrane. A freshly coated roof looks intact while the base layer beneath exhibits separated seams, membrane shrinkage, and fastener backout.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Coating application provides temporary waterproofing but does not repair structural defects in the roofing assembly. Coatings fill surface cracks and small punctures—they do not re-weld failed seams, secure backed-out fasteners, or replace saturated insulation.
              </p>
              <div className="bg-red-950/30 border border-red-600/30 rounded-lg p-6">
                <p className="text-red-400 font-semibold text-lg">
                  Consequence: Recently coated roofs require the same diagnostic scrutiny as uncoated systems. Surface appearance provides no reliable indication of actual assembly condition.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <TrendingDown className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Thermal Movement Stresses Seams & Fasteners</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Single-ply membranes expand and contract daily as surface temperatures fluctuate between 180°F under direct sun and 100°F at night. This dimensional change creates tensile stress at every constrained point—seams, fastener plates, and perimeter terminations.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                After years of thermal cycling, mechanically attached membranes develop fastener backout as screws pull incrementally from the deck. Heat-welded seams separate when thermal stress exceeds bond strength. These failures occur gradually without visible surface indicators until membrane rupture occurs.
              </p>
              <div className="bg-red-950/30 border border-red-600/30 rounded-lg p-6">
                <p className="text-red-400 font-semibold text-lg">
                  Consequence: Membrane stress accumulates invisibly. Diagnostic inspection identifies early-stage fastener displacement and seam separation before weather intrusion occurs.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all lg:col-span-2">
              <div className="flex items-start gap-4 mb-5">
                <Wrench className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">HVAC Curbs, Drains & Penetrations Are Common Failure Zones</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                    Flat roofs contain numerous penetrations for mechanical equipment, plumbing vents, electrical conduits, and drainage systems. Each penetration creates a discontinuity in the waterproofing membrane that requires flashing, counterflashing, and proper termination to maintain weather resistance.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    HVAC equipment curbs experience differential thermal movement from the roof membrane. Rooftop unit vibration loosens attachment fasteners over time. Pitch pans filled with asphalt sealant crack and separate. Internal drains accumulate debris that blocks water discharge. These conditions develop gradually and produce no obvious symptoms until failure is advanced.
                  </p>
                </div>
                <div>
                  <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                    Penetration flashings use sealants and mastic products that have finite service lives—typically 5–10 years before replacement becomes necessary. Sealant deterioration occurs through UV exposure, thermal cycling, and biological degradation. Visual inspection from ground level does not reveal sealant condition at roof-mounted equipment locations.
                  </p>
                  <div className="bg-red-950/30 border border-red-600/30 rounded-lg p-6">
                    <p className="text-red-400 font-semibold text-lg">
                      Consequence: Penetration failures account for the majority of flat roof leaks. Diagnostic inspection evaluates every curb, drain, and transition point—not just visible damage areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-red-600 rounded-2xl p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Diagnostic Inspection Reveals What Surface Observation Cannot
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Thermometer className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Infrared Thermography</h4>
                <p className="text-zinc-300 leading-relaxed">
                  Detects temperature differentials caused by wet insulation—mapping moisture extent without destructive testing
                </p>
              </div>
              <div className="text-center">
                <Gauge className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Capacitance Moisture Meters</h4>
                <p className="text-zinc-300 leading-relaxed">
                  Quantifies insulation moisture content through non-invasive scanning—establishing wet area boundaries
                </p>
              </div>
              <div className="text-center">
                <Camera className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Core Sample Analysis</h4>
                <p className="text-zinc-300 leading-relaxed">
                  Removes representative sections of roofing assembly for laboratory evaluation of adhesion and material condition
                </p>
              </div>
            </div>
            <p className="text-xl text-zinc-200 leading-relaxed text-center max-w-4xl mx-auto">
              These diagnostic methods—combined with systematic documentation of seam integrity, fastening patterns, and flashing condition—establish factual basis for determining whether <Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline transition-colors">flat or single-ply roofing systems</Link> require localized repair, restorative coating, or full replacement.
            </p>
          </div>
        </div>
      </section>

      {/* Silent Failure Warning */}
      <section className="py-24 bg-black border-y border-red-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <EyeOff className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Flat Roofs Fail Silently
            </h2>
            <p className="text-2xl text-red-500 font-semibold mb-4">
              By the time you see interior damage, the problem has existed for months—or years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <Droplets className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Lateral Moisture Migration</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Water does not travel vertically through <Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline transition-colors">flat roofing assemblies</Link>. It enters through a compromised seam, flashing separation, or puncture—then migrates horizontally beneath the membrane, sometimes traveling 20, 50, or 100 feet before saturating insulation and penetrating the deck. The interior leak location bears no relationship to the actual point of entry.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Seam Failure Without Symptoms</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Heat-welded seams on TPO and PVC membranes can separate due to incomplete fusion, contamination during installation, or thermal stress—without producing visible surface indicators. Adhesive seams on EPDM degrade from UV exposure and thermal cycling. These failures admit wind-driven rain that accumulates in the roofing assembly before interior evidence appears.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <Layers className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Trapped Insulation Moisture</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Polyisocyanurate and expanded polystyrene insulation boards absorb water like sponges. Once saturated, they lose thermal performance, increase structural dead load, and promote deck deterioration. Wet insulation creates a concealed reservoir that continues causing damage long after the initial intrusion point is repaired—if you don't know the saturation extent.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <TrendingDown className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Progressive Deterioration</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Ponding water degrades membrane surfaces through constant UV exposure and biological activity. Fasteners back out incrementally due to thermal cycling and wind load. Flashings separate millimeters per year. These processes produce no sudden failure—just gradual loss of weather resistance until a storm event overwhelms the weakened assembly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Critical Timeline */}
          <div className="bg-gradient-to-br from-red-950/50 to-zinc-900 border-2 border-red-600 rounded-xl p-10 mb-12">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">The Critical Reality</h3>
            <div className="space-y-4 text-lg text-zinc-200 leading-relaxed">
              <p className="text-xl font-semibold text-red-400">
                Visible interior water damage indicates that the roofing system has already been compromised for an extended period.
              </p>
              <p>
                The ceiling stain you observe today likely corresponds to a seam failure that began 18 months ago. The ponding water accumulation area has been degrading membrane integrity through hundreds of wet/dry cycles. The fastener plates showing surface rust have been admitting moisture for years through microscopic pathways around the screw shank.
              </p>
              <p>
                Surface inspection alone cannot determine the extent of concealed damage. Infrared thermography identifies temperature differentials caused by wet insulation. Systematic probing detects seam separation not visible from above. Core sampling establishes substrate conditions where deck access is limited.
              </p>
              <p className="text-xl font-semibold text-red-400">
                Repair decisions made without diagnostic evaluation of the full assembly frequently fail because they address symptoms rather than causes—and because the extent of required intervention was underestimated.
              </p>
            </div>
          </div>

          {/* Strong Inspection CTA */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Inspection Establishes Facts Before Committing Capital
            </h3>
            <p className="text-xl text-zinc-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Diagnostic inspection by a licensed contractor with material-specific expertise identifies the actual failure mechanisms, documents the extent of concealed damage, and establishes whether the roofing system requires localized repair or full replacement. Insurance-defensible documentation. No repair sales pressure. Technical analysis only.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-12 py-5 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all duration-300 text-xl shadow-xl shadow-red-600/30 inline-block"
              >
                Schedule Diagnostic Inspection
              </Link>
              <a
                href="tel:+17542275605"
                className="px-12 py-5 bg-zinc-800 text-white rounded-lg font-bold hover:bg-zinc-700 transition-all duration-300 text-xl flex items-center justify-center gap-3 shadow-xl"
              >
                <Phone className="w-6 h-6" />
                (754) 227-5605
              </a>
            </div>
            <p className="mt-8 text-sm text-zinc-400 max-w-2xl mx-auto">
              Licensed General Contractor CGC-1526236 | Roofing Contractor CCC-1331464 | Palm Beach County HVHZ-compliant inspection protocols
            </p>
          </div>
        </div>
      </section>

      {/* Why Flat & Single-Ply Roofs Require Diagnostic Inspection */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Why Flat & Single-Ply Roofs Require Diagnostic Inspection
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Droplets className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Water Travels Beneath Membranes</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Unlike steep-slope roofs where water flows downward to drainage points, flat roofing assemblies contain water intrusion horizontally beneath the membrane surface. A puncture, seam separation, or flashing defect at one location allows water entry—which then migrates laterally along the membrane-to-substrate interface before penetrating the deck and appearing as interior damage.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-lg mt-4">
                    This lateral migration means the visible leak location bears no relationship to the actual point of water entry. Diagnostic inspection traces the pathway from interior symptoms back to the source defect and establishes the extent of saturation between entry and exit points.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Leaks Rarely Occur at Visible Damage</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Surface-level observations identify obvious conditions like ponding water, blistered membrane, or exposed fastener plates. But the majority of leak sources on flat roofs are not visible from above: seam separation beneath overlap joints, fastener penetrations through membrane into wet insulation, sealant failure at metal terminations, or bond loss between flashing and vertical surfaces.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-lg mt-4">
                    <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline transition-colors">Professional inspection protocols</Link> include systematic probing of seams, infrared thermography for concealed moisture, and evaluation of conditions that cannot be assessed through visual observation alone.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Coatings Conceal Underlying Failure</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Elastomeric coatings, silicone systems, and acrylic sealants are frequently applied to aging <Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline transition-colors">flat roofing systems</Link> as temporary measures to extend service life. These coatings create a uniform surface appearance that conceals the condition of the underlying membrane, seams, and substrate.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-lg mt-4">
                    A recently coated roof may appear serviceable while the base membrane beneath has separated seams, saturated insulation, or deteriorated flashings. Diagnostic inspection establishes actual conditions beneath surface treatments and determines whether coating application addressed or merely masked existing defects.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Thermometer className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Thermal Movement Stresses Seams & Fasteners</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    South Florida's thermal environment subjects flat roofing membranes to extreme temperature fluctuations. A black membrane surface can reach 180°F under direct sun, then drop to 70°F overnight. This daily cycling causes expansion and contraction of membrane sheets, creating tensile stress at seams and mechanical fastener locations.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-lg mt-4">
                    Over years of service, thermal movement gradually fatigues seam welds, backs out fasteners from substrate, and elongates fastener holes—allowing water intrusion through pathways that develop incrementally rather than suddenly. Inspection identifies stress indicators before complete failure occurs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Failure Points */}
          <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-xl p-10">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-red-600" />
              Primary Failure Points Requiring Diagnostic Focus
            </h3>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Penetrations & Roof-Mounted Equipment</h4>
                <p>
                  HVAC units, plumbing vents, electrical conduits, and other roof penetrations create transitions where membrane must terminate against vertical surfaces or curbs. These locations experience differential thermal movement between the roofing assembly and the penetrating element, causing sealant degradation and membrane stress concentration. Inspection evaluates flashing integration, curb condition, and evidence of water infiltration at penetration perimeters.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-3">Internal Drains & Overflow Scuppers</h4>
                <p>
                  Flat roofs rely on internal drains or edge scuppers to evacuate water. Drain assemblies penetrate through the membrane and roofing substrate, creating leak-prone transitions where membrane flashing integrates with metal drain components. Debris accumulation blocks drainage, causing ponding that accelerates membrane deterioration. Inspection assesses drain functionality, flashing condition, clamping ring integrity, and evidence of overflow events.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-3">Parapet Walls & Vertical Terminations</h4>
                <p>
                  Where flat roofing membranes terminate at parapet walls, the membrane must transition from horizontal to vertical orientation and integrate with metal counterflashing or masonry surfaces. These terminations experience maximum UV exposure, thermal cycling, and water concentration during rain events. Inspection evaluates membrane attachment to vertical surfaces, metal flashing securement, through-wall moisture migration, and parapet cap condition.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-3">Expansion Joints & Movement Accommodations</h4>
                <p>
                  Commercial structures incorporate expansion joints to accommodate structural movement. Roofing membranes crossing these joints must remain adhered to both sides while allowing relative movement without tearing. Inspection identifies expansion joint locations, evaluates membrane condition at movement accommodations, and assesses whether joint covers remain functional or have separated.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-8">
                <p className="text-xl font-semibold text-red-400 mb-3">
                  These failure-prone areas require systematic evaluation that extends beyond surface observation.
                </p>
                <p className="text-zinc-200">
                  Diagnostic inspection documents conditions at all critical transition points, identifies active and incipient failure mechanisms, and establishes baseline data for informed decision-making. The objective is to understand what has occurred, what is occurring now, and what conditions will likely develop—not to presume a particular intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Flat & Single-Ply Roof Inspection Includes */}
      <section className="py-20 bg-black border-y border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <FileText className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our Flat & Single-Ply<br />
              <span className="text-red-500">Roof Inspection Includes</span>
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Comprehensive diagnostic evaluation documenting actual conditions—not assumptions based on age or appearance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-zinc-800 rounded-2xl p-10 md:p-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Moisture Intrusion Indicators and Mapping
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Infrared thermography and capacitance moisture meters identify wet insulation areas. Core sampling establishes saturation extent where non-invasive methods provide inconclusive results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Seam and Membrane Integrity Evaluation
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Systematic probing of heat-welded seams on TPO and PVC systems. Adhesion testing of tape-seamed EPDM joints. Visual examination for membrane shrinkage, punctures, and surface degradation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Flashing, Curb, and Penetration Analysis
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Detailed assessment of every HVAC curb, plumbing vent, electrical penetration, and equipment attachment. Evaluation of flashing integration, sealant condition, and fastener security at all transition points.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Drainage and Ponding Assessment
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Verification of positive drainage to all outlets. Documentation of ponding areas that retain water beyond 48 hours after precipitation. Evaluation of drain functionality and debris accumulation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Coating Adhesion and Condition Review
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Where elastomeric or silicone coatings are present, assessment of coating adhesion to base membrane, film thickness, and defect concealment. Determination of whether coating application addressed or masked underlying problems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Visible Deck Condition Indicators
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Assessment of structural substrate where accessible through existing openings or strategic test cuts. Identification of deck deflection, fastener pullout, and saturation-related deterioration affecting structural integrity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Photo-Documented Findings with Written Report
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Comprehensive written report with annotated photographs documenting all observed conditions, identified defects, and recommended actions. Insurance-defensible documentation suitable for property transactions, lender requirements, and warranty claims.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t-2 border-zinc-800">
              <div className="bg-gradient-to-r from-red-950/40 to-zinc-900/40 border border-red-600/40 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Objective Technical Analysis—No Repair Sales Pressure
                    </h3>
                    <p className="text-zinc-200 text-lg leading-relaxed mb-4">
                      Our <Link to="/roof-inspection/" className="text-red-500 hover:text-red-400 underline transition-colors">inspection service</Link> provides factual documentation of existing conditions and identification of failure mechanisms. We do not default to replacement recommendations or pressure property owners toward unnecessary capital expenditure.
                    </p>
                    <p className="text-zinc-200 text-lg leading-relaxed">
                      The inspection report establishes whether your <Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline transition-colors">flat or single-ply roofing system</Link> requires localized repair, restorative maintenance, or full replacement—based on technical findings rather than contractor preference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact/"
              className="inline-block px-12 py-5 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all duration-300 text-xl shadow-xl shadow-red-600/30"
            >
              Schedule Comprehensive Roof Inspection
            </Link>
            <p className="mt-6 text-zinc-400">
              Licensed General Contractor CGC-1526236 | Roofing Contractor CCC-1331464
            </p>
          </div>
        </div>
      </section>

      {/* Common Failure Modes */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Common Failure Modes in Flat Roofing Systems
          </h2>

          <div className="space-y-8">
            {failureModes.map((mode, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{mode.title}</h3>
                <p className="text-zinc-300 leading-relaxed text-lg">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flat & Single-Ply Roofing Systems We Inspect */}
      <section className="py-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Flat & Single-Ply Roofing Systems We Inspect
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Our inspectors possess material-specific expertise across all <Link to="/flat-roofing/" className="text-red-500 hover:text-red-400 underline transition-colors">commercial and low-slope residential roofing systems</Link> common to South Florida.
            </p>
          </div>

          <div className="bg-zinc-950 border-2 border-zinc-800 rounded-xl p-10">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-4 text-white">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="font-semibold">TPO</span>
              </li>
              <li className="flex items-center gap-4 text-white">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="font-semibold">Modified Bitumen</span>
              </li>
              <li className="flex items-center gap-4 text-white">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="font-semibold">Built-Up Roofing (BUR)</span>
              </li>
              <li className="flex items-center gap-4 text-white">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="font-semibold">PVC</span>
              </li>
              <li className="flex items-center gap-4 text-white">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="font-semibold">Coated flat roof systems</span>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-zinc-800">
              <p className="text-zinc-300 text-lg leading-relaxed">
                We evaluate condition, attachment integrity, and remaining service life—identifying failure mechanisms specific to each material type rather than applying generic inspection protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flat Roof Risks Specific to Palm Beach County */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Flat Roof Risks Specific to <span className="text-red-500">Palm Beach County</span>
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Palm Beach County's coastal environment and building inventory create specific deterioration patterns that require proactive inspection protocols. Diagnostic assessment identifies developing conditions before they progress to failure—providing the documentation needed for defensible decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <Droplets className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Salt-Air Exposure & Coastal Corrosion</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Properties within three miles of the Atlantic Ocean experience accelerated deterioration of metal components—fastener plates, edge metal, flashing terminations, and HVAC equipment curbs. Salt-laden air deposits chlorides that initiate corrosion beneath coating layers, causing fastener failure and compromising membrane attachment integrity.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Inspection identifies corrosion progression in mechanically attached systems and evaluates whether fastener replacement is required to maintain wind uplift ratings. Coastal properties require more frequent diagnostic assessment than inland installations.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <Thermometer className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">High UV Degradation</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                South Florida receives among the highest annual UV radiation exposure in the continental United States. Ultraviolet degradation affects all membrane materials—causing polymer chain scission, surface chalking, and loss of plasticizer content. TPO and PVC membranes become brittle and prone to cracking; modified bitumen oxidizes and loses flexibility.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                UV damage accelerates at edges, seams, and high-stress areas. Inspection establishes the degree of UV-induced deterioration and determines whether membrane replacement or surface coating provides appropriate intervention.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <Building2 className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Aging HOA & Commercial Roof Systems</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Palm Beach County contains extensive inventory of condominium associations, commercial office buildings, and retail centers constructed between 1980 and 2005. Many of these properties are now approaching or exceeding typical flat roof service life expectations (15-25 years depending on material type and maintenance history).
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Board members and property managers require defensible condition assessments to support capital reserve planning and establish replacement timelines. Inspection provides the technical documentation needed for budgeting and stakeholder communication.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <Wind className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Frequent Storm & Wind Events</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Palm Beach County sits within Florida's High Velocity Hurricane Zone (HVHZ), subjecting flat roofing systems to wind uplift pressures significantly higher than standard building code requirements. Hurricane season brings repeated wind events that stress membrane attachments, test seam integrity, and displace inadequately secured edge metal.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Post-storm inspection documents wind damage extent for insurance claims and identifies conditions that increase vulnerability to future events. Pre-season inspection verifies attachment adequacy before exposure occurs.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all md:col-span-2">
              <div className="flex items-start gap-4 mb-5">
                <FileText className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Insurance & Resale Documentation Needs</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Insurance carriers increasingly require roof condition reports as underwriting prerequisites for commercial property coverage and condominium master policies. Carriers may impose coverage restrictions, mandate repairs, or decline renewal based on age and condition without supporting documentation from a licensed contractor.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Commercial property transactions routinely include roof inspection as due diligence requirement. Sellers benefit from proactive inspection that documents maintenance history and remaining service life. Buyers require condition assessment before committing capital. Third-party inspection by a licensed roofing contractor provides insurance-defensible documentation accepted by underwriters, lenders, and transaction parties.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/30 to-zinc-900/50 border-2 border-red-600/50 rounded-2xl p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prevention Through Documentation
            </h3>
            <p className="text-xl text-zinc-200 leading-relaxed max-w-4xl mx-auto">
              Diagnostic inspection establishes baseline conditions, identifies developing failure patterns, and provides the technical documentation required for insurance compliance, transaction due diligence, and capital planning. Proactive assessment prevents emergency responses under time pressure—allowing scheduled intervention during favorable conditions with full contractor availability.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens After the Inspection */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <ClipboardCheck className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Happens After the <span className="text-red-500">Inspection</span>
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Diagnostic inspection provides technical documentation of actual conditions—not assumptions, opinions, or preliminary estimates. You receive factual findings that support informed decisions about maintenance, repair, restoration, or replacement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <Search className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Inspections Identify Conditions, Not Assumptions</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Diagnostic assessment establishes what exists—not what should exist, what was specified, or what drawings indicate. Inspection findings document actual membrane condition, attachment integrity, drainage performance, and deterioration patterns observed during physical examination.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                We do not make assumptions about installation quality, maintenance history, or concealed conditions. Inspection protocols include physical investigation methods—core sampling, moisture mapping, fastener pull testing—that verify actual assembly characteristics rather than relying on visual observation alone.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <Wrench className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Findings Determine the Appropriate Course</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Inspection results establish whether the roofing system requires localized repair, comprehensive restoration, or full replacement. This determination is based on documented conditions—not predetermined recommendations or contractor preferences.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                A roof with isolated seam failures and otherwise intact membrane may require targeted repair. A system with widespread UV degradation but sound substrate might benefit from restoration coating. Complete assembly failure necessitates replacement. The appropriate intervention is dictated by actual conditions, remaining service life potential, and the property owner's risk tolerance.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <FileText className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Written Documentation with Photographic Evidence</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                You receive a written inspection report that documents findings in clear, technical language. The report includes site-specific observations, material identification, condition assessment, and identified deficiencies or failure mechanisms.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Photographic documentation shows actual conditions—not representative examples or generic illustrations. Each significant finding is photographed with location reference. Images capture seam separation, fastener displacement, membrane deterioration, drainage defects, and other conditions identified during inspection.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <div className="flex items-start gap-4 mb-5">
                <BadgeCheck className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-white">Insurance-Ready Reports When Required</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                When inspection is performed for insurance underwriting, claim documentation, or due diligence purposes, reports are structured to meet carrier and transaction requirements. Documentation includes contractor license information, installation date verification (when determinable), and condition assessment formatted for insurance review.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Reports prepared by licensed roofing contractors carry weight with insurance carriers, engineering firms, and commercial transaction parties. Third-party documentation from qualified contractors is accepted as credible evidence of roof condition—supporting coverage decisions, claim processing, and property valuations.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/30 to-zinc-900/50 border-2 border-red-600/50 rounded-2xl p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              No Sales Pressure — Technical Analysis Only
            </h3>
            <p className="text-xl text-zinc-200 leading-relaxed max-w-4xl mx-auto mb-6">
              Inspection services are provided as independent assessment—not as vehicle for repair sales. You are not obligated to proceed with any recommended work, and you may use inspection findings to obtain competitive proposals from contractors of your choice.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              Our role is to establish facts through diagnostic methods, document those findings clearly, and provide technical information that supports your decision-making process. The inspection report belongs to you and may be used for any purpose—insurance submissions, capital budgeting, contractor bidding, or transaction due diligence.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Flat Roof Inspection Service Area — Palm Beach County
            </h2>
          </div>

          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            We provide diagnostic flat roof inspection services for commercial and residential low-slope properties throughout Palm Beach County, including <Link to="/roofing-contractor-west-palm-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">West Palm Beach</Link>, <Link to="/roofing-contractor-boca-raton-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Boca Raton</Link>, <Link to="/roofing-contractor-delray-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Delray Beach</Link>, <Link to="/roofing-contractor-boynton-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Boynton Beach</Link>, <Link to="/roofing-contractor-wellington-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Wellington</Link>, and surrounding municipalities:
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-lg text-zinc-300">
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <Link to="/roofing-contractor-west-palm-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">West Palm Beach</Link>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <Link to="/roofing-contractor-boca-raton-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Boca Raton</Link>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <Link to="/roofing-contractor-delray-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Delray Beach</Link>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <Link to="/roofing-contractor-boynton-beach-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Boynton Beach</Link>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Palm Beach Gardens</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <Link to="/roofing-contractor-wellington-fl/" className="text-red-500 hover:text-red-400 underline transition-colors">Wellington</Link>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Jupiter</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Royal Palm Beach</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Lake Worth Beach</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Palm Beach</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Ocean Ridge</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Gulf Stream</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Lantana</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border-2 border-red-600 rounded-full mb-6">
              <HelpCircle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <ChevronRight className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                How are flat roof leaks located?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg pl-9">
                Leak sources are identified through systematic investigation—not visual observation alone. Methods include nuclear moisture scanning to map subsurface saturation, infrared thermography to detect thermal anomalies indicating moisture presence, and physical core sampling to verify membrane-to-substrate adhesion failure. Surface water testing isolates active leak points by introducing controlled water volumes and observing penetration patterns. Leak location requires technical equipment and diagnostic protocols—assumptions about water entry points based on interior staining location are frequently incorrect due to lateral moisture migration within roof assemblies.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <ChevronRight className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                Can a flat roof fail without visible damage?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg pl-9">
                Yes. Flat roof assemblies fail through concealed mechanisms that produce no surface indications. Fastener withdrawal from substrate occurs beneath membrane surface. Adhesive bond failure between membrane plies develops without external evidence. Substrate deterioration proceeds under intact weatherproofing layers. Thermal expansion cycles create fatigue stress that weakens material before visible cracking appears. Standing water accelerates UV degradation through magnification effect without producing obvious membrane defects. Inspection protocols specifically target these concealed failure modes—relying on surface appearance provides false confidence about actual roof condition.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <ChevronRight className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                Do coatings hide roof problems?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg pl-9">
                Coatings conceal surface conditions but do not address underlying structural deficiencies. Elastomeric coatings applied over deteriorated substrate provide cosmetic improvement while membrane adhesion failure continues beneath the coating layer. Reflective coatings reduce thermal stress but do not restore fastener holding capacity or repair seam separation. Coating application without diagnostic inspection masks conditions that require structural intervention—resulting in continued deterioration under cosmetically improved surface. Proper restoration protocols require substrate evaluation before coating application. Coatings applied to unsuitable substrate conditions constitute deferred maintenance, not roof restoration.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <ChevronRight className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                Is replacement always necessary?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg pl-9">
                No. Many flat roofing systems can be restored through targeted repair or comprehensive coating systems when substrate remains structurally sound and moisture infiltration is limited to isolated areas. Roofs with intact attachment, minimal moisture intrusion, and surface deterioration only are candidates for restoration rather than replacement. However, systems with widespread fastener failure, extensive substrate saturation, or structural deck deterioration require removal and replacement. The appropriate intervention is determined by inspection findings—not by contractor business models or property owner budget constraints. Restoration extends service life by 10-15 years when applied to suitable substrate conditions.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <ChevronRight className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                Can inspections support insurance claims?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg pl-9">
                Yes. Inspection reports prepared by licensed roofing contractors provide third-party documentation of roof conditions, failure mechanisms, and probable causation. Documentation includes photographic evidence, material identification, installation date assessment (when determinable), and technical analysis of observed conditions. These reports support insurance claims by establishing factual conditions rather than policyholder assertions. However, inspection findings document what exists—not whether insurance coverage applies to identified conditions. Coverage determinations remain with insurance carriers based on policy language, loss causation, and maintenance history. Inspection reports provide objective evidence for carrier review.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600/30 transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <ChevronRight className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                How long does a flat roof inspection take?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg pl-9">
                Comprehensive inspection of typical commercial flat roof requires 2-4 hours on-site depending on roof area, access complexity, and diagnostic methods employed. Nuclear moisture scanning adds time but provides subsurface saturation mapping not obtainable through visual inspection. Core sampling requires additional time for extraction, documentation, and temporary sealing. Large commercial buildings or structures with multiple roof elevations require extended inspection periods. Basic visual assessment can be completed more quickly but provides limited diagnostic value. Report preparation requires additional time after site visit—written documentation with photographic evidence is typically delivered within 48-72 hours of inspection completion.
              </p>
            </div>
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
              to="/tile-roof-inspection-palm-beach-county/"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Tile Roof Inspection — Palm Beach County
              </h3>
              <p className="text-zinc-400">
                Concrete and clay tile system evaluation including underlayment assessment
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
              to="/flat-roof-inspection-broward-county/"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Flat & Single-Ply Roof Inspection — Broward County
              </h3>
              <p className="text-zinc-400">
                Diagnostic flat roof inspection services in Broward County
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule a Flat Roof Inspection
          </h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Diagnostic evaluation of your commercial or low-slope residential roofing system performed by licensed contractors with material-specific expertise and HVHZ familiarity. Documentation suitable for insurance, engineering review, or capital planning purposes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact/"
              className="px-10 py-5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-xl shadow-lg shadow-red-600/20"
            >
              Schedule Inspection
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
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>HVHZ-Compliant Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Insurance Documentation Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
