// FILE: app/action/page.tsx - COMPLETE REWRITE (Tiers 1-7)

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
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Your Name Is Leverage.<br /><span className="text-green">Here's What To Do With It.</span>
          </h1>
          <p className="text-gray-400 mb-3">Not everyone organizes. Not everyone donates.</p>
          <p className="font-condensed text-xl text-green font-bold mb-4">Everyone can multiply pressure.</p>
          <p className="text-gray-400 mb-2">You don't need millions of people.</p>
          <p className="text-gray-400 mb-2">You need enough people — in the same place — at the same time.</p>
          <p className="text-gray-400 mb-6">That's how pressure forms. That's how Congress responds.</p>
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
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Step 1 - Be Counted */}
        <section className="container section">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-black text-lg">1</div>
              <h2 className="font-display text-2xl text-white">BE COUNTED</h2>
            </div>
            <p className="text-body mb-2">Add your name to your district.</p>
            <p className="text-body mb-2">Not symbolic. Not a comment.</p>
            <p className="text-body mb-4">A number tied to your representative. That's where pressure starts.</p>
            <Button href="/petition" variant="primary" fullWidth>✍ ADD MY NAME</Button>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Step 2 - Multiply the Count */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <div className="bg-bg-card border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-black text-lg">2</div>
                <h2 className="font-display text-2xl text-white">MULTIPLY THE COUNT</h2>
              </div>
              <p className="text-body mb-2">One person becomes twelve.</p>
              <p className="text-body mb-4">Most people already agree. They just haven't been counted yet.</p>
              <p className="font-condensed text-lg text-white font-bold mb-4">Every share brings your district closer to the 1,500-person tipping point Congress cannot ignore.</p>
              
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
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs text-gray-500 bg-bg-card px-3 py-1 rounded-full">→ Friends</span>
                <span className="text-xs text-gray-500 bg-bg-card px-3 py-1 rounded-full">→ Family</span>
                <span className="text-xs text-gray-500 bg-bg-card px-3 py-1 rounded-full">→ Coworkers</span>
                <span className="text-xs text-gray-500 bg-bg-card px-3 py-1 rounded-full">→ Group chats</span>
                <span className="text-xs text-gray-500 bg-bg-card px-3 py-1 rounded-full">→ Anyone tired of nothing changing</span>
              </div>
              <p className="text-gray-500 text-xs mt-3">Not to convince them. To count them.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Step 3 - Organize Your District */}
        <section className="container section">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-black text-lg">3</div>
              <h2 className="font-display text-2xl text-white">ORGANIZE YOUR DISTRICT</h2>
            </div>
            <p className="text-body mb-2">Sharing builds momentum. Organization converts it into pressure.</p>
            <p className="text-body mb-4">Every district needs people turning names into accountability. That's how 1,500 happens. That's how representatives are forced to respond.</p>
            <p className="font-condensed text-lg text-green font-bold mb-4">If you're willing to step up — we'll connect you directly.</p>
            <Button href="/organizers" variant="secondary" fullWidth>✊ ORGANIZE YOUR DISTRICT</Button>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What Happens Next */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <div className="bg-bg-card border-l-4 border-l-green rounded-r-xl p-5 max-w-[600px] mx-auto">
              <h2 className="font-display text-2xl text-white mb-3">What Happens Next</h2>
              <p className="text-body mb-2">As district counts grow:</p>
              <p className="text-body mb-1">→ Thresholds get hit</p>
              <p className="text-body mb-1">→ Representatives get called out</p>
              <p className="text-body mb-1">→ Public accountability events get triggered</p>
              <p className="text-body mb-3">→ Pressure becomes unavoidable</p>
              <p className="font-condensed text-lg text-green font-bold">This is not awareness. This is coordination.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Cascade */}
        <section className="container section text-center">
          <p className="font-display text-2xl text-gold mb-2">One becomes twelve.</p>
          <p className="font-display text-2xl text-gold mb-2">Twelve become 148.</p>
          <p className="font-display text-2xl text-gold mb-4">148 become 1,825.</p>
          <p className="text-body mb-2">It doesn't spread randomly. It builds where it matters.</p>
          <p className="font-condensed text-xl text-white font-bold mb-2">District by district.</p>
          <p className="font-condensed text-lg text-green font-bold">That's why it works.</p>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="bg-bg-dark border-2 border-green rounded-xl p-6 max-w-[600px] mx-auto">
            <p className="font-condensed text-lg text-gold font-bold mb-3">District counts begin compiling immediately.</p>
            <p className="text-white text-lg mb-1">Your name.</p>
            <p className="text-white text-lg mb-1">Your district.</p>
            <p className="text-white text-lg mb-3">On the record.</p>
            <p className="text-body mb-4">Counted. Delivered. Impossible to ignore.</p>
            
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>✍ BE COUNTED</Button>
              <Button href="/organizers" variant="secondary" fullWidth>✊ I ORGANIZE</Button>
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

// END FILE: app/action/page.tsx - TIERS 1-7 COMPLETE
