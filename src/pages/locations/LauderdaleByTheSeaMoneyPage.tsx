/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Lauderdale-By-The-Sea Custom Location Page — Full SEO Money Page
 * ═══════════════════════════════════════════════════════════════════════════
 * HVHZ-certified coastal roofing content for Lauderdale-By-The-Sea, FL.
 * FAQPage schema is injected by prerender-static.mjs at build time — do NOT duplicate here.
 */

import { useEffect } from 'react';
import MoneyPageEnhancements from '../../components/MoneyPageEnhancements';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, FileCheck, Wrench, Camera, Building2, Hammer, FileText, BookOpen, Star, Waves, Droplets } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import MoneyPageStatBar from '../../components/MoneyPageStatBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { generateSEOMetadata } from '../../config/seoTitles';

export default function LauderdaleByTheSeaMoneyPage() {
  const cityName = 'Lauderdale-By-The-Sea';
  const county = 'Broward County';
  const slug = 'lauderdale-by-the-sea';

  useEffect(() => {
    const seoMeta = generateSEOMetadata('/locations/lauderdale-by-the-sea');
    document.title = seoMeta.title;
  }, []);

  const canonicalUrl = typeof window !== 'undefined'
    ? window.location.href.split('?')[0].split('#')[0]
    : `https://allphaseconstructionfl.com/locations/${slug}`;

  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: 'Lauderdale-By-The-Sea',
    stateName: 'Florida',
    latitude: 26.1924,
    longitude: -80.0963,
    aggregateRating: {
      ratingValue: '4.9',
      reviewCount: '150'
    }
  });

  return (
    <>
      <Helmet>
        <title>Roof Replacement Lauderdale-By-The-Sea, FL | All Phase USA</title>
        <meta
          name="description"
          content="Lauderdale-By-The-Sea roofing contractor. HVHZ-certified, dual-licensed. Tile, metal, shingle & flat roofing for coastal barrier island homes. Free inspection. (754) 227-5605."
        />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <StickyConversionBar />

      {/* FAQPage schema is injected by prerender-static.mjs at build time — do NOT duplicate here */}

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
                <div data-marker="above-fold-proof" className="mt-4 mb-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-black/40 backdrop-blur-sm border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold text-white">
                  <span className="text-yellow-400">★ 4.8 Google</span>
                  <span className="text-red-400">·</span>
                  <span>2,500+ Roofs</span>
                  <span className="text-red-400">·</span>
                  <span>Dual-Licensed Since 2005</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing & General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  All Phase Construction USA is a dual-licensed roofing contractor (CCC-1331464) and certified general contractor (CGC-1526236) serving {cityName}, FL with comprehensive roof replacement, repair, and inspection services. As a family-owned business headquartered in nearby Deerfield Beach with 20+ years of experience, we specialize in coastal barrier island roofing built to HVHZ wind code standards — the most demanding roofing environment in South Florida.
                </p>

                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  {cityName} sits directly on the Atlantic Ocean barrier island between Fort Lauderdale and Pompano Beach, exposing every roof to unrelenting salt spray, UV radiation, and direct hurricane wind paths. Our dual-license advantage means we handle both the roofing system and the underlying structural work that standard roofing-only contractors cannot — delivering complete solutions from deck repairs to full re-roofs with unmatched structural authority.
                </p>

                <p className="text-xl text-zinc-300 leading-relaxed">
                  Call (754) 227-5605 for a free roof inspection in {cityName}. We also install impact windows and doors for properties seeking complete storm protection.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
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

        <MoneyPageStatBar />

        {/* Barrier Island Roofing Challenges */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Waves className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Barrier Island Roofing: Why {cityName} Demands Specialized Expertise
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                {cityName} is not a typical South Florida suburb — it is a barrier island community sitting directly on the Atlantic Ocean with no buffer between the ocean and residential properties. This geography creates the most aggressive roofing environment in {county}. Salt-laden ocean air reaches rooftops within seconds of leaving the surf, coating every fastener, flashing detail, and exposed material with corrosive chloride compounds 365 days a year.
              </p>

              <p>
                Standard roofing materials and techniques that last 20 years in inland communities like Coral Springs or Plantation may fail within 8 to 12 years on {cityName}'s barrier island without proper corrosion-resistant specifications. Galvanized fasteners corrode rapidly in constant salt exposure — we specify stainless steel ring-shank nails, marine-grade flashing, and salt-rated underlayment systems on every {cityName} project. The combination of direct ocean wind exposure, salt aerosol deposition, and intense UV radiation from unobstructed sun angles creates a triple-threat environment that demands contractor expertise most roofers simply do not possess.
              </p>

              <p>
                Our proximity from Deerfield Beach — just 4 miles north — means we respond to {cityName} emergencies faster than most contractors can reach the island, with crews that understand the unique permitting and access requirements of this compact barrier island community.
              </p>
            </div>
          </div>
        </section>

        {/* The Dual-License Advantage */}
        <section className="py-20 bg-[#09090b]">
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
                Most roofing contractors operating in {cityName} hold only a CCC (Certified Roofing Contractor) license, limiting their scope to roof surface work. When they encounter structural issues — damaged trusses, inadequate roof-to-wall connections, compromised decking, or load-bearing problems — they must stop and hire a separate general contractor. On a barrier island where salt intrusion can weaken structural connections beneath the roof surface, this limitation is a serious problem.
              </p>

              <p>
                Our CGC license (Certified General Contractor) authorizes us to evaluate and repair the complete structural system supporting your roof. During every {cityName} roof replacement, we inspect roof deck fastening, assess truss integrity, verify proper connections between the roof structure and exterior walls, and ensure the entire system meets current Florida Building Code requirements for HVHZ zones. When we identify structural deficiencies — which are common in {cityName}'s older oceanfront homes — we repair them immediately under one contract, one timeline, and one comprehensive warranty.
              </p>

              <p>
                Use our <Link to="/roof-cost-calculator" className="text-red-600 hover:text-red-500 underline transition-colors">roof cost calculator</Link> for a preliminary estimate based on your roof type and size.
              </p>
            </div>
          </div>
        </section>

        {/* HVHZ Mastery */}
        <section className="py-20 bg-[#27272a]">
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
                {cityName} is located within South Florida's High Velocity Hurricane Zone (HVHZ), where building codes mandate the most stringent wind resistance standards in the United States. Every roof installation must withstand 175+ mph wind speeds — equivalent to a strong Category 5 hurricane making direct landfall. As a barrier island community, {cityName} faces direct, unobstructed hurricane wind paths from the Atlantic with no inland buffer to reduce wind velocity.
              </p>

              <p>
                Our HVHZ certification and dual-licensing enable us to engineer roof systems specifically for {cityName}'s extreme coastal conditions. We use enhanced fastening schedules with stainless steel ring-shank nails at 6-inch spacing (versus standard 12-inch), high-wind rated shingles with reinforced mat construction, upgraded hip and ridge cap systems with specialty adhesive application, and engineered roof-to-wall connections that transfer wind loads directly to the structural frame. For {cityName}'s oceanfront properties, we add marine-grade corrosion protection at every connection point.
              </p>

              <p>
                Florida building codes require hurricane-rated materials and specific installation methods, which can potentially qualify homeowners for <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-600 hover:text-red-500 underline transition-colors">insurance premium reductions through wind mitigation</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Salt Air & Coastal Corrosion */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Salt Air & Coastal Corrosion: The Hidden Threat to {cityName} Roofs
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                The single greatest threat to roofing systems in {cityName} is not wind — it is salt air corrosion. Properties within 3,000 feet of the Atlantic Ocean experience salt deposition rates 10 to 50 times higher than properties just a few miles inland. In {cityName}, every single property falls within this extreme corrosion zone because the town is only 3 blocks wide from ocean to Intracoastal Waterway.
              </p>

              <p>
                Salt corrosion attacks galvanized steel fasteners, metal flashing, drip edges, and valley lining — the hidden components that keep water out of your home. A roof may look fine from the ground while its fastening system is quietly failing beneath the surface. We have removed tile roofs in {cityName} where every single nail had corroded to the point of structural failure, leaving tiles held in place only by their own weight. The next strong wind event would have sent those tiles airborne.
              </p>

              <p>
                All Phase Construction USA specifies stainless steel fasteners, marine-grade flashing, and salt-resistant underlayment on every {cityName} project. These materials cost more upfront but prevent the catastrophic failures that send {cityName} homeowners scrambling for emergency repairs after storms. Our approach to coastal corrosion prevention is the same standard used on oceanfront institutional and commercial properties — applied to every residential project we complete in {cityName}.
              </p>
            </div>
          </div>
        </section>

        {/* Lauderdale-By-The-Sea Neighborhoods */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {cityName} Neighborhoods & Local Roofing Expertise
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                {cityName} is a compact barrier island town of approximately 7,000 residents, but its roofing needs vary significantly by location within the community. Properties along El Mar Drive and the oceanfront blocks face the most extreme salt and wind exposure — these homes require the highest-grade corrosion-resistant materials and enhanced waterproofing details at every roof penetration.
              </p>

              <p>
                Along Commercial Boulevard — the town's main corridor — mixed-use and commercial properties require <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roofing systems</Link> engineered for both the salt environment and the unique structural loads of commercial construction. The residential neighborhoods between the ocean and the Intracoastal — including properties along Bougainvilla Drive, Washingtonia Avenue, and Sea Grape Drive — feature the classic mid-century Florida homes with concrete tile roofs that are now reaching their 25 to 35 year replacement cycle.
              </p>

              <p>
                The Intracoastal-facing properties along Terra Mar Drive experience double salt exposure from both ocean spray carried by prevailing easterly winds and Intracoastal moisture. Many of these waterfront homes also have complex roof geometries with dormers, valleys, and multiple penetrations that require precise waterproofing detailing. Our crews work in {cityName} regularly and understand the access constraints, parking limitations, and HOA requirements that are unique to this close-knit barrier island community.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Roofing Services */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Comprehensive Roofing Services in {cityName}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#27272a] border border-zinc-700 rounded-lg p-8 hover:border-red-600 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Hammer className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Roof Replacement</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Complete <Link to="/residential-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">roof replacement</Link> for {cityName} residential and commercial properties. All materials, all roof types, HVHZ compliant with manufacturer warranties. Our coastal specifications include stainless steel fasteners and marine-grade flashing standard on every barrier island project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#27272a] border border-zinc-700 rounded-lg p-8 hover:border-red-600 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Wrench className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Emergency Repairs</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      24/7 <Link to="/roof-repair" className="text-red-600 hover:text-red-500 underline transition-colors">emergency roof repair</Link> service for {cityName}. Same-day response for active leaks, storm damage, missing tiles, and emergency tarping. Our Deerfield Beach headquarters is just 4 miles from {cityName}, enabling the fastest response times in the area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#27272a] border border-zinc-700 rounded-lg p-8 hover:border-red-600 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Camera className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Professional Inspections</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Comprehensive 21-point <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">roof inspections</Link> for {cityName} properties. Insurance documentation, pre-purchase evaluations, and <Link to="/roof-maintenance-programs" className="text-red-600 hover:text-red-500 underline transition-colors">maintenance assessments</Link>. We pay special attention to salt corrosion indicators that inland-focused inspectors routinely miss.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#27272a] border border-zinc-700 rounded-lg p-8 hover:border-red-600 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Building2 className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">All Roof Types</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">Tile roofing</Link>, <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">metal roofing</Link>, <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">shingle roofing</Link>, <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roofing</Link> (TPO/PVC). Every system specified with coastal-grade materials appropriate for {cityName}'s barrier island salt environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Choosing the Right Material for Coastal Properties */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Hammer className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Choosing the Right Roofing Material for {cityName}'s Coastal Environment
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Material selection in {cityName} is fundamentally different from inland communities because salt air corrosion eliminates some options and changes the performance characteristics of others. Concrete and clay <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile roofing</Link> remains the most popular choice in {cityName} — tile is naturally resistant to salt corrosion, provides excellent UV protection, and meets HVHZ wind ratings when installed with the proper fastening schedule. Most mid-century {cityName} homes were built with tile roofs, and tile-to-tile replacements maintain the community's architectural character while upgrading to current code standards.
              </p>

              <p>
                <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">Standing seam metal roofing</Link> offers the highest wind ratings available — 200+ mph for properly specified systems — making it the premium choice for {cityName}'s direct hurricane exposure. However, metal roofing on a barrier island requires aluminum or Galvalume panels rather than standard steel, plus marine-grade concealed fastener systems. Improperly specified metal roofing will show visible corrosion within 3 to 5 years in {cityName}'s salt environment.
              </p>

              <p>
                <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">Architectural shingle systems</Link> provide cost-effective protection when specified with salt-resistant components. We use Class H (150 mph+) rated shingles with polymer-modified adhesive strips, paired with stainless steel fasteners and synthetic underlayment on every {cityName} shingle project.
              </p>
            </div>
          </div>
        </section>

        {/* Local Building Requirements */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <FileCheck className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {cityName} Permitting & Building Requirements
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                {cityName} processes building permits through the {county} permitting system, but the town maintains specific requirements that extend beyond standard county minimums. As a compact barrier island municipality, {cityName} has particular attention to construction staging, dumpster placement, and work hour restrictions that out-of-area contractors frequently violate — resulting in stop-work orders and project delays.
              </p>

              <p>
                Our established track record in {cityName} means we understand these local requirements before the first permit application is submitted. We handle all permitting, coordinate required inspections with {county} building officials, and ensure your project progresses from permit to certificate of completion without costly delays. Learn more about <Link to="/blog/why-homeowners-should-avoid-pulling-their-own-roofing-permit-in-south-florida" className="text-red-600 hover:text-red-500 underline transition-colors">why proper permitting matters</Link> for your roofing project.
              </p>
            </div>
          </div>
        </section>

        {/* Common Issues in LBTS */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Roofing Issues in {cityName}
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                {cityName} homeowners face roofing challenges that are distinct from even nearby inland communities. The most common issues we address include corroded fasteners and flashing from chronic salt exposure, tile displacement from sustained coastal winds, water intrusion at roof penetrations where sealants have degraded from UV and salt combination, and premature underlayment failure caused by heat buildup on unshaded barrier island properties.
              </p>

              <p>
                Many {cityName} homes built in the 1960s through 1980s are now on their second or third roof — and previous replacements may not have used corrosion-resistant specifications appropriate for barrier island conditions. We frequently discover galvanized fasteners that have corroded to the point of failure, original metal flashing that has deteriorated beneath otherwise intact tile, and roof-to-wall connections that no longer meet current HVHZ requirements. Our <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">comprehensive inspection process</Link> identifies these hidden failures before they become emergencies.
              </p>
            </div>
          </div>
        </section>

        {/* Roof Financing */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Financing Options for {cityName} Homeowners
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                A roof replacement on a barrier island property requires premium materials and coastal-grade installation methods, which can increase project costs compared to inland homes. All Phase Construction USA offers flexible <Link to="/easy-payments" className="text-red-600 hover:text-red-500 underline transition-colors">financing options</Link> designed to make proper coastal roofing accessible to every {cityName} homeowner.
              </p>

              <p>
                We offer both credit-based and non-credit-based financing options with competitive rates and flexible repayment terms. Protecting your {cityName} home with the right materials and installation should never be delayed due to budget constraints — the cost of a proper coastal roof replacement is always less than the cost of emergency repairs from a premature failure.
              </p>
            </div>
          </div>
        </section>

        {/* Roofing Education */}
        <section className="py-20 bg-[#27272a]">
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
              <Link to="/blog/roof-replacement-cost-broward-county-2026" className="bg-[#09090b] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
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

              <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="bg-[#09090b] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
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

              <Link to="/blog/how-to-file-a-roof-insurance-claim-after-storm-damage" className="bg-[#09090b] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
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

              <Link to="/blog/understanding-your-roofing-warranty-whats-covered-and-whats-not" className="bg-[#09090b] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
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

              <Link to="/blog/how-to-spot-early-signs-of-roof-damage-before-it-gets-expensive" className="bg-[#09090b] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
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

              <Link to="/blog/how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid" className="bg-[#09090b] border border-zinc-700 rounded-lg p-6 hover:border-red-600 transition-all group">
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

        {/* Customer Reviews */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Our Customers Say
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#27272a] border border-zinc-700 rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-4 italic">
                  "Graham and his team at All Phase Construction did an amazing job on our new shingle roof. Communication was excellent throughout the project, and they completed everything on time and on budget. Professional crew, clean worksite, and quality materials. Highly recommend!"
                </p>
                <p className="font-semibold text-white">— Michael R.</p>
                <p className="text-sm text-zinc-400">South Florida Homeowner</p>
              </div>

              <div className="bg-[#27272a] border border-zinc-700 rounded-lg p-6">
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

              <div className="bg-[#27272a] border border-zinc-700 rounded-lg p-6">
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

        {/* Nearby Communities */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Serving {cityName} and Surrounding Communities
            </h2>

            <p className="text-lg text-zinc-300 text-center mb-8 max-w-3xl mx-auto">
              All Phase Construction USA proudly serves the entire {cityName} barrier island and surrounding {county} communities. Our Deerfield Beach headquarters provides rapid access to the entire coastal corridor.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-zinc-300">
              <Link to="/locations/deerfield-beach" className="hover:text-red-600 transition-colors">Deerfield Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/pompano-beach" className="hover:text-red-600 transition-colors">Pompano Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/fort-lauderdale" className="hover:text-red-600 transition-colors">Fort Lauderdale</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lighthouse-point" className="hover:text-red-600 transition-colors">Lighthouse Point</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/wilton-manors" className="hover:text-red-600 transition-colors">Wilton Manors</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/coconut-creek" className="hover:text-red-600 transition-colors">Coconut Creek</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/coral-springs" className="hover:text-red-600 transition-colors">Coral Springs</Link>
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
        <section className="py-20 bg-gradient-to-b from-[#09090b] to-[#27272a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started in {cityName}?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Contact All Phase Construction USA for a free roof inspection and estimate. Our dual-licensed, HVHZ-certified team specializes in barrier island roofing with coastal-grade materials and installation methods that protect your {cityName} home for decades.
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
        <section className="py-12 bg-[#27272a] border-t border-zinc-800">
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
                <h3 className="font-bold text-white mb-2">4 Miles Away</h3>
                <p className="text-sm text-zinc-400">Deerfield Beach Headquarters</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <MoneyPageEnhancements cityName="Lauderdale-By-The-Sea" county="Broward" hvhz={true} />
        <Contact />
      </div>
    </>
  );
}
