#!/usr/bin/env node
import { readFileSync, readdirSync } from 'fs';
import pg from 'pg';
import dotenv from 'dotenv';

const { Client } = pg;

dotenv.config();

// Parse Supabase URL to get PostgreSQL connection details
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

// Construct PostgreSQL connection string
// Supabase format: https://PROJECT.supabase.co
// PostgreSQL format: postgresql://postgres:[PASSWORD]@db.PROJECT.supabase.co:5432/postgres

const projectId = supabaseUrl.replace('https://', '').replace('.supabase.co', '');

console.log('📦 Blog Content Update Tool\n');
console.log('Note: This requires database password. If not available,');
console.log('SQL files are ready to execute manually via Supabase Dashboard.\n');
console.log('=' .repeat(70));

// List all SQL files
const sqlFiles = readdirSync('.')
  .filter(f => f.startsWith('update-blog-') && f.endsWith('.sql'))
  .sort();

console.log(`\nFound ${sqlFiles.length} SQL update files:\n`);

for (let i = 0; i < sqlFiles.length; i++) {
  const file = sqlFiles[i];
  const content = readFileSync(file, 'utf-8');
  const slug = content.match(/WHERE slug = '([^']+)'/)[1];
  const htmlLength = content.length - 100; // Approximate HTML length

  console.log(`${i + 1}. ${file}`);
  console.log(`   Slug: ${slug}`);
  console.log(`   HTML length: ~${htmlLength.toLocaleString()} chars`);
  console.log('');
}

console.log('=' .repeat(70));
console.log('\n📋 MANUAL EXECUTION INSTRUCTIONS:\n');
console.log('Since direct database access requires credentials, execute these SQL');
console.log('files manually via the Supabase Dashboard:\n');
console.log('1. Go to: https://supabase.com/dashboard/project/' + projectId);
console.log('2. Navigate to: SQL Editor');
console.log('3. For each file (update-blog-1.sql through update-blog-9.sql):');
console.log('   - Open the file in a text editor');
console.log('   - Copy the entire SQL statement');
console.log('   - Paste into Supabase SQL Editor');
console.log('   - Click "Run" to execute');
console.log('   - Verify success message\n');
console.log('4. After all 9 updates, verify with this query:');
console.log('   SELECT slug, LENGTH(content) FROM blog_posts');
console.log('   WHERE slug LIKE \'%-in-south-florida%\' ORDER BY slug;');
console.log('\nAll SQL files are ready in the project root directory.');
console.log('=' .repeat(70));
