/**
 * Enhanced Schema Markup Utilities for SEO and AI/LLM Understanding
 *
 * These utilities generate structured data in JSON-LD format to help:
 * - Google and search engines better understand our content
 * - AI/LLMs accurately represent our services and expertise
 * - Rich results in search (FAQ snippets, breadcrumbs, ratings)
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Breadcrumb {
  name: string;
  url: string;
}

export interface ServiceDetails {
  name: string;
  description: string;
  serviceType?: string;
  areaServed: string[];
  url: string;
  provider?: {
    '@type': string;
    name: string;
    '@id'?: string;
  };
}

/**
 * Generate FAQPage schema for better visibility in search results
 */
export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

/**
 * Generate Service schema for service pages
 */
export function generateServiceSchema(service: ServiceDetails): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.description,
    'serviceType': service.serviceType || service.name,
    'provider': service.provider || {
      '@type': 'RoofingContractor',
      '@id': 'https://allphaseconstructionfl.com/#roofing-contractor',
      'name': 'All Phase Construction USA'
    },
    'url': service.url,
    'areaServed': service.areaServed.map(area => ({
      '@type': 'City',
      'name': area,
      'containedInPlace': {
        '@type': 'AdministrativeArea',
        'name': 'Florida',
        'containedInPlace': {
          '@type': 'Country',
          'name': 'US'
        }
      }
    })),
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': service.name,
      'itemListElement': [{
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': service.name
        }
      }]
    }
  };
}

/**
 * Generate BreadcrumbList schema for navigation context
 */
export function generateBreadcrumbSchema(breadcrumbs: Breadcrumb[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': crumb.url
    }))
  };
}

/**
 * Generate enhanced Organization schema with full credentials
 */
export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': 'https://allphaseconstructionfl.com/#roofing-contractor',
    'name': 'All Phase Construction USA',
    'alternateName': 'All Phase Roofing',
    'description': 'Licensed roofing contractor serving Broward County and Palm Beach County, Florida. Dual-licensed (CCC1331464 & CGC1526236) with 22+ years experience and 2,500+ roofs installed.',
    'url': 'https://allphaseconstructionfl.com',
    'logo': 'https://allphaseconstructionfl.com/allphase-logo-white.svg',
    'telephone': '+1-754-227-5605',
    'email': 'info@allphaseconstructionfl.com',
    'priceRange': '$$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '590 Goolsby Blvd',
      'addressLocality': 'Deerfield Beach',
      'addressRegion': 'FL',
      'postalCode': '33442',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '26.3186',
      'longitude': '-80.1147'
    },
    'areaServed': [
      {
        '@type': 'AdministrativeArea',
        'name': 'Broward County',
        'containedInPlace': {
          '@type': 'AdministrativeArea',
          'name': 'Florida',
          'containedInPlace': {
            '@type': 'Country',
            'name': 'US'
          }
        }
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Palm Beach County',
        'containedInPlace': {
          '@type': 'AdministrativeArea',
          'name': 'Florida',
          'containedInPlace': {
            '@type': 'Country',
            'name': 'US'
          }
        }
      }
    ],
    // aggregateRating removed — managed solely by NuclearMetadata.tsx global schema
    'hasCredential': [
      {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': 'License',
        'name': 'Florida State Certified Roofing Contractor (CCC1331464)',
        'recognizedBy': {
          '@type': 'Organization',
          'name': 'Florida Department of Business and Professional Regulation'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': 'License',
        'name': 'Florida Certified General Contractor (CGC1526236)',
        'recognizedBy': {
          '@type': 'Organization',
          'name': 'Florida Department of Business and Professional Regulation'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': 'Certification',
        'name': 'HVHZ (High Velocity Hurricane Zone) Certified',
        'recognizedBy': {
          '@type': 'Organization',
          'name': 'Florida Building Commission'
        }
      }
    ],
    'sameAs': [
      'https://www.facebook.com/allphaseconstructionusa',
      'https://www.instagram.com/allphaseconstructionusa',
      'https://www.linkedin.com/company/allphaseconstructionusa',
      'https://www.youtube.com/@allphaseconstructionusa'
    ],
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '07:00',
        'closes': '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '08:00',
        'closes': '16:00'
      }
    ]
  };
}

/**
 * Generate LocalBusiness schema for location pages
 */
export function generateLocalBusinessSchema(city: string, county: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `https://allphaseconstructionfl.com/#roofing-contractor-${city.toLowerCase().replace(/\s+/g, '-')}`,
    'name': `All Phase Construction USA - ${city} Roofing`,
    'parentOrganization': {
      '@id': 'https://allphaseconstructionfl.com/#roofing-contractor'
    },
    'areaServed': {
      '@type': 'City',
      'name': city,
      'containedInPlace': {
        '@type': 'AdministrativeArea',
        'name': county
      }
    },
    'telephone': '+1-754-227-5605',
    'url': `https://allphaseconstructionfl.com/${city.toLowerCase().replace(/\s+/g, '-')}`,
    'priceRange': '$$$$'
  };
}

/**
 * Helper to inject schema into page head
 */
export function injectSchema(schema: object): void {
  const schemaType = (schema as any)['@type'];
  if (schemaType === 'FAQPage') {
    const existing = document.querySelectorAll('script[type="application/ld+json"]');
    for (const el of existing) {
      try {
        const parsed = JSON.parse(el.textContent || '');
        if (parsed['@type'] === 'FAQPage' || (Array.isArray(parsed) && parsed.some((s: any) => s['@type'] === 'FAQPage'))) {
          return;
        }
      } catch (e) { /* ignore parse errors */ }
    }
  }
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Helper to inject multiple schemas at once
 */
export function injectMultipleSchemas(schemas: object[]): () => void {
  const scripts: HTMLScriptElement[] = [];
  const existingTypes = new Set<string>();
  document.querySelectorAll('script[type="application/ld+json"]').forEach(el => {
    try {
      const parsed = JSON.parse(el.textContent || '');
      if (parsed['@type']) existingTypes.add(parsed['@type']);
      if (Array.isArray(parsed)) parsed.forEach((s: any) => { if (s['@type']) existingTypes.add(s['@type']); });
    } catch (e) { /* ignore */ }
  });
  schemas.forEach(schema => {
    const schemaType = (schema as any)['@type'];
    if (schemaType && existingTypes.has(schemaType)) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    scripts.push(script);
  });
  return () => {
    scripts.forEach(script => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    });
  };
}
