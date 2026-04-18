#!/usr/bin/env node
/**
 * dist-manifest.mjs
 *
 * Walks dist/ after a build and emits a deterministic JSON manifest of every
 * HTML file: relative path → { size (bytes), sha (first 16 hex chars of
 * sha256), title }.
 *
 * Usage:
 *   node scripts/dist-manifest.mjs > dist-manifest.json
 *   node scripts/dist-manifest.mjs --dir dist --out manifests/main.json
 *
 * Why this exists:
 *   Before and after risky changes (pretty_urls toggles, redirect changes,
 *   prerender refactors) we need a 1:1 way to see which page outputs moved.
 *   Pair with scripts/dist-diff.mjs. Any unexpected diff is a red flag.
 *
 * Only HTML is tracked because hashed assets (assets/*.js, assets/*.css)
 * change on every build by design.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import process from 'node:process';

function parseArgs(argv) {
  const args = { dir: 'dist', out: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dir') args.dir = argv[++i];
    else if (a === '--out') args.out = argv[++i];
    else if (a === '--help' || a === '-h') {
      console.log('Usage: node scripts/dist-manifest.mjs [--dir dist] [--out path.json]');
      process.exit(0);
    }
  }
  return args;
}

function walk(dir, relBase = '') {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.posix.join(relBase, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full, rel));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push({ full, rel });
    }
  }
  return files;
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? m[1].replace(/\s+/g, ' ').trim() : '';
}

function extractMetaDescription(html) {
  const m = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  return m ? m[1].trim() : '';
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const root = path.resolve(args.dir);
  if (!fs.existsSync(root)) {
    console.error(`dist directory not found: ${root}`);
    process.exit(2);
  }

  const files = walk(root);
  const manifest = {};
  for (const { full, rel } of files) {
    const buf = fs.readFileSync(full);
    const html = buf.toString('utf-8');
    manifest[rel] = {
      size: buf.length,
      sha: crypto.createHash('sha256').update(buf).digest('hex').slice(0, 16),
      title: extractTitle(html),
      description: extractMetaDescription(html),
    };
  }

  // Deterministic key order
  const sorted = Object.fromEntries(
    Object.keys(manifest).sort().map(k => [k, manifest[k]])
  );
  const out = {
    generatedAt: new Date().toISOString(),
    dir: path.relative(process.cwd(), root) || '.',
    count: files.length,
    files: sorted,
  };

  const json = JSON.stringify(out, null, 2);
  if (args.out) {
    fs.mkdirSync(path.dirname(args.out), { recursive: true });
    fs.writeFileSync(args.out, json);
    console.error(`Wrote ${files.length} entries to ${args.out}`);
  } else {
    console.log(json);
  }
}

main();
