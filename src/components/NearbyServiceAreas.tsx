import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { NearbyCityLink } from '../data/nearbyRoofRepairCities';

interface NearbyServiceAreasProps {
  nearbyCities: NearbyCityLink[];
  serviceType?: string;
}

export default function NearbyServiceAreas({ nearbyCities, serviceType = 'roof-repair' }: NearbyServiceAreasProps) {
  if (nearbyCities.length === 0) return null;

  return (
    <section className="bg-zinc-950 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Also Serving Nearby Communities
        </h2>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          {nearbyCities.map((city, index) => (
            <span key={city.slug} className="flex items-center">
              <Link
                to={`/${serviceType}/${city.slug}`}
                className="text-zinc-300 hover:text-red-600 transition-colors font-medium"
              >
                {city.name}
              </Link>
              {index < nearbyCities.length - 1 && (
                <span className="text-zinc-600 ml-3">•</span>
              )}
            </span>
          ))}
        </div>

        <div>
          <Link
            to="/locations/service-areas"
            className="inline-flex items-center text-red-600 hover:text-red-500 font-semibold transition-colors"
          >
            View all service areas
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
