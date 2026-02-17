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
 */
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

  // 5. If the path ends with a slash, 301-redirect to the version without it
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const clean = pathname.replace(/\/+$/, '');
    const target = `${url.origin}${clean}${search}`;
    return new Response(null, {
      status: 301,
      headers: { Location: target },
    });
  }

  // 6. Otherwise, pass through to origin
  return;
}
