// FILE: components/PreHomepage.tsx
// VERSION: 2.0.0 (imports slides from external file, all features intact)

'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import slides from './slides'   // <-- external slide data

type Props = {
  onGoToHomepage: () => void
  onGoToPetition: () => void
}

const SWIPE_THRESHOLD = 50
const TRANSITION_MS = 400
const LAST_SLIDE_EXTRA_MS = 300

export default function PreHomepage({ onGoToHomepage, onGoToPetition }: Props) {
  const [index, setIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const next = useCallback(() => {
    if (isTransitioning) return
    clearTimer()
    setIsTransitioning(true)

    setIndex(prev => {
      if (prev >= slides.length - 1) {
        onGoToHomepage()
        return prev
      }
      const nextIdx = prev + 1
      const delay = nextIdx === slides.length - 1 ? TRANSITION_MS + LAST_SLIDE_EXTRA_MS : TRANSITION_MS
      timeoutRef.current = setTimeout(() => {
        if (mounted.current) setIsTransitioning(false)
      }, delay)
      return nextIdx
    })
  }, [isTransitioning, onGoToHomepage])

  const prev = useCallback(() => {
    if (isTransitioning) return
    clearTimer()
    setIsTransitioning(true)
    setIndex(prev => Math.max(0, prev - 1))
    timeoutRef.current = setTimeout(() => {
      if (mounted.current) setIsTransitioning(false)
    }, TRANSITION_MS)
  }, [isTransitioning])

  // Keyboard navigation (including Spacebar)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  // Swipe navigation
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      const diff = touchStartX.current - e.changedTouches[0].clientX
      if (Math.abs(diff) < SWIPE_THRESHOLD) return
      if (diff > 0) next()
      else prev()
      touchStartX.current = null
    }
    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [next, prev])

  // Reduced motion detection
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = (e: MediaQueryListEvent | MediaQueryList) => setPrefersReducedMotion(e.matches)
    update(media)
    if (media.addEventListener) media.addEventListener('change', update)
    else media.addListener(update)
    return () => {
      if (media.removeEventListener) media.removeEventListener('change', update)
      else media.removeListener(update)
    }
  }, [])

  const slide = slides[index]
  const isLastSlide = index === slides.length - 1
  const transitionDuration = prefersReducedMotion ? 0 : 0.4

  const renderTitle = () => {
    if (slide.title === "PHIERS") {
      return <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green">{slide.title}</h1>
    }
    return <h1 className="text-4xl md:text-5xl font-light mb-6">{slide.title}</h1>
  }

  const renderBody = () => {
    // Custom layout for redesigned PHIERS acronym slide
    if (slide.customLayout) {
      const letters = "PHIERS".split('')
      const words = slide.body
      return (
        <div className="flex flex-col items-center space-y-6 mt-8">
          <div className="flex justify-center gap-6 md:gap-10 text-4xl md:text-6xl font-light tracking-widest">
            {letters.map((letter, idx) => (
              <span key={idx} className="text-green font-bold">{letter}</span>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-2 md:gap-4 text-center text-xs md:text-sm font-medium text-gray-300 max-w-full">
            {words.map((word, idx) => (
              <div key={idx} className="uppercase leading-tight">{word}</div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6 italic">{slide.punchLine}</p>
        </div>
      )
    }

    // New final slide with sequential fade-in
    if (slide.isFinalSlide) {
      return (
        <div className="space-y-8 max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-gray-400 text-xl md:text-2xl font-light"
          >
            {slide.body[0]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-green text-3xl md:text-4xl font-bold"
          >
            {slide.body[1]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white text-2xl md:text-3xl font-semibold leading-relaxed"
          >
            {slide.body[2]}
          </motion.p>
        </div>
      )
    }

    const greenLineIndices = slide.greenLines || []
    return slide.body.map((line, i) => {
      if (line === '→') {
        return <p key={i} className="text-3xl font-bold">{line}</p>
      }
      if (isLastSlide) {
        return <p key={i} className="text-2xl md:text-3xl font-bold text-green">{line}</p>
      }
      if (slide.isAcronymSlide) {
        const words = line.split(' ')
        const formatted = words.map((word, idx) => {
          if (word.length === 0) return null
          const firstLetter = word[0]
          const rest = word.slice(1)
          return (
            <span key={idx}>
              <strong className="text-green font-bold">{firstLetter}</strong>{rest}{' '}
            </span>
          )
        })
        return <p key={i} className="text-lg md:text-xl text-white">{formatted}</p>
      }
      if (greenLineIndices.includes(i)) {
        return <p key={i} className="text-lg md:text-xl text-green">{line}</p>
      }
      return <p key={i} className="text-lg md:text-xl text-gray-300">{line}</p>
    })
  }

  return (
    <div
      className="prehomepage-container min-h-screen bg-[#050b19] text-white flex flex-col px-4 py-6 font-sans overflow-x-hidden w-full max-w-full"
      style={{ touchAction: 'pan-y', overscrollBehavior: 'none', overflowX: 'hidden' }}
    >
      <div className="flex justify-between items-start w-full">
        <div className="w-12" aria-hidden="true" />
        <div className="pointer-events-none">
          <Image src="/images/PHIERS_Logo.png" alt="" width={50} height={50} className="opacity-80" />
        </div>
        <button
          onClick={onGoToHomepage}
          className="text-gray-500 text-sm underline hover:text-gray-300"
          aria-label="Skip introduction"
        >
          Skip →
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
        <div
          className={`text-center w-full py-6 ${!isLastSlide ? 'cursor-pointer active:opacity-80 transition-opacity' : ''}`}
          onClick={!isLastSlide && !isTransitioning ? next : undefined}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: transitionDuration, ease: [0.4, 0, 0.2, 1] }}
              whileTap={{ scale: 1 }}
            >
              {renderTitle()}
              <div className="space-y-3">{renderBody()}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 mt-8 pb-4">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? 'bg-green scale-125 shadow-[0_0_6px_rgba(61,220,132,0.6)]' : 'bg-gray-600 opacity-60'
              }`}
              aria-current={i === index ? 'step' : undefined}
            />
          ))}
        </div>
        <p className="text-gray-500 text-sm" aria-live="polite">
          {index + 1} / {slides.length}
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          {index > 0 && (
            <button
              onClick={prev}
              className="text-gray-500 text-sm underline hover:text-gray-300"
              aria-label="Previous slide"
            >
              ← Back
            </button>
          )}
          {isLastSlide && (
            <div className="flex flex-col gap-3 w-full max-w-md">
              <button
                onClick={onGoToPetition}
                className="bg-green text-black text-xl md:text-2xl font-bold py-4 px-6 rounded-xl w-full shadow-lg hover:bg-green-600 transition"
                aria-label="Sign the petition"
              >
                ✍ BE COUNTED
              </button>
              <button
                onClick={onGoToHomepage}
                className="border-2 border-green text-green text-xl md:text-2xl font-bold py-4 px-6 rounded-xl w-full hover:bg-green/10 transition"
                aria-label="Learn how it works"
              >
                → SEE HOW IT WORKS
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .prehomepage-container, .prehomepage-container * {
          overflow-x: hidden !important;
          box-sizing: border-box;
        }
        .prehomepage-container img, .prehomepage-container video {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  )
}

// FILE: components/PreHomepage.tsx (end)
// VERSION: 2.0.0