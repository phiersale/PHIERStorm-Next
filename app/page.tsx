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

  // Check if entry sequence already seen in this session
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

  // Keyboard handler
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
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 cursor-pointer"
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
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8">
                What you’re about to see is simple.<br />
                But it changes how power actually works.
              </p>
              <div className="border-t border-green/20 pt-8">
                <p className="text-green text-3xl md:text-4xl font-bold mb-3">
                  YOU ARE NOT POWERLESS
                </p>
                <p className="text-gray-300 text-lg md:text-xl">
                  That’s the first thing to remember.
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-12">Tap anywhere to continue</p>
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