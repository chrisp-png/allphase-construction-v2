import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  Award,
  Shield,
  Home,
  ChevronRight,
  BadgeCheck,
  FileText,
  DollarSign,
  Building2,
  Users,
  Wrench,
  ClipboardCheck,
  Factory,
  Church,
  GraduationCap,
  Store,
  Briefcase,
  AlertTriangle,
  Target,
  TrendingUp,
  Zap,
  Star,
  BookOpen
} from 'lucide-react';
import { generateFAQSchema, generateBreadcrumbSchema, injectMultipleSchemas } from '../utils/enhancedSchema';

export default function CommercialRoofingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Commercial Roofing Broward & Palm Beach | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Commercial roofing for condos, HOAs & property managers in Broward & Palm Beach Counties. HVHZ code experts. My Safe Florida Condo grant assistance. Dual-licensed contractor. Free assessments.');
    }

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Commercial Roofing Services",
      "serviceType": "Commercial Roofing",
      "description": "Commercial roofing services for condos, HOAs, and property managers in Broward and Palm Beach Counties. HVHZ code experts specializing in multi-family and commercial properties.",
      "url": "https://allphaseconstructionfl.com/commercial-roofing",
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
    };

    // FAQ Schema for rich snippets
    const faqSchema = generateFAQSchema([
      { question: "What is the High Velocity Hurricane Zone and why does it matter?", answer: "The HVHZ is a special building code designation covering Miami-Dade and Broward counties — the only two counties in Florida with this classification. It requires stricter product approvals, installation methods, and inspections for all roofing work. Materials must be tested for winds exceeding 175 mph." },
      { question: "How does the My Safe Florida Condo program work?", answer: "The My Safe Florida Condominium Pilot Program provides grant funding to eligible condo associations for hurricane mitigation improvements, including roof work. The state contributes $2 for every $1 your association spends, up to $175,000 per association." },
      { question: "How long does a commercial roof last in Florida?", answer: "It depends on the system and maintenance. TPO/PVC membranes typically last 15-30 years, modified bitumen 15-25 years, metal roofs 40-70 years, and tile roofs 30-50+ years. Florida's intense sun, humidity, and hurricane exposure can shorten these lifespans without proper maintenance." },
      { question: "Do you work with property management companies?", answer: "Absolutely. We work directly with property managers, providing detailed proposals for board review, coordinating around resident schedules, and delivering the documentation you need for reserve studies, insurance, and compliance records." },
      { question: "What warranties do you offer on commercial roofing?", answer: "Warranties depend on the roofing system and manufacturer. Our manufacturer certifications (Platinum/Master level) often qualify your building for enhanced warranties — sometimes up to 25-30 years with full coverage." }
    ]);

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
      { name: 'Commercial Roofing', url: 'https://allphaseconstructionfl.com/commercial-roofing' }
    ]);

    // Inject all schemas
    const cleanup = injectMultipleSchemas([serviceSchema, faqSchema, breadcrumbSchema]);

    return cleanup;
  }, []);

  const faqs = [
    {
      question: "What is the High Velocity Hurricane Zone and why does it matter?",
      answer: (
        <>
          The HVHZ is a special building code designation covering Miami-Dade and Broward counties — the only two counties in Florida with this classification. It requires stricter product approvals, installation methods, and inspections for all roofing work. Materials must be tested for winds exceeding 175 mph. If your building is in Broward County, every roofing project must comply with HVHZ requirements — and not all contractors understand these codes.
        </>
      )
    },
    {
      question: "How does the My Safe Florida Condo program work?",
      answer: (
        <>
          The My Safe Florida Condominium Pilot Program provides grant funding to eligible condo associations for hurricane mitigation improvements, including roof work. The state contributes $2 for every $1 your association spends, up to $175,000 per association. Your building must be 3+ stories, within 15 miles of the coast, and current on milestone inspections and SIRS requirements. As of 2025, <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline">roof covering replacement</Link> is now eligible for funding, and the approval threshold has been lowered to 75% of resident unit owners. Learn more about the <Link to="/blog/my-safe-florida-condo-program-prepare-for-the-2025-reopening-with-all-phase-construction-usa" className="text-red-500 hover:text-red-400 underline">My Safe Florida Condo Program</Link>.
        </>
      )
    },
    {
      question: "Can individual condo owners apply for My Safe Florida Condo grants?",
      answer: "No. Only the condominium association can apply — not individual unit owners. The association board must approve participation, and the improvements must benefit the building's common elements. We can help your board understand the process and what improvements qualify."
    },
    {
      question: "What's included in the 40-year recertification roof inspection?",
      answer: (
        <>
          Recertification inspections examine your roof's structural members, drainage systems, water tightness, and rooftop equipment supports. If a structural engineer identifies deficiencies, you'll have 180 days to complete repairs. We recommend getting a <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline">professional roof assessment</Link> before your milestone inspection to identify and address issues proactively.
        </>
      )
    },
    {
      question: "How long does a commercial roof last in Florida?",
      answer: (
        <>
          It depends on the system and maintenance. TPO/PVC membranes typically last 15-30 years, modified bitumen 15-25 years, metal roofs 40-70 years, and tile roofs 30-50+ years. Florida's intense sun, humidity, and hurricane exposure can shorten these lifespans without proper maintenance. <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline">Regular inspections</Link> and <Link to="/roof-maintenance-programs" className="text-red-500 hover:text-red-400 underline">preventive repairs</Link> significantly extend roof life.
        </>
      )
    },
    {
      question: "Do you work with property management companies?",
      answer: "Absolutely. We work directly with property managers, providing detailed proposals for board review, coordinating around resident schedules, and delivering the documentation you need for reserve studies, insurance, and compliance records. We understand the communication and approval processes unique to managed properties."
    },
    {
      question: "How do we get competitive bids for our condo's roof project?",
      answer: "Florida law requires competitive bidding for condo association contracts above certain thresholds. We're happy to provide a detailed proposal alongside other contractors. Our bids include complete scope of work, material specifications, timeline, and warranty information — everything your board needs to make an informed comparison."
    },
    {
      question: "What warranties do you offer on commercial roofing?",
      answer: (
        <>
          Warranties depend on the roofing system and manufacturer. Our manufacturer certifications (Platinum/Master level) often qualify your building for enhanced warranties — sometimes up to 25-30 years with full coverage. We'll explain your <Link to="/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not" className="text-red-500 hover:text-red-400 underline">warranty options</Link> as part of our proposal.
        </>
      )
    }
  ];

  const propertyTypes = [
    { icon: Building2, label: 'Condominium Buildings' },
    { icon: Users, label: 'HOA Communities' },
    { icon: Home, label: 'Townhome Associations' },
    { icon: Building2, label: 'Apartment Complexes' },
    { icon: Store, label: 'Retail Centers' },
    { icon: Briefcase, label: 'Office Buildings' },
    { icon: Factory, label: 'Warehouses & Industrial' },
    { icon: Building2, label: 'Medical Facilities' },
    { icon: Church, label: 'Houses of Worship' },
    { icon: GraduationCap, label: 'Schools & Institutions' }
  ];

  return (
    <><div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

        <div className="relative max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link to="/" className="hover:text-red-500 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Commercial Roofing</span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Commercial Roofing Built for the{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              High Velocity Hurricane Zone
            </span>
          </h1>

          {/* Subhead */}
          <div className="space-y-6 text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed max-w-4xl">
            <p>
              Broward County sits in Florida's most demanding building zone. Your commercial roof needs a contractor who understands HVHZ code requirements, condo association compliance, and how to maximize grant funding for your building. It is crucial to hire <Link to="/about-us" className="text-red-500 hover:text-red-400 underline">licensed roofing contractors</Link> to ensure compliance with local regulations and guarantee high-quality workmanship. As a reputable roofing company with years of experience serving local business clients, our business is dedicated to protect commercial properties from hurricane season threats by providing storm-ready roofing solutions.
            </p>

            <p>
              All Phase Construction USA has earned the trust of government agencies and institutional clients — including completing a roof coating project for the Fort Lauderdale Building Department itself. When the people who inspect roofs choose us for their own building, it speaks to the quality and code compliance we deliver on every commercial project.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 text-lg"
            >
              Schedule Free Roof Assessment
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-lg font-semibold hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 text-lg"
            >
              <Phone className="w-5 h-5" />
              (754) 227-5605
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Award className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">20+</div>
              <div className="text-sm text-zinc-400">Years Commercial Experience</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <BadgeCheck className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Dual Licensed</div>
              <div className="text-sm text-zinc-400">CGC + CCC</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">HVHZ Code</div>
              <div className="text-sm text-zinc-400">Compliant</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <DollarSign className="w-8 h-8 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">My Safe FL</div>
              <div className="text-sm text-zinc-400">Condo Grant Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* HVHZ Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-900/30 rounded-full text-red-500 text-sm font-semibold mb-6">
            High Velocity Hurricane Zone
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Broward County Isn't Like the Rest of Florida. Your Roof Shouldn't Be Either.
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-12">
            <p>
              After Hurricane Andrew devastated South Florida in 1992, the state created the High Velocity Hurricane Zone — the strictest building code in America. Only two counties carry this designation: Miami-Dade and Broward.
            </p>
            <p>
              What does this mean for your commercial roof? Everything.
            </p>
            <p>
              HVHZ requirements mandate specific product approvals, installation methods, and inspection protocols that contractors outside this zone never encounter. Materials must be tested to withstand winds exceeding 175 mph. Roof-to-wall connections, fastening patterns, and even the spacing of nails are all dictated by code — and enforced by inspectors who know what to look for.
            </p>
            <p>
              Many roofing contractors work in HVHZ territory without truly understanding its requirements. They pull permits, hope for the best, and leave you holding the liability. We take a different approach.
            </p>
          </div>

          {/* HVHZ Requirements Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ClipboardCheck className="w-7 h-7 text-red-500" />
              HVHZ Requirements We Navigate Daily
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">Product Approval verification (FPA/NOA)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">Wind uplift calculations per roof zone</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">Mandatory re-nailing of wood decks</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">Specific tile attachment methods (RAS 127)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">Secondary water barrier requirements</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">Engineering certifications for flat roofs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Safe Florida Condo Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-950/10 to-black border-y border-red-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold mb-6 animate-pulse">
            <DollarSign className="w-4 h-4" />
            Grant Funding Available
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            My Safe Florida Condo: Grant Funding for Your Association's Roof
          </h2>

          {/* PART 1: EVERGREEN CONTENT (Our Value Proposition) */}
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-12">
            <p>
              The My Safe Florida Condominium Pilot Program offers eligible condo associations grant funding for hurricane mitigation improvements — including <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline">roof replacement</Link>. We've already helped associations navigate this program and secure funding for critical roof projects.
            </p>

            <div className="pl-6 border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-white mb-4">Why Associations Work With Us:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>We identify which improvements qualify for funding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>We coordinate with the program's inspection requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>We deliver code-compliant work that passes final inspection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>We help you document everything for insurance premium reductions</span>
                </li>
              </ul>
            </div>

            <p>
              Most roofing contractors have never touched this program. We've been through the process and know what it takes to get your association funded. Learn more about the <Link to="/blog/my-safe-florida-condo-program-prepare-for-the-2025-reopening-with-all-phase-construction-usa" className="text-red-500 hover:text-red-400 underline">My Safe Florida Condo Program</Link>.
            </p>
          </div>

          {/* PART 2: PROGRAM DETAILS CARD (Update this when program changes) */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-red-900/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Current Program Details (2025)</h3>
              <span className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full">Updated for 2025</span>
            </div>

            <div className="space-y-6">
              {/* How the Match Works */}
              <div>
                <h4 className="text-lg font-bold text-red-500 mb-3">How the Match Works:</h4>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>State contributes $2 for every $1 your association spends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Maximum grant: $175,000 per association</span>
                  </li>
                </ul>
              </div>

              {/* What's Covered */}
              <div>
                <h4 className="text-lg font-bold text-red-500 mb-3">What's Covered:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Roof covering replacement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Roof-to-wall connection reinforcement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Roof deck attachment improvements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Secondary water resistance</span>
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div>
                <h4 className="text-lg font-bold text-red-500 mb-3">Eligibility:</h4>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Condominium building (3+ stories)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Within 15 miles of coastline (all of Broward County qualifies)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Current on Milestone Inspection and SIRS requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Association applies — not individual unit owners</span>
                  </li>
                </ul>
              </div>

              {/* Approval Requirement */}
              <div>
                <h4 className="text-lg font-bold text-red-500 mb-3">Approval Requirement:</h4>
                <p className="text-zinc-300">75% of resident unit owners must approve</p>
              </div>

              {/* Note */}
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-sm text-zinc-400 italic">
                  Program details subject to change by Florida Legislature. We stay current so you don't have to.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 text-lg"
          >
            Ask About My Safe Florida Condo Grants
          </Link>
        </div>
      </section>

      {/* Condo & HOA Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Commercial Roofing for Condos, HOAs & Multi-Family Properties
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-4xl">
            Roofing a condo or HOA property isn't like roofing a warehouse. You're dealing with board approvals, resident communication, phased budgets, and shared structures. We get it — and we've built our process around it.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Board & Budget Friendly</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Detailed proposals for board presentations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Phased project options to spread costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Clear documentation for reserve studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Competitive bidding support</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Resident-Focused Execution</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Pre-scheduled notices and door tags</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Parking coordination and signage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Minimized disruption to daily life</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Direct communication with property managers</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Common Roof Expertise</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Townhome and connected-unit roofing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Multi-building phased projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Consistent quality across all structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Single point of accountability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 40-Year Recertification Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-900/30 rounded-full text-red-500 text-sm font-semibold mb-6">
            Building Safety
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            40-Year Recertification? Your Roof Is Part of the Inspection.
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-12">
            <p>
              After the Surfside tragedy in 2021, Florida overhauled its building safety requirements. If your building is approaching 30 or 40 years old, you're facing milestone inspections and Structural Integrity Reserve Study (SIRS) requirements — and your roof is a critical component.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What Gets Inspected */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <ClipboardCheck className="w-7 h-7 text-red-500" />
                What Gets Inspected
              </h3>
              <p className="text-zinc-300 mb-4">
                The recertification process examines roof structural members, roof drainage, water tightness, and roof-mounted equipment supports. If deficiencies are found, you have limited time to complete repairs.
              </p>
            </div>

            {/* How We Help */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Wrench className="w-7 h-7 text-red-500" />
                How We Help
              </h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Pre-inspection roof assessments to identify issues early</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Coordination with your structural engineer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Repairs that satisfy inspection requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Documentation for your recertification file</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Alert */}
          <div className="bg-red-950/20 border-2 border-red-900/40 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Timeline Alert:</h3>
                <ul className="space-y-3 text-zinc-300 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span>Buildings 30+ years old within 3 miles of coast: Milestone inspection required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span>Buildings 25+ years old in coastal zones: Already past deadline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span>Post-inspection repairs: Must be completed within 180 days</span>
                  </li>
                </ul>
                <p className="text-zinc-300 mt-6">
                  Don't wait for a violation notice. A proactive <Link to="/roof-repair" className="text-red-500 hover:text-red-400 underline">roof repair</Link> assessment can identify problems before they become compliance failures.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 text-lg"
            >
              Schedule Pre-Recertification Roof Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Dual License Advantage */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Dual Licensing Matters for Commercial Projects
          </h2>

          <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
            Most roofing contractors hold only a CCC (roofing) license. We hold both a General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) license.
          </p>

          <p className="text-lg text-zinc-300 mb-12 leading-relaxed">
            For commercial projects, this dual licensing means:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-red-500">For Condos & HOAs:</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Structural roof deck repairs without subcontracting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Hurricane strap and connection upgrades (My Safe FL Condo eligible)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Complete building envelope coordination</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-red-500">For Commercial Buildings:</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Rooftop equipment mounting and supports</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Parapet and facade integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Code-compliant penetration sealing</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-red-500">For Insurance Savings:</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span><Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-zinc-300 hover:text-red-500 transition-colors">Wind mitigation improvements</Link> we can self-perform</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Single contractor responsibility = cleaner documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Upgrades that qualify for premium reductions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8 text-center">
            <p className="text-xl text-zinc-300">
              One contractor. Complete capability. No finger-pointing between trades.
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Proven Commercial Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Proven Commercial Roofing Projects Across South Florida
          </h2>

          <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
            All Phase Construction USA's commercial portfolio spans government, institutional, retail, and multi-family properties throughout Broward and Palm Beach Counties:
          </p>

          <div className="space-y-8">
            {/* Fort Lauderdale Building Department */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Fort Lauderdale Building Department</h3>
              <p className="text-zinc-300 leading-relaxed">
                We completed a roof coating project for the Fort Lauderdale Building Department — the very agency that inspects roofs in <Link to="/locations/fort-lauderdale" className="text-red-500 hover:text-red-400 underline">Fort Lauderdale</Link>. When the professionals who enforce roofing code compliance select All Phase Construction USA for their own facility, it validates the quality and code adherence we bring to every project.
              </p>
            </div>

            {/* Broward County Nursing Home */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Broward County Nursing Home</h3>
              <p className="text-zinc-300 leading-relaxed">
                All Phase Construction USA completed the full <Link to="/roof-replacement-process" className="text-red-500 hover:text-red-400 underline">roof replacement</Link> on a Broward County nursing home — a sensitive occupied building requiring phased construction to maintain resident safety and comfort. We are currently performing a complete window and door replacement on the same facility, demonstrating the long-term trust institutional clients place in our work.
              </p>
            </div>

            {/* Wiles Business Center */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Wiles Business Center, Coral Springs</h3>
              <p className="text-zinc-300 leading-relaxed">
                A large-scale <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">commercial flat roof</Link> installation for this multi-tenant business facility in <Link to="/locations/coral-springs" className="text-red-500 hover:text-red-400 underline">Coral Springs</Link>. The project required precise drainage engineering, full HVHZ code compliance, and coordination with ongoing business operations to minimize disruption to tenants.
              </p>
            </div>
          </div>

          <p className="text-lg text-zinc-300 mt-8 leading-relaxed">
            These projects demonstrate our ability to handle the complexity, compliance requirements, and stakeholder coordination that commercial roofing demands. Use our <Link to="/calculator" className="text-red-500 hover:text-red-400 underline">Roof Cost Calculator</Link> for a preliminary estimate, or review our <Link to="/pricing-guide" className="text-red-500 hover:text-red-400 underline">Pricing Guide</Link> for detailed cost breakdowns. We also offer flexible <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline">financing options</Link> for commercial projects.
          </p>
        </div>
      </section>

      {/* Commercial Roofing Systems */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Commercial Roofing Systems We Install & Service
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-3xl">
            Every commercial roof is different. We match the right system to your building's needs, budget, and HVHZ requirements.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all duration-300">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <Link to="/flat-roofing" className="hover:text-red-500 transition-colors">
                  TPO & PVC Membrane
                </Link>
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• Single-ply systems for <Link to="/flat-roofing" className="text-zinc-400 hover:text-red-500 transition-colors">flat roofs</Link></li>
                <li>• Heat-welded seams</li>
                <li>• Energy-efficient options</li>
                <li>• 15-30+ year warranties</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all duration-300">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modified Bitumen</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• Multi-layer protection</li>
                <li>• Torch or cold-adhesive</li>
                <li>• Excellent puncture resistance</li>
                <li>• Ideal for high-traffic decks</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all duration-300">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <Link to="/metal-roofing" className="hover:text-red-500 transition-colors">
                  Metal Roofing
                </Link>
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• Standing seam & panels</li>
                <li>• Superior wind resistance</li>
                <li>• 40-70 year lifespan</li>
                <li>• Low maintenance</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all duration-300">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <Link to="/tile-roofing" className="hover:text-red-500 transition-colors">
                  Tile Roofing
                </Link>
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• Concrete, clay & composite</li>
                <li>• HVHZ-compliant attachment</li>
                <li>• Florida-appropriate aesthetics</li>
                <li>• 30-50+ year lifespan</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-900/50 transition-all duration-300">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <Link to="/shingle-roofing" className="hover:text-red-500 transition-colors">
                  Shingle Roofing
                </Link>
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• Architectural and designer shingles</li>
                <li>• HVHZ-rated products</li>
                <li>• Cost-effective option</li>
                <li>• 25-50 year warranties</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Roof Coatings & Restoration</h3>
              <p className="text-zinc-400 text-sm">
                Extend your existing roof's life with silicone, acrylic, or elastomeric coatings. Often more cost-effective than full replacement. Learn more in our guide: <Link to="/blog/commercial-roof-coatings-are-they-worth-the-investment" className="text-red-500 hover:text-red-400 underline">Commercial Roof Coatings: Are They Worth It?</Link>
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                <Link to="/roof-maintenance-programs" className="hover:text-red-500 transition-colors">
                  Roof Maintenance Programs
                </Link>
              </h3>
              <p className="text-zinc-400 text-sm">
                Scheduled inspections, <Link to="/roof-maintenance-programs" className="text-zinc-400 hover:text-red-500 transition-colors">preventive repairs</Link>, and documentation for your reserve studies and insurance requirements. <Link to="/roof-maintenance-programs" className="text-red-500 hover:text-red-400 transition-colors">Learn about our maintenance programs</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types We Serve */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Commercial Properties We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {propertyTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-red-500" />
                  </div>
                  <span className="text-zinc-300 text-sm">{type.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Why Property Managers & Boards Choose All Phase
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">HVHZ Expertise</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We work in the High Velocity Hurricane Zone daily. Code compliance isn't a challenge — it's our standard.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">Dual Licensed (GC + CCC)</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Structural work, roofing, and building envelope coordination under one contractor.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">My Safe FL Condo Experience</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We've helped associations navigate grant applications and deliver qualifying improvements.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">Board-Ready Documentation</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Detailed proposals, progress photos, and completion certificates for your records.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">Manufacturer Certified</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Platinum and Master certifications from Tamko, Owens Corning, CertainTeed, GAF — meaning enhanced warranties for your building.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">20+ Years, 2,500+ Projects</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                From 5-story condos to commercial complexes, we've handled projects of every scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: What Our Commercial Clients Say (Real Google Reviews) */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What Our Commercial Clients Say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Real Google Review 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-zinc-300 mb-4 italic">
                "Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!"
              </p>
              <p className="font-semibold text-white">— Michael R.</p>
              <p className="text-sm text-zinc-400">Property Owner</p>
            </div>

            {/* Real Google Review 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-zinc-300 mb-4 italic">
                "We had emergency storm damage and All Phase responded within hours. They secured our roof with a proper tarp system and came back the following week to complete the permanent repairs. Fair pricing, honest service, and excellent workmanship."
              </p>
              <p className="font-semibold text-white">— Jennifer L.</p>
              <p className="text-sm text-zinc-400">HOA Board Member</p>
            </div>

            {/* Real Google Review 3 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-zinc-300 mb-4 italic">
                "All Phase Construction installed a metal roof on our commercial property. The team was professional, the installation was flawless, and they handled all the permitting with the building department. Very impressed with the entire experience."
              </p>
              <p className="font-semibold text-white">— David S.</p>
              <p className="text-sm text-zinc-400">Commercial Property Owner</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/All+Phase+Construction+USA/@26.3199453,-80.1282712,17z/data=!4m8!3m7!1s0x88d905d0baa21a63:0x4b5c6d0f3c3d5e7f!8m2!3d26.3199453!4d-80.1260825!9m1!1b1!16s%2Fg%2F11rz3vnq9v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
            >
              Read More Reviews on Google
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Commercial Roofing FAQs
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                <div className="text-zinc-400 leading-relaxed">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discuss Your Commercial Roofing Project?
          </h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Whether you're planning a full replacement, exploring My Safe Florida Condo funding, or preparing for a 40-year recertification — we're ready to help. Schedule a <Link to="/contact" className="text-red-500 hover:text-red-400 underline">free assessment</Link> and get the information your board needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 text-lg"
            >
              Schedule Free Assessment
            </Link>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-zinc-900 text-white rounded-lg font-semibold hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 text-lg"
            >
              <Phone className="w-5 h-5" />
              (754) 227-5605
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Free Roof Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Detailed Board Proposals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>HVHZ Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serving Broward & Palm Beach Counties
          </h2>
          <p className="text-lg text-zinc-400 mb-4 max-w-3xl mx-auto">
            Both counties fall within or adjacent to Florida's High Velocity Hurricane Zone. We understand the code requirements specific to your municipality.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-zinc-300 mb-8">
            <Link to="/locations/deerfield-beach" className="hover:text-red-500 transition-colors">Deerfield Beach</Link>
            <span className="text-zinc-600">•</span>
            <Link to="/locations/pompano-beach" className="hover:text-red-500 transition-colors">Pompano Beach</Link>
            <span className="text-zinc-600">•</span>
            <Link to="/locations/fort-lauderdale" className="hover:text-red-500 transition-colors">Fort Lauderdale</Link>
            <span className="text-zinc-600">•</span>
            <Link to="/locations/hollywood" className="hover:text-red-500 transition-colors">Hollywood</Link>
            <span className="text-zinc-600">•</span>
            <Link to="/locations/boca-raton" className="hover:text-red-500 transition-colors">Boca Raton</Link>
            <span className="text-zinc-600">•</span>
            <Link to="/locations/delray-beach" className="hover:text-red-500 transition-colors">Delray Beach</Link>
            <span className="text-zinc-600">•</span>
            <Link to="/locations/coral-springs" className="hover:text-red-500 transition-colors">Coral Springs</Link>
            <span className="text-zinc-600">•</span>
            <Link to="/locations/plantation" className="hover:text-red-500 transition-colors">Plantation</Link>
            <span className="text-zinc-600">•</span>
            <Link to="/locations/sunrise" className="hover:text-red-500 transition-colors">Sunrise</Link>
            <span className="text-zinc-600">•</span>
            <Link to="/locations/boynton-beach" className="hover:text-red-500 transition-colors">Boynton Beach</Link>
            <span className="text-zinc-600">•</span>
            <Link to="/locations/west-palm-beach" className="hover:text-red-500 transition-colors">West Palm Beach</Link>
          </div>
          <Link
            to="/locations/service-areas"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors mb-8"
          >
            View all service areas
            <ChevronRight className="w-5 h-5" />
          </Link>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30"
            >
              Get Your Free Commercial Roof Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial Roofing Resources - EXPANDED */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <BookOpen className="w-10 h-10 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Commercial Roofing Resources
              </h2>
              <p className="text-xl text-zinc-400">
                Guides for property managers, HOA boards, and commercial building owners planning a roofing project. <Link to="/learning-center" className="text-red-500 hover:text-red-400 underline">Explore all roofing guides</Link>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/blog/my-safe-florida-condo-program-prepare-for-the-2025-reopening-with-all-phase-construction-usa" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all group">
              <div className="flex items-start gap-3 mb-3">
                <DollarSign className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg group-hover:text-red-500 transition-colors">
                  My Safe Florida Condo Program Guide
                </h3>
              </div>
              <p className="text-zinc-400 text-sm">
                Complete guide to securing grant funding for your association's roofing project.
              </p>
            </Link>

            <Link to="/blog/roofing-solutions-for-multi-family-and-hoa-communities" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all group">
              <div className="flex items-start gap-3 mb-3">
                <Building2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg group-hover:text-red-500 transition-colors">
                  Roofing Solutions for Multi-Family & HOA Communities
                </h3>
              </div>
              <p className="text-zinc-400 text-sm">
                Specialized roofing strategies for multi-family properties and HOA communities.
              </p>
            </Link>

            <Link to="/blog/how-to-plan-long-term-roofing-budgets-for-your-condo-association" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all group">
              <div className="flex items-start gap-3 mb-3">
                <FileText className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg group-hover:text-red-500 transition-colors">
                  Long-Term Roofing Budgets for Condo Associations
                </h3>
              </div>
              <p className="text-zinc-400 text-sm">
                Financial planning guidance for HOA boards preparing for major roofing projects.
              </p>
            </Link>

            <Link to="/blog/commercial-roof-coatings-are-they-worth-the-investment" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all group">
              <div className="flex items-start gap-3 mb-3">
                <Target className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg group-hover:text-red-500 transition-colors">
                  Commercial Roof Coatings: Are They Worth It?
                </h3>
              </div>
              <p className="text-zinc-400 text-sm">
                Evaluate the ROI of roof coatings for extending life and reducing maintenance costs.
              </p>
            </Link>

            <Link to="/blog/how-to-file-a-roof-insurance-claim-after-storm-damage" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all group">
              <div className="flex items-start gap-3 mb-3">
                <ClipboardCheck className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg group-hover:text-red-500 transition-colors">
                  Filing Insurance Claims After Storm Damage
                </h3>
              </div>
              <p className="text-zinc-400 text-sm">
                Step-by-step guide to the commercial property insurance claim process.
              </p>
            </Link>

            <Link to="/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all group">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg group-hover:text-red-500 transition-colors">
                  Understanding Your Roofing Warranty
                </h3>
              </div>
              <p className="text-zinc-400 text-sm">
                What's covered and what's not in commercial roofing warranties.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
