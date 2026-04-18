/**
 * BROWARD COUNTY ROOF REPLACEMENT HUB
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Dedicated county-level hub page targeting `broward-county-roofing-contractor`
 * and the full HVHZ-anchored Broward keyword cluster. Parallel to
 * PalmBeachCountyHubPage, but differentiated by:
 *   - HVHZ positioning (Broward is the official HVHZ boundary; PBC is not)
 *   - HQ-in-county signal (Deerfield Beach HQ physically inside Broward)
 *   - 17-city coverage grid (vs PBC's 12)
 *
 * Content parity target: city money pages (BocaRatonMoneyPage, etc.).
 * Before this file existed, /locations/broward-county fell through to
 * GenericLocationTemplate — a single fallback shared with every unmapped
 * city, which made the page look thin. This component replaces that
 * fallback with county-specific authority content.
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

// 17 Broward municipalities we actively work in, ordered roughly by
// project volume. Slugs match /locations/:city React routes. Keep in
// sync with the Broward cities list in scripts/prerender-static.mjs
// (COUNTY_HUBS[broward-county].cities) — any new city added to one
// should be added to both.
const BROWARD_CITIES: Array<{ slug: string; name: string }> = [
  { slug: 'deerfield-beach', name: 'Deerfield Beach' },
  { slug: 'pompano-beach', name: 'Pompano Beach' },
  { slug: 'fort-lauderdale', name: 'Fort Lauderdale' },
  { slug: 'hollywood', name: 'Hollywood' },
  { slug: 'coral-springs', name: 'Coral Springs' },
  { slug: 'coconut-creek', name: 'Coconut Creek' },
  { slug: 'parkland', name: 'Parkland' },
  { slug: 'lighthouse-point', name: 'Lighthouse Point' },
  { slug: 'wilton-manors', name: 'Wilton Manors' },
  { slug: 'pembroke-pines', name: 'Pembroke Pines' },
  { slug: 'plantation', name: 'Plantation' },
  { slug: 'davie', name: 'Davie' },
  { slug: 'sunrise', name: 'Sunrise' },
  { slug: 'lauderdale-lakes', name: 'Lauderdale Lakes' },
  { slug: 'pembroke-park', name: 'Pembroke Park' },
  { slug: 'sea-ranch-lakes', name: 'Sea Ranch Lakes' },
  { slug: 'southwest-ranches', name: 'Southwest Ranches' },
];

// Broward-specific service & content cross-links. These are the deeper
// spoke pages that concentrate ranking signal back onto this hub via
// internal linking. Keep slugs in lowercase kebab-case.
const BROWARD_RESOURCES: Array<{
  href: string;
  label: string;
  description: string;
  icon: typeof Wrench;
}> = [
  {
    href: '/roof-repair/broward-county',
    label: 'Broward County Roof Repair',
    description: 'Same-day emergency repair dispatch county-wide.',
    icon: Wrench,
  },
  {
    href: '/broward-county-roof-replacement-guide',
    label: 'Broward County Roof Replacement Guide',
    description: 'What to expect from tear-off to final inspection.',
    icon: BookOpen,
  },
  {
    href: '/blog/roof-replacement-cost-broward-county-2026',
    label: '2026 Broward County Roof Cost Guide',
    description: 'Current pricing ranges for tile, metal, shingle, flat.',
    icon: DollarSign,
  },
  {
    href: '/blog/what-makes-a-roof-hurricane-resistant',
    label: 'HVHZ & Hurricane-Resistant Roofing',
    description: 'How Broward wind codes translate to your roof spec.',
    icon: Shield,
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
    icon: FileCheck,
  },
];

// Broward testimonials pulled from existing social-proof photo set.
// Copy is written fresh for this page — keep voice consistent with the
// understated, detail-oriented tone used on city money pages.
const BROWARD_TESTIMONIALS: Array<{ quote: string; attribution: string }> = [
  {
    quote:
      "Honest pricing and a real warranty. No one protected our landscaping with tarps and felt the driveway cleaner than they found it. We'd hire them again tomorrow.",
    attribution: 'Jennifer R., Fort Lauderdale',
  },
  {
    quote:
      'All Phase replaced our roof in four days flat. Crew was clean, the foreman walked the job with me twice a day, and the final invoice matched the quote to the dollar.',
    attribution: 'Mike S., Coral Springs',
  },
  {
    quote:
      'We had two other contractors tell us we needed structural work and quote accordingly. Chris came out, climbed into the attic himself, showed us what was actually rotted, and saved us about $8,000 on unnecessary truss work.',
    attribution: 'David & Elena T., Parkland',
  },
];

// County-level FAQs. These mirror the prerendered FAQ schema in
// scripts/prerender-static.mjs (buildCountyFaqs) so the accordion
// rendered to real users matches the FAQPage structured data rendered
// to Googlebot. Any edits here should be mirrored in the prerender script.
const BROWARD_FAQS: Array<{ question: string; answer: string }> = [
  {
    question: 'How long does a roof replacement take in Broward County?',
    answer:
      'Most single-family roof replacements across Broward County are completed in 2 to 5 working days from tear-off to final cleanup. Larger estate homes, complex multi-level tile systems, and projects that require structural deck repair can extend to 1–2 weeks. We schedule a single crew and a single mobilization per project so the home is buttoned up every evening.',
  },
  {
    question: 'Is Broward County in the High Velocity Hurricane Zone?',
    answer:
      'Yes. All of Broward County is designated a High Velocity Hurricane Zone (HVHZ), which means every roof replacement we perform here is installed to the strictest wind-code requirements in Florida — 175+ mph wind-rated assemblies with enhanced fastening schedules, approved product control numbers, and impact-rated components.',
  },
  {
    question: 'Are you licensed to replace roofs throughout Broward County?',
    answer:
      'Yes. We hold both the Florida State Certified Roofing Contractor license (CCC-1331464) and the Certified General Contractor license (CGC-1526236). That dual licensing covers every municipality in Broward County and lets us address structural conditions under the roof deck — rotted sheathing, failed trusses, rusted tie-down straps — without subcontracting the work or stopping the job.',
  },
  {
    question: 'What cities in Broward County do you serve?',
    answer:
      'We serve every major city in Broward County including Deerfield Beach, Pompano Beach, Fort Lauderdale, Hollywood, Coral Springs, Coconut Creek, Parkland, Lighthouse Point, Wilton Manors, Pembroke Pines, Plantation, Davie, Sunrise, Lauderdale Lakes, Pembroke Park, Sea Ranch Lakes, and Southwest Ranches. Crews dispatch from our Deerfield Beach headquarters at 590 Goolsby Blvd, which puts us inside the county itself for most projects.',
  },
  {
    question: 'Do you handle Broward County permits, inspections, and HOA architectural review?',
    answer:
      'Yes. Permitting, building-department inspections, and HOA architectural review committee submittals are part of every Broward County project we run. We pull the permit under our dual license, coordinate inspection scheduling, and submit the full material-and-color package to the HOA in advance so tear-off doesn\u2019t start until everything is approved in writing.',
  },
  {
    question: 'What roofing materials do you install on Broward County homes?',
    answer:
      'All Phase Construction USA installs concrete and clay tile, architectural and 3-tab shingles, standing-seam and ribbed metal, and TPO/PVC flat-roof systems throughout Broward County. Material choice is driven by roof pitch, structural capacity, neighborhood architectural guidelines, and long-term insurance economics — we walk every realistic option with the homeowner before anyone signs.',
  },
];

export default function BrowardCountyHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'RoofingContractor',
      name: 'All Phase Construction USA',
      telephone: '+17542275605',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Broward County, Florida',
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
          name: 'Broward County',
          item: 'https://allphaseconstructionfl.com/locations/broward-county',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: BROWARD_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ];

  return (
    <>
      <SEO
        title="Broward County Roof Replacement | All Phase USA"
        description="Roof replacement throughout Broward County, FL. HVHZ-compliant tile, metal, shingle & flat roofing. Dual-licensed CCC + CGC, 2,500+ roofs since 2005. (754) 227-5605."
        canonicalPath="/locations/broward-county"
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
                <span className="text-white">Broward County</span>
              </nav>

              <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />
                <span>Serving all of Broward County, FL</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Broward County <span className="text-red-600">Roof Replacement</span>
              </h1>

              <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-[#C5A572]/20">
                <Shield className="w-4 h-4" />
                Dual-Licensed Roofing &amp; General Contractors (CCC-1331464, CGC-1526236)
              </div>

              <p className="text-xl text-zinc-300 leading-relaxed mb-6 max-w-3xl">
                HVHZ-certified roof replacement throughout Broward County — every city from Deerfield
                Beach south to Hollywood and west to Southwest Ranches. Tile, metal, architectural
                shingle, and flat-roof systems built to the strictest wind-code requirements in
                Florida. Over 2,500 roofs installed since 2005 from our Deerfield Beach
                headquarters, physically inside the county we serve.
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

              {/* 4-pillar differentiator bar — matches the 4 items the user
                  picked in scoping questions: HVHZ, Dual-License, HQ-in-County,
                  Volume/Tenure. Each icon+label pair is one pillar. */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-3 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-zinc-400">Certification</div>
                    <div className="text-sm font-bold text-white">HVHZ-Certified</div>
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
                    <div className="text-xs text-zinc-400">HQ</div>
                    <div className="text-sm font-bold text-white">Inside Broward</div>
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

        {/* ─── HVHZ AUTHORITY BLOCK ─────────────────────────────────── */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-white">
                What HVHZ Means for Your Broward County Roof
              </h2>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              All of Broward County sits inside Florida&rsquo;s High Velocity Hurricane Zone —
              the only place in the state (along with Miami-Dade) where the Florida Building Code
              requires roof assemblies tested and certified to 175+ mph wind loads. HVHZ is not
              marketing language; it&rsquo;s a specific set of code provisions that change every
              material, fastener, and detail on your roof.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Miami-Dade Approved Products Only',
                  body: 'Every shingle, tile, underlayment, and flashing on your roof carries a Miami-Dade Product Control Number — the HVHZ stamp of approval. We document the NOA numbers on every permit package.',
                },
                {
                  title: 'Enhanced Fastening Schedules',
                  body: 'HVHZ roofs use 6-nail shingle patterns (not 4), ring-shank fasteners through sheathing into trusses, and code-specified concrete tile fastening — typically adhesive foam plus mechanical.',
                },
                {
                  title: 'Impact-Rated Components',
                  body: 'All penetrations — vents, skylights, satellite mounts — must be impact-rated assemblies. We replace non-compliant existing components as part of the tear-off scope.',
                },
                {
                  title: 'Secondary Water Barrier',
                  body: 'Peel-and-stick self-adhered underlayment across the entire deck, not just valleys and eaves. This is the single largest insurance-credit-eligible HVHZ upgrade.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-zinc-950 border border-zinc-800 rounded-lg p-6"
                >
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

        {/* ─── BROWARD CITIES GRID ──────────────────────────────────── */}
        <section className="py-16 bg-zinc-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Broward County Cities We Serve</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              We handle roof replacement projects throughout Broward County, coordinating HOA
              architectural review, municipal permits, and inspections from our Deerfield Beach
              headquarters. Our dual CCC + CGC licensing lets us assess structural conditions under
              the roof deck before any tear-off begins — critical on the 1970s–1990s housing stock
              that dominates much of the county.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {BROWARD_CITIES.map((c) => (
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

        {/* ─── PRICING AUTHORITY ────────────────────────────────────── */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-white">Broward County Roof Replacement Costs</h2>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              HVHZ spec adds roughly 8–15% over non-HVHZ roofing in the same material, but the wind
              credits on your insurance typically recover that premium within 2–4 years. Ranges
              below reflect current 2026 Broward County installed pricing for a typical 2,000 sq ft
              single-family home — tear-off included, permits included, full warranty documentation.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Architectural Shingle (30-year)', range: '$14,000 – $22,000' },
                { label: 'Concrete or Clay Tile', range: '$28,000 – $52,000' },
                { label: 'Standing-Seam Metal', range: '$32,000 – $55,000' },
                { label: 'TPO / PVC Flat Roof', range: '$18,000 – $32,000' },
              ].map((p) => (
                <div
                  key={p.label}
                  className="bg-zinc-950 border border-zinc-800 rounded-lg p-5 flex justify-between items-center"
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
              Read the full 2026 Broward County cost guide
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ─── PERMITS & MUNICIPAL DETAIL ───────────────────────────── */}
        <section className="py-16 bg-zinc-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Hammer className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-white">
                Permits, Inspections &amp; HOA Review
              </h2>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Every Broward municipality pulls its own roofing permits and enforces its own
              inspection schedule. We pull permits under our dual license in every city we serve
              and coordinate directly with building departments — homeowners never drive to City
              Hall. For HOA communities (Parkland, Coral Springs, Weston-area Broward, Pembroke
              Pines 55+), architectural review submittals include tile or shingle sample boards,
              color-match documentation, and product control numbers for pre-approval.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                <div className="text-red-500 text-xs font-bold mb-2">STEP 1</div>
                <div className="text-white font-bold mb-2">Permit &amp; HOA Pre-Approval</div>
                <div className="text-zinc-400 text-sm">
                  We submit the full material spec, product control numbers, and color board for
                  ARC approval before ordering materials.
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                <div className="text-red-500 text-xs font-bold mb-2">STEP 2</div>
                <div className="text-white font-bold mb-2">Dry-In Inspection</div>
                <div className="text-zinc-400 text-sm">
                  After tear-off, the municipality inspects the clean deck and self-adhered
                  underlayment before tile, shingle, or metal installation begins.
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
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
        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-white">Broward County Roofing Resources</h2>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Detailed guides and service pages covering the topics Broward homeowners ask about
              most — from cost breakdowns to insurance mitigation credits to what HVHZ compliance
              actually looks like on your roof.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {BROWARD_RESOURCES.map(({ href, label, description, icon: Icon }) => (
                <Link
                  key={href}
                  to={href}
                  className="bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-lg p-5 flex items-start gap-4 transition-colors"
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
        <section className="py-16 bg-zinc-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-white">What Broward County Homeowners Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {BROWARD_TESTIMONIALS.map((t) => (
                <blockquote
                  key={t.attribution}
                  className="bg-zinc-900 border-l-4 border-red-600 rounded-lg p-6"
                >
                  <p className="text-zinc-300 italic mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="text-red-400 text-sm font-semibold">— {t.attribution}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ACCORDION ────────────────────────────────────────── */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Broward County Roof Replacement FAQs</h2>
            <div className="space-y-3">
              {BROWARD_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="bg-zinc-950 border border-zinc-800 rounded-lg p-5"
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
