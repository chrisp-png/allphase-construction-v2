import { Phone, Clock, CheckCircle, Award, Users, Star, Flame, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAssessmentModal } from '../context/AssessmentModalContext';
import { EXTERNAL_LINKS } from '../config/links';

const urgencyMessages = [
  'Only 3 inspection slots remaining this week',
  'Only 4 inspection slots remaining this week',
  'Only 5 inspection slots remaining this week',
  'Limited inspection slots available this week',
];

export default function HeroRoofing() {
  // Use a fixed default message to prevent hydration mismatch and CLS
  const [urgencyMessage] = useState('Limited inspection slots available this week');
  const { openModal } = useAssessmentModal();

  return (
    <>
      <style>{`
        /* Mobile header height measurement */
        :root {
          --header-height: 110px;
        }

        /* Mobile-only: Normal hero layout
           Note: Body now has global padding-top for header, so we only add extra spacing here */
        @media (max-width: 768px) {
          #hero-roofing-section {
            min-height: auto !important;
            height: auto !important;
            max-height: none !important;
            margin-top: 40px !important;
            padding-top: 16px !important;
            padding-bottom: 40px !important;
            display: flex !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
            overflow: hidden !important;
            scroll-margin-top: 0 !important;
            scroll-snap-type: none !important;
            scroll-snap-align: none !important;
          }

          #hero-roofing-section .hero-content-wrapper {
            position: relative !important;
            top: auto !important;
            margin-top: 0 !important;
            padding-top: 0 !important;
            transform: none !important;
            display: flex !important;
            justify-content: flex-start !important;
            align-items: flex-start !important;
          }

          #hero-roofing-section .hero-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }

          #hero-roofing-section .hero-headline {
            position: relative !important;
            transform: none !important;
            margin-top: 0 !important;
          }
        }

        /* Desktop/tablet: Centered hero layout */
        @media (min-width: 769px) {
          #hero-roofing-section {
            min-height: max(700px, 100vh) !important;
            padding-top: 200px !important;
            padding-bottom: 80px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
      <section
        id="hero-roofing-section"
        className="relative bg-slate-900"
        style={{
          zIndex: 1
        }}
      >
      <picture className="absolute inset-0 hidden md:block" style={{ overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <source
          media="(max-width: 800px)"
          srcSet="/team_drone_photo-mobile.webp"
          type="image/webp"
          width="800"
          height="450"
        />
        <source
          media="(min-width: 801px) and (max-width: 1280px)"
          srcSet="/team_drone_photo-tablet.webp"
          type="image/webp"
          width="1280"
          height="720"
        />
        <source
          media="(min-width: 1281px)"
          srcSet="/team_drone_photo-desktop.webp"
          type="image/webp"
          width="1550"
          height="872"
        />
        <img
          src="/team_drone_photo-desktop.webp"
          alt="All Phase Construction USA team on a residential roofing project"
          width="1550"
          height="872"
          className="w-full h-full object-cover"
          style={{ aspectRatio: '16 / 9' }}
          loading="eager"
          fetchpriority="high"
          decoding="auto"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 md:from-black/70 md:via-black/50 md:to-black/30" style={{ overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}></div>

      <div className="hero-content-wrapper relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ overflow: 'visible', boxSizing: 'border-box', pointerEvents: 'auto' }}>
        <div className="hero-grid grid lg:grid-cols-2 gap-8 lg:items-start" style={{ overflow: 'visible', pointerEvents: 'auto' }}>
          <div className="hero-content-left" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box', overflow: 'visible', pointerEvents: 'auto' }}>
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-3 leading-[1.2] sm:leading-tight">
              Roofing Contractor — All Phase Construction USA
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-[#C5A572] mb-5 sm:mb-4 font-semibold leading-[1.5] sm:leading-snug">
              South Florida's Trusted Roofers — Locally Owned, 20+ Years in Business
            </h2>

            <p className="text-base sm:text-base md:text-lg text-gray-200 sm:text-gray-300 mb-6 leading-[1.6] sm:leading-relaxed">
              All Phase Construction USA is a dual-licensed roofing contractor (CCC-1331464) and certified general contractor (CGC-1526236) delivering hurricane-compliant roofing for Broward and Palm Beach County homeowners and businesses. We specialize in tile, metal, shingle, flat, and commercial roofing systems — all built to South Florida's HVHZ wind codes with proper fastening and manufacturer-spec installation.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 sm:text-gray-300 mb-6 leading-[1.6] sm:leading-relaxed">
              Based in Deerfield Beach, FL 33442, we have protected properties since 2005 with roof repair, roof replacement, and roof inspections, backed by 4.8+ stars, TRI Alliance High Wind Certification, and 20+ years of real local experience. Call (754) 227-5605 for a free assessment.
            </p>

            <div className="relative rounded-xl overflow-hidden mb-8 shadow-2xl">
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-black/90 to-gray-900/90 backdrop-blur-md"></div>

              {/* Subtle top border glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

              <div className="relative grid grid-cols-2 sm:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-red-900/30">
                <a
                  href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 text-center relative group overflow-hidden transition-all duration-300 hover:bg-red-950/30"
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    <div className="flex items-center justify-center mb-1.5">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400 mr-1.5 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">4.8+</p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-tight font-semibold tracking-wide uppercase">Stars</p>
                  </div>
                </a>

                <a
                  href="tel:+17542275605"
                  onClick={() => { if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'click_to_call', { event_category: 'engagement', event_label: 'hero_trust_bar' }); }}
                  className="p-4 sm:p-5 text-center relative group overflow-hidden transition-all duration-300 hover:bg-red-950/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    <div className="flex items-center justify-center mb-1.5">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-1.5 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-tight font-semibold tracking-wide group-hover:text-red-400 transition-colors duration-300">(754) 227-5605</p>
                  </div>
                </a>

                <a href="https://web.tileroofing.org/atlas/directory/results?PageSize=20&PageNumber=1&Keywords=all%20phase%20construction%20usa" target="_blank" rel="noopener noreferrer" className="p-4 sm:p-5 text-center relative group overflow-hidden hover:bg-white/5 transition-colors duration-300">
                  <div className="relative flex flex-col items-center justify-center">
                    <img
                      src="/tri-alliance-logo.jpg"
                      alt="TRI Alliance Florida High Wind Certified"
                      className="h-10 sm:h-12 w-auto object-contain mb-1"
                      width="48"
                      height="48"
                      loading="eager"
                    />
                    <p className="text-xs sm:text-sm text-gray-300 leading-tight font-semibold tracking-wide group-hover:text-red-400 transition-colors duration-300">High Wind Certified</p>
                  </div>
                </a>

                <div className="p-4 sm:p-5 text-center relative group overflow-hidden">
                  <div className="relative">
                    <div className="flex items-center justify-center mb-1.5">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-1.5 drop-shadow-lg" />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-tight font-semibold tracking-wide">Broward & Palm Beach</p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 text-center relative group overflow-hidden">
                  <div className="relative">
                    <div className="flex items-center justify-center mb-1.5">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mr-1.5 drop-shadow-lg" />
                      <p className="text-xl sm:text-2xl font-bold text-white">20+</p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-tight font-semibold tracking-wide uppercase">Years</p>
                  </div>
                </div>
              </div>

              {/* Bottom border glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
            </div>

          </div>

          <div id="request-assessment" className="hero-content-right bg-white rounded-lg shadow-2xl p-6 sm:p-8" style={{ overflow: 'visible', position: 'relative', zIndex: 20, pointerEvents: 'auto', scrollMarginTop: 'calc(var(--header-height) + env(safe-area-inset-top, 0px) + 16px)' }}>
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Your Roof Assessment
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Takes just 30 seconds to fill out
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-col shadow-lg">
                    <CheckCircle className="w-6 h-6 mb-0.5" />
                    <span className="text-[8px] font-bold leading-tight text-center">100%<br/>GUARANTEE</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg flex items-start gap-2">
                <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">We respond within 60 minutes</span> during business hours to find a time that works with your schedule for a free inspection.
                </p>
              </div>
            </div>

            <form
              action="https://formspree.io/f/mojakkld"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="source" value="main-website-homepage" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                  placeholder="(754) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="street-address"
                  name="street_address"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                    placeholder="Boca Raton"
                  />
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-2">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <select
                      id="state"
                      name="state"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                    >
                      <option value="FL">FL</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="zip-code"
                      name="zip_code"
                      required
                      pattern="[0-9]{5}"
                      maxLength={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                      placeholder="33101"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  What do you need? <span className="text-red-600">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                >
                  <option value="">Select a service...</option>
                  <option value="Roof Replacement">Roof Replacement</option>
                  <option value="Roof Repair">Roof Repair</option>
                  <option value="Storm Damage">Storm Damage</option>
                  <option value="Inspection">Inspection</option>
                  <option value="Wind Mitigation Inspection">Wind Mitigation Inspection</option>
                  <option value="Just Getting Estimates">Just Getting Estimates</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 resize-none"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-3 flex items-center justify-center gap-2">
                <Flame className="w-4 h-4 text-red-600 flex-shrink-0" />
                <p className="text-sm font-semibold text-red-700">
                  {urgencyMessage}
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
              >
                Request Assessment
              </button>

              <p className="text-center text-sm text-gray-600">
                Or call{' '}
                <a
                  href="tel:+17542275605"
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  (754) 227-5605
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
