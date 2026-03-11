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
    '@id': 'https://allphaseconstructionfl.com/#roofing-contractor',
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
      'https://www.instagram.com/allphaseconstructionusa'
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
      '@id': 'https://allphaseconstructionfl.com/#roofing-contractor'
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
    '@id': `https://allphaseconstructionfl.com/#roofing-contractor-${cityName.toLowerCase().replace(/\s+/g, '-')}`,
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
