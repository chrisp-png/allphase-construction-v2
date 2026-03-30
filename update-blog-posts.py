#!/usr/bin/env python3
import os
import re
import subprocess
import json

# List of blog files to process
blog_files = [
    ('can-your-hoa-say-no-to-a-metal-roof-a-guide-for-homeowners.md', 'can-your-hoa-say-no-to-a-metal-roof-a-guide-for-homeowners'),
    ('exposed-ceilings-can-have-challenges-when-getting-a-new-roof.md', 'exposed-ceilings-can-have-challenges-when-getting-a-new-roof'),
    ('how-often-should-i-replace-my-roof-in-south-florida.md', 'how-often-should-i-replace-my-roof-in-south-florida'),
    ('what-to-expect-during-a-roof-replacement-project.md', 'what-to-expect-during-a-roof-replacement-project'),
    ('bug-free-summers-the-best-screens-for-insect-protection.md', 'bug-free-summers-the-best-screens-for-insect-protection'),
    ('why-choose-tile-roofing-in-south-florida.md', 'why-choose-tile-roofing-in-south-florida'),
    ('why-homeowners-should-avoid-pulling-their-own-roofing-permit.md', 'why-homeowners-should-avoid-pulling-their-own-roofing-permit'),
    ('are-there-any-benefits-to-dark-colored-roof-shingles-in-south-florida.md', 'are-there-any-benefits-to-dark-colored-roof-shingles-in-south-florida'),
    ('impact-of-tariffs-on-metal-roofing-prices.md', 'impact-of-tariffs-on-metal-roofing-prices'),
]

def convert_markdown_to_html(filename):
    """Convert markdown file to HTML using marked"""
    filepath = f'blog/{filename}'

    # Read markdown
    with open(filepath, 'r', encoding='utf-8') as f:
        markdown = f.read()

    # Strip meta comments
    markdown = re.sub(r'<!--\s*Meta Title:.*?-->\s*', '', markdown)
    markdown = re.sub(r'<!--\s*Meta Description:.*?-->\s*', '', markdown)

    # Write to temp file
    with open('/tmp/temp.md', 'w', encoding='utf-8') as f:
        f.write(markdown)

    # Convert using marked via node
    result = subprocess.run(
        ['node', '-e', '''
const fs = require('fs');
const { marked } = require('marked');
const markdown = fs.readFileSync('/tmp/temp.md', 'utf-8');
const html = marked.parse(markdown);
console.log(html);
        '''],
        capture_output=True,
        text=True
    )

    return result.stdout

print("Processing blog posts...")
print("=" * 70)

for filename, slug in blog_files:
    print(f"\nProcessing: {filename}")
    print(f"Slug: {slug}")

    html = convert_markdown_to_html(filename)

    print(f"Content length: {len(html):,} characters")

    # Save HTML to file for manual SQL execution
    output_file = f'/tmp/blog-{slug}.html'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"Saved to: {output_file}")
    print("✅ Ready for SQL update")

print("\n" + "=" * 70)
print("All files processed successfully!")
print("\nNext step: Use the HTML files in /tmp to update Supabase via MCP tool")
