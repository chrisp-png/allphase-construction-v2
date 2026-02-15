/**
 * LOCATION PAGE SEO BUILDER
 *
 * Single source of truth for /locations/:slug SEO metadata.
 * Used by BOTH live routes and prerendering.
 *
 * DO NOT use this for homepage SEO - homepage has its own separate system.
 */

import type { Location } from '../data/locations';

export interface LocationSEO {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  schemaJsonLd?: string;
  schemaObject?: object;
}

/**
 * Build complete SEO metadata for a location page
 *
 * Uses templates with city/state substitution, unless overrides are provided.
 */
export function buildLocationSeo(location: Location): LocationSEO {
  const { slug, city, state } = location;

  // Generate defaults from templates
  const defaultTitle = `${city} Roofing Contractor | All Phase Construction USA`;
  const defaultDescription = `All Phase Construction USA is a licensed roofing contractor serving ${city}, ${state}. We provide HVHZ-compliant metal, tile, and shingle roofing installation, replacement, and repair.`;
  const defaultCanonical = `https://allphaseconstructionfl.com/locations/${slug}`;
  const defaultRobots = 'index, follow';

  // Apply overrides or use defaults
  const title = location.titleOverride || defaultTitle;
  const description = location.descriptionOverride || defaultDescription;
  const canonical = location.canonicalOverride || defaultCanonical;
  const robots = location.robotsOverride || defaultRobots;

  // Open Graph defaults to same as standard meta unless overridden
  const ogTitle = location.ogTitleOverride || title;
  const ogDescription = location.ogDescriptionOverride || description;
  const ogUrl = canonical;

  // Schema (if provided)
  const schemaObject = location.schemaOverride || undefined;
  const schemaJsonLd = schemaObject ? JSON.stringify(schemaObject, null, 2) : undefined;

  return {
    title,
    description,
    canonical,
    robots,
    ogTitle,
    ogDescription,
    ogUrl,
    schemaJsonLd,
    schemaObject
  };
}

/**
 * Generate Deerfield Beach headquarters-specific schema
 * (special case for HQ location)
 */
export function generateDeerfieldBeachSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://allphaseconstructionfl.com/locations/deerfield-beach#roofingcontractor",
    "name": "All Phase Construction USA",
    "url": "https://allphaseconstructionfl.com/locations/deerfield-beach",
    "telephone": "+1-754-227-5605",
    "priceRange": "$$",
    "foundingDate": "2006",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "590 Goolsby Blvd",
      "addressLocality": "Deerfield Beach",
      "addressRegion": "FL",
      "postalCode": "33442",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Deerfield Beach",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "FL",
          "addressCountry": "US"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Broward County",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "FL",
          "addressCountry": "US"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Palm Beach County",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "FL",
          "addressCountry": "US"
        }
      }
    ],
    "hasMap": "https://www.google.com/maps/place/590+Goolsby+Blvd,+Deerfield+Beach,+FL+33442",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.allphaseconstructionfl.com/",
      "https://www.youtube.com/@allphaseconstructionusa5626",
      "https://share.google/GoLG8dytlgHgXVjKK"
    ]
  };
}
