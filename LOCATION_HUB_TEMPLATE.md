# Location Hub Page Template

## Overview

A dynamic page template for location hub pages that reads from the sitemap data source to display location-specific content and child pages.

## Component Location

```
src/pages/locations/LocationHubPage.tsx
```

## Route

```
/locations/:hubSlug
```

## Features

### 1. Dynamic Content from Sitemap

The page automatically:
- Reads the `hubSlug` parameter from the URL
- Finds the matching entry in `sheetSitemap.ts`
- Displays the entry's label as the H1 heading
- Shows related pages from the same section

### 2. Flexible Slug Matching

The component tries multiple path patterns to match the slug:
- `/locations/{hubSlug}`
- `/{hubSlug}`
- `/roofing-contractor-{hubSlug}`
- Section name match (e.g., `locations` matches "Locations" section)

### 3. Child Pages Grid

Displays all related pages from the same section in a responsive grid:
- Cards show the page label, section, and link
- Hover effects with brand color ([#C5A572])
- Responsive layout (1-3 columns based on screen size)

### 4. Error Handling

If no matching hub is found:
- Shows a friendly error message
- Provides a link back to Service Areas page

## Usage Examples

### Example 1: By Section Name

```
URL: /locations/locations
```
- Matches: Section "Locations"
- Hub Entry: Any entry from "Locations" section
- Child Pages: All other "Locations" entries

### Example 2: By Custom Slug

```
URL: /locations/palm-beach-county-cities
```
- Matches: Section "Palm Beach County Cities"
- Child Pages: All cities in Palm Beach County

### Example 3: By Specific Path

```
URL: /locations/service-areas
```
- Matches: Entry with path `/service-areas`
- Hub Entry: "Service Areas"
- Child Pages: Other entries from same section

## Component Structure

```tsx
LocationHubPage
├── Header Section
│   ├── Section Badge (with MapPin icon)
│   ├── H1 (from sitemap label)
│   └── Intro Paragraph (placeholder)
├── Child Pages Grid
│   └── Card for each related page
│       ├── MapPin icon
│       ├── Page label
│       ├── Section name
│       └── Link to page
└── CTA Section
    ├── Call to action text
    └── Contact buttons
```

## Sitemap Integration

The page reads from `sheetSitemap.ts`:

```typescript
interface SitemapEntry {
  section: string;      // Used to group related pages
  label: string;        // Used as H1 heading
  path: string;         // Used for navigation
  parent: string | null;
  indexable: boolean;   // Only indexable pages shown
  priority?: number;
  changefreq?: string;
}
```

## Example Sitemap Sections

The component works with all sitemap sections:

- **Locations**: Service Areas, County pages
- **Palm Beach County Cities**: Boca Raton, Wellington, etc.
- **Broward County Cities**: Fort Lauderdale, Coral Springs, etc.
- **Roofing Services**: Residential, Commercial, Tile, Metal, etc.
- **Roof Inspections**: County-specific inspection pages
- **Learning Center**: Calculator, Blog, Financing

## Design Elements

### Colors
- Background: Gradient from gray-900 to black
- Primary brand: #C5A572 (gold)
- Hover brand: #B08D5B (darker gold)
- Cards: gray-800/50 with gray-700 borders

### Typography
- H1: 4xl-6xl, bold, white
- H2: 2xl-3xl, bold, white
- Body text: xl, gray-400
- Card titles: lg, semibold, white

### Icons
- MapPin: Location indicator
- ArrowRight: Navigation indicator

## Route Configuration

Added to `App.tsx`:

```tsx
import LocationHubPage from './pages/locations/LocationHubPage';

// In Routes:
<Route path="/locations/:hubSlug" element={<LocationHubPage />} />
```

## Navigation

Currently **NOT linked** from main navigation (as per requirements).

To add navigation later, update:
- `src/components/Navigation.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

## Future Enhancements

Potential improvements:
1. Add SEO metadata specific to each hub
2. Add breadcrumb navigation
3. Display hub-specific content from database
4. Add map integration for location hubs
5. Show recent projects from specific locations
6. Display location-specific testimonials

## Testing URLs

### Valid Examples

- `/locations/locations` - Locations section
- `/locations/roofing-services` - Roofing Services section
- `/locations/palm-beach-county-cities` - PBC cities
- `/locations/broward-county-cities` - Broward cities

### Invalid Example

- `/locations/nonexistent` - Shows error page with link to Service Areas

## SEO Considerations

### Canonical URLs
Handled by `CanonicalManager.tsx`:
```
https://allphaseconstructionfl.com/locations/{hubSlug}
```

### Dynamic Content
- H1 uses actual page label from sitemap
- Child pages provide internal linking structure
- All links use React Router (no full page reloads)

## File Structure

```
project/
├── src/
│   ├── pages/
│   │   └── locations/
│   │       └── LocationHubPage.tsx (NEW)
│   ├── data/
│   │   └── sheetSitemap.ts (USED BY)
│   └── App.tsx (MODIFIED)
└── LOCATION_HUB_TEMPLATE.md (THIS FILE)
```

## Acceptance Criteria Status

✅ **Created** `src/pages/locations/LocationHubPage.tsx`
✅ **Reads** route param `:hubSlug`
✅ **Finds** matching entry in `sheetSitemap.ts`
✅ **Renders**:
  - H1 using sitemap label
  - Short placeholder intro paragraph
  - List of child pages from sitemap data
✅ **Added** route `/locations/:hubSlug` in `App.tsx`
✅ **No modifications** to existing pages
✅ **Not linked** from navigation
✅ **Renders without error**
✅ **Content driven** by sitemap data
✅ **Existing site behavior** unchanged

## Summary

The LocationHubPage provides a flexible, data-driven template for location hub pages. It automatically adapts to any section in the sitemap, displays related pages, and maintains consistent branding and design patterns used throughout the site.
