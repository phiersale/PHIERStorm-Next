// FILE: app/page.tsx
// VERSION: 1.0.0
// PURPOSE: Entry modal (take a breath + YOU ARE NOT POWERLESS) then routes to PreHomepage or MainHomePage

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
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={proceed}
          >
            <div className="text-center max-w-xl">
              <Image src="/images/PHIERS_Logo.png" alt="PHIERS" width={80} height={80} className="mx-auto mb-8" />

              <h2 className="text-white text-5xl font-light mb-6">Take a breath.</h2>

              <p className="text-gray-300 text-xl mb-2">What you’re about to see is simple.</p>
              <p className="text-gray-300 text-xl mb-6">But it changes how power actually works.</p>

              <p className="text-gray-400 mb-6">Most people haven’t seen the mechanism yet.</p>

              <div className="border-t border-green/20 pt-6">
                <p className="text-green text-3xl font-bold">YOU ARE NOT POWERLESS</p>
                <p className="text-gray-300 text-lg mt-2">That’s the first thing to remember.</p>
              </div>

              <p className="text-gray-500 text-sm mt-6">Click anywhere to continue</p>

              <button
                onClick={(e) => { e.stopPropagation(); skipIntro(); }}
                className="text-gray-500 text-sm underline mt-2 hover:text-gray-300"
              >
                Skip intro
              </button>
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
// END FILE: app/page.tsx