// FILE: app/donate/page.tsx
// DONATE PAGE - Support the Movement

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function DonatePage() {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [copySuccess, setCopySuccess] = useState(false)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  const forwardToChapter = () => {
    const subject = encodeURIComponent("A solution your chapter needs to see — PHIERS.org")
    const body = encodeURIComponent(
      "Hi,\n\nI just signed the PHIERS petition and wanted to share it with your chapter.\n\nPHIERS is organizing Americans district by district around one clear demand — $600 telehealth through the ACA Exchange — saving $2.7 trillion and covering 234 million Americans. The same organized leverage ends the unauthorized wars and stops the draft.\n\n1,500 signatures in a district triggers a mandatory town hall. July 4, 2026 is our north star.\n\nLearn more and sign: https://phiers.org\n\nThis is the teeth behind every demand being made in the streets. Worth sharing with your members."
    )
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const copyEmailText = () => {
    const text = "Hi,\n\nI just signed the PHIERS petition and wanted to share it with your chapter.\n\nPHIERS is organizing Americans district by district around one clear demand — $600 telehealth through the ACA Exchange — saving $2.7 trillion and covering 234 million Americans. The same organized leverage ends the unauthorized wars and stops the draft.\n\n1,500 signatures in a district triggers a mandatory town hall. July 4, 2026 is our north star.\n\nLearn more and sign: https://phiers.org\n\nThis is the teeth behind every demand being made in the streets. Worth sharing with your members."
    navigator.clipboard.writeText(text)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
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
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Fuel the Movement</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Your Dollar Is <span className="text-green">Leverage.</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[700px] mx-auto mb-6">
            A movement funded by the people belongs to the people. One dollar from a million people is a million dollars.
          </p>

          {/* Urgency Banner */}
          <div className="bg-red-500/10 border-l-4 border-l-red-500 rounded-r-lg p-5 max-w-[700px] mx-auto text-left mb-6">
            <p className="text-white font-bold mb-2">CRITICAL WINDOW: Build Leverage Before March 28 No Kings Rally</p>
            <p className="text-body text-sm mb-2">Every dollar strengthens the organized, district-level pressure that gives the March 28 No Kings rally real TEETH — transforming it from symbolic gathering into a force Congress cannot ignore.</p>
            <p className="text-white font-bold text-sm mt-2">Your support helps millions stand together with power, not just presence.</p>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Donate Now Section */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white text-center mb-4">Donate <span className="text-green">Now</span></h2>
          <p className="text-center text-gray-400 mb-8">Every dollar builds leverage before March 28.</p>

          {/* Venmo */}
          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-6 mb-4 max-w-[500px] mx-auto">
            <div className="font-display text-2xl text-green mb-2">Venmo</div>
            <div className="text-body">
              <p><strong className="text-white">@Will4PHIERS</strong></p>
              <div className="flex justify-center my-3">
                <button onClick={() => openModal('/images/Venmo.png')} className="cursor-pointer">
                  <Image
                    src="/images/Venmo.png"
                    alt="Venmo QR Code"
                    width={180}
                    height={180}
                    className="rounded-lg border border-green/20 hover:scale-[1.02] transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* PayPal */}
          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-6 mb-4 max-w-[500px] mx-auto">
            <div className="font-display text-2xl text-green mb-2">PayPal</div>
            <div className="text-body">
              <p><strong className="text-white"><Link href="mailto:will@phiers.org" className="text-white hover:text-green">will@phiers.org</Link></strong></p>
              <div className="flex justify-center my-3">
                <button onClick={() => openModal('/images/PayPal.png')} className="cursor-pointer">
                  <Image
                    src="/images/PayPal.png"
                    alt="PayPal QR Code"
                    width={180}
                    height={180}
                    className="rounded-lg border border-green/20 hover:scale-[1.02] transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Zelle */}
          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-6 mb-4 max-w-[500px] mx-auto">
            <div className="font-display text-2xl text-green mb-2">Zelle</div>
            <div className="text-body">
              <p><strong className="text-white">(301) 919-0970</strong></p>
              <div className="flex justify-center my-3">
                <button onClick={() => openModal('/images/Zelle.png')} className="cursor-pointer">
                  <Image
                    src="/images/Zelle.png"
                    alt="Zelle QR Code"
                    width={180}
                    height={180}
                    className="rounded-lg border border-green/20 hover:scale-[1.02] transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* GoFundMe */}
          <div className="text-center mt-6">
            <Link
              href="https://www.gofundme.com/f/homeless-but-hopeful-affordable-healthcare-good-jobs-ubi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-green text-green font-condensed font-bold text-lg px-6 py-3 rounded-lg hover:bg-green/10 transition-all"
            >
              GoFundMe Campaign →
            </Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Can't Donate Section */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white text-center mb-4">Can't Donate? <span className="text-green">Other Ways to Build Leverage</span></h2>
            <p className="text-center text-gray-400 mb-6">Can't contribute financially right now? You can still build leverage before March 28:</p>

            <div className="flex flex-col md:flex-row gap-3 justify-center mb-6">
              <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform?usp=header" variant="secondary">📋 Fill Survey</Button>
              <Button href="/action" variant="secondary">See All Actions</Button>
            </div>

            <p className="text-center text-gray-400 text-sm mb-6">Every signature, every survey response, every share builds the 3.5% threshold that forces change.</p>

            {/* Forward to Chapter */}
            <div className="bg-green-glow border border-green/20 rounded-xl p-5 max-w-[600px] mx-auto text-center">
              <p className="font-condensed text-base text-gray-400 mb-3">Part of an Indivisible chapter or local group? Forward this site to them.</p>
              <div className="flex flex-col md:flex-row gap-3 justify-center">
                <button
                  onClick={forwardToChapter}
                  className="bg-green text-bg-deep font-condensed font-bold text-sm px-6 py-3 rounded-lg hover:bg-green-dim transition-all"
                >
                  ✉ Forward to Your Chapter →
                </button>
                <button
                  onClick={copyEmailText}
                  className="bg-transparent border border-green text-green font-condensed font-bold text-sm px-6 py-3 rounded-lg hover:bg-green/10 transition-all"
                >
                  {copySuccess ? '✓ Copied!' : '📋 Copy Email Text'}
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-3">Opens a pre-written email — you decide whether to send it.</p>
            </div>
          </div>
        </section>

        {/* Page Navigation */}
        <div className="container flex justify-between items-center py-6 border-t border-green/20 mt-8">
          <Link href="/action" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            ← Back to Take Action
          </Link>
          <Link href="/resources" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            Resource Hub →
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
                alt="QR Code"
                width={400}
                height={400}
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

// END FILE: app/donate/page.tsx
