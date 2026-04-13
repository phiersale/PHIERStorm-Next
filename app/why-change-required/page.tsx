// FILE: app/why-change-required/page.tsx
// WHY CHANGE IS REQUIRED PAGE - The Case for Systemic Replacement

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function WhyChangeRequiredPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
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
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Case for Systemic Replacement</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Why Change <span className="text-red-500">Is Required</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[700px] mx-auto">
            The system isn't "broken." It's working exactly as designed — and that design is failing us.
          </p>

          <div className="max-w-[500px] mx-auto mt-6">
            <button onClick={() => openModal('/images/Opportunity_Knocks_.png')} className="cursor-pointer">
              <Image
                src="/images/Opportunity_Knocks_.png"
                alt="Opportunity Knocks"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-gray-500 text-xs text-center mt-1">Click to enlarge</p>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* The Design Failure */}
        <section className="container section">
          <p className="text-body text-lg mb-4">America isn't suffering from a series of isolated crises. We're suffering from a systemic design failure — a structure that produces:</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[500px] mx-auto mb-6">
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body text-sm">Unaffordable care</div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body text-sm">Unstable incomes</div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body text-sm">Disappearing jobs</div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body text-sm">Rising authoritarian risk</div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body text-sm">Political paralysis</div>
          </div>

          <p className="text-body mb-4">...not by accident, but by <strong className="text-white">architecture</strong>.</p>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5">
            <p className="text-body text-lg font-bold">This movement exists because the old design can't be patched anymore. It must be replaced — intelligently, peacefully, and at scale.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Congress Has the Power */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white mb-4">The Truth: <span className="text-green">Congress Has the Power.</span> They Just Refuse to Use It.</h2>
            <p className="text-body mb-4">Every crisis we're living through — healthcare, economic instability, job insecurity, political division — is solvable with the authority Congress already has.</p>
            <p className="text-body mb-3"><strong className="text-white">They could:</strong></p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="list-disc list-inside text-body space-y-2">
                <li>Authorize universal telehealth</li>
                <li>Lower costs overnight</li>
                <li>Redirect waste into UBI</li>
              </ul>
              <ul className="list-disc list-inside text-body space-y-2">
                <li>Stabilize people</li>
                <li>Create millions of jobs</li>
                <li>Protect democracy</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border-l-4 border-l-red-500 rounded-r-lg p-5 text-center mb-4">
              <p className="text-white text-lg font-bold">They simply choose not to.</p>
              <p className="text-body mt-2">Not because it's impossible. But because the current system rewards inaction.</p>
            </div>

            <p className="text-green font-bold text-xl text-center">That's why change is required.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* When Congress Failed */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">When Congress Failed in December <span className="text-red-500">Wasn't the Cause — It Was the Reveal</span></h2>
          <p className="text-body mb-4">When Congress let healthcare subsidies expire in December, it didn't "cause" the crisis. It <strong className="text-white">exposed</strong> it.</p>
          <p className="text-body mb-3">It showed the country that:</p>
          <ul className="list-disc list-inside text-body space-y-2 mb-6">
            <li>The safety net is fragile</li>
            <li>The system is reactive, not proactive</li>
            <li>Millions can lose care overnight</li>
            <li>Political incentives don't align with human needs</li>
          </ul>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5">
            <p className="text-body">The December failure was the moment the mask slipped. The crisis we're solving is the one unfolding now.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* One-Dimensional Government */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white mb-4">The Real Problem: <span className="text-red-500">A One-Dimensional Government</span> in a Multi-Dimensional World</h2>
            <p className="text-body mb-3">Congress still tries to solve 2026 problems with 1950 tools:</p>
            <ul className="list-disc list-inside text-body space-y-2 mb-4">
              <li>One bill for one issue</li>
              <li>One committee for one crisis</li>
              <li>One hearing for one symptom</li>
            </ul>

            <p className="text-body mb-3"><strong className="text-white">But our crises are interconnected:</strong></p>
            <div className="grid grid-cols-2 gap-2 max-w-[400px] mx-auto mb-6">
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body text-sm">Healthcare affects income</div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body text-sm">Income affects jobs</div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body text-sm">Jobs affect stability</div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body text-sm">Stability affects democracy</div>
              <div className="col-span-2 bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body text-sm">Democracy affects healthcare</div>
            </div>

            <div className="bg-red-500/10 border-l-4 border-l-red-500 rounded-r-lg p-5 text-center mb-4">
              <p className="text-white text-lg font-bold">You can't fix a 5-dimensional problem with a 1-dimensional mindset.</p>
            </div>

            <p className="text-green font-bold text-xl text-center">That's why change is required.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 5D Problem-Solving */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">The Solution: <span className="text-green">5D Problem-Solving</span></h2>
          <p className="text-body mb-3">5D Solutions work because they:</p>

          <div className="grid md:grid-cols-2 gap-3 max-w-[500px] mx-auto mb-6">
            <ul className="list-disc list-inside text-body space-y-2">
              <li>Solve multiple problems at once</li>
              <li>Reinforce each other</li>
              <li>Use minimum wasted motion</li>
            </ul>
            <ul className="list-disc list-inside text-body space-y-2">
              <li>Redirect existing resources</li>
              <li>Stabilize the system from the inside out</li>
            </ul>
          </div>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5 mb-4">
            <p className="text-body text-lg font-bold">This is not a wishlist. This is a systems upgrade.</p>
          </div>

          <p className="text-body">And it starts with the first domino: <strong className="text-white">universal telehealth authorization</strong>.</p>
        </section>

        <hr className="border-green/20" />

        {/* Can't Wait for Politics as Usual */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white mb-4">Why We Can't Wait for <span className="text-red-500">"Politics as Usual"</span></h2>
            <p className="text-body mb-3">The old political cycle is too slow:</p>
            <ul className="list-disc list-inside text-body space-y-2 mb-4">
              <li>Years of hearings</li>
              <li>Years of gridlock</li>
              <li>Years of delay</li>
              <li>Years of suffering</li>
            </ul>

            <p className="text-body mb-3"><strong className="text-white">Meanwhile:</strong></p>
            <div className="grid md:grid-cols-2 gap-3 max-w-[400px] mx-auto mb-6">
              <ul className="list-disc list-inside text-body">
                <li>Costs rise</li>
                <li>Jobs disappear</li>
              </ul>
              <ul className="list-disc list-inside text-body">
                <li>People collapse</li>
                <li>Authoritarianism grows</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border-l-4 border-l-red-500 rounded-r-lg p-5 text-center mb-4">
              <p className="text-white text-2xl font-bold">We don't have years. We have now.</p>
            </div>

            <p className="text-green font-bold text-xl text-center">That's why change is required.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 3.5% Is the Only Path Forward */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">Why <span className="text-gold">3.5%</span> Is the Only Path Forward</h2>
          <p className="text-body mb-4">Harvard research shows that when 3.5% of a population organizes, systemic change becomes:</p>

          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <span className="bg-bg-card border border-green rounded-full px-5 py-2 text-green font-condensed">Guaranteed</span>
            <span className="bg-bg-card border border-green rounded-full px-5 py-2 text-green font-condensed">Peaceful</span>
            <span className="bg-bg-card border border-green rounded-full px-5 py-2 text-green font-condensed">Non-negotiable</span>
            <span className="bg-bg-card border border-green rounded-full px-5 py-2 text-green font-condensed">Inevitable</span>
          </div>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5 text-center">
            <p className="text-body font-bold text-lg">This isn't theory. It's history.</p>
            <p className="text-body mt-2">3.5% is the ignition point — the moment Congress loses the ability to ignore the people.</p>
          </div>

          <p className="text-green font-bold text-xl text-center mt-4">That's why change is required.</p>
        </section>

        <hr className="border-green/20" />

        {/* Why This Movement Is Different */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white mb-4">Why This Movement <span className="text-green">Is Different</span></h2>
            <p className="text-body mb-3">We're not asking Congress to "care." We're not asking them to "do better." We're not asking them to "listen."</p>

            <p className="text-white text-xl text-center my-4"><strong>We're forcing them to act — or be replaced.</strong></p>

            <p className="text-body mb-3">Not with violence. Not with chaos. But with organized, district-level, unstoppable civic pressure.</p>

            <p className="text-green font-bold text-xl text-center mt-4">This is how real change happens.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Why Now — And Why Us */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">Why Now — <span className="text-green">And Why Us</span></h2>
          <p className="text-body mb-4">Because the crisis is here. Because the system is failing. Because the future is unstable. Because the stakes are rising. Because no one else is coming.</p>

          <p className="text-body mb-3"><strong className="text-white">And because we have:</strong></p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[500px] mx-auto mb-6">
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body">The math</div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body">The mechanism</div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body">The movement</div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-body">The moment</div>
          </div>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5 text-center">
            <p className="text-body text-lg font-bold">This is the first time in decades that a peaceful, scalable, intelligent solution has been possible.</p>
          </div>

          <p className="text-green font-bold text-xl text-center mt-4">That's why change is required.</p>
        </section>

        <hr className="border-green/20" />

        {/* Next Step */}
        <section className="container section">
          <div className="bg-blue-500/10 border-l-4 border-l-blue-500 rounded-r-lg p-8 text-center">
            <h2 className="font-display text-3xl text-blue-400 mb-4">Next Step → <span className="text-white">What We Demand</span></h2>
            <p className="text-body text-lg mb-3">We've shown the harm. We've shown the bottleneck. We've shown the necessity.</p>
            <p className="text-body mb-4">Now it's time to show the blueprint.</p>
            <Button href="/solutions" variant="primary">Continue to 5D Solutions →</Button>
          </div>
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

// END FILE: app/why-change-required/page.tsx
