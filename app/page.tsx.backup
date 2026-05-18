// FILE: app/page.tsx (START)
// VERSION: 1.3.0 (mobile: "SKIP" button top-right, content centered, no scroll needed)

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

  const skipIntro = () => {
    setShowEntryModal(false)
    sessionStorage.setItem('entrySequence', '1')
    setStage('prehome')
  }

  useEffect(() => {
    if (!showEntryModal) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') proceed()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
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
            {/* Container with auto margins to center vertically */}
            <div className="relative w-full max-w-xl mx-auto">
              {/* Logo - centered at top */}
              <div className="flex justify-center mb-6">
                <Image src="/images/PHIERS_Logo.png" alt="PHIERS" width={60} height={60} className="opacity-90" />
              </div>

              {/* SKIP button - top right, no overlap */}
              <div className="absolute top-0 right-0">
                <button
                  onClick={(e) => { e.stopPropagation(); skipIntro(); }}
                  className="text-gray-500 text-sm underline hover:text-gray-300"
                >
                  SKIP
                </button>
              </div>

              {/* Content */}
              <div className="text-center mt-8">
                <h2 className="text-white text-4xl md:text-5xl font-light mb-4">Take a breath.</h2>
                <p className="text-gray-300 text-lg md:text-xl mb-2">What you’re about to see is simple.</p>
                <p className="text-gray-300 text-lg md:text-xl mb-6">But it changes how power actually works.</p>
                <p className="text-gray-400 text-base md:text-lg mb-8">Most people haven’t seen the mechanism yet.</p>
                <div className="border-t border-green/20 pt-6">
                  <p className="text-green text-2xl md:text-3xl font-bold mb-2">YOU ARE NOT POWERLESS</p>
                  <p className="text-gray-300 text-base md:text-lg">That’s the first thing to remember.</p>
                </div>
                <p className="text-gray-500 text-sm mt-8">Click anywhere to continue</p>
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
// FILE: app/page.tsx (END)