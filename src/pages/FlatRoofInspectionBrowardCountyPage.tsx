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
} from 'lucide-react';

export default function FlatRoofInspectionBrowardCountyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Flat Roof Inspection Broward County';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Diagnostic flat roof inspections for commercial and low-slope residential properties in Broward County. Membrane analysis, drainage evaluation, and fastening integrity assessment by licensed contractors.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Flat Roof Inspection in Broward County",
      "serviceType": "Flat Roof Inspection",
      "description": "Professional flat roof inspections for commercial and low-slope residential properties throughout Broward County, Florida. Inspections include diagnostic analysis, photo documentation, and insurance-defensible reporting.",
      "url": "https://allphaseconstructionfl.com/flat-roof-inspection-broward-county",
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
            <Link to="/roof-inspection" className="hover:text-red-500 transition-colors">Roof Inspection</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Flat Roof Inspection — Broward County</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Flat & Single-Ply Roof Inspection —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Broward County
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-4xl">
            <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">Diagnostic evaluation</Link> of commercial and low-slope residential roofing systems. Material-specific inspection protocols for <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">TPO, PVC, EPDM, modified bitumen, and built-up roofing</Link> assemblies. Licensed contractor analysis focused on drainage performance, fastening integrity, and code compliance in High Velocity Hurricane Zone jurisdictions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
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

      {/* Flat Roof Risks Specific to Broward County */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Flat Roof Risks Specific to Broward County
          </h2>
          <p className="text-xl text-zinc-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            Regional climate conditions, wind exposure, and building code requirements create accelerated deterioration patterns that require <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">specialized inspection protocols</Link> and documentation strategies.
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
                Many commercial buildings in <Link to="/locations" className="text-red-500 hover:text-red-400 underline transition-colors">Broward County</Link> contain roofing systems installed in the 1990s or early 2000s that have exceeded design service life. Material formulations used during that era—particularly early TPO generations—show premature deterioration patterns not anticipated during original installation.
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
              <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline transition-colors">Diagnostic inspection</Link> before failure occurs provides the documentation needed to schedule replacement during favorable weather windows, secure financing on planned terms, and maintain continuous insurance coverage—rather than responding to emergency conditions under time pressure with limited contractor availability and uncertain insurance claim outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Silent Failure Warning - Above the Fold */}
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
                    Water does not travel vertically through flat roofing assemblies. It enters through a compromised seam, flashing separation, or puncture—then migrates horizontally beneath the membrane, sometimes traveling 20, 50, or 100 feet before saturating insulation and penetrating the deck. The interior leak location bears no relationship to the actual point of entry.
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
                to="/contact"
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
              Licensed General Contractor CGC-1526236 | Roofing Contractor CCC-1331464 | Broward County HVHZ-compliant inspection protocols
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
                    Inspection protocols include systematic probing of seams, infrared thermography for concealed moisture, and evaluation of conditions that cannot be assessed through visual observation alone.
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
                    Elastomeric coatings, silicone systems, and acrylic sealants are frequently applied to aging flat roofs as temporary measures to extend service life. These coatings create a uniform surface appearance that conceals the condition of the underlying membrane, seams, and substrate.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Flat & Single-Ply Roofing Systems We Inspect
          </h2>

          <p className="text-xl text-zinc-300 mb-10 text-center leading-relaxed">
            Our inspectors have material-specific expertise in evaluating the condition, attachment integrity, and remaining service life of all <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial and low-slope residential roofing systems</Link> common to South Florida.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 hover:border-red-600/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">TPO (Thermoplastic Polyolefin)</h3>
              <p className="text-zinc-400">
                Heat-welded seam evaluation, fastener pattern verification, membrane shrinkage assessment, and formulation-specific deterioration indicators.
              </p>
            </div>

            <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 hover:border-red-600/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">PVC (Polyvinyl Chloride)</h3>
              <p className="text-zinc-400">
                Weld integrity analysis, plasticizer migration detection, chemical resistance verification, and compatibility assessment with existing substrates.
              </p>
            </div>

            <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 hover:border-red-600/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Modified Bitumen</h3>
              <p className="text-zinc-400">
                Multi-ply system evaluation, interply adhesion testing, granule retention assessment, blister identification, and torch-applied seam integrity.
              </p>
            </div>

            <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 hover:border-red-600/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Built-Up Roofing (BUR)</h3>
              <p className="text-zinc-400">
                Aggregate embedment analysis, interply delamination detection, bitumen condition evaluation, and identification of overlay configurations.
              </p>
            </div>

            <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 hover:border-red-600/30 transition-all md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-2">Coated Flat Roof Systems</h3>
              <p className="text-zinc-400">
                Coating adhesion testing, substrate identification, mil thickness measurement, cracking and alligatoring assessment, and evaluation of underlying membrane condition beneath restoration coatings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Flat & Single-Ply Roof Inspection Includes */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            What Our Flat & Single-Ply Roof Inspection Includes
          </h2>

          <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-2 border-zinc-800 rounded-2xl p-10 md:p-12">
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Moisture Mapping and Intrusion Indicators</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Infrared thermography, capacitance scanning, and visual indicators to identify areas of concealed saturation beneath membrane surfaces.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Seam and Membrane Integrity Assessment</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Systematic evaluation of seam welds, overlap joints, membrane thickness, and surface deterioration through probing and visual examination.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Flashing and Penetration Analysis</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Inspection of all roof penetrations, HVAC equipment curbs, parapet terminations, and vertical transitions for proper integration and sealant condition.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Drainage and Ponding Evaluation</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Assessment of internal drain functionality, overflow scupper capacity, and identification of ponding water locations that persist beyond 48 hours after rainfall.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Coating Condition and Adhesion Review</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Evaluation of applied coatings for adhesion loss, cracking, alligatoring, and assessment of underlying membrane condition beneath coating systems.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Visible Deck Condition Indicators</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Identification of deflection, sagging, or structural distress visible from the roof surface that may indicate underlying deck deterioration.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Photo-Documented Findings with Written Summary</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Comprehensive photographic documentation of all conditions identified, accompanied by written analysis explaining observations and their significance.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-zinc-800">
              <p className="text-xl text-zinc-200 leading-relaxed">
                Each inspection delivers a complete condition assessment that establishes the current state of your flat or single-ply roofing system, identifies existing defects and their probable causes, and documents conditions that inform maintenance and capital planning decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After the Inspection */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            What Happens After the Inspection
          </h2>
          <p className="text-xl text-zinc-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            Inspection establishes facts. You determine the appropriate response based on those facts, your budget parameters, and your operational timeline.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-10 h-10 text-green-500 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Inspection ≠ Replacement</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Diagnostic inspection does not automatically mean your roof requires replacement. Many flat and single-ply roofing systems we evaluate are structurally sound, functionally adequate, and appropriate candidates for localized repair or restoration—not full tear-off.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                The inspection objective is to document what exists, identify what has failed or is failing, and establish the extent of any concealed damage. This information allows you to make an informed decision about whether targeted repairs can restore functionality or whether system age and deterioration extent warrant replacement.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-10 h-10 text-red-600 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Written Documentation</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                You receive a comprehensive written report that includes photographic documentation of all conditions identified during inspection, annotated diagrams showing failure locations and moisture extent, and detailed descriptions explaining each observation.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Reports are prepared in plain language—not contractor jargon—so facility managers, property owners, and insurance representatives can understand findings without requiring technical roofing expertise. Photos are labeled, dated, and geo-referenced where applicable.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-10 h-10 text-red-600 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Multiple Intervention Options</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                Inspection findings determine whether your roofing system requires targeted repair (addressing specific failure points), restoration (coating or re-cover systems that extend service life), or full replacement (complete tear-off and new installation).
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                The report presents these options with cost-benefit considerations, expected service life for each approach, and technical limitations or risks associated with repair versus replacement. You control the decision—we provide the data to support informed choice.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-red-600 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Insurance-Ready Reporting</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                When inspection is performed for insurance documentation, policy renewal, or claims support, reports are formatted to meet carrier requirements. This includes contractor license verification, date-stamped photographic evidence, narrative descriptions of damage mechanisms, and professional assessment of remaining service life.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Insurance-ready reports provide the third-party documentation insurers require without creating obligations or commitments on your part. The report establishes roof condition at a specific point in time—useful for demonstrating maintenance compliance, supporting coverage decisions, or documenting pre-existing conditions.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-2 border-zinc-700 rounded-2xl p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              No Pressure. No Automatic Sales Pitch. Just Facts.
            </h3>
            <div className="space-y-4 text-lg text-zinc-300 leading-relaxed max-w-4xl mx-auto">
              <p>
                Inspection services are not contingent on repair or replacement contracts. You can use our findings to obtain competitive bids from multiple contractors, budget for future capital expenditure, satisfy insurance carrier requirements, or inform operational planning—with no obligation to proceed with any work.
              </p>
              <p>
                If inspection findings indicate that repair or replacement is advisable and you choose to obtain a proposal from All Phase Construction, we provide detailed scope documentation, material specifications, and fixed-price estimates. But the inspection itself stands alone as a diagnostic service, not a sales tool.
              </p>
              <p className="text-white font-semibold pt-4 border-t border-zinc-800">
                The value of inspection is information—accurate, unbiased technical analysis that establishes current conditions and supports rational decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material-Specific Considerations */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Material-Specific Inspection Considerations
          </h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">TPO (Thermoplastic Polyolefin)</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                TPO membranes are heat-welded at seams and commonly mechanically attached or fully adhered. Inspection focuses on weld integrity, fastener plate condition, membrane shrinkage indicators, and surface chalking. Early-generation TPO formulations experienced premature deterioration—material vintage affects remaining service life assessment.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                HVHZ installations require specific fastening densities in perimeter and corner zones. Non-compliant attachment creates blow-off risk and may affect insurance coverage in the event of wind damage.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">PVC (Polyvinyl Chloride)</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                PVC membranes exhibit superior chemical resistance and longer track record than TPO but cost more per square foot. Inspection evaluates heat-welded seams, plasticizer migration (which causes brittleness), and compatibility with existing substrates if PVC was installed over another roofing material.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                PVC remains flexible in cold weather better than TPO and generally maintains weld strength over longer service life. Inspection documentation should identify membrane manufacturer and installation date to assess expected remaining lifespan.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">EPDM (Ethylene Propylene Diene Monomer)</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                EPDM is a synthetic rubber membrane typically installed in large sheets with adhesive or tape seams. Inspection focuses on seam integrity (EPDM seams are more vulnerable than heat-welded thermoplastic seams), puncture damage, and shrinkage that creates stress at terminations.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                EPDM requires ballast, mechanical attachment, or full adhesion. Ballasted systems (using stone or pavers) are uncommon in HVHZ jurisdictions due to wind-borne debris concerns. Inspection verifies attachment adequacy and evaluates whether membrane remains properly secured.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Modified Bitumen</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Modified bitumen systems use polymer-modified asphalt in rolled sheets, typically installed in multiple plies with torch application, hot mopping, or cold adhesive. Inspection evaluates interply adhesion, surface granule retention, blister formation, and seam integrity.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Torch-applied systems present fire risk during installation and may show burn-through defects. Cap sheet condition and reflectivity affect thermal performance. South Florida's solar exposure accelerates UV degradation of exposed cap sheets—a critical factor in remaining service life evaluation.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Built-Up Roofing (BUR)</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Built-up roofing consists of alternating layers of bitumen and reinforcing fabric, typically finished with gravel or a mineral cap sheet. These systems have decades of performance history but are less common on new construction due to installation complexity and weight.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                BUR inspection evaluates aggregate embedment, blister formation, interply delamination, and flashing condition. Many existing BUR systems in Broward County date to the 1980s or 1990s and may have been overlaid with subsequent roofing materials—inspection must identify the existing assembly before recommending corrective action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When Flat Roof Inspection Is Appropriate */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When Flat Roof Inspection Is Appropriate
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Diagnostic inspection should precede any repair or replacement decision when the extent or cause of failure is uncertain. The following scenarios warrant professional flat roof inspection by a licensed contractor familiar with commercial roofing systems and HVHZ requirements:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <AlertTriangle className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Active or Intermittent Leaks</h3>
              <p className="text-zinc-300 leading-relaxed">
                Water intrusion without clearly identifiable source location. Leaks occurring only during wind-driven rain. Moisture appearing in multiple interior locations suggesting lateral migration beneath the membrane.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <Droplets className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Persistent Ponding Water</h3>
              <p className="text-zinc-300 leading-relaxed">
                Areas retaining water more than 48 hours after rainfall. Progressive ponding where water accumulation worsens over time. Visible membrane degradation in areas of frequent water retention.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <FileText className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Insurance or Sale Transaction Requirements</h3>
              <p className="text-zinc-300 leading-relaxed">
                Pre-purchase due diligence for commercial property acquisition. Insurance carrier requirements for policy renewal or underwriting. Documentation needed for property condition assessment.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <Wind className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Post-Storm Damage Assessment</h3>
              <p className="text-zinc-300 leading-relaxed">
                Evaluation of wind damage extent after tropical storm or hurricane. Documentation of conditions for insurance claim purposes. Determination of whether damage threshold triggers permitting requirements.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <ClipboardCheck className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Routine Maintenance Planning</h3>
              <p className="text-zinc-300 leading-relaxed">
                Proactive assessment of aging roofing system to identify deterioration before failure occurs. Establishment of baseline conditions for multi-year capital planning. Verification of prior repair work quality and effectiveness.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <Thermometer className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Suspected Concealed Moisture</h3>
              <p className="text-zinc-300 leading-relaxed">
                Interior staining or damage suggesting hidden water intrusion. Elevated cooling costs potentially indicating wet insulation. Infrared thermography to identify extent of saturation without destructive investigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Compliance & HVHZ Requirements */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Code Compliance & HVHZ Requirements for Flat Roofs
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              Broward County sits entirely within Florida's High Velocity Hurricane Zone, which imposes wind load requirements significantly higher than standard Florida Building Code provisions. For low-slope roofing systems, HVHZ designation affects fastening schedules, perimeter securement, and testing requirements for mechanically attached membranes.
            </p>

            <p>
              The Florida Building Code references ANSI/SPRI standards for edge metal, ASTM standards for membrane materials, and FM Global approval listings for wind uplift classifications. Commercial flat roofs in HVHZ jurisdictions typically require FM 1-90 or higher ratings (indicating resistance to 90 psf uplift pressure). Non-compliant installations create liability exposure and may affect insurance coverage in the event of wind damage.
            </p>

            <p>
              Mechanically attached single-ply systems must meet specific fastener densities in field zones, perimeter zones, and corner zones. Edge metal must be designed and installed per ANSI/SPRI ES-1 or FM 4435. Fully adhered systems require adhesive coverage rates that achieve the specified uplift rating. Inspection by a licensed contractor familiar with these requirements identifies non-compliant conditions before they result in failure.
            </p>

            <p>
              Florida Statute 553.844(5) exempts roofs permitted after March 1, 2009, from the historical 25% repair threshold that previously triggered full replacement requirements. This means substantial flat roof repairs can now be performed without replacing the entire membrane—provided the repaired area meets current code. Inspection establishes baseline conditions and documents existing compliance status.
            </p>

            <p>
              Many commercial buildings in <Link to="/locations" className="text-red-500 hover:text-red-400 underline transition-colors">Broward County</Link> were constructed between 1970 and 2000, when building codes imposed lower wind load requirements. Roofs installed during this period may not meet current HVHZ standards. While these installations are legally grandfathered, property owners should understand the performance gap when evaluating insurance requirements and planning capital expenditures.
            </p>
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
              Our inspectors possess material-specific expertise across all <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline transition-colors">commercial and low-slope residential roofing systems</Link> common to South Florida.
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

      {/* Service Area */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Flat Roof Inspection Service Area — Broward County
            </h2>
          </div>

          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            We provide diagnostic flat roof inspection services for commercial and residential low-slope properties throughout <Link to="/locations" className="text-red-500 hover:text-red-400 underline transition-colors">Broward County</Link>, including:
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-lg text-zinc-300">
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <Link to="/roofing-contractor-fort-lauderdale-fl" className="text-red-500 hover:text-red-400 underline transition-colors">Fort Lauderdale</Link>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <Link to="/roofing-contractor-pompano-beach-fl" className="text-red-500 hover:text-red-400 underline transition-colors">Pompano Beach</Link>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <Link to="/roofing-contractor-coral-springs-fl" className="text-red-500 hover:text-red-400 underline transition-colors">Coral Springs</Link>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Deerfield Beach</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <Link to="/roofing-contractor-plantation-fl" className="text-red-500 hover:text-red-400 underline transition-colors">Plantation</Link>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Hollywood</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Miramar</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Pembroke Pines</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <Link to="/roofing-contractor-davie-fl" className="text-red-500 hover:text-red-400 underline transition-colors">Davie</Link>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Weston</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Coconut Creek</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Parkland</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Margate</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Tamarac</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Lauderhill</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Sunrise</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Cooper City</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>Hallandale Beach</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Frequently Asked Questions — Flat Roof Inspection
          </h2>

          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                How are flat roof leaks traced to their source?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Water travels horizontally through insulation layers and along deck seams before manifesting as interior staining—often dozens of feet from the actual entry point. Leak tracing requires systematic evaluation of membrane seams, fastener penetrations, and flashing terminations in the general vicinity of interior damage, combined with infrared thermography to map concealed moisture paths. Destructive probing may be necessary to confirm entry locations when visual indicators are inconclusive. The leak source is rarely directly above the visible interior damage.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Can a flat roof be leaking without visible exterior damage?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Yes. The majority of flat roof leaks originate at concealed locations: seam separation beneath overlap joints, fastener back-out that creates pathways through membrane into wet insulation, sealant failure at metal terminations, or bond loss between base flashing and vertical surfaces. Surface-level observation identifies obvious defects like blistering or exposed substrate, but systematic probing and moisture detection equipment are required to locate leaks at hidden failure points. A roof can appear intact from above while actively leaking through subsurface defects.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Do elastomeric coatings hide underlying roofing problems?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Coatings create a uniform surface appearance that conceals the condition of the underlying membrane, seam integrity, and substrate. A recently coated flat roof may look serviceable while the base layer beneath has separated seams, saturated insulation, or deteriorated flashings. Coating application addresses surface-level weathering but does not repair structural defects, seam failures, or moisture intrusion that existed prior to coating. Diagnostic inspection evaluates whether coating was applied over a sound substrate or used to mask existing problems.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Does a flat roof inspection always result in replacement recommendations?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                No. Many flat and single-ply roofing systems we evaluate are appropriate candidates for localized repair or restoration coating systems—not full tear-off. Inspection documents actual conditions and identifies whether defects are isolated and repairable or widespread and systemic. The determination depends on moisture extent, remaining membrane service life, code compliance requirements, and cost-effectiveness of repair versus replacement. Inspection provides the data; property owners make the financial decision based on their operational timeline and capital availability.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Can flat roof inspection reports be used for insurance claims or documentation?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Yes. Inspection reports prepared by licensed contractors provide third-party documentation of roof condition, damage extent, and causation analysis. Reports include contractor license verification, date-stamped photographic evidence, and professional assessment suitable for insurance carriers, underwriters, and claims adjusters. Documentation establishes conditions at a specific point in time—useful for pre-loss baseline records, post-storm damage assessment, policy renewal requirements, or pre-purchase due diligence. Reports meet carrier formatting requirements when specified in advance.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                How long does a commercial flat roof inspection take?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Inspection duration depends on roof area, system complexity, and accessibility. A typical 5,000–10,000 square foot commercial flat roof requires 2–4 hours for thorough on-site evaluation, including moisture scanning, seam probing, drainage assessment, and photographic documentation. Larger facilities, multi-level structures, or roofs with extensive equipment penetrations require additional time. Report preparation—including photo annotation, written analysis, and findings summary—requires an additional 3–5 hours off-site. Most clients receive completed inspection reports within 48–72 hours of site visit.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                What is the difference between a roof inspection and a roof certification?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Inspection is diagnostic evaluation that documents existing conditions without making warranties about future performance. Roof certification is a contractual guarantee—typically required by lenders or insurance carriers—stating that the roof will remain watertight for a specified period (usually 2–5 years). Certification requires the issuing contractor to perform any necessary repairs to bring the roof to certifiable condition and assume liability for leaks during the certification period. Inspection reports inform decision-making; certifications create enforceable obligations.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Can infrared thermography detect all flat roof leaks?
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Infrared thermography identifies temperature differentials caused by moisture-saturated insulation, which retains heat differently than dry substrate. This technique effectively maps concealed wet areas but does not pinpoint specific entry locations or identify dry defects that will leak in the future. Thermography works best when performed after sunset on roofs that have absorbed daytime heat. The technology is a diagnostic tool—not a standalone solution—and must be combined with visual assessment, probing, and material-specific knowledge to correlate thermal signatures with actual failure mechanisms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Related Inspection & Roofing Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/roof-inspection" className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Search className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                General Roof Inspection Services
              </h3>
              <p className="text-zinc-400 mb-4">
                Comprehensive diagnostic roof evaluations for all roofing system types across Broward and Palm Beach County
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link to="/commercial-roofing" className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Building2 className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Commercial Roofing Services
              </h3>
              <p className="text-zinc-400 mb-4">
                Installation, restoration, and replacement of commercial flat roofing systems following inspection findings
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link to="/flat-roofing" className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Layers className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Flat Roofing Installation & Repair
              </h3>
              <p className="text-zinc-400 mb-4">
                TPO, PVC, EPDM, and modified bitumen installation for residential and commercial properties
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link to="/roofing-services/roof-repair" className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Shield className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Roof Repair Services
              </h3>
              <p className="text-zinc-400 mb-4">
                Targeted repair of identified deficiencies based on inspection documentation
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
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
              to="/tile-roof-inspection-broward-county"
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
              to="/flat-roof-inspection-palm-beach-county"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-3">
                Flat & Single-Ply Roof Inspection — Palm Beach County
              </h3>
              <p className="text-zinc-400">
                Diagnostic flat roof inspection services in Palm Beach County
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
              to="/contact"
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
