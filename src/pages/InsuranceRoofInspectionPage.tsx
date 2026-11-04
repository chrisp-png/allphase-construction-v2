import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ChevronRight,
  FileText,
  ClipboardCheck,
  Shield,
  BadgeCheck,
  AlertTriangle,
  Calendar,
  Home,
  Building2,
  FileCheck,
  MapPin,
} from 'lucide-react';

export default function InsuranceRoofInspectionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Insurance Roof Inspection Broward & Palm Beach';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Insurance-compliant roof inspections and certifications for Broward and Palm Beach Counties. Citizens Property Insurance, wind mitigation, and carrier-required documentation by licensed contractors.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Insurance Roof Inspection & Certification",
      "serviceType": "Insurance Roof Inspection and Certification",
      "description": "Insurance-compliant roof inspections and certifications for property insurance underwriting, including Citizens Property Insurance requirements, wind mitigation documentation, and carrier-specific evaluation protocols.",
      "url": "https://allphaseconstructionfl.com/insurance-roof-inspection",
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
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link to="/roof-inspection/" className="text-slate-300 hover:text-white transition-colors">
              Roof Inspection
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-white">Insurance Roof Inspection</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insurance Roof Inspection & Roof Certification — Broward & Palm Beach Counties
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Insurance-compliant roof inspection and certification services for property insurance underwriting,
              coverage eligibility, and carrier-required documentation in South Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+17542275605"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (754) 227-5605
              </a>
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Request Inspection
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Insurance Roof Inspection Overview
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Insurance-driven roof inspections are diagnostic evaluations required by property insurance carriers
                  to assess risk, determine coverage eligibility, and establish premium rates. These inspections differ
                  from standard condition assessments in scope, documentation requirements, and regulatory compliance.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  In Florida, insurance carriers—including Citizens Property Insurance Corporation—mandate specific
                  inspection protocols, form completion standards, and licensed contractor certifications to validate
                  roof condition and remaining useful life.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Roof Certification vs. Standard Inspection
              </h2>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-slate-700" />
                      Roof Certification
                    </h3>
                    <p className="text-slate-700">
                      A formal certification is a licensed contractor's attestation that a roof system meets specific
                      performance criteria and has a documented remaining useful life. Certifications are legally binding
                      statements used for insurance underwriting and may require professional liability coverage from the
                      certifying contractor.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <ClipboardCheck className="w-5 h-5 text-slate-700" />
                      Standard Roof Inspection
                    </h3>
                    <p className="text-slate-700">
                      A diagnostic evaluation of current condition, defects, and system performance. Standard inspections
                      document findings but do not provide formal certification or attestation of remaining useful life for
                      insurance purposes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Citizens Property Insurance Requirements
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Citizens Property Insurance Corporation—Florida's insurer of last resort—maintains specific roof
                inspection and certification requirements that differ from private carriers:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Roof Age Documentation
                    </h3>
                    <p className="text-slate-700">
                      Citizens requires proof of roof age through building permits, installation invoices, or contractor
                      affidavits. Roofs 15 years or older may require certification or face coverage restrictions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Remaining Useful Life Certification
                    </h3>
                    <p className="text-slate-700">
                      Licensed contractors must certify remaining useful life of at least 5 years for roofs approaching
                      age thresholds. Certification requires documented inspection and material-specific analysis.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      HVHZ Compliance Verification
                    </h3>
                    <p className="text-slate-700">
                      Properties in High Velocity Hurricane Zones (Broward and southern Palm Beach County) require
                      verification of code-compliant installation, including fastening schedules and approved materials.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Licensed Contractor Requirement
                    </h3>
                    <p className="text-slate-700">
                      Only Florida-licensed general contractors (CGC) or certified roofing contractors (CCC) may provide
                      roof certifications accepted by Citizens. All Phase Construction USA holds both CGC-1526236 and
                      CCC-1331464 licenses.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Wind Mitigation vs. Roof Certification
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <div className="flex gap-3 items-start">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">
                      These Are Different Evaluations
                    </h3>
                    <p className="text-amber-900 mb-3">
                      A wind mitigation inspection evaluates structural features that reduce hurricane damage risk and
                      qualify for insurance premium discounts. A roof certification documents roof condition and remaining
                      useful life for coverage eligibility.
                    </p>
                    <p className="text-amber-900">
                      <strong>Important:</strong> Wind mitigation inspections are typically conducted by licensed home
                      inspectors or engineers. Roof certifications must be completed by licensed roofing contractors.
                      These are separate services with different documentation requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Insurance Inspection Process
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Carrier Requirements Review
                    </h3>
                    <p className="text-slate-700">
                      We verify your insurance carrier's specific inspection requirements, form types, and documentation
                      standards. Citizens, private carriers, and surplus lines insurers have different protocols.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Comprehensive Roof Evaluation
                    </h3>
                    <p className="text-slate-700">
                      Physical inspection of roof covering, underlayment condition (if accessible), fastening integrity,
                      flashing systems, and visible defects. Evaluation follows Florida Building Code standards and
                      material-specific inspection protocols.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Documentation & Photography
                    </h3>
                    <p className="text-slate-700">
                      Detailed photographic documentation of roof system components, material condition, and any defects.
                      Insurance carriers require specific photo angles and coverage areas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Certification or Report Completion
                    </h3>
                    <p className="text-slate-700">
                      Licensed contractor completes required forms, provides remaining useful life determination, and
                      signs certification under penalty of perjury. Report includes contractor license numbers, insurance
                      verification, and supporting documentation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Delivery to Carrier or Agent
                    </h3>
                    <p className="text-slate-700">
                      Completed certification and supporting documentation delivered directly to insurance carrier, agent,
                      or property owner as specified. Digital delivery meets most carrier requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What Our Insurance Roof Inspections Provide
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                All Phase Construction USA provides insurance-compliant roof inspections and documentation services
                for property owners, insurance agents, and underwriters in Broward and Palm Beach Counties.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Roof System Condition Assessment
                    </h3>
                    <p className="text-slate-700">
                      Comprehensive evaluation of roof covering materials, visible fastening, flashing systems, and
                      surface defects performed by licensed CGC/CCC contractors with documented inspection protocols.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Visible Damage and Deterioration Documentation
                    </h3>
                    <p className="text-slate-700">
                      Identification and description of observed material degradation, broken components, improper
                      installations, and active defects documented according to industry standards and carrier requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Photo-Supported Findings
                    </h3>
                    <p className="text-slate-700">
                      High-resolution digital photography documenting overall roof condition, material close-ups,
                      flashing details, and specific problem areas with date stamps and metadata as required by carriers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Written Summary Suitable for Insurance Review
                    </h3>
                    <p className="text-slate-700">
                      Formal inspection report or certification letter prepared on contractor letterhead, including
                      material specifications, installation date verification, and contractor license documentation
                      meeting carrier-specific formatting requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Clear Statement of Observed Conditions Only
                    </h3>
                    <p className="text-slate-700">
                      Independent professional judgment documenting actual roof condition at time of inspection.
                      Findings reflect observed physical evidence and cannot be influenced by property owner's insurance
                      situation, financial constraints, or desired outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-6">
                <div className="flex gap-3 items-start">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">
                      Important Disclosure
                    </h3>
                    <p className="text-amber-900 mb-3">
                      Insurance roof inspections document existing conditions and do not guarantee insurance approval,
                      policy issuance, or specific underwriting decisions. Insurance carriers independently evaluate
                      inspection findings according to their proprietary underwriting standards.
                    </p>
                    <p className="text-amber-900">
                      All Phase Construction USA provides accurate, truthful documentation based on physical inspection
                      evidence. We cannot certify roofs that do not meet minimum condition standards, and we cannot
                      predict or influence carrier approval decisions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Common Insurance Inspection Scenarios
              </h2>
              <div className="space-y-4">
                <div className="border border-slate-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    New Policy Application
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Insurance carriers often require roof inspection and certification before issuing new coverage,
                    particularly for roofs over 10 years old or properties in coastal areas.
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>Typical turnaround:</strong> 3-5 business days for inspection and certification delivery.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Policy Renewal or Non-Renewal Notice
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Carriers may require updated roof certification at renewal, especially if the roof has aged into a
                    higher risk category since policy inception. Non-renewal notices sometimes provide opportunity for
                    reconsideration with current certification.
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>Typical turnaround:</strong> Expedited service available for renewal deadlines.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Real Estate Transaction
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Property sales often require roof certification for buyer's insurance qualification. Sellers may
                    obtain certification proactively to avoid transaction delays.
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>Typical turnaround:</strong> 2-3 business days to accommodate closing timelines.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Post-Storm Coverage Verification
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Following named storms or hurricane events, carriers may require certification that roof system
                    remains in serviceable condition and has not sustained unreported damage.
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>Typical turnaround:</strong> High demand periods may extend normal timelines.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What Insurance Inspections Do Not Cover
              </h2>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <p className="text-slate-700 mb-4">
                  Insurance roof inspections and certifications are limited-scope evaluations focused on underwriting
                  requirements. They do not include:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Comprehensive structural engineering analysis</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Moisture intrusion detection or thermal imaging</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Attic ventilation assessment or energy efficiency evaluation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Invasive testing or destructive material sampling</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Code compliance verification beyond roof covering requirements</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Warranty validation or manufacturer defect investigation</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Contractor License Type Matters
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Florida law restricts who may provide roof certifications for insurance purposes. Understanding license
                classifications prevents invalid certifications that carriers will reject:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <BadgeCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Licensed General Contractor (CGC)
                    </h3>
                    <p className="text-slate-700">
                      Authorized to certify all roof types and provide insurance-compliant documentation. General
                      contractors have unrestricted scope for roof inspection and certification work.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <BadgeCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Certified Roofing Contractor (CCC)
                    </h3>
                    <p className="text-slate-700">
                      Authorized to certify all roof types and provide insurance-compliant documentation. Roofing
                      contractors specialize in roof systems and are accepted by all carriers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Licensed Home Inspectors
                    </h3>
                    <p className="text-slate-700">
                      Not authorized to provide roof certifications for insurance underwriting purposes in Florida. Home
                      inspectors may conduct inspections but cannot certify remaining useful life or sign contractor-required
                      certification forms.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Unlicensed "Roof Inspectors"
                    </h3>
                    <p className="text-slate-700">
                      Certifications from unlicensed individuals will be rejected by insurance carriers and may constitute
                      unlicensed contracting, a criminal offense in Florida.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Service Areas
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Broward County
                  </h3>
                  <div className="space-y-2">
                    <Link to="/locations/fort-lauderdale" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Fort Lauderdale
                    </Link>
                    <Link to="/locations/coral-springs" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Coral Springs
                    </Link>
                    <Link to="/locations/pompano-beach" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Pompano Beach
                    </Link>
                    <Link to="/locations/deerfield-beach" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Deerfield Beach
                    </Link>
                    <Link to="/locations/plantation" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Plantation
                    </Link>
                    <Link to="/locations/hollywood" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Hollywood
                    </Link>
                    <Link to="/locations/davie" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Davie
                    </Link>
                    <Link to="/locations/weston" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Weston
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Palm Beach County
                  </h3>
                  <div className="space-y-2">
                    <Link to="/locations/boca-raton" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Boca Raton
                    </Link>
                    <Link to="/locations/delray-beach" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Delray Beach
                    </Link>
                    <Link to="/locations/boynton-beach" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Boynton Beach
                    </Link>
                    <Link to="/locations/west-palm-beach" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      West Palm Beach
                    </Link>
                    <Link to="/locations/wellington" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Wellington
                    </Link>
                    <Link to="/locations/lake-worth" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Lake Worth
                    </Link>
                    <Link to="/locations/palm-beach-gardens" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Palm Beach Gardens
                    </Link>
                    <Link to="/locations/jupiter" className="block text-slate-700 hover:text-slate-900 transition-colors">
                      Jupiter
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-900 text-white rounded-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Request Insurance Roof Inspection</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Citizens Property Insurance accepted</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Licensed CGC & CCC contractor</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>All private carriers accepted</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Digital documentation delivery</span>
                </div>
              </div>
              <a
                href="tel:+17542275605"
                className="block text-center bg-white text-slate-900 px-6 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors mb-4"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                (754) 227-5605
              </a>
              <Link
                to="/contact/"
                className="block text-center bg-slate-800 text-white px-6 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Request Online
              </Link>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Related Services
                </h3>
                <div className="space-y-2">
                  <Link
                    to="/roof-inspection/"
                    className="block text-slate-300 hover:text-white transition-colors"
                  >
                    Standard Roof Inspection
                  </Link>
                  <Link
                    to="/tile-roof-inspection-broward-county/"
                    className="block text-slate-300 hover:text-white transition-colors"
                  >
                    Tile Roof Inspection
                  </Link>
                  <Link
                    to="/metal-roof-inspection-broward-county/"
                    className="block text-slate-300 hover:text-white transition-colors"
                  >
                    Metal Roof Inspection
                  </Link>
                  <Link
                    to="/flat-roof-inspection-broward-county/"
                    className="block text-slate-300 hover:text-white transition-colors"
                  >
                    Flat Roof Inspection
                  </Link>
                  <Link
                    to="/roof-repair"
                    className="block text-slate-300 hover:text-white transition-colors"
                  >
                    Roof Repair Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
