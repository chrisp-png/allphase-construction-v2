import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';

export default function ServiceAreas() {
  const [isPrefetched, setIsPrefetched] = useState(false);

  const handlePrefetch = useCallback(() => {
    if (!isPrefetched) {
      setIsPrefetched(true);
      import('../pages/locations/ServiceAreasHubPage').catch(() => {});
    }
  }, [isPrefetched]);

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-8 h-8 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Roofing Services Across South Florida and Surrounding Areas
            </h2>
          </div>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
            Headquartered in Deerfield Beach, we serve homeowners and commercial property owners throughout Broward and Palm Beach Counties. Our team knows the local building departments, the permitting requirements, and the unique challenges of roofing in the High Velocity Hurricane Zone.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
            If you need to find a roofing contractor near you, you can use the{' '}
            <a
              href="https://www.bbb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 underline transition-colors"
            >
              BBB website
            </a>
            , which lists trusted professionals in your area. Additionally,{' '}
            <a
              href="https://www.gaf.com/en-us/roofing-contractors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 underline transition-colors"
            >
              GAF
            </a>
            , North America's largest roofing manufacturer, offers a directory to find residential roofing contractors.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From Boca Raton to Fort Lauderdale, Coral Springs to Pompano Beach—we've installed and repaired roofs in neighborhoods across the region.
          </p>
        </div>

        {/* Premium Service Areas CTA */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl border border-gray-700/60 shadow-2xl hover:border-red-600/60 hover:shadow-red-900/20 transition-all duration-500 group">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 px-8 py-12 md:px-12 md:py-16 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl mb-6 shadow-lg shadow-red-900/30 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
              View Our Full Service Area Coverage
            </h3>

            {/* Supporting Copy */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              See every city we serve across Broward & Palm Beach Counties — from residential neighborhoods to commercial districts.
            </p>

            {/* Primary Button */}
            <div className="flex justify-center">
              <Link
                to="/locations/service-areas"
                onMouseEnter={handlePrefetch}
                onFocus={handlePrefetch}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-xl hover:shadow-red-900/60 hover:scale-105 transform"
              >
                Service Areas Hub
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle Divider */}
        <div className="mt-12 flex justify-center">
          <div className="w-28 h-px bg-white/10"></div>
        </div>

        {/* Inspection CTA Block */}
        <div className="mt-8 text-center">
          <div className="bg-[#0a0f1a] rounded-2xl p-8 sm:p-10 inline-block shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
            <p className="text-gray-300 mb-4">
              Schedule your free roof inspection today.
            </p>
            <a
              href="tel:+17542275605"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MapPin className="w-5 h-5" />
              Call Us: (754) 227-5605
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
