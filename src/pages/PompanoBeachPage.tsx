import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function PompanoBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Pompano Beach Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Pompano Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Pompano Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Pompano Beach, roofer Pompano Beach FL, roof replacement Pompano Beach, Pompano Beach roofing company, condo roofing Pompano Beach, commercial roofing Pompano Beach');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Pompano Beach, roofer Pompano Beach FL, roof replacement Pompano Beach, Pompano Beach roofing company, condo roofing Pompano Beach, commercial roofing Pompano Beach';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Pompano Beach');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Pompano Beach',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '150'
      }
    });

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a new roof cost in Pompano Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roof replacement costs in Pompano Beach vary based on roof size, material, and building type. Because the city is in Florida's High Velocity Hurricane Zone (HVHZ), roofing systems must meet stricter standards, which can affect pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Is Pompano Beach located in Florida's High Velocity Hurricane Zone (HVHZ)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pompano Beach falls within the HVHZ, meaning all roofing installations must meet enhanced wind uplift, fastening, and material approval requirements under Florida Building Code."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with condo associations and property managers in Pompano Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We regularly work with condo associations, HOAs, and property managers, coordinating inspections, documentation, and phased roofing projects for multi-family properties."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials are best for coastal properties in Pompano Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tile, metal, and flat roofing systems are commonly used. Coastal exposure often makes corrosion-resistant materials and proper underlayment systems especially important."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with insurance documentation and inspections?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We assist with inspections, permits, and documentation needed for insurance purposes and code compliance."
          }
        }
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Pompano Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/pompano-beach' }
    ]);

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add all schemas
    const schemas = [localBusinessSchema, faqSchema, breadcrumbSchema];
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      schemaScripts.forEach(script => script.remove());
    };
  }, []);

  const services = [
    {
      title: 'Roof Repair',
      description: "Expert repair services for tile, shingle, metal, and flat roofing systems — including repair and replacement of critical components such as roof flashing — in Pompano Beach. We also provide ongoing maintenance services to help prolong the lifespan of your roof.",
      path: '/roof-repair/pompano-beach',
      icon: Wrench
    },
    {
      title: 'Roof Inspection',
      description: "Comprehensive diagnostic inspections for residential and commercial properties. Regular inspections catch small issues before they become costly repairs, especially after severe weather events common in coastal Pompano Beach.",
      path: '/roof-inspection',
      icon: Shield
    },
    {
      title: 'New Roof Installation',
      description: "Most homeowners will eventually need to replace their old roof when it reaches the end of its lifespan or suffers extensive damage. A full roof replacement involves removing the entire existing roof and installing new materials to ensure long-term protection. The average roof replacement cost ranges from $5,800 to over $47,000, depending on roof size, material, and complexity. For example, replacing a typical 1,700-square-foot asphalt shingle roof costs between $6,000 to $9,000. Metal roofs and tile roofs are premium options with longer lifespans — metal roofing offers exceptional longevity, while clay tile roofs can last 50 to 100 years and slate tile roofs up to 150 years. Many homeowners choose financing options to manage the total cost over time. Explore our financing plans to budget for a new roof without compromising on quality.",
      path: '/roof-replacement-process',
      icon: Home
    },
    {
      title: 'Tile Roofing',
      description: "Concrete and clay tile installation, repair, and maintenance services. Clay tile roofs are a premium roofing material known for exceptional durability, lasting 50 to 100 years, and providing excellent noise isolation from wind and rain — making them ideal for Pompano Beach homes.",
      path: '/tile-roofing',
      icon: Home
    },
    {
      title: 'Flat Roofing',
      description: "TPO, modified bitumen, and built-up roofing for commercial properties. We also install Spray Polyurethane Foam (SPF) roof systems, which enhance energy efficiency, improve interior comfort, and can last 30 years or more with proper maintenance.",
      path: '/flat-roofing',
      icon: Building2
    },
    {
      title: 'Commercial Roofing',
      description: "Large-scale commercial roofing projects where the complexity of the roof structure can significantly affect the overall cost and scope, completed with minimal business disruption.",
      path: '/commercial-roofing',
      icon: Building2
    }
  ];

  const challenges = [
    {
      title: 'Salt Air & Coastal Exposure',
      description: "With the Atlantic Ocean right there, Pompano Beach properties — especially east of Federal Highway — face constant salt air exposure. We specify corrosion-resistant fasteners and materials rated for coastal environments."
    },
    {
      title: 'Condo & Multi-Family Buildings',
      description: "Pompano Beach has significant condo inventory, from beachfront towers to garden-style communities. We understand board approval processes, phased scheduling, and resident communication."
    },
    {
      title: 'Aging Building Stock',
      description: "Many Pompano Beach buildings date from the 1960s-1980s and are now facing major roof work. We assess these older systems thoroughly and bring them up to current HVHZ standards."
    },
    {
      title: 'Hurricane Season',
      description: "June through November, Pompano Beach is in the crosshairs. Our HVHZ-compliant installations are engineered for high winds and flying debris — because building code is the minimum, not the goal."
    }
  ];

  const whyChooseUs = [
    {
      title: 'Just Down the Road',
      description: "Our headquarters is in Deerfield Beach — just 3 miles away. We're practically neighbors. When you need us, we're there fast."
    },
    {
      title: 'Dual Licensed',
      description: "We hold both a General Contractor license (CGC-1526236) and Roofing Contractor license (CCC-1331464). When we find structural issues, deck rot, or stucco damage, we fix it — no waiting for another contractor."
    },
    {
      title: 'Condo & Commercial Experience',
      description: "We work with Pompano Beach condo associations and commercial property managers regularly. We know how to navigate board approvals, phase projects, and communicate with residents."
    },
    {
      title: '5-Year Certification Letters',
      description: "If your roof qualifies, we provide the certification letter required under Florida Statute 627.7011 to protect your insurance coverage."
    }
  ];

  const nearbyCities = [
    { name: 'Deerfield Beach', path: '/roofing-contractor-deerfield-beach-fl/' },
    { name: 'Fort Lauderdale', path: '/roofing-contractor-fort-lauderdale-fl/' },
    { name: 'Lighthouse Point', path: '/roofing-contractor-lighthouse-point-fl/' },
    { name: 'Coconut Creek', path: '/roofing-contractor-coconut-creek-fl/' },
    { name: 'Margate', path: '/roofing-contractor-margate-fl/' },
    { name: 'Boca Raton', path: '/roofing-contractor-boca-raton-fl/' }
  ];

  const faqs = [
    {
      question: 'How much does a new roof cost in Pompano Beach?',
      answer: "Roof replacement costs in Pompano Beach vary based on roof size, material, and building type. Because the city is in Florida's High Velocity Hurricane Zone (HVHZ), roofing systems must meet stricter standards, which can affect pricing."
    },
    {
      question: "Is Pompano Beach located in Florida's High Velocity Hurricane Zone (HVHZ)?",
      answer: "Yes. Pompano Beach falls within the HVHZ, meaning all roofing installations must meet enhanced wind uplift, fastening, and material approval requirements under Florida Building Code."
    },
    {
      question: 'Do you work with condo associations and property managers in Pompano Beach?',
      answer: "Yes. We regularly work with condo associations, HOAs, and property managers, coordinating inspections, documentation, and phased roofing projects for multi-family properties."
    },
    {
      question: 'What roofing materials are best for coastal properties in Pompano Beach?',
      answer: "Tile, metal, and flat roofing systems are commonly used. Coastal exposure often makes corrosion-resistant materials and proper underlayment systems especially important."
    },
    {
      question: 'Can you help with insurance documentation and inspections?',
      answer: "Yes. We assist with inspections, permits, and documentation needed for insurance purposes and code compliance."
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
            <Link to="/locations/deerfield-beach/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Pompano Beach</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Roofing Contractor in{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Pompano Beach, FL
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              All Phase Construction USA serves Pompano Beach with comprehensive residential and commercial roofing services. Our team of experienced local roofers delivers quality workmanship and reliable service backed by dual licensing in both Broward and Palm Beach counties. We specialize in tile, shingle, metal, and flat roofing systems designed for South Florida's climate challenges.
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Homeowners are invited to request a free estimate to explore options and receive transparent pricing. Working with a local contractor with a verified physical office at 590 Goolsby Blvd in Deerfield Beach ensures accountability and compliance with local building codes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>20+ Years Experience</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>HVHZ Certified</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Free Inspections</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Locally Owned</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Get Free Inspection
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
              Introduction to Roofing Services
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Roofing services are essential for maintaining the safety, value, and comfort of your home or business. Whether you need a roof replacement, roof repair, or a completely new roof installation, working with a licensed roofing contractor ensures that your project is handled with expertise and care. The scope of roofing services includes everything from minor repairs to full roof replacements, using a variety of materials to suit your needs and budget.
              </p>
              <p>
                For most homeowners, the average cost of a new shingle roof on a 1,700-square-foot house ranges from $6,000 to $9,000, with asphalt roof replacements typically costing between $3.50 to $6.00 per square foot. Labor costs, materials, and the complexity of the installation all play a role in determining the final price. Use our <Link to="/calculator" className="text-red-500 hover:text-red-400 underline transition-colors">Roof Cost Calculator</Link> for a personalized estimate, or call (754) 227-5605 to discuss your project.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                HVHZ Compliant
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Pompano Beach Falls Within Florida's High Velocity Hurricane Zone
              </h2>
              <p className="text-zinc-400 max-w-4xl mx-auto mb-8">
                As part of Broward County, Pompano Beach is designated a High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. This means stricter requirements for:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Materials</h3>
                <p className="text-zinc-400 leading-relaxed">
                  All roofing materials must have specific Florida Product Approvals for HVHZ use. We only install products that meet these requirements.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Installation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Fastener patterns, wind uplift calculations, and attachment methods must meet HVHZ standards. Our crews are trained specifically for these requirements.
                </p>
              </div>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  HVHZ projects require detailed permit applications, wind load calculations, and inspection documentation. We handle all of it.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-center max-w-3xl mx-auto italic">
              "Pompano Beach has taken direct hits from major hurricanes. HVHZ codes exist because we've learned what happens when roofs aren't built to withstand these storms. We install every roof as if the next one is coming this season."
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Services in Pompano Beach
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Full-service residential and commercial roofing — from repairs to complete replacements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    to={service.path}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex items-center text-red-500 font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Pompano Beach Roofs Face
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                Pompano Beach's coastal location and building mix create specific challenges:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                Roofing Considerations in Pompano Beach, Florida
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Factor</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Why It Matters in Pompano Beach</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">High Velocity Hurricane Zone (HVHZ)</td>
                        <td className="py-3 px-4">Pompano Beach is located within Florida's HVHZ, requiring stricter wind uplift ratings, fastening schedules, and approved roofing assemblies.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Coastal & Salt Air Exposure</td>
                        <td className="py-3 px-4">Properties closer to the ocean and Intracoastal are exposed to salt air, increasing the importance of corrosion-resistant materials and proper coatings.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Condos & Multi-Family Buildings</td>
                        <td className="py-3 px-4">Pompano Beach has a high concentration of condos and multi-family properties, requiring experience with large-scale roofing systems and HOA coordination.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Roofing Materials</td>
                        <td className="py-3 px-4">Tile, metal, and flat roofing systems are common, with material selection often influenced by wind resistance, building height, and long-term durability.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Metal Roofing Requirements</td>
                        <td className="py-3 px-4">Metal roofing systems must meet HVHZ approval standards, including UL listings, enhanced underlayment systems, and fire barrier requirements.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">Storm & Rain Exposure</td>
                        <td className="py-3 px-4">Heavy rain events and tropical systems make proper drainage, flashing, and waterproofing critical to roof performance.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed max-w-4xl mx-auto">
                Roofing in Pompano Beach requires specialized HVHZ expertise, coastal material knowledge, and experience with both residential and multi-family properties. All Phase Construction brings over 20 years of local experience to every project, ensuring your roof meets strict wind codes, resists salt air corrosion, and delivers long-term performance in South Florida's demanding coastal environment.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                Condo & Multi-Family Roofing in Pompano Beach
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">Consideration</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">What It Means for Pompano Beach Condos</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">High-Rise Wind Exposure</td>
                        <td className="py-3 px-4">Many Pompano Beach condos are mid- and high-rise structures exposed to elevated wind pressures requiring enhanced uplift-rated systems.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">HVHZ Compliance</td>
                        <td className="py-3 px-4">All condo roofing systems must meet Florida HVHZ standards, including approved assemblies and fastening schedules.</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Flat & Low-Slope Roofing</td>
                        <td className="py-3 px-4">TPO, modified bitumen, and other flat roofing systems are common and must be designed for drainage and long-term performance.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">HOA & Board Coordination</td>
                        <td className="py-3 px-4">Condo projects often require phased scheduling, documentation, and coordination with associations and property managers.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                Roofing Costs & Payment Options in Pompano Beach
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-6">
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Many Pompano Beach homeowners and condo associations explore costs and financing before committing to a roofing project. Understanding your budget and available payment options helps you plan effectively and make informed decisions about your property's most important investment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/roof-cost-calculator/"
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-red-600 transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                      Roof Cost Calculator
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      Get an instant estimate for your Pompano Beach roofing project based on your property details and material preferences.
                    </p>
                  </Link>
                  <Link
                    to="/blog/roof-pricing-financing-guide/"
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-red-600 transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                      Roof Pricing & Financing Guide
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      Learn about typical roofing costs, financing options, and payment plans available for South Florida properties.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Pompano Beach Property Owners Choose All Phase Construction
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Pompano Beach Zip Codes We Serve
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We serve all Pompano Beach zip codes including: 33060, 33061, 33062, 33063, 33064, 33068, 33069, 33072, 33074, and surrounding areas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Also Serving Nearby Communities
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                In addition to Pompano Beach, we provide roofing services throughout Broward County:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
              {nearbyCities.map((city) => (
                <Link
                  key={city.name}
                  to={city.path}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg px-4 py-3 hover:border-red-600 hover:bg-zinc-800/50 transition-all duration-300 text-zinc-300 hover:text-red-500 text-center text-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/locations/"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Pompano Beach"
            county="Broward"
            isHVHZ={true}
          />

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Questions from Pompano Beach Property Owners
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                      <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for a Free Roof Inspection in Pompano Beach?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your inspection today. We'll assess your roof's condition, identify any issues, and give you honest recommendations — no pressure, no obligation. And since we're right next door in Deerfield Beach, we can usually get there quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Free Inspection
              </Link>
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700"
              >
                <Phone className="w-5 h-5" />
                (754) 227-5605
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Free Inspection</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>No Obligation</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Same-Week Scheduling Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
