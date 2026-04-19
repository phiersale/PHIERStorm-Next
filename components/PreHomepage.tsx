'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'

interface PreHomepageProps {
  onGoToHomepage: () => void
  onGoToPetition: () => void
}

export default function PreHomepage({ onGoToHomepage, onGoToPetition }: PreHomepageProps) {
  const [currentSlide, setCurrentSlide] = useState(0) // 0 = breath, 1 = You Are Not Powerless

  // Keyboard: left/right arrows, Enter/Space to advance
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide()
      } else if (e.key === 'ArrowLeft' && currentSlide === 1) {
        prevSlide()
      } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'Space') {
        if (currentSlide === 0) {
          nextSlide()
        } else if (currentSlide === 1) {
          closeModalsAndContinue()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const nextSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(1)
    } else if (currentSlide === 1) {
      closeModalsAndContinue()
    }
  }

  const prevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(0)
    }
  }

  const closeModalsAndContinue = () => {
    onGoToHomepage()
  }

  // Skip button: go directly to homepage (no second modal)
  const skipToHomepage = () => {
    onGoToHomepage()
  }

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
    preventScrollOnSwipe: true,
  })

  // Breath modal (slide 0) with SKIP button
  const breathModal = (
    <motion.div
      key="breath"
      className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* SKIP button - top right */}
      <div className="absolute top-4 right-4">
        <button
          onClick={(e) => {
            e.stopPropagation()
            skipToHomepage()
          }}
          className="text-gray-500 text-sm underline hover:text-gray-300 transition"
        >
          SKIP
        </button>
      </div>

      <div className="text-center max-w-xl px-6 cursor-pointer" onClick={nextSlide}>
        <div className="flex justify-center mb-6">
          <Image
            src="/images/PHIERS_Logo.png"
            alt="PHIERS"
            width={80}
            height={80}
            className="opacity-90"
          />
        </div>
        <h2 className="text-white text-3xl md:text-4xl font-light mb-4 tracking-wide">Take a breath.</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          What you're about to see is simple.<br />
          But it changes how power actually works.
        </p>
        <p className="text-gray-500 text-sm mt-8">Swipe left → or click/tap</p>
      </div>
    </motion.div>
  )

  // "You Are Not Powerless" modal (slide 1) - no SKIP needed here
  const powerlessModal = (
    <motion.div
      key="powerless"
      className="fixed inset-0 bg-black z-[99999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-screen h-screen flex items-center justify-center cursor-pointer" onClick={closeModalsAndContinue}>
        <Image
          src="/images/You_Are_Not_Powerless.jpg"
          alt="YOU ARE NOT POWERLESS"
          width={1920}
          height={1080}
          className="w-full h-auto max-h-screen object-contain"
          priority
          onError={(e) => console.error('Powerless image failed to load')}
        />
        <p className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-sm">
          Swipe left → or tap anywhere to continue
        </p>
      </div>
    </motion.div>
  )

  return (
    <div {...swipeHandlers} style={{ touchAction: 'pan-y' }}>
      <AnimatePresence mode="wait">
        {currentSlide === 0 && breathModal}
        {currentSlide === 1 && powerlessModal}
      </AnimatePresence>
    </div>
  )
}