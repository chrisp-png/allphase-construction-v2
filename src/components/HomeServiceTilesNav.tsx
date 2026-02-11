import { Search, Wrench, Home, Building2, Shield } from 'lucide-react';

const services = [
  {
    title: 'Roof Inspection',
    subtitle: 'Learn more',
    icon: Search,
    href: 'https://allphaseconstructionfl.com/roof-inspection',
  },
  {
    title: 'Roof Repair',
    subtitle: 'Explore',
    icon: Wrench,
    href: 'https://allphaseconstructionfl.com/roof-repair',
  },
  {
    title: 'Roof Replacement',
    subtitle: 'Learn more',
    icon: Home,
    href: 'https://allphaseconstructionfl.com/residential-roofing',
  },
  {
    title: 'Commercial Roofing',
    subtitle: 'Explore',
    icon: Building2,
    href: 'https://allphaseconstructionfl.com/commercial-roofing',
  },
  {
    title: 'Maintenance Programs',
    subtitle: 'Learn more',
    icon: Shield,
    href: 'https://allphaseconstructionfl.com/roof-maintenance-programs',
  },
];

export default function HomeServiceTilesNav() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
      {services.map((service) => {
        const IconComponent = service.icon;
        return (
          <a
            key={service.title}
            href={service.href}
            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 lg:from-gray-800/90 lg:to-gray-900/90 backdrop-blur-sm border border-gray-700 lg:border-gray-700/50 rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-2xl hover:shadow-red-900/20 hover:-translate-y-2 hover:border-red-600/50 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 min-h-[120px]"
          >
            {/* Red glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-red-600/0 group-hover:bg-red-600/5 transition-colors duration-300"></div>

            {/* Content */}
            <div className="relative flex flex-col items-start gap-3">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 bg-gray-700 lg:bg-gray-700/50 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                <IconComponent className="w-5 h-5 text-gray-200 lg:text-gray-300 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" />
              </div>

              {/* Text */}
              <div className="flex flex-col items-start">
                <h3 className="text-base font-semibold text-white group-hover:text-white transition-colors leading-tight">
                  {service.title}
                </h3>
                <span className="text-xs text-gray-300 lg:text-gray-400 group-hover:text-red-400 transition-colors mt-0.5">
                  {service.subtitle}
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
