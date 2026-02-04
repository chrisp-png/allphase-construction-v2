import { Building2, Home, Factory, ShoppingBag } from 'lucide-react';

const projects = [
  {
    icon: Building2,
    title: 'Downtown Tech Center',
    category: 'Commercial',
    location: 'San Francisco, CA',
    description: '250,000 sq ft state-of-the-art office complex',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Home,
    title: 'Riverside Estates',
    category: 'Residential',
    location: 'Austin, TX',
    description: '45-home luxury residential development',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Factory,
    title: 'Manufacturing Hub',
    category: 'Industrial',
    location: 'Detroit, MI',
    description: '500,000 sq ft advanced manufacturing facility',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: ShoppingBag,
    title: 'Metro Shopping Plaza',
    category: 'Retail',
    location: 'Miami, FL',
    description: 'Modern mixed-use retail and entertainment complex',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Building2,
    title: 'Healthcare Center',
    category: 'Medical',
    location: 'Seattle, WA',
    description: '180,000 sq ft medical facility with advanced infrastructure',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Home,
    title: 'Historic Renovation',
    category: 'Renovation',
    location: 'Boston, MA',
    description: 'Restoration of 1920s landmark building',
    color: 'from-slate-500 to-gray-600',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to excellence across diverse construction projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>

              <div className="relative p-8 h-80 flex flex-col justify-between text-white">
                <div>
                  <project.icon className="w-12 h-12 mb-4" />
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm mb-4">{project.location}</p>
                </div>
                <p className="text-lg font-medium">{project.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Over 500 successful projects completed nationwide
          </p>
          <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
