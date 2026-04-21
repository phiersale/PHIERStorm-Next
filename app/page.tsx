// FILE: app/page.tsx
// VERSION: Entry modal with clickable "YOU ARE NOT POWERLESS" image

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PreHomepage from '@/components/PreHomepage'
import MainHomePage from '@/components/MainHomePage'

export default function Page() {
  const router = useRouter()

  // FLOW CONTROL
  const [stage, setStage] = useState<'entry' | 'prehome' | 'main'>('entry')
  const [showEntryModal, setShowEntryModal] = useState(true)
  const [powerlessModalOpen, setPowerlessModalOpen] = useState(false)

  // SESSION CHECK (don’t show modal twice)
  useEffect(() => {
    const seen = sessionStorage.getItem('entrySequence')
    if (seen) {
      setShowEntryModal(false)
      setStage('prehome')
    }
  }, [])

  // proceed from modal → slides
  const proceed = () => {
    setShowEntryModal(false)
    sessionStorage.setItem('entrySequence', '1')
    setStage('prehome')
  }

  // keyboard support for modal
  useEffect(() => {
    if (!showEntryModal) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') proceed()
    }

    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [showEntryModal])

  // =========================
  // ENTRY MODAL
  // =========================
  if (stage === 'entry') {
    return (
      <AnimatePresence>
        {showEntryModal && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={proceed}
          >
            <div className="relative w-full max-w-xl mx-auto">

              {/* LOGO */}
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/PHIERS_Logo.png"
                  alt="PHIERS"
                  width={60}
                  height={60}
                  className="opacity-90"
                />
              </div>

              {/* SKIP */}
              <div className="absolute top-0 right-0">
                <button
                  onClick={(e) => { e.stopPropagation(); proceed() }}
                  className="text-gray-500 text-sm underline hover:text-gray-300"
                >
                  SKIP
                </button>
              </div>

              {/* CONTENT */}
              <div className="text-center mt-6">
                <h2 className="text-white text-4xl md:text-5xl font-light mb-3">
                  Take a breath.
                </h2>

                <p className="text-gray-300 text-lg md:text-xl mb-1">
                  What you’re about to see is simple.
                </p>

                <p className="text-gray-300 text-lg md:text-xl mb-4">
                  But it changes how power actually works.
                </p>

                {/* Image replaces green text */}
                <div className="border-t border-green/20 pt-4 mt-1">
                  <div 
                    className="cursor-pointer mb-2 flex justify-center"
                    onClick={(e) => { e.stopPropagation(); setPowerlessModalOpen(true); }}
                  >
                    <Image
                      src="/images/You_Are_Not_Powerless.jpg"
                      alt="YOU ARE NOT POWERLESS"
                      width={400}
                      height={200}
                      className="w-full max-w-[300px] h-auto rounded-lg border border-green/20 hover:scale-[1.02] transition-transform"
                      onError={(e) => console.error('Image failed to load')}
                    />
                  </div>
                  <p className="text-gray-300 text-base md:text-lg text-center">
                    That’s the first thing to remember.
                  </p>
                </div>

                <p className="text-gray-500 text-sm mt-5">
                  Click anywhere to continue
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Modal for "YOU ARE NOT POWERLESS" image */}
        {powerlessModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPowerlessModalOpen(false)}
          >
            <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setPowerlessModalOpen(false)}
                className="absolute -top-10 right-0 text-white text-3xl cursor-pointer hover:text-green transition-colors"
              >
                ✕
              </button>
              <Image
                src="/images/YOU ARE NOT POWERLESS.jpg"
                alt="YOU ARE NOT POWERLESS (enlarged)"
                width={800}
                height={600}
                className="rounded-xl w-full h-auto"
                onError={(e) => console.error('Modal image failed to load')}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  // =========================
  // SLIDES (PreHomepage)
  // =========================
  if (stage === 'prehome') {
    return (
      <PreHomepage
        onGoToHomepage={() => setStage('main')}
        onGoToPetition={() => router.push('/petition')}
      />
    )
  }

  // =========================
  // MAIN SITE
  // =========================
  return <MainHomePage />
}