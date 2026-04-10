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
  const description = (window as any).__PRERENDERED_DESC__ || '';

  if (!html) return null;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <div
        id="seo-static"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
