// FILE: app/action/page.tsx
// ACTION PAGE - Your Name Is Leverage

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function ActionPage() {
  const [copySuccess, setCopySuccess] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  const copyPetitionLink = () => {
    navigator.clipboard.writeText('https://phiers.org/petition')
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  const shareText = "I just added my name to PHIERS — a district-level pressure system that forces Congress to respond. Add your name: https://phiers.org/petition"

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://phiers.org/petition')}&quote=${encodeURIComponent(shareText)}`, '_blank')
  }

  const shareOnX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank')
  }

  const shareViaText = () => {
    window.open(`sms:?body=${encodeURIComponent(shareText)}`, '_blank')
  }

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=I just added my name to PHIERS&body=${encodeURIComponent(shareText)}`
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[80px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={80}
              height={80}
              className="opacity-90"
            />
          </div>
          <div className="font-condensed font-bold text-gold text-sm uppercase tracking-wider block mb-3">PHIERS — Your Name. Your District. On the Record.</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Your Name Is<br /><span className="text-green">Leverage.</span><br />Add It.
          </h1>
          <p className="font-condensed text-xl text-gold tracking-wide mb-4">One action. Three moves. Real leverage.</p>
          <p className="text-body mb-2">This is where your signature becomes leverage.</p>
          <p className="text-body mb-4">Everything here turns public frustration into coordinated leverage.</p>

          <div className="bg-green-glow border border-green/20 rounded-lg p-4 mb-4 max-w-[600px] mx-auto">
            <p className="font-condensed font-bold text-green text-base">
              One coordinated action — done by millions —<br />
              creates leverage Congress cannot ignore.
            </p>
          </div>

          <p className="text-body mb-2">Systems don't change because people yell.<br />They change when people organize behind the same demand.</p>
          <p className="text-body mb-4">Real people. Real districts. Names on the record — in a way elected officials cannot ignore.</p>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-4 max-w-[600px] mx-auto">
            <p className="font-condensed font-bold text-green text-base">Here's how you take part.</p>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Section Label */}
        <p className="font-condensed font-bold text-white text-base text-center mb-6 max-w-[760px] mx-auto px-6">
          This is one coordinated action — done in three quick moves.
        </p>

        {/* Step 1 - Sign the Petition */}
        <section className="container section">
          <div className="bg-bg-card border border-green/20 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green" />
            <div className="flex items-center gap-4 mb-4">
              <div className="font-display text-4xl text-green">1</div>
              <div className="font-condensed font-bold text-gray-500 text-xs uppercase tracking-wider">Step 1 — Start the Action</div>
            </div>
            <h2 className="font-display text-3xl text-white mb-3">Sign the Petition</h2>
            <p className="text-body mb-3">A signature isn't symbolic — it counts. It shows exactly how many people in your district want the same fix.</p>
            <p className="text-body mb-3">When your name is on the record, they can't pretend they didn't hear you.<br />When enough neighbors sign, the pressure becomes real.</p>

            <div className="bg-bg-card2 border border-green/20 rounded-lg p-4 my-4">
              <p className="font-condensed font-bold text-white text-sm"><strong className="text-green">When 1,500 people in your district sign,</strong> a mandatory town hall is triggered — and your representative must show up, answer publicly, and respond under real electoral pressure.</p>
            </div>

            <p className="text-body mb-3">Researchers studying hundreds of movements found that when about 3.5% of a population acts together — roughly 12 million Americans — governments historically have to respond.</p>
            <p className="text-gray-500 text-sm italic mb-4">Thirty seconds. That's where leverage begins.</p>

            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
          </div>
        </section>

        {/* Step 2 - Take the Survey */}
        <section className="container section">
          <div className="bg-bg-card border border-green/20 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green" />
            <div className="flex items-center gap-4 mb-4">
              <div className="font-display text-4xl text-green">2</div>
              <div className="font-condensed font-bold text-gray-500 text-xs uppercase tracking-wider">Step 2 — Strengthen the Signal</div>
            </div>
            <h2 className="font-display text-3xl text-white mb-3">Take the Survey</h2>
            <p className="text-body mb-2">Tell us what's hitting your family the hardest. Tell us what you want fixed first.</p>
            <p className="font-condensed font-bold text-gray-500 text-sm mb-3">Because if it's not written down, it gets ignored.</p>
            <p className="font-condensed font-bold text-white text-base mb-2">Healthcare. Wages. Housing. Peace. Stability.</p>
            <p className="text-body mb-3">Your answers get compiled with everyone else in your district and delivered directly to your representative — showing them what their constituents need, not what their donors want.</p>

            <div className="bg-bg-card2 border border-green/20 rounded-lg p-4 my-4">
              <p className="text-white text-sm"><strong>When your rep walks into that town hall, they'll be holding your district's priorities. Not a talking point. Yours.</strong></p>
            </div>

            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform?usp=header" variant="primary">📋 Tell Us What Matters →</Button>
          </div>
        </section>

        {/* Step 3 - Grow the Movement */}
        <section className="container section">
          <div className="bg-bg-card border border-green/20 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green" />
            <div className="flex items-center gap-4 mb-4">
              <div className="font-display text-4xl text-green">3</div>
              <div className="font-condensed font-bold text-gray-500 text-xs uppercase tracking-wider">Step 3 — Multiply the Pressure</div>
            </div>
            <h2 className="font-display text-3xl text-white mb-3">Grow the Movement</h2>
            <p className="text-body mb-3">You know people who are angry and don't know where to put it. Send them here.</p>
            <p className="text-body mb-3">Every person who signs increases the pressure in your district. Every survey adds to the evidence Congress cannot ignore. Every share brings us closer to the number history says governments have to respond to.</p>
            <p className="text-body mb-2"><strong className="text-white">Share it with people in your district first — that's where the pressure counts.</strong></p>
            <p className="text-gray-500 italic text-sm mb-4">This isn't about going viral. It's about coordination.</p>

            <div className="bg-bg-card2 border border-green/20 rounded-lg p-4 my-4">
              <p className="text-white text-sm"><strong>Share this with five people. That's how movements grow.</strong></p>
            </div>

            {/* Share Buttons */}
            <div className="bg-bg-dark border border-green/20 rounded-xl p-4 my-4">
              <p className="text-gray-300 text-sm mb-2">Share this:</p>
              <div className="bg-bg-deep p-3 rounded-lg mb-3">
                <p className="text-gray-400 text-xs">I just added my name to PHIERS — a district-level pressure system that forces Congress to respond.</p>
                <p className="text-green text-xs mt-1">Add your name: https://phiers.org/petition</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button onClick={copyPetitionLink} className="px-3 py-2 bg-green text-bg-deep rounded-lg font-condensed font-bold text-sm hover:bg-green-dim transition-all">
                  📣 {copySuccess ? 'Copied!' : 'Copy Link'}
                </button>
                <button onClick={shareOnFacebook} className="px-3 py-2 bg-[#1877f2] text-white rounded-lg font-condensed font-bold text-sm hover:opacity-90 transition-all">Facebook</button>
                <button onClick={shareOnX} className="px-3 py-2 bg-black text-white rounded-lg font-condensed font-bold text-sm hover:bg-gray-800 transition-all">X</button>
                <button onClick={shareViaText} className="px-3 py-2 bg-[#34b7f1] text-white rounded-lg font-condensed font-bold text-sm hover:opacity-90 transition-all">Text</button>
                <button onClick={shareViaEmail} className="px-3 py-2 bg-gray-600 text-white rounded-lg font-condensed font-bold text-sm hover:bg-gray-500 transition-all">Email</button>
              </div>
            </div>

            <p className="text-body text-sm mt-3">Send to:</p>
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              <span className="text-xs text-gray-500 bg-bg-card px-3 py-1 rounded-full">→ Friends</span>
              <span className="text-xs text-gray-500 bg-bg-card px-3 py-1 rounded-full">→ Family</span>
              <span className="text-xs text-gray-500 bg-bg-card px-3 py-1 rounded-full">→ Coworkers</span>
              <span className="text-xs text-gray-500 bg-bg-card px-3 py-1 rounded-full">→ Group chats</span>
              <span className="text-xs text-gray-500 bg-bg-card px-3 py-1 rounded-full">→ Anyone tired of nothing changing</span>
            </div>
            <p className="text-gray-500 text-xs">Not to convince them. To count them.</p>

            <div className="mt-4">
              <Button href="/action" variant="secondary" fullWidth>📣 Share This With 5 People in Your District →</Button>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Why Your Action Matters */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Why Your Action Matters</span>
            <p className="font-condensed font-bold text-white text-lg mb-4">All of these problems persist for the same reason:<br /><span className="text-green">Congress isn't under enough pressure to act.</span></p>

            <div className="space-y-3 mb-6">
              <div className="bg-bg-card border-l-3 border-l-red-500 rounded-r-lg p-3">
                <p className="text-body text-sm">Healthcare costs are rising. Housing costs are rising. Groceries cost more every week.</p>
              </div>
              <div className="bg-bg-card border-l-3 border-l-red-500 rounded-r-lg p-3">
                <p className="text-body text-sm">Families are working harder than ever — and still falling behind.</p>
              </div>
              <div className="bg-bg-card border-l-3 border-l-red-500 rounded-r-lg p-3">
                <p className="text-body text-sm">Unauthorized wars are draining over <strong className="text-white">$1 billion every single day</strong> — no vote, no mandate, no end in sight.</p>
              </div>
            </div>

            <p className="text-body mb-3">These problems are connected — because the cause is the same.</p>
            <p className="text-body mb-3">And so is the solution: one coordinated public action that creates enough pressure to force Congress to act — on healthcare, war, and the cost of living — at the same time.</p>
            <p className="text-body mb-3">Healthcare is the clearest proof the system works — and the fastest way to build the leverage that applies to everything else. The same organized pressure that forces healthcare reform forces war accountability, economic justice, and every demand that follows.</p>
            <p className="font-condensed font-bold text-white text-lg mt-4">Moments like this go one of two ways. Systems break. Or systems realign.</p>
            <p className="text-body">Realignment doesn't happen by itself. It takes people moving together.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What Happens Next */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What Happens Next</span>
          <h2 className="font-display text-3xl text-white mb-4">District by District.<br /><span className="text-gold">Step by Step.</span></h2>
          <p className="text-body mb-6">As more people join, results are organized district by district and delivered directly to Congress.</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-bg-card border border-green/20 rounded-xl p-4">
              <p className="font-condensed font-bold text-green text-sm mb-2">When your district hits 1,500</p>
              <ul className="space-y-1">
                <li className="text-body text-sm">→ A public town hall is organized</li>
                <li className="text-body text-sm">→ Your rep gets the data and must answer publicly</li>
                <li className="text-body text-sm">→ Local media starts asking questions</li>
                <li className="text-body text-sm">→ Neighbors start talking</li>
              </ul>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4">
              <p className="font-condensed font-bold text-green text-sm mb-2">When we reach 12 million</p>
              <ul className="space-y-1">
                <li className="text-body text-sm">→ Congress is forced to respond — not to one issue, but to the same organized public applying pressure across all of them</li>
                <li className="text-body text-sm">→ That's what 3.5% does. One lever. Multiple outcomes.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <div className="border-b border-green/20 py-2 font-condensed font-bold text-white">One district creates <span className="text-green">attention.</span></div>
            <div className="border-b border-green/20 py-2 font-condensed font-bold text-white">Many districts create <span className="text-green">pressure.</span></div>
            <div className="py-2 font-condensed font-bold text-white">Enough districts create <span className="text-green">obligation.</span></div>
          </div>

          <p className="text-body"><strong className="text-white">On Election Day 2026, every voter will know exactly who showed up — and who didn't.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section">
          <div className="bg-bg-card border border-green/20 rounded-xl p-8 text-center">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Make Your Voice Heard</span>
            <h2 className="font-display text-3xl text-white mb-4">When enough Americans stand behind the same demand, Congress has two choices:</h2>

            <div className="mb-6">
              <div className="font-display text-5xl text-green mb-2">Act.</div>
              <div className="font-display text-3xl text-gray-500">Or face voters who will replace them<br />with someone who will.</div>
            </div>

            <p className="font-condensed font-bold text-white text-lg mb-3">Congress won't fix itself. But we will fix it for them.</p>
            <p className="font-condensed font-bold text-white text-base mb-6">
              One action starts it.<br />
              Three moves build it.<br />
              3.5% forces it.
            </p>

            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform?usp=header" variant="secondary">📋 Tell Us What Matters</Button>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="container section text-center">
          <p className="font-condensed font-bold text-lg text-gray-500 leading-relaxed">
            <span className="text-green">Direction</span> brings people together.<br />
            People together create <span className="text-green">pressure.</span><br />
            Pressure creates <span className="text-green">change.</span>
          </p>
          <p className="text-gray-500 text-sm mt-4">Your name. Your district. Your priorities.<br /><em>That's how leverage starts.</em></p>
          <div className="font-display text-3xl text-green mt-6">#PHIERdUpNow</div>
        </section>
      </main>

      <Footer />

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white text-3xl cursor-pointer hover:text-green transition-colors"
              >
                ✕
              </button>
              <Image
                src={modalImage}
                alt="Enlarged view"
                width={800}
                height={600}
                className="rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

      <style jsx global>{`
        .back-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--green);
          color: var(--bg-deep);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 150ms ease;
          z-index: 999;
          border: none;
        }
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        .back-to-top:hover {
          background: #2ab568;
          transform: translateY(-2px);
        }
        .bg-green-glow {
          background: rgba(61, 220, 132, 0.06);
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            var btt = document.getElementById('back-to-top');
            if (btt) {
              if (window.scrollY > 400) {
                btt.classList.add('visible');
              } else {
                btt.classList.remove('visible');
              }
            }
          });
        `
      }} />
    </>
  )
}

// END FILE: app/action/page.tsx
