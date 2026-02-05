# Service Area Page SEO System Documentation

## Date: February 5, 2026

## Overview

A scalable SEO system for city service area pages that provides unique title and meta description tags for every city without requiring code changes for each new city.

---

## System Architecture

### Files Involved

1. **`src/config/cityServiceAreaSEO.ts`** - SEO configuration and templates
2. **`src/pages/locations/ServiceAreaPage.tsx`** - Dynamic city page template

---

## How It Works

### 1. SEO Templates (Default Behavior)

Every city automatically gets unique SEO metadata using these templates:

**Title Template:**
```
Roof Inspection in {City} for Repairs & Replacement | All Phase
```

**Description Template:**
```
Get a professional roof inspection in {City} to determine repair needs, replacement options, and insurance documentation before you decide.
```

**Example Output:**
- **Boynton Beach:**
  - Title: `Roof Inspection in Boynton Beach for Repairs & Replacement | All Phase`
  - Description: `Get a professional roof inspection in Boynton Beach to determine repair needs, replacement options, and insurance documentation before you decide.`

- **Coral Springs:**
  - Title: `Roof Inspection in Coral Springs for Repairs & Replacement | All Phase`
  - Description: `Get a professional roof inspection in Coral Springs to determine repair needs, replacement options, and insurance documentation before you decide.`

### 2. City-Specific Overrides (Priority Cities)

For priority cities requiring custom messaging, add an override to `CITY_SERVICE_AREA_SEO_OVERRIDES` in `cityServiceAreaSEO.ts`.

**Current Overrides:**

```typescript
export const CITY_SERVICE_AREA_SEO_OVERRIDES: Record<string, CityServiceAreaSEO> = {
  'boca-raton': {
    title: 'Roof Inspection in Boca Raton for Repairs & Replacement | All Phase',
    description: 'Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.'
  },
  // Add more priority cities here
};
```

### 3. Lookup Process

When a city page loads, the system:

1. Checks if city slug exists in `CITY_SERVICE_AREA_SEO_OVERRIDES`
2. If YES → Use override values
3. If NO → Apply templates with city name
4. Return `{ title, description }` to React Helmet

---

## How to Add a New City Override

### Step 1: Identify the City Slug

City slugs are lowercase, hyphenated URL segments:
- Boca Raton → `boca-raton`
- West Palm Beach → `west-palm-beach`
- Fort Lauderdale → `fort-lauderdale`

### Step 2: Add Override Entry

Edit **`src/config/cityServiceAreaSEO.ts`**:

```typescript
export const CITY_SERVICE_AREA_SEO_OVERRIDES: Record<string, CityServiceAreaSEO> = {
  'boca-raton': {
    title: 'Roof Inspection in Boca Raton for Repairs & Replacement | All Phase',
    description: 'Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.'
  },
  'fort-lauderdale': {
    title: 'Top Fort Lauderdale Roofer | Roof Inspection & Repair | All Phase',
    description: 'Professional roof inspection in Fort Lauderdale. Expert repair, replacement & storm damage assessment. Licensed, insured, HVHZ certified.'
  },
  'west-palm-beach': {
    title: 'West Palm Beach Roofing Contractor | Inspections & Repairs',
    description: 'Trusted roofing contractor serving West Palm Beach. Free roof inspection, repair estimates, and insurance claims assistance. Call today!'
  },
};
```

### Step 3: Build and Deploy

```bash
npm run build
```

No other code changes required!

---

## SEO Best Practices

### Title Tag Guidelines

- **Length:** 50-60 characters (including spaces)
- **Format:** `Primary Keyword | Secondary Keyword | Brand`
- **Include:** City name, service, brand
- **Avoid:** Keyword stuffing, special characters

**Examples:**
- ✅ `Roof Inspection in Boca Raton for Repairs & Replacement | All Phase`
- ✅ `Fort Lauderdale Roofer | Expert Roof Repair & Replacement`
- ❌ `Best Roofer in Boca Raton FL | Roof Repair, Roof Replacement, Roof Inspection, Emergency Roofing Services` (too long)

### Meta Description Guidelines

- **Length:** 150-160 characters (including spaces)
- **Include:** Primary keyword, call to action, value proposition
- **Natural language:** Write for humans, not robots
- **Unique:** Every city must have unique description

**Examples:**
- ✅ `Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.`
- ✅ `Licensed roofing contractor serving Fort Lauderdale. Free estimates, expert repairs, HVHZ certified. Call (754) 227-5605 for immediate service.`
- ❌ `Roofing services. Call us.` (too short, no value)

---

## OpenGraph & Twitter Card Support

The system automatically applies title/description to:

- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta name="twitter:title">`
- `<meta name="twitter:description">`

This ensures consistent metadata across social media shares.

---

## Current City Coverage

The system covers **38+ cities** across Broward and Palm Beach Counties:

### Broward County
- Boca Raton (override)
- Fort Lauderdale (template)
- Pompano Beach (template)
- Coral Springs (template)
- Coconut Creek (template)
- Deerfield Beach (template)
- Sunrise (template)
- Hollywood (template)
- Davie (template)
- Miramar (template)
- Plantation (template)
- Weston (template)
- And 15+ more...

### Palm Beach County
- West Palm Beach (template)
- Boynton Beach (template)
- Delray Beach (template)
- Wellington (template)
- Palm Beach Gardens (template)
- Jupiter (template)
- And 10+ more...

---

## Important Notes

### Client-Side vs Server-Side SEO

This is a **React SPA (Single Page Application)** built with Vite. SEO metadata is applied using **React Helmet (client-side)**.

**What This Means:**

1. **Search Engines:** Google, Bing, and other modern search engines execute JavaScript and will see all meta tags correctly.
2. **View-Source:** The raw HTML (`view-source:`) will show the base `index.html` template, NOT the dynamic meta tags.
3. **SEO Tools:** Tools like Screaming Frog, Ahrefs, and SEMrush that render JavaScript will see the correct tags.

**To Verify SEO Tags:**

Use browser DevTools instead of view-source:

1. Open page in Chrome/Firefox
2. Press F12 (DevTools)
3. Go to Elements/Inspector tab
4. Expand `<head>` section
5. See `<title>`, `<meta name="description">`, etc.

### For Server-Side Rendering (Future)

If you need meta tags in raw HTML (view-source), consider:

1. **Netlify Prerendering** (Requires Pro plan)
2. **Static Site Generation (SSG)** with frameworks like Next.js
3. **Server-Side Rendering (SSR)** with Node.js backend

---

## Testing Checklist

After adding new city overrides:

- [ ] Build succeeds without errors (`npm run build`)
- [ ] City page loads correctly
- [ ] DevTools shows correct `<title>` tag
- [ ] DevTools shows correct `<meta name="description">` tag
- [ ] OpenGraph tags present (`og:title`, `og:description`)
- [ ] Twitter Card tags present (`twitter:title`, `twitter:description`)
- [ ] Title is 50-60 characters
- [ ] Description is 150-160 characters
- [ ] No duplicate content across cities

---

## Examples

### Example 1: Adding Custom SEO for Priority City

**Goal:** Add custom SEO for "Palm Beach Gardens" to emphasize luxury market.

```typescript
'palm-beach-gardens': {
  title: 'Luxury Roofing in Palm Beach Gardens | Premium Tile & Metal Roofs',
  description: 'High-end roofing contractor serving Palm Beach Gardens luxury homes. Expert tile, metal, and flat roof installation. Licensed, insured, HVHZ certified.'
}
```

### Example 2: Adding Seasonal Promotion

**Goal:** Highlight hurricane season for coastal city.

```typescript
'pompano-beach': {
  title: 'Hurricane-Ready Roofing in Pompano Beach | HVHZ Certified',
  description: 'Storm-resistant roofing for Pompano Beach homes. Free hurricane damage inspection, insurance claims help, HVHZ certified installation.'
}
```

### Example 3: Using Template (No Override)

**Goal:** Let template auto-generate SEO for "Tamarac".

No code changes needed! Template automatically generates:
- Title: `Roof Inspection in Tamarac for Repairs & Replacement | All Phase`
- Description: `Get a professional roof inspection in Tamarac to determine repair needs, replacement options, and insurance documentation before you decide.`

---

## Maintenance

### Adding Bulk Overrides

To add overrides for multiple cities at once:

```typescript
export const CITY_SERVICE_AREA_SEO_OVERRIDES: Record<string, CityServiceAreaSEO> = {
  'boca-raton': {
    title: 'Roof Inspection in Boca Raton for Repairs & Replacement | All Phase',
    description: 'Get a professional roof inspection in Boca Raton to determine repair needs, replacement options, and insurance documentation before you decide.'
  },
  'fort-lauderdale': {
    title: 'Fort Lauderdale Roofer | Roof Inspection & Repairs | All Phase',
    description: 'Professional roof inspection in Fort Lauderdale. Expert repair, replacement & storm assessment. Licensed, insured, HVHZ certified.'
  },
  'west-palm-beach': {
    title: 'West Palm Beach Roofing | Inspections & Repairs | All Phase',
    description: 'Trusted roofing contractor in West Palm Beach. Free inspection, repair estimates, insurance claims help. Call (754) 227-5605!'
  },
  'coral-springs': {
    title: 'Coral Springs Roofer | Expert Roof Inspection & Repair',
    description: 'Licensed roofing contractor serving Coral Springs. Comprehensive roof inspection, repair, and replacement services. Free estimates!'
  },
};
```

### Updating Templates

To change the default template for ALL cities (those without overrides):

Edit `cityServiceAreaSEO.ts`:

```typescript
export function getDefaultServiceAreaTitle(cityName: string): string {
  return `${cityName} Roofing Contractor | Expert Repairs & Replacement`;
}

export function getDefaultServiceAreaDescription(cityName: string): string {
  return `Licensed roofing contractor serving ${cityName}. Expert repair, replacement & inspection. Free estimates. HVHZ certified. Call (754) 227-5605.`;
}
```

---

## Summary

✅ **Scalable:** Add new cities without code changes
✅ **Flexible:** Override any city with custom SEO
✅ **Maintainable:** All SEO config in one file
✅ **SEO-Friendly:** Unique meta tags for every city
✅ **Future-Proof:** Easy to migrate to SSR/prerendering later

**Questions?** Review this doc or check `src/config/cityServiceAreaSEO.ts` for implementation details.
