// FILE: app/donate/page.tsx - WITH QR CODES

'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function DonatePage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const forwardToChapter = useCallback(() => {
    const subject = encodeURIComponent("A solution your chapter needs to see — PHIERS.org")
    const body = encodeURIComponent(
      "Hi,\n\nI just signed the PHIERS petition and wanted to share it with your chapter.\n\nPHIERS is organizing Americans district by district around one clear demand — $600 telehealth through the ACA Exchange — saving $2.7 trillion and covering 234 million Americans. The same organized leverage ends the unauthorized wars and stops the draft.\n\n1,500 signatures in a district triggers a mandatory town hall.\n\nLearn more and sign: https://phiers.org\n\nThis is the teeth behind every demand being made in the streets. Worth sharing with your members."
    )
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }, [])

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
          <h1 className="mb-4">
            <span className="hero-white">Your Dollar Is</span>
            <br />
            <span className="hero-green">Leverage.</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[700px] mx-auto mb-6">
            A movement funded by the people belongs to the people. One dollar from a million people is a million dollars.
          </p>

          <div className="bg-red-500/10 border-l-4 border-l-red-500 rounded-r-lg p-5 max-w-[700px] mx-auto text-left mb-8">
            <p className="text-white font-bold mb-2">The window is open right now.</p>
            <p className="text-body text-sm">Every dollar builds district-level pressure in Congress. Your support funds organizing, outreach, media, and district coordination — the infrastructure that turns online signatures into town halls and town halls into accountability and accountability into positive change.</p>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Anchor Line */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Donation Tiers */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white text-center mb-6">Donate <span className="text-green">Now</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[800px] mx-auto mb-8">
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="font-display text-3xl text-green">$25</div>
              <p className="text-body text-sm mt-2">Outreach to 100 people in your district</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="font-display text-3xl text-green">$50</div>
              <p className="text-body text-sm mt-2">Funds a district team for a week</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="font-display text-3xl text-green">$100</div>
              <p className="text-body text-sm mt-2">Reaches an organizer network in your state</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="font-display text-3xl text-green">$500</div>
              <p className="text-body text-sm mt-2">Funds media reaching 10,000+ people</p>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm italic mb-8">A movement funded by the people belongs to the people.</p>

          {/* Donation Methods with QR Codes */}
          <div className="bg-bg-dark border-2 border-green rounded-xl p-6 max-w-[800px] mx-auto">
            <h3 className="font-display text-2xl text-center text-white mb-6">Donate Securely</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Venmo */}
              <div className="text-center cursor-pointer" onClick={() => openModal('/images/venmo_qr.png')}>
                <div className="bg-white p-3 rounded-xl inline-block mb-3">
                  <Image src="/images/venmo_qr.png" alt="Venmo QR Code" width={150} height={150} className="mx-auto" />
                </div>
                <p className="text-white font-bold">Venmo</p>
                <p className="text-gray-400 text-sm">@Will4PHIERS</p>
              </div>

              {/* PayPal */}
              <div className="text-center cursor-pointer" onClick={() => openModal('/images/paypal_qr.png')}>
                <div className="bg-white p-3 rounded-xl inline-block mb-3">
                  <Image src="/images/paypal_qr.png" alt="PayPal QR Code" width={150} height={150} className="mx-auto" />
                </div>
                <p className="text-white font-bold">PayPal</p>
                <p className="text-gray-400 text-sm">will@phiers.org</p>
              </div>

              {/* Zelle */}
              <div className="text-center cursor-pointer" onClick={() => openModal('/images/zelle_qr.png')}>
                <div className="bg-white p-3 rounded-xl inline-block mb-3">
                  <Image src="/images/zelle_qr.png" alt="Zelle QR Code" width={150} height={150} className="mx-auto" />
                </div>
                <p className="text-white font-bold">Zelle</p>
                <p className="text-gray-400 text-sm">(301) 919-0970</p>
                <p className="text-gray-500 text-xs">[Zelle only]</p>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link href="https://www.gofundme.com/f/homeless-but-hopeful-affordable-healthcare-good-jobs-ubi" target="_blank" rel="noopener noreferrer" className="text-green font-condensed font-bold hover:underline">
                GoFundMe Campaign →
              </Link>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Can't Donate Section */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <p className="text-gray-400 mb-4">Your name matters as much as your dollar.</p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Button href="/petition" variant="primary">✍ SIGN THE PETITION</Button>
              <Button href="/action" variant="secondary">📣 SHARE THE MESSAGE</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Modal for QR Codes */}
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

      {/* Back-to-top button */}
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