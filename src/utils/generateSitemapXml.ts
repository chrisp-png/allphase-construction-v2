/**
 * âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 * â ï¸  STRUCTURE LOCKED — DO NOT MODIFY WITHOUT SEO REVIEW
 * âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 *
 * This utility generates the XML sitemap from sheetSitemap.ts
 *
 * ANY modifications to this file require:
 * 1. Full SEO impact review
 * 2. XML sitemap regeneration (npm run generate-sitemap)
 * 3. Verification that output matches Google sitemap standards
 * 4. QA audit verification (/qa/sitemap-audit)
 *
 * CRITICAL: The CANONICAL_DOMAIN must remain exactly as configured:
 * - https://allphaseconstructionfl.com (NO www subdomain)
 *
 * âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 */

import { getIndexableRoutes } from '../data/sheetSitemap';

const CANONICAL_DOMAIN = 'https://allphaseconstructionfl.com';

/**
 * Generates an XML sitemap from sheetSitemap.ts data
 *
 * @returns XML string in sitemap format
 */
export function generateSitemapXml(): string {
  const indexableRoutes = getIndexableRoutes();

  const urlEntries = indexableRoutes.map(entry => {
    const url = `${CANONICAL_DOMAIN}${entry.path}`;

    let urlEntry = `  <url>\n`;
    urlEntry += `    <loc>${url}</loc>\n`;

    if (entry.changefreq) {
      urlEntry += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    }

    if (entry.priority !== undefined) {
      urlEntry += `    <priority>${entry.priority.toFixed(1)}</priority>\n`;
    }

    urlEntry += `  </url>`;

    return urlEntry;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return xml;
}

/**
 * Get statistics about the sitemap
 */
export function getSitemapStats() {
  const indexableRoutes = getIndexableRoutes();

  return {
    totalUrls: indexableRoutes.length,
    byChangefreq: {
      daily: indexableRoutes.filter(r => r.changefreq === 'daily').length,
      weekly: indexableRoutes.filter(r => r.changefreq === 'weekly').length,
      monthly: indexableRoutes.filter(r => r.changefreq === 'monthly').length,
      yearly: indexableRoutes.filter(r => r.changefreq === 'yearly').length,
    },
    byPriority: {
      high: indexableRoutes.filter(r => (r.priority || 0) >= 0.8).length,
      medium: indexableRoutes.filter(r => (r.priority || 0) >= 0.5 && (r.priority || 0) < 0.8).length,
      low: indexableRoutes.filter(r => (r.priority || 0) < 0.5).length,
    }
  };
}
