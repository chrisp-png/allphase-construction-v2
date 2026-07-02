#!/usr/bin/env python3
"""Free DIY SEO audit — mirrors the on-page/metadata half of a paid Moz/Semrush report.
Runs entirely against the repo (no paid service). Outputs an HTML report.
Checks: prerender-vs-runtime title mismatches, over-length titles/descriptions,
truncated descriptions, duplicates, and missing meta."""
import json, re, os, html, datetime, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TITLE_MAX, DESC_MAX = 60, 160

def load_json_titles():
    p = os.path.join(ROOT, "scripts/seo-titles.json")
    d = json.load(open(p)).get("staticTitles", {})
    return {k: (v.get("title",""), v.get("description","")) for k,v in d.items()}

def _val(body, key):
    m = re.search(key + r""":\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`([^`]*)`)""", body, re.S)
    return next((g for g in m.groups() if g is not None), "") if m else ""

def load_ts_titles():
    s = open(os.path.join(ROOT, "src/config/seoTitles.ts")).read()
    out = {}
    for m in re.finditer(r"'(/[^']*)':\s*\{(.*?)\n\s*\}", s, re.S):
        out[m.group(1)] = (_val(m.group(2), "title"), _val(m.group(2), "description"))
    return out

prerender = load_json_titles()      # what Google crawls first
runtime   = load_ts_titles()        # what NuclearMetadata applies live

issues = collections.defaultdict(list)

# 1) Prerender vs runtime TITLE mismatch (the PR-106 bug class — unique to this stack)
for path in sorted(set(prerender) & set(runtime)):
    pt, rt = prerender[path][0], runtime[path][0]
    if pt and rt and pt.strip() != rt.strip():
        issues["Title mismatch: prerender ≠ live (title-stomping risk)"].append(
            (path, f"prerender: “{pt}”  |  live: “{rt}”"))

# 2/3/4/5) Length, truncation, duplicates, missing — across both sources
def audit(source_name, data):
    seen_t, seen_d = collections.defaultdict(list), collections.defaultdict(list)
    for path,(t,d) in data.items():
        if not t: issues[f"Missing title ({source_name})"].append((path,""))
        elif len(t) > TITLE_MAX: issues[f"Title too long >{TITLE_MAX} ({source_name})"].append((path,f"{len(t)} chars: {t}"))
        if not d: issues[f"Missing description ({source_name})"].append((path,""))
        else:
            if len(d) > DESC_MAX: issues[f"Description too long >{DESC_MAX} ({source_name})"].append((path,f"{len(d)} chars"))
            if not re.search(r'[.!?\"\')]$', d.strip()): issues[f"Description cut off mid-sentence ({source_name})"].append((path,f"ends: …{d[-40:]}"))
        if t: seen_t[t.strip()].append(path)
        if d: seen_d[d.strip()].append(path)
    for t,paths in seen_t.items():
        if len(paths)>1: issues[f"Duplicate title ({source_name})"].append((", ".join(paths[:6]), t))
    for d,paths in seen_d.items():
        if len(paths)>1: issues[f"Duplicate description ({source_name})"].append((", ".join(paths[:6]), d[:60]+"…"))

audit("prerender", prerender)
audit("live", runtime)

total = sum(len(v) for v in issues.values())
now = datetime.datetime.now().strftime("%B %d, %Y")
rows = ""
for cat in sorted(issues, key=lambda k: -len(issues[k])):
    items = issues[cat]
    lis = "".join(f"<tr><td class='p'>{html.escape(p)}</td><td>{html.escape(d)}</td></tr>" for p,d in items[:40])
    rows += f"<h3>{html.escape(cat)} <span class='ct'>{len(items)}</span></h3><table>{lis}</table>"

cards = f"""<div class=cards>
<div class=card><div class=n>{len(prerender)}</div><div>Routes audited (prerender)</div></div>
<div class=card><div class=n>{len(runtime)}</div><div>Routes audited (live)</div></div>
<div class=card><div class=n style='color:#c0392b'>{total}</div><div>Total issues found</div></div>
<div class=card><div class=n>{len(issues)}</div><div>Issue categories</div></div></div>"""

out = f"""<!doctype html><html><head><meta charset=utf-8><title>DIY SEO Audit — All Phase Construction USA</title>
<style>body{{font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:960px;margin:2rem auto;padding:0 1rem;color:#1a2530}}
h1{{font-size:1.7rem}}h3{{margin-top:2rem;border-bottom:2px solid #e3e8ee;padding-bottom:.3rem}}
.sub{{color:#7a8794}}.cards{{display:flex;gap:1rem;flex-wrap:wrap;margin:1.5rem 0}}
.card{{flex:1;min-width:170px;background:#f6f9fc;border:1px solid #e3e8ee;border-radius:10px;padding:1rem;text-align:center}}
.n{{font-size:2rem;font-weight:700;color:#16607a}}.ct{{background:#c0392b;color:#fff;border-radius:20px;padding:1px 9px;font-size:.8rem;vertical-align:middle}}
table{{width:100%;border-collapse:collapse;font-size:.9rem;margin-top:.4rem}}td{{border-bottom:1px solid #eef2f6;padding:.4rem;vertical-align:top}}
.p{{color:#16607a;font-family:monospace;white-space:nowrap;padding-right:1rem}}</style></head>
<body><h1>DIY SEO Audit — All Phase Construction USA</h1>
<div class=sub>Generated {now} &middot; $0 &middot; on-page &amp; metadata half of a paid SEO report, computed from your repo</div>
{cards}{rows}
<h3>What this does NOT cover (use free tools)</h3><table>
<tr><td class=p>Live rankings / keywords</td><td>Google Search Console (free, real Google data)</td></tr>
<tr><td class=p>Live 4xx / broken links / crawl</td><td>Screaming Frog SEO Spider (free up to 500 URLs; your site is ~212)</td></tr>
<tr><td class=p>Extra keyword data</td><td>Bing Webmaster Tools (free)</td></tr></table>
</body></html>"""
open(os.path.join(ROOT, "seo-audit-report.html"),"w").write(out)
print(f"Report written. {total} issues across {len(issues)} categories.")
print("Top categories:")
for cat in sorted(issues, key=lambda k:-len(issues[k]))[:8]:
    print(f"  {len(issues[cat]):>3}  {cat}")

# --- Markdown summary (for GitHub Issue / weekly email notification) ---
md = [f"## DIY SEO Audit — {now}", "",
      f"**{total} issues** across **{len(issues)} categories**  ·  {len(prerender)} prerender routes / {len(runtime)} live routes audited.",
      "", "_Full styled HTML report is attached to this workflow run under **Artifacts**._", ""]
for cat in sorted(issues, key=lambda k:-len(issues[k])):
    md.append(f"### {cat} — {len(issues[cat])}")
    for p,d in issues[cat][:15]:
        md.append(f"- `{p}` {d}".rstrip())
    if len(issues[cat])>15: md.append(f"- …and {len(issues[cat])-15} more")
    md.append("")
open(os.path.join(ROOT,"seo-audit-summary.md"),"w").write("\n".join(md))
print("Markdown summary written.")
