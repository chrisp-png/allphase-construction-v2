import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Accessibility, Eye, Type, Keyboard, MousePointer, Volume2 } from 'lucide-react';

export default function AccessibilityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Accessibility Statement | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Accessibility statement for All Phase Construction USA. Learn about our commitment to web accessibility and available features.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Accessibility statement for All Phase Construction USA. Learn about our commitment to web accessibility and available features.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <><div className="min-h-screen bg-zinc-950 text-white pt-36 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-sm mb-8 text-zinc-400">
          <Link to="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Accessibility</span>
        </nav>

        <div className="flex items-center gap-4 mb-8">
          <Accessibility className="w-12 h-12 text-red-500" />
          <h1 className="text-4xl md:text-5xl font-bold">Accessibility Statement</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-zinc-400 mb-8">
            All Phase Construction USA is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                We strive to ensure that our website is accessible to all users, regardless of technology or ability. We aim to meet WCAG 2.1 Level AA standards and continually work to improve accessibility.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visual Adjustments</h3>
                  <p className="text-zinc-300">
                    Use our accessibility widget (bottom-left corner) to adjust text size, enable high contrast mode, or switch to grayscale display.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Type className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Text Resizing</h3>
                  <p className="text-zinc-300">
                    Adjust text size from 80% to 150% using the accessibility widget for easier reading.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Keyboard className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Keyboard Navigation</h3>
                  <p className="text-zinc-300">
                    All interactive elements can be accessed using keyboard navigation. Use Tab to navigate forward and Shift+Tab to navigate backward.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MousePointer className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Link Highlighting</h3>
                  <p className="text-zinc-300">
                    Enable link highlighting through the accessibility widget to make all clickable elements more visible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Volume2 className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Screen Reader Compatible</h3>
                  <p className="text-zinc-300">
                    Our website is optimized for screen readers with proper semantic HTML, ARIA labels, and descriptive alt text for images.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Standards Compliance</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more usable for everyone.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Accessibility Widget</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <p className="text-zinc-300 mb-4">
                Look for the blue accessibility button in the bottom-left corner of every page. Click it to access:
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                <li>Text size controls (increase/decrease)</li>
                <li>High contrast mode</li>
                <li>Grayscale mode</li>
                <li>Link highlighting</li>
                <li>Readable font option</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Ongoing Improvements</h2>
            <p className="text-zinc-300">
              We regularly review our website to identify and address accessibility barriers. We welcome your feedback on how we can improve accessibility.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Feedback and Contact</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                If you experience any difficulty accessing our website or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="font-semibold text-white mb-2">All Phase Construction USA, LLC</p>
                <p>Email: <a href="mailto:info@allphaseconstructionfl.com" className="text-red-500 hover:text-red-400">info@allphaseconstructionfl.com</a></p>
                <p>Phone: <a href="tel:+17542275605" className="text-red-500 hover:text-red-400">(754) 227-5605</a></p>
              </div>
              <p className="text-sm italic">
                We aim to respond to accessibility feedback within 5 business days.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                This website works with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
                <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                <li>Keyboard-only navigation</li>
                <li>Browser zoom and text resizing</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <p className="text-sm text-zinc-400 italic">
              This accessibility statement was last reviewed on January 1, 2025.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Contact Us About Accessibility
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
