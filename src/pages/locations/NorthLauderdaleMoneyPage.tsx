/**
 * ═══════════════════════════════════════════════════════════════════════════
 * North Lauderdale Custom Location Page
 * ═══════════════════════════════════════════════════════════════════════════
 * Fully tailored to North Lauderdale, FL — Broward County, HVHZ.
 * Geo-specific content for AI snippet eligibility and local SEO ranking.
 */

import { useEffect } from 'react';
import MoneyPageEnhancements from '../../components/MoneyPageEnhancements';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, FileCheck, Wrench, Camera, Building2, Hammer, BookOpen } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import MoneyPageStatBar from '../../components/MoneyPageStatBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';
import { generateSEOMetadata } from '../../config/seoTitles';

export default function NorthLauderdaleMoneyPage() {
  const cityName = 'North Lauderdale';
  const county = 'Broward County';
  const slug = 'north-lauderdale';

  useEffect(() => {
    const seoMeta = generateSEOMetadata('/locations/north-lauderdale');
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
      ratingValue: '4.8',
      reviewCount: '138'
    }
  });

  return (
    <>
      <Helmet>
        <title>Roof Replacement North Lauderdale, FL | All Phase USA</title>
        <meta name="description" content="North Lauderdale roof replacement by a dual-licensed, HVHZ-certified contractor. Shingle, tile, metal & flat roofs for 33068 homes off Rock Island & McNab. Free inspection. (754) 227-5605." />
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
              <div data-marker="above-fold-proof" className="mt-4 mb-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-black/40 backdrop-blur-sm border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold text-white">
                <span className="text-yellow-400">★ 4.8 Google</span>
                <span className="text-red-400">·</span>
                <span>2,500+ Roofs</span>
                <span className="text-red-400">·</span>
                <span>Dual-Licensed Since 2005</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing &amp; General Contractors (CCC-1331464, CGC-1526236)
              </div>
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  All Phase Construction USA is a top-rated roofing contractor serving {cityName}, FL — a Broward County city of roughly 44,000 residents bordered by Tamarac to the west, Margate to the north, Lauderhill to the south, and the Florida Turnpike to the east. We're dual-licensed as both a Florida State Certified Roofing Contractor (CCC-1331464) and a Certified General Contractor (CGC-1526236), and our crews work in {cityName} every week installing shingle, tile, metal, and flat-roof systems on the city's 1970s and 1980s single-family homes, townhouse villages, and condo associations across ZIP code 33068.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  {cityName} sits inside Florida's High Velocity Hurricane Zone (HVHZ), so every roof we install here is engineered to the HVHZ standard with 175+ mph wind ratings, sealed roof decks, enhanced fastening schedules, and Miami-Dade NOA-approved materials. Based 9 miles north in Deerfield Beach with 20+ years in the South Florida market, we know the {cityName} permitting workflow at City Hall on Kimberly Boulevard, the typical truss profiles in Kimberly Forest and Pinewood, and exactly what to expect when we open up an original 1970s shingle roof off Rock Island Road or McNab. Call (754) 227-5605 for a free roof inspection in {cityName}.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to={`/roof-inspection/${slug}`}
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

        <MoneyPageStatBar />

        {/* The Dual-License Advantage */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20">
                  <Award className="w-4 h-4" />
                  Dual-Licensed Authority
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Dual-License Advantage in {cityName}
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Most roofing contractors in {cityName} hold only a Certified Roofing Contractor (CCC) license. All Phase Construction USA holds both CCC-1331464 and CGC-1526236, which means we can repair the deck, trusses, fascia, and any structural condition we uncover on a {cityName} tear-off without subbing it out or stopping the job.
                  </p>
                  <p>
                    That matters in {cityName} because the housing stock is dominated by 1970s and early-1980s tract construction — original plywood decking, original 2x4 truss assemblies, original perimeter blocking on slab-on-grade homes off Kimberly Boulevard, McNab Road, and Rock Island Road. When we open up an old shingle roof in Kimberly Forest or Pinewood and find rotted decking or deteriorated truss connections, we have the legal authority to fix it the same day rather than handing your project off to a structural sub.
                  </p>
                  <p>
                    Each {cityName} roofing job is unique in scope, size, and complexity. The cost of <Link to="/roof-replacement" className="text-red-500 hover:text-red-400 underline">roof replacement</Link> varies depending on roof size, material grade, structural repairs needed, and access. Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 underline">Roof Cost Calculator</Link> for a preliminary estimate.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">License Capabilities</h3>
                <div className="space-y-4">
                  {[
                    'Complete roof replacement and installation',
                    'Structural repairs and roof deck reconstruction',
                    'Truss repair and reinforcement',
                    'Storm restoration with structural authority',
                    'Building envelope integration',
                    'Complete Broward County permit management'
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
                      'Miami-Dade NOA product approval verification'
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
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20">
                  <Shield className="w-4 h-4" />
                  Hurricane-Code Roofing
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  HVHZ Mastery in {cityName}
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    {cityName} is located inside Florida's High Velocity Hurricane Zone (HVHZ), which covers all of Broward and Miami-Dade County. HVHZ designation means every new roof in {cityName} must be installed using enhanced fastening, sealed deck systems, impact-rated materials, and components that carry valid Miami-Dade Notices of Acceptance (NOA).
                  </p>
                  <p>
                    Our crews are trained in HVHZ installation requirements from the deck up: ring-shank fasteners on a tightened nailing schedule, peel-and-stick secondary water barriers, hip and ridge clips on tile systems, and full NOA documentation submitted with every {county} permit. We do not use components that lack a current NOA, and we do not cut corners on the parts of the system the inspector cannot see.
                  </p>
                  <p>
                    Learn more about <Link to="/blog/what-makes-a-roof-hurricane-resistant" className="text-red-500 hover:text-red-400 underline">what makes a roof hurricane resistant</Link> and the <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-500 hover:text-red-400 underline">wind mitigation upgrades</Link> available to {cityName} homeowners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why North Lauderdale Homeowners Hire All Phase */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20">
                <MapPin className="w-4 h-4" />
                Local Knowledge
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why {cityName} Homeowners Hire All Phase Construction USA
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Serving {cityName} from our Deerfield Beach headquarters with intimate knowledge of {county} building codes, the city permit workflow on Kimberly Boulevard, and the regional roofing challenges unique to inland central Broward.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Broward Permit Expertise',
                  description: `Complete knowledge of the ${county} building department, the ${cityName} city permitting workflow, and the inspection sequencing required to keep a project moving on schedule.`
                },
                {
                  title: 'HVHZ Code Compliance',
                  description: `Full compliance with the Florida Building Code, HVHZ Section 1626 wind-load requirements, and the Miami-Dade NOA product-approval rules that govern every roofing material installed in ${cityName}.`
                },
                {
                  title: 'Era-Appropriate Materials',
                  description: `Deep familiarity with the 1970s–1980s framing, plywood decking, and fascia profiles common across ${cityName}, and the right modern HVHZ-rated materials to bring those homes up to current code without surprises.`
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

        {/* North Lauderdale Neighborhoods We Serve */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20">
                <MapPin className="w-4 h-4" />
                {cityName} Neighborhoods
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {cityName} Neighborhoods We Serve
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Working block by block across every {cityName} community
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-zinc-300 leading-relaxed">
              <p>
                {cityName} was incorporated in 1963 and built out almost entirely between 1970 and 1985 on a roughly 2.8-square-mile footprint. The result is a city dominated by slab-on-grade single-family homes, garden-style townhouse villages, and low-rise condominium associations — most now well past the 40-year mark and on their second or third roof life cycle.
              </p>
              <p>
                In <strong>Kimberly Forest</strong>, the residential corridor running north of Kimberly Boulevard, we work on the original 1970s ranch-style single-family homes that line streets feeding into Rock Island Road and SW 71st Avenue. These houses typically have 3-tab shingle roofs on their second life cycle, original plywood decking that frequently needs partial replacement on tear-off day, and gable ends that benefit significantly from modern HVHZ wind-load upgrades.
              </p>
              <p>
                <strong>Pinewood</strong>, the residential pocket south of McNab Road, contains a mix of mid-1970s ranch homes plus several long-running townhouse developments. We handle both the single-family side and the townhouse-association side, where coordinating with HOA boards on Boulevard of Champions and submitting unified ARC packages is part of every project.
              </p>
              <p>
                The <strong>Broadlands</strong> and <strong>Hampton Pines</strong> neighborhoods, in the western and northwestern portions of {cityName}, contain some of the city's largest concentrations of late-1970s and early-1980s tract housing. These streets — running off Hampton Boulevard and McNab Road — see steady reroofing demand because the original construction is now reaching the structural age where deck replacement and truss reinforcement become routine parts of the job. Our dual license is built for exactly that situation.
              </p>
              <p>
                Throughout the rest of {cityName}, we serve the low-rise condominium associations along Rock Island Road, SW 81st Avenue, and the corridor near {cityName} City Hall and the Hampton Pines Park. Condo and townhouse roofs in these neighborhoods are usually flat or low-slope systems — TPO, modified bitumen, or built-up — and they require a contractor who understands both the HVHZ flat-roof rules and the long planning horizon that condo board projects demand.
              </p>
              <p>
                Whether you own a single-family home in Kimberly Forest, a townhouse in Pinewood, or sit on a condo association board off Rock Island Road, we bring the same dual-license authority and HVHZ-grade installation standards to every {cityName} address.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Roofing Services */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20">
                <Hammer className="w-4 h-4" />
                Full-Service Roofing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Roofing Services in {cityName}
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Complete roofing solutions for {cityName} residential and commercial properties
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Roof Replacement</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Complete <Link to="/roof-replacement" className="text-red-500 hover:text-red-400 underline">roof replacement</Link> for {cityName} homes and businesses, starting with a full on-roof inspection. We install architectural shingle, concrete and clay tile, standing seam metal, and flat-roof systems — every component carrying a current Miami-Dade NOA. Learn <Link to="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive" className="text-red-500 hover:text-red-400 underline">how to spot early signs of roof damage</Link> before they become costly.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Storm &amp; Emergency Repairs</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Our roofers in {cityName} are available 24/7 for <Link to={`/roof-repair/${slug}`} className="text-red-500 hover:text-red-400 underline">emergency roof repair</Link> — same-day response for active leaks, lifted shingles, and storm-displaced flashing after a Broward thunderstorm or named system. We do storm work and we will be on your roof even if you have an open insurance claim. We do not act as a public adjuster and we do not deal with insurance carriers on your behalf.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Professional Inspections</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Comprehensive 21-point <Link to={`/roof-inspection/${slug}`} className="text-red-500 hover:text-red-400 underline">roof inspections</Link> for {cityName} properties identify issues early and extend roof lifespan. Includes pre-purchase evaluations and <Link to="/roof-maintenance-programs" className="text-red-500 hover:text-red-400 underline">maintenance assessments</Link>. Understand <Link to="/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not" className="text-red-500 hover:text-red-400 underline">your roofing warranty</Link> before you sign.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">All Roof Types</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">Tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>, and <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline">commercial roofing</Link> (TPO, PVC, modified bitumen, EPDM) — all expertly installed for {cityName} homes, townhouses, and condo associations. Flexible <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline">financing options</Link> available.
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
              All Phase Construction USA is dedicated to empowering {cityName} homeowners with the knowledge to make informed roofing decisions. Our <Link to="/learning-center" className="text-red-600 hover:text-red-500 underline transition-colors">Learning Center</Link> provides in-depth guides on roof replacement costs, HVHZ requirements, wind mitigation, and selecting the right roofing materials for inland Broward homes.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { to: '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home', label: 'Wind Mitigation Upgrades for South Florida Homes' },
                { to: '/blog/what-makes-a-roof-hurricane-resistant', label: 'What Makes a Roof Hurricane Resistant' },
                { to: '/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive', label: 'How to Spot Early Signs of Roof Damage' },
                { to: '/blog/roof-replacement-cost-broward-county-2026', label: 'Roof Replacement Cost Guide — Broward County 2026' },
                { to: '/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not', label: 'Understanding Your Roofing Warranty' },
                { to: '/blog/how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid', label: 'How to Hire a Roofer in South Florida' },
                { to: '/blog/why-homeowners-should-avoid-pulling-their-own-roofing-permit-in-south-florida', label: 'Why You Should Never Pull Your Own Roofing Permit' },
                { to: '/blog/the-pros-and-cons-of-architectural-shingles-vs-three-tab-shingles', label: 'Architectural vs 3-Tab Shingles for Older Homes' },
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
              Serving {cityName} and Surrounding Broward Communities
            </h2>
            <p className="text-lg text-zinc-300 text-center mb-8 max-w-3xl mx-auto">
              All Phase Construction USA proudly serves all of {cityName} and the neighboring inland Broward cities. Our crews work this corridor every week, which means short scheduling windows and faster turnaround on permits and material delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-zinc-300 mb-8">
              <Link to="/locations/tamarac" className="hover:text-red-600 transition-colors">Tamarac</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/margate" className="hover:text-red-600 transition-colors">Margate</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lauderhill" className="hover:text-red-600 transition-colors">Lauderhill</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lauderdale-lakes" className="hover:text-red-600 transition-colors">Lauderdale Lakes</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/coconut-creek" className="hover:text-red-600 transition-colors">Coconut Creek</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/coral-springs" className="hover:text-red-600 transition-colors">Coral Springs</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/sunrise" className="hover:text-red-600 transition-colors">Sunrise</Link>
            </div>
          </div>
        </section>

        {/* Ready to Get Started CTA */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your {cityName} Roof Project
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact All Phase Construction USA today for your free roof inspection and estimate in {cityName}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={`/roof-inspection/${slug}`}
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

        {/* MoneyPageEnhancements: map, sticky form, trust strip, testimonials, FAQ + schemas */}
        <MoneyPageEnhancements
          cityName="North Lauderdale"
          county="Broward"
          hvhz={true}
          neighborhoods={["Kimberly Forest", "Pinewood", "Broadlands", "Hampton Pines"]}
        />
        <section className="py-20 bg-zinc-950">
          <Contact />
        </section>

      </div>
    </>
  );
}
