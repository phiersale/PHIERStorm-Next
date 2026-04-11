// app/_components/how-it-works-client.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, ChevronRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'

export function HowItWorksClient() {
  const [activeRing, setActiveRing] = useState<number | null>(0)
  const [willModalOpen, setWillModalOpen] = useState(false)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState('')

  const openModal = (src: string) => {
    setModalImageSrc(src)
    setImageModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setImageModalOpen(false)
    document.body.style.overflow = ''
  }

  const rings = [
    { 
      color: '#e63946', 
      title: '🔥 RING 0 — Stop the War. Right Now.',
      body: 'There is <strong>no part of your life that doesn\'t run on oil.</strong> Your food, your medicine, your hospital, your house — all of it. The Strait of Hormuz carries 30% of the world\'s seaborne oil. Close it and inflation doesn\'t tick up — it explodes across every supply chain simultaneously.<br><br><strong>Article 25 of the UN Charter</strong> — rules America wrote — prohibits exactly this. It gives Iran a legal off-ramp. It gives Congress a spine. It gives every American — left, right, MAGA — grounds to say: not in our name, not without a vote.',
      urgent: true 
    },
    { 
      color: '#ff6b6b', 
      title: '⚖️ RING 1 — Control Congress',
      body: 'Congress doesn\'t respond to noise. It responds to consequences.<br><br>Harvard researcher Erica Chenoweth studied 323 campaigns. Movements that reached and sustained <strong>3.5% participation succeeded every time.</strong> That\'s 12 million Americans. Organized by district. Names on the record. With electoral consequences.<br><br>The same lever that forces action on healthcare forces action on war powers. One movement. Every dimension turns.',
      urgent: false 
    },
    { 
      color: '#ffd60a', 
      title: '💊 RING 2 — $2.7 Trillion in Healthcare Savings',
      body: 'CMS pays <strong>$8,000/year per person</strong> for traditional insurance. 80% of people need only <strong>$600/year in telehealth.</strong> That frees $7,400 per person.<br><br>One conversion funds 12 more. 12 cascades to 148. 148 to 1,825. <strong>234 million Americans covered. $2.73 trillion freed annually.</strong> The cascade is self-funding and unstoppable once it starts.',
      urgent: false 
    },
    { 
      color: '#3ddc84', 
      title: '🔨 RING 3 — 12 Million New Jobs',
      body: 'Every $7,400 freed per person stays in the community instead of flowing to shareholders. Every telehealth navigator is a living-wage job. Every cooperative hub is a local employer. Every community health worker is a union-eligible role.<br><br><strong>12 million jobs.</strong> Funded from the savings. In the communities where the savings happen. The moment the conversion begins.',
      urgent: false 
    },
    { 
      color: '#3ddc84', 
      title: '🏪 RING 4 — PHIERSale: Consumer Power',
      body: '<strong>No markups. No middlemen. No profit extraction.</strong><br><br>100 million organized members = the largest purchasing bloc in America. Market dominance through pure buying power. No legislation required. No permission needed. Just organized people choosing where their money goes.',
      urgent: false 
    },
    { 
      color: '#3ddc84', 
      title: '✊ CENTER — Economic Floor for Every American',
      body: 'A monthly check for every American. A floor nobody falls through. Wages that cover rent. Veterans fully covered. An economy built for the people who work in it.<br><br><strong>This is what PHIERS was always building toward.</strong> Every ring protects it. The outer rings make it possible.',
      urgent: false 
    }
  ]

  const playVideo = (which: string, src: string) => {
    const wrap = document.getElementById('wrap-' + which)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }

  useEffect(() => {
    const timer = setTimeout(() => setActiveRing(0), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Step indicator */}
      <div className="pt-4 pb-2 text-center">
        <span className="font-condensed text-sm text-gray-500 tracking-wide uppercase">Step 2 of 3 — How the Leverage Works</span>
        <p className="font-condensed text-xs text-gray-600 opacity-65 mt-1">Three short pages. Enough to understand the whole system.</p>
      </div>

      <div className="pb-20 px-4">
        <div className="max-w-[860px] mx-auto">
          
          {/* HERO */}
          <AnimatedSection>
            <div className="text-center pt-8 pb-10">
              <div className="flex justify-center mb-4"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={90} height={90} className="opacity-85" /></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">Movements Without Leverage Don't Win.</h1>
              <div className="max-w-[720px] mx-auto">
                <p className="text-gray-400 text-lg mb-4">Protests create attention. Petitions create signals. Viral moments create headlines.</p>
                <p className="text-gray-400 text-lg mb-6">None of them create consequences.</p>
                <p className="text-white font-semibold text-xl mb-8">Congress ignores them — because nothing forces them to respond.</p>
                <p className="font-condensed font-bold text-[#3ddc84] text-lg">Until something does.</p>
                <p className="font-condensed font-bold text-white text-lg">This is that something.</p>
                <p className="font-semibold text-white text-lg mt-2">Here's how it changes.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* ONION RINGS DIAGRAM */}
          <AnimatedSection>
            <div className="bg-[#080d1a] py-8 text-center">
              <p className="font-condensed font-bold text-[#3ddc84] text-xs uppercase tracking-wider mb-2">How PHIERS Works</p>
              <h2 className="font-display text-2xl md:text-3xl text-white tracking-wide mb-2">One System. Every Layer Already Inside the Last.</h2>
              <p className="text-[#7a94b8] text-sm mb-6">Start with the most urgent threat — because nothing else works until it's stabilized.</p>
              <p className="font-condensed text-sm text-[#7a94b8] mb-4 tracking-wide">↓ Tap any ring to see what's inside</p>

              <div className="relative w-[min(520px,92vw)] aspect-square mx-auto mb-8">
                {/* Ring 0 */}
                <button
                  onClick={() => setActiveRing(activeRing === 0 ? null : 0)}
                  className={`absolute inset-0 rounded-full border-2 border-red-500/70 transition-all duration-300 hover:scale-105 ${activeRing === 0 ? 'scale-105 brightness-125' : ''}`}
                  style={{ animation: 'firePulse 2.5s ease-in-out infinite' }}
                />
                {/* Ring 1 */}
                <button
                  onClick={() => setActiveRing(activeRing === 1 ? null : 1)}
                  className={`absolute inset-[10%] rounded-full border-2 border-red-500/50 transition-all duration-300 hover:scale-105 ${activeRing === 1 ? 'scale-105 brightness-125' : ''}`}
                />
                {/* Ring 2 */}
                <button
                  onClick={() => setActiveRing(activeRing === 2 ? null : 2)}
                  className={`absolute inset-[22%] rounded-full border-2 border-yellow-500/50 transition-all duration-300 hover:scale-105 ${activeRing === 2 ? 'scale-105 brightness-125' : ''}`}
                />
                {/* Ring 3 */}
                <button
                  onClick={() => setActiveRing(activeRing === 3 ? null : 3)}
                  className={`absolute inset-[34%] rounded-full border-2 border-[#3ddc84]/50 transition-all duration-300 hover:scale-105 ${activeRing === 3 ? 'scale-105 brightness-125' : ''}`}
                />
                {/* Ring 4 */}
                <button
                  onClick={() => setActiveRing(activeRing === 4 ? null : 4)}
                  className={`absolute inset-[46%] rounded-full border-2 border-[#3ddc84]/70 transition-all duration-300 hover:scale-105 ${activeRing === 4 ? 'scale-105 brightness-125' : ''}`}
                />
                {/* Center */}
                <button
                  onClick={() => setActiveRing(activeRing === 5 ? null : 5)}
                  className={`absolute inset-[58%] rounded-full border-2 border-[#3ddc84] bg-[#3ddc84]/15 shadow-[0_0_20px_rgba(61,220,132,0.4)] transition-all duration-300 hover:scale-105 ${activeRing === 5 ? 'scale-105 brightness-125' : ''}`}
                />

                {/* Labels */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 font-condensed font-black text-[0.7rem] text-red-500 uppercase tracking-wide whitespace-nowrap">🔥 STOP THE WAR</div>
                <div className="absolute top-[7%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.65rem] text-red-400 uppercase tracking-wide whitespace-nowrap">⚖️ CONTROL CONGRESS</div>
                <div className="absolute top-[18%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.62rem] text-yellow-500 uppercase tracking-wide whitespace-nowrap">💊 $2.7T SAVINGS</div>
                <div className="absolute top-[29%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.6rem] text-[#3ddc84] uppercase tracking-wide whitespace-nowrap">🔨 12M JOBS</div>
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.58rem] text-[#3ddc84] uppercase tracking-wide whitespace-nowrap">🏪 PHIERSALE</div>
                <div className="absolute top-[51%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.6rem] text-[#aaffdd] uppercase tracking-wide text-center w-[90%]">✊ ECONOMIC FLOOR</div>
              </div>

              {/* Detail Panel */}
              <motion.div 
                className="w-[min(600px,92vw)] min-h-[140px] bg-[#0d1525]/95 rounded-xl p-6 mx-auto border-l-4 text-left"
                style={{ borderLeftColor: activeRing !== null ? rings[activeRing].color : '#e63946' }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: activeRing !== null ? 1 : 0, y: activeRing !== null ? 0 : 8 }}
                transition={{ duration: 0.3 }}
              >
                {activeRing !== null && (
                  <>
                    <div className="font-display text-xl md:text-2xl mb-2" style={{ color: rings[activeRing].color }}>
                      {rings[activeRing].title}
                    </div>
                    <div 
                      className="text-sm md:text-base text-[#b8c8e8] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: rings[activeRing].body }}
                    />
                    {rings[activeRing].urgent && (
                      <span className="inline-block mt-3 font-condensed font-bold text-xs uppercase tracking-wide px-3 py-1 rounded bg-red-500/15 text-red-500 border border-red-500/30">
                        ⚠️ URGENT — ACT NOW
                      </span>
                    )}
                  </>
                )}
              </motion.div>
            </div>
          </AnimatedSection>

          {/* THE PROBLEM */}
          <AnimatedSection>
            <div className="py-12">
              <span className="font-condensed font-bold text-[#3ddc84] text-xl tracking-wide">The Problem</span>
              <p className="text-xl text-white font-semibold mt-2 mb-4">Every movement hits the same wall.</p>
              <p className="text-gray-400 mb-3">You've been loud. You've been right. You've been ignored.</p>
              <p className="text-gray-400 mb-3">They build energy. They get attention. They fill the streets.<br />And then nothing changes.</p>
              <p className="font-condensed font-bold text-white text-xl mt-4 mb-3">That's not an accident.</p>
              <p className="text-gray-400 mb-3">Not because the cause wasn't right.<br />Not because the leaders were weak.<br />Not because people didn't care enough.</p>
              <p className="font-condensed font-bold text-3xl text-red-500 my-6">Because there was no leverage behind the demands.</p>
              <p className="text-gray-400">The moment fades. The pressure disappears. Everything resets.<br />And Congress goes right back to ignoring you.</p>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* CONGRESS IMAGE */}
          <AnimatedSection>
            <div className="py-8 text-center">
              <button onClick={() => openModal('/images/Congress_Dont_Work_4U-WEre_changing_that-BIG.jpg')} className="cursor-pointer">
                <Image src="/images/Congress_Dont_Work_4U-WEre_changing_that-BIG.jpg" alt="Congress doesn't work for you. We're changing that." width={600} height={400} className="max-w-full h-auto rounded-xl border border-red-500/30 hover:scale-[1.01] transition-transform" />
              </button>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* THE TRUTH */}
          <AnimatedSection>
            <div className="py-12 bg-[#0a1628] -mx-4 px-4 rounded-xl">
              <span className="font-condensed font-bold text-[#3ddc84] text-xl tracking-wide">The Truth</span>
              <p className="text-xl text-white font-semibold mt-2 mb-4">The missing ingredient isn't passion. It's leverage.</p>
              <p className="text-gray-400 mb-3">Power doesn't come from how many people care.<br />It comes from what happens if they ignore you.</p>
              <p className="text-gray-400 mb-3">Whatever brought you here — rent, wages, war, healthcare, veterans, corruption —<br />leverage is the only thing that moves Congress.</p>
              <p className="font-condensed font-bold text-[#3ddc84] text-xl my-4">Right now, most movements have no answer to that question.<br />PHIERS does.</p>
              <p className="font-condensed text-sm text-gray-500 mt-2">Tested by a global PR firm. Built over 15+ years. Already being organized district by district.</p>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* PHIERSTORM BRIDGE */}
          <AnimatedSection>
            <div className="py-8 text-center">
              <Image src="/images/PHIERStorm_the_Movement.png" alt="PHIERStorm — The Power Behind the Movement" width={500} height={300} className="max-w-[500px] w-full h-auto mx-auto opacity-90" />
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* WHAT PHIERS IS */}
          <AnimatedSection>
            <div className="py-12">
              <span className="font-condensed font-bold text-[#3ddc84] text-xl tracking-wide">What PHIERS Is</span>
              <p className="font-condensed font-bold text-white text-center text-lg my-3">PHIERS means Power Held In Every Representative's Seat.</p>
              <p className="text-xl text-white font-semibold mb-4">Not another movement. The thing movements are missing.</p>
              <p className="text-gray-400 mb-3">PHIERS doesn't replace the movements you already believe in.<br />It gives them the one thing they don't have — leverage that lasts after the cameras leave.</p>
              <p className="text-gray-400 mb-3">PHIERS doesn't disappear when the moment passes.<br />District by district. Name by name. On the record.</p>
              <p className="font-condensed font-bold text-2xl text-white my-6">Congress isn't waiting it out.<br />They're sitting it out.</p>
              <p className="font-condensed font-bold text-[#3ddc84] text-xl my-4">PHIERS changes that.</p>
              <p className="text-sm text-gray-500 mt-2">Built by a systems architect who's been working on this since 2009.</p>
              <p className="font-condensed font-bold text-2xl text-[#3ddc84] text-center my-8 leading-tight">A way to make Congress do their job —<br />or we replace them.</p>
              <p className="font-condensed font-bold text-sm text-gray-500 mt-2">Sixteen years of building. Designed for this moment.</p>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* HOW IT WORKS STEPS */}
          <AnimatedSection>
            <div className="py-12">
              <span className="font-condensed font-bold text-[#3ddc84] text-xl tracking-wide">How It Works</span>
              <p className="text-xl text-white font-semibold mt-2 mb-6">Here's what that looks like in practice:</p>
              <div className="space-y-6">
                {[
                  { title: 'You add your name', desc: 'Not symbolic. Not a petition that disappears. It\'s how real people are counted — by district.' },
                  { title: 'We organize by district', desc: 'Your name becomes part of a coordinated pressure block tied directly to your representative — based on what people in your district actually want.' },
                  { title: 'When enough people are organized', desc: 'The pressure becomes public and visible inside the district — creating a moment where your representative has to respond, in front of the people they represent.' },
                  { title: 'And when leaders ignore it', desc: 'They either respond — or they have to explain why they won\'t, publicly, on the record.', isRed: true },
                ].map((step, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-condensed font-black text-lg ${step.isRed ? 'bg-red-600 text-white' : 'bg-[#3ddc84] text-[#080d1a]'}`}>
                      {i + 1}
                    </div>
                    <div>
                      <div className={`font-condensed font-bold text-lg text-white mb-1 ${step.isRed ? 'text-red-500' : ''}`}>{step.title}</div>
                      <div className="text-gray-400 text-sm">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-condensed font-bold text-center text-[#3ddc84] text-lg mt-6">That's the leverage.</p>
              <p className="font-condensed font-bold text-center text-white text-lg mt-2">And once it exists, they can't ignore it.</p>
              <p className="text-sm text-gray-500 text-center mt-3">When enough constituents organize in a district, elected officials have to respond. Every time.</p>
              <p className="font-condensed font-bold text-center text-white text-base mt-4">This isn't theory. It's pressure applied in the one place they can't ignore.</p>
              <div className="text-center mt-8">
                <Link href="/petition" className="inline-block bg-transparent text-[#3ddc84] border border-[#3ddc84]/50 px-8 py-3 rounded-full font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">✍ Add Your Name →</Link>
                <p className="text-xs text-gray-500 mt-2">It takes less than a minute.</p>
              </div>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* CREDIBILITY BRIDGE */}
          <AnimatedSection>
            <p className="font-condensed font-bold text-gray-500 text-base text-center py-4">Before you decide what this is — know this:</p>
          </AnimatedSection>

          {/* CASCADE VIDEO */}
          <AnimatedSection>
            <div className="py-8">
              <div className="text-center mb-6">
                <p className="font-condensed font-bold text-2xl text-white mb-2">You are not powerless.</p>
                <p className="text-sm text-gray-500">This isn't theory. It's already in motion.</p>
                <p className="text-gray-500 mt-4">People speak up. They show up. They demand change.<br />And still — nothing happens.</p>
                <p className="text-gray-500 mt-2">Not because people don't care.<br /><strong className="text-white">Because there's nothing forcing Congress to respond.</strong></p>
                <p className="font-condensed font-bold text-[#3ddc84] text-lg mt-3">That's what PHIERS does.</p>
                <div className="h-2"></div>
                <p className="text-gray-500 mt-3">Around 1,500 people per district — across the country —<br />hits hundreds of members of Congress at the same time.</p>
                <p className="font-condensed font-bold text-[#3ddc84] text-lg mt-3">That's all it takes.</p>
                <p className="font-condensed font-bold text-white text-lg mt-1">That's enough to force Congress to respond to their constituents.</p>
                <p className="font-condensed font-bold text-red-500 text-lg mt-1">Not later. Immediately.</p>
                <p className="text-gray-500 mt-3">Congress can act now.</p>
                <p className="text-gray-500 mt-1">The only thing missing is enough organized people to make that unavoidable.</p>
                <p className="font-condensed font-bold text-[#3ddc84] text-lg mt-3">That's what your name does.</p>
                <p className="text-sm text-gray-500 mt-2">This is how we make it impossible for them not to respond.</p>
                <div className="mt-6">
                  <Link href="/petition" className="inline-block bg-transparent text-[#3ddc84] border border-[#3ddc84]/50 px-8 py-3 rounded-full font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">✍ Add Your Name — Help Make Congress Do Its Job</Link>
                </div>
                <p className="font-condensed font-bold text-white text-base mt-4">Step one: Make Congress do its job.</p>
                <p className="font-condensed text-gray-500 text-sm mt-1">This is how action starts — right now.</p>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#3ddc84]/20 mt-6">
                <div id="wrap-cascade" className="relative w-full h-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center cursor-pointer flex items-center justify-center"
                    style={{ backgroundImage: "url('https://img.youtube.com/vi/jMU6LKEBzbs/hqdefault.jpg')" }}
                    onClick={() => playVideo('cascade', 'https://www.youtube.com/embed/jMU6LKEBzbs?autoplay=1&rel=0')}
                  >
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-5xl text-white/90 cursor-pointer">▶</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#0a1020] p-4 border-x border-b border-[#3ddc84]/20 rounded-b-xl text-center">
                <div className="font-display text-lg text-[#3ddc84] mb-1">🎥 How Pressure Builds — And Why Congress Can't Ignore It</div>
                <div className="font-condensed text-gray-500 text-sm">Why Congress can't ignore organized people — and what happens when pressure builds in one place.</div>
              </div>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* 3.5% PROOF */}
          <AnimatedSection>
            <div className="py-12 bg-[#0a1628] -mx-4 px-4 rounded-xl text-center">
              <span className="font-condensed font-bold text-[#3ddc84] text-xl tracking-wide">The Tipping Point Is Smaller Than You Think</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">Around 3.5% — organized and sustained — is enough to tip the balance.</h2>
              <p className="text-gray-400 mb-3">The most successful nonviolent movements in modern history crossed this threshold.</p>
              <p className="text-gray-400 mb-3">It doesn't take everyone.<br />Just enough people, acting together in the same place.</p>
              <p className="font-condensed font-bold text-2xl text-[#3ddc84] my-4">12 million Americans. That's the line.</p>
              <p className="font-condensed font-bold text-white">PHIERS is how we coordinate that — on purpose.</p>
              <div className="max-w-[380px] mx-auto mt-8">
                <button onClick={() => openModal('/images/3.5pct_Erica_Chenoweth.jpg')} className="cursor-pointer">
                  <Image src="/images/3.5pct_Erica_Chenoweth.jpg" alt="3.5% — Chenoweth Research" width={380} height={250} className="w-full h-auto rounded-lg border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" />
                </button>
                <p className="text-xs text-gray-500 mt-2">Harvard researcher Erica Chenoweth. The data is ironclad. Click to enlarge.</p>
              </div>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* TRANSITION TO THE-TEETH */}
          <AnimatedSection>
            <div className="py-12 text-center">
              <div className="max-w-[560px] mx-auto">
                <p className="font-condensed font-bold text-2xl text-white mb-3">You understand the problem. Now see the power.</p>
                <p className="text-gray-500 mb-6">The energy is real. The anger is justified. Here's what we do with it.</p>
                <Link href="/the-teeth" className="inline-block bg-transparent text-[#3ddc84] border border-[#3ddc84]/50 px-9 py-4 rounded-full font-condensed font-bold text-lg hover:bg-[#3ddc84]/10 transition-all tracking-wide">See What Makes This Unavoidable →</Link>
              </div>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* GO DEEPER */}
          <AnimatedSection>
            <div className="py-12 max-w-[640px] mx-auto">
              <p className="font-condensed font-bold text-[#3ddc84] text-lg tracking-wide mb-2">Go Deeper</p>
              <p className="text-gray-500 mb-8">Choose the path you want to understand first.</p>
              <div className="mb-8">
                <p className="font-condensed font-bold text-xl text-white mb-2">⚡ The Leverage</p>
                <p className="text-gray-500 mb-3">How organized people become impossible to ignore — and why Congress has no choice once the pressure is real.</p>
                <Link href="/leverage" className="font-condensed font-bold text-[#3ddc84] border-b border-[#3ddc84]/30 pb-0.5">Show me the Leverage →</Link>
              </div>
              <div>
                <p className="font-condensed font-bold text-xl text-white mb-2">📖 The Healthcare Proof</p>
                <p className="text-gray-500 mb-3">Why fixing healthcare is the first domino — and the evidence that makes the leverage unavoidable.</p>
                <Link href="/telecare" className="font-condensed font-bold text-[#3ddc84] border-b border-[#3ddc84]/30 pb-0.5">Explore the Deep Dive →</Link>
              </div>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* FINAL STATEMENT */}
          <AnimatedSection>
            <div className="text-center py-12">
              <p className="font-condensed font-bold text-lg text-gray-500 leading-relaxed">PHIERS is built for one purpose:<br />giving the public the leverage we've always deserved.</p>
              <p className="font-condensed font-bold text-white text-lg mt-2">Now it's organized.</p>
            </div>
          </AnimatedSection>

        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {imageModalOpen && (
          <motion.div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <button className="absolute top-5 right-7 text-white text-3xl cursor-pointer bg-black/50 border border-white/20 w-10 h-10 rounded-full" onClick={closeModal}>✕</button>
            <img src={modalImageSrc} alt="" className="max-w-[90vw] max-h-[90vh] rounded-lg border border-[#3ddc84]/20" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Will Price Modal */}
      <AnimatePresence>
        {willModalOpen && (
          <motion.div className="fixed inset-0 bg-black/90 z-[99998] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setWillModalOpen(false)}>
            <div className="relative max-w-[720px] w-full bg-[#080d1a]/97 border-2 border-[#3ddc84]/35 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setWillModalOpen(false)} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#111d35] text-[#3ddc84] border-2 border-[#3ddc84] flex items-center justify-center text-xl hover:bg-[#3ddc84] hover:text-[#111d35] transition-all z-10">✕</button>
              <div className="flex flex-wrap">
                <div className="w-full md:w-[240px] min-h-[280px] overflow-hidden"><img src="/images/Will_Price.png" alt="Will Price" className="w-full h-full min-h-[260px] object-cover object-[55%_top]" /></div>
                <div className="flex-1 min-w-[240px] p-7 flex flex-col justify-center">
                  <p className="font-condensed text-xs text-[#3ddc84] uppercase tracking-[3px] mb-2">The Architect</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1">Will Price</h3>
                  <p className="font-condensed text-sm text-[#ffd60a] font-bold mb-4">Founder &amp; Chief Solutions Architect, PHIERS</p>
                  <p className="font-body text-sm text-[#c8d8c8] leading-relaxed">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending — and built the lever to redirect it toward healthcare, jobs, and a monthly check for every American. Building this since 2009.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes firePulse {
          0%,100% { box-shadow: 0 0 40px rgba(230,57,70,0.25), inset 0 0 40px rgba(230,57,70,0.08); }
          50% { box-shadow: 0 0 70px rgba(230,57,70,0.45), inset 0 0 60px rgba(230,57,70,0.15); }
        }
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-condensed { font-family: 'Barlow Condensed', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }
      `}</style>
    </>
  )
