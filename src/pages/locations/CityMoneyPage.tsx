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
  // Force-inject title immediately to prevent blank page
  useEffect(() => {
    document.title = `${city.name} Roofing Contractor | All Phase Construction USA`;
  }, [city.name]);

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
        <title>{city.name} Roofing Contractor | All Phase Construction USA</title>
        <meta
          name="description"
          content={`Professional roofing services in ${city.name}, Florida. Dual-licensed contractor (CCC-1331464, CGC-1526236) with HVHZ certification. Expert roof replacement, repair, and inspection services.`}
        />
        <link rel="canonical" href={canonicalUrl} />
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
              </div>
            </div>
          </div>

          {/* High-Visibility CTA Buttons - TWO REQUIRED BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/roof-inspection"
              className="inline-flex items-center gap-2 bg-[#C5A572] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#B08D5B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FileCheck className="w-6 h-6" />
              Schedule 21-Point Inspection
            </Link>
            <Link
              to="/roof-repair"
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
                    Complete roof replacement for {city.name} residential and commercial properties. All materials, all roof types, HVHZ compliant with manufacturer warranties.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    Emergency Repairs
                  </h4>
                  <p className="text-gray-700">
                    24/7 emergency roof repair service for {city.name}. Active leaks, storm damage, missing shingles, and emergency tarping with same-day response.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    Professional Inspections
                  </h4>
                  <p className="text-gray-700">
                    Comprehensive 21-point roof inspections for {city.name} properties. Insurance documentation, pre-purchase evaluations, and maintenance assessments.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    All Roof Types
                  </h4>
                  <p className="text-gray-700">
                    Tile roofing, metal roofing, shingle roofing, flat roofing (TPO/PVC). Expert installation and repair for all roofing systems in {city.name}.
                  </p>
                </div>
              </div>

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
                    to="/contact"
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

      {/* Contact Form */}
      <Contact />
    </>
  );
}
