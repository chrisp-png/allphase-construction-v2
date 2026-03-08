/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Boca Raton Custom Location Page
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, FileCheck, Wrench, Camera, Building2, Hammer, BookOpen, Users } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function BocaRatonMoneyPage() {
  const cityName = 'Boca Raton';
  const county = 'Palm Beach County';
  const slug = 'boca-raton';

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
        <meta name="description" content="All Phase Construction USA is a dual-licensed roofing contractor serving Boca Raton, FL. We provide Palm Beach County wind-compliant metal, tile, and shingle roofing installation, replacement, and repair." />
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
                Dual-Licensed Roofing &amp; General Contractors (CCC-1331464, CGC-1526236)
              </div>
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  Dispatched from our Deerfield Beach HQ to provide rapid roofing services in {cityName}, All Phase Construction USA is a dual-licensed roofing contractor with unmatched structural authority. As a leader in {cityName} roofing, we are local experts familiar with regional roofing styles, building codes, and laws. If you are searching for a roofer {cityName} residents trust for emergency services, inspections, <Link to="/roof-repair/boca-raton" className="text-red-500 hover:text-red-400 underline">roof repairs</Link>, and replacements, our team is ready to respond quickly and professionally. We hold both Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor (CGC-1526236) licenses, providing comprehensive roofing and structural expertise that standard roofing contractors cannot match. Roofing contractors in Florida must hold a Certified Roofing Contractor (CCC) or Registered Roofing Contractor license issued by the Florida Department of Business and Professional Regulation (DBPR). Our commitment to serving the local community and supporting neighborhood needs sets us apart.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  When hiring a roofing contractor in {cityName}, it is essential to verify that the contractor is fully licensed, bonded, and insured. Homeowners may be held liable for on-site injuries if a roofing contractor is uninsured. Roofing contractors in Florida are required to maintain at least $100,000 public liability and $25,000 property damage coverage, plus workers' compensation insurance. Always verify proof of general liability and workers' compensation insurance to avoid liability for accidents. All Phase Construction USA exceeds these minimums and provides full documentation upon request.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/roof-inspection/boca-raton"
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
                    Each roofing job is unique in scope, size, and complexity. The cost of <Link to="/roof-replacement" className="text-red-500 hover:text-red-400 underline">roof replacement</Link> can vary depending on the size of the job, the materials selected, and the time required to complete the work. Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 underline">Roof Cost Calculator</Link> for a preliminary estimate.
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
                    Our team is trained in HVHZ installation requirements, including enhanced fastening patterns, sealed roof decks, and impact-resistant materials. We use only products with valid Miami-Dade County Notices of Acceptance (NOA) and ensure every installation meets or exceeds Florida Building Code requirements for high-wind zones. Learn more about <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-500 hover:text-red-400 underline">wind mitigation savings</Link> for your home.
                  </p>
                  <p>
                    Improper installation can lead to significant roof damage. Learn more about <Link to="/blog/what-makes-a-roof-hurricane-resistant" className="text-red-500 hover:text-red-400 underline">what makes a roof hurricane resistant</Link> in our detailed guide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Boca Raton Homeowners Hire All Phase */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <MapPin className="w-4 h-4" />
                Local Knowledge
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why {cityName} Homeowners Hire All Phase Construction USA
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
                  description: 'Full compliance with Florida Building Code, HVHZ requirements, and local building regulations specific to Boca Raton.'
                },
                {
                  title: 'Regional Materials',
                  description: "Deep understanding of which roofing materials perform best in South Florida's coastal climate and salt air environment."
                }
              ].map((item, index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-zinc-300 leading-relaxed max-w-3xl mx-auto">
                We have extensive experience managing all types of roofing work in {cityName}. Don't just take our word for it — learn <Link to="/blog/how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid" className="text-red-500 hover:text-red-400 underline">how to hire a roofer in South Florida</Link> and see why homeowners across {county} choose All Phase Construction USA.
              </p>
            </div>
          </div>
        </section>

        {/* Boca Raton Neighborhoods We Serve */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <MapPin className="w-4 h-4" />
                Boca Raton Neighborhoods
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Boca Raton Neighborhoods We Serve
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Deep Local Knowledge Across Every Boca Community
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-zinc-300 leading-relaxed">
              <p>
                All Phase Construction USA works across the full spectrum of Boca Raton's residential communities — from historic 1920s neighborhoods to modern luxury estates — each with its own roofing demands, HOA requirements, and material standards.
              </p>
              <p>
                In Broken Sound Country Club, Boca Raton's largest private club community with 1,600 Mediterranean-style homes spread across 27 villages on 1,000 acres, we navigate strict architectural review board requirements for every roofing project. The community's mandatory HOA standards govern material selection, color approval, and installation methods — and our team is experienced in meeting those requirements while delivering fully HVHZ-compliant systems. The same applies to Boca West Country Club and Woodfield Country Club, where family-focused luxury living comes with equally detailed HOA oversight.
              </p>
              <p>
                Along Boca Raton's Intracoastal corridor, Royal Palm Yacht &amp; Country Club and Golden Harbour represent the highest-value roofing projects we handle — waterfront estates where salt air corrosion, constant humidity, and direct coastal wind exposure demand corrosion-resistant fasteners, sealed roof decks, and materials rated for permanent marine-environment exposure.
              </p>
              <p>
                Old Floresta Historic District is one of the most distinctive roofing environments in all of South Florida. Designed by legendary architect Addison Mizner in the early 1920s, Old Floresta is characterized by its original barrel tile roofs — the same Mediterranean Revival profile that defined Boca Raton's architectural identity. Restoring these systems requires sourcing period-appropriate profiles, understanding Mizner-era underlayment construction, and bringing the roof to current HVHZ standards without compromising historic character. Our CGC license gives us the structural authority to address aging trusses and original roof-to-wall connections common in these 100-year-old structures.
              </p>
              <p>
                In central and west Boca communities — The Oaks at Boca Raton, New Floresta, Millpond, and the newer Lotus and Lotus Palms communities — we serve a mix of 1980s–2000s construction entering its first or second full <Link to="/roof-replacement" className="text-red-500 hover:text-red-400 underline">roof replacement</Link> cycle, often with flat roof systems, modified bitumen, and shingle systems that need upgrading to current HVHZ standards.
              </p>
              <p>
                As a proud member of the Greater Boca Raton Chamber of Commerce, All Phase Construction USA is a verified community business embedded in the Boca Raton area. When you hire us, you're hiring a company with ongoing relationships and standing in the same community where your home is.
              </p>
            </div>
          </div>
        </section>

        {/* Community Involvement — Boca Raton Chamber Chili Cook-Off 2026 */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-red-600/20">
                <Users className="w-4 h-4" />
                Community Involvement
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                All Phase Construction in the Boca Raton Community
              </h2>
            </div>
            <div className="mb-8">
              <img
                src="/social-proof/chamber-boca-raton-chili-cookoff-2026.jpg"
                alt="All Phase Construction USA booth at the 13th Annual Boca Chamber Community Cookout &amp; Chili Cook-Off, March 2026 — Peter Blum Family YMCA, Boca Raton"
                width="1200"
                height="900"
                loading="lazy"
                className="w-full rounded-xl shadow-2xl border border-zinc-800"
              />
            </div>
            <p className="text-zinc-300 leading-relaxed text-lg text-center max-w-3xl mx-auto">
              We're proud to be an active member of the Greater Boca Raton Chamber of Commerce.
              In March 2026, our team participated in the 13th Annual Boca Chamber Community Cookout
              &amp; Chili Cook-Off at the Peter Blum Family YMCA — connecting with neighbors and local
              businesses we've had the privilege of roofing for years.
            </p>
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
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Roof Replacement</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Complete <Link to="/roof-replacement" className="text-red-500 hover:text-red-400 underline">roof replacement</Link> for {cityName} residential and commercial properties begins with a thorough <Link to="/roof-inspection/boca-raton" className="text-red-500 hover:text-red-400 underline">inspection</Link>. Our experienced team installs high-quality materials suitable for all roof types, backed by manufacturer warranties. Learn <Link to="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive" className="text-red-500 hover:text-red-400 underline">how to spot early signs of roof damage</Link> before they become costly.
                </p>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Emergency Repairs</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Our experienced roofers in {cityName} are available 24/7 for <Link to="/roof-repair/boca-raton" className="text-red-500 hover:text-red-400 underline">emergency roof repair</Link> — same-day response for active leaks, storm damage, and missing shingles. Prompt repair prevents mold growth, structural issues, and further deterioration. Learn <Link to="/blog/how-to-file-a-roof-insurance-claim-after-storm-damage" className="text-red-500 hover:text-red-400 underline">how to file a roof insurance claim</Link> after storm damage.
                </p>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Professional Inspections</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Comprehensive 21-point <Link to="/roof-inspection/boca-raton" className="text-red-500 hover:text-red-400 underline">roof inspections</Link> for {cityName} properties identify issues early, saving you money and extending your roof's lifespan. Includes insurance documentation, pre-purchase evaluations, and <Link to="/roof-maintenance-programs" className="text-red-500 hover:text-red-400 underline">maintenance assessments</Link>. Understand <Link to="/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not" className="text-red-500 hover:text-red-400 underline">your roofing warranty</Link> before you sign.
                </p>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">All Roof Types</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">Tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>, and <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline">commercial roofing</Link> (TPO, PVC, modified bitumen, EPDM) — all expertly installed for {cityName} homes and businesses. We also offer flexible <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline">financing options</Link> to fit any budget.
                </p>
              </div>
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
              All Phase Construction USA is dedicated to empowering {cityName} homeowners with the knowledge to make informed roofing decisions. Our <Link to="/learning-center" className="text-red-600 hover:text-red-500 underline transition-colors">Learning Center</Link> provides in-depth guides on roof replacement costs, wind mitigation savings, insurance claims, and selecting the right roofing materials.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { to: '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home', label: 'Wind Mitigation: Save on Insurance & Protect Your Home' },
                { to: '/blog/how-to-file-a-roof-insurance-claim-after-storm-damage', label: 'How to File a Roof Insurance Claim After Storm Damage' },
                { to: '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive', label: 'How to Spot Early Signs of Roof Damage' },
                { to: '/blog/roof-replacement-cost-broward-county-2026', label: 'Roof Replacement Cost Guide — South Florida 2026' },
                { to: '/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not', label: 'Understanding Your Roofing Warranty' },
                { to: '/blog/how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid', label: 'How to Hire a Roofer in South Florida' },
                { to: '/blog/why-homeowners-should-avoid-pulling-their-own-roofing-permit-in-south-florida', label: 'Why You Should Never Pull Your Own Roofing Permit' },
                { to: '/locations/boca-raton/best-roofers-boca-raton', label: 'Best Roofers in Boca Raton — Top Picks for 2026' },
              ].map((item, i) => (
                <Link key={i} to={item.to} className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 hover:border-red-600/40 transition-colors group">
                  <ChevronRight className="w-4 h-4 text-red-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="text-zinc-300 group-hover:text-white transition-colors text-sm">{item.label}</span>
                </Link>
              ))}
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
              All Phase Construction USA proudly serves the entire {cityName} region, extending throughout {county} and into Broward County. Our extensive service area ensures that homeowners and businesses can access our top-tier roofing services.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-zinc-300 mb-8">
              <Link to="/locations/delray-beach" className="hover:text-red-600 transition-colors">Delray Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/boynton-beach" className="hover:text-red-600 transition-colors">Boynton Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/west-palm-beach" className="hover:text-red-600 transition-colors">West Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/deerfield-beach" className="hover:text-red-600 transition-colors">Deerfield Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pompano-beach" className="hover:text-red-600 transition-colors">Pompano Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/coral-springs" className="hover:text-red-600 transition-colors">Coral Springs</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/fort-lauderdale" className="hover:text-red-600 transition-colors">Fort Lauderdale</Link>
            </div>
            <div className="text-center">
              <Link to="/locations/boca-raton/best-roofers-boca-raton" className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-6 py-3 rounded-lg font-semibold border border-red-600/20 hover:bg-red-600/20 transition-colors">
                <Award className="w-4 h-4" />
                See the Best Roofers in Boca Raton →
              </Link>
            </div>
          </div>
        </section>

        {/* Chamber of Commerce Badge */}
        <section className="py-12 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center gap-3 bg-red-600/10 text-red-500 px-6 py-4 rounded-lg text-lg font-bold border border-red-600/20">
                <Award className="w-6 h-6" />
                <span>Proud Member — Greater Boca Raton Chamber of Commerce</span>
              </div>
              <p className="text-zinc-400 mt-4 text-sm">
                Serving Boca Raton &amp; South Florida since 2005
              </p>
            </div>
          </div>
        </section>

        {/* Ready to Get Started CTA */}
        <section className="py-20 bg-zinc-900">
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
                  to="/roof-inspection/boca-raton"
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
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-zinc-400">
                Free estimates • 24/7 emergency service • Licensed &amp; insured
              </p>
            </div>
            <Contact />
          </div>
        </section>

      </div>
    </>
  );
}
