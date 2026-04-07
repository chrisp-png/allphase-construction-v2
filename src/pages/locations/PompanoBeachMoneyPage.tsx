import { useEffect } from 'react';
import MoneyPageEnhancements from '../../components/MoneyPageEnhancements';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Shield, Award, ChevronRight, Home, Building2, Wrench, CheckCircle2, Users, FileText, HardHat, Hammer, BookOpen, ClipboardCheck } from 'lucide-react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';
import InternalLinksBlock from '../../components/InternalLinksBlock';
import { getCityCoordinates } from '../../data/cityCoordinates';
import { generateSEOMetadata } from '../../config/seoTitles';

export default function PompanoBeachMoneyPage() {
  const cityName = 'Pompano Beach';
  const county = 'Broward County';
  const coordinates = getCityCoordinates(cityName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": `All Phase Construction USA - ${cityName}`,
    "image": "https://allphaseconstructionfl.com/image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2311 SW 2nd St",
      "addressLocality": "Deerfield Beach",
      "addressRegion": "FL",
      "postalCode": "33442",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates?.latitude || 26.2379,
      "longitude": coordinates?.longitude || -80.1248
    },
    "telephone": "+1-754-227-5605",
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Florida",
        "containedInPlace": {
          "@type": "Country",
          "name": "US"
        }
      }
    },
    "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-16:00"
  };

  const services = [
    {
      icon: Home,
      title: 'Residential Roofing',
      description: 'Complete residential roofing solutions for Pompano Beach homes. From single-family residences to luxury estates, we install and maintain tile, shingle, metal, and flat roofing systems designed for South Florida\'s demanding climate. Every installation is backed by manufacturer warranties and our commitment to workmanship excellence.',
      link: '/residential-roofing'
    },
    {
      icon: Building2,
      title: 'Commercial Roofing',
      description: 'Advanced commercial roofing systems for Pompano Beach businesses. We specialize in flat, TPO, modified bitumen, and standing seam metal roofs for retail centers, office buildings, and industrial facilities. Our team understands the importance of minimal disruption to your operations while delivering long-lasting protection.',
      link: '/commercial-roofing'
    },
    {
      icon: Wrench,
      title: 'Roof Repair Services',
      description: 'Expert roof repair services addressing leaks, storm damage, and wear throughout Pompano Beach. Our skilled technicians diagnose issues quickly and provide cost-effective solutions that extend your roof\'s lifespan. From emergency tarping to comprehensive repairs, we respond rapidly to protect your property.',
      link: '/roof-repair/pompano-beach'
    },
    {
      icon: CheckCircle2,
      title: 'Roof Inspections',
      description: 'Thorough roof inspections for Pompano Beach properties by certified professionals. We provide detailed assessments for insurance claims, pre-purchase evaluations, routine maintenance, and post-storm documentation. Our comprehensive reports include photos, condition ratings, and prioritized repair recommendations.',
      link: '/roof-inspection/pompano-beach'
    }
  ];

  const nearbyCities = [
    { name: 'Deerfield Beach', slug: 'deerfield-beach' },
    { name: 'Lighthouse Point', slug: 'lighthouse-point' },
    { name: 'Coconut Creek', slug: 'coconut-creek' },
    { name: 'Margate', slug: 'margate' },
    { name: 'Coral Springs', slug: 'coral-springs' },
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
    { name: 'Boca Raton', slug: 'boca-raton' },
    { name: 'Parkland', slug: 'parkland' }
  ];

  return (
    <>
      <SEO
        title={generateSEOMetadata('/locations/pompano-beach').title}
        description={generateSEOMetadata('/locations/pompano-beach').description}
        schema={localBusinessSchema}
        noindex={false}
      />
      <div className="bg-zinc-950 text-white min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
                <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/locations/service-areas" className="hover:text-red-600 transition-colors">Service Areas</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">{cityName}</span>
              </nav>

              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-red-600" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Expert Roofing Contractor in {cityName}, FL
                </h1>
                <div data-marker="above-fold-proof" className="mt-4 mb-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-black/40 backdrop-blur-sm border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold text-white">
                  <span className="text-yellow-400">★ 4.8 Google</span>
                  <span className="text-red-400">·</span>
                  <span>2,500+ Roofs</span>
                  <span className="text-red-400">·</span>
                  <span>Dual-Licensed Since 2005</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  All Phase Construction USA brings over three decades of roofing excellence to Pompano Beach, serving residential and commercial property owners throughout {county}. As a dual-licensed roofing contractor (CCC-1331464) and general contractor (CGC-1526236), we deliver comprehensive roofing solutions that meet South Florida's demanding building codes and withstand our region's intense weather conditions.
                </p>
                <p>
                  Operating from our Deerfield Beach headquarters, our team of certified roofing professionals serves Pompano Beach with a complete range of services including new roof installations, roof replacements, emergency repairs, preventative maintenance, and thorough inspections. We specialize in tile, shingle, metal, and flat roofing systems, with particular expertise in HVHZ (High Velocity Hurricane Zone) installations that provide maximum protection for coastal properties.
                </p>
                <p>
                  Every project we undertake in Pompano Beach reflects our commitment to craftsmanship, transparency, and customer satisfaction. From your initial consultation through final inspection and beyond, we maintain clear communication, respect your property, and deliver results that exceed expectations. Whether you need routine maintenance, storm damage repairs, or a complete roof replacement, our local expertise ensures your roofing investment is protected for decades to come.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:754-227-5605"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" />
                  (754) 227-5605
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Free Inspection
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Info */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fast Response Time</h3>
                  <p className="text-zinc-400">
                    Serving {cityName} from our nearby Deerfield Beach headquarters. Quick response for emergencies and scheduled services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fully Licensed & Insured</h3>
                  <p className="text-zinc-400">
                    Dual-licensed roofing contractor (CCC-1331464) and general contractor (CGC-1526236) with comprehensive insurance coverage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certified Professionals</h3>
                  <p className="text-zinc-400">
                    HVHZ certified installers with manufacturer certifications from leading roofing product suppliers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Roofing Services in {cityName}
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Professional roofing solutions tailored to South Florida's climate and building requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={index}
                    to={service.link}
                    className="group bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                          <Icon className="w-6 h-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 text-red-600 font-semibold">
                          Learn More
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9 New Sections */}

        {/* 1. Roofing Project Planning */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                  <FileText className="w-4 h-4" />
                  Strategic Planning
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Comprehensive Roofing Project Planning in {cityName}
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Every successful roofing project in Pompano Beach begins with meticulous planning. Our experienced project managers work closely with you to understand your goals, budget, and timeline, developing a detailed roadmap that ensures your project proceeds smoothly from start to finish. Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 underline">Roof Cost Calculator</Link> for a preliminary estimate based on your roof type and square footage.
                  </p>
                  <p>
                    We evaluate your property's specific needs, considering factors like roof age, condition, architectural style, and local building requirements. Our planning process includes material selection guidance, weather scheduling considerations, and coordination with HOA requirements where applicable. We provide transparent timelines and keep you informed at every stage. <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline">Financing options</Link> are available to help manage the total cost of your roofing project.
                  </p>
                  <p>
                    For commercial projects, we understand the importance of minimizing business disruption. Our strategic planning includes phased installation options, after-hours work schedules, and coordination with your operational needs. Whether residential or commercial, our thorough planning approach eliminates surprises and ensures predictable, successful outcomes.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Our Planning Process</h3>
                <div className="space-y-4">
                  {[
                    'Initial property assessment and documentation',
                    'Material selection and cost estimation',
                    'Timeline development and scheduling',
                    'Permit coordination and HOA approval',
                    'Weather contingency planning',
                    'Site logistics and access planning',
                    'Communication protocols establishment'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Expert Consultation */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Consultation Topics We Cover</h3>
                <div className="space-y-4">
                  {[
                    'Roof system comparisons and recommendations',
                    'Material durability and warranty options',
                    'Energy efficiency and cooling cost reduction',
                    'Hurricane protection and wind ratings',
                    'Insurance requirements and documentation',
                    'Budget planning and financing options',
                    'Long-term maintenance considerations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                  <Users className="w-4 h-4" />
                  Expert Guidance
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Professional Roofing Consultation Services
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Making informed roofing decisions requires expert guidance. Our free consultation services in Pompano Beach provide you with the knowledge and insights needed to choose the best roofing solution for your property. We take time to understand your concerns, answer your questions, and explain your options in clear, straightforward language.
                  </p>
                  <p>
                    During your consultation, we assess your current roof condition, discuss the advantages and considerations of different roofing systems, and provide honest recommendations based on your specific situation. We explain warranty coverages, expected lifespans, maintenance requirements, and long-term costs to help you make confident decisions.
                  </p>
                  <p>
                    Our consultation process is pressure-free and educational. We believe informed customers make the best decisions. Whether you're dealing with immediate repairs, planning a future replacement, or simply want to understand your roof's condition, our team provides valuable expertise without sales pressure or obligation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Materials Selection */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Hammer className="w-4 h-4" />
                Premium Materials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quality Roofing Materials for {cityName} Properties
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                We partner with industry-leading manufacturers to provide superior roofing products designed for South Florida's climate
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Concrete & Clay Tile',
                  description: 'Premium tile roofing systems offering exceptional durability, energy efficiency, and Mediterranean aesthetic appeal. Ideal for luxury homes and historic properties.',
                  features: ['50+ year lifespan', 'Class A fire rating', 'Energy Star certified'],
                  link: '/tile-roofing'
                },
                {
                  title: 'Architectural Shingles',
                  description: 'High-performance asphalt shingles with superior wind resistance and comprehensive warranty coverage. Cost-effective solution with excellent durability.',
                  features: ['130+ mph wind ratings', '30-50 year warranties', 'Algae resistance'],
                  link: '/shingle-roofing'
                },
                {
                  title: 'Metal Roofing Systems',
                  description: 'Standing seam and mechanically seamed metal roofs providing maximum wind protection and modern aesthetics. Excellent for coastal environments.',
                  features: ['Lifetime durability', 'Maximum wind protection', 'Cool roof technology'],
                  link: '/metal-roofing'
                },
                {
                  title: 'Flat Roof Systems',
                  description: 'Advanced TPO, modified bitumen, and built-up roofing systems for commercial properties. Superior water drainage and leak protection.',
                  features: ['20-30 year systems', 'Energy efficient', 'Minimal maintenance'],
                  link: '/flat-roofing'
                }
              ].map((material, index) => (
                <Link key={index} to={material.link} className="group bg-zinc-950 border border-zinc-800 hover:border-red-600 rounded-xl p-6 transition-all">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">{material.title}</h3>
                  <p className="text-zinc-400 mb-4 leading-relaxed">
                    {material.description}
                  </p>
                  <div className="space-y-2">
                    {material.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span className="text-sm text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Safety Standards */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                  <HardHat className="w-4 h-4" />
                  Safety First
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Uncompromising Safety Standards
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Safety is our highest priority on every Pompano Beach roofing project. Our comprehensive safety program protects our team members, your property, and everyone in the surrounding area. We maintain strict OSHA compliance and implement industry best practices that exceed minimum safety requirements.
                  </p>
                  <p>
                    Every crew member receives ongoing safety training and certification. We use professional fall protection systems, proper scaffolding, and secure material handling procedures on every job. Our equipment is regularly inspected and maintained to ensure reliable operation and maximum safety.
                  </p>
                  <p>
                    Property protection is equally important. We implement comprehensive site protection measures including ground-level barriers, magnetic sweepers for nail cleanup, and careful debris management. Our systematic approach prevents damage to landscaping, driveways, and surrounding structures while maintaining a clean, organized work environment.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Our Safety Protocols</h3>
                <div className="space-y-4">
                  {[
                    'OSHA-compliant fall protection systems',
                    'Daily safety briefings and site inspections',
                    'Comprehensive insurance and bonding',
                    'Professional-grade equipment and tools',
                    'Property protection and debris management',
                    'Traffic control and pedestrian safety',
                    'Emergency response procedures'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Maintenance Programs */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Maintenance Program Benefits</h3>
                <div className="space-y-4">
                  {[
                    'Scheduled bi-annual roof inspections',
                    'Priority emergency repair service',
                    'Gutter cleaning and drainage maintenance',
                    'Sealant and flashing inspections',
                    'Documentation for insurance and warranty',
                    'Early problem detection and resolution',
                    'Extended roof system lifespan'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/roof-maintenance-programs"
                  className="mt-6 inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
                >
                  View Maintenance Programs
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                  <ClipboardCheck className="w-4 h-4" />
                  Preventative Care
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Proactive Roof Maintenance Programs
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Regular maintenance is the most cost-effective way to protect your roofing investment in Pompano Beach. Our comprehensive maintenance programs identify and address minor issues before they become major problems, significantly extending your roof's lifespan while preventing costly emergency repairs.
                  </p>
                  <p>
                    Our maintenance services include thorough inspections of all roofing components, cleaning of gutters and drainage systems, sealant renewal, and minor repairs as needed. We document conditions with detailed reports and photos, providing valuable records for insurance and warranty purposes.
                  </p>
                  <p>
                    Program members receive priority scheduling for emergency services, discounted repair rates, and peace of mind knowing their roof is professionally monitored. Whether you have a tile, shingle, metal, or flat roof system, regular maintenance prevents small problems from becoming expensive disasters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Professional Removal */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                  <Wrench className="w-4 h-4" />
                  Expert Removal
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Professional Roof Removal & Disposal
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Proper roof removal is critical to the success of your replacement project. Our experienced crews in Pompano Beach use systematic removal techniques that protect your property's structure, landscaping, and surrounding areas while efficiently removing old roofing materials.
                  </p>
                  <p>
                    We utilize professional equipment including roofing carts, debris chutes, and protective barriers to contain materials and minimize mess. Our magnetic sweepers ensure thorough nail cleanup, while our careful handling prevents damage to gutters, fascia boards, and architectural details.
                  </p>
                  <p>
                    Environmental responsibility guides our disposal practices. We recycle materials whenever possible and ensure proper disposal of all waste in accordance with local regulations. Our efficient removal process keeps projects on schedule while maintaining the highest standards of cleanliness and property protection.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Our Removal Process</h3>
                <div className="space-y-4">
                  {[
                    'Property protection setup and barriers',
                    'Systematic material removal by sections',
                    'Deck inspection and repair as needed',
                    'Debris containment and daily cleanup',
                    'Magnetic sweeps for nail removal',
                    'Responsible recycling and disposal',
                    'Final site inspection and cleanup'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Strategic Partnerships */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Award className="w-4 h-4" />
                Industry Partnerships
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Partnerships with Leading Manufacturers
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Our strategic partnerships ensure access to premium materials, extended warranties, and the latest roofing technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Manufacturer Certifications',
                  description: 'Factory-certified installers for major roofing brands, ensuring proper installation techniques and full warranty coverage.'
                },
                {
                  title: 'Extended Warranty Programs',
                  description: 'Access to enhanced warranty options including lifetime material warranties and workmanship guarantees.'
                },
                {
                  title: 'Latest Product Innovation',
                  description: 'First access to new roofing technologies, improved materials, and advanced installation systems.'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Certified Partner Brands</h3>
              <p className="text-zinc-300 leading-relaxed">
                We maintain certified installer status with industry-leading manufacturers including GAF, CertainTeed, Owens Corning, TAMKO, Eagle Roofing, Boral, FT Synthetics, Johns Manville, and Firestone. These partnerships provide our Pompano Beach customers with access to premium materials, comprehensive warranties, and the confidence that comes from professionally installed roofing systems backed by manufacturers' guarantees.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Educational Resources */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <BookOpen className="w-4 h-4" />
                Knowledge Center
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Roofing Education & Resources
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Empowering property owners with knowledge about roofing systems, maintenance, and best practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link to="/learning-center" className="group bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-8 transition-all">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                  Learning Center
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Comprehensive guides covering roof types, materials, maintenance, inspections, and replacement timing. Learn how to protect your investment and make informed decisions.
                </p>
                <div className="inline-flex items-center gap-2 text-red-600 font-semibold">
                  Visit Learning Center
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link to="/roof-replacement" className="group bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-8 transition-all">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                  Roof Replacement Process
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Step-by-step overview of what to expect during your roof replacement project, from initial consultation through final inspection and warranty activation.
                </p>
                <div className="inline-flex items-center gap-2 text-red-600 font-semibold">
                  Learn About Our Process
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link to="/pricing-guide" className="group bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-8 transition-all">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                  Roofing Cost Guide
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Transparent pricing information for different roofing systems, factors affecting costs, and tips for budgeting your roofing project in South Florida.
                </p>
                <div className="inline-flex items-center gap-2 text-red-600 font-semibold">
                  View Pricing Guide
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link to="/blog" className="group bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-8 transition-all">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                  Roofing Blog & Updates
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Latest articles about roofing trends, maintenance tips, storm preparation, industry news, and answers to frequently asked questions from Pompano Beach homeowners.
                </p>
                <div className="inline-flex items-center gap-2 text-red-600 font-semibold">
                  Read Our Blog
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Popular Roofing Guides</h3>
              <p className="text-zinc-300 leading-relaxed">
                Explore our most popular guides: <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-500 hover:text-red-400 underline">How Wind Mitigation Saves on Insurance</Link>, <Link to="/blog/how-to-file-a-roof-insurance-claim-after-storm-damage" className="text-red-500 hover:text-red-400 underline">Filing a Roof Insurance Claim After Storm Damage</Link>, <Link to="/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not" className="text-red-500 hover:text-red-400 underline">Understanding Your Roofing Warranty</Link>, <Link to="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive" className="text-red-500 hover:text-red-400 underline">Spotting Early Signs of Roof Damage</Link>, and <Link to="/blog/how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid" className="text-red-500 hover:text-red-400 underline">How to Hire a Roofer in South Florida</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Permitting & Compliance */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                  <FileText className="w-4 h-4" />
                  Full Compliance
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Permitting & Code Compliance Expertise
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Navigating local building codes and permit requirements can be complex. Our team handles all <Link to="/blog/why-homeowners-should-avoid-pulling-their-own-roofing-permit-in-south-florida" className="text-red-500 hover:text-red-400 underline">permitting requirements</Link> for your Pompano Beach roofing project, ensuring full compliance with {county} building codes, Florida Building Code, and HVHZ regulations where applicable.
                  </p>
                  <p>
                    We manage the entire permitting process from application through final inspection. Our experience with local building departments ensures efficient approval and proper documentation. We coordinate required inspections, address any concerns, and ensure your project meets or exceeds all code requirements.
                  </p>
                  <p>
                    Proper permitting protects your investment. Permitted work ensures insurance coverage, maintains property value, and provides documentation of code-compliant construction. Our comprehensive knowledge of local requirements means your project proceeds smoothly without delays or complications.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Permitting Services</h3>
                <div className="space-y-4">
                  {[
                    'Complete permit application and processing',
                    'Florida Building Code compliance',
                    'HVHZ certification and documentation',
                    'HOA approval coordination',
                    'Inspection scheduling and management',
                    'Code compliance verification',
                    'Final approval and documentation'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Block */}
        <InternalLinksBlock
          cityName={cityName}
          citySlug="pompano-beach"
        />

        {/* Nearby Service Areas */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Serving Surrounding Communities
              </h2>
              <p className="text-xl text-zinc-400">
                Professional roofing services throughout {county} and Palm Beach County
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyCities.map((city, index) => (
                <Link
                  key={index}
                  to={`/locations/${city.slug}`}
                  className="bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-lg p-4 text-center transition-all group"
                >
                  <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                  <div className="font-semibold group-hover:text-red-600 transition-colors">
                    {city.name}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/locations/service-areas"
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
              >
                View All Service Areas
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <MoneyPageEnhancements cityName="Pompano Beach" county="Broward" hvhz={true} />
        <Contact />

        {/* Footer Content */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Your Trusted Roofing Partner in {cityName}, Florida
              </h2>
              <div className="text-zinc-400 space-y-4 leading-relaxed">
                <p>
                  All Phase Construction USA has earned its reputation as Pompano Beach's premier roofing contractor through three decades of exceptional service, technical expertise, and unwavering commitment to customer satisfaction. As a dual-licensed contractor holding both roofing contractor (CCC-1331464) and general contractor (CGC-1526236) licenses, we bring comprehensive construction knowledge to every roofing project we undertake.
                </p>
                <p>
                  Our Deerfield Beach headquarters positions us to serve Pompano Beach and surrounding communities with rapid response times for both emergency repairs and scheduled services. We maintain a fleet of fully-equipped service vehicles, employ certified roofing professionals, and utilize advanced equipment that enables us to handle projects of any size or complexity with equal expertise.
                </p>
                <p>
                  What sets us apart is our comprehensive approach to roofing. We don't simply install roofs—we provide complete roofing solutions that address your property's specific needs, climate challenges, and aesthetic goals. Our team includes specialists in residential and commercial roofing, HVHZ installations, flat roofing systems, and historic restoration, ensuring expert guidance regardless of your project requirements.
                </p>
                <p>
                  Quality materials form the foundation of every lasting roof. We maintain certified installer status with leading manufacturers including GAF, CertainTeed, Owens Corning, TAMKO, Eagle Roofing, and Boral, providing access to premium products backed by industry-leading warranties. Our manufacturer partnerships also ensure we stay current with the latest roofing technologies and installation techniques.
                </p>
                <p>
                  Customer education is central to our philosophy. We believe informed property owners make the best decisions. Our team takes time to explain your options, answer questions, and provide transparent information about costs, timelines, and long-term considerations. We never pressure you into decisions or use high-pressure sales tactics.
                </p>
                <p>
                  From initial consultation through final inspection and beyond, we maintain clear communication and professional standards. Our project managers keep you informed of progress, our crews respect your property, and our quality control processes ensure every detail meets our exacting standards. We stand behind our work with comprehensive warranties and responsive service.
                </p>
                <p>
                  For homeowners in Pompano Beach seeking reliable roofing services, emergency repairs, or planning future roof replacement, All Phase Construction USA delivers the expertise, professionalism, and quality craftsmanship your property deserves. Contact us today at (754) 227-5605 for your free consultation and inspection. Let us show you why Pompano Beach residents trust us with their most important investment—protecting their property from above.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
