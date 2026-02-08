import { Shield, Award, UserCheck } from 'lucide-react';

export default function OurEdge() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Edge
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What sets us apart from standard roofing contractors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-[#C5A572] transition-colors">
            <div className="flex justify-center mb-6">
              <div className="bg-[#C5A572]/10 rounded-full p-4">
                <Shield className="w-12 h-12 text-[#C5A572]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Dual-Licensed (CCC & CGC)
            </h3>
            <p className="text-gray-300 leading-relaxed text-center">
              We bring structural engineering oversight to every roof, ensuring your home is protected from the ground up. Our dual licensing means comprehensive expertise beyond what standard roofers can provide.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-[#C5A572] transition-colors">
            <div className="flex justify-center mb-6">
              <div className="bg-[#C5A572]/10 rounded-full p-4">
                <Award className="w-12 h-12 text-[#C5A572]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              HVHZ Certified
            </h3>
            <p className="text-gray-300 leading-relaxed text-center">
              Specializing in High-Velocity Hurricane Zone compliance to meet the strictest Florida building codes. Every installation meets or exceeds wind rating requirements for maximum protection.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-[#C5A572] transition-colors">
            <div className="flex justify-center mb-6">
              <div className="bg-[#C5A572]/10 rounded-full p-4">
                <UserCheck className="w-12 h-12 text-[#C5A572]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Owner-Operator Lead
            </h3>
            <p className="text-gray-300 leading-relaxed text-center">
              Every project is managed directly by the contractor, providing a level of accountability and precision standard roofers can't match. No sales teams—just direct access to expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
