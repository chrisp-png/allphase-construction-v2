/**
 * URL Case Normalization Edge Function
 *
 * Ensures all URLs are lowercase for consistent URL structure and SEO.
 *
 * - Runs on every request at the edge (before _redirects)
 * - Checks if pathname contains uppercase letters
 * - Redirects to lowercase version with 301 (permanent)
 * - Preserves query strings and hash fragments
 * - Avoids redirect chains by integrating early in request pipeline
 */

import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const { pathname } = url;

  // Check if pathname contains any uppercase letters
  const hasUppercase = /[A-Z]/.test(pathname);

  if (hasUppercase) {
    // Convert pathname to lowercase
    const lowercasePathname = pathname.toLowerCase();

    // Construct the new URL with lowercase path
    const redirectUrl = new URL(request.url);
    redirectUrl.pathname = lowercasePathname;

    // Return 301 permanent redirect to lowercase version
    return new Response(null, {
      status: 301,
      headers: {
        'Location': redirectUrl.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  // No uppercase letters found - continue to origin
  return context.next();
};
