// FILE: app/page.tsx
// VERSION: 3.4.0 – intuitive: background click closes, content clicks don't

'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function EntryPage() {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement>(null)

  const proceed = () => {
    router.push('/slides')
  }

  // Keyboard support: Enter, Space, Escape all proceed
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        e.preventDefault()
        proceed()
      }
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [])

  // Only close when clicking directly on the background overlay
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      proceed()
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-[#050b19] z-[99999] overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleBackgroundClick}
    >
      {/* Content wrapper – clicks here do NOT close the modal */}
      <div
        ref={contentRef}
        className="min-h-screen flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center max-w-xl mx-auto w-full">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light mb-3">
            Take a deep breath.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-1">
            What you’re about to learn is simple.
          </p>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6">
            It changes how power actually works.
          </p>
          <div className="mt-6 mb-6 flex justify-center">
            <Image
              src="/images/You_Are_Not_Powerless.jpg"
              alt="YOU ARE NOT POWERLESS"
              width={280}
              height={140}
              className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[350px] h-auto"
              priority
            />
          </div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
            That’s the first thing to remember.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Click outside this box or press Space/Enter to continue
          </p>
        </div>
      </div>
    </motion.div>
  )
}
// FILE: app/page.tsx (end)
// VERSION: 3.4.0