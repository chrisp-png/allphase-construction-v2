import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { generateSEOMetadata, CITY_NAMES } from '../config/seoTitles';

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
    const { title, description, canonical, ogTitle, ogDescription, isFallback } = metadata;

    // Preserve prerendered title/description for URLs that have a
    // dist/<slug>/index.html but no explicit React Route + no SEO_TITLES
    // entry. Without this guard, the generic fallback in seoTitles.ts stomps
    // the correct prerendered title in the live DOM during JS-rendered
    // crawls (Googlebot 2026 renders JS; Screaming Frog with rendering=
    // JavaScript renders JS). Manifests as 44 pages all showing
    // "Roofing Contractor | Broward & Palm Beach | All Phase USA".
    const prerenderedTitle =
      typeof window !== 'undefined' ? (window as any).__PRERENDERED_TITLE__ : '';
    const prerenderedDesc =
      typeof window !== 'undefined' ? (window as any).__PRERENDERED_DESC__ : '';

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
    // When isFallback is true (no explicit lookup matched the path), prefer
    // the prerendered title that main.tsx captured before React mounted.
    // This protects every prerendered-but-unrouted URL from title-stomping.
    const titleToApply =
      isFallback && prerenderedTitle ? prerenderedTitle : title;
    if (titleToApply) {
      document.title = titleToApply;
    }

    // FORCE UPDATE META DESCRIPTION
    // Same rule: prefer prerendered description when the SEO lookup fell
    // through to the fallback (which is the same fallback string for every
    // unmatched URL — would otherwise produce duplicate descriptions).
    const descToApply =
      isFallback && prerenderedDesc ? prerenderedDesc : description;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', descToApply);

    // FORCE UPDATE CANONICAL (single owner - no other component emits this tag)
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', normalizedCanonical);

    // FORCE UPDATE OG TAGS (use overrides if provided)
    // Same prerender-preserving rule as <title> and <meta description>.
    updateOrCreateMetaTag('property', 'og:title', ogTitle || titleToApply);
    updateOrCreateMetaTag('property', 'og:description', ogDescription || descToApply);
    updateOrCreateMetaTag('property', 'og:url', normalizedCanonical);
    updateOrCreateMetaTag('property', 'og:type', 'website');
    updateOrCreateMetaTag('property', 'og:site_name', 'All Phase Construction USA');

    // OG:IMAGE - Default branded image for social sharing & AI source cards
    // Pages can override this by setting og:image before NuclearMetadata runs,
    // or by adding ogImage to the SEOMetadata config.
    const defaultOgImage = 'https://allphaseconstructionfl.com/og-image.jpg';
    const existingOgImage = document.querySelector('meta[property="og:image"]');
    if (!existingOgImage || !existingOgImage.getAttribute('content')?.startsWith('http')) {
      updateOrCreateMetaTag('property', 'og:image', defaultOgImage);
      updateOrCreateMetaTag('property', 'og:image:width', '1200');
      updateOrCreateMetaTag('property', 'og:image:height', '630');
      updateOrCreateMetaTag('property', 'og:image:alt', 'All Phase Construction USA - Licensed South Florida Roofing Contractor');
    }

    // FORCE UPDATE TWITTER TAGS (use overrides if provided)
    updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMetaTag('name', 'twitter:title', ogTitle || titleToApply);
    updateOrCreateMetaTag('name', 'twitter:description', ogDescription || descToApply);
    updateOrCreateMetaTag('name', 'twitter:image', defaultOgImage);

    // GLOBAL LOCALBUSINESS SCHEMA (RoofingContractor) is now handled entirely by
    // prerender-static.mjs baseOrgSchema - injected at build time into every page's <head>.
    // Removed React-side injection to eliminate duplicate #organization schemas.
    // --- Service Schema Injection ---
    // Migrated to prerender-static.mjs SERVICE_PAGE_SCHEMAS extraSchemas in PR-42.
    // Per CLAUDE.md §6, schema that must be indexed is generated at build time, not
    // post-hydration. This block was injecting Service schemas via useEffect — Google's
    // initial crawl missed them. The 8 Service schemas (/shingle-roofing, /metal-roofing,
    // /tile-roofing, /flat-roofing, /roof-repair, /roof-replacement, /residential-roofing,
    // /commercial-roofing) now ship in the static HTML alongside FAQ + Breadcrumb schemas.


    // --- BreadcrumbList Schema Injection ---
    // Auto-generate breadcrumbs from URL path for every page
    const BASE = 'https://allphaseconstructionfl.com';
    const breadcrumbItems: { name: string; item: string }[] = [
      { name: 'Home', item: BASE + '/' }
    ];

    const segments = path.split('/').filter(Boolean); // e.g. ['locations', 'wellington', 'best-roofers-wellington']

    // Build breadcrumb trail from URL segments
    const segmentLabels: Record<string, string> = {
      'locations': 'Locations',
      'blog': 'Blog',
      'roof-repair': 'Roof Repair',
      'roof-inspection': 'Roof Inspection',
      'roof-replacement': 'Roof Replacement',
      'residential-roofing': 'Residential Roofing',
      'commercial-roofing': 'Commercial Roofing',
      'shingle-roofing': 'Shingle Roofing',
      'metal-roofing': 'Metal Roofing',
      'tile-roofing': 'Tile Roofing',
      'flat-roofing': 'Flat Roofing',
      'projects': 'Projects',
      'about': 'About',
      'contact': 'Contact',
      'sitemap': 'Sitemap',
      'faq': 'FAQ',
      'pricing-guide': 'Pricing Guide',
      'learning-center': 'Learning Center',
      'how-to-hire-roofing-contractor': 'How to Hire a Roofing Contractor',
      'roof-replacement-process': 'Roof Replacement Process',
    };

    let builtPath = '';
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      builtPath += '/' + seg;

      let label = segmentLabels[seg] || CITY_NAMES[seg] || null;

      // Handle best-roofers-{city} pattern
      if (!label && seg.startsWith('best-roofers-')) {
        const citySlug = seg.replace('best-roofers-', '');
        const cityName = CITY_NAMES[citySlug] || citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        label = `Best Roofers in ${cityName}`;
      }

      // Fallback: humanize slug
      if (!label) {
        label = seg.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      }

      breadcrumbItems.push({ name: label, item: BASE + builtPath });
    }

    // Only inject if we have more than just Home (i.e., not the homepage itself)
    if (breadcrumbItems.length > 1) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: crumb.item
        }))
      };

      let breadcrumbScript = document.querySelector('#breadcrumb-schema-ld') as HTMLScriptElement | null;
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.type = 'application/ld+json';
        breadcrumbScript.id = 'breadcrumb-schema-ld';
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    } else {
      const stale = document.querySelector('#breadcrumb-schema-ld');
      if (stale) stale.remove();
    }

    console.log('[NUCLEAR METADATA] Applied:', { path, title: titleToApply, isFallback: !!isFallback, usedPrerenderTitle: isFallback && !!prerenderedTitle, canonical: normalizedCanonical });
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
