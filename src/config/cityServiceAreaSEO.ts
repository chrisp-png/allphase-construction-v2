/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SERVICE AREA PAGE SEO CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This file contains SEO templates and overrides for city service area pages.
 *
 * TEMPLATES:
 * - Default templates use city name to generate unique meta tags
 * - Templates ensure every city has unique SEO metadata
 *
 * OVERRIDES:
 * - Add city-specific overrides for priority cities
 * - Overrides replace template values completely
 * - Use city slug as the key (e.g., 'boca-raton')
 *
 * USAGE:
 * - getCityServiceAreaSEO(citySlug, cleanCityName, countyName)
 * - Returns { title, description }
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface CityServiceAreaSEO {
  title: string;
  description: string;
}

/**
 * SEO overrides for specific priority cities
 * Add entries here to customize SEO for specific cities without code changes
 */
export const CITY_SERVICE_AREA_SEO_OVERRIDES: Record<string, CityServiceAreaSEO> = {
  'boca-raton': {
    title: 'Roof Inspection in Boca Raton for Repairs & Replacement | All Phase',
    description: 'Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.'
  },
  // Add more priority cities here as needed
  // Example:
  // 'boynton-beach': {
  //   title: 'Roof Inspection in Boynton Beach for Repairs & Replacement | All Phase',
  //   description: 'Get a professional roof inspection in Boynton Beach to determine repair needs, replacement options, and insurance documentation before you decide.'
  // },
};

/**
 * Default title template for service area pages
 * @param cityName - Clean city name (e.g., "Boynton Beach")
 * @returns SEO-optimized title
 */
export function getDefaultServiceAreaTitle(cityName: string): string {
  return `Roof Inspection in ${cityName} for Repairs & Replacement | All Phase`;
}

/**
 * Default description template for service area pages
 * @param cityName - Clean city name (e.g., "Boynton Beach")
 * @returns SEO-optimized description
 */
export function getDefaultServiceAreaDescription(cityName: string): string {
  return `Get a professional roof inspection in ${cityName} to determine repair needs, replacement options, and insurance documentation before you decide.`;
}

/**
 * Get SEO metadata for a city service area page
 * Checks overrides first, falls back to templates
 *
 * @param citySlug - URL slug for the city (e.g., "boca-raton")
 * @param cleanCityName - Display name for the city (e.g., "Boca Raton")
 * @param countyName - County name for context (optional)
 * @returns SEO metadata object with title and description
 */
export function getCityServiceAreaSEO(
  citySlug: string,
  cleanCityName: string,
  countyName?: string
): CityServiceAreaSEO {
  // Check if there's a specific override for this city
  if (CITY_SERVICE_AREA_SEO_OVERRIDES[citySlug]) {
    return CITY_SERVICE_AREA_SEO_OVERRIDES[citySlug];
  }

  // Use template-based SEO
  return {
    title: getDefaultServiceAreaTitle(cleanCityName),
    description: getDefaultServiceAreaDescription(cleanCityName)
  };
}
