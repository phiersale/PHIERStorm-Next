// FILE: app/page.tsx
// VERSION: 1.7.5 – shortened time for you are not alone

'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PreHomepage from '@/components/PreHomepage'
import MainHomePage from '@/components/MainHomePage'
import PathosCredibility from '@/components/PathosCredibility'

// Phased text sequence – reveals text then image, then calls onComplete
function PhasedText({ onComplete }: { onComplete: () => void }) {
  const [subphase, setSubphase] = useState<'pause' | 'breath' | 'description' | 'image'>('pause')
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setSubphase('image')
      return
    }
    const timer1 = setTimeout(() => setSubphase('breath'), 1500)
    const timer2 = setTimeout(() => setSubphase('description'), 3000)
    const timer3 = setTimeout(() => setSubphase('image'), 5000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [prefersReducedMotion])

  return (
    <div className="mt-4 space-y-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: subphase !== 'pause' ? 1 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center mb-2"
      >
        <Image
          src="/images/PHIERS-Pause.png"
          alt="PHIERS - Pause"
          width={200}
          height={60}
          className="w-auto h-auto max-w-[200px]"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: subphase === 'breath' || subphase === 'description' || subphase === 'image' ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-xl md:text-2xl font-light"
      >
        Take a breath.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: subphase === 'description' || subphase === 'image' ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-1"
      >
        <p className="text-gray-300 text-lg md:text-xl">What you’re about to see is simple.</p>
        <p className="text-gray-300 text-lg md:text-xl">It changes the balance of power.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: subphase === 'image' ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="border-t border-green/20 pt-4 mt-1">
          <div className="mb-2 flex justify-center">
            <Image
              src="/images/You_Are_Not_Powerless.jpg"
              alt="YOU ARE NOT POWERLESS"
              width={600}
              height={300}
              className="w-full max-w-[450px] h-auto rounded-lg border border-green/20"
              onError={(e) => console.error('Image failed to load')}
            />
          </div>
        </div>
        <div className="mt-4">
           <button
              onClick={onComplete}
              className="text-green/40 text-sm underline hover:text-green/70 transition-colors"
            >
              Begin →
            </button>
        </div>
      </motion.div>
    </div>
  )
}

export default function Page() {
  const router = useRouter()
  const [stage, setStage] = useState<'entry' | 'reading' | 'prehome' | 'credibility' | 'main'>('entry')
  const [showModal, setShowModal] = useState(true)
  const [showPathosVideo, setShowPathosVideo] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const [readingVisibleCount, setReadingVisibleCount] = useState(0)
  const readingLines = [
    "Things are moving fast.",
    "",
    "It takes less than 3 minutes to make Congress do its job.",
    "",
    "You see, Congress doesn't listen to voters.",
    "PHIERS changes that.",
    "",
    "It forces Congress to respond — or face consequences.",
    "",
    "Here's why."
  ]

  useEffect(() => {
    if (stage !== 'reading') return
    setReadingVisibleCount(0)
    const interval = setInterval(() => {
      setReadingVisibleCount(prev => {
        if (prev < readingLines.length) return prev + 1
        clearInterval(interval)
        return prev
      })
    }, 400)
    return () => clearInterval(interval)
  }, [stage])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const skipSlides = urlParams.get('skip') === 'slides'

    if (skipSlides) {
      setShowModal(false)
      setStage('credibility')
      window.history.replaceState({}, '', '/')
      return
    }

    setShowModal(true)
    setStage('entry')
  }, [])

  const proceed = () => {
    setShowModal(false)
    setStage('reading')
  }

  // Keyboard support for entry modal
  useEffect(() => {
    if (!showModal) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Space' || e.key === ' ') {
        e.preventDefault()
        proceed()
      }
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    if (modalRef.current) modalRef.current.focus()
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [showModal, proceed])

  // ========== ENTRY MODAL ==========
  if (stage === 'entry') {
    return (
      <AnimatePresence>
        {showModal && (
          <motion.div
            ref={modalRef}
            id="entry-modal"
            tabIndex={-1}
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={proceed}
          >
            <div className="relative w-full max-w-xl mx-auto -mt-8">
              <div className="flex justify-end mb-6">
                <button
                  onClick={(e) => { e.stopPropagation(); proceed() }}
                  className="text-gray-500 text-sm underline hover:text-gray-300"
                >
                  SKIP
                </button>
              </div>
              <div className="text-center mt-0">
                <PhasedText onComplete={proceed} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  // ========== READING STAGE - SEQUENTIAL ANIMATION ==========
  if (stage === 'reading') {
    // Remove the first line from readingLines since we're replacing it with an image
    const displayLines = readingLines.slice(1)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 bg-black/95 z-[99999] flex flex-col items-center justify-center p-4 overflow-y-auto"
      >
        <div className="w-full max-w-md mx-auto my-auto relative z-10">
          {/* SKIP button - top right relative to content */}
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setStage('credibility')}
              className="text-gray-500 text-xs underline hover:text-gray-300"
            >
              SKIP →
            </button>
          </div>

          {/* Logo image instead of the first line */}
          <div className="flex justify-center mb-4">
            <Image
              src="/images/PHIERS_Things_Moving_Fast.png"
              alt="PHIERS - Things are moving fast"
              width={280}
              height={80}
              className="w-auto h-auto max-w-[280px]"
            />
          </div>

          {/* Remaining animated text (excluding the first line) */}
          <div className="space-y-3 text-center">
            {displayLines.map((line, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: idx < readingVisibleCount - 1 ? 1 : 0, y: idx < readingVisibleCount - 1 ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className={
                  line === ""
                    ? "h-2"
                    : "text-white text-sm md:text-base"
                }
              >
                {line === "" ? "" : line}
              </motion.p>
            ))}
          </div>

          {/* Button section - dimmer */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setStage('prehome')}
              className="bg-green/40 text-black text-xs md:text-sm font-semibold py-1.5 px-4 rounded-md hover:bg-green/60 transition"
            >
              Start slideshow →
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  // ========== PREHOME (SLIDES) – FORWARD ONLY ==========
  if (stage === 'prehome') {
    return (
      <PreHomepage
        onGoToHomepage={() => setStage('credibility')}
        onGoToPetition={() => router.push('/petition')}
      />
    )
  }

  // ========== CREDIBILITY ==========
  if (stage === 'credibility') {
    return (
      <div className="min-h-screen bg-[#050b19] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* TOP SKIP */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setStage('main')}
              className="text-gray-500 text-sm underline hover:text-gray-300"
            >
              Skip →
            </button>
          </div>

          <p className="text-center text-neutral-500 text-base md:text-lg max-w-xl mx-auto mb-8">
            If this feels different, it’s because it is.
          </p>

          <PathosCredibility />

          <div className="max-w-3xl mx-auto w-full mt-6">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-green/20 shadow-lg">
              {!showPathosVideo ? (
                <div
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setShowPathosVideo(true)}
                >
                  <Image
                    src="/images/Pathos_Interview_Thumbnail.png"
                    alt="Pathos Communications endorsement – click to play"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition">
                    <div className="w-16 h-16 rounded-full bg-green/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/KLu7USN_dao?rel=0&autoplay=1"
                  title="Pathos Communications endorsement video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Bottom buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setStage('main')}
              className="text-gray-500 text-sm underline hover:text-gray-300"
            >
              Skip →
            </button>
            <button
              onClick={() => setStage('main')}
              className="bg-green/60 text-black text-sm md:text-base font-semibold py-2 px-6 rounded-md hover:bg-green/70 transition"
            >
              Continue to site →
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ========== MAIN HOMEPAGE ==========
  return <MainHomePage />
}
// FILE: app/page.tsx (end)
// VERSION: 1.7.5