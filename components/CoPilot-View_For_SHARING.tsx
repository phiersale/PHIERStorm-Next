// FILE: components/TransitionModal.tsx
// VERSION: 4.0 – CREDIBILITY → OPPORTUNITY → SOLUTION

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
              {/* --- NEW HEADLINE --- */}
              <div className="text-center mb-4">
                <p className="text-green text-xs font-mono tracking-wider mb-2">
                  THIS MOMENT IS DIFFERENT
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  You've seen the evidence.
                  <br />
                  <span className="text-green">Now see the solution.</span>
                </h2>
              </div>

              {/* --- VIDEO EMBED --- */}
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

              {/* --- BODY COPY: Credibility → Mechanism --- */}
              <div className="mb-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                <p>
                  For more than twenty years, researchers, advocates, journalists, physicians, economists, and former public officials have documented the same problems.
                </p>
                <p>
                  The question is no longer whether the problems are real. 
                  <span className="text-green font-semibold"> The question is whether ordinary people can organize around solutions that already exist.</span>
                </p>

                <div className="bg-green/5 border border-green/20 rounded-lg p-4 my-3">
                  <p className="text-gray-300 text-sm">
                    <span className="text-green font-bold">PHIERS</span> combines two things:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mt-2">
                    <li>A way for districts to organize.</li>
                    <li>A way for Congress to see exactly what constituents want.</li>
                  </ul>
                </div>

                {/* FINANCIAL SEED */}
                <div className="bg-indigo-950/30 border-l-4 border-indigo-400 p-3 my-3">
                  <p className="text-gray-300 text-xs leading-relaxed">
                    💡 Congress already spends roughly <span className="text-white font-semibold">$10,000 per beneficiary</span> on many forms of healthcare coverage. 
                    Modern telehealth systems can deliver most everyday care for <span className="text-green font-semibold">a fraction of that cost</span>.
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed mt-1">
                    The challenge is no longer technology. <span className="text-white font-semibold">The challenge is political will.</span>
                  </p>
                </div>

                {/* URGENCY BLOCK */}
                <div className="bg-red-950/30 border border-red-800/50 rounded-lg p-4 my-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">⚡</span>
                    <div>
                      <p className="text-red-300 font-bold text-xs uppercase tracking-wider">Why This Week Matters</p>
                      <p className="text-gray-300 text-sm">
                        Members of Congress are currently back in their districts. 
                        <span className="text-white font-semibold"> June 15–22 is the one week</span> when constituents matter more than the normal machinery of Washington.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 500/1,500 BLOCK */}
                <div className="bg-gray-800/30 rounded-lg p-4 grid grid-cols-2 gap-4 text-center border border-gray-700/50">
                  <div>
                    <div className="text-3xl font-bold text-green">500</div>
                    <p className="text-xs text-gray-400 font-medium">Signatures gets attention.</p>
                    <p className="text-[10px] text-gray-500">Your representative knows you're watching.</p>
                  </div>
                  <div className="border-l border-gray-700 pl-4">
                    <div className="text-3xl font-bold text-green">1,500</div>
                    <p className="text-xs text-gray-400 font-medium">Demonstrates organization.</p>
                    <p className="text-[10px] text-gray-500">Creates real leverage they can't ignore.</p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 text-center">
                  Organized districts can influence far more people than those initial signers. That's where leverage begins.
                </p>
              </div>

              {/* --- CTA BUTTONS --- */}
              {onSignPetition && (
                <button
                  onClick={onSignPetition}
                  className="w-full py-3 bg-green text-black rounded-lg text-base font-bold hover:bg-green-dim transition mb-3"
                >
                  Add Your Name — Be Counted in Your District
                </button>
              )}

              <button
                onClick={() => setShowWhy500Modal(true)}
                className="w-full py-2.5 border border-green/30 text-green text-sm font-medium rounded-lg hover:bg-green/10 transition mb-2"
              >
                Organize Your District →
              </button>

              {/* Secondary Links */}
              <div className="flex flex-col items-center gap-2 mt-3 pt-3 border-t border-gray-800">
                <button
                  onClick={() => setShowWhy500Modal(true)}
                  className="text-green-400 text-xs underline hover:text-green-300 transition-colors"
                >
                  Why 500 Works (deep dive) →
                </button>
                <button
                  onClick={onShowFramework}
                  className="text-gray-400 text-xs underline hover:text-gray-300 transition-colors"
                >
                  Show me the solution →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WHY 500? POPUP MODAL - Keep as-is, it's fine */}
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
                1,500 creates leverage over legislation.
              </p>
              
              <div className="bg-green/5 border-l-4 border-green p-4 my-4 italic">
                <p className="mb-2">PHIERS is claiming: <strong>If 500 people can organize around one thing... like electing the next Speaker of the House</strong></p>
                <p className="mb-2">...then 1,500 can organize around another... like Article 25 or impeachment.</p>
                <p className="mb-2">Then districts can organize around healthcare, jobs, and rescinding tax cuts for the wealthy.</p>
                <p className="mb-2">Then around war powers. Then corruption. Then affordability.</p><br/>
                <p className="mb-2">Everybody wins.</p><br/>
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
