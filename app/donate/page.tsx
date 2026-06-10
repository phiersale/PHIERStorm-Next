// FILE: components/DonatePage.tsx
// VERSION: 3.0 – UX-optimized donate page (structure + pacing)

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

type Props = {
  onBackToHome?: () => void
  onOpenPrivacyModal?: (url: string) => void
}

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function DonatePage({ onBackToHome, onOpenPrivacyModal }: Props) {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [copiedMessage, setCopiedMessage] = useState('')
  const [showSkipButton, setShowSkipButton] = useState(false)
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)
  const prefersReducedMotion = useRef(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0
      setScrollPercentage(scrollPercent)

      // Show skip button after 100px
      setShowSkipButton(currentScrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const copyToClipboard = (text: string, method: string) => {
    navigator.clipboard.writeText(text)
    setCopiedMessage(method)
    setTimeout(() => setCopiedMessage(''), 2000)
  }

  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion.current ? 'auto' : 'smooth'
    })
  }

  const scrollToQRCodes = () => {
    const el = document.getElementById('qr-codes')
    if (!el) return
    el.scrollIntoView({
      behavior: prefersReducedMotion.current ? 'auto' : 'smooth'
    })
  }

  return (
    <main className="min-h-screen bg-[#0A1A2F] text-white">
      {/* Scroll progress ring */}
      <div className="fixed bottom-5 left-5 z-50">
        <div className="relative w-10 h-10">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(61,220,132,0.2)" strokeWidth="2" />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#3ddc84"
              strokeWidth="2"
              strokeDasharray={`${scrollPercentage * 1.005} 100.5`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-green-400">
            {Math.round(scrollPercentage)}%
          </span>
        </div>
      </div>

      {/* Back to Credibility button */}
      <div className="fixed top-5 left-5 z-50">
        <button
          onClick={() => window.location.href = '/?credibility=true'}
          className="bg-[#0f1725]/80 border border-green/30 text-gray-300 text-xs px-3 py-1.5 rounded-full backdrop-blur-sm hover:border-green/50 hover:text-white transition-all duration-300"
        >
          ← Back to Credibility
        </button>
      </div>

      {/* Donate Now button - top right, matches Back button style */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={scrollToQRCodes}
          className="bg-[#0f1725]/80 border border-green/30 text-gray-300 text-xs px-3 py-1.5 rounded-full backdrop-blur-sm hover:border-green/50 hover:text-white transition-all duration-300"
        >
          Donate Now →
        </button>
      </div>

      <motion.div
        id="top"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } }
        }}
        className="max-w-4xl mx-auto px-4 py-12 pb-24 md:pb-32"
      >
        {/* Logo */}
        <motion.div variants={sectionFade} className="flex justify-center mb-8">
          <img
            src="/images/PHIERS_Logo.png"
            alt="PHIERS"
            className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-60"
          />
        </motion.div>

        {/* HERO: HELP BUILD THE TEAM (primary opening) */}
        <motion.div variants={sectionFade} className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            HELP BUILD THE TEAM
          </h1>
          <div className="space-y-4 text-gray-300 text-base md:text-lg">
            <p>America doesn't have a shortage of problems.</p>
            <p>It has a shortage of organized solutions.</p>
            <div className="h-4" />
            <p>
              For more than twenty years, PHIERS has been developing practical systems to reduce healthcare costs,
              create jobs, strengthen communities, and restore accountability where accountability has been lost.
            </p>
            <div className="h-2" />
            <p className="text-green-400 font-semibold">The work exists.</p>
            <p className="text-green-400 font-semibold">The plans exist.</p>
            <p className="text-green-400 font-semibold">The public record exists.</p>
            <div className="h-2" />
            <p className="text-xl font-bold text-white">Now we need the people.</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-400 mt-4">
              <span>Union organizers.</span>
              <span>Civic law centers.</span>
              <span>Researchers.</span>
              <span>Developers.</span>
              <span>Designers.</span>
              <span>Writers.</span>
              <span>Community leaders.</span>
              <span>Project managers.</span>
              <span>District coordinators.</span>
            </div>
            <div className="h-6" />
            <p className="text-white font-semibold">Every successful movement reaches the same moment:</p>
            <p>The vision is ready.</p>
            <p>The team is not yet large enough.</p>
            <p className="text-green-400 font-bold text-xl mt-4">That's where we are today.</p>
            <p className="mt-4">
              Your donation helps us build the infrastructure required to move from ideas to implementation —
              from volunteers to staff, from supporters to organized districts, and from frustration to measurable results.
            </p>
            <p className="text-amber-400 text-sm italic mt-4">
              Because solutions only matter if enough people survive long enough to implement them.
            </p>
          </div>
        </motion.div>

        {/* Patriotic Homecoming moved to /credibility */}

        {/* MABSHA moved to /credibility */}

        {/* Ex-MAGA addressing moved to /credibility */}

        {/* OPERATIONAL ANCHOR: WHAT YOUR DONATION FUNDS — placed just before ask */}
        <motion.div variants={sectionFade} className="mt-24 mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">⭐ WHAT YOUR DONATION FUNDS</h2>
          <div className="bg-[#1A2634] rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              Most organizations ask for money without explaining what happens next.
            </p>
            <p className="text-white font-semibold mb-6">Here's what happens next:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              <div className="flex items-center gap-2 text-gray-300 text-sm">→ District organizing</div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">→ Union outreach</div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">→ Civic law centers</div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">→ Software development</div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">→ Petition infrastructure</div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">→ Media production</div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">→ Community education</div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">→ Leadership development</div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">→ Mutual‑assistance networks</div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">→ Job creation initiatives</div>
            </div>

            <div className="border-t border-white/10 my-6" />

            <div className="space-y-3 text-center">
              <p className="text-gray-200">Every dollar converts frustration into organization.</p>
              <p className="text-gray-200">Every organizer converts organization into leverage.</p>
              <p className="text-gray-200">Every organized district creates pressure that cannot be ignored.</p>
              <div className="border-t border-white/10 my-6" />
              <p className="text-green-400 font-bold text-lg">Not through outrage.</p>
              <p className="text-green-400 font-bold text-lg">Through infrastructure.</p>
            </div>
          </div>
        </motion.div>

{/* URGENCY ANCHOR: The number that changes everything */}
        <motion.div variants={sectionFade} className="mt-12 mb-12 max-w-3xl mx-auto text-center">
          <div className="bg-green/10 border-l-4 border-l-green rounded-r-lg p-6">
            <p className="text-white font-semibold text-lg">
              We need 1,500 organized supporters per district to unlock the leverage Congress cannot ignore.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Your donation builds the infrastructure that makes that possible.
            </p>
          </div>
        </motion.div>

        {/* PRIMARY ASK: DONATE NOW — calmer, tighter, directly after operational clarity */}
        <motion.div id="qr-codes" variants={sectionFade} className="mt-24 mb-16 max-w-3xl mx-auto">
          <div className="bg-[#1A2634] rounded-xl p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">⭐ DONATE NOW</h2>
            <div className="space-y-2 mb-8">
              <p className="text-white text-xl">Help us build the team.</p>
              <p className="text-white text-xl">Help us build the infrastructure.</p>
              <p className="text-white text-xl">Help us build the future.</p>
            </div>

            <div className="border-t border-white/10 my-8" />

            {/* QR GRID — checkout, not hero */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 place-items-center">
              {/* Zelle */}
              <div className="flex flex-col items-center">
                <div
                  className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl p-2 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setModalImage({ src: '/images/zelle_qr.png', alt: 'Zelle QR Code' })}
                >
                  <img
                    src="/images/zelle_qr.png"
                    alt="Zelle QR Code"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/placeholder-qr.png'
                    }}
                  />
                </div>
                <p className="text-green-400 text-base tracking-wide mt-3 font-semibold">Zelle</p>
                <button
                  onClick={() => copyToClipboard('phiers@protonmail.com', 'Zelle')}
                  className="text-gray-400 text-sm hover:text-green-400 underline transition mt-1"
                >
                  (301)919-0970
                </button>
              </div>

              {/* Venmo */}
              <div className="flex flex-col items-center">
                <div
                  className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl p-2 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setModalImage({ src: '/images/venmo_qr.png', alt: 'Venmo QR Code' })}
                >
                  <img
                    src="/images/venmo_qr.png"
                    alt="Venmo QR Code"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/placeholder-qr.png'
                    }}
                  />
                </div>
                <p className="text-green-400 text-base tracking-wide mt-3 font-semibold">Venmo</p>
                <button
                  onClick={() => copyToClipboard('@PHIERd_Up', 'Venmo')}
                  className="text-gray-400 text-sm hover:text-green-400 underline transition mt-1"
                >
                  @PHIERd_Up
                </button>
              </div>

              {/* PayPal */}
              <div className="flex flex-col items-center">
                <div
                  className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl p-2 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setModalImage({ src: '/images/paypal_qr.png', alt: 'PayPal QR Code' })}
                >
                  <img
                    src="/images/paypal_qr.png"
                    alt="PayPal QR Code"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/placeholder-qr.png'
                    }}
                  />
                </div>
                <p className="text-green-400 text-base tracking-wide mt-3 font-semibold">PayPal</p>
                <button
                  onClick={() => copyToClipboard('will@phiers.org', 'PayPal')}
                  className="text-gray-400 text-sm hover:text-green-400 underline transition mt-1"
                >
                  will@phiers.org
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PHIERSale moved to /the-system */}

        {/* Two-path navigation: back to Credibility OR forward to main homepage */}
        <motion.div variants={sectionFade} className="mt-12 text-center max-w-2xl mx-auto">
          <div className="border-t border-white/10 pt-8 mb-6"></div>
          <p className="text-gray-500 text-sm">Not ready to donate?</p>
          <p className="text-gray-300 font-semibold mt-1">Your signature is still leverage.</p>
          <p className="text-gray-400 text-sm max-w-md mx-auto mt-2">
            1,500 organized constituents in a district is where the power shifts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button
              onClick={() => window.location.href = '/?credibility=true'}
              className="text-green-400 border border-green-400/30 hover:bg-green-400/10 px-6 py-2 rounded-full text-sm transition"
            >
              ← Back to Credibility
            </button>
            <button
              onClick={() => router.push('/the-system')}
              className="text-white border border-white/20 hover:bg-white/10 px-6 py-2 rounded-full text-sm transition"
            >
              See the Full System →
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            See what your support helps build — the mechanism, the leverage, and the future.
          </p>
        </motion.div>

        {/* Copy message toast */}
        {copiedMessage && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn">
            {copiedMessage} info copied to clipboard!
          </div>
        )}
      </motion.div>

      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition"
            >
              ✕
            </button>
            <div className="relative w-full aspect-[16/9]">
              <img src={modalImage.src} alt={modalImage.alt} className="w-full h-full object-contain" />
            </div>
            <p className="text-gray-400 text-xs text-center mt-4">Click anywhere to close</p>
          </div>
        </div>
      )}

      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 z-50 py-2 px-4">
        <div className="flex justify-around items-center">
          <button
            onClick={smoothScrollToTop}
            className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-green-400 transition-colors py-1 px-3"
          >
            <span className="text-base">↑</span>
            <span className="text-[10px]">Top</span>
          </button>
          <button
            onClick={() => window.location.href = '/?credibility=true'}
            className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-green-400 transition-colors py-1 px-3"
          >
            <span className="text-base">←</span>
            <span className="text-[10px]">Credibility</span>
          </button>
          <button
            onClick={() => router.push('/the-system')}
            className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-green-400 transition-colors py-1 px-3"
          >
            <span className="text-base">→</span>
            <span className="text-[10px]">System</span>
          </button>
        </div>
      </div>
    </main>
  )
}

// FILE: components/DonatePage.tsx