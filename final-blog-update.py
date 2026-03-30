#!/usr/bin/env python3
"""
Final blog content update script.
This creates SQL commands that can be run via the Supabase MCP tool.
"""

import subprocess
import os

slugs = [
    'exposed-ceilings-can-have-challenges-when-getting-a-new-roof',
    'can-your-hoa-say-no-to-a-metal-roof-a-guide-for-homeowners',
    'how-often-should-i-replace-my-roof-in-south-florida',
    'what-to-expect-during-a-roof-replacement-project',
    'bug-free-summers-the-best-screens-for-insect-protection',
    'why-choose-tile-roofing-in-south-florida',
    'why-homeowners-should-avoid-pulling-their-own-roofing-permit',
    'are-there-any-benefits-to-dark-colored-roof-shingles-in-south-florida',
    'impact-of-tariffs-on-metal-roofing-prices'
]

print("=" * 70)
print("BLOG CONTENT UPDATE - SQL GENERATION")
print("=" * 70)
print()

for i, slug in enumerate(slugs, 1):
    html_file = f"/tmp/blog-{slug}.html"

    # Read HTML content
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Escape single quotes for SQL (double them)
    escaped_html = html_content.replace("'", "''")

    # Create SQL UPDATE statement
    sql = f"UPDATE blog_posts SET content = '{escaped_html}' WHERE slug = '{slug}';"

    # Save to individual SQL file
    sql_file = f"/tmp/update-blog-{i}.sql"
    with open(sql_file, 'w', encoding='utf-8') as f:
        f.write(sql)

    print(f"{i}. {slug}")
    print(f"   HTML length: {len(html_content):,} chars")
    print(f"   SQL file: {sql_file}")
    print()

print("=" * 70)
print("✅ All SQL files generated in /tmp/")
print()
print("To apply these updates, run the SQL files via Supabase MCP execute_sql")
print("=" * 70)
