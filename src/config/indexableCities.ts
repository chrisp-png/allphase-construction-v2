/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CITY INDEXING WHITELIST
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This file defines which city pages are allowed to be indexed by search engines.
 *
 * INDEXING STRATEGY:
 * - High-value cities are indexable (index, follow)
 * - All other cities remain noindex, follow
 * - All pages return 200 status (no 404s or redirects)
 * - Canonical URLs always self-reference
 *
 * APPLIES TO:
 * - /locations/:city
 * - /roof-repair/:city
 * - /roof-inspection/:city
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

/**
 * Array of city slugs that should be indexed by search engines
 */
export const INDEXABLE_CITIES: string[] = [
  'boca-raton',
  'deerfield-beach',
  'fort-lauderdale',
  'west-palm-beach',
  'delray-beach',
  'boynton-beach',
  'palm-beach',
  'coconut-creek',
  'coral-springs',
  'wellington',
  'pompano-beach',
  'lake-worth',
  'weston',
  'lauderdale-by-the-sea',
  'wilton-manors'
];

/**
 * Check if a city is in the indexable whitelist
 * @param citySlug - URL slug for the city (e.g., "boca-raton")
 * @returns true if the city should be indexed, false otherwise
 */
export function isCityIndexable(citySlug: string): boolean {
  return INDEXABLE_CITIES.includes(citySlug);
}
