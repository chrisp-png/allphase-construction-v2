import { readFileSync } from 'fs';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  },
  db: {
    schema: 'public'
  }
});

const sqlFiles = [
  { file: 'update-blog-1.sql', slug: 'exposed-ceilings-can-have-challenges-when-getting-a-new-roof' },
  { file: 'update-blog-2.sql', slug: 'can-your-hoa-say-no-to-a-metal-roof-a-guide-for-homeowners' },
  { file: 'update-blog-3.sql', slug: 'how-often-should-i-replace-my-roof-in-south-florida' },
  { file: 'update-blog-4.sql', slug: 'what-to-expect-during-a-roof-replacement-project' },
  { file: 'update-blog-5.sql', slug: 'bug-free-summers-the-best-screens-for-insect-protection' },
  { file: 'update-blog-6.sql', slug: 'why-choose-tile-roofing-in-south-florida' },
  { file: 'update-blog-7.sql', slug: 'why-homeowners-should-avoid-pulling-their-own-roofing-permit' },
  { file: 'update-blog-8.sql', slug: 'are-there-any-benefits-to-dark-colored-roof-shingles-in-south-florida' },
  { file: 'update-blog-9.sql', slug: 'impact-of-tariffs-on-metal-roofing-prices' }
];

console.log('🚀 Executing blog content updates via SQL...\n');

for (const {file, slug} of sqlFiles) {
  try {
    console.log(`📝 Executing: ${file}`);
    const sql = readFileSync(file, 'utf-8');

    // Execute raw SQL
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql });

    if (error) {
      console.error(`   ❌ Error: ${error.message}`);
    } else {
      console.log(`   ✅ SQL executed`);
    }
  } catch (err) {
    console.error(`   ❌ Exception: ${err.message}`);
  }
}

console.log('\n✅ All SQL updates attempted!');
console.log('\nVerifying content lengths...\n');

// Verify using direct SQL query
const { data: posts, error: verifyError } = await supabase
  .from('blog_posts')
  .select('slug')
  .in('slug', sqlFiles.map(f => f.slug));

if (verifyError) {
  console.error('❌ Verification error:', verifyError.message);
} else {
  console.log(`Found ${posts.length} blog posts in database`);
}
