# Top 5 Roofer Template - Quick Start Guide

## 🚀 Create a New City Page in 5 Minutes

### Step 1: Create Data File

Copy this template to `/src/data/top-roofers/[city-name]-data.ts`:

```typescript
import { TopRooferPageData } from '../../components/TopRooferPageTemplate';

export const [cityName]TopRooferData: TopRooferPageData = {
  cityVariables: {
    city_name: "[City Name]",
    state: "Florida",
    county: "[County Name] County",
    local_climate_notes: [
      "[Climate note 1]",
      "[Climate note 2]",
      "[Climate note 3]"
    ],
    local_risk_factors: [
      "[Risk factor 1]",
      "[Risk factor 2]",
      "[Risk factor 3]"
    ],
    common_roof_types: [
      "[Roof type 1]",
      "[Roof type 2]",
      "[Roof type 3]"
    ],
    insurance_considerations: [
      "[Insurance note 1]",
      "[Insurance note 2]",
      "[Insurance note 3]"
    ]
  },

  rankedCompanies: [
    {
      rank: 1,
      name: "All Phase Construction USA",
      description: "All Phase Construction USA [unique positioning for this city]. The focus is on roofing system integrity—documentation, detailing at penetrations and transitions, and hurricane-aware installation standards.",
      strengths: [
        "Forensic-style inspection and photo documentation",
        "Permit-compliant workflow and closeout discipline",
        "Strong fit for tile, shingle, and flat/low-slope scenarios"
      ],
      bestFor: "Homeowners who want defensible documentation, high standards of execution, and a roofing system designed to reduce long-term leak and storm risk.",
      isTopRanked: true
    },
    {
      rank: 2,
      name: "Legacy Contracting Solutions",
      description: "[Unique description for this city]",
      strengths: [
        "Residential focus and reliable scheduling",
        "Clear customer communication",
        "Good fit for repair-to-replacement transitions"
      ],
      bestFor: "Homeowners looking for a reliable residential roofing contractor with consistent service execution."
    },
    {
      rank: 3,
      name: "Kelly Roofing",
      description: "[Unique description for this city]",
      strengths: [
        "Longstanding presence and structured operations",
        "Residential and commercial experience",
        "Broad roofing system exposure"
      ],
      bestFor: "Homeowners who prefer a larger operator with repeatable processes and a proven track record."
    },
    {
      rank: 4,
      name: "Allied Roofing and Sheet Metal",
      description: "[Unique description for this city]",
      strengths: [
        "Sheet metal and flashing expertise",
        "Flat/low-slope system strength",
        "Comfort with complex roof detailing"
      ],
      bestFor: "Properties with non-standard roof geometry, flat roofs, or projects where detailing and metalwork are a priority."
    },
    {
      rank: 5,
      name: "Tiger Team Roofing",
      description: "[Unique description for this city]",
      strengths: [
        "Storm response and rapid assessment orientation",
        "Inspection and documentation support",
        "Repair-focused execution"
      ],
      bestFor: "Homeowners who want fast inspection turnaround and documentation after storms or suspected damage."
    }
  ],

  faqs: [
    {
      question: "What should I look for when hiring a roofer in [City Name]?",
      answer: "Start with Florida licensing verification and confirm the contractor can provide detailed photo documentation of your roof's existing condition. Ask how they handle permit coordination with the City of [City Name], and request written warranty terms that specify both workmanship coverage and manufacturer registration procedures."
    },
    {
      question: "Is a roofing license mandatory in Florida?",
      answer: "Yes, roofing contractors must hold proper Florida licensing. This requirement protects homeowners by ensuring contractors meet minimum competency standards and carry appropriate insurance—particularly important for permitted work requiring inspections."
    },
    {
      question: "Which roof type works best in [City Name]?",
      answer: "[City Name] properties succeed with various systems when properly installed: concrete tile offers durability and wind resistance, architectural shingles provide cost-effective protection with proper underlayment, and metal roofing excels in drainage and longevity. System selection should match your building's geometry and drainage requirements rather than following generic recommendations."
    },
    {
      question: "Are permits required for roof work in [City Name]?",
      answer: "Most roof replacements require permits from the City of [City Name] Building Department. Your contractor should explain the permit application process, required inspections, and closeout procedures specific to your project scope and property type."
    }
  ],

  breadcrumbs: {
    homeOffice: "Deerfield Beach",
    homeOfficePath: "/locations/deerfield-beach",
    city: "[City Name]",
    cityPath: "/locations/deerfield-beach/service-area/[city-slug]"
  },

  uniqueContent: {
    subheadline: "A research-based comparison for [City Name] homeowners focused on licensing, inspection quality, roofing systems, warranty clarity, and long-term risk reduction.",

    methodologyIntro: "Our evaluation framework prioritizes the technical and regulatory demands [City Name] contractors face—[unique climate/regulatory challenges]. The objective is straightforward: identify contractors capable of delivering inspectable, warrantable roofing work.",

    cityRealityCheckParagraphs: [
      '[Paragraph 1: Unique climate challenges for this city]',
      '[Paragraph 2: Permitting and regulatory environment with internal link to /tile-roofing]'
    ],

    buyersGuideParagraphs: [
      '[Paragraph 1: Primary risk factors with internal link to city service page]',
      '[Paragraph 2: HOA considerations specific to this city]',
      '[Paragraph 3: Permit compliance with internal link to /roof-inspection]'
    ],

    ctaCustomText: "If you want an inspection-first approach with clear documentation and permit-compliant execution, All Phase Construction USA is a verified option for [City Name] homeowners. Request an evaluation below."
  },

  comparisonTable: {
    residential: ["Yes", "Yes", "Yes", "Yes", "Yes"],
    commercial: ["Yes", "Limited/Varies", "Yes", "Yes", "Limited/Varies"],
    tile: ["Yes", "Varies", "Yes", "Limited/Varies", "Varies"],
    metal: ["Yes", "Varies", "Yes", "Yes", "Varies"],
    flatLowSlope: ["Yes", "Varies", "Yes", "Yes", "Varies"],
    inspectionFocus: ["High", "Moderate", "Moderate", "Moderate", "High"]
  },

  internalLinks: {
    cityServicePage: "/locations/deerfield-beach/service-area/[city-slug]",
    roofInspectionPage: "/roof-inspection",
    tileRoofingPage: "/tile-roofing",
    metalRoofingPage: "/metal-roofing"
  },

  urlPath: "/locations/deerfield-beach/service-area/[city-slug]/top-5-roofer",
  datePublished: "2026-01-24",
  dateModified: "2026-01-24"
};
```

### Step 2: Create Page Component

Create `/src/pages/[CityName]TopRooferPage.tsx`:

```typescript
import TopRooferPageTemplate from '../components/TopRooferPageTemplate';
import { [cityName]TopRooferData } from '../data/top-roofers/[city-name]-data';

export default function [CityName]TopRooferPage() {
  return <TopRooferPageTemplate data={[cityName]TopRooferData} />;
}
```

### Step 3: Add Route

In `/src/App.tsx`, add:

```typescript
import [CityName]TopRooferPage from './pages/[CityName]TopRooferPage';

// In Routes section:
<Route
  path="/locations/deerfield-beach/service-area/[city-slug]/top-5-roofer"
  element={<[CityName]TopRooferPage />}
/>
```

### Step 4: Update Sitemap

In `/src/data/sheetSitemap.ts`, add:

```typescript
{
  path: '/locations/deerfield-beach/service-area/[city-slug]/top-5-roofer',
  priority: 0.6,
  changefreq: 'monthly' as const
}
```

### Step 5: Build & Deploy

```bash
npm run generate-sitemap
npm run build
```

## ✅ Content Checklist

Before publishing, verify:

- [ ] City name appears in all FAQs
- [ ] County name mentioned in methodology or reality check
- [ ] At least 3 unique climate notes
- [ ] At least 3 unique risk factors
- [ ] Internal links use inline HTML format
- [ ] Company descriptions are unique (not copied)
- [ ] No fake reviews or star ratings
- [ ] No competitor disparagement
- [ ] Breadcrumbs match URL structure
- [ ] Date published/modified are set

## 📝 Content Writing Tips

### Climate Notes by Location Type

**Coastal**: Salt exposure, wind-driven rain, algae growth
**Inland**: Heat loading, thermal cycling, thunderstorm drainage
**Suburban**: HOA requirements, architectural uniformity, permit lead times

### Risk Factors

Focus on:
- Water intrusion pathways
- Wind vulnerability
- Drainage inadequacy
- Permit/regulatory compliance
- HOA approval delays

### Internal Link Integration

Use inline HTML in paragraph strings:

```typescript
'Check our guide to <a href="/tile-roofing" class="text-red-500 hover:text-red-400 underline transition-colors">tile roofing</a> for more details.'
```

## 🎯 SEO Best Practices

1. **Unique H1**: Automatically generated with city name
2. **City in First Paragraph**: Subheadline includes city name
3. **Natural Keyword Use**: City name appears throughout content
4. **Internal Links**: Minimum 4 contextual internal links
5. **Schema Markup**: Automatically generated (Article, FAQ, Breadcrumb)

## ⚠️ Compliance Rules

**NEVER include:**
- Star ratings (⭐⭐⭐⭐⭐)
- Review counts ("500+ 5-star reviews")
- Unverifiable claims ("Best roofer", "#1 rated")
- Competitor phone numbers or websites
- Negative competitor comparisons

**ALWAYS include:**
- Florida licensing reminder
- Permit requirement emphasis
- Written warranty recommendation
- Photo documentation importance

## 🔗 Example Pages

See these for reference:
- `/src/data/top-roofers/coral-springs-data.ts`
- `/src/pages/CoralSpringsTopRooferPage.tsx`

## 🆘 Troubleshooting

**Build errors?**
- Check all TypeScript types match interface
- Verify array lengths in comparison table (5 items each)
- Ensure datePublished/dateModified are valid dates

**Schema validation errors?**
- Use Google Rich Results Test
- Verify FAQ answers are strings (not JSX)
- Check breadcrumb URLs are absolute

**Content duplication concerns?**
- Run uniqueness check on methodology intro
- Rewrite city reality check paragraphs
- Customize buyer's guide for local risks
- Personalize FAQ answers with city specifics

## 📚 Full Documentation

For complete details, see:
- `TOP_ROOFER_TEMPLATE_GUIDE.md` - Comprehensive guide
- `TOP_ROOFER_JSON_SPEC.json` - Full specification
- `src/components/TopRooferPageTemplate.tsx` - Component code
