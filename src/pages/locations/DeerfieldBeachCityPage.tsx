/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Deerfield Beach City Page
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This is the dedicated city page for Deerfield Beach, the primary hub location.
 * This page focuses on Deerfield Beach itself, not the service areas directory.
 */

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, Users, FileCheck, Camera, CheckCircle, ArrowRight } from 'lucide-react';

export default function DeerfieldBeachCityPage() {
  return (
    <>
      <Helmet>
        <title>Top-Rated Roofing & General Contractor Deerfield Beach | All Phase Construction USA</title>
        <meta
          name="description"
          content="Looking for a dual-licensed roofer in Deerfield Beach? We specialize in HVHZ-compliant roof repairs and replacements. Get a free estimate today!"
        />
        <link rel="canonical" href="https://allphaseconstructionfl.com/locations/deerfield-beach" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://allphaseconstructionfl.com/locations/deerfield-beach/#webpage",
                "url": "https://allphaseconstructionfl.com/locations/deerfield-beach/",
                "name": "Deerfield Beach Roofing Contractor | All Phase Construction USA",
                "description": "Explore our comprehensive roofing services based out of Deerfield Beach, serving surrounding communities with consistent standards, supervision, and code-compliant workmanship.",
                "about": { "@id": "https://allphaseconstructionfl.com/#roofingcontractor" },
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

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              Primary Location
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Deerfield Beach
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive roofing services based out of Deerfield Beach, serving surrounding communities with consistent standards, supervision, and code-compliant workmanship.
            </p>
          </div>

          {/* HVHZ Dual-Licensed Banner */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 border-2 border-red-600 rounded-2xl p-8 md:p-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Dual-Licensed Roofing & General Contractors
                </h2>
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-lg md:text-xl text-gray-300 mb-4">
                Serving the High-Velocity Hurricane Zone (HVHZ)
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span>FL Roofing License CCC1331464</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span>FL General Contractor CGC1526236</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span>HVHZ Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* City Sign Image */}
          <div className="mb-16">
            <img
              src="/deerfield-beach-fl-roofing-services.png"
              alt="Deerfield Beach Florida city sign representing the local service area for a Deerfield Beach roofing contractor"
              title="Deerfield Beach Roofing Contractor – Local Service Area"
              loading="lazy"
              decoding="async"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Roofing Services in Deerfield Beach */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Roofing Services in Deerfield Beach
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                All Phase Construction USA provides complete residential and commercial roofing services from our Deerfield Beach headquarters. Every installation, repair, and inspection is completed by experienced professionals who understand South Florida's unique roofing requirements.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                From tile roof installations on waterfront properties to flat roof systems on commercial buildings, our team delivers consistent workmanship across all service areas. We maintain the same supervisors, crews, and quality standards whether we're working in Deerfield Beach or serving nearby communities.
              </p>
            </div>
          </div>

          {/* Service Areas Grid */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Our Service Areas
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto">
              We proudly serve Deerfield Beach and surrounding communities across Palm Beach and Broward Counties with professional roofing services.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {/* Palm Beach County Cities */}
              <Link
                to="/locations/deerfield-beach/service-area/boca-raton"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">Boca Raton</h3>
                <p className="text-gray-400 text-sm">Palm Beach County</p>
              </Link>

              <Link
                to="/locations/deerfield-beach/service-area/boynton-beach"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">Boynton Beach</h3>
                <p className="text-gray-400 text-sm">Palm Beach County</p>
              </Link>

              <Link
                to="/locations/deerfield-beach/service-area/delray-beach"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">Delray Beach</h3>
                <p className="text-gray-400 text-sm">Palm Beach County</p>
              </Link>

              <Link
                to="/locations/deerfield-beach/service-area/west-palm-beach"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">West Palm Beach</h3>
                <p className="text-gray-400 text-sm">Palm Beach County</p>
              </Link>

              {/* Broward County Cities */}
              <Link
                to="/locations/deerfield-beach/service-area/coconut-creek"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">Coconut Creek</h3>
                <p className="text-gray-400 text-sm">Broward County</p>
              </Link>

              <Link
                to="/locations/deerfield-beach/service-area/coral-springs"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">Coral Springs</h3>
                <p className="text-gray-400 text-sm">Broward County</p>
              </Link>

              <Link
                to="/locations/deerfield-beach/service-area/fort-lauderdale"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">Fort Lauderdale</h3>
                <p className="text-gray-400 text-sm">Broward County</p>
              </Link>

              <Link
                to="/locations/deerfield-beach/service-area/parkland"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">Parkland</h3>
                <p className="text-gray-400 text-sm">Broward County</p>
              </Link>

              <Link
                to="/locations/deerfield-beach/service-area/pompano-beach"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">Pompano Beach</h3>
                <p className="text-gray-400 text-sm">Broward County</p>
              </Link>

              <Link
                to="/locations/deerfield-beach/service-area/plantation"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">Plantation</h3>
                <p className="text-gray-400 text-sm">Broward County</p>
              </Link>

              <Link
                to="/locations/deerfield-beach/service-area/weston"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">Weston</h3>
                <p className="text-gray-400 text-sm">Broward County</p>
              </Link>

              <Link
                to="/locations/deerfield-beach/service-area/davie"
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-600 rounded-lg p-4 text-center transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <h3 className="text-white font-semibold group-hover:text-red-600 transition-colors">Davie</h3>
                <p className="text-gray-400 text-sm">Broward County</p>
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-4">
                Serving 50+ cities across Palm Beach and Broward Counties
              </p>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 font-semibold transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Deerfield Beach Permits, Inspections, and HVHZ Compliance */}
          <div className="mb-16 bg-gray-800/30 rounded-xl p-8 border border-gray-700">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Deerfield Beach Permits, Inspections, and HVHZ Compliance
                </h2>
              </div>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Every roofing project requires proper permitting and inspection by the local building department. We handle all permit applications, coordinate required inspections, and ensure full compliance with Deerfield Beach building codes and Florida Building Code requirements.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Deerfield Beach is located in the High Velocity Hurricane Zone (HVHZ), which mandates enhanced structural requirements for all roofing systems. Our installations meet these stricter standards, including:
              </p>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Enhanced fastening patterns for tile, metal, and shingle roofs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Impact-rated underlayment systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Roof-to-wall connections with hurricane straps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>NOA (Notice of Acceptance) approved products and installation methods</span>
                </li>
              </ul>
              <p className="text-gray-400 text-lg leading-relaxed">
                All work is inspected by Deerfield Beach building officials, and we provide you with complete permit close-out documentation showing full compliance with local and state building codes.
              </p>
            </div>
          </div>

          {/* Insurance-Defensible Roofing Documentation */}
          <div className="mb-16 bg-gray-800/30 rounded-xl p-8 border border-gray-700">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Camera className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Insurance-Defensible Roofing Documentation for Deerfield Beach Homes
                </h2>
              </div>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Insurance carriers in South Florida require verifiable proof of proper roofing installation. We provide comprehensive photo documentation throughout every project, including:
              </p>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Pre-installation roof deck condition photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Underlayment installation with visible fastening patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Hurricane strap and roof-to-wall connection details</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Final installation photos showing completed work</span>
                </li>
              </ul>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                This documentation package, combined with your building permit close-out and final inspection approval, creates an insurance-defensible record of proper installation. Many Deerfield Beach homeowners use this documentation to qualify for wind mitigation discounts on their homeowners insurance.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our installations are compatible with wind mitigation inspections, which can reduce your insurance premiums by documenting specific hurricane-resistant features of your roof system.
              </p>
            </div>
          </div>

          {/* Deerfield Beach Roofing Systems We Install */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Deerfield Beach Roofing Systems We Install
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">
                  Architectural Shingle Roofs
                </h3>
                <p className="text-gray-400 mb-4">
                  TAMKO and GAF architectural shingles installed to HVHZ standards with enhanced wind resistance ratings. Ideal for residential properties requiring cost-effective, durable protection.
                </p>
                <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 font-semibold">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">
                  Concrete and Clay Tile Roofs
                </h3>
                <p className="text-gray-400 mb-4">
                  Flat, barrel, and S-tile profiles installed with mortar or foam adhesive systems. Popular for Deerfield Beach's Mediterranean-style homes and waterfront properties.
                </p>
                <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 font-semibold">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">
                  Mechanically Seamed Metal Roofs
                </h3>
                <p className="text-gray-400 mb-4">
                  Standing seam metal roofing systems with concealed fasteners. Offers superior wind resistance, long-term durability, and modern aesthetics for both residential and commercial applications.
                </p>
                <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Why Deerfield Beach Trusts All Phase Construction
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Local Headquarters
                </h3>
                <p className="text-gray-400">
                  Based right here in Deerfield Beach at 590 Goolsby Blvd. We're not a franchise or national chain—we're your local roofing experts.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Licensed & Insured
                </h3>
                <p className="text-gray-400">
                  Fully licensed, bonded, and insured roofing contractor serving all of Broward and Palm Beach Counties with professional excellence.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Quality Craftsmanship
                </h3>
                <p className="text-gray-400">
                  Every project is completed to the highest standards with proper permits, inspections, and manufacturer-backed warranties.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Years of Experience
                </h3>
                <p className="text-gray-400">
                  Decades of combined roofing experience in South Florida's unique climate and building requirements.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Customer Focused
                </h3>
                <p className="text-gray-400">
                  Outstanding customer service with clear communication, transparent pricing, and respect for your property throughout the project.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Always Available
                </h3>
                <p className="text-gray-400">
                  Quick response times for emergencies and prompt scheduling for routine inspections, repairs, and replacements.
                </p>
              </div>
            </div>
          </div>

          {/* Headquarters Location Map */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Visit Our Deerfield Beach Headquarters
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
              Our headquarters is located in Deerfield Beach, Florida. From here, our team coordinates inspections, permitting, and roofing projects throughout Broward and Palm Beach County.
            </p>

            {/* Google Maps Embed */}
            <div className="mb-6 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.7526872953745!2d-80.13459492404562!3d26.32833627700899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9216f5e1f7f3f%3A0x8f7e7e5e5e5e5e5e!2s590%20Goolsby%20Blvd%2C%20Deerfield%20Beach%2C%20FL%2033442!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="All Phase Construction USA Headquarters Location in Deerfield Beach"
                className="w-full h-64 md:h-96"
              ></iframe>
            </div>

            {/* Address and Contact Info */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-white">Address</h4>
                  </div>
                  <p className="text-gray-400">
                    590 Goolsby Blvd<br />
                    Deerfield Beach, FL 33442
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Phone className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-white">Phone</h4>
                  </div>
                  <a
                    href="tel:+17542275605"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    (754) 227-5605
                  </a>
                </div>

                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-white">Directions</h4>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=590+Goolsby+Blvd+Deerfield+Beach+FL+33442"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-500 font-semibold transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-700 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us today for a free inspection and estimate. Our expert team is ready to help with all your roofing needs in Deerfield Beach and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17542275605"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Call (754) 227-5605
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
