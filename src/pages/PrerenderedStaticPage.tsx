/**
 * PrerenderedStaticPage — Placeholder component for pages that are fully
 * prerendered by scripts/prerender-static.mjs.
 *
 * When Netlify serves a prerendered HTML file, the SEO content lives inside
 * the #seo-static div.  This component simply gives React Router a valid
 * route match so the SPA doesn't render the 404 page and overwrite that
 * static content.
 *
 * Used for: 14 new best-roofers city pages that don't have dedicated React
 * components yet.
 */
export default function PrerenderedStaticPage() {
  // Return null — the prerendered #seo-static content is already in the DOM
  return null;
}
