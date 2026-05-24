// FILE: app/action/page.tsx
// VERSION: 8.0 – Q&A focus, removed petition/share/movement language

'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function ActionPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

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
          <div className="relative h-[80px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={80}
              height={80}
              className="opacity-90"
            />
          </div>
          <h1 className="mb-4">
            <span className="hero-white">Curious how this works?</span>
            <br />
            <span className="hero-green">Start with a question.</span>
          </h1>
          <p className="text-gray-400 mb-3">No pressure. No commitment. Just honest answers.</p>
          <p className="font-condensed text-xl text-green font-bold mb-4">Every night at 9 PM PST.</p>
        </div>

        <div className="container text-center mt-2">
          <button
            onClick={() => window.location.href = '/home'}
            className="px-4 py-1.5 text-xs text-gray-400 underline hover:text-gray-300 transition"
          >
            ← Back to Main Site
          </button>
        </div>
        <hr className="border-green/20" />

        {/* Anchor line */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Before you decide what PHIERS is — ask us anything.
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Q&A Invitation Box */}
        <section className="container section">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-8 max-w-[600px] mx-auto text-center">
            <div className="w-12 h-12 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-black text-xl mx-auto mb-4">
              ?
            </div>
            <h2 className="font-display text-2xl text-white mb-3">Ask a question. Get an answer.</h2>
            <p className="text-gray-400 text-sm mb-4">
              Every night at 9 PM PST, we answer questions from people who are still learning, still deciding, or simply curious.
            </p>
            <p className="text-gray-500 text-xs mb-6">
              Your question may help shape the next conversation.
            </p>
            <a
              href="https://forms.gle/YOUR_FORM_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green text-black font-bold rounded-lg hover:bg-green-dim transition text-center"
              style={{ backgroundColor: '#3ddc84', color: '#080d1a' }}
            >
              → Ask your question here
            </a>
            <p className="text-gray-500 text-xs mt-4">
              Questions submitted today may be answered in tonight's 9 PM PST video.
            </p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Cascade Diagram */}
        <section className="container section text-center">
          <div className="max-w-[500px] mx-auto">
            <button onClick={() => openModal('/images/Cascade_Math.jpg')} className="cursor-pointer">
              <Image
                src="/images/Cascade_Math.jpg"
                alt="The Cascade — One becomes twelve"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-gray-500 text-xs mt-3">Click to enlarge</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* How Pressure Works - Simplified */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <div className="bg-bg-card border-l-4 border-l-green rounded-r-xl p-6 max-w-[600px] mx-auto">
              <h2 className="font-display text-2xl text-white mb-3">How pressure works</h2>
              <p className="text-body mb-2">Congress doesn't respond to voters.</p>
              <p className="text-body mb-2">They respond to pressure.</p>
              <p className="text-green font-semibold mb-4">PHIERS creates that pressure.</p>
              <p className="text-gray-400 text-sm">1,500 verified people in a district → town hall → accountability → change.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Nightly Q&A Schedule */}
        <section className="container section text-center">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[500px] mx-auto">
            <p className="text-gray-300 text-sm mb-2">🎥 Nightly Q&A</p>
            <p className="font-display text-xl text-green mb-2">9 PM PST — Weeknights</p>
            <p className="text-gray-500 text-xs">Recorded. Available on YouTube. Watch at your own pace.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA – soft return to main site */}
        <section className="container section text-center">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[500px] mx-auto">
            <p className="text-gray-300 text-sm mb-4">Have more questions? Start here.</p>
            <a
              href="https://forms.gle/YOUR_FORM_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green text-black font-bold rounded-lg hover:bg-green-dim transition text-center"
              style={{ backgroundColor: '#3ddc84', color: '#080d1a' }}
            >
              → Ask a question
            </a>
            <div className="mt-4">
              <button
                onClick={() => window.location.href = '/home'}
                className="text-gray-500 text-xs underline hover:text-gray-400 transition"
              >
                ← Return to Main Site
              </button>
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

      {/* Back to top button */}
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

// END FILE: app/action/page.tsx - Q&A FOCUS VERSION
