# Image Optimization - Quick Start

## Adding New Images (Simple 3-Step Process)

### Step 1: Upload Your Image
```bash
# Copy your high-res image to the appropriate folder
cp my-new-photo.jpg public/projects/
# or
cp customer-photo.png public/social-proof/
```

### Step 2: Run Build
```bash
npm run build
```

### Step 3: Update Code to Use WebP
```tsx
// Your code
<img
  src="/projects/my-new-photo.webp"
  alt="Description"
  width="1440"
  height="1080"
  loading="lazy"
/>
```

**That's it!** The image is automatically:
- ✅ Resized to 1440px max width
- ✅ Converted to WebP format
- ✅ Compressed 60-70% smaller
- ✅ Original backed up to `/originals`

---

## Quick Commands

```bash
# Build with automatic optimization
npm run build

# Optimize images only (without building)
npm run optimize-images
```

---

## Target Folders

Images in these folders are automatically optimized:
- `public/projects/`
- `public/social-proof/`
- `public/case-studies/`
- `public/images/`

---

## What Happens During Build

```
1. 🖼️  Image Optimization (NEW!)
   ├── Scans target folders
   ├── Backs up originals
   ├── Resizes to 1440px max
   ├── Converts to WebP (85% quality)
   └── Saves 60-70% file size

2. 🗺️  Sitemap Generation

3. 🏗️  Vite Build

4. 📄 Prerendering
```

---

## Optimization Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **File Size** | 2-3 MB | 400-600 KB | **70% smaller** |
| **Format** | JPG/PNG | WebP | Better compression |
| **Dimensions** | 2880px+ | 1440px | Perfect for retina |
| **Load Time** | 4-6s | 1.5-2.5s | **60% faster** |

---

## Best Practices

✅ **DO:**
- Upload highest quality originals
- Use descriptive filenames
- Add width/height in code
- Use `loading="eager"` for hero images

❌ **DON'T:**
- Pre-resize images before uploading
- Pre-optimize or compress images
- Delete the `/originals` folder
- Manually create WebP files

---

## Troubleshooting

### Image not optimizing?
```bash
# Check if WebP already exists
ls public/projects/*.webp

# Force re-optimization
rm public/projects/my-image.webp
npm run optimize-images
```

### Seeing errors?
```bash
# Remove corrupted backup
rm public/projects/originals/problematic-file.jpg

# Try again
npm run optimize-images
```

---

## Need More Details?

See `IMAGE_OPTIMIZATION_WORKFLOW.md` for complete documentation.
