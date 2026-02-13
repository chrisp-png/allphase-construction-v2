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
  canonicalPath?: string;
  ogImagePath?: string;
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  canonicalPath,
  ogImagePath,
  noindex = false,
}: SEOProps) {
  const canonicalUrl = canonicalPath ? absUrl(canonicalPath) : undefined;
  const ogImageUrl = ogImagePath ? absUrl(ogImagePath) : undefined;

  return (
    <Helmet>
      {/* Primary */}
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}

      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,follow' : 'index,follow'} />

      {/* Canonical */}
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
      {ogImageUrl ? <meta property="og:image" content={ogImageUrl} /> : null}

      {/* Twitter (optional but clean) */}
      <meta name="twitter:card" content={ogImageUrl ? 'summary_large_image' : 'summary'} />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      {ogImageUrl ? <meta name="twitter:image" content={ogImageUrl} /> : null}
    </Helmet>
  );
}
