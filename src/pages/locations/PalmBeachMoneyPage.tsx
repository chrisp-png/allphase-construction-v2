/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Palm Beach Custom Location Page — Full SEO Money Page
 * ═══════════════════════════════════════════════════════════════════════════
 * Wind-code compliant coastal roofing for Palm Beach (Town of Palm Beach), FL.
 * FAQPage schema is injected by prerender-static.mjs at build time — do NOT duplicate here.
 */

import { useEffect } from 'react';
import MoneyPageEnhancements from '../../components/MoneyPageEnhancements';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, CheckCircle2, ChevronRight, FileCheck, Wrench, Camera, Building2, Hammer, FileText, BookOpen, Star, Waves, Landmark } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import MoneyPageStatBar from '../../components/MoneyPageStatBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { generateSEOMetadata } from '../../config/seoTitles';

export default function PalmBeachMoneyPage() {
  const cityName = 'Palm Beach';
  const county = 'Palm Beach County';
  const slug = 'palm-beach';

  useEffect(() => {
    const seoMeta = generateSEOMetadata('/locations/palm-beach');
    document.title = seoMeta.title;
  }, []);

  const canonicalUrl = typeof window !== 'undefined'
    ? window.location.href.split('?')[0].split('#')[0]
    : `https://allphaseconstructionfl.com/locations/${slug}`;

  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: 'Palm Beach',
    stateName: 'Florida',
    latitude: 26.7056,
    longitude: -80.0364,
    aggregateRating: {
      ratingValue: '4.9',
      reviewCount: '150'
    }
  });

  return (
    <>
      <Helmet>
        <title>Roof Replacement Palm Beach, FL | Estate Tile | All Phase</title>
        <meta
          name="description"
          content="Palm Beach roofing contractor. Dual-licensed, wind-code compliant. Barrel tile restoration, estate reroofing, metal & flat systems. Architectural review board expertise. Free inspection. (754) 227-5605."
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
                  All Phase Construction USA is a dual-licensed roofing contractor (CCC-1331464) and certified general contractor (CGC-1526236) serving the Town of {cityName}, FL with comprehensive roof replacement, repair, and inspection services. {cityName} is one of America's most prestigious residential communities — and its roofing requirements reflect that distinction. From oceanfront estates along South Ocean Boulevard to historic Mediterranean Revival landmarks, every {cityName} roofing project demands materials, craftsmanship, and code compliance that meet the island's exacting standards.
                </p>

                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  As a barrier island community, {cityName} properties face direct Atlantic Ocean wind exposure, constant salt air corrosion, and some of the strictest architectural review requirements in Florida. Our dual-license advantage means we handle both the roofing system and the underlying structural work — from barrel tile restoration on historic estates to complete re-roofs with full structural assessment — under one contract and one warranty.
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

        {/* Palm Beach Estate Roofing */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Landmark className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Estate-Class Roofing for {cityName}'s Landmark Properties
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                The Town of {cityName} contains some of the most valuable residential real estate in the United States. Properties along South Ocean Boulevard, North County Road, and throughout the estate section represent investments of $10 million to over $100 million — and their roofing systems must match that level of investment. A roof failure on a {cityName} estate doesn't just create a structural problem — it threatens irreplaceable interior finishes, rare art collections, and architectural details that cannot be reproduced.
              </p>

              <p>
                All Phase Construction USA brings the same institutional-quality approach to {cityName} residential roofing that we apply to our government and commercial projects. Every {cityName} estate reroofing project begins with a comprehensive structural assessment enabled by our CGC general contractor license — evaluating truss systems, roof deck integrity, connection details, and load-bearing capacity before a single tile is removed. This structural-first approach is critical for {cityName}'s many historic properties where original framing may have been modified, weakened by termite activity, or designed to standards that predate modern wind code requirements.
              </p>

              <p>
                Our project management for {cityName} estates includes coordination with property managers, interior designers, and security teams to ensure minimal disruption to occupied properties. We maintain clean, organized job sites with proper staging areas and debris containment — standards that {cityName}'s residential community expects and that many contractors fail to provide.
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
                Most roofing contractors operating in {cityName} hold only a CCC (Certified Roofing Contractor) license, limiting their scope to roof surface work. When they encounter structural issues beneath the roof — damaged trusses, deteriorated connections, compromised decking, or load-bearing deficiencies — they must stop work and bring in a separate general contractor. For {cityName}'s historic and estate-class properties, where structural conditions beneath the roof surface are frequently more complex than the roofing itself, this limitation creates significant risk.
              </p>

              <p>
                Our CGC license (Certified General Contractor) authorizes us to evaluate and repair the complete structural system supporting your roof. During every {cityName} roof replacement, we inspect the full structural envelope — roof deck fastening patterns, truss integrity, hurricane strap connections, and wall-to-roof load transfer paths. When we identify deficiencies, we remediate them immediately under one scope of work, one timeline, and one warranty. This is particularly valuable for {cityName}'s many properties built before modern wind code requirements, where structural upgrades are often necessary during a reroofing project.
              </p>

              <p>
                Use our <Link to="/roof-cost-calculator" className="text-red-600 hover:text-red-500 underline transition-colors">roof cost calculator</Link> for a preliminary estimate based on your roof type and size.
              </p>
            </div>
          </div>
        </section>

        {/* Architectural Review Board Expertise */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Building2 className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {cityName} Architectural Review & Historic Preservation
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                The Town of {cityName} maintains one of Florida's most rigorous architectural review processes. Roofing projects require approval not just from {county} building officials, but from the town's Architectural Commission (ARCOM) — which governs material selection, tile profiles, colors, and even the visual appearance of roofing from the street. Properties within designated historic districts face additional Landmarks Preservation Commission review that can dictate specific tile manufacturers, profiles, and installation methods to maintain historical accuracy.
              </p>

              <p>
                All Phase Construction USA understands these layered approval requirements and factors them into every {cityName} project timeline. We prepare complete material specifications, color samples, and installation details for ARCOM submission before beginning work — preventing the costly delays and redesigns that occur when contractors unfamiliar with {cityName}'s process discover these requirements mid-project. Our experience with barrel tile, flat tile, and specialty profiles enables us to source historically appropriate materials that satisfy both the architectural review board and Florida Building Code structural requirements.
              </p>

              <p>
                Learn more about <Link to="/blog/why-homeowners-should-avoid-pulling-their-own-roofing-permit-in-south-florida" className="text-red-600 hover:text-red-500 underline transition-colors">why proper permitting matters</Link> for your roofing project.
              </p>
            </div>
          </div>
        </section>

        {/* Coastal Wind & Salt Protection */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Waves className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Coastal Wind & Salt Protection for {cityName}'s Barrier Island
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                {cityName} sits on a narrow barrier island between the Atlantic Ocean and the Intracoastal Waterway — Lake Worth Lagoon. Every property faces direct oceanfront or near-ocean salt air exposure, and the island's east-west width of less than half a mile means no property is shielded from coastal environmental forces. Wind-driven salt aerosol reaches every roof surface, attacking metal components, degrading sealants, and accelerating material aging.
              </p>

              <p>
                All Phase Construction USA specifies corrosion-resistant fasteners, marine-grade flashing systems, and premium underlayment on every {cityName} project. For oceanfront estates along South Ocean Boulevard, we use stainless steel ring-shank nails, copper or aluminum flashing (never galvanized steel), and self-adhering modified bitumen underlayment that provides a secondary waterproofing barrier even if primary roofing materials are damaged in a storm event.
              </p>

              <p>
                Florida building codes require hurricane-rated materials and specific installation methods. A properly installed wind-code-compliant roof can qualify {cityName} homeowners for <Link to="/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home" className="text-red-600 hover:text-red-500 underline transition-colors">significant insurance premium reductions through wind mitigation</Link> features.
              </p>
            </div>
          </div>
        </section>

        {/* Palm Beach Neighborhoods */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {cityName} Neighborhoods & Specialized Roofing Knowledge
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                The South End of {cityName} — stretching from the Town Marina south to Sloan's Curve — features some of the island's most exclusive oceanfront estates. These properties typically have complex roof geometries with multiple barrel tile roof sections, dormers, cupolas, and decorative parapets that require precision waterproofing at every transition. The direct ocean frontage on this stretch creates the most extreme salt corrosion environment on the island, demanding the highest-grade material specifications.
              </p>

              <p>
                The Historic District — centered around Worth Avenue, the Royal Poinciana Chapel, and the Flagler Museum — contains Mediterranean Revival and Addison Mizner-era architecture that requires period-appropriate roofing materials and installation methods. Barrel tile profiles, colors, and even mortar joint treatments must match historical standards while meeting current Florida Building Code wind resistance requirements. Our dual licensing gives us the structural authority to reinforce original roof framing to support heavier modern tile profiles without altering the visible architectural character.
              </p>

              <p>
                The North End of {cityName} features a mix of estate properties and mid-rise condominiums, many built in the 1970s through 1990s. Condominium association reroofing projects require <Link to="/commercial-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">commercial roofing expertise</Link>, detailed scope documentation for board approval, and coordination of work across occupied units. The Phipps Estate area combines historic significance with modern estate-scale construction, requiring contractors who can work at both the preservation and new-construction level.
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
                    <h3 className="text-2xl font-bold mb-3">Estate Roof Replacement</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Complete <Link to="/residential-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">roof replacement</Link> for {cityName} estate and residential properties. Barrel tile, flat tile, slate, metal, and specialty profiles — all ARCOM-compliant and wind-code rated. Our structural assessment is included with every replacement project.
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
                      24/7 <Link to="/roof-repair" className="text-red-600 hover:text-red-500 underline transition-colors">emergency roof repair</Link> service for {cityName}. Same-day response for active leaks, storm damage, displaced tiles, and emergency tarping. We understand the urgency of protecting {cityName}'s high-value interiors from water intrusion.
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
                      Comprehensive 21-point <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 underline transition-colors">roof inspections</Link> for {cityName} properties. Pre-purchase evaluations for estate acquisitions, insurance documentation, and <Link to="/roof-maintenance-programs" className="text-red-600 hover:text-red-500 underline transition-colors">maintenance assessments</Link>. Detailed photo-documented reports delivered within 24 hours.
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
                      <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">Barrel and flat tile</Link>, <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">standing seam metal</Link>, <Link to="/flat-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">flat roofing</Link> (TPO/PVC/modified bitumen), copper, and specialty profiles. Every system specified for {cityName}'s coastal environment and architectural standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Barrel Tile Expertise */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <Hammer className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Barrel Tile Roofing Expertise for {cityName}
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Barrel tile — also known as S-tile or Spanish tile — is the signature roofing material of {cityName}'s Mediterranean Revival architectural heritage. Properly installed barrel <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">tile roofing</Link> can last 50 years or more, but the installation quality determines whether the system achieves that lifespan or fails prematurely. In {cityName}'s salt environment, the difference between a properly specified barrel tile installation and a standard one is measured in decades of service life.
              </p>

              <p>
                All Phase Construction USA installs barrel tile systems with enhanced mortar sets, stainless steel fasteners, and premium self-adhering underlayment designed for barrier island conditions. We source tile profiles that match {cityName}'s architectural heritage — including discontinued profiles for historic properties — and coordinate color and texture approvals with ARCOM before installation begins. For properties in the Landmarks Preservation zone, we document existing tile patterns, colors, and installation details to ensure accurate reproduction.
              </p>

              <p>
                <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 underline transition-colors">Standing seam metal roofing</Link> is increasingly popular for {cityName} properties seeking maximum wind resistance. We specify aluminum panels with concealed fastener systems — never exposed-fastener steel — for the corrosion resistance that {cityName}'s barrier island environment demands.
              </p>
            </div>
          </div>
        </section>

        {/* Common Roofing Issues */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Roofing Issues in {cityName}
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                {cityName} homeowners face roofing challenges that combine coastal environmental stress with the complexity of maintaining historic and estate-class properties. The most common issues include salt corrosion of metal flashings and fasteners, barrel tile displacement from sustained coastal winds, mortar joint deterioration from salt and moisture cycling, and water intrusion at complex roof intersections where valleys, dormers, and parapets create vulnerable transition points.
              </p>

              <p>
                Many {cityName} properties also face the challenge of aging roof structures beneath visually intact tile surfaces. We frequently discover corroded fastening systems, deteriorated underlayment, and structural deficiencies during our comprehensive inspections — problems that were invisible from the ground but represent immediate risk to the property. Our dual licensing enables us to assess and address both the roofing system and the structural system in a single scope of work, preventing the coordination delays and cost escalation that occur when separate contractors must be engaged.
              </p>
            </div>
          </div>
        </section>

        {/* Financing */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Roof Financing Options for {cityName} Property Owners
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Estate-class roofing projects in {cityName} represent significant investments, particularly when premium coastal-grade materials and comprehensive structural work are specified. All Phase Construction USA offers flexible <Link to="/easy-payments" className="text-red-600 hover:text-red-500 underline transition-colors">financing options</Link> for property owners who prefer to structure their roofing investment over time.
              </p>

              <p>
                We offer both credit-based and non-credit-based financing options with competitive rates. Our transparent, detailed proposals ensure {cityName} property owners understand exactly what they are investing in — from material specifications to structural scope — before any commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Resources */}
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
              All Phase Construction USA provides {cityName} property owners with expert guides on roof replacement costs, wind mitigation insurance savings, storm damage claims, and material selection. Visit our <Link to="/learning-center" className="text-red-600 hover:text-red-500 underline transition-colors">Learning Center</Link> for comprehensive resources.
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
                  Complete guide to South Florida roof replacement costs in 2026.
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

        {/* Customer Reviews */}
        <section className="py-20 bg-[#27272a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Our Customers Say
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
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
                <p className="text-sm text-zinc-400">South Florida Homeowner</p>
              </div>

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

        {/* Nearby Communities */}
        <section className="py-20 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Serving {cityName} and Surrounding Communities
            </h2>

            <p className="text-lg text-zinc-300 text-center mb-8 max-w-3xl mx-auto">
              All Phase Construction USA proudly serves the Town of {cityName} and surrounding {county} communities from our Deerfield Beach headquarters.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-zinc-300">
              <Link to="/locations/west-palm-beach" className="hover:text-red-600 transition-colors">West Palm Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/palm-beach-gardens" className="hover:text-red-600 transition-colors">Palm Beach Gardens</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/jupiter" className="hover:text-red-600 transition-colors">Jupiter</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/boca-raton" className="hover:text-red-600 transition-colors">Boca Raton</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/delray-beach" className="hover:text-red-600 transition-colors">Delray Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/boynton-beach" className="hover:text-red-600 transition-colors">Boynton Beach</Link>
              <span className="text-zinc-600">•</span>
              <Link to="/locations/lake-worth" className="hover:text-red-600 transition-colors">Lake Worth</Link>
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
              Contact All Phase Construction USA for a free roof inspection and estimate. Our dual-licensed team brings institutional-quality expertise to every {cityName} property — from historic estates to modern construction — with transparent pricing and unmatched structural authority.
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
                <h3 className="font-bold text-white mb-2">Wind-Code Compliant</h3>
                <p className="text-sm text-zinc-400">Hurricane-Rated Systems</p>
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
                  <Landmark className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="font-bold text-white mb-2">ARCOM Experience</h3>
                <p className="text-sm text-zinc-400">Architectural Review Expertise</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <MoneyPageEnhancements cityName="Palm Beach" county="Palm Beach" hvhz={false} />
        <Contact />
      </div>
    </>
  );
}
