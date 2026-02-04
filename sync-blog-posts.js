import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Missing Supabase credentials in .env file');
  console.error('Required: VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function syncBlogPosts() {
  try {
    console.log('📚 Reading blog posts from JSON file...\n');

    const blogPostsPath = join(__dirname, 'src', 'data', 'blog-posts.json');
    const blogPostsData = readFileSync(blogPostsPath, 'utf-8');
    const posts = JSON.parse(blogPostsData);

    console.log(`Found ${posts.length} blog post(s) to sync\n`);

    let syncedCount = 0;
    let errorCount = 0;

    for (const post of posts) {
      try {
        console.log(`Processing: "${post.title}" (slug: ${post.slug})`);

        const { data: existing, error: checkError } = await supabase
          .from('blog_posts')
          .select('id')
          .eq('slug', post.slug)
          .maybeSingle();

        if (checkError) {
          console.error(`  ❌ Error checking post: ${checkError.message}`);
          errorCount++;
          continue;
        }

        const postData = {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          featured_image: post.featuredImage,
          author: post.author || 'All Phase Construction USA',
          published_date: post.publishedDate,
          categories: post.categories || [],
          tags: post.tags || [],
          meta_title: post.metaTitle || post.title,
          meta_description: post.metaDescription || post.excerpt,
          faqs: post.faqs || [],
          published: post.published !== undefined ? post.published : true,
        };

        if (existing) {
          const { error: updateError } = await supabase
            .from('blog_posts')
            .update(postData)
            .eq('id', existing.id);

          if (updateError) {
            console.error(`  ❌ Error updating: ${updateError.message}`);
            errorCount++;
          } else {
            console.log(`  ✅ Updated existing post`);
            syncedCount++;
          }
        } else {
          const { error: insertError } = await supabase
            .from('blog_posts')
            .insert([postData]);

          if (insertError) {
            console.error(`  ❌ Error inserting: ${insertError.message}`);
            errorCount++;
          } else {
            console.log(`  ✅ Created new post`);
            syncedCount++;
          }
        }
      } catch (err) {
        console.error(`  ❌ Unexpected error: ${err.message}`);
        errorCount++;
      }

      console.log('');
    }

    console.log('═══════════════════════════════════════');
    console.log(`✨ Sync complete!`);
    console.log(`   Successfully synced: ${syncedCount}`);
    if (errorCount > 0) {
      console.log(`   Errors: ${errorCount}`);
    }
    console.log('═══════════════════════════════════════\n');

    process.exit(errorCount > 0 ? 1 : 0);

  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

syncBlogPosts();
