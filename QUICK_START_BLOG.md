# Quick Start: Adding Blog Posts

## Where to Add Blog Posts

📁 **File Location**: `src/data/blog-posts.json`

This is where ALL your blog posts live. Edit this file to add, update, or remove blog posts.

## Add a New Post in 3 Steps

### Step 1: Edit the JSON File

Open `src/data/blog-posts.json` and add your post to the array:

```json
[
  {
    "slug": "your-exact-old-url-slug",
    "title": "Your Post Title",
    "excerpt": "Brief 1-2 sentence summary",
    "content": "<div class='prose max-w-none'><p>Your HTML content...</p></div>",
    "featuredImage": "/your-image.jpg",
    "publishedDate": "2024-08-15T10:00:00.000Z",
    "categories": ["Category Name"],
    "tags": ["tag1", "tag2"],
    "metaTitle": "SEO Title (60 chars)",
    "metaDescription": "SEO description (155 chars)",
    "faqs": [
      {
        "question": "Question text?",
        "answer": "Answer text."
      }
    ],
    "published": true
  }
]
```

### Step 2: Add Service Role Key (First Time Only)

Add to your `.env` file (get from Supabase Dashboard → Settings → API):

```env
SUPABASE_SERVICE_ROLE_KEY=your-key-here
```

### Step 3: Sync to Database

```bash
npm run sync-blog
```

Done! Your post is now live.

## Field Quick Reference

### Must Have
- `slug` - Exact URL from old site (e.g., `"wind-mitigation-roofs"`)
- `title` - Post headline
- `excerpt` - Short summary
- `content` - Full HTML article
- `featuredImage` - Hero image path

### Nice to Have
- `publishedDate` - Original publication date (ISO format)
- `categories` - Array of categories
- `tags` - Array of SEO keywords
- `metaTitle` - Custom SEO title (default: uses title)
- `metaDescription` - Custom SEO description (default: uses excerpt)
- `faqs` - Question/answer pairs
- `published` - Set to `false` to hide (default: `true`)

## Sample Post Structure

Here's a complete example you can copy and modify:

```json
{
  "slug": "hurricane-proof-roofing-guide",
  "title": "Ultimate Guide to Hurricane-Proof Roofing in South Florida",
  "excerpt": "Everything you need to know about protecting your home with a hurricane-resistant roof system.",
  "content": "<div class='prose max-w-none'><p>Living in South Florida means preparing for hurricane season every year. Your roof is your home's first line of defense.</p><h2>What Makes a Roof Hurricane-Proof?</h2><p>A truly hurricane-resistant roof combines several critical elements:</p><ul><li><strong>Proper Installation:</strong> Following Florida Building Code</li><li><strong>Quality Materials:</strong> Impact-rated shingles or tiles</li><li><strong>Strong Connections:</strong> Hurricane straps and clips</li><li><strong>Sealed Deck:</strong> Waterproof underlayment</li></ul><h2>Benefits of Hurricane-Resistant Roofing</h2><p>Investing in hurricane-resistant features provides multiple advantages:</p><ul><li>Protection during severe weather</li><li>Lower insurance premiums</li><li>Increased property value</li><li>Peace of mind during storm season</li></ul><h2>Get Your Free Hurricane Roof Inspection</h2><p>Our team will assess your roof's readiness and recommend any improvements needed to keep your family safe.</p></div>",
  "featuredImage": "/017-fort-lauderdale-standing-seam-metal-roof-new-install-all-phase-usa.jpg.jpg",
  "author": "All Phase Construction USA",
  "publishedDate": "2024-06-01T10:00:00.000Z",
  "categories": ["Hurricane Protection", "Roofing Tips"],
  "tags": ["hurricane-proof", "storm-protection", "south-florida", "roof-safety", "wind-mitigation"],
  "metaTitle": "Hurricane-Proof Roofing Guide | South Florida Experts",
  "metaDescription": "Complete guide to hurricane-resistant roofing in South Florida. Learn about materials, installation, and insurance savings. Free inspection available.",
  "faqs": [
    {
      "question": "What wind speed should my roof withstand in South Florida?",
      "answer": "South Florida roofs should be designed to withstand winds of 140-180 mph depending on your location. Coastal areas have stricter requirements under the High Velocity Hurricane Zone (HVHZ) building codes."
    },
    {
      "question": "Will a hurricane-resistant roof lower my insurance?",
      "answer": "Yes! Most Florida insurance companies offer discounts of 10-45% for homes with certified hurricane-resistant roofing features. These savings often recoup your investment within 5-7 years."
    },
    {
      "question": "What's the best roofing material for hurricanes?",
      "answer": "Concrete tile, metal roofing, and impact-resistant shingles all provide excellent hurricane protection. The key is proper installation with adequate fastening and hurricane clips or straps."
    }
  ],
  "published": true
}
```

## Tips for Writing Content

### HTML Structure
```html
<div class='prose max-w-none'>
  <p>Introduction paragraph...</p>

  <h2>Main Section</h2>
  <p>Section content...</p>

  <h3>Subsection</h3>
  <p>Details...</p>

  <ul>
    <li>Bullet point 1</li>
    <li>Bullet point 2</li>
  </ul>
</div>
```

### SEO Best Practices
- Keep titles under 60 characters
- Meta descriptions: 150-155 characters
- Use keywords naturally in content
- Include location names (cities, counties)
- Add 3-5 relevant tags per post

### Categories
Use these standard categories:
- Roofing Tips
- Hurricane Protection
- Roof Materials
- Maintenance
- Commercial Roofing
- Residential Roofing

## Already Included Features

Your blog posts automatically get:

✅ **SEO Optimization**
- JSON-LD structured data
- Article schema with author & publisher
- Meta tags and Open Graph
- Semantic HTML

✅ **Professional Layout**
- Hero image
- Category badges
- Read time calculator
- Share buttons
- Related posts
- FAQ accordion

✅ **URL Preservation**
- Exact slug matching from old site
- Redirects work automatically
- SEO rankings preserved

## Testing Your Posts

After syncing:

1. **Local Testing**: Visit `http://localhost:5173/blog/your-slug`
2. **Check SEO**: View page source, search for "application/ld+json"
3. **Test FAQs**: Click accordions to expand/collapse
4. **Mobile View**: Test responsive design
5. **Related Posts**: Verify suggestions appear

## Common Issues

**Post not showing?**
- Check `published: true`
- Run `npm run sync-blog` again
- Check console for errors

**Wrong URL?**
- Verify slug matches exactly
- No leading slash in slug
- Use hyphens, not underscores

**Images not loading?**
- Put images in `public/` folder
- Use path like `/image-name.jpg`
- Check file name spelling

## Need Help?

See the full documentation in `BLOG_MIGRATION_GUIDE.md`
