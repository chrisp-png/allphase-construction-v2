/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Boca Raton Location Page
 * ═══════════════════════════════════════════════════════════════════════════
 * Uses CityMoneyPage template with custom community involvement section
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, Users, FileCheck, Camera, CheckCircle, ArrowRight } from 'lucide-react';
import Contact from '../../components/Contact';
import StickyConversionBar from '../../components/StickyConversionBar';
import { generateLocalBusinessSchema } from '../../utils/localBusinessSchema';
import { getCityCoordinates } from '../../data/cityCoordinates';

export default function BocaRatonMoneyPage() {
  const city = {
    name: 'Boca Raton',
    slug: 'boca-raton',
    county: 'Palm Beach County',
    description: 'All Phase Construction USA is a dual-licensed roofing contractor serving Boca Raton, FL. We provide Palm Beach County wind-compliant metal, tile, and shingle roofing installation, replacement, and repair.'
  };

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
                <div className="text-lg">
                  <span className="font-semibold text-[#C5A572]">General Contractor License:</span> CGC-1526236
                </div>
                <div className="text-lg">
                  <span className="font-semibold text-[#C5A572]">Certified Roofing Contractor:</span> CCC-1331464
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Only dual-licensed contractors can perform structural upgrades for insurance discounts
                </p>
              </div>
            </div>
          </div>

          {/* High-Visibility CTA Buttons - TWO REQUIRED BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Camera className="w-5 h-5" />
              Schedule Free Inspection
            </Link>
            <a
              href="tel:9544570889"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-900 text-lg font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              (954) 457-0889
            </a>
          </div>

          {/* Quick Contact */}
          <div className="text-center">
            <p className="text-gray-300">
              Serving {city.name} and surrounding communities in {city.county}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why {city.name} Homeowners Choose All Phase Construction
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dual Licensed */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#C5A572]/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-[#C5A572]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Dual Licensed</h3>
              <p className="text-gray-600">
                Both General Contractor (CGC) and Certified Roofing Contractor (CCC) licenses allow us to perform structural upgrades that reduce insurance premiums.
              </p>
            </div>

            {/* HVHZ Certified */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#C5A572]/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-[#C5A572]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">HVHZ Certified</h3>
              <p className="text-gray-600">
                High Velocity Hurricane Zone certification ensures your roof meets the strictest wind-resistance standards in South Florida.
              </p>
            </div>

            {/* 30+ Years Experience */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#C5A572]/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-[#C5A572]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">30+ Years Experience</h3>
              <p className="text-gray-600">
                Three decades of South Florida roofing expertise means we understand the unique challenges of coastal climate and hurricane preparedness.
              </p>
            </div>

            {/* Local Team */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#C5A572]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-[#C5A572]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Local Expert Team</h3>
              <p className="text-gray-600">
                Our team lives and works in {city.county}. We're your neighbors, and we're invested in the quality of every roof we install.
              </p>
            </div>

            {/* Manufacturer Certified */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#C5A572]/10 rounded-full flex items-center justify-center mb-4">
                <FileCheck className="w-8 h-8 text-[#C5A572]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Manufacturer Certified</h3>
              <p className="text-gray-600">
                Factory-trained and certified by leading manufacturers including GAF, TAMKO, CertainTeed, and more for extended warranty coverage.
              </p>
            </div>

            {/* Insurance Claims */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#C5A572]/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-[#C5A572]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Insurance Claims Expert</h3>
              <p className="text-gray-600">
                We help navigate insurance claims and document damage properly to ensure you receive fair compensation for covered repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            All Phase Construction in the Boca Raton Community
          </h2>
          <div className="mb-8">
            <img
              src="/images/chamber-boca-raton-chili-cookoff-2026.jpg"
              alt="All Phase Construction USA booth at the 13th Annual Boca Chamber Community Cookout & Chili Cook-Off, March 2026 — Peter Blum Family YMCA, Boca Raton"
              width="1200"
              height="900"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're proud to be an active member of the Greater Boca Raton Chamber of Commerce.
            In March 2026, our team participated in the 13th Annual Boca Chamber Community Cookout
            & Chili Cook-Off at the Peter Blum Family YMCA — connecting with neighbors and local
            businesses we've had the privilege of roofing for years.
          </p>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Trusted Roofing Services Throughout {city.name}
            </h2>

            <p className="text-gray-700 mb-6">
              All Phase Construction USA has served {city.name} homeowners and businesses for over three decades. Our dual-licensed team (General Contractor CGC-1526236 and Certified Roofing Contractor CCC-1331464) provides comprehensive roofing services including installation, replacement, repair, and inspection for all major roofing systems.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Complete Roofing Solutions</h3>

            <p className="text-gray-700 mb-6">
              We specialize in all roofing types common to {city.name} homes: asphalt shingle, concrete and clay tile, standing seam metal, TPO, PVC, and modified bitumen systems. Each material requires specific installation techniques to meet South Florida's strict building codes and High Velocity Hurricane Zone (HVHZ) requirements.
            </p>

            <div className="bg-[#C5A572]/5 border-l-4 border-[#C5A572] p-6 mb-6">
              <p className="text-gray-800 font-semibold mb-2">Insurance Premium Reduction</p>
              <p className="text-gray-700">
                As a dual-licensed contractor, we can perform structural upgrades during your roof replacement that many roofing-only contractors cannot legally do — including hurricane straps, enhanced roof deck attachment, and secondary water barriers that qualify for insurance discounts.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Why Proper Installation Matters in {city.name}
            </h3>

            <p className="text-gray-700 mb-6">
              {city.name} is located in one of the most demanding roofing environments in the United States. The combination of intense UV exposure, high humidity, salt air, and hurricane-force winds requires installation precision that exceeds basic code compliance. Our HVHZ certification and factory training ensure every roof we install meets manufacturer specifications for maximum lifespan and warranty coverage.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Process</h3>

            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Free Inspection & Assessment</h4>
                  <p className="text-gray-700">Complete roof inspection with photo documentation and detailed condition report.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Transparent Quote</h4>
                  <p className="text-gray-700">Detailed written estimate with material options, warranty information, and potential insurance savings.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Professional Installation</h4>
                  <p className="text-gray-700">Code-compliant installation by certified crews with daily cleanup and project management.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#C5A572] text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Final Inspection & Warranty</h4>
                  <p className="text-gray-700">Building department inspection, manufacturer warranty registration, and maintenance guidance.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-lg p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-[#C5A572]" />
                <h3 className="text-2xl font-bold">Schedule Your Free Roof Inspection</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Contact All Phase Construction USA for a free roof inspection and estimate. Our dual-licensed roofing specialists provide expert guidance, transparent pricing, and quality workmanship backed by manufacturer warranties and our commitment to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:9544570889"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  (954) 457-0889
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  Request Inspection
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Serving All {city.name} Neighborhoods</h3>

            <p className="text-gray-700">
              We provide roofing services throughout {city.name} including residential communities, commercial properties, and HOA-managed buildings. Our local presence means fast response times for emergency repairs and convenient scheduling for inspections and installations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />
    </>
  );
}
