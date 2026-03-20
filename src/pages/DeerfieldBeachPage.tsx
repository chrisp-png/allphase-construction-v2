import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Home, Wind, Building2, Wrench, ArrowRight, ChevronDown, ChevronUp, FileCheck, ClipboardCheck, MapPin } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function DeerfieldBeachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Deerfield Beach Roofing Company | HQ Since 2005 | All Phase USA';

        // Canonical tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://allphaseconstructionfl.com/locations/deerfield-beach');

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Licensed roofing contractor in Deerfield Beach, FL since 2005. HVHZ-certified, dual-licensed (CGC-1526236 & CCC-1331464). Tile, metal, shingle & flat roofing. Free inspections. Call (754) 227-5605.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Licensed roofing contractor in Deerfield Beach, FL since 2005. HVHZ-certified, dual-licensed (CGC-1526236 & CCC-1331464). Tile, metal, shingle & flat roofing. Free inspections. Call (754) 227-5605.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Deerfield Beach roofing contractor, Deerfield Beach roofer, Deerfield Beach HVHZ roofing, Deerfield Beach roof permits, Deerfield Beach roof inspections, Deerfield Beach roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'Deerfield Beach roofing contractor, Deerfield Beach roofer, Deerfield Beach HVHZ roofing, Deerfield Beach roof permits, Deerfield Beach roof inspections, Deerfield Beach roofing company';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Deerfield Beach');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Deerfield Beach',
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
          "name": "Is Deerfield Beach your main service location?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Deerfield Beach is our primary operational, permitting, and inspection hub. All projects are managed from our Deerfield Beach headquarters."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle Deerfield Beach roofing permits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We manage all Deerfield Beach roofing permits, inspection scheduling, and documentation to ensure every project passes inspection without delay."
          }
        },
        {
          "@type": "Question",
          "name": "Are your installations HVHZ compliant in Deerfield Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All Deerfield Beach installations are executed to meet High Velocity Hurricane Zone standards, from underlayment selection to fastening patterns."
          }
        }
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Deerfield Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/deerfield-beach' }
    ]);

    // Community sponsorship — strengthens local entity signals
    if (localBusinessSchema) {
      localBusinessSchema.sponsor = {
        '@type': 'Organization',
        name: 'Beach Rides FL',
        url: 'https://beachridesfl.com/',
        description: 'Local shuttle service serving Deerfield Beach residents and visitors'
      };
    }

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

  const roofSystems = [
    {
      title: 'Shingle Roofing for Deerfield Beach Homes',
      description: 'Engineered for Deerfield Beach wind exposure and municipal inspection requirements. HVHZ-rated shingles with proper fastening patterns ensure insurance compliance and long-term performance for Deerfield Beach properties.',
      icon: Home,
      path: '/shingle-roofing/'
    },
    {
      title: 'Tile Roofing Systems Engineered for Deerfield Beach',
      description: 'Concrete and clay tile systems designed for Deerfield Beach coastal conditions. Foam-set installation meets HVHZ standards and satisfies insurance carrier documentation requirements for Deerfield Beach homes.',
      icon: Home,
      path: '/tile-roofing/'
    },
    {
      title: 'Mechanically Seamed Metal Roofing for Deerfield Beach',
      description: 'Standing seam metal roofing systems approved for Deerfield Beach hurricane zones. Corrosion-resistant materials withstand salt exposure while meeting strict Deerfield Beach inspection criteria and insurance underwriting standards.',
      icon: Shield,
      path: '/metal-roofing/'
    },
    {
      title: 'Flat Roofing Systems for Deerfield Beach Properties',
      description: 'TPO, PVC, and modified bitumen installations for Deerfield Beach commercial buildings and modern homes. Systems engineered for ponding water management and Deerfield Beach inspection compliance.',
      icon: Building2,
      path: '/flat-roofing/'
    }
  ];

  const whyChooseReasons = [
    'Deerfield Beach permit experience',
    'Deerfield Beach inspection familiarity',
    'Deerfield Beach HVHZ compliance',
    'Deerfield Beach insurance documentation',
    'Deerfield Beach-based project oversight'
  ];

  const serviceAreas = [
    { name: 'Boca Raton', path: '/locations/boca-raton/' },
    { name: 'Pompano Beach', path: '/locations/pompano-beach/' },
    { name: 'Lighthouse Point', path: '/locations/lighthouse-point/' },
    { name: 'Delray Beach', path: '/locations/delray-beach/' }
  ];

  const faqs = [
    {
      question: 'How much does a new roof cost in Deerfield Beach?',
      answer: "Roof replacement costs in Deerfield Beach typically range from $10,000 to $35,000+ depending on size, material, and complexity. HVHZ requirements in Deerfield Beach add some cost compared to non-HVHZ areas, but that investment pays off when storms hit Deerfield Beach. We provide free Deerfield Beach inspections and detailed quotes."
    },
    {
      question: 'Do you pull permits for roofing work in Deerfield Beach?',
      answer: "Yes, always. As an HVHZ city, Deerfield Beach requires permits for virtually all roofing work — including most repairs. We handle all Deerfield Beach permit applications, wind load calculations, and inspection scheduling."
    },
    {
      question: 'Why does HVHZ matter for my Deerfield Beach roof?',
      answer: "The High Velocity Hurricane Zone designation means stricter building codes for Deerfield Beach designed to withstand major hurricanes. Materials for Deerfield Beach roofs must be specifically approved for HVHZ use, installation methods are more rigorous, and Deerfield Beach inspections are more detailed."
    },
    {
      question: 'Can you help me keep my homeowner\'s insurance in Deerfield Beach?',
      answer: "Yes. Under Florida Statute 627.7011, if we can certify your Deerfield Beach roof has 5+ years of remaining useful life, your insurer cannot drop you based on roof age alone. A comprehensive roof restoration can often bring an older Deerfield Beach roof up to certification standards."
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
            <Link to="/locations/service-areas/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Deerfield Beach</span>
          </nav>

          {/* HERO SECTION */}
          <div className="text-center max-w-4xl mx-auto mb-20">
                      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-4 h-4 text-[#C5A572]" />
            <span className="text-[#C5A572] text-sm font-medium">Deerfield Beach, FL — Broward County HQ</span>
          </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Deerfield Beach Roofing Company — Our Home Base Since 2005
            </h1>

                      <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5 max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#C5A572] text-lg">🛡</span>
              <span className="text-white font-bold text-base">Dual-Licensed Roofing & General Contractor</span>
            </div>
            <div className="text-[#C5A572] text-sm font-medium mb-1">CCC-1331464 — Florida Certified Roofing Contractor</div>
            <div className="text-[#C5A572] text-sm font-medium mb-3">CGC-1526236 — Certified General Contractor</div>
            <div className="text-gray-400 text-xs">HVHZ Certified • Serving South Florida Since 2005 • 2,500+ Projects</div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#C5A572] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#b8935f] transition-colors">Schedule 21-Point Inspection</a>
            <a href="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">Emergency Roof Repair</a>
          </div>

          <div className="mt-5">
            <a href="tel:7542275605" className="text-2xl font-bold text-[#C5A572] hover:text-white transition-colors">(754) 227-5605</a>
            <p className="text-gray-400 text-sm mt-1">24/7 Emergency Service Available • Free Estimates</p>
          </div>

            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-8 border border-red-600/20">
              <Shield className="w-4 h-4" />
              Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236) | HVHZ
            </div>

            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Serving Deerfield Beach (33441/33442) and Broward & Palm Beach Counties with code-compliant roof repair and roof replacement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule a Roof Assessment
              </Link>
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700"
              >
                <Phone className="w-5 h-5" />
                Call (754) 227-5605
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <img
              src="/deerfield-beach-fl-roofing-services.png"
              alt="Deerfield Beach Florida city sign representing the local service area for a Deerfield Beach roofing contractor"
              title="Deerfield Beach Roofing Contractor – Local Service Area"
              loading="lazy"
              decoding="async"
              className="w-full rounded-lg"
            />
          </div>

          {/* HIRING GUIDE CALLOUT */}
          <div className="mb-20 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border border-red-600/20 rounded-lg p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Hiring a Roofing Contractor in South Florida?
                  </h3>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    Learn what to look for when selecting a roofer in the High Velocity Hurricane Zone. Our comprehensive guide covers HVHZ requirements, dual licensing, wind mitigation, insurance documentation, and the questions you should ask before signing a contract.
                  </p>
                  <Link
                    to="/locations/deerfield-beach/how-to-hire-a-roofing-contractor/"
                    className="inline-flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <span>Read the Complete Hiring Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: DEERFIELD BEACH ROOFING SERVICES */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Roofing Services Designed for <Link to="/locations/deerfield-beach/" className="hover:text-red-600 transition-colors">Deerfield Beach</Link> Homes
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                All Phase Construction USA provides roofing systems engineered specifically for <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link> properties, where municipal inspections, High Velocity Hurricane Zone (HVHZ) standards, and insurance carrier scrutiny demand precision. Our <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link> roofing process is built around local code enforcement, material performance, and long-term risk mitigation.
              </p>
            </div>
          </div>

          {/* SECTION 3: DEERFIELD BEACH CODE & PERMIT EXPERTISE */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                <Link to="/locations/deerfield-beach/" className="hover:text-red-600 transition-colors">Deerfield Beach</Link> Roofing Permits, Inspections, and HVHZ Compliance
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Roofing work in <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link> requires strict adherence to Broward County and municipal requirements. Our team manages <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link> roofing permits, inspection scheduling, and documentation to ensure every project passes inspection without delay. From underlayment selection to fastening patterns, our <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link> installations are executed to meet HVHZ standards.
              </p>
            </div>
          </div>

          {/* SECTION 4: DEERFIELD BEACH ROOF SYSTEMS WE INSTALL */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roof Systems Approved for <Link to="/locations/deerfield-beach/" className="hover:text-red-600 transition-colors">Deerfield Beach</Link> Conditions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {roofSystems.map((system) => {
                const Icon = system.icon;
                return (
                  <Link
                    key={system.title}
                    to={system.path}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-600 transition-colors">
                      {system.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{system.description}</p>
                    <div className="flex items-center text-red-500 font-medium mt-4">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* SECTION 5: DEERFIELD BEACH INSURANCE & DOCUMENTATION */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Insurance-Defensible Roofing for <Link to="/locations/deerfield-beach/" className="hover:text-red-600 transition-colors">Deerfield Beach</Link> Properties
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Insurance carriers evaluating <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link> roofs require clear proof of compliance. Our <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link> roofing projects include photo documentation, permit records, fastening verification, and material approvals to support underwriting, claims, and wind mitigation reporting.
              </p>
            </div>
          </div>

          {/* SECTION 6: DEERFIELD BEACH SERVICE AREA EXPANSION */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Roofing Service Areas Near <Link to="/locations/deerfield-beach/" className="hover:text-red-600 transition-colors">Deerfield Beach</Link>
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
                Our <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link> roofing operations extend outward to nearby communities, with <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link> serving as the central inspection, permitting, and logistics hub.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-6">
              {serviceAreas.map((area) => (
                <Link
                  key={area.name}
                  to={area.path}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg px-4 py-3 hover:border-red-600 hover:bg-zinc-800/50 transition-all duration-300 text-zinc-300 hover:text-red-500 text-center"
                >
                  {area.name}
                </Link>
              ))}
            </div>
            <p className="text-zinc-500 text-center text-sm italic max-w-2xl mx-auto">
              All service areas operate under the same <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link>-based standards, supervision, and documentation protocols.
            </p>
          </div>

          {/* SECTION 7: WHY HOMEOWNERS CHOOSE DEERFIELD BEACH ROOFERS WHO ARE LOCAL */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why <Link to="/locations/deerfield-beach/" className="hover:text-red-600 transition-colors">Deerfield Beach</Link> Homeowners Choose All Phase Construction USA
              </h2>
            </div>
            <div className="max-w-3xl mx-auto bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <div className="space-y-4">
                {whyChooseReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">
                      {reason.split('Deerfield Beach').map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">
                              Deerfield Beach
                            </Link>
                          )}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* EMBEDDED CALCULATOR */}
          <EmbeddedRoofCalculator
            city="Deerfield Beach"
            county="Broward"
            isHVHZ={true}
          />

          {/* BEST ROOFERS CALLOUT */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Looking for the Best Roofers in Deerfield Beach?
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Learn how to identify the most qualified roofing contractors in Deerfield Beach, what credentials matter, and what questions to ask before hiring.
                </p>
                <Link
                  to="/locations/deerfield-beach/best-roofers-deerfield-beach"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  <span>Best Roofers in Deerfield Beach</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              <Link to="/locations/deerfield-beach/" className="hover:text-red-600 transition-colors">Deerfield Beach</Link> Roofing Questions from Homeowners
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
                      <p className="text-zinc-400 leading-relaxed">
                        {faq.answer.split('Deerfield Beach').map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">
                                Deerfield Beach
                              </Link>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* COMMUNITY SPONSORSHIP — BEACH RIDES */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-1">
                    <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-2">Proud Community Sponsor</p>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Supporting Deerfield Beach Rides
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                      All Phase Construction USA is a proud sponsor of{' '}
                      <a
                        href="https://beachridesfl.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-red-400 underline transition-colors"
                      >
                        Beach Rides
                      </a>
                      , Deerfield Beach's local shuttle service. You'll find our logo on their van as it runs routes throughout the community, serving residents and visitors alike.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                      We've called Deerfield Beach home since 2005, and giving back to the community that trusts us with their roofs is something we take seriously. Whether it's sponsoring local transportation, supporting neighborhood events, or simply being a reliable neighbor — we're here for the long haul.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Schedule a <Link to="/locations/deerfield-beach/" className="hover:text-red-600 transition-colors">Deerfield Beach</Link> Roof Assessment
            </h2>
            <p className="text-zinc-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a comprehensive roof assessment with a <Link to="/locations/deerfield-beach/" className="text-red-500 hover:text-red-400 underline transition-colors">Deerfield Beach</Link> roofing contractor who understands local code, inspections, and insurance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
              >
                Schedule Assessment
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
        </div>
      </div>
    </div>
  );
}
