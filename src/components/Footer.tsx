
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-600">
      {/* Premium CTA Section */}
      <div className="bg-gradient-to-br from-neutral-900 via-black to-neutral-900 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Ready to Get Started?<br />
            <span className="text-red-600">Talk to South Florida's Most Trusted Roofers</span>
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you need a full roof replacement, a storm damage assessment, or just want a professional opinion on your roof's condition—All Phase Construction USA is here to help.
          </p>

          <p className="text-base text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            We're the roofing contractor South Florida homeowners trust for honest assessments, code-compliant installations, and warranties that actually mean something. To find a list of trusted roofing contractors and learn more about our services, visit our website today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+17542275605"
              onClick={() => { if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'click_to_call', { event_category: 'engagement', event_label: 'footer_cta' }); }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call (754) 227-5605
            </a>
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Request Free Estimate
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-neutral-800 pt-10">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">BBB A+ Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">Directorii $25,000 Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">Tamko Pro Platinum</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">GAF Gold Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">20+ Years in Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <p className="text-gray-400 text-sm mb-2">
              Dual-Licensed Roofing Contractor (CCC) with General Contractor (CGC) Certification
            </p>
            <p className="text-gray-400 text-sm mb-4 font-semibold">
              CCC-1331464 • CGC-1526236
            </p>
            <div className="space-y-2 text-gray-400 text-sm mb-6">
              <p>590 Goolsby Blvd</p>
              <p>Deerfield Beach, FL 33442</p>
              <p>
                <a
                  href="tel:+17542275605"
                  className="hover:text-red-600 transition-colors"
                >
                  (754) 227-5605
                </a>
              </p>
              <p>
                <a
                  href="mailto:leads@allphaseusa.com"
                  className="hover:text-red-600 transition-colors"
                >
                  leads@allphaseusa.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-2">Get Directions</h4>
              <p className="text-sm text-gray-400">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=590+Goolsby+Blvd+Deerfield+Beach+FL+33442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors"
                >
                  Google Maps
                </a>
                {' | '}
                <a
                  href="https://maps.apple.com/?daddr=590+Goolsby+Blvd,+Deerfield+Beach,+FL+33442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors"
                >
                  Apple Maps
                </a>
                {' | '}
                <a
                  href="https://waze.com/ul?ll=26.3186,-80.1147&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors"
                >
                  Waze
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
                            <li>
                <Link to="/roofing-services" className="hover:text-red-600 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/residential-roofing/" className="hover:text-red-600 transition-colors">
                  Residential Roofing
                </Link>
              </li>
              <li>
                <Link to="/commercial-roofing/" className="hover:text-red-600 transition-colors">
                  Commercial Roofing
                </Link>
              </li>
              <li>
                <Link to="/tile-roofing/" className="hover:text-red-600 transition-colors">
                  Tile Roofing
                </Link>
              </li>
              <li>
                <Link to="/metal-roofing/" className="hover:text-red-600 transition-colors">
                  Metal Roofing
                </Link>
              </li>
              <li>
                <Link to="/shingle-roofing/" className="hover:text-red-600 transition-colors">
                  Shingle Roofing
                </Link>
              </li>
              <li>
                <Link to="/flat-roofing/" className="hover:text-red-600 transition-colors">
                  Flat Roofing
                </Link>
              </li>
              <li>
                <Link to="/roof-repair/" className="hover:text-red-600 transition-colors">
                  Roof Repair
                </Link>
              </li>
                            <li>
                <Link to="/roof-inspection" className="hover:text-red-600 transition-colors">
                  Roof Inspection
                </Link>
              </li>
              <li>
                <Link to="/roof-replacement-process/" className="hover:text-red-600 transition-colors">
                  Replacement Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/about-us/" className="hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects/" className="hover:text-red-600 transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/reviews/" className="hover:text-red-600 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/blog/" className="hover:text-red-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                                <Link to="/frequently-asked-questions/" className="hover:text-red-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/roof-inspection/" className="hover:text-red-600 transition-colors">
                  Roof Inspection Guide
                </Link>
              </li>
              <li>
                <Link to="/roof-replacement-process/" className="hover:text-red-600 transition-colors">
                  Roof Replacement Process
                </Link>
              </li>
              <li>
                <Link to="/roof-repair/" className="hover:text-red-600 transition-colors">
                  Roof Repair Services
                </Link>
              </li>
              <li>
                <Link to="/roof-cost-calculator/" className="hover:text-red-600 transition-colors">
                  Roof Cost Calculator
                </Link>
              </li>
              <li>
                <Link to="/blog/" className="hover:text-red-600 transition-colors">
                  Roofing Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/locations/deerfield-beach/" className="hover:text-red-600 transition-colors font-medium">
                  Deerfield Beach (HQ)
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-gray-500 text-xs uppercase tracking-wider">Palm Beach County</span>
              </li>
              <li>
                <Link to="/locations/boca-raton/" className="hover:text-red-600 transition-colors">
                  Boca Raton
                </Link>
              </li>
              <li>
                <Link to="/locations/boynton-beach/" className="hover:text-red-600 transition-colors">
                  Boynton Beach
                </Link>
              </li>
              <li>
                <Link to="/locations/delray-beach/" className="hover:text-red-600 transition-colors">
                  Delray Beach
                </Link>
              </li>
              <li>
                <Link to="/locations/west-palm-beach/" className="hover:text-red-600 transition-colors">
                  West Palm Beach
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-gray-500 text-xs uppercase tracking-wider">Broward County</span>
              </li>
              <li>
                <Link to="/locations/coral-springs/" className="hover:text-red-600 transition-colors">
                  Coral Springs
                </Link>
              </li>
              <li>
                <Link to="/locations/fort-lauderdale/" className="hover:text-red-600 transition-colors">
                  Fort Lauderdale
                </Link>
              </li>
              <li>
                <Link to="/locations/pompano-beach/" className="hover:text-red-600 transition-colors">
                  Pompano Beach
                </Link>
              </li>
              <li className="pt-2 mt-2 border-t border-neutral-800">
                <Link to="/sitemap/#palm-beach-county" className="hover:text-red-600 transition-colors hover:underline font-medium inline-flex items-center gap-1">
                  View All Cities <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/AllPhaseConstructionUsA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/all_phase_construction_usa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@allphaseconstructionusa5626"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/all-phase-construction-usa-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@allphaseusa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition-colors"
              aria-label="TikTok"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 All Phase Construction USA, LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <Link to="/privacy/" className="hover:text-red-600 transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link to="/terms/" className="hover:text-red-600 transition-colors">
                Terms of Service
              </Link>
              <span>|</span>
              <Link to="/accessibility/" className="hover:text-red-600 transition-colors">
                Accessibility
              </Link>
              <span>|</span>
              <Link to="/sitemap/" className="hover:text-red-600 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
