# Location SEO Refactor - Single Source of Truth

## Overview

Successfully refactored `/locations/:slug` pages to use a **single source of truth** for SEO metadata, eliminating metadata drift between live routes and prerendering.

## What Changed

### 1. Created Centralized Location Data

**File:** `src/data/locations.ts`

- Single array of all location objects
- Each location includes: `slug`, `city`, `state`
- Optional per-city overrides: `titleOverride`, `descriptionOverride`, `ogTitleOverride`, `ogDescriptionOverride`, etc.
- Special configuration for Deerfield Beach HQ with custom SEO overrides

### 2. Created Location SEO Builder

**File:** `src/lib/locationSeo.ts`

- `buildLocationSeo(location)` - generates complete SEO metadata for any location
- Default templates: `{city} Roofing Contractor | All Phase Construction USA`
- Description template: `All Phase Construction USA is a licensed roofing contractor serving {city}, {state}. We provide HVHZ-compliant metal, tile, and shingle roofing installation, replacement, and repair.`
- Applies overrides when provided
- Generates consistent canonical URLs, robots meta, and Open Graph tags

### 3. Updated Location Pages to Use New System

**File:** `src/pages/locations/DeerfieldBeachCityPage.tsx`

- Now imports from `src/data/locations.ts` and `src/lib/locationSeo.ts`
- Gets location by slug: `getLocationBySlug('deerfield-beach')`
- Builds SEO: `buildLocationSeo(location)`
- All Helmet tags now use SEO object properties
- Zero hardcoded metadata

### 4. Updated Prerender Script

**File:** `scripts/prerender-static.mjs`

- Loads and parses `src/data/locations.ts` at build time
- Implements matching `buildLocationSeo()` logic
- Removed old location SEO from `getSEOMetadata()` function
- Generates `/locations/:slug` pages from LOCATIONS array
- Each prerendered page uses same SEO builder logic as live route

### 5. Removed Dual Sources of Truth

**Files:** `scripts/seo-titles.json`, `src/config/seoTitles.ts`

- Removed `/locations/deerfield-beach` entry (now comes from `locations.ts`)
- These files now handle only non-location pages (services, blog, etc.)
- Homepage SEO remains unchanged and separate

## How It Works

### Adding a New Location (Future)

To add a new city page, simply add one entry to `src/data/locations.ts`:

```typescript
{ slug: "miami", city: "Miami", state: "FL" }
```

That's it! The location will automatically get:
- Live route at `/locations/miami`
- Prerendered static HTML
- Template-based SEO: "Miami Roofing Contractor | All Phase Construction USA"
- Consistent metadata across live and prerendered versions

### Adding Custom SEO (Optional)

For special locations (like HQ), provide overrides:

```typescript
{
  slug: "deerfield-beach",
  city: "Deerfield Beach",
  state: "FL",
  titleOverride: "Deerfield Beach Roofing Contractor | All Phase Construction USA",
  ogDescriptionOverride: "Licensed Deerfield Beach roofing contractor specializing in hurricane-compliant installations and repairs."
}
```

## Verification Results

### Deerfield Beach (HQ with custom overrides)
```html
<title>Deerfield Beach Roofing Contractor | All Phase Construction USA</title>
<meta name="description" content="All Phase Construction USA is a licensed roofing contractor serving Deerfield Beach, FL. We provide HVHZ-compliant metal, tile, and shingle roofing installation, replacement, and repair.">
<meta property="og:description" content="Licensed Deerfield Beach roofing contractor specializing in hurricane-compliant installations and repairs.">
```

### Boca Raton (template-based)
```html
<title>Boca Raton Roofing Contractor | All Phase Construction USA</title>
<meta name="description" content="All Phase Construction USA is a licensed roofing contractor serving Boca Raton, FL. We provide HVHZ-compliant metal, tile, and shingle roofing installation, replacement, and repair.">
```

### Fort Lauderdale (template-based)
```html
<title>Fort Lauderdale Roofing Contractor | All Phase Construction USA</title>
<meta name="description" content="All Phase Construction USA is a licensed roofing contractor serving Fort Lauderdale, FL. We provide HVHZ-compliant metal, tile, and shingle roofing installation, replacement, and repair.">
```

## Benefits

✅ **No More Metadata Drift** - Live routes and prerendering use the exact same source of truth
✅ **Easy to Maintain** - All location SEO in one file
✅ **Easy to Add Cities** - One array entry = complete city page with SEO
✅ **Consistent Templates** - Default SEO follows proven pattern
✅ **Flexible Overrides** - Special cases (HQ) can customize any field
✅ **Type Safety** - TypeScript interfaces ensure data consistency
✅ **Homepage Untouched** - Homepage SEO remains exactly as before

## Scope

This refactor applies **ONLY** to `/locations/:slug` pages.

Other page types remain unchanged:
- Homepage (`/`) - separate system, not modified
- Service pages (`/tile-roofing`, etc.) - use `seo-titles.json`
- Roof repair pages (`/roof-repair/:city`) - use dynamic generation
- Roof inspection pages (`/roof-inspection/:city`) - use dynamic generation
- Blog pages - use blog-specific SEO

## Files Modified

- ✅ Created: `src/data/locations.ts`
- ✅ Created: `src/lib/locationSeo.ts`
- ✅ Updated: `src/pages/locations/DeerfieldBeachCityPage.tsx`
- ✅ Updated: `scripts/prerender-static.mjs`
- ✅ Updated: `scripts/seo-titles.json`
- ✅ Updated: `src/config/seoTitles.ts`

## Next Steps

Future location pages can now be added by simply:
1. Adding entry to `src/data/locations.ts`
2. Running `npm run build`
3. Done!

No code changes needed. No separate prerender config. No metadata drift.
