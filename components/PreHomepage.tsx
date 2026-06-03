// FILE: components/PreHomepage.tsx
// VERSION: 8.6 – Perfect vertical centering for Slide 0

'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import slides from './slides'

type Props = {
  onGoToHomepage: () => void
  skipFirstImageSlide?: boolean
  onBackToReading?: () => void
}

const SWIPE_THRESHOLD = 30
const TRANSITION_MS = 400

export default function PreHomepage({
  onGoToHomepage,
  skipFirstImageSlide = false,
  onBackToReading
}: Props) {
  const [index, setIndex] = useState(skipFirstImageSlide ? 1 : 0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [douglassModalOpen, setDouglassModalOpen] = useState(false)
  const [showNavControls, setShowNavControls] = useState(true)
  const [topBarOpacity, setTopBarOpacity] = useState(1)
  const [showSwipeHint, setShowSwipeHint] = useState(true)
  const [navVisible, setNavVisible] = useState(false)
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

  useEffect(() => {
    const timer = setTimeout(() => setShowSwipeHint(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setTopBarOpacity(index <= 3 ? 1 : 0.4)
  }, [index])

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
    if (index >= slides.length - 1) {
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

  const renderTitle = () => {
    if (slide.customLayout) return null
    if (!slide.title) return null

    const splitTitle = (text: string) => {
      const periodSpaceIndex = text.indexOf('. ')
      if (periodSpaceIndex !== -1 && periodSpaceIndex < text.length - 2) {
        const firstPart = text.substring(0, periodSpaceIndex + 1)
        const secondPart = text.substring(periodSpaceIndex + 2)
        return <>{firstPart}<br />{secondPart}</>
      }
      return text
    }

    const renderedTitle = splitTitle(slide.title)

    // For final slide, show logo at top
    if (slide.isFinalSlide) {
      return (
        <>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-4 mb-4"
          >
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={120}
              height={120}
              className="w-24 sm:w-32 md:w-40 h-auto mx-auto drop-shadow-[0_0_15px_rgba(61,220,132,0.4)]"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold leading-tight mb-4"
          >
            {renderedTitle}
          </motion.h1>
        </>
      )
    }
    if (slide.title === "PHIERS") {
      return <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green">{renderedTitle}</h1>
    }
    if (slide.titleGreen) {
      return <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-green">{renderedTitle}</h1>
    }
    if (slide.title.includes("Frederick Douglass")) {
      return <h1 className="text-xl md:text-2xl font-bold leading-tight mb-2">{renderedTitle}</h1>
    }
    return <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">{renderedTitle}</h1>
  }

  const renderBody = () => {
    if (slide.teethImage) {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex justify-center w-full mb-4">
            <img
              src="/images/ORGANIZE_Fish.jpg"
              alt="Organized fish – a demand with teeth"
              className="w-2/3 md:w-1/2 max-w-md rounded-lg shadow-md"
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-green mt-2"
          >
            A demand that has TEETH.
          </motion.p>
        </motion.div>
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

    if (slide.customTextLayout) {
      const items = slide.body
      return (
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4">
          {items.map((item: any, idx: number) => {
            if (item.type === 'spacer') {
              return <div key={idx} style={{ height: item.height || 16 }} />
            }
            if (item.text) {
              let textColor = 'text-white'
              if (item.green) textColor = 'text-green'
              
              let textSize = 'text-lg md:text-xl'
              if (item.large) textSize = 'text-4xl md:text-5xl'
              
              let fontWeight = item.bold ? 'font-bold' : 'font-normal'
              
              let className = item.className || `${textSize} ${textColor} ${fontWeight} leading-tight`
              
              return (
                <p
                  key={idx}
                  className={className}
                >
                  {item.text}
                </p>
              )
            }
            if (item === "" || item === " ") return <div key={idx} className="h-0" />
            if (typeof item === 'string') return <div key={idx} className="h-4" />
            return null
          })}
        </div>
      )
    }

    if (slide.compactConsequence) {
      return (
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4">
          <p className="text-gray-300 text-2xl md:text-3xl mb-3">Not noise.</p>
          <p className="text-gray-300 text-2xl md:text-3xl mb-4">Not outrage.</p>
          <p className="text-green font-bold text-4xl md:text-5xl mt-3 mb-3">Leverage.</p>
          <p className="text-green font-bold text-2xl md:text-3xl">Leverage = Consequences = Teeth</p>
        </div>
      )
    }

    if (slide.customLayout) {
      const items = slide.body
      
      // Check if this is the text-based custom layout (has type properties)
      if (items.length > 0 && typeof items[0] === 'object' && 'type' in items[0]) {
        return (
          <div className="flex flex-col items-center text-center max-w-md mx-auto px-6 w-full custom-layout-container">
            {items.map((item: any, idx: number) => {
              if (item.type === 'logo') {
                const logoClass = item.className || ''
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`mb-2 ${logoClass}`}
                  >
                    <img
                      src="/images/PHIERS-Pause.png"
                      alt="PHIERS Pause"
                      className="w-24 md:w-32 object-contain mx-auto"
                    />
                  </motion.div>
                )
              }
              if (item.type === 'spacer') {
                return <div key={idx} style={{ height: item.height || 16 }} />
              }
              if (item.type === 'divider') {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: 0.55 }}
                    className={item.className || "w-12 h-px bg-green-400/40 mx-auto my-2"}
                  />
                )
              }
              if (item.type === 'text') {
                // Use className directly from slide if provided
                if (item.className) {
                  const content = item.content
                  const hasNewlines = content && content.includes('\n')
                  
                  // Determine delay based on content - smooth cinematic reveal
                  let delay = 0
                  if (content === "PAUSE.") delay = 0.6
                  else if (content === "Things are changing fast.") delay = 1.4
                  else if (content === "Before reacting,") delay = 2.2
                  else if (content === "choose a response") delay = 2.7
                  else if (content === "that actually works.") delay = 3.2
                  else delay = 0.4 // divider or other
                  
                  if (hasNewlines) {
                    // Calculate delay based on content (for the multi-line block)
                    let blockDelay = 0
                    if (content.includes("Before reacting")) blockDelay = 2.3
                    else blockDelay = delay
                    
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, maskImage: "linear-gradient(to bottom, transparent 0%, black 0%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 0%)" }}
                        animate={{ opacity: 1, maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100%)" }}
                        transition={{ duration: 1.2, delay: blockDelay, ease: [0.25, 0.1, 0.25, 1] }}
                        className={item.className}
                      >
                        {content.split('\n').map((line: string, lineIdx: number) => (
                          <div key={lineIdx}>{line}</div>
                        ))}
                      </motion.div>
                    )
                  }
                  return (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
                      className={item.className}
                    >
                      {content}
                    </motion.p>
                  )
                }
                
                // Fallback for slides without className
                let textColor = 'text-gray-300'
                if (item.green) textColor = 'text-green'
                if (item.italic) textColor = 'text-gray-400'
                
                let fontWeight = item.bold ? 'font-bold' : 'font-normal'
                let fontStyle = item.italic ? 'italic' : ''
                
                let textSize = 'text-base md:text-lg'
                if (item.large) textSize = 'text-3xl md:text-4xl font-semibold'
                
                const content = item.content
                const hasNewlines = content && content.includes('\n')
                
                let delay = 0
                if (content === "PAUSE.") delay = 0.6
                else if (content === "Things are changing fast.") delay = 1.4
                else if (content === "Before reacting,") delay = 2.2
                else if (content === "choose a response") delay = 2.7
                else if (content === "that actually works.") delay = 3.2
                
                if (hasNewlines) {
                  // Calculate delay based on content (for the multi-line block)
                  let blockDelay = 0
                  if (content.includes("Before reacting")) blockDelay = 2.3
                  else blockDelay = delay
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, maskImage: "linear-gradient(to bottom, transparent 0%, black 0%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 0%)" }}
                      animate={{ opacity: 1, maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100%)" }}
                      transition={{ duration: 1.2, delay: blockDelay, ease: [0.25, 0.1, 0.25, 1] }}
                      className={`${textSize} ${textColor} ${fontWeight} ${fontStyle} leading-tight w-full text-center`}
                    >
                      {content.split('\n').map((line: string, lineIdx: number) => (
                        <div key={lineIdx}>{line}</div>
                      ))}
                    </motion.div>
                  )
                }
                
                return (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`${textSize} ${textColor} ${fontWeight} ${fontStyle} leading-tight w-full text-center`}
                  >
                    {content}
                  </motion.p>
                )
              }
              return null
            })}
          </div>
        )
      }
      
      // Original PHIERS acronym layout
      const acronymItems = slide.body as { letter: string; word: string }[]
      return (
        <div className="flex flex-col items-center space-y-4 pb-6 pt-4 md:pt-0 -mt-4 md:-mt-12">
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
              {acronymItems.map((item: { letter: string; word: string }, idx: number) => (
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
      const isDouglassSlide = slide.imageSrc.includes('FredDoug')
      const isPowerlessSlide = slide.imageSrc.includes('You_Are_Not_Powerless')
      const handleImageClick = () => {
        if (isDouglassSlide) setDouglassModalOpen(true)
      }

      // Special handling for slide 0 (You Are Not Powerless)
      if (isPowerlessSlide || index === 0) {
        const imageSrc = index === 0 ? "/images/You_Are_Not_Powerless.jpg" : slide.imageSrc
        return (
          <div className="w-full flex flex-col items-center justify-center px-4 pt-0 pb-2 sm:pb-4 -mt-8 md:-mt-12">
            <div onClick={handleImageClick} className="w-full">
              <Image
                src={imageSrc}
                alt="You Are Not Powerless"
                width={1200}
                height={800}
                className="w-[70%] md:w-[50%] max-w-xl h-auto object-contain mx-auto"
                priority
                onError={(e) => console.error('Image failed to load:', imageSrc)}
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">Swipe to continue</p>
              <div className="mt-2 text-gray-500 text-xs">← →</div>
            </div>
          </div>
        )
      }

      // Other image slides (Douglass, etc.)
      let widthClass = 'w-[57%] md:w-[47%]'
      if (index === 6) {
        widthClass = 'w-[85%] md:w-[70%]'
      }
      if (index === 9) {
        widthClass = 'w-[90%] md:w-[75%]'
      }
      return (
        <div className="w-full flex flex-col items-center">
          <div onClick={handleImageClick} className={isDouglassSlide ? 'cursor-pointer w-full mb-8' : ''}>
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
          {index === 9 && slide.caption && (
            <p className={slide.captionClassName || "text-center text-red-400 text-lg md:text-xl font-medium mt-6 tracking-tight max-w-3xl mx-auto"}>
              {slide.caption}
            </p>
          )}
        </div>
      )
    }

    if (!slide.body) return null

    const greenLineIndices = slide.greenLines || []

    if (isLargeFormatSlide) {
      const isPunchSlide =
        slide.body &&
        slide.body.length === 1 &&
        slide.body[0] === "A few minutes. Enough to make Congress listen."

      const isPunchSlideByIndex = index === 1
      if (isPunchSlideByIndex) {
        return (
          <div className="flex flex-col items-center px-4 sm:px-6 text-center max-w-md sm:max-w-lg mx-auto space-y-0 sm:space-y-1 pt-4">
            <p className="font-bold text-green" style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)' }}>
              A few minutes.
            </p>
            <p className="font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)' }}>
              Enough to make
            </p>
            <p className="font-bold text-green" style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)' }}>
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

    let wrapperClass = "space-y-0.5 md:space-y-1"
    if (slide.isFinalSlide) {
      wrapperClass = "space-y-0.5 md:space-y-1 mt-0 md:mt-0"
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className={wrapperClass}
      >
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
        
        {/* Button only on final slide */}
        {slide.isFinalSlide && (
          <>
            <div className="h-12"></div>
            <div className="mb-4">
              <button
                onClick={onGoToHomepage}
                className="w-full max-w-xs mx-auto block border border-green/40 text-green text-sm md:text-base font-semibold py-3 px-4 rounded-md hover:bg-green/10 transition"
              >
                → SEE WHAT THE EXPERTS SAY
              </button>
            </div>
          </>
        )}
      </motion.div>
    )
  }

  return (
    <div className="h-screen max-h-screen bg-[#050b19] text-white flex flex-col overflow-hidden">

      {/* Top bar */}
      <div
        className="flex justify-between items-center pr-6 pl-6 pt-2 pb-1 shrink-0 z-10 transition-opacity duration-300"
        style={{ opacity: 0.35 }}
      >
        {onBackToReading && (
          <button onClick={onBackToReading} className="text-gray-500 text-sm underline hover:text-gray-300">
            ← Back to start
          </button>
        )}
        <button onClick={onGoToHomepage} className="text-gray-500 text-sm underline hover:text-gray-300">
          Skip →
        </button>
      </div>

      {/* MAIN SLIDE AREA */}
      <div
        className={`flex-1 overflow-y-auto touch-auto flex justify-center items-start ${
          slide.imageSrc && slide.imageSrc.includes('FredDoug')
            ? 'px-0 md:px-12 pt-2 md:pt-4 pb-2'
            : index === 8 || index === 1
            ? 'px-6 md:px-12 pt-0 pb-0'
            : 'px-6 md:px-12 pt-2 pb-0'
        } ${isLastSlide ? 'relative' : ''}`}
        onClick={!isTransitioning && !isLastSlide ? next : undefined}
        onKeyDown={!isTransitioning && !isLastSlide ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); } } : undefined}
        style={{ cursor: !isTransitioning && !isLastSlide ? 'pointer' : 'default' }}
        role="button"
        tabIndex={!isTransitioning && !isLastSlide ? 0 : -1}
      >
        <div className="w-full mx-auto max-w-full">
          <div className="text-center w-full">
            <AnimatePresence mode="popLayout">
              {index === 0 ? (
                <div key={index} className="relative">
                  <div
                    className={`
                      flex flex-col items-center text-center w-full
                      pt-2 md:pt-4
                    `}
                  >
                    {renderTitle()}
                    {renderBody()}
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
                      ${
                        index === 11
                        ? "-mt-4 md:-mt-6 pt-6 md:pt-8"
                        : index === 12
                        ? "-mt-8 md:-mt-12 pt-6 md:pt-8"
                        : "pt-6 md:pt-8"
                      }
                    `}
                  >
                    {renderTitle()}
                    {renderBody()}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom nav - Nav dots only */}
      <div
        className={`absolute left-0 right-0 flex flex-col items-center pointer-events-none ${
          index === 11 ? "bottom-6" : "bottom-4"
        } ${
          navVisible ? "fade-in-nav" : "fade-out-nav"
        }`}
        style={{ pointerEvents: navVisible ? 'auto' : 'none' }}
      >
        {/* Nav dots */}
        <div className="flex space-x-2 pointer-events-auto items-center">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: i === index ? 'rgba(61, 220, 132, 0.8)' : 'rgba(156, 163, 175, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            />
          ))}
        </div>

        {/* Tap hint - only on slide 0 */}
        {index === 0 && (
          <div className="text-xs text-gray-500 opacity-60 pointer-events-none mt-2">
            tap anywhere
          </div>
        )}
      </div>

      {/* Back button - independent fixed position */}
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

      {/* Button moved inside slide content - see renderBody for final slide */}

    </div>
  )
}

// FILE: components/PreHomepage.tsx