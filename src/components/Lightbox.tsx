import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: Array<{ src: string; alt: string; caption?: string }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrevious }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-red-600 transition-colors p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-600"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-600 transition-colors p-3 rounded-full bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-600"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-600 transition-colors p-3 rounded-full bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-600"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="max-w-7xl w-full">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          width="1200"
          height="800"
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />
        {currentImage.caption && (
          <div className="text-center mt-4 text-gray-300 text-lg">
            {currentImage.caption}
          </div>
        )}
        <div className="text-center mt-4 text-gray-400">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
