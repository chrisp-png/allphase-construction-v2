import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const CANONICAL_DOMAIN = 'https://allphaseconstructionfl.com';
const ROOT_URL_WITH_SLASH = `${CANONICAL_DOMAIN}/`;

console.log('\n🔍 Validating sitemap.xml...\n');

// ═══════════════════════════════════════════════════════════════════════════
// READ SITEMAP
// ═══════════════════════════════════════════════════════════════════════════
let sitemap;
try {
  sitemap = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  console.log(`✅ Successfully read ${SITEMAP_PATH}`);
} catch (err) {
  console.error(`❌ FAIL: Could not read sitemap.xml`);
  console.error(`   Path: ${SITEMAP_PATH}`);
  console.error(`   Error: ${err.message}`);
  process.exit(1);
}

const errors = [];
const warnings = [];

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 1: File must start with <?xml ...> or <urlset>
// ═══════════════════════════════════════════════════════════════════════════
const trimmedContent = sitemap.trim();
if (!trimmedContent.startsWith('<?xml') && !trimmedContent.startsWith('<urlset')) {
  errors.push('Sitemap must start with <?xml or <urlset> (no preface text allowed)');
}

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 2: No forbidden tags (<lastmod>, <changefreq>, <priority>)
// ═══════════════════════════════════════════════════════════════════════════
const forbiddenTags = ['<lastmod>', '<changefreq>', '<priority>'];
for (const tag of forbiddenTags) {
  if (sitemap.includes(tag)) {
    const count = (sitemap.match(new RegExp(tag, 'g')) || []).length;
    errors.push(`Found ${count} forbidden ${tag} tag(s)`);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// CHECK 3: Extract all <loc> values and validate trailing slashes
// ═══════════════════════════════════════════════════════════════════════════
const locRegex = /<loc>([^<]+)<\/loc>/g;
const matches = [...sitemap.matchAll(locRegex)];

if (matches.length === 0) {
  errors.push('No <loc> tags found in sitemap');
} else {
  console.log(`\n📍 Found ${matches.length} URL(s) in sitemap\n`);

  for (const match of matches) {
    const url = match[1];
    
    // Special case: root URL must have trailing slash
    if (url === ROOT_URL_WITH_SLASH) {
      console.log(`   ✅ ${url} (root - trailing slash OK)`);
      continue;
    }
    
    // All other URLs must NOT have trailing slash
    if (url.endsWith('/')) {
      errors.push(`URL has forbidden trailing slash: ${url}`);
      console.log(`   ❌ ${url} (INVALID: trailing slash)`);
    } else if (url.startsWith(CANONICAL_DOMAIN)) {
      console.log(`   ✅ ${url}`);
    } else {
      warnings.push(`URL does not start with canonical domain: ${url}`);
      console.log(`   ⚠️  ${url} (wrong domain)`);
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// RESULTS
// ═══════════════════════════════════════════════════════════════════════════
console.log('\n' + '='.repeat(70));
console.log('VALIDATION RESULTS');
console.log('='.repeat(70) + '\n');

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ ✅ ✅  ALL CHECKS PASSED  ✅ ✅ ✅\n');
  console.log('Sitemap is canonical-clean:');
  console.log('  • Starts with proper XML header or <urlset>');
  console.log('  • No <lastmod>, <changefreq>, or <priority> tags');
  console.log('  • Root URL has trailing slash');
  console.log('  • All other URLs have NO trailing slash');
  console.log('  • All URLs use canonical domain\n');
  process.exit(0);
} else {
  if (warnings.length > 0) {
    console.log(`⚠️  ${warnings.length} WARNING(S):\n`);
    warnings.forEach((w, i) => console.log(`   ${i + 1}. ${w}`));
    console.log('');
  }
  
  if (errors.length > 0) {
    console.log(`❌ ${errors.length} ERROR(S) - BUILD MUST FAIL:\n`);
    errors.forEach((e, i) => console.log(`   ${i + 1}. ${e}`));
    console.log('\n💥 Sitemap validation FAILED\n');
    process.exit(1);
  }
  
  // Warnings only (no errors)
  console.log('⚠️  Validation passed with warnings\n');
  process.exit(0);
}
