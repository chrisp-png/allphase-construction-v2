# Blog Routing Fix - Complete

## Problem
Two markdown blog posts existed in `/blog/` directory but were not accessible via URLs:
- `/blog/professional-roof-inspection-south-florida` → 404
- `/blog/dont-replace-your-roof-restore-it-instead` → 404

## Solution Implemented
Migrated both blog posts from markdown files to Supabase database (single source of truth).

## What Was Done

### 1. Database Migrations
Inserted both blog posts into `blog_posts` table with:
- Full HTML content (converted from markdown)
- Unique meta titles and descriptions
- Structured FAQ data (4-6 FAQs each)
- Categories and tags
- Featured images from Pexels
- Published status: `true`

### 2. Sitemap Generator Enhanced
Updated `/scripts/generate-sitemap.mjs` to:
- Read from `blog-posts.json` (JSON source)
- Fetch from Supabase `blog_posts` table (database source)
- Merge and deduplicate slugs from both sources
- Include `/blog` index page
- Include all `/blog/<slug>` URLs

## Verification Results

### ✅ Both Posts in Database
```
slug: professional-roof-inspection-south-florida
title: What a Professional Roof Inspection Looks Like in South Florida (And Why It Matters)
meta_title: Professional Roof Inspection in South Florida | What to Expect
published: true
categories: 2 | tags: 5 | faqs: 4

slug: dont-replace-your-roof-restore-it-instead
title: Don't Replace Your Roof — Restore It Instead
meta_title: Don't Replace Your Roof — Restore It Instead | Florida Law 627.7011
published: true
categories: 2 | tags: 5 | faqs: 6
```

### ✅ Both Posts in Sitemap
```xml
<loc>https://allphaseconstructionfl.com/blog/professional-roof-inspection-south-florida</loc>
<loc>https://allphaseconstructionfl.com/blog/dont-replace-your-roof-restore-it-instead</loc>
```

### ✅ Blog Index in Sitemap
```xml
<loc>https://allphaseconstructionfl.com/blog</loc>
```

### ✅ Total Blog Coverage
- **57 unique blog posts** in sitemap
- **1** from blog-posts.json
- **57** from Supabase (includes the 2 newly migrated posts)

## How It Works Now

1. **BlogPostPage.tsx** queries Supabase by slug
2. **BlogIndexPage.tsx** fetches all published posts from Supabase
3. Both pages will display:
   - Unique `<title>` from `meta_title` field
   - Unique `<meta name="description">` from `meta_description` field
   - H1 heading from `title` field
   - Full HTML content rendered via `dangerouslySetInnerHTML`
   - Structured FAQ section at bottom
   - Related posts sidebar

## Post-Deploy Checklist

After deployment, verify:
- [ ] `/blog/professional-roof-inspection-south-florida` returns HTTP 200
- [ ] `/blog/dont-replace-your-roof-restore-it-instead` returns HTTP 200
- [ ] Both have unique page titles in browser tab
- [ ] Both have proper H1 headings
- [ ] Both appear on `/blog` index page
- [ ] Both appear in `/sitemap.xml`
- [ ] FAQ sections render properly
- [ ] Images load correctly

## File Changes
- `scripts/generate-sitemap.mjs` - Enhanced to read from both sources
- Database: 2 new blog post records inserted

## Source of Truth
**Supabase `blog_posts` table** is now the single source of truth for all blog content. The markdown files in `/blog/` are no longer used by the routing system.
