#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Analyzing canonical tag issues...\n');

// Find all files with DOM-based canonical setting
const pagesDir = '/tmp/cc-agent/61908077/project/src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let fixedCount = 0;
let skippedCount = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Pattern 1: Remove standalone Helmet blocks with ONLY canonical
  const helmetOnlyCanonical = /\s*<Helmet>\s*<link rel="canonical"[^>]+\/>\s*<\/Helmet>\s*/g;
  if (content.match(helmetOnlyCanonical)) {
    content = content.replace(helmetOnlyCanonical, '');
    changed = true;
    console.log(`  ✅ Removed Helmet canonical from ${file}`);
  }

  // Pattern 2: Remove DOM-based canonical setting (linkCanonical)
  const domCanonicalBlock = /\s*const linkCanonical = document\.querySelector\('link\[rel="canonical"\]'\);[\s\S]*?document\.head\.appendChild\(link\);\s*}\s*/g;
  if (content.match(domCanonicalBlock)) {
    content = content.replace(domCanonicalBlock, '');
    changed = true;
    console.log(`  ✅ Removed DOM canonical manipulation from ${file}`);
  }

  // Pattern 3: Remove unused Helmet import if no longer referenced
  if (changed && !content.includes('<Helmet>') && !content.match(/Helmet[^a-zA-Z]/)) {
    content = content.replace(/import\s+{\s*Helmet\s*}\s+from\s+['"]react-helmet-async['"];\s*\n?/g, '');
    console.log(`  ✅ Removed unused Helmet import from ${file}`);
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
  } else {
    skippedCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} files`);
console.log(`⚠️  Skipped ${skippedCount} files (no changes needed)`);
console.log('\n✨ All canonicals will now be managed by CanonicalManager.tsx\n');
