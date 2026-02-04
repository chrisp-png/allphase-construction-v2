# XML Sitemap Generation

## Overview

The `public/sitemap.xml` file is automatically generated from `src/data/sheetSitemap.ts` to ensure URL consistency across the application.

## How It Works

1. **Source of Truth**: `src/data/sheetSitemap.ts` contains all site URLs with SEO metadata
2. **Generation Script**: `scripts/generate-sitemap.mjs` parses the source file and creates XML
3. **Output**: `public/sitemap.xml` (automatically copied to `dist/` during build)

## Usage

### Generate Sitemap

```bash
npm run generate-sitemap
```

This command:
- Reads all entries from `sheetSitemap.ts`
- Filters for `indexable: true` entries
- Generates valid XML sitemap format
- Writes to `public/sitemap.xml`

### Automatic Build Integration

The `public/sitemap.xml` file is automatically included in the build output at `dist/sitemap.xml`.

## Generated Sitemap Details

### Domain
```
https://allphaseconstructionfl.com
```

### Statistics (Current)
- **Total URLs**: 64
- **Change Frequency**:
  - Weekly: 4 pages
  - Monthly: 60 pages
- **Priority Distribution**:
  - High (≥0.8): 22 pages
  - Medium (0.7): 42 pages

### XML Structure

Each URL entry includes:
```xml
<url>
  <loc>https://allphaseconstructionfl.com/path</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## Path Requirements

All paths in the sitemap follow these rules:
- ✅ Start with `/`
- ✅ Lowercase only
- ✅ No trailing slashes (except root `/`)
- ✅ No duplicates
- ✅ Match exactly with routes in the application

## When to Regenerate

Run `npm run generate-sitemap` when:
1. Adding new pages to `sheetSitemap.ts`
2. Updating SEO metadata (priority, changefreq)
3. Changing page indexability
4. Before deploying to production

## Validation

The generated sitemap:
- ✅ Complies with XML sitemap protocol 0.9
- ✅ Uses canonical domain (no www subdomain)
- ✅ Includes only indexable pages
- ✅ Contains valid priority values (0.0-1.0)
- ✅ Uses valid changefreq values (daily, weekly, monthly, yearly)

## Related Files

- `src/data/sheetSitemap.ts` - Source data
- `src/utils/generateSitemapXml.ts` - TypeScript utility functions
- `scripts/generate-sitemap.mjs` - Node.js generation script
- `public/sitemap.xml` - Generated XML file
- `package.json` - npm script definition

## Utilities

TypeScript utility functions available in `src/utils/generateSitemapXml.ts`:

```typescript
import { generateSitemapXml, getSitemapStats } from './utils/generateSitemapXml';

// Generate XML string
const xml = generateSitemapXml();

// Get statistics
const stats = getSitemapStats();
```
