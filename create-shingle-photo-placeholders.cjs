const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Use an existing real photo as template to create properly sized placeholders
const sourceDir = path.join(__dirname, 'public/social-proof');
const templateImage = path.join(sourceDir, 'pvc-roof-boca-raton-all-phase-construction-usa.jpg');

async function createPlaceholders() {
  console.log('Creating shingle photo placeholders with correct dimensions...\n');

  try {
    // Create 1200w version
    await sharp(templateImage)
      .resize(1200, 900)
      .webp({ quality: 80 })
      .toFile(path.join(sourceDir, 'new-shingle-install-boca-raton-1200w.webp'));
    
    console.log('✅ Created new-shingle-install-boca-raton-1200w.webp');

    // Create 600w version
    await sharp(templateImage)
      .resize(600, 450)
      .webp({ quality: 80 })
      .toFile(path.join(sourceDir, 'new-shingle-install-boca-raton-600w.webp'));
    
    console.log('✅ Created new-shingle-install-boca-raton-600w.webp');
    console.log('\nNote: These are template files. Replace with actual optimized shingle photo when available.');
  } catch (error) {
    console.error('Error creating placeholders:', error.message);
  }
}

createPlaceholders();
