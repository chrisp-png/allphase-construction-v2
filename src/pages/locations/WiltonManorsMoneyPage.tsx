/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Wilton Manors Custom Location Page
 * ═══════════════════════════════════════════════════════════════════════════
 * Fully tailored to Wilton Manors, FL — Broward County, HVHZ.
 * "Island City" angle. 1940s–1960s CBS cottage stock + mid-century ranches.
 * Wilton Drive arts/entertainment district + Middle River geography.
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

export default function WiltonManorsMoneyPage() {
  const cityName = 'Wilton Manors';
  const county = 'Broward County';
  const slug = 'wilton-manors';

  useEffect(() => {
    const seoMeta = generateSEOMetadata('/locations/wilton-manors');
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
        <title>Roof Replacement Wilton Manors, FL | Island City Roofer | All Phase</title>
        <meta name="description" content="Wilton Manors roof replacement on 1940s–1960s CBS cottages, mid-century ranches & flat-roof condos. Dual-licensed, HVHZ-certified since 2005. Free inspection (754) 227-5605." />
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
                  All Phase Construction USA is a top-rated roofing contractor serving {cityName}, FL — the two-square-mile "Island City" surrounded by the forks of the Middle River, tucked between Fort Lauderdale, Oakland Park, and the Coral Ridge corridor. We're dual-licensed as both a Florida State Certified Roofing Contractor (CCC-1331464) and a Certified General Contractor (CGC-1526236), and our crews work {cityName} addresses every week — installing architectural shingle, flat and low-slope membrane systems, standing-seam metal, and tile on the dense mix of 1940s–1960s CBS cottages, mid-century ranches, and low-rise condo associations that fill ZIP codes 33305, 33311, and 33334.
                </p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  {cityName} sits inside Florida's High Velocity Hurricane Zone (HVHZ), so every roof we install here is engineered to the HVHZ standard with 175+ mph wind ratings, sealed roof decks, enhanced fastening schedules, and Miami-Dade NOA-approved materials. Based 12 miles north in Deerfield Beach with 20+ years in the South Florida market, we know the {cityName} permitting workflow, the tight-lot access constraints on the side streets off Wilton Drive and NE 26th Street, and exactly what to expect when we tear off an original 1950s built-up flat roof or a 70-year-old shingle system on a Wilton Manors Heights cottage. Call (754) 227-5605 for a free roof inspection in {cityName}.
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
                    That matters in {cityName} more than almost any other Broward city. The housing stock is dominated by 1940s, 1950s, and early-1960s CBS (concrete block stucco) cottages and mid-century ranches that were built with original 1x6 plank decking, original cypress fascia, and original 2x4 rafter framing — much of it now 70+ years old. When we tear off a Wilton Manors Heights cottage and find soft decking, deteriorated rafter tails, or termite damage in the eaves, we have the legal authority to fix it the same day instead of stopping the project to bring in a structural sub.
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
                    'Complete cottage and ranch roof replacement',
                    'Plank deck removal and modern plywood re-deck',
                    'Rafter tail and fascia restoration',
                    'Flat-roof and low-slope membrane systems',
                    'Storm-damage repair and full restoration',
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
                    Because {cityName} sits less than three miles inland from the Atlantic and is wrapped on three sides by the Middle River, the city's roofs see consistent wind exposure year-round. Our crews are trained in HVHZ installation requirements from the deck up: ring-shank fasteners on a tightened nailing schedule, peel-and-stick secondary water barriers, properly engineered drip edge and eave details on the low-overhang cottage profiles, and full NOA documentation submitted with every {county} permit. We do not use components that lack a current NOA, and we do not cut corners on the parts of the system the inspector cannot see.
                  </p>
                  <p>
                    Learn more about <Link to="/blog/what-makes-a-roof-hurricane-resistant" className="text-red-500 hover:text-red-400 underline">what makes a roof hurricane resistant</Link> and the <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-500 hover:text-red-400 underline">wind mitigation upgrades</Link> available to {cityName} homeowners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Wilton Manors Homeowners Hire All Phase */}
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
                Serving {cityName} from our Deerfield Beach headquarters with intimate knowledge of {county} building codes, the Island City's tight-lot logistics, and the demands of restoring 70-year-old CBS cottage roofs to modern HVHZ spec.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Island City Logistics',
                  description: `Tight lots, narrow side streets, and shared driveways are the rule on the residential blocks off Wilton Drive and NE 26th Street. We schedule material drops, crane work, and dumpster placement in coordination with neighbors to keep your ${cityName} project moving without blocking the block.`
                },
                {
                  title: 'CBS Cottage Expertise',
                  description: `Deep familiarity with the 1940s–1960s CBS construction common across Wilton Manors Heights, Coral Gardens, and the Westside — the original plank decking, the cypress fascia, the low-slope porch additions, and the right modern HVHZ-rated assemblies to bring those homes up to current code without surprises.`
                },
                {
                  title: 'Flat & Low-Slope Specialists',
                  description: `A large share of ${cityName}'s housing — from the 1950s ranches to the low-rise condo associations along NE 26th Street and Wilton Drive — relies on flat or low-slope roof systems. We install TPO, PVC, modified bitumen, and built-up roofs to the Miami-Dade NOA standard.`
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

        {/* Wilton Manors Neighborhoods We Serve */}
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
                {cityName} was incorporated in 1947 and grew into its identity as the "Island City" because the East and Middle Forks of the Middle River wrap around three sides of its roughly two-square-mile footprint. The result is one of the most architecturally consistent small cities in Broward — block after block of 1940s and 1950s CBS cottages, 1960s mid-century ranches, and a tight cluster of low-rise condo and apartment buildings along Wilton Drive and NE 26th Street.
              </p>
              <p>
                In <strong>Wilton Manors Heights</strong>, the central residential core north of Oakland Park Boulevard, we work on the original post-war CBS cottages that line streets like NE 8th Avenue, NE 9th Avenue, and NE 21st Court. These homes typically have low-pitch hip or gable roofs, original 1x6 plank decking under the shingles, narrow eaves, and either an attached or screened-in low-slope porch addition tacked on in the 1960s or 1970s. Re-roofing these properly almost always means a full plywood re-deck plus modern HVHZ fastening — work our dual license is built for.
              </p>
              <p>
                <strong>Coral Gardens</strong>, on the western side of {cityName} along the Middle River and NE 4th Avenue, contains a mix of 1950s and 1960s ranch homes on quiet, tree-lined blocks. Many of these properties back directly onto the river, which means waterfront wind exposure on the rear elevations and a higher incidence of fascia and soffit deterioration where salt-laden air meets aging cypress trim. We handle the roof, the fascia, and the soffits as one integrated repair under one permit.
              </p>
              <p>
                The <strong>Westside</strong> neighborhood, between Andrews Avenue and the river's west fork, contains some of {cityName}'s densest concentration of mid-century ranches — many of them now under second-generation ownership and overdue for a full reroof. Streets like NW 21st Court and NW 25th Street see consistent reroofing demand, and we know the access patterns: which alleys take a dump trailer, which driveways need plywood protection for crane work, and which neighbors will appreciate a heads-up the day before tear-off.
              </p>
              <p>
                Along <strong>Wilton Drive</strong> and <strong>NE 26th Street</strong>, the city's primary commercial and entertainment corridor, we serve the low-rise condo associations, mixed-use buildings, and small commercial properties that anchor the Island City's arts and dining district. Most of these buildings rely on flat or low-slope membrane roofs — TPO, PVC, modified bitumen, and built-up systems — and they require a contractor who understands both the HVHZ flat-roof rules and the long planning horizon that condo board projects demand. We work directly with property managers and association boards to sequence the work around tenant access and business operations.
              </p>
              <p>
                Throughout the rest of {cityName}, we serve the residential blocks bordering Hagen Park, the corridor near Richardson Historic Park, and the small-lot single-family streets along NE 6th Avenue. Whether you own a 1948 cottage in Wilton Manors Heights, a riverfront ranch in Coral Gardens, or sit on a condo association board on Wilton Drive, we bring the same dual-license authority and HVHZ-grade installation discipline to every {cityName} address.
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
                Complete roofing solutions for {cityName} cottages, ranches, condos, and commercial properties
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Roof Replacement</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Complete <Link to="/roof-replacement" className="text-red-500 hover:text-red-400 underline">roof replacement</Link> for {cityName} cottages, ranches, condos, and small commercial buildings, starting with a full on-roof inspection. We install architectural shingle, concrete and clay tile, standing-seam metal, and TPO/PVC/modified bitumen flat systems — every component carrying a current Miami-Dade NOA. Learn <Link to="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive" className="text-red-500 hover:text-red-400 underline">how to spot early signs of roof damage</Link> before they become costly.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Storm &amp; Emergency Repairs</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Our roofers in {cityName} are available 24/7 for <Link to={`/roof-repair/${slug}`} className="text-red-500 hover:text-red-400 underline">emergency roof repair</Link> — same-day response for active leaks, lifted shingles, and storm-displaced flashing. We perform urgent tarp-and-dry-in after a storm to protect the interior, and we do the permanent repair work directly with you. We do not act as a public adjuster and we do not deal with insurance carriers — that part stays between you and your provider.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">Professional Inspections</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Comprehensive 21-point <Link to={`/roof-inspection/${slug}`} className="text-red-500 hover:text-red-400 underline">roof inspections</Link> for {cityName} properties identify issues early and extend roof lifespan. Includes pre-purchase evaluations and <Link to="/roof-maintenance-programs" className="text-red-500 hover:text-red-400 underline">maintenance assessments</Link> on the older CBS cottage stock. Understand <Link to="/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not" className="text-red-500 hover:text-red-400 underline">your roofing warranty</Link> before you sign.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold">All Roof Types</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 underline">Tile roofing</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 underline">metal roofing</Link>, <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 underline">shingle roofing</Link>, <Link to="/flat-roofing" className="text-red-500 hover:text-red-400 underline">flat roofing</Link>, and <Link to="/commercial-roofing" className="text-red-500 hover:text-red-400 underline">commercial roofing</Link> (TPO, PVC, modified bitumen, EPDM) — all expertly installed for {cityName} cottages, ranches, condo associations, and Wilton Drive commercial properties. Flexible <Link to="/easy-payments" className="text-red-500 hover:text-red-400 underline">financing options</Link> available.
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
              All Phase Construction USA is dedicated to empowering {cityName} homeowners with the knowledge to make informed roofing decisions. Our <Link to="/learning-center" className="text-red-600 hover:text-red-500 underline transition-colors">Learning Center</Link> provides in-depth guides on roof replacement costs, HVHZ requirements, wind mitigation, and selecting the right roofing materials for older CBS cottage and mid-century ranch homes.
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
              All Phase Construction USA proudly serves all of {cityName} and the neighboring central Broward cities. Our crews work this corridor every week, which means short scheduling windows and faster turnaround on permits and material delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-zinc-300 mb-8">
              <Link to="/locations/fort-lauderdale" className="hover:text-red-600 transition-colors">Fort Lauderdale</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/oakland-park" className="hover:text-red-600 transition-colors">Oakland Park</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lauderdale-by-the-sea" className="hover:text-red-600 transition-colors">Lauderdale-by-the-Sea</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pompano-beach" className="hover:text-red-600 transition-colors">Pompano Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lauderdale-lakes" className="hover:text-red-600 transition-colors">Lauderdale Lakes</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lauderhill" className="hover:text-red-600 transition-colors">Lauderhill</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/plantation" className="hover:text-red-600 transition-colors">Plantation</Link>
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
          cityName="Wilton Manors"
          county="Broward"
          hvhz={true}
          neighborhoods={["Wilton Manors Heights", "Coral Gardens", "Westside", "Wilton Drive Corridor"]}
        />
        <section className="py-20 bg-zinc-950">
          <Contact />
        </section>

      </div>
    </>
  );
}
