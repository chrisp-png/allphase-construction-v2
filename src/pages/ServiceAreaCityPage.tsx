import { useParams, Link } from 'react-router-dom';
import { sheetSitemap, SitemapEntry } from '../data/sheetSitemap';
import NoIndexMeta from '../components/NoIndexMeta';

export default function ServiceAreaCityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();

  let cityEntry: SitemapEntry | undefined;

  if (citySlug) {
    cityEntry = sheetSitemap.find(
      entry => entry.path === `/roofing-contractor-${citySlug}-fl`
    );

    if (!cityEntry) {
      cityEntry = sheetSitemap.find(
        entry => entry.label.toLowerCase().replace(/\s+/g, '-') === citySlug
      );
    }
  }

  if (!cityEntry) {
    return (
      <>
        <NoIndexMeta />
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Service Area Not Found
              </h1>
              <Link
                to="/service-areas"
                className="inline-block text-[#C5A572] hover:text-[#B08D5B] transition-colors"
              >
                ← Back to Service Areas
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {!cityEntry.indexable && <NoIndexMeta />}

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Roofing Contractor in {cityEntry.label}
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Professional roofing services in {cityEntry.label}, Florida.
            We provide expert roof installation, repair, and inspection services
            for residential and commercial properties throughout South Florida.
          </p>

          <Link
            to="/service-areas"
            className="inline-block text-[#C5A572] hover:text-[#B08D5B] transition-colors"
          >
            ← Back to Service Areas
          </Link>
        </div>
      </div>
    </>
  );
}
