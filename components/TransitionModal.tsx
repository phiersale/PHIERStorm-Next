  // FILE: components/TransitionModal.tsx
  // VERSION: 3.0 – FINAL FIX: No clipped content

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

    // Focus modal when opened so ESC key works
    useEffect(() => {
      if (showWhy500Modal) {
        const modal = document.querySelector('.why-500-modal')
        if (modal) (modal as HTMLElement).focus()
      }
    }, [showWhy500Modal])

    return (
      <>
        {/* Main Modal - Simple, no clipping */}
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm">
          <div className="min-h-screen pt-4 pb-16 px-4">
            <motion.div
              className="relative bg-[#0d1525] border border-green/20 rounded-2xl max-w-xl mx-auto shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {/* PHIERS Logo - Centered above hero image */}
              <div className="flex justify-center pt-3 pb-2">
                <img 
                  src="/images/PHIERS_Logo.png" 
                  alt="PHIERS Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-90"
                />
              </div>

              {/* HERO IMAGE - Full width, shows full image without cropping */}
              <div className="relative w-full overflow-hidden">
                <img 
                  src="/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg"
                  alt="Congress ignores you. 1,500 people in your district changes that."
                  className="w-full h-auto max-h-[45vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1525] via-[#0d1525]/40 to-transparent"></div>
              </div>

              {/* Content area */}
              <div className="p-6 pt-4">
                {/* Primary Text Block - Leverage-Focused Copy */}
                <div className="mb-6">
                  {/* THE MOMENT */}
                  <div className="mb-3">
                    <p className="text-gray-500 text-[9px] font-mono tracking-wider text-center border-b border-gray-800 pb-1 inline-block w-full">
                      THE MOMENT
                    </p>
                  </div>

                  <div className="text-center mb-4">
                    <p className="text-green text-xs font-mono tracking-wider mb-2">
                      THIS MOMENT IS DIFFERENT
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Congress was just sent home early.
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      That almost never happens.
                    </p>
                    <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                      Representatives who normally operate behind leadership, schedules, and procedure 
                      are suddenly back in their districts — where the people who elect them actually live.
                    </p>
                  </div>

                  {/* WHAT THE AP CONFIRMED */}
                  <div className="mb-3 mt-4">
                    <p className="text-gray-500 text-[9px] font-mono tracking-wider text-center border-b border-gray-800 pb-1 inline-block w-full">
                      WHAT THE AP CONFIRMED
                    </p>
                  </div>

                  <div className="bg-[#0a1628] rounded-lg p-3 mb-4 text-center border border-green/20">
                    <p className="text-gray-400 text-[10px] font-mono tracking-wider mb-1">
                      ASSOCIATED PRESS · JUNE 2026
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed font-medium">
                      "Speaker Sends House Back to Districts to Avoid a Vote"
                    </p>
                    <p className="text-green-400 text-[9px] mt-1 font-semibold">
                      ✓ Confirmed. Not speculation.
                    </p>
                    <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                      It happened. And moments like this create something rare: leverage.
                    </p>
                  </div>

                  {/* AP IMAGE - Visual proof */}
                  <div className="rounded-lg overflow-hidden mb-4 border border-green/20">
                    <Image
                      src="/images/speaker-johnson-house-districts.jpg"
                      alt="Speaker Johnson surrounded by press after sending the House home early to avoid a vote"
                      width={800}
                      height={450}
                      className="w-full h-auto"
                      unoptimized
                    />
                    <div className="bg-[#0a1628] text-center py-2">
                      <p className="text-gray-400 text-[10px] font-mono tracking-wider">
                        ASSOCIATED PRESS · JUNE 2026
                      </p>
                      <p className="text-gray-300 text-xs font-medium">
                        Speaker Johnson Sends House Back to Districts to Avoid a Vote
                      </p>
                    </div>
                  </div>

                  {/* WHY THIS MATTERS */}
                  <div className="mb-3 mt-4">
                    <p className="text-gray-500 text-[9px] font-mono tracking-wider text-center border-b border-gray-800 pb-1 inline-block w-full">
                      WHY THIS MATTERS
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      When Congress is in Washington, lobbyists have the advantage.
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mt-2">
                      When Congress is home, <span className="text-green font-semibold">districts matter.</span>
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed mt-2">
                      Representatives pay attention to what they can see, measure, and politically feel.
                      That's why organized people matter more than isolated opinions.
                    </p>
                  </div>

                  {/* THE FIRST STEP - Elevated petition framing */}
                  <div className="mb-3 mt-4">
                    <p className="text-gray-500 text-[9px] font-mono tracking-wider text-center border-b border-gray-800 pb-1 inline-block w-full">
                      THE FIRST STEP
                    </p>
                  </div>

                  <div className="bg-green/5 border border-green/20 rounded-lg p-4 mb-4 text-center">
                    <p className="text-gray-300 text-xs leading-relaxed mb-2">
                      <span className="text-green font-bold">The petition is not the goal.</span> The petition is proof.
                    </p>
                    <p className="text-gray-400 text-[11px] leading-relaxed">
                      Proof that people in a district are paying attention.<br />
                      Proof that they can move together.<br />
                      Proof that representatives may have to respond.
                    </p>
                    <p className="text-gray-400 text-[11px] leading-relaxed mt-2">
                      Every meaningful form of leverage starts the same way: people showing up together.
                    </p>
                  </div>

                  {/* PETITION BUTTON - MOVED HIGHER */}
                  {onSignPetition && (
                    <button
                      onClick={onSignPetition}
                      className="w-full py-3 bg-white text-black rounded-lg text-base font-semibold hover:bg-gray-100 transition mb-4"
                    >
                      Add Your Name — Be Counted in Your District
                    </button>
                  )}

                  {/* WHY 500? - Simplified, leverage-focused */}
                  <div className="mb-3 mt-4">
                    <p className="text-gray-500 text-[9px] font-mono tracking-wider text-center border-b border-gray-800 pb-1 inline-block w-full">
                      WHY 500?
                    </p>
                  </div>

                  <div className="border-l-2 border-green pl-3 my-3">
                    <p className="text-gray-400 text-xs leading-relaxed">
                      PHIERS is testing a simple idea: <span className="text-green font-semibold">If 500 people in a district can organize around one thing, they can organize around something larger.</span>
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed mt-2">
                      A town hall. A public commitment. A vote. Accountability.
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed mt-2">
                      500 is not the finish line. It's the first measurable demonstration that a district can act together.
                    </p>
                  </div>

                  {/* THE LADDER */}
                  <div className="mb-3 mt-4">
                    <p className="text-gray-500 text-[9px] font-mono tracking-wider text-center border-b border-gray-800 pb-1 inline-block w-full">
                      THE LADDER
                    </p>
                  </div>

                  <div className="border-l-2 border-green pl-3 my-3">
                    <p className="text-gray-400 text-xs leading-relaxed">
                      500 people proves a district can organize.<br />
                      1,500 people creates sustained district-level leverage.
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed mt-2">
                      And once leverage exists, representatives can no longer ignore what their constituents are demanding.
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed mt-2">
                      That's where the-system begins. <span className="text-green font-semibold">Not with politicians. With organized people.</span>
                    </p>
                  </div>

                  {/* THE HANDOFF */}
                  <div className="mb-3 mt-4">
                    <p className="text-gray-500 text-[9px] font-mono tracking-wider text-center border-b border-gray-800 pb-1 inline-block w-full">
                      THE HANDOFF
                    </p>
                  </div>

                  <p className="text-gray-500 text-[10px] mt-2 pt-2 border-t border-gray-800 text-center">
                    You've seen the evidence.<br />
                    You've seen why this moment matters.<br />
                    Now see what becomes possible when districts can act together.
                  </p>
                </div>

                {/* Secondary Links */}
                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={() => setShowWhy500Modal(true)}
                    className="text-green-400 text-sm underline hover:text-green-300 transition-colors"
                  >
                    Why 500 Works (deep dive) →
                  </button>
                  <button
                    onClick={onShowFramework}
                    className="text-gray-400 text-sm underline hover:text-gray-300 transition-colors"
                  >
                    Got it. Show me the framework →
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

  // FILE: components/TransitionModal.tsx