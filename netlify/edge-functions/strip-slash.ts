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
  '/blog/choosing-between-roof-repair-and-full-replacement': '/blog',
};

// WordPress artifact prefixes that should return 410 Gone.
// Tells Googlebot these resources are permanently removed.
const GONE_PREFIXES = [
  '/wp-content/',
  '/wp-admin/',
  '/wp-includes/',
  '/wp-json/',
];

// Exact paths that should return 410 Gone.
const GONE_EXACT = new Set([
  '/wp-login.php',
  '/xmlrpc.php',
  '/feed',
  '/feed/',
]);

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

  // 3. Return 410 Gone for dead WordPress artifacts
  //    Must fire before static-asset skip so /wp-content/*.jpg gets caught
  const lowerPath = pathname.toLowerCase();
  if (
    GONE_EXACT.has(lowerPath) ||
    GONE_PREFIXES.some((prefix) => lowerPath.startsWith(prefix))
  ) {
    return new Response(
      '<html><head><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This resource has been permanently removed.</p></body></html>',
      {
        status: 410,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    );
  }

  // 4. Skip known static asset extensions & files that must not redirect
  const SKIP_EXTENSIONS = [
    '.html', '.xml', '.txt', '.json', '.js', '.css', '.map',
    '.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.svg', '.ico',
    '.woff', '.woff2', '.ttf', '.eot', '.otf',
    '.mp4', '.webm', '.pdf',
  ];
  const lower = pathname.toLowerCase();
  if (SKIP_EXTENSIONS.some((ext) => lower.endsWith(ext))) return;

  // 5. Skip paths that start with known asset/internal prefixes
  if (
    lower.startsWith('/assets/') ||
    lower.startsWith('/.netlify/') ||
    lower.startsWith('/_next/')
  ) {
    return;
  }

  // 6. If the path ends with a slash, check dead-route map first
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

  // 7. Otherwise, pass through to origin
  return;
}
