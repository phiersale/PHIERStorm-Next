'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import WhyNow from '@/components/WhyNow'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Show modal only once per browser session
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('entryModalShown')
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setModalOpen(true)
        document.body.style.overflow = 'hidden'
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  // Close modal and allow escape key
  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
    sessionStorage.setItem('entryModalShown', '1')
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) closeModal()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [modalOpen])

  // Scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const btt = document.getElementById('back-to-top')
      if (btt) {
        if (window.scrollY > 400) btt.classList.add('visible')
        else btt.classList.remove('visible')
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // New video (cascade / zoom)
  const videoThumbnail = 'https://img.youtube.com/vi/C2mMIx5yoyw/hqdefault.jpg'
  const videoEmbedSrc = 'https://www.youtube.com/embed/C2mMIx5yoyw?autoplay=1&rel=0'

  const playVideo = () => setVideoPlaying(true)

  return (
    <>
      {/* Under construction banner */}
      <div className="bg-amber-600 text-black text-center py-2 text-sm font-bold">
        🚧 Site under construction – <Link href="/join" className="underline font-extrabold">Join us → now hiring</Link>
      </div>

      {/* Single Modal – no extra text */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-[#080d1a] z-[99999] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="max-w-md w-full text-center bg-[#0f1425] rounded-2xl p-8 border border-green/30 shadow-2xl"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-3xl font-bold text-white mb-6">YOU ARE NOT POWERLESS.</p>
              <button
                onClick={closeModal}
                className="bg-green hover:bg-green/80 text-bg-deep font-bold py-2 px-6 rounded-md transition"
              >
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />

      <main>
        {/* Hero Image */}
        <section className="relative bg-[#050b19] pt-8 md:pt-12 pb-4">
          <div className="container">
            <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-green/30 shadow-[0_16px_60px_rgba(0,0,0,0.55)]">
              <Image
                src="/images/Hero_Congress_Ignores_You.jpg"
                alt="Congress Ignores You"
                width={954}
                height={648}
                priority
                className="w-full h-auto object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080d1a] to-transparent" />
        </section>

        {/* Purpose Section */}
        <section className="container section text-center">
          <h1 className="mb-4">
            <span className="hero-white">Congress has the power to fix most of what's broken.</span>
            <span className="hero-green">It just doesn't have the pressure to do it.</span>
          </h1>
          <div className="max-w-[760px] mx-auto mt-8">
            <p className="text-white text-lg md:text-xl font-semibold mb-2">Your name. Your district.</p>
            <p className="text-green text-base md:text-lg font-medium mb-6">That's the leverage that changes that.</p>
            <p className="text-gray-300 text-base mb-4">Adding your name isn't symbolic — it's how scattered people become coordinated pressure Congress can't ignore, and is what they fear most: accountability.</p>
            <p className="text-white text-base font-bold mb-2">This only works if enough people act together.</p>
            <p className="text-gold text-base font-bold mb-8">Not eventually. Not theoretically. Now.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 justify-center max-w-md mx-auto">
            <Button href="/petition" variant="primary" fullWidth>✍ BE COUNTED</Button>
            <Button href="/organizers" variant="secondary" fullWidth>🤝 GET CONNECTED</Button>
          </div>
          <div className="mt-8 max-w-[600px] mx-auto">
            <p className="text-gray-500 text-sm italic">By adding your name, you help us hold Congress accountable for better decisions long before the upcoming election.</p>
          </div>
        </section>

        {/* PHIERS Acronym Visual */}
        <div className="container py-6 text-center">
          <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-green/30 shadow-md">
            <Image
              src="/images/PHIERS-Power_Held_In_Every_Reps_Seat.jpg"
              alt="PHIERS: Power Held In Every Representative's Seat"
              width={800}
              height={400}
              className="w-full h-auto object-contain"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Section 1 - Reality */}
        <section className="container section">
          <h2 className="mb-6">
            <span className="section-white">Healthcare. Cost of living. Wages. End the war. Endless gridlock.</span>
            <span className="section-green">These aren't unsolvable problems.</span>
          </h2>
          <div className="max-w-[760px] mx-auto">
            <p className="text-gray-300 text-base mb-3">They're problems that aren't being forced to resolution.</p>
            <p className="text-white text-base font-semibold mb-2">We've tried voting.</p>
            <p className="text-white text-base font-semibold mb-2">We've tried awareness.</p>
            <p className="text-white text-base font-semibold mb-2">We've tried outrage.</p>
            <p className="text-white text-base font-semibold mb-2">We've tried waiting.</p>
            <p className="text-gray-300 text-base mb-3">And every cycle, the same outcome repeats.</p>
            <p className="text-red-500 text-3xl md:text-4xl font-black my-6">Nothing structural changes.</p>
            <p className="text-gray-300 text-base">Not because people don't care.<br />Because pressure isn't coordinated.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Section 2 - Failure */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="mb-6">
              <span className="section-white">Elected officials respond to one thing:</span>
              <span className="section-green">Concentrated, unavoidable pressure inside their own district.</span>
            </h2>
            <div className="max-w-[760px] mx-auto">
              <p className="text-gray-300 text-base mb-2">Not opinions.</p>
              <p className="text-gray-300 text-base mb-2">Not noise.</p>
              <p className="text-gray-300 text-base mb-4">Not scattered frustration.</p>
              <p className="text-white text-base font-semibold mb-2">Protests create attention.</p>
              <p className="text-white text-base font-semibold mb-2">Petitions create signals.</p>
              <p className="text-green text-2xl md:text-3xl font-extrabold my-4">PHIERS creates consequences.</p>
              <p className="text-white text-2xl md:text-3xl font-black">PHIERS turns scattered people into coordinated pressure.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Anchor line */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Mechanism with video */}
        <section className="container section text-center">
          <h2 className="mb-6">
            <span className="section-white">1,500 people in a district is the tipping point.</span>
            <span className="section-green">Not a national percentage — a district-level pressure block Congress cannot ignore.</span>
          </h2>
          <div className="max-w-[760px] mx-auto">
            <p className="text-gray-300 text-base mb-2">Built since 2009.</p>
            <p className="text-gray-300 text-base mb-2">Proven math.</p>
            <p className="text-gray-300 text-base mb-6">Zero ideology.</p>
          </div>

          {/* Video container - new cascade video */}
          <div className="video-container max-w-[800px] mx-auto my-6" ref={containerRef}>
            {!videoPlaying ? (
              <div
                className="video-wrapper cursor-pointer group"
                onClick={playVideo}
                style={{ backgroundImage: `url(${videoThumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={videoEmbedSrc}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px' }}
              />
            )}
          </div>

          <p className="font-condensed text-green text-sm text-center mt-2">LEVERAGE is Power Held In Every Representative's Seat (PHIERS)</p>

          {/* 4-step process */}
          <div className="max-w-[600px] mx-auto mt-8 space-y-5 text-left">
            <div>
              <p className="text-white text-lg font-bold">1. You add your name</p>
              <p className="text-gray-400 text-sm">A real number tied to your representative — verified, by district, on the record.</p>
            </div>
            <div>
              <p className="text-white text-lg font-bold mt-3">2. We coordinate district by district</p>
              <p className="text-gray-400 text-sm">Real people. Real numbers. Tied to the representatives who have to respond.</p>
            </div>
            <div>
              <p className="text-white text-lg font-bold mt-3">3. Pressure becomes unavoidable</p>
              <p className="text-gray-400 text-sm">When enough people act together, ignoring them becomes more dangerous than responding — and change becomes inevitable.</p>
            </div>
            <div>
              <p className="text-white text-lg font-bold mt-3">4. Congress responds — or gets replaced before July 4</p>
              <p className="text-gray-400 text-sm">That's how leverage works. That's how it has always worked. That's how it works now.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* TeleCARE Section with tablet image and badges */}
        <section className="container section">
          <div className="text-center mb-6">
            <h2 className="font-display text-3xl md:text-4xl text-white">TeleCARE</h2>
            <p className="text-gray-300 mt-2">The $600 telehealth model that works today</p>
          </div>
          <div className="max-w-[600px] mx-auto text-center">
            <Image
              src="/images/PHIERS_Tablet__Firewall.png"
              alt="Telehealth tablet - PHIERS powered solutions"
              width={500}
              height={400}
              className="mx-auto rounded-lg border border-green/20"
              sizes="(max-width: 600px) 100vw, 500px"
            />
            {/* Badges - clean text only */}
            <div className="mt-4 space-y-1 text-gray-400 text-sm font-light">
              <div>Funded by TeleCARE</div>
              <div>Sponsored Telehealth Placement</div>
            </div>
            <p className="text-gray-300 mt-6 text-base">
              Sponsored telehealth placement, funded by immediate savings.
            </p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Math section (cascade, Chenoweth) */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="mb-6">
              <span className="section-white">1,500 × 435 congressional districts</span>
              <span className="section-green">= ~650,000 people.</span>
            </h2>
            <div className="max-w-[760px] mx-auto">
              <p className="text-white text-lg font-semibold mb-2">That's it.</p>
              <p className="text-gray-300 text-base mb-2">Not the whole country.</p>
              <p className="text-gray-300 text-base mb-2">Not a mass movement.</p>
              <p className="text-gray-300 text-base mb-3">Just enough people in the right places at the same time.</p>
              <p className="text-gray-300 text-base mb-6">Because it's not about size. It's about placement.</p>
            </div>
            <div className="max-w-[500px] mx-auto my-6">
              <Image src="/images/99_to_1_-_Great_Odds.jpg" alt="99 to 1 — Great Odds" width={500} height={300} className="w-full h-auto rounded-lg border border-green/20" sizes="500px" />
            </div>
            <div className="border-t border-green/20 pt-6 mt-6">
              <p className="text-white text-lg mb-2">One conversion funds twelve more.</p>
              <p className="text-white text-lg mb-2">Twelve fund 148.</p>
              <p className="text-white text-lg mb-3">148 fund 1,825.</p>
              <p className="text-white text-xl font-bold mb-3">The cascade doesn't slow — it accelerates.</p>
              <p className="text-gray-300 text-base mb-2">In nine iterations: 234 million Americans covered.</p>
              <p className="text-gray-300 text-base mb-4">In 8–13 months.</p>
              <p className="text-gold text-lg font-bold mb-6">That's not a campaign promise. That's arithmetic.</p>
              <div className="max-w-[500px] mx-auto my-6">
                <Image src="/images/Cascade_Math.jpg" alt="Cascade Math" width={500} height={300} className="w-full h-auto rounded-lg border border-green/20" sizes="500px" />
              </div>
            </div>
            <div className="border-t border-green/20 pt-6 mt-6">
              <div className="max-w-[380px] mx-auto mb-4">
                <Image src="/images/3.5pct_Erica_Chenoweth.jpg" alt="3.5% — Chenoweth Research" width={380} height={250} className="rounded-lg border border-white/10 mx-auto" sizes="380px" />
              </div>
              <p className="text-gray-300 text-sm mb-3">Harvard researcher Erica Chenoweth studied 323 campaigns across a century of political history.</p>
              <p className="text-white text-lg font-bold mb-3">Finding: when people act together in a coordinated, sustained way — systems respond — and overthrow totalitarian governments every time.</p>
              <p className="text-gray-300 text-base mb-2">Every time.</p>
              <p className="text-gray-300 text-base mb-2">Without exception.</p>
              <p className="text-gray-300 text-base mb-2">In 323 campaigns.</p>
              <p className="text-green text-3xl font-bold">Not once did it fail.</p>
              <p className="text-gray-500 text-sm mt-3">Authority confirms what the math already shows.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Three Kinds of Power */}
        <section className="container section">
          <div className="text-center mb-6">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Three Kinds of Power</span>
            <h2 className="mb-2">
              <span className="section-white">Three kinds of power.</span>
              <span className="section-green">One movement.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            <div className="bg-bg-card border border-green/20 rounded-xl p-6 h-full border-t-4 border-t-red-500">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-display text-2xl text-white mb-1">Political Power</div>
              <p className="text-gray-400 text-sm">Organized people forcing Congress to respond.</p>
              <p className="text-gray-400 text-sm mt-2">When 1,500 constituents in a district are on the record with a specific demand, their representative has two choices: act — or face replacement. PHIERStorm makes that unavoidable.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-6 h-full border-t-4 border-t-gold">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-display text-2xl text-white mb-1">Mathematical Power</div>
              <p className="text-gray-400 text-sm">Redirecting trillions already being wasted.</p>
              <p className="text-gray-400 text-sm mt-2">$10,000 per person vs. $600 per person. Same care. One-sixteenth the cost. $2.73 trillion in annual savings. The money exists. We're just using it wrong.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-6 h-full border-t-4 border-t-green">
              <div className="text-3xl mb-2">🛒</div>
              <div className="font-display text-2xl text-white mb-1">Market Power</div>
              <p className="text-gray-400 text-sm">Cooperative marketplace to fund public grocery store nationwide, along with lots of good jobs to strengthen the safety net and the supply chain, so everybody wins.</p>
            </div>
          </div>
          <p className="font-condensed text-xl text-green font-bold text-center">All three only work when people act together in the same place at the same time.</p>
          <p className="text-gray-400 text-center mt-3">Coordination is the mechanism. That's what your name does.</p>
        </section>

        {/* Inevitability */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="mb-6">
              <span className="section-white">When people are organized, systems respond.</span>
              <span className="section-green">They always have.</span>
            </h2>
            <div className="max-w-[760px] mx-auto">
              <p className="text-gray-300 text-base mb-3">Not because systems are fair.<br />Because organized people make inaction more expensive than action.</p>
              <p className="text-white text-xl font-bold mb-4">That's the only mechanism that has ever worked.</p>
              <p className="text-gray-300 text-base mb-3">The only question is whether this pressure stays scattered — or becomes organized on purpose.</p>
              <p className="text-green text-3xl font-bold">PHIERS is what organized action looks like.</p>
              <div className="max-w-[500px] mx-auto mt-6">
                <Image src="/images/Power_of_the_People_Capitol.jpg" alt="The power of the people is stronger than the people in power" width={500} height={300} className="w-full h-auto rounded-lg border border-green/20" sizes="500px" />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Credibility */}
        <section className="container section">
          <div className="text-center mb-6">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Credibility</span>
            <p className="text-gray-400 text-base italic mb-6">Each of the following independently validates a different part of the system. They were not coordinated. They arrived separately. That's what makes them credible.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8">
            <Image src="/images/DotComMag_Logo.jpg" alt="DotCom Magazine" width={55} height={28} className="opacity-70 hover:opacity-100 transition-opacity h-7 w-auto" />
            <Image src="/images/Pathos_Comms_Logo.png" alt="Pathos Communications" width={55} height={28} className="opacity-70 hover:opacity-100 transition-opacity h-7 w-auto" />
            <Image src="/images/Mark_Cuban_Cost_Plus_Drug.png" alt="Cost Plus Drugs" width={55} height={28} className="opacity-70 hover:opacity-100 transition-opacity h-7 w-auto" />
          </div>
          <div className="space-y-4 max-w-[700px] mx-auto">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-condensed font-bold text-white">Two of the original Sharks from Shark Tank independently discovered PHIERS through their own PR firms — and publicly put their names next to our work. That's a verdict, not an endorsement.</p>
            </div>
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">Kevin Harrington, an original Shark</p>
              <p className="text-gray-400 text-sm">is associated with Pathos Communications, the firm that conducted a full review of our framework and chose to stake its public reputation on representing PHIERS.</p>
            </div>
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">Kevin O'Leary, another original Shark</p>
              <p className="text-gray-400 text-sm">is associated with DotCom Magazine, which independently interviewed Will Price in 2022 after their team evaluated the PHIERS model and deemed it serious enough for national attention.</p>
            </div>
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">Two of the three founding Sharks — through two separate PR organizations — reached the same conclusion on their own:</p>
              <p className="text-gray-400 text-sm">PHIERS is credible, structurally sound, and worth amplifying.</p>
            </div>
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">Mark Cuban's Cost Plus Drugs</p>
              <p className="text-gray-400 text-sm">stands to benefit from the structural reforms PHIERS enables — not because we are profit‑driven, but because our model aligns with a more ethical, transparent, cost‑lowering future for healthcare. That alignment gives PHIERS a unique position when it comes to being taken seriously by world‑class investors, even though our mission is not about money. It's about doing what is right for humanity.</p>
            </div>
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">Congressional support since 2009</p>
              <p className="text-gray-400 text-sm">Before telehealth was mainstream. Before Cost Plus Drugs existed. The idea was right then. The moment is now.</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/about" className="text-green text-sm font-condensed font-bold hover:underline">→ See the full validation history</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Image above WhyNow */}
        <div className="container my-4">
          <Image
            src="/images/Why_Now-Dark_US_Capitol.jpg"
            alt="Why Now - US Capitol"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>

        <WhyNow />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="max-w-[400px] mx-auto mb-6">
            <Image src="/images/PHIERS-Power_Held_In_Every_Reps_Seat.jpg" alt="Power Held In Every Representative's Seat" width={400} height={100} className="w-full h-auto opacity-90" sizes="400px" />
          </div>
          <p className="font-condensed text-xl text-gold font-bold mb-3">District counts begin compiling immediately.</p>
          <p className="text-white text-lg mb-2">Your name.</p>
          <p className="text-white text-lg mb-2">Your district.</p>
          <p className="text-white text-lg mb-4">On the record.</p>
          <p className="text-gray-400 text-base mb-2">Counted.</p>
          <p className="text-gray-400 text-base mb-2">Delivered.</p>
          <p className="text-gray-400 text-base mb-2">Impossible to ignore.</p>
          <p className="text-gray-400 text-base mb-2">Impossible to deny.</p>
          <p className="text-gray-400 text-base mb-6">Impossible to delete.</p>
          <p className="font-condensed text-white text-lg mb-4">Be part of the first coordinated pressure group Congress can't ignore, wait out, or hide from.</p>
          <div className="flex flex-col gap-3 max-w-md mx-auto">
            <Button href="/petition" variant="primary" fullWidth>✍ BE COUNTED</Button>
            <Button href="/organizers" variant="secondary" fullWidth>🤝 GET CONNECTED</Button>
          </div>
        </section>
      </main>

      <Footer />

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
          background-size: cover;
          background-position: center;
        }
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        /* Fix mobile menu overlap – will be applied globally, but Navigation component must also be updated */
        @media (max-width: 768px) {
          nav .menu-items {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  )
}