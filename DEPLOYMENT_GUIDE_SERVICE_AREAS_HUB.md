# Service Areas Hub - Deployment Guide

## ✅ Changes Completed

All code changes have been successfully implemented:

1. **Footer Link Updated** (`src/components/Footer.tsx:261`)
   - "View All Service Areas →" now points to `/locations/deerfield-beach/service-area`

2. **Header Menu Updated** (`src/components/Header.tsx:105`)
   - "Service Areas" menu item already points to `/locations/deerfield-beach/service-area`

3. **301 Redirects Added**
   - React Router redirect: `/service-areas` → `/locations/deerfield-beach/service-area` (App.tsx:204)
   - Server-level redirects: Added to `public/_redirects` and `dist/_redirects` (lines 57-58)

4. **Service Areas Hub Enhanced** (`src/pages/locations/ServiceAreasHubPage.tsx`)
   - Added admin update checklist
   - Added "Most Active Service Areas" section
   - Added county-organized city listings
   - Added FAQs with schema markup
   - Made page indexable (removed NoIndexMeta)

5. **Sitemap Updated**
   - Greenacres added to Palm Beach County section
   - Hallandale Beach confirmed in sitemap

---

## 🚀 Deployment Steps (Required)

Since this is a **React/Vite SPA** (not WordPress), you need to deploy the newly built files:

### Step 1: Verify Build
```bash
npm run build
```
✅ Build completed successfully (verified above)

### Step 2: Deploy to Production

**For Netlify:**
```bash
# Option A: Connect to Git (automatic)
git add .
git commit -m "Update service areas hub and redirects"
git push origin main

# Option B: Manual deployment
netlify deploy --prod --dir=dist
```

**For Vercel:**
```bash
# Option A: Connect to Git (automatic)
git add .
git commit -m "Update service areas hub and redirects"
git push origin main

# Option B: Manual deployment
vercel --prod
```

**For Cloudflare Pages:**
```bash
# Option A: Connect to Git (automatic)
git add .
git commit -m "Update service areas hub and redirects"
git push origin main

# Option B: Manual deployment via dashboard
# 1. Go to Cloudflare Pages dashboard
# 2. Click "Create a deployment"
# 3. Upload the dist/ folder
```

**For Other Hosts:**
- Upload the entire `dist/` folder to your web server
- Ensure `dist/_redirects` and `dist/_headers` are uploaded
- Configure server to handle SPA routing (all requests → index.html)

### Step 3: Purge Caches

**If using Cloudflare:**
1. Go to Cloudflare Dashboard → Caching
2. Click "Purge Everything"
3. Wait 30 seconds

**If using Netlify:**
```bash
netlify cache:clear
```

**If using Vercel:**
Deployments automatically purge cache

**Browser Cache:**
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Or test in incognito/private window

### Step 4: Verify Live Deployment

Open in **incognito/private window** and test:

✅ **Footer Link Test:**
- Scroll to footer
- Click "View All Service Areas →"
- Should go to: `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area`

✅ **Header Menu Test:**
- Hover over "Locations" in header
- Click "Service Areas"
- Should go to: `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area`

✅ **Old Hub Redirect Test:**
- Navigate to: `https://allphaseconstructionfl.com/service-areas`
- Should redirect to: `https://allphaseconstructionfl.com/locations/deerfield-beach/service-area`

✅ **Hub Page Content Test:**
- Verify "Roofing Contractor Serving Broward & Palm Beach Counties" heading
- Verify "Most Active Service Areas" section shows 9 cities
- Verify "Broward County Service Areas" section
- Verify "Palm Beach County Service Areas" section
- Verify FAQs section at bottom

---

## 🔍 Troubleshooting

### Issue: Menu still goes to old URL

**Cause:** Browser/CDN caching old JavaScript bundle

**Fix:**
1. Verify deployment timestamp matches latest build
2. Hard refresh (Ctrl+Shift+R)
3. Clear CDN cache
4. Check browser DevTools → Network tab → Verify index-*.js is latest version

### Issue: 404 on service area hub

**Cause:** Server not configured for SPA routing

**Fix for Netlify/Cloudflare Pages:**
- Verify `_redirects` file exists in deployed `dist/` folder
- Check deployment logs for redirect file detection

**Fix for Apache:**
Add to `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Fix for Nginx:**
Add to config:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Issue: Old hub still shows

**Cause:** `/service-areas` redirect not working

**Fix:**
1. Verify `dist/_redirects` contains lines 57-58
2. Re-deploy dist folder
3. Check platform supports `_redirects` format
4. For custom servers, implement 301 redirect manually

---

## 📋 Acceptance Checklist

After deployment, verify all items:

- [ ] Footer "View All Service Areas →" goes to new hub
- [ ] Header "Service Areas" menu goes to new hub
- [ ] `/service-areas` redirects to new hub (301)
- [ ] New hub shows "Most Active Service Areas" section
- [ ] New hub shows county-organized city lists
- [ ] New hub shows FAQs section
- [ ] Greenacres appears in Palm Beach County list
- [ ] Hallandale Beach appears in Broward County list
- [ ] Hub page returns 200 status
- [ ] Hub page is in XML sitemap
- [ ] All tests pass in incognito window (no cache)

---

## 📝 Notes

**This is NOT a WordPress site.** The instructions provided about WP Admin, Elementor, LiteSpeed Cache, etc. do not apply to this React/Vite application.

**Key Files Modified:**
- `src/components/Footer.tsx` - Footer link
- `src/components/Header.tsx` - Menu link (already correct)
- `src/App.tsx` - React Router redirect
- `src/pages/locations/ServiceAreasHubPage.tsx` - Hub page content
- `src/data/sheetSitemap.ts` - Added Greenacres
- `public/_redirects` - Server-side redirects
- `dist/_redirects` - Built redirects for deployment

**Build Output:**
- All files compiled to `dist/` folder
- Deploy the entire `dist/` folder to production
- Ensure `_redirects` and `_headers` files are included
