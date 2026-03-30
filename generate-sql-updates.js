const fs = require('fs');

const slugs = [
    'can-your-hoa-say-no-to-a-metal-roof-a-guide-for-homeowners',
    'exposed-ceilings-can-have-challenges-when-getting-a-new-roof',
    'how-often-should-i-replace-my-roof-in-south-florida',
    'what-to-expect-during-a-roof-replacement-project',
    'bug-free-summers-the-best-screens-for-insect-protection',
    'why-choose-tile-roofing-in-south-florida',
    'why-homeowners-should-avoid-pulling-their-own-roofing-permit',
    'are-there-any-benefits-to-dark-colored-roof-shingles-in-south-florida',
    'impact-of-tariffs-on-metal-roofing-prices'
];

console.log('-- SQL UPDATE STATEMENTS FOR BLOG POSTS\n');

for (const slug of slugs) {
    const htmlFile = `/tmp/blog-${slug}.html`;
    const html = fs.readFileSync(htmlFile, 'utf-8');

    // Escape single quotes by doubling them for SQL
    const escapedHtml = html.replace(/'/g, "''");

    console.log(`-- Update: ${slug}`);
    console.log(`-- Content length: ${html.length} characters`);
    console.log(`UPDATE blog_posts SET content = '${escapedHtml}' WHERE slug = '${slug}';\n`);
}

console.log('-- End of SQL updates');
