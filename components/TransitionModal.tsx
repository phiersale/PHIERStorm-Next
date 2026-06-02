// FILE: components/TransitionModal.tsx
// VERSION: 1.1 – Orientation video bridge between credibility and main homepage

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  onContinue: () => void
}

export default function TransitionModal({ onContinue }: Props) {
  const [videoStarted, setVideoStarted] = useState(false)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        className="relative bg-[#0d1525] border border-green/20 rounded-2xl max-w-lg w-full p-6 shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-green text-xs font-mono tracking-wider text-center mb-1">
          YOU'VE SEEN THE EVIDENCE.
        </p>
        <h2 className="text-xl font-bold text-white text-center mb-2">
          Now see what becomes possible.
        </h2>
        <p className="text-gray-400 text-xs text-center mb-4">
          The next section shows how district‑level leverage changes
          healthcare, housing, veterans' care, education, and more.
        </p>

        {/* Orientation video thumbnail */}
        <div
          className="relative w-full cursor-pointer group rounded-xl shadow-md overflow-hidden mb-4"
          style={{ paddingBottom: '56.25%' }}
          onClick={(e) => {
            if (videoStarted) return
            setVideoStarted(true)
            const container = e.currentTarget
            const iframe = document.createElement('iframe')
            iframe.src = 'https://www.youtube.com/embed/g0ETIw7vM5Y?autoplay=1'
            iframe.title = 'PHIERS — How it all fits together'
            iframe.className = 'absolute top-0 left-0 w-full h-full'
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            iframe.allowFullscreen = true
            container.innerHTML = ''
            container.appendChild(iframe)
          }}
        >
          {!videoStarted && (
            <>
              <img
                src="https://img.youtube.com/vi/g0ETIw7vM5Y/maxresdefault.jpg"
                alt="Play orientation video"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
                <div className="w-14 h-14 rounded-full bg-black/70 flex items-center justify-center border-2 border-white/60 group-hover:scale-110 transition shadow-lg">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={onContinue}
            className="w-full text-center font-bold py-3 px-4 rounded-lg transition text-sm"
            style={{ backgroundColor: '#3ddc84', color: '#080d1a' }}
          >
            I'm ready — show me the framework →
          </button>
          <button
            onClick={onContinue}
            className="w-full text-center text-gray-500 text-xs py-2 hover:text-gray-400 transition"
          >
            Skip video
          </button>
        </div>
      </motion.div>
    </div>
  )
}