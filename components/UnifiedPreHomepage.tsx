// FILE: components/UnifiedPreHomepage.tsx
// VERSION: 1.0 - Complete replacement that makes EVERY slide fit viewport
// SUMMARY: Uses the universal slide system with a SINGLE viewport wrapper that ensures ALL slides are visible at 100% zoom

'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { universalSlides } from './slides/universalSlideData'
import UniversalSlideRenderer from './slides/UniversalSlideRenderer'

type Props = {
  onGoToHomepage: () => void
  skipFirstImageSlide?: boolean
  onBackToReading?: () => void
  onGoToPetition?: () => void
}

const SWIPE_THRESHOLD = 30
const TRANSITION_MS = 400

export default function UnifiedPreHomepage({
  onGoToHomepage,
  skipFirstImageSlide = false,
  onBackToReading,
  onGoToPetition
}: Props) {
  const [index, setIndex] = useState(skipFirstImageSlide ? 1 : 0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [douglassModalOpen, setDouglassModalOpen] = useState(false)
  const [naderModalOpen, setNaderModalOpen] = useState(false)
  const [showSwipeHint, setShowSwipeHint] = useState(true)
  const [navVisible, setNavVisible] = useState(false)
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

  useEffect(() => {
    const timer = setTimeout(() => setShowSwipeHint(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Delayed nav appearance for cinematic feel
  useEffect(() => {
    setNavVisible(false)
    const timer = setTimeout(() => setNavVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [index])

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const goToSlide = useCallback(
    (newIndex: number) => {
      if (isTransitioning) return
      clearTimer()
      setIsTransitioning(true)
      setIndex(newIndex)
      timeoutRef.current = setTimeout(() => {
        if (mounted.current) setIsTransitioning(false)
      }, TRANSITION_MS)
    },
    [isTransitioning]
  )

  const next = useCallback(() => {
    if (isTransitioning) return
    if (index >= universalSlides.length - 1) {
      onGoToHomepage()
      return
    }
    setNavVisible(false)
    setShowSwipeHint(false)
    setTimeout(() => {
      goToSlide(index + 1)
    }, 200)
  }, [isTransitioning, index, onGoToHomepage, goToSlide])

  const prevNormal = useCallback(() => {
    if (isTransitioning) return
    if (index === 0) return
    goToSlide(index - 1)
    setShowSwipeHint(false)
  }, [isTransitioning, index, goToSlide])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && douglassModalOpen) {
        setDouglassModalOpen(false)
      }
      if (e.key === 'Escape' && naderModalOpen) {
        setNaderModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [douglassModalOpen, naderModalOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Space, ArrowRight, Enter all advance
      if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ' || e.key === 'Space') {
        e.preventDefault()
        if (!isTransitioning && index < universalSlides.length - 1) {
          next()
        } else if (index === universalSlides.length - 1) {
          onGoToHomepage()
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (index !== 0) prevNormal()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prevNormal, index, isTransitioning, onGoToHomepage])

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      const diff = touchStartX.current - e.changedTouches[0].clientX
      if (Math.abs(diff) < SWIPE_THRESHOLD) return
      if (diff > 0) next()
      else prevNormal()
      touchStartX.current = null
    }
    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [next, prevNormal])

  const slide = universalSlides[index]
  const isLastSlide = index === universalSlides.length - 1

  const handleImageClick = (slideId: string) => {
    if (slideId === "slide-6") setDouglassModalOpen(true)
    if (slideId === "slide-11") setNaderModalOpen(true)
  }

  const handleFinalSlideButtonClick = () => {
    if (onGoToPetition) onGoToPetition()
    else onGoToHomepage()
  }

  // Determine if current slide should show background logo (slides 3, 4, 5 only)
  const showBackgroundLogo = index === 3 || index === 4 || index === 5
  
  const getBackgroundLogoStyle = () => {
    switch (index) {
      case 3:
        return "opacity-[0.20] scale-[1.0] z-0"
      case 4:
        return "opacity-[0.25] scale-[1.4] z-0"
      case 5:
        return "opacity-[0.30] scale-[1.8] z-0"
      default:
        return ""
    }
  }

  const getBackgroundLogoPosition = () => {
    // Position so top line of text aligns with middle of growing logo
    // Lowered from top-1/4 to top-1/3 for better text/logo overlap
    return "top-1/3 -translate-y-1/3"
  }

  const getGlowIntensity = () => {
    switch (index) {
      case 3:
        return "0 0 8px rgba(61, 220, 132, 0.2)"
      case 4:
        return "0 0 12px rgba(61, 220, 132, 0.25)"
      case 5:
        return "0 0 16px rgba(61, 220, 132, 0.3)"
      default:
        return "none"
    }
  }

  return (
    <div className="relative h-dvh w-full bg-[#050b19] text-white flex flex-col overflow-hidden">

      {/* Background PHIERS Logo (No Text) - Slides 3, 4, 5 only */}
      {showBackgroundLogo && (
        <div
          className={`
            absolute left-0 right-0 flex items-center justify-center
            pointer-events-none select-none
            transition-all duration-1000 ease-out
            ${getBackgroundLogoStyle()} ${getBackgroundLogoPosition()}
          `}
        >
          <img
            src="/images/PHIERS_Logo-NoText.png"
            alt=""
            className="h-[80px] w-auto object-contain"
            style={{
              filter: `drop-shadow(${getGlowIntensity()})`
            }}
          />
        </div>
      )}

      {/* Top bar */}
      <div
        className="flex justify-between items-center pr-6 pl-6 pt-1 pb-0 shrink-0 z-10 transition-opacity duration-300"
        style={{ opacity: 0.9 }}
      >
        {onBackToReading && (
          <button onClick={onBackToReading} className="text-gray-200 text-sm underline hover:text-white">
            ← Back to start
          </button>
        )}
        <button onClick={onGoToHomepage} className="text-gray-200 text-sm underline hover:text-white">
          Skip →
        </button>
      </div>

      {/* MAIN SLIDE AREA - FULL SCREEN CLICKABLE */}
      <div
        className="relative z-10 flex-1 min-h-0 overflow-y-auto touch-auto cursor-pointer"
        onClick={(e) => {
          // Don't advance if clicking on buttons, nav dots, or back button
          const target = e.target as HTMLElement
          if (target.closest('button') || target.closest('.nav-dot') || target.closest('.back-button')) return
          if (!isTransitioning && !isLastSlide) next()
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Space' || e.key === 'ArrowRight' || e.key === 'Enter') {
            e.preventDefault()
            if (!isTransitioning && !isLastSlide) next()
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault()
            if (!isTransitioning && index !== 0) prevNormal()
          }
        }}
      >
        <div className="flex min-h-full items-start justify-center px-4 pt-4 pb-24">
          <div className="w-full max-w-4xl mx-auto">
            <AnimatePresence mode="popLayout">
              {index === 0 ? (
                <div key={index} className="relative">
                  <div
                    className={`
                      flex flex-col items-center text-center w-full
                      -mt-16 pt-4
                    `}
                  >
                    <UniversalSlideRenderer 
                      slide={slide} 
                      index={index}
                      onImageClick={handleImageClick}
                      onFinalSlideButtonClick={handleFinalSlideButtonClick}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.45, delay: 0.45 }}
                      className="mt-8 md:mt-10 flex flex-col items-center gap-2"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          if (!isTransitioning) next()
                        }}
                        className="text-sm transition-all duration-200 text-gray-600 hover:text-gray-400"
                      >
                        <span className="font-bold">Continue →</span>
                      </button>
                      <div className="w-16 h-px bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gray-600 rounded-full"
                          initial={{ width: '100%' }}
                          animate={{ width: '0%' }}
                          transition={{ duration: 10, delay: 0.45, ease: 'linear' }}
                          onAnimationComplete={() => {
                            if (!isTransitioning) next()
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative"
                >
                  <div
                    className={`
                      flex flex-col items-center text-center w-full
                      ${index === 14 ? '-mt-5 pt-0' : index === 13 ? 'pt-0 md:pt-0' : index >= 3 && index <= 5 ? 'pt-12 md:pt-16' : index >= 6 && index <= 8 ? 'pt-0 md:pt-1' : 'pt-2 md:pt-4'}
                    `}
                  > 
                    <UniversalSlideRenderer 
                      slide={slide} 
                      index={index}
                      onImageClick={handleImageClick}
                      onFinalSlideButtonClick={handleFinalSlideButtonClick}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom nav - Nav dots + hints - FIXED POSITION on ALL slides */}
      <div
        className="fixed left-0 right-0 flex flex-col items-center pointer-events-none"
        style={{ 
          bottom: '4px',
          pointerEvents: navVisible ? 'auto' : 'none',
          zIndex: 50
        }}
      >
        {/* Nav dots - larger and more spaced */}
        <div className="flex space-x-3 pointer-events-auto items-center mb-1">
          {universalSlides.map((_, i) => (
            <button
              key={i}
              className="nav-dot transition-all duration-200"
              onClick={() => goToSlide(i)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: i === index ? '#3ddc84' : 'rgba(156, 163, 175, 0.4)',
                cursor: 'pointer',
                padding: 0,
                minHeight: '10px'
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
      </div>

      {/* Back button */}
      {index > 0 && !isLastSlide && (
        <button
          onClick={prevNormal}
          style={{
            position: 'fixed',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'fit-content',
            padding: '8px 16px',
            fontSize: '14px',
            color: '#9ca3af',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            zIndex: 9999
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#d1d5db'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
        >
          ← Back
        </button>
      )}

      {/* Modals */}
      {douglassModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setDouglassModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src="/images/FredDoug-Power_Concedes_Nothing.jpg"
              alt="Frederick Douglass"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setDouglassModalOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {naderModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setNaderModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src="/images/RalphNader-500-Unstoppable_Change.jpg"
              alt="Ralph Nader"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setNaderModalOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// FILE: components/UnifiedPreHomepage.tsx