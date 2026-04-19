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
    const hasSeenEntry = sessionStorage.getItem('entrySequence')
    if (hasSeenEntry) {
      setShowEntryModal(false)
      setStage('prehome')
    }
  }, [])

  const closeEntryModal = () => {
    setShowEntryModal(false)
    document.body.style.overflow = ''
    sessionStorage.setItem('entrySequence', '1')
    setStage('prehome')
  }

  const skipIntro = () => {
    setShowEntryModal(false)
    document.body.style.overflow = ''
    sessionStorage.setItem('entrySequence', '1')
    setStage('prehome')
  }

  useEffect(() => {
    if (!showEntryModal) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') closeEntryModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    const modalContainer = document.getElementById('entry-modal')
    if (modalContainer) modalContainer.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [showEntryModal])

  if (stage === 'entry') {
    return (
      <AnimatePresence>
        {showEntryModal && (
          <motion.div
            id="entry-modal"
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 cursor-pointer font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEntryModal}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <div className="text-center max-w-2xl">
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/PHIERS_Logo.png"
                  alt="PHIERS"
                  width={80}
                  height={80}
                  className="opacity-90"
                />
              </div>
              <h2 className="text-white text-4xl md:text-5xl font-light mb-6 tracking-wide">
                Take a breath.
              </h2>
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-6">
                What you’re about to see is simple.<br />
                But it changes how power actually works.
              </p>
              <p className="text-gray-400 text-lg mb-6">
                Most people haven’t seen the mechanism yet.
              </p>
              <div className="border-t border-green/20 pt-6">
                <p className="text-green text-3xl md:text-4xl font-bold mb-3">
                  YOU ARE NOT POWERLESS
                </p>
                <p className="text-gray-300 text-lg md:text-xl">
                  That’s the first thing to remember.
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-8">
                Click anywhere to continue — or press Enter
              </p>
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