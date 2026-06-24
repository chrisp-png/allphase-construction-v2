/**
 * AtomicAnswer
 *
 * Renders a short, self-contained "quick answer" paragraph designed
 * to be the cleanest lift target on the page for AI Overview, ChatGPT
 * Search, Perplexity, and Bing Copilot.
 *
 * Rules of the copy passed in:
 *   - 40 to 60 words
 *   - Single sentence or two short sentences, no links
 *   - Direct answer to the page's primary query
 *   - Includes "All Phase Construction USA" + city + at least one
 *     specific verifiable fact (license #, year founded, review count)
 *
 * Visually styled as a soft callout so users perceive it as a
 * value-add summary, not generic body copy.
 */

import React from 'react';
import { Sparkles } from 'lucide-react';

interface AtomicAnswerProps {
  /** The atomic-answer paragraph copy. Keep it 40 to 60 words. */
  children: React.ReactNode;
  /** Optional override of the small uppercase eyebrow label. */
  label?: string;
  /** Optional className passthrough for layout tweaks per page. */
  className?: string;
}

export default function AtomicAnswer({
  children,
  label = 'Quick Answer',
  className = '',
}: AtomicAnswerProps) {
  return (
    <div
      data-atomic-answer
      className={`bg-zinc-900/70 border border-red-600/25 rounded-xl p-5 sm:p-6 my-6 ${className}`}
      role="note"
      aria-label={label}
    >
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-red-500" aria-hidden="true" />
        <p className="text-red-500 uppercase tracking-wide text-xs font-bold">
          {label}
        </p>
      </div>
      <p className="text-base sm:text-lg text-zinc-100 leading-relaxed font-medium">
        {children}
      </p>
    </div>
  );
}
