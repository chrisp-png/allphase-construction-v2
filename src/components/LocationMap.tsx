import { MapPin, Phone, Building2 } from 'lucide-react';

export default function LocationMap() {
  return (
    <section className="py-20 px-6 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-600/20">
            <MapPin className="w-4 h-4" />
            Our Location
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
              Visit Our Deerfield Beach Office
            </span>
          </h2>

          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Proudly serving Broward & Palm Beach Counties from our headquarters at 590 Goolsby Blvd.
          </p>
        </div>

        {/* Two-Column Office Photo + Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Left Column - Office Photo */}
          <div className="bg-[#27272a] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
              <img
                src="/deerfield-beach-all-phase-construction-office-building.JPG"
                alt="All Phase Construction USA office building in Deerfield Beach, Florida"
                className="absolute top-0 left-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column - Map Embed */}
          <div className="bg-[#27272a] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.3071856042744!2d-80.12733492403144!3d26.310785577038298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91d982b569be1%3A0xc298661959b65cbf!2sAll%20Phase%20Construction%20USA%2C%20LLC!5e0!3m2!1sen!2sus!4v1738436000000!5m2!1sen!2sus"
                width="600"
                height="450"
                className="absolute top-0 left-0 w-full h-full border-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="All Phase Construction USA, LLC Location Map"
              />
            </div>
          </div>
        </div>

        {/* Business Address and Contact Information */}
        <div className="bg-[#27272a] border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
              <Building2 className="w-7 h-7 text-red-500" />
              All Phase Construction USA, LLC
            </h3>
            <p className="text-zinc-400 mb-4">
              Dual-Licensed General Contractor & Roofing Contractor
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-red-600/10 text-red-500 rounded-lg text-sm font-semibold border border-red-600/20">
                CGC-1526236
              </span>
              <span className="px-3 py-1 bg-red-600/10 text-red-500 rounded-lg text-sm font-semibold border border-red-600/20">
                CCC-1331464
              </span>
            </div>
          </div>

          <div className="p-8 bg-[#1a1a1d]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  Business Address
                </h4>
                <p className="text-white font-semibold mb-1">All Phase Construction USA, LLC</p>
                <p className="text-zinc-300">590 Goolsby Blvd</p>
                <p className="text-zinc-300">Deerfield Beach, FL 33442</p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-500" />
                  Contact Information
                </h4>
                <a
                  href="tel:+17542275605"
                  className="text-white hover:text-red-400 transition-colors font-semibold text-xl block mb-2"
                >
                  (754) 227-5605
                </a>
                <p className="text-zinc-400 text-sm">Same-day inspections available</p>
                <p className="text-zinc-400 text-sm">Serving Broward & Palm Beach Counties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
