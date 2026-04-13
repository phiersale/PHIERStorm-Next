'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

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

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      {/* Step indicator */}
      <div className="pt-4 pb-2 text-center">
        <span className="font-condensed text-sm text-gray-500 tracking-wide uppercase">Step 3 of 3 — The Teeth Behind the Demands</span>
        <p className="font-condensed text-xs text-gray-600 opacity-65 mt-1">Three short pages. Enough to understand the whole system.</p>
      </div>

      <Navigation />

      <main className="pt-4 pb-16">
        
        {/* THE TEETH HERO */}
        <section className="py-20 px-6 text-center bg-[#0a1628]">
          <div className="max-w-[800px] mx-auto">
            <div className="flex justify-center mb-6">
              <Image src="/images/PHIERS_Logo.jpg" alt="PHIERS.org" width={80} height={80} className="opacity-90" />
            </div>
            <p className="font-condensed text-[#3ddc84] text-lg mt-3">PHIERS — Power Held In Every Representative's Seat.</p>
            <p className="font-condensed text-gray-500 text-sm mt-2">16 years in the making. This is the moment it was built for.</p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight my-8 max-w-[700px] mx-auto">
              Power concedes nothing without a demand —<br />a demand that has <span className="text-red-500">teeth.</span>
            </h1>

            <p className="text-gray-400 mb-3">Leaders can fire people up.<br />Movements can bring people together.</p>
            <p className="text-white font-semibold text-lg mb-3">But only organized people make Congress move.</p>
            <p className="text-gray-400 mb-3">Speeches fade.<br />Rallies fade.<br />The news cycle fades.</p>
            <p className="font-condensed font-bold text-2xl text-[#3ddc84] mb-6">Pressure doesn't.</p>

            <p className="font-display text-2xl md:text-3xl text-[#3ddc84] my-6">PHIERS gives real bite to the demands people are already making.</p>
            <p className="font-condensed font-bold text-[#3ddc84] text-lg">Not for a moment. For as long as it takes.</p>

            <div className="max-w-[420px] mx-auto mt-8">
              <button onClick={() => setTeethModalOpen(true)} className="cursor-pointer">
                <Image
                  src="/images/We_Gotz_Teeth_for_No_Kings.jpg"
                  alt="Power concedes nothing without a demand that has teeth"
                  width={420}
                  height={300}
                  className="w-full h-auto rounded-xl border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform"
                />
              </button>
              <p className="text-xs text-[#8899bb] mt-2">click to enlarge</p>
            </div>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* SIMPLE IDEA */}
        <section className="py-16 px-6 max-w-[760px] mx-auto text-center">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Simple Idea. Already Built.</span>
          <p className="text-xl text-white font-semibold mt-4 mb-4">The idea's simple: people in every district, speaking with one voice, with real expectations — and real consequences when Congress drags its feet.</p>
          <p className="font-condensed font-bold text-[#3ddc84] text-xl">It's already built. And it works.</p>
          <p className="text-sm text-gray-500 mt-2">It's already being used — district by district.</p>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* PATHOS VALIDATION */}
        <section className="py-16 px-6">
          <div className="max-w-[800px] mx-auto bg-[#111d35]/60 rounded-2xl p-8 border border-[#3ddc84]/15">
            <div className="max-w-[700px] mx-auto text-center">
              <p className="font-condensed text-xs text-[#3ddc84] uppercase tracking-wider mb-3">Independent Validation</p>
              <div className="font-condensed text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">
                "If you weren't legit, we wouldn't risk putting our name behind yours."
              </div>
              <div className="font-condensed text-sm text-gray-500 mb-4">
                — <a href="https://www.pathoscommunications.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">Pathos Communications</a> · Global PR firm (London Stock Exchange)
              </div>
              <div className="font-condensed text-sm text-[#3ddc84] font-bold mb-5">We passed their test — and chose to stay grassroots.</div>

              <p className="font-condensed font-bold text-gray-500 text-sm uppercase tracking-wide mb-3">Watch how this works in real life.</p>

              <div
                id="pathos-video-container"
                className="relative w-full max-w-[560px] mx-auto aspect-video overflow-hidden rounded-xl cursor-pointer bg-black"
                onClick={loadPathosVideo}
              >
                {!videoLoaded && (
                  <div className="relative w-full h-full">
                    <Image
                      src="https://img.youtube.com/vi/KLu7USN_dao/hqdefault.jpg"
                      alt="Watch the video"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-3xl text-white">
                        ▶
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <p className="font-condensed text-xs text-gray-500 uppercase tracking-wide mt-3">Watch the Validation</p>
              <p className="font-body text-xs text-gray-500 mt-2">Click to play — video loads here</p>
            </div>
          </div>
        </section>

        {/* VIDEO: Blueprint (secondary) */}
        <div className="max-w-[500px] mx-auto my-8">
          <div id="wrap-blueprint-teeth" className="relative aspect-video rounded-xl overflow-hidden border border-[#3ddc84]/20 cursor-pointer group" onClick={() => playVideo('blueprint-teeth', 'https://www.youtube.com/embed/xEA5zVium58?autoplay=1&rel=0')}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/xEA5zVium58/hqdefault.jpg')" }}>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
              </div>
            </div>
          </div>
          <p className="font-condensed text-[#3ddc84] text-sm text-center mt-2">Full system blueprint (raw/unedited)</p>
          <p className="text-gray-500 text-xs text-center mt-1">A deep-dive into leverage, war powers, healthcare savings, and long-term structural fixes</p>
        </div>
        
        <hr className="border-[#3ddc84]/20" />

        {/* FINAL CTA */}
        <section className="py-16 px-6">
          <div className="max-w-[600px] mx-auto text-center border-2 border-[#3ddc84] rounded-xl p-10">
            <p className="text-sm text-gray-500 mb-3">If you're waiting for someone else to fix this — they won't.</p>
            <div className="font-display text-3xl text-white mb-6">Add your name. Be counted. Make Congress do its job.</div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your name isn't just a gesture.<br />
              It goes straight to your representative.<br />
              They can't ignore it anymore.<br />
              That's pressure they can't outlast.
            </p>
            <p className="font-condensed font-bold text-[#3ddc84] text-lg mt-4">This is how we make it impossible for them not to respond.</p>
            <Link
              href="/petition"
              className="inline-block mt-8 bg-transparent text-[#3ddc84] border border-[#3ddc84]/50 px-8 py-3 rounded-full font-body font-semibold hover:bg-[#3ddc84]/10 transition-all"
            >
              ✍ Sign the Petition →
            </Link>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* CONTINUE TO HOW IT WORKS */}
        <section className="py-12 px-6 text-center">
          <p className="font-condensed text-sm text-gray-500 mb-4">Want the full breakdown?</p>
          <Link href="/leverage" className="font-condensed font-bold text-[#3ddc84] text-base border-b border-[#3ddc84]/30 pb-0.5">
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
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40"
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <style jsx global>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-condensed { font-family: 'Barlow Condensed', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }
      `}</style>
    </>
  )
}
