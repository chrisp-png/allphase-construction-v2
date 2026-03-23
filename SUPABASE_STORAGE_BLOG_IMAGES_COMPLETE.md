# Blog Featured Images via Supabase Storage - Complete ✅

## Problem Solved
The project was exceeding the 100MB deploy limit when adding blog featured images to the repository. Moving images to Supabase Storage keeps the repo lean while providing fast, CDN-backed image delivery.

## Solution Implemented

### 1. Supabase Storage Setup
Created a public `blog-images` bucket with:
- **Bucket ID:** `blog-images`
- **Public access:** Enabled for reading
- **File size limit:** 5MB per file
- **Allowed formats:** JPEG, PNG, WebP, GIF

### 2. RLS Policies
```sql
-- Public read access
CREATE POLICY "Public read access for blog images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- Anonymous upload (for automation/scripts)
CREATE POLICY "Anonymous users can upload blog images"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (bucket_id = 'blog-images');

-- Authenticated upload
CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images');
```

### 3. Image Upload
**File:** `metal-roofing-standing-seam-featured.webp`
- **Size:** 199.69 KB (optimized)
- **Dimensions:** 1200x1600px
- **Format:** WebP
- **URL:** https://vsjebxljdhomgmqbqgdi.supabase.co/storage/v1/object/public/blog-images/metal-roofing-standing-seam-featured.webp

### 4. Database Update
Updated `blog_posts` table:
```sql
UPDATE blog_posts 
SET featured_image = 'https://vsjebxljdhomgmqbqgdi.supabase.co/storage/v1/object/public/blog-images/metal-roofing-standing-seam-featured.webp'
WHERE slug = 'metal-roofing-south-florida-what-homeowners-need-to-know';
```

### 5. Vite Config Cleanup
Removed the images directory copy logic from `vite.config.ts` since blog images are now served from Supabase Storage instead of the static build.

## Benefits
✅ **No repo bloat:** Images stored externally
✅ **Fast delivery:** Supabase CDN distribution
✅ **Easy management:** Upload via Storage API or dashboard
✅ **Scalable:** Can add unlimited blog images without affecting deploy size
✅ **Under deploy limit:** Project stays well under 100MB

## Usage for Future Blog Posts

### Via Supabase Dashboard
1. Go to Supabase Dashboard > Storage > blog-images
2. Upload image (max 5MB, formats: JPEG, PNG, WebP, GIF)
3. Copy the public URL
4. Update blog post record with the URL

### Via API/Script
```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Upload image
const { data, error } = await supabase.storage
  .from('blog-images')
  .upload('filename.webp', fileBuffer, {
    contentType: 'image/webp',
    cacheControl: '31536000',
    upsert: true
  });

// Get public URL
const { data: { publicUrl } } = supabase.storage
  .from('blog-images')
  .getPublicUrl('filename.webp');

// Update blog post
await supabase
  .from('blog_posts')
  .update({ featured_image: publicUrl })
  .eq('slug', 'blog-post-slug');
```

## Image Optimization Guidelines
- **Max width:** 1200px
- **Format:** WebP preferred (best compression)
- **Target size:** Under 200KB
- **Quality:** 40-60 for WebP (adjust based on image complexity)
- **Aspect ratio:** Maintain original (no distortion)

## Current Blog Posts with Featured Images
1. **Metal Roofing South Florida** 
   - Slug: `metal-roofing-south-florida-what-homeowners-need-to-know`
   - Image: `metal-roofing-standing-seam-featured.webp`
   - URL: https://vsjebxljdhomgmqbqgdi.supabase.co/storage/v1/object/public/blog-images/metal-roofing-standing-seam-featured.webp
