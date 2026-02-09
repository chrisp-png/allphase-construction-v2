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

      {/* Authority Content Block - 500+ Words for Crawler Visibility */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Dual-Licensed Roofing Specialist Serving South Florida
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                All Phase Construction USA is a dual-licensed roofing contractor headquartered in Deerfield Beach,
                holding both Florida Certified Roofing Contractor (CCC-1331464) and Certified General Contractor
                (CGC-1526236) licenses. This dual-licensing represents a significant competitive advantage that
                directly benefits property owners throughout Broward County and Palm Beach County.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Dual-Licensing Matters for Your Roof
              </h3>

              <p className="leading-relaxed">
                Most roofing contractors in South Florida operate with only a CCC (Certified Roofing Contractor)
                license, which limits their scope of work to the roof surface itself. When these contractors
                encounter structural issues during roof replacement—damaged trusses, inadequate roof-to-wall
                connections, compromised decking, or load-bearing problems—they must stop work and hire a separate
                general contractor to address these critical structural components. This creates delays, increases
                costs, and introduces coordination problems between multiple companies.
              </p>

              <p className="leading-relaxed">
                Our CGC license (Certified General Contractor) authorizes us to evaluate and repair the complete
                structural system that supports your roof. During every roof replacement project, we inspect roof
                deck fastening, assess truss integrity, verify proper connections between the roof structure and
                exterior walls, and ensure the entire system meets current Florida Building Code requirements for
                wind resistance. When we identify structural deficiencies, we repair them immediately without
                waiting for another contractor—keeping your project on schedule and under one comprehensive warranty.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                HVHZ Mastery: Hurricane Protection That Exceeds Code
              </h3>

              <p className="leading-relaxed">
                South Florida's High Velocity Hurricane Zone (HVHZ) designation requires the most stringent roofing
                standards in the continental United States. Properties in Broward County and Palm Beach County must
                withstand sustained winds exceeding 120 mph and wind gusts approaching 160 mph during Category 4
                and Category 5 hurricanes. HVHZ compliance is not optional—it's mandated by both county building
                departments and enforced through detailed plan reviews and multiple field inspections.
              </p>

              <p className="leading-relaxed">
                Every All Phase Construction roofing installation meets or exceeds HVHZ requirements through enhanced
                fastening schedules, upgraded underlayment systems rated for extreme wind exposure, reinforced
                flashing details at all roof penetrations and transitions, and impact-resistant materials tested to
                Florida Product Approval standards. Our dual-licensed status enables us to integrate these HVHZ
                components with the structural roof system itself—verifying that enhanced surface protection is
                properly anchored to a structural system capable of transferring wind loads safely to the foundation.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Local Building Department Expertise
              </h3>

              <p className="leading-relaxed">
                Broward County Building Department and Palm Beach County Building Department each maintain unique
                permitting requirements, inspection protocols, and code interpretations that differ significantly
                from neighboring jurisdictions. Having completed hundreds of roofing projects throughout our service
                area—from Boca Raton and Delray Beach in the south, through Deerfield Beach and Fort Lauderdale in
                the central corridor, to West Palm Beach and Wellington in the north—we maintain established
                relationships with local building officials and understand exactly what documentation, engineering
                details, and installation specifications secure first-pass inspection approval.
              </p>

              <p className="leading-relaxed">
                This local expertise eliminates costly delays caused by permit rejections, failed inspections, or
                code violations. Many out-of-area contractors struggle with county-specific requirements, resulting
                in project delays of weeks or months. Our proven track record throughout Broward and Palm Beach
                Counties ensures your roof replacement moves forward smoothly from permit application through final
                inspection and certificate of completion—typically within 2-3 weeks for standard residential projects.
              </p>

              <div className="bg-gray-50 border-l-4 border-red-600 p-6 mt-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Contact Our Deerfield Beach Headquarters
                </h3>
                <p className="text-gray-700 mb-4">
                  All Phase Construction USA operates from our primary office at 590 Goolsby Blvd in Deerfield Beach,
                  strategically located to serve all of Broward County and Palm Beach County. Our licensed roofing
                  specialists provide free estimates, emergency repairs, and complete roof replacement services
                  throughout South Florida.
                </p>
                <p className="text-2xl font-bold text-red-600">
                  Call (754) 227-5605 for immediate assistance
                </p>
              </div>
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
