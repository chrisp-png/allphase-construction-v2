import { Link } from 'react-router-dom';

export default function CommonServiceAreasTable() {
  const leftColumnCities = [
    { name: 'Deerfield Beach', slug: 'deerfield-beach' },
    { name: 'Coral Springs', slug: 'coral-springs' },
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
    { name: 'Margate', slug: 'margate' },
    { name: 'Lighthouse Point', slug: 'lighthouse-point' },
    { name: 'Delray Beach', slug: 'delray-beach' },
    { name: 'Lake Worth', slug: 'lake-worth' },
    { name: 'Sunrise', slug: 'sunrise' },
    { name: 'Tamarac', slug: 'tamarac' },
    { name: 'Oakland Park', slug: 'oakland-park' },
    { name: 'Coconut Creek', slug: 'coconut-creek' },
  ];

  const rightColumnCities = [
    { name: 'Boca Raton', slug: 'boca-raton' },
    { name: 'Pompano Beach', slug: 'pompano-beach' },
    { name: 'Coconut Creek', slug: 'coconut-creek' },
    { name: 'Parkland', slug: 'parkland' },
    { name: 'Hillsboro Beach', slug: 'hillsboro-beach' },
    { name: 'Boynton Beach', slug: 'boynton-beach' },
    { name: 'West Palm Beach', slug: 'west-palm-beach' },
    { name: 'Plantation', slug: 'plantation' },
    { name: 'Lauderhill', slug: 'lauderhill' },
    { name: 'Wilton Manors', slug: 'wilton-manors' },
    { name: 'Wellington', slug: 'wellington' },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Areas We Serve Most Commonly
        </h2>

        <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200 uppercase tracking-wider">
                    City / Community
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200 uppercase tracking-wider">
                    City / Community
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {leftColumnCities.map((leftCity, index) => {
                  const rightCity = rightColumnCities[index];
                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-800/50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <Link
                          to={`/locations/${leftCity.slug}`}
                          className="text-red-500 hover:text-red-400 hover:underline transition-colors font-medium"
                        >
                          {leftCity.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        {rightCity && (
                          <Link
                            to={`/locations/${rightCity.slug}`}
                            className="text-red-500 hover:text-red-400 hover:underline transition-colors font-medium"
                          >
                            {rightCity.name}
                          </Link>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Don't see your city listed? We serve many more communities across Broward and Palm Beach Counties.
          </p>
          <Link
            to="/locations/service-areas"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
          >
            View All Service Areas
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
