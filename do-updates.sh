#!/bin/bash

# Function to update a blog post
update_post() {
    local slug="$1"
    local html_file="/tmp/blog-${slug}.html"

    echo "Updating: $slug"

    # Read HTML content and escape it for SQL
    html_content=$(cat "$html_file" | sed "s/'/''/g")

    # Create SQL update statement
    echo "UPDATE blog_posts SET content = '${html_content}' WHERE slug = '${slug}';" > "/tmp/update-${slug}.sql"

    echo "  - Content length: $(wc -c < "$html_file") bytes"
    echo "  - SQL file: /tmp/update-${slug}.sql"
}

# Update all posts
update_post "can-your-hoa-say-no-to-a-metal-roof-a-guide-for-homeowners"
update_post "exposed-ceilings-can-have-challenges-when-getting-a-new-roof"
update_post "how-often-should-i-replace-my-roof-in-south-florida"
update_post "what-to-expect-during-a-roof-replacement-project"
update_post "bug-free-summers-the-best-screens-for-insect-protection"
update_post "why-choose-tile-roofing-in-south-florida"
update_post "why-homeowners-should-avoid-pulling-their-own-roofing-permit"
update_post "are-there-any-benefits-to-dark-colored-roof-shingles-in-south-florida"
update_post "impact-of-tariffs-on-metal-roofing-prices"

echo ""
echo "✅ All SQL files generated in /tmp/"
echo "Now executing updates via Supabase..."
