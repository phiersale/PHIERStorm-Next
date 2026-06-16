// FILE: components/TransitionModal.tsx
// VERSION: 4.0 – EVERGREEN SOLUTION DOORWAY
// No expiration dates. No news dependency. Clean bridge from credibility → solution.

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type Props = {
  onShowFramework: () => void
  onSkipVideo: () => void
  onSignPetition?: () => void
}

export default function TransitionModal({ onShowFramework, onSkipVideo, onSignPetition }: Props) {
  const [showWhy500Modal, setShowWhy500Modal] = useState(false)

  useEffect(() => {
    if (showWhy500Modal) {
      const modal = document.querySelector('.why-500-modal')
      if (modal) (modal as HTMLElement).focus()
    }
  }, [showWhy500Modal])

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm">
        <div className="min-h-screen pt-4 pb-16 px-4">
          <motion.div
            className="relative bg-[#0d1525] border border-green/20 rounded-2xl max-w-xl mx-auto shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* PHIERS Logo */}
            <div className="flex justify-center pt-3 pb-2">
              <img 
                src="/images/PHIERS_Logo.png" 
                alt="PHIERS Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-90"
              />
            </div>

            {/* HERO IMAGE - Keep exactly as-is */}
            <div className="relative w-full overflow-hidden">
              <img 
                src="/images/Alone_Youre_Easy_To_Ignore-500_fixes_it.jpg"
                alt="Congress ignores you. 1,500 people in your district changes that."
                className="w-full h-auto max-h-[45vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1525] via-[#0d1525]/40 to-transparent"></div>
            </div>

            {/* Content area */}
            <div className="p-6 pt-4">
              {/* TOP TAG */}
              <div className="text-center mb-3">
                <p className="text-green text-[10px] font-mono tracking-wider border-b border-green/20 pb-2 inline-block">
                  YOU'VE SEEN THE EVIDENCE
                </p>
              </div>

              {/* HEADLINE */}
              <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">
                Now let's talk about the <span className="text-green">solution</span>.
              </h2>

              {/* SUB-HEADLINE */}
              <p className="text-gray-300 text-sm text-center leading-relaxed mb-4">
                Most Americans already agree on what's broken. The challenge isn't identifying the problems — it's creating enough organized pressure to make Congress act.
              </p>

              {/* VIDEO EMBED */}
              <div className="rounded-lg overflow-hidden mb-4 border border-green/20 aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/p0k_VMUDEms"
                  title="PHIERS - Why This Moment Matters"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* FINANCIAL SEED */}
              <div className="bg-green/5 border border-green/20 rounded-lg p-4 mb-4">
                <p className="text-green font-semibold text-sm mb-1">The math already works.</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Congress already spends about <span className="text-white font-semibold">$10,000 per beneficiary</span> each year. Modern telehealth can deliver most routine care for about <span className="text-green font-semibold">$600</span>. PHIERS organizes the political leverage needed to make solutions like that impossible to ignore.
                </p>
              </div>

              {/* 500/1500 BLOCK - Corrected Framing */}
              <div className="space-y-3 mb-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-green font-bold">500 signatures isn't the victory — it's the signal.</span>
                </p>
                <p className="text-gray-400 text-sm leading-relaxed pl-3 border-l-2 border-green/40">
                  Ralph Nader showed that organized citizens can get elected officials to show up and listen. PHIERS uses that same principle to build district-level leverage.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-green font-bold">1,500 isn't the finish line — it's proof</span> a district can organize around what its constituents actually want.
                </p>
              </div>

              {/* URGENCY LINE - Light touch, no expiration date */}
              <div className="bg-yellow-950/30 border border-yellow-800/30 rounded-lg p-3 mb-4">
                <p className="text-yellow-400 text-sm font-semibold text-center">
                  ⚡ Members of Congress are in their districts right now, making this one of the most favorable organizing windows of the year.
                </p>
              </div>

              {/* PRIMARY CTA */}
              {onSignPetition && (
                <button
                  onClick={onSignPetition}
                  className="w-full py-3 bg-green text-black rounded-lg text-base font-bold hover:bg-green-dim transition mb-2"
                >
                  Add Your Name — Be Counted in Your District
                </button>
              )}

              {/* SECONDARY CTA - Organizer link */}
              <button
                onClick={() => {/* Navigate to Organizers page */}}
                className="w-full py-2.5 border border-green/30 text-green text-sm font-medium rounded-lg hover:bg-green/10 transition mb-3"
              >
                Organize Your District →
              </button>

              {/* TERTIARY CTA */}
              <div className="text-center">
                <button
                  onClick={onShowFramework}
                  className="text-gray-400 text-sm underline hover:text-gray-300 transition-colors"
                >
                  Show Me How PHIERS Works →
                </button>
              </div>

              {/* WHY 500 LINK */}
              <div className="text-center mt-3 pt-3 border-t border-gray-800">
                <button
                  onClick={() => setShowWhy500Modal(true)}
                  className="text-gray-500 text-xs underline hover:text-gray-400 transition-colors"
                >
                  Why 500 Works (deep dive) →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WHY 500? POPUP MODAL */}
      {showWhy500Modal && (
        <div
          className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center p-4 overflow-y-auto why-500-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowWhy500Modal(false)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setShowWhy500Modal(false)
          }}
          tabIndex={-1}
        >
          <motion.div
            className="relative max-w-2xl w-full bg-[#0d1525] border-2 border-green/30 rounded-xl p-6 shadow-2xl my-8"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <button
              onClick={() => setShowWhy500Modal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl transition-colors z-10"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-2xl md:text-3xl font-bold text-green mb-4 font-display pr-6">
              WHY 500?
            </h3>

            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed max-h-[55vh] sm:max-h-[60vh] overflow-y-auto pr-1">
              <p>
                <strong className="text-green">500 is the signal that a district is awake.</strong>
              </p>
              
              <p>
                It's the first measurable proof that people in a district can move together. 
                500 people organized around one thing is enough to force a meeting, force a position, and make leadership pay attention.
              </p>
              
              <p>
                Once a district can organize 500, then 1,500 becomes possible — 
                and 1,500 is the proof that a district can organize around what its constituents actually want.
              </p>
              
              <p>
                They go hand in hand: 
                500 signals attention. 
                1,500 signals organization.
              </p>
              
              <div className="bg-green/5 border-l-4 border-green p-4 my-4 italic">
                <p className="mb-2">PHIERS is built on a simple observation:</p>
                <p className="mb-2"><strong>If 500 people can organize around one thing, they can organize around something larger.</strong></p>
                <p className="mb-2">A town hall. A public commitment. A vote. Accountability.</p>
                <p>500 is not the finish line. It's the first measurable demonstration that a district can act together.</p>
              </div>
              
              <p className="text-yellow-400 text-sm font-semibold">
                ⚡ When Congress is home, 500 people is enough to force a meeting — 
                because the House alone chooses its Speaker, and leadership decides what ever gets a vote.
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                Once districts can organize 500 together, 1,500 becomes the number that can demand votes 
                on a public, data‑driven reform package — <span className="text-green font-bold">the-system</span> — 
                built from what Americans say they want fixed.
              </p>
              
              <p>
                The petition is the <strong className="text-green">first demonstration of collective action</strong>, not the end goal.
              </p>
              
              <p className="text-yellow-400 text-sm font-semibold">
                Once you prove you can move together at scale, Congress stops ignoring you.
              </p>
            </div>

            <button
              onClick={() => setShowWhy500Modal(false)}
              className="w-full mt-6 bg-green text-[#080d1a] font-bold py-3 px-4 rounded-lg hover:bg-green-dim transition"
            >
              Got it. Let's go.
            </button>
          </motion.div>
        </div>
      )}
    </>
  )
}
