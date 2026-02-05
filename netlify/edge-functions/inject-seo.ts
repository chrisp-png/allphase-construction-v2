/**
 * SEO Metadata Injection Edge Function
 *
 * Injects page-specific SEO metadata into the HTML head for specific routes.
 * This ensures bots/crawlers see the correct metadata in view-source (SSR).
 *
 * - Runs before the response is sent to the client
 * - Replaces default meta tags with page-specific ones
 * - Works for both bots and regular users
 * - Client-side React Helmet still works for navigation
 */

import type { Context } from "https://edge.netlify.com";

// Define page-specific SEO overrides
const seoOverrides: Record<string, {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}> = {
  '/locations/deerfield-beach/service-area/boca-raton': {
    title: 'Roof Inspection in Boca Raton for Repairs & Replacement | All Phase',
    description: 'Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.',
    ogTitle: 'Roof Inspection in Boca Raton for Repairs & Replacement | All Phase',
    ogDescription: 'Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.',
  },
  '/locations/deerfield-beach/service-area/boca-raton/': {
    title: 'Roof Inspection in Boca Raton for Repairs & Replacement | All Phase',
    description: 'Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.',
    ogTitle: 'Roof Inspection in Boca Raton for Repairs & Replacement | All Phase',
    ogDescription: 'Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.',
  },
};

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Check if this path has SEO overrides
  const seoData = seoOverrides[pathname];

  if (!seoData) {
    // No override for this path, continue normally
    return context.next();
  }

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
