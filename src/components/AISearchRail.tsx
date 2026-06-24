/**
 * AI Search Rail
 *
 * Three buttons that deep-link to ChatGPT, Google AI Mode, and Bing Copilot
 * with a pre-formed query about All Phase Construction USA. Inspired by
 * the JDH Remodeling service-area-page template (PR-71).
 *
 * Why this exists:
 *   - AI answer engines (ChatGPT, Copilot, Gemini-driven Google AI Overviews)
 *     are an increasingly meaningful traffic + brand-awareness channel
 *     distinct from traditional organic SERPs.
 *   - When a visitor clicks one of these buttons, they enter the AI tool
 *     with a query that's likely to surface our site as a source
 *     (per Bing AI Performance data, we are already cited ~30+ times/day
 *     in Copilot responses).
 *   - The act of being browsed-from-AI also generates the click-pattern
 *     signals AI engines weight when ranking sources.
 *   - Bonus UX: showing this rail signals confidence — "we'll send you
 *     to AI to verify what we say about ourselves."
 *
 * Props:
 *   - query: the search string to pre-form into each engine's URL.
 *            Should be a natural-language question about All Phase or
 *            the page topic. Encoded automatically.
 *   - variant: 'dark' for use on dark hero backgrounds (default),
 *              'light' for use on light backgrounds (footer etc.)
 *   - className: optional extra wrapper classes
 */
import { Sparkles } from 'lucide-react';

interface AISearchRailProps {
  query: string;
  variant?: 'dark' | 'light';
  className?: string;
}

const AI_ENGINES = [
  {
    name: 'ChatGPT',
    url: (q: string) => `https://chatgpt.com/?q=${encodeURIComponent(q)}`,
    bg: 'bg-[#10A37F]',
    hoverBg: 'hover:bg-[#0d8a6b]',
  },
  {
    name: 'Google AI Mode',
    url: (q: string) =>
      `https://www.google.com/search?q=${encodeURIComponent(q)}&udm=50`,
    bg: 'bg-[#4285F4]',
    hoverBg: 'hover:bg-[#3367d6]',
  },
  {
    name: 'Bing Copilot',
    url: (q: string) =>
      `https://copilot.microsoft.com/?q=${encodeURIComponent(q)}`,
    bg: 'bg-[#0078D4]',
    hoverBg: 'hover:bg-[#005a9e]',
  },
];

export default function AISearchRail({
  query,
  variant = 'dark',
  className = '',
}: AISearchRailProps) {
  const labelColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      role="group"
      aria-label="Ask an AI search engine about All Phase Construction USA"
    >
      <span
        className={`text-xs sm:text-sm font-medium ${labelColor} flex items-center gap-1.5 mr-1`}
      >
        <Sparkles className="w-4 h-4" aria-hidden="true" />
        Ask AI:
      </span>
      {AI_ENGINES.map((engine) => (
        <a
          key={engine.name}
          href={engine.url(query)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white ${engine.bg} ${engine.hoverBg} transition-colors focus:outline-none focus:ring-2 focus:ring-white/50`}
          aria-label={`Open ${engine.name} with a question about All Phase Construction USA`}
        >
          {engine.name}
        </a>
      ))}
    </div>
  );
}
