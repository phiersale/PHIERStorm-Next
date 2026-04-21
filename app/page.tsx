'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PreHomepage from '@/components/PreHomepage'
import MainHomePage from '@/components/MainHomePage'

export default function Page() {
  const router = useRouter()

  const [stage, setStage] = useState<'entry' | 'prehome' | 'main'>('entry')
  const [showEntryModal, setShowEntryModal] = useState(true)

  useEffect(() => {
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
      if (e.key === 'Enter' || e.key === 'Escape') proceed()
    }

    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [showEntryModal])

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
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/PHIERS_Logo.png"
                  alt="PHIERS"
                  width={60}
                  height={60}
                  className="opacity-90"
                />
              </div>

              <div className="absolute top-0 right-0">
                <button
                  onClick={(e) => { e.stopPropagation(); proceed() }}
                  className="text-gray-500 text-sm underline hover:text-gray-300"
                >
                  SKIP
                </button>
              </div>

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

                <div className="border-t border-green/20 pt-4 mt-1">
                  {/* Image is now static – no click modal */}
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
                  Click anywhere to continue
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
        onGoToHomepage={() => setStage('main')}
        onGoToPetition={() => router.push('/petition')}
      />
    )
  }

  return <MainHomePage />
}