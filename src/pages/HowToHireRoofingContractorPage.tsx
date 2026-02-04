import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Shield,
  FileCheck,
  Award,
  AlertTriangle,
  CheckCircle2,
  Plus,
  Minus,
  Phone,
  Wind
} from 'lucide-react';
import Header from '../components/Header';
import Contact from '../components/Contact';

export default function HowToHireRoofingContractorPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = 'How to Hire a Roofer Deerfield Beach FL | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A complete guide to hiring a roofing contractor in Deerfield Beach and South Florida. Learn about HVHZ codes, wind mitigation, insurance discounts, documentation, and why dual licensing matters.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'A complete guide to hiring a roofing contractor in Deerfield Beach and South Florida. Learn about HVHZ codes, wind mitigation, insurance discounts, documentation, and why dual licensing matters.';
      document.head.appendChild(meta);
    }

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'index, follow';
      document.head.appendChild(meta);
    }// Add Article schema for better indexing
    const articleSchema = document.createElement('script');
    articleSchema.type = 'application/ld+json';
    articleSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Hire a Roofing Contractor in Deerfield Beach, FL | Complete HVHZ Guide",
      "description": "A comprehensive guide to hiring a roofing contractor in South Florida's High Velocity Hurricane Zone. Learn about dual licensing, wind mitigation, HVHZ codes, and what to verify before signing a contract.",
      "image": "https://allphaseconstructionfl.com/deerfield-beach-fl-roofing-services.png",
      "author": {
        "@type": "Organization",
        "name": "All Phase Construction USA",
        "url": "https://allphaseconstructionfl.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "All Phase Construction USA",
        "logo": {
          "@type": "ImageObject",
          "url": "https://allphaseconstructionfl.com/allphase-logo.svg"
        }
      },
      "datePublished": "2025-02-02",
      "dateModified": "2025-02-02",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://allphaseconstructionfl.com/locations/deerfield-beach/how-to-hire-a-roofing-contractor"
      }
    });
    document.head.appendChild(articleSchema);

    // Add BreadcrumbList schema
    const breadcrumbSchema = document.createElement('script');
    breadcrumbSchema.type = 'application/ld+json';
    breadcrumbSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allphaseconstructionfl.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://allphaseconstructionfl.com/locations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Deerfield Beach",
          "item": "https://allphaseconstructionfl.com/locations/deerfield-beach"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "How to Hire a Roofing Contractor",
          "item": "https://allphaseconstructionfl.com/locations/deerfield-beach/how-to-hire-a-roofing-contractor"
        }
      ]
    });
    document.head.appendChild(breadcrumbSchema);

    return () => {
      if (articleSchema.parentNode) {
        document.head.removeChild(articleSchema);
      }
      if (breadcrumbSchema.parentNode) {
        document.head.removeChild(breadcrumbSchema);
      }
    };
  }, []);

  const faqItems = [
    {
      question: "Do I need a dual-licensed roofing contractor in South Florida?",
      answer: "Yes. When roofing work requires structural modifications like adding straps, third nails, or tie-ins, a general contractor license is required. A dual-licensed contractor can handle the entire scope under one permit, reducing delays, inspection issues, and liability exposure."
    },
    {
      question: "What is a wind mitigation report and who should complete it?",
      answer: "A wind mitigation report documents hurricane-resistant features of your roof and structure. It's used by insurance companies to determine eligibility for premium discounts. The contractor who installs your roof should complete this report because they have firsthand knowledge of the installed systems and can accurately document compliance."
    },
    {
      question: "Can roof upgrades reduce my insurance premiums?",
      answer: "Yes. Upgrades like secondary water barriers, improved roof-to-wall connections, impact-resistant materials, and proper fastening can qualify for significant insurance discounts. However, you must have proper documentation—a wind mitigation report—to receive these savings."
    },
    {
      question: "How do I know if my roofer follows HVHZ code?",
      answer: "Verify their contractor licenses, ask about their permit history, request references from recent projects in Broward or Palm Beach County, and confirm they pull permits for all work. HVHZ compliance requires third-party building inspections, so unpermitted work is a red flag."
    },
    {
      question: "How is my property protected during roof replacement?",
      answer: "Professional contractors use Catch-All systems to protect landscaping, Equipters to contain debris during tile removal, and carefully stage materials to avoid damaging driveways, pavers, and surrounding property. Ask your contractor specifically what protection methods they use."
    },
    {
      question: "When is the best time to replace a roof in Florida?",
      answer: "Winter months (November through April) are ideal. Florida's rainy season runs May through October, creating scheduling challenges and moisture concerns. Winter provides more predictable weather, easier scheduling, and more reliable inspection timelines."
    },
    {
      question: "What should I ask about wind ratings when buying a shingle roof in South Florida?",
      answer: "Ask for the shingle manufacturer's wind warranty rating (in MPH) and confirm the installer is certified (if required) to qualify for that rating. Also ask what fastening pattern and starter/ridge system will be used, because high-wind performance depends on installation details—not just the shingle brand."
    },
    {
      question: "Do shingles really have different wind warranties?",
      answer: "Yes. Wind warranties vary by manufacturer and by the installation method used. Many shingle systems are commonly marketed up to 130 MPH, while certain certified systems can qualify for higher ratings when installed to the manufacturer's requirements."
    },
    {
      question: "Why does what's under the tile matter more than the tile itself?",
      answer: "Tile is the outer layer you see, but the underlayment and the tile attachment method are what protect the building from water intrusion and wind uplift. If the underlayment or attachment is done incorrectly, the roof can fail even if the tile looks perfect."
    },
    {
      question: "What is tile roof adhesive (foam) and why does patty size matter?",
      answer: "Many modern tile roofs use adhesive foam to attach tile. The type of foam, the approved patty size, and consistent application are critical for wind resistance. Cutting corners—like installing small dabs when larger patties were permitted—can significantly reduce performance."
    },
    {
      question: "Will the city inspector catch shortcuts with tile adhesive?",
      answer: "Not always. Inspectors are typically on-site briefly and cannot monitor the consistency of adhesive application across the entire roof. That's why documentation and on-site verification during the job matter."
    },
    {
      question: "What's the difference between snap-lock and mechanically seamed metal roofs?",
      answer: "Snap-lock panels lock together by design, while mechanically seamed systems are formed and crimped together using specialized seaming tools. Mechanically seamed systems are often preferred for higher-performance applications, but they require precise installation and manufacturer-specific details."
    },
    {
      question: "What metal-roof installation details should I verify before work starts?",
      answer: "Confirm the exact system type, required sealants/caulking (if specified by the manufacturer), the clip type, and the clip spacing. These details affect wind uplift performance and can impact warranty eligibility."
    },
    {
      question: "Why is photo documentation important during a roof replacement?",
      answer: "Photo documentation proves what was installed and how it was installed. It helps confirm permit compliance, supports future inspections, and can be valuable for insurance and warranty questions—especially when critical components are no longer visible after completion."
    },
    {
      question: "How do I know the roof is being built correctly when the inspector isn't there?",
      answer: "The safest approach is a process that includes on-site project management, verified installation steps, and consistent photo documentation throughout the project—so the work is correct every day, not only when an inspection is scheduled."
    },
    {
      question: "Does a roofing contractor need to follow the permit details throughout the project?",
      answer: "Yes. The roof should be installed to the permitted system and the approved details for the entire job. Building \"just for inspection day\" can lead to inconsistencies and failures that don't show up until a storm event."
    },
    {
      question: "How should wood replacement pricing be handled in a Florida roofing contract?",
      answer: "In Florida, your contract should spell out wood replacement pricing before work begins—not as a surprise after tear-off. Ask your roofer to list the exact unit price they will charge if decking, fascia, or other structural wood needs replacement (for example, a per-sheet or per-linear-foot rate), and require that any additional wood work be documented and approved in writing as a change order. Text may be most efficient as the roofer needs to close the roof as soon as possible.\n\nJust as important, the contractor should provide clear, detailed photo documentation with no ambiguity. Photos should plainly show the exact boards or sheets that were deteriorated, followed by images confirming those same areas after replacement. This level of documentation protects the homeowner, supports insurance compliance, and prevents disputes over what work was actually necessary and performed.\n\nWhat to look for:\n• A clearly stated unit price (per sheet / per linear foot)\n• Written change order approval before extra work proceeds\n• High-resolution, close-up photos clearly showing damaged wood before removal\n• Follow-up photos showing the same areas after replacement\n• A not-to-exceed cap or pre-authorized limit when possible\n\nClear before-and-after photo documentation of any wood replacement also supports permit close-out, providing inspectors and insurers verifiable proof that structural repairs were completed correctly and in compliance with approved plans."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
              <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/service-areas" className="hover:text-red-600 transition-colors">Locations</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/locations/deerfield-beach" className="hover:text-red-600 transition-colors">Deerfield Beach</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">How to Hire a Roofing Contractor in South Florida</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              How to Hire a Roofing Contractor in <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Deerfield Beach, Florida</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
              What Homeowners in Broward & Palm Beach County Need to Know About HVHZ, Wind Mitigation, and Insurance Savings
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center text-lg shadow-lg shadow-red-600/20"
              >
                Call (754) 227-5605
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-center text-lg"
              >
                Schedule Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-zinc-300 leading-relaxed mb-6">
              Roofing in Southeast Florida is fundamentally different from roofing in other parts of the country. This region operates under some of the most stringent building codes in the United States—specifically the High Velocity Hurricane Zone (HVHZ) provisions of the Florida Building Code—and homeowners' insurance carriers require documentation that most roofers elsewhere never think about.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              This guide applies to Deerfield Beach and the surrounding service areas throughout Broward and Palm Beach Counties. Whether you live in Boca Raton, Coral Springs, Pompano Beach, Delray Beach, or any other city in this region, the principles outlined here will help you make an informed decision when hiring a roofing contractor.
            </p>
          </div>
        </div>
      </section>

      {/* Authority Quote */}
      <section className="py-12 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-zinc-900 to-zinc-900/50 border-l-4 border-red-600 rounded-r-lg p-8 md:p-10">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 to-red-600/20"></div>
            <blockquote className="relative">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6">
                "In South Florida, hiring a roofer who is also a licensed general contractor isn't a luxury — it's a safety, permitting, and insurance decision. Wind mitigation, roof-to-wall connections, and documentation must be handled correctly the first time, by one accountable contractor."
              </p>
              <footer className="flex items-center gap-3 border-t border-zinc-700 pt-6">
                <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-lg">CP</span>
                </div>
                <div>
                  <cite className="not-italic text-zinc-300 font-semibold block">
                    Chris Porosky
                  </cite>
                  <span className="text-sm text-zinc-400">
                    Certified Roofing & General Contractor<br />
                    All Phase Construction USA
                  </span>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Why South Florida Is Different */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <Shield className="w-12 h-12 text-red-600 flex-shrink-0" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Hiring a Roofer in South Florida Is Different
            </h2>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              The High Velocity Hurricane Zone designation triggers additional requirements that go far beyond standard roofing practices:
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-8">
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Uplift Resistance:</strong> Every component must be rated and installed to resist wind uplift. Fastening patterns, adhesives, and attachment methods are all subject to code requirements and third-party inspection.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Secondary Water Barriers:</strong> HVHZ requires continuous secondary water barrier systems beneath the primary roof covering to prevent water intrusion during severe weather events.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Roof-to-Wall Connections:</strong> The connection between your roof structure and your walls must meet specific load ratings. This often requires strapping, additional fasteners, and structural reinforcement.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Inspection Rigor:</strong> Building inspectors in Broward and Palm Beach Counties are trained to verify HVHZ compliance. Installations that pass inspection in other states would fail here.
                  </div>
                </li>
              </ul>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <img
                    src="/third-nail-hurricane-roof-strapping-detail.jpg"
                    alt="Three-nail hurricane roof strapping at roof-to-wall connection meeting HVHZ code requirements in South Florida"
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-lg border border-zinc-700"
                  />
                  <p className="text-sm text-zinc-400 mt-3 text-center">
                    Three-nail hurricane strapping detail at roof-to-wall connection
                  </p>
                </div>
                <div>
                  <img
                    src="/roof-to-wall-hurricane-straps-installed.jpg"
                    alt="Hurricane straps and roof-to-wall connections installed for HVHZ wind resistance in South Florida"
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-lg border border-zinc-700"
                  />
                  <p className="text-sm text-zinc-400 mt-3 text-center">
                    Properly installed hurricane straps providing structural wind resistance
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              Not all roofers are qualified to work in this environment. A contractor licensed in another state—or even in North Florida—may not understand HVHZ requirements. Always verify that your contractor is licensed specifically for work in Southeast Florida and has a demonstrated track record of passing inspections in Broward or Palm Beach County.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Licensing */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <Award className="w-12 h-12 text-red-600 flex-shrink-0" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Dual Licensing Matters in Southeast Florida
            </h2>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Many homeowners don't realize there's a critical difference between a roofing-only contractor and a dual-licensed roofing and general contractor. Here's why it matters:
            </p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">What Dual Licensing Covers</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Roof Strapping:</strong> Installing or reinforcing hurricane straps connecting the roof structure to the wall framing requires general contractor authority.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Third Nail Requirements:</strong> Adding required fasteners at structural connections goes beyond surface roofing work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Structural Tie-Ins:</strong> Connecting roof components to the load-bearing structure of the building is general contracting work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Decking Replacement:</strong> When roof decking must be replaced due to rot or structural damage, this requires general contracting capabilities.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Wood Replacement Documentation Requirements</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                When wood decking or structural components require replacement during a roof project, detailed photographic documentation is mandatory—not optional. This documentation must clearly show:
              </p>
              <ul className="space-y-3 text-zinc-300 ml-6 list-disc mb-4">
                <li><strong className="text-white">Exactly which wood sections were replaced:</strong> Close-up photographs showing the precise location, dimensions, and boundaries of each replaced section before removal.</li>
                <li><strong className="text-white">Why the wood required replacement:</strong> Clear images documenting rot, water damage, structural failure, delamination, or code non-compliance that necessitated replacement.</li>
                <li><strong className="text-white">The replacement process:</strong> Photos showing the removed damaged wood, the clean framing after removal, and the newly installed materials.</li>
                <li><strong className="text-white">Material specifications:</strong> Documentation of replacement material type, thickness, grade, and fastening methods used.</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed">
                <strong className="text-white">Why this level of documentation is required:</strong> Wood replacement represents additional scope beyond the original contract and must be verified before payment. Vague descriptions like "replaced some bad wood" are insufficient. Homeowners have the right to see unambiguous photographic proof of what was damaged, what was replaced, and why the replacement was necessary. This protects both the homeowner and the contractor by creating a clear record of the work performed.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border border-red-600/20 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">The Problem with Single-License Contractors</h3>
                  <p className="text-zinc-300 leading-relaxed mb-3">
                    When a roofing-only contractor discovers structural work is needed, they must stop and hire a separate general contractor. This creates:
                  </p>
                  <ul className="space-y-2 text-zinc-300 ml-6 list-disc">
                    <li>Multiple permits and permit fees</li>
                    <li>Coordination delays between two separate contractors</li>
                    <li>Scheduling conflicts and extended project timelines</li>
                    <li>Increased liability exposure (who's responsible if something fails?)</li>
                    <li>Higher total costs due to subcontractor markups</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              <strong className="text-white">All Phase Construction USA holds both a General Contractor license (CGC-1526236) and a Roofing Contractor license (CCC-1331464).</strong> This means we can handle the entire scope of work under one permit, with faster inspections, clearer accountability, and reduced overall project risk.
            </p>
          </div>
        </div>
      </section>

      {/* Wind Mitigation & Insurance */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <FileCheck className="w-12 h-12 text-red-600 flex-shrink-0" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Wind Mitigation, Insurance Discounts, and Why Documentation Is Critical
            </h2>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Many South Florida homeowners are unknowingly leaving money on the table. Insurance carriers offer substantial premium discounts for hurricane-resistant features—but only if you can prove they exist.
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">What Is a Wind Mitigation Report?</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                A wind mitigation report is a documented inspection that verifies hurricane-resistant features of your home's roof and structure. It includes:
              </p>
              <ul className="space-y-2 text-zinc-300 ml-6 list-disc mb-6">
                <li>Roof covering type and attachment method</li>
                <li>Roof deck attachment (fastening pattern and spacing)</li>
                <li>Roof-to-wall connection strength</li>
                <li>Roof geometry (hip vs. gable)</li>
                <li>Secondary water resistance (peel-and-stick underlayment)</li>
                <li>Opening protection (impact-rated windows and doors)</li>
              </ul>

              <div className="mb-6">
                <img
                  src="/wind-mitigation-inspection-roof-components-diagram.png"
                  alt="Wind mitigation inspection diagram showing roof components evaluated for insurance discounts in South Florida HVHZ"
                  className="w-full rounded-lg border border-zinc-700"
                />
                <p className="text-sm text-zinc-400 mt-3 text-center">
                  Wind mitigation components evaluated for insurance premium discounts in South Florida
                </p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                Insurance companies use this report to calculate your eligibility for premium discounts. Depending on the features documented, these discounts can save homeowners hundreds or even thousands of dollars annually.
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Your Roofer Should Complete This Report</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                The contractor who installs your roof has firsthand knowledge of every component installed and can document it accurately. Many roofers skip this step, leaving homeowners to hire a separate inspector months or years later—if they ever realize the benefit exists at all.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                <strong className="text-white">All Phase Construction USA prepares wind mitigation reports for every qualifying roof installation.</strong> We ensure you receive the documentation needed to maximize your insurance savings immediately.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border border-red-600/20 rounded-lg p-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                <strong className="text-white">Real Cost Example:</strong> A typical South Florida homeowner paying $3,500/year for insurance could save $500-$800 annually with a properly documented roof upgrade. Over 20 years, that's $10,000-$16,000 in savings—just from submitting the right paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Protection */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            How Professional Roofers Protect Your Property During a Roof Replacement
          </h2>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              Roof replacement generates significant debris and creates risk to your landscaping, pavers, driveways, and surrounding property. Professional contractors use specialized equipment and protection systems to minimize damage.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Catch-All Systems</h3>
                <div className="mb-4">
                  <img
                    src="/roofing-property-protection-catch-all-system.jpg"
                    alt="Roofing catch-all debris containment system protecting landscaping and property during South Florida roof replacement"
                    className="w-full h-64 object-cover rounded-lg border border-zinc-700"
                  />
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Catch-All debris containment systems are positioned around the perimeter of the home to capture falling materials, protecting landscaping, AC units, and ground-level structures from damage.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Equipter Debris Removal</h3>
                <div className="mb-4">
                  <img
                    src="/equipter-roofing-equipment-property-protection.jpeg"
                    alt="Equipter roofing debris removal equipment protecting driveways and pavers during tile roof replacement in South Florida"
                    className="w-full h-64 object-cover rounded-lg border border-zinc-700"
                  />
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Equipters allow roofing debris to be loaded directly from the roof into dump trailers, preventing tile and material impacts on pavers, driveways, and surrounding surfaces. Trailers are removed every night so they never impede your driveway.
                </p>
              </div>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why This Matters</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Tile Roofs:</strong> Concrete and clay tiles can weigh 9-12 pounds each. When dropped from 15-20 feet, they can crack pavers, damage driveways, and destroy landscaping.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Paver Driveways:</strong> Pavers are especially vulnerable. Ground protection and proper debris management are essential to avoid costly repairs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Job Site Cleanliness:</strong> Professional systems reduce cleanup time, improve safety, and maintain a cleaner work environment.</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              Ask your contractor specifically what property protection measures they use. If they don't have a clear answer, that's a warning sign.
            </p>
          </div>
        </div>
      </section>

      {/* Roof Ventilation Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <Wind className="w-12 h-12 text-red-600 flex-shrink-0" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Proper Roof Ventilation Matters in South Florida (and How Solar Attic Fans Protect Your Roof)
            </h2>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Roof ventilation in South Florida is not optional—it is a critical component of roof longevity, energy efficiency, and underlayment performance, especially in High Velocity Hurricane Zone (HVHZ) environments. The extreme heat and humidity in this region create unique stresses on roofing systems that proper ventilation directly addresses.
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Understanding Thermal Shock</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                One of the most damaging conditions affecting South Florida roofs is thermal shock—the stress caused by rapid and repeated temperature changes. Here's how it works:
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Hot Exterior, Cool Interior:</strong> A tile roof surface can reach 160-180°F in direct sunlight, while the attic air below might be 120-140°F. This temperature differential creates stress on asphaltic underlayment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Repeated Thermal Cycling:</strong> As the sun moves and weather changes throughout the day, these temperature swings happen repeatedly, accelerating underlayment breakdown.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Proper Ventilation Stabilizes Temperature:</strong> Consistent air movement through the attic reduces temperature differentials, minimizing thermal stress on the underlayment and extending its service life.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">The Role of HVHZ-Rated Solar Attic Fans</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Not all solar attic fans are suitable for South Florida's demanding environment. Selecting the right fan is as critical as proper installation.
              </p>
              <ul className="space-y-3 text-zinc-300 mb-6">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">HVHZ Rating Required:</strong> Fans must be HVHZ-rated and tested for wind uplift. Non-rated fans can become projectiles during hurricanes or create roof penetration failures.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">CFM Matters:</strong> Different fans move different volumes of air (measured in cubic feet per minute). Proper fan sizing based on attic square footage is essential for effectiveness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Installation Quality:</strong> Proper flashing, sealing, and fastening patterns are critical. Poor installation negates the benefits and creates leak risks.</span>
                </li>
              </ul>

              <h4 className="text-xl font-bold text-white mb-3">How Solar Attic Fans Work Throughout the Day</h4>
              <p className="text-zinc-300 leading-relaxed mb-3">
                Solar attic fans provide dynamic, all-day temperature regulation:
              </p>
              <ul className="space-y-2 text-zinc-300 ml-6 list-disc">
                <li>Fans activate at sunrise without requiring direct sunlight on the panel</li>
                <li>Air movement increases progressively as solar intensity increases</li>
                <li>Peak operation occurs during the hottest part of the day when ventilation is most needed</li>
                <li>Fans naturally power down in the evening as temperatures decrease</li>
                <li>This creates consistent, automated attic temperature regulation without electrical consumption</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Optimal Solar Attic Fan Placement Matters</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Strategic placement maximizes effectiveness and extends operational hours:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Best Practice: Southwest Placement</h4>
                  <ul className="space-y-2 text-zinc-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Captures afternoon and early evening sun</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Allows longer run time into the evening hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Removes stored heat after peak sun exposure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Results in a cooler attic overnight</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Alternative: West Placement</h4>
                  <ul className="space-y-2 text-zinc-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Still captures afternoon sun effectively</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Good option when southwest slope unavailable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Provides substantial heat removal benefit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Reduced evening operation compared to SW</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-950 rounded-lg p-6 border border-zinc-700">
                <img
                  src="/solar-attic-fan-hvhz-roof-ventilation.jpg"
                  alt="HVHZ-rated solar attic fan installed on tile roof in South Florida providing hurricane-resistant roof ventilation"
                  className="w-full rounded-lg border border-zinc-700"
                />
                <p className="text-sm text-zinc-400 mt-3 text-center">
                  HVHZ-rated solar attic fan with proper flashing and mounting on Southwest roof slope
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border border-red-600/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">How Proper Ventilation Extends Roof and HVAC System Life</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                The benefits of proper attic ventilation extend far beyond the roof itself:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-zinc-900/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Roof System Benefits</h4>
                  <ul className="space-y-2 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Extended Underlayment Life:</strong> Cooler attic temperatures reduce thermal stress, allowing underlayment to last longer before becoming brittle.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Reduced Moisture:</strong> Air circulation helps prevent condensation and moisture buildup that can lead to mold and deck deterioration.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Preserved Adhesive Integrity:</strong> Lower temperatures help maintain the effectiveness of roof adhesives over time.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">HVAC and Comfort Benefits</h4>
                  <ul className="space-y-2 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Lower Cooling Load:</strong> A cooler attic means less radiant heat transfer to living spaces, reducing AC runtime and energy costs.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Extended HVAC Life:</strong> Reduced system strain translates to longer equipment lifespan and fewer repairs.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Ductwork Protection:</strong> In Florida, most HVAC ducts run through attics. Cooler attic temperatures reduce strain on duct insulation and system efficiency.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-950 rounded-lg p-6 border border-zinc-700/50">
                <img
                  src="/hvhz-solar-attic-fan-installation-south-florida.jpg"
                  alt="HVHZ-rated solar attic fan installation in South Florida showing proper flashing and underlayment protection"
                  className="w-full h-auto rounded-lg object-cover mb-3"
                  loading="lazy"
                />
                <p className="text-sm text-zinc-400 text-center">
                  HVHZ-compliant solar attic fan installation used to improve attic ventilation, reduce thermal stress on underlayment, and increase roof lifespan in South Florida homes.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-8">
              <div className="bg-zinc-800 p-6 border-b border-zinc-700">
                <h3 className="text-2xl font-bold text-white">Vented Roof vs Non-Vented Roof in South Florida</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-zinc-800/50">
                      <th className="text-left p-4 text-white font-semibold border-b border-zinc-700">Feature</th>
                      <th className="text-left p-4 text-white font-semibold border-b border-zinc-700">Properly Vented Roof</th>
                      <th className="text-left p-4 text-white font-semibold border-b border-zinc-700">Poorly Vented / Non-Vented Roof</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="p-4 text-white font-medium">Attic Temperature Stability</td>
                      <td className="p-4 text-zinc-300">Consistent air circulation maintains 120-130°F even on hottest days. Temperature fluctuations are minimized.</td>
                      <td className="p-4 text-zinc-300">Temperatures exceed 140-160°F with extreme daily fluctuations. Heat buildup accelerates throughout the day.</td>
                    </tr>
                    <tr className="border-b border-zinc-800 bg-zinc-900/30">
                      <td className="p-4 text-white font-medium">Underlayment Lifespan</td>
                      <td className="p-4 text-zinc-300">20-30+ years typical service life. Asphaltic underlayment remains flexible longer due to reduced thermal stress.</td>
                      <td className="p-4 text-zinc-300">15-20 years or less. High heat causes premature brittleness, cracking, and loss of waterproofing integrity.</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-4 text-white font-medium">Thermal Shock Risk</td>
                      <td className="p-4 text-zinc-300">Low risk. Air movement stabilizes temperature differentials between roof surface and attic space.</td>
                      <td className="p-4 text-zinc-300">High risk. Extreme temperature differences between hot tile and stagnant attic air create repeated thermal cycling damage.</td>
                    </tr>
                    <tr className="border-b border-zinc-800 bg-zinc-900/30">
                      <td className="p-4 text-white font-medium">HVAC Efficiency</td>
                      <td className="p-4 text-zinc-300">Cooling load reduced by 10-15%. Less radiant heat transfers to living spaces, lowering energy consumption.</td>
                      <td className="p-4 text-zinc-300">Higher cooling demand. Superheated attic acts as thermal mass, continuously radiating heat downward into home.</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-4 text-white font-medium">AC System Lifespan</td>
                      <td className="p-4 text-zinc-300">Extended lifespan due to reduced system runtime and lower operating temperatures. Less frequent repairs needed.</td>
                      <td className="p-4 text-zinc-300">Shortened lifespan. Constant high-demand operation increases wear, strain, and likelihood of premature failure.</td>
                    </tr>
                    <tr className="border-b border-zinc-800 bg-zinc-900/30">
                      <td className="p-4 text-white font-medium">Insurance & Inspection Perception</td>
                      <td className="p-4 text-zinc-300">Demonstrates proper system design. Wind mitigation inspectors and insurance adjusters recognize quality installation practices.</td>
                      <td className="p-4 text-zinc-300">May raise questions during inspections. Lack of ventilation can indicate substandard workmanship or code non-compliance.</td>
                    </tr>
                    <tr className="bg-zinc-900/30">
                      <td className="p-4 text-white font-medium">Overall Roof System Performance</td>
                      <td className="p-4 text-zinc-300">Optimized for South Florida climate. All components work together to maximize durability, efficiency, and long-term value.</td>
                      <td className="p-4 text-zinc-300">Compromised performance. Single weak point in system undermines investment and leads to premature roof system degradation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border-l-4 border-red-600 rounded-r-lg p-8">
              <h4 className="text-xl font-bold text-white mb-4">Ventilation Should Be Part of Your Roof System Design—Not an Afterthought</h4>
              <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                Proper attic ventilation is not a standalone upgrade or optional accessory. It is a fundamental component of a well-designed roofing system that directly impacts long-term performance, energy efficiency, and code compliance in South Florida's demanding HVHZ environment.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                <strong className="text-white">All Phase Construction USA evaluates attic ventilation as part of every roof replacement project.</strong> Our dual-licensed roofing and general contracting team assesses your attic's ventilation needs, recommends HVHZ-rated solar attic fan solutions when appropriate, and ensures proper installation that integrates seamlessly with your new roof system. This comprehensive approach protects your investment, extends system lifespan, reduces energy costs, and ensures your roof performs as intended for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Verify By Roof Type */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What to Verify When Buying a Roof in South Florida (By Roof Type)
          </h2>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed mb-12">
              In South Florida, the roof system performance depends heavily on details that are not visible once the roof is complete. Many failures happen due to shortcuts taken when inspectors are not present. As a homeowner, you should understand what to ask, what to verify, and what must be documented—because the difference between a roof that survives storms and one that fails prematurely often comes down to unseen installation details.
            </p>

            {/* Shingle Roofs */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                If You're Buying a Shingle Roof: Wind Rating Matters
              </h3>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Not all shingles are equal in high-wind environments. While shingles may look similar, their performance during hurricanes varies dramatically based on manufacturing quality, installation methods, and wind rating certifications.
              </p>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-6">
                <h4 className="text-xl font-bold text-white mb-4">Critical Questions to Ask:</h4>
                <ul className="space-y-3 text-zinc-300 ml-6 list-disc">
                  <li><strong className="text-white">What is the manufacturer wind warranty?</strong> Most shingle manufacturers cap wind warranties at 130 MPH—which may not be sufficient for South Florida's High Velocity Hurricane Zone.</li>
                  <li><strong className="text-white">Are the shingles certified for enhanced wind resistance?</strong> All Phase Construction USA installs TAMKO shingles with up to a 160 MPH wind warranty—significantly higher than industry standard.</li>
                  <li><strong className="text-white">Is the installer certified by the manufacturer?</strong> TAMKO certification allows enhanced installation methods and comprehensive documentation that standard installations cannot provide.</li>
                  <li><strong className="text-white">What fastening pattern will be used?</strong> Proper fastening patterns, starter courses, and ridge systems are critical for wind performance and warranty validation.</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4">
                  <img
                    src="/tamko-pro-certified-shingle-installation-south-florida.png"
                    alt="TAMKO Pro Certified shingle installation by All Phase Construction USA in South Florida"
                    className="w-full h-auto rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border-l-4 border-red-600 rounded-r-lg p-6">
                <p className="text-zinc-300 leading-relaxed">
                  <strong className="text-white">Important:</strong> Higher wind ratings are not automatic—they require certified installers and correct installation methods. Generic shingle installation does not qualify for enhanced wind warranties, even if the shingles themselves are rated for higher wind speeds.
                </p>
              </div>
            </div>

            {/* Tile Roofs */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                If You're Buying a Tile Roof: What's Under the Tile Matters Most
              </h3>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                The most important part of a tile roof is the system you cannot see. Tile is durable and long-lasting—but only if the underlayment, attachment methods, and adhesive application are executed correctly.
              </p>

              <div className="mb-6">
                <img
                  src="/tile-roof-installation-hvhz-south-florida.jpg"
                  alt="HVHZ tile roof installation showing proper underlayment and tile attachment methods in South Florida"
                  className="w-full rounded-lg border border-zinc-700"
                />
                <p className="text-sm text-zinc-400 mt-3 text-center">
                  Professional tile roof installation with proper underlayment and HVHZ-compliant attachment methods
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-6">
                <h4 className="text-xl font-bold text-white mb-4">What Determines Tile Roof Performance:</h4>
                <ul className="space-y-3 text-zinc-300 ml-6 list-disc">
                  <li><strong className="text-white">Underlayment Quality and Installation:</strong> The waterproofing layer beneath the tile is your true roof. Low-quality underlayment or improper installation leads to premature failure.</li>
                  <li><strong className="text-white">Tile Attachment Method:</strong> Modern tile roofs use roof adhesive (foam) instead of mechanical fastening in many systems. The TYPE, AMOUNT, and SIZE of adhesive patties matter significantly.</li>
                  <li><strong className="text-white">Adhesive Application Consistency:</strong> Permits may allow large or medium patty foam, but some contractors install small dabs instead to save material costs. This significantly reduces wind resistance.</li>
                </ul>
              </div>

              <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Common Shortcut That Homeowners Never See
                </h4>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  City inspectors are typically onsite for only a few minutes. They verify foam spraying is occurring and move on. They do NOT monitor installation consistency across the entire roof. Some contractors use proper foam application when the inspector is present, then switch to minimal adhesive once the inspector leaves.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  <strong className="text-white">This is why documentation matters.</strong> Photo documentation throughout the project protects homeowners by verifying consistent application across every section of the roof—not just what inspectors see.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src="/flat-concrete-tile-roof-hvhz-installation.jpg"
                    alt="Flat concrete tile roof with HVHZ-compliant installation in South Florida"
                    className="w-full h-80 object-cover rounded-lg border border-zinc-700"
                  />
                  <p className="text-sm text-zinc-400 mt-3 text-center">
                    Properly installed flat concrete tile roof meeting HVHZ standards
                  </p>
                </div>
                <div>
                  <img
                    src="/completed-tile-roof-south-florida-home.jpg"
                    alt="Completed tile roof installation on South Florida luxury home with proper curb appeal and hurricane protection"
                    className="w-full h-80 object-cover rounded-lg border border-zinc-700"
                  />
                  <p className="text-sm text-zinc-400 mt-3 text-center">
                    Finished tile roof providing both beauty and hurricane protection
                  </p>
                </div>
              </div>
            </div>

            {/* Metal Roofs */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                If You're Buying a Metal Roof: System Choice and Installation Precision Are Critical
              </h3>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Metal roofs are not all the same. Different systems have different performance characteristics, installation requirements, and warranty conditions. Understanding these differences helps homeowners make informed decisions.
              </p>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-6">
                <h4 className="text-xl font-bold text-white mb-4">Metal Roof System Types:</h4>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-2">Snap-Lock Systems</h5>
                  <p className="text-zinc-300 leading-relaxed mb-3">
                    Panels interlock mechanically. Faster installation, but performance depends entirely on proper clip spacing and manufacturer specifications.
                  </p>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-2">Mechanically Seamed Systems</h5>
                  <p className="text-zinc-300 leading-relaxed mb-3">
                    Seams are crimped using specialized equipment. Superior wind resistance, but requires precision layout and manufacturer-specific fastening schedules.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-white mb-4 mt-8">Critical Installation Details:</h4>
                <ul className="space-y-3 text-zinc-300 ml-6 list-disc">
                  <li><strong className="text-white">Sealant Requirements:</strong> Many manufacturers require sealant at specific seams. Some contractors skip required caulking to save time—this can void warranties and create leak pathways.</li>
                  <li><strong className="text-white">Clip Spacing:</strong> Clip spacing is critical for wind uplift resistance. Improper spacing reduces the roof's ability to resist hurricane-force winds and can void manufacturer warranties.</li>
                  <li><strong className="text-white">Continuous Verification:</strong> Mechanically seamed systems require continuous verification during installation to ensure each seam meets manufacturer specifications.</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <img
                    src="/mechanically-seamed-metal-roof-installation-south-florida.jpg"
                    alt="Mechanically seamed metal roof installation by All Phase Construction USA in South Florida designed for hurricane wind resistance"
                    className="w-full h-auto rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Documentation and Verification */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why Documentation and On-Site Verification Matter More Than Inspections Alone
              </h3>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Many contractors only "build for inspection day." Real performance depends on consistent execution across the entire project—not just what inspectors see during brief site visits.
              </p>

              <div className="mb-6">
                <img
                  src="/south-florida-roofing-permit-documentation.jpg"
                  alt="South Florida roofing permit documentation and building inspection paperwork for HVHZ compliance"
                  className="w-full rounded-lg border border-zinc-700"
                />
                <p className="text-sm text-zinc-400 mt-3 text-center">
                  Proper permitting and documentation are essential for HVHZ compliance in South Florida
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-6">
                <h4 className="text-xl font-bold text-white mb-4">The Reality of Roof Inspections:</h4>
                <ul className="space-y-3 text-zinc-300 ml-6 list-disc">
                  <li>Inspectors typically spend only a few minutes onsite</li>
                  <li>They verify that required materials are being used—not that they're being used correctly across the entire roof</li>
                  <li>Once the roof is complete, installation quality cannot be verified without destructive testing</li>
                  <li>Insurance claims and future inspections often require proof of proper installation methods</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border border-red-600/20 rounded-lg p-8">
                <h4 className="text-xl font-bold text-white mb-4">All Phase Construction USA's Approach:</h4>
                <ul className="space-y-3 text-zinc-300 ml-6 list-disc mb-6">
                  <li><strong className="text-white">Full Photo Documentation Throughout the Project:</strong> We document every phase of installation—not just inspection moments—providing proof of proper installation methods.</li>
                  <li><strong className="text-white">On-Site Project Manager Verification:</strong> Our project managers verify installation quality continuously, ensuring consistency across the entire roof system.</li>
                  <li><strong className="text-white">Compliance with Permit Requirements at Every Stage:</strong> We don't just meet inspection requirements—we maintain compliance throughout the entire project, not just during inspector visits.</li>
                  <li><strong className="text-white">Documentation Protects Homeowners:</strong> Comprehensive documentation helps protect homeowners during insurance claims, future inspections, and warranty validation.</li>
                </ul>

                <p className="text-lg text-zinc-300 leading-relaxed">
                  Cutting corners is common in roofing—but documented, verified, and properly permitted work is what separates a roof that survives storms from one that fails prematurely. When you cannot see the work once it's complete, documentation becomes your proof of quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multiple Contractors Warning */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why You Never Want Two Contractors Working on the Same Roof
          </h2>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              Some homeowners try to save money by hiring separate contractors for different aspects of the project—one for roofing, another for structural work. This creates serious problems:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-white mb-3">Safety Risks</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Multiple crews on the same roof create hazardous working conditions, unclear communication, and increased accident potential.
                </p>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-white mb-3">Liability Exposure</h3>
                <p className="text-zinc-300 leading-relaxed">
                  If something fails, which contractor is responsible? Warranty claims become complicated when multiple parties are involved.
                </p>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-white mb-3">Scheduling Conflicts</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Coordinating two separate contractors extends the project timeline and creates weather exposure risks during delays.
                </p>
              </div>

              <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-white mb-3">Inspection Failures</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Building inspectors expect continuity. Multiple permits and contractors increase the likelihood of inspection issues.
                </p>
              </div>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              Hiring a dual-licensed contractor eliminates these problems entirely. One company, one permit, one point of accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Best Time of Year */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Best Time of Year to Replace a Roof in South Florida
          </h2>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              Florida's climate creates distinct seasonal considerations for roofing work.
            </p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Rainy Season (May – October)</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                South Florida's rainy season brings daily afternoon thunderstorms, high humidity, and tropical weather systems. While roofing work can be performed during this period, it creates challenges:
              </p>
              <ul className="space-y-2 text-zinc-300 ml-6 list-disc">
                <li>Frequent weather delays that extend project timelines</li>
                <li>Moisture management concerns during tear-off</li>
                <li>Inspection scheduling becomes less predictable</li>
                <li>Increased risk of interior water intrusion if storms arrive unexpectedly</li>
              </ul>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Dry Season (November – April)</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Winter months are ideal for roof replacement in South Florida:
              </p>
              <ul className="space-y-2 text-zinc-300 ml-6 list-disc">
                <li>Predictable weather with minimal rain interruptions</li>
                <li>Easier scheduling and faster project completion</li>
                <li>Lower humidity improves adhesive curing and material installation</li>
                <li>More reliable inspection scheduling</li>
                <li>Reduced risk of weather-related delays</li>
              </ul>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              <strong className="text-white">Planning Tip:</strong> If you know your roof needs replacement, schedule the project for fall or winter. You'll experience fewer delays, better working conditions, and more predictable timelines.
            </p>
          </div>
        </div>
      </section>

      {/* All Phase Approach */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            How All Phase Construction USA Approaches Roofing Differently
          </h2>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-lg p-8 mb-8">
              <blockquote className="text-xl text-zinc-300 leading-relaxed italic">
                "We believe roof maintenance and proper installation help homeowners save money by extending roof life and avoiding premature replacement. We value long-term relationships and being ready to respond immediately when storms impact our customers."
              </blockquote>
              <p className="text-zinc-400 mt-4">— All Phase Construction USA</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">Dual-Licensed</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) licenses allow us to handle complete project scope.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">HVHZ Expertise</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  20+ years of experience working under High Velocity Hurricane Zone requirements throughout Broward and Palm Beach Counties.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">Wind Mitigation</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  We prepare wind mitigation reports for qualifying installations, ensuring you receive maximum insurance savings.
                </p>
              </div>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              Headquartered in Deerfield Beach, we serve homeowners throughout South Florida with responsive service, transparent communication, and long-term accountability.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Frequently Asked Questions About Hiring a Roofing Contractor in Deerfield Beach
          </h2>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? 'max-h-[400px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-zinc-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Hire a Professional Roofing Contractor?
          </h2>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a comprehensive roof assessment with All Phase Construction USA. We'll evaluate your roof's condition, explain your options, provide transparent pricing, and answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17542275605"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (754) 227-5605
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg border border-zinc-700"
            >
              Schedule Free Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
