# Image Optimization Guide

This document describes the image optimizations implemented in this project and how to maintain them.

## Implemented Optimizations

### 1. ✅ Explicit Width and Height Attributes

All `<img>` tags now include `width` and `height` attributes. This prevents layout shift (CLS) during page load by reserving space for images before they load.

**Example:**
```jsx
<img
  src="/team-photo.jpg"
  alt="Team photo"
  width="800"
  height="600"
  className="w-full h-auto"
/>
```

### 2. ✅ Lazy Loading for Offscreen Images

All images below the fold use `loading="lazy"` to defer loading until they're needed. This improves initial page load performance.

**Where applied:**
- Gallery images in `/projects`
- Customer testimonial photos
- Case study images
- About page images

**Example:**
```jsx
<img
  src="/project-image.jpg"
  alt="Project"
  width="400"
  height="300"
  loading="lazy"
/>
```

### 3. ✅ Hero Image Priority

The main hero image on the homepage uses `fetchpriority="high"` to tell the browser to prioritize loading this critical above-the-fold image.

**Location:** `src/components/HeroRoofing.tsx`

**Example:**
```jsx
<img
  src="/team_drone_photo.png"
  alt="Hero image"
  width="1920"
  height="1080"
  fetchpriority="high"
/>
```

### 4. 🔄 WebP Conversion (Next Step)

WebP format typically reduces file size by 25-35% compared to JPEG/PNG while maintaining visual quality.

## Converting Images to WebP

### Option 1: Using the Provided Script (Recommended)

We've included a Node.js script to batch convert all images:

```bash
# Install sharp (image processing library)
npm install sharp --save-dev

# Run the conversion script
node convert-to-webp.js
```

The script will:
- Convert all .jpg, .jpeg, and .png files in the `public/` directory
- Save WebP versions alongside originals
- Report file size savings
- Preserve original files for backup

### Option 2: Manual Conversion with ImageMagick

If you prefer manual conversion:

```bash
# Install ImageMagick (if not already installed)
# macOS: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick

# Convert a single image
magick input.jpg -quality 85 output.webp

# Batch convert all images in public directory
cd public
for file in *.{jpg,jpeg,png}; do
  [ -f "$file" ] && magick "$file" -quality 85 "${file%.*}.webp"
done
```

### Option 3: Online Tools

For smaller projects or one-off conversions:
- [Squoosh.app](https://squoosh.app/) - Browser-based image optimizer
- [CloudConvert](https://cloudconvert.com/jpg-to-webp) - Online converter

## After Converting to WebP

### 1. Update Image References

Update all image paths in the codebase from `.jpg`/`.png` to `.webp`:

```jsx
// Before
<img src="/team-photo.jpg" alt="Team" />

// After
<img src="/team-photo.webp" alt="Team" />
```

### 2. Verify All Images Load

Test the website thoroughly to ensure all images display correctly.

### 3. Remove Original Files (Optional)

After confirming WebP images work correctly, you can optionally delete the original .jpg/.png files to save space.

## Browser Support

WebP is supported by:
- Chrome/Edge 23+
- Firefox 65+
- Safari 14+ (macOS Big Sur)
- iOS Safari 14+

**Browser support:** 96%+ of all users globally

For older browsers, you can implement fallbacks using the `<picture>` element:

```jsx
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.jpg" alt="Fallback" />
</picture>
```

## Performance Impact

Expected improvements after implementing all optimizations:

| Metric | Expected Improvement |
|--------|---------------------|
| Page Load Time | 15-30% faster |
| Largest Contentful Paint (LCP) | 20-40% improvement |
| Cumulative Layout Shift (CLS) | Eliminated image-related shifts |
| Total Page Weight | 25-35% reduction |
| Lighthouse Performance Score | +10-20 points |

## Maintenance

When adding new images to the project:

1. ✅ Convert to WebP format before adding to `public/`
2. ✅ Add `width` and `height` attributes to `<img>` tags
3. ✅ Add `loading="lazy"` if the image is below the fold
4. ✅ Add `fetchpriority="high"` only for critical hero images
5. ✅ Use descriptive `alt` text for accessibility

## Image Size Guidelines

For optimal performance:

- **Hero images:** Max 1920px wide, ~150-300 KB
- **Gallery/thumbnail images:** 400-800px wide, ~50-100 KB
- **Customer photos:** 300-600px wide, ~30-80 KB
- **Icon/logos:** SVG format preferred, or very small WebP

## Tools for Checking Performance

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- Chrome DevTools Lighthouse
- Chrome DevTools Network tab (filter by Img)

## Questions?

If you have questions about image optimization, check:
- [Web.dev Image Optimization Guide](https://web.dev/fast/#optimize-your-images)
- [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
