import { Award, Users, Clock, Shield } from 'lucide-react';

const stats = [
  { icon: Award, value: '25+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Projects Completed' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
  { icon: Shield, value: '100%', label: 'Licensed & Insured' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About All Phase Construction
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Your Trusted Construction Partner Across America
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              For over 25 years, All Phase Construction USA has been at the forefront of delivering exceptional construction services. We specialize in commercial, residential, and industrial projects of all sizes.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our commitment to quality, safety, and customer satisfaction has made us one of the most trusted names in the construction industry. We don't just build structures; we build lasting relationships.
            </p>
            <p className="text-lg text-gray-700">
              From initial planning to final inspection, our experienced team ensures every project is completed on time, within budget, and to the highest standards of excellence.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-center p-8">
                <Award className="w-24 h-24 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Excellence in Construction</h4>
                <p className="text-lg">Award-Winning Quality Since 1999</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-50 rounded-xl hover:bg-amber-50 transition-colors duration-300"
            >
              <stat.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
