import { Star, Award, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useEffect } from 'react';
import { EXTERNAL_LINKS } from '../config/links';

const certifications = [
  'Tamko Pro Platinum',
  'Owens Corning Platinum',
  'CertainTeed Master',
  'GAF',
  'Metal Alliance',
  'IB Roof Systems',
  'Carlisle',
  'Soprema',
  'Englert',
  'Brava',
];

export default function TrustBadges() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'All Phase Construction USA',
      url: window.location.origin,
      logo: `${window.location.origin}/allphase-logo-white.svg`,
      hasCredential: certifications.map((cert) => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: cert,
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        ratingCount: '500',
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className="bg-[#0a0a0a] py-6 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            <a
              href={EXTERNAL_LINKS.BBB}
              target="_blank"
              rel="nofollow"
              className="flex items-center px-4 py-3 rounded-lg"
            >
              <img
                src="https://seal-seflorida.bbb.org/seals/black-seal-200-65-bbb-90537640.png"
                alt="All Phase Construction USA LLC BBB Business Review"
                className="h-8 w-auto"
                loading="lazy"
                decoding="async"
                style={{ border: 0 }}
              />
            </a>

            <a
              href={EXTERNAL_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-800 hover:border-red-600 transition-all duration-300 group"
              aria-label="Visit our Facebook page"
            >
              <div className="w-5 h-5 flex items-center justify-center bg-blue-600 rounded">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <span className="text-white font-semibold">4.9</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </a>

            <a
              href={EXTERNAL_LINKS.GOOGLE_REVIEWS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-800 hover:border-red-600 transition-all duration-300 group"
              aria-label="Visit our Google reviews"
            >
              <div className="w-5 h-5 flex items-center justify-center bg-white rounded-sm">
                <span className="text-blue-500 font-bold text-sm">G</span>
              </div>
              <span className="text-white font-semibold">4.8</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </a>

            <div className="bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-800">
              <span className="text-gray-300 font-medium">25+ Years Experience</span>
            </div>

            <a
              href={EXTERNAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-800 hover:border-red-600 transition-all duration-300 flex items-center justify-center group"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-red-600 transition-colors duration-300" />
            </a>

            <a
              href={EXTERNAL_LINKS.YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-800 hover:border-red-600 transition-all duration-300 flex items-center justify-center group"
              aria-label="Visit our YouTube channel"
            >
              <Youtube className="w-5 h-5 text-white group-hover:text-red-600 transition-colors duration-300" />
            </a>

            <a
              href={EXTERNAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-800 hover:border-red-600 transition-all duration-300 flex items-center justify-center group"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-red-600 transition-colors duration-300" />
            </a>

            <a
              href={EXTERNAL_LINKS.TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-800 hover:border-red-600 transition-all duration-300 flex items-center justify-center group"
              aria-label="Visit our TikTok page"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-red-600 transition-colors duration-300"
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

      <section className="bg-neutral-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Award className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Certified and Authorized Installer in Deerfield Beach and Surrounding Areas
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Factory-trained and certified by the industry's leading manufacturers
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-neutral-800 px-4 py-4 rounded-lg border border-red-600/30 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center text-center"
              >
                <span className="text-white font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>

          {/* TAMKO Platinum Pro Certification Badge */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src="/TAMKO_Pro_Platinum_(color)_horizontal.png"
                alt="TAMKO Platinum Pro certified roofing contractor logo"
                className="h-20 w-auto opacity-90"
                loading="lazy"
                decoding="async"
              />
              <p className="text-gray-400 text-sm font-medium">
                TAMKO Platinum Pro Certified Contractor
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
