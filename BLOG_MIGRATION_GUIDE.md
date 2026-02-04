# Blog Migration Guide

This guide explains how to migrate your existing blog posts to your new website while preserving SEO and maintaining exact URL slugs.

## Overview

Your blog system uses:
- **Supabase** for database storage
- **JSON file** for easy blog post management
- **Automatic sync script** to push posts to the database
- **JSON-LD schema** for SEO (already implemented)

## Quick Start

### 1. Add Your Blog Posts

Edit the file: `src/data/blog-posts.json`

Add your blog posts using this structure:

```json
[
  {
    "slug": "your-exact-url-slug",
    "title": "Your Post Title",
    "excerpt": "A brief 1-2 sentence summary of the post",
    "content": "<div class='prose max-w-none'>Your full HTML content here</div>",
    "featuredImage": "/path-to-your-image.jpg",
    "author": "All Phase Construction USA",
    "publishedDate": "2024-08-15T10:00:00.000Z",
    "categories": ["Category 1", "Category 2"],
    "tags": ["tag1", "tag2", "tag3"],
    "metaTitle": "SEO Title (60 chars max)",
    "metaDescription": "SEO description (155 chars max)",
    "faqs": [
      {
        "question": "Frequently asked question?",
        "answer": "Detailed answer to the question."
      }
    ],
    "published": true
  }
]
```

### 2. Add Service Role Key (One-Time Setup)

The sync script needs admin access to your database. Add this to your `.env` file:

```env
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

**Where to find your Service Role Key:**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → API
4. Copy the "service_role" key (keep this secret!)

### 3. Sync Posts to Database

After adding your posts to the JSON file, run:

```bash
npm install
npm run sync-blog
```

This will:
- ✅ Create new posts if they don't exist
- ✅ Update existing posts (matched by slug)
- ✅ Preserve your exact URL slugs for SEO

### 4. Verify Your Posts

Visit your blog to see the posts:
- Blog index: `http://localhost:5173/blog`
- Individual post: `http://localhost:5173/blog/your-exact-url-slug`

## Field Reference

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `slug` | string | Exact URL slug from old site (SEO critical) | `"wind-mitigation-for-south-florida-roofs"` |
| `title` | string | Post headline | `"Wind Mitigation for South Florida Roofs"` |
| `excerpt` | string | Brief summary (1-2 sentences) | `"Learn how wind mitigation can save you money..."` |
| `content` | string | Full HTML content of post | `"<div class='prose'>...</div>"` |
| `featuredImage` | string | Path to hero image | `"/images/roof-photo.jpg"` |

### Optional Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `author` | string | `"All Phase Construction USA"` | Author name |
| `publishedDate` | string (ISO 8601) | `now()` | Publication date |
| `categories` | string[] | `[]` | Post categories |
| `tags` | string[] | `[]` | SEO tags |
| `metaTitle` | string | Uses `title` | SEO title (60 chars max) |
| `metaDescription` | string | Uses `excerpt` | SEO description (155 chars max) |
| `faqs` | array | `[]` | FAQ section data |
| `published` | boolean | `true` | Publish status |

## Content Formatting

### HTML Content Structure

Wrap your content in a div with the `prose` class:

```html
<div class='prose max-w-none'>
  <p>Your introduction paragraph...</p>

  <h2>Section Heading</h2>
  <p>Section content...</p>

  <h3>Subsection</h3>
  <p>More content...</p>

  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</div>
```

### Supported HTML Elements

- Headings: `<h2>`, `<h3>`, `<h4>`
- Paragraphs: `<p>`
- Lists: `<ul>`, `<ol>`, `<li>`
- Emphasis: `<strong>`, `<em>`
- Links: `<a href="...">`
- Images: `<img src="..." alt="...">`
- Blockquotes: `<blockquote>`

### Image Paths

Images should be placed in the `public/` folder:
- Put image in: `public/blog-images/your-image.jpg`
- Reference as: `"/blog-images/your-image.jpg"`

## FAQ Structure

FAQs create an accordion section with structured data for SEO:

```json
"faqs": [
  {
    "question": "How much does a new roof cost in South Florida?",
    "answer": "The cost varies based on size, material, and complexity. Typical residential roofs in South Florida range from $8,000 to $25,000. Contact us for a free detailed estimate."
  },
  {
    "question": "How long does roof installation take?",
    "answer": "Most residential roof installations take 1-3 days depending on size and weather conditions. We'll provide a specific timeline during your consultation."
  }
]
```

## SEO Features (Already Implemented)

Your blog automatically includes:

✅ **JSON-LD Article Schema** with:
- Headline and description
- Publication date
- Author and publisher info
- Organization logo
- Breadcrumb navigation
- Location data (Broward & Palm Beach)

✅ **Meta Tags**:
- Title tag (from `metaTitle` or `title`)
- Meta description (from `metaDescription` or `excerpt`)

✅ **Open Graph tags** (for social sharing)

✅ **Semantic HTML** with proper heading hierarchy

## Migration Checklist

For each blog post from your old site:

- [ ] Copy the exact URL slug
- [ ] Copy the title
- [ ] Write a compelling excerpt (1-2 sentences)
- [ ] Format the content as HTML
- [ ] Choose a featured image
- [ ] Set the original publication date
- [ ] Add relevant categories
- [ ] Add SEO tags
- [ ] Write meta title and description
- [ ] Add FAQs (if applicable)
- [ ] Add to `blog-posts.json`
- [ ] Run `npm run sync-blog`
- [ ] Verify the post on your local site

## Example: Complete Blog Post

```json
{
  "slug": "what-makes-a-roof-hurricane-resistant",
  "title": "What Makes a Roof Hurricane Resistant?",
  "excerpt": "Learn about the key features that make roofs resistant to hurricane-force winds and how to protect your South Florida home.",
  "content": "<div class='prose max-w-none'><p>Hurricane season in South Florida is a serious matter...</p><h2>Key Features</h2><p>Content here...</p></div>",
  "featuredImage": "/073-fort-lauderdale-new-shingle-roof-install-all-phase-usa.jpg.jpg",
  "author": "All Phase Construction USA",
  "publishedDate": "2024-08-15T10:00:00.000Z",
  "categories": ["Roofing Tips", "Hurricane Protection"],
  "tags": ["hurricane-resistant", "roof-safety", "south-florida"],
  "metaTitle": "What Makes a Roof Hurricane Resistant? | South Florida Guide",
  "metaDescription": "Discover the key features of hurricane-resistant roofs including proper connections, impact-resistant materials, and sealed decking.",
  "faqs": [
    {
      "question": "What wind speeds should a South Florida roof withstand?",
      "answer": "In South Florida, roofs must withstand winds of 140-180 mph depending on location."
    }
  ],
  "published": true
}
```

## Tips for Success

### SEO Best Practices

1. **Slugs**: Use exact slugs from your old site (critical for SEO)
2. **Titles**: Keep under 60 characters
3. **Meta Descriptions**: Keep between 150-155 characters
4. **Images**: Use descriptive alt text
5. **Headers**: Use proper hierarchy (H2 → H3 → H4)
6. **Links**: Include internal links to related content
7. **Keywords**: Include naturally in content and tags

### Content Quality

1. **Length**: Aim for 800-1500 words for SEO
2. **Value**: Answer common customer questions
3. **Formatting**: Use short paragraphs and bullet points
4. **Images**: Include relevant photos from your projects
5. **CTAs**: End with clear calls-to-action

### Categories & Tags

**Categories** (broad topics):
- Roofing Tips
- Hurricane Protection
- Roof Materials
- Maintenance
- Commercial Roofing

**Tags** (specific keywords):
- tile-roofing
- metal-roofing
- shingle-roofing
- flat-roofing
- roof-repair
- hurricane-resistant
- wind-mitigation
- south-florida
- broward-county
- palm-beach-county

## Troubleshooting

### Posts Not Showing Up?

1. Check that `published: true`
2. Run `npm run sync-blog` again
3. Check browser console for errors
4. Verify the slug is correct

### Slug Already Exists?

The sync script will UPDATE the existing post with new data. This is safe and preserves the post ID.

### Sync Script Errors?

Make sure you have:
- `VITE_SUPABASE_URL` in your `.env` file
- `SUPABASE_SERVICE_ROLE_KEY` in your `.env` file
- Valid JSON syntax in `blog-posts.json`

## Next Steps

1. **Start Small**: Migrate 2-3 posts to test the workflow
2. **Verify**: Check posts look good on local site
3. **Batch Import**: Add remaining posts
4. **Test**: Verify all URLs match your old site
5. **Deploy**: Push changes live

## Support

If you encounter issues:
1. Check the console for error messages
2. Verify your JSON syntax at jsonlint.com
3. Ensure all required fields are present
4. Check that image paths are correct
