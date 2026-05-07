/**
 * PALM BEACH COUNTY ROOF REPLACEMENT HUB
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Dedicated county-level hub page targeting
 * palm-beach-county-roofing-contractor (currently avg rank 6.26 in LeadSnap).
 *
 * Structural parity target: BrowardCountyHubPage. PBC and Broward county
 * hubs should have matching page shape — hero, HVHZ/wind-code block, city
 * grid, pricing authority, permit detail, cross-link resources,
 * testimonials, FAQ accordion, Contact. Differentiation lives in the COPY,
 * not the SHAPE:
 *   - PBC is *outside* the official HVHZ boundary but we voluntarily build
 *     to HVHZ spec anyway (stated explicitly in the compliance block).
 *   - PBC has landmark-level geo coverage in Boca Raton (Mizner Park,
 *     Town Center, FAU). Broward does not, today.
 *   - PBC cost ranges run slightly higher (more tile stock, larger estates).
 *
 * Topical positioning: ROOF REPLACEMENT (post-April-6 pivot). Do NOT
 * introduce pre-pivot "roofing contractor" H1 copy.
 *
 * Wiring: registered in src/pages/DynamicCityRouter.tsx locationPageMap.
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  ChevronRight,
  Shield,
  Award,
  CheckCircle2,
  Building2,
  FileCheck,
  DollarSign,
  Wrench,
  BookOpen,
  Users,
  Clock,
  Hammer,
} from 'lucide-react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';
import StickyConversionBar from '../../components/StickyConversionBar';
import { getLandmarksByCity } from '../../data/landmarks';

// 13 Palm Beach County municipalities we actively work in. Keep in sync
// with the PBC cities list in scripts/prerender-static.mjs
// (COUNTY_HUBS[palm-beach-county].cities).
const PALM_BEACH_CITIES: Array<{ slug: string; name: string }> = [
  { slug: 'boca-raton', name: 'Boca Raton' },
  { slug: 'delray-beach', name: 'Delray Beach' },
  { slug: 'boynton-beach', name: 'Boynton Beach' },
  { slug: 'west-palm-beach', name: 'West Palm Beach' },
  { slug: 'palm-beach-gardens', name: 'Palm Beach Gardens' },
  { slug: 'jupiter', name: 'Jupiter' },
  { slug: 'wellington', name: 'Wellington' },
  { slug: 'lake-worth', name: 'Lake Worth' },
  { slug: 'palm-beach', name: 'Palm Beach' },
  { slug: 'greenacres', name: 'Greenacres' },
  { slug: 'lantana', name: 'Lantana' },
  { slug: 'highland-beach', name: 'Highland Beach' },
  { slug: 'loxahatchee-groves', name: 'Loxahatchee Groves' },
];

// Palm Beach-specific cross-link resources. Includes the oceanfront and
// insurance-claim pages that are specifically flagged in the prerender
// "Specialty Coverage" block.
const PBC_RESOURCES: Array<{
  href: string;
  label: string;
  description: string;
  icon: typeof Wrench;
}> = [
  {
    href: '/roof-repair/palm-beach-county',
    label: 'Palm Beach County Roof Repair',
    description: 'Same-day emergency repair dispatch county-wide.',
    icon: Wrench,
  },
  {
    href: '/oceanfront-roof-replacement-palm-beach-county',
    label: 'Oceanfront Roof Replacement',
    description: 'Salt-spray-resistant assemblies for Palm Beach coastal homes.',
    icon: Shield,
  },
  {
    href: '/palm-beach-county-roof-insurance-claim',
    label: 'Palm Beach County Insurance Claim Support',
    description: 'Storm damage documentation, carrier negotiation, supplement handling.',
    icon: FileCheck,
  },
  {
    href: '/blog/roof-replacement-cost-broward-county-2026',
    label: 'South Florida 2026 Cost Guide',
    description: 'Current pricing ranges for tile, metal, shingle, flat.',
    icon: DollarSign,
  },
  {
    href: '/blog/wind-mitigation-for-south-florida-roofs-save-on-insurance-and-protect-your-home',
    label: 'Wind Mitigation & Insurance Savings',
    description: 'Credits that typically pay back the upgrade in 2–4 years.',
    icon: Award,
  },
  {
    href: '/blog/how-to-file-a-roof-insurance-claim-after-storm-damage',
    label: 'Filing a Roof Insurance Claim',
    description: 'Step-by-step for post-storm documentation and claims.',
    icon: BookOpen,
  },
];

const PBC_TESTIMONIALS: Array<{ quote: string; attribution: string }> = [
  {
    quote:
      "Three estimates, three different stories. Chris was the only one who got on the roof, into the attic, and walked us through exactly what he'd do and why. Final price matched the quote.",
    attribution: 'Sharon M., Boca Raton',
  },
  {
    quote:
      'Clay tile replacement on a 1990s estate — tricky match, tricky HOA. All Phase handled the ARC submission, the permit, and the install in under three weeks. Clean crew, clean site.',
    attribution: 'Robert K., Delray Beach',
  },
  {
    quote:
      "We're on the water in Jupiter and every contractor we'd talked to wanted to sell us the cheapest thing that would pass code. All Phase specced the assembly to what actually lasts in salt air. Three years in, no complaints.",
    attribution: 'Maria & Paul G., Jupiter',
  },
];

const PBC_FAQS: Array<{ question: string; answer: string }> = [
  {
    question: 'How long does a roof replacement take in Palm Beach County?',
    answer:
      'Most single-family roof replacements across Palm Beach County are completed in 2 to 5 working days from tear-off to final cleanup. Larger estate homes, complex multi-level tile systems, and projects that require structural deck repair can extend to 1–2 weeks. We schedule a single crew and a single mobilization per project so the home is buttoned up every evening.',
  },
  {
    question: 'Is Palm Beach County in the High Velocity Hurricane Zone?',
    answer:
      'Technically no — Palm Beach County sits just outside the official HVHZ boundary — but we voluntarily build every Palm Beach County roof to HVHZ specification anyway. The cost difference is minimal, the performance difference is substantial, and the wind credits on your insurance policy typically pay back the upgrade within a few years.',
  },
  {
    question: 'Are you licensed to replace roofs throughout Palm Beach County?',
    answer:
      'Yes. We hold both the Florida State Certified Roofing Contractor license (CCC-1331464) and the Certified General Contractor license (CGC-1526236). That dual licensing covers every municipality in Palm Beach County and lets us address structural conditions under the roof deck — rotted sheathing, failed trusses, rusted tie-down straps — without subcontracting the work or stopping the job.',
  },
  {
    question: 'What cities in Palm Beach County do you serve?',
    answer:
      'We serve every major city in Palm Beach County including Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Palm Beach Gardens, Jupiter, Wellington, Lake Worth, Palm Beach, Greenacres, Lantana, Highland Beach, and Loxahatchee Groves. Crews dispatch from our Deerfield Beach headquarters, which puts us in a same-day response radius for most projects in the county.',
  },
  {
    question: 'Do you handle Palm Beach County permits, inspections, and HOA architectural review?',
    answer:
      'Yes. Permitting, building-department inspections, and HOA architectural review committee submittals are part of every Palm Beach County project we run. We pull the permit under our dual license, coordinate inspection scheduling, and submit the full material-and-color package to the HOA in advance so tear-off doesn\u2019t start until everything is approved in writing.',
  },
  {
    question: 'What roofing materials do you install on Palm Beach County homes?',
    answer:
      'All Phase Construction USA installs concrete and clay tile, architectural and 3-tab shingles, standing-seam and ribbed metal, and TPO/PVC flat-roof systems throughout Palm Beach County. Material choice is driven by roof pitch, structural capacity, neighborhood architectural guidelines, and long-term insurance economics — we walk every realistic option with the homeowner before anyone signs.',
  },
];

export default function PalmBeachCountyHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bocaLandmarks = getLandmarksByCity('boca-raton');

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'RoofingContractor',
      name: 'All Phase Construction USA',
      telephone: '+17542275605',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Palm Beach County, Florida',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1590 SW 13th Ct',
        addressLocality: 'Deerfield Beach',
        addressRegion: 'FL',
        postalCode: '33442',
        addressCountry: 'US',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '136',
        bestRating: '5',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://allphaseconstructionfl.com/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Locations',
          item: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Palm Beach County',
          item: 'https://allphaseconstructionfl.com/locations/palm-beach-county',
        },
      ],
    },
    // PR-55 (2026-05-07): FAQPage entry removed from schema array.
    // The prerender's COUNTY_HUBS loop emits FAQPage for /locations/palm-beach-county
    // via buildCountyFaqs(). A runtime emission here was producing the GSC
    // "Duplicate field FAQPage" error.
  ];

  return (
    <>
      <SEO
        title="Palm Beach County Roof Replacement | All Phase USA"
        description="Roof replacement throughout Palm Beach County, FL. Tile, metal, shingle & flat. Voluntarily built to HVHZ spec, dual-licensed CCC + CGC. (754) 227-5605."
        canonicalPath="/locations/palm-beach-county"
        schema={schema}
      />
      <div className="bg-zinc-950 text-white min-h-screen">
        <StickyConversionBar />
        <Header />

        {/* ─── HERO ─────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
                <Link to="/" className="hover:text-red-600 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/locations/service-areas" className="hover:text-red-600 transition-colors">
                  Service Areas
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Palm Beach County</span>
              </nav>

              <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />
                <span>Serving all of Palm Beach County, FL</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Palm Beach County <span className="text-red-600">Roof Replacement</span>
              </h1>

              <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing &amp; General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <p className="text-xl text-zinc-300 leading-relaxed mb-6 max-w-3xl">
                Dual-licensed roof replacement throughout Palm Beach County — from Boca Raton north
                to Jupiter and west to Wellington. Tile, metal, architectural shingle, and flat-roof
                systems voluntarily built to HVHZ specification to maximize wind credits on your
                insurance policy. Over 2,500 roofs installed since 2005.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="tel:7542275605"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (754) 227-5605</span>
                </a>
                <Link
                  to="/roof-inspection"
                  className="inline-flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  <FileCheck className="w-5 h-5" />
                  <span>Free Inspection</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-3 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-zinc-400">Build Standard</div>
                    <div className="text-sm font-bold text-white">Voluntary HVHZ</div>
                  </div>
                </div>
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-3 flex items-center gap-3">
                  <Award className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-zinc-400">Licensing</div>
                    <div className="text-sm font-bold text-white">Dual CCC + CGC</div>
                  </div>
                </div>
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-3 flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-zinc-400">Response</div>
                    <div className="text-sm font-bold text-white">Same-Day</div>
                  </div>
                </div>
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-3 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-zinc-400">Since</div>
                    <div className="text-sm font-bold text-white">2005 · 2,500+ Roofs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── VOLUNTARY HVHZ BLOCK ─────────────────────────────────── */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-white">
                Why We Build Palm Beach County Roofs to HVHZ Spec
              </h2>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Palm Beach County sits just outside Florida&rsquo;s official High Velocity Hurricane
              Zone, which means code only requires standard 140–150 mph roof assemblies. We
              voluntarily install to the stricter HVHZ spec used in Broward and Miami-Dade —
              175+ mph wind-rated assemblies, Miami-Dade product control numbers, enhanced
              fastening. The cost premium is minor; the insurance savings and long-term
              performance are not.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Miami-Dade Approved Products',
                  body: 'Every shingle, tile, underlayment, and flashing carries a Miami-Dade Product Control Number — documented on the permit package.',
                },
                {
                  title: 'Wind Mitigation Credits',
                  body: 'HVHZ-spec roofs qualify for the highest Florida wind mitigation credits on your homeowner\u2019s insurance — typically $800–$2,400/year in savings.',
                },
                {
                  title: 'Impact-Rated Penetrations',
                  body: 'Vents, skylights, and satellite mounts are impact-rated assemblies. Non-compliant existing components are replaced as part of tear-off scope.',
                },
                {
                  title: 'Secondary Water Barrier',
                  body: 'Peel-and-stick self-adhered underlayment across the entire deck, not just valleys and eaves. Biggest-single-line-item insurance credit on the report.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-white font-bold mb-2">{item.title}</div>
                      <div className="text-zinc-400 text-sm leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PBC CITIES GRID ──────────────────────────────────────── */}
        <section className="py-16 bg-zinc-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Palm Beach County Cities We Serve</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              We handle roof replacement projects throughout Palm Beach County, coordinating HOA
              architectural review, permits, and inspections from our Deerfield Beach headquarters.
              Our dual CCC + CGC licensing lets us assess structural conditions under the roof
              deck before any tear-off begins — critical on the 1970s–1990s housing stock that
              dominates much of the county.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {PALM_BEACH_CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/locations/${c.slug}`}
                  className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg px-4 py-3 text-white font-semibold transition-colors flex items-center justify-between"
                >
                  <span>{c.name}</span>
                  <ChevronRight className="w-4 h-4 text-red-600" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED BOCA RATON LANDMARKS ────────────────────────── */}
        {bocaLandmarks.length > 0 && (
          <section className="py-16 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl font-bold text-white">
                  Featured Service Areas in Boca Raton
                </h2>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                Detailed landmark-level pages covering the distinct roofing environments around
                Boca Raton&rsquo;s most recognizable locations.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {bocaLandmarks.map((lm) => (
                  <Link
                    key={lm.slug}
                    to={`/locations/${lm.citySlug}/${lm.slug}`}
                    className="block bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-lg p-6 transition-colors"
                  >
                    <div className="text-red-500 text-sm font-semibold mb-1">LANDMARK</div>
                    <div className="text-white font-bold text-lg mb-2">{lm.name}</div>
                    <div className="text-zinc-400 text-sm">
                      Roof replacement near {lm.name}, Boca Raton
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── PRICING AUTHORITY ────────────────────────────────────── */}
        <section className="py-16 bg-zinc-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-white">Palm Beach County Roof Replacement Costs</h2>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Palm Beach County cost ranges sit slightly above Broward&rsquo;s because the housing
              stock skews toward larger estates, more concrete and clay tile, and more multi-level
              roofs. Ranges below reflect current 2026 installed pricing for a typical 2,000 sq ft
              single-family home — tear-off included, permits included, full warranty documentation,
              built to HVHZ spec.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Architectural Shingle (30-year)', range: '$15,000 – $24,000' },
                { label: 'Concrete or Clay Tile', range: '$30,000 – $58,000' },
                { label: 'Standing-Seam Metal', range: '$34,000 – $60,000' },
                { label: 'TPO / PVC Flat Roof', range: '$19,000 – $34,000' },
              ].map((p) => (
                <div
                  key={p.label}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex justify-between items-center"
                >
                  <div className="text-white font-semibold">{p.label}</div>
                  <div className="text-red-400 font-bold">{p.range}</div>
                </div>
              ))}
            </div>

            <Link
              to="/blog/roof-replacement-cost-broward-county-2026"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold"
            >
              <BookOpen className="w-4 h-4" />
              Read the full South Florida 2026 cost guide
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ─── PERMITS & MUNICIPAL DETAIL ───────────────────────────── */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Hammer className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-white">
                Permits, Inspections &amp; HOA Review
              </h2>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Every Palm Beach County municipality pulls its own roofing permits and enforces its
              own inspection schedule. We pull permits under our dual license in every city we
              serve and coordinate directly with building departments. For the
              architectural-review-heavy communities (Boca Raton country clubs, Delray and Boynton
              55+, Wellington equestrian estates), we submit tile or shingle sample boards and
              product control numbers in advance so tear-off doesn&rsquo;t start until everything
              is approved in writing.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-5">
                <div className="text-red-500 text-xs font-bold mb-2">STEP 1</div>
                <div className="text-white font-bold mb-2">Permit &amp; HOA Pre-Approval</div>
                <div className="text-zinc-400 text-sm">
                  We submit the full material spec, product control numbers, and color board for
                  ARC approval before ordering materials.
                </div>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-5">
                <div className="text-red-500 text-xs font-bold mb-2">STEP 2</div>
                <div className="text-white font-bold mb-2">Dry-In Inspection</div>
                <div className="text-zinc-400 text-sm">
                  After tear-off, the municipality inspects the clean deck and self-adhered
                  underlayment before tile, shingle, or metal installation begins.
                </div>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-5">
                <div className="text-red-500 text-xs font-bold mb-2">STEP 3</div>
                <div className="text-white font-bold mb-2">Final Inspection &amp; Close-Out</div>
                <div className="text-zinc-400 text-sm">
                  Final municipal inspection plus a wind mitigation inspection report you can
                  submit to your insurance carrier for credits.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CROSS-LINK RESOURCES ─────────────────────────────────── */}
        <section className="py-16 bg-zinc-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-white">Palm Beach County Roofing Resources</h2>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Detailed guides and service pages covering the topics Palm Beach homeowners ask about
              most — from oceanfront spec to insurance claim support to what voluntary HVHZ
              compliance actually looks like on your roof.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {PBC_RESOURCES.map(({ href, label, description, icon: Icon }) => (
                <Link
                  key={href}
                  to={href}
                  className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg p-5 flex items-start gap-4 transition-colors"
                >
                  <Icon className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white font-bold mb-1">{label}</div>
                    <div className="text-zinc-400 text-sm">{description}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-zinc-600 flex-shrink-0 mt-1 ml-auto" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-white">What Palm Beach County Homeowners Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {PBC_TESTIMONIALS.map((t) => (
                <blockquote
                  key={t.attribution}
                  className="bg-zinc-950 border-l-4 border-red-600 rounded-lg p-6"
                >
                  <p className="text-zinc-300 italic mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="text-red-400 text-sm font-semibold">— {t.attribution}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ACCORDION ────────────────────────────────────────── */}
        <section className="py-16 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Palm Beach County Roof Replacement FAQs</h2>
            <div className="space-y-3">
              {PBC_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg p-5"
                >
                  <summary className="text-white font-semibold cursor-pointer list-none flex items-center justify-between">
                    <span>{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 ml-4" />
                  </summary>
                  <p className="text-zinc-300 mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
}
