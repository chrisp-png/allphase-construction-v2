#!/usr/bin/env python3
"""Inject ServicePageEnhancements into 8 service pages."""
import re

PAGES = {
    "RoofReplacementPage.tsx":   ("Roof Replacement", "roof-replacement"),
    "RoofRepairPage.tsx":        ("Roof Repair", "roof-repair"),
    "ShingleRoofingPage.tsx":    ("Shingle Roofing", "shingle-roofing"),
    "TileRoofingPage.tsx":       ("Tile Roofing", "tile-roofing"),
    "MetalRoofingPage.tsx":      ("Metal Roofing", "metal-roofing"),
    "FlatRoofingPage.tsx":       ("Flat Roofing", "flat-roofing"),
    "CommercialRoofingPage.tsx": ("Commercial Roofing", "commercial-roofing"),
    "ResidentialRoofingPage.tsx":("Residential Roofing", "residential-roofing"),
}

MARKER = "ServicePageEnhancements"
IMPORT_LINE = "import ServicePageEnhancements from '../components/ServicePageEnhancements';\n"

for fname, (name, slug) in PAGES.items():
    path = f"src/pages/{fname}"
    with open(path, "r", encoding="utf-8") as fh:
        src = fh.read()
    if MARKER in src:
        print(f"skip (already done): {fname}")
        continue

    # Add import after the first existing import line
    src = re.sub(r"(^import .+?\n)", r"\1" + IMPORT_LINE, src, count=1, flags=re.MULTILINE)

    # Inject component before closing `    </div>\n    </>` at end of file
    tag = f'      <ServicePageEnhancements serviceName="{name}" serviceSlug="{slug}" />\n'
    new_src, n = re.subn(r"(\n    </div>\n    </>\n  \);\n})", "\n" + tag + r"\1", src, count=1)
    if n == 0:
        # try alternate ending used by RoofReplacementPage which has Contact + Footer inside div
        new_src, n = re.subn(r"(\n        <Contact />)", "\n" + tag.replace("      ", "        ") + r"\1", src, count=1)
    if n == 0:
        print(f"WARN: no anchor in {fname}")
        continue
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(new_src)
    print(f"injected: {fname}")
