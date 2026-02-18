# Location Page Architecture

## Overview
The `/locations/[city]` routing uses a hybrid system with both custom pages and a shared template.

## Custom Location Pages (9 cities)
These cities have their own dedicated components in `/src/pages/locations/`:

1. **Boca Raton** → `BocaRatonMoneyPage.tsx`
2. **Boynton Beach** → `BoyntonBeachMoneyPage.tsx`
3. **Coconut Creek** → `CoconutCreekMoneyPage.tsx`
4. **Coral Springs** → `CoralSpringsMoneyPage.tsx`
5. **Deerfield Beach** → `DeerfieldBeachCityPage.tsx` ⭐ (HQ page with custom content)
6. **Delray Beach** → `DelrayBeachMoneyPage.tsx`
7. **Fort Lauderdale** → `FortLauderdaleMoneyPage.tsx`
8. **Wellington** → `WellingtonMoneyPage.tsx`
9. **West Palm Beach** → `WestPalmBeachMoneyPage.tsx`

## Generic Location Pages (All Other Cities)
All other cities use the **shared template**: `/src/pages/templates/GenericLocationTemplate.tsx`

This includes cities like:
- Pompano Beach
- Parkland
- Lighthouse Point
- Hollywood
- Margate
- And 40+ more cities

## How to Update Pages

### For Custom Pages (9 cities listed above):
Edit the specific city file in `/src/pages/locations/[CityName]MoneyPage.tsx` or `/src/pages/locations/DeerfieldBeachCityPage.tsx`

### For Generic Template Pages (all other cities):
Edit `/src/pages/templates/GenericLocationTemplate.tsx`

**Important:** Changes to `GenericLocationTemplate.tsx` will affect ALL cities that don't have a custom page.

## Routing Configuration
The routing is configured in `/src/pages/DynamicCityRouter.tsx`:

```typescript
const locationPageMap: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
  'boca-raton': BocaRatonMoneyPage,
  'boynton-beach': BoyntonBeachMoneyPage,
  'coconut-creek': CoconutCreekMoneyPage,
  'coral-springs': CoralSpringsMoneyPage,
  'deerfield-beach': DeerfieldBeachCityPage,
  'delray-beach': DelrayBeachMoneyPage,
  'fort-lauderdale': FortLauderdaleMoneyPage,
  'wellington': WellingtonMoneyPage,
  'west-palm-beach': WestPalmBeachMoneyPage,
};
```

If a city is in this map, it uses its custom page. Otherwise, it falls back to `GenericLocationTemplate`.

## Why This Architecture?

1. **Priority Cities** (high SEO value) get custom, hand-crafted pages with unique content
2. **Other Cities** use a template that dynamically generates content based on city data
3. **Deerfield Beach** is the company HQ, so it gets the most comprehensive custom page
4. This approach balances SEO optimization with development efficiency

## Example: Pompano Beach

When you visit `/locations/pompano-beach`:
- ❌ Does NOT use `PompanoBeachPage.tsx` (that's for legacy routing)
- ✅ USES `GenericLocationTemplate.tsx`
- The template reads city data from `cities.json` and generates content dynamically

## To Add a New Custom Page

1. Create the page component in `/src/pages/locations/[CityName]MoneyPage.tsx`
2. Import it in `DynamicCityRouter.tsx`
3. Add it to the `locationPageMap` object with the city slug as the key
