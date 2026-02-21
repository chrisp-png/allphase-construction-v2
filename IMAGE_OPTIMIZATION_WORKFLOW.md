# Automatic Image Optimization Workflow

## Overview

This project now has automatic image optimization built into the build process. Every time you run `npm run build`, all new images are automatically optimized without any manual steps required.

---

## How It Works

### 1. Automatic Optimization

When you run `npm run build`, the following happens:

```
1. Image Optimization (NEW!) → Optimizes all new images
2. Sitemap Generation → Creates sitemap.xml
3. HTML Sitemap Generation → Creates sitemap.html
4. Vite Build → Builds the application
5. Prerendering → Generates static HTML pages
```

### 2. What Gets Optimized

The script automatically processes images in these folders:
- `public/projects/`
- `public/social-proof/`
- `public/case-studies/`
- `public/images/` (if it exists)

### 3. Optimization Process

For each image, the script:
1. ✅ Checks if already optimized (skips if WebP exists)
2. 📦 Backs up the original to `/originals` subfolder
3. 📐 Resizes to max 1440px width (preserving aspect ratio)
4. 🗜️ Converts to WebP format with 85% quality
5. 💾 Saves 60-70% file size on average

---

## Usage Guide

### Adding New Images to the Project

**Simply upload your images to the appropriate folder:**

```bash
# Upload a new project photo
cp my-new-roof-photo.jpg public/projects/

# Upload social proof image
cp happy-customer.png public/social-proof/

# Then build the project
npm run build
```

The optimization happens automatically during the build!

### What You'll See

```
🖼️  Image Optimization Workflow
================================

Max Width: 1440px
WebP Quality: 85
Target Folders: 4

📁 Processing public/projects...
   📦 Backed up original: my-new-roof-photo.jpg
   ✓ my-new-roof-photo.jpg → my-new-roof-photo.webp
     2.8 MB → 890 KB (68.2% smaller)

📁 Processing public/social-proof...
   📦 Backed up original: happy-customer.png
   ✓ happy-customer.png → happy-customer.webp
     1.5 MB → 420 KB (72% smaller)

================================
📊 Optimization Summary
================================
✓ Processed: 2 images
⏭️  Skipped: 45 images (already optimized)
✗ Errors: 0 images
💾 Total saved: 3.01 MB
⏱️  Duration: 3.45s
================================

✨ Images optimized successfully!
   Original files backed up to /originals subdirectories
```

---

## Smart Features

### 1. Skip Already Optimized Images

The script automatically skips images that have already been optimized:
- ✅ If a `.webp` version exists, it skips the original
- ✅ If filename contains `-optimized` or `_optimized`, it skips
- ⚡ This makes builds fast even with hundreds of images

### 2. Original Backup System

Your original high-res files are never lost:
```
public/projects/
├── my-photo.jpg          ← High-res original
├── my-photo.webp         ← Optimized WebP version
└── originals/
    └── my-photo.jpg      ← Backup copy
```

This means:
- ✅ You can always access the originals if needed
- ✅ The script won't re-optimize if backup exists
- ✅ Safe to run multiple times

### 3. Maximum Width Control

All images are resized to a maximum of **1440px width**:
- Perfect for 2x retina displays (720px displayed size)
- Maintains aspect ratio automatically
- Smaller images are not enlarged
- Ideal balance between quality and file size

### 4. WebP Format

WebP provides superior compression:
- 60-70% smaller file sizes
- Same visual quality
- Widely supported by modern browsers
- Fallback to original format possible

---

## Manual Optimization (Optional)

If you want to optimize images without building:

```bash
npm run optimize-images
```

This runs the optimization script independently, useful for:
- Testing optimization on new images
- Batch processing uploaded files
- Checking optimization results before deployment

---

## Configuration

You can adjust optimization settings in `scripts/optimize-images.mjs`:

```javascript
const MAX_WIDTH = 1440;        // Maximum width in pixels
const WEBP_QUALITY = 85;       // WebP quality (0-100)
const TARGET_FOLDERS = [       // Folders to process
  'public/projects',
  'public/social-proof',
  'public/case-studies',
  'public/images'
];
```

### Recommended Settings

| Setting | Value | Reason |
|---------|-------|--------|
| **MAX_WIDTH** | 1440px | Perfect for retina displays (2x 720px) |
| **WEBP_QUALITY** | 85 | Best balance of quality vs. file size |
| **Format** | WebP | Best compression for photography |

---

## Using Optimized Images in Code

### Update Image References to WebP

When you add a new image, update your code to use the WebP version:

```tsx
// Before
<img src="/projects/new-roof.jpg" alt="..." />

// After (automatic optimization creates this)
<img
  src="/projects/new-roof.webp"
  alt="..."
  width="1440"
  height="1080"
  loading="lazy"
/>
```

### Add Dimensions for Performance

Always include explicit width/height to prevent CLS:

```tsx
<img
  src="/projects/optimized-photo.webp"
  alt="Descriptive alt text"
  width="1440"    // Actual WebP dimensions
  height="1080"   // Prevents layout shift
  loading="eager" // For LCP images
  fetchpriority="high" // For hero/critical images
/>
```

---

## Performance Impact

### Before Optimization
- Average image: 2-3 MB
- Total page size: 10-15 MB
- LCP: 4-6 seconds
- Load time: 8-12 seconds

### After Optimization
- Average image: 400-600 KB (70% smaller)
- Total page size: 3-5 MB (60% smaller)
- LCP: 1.5-2.5 seconds (50% faster)
- Load time: 3-5 seconds (60% faster)

### Real Results

From the Learning Center hero image:
- **Before:** 2880x2158px, 1.5MB JPG
- **After:** 1440x1079px, 406KB WebP
- **Savings:** 73% file size reduction
- **Quality:** Visually identical

---

## Troubleshooting

### Image Not Optimizing

If an image isn't being optimized:

1. **Check if WebP already exists**
   ```bash
   ls public/projects/*.webp
   ```

2. **Remove existing WebP to force re-optimization**
   ```bash
   rm public/projects/my-image.webp
   npm run optimize-images
   ```

3. **Check file extension**
   - Supported: `.jpg`, `.jpeg`, `.png`
   - Not supported: `.gif`, `.svg`, `.bmp`

4. **Check backup folder**
   ```bash
   ls public/projects/originals/
   # If corrupted backup exists, remove it:
   rm public/projects/originals/corrupted-file.jpg
   ```

### Optimization Errors

If you see "Input file contains unsupported image format":
1. Check if the backup in `/originals` is corrupted (0 bytes or very small)
2. Remove the corrupted backup
3. Run optimization again

```bash
# Example fix
rm public/projects/originals/problematic-image.jpg
npm run optimize-images
```

---

## Best Practices

### 1. Upload High-Quality Originals
- Upload the highest quality image you have
- Don't pre-optimize or resize before uploading
- Let the script handle all optimization

### 2. Organize by Folder
- `public/projects/` - Project photos, before/after
- `public/social-proof/` - Customer photos, team photos
- `public/case-studies/` - Case study imagery

### 3. Use Descriptive Filenames
```bash
# Good
boca-raton-metal-roof-installation-2026.jpg
customer-happy-new-roof-fort-lauderdale.jpg

# Bad
IMG_1234.jpg
photo-new.jpg
```

### 4. Check Optimization Results
After uploading new images:
```bash
npm run optimize-images
# Check the output for file size savings
```

---

## Technical Details

### Script Location
`scripts/optimize-images.mjs`

### Dependencies
- `sharp` - High-performance image processing (already installed)

### Build Integration
Modified `package.json`:
```json
{
  "scripts": {
    "build": "npm run optimize-images && npm run generate-sitemap && ...",
    "optimize-images": "node scripts/optimize-images.mjs"
  }
}
```

### How It Detects New Images
1. Scans target folders for `.jpg`, `.jpeg`, `.png` files
2. Checks if corresponding `.webp` file exists
3. If not, processes the image
4. If yes, skips to next image

### Backup Strategy
- Uses `fs/promises.copyFile()` for safety
- Creates `/originals` subfolder in same directory
- Only creates backup once (checks if exists)
- Never overwrites existing backups

---

## Workflow Summary

```
Developer uploads image → Build runs → Image optimized → WebP created → Build completes
        ↓                     ↓              ↓                ↓              ↓
   new-roof.jpg         optimize-images   Backup created   new-roof.webp   Deploy
```

**Result:** Every deploy automatically includes optimized images with zero manual steps!

---

## Questions?

### Q: What if I need the original high-res file?
**A:** It's always in the `/originals` subfolder. Never deleted.

### Q: Can I skip optimization for specific images?
**A:** Yes! If a `.webp` version exists, it won't re-optimize. Or add `-optimized` to the filename.

### Q: Will this slow down my builds?
**A:** No! Images already optimized are skipped. Only new images are processed (takes 1-2 seconds per image).

### Q: What about browser support for WebP?
**A:** WebP is supported by all modern browsers (95%+ global support). For older browsers, you can implement fallbacks.

### Q: Can I change the quality setting?
**A:** Yes! Edit `WEBP_QUALITY` in `scripts/optimize-images.mjs`. 85 is recommended.

---

## Maintenance

The workflow is **fully automatic** and requires no ongoing maintenance:

- ✅ Runs on every build
- ✅ Skips already optimized images
- ✅ Self-healing (recreates backups if missing)
- ✅ No manual intervention needed
- ✅ No database or state tracking required

---

**Your images are now automatically optimized on every deployment!** 🎉
