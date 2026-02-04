# SEO Optimization Checklist for Google Indexing

**Last Updated**: February 2, 2026
**Status**: All critical optimizations implemented ✅

---

## Critical Issues Fixed (Feb 2, 2026)

### 1. Server Errors (5XX) - FIXED ✅
- **Problem**: 63 pages returning 5XX errors to Google
- **Root Cause**: Unmatched routes in React Router causing app crashes
- **Solution Applied**:
  - Added missing redirects in `netlify.toml` for `/faq`, `/media-gallery`, `/north-palm-beach`
  - Added catch-all route (`<Route path="*">`) to prevent future 5XX errors
  - All unmatched routes now redirect to homepage

### 2. Open Graph Images - FIXED ✅
- **Problem**: Default OG/Twitter images pointed to `bolt.new` domain
- **Solution**: Updated `index.html` with proper domain and company image
- **Impact**: Better social sharing and link previews

### 3. Default Meta Tags - FIXED ✅
- **Problem**: No default meta description in `index.html`
- **Solution**: Added proper title, description, and Open Graph tags
- **Impact**: Fallback SEO when page-specific tags fail to load

---

## Current SEO Infrastructure (Already Implemented)

### ✅ Technical SEO Foundation

1. **Canonical URLs** (`src/components/CanonicalManager.tsx`)
   - Self-referencing canonical on every page
   - Strips UTM parameters and query strings
   - Homepage always uses clean root URL

2. **Robots.txt** (`public/robots.txt`)
   - Properly configured with sitemap reference
   - Blocks `/admin` and `/qa/` from indexing
   - Allows all other pages

3. **XML Sitemap** (`public/sitemap.xml`)
   - Auto-generated from `sheetSitemap.ts`
   - 96 URLs included
   - Proper change frequency and priorities set
   - Referenced in robots.txt

4. **Case Normalization** (`netlify/edge-functions/normalize-case.ts`)
   - All URLs converted to lowercase via 301 redirects
   - Runs at edge before other processing
   - Prevents duplicate content issues

5. **HTTPS & WWW Redirects** (`netlify.toml`)
   - HTTP → HTTPS (301)
   - www → non-www (301)
   - Immutable cache headers for performance

6. **Structured Data** (`src/utils/localBusinessSchema.ts`)
   - LocalBusiness schema on all pages
   - Proper NAP (Name, Address, Phone) data
   - Service area and opening hours defined
   - Review aggregation ratings

### ✅ Content Optimization

1. **Meta Tags**
   - Every page has unique title and description
   - Proper Open Graph tags for social sharing
   - Twitter Card tags configured

2. **Internal Linking**
   - Service areas link to city pages
   - Blog posts have related post suggestions
   - Footer contains key page links
   - Breadcrumb navigation (implicit)

3. **Mobile Optimization**
   - Responsive design with Tailwind CSS
   - Viewport meta tag configured
   - Touch-friendly CTAs (StickyMobileCTA)
   - Accessible design (AccessibilityWidget)

### ✅ Performance Optimization

1. **Image Optimization**
   - Responsive images with srcset
   - Preload critical hero images
   - Lazy loading for below-fold images
   - WebP format support

2. **Loading Performance**
   - DNS prefetch for third-party resources
   - Preconnect to Supabase
   - Deferred Google Analytics loading
   - Critical CSS inlined in index.html

3. **Code Splitting**
   - React Router lazy loading
   - Vite's automatic code splitting
   - Vendor chunks separated (React, Supabase)

### ✅ Indexing Signals

1. **IndexNow Integration** (`scripts/submit-indexnow.mjs`)
   - Automated submission to Bing and compatible engines
   - Batch processing for efficiency
   - Key file hosted at domain root
   - Run: `npm run indexnow-all` after deployment

2. **Google Search Console**
   - Property verified via meta tag
   - Sitemap submitted
   - Bing Webmaster Tools verified

---

## Post-Deployment Checklist

After every deployment, perform these actions:

### Immediate (Within 1 hour)

1. **Submit to IndexNow**
   ```bash
   npm run indexnow-all
   ```

2. **Request Google Re-Crawl**
   - Go to Google Search Console
   - Navigate to affected pages
   - Click "Request Indexing"

3. **Verify Redirects Work**
   - Test 3-5 redirect URLs manually
   - Confirm 301 status codes
   - Check final destination is correct

### Within 24 Hours

1. **Monitor GSC for Errors**
   - Check "Coverage" report
   - Look for new 4XX or 5XX errors
   - Verify redirect validation passes

2. **Check Site Performance**
   - Run PageSpeed Insights
   - Verify Core Web Vitals pass
   - Check mobile usability

3. **Validate Structured Data**
   - Use Google's Rich Results Test
   - Verify LocalBusiness schema is valid
   - Check FAQ schema on relevant pages

### Within 1 Week

1. **Track Indexing Progress**
   - Monitor "Coverage" report daily
   - Watch for increase in indexed pages
   - Address any new issues immediately

2. **Analyze Search Performance**
   - Check "Performance" report
   - Look for ranking improvements
   - Monitor click-through rates

---

## Ongoing Optimization Opportunities

### Content Improvements

1. **Blog Expansion**
   - Currently 4 posts in database
   - Target: 2 posts per month minimum
   - Focus on local SEO keywords
   - Include FAQ schemas in posts

2. **Service Area Pages**
   - All major cities have pages ✅
   - Consider adding neighborhood-level pages
   - Add more local testimonials
   - Include city-specific case studies

3. **FAQ Content**
   - Add more FAQ sections to key pages
   - Implement FAQ schema on all FAQ sections
   - Answer common roofing questions
   - Target "People also ask" queries

### Technical Improvements

1. **Core Web Vitals**
   - Current: Passing ✅
   - Monitor LCP (Largest Contentful Paint)
   - Optimize CLS (Cumulative Layout Shift)
   - Improve FID (First Input Delay)

2. **Crawl Budget Optimization**
   - Current sitemap: 96 URLs
   - Remove low-value pages if crawl issues arise
   - Prioritize high-value landing pages
   - Use `changefreq` strategically

3. **Link Building**
   - Chamber of Commerce membership (active) ✅
   - Local directory submissions
   - Partner/supplier backlinks
   - Local news mentions

### Monitoring & Alerts

1. **Set Up Alerts**
   - GSC email notifications for critical issues
   - Uptime monitoring for site availability
   - Broken link checking (monthly)
   - Redirect chain detection

2. **Regular Audits**
   - Monthly: GSC review + IndexNow submission
   - Quarterly: Full technical SEO audit
   - Biannually: Competitor analysis
   - Annually: Content refresh strategy

---

## Key Performance Indicators

Track these metrics monthly:

### Google Search Console
- **Total Clicks**: Target 10% month-over-month growth
- **Total Impressions**: Monitor search visibility
- **Average CTR**: Target >3% overall
- **Average Position**: Target <10 for primary keywords
- **Indexed Pages**: Should be 95+ of 96 submitted URLs

### Technical Health
- **5XX Errors**: 0 (critical)
- **4XX Errors**: <5 (monitor and fix)
- **Redirect Chains**: 0 (causes crawl inefficiency)
- **Mobile Usability Issues**: 0
- **Core Web Vitals**: All "Good" thresholds

### Business Metrics
- **Organic Traffic**: Track in Google Analytics
- **Calculator Submissions**: Track conversion rate
- **Contact Form Submissions**: Track from organic
- **Phone Call Conversions**: Track via CallRail

---

## Emergency Response Plan

### If Indexing Drops Suddenly

1. **Check GSC Coverage Report**
   - Look for new errors or excluded pages
   - Check for manual actions (penalties)
   - Review security issues tab

2. **Verify Site Accessibility**
   - Test site loads correctly
   - Check robots.txt not blocking crawlers
   - Verify sitemap.xml is accessible

3. **Check for Recent Changes**
   - Review recent deployments
   - Check if redirects broke
   - Verify no accidental noindex tags added

4. **Submit for Re-Indexing**
   - Use URL Inspection Tool
   - Request indexing for critical pages
   - Run IndexNow submission script

### If Rankings Drop

1. **Analyze Search Console Data**
   - Identify which queries dropped
   - Check which pages lost visibility
   - Look for technical issues

2. **Check Competitors**
   - Did they improve their content?
   - Are they getting more backlinks?
   - Have they launched new features?

3. **Review Recent Content Changes**
   - Did you modify key landing pages?
   - Were meta tags changed?
   - Was structured data removed?

---

## Tools & Resources

### Google Tools
- **Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

### Bing Tools
- **Webmaster Tools**: https://www.bing.com/webmasters
- **IndexNow Protocol**: https://www.indexnow.org/

### SEO Auditing
- **Screaming Frog**: Desktop crawler for technical audits
- **Ahrefs**: Backlink analysis and keyword research
- **SEMrush**: Comprehensive SEO platform
- **Lighthouse**: Built into Chrome DevTools

### Monitoring
- **Google Analytics 4**: Traffic and conversion tracking
- **CallRail**: Phone call tracking
- **UptimeRobot**: Site availability monitoring
- **Supabase Dashboard**: Database metrics

---

## Quick Command Reference

```bash
# Build and generate sitemap
npm run build

# Submit all URLs to IndexNow
npm run indexnow-all

# Submit specific URL to IndexNow
npm run indexnow /blog/new-post

# Validate redirects
node scripts/validate-redirects.mjs

# Run development server
npm run dev
```

---

## Deployment Protocol

1. **Pre-Deployment**
   - Run `npm run build` locally
   - Fix any build errors or warnings
   - Test critical user flows

2. **Deployment**
   - Push to production branch
   - Netlify auto-deploys
   - Monitor build logs

3. **Post-Deployment**
   - Wait 2 minutes for propagation
   - Test 3-5 key pages manually
   - Run IndexNow submission
   - Request re-indexing in GSC for changed pages

4. **Monitoring**
   - Check GSC within 24 hours
   - Monitor for error spikes
   - Track performance metrics

---

## Success Criteria

Your site is considered "optimized for Google" when:

- ✅ 0 server errors (5XX)
- ✅ <5 client errors (4XX) that are intentional
- ✅ 95%+ of submitted URLs are indexed
- ✅ All Core Web Vitals in "Good" range
- ✅ Mobile usability score: 100/100
- ✅ Rich results validate without errors
- ✅ Average position <15 for primary keywords
- ✅ CTR >2.5% overall from search
- ✅ Month-over-month organic traffic growth

---

**Document Owner**: All Phase Construction USA
**Next Review**: March 2, 2026
**Questions?** Check Google Search Console or review this checklist.
