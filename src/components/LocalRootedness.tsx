import { MapPin } from 'lucide-react';

export default function LocalRootedness() {
  return (
    <section className="py-16 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-7 h-7 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Rooted in South Florida. Built for Its Conditions.
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            All Phase Construction USA is a roofing contractor headquartered in Deerfield Beach, Florida, serving residential and commercial properties throughout Broward and Palm Beach Counties.
          </p>
          <p>
            Our roofing teams specialize in South Florida's demanding climate—high wind zones, coastal exposure, strict roofing permitting requirements, and hurricane-driven code compliance. This local roofing experience allows us to navigate roofing inspections, approvals, and building code standards efficiently while delivering climate-specific roofing systems engineered for long-term performance.
          </p>
        </div>
      </div>
    </section>
  );
}
