# Location SEO Override Fix - Complete

## Problem Identified

The `NuclearMetadata` component was force-injecting homepage default metadata on every route change, overriding the location-specific SEO tags set by individual page components. This caused all `/locations/:slug` pages to show generic homepage titles and descriptions instead of city-specific content.

## Root Cause

1. `NuclearMetadata` component runs globally and force-updates DOM metadata
2. It called `generateSEOMetadata(path)` which had no handler for `/locations/:slug` routes
3. For unmatched routes, it fell back to homepage defaults
4. This DOM manipulation happened AFTER Helmet set page-specific tags, overriding them

## Solution Applied

### 1. Extended SEO Metadata Interface

**File:** `src/config/seoTitles.ts`

Added optional Open Graph fields to support location-specific overrides:

```typescript
export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;        // NEW
  ogDescription?: string;  // NEW
}
```

### 2. Integrated Location SEO Builder

**File:** `src/config/seoTitles.ts`

Added imports and location handler to `generateSEOMetadata()`:

```typescript
import { getLocationBySlug } from '../data/locations';
import { buildLocationSeo } from '../lib/locationSeo';

// Inside generateSEOMetadata():
if (normalizedPath.startsWith('/locations/') && normalizedPath !== '/locations') {
  const slug = normalizedPath.replace('/locations/', '').replace(/\/$/, '');
  const location = getLocationBySlug(slug);
  if (location) {
    const seo = buildLocationSeo(location);
    return {
      title: seo.title,
      description: seo.description,
      canonical: seo.canonical,
      ogTitle: seo.ogTitle,
      ogDescription: seo.ogDescription
    };
  }
}
```

### 3. Updated NuclearMetadata to Use OG Overrides

**File:** `src/components/NuclearMetadata.tsx`

Modified to use `ogTitle` and `ogDescription` when provided:

```typescript
const { title, description, canonical, ogTitle, ogDescription } = metadata;

// Use overrides for Open Graph
updateOrCreateMetaTag('property', 'og:title', ogTitle || title);
updateOrCreateMetaTag('property', 'og:description', ogDescription || description);
```

## How It Works Now

### For Deerfield Beach (with custom overrides):

1. `NuclearMetadata` calls `generateSEOMetadata('/locations/deerfield-beach')`
2. It detects the `/locations/:slug` pattern
3. It calls `getLocationBySlug('deerfield-beach')`
4. It gets the location with custom overrides:
   ```typescript
   {
     slug: "deerfield-beach",
     city: "Deerfield Beach",
     state: "FL",
     titleOverride: "Deerfield Beach Roofing Contractor | All Phase Construction USA",
     ogDescriptionOverride: "Licensed Deerfield Beach roofing contractor..."
   }
   ```
5. `buildLocationSeo()` applies the overrides
6. `NuclearMetadata` force-injects the correct metadata

### For Other Cities (template-based):

1. Same process but without overrides
2. Uses template: `"{City} Roofing Contractor | All Phase Construction USA"`
3. Description template with city/state substitution
4. Standard canonical URL pattern

## Verification Results

### Deerfield Beach (HQ with overrides)
```html
<title>Deerfield Beach Roofing Contractor | All Phase Construction USA</title>
<meta name="description" content="All Phase Construction USA is a licensed roofing contractor serving Deerfield Beach, FL. We provide HVHZ-compliant metal, tile, and shingle roofing installation, replacement, and repair.">
<link rel="canonical" href="https://allphaseconstructionfl.com/locations/deerfield-beach">
<meta property="og:title" content="Deerfield Beach Roofing Contractor | All Phase Construction USA">
<meta property="og:description" content="Licensed Deerfield Beach roofing contractor specializing in hurricane-compliant installations and repairs.">
<meta property="og:url" content="https://allphaseconstructionfl.com/locations/deerfield-beach">
```

### Fort Lauderdale (template-based)
```html
<title>Fort Lauderdale Roofing Contractor | All Phase Construction USA</title>
<link rel="canonical" href="https://allphaseconstructionfl.com/locations/fort-lauderdale">
```

### Boca Raton (template-based)
```html
<title>Boca Raton Roofing Contractor | All Phase Construction USA</title>
<link rel="canonical" href="https://allphaseconstructionfl.com/locations/boca-raton">
```

### Homepage (UNCHANGED)
```html
<title>Roofing Contractor — All Phase Construction USA | Broward & Palm Beach</title>
<link rel="canonical" href="https://allphaseconstructionfl.com">
<meta property="og:url" content="https://allphaseconstructionfl.com">
```

## Files Modified

1. ✅ `src/config/seoTitles.ts` - Added imports, extended interface, added location handler
2. ✅ `src/components/NuclearMetadata.tsx` - Updated to use OG overrides

## Benefits

✅ **No More Homepage Defaults on Location Pages** - Each city gets its own metadata
✅ **Overrides Work Correctly** - Deerfield Beach custom OG description now appears
✅ **Single Source of Truth Respected** - All metadata comes from `locations.ts`
✅ **Homepage Untouched** - Homepage SEO remains exactly as before
✅ **Prerendering Works** - Static HTML contains correct metadata
✅ **Live Routes Work** - React pages show correct metadata after hydration

## How It Integrates

```
┌─────────────────────────────────────────────────┐
│         NuclearMetadata Component               │
│         (runs on every route change)            │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│      generateSEOMetadata(path)                  │
│      (src/config/seoTitles.ts)                  │
└────────────────┬────────────────────────────────┘
                 │
                 ├─► Static routes → SEO_TITLES object
                 │
                 ├─► /locations/:slug → getLocationBySlug()
                 │                       ↓
                 │                   buildLocationSeo()
                 │                       ↓
                 │              src/data/locations.ts
                 │              (single source of truth)
                 │
                 ├─► /blog/:slug → Blog template
                 │
                 └─► Unknown → Homepage fallback
```

## Result

Location pages now display correct city-specific metadata in:
- Prerendered static HTML (for bots and initial load)
- Live React pages (after client-side hydration)
- Open Graph tags (for social sharing)
- Twitter Card tags (for Twitter sharing)

All metadata comes from the single source of truth in `src/data/locations.ts` with optional per-city overrides.
