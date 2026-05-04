// FILE: components/PreHomepage.tsx
// VERSION: 7.1 – refined accountability spacing + cold procedural replacement slide

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
  const [showSwipeHint, setShowSwipeHint] = useState(true)
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

  // Normal previous slide (used by swipe and keyboard)
  const prevNormal = useCallback(() => {
    if (isTransitioning) return
    if (index === 0) return
    goToSlide(index - 1)
  }, [isTransitioning, index, goToSlide])

  // Back button jumps to first image slide (index 0)
  const prevButton = useCallback(() => {
    if (isTransitioning) return
    if (index === 0) return
    goToSlide(0)
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

    // Helper to split a title into two lines if it contains ". " (period + space)
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
          <p className="text-3xl md:text-5xl font-bold text-green mb-6">
            A demand that has TEETH.
          </p>
          <div className="flex justify-center w-full">
            <img
              src="/images/ORGANIZE_Fish.jpg"
              alt="Organized fish – a demand with teeth"
              className="w-5/6 md:w-2/3 max-w-lg rounded-lg shadow-md"
            />
          </div>
        </div>
      )
    }

    if (slide.replacementLayout) {
      return (
        <div className="flex flex-col items-center text-center px-6 md:px-12 pt-0 pb-12">

          {/* Top Block — Title */}
          <div className="space-y-3 mb-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              If a representative refuses the district —
              <br />
              they’re replaced.
            </h2>
          </div>

          {/* Middle Block — Mechanism */}
          <div className="space-y-2 mb-12">
            <p className="text-xl md:text-2xl text-gray-200">Legally.</p>

            {/* FORCE GREEN */}
            <p className="text-xl md:text-2xl font-semibold" style={{ color: "#22c55e" }}>
              Before the next election.
            </p>

            <p className="text-xl md:text-2xl text-gray-200">That’s how accountability works.</p>
          </div>

          {/* Bottom Block — Clarifier */}
          <div className="space-y-1 opacity-80">
            <p className="text-base md:text-lg text-gray-400">No heat. No threats.</p>
            <p className="text-base md:text-lg text-gray-400">Just process.</p>
          </div>

        </div>
      )
    }

    if (slide.accountabilityLayout) {
      return (
        <div className="flex flex-col items-center px-4 sm:px-6 text-center max-w-3xl mx-auto">
          {/* Beat 1 — Thesis */}
          <p className="text-3xl md:text-5xl font-bold text-white -mt-4 mb-4">
            A standard. Not a threat.
          </p>

          {/* Beat 2 — Indictment */}
          <p className="text-base md:text-lg text-gray-300 mb-1">If you know the war is crushing your constituents —</p>
          <p className="text-base md:text-lg text-gray-300 mb-1">and you do nothing —</p>
          <p className="text-base md:text-lg text-white font-semibold mb-3">you have made a choice.</p>

          {/* Beat 3 — Accountability sequence */}
          <p className="text-base md:text-lg text-gray-300 mb-1">We investigate and analyze.</p>
          <p className="text-base md:text-lg text-gray-300 mb-1">We publish what we find.</p>
          <p className="text-base md:text-lg text-gray-300 mb-4">We organize around it.</p>

          {/* Beat 4 — Democratic landing */}
          <p className="text-base md:text-lg text-gray-300 mb-2">And we push for resignations and special elections if we have to.</p>
          <p className="text-lg md:text-xl font-bold text-green mb-1">Legally and democratically.</p>
          <p className="text-lg md:text-xl font-bold text-green">That's the standard.</p>
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
            <div className="grid grid-cols-6 gap-3 sm:gap-4 justify-items-center mx-auto w-full min-w-full" style={{ gridAutoFlow: 'row', display: 'grid' }}>
              {items.map((item: { letter: string; word: string }, idx: number) => (
                <div key={idx} className="flex flex-col items-center space-y-3 sm:space-y-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green whitespace-nowrap drop-shadow-[0_0_8px_rgba(61,220,132,0.6)]">
                    {item.letter}
                  </span>
                  <span className="text-[11px] sm:text-[13px] md:text-sm font-bold text-gray-200 uppercase tracking-wide">
                    {item.letter === 'R' ? 'REPS' : item.word}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm md:text-base font-normal text-gray-500 text-center px-2 mt-6 mb-6">
            {slide.punchLine}
          </p>
        </div>
      )
    }

    if (slide.type === "image" && slide.imageSrc) {
      const isDouglassSlide = slide.imageSrc.includes('FredDoug');
      const isPowerlessSlide = slide.imageSrc.includes('You_Are_Not_Powerless');
      const isOrganizeFish = slide.imageSrc.includes('ORGANIZE_Fish') || slide.imageSrc.includes('organize_fish');
      const handleImageClick = () => {
        if (isDouglassSlide) setDouglassModalOpen(true);
      };
      let widthClass = 'w-[57%] md:w-[47%]';
      if (isPowerlessSlide) {
        widthClass = 'w-[85%] md:w-[70%]';
      }
      if (isOrganizeFish) {
        widthClass = 'w-[80%] md:w-[60%]';
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
              onError={(e) => {
                // Fallback for fish image if it fails to load
                if (isOrganizeFish) {
                  (e.target as HTMLImageElement).src = '/images/PHIERS_Logo.png';
                  console.warn('ORGANIZE_Fish.jpg failed to load, using fallback logo');
                }
              }}
            />
          </div>
        </div>
      )
    }

    if (!slide.body) return null

    const greenLineIndices = slide.greenLines || []

    // Special handling for slide 4 (no title, core principle)
    const isCorePrincipleSlide = slide.title === "" && slide.body.length > 0 && slide.body[0].includes("Outrage doesn’t create change.")
    if (isCorePrincipleSlide) {
      return (
        <div className="space-y-3 md:space-y-4">
          {slide.body.map((line, i) => {
            const isGreen = greenLineIndices.includes(i)
            // First line: large, bold, white/gray (not green)
            if (i === 0) {
              return (
                <p key={i} className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                  {line}
                </p>
              )
            }
            // Subsequent lines: normal size, with green highlighting where needed
            const baseClass = "text-base md:text-lg leading-relaxed"
            const colorClass = isGreen ? "text-green font-bold" : "text-gray-300"
            return (
              <p key={i} className={`${baseClass} ${colorClass}`}>
                {line}
              </p>
            )
          })}
        </div>
      )
    }

    if (isLargeFormatSlide) {
      // Special layout for slide 1: "This takes minutes. The impact is leverage."
      const isPunchSlide = slide.body && 
        slide.body.length === 1 &&
        slide.body[0] === "This takes minutes. The impact is leverage."

      if (isPunchSlide) {
        return (
          <div className="flex flex-col items-center px-4 sm:px-6 text-center max-w-md sm:max-w-lg mx-auto">
            <p className="text-xl md:text-2xl font-bold text-green mb-2">
              This takes minutes.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white">
              The impact is leverage.
            </p>
          </div>
        )
      }

      // Special tight layout for the replacement + democracy slide (index 12)
      const isReplacementSlide = slide.body && 
        slide.body.length === 4 &&
        slide.body[0] === "We replace them. Legally." &&
        slide.body[1] === "Before the next election." &&
        slide.body[2] === "That's not a threat." &&
        slide.body[3] === "That's democracy working the way it was designed to."

      if (isReplacementSlide) {
        return (
          <div className="flex flex-col items-center px-4 sm:px-6 text-center max-w-md sm:max-w-lg mx-auto">
            <p className="text-lg md:text-xl text-gray-300 mb-3">
              We replace them. Legally.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white mb-2">
              Before the next election.
            </p>
            <p className="text-xl md:text-2xl font-bold text-green mb-5">
              That's not a threat.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-snug mb-1">
              That's democracy working
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-snug">
              the way it was designed to.
            </p>
          </div>
        )
      }

      // Original large format rendering for all other large-format slides
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
    if (slide.body.length >= 4 && slide.title === "The Mechanism") {
      wrapperClass = "space-y-4 md:space-y-5"
    } else if (slide.isFinalSlide) {
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
  // Use a different layout only for the very tall slide (index 12)
  if (index === 12) {
    return (
      <div key={`slide-12-${index}`} className="min-h-screen bg-[#050b19] text-white flex flex-col">
        {/* standard layout – same as before, but footer can move naturally */}
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
          className={`flex-1 overflow-y-auto flex items-start justify-center ${slide.imageSrc && slide.imageSrc.includes('FredDoug') ? 'px-0 md:px-12 pt-6 md:pt-8 pb-8' : 'px-6 md:px-12 pt-3 pb-2'}`}
          style={{ cursor: !isLastSlide && !isTransitioning ? 'pointer' : 'default' }}
          onClick={!isLastSlide && !isTransitioning ? next : undefined}
          onKeyDown={!isLastSlide && !isTransitioning ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); } } : undefined}
          role="button"
          tabIndex={!isLastSlide ? 0 : -1}
        >
          <div className="w-full mx-auto max-w-full">
            <div className="text-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: slide.title === "" && !isLargeFormatSlide ? 0.8 : (slide.isFinalSlide ? 1.4 : 1.2),
                    ease: "easeOut"
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="relative -mt-2"
                >
                  {renderTitle()}
                  {renderBody()}
                  {index === 1 && showSwipeHint && (
                    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-full pointer-events-none animate-fadeOut z-50">
                      ← Swipe or press → for next slide
                    </div>
                  )}
                  {isLastSlide && (
                    <div className="mt-6">
                      {/* no instructional text */}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="shrink-0 flex flex-col items-center gap-2 py-2 border-t border-gray-800/50">
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

          {/* Dimmed logo for specific slides - appears just above navigation dots */}
          {[1,2,5,7,8,10].includes(index) && (
            <div className="my-1 pointer-events-none">
              <Image
                src="/images/PHIERS_Logo.png"
                alt="PHIERS"
                width={80}
                height={80}
                className="opacity-30 w-16 md:w-20 mx-auto"
              />
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

        {/* Modal for Douglass image */}
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
    );
  }

  // For all other slides (1–11, 13–14) we use a fixed footer layout
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

      {/* CLICKABLE AREA: entire flex container */}
      <div
        className={`flex-1 overflow-y-auto flex items-start justify-center ${slide.imageSrc && slide.imageSrc.includes('FredDoug') ? 'px-0 md:px-12 pt-6 md:pt-8 pb-8' : 'px-6 md:px-12 pt-4 pb-2'}`}
        style={{ cursor: !isLastSlide && !isTransitioning ? 'pointer' : 'default' }}
        onClick={!isLastSlide && !isTransitioning ? next : undefined}
        onKeyDown={!isLastSlide && !isTransitioning ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); } } : undefined}
        role="button"
        tabIndex={!isLastSlide ? 0 : -1}
      >
        <div className="w-full mx-auto max-w-full">
          <div className="text-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: slide.title === "" && !isLargeFormatSlide ? 0.8 : (slide.isFinalSlide ? 1.4 : 1.2),
                  ease: "easeOut"
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: slide.imageSrc?.includes('FredDoug') ? 0.1 : 0.2, ease: "easeOut" }
                }}
                className="relative"
              >
                {renderTitle()}
                {renderBody()}
                {index === 1 && showSwipeHint && (
                  <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-full pointer-events-none animate-fadeOut z-50">
                    ← Swipe or press → for next slide
                  </div>
                )}
                {isLastSlide && (
                  <div className="mt-6">
                    {/* no instructional text */}
                  </div>
                )}

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
            <button
              onClick={onGoToPetition}
              className="px-8 md:px-10 py-3 md:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold tracking-wide rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              ✍ BE COUNTED
            </button>
            <button
              onClick={onGoToHomepage}
              className="border border-green/40 text-green text-sm md:text-base font-semibold py-2 px-4 rounded-md hover:bg-green/10 transition"
            >
              → SEE WHAT THE EXPERTS SAY
            </button>
          </div>
        )}

        {/* Dimmed logo for specific slides - appears just above navigation dots */}
        <div className="my-1 pointer-events-none">
          <Image
            src="/images/PHIERS_Logo.png"
            alt=""
            width={80}
            height={80}
            className={`opacity-${[1,2,5,7,8,10].includes(index) ? '30' : '0'} w-16 md:w-20 mx-auto transition-opacity duration-300`}
          />
        </div>

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

      {/* Modal for Douglass image */}
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

// FILE: components/PreHomepage.tsx