import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sheetSitemap } from '../data/sheetSitemap';

export default function ServiceAreasIndexPage() {
  useEffect(() => {
    document.title = 'Service Areas | Roofing Services';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View all cities and service areas we serve.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'View all cities and service areas we serve.';
      document.head.appendChild(meta);
    }
  }, []);

  const serviceAreas = sheetSitemap.filter(entry =>
    (entry.section === 'Palm Beach County Cities' || entry.section === 'Broward County Cities') &&
    entry.indexable &&
    !entry.path.includes('/top-5-roofer')
  ).sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Service Areas
        </h1>

        {serviceAreas.length === 0 ? (
          <p className="text-gray-400">No service areas available at this time.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h2 className="text-xl font-semibold text-white mb-2">
                  {area.label}
                </h2>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
