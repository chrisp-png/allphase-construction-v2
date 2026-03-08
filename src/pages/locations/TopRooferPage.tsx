/**
 * âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 * â ï¸  STRUCTURE LOCKED — DO NOT MODIFY WITHOUT SEO REVIEW
 * âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
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
 * âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 */

import { useEffect } from 'react';
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

  // Set page title
  useEffect(() => {
    if (locationName) {
      document.title = `Top 5 Best Roofers in ${locationName}, FL | All Phase Construction USA`;
    }
  }, [locationName]);

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
                to="/locations/"
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
            Dual-Licensed Roofing Specialist
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Top 5 Criteria for Choosing the Best Roofer in {locationName}
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            When looking for the top roofing contractors in {locationName}, <strong className="text-white">licensing is the most critical factor</strong>. As a Dual-Licensed Roofing and General Contractor, All Phase Construction USA provides structural oversight that standard roofers cannot match.
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto italic mb-8">
            Comparing the top 5 roofers in {locationName}? Discover why local homeowners trust a Dual-Licensed (CCC/CGC) Specialist for HVHZ-compliant roofing.
          </p>

          {/* Additional Static Content for SEO */}
          <div className="max-w-4xl mx-auto text-left">
            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why Dual-Licensed (CCC/CGC) Contractors Are Top Choices for Hurricane-Zone Roofing
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  When evaluating the top 5 roofers in {locationName}, Florida, the most critical distinction is whether the contractor holds both a State Certified Roofing Contractor (CCC) license and a Certified General Contractor (CGC) license. This dual-licensing represents a level of expertise and structural knowledge that standard roofing contractors simply cannot provide.
                </p>
                <p>
                  In South Florida's High Velocity Hurricane Zone (HVHZ), roofing systems must integrate seamlessly with the home's structural framework. A dual-licensed contractor brings comprehensive understanding of load-bearing calculations, wind uplift requirements, and structural engineering principles that go far beyond basic roofing installation. This is especially crucial in {locationName}, where building codes mandate enhanced fastening patterns, impact-rated materials, and roof-to-wall connections engineered to withstand 175+ mph wind speeds.
                </p>
                <p>
                  The CCC license (Certified Roofing Contractor) demonstrates mastery of roofing systems, materials, and installation techniques. The CGC license (Certified General Contractor) validates broader construction expertise, including structural assessment, permitting coordination, and multi-trade integration. When combined, these credentials ensure that your roof is not just installed—it's engineered as an integral part of your home's hurricane protection system.
                </p>
                <p>
                  Most roofing contractors in {locationName} hold only a CCC license. While they can competently install roofing materials, they lack the structural engineering oversight that a CGC-licensed contractor provides. This distinction becomes critical when evaluating roof deck condition, addressing structural deficiencies, or coordinating with building officials on complex HVHZ compliance issues. A dual-licensed specialist can identify and resolve structural concerns that standard roofers might miss—preventing costly callbacks, failed inspections, or worse, roof failure during hurricane conditions.
                </p>
                <p>
                  For {locationName} homeowners researching the top 5 best roofers in their area, prioritizing dual-licensed (CCC/CGC) contractors ensures you're working with a professional who brings both specialized roofing knowledge and comprehensive construction expertise to your project. This combination is particularly valuable for older homes requiring structural upgrades, complex architectural designs, or properties with previous roof issues that require diagnosis beyond surface-level repairs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 Criteria */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Key Factors We Evaluate
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C5A572]/10 rounded-lg p-3">
                  <Shield className="w-8 h-8 text-[#C5A572]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  1. Dual-Licensing (CCC & CGC)
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                As a Dual-Licensed Roofing Specialist (CCC-1331464) and General Contractor (CGC-1526236), our team brings structural engineering oversight to every roofing project—something standard roofers cannot provide.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C5A572]/10 rounded-lg p-3">
                  <Award className="w-8 h-8 text-[#C5A572]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  2. HVHZ Compliance Experience
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                High Velocity Hurricane Zone certification isn't optional in {locationName}—it's critical. Our team specializes in code-compliant installations that pass the strictest wind ratings and building department inspections.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C5A572]/10 rounded-lg p-3">
                  <Star className="w-8 h-8 text-[#C5A572]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  3. Owner-Operator Accountability
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                When you hire All Phase Construction USA, you're working directly with the Specialist—not a sales team or subcontractors. Our owner personally oversees every project from permitting to final inspection.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C5A572]/10 rounded-lg p-3">
                  <Phone className="w-8 h-8 text-[#C5A572]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  4. Local Deerfield Beach Headquarters
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Based at 590 Goolsby Blvd in Deerfield Beach, I serve {locationName} with consistent, local supervision. No out-of-state crews, no franchises—just accountable, local expertise.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C5A572]/10 rounded-lg p-3">
                  <Shield className="w-8 h-8 text-[#C5A572]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  5. Hurricane-Ready Material Selection
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I exclusively specify roofing materials engineered for South Florida's extreme weather—high-wind-rated tiles, impact-resistant shingles, and corrosion-resistant metal systems that exceed manufacturer warranties.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Settle for a Basic Roofer
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a specialized roofing estimate from a <strong className="text-[#C5A572]">Dual-Licensed expert</strong> who brings both roofing and structural expertise to your {locationName} project.
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
              Get Specialized Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
