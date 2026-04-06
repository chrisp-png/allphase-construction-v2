/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Boynton Beach Custom Location Page
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect } from 'react';
import MoneyPageEnhancements from '../../components/MoneyPageEnhancements';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, FileCheck, Wrench, Camera, Building2, Hammer, FileText, BookOpen } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';
import { generateSEOMetadata } from '../../config/seoTitles';

export default function BoyntonBeachMoneyPage() {
  const cityName = 'Boynton Beach';
  const county = 'Palm Beach County';
  const slug = 'boynton-beach';

  useEffect(() => {
    const seoMeta = generateSEOMetadata('/locations/boynton-beach');
    document.title = seoMeta.title;
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
        <title>Roof Replacement Boynton Beach, FL | All Phase USA</title>
        <meta
          name="description"
          content="Boynton Beach roofing contractor. Dual-licensed Palm Beach & Broward Counties (CCC-1331464, CGC-1526236). Hunters Run, Aberdeen, Leisureville specialist. Since 2006. (754) 227-5605"
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
                <p className="text-xl text-zinc-300 leading-relaxed">
                  All Phase Construction USA has served Boynton Beach homeowners and businesses since 2006 — nearly two decades of roofing expertise delivered from our Deerfield Beach headquarters. As a dual-licensed Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236), licensed in both Palm Beach County and Broward County, we bring capabilities to every Boynton Beach roofing project that standard roofing-only contractors cannot match.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/roof-inspection/boynton-beach"
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
                  The Dual-License Advantage for Boynton Beach Properties
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Most Boynton Beach roofing contractors hold only a CCC license — authorizing roof surface work and nothing more. When they uncover structural problems beneath the surface — rotted decking, compromised trusses, inadequate roof-to-wall connections — they must stop and hire a separate general contractor. In aging neighborhoods like Heart of Boynton, San Castle, and Manor Forest where original roofs are well past their service life, structural issues are the rule, not the exception. All Phase Construction USA's CGC license authorizes us to assess and repair the complete structural system under one contract, one warranty, and one point of accountability.
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
                  Palm Beach County Coastal Wind Requirements
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Boynton Beach sits on the Atlantic coast where the Gulf Stream runs close to shore. Salt air corrosion from Atlantic and Intracoastal exposure accelerates fastener and flashing degradation. The flat terrain extending west toward Loxahatchee National Wildlife Refuge creates unobstructed wind corridors that amplify storm forces across the city. Palm Beach County's coastal zone enforces HVHZ-equivalent wind load standards requiring every roofing installation to be engineered for 175+ mph wind resistance with enhanced fastening schedules and engineered roof-to-wall connections. All Phase Construction USA holds active licenses in Palm Beach County — not just Broward — meaning we know this jurisdiction's specific permit requirements and building department expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Golf Community and HOA Specialists */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Award className="w-4 h-4" />
                HOA Expertise
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Golf Community and HOA Roofing Specialists
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-zinc-300 leading-relaxed">
              <p>
                Boynton Beach has one of South Florida's highest concentrations of luxury golf communities. <strong>Hunters Run</strong> (3 championship courses, mandatory country club membership), <strong>Aberdeen</strong> (18-hole, 24+ subdivisions), <strong>Pine Tree Golf Club</strong> (Dick Wilson-designed, gated), <strong>Quail Ridge Country Club</strong>, and <strong>Cypress Creek Country Club</strong> all maintain strict architectural guidelines governing roofing materials, colors, and installation. <strong>Melrose Park's</strong> gated estates with 4,000+ square foot homes on acre-plus lots add another tier of luxury specification. We navigate HOA architectural review processes, prepare all documentation, and coordinate directly with review committees.
              </p>
            </div>
          </div>
        </section>

        {/* Boynton Beach Local Expertise */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <MapPin className="w-4 h-4" />
                Boynton Beach Local Expertise
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Serving All Boynton Beach Communities
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-zinc-300 leading-relaxed">
              <p>
                From the luxury golf corridor — <strong>Hunters Run</strong>, <strong>Aberdeen</strong>, <strong>Pine Tree Golf Club</strong>, <strong>Quail Ridge</strong>, <strong>Cypress Creek Country Club</strong>, and <strong>Melrose Park</strong> — to the canal-front homes of <strong>Golfview Harbour</strong> and Downtown Boynton's Intracoastal-adjacent revitalization zone. <strong>Renaissance Commons</strong> offers resort-style condo living where flat roofing expertise matters.
              </p>

              <p>
                The 55+ communities of <strong>Leisureville</strong> (3 clubhouses), <strong>Valencia</strong>, <strong>The Club</strong>, and <strong>Palm Chase Lakes</strong> represent significant flat roofing and modified bitumen demand. Family neighborhoods including <strong>Meadows</strong>, <strong>Knollwood</strong>, and <strong>Manor Forest</strong> offer well-maintained 1980s housing stock. <strong>Heart of Boynton</strong> and <strong>San Castle</strong> are the city's original residential core — 1950s-60s ranch homes well into replacement cycles. Loxahatchee National Wildlife Refuge borders the city to the west, its open sawgrass and cypress terrain creating the unobstructed wind exposure that makes proper wind-rated installation non-negotiable throughout Boynton Beach.
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
                  Complete <Link to="/roof-replacement" className="text-red-500 hover:text-red-400 underline">roof replacement</Link> for Boynton Beach residential and commercial properties begins with a thorough inspection of your existing roof. After the inspection, a detailed plan is developed to replace your old roof, taking into account the specific needs of your property and ensuring compliance with HVHZ standards. The existing roofing material is carefully removed and disposed of, and the roof deck is inspected for damage before installation of the new roofing system. Our experienced team installs high-quality materials suitable for all roof types, backed by manufacturer warranties. A final inspection ensures your roof is watertight and meets all safety and quality standards. The cost to have your roof replaced varies depending on the size and complexity of the job.
                </p>
              </div>

              {/* Emergency Repairs */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Emergency Repairs</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Our experienced roofers in {cityName} are available 24/7 to get your roof fixed quickly, providing same-day response for active leaks, storm damage, missing shingles, and <Link to="/roof-repair/boynton-beach" className="text-red-500 hover:text-red-400">emergency roof repair</Link>. Prompt repair of any roof leak is essential to prevent further deterioration and significant damage, including mold growth and structural issues. Delaying roof repairs can lead to more severe problems such as structural damage and health risks. Contact us immediately when noticing any roof damage.
                </p>
              </div>

              {/* Professional Inspections */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Professional Inspections</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Comprehensive 21-point roof inspections for {cityName} properties help maintain your roof's condition and prevent damage by identifying issues early. Regular roof inspections are critical to assess and address problems before they escalate, saving you money by extending your roof's lifespan and preventing costly repairs. Insurance documentation, pre-purchase evaluations, and maintenance assessments are included. Schedule your <Link to="/roof-inspection/boynton-beach" className="text-red-500 hover:text-red-400 underline">free inspection</Link> today.
                </p>
              </div>

              {/* All Roof Types */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">All Roof Types</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">Tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>, and <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline">commercial roofing</Link> (including TPO, PVC, modified bitumen, and EPDM) are all expertly installed and repaired for homes and businesses in {cityName}. Metal roofs are extremely durable and can last 50 years or more, making them a smart long-term investment. Tile roofing is favored for its aesthetic appeal and longevity. Asphalt shingles remain popular due to their cost-effectiveness and durability. Energy-efficient roofing systems can help reduce ongoing energy costs. Regular roof maintenance is essential to extend the lifespan of any roof.
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
                When it's time for a roof replacement or repair, our team conducts a thorough <Link to="/roof-inspection/boynton-beach" className="text-red-500 hover:text-red-400 underline">roof inspection</Link> to assess the condition of your existing roof. We provide a detailed estimate outlining the scope, cost, and timeline of your project. We use only premium roofing materials and proven installation techniques, ensuring your new roof delivers superior performance and longevity.
              </p>

              <p>
                In addition to replacement and repair, we offer emergency repairs, routine <Link to="/roof-maintenance-programs" className="text-red-500 hover:text-red-400 underline">maintenance</Link>, and gutter cleaning. Our goal is to help you avoid costly repairs and extend the lifespan of your roof, keeping your property safe year-round.
              </p>
            </div>
          </div>
        </section>

        {/* Chamber of Commerce Badge */}
        <section className="py-12 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center gap-3 bg-red-600/10 text-red-500 px-6 py-4 rounded-lg text-lg font-bold border border-red-600/20">
                <Award className="w-6 h-6" />
                <span>Proud Member — Greater Boca Raton Chamber of Commerce</span>
              </div>
              <p className="text-zinc-400 mt-4 text-sm">
                Serving Boca Raton & Boynton Beach
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
                  to="/roof-inspection/boynton-beach"
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
            <MoneyPageEnhancements cityName="Boynton Beach" county="Palm Beach" hvhz={false} />
        <Contact />
          </div>
        </section>
      </div>
    </>
  );
}
