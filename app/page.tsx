// FILE: app/page.tsx
// VERSION: 1.6.0 (added credibility stage between slides and main)

'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PreHomepage from '@/components/PreHomepage'
import PathosCredibility from '@/components/PathosCredibility'
import MainHomePage from '@/components/MainHomePage'

export default function Page() {
  const router = useRouter()

  const [stage, setStage] = useState<'entry' | 'prehome' | 'credibility' | 'main'>('entry')
  const [showEntryModal, setShowEntryModal] = useState(true)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const skipSlides = urlParams.get('skip') === 'slides'

    if (skipSlides) {
      sessionStorage.setItem('entrySequence', '1')   
      setShowEntryModal(false)
      setStage('main')
      window.history.replaceState({}, '', '/')
      return
    }

    const seen = sessionStorage.getItem('entrySequence')
    if (seen) {
      setShowEntryModal(false)
      setStage('prehome')
    }
  }, [])

  const proceed = () => {
    setShowEntryModal(false)
    sessionStorage.setItem('entrySequence', '1')
    setStage('prehome')
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
  }, [showEntryModal, proceed])

  // After slides finish, go to credibility stage
  const handleSlidesComplete = () => {
    setStage('credibility')
  }

  // After credibility, go to main homepage
  const handleCredibilityComplete = () => {
    setStage('main')
  }

  if (stage === 'entry') {
    return (
      <AnimatePresence>
        {showEntryModal && (
          <motion.div
            ref={modalRef}
            id="entry-modal"
            tabIndex={-1}
            className="fixed inset-0 bg-[#050b19] z-[99999] flex flex-col focus:outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={proceed}
          >
            {/* ... entry modal content (unchanged) ... */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
              <div className="text-center max-w-xl mx-auto">
                <h2 className="text-white text-4xl md:text-5xl font-light mb-3">Take a deep breath.</h2>
                <p className="text-gray-300 text-lg md:text-xl mb-1">What you’re about to learn is simple.</p>
                <p className="text-gray-300 text-lg md:text-xl mb-6">It changes how power actually works.</p>
                <div className="mt-8 mb-6 flex justify-center">
                  <Image src="/images/You_Are_Not_Powerless.jpg" alt="YOU ARE NOT POWERLESS" width={350} height={175} className="w-full max-w-[345px] h-auto" priority />
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

  if (stage === 'prehome') {
    return (
      <PreHomepage
        onGoToHomepage={handleSlidesComplete}
        onGoToPetition={() => router.push('/petition')}
      />
    )
  }

  if (stage === 'credibility') {
    return (
      <div className="min-h-screen bg-[#050b19] flex flex-col">
        {/* Bridge line */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-center text-neutral-500 text-base md:text-lg max-w-xl mx-auto px-4 mb-8">
            If this feels different, it’s because it is.
          </p>
          <PathosCredibility />
          <div className="flex justify-center mt-12">
            <button
              onClick={handleCredibilityComplete}
              className="bg-green/60 text-black text-sm md:text-base font-semibold py-2 px-6 rounded-md hover:bg-green/70 transition"
            >
              Continue to site →
            </button>
          </div>
        </div>
      </div>
    )
  }

  return <MainHomePage />
}