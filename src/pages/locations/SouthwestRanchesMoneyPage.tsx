/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Southwest Ranches Custom Location Page
 * ═══════════════════════════════════════════════════════════════════════════
 * Fully tailored to Southwest Ranches, FL — Broward County, HVHZ.
 * Estate / large-acreage angle. Inland (west of I-75). No coastal claims.
 * Built from cleaned Surfer SEO outline — competitor names removed, banned
 * insurance/carrier/claims language scrubbed, geographic accuracy enforced.
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

export default function SouthwestRanchesMoneyPage() {
  const cityName = 'Southwest Ranches';
  const county = 'Broward County';
  const slug = 'southwest-ranches';

  useEffect(() => {
    const seoMeta = generateSEOMetadata('/locations/southwest-ranches');
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
        <title>Roof Replacement Southwest Ranches, FL | Estate Specialist | All Phase</title>
        <meta name="description" content="Southwest Ranches estate roof replacement. Tile, metal & large-acreage homes. HVHZ-certified, dual-licensed since 2005. Free inspection. (754) 227-5605." />
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
                  All Phase Construction USA is a top-rated roofing contractor serving {cityName}, FL — the rural-residential town in southwest Broward County known for its large-acreage estates, equestrian properties, and one-acre-minimum zoning. We're dual-licensed as both a Florida State Certified Roofing Contractor (CCC-1331464) and a Certified General Contractor (CGC-1526236), and our crews work {cityName} addresses across Sunshine Ranches, Rolling Oaks, Green Meadows, and Country Estates installing tile, standing-seam metal, architectural shingle, and flat-roof systems on the long-span custom homes that define the town.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  {cityName} sits inside Florida's High Velocity Hurricane Zone (HVHZ), which means every roof we install on a {cityName} estate is engineered to the HVHZ standard with 175+ mph wind ratings, sealed roof decks, enhanced fastening schedules, and Miami-Dade NOA-approved materials. Based in Deerfield Beach with 20+ years in the South Florida market, we know the {county} permitting process, the long roof spans typical of a {cityName} custom build, and what it takes to mobilize crews and material onto properties off Griffin Road, Stirling Road, and SW 178th Avenue without tearing up the landscaping. Call (754) 227-5605 for a free roof inspection in {cityName}.
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
                    Most roofing contractors in {cityName} hold only a Certified Roofing Contractor (CCC) license. All Phase Construction USA holds both CCC-1331464 and CGC-1526236, which means we can repair the deck, trusses, fascia, soffits, and any structural condition we uncover on a {cityName} tear-off without subbing it out or stalling the job.
                  </p>
                  <p>
                    That matters in {cityName} because the town is dominated by long-span custom homes with complex roof geometry — multiple hips, valleys, dormers, and 30-to-60-foot truss runs over great rooms, garages, and detached guest structures. When we open up an aging tile or metal system on a Sunshine Ranches estate and find rotted decking or compromised truss connections, we have the legal authority to fix it the same day rather than handing your project off to a structural sub.
                  </p>
                  <p>
                    Each {cityName} estate roofing job is unique in scope, size, and complexity. The cost of <Link to="/roof-replacement" className="text-red-500 hover:text-red-400 underline">roof replacement</Link> varies depending on roof size, material grade, structural repairs needed, and access. Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 underline">Roof Cost Calculator</Link> for a preliminary estimate.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">License Capabilities</h3>
                <div className="space-y-4">
                  {[
                    'Complete estate roof replacement and installation',
                    'Structural repairs and roof deck reconstruction',
                    'Long-span truss repair and reinforcement',
                    'Storm-damage repair and full restoration',
                    'Detached guest house and barn roofing',
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
                    Our crews are trained in HVHZ installation requirements from the deck up: ring-shank fasteners on a tightened nailing schedule, peel-and-stick secondary water barriers, hip and ridge clips on tile systems, and full NOA documentation submitted with every {county} permit. On the long roof spans typical of {cityName} estates, that disciplined fastening pattern is the difference between a roof that survives a major storm intact and one that doesn't.
                  </p>
                  <p>
                    Learn more about <Link to="/blog/what-makes-a-roof-hurricane-resistant" className="text-red-500 hover:text-red-400 underline">what makes a roof hurricane resistant</Link> and the <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-500 hover:text-red-400 underline">wind mitigation upgrades</Link> available to {cityName} homeowners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Southwest Ranches Homeowners Hire All Phase */}
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
                Serving {cityName} from our Deerfield Beach headquarters with intimate knowledge of {county} building codes, the town's rural-residential permitting nuances, and the demands of long-span estate roofs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Estate-Scale Project Management',
                  description: `Long material runs, multiple roof planes, detached guest houses, and large equipment mobilization on one-acre-plus ${cityName} lots — managed start to finish without disrupting the rest of your property.`
                },
                {
                  title: 'HVHZ Code Compliance',
                  description: `Full compliance with the Florida Building Code, HVHZ Section 1626 wind-load requirements, and the Miami-Dade NOA product-approval rules that govern every roofing material installed in ${cityName}.`
                },
                {
                  title: 'Premium Material Expertise',
                  description: `Concrete and clay tile, standing-seam metal, architectural shingle, and high-performance flat systems — installed to the spec ${cityName} custom homes were originally designed around.`
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

        {/* Southwest Ranches Neighborhoods We Serve */}
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
                Estate by estate across every {cityName} community
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-zinc-300 leading-relaxed">
              <p>
                {cityName} is a rural-residential town of roughly 13 square miles in southwest Broward, bordered by Davie, Pembroke Pines, and the edge of the Everglades buffer. The town was incorporated in 2000 specifically to preserve its low-density, large-lot character — most parcels are one acre or larger, and the housing stock is dominated by custom-built single-family estates, equestrian properties, and a small number of agricultural holdings across ZIP codes 33330, 33331, and 33332.
              </p>
              <p>
                In <strong>Sunshine Ranches</strong>, the town's largest and most established equestrian neighborhood, we work on long-span tile and metal roofs over custom homes set back from quiet two-lane roads. These properties typically include a main residence, a detached garage or guest house, and sometimes a barn or stable — every structure is its own roof project, and we coordinate the entire site under a single permit and a single crew schedule.
              </p>
              <p>
                <strong>Rolling Oaks</strong> sits in the eastern portion of {cityName} and contains a mix of custom estates and gated subdivisions. Tile is the dominant material here, and after 20+ years in service, many original Rolling Oaks roofs are now reaching the point where a full HVHZ-spec replacement makes more sense than continued spot repair.
              </p>
              <p>
                <strong>Green Meadows</strong> and <strong>Country Estates</strong>, in the southern and western portions of the town, contain some of {cityName}'s largest parcels. The homes out here are typically newer custom builds with complex roof geometry — multiple gables, deep overhangs, and standing-seam metal accents over entryways and porte-cochères. We handle the full system as a single integrated installation rather than treating each roof type as a separate trade.
              </p>
              <p>
                Throughout the rest of {cityName}, we serve estates along Griffin Road, Stirling Road, SW 178th Avenue, and SW 196th Avenue, plus the equestrian-zoned properties near Frank Veltri Tennis Center and the {cityName} Town Hall. Every job — whether it's a 2,500 sq ft tile reroof or a 12,000 sq ft mixed-material estate — gets the same dual-license authority and HVHZ-grade installation discipline.
              </p>
              <p>
                Whether you own a tile-roofed estate in Sunshine Ranches, a metal-accented custom home in Country Estates, or an equestrian property tucked off Griffin Road, we bring the same standards to every {cityName} address.
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
                Complete roofing solutions for {cityName} estates, equestrian properties, and detached structures
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Estate Roof Replacement</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Complete <Link to="/roof-replacement" className="text-red-500 hover:text-red-400 underline">roof replacement</Link> for {cityName} estates and outbuildings, starting with a full on-roof inspection. We install concrete and clay tile, standing-seam metal, architectural shingle, and flat-roof systems — every component carrying a current Miami-Dade NOA. Learn <Link to="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive" className="text-red-500 hover:text-red-400 underline">how to spot early signs of roof damage</Link> before they become costly.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Storm &amp; Emergency Repairs</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Our roofers in {cityName} are available 24/7 for <Link to={`/roof-repair/${slug}`} className="text-red-500 hover:text-red-400 underline">emergency roof repair</Link> — same-day response for active leaks, lifted tile, and storm-displaced flashing. We perform urgent tarp-and-dry-in after a storm to protect the interior, and we do the permanent repair work directly with you. We do not act as a public adjuster and we do not deal with insurance carriers — that part stays between you and your provider.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Professional Inspections</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Comprehensive 21-point <Link to={`/roof-inspection/${slug}`} className="text-red-500 hover:text-red-400 underline">roof inspections</Link> for {cityName} estates identify issues early and extend roof lifespan. Includes pre-purchase evaluations and <Link to="/roof-maintenance-programs" className="text-red-500 hover:text-red-400 underline">maintenance assessments</Link> for tile and metal systems. Understand <Link to="/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not" className="text-red-500 hover:text-red-400 underline">your roofing warranty</Link> before you sign.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">All Roof Types</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">Tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>, and <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline">commercial roofing</Link> (TPO, PVC, modified bitumen, EPDM) — all expertly installed for {cityName} main homes, guest houses, garages, and barns. Flexible <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline">financing options</Link> available.
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
              All Phase Construction USA is dedicated to empowering {cityName} homeowners with the knowledge to make informed roofing decisions. Our <Link to="/learning-center" className="text-red-600 hover:text-red-500 underline transition-colors">Learning Center</Link> provides in-depth guides on roof replacement costs, HVHZ requirements, wind mitigation, and selecting the right roofing materials for large-acreage Broward estates.
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
                { to: '/blog/the-pros-and-cons-of-architectural-shingles-vs-three-tab-shingles', label: 'Architectural vs 3-Tab Shingles' },
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
              All Phase Construction USA proudly serves all of {cityName} and the neighboring southwest Broward cities. Our crews work this corridor every week, which means short scheduling windows and faster turnaround on permits and material delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-zinc-300 mb-8">
              <Link to="/locations/davie" className="hover:text-red-600 transition-colors">Davie</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/cooper-city" className="hover:text-red-600 transition-colors">Cooper City</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pembroke-pines" className="hover:text-red-600 transition-colors">Pembroke Pines</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/weston" className="hover:text-red-600 transition-colors">Weston</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/plantation" className="hover:text-red-600 transition-colors">Plantation</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/sunrise" className="hover:text-red-600 transition-colors">Sunrise</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/miramar" className="hover:text-red-600 transition-colors">Miramar</Link>
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
          cityName="Southwest Ranches"
          county="Broward"
          hvhz={true}
          neighborhoods={["Sunshine Ranches", "Rolling Oaks", "Green Meadows", "Country Estates"]}
        />
        <section className="py-20 bg-zinc-950">
          <Contact />
        </section>

      </div>
    </>
  );
}
