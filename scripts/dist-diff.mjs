#!/usr/bin/env node
/**
 * dist-diff.mjs
 *
 * Compare two manifests produced by dist-manifest.mjs. Exits 0 when there
 * are no differences, 1 when differences are detected. Use as a pre-merge
 * gate: build on main → baseline manifest, build on branch → head manifest,
 * diff. Any unexpected change blocks the merge.
 *
 * Usage:
 *   node scripts/dist-diff.mjs manifests/main.json manifests/branch.json
 *   node scripts/dist-diff.mjs manifests/main.json manifests/branch.json --json
 *
 * The script surfaces three change categories separately so reviewers can
 * quickly judge whether the diff matches the change's intent:
 *   - ADDED    : paths that did not exist in base
 *   - REMOVED  : paths that no longer exist in head
 *   - CHANGED  : paths present in both but with different sha
 */

import fs from 'node:fs';
import process from 'node:process';

function parseArgs(argv) {
  const args = { base: null, head: null, json: false };
  const pos = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--json') args.json = true;
    else if (a === '--help' || a === '-h') {
      console.log('Usage: node scripts/dist-diff.mjs <base.json> <head.json> [--json]');
      process.exit(0);
    } else pos.push(a);
  }
  [args.base, args.head] = pos;
  if (!args.base || !args.head) {
    console.error('Usage: node scripts/dist-diff.mjs <base.json> <head.json> [--json]');
    process.exit(2);
  }
  return args;
}

function load(p) {
  const raw = JSON.parse(fs.readFileSync(p, 'utf-8'));
  return raw.files ? raw.files : raw;
}

function fmtTitle(t) {
  if (!t) return '(empty)';
  return t.length > 70 ? t.slice(0, 67) + '...' : t;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const base = load(args.base);
  const head = load(args.head);

  const baseKeys = new Set(Object.keys(base));
  const headKeys = new Set(Object.keys(head));

  const added = [...headKeys].filter(k => !baseKeys.has(k)).sort();
  const removed = [...baseKeys].filter(k => !headKeys.has(k)).sort();
  const changed = [...baseKeys]
    .filter(k => headKeys.has(k) && base[k].sha !== head[k].sha)
    .sort();

  const report = {
    base: args.base,
    head: args.head,
    baseCount: baseKeys.size,
    headCount: headKeys.size,
    added: added.map(k => ({ path: k, size: head[k].size, title: head[k].title })),
    removed: removed.map(k => ({ path: k, size: base[k].size, title: base[k].title })),
    changed: changed.map(k => ({
      path: k,
      base: { size: base[k].size, title: base[k].title, description: base[k].description },
      head: { size: head[k].size, title: head[k].title, description: head[k].description },
      sizeDelta: head[k].size - base[k].size,
    })),
  };

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(`Base: ${args.base} (${report.baseCount} files)`);
    console.log(`Head: ${args.head} (${report.headCount} files)`);
    console.log();
    console.log(`Added:   ${added.length}`);
    console.log(`Removed: ${removed.length}`);
    console.log(`Changed: ${changed.length}`);
    console.log();
    if (added.length) {
      console.log('--- ADDED ---');
      for (const a of report.added) {
        console.log(`  + ${a.path}  (${a.size}B)  "${fmtTitle(a.title)}"`);
      }
      console.log();
    }
    if (removed.length) {
      console.log('--- REMOVED ---');
      for (const r of report.removed) {
        console.log(`  - ${r.path}  (${r.size}B)  "${fmtTitle(r.title)}"`);
      }
      console.log();
    }
    if (changed.length) {
      console.log('--- CHANGED ---');
      for (const c of report.changed) {
        const delta = c.sizeDelta >= 0 ? `+${c.sizeDelta}` : `${c.sizeDelta}`;
        console.log(`  ~ ${c.path}  (${c.base.size}B → ${c.head.size}B, ${delta}B)`);
        if (c.base.title !== c.head.title) {
          console.log(`      title:  "${fmtTitle(c.base.title)}"`);
          console.log(`           →  "${fmtTitle(c.head.title)}"`);
        }
        if (c.base.description !== c.head.description) {
          console.log(`      desc:   "${fmtTitle(c.base.description)}"`);
          console.log(`           →  "${fmtTitle(c.head.description)}"`);
        }
      }
      console.log();
    }
  }

  const totalChanges = added.length + removed.length + changed.length;
  process.exit(totalChanges > 0 ? 1 : 0);
}

main();
