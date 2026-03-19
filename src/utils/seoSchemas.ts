/**
 * Centralized Schema.org JSON-LD generators for SEO
 * Used across all pages to ensure consistent structured data
 */

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate LocalBusiness/RoofingContractor schema
 * Use on every page for consistent business identity
 */
export function generateLocalBusinessSchema(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': 'https://allphaseconstructionfl.com/#organization',
    name: 'All Phase Construction USA',
    alternateName: 'All Phase Roofing',
    description: 'Licensed roofing contractor serving Broward and Palm Beach Counties, Florida. Specializing in residential and commercial roof replacement, repair, and inspection services.',
    url: 'https://allphaseconstructionfl.com',
    logo: 'https://allphaseconstructionfl.com/logo.png',
    image: 'https://allphaseconstructionfl.com/long-term-piece-of-mind-all-phase-construction-usa.png',
    telephone: '+1-754-227-5605',
    email: 'info@allphaseconstructionfl.com',
    priceRange: '$$',
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
        '@type': 'AdministrativeArea',
        name: 'Broward County',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Florida',
          containedInPlace: {
            '@type': 'Country',
            name: 'US'
          }
        }
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Palm Beach County',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Florida',
          containedInPlace: {
            '@type': 'Country',
            name: 'US'
          }
        }
      }
    ],
    // aggregateRating removed — managed solely by NuclearMetadata.tsx global schema
    sameAs: [
      'https://www.facebook.com/allphaseconstructionusa',
      'https://www.instagram.com/allphaseconstructionusa',
      'https://www.linkedin.com/company/allphaseconstructionusa',
      'https://www.youtube.com/@allphaseconstructionusa',
      'https://maps.app.goo.gl/VgpBphe5vYY8yuow7',
      'https://www.yelp.com/biz/all-phase-construction-usa-deerfield-beach-2',
      'https://www.bbb.org/us/fl/deerfield-bch/profile/roofing-contractors/all-phase-construction-usa-llc-0633-90537640',
      'https://www.mapquest.com/us/florida/all-phase-construction-usa-535965821',
      'https://www.gaf.com/en-us/roofing-contractors/commercial/all-phase-construction-usa-llc-deerfield-beach-fl-1122381',
      'https://directorii.com/us/fl/deerfield-beach/all-phase-construction-usa-llc-reviews-279/',
      'https://www.roofinginsights.com/news/all-phase-construction-usa-with-chris-porosky',
      'https://www.homepros.com/merchants/all-phase-construction-usa/365769',
      'https://www.floridaroof.com/ALL-PHASE-CONSTRUCTION-USA-LLC-10-1476780.html',
      'https://www.expertise.com/home-improvement/roofing/florida/deerfield-beach'
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Florida Roofing and Sheet Metal Contractors Association',
        alternateName: 'FRSA',
        url: 'https://www.floridaroof.com',
        description: 'The largest state roofing association in the United States'
      }
    ],
    knowsAbout: [
      'Roof Repair', 'Roof Replacement', 'Roof Inspections', 'Roof Installation',
      'Shingle Roofing', 'Tile Roofing', 'Metal Roofing', 'Flat Roofing',
      'Commercial Roofing', 'Residential Roofing', 'Storm Damage Restoration',
      'Wind Mitigation', 'HVHZ Compliance', 'Hurricane-Resistant Roofing'
    ]
  };
}

/**
 * Generate Service schema for service pages
 */
export function generateServiceSchema(serviceName: string, serviceDescription: string, serviceUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceUrl,
    name: serviceName,
    serviceType: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      '@id': 'https://allphaseconstructionfl.com/#organization'
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Broward County, Florida'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Palm Beach County, Florida'
      }
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD'
    }
  };
}

/**
 * Generate FAQPage schema for city and service pages
 * Helps with rich snippets in search results
 */
export function generateFAQPageSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

/**
 * Generate LocalBusiness schema with geo-specific data
 * Use for city-specific pages
 */
export function generateCityLocalBusinessSchema(
  cityName: string,
  countyName: string,
  latitude: string,
  longitude: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `https://allphaseconstructionfl.com/#organization-${cityName.toLowerCase().replace(/\s+/g, '-')}`,
    name: `All Phase Construction USA - ${cityName}`,
    description: `Professional roofing contractor serving ${cityName}, ${countyName}. Licensed, insured, and HVHZ certified for residential and commercial roofing.`,
    url: `https://allphaseconstructionfl.com`,
    telephone: '+1-754-227-5605',
    email: 'info@allphaseconstructionfl.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityName,
      addressRegion: 'FL',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: latitude,
      longitude: longitude
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: countyName
      }
    },
    // aggregateRating removed — managed solely by NuclearMetadata.tsx global schema
  };
}
