# Apply Local SEO Schema to All City Pages

## What Was Done
✅ Created comprehensive LocalBusiness schema generator
✅ Added geo-coordinates for 30+ cities
✅ Implemented on Boca Raton page as reference
✅ Build tested and working

## To Apply to All Other Cities

### Step 1: Update Each City Page

For each city page (e.g., `PompanoBeachPage.tsx`, `FortLauderdalePage.tsx`, etc.):

1. **Add imports** at the top:
```typescript
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/localBusinessSchema';
import { getCityCoordinates } from '../data/cityCoordinates';
```

2. **Replace the schema section** in the `useEffect`:

Find this:
```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  // ... FAQ content
};

const existingSchema = document.querySelector('script[type="application/ld+json"]');
if (existingSchema) {
  existingSchema.remove();
}

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(faqSchema);
document.head.appendChild(script);
```

Replace with:
```typescript
// Get city coordinates for local search
const coordinates = getCityCoordinates('[CITY NAME]');

// LocalBusiness Schema - Critical for "roofer near me" searches
const localBusinessSchema = generateLocalBusinessSchema({
  cityName: '[CITY NAME]',
  stateName: 'Florida',
  latitude: coordinates?.latitude,
  longitude: coordinates?.longitude,
  aggregateRating: {
    ratingValue: '4.9',
    reviewCount: '150'
  }
});

// FAQ Schema (keep existing FAQ content)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    // ... keep existing FAQ questions
  ]
};

// Breadcrumb Schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://allphaseconstructionfl.com' },
  { name: 'Service Areas', url: 'https://allphaseconstructionfl.com/service-areas' },
  { name: '[CITY NAME]', url: 'https://allphaseconstructionfl.com/locations/[city-slug]' }
]);

// Remove existing schemas
const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
existingSchemas.forEach(schema => schema.remove());

// Add all schemas
const schemas = [localBusinessSchema, faqSchema, breadcrumbSchema];
schemas.forEach(schema => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
});
```

3. **Update the cleanup function**:

Find:
```typescript
return () => {
  const schemaScript = document.querySelector('script[type="application/ld+json"]');
  if (schemaScript) {
    schemaScript.remove();
  }
};
```

Replace with:
```typescript
return () => {
  const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
  schemaScripts.forEach(script => script.remove());
};
```

### Step 2: Priority Order

Apply in this order (highest traffic cities first):

**Broward County:**
1. Fort Lauderdale
2. Pompano Beach
3. Coral Springs
4. Parkland
5. Deerfield Beach
6. Coconut Creek
7. Hollywood
8. Plantation
9. Davie
10. Sunrise

**Palm Beach County:**
1. Delray Beach
2. Boynton Beach
3. Wellington
4. West Palm Beach
5. Palm Beach Gardens
6. Jupiter
7. Lake Worth Beach
8. Royal Palm Beach

### Step 3: Cities Missing Coordinates

If a city is not in `cityCoordinates.ts`, add it:

```typescript
'City Name': {
  latitude: 'XX.XXXX',  // Find on Google Maps
  longitude: '-XX.XXXX',
  county: 'Broward' // or 'Palm Beach'
}
```

To find coordinates:
1. Google "[City Name], Florida"
2. Right-click map marker
3. Select "What's here?"
4. Copy coordinates

### Example: Complete Pompano Beach Implementation

See `/tmp/cc-agent/61908077/project/src/pages/BocaRatonPage.tsx` lines 24-102 for full reference.

### Testing

After each update:
```bash
npm run build
```

Fix any TypeScript errors before moving to next city.

## What This Achieves

### For Google:
✅ Knows exact service area location (geo-coordinates)
✅ Understands services offered in each city
✅ Sees aggregate ratings (trust signal)
✅ Maps business structure (breadcrumbs)
✅ Recognizes HVHZ certification (authority)

### For "Roofer Near Me" Searches:
✅ Proximity signals (latitude/longitude)
✅ Service area radius (15 miles from each city)
✅ Local business entity recognition
✅ Enhanced local pack eligibility

## Expected Timeline

- **1 developer** = 2-3 hours for all 30+ cities
- **Bulk find & replace** = 1 hour if cities have similar structure

## Notes

- Keep existing FAQ content (it's working!)
- Only change schema structure, not page content
- Test build after every 5-10 cities
- Deploy when all cities updated

## Verification

After deployment, check schema with:
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. View page source and search for "application/ld+json"

You should see 3 schema blocks:
- LocalBusiness (RoofingContractor)
- FAQPage
- BreadcrumbList
