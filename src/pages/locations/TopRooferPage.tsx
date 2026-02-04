/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ⚠️  STRUCTURE LOCKED — DO NOT MODIFY WITHOUT SEO REVIEW
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This is a DYNAMIC TEMPLATE for location-specific "top roofer" pages
 *
 * ANY modifications to this file require:
 * 1. Full SEO impact review
 * 2. Testing across multiple locations
 * 3. Verification that trust signals remain accurate
 *
 * This template has NOINDEX meta tag (excluded from search engines)
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useParams, Link } from 'react-router-dom';
import { sheetSitemap } from '../../data/sheetSitemap';
import { ArrowLeft, Award, Star, Shield, Phone, Mail } from 'lucide-react';
import NoIndexMeta from '../../components/NoIndexMeta';

export default function TopRooferPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  // Hub is always deerfield-beach since it's hardcoded in the route
  const hubSlug = 'deerfield-beach';

  // Construct the expected path based on whether we have a citySlug
  const expectedPath = citySlug
    ? `/locations/${hubSlug}/service-area/${citySlug}/top-5-roofer`
    : `/locations/${hubSlug}/top-5-roofer`;

  // Find the matching sitemap entry
  const pageEntry = sheetSitemap.find(entry => entry.path === expectedPath);

  // Determine the back link
  const backLink = citySlug
    ? `/locations/${hubSlug}/service-area/${citySlug}`
    : `/locations/${hubSlug}`;

  // Extract location name for display
  const locationName = pageEntry
    ? pageEntry.label.replace('Top 5 Roofer', '').replace('|', '').trim()
    : citySlug
    ? citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    : (hubSlug || '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // If no page entry found, show error state
  if (!pageEntry) {
    return (
      <>
        <NoIndexMeta />
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to={backLink}
              className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B08D5B] mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Page Not Found
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                The page you're looking for doesn't exist.
              </p>
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 bg-[#C5A572] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#B08D5B] transition-colors"
              >
                View Service Areas
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Apply noindex if the page exists but is not indexable */}
      {pageEntry && !pageEntry.indexable && <NoIndexMeta />}

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
          to={backLink}
          className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B08D5B] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to {citySlug ? 'Service Area' : 'Hub'}
        </Link>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Top Rated Roofer
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {pageEntry.label}
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Looking for the best roofing contractor in {locationName}? Discover why
            All Phase Construction ranks as one of the top-rated roofing companies
            serving your area.
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            With years of experience, thousands of satisfied customers, and a
            commitment to quality workmanship, we've earned our reputation as a
            leading roofing contractor in South Florida.
          </p>
        </div>

        {/* Why We're Top Rated */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Why Homeowners in {locationName} Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C5A572]/10 rounded-lg p-3">
                  <Star className="w-6 h-6 text-[#C5A572]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  5-Star Reviews
                </h3>
              </div>
              <p className="text-gray-400">
                Consistently rated 5 stars by homeowners throughout {locationName}.
                Our customers love our professionalism and quality work.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C5A572]/10 rounded-lg p-3">
                  <Shield className="w-6 h-6 text-[#C5A572]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Licensed & Insured
                </h3>
              </div>
              <p className="text-gray-400">
                Fully licensed and insured roofing contractor serving {locationName}
                with comprehensive coverage for your protection.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C5A572]/10 rounded-lg p-3">
                  <Award className="w-6 h-6 text-[#C5A572]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Expert Team
                </h3>
              </div>
              <p className="text-gray-400">
                Our experienced roofing specialists have completed hundreds of
                projects in {locationName} and surrounding areas.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C5A572]/10 rounded-lg p-3">
                  <Star className="w-6 h-6 text-[#C5A572]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Quality Materials
                </h3>
              </div>
              <p className="text-gray-400">
                We use only premium roofing materials designed to withstand South
                Florida's harsh climate and hurricane conditions.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C5A572]/10 rounded-lg p-3">
                  <Shield className="w-6 h-6 text-[#C5A572]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Warranty Protection
                </h3>
              </div>
              <p className="text-gray-400">
                Comprehensive warranties on both materials and workmanship for
                complete peace of mind on your investment.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C5A572]/10 rounded-lg p-3">
                  <Award className="w-6 h-6 text-[#C5A572]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Local Expertise
                </h3>
              </div>
              <p className="text-gray-400">
                Deep knowledge of {locationName} building codes, permit requirements,
                and local insurance claim processes.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-gray-800/30 rounded-2xl p-8 md:p-12 border border-gray-700 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Comprehensive Roofing Services in {locationName}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Residential Roofing
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                  <span>Tile roof installation and repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                  <span>Metal roofing systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                  <span>Shingle roof replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                  <span>Flat roof systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Commercial Roofing
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                  <span>Commercial roof installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                  <span>TPO and PVC roofing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                  <span>Roof maintenance programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                  <span>Emergency repairs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-700 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Experience the Difference of Working with a Top-Rated Roofer
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners in {locationName} who trust
            All Phase Construction for their roofing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17542275605"
              className="inline-flex items-center justify-center gap-2 bg-[#C5A572] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B08D5B] transition-colors text-lg"
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
