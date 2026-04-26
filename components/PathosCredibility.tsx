// FILE: components/PathosCredibility.tsx
// VERSION: 5.0 – full styling + local thumbnail + motion

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PathosCredibility() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto px-4 py-12"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-green text-center mb-4">
        Why Pathos Communications Staked Their Reputation on PHIERS
      </h2>

      {/* Broken‑up description */}
      <div className="text-left max-w-2xl mx-auto space-y-3 text-gray-300 text-base md:text-lg leading-relaxed mb-8">
        <p>
          Pathos Communications is a <span className="text-green font-semibold">global research and PR agency</span> listed on the London Stock Exchange.
        </p>
        <p>
          They conducted <span className="text-green font-semibold">multiple 30-minute interviews</span> with Will Price.
        </p>
        <p>
          After reviewing the mechanism, they chose to represent PHIERS — and explained why on video.
        </p>
      </div>

      {/* Thumbnail linking to YouTube */}
      <a
        href="https://www.youtube.com/watch?v=KLu7USN_dao"
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-xl mx-auto group"
      >
        <div className="relative rounded-xl overflow-hidden border border-green/20 shadow-lg transition-transform group-hover:scale-[1.02]">
          <Image
            src="/images/Pathos_Interview_Thumbnail.png"
            alt="Pathos Communications – Why They Staked Their Reputation on PHIERS"
            width={1280}
            height={720}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition">
            <div className="w-16 h-16 rounded-full bg-black/70 flex items-center justify-center border-2 border-white/60 group-hover:scale-110 transition">
              <span className="text-white text-2xl ml-1">▶</span>
            </div>
          </div>
        </div>
      </a>

      {/* Quote and attribution */}
      <div className="text-center mt-8 mb-6">
        <p className="text-green text-xl md:text-2xl font-semibold italic">
          “If you weren’t legit, we wouldn’t risk putting our name behind yours.”
        </p>
        <p className="text-gray-400 text-base mt-2">
          — Pathos Communications
        </p>
      </div>

      {/* Context lines */}
      <p className="text-gray-300 text-center max-w-xl mx-auto">
        They asked hard questions. They pushed on the mechanism.<br />
        They chose to represent PHIERS because the idea had already earned serious interest.
      </p>

      {/* Closing line */}
      <p className="text-gray-400 text-sm text-center border-t border-green/20 pt-6 mt-6">
        Their decision to represent PHIERS — and to say this publicly — is on record.
      </p>
    </motion.div>
  )
}