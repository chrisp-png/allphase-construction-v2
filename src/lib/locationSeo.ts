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
 *
 * County is read from the Location record itself (single source of truth in
 * src/data/locations.ts). Do NOT reintroduce a hardcoded BROWARD_CITIES array
 * here or anywhere else — it caused 3-way drift prior to April 2026.
 */
export function buildLocationSeo(location: Location): LocationSEO {
  const { slug, city } = location;

  // Determine compliance language based on county field (single source of truth)
  const isBrowardCounty = location.county === 'Broward';
  const complianceLanguage = isBrowardCounty ? 'HVHZ-compliant' : 'Palm Beach County wind-compliant';

  // Generate defaults from templates (POST-April-6 pivot: roof replacement positioning)
  const defaultTitle = `Roof Replacement ${city}, FL | All Phase USA`;
  const defaultDescription = `Roofer in ${city}, FL. Tile, metal, shingle & flat roof replacement. ${complianceLanguage}, 2,500+ projects. Free estimate. (754) 227-5605.`;
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
      "https://www.facebook.com/AllPhaseConstructionUsA",
      "https://www.instagram.com/all_phase_construction_usa/",
      "https://www.linkedin.com/company/all-phase-construction-usa-llc",
      "https://www.youtube.com/@allphaseconstructionusa5626"
    ]
  };
}
