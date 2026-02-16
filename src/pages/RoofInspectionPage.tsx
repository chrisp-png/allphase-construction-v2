import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StickyConversionBar from '../components/StickyConversionBar';
import {
  Phone,
  CheckCircle2,
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
  Home,
  Building2,
  Wrench,
  HardHat,
  MapPin,
  ArrowRight,
  Plus,
  Minus,
  FileCheck,
} from 'lucide-react';

export default function RoofInspectionPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inspectionComponents = [
    {
      icon: <Layers className="w-8 h-8 text-red-600" />,
      title: "Roofing Material Assessment",
      description: "Material-specific analysis of condition, degradation patterns, and remaining service life based on exposure, fastening integrity, and manufacturer specifications"
    },
    {
      icon: <Droplets className="w-8 h-8 text-red-600" />,
      title: "Water Intrusion Analysis",
      description: "Identification of active and historical leak patterns, moisture migration paths, and compromised penetrations using visual inspection and documentation"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Flashing & Termination Evaluation",
      description: "Assessment of roof-to-wall terminations, valley flashings, counter-flashings, and all transition details for code compliance and water-tightness"
    },
    {
      icon: <Wind className="w-8 h-8 text-red-600" />,
      title: "Wind Resistance & Fastening",
      description: "Verification of attachment methods, uplift resistance, and compliance with High Velocity Hurricane Zone requirements where applicable"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-red-600" />,
      title: "Structural Deck Assessment",
      description: "Evaluation of roof deck integrity, deflection, and adequacy of support structure where accessible"
    },
    {
      icon: <Search className="w-8 h-8 text-red-600" />,
      title: "Drainage & Ponding Analysis",
      description: "Review of water management systems, identification of areas with inadequate drainage, and assessment of gutter and downspout functionality"
    },
    {
      icon: <FileText className="w-8 h-8 text-red-600" />,
      title: "Code Compliance Review",
      description: "Documentation of existing conditions relative to current Florida Building Code requirements and High Velocity Hurricane Zone provisions"
    },
    {
      icon: <Camera className="w-8 h-8 text-red-600" />,
      title: "Photographic Documentation",
      description: "Comprehensive photographic record of conditions, deficiencies, and areas of concern for insurance, sale transactions, or future reference"
    }
  ];

  const whoNeedsInspection = [
    {
      icon: <Home className="w-8 h-8 text-red-600" />,
      title: "Homebuyers & Sellers",
      description: "Pre-purchase roof assessments identify deferred maintenance and estimate remaining service life. Sellers benefit from pre-listing inspections that document condition and prevent last-minute transaction issues."
    },
    {
      icon: <FileText className="w-8 h-8 text-red-600" />,
      title: "Insurance-Related Inspections",
      description: "Insurers increasingly require roof inspections for policy renewals, especially for roofs 15+ years old. Florida Statute 627.7011(5) allows licensed contractors to certify remaining useful life."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: "After Severe Weather Events",
      description: "Post-storm inspections document wind and hail damage for insurance claims and determine if repairs meet the threshold requiring permits or full replacement under the 25% rule."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-red-600" />,
      title: "Proactive Maintenance Planning",
      description: "Periodic inspections identify small problems before they become expensive failures. Early detection of deteriorating flashings, failing sealants, or loose fasteners prevents interior damage."
    },
    {
      icon: <Droplets className="w-8 h-8 text-red-600" />,
      title: "Active or Historical Leaks",
      description: "When water intrusion occurs, surface symptoms rarely reveal the full extent of the problem. Comprehensive inspection traces moisture migration paths and identifies all affected components."
    },
    {
      icon: <HardHat className="w-8 h-8 text-red-600" />,
      title: "Before Renovation or Addition",
      description: "Evaluating existing roof condition before construction helps avoid mid-project complications. If the roof is near end-of-life, replacement before the addition may be more cost-effective."
    }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Roof Inspection Services",
      "serviceType": "Roof Inspection",
      "description": "Professional roof inspection services in Broward and Palm Beach Counties. Comprehensive diagnostic evaluations for all roofing systems including tile, metal, flat, and shingle roofs.",
      "url": "https://allphaseconstructionfl.com/roof-inspection",
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between a roof inspection and a free roof estimate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A roof inspection is a diagnostic evaluation intended to identify conditions, failure mechanisms, and system performance. A free estimate is typically a pricing exercise based on visible symptoms and does not involve comprehensive diagnostic analysis."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a roof inspection before repairing a leak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Roof leaks often originate far from the point where damage becomes visible. A professional inspection identifies the actual cause of water intrusion so repairs address the defect rather than the symptom."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a professional roof inspection take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most roof inspections take between 60 and 90 minutes, depending on roof size, system complexity, and accessibility. Additional time may be required for documentation and analysis."
          }
        },
        {
          "@type": "Question",
          "name": "Will a roof inspection tell me if I need repair or replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A professional roof inspection evaluates material condition, attachment integrity, and remaining service life to determine whether repair is technically sufficient or full replacement is warranted."
          }
        },
        {
          "@type": "Question",
          "name": "Are roof inspections used for insurance or underwriting purposes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, yes. Inspection documentation may be used to support insurance evaluations, underwriting decisions, or post-storm damage assessments, depending on insurer requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How often should a roof be professionally inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most roofing systems should be inspected every one to two years, and after major storm events, to identify developing issues before they result in failure."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Roof Inspection Services in Broward & Palm Beach County, FL"
        description="Professional roof inspections in Broward & Palm Beach County by a dual-licensed roofing contractor. Insurance-ready reports. Free inspections available."
        canonical="https://allphaseconstructionfl.com/roof-inspection"
        schema={schemas}
      />
      <StickyConversionBar />
      <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Roof Inspection</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Roof Inspection Services in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Palm Beach County & Broward County, Florida
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-4xl">
            Diagnostic roof evaluations performed by licensed roofing contractors. Evidence-based assessments to determine condition, identify deficiencies, and provide the information needed to make informed decisions about repair versus replacement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20 text-center"
            >
              Schedule Free Inspection
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

      {/* HVHZ & Local Code Compliance Snippet */}
      <section className="py-12 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">HVHZ Inspection Requirements for Broward & Palm Beach County</h2>
                <p className="text-zinc-300 leading-relaxed mb-3">
                  Broward County and portions of Palm Beach County fall within Florida's High Velocity Hurricane Zone (HVHZ), where roof inspections must verify compliance with enhanced wind-resistance standards. HVHZ provisions require specific fastening patterns, material approvals, and installation methods that differ from standard Florida Building Code requirements. Inspections in these jurisdictions evaluate whether roofs meet HVHZ fastening schedules, tile foam adhesive coverage, metal roof clip spacing, and shingle nailing patterns.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Licensed roofing contractors familiar with HVHZ code provisions can identify non-compliant installations that may affect insurance eligibility, wind mitigation credits, or future repair requirements. Florida Statute 627.7011(5) authorizes licensed contractors, engineers, and architects to certify remaining roof life for insurance renewals—a process requiring detailed knowledge of both material condition and code compliance status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Guide Callout */}
      <section className="py-12 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border border-red-600/20 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Looking to Hire a Roofing Contractor in South Florida?
                </h3>
                <p className="text-zinc-300 leading-relaxed mb-3">
                  Before you hire anyone to work on your roof, read our comprehensive guide covering HVHZ requirements, dual licensing, wind mitigation reports, insurance documentation, and what to verify for different roof types.
                </p>
                <Link
                  to="/locations/deerfield-beach/how-to-hire-a-roofing-contractor"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  <span>Read the Complete Hiring Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is a Professional Roof Inspection */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            What Is a Professional Roof Inspection?
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            A professional roof inspection is a systematic, evidence-based diagnostic evaluation of a roof system performed to identify material degradation, structural vulnerabilities, moisture intrusion pathways, and code compliance issues. Unlike visual walk-throughs, a true inspection assesses how the roof performs as an integrated system under wind, water, and thermal stress conditions.
          </p>

          <ul className="space-y-3 text-lg text-zinc-300 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Roofing material condition and failure patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Fastening, attachment, and uplift resistance evaluation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Flashing, penetration, and transition integrity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Active and latent water intrusion indicators</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Drainage performance and ponding risk</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Structural deck condition and load behavior</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Florida Building Code and HVHZ compliance verification</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Photographic documentation for engineering, insurance, or remediation use</span>
            </li>
          </ul>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            A roof repair inspection evaluates isolated deficiencies to determine whether targeted intervention can restore system performance without full replacement. This diagnostic process assesses the extent of damage, identifies root causes, and estimates remaining service life after correction. When leaks, material failures, or fastening deficiencies are limited in scope, a repair or replace inspection determines whether the cost and longevity of repairs justify preserving the existing system.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            A roof replacement inspection, by contrast, documents conditions that indicate system-level failure requiring complete removal and reinstallation. This evaluation identifies widespread material degradation, structural inadequacy, or code compliance deficiencies that cannot be economically corrected through targeted repairs. The findings establish whether long-term cost efficiency favors preserving an aging system or investing in a new installation with extended service life and warranty protection.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            Residential roof inspection protocols differ from commercial roof inspection requirements due to variations in system complexity, accessibility, and regulatory oversight. Residential inspections typically evaluate steep-slope systems with tile, shingle, or metal assemblies, focusing on attic ventilation, fastening adequacy, and HVHZ compliance for single-family applications. Commercial roof inspection procedures address low-slope or flat membrane systems, structural load distribution, internal drainage networks, and life-safety requirements for multi-occupant buildings.
          </p>
        </div>
      </section>

      {/* What Does a Roof Inspection Identify */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            What Does a Roof Inspection Identify?
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            A professional roof inspection is designed to identify both visible and hidden conditions that affect roof performance, lifespan, and insurability. These findings are evaluated as part of a system, not isolated symptoms.
          </p>

          <ul className="space-y-3 text-lg text-zinc-300 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Material wear, aging, and manufacturing failure indicators</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Improper installation or fastening deficiencies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Moisture intrusion paths not visible from the interior</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Wind uplift vulnerabilities and attachment risks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Code compliance issues affecting insurance eligibility</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Conditions that may require repair versus full replacement</span>
            </li>
          </ul>

          <p className="text-lg text-zinc-300 leading-relaxed mb-4">
            <strong className="text-white">Shingle roof inspection</strong> findings commonly include granule loss patterns indicating UV degradation, seal failure causing wind uplift risk, nail placement deficiencies, and inadequate starter strip installation. South Florida's intense solar exposure accelerates shingle deterioration, making periodic inspection essential for identifying premature aging.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed mb-4">
            <strong className="text-white">Tile roof inspection</strong> procedures evaluate underlayment integrity beneath intact tiles, mortar deterioration at hips and ridges, tile breakage from thermal stress or impact, and foam adhesive coverage required for wind mitigation inspection compliance. Concealed underlayment failure often occurs years before visible tile damage becomes apparent.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed mb-4">
            <strong className="text-white">Flat roof inspection</strong> protocols address membrane seam integrity, ponding water accumulation, drainage obstruction, parapet wall flashing failure, and substrate moisture infiltration not detectable from interior examination. Low-slope systems require specialized diagnostic techniques to identify trapped moisture and membrane delamination.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            Wind-related vulnerabilities constitute a primary concern for roof inspection in Palm Beach County and roof inspection in Broward County due to hurricane exposure and HVHZ code requirements. Inspections evaluate fastening patterns, edge securement, hip and ridge attachment, penetration sealing, and uplift resistance to identify deficiencies that compromise wind performance during severe weather events.
          </p>
        </div>
      </section>

      {/* Roof Inspection vs Repair vs Replacement */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Roof Inspection vs Roof Repair vs Roof Replacement
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Roof inspections, repairs, and replacements serve different purposes and should not be conflated. An inspection is a diagnostic process, while repair and replacement are corrective actions based on documented findings.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">Roof Inspection</th>
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">Roof Repair</th>
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">Roof Replacement</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-red-500 mb-2">Purpose</div>
                    <div>Identify conditions, risks, and system performance</div>
                  </td>
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-red-500 mb-2">Purpose</div>
                    <div>Correct isolated, confirmed defects</div>
                  </td>
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-red-500 mb-2">Purpose</div>
                    <div>Restore full system integrity</div>
                  </td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-red-500 mb-2">When It's Appropriate</div>
                    <div>Unknown roof condition or conflicting symptoms</div>
                  </td>
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-red-500 mb-2">When It's Appropriate</div>
                    <div>Limited, localized failure with remaining service life</div>
                  </td>
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-red-500 mb-2">When It's Appropriate</div>
                    <div>Widespread deterioration or end-of-life system</div>
                  </td>
                </tr>
                <tr>
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-red-500 mb-2">Outcome</div>
                    <div>Documentation and professional recommendations</div>
                  </td>
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-red-500 mb-2">Outcome</div>
                    <div>Temporary or permanent correction of specific issues</div>
                  </td>
                  <td className="py-6 px-4 align-top">
                    <div className="font-semibold text-red-500 mb-2">Outcome</div>
                    <div>New roofing system meeting current code</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-zinc-300 leading-relaxed">
            The distinction between a roof repair inspection and a roof replacement inspection directly influences permitting scope and code compliance requirements in Palm Beach County and Broward County. When inspection findings document isolated deficiencies affecting less than 25% of a roof section, targeted repairs may proceed under repair permits with limited code upgrade obligations. Conversely, when a roof replacement inspection identifies system-level failure requiring complete removal, full compliance with current Florida Building Code provisions becomes mandatory, including HVHZ fastening standards, underlayment specifications, and edge securement details that differ substantially from older installations.
          </p>
        </div>
      </section>

      {/* Why Roof Problems Are Commonly Misdiagnosed */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Roof Problems Are Commonly Misdiagnosed
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Most roof failures do not originate at the point where damage becomes visible. They develop through hidden system interactions that are frequently overlooked during surface-level evaluations.
          </p>

          <ul className="space-y-4 text-lg text-zinc-300 leading-relaxed mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Water migration occurring far from the point of interior staining</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Capillary action and hydrostatic pressure beneath roofing assemblies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Improper flashing integration at transitions and penetrations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Fastener back-out and attachment failure not visible from grade</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Thermal expansion, contraction, and ventilation imbalance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Deck deflection or substrate deterioration concealed by underlayment</span>
            </li>
          </ul>

          <p className="text-lg text-zinc-300 leading-relaxed">
            Accurate diagnosis requires evaluating how the roof performs as a system, not isolating individual symptoms.
          </p>
        </div>
      </section>

      {/* Next Steps After a Roof Inspection */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Next Steps After a Roof Inspection
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            A professional roof inspection establishes the factual condition of the roofing system. Any corrective action should be based strictly on documented findings, material performance, and remaining service life.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Metal roofing systems often require specialized inspection due to concealed attachment methods, thermal movement accommodation, and wind resistance characteristics that differ from other roofing materials. For properties with standing seam or structural metal roofs in HVHZ jurisdictions, our <Link to="/metal-roof-inspection-broward-county" className="text-red-600 hover:text-red-500 underline transition-colors">Metal Roof Inspection Services in Broward County</Link> and <Link to="/metal-roof-inspection-palm-beach-county" className="text-red-600 hover:text-red-500 underline transition-colors">Metal Roof Inspection Services in Palm Beach County</Link> provide system-specific evaluation of clip integrity, fastener performance, and panel condition.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Concrete and clay tile roofing systems present unique inspection challenges, including underlayment integrity assessment, tile breakage patterns, mortar deterioration, and fastening adequacy. South Florida's tile roofs require diagnostic evaluation of concealed underlayment condition and hip/ridge securement. Our <Link to="/tile-roof-inspection-broward-county" className="text-red-600 hover:text-red-500 underline transition-colors">Tile Roof Inspection Services in Broward County</Link> and <Link to="/tile-roof-inspection-palm-beach-county" className="text-red-600 hover:text-red-500 underline transition-colors">Tile Roof Inspection Services in Palm Beach County</Link> provide material-specific analysis of tile condition, underlayment performance, and structural attachment.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Flat and single-ply roofing systems on commercial properties and low-slope residential structures require diagnostic protocols that differ fundamentally from steep-slope inspections. Membrane condition, seam integrity, drainage performance, and concealed moisture detection are critical evaluation components. Our <Link to="/flat-roof-inspection-broward-county" className="text-red-600 hover:text-red-500 underline transition-colors">Flat & Single-Ply Roof Inspection Services in Broward County</Link> and <Link to="/flat-roof-inspection-palm-beach-county" className="text-red-600 hover:text-red-500 underline transition-colors">Flat & Single-Ply Roof Inspection Services in Palm Beach County</Link> include infrared thermography, systematic probing, and substrate evaluation for TPO, PVC, EPDM, modified bitumen, and built-up roofing systems.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Insurance carriers—including Citizens Property Insurance Corporation—require specific inspection protocols and contractor certifications for coverage underwriting, renewal eligibility, and premium determination. Insurance-driven inspections differ from standard condition assessments in documentation requirements, remaining useful life certification, and regulatory compliance standards. For properties requiring insurance-compliant roof evaluation or carrier-mandated certification, our <Link to="/insurance-roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">Insurance Roof Inspection & Certification Services</Link> provide licensed contractor attestation accepted by Florida property insurance carriers.
          </p>

          <div className="space-y-6">
            <div className="border-l-2 border-red-600 pl-6">
              <Link to="/roofing-services/roof-repair" className="text-xl font-semibold text-white hover:text-red-600 transition-colors">
                Roof Repair
              </Link>
              <p className="text-zinc-300 mt-2">
                Addressing isolated, confirmed defects identified during inspection
              </p>
            </div>

            <div className="border-l-2 border-red-600 pl-6">
              <Link to="/residential-roofing" className="text-xl font-semibold text-white hover:text-red-600 transition-colors">
                Residential Roofing
              </Link>
              <p className="text-zinc-300 mt-2">
                System-level solutions for owner-occupied properties
              </p>
            </div>

            <div className="border-l-2 border-red-600 pl-6">
              <Link to="/commercial-roofing" className="text-xl font-semibold text-white hover:text-red-600 transition-colors">
                Commercial Roofing
              </Link>
              <p className="text-zinc-300 mt-2">
                Engineered roofing systems for commercial and multi-unit buildings
              </p>
            </div>

            <div className="border-l-2 border-red-600 pl-6">
              <Link to="/tile-roofing" className="text-xl font-semibold text-white hover:text-red-600 transition-colors">
                Tile Roofing
              </Link>
              <p className="text-zinc-300 mt-2">
                Material-specific evaluation and corrective options for tile systems
              </p>
            </div>

            <div className="border-l-2 border-red-600 pl-6">
              <Link to="/metal-roofing" className="text-xl font-semibold text-white hover:text-red-600 transition-colors">
                Metal Roofing
              </Link>
              <p className="text-zinc-300 mt-2">
                Performance-based solutions for standing seam and structural metal roofs
              </p>
            </div>

            <div className="border-l-2 border-red-600 pl-6">
              <Link to="/shingle-roofing" className="text-xl font-semibold text-white hover:text-red-600 transition-colors">
                Shingle Roofing
              </Link>
              <p className="text-zinc-300 mt-2">
                Repair or replacement considerations based on shingle condition and age
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Does a Roof Inspection Include? */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            What Does a Roof Inspection Include?
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            A professional roof inspection evaluates the roof as a complete system rather than a collection of visible components. The inspection documents material condition, performance risks, and compliance factors that affect service life and insurability.
          </p>

          <ol className="space-y-6 list-none counter-reset">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                1
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Roofing Material Condition
                </h3>
                <p className="text-zinc-300">
                  Assessment of wear, deterioration, fractures, uplift, or surface failure
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                2
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Fastening & Attachment Systems
                </h3>
                <p className="text-zinc-300">
                  Evaluation of mechanical fasteners, adhesives, clips, and securement methods
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                3
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Flashing & Penetrations
                </h3>
                <p className="text-zinc-300">
                  Inspection of transitions, terminations, vents, skylights, and wall interfaces
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                4
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Water Intrusion Indicators
                </h3>
                <p className="text-zinc-300">
                  Identification of moisture migration, staining, trapped water, or leak pathways
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                5
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Drainage & Water Management
                </h3>
                <p className="text-zinc-300">
                  Review of slope, scuppers, gutters, internal drains, and ponding conditions
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                6
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Structural Deck Condition
                </h3>
                <p className="text-zinc-300">
                  Examination for deflection, rot, corrosion, or delamination where accessible
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                7
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Wind Resistance & Code Compliance
                </h3>
                <p className="text-zinc-300">
                  Verification of installation methods against Florida Building Code and HVHZ requirements
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                8
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Photographic Documentation
                </h3>
                <p className="text-zinc-300">
                  Time-stamped images supporting all findings and recommendations
                </p>
              </div>
            </li>
          </ol>

          <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <blockquote className="border-l-4 border-red-600 pl-6 py-4">
              <p className="text-xl text-zinc-300 italic mb-4">
                "Most roof problems aren't obvious from the ground. We get on the roof, into the attic when needed, and document what we see with photos so the condition is clear, defensible, and actionable—whether the next step is a repair, a replacement, or an insurance conversation."
              </p>
              <footer className="text-zinc-400">
                — Karl W., Roof Inspector, All Phase Construction USA
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* When Is a Roof Inspection the Appropriate First Step? */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When Is a Roof Inspection the Appropriate First Step?
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            A roof inspection is appropriate when the condition or cause of a roofing issue is uncertain. Diagnostic evaluation should precede any corrective work when symptoms do not clearly indicate isolated failure.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Water intrusion with no visible exterior damage</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Conflicting symptoms such as leaks without material failure</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Post-storm evaluation where damage extent is unclear</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Insurance documentation or underwriting requirements</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Property transactions requiring condition verification</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Preventive assessment for aging roofing systems</span>
            </li>
          </ul>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            In these scenarios, inspection establishes factual conditions before repair or replacement decisions are made.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            For commercial properties requiring ongoing condition monitoring and early problem detection, scheduled inspections through a <Link to="/roof-maintenance-programs" className="text-red-600 hover:text-red-500 underline transition-colors">preventative roof maintenance program</Link> provide consistent documentation, reduce emergency repair costs, and support insurance compliance requirements.
          </p>
        </div>
      </section>

      {/* What the Inspection Includes */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            What the Inspection Includes
          </h2>
          <p className="text-xl text-zinc-300 text-center mb-12 max-w-4xl mx-auto">
            Comprehensive evaluation of all roofing system components, material-specific analysis, and documentation of deficiencies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectionComponents.map((component, index) => (
              <div key={index} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300">
                <div className="mb-4">{component.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{component.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Schedule an Inspection */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Who Should Schedule a Roof Inspection
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whoNeedsInspection.map((item, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-zinc-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection vs Repair vs Replacement */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Understanding Inspection, Repair, and Replacement
          </h2>

          <div className="space-y-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Search className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Roof Inspection</h3>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    A diagnostic evaluation performed to assess current condition and identify deficiencies. The inspection process produces documentation of existing conditions but does not include repair or replacement work.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    Inspections serve multiple purposes: pre-purchase due diligence, insurance certification under Florida Statute 627.7011(5), post-storm damage assessment, or proactive maintenance planning. The deliverable is information — not construction work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Wrench className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Roof Repair & Restoration</h3>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    Targeted intervention to address specific deficiencies while preserving the existing roofing system. Repair work may range from isolated leak remediation to comprehensive slope restoration involving all flashings, penetrations, and vulnerable components.
                  </p>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    Repair becomes the appropriate path when the underlying roofing material retains sufficient service life and the deficiencies are localized or can be systematically addressed without disturbing the entire assembly. Cost-effectiveness depends on the extent of work required relative to the remaining roof lifespan.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    Florida Building Code Section 706 (based on IBC Section 1511) historically required full roof replacement when repairs exceed 25% of a roof section within 12 months. However, Florida Statute 553.844(5) now exempts roofs permitted after March 1, 2009, from this provision — allowing repairs of any size as long as the repaired area meets current code.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Home className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Roof Replacement</h3>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    Complete removal and replacement of the roofing assembly. Replacement becomes necessary when the existing material has reached the end of its serviceable life, when widespread failure has occurred, or when the cost of comprehensive repair approaches or exceeds replacement cost.
                  </p>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    Age alone does not dictate replacement. A 20-year-old tile roof with intact tiles, properly functioning flashings, and adequate underlayment may retain years of service life. Conversely, a 10-year-old asphalt shingle roof with widespread granule loss, multiple failed penetrations, and compromised deck may warrant full replacement.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    The inspection process provides the data necessary to make an informed decision. We assess material condition, evaluate repair options, estimate costs for both approaches, and provide guidance based on the specific circumstances of your roof — not predetermined sales objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Licensed Contractors Matter */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Inspections Should Be Performed by Licensed Roofing Contractors
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-12">
            <p>
              Florida's High Velocity Hurricane Zone encompasses Broward and Miami-Dade Counties, with portions of Palm Beach County also subject to enhanced wind load requirements. HVHZ provisions impose specific fastening schedules, material approvals, and installation methods that differ substantially from standard code requirements.
            </p>
            <p>
              Contractors who primarily work outside the HVHZ may lack familiarity with these requirements. A tile roof that appears properly installed may have inadequate foam adhesive coverage or incorrect fastening patterns — deficiencies not apparent from visual inspection alone but critical to wind performance. Metal roofing systems require specific clip spacing and attachment methods in the HVHZ. Single-ply membrane installations demand higher seam strength and perimeter attachment loads.
            </p>
            <p>
              Licensed roofing contractors maintain current knowledge of Florida Building Code provisions, local amendments, and HVHZ-specific requirements through continuing education mandated for license renewal. This regulatory familiarity informs the inspection process and ensures that identified deficiencies reflect actual code violations rather than stylistic preferences.
            </p>
            <p>
              Material-specific expertise also matters. Each roofing system has characteristic failure modes that experienced contractors recognize immediately. Concrete tile roofs commonly experience underlayment degradation before tile failure. Asphalt shingles exhibit predictable patterns of granule loss and seal failure. Metal roofing systems develop fastener backup and panel distortion. Single-ply membranes fail at seams and terminations. Identifying these patterns requires hands-on installation experience with the specific material type.
            </p>
            <p>
              Florida Statute 627.7011(5) authorizes specific license classifications to certify remaining roof life for insurance purposes. Licensed roofing contractors (CCC), general contractors (CGC), building contractors (CBC), and residential contractors (CRC) all qualify under the statute. Home inspectors and unlicensed individuals do not. Insurance carriers typically require certification from statutorily authorized inspectors.
            </p>
            <p>
              All Phase Construction USA holds both General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) licenses. Our inspections are performed by personnel with direct installation experience across all common roofing systems used in South Florida, familiarity with HVHZ requirements, and the statutory authorization to provide insurance certification letters when conditions warrant.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Florida Statute 627.7011(5) — Roof Certification Authority</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Under Florida law, insurance companies cannot non-renew a policy solely based on roof age if an authorized inspector certifies the roof has at least 5 years of remaining useful life. Authorized inspectors include:
            </p>
            <ul className="space-y-2 text-zinc-300 list-disc pl-6 mb-6">
              <li>Licensed home inspectors under Chapter 468</li>
              <li>Certified building code inspectors</li>
              <li>Licensed general contractors, building contractors, or residential contractors</li>
              <li>Licensed professional engineers</li>
              <li>Licensed architects</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed">
              Inspections performed by individuals outside these categories do not satisfy the statutory certification requirement. When insurance-related roof certification is the objective, verification of the inspector's credentials is essential.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps - Service Links */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Next Steps After Your Inspection
          </h2>
          <p className="text-xl text-zinc-300 text-center mb-12 max-w-3xl mx-auto">
            Based on the inspection findings, you may need repair, restoration, or replacement services tailored to your specific roof type and condition.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/roofing-services/roof-repair" className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Wrench className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Roof Repair & Restoration
              </h3>
              <p className="text-zinc-400 mb-4">
                Targeted repairs for localized problems or comprehensive restoration to extend service life
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link to="/residential-roofing" className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Home className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Residential Roof Replacement
              </h3>
              <p className="text-zinc-400 mb-4">
                Complete roof replacement for homes when repair is no longer cost-effective
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link to="/commercial-roofing" className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Building2 className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Commercial Roofing
              </h3>
              <p className="text-zinc-400 mb-4">
                Commercial flat roof systems, single-ply membranes, and low-slope applications
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link to="/tile-roofing" className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Layers className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Tile Roofing
              </h3>
              <p className="text-zinc-400 mb-4">
                Concrete and clay tile systems with proper flashings and verified foam adhesive
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link to="/metal-roofing" className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Shield className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Metal Roofing
              </h3>
              <p className="text-zinc-400 mb-4">
                Standing seam metal roofing systems designed for South Florida wind loads
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link to="/shingle-roofing" className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group">
              <Home className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                Shingle Roofing
              </h3>
              <p className="text-zinc-400 mb-4">
                High-wind rated asphalt shingle systems for South Florida conditions
              </p>
              <div className="flex items-center text-red-600 font-medium">
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-8 h-8 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Roof Inspection Services Across South Florida
            </h2>
          </div>

          <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Boca Raton • Deerfield Beach • Pompano Beach • Fort Lauderdale • Delray Beach • Coral Springs • Boynton Beach • West Palm Beach • Hollywood • Plantation • and surrounding communities in Broward and Palm Beach Counties
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20"
          >
            Schedule Your Free Inspection
          </Link>
        </div>
      </section>

      {/* People Also Ask - Local Search Queries */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            People Also Ask
          </h2>

          <div className="space-y-4">
            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">Who are the best roofers in Broward County?</span>
                {openFaqIndex === 0 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 0 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Licensed roofing contractors in Broward County must hold CCC (roofing contractor) or CGC (general contractor) licenses and maintain familiarity with HVHZ requirements. All Phase Construction USA (CCC-1331464, CGC-1526236) serves Coral Springs, Fort Lauderdale, Deerfield Beach, Pompano Beach, Plantation, and surrounding Broward communities with diagnostic roof inspections and code-compliant repair and replacement services.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">Where can I find roof inspection services in Deerfield Beach?</span>
                {openFaqIndex === 1 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Deerfield Beach roof inspection services should be performed by licensed contractors familiar with HVHZ fastening requirements, material-specific failure patterns, and Florida's insurance certification statutes. All Phase Construction USA is based in Deerfield Beach and provides comprehensive diagnostic inspections for residential and commercial properties throughout Broward and Palm Beach Counties.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">How do I verify my roof is hurricane-proof in South Florida?</span>
                {openFaqIndex === 2 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    A professional roof inspection verifies whether your roof meets HVHZ wind-resistance requirements, including proper fastening patterns, approved materials, and code-compliant installation methods. Inspections evaluate tile foam adhesive coverage, metal roof clip spacing, shingle nailing patterns, and flashing attachment to determine if the roof system complies with current Florida Building Code and High Velocity Hurricane Zone provisions.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">What should I look for in a roofing contractor in Palm Beach County?</span>
                {openFaqIndex === 3 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Palm Beach County roofing contractors should hold active CCC or CGC licenses, provide diagnostic inspections before proposals, and understand both standard Florida Building Code and HVHZ requirements for properties south of the Martin County line. Verify license status through MyFloridaLicense.com, request references from similar projects in Boca Raton, Boynton Beach, Delray Beach, West Palm Beach, or Wellington, and confirm the contractor can provide insurance certification letters under Florida Statute 627.7011(5) when applicable.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">Can a roof inspection help with insurance requirements in Florida?</span>
                {openFaqIndex === 4 ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === 4 && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Florida Statute 627.7011(5) allows licensed contractors, engineers, and architects to certify that a roof has at least 5 years of remaining useful life, which can prevent non-renewal based solely on age. Inspection documentation may also support insurance underwriting evaluations, post-storm damage assessments, and wind mitigation credits. Carriers require certification from statutorily authorized inspectors with appropriate credentials.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Roof Inspection FAQs */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Roof Inspection FAQs
          </h2>

          <div className="space-y-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                What is the difference between a roof inspection and a free roof estimate?
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                A roof inspection is a diagnostic evaluation intended to identify conditions, failure mechanisms, and system performance. A free estimate is typically a pricing exercise based on visible symptoms and does not involve comprehensive diagnostic analysis.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Do I need a roof inspection before repairing a leak?
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Yes. Roof leaks often originate far from the point where damage becomes visible. A professional inspection identifies the actual cause of water intrusion so repairs address the defect rather than the symptom.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                How long does a professional roof inspection take?
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Most roof inspections take between 60 and 90 minutes, depending on roof size, system complexity, and accessibility. Additional time may be required for documentation and analysis.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Will a roof inspection tell me if I need repair or replacement?
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Yes. A professional roof inspection evaluates material condition, attachment integrity, and remaining service life to determine whether repair is technically sufficient or full replacement is warranted.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Are roof inspections used for insurance or underwriting purposes?
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                In many cases, yes. Inspection documentation may be used to support insurance evaluations, underwriting decisions, or post-storm damage assessments, depending on insurer requirements.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                How often should a roof be professionally inspected?
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Most roofing systems should be inspected every one to two years, and after major storm events, to identify developing issues before they result in failure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Grid - Top 10 Cities */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Roof Inspection Services Across South Florida
            </h2>
            <p className="text-xl text-zinc-300">
              Professional roof inspections dispatched from our Deerfield Beach headquarters
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link
              to="/locations/boca-raton"
              className="bg-zinc-800 hover:bg-red-600 border border-zinc-700 hover:border-red-500 rounded-lg p-6 text-center transition-all duration-300 group"
            >
              <MapPin className="w-8 h-8 text-red-500 group-hover:text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold">Boca Raton</h3>
              <p className="text-xs text-zinc-400 mt-1">Palm Beach County</p>
            </Link>

            <Link
              to="/locations/deerfield-beach"
              className="bg-zinc-800 hover:bg-red-600 border border-zinc-700 hover:border-red-500 rounded-lg p-6 text-center transition-all duration-300 group"
            >
              <MapPin className="w-8 h-8 text-red-500 group-hover:text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold">Deerfield Beach</h3>
              <p className="text-xs text-zinc-400 mt-1">HQ Location</p>
            </Link>

            <Link
              to="/locations/fort-lauderdale"
              className="bg-zinc-800 hover:bg-red-600 border border-zinc-700 hover:border-red-500 rounded-lg p-6 text-center transition-all duration-300 group"
            >
              <MapPin className="w-8 h-8 text-red-500 group-hover:text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold">Fort Lauderdale</h3>
              <p className="text-xs text-zinc-400 mt-1">Broward County</p>
            </Link>

            <Link
              to="/locations/coral-springs"
              className="bg-zinc-800 hover:bg-red-600 border border-zinc-700 hover:border-red-500 rounded-lg p-6 text-center transition-all duration-300 group"
            >
              <MapPin className="w-8 h-8 text-red-500 group-hover:text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold">Coral Springs</h3>
              <p className="text-xs text-zinc-400 mt-1">Broward County</p>
            </Link>

            <Link
              to="/locations/pompano-beach"
              className="bg-zinc-800 hover:bg-red-600 border border-zinc-700 hover:border-red-500 rounded-lg p-6 text-center transition-all duration-300 group"
            >
              <MapPin className="w-8 h-8 text-red-500 group-hover:text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold">Pompano Beach</h3>
              <p className="text-xs text-zinc-400 mt-1">Broward County</p>
            </Link>

            <Link
              to="/locations/west-palm-beach"
              className="bg-zinc-800 hover:bg-red-600 border border-zinc-700 hover:border-red-500 rounded-lg p-6 text-center transition-all duration-300 group"
            >
              <MapPin className="w-8 h-8 text-red-500 group-hover:text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold">West Palm Beach</h3>
              <p className="text-xs text-zinc-400 mt-1">Palm Beach County</p>
            </Link>

            <Link
              to="/locations/delray-beach"
              className="bg-zinc-800 hover:bg-red-600 border border-zinc-700 hover:border-red-500 rounded-lg p-6 text-center transition-all duration-300 group"
            >
              <MapPin className="w-8 h-8 text-red-500 group-hover:text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold">Delray Beach</h3>
              <p className="text-xs text-zinc-400 mt-1">Palm Beach County</p>
            </Link>

            <Link
              to="/locations/boynton-beach"
              className="bg-zinc-800 hover:bg-red-600 border border-zinc-700 hover:border-red-500 rounded-lg p-6 text-center transition-all duration-300 group"
            >
              <MapPin className="w-8 h-8 text-red-500 group-hover:text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold">Boynton Beach</h3>
              <p className="text-xs text-zinc-400 mt-1">Palm Beach County</p>
            </Link>

            <Link
              to="/locations/wellington"
              className="bg-zinc-800 hover:bg-red-600 border border-zinc-700 hover:border-red-500 rounded-lg p-6 text-center transition-all duration-300 group"
            >
              <MapPin className="w-8 h-8 text-red-500 group-hover:text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold">Wellington</h3>
              <p className="text-xs text-zinc-400 mt-1">Palm Beach County</p>
            </Link>

            <Link
              to="/locations/coconut-creek"
              className="bg-zinc-800 hover:bg-red-600 border border-zinc-700 hover:border-red-500 rounded-lg p-6 text-center transition-all duration-300 group"
            >
              <MapPin className="w-8 h-8 text-red-500 group-hover:text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold">Coconut Creek</h3>
              <p className="text-xs text-zinc-400 mt-1">Broward County</p>
            </Link>
          </div>

          <div className="text-center mt-8">
            <p className="text-zinc-400">
              Serving 50+ cities across Broward and Palm Beach Counties.{' '}
              <Link to="/our-location" className="text-red-500 hover:text-red-400 underline">
                View all service areas
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-900/50 border-l-4 border-red-600 rounded-r-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Help Choosing the Right Roofing Contractor?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Before hiring a roofing contractor for repairs or replacement, learn what to look for in South Florida's High Velocity Hurricane Zone. Our comprehensive guide covers HVHZ requirements, wind mitigation, documentation, dual licensing, and what to verify before you sign.
            </p>
            <Link
              to="/locations/deerfield-beach/how-to-hire-a-roofing-contractor"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
            >
              Read: How to Hire a Roofing Contractor in South Florida
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule a Professional Roof Inspection
          </h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Comprehensive diagnostic evaluation of your roofing system performed by licensed roofing contractors. We provide the documentation and analysis you need to make informed decisions about your roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="px-10 py-5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-xl shadow-lg shadow-red-600/20"
            >
              Schedule Free Inspection
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
              <span>Comprehensive Evaluation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Licensed & Authorized Inspectors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Insurance Certification Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
