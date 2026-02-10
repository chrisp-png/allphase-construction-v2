import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Award, MapPin, Wind, Phone, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Licensed Roofer Deerfield Beach FL';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Licensed roofing contractor (CCC1331464 & CGC1526236) serving South Florida since 2003. 2,500+ roofs installed in Broward & Palm Beach counties.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Licensed roofing contractor (CCC1331464 & CGC1526236) serving South Florida since 2003. 2,500+ roofs installed in Broward & Palm Beach counties.';
      document.head.appendChild(meta);
    }
  }, []);

  const serviceAreas = {
    broward: [
      'Fort Lauderdale',
      'Coral Springs',
      'Pompano Beach',
      'Deerfield Beach',
      'Coconut Creek',
      'Parkland',
      'Weston',
      'Davie',
      'Plantation',
      'Sunrise',
      'Hollywood',
      'Pembroke Pines',
      'Miramar'
    ],
    palmBeach: [
      'Boca Raton',
      'Delray Beach',
      'Boynton Beach',
      'Wellington',
      'West Palm Beach',
      'Lake Worth',
      'Jupiter',
      'Palm Beach Gardens',
      'Royal Palm Beach',
      'Loxahatchee',
      'Greenacres',
      'Lantana'
    ]
  };

  const certifications = [
    'Tamko Pro Platinum Contractor',
    'Owens Corning Platinum Contractor',
    'CertainTeed Master Contractor',
    'GAF Certified',
    'Metal Alliance Certified',
    'Certified Wind Mitigator',
    'TRI Partner'
  ];

  return (
    <>
      {/* Hero Section with Team Photo Background */}
      <div className="relative min-h-[600px] overflow-hidden bg-black pt-36 pb-16">
        {/* Team Photo Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale-[40%] brightness-[0.35] animate-[drift_45s_ease-in-out_infinite]"
            style={{ backgroundImage: 'url(/images.jpg)' }}
          />
        </div>

        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_70%,rgba(0,0,0,0.8)_100%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/40 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                Broward & Palm Beach's Trusted Roofing Experts
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              About All Phase Construction
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Roofing Expertise Backed by Dual Licensing
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto drop-shadow-lg">
              Led by Chris Porosky, a Certified Roofing and General Contractor with over 20 years of experience in the construction industry.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-black pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">20+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">2,500+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">CGC & CCC</div>
            <div className="text-gray-400">Dual Licensed</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">5-Star</div>
            <div className="text-gray-400">Rated</div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Reliability Starts at the Top
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  All Phase Construction USA, LLC is led by Chris Porosky, a Certified Roofing and General Contractor with over 20 years of experience focused primarily on roofing systems, inspections, and long-term roof performance. With a commitment to quality craftsmanship and honest service, Chris has built his reputation on doing things the right way and delivering dependable results for homeowners and businesses throughout South Florida.
                </p>
                <p>
                  Over the years, our work has become focused almost exclusively on roofing. From inspections and repairs to full roof replacements and long-term maintenance, our experience is rooted in understanding how roofing systems perform in South Florida's climate. This roofing-first approach allows us to identify issues others miss and deliver solutions designed for durability, code compliance, and long-term performance.
                </p>
                <p>
                  As a dual-licensed contractor holding both a General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) license, All Phase Construction USA brings a broader level of expertise than most roofing companies. This dual licensing allows our team to understand not only the roofing system itself, but also the structural components that support it—helping identify issues others may overlook and delivering solutions designed to last.
                </p>
                <p>
                  Based in Deerfield Beach, we proudly serve residential and commercial clients throughout Broward and Palm Beach Counties. From standing seam metal roofing systems to tile and shingle installations, our team has completed thousands of projects and earned a reputation for professionalism, reliability, and doing the job right.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-block mt-8 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                Schedule Your Free Inspection
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden border-2 border-zinc-800">
              <img
                src="/images.jpg"
                alt="All Phase Construction team in front of company truck"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Dual-Licensed Contractor</h3>
              <p className="text-gray-400">
                We hold both General Contractor and Roofing Contractor licenses—a rare combination that ensures comprehensive expertise on every project.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300">
              <Award className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Manufacturer Certified</h3>
              <p className="text-gray-400">
                Our certifications from Owens Corning, GAF, CertainTeed, and Tamko mean access to the best warranties in the industry.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300">
              <MapPin className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Local & Accountable</h3>
              <p className="text-gray-400">
                Based in Deerfield Beach, we're your neighbors. Our reputation in this community matters to us—and it shows in our work.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300">
              <Wind className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Hurricane Experts</h3>
              <p className="text-gray-400">
                As Certified Wind Mitigators, we know how to protect South Florida homes from storm damage and help you save on insurance.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Leading Certifications
            </h2>
            <p className="text-xl text-gray-400">
              Our credentials reflect our commitment to excellence and ongoing training.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 flex items-center justify-center text-center hover:border-red-600/50 transition-all duration-300"
              >
                <span className="text-gray-300 font-semibold text-sm">{cert}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center max-w-3xl mx-auto">
            These certifications aren't just logos—they represent hundreds of hours of training and a commitment to installing roofing systems the right way. They also give our customers access to the best manufacturer warranties available.
          </p>
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <p className="text-gray-500 text-center text-sm">
              Proud member of the{' '}
              <a
                href="https://www.browardchamber.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors underline decoration-gray-600 hover:decoration-red-600"
              >
                Broward County Chamber of Commerce
              </a>
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden order-2 lg:order-1">
              <img
                src="/habitat-for-humanity.jpg"
                alt="All Phase Construction employee volunteering at Habitat for Humanity build"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Giving Back to Our Community
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  At All Phase Construction, we believe in using our skills to make a difference. We're proud to partner with Habitat for Humanity, donating our time and expertise to help build safe, affordable homes for families in need throughout South Florida.
                </p>
                <p>
                  It's one of the most rewarding parts of what we do—and a reminder of why quality roofing matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proudly Serving South Florida
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-red-600 mb-6">Broward County</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-400">
                {serviceAreas.broward.map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-red-600 mb-6">Palm Beach County</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-400">
                {serviceAreas.palmBeach.map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800 rounded-xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Work with a Contractor You Can Trust?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Schedule your free roof inspection today. No pressure, no obligation—just honest answers about your roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/contact"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Schedule Free Inspection
            </Link>
            <a
              href="tel:+17542275605"
              className="flex items-center gap-2 px-8 py-4 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            >
              <Phone className="w-5 h-5" />
              Call (754) 227-5605
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 pt-8 border-t border-zinc-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Dual Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>2,500+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
