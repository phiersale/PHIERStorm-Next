// FILE: components/Prophecy/ImageThumbnail.tsx
// VERSION: 1.0.0
// Reusable thumbnail image with lightbox on click

'use client';

import { useState } from 'react';

interface ImageThumbnailProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export default function ImageThumbnail({ src, alt, caption, className = '' }: ImageThumbnailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className={`cursor-pointer ${className}`} onClick={() => setLightboxOpen(true)}>
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-md hover:opacity-90 transition w-full object-cover"
          loading="lazy"
        />
        {caption && <p className="text-gray-500 text-xs mt-1">{caption}</p>}
      </div>
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <img src={src} alt={alt} className="max-w-full max-h-full rounded-lg shadow-2xl" />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setLightboxOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
// END FILE: components/Prophecy/ImageThumbnail.tsx