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
import { sheetSitemap, SitemapEntry } from '../../data/sheetSitemap';
import { MapPin, ArrowRight, Phone, Mail, Calculator, Award } from 'lucide-react';
import NoIndexMeta from '../../components/NoIndexMeta';

export default function ServiceAreaPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  // Hub is always deerfield-beach since it's hardcoded in the route
  const hubSlug = 'deerfield-beach';

  // Find the city entry in the sitemap
  // Try multiple path patterns to match the citySlug
  const cityEntry = sheetSitemap.find(entry => {
    const pathVariants = [
      `/locations/${hubSlug}/service-area/${citySlug}`,
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
                to="/service-areas"
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

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            {countyName || finalCity.section}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Roofing Services in {finalCity.label.replace('Roofing Contractor in', '').replace('Roofing Contractor', '').trim()}
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
              to="/contact"
              className="flex items-center gap-3 text-white hover:text-red-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Get Free Estimate</span>
            </Link>
          </div>
        </div>

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
              for homes in {finalCity.label.replace('Roofing Contractor', '').trim()}.
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-700 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Expert Roofing Services?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Serving {finalCity.label.replace('Roofing Contractor', '').trim()} and surrounding areas.
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
              to="/contact"
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
