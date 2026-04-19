import { Helmet } from 'react-helmet-async';

function absUrl(pathOrUrl?: string): string | undefined {
  if (!pathOrUrl) return undefined;
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) return pathOrUrl;
  const origin =
    (typeof window !== 'undefined' && window.location && window.location.origin)
      ? window.location.origin
      : '';
  return origin + pathOrUrl;
}

interface SEOProps {
  title?: string;
  description?: string;
  /** @deprecated Canonical is now managed solely by NuclearMetadata. This prop is ignored. */
  canonicalPath?: string;
  ogImagePath?: string;
  /** @deprecated Robots tag is now managed solely by prerender + NoIndexMeta. This prop is ignored. */
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Per-page SEO overrides via react-helmet-async.
 *
 * CANONICAL OWNERSHIP: NuclearMetadata.tsx is the single owner of
 * <link rel="canonical"> and <meta property="og:url">.
 * This component intentionally does NOT emit either tag to prevent
 * duplicate canonical / og:url entries and race conditions.
 */
export default function SEO({
  title,
  description,
  // canonicalPath is accepted but ignored â NuclearMetadata owns canonical
  canonicalPath: _canonicalPath,
  ogImagePath,
  // noindex is accepted but ignored â use <NoIndexMeta /> which upserts via setAttribute
  noindex: _noindex = false,
  schema,
}: SEOProps) {
  void _canonicalPath;
  void _noindex;
  const ogImageUrl = ogImagePath ? absUrl(ogImagePath) : undefined;

  return (
    <Helmet>
      {/* Primary */}
      {/* title owned by NuclearMetadata - SEO component no longer sets this */}
      {/* desc owned by NuclearMetadata - SEO component no longer sets this */}

      {/* NOTE: <meta name="robots"> is NOT set here.
          The prerender (scripts/prerender-static.mjs) emits the correct robots
          tag into every page's <head>. Emitting one here caused react-helmet-async
          to append a data-rh="true" duplicate on every SEO-using route (129 dupes
          in the post-JS-render Screaming Frog crawl). If a page needs noindex,
          use the <NoIndexMeta /> component (which upserts via setAttribute). */}

      {/* NOTE: <link rel="canonical"> and <meta og:url> are NOT set here.
          NuclearMetadata.tsx is the single owner â see comment above. */}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {ogImageUrl ? <meta property="og:image" content={ogImageUrl} /> : null}

      {/* Twitter (optional but clean) */}
      <meta name="twitter:card" content={ogImageUrl ? 'summary_large_image' : 'summary'} />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      {ogImageUrl ? <meta name="twitter:image" content={ogImageUrl} /> : null}

      {/* Schema.org JSON-LD */}
      {schema ? (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      ) : null}
    </Helmet>
  );
}
