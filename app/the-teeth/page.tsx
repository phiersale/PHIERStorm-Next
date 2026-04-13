// FILE: app/the-teeth/page.tsx
// THE TEETH PAGE - Complete with design system

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function TheTeethPage() {
  const [teethModalOpen, setTeethModalOpen] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const playVideo = (videoId: string, src: string) => {
    const wrap = document.getElementById('wrap-' + videoId)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }

  const loadPathosVideo = () => {
    if (videoLoaded) return
    const container = document.getElementById('pathos-video-container')
    if (container) {
      container.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KLu7USN_dao?autoplay=1&rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
      setVideoLoaded(true)
    }
  }

  return (
    <>
      {/* Step indicator */}
      <div className="pt-4 pb-2 text-center">
        <span className="font-condensed text-sm text-gray-500 tracking-wide uppercase">Step 3 of 3 — The Teeth Behind the Demands</span>
        <p className="font-condensed text-xs text-gray-600 opacity-65 mt-1">Three short pages. Enough to understand the whole system.</p>
      </div>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-bg-dark section">
          <div className="container text-center">
            <Image src="/images/PHIERS_Logo.jpg" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-90" />
            <p className="font-condensed text-green text-lg mt-2">PHIERS — Power Held In Every Representative's Seat.</p>
            <p className="font-condensed text-gray-500 text-sm mt-1">16 years in the making. This is the moment it was built for.</p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight my-6 max-w-[700px] mx-auto">
              Power concedes nothing without a demand —<br />a demand that has <span className="text-red-500">teeth.</span>
            </h1>

            <p className="text-gray-400 mb-3">Leaders can fire people up.<br />Movements can bring people together.</p>
            <p className="text-white font-semibold text-lg mb-3">But only organized people make Congress move.</p>
            <p className="text-gray-400 mb-3">Speeches fade.<br />Rallies fade.<br />The news cycle fades.</p>
            <p className="font-condensed font-bold text-2xl text-green mb-4">Pressure doesn't.</p>

            <p className="font-display text-2xl md:text-3xl text-green my-4">PHIERS gives real bite to the demands people are already making.</p>
            <p className="font-condensed font-bold text-green text-lg">Not for a moment. For as long as it takes.</p>

            <div className="max-w-[420px] mx-auto mt-6">
              <button onClick={() => setTeethModalOpen(true)} className="cursor-pointer">
                <Image
                  src="/images/We_Gotz_Teeth_for_No_Kings.jpg"
                  alt="Power concedes nothing without a demand that has teeth"
                  width={420}
                  height={300}
                  className="w-full h-auto rounded-xl border border-green/20 hover:scale-[1.02] transition-transform"
                />
              </button>
              <p className="text-xs text-gray-500 mt-2">click to enlarge</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Simple Idea */}
        <section className="container section text-center">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wide block mb-3">Simple Idea. Already Built.</span>
          <p className="text-xl text-white font-semibold mt-3 mb-3">The idea's simple: people in every district, speaking with one voice, with real expectations — and real consequences when Congress drags its feet.</p>
          <p className="font-condensed font-bold text-green text-xl">It's already built. And it works.</p>
          <p className="text-sm text-gray-500 mt-2">It's already being used — district by district.</p>
        </section>

        <hr className="border-green/20" />

        {/* Pathos Validation */}
        <section className="container section">
          <div className="bg-bg-card/60 rounded-2xl p-6 border border-green/15 max-w-[800px] mx-auto">
            <div className="text-center">
              <p className="font-condensed text-xs text-green uppercase tracking-wider mb-2">Independent Validation</p>
              <div className="font-condensed text-xl md:text-2xl font-bold text-white leading-relaxed mb-2">
                "If you weren't legit, we wouldn't risk putting our name behind yours."
              </div>
              <div className="font-condensed text-sm text-gray-500 mb-3">
                — <a href="https://www.pathoscommunications.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">Pathos Communications</a> · Global PR firm (London Stock Exchange)
              </div>
              <div className="font-condensed text-sm text-green font-bold mb-4">We passed their test — and chose to stay grassroots.</div>

              <p className="font-condensed font-bold text-gray-500 text-sm uppercase tracking-wide mb-2">Watch how this works in real life.</p>

              <div
                id="pathos-video-container"
                className="video-wrapper cursor-pointer max-w-[560px] mx-auto"
                onClick={loadPathosVideo}
              >
                {!videoLoaded && (
                  <div className="relative w-full h-full">
                    <Image
                      src="https://img.youtube.com/vi/KLu7USN_dao/hqdefault.jpg"
                      alt="Watch the video"
                      fill
                      className="object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-3xl text-white">
                        ▶
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <p className="font-condensed text-xs text-gray-500 uppercase tracking-wide mt-2">Watch the Validation</p>
              <p className="text-body text-xs text-gray-500 mt-1">Click to play — video loads here</p>
            </div>
          </div>
        </section>

        {/* Blueprint Video */}
        <section className="container section text-center">
          <div className="video-container mx-auto">
            <div id="wrap-blueprint-teeth" className="video-wrapper cursor-pointer group" onClick={() => playVideo('blueprint-teeth', 'https://www.youtube.com/embed/xEA5zVium58?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/xEA5zVium58/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
            <p className="font-condensed text-green text-sm text-center mt-2">Full system blueprint (raw/unedited)</p>
            <p className="text-gray-500 text-xs text-center">A deep-dive into leverage, war powers, healthcare savings, and long-term structural fixes</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="border-2 border-green rounded-xl p-8 max-w-[600px] mx-auto">
            <p className="text-sm text-gray-500 mb-3">If you're waiting for someone else to fix this — they won't.</p>
            <div className="font-display text-3xl text-white mb-4">Add your name. Be counted. Make Congress do its job.</div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your name isn't just a gesture.<br />
              It goes straight to your representative.<br />
              They can't ignore it anymore.<br />
              That's pressure they can't outlast.
            </p>
            <p className="font-condensed font-bold text-green text-lg mt-3">This is how we make it impossible for them not to respond.</p>
            <div className="mt-6">
              <Button href="/petition" variant="secondary">✍ Sign the Petition →</Button>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Continue to How It Works */}
        <section className="container section-sm text-center">
          <p className="font-condensed text-sm text-gray-500 mb-3">Want the full breakdown?</p>
          <Link href="/leverage" className="font-condensed font-bold text-green text-base border-b border-green/30 pb-0.5">
            See How It Works →
          </Link>
        </section>
      </main>

      <Footer />

      {/* Teeth Image Lightbox */}
      <AnimatePresence>
        {teethModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setTeethModalOpen(false)}
          >
            <Image
              src="/images/We_Gotz_Teeth_for_No_Kings.jpg"
              alt="Power concedes nothing without a demand that has teeth"
              width={800}
              height={600}
              className="max-w-[90vw] max-h-[85vh] rounded-xl"
            />
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
