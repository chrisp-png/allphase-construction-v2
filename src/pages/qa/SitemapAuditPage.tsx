import { Link } from 'react-router-dom';
import { sheetSitemap, SitemapEntry } from '../../data/sheetSitemap';
import { AlertTriangle, CheckCircle, ExternalLink, Search } from 'lucide-react';
import NoIndexMeta from '../../components/NoIndexMeta';

interface AuditResult {
  type: 'error' | 'warning' | 'success';
  message: string;
  items?: string[];
}

export default function SitemapAuditPage() {
  const auditResults: AuditResult[] = [];

  // Check for duplicate paths
  const pathCounts = new Map<string, number>();
  const duplicatePaths: string[] = [];

  sheetSitemap.forEach(entry => {
    const count = (pathCounts.get(entry.path) || 0) + 1;
    pathCounts.set(entry.path, count);
    if (count === 2) {
      duplicatePaths.push(entry.path);
    }
  });

  if (duplicatePaths.length > 0) {
    auditResults.push({
      type: 'error',
      message: `Found ${duplicatePaths.length} duplicate path(s)`,
      items: duplicatePaths
    });
  } else {
    auditResults.push({
      type: 'success',
      message: 'No duplicate paths found'
    });
  }

  // Check for paths not starting with /
  const invalidStartPaths = sheetSitemap
    .filter(entry => !entry.path.startsWith('/'))
    .map(entry => `${entry.path} (${entry.label})`);

  if (invalidStartPaths.length > 0) {
    auditResults.push({
      type: 'error',
      message: `Found ${invalidStartPaths.length} path(s) not starting with /`,
      items: invalidStartPaths
    });
  } else {
    auditResults.push({
      type: 'success',
      message: 'All paths start with /'
    });
  }

  // Check for trailing slashes (except root /)
  const trailingSlashPaths = sheetSitemap
    .filter(entry => entry.path !== '/' && entry.path.endsWith('/'))
    .map(entry => `${entry.path} (${entry.label})`);

  if (trailingSlashPaths.length > 0) {
    auditResults.push({
      type: 'error',
      message: `Found ${trailingSlashPaths.length} path(s) with trailing slashes`,
      items: trailingSlashPaths
    });
  } else {
    auditResults.push({
      type: 'success',
      message: 'No invalid trailing slashes found'
    });
  }

  // Check for orphaned items (parent missing)
  const allPaths = new Set(sheetSitemap.map(entry => entry.path));
  const orphanedItems = sheetSitemap
    .filter(entry => entry.parent !== null && !allPaths.has(entry.parent))
    .map(entry => `${entry.path} (parent: ${entry.parent})`);

  if (orphanedItems.length > 0) {
    auditResults.push({
      type: 'warning',
      message: `Found ${orphanedItems.length} orphaned item(s) with missing parent`,
      items: orphanedItems
    });
  } else {
    auditResults.push({
      type: 'success',
      message: 'No orphaned items found'
    });
  }

  // Calculate totals
  const totalEntries = sheetSitemap.length;
  const indexableEntries = sheetSitemap.filter(entry => entry.indexable).length;
  const nonIndexableEntries = totalEntries - indexableEntries;

  // Group entries by section
  const sections = new Map<string, SitemapEntry[]>();
  sheetSitemap.forEach(entry => {
    const entries = sections.get(entry.section) || [];
    entries.push(entry);
    sections.set(entry.section, entries);
  });

  return (
    <>
      <NoIndexMeta />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-8 h-8 text-[#C5A572]" />
              <h1 className="text-4xl font-bold text-white">
                Sitemap Audit
              </h1>
            </div>
            <p className="text-gray-400">
              Internal QA tool for validating sitemap structure and consistency
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-12 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/sitemap/"
                className="flex items-center gap-2 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors text-white"
              >
                <ExternalLink className="w-4 h-4" />
                <span>/sitemap</span>
              </Link>
              <a
                href="/sitemap.xml/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors text-white"
              >
                <ExternalLink className="w-4 h-4" />
                <span>/sitemap.xml</span>
              </a>
              <a
                href="/robots.txt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors text-white"
              >
                <ExternalLink className="w-4 h-4" />
                <span>/robots.txt</span>
              </a>
              <Link
                to="/locations/"
                className="flex items-center gap-2 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors text-white"
              >
                <ExternalLink className="w-4 h-4" />
                <span>/locations</span>
              </Link>
            </div>
          </div>

          {/* Totals */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-white mb-2">
                {totalEntries}
              </div>
              <div className="text-gray-400">Total Entries</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-green-500 mb-2">
                {indexableEntries}
              </div>
              <div className="text-gray-400">Indexable Entries</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-yellow-500 mb-2">
                {nonIndexableEntries}
              </div>
              <div className="text-gray-400">Non-Indexable Entries</div>
            </div>
          </div>

          {/* Audit Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Audit Results</h2>
            <div className="space-y-4">
              {auditResults.map((result, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 border ${
                    result.type === 'error'
                      ? 'bg-red-900/20 border-red-700'
                      : result.type === 'warning'
                      ? 'bg-yellow-900/20 border-yellow-700'
                      : 'bg-green-900/20 border-green-700'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {result.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          result.type === 'error' ? 'text-red-500' : 'text-yellow-500'
                        }`}
                      />
                    )}
                    <div className="flex-1">
                      <div
                        className={`font-semibold mb-2 ${
                          result.type === 'error'
                            ? 'text-red-400'
                            : result.type === 'warning'
                            ? 'text-yellow-400'
                            : 'text-green-400'
                        }`}
                      >
                        {result.message}
                      </div>
                      {result.items && result.items.length > 0 && (
                        <ul className="space-y-1 text-sm text-gray-300">
                          {result.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="font-mono">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sitemap Entries Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Sitemap Entries ({totalEntries})
            </h2>

            {Array.from(sections.entries()).map(([section, entries]) => (
              <div key={section} className="mb-8">
                <h3 className="text-xl font-semibold text-[#C5A572] mb-4">
                  {section} ({entries.length})
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-gray-800 text-gray-400">
                      <tr>
                        <th className="px-4 py-3">Label</th>
                        <th className="px-4 py-3">Path</th>
                        <th className="px-4 py-3">Indexable</th>
                        <th className="px-4 py-3">Parent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-700 hover:bg-gray-800/50"
                        >
                          <td className="px-4 py-3 text-white">
                            {entry.label}
                          </td>
                          <td className="px-4 py-3 font-mono text-gray-300">
                            {entry.path}
                          </td>
                          <td className="px-4 py-3">
                            {entry.indexable ? (
                              <span className="text-green-500">✓</span>
                            ) : (
                              <span className="text-red-500">â</span>
                            )}
                          </td>
                          <td className="px-4 py-3 font-mono text-gray-400 text-xs">
                            {entry.parent || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm">
            <p>This page is excluded from search engine indexing</p>
          </div>
        </div>
      </div>
    </>
  );
}
