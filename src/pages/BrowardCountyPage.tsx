import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, FileText, Home, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, ClipboardCheck } from 'lucide-react';

export default function BrowardCountyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Roofer Broward County FL | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Licensed roofing contractor serving Broward County. Full-service roofing for residential, commercial, and multi-family properties. HVHZ compliant. Call (754) 227-5605.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Licensed roofing contractor serving Broward County. Full-service roofing for residential, commercial, and multi-family properties. HVHZ compliant. Call (754) 227-5605.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Broward County, roofer Broward County FL, roof replacement Broward, Broward County roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Broward County, roofer Broward County FL, roof replacement Broward, Broward County roofing company';
      document.head.appendChild(meta);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://allphaseconstructionfl.com/locations/broward-county#webpage",
          "url": "https://allphaseconstructionfl.com/locations/broward-county",
          "name": "Roofing Contractor Serving Broward County, FL | All Phase Construction USA",
          "description": "Licensed roofing contractor serving Broward County, Florida. Residential and commercial roofing inspections, repairs, replacements, and specialty systems with permitting and insurance documentation support.",
          "isPartOf": {
            "@id": "https://allphaseconstructionfl.com/#website"
          },
          "about": {
            "@id": "https://allphaseconstructionfl.com/locations/broward-county#service"
          }
        },
        {
          "@type": "Service",
          "@id": "https://allphaseconstructionfl.com/locations/broward-county#service",
          "name": "Roofing Contractor in Broward County",
          "serviceType": "Roofing Contractor",
          "description": "Comprehensive residential and commercial roofing services in Broward County, Florida, including inspections, repairs, replacements, and specialty roofing systems, with documentation-first support for permitting and insurance needs.",
          "url": "https://allphaseconstructionfl.com/locations/broward-county",
          "provider": {
            "@id": "https://allphaseconstructionfl.com/#business"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Broward County",
            "addressRegion": "FL",
            "addressCountry": "US"
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'broward-county-structured-data';
    document.head.appendChild(script);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Broward County considered a High Velocity Hurricane Zone (HVHZ)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Broward County is within Florida's High Velocity Hurricane Zone (HVHZ), meaning roofing systems often require stricter compliance standards for wind uplift, fastening, and approved product assemblies."
          }
        },
        {
          "@type": "Question",
          "name": "What makes HVHZ roofing requirements different from standard Florida code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HVHZ rules are designed for extreme wind events. They typically require stronger attachment methods, approved roof assemblies, and more precise installation details than non-HVHZ areas."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a permit to replace or repair a roof in Broward County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most roof replacements require a permit, and many repairs do as well depending on scope. Proper permitting protects the property owner and ensures the roof is installed to the required code."
          }
        },
        {
          "@type": "Question",
          "name": "What is wind uplift and why does it matter in Broward County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wind uplift is the force that tries to pull the roof system off the structure during high winds. In Broward County, roofs must meet higher wind uplift resistance standards due to hurricane exposure."
          }
        },
        {
          "@type": "Question",
          "name": "What does HVHZ mean in roofing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HVHZ stands for High Velocity Hurricane Zone, a Florida building code designation requiring stronger roofing systems to withstand extreme hurricane-force winds."
          }
        },
        {
          "@type": "Question",
          "name": "Why are roofing codes stricter in Broward County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Broward County has stricter roofing requirements because of its hurricane risk and wind exposure, requiring enhanced fastening, approved assemblies, and stronger wind uplift resistance."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    faqScript.id = 'broward-county-faq-schema';
    document.head.appendChild(faqScript);

    return () => {
      const existingScript = document.getElementById('broward-county-structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      const existingFaqScript = document.getElementById('broward-county-faq-schema');
      if (existingFaqScript) {
        document.head.removeChild(existingFaqScript);
      }
    };
  }, []);

  const services = [
    {
      title: 'Roof Inspections & Forensic Assessments',
      description: 'Comprehensive condition assessments for residential, commercial, and multi-family properties with detailed documentation.',
      path: '/roof-inspection/',
      icon: ClipboardCheck
    },
    {
      title: 'Storm Damage & Insurance Inspections',
      description: 'Professional storm damage evaluations with insurance-aligned reporting and photo documentation.',
      path: '/insurance-roof-inspection/',
      icon: FileText
    },
    {
      title: 'Roof Repairs & Active Leak Resolution',
      description: 'Fast emergency repairs and systematic leak remediation for all roofing system types.',
      path: '/roof-repair',
      icon: Wrench
    },
    {
      title: 'Full Roof Replacements',
      description: 'Complete roof replacement services for urban residential, commercial, and multi-family buildings.',
      path: '/residential-roofing/',
      icon: Home
    },
    {
      title: 'Flat Roofing Systems',
      description: 'TPO, modified bitumen, and built-up flat roofing for commercial and multi-family properties.',
      path: '/flat-roofing/',
      icon: Building2
    },
    {
      title: 'Metal Roofing Systems',
      description: 'Standing seam and metal panel installations for long-term durability and hurricane resistance.',
      path: '/metal-roofing/',
      icon: Shield
    },
    {
      title: 'Tile Roofing Systems',
      description: 'Concrete and clay tile installations and repairs for residential properties throughout Broward County.',
      path: '/tile-roofing/',
      icon: Home
    },
    {
      title: 'Commercial & Multi-Family Roofing',
      description: 'Condominium buildings, commercial properties, and phased project execution with coordinated inspections.',
      path: '/commercial-roofing/',
      icon: Building2
    }
  ];

  const environmentalFactors = [
    {
      title: 'Urban Density & Project Coordination',
      description: 'Broward County features dense urban development requiring careful logistics, staging, and coordination with property managers and condominium associations.'
    },
    {
      title: 'Coastal Exposure & Hurricane Zone',
      description: 'Located within the High Velocity Hurricane Zone, all roofing systems must meet stringent fastening requirements and wind-load specifications.'
    },
    {
      title: 'Multi-Family & Condominium Buildings',
      description: 'Extensive condominium and multi-family construction throughout the county requires phased project management and coordinated inspection processes.'
    },
    {
      title: 'Municipal Enforcement & Permitting',
      description: 'Strict municipal code enforcement and permitting standards across Broward County jurisdictions require thorough documentation and compliance expertise.'
    }
  ];

  const complianceSupport = [
    {
      title: 'Permit-Compliant Scopes of Work',
      description: 'Detailed project specifications and documentation prepared for municipal permitting offices throughout Broward County.'
    },
    {
      title: 'Insurance-Aligned Inspection Reporting',
      description: 'Photo documentation and condition assessments structured to support insurance claims and carrier requirements.'
    },
    {
      title: 'Association & Property Manager Support',
      description: 'Clear communication, phased scheduling, and documentation for condominium associations and commercial property managers.'
    },
    {
      title: 'HVHZ Fastening & Code Requirements',
      description: 'All roofing work executed with attention to High Velocity Hurricane Zone fastening standards and Florida Building Code requirements.'
    }
  ];

  const cities = [
    { name: 'Fort Lauderdale', path: '/locations/fort-lauderdale' },
    { name: 'Hollywood', path: '/locations/hollywood' },
    { name: 'Pompano Beach', path: '/locations/pompano-beach' },
    { name: 'Coral Springs', path: '/locations/coral-springs' },
    { name: 'Pembroke Pines', path: '/locations/pembroke-pines' },
    { name: 'Deerfield Beach', path: '/locations/deerfield-beach' },
    { name: 'Plantation', path: '/locations/plantation' },
    { name: 'Davie', path: '/locations/davie' },
    { name: 'Miramar', path: '/locations/miramar' },
    { name: 'Weston', path: '/locations/weston' },
    { name: 'Coconut Creek', path: '/locations/coconut-creek' },
    { name: 'Tamarac', path: '/locations/tamarac' },
    { name: 'Margate', path: '/locations/margate' },
    { name: 'Lauderhill', path: '/locations/lauderhill' },
    { name: 'Sunrise', path: '/locations/sunrise' },
    { name: 'Parkland', path: '/locations/parkland' },
    { name: 'Cooper City', path: '/locations/cooper-city' },
    { name: 'Hallandale Beach', path: '/locations/hallandale-beach' },
    { name: 'Wilton Manors', path: '/locations/wilton-manors' },
    { name: 'Oakland Park', path: '/locations/oakland-park' },
    { name: 'Lauderdale-By-The-Sea', path: '/locations/lauderdale-by-the-sea' },
    { name: 'Lighthouse Point', path: '/locations/lighthouse-point' }
  ];

  const peopleAlsoAsk = [
    {
      question: 'Is Broward County considered a High Velocity Hurricane Zone (HVHZ)?',
      answer: 'Yes. Broward County is within Florida\'s High Velocity Hurricane Zone, meaning roofing systems often require stricter compliance standards for wind uplift, fastening, and approved product assemblies.'
    },
    {
      question: 'What makes HVHZ roofing requirements different from standard Florida code?',
      answer: 'HVHZ rules are designed for extreme wind events. They typically require stronger attachment methods, approved roof assemblies, and more precise installation details than non-HVHZ areas.'
    },
    {
      question: 'Do I need a permit to replace or repair a roof in Broward County?',
      answer: 'Most roof replacements require a permit, and many repairs do as well depending on scope. Proper permitting protects the property owner and ensures the roof is installed to the required code.'
    },
    {
      question: 'What is "wind uplift" and why does it matter in Broward County?',
      answer: 'Wind uplift is the force that tries to pull the roof system off the structure during high winds. In Broward County, roofs must meet higher wind uplift resistance standards due to hurricane exposure.'
    },
    {
      question: 'What roof type performs best in Broward County storms?',
      answer: 'The best roof depends on your building and budget, but performance comes down to system design + installation quality + code compliance, not just the material. A properly installed roof system built to HVHZ requirements is the goal.'
    },
    {
      question: 'Can a roof pass inspection but still be installed wrong?',
      answer: 'Unfortunately, yes. That\'s why documentation, correct materials, and experienced installation matter. A roof should be built to perform — not just to "get through" inspection.'
    }
  ];

  const faqs = [
    {
      question: 'What does HVHZ mean in roofing?',
      answer: 'HVHZ stands for High Velocity Hurricane Zone, a Florida building code designation requiring stronger roofing systems to withstand extreme hurricane-force winds.'
    },
    {
      question: 'Why are roofing codes stricter in Broward County?',
      answer: 'Broward County has stricter roofing requirements because of its hurricane risk and wind exposure, requiring enhanced fastening, approved assemblies, and stronger wind uplift resistance.'
    },
    {
      question: 'What is Florida Product Approval and why is it important?',
      answer: 'Florida Product Approval verifies that a roofing product meets Florida building code performance standards. In Broward County, using approved products helps ensure code compliance and inspection approval.'
    },
    {
      question: 'How do I know if my roof is HVHZ-compliant?',
      answer: 'The best way is to have a contractor verify the roof assembly, fastening methods, and approved materials. HVHZ compliance depends on the full system — not just the visible surface.'
    },
    {
      question: 'What are signs my roof needs repair vs replacement?',
      answer: 'Repairs may be enough for isolated damage, but widespread leaks, recurring failures, aging underlayment, or structural deck issues often indicate replacement is the safer long-term option.'
    },
    {
      question: 'Do you handle both residential and commercial roofing in Broward County?',
      answer: 'Yes. Roofing needs vary by building type, and we provide solutions based on code requirements, roof design, and long-term durability.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
      <div className="pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-500">Roofing</span>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Broward County</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Contractor Serving{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Broward County, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Broward County roofing isn't "standard Florida roofing." Much of the county falls under High Velocity Hurricane Zone (HVHZ) requirements, meaning stricter rules for wind uplift resistance, fastening patterns, underlayment systems, and Florida Product Approvals. If you're repairing storm damage, replacing an aging roof, or planning a full reroof, your project needs to be installed to code — and documented correctly.
            </p>
            <p className="text-lg text-zinc-300 font-semibold mb-6">
              Broward County roofs must be built for extreme wind loads — and HVHZ code compliance is non-negotiable.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Florida Licensed</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Fully Insured</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>HVHZ Compliant</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>20+ Years Experience</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Request Assessment
              </Link>
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700"
              >
                <Phone className="w-5 h-5" />
                (754) 227-5605
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Authority Establishment
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                All Phase Construction USA is a licensed roofing contractor providing full-service roofing solutions throughout Broward County. We serve residential, commercial, and multi-family properties with roofing systems designed to meet Florida's stringent building codes, High Velocity Hurricane Zone requirements, and insurance documentation standards.
              </p>
              <p>
                From dense urban areas to coastal communities and large condominium developments, our team delivers roofing inspections, repairs, and replacements tailored to Broward County's construction environment.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Roofing in Broward County: HVHZ Codes & Real-World Requirements
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Broward County is one of the most regulated roofing markets in the country because it is part of Florida's High Velocity Hurricane Zone (HVHZ). That matters because roofing systems here must meet higher performance standards for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Wind uplift resistance (roof system attachment strength)</li>
                <li>Enhanced fastening requirements (nail patterns and fastener type)</li>
                <li>Approved materials and assemblies (Florida Product Approval / Miami-Dade NOA)</li>
                <li>Stricter inspection expectations (documentation + installation details matter)</li>
              </ul>
              <p>
                A roof can look perfect and still fail inspection — or fail during a storm — if it isn't installed to the correct HVHZ-rated assembly.
              </p>
              <p className="font-semibold text-zinc-300">
                Our approach is simple: build it to code, document it properly, and install it to last.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Common Roofing Issues We See in Broward County
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Storm-driven rain intrusion at transitions, walls, and penetrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Aged underlayment breakdown (especially on older tile systems)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Improper repairs that don't meet HVHZ fastening requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Flat roof ponding water and membrane separation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Hidden deck damage discovered during tear-off</span>
                </li>
              </ul>
              <p className="font-semibold text-zinc-300 mt-6">
                If you're seeing leaks, missing tiles/shingles, or recurring repairs — it's time for a professional roof evaluation.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Full-Service Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Services Available in Broward County
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto">
                All services are performed by licensed professionals experienced with Broward County permitting and inspection processes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={index}
                    to={service.path}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600/50 transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-red-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-red-500 font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Urban Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Broward County Roofing Environment
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto">
                Broward County presents a dense and highly regulated roofing landscape requiring specialized expertise and coordinated project execution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {environmentalFactors.map((factor, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{factor.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{factor.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-[#27272a] border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Broward County Roofing Environment and Operational Expertise</h3>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Broward County presents a dense and highly regulated roofing environment, with a large concentration of urban residential neighborhoods, condominium buildings, and commercial properties. Many structures throughout the county utilize flat roofing systems and multi-story assemblies that require specialized installation methods and coordinated project execution.
                </p>
                <p>
                  Roofing projects in Broward County frequently involve occupied buildings, shared roof systems, and phased work schedules. Urban density, coastal exposure, and frequent storm activity place consistent demands on roof assemblies, waterproofing systems, and fastening requirements. Our team is experienced in performing inspections, repairs, and replacements while maintaining safety, access coordination, and continuity for residents and tenants.
                </p>
                <p>
                  We regularly navigate Broward County's permitting processes, municipal enforcement standards, and insurance documentation requirements. This operational experience allows us to support property managers, condominium associations, commercial owners, and homeowners with roofing solutions that prioritize compliance, durability, and efficient execution across Broward County.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Regulatory Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Permitting, Insurance, and Regulatory Experience
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto">
                Roofing projects in Broward County often require detailed documentation and coordination with insurers, adjusters, and municipal permitting offices. This structured approach reduces delays and supports smoother project execution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceSupport.map((item, index) => (
                <div key={index} className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-[#27272a] border border-zinc-800 rounded-lg p-6">
              <blockquote className="border-l-4 border-red-600 pl-6 py-4">
                <p className="text-xl text-zinc-300 italic mb-4">
                  "Coming from Jacksonville, I knew Florida roofing. But moving to South Florida made it clear that Broward County—especially under High Velocity Hurricane Zone requirements—is a different level of code and enforcement. If you can install a roof here, you can install a roof anywhere in the country."
                </p>
                <footer className="text-zinc-400">
                  — Dillon M., Sales Manager, All Phase Construction USA
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                County-Wide Service
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Serving Cities Throughout Broward County
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                We provide roofing services throughout Broward County. City-level service pages provide localized detail for each municipality.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city, index) => (
                <Link
                  key={index}
                  to={city.path}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-4 hover:border-red-600/50 transition-all duration-300 group text-center"
                >
                  <span className="text-white group-hover:text-red-500 transition-colors font-semibold">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                People Also Ask About Roofing in Broward County
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto">
                Common questions about HVHZ requirements and roofing standards in Broward County.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {peopleAlsoAsk.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-8">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Broward County Roofing FAQs
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto">
                Detailed answers about roofing codes, compliance, and project expectations.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={`faq-${index}`}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index + 100 ? null : index + 100)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-8">
                      {faq.question}
                    </span>
                    {openFaq === index + 100 ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index + 100 && (
                    <div className="px-6 pb-5">
                      <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Related Roofing Services in Broward County
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto">
                Explore our comprehensive roofing services available throughout Broward County.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/roof-repairbroward-county/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  Roof Repair in Broward County
                </h3>
                <p className="text-zinc-400 text-sm">Emergency repairs and leak resolution for all roof types</p>
              </Link>
              <Link
                to="/roof-inspection/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  Roof Inspection
                </h3>
                <p className="text-zinc-400 text-sm">Professional roof assessments and condition reports</p>
              </Link>
              <Link
                to="/tile-roofing/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  Tile Roofing Services
                </h3>
                <p className="text-zinc-400 text-sm">Concrete and clay tile installations and repairs</p>
              </Link>
              <Link
                to="/metal-roofing/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  Metal Roofing Services
                </h3>
                <p className="text-zinc-400 text-sm">Standing seam and metal panel systems</p>
              </Link>
              <Link
                to="/shingle-roofing/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  Shingle Roofing Services
                </h3>
                <p className="text-zinc-400 text-sm">Architectural and dimensional shingle roofing</p>
              </Link>
              <Link
                to="/flat-roofing/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  Flat Roofing Solutions
                </h3>
                <p className="text-zinc-400 text-sm">TPO, modified bitumen, and built-up flat roofs</p>
              </Link>
              <Link
                to="/single-ply-roofing/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  Single-Ply Roofing Systems
                </h3>
                <p className="text-zinc-400 text-sm">Modern single-ply membrane solutions</p>
              </Link>
              <Link
                to="/locations/"
                className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  Service Areas Hub
                </h3>
                <p className="text-zinc-400 text-sm">View all service areas we cover</p>
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Discuss Your Roofing Project?
              </h2>
              <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                If you need a qualified roofing contractor in Broward County, our team is available to discuss inspections, repairs, or full roofing projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact/"
                  className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-zinc-100 transition-all duration-300 text-lg"
                >
                  Request Assessment
                </Link>
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 text-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
