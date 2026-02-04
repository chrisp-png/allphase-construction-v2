import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroRoofing from '../components/HeroRoofing';
import TrustBadges from '../components/TrustBadges';
import LocalRootedness from '../components/LocalRootedness';
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
      streetAddress: '1280 SW 36th Ave Unit 106',
      addressLocality: 'Pompano Beach',
      addressRegion: 'FL',
      postalCode: '33069',
      addressCountry: 'US'
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.2370',
      longitude: '-80.1248'
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
    document.title = 'Roofer Broward & Palm Beach County | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Licensed roofing company in Broward & Palm Beach County. Expert roof replacement, repair & inspection. Tile, metal, shingle, flat. Call (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Licensed roofing company in Broward & Palm Beach County. Expert roof replacement, repair & inspection. Tile, metal, shingle, flat. Call (754) 227-5605';
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
      <TrustBadges />
      <LocalRootedness />
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
