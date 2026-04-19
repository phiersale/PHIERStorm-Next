// FILE: app/page.tsx (START)
// VERSION: 1.2.0 (mobile scroll fix - logo and skip intro visible)

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
            className="fixed inset-0 bg-black/95 z-[99999] flex flex-col overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={proceed}
          >
            {/* Content container with min-height to ensure scrolling if needed */}
            <div className="flex-grow flex flex-col justify-center min-h-screen py-8 px-4">
              <div className="text-center max-w-xl mx-auto w-full">
                <Image src="/images/PHIERS_Logo.png" alt="PHIERS" width={80} height={80} className="mx-auto mb-6" />

                <h2 className="text-white text-4xl md:text-5xl font-light mb-4">Take a breath.</h2>

                <p className="text-gray-300 text-lg md:text-xl mb-2">What you’re about to see is simple.</p>
                <p className="text-gray-300 text-lg md:text-xl mb-6">But it changes how power actually works.</p>

                <p className="text-gray-400 text-base md:text-lg mb-8">Most people haven’t seen the mechanism yet.</p>

                <div className="border-t border-green/20 pt-6">
                  <p className="text-green text-2xl md:text-3xl font-bold mb-2">YOU ARE NOT POWERLESS</p>
                  <p className="text-gray-300 text-base md:text-lg">That’s the first thing to remember.</p>
                </div>

                <p className="text-gray-500 text-sm mt-8">Click anywhere to continue</p>

                <button
                  onClick={(e) => { e.stopPropagation(); skipIntro(); }}
                  className="text-gray-500 text-sm underline mt-4 hover:text-gray-300"
                >
                  Skip intro
                </button>
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