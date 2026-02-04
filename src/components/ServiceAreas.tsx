import { MapPin } from 'lucide-react';

const browardCities = [
  'Fort Lauderdale', 'Hollywood', 'Pembroke Pines', 'Miramar', 'Coral Springs',
  'Pompano Beach', 'Davie', 'Plantation', 'Sunrise', 'Deerfield Beach',
  'Lauderhill', 'Weston', 'Tamarac', 'Margate', 'Coconut Creek',
  'North Lauderdale', 'Lauderdale Lakes', 'Oakland Park', 'Wilton Manors', 'Hallandale Beach',
  'Parkland', 'Cooper City', 'Lighthouse Point', 'Dania Beach', 'Southwest Ranches',
  'Hillsboro Beach', 'Lauderdale-by-the-Sea', 'Sea Ranch Lakes', 'Lazy Lake', 'Hillsboro Pines'
];

const palmBeachCities = [
  'West Palm Beach', 'Boca Raton', 'Boynton Beach', 'Delray Beach', 'Palm Beach Gardens',
  'Jupiter', 'Wellington', 'Royal Palm Beach', 'Lake Worth Beach', 'Greenacres',
  'Palm Beach', 'Riviera Beach', 'North Palm Beach', 'Palm Springs', 'Lantana',
  'Lake Park', 'Mangonia Park', 'Tequesta', 'Juno Beach', 'Palm Beach Shores',
  'Glen Ridge', 'Hypoluxo', 'Manalapan', 'Ocean Ridge', 'Briny Breezes',
  'Gulf Stream', 'Highland Beach', 'South Palm Beach', 'Loxahatchee', 'Pahokee', 'Belle Glade'
];

export default function ServiceAreas() {
  const formatCityUrl = (city: string) => {
    return `/${city.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-8 h-8 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Proudly Serving All of Broward & Palm Beach Counties
            </h2>
          </div>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
            We are based in Broward County and actively serve residential and commercial clients throughout Broward and Palm Beach County communities.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional roofing services throughout South Florida. No matter where you are in Broward or Palm Beach County, we're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-600 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Broward County</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {browardCities.map((city) => (
                <a
                  key={city}
                  href={formatCityUrl(city)}
                  className="text-gray-300 hover:text-red-600 transition-colors text-sm py-1 hover:translate-x-1 transform duration-200 flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                  {city}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-600 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Palm Beach County</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {palmBeachCities.map((city) => (
                <a
                  key={city}
                  href={formatCityUrl(city)}
                  className="text-gray-300 hover:text-red-600 transition-colors text-sm py-1 hover:translate-x-1 transform duration-200 flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                  {city}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800 border border-red-600 rounded-lg p-6 inline-block">
            <p className="text-gray-300 mb-4">
              Don't see your city listed? We serve the entire South Florida region!
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
