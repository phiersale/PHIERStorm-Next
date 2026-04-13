// FILE: app/quickstart/page.tsx - UPDATED (Tiers 1-7)

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function QuickstartPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  const playVideo = (videoId: string, src: string) => {
    const wrap = document.getElementById('wrap-' + videoId)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[120px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={120}
              height={120}
              className="opacity-90"
            />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-green mb-4">Quick Start: 30 Seconds to Understand</h1>
          <p className="font-condensed text-lg text-gray-400 mb-3">New here? This is everything you need to know in under a minute.</p>
          <div className="inline-block bg-gradient-to-r from-green to-green-dim text-bg-deep px-5 py-2 rounded-full font-condensed font-bold text-sm mb-4">30 seconds to join.</div>
          <p className="text-white text-lg">This isn't a protest — it's a cooperative intelligence project.</p>
        </div>

        <hr className="border-green/20" />

        {/* Video Section */}
        <section className="container section">
          <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-6">
            <h2 className="font-display text-2xl text-blue-400 text-center mb-4">Learn in 71 Seconds</h2>
            <div className="video-container max-w-[800px] mx-auto">
              <div id="wrap-quickstart" className="video-wrapper cursor-pointer group" onClick={() => playVideo('quickstart', 'https://www.youtube.com/embed/jMU6LKEBzbs?autoplay=1&rel=0')}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/jMU6LKEBzbs/hqdefault.jpg')" }}>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-blue-400 font-bold text-sm mt-3">1 minute 11 seconds. This is why they're terrified.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Anchor Line */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Core Math Image */}
        <section className="container section text-center">
          <div className="max-w-[600px] mx-auto">
            <button onClick={() => openModal('/images/CORE_MATH_for_234M.png')} className="cursor-pointer">
              <Image
                src="/images/CORE_MATH_for_234M.png"
                alt="THE CORE MATH - How $600 telehealth unlocks 234 million covered"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg border-2 border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-gray-500 text-sm italic mt-2">The Complete Story in One Image — Click to expand</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Why $600 Telehealth Beats $10K Insurance */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">Why $600 Telehealth Beats $10K Insurance</h2>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
              <h3 className="font-condensed font-bold text-red-500 text-xl mb-3">❌ Status Quo Insurance ($10K+)</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Delays care (prior authorization)</li>
                <li>Denies coverage (claim rejections)</li>
                <li>Limited network access</li>
                <li>High out-of-pocket costs</li>
              </ul>
            </div>
            <div className="bg-green/10 border-2 border-green rounded-xl p-6">
              <h3 className="font-condensed font-bold text-green text-xl mb-3">✅ PHIERS Telehealth ($600)</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Instant access (no wait times)</li>
                <li>Zero denials (direct care)</li>
                <li>Anywhere, anytime coverage</li>
                <li>Minimal out-of-pocket costs</li>
              </ul>
            </div>
          </div>

          <div className="bg-green/10 border border-green/30 rounded-xl p-5 text-center">
            <p className="text-white"><strong>Important:</strong> Telehealth isn't a replacement for insurance — it completes what insurance leaves undone. For the 80% who don't need hospitalization, $600/year telehealth provides the care they need.</p>
          </div>

          <div className="bg-green-glow border-2 border-green rounded-xl p-6 text-center mt-6">
            <p className="text-white text-lg font-bold mb-3">If Congress authorizes telehealth through the ACA, one conversion funds 12 more. Those 12 fund 148.</p>
            <p className="text-green text-2xl font-bold">Exponential. Unstoppable. Universal healthcare achievable.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Universal Care is PAID FOR */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <div className="bg-green-glow border-2 border-green rounded-xl p-6 text-center">
              <p className="text-white text-lg font-bold mb-3">Universal care is PAID FOR: Free for those who can't pay. $600/year for those who can.</p>
              <p className="text-gray-300">Government savings from efficient telehealth cover everyone who can't afford it. Those who can pay $600/year help fund the system. Everyone covered. No one left behind.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Prescription Drug Strategy */}
        <section className="container section">
          <div className="bg-green-glow border-2 border-green rounded-xl p-6">
            <h3 className="font-condensed font-bold text-green text-2xl mb-3">Prescription Drug Strategy</h3>
            <p className="text-gray-300">Safer, more effective, and cheaper alternatives to specialty and blockbuster drugs exist. PHIERS will raise awareness about these alternatives and purchase them in collaboration with <strong className="text-white">Mark Cuban's Cost Plus Drugs</strong>, which is guaranteed to generate the savings needed to pay Medicare, Medicaid, and the VA to provide coverage for all.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Get Started in 3 Steps */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white mb-4">Get Started in 3 Steps</h2>

            <div className="space-y-4">
              <div className="bg-bg-card border-l-4 border-l-green rounded-r-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-bold">1</span>
                  <h3 className="font-condensed font-bold text-white text-xl m-0">Sign the Petition (30 seconds)</h3>
                </div>
                <p className="text-gray-300 pl-11">Add your name to force Congress to hold mandatory town halls. 1,500 signatures per district = they must face you.</p>
                <div className="pl-11 mt-3">
                  <Button href="/petition" variant="primary">✍ SIGN THE PETITION</Button>
                </div>
              </div>

              <div className="bg-bg-card border-l-4 border-l-green rounded-r-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-bold">2</span>
                  <h3 className="font-condensed font-bold text-white text-xl m-0">Share the Cascade (2 minutes)</h3>
                </div>
                <p className="text-gray-300 pl-11">Every share reaches 10-100 more people. Each person who signs multiplies the pressure. This is exponential leverage.</p>
              </div>

              <div className="bg-bg-card border-l-4 border-l-green rounded-r-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-bold">3</span>
                  <h3 className="font-condensed font-bold text-white text-xl m-0">Watch It Spread (Exponential)</h3>
                </div>
                <p className="text-gray-300 pl-11">1 person → 12 people → 148 people → millions. The cascade can't be stopped once it starts. That's the power of mechanical leverage.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Math That Makes It Work */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">The Math That Makes It Work</h2>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/PHIERS_Cascade_Leverage_Visual_v1.png')} className="cursor-pointer">
              <Image
                src="/images/PHIERS_Cascade_Leverage_Visual_v1.png"
                alt="PHIERS Cascade Leverage Visual"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border-2 border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-gray-500 text-sm italic text-center mt-2">This is how the system works when we connect the pieces — Click for full breakdown</p>
          </div>

          <p className="text-center text-green text-base mb-4">The math that makes universal coverage inevitable:</p>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/SIMPLE_MATH_Pyramid_Universal_Coverage.png')} className="cursor-pointer">
              <Image
                src="/images/SIMPLE_MATH_Pyramid_Universal_Coverage.png"
                alt="Universal Coverage Pyramid"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border-2 border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-gray-500 text-sm italic text-center mt-2">Medicaid → Medicare → ACA → 234M Americans Covered — Click to see the progression</p>
          </div>

          <p className="text-center text-gray-300">These programs already exist — and <strong className="text-white">when we connect them</strong>, they cover everyone.</p>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <h2 className="font-display text-3xl text-white mb-4">Want to understand the full 5D leverage mechanism?</h2>
          <p className="text-gray-300 mb-6">Ready to see how healthcare unlocks jobs, economy, politics, and peace?</p>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button href="/solutions" variant="primary">See 5D Solutions</Button>
            <Button href="/leverage" variant="secondary">How It Works</Button>
            <Button href="/crisis" variant="secondary">The Crisis</Button>
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

// END FILE: app/quickstart/page.tsx - TIERS 1-7 COMPLETE
