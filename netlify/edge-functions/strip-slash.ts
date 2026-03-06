import type { Context } from 'https://edge.netlify.com';

/**
 * Edge function to strip trailing slashes from all URLs.
 * Netlify's CDN normalises URLs before redirect rules fire,
 * so _redirects / [[redirects]] CANNOT add or remove trailing slashes.
 * This edge function intercepts the request at the edge and issues
 * a 301 redirect before the origin ever sees the trailing-slash URL.
 *
 * Policy: NO trailing slash except root "/".
 * Skips: static assets, sitemap.xml, robots.txt, _redirects, /_next, etc.
 *
 * Dead-route map: When a trailing-slash URL matches a known dead route,
 * redirect directly to the final canonical target (single-hop 301).
 */

// Dead / renamed routes that have redirect rules in _redirects.
// Map the path (without trailing slash) to its final canonical target.
// This prevents double-hop chains (edge strips slash → _redirects remaps).
const DEAD_ROUTES: Record<string, string> = {
  '/financing': '/easy-payments',
  '/about': '/about-us',
  '/services': '/residential-roofing',
  '/service-areas': '/locations',
  '/gallery': '/projects',
  '/testimonials': '/reviews',
  '/roof-types': '/residential-roofing',
  '/estimate': '/contact',
  '/free-estimate': '/contact',
  '/quote': '/contact',
  '/blog/why-choose-tile-roofing-in-south-florida': '/blog',
  '/blog/are-there-any-benefits-to-dark-colored-roof-shingles-in-south-florida': '/blog',
  '/blog/bug-free-summers-the-best-screens-for-insect-protection': '/blog',
  '/blog/happy-thanksgiving-from-all-of-us-at-all-phase-construction-usa-llc': '/blog',
  '/blog/how-long-does-it-take-to-get-a-roof-permit-in-south-florida': '/blog',
  '/blog/how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid': '/blog',
  '/blog/choosing-between-roof-repair-and-full-replacement': '/blog',
};

export default async function handler(
  request: Request,
  context: Context
) {
  const url = new URL(request.url);
  const { pathname, search } = url;

  // 1. Never touch root
  if (pathname === '/') return;

  // 2. Skip if this is already a proxied sub-request (avoid loops)
  if (request.headers.get('x-nf-sub-request')) return;

  // 3. Skip known static asset extensions & files that must not redirect
  const SKIP_EXTENSIONS = [
    '.html', '.xml', '.txt', '.json', '.js', '.css', '.map',
    '.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.svg', '.ico',
    '.woff', '.woff2', '.ttf', '.eot', '.otf',
    '.mp4', '.webm', '.pdf',
  ];
  const lower = pathname.toLowerCase();
  if (SKIP_EXTENSIONS.some((ext) => lower.endsWith(ext))) return;

  // 4. Skip paths that start with known asset/internal prefixes
  if (
    lower.startsWith('/assets/') ||
    lower.startsWith('/.netlify/') ||
    lower.startsWith('/_next/')
  ) {
    return;
  }

  // 5. If the path ends with a slash, check dead-route map first
  //    to redirect directly to the final target (single-hop).
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const clean = pathname.replace(/\/+$/, '');

    // Check if the cleaned path is a known dead route
    const finalTarget = DEAD_ROUTES[clean];
    if (finalTarget) {
      const target = `${url.origin}${finalTarget}`;
      return new Response(null, {
        status: 301,
        headers: { Location: target },
      });
    }

    // Otherwise just strip the trailing slash
    const target = `${url.origin}${clean}${search}`;
    return new Response(null, {
      status: 301,
      headers: { Location: target },
    });
  }

  // 6. Otherwise, pass through to origin
  return;
}
