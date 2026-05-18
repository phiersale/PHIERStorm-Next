// FILE: components/ImageSection.tsx
// Reusable cinematic image block with optional overlay and fade‑in motion

'use client';

import { motion } from 'framer-motion';

interface ImageSectionProps {
  src: string;
  alt: string;
  overlayText?: string;
  overlayPosition?: 'none' | 'top-left' | 'bottom-center';
  priority?: boolean;          // for hero image
  aspectRatio?: string;        // e.g., "4/3" for grids
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  src,
  alt,
  overlayText,
  overlayPosition = 'none',
  priority = false,
  aspectRatio,
}) => {
  const imgClasses = `w-full ${aspectRatio ? `aspect-[${aspectRatio}] object-cover` : 'h-auto'} rounded-lg relative z-0`;

  const overlayBgClasses = 'absolute inset-0 bg-black/40 z-10'; // improved contrast
  const overlayTextClasses = (() => {
    if (overlayPosition === 'top-left') {
      return 'absolute top-8 left-8 max-w-xl text-white/90 text-2xl md:text-3xl font-semibold leading-snug tracking-wide z-20 drop-shadow-lg';
    }
    if (overlayPosition === 'bottom-center') {
      return 'absolute bottom-8 w-full text-center text-white/80 text-xl md:text-2xl font-medium tracking-wider z-20 drop-shadow-lg';
    }
    return '';
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      className="relative my-8"
    >
      <img
        src={src}
        alt={alt}
        className={imgClasses}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      {overlayPosition !== 'none' && <div className={overlayBgClasses} />}
      {overlayText && overlayPosition !== 'none' && (
        <p className={overlayTextClasses}>{overlayText}</p>
      )}
    </motion.div>
  );
};