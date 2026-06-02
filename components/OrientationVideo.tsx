// FILE: components/OrientationVideo.tsx
// VERSION: 1.0 – Orientation video after slideshow, two‑path choice

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  onWatch: () => void;    // user wants to watch video
  onSkip: () => void;     // user wants to skip to the experience
};

export default function OrientationVideo({ onWatch, onSkip }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
        <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-green/30">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src="https://www.youtube.com/embed/g0ETIw7vM5Y?autoplay=1&rel=0&modestbranding=1"
              title="Welcome to PHIERStorm – orientation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <button
            onClick={onSkip}
            className="absolute top-3 right-3 text-gray-300 hover:text-white text-sm bg-black/60 px-2 py-1 rounded"
          >
            Close ✕
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/images/PHIERS_Logo.png" alt="PHIERS" className="w-24 h-24 object-contain opacity-90" />
        </div>

        {/* Title */}
        <p className="text-green text-sm font-mono tracking-wider mb-2">YOU'VE JUST SEEN THE LANDSCAPE.</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Now here's the framework.</h1>

        {/* Short framing text */}
        <p className="text-gray-300 text-base mb-4 max-w-lg mx-auto">
          This site is organized in three parts.
        </p>
        <p className="text-gray-300 text-base mb-2 max-w-lg mx-auto">
          <span className="text-green">Part One</span> shows why leverage matters.
        </p>
        <p className="text-gray-300 text-base mb-2 max-w-lg mx-auto">
          <span className="text-green">Part Two</span> shows why PHIERS became credible.
        </p>
        <p className="text-gray-300 text-base mb-6 max-w-lg mx-auto">
          <span className="text-green">Part Three</span> shows what becomes possible when citizens regain influence.
        </p>

        <p className="text-gray-500 text-xs mb-6">Watch the 2‑minute overview below.</p>

        {/* Video thumbnail with play button */}
        <div
          className="relative w-full max-w-lg mx-auto cursor-pointer group rounded-xl overflow-hidden shadow-lg border border-green/30 mb-6"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src="https://img.youtube.com/vi/g0ETIw7vM5Y/mqdefault.jpg"
            alt="Play orientation video"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
            <div className="w-16 h-16 rounded-full bg-black/70 flex items-center justify-center border-2 border-white/60 group-hover:scale-110 transition">
              <span className="text-white text-3xl ml-1">▶</span>
            </div>
          </div>
        </div>

        {/* Two buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsPlaying(true)}
            className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
          >
            Watch the 2‑Minute Overview
          </button>
          <button
            onClick={onSkip}
            className="px-6 py-2 border border-green/40 text-green rounded-lg hover:bg-green/10 transition"
          >
            Skip to the Experience
          </button>
        </div>
        <p className="text-gray-500 text-xs mt-4">You can always come back to this later via the footer.</p>
      </div>
    </motion.div>
  );
}