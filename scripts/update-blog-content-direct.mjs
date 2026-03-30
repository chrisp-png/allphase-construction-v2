import { readFileSync } from 'fs';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const slugs = [
    'exposed-ceilings-can-have-challenges-when-getting-a-new-roof',
    'can-your-hoa-say-no-to-a-metal-roof-a-guide-for-homeowners',
    'how-often-should-i-replace-my-roof-in-south-florida',
    'what-to-expect-during-a-roof-replacement-project',
    'bug-free-summers-the-best-screens-for-insect-protection',
    'why-choose-tile-roofing-in-south-florida',
    'why-homeowners-should-avoid-pulling-their-own-roofing-permit',
    'are-there-any-benefits-to-dark-colored-roof-shingles-in-south-florida',
    'impact-of-tariffs-on-metal-roofing-prices'
];

console.log('🚀 Updating blog posts in Supabase...\n');

for (const slug of slugs) {
    try {
        const htmlFile = `/tmp/blog-${slug}.html`;
        const html = readFileSync(htmlFile, 'utf-8');

        console.log(`📝 Updating: ${slug}`);
        console.log(`   Content length: ${html.length.toLocaleString()} chars`);

        const { data, error } = await supabase
            .from('blog_posts')
            .update({ content: html })
            .eq('slug', slug)
            .select('slug, LENGTH(content) as content_length');

        if (error) {
            console.error(`   ❌ Error: ${error.message}`);
        } else if (data && data.length > 0) {
            console.log(`   ✅ Updated successfully (${data[0].content_length} chars)`);
        } else {
            console.log(`   ⚠️  No rows updated`);
        }
    } catch (err) {
        console.error(`   ❌ Exception: ${err.message}`);
    }
    console.log('');
}

console.log('✅ All updates complete!');
console.log('\nVerifying...\n');

const { data: allPosts, error: verifyError } = await supabase
    .from('blog_posts')
    .select('slug, LENGTH(content) as len')
    .in('slug', slugs)
    .order('slug');

if (verifyError) {
    console.error('❌ Verification error:', verifyError.message);
} else {
    console.log('📊 Final content lengths:');
    for (const post of allPosts) {
        const status = post.len > 10000 ? '✅' : '⚠️';
        console.log(`${status} ${post.slug}: ${post.len.toLocaleString()} chars`);
    }
}
