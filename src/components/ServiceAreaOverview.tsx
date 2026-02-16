import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function ServiceAreaOverview() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-700">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-[#C5A572]/10 rounded-full p-3">
              <MapPin className="w-8 h-8 text-[#C5A572]" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Service Area Overview
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed text-center max-w-5xl mx-auto">
            From our central hub in{' '}
            <Link
              to="/locations/deerfield-beach/"
              className="text-[#C5A572] hover:text-[#B08D5B] font-semibold underline decoration-[#C5A572]/30 hover:decoration-[#C5A572] transition-colors"
            >
              Deerfield Beach
            </Link>
            , we provide professional roofing repairs and full replacements across South Florida, including Parkland, Boca Raton, Coconut Creek, Coral Springs, Fort Lauderdale, Pompano Beach, West Palm Beach, and surrounding cities throughout Broward County and Palm Beach County.
          </p>

          <div className="mt-8 text-center">
            <Link
              to="/locations/"
              className="inline-flex items-center gap-2 bg-[#C5A572] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#B08D5B] transition-colors"
            >
              <MapPin className="w-5 h-5" />
              View All Service Areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
