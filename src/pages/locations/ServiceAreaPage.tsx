/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ⚠️  STRUCTURE LOCKED — DO NOT MODIFY WITHOUT SEO REVIEW
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This is a DYNAMIC TEMPLATE for city service area pages
 *
 * ANY modifications to this file require:
 * 1. Full SEO impact review
 * 2. Testing across ALL city pages (~38 cities)
 * 3. Verification that sheetSitemap.ts data is correctly rendered
 * 4. QA audit verification (/qa/sitemap-audit)
 *
 * This template serves multiple URLs dynamically from sheetSitemap.ts
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { sheetSitemap, SitemapEntry } from '../../data/sheetSitemap';
import { MapPin, ArrowRight, Phone, Mail, Calculator, Award, ChevronRight, Shield, Building2 } from 'lucide-react';
import NoIndexMeta from '../../components/NoIndexMeta';
import InternalLinksBlock from '../../components/InternalLinksBlock';
import { CITY_COORDINATES } from '../../data/cityCoordinates';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../../utils/seoSchemas';
import { getCityServiceAreaSEO } from '../../config/cityServiceAreaSEO';

export default function ServiceAreaPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  // Hub is always deerfield-beach since it's hardcoded in the route
  const hubSlug = 'deerfield-beach';

  // Find the city entry in the sitemap
  // Try multiple path patterns to match the citySlug
  const cityEntry = sheetSitemap.find(entry => {
    const pathVariants = [
      `/locations/${hubSlug}/service-area/${citySlug}`,
      `/locations/${hubSlug}/service-area/${citySlug}/`,
      `/${citySlug}`,
      `/roofing-contractor-${citySlug}`,
      `/roofing-contractor-${citySlug}-fl`,
    ];
    return pathVariants.includes(entry.path);
  });

  // Try to match by label if path doesn't match
  const cityByLabel = !cityEntry ? sheetSitemap.find(entry =>
    entry.label.toLowerCase().replace(/\s+/g, '-') === citySlug
  ) : cityEntry;

  const finalCity = cityEntry || cityByLabel;

  // Extract clean city name for display
  const cleanCityName = finalCity
    ? finalCity.label
        .replace('Roofing Contractor in', '')
        .replace('Roofing Contractor', '')
        .trim()
    : '';

  // Get city coordinates for schema
  const cityCoords = citySlug ? CITY_COORDINATES[citySlug] : null;

  // Get hub link
  const hubPath = hubSlug ? `/locations/${hubSlug}` : null;
  const hubEntry = hubPath ? sheetSitemap.find(e => e.path === hubPath) : null;

  // Get city tool pages
  const cityToolPages: { path: string; label: string; icon: typeof Calculator }[] = [];
  if (hubSlug && citySlug) {
    const calculatorPath = `/locations/${hubSlug}/service-area/${citySlug}/roof-cost-calculator`;
    const topRooferPath = `/locations/${hubSlug}/service-area/${citySlug}/top-5-roofer`;

    const calculatorEntry = sheetSitemap.find(e => e.path === calculatorPath);
    const topRooferEntry = sheetSitemap.find(e => e.path === topRooferPath);

    if (calculatorEntry) {
      cityToolPages.push({ path: calculatorPath, label: calculatorEntry.label, icon: Calculator });
    } else {
      cityToolPages.push({ path: calculatorPath, label: 'Roof Cost Calculator', icon: Calculator });
    }

    if (topRooferEntry) {
      cityToolPages.push({ path: topRooferPath, label: topRooferEntry.label, icon: Award });
    } else {
      cityToolPages.push({ path: topRooferPath, label: 'Top 5 Roofer', icon: Award });
    }
  }

  // Determine the county from the city's section
  let countyName = '';
  if (finalCity) {
    if (finalCity.section.includes('Palm Beach')) {
      countyName = 'Palm Beach County';
    } else if (finalCity.section.includes('Broward')) {
      countyName = 'Broward County';
    }
  }

  // Get related pages
  const relatedPages: SitemapEntry[] = [];

  if (finalCity) {
    // 1. Other cities in the same section (max 6)
    const otherCities = sheetSitemap
      .filter(entry =>
        entry.section === finalCity.section &&
        entry.path !== finalCity.path &&
        entry.indexable
      )
      .slice(0, 6);
    relatedPages.push(...otherCities);

    // 2. County-specific inspection pages
    if (countyName) {
      const inspectionPages = sheetSitemap.filter(entry =>
        entry.section === 'Roof Inspections' &&
        entry.label.includes(countyName) &&
        entry.indexable
      );
      relatedPages.push(...inspectionPages);
    }

    // 3. Main service pages (max 6)
    const servicePages = sheetSitemap
      .filter(entry =>
        entry.section === 'Roofing Services' &&
        entry.indexable
      )
      .slice(0, 6);
    relatedPages.push(...servicePages);

    // 4. Calculator and other useful pages
    const utilityPages = sheetSitemap.filter(entry =>
      (entry.path === '/roof-cost-calculator' || entry.path === '/easy-payments') &&
      entry.indexable
    );
    relatedPages.push(...utilityPages);
  }

  // Remove duplicates
  const uniqueRelatedPages = Array.from(
    new Map(relatedPages.map(page => [page.path, page])).values()
  );

  // City-specific FAQs optimized for AI Snippets (Cost, Materials, Timing, Permits, Licensing)
  const cityFAQs = finalCity ? [
    {
      question: `How much does a roof replacement cost in ${cleanCityName}, Florida?`,
      answer: `Typical residential roof replacement costs in ${cleanCityName} range from $8,000 to $35,000 depending on roof size, material selection, and structural complexity. Asphalt shingle roofs start around $8,000-$15,000 for standard homes, while tile roofs range $15,000-$25,000, and metal roofs cost $18,000-$35,000. These prices include HVHZ-compliant installation, ${countyName || 'county'} permitting, structural inspection, and warranty coverage. All Phase Construction USA provides free detailed estimates with transparent pricing and financing options.`
    },
    {
      question: `What roofing materials are best for ${cleanCityName} hurricanes?`,
      answer: `${cleanCityName} is located in Florida's High Velocity Hurricane Zone (HVHZ), requiring impact-resistant roofing materials tested to withstand 120+ mph winds. Best options include concrete or clay tile roofs (rated for 150+ mph winds with proper installation), metal roofing systems with mechanically-attached panels (160+ mph ratings), and architectural shingles meeting Miami-Dade County NOA approvals. All materials must pass Florida Product Approval testing. Tile roofs offer superior wind resistance and longevity (50+ years), while metal roofs provide lightweight hurricane protection with 40+ year lifespans.`
    },
    {
      question: `How long does roof replacement take in ${cleanCityName}?`,
      answer: `Complete roof replacement in ${cleanCityName} typically requires 2-3 weeks from permit application to final inspection. The process includes: permit submission to ${countyName || 'county'} building department (3-7 business days for approval), tear-off and installation (2-5 working days depending on roof size and complexity), and final building inspection (scheduled within 1-2 days of completion). Weather delays may extend timelines during summer rainy season. All Phase Construction coordinates all permitting and inspections, keeping projects on schedule.`
    },
    {
      question: `Do I need a permit for roof replacement in ${cleanCityName}?`,
      answer: `Yes, ${countyName || 'All Florida counties'} require building permits for all roof replacements, repairs exceeding 100 square feet, and structural modifications. ${countyName} Building Department enforces strict permitting requirements including engineered drawings for HVHZ compliance, Florida Product Approval documentation for materials, contractor license verification (CCC or CGC required), and multiple field inspections during installation. Unpermitted roofing work violates Florida Building Code, voids insurance coverage, prevents property sales, and subjects homeowners to code enforcement penalties. All Phase Construction handles all permit applications and inspections.`
    },
    {
      question: `What roofing licenses are required in ${cleanCityName}, Florida?`,
      answer: `${countyName || 'Florida law'} requires roofing contractors to hold either a Florida Certified Roofing Contractor (CCC) license or Florida Certified General Contractor (CGC) license. All Phase Construction USA holds both licenses: CCC-1331464 (Roofing Contractor) and CGC-1526236 (General Contractor). Dual licensing is significant because CCC-only contractors cannot repair structural components like trusses, decking, or roof-to-wall connections—requiring separate contractors and creating delays. Our CGC license authorizes complete structural evaluation and repair, eliminating these problems. Verify any contractor's license at MyFloridaLicense.com before hiring.`
    }
  ] : [];

  // Self-referencing canonical using current URL
  const canonicalUrl = typeof window !== 'undefined'
    ? window.location.href.split('?')[0].split('#')[0]
    : (finalCity ? `https://allphaseconstructionfl.com${finalCity.path}` : '');

  // Get SEO metadata using scalable template system with overrides
  let pageTitle: string;
  let pageDescription: string;

  if (finalCity && citySlug) {
    // Use SEO system (checks overrides first, then applies templates)
    const cityServiceAreaSEO = getCityServiceAreaSEO(citySlug, cleanCityName, countyName);
    pageTitle = cityServiceAreaSEO.title;
    pageDescription = cityServiceAreaSEO.description;
  } else {
    // Not found state
    pageTitle = 'Service Area Not Found';
    pageDescription = 'Service area not found';
  }

  // Priority cities get enhanced content blocks (15+ cities for local search dominance)
  const priorityCities = [
    'boca-raton',
    'deerfield-beach',
    'fort-lauderdale',
    'west-palm-beach',
    'coral-springs',
    'coconut-creek',
    'delray-beach',
    'boynton-beach',
    'lake-worth',
    'wellington',
    'lauderhill',
    'north-lauderdale',
    'margate',
    'plantation',
    'davie',
    'hollywood',
    'pompano-beach'
  ];
  const isPriorityCity = citySlug ? priorityCities.includes(citySlug) : false;

  // FAQPage schema is injected by prerender-static.mjs at build time — do NOT duplicate here
  const schemas = finalCity ? [
    generateLocalBusinessSchema('https://allphaseconstructionfl.com'),
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com/' },
      { name: 'Locations', url: 'https://allphaseconstructionfl.com/locations' },
      { name: 'Deerfield Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: cleanCityName, url: canonicalUrl }
    ])
  ] : [];

  // If no city found, show error state
  if (!finalCity) {
    return (
      <>
        <NoIndexMeta />
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Area Not Found
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                The service area you're looking for doesn't exist.
              </p>
              <Link
                to="/locations/"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Apply noindex if the city exists but is not indexable */}
      {finalCity && !finalCity.indexable && <NoIndexMeta />}

      {/* SEO Meta Tags */}
      {finalCity && finalCity.indexable && (
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          {schemas.length > 0 && (
            <script type="application/ld+json">
              {JSON.stringify(schemas)}
            </script>
          )}
        </Helmet>
      )}

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/locations/" className="hover:text-red-500 transition-colors">
              Locations
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/locations/deerfield-beach/" className="hover:text-red-500 transition-colors">
              Deerfield Beach
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-300 font-medium">{cleanCityName}</span>
          </nav>

          {/* Header Section */}
          <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            {countyName || finalCity.section}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {isPriorityCity ? `Expert Roofing Services in ${cleanCityName}, FL` : `Roofing Services in ${cleanCityName}`}
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6 font-medium">
            Serviced by All Phase Construction USA — Based in Deerfield Beach
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout {finalCity.label.replace('Roofing Contractor in', '').replace('Roofing Contractor', '').trim()} and nearby communities.
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Licensed, insured, and trusted by homeowners and businesses throughout South Florida. Contact us today for a free consultation and estimate.
          </p>
        </div>

        {/* Quick Contact Bar */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="tel:+17542275605"
              className="flex items-center gap-3 text-white hover:text-red-500 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(754) 227-5605</span>
            </a>
            <div className="hidden md:block w-px h-6 bg-gray-700"></div>
            <Link
              to="/contact/"
              className="flex items-center gap-3 text-white hover:text-red-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Request a Roofing Estimate</span>
            </Link>
          </div>
        </div>

        {/* Priority City: AI Snippet Direct Answer */}
        {isPriorityCity && (
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-xl p-8 border border-red-700/50 mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Why Choose All Phase Construction USA for {cleanCityName} Roofing?
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed text-center">
                All Phase Construction USA serves {cleanCityName} from our Deerfield Beach headquarters with dual Florida licenses
                (CCC-1331464 Roofing Contractor and CGC-1526236 General Contractor), enabling comprehensive structural roof repairs
                that single-licensed competitors cannot perform. Our HVHZ-certified installations withstand Category 4-5 hurricanes
                while our established relationships with {countyName || 'local'} building departments ensure first-pass permit approvals,
                eliminating common project delays. We complete typical residential roof replacements in 2-3 weeks from permit to final inspection.
              </p>
            </div>
          </div>
        )}

        {/* Priority City: High-Value Content Blocks */}
        {isPriorityCity && (
          <>
            {/* HVHZ Compliance Section */}
            <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl p-8 border border-red-600/30 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-600/20 rounded-lg">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    HVHZ-Compliant Roofing for {cleanCityName}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Protecting {cleanCityName} homes requires more than just shingles and nails. As a Dual-Licensed Roofing Specialist,
                    All Phase Construction USA ensures every roof installation meets the specific High-Velocity Hurricane Zone (HVHZ) requirements mandated for {cleanCityName}
                    and {countyName || 'South Florida'} building codes. These standards aren't optional—they're life-saving requirements designed to protect
                    your property during Category 3, 4, and 5 hurricanes.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    In {cleanCityName}, HVHZ compliance means every component of your roofing system must be engineered to withstand sustained winds of
                    120+ mph and wind gusts exceeding 160 mph. This includes enhanced fastening schedules, upgraded underlayment systems, reinforced
                    flashing details, and impact-resistant materials. Standard roofing practices from other states simply won't pass {countyName || 'South Florida'}
                    building inspections—and more importantly, they won't protect your family when storms strike.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Our CCC1331464 Roofing License combined with CGC1526236 General Contractor credentials means we understand both the roofing specifications
                    <span className="italic"> and </span>the underlying structural requirements. We don't just install code-compliant roofs—we ensure the entire
                    roofing assembly integrates properly with your home's structural system, from roof-to-wall connections to truss bracing to proper ventilation
                    that prevents pressure differentials during hurricanes.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-red-600 font-bold text-xl mb-1">CCC1331464</div>
                  <div className="text-gray-400 text-sm">FL Roofing License</div>
                </div>
                <div className="text-center">
                  <div className="text-red-600 font-bold text-xl mb-1">CGC1526236</div>
                  <div className="text-gray-400 text-sm">FL General Contractor</div>
                </div>
                <div className="text-center">
                  <div className="text-red-600 font-bold text-xl mb-1">HVHZ</div>
                  <div className="text-gray-400 text-sm">Certified</div>
                </div>
              </div>
            </div>

            {/* Dual-Licensed Advantage Section */}
            <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl p-8 border border-gray-700 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-600/20 rounded-lg">
                  <Building2 className="w-8 h-8 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    The "Dual-Licensed" Advantage in {cleanCityName}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Most {cleanCityName} roofers only hold a CCC (Certified Roofing Contractor) license, which limits their scope to roofing materials
                    and surface installations. My <span className="text-red-600 font-semibold">CGC1526236 General Contractor license</span> allows
                    me to evaluate and oversee the complete structural integrity of your roof system—including the roof deck, truss connections,
                    load-bearing walls, and structural tie-downs that anchor your roof to your home's foundation.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    This dual certification means I can identify and address structural deficiencies before they compromise your roof's
                    performance during hurricanes and severe weather events. When I inspect a roof in {cleanCityName}, I'm not just looking at shingles
                    and flashings—I'm evaluating whether your roof deck has adequate fastening, whether your trusses show signs of stress or damage,
                    whether your soffit and fascia systems are properly secured, and whether your attic ventilation is designed to prevent pressure buildup
                    that can literally rip a roof off during a hurricane.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Standard CCC-only contractors in {countyName || 'South Florida'} are legally prohibited from making structural modifications or even
                    diagnosing structural issues. If they discover rotted roof decking, compromised trusses, or inadequate hurricane strapping, they must
                    stop work and refer you to a separate general contractor—adding delays, coordination headaches, and additional costs to your project.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    With my dual licensing, I handle everything in-house. I can replace damaged roof decking, reinforce truss connections, upgrade
                    hurricane straps to current code, and ensure every structural element meets or exceeds {countyName || 'South Florida'} building
                    department requirements—all while maintaining full responsibility for your roofing project from start to finish. This integrated
                    approach delivers superior storm protection and eliminates the finger-pointing that happens when multiple contractors are involved.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Building Code Expertise */}
            <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl p-8 border border-gray-700 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-600/20 rounded-lg">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {countyName || 'Local'} Building Code Expertise
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Every {countyName || 'county'} building department has unique permitting requirements, inspection protocols, and code interpretations.
                    Having completed hundreds of roofing projects throughout {cleanCityName} and surrounding communities, I maintain established
                    relationships with local building officials and understand exactly what documentation, engineering details, and installation
                    specifications are required for first-pass inspection approval.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    This local expertise eliminates costly delays caused by permit rejections, failed inspections, or code violations. Many out-of-area
                    contractors struggle with {countyName || 'local'} requirements, resulting in project delays of weeks or even months. My proven track record
                    in {cleanCityName} ensures your roof replacement or repair moves forward smoothly from permit application through final inspection
                    and certificate of completion—typically within 2-3 weeks for standard residential projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Local NAP & Service Hub */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 mb-12">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Serving {cleanCityName} from Our Deerfield Beach Headquarters</h3>
                <p className="text-gray-400">Your Local Roofing Specialist</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center md:text-left">
                  <div className="text-gray-400 text-sm mb-2">Primary Office Location</div>
                  <div className="text-white font-semibold mb-1">590 Goolsby Blvd</div>
                  <div className="text-gray-300">Deerfield Beach, FL 33442</div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-gray-400 text-sm mb-2">Contact Direct</div>
                  <a href="tel:+17542275605" className="text-red-600 hover:text-red-500 font-bold text-2xl block transition-colors">
                    (754) 227-5605
                  </a>
                  <div className="text-gray-400 text-sm mt-1">Click to Call</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Hub Link */}
        {hubPath && (
          <div className="mb-16">
            <Link
              to={hubPath}
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to {hubEntry?.label || 'Hub'}</span>
            </Link>
          </div>
        )}

        {/* City Tools Section */}
        {cityToolPages.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Tools
            </h2>

            <ul className="grid md:grid-cols-2 gap-4">
              {cityToolPages.map((tool) => {
                const Icon = tool.icon;
                return (
                  <li key={tool.path}>
                    <Link
                      to={tool.path}
                      className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-red-600 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-red-600" />
                      <span className="text-white hover:text-red-600 transition-colors">
                        {tool.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Related Pages Grid */}
        {uniqueRelatedPages.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Related Services & Areas
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uniqueRelatedPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-shrink-0">
                      <MapPin className="w-5 h-5 text-red-600" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-600 transition-colors">
                    {page.label}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {page.section}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Service Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-3">
              Residential Roofing
            </h3>
            <p className="text-gray-400">
              Expert installation and repair of tile, metal, shingle, and flat roofs
              for homes in {cleanCityName}.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-3">
              Commercial Roofing
            </h3>
            <p className="text-gray-400">
              Professional commercial roofing solutions for businesses and
              properties of all sizes.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-3">
              Roof Inspections
            </h3>
            <p className="text-gray-400">
              Comprehensive roof inspections including insurance inspections,
              infrared moisture detection, and more.
            </p>
          </div>
        </div>

        {/* Internal Links Block */}
        <InternalLinksBlock
          currentCity={cleanCityName}
          showCoreServices={true}
          showNearbyCities={true}
          nearbyCities={uniqueRelatedPages
            .filter(page => page.section.includes('Service Areas'))
            .slice(0, 6)
            .map(page => ({
              label: page.label,
              path: page.path
            }))}
        />

        {/* FAQs Section */}
        {cityFAQs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {cityFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden group"
                >
                  <summary className="p-6 cursor-pointer font-semibold text-white hover:text-red-600 transition-colors flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className="text-red-600 text-xl group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-700 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Expert Roofing Services?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Serving {cleanCityName} and surrounding areas.
            Contact us today for a free inspection and no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call (754) 227-5605
            </a>
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-600 transition-colors text-lg"
            >
              <Mail className="w-5 h-5" />
              Request Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
