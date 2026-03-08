import sharp from 'sharp';
import { readdir, stat, mkdir, copyFile } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { existsSync } from 'fs';

const MAX_WIDTH = 1440;
const WEBP_QUALITY = 85;
const TARGET_FOLDERS = [
  'public/projects',
  'public/social-proof',
  'public/case-studies',
  'public/images'
];

const stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  savedBytes: 0
};

async function ensureDirectoryExists(dirPath) {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true });
  }
}

async function getImageFiles(directory) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
      const fullPath = join(directory, entry.name);

      if (entry.isDirectory()) {
        // Skip originals folder
        if (entry.name === 'originals') continue;

        // Recursively get files from subdirectories
        const subFiles = await getImageFiles(fullPath);
        files.push(...subFiles);
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        // Only process JPG and PNG files (not already WebP)
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }

    return files;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return []; // Directory doesn't exist, skip it
    }
    throw error;
  }
}

function getWebPPath(imagePath) {
  const dir = dirname(imagePath);
  const ext = extname(imagePath);
  const name = basename(imagePath, ext);
  return join(dir, `${name}.webp`);
}

function getBackupPath(imagePath) {
  const dir = dirname(imagePath);
  const fileName = basename(imagePath);
  return join(dir, 'originals', fileName);
}

async function isAlreadyOptimized(imagePath) {
  // Check if WebP version exists
  const webpPath = getWebPPath(imagePath);
  if (existsSync(webpPath)) {
    return true;
  }

  // Check if this filename indicates it's already optimized
  const name = basename(imagePath, extname(imagePath));
  if (name.includes('-optimized') || name.includes('_optimized')) {
    return true;
  }

  return false;
}

async function optimizeImage(imagePath) {
  try {
    const dir = dirname(imagePath);
    const ext = extname(imagePath);
    const name = basename(imagePath, ext);
    const fileName = basename(imagePath);

    // Get original file size
    const originalStats = await stat(imagePath);
    const originalSize = originalStats.size;

    // Skip placeholder files (very small files, likely text placeholders)
    if (originalSize < 1000) {
      console.log(`   â­ï¸  Skipped ${fileName} (placeholder file)`);
      stats.skipped++;
      return;
    }

    // Determine source file (original or backup)
    const backupPath = getBackupPath(imagePath);
    let sourceFile = imagePath;

    // If backup doesn't exist, create it
    if (!existsSync(backupPath)) {
      const originalsDir = join(dir, 'originals');
      await ensureDirectoryExists(originalsDir);

      try {
        await copyFile(imagePath, backupPath);
        console.log(`   ð¦ Backed up original: ${fileName}`);
      } catch (error) {
        console.error(`   â ï¸  Could not backup ${fileName}: ${error.message}`);
        return;
      }
    } else {
      // Use the backup as source
      sourceFile = backupPath;
    }

    // Process the image
    const image = sharp(sourceFile);
    const metadata = await image.metadata();

    // Resize if needed
    let processedImage = image;
    if (metadata.width > MAX_WIDTH) {
      processedImage = image.resize(MAX_WIDTH, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Output as WebP
    const webpPath = getWebPPath(imagePath);
    await processedImage
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath);

    // Get optimized file size
    const optimizedStats = await stat(webpPath);
    const optimizedSize = optimizedStats.size;
    const savedBytes = originalSize - optimizedSize;
    const percentSaved = ((savedBytes / originalSize) * 100).toFixed(1);

    stats.savedBytes += savedBytes;
    stats.processed++;

    console.log(`   ✓ ${fileName} â ${basename(webpPath)}`);
    console.log(`     ${formatBytes(originalSize)} â ${formatBytes(optimizedSize)} (${percentSaved}% smaller)`);

  } catch (error) {
    console.error(`   â Error processing ${basename(imagePath)}: ${error.message}`);
    stats.errors++;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

async function processFolder(folderPath) {
  console.log(`\nð Processing ${folderPath}...`);

  const images = await getImageFiles(folderPath);

  if (images.length === 0) {
    console.log('   No images to process');
    return;
  }

  for (const imagePath of images) {
    if (await isAlreadyOptimized(imagePath)) {
      console.log(`   â­ï¸  Skipped ${basename(imagePath)} (already optimized)`);
      stats.skipped++;
      continue;
    }

    await optimizeImage(imagePath);
  }
}

async function main() {
  console.log('ð¼ï¸  Image Optimization Workflow');
  console.log('================================\n');
  console.log(`Max Width: ${MAX_WIDTH}px`);
  console.log(`WebP Quality: ${WEBP_QUALITY}`);
  console.log(`Target Folders: ${TARGET_FOLDERS.length}`);

  const startTime = Date.now();

  for (const folder of TARGET_FOLDERS) {
    await processFolder(folder);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\n================================');
  console.log('ð Optimization Summary');
  console.log('================================');
  console.log(`✓ Processed: ${stats.processed} images`);
  console.log(`â­ï¸  Skipped: ${stats.skipped} images (already optimized)`);
  console.log(`â Errors: ${stats.errors} images`);
  console.log(`ð¾ Total saved: ${formatBytes(stats.savedBytes)}`);
  console.log(`â±ï¸  Duration: ${duration}s`);
  console.log('================================\n');

  if (stats.errors > 0) {
    console.warn('â ï¸  Some images could not be optimized. Check errors above.');
  }

  if (stats.processed > 0) {
    console.log('â¨ Images optimized successfully!');
    console.log('   Original files backed up to /originals subdirectories');
  } else if (stats.skipped > 0) {
    console.log('â¨ All images already optimized!');
  } else {
    console.log('â¹ï¸  No images found to optimize');
  }
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
