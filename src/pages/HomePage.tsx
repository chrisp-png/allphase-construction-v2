import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroRoofing from '../components/HeroRoofing';
import OurEdge from '../components/OurEdge';
import TrustBadges from '../components/TrustBadges';
import LocalRootedness from '../components/LocalRootedness';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import HappyCustomers from '../components/HappyCustomers';
import CaseStudy from '../components/CaseStudy';
import ServiceAreas from '../components/ServiceAreas';
import ServiceAreaOverview from '../components/ServiceAreaOverview';
import MicroFAQ from '../components/MicroFAQ';
import FAQ from '../components/FAQ';
import ChamberBadge from '../components/ChamberBadge';
import LocationMap from '../components/LocationMap';

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

      {/* Service Navigation Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://allphaseconstructionfl.com/roof-inspection"
              className="px-6 py-3 bg-transparent text-gray-900 border-2 border-gray-900 rounded-lg font-semibold text-base hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              ROOF INSPECTIONS
            </a>
            <a
              href="https://allphaseconstructionfl.com/roof-repair"
              className="px-6 py-3 bg-transparent text-gray-900 border-2 border-gray-900 rounded-lg font-semibold text-base hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              ROOF REPAIR
            </a>
            <a
              href="https://allphaseconstructionfl.com/residential-roofing"
              className="px-6 py-3 bg-transparent text-gray-900 border-2 border-gray-900 rounded-lg font-semibold text-base hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              ROOF REPLACEMENT
            </a>
            <a
              href="https://allphaseconstructionfl.com/commercial-roofing"
              className="px-6 py-3 bg-transparent text-gray-900 border-2 border-gray-900 rounded-lg font-semibold text-base hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              COMMERCIAL ROOFING
            </a>
            <a
              href="https://allphaseconstructionfl.com/roof-maintenance-programs"
              className="px-6 py-3 bg-transparent text-gray-900 border-2 border-gray-900 rounded-lg font-semibold text-base hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              ROOF MAINTENANCE PROGRAMS
            </a>
          </div>

          {/* Location with Map - 2 Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                Deerfield Beach, FL
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Based at 590 Goolsby Boulevard, Deerfield Beach, Florida 33442. We serve Deerfield Beach, Florida and the surrounding areas in Palm Beach and Broward County.
              </p>
            </div>

            {/* Right Column - Google Map */}
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '75%', minHeight: '300px' }}>
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
      </section>

      <OurEdge />
      <TrustBadges />
      <LocalRootedness />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <HappyCustomers />
      <CaseStudy />
      <ServiceAreas />
      <ServiceAreaOverview />
      <MicroFAQ />
      <FAQ />
      <ChamberBadge />
      <LocationMap />
    </>
  );
}
