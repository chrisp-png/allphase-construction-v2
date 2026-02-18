# Blog Post Page Layout — Complete Structure

## Page Flow (Top to Bottom)

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER / NAVIGATION (Global)                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  HERO SECTION (Dark gradient background)                    │
│  - Back to Blog link                                         │
│  - Category badge                                            │
│  - Post title (H1)                                           │
│  - Meta info (date, category, read time)                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FEATURED IMAGE                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ARTICLE CONTENT (Prose styling)                             │
│  - Full blog post HTML content                               │
│  - Tags section at bottom                                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FAQ SECTION (if FAQs exist)                                 │
│  - Accordion-style Q&A                                       │
│  - Schema.org FAQPage markup                                 │
└─────────────────────────────────────────────────────────────┘

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  ✨ NEW: SECTION 1 — OUR ROOFING SERVICES                   ┃
┃  Background: zinc-950 | Border-top: zinc-800                 ┃
┃                                                               ┃
┃  "Our Roofing Services"                                      ┃
┃  "Explore our professional roofing solutions"                ┃
┃                                                               ┃
┃  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           ┃
┃  │Service 1│ │Service 2│ │Service 3│ │Service 4│           ┃
┃  │  Title  │ │  Title  │ │  Title  │ │  Title  │           ┃
┃  │  Desc   │ │  Desc   │ │  Desc   │ │  Desc   │           ┃
┃  │Learn →  │ │Learn →  │ │Learn →  │ │Learn →  │           ┃
┃  └─────────┘ └─────────┘ └─────────┘ └─────────┘           ┃
┃                                                               ┃
┃  Smart matching: Detects keywords in title/tags/categories   ┃
┃  Examples:                                                    ┃
┃  - "tile" → /tile-roofing                                    ┃
┃  - "cost" → /calculator, /easy-payments, /pricing-guide      ┃
┃  - "repair" → /roof-repair                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  ✨ NEW: SECTION 2 — RELATED ARTICLES                        ┃
┃  Background: black | Border-top: zinc-800                    ┃
┃                                                               ┃
┃  "Related Articles"                                          ┃
┃  "Continue learning about roofing"                           ┃
┃                                                               ┃
┃  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           ┃
┃  │  Image  │ │  Image  │ │  Image  │ │  Image  │           ┃
┃  │ Article │ │ Article │ │ Article │ │ Article │           ┃
┃  │  Title  │ │  Title  │ │  Title  │ │  Title  │           ┃
┃  │ Excerpt │ │ Excerpt │ │ Excerpt │ │ Excerpt │           ┃
┃  │ Read →  │ │ Read →  │ │ Read →  │ │ Read →  │           ┃
┃  └─────────┘ └─────────┘ └─────────┘ └─────────┘           ┃
┃                                                               ┃
┃  Enhanced from original: Added subtitle, improved spacing    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  ✨ NEW: SECTION 3 — EXPLORE MORE NAVIGATION                 ┃
┃  Background: zinc-950 | Border-top: zinc-800                 ┃
┃                                                               ┃
┃     ← Back to Learning Center  |  All Articles  |  Services  ┃
┃                                                               ┃
┃  Provides clear paths back to main hub pages                 ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┌─────────────────────────────────────────────────────────────┐
│  CTA SECTION (Red gradient background)                       │
│  "Ready to Start Your Roofing Project?"                      │
│  [Request a Roofing Estimate] button → /roof-cost-calculator│
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FOOTER (Global)                                             │
└─────────────────────────────────────────────────────────────┘
```

## Section Order Summary

1. **Header** (Global navigation)
2. **Hero** (Title, meta, breadcrumb)
3. **Featured Image**
4. **Article Content** (Main blog post)
5. **FAQ Section** (Conditional)
6. **✨ NEW: Our Roofing Services** (4 service links)
7. **✨ NEW: Related Articles** (3-4 blog posts)
8. **✨ NEW: Explore More** (Navigation bar)
9. **CTA** (Request estimate)
10. **Footer** (Global)

## Key Features of New Sections

### Our Roofing Services (Section 6)
- **Purpose:** Convert readers from education to services
- **Layout:** 4-column grid (responsive)
- **Content:** Service title, description, Learn More CTA
- **Logic:** Smart keyword matching on post content

### Related Articles (Section 7)
- **Purpose:** Keep readers engaged with related content
- **Layout:** 4-column grid (responsive)
- **Content:** Image, title, excerpt, Read More CTA
- **Logic:** Category match → keyword match → recent posts

### Explore More (Section 8)
- **Purpose:** Provide clear navigation to hub pages
- **Layout:** Horizontal centered navigation
- **Links:** Learning Center | All Articles | Services
- **Style:** Simple, unobtrusive, clear hierarchy

## Responsive Behavior

### Desktop (lg: 1024px+)
- Service cards: 4 columns
- Article cards: 4 columns
- Navigation: Single horizontal row

### Tablet (sm: 640px - 1023px)
- Service cards: 2 columns
- Article cards: 2 columns
- Navigation: Single horizontal row

### Mobile (< 640px)
- Service cards: Stacked (1 column)
- Article cards: Stacked (1 column)
- Navigation: Wrapped, centered

## Color Scheme

### Backgrounds
- **zinc-950** (#09090b) — Sections 1 & 3
- **black** (#000000) — Section 2
- **zinc-900** (#18181b) — Cards

### Borders
- **zinc-800** (#27272a) — Section dividers, card borders
- **red-600** (#DC2626) — Hover state borders

### Text
- **white** (#ffffff) — Headings
- **gray-400** (#9CA3AF) — Body text, descriptions
- **red-600** (#DC2626) — CTAs, hover links

## Internal Link Count Per Blog Post

**Before:** 1-4 related article links (conditional)
**After:** 8-11 internal links guaranteed
- 4 service page links (always)
- 3-4 related article links (usually)
- 3 hub navigation links (always)

## SEO Impact

### Link Equity Flow
```
Blog Post
    ├─→ Service Page 1
    ├─→ Service Page 2
    ├─→ Service Page 3
    ├─→ Service Page 4
    ├─→ Related Article 1
    ├─→ Related Article 2
    ├─→ Related Article 3
    ├─→ Related Article 4
    ├─→ Learning Center Hub
    ├─→ Blog Index
    └─→ Roofing Services Hub
```

Every blog post now acts as a powerful link distribution node, pushing authority to:
1. **Money pages** (service pages)
2. **Content pages** (other blog posts)
3. **Hub pages** (main navigation nodes)

This creates a robust internal link graph that strengthens the entire site's SEO architecture.
