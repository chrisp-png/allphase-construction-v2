import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, MessageSquare } from 'lucide-react';
import EmbeddedRoofCalculator from '../components/EmbeddedRoofCalculator';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';

export default function BoyntonBeachPage() {
  useEffect(() => {
    document.title = 'Boynton Beach Roofer | HVHZ Certified | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Boynton Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Boynton Beach FL roofing contractor. HVHZ certified. Tile, metal, shingle systems. Free inspections. (754) 227-5605';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Boynton Beach, roofer Boynton Beach FL, roof replacement Boynton Beach, Boynton Beach roofing company, metal roof Boynton Beach');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Boynton Beach, roofer Boynton Beach FL, roof replacement Boynton Beach, Boynton Beach roofing company, metal roof Boynton Beach';
      document.head.appendChild(meta);
    }

    // Get city coordinates for local search
    const coordinates = getCityCoordinates('Boynton Beach');

    // LocalBusiness Schema - Critical for "roofer near me" searches
    const localBusinessSchema = generateLocalBusinessSchema({
      cityName: 'Boynton Beach',
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
      { name: 'Boynton Beach', url: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area/boynton-beach' }
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
    { factor: 'Aging tile systems', impact: 'Older homes often need underlayment replacement' },
    { factor: 'Coastal exposure', impact: 'Wind and moisture increase long-term wear' },
    { factor: 'Hurricane codes', impact: 'Installation quality is critical for compliance' },
    { factor: 'HOA standards', impact: 'Materials and aesthetics are often regulated' },
    { factor: 'Roofing trends', impact: 'Increasing demand for metal roofing systems' }
  ];

  return (
    <div className="min-h-screen bg-[#09090b]">
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
            <span className="text-white">Boynton Beach</span>
          </nav>

          <div className="max-w-5xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Roofing Services in Boynton Beach, FL
            </h1>
            <p className="text-xl text-zinc-400 mb-8 font-medium">
              Serviced by All Phase Construction USA — Based in Deerfield Beach
            </p>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Roofing Conditions Unique to Boynton Beach
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                While our main office is located in Deerfield Beach, our licensed roofing crews regularly service homes and commercial properties throughout Boynton Beach and nearby communities. Boynton Beach has a mix of older coastal neighborhoods and newer inland developments, which means roofing systems here vary widely in age, material, and installation quality. From aging tile underlayment to newer code requirements, local conditions play a major role in roof performance.
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">
                Roofing Factors in Boynton Beach
              </h3>
              <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left px-6 py-4 text-white font-semibold">Local Factor</th>
                      <th className="text-left px-6 py-4 text-white font-semibold">Impact on Boynton Beach Roofs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {localFactors.map((item, index) => (
                      <tr key={index} className="border-b border-zinc-800 last:border-0">
                        <td className="px-6 py-4 text-zinc-300">{item.factor}</td>
                        <td className="px-6 py-4 text-zinc-400">{item.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border border-red-600/20 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Team Insight – Boynton Beach Roofing</h3>
                    <p className="text-zinc-300 leading-relaxed mb-3">
                      "Boynton Beach has really been up and coming, and we're seeing a lot of homes being upgraded in the area. It used to be a mix of shingle and tile roofs, but now we're seeing more and more metal roofs being installed every day in Boynton Beach."
                    </p>
                    <p className="text-sm text-zinc-400">
                      — Chris, All Phase Construction
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Get Your Free Roof Inspection in Boynton Beach
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                Contact All Phase Construction today to schedule your inspection and discuss your roofing options.
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

          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Considering upgrading your roof?
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Many homeowners are surprised how affordable a higher-quality roof can be when monthly payment options are available. Use our financing calculator to see how small the monthly difference can be when upgrading to tile or metal roofing.
              </p>
              <Link
                to="/easy-payments"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                View Financing Options
              </Link>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Why Roofing Financing Matters
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Not all roofing companies are able to offer financing. To provide payment options, contractors must meet strict financial and operational requirements set by lending institutions. When a roofing company offers financing, it means the bank has already completed due diligence — helping protect homeowners while making roof upgrades more accessible.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                If you haven't yet estimated your roof cost, start with our roof cost calculator to get a baseline before exploring payment options.
              </p>
              <Link
                to="/calculator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 border border-zinc-700"
              >
                Use Roof Cost Calculator
              </Link>
            </div>
          </div>

          <EmbeddedRoofCalculator
            city="Boynton Beach"
            county="Palm Beach"
            isHVHZ={false}
          />
        </div>
      </div>
    </div>
  );
}
