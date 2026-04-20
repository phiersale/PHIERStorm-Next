'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
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
  { title: "That's the tipping point.", body: ["Just enough people — in the right place, at the same time."] },
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
    body: ["“I agree”", "→", "“I’m on record”", "Congress has to act.", "Or gets replaced."]
  }
]

const SWIPE_THRESHOLD = 50
const TRANSITION_DURATION = 500
const LAST_SLIDE_TRANSITION_DURATION = 700

export default function PreHomepage({ onGoToHomepage, onGoToPetition }: Props) {
  const [index, setIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isMounted = useRef(true)

  // Cleanup on unmount
  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const clearTransitionTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // Bulletproof next with functional update
  const next = useCallback(() => {
    if (isTransitioning) return
    clearTransitionTimeout()
    setIsTransitioning(true)

    setIndex((current) => {
      if (current >= slides.length - 1) {
        // Last slide – navigate to homepage
        onGoToHomepage()
        return current // no state change
      }

      const nextIndex = current + 1
      const duration = nextIndex === slides.length - 1
        ? LAST_SLIDE_TRANSITION_DURATION
        : TRANSITION_DURATION

      timeoutRef.current = setTimeout(() => {
        if (isMounted.current) setIsTransitioning(false)
      }, duration)

      return nextIndex
    })
  }, [isTransitioning, onGoToHomepage])

  // prev does not need index in dependencies
  const prev = useCallback(() => {
    if (isTransitioning) return
    clearTransitionTimeout()
    setIsTransitioning(true)

    setIndex((current) => Math.max(0, current - 1))

    timeoutRef.current = setTimeout(() => {
      if (isMounted.current) setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }, [isTransitioning])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  // Reduced motion detection (listens for changes)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)

    setPrefersReducedMotion(mediaQuery.matches)

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } else {
      // Fallback for older Safari
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [])

  // Swipe navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
    }
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      const diff = touchStartX.current - e.changedTouches[0].clientX
      if (Math.abs(diff) < SWIPE_THRESHOLD) return
      if (diff > 0) next()
      else prev()
      touchStartX.current = null
    }
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [next, prev])

  const slide = slides[index]
  const isLastSlide = index === slides.length - 1

  const handleSlideClick = () => {
    if (!isTransitioning && !isLastSlide) next()
  }

  const transitionDuration = prefersReducedMotion ? 0 : 0.5

  return (
    <main
      className="min-h-screen bg-[#050b19] text-white flex flex-col items-center justify-center px-4 py-6 font-sans overflow-x-hidden w-full max-w-full"
      style={{ touchAction: 'pan-y', overscrollBehavior: 'none' }}
    >
      {/* Logo - decorative */}
      <div className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none" aria-hidden="true">
        <Image src="/images/PHIERS_Logo.png" alt="" width={50} height={50} className="opacity-80" />
      </div>

      {/* Skip button */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={(e) => { e.stopPropagation(); onGoToHomepage(); }}
          className="text-gray-500 text-sm underline hover:text-gray-300"
          aria-label="Skip introduction and go to homepage"
        >
          Skip →
        </button>
      </div>

      {/* Slide content */}
      <div
        onClick={handleSlideClick}
        className={`text-center w-full max-w-2xl mx-auto ${!isLastSlide ? 'cursor-pointer' : ''}`}
        role="presentation"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: transitionDuration, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              {slide.title}
            </h1>

            <div className={`space-y-3 ${isLastSlide ? 'text-2xl md:text-3xl font-bold text-green' : 'text-lg md:text-xl text-gray-300'}`}>
              {slide.body.map((line, i) => (
                <p key={i} className={line === '→' ? 'text-3xl font-bold' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-28 flex gap-2" role="group" aria-label="Slide progress">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index
                ? 'bg-green scale-125 shadow-[0_0_6px_rgba(61,220,132,0.6)]'
                : 'bg-gray-600 opacity-60'
            }`}
            aria-current={i === index ? 'step' : undefined}
          />
        ))}
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-6 flex flex-col items-center gap-3 w-full max-w-md mx-auto px-4">
        <p className="text-gray-500 text-sm" aria-live="polite">
          {index + 1} / {slides.length}
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          {index > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="text-gray-500 text-sm underline hover:text-gray-300"
              aria-label="Previous slide"
            >
              ← Back
            </button>
          )}

          {isLastSlide && (
            <div className="flex flex-col gap-3 w-full">
              <button
                onClick={(e) => { e.stopPropagation(); onGoToPetition(); }}
                className="bg-green text-black text-xl md:text-2xl font-bold py-4 px-6 rounded-xl w-full shadow-lg hover:bg-green-600 transition"
                aria-label="Go to petition and be counted"
              >
                ✍ BE COUNTED
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); onGoToHomepage(); }}
                className="border-2 border-green text-green text-xl md:text-2xl font-bold py-4 px-6 rounded-xl w-full hover:bg-green/10 transition"
                aria-label="See how it works"
              >
                → SEE HOW IT WORKS
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Prevent horizontal scroll (move to global CSS if possible) */}
      <style jsx global>{`
        html, body, #__next {
          overflow-x: hidden !important;
          width: 100% !important;
          max-width: 100% !important;
          margin: 0;
          padding: 0;
        }
        * {
          box-sizing: border-box;
        }
        img, video {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </main>
  )
}