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
 *
 * CANONICAL OWNERSHIP:
 * This is the SINGLE OWNER of <link rel="canonical"> and <meta og:url>.
 * No other component (including SEO.tsx / Helmet) should emit these tags.
 * Policy: NO trailing slash except root "/". Origin + pathname only (no query/hash).
 */
export default function NuclearMetadata() {
  const location = useLocation();

  useEffect(() => {
    const rawPath = location.pathname;

    // Normalize path: strip trailing slash except root
    const path = rawPath === '/' ? '/' : rawPath.replace(/\/+$/, '');

    // Get SEO metadata from centralized configuration
    // For /locations/:slug pages, this now uses src/data/locations.ts and src/lib/locationSeo.ts
    const metadata = generateSEOMetadata(path);
    const { title, description, canonical, ogTitle, ogDescription } = metadata;

    // Normalize canonical URL: origin + pathname only, no trailing slash (except root), no query/hash
    let normalizedCanonical = canonical;
    try {
      const url = new URL(canonical);
      const p = url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, '');
      normalizedCanonical = url.origin + p;
    } catch {
      // If URL parsing fails, keep as-is
    }

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

    // FORCE UPDATE CANONICAL (single owner â no other component emits this tag)
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', normalizedCanonical);

    // FORCE UPDATE OG TAGS (use overrides if provided)
    updateOrCreateMetaTag('property', 'og:title', ogTitle || title);
    updateOrCreateMetaTag('property', 'og:description', ogDescription || description);
    updateOrCreateMetaTag('property', 'og:url', normalizedCanonical);
    updateOrCreateMetaTag('property', 'og:type', 'website');

    // FORCE UPDATE TWITTER TAGS (use overrides if provided)
    updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMetaTag('name', 'twitter:title', ogTitle || title);
    updateOrCreateMetaTag('name', 'twitter:description', ogDescription || description);

    // GLOBAL LOCALBUSINESS SCHEMA (RoofingContractor) is now handled entirely by
    // prerender-static.mjs baseOrgSchema — injected at build time into every page's <head>.
    // Removed React-side injection to eliminate duplicate #organization schemas.
    // --- Service Schema Injection for service pages ---
    const serviceSchemaData: Record<string, object> = {
      '/shingle-roofing': {
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Shingle Roofing Installation', serviceType: 'Roof Installation',
        description: 'HVHZ-certified asphalt shingle roofing installation for Broward and Palm Beach County homes. Impact-rated systems, Florida Building Code compliant.',
        provider: { '@id': 'https://allphaseconstructionfl.com/#organization' },
        areaServed: { '@type': 'AdministrativeArea', name: 'Broward and Palm Beach County, Florida' },
        url: 'https://allphaseconstructionfl.com/shingle-roofing',
        offers: { '@type': 'Offer', priceCurrency: 'USD', priceRange: '$8-$12 per sq ft', availability: 'https://schema.org/InStock' }
      },
      '/metal-roofing': {
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Metal Roofing Installation', serviceType: 'Roof Installation',
        description: 'Standing seam and metal panel roofing systems for South Florida. 40-70 year lifespan, hurricane-rated, HVHZ compliant.',
        provider: { '@id': 'https://allphaseconstructionfl.com/#organization' },
        areaServed: { '@type': 'AdministrativeArea', name: 'Broward and Palm Beach County, Florida' },
        url: 'https://allphaseconstructionfl.com/metal-roofing',
        offers: { '@type': 'Offer', priceCurrency: 'USD', priceRange: '$12-$20 per sq ft', availability: 'https://schema.org/InStock' }
      },
      '/tile-roofing': {
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Tile Roofing Installation', serviceType: 'Roof Installation',
        description: 'Concrete and clay tile roofing for South Florida homes. HOA-approved, HVHZ-rated, 30-50 year lifespan.',
        provider: { '@id': 'https://allphaseconstructionfl.com/#organization' },
        areaServed: { '@type': 'AdministrativeArea', name: 'Broward and Palm Beach County, Florida' },
        url: 'https://allphaseconstructionfl.com/tile-roofing',
        offers: { '@type': 'Offer', priceCurrency: 'USD', priceRange: '$10-$18 per sq ft', availability: 'https://schema.org/InStock' }
      },
      '/flat-roofing': {
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Flat Roofing Installation', serviceType: 'Roof Installation',
        description: 'PVC and TPO flat roofing systems for South Florida residential and commercial properties. HVHZ-compliant, UV-resistant.',
        provider: { '@id': 'https://allphaseconstructionfl.com/#organization' },
        areaServed: { '@type': 'AdministrativeArea', name: 'Broward and Palm Beach County, Florida' },
        url: 'https://allphaseconstructionfl.com/flat-roofing',
        offers: { '@type': 'Offer', priceCurrency: 'USD', priceRange: '$8-$14 per sq ft', availability: 'https://schema.org/InStock' }
      },
      '/roof-repair': {
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Roof Repair Services', serviceType: 'Roof Repair',
        description: 'Emergency and scheduled roof repair for Broward and Palm Beach County. Leak repairs, storm damage, flashing, and HVHZ-compliant patch work.',
        provider: { '@id': 'https://allphaseconstructionfl.com/#organization' },
        areaServed: { '@type': 'AdministrativeArea', name: 'Broward and Palm Beach County, Florida' },
        url: 'https://allphaseconstructionfl.com/roof-repair'
      },
      '/roof-replacement': {
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Roof Replacement', serviceType: 'Roof Replacement',
        description: 'Full roof replacement for South Florida homes. Shingle, tile, and metal systems. HVHZ-certified, dual-licensed contractor.',
        provider: { '@id': 'https://allphaseconstructionfl.com/#organization' },
        areaServed: { '@type': 'AdministrativeArea', name: 'Broward and Palm Beach County, Florida' },
        url: 'https://allphaseconstructionfl.com/roof-replacement'
      },
      '/residential-roofing': {
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Residential Roofing Services', serviceType: 'Residential Roofing',
        description: 'Complete residential roofing services for Broward and Palm Beach County. Replacement, repair, and maintenance by dual-licensed HVHZ-certified contractor.',
        provider: { '@id': 'https://allphaseconstructionfl.com/#organization' },
        areaServed: { '@type': 'AdministrativeArea', name: 'Broward and Palm Beach County, Florida' },
        url: 'https://allphaseconstructionfl.com/residential-roofing'
      },
      '/commercial-roofing': {
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Commercial Roofing Services', serviceType: 'Commercial Roofing',
        description: 'Commercial flat and low-slope roofing for Broward and Palm Beach County. PVC, TPO, and modified bitumen systems. CGC-licensed contractor.',
        provider: { '@id': 'https://allphaseconstructionfl.com/#organization' },
        areaServed: { '@type': 'AdministrativeArea', name: 'Broward and Palm Beach County, Florida' },
        url: 'https://allphaseconstructionfl.com/commercial-roofing'
      }
    };
    const cleanPath = location.pathname.replace(/\/$/, '');
    const serviceData = serviceSchemaData[cleanPath];
    if (serviceData) {
      let serviceScript = document.querySelector('#service-schema-ld') as HTMLScriptElement | null;
      if (!serviceScript) {
        serviceScript = document.createElement('script');
        serviceScript.type = 'application/ld+json';
        serviceScript.id = 'service-schema-ld';
        document.head.appendChild(serviceScript);
      }
      serviceScript.textContent = JSON.stringify(serviceData);
    } else {
      const stale = document.querySelector('#service-schema-ld');
      if (stale) stale.remove();
    }

    console.log('[NUCLEAR METADATA] Applied:', { path, title, canonical: normalizedCanonical });
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
