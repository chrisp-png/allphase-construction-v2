import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, FileText, Home, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, ClipboardCheck } from 'lucide-react';

export default function PalmBeachCountyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Roofer Palm Beach County FL | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Licensed roofing contractor serving Palm Beach County. Comprehensive roofing services for residential and commercial properties. Tile, flat, metal roofing. Call (754) 227-5605.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Licensed roofing contractor serving Palm Beach County. Comprehensive roofing services for residential and commercial properties. Tile, flat, metal roofing. Call (754) 227-5605.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Palm Beach County, roofer Palm Beach County FL, roof replacement Palm Beach, Palm Beach County roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Palm Beach County, roofer Palm Beach County FL, roof replacement Palm Beach, Palm Beach County roofing company';
      document.head.appendChild(meta);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://allphaseconstructionfl.com/roofing-contractor-palm-beach-county-fl#webpage",
          "url": "https://allphaseconstructionfl.com/roofing-contractor-palm-beach-county-fl",
          "name": "Roofing Contractor Serving Palm Beach County, FL | All Phase Construction USA",
          "description": "Licensed roofing contractor serving Palm Beach County, Florida. Residential and commercial roofing inspections, repairs, replacements, and specialty systems with permitting and insurance documentation support.",
          "isPartOf": {
            "@id": "https://allphaseconstructionfl.com/#website"
          },
          "about": {
            "@id": "https://allphaseconstructionfl.com/roofing-contractor-palm-beach-county-fl#service"
          }
        },
        {
          "@type": "Service",
          "@id": "https://allphaseconstructionfl.com/roofing-contractor-palm-beach-county-fl#service",
          "name": "Roofing Contractor in Palm Beach County",
          "serviceType": "Roofing Contractor",
          "description": "Comprehensive residential and commercial roofing services in Palm Beach County, Florida, including inspections, repairs, replacements, and specialty roofing systems, with documentation-first support for permitting and insurance needs.",
          "url": "https://allphaseconstructionfl.com/roofing-contractor-palm-beach-county-fl",
          "provider": {
            "@id": "https://allphaseconstructionfl.com/#business"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Palm Beach County",
            "addressRegion": "FL",
            "addressCountry": "US"
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'palm-beach-county-structured-data';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('palm-beach-county-structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const services = [
    {
      title: 'Roof Inspections & Condition Assessments',
      description: 'Comprehensive roof evaluations with detailed documentation for insurance, HOA compliance, and property maintenance planning.',
      path: '/roof-inspection',
      icon: ClipboardCheck
    },
    {
      title: 'Storm Damage & Insurance Inspections',
      description: 'Professional storm damage assessments with insurance-defensible documentation and photo evidence.',
      path: '/insurance-roof-inspection',
      icon: FileText
    },
    {
      title: 'Roof Repairs & Leak Remediation',
      description: 'Fast, effective roof repairs addressing leaks, damage, and deterioration across all roofing system types.',
      path: '/roofing-services/roof-repair',
      icon: Wrench
    },
    {
      title: 'Full Roof Replacements',
      description: 'Complete roof replacement services designed for South Florida climate and building codes.',
      path: '/residential-roofing',
      icon: Home
    },
    {
      title: 'Tile Roofing Systems',
      description: 'Concrete and clay tile installations and repairs, the signature roofing system throughout Palm Beach County.',
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Flat Roofing Systems',
      description: 'TPO, modified bitumen, and built-up flat roofing for commercial properties and modern residential homes.',
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Metal Roofing Systems',
      description: 'Standing seam and metal panel roofing for long-term durability and energy efficiency.',
      path: '/metal-roofing',
      icon: Shield
    },
    {
      title: 'Commercial Roofing',
      description: 'Multi-family, condominium, and commercial property roofing with phased project management.',
      path: '/commercial-roofing',
      icon: Building2
    }
  ];

  const environmentalFactors = [
    {
      title: 'Coastal Exposure & Salt Air',
      description: 'Properties near the Atlantic Ocean face accelerated corrosion of metal components and fastening systems. We use corrosion-resistant materials and proper protective coatings for coastal installations.'
    },
    {
      title: 'High UV Levels',
      description: 'South Florida experiences some of the highest UV exposure in the continental United States, accelerating material degradation. All roofing systems must be rated for extreme UV conditions.'
    },
    {
      title: 'Hurricane & Storm Activity',
      description: 'Palm Beach County is within the High Velocity Hurricane Zone, requiring enhanced fastening, wind-rated materials, and compliance with stringent building code requirements.'
    },
    {
      title: 'HOA & Architectural Standards',
      description: 'Many master-planned communities throughout Palm Beach County enforce strict architectural guidelines for roofing materials, colors, and installation methods.'
    }
  ];

  const complianceSupport = [
    {
      title: 'Permitting & Code Compliance',
      description: 'We handle all permitting requirements and ensure full compliance with Florida Building Code and local municipal standards.'
    },
    {
      title: 'Insurance Documentation',
      description: 'Photo-documented condition reports, inspection findings, and repair scopes designed to support insurance claims and carrier requirements.'
    },
    {
      title: 'HOA & Association Coordination',
      description: 'Material specifications, color documentation, and architectural review support for condominium associations and HOA boards.'
    },
    {
      title: 'Wind Mitigation & Certifications',
      description: 'Official wind mitigation forms and 5-year certification letters where applicable to support insurance coverage and premium reductions.'
    }
  ];

  const cities = [
    { name: 'Boca Raton', path: '/roofing-contractor-boca-raton-fl' },
    { name: 'Delray Beach', path: '/roofing-contractor-delray-beach-fl' },
    { name: 'Boynton Beach', path: '/roofing-contractor-boynton-beach-fl' },
    { name: 'West Palm Beach', path: '/roofing-contractor-west-palm-beach-fl' },
    { name: 'Jupiter', path: '/roofing-contractor-jupiter-fl' },
    { name: 'Palm Beach Gardens', path: '/roofing-contractor-palm-beach-gardens-fl' },
    { name: 'Wellington', path: '/roofing-contractor-wellington-fl' },
    { name: 'Royal Palm Beach', path: '/roofing-contractor-royal-palm-beach-fl' },
    { name: 'Lake Worth Beach', path: '/roofing-contractor-lake-worth-beach-fl' },
    { name: 'Palm Beach', path: '/roofing-contractor-palm-beach-fl' },
    { name: 'Lantana', path: '/roofing-contractor-lantana-fl' },
    { name: 'Ocean Ridge', path: '/roofing-contractor-ocean-ridge-fl' },
    { name: 'Gulf Stream', path: '/roofing-contractor-gulf-stream-fl' }
  ];

  const faqs = [
    {
      question: 'Do roofing projects in Palm Beach County require HOA or condominium approval?',
      answer: 'Many properties in Palm Beach County are governed by homeowner associations or condominium boards. Roofing projects often require architectural review and formal approval before work can begin. We regularly assist homeowners and property managers by providing documentation and scopes of work that align with association review requirements.'
    },
    {
      question: 'Are tile roofs common in Palm Beach County?',
      answer: 'Yes. Tile roofing systems are widely used throughout Palm Beach County, particularly in planned communities and coastal areas. These systems require specialized inspection and installation methods to address fastening, underlayment condition, and long-term performance in Florida\'s climate.'
    },
    {
      question: 'How does coastal exposure affect roofs in Palm Beach County?',
      answer: 'Coastal exposure in Palm Beach County introduces salt air, higher humidity, and increased UV exposure, all of which can accelerate roof material wear. Inspections and roofing work in these areas must account for corrosion, fastener integrity, and moisture intrusion risks.'
    },
    {
      question: 'Does Palm Beach County have specific permitting requirements for roofing work?',
      answer: 'Roofing projects in Palm Beach County typically require permits and inspections in accordance with Florida Building Code standards. Requirements may vary by municipality, and additional documentation is often needed for association-managed properties.'
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
            <Link to="/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Palm Beach County</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Contractor Serving{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Palm Beach County, FL
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Licensed and insured roofing contractor providing comprehensive roofing services for residential and commercial properties throughout Palm Beach County.
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
                to="/contact"
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
                All Phase Construction USA is a licensed and insured roofing contractor serving residential and commercial properties throughout Palm Beach County. We provide comprehensive roofing services designed for South Florida's climate, building codes, and insurance requirements, including inspection, repair, replacement, and specialty roofing systems. Our team operates across coastal, inland, and planned communities, delivering roofing solutions built for durability, compliance, and long-term performance in the High Velocity Hurricane Zone.
              </p>
              <p>
                With extensive experience working on tile, flat, metal, and specialty roofing systems, we support homeowners, HOAs, condominium associations, and commercial property managers across Palm Beach County.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Comprehensive Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Services Available in Palm Beach County
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto">
                Each service is delivered by licensed roofing professionals familiar with Palm Beach County permitting processes and inspection standards.
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
                Local Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Palm Beach County Roofing Environment
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto">
                Palm Beach County properties face a unique combination of environmental and regulatory conditions that require specialized roofing expertise.
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
              <h3 className="text-xl font-bold text-white mb-4">Palm Beach County Roofing Environment and Local Expertise</h3>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Palm Beach County presents a roofing environment shaped by master-planned communities, coastal exposure, and association-driven oversight. Many residential and commercial properties throughout the county feature tile roofing systems and flat roofs, often governed by homeowner associations and condominium boards.
                </p>
                <p>
                  Roofing systems in Palm Beach County are frequently impacted by salt air, elevated UV exposure, and seasonal storm activity, which can accelerate material wear and fastening failures if not properly evaluated. Our team regularly works within HOA-managed and master-planned communities, coordinating inspections, documentation, and scopes of work that align with association standards and architectural review processes.
                </p>
                <p>
                  We have extensive experience navigating architectural review boards, association approvals, and Palm Beach County permitting requirements. This allows us to support homeowners, property managers, and association boards with roofing solutions that balance durability, compliance, and long-term performance across Palm Beach County.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Documentation First
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Permitting, Insurance, and Compliance Experience
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto">
                Roofing projects in Palm Beach County often involve coordination with permitting offices, insurance carriers, and association boards. We provide documentation-first workflows that support clarity, compliance, and reduced friction throughout the roofing process.
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
                  "Palm Beach County's early adoption of video inspections has made a real difference. It keeps projects on track and reduces downtime that used to come from waiting on inspections."
                </p>
                <footer className="text-zinc-400">
                  — Matt D., Production Manager, All Phase Construction USA
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
                Serving Cities Throughout Palm Beach County
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                We provide roofing services throughout Palm Beach County. City-specific service pages provide additional localized detail for each municipality.
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
                Palm Beach County Roofing Questions
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto">
                Common questions about roofing services in Palm Beach County.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
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
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Discuss Your Roofing Project?
              </h2>
              <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                If you are looking for a trusted roofing contractor in Palm Beach County, speak with our team to discuss your property, inspection needs, or upcoming roofing project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
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
