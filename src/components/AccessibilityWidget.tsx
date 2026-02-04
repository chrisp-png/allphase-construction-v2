import { useState, useEffect } from 'react';
import { Accessibility, X, Plus, Minus, Eye, Link as LinkIcon, Type, RotateCcw } from 'lucide-react';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.style.filter = 'contrast(150%)';
    } else if (grayscale) {
      root.style.filter = 'grayscale(100%)';
    } else {
      root.style.filter = 'none';
    }
  }, [highContrast, grayscale]);

  useEffect(() => {
    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      if (highlightLinks) {
        (link as HTMLElement).style.outline = '3px solid #3b82f6';
        (link as HTMLElement).style.outlineOffset = '2px';
      } else {
        (link as HTMLElement).style.outline = '';
        (link as HTMLElement).style.outlineOffset = '';
      }
    });
  }, [highlightLinks]);

  useEffect(() => {
    const body = document.body;
    if (readableFont) {
      body.style.fontFamily = 'Arial, sans-serif';
    } else {
      body.style.fontFamily = '';
    }
  }, [readableFont]);

  const resetSettings = () => {
    setFontSize(100);
    setHighContrast(false);
    setGrayscale(false);
    setHighlightLinks(false);
    setReadableFont(false);
  };

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 10, 150));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 10, 80));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Open accessibility menu"
      >
        <Accessibility className="w-7 h-7" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 bg-neutral-900 border border-neutral-700 rounded-lg shadow-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Accessibility className="w-5 h-5" />
              Accessibility Options
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
              aria-label="Close accessibility menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="border-b border-neutral-700 pb-4">
              <label className="block text-sm font-medium mb-2">Text Size</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseFontSize}
                  className="flex items-center justify-center w-10 h-10 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Decrease text size"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-semibold">{fontSize}%</span>
                <button
                  onClick={increaseFontSize}
                  className="flex items-center justify-center w-10 h-10 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Increase text size"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                highContrast ? 'bg-blue-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700'
              }`}
            >
              <Eye className="w-5 h-5" />
              <span className="font-medium">High Contrast Mode</span>
            </button>

            <button
              onClick={() => setGrayscale(!grayscale)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                grayscale ? 'bg-blue-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700'
              }`}
            >
              <Eye className="w-5 h-5" />
              <span className="font-medium">Grayscale Mode</span>
            </button>

            <button
              onClick={() => setHighlightLinks(!highlightLinks)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                highlightLinks ? 'bg-blue-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700'
              }`}
            >
              <LinkIcon className="w-5 h-5" />
              <span className="font-medium">Highlight Links</span>
            </button>

            <button
              onClick={() => setReadableFont(!readableFont)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                readableFont ? 'bg-blue-600 text-white' : 'bg-neutral-800 hover:bg-neutral-700'
              }`}
            >
              <Type className="w-5 h-5" />
              <span className="font-medium">Readable Font</span>
            </button>

            <button
              onClick={resetSettings}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 mt-4"
            >
              <RotateCcw className="w-5 h-5" />
              Reset to Default
            </button>
          </div>
        </div>
      )}
    </>
  );
}
