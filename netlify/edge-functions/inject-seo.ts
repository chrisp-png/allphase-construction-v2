/**
 * SEO Metadata Injection Edge Function
 *
 * Dynamically injects city-specific SEO metadata into HTML head for service area pages.
 * This ensures bots/crawlers see the correct metadata in view-source (SSR).
 *
 * - Runs before the response is sent to the client
 * - Dynamically generates metadata based on city slug
 * - Handles 40+ cities automatically
 * - Works for both bots and regular users
 * - Client-side React Helmet still works for navigation
 */

import type { Context } from "https://edge.netlify.com";
import { cityNameMapping } from "./city-mapping.ts";

interface SEOData {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

/**
 * Generate SEO metadata for a city service area page
 */
function generateCitySEO(cityName: string): SEOData {
  const title = `Roof Inspection in ${cityName} for Repairs & Replacement | All Phase`;
  const description = `Get a professional roof inspection in ${cityName} to determine repair needs, replacement options, and insurance documentation before you decide.`;

  return {
    title,
    description,
    ogTitle: title,
    ogDescription: description,
  };
}

/**
 * Extract city slug from service area path
 * Matches: /locations/deerfield-beach/service-area/{citySlug}/ or without trailing slash
 */
function extractCitySlug(pathname: string): string | null {
  const match = pathname.match(/^\/locations\/deerfield-beach\/service-area\/([^\/]+)\/?$/);
  return match ? match[1] : null;
}

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Check if this is a city service area page
  const citySlug = extractCitySlug(pathname);

  if (!citySlug) {
    // Not a city service area page, continue normally
    return context.next();
  }

  // Look up the city name
  const cityName = cityNameMapping[citySlug];

  if (!cityName) {
    // Unknown city, continue normally (fallback to client-side SEO)
    return context.next();
  }

  // Generate SEO data for this city
  const seoData = generateCitySEO(cityName);

  // Fetch the response from origin
  const response = await context.next();

  // Only process HTML responses
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('text/html')) {
    return response;
  }

  // Get the HTML content
  let html = await response.text();

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/is,
    `<title>${seoData.title}</title>`
  );

  // Replace meta description - more flexible regex
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/gi,
    `<meta name="description" content="${seoData.description}" />`
  );

  // Replace og:title - more flexible regex
  const ogTitle = seoData.ogTitle || seoData.title;
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/gi,
    `<meta property="og:title" content="${ogTitle}" />`
  );

  // Replace og:description - more flexible regex
  const ogDescription = seoData.ogDescription || seoData.description;
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/gi,
    `<meta property="og:description" content="${ogDescription}" />`
  );

  // Replace twitter:title - more flexible regex
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/gi,
    `<meta name="twitter:title" content="${ogTitle}" />`
  );

  // Replace twitter:description - more flexible regex
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/gi,
    `<meta name="twitter:description" content="${ogDescription}" />`
  );

  // Return modified HTML with proper headers
  return new Response(html, {
    status: response.status,
    headers: response.headers,
  });
};
