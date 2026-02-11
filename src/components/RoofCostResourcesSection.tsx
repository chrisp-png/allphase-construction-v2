import { Link } from 'react-router-dom';
import { Calculator, BookOpen } from 'lucide-react';

export default function RoofCostResourcesSection() {
  return (
    <section className="py-12 px-4 bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Understanding Roof Costs in South Florida
        </h2>

        <p className="text-lg text-zinc-300 leading-relaxed mb-8">
          While online tools can provide a general price range, understanding what drives roof costs in South Florida is critical. Our Roof Cost Calculator offers a starting point, and our Pricing Guide explains how materials, codes, and installation quality affect final pricing.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Calculator Link */}
          <Link
            to="/calculator"
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                <Calculator className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
                  Roof Cost Calculator
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Get a preliminary estimate based on your roof size, material choice, and location. Provides instant ballpark pricing to help with budget planning.
                </p>
              </div>
            </div>
          </Link>

          {/* Pricing Guide Link */}
          <Link
            to="/pricing-guide"
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                <BookOpen className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
                  Pricing Guide
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Learn what factors influence roof replacement costs in South Florida's HVHZ, from material differences to code requirements and insurance savings.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-6 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
          <p className="text-sm text-zinc-400 text-center">
            These tools provide educational context, but every roof is unique. A professional inspection is the only way to determine accurate project scope and pricing for your specific property.
          </p>
        </div>
      </div>
    </section>
  );
}
