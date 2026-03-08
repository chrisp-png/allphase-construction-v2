/**
 * âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 * â ï¸  STRUCTURE LOCKED — DO NOT MODIFY WITHOUT SEO REVIEW
 * âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 *
 * This is a DYNAMIC TEMPLATE for location-specific calculator pages
 *
 * ANY modifications to this file require:
 * 1. Full SEO impact review
 * 2. Testing across multiple locations
 * 3. Verification that calculator functionality remains intact
 *
 * This template has NOINDEX meta tag (excluded from search engines)
 *
 * âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 */

import { useParams, Link } from 'react-router-dom';
import { sheetSitemap } from '../../data/sheetSitemap';
import { ArrowLeft, Calculator, Phone, Mail } from 'lucide-react';
import NoIndexMeta from '../../components/NoIndexMeta';

export default function LocationCalculatorPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  // Hub is always deerfield-beach since it's hardcoded in the route
  const hubSlug = 'deerfield-beach';

  // Construct the expected path based on whether we have a citySlug
  const expectedPath = citySlug
    ? `/locations/${hubSlug}/service-area/${citySlug}/roof-cost-calculator`
    : `/locations/${hubSlug}/roof-cost-calculator`;

  // Find the matching sitemap entry
  const pageEntry = sheetSitemap.find(entry => entry.path === expectedPath);

  // Determine the back link
  const backLink = citySlug
    ? `/locations/${hubSlug}/service-area/${citySlug}`
    : `/locations/${hubSlug}`;

  // Extract location name for display
  const locationName = pageEntry
    ? pageEntry.label.replace('Roof Cost Calculator', '').replace('|', '').trim()
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
                Calculator Not Found
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                The calculator page you're looking for doesn't exist.
              </p>
              <Link
                to="/roof-cost-calculator/"
                className="inline-flex items-center gap-2 bg-[#C5A572] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#B08D5B] transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Use Main Calculator
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
            <Calculator className="w-4 h-4" />
            Roof Cost Calculator
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {pageEntry.label}
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Get an instant estimate for your roofing project in {locationName}.
            Our interactive calculator helps you understand the potential cost
            of your roof replacement or installation based on local pricing.
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            This calculator provides ballpark estimates for residential roofing projects.
            For accurate pricing tailored to your specific needs, contact us for a
            free on-site inspection and detailed quote.
          </p>
        </div>

        {/* Calculator Placeholder */}
        <div className="bg-gray-800/50 rounded-2xl p-8 md:p-12 border border-gray-700 mb-16">
          <div className="text-center mb-8">
            <Calculator className="w-16 h-16 text-[#C5A572] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Interactive Roof Cost Calculator
            </h2>
            <p className="text-gray-400">
              Calculate your estimated roofing costs for properties in {locationName}
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-600 text-center">
            <p className="text-lg text-gray-300 mb-4">
              Calculator component will be integrated here
            </p>
            <p className="text-sm text-gray-500">
              This will include roof type selection, square footage input, and
              instant cost estimates specific to the {locationName} area.
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-3">
              Accurate Local Pricing
            </h3>
            <p className="text-gray-400">
              Our calculator uses real pricing data from {locationName} to provide
              accurate estimates for your area.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-3">
              Multiple Roof Types
            </h3>
            <p className="text-gray-400">
              Get estimates for tile, metal, shingle, and flat roofing systems
              commonly installed in South Florida.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-3">
              No Obligation
            </h3>
            <p className="text-gray-400">
              Use the calculator as many times as you like. No contact information
              required to see estimates.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-700 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready for an Accurate Quote?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            While our calculator provides helpful estimates, the best way to know
            your exact costs is with a free on-site inspection in {locationName}.
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
