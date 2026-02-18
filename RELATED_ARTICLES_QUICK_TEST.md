# Related Articles Fix — Quick Test Guide

## What Was Fixed
The "Related Articles" section now GUARANTEES 3-4 articles on every blog post using a smart 3-tier matching system.

## Quick Visual Test

### 1. Open Any Blog Post
Navigate to any of these:
- `/blog/roof-replacement-cost-broward-2026`
- `/blog/metal-roof-vs-tile-roof-south-florida-hurricanes`
- `/blog/professional-roof-inspection-south-florida`
- `/blog/dont-replace-your-roof-restore-it-instead`

### 2. Scroll to "Related Articles" Section
**Location:** Between "Our Roofing Services" and "Explore More" navigation

**Expected:** Section ALWAYS appears with:
- Heading: "Related Articles"
- Subheading: "Continue learning about roofing"
- **3-4 article cards** in a grid

### 3. Check Each Article Card
Each card should have:
- ✅ Featured image (with hover zoom)
- ✅ Category badge (red pill, top-left of image)
- ✅ Article title (clickable, turns red on hover)
- ✅ Excerpt (2 lines preview)
- ✅ "Read More →" link (red text)
- ✅ Border changes to red on hover

### 4. Verify Card Count
**CRITICAL:** Every blog post should show **3 or 4 article cards**
- ❌ NOT 0 cards
- ❌ NOT 1 card
- ❌ NOT 2 cards
- ✅ YES 3 cards
- ✅ YES 4 cards

## Console Log Verification

Open browser DevTools Console (F12) and look for:
```
Related posts for "Post Title": Found 4 posts
```

This confirms the matching logic is working.

## Test on Multiple Posts

### Post Type 1: Posts with Popular Categories
**Example:** "Roof Replacement Cost Broward County 2026"
**Should show:** Mostly category matches + keyword matches

### Post Type 2: Posts with Unique Keywords
**Example:** "Metal Roof vs Tile Roof South Florida"
**Should show:** Keyword matches + recent posts

### Post Type 3: Posts with No Categories
**Example:** Any post missing categories
**Should show:** Keyword matches + recent posts

### Post Type 4: Newest Post (No Older Posts)
**Should show:** Still shows 3-4 posts (even if all others)

## Expected Matching Behavior

### Example: "Metal Roof vs Tile Roof"
**Keywords detected:** metal, roof, tile

**Expected related articles:**
1. Other posts about "metal roofing" (keyword match)
2. Posts about "tile roofing" (keyword match)
3. Posts about "roofing materials" (keyword match)
4. Recent roofing post (fallback)

### Example: "Roof Replacement Cost Broward 2026"
**Keywords detected:** roof, replacement, cost, broward

**Expected related articles:**
1. Pricing guide posts (keyword match)
2. Other "cost" posts (keyword match)
3. Broward County posts (keyword match)
4. Recent roofing post (fallback)

## Mobile Test

Resize browser to mobile width or test on phone:
- Cards stack vertically (1 column)
- All 3-4 cards still visible
- Scrolling works smoothly
- Images load correctly
- Text remains readable

## Click Test

Click on any "Read More" link:
- ✅ Navigates to correct blog post
- ✅ Uses client-side routing (React Router)
- ✅ Page loads instantly (no full refresh)
- ✅ New post shows its own 3-4 related articles

## Troubleshooting

### If section doesn't appear:
1. Hard refresh (Ctrl+Shift+R)
2. Check console for errors
3. Verify Supabase connection

### If showing fewer than 3 articles:
1. Check console log for "Found X posts"
2. Verify blog_posts table has multiple published posts
3. Check that posts have `published = true`

### If showing wrong articles:
1. This is expected if no good matches exist
2. Recent posts are used as fallback
3. Check console to see matching logic

### If cards look broken:
1. Check image URLs in Supabase
2. Verify featured_image field exists
3. Check network tab for failed image loads

## Success Criteria

For EVERY blog post tested:
- ✅ "Related Articles" section appears
- ✅ Shows exactly 3 or 4 article cards
- ✅ Cards have images, titles, excerpts
- ✅ Category badges visible (if categories exist)
- ✅ Hover effects work (red border, image zoom)
- ✅ Links navigate correctly
- ✅ No console errors
- ✅ Responsive on mobile

## Database Verification

If you have Supabase access, verify:

```sql
SELECT COUNT(*) FROM blog_posts WHERE published = true;
```
Should return at least 4 posts (preferably more)

```sql
SELECT slug, title, categories, published_date
FROM blog_posts
WHERE published = true
ORDER BY published_date DESC;
```
Check that posts have varied categories for better matching

## Performance Check

- Section loads quickly (no lag)
- Images lazy load
- Hover transitions smooth
- No layout shift when section loads

## Build Verification

File size check:
- **Before fix:** BlogPostPage-*.js was ~15KB
- **After fix:** BlogPostPage-*.js is ~16KB
- **Increase:** +1KB (new matching logic added)

## Final Checklist

Test these specific pages:

1. `/blog/roof-replacement-cost-broward-2026`
   - Expected: 4 related articles
   - Check: Cost/budget related matches

2. `/blog/metal-roof-vs-tile-roof-south-florida-hurricanes`
   - Expected: 4 related articles
   - Check: Metal/tile keyword matches

3. `/blog/professional-roof-inspection-south-florida`
   - Expected: 3-4 related articles
   - Check: Inspection keyword matches

4. `/blog/dont-replace-your-roof-restore-it-instead`
   - Expected: 3-4 related articles
   - Check: Maintenance/repair matches

All should show 3-4 related articles. If any shows 0-2, the fix failed.

## Report Issues

If problems persist after testing:
1. Check browser console for errors
2. Verify Supabase connection
3. Check network tab for failed requests
4. Review console.log outputs
5. Test with different blog posts
