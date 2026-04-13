'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function HomepageTeethPage() {
  const [activeRing, setActiveRing] = useState<number | null>(0)
  const [detailPanelVisible, setDetailPanelVisible] = useState(true)

  const ringsData = [
    { color: '#e63946', title: '🔥 RING 0 — Stop the War. Right Now.',
      body: 'There is <strong>no part of your life that doesn\'t run on oil.</strong> Your food, your medicine, your hospital, your house — all of it. The Strait of Hormuz carries 30% of the world\'s seaborne oil. Close it and inflation doesn\'t tick up — it explodes across every supply chain simultaneously.<br><br><strong>Article 25 of the UN Charter</strong> — rules America wrote — prohibits exactly this. It gives Iran a legal off-ramp. It gives Congress a spine. It gives every American — left, right, MAGA — grounds to say: not in our name, not without a vote.',
      urgent: true },
    { color: '#ff6b6b', title: '⚖️ RING 1 — Control Congress',
      body: 'Congress doesn\'t respond to noise. It responds to consequences.<br><br>Harvard researcher Erica Chenoweth studied 323 campaigns. Movements that reached and sustained <strong>3.5% participation succeeded every time.</strong> That\'s 12 million Americans. Organized by district. Names on the record. With electoral consequences.<br><br>The same lever that forces action on healthcare forces action on war powers. One movement. Every dimension turns.',
      urgent: false },
    { color: '#ffd60a', title: '💊 RING 2 — $2.7 Trillion in Healthcare Savings',
      body: 'CMS pays <strong>$8,000/year per person</strong> for traditional insurance. 80% of people need only <strong>$600/year in telehealth.</strong> That frees $7,400 per person.<br><br>One conversion funds 12 more. 12 cascades to 148. 148 to 1,825. <strong>234 million Americans covered. $2.73 trillion freed annually.</strong> The cascade is self-funding and unstoppable once it starts.',
      urgent: false },
    { color: '#3ddc84', title: '🔨 RING 3 — 12 Million New Jobs',
      body: 'Every $7,400 freed per person stays in the community instead of flowing to shareholders. Every telehealth navigator is a living-wage job. Every cooperative hub is a local employer. Every community health worker is a union-eligible role.<br><br><strong>12 million jobs.</strong> Funded from the savings. In the communities where the savings happen. The moment the conversion begins.',
      urgent: false },
    { color: '#3ddc84', title: '🏪 RING 4 — PHIERSale: Consumer Power',
      body: '<strong>No markups. No middlemen. No profit extraction.</strong><br><br>100 million organized members = the largest purchasing bloc in America. Market dominance through pure buying power. No legislation required. No permission needed. Just organized people choosing where their money goes.',
      urgent: false },
    { color: '#3ddc84', title: '✊ CENTER — Economic Floor for Every American',
      body: 'A monthly check for every American. A floor nobody falls through. Wages that cover rent. Veterans fully covered. An economy built for the people who work in it.<br><br><strong>This is what PHIERS was always building toward.</strong> Every ring protects it. The outer rings make it possible.',
      urgent: false }
  ]

  const handleRingClick = (ringIndex: number) => {
    if (activeRing === ringIndex) {
      setActiveRing(null)
      setDetailPanelVisible(false)
    } else {
      setActiveRing(ringIndex)
      setDetailPanelVisible(true)
    }
  }

  const playVideo = (which: string, src: string) => {
    const wrap = document.getElementById('wrap-' + which)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }

  return (
    <>
      {/* Step indicator */}
      <div className="pt-4 pb-2 text-center">
        <span className="font-condensed text-xs text-gray-500 tracking-wider uppercase">Step 2 of 3 — How the Leverage Works</span>
        <p className="font-condensed text-[0.7rem] text-gray-500 opacity-65 mt-1">Three short pages. Enough to understand the whole system.</p>
      </div>

      <Navigation />

      <main className="pt-4 pb-16">
        
        {/* HERO SECTION */}
        <section className="text-center pt-16 pb-10 px-6">
          <Image src="/images/PHIERS_Logo.jpg" alt="PHIERS.org" width={90} height={90} className="mx-auto mb-4 opacity-85" />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">Movements Without Leverage Don't Win.</h1>
          <div className="max-w-[720px] mx-auto">
            <p className="font-condensed text-lg text-gray-400 mb-3">Protests create attention. Petitions create signals. Viral moments create headlines.</p>
            <p className="font-condensed text-lg text-gray-400 mb-5">None of them create consequences.</p>
            <p className="font-condensed text-lg text-white font-semibold mb-6">Congress ignores them — because nothing forces them to respond.</p>
            <p className="font-condensed font-bold text-green text-base">Until something does.</p>
            <p className="font-condensed font-bold text-white text-base mt-2">This is that something.</p>
            <p className="font-semibold text-white text-base mt-2">Here's how it changes.</p>
          </div>
        </section>

        {/* ONION RINGS DIAGRAM */}
        <div className="bg-[#080d1a] py-12 px-6 text-center">
          <p className="font-condensed font-bold text-green text-xs uppercase tracking-[3px] mb-2">How PHIERS Works</p>
          <h2 className="font-display text-2xl md:text-3xl text-white tracking-wide mb-2">One System. Every Layer Already Inside the Last.</h2>
          <p className="font-body text-gray-500 text-sm mb-6">Start with the most urgent threat — because nothing else works until it's stabilized.</p>
          <p className="font-condensed text-xs text-gray-500 mb-4 tracking-wide">↓ Tap any ring to see what's inside</p>

          {/* Rings Container */}
          <div className="relative w-[min(520px,92vw)] aspect-square mx-auto mb-8">
            {[0, 1, 2, 3, 4, 5].map((ringIdx) => {
              const inset = [0, 10, 22, 34, 46, 58][ringIdx]
              const colors = ['rgba(230,57,70,0.7)', 'rgba(230,57,70,0.5)', 'rgba(255,214,10,0.5)', 'rgba(61,220,132,0.5)', 'rgba(61,220,132,0.7)', '#3ddc84']
              const bgColors = ['rgba(230,57,70,0.18)', 'rgba(230,57,70,0.12)', 'rgba(255,214,10,0.1)', 'rgba(61,220,132,0.1)', 'rgba(61,220,132,0.18)', 'rgba(61,220,132,0.15)']
              const isOuterRing = ringIdx === 0
              
              return (
                <div
                  key={ringIdx}
                  onClick={() => handleRingClick(ringIdx)}
                  className={`absolute rounded-full cursor-pointer transition-all duration-300 hover:scale-105 ${activeRing === ringIdx ? 'scale-105 brightness-125' : ''} ${isOuterRing ? 'animate-pulse' : ''}`}
                  style={{
                    inset: `${inset}%`,
                    border: `2px solid ${colors[ringIdx]}`,
                    background: `radial-gradient(ellipse at center, transparent 0%, ${bgColors[ringIdx]} 100%)`,
                    boxShadow: isOuterRing ? '0 0 40px rgba(230,57,70,0.25), inset 0 0 40px rgba(230,57,70,0.08)' : `0 0 ${20 - ringIdx * 4}px ${colors[ringIdx]}25`,
                  }}
                />
              )
            })}

            {/* Labels */}
            <div className="absolute top-[-4%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.7rem] text-red-500 uppercase tracking-wide whitespace-nowrap pointer-events-none">🔥 STOP THE WAR</div>
            <div className="absolute top-[7%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.65rem] text-red-400 uppercase tracking-wide whitespace-nowrap pointer-events-none">⚖️ CONTROL CONGRESS</div>
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.62rem] text-yellow-400 uppercase tracking-wide whitespace-nowrap pointer-events-none">💊 $2.7T SAVINGS</div>
            <div className="absolute top-[29%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.6rem] text-green uppercase tracking-wide whitespace-nowrap pointer-events-none">🔨 12M JOBS</div>
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.58rem] text-green uppercase tracking-wide whitespace-nowrap pointer-events-none">🏪 PHIERSALE</div>
            <div className="absolute top-[51%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.6rem] text-green-200 uppercase tracking-wide w-[90%] text-center pointer-events-none drop-shadow-md">✊ ECONOMIC FLOOR</div>
          </div>

          {/* Detail Panel */}
          <div
            className={`w-[min(600px,92vw)] min-h-[140px] bg-[#0d1525]/95 rounded-xl p-6 mx-auto transition-all duration-300 border-l-4 ${detailPanelVisible && activeRing !== null ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            style={{ borderLeftColor: activeRing !== null ? ringsData[activeRing].color : '#e63946' }}
          >
            {activeRing !== null && (
              <>
                <div className="font-display text-xl md:text-2xl mb-2" style={{ color: ringsData[activeRing].color }}>
                  {ringsData[activeRing].title}
                </div>
                <div className="text-gray-300 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: ringsData[activeRing].body }} />
                {ringsData[activeRing].urgent && (
                  <span className="inline-block mt-3 font-condensed font-bold text-xs uppercase tracking-wide py-1 px-3 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                    ⚠️ URGENT — ACT NOW
                  </span>
                )}
              </>
            )}
          </div>
        </div>

        <hr className="border-[#3ddc84]/20" />

        {/* THE PROBLEM SECTION */}
        <section className="max-w-[760px] mx-auto px-6 py-16">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">The Problem</span>
          <p className="text-white font-semibold text-lg mb-4">Every movement hits the same wall.</p>
          <p className="text-gray-400 mb-3">You've been loud. You've been right. You've been ignored.</p>
          <p className="text-gray-400 mb-3">They build energy. They get attention. They fill the streets.<br />And then nothing changes.</p>
          <p className="font-condensed font-bold text-white text-xl mb-4">That's not an accident.</p>
          <p className="text-gray-400 mb-3">Not because the cause wasn't right.<br />Not because the leaders were weak.<br />Not because people didn't care enough.</p>
          <p className="font-condensed font-bold text-2xl text-red-500 my-6">Because there was no leverage behind the demands.</p>
          <p className="text-gray-400">The moment fades. The pressure disappears. Everything resets.<br />And Congress goes right back to ignoring you.</p>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* CONGRESS IMAGE */}
        <section className="py-6 px-6 text-center">
          <div className="max-w-[600px] mx-auto">
            <Image src="/images/Congress_Dont_Work_4U-WEre_changing_that-BIG.jpg" alt="Congress doesn't work for you. We're changing that." width={600} height={400} className="w-full h-auto rounded-xl border border-red-500/30" />
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* THE TRUTH SECTION */}
        <section className="bg-[#0a1628] border-y border-[#3ddc84]/10 py-16 px-6">
          <div className="max-w-[760px] mx-auto">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">The Truth</span>
            <p className="text-white font-semibold text-xl mb-4">The missing ingredient isn't passion. It's leverage.</p>
            <p className="text-gray-400 mb-3">Power doesn't come from how many people care.<br />It comes from what happens if they ignore you.</p>
            <p className="text-gray-400 mb-3">Whatever brought you here — rent, wages, war, healthcare, veterans, corruption —<br />leverage is the only thing that moves Congress.</p>
            <p className="font-condensed font-bold text-green text-xl my-4">Right now, most movements have no answer to that question.<br />PHIERS does.</p>
            <p className="font-condensed text-sm text-gray-500 mt-2">Tested by a global PR firm. Built over 15+ years. Already being organized district by district.</p>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* PHIERSTORM BRIDGE IMAGE */}
        <section className="py-6 px-6 text-center">
          <div className="max-w-[600px] mx-auto">
            <Image src="/images/PHIERStorm_the_Movement.png" alt="PHIERStorm — The Power Behind the Movement" width={500} height={300} className="w-full max-w-[500px] mx-auto h-auto opacity-90" />
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* WHAT PHIERS IS */}
        <section className="max-w-[760px] mx-auto px-6 py-16">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">What PHIERS Is</span>
          <p className="font-condensed font-bold text-white text-center mb-2">PHIERS means Power Held In Every Representative's Seat.</p>
          <p className="text-white font-semibold text-xl mb-4">Not another movement. The thing movements are missing.</p>
          <p className="text-gray-400 mb-3">PHIERS doesn't replace the movements you already believe in.<br />It gives them the one thing they don't have — leverage that lasts after the cameras leave.</p>
          <p className="text-gray-400 mb-3">PHIERS doesn't disappear when the moment passes.<br />District by district. Name by name. On the record.</p>
          <p className="font-condensed font-bold text-white text-2xl my-6">Congress isn't waiting it out.<br />They're sitting it out.</p>
          <p className="font-condensed font-bold text-green text-xl mb-4">PHIERS changes that.</p>
          <p className="text-sm text-gray-500 mt-2">Built by a systems architect who's been working on this since 2009.</p>
          <p className="font-condensed font-bold text-2xl text-green text-center my-8 leading-tight">A way to make Congress do their job —<br />or we replace them.</p>
          <p className="font-condensed font-bold text-sm text-gray-500 mt-2">Sixteen years of building. Designed for this moment.</p>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* HOW IT WORKS */}
        <section className="max-w-[760px] mx-auto px-6 py-16" id="how-it-works">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">How It Works</span>
          <p className="text-white font-semibold text-lg mb-4">Here's what that looks like in practice:</p>
          <div className="steps space-y-6">
            <div className="step flex gap-5">
              <div className="step-num w-11 h-11 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-xl flex-shrink-0">1</div>
              <div className="step-body flex-1">
                <div className="step-title font-condensed font-bold text-xl text-white mb-1">You add your name</div>
                <div className="step-desc text-gray-400">Not symbolic. Not a petition that disappears. It's how real people are counted — by district.</div>
              </div>
            </div>
            <div className="step flex gap-5">
              <div className="step-num w-11 h-11 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-xl flex-shrink-0">2</div>
              <div className="step-body flex-1">
                <div className="step-title font-condensed font-bold text-xl text-white mb-1">We organize by district</div>
                <div className="step-desc text-gray-400">Your name becomes part of a coordinated pressure block tied directly to your representative — based on what people in your district actually want.</div>
              </div>
            </div>
            <div className="step flex gap-5">
              <div className="step-num w-11 h-11 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-xl flex-shrink-0">3</div>
              <div className="step-body flex-1">
                <div className="step-title font-condensed font-bold text-xl text-white mb-1">When enough people are organized</div>
                <div className="step-desc text-gray-400">The pressure becomes public and visible inside the district — creating a moment where your representative has to respond, in front of the people they represent.</div>
              </div>
            </div>
            <div className="step flex gap-5">
              <div className="step-num w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center font-condensed font-black text-xl flex-shrink-0">4</div>
              <div className="step-body flex-1">
                <div className="step-title font-condensed font-bold text-xl text-red-500 mb-1">And when leaders ignore it</div>
                <div className="step-desc text-gray-400">They either respond — or they have to explain why they won't, publicly, on the record.</div>
              </div>
            </div>
          </div>
          <p className="font-condensed font-bold text-center text-green text-lg mt-4">That's the leverage.</p>
          <p className="font-condensed font-bold text-center text-white text-base mt-2">And once it exists, they can't ignore it.</p>
          <p className="text-sm text-gray-500 text-center mt-3">When enough constituents organize in a district, elected officials have to respond. Every time.</p>
          <p className="font-condensed font-bold text-center text-white text-base mt-4">This isn't theory. It's pressure applied in the one place they can't ignore.</p>
          <div className="text-center mt-8">
            <Link href="/petition" className="inline-block bg-transparent text-green border border-green/50 px-8 py-3 rounded-full font-condensed font-bold text-base hover:bg-green/10 transition-all">✍ Add Your Name →</Link>
            <p className="text-xs text-gray-500 mt-2">It takes less than a minute.</p>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* CREDIBILITY BRIDGE */}
        <section className="text-center py-6">
          <p className="font-condensed font-bold text-gray-500 text-base">Before you decide what this is — know this:</p>
        </section>

        {/* CASCADE VIDEO */}
        <section className="max-w-[800px] mx-auto px-6 py-8">
          <div className="max-w-[760px] mx-auto text-center mb-6">
            <p className="font-condensed font-bold text-xl text-white mb-2">You are not powerless.</p>
            <p className="text-sm text-gray-500 mt-3">This isn't theory. It's already in motion.</p>
            <p className="text-gray-400 text-base mb-3">People speak up. They show up. They demand change.<br />And still — nothing happens.</p>
            <p className="text-gray-400 text-base mb-3">Not because people don't care.<br /><strong className="text-white">Because there's nothing forcing Congress to respond.</strong></p>
            <p className="font-condensed font-bold text-green text-base mb-4">That's what PHIERS does.</p>
            <div className="h-2"></div>
            <p className="text-gray-400 text-base mb-3">Around 1,500 people per district — across the country —<br />hits hundreds of members of Congress at the same time.</p>
            <p className="font-condensed font-bold text-green text-base mb-3">That's all it takes.</p>
            <p className="font-condensed font-bold text-white text-base mb-2">That's enough to force Congress to respond to their constituents.</p>
            <p className="font-condensed font-bold text-red-500 text-base mb-4">Not later. Immediately.</p>
            <p className="text-gray-400 text-base mb-2">Congress can act now.</p>
            <p className="text-gray-400 text-base mb-2">The only thing missing is enough organized people to make that unavoidable.</p>
            <p className="font-condensed font-bold text-green text-base mb-6">That's what your name does.</p>
            <p className="text-sm text-gray-500 text-center mb-4">This is how we make it impossible for them not to respond.</p>
            <div className="text-center my-4">
              <Link href="/petition" className="inline-block bg-transparent text-green border border-green/50 px-8 py-3 rounded-full font-condensed font-bold text-base hover:bg-green/10 transition-all">✍ Add Your Name — Help Make Congress Do Its Job</Link>
            </div>
            <p className="font-condensed font-bold text-white text-base mb-2">Step one: Make Congress do its job.</p>
            <p className="font-condensed text-gray-500 text-sm">This is how action starts — right now.</p>
          </div>

          {/* Video */}
          <div className="video-container">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#3ddc84]/20">
              <div className="video-wrap" id="wrap-cascade" style={{ position: 'relative', width: '100%', height: '100%' }}>
                <div className="absolute inset-0 bg-cover bg-center cursor-pointer flex items-center justify-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/jMU6LKEBzbs/hqdefault.jpg')" }} onClick={() => playVideo('cascade', 'https://www.youtube.com/embed/jMU6LKEBzbs?autoplay=1&rel=0')}>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-5xl text-white/90 cursor-pointer">▶</div>
                </div>
              </div>
            </div>
            <div className="bg-[#0a1020] p-5 border-x border-b border-[#3ddc84]/20 rounded-b-xl text-center">
              <div className="font-display text-xl text-[#3ddc84] mb-1">🎥 How Pressure Builds — And Why Congress Can't Ignore It</div>
              <div className="font-condensed text-gray-400">Why Congress can't ignore organized people — and what happens when pressure builds in one place.</div>
            </div>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* 3.5% PROOF SECTION */}
        <section className="bg-[#0a1628] border-y border-[#3ddc84]/10 py-16 px-6">
          <div className="max-w-[760px] mx-auto text-center">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">The Tipping Point Is Smaller Than You Think</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-3 mb-4">Around 3.5% — organized and sustained — is enough to tip the balance.</h2>
            <p className="text-gray-400 mb-3">The most successful nonviolent movements in modern history crossed this threshold.</p>
            <p className="text-gray-400 mb-3">It doesn't take everyone.<br />Just enough people, acting together in the same place.</p>
            <p className="font-condensed font-bold text-2xl text-green my-4">12 million Americans. That's the line.</p>
            <p className="font-condensed font-bold text-white">PHIERS is how we coordinate that — on purpose.</p>
            <div className="max-w-[380px] mx-auto mt-8 text-center">
              <Image
                src="/images/3.5pct_Erica_Chenoweth.jpg"
                alt="3.5% — Chenoweth Research"
                width={380}
                height={250}
                className="rounded-lg border border-white/10 cursor-pointer hover:scale-[1.02] transition-transform mx-auto"
              />
              <p className="text-xs text-gray-500 mt-2">Harvard researcher Erica Chenoweth. The data is ironclad. Click to enlarge.</p>
            </div>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* TRANSITION TO THE-TEETH */}
        <section className="text-center py-12 px-6">
          <div className="max-w-[560px] mx-auto">
            <p className="font-condensed font-bold text-xl text-white mb-2">You understand the problem. Now see the power.</p>
            <p className="text-gray-400 text-base mb-6">The energy is real. The anger is justified. Here's what we do with it.</p>
            <Link href="/the-teeth" className="inline-block bg-transparent text-green border border-green/50 px-9 py-4 rounded-full font-condensed font-bold text-lg hover:bg-green/10 transition-all tracking-wide">See What Makes This Unavoidable →</Link>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* GO DEEPER */}
        <section className="max-w-[640px] mx-auto px-6 py-12">
          <p className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block mb-4">Go Deeper</p>
          <p className="text-gray-400 mb-8">Choose the path you want to understand first.</p>

          <div className="mb-8">
            <p className="font-condensed font-bold text-xl text-white mb-2">⚡ The Leverage</p>
            <p className="text-gray-400 mb-3">How organized people become impossible to ignore — and why Congress has no choice once the pressure is real.</p>
            <Link href="/leverage" className="font-condensed font-bold text-green no-underline border-b border-green/30 pb-0.5">Show me the Leverage →</Link>
          </div>

          <div>
            <p className="font-condensed font-bold text-xl text-white mb-2">📖 The Healthcare Proof</p>
            <p className="text-gray-400 mb-3">Why fixing healthcare is the first domino — and the evidence that makes the leverage unavoidable.</p>
            <Link href="/full-story" className="font-condensed font-bold text-green no-underline border-b border-green/30 pb-0.5">Explore the Deep Dive →</Link>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* CLOSING STATEMENT */}
        <div className="text-center py-12 px-6 max-w-[640px] mx-auto">
          <p className="font-condensed font-bold text-base text-gray-400 leading-relaxed">
            PHIERS is built for one purpose:<br />giving the public the leverage we've always deserved.
          </p>
          <p className="font-condensed font-bold text-white mt-2">Now it's organized.</p>
        </div>
      </main>

      <Footer />

      {/* Chenoweth Modal */}
      <div id="chenowethModal" className="fixed inset-0 bg-black/95 z-[99999] hidden items-center justify-center p-4" onClick={(e) => {
        const modal = document.getElementById('chenowethModal')
        if (modal && e.target === modal) modal.classList.add('hidden')
      }}>
        <button className="absolute top-5 right-7 text-white text-3xl cursor-pointer bg-black/50 border border-white/20 w-10 h-10 rounded-full" onClick={() => document.getElementById('chenowethModal')?.classList.add('hidden')}>✕</button>
        <img src="/images/3.5pct_Erica_Chenoweth.jpg" alt="3.5% — Chenoweth Research" className="max-w-[90vw] max-h-[90vh] rounded-lg border-2 border-[#3ddc84]" />
      </div>

      {/* Teeth Preview Modal */}
      <div id="teethPreviewModal" className="fixed inset-0 bg-black/95 z-[99999] hidden items-center justify-center p-4" onClick={(e) => {
        const modal = document.getElementById('teethPreviewModal')
        if (modal && e.target === modal) modal.classList.add('hidden')
      }}>
        <button className="absolute top-5 right-7 text-white text-3xl cursor-pointer bg-black/50 border border-white/20 w-10 h-10 rounded-full" onClick={() => document.getElementById('teethPreviewModal')?.classList.add('hidden')}>✕</button>
        <img src="/images/We_Gotz_Teeth_for_No_Kings.jpg" alt="Power concedes nothing without a demand that has teeth" className="max-w-[90vw] max-h-[90vh] rounded-lg border-2 border-[#3ddc84]" />
      </div>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>

      <style jsx global>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-condensed { font-family: 'Barlow Condensed', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }
        details summary { list-style: none; }
        details summary::-webkit-details-marker { display: none; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2.5s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
