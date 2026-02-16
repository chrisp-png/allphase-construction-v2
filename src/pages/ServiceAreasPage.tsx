import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Shield, CloudRain, Home, ArrowRight, Wrench, Building2 } from 'lucide-react';
import { sheetSitemap } from '../data/sheetSitemap';

export default function ServiceAreasPage() {
  useEffect(() => {
    document.title = 'Service Areas Broward & Palm Beach | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Licensed roofing contractor serving Broward and Palm Beach Counties. 20+ years experience, 2,500+ projects. Tile, metal, shingle, flat roofing. Free inspections. HVHZ certified.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Licensed roofing contractor serving Broward and Palm Beach Counties. 20+ years experience, 2,500+ projects. Tile, metal, shingle, flat roofing. Free inspections. HVHZ certified.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'roofing contractor Broward County, roofing contractor Palm Beach County, roofer near me South Florida, roofing company Fort Lauderdale, roofing company Boca Raton, South Florida roofing services');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'roofing contractor Broward County, roofing contractor Palm Beach County, roofer near me South Florida, roofing company Fort Lauderdale, roofing company Boca Raton, South Florida roofing services';
      document.head.appendChild(meta);
    }
  }, []);

  const allCityEntries = sheetSitemap.filter(
    (entry) =>
      (entry.section === 'Palm Beach County Cities' || entry.section === 'Broward County Cities') &&
      entry.indexable === true &&
      !entry.path.includes('/top-5-roofer')
  );

  const browardCities = sheetSitemap
    .filter((entry) =>
      entry.section === 'Broward County Cities' &&
      entry.indexable === true &&
      !entry.path.includes('/top-5-roofer')
    )
    .sort((a, b) => a.label.localeCompare(b.label))
    .map((entry) => ({
      name: entry.label,
      path: entry.path,
    }));

  const palmBeachCities = sheetSitemap
    .filter((entry) =>
      entry.section === 'Palm Beach County Cities' &&
      entry.indexable === true &&
      !entry.path.includes('/top-5-roofer')
    )
    .sort((a, b) => a.label.localeCompare(b.label))
    .map((entry) => ({
      name: entry.label,
      path: entry.path,
    }));

  const featuredAreas = allCityEntries
    .sort((a, b) => a.label.localeCompare(b.label))
    .slice(0, 9)
    .map((entry) => ({
      city: entry.label,
      tagline: 'Service Area',
      county: entry.section.includes('Palm Beach') ? 'Palm Beach County' : 'Broward County',
      path: entry.path,
    }));

  const services = [
    { name: 'Tile Roofing', path: '/tile-roofing/', icon: Home },
    { name: 'Metal Roofing', path: '/metal-roofing/', icon: Shield },
    { name: 'Shingle Roofing', path: '/shingle-roofing/', icon: Home },
    { name: 'Flat Roofing', path: '/flat-roofing/', icon: Building2 },
    { name: 'Roof Repair & Restoration', path: '/roofing-services/roof-repair/', icon: Wrench },
    { name: 'Commercial Roofing', path: '/commercial-roofing/', icon: Building2 }
  ];

  const whyLocalReasons = [
    {
      title: 'We Know the Codes',
      description: "Broward County's HVHZ requirements are some of the strictest in the nation. We don't guess — we know exactly what's required for permits, inspections, and wind mitigation documentation.",
      icon: Shield
    },
    {
      title: 'We Know the Weather',
      description: "20+ years in South Florida means we understand what your roof faces: intense UV, salt air corrosion, afternoon deluges, and hurricane season. We build for this climate, not against it.",
      icon: CloudRain
    },
    {
      title: "We're Here When You Need Us",
      description: "Headquartered in Deerfield Beach, we're not a storm chaser operation. We're your neighbors. When a hurricane hits, we're here for the long haul — not gone in six months.",
      icon: MapPin
    }
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
            <span className="text-white">Service Areas</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto mb-16 pt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Roofing Contractor Serving{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Broward & Palm Beach Counties
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              From Fort Lauderdale to Boca Raton, Wellington to the coast — we've completed over 2,500 roofing projects across South Florida. Licensed, insured, and built for the High Velocity Hurricane Zone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
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

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Our Service Area</h2>
            <div className="bg-[#27272a] border border-zinc-800 rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916179.7850722387!2d-80.87687247343751!3d26.453830799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9034dce5d7755%3A0xd2e4657e2b13e56f!2sDeerfield%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="All Phase Construction USA Service Area Map"
              ></iframe>
            </div>
            <p className="text-zinc-400 text-center max-w-4xl mx-auto leading-relaxed">
              Headquartered in Deerfield Beach, we serve residential and commercial customers throughout Broward County and Palm Beach County. Our crews know the local building codes, HVHZ requirements, and what it takes to protect South Florida homes from hurricane season.
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4 border border-red-600/20">
                Where We Work Most
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Most Active Service Areas
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                These communities represent our highest concentration of completed projects. Click any city to learn about our services in your area.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAreas.map((area) => (
                <Link
                  key={area.city}
                  to={area.path}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-600 transition-colors">
                        {area.city}
                      </h3>
                      <p className="text-sm text-red-500 font-medium mb-2">{area.tagline}</p>
                      <p className="text-sm text-zinc-500">{area.county}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Broward County Service Areas
              </h2>
              <p className="text-zinc-400 max-w-4xl">
                All of Broward County falls within Florida's High Velocity Hurricane Zone (HVHZ), requiring stricter building codes and specialized installation methods. We're fully equipped for HVHZ compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {browardCities.map((city) => (
                <Link
                  key={city.name}
                  to={city.path}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg px-4 py-3 hover:border-red-600 hover:bg-zinc-800/50 transition-all duration-300 text-zinc-300 hover:text-red-500 flex items-center justify-between group"
                >
                  <span>{city.name}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Palm Beach County Service Areas
              </h2>
              <p className="text-zinc-400 max-w-4xl">
                Palm Beach County has different wind load requirements than Broward's HVHZ, but still demands quality installation to withstand hurricane season. We adjust our methods to meet local code requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {palmBeachCities.map((city) => (
                <Link
                  key={city.name}
                  to={city.path}
                  className="bg-[#27272a] border border-zinc-800 rounded-lg px-4 py-3 hover:border-red-600 hover:bg-zinc-800/50 transition-all duration-300 text-zinc-300 hover:text-red-500 flex items-center justify-between group"
                >
                  <span>{city.name}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Choose a Local South Florida Roofer?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyLocalReasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Roofing Services Available Throughout Our Service Area
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="bg-[#27272a] border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-red-600 transition-colors mb-1">
                        {service.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-600/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Talk to a Local Roofing Expert?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're in Boca Raton, Fort Lauderdale, or anywhere in between — we'll come to you. Schedule your free inspection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/"
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
      </div>
    </div>
  );
}
