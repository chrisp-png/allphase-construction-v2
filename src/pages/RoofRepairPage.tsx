import { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import StickyConversionBar from '../components/StickyConversionBar';
import {
  Phone,
  CheckCircle2,
  Award,
  Shield,
  Home,
  ChevronRight,
  Search,
  Wrench,
  FileCheck,
  CloudRain,
  Camera,
  FileText,
  AlertTriangle,
  Clock,
  DollarSign,
  TrendingUp,
  Zap,
  Droplets,
  Wind,
  Layers,
  Settings,
  MapPin,
  BadgeCheck,
} from 'lucide-react';
import { sheetSitemap } from '../data/sheetSitemap';
import { generateFAQSchema, generateBreadcrumbSchema, injectMultipleSchemas } from '../utils/enhancedSchema';
import RoofCostResourcesSection from '../components/RoofCostResourcesSection';

export default function RoofRepairPage() {
  const roofRepairPages = useMemo(() => {
    return sheetSitemap.filter(entry => entry.parent === '/roof-repair');
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Roof Repair Services | Broward & Palm Beach Counties';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional roof repair across South Florida. Leak detection, tile repair, shingle replacement. Licensed, same-day service. Call (754) 227-5605 now.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional roof repair across South Florida. Leak detection, tile repair, shingle replacement. Licensed, same-day service. Call (754) 227-5605 now.';
      document.head.appendChild(meta);
    }

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Roof Repair & Restoration Services",
      "serviceType": "Roof Repair",
      "description": "Roof repair and restoration services in Broward and Palm Beach Counties. Comprehensive inspections, full-system restoration, and certification letters for insurance compliance.",
      "url": "https://allphaseconstructionfl.com/roof-repair",
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
      { question: "How much does roof repair cost?", answer: "It depends on the scope. A minor repair might be a few hundred dollars. A comprehensive restoration of an entire slope could be several thousand. We provide detailed quotes after our free inspection — no surprises." },
      { question: "What's the difference between roof repair and roof restoration?", answer: "Repair fixes one specific problem — a leak, a missing shingle, a damaged vent. Restoration addresses an entire section or system comprehensively — replacing all vulnerable components so you're not calling back in six months with another issue." },
      { question: "What is the 5-year certification letter?", answer: "Florida law states that if a licensed roofing contractor certifies your roof has at least 5 years of useful life remaining, your insurance company cannot drop your coverage based on the roof's condition. We provide this letter when a roof qualifies after restoration." },
      { question: "Can a roof repair help me keep my insurance?", answer: "A simple spot repair usually won't qualify for the 5-year certification. But a comprehensive restoration that addresses all vulnerable areas can bring your roof up to the standard needed for certification — protecting your coverage." },
      { question: "How do I know if my roof needs repair or replacement?", answer: "Age, extent of damage, and overall condition all factor in. If damage is localized and the roof is relatively young, repair or restoration makes sense. If there's widespread failure or the roof is 20+ years old, replacement is usually the smarter investment. Our free inspection gives you a clear answer. Learn about our 10-step roof replacement process." },
      { question: "Will you give me an honest opinion if I need a new roof instead of repair?", answer: "Absolutely. We don't make money selling you repairs that won't last. If replacement makes more sense, we'll tell you — and explain why." },
      { question: "How long does a roof repair take?", answer: "Most repairs are completed in one day. Larger restoration projects may take 2-3 days depending on scope. We'll give you a clear timeline before we start." }
    ]);

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
      { name: 'Roof Repair', url: 'https://allphaseconstructionfl.com/roof-repair' }
    ]);

    // Inject all schemas
    const cleanup = injectMultipleSchemas([serviceSchema, faqSchema, breadcrumbSchema]);

    return cleanup;
  }, []);

  const faqs = [
    {
      q: "How much does roof repair cost?",
      a: "It depends on the scope. A minor repair might be a few hundred dollars. A comprehensive restoration of an entire slope could be several thousand. We provide detailed quotes after our free inspection — no surprises."
    },
    {
      q: "What's the difference between roof repair and roof restoration?",
      a: "Repair fixes one specific problem — a leak, a missing shingle, a damaged vent. Restoration addresses an entire section or system comprehensively — replacing all vulnerable components so you're not calling back in six months with another issue."
    },
    {
      q: "What is the 5-year certification letter?",
      a: "Florida law states that if a licensed roofing contractor certifies your roof has at least 5 years of useful life remaining, your insurance company cannot drop your coverage based on the roof's condition. We provide this letter when a roof qualifies after restoration."
    },
    {
      q: "Can a roof repair help me keep my insurance?",
      a: "A simple spot repair usually won't qualify for the 5-year certification. But a comprehensive restoration that addresses all vulnerable areas can bring your roof up to the standard needed for certification — protecting your coverage."
    },
    {
      q: "How do I know if my roof needs repair or replacement?",
      a: (
        <>
          Age, extent of damage, and overall condition all factor in. If damage is localized and the roof is relatively young, repair or restoration makes sense. If there's widespread failure or the roof is 20+ years old, replacement is usually the smarter investment. Our free inspection gives you a clear answer.{' '}
          <Link to="/roof-replacement-process/" className="text-red-600 hover:text-red-500 underline transition-colors font-semibold">
            Learn about our 10-step roof replacement process
          </Link>
          .
        </>
      )
    },
    {
      q: "Do you help with insurance claims for storm damage?",
      a: "We provide complete documentation for every storm damage repair — pre-repair photos showing the damage, progress photos during the work, and final photos after completion. This gives you a thorough record to submit to your insurance company. The documentation is yours to use however you need."
    },
    {
      q: "Will you give me an honest opinion if I need a new roof instead of repair?",
      a: "Absolutely. We don't make money selling you repairs that won't last. If replacement makes more sense, we'll tell you — and explain why."
    },
    {
      q: "How long does a roof repair take?",
      a: "Most repairs are completed in one day. Larger restoration projects may take 2-3 days depending on scope. We'll give you a clear timeline before we start."
    },
    {
      q: "Do I need a permit for roof repair in Florida?",
      a: (
        <div className="space-y-4">
          <p>It depends on where you live and the scope of work. Florida Building Code Section 105.2.2 allows "ordinary minor repairs" without a permit — but it doesn't define a specific size or dollar amount. That's left to local building officials.</p>
          <p>In Broward and Miami-Dade Counties, the rules are stricter. These are designated High Velocity Hurricane Zones (HVHZ), and <span className="text-white font-medium">Florida Building Code Section R4402.1.3</span> requires permits for "all work in connection with the application, repair, or maintenance of any roofing component." That means even small repairs technically require a permit.</p>
          <p>We pull permits on every job — not just because it's the law, but because it protects you. Unpermitted work can void your insurance, create problems when you sell, and leave you with no recourse if something goes wrong.</p>
        </div>
      )
    },
    {
      q: "What is the 5-year roof certification letter in Florida?",
      a: (
        <div className="space-y-4">
          <p>Under <span className="text-white font-medium">Florida Statute 627.7011(5)</span>, insurance companies cannot drop your coverage solely because of your roof's age — if a licensed contractor certifies the roof has at least 5 years of remaining useful life.</p>
          <p className="font-medium text-white">Here's how it works:</p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>If your roof is under 15 years old, insurers cannot refuse coverage based on age alone</li>
            <li>If your roof is 15 years or older, you have the right to an inspection before they can require replacement</li>
            <li>If that inspection shows 5+ years of useful life remaining, they cannot non-renew your policy based on roof age</li>
          </ul>
          <p>As a licensed roofing and general contractor, we're authorized under the statute to perform this inspection and provide the certification letter. A comprehensive roof restoration that addresses vulnerable areas can bring your roof up to the standard needed for certification — protecting your coverage and buying you time before a full replacement.</p>
          <a
            href="https://www.flsenate.gov/Laws/Statutes/2022/0627.7011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 underline transition-colors mt-2"
          >
            Read Florida Statute 627.7011(5)
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      )
    },
    {
      q: "What is Florida's 25% roof rule?",
      a: (
        <div className="space-y-4">
          <p>Florida Building Code historically required that if you repair, replace, or recover more than 25% of a roof section in a 12-month period, the entire roof must be brought up to current code.</p>
          <p>However, <span className="text-white font-medium">Florida Statute 553.844(5)</span> changed this in 2022. Now, if your roof was permitted after March 1, 2009 (under the 2007 Florida Building Code or later), only the repaired portion needs to meet current code — not the entire roof.</p>
          <p>This is significant for storm damage repairs. If your roof was properly permitted in the last 15 years and a hurricane damages 30% of it, you can repair just that section without being forced into a full replacement.</p>
          <p>We verify your roof's permit history and advise you on exactly what's required under current code.</p>
        </div>
      )
    },
    {
      q: "Who can perform roof inspections for insurance in Florida?",
      a: (
        <div className="space-y-4">
          <p><span className="text-white font-medium">Florida Statute 627.7011(5)(a)</span> defines "authorized inspectors" who can certify a roof's remaining useful life for insurance purposes:</p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>Licensed home inspectors</li>
            <li>Certified building code inspectors</li>
            <li>Licensed general, building, or residential contractors</li>
            <li>Professional engineers</li>
            <li>Professional architects</li>
          </ul>
          <p>As holders of both a General Contractor license (CGC-1526236) and a Roofing Contractor license (CCC-1331464), we're fully authorized to inspect your roof and provide the certification documentation your insurance company requires.</p>
        </div>
      )
    },
    {
      q: "What's the difference between the $2,500 handyman exemption and permit requirements?",
      a: (
        <div className="space-y-4">
          <p>These are two separate things that often get confused.</p>
          <p><strong className="text-white">Contractor Licensing (Florida Statute 489.103(9)):</strong> Work under $2,500 can be performed without a contractor's license — but this doesn't apply to anyone who advertises as a contractor or if the work is part of a larger project.</p>
          <p><strong className="text-white">Building Permits (Florida Building Code):</strong> There's no statewide dollar threshold that exempts roof work from permits. In the High Velocity Hurricane Zone (Broward and Miami-Dade), permits are required for virtually all roofing work regardless of cost.</p>
          <p className="font-medium text-white">Bottom line: Just because someone can legally do a small job without a license doesn't mean it's exempt from permits. And in South Florida, roof repairs almost always require permits. If a contractor tells you otherwise, that's a red flag.</p>
        </div>
      )
    },
    {
      q: "Why does unpermitted roof work matter?",
      a: (
        <div className="space-y-4">
          <p>Unpermitted roof work can cause serious problems:</p>
          <ul className="space-y-2 pl-5 list-disc">
            <li><strong className="text-white">Insurance issues:</strong> Your insurer may deny a claim if they discover unpermitted work on your roof</li>
            <li><strong className="text-white">Sale complications:</strong> Unpermitted work shows up in title searches and can derail real estate transactions</li>
            <li><strong className="text-white">No inspection:</strong> Without a permit, there's no third-party verification that the work meets code</li>
            <li><strong className="text-white">No recourse:</strong> If something fails, you may have limited legal recourse against the contractor</li>
            <li><strong className="text-white">Code violations:</strong> You could be required to tear off and redo the work with proper permits</li>
          </ul>
          <p>In Florida's High Velocity Hurricane Zone, the permit process exists to ensure your roof can withstand hurricane-force winds. Skipping it isn't just illegal — it's dangerous.</p>
        </div>
      )
    }
  ];

  const services = [
    {
      icon: <Search className="w-8 h-8 text-red-600" />,
      title: "Leak Detection & Repair",
      description: "We find the source, not just the symptom"
    },
    {
      icon: <Layers className="w-8 h-8 text-red-600" />,
      title: "Shingle Restoration",
      description: "Full slope restoration, not just spot patches"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Flashing Repair & Replacement",
      description: "Roof-to-wall, valleys, chimneys, skylights"
    },
    {
      icon: <Settings className="w-8 h-8 text-red-600" />,
      title: "Vent & Pipe Boot Replacement",
      description: "All penetrations, systematically addressed"
    },
    {
      icon: <Wrench className="w-8 h-8 text-red-600" />,
      title: "Tile Repair & Re-setting",
      description: "Cracked, slipped, or wind-damaged tiles"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-red-600" />,
      title: "Flat Roof Repairs",
      description: "Seam failures, ponding issues, membrane damage"
    },
    {
      icon: <Wind className="w-8 h-8 text-red-600" />,
      title: "Storm Damage Repair",
      description: "Hurricane, wind, and hail damage"
    },
    {
      icon: <Droplets className="w-8 h-8 text-red-600" />,
      title: "Gutter & Drainage Repair",
      description: "Proper water management protects the whole system"
    }
  ];

  return (
    <>
    <StickyConversionBar />
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-zinc-500">Roofing Services</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Roof Repair</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              We Don't Just Repair Your Roof — <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">We Restore It</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
              Replacing a few shingles doesn't solve the problem. We restore your entire roof system to its original intent — extending its life, protecting your home, and keeping your insurance coverage intact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center text-lg shadow-lg shadow-red-600/20"
              >
                Schedule Free Roof Inspection
              </Link>
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-center text-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (754) 227-5605
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* When Roof Repair Is the Appropriate Solution */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            When Roof Repair Is the Appropriate Solution
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Roof repair is a corrective action performed after a specific defect has been identified and confirmed. In most cases, a professional roof inspection is required first to determine whether repair is appropriate, sufficient, and technically justified.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>A roof inspection has identified isolated, localized defects</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>The roofing system retains measurable remaining service life</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Damage is limited to specific materials, penetrations, or transitions</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Structural decking and attachment systems remain functionally sound</span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <span className="text-red-600 mt-1">•</span>
              <span>Repair can restore performance without compromising code compliance</span>
            </li>
          </ul>

          <p className="text-lg text-zinc-300 leading-relaxed">
            If the condition or cause of a roofing issue is uncertain, a diagnostic evaluation should be performed first.{' '}
            <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500 underline transition-colors">
              Learn more about our Roof Inspection Services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-black border-y border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-red-600 flex-shrink-0" />
              <span className="text-sm md:text-base text-zinc-300 font-medium">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <BadgeCheck className="w-8 h-8 text-red-600 flex-shrink-0" />
              <span className="text-sm md:text-base text-zinc-300 font-medium">Dual Licensed (CGC & CCC)</span>
            </div>
            <div className="flex items-center gap-3">
              <Search className="w-8 h-8 text-red-600 flex-shrink-0" />
              <span className="text-sm md:text-base text-zinc-300 font-medium">Comprehensive Inspections</span>
            </div>
            <div className="flex items-center gap-3">
              <FileCheck className="w-8 h-8 text-red-600 flex-shrink-0" />
              <span className="text-sm md:text-base text-zinc-300 font-medium">5-Year Certification Letters</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-6">
              <span className="text-red-600 font-semibold">The Real Problem</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Spot Repairs Fail — And What Actually Works
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                You call a roofer about a leak. They show up, replace a few shingles, collect a check, and leave.
              </p>
              <p>
                Six months later? Another leak. Different spot. Same story.
              </p>
              <p>
                Here's what they didn't tell you: <strong className="text-white">If one area of your roof is failing, the rest isn't far behind.</strong> The shingles around that leak are the same age, took the same sun damage, and weathered the same storms. Patching one spot while ignoring the rest is just delaying the inevitable.
              </p>
              <p className="text-xl font-semibold text-white pt-4">
                The smarter approach: Restore the entire affected slope. Replace all the vulnerable components — not just the one that failed first. Address the system, not the symptom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-6">
              <span className="text-red-600 font-semibold">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Roof Restoration — The Smarter Alternative to Spot Repairs
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              When you call us for a roof repair, we don't just fix the one thing you called about. We inspect every inch of your roof and give you the full picture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Comprehensive Inspection</h3>
              <p className="text-zinc-300 leading-relaxed">
                While we're on your roof, we inspect everything — every slope, every flashing, every vent, every penetration. You'll know exactly where your roof stands, not just where the leak is.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Systematic Restoration</h3>
              <p className="text-zinc-300 leading-relaxed">
                If one pipe boot is cracked, chances are the others are close behind. If one vent is corroded, we recommend replacing them all. We restore your roof as a system, so you're not calling us back in six months.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Honest Assessment</h3>
              <p className="text-zinc-300 leading-relaxed">
                Sometimes a repair makes sense. Sometimes it doesn't. We'll tell you straight — if your roof needs replacement, we won't waste your money on repairs that won't last. And if restoration can buy you 5+ more years, we'll show you how.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <blockquote className="border-l-4 border-red-600 pl-6 py-4">
              <p className="text-xl text-zinc-300 italic mb-4">
                "Our inspections focus on evidence, not guesses. We look for moisture intrusion paths, hidden damage, and installation issues, then back it up with photo documentation so homeowners and insurers can understand the condition without ambiguity."
              </p>
              <footer className="text-zinc-400">
                — Graham D., Roof Inspector, All Phase Construction USA
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 5-Year Letter Section - PROMINENT */}
      <section className="py-20 bg-gradient-to-b from-red-950/20 via-red-950/10 to-zinc-950 border-y border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-red-600 rounded-full mb-6">
              <span className="text-white font-semibold">Insurance Protection</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The 5-Year Roof Certification — Protect Your Insurance Coverage Under Florida Law
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Florida's insurance crisis is forcing carriers to drop homeowners with older roofs — sometimes even roofs with years of life left. But here's what most homeowners don't know:
              </p>
              <p className="text-2xl font-bold text-white py-4">
                Florida Statute 627.7011(5) protects you.
              </p>

              <div className="bg-zinc-900 border-2 border-red-600/30 rounded-xl p-8 my-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Under this law:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span>Insurers <strong className="text-white">cannot refuse coverage</strong> solely because your roof is less than 15 years old</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span>For roofs <strong className="text-white">15 years or older</strong>, you have the right to a professional inspection before they can require replacement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span>If a licensed contractor certifies your roof has <strong className="text-white">at least 5 years of remaining useful life</strong>, your insurer <strong className="text-white">cannot drop your coverage based on roof age</strong></span>
                  </li>
                </ul>
              </div>

              <p className="text-xl font-bold text-white pt-4">
                We're authorized to write this certification.
              </p>

              <p>
                As a licensed roofing and general contractor (CCC-1331464 / CGC-1526236), we're legally qualified under Florida Statute 627.7011(5)(a) to inspect your roof and provide the certification your insurance company must accept.
              </p>

              <p>
                When we perform a comprehensive roof restoration, we address every vulnerable area that could shorten your roof's lifespan. If our work brings your roof up to the standard where we can certify 5 years of remaining useful life, we'll provide the documentation.
              </p>

              <p className="text-white font-semibold">
                Simple spot repairs usually won't qualify. But a full restoration that addresses the complete system? That's how you protect your coverage — and buy yourself time before a full replacement.
              </p>

              <p>
                For commercial buildings and properties requiring ongoing monitoring to maximize roof life and reduce emergency repair costs, consider enrolling in a <Link to="/roof-maintenance-programs/" className="text-red-600 hover:text-red-500 underline transition-colors">preventative roof maintenance program</Link> that includes scheduled inspections and documentation to support insurance requirements.
              </p>

              <div className="bg-zinc-950 border border-zinc-700 rounded-lg p-6 my-8">
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-2">Read the full statute:</p>
                    <a
                      href="https://www.flsenate.gov/Laws/Statutes/2022/0627.7011"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-500 underline transition-colors"
                    >
                      Florida Statute 627.7011(5) - Insurance Coverage for Roofs
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/contact/"
                  className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20"
                >
                  Find Out If Your Roof Qualifies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Repair/Restore Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Roof Repairs & Restoration Services
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              From minor fixes to comprehensive restoration, we handle it all — and always with an eye toward long-term performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storm Damage & Insurance Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-red-600 rounded-full mb-6">
              <span className="text-white font-semibold">Storm Damage</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Storm Damage? We Document Everything — So You're Covered
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-10">
              <p>
                After a hurricane or major storm, documentation is everything. When the adjuster arrives or your insurance company asks questions, you need proof — not just your word.
              </p>
              <p>
                We document every job thoroughly, from start to finish. You'll have a complete record of your roof's condition before repairs, during the work, and after completion.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">What we provide:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Camera className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-zinc-300">Pre-repair damage documentation with photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-zinc-300">Detailed scope of work and pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Camera className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-zinc-300">Progress photos throughout the repair</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-zinc-300">Post-repair completion photos and documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileCheck className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-zinc-300">All paperwork organized and ready for your records</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              This documentation is yours to keep and share with your insurance company however you see fit. When you have clear evidence of the damage and the quality of repairs, you're in a stronger position.
            </p>

            <div className="pt-4">
              <Link
                to="/contact/"
                className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20"
              >
                Report Storm Damage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs Replacement Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Repair, Restore, or Replace? Here's How to Decide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-green-600/10 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Repair Makes Sense When:</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Damage is isolated to one small area</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Roof is under 10 years old</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>No widespread wear patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Budget is extremely limited (short-term fix)</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-950 border-2 border-red-600 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 rounded-full">
                <span className="text-white text-sm font-bold">RECOMMENDED</span>
              </div>
              <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Restoration Makes Sense When:</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Multiple areas showing wear</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Roof is 10-20 years old</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>You need to extend life 5+ years</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Insurance requires certification letter</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Full replacement isn't in budget yet</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <div className="w-14 h-14 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Replacement Makes Sense When:</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Widespread failure across multiple slopes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Roof is 20+ years old</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Deck damage or structural issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Insurance claim covers full replacement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Long-term investment makes more sense</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-zinc-950 border border-zinc-800 rounded-xl">
            <p className="text-lg text-zinc-300 text-center">
              <strong className="text-white">Not sure which option fits your situation?</strong> That's exactly what our free inspection is for. We'll assess your roof and give you honest recommendations — no pressure, no games.
            </p>
          </div>
        </div>
      </section>

      {/* Dual License Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Why Our Dual License Matters for Roof Repairs
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-10">
              <p>
                Roof repairs often uncover problems that go beyond the roof surface — rotted decking, structural damage, stucco issues at roof-to-wall transitions.
              </p>
              <p>
                Most roofing contractors hit these problems and have to stop. They're not licensed to fix them.
              </p>
              <p className="text-xl font-semibold text-white">
                Because we hold both a General Contractor license (CGC-1526236) and a Roofing Contractor license (CCC-1331464), we handle it all. One contractor. One permit. One scope of work. No delays waiting for someone else to fix what we found.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-8 h-8 text-zinc-400" />
                  <div>
                    <p className="text-sm text-zinc-400 font-medium">General Contractor</p>
                    <p className="text-xl font-bold text-white">CGC-1526236</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border-2 border-red-600 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BadgeCheck className="w-8 h-8 text-red-600" />
                  <div>
                    <p className="text-sm text-red-600 font-medium">Roofing Contractor</p>
                    <p className="text-xl font-bold text-white">CCC-1331464</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-8 h-8 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Roof Repair & Restoration Across South Florida
            </h2>
          </div>

          <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We provide professional roof repair services throughout Palm Beach and Broward Counties, including specialized local expertise in major cities.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {roofRepairPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 text-sm border border-zinc-700"
              >
                {page.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact/"
            className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20"
          >
            Schedule Your Free Inspection
          </Link>
        </div>
      </section>

      {/* Roof Cost Resources Section */}
      <RoofCostResourcesSection />

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Roof Repair Questions — Answered
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-white">{faq.q}</h3>
                <div className="text-zinc-300 leading-relaxed">
                  {typeof faq.a === 'string' ? <p>{faq.a}</p> : faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Restore Your Roof — Not Just Patch It?
          </h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Schedule your free comprehensive roof inspection. We'll assess every inch of your roof, identify all vulnerable areas, and give you honest options — from repair to restoration to replacement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact/"
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
              <span>Free Comprehensive Inspection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>5-Year Certification Letters Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
