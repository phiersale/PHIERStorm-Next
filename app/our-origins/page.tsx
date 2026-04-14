// FILE: app/our-origins/page.tsx - UPDATED (Tiers 1-7)

'use client'

import { useState, useCallback } from 'react'  // ✓ Added useCallback
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function OurOriginsPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  // ✓ Added scrollToTop function
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

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
          <div className="relative h-[100px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={100}
              height={100}
              className="opacity-90"
            />
          </div>
          {/* ✓ Fixed two-tone H1 */}
          <h1 className="mb-4">
            <span className="hero-white">Our Origins:</span>
            <br />
            <span className="hero-green">The Full Story</span>
          </h1>
          <p className="font-condensed text-lg text-white mb-2">PHIERS means Power Held In Every Representative's Seat.</p>
          <p className="text-gray-500 text-sm mb-2">Not a slogan. A solution. Something real.</p>
          <p className="font-condensed text-base text-gray-400 mb-4">Since 2009. Not competing, but amplifying.</p>
          <p className="text-white text-base">Making America Better And Healthier</p>
        </div>

        <hr className="border-green/20" />

        {/* ✓ Anchor line already present - keeping as is */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Why This Page Exists */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">⚡ We Are "Intelligent Glue" — Not Another Healthcare Startup</h2>
          <p className="text-body mb-4">PHIERS isn't here to compete with ZORTT, Mark Cuban's Cost Plus Drugs, or anyone else building healthcare solutions.</p>

          <div className="bg-green-glow border-2 border-green rounded-xl p-6 text-center mb-6">
            <p className="text-green text-lg font-bold">We're the connective infrastructure that makes existing solutions work better together.</p>
          </div>

          <p className="text-body mb-3"><strong className="text-white">What "Intelligent Glue" means:</strong></p>
          <ul className="list-disc list-inside text-body space-y-2 mb-4">
            <li>We connect telehealth platforms → more patients reach them</li>
            <li>We amplify Cost Plus Drugs → 234M people get their pricing</li>
            <li>We organize worker power → unions get healthcare leverage</li>
            <li>We build political pressure → Congress forced to implement solutions</li>
            <li>We create economic cascade → savings fund jobs, UBI, and universal coverage</li>
          </ul>

          <p className="text-white font-bold">Everything we build is 100% owned, operated by, and accountable to We the People — not corporations, not shareholders, not founders.</p>
        </section>

        <hr className="border-green/20" />

        {/* Since 2009 Journey - UPDATED (no 15+ years) */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white mb-4">🔍 Since 2009</h2>

            <h3 className="font-condensed font-bold text-gold text-xl mb-2">The Beginning</h3>
            <p className="text-body mb-3">The name came later — once the system was clear.</p>
            <p className="text-body mb-4">PHIERS — Power Held In Every Representative's Seat — is what the system became. PHIERS emerged from a real crisis: healthcare workers without access to healthcare. Al Wilson and Bill Wiggins founded SureSafe Pharma (2007), pioneering pharmaceutical distribution WITHOUT markups or middlemen. This wasn't theoretical — it proved cost reduction works at scale.</p>

            <h3 className="font-condensed font-bold text-gold text-xl mb-2">The Threats & Pivots</h3>
            <p className="text-body mb-3">We faced opposition. Legal threats from established pharmaceutical interests. Market disruptions from the Panama Free Trade Agreement (signed 2007, implemented 2012). Blacklisting. Sabotage. We had to pause, reassess, and wait for the right moment.</p>

            <p className="text-body mb-3"><strong className="text-white">Why we waited:</strong> Timing matters. We could have launched earlier. But:</p>
            <ul className="list-disc list-inside text-body space-y-1 mb-4">
              <li>Congress didn't recognize healthcare as a national crisis yet</li>
              <li>Telehealth wasn't proven or accessible</li>
              <li>No one had validated our pharmaceutical model</li>
              <li>The political moment hadn't arrived</li>
            </ul>

            <h3 className="font-condensed font-bold text-gold text-xl mb-2">What Happened While We Waited</h3>
            <p className="text-body mb-3">Others succeeded with concepts we pioneered — and we celebrated them:</p>
            <ul className="list-disc list-inside text-body space-y-2 mb-4">
              <li><strong className="text-white">Mark Cuban (2022):</strong> Cost Plus Drugs validates our pharmaceutical model. 7 million customers. 80-90% savings.</li>
              <li><strong className="text-white">ZORTT Elite Medical:</strong> Cooperative telemedicine marketplace proves our delivery model works.</li>
              <li><strong className="text-white">Telehealth expansion:</strong> Became mainstream during COVID, proving our vision correct.</li>
            </ul>

            <div className="bg-green-glow border-2 border-green rounded-xl p-5">
              <p className="text-green font-bold text-center">These weren't competitors. They were PROOF our concepts worked.</p>
              <p className="text-body text-center mt-2">We're not upset about that — we're grateful. Their success validates our work and gives us the foundation to build on.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Honoring Partners */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">🤝 How We Honor Our Partners</h2>

          <h3 className="font-condensed font-bold text-gold text-xl mb-2">ZORTT (Healthcare Innovation Leaders)</h3>
          <p className="text-body mb-4">ZORTT pioneered cooperative healthcare delivery. We don't compete — we amplify their reach by funneling members to their platform through our cooperative structure.</p>

          <h3 className="font-condensed font-bold text-gold text-xl mb-2">Mark Cuban & Cost Plus Drugs</h3>
          <p className="text-body mb-4">Mark proved pharmaceutical cost reduction works in practice. We integrate his model into a federal system covering 234 million people. His work becomes the RX backbone of PHIERS.</p>

          <h3 className="font-condensed font-bold text-gold text-xl mb-2">Al Wilson & The Co-Architecture</h3>
          <p className="text-body mb-4">Al originated the pharmaceutical cost-reduction model. He proved it works. He fought through every threat and pivot. PHIERS succeeds because Al's vision stood the test of time.</p>

          <h3 className="font-condensed font-bold text-gold text-xl mb-2">Congressional Partners</h3>
          <p className="text-body">When Congress implements PHIERS, they become the partners who deliver healthcare to 234 million Americans. We're not replacing them — we're giving them the framework to finally solve the crisis.</p>
        </section>

        <hr className="border-green/20" />

        {/* Why Now - UPDATED */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white mb-4">🔥 Why Now</h2>

            <p className="text-body mb-3"><strong className="text-white">Everything is aligned:</strong></p>
            <ul className="list-disc list-inside text-body space-y-2 mb-6">
              <li><strong className="text-white">Congress recognizes the crisis:</strong> Healthcare spending is unsustainable, 22M losing coverage</li>
              <li><strong className="text-white">Proof points exist:</strong> Telehealth works. Cost Plus Drugs works. Cooperative models scale.</li>
              <li><strong className="text-white">Workers are demanding it:</strong> Union strikes demand healthcare + wages + dignity (PHIERS delivers all three)</li>
              <li><strong className="text-white">The math is irrefutable:</strong> $2.73 trillion in annual savings too big to ignore</li>
              <li><strong className="text-white">Political leverage:</strong> 3.5% organized — we control the narrative</li>
              <li><strong className="text-white">Democratic power mobilizing:</strong> 16M+ union workers. 50M+ union voters. 100M+ affected by healthcare crisis.</li>
            </ul>

            <div className="bg-green-glow border-2 border-green rounded-xl p-6 text-center">
              <p className="text-green text-xl font-bold">We waited because timing matters. The time is now.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Power of 3.5% */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">💪 The Power of 3.5%: Democratic Leverage</h2>

          <p className="text-body mb-4">Harvard researcher Erica Chenoweth analyzed 323 social movements and found one undeniable truth:</p>

          <div className="bg-green-glow border-2 border-green rounded-xl p-6 text-center mb-6">
            <p className="text-green text-xl font-bold">When 3.5% of the population is actively organized, systemic change becomes mathematically inevitable.</p>
          </div>

          <p className="text-body mb-3">That's 11.6 million Americans. We have 100M+ affected by healthcare crisis. <strong className="text-white">We exceed the 3.5% threshold by 9x.</strong></p>

          <p className="text-body">This isn't about begging Congress. It's about <strong className="text-white">forcing them</strong> through organized constituent power. That's what democracy looks like when it actually works.</p>
        </section>

        <hr className="border-green/20" />

        {/* Movement, Not Startup */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white mb-4">⚔️ Movement, Not Startup</h2>

            <p className="text-body mb-4">PHIERS isn't a company trying to make a profit. It's a movement building democratic power to force systemic change.</p>

            <p className="text-body mb-4"><strong className="text-white">We're funded by solidarity, not venture capital.</strong> Our success is measured in laws passed, not valuations. Our competitors are the forces resisting change, not healthcare innovators.</p>

            <div className="bg-green-glow border-2 border-green rounded-xl p-6 text-center mb-6">
              <p className="text-green font-bold">When Congress implements PHIERS, we win.</p>
              <p className="text-green font-bold mt-2">When workers get healthcare, we win.</p>
              <p className="text-green font-bold mt-2">When the savings cascade reaches every American, we win.</p>
            </div>

            <p className="text-body">That's why we honor our partners instead of competing with them. That's why we waited. That's why now is the moment.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Origins Image */}
        <section className="container section text-center">
          <button onClick={() => openModal('/images/healthcarereformorig.jpg')} className="cursor-pointer">
            <Image
              src="/images/healthcarereformorig.jpg"
              alt="The origins of healthcare reform in America"
              width={500}
              height={400}
              className="max-w-[50%] h-auto mx-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
            />
          </button>
          <p className="text-gray-500 text-sm mt-2">The long road to healthcare reform — and why PHIERS is different</p>
        </section>

        <hr className="border-green/20" />

        {/* Join the Movement - UPDATED (no First Wave) */}
        <section className="container section text-center">
          <div className="bg-gradient-to-r from-green/20 to-green/10 border-l-4 border-l-green rounded-xl p-8">
            <h2 className="font-display text-3xl text-white mb-4">Join the Movement</h2>
            <p className="text-body text-lg mb-6">Years of preparation. The moment has arrived. The power is ours.</p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Button href="/petition" variant="primary">✍ SIGN THE PETITION</Button>
              <Button href="/" variant="secondary">Back to Homepage</Button>
            </div>
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

      {/* ✓ Updated back-to-top button to use scrollToTop */}
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

// END FILE: app/our-origins/page.tsx - TIERS 1-7 COMPLETE
