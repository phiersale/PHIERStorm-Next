// FILE: app/solutions/page.tsx - START

'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function SolutionsPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  // scrollToTop function with useCallback
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // playVideo wrapped in useCallback
  const playVideo = useCallback((videoId: string, src: string) => {
    const wrap = document.getElementById('wrap-' + videoId)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }, [])

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[120px] w-auto mb-5 flex justify-center">
            <Image
              src="/images/5D_Solutions_Rubiks_Cube.png"
              alt="PHIERS 5D Solutions Rubik's Cube — five interconnected dimensions: healthcare, jobs, economy, politics, and peace"
              width={120}
              height={120}
              className="opacity-90"
            />
          </div>
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">5D Solutions</span>
          {/* Two-tone H1 - FIXED */}
          <h1 className="mb-4">
            <span className="hero-white">Real Reform Requires</span>
            <br />
            <span className="hero-green">5-Dimensional Strategy.</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[680px] mx-auto mb-3">
            Congress keeps patching symptoms. One bill here. One program there. That's why nothing changes. PHIERS fixes the system that creates them.
          </p>
          <div className="bg-bg-card border border-green/20 rounded-r-lg p-4 mx-auto max-w-[680px] text-left text-base border-l-4 border-l-green">
            PHIERS is a citizen coalition using collective leverage to force Congress to fix healthcare — or replace them.
          </div>
          <div className="flex flex-col md:flex-row gap-3 justify-center mt-6">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
          </div>
          <p className="text-sm text-gray-500 italic mt-4">One movement. Five interconnected solutions. Zero wasted motion.</p>
        </div>

        <hr className="border-green/20" />

        {/* How It Works Graphic */}
        <section className="container section text-center">
          <div className="max-w-[500px] mx-auto">
            <button onClick={() => openModal('/images/How_It_Works.png')} className="cursor-pointer">
              <Image
                src="/images/How_It_Works.png"
                alt="How PHIERS 5D Solutions Work"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
          </div>
        </section>

        {/* Cascade Mechanism Video */}
        <section className="container section text-center">
          <p className="font-condensed font-bold text-green text-sm uppercase tracking-wider mb-2">CASCADE MECHANISM</p>
          <p className="text-gray-400 text-sm mb-4">Why Congress Can't Ignore PHIERS (3:33)</p>
          <div className="video-container max-w-[800px] mx-auto">
            <div id="wrap-cascade" className="video-wrapper cursor-pointer group" onClick={() => playVideo('cascade', 'https://www.youtube.com/embed/jMU6LKEBzbs?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/jMU6LKEBzbs/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2">The exponential cascade that makes universal coverage inevitable.</p>
        </section>

        <hr className="border-green/20" />

        {/* Philosophy */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Philosophy</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">We Don't Fix One Crisis at a Time.<br /><span className="text-green">We Fix the System That Creates Them.</span></h2>
          <p className="text-body mb-3">Congress patches problems. One bill here. One program there. That's why nothing changes.</p>
          <p className="text-body mb-3"><strong className="text-white">PHIERS solves all five crises simultaneously.</strong></p>
          <p className="text-body mb-3">Healthcare crisis → unlocks jobs → unlocks safety net → unlocks opportunity → unlocks guardrails. Each dimension reinforces the others.</p>
          <p className="text-lg text-white font-semibold my-4"><strong>This isn't a policy list. This is survival architecture.</strong></p>
          <p className="text-body">And it starts with one domino.</p>
        </section>

        <hr className="border-green/20" />

        {/* Anchor Line - ADDED */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* First Domino - UPDATED */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The First Domino</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-3">Telehealth for <span className="text-green">All.</span></h2>
          <p className="font-condensed text-lg text-white font-semibold mb-3">The fastest, cheapest, most scalable way to deliver care — today.</p>
          <p className="text-body mb-3">Telehealth already delivers:</p>
          <ul className="list-disc list-inside text-body mb-4 space-y-1">
            <li>Faster care</li>
            <li>Cheaper care</li>
            <li>Fewer denials</li>
            <li>Broader access</li>
            <li>Better outcomes</li>
          </ul>
          <p className="text-body mb-3">Congress could authorize $600 of telehealth coverage right now — instantly lowering costs for millions.</p>
          <p className="text-red-500 font-bold mb-3"><strong>They refuse to.</strong></p>
          <p className="text-green font-bold text-lg mb-3">So we're forcing the issue.</p>
          <p className="text-body">Once telehealth is authorized, everything else becomes possible.</p>
        </section>

        <hr className="border-green/20" />

        {/* The Cascade */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Cascade</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">How One Fix Unlocks <span className="text-green">Everything Else.</span></h2>
          <p className="text-body mb-3"><strong className="text-white">This is why Congress is terrified:</strong></p>
          <div className="bg-green-glow border border-green/20 rounded-xl p-5 mb-4">
            <p className="text-lg text-white font-bold text-center"><strong>Fix healthcare → unlock jobs → unlock safety net → unlock opportunity → unlock guardrails.</strong></p>
            <p className="text-center text-body mt-3">No new taxes. No new bureaucracy. Just one domino falling forward.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What We Demand */}
        <section className="container section" id="what-we-demand">
          <span className="font-condensed font-bold text-blue-500 text-sm uppercase tracking-wider block mb-3">What We Demand</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Five Dimensions.<br /><span className="text-blue-500">One Unified Movement.</span></h2>
          <p className="text-body mb-4">We're not here to beg Congress for scraps. We're here to force the only intelligent, interconnected, minimum-wasted-motion plan that solves multiple national crises at once.</p>
          <p className="text-body mb-3"><strong className="text-white">These aren't random policies. These are five dimensions of the same solution</strong> — each one unlocking the next, each one reinforcing the others.</p>
          <p className="text-green font-bold text-base mb-6">This is the 5D Blueprint for a stable, healthy, prosperous America.</p>

          {/* Demand 1 */}
          <div className="bg-bg-card border border-green/20 rounded-xl p-5 mb-4">
            <h3 className="font-condensed font-bold text-xl text-green mb-2">1. Telehealth for everyone — right now</h3>
            <p className="text-sm text-gray-400 italic mb-2">The first domino. The fastest fix. The ignition point.</p>
            <p className="text-body mb-2"><strong className="text-white">Congress must authorize $600 of telehealth coverage for every American, immediately.</strong></p>
            <p className="text-body mb-2"><strong className="text-white">Why?</strong> Because telehealth is cheaper, faster, more accessible, less bureaucratic, less corruptible, and already working.</p>
            <p className="text-green font-bold text-sm mt-2">This is the entry point to universal care — not in theory, but in practice.</p>
            <p className="text-body mt-2">Once telehealth is authorized, the entire 5D cascade becomes possible. <strong className="text-white">This is the lever.</strong></p>
          </div>

          {/* Demand 2 - Full Coverage */}
          <div className="bg-bg-card border border-green/20 rounded-xl p-5 mb-4">
            <h3 className="font-condensed font-bold text-xl text-green mb-2">2. Full coverage — in under a year</h3>
            <p className="text-sm text-gray-400 italic mb-2">Telehealth is the on-ramp. Universal care is the destination.</p>
            <p className="text-body mb-2">Once everyone has access to basic care, the cost of full coverage drops dramatically.</p>
            <p className="text-green font-bold text-sm mt-2">Universal healthcare is no longer a 10-year dream. It becomes an 8–13 month inevitability.</p>
            <p className="text-body mt-2">This isn't ideology. It's math. And it's the foundation for everything that comes next.</p>
          </div>

          {/* Demand 3 - UBI - UPDATED */}
          <div className="bg-bg-card border border-green/20 rounded-xl p-5 mb-4">
            <h3 className="font-condensed font-bold text-xl text-green mb-2">3. A monthly check — funded by savings, not taxes</h3>
            <p className="text-sm text-gray-400 italic mb-2">Funded by the $2.73 trillion we're already wasting.</p>
            <p className="text-body mb-2">The $2.73T isn't "new spending." It's the money we're already losing to administrative waste, denials, inflated drug prices, middlemen, profit extraction, and inefficiency baked into the system.</p>
            <p className="text-body mb-2"><strong className="text-white">We're not asking Congress to raise taxes.</strong> We're asking them to stop burning money and redirect the savings into:</p>
            <ul className="list-disc list-inside text-body mb-2 space-y-1">
              <li>A national UBI</li>
              <li>Economic stability</li>
              <li>Entrepreneurship</li>
              <li>Resilience</li>
              <li>Dignity</li>
            </ul>
            <p className="text-green font-bold text-sm mt-2">This is how we stabilize people — permanently.</p>
          </div>

          {/* Demand 4 - Jobs */}
          <div className="bg-bg-card border border-green/20 rounded-xl p-5 mb-4">
            <h3 className="font-condensed font-bold text-xl text-green mb-2">4. Millions of AI-Resistant Jobs</h3>
            <p className="text-sm text-gray-400 italic mb-2">Stability creates capacity. Capacity creates opportunity.</p>
            <p className="text-body mb-2">When people have healthcare, income stability, and breathing room, they can retrain, relocate, start businesses, fill essential roles, and build new industries.</p>
            <p className="text-green font-bold text-sm mt-2">This is how we create millions of jobs that automation can't erase. This is how we rebuild the middle class.</p>
          </div>

          {/* Demand 5 - Democracy - UPDATED */}
          <div className="bg-bg-card border border-green/20 rounded-xl p-5 mb-4">
            <h3 className="font-condensed font-bold text-xl text-green mb-2">5. Stop presidents from acting like kings</h3>
            <p className="text-sm text-gray-400 italic mb-2">Economic stability is political stability.</p>
            <p className="text-body mb-2">When people are healthy, housed, fed, stable, and secure, they are harder to manipulate, harder to divide, harder to radicalize, and harder to control.</p>
            <p className="text-green font-bold text-sm mt-2">Economic stability is the strongest defense against authoritarian drift.</p>
            <p className="text-body mt-2">This is how we protect democracy — not with speeches, but with material stability.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 5D Loop */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The 5D Loop</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">A Loop, <span className="text-green">Not a Line.</span></h2>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/PHIERS_5D_Solutions.png')} className="cursor-pointer">
              <Image
                src="/images/PHIERS_5D_Solutions.png"
                alt="PHIERS 5D Solutions Framework"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">Fundamentals • Distribution • Digital • Demand • Direct Pay → Affordable Healthcare</p>
          </div>

          <div className="bg-green-glow border border-green/20 rounded-xl p-5">
            <ul className="space-y-2 text-body mb-3">
              <li>✓ Healthcare savings fund UBI</li>
              <li>✓ UBI fuels job creation</li>
              <li>✓ Job creation stabilizes democracy</li>
              <li>✓ Stability strengthens healthcare</li>
              <li>✓ Healthcare reduces costs further</li>
            </ul>
            <p className="text-center text-green font-bold"><strong>Self-reinforcing progress — the opposite of the downward spiral we're in now.</strong></p>
          </div>

          <p className="text-center text-lg font-bold mt-6"><strong>This is the soul of the movement.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* Drug Costs */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">On Drug Costs</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">$2.73T Savings →<br /><span className="text-green">Universal Basic Income.</span></h2>
          <p className="text-body mb-4">Once healthcare stops draining people, employers, and government budgets, the savings become the fuel for economic stability, entrepreneurship, resilience, and dignity.</p>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/Drug_DEV_Costs__UAEM.png')} className="cursor-pointer">
              <Image
                src="/images/Drug_DEV_Costs__UAEM.png"
                alt="Drug Development Cost Comparison - Academic vs Big Pharma"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">Academic labs develop drugs at 1/24th the cost. Big Pharma just charges more.</p>
          </div>

          <p className="text-green font-bold">This isn't charity. It's returning the value we're already creating.</p>
        </section>

        <hr className="border-green/20" />

        {/* Timeline - UPDATED (no March 28/July 4) */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Timeline</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">From 3.5% to <span className="text-gold">Victory.</span></h2>
          <p className="text-body mb-6">We're not asking for miracles. We're following the math.</p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white text-lg">Step 1 — 3.5% Threshold Reached</p>
              <p className="text-body">This forces Congress to authorize the telehealth cascade.</p>
            </div>
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white text-lg">Step 2 — Authorization → Exponential Growth</p>
              <p className="text-body mb-2">Once authorized, the cascade grows automatically:</p>
              <p className="font-condensed text-sm text-gold font-mono">1 → 12 → 148 → 1,776 → 21,312 → 255,744 → 3,068,928 → 36,827,136 → 442,000,000+</p>
              <p className="text-body mt-2">This is how systems scale.</p>
            </div>
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white text-lg">Step 3 — Critical Mass Reached</p>
              <p className="text-body">Not because of hope. Because of math.</p>
            </div>
          </div>

          <p className="text-center text-body"><strong className="text-white">That's the arc. That's the meaning. That's the movement.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6">
            <h2 className="font-display text-3xl text-white mb-3">Congress Ignored All Five Dimensions.<br /><span className="text-blue-500">We're Fixing Them Anyway.</span></h2>
            <p className="text-body mb-4">The cascade starts when you act:</p>
            <div className="bg-white/5 p-4 rounded-lg mb-4">
              <p className="text-white font-bold text-center">Sign → Force Telehealth → Trigger 5D Cascade → 234M Covered → System Fixed</p>
            </div>
            <p className="text-body mb-6">This is survival math. And it starts with you.</p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Button href="/action" variant="primary">Force Congress to Act</Button>
              <Button href="/petition" variant="secondary">✍ Sign the Petition</Button>
            </div>
          </div>
        </section>

        {/* Page Navigation */}
        <div className="container flex justify-between items-center py-6 border-t border-green/20 mt-8">
          <Link href="/simple-math" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            ← Back to Simple Math
          </Link>
          <Link href="/buying-power" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            Next: Buying Power →
          </Link>
        </div>
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

      {/* Back-to-top button - FIXED to use scrollToTop */}
      <button 
        onClick={scrollToTop}
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
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          border: 2px solid rgba(61, 220, 132, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }
        .video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
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

// END FILE: app/solutions/page.tsx
