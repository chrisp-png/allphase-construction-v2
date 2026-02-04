/**
 * Image to WebP Converter Script
 *
 * This script converts all JPG, JPEG, and PNG images in the public directory to WebP format.
 * WebP typically reduces file size by 25-35% compared to JPEG/PNG while maintaining quality.
 *
 * Prerequisites:
 *   npm install sharp --save-dev
 *
 * Usage:
 *   node convert-to-webp.js
 *
 * The script will:
 * 1. Find all .jpg, .jpeg, and .png files in the public directory
 * 2. Convert each to .webp format at 85% quality
 * 3. Save the WebP version alongside the original
 * 4. Report file size savings
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('Error: sharp module not found.');
  console.error('Please install it by running: npm install sharp --save-dev');
  process.exit(1);
}

const publicDir = path.join(__dirname, 'public');
const extensions = ['.jpg', '.jpeg', '.png'];

// Get all image files in public directory
function getImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (extensions.includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

// Convert single image to WebP
async function convertToWebP(inputPath) {
  const parsedPath = path.parse(inputPath);
  const outputPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

  try {
    // Get original file size
    const originalSize = fs.statSync(inputPath).size;

    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    // Get new file size
    const newSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`  ${formatBytes(originalSize)} → ${formatBytes(newSize)} (${savings}% smaller)\n`);

    return { success: true, originalSize, newSize };
  } catch (error) {
    console.error(`✗ Error converting ${path.basename(inputPath)}:`, error.message);
    return { success: false };
  }
}

// Format bytes to human readable
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

// Main execution
async function main() {
  console.log('Image to WebP Converter\n');
  console.log(`Scanning ${publicDir} for images...\n`);

  const imageFiles = getImageFiles(publicDir);

  if (imageFiles.length === 0) {
    console.log('No images found to convert.');
    return;
  }

  console.log(`Found ${imageFiles.length} images to convert.\n`);

  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let successCount = 0;

  for (const file of imageFiles) {
    const result = await convertToWebP(file);
    if (result.success) {
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
      successCount++;
    }
  }

  console.log('='.repeat(60));
  console.log(`Conversion complete!`);
  console.log(`Successfully converted: ${successCount}/${imageFiles.length} images`);
  console.log(`Total size: ${formatBytes(totalOriginalSize)} → ${formatBytes(totalNewSize)}`);
  const totalSavings = ((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`Total savings: ${totalSavings}%`);
  console.log('='.repeat(60));

  console.log('\nNext steps:');
  console.log('1. Update image references in your code from .jpg/.png to .webp');
  console.log('2. Test the website to ensure all images load correctly');
  console.log('3. Optionally remove original .jpg/.png files after verification');
}

main().catch(console.error);
