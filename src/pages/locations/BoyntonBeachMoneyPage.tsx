/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Boynton Beach Custom Location Page
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, FileCheck, Wrench, Camera, Building2, Hammer, FileText, BookOpen } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function BoyntonBeachMoneyPage() {
  const cityName = 'Boynton Beach';
  const county = 'Palm Beach County';
  const slug = 'boynton-beach';

  useEffect(() => {
    document.title = `${cityName} Roofing Contractor | All Phase Construction USA`;
  }, []);

  const coordinates = getCityCoordinates(cityName);

  const canonicalUrl = typeof window !== 'undefined'
    ? window.location.href.split('?')[0].split('#')[0]
    : `https://allphaseconstructionfl.com/locations/${slug}`;

  const localBusinessSchema = generateLocalBusinessSchema({
    cityName,
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: {
      ratingValue: '4.9',
      reviewCount: '150'
    }
  });

  return (
    <>
      <Helmet>
        <title>{cityName} Roofing Contractor | All Phase Construction USA</title>
        <meta
          name="description"
          content="All Phase Construction USA is a dual-licensed roofing contractor serving Boynton Beach, FL. We provide Palm Beach County wind-compliant metal, tile, and shingle roofing installation, replacement, and repair."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <StickyConversionBar />

      <div className="min-h-screen bg-black text-white">
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
              </div>

              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  Dispatched from our Deerfield Beach HQ to provide rapid roofing services in {cityName}, All Phase Construction USA is a dual-licensed roofing contractor with unmatched structural authority. As a leader in {cityName} roofing, we are local experts familiar with regional roofing styles, building codes, and laws. If you are searching for a roofer {cityName} residents trust for emergency services, inspections, repairs, and replacements, our team is ready to respond quickly and professionally. With extensive experience in the roofing industry, we have built a reputation as a reliable roofing contractor trusted by the {cityName} community. We hold both Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses, providing comprehensive roofing and structural expertise that standard roofing contractors cannot match. Roofing contractors in Florida must hold a Certified Roofing Contractor (CCC) or Registered Roofing Contractor license issued by the Florida Department of Business and Professional Regulation (DBPR). Our commitment to serving the local community and supporting neighborhood needs sets us apart.
                </p>

                <p className="text-xl text-zinc-300 leading-relaxed">
                  When hiring a roofing contractor in {cityName}, it is essential to verify that the contractor is fully licensed, bonded, and insured. Homeowners may be held liable for on-site injuries if a roofing contractor is uninsured. Roofing contractors in Florida are required to maintain at least $100,000 public liability and $25,000 property damage coverage, plus workers' compensation insurance. Always verify proof of general liability and workers' compensation insurance to avoid liability for accidents. All Phase Construction USA exceeds these minimums and provides full documentation upon request.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/roof-inspection"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Schedule Free Inspection
                </Link>
                <a
                  href="tel:754-227-5605"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"
                >
                  <Phone className="w-6 h-6" />
                  Call (754) 227-5605
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-600" />
                  24/7 Emergency Service
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-red-600" />
                  HVHZ Certified
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Dual-License Advantage */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                  <Award className="w-4 h-4" />
                  Dual-Licensed Authority
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Dual-License Advantage
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Most roofing contractors in {cityName} hold only a Certified Roofing Contractor (CCC) license. All Phase Construction USA holds both CCC-1331464 and CGC-1526236 licenses, providing comprehensive roofing and structural expertise that standard roofing contractors cannot match.
                  </p>
                  <p>
                    This dual-license capability means we can address structural issues, handle complex repairs involving roof decking and trusses, and provide complete building envelope solutions. When other contractors must stop and call in structural specialists, we have the authority and expertise to handle everything in-house.
                  </p>
                  <p>
                    Each roofing job is unique in scope, size, and complexity, and our dual license allows us to handle all aspects of the job efficiently and effectively. The cost of roof replacement can vary depending on the size of the job, the materials selected, and the time required to complete the work. Use our <Link to="/calculator" className="text-red-500 hover:text-red-400 underline">Roof Cost Calculator</Link> for a preliminary estimate.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">License Capabilities</h3>
                <div className="space-y-4">
                  {[
                    'Complete roof replacement and installation',
                    'Structural repairs and roof deck reconstruction',
                    'Complex multi-building projects',
                    'Storm damage restoration with structural authority',
                    'Building envelope integration',
                    'Complete permit management'
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

        {/* HVHZ Mastery */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6">HVHZ Requirements</h3>
                  <div className="space-y-4">
                    {[
                      'Enhanced attachment methods (8d ring shank nails)',
                      'Sealed roof deck requirements',
                      'Impact-resistant materials',
                      '175+ mph wind rating certifications',
                      'Secondary water barrier systems',
                      'Product approval verification (NOA)'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                  <Shield className="w-4 h-4" />
                  Hurricane Protection
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  HVHZ Mastery
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    {cityName} is located in Florida's High Velocity Hurricane Zone (HVHZ), requiring specialized installation techniques, enhanced materials, and specific building code compliance. All Phase Construction USA specializes in Palm Beach County wind-compliant roofing systems designed to withstand extreme wind events.
                  </p>
                  <p>
                    Our team is trained in HVHZ installation requirements, including enhanced fastening patterns, sealed roof decks, and impact-resistant materials. We use only products with valid Miami-Dade County Notices of Acceptance (NOA) and ensure every installation meets or exceeds Florida Building Code requirements for high-wind zones.
                  </p>
                  <p>
                    Improper installation can lead to significant roof damage, putting your home at risk. It is important to address roof problems immediately to prevent further damage to the home. Learn more about <Link to="/blog/what-makes-a-roof-hurricane-resistant" className="text-red-500 hover:text-red-400 underline">what makes a roof hurricane resistant</Link> in our detailed guide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <MapPin className="w-4 h-4" />
                Local Knowledge
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Local Expertise in {cityName}
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Serving {cityName} from our Deerfield Beach headquarters with intimate knowledge of {county} building codes, permit requirements, and regional roofing challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Permit Expertise',
                  description: 'Complete knowledge of Palm Beach County building department requirements, permit processing, and inspection protocols.'
                },
                {
                  title: 'Code Compliance',
                  description: 'Full compliance with Florida Building Code, HVHZ requirements, and local building regulations specific to Boynton Beach.'
                },
                {
                  title: 'Regional Materials',
                  description: 'Deep understanding of which roofing materials perform best in South Florida\'s coastal climate and salt air environment.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 prose prose-invert max-w-none">
              <p className="text-zinc-300 leading-relaxed text-center">
                We have extensive experience managing all types of roofing work in {cityName}, including installation, repair, and maintenance for various roof types. Local regulations and building codes can significantly impact the roof replacement process and the materials used, so working with a knowledgeable roofing contractor is essential.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Roofing Services */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Hammer className="w-4 h-4" />
                Full-Service Roofing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Roofing Services
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Complete roofing solutions for {cityName} residential and commercial properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Roof Replacement */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Roof Replacement</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Complete roof replacement for {cityName} residential and commercial properties begins with a <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline">thorough inspection</Link> of your existing roof. After the inspection, a detailed plan is developed to replace your old roof, taking into account the specific needs of your property and ensuring compliance with HVHZ standards. The existing roofing material is carefully removed and disposed of, and the roof deck is inspected for damage before installation of the new roofing system. Our experienced team installs high-quality materials suitable for all roof types, backed by manufacturer warranties. A final inspection ensures your roof is watertight and meets all safety and quality standards. The cost to have your roof replaced varies depending on the size and complexity of the job.
                </p>
              </div>

              {/* Emergency Repairs */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Emergency Repairs</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Our experienced roofers in {cityName} are available 24/7 to get your roof fixed quickly, providing same-day response for active leaks, storm damage, missing shingles, and emergency tarping. Prompt repair of any roof leak is essential to prevent further deterioration and significant damage, including mold growth and structural issues. Delaying roof repairs can lead to more severe problems such as structural damage and health risks. Contact us immediately when noticing any roof damage.
                </p>
              </div>

              {/* Professional Inspections */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Professional Inspections</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Comprehensive 21-point roof inspections for {cityName} properties help maintain your roof's condition and prevent damage by identifying issues early. Regular roof inspections are critical to assess and address problems before they escalate, saving you money by extending your roof's lifespan and preventing costly repairs. Insurance documentation, pre-purchase evaluations, and maintenance assessments are included. Schedule your <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline">free inspection</Link> today.
                </p>
              </div>

              {/* All Roof Types */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">All Roof Types</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">Tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, and <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link> (including TPO, PVC, modified bitumen, and EPDM) are all expertly installed and repaired for homes and businesses in {cityName}. Metal roofs are extremely durable and can last 50 years or more, making them a smart long-term investment. Tile roofing is favored for its aesthetic appeal and longevity. Asphalt shingles remain popular due to their cost-effectiveness and durability. Energy-efficient roofing systems can help reduce ongoing energy costs. Regular roof maintenance is essential to extend the lifespan of any roof.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Materials */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Hammer className="w-4 h-4" />
                Premium Materials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Roofing Materials for {cityName} Homes and Businesses
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-zinc-300 leading-relaxed">
              <p>
                Choosing the right roofing materials is essential for protecting your {cityName} home or business from South Florida's harsh elements. We offer a comprehensive selection of roofing materials to meet the diverse needs of both residential and commercial clients.
              </p>

              <p>
                For residential roofing, we recommend materials like <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">asphalt shingles</Link>, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">clay or concrete tiles</Link>, and <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link> — all of which provide long-lasting protection and enhance curb appeal. Our <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline">commercial roofing</Link> services are tailored to the unique demands of local businesses, offering energy-efficient and cost-effective systems that comply with all Palm Beach County regulations.
              </p>

              <p>
                When it's time for a roof replacement or repair, our team conducts a thorough <Link to="/roof-inspection" className="text-red-500 hover:text-red-400 underline">roof inspection</Link> to assess the condition of your existing roof. We provide a detailed estimate outlining the scope, cost, and timeline of your project. We use only premium roofing materials and proven installation techniques, ensuring your new roof delivers superior performance and longevity.
              </p>

              <p>
                In addition to replacement and repair, we offer emergency repairs, routine <Link to="/roof-maintenance-programs" className="text-red-500 hover:text-red-400 underline">maintenance</Link>, and gutter cleaning. Our goal is to help you avoid costly repairs and extend the lifespan of your roof, keeping your property safe year-round.
              </p>
            </div>
          </div>
        </section>

        {/* Roof Financing Options */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <FileText className="w-4 h-4" />
                Flexible Financing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Roof Financing Options for {cityName} Clients
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-zinc-300 leading-relaxed">
              <p>
                All Phase Construction USA understands that investing in a new roof or tackling unexpected repairs can be a significant financial decision for {cityName} homeowners. We offer flexible <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline">roof financing options</Link> designed to fit your budget and meet your unique roofing needs.
              </p>

              <p>
                Our team will guide you through financing solutions that make sense for your situation — whether you're planning a roof replacement, urgent repair, or new installation. We offer both credit-based and non-credit-based financing options with competitive rates and flexible repayment terms, designed to help you protect your {cityName} home without delay.
              </p>

              <p>
                From your first inquiry to project completion, our team provides clear communication, detailed quotes, and honest answers. We offer <Link to="/contact" className="text-red-500 hover:text-red-400 underline">free estimates</Link> for all roofing services, ensuring you have a complete understanding of cost, materials, and process before any work begins.
              </p>

              <p>
                Don't let financial concerns stand in the way of getting your roof fixed or replaced. Contact us today to learn more about our financing options and schedule your free estimate.
              </p>
            </div>
          </div>
        </section>

        {/* Roofing Education and Resources */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <BookOpen className="w-4 h-4" />
                Knowledge Center
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Roofing Education and Resources
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-zinc-300 leading-relaxed mb-12">
              <p>
                All Phase Construction USA is dedicated to empowering {cityName} homeowners with the knowledge to make informed roofing decisions. Our <Link to="/learning-center" className="text-red-500 hover:text-red-400 underline">Learning Center</Link> provides in-depth guides on topics including roof replacement costs, wind mitigation savings, insurance claim processes, and selecting the right roofing materials.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-6 text-center">Popular Resources for {cityName} Homeowners:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'How Much Does a Roof Replacement Cost?',
                    link: '/blog/roof-replacement-cost-broward-county-2026'
                  },
                  {
                    title: 'What Makes a Roof Hurricane Resistant?',
                    link: '/blog/what-makes-a-roof-hurricane-resistant'
                  },
                  {
                    title: 'Wind Mitigation for South Florida Roofs: Save on Insurance',
                    link: '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home'
                  },
                  {
                    title: 'How to File a Roof Insurance Claim After Storm Damage',
                    link: '/blog/how-to-file-a-roof-insurance-claim-after-storm-damage'
                  },
                  {
                    title: 'Understanding Your Roofing Warranty: What\'s Covered',
                    link: '/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not'
                  }
                ].map((resource, index) => (
                  <Link
                    key={index}
                    to={resource.link}
                    className="block bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-lg p-4 transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" />
                      <span className="group-hover:text-red-500 transition-colors">{resource.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Serving Nearby Communities */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Serving Nearby Communities
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
                Professional roofing services throughout {county} and surrounding areas
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  { name: 'Delray Beach', slug: 'delray-beach' },
                  { name: 'Lake Worth', slug: 'lake-worth' },
                  { name: 'Boca Raton', slug: 'boca-raton' },
                  { name: 'Wellington', slug: 'wellington' },
                  { name: 'West Palm Beach', slug: 'west-palm-beach' },
                  { name: 'Deerfield Beach', slug: 'deerfield-beach' }
                ].map((city, index) => (
                  <Link
                    key={index}
                    to={`/locations/${city.slug}`}
                    className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-800 hover:border-red-600 px-4 py-2 rounded-lg text-zinc-300 hover:text-white transition-all"
                  >
                    <MapPin className="w-4 h-4 text-red-600" />
                    {city.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/locations/service-areas"
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
              >
                View all service areas
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Ready to Get Started CTA */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact All Phase Construction USA today for your free roof inspection and estimate in {cityName}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/roof-inspection"
                  className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-100 transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Schedule Free Inspection
                </Link>
                <a
                  href="tel:754-227-5605"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-800 transition-all"
                >
                  <Phone className="w-6 h-6" />
                  Call (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-zinc-400">
                Free estimates • 24/7 emergency service • Licensed & insured
              </p>
            </div>
            <Contact />
          </div>
        </section>
      </div>
    </>
  );
}
