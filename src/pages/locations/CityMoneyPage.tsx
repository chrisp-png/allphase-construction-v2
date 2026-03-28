/**
 * ═══════════════════════════════════════════════════════════════════════════
 * City Money Page Template - "Suit and Tie" Requirements
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This is the premium template for Top 10 Money Pages with:
 * - Full branded Layout (Header + Footer via App.tsx)
 * - Dual-license numbers prominently displayed (CCC-1331464, CGC-1526236)
 * - High-visibility CTA buttons at top
 * - 700-1000 words of authoritative E-E-A-T content
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, Users, FileCheck, Camera, CheckCircle, ArrowRight } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';
import { generateSEOMetadata } from '../../config/seoTitles';

interface CityData {
  name: string;
  slug: string;
  county: string;
  description: string;
  latitude?: number;
  longitude?: number;
}

interface CityMoneyPageProps {
  city: CityData;
}

export default function CityMoneyPage({ city }: CityMoneyPageProps) {
  // Get CTR-optimized SEO metadata from seoTitles.ts (falls back to dynamic generation)
  const seoMeta = generateSEOMetadata(`/locations/${city.slug}`);

  // Force-inject title immediately to prevent blank page
  useEffect(() => {
    document.title = seoMeta.title;
  }, [seoMeta.title]);

  // Get city coordinates for local search
  const coordinates = getCityCoordinates(city.name);

  // Self-referencing canonical using current URL (strips query params and hash)
  const canonicalUrl = typeof window !== 'undefined'
    ? window.location.href.split('?')[0].split('#')[0]
    : `https://allphaseconstructionfl.com/locations/${city.slug}`;

  // LocalBusiness Schema - Critical for "roofer near me" searches and star ratings
  const localBusinessSchema = generateLocalBusinessSchema({
    cityName: city.name,
    stateName: 'Florida',
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
    aggregateRating: {
      ratingValue: '4.9',
      reviewCount: '150'
    }
  });

  return (
    <>
      <Helmet>
        <title>{seoMeta.title}</title>
        <meta
          name="description"
          content={seoMeta.description}
        />
        <link rel="canonical" href={seoMeta.canonical || canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <StickyConversionBar />

      {/* Hero Section with Dual-License Numbers and High-Visibility CTAs */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Location Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-full text-sm font-semibold">
              <MapPin className="w-4 h-4" />
              {city.name}, {city.county}
            </div>
          </div>

          {/* Main Heading with Dual-License Numbers */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            Professional Roofing Services<br />in {city.name}, Florida
          </h1>

          {/* Dual-License Badge - PROMINENT */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-[#C5A572] rounded-lg p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Award className="w-8 h-8 text-[#C5A572]" />
                <h2 className="text-2xl font-bold text-white">Dual-Licensed Roofing Specialist</h2>
              </div>
              <div className="text-center space-y-2">
                <p className="text-lg text-gray-200">
                  <span className="font-semibold text-[#C5A572]">CCC-1331464</span> - Florida Certified Roofing Contractor
                </p>
                <p className="text-lg text-gray-200">
                  <span className="font-semibold text-[#C5A572]">CGC-1526236</span> - Certified General Contractor
                </p>
                <p className="text-sm text-gray-300 mt-3">
                  HVHZ Certified • 175+ mph Wind Ratings • Full Structural Authority
                </p>
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
                      <img src="/tri-alliance-logo.jpg" alt="TRI Alliance Florida High Wind Certified" width="40" height="40" loading="lazy" decoding="async" />
                      <span className="text-[#C5A572] text-xs font-medium">TRI Alliance Florida High Wind Certified</span>
                    </div>
              </div>
            </div>
          </div>

          {/* High-Visibility CTA Buttons - TWO REQUIRED BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to={`/roof-inspection/${city.slug}`}
              className="inline-flex items-center gap-2 bg-[#C5A572] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#B08D5B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FileCheck className="w-6 h-6" />
              Schedule 21-Point Inspection
            </Link>
            <Link
              to={`/roof-repair/${city.slug}`}
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Emergency Roof Repair
            </Link>
          </div>

          {/* Quick Contact */}
          <div className="text-center">
            <a href="tel:754-227-5605" className="text-2xl font-bold text-[#C5A572] hover:text-white transition-colors">
              (754) 227-5605
            </a>
            <p className="text-gray-300 mt-2">
              24/7 Emergency Service Available • Free Estimates
            </p>
          </div>
        </div>
      </section>

      {/* Authority Content Block - 700+ Words for E-E-A-T */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why {city.name} Homeowners Choose All Phase Construction USA
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Dispatched from our Deerfield Beach HQ to provide rapid roofing services in {city.name}, All Phase Construction USA is a dual-licensed roofing contractor with unmatched structural authority. We hold both <strong>Florida Certified Roofing Contractor (CCC-1331464)</strong> and <strong>Certified General Contractor (CGC-1526236)</strong> licenses, providing comprehensive roofing and structural expertise that standard roofing contractors cannot match.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                The Dual-License Advantage for {city.name} Properties
              </h3>

              <p className="leading-relaxed">
                Most roofing contractors in {city.name} operate with only a CCC (Certified Roofing Contractor) license, limiting their scope to roof surface work. When they encounter structural issues—damaged trusses, inadequate roof-to-wall connections, compromised decking, or load-bearing problems—they must stop and hire a separate general contractor. This creates delays, increases costs, and introduces coordination problems.
              </p>

              <p className="leading-relaxed">
                Our <strong>CGC license (Certified General Contractor)</strong> authorizes us to evaluate and repair the complete structural system supporting your roof. During every {city.name} roof replacement project, we inspect roof deck fastening, assess truss integrity, verify proper connections between the roof structure and exterior walls, and ensure the entire system meets current Florida Building Code requirements. When we identify structural deficiencies, we repair them immediately—keeping your project on schedule under one comprehensive warranty.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                HVHZ Mastery: Hurricane Protection for {city.name}
              </h3>

              <p className="leading-relaxed">
                {city.name} is located in South Florida's High Velocity Hurricane Zone (HVHZ), where building codes mandate the most stringent wind resistance standards in the United States. Every roof installation in {city.name} must withstand 175+ mph wind speeds—equivalent to a strong Category 5 hurricane making direct landfall. Standard roofing techniques acceptable in other states fail inspection in {city.name}.
              </p>

              <p className="leading-relaxed">
                Our HVHZ certification and dual-licensing enable us to engineer roof systems specifically for {city.name}'s extreme weather conditions. We use enhanced fastening schedules with ring-shank nails at 6-inch spacing (versus standard 12-inch), high-wind rated shingles with reinforced mat construction, upgraded hip and ridge cap systems with specialty adhesive application, and engineered roof-to-wall connections that transfer wind loads directly to the structural frame.
              </p>

              <p className="leading-relaxed">
                This expertise ensures your {city.name} roof passes building department inspection on the first attempt and protects your property when hurricanes strike. Many homeowners discover too late that their contractor's work doesn't meet {city.county} building codes, resulting in failed inspections, costly remediation, and compromised hurricane protection.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Local Expertise: Understanding {city.name}'s Building Requirements
              </h3>

              <p className="leading-relaxed">
                Operating from our Deerfield Beach headquarters, we serve {city.name} with intimate knowledge of {city.county} building codes, permit requirements, and inspection procedures. Every jurisdiction in South Florida maintains unique requirements beyond Florida Building Code minimums—specific engineering documentation, structural calculations, product approvals, and installation details that vary by location.
              </p>

              <p className="leading-relaxed">
                Our established relationships with {city.county} building officials and our proven track record of first-pass inspection approvals mean your {city.name} roof replacement moves forward smoothly from permit application through final certificate of completion. Out-of-area contractors struggle with county-specific requirements, resulting in project delays of weeks or months. Our local expertise eliminates these costly delays.
              </p>

              {/* Boca Raton Neighborhoods Section - Only shown for Boca Raton */}
              {city.slug === 'boca-raton' && (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Boca Raton Neighborhoods We Serve
                  </h3>

                  <p className="leading-relaxed">
                    All Phase Construction USA works across the full spectrum of Boca Raton's residential communities — from historic 1920s neighborhoods to modern luxury estates — each with its own roofing demands, HOA requirements, and material standards.
                  </p>

                  <p className="leading-relaxed">
                    In Broken Sound Country Club, Boca Raton's largest private club community with 1,600 Mediterranean-style homes spread across 27 villages on 1,000 acres, we navigate strict architectural review board requirements for every roofing project. The community's mandatory HOA standards govern material selection, color approval, and installation methods — and our team is experienced in meeting those requirements while delivering fully HVHZ-compliant systems. The same applies to Boca West Country Club, one of the largest private clubs in the region with four golf courses and world-class amenities, and Woodfield Country Club, where family-focused luxury living comes with equally detailed HOA oversight.
                  </p>

                  <p className="leading-relaxed">
                    Along Boca Raton's Intracoastal corridor, Royal Palm Yacht & Country Club and Golden Harbour represent the highest-value roofing projects we handle — waterfront estates with private docks and marina access where salt air corrosion, constant humidity, and direct coastal wind exposure demand corrosion-resistant fasteners, sealed roof decks, and materials rated for permanent marine-environment exposure. Royal Palm Polo estates and Fieldbrook Estates similarly require premium systems and materials that match the caliber of these properties.
                  </p>

                  <p className="leading-relaxed">
                    Old Floresta Historic District is one of the most distinctive roofing environments in all of South Florida. Designed by legendary architect Addison Mizner in the early 1920s for his own executives, Old Floresta is specifically characterized by its original barrel tile roofs — the same Mediterranean Revival profile that defined Boca Raton's architectural identity. Restoring, replacing, or repairing these original barrel tile systems requires sourcing period-appropriate profiles, understanding Mizner-era underlayment construction, and bringing the roof to current Florida Building Code and HVHZ standards without compromising the historic character. Our CGC license gives us the structural authority to address the aging trusses and original roof-to-wall connections common in these 100-year-old structures.
                  </p>

                  <p className="leading-relaxed">
                    In central and west Boca communities — The Oaks at Boca Raton, New Floresta along the St. Andrews corridor, Millpond, and the newer Lotus and Lotus Palms communities — we serve a mix of 1980s-2000s construction that is entering its first or second full roof replacement cycle, often with flat roof systems, modified bitumen, and shingle systems that need to be upgraded to current HVHZ standards.
                  </p>

                  <p className="leading-relaxed">
                    As a proud member of the Greater Boca Raton Chamber of Commerce, All Phase Construction USA is an active presence in this community — not a contractor that drives down from elsewhere when storm season hits.
                  </p>

                  {/* Chamber / Community Trust Callout */}
                  <div className="bg-amber-50 border border-[#C5A572]/40 rounded-xl p-6 mt-6 not-prose">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-[#C5A572]/20 rounded-full p-3">
                        <Users className="w-7 h-7 text-[#C5A572]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Boca Raton Chamber of Commerce Member</h4>
                        <p className="text-gray-700 leading-relaxed">
                          We were out at the <strong>Greater Boca Raton Chamber of Commerce chili cook-off at the YMCA</strong> — meeting neighbors, homeowners, and local business owners face-to-face. That's the kind of contractor we are. When you call us, you're calling someone who shook hands in your community last week, not a national franchise routing calls through a call center.
                        </p>
                        <p className="text-sm text-[#C5A572] font-semibold mt-3">Greater Boca Raton Chamber of Commerce — Verified Member</p>
                      </div>
                    </div>
                  </div>

                  {/* Mid-Page Phone CTA */}
                  <div className="bg-gray-900 rounded-xl p-6 mt-6 not-prose text-center">
                    <p className="text-white font-semibold text-lg mb-1">Ready to talk to a local Boca Raton roofer?</p>
                    <p className="text-gray-400 text-sm mb-4">Free inspection — no obligation. We answer 24/7.</p>
                    <a href="tel:754-227-5605" className="inline-flex items-center gap-3 bg-[#C5A572] text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-[#B08D5B] transition-colors">
                      <Phone className="w-6 h-6" />
                      (754) 227-5605
                    </a>
                  </div>
                </>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Comprehensive Roofing Services in {city.name}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    Roof Replacement
                  </h4>
                  <p className="text-gray-700">
                    Complete {city.slug === 'boca-raton' ? (
                      <Link to="/roof-replacement" className="text-red-600 hover:text-red-700 underline font-semibold">roof replacement</Link>
                    ) : 'roof replacement'} for {city.name} residential and commercial properties. All materials, all roof types, HVHZ compliant with manufacturer warranties.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    Emergency Repairs
                  </h4>
                  <p className="text-gray-700">
                    24/7 emergency {city.slug === 'boca-raton' ? (
                      <Link to="/roof-repair/boca-raton" className="text-red-600 hover:text-red-700 underline font-semibold">roof repair</Link>
                    ) : 'roof repair'} service for {city.name}. Active leaks, storm damage, missing shingles, and emergency tarping with same-day response.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    Professional Inspections
                  </h4>
                  <p className="text-gray-700">
                    Comprehensive 21-point roof {city.slug === 'boca-raton' ? (
                      <Link to="/roof-inspection/boca-raton" className="text-red-600 hover:text-red-700 underline font-semibold">inspections</Link>
                    ) : 'inspections'} for {city.name} properties. Insurance documentation, pre-purchase evaluations, and maintenance assessments.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    All Roof Types
                  </h4>
                  <p className="text-gray-700">
                    Tile roofing, metal roofing, shingle roofing, flat roofing (TPO/PVC), and {city.slug === 'boca-raton' ? (
                      <Link to="/commercial-roofing" className="text-red-600 hover:text-red-700 underline font-semibold">commercial roofing</Link>
                    ) : 'commercial roofing'}. Expert installation and repair for all roofing systems in {city.name}.
                  </p>
                </div>
              </div>

                          <p className="text-gray-700 mt-6">
              Whether you need <Link to={`/roof-repair/${city.slug}`} className="text-red-600 hover:text-red-700 underline font-semibold">roof repair in {city.name}</Link> or a comprehensive <Link to={`/roof-inspection/${city.slug}`} className="text-red-600 hover:text-red-700 underline font-semibold">roof inspection in {city.name}</Link>, our dual-licensed team delivers expert service backed by manufacturer warranties.
            </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ready to Get Started in {city.name}?
                </h3>
                <p className="text-gray-700 mb-4">
                  Contact All Phase Construction USA for a free roof inspection and estimate. Our dual-licensed roofing specialists provide expert guidance, transparent pricing, and quality workmanship backed by manufacturer warranties and our commitment to excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:754-227-5605"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call (754) 227-5605
                  </a>
                  <Link
                    to="/contact/"
                    className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Request Free Estimate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <Award className="w-12 h-12 text-[#C5A572]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Dual-Licensed</h3>
              <p className="text-sm text-gray-600">CCC & CGC Licensed Contractor</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Shield className="w-12 h-12 text-[#C5A572]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">HVHZ Certified</h3>
              <p className="text-sm text-gray-600">175+ mph Wind Ratings</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Clock className="w-12 h-12 text-[#C5A572]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Emergency</h3>
              <p className="text-sm text-gray-600">Same-Day Response Available</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Users className="w-12 h-12 text-[#C5A572]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Local Experts</h3>
              <p className="text-sm text-gray-600">Deerfield Beach Headquarters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Roofers Callout - Conditional for Boca Raton */}
      {city.slug === 'boca-raton' && (
        <section className="py-12 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#C5A572]/10 to-amber-50 border border-[#C5A572]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Looking for the Best Roofers in Boca Raton?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Learn how to identify the most qualified roofing contractors in Boca Raton, what credentials matter, and what questions to ask before hiring.
              </p>
              <Link
                to="/locations/boca-raton/best-roofers-boca-raton"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
              >
                <span>Best Roofers in Boca Raton</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <Contact />
    </>
  );
}
