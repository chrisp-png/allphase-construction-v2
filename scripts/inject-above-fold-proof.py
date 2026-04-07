#!/usr/bin/env python3
"""Insert an above-the-fold trust strip directly after the </h1> in each money page.
Skips CityMoneyPage.tsx (template) and any file already containing the marker."""
import os, glob, re

MARKER = "above-fold-proof"
STRIP = '''<div data-marker="above-fold-proof" className="mt-4 mb-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-black/40 backdrop-blur-sm border border-red-600/30 rounded-full px-4 py-2 text-sm sm:text-base font-semibold text-white">
                  <span className="text-yellow-400">★ 4.8 Google</span>
                  <span className="text-red-400">·</span>
                  <span>2,500+ Roofs</span>
                  <span className="text-red-400">·</span>
                  <span>Dual-Licensed Since 2005</span>
                </div>'''

files = sorted(glob.glob("src/pages/locations/*MoneyPage.tsx"))
changed = 0
for f in files:
    if f.endswith("CityMoneyPage.tsx"):
        continue
    with open(f, "r", encoding="utf-8") as fh:
        src = fh.read()
    if MARKER in src:
        print(f"skip (already done): {f}")
        continue
    # Insert after the FIRST </h1>
    new_src, n = re.subn(r"(</h1>)", r"\1\n                " + STRIP, src, count=1)
    if n == 0:
        print(f"WARN: no </h1> found in {f}")
        continue
    with open(f, "w", encoding="utf-8") as fh:
        fh.write(new_src)
    changed += 1
    print(f"injected: {f}")
print(f"\nDone. {changed} files updated.")
