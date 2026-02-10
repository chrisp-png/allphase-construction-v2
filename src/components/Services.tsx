import { Home, Building2, Grid3x3, Shield, Layers, Square, ArrowRight } from 'lucide-react';
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
    <section id="services" className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Premium Background Treatment */}
      <div className="absolute inset-0 bg-gradient-radial from-red-950/10 via-transparent to-transparent opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/5 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Roofing Services
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Comprehensive roofing solutions for residential and commercial properties in Boca Raton, Deerfield Beach, Pompano Beach, Fort Lauderdale, Coral Springs, Delray Beach, Boynton Beach, West Palm Beach, and throughout Broward and Palm Beach Counties.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mt-4">
            All services are performed by licensed roofing professionals experienced in South Florida building codes and hurricane requirements.
          </p>
          {/* Helper Microcopy */}
          <p className="text-gray-500 text-sm mt-6 max-w-2xl mx-auto">
            Select a service to view details and pricing guidance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              className="group relative flex flex-col cursor-pointer bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-900/80 rounded-2xl p-8 border border-neutral-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-2 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] overflow-hidden"
            >
              {/* Subtle Shimmer Effect on Hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500/50 transition-all duration-500"></div>

              {/* Icon Container with Glow */}
              <div className="flex items-center justify-center w-16 h-16 bg-neutral-800/50 backdrop-blur-sm rounded-xl mb-6 border border-neutral-700/30 group-hover:bg-red-600 group-hover:border-red-500 group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all duration-300">
                <service.icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-50 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Bottom Affordance: "Explore →" */}
              <div className="flex items-center justify-end gap-1.5 text-sm font-medium text-gray-500 group-hover:text-red-500 transition-colors pt-4 border-t border-neutral-800/50 group-hover:border-red-900/30">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
