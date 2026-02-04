import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#E5E5E5',
            '--tw-prose-headings': '#FFFFFF',
            '--tw-prose-lead': '#E5E5E5',
            '--tw-prose-links': '#DC2626',
            '--tw-prose-bold': '#FFFFFF',
            '--tw-prose-counters': '#E5E5E5',
            '--tw-prose-bullets': '#E5E5E5',
            '--tw-prose-hr': '#374151',
            '--tw-prose-quotes': '#D1D5DB',
            '--tw-prose-quote-borders': '#DC2626',
            '--tw-prose-captions': '#9CA3AF',
            '--tw-prose-code': '#FFFFFF',
            '--tw-prose-pre-code': '#E5E5E5',
            '--tw-prose-pre-bg': '#1F2937',
            '--tw-prose-th-borders': '#374151',
            '--tw-prose-td-borders': '#4B5563',
            h2: {
              color: '#DC2626',
            },
            a: {
              color: '#DC2626',
              '&:hover': {
                color: '#B91C1C',
              },
            },
            blockquote: {
              borderLeftColor: '#DC2626',
              color: '#D1D5DB',
            },
            strong: {
              color: '#FFFFFF',
            },
            ul: {
              color: '#E5E5E5',
            },
            ol: {
              color: '#E5E5E5',
            },
            li: {
              color: '#E5E5E5',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};
