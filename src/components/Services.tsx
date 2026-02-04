import { Home, Building2, Grid3x3, Shield, Layers, Square } from 'lucide-react';
import { useEffect } from 'react';

const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roof replacement and roof repair for single-family homes, townhomes, and condos. All roof types including tile, metal, shingle, and flat.',
    link: '/residential-roofing',
  },
  {
    icon: Layers,
    title: 'Shingle Roofing',
    description: 'Architectural and designer shingle roof installation and repair from top manufacturers. Impact-resistant options for maximum insurance savings.',
    link: '/shingle-roofing',
  },
  {
    icon: Grid3x3,
    title: 'Tile Roofing',
    description: 'Barrel tile, flat tile, and S-tile roof installation and repair. Hurricane-rated with foam adhesive attachment for HVHZ compliance.',
    link: '/tile-roofing',
  },
  {
    icon: Shield,
    title: 'Metal Roofing',
    description: 'Standing seam, corrugated, and metal tile roof installation. Energy-efficient, durable, and engineered to withstand Category 5 winds.',
    link: '/metal-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, PVC, modified bitumen, and built-up roofing systems for warehouses, retail centers, HOAs, and multi-family properties.',
    link: '/commercial-roofing',
  },
  {
    icon: Square,
    title: 'Flat Roofing',
    description: "TPO, PVC, modified bitumen, and built-up flat roof systems. Expert drainage solutions for South Florida's heavy rainfall.",
    link: '/flat-roofing',
  },
];

export default function Services() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'RoofingService',
      provider: {
        '@type': 'Organization',
        name: 'All Phase Construction USA',
        url: window.location.origin,
      },
      areaServed: [
        {
          '@type': 'Place',
          name: 'Broward County, Florida',
        },
        {
          '@type': 'Place',
          name: 'Palm Beach County, Florida',
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="services" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Roofing Services
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Comprehensive roofing solutions for residential and commercial properties in Boca Raton, Deerfield Beach, Pompano Beach, Fort Lauderdale, Coral Springs, Delray Beach, Boynton Beach, West Palm Beach, and throughout Broward and Palm Beach Counties.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mt-4">
            All services are performed by licensed roofing professionals experienced in South Florida building codes and hurricane requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-neutral-800 rounded-lg mb-4 group-hover:bg-red-600 transition-colors">
                <service.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
