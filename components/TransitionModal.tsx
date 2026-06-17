// FILE: components/TransitionModal.tsx
// VERSION: 4.1 – Mobile text width fix

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
            className="relative bg-[#0d1525] border border-green/20 rounded-2xl max-w-2xl mx-auto shadow-2xl"
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

            {/* HERO IMAGE */}
            <div className="relative w-full overflow-hidden">
              <img 
                src="/images/Alone_Youre_Easy_To_Ignore-500_fixes_it.jpg"
                alt="Congress ignores you. 1,500 people in your district changes that."
                className="w-full h-auto max-h-[45vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1525] via-[#0d1525]/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 pt-4">
              {/* TAG */}
              <div className="mb-3">
                <p className="text-green text-[10px] font-mono tracking-wider text-center border-b border-gray-800 pb-1 inline-block w-full">
                  YOU'VE SEEN THE EVIDENCE
                </p>
              </div>

              {/* HEADLINE */}
              <h2 className="text-lg sm:text-2xl font-bold text-white text-center mb-4 leading-snug">
                Alone, You're Easy To Ignore.<br />
                <span className="text-green">Organized Districts Are Not.</span>
              </h2>

              {/* OPEN */}
              <div className="text-center mb-4">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  You've seen what's broken.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Healthcare. Affordability. Corruption. Endless political theater.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
                  Most Americans agree these problems are real.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  The problem isn't awareness. The problem is leverage.
                </p>
              </div>

              {/* MOMENT BLOCK — Swappable */}
              <section className="moment-block bg-red/10 border border-red/30 rounded-lg p-3 sm:p-4 mb-4">
                <p className="text-red font-bold text-xs font-mono tracking-wider text-center mb-2">
                  ⚡ THIS MOMENT
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
                  Congress is home right now.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
                  Representatives are back in the districts that elect them.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
                  For a brief moment, organized districts matter more than usual.
                </p>
                <p className="text-green font-bold text-sm sm:text-base text-center mt-2">
                  That's an opportunity.
                </p>
              </section>

              {/* VIDEO */}
              <div className="rounded-lg overflow-hidden mb-4 border border-green/20">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/4E21x1kEGnk"
                    title="Connecting the Dots"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>

              {/* LEVERAGE */}
              <div className="bg-green/5 border border-green/20 rounded-lg p-4 mb-4">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Most petitions ask politicians to care.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  PHIERS measures whether a district can act together.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
                  A petition is a request.
                </p>
                <p className="text-green font-bold text-sm sm:text-base">
                  An organized district is power.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
                  500 people gets attention. 1,500 people changes behavior.
                </p>
              </div>

              {/* WHAT HAPPENS NEXT */}
              <div className="border-l-2 border-green pl-3 sm:pl-4 my-4">
                <p className="text-gray-400 text-xs font-mono tracking-wider mb-1">
                  WHAT HAPPENS NEXT
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  The petition tells us who's willing to stand up.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  The survey tells us what your district actually wants.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
                  Together they create something Congress almost never faces:
                </p>
                <p className="text-green font-bold text-sm sm:text-base">
                  A measurable constituency.
                </p>
              </div>

              {/* VISION */}
              <div className="bg-green/5 border border-green/20 rounded-lg p-4 mb-4">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Imagine Representatives knowing exactly what their district demands.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Imagine knowing they can't pretend they didn't hear it.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
                  Imagine healthcare, affordability, accountability, and other priorities backed by organized constituents instead of isolated voices.
                </p>
                <p className="text-green font-bold text-sm sm:text-base mt-2">
                  That's what PHIERS is building.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Not a petition. A constituency.
                </p>
              </div>

              {/* PRIMARY CTA */}
              {onSignPetition && (
                <button
                  onClick={onSignPetition}
                  className="w-full py-3 bg-white text-black rounded-lg text-base font-semibold hover:bg-gray-100 transition mb-3"
                >
                  Add Your Name — Be Counted In Your District
                </button>
              )}

              {/* Secondary Links */}
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={() => setShowWhy500Modal(true)}
                  className="text-green-400 text-sm sm:text-base underline hover:text-green-300 transition-colors"
                >
                  Why 500 Works →
                </button>
                <button
                  onClick={onShowFramework}
                  className="text-gray-400 text-sm sm:text-base underline hover:text-gray-300 transition-colors"
                >
                  Show Me How PHIERS Works →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WHY 500? MODAL */}
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
                <strong className="text-green">500 is the number that can change the Speaker in most congressional districts.</strong>
              </p>
              
              <p>
                It's the first step — the proof that a district can move together.  
                500 people organized around one thing is enough to force a meeting, force a position, and make leadership vulnerable.
              </p>
              
              <p>
                Once a district can organize 500, then 1,500 becomes possible —  
                and 1,500 is the number that can turn the people's agenda into law.
              </p>
              
              <p>
                They go hand in hand:  
                500 creates leverage over leadership.  
                1,500 creates power over legislation.
              </p>
              
              <div className="bg-green/5 border-l-4 border-green p-4 my-4 italic">
                <p className="mb-2">PHIERS is claiming: <strong>If 500 people can organize around one thing... like electing the next Speaker of the House</strong></p>
                <p className="mb-2">...then 1,500 can organize around another... like Article 25 or impeachment.</p>
                <p className="mb-2">Then districts can organize around healthcare, jobs, and rescinding tax cuts for the wealthy.</p>
                <p className="mb-2">Then around war powers. Then corruption. Then affordability.</p>
                <p className="mb-2">Everybody wins.</p>
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

  // FILE: components/TransitionModal.tsx