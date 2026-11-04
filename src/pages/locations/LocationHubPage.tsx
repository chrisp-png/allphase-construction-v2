/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ⚠️  STRUCTURE LOCKED — DO NOT MODIFY WITHOUT SEO REVIEW
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This is a DYNAMIC TEMPLATE for location hub pages
 *
 * ANY modifications to this file require:
 * 1. Full SEO impact review
 * 2. Testing across ALL hub pages (counties)
 * 3. Verification that sheetSitemap.ts data is correctly rendered
 * 4. QA audit verification (/qa/sitemap-audit)
 *
 * This template serves multiple URLs dynamically from sheetSitemap.ts
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useParams, Link } from 'react-router-dom';
import { sheetSitemap, SitemapEntry } from '../../data/sheetSitemap';
import { MapPin, ArrowRight, Calculator, Award } from 'lucide-react';
import NoIndexMeta from '../../components/NoIndexMeta';

export default function LocationHubPage() {
  const { hubSlug } = useParams<{ hubSlug: string }>();

  // Find the hub entry in the sitemap
  // Try multiple path patterns to match the slug
  const hubEntry = sheetSitemap.find(entry => {
    const pathVariants = [
      `/locations/${hubSlug}`,
      `/${hubSlug}`,
      `/roofing-contractor-${hubSlug}`,
    ];
    return pathVariants.includes(entry.path);
  });

  // If no hub found, try to find by section name match
  const hubBySection = !hubEntry ? sheetSitemap.find(entry =>
    entry.section.toLowerCase().replace(/\s+/g, '-') === hubSlug
  ) : hubEntry;

  const finalHub = hubEntry || hubBySection;

  // Get service area pages (cities) under this hub
  const serviceAreaPages: SitemapEntry[] = [];
  if (finalHub && hubSlug) {
    const serviceAreaPathPattern = `/locations/${hubSlug}/service-area/`;
    serviceAreaPages.push(
      ...sheetSitemap.filter(entry =>
        entry.path.startsWith(serviceAreaPathPattern) &&
        entry.indexable
      )
    );
  }

  // Get tool pages for this hub
  const toolPages: { path: string; label: string; icon: typeof Calculator }[] = [];
  if (hubSlug) {
    const calculatorPath = `/locations/${hubSlug}/roof-cost-calculator`;
    const topRooferPath = `/locations/${hubSlug}/top-5-roofer`;

    const calculatorEntry = sheetSitemap.find(e => e.path === calculatorPath);
    const topRooferEntry = sheetSitemap.find(e => e.path === topRooferPath);

    if (calculatorEntry) {
      toolPages.push({ path: calculatorPath, label: calculatorEntry.label, icon: Calculator });
    } else {
      toolPages.push({ path: calculatorPath, label: 'Roof Cost Calculator', icon: Calculator });
    }

    if (topRooferEntry) {
      toolPages.push({ path: topRooferPath, label: topRooferEntry.label, icon: Award });
    } else {
      toolPages.push({ path: topRooferPath, label: 'Top 5 Roofer', icon: Award });
    }
  }

  // Get child pages from the same section (for backward compatibility)
  const childPages = finalHub
    ? sheetSitemap.filter(entry =>
        entry.section === finalHub.section &&
        entry.path !== finalHub.path &&
        entry.indexable
      )
    : [];

  // If no hub found, show error state
  if (!finalHub) {
    return (
      <>
        <NoIndexMeta />
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Location Hub Not Found
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                The location hub you're looking for doesn't exist.
              </p>
              <Link
                to="/locations/"
                className="inline-flex items-center gap-2 bg-[#C5A572] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#B08D5B] transition-colors"
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
      {/* JSON-LD Structured Data for Deerfield Beach */}
      {hubSlug === 'deerfield-beach' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocationPage",
                  "@id": "https://allphaseconstructionfl.com/locations/deerfield-beach/#locationpage",
                  "url": "https://allphaseconstructionfl.com/locations/deerfield-beach/",
                  "name": "Deerfield Beach Roofing Contractor | All Phase Construction USA",
                  "description": "Deerfield Beach roofing contractor services based out of Deerfield Beach, serving surrounding communities with consistent standards, supervision, and code-compliant workmanship.",
                  "about": { "@id": "https://allphaseconstructionfl.com/#roofingcontractor" },
                  "mainEntity": { "@id": "https://allphaseconstructionfl.com/#roofingcontractor" },
                  "primaryImageOfPage": { "@id": "https://allphaseconstructionfl.com/locations/deerfield-beach/#image-city-sign" }
                },
                {
                  "@type": "Service",
                  "@id": "https://allphaseconstructionfl.com/locations/deerfield-beach/#service-roofing",
                  "name": "Residential and Commercial Roofing Services in Deerfield Beach, FL",
                  "provider": { "@id": "https://allphaseconstructionfl.com/#roofingcontractor" },
                  "areaServed": [
                    { "@type": "City", "name": "Deerfield Beach", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Boca Raton", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Pompano Beach", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Lighthouse Point", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Delray Beach", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Boynton Beach", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Coconut Creek", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Coral Springs", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Fort Lauderdale", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "West Palm Beach", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Wellington", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Davie", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Parkland", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Plantation", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } },
                    { "@type": "City", "name": "Weston", "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" } }
                  ]
                },
                {
                  "@type": "ImageObject",
                  "@id": "https://allphaseconstructionfl.com/locations/deerfield-beach/#image-city-sign",
                  "url": "https://allphaseconstructionfl.com/deerfield-beach-fl-roofing-services.png",
                  "contentUrl": "https://allphaseconstructionfl.com/deerfield-beach-fl-roofing-services.png",
                  "caption": "Deerfield Beach, Florida city sign",
                  "name": "Deerfield Beach city sign",
                  "description": "Deerfield Beach, Florida city sign representing the local service area for a Deerfield Beach roofing contractor"
                }
              ]
            })
          }}
        />
      )}

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            {finalHub.section}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {finalHub.label}
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {hubSlug === 'deerfield-beach' ? (
              <>
                Explore our comprehensive roofing services based out of Deerfield Beach, serving surrounding communities with consistent standards, supervision, and code-compliant workmanship.
              </>
            ) : (
              <>
                Explore our comprehensive roofing services and locations in this area.
                We're committed to providing top-quality roofing solutions with expert
                craftsmanship and exceptional customer service.
              </>
            )}
          </p>
        </div>

        {/* City Sign Image - Only for Deerfield Beach */}
        {hubSlug === 'deerfield-beach' && (
          <div className="mb-16">
            <img
              src="/deerfield-beach-fl-roofing-services.png"
              alt="Deerfield Beach Florida city sign representing the local service area for a Deerfield Beach roofing contractor"
              title="Deerfield Beach Roofing Contractor – Local Service Area"
              width={1200}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>
        )}

        {/* Service Areas Section */}
        {serviceAreaPages.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Service Areas
            </h2>

            {hubSlug === 'deerfield-beach' && (
              <p className="text-gray-400 mb-8">
                All service areas listed below are served from our Deerfield Beach office and warehouse—All Phase Construction USA does not operate separate branch locations in each city.
              </p>
            )}

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceAreaPages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#C5A572] transition-colors"
                  >
                    <span className="text-white hover:text-[#C5A572] transition-colors">
                      {page.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tools Section */}
        {toolPages.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Tools
            </h2>

            <ul className="grid md:grid-cols-2 gap-4">
              {toolPages.map((tool) => {
                const Icon = tool.icon;
                return (
                  <li key={tool.path}>
                    <Link
                      to={tool.path}
                      className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#C5A572] transition-colors"
                    >
                      <Icon className="w-5 h-5 text-[#C5A572]" />
                      <span className="text-white hover:text-[#C5A572] transition-colors">
                        {tool.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Child Pages Grid (backward compatibility) */}
        {childPages.length > 0 && serviceAreaPages.length === 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Related Pages
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {childPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#C5A572] transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A572]/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <MapPin className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[#C5A572] group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C5A572] transition-colors">
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-700 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Professional Roof Repair or Replacement?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact the dual-licensed roofing specialist today for a professional inspection and estimate. The contractor provides superior HVHZ-compliant roofing solutions throughout South Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 bg-[#C5A572] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#B08D5B] transition-colors"
            >
              Call (754) 227-5605
            </a>
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Request a Roofing Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
