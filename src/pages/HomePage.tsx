import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Wrench, Home, Building2, Shield, MapPin, Phone, Star, Clock } from 'lucide-react';
import HeroRoofing from '../components/HeroRoofing';
import HowItWorks from '../components/HowItWorks';
import TrustBadges from '../components/TrustBadges';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import HappyCustomers from '../components/HappyCustomers';
import CaseStudy from '../components/CaseStudy';
import ServiceAreas from '../components/ServiceAreas';
import MicroFAQ from '../components/MicroFAQ';
import FAQ from '../components/FAQ';
import ChamberBadge from '../components/ChamberBadge';
import LocationMap from '../components/LocationMap';
import HomeServiceTilesNav from '../components/HomeServiceTilesNav';

export default function HomePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': 'https://allphaseconstructionfl.com/#roofing-contractor',
    name: 'All Phase Construction USA',
    alternateName: 'All Phase Roofing',
    description: 'Professional roofing contractor serving Broward County and Palm Beach County, Florida. Licensed, insured, and HVHZ certified for residential and commercial roofing services including roof replacement, roof repair, and roof inspections.',
    url: 'https://allphaseconstructionfl.com',
    logo: 'https://allphaseconstructionfl.com/logo.png',
    image: 'https://allphaseconstructionfl.com/og-image.jpg',
    telephone: '+1-754-227-5605',
    email: 'info@allphaseconstructionfl.com',
    priceRange: '$$$$',

    address: {
      '@type': 'PostalAddress',
      streetAddress: '590 Goolsby Blvd',
      addressLocality: 'Deerfield Beach',
      addressRegion: 'FL',
      postalCode: '33442',
      addressCountry: 'US'
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.3186',
      longitude: '-80.1147'
    },

    areaServed: [
      {
        '@type': 'City',
        name: 'Fort Lauderdale',
        containedInPlace: { '@type': 'AdministrativeArea', name: 'Broward County' }
      },
      {
        '@type': 'City',
        name: 'Boca Raton',
        containedInPlace: { '@type': 'AdministrativeArea', name: 'Palm Beach County' }
      },
      {
        '@type': 'City',
        name: 'West Palm Beach',
        containedInPlace: { '@type': 'AdministrativeArea', name: 'Palm Beach County' }
      },
      {
        '@type': 'City',
        name: 'Pompano Beach',
        containedInPlace: { '@type': 'AdministrativeArea', name: 'Broward County' }
      },
      {
        '@type': 'City',
        name: 'Delray Beach',
        containedInPlace: { '@type': 'AdministrativeArea', name: 'Palm Beach County' }
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Broward County',
        containedInPlace: { '@type': 'State', name: 'Florida' }
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Palm Beach County',
        containedInPlace: { '@type': 'State', name: 'Florida' }
      }
    ],

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1'
    },

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Replacement',
            description: 'Complete roof replacement services for residential and commercial properties',
            areaServed: ['Broward County', 'Palm Beach County']
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Repair',
            description: 'Emergency and scheduled roof repair services',
            areaServed: ['Broward County', 'Palm Beach County']
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Inspection',
            description: 'Professional roof inspections and assessments',
            areaServed: ['Broward County', 'Palm Beach County']
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Roofing',
            description: 'Commercial roofing services for businesses',
            areaServed: ['Broward County', 'Palm Beach County']
          }
        }
      ]
    },

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00'
      }
    ],

    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Financing'],

    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'License',
        name: 'Florida State Certified Roofing Contractor (CCC1331464)',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Florida Department of Business and Professional Regulation'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'License',
        name: 'Florida Certified General Contractor (CGC1526236)',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Florida Department of Business and Professional Regulation'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Certification',
        name: 'HVHZ (High Velocity Hurricane Zone) Certified',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Florida Building Commission'
        }
      }
    ],

    sameAs: [
      'https://www.facebook.com/allphaseconstructionusa',
      'https://www.instagram.com/allphaseconstructionusa',
      'https://www.linkedin.com/company/allphaseconstructionusa',
      'https://www.youtube.com/@allphaseconstructionusa'
    ]
  };

  useEffect(() => {
    document.title = 'All Phase Construction USA | Dual-Licensed Roofing Specialist in Deerfield Beach';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'All Phase Construction USA is your Dual-Licensed Roofing Specialist in Deerfield Beach. Expert HVHZ-compliant roof repairs and replacements for Broward & Palm Beach Counties. (754) 227-5605.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'All Phase Construction USA is your Dual-Licensed Roofing Specialist in Deerfield Beach. Expert HVHZ-compliant roof repairs and replacements for Broward & Palm Beach Counties. (754) 227-5605.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://allphaseconstructionfl.com/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <HeroRoofing />

      {/* Service Navigation Pills */}
      <section className="py-12 bg-gradient-to-b from-[#0a0a0a] to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Pill-Style Service Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16">
            <a
              href="https://allphaseconstructionfl.com/roof-inspection"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 min-h-[44px]"
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">ROOF INSPECTIONS</span>
            </a>
            <a
              href="https://allphaseconstructionfl.com/roof-repair"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold text-xs sm:text-sm hover:bg-red-600 hover:text-white hover:border-red-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 min-h-[44px]"
            >
              <Wrench className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">ROOF REPAIR</span>
            </a>
            <a
              href="https://allphaseconstructionfl.com/residential-roofing"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 min-h-[44px]"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">ROOF REPLACEMENT</span>
            </a>
            <a
              href="https://allphaseconstructionfl.com/commercial-roofing"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 min-h-[44px]"
            >
              <Building2 className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">COMMERCIAL ROOFING</span>
            </a>
            <a
              href="https://allphaseconstructionfl.com/roof-maintenance-programs"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 min-h-[44px]"
            >
              <Shield className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">MAINTENANCE PROGRAMS</span>
            </a>
          </div>

          {/* HQ Location Card + Map - 2 Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - HQ Location Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-6 sm:p-8 shadow-2xl">
              {/* Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-600 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">Deerfield Beach</h3>
                  <p className="text-red-500 text-sm font-semibold">Headquarters</p>
                </div>
              </div>

              {/* Address */}
              <div className="mb-6 pb-6 border-b border-gray-700">
                <p className="text-gray-200 text-base leading-relaxed">
                  590 Goolsby Boulevard<br />
                  Deerfield Beach, FL 33442
                </p>
                <p className="text-gray-300 text-sm mt-3">
                  Serving Palm Beach + Broward County
                </p>
              </div>

              {/* Trust Row */}
              <div className="mb-6 pb-6 border-b border-gray-700">
                <div className="flex flex-wrap gap-3 sm:gap-4 text-sm">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white font-semibold">4.8</span>
                    <span className="text-gray-300 sm:text-gray-400">Google Reviews</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-200">
                    <Shield className="w-4 h-4 text-red-500" />
                    <span className="text-white font-semibold">Dual-Licensed</span>
                    <span className="text-gray-300 sm:text-gray-400 text-xs">(CCC/CGC)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-200">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-white font-semibold">Open 24/7</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://www.google.com/maps/place/All+Phase+Construction+USA,+LLC/@26.310786,-80.127335,15z/data=!4m6!3m5!1s0x88d91d982b569be1:0xc298661959b65cbf!8m2!3d26.3107856!4d-80.1273349!16s%2Fg%2F11qpj3rkr8?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href="tel:+17542275605"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 text-white rounded-lg font-semibold text-sm hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Column - Styled Google Map */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-2 shadow-2xl">
              <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: '75%', minHeight: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.3071856042744!2d-80.12733492403144!3d26.310785577038298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91d982b569be1%3A0xc298661959b65cbf!2sAll%20Phase%20Construction%20USA%2C%20LLC!5e0!3m2!1sen!2sus!4v1738436000000!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="All Phase Construction USA, LLC - 590 Goolsby Blvd, Deerfield Beach, FL 33442"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expert Section - Home Page Only */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 leading-tight px-2">
            Local, Expert Roofing Contractor in Deerfield Beach, FL and Surrounding Areas
          </h2>

          {/* Callout Box */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 sm:p-8 mb-10 shadow-xl">
            <p className="text-base sm:text-lg text-gray-100 leading-relaxed text-center">
              When it comes to finding a{' '}
              <span className="relative inline-block">
                <span className="relative z-10">reliable roofing company near you</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>
              </span>
              , look no further than All Phase Construction USA. Serving the communities of{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Deerfield Beach</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>
              </span>
              {' '}and surrounding areas, we are your trusted local roofers for all your roofing needs.
            </p>
          </div>

          {/* Premium Service Tiles Navigation */}
          <HomeServiceTilesNav />
        </div>
      </section>

      <HowItWorks />
      <TrustBadges />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <HappyCustomers />
      <CaseStudy />
      <ServiceAreas />
      <MicroFAQ />
      <FAQ />
      <ChamberBadge />
      <LocationMap />
    </>
  );
}
