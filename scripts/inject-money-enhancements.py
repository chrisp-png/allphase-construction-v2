#!/usr/bin/env python3
"""One-shot: inject <MoneyPageEnhancements/> into every money page."""
import os, re, sys

CITIES = {
    "BocaRatonMoneyPage.tsx":          ("Boca Raton",          "Palm Beach", False),
    "BoyntonBeachMoneyPage.tsx":       ("Boynton Beach",       "Palm Beach", False),
    "CoconutCreekMoneyPage.tsx":       ("Coconut Creek",       "Broward",    True),
    "CoralSpringsMoneyPage.tsx":       ("Coral Springs",       "Broward",    True),
    "DavieMoneyPage.tsx":              ("Davie",               "Broward",    True),
    "DelrayBeachMoneyPage.tsx":        ("Delray Beach",        "Palm Beach", False),
    "FortLauderdaleMoneyPage.tsx":     ("Fort Lauderdale",     "Broward",    True),
    "HallandaleBeachMoneyPage.tsx":    ("Hallandale Beach",    "Broward",    True),
    "HollywoodMoneyPage.tsx":          ("Hollywood",           "Broward",    True),
    "LauderdaleByTheSeaMoneyPage.tsx": ("Lauderdale-By-The-Sea","Broward",   True),
    "LauderhillMoneyPage.tsx":         ("Lauderhill",          "Broward",    True),
    "MargateMoneyPage.tsx":            ("Margate",             "Broward",    True),
    "MiramarMoneyPage.tsx":            ("Miramar",             "Broward",    True),
    "PalmBeachGardensMoneyPage.tsx":   ("Palm Beach Gardens",  "Palm Beach", False),
    "PalmBeachMoneyPage.tsx":          ("Palm Beach",          "Palm Beach", False),
    "ParklandMoneyPage.tsx":           ("Parkland",            "Broward",    True),
    "PembrokePinesMoneyPage.tsx":      ("Pembroke Pines",      "Broward",    True),
    "PlantationMoneyPage.tsx":         ("Plantation",          "Broward",    True),
    "PompanoBeachMoneyPage.tsx":       ("Pompano Beach",       "Broward",    True),
    "SunriseMoneyPage.tsx":            ("Sunrise",             "Broward",    True),
    "TamaracMoneyPage.tsx":            ("Tamarac",             "Broward",    True),
    "WestPalmBeachMoneyPage.tsx":      ("West Palm Beach",     "Palm Beach", False),
}

DIR = "src/pages/locations"
IMPORT_LINE = "import MoneyPageEnhancements from '../../components/MoneyPageEnhancements';"

def inject(filename, city, county, hvhz):
    path = os.path.join(DIR, filename)
    with open(path, "r", encoding="utf-8") as f:
        src = f.read()

    if "MoneyPageEnhancements" in src:
        print(f"  skip (already injected): {filename}")
        return False

    # 1. Add import after first existing import line
    src = re.sub(
        r"(^import [^\n]+\n)",
        r"\1" + IMPORT_LINE + "\n",
        src,
        count=1,
        flags=re.MULTILINE,
    )

    # 2. Build component tag
    hvhz_str = "true" if hvhz else "false"
    tag = (
        f'        <MoneyPageEnhancements cityName="{city}" '
        f'county="{county}" hvhz={{{hvhz_str}}} />\n'
    )

    # 3. Insert before <Contact /> if present, else before EmbeddedRoofCalculator
    if "<Contact />" in src:
        src = src.replace("<Contact />", tag.strip() + "\n        <Contact />", 1)
    elif "<EmbeddedRoofCalculator" in src:
        src = src.replace(
            "<EmbeddedRoofCalculator",
            tag.strip() + "\n          <EmbeddedRoofCalculator",
            1,
        )
    else:
        print(f"  WARN no anchor in {filename}")
        return False

    with open(path, "w", encoding="utf-8") as f:
        f.write(src)
    print(f"  ok: {filename}")
    return True

count = 0
for fn, (city, county, hvhz) in CITIES.items():
    if inject(fn, city, county, hvhz):
        count += 1
print(f"\nInjected into {count} / {len(CITIES)} money pages.")
