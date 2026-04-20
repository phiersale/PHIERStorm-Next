'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Props = {
  onGoToHomepage: () => void
  onGoToPetition: () => void
}

const slides = [
  { title: "Congress can fix most of what's broken.", body: ["It just doesn't have to."] },
  { title: "Not because they can't.", body: ["Because nothing forces them to."] },
  { title: "Opinions don't force action.", body: ["Outrage doesn't force action.", "Noise doesn't force action."] },
  { title: "Only pressure works.", body: ["But only if it's organized in the right place."] },
  { title: "We track how many people in each congressional district", body: ["have gone on record."] },
  { title: "Alone, you're easy to ignore.", body: ["1,500 people in your district are not."] },
  { title: "That's the tipping point.", body: ["Just enough people — in the right place."] },
  {
    title: "1,500 people per district.",
    body: ["Across 435 districts, that's about 650,000 people.", "That's enough to force response nationwide."]
  },
  {
    title: "When 1,500 people are on record,",
    body: ["representatives must respond in public.", "Or they get replaced."]
  },
  { title: "That's leverage.", body: ["Not opinion.", "Not noise.", "Consequence that can't be ignored."] },
  { title: "PHIERS", body: ["Power Held In Every Representative's Seat"] },
  {
    title: "When people stop overpaying for healthcare,",
    body: ["the savings don't disappear.", "They fund more people.", "And the system grows on its own."]
  },
  {
    title: "That's how this works.",
    body: ["Savings create growth.", "Growth creates pressure.", "Pressure creates results."]
  },
  {
    title: "This doesn't run on donations.",
    body: ["It runs on coordination.", "And accountability.", "Representatives respond — or they get replaced."]
  },
  {
    title: "If enough people move from",
    body: ["“I agree”", "to", "“I’m on record”", "Congress has to act.", "Or gets replaced."]
  }
]

export default function PreHomepage({ onGoToHomepage, onGoToPetition }: Props) {
  const [index, setIndex] = useState(0)
  const [flash, setFlash] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const touchStartX = useRef<number | null>(null)

  // 🔍 Debug console only in development (never production)
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      import('eruda').then(({ default: eruda }) => eruda.init())
    }
  }, [])

  const next = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    if (index < slides.length - 1) {
      setIndex((i) => i + 1)
      setTimeout(() => setIsTransitioning(false), 300)
    } else {
      onGoToHomepage()
    }
  }

  const prev = () => {
    if (isTransitioning || index === 0) return
    setIsTransitioning(true)
    setIndex((i) => i - 1)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const handleTap = () => {
    setFlash(true)
    setTimeout(() => setFlash(false), 100)
    next()
  }

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault()
        handleTap()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index, isTransitioning])

  // Swipe nav (with guard)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      const diff = touchStartX.current - e.changedTouches[0].clientX
      if (Math.abs(diff) < 50) return
      if (diff > 0) handleTap()
      else prev()
      touchStartX.current = null
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [index, isTransitioning])

  const slide = slides[index]

  return (
    <div className="min-h-screen bg-[#050b19] text-white flex flex-col items-center justify-center px-6 pt-20 font-sans">
      {/* Logo */}
      <div className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none">
        <Image src="/images/PHIERS_Logo.png" alt="logo" width={50} height={50} className="opacity-80" />
      </div>

      {/* Skip button */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={(e) => { e.stopPropagation(); onGoToHomepage(); }}
          className="text-gray-500 text-sm underline hover:text-gray-300"
        >
          Skip →
        </button>
      </div>

      {/* Main slide area with flash overlay */}
      <div
        onClick={handleTap}
        className="cursor-pointer text-center max-w-2xl w-full relative"
      >
        {flash && (
          <div className="absolute inset-0 bg-white/30 pointer-events-none rounded-lg" style={{ animation: 'pulseFlash 0.1s ease-out' }} />
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              {slide.title}
            </h1>
            <div className="space-y-3">
              {slide.body.map((line, i) => (
                <p key={i} className="text-lg md:text-xl text-gray-300">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-20 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? 'bg-green scale-125' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Controls and final buttons */}
      <div className="absolute bottom-6 flex flex-col items-center gap-3">
        <p className="text-gray-500 text-sm">
          {index + 1} / {slides.length}
        </p>

        <div className="flex gap-4">
          {index > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="text-gray-500 text-sm underline hover:text-gray-300"
            >
              ← Back
            </button>
          )}

          {index === slides.length - 1 && (
            <div className="flex gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); onGoToPetition(); }}
                className="bg-green text-black px-4 py-2 rounded-md font-bold"
              >
                ✍ BE COUNTED
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onGoToHomepage(); }}
                className="border border-green px-4 py-2 rounded-md"
              >
                → SEE HOW IT WORKS
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add keyframe animation for flash */}
      <style jsx global>{`
        @keyframes pulseFlash {
          0% { opacity: 0; }
          50% { opacity: 0.5; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}