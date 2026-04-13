// FILE: app/donate/page.tsx - COMPLETE (Tiers 1-7 applied)

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
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Fuel the Movement</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Your Dollar Is <span className="text-green">Leverage.</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[700px] mx-auto mb-6">
            A movement funded by the people belongs to the people. One dollar from a million people is a million dollars.
          </p>

          {/* Updated banner - No March 28 reference */}
          <div className="bg-red-500/10 border-l-4 border-l-red-500 rounded-r-lg p-5 max-w-[700px] mx-auto text-left mb-8">
            <p className="text-white font-bold mb-2">The window is open right now.</p>
            <p className="text-body text-sm">Every dollar builds district-level pressure in Congress. Your support funds organizing, outreach, media, and district coordination — the infrastructure that turns online signatures into town halls and town halls into accountability and accountability into positive change.</p>
          </div>
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

          {/* Donation Methods */}
          <div className="bg-bg-dark border-2 border-green rounded-xl p-6 max-w-[500px] mx-auto">
            <div className="space-y-3 text-left max-w-[300px] mx-auto">
              <p><strong className="text-white">Venmo:</strong> @Will4PHIERS</p>
              <p><strong className="text-white">PayPal:</strong> will@phiers.org</p>
              <p><strong className="text-white">Zelle:</strong> (301) 919-0970 <span className="text-xs text-gray-500">[Zelle only]</span></p>
              <p className="mt-3"><Link href="https://www.gofundme.com/f/homeless-but-hopeful-affordable-healthcare-good-jobs-ubi" target="_blank" rel="noopener noreferrer" className="text-green font-condensed font-bold hover:underline">GoFundMe Campaign →</Link></p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Can't Donate Section - Updated */}
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

// END FILE: app/donate/page.tsx - TIERS 1-7 COMPLETE
