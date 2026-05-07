// FILE: components/PreHomepage.tsx
// VERSION: 8.1 – mobile‑optimized for 10‑slide deck

'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import slides from './slides'

type Props = {
  onGoToHomepage: () => void
  onGoToPetition: () => void
  skipFirstImageSlide?: boolean
  onBackToReading?: () => void
}

const SWIPE_THRESHOLD = 50
const TRANSITION_MS = 400

export default function PreHomepage({ 
  onGoToHomepage, 
  onGoToPetition, 
  skipFirstImageSlide = false,
  onBackToReading
}: Props) {
  const [index, setIndex] = useState(skipFirstImageSlide ? 1 : 0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [douglassModalOpen, setDouglassModalOpen] = useState(false)
  const [showNavControls, setShowNavControls] = useState(true)
  const [topBarOpacity, setTopBarOpacity] = useState(1)
  const lastScrollY = useRef(0)
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

  // Hide bottom navigation controls on scroll down, show on scroll up or near top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100 && currentScrollY > lastScrollY.current) {
        setShowNavControls(false)
      } else if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        setShowNavControls(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dim top bar after first 3 slides
  useEffect(() => {
    setTopBarOpacity(index <= 3 ? 1 : 0.4)
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
    if (index >= slides.length - 1) {
      onGoToHomepage()
      return
    }
    goToSlide(index + 1)
  }, [isTransitioning, index, onGoToHomepage, goToSlide])

  const prevNormal = useCallback(() => {
    if (isTransitioning) return
    if (index === 0) return
    goToSlide(index - 1)
  }, [isTransitioning, index, goToSlide])

  // Close Douglass modal with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && douglassModalOpen) {
        setDouglassModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [douglassModalOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevNormal()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prevNormal])

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

  const slide = slides[index]
  const isLastSlide = index === slides.length - 1
  const isLargeFormatSlide = slide.largeFormat === true

  // ===== TITLE RENDERING =====
  const renderTitle = () => {
    if (slide.customLayout) return null
    if (!slide.title) return null

    const splitTitle = (text: string) => {
      const periodSpaceIndex = text.indexOf('. ');
      if (periodSpaceIndex !== -1 && periodSpaceIndex < text.length - 2) {
        const firstPart = text.substring(0, periodSpaceIndex + 1);
        const secondPart = text.substring(periodSpaceIndex + 2);
        return (
          <>
            {firstPart}<br />
            {secondPart}
          </>
        );
      }
      return text;
    };

    const renderedTitle = splitTitle(slide.title);

    if (slide.title === "PHIERS") {
      return <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green">{renderedTitle}</h1>
    }
    if (slide.title.includes("Frederick Douglass")) {
      return <h1 className="text-xl md:text-2xl font-bold leading-tight mb-2">{renderedTitle}</h1>
    }
    if (slide.isFinalSlide) {
      return <h1 className="text-sm sm:text-lg md:text-3xl font-bold leading-tight mb-4 pt-2">{renderedTitle}</h1>
    }
    return <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">{renderedTitle}</h1>
  }

  // ===== BODY RENDERING =====
  const renderBody = () => {
    if (slide.teethImage) {
      return (
        <div className="flex flex-col items-center text-center">
          <p className="text-3xl md:text-5xl font-bold text-green mb-2">
            A demand that has TEETH.
          </p>
          <div className="flex justify-center w-full">
            <img
              src="/images/ORGANIZE_Fish.jpg"
              alt="Organized fish – a demand with teeth"
              className="w-2/3 md:w-1/2 max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>
      )
    }

    if (slide.replacementLayout) {
      return (
        <div className="flex flex-col items-center text-center px-6 md:px-12 pt-0 pb-12">
          <div className="space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              If they refuse the meeting,
              <br />
              they lose the seat.
            </h2>
          </div>
          <div className="space-y-1 mb-6">
            <p className="text-base md:text-lg text-gray-200">Legally.</p>
            <p className="text-base md:text-lg font-semibold" style={{ color: "#22c55e" }}>
              Before the next election.
            </p>
            <p className="text-base md:text-lg text-gray-200">No heat. No threats.</p>
            <p className="text-base md:text-lg text-gray-200">Just accountability.</p>
          </div>
        </div>
      )
    }

    if (slide.customLayout) {
      const items = slide.body
      return (
        <div className="flex flex-col items-center space-y-4 pb-6 pt-0">
          <div className="mb-2">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={120}
              height={120}
              className="w-24 sm:w-32 md:w-40 h-auto mx-auto drop-shadow-[0_0_15px_rgba(61,220,132,0.4)]"
              priority
            />
          </div>
          <div className="w-full px-2 sm:px-6">
            <div className="grid grid-cols-6 gap-1 sm:gap-2 justify-items-center mx-auto w-full min-w-full">
              {items.map((item: { letter: string; word: string }, idx: number) => (
                <div key={idx} className="flex flex-col items-center space-y-1 sm:space-y-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green whitespace-nowrap drop-shadow-[0_0_8px_rgba(61,220,132,0.6)]">
                    {item.letter}
                  </span>
                  <span className="text-[10px] sm:text-[12px] md:text-sm font-bold text-gray-200 uppercase tracking-wide">
                    {item.letter === 'R' ? 'REPS' : item.word}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {slide.punchLine && (
            <>
              <div style={{ height: '1.5rem' }}></div>
              <div className="w-full">
                <p className="text-xs md:text-sm font-normal text-gray-500 text-center px-2">
                  {slide.punchLine}
                </p>
              </div>
            </>
          )}
        </div>
      )
    }

    if (slide.type === "image" && slide.imageSrc) {
      const isDouglassSlide = slide.imageSrc.includes('FredDoug');
      const isPowerlessSlide = slide.imageSrc.includes('You_Are_Not_Powerless');
      const handleImageClick = () => {
        if (isDouglassSlide) setDouglassModalOpen(true);
      };
      let widthClass = 'w-[57%] md:w-[47%]';
      if (isPowerlessSlide) {
        widthClass = 'w-[85%] md:w-[70%]';
      }
      return (
        <div className="w-full flex justify-center">
          <div onClick={handleImageClick} className={`${isDouglassSlide ? 'cursor-pointer w-full mb-8' : ''}`}>
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt || "Slide image"}
              width={1200}
              height={800}
              className={`mx-auto object-contain ${isDouglassSlide ? 'w-[70%] md:w-[50%]' : widthClass}`}
              priority
              onError={(e) => console.error('Image failed to load:', slide.imageSrc)}
            />
          </div>
        </div>
      )
    }

    if (!slide.body) return null

    const greenLineIndices = slide.greenLines || []

    if (isLargeFormatSlide) {
      const isPunchSlide = slide.body &&
        slide.body.length === 1 &&
        slide.body[0] === "A few minutes. Enough to make Congress listen."

      if (isPunchSlide) {
        return (
          <div className="flex flex-col items-center px-4 sm:px-6 text-center max-w-md sm:max-w-lg mx-auto space-y-1 md:space-y-2">
            <p className="text-3xl md:text-5xl font-bold text-green">
              A few minutes.
            </p>
            <p className="text-3xl md:text-5xl font-bold text-white">
              Enough to make
            </p>
            <p className="text-3xl md:text-5xl font-bold text-green">
              Congress listen.
            </p>
          </div>
        )
      }

      const largeBodyClass = "text-3xl md:text-5xl font-semibold tracking-tight"
      const wrapperClass = "space-y-4 md:space-y-6"
      return (
        <div className={wrapperClass}>
          {slide.body.map((line, i) => {
            const isGreen = greenLineIndices.includes(i)
            const color = isGreen ? "text-green" : "text-white"
            return (
              <p key={i} className={`${largeBodyClass} ${color}`}>
                {line}
              </p>
            )
          })}
        </div>
      )
    }

    const grayClass = "text-gray-300 text-sm md:text-base leading-relaxed"
    const greenClass = "text-green font-bold text-sm md:text-base leading-relaxed"

    let wrapperClass = "space-y-3 md:space-y-4"
    if (slide.isFinalSlide) {
      wrapperClass = "space-y-1 md:space-y-2 mt-0 md:mt-0"
    }

    return (
      <div className={wrapperClass}>
        {slide.body.map((line, i) => {
          const isGreen = greenLineIndices.includes(i)
          let greenColorClass = "text-green"
          if (slide.isFinalSlide && isGreen) {
            if (i === 0) greenColorClass = "text-green-400"
            else if (i === 1) greenColorClass = "text-green-500"
            else if (i === 2) greenColorClass = "text-green-600"
          }
          if (isGreen) {
            return (
              <p key={i} className={`${greenClass} ${greenColorClass}`}>
                {line}
              </p>
            )
          }
          return (
            <p key={i} className={grayClass}>
              {line}
            </p>
          )
        })}
      </div>
    )
  }

  // ===== MAIN RETURN =====
  return (
    <div className="min-h-screen bg-[#050b19] text-white flex flex-col">
      <div
        className="flex justify-between items-center pr-6 pl-6 pt-4 pb-2 shrink-0 z-10 transition-opacity duration-300"
        style={{ opacity: topBarOpacity }}
      >
        {onBackToReading && (
          <button onClick={onBackToReading} className="text-gray-500 text-sm underline hover:text-gray-300">
            ← Back
          </button>
        )}
        <button onClick={onGoToHomepage} className="text-gray-500 text-sm underline hover:text-gray-300">
          Skip →
        </button>
      </div>

      <div
        className={`flex-1 min-h-[65vh] overflow-y-auto flex items-start justify-center ${slide.imageSrc && slide.imageSrc.includes('FredDoug') ? 'px-0 md:px-12 pt-6 md:pt-8 pb-8' : index === 8 || index === 1 ? 'px-6 md:px-12 pt-0 pb-2' : 'px-6 md:px-12 pt-4 pb-2'}`}
        style={{ cursor: !isLastSlide && !isTransitioning ? 'pointer' : 'default' }}
        onClick={!isLastSlide && !isTransitioning ? next : undefined}
        onKeyDown={!isLastSlide && !isTransitioning ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); } } : undefined}
        role="button"
        tabIndex={!isLastSlide ? 0 : -1}
      >
        <div className="w-full mx-auto max-w-full">
          <div className="text-center w-full">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {renderTitle()}
                {renderBody()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div
        className={`shrink-0 flex flex-col items-center gap-2 py-2 border-t border-gray-800/50 transition-opacity duration-300 ${
          showNavControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {isLastSlide && (
          <div className="flex flex-col gap-2 w-full max-w-xs mx-auto mb-2">
            <button onClick={onGoToPetition} className="px-8 md:px-10 py-3 md:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold tracking-wide rounded-lg shadow-md hover:shadow-lg transition duration-200">
              ✍ BE COUNTED
            </button>
            <button onClick={onGoToHomepage} className="border border-green/40 text-green text-sm md:text-base font-semibold py-2 px-4 rounded-md hover:bg-green/10 transition">
              → SEE WHAT THE EXPERTS SAY
            </button>
          </div>
        )}

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToSlide(i); } }}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: i === index ? 'rgba(61, 220, 132, 0.7)' : 'rgba(156, 163, 175, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  margin: '0 3px',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (i !== index) e.currentTarget.style.backgroundColor = 'rgba(156, 163, 175, 0.7)';
                }}
                onMouseLeave={(e) => {
                  if (i !== index) e.currentTarget.style.backgroundColor = 'rgba(156, 163, 175, 0.5)';
                }}
              />
            ))}
          </div>
        </div>
        <p className="text-gray-500 text-xs">{index + 1} / {slides.length}</p>
      </div>

      <AnimatePresence>
        {douglassModalOpen && slide.imageSrc && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDouglassModalOpen(false)}
            aria-hidden="true"
          >
            <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setDouglassModalOpen(false)}
                className="absolute -top-10 right-0 text-white text-3xl cursor-pointer hover:text-green transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
              <img
                src={slide.imageSrc}
                alt="Frederick Douglass quote – enlarged"
                className="w-full h-auto object-contain rounded-xl"
                onError={(e) => console.error('Modal image failed to load:', slide.imageSrc)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}