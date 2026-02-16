/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ⚠️  STRUCTURE LOCKED — DO NOT MODIFY WITHOUT SEO REVIEW
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This is the LOCATIONS INDEX PAGE at /locations
 *
 * ANY modifications to this file require:
 * 1. Full SEO impact review
 * 2. Verification that all location hubs are correctly listed
 * 3. Testing that links are properly generated from sheetSitemap.ts
 * 4. QA audit verification (/qa/sitemap-audit)
 *
 * This is an indexable page that serves as the main entry point for locations
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { sheetSitemap } from '../../data/sheetSitemap';
import { MapPin, ArrowRight } from 'lucide-react';

export default function LocationsIndexPage() {
  // Explicit title injection for SEO
  useEffect(() => {
    document.title = 'Service Locations | All Phase Construction USA';
  }, []);

  const hubEntries = sheetSitemap.filter(entry => {
    const pathParts = entry.path.split('/').filter(Boolean);
    return entry.path.startsWith('/locations/') && pathParts.length === 2;
  });

  // Self-referencing canonical
  const canonicalUrl = typeof window !== 'undefined'
    ? window.location.href.split('?')[0].split('#')[0]
    : 'https://allphaseconstructionfl.com/locations';

  return (
    <>
      <Helmet>
        <title>Service Locations | All Phase Construction USA</title>
        <meta
          name="description"
          content="Browse our roofing service locations throughout South Florida. Find professional roofing services in your area."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-48 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Service Locations
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Browse our service areas and find roofing services in your location.
          </p>
        </div>

        {hubEntries.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubEntries.map((hub) => (
              <Link
                key={hub.path}
                to={hub.path}
                className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#C5A572] transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A572]/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <MapPin className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[#C5A572] group-hover:translate-x-1 transition-all" />
                </div>

                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C5A572] transition-colors">
                  {hub.label}
                </h2>

                <p className="text-sm text-gray-400">
                  {hub.section}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border-2 border-[#C5A572]/30 p-8 md:p-12 shadow-2xl">
              <div className="text-center space-y-8">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  We proudly serve communities throughout South Florida. Find roofing services in your city.
                </p>

                <div className="space-y-4">
                  <Link
                    to="/locations/"
                    className="inline-flex items-center justify-center gap-3 bg-[#C5A572] text-black px-10 py-5 rounded-lg font-bold text-lg md:text-xl hover:bg-[#B08D5B] transition-all duration-300 shadow-2xl hover:shadow-[#C5A572]/50 hover:scale-105 w-full sm:w-auto"
                  >
                    View All Service Areas
                    <ArrowRight className="w-6 h-6" />
                  </Link>

                  <div>
                    <Link
                      to="/locations/"
                      className="text-sm text-gray-400 hover:text-[#C5A572] transition-colors underline"
                    >
                      See all service areas →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {hubEntries.length > 0 && (
          <div className="mt-16 text-center">
            <Link
              to="/locations/"
              className="inline-flex items-center gap-2 bg-[#C5A572] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#B08D5B] transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
        </div>
      </div>
    </>
  );
}
