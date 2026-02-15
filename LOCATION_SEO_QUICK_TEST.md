# Quick Test: Location SEO Override Fix

## Test the Fix Locally

Start the dev server and check browser console:

```bash
npm run dev
```

Then navigate to:
- `/locations/deerfield-beach`
- `/locations/fort-lauderdale`
- `/locations/boca-raton`

## What to Check

### 1. Browser Title Bar
Should show city-specific titles, not homepage default

### 2. Browser DevTools Console
Look for:
```
[NUCLEAR METADATA] Applied: {
  path: '/locations/deerfield-beach',
  title: 'Deerfield Beach Roofing Contractor | All Phase Construction USA'
}
```

### 3. View Page Source (Right-click → View Page Source)
Check that prerendered HTML contains:
- City-specific `<title>` tag
- City-specific canonical URL
- City-specific Open Graph tags

### 4. Inspect Head Tags (DevTools → Elements)
After React hydrates, verify:
- `<title>` matches the city
- `<link rel="canonical">` points to correct city URL
- `<meta property="og:url">` points to correct city URL

## Expected Results

### Deerfield Beach
```html
<title>Deerfield Beach Roofing Contractor | All Phase Construction USA</title>
<link rel="canonical" href="https://allphaseconstructionfl.com/locations/deerfield-beach">
<meta property="og:description" content="Licensed Deerfield Beach roofing contractor specializing in hurricane-compliant installations and repairs.">
```

### Fort Lauderdale
```html
<title>Fort Lauderdale Roofing Contractor | All Phase Construction USA</title>
<link rel="canonical" href="https://allphaseconstructionfl.com/locations/fort-lauderdale">
<meta property="og:description" content="All Phase Construction USA is a licensed roofing contractor serving Fort Lauderdale, FL...">
```

### Boca Raton
```html
<title>Boca Raton Roofing Contractor | All Phase Construction USA</title>
<link rel="canonical" href="https://allphaseconstructionfl.com/locations/boca-raton">
```

## Test with curl (Simulate Googlebot)

```bash
curl -s https://allphaseconstructionfl.com/locations/deerfield-beach | grep -E "<title>|canonical|og:url"
```

Should return:
```html
<title>Deerfield Beach Roofing Contractor | All Phase Construction USA</title>
<link rel="canonical" href="https://allphaseconstructionfl.com/locations/deerfield-beach">
<meta property="og:url" content="https://allphaseconstructionfl.com/locations/deerfield-beach">
```

## What Was Fixed

Before this fix:
- All location pages showed: "Roofing Contractor — All Phase Construction USA | Broward & Palm Beach"
- Canonical pointed to homepage
- OG tags used homepage values

After this fix:
- Each city shows its own title: "{City} Roofing Contractor | All Phase Construction USA"
- Canonical points to correct city URL
- OG tags use city-specific values (with optional overrides)

## How to Add a New City

Simply add to `src/data/locations.ts`:

```typescript
{ slug: "miami", city: "Miami", state: "FL" }
```

Then run `npm run build` - that's it!

The city will automatically get:
- Title: "Miami Roofing Contractor | All Phase Construction USA"
- Description: "All Phase Construction USA is a licensed roofing contractor serving Miami, FL..."
- Canonical: "https://allphaseconstructionfl.com/locations/miami"
- Correct Open Graph tags
- Prerendered static HTML
- Live route with correct metadata
