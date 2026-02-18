#!/usr/bin/env python3
import re

# Read the file
with open('src/pages/RoofReplacementProcessPage.tsx', 'r') as f:
    content = f.read()

# Fix 1: Remove ALL trailing slashes from internal Link components
content = re.sub(r'to="(/[^"]+)/"', r'to="\1"', content)

# Fix 2: Add specific internal links to existing text

# Step 01 - Already has link to /roof-inspection/ - just need to fix trailing slash (done above)

# Step 02 - Add links for calculator and financing
content = content.replace(
    'Try our{' + " '" + '}',
    'Try our{' + " '" + '}'
)
content = content.replace(
    '<Link to="/calculator/" className="text-zinc-400 hover:text-red-500 underline transition-colors">',
    '<Link to="/calculator" className="text-zinc-400 hover:text-red-500 underline transition-colors">'
)

# Add easy-payments link in Step 02
# Find "Financing Options" in the estimate presentation section
pattern_financing = r'(<div className="bg-zinc-950 border border-zinc-700 rounded-lg p-6">\s+<h4 className="font-bold text-white mb-3">)Financing Options(</h4>)'
replacement_financing = r'\1<Link to="/easy-payments" className="text-white hover:text-red-500 transition-colors">Financing Options</Link>\2'
content = re.sub(pattern_financing, replacement_financing, content, flags=re.MULTILINE | re.DOTALL)

# Step 03 - Material links (need to find and update roofingSystems array)
# Update roofingSystems to have links
content = content.replace(
    "title: 'Asphalt Shingle Roofing'",
    "title: 'Asphalt Shingle Roofing',\n      link: '/shingle-roofing'"
)
content = content.replace(
    "title: 'Concrete & Clay Tile'",
    "title: 'Concrete & Clay Tile',\n      link: '/tile-roofing'"
)
content = content.replace(
    "title: 'Metal Roofing Systems'",
    "title: 'Metal Roofing Systems',\n      link: '/metal-roofing'"
)
content = content.replace(
    "title: 'Flat & Low-Slope'",
    "title: 'Flat & Low-Slope',\n      link: '/flat-roofing'"
)

# Update the roofingSystems rendering to use Link
# This will need to be done by modifying the map function
pattern_systems = r'(<div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">\s+<h3 className="text-2xl font-bold mb-4">){system\.title}(</h3>)'
replacement_systems = r'\1{system.link ? <Link to={system.link} className="text-white hover:text-red-500 transition-colors">{system.title}</Link> : system.title}\2'
content = re.sub(pattern_systems, replacement_systems, content, flags=re.MULTILINE | re.DOTALL)

# Write the updated content
with open('src/pages/RoofReplacementProcessPage.tsx', 'w') as f:
    f.write(content)

print("✅ Basic link fixes applied")
print("✅ Trailing slashes removed")
print("✅ Material system links added")
