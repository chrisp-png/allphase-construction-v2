# Flexible City Page SEO Pattern - Implementation Guide

## Overview

This document explains the flexible city page SEO pattern that has been implemented using the new `SEO` component. The pattern allows for:
- **Default SEO metadata** for all city pages
- **Custom overrides** for priority cities
- **DRY (Don't Repeat Yourself)** code with centralized configuration

## Architecture

### 1. SEO Component (`src/components/SEO.tsx`)
Centralized SEO component that handles:
- Title tags
- Meta descriptions
- Canonical URLs
- Open Graph tags
- Twitter Card tags

### 2. City SEO Override Config (`src/config/cityServiceAreaSEO.ts`)
Centralized configuration file containing:
- SEO overrides for priority cities
- Default templates for non-priority cities
- Easy-to-maintain structure

### 3. City Page Implementation (Example: `BocaRatonPage.tsx`)

## Implementation Pattern

```typescript
import SEO from '../components/SEO';
import { CITY_SERVICE_AREA_SEO_OVERRIDES } from '../config/cityServiceAreaSEO';
import { Helmet } from 'react-helmet-async';

export default function CityPage() {
  // 1. Define city configuration
  const citySlug = 'boca-raton';
  const cityName = 'Boca Raton';

  // 2. Get SEO data with override system
  const seoOverride = CITY_SERVICE_AREA_SEO_OVERRIDES[citySlug];
  const seoTitle = seoOverride?.title || `Roofer in ${cityName} FL | All Phase Construction USA`;
  const seoDescription = seoOverride?.description || `Licensed roofer in ${cityName} FL providing inspections, repairs, and roof replacement. Dual-licensed, permit-ready, hurricane-rated systems.`;

  // 3. Use SEO component in return statement
  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/locations/${citySlug}`}
      />
      <Helmet>
        {/* Optional: Add structured data schemas */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* Page content */}
      <div>...</div>
    </>
  );
}
```

## Benefits

### 1. **Centralized SEO Management**
- All SEO metadata in one component
- No manual `document.title` manipulation
- No manual meta tag creation

### 2. **Flexible Override System**
- Default templates for all cities
- Custom overrides for priority cities
- Easy to add new overrides without code changes

### 3. **Maintainability**
- Update SEO logic in one place
- Consistent implementation across all city pages
- Easy to add new SEO features (e.g., robots, lang tags)

### 4. **SEO Best Practices**
- Automatic absolute URL generation for canonical tags
- Proper Open Graph and Twitter Card tags
- Self-closing tags for meta elements
- No duplicate meta tags

## Current Implementation Status

### ✅ Implemented
- HomePage.tsx - Using SEO component with homepage metadata
- BocaRatonPage.tsx - Using flexible override pattern

### 📋 Priority Cities with Overrides
The following cities have custom SEO overrides in `cityServiceAreaSEO.ts`:
- Boca Raton
- Deerfield Beach
- Fort Lauderdale
- West Palm Beach
- Coral Springs
- Coconut Creek
- Delray Beach
- Boynton Beach
- Pompano Beach
- And more...

## How to Add a New City Override

1. Open `src/config/cityServiceAreaSEO.ts`
2. Add entry to `CITY_SERVICE_AREA_SEO_OVERRIDES`:

```typescript
'your-city-slug': {
  title: 'Your Custom Title | All Phase Construction USA',
  description: 'Your custom description highlighting your unique value proposition.'
}
```

3. The city page will automatically use the override on next render

## Example: Different Intent Types

### Repair Focus (Boca Raton)
```typescript
'boca-raton': {
  title: 'Boca Raton Roofing Specialist | Dual-Licensed (CCC/CGC)',
  description: 'Expert Boca Raton Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements.'
}
```

### Roofer Focus (Pompano Beach)
```typescript
'pompano-beach': {
  title: 'Pompano Beach Roofing Specialist | Dual-Licensed (CCC/CGC)',
  description: 'Expert Pompano Beach Roofing Specialist. Dual-Licensed (CCC/CGC) and HVHZ-compliant roof repairs and replacements.'
}
```

## Migration Checklist

To migrate an existing city page to the new pattern:

- [x] Import SEO component
- [x] Import CITY_SERVICE_AREA_SEO_OVERRIDES
- [x] Import Helmet from react-helmet-async
- [x] Define citySlug and cityName constants
- [x] Get override from config with fallback default
- [x] Remove useEffect with document.title manipulation
- [x] Remove manual meta tag creation
- [x] Add SEO component to return statement
- [x] Move structured data to Helmet component
- [x] Test build passes successfully
- [x] Verify meta tags render correctly in browser

## Testing

### Verify SEO Implementation
```bash
# Build project
npm run build

# Check for errors
# Look for "Transform failed" or JSX errors

# Verify in browser DevTools
# 1. Open page
# 2. View page source (Ctrl+U)
# 3. Check <title> tag
# 4. Check <meta name="description"> tag
# 5. Check <link rel="canonical"> tag
# 6. Check Open Graph tags (og:title, og:description, og:url)
```

## Notes

- The SEO component automatically generates absolute URLs using `window.location.origin`
- Canonical paths should be relative (e.g., `/locations/boca-raton`)
- The component prevents duplicate meta tags
- Schema.org structured data remains in Helmet for flexibility
