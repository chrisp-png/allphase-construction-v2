import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { useAssessmentModal } from '../context/AssessmentModalContext';

export default function OurLocationPage() {
  const { openModal } = useAssessmentModal();

  useEffect(() => {
    document.title = 'Our Office | Deerfield Beach Roofing Contractor Location';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Visit us at 590 Goolsby Blvd, Deerfield Beach, FL. Serving Broward & Palm Beach counties. Call (754) 227-5605 for free roof inspection.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Visit us at 590 Goolsby Blvd, Deerfield Beach, FL. Serving Broward & Palm Beach counties. Call (754) 227-5605 for free roof inspection.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span>Locations</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Our Location</span>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Deerfield Beach Office
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-6">
            All Phase Construction USA operates from our Deerfield Beach office at 590 Goolsby Blvd, Deerfield Beach, FL 33442. While this is our home base, our crews provide on-site roofing inspections, repairs, and replacements throughout Broward County and Palm Beach County. Most appointments happen at your property, but our team is always available by phone if you need help quickly or want to schedule a roof assessment.
          </p>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Our Deerfield Beach location is especially convenient because it sits near the border of North Broward and South Palm Beach. We're positioned just west of Iâ95, east of the Sawgrass Expressway, and with easy access to the Florida Turnpike—so our crews can reach Broward County and Palm Beach County service areas quickly for inspections, repairs, and scheduled roofing work.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Deerfield Beach Office</h2>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/all-phase-construction-deerfield-beach-office.jpg"
              alt="All Phase Construction USA office at 590 Goolsby Blvd in Deerfield Beach, FL"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-gray-400 text-center mt-4 text-sm">
            All Phase Construction USA — 590 Goolsby Blvd, Deerfield Beach, FL 33442.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Address & Contact Information</h2>

          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 mb-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Office Address</h3>
                  <p className="text-gray-300 leading-relaxed">
                    590 Goolsby Blvd<br />
                    Deerfield Beach, FL 33442
                  </p>
                </div>
              </div>

              <div className="border-t border-zinc-700 pt-4">
                <div className="flex items-center gap-4 mb-3">
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <span className="text-gray-400">Phone: </span>
                    <a href="tel:+17542275605" className="text-white hover:text-red-600 transition-colors font-semibold">
                      (754) 227-5605
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <span className="text-gray-400">Email: </span>
                    <a href="mailto:leads@allphaseusa.com" className="text-white hover:text-red-600 transition-colors font-semibold">
                      leads@allphaseusa.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm italic">
            Appointments are scheduled at your property whenever possible. If you need to visit our office, please call ahead to confirm availability.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Get Directions</h2>
          <p className="text-gray-400 mb-6">
            Choose your preferred navigation app to get directions to our Deerfield Beach office:
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=590+Goolsby+Blvd+Deerfield+Beach+FL+33442"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <MapPin className="w-5 h-5" />
              Google Maps
            </a>
            <a
              href="https://maps.apple.com/?daddr=590+Goolsby+Blvd+Deerfield+Beach+FL+33442"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            >
              <MapPin className="w-5 h-5" />
              Apple Maps
            </a>
            <a
              href="https://waze.com/ul?q=590+Goolsby+Blvd+Deerfield+Beach+FL+33442"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            >
              <MapPin className="w-5 h-5" />
              Waze
            </a>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Service Areas We Cover</h2>
          <p className="text-gray-400 mb-6">
            Because our teams are mobile and equipped for residential and commercial roofing work, we can service surrounding communities quickly and efficiently. Our primary service areas include:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Broward County Cities</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/locations/fort-lauderdale/" className="text-red-600 hover:text-red-500 transition-colors">
                    Fort Lauderdale
                  </Link>
                </li>
                <li>
                  <Link to="/locations/pompano-beach/" className="text-red-600 hover:text-red-500 transition-colors">
                    Pompano Beach
                  </Link>
                </li>
                <li>
                  <Link to="/locations/coral-springs/" className="text-red-600 hover:text-red-500 transition-colors">
                    Coral Springs
                  </Link>
                </li>
                <li>
                  <Link to="/locations/deerfield-beach/" className="text-red-600 hover:text-red-500 transition-colors">
                    Deerfield Beach
                  </Link>
                </li>
                <li>
                  <Link to="/locations/coconut-creek/" className="text-red-600 hover:text-red-500 transition-colors">
                    Coconut Creek
                  </Link>
                </li>
                <li>
                  <Link to="/locations/hollywood/" className="text-red-600 hover:text-red-500 transition-colors">
                    Hollywood
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Palm Beach County Cities</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/locations/boca-raton/" className="text-red-600 hover:text-red-500 transition-colors">
                    Boca Raton
                  </Link>
                </li>
                <li>
                  <Link to="/locations/west-palm-beach/" className="text-red-600 hover:text-red-500 transition-colors">
                    West Palm Beach
                  </Link>
                </li>
                <li>
                  <Link to="/locations/delray-beach/" className="text-red-600 hover:text-red-500 transition-colors">
                    Delray Beach
                  </Link>
                </li>
                <li>
                  <Link to="/locations/boynton-beach/" className="text-red-600 hover:text-red-500 transition-colors">
                    Boynton Beach
                  </Link>
                </li>
                <li>
                  <Link to="/locations/wellington/" className="text-red-600 hover:text-red-500 transition-colors">
                    Wellington
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            These are our primary service areas. Contact us to confirm availability for your specific location.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Deerfield Beach?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Our Deerfield Beach location was chosen strategically. Positioned right on the border between North Broward and South Palm Beach counties, we can reach most of our service areas within 30 minutes.
            </p>
            <p>
              This central location means faster response times for emergency repairs, more flexibility in scheduling, and lower overhead costs that we pass on to our customers. Whether you need a roof inspection in Boca Raton or a complete replacement in Fort Lauderdale, our crews can be there quickly.
            </p>
            <p>
              Our proximity to I-95, the Sawgrass Expressway, and the Florida Turnpike makes it easy to reach both coastal and inland communities efficiently. This logistical advantage helps us serve more customers better while maintaining competitive pricing.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What to Expect</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2" />
              <span className="text-gray-300">On-site evaluation and clear next steps</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2" />
              <span className="text-gray-300">Photo documentation when relevant</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2" />
              <span className="text-gray-300">Repair vs. replacement recommendations based on condition</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2" />
              <span className="text-gray-300">Straightforward scheduling and communication</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">A Note From Our Team</h2>
          <blockquote className="border-l-4 border-red-600 pl-6 py-4">
            <p className="text-xl text-gray-300 italic mb-4">
              "Being based right on the line between North Broward and South Palm Beach gives us an advantage. We're just west of Iâ95, close to the Sawgrass, and convenient to the Turnpike—so getting to our customers quickly across both counties is straightforward."
            </p>
            <footer className="text-gray-400">
              — Chris Porosky, Owner, All Phase Construction USA
            </footer>
          </blockquote>
        </div>

        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800 rounded-xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Contact our team today to schedule your free roof assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Request Assessment
            </button>
            <a
              href="tel:+17542275605"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            >
              <Phone className="w-5 h-5" />
              Call (754) 227-5605
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
