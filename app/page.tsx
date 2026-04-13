// FILE: app/page.tsx - COMPLETE A+++ REWRITE (Tiers 1-7 applied)

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [congressModalOpen, setCongressModalOpen] = useState(false)

  useEffect(() => {
    const hasSeenFirst = sessionStorage.getItem('entryModalShown')
    const hasSeenCongress = sessionStorage.getItem('congressModalShown')
    
    if (!hasSeenFirst) {
      setModalOpen(true)
      document.body.style.overflow = 'hidden'
    } else if (!hasSeenCongress) {
      setCongressModalOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }, [])

  const closeEntryModal = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
    sessionStorage.setItem('entryModalShown', '1')
    
    const hasSeenCongress = sessionStorage.getItem('congressModalShown')
    if (!hasSeenCongress) {
      setCongressModalOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const closeCongressModal = () => {
    setCongressModalOpen(false)
    document.body.style.overflow = ''
    sessionStorage.setItem('congressModalShown', '1')
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
      {/* Modal 1 - Entry Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-[#080d1a] z-[99999] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEntryModal}
          >
            <motion.div
              className="max-w-[1000px] w-full text-center"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/You_Are_Not_Powerless.jpg"
                  alt="You Are Not Powerless"
                  fill
                  className="object-cover"
                />
              </div>
              <Button onClick={closeEntryModal}>Be Heard →</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal 2 - Congress Modal */}
      <AnimatePresence>
        {congressModalOpen && (
          <motion.div
            className="fixed inset-0 bg-[#080d1a] z-[99999] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCongressModal}
          >
            <motion.div
              className="max-w-[1000px] w-full text-center"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/Congress_Doesnt_Listen_to_You-3-Backpack.jpg"
                  alt="Congress doesn't have to listen to you. This is how you make them."
                  fill
                  className="object-cover"
                />
              </div>
              <Button onClick={closeCongressModal}>Be Heard →</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />

      <main>
        {/* Hero Image */}
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            src="/images/PHIERS-Power_Held_In_Every_Reps_Seat.jpg"
            alt="PHIERS — Power Held In Every Representative's Seat"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent" />
        </div>

        {/* Hero Content - Two-tone rhythm */}
        <section className="container section text-center">
          <h1 className="mb-4">
            <span className="block text-white text-4xl md:text-5xl lg:text-6xl font-black">Congress has the power to fix most of what's broken.</span>
            <span className="block text-green text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4">It just doesn't have the pressure to do it.</span>
          </h1>
          
          <div className="max-w-[760px] mx-auto mt-8">
            <p className="text-white text-lg md:text-xl font-semibold mb-2">Your name. Your district.</p>
            <p className="text-green text-base md:text-lg font-medium mb-6">That's the leverage that changes that.</p>
            
            <p className="text-gray-300 text-base mb-4">Adding your name isn't symbolic — it's how scattered people become coordinated pressure Congress can't ignore.</p>
            
            <p className="text-white text-base font-bold mb-2">This only works if enough people act together.</p>
            <p className="text-gold text-base font-bold mb-8">Not eventually. Not theoretically. Now.</p>
          </div>

          {/* Fork Buttons */}
          <div className="flex flex-col md:flex-row gap-3 justify-center max-w-md mx-auto">
            <Button href="/petition" variant="primary" fullWidth>✍ BE COUNTED</Button>
            <Button href="/organizers" variant="secondary" fullWidth>✊ I ORGANIZE</Button>
          </div>

          {/* Commitment Wedge */}
          <div className="mt-8 max-w-[600px] mx-auto">
            <p className="text-gray-500 text-sm italic">By adding your name, you're committing to be part of the first coordinated pressure group Congress can't wait out.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* SECTION 1 — THE REALITY */}
        <section className="container section">
          <h2 className="mb-6">
            <span className="block text-white text-3xl md:text-4xl font-black">Healthcare. Cost of living. Wages. Endless gridlock.</span>
            <span className="block text-green text-2xl md:text-3xl font-extrabold mt-3">These aren't unsolvable problems.</span>
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

        {/* SECTION 2 — THE FAILURE */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="mb-6">
              <span className="block text-white text-3xl md:text-4xl font-black">Elected officials respond to one thing:</span>
              <span className="block text-green text-2xl md:text-3xl font-extrabold mt-3">Concentrated, unavoidable pressure inside their own district.</span>
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

        {/* ANCHOR LINE */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* SECTION 3 — THE MECHANISM */}
        <section className="container section text-center">
          <h2 className="mb-6">
            <span className="block text-white text-3xl md:text-4xl font-black">1,500 people in a district is the tipping point.</span>
            <span className="block text-green text-2xl md:text-3xl font-extrabold mt-3">Not a national percentage — a district-level pressure block Congress cannot ignore.</span>
          </h2>
          
          <div className="max-w-[760px] mx-auto">
            <p className="text-gray-300 text-base mb-2">Built since 2009.</p>
            <p className="text-gray-300 text-base mb-2">Proven math.</p>
            <p className="text-gray-300 text-base mb-6">Zero ideology.</p>
          </div>

          {/* Video */}
          <div className="video-container max-w-[800px] mx-auto my-6">
            <div id="wrap-leverage-id" className="video-wrapper cursor-pointer group" onClick={() => playVideo('leverage-id', 'https://www.youtube.com/embed/wnSy5jjxAac?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/wnSy5jjxAac/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
          </div>
          <p className="font-condensed text-green text-sm text-center mt-2">LEVERAGE is Power Held In Every Representative's Seat (PHIERS)</p>

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
              <p className="text-gray-400 text-sm">When enough people act together, ignoring them becomes more dangerous than responding.</p>
            </div>
            <div>
              <p className="text-white text-lg font-bold mt-3">4. Congress responds — or gets replaced</p>
              <p className="text-gray-400 text-sm">That's how leverage works. That's how it has always worked. That's how it works now.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* SECTION 4 — THE MATH */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="mb-6">
              <span className="block text-white text-3xl md:text-4xl font-black">1,500 × 435 congressional districts</span>
              <span className="block text-green text-4xl md:text-5xl font-extrabold mt-2">= ~650,000 people.</span>
            </h2>
            
            <div className="max-w-[760px] mx-auto">
              <p className="text-white text-lg font-semibold mb-2">That's it.</p>
              <p className="text-gray-300 text-base mb-2">Not the whole country.</p>
              <p className="text-gray-300 text-base mb-2">Not a mass movement.</p>
              <p className="text-gray-300 text-base mb-3">Just enough people in the right places at the same time.</p>
              <p className="text-gray-300 text-base mb-6">Because it's not about size. It's about placement.</p>
            </div>

            {/* Diagram */}
            <div className="max-w-[500px] mx-auto my-6">
              <Image
                src="/images/99_to_1_-_Great_Odds.jpg"
                alt="99 to 1 — Great Odds"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20"
              />
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
                <Image
                  src="/images/Cascade_Math.jpg"
                  alt="Cascade Math — One becomes twelve"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg border border-green/20"
                />
              </div>
            </div>

            <div className="border-t border-green/20 pt-6 mt-6">
              <div className="max-w-[380px] mx-auto mb-4">
                <Image
                  src="/images/3.5pct_Erica_Chenoweth.jpg"
                  alt="3.5% — Chenoweth Research"
                  width={380}
                  height={250}
                  className="rounded-lg border border-white/10 mx-auto"
                />
              </div>
              <p className="text-gray-300 text-sm mb-3">Harvard researcher Erica Chenoweth studied 323 campaigns across a century of political history.</p>
              <p className="text-white text-lg font-bold mb-3">Finding: when people act together in a coordinated, sustained way — systems respond.</p>
              <p className="text-gray-300 text-base mb-2">Every time.</p>
              <p className="text-gray-300 text-base mb-2">Without exception.</p>
              <p className="text-gray-300 text-base mb-2">In 323 campaigns.</p>
              <p className="text-green text-3xl font-bold">Not once did it fail.</p>
              <p className="text-gray-500 text-sm mt-3">Authority confirms what the math already shows.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* SECTION 5 — THREE KINDS OF POWER */}
        <section className="container section">
          <div className="text-center mb-6">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Three Kinds of Power</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-2">Three kinds of power.<br /><span className="text-green">One movement.</span></h2>
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
              <p className="text-gray-400 text-sm">Organizing how we spend so broken systems can't survive.</p>
              <p className="text-gray-400 text-sm mt-2">We buy from the same suppliers corporations use — and undercut them permanently, because we don't need to extract profit from our own people.</p>
            </div>
          </div>
          
          <p className="font-condensed text-xl text-green font-bold text-center">All three only work when people act together in the same place at the same time.</p>
          <p className="text-gray-400 text-center mt-3">Coordination is the mechanism. That's what your name does.</p>
        </section>

        <hr className="border-green/20" />

        {/* SECTION 6 — INEVITABILITY */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="mb-6">
              <span className="block text-white text-3xl md:text-4xl font-black">When people are organized, systems respond.</span>
              <span className="block text-green text-2xl md:text-3xl font-extrabold mt-3">They always have.</span>
            </h2>
            
            <div className="max-w-[760px] mx-auto">
              <p className="text-gray-300 text-base mb-3">Not because systems are fair.<br />Because organized people make inaction more expensive than action.</p>
              <p className="text-white text-xl font-bold mb-4">That's the only mechanism that has ever worked.</p>
              <p className="text-gray-300 text-base mb-3">The only question is whether the pressure gets organized by accident — or on purpose.</p>
              <p className="text-green text-3xl font-bold">PHIERS is what organized action looks like.</p>
              
              <div className="max-w-[400px] mx-auto mt-6">
                <Image
                  src="/images/PHIERStorm_the_Movement.png"
                  alt="PHIERStorm — The Movement"
                  width={400}
                  height={160}
                  className="w-full h-auto opacity-90"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* CREDIBILITY SECTION */}
        <section className="container section">
          <div className="text-center mb-6">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Credibility</span>
            <p className="text-gray-400 text-base italic mb-6">Each of the following independently validates a different part of the system. They were not coordinated. They arrived separately. That's what makes them credible.</p>
          </div>
          
          {/* Logo Bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8">
            <Image src="/images/DotComMag_Logo.png" alt="DotCom Magazine" width={55} height={28} className="opacity-70 hover:opacity-100 transition-opacity h-7 w-auto" />
            <Image src="/images/Pathos_Comms_Logo.png" alt="Pathos Communications" width={55} height={28} className="opacity-70 hover:opacity-100 transition-opacity h-7 w-auto" />
            <Image src="/images/HarvardKennedySchool_Logo.jpg" alt="Harvard Kennedy School" width={55} height={28} className="opacity-70 hover:opacity-100 transition-opacity h-7 w-auto" />
            <Image src="/images/Harvard_Logo.png" alt="Harvard University" width={45} height={22} className="opacity-70 hover:opacity-100 transition-opacity h-7 w-auto" />
            <Image src="/images/Cost_Plus_Drugs_logo.png" alt="Cost Plus Drugs" width={55} height={28} className="opacity-70 hover:opacity-100 transition-opacity h-7 w-auto" />
          </div>
          
          <div className="space-y-4 max-w-[700px] mx-auto">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-condensed font-bold text-white">Kevin Harrington — original Shark Tank</p>
              <p className="text-gray-400 text-sm">Pathos Communications staked their public reputation on PHIERS. That's a verdict, not an endorsement.</p>
            </div>
            
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">Kevin O'Leary's platform — DotCom Magazine</p>
              <p className="text-gray-400 text-sm">Interviewed Will Price in 2022. Two original Sharks. On record. Independently.</p>
            </div>
            
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">Mark Cuban's Cost Plus Drugs</p>
              <p className="text-gray-400 text-sm">7 million customers. 80–90% drug savings. The PHIERSale model — already at scale. We predicted it. Cuban proved it.</p>
            </div>
            
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">Zortt Telehealth Platform</p>
              <p className="text-gray-400 text-sm">Proof of concept we've publicized since 2011. The model works. The infrastructure exists. Active since 2023.</p>
            </div>
            
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">Harvard Kennedy School</p>
              <p className="text-gray-400 text-sm">3.5% sustained participation. 323 campaigns. Zero failures. Not inspiration — confirmation.</p>
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

        {/* FINAL CTA */}
        <section className="container section text-center">
          <div className="max-w-[400px] mx-auto mb-6">
            <Image
              src="/images/PHIERS-Power_Held_In_Every_Reps_Seat.jpg"
              alt="Power Held In Every Representative's Seat"
              width={400}
              height={100}
              className="w-full h-auto opacity-90"
            />
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
          
          <p className="font-condensed text-white text-lg mb-4">Be part of the first coordinated pressure group Congress can't wait out.</p>
          
          <div className="flex flex-col gap-3 max-w-md mx-auto">
            <Button href="/petition" variant="primary" fullWidth>✍ BE COUNTED</Button>
            <Button href="/organizers" variant="secondary" fullWidth>✊ I ORGANIZE</Button>
          </div>
        </section>
      </main>

      <Footer />

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

// END FILE: app/page.tsx - TIERS 1-7 COMPLETE
