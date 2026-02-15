/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Deerfield Beach City Page
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This is the dedicated city page for Deerfield Beach, the primary hub location.
 * This page focuses on Deerfield Beach itself, not the service areas directory.
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Award, Shield, Clock, Users, FileCheck, Camera, CheckCircle, ArrowRight, Star, ChevronDown } from 'lucide-react';
import Contact from '../../components/Contact';
import Lightbox from '../../components/Lightbox';
import ChamberBadges from '../../components/ChamberBadges';
import { getLocationBySlug } from '../../data/locations';
import { buildLocationSeo, generateDeerfieldBeachSchema } from '../../lib/locationSeo';

export default function DeerfieldBeachCityPage() {
  // Get location data and SEO from single source of truth
  const location = getLocationBySlug('deerfield-beach');
  const seo = location ? buildLocationSeo(location) : null;
  const schema = generateDeerfieldBeachSchema();

  // Force-inject title immediately to prevent blank page
  useEffect(() => {
    if (seo) {
      document.title = seo.title;
    }
  }, [seo]);

  // Lightbox state for recent projects
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const recentProjects = [
    {
      src: '/social-proof/CELESTIAL_BRONZE_METAL_STANDING_SEAM_ROOF_DEERFIELD_BEACH_FL_ALL_PHASE_CONSTRUCTION_USA.jpg',
      alt: 'Deerfield Beach roof replacement - HVHZ standing seam metal roofing in Broward County',
      caption: 'Celestial Bronze Standing Seam Metal Roof - Deerfield Beach'
    },
    {
      src: '/social-proof/all-phase-customer-shingle-roof-deerfield-beach.JPEG',
      alt: 'Deerfield Beach roof replacement - HVHZ architectural shingle roofing in Broward County',
      caption: 'HVHZ-Compliant Architectural Shingle Roof - Deerfield Beach'
    },
    {
      src: '/social-proof/Celestial_Bronze_MetaL_Roof__Deerfield_Beach_All_Phase_Construction_USA.jpg',
      alt: 'Deerfield Beach roof replacement - HVHZ metal roofing system in Broward County',
      caption: 'Premium Metal Roofing System - Deerfield Beach'
    }
  ];

  const faqItems = [
    {
      question: 'How do I know if I need roof repair or a full roof replacement?',
      answer: 'Look for signs such as persistent leaks, missing or damaged shingles, sagging areas, or visible water damage inside your home. A professional roof inspection by a certified contractor can assess the condition of your roof and recommend whether repair or replacement is the best option.'
    },
    {
      question: 'What factors affect the cost of a roofing project in Deerfield Beach?',
      answer: 'The cost typically depends on the size of your roof, the materials selected (shingles, tile, metal, etc.), the complexity of the installation, and the extent of any damage. Location, permit requirements, and the contractor\'s experience can also influence the final price.'
    },
    {
      question: 'How long does it take to install a new roof?',
      answer: 'Most residential roofing projects in Deerfield Beach can be completed in a few days, depending on the size of the house and weather conditions. Your contractor will provide a clear timeline before work begins.'
    },
    {
      question: 'What should I look for when hiring a roofing contractor?',
      answer: 'Choose a contractor who is licensed, insured, and experienced with local building codes. Look for clear communication, positive reviews, and a willingness to provide references and a detailed quote. A great contractor will offer a strong warranty and prioritize quality workmanship.'
    },
    {
      question: 'Is financing available for roof repair or replacement?',
      answer: 'Many contractors offer financing options to help make roof repair or replacement more affordable. Ask your contractor about available plans and how to apply.'
    },
    {
      question: 'How often should I schedule a roof inspection?',
      answer: 'It\'s recommended to have your roof inspected at least once a year, and after any major storm event. Regular inspections help catch problems early and keep your roof in optimal condition.'
    },
    {
      question: 'What is underlayment, and why is it important?',
      answer: 'Underlayment is a protective layer installed beneath your roofing material. It acts as a secondary barrier against water intrusion, helping to prevent leaks and extend the life of your roof.'
    },
    {
      question: 'Do I need a permit for roof work in Deerfield Beach?',
      answer: 'Yes, most roofing projects require permits and inspections to ensure compliance with local and state building codes. Your contractor should handle the permitting process and provide all necessary documentation.'
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % recentProjects.length);
  };

  const previousImage = () => {
    setLightboxIndex((prev) => (prev - 1 + recentProjects.length) % recentProjects.length);
  };

  // Fallback if location not found
  if (!seo) {
    return <div>Location not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content={seo.robots} />
        <link rel="canonical" href={seo.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:url" content={seo.ogUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.ogTitle} />
        <meta name="twitter:description" content={seo.ogDescription} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Hero Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
                <MapPin className="w-4 h-4" />
                Primary Location
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Roofing Contractor in Deerfield Beach, FL — Roof Repair, Replacement & Inspection-First Diagnostics
              </h1>

              <p className="text-xl text-gray-400 mb-8">
                Serving Deerfield Beach (33441/33442) and Broward & Palm Beach Counties with code-compliant roof repair and roof replacement.
              </p>

              {/* Proof Row */}
              <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm md:text-base mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">4.8 Rating • 137+ Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="font-medium">HQ in Deerfield Beach</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span className="font-medium">Same-day inspections when scheduling permits</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0">
                <a
                  href="#hero-form"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg lg:hidden"
                >
                  Request a Free Roof Assessment
                </a>
                <a
                  href="tel:+17542275605"
                  className="inline-flex items-center justify-center gap-2 border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (754) 227-5605
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div id="hero-form" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Request a Free Roof Assessment
              </h2>
              <p className="text-gray-400 mb-6">
                HVHZ-compliant roof repair and replacement in Broward & Palm Beach Counties.
              </p>

              <form action="https://formspree.io/f/mzdbydvv" method="POST" className="space-y-4">
              <input type="hidden" name="source_page" value="Deerfield Beach Location Page" />
              <input type="hidden" name="_subject" value="🏠 Deerfield Beach Hero Form Submission" />

              <div>
                <label htmlFor="hero-full-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="hero-full-name"
                  name="full_name"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="hero-phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="hero-phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="(754) 227-5605"
                />
              </div>

              <div>
                <label htmlFor="hero-email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="hero-email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="hero-city" className="block text-sm font-medium text-gray-300 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="hero-city"
                  name="city"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Deerfield Beach"
                />
              </div>

              <div>
                <label htmlFor="hero-roof-type" className="block text-sm font-medium text-gray-300 mb-2">
                  Roof Type
                </label>
                <select
                  id="hero-roof-type"
                  name="roof_type"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white"
                >
                  <option value="">Select roof type</option>
                  <option value="Shingle">Shingle</option>
                  <option value="Tile">Tile</option>
                  <option value="Metal">Metal</option>
                  <option value="Flat">Flat</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="hero-message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="hero-message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-500"
                  placeholder="Tell us about your roofing needs..."
                ></textarea>
              </div>

              <p className="text-sm text-gray-400 text-center">
                No obligation. No pressure. Just a professional evaluation.
              </p>

              <button
                type="submit"
                className="w-full py-4 bg-red-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule My Inspection
              </button>

              <p className="text-xs text-gray-400 text-center leading-relaxed">
                We respond within 45 minutes during normal business hours. After hours, we'll call you the next morning to speak with a live roofing specialist.
              </p>
            </form>
            </div>
          </div>

          {/* Introduction to Roofing Services Section */}
          <div className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Introduction to Roofing Services
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your roof is your home's first line of defense against the elements, making roofing services a top priority for every homeowner. Whether you're dealing with a leaky roof, need a thorough roof inspection, or are considering a full roof replacement, working with a highly skilled contractor is essential. Professional roofing services cover everything from minor roof repair to the installation of a brand new roof, ensuring that every job is completed to the highest quality standards. A reputable contractor will provide expert guidance, help you explore your options, and ensure your roof is installed or repaired correctly the first time. If you're looking to find a reliable provider for your next roofing project, start by researching local contractors with a proven track record for quality and customer satisfaction. The right team will provide the services you need to protect your home and give you peace of mind.
            </p>
          </div>

          {/* Service Pills Row */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link
              to="/roof-inspection"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/70 hover:bg-gray-700/70 border border-gray-600/50 hover:border-red-600/50 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg"
            >
              <FileCheck className="w-4 h-4" />
              Roof Inspections
            </Link>
            <Link
              to="/roof-repair"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/70 hover:bg-gray-700/70 border border-gray-600/50 hover:border-red-600/50 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg"
            >
              <CheckCircle className="w-4 h-4" />
              Roof Repair
            </Link>
            <Link
              to="/roof-replacement-process"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/70 hover:bg-gray-700/70 border border-gray-600/50 hover:border-red-600/50 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg"
            >
              <ArrowRight className="w-4 h-4" />
              Roof Replacement
            </Link>
          </div>

          {/* Recent Deerfield Beach Roofs Photo Strip */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Recent Deerfield Beach Roof
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProjects.map((project, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer rounded-xl overflow-hidden shadow-xl border border-gray-700 group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lightbox */}
          {lightboxOpen && (
            <Lightbox
              images={recentProjects}
              currentIndex={lightboxIndex}
              onClose={closeLightbox}
              onNext={nextImage}
              onPrevious={previousImage}
            />
          )}

          {/* Roofing Services in Deerfield Beach */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Roof Inspection, Repair & Replacement in Deerfield Beach, FL
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                All Phase Construction USA provides <Link to="/roof-inspection" className="underline hover:text-white">roof inspections</Link>, <Link to="/roof-repair" className="underline hover:text-white">roof repair</Link>, and <Link to="/roof-replacement-process" className="underline hover:text-white">roof replacement</Link> services in Deerfield Beach designed to meet High Velocity Hurricane Zone (HVHZ) standards. Every roofing system is evaluated for storm damage, structural integrity, and wind mitigation eligibility before recommendations are made. Every project begins with a thorough roof inspection to determine the most cost-effective and code-compliant solution.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                We install and service <Link to="/roofing/shingle-roofing" className="underline hover:text-white">shingle roofs</Link>, <Link to="/roofing/tile-roofing" className="underline hover:text-white">tile roofs</Link>, <Link to="/roofing/metal-roofing" className="underline hover:text-white">metal roofs</Link>, and <Link to="/roofing/flat-roofing" className="underline hover:text-white">flat roofing systems</Link> throughout 33441 and 33442. Each installation is completed with hurricane-resistant fasteners, secondary water barriers, and inspection-ready documentation.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Based at our Deerfield Beach headquarters, our roofing team serves residential and commercial properties throughout Broward and Palm Beach Counties with code-compliant systems built for long-term performance.
              </p>
            </div>
          </div>

          {/* Service Areas Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Service Areas from Our Deerfield Beach Headquarters
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto text-lg">
              Based at 590 Goolsby Blvd in Deerfield Beach, our roofing team serves homeowners and property managers throughout Broward and Palm Beach Counties. View our complete service area coverage to see all cities we serve.
            </p>
            <div className="text-center">
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                View All Service Areas
                <ArrowRight className="w-5 h-5" />
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
                All roofing projects in Deerfield Beach require proper permitting and inspection under Florida Building Code and High Velocity Hurricane Zone (HVHZ) standards. Our team manages the full permit process, coordinates required inspections, and ensures every roofing system meets or exceeds Broward County requirements.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                HVHZ roofing in Deerfield Beach includes strict standards for:
              </p>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Roof-to-deck attachment and fastener spacing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Secondary water resistance (SWR) systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Corrosion-resistant materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Approved underlayment and installation methods</span>
                </li>
              </ul>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Every installation is documented and completed to pass inspection without delays. We provide clear photo documentation and compliance records when required for insurance or property transactions.
              </p>
            </div>
          </div>

          {/* Why Hiring a Dual-Licensed Roofing Contractor Matters */}
          <div className="mb-16 bg-gray-800/30 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Why Hiring a Dual-Licensed Roofing Contractor Matters in Deerfield Beach
            </h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-600">
                    <th className="text-left py-4 px-4 text-white font-bold text-lg bg-gray-800/50">
                      Scope of Work
                    </th>
                    <th className="text-center py-4 px-4 text-white font-bold text-lg bg-gray-800/50">
                      Standard Roofing Contractor
                    </th>
                    <th className="text-center py-4 px-4 text-white font-bold text-lg bg-gray-800/50">
                      Dual-Licensed Roofing Contractor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-4 text-gray-300 font-medium">
                      Roof Replacement
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-800/20">
                    <td className="py-4 px-4 text-gray-300 font-medium">
                      Structural Permit Work
                    </td>
                    <td className="py-4 px-4 text-center text-gray-500 text-sm">
                      Requires separate contractor
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-4 text-gray-300 font-medium">
                      Hurricane Strap Upgrades
                    </td>
                    <td className="py-4 px-4 text-center text-gray-500 text-sm">
                      Requires separate contractor
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-800/20">
                    <td className="py-4 px-4 text-gray-300 font-medium">
                      Roof-to-Wall Reinforcement
                    </td>
                    <td className="py-4 px-4 text-center text-gray-500 text-sm">
                      Requires separate contractor
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-4 text-gray-300 font-medium">
                      Flashing Cut-Out & Stucco Repair
                    </td>
                    <td className="py-4 px-4 text-center text-gray-500 text-sm">
                      Requires separate contractor
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-800/20">
                    <td className="py-4 px-4 text-gray-300 font-medium">
                      Structural Load Adjustments
                    </td>
                    <td className="py-4 px-4 text-center text-gray-500 text-sm">
                      Requires separate contractor
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-4 text-gray-300 font-medium">
                      Wind Mitigation Documentation
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-800/20">
                    <td className="py-4 px-4 text-gray-300 font-medium">
                      Insurance Upgrade Coordination
                    </td>
                    <td className="py-4 px-4 text-center text-gray-500 text-sm">
                      Limited scope
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                When roofing upgrades involve structural reinforcement or insurance-driven improvements, working with a dual-licensed roofing contractor reduces delays, eliminates trade coordination issues, and ensures full code compliance under one responsible party.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                It's also important to hire professional roofers for proper assessment, quality workmanship, and safety throughout the roofing process.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Learn more about what to look for when <Link to="/how-to-hire-roofing-contractor" className="underline hover:text-white">selecting a roofing contractor in South Florida</Link>.
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
                Insurance carriers in South Florida require verifiable proof of proper roofing installation. The Roofing Specialist provides comprehensive photo documentation throughout every project, including:
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
                The Roofing Specialist's installations are compatible with wind mitigation inspections, which can reduce your insurance premiums by documenting specific hurricane-resistant features of your roof system.
              </p>
            </div>
          </div>

          {/* Compact CTA Block */}
          <div className="mb-16 bg-gray-800/30 rounded-xl p-8 border border-gray-700 text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Schedule a Roof Inspection?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              Get a documented, inspection-ready roofing assessment from a licensed HVHZ roofing specialist serving Deerfield Beach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/roof-inspection"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Schedule My Roof Inspection
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:7542275605"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call (754) 227-5605
              </a>
            </div>
          </div>

          {/* Storm Damage and Restoration */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Storm Damage and Restoration in Deerfield Beach
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Living in Deerfield Beach means your roof is exposed to the threat of severe storms and hurricanes. When storm damage strikes—whether it's missing shingles, leaks, or more extensive problems—it's crucial to act quickly. A certified contractor can assess the extent of the damage, provide a clear quote for repairs, and help you develop a restoration plan tailored to your home's needs. They'll also guide you through the insurance claims process, ensuring you have the documentation required for a smooth experience. By choosing a qualified professional, you can be confident that your roof will be restored to its original condition, protecting your home and providing lasting peace of mind. Don't wait for small issues to become major headaches—find a trusted contractor in Deerfield Beach to provide the expertise and support you need after a storm.
            </p>
          </div>

          {/* Hurricane-Resistant Roofing Systems */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Hurricane-Resistant Roofing Systems in Deerfield Beach
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <Link to="/shingle-roofing" className="block group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                    Architectural Shingle Roofs
                  </h3>
                </Link>
                <p className="text-gray-400 mb-4">
                  HVHZ-compliant TAMKO and GAF architectural shingles engineered for extreme wind resistance up to 130+ mph. Installed to Broward County inspection standards, these systems qualify for insurance wind mitigation credits and provide proven coastal durability.
                </p>
                <Link to="/shingle-roofing" className="text-red-600 hover:text-red-500 font-semibold">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <Link to="/tile-roofing" className="block group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                    Concrete and Clay Tile Roofs
                  </h3>
                </Link>
                <p className="text-gray-400 mb-4">
                  Hurricane-rated tile systems installed with foam adhesive or mortar meeting HVHZ wind uplift requirements. Exceeds Broward County's stringent installation standards for coastal properties and qualifies for maximum insurance wind mitigation discounts.
                </p>
                <Link to="/tile-roofing" className="text-red-600 hover:text-red-500 font-semibold">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <Link to="/metal-roofing" className="block group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                    Standing Seam Metal Roofs
                  </h3>
                </Link>
                <p className="text-gray-400 mb-4">
                  Mechanically seamed metal roofing systems with concealed fasteners rated for extreme wind resistance and salt air exposure. HVHZ-compliant installations meet Broward County's highest structural standards for coastal durability and insurance eligibility.
                </p>
                <Link to="/metal-roofing" className="text-red-600 hover:text-red-500 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            <p className="text-center text-gray-400">
              Not sure which roofing system is right for your property?{' '}
              <Link to="/roof-inspection" className="text-red-600 hover:text-red-500 font-semibold">
                Schedule a professional roof inspection
              </Link>
              .
            </p>
          </div>

          {/* Regular Roof Maintenance */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Importance of Regular Roof Maintenance
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Regular roof maintenance is the key to preventing costly problems and extending the life of your roof. Scheduling a professional roof inspection allows a contractor to perform a detailed assessment, identifying any issues before they escalate. With a tailored maintenance plan, you can ensure your roof remains in top condition year after year. Proactive inspections and timely repairs help protect your investment, prevent leaks, and avoid unexpected expenses. Don't overlook the importance of routine care—have a qualified contractor provide regular inspections and maintenance to keep your roof performing at its best and your home protected.
            </p>
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
                  Local Owner-Operator
                </h3>
                <p className="text-gray-400">
                  Owned and operated in Deerfield Beach, we oversee projects directly to ensure every roof meets HVHZ and Broward County standards.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Dual-Licensed Roofing Specialist
                </h3>
                <p className="text-gray-400">
                  Our roofing projects are evaluated beyond surface installation — ensuring structural integrity, compliance, and long-term durability.
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
                  Every system is installed with hurricane-resistant fasteners, code-approved materials, and inspection-ready documentation.
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
                  Decades of roofing experience in South Florida's coastal climate means we understand wind uplift, salt exposure, and long-term performance.
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
                  Clear communication, transparent estimates, and documented inspections — no pressure tactics.
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
                  Fast response times for roof inspections, storm damage evaluations, and urgent repair needs in Deerfield Beach.
                </p>
              </div>

            </div>

            <ChamberBadges />
          </div>

          {/* Headquarters Location Map */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Deerfield Beach Headquarters – Serving Broward & Palm Beach Counties
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
              All Phase Construction USA is headquartered at 590 Goolsby Blvd, Deerfield Beach, FL 33442. Established in 2006, our office serves as the operational base for roof inspections, roof repair, and roof replacement projects throughout Deerfield Beach, Boca Raton, and surrounding communities in Broward and Palm Beach Counties.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
              Located near the Deerfield Beach and Boca Raton border, our team provides fast response times for homeowners seeking hurricane-compliant roofing systems and wind mitigation documentation.
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
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=590+Goolsby+Blvd+Deerfield+Beach+FL+33442"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    590 Goolsby Blvd<br />
                    Deerfield Beach, FL 33442
                  </a>
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

            {/* CTA Line */}
            <p className="text-gray-400 text-center mt-6 text-sm">
              Need directions or want to schedule an inspection? Call{' '}
              <a href="tel:+17542275605" className="text-red-600 hover:text-red-500 font-semibold transition-colors">
                (754) 227-5605
              </a>{' '}
              or{' '}
              <a href="/roof-inspection" className="text-red-600 hover:text-red-500 font-semibold transition-colors">
                request a roof assessment online
              </a>.
            </p>
          </div>

          {/* Warranty and Guarantee Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Warranty and Guarantee
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              When planning a roofing project, understanding the warranty and guarantee offered by your contractor is essential. A reputable contractor will provide a clear, comprehensive warranty that covers both materials and labor, giving you peace of mind throughout the life of your roof. This warranty ensures that if any issues arise, your investment is protected and the contractor will address problems promptly. Always review the warranty details before work begins, and don't hesitate to ask for clarification on what is and isn't covered. A strong warranty is a sign of a contractor's confidence in their work and their commitment to quality—make it a priority when selecting your roofing partner.
            </p>
          </div>

          {/* FAQs Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              FAQs about Roofing in Deerfield Beach
            </h2>

            <div className="space-y-4">
              {faqItems.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                const faqId = `faq-answer-${index}`;

                return (
                  <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                    <h3>
                      <button
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        aria-controls={faqId}
                        className="w-full flex items-center justify-between text-left px-6 py-4 bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                      >
                        <span className="text-lg md:text-xl font-bold text-white pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    <div
                      id={faqId}
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                    >
                      <div className="px-6 py-4 bg-gray-900/20">
                        <p className="text-gray-400 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mt-8">
              If you have more questions or want to start your roofing project, contact a certified Deerfield Beach roofing specialist today to get clear answers and expert guidance.
            </p>
          </div>

          {/* Explore Service Areas Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Explore All Service Areas
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto text-lg">
              From our Deerfield Beach headquarters, we provide professional roofing services across 50+ cities in Broward and Palm Beach Counties. View detailed information about each service area, including local building codes, permit requirements, and project portfolios.
            </p>
            <div className="text-center">
              <Link
                to="/locations/deerfield-beach/service-area"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                View All Service Areas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact Form Section */}
          <div id="contact-form">
            <Contact />
          </div>

          {/* Final Content Section */}
          <div className="mb-16">
            <p className="text-gray-400 text-lg leading-relaxed">
              When facing roof issues, the decision between repair and replacement can be challenging. It's important to consult a professional roofing contractor to assess the extent of the damage. In some cases, minor issues can be fixed with repairs, but if the damage is extensive or affects the underlayment, it may be necessary to replace the entire roof. Finally, working with an experienced contractor ensures you receive expert advice and quality workmanship, giving you peace of mind about your home's protection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
