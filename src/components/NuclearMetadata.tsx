import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { generateSEOMetadata } from '../config/seoTitles';

/**
 * NUCLEAR METADATA SYSTEM
 *
 * This component FORCE-INJECTS metadata on every single route change.
 * Uses the centralized SEO titles configuration for consistency with
 * build-time prerendering.
 *
 * This runs BEFORE any other component can interfere with the title.
 */
export default function NuclearMetadata() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Get SEO metadata from centralized configuration
    const metadata = generateSEOMetadata(path);
    const { title, description, canonical } = metadata;

    // FORCE UPDATE DOCUMENT TITLE - NO DELAYS
    if (title) {
      document.title = title;
    }

    // FORCE UPDATE META DESCRIPTION
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // FORCE UPDATE CANONICAL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // FORCE UPDATE OG TAGS
    updateOrCreateMetaTag('property', 'og:title', title);
    updateOrCreateMetaTag('property', 'og:description', description);
    updateOrCreateMetaTag('property', 'og:url', canonical);
    updateOrCreateMetaTag('property', 'og:type', 'website');

    // FORCE UPDATE TWITTER TAGS
    updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMetaTag('name', 'twitter:title', title);
    updateOrCreateMetaTag('name', 'twitter:description', description);

    console.log('[NUCLEAR METADATA] Applied:', { path, title });
  }, [location.pathname]);

  return null;
}

// Helper function to update or create meta tags
function updateOrCreateMetaTag(attr: string, value: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${value}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, value);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
