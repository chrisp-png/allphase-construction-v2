import { Helmet } from 'react-helmet-async';

/**
 * Renders prerendered static HTML (geo/community pages) inside the
 * normal site layout.  main.tsx saves the HTML before React wipes
 * the DOM; this component re-injects it so the page gets the full
 * Header / Footer / Nav chrome that every other page has.
 */
export default function StaticContentPage() {
  const html = (window as any).__PRERENDERED_HTML__ || '';
  const title = (window as any).__PRERENDERED_TITLE__ || '';
  // __PRERENDERED_DESC__ is captured by main.tsx but intentionally not used here.
  // NuclearMetadata + the prerendered <meta name="description"> in <head> own it.

  if (!html) return null;

  // NOTE: We intentionally do NOT emit <meta name="description"> here.
  // The prerendered HTML already contains the correct <meta name="description">
  // in <head>, and NuclearMetadata keeps it fresh via setAttribute upsert.
  // Emitting one via Helmet caused react-helmet-async to append a
  // data-rh="true" duplicate on every catch-all route (48 dupes in the
  // post-JS-render Screaming Frog crawl).
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div
        id="seo-static"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
