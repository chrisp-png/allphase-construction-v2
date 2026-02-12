import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
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
      </div>
    </section>
  );
}
