import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  noindex?: boolean;
  schema?: object | object[];
}

export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  noindex = false,
  schema
}: SEOProps) {
  const fullTitle = title.includes('All Phase') ? title : `${title} | All Phase Construction`;

  // SELF-REFERENCING CANONICAL: Always use current pathname unless explicitly overridden
  // This ensures each page points to itself, not the homepage
  const currentPath = window.location.pathname;
  const canonicalUrl = canonical || `https://allphaseconstructionfl.com${currentPath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}

      {/* Self-Referencing Canonical - Each page points to itself */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
}
