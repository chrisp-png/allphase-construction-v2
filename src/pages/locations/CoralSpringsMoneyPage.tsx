/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Coral Springs Custom Location Page - Updated SEO Content
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, FileCheck, Wrench, Camera, Building2, Hammer, FileText, BookOpen, Star } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function CoralSpringsMoneyPage() {
  const cityName = 'Coral Springs';
  const county = 'Broward County';
  const slug = 'coral-springs';

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
          content={`Professional roofing services in ${cityName}, Florida. Dual-licensed contractor (CCC-1331464, CGC-1526236) with HVHZ certification. Expert roof replacement, repair, and inspection services.`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <StickyConversionBar />

      <div className="min-h-screen bg-[#09090b] text-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#09090b] via-zinc-950 to-[#27272a] pt-44 pb-20">
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
                  All Phase Construction USA is a dual-licensed roofing contractor (CCC-1331464) and certified general contractor (CGC-1526236) serving {cityName}, FL with expert roof replacement, roof repair, and roof inspection services. Based in Deerfield Beach with 20+ years of experience, we specialize in tile, metal, shingle, and flat roofing systems for {cityName} residential and <Link to="/commercial-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">commercial properties</Link>, all built to HVHZ wind code standards.
                </p>

                <p className="text-xl text-zinc-300 leading-relaxed">
                  As a family-owned business with deep roots in the {cityName} community, our team was actively replacing tile roofs destroyed throughout {cityName} neighborhoods following Hurricane Wilma in 2005, earning the trust of homeowners across the city during one of South Florida's most challenging recovery periods. Our dual-license advantage means we handle both roofing and structural work that standard roofing-only contractors cannot touch. Call (754) 227-5605 for a free roof inspection in {cityName}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/roof-inspection/coral-springs"
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
                  (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Dual-License Advantage */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Award className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Dual-License Advantage for {cityName} Properties
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Most roofing contractors in {cityName} operate with only a CCC (Certified Roofing Contractor) license, limiting their scope to roof surface work. When they encounter structural issues — damaged trusses, inadequate roof-to-wall connections, compromised decking, or load-bearing problems — they must stop and hire a separate general contractor. This creates delays, increases costs, and introduces coordination problems.
              </p>

              <p>
                Our CGC license (Certified General Contractor) authorizes us to evaluate and repair the complete structural system supporting your roof. During every {cityName} roof replacement project, we inspect roof deck fastening, assess truss integrity, verify proper connections between the roof structure and exterior walls, and ensure the entire system meets current Florida Building Code requirements. Having a roofing professional with both general contractor and roofing licenses ensures the highest standards of safety and quality for every project. When we identify structural deficiencies, we repair them immediately — keeping your project on schedule under one comprehensive warranty.
              </p>

              <p>
                Use our <Link to="/roof-cost-calculator" className="text-red-600 hover:text-red-500 underline transition-colors">Roof Cost Calculator</Link> for a preliminary estimate based on your roof type and size.
              </p>
            </div>
          </div>
        </section>

        {/* HVHZ Mastery */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  HVHZ Mastery: Hurricane Protection for {cityName}
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                {cityName} is located in South Florida's High Velocity Hurricane Zone (HVHZ), where building codes mandate the most stringent wind resistance standards in the United States. Every roof installation in {cityName} must withstand 175+ mph wind speeds — equivalent to a strong Category 5 hurricane making direct landfall. Standard roofing techniques acceptable in other states fail inspection in {cityName}.
              </p>

              <p>
                Our HVHZ certification and dual-licensing enable us to engineer roof systems specifically for {cityName}' extreme weather conditions. Selecting the appropriate roof style, such as <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile</Link>, <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">shingle</Link>, or <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal</Link>, is crucial for maximizing hurricane resistance in {cityName}, as each roof style offers unique benefits for storm protection and durability. We use enhanced fastening schedules with ring-shank nails at 6-inch spacing (versus standard 12-inch), high-wind rated shingles with reinforced mat construction, upgraded hip and ridge cap systems with specialty adhesive application, and engineered roof-to-wall connections that transfer wind loads directly to the structural frame.
              </p>

              <p>
                This expertise ensures your {cityName} roof passes building department inspection on the first attempt and protects your property when hurricanes strike. Many homeowners discover too late that their contractor's work doesn't meet {county} building codes, resulting in failed inspections, costly remediation, and compromised hurricane protection.
              </p>

              <p>
                Florida building codes require hurricane-rated materials and specific installation methods, which can potentially qualify homeowners for <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-600 hover:text-red-500 underline transition-colors">insurance premium reductions through wind mitigation</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Local Expertise */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Local Expertise: Understanding {cityName}' Building Requirements
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Operating from our Deerfield Beach headquarters, we serve {cityName} with intimate knowledge of {county} building codes, permit requirements, and inspection procedures. Every jurisdiction in South Florida maintains unique requirements beyond Florida Building Code minimums — specific engineering documentation, structural calculations, product approvals, and installation details that vary by location. It's important to find roofers who are established in {cityName} and familiar with local building codes to avoid costly delays and ensure your project meets all requirements.
              </p>

              <p>
                Our established relationships with {county} building officials and our proven track record of first-pass inspection approvals mean your {cityName} roof replacement moves forward smoothly from permit application through final certificate of completion. Out-of-area contractors struggle with county-specific requirements, resulting in project delays of weeks or months. Our local expertise eliminates these costly delays.
              </p>

              <p>
                Learn more about <Link to="/blog/why-homeowners-should-avoid-pulling-their-own-roofing-permit-in-south-florida" className="text-red-600 hover:text-red-500 underline transition-colors">why proper permitting matters</Link> for your roofing project.
              </p>
            </div>
          </div>
        </section>

        {/* Proven Track Record in Coral Springs */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Building2 className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Proven Track Record in {cityName}
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                All Phase Construction USA's expertise extends across both residential and commercial roofing projects throughout {cityName}. We completed the commercial flat roof on the Wiles Business Center in {cityName} — a large-scale <Link to="/commercial-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">commercial roofing</Link> project that required precise <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roof</Link> installation, proper drainage engineering, and full code compliance for a multi-tenant business facility.
              </p>

              <p>
                Our history in {cityName} goes back nearly two decades. After Hurricane Wilma devastated South Florida in 2005, All Phase Construction USA was on the ground replacing <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile roofs</Link> destroyed throughout {cityName} neighborhoods including Eagle Trace, Cypress Run, Whispering Woods, and Heron Bay. That recovery work taught us the specific vulnerabilities of {cityName} roofing systems and shaped our approach to building hurricane-resistant roofs that protect families when the next storm hits.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Roofing Services */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Comprehensive Roofing Services in {cityName}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#09090b] border border-zinc-700 rounded-lg p-8 hover:border-red-600 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Hammer className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Roof Replacement</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Complete <Link to="/roof-replacement" className="text-red-600 hover:text-red-500 underline transition-colors">roof replacement</Link> for {cityName} residential and commercial properties. All materials, all roof types, HVHZ compliant with manufacturer warranties. From <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile</Link> and <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">shingle</Link> to <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal</Link> and <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roofing</Link> systems, we deliver quality installations backed by comprehensive warranties.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#09090b] border border-zinc-700 rounded-lg p-8 hover:border-red-600 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Wrench className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Emergency Repairs</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      24/7 emergency roof repair service for {cityName}. Active leaks, storm damage, missing shingles, and emergency tarping with same-day response. Our team is experienced in quickly diagnosing and repairing roof leaks and addressing issues like a sagging roof to prevent further damage. Learn to recognize <Link to="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive" className="text-red-600 hover:text-red-500 underline transition-colors">early signs of roof damage</Link>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#09090b] border border-zinc-700 rounded-lg p-8 hover:border-red-600 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Camera className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Professional Inspections</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Comprehensive 21-point <Link to="/roof-inspection/coral-springs" className="text-red-600 hover:text-red-500 underline transition-colors">roof inspections</Link> for {cityName} properties. Insurance documentation, pre-purchase evaluations, and <Link to="/roof-maintenance-programs" className="text-red-600 hover:text-red-500 underline transition-colors">maintenance assessments</Link>. Regular inspections save money by catching small issues before they become expensive problems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#09090b] border border-zinc-700 rounded-lg p-8 hover:border-red-600 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Building2 className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">All Roof Types</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">Tile roofing</Link>, <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal roofing</Link>, <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">shingle roofing</Link>, <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roofing</Link> (TPO/PVC). Expert installation and repair for all roofing systems in {cityName}. Each material offers unique benefits for South Florida's climate — our team helps you select the ideal option for your property and budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Warranties and Guarantees */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roofing Warranties and Guarantees for {cityName} Homeowners
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                When planning a roofing project in {cityName}, <Link to="/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not" className="text-red-600 hover:text-red-500 underline transition-colors">understanding your roofing warranties</Link> and guarantees is just as important as choosing the right roofing contractor. All Phase Construction USA knows that a new roof is a significant investment for both residential and commercial property owners. That's why we offer comprehensive warranties and guarantees designed to protect your investment and provide complete peace of mind throughout the entire process.
              </p>

              <p>
                We stand behind every commercial roofing service and residential roof replacement with robust manufacturer warranties on all roofing materials, including <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal roof</Link>, <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile roofing</Link>, and <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">shingle roofing</Link> systems. These warranties ensure that your roof is protected against defects and premature wear, so you can trust in the quality and durability of your roofing materials for their full life span. For added assurance, we also offer extended warranty options tailored to your budget and specific roofing needs, whether you're considering a complete roof replacement or a minor repair.
              </p>

              <p>
                Customer satisfaction is at the heart of our business. From your initial free estimate to the final inspection, our team delivers top notch, professional service on every project. We take pride in our work, ensuring that every roof repair, residential roof replacement, and commercial roof replacement meets the highest standards of the roofing industry. Our complete satisfaction guarantee means we're not finished until you're fully happy with your new roof.
              </p>

              <p>
                We understand that {cityName} homeowners in neighborhoods like Whispering Woods, Cypress Run, Eagle Trace, Heron Bay, and The Pines expect integrity, quality, and fair price from their roofing contractor. That's why we build lasting relationships with our clients, offering honest advice, transparent pricing, and reliable repair services.
              </p>
            </div>
          </div>
        </section>

        {/* Roof Financing Options */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Financing Options for {cityName} Clients
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                All Phase Construction USA understands that investing in a new roof or tackling unexpected repairs can be a significant financial decision. We offer flexible <Link to="/easy-payments" className="text-red-600 hover:text-red-500 underline transition-colors">financing options</Link> designed to fit your budget and meet your unique roofing needs.
              </p>

              <p>
                We offer both credit-based and non-credit-based financing options with competitive rates and flexible repayment terms, designed to help you protect your {cityName} home without delay.
              </p>
            </div>
          </div>
        </section>

        {/* Roofing Education and Resources */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Roofing Education and Resources
                </h2>
              </div>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              All Phase Construction USA is dedicated to empowering {cityName} homeowners with the knowledge to make informed roofing decisions. Our <Link to="/learning-center" className="text-red-600 hover:text-red-500 underline transition-colors">Learning Center</Link> provides in-depth guides on topics including roof replacement costs, wind mitigation savings, insurance claim processes, and selecting the right roofing materials.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/blog/roof-replacement-cost-broward-county-2026" className="bg-[#27272a] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <FileText className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg group-hover:text-red-600 transition-colors">
                    How Much Does a Roof Replacement Cost?
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  Complete guide to {county} roof replacement costs in 2026.
                </p>
              </Link>

              <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="bg-[#27272a] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg group-hover:text-red-600 transition-colors">
                    Wind Mitigation: Save on Insurance
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  Learn how wind mitigation can reduce insurance premiums.
                </p>
              </Link>

              <Link to="/blog/how-to-file-a-roof-insurance-claim-after-storm-damage" className="bg-[#27272a] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <FileCheck className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg group-hover:text-red-600 transition-colors">
                    Filing an Insurance Claim After Storm Damage
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  Step-by-step guide to the insurance claim process.
                </p>
              </Link>

              <Link to="/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not" className="bg-[#27272a] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg group-hover:text-red-600 transition-colors">
                    Understanding Your Roofing Warranty
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  What's covered and what's not in your roofing warranty.
                </p>
              </Link>

              <Link to="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive" className="bg-[#27272a] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <Camera className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg group-hover:text-red-600 transition-colors">
                    Spotting Early Signs of Roof Damage
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  Identify problems before they become expensive repairs.
                </p>
              </Link>

              <Link to="/blog/how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid" className="bg-[#27272a] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg group-hover:text-red-600 transition-colors">
                    How to Hire a Roofer in South Florida
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  What to look for and what to avoid when hiring a roofer.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* What Our Customers Say */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Our Customers Say
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {/* Real Google Review 1 */}
              <div className="bg-[#09090b] border border-zinc-700 rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-4 italic">
                  "Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!"
                </p>
                <p className="font-semibold text-white">— Michael R.</p>
                <p className="text-sm text-zinc-400">Coral Springs Homeowner</p>
              </div>

              {/* Real Google Review 2 */}
              <div className="bg-[#09090b] border border-zinc-700 rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-4 italic">
                  "We had emergency storm damage and All Phase responded within hours. They secured our roof with a proper tarp system and came back the following week to complete the permanent repairs. Fair pricing, honest service, and excellent workmanship."
                </p>
                <p className="font-semibold text-white">— Jennifer L.</p>
                <p className="text-sm text-zinc-400">Broward County</p>
              </div>

              {/* Real Google Review 3 */}
              <div className="bg-[#09090b] border border-zinc-700 rounded-lg p-6">
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
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 font-semibold transition-colors"
              >
                Read More Reviews on Google
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Service Area - Nearby Communities */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Serving {cityName} and Surrounding Communities
            </h2>

            <p className="text-lg text-zinc-300 text-center mb-8 max-w-3xl mx-auto">
              All Phase Construction USA proudly serves the entire {cityName} region, extending throughout {county} and into Palm Beach County. Our extensive service area ensures that homeowners and businesses alike can access our top-tier roofing services.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-zinc-300">
              <Link to="/locations/coconut-creek" className="hover:text-red-600 transition-colors">Coconut Creek</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/parkland" className="hover:text-red-600 transition-colors">Parkland</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/deerfield-beach" className="hover:text-red-600 transition-colors">Deerfield Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pompano-beach" className="hover:text-red-600 transition-colors">Pompano Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/fort-lauderdale" className="hover:text-red-600 transition-colors">Fort Lauderdale</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/boca-raton" className="hover:text-red-600 transition-colors">Boca Raton</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/tamarac" className="hover:text-red-600 transition-colors">Tamarac</Link>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/locations/service-areas"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 font-semibold transition-colors"
              >
                View all service areas
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Ready to Get Started CTA */}
        <section className="py-20 bg-gradient-to-b from-[#27272a] to-[#09090b]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started in {cityName}?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Contact All Phase Construction USA for a free roof inspection and estimate. Our dual-licensed roofing specialists provide expert guidance, transparent pricing, and quality workmanship backed by manufacturer warranties and our commitment to excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:754-227-5605"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all"
              >
                <Phone className="w-6 h-6" />
                Call (754) 227-5605
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-zinc-700 transition-all border border-zinc-700"
              >
                Request Free Estimate
                <ChevronRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-[#09090b] border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex justify-center mb-3">
                  <Award className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="font-bold text-white mb-2">Dual-Licensed</h3>
                <p className="text-sm text-zinc-400">CCC & CGC Licensed Contractor</p>
              </div>
              <div>
                <div className="flex justify-center mb-3">
                  <Shield className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="font-bold text-white mb-2">HVHZ Certified</h3>
                <p className="text-sm text-zinc-400">175+ mph Wind Ratings</p>
              </div>
              <div>
                <div className="flex justify-center mb-3">
                  <Clock className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="font-bold text-white mb-2">24/7 Emergency</h3>
                <p className="text-sm text-zinc-400">Same-Day Response Available</p>
              </div>
              <div>
                <div className="flex justify-center mb-3">
                  <MapPin className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="font-bold text-white mb-2">Local Experts</h3>
                <p className="text-sm text-zinc-400">Deerfield Beach Headquarters</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <Contact />
      </div>
    </>
  );
}
