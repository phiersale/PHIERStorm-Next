'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

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

  return (
    <>
      {/* Modal 1 */}
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
                  alt="Congress doesn't have to listen to you. This is how you make them."
                  fill
                  className="object-cover"
                />
              </div>
              <button
                onClick={closeEntryModal}
                className="inline-block mt-4 px-7 py-2 bg-transparent text-[#3ddc84] border border-[#3ddc84]/70 rounded-full font-condensed font-semibold text-base tracking-wide hover:border-[#3ddc84] hover:bg-[#3ddc84]/10 transition-all"
              >
                Be Heard →
              </button>
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
              <button
                onClick={closeCongressModal}
                className="inline-block mt-4 px-7 py-2 bg-transparent text-[#3ddc84] border border-[#3ddc84]/70 rounded-full font-condensed font-semibold text-base tracking-wide hover:border-[#3ddc84] hover:bg-[#3ddc84]/10 transition-all"
              >
                Be Heard →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />

      <main className="pt-24 pb-16">
        {/* HERO IMAGE */}
        <div className="w-full mb-8">
          <Image
            src="/images/Congress_Doesnt_Listen_to_You-3-Backpack.jpg"
            alt="Congress doesn't have to listen to you. This is how you make them."
            width={1920}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* HERO COPY */}
        <section className="px-6 py-8 max-w-[900px] mx-auto text-center">
          <p className="font-condensed text-xl text-white mb-3">Congress has the power to fix most of what's broken.</p>
          <p className="font-condensed text-xl text-gray-400 mb-6">It just doesn't have the pressure to do it.</p>
          
          <p className="text-gray-400 text-lg mb-4">Your name. Your district.</p>
          <p className="font-condensed text-2xl text-[#3ddc84] font-bold mb-6">That's the leverage that changes that.</p>
          
          <p className="text-gray-400 text-base mb-4">Adding your name isn't symbolic —<br />it's how scattered people become<br />coordinated pressure Congress can't ignore.</p>
          
          <p className="font-condensed text-lg text-white font-bold mb-2">This only works if enough people act together.</p>
          <p className="font-condensed text-lg text-[#ffd60a] font-bold mb-8">Not eventually. Not theoretically. Now.</p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/petition" className="px-6 py-3 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">✍ Be counted</Link>
            <Link href="/organizers" className="px-8 py-4 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">✊ I organize</Link>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* SECTION 1 — THE REALITY */}
        <section className="max-w-[760px] mx-auto px-6 py-16">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">The Reality</span>
          <p className="text-white font-semibold text-xl mb-4">Healthcare. Cost of living. Wages. Endless gridlock.</p>
          <p className="text-gray-400 mb-4">These aren't unsolvable problems.<br />They're problems that aren't being forced to resolution.</p>
          <p className="text-gray-400 mb-3">We've tried voting.</p>
          <p className="text-gray-400 mb-3">We've tried awareness.</p>
          <p className="text-gray-400 mb-3">We've tried outrage.</p>
          <p className="text-gray-400 mb-4">We've tried waiting.</p>
          <p className="font-condensed text-white text-lg mb-3">And every cycle, the same outcome repeats.</p>
          <p className="font-condensed font-bold text-2xl text-red-500 my-6">Nothing structural changes.</p>
          <p className="text-gray-400">Not because people don't care.<br />Because pressure isn't coordinated.</p>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* SECTION 2 — THE FAILURE */}
        <section className="bg-[#0a1628] border-y border-[#3ddc84]/10 py-16 px-6">
          <div className="max-w-[760px] mx-auto">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">The Failure</span>
            <p className="text-gray-400 mb-4">Elected officials respond to one thing:</p>
            <p className="font-condensed text-xl text-white font-bold mb-6">Concentrated, unavoidable pressure inside their own district.</p>
            <p className="text-gray-400 mb-3">Not opinions.</p>
            <p className="text-gray-400 mb-3">Not noise.</p>
            <p className="text-gray-400 mb-6">Not scattered frustration.</p>
            <p className="text-gray-400 mb-3">Protests create attention.</p>
            <p className="text-gray-400 mb-3">Petitions create signals.</p>
            <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-6">PHIERS creates consequences.</p>
            <p className="font-condensed text-xl text-white font-bold mb-6">PHIERS turns scattered people into coordinated pressure.</p>
            
            <div className="border-t border-[#3ddc84]/20 my-8 pt-8 text-center">
              <p className="text-gray-400 text-lg mb-4">Nothing changes until ignoring people costs more than responding to them.</p>
              <p className="font-condensed text-2xl text-[#3ddc84] font-bold">PHIERS is how we raise that cost.</p>
            </div>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* SECTION 3 — THE MECHANISM */}
        <section className="max-w-[760px] mx-auto px-6 py-16">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">The Mechanism</span>
          <p className="font-condensed text-2xl text-[#3ddc84] font-bold mb-4">1,500 people in a district is the tipping point.</p>
          <p className="text-gray-400 mb-6">Not a national percentage — a district-level pressure block Congress cannot ignore.</p>
          <p className="text-gray-400 mb-3">Built since 2009.</p>
          <p className="text-gray-400 mb-3">Proven math.</p>
          <p className="text-gray-400 mb-8">Zero ideology.</p>
          
          <div className="border-t border-[#3ddc84]/20 my-8 pt-8 space-y-6">
            <p className="text-gray-300 text-lg">1. You add your name</p>
            <p className="text-gray-400 ml-4 -mt-4 text-sm">A real number tied to your representative — verified, by district, on the record.</p>
            <p className="text-gray-300 text-lg mt-4">2. We coordinate district by district</p>
            <p className="text-gray-400 ml-4 -mt-4 text-sm">Real people. Real numbers. Tied to the representatives who have to respond.</p>
            <p className="text-gray-300 text-lg mt-4">3. Pressure becomes unavoidable</p>
            <p className="text-gray-400 ml-4 -mt-4 text-sm">When enough people act together, ignoring them becomes more dangerous than responding.</p>
            <p className="text-gray-300 text-lg mt-4">4. Congress responds — or gets replaced</p>
            <p className="text-gray-400 ml-4 -mt-4 text-sm">That's how leverage works. That's how it has always worked. That's how it works now.</p>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* SECTION 4 — THE MATH */}
        <section className="bg-[#0a1628] border-y border-[#3ddc84]/10 py-16 px-6">
          <div className="max-w-[760px] mx-auto text-center">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">The Math</span>
            
            <p className="font-display text-4xl md:text-5xl text-white mb-2">1,500 × 435 congressional districts</p>
            <p className="font-display text-5xl md:text-6xl text-[#3ddc84] font-bold mb-6">= ~650,000 people.</p>
            <p className="text-gray-400 text-lg mb-4">That's it.</p>
            <p className="text-gray-400 mb-3">Not the whole country.</p>
            <p className="text-gray-400 mb-3">Not a mass movement.</p>
            <p className="text-gray-400 mb-3">Just enough people in the right places at the same time.</p>
            <p className="text-gray-400 mb-6">Because it's not about size. It's about placement.</p>
            
            <div className="border-t border-[#3ddc84]/20 my-8 pt-8">
              <p className="text-gray-300 text-lg mb-3">One conversion funds twelve more.</p>
              <p className="text-gray-300 text-lg mb-3">Twelve fund 148.</p>
              <p className="text-gray-300 text-lg mb-4">148 fund 1,825.</p>
              <p className="font-condensed text-xl text-white font-bold mb-4">The cascade doesn't slow — it accelerates.</p>
              <p className="text-gray-400 mb-3">In nine iterations: 234 million Americans covered.</p>
              <p className="text-gray-400 mb-6">In 8–13 months.</p>
              <p className="font-condensed text-lg text-[#ffd60a] font-bold mb-8">That's not a campaign promise. That's arithmetic.</p>
            </div>
            
            <div className="border-t border-[#3ddc84]/20 my-8 pt-8">
              <div className="max-w-[380px] mx-auto mb-6">
                <Image
                  src="/images/3.5pct_Erica_Chenoweth.jpg"
                  alt="3.5% — Chenoweth Research"
                  width={380}
                  height={250}
                  className="rounded-lg border border-white/10 mx-auto"
                />
              </div>
              <p className="text-gray-400 text-sm mb-4">Harvard researcher Erica Chenoweth studied 323 campaigns across a century of political history.</p>
              <p className="font-condensed text-lg text-white font-bold mb-4">Finding: when people act together in a coordinated, sustained way — systems respond.</p>
              <p className="text-gray-400 mb-3">Every time.</p>
              <p className="text-gray-400 mb-3">Without exception.</p>
              <p className="text-gray-400 mb-3">In 323 campaigns.</p>
              <p className="font-condensed text-xl text-[#3ddc84] font-bold">Not once did it fail.</p>
              <p className="text-gray-400 text-sm mt-4">Authority confirms what the math already shows.</p>
            </div>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* SECTION 5 — THREE KINDS OF POWER */}
        <section className="max-w-[1000px] mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">Three Kinds of Power</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-3">Three kinds of power.<br /><span className="text-[#3ddc84]">One movement.</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-7 h-full border-t-4 border-t-red-500">
              <div className="text-3xl mb-3">⚡</div>
              <div className="font-display text-2xl text-white mb-1">Political</div>
              <p className="text-gray-400 text-sm">Organized people forcing Congress to respond.</p>
              <p className="text-gray-400 text-sm mt-3">When 1,500 constituents in a district are on the record with a specific demand, their representative has two choices: act — or face replacement. PHIERStorm makes that unavoidable.</p>
            </div>
            
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-7 h-full border-t-4 border-t-[#ffd60a]">
              <div className="text-3xl mb-3">💰</div>
              <div className="font-display text-2xl text-white mb-1">Mathematical</div>
              <p className="text-gray-400 text-sm">Redirecting trillions already being wasted.</p>
              <p className="text-gray-400 text-sm mt-3">$10,000 per person vs. $600 per person. Same care. One-sixteenth the cost. $2.73 trillion in annual savings. The money exists. We're just using it wrong.</p>
            </div>
            
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-7 h-full border-t-4 border-t-[#3ddc84]">
              <div className="text-3xl mb-3">🛒</div>
              <div className="font-display text-2xl text-white mb-1">Market</div>
              <p className="text-gray-400 text-sm">Organizing how we spend so broken systems can't survive.</p>
              <p className="text-gray-400 text-sm mt-3">We buy from the same suppliers corporations use — and undercut them permanently, because we don't need to extract profit from our own people.</p>
            </div>
          </div>
          
          <p className="font-condensed text-xl text-[#3ddc84] font-bold text-center mt-6">All three only work when people act together in the same place at the same time.</p>
          <p className="text-gray-400 text-center mt-4">Coordination is the mechanism. That's what your name does.</p>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* SECTION 6 — INEVITABILITY */}
        <section className="bg-[#0a1628] border-y border-[#3ddc84]/10 py-16 px-6">
          <div className="max-w-[760px] mx-auto text-center">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">Inevitability</span>
            <p className="text-gray-400 text-lg mb-4">When people are organized, systems respond.</p>
            <p className="text-gray-400 text-lg mb-4">They always have.</p>
            <p className="text-gray-400 mb-4">Not because systems are fair.<br />Because organized people make inaction more expensive than action.</p>
            <p className="font-condensed text-xl text-white font-bold mb-6">That's the only mechanism that has ever worked.</p>
            <p className="text-gray-400 mb-4">The only question is whether the pressure gets organized by accident — or on purpose.</p>
            <p className="font-display text-3xl text-[#3ddc84] font-bold">PHIERS is what organized action looks like.</p>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* CREDIBILITY SNAPSHOT */}
        <section className="max-w-[760px] mx-auto px-6 py-16">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">Credibility</span>
          <p className="text-gray-400 italic mb-8">Each of the following independently validates a different part of the system.</p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#ffd60a] pl-5">
              <p className="font-condensed font-bold text-white">Kevin Harrington — original Shark Tank</p>
              <p className="text-gray-400 text-sm">Pathos Communications staked their public reputation on PHIERS. That's a verdict, not an endorsement.</p>
            </div>
            
            <div className="border-l-4 border-[#3ddc84] pl-5">
              <p className="font-condensed font-bold text-white">Kevin O'Leary's platform — DotCom Magazine</p>
              <p className="text-gray-400 text-sm">Interviewed Will Price in 2022. Two original Sharks. On record. Independently.</p>
            </div>
            
            <div className="border-l-4 border-[#3ddc84] pl-5">
              <p className="font-condensed font-bold text-white">Mark Cuban's Cost Plus Drugs</p>
              <p className="text-gray-400 text-sm">7 million customers. 80–90% drug savings. The PHIERSale model — already at scale. We predicted it. Cuban proved it.</p>
            </div>
            
            <div className="border-l-4 border-[#3ddc84] pl-5">
              <p className="font-condensed font-bold text-white">Harvard Kennedy School</p>
              <p className="text-gray-400 text-sm">3.5% sustained participation. 323 campaigns. Zero failures. Not inspiration — confirmation.</p>
            </div>
            
            <div className="border-l-4 border-[#3ddc84] pl-5">
              <p className="font-condensed font-bold text-white">Congressional support since 2009</p>
              <p className="text-gray-400 text-sm">Before telehealth was mainstream. Before Cost Plus Drugs existed. The idea was right then. The moment is now.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/about" className="text-[#3ddc84] text-sm font-condensed font-bold hover:underline">→ See the full validation history</Link>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* FINAL CTA */}
        <section className="max-w-[600px] mx-auto px-6 py-16 text-center">
          <p className="font-condensed text-xl text-[#ffd60a] font-bold mb-4">District counts begin compiling immediately.</p>
          
          <p className="text-white text-lg mb-2">Your name.</p>
          <p className="text-white text-lg mb-2">Your district.</p>
          <p className="text-white text-lg mb-6">On the record.</p>
          
          <p className="text-gray-400 mb-2">Counted.</p>
          <p className="text-gray-400 mb-2">Delivered.</p>
          <p className="text-gray-400 mb-2">Impossible to ignore.</p>
          <p className="text-gray-400 mb-2">Impossible to deny.</p>
          <p className="text-gray-400 mb-8">Impossible to delete.</p>
          
          <p className="font-condensed text-white text-lg mb-6">Be part of the first coordinated pressure group Congress can't wait out.</p>
          
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <Link href="/petition" className="px-8 py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ BE COUNTED</Link>
            <Link href="/organizers" className="px-8 py-4 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">✊ I ORGANIZE</Link>
          </div>
        </section>
      </main>

      <Footer />

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
