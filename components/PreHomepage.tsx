// FILE: components/PreHomepage.tsx
// VERSION: 2.5.0 (larger logo, smaller letters on PHIERS slide)

'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import slides from './slides'

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

  const goToSlide = useCallback((newIndex: number) => {
    if (isTransitioning) return
    clearTimer()
    setIsTransitioning(true)
    setIndex(newIndex)
    timeoutRef.current = setTimeout(() => {
      if (mounted.current) setIsTransitioning(false)
    }, TRANSITION_MS)
  }, [isTransitioning])

  const next = useCallback(() => {
    if (isTransitioning) return
    if (index >= slides.length - 1) {
      onGoToHomepage()
      return
    }
    goToSlide(index + 1)
  }, [isTransitioning, index, onGoToHomepage, goToSlide])

  const prev = useCallback(() => {
    if (isTransitioning) return
    if (index === 0) return
    goToSlide(index - 1)
  }, [isTransitioning, index, goToSlide])

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
    if (slide.customLayout) return null
    if (slide.title === "PHIERS") {
      return <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green">{slide.title}</h1>
    }
    return <h1 className="text-4xl md:text-5xl font-light mb-6">{slide.title}</h1>
  }

  const renderBody = () => {
    // Custom layout for PHIERS acronym – larger logo, smaller letters
    if (slide.customLayout) {
      const items = slide.body  // array of { letter, word }
      return (
        <div className="flex flex-col items-center space-y-6 mt-4">
          {/* Large logo */}
          <div className="mb-2">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={160}
              height={160}
              className="w-32 sm:w-40 md:w-48 h-auto mx-auto"
              priority
            />
          </div>
          {/* Letters row – smaller, spaced appropriately */}
          <div className="flex justify-center gap-6 md:gap-8 text-3xl md:text-4xl font-bold tracking-wider text-green">
            {items.map((item, idx) => (
              <span key={idx}>{item.letter}</span>
            ))}
          </div>
          {/* Words row – directly underneath each letter */}
          <div className="flex justify-center gap-6 md:gap-8 text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wide">
            {items.map((item, idx) => (
              <div key={idx} className="text-center">{item.word}</div>
            ))}
          </div>
          {/* Punch line – grey, italic, smaller */}
          <p className="text-gray-500 text-xs mt-4 italic">{slide.punchLine}</p>
        </div>
      )
    }

    // Final slide with sequential fade‑in
    if (slide.isFinalSlide) {
      return (
        <div className="space-y-8 max-w-2xl mx-auto text-center">
          <motion.p
            key="final-line-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-gray-300 text-xl md:text-2xl font-light"
          >
            {slide.body[0]}
          </motion.p>
          <motion.p
            key="final-line-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-white text-4xl md:text-5xl font-bold"
          >
            {slide.body[1]}
          </motion.p>
          <motion.p
            key="final-line-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-green text-2xl md:text-3xl font-semibold"
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
      {/* Centered header with logo and skip button */}
      <div className="flex justify-center items-center gap-6 py-2">
        <div className="pointer-events-none">
          <Image src="/images/PHIERS_Logo.png" alt="" width={40} height={40} className="opacity-80" />
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
          onKeyDown={(e) => {
            if (!isLastSlide && !isTransitioning && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault()
              next()
            }
          }}
          role="button"
          tabIndex={!isLastSlide ? 0 : -1}
          aria-label={!isLastSlide ? "Click or press Enter to advance to next slide" : undefined}
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
        {/* Clickable dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green ${
                i === index ? 'bg-green scale-125 shadow-[0_0_6px_rgba(61,220,132,0.6)]' : 'bg-gray-600 opacity-60 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
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
            <div className="flex flex-col gap-2 w-full max-w-xs mx-auto">
              <button
                onClick={onGoToPetition}
                className="bg-green/80 text-black text-base md:text-lg font-semibold py-2 px-4 rounded-lg w-full shadow-sm hover:bg-green/90 transition"
                aria-label="Sign the petition"
              >
                ✍ BE COUNTED
              </button>
              <button
                onClick={onGoToHomepage}
                className="border border-green/50 text-green text-base md:text-lg font-semibold py-2 px-4 rounded-lg w-full hover:bg-green/10 transition"
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
// VERSION: 2.5.0