import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Phone, Clock, Shield, Award, ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';
import cities from '../../data/cities.json';
import { isCityIndexable } from '../../config/indexableCities';

export default function GenericLocationTemplate() {
  const { city: citySlug } = useParams<{ city: string }>();

  const cityData = cities.find(c => c.slug === citySlug);
  const cityName = cityData?.city || citySlug;
  const county = cityData?.county || 'South Florida';

  // Check if this city should be indexed
  const isIndexable = citySlug ? isCityIndexable(citySlug) : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": `All Phase Construction USA - ${cityName}`,
    "image": "https://allphaseconstructionfl.com/image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2311 SW 2nd St",
      "addressLocality": "Deerfield Beach",
      "addressRegion": "FL",
      "postalCode": "33442",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.3184,
      "longitude": -80.0998
    },
    "telephone": "+1-754-227-5605",
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedIn": {
        "@type": "State",
        "name": "Florida"
      }
    },
    "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-16:00"
  };

  return (
    <>
      <SEO
        title={`${cityName} Roofing Contractor | Licensed Roofing Services`}
        description={`Professional roofing services in ${cityName}, FL. Licensed ${county} contractor specializing in residential & commercial roofing. Free inspection: (754) 227-5605.`}
        schema={localBusinessSchema}
        noindex={!isIndexable}
      />
      <div className="bg-zinc-950 text-white min-h-screen">
        <Header />

        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pt-44 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8">
                <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/locations" className="hover:text-red-600 transition-colors">Service Areas</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">{cityName}</span>
              </nav>

              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-red-600" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {cityName} Roofing Contractor
                </h1>
              </div>

              <div className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed space-y-4">
                <p>
                  All Phase Construction USA serves {cityName} with comprehensive residential and commercial roofing services. Licensed in both Broward and Palm Beach counties, we specialize in tile, shingle, metal, and flat roofing systems designed for South Florida's climate challenges.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center text-lg shadow-lg shadow-red-600/20"
                >
                  Get Free Inspection
                </a>
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-center text-lg"
                >
                  (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Roofing Services in {cityName}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                to={`/roof-repair/${citySlug}`}
                className="bg-black border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Roof Repair</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Expert repair services for tile, shingle, metal, and flat roofing systems in {cityName}.
                </p>
              </Link>

              <Link
                to={`/roof-inspection/${citySlug}`}
                className="bg-black border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Roof Inspection</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Comprehensive diagnostic inspections for residential and commercial properties.
                </p>
              </Link>

              <Link
                to="/residential-roofing"
                className="bg-black border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">New Roof Installation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Complete roof replacement with high-wind rated materials for Florida homes.
                </p>
              </Link>

              <Link
                to="/tile-roofing"
                className="bg-black border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tile Roofing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Concrete and clay tile installation, repair, and maintenance services.
                </p>
              </Link>

              <Link
                to="/flat-roofing"
                className="bg-black border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Flat Roofing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  TPO, modified bitumen, and built-up roofing for commercial properties.
                </p>
              </Link>

              <Link
                to="/commercial-roofing"
                className="bg-black border border-zinc-800 rounded-xl p-8 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Commercial Roofing</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Large-scale commercial roofing projects with minimal business disruption.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Why Choose All Phase Construction USA
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Dual-County Licensing</h3>
                    <p className="text-zinc-300 text-lg leading-relaxed">
                      Licensed and insured in both Broward and Palm Beach counties, ensuring compliance with all local building codes and regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Hurricane-Rated Installations</h3>
                    <p className="text-zinc-300 text-lg leading-relaxed">
                      All roofing systems meet Florida's High Velocity Hurricane Zone requirements with proper wind uplift ratings and installation standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Comprehensive Warranties</h3>
                    <p className="text-zinc-300 text-lg leading-relaxed">
                      We provide both manufacturer warranties on materials and workmanship warranties on our installation, giving you complete peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Direct Communication</h3>
                    <p className="text-zinc-300 text-lg leading-relaxed">
                      Work directly with licensed professionals throughout your project. No subcontractors, no middlemen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Serving {cityName} & Surrounding Areas
              </h2>
              <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
                Based in Deerfield Beach, we provide roofing services throughout {county}. Our local presence means faster response times and familiarity with regional building requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center text-lg shadow-lg shadow-red-600/20"
                >
                  Schedule Free Inspection
                </a>
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-center text-lg"
                >
                  (754) 227-5605
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </section>
      </div>
    </>
  );
}
