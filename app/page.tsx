// FILE: app/page.tsx
// VERSION: 3.0.0 (separate routes, no state machine)

'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PreHomepage from '@/components/PreHomepage'

export default function Page() {
  const router = useRouter()
  const [showEntryModal, setShowEntryModal] = useState(true)
  const modalRef = useRef<HTMLDivElement>(null)

  // Optional: remember that user has seen the modal (sessionStorage)
  useEffect(() => {
    const seen = sessionStorage.getItem('entrySeen')
    if (seen) {
      setShowEntryModal(false)
      // Go directly to slides (or /credibility? but we go to slides)
      // For now, we'll just hide modal and show PreHomepage immediately.
      // We'll handle that by not rendering the modal and rendering PreHomepage below.
    }
  }, [])

  const proceed = () => {
    setShowEntryModal(false)
    sessionStorage.setItem('entrySeen', '1')
    // No need to set stage – we just render PreHomepage directly
  }

  useEffect(() => {
    if (!showEntryModal) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') {
        e.preventDefault()
        proceed()
      }
    }

    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    if (modalRef.current) {
      modalRef.current.focus()
    }

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [showEntryModal])

  // When slides finish, go to /credibility
  const handleSlidesComplete = () => {
    window.location.href = '/credibility'
  }

  // When user clicks "Skip" inside PreHomepage, also go to /credibility
  const handleSkip = () => {
    window.location.href = '/credibility'
  }

  if (showEntryModal) {
    return (
      <AnimatePresence>
        {showEntryModal && (
          <motion.div
            ref={modalRef}
            id="entry-modal"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 bg-[#050b19] z-[99999] flex flex-col focus:outline-none cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={proceed}
          >
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
              <div className="text-center max-w-xl mx-auto">
                <h2 className="text-white text-4xl md:text-5xl font-light mb-3">Take a deep breath.</h2>
                <p className="text-gray-300 text-lg md:text-xl mb-1">What you’re about to learn is simple.</p>
                <p className="text-gray-300 text-lg md:text-xl mb-6">It changes how power actually works.</p>
                <div className="mt-8 mb-6 flex justify-center">
                  <Image
                    src="/images/You_Are_Not_Powerless.jpg"
                    alt="YOU ARE NOT POWERLESS"
                    width={350}
                    height={175}
                    sizes="(max-width: 768px) 90vw, 350px"
                    className="w-full max-w-[345px] h-auto"
                    priority
                  />
                </div>
                <p className="text-gray-300 text-base md:text-lg text-center mb-6">That’s the first thing to remember.</p>
                <p className="text-gray-500 text-sm mt-2">Click anywhere to continue</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  // Entry modal closed – show slides
  return (
    <PreHomepage
      onGoToHomepage={handleSlidesComplete}
      onGoToPetition={() => router.push('/petition')}
      onSkip={handleSkip}   // we need to add this prop to PreHomepage
    />
  )
}