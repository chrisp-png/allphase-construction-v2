import { Star, Instagram, Youtube, Linkedin } from 'lucide-react';
import { EXTERNAL_LINKS } from '../config/links';

export default function TrustBadges() {

  return (
    <section className="bg-[#0a0a0a] py-8 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-10">
          <a
            href={EXTERNAL_LINKS.BBB}
            target="_blank"
            rel="nofollow"
            className="flex items-center px-5 py-4 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://seal-seflorida.bbb.org/seals/black-seal-200-65-bbb-90537640.png"
              alt="All Phase Construction USA LLC BBB Business Review"
              className="h-12 w-auto"
              width="200"
              height="65"
              loading="lazy"
              decoding="async"
              style={{ border: 0 }}
            />
          </a>

          <a
            href={EXTERNAL_LINKS.FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-neutral-900 px-6 py-4 rounded-xl border border-neutral-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 group"
            aria-label="Visit our Facebook page"
          >
            <div className="w-7 h-7 flex items-center justify-center bg-blue-600 rounded">
              <span className="text-white font-bold text-base">f</span>
            </div>
            <span className="text-white font-bold text-lg">4.9</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </a>

          <a
            href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-neutral-900 px-6 py-4 rounded-xl border border-neutral-800 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 group"
            aria-label="Visit our Google reviews"
          >
            <div className="w-7 h-7 flex items-center justify-center bg-white rounded-sm">
              <span className="text-blue-500 font-bold text-base">G</span>
            </div>
            <span className="text-white font-bold text-lg">4.8</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </a>

          {/* TRI Alliance Badge */}
          <a
            href={EXTERNAL_LINKS.TRI_DIRECTORY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-4 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/tri-alliance-logo.jpg"
              alt="TRI Alliance Florida High Wind Certified — Tile Roofing Industry Alliance Member"
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
            />
          </a>

          {/* FRSA Member Badge */}
          <a
            href={EXTERNAL_LINKS.FRSA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-4 rounded-lg hover:scale-105 transition-transform duration-300"
            aria-label="FRSA Member — Florida Roofing & Sheet Metal Contractors Association"
          >
            <img
              src="/frsa-member-badge.svg"
              alt="FRSA Member — Florida Roofing and Sheet Metal Contractors Association"
              width="120"
              height="48"
              loading="lazy"
              decoding="async"
            />
          </a>

          <div className="bg-neutral-900 px-6 py-4 rounded-xl border border-neutral-800 hover:border-red-600 transition-all duration-300 group">
            <span className="text-white font-bold text-lg">25+ Years Experience</span>
          </div>

          <a
            href={EXTERNAL_LINKS.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 px-5 py-4 rounded-xl border border-neutral-800 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 flex items-center justify-center group"
            aria-label="Visit our Instagram page"
          >
            <Instagram className="w-7 h-7 text-white group-hover:text-red-600 transition-colors duration-300" />
          </a>

          <a
            href={EXTERNAL_LINKS.YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 px-5 py-4 rounded-xl border border-neutral-800 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 flex items-center justify-center group"
            aria-label="Visit our YouTube channel"
          >
            <Youtube className="w-7 h-7 text-white group-hover:text-red-600 transition-colors duration-300" />
          </a>

          <a
            href={EXTERNAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 px-5 py-4 rounded-xl border border-neutral-800 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 flex items-center justify-center group"
            aria-label="Visit our LinkedIn page"
          >
            <Linkedin className="w-7 h-7 text-white group-hover:text-red-600 transition-colors duration-300" />
          </a>

          <a
            href={EXTERNAL_LINKS.TIKTOK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 px-5 py-4 rounded-xl border border-neutral-800 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 flex items-center justify-center group"
            aria-label="Visit our TikTok page"
          >
            <svg
              className="w-7 h-7 text-white group-hover:text-red-600 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
