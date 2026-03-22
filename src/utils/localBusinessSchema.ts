/**
 * Local Business Schema Generator for Service Area Pages
 * Optimized for "roofer near me" and local search visibility
 */

export interface LocalBusinessSchemaProps {
  cityName: string;
  stateName?: string;
  serviceAreaRadius?: string;
  latitude?: string;
  longitude?: string;
  /** @deprecated aggregateRating is now managed solely by NuclearMetadata.tsx */
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
  priceRange?: string;
}

export function generateLocalBusinessSchema(props: LocalBusinessSchemaProps) {
  const {
    cityName,
    stateName = 'Florida',
    serviceAreaRadius = '15 miles',
    latitude,
    longitude,
    // aggregateRating prop accepted but no longer used — managed by NuclearMetadata.tsx
    priceRange = '$$$$'
  } = props;

  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `https://allphaseconstructionfl.com/locations/${cityName.toLowerCase().replace(/\s+/g, '-')}#organization`,
    name: 'All Phase Construction USA',
    alternateName: `All Phase Roofing ${cityName}`,
    description: `Professional roofing contractor serving ${cityName}, ${stateName}. Licensed, insured, and HVHZ certified for residential and commercial roofing services.`,
    url: `https://allphaseconstructionfl.com/locations/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
    logo: 'https://allphaseconstructionfl.com/logo.png',
    image: 'https://allphaseconstructionfl.com/og-image.jpg',
    telephone: '+1-754-227-5605',
    priceRange,

    // Service Area - Critical for "near me" searches
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: stateName,
        containedInPlace: {
          '@type': 'Country',
          name: 'United States'
        }
      }
    },

    // Service radius for local search
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: latitude && longitude ? {
        '@type': 'GeoCoordinates',
        latitude,
        longitude
      } : undefined,
      geoRadius: serviceAreaRadius
    },

    // Main business address
    address: {
      '@type': 'PostalAddress',
      streetAddress: '590 Goolsby Blvd',
      addressLocality: 'Deerfield Beach',
      addressRegion: 'FL',
      postalCode: '33442',
      addressCountry: 'US'
    },

    // Geo coordinates for mapping
    geo: latitude && longitude ? {
      '@type': 'GeoCoordinates',
      latitude,
      longitude
    } : undefined,

    // aggregateRating removed — managed solely by NuclearMetadata.tsx global schema

    // Services offered
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Roofing Services in ${cityName}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Replacement',
            description: `Complete roof replacement services in ${cityName}, ${stateName}`,
            areaServed: cityName
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Repair',
            description: `Emergency and scheduled roof repair in ${cityName}`,
            areaServed: cityName
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Inspection',
            description: `Professional roof inspections in ${cityName}`,
            areaServed: cityName
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Roofing',
            description: `Commercial roofing services for ${cityName} businesses`,
            areaServed: cityName
          }
        }
      ]
    },

    // Opening hours
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

    // Payment methods
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Financing'],

    // Certifications and credentials
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'License',
        name: 'Florida State Certified Roofing Contractor',
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

    // Same as link
    sameAs: [
      'https://www.facebook.com/AllPhaseConstructionUsA',
      'https://www.instagram.com/all_phase_construction_usa/',
      'https://www.linkedin.com/company/all-phase-construction-usa-llc',
      'https://www.youtube.com/@allphaseconstructionusa5626'
    ]
  };
}

/**
 * Service-specific schema for roof repair pages
 */
export function generateRoofRepairServiceSchema(cityName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://allphaseconstructionfl.com/locations/${cityName.toLowerCase().replace(/\s+/g, '-')}/roof-repair#organization`,
    serviceType: 'Roof Repair',
    provider: {
      '@type': 'RoofingContractor',
      name: 'All Phase Construction USA',
      telephone: '+1-754-227-5605'
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Florida',
        containedInPlace: {
          '@type': 'Country',
          name: 'United States'
        }
      }
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${cityName} Roof Repair Services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency Roof Repair',
            description: `24/7 emergency roof repair services in ${cityName}`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Leak Detection and Repair',
            description: `Professional leak detection and repair in ${cityName}`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Storm Damage Repair',
            description: `Storm and hurricane damage repair in ${cityName}`
          }
        }
      ]
    }
  };
}

/**
 * Breadcrumb schema for location pages
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
