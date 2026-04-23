// FILE: app/page.tsx
// VERSION: 1.9.5 (fixed loop, proper scroll to top of credibility content)

'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PreHomepage from '@/components/PreHomepage'
import PathosCredibility from '@/components/PathosCredibility'
import MainHomePage from '@/components/MainHomePage'

export default function Page() {
  const router = useRouter()

  const [stage, setStage] = useState<'entry' | 'prehome' | 'credibility' | 'main'>('entry')
  const [showEntryModal, setShowEntryModal] = useState(true)
  const modalRef = useRef<HTMLDivElement>(null)
  const continueButtonRef = useRef<HTMLButtonElement>(null)
  const credibilityTopRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const skipSlides = urlParams.get('skip') === 'slides'

    if (skipSlides) {
      sessionStorage.setItem('entrySequence', '1')   
      setShowEntryModal(false)
      setStage('main')
      window.history.replaceState({}, '', '/')
      return
    }

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
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') {
        e.preventDefault()
        proceed()
      }
    }

    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    if (modalRef.current) {
      modalRef.current.focus()
    }

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [showEntryModal, proceed])

  const handleSlidesComplete = () => {
    setStage('credibility')
  }

  const goToMain = () => {
    setStage('main')
  }

  // Focus continue button when credibility stage mounts
  useEffect(() => {
    if (stage === 'credibility' && continueButtonRef.current) {
      continueButtonRef.current.focus()
    }
  }, [stage])

  // Scroll to the very top of the credibility content when stage mounts
  useEffect(() => {
    if (stage === 'credibility') {
      // Use setTimeout to ensure the DOM is fully rendered
      const scrollToTop = () => {
        if (credibilityTopRef.current) {
          credibilityTopRef.current.scrollIntoView({ behavior: 'instant', block: 'start' })
        } else {
          window.scrollTo(0, 0)
        }
      }
      // Delay slightly to avoid any race conditions with layout
      setTimeout(scrollToTop, 50)
    }
  }, [stage])

  // Escape key in credibility stage – go to main site
  useEffect(() => {
    if (stage !== 'credibility') return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        goToMain()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [stage])

  if (stage === 'entry') {
    return (
      <AnimatePresence>
        {showEntryModal && (
          <motion.div
            ref={modalRef}
            id="entry-modal"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 bg-[#050b19] z-[99999] flex flex-col focus:outline-none cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={proceed}
          >
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
              <div className="text-center max-w-xl mx-auto">
                <h2 className="text-white text-4xl md:text-5xl font-light mb-3">Take a deep breath.</h2>
                <p className="text-gray-300 text-lg md:text-xl mb-1">What you’re about to learn is simple.</p>
                <p className="text-gray-300 text-lg md:text-xl mb-6">It changes how power actually works.</p>
                <div className="mt-8 mb-6 flex justify-center">
                  <Image
                    src="/images/You_Are_Not_Powerless.jpg"
                    alt="YOU ARE NOT POWERLESS"
                    width={350}
                    height={175}
                    sizes="(max-width: 768px) 90vw, 350px"
                    className="w-full max-w-[345px] h-auto"
                    priority
                  />
                </div>
                <p className="text-gray-300 text-base md:text-lg text-center mb-6">That’s the first thing to remember.</p>
                <p className="text-gray-500 text-sm mt-2">Click anywhere to continue</p>
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
        onGoToHomepage={handleSlidesComplete}
        onGoToPetition={() => router.push('/petition')}
      />
    )
  }

  if (stage === 'credibility') {
    return (
      <div className="min-h-screen bg-[#050b19] py-12 px-4">
        {/* Anchor element for scrolling to the top of credibility content */}
        <div ref={credibilityTopRef} className="scroll-mt-0"></div>
        <div className="max-w-4xl mx-auto">
          {/* Bridge line */}
          <p className="text-center text-neutral-500 text-base md:text-lg max-w-xl mx-auto mb-8">
            If this feels different, it’s because it is.
          </p>

          <PathosCredibility />

          {/* Pathos video */}
          <div className="max-w-3xl mx-auto w-full mt-6">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-green/20 shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/KLu7USN_dao?rel=0"
                title="Pathos Communications endorsement video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="text-center text-gray-400 text-sm mt-3">
              A Fortune 500 PR firm publicly staking their reputation on PHIERS.
            </p>
          </div>

          {/* Continue button */}
          <div className="flex justify-center mt-8">
            <button
              ref={continueButtonRef}
              onClick={goToMain}
              type="button"
              className="bg-green/60 text-black text-sm md:text-base font-semibold py-2 px-6 rounded-md hover:bg-green/70 transition focus:outline-none focus:ring-2 focus:ring-green"
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