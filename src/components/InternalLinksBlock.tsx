import { Link } from 'react-router-dom';
import { Wrench, Home, FileSearch, MapPin } from 'lucide-react';

interface InternalLink {
  label: string;
  path: string;
  description?: string;
}

interface InternalLinksBlockProps {
  title?: string;
  currentCity?: string;
  showCoreServices?: boolean;
  showNearbyCities?: boolean;
  nearbyCities?: InternalLink[];
  additionalLinks?: InternalLink[];
}

/**
 * Internal linking component for SEO
 * Provides crawlable links to important pages from every city/service page
 */
export default function InternalLinksBlock({
  title = 'Related Services & Areas',
  currentCity,
  showCoreServices = true,
  showNearbyCities = true,
  nearbyCities = [],
  additionalLinks = []
}: InternalLinksBlockProps) {
  // Core roofing services - always show these
  const coreServices: InternalLink[] = showCoreServices ? [
    {
      label: 'Roof Repair Services',
      path: '/roof-repair',
      description: 'Expert roof repair throughout South Florida'
    },
    {
      label: 'Residential Roofing',
      path: '/residential-roofing',
      description: 'Complete residential roof replacement'
    },
    {
      label: 'Roof Inspection',
      path: '/roof-inspection',
      description: 'Professional roof inspection services'
    },
    {
      label: 'Commercial Roofing',
      path: '/commercial-roofing',
      description: 'Commercial roofing solutions'
    }
  ] : [];

  // Major cities - show if no specific nearby cities provided
  const majorCities: InternalLink[] = showNearbyCities && nearbyCities.length === 0 ? [
    { label: 'Fort Lauderdale', path: '/locations/fort-lauderdale' },
    { label: 'Boca Raton', path: '/locations/boca-raton' },
    { label: 'West Palm Beach', path: '/locations/west-palm-beach' },
    { label: 'Pompano Beach', path: '/locations/pompano-beach' },
    { label: 'Coral Springs', path: '/locations/coral-springs' },
    { label: 'Delray Beach', path: '/locations/delray-beach' }
  ] : [];

  const allLinks = [
    ...coreServices,
    ...nearbyCities,
    ...majorCities,
    ...additionalLinks
  ];

  if (allLinks.length === 0) return null;

  return (
    <section className="bg-gray-800/30 rounded-xl p-8 border border-gray-700 my-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <MapPin className="w-6 h-6 text-red-600" />
        {title}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="group flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-200 hover:shadow-lg hover:shadow-red-600/10"
          >
            <div className="flex-shrink-0 mt-0.5">
              {link.path.includes('/roofing-services/') || link.path.includes('repair') || link.path.includes('residential') || link.path.includes('commercial') || link.path.includes('inspection') ? (
                <Wrench className="w-5 h-5 text-red-600" />
              ) : link.path.includes('/locations/') ? (
                <MapPin className="w-5 h-5 text-red-600" />
              ) : (
                <FileSearch className="w-5 h-5 text-red-600" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white group-hover:text-red-600 transition-colors">
                {link.label}
              </h3>
              {link.description && (
                <p className="text-sm text-gray-400 mt-1">
                  {link.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {currentCity && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Serving {currentCity} and surrounding communities with professional roofing services.
            <Link to="/contact" className="text-red-600 hover:text-red-500 ml-1">
              Contact us for a free estimate →
            </Link>
          </p>
        </div>
      )}
    </section>
  );
}
