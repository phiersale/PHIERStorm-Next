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
  const [showImageModal, setShowImageModal] = useState(false)

  // Check if entry sequence already seen in this session
  useEffect(() => {
    const hasSeenEntry = sessionStorage.getItem('entrySequence')
    if (hasSeenEntry) {
      // Skip entry modals and go directly to PreHomepage
      setShowBreathModal(false)
      setStage('prehome')
    }
  }, [])

  const advanceToImageModal = () => {
    setShowBreathModal(false)
    setShowImageModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeImageModal = () => {
    setShowImageModal(false)
    document.body.style.overflow = ''
    sessionStorage.setItem('entrySequence', '1')
    setStage('prehome')
  }

  // Keyboard handler for image modal
  useEffect(() => {
    if (!showImageModal) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') closeImageModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    const modalContainer = document.getElementById('entry-image-modal')
    if (modalContainer) modalContainer.focus()
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [showImageModal])

  if (stage === 'entry') {
    return (
      <>
        <AnimatePresence>
          {showBreathModal && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={advanceToImageModal}
            >
              <div className="text-center max-w-xl px-6 cursor-pointer">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/PHIERS_Logo.png"
                    alt="PHIERS"
                    width={80}
                    height={80}
                    className="opacity-90"
                  />
                </div>
                <h2 className="text-white text-3xl md:text-4xl font-light mb-4 tracking-wide">Take a breath.</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  What you’re about to see is simple.<br />
                  But it changes how power actually works.
                </p>
                <p className="text-gray-500 text-sm mt-8">Click to continue</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showImageModal && (
            <motion.div
              id="entry-image-modal"
              className="fixed inset-0 bg-black z-[99999] flex items-center justify-center outline-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImageModal}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
            >
              <div className="relative w-screen h-screen flex items-center justify-center cursor-pointer">
                <Image
                  src="/images/You_Are_Not_Powerless.jpg"
                  alt="YOU ARE NOT POWERLESS"
                  width={1920}
                  height={1080}
                  className="w-full h-auto max-h-screen object-contain"
                  priority
                />
                <p className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-sm">
                  Tap anywhere or press Enter to continue
                </p>
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