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
  const [showBreathModal, setShowBreathModal] = useState(true)
  const [showTextModal, setShowTextModal] = useState(false)

  // Check if entry sequence already seen in this session
  useEffect(() => {
    const hasSeenEntry = sessionStorage.getItem('entrySequence')
    if (hasSeenEntry) {
      setShowBreathModal(false)
      setStage('prehome')
    }
  }, [])

  const advanceToTextModal = () => {
    setShowBreathModal(false)
    setShowTextModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeTextModal = () => {
    setShowTextModal(false)
    document.body.style.overflow = ''
    sessionStorage.setItem('entrySequence', '1')
    setStage('prehome')
  }

  // Keyboard handler for text modal
  useEffect(() => {
    if (!showTextModal) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') closeTextModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    const modalContainer = document.getElementById('entry-text-modal')
    if (modalContainer) modalContainer.focus()
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [showTextModal])

  if (stage === 'entry') {
    return (
      <>
        <AnimatePresence>
          {showBreathModal && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={advanceToTextModal}
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
                <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
                  What you’re about to see is simple.<br />
                  But it changes how power actually works.
                </p>
                <p className="text-gray-500 text-sm mt-12">Tap anywhere to continue</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showTextModal && (
            <motion.div
              id="entry-text-modal"
              className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeTextModal}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
            >
              <div className="text-center max-w-2xl">
                <h2 className="text-white text-4xl md:text-5xl font-light mb-6 tracking-wide">
                  YOU ARE NOT POWERLESS
                </h2>
                <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
                  That’s the first thing to remember.
                </p>
                <p className="text-gray-500 text-sm mt-12">Tap anywhere to continue</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
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