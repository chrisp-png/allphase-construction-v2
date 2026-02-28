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
  // canonicalPath is accepted but ignored — NuclearMetadata owns canonical
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canonicalPath,
  ogImagePath,
  noindex = false,
  schema,
}: SEOProps) {
  const ogImageUrl = ogImagePath ? absUrl(ogImagePath) : undefined;

  return (
    <Helmet>
      {/* Primary */}
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}

      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,follow' : 'index,follow'} />

      {/* NOTE: <link rel="canonical"> and <meta og:url> are NOT set here.
          NuclearMetadata.tsx is the single owner — see comment above. */}

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
