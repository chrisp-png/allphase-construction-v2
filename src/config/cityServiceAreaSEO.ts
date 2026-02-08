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
 *
 * PRIORITY CITIES: High-authority titles for local search dominance
 */
export const CITY_SERVICE_AREA_SEO_OVERRIDES: Record<string, CityServiceAreaSEO> = {
  // Priority City: Boca Raton
  'boca-raton': {
    title: 'Boca Raton Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Boca Raton Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Deerfield Beach
  'deerfield-beach': {
    title: 'Deerfield Beach Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Deerfield Beach Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Fort Lauderdale
  'fort-lauderdale': {
    title: 'Fort Lauderdale Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Fort Lauderdale Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: West Palm Beach
  'west-palm-beach': {
    title: 'West Palm Beach Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert West Palm Beach Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Coral Springs
  'coral-springs': {
    title: 'Coral Springs Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Coral Springs Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Coconut Creek
  'coconut-creek': {
    title: 'Coconut Creek Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Coconut Creek Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Delray Beach
  'delray-beach': {
    title: 'Delray Beach Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Delray Beach Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Boynton Beach
  'boynton-beach': {
    title: 'Boynton Beach Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Boynton Beach Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Lake Worth
  'lake-worth': {
    title: 'Lake Worth Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Lake Worth Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Wellington
  'wellington': {
    title: 'Wellington Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Wellington Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Lauderhill
  'lauderhill': {
    title: 'Lauderhill Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Lauderhill Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: North Lauderdale
  'north-lauderdale': {
    title: 'North Lauderdale Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert North Lauderdale Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Margate
  'margate': {
    title: 'Margate Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Margate Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Plantation
  'plantation': {
    title: 'Plantation Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Plantation Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Davie
  'davie': {
    title: 'Davie Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Davie Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Hollywood
  'hollywood': {
    title: 'Hollywood Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Hollywood Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },

  // Priority City: Pompano Beach
  'pompano-beach': {
    title: 'Pompano Beach Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert Pompano Beach Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements. (754) 227-5605.'
  },
};

/**
 * Default title template for service area pages
 * @param cityName - Clean city name (e.g., "Boynton Beach")
 * @returns SEO-optimized title
 */
export function getDefaultServiceAreaTitle(cityName: string): string {
  return `${cityName} Roofing Services | All Phase Construction USA`;
}

/**
 * Default description template for service area pages
 * @param cityName - Clean city name (e.g., "Boynton Beach")
 * @returns SEO-optimized description
 */
export function getDefaultServiceAreaDescription(cityName: string): string {
  return `Looking for a Dual-Licensed Roofing Specialist in ${cityName}? We provide HVHZ-compliant roof repairs and replacements. Get a free estimate!`;
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
