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
    description: 'Expert roofing services in Boca Raton, FL. Dual-Licensed Roofing Specialist (CCC1331464) & General Contractor (CGC1526236). HVHZ-compliant roof repairs and replacements. Call (754) 227-5605.'
  },

  // Priority City: Deerfield Beach
  'deerfield-beach': {
    title: 'Deerfield Beach Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Headquartered in Deerfield Beach at 590 Goolsby Blvd. Dual-Licensed Roofing Specialist serving Broward & Palm Beach Counties with HVHZ-compliant roofing solutions. Call (754) 227-5605.'
  },

  // Priority City: Fort Lauderdale
  'fort-lauderdale': {
    title: 'Fort Lauderdale Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert roofing services in Fort Lauderdale, FL. Dual-Licensed specialist with CCC1331464 & CGC1526236. HVHZ-certified roof repairs, replacements, and storm restoration. Call (754) 227-5605.'
  },

  // Priority City: West Palm Beach
  'west-palm-beach': {
    title: 'West Palm Beach Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Professional roofing services in West Palm Beach. Dual-Licensed Roofing Specialist with structural expertise. HVHZ-compliant installations and repairs. Call (754) 227-5605.'
  },

  // Priority City: Coral Springs
  'coral-springs': {
    title: 'Coral Springs Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Trusted roofing contractor in Coral Springs. Dual-Licensed specialist combining roofing and structural expertise for superior storm-ready installations. Call (754) 227-5605.'
  },

  // Priority City: Coconut Creek
  'coconut-creek': {
    title: 'Coconut Creek Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert roofing services in Coconut Creek, FL. Dual-Licensed Roofing Specialist providing HVHZ-compliant roof repairs and replacements. Free estimates. Call (754) 227-5605.'
  },

  // Priority City: Delray Beach
  'delray-beach': {
    title: 'Delray Beach Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Professional roofing contractor in Delray Beach. Dual-Licensed specialist with CCC & CGC credentials ensures structural integrity and HVHZ compliance. Call (754) 227-5605.'
  },

  // Priority City: Boynton Beach
  'boynton-beach': {
    title: 'Boynton Beach Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert roofing services in Boynton Beach. Dual-Licensed Roofing Specialist with superior structural credentials for storm-resistant installations. Call (754) 227-5605.'
  },

  // Priority City: Lake Worth
  'lake-worth': {
    title: 'Lake Worth Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Trusted roofing contractor in Lake Worth, FL. Dual-Licensed specialist providing HVHZ-compliant roof repairs and replacements. Free estimates. Call (754) 227-5605.'
  },

  // Priority City: Wellington
  'wellington': {
    title: 'Wellington Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Professional roofing services in Wellington. Dual-Licensed Roofing Specialist combining roofing and general contracting expertise for superior installations. Call (754) 227-5605.'
  },

  // Priority City: Lauderhill
  'lauderhill': {
    title: 'Lauderhill Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert roofing contractor in Lauderhill, FL. Dual-Licensed specialist with CCC1331464 & CGC1526236 providing HVHZ-compliant roofing solutions. Call (754) 227-5605.'
  },

  // Priority City: North Lauderdale
  'north-lauderdale': {
    title: 'North Lauderdale Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Trusted roofing services in North Lauderdale. Dual-Licensed Roofing Specialist ensuring structural integrity and hurricane readiness. Call (754) 227-5605.'
  },

  // Priority City: Margate
  'margate': {
    title: 'Margate Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Professional roofing contractor in Margate, FL. Dual-Licensed specialist providing HVHZ-compliant roof repairs and replacements. Free estimates. Call (754) 227-5605.'
  },

  // Priority City: Plantation
  'plantation': {
    title: 'Plantation Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert roofing services in Plantation. Dual-Licensed Roofing Specialist with superior structural credentials for storm-resistant installations. Call (754) 227-5605.'
  },

  // Priority City: Davie
  'davie': {
    title: 'Davie Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Professional roofing contractor in Davie, FL. Dual-Licensed Roofing Specialist with CCC1331464 & CGC1526236 providing HVHZ-compliant roofing solutions. Call (754) 227-5605.'
  },

  // Priority City: Hollywood
  'hollywood': {
    title: 'Hollywood Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Expert roofing services in Hollywood, FL. Dual-Licensed specialist ensuring structural integrity and HVHZ compliance. Storm-ready installations. Call (754) 227-5605.'
  },

  // Priority City: Pompano Beach
  'pompano-beach': {
    title: 'Pompano Beach Roofing Specialist | Dual-Licensed (CCC/CGC) | All Phase Construction USA',
    description: 'Trusted roofing contractor in Pompano Beach. Dual-Licensed Roofing Specialist providing HVHZ-compliant roof repairs and replacements. Call (754) 227-5605.'
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
