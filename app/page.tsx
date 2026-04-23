// FILE: app/page.tsx
// VERSION: 1.1.0 – escape does nothing, modal exit animation, focus ring

'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PreHomepage from '@/components/PreHomepage'
import MainHomePage from '@/components/MainHomePage'
import PathosCredibility from '@/components/PathosCredibility'

export default function Page() {
  const router = useRouter()
  const [stage, setStage] = useState<'entry' | 'prehome' | 'credibility' | 'main'>('entry')
  const [showModal, setShowModal] = useState(true) // controls modal visibility for exit animation
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const skipSlides = urlParams.get('skip') === 'slides'

    if (skipSlides) {
      // Bypass entry modal and prehome → directly to credibility
      setShowModal(false)
      setStage('credibility')
      window.history.replaceState({}, '', '/')
      return
    }

    // Normal visit: show entry modal
    setShowModal(true)
    setStage('entry')
  }, [])

  const proceed = () => {
    // Start exit animation: hide modal, then switch to prehome
    setShowModal(false)
  }

  const handleModalExitComplete = () => {
    // After fade-out animation finishes, move to prehome stage
    if (stage === 'entry') {
      setStage('prehome')
    }
  }

  // Keyboard handler: only Enter / Space advance. Escape does nothing.
  useEffect(() => {
    if (!showModal) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Space' || e.key === ' ') {
        e.preventDefault()
        proceed()
      }
      // Escape key intentionally ignored
    }

    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    if (modalRef.current) modalRef.current.focus()

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [showModal])

  // Entry modal (only rendered when stage === 'entry', but we control its exit animation)
  if (stage === 'entry') {
    return (
      <AnimatePresence onExitComplete={handleModalExitComplete}>
        {showModal && (
          <motion.div
            ref={modalRef}
            id="entry-modal"
            tabIndex={-1}
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={proceed}
          >
            <div className="relative w-full max-w-xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <Image
                  src="/images/PHIERS_Logo.png"
                  alt="PHIERS"
                  width={50}
                  height={50}
                  className="opacity-90"
                />
                <button
                  onClick={(e) => { e.stopPropagation(); proceed() }}
                  className="text-gray-500 text-sm underline hover:text-gray-300 mr-8"
                >
                  SKIP
                </button>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-white text-4xl md:text-5xl font-light mb-3">
                  Take a deep breath.
                </h2>
                <p className="text-gray-300 text-lg md:text-xl mb-1">
                  What you’re about to see is simple.
                </p>
                <p className="text-gray-300 text-lg md:text-xl mb-4">
                  But it changes how power actually works.
                </p>
                <div className="border-t border-green/20 pt-4 mt-1">
                  <div className="mb-2 flex justify-center">
                    <Image
                      src="/images/You_Are_Not_Powerless.jpg"
                      alt="YOU ARE NOT POWERLESS"
                      width={400}
                      height={200}
                      className="w-full max-w-[300px] h-auto rounded-lg border border-green/20"
                      onError={(e) => console.error('Image failed to load')}
                    />
                  </div>
                  <p className="text-gray-300 text-base md:text-lg text-center">
                    That’s the first thing to remember.
                  </p>
                </div>
                <p className="text-gray-500 text-sm mt-5">
                  Click anywhere or press Enter/Space to continue
                </p>
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
        onGoToHomepage={() => setStage('credibility')}
        onGoToPetition={() => router.push('/petition')}
      />
    )
  }

  if (stage === 'credibility') {
    return (
      <div className="min-h-screen bg-[#050b19] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-neutral-500 text-base md:text-lg max-w-xl mx-auto mb-8">
            If this feels different, it’s because it is.
          </p>
          <PathosCredibility />
          <div className="max-w-3xl mx-auto w-full mt-6">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-green/20 shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/KLu7USN_dao?rel=0"
                title="Pathos Communications endorsement video"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setStage('main')}
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
// FILE: app/page.tsx (end)
// VERSION: 1.1.0