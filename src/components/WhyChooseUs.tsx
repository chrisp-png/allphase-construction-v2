import { Award, Users, FileCheck, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Licensed Roofing Specialists',
    description: 'Dual-Licensed Roofing Contractor (CCC1331464) with General Contractor Certification (CGC1526236). We handle your entire roofing project directly — one point of contact, streamlined permitting, and zero subcontractor handoffs.',
  },
  {
    icon: Users,
    title: 'Specialized Roofing Crews',
    description: 'System-specific roofing specialists, not general labor teams. Each crew installs only their roofing system — tile, metal, shingle, or flat — ensuring material-specific expertise, consistent workmanship, improved inspection outcomes, and superior long-term roof performance.',
  },
  {
    icon: FileCheck,
    title: 'In-House Roofing Permits',
    description: 'Roofing permits and inspections handled internally for faster project timelines and first-pass accuracy. One point of contact from roofing contract to final inspection. We coordinate directly with local inspectors and permitting offices across Broward and Palm Beach County.',
  },
  {
    icon: DollarSign,
    title: 'Wind Mitigation Savings',
    description: 'Code-compliant roofing systems engineered to meet South Florida wind and hurricane requirements. Our installation methods and materials qualify for maximum wind mitigation credits, reducing homeowner insurance premiums through improved inspections and installations that exceed local codes.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-red-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose All Phase Construction?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-6 border-l-4 border-red-600"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-lg flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
