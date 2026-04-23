// FILE: components/PreHomepage.tsx
// VERSION: 3.7.3 – fixed mobile experience with slides

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

  const renderTitle = () => {
    if (slide.customLayout) return null
    if (slide.title === "") return null
    if (slide.title === "PHIERS") {
      return <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green">{slide.title}</h1>
    }
    return <h1 className="text-4xl md:text-5xl font-light mb-6">{slide.title}</h1>
  }

  const renderBody = () => {
    // Custom layout for PHIERS acronym (slide 7) – fits mobile without horizontal scroll
    if (slide.customLayout) {
      const items = slide.body
      return (
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <div className="mb-1 sm:mb-2">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={120}
              height={120}
              className="w-24 sm:w-32 md:w-40 h-auto mx-auto"
              priority
            />
          </div>
          <div className="w-full px-2 sm:px-4">
            <div className="grid grid-cols-6 gap-1 sm:gap-2 md:gap-4 justify-items-center mx-auto">
              {items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-green whitespace-nowrap">
                    {item.letter}
                  </span>
                  <span className="text-[8px] sm:text-[10px] md:text-xs font-medium text-gray-300 uppercase text-center whitespace-nowrap">
                    {item.word}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-xs italic text-center px-2">{slide.punchLine}</p>
        </div>
      )
    }

    // Final slide with staggered fade‑in (uses isFinalSlide flag from slide data)
    if (slide.isFinalSlide) {
      const lines = slide.body
      const fontSizes = [
        "text-xl md:text-2xl",
        "text-2xl md:text-3xl",
        "text-3xl md:text-4xl",
        "text-4xl md:text-5xl",
        "text-5xl md:text-6xl"
      ]
      const greenIntensities = [
        "text-green/50",
        "text-green/70",
        "text-green/90",
        "text-green",
        "text-green font-bold"
      ]
      return (
        <div className="space-y-6 max-w-2xl mx-auto text-center">
          {lines.map((line, idx) => (
            <motion.p
              key={`final-line-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.3, ease: "easeOut" }}
              className={`${fontSizes[idx] || fontSizes[fontSizes.length-1]} ${greenIntensities[idx] || greenIntensities[greenIntensities.length-1]} font-medium`}
            >
              {line}
            </motion.p>
          ))}
        </div>
      )
    }

    // Normal slides with greenLines support
    const greenLineIndices = slide.greenLines || []
    return slide.body.map((line, i) => {
      if (line === '→') {
        return <p key={i} className="text-3xl font-bold">{line}</p>
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
      {/* Header */}
      <div className="flex justify-end pr-12 py-2">
        <button
          onClick={() => {
            console.log('Skip button clicked → forcing credibility');
            onGoToHomepage();
          }}
          className="text-gray-500 text-sm underline hover:text-gray-300"
          aria-label="Skip introduction"
        >
          Skip →
        </button>
      </div>

      {/* Main clickable area – full height or scrollable if last slide */}
      <div className={`flex-1 flex flex-col max-w-2xl mx-auto w-full ${isLastSlide ? 'overflow-y-auto' : 'justify-center'}`}>
        <div
          className={`text-center w-full ${!isLastSlide ? 'flex-1 flex flex-col justify-center cursor-pointer active:opacity-80 transition-opacity' : ''} ${isLastSlide ? 'pb-4' : ''}`}
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
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileTap={{ scale: 1 }}
            >
              {renderTitle()}
              {renderBody()}
              {/* UX hint on last slide – indicates scrolling needed */}
              {isLastSlide && (
                <p className="text-gray-500 text-xs italic mt-4 mb-2">Use buttons below ↓</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex flex-col items-center gap-3 mt-8 pb-4">
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
                className="bg-green/60 text-black text-sm md:text-base font-semibold py-1 px-3 rounded-md hover:bg-green/70 transition"
                aria-label="Sign the petition"
              >
                ✍ BE COUNTED
              </button>
              <button
                onClick={onGoToHomepage}
                className="border border-green/40 text-green text-sm md:text-base font-semibold py-1 px-3 rounded-md hover:bg-green/10 transition"
                aria-label="Learn how it works"
              >
                → SEE HOW IT WORKS
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// FILE: components/PreHomepage.tsx (end)
// VERSION: 3.7.3