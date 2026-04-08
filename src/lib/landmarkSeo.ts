/**
 * LANDMARK PAGE SEO BUILDER
 *
 * Single source of truth for /locations/:city/:landmark SEO metadata.
 * Used by both live routes and prerendering.
 *
 * Mirrors the pattern in src/lib/locationSeo.ts. Do NOT reintroduce any
 * "roofing contractor" language in the default templates — PR #1 fixed
 * that leak at the city level and we need to keep it out of landmark
 * pages for the April-6 roof-replacement pivot to hold.
 */

import type { Landmark } from '../data/landmarks';
import { getLocationBySlug } from '../data/locations';

export interface LandmarkSEO {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
}

export function buildLandmarkSeo(landmark: Landmark): LandmarkSEO {
  const { slug, citySlug, name } = landmark;

  // Resolve parent city for display name and county-driven compliance language
  const parentCity = getLocationBySlug(citySlug);
  const cityDisplay = parentCity?.city ?? citySlug;
  const isBrowardCounty = parentCity?.county === 'Broward';
  const complianceLanguage = isBrowardCounty ? 'HVHZ-compliant' : 'Palm Beach County wind-compliant';

  // Default templates (POST-April-6 pivot: roof replacement positioning)
  const defaultTitle = `Roof Replacement Near ${name} | ${cityDisplay}, FL | All Phase USA`;
  const defaultDescription = `Roof replacement serving ${name} and the surrounding ${cityDisplay}, FL area. Tile, metal, shingle & flat. ${complianceLanguage}, dual-licensed CCC + CGC. Free estimate. (754) 227-5605.`;
  const canonical = `https://allphaseconstructionfl.com/locations/${citySlug}/${slug}`;

  const title = landmark.titleOverride || defaultTitle;
  const description = landmark.descriptionOverride || defaultDescription;

  return {
    title,
    description,
    canonical,
    robots: 'index, follow',
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
  };
}

/**
 * Generate a FAQPage JSON-LD schema object from a landmark's FAQ array.
 * Returns undefined if the landmark has no FAQs.
 */
export function buildLandmarkFaqSchema(landmark: Landmark): object | undefined {
  if (!landmark.faqs || landmark.faqs.length === 0) return undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: landmark.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

/**
 * Generate a BreadcrumbList JSON-LD schema object for a landmark page.
 * Home → Locations → City → Landmark
 */
export function buildLandmarkBreadcrumbSchema(landmark: Landmark): object {
  const parentCity = getLocationBySlug(landmark.citySlug);
  const cityDisplay = parentCity?.city ?? landmark.citySlug;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://allphaseconstructionfl.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://allphaseconstructionfl.com/locations/deerfield-beach/service-area',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cityDisplay,
        item: `https://allphaseconstructionfl.com/locations/${landmark.citySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: landmark.name,
        item: `https://allphaseconstructionfl.com/locations/${landmark.citySlug}/${landmark.slug}`,
      },
    ],
  };
}
