import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, MessageSquare } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function DelrayBeachPage() {
  useEffect(() => {
    document.title = 'Delray Beach Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Delray Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Delray Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Delray Beach, roofer Delray Beach FL, tile roof Delray Beach, roof replacement Delray Beach, Delray Beach roofing company');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Delray Beach, roofer Delray Beach FL, tile roof Delray Beach, roof replacement Delray Beach, Delray Beach roofing company';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Delray Beach');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Delray Beach',
      stateName: 'Florida',
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '150'
      }
    });

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://allphaseconstructionfl.com' },
      { name: 'Deerfield Beach Hub', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach' },
      { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area' },
      { name: 'Delray Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/delray-beach' }
    ]);

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add all schemas
    const schemas = [localBusinessSchema, breadcrumbSchema];
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      schemaScripts.forEach(script => script.remove());
    };
  }, []);

  const localFactors = [
    { factor: 'Tile roof popularity', reason: 'Matches coastal and Mediterranean-style homes' },
    { factor: 'Salt air exposure', reason: 'Requires proper installation and underlayment' },
    { factor: 'HOA requirements', reason: 'Material and color consistency enforced' },
    { factor: 'Storm resistance', reason: 'Tile performs well in high-wind conditions' },
    { factor: 'Aging underlayment', reason: 'Common issue beneath existing tile roofs' }
  ];

  const whyChooseUs = [
    'Dual-licensed roofing contractor',
    'Extensive tile roofing experience',
    'Familiar with Delray Beach HOA requirements',
    'Serving Palm Beach County'
  ];

  return (
    <><div className="min-h-screen bg-[#09090b]">
      <div className="pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-zinc-400 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/locations/deerfield-beach" className="text-zinc-400 hover:text-red-600 transition-colors">
              Deerfield Beach
            </Link>
            <span className="text-zinc-600">/</span>
            <Link to="/service-areas" className="text-zinc-400 hover:text-red-600 transition-colors">
              Service Areas
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Delray Beach</span>
          </nav>

          <div className="max-w-5xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Roofing Services in Delray Beach, FL
            </h1>
            <p className="text-xl text-zinc-400 mb-8 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-zinc-300 leading-relaxed">
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Delray Beach and nearby communities. Delray Beach homes commonly feature tile roofing to maintain a clean coastal look while withstanding South Florida's heat, wind, and seasonal storms. Many neighborhoods and HOAs favor tile for its durability and long-term appearance. All Phase Construction provides professional roofing services in Delray Beach with extensive experience in tile roof systems found throughout the area.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Tile Roofing in Delray Beach – Local Factors
              </h2>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left px-6 py-4 text-white font-semibold">Roofing Factor</th>
                      <th className="text-left px-6 py-4 text-white font-semibold">Why It Matters in Delray Beach</th>
                    </tr>
                  </thead>
                  <tbody>
                    {localFactors.map((item, index) => (
                      <tr key={index} className="border-b border-zinc-800 last:border-0">
                        <td className="px-6 py-4 text-zinc-300">{item.factor}</td>
                        <td className="px-6 py-4 text-zinc-400">{item.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing Services Available in Delray Beach
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We provide complete roofing services for Delray Beach homeowners, including:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Tile roof repair and replacement</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Roof inspections for insurance and real estate</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Shingle and metal roofing services</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Emergency roof repair</span>
                </li>
              </ul>
              <p className="text-zinc-400 mb-4">Explore our services:</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/roofing-services/roof-repair"
                  className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 border border-zinc-700"
                >
                  Roof Repair
                </Link>
                <Link
                  to="/residential-roofing"
                  className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 border border-zinc-700"
                >
                  Roof Replacement
                </Link>
                <Link
                  to="/roof-inspection"
                  className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 border border-zinc-700"
                >
                  Roof Inspection
                </Link>
                <Link
                  to="/tile-roofing"
                  className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 border border-zinc-700"
                >
                  Tile Roofing
                </Link>
              </div>
            </div>

            <div className="mb-16">
              <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border border-red-600/20 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Team Insight – Delray Beach Roofing</h3>
                    <p className="text-zinc-300 leading-relaxed mb-3">
                      "Delray Beach has really changed over the years. The east side has transformed over the last 15 years, and the city has expanded further west with beautiful communities. It's always a pleasure working in Delray Beach."
                    </p>
                    <p className="text-sm text-zinc-400">
                      — Charly, Field Supervisor, All Phase Construction
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Homeowners in Delray Beach Choose All Phase Construction
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-[#27272a] border border-zinc-800 rounded-lg p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                If you're looking for a reliable roofing contractor in Delray Beach
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                Contact All Phase Construction today to schedule a free roof inspection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg"
                >
                  Schedule Free Inspection
                </Link>
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2 border border-zinc-700"
                >
                  <Phone className="w-5 h-5" />
                  (754) 227-5605
                </a>
              </div>
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Delray Beach"
            county="Palm Beach"
            isHVHZ={false}
          />
        </div>
      </div>
    </div>
    </>
  );
}
