import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin, Wrench } from 'lucide-react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 - Page Not Found | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'The page you are looking for could not be found. Return to our homepage or explore our roofing services and service areas.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'The page you are looking for could not be found. Return to our homepage or explore our roofing services and service areas.';
      document.head.appendChild(meta);
    }

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex, follow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, follow';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            to="/"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <Home className="w-12 h-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2">Home</h3>
            <p className="text-sm text-gray-600">
              Return to our homepage
            </p>
          </Link>

          <Link
            to="/locations/service-areas/"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2">Service Areas</h3>
            <p className="text-sm text-gray-600">
              Find your location
            </p>
          </Link>

          <Link
            to="/residential-roofing/"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <Wrench className="w-12 h-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2">Our Services</h3>
            <p className="text-sm text-gray-600">
              Explore roofing services
            </p>
          </Link>
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
          <p className="text-gray-700">
            <strong>Need help?</strong> Call us at{' '}
            <a href="tel:+19544006393" className="text-red-600 font-bold hover:underline">
              (954) 400-6393
            </a>{' '}
            or{' '}
            <Link to="/contact/" className="text-red-600 font-bold hover:underline">
              contact us online
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
