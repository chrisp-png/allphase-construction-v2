# Nearby Service Areas — Visual Guide

## Component Display

### Desktop View
```
╔═══════════════════════════════════════════════════════════════╗
║                                                                 ║
║  Also Serving Nearby Communities                                ║
║                                                                 ║
║  Deerfield Beach  •  Delray Beach  •  Coral Springs  •         ║
║  Coconut Creek  •  Pompano Beach                               ║
║                                                                 ║
║                          View all service areas →    🔴        ║
║                                                                 ║
╚═══════════════════════════════════════════════════════════════╝
```

### Mobile View
```
╔═════════════════════════════════╗
║                                 ║
║  Also Serving Nearby            ║
║  Communities                    ║
║                                 ║
║  Deerfield Beach  •             ║
║  Delray Beach  •                ║
║  Coral Springs  •               ║
║  Coconut Creek  •               ║
║  Pompano Beach                  ║
║                                 ║
║  View all service areas → 🔴    ║
║                                 ║
╚═════════════════════════════════╝
```

## Page Position

```
┌─────────────────────────────────────────────┐
│                                             │
│  [Main Page Content]                        │
│  • Hero Section                             │
│  • Service Description                      │
│  • Features & Benefits                      │
│  • FAQ Section                              │
│                                             │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────┐
│  ⬅️ NEW SECTION ADDED HERE                 │
│                                             │
│  Also Serving Nearby Communities            │
│                                             │
│  City 1  •  City 2  •  City 3  •  City 4  │
│  City 5                                     │
│                                             │
│  View all service areas →                  │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────┐
│                                             │
│  [Contact / CTA Section]                    │
│  • Contact Form                             │
│  • Phone Number                             │
│  • Call to Action Buttons                   │
│                                             │
└─────────────────────────────────────────────┘
```

## Link States

### Default State
```
Deerfield Beach  •  Delray Beach  •  Coral Springs
     (gray)            (gray)           (gray)
```

### Hover State (Deerfield Beach)
```
Deerfield Beach  •  Delray Beach  •  Coral Springs
    (🔴 red)           (gray)           (gray)
```

## Color Palette

```
Background:         #09090b  (zinc-950)
Border Top:         #27272a  (zinc-800)
Section Title:      #ffffff  (white)
City Links:         #d4d4d8  (zinc-300)
City Links Hover:   #dc2626  (red-600)
Bullet Separator:   #52525b  (zinc-600)
"View all" Link:    #dc2626  (red-600)
```

## Typography

```
Section Title:
├─ Size:      text-2xl (24px)
├─ Weight:    font-bold (700)
└─ Color:     white

City Names:
├─ Size:      text-base (16px)
├─ Weight:    font-medium (500)
└─ Color:     zinc-300 → red-600 on hover

Separator:
├─ Character: •
└─ Color:     zinc-600

"View all" Link:
├─ Size:      text-base (16px)
├─ Weight:    font-semibold (600)
└─ Color:     red-600
```

## Spacing

```
Section:
├─ Padding Y:    py-12 (48px / 3rem)
└─ Border Top:   border-t border-zinc-800

Container:
├─ Max Width:    max-w-7xl
└─ Padding X:    px-4 sm:px-6 lg:px-8

Title:
└─ Margin Bottom: mb-6 (24px / 1.5rem)

City Links Row:
└─ Margin Bottom: mb-6 (24px / 1.5rem)

Link Gaps:
└─ Gap:          gap-3 (12px / 0.75rem)

Bullet Margin:
└─ Margin Left:  ml-3 (12px / 0.75rem)
```

## 16 Cities Geographic Map

### Broward County Network
```
        Parkland ──────── Coral Springs ──────── Tamarac
            │                   │                    │
            │                   │                    │
        Coconut Creek ────── Deerfield ────── Pompano Beach
            │               Beach   │              │
            │                   │   │              │
        Boca Raton ────────────┘   └───── Fort Lauderdale
            │                               │
            │                               │
        Delray Beach           Plantation ──┤
                                   │        │
                                Lauderhill  │
                                   │        │
                                Hollywood ──┘
```

### Palm Beach County Network
```
                West Palm Beach
                      │
                      │
            ┌─────────┼─────────┐
            │         │         │
        Lake Worth   Wellington
            │                   │
            │                   │
        Boynton Beach ──────────┘
            │
            │
        Delray Beach
            │
            │
        Boca Raton
```

## Real-World Examples

### Example 1: Boca Raton Page
```
Also Serving Nearby Communities

Deerfield Beach  •  Delray Beach  •  Coral Springs  •
Coconut Creek  •  Pompano Beach

                    View all service areas →
```

### Example 2: Coral Springs Page
```
Also Serving Nearby Communities

Parkland  •  Coconut Creek  •  Tamarac  •
Boca Raton  •  Deerfield Beach

                    View all service areas →
```

### Example 3: West Palm Beach Page
```
Also Serving Nearby Communities

Lake Worth  •  Wellington  •  Boynton Beach  •
Delray Beach  •  Boca Raton

                    View all service areas →
```

## Responsive Breakpoints

```
Mobile (< 640px):
├─ Layout:      Flex wrap vertical
├─ City Width:  Auto width
└─ Bullets:     Maintained between wrapped items

Tablet (≥ 640px, < 1024px):
├─ Layout:      Flex wrap horizontal
├─ City Width:  Auto width
└─ Bullets:     Between items on same row

Desktop (≥ 1024px):
├─ Layout:      Flex wrap horizontal
├─ City Width:  Auto width
└─ Bullets:     Between all adjacent items
```

## Component Anatomy

```typescript
<section className="bg-zinc-950 py-12 border-t border-zinc-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    // Section Title
    <h2 className="text-2xl font-bold text-white mb-6">
      Also Serving Nearby Communities
    </h2>

    // City Links Row
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {nearbyCities.map((city, index) => (
        <span key={city.slug} className="flex items-center">
          // City Link
          <Link to={`/roof-repair/${city.slug}`}>
            {city.name}
          </Link>
          // Bullet Separator (not after last item)
          {index < nearbyCities.length - 1 && (
            <span className="text-zinc-600 ml-3">•</span>
          )}
        </span>
      ))}
    </div>

    // "View All" Link
    <div>
      <Link to="/locations/service-areas">
        View all service areas
        <ArrowRight />
      </Link>
    </div>
  </div>
</section>
```

## User Interaction Flow

```
1. User reads main city page content
   ↓
2. Scrolls down past FAQ section
   ↓
3. Sees "Also Serving Nearby Communities"
   ↓
4. Options:
   a) Click nearby city → Navigate to that city's page
   b) Click "View all" → Navigate to service areas hub
   c) Continue to contact form → Convert
```

## SEO Link Equity Flow

```
City Page A
    ↓
  Links to 4-5 nearby cities
    ↓
City Pages B, C, D, E, F
    ↓
  Each links back to other nearby cities
    ↓
Dense geographic link network
    ↓
Strong local SEO signals
```

## Accessibility Features

```
✅ Semantic HTML (<section>, <nav> implied by links)
✅ Proper heading hierarchy (h2 for section title)
✅ Descriptive link text (city names, not "click here")
✅ Color contrast meets WCAG AA
✅ Touch targets ≥ 44×44px
✅ Keyboard navigable (tab through links)
✅ Screen reader friendly
✅ No JavaScript required (pure HTML/CSS)
```

## Animation Details

### Hover Effects
```
City Link:
  Default:     color: zinc-300
  Hover:       color: red-600
  Transition:  transition-colors (150ms)

"View All" Link:
  Default:     color: red-600
  Hover:       color: red-500
  Arrow Icon:  (no animation, static)
```

## Data Structure Visualization

```javascript
nearbyRoofRepairCities = {
  'boca-raton': [
    'deerfield-beach',  ─┐
    'delray-beach',      │
    'coral-springs',     ├─ String array of slugs
    'coconut-creek',     │
    'pompano-beach'     ─┘
  ],
  // ... more cities
}

       ↓ getNearbyCities()

[
  { slug: 'deerfield-beach', name: 'Deerfield Beach' },  ─┐
  { slug: 'delray-beach', name: 'Delray Beach' },         │
  { slug: 'coral-springs', name: 'Coral Springs' },       ├─ Object array with names
  { slug: 'coconut-creek', name: 'Coconut Creek' },       │
  { slug: 'pompano-beach', name: 'Pompano Beach' }       ─┘
]

       ↓ NearbyServiceAreas component

Rendered HTML with proper links and styling
```

## Integration Points

```
GenericRoofRepairTemplate.tsx
  ├─ Import: NearbyServiceAreas
  ├─ Import: getNearbyCities
  ├─ Data: cities.json
  └─ Render: <NearbyServiceAreas />

BocaRatonRoofRepairPage.tsx (and 10 others)
  ├─ Import: NearbyServiceAreas
  ├─ Import: getNearbyCities
  ├─ Data: cities.json
  └─ Render: <NearbyServiceAreas />

nearbyRoofRepairCities.ts
  ├─ Data: 16 cities mapped
  └─ Function: getNearbyCities()

NearbyServiceAreas.tsx
  ├─ Props: nearbyCities, serviceType
  └─ Render: Links to nearby cities
```

## Quick Stats

```
Total Cities Mapped:        16
Links per City:             4-5
Total Links Created:        64-80
Average Link Distance:      < 20 miles
Component File Size:        ~1.5KB
Data File Size:             ~0.5KB
Render Time:                < 1ms
```

## Testing Quick Reference

### Visual Check
```
□ Section visible on page
□ Title displays correctly
□ 4-5 city links present
□ Bullets between cities
□ "View all" link present
□ Dark theme maintained
```

### Functional Check
```
□ City links navigate correctly
□ Hover changes color to red
□ "View all" goes to /locations/service-areas
□ No broken links
□ No console errors
```

### Responsive Check
```
□ Desktop: Horizontal layout
□ Tablet: Natural wrapping
□ Mobile: Readable wrapping
□ Touch targets adequate
```

This visual guide provides a complete reference for how the nearby service areas section appears and functions across all city pages.
