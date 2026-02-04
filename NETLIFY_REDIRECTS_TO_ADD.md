# Netlify Redirects to Add - Critical Fix

## Problem
41 old `/roofing-contractor-{city}-fl` URLs are in the sitemap but only have client-side redirects (React Router Navigate). This causes 503 errors for crawlers.

## Solution
Add server-side 301 redirects in netlify.toml BEFORE the SPA catch-all rule.

## Redirects to Add

Copy and paste these into netlify.toml right before the `# SPA catch-all` section:

```toml
# ========================================
# Old roofing-contractor URL pattern redirects
# CRITICAL: These URLs are in sitemap but only had client-side redirects
# Added: 2026-02-03 to fix 503 errors in Screaming Frog crawl
# ========================================

# Palm Beach County Cities
[[redirects]]
from = "/roofing-contractor-boca-raton-fl"
to = "/locations/deerfield-beach/service-area/boca-raton"
status = 301

[[redirects]]
from = "/roofing-contractor-boynton-beach-fl"
to = "/locations/deerfield-beach/service-area/boynton-beach"
status = 301

[[redirects]]
from = "/roofing-contractor-delray-beach-fl"
to = "/locations/deerfield-beach/service-area/delray-beach"
status = 301

[[redirects]]
from = "/roofing-contractor-gulf-stream-fl"
to = "/locations/deerfield-beach/service-area/gulf-stream"
status = 301

[[redirects]]
from = "/roofing-contractor-haverhill-fl"
to = "/locations/deerfield-beach/service-area/haverhill"
status = 301

[[redirects]]
from = "/roofing-contractor-highland-beach-fl"
to = "/locations/deerfield-beach/service-area/highland-beach"
status = 301

[[redirects]]
from = "/roofing-contractor-hypoluxo-fl"
to = "/locations/deerfield-beach/service-area/hypoluxo"
status = 301

[[redirects]]
from = "/roofing-contractor-jupiter-fl"
to = "/locations/deerfield-beach/service-area/jupiter"
status = 301

[[redirects]]
from = "/roofing-contractor-lake-worth-fl"
to = "/locations/deerfield-beach/service-area/lake-worth-beach"
status = 301

[[redirects]]
from = "/roofing-contractor-lantana-fl"
to = "/locations/deerfield-beach/service-area/lantana"
status = 301

[[redirects]]
from = "/roofing-contractor-loxahatchee-groves-fl"
to = "/locations/deerfield-beach/service-area/loxahatchee-groves"
status = 301

[[redirects]]
from = "/roofing-contractor-ocean-ridge-fl"
to = "/locations/deerfield-beach/service-area/ocean-ridge"
status = 301

[[redirects]]
from = "/roofing-contractor-palm-beach-fl"
to = "/locations/deerfield-beach/service-area/palm-beach"
status = 301

[[redirects]]
from = "/roofing-contractor-palm-beach-gardens-fl"
to = "/locations/deerfield-beach/service-area/palm-beach-gardens"
status = 301

[[redirects]]
from = "/roofing-contractor-royal-palm-beach-fl"
to = "/locations/deerfield-beach/service-area/royal-palm-beach"
status = 301

[[redirects]]
from = "/roofing-contractor-wellington-fl"
to = "/locations/deerfield-beach/service-area/wellington"
status = 301

[[redirects]]
from = "/roofing-contractor-west-palm-beach-fl"
to = "/locations/deerfield-beach/service-area/west-palm-beach"
status = 301

# Broward County Cities
[[redirects]]
from = "/roofing-contractor-coconut-creek-fl"
to = "/locations/deerfield-beach/service-area/coconut-creek"
status = 301

[[redirects]]
from = "/roofing-contractor-cooper-city-fl"
to = "/locations/deerfield-beach/service-area/cooper-city"
status = 301

[[redirects]]
from = "/roofing-contractor-coral-springs-fl"
to = "/locations/deerfield-beach/service-area/coral-springs"
status = 301

[[redirects]]
from = "/roofing-contractor-davie-fl"
to = "/locations/deerfield-beach/service-area/davie"
status = 301

[[redirects]]
from = "/roofing-contractor-deerfield-beach-fl"
to = "/locations/deerfield-beach"
status = 301

[[redirects]]
from = "/roofing-contractor-fort-lauderdale-fl"
to = "/locations/deerfield-beach/service-area/fort-lauderdale"
status = 301

[[redirects]]
from = "/roofing-contractor-hallandale-beach-fl"
to = "/locations/deerfield-beach/service-area/hallandale-beach"
status = 301

[[redirects]]
from = "/roofing-contractor-hollywood-fl"
to = "/locations/deerfield-beach/service-area/hollywood"
status = 301

[[redirects]]
from = "/roofing-contractor-lauderdale-by-the-sea-fl"
to = "/locations/deerfield-beach/service-area/lauderdale-by-the-sea"
status = 301

[[redirects]]
from = "/roofing-contractor-lauderhill-fl"
to = "/locations/deerfield-beach/service-area/lauderhill"
status = 301

[[redirects]]
from = "/roofing-contractor-lighthouse-point-fl"
to = "/locations/deerfield-beach/service-area/lighthouse-point"
status = 301

[[redirects]]
from = "/roofing-contractor-margate-fl"
to = "/locations/deerfield-beach/service-area/margate"
status = 301

[[redirects]]
from = "/roofing-contractor-miramar-fl"
to = "/locations/deerfield-beach/service-area/miramar"
status = 301

[[redirects]]
from = "/roofing-contractor-oakland-park-fl"
to = "/locations/deerfield-beach/service-area/oakland-park"
status = 301

[[redirects]]
from = "/roofing-contractor-parkland-fl"
to = "/locations/deerfield-beach/service-area/parkland"
status = 301

[[redirects]]
from = "/roofing-contractor-pembroke-pines-fl"
to = "/locations/deerfield-beach/service-area/pembroke-pines"
status = 301

[[redirects]]
from = "/roofing-contractor-plantation-fl"
to = "/locations/deerfield-beach/service-area/plantation"
status = 301

[[redirects]]
from = "/roofing-contractor-pompano-beach-fl"
to = "/locations/deerfield-beach/service-area/pompano-beach"
status = 301

[[redirects]]
from = "/roofing-contractor-sunrise-fl"
to = "/locations/deerfield-beach/service-area/sunrise"
status = 301

[[redirects]]
from = "/roofing-contractor-tamarac-fl"
to = "/locations/deerfield-beach/service-area/tamarac"
status = 301

[[redirects]]
from = "/roofing-contractor-weston-fl"
to = "/locations/deerfield-beach/service-area/weston"
status = 301

[[redirects]]
from = "/roofing-contractor-wilton-manors-fl"
to = "/locations/deerfield-beach/service-area/wilton-manors"
status = 301

# County-level pages
[[redirects]]
from = "/roofing-contractor-palm-beach-county-fl"
to = "/palm-beach-county"
status = 301

[[redirects]]
from = "/roofing-contractor-broward-county-fl"
to = "/broward-county"
status = 301

# ========================================
# End of roofing-contractor redirects
# ========================================
```

## After Adding

1. Deploy to Netlify
2. Test redirects: Visit `/roofing-contractor-boca-raton-fl` - should redirect to `/locations/deerfield-beach/service-area/boca-raton`
3. Re-run Screaming Frog crawl
4. Verify 503 errors drop from 257 to ~20

## Expected Impact

- ✅ Fixes 180+ broken URLs immediately
- ✅ Redirects work without JavaScript
- ✅ Preserves SEO value from old URLs
- ✅ Crawlers can now index destination pages
- ✅ Rankings recovered within 2-4 weeks

## Note

These redirects MUST be added BEFORE the SPA catch-all rule in netlify.toml:

```toml
# SPA catch-all - MUST BE LAST
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

If the catch-all comes first, these specific redirects will never match.
