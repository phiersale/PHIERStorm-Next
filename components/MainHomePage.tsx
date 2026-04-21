'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function MainHomePage() {
  const [activeRing, setActiveRing] = useState<number | null>(null)
  const [detailVisible, setDetailVisible] = useState(false)
  const [chenowethModalOpen, setChenowethModalOpen] = useState(false)

  const ringsData = [
    { color: '#e63946', title: '🔥 RING 0 — Stop the War. Right Now.', body: 'There is <strong>no part of your life that doesn\'t run on oil.</strong> Your food, your medicine, your hospital, your house — all of it. The Strait of Hormuz carries 30% of the world\'s seaborne oil. Close it and inflation doesn\'t tick up — it explodes across every supply chain simultaneously.<br><br><strong>Article 25 of the UN Charter</strong> — rules America wrote — prohibits exactly this. It gives Iran a legal off-ramp. It gives Congress a spine. It gives every American — left, right, MAGA — grounds to say: not in our name, not without a vote.', urgent: true },
    { color: '#ff6b6b', title: '⚖️ RING 1 — Control Congress', body: 'Congress doesn\'t respond to noise. It responds to consequences.<br><br>Harvard researcher Erica Chenoweth studied 323 campaigns. Movements that reached and sustained <strong>3.5% participation succeeded every time.</strong> That\'s 12 million Americans. Organized by district. Names on the record. With electoral consequences.<br><br>The same lever that forces action on healthcare forces action on war powers. One movement. Every dimension turns.', urgent: false },
    { color: '#ffd60a', title: '💊 RING 2 — $2.7 Trillion in Healthcare Savings', body: 'CMS pays <strong>$8,000/year per person</strong> for traditional insurance. 80% of people need only <strong>$600/year in telehealth.</strong> That frees $7,400 per person.<br><br>One conversion funds 12 more. 12 cascades to 148. 148 to 1,825. <strong>234 million Americans covered. $2.73 trillion freed annually.</strong> The cascade is self-funding and unstoppable once it starts.', urgent: false },
    { color: '#3ddc84', title: '🔨 RING 3 — 12 Million New Jobs', body: 'Every $7,400 freed per person stays in the community instead of flowing to shareholders. Every telehealth navigator is a living-wage job. Every cooperative hub is a local employer. Every community health worker is a union-eligible role.<br><br><strong>12 million jobs.</strong> Funded from the savings. In the communities where the savings happen. The moment the conversion begins.', urgent: false },
    { color: '#3ddc84', title: '🏪 RING 4 — PHIERSale: Consumer Power', body: '<strong>No markups. No middlemen. No profit extraction.</strong><br><br>100 million organized members = the largest purchasing bloc in America. Market dominance through pure buying power. No legislation required. No permission needed. Just organized people choosing where their money goes.', urgent: false },
    { color: '#3ddc84', title: '✊ CENTER — Economic Floor for Every American', body: 'A monthly check for every American. A floor nobody falls through. Wages that cover rent. Veterans fully covered. An economy built for the people who work in it.<br><br><strong>This is what PHIERS was always building toward.</strong> Every ring protects it. The outer rings make it possible.', urgent: false }
  ]

  useEffect(() => {
    setTimeout(() => { setActiveRing(0); setDetailVisible(true); }, 800)
  }, [])

  const handleRingClick = (index: number) => {
    if (activeRing === index) { setActiveRing(null); setDetailVisible(false) }
    else { setActiveRing(index); setDetailVisible(true) }
  }

  const playVideo = useCallback((which: string, src: string) => {
    const wrap = document.getElementById('wrap-' + which)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src + '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <div className="pt-4 pb-2 text-center">
        <span className="font-condensed text-xs text-gray-500 tracking-wider uppercase">Step 2 of 3 — How the Leverage Works</span>
        <p className="font-condensed text-[0.7rem] text-gray-500 opacity-65 mt-1">Three short pages. Enough to understand the whole system.</p>
      </div>

      <Navigation />

      <main>
        <section className="container section text-center pt-32">
          <div className="relative h-[90px] w-auto mb-4 flex justify-center">
            <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={90} height={90} className="opacity-85" />
          </div>
          <h1 className="mb-4">
            <span className="hero-white">Movements Without Leverage Don't Win.</span>
            <span className="hero-green">Here's what that looks like in practice.</span>
          </h1>
          <div className="max-w-[720px] mx-auto">
            <p className="font-condensed text-lg text-gray-400 mb-3">Protests create attention. Petitions create signals. Viral moments create headlines.</p>
            <p className="font-condensed text-lg text-gray-400 mb-5">None of them create consequences.</p>
            <p className="font-condensed text-lg text-white font-semibold mb-6">Congress ignores them — because nothing forces them to respond.</p>
            <p className="font-condensed font-bold text-green text-base mt-2 mb-0">Until something does.</p>
            <p className="font-condensed font-bold text-white text-base mt-2 mb-0">This is that something.</p>
            <p className="font-semibold text-white text-base mt-2 mb-0">Here's how it changes.</p>
          </div>
        </section>

        {/* Onion Rings Diagram */}
        <section className="bg-[#080d1a] py-12 px-6 text-center">
          <p className="font-condensed font-bold text-green text-xs uppercase tracking-[3px] mb-2">How PHIERS Works</p>
          <h2 className="font-display text-2xl md:text-3xl text-white tracking-wide mb-2">One System. Every Layer Already Inside the Last.</h2>
          <p className="text-body text-sm mb-6">Start with the most urgent threat — because nothing else works until it's stabilized.</p>
          <p className="font-condensed text-xs text-gray-500 mb-4 tracking-wide">↓ Tap any ring to see what's inside</p>

          <div className="relative w-[min(520px,92vw)] aspect-square mx-auto mb-8 cursor-pointer">
            {[0, 1, 2, 3, 4, 5].map((ringIdx) => {
              const insets = [0, 10, 22, 34, 46, 58]
              const colors = ['rgba(230,57,70,0.7)', 'rgba(230,57,70,0.5)', 'rgba(255,214,10,0.5)', 'rgba(61,220,132,0.5)', 'rgba(61,220,132,0.7)', '#3ddc84']
              const bgColors = ['rgba(230,57,70,0.18)', 'rgba(230,57,70,0.12)', 'rgba(255,214,10,0.1)', 'rgba(61,220,132,0.1)', 'rgba(61,220,132,0.18)', 'rgba(61,220,132,0.15)']
              return ( <div key={ringIdx} onClick={() => handleRingClick(ringIdx)} className={`absolute rounded-full transition-all duration-300 hover:scale-105 ${activeRing === ringIdx ? 'scale-105 brightness-125' : ''} ${ringIdx === 0 ? 'animate-[firePulse_2.5s_ease-in-out_infinite]' : ''}`} style={{ inset: `${insets[ringIdx]}%`, border: `2px solid ${colors[ringIdx]}`, background: `radial-gradient(ellipse at center, transparent 0%, ${bgColors[ringIdx]} 100%)`, boxShadow: ringIdx === 0 ? '0 0 40px rgba(230,57,70,0.25), inset 0 0 40px rgba(230,57,70,0.08)' : `0 0 ${20 - ringIdx * 4}px ${colors[ringIdx]}25`, }} /> )
            })}
            <div className="absolute top-[-4%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.7rem] text-red-500 uppercase tracking-wide whitespace-nowrap pointer-events-none">🔥 STOP THE WAR</div>
            <div className="absolute top-[7%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.65rem] text-red-400 uppercase tracking-wide whitespace-nowrap pointer-events-none">⚖️ CONTROL CONGRESS</div>
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.62rem] text-yellow-400 uppercase tracking-wide whitespace-nowrap pointer-events-none">💊 $2.7T SAVINGS</div>
            <div className="absolute top-[29%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.6rem] text-green uppercase tracking-wide whitespace-nowrap pointer-events-none">🔨 12M JOBS</div>
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.58rem] text-green uppercase tracking-wide whitespace-nowrap pointer-events-none">🏪 PHIERSALE</div>
            <div className="absolute top-[51%] left-1/2 -translate-x-1/2 font-condensed font-black text-[0.6rem] text-green-200 uppercase tracking-wide w-[90%] text-center pointer-events-none drop-shadow-md">✊ ECONOMIC FLOOR</div>
          </div>

          <div className={`w-[min(600px,92vw)] min-h-[140px] bg-bg-dark/95 rounded-xl p-6 mx-auto transition-all duration-300 border-l-4 ${detailVisible && activeRing !== null ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ borderLeftColor: activeRing !== null ? ringsData[activeRing].color : '#e63946' }}>
            {activeRing !== null && (<><div className="font-display text-xl md:text-2xl mb-2" style={{ color: ringsData[activeRing].color }}>{ringsData[activeRing].title}</div><div className="text-gray-300 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: ringsData[activeRing].body }} />{ringsData[activeRing].urgent && (<span className="inline-block mt-3 font-condensed font-bold text-xs uppercase tracking-wide py-1 px-3 rounded bg-red-500/20 text-red-400 border border-red-500/30">⚠️ URGENT — ACT NOW</span>)}</>)}
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Problem */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Problem</span>
          <p className="text-white font-semibold text-xl mb-3">Every movement hits the same wall.</p>
          <p className="text-body mb-3">You've been loud. You've been right. You've been ignored.</p>
          <p className="text-body mb-3">They build energy. They get attention. They fill the streets.<br />And then nothing changes.</p>
          <p className="font-condensed font-bold text-white text-xl mb-3">That's not an accident.</p>
          <p className="text-body mb-3">Not because the cause wasn't right.<br />Not because the leaders were weak.<br />Not because people didn't care enough.</p>
          <p className="font-condensed font-bold text-3xl text-red my-4">Because there was no leverage behind the demands.</p>
          <p className="text-body">The moment fades. The pressure disappears. Everything resets.<br />And Congress goes right back to ignoring you.</p>
        </section>

        <hr className="border-green/20" />

        {/* Anchor Line */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Congress Image */}
        <section className="container section text-center py-5">
          <div className="max-w-[600px] mx-auto">
            <Image src="/images/Congress_Dont_Work_4U-WEre_changing_that-BIG.jpg" alt="Congress doesn't work for you. We're changing that." width={600} height={400} className="w-full h-auto rounded-xl border border-red-500/30" />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Truth */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Truth</span>
            <p className="text-white font-semibold text-xl mb-3">The missing ingredient isn't passion. It's leverage.</p>
            <p className="text-body mb-3">Power doesn't come from how many people care.<br />It comes from what happens if they ignore you.</p>
            <p className="text-body mb-3">Whatever brought you here — rent, wages, war, healthcare, veterans, corruption —<br />leverage is the only thing that moves Congress.</p>
            <p className="font-condensed font-bold text-green text-xl my-3">Right now, most movements have no answer to that question.<br />PHIERS does.</p>
            <p className="font-condensed text-sm text-gray-500 mt-2">Tested by a global PR firm. Built since 2009. Already being organized district by district.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* PHIERStorm Bridge Image */}
        <section className="container section text-center py-5">
          <div className="max-w-[500px] mx-auto">
            <Image src="/images/PHIERStorm_the_Movement.png" alt="PHIERStorm — The Power Behind the Movement" width={500} height={300} className="w-full h-auto opacity-90" />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What PHIERS Is */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What PHIERS Is</span>
          <p className="font-condensed font-bold text-white text-center mb-2">PHIERS means Power Held In Every Representative's Seat.</p>
          <p className="text-white font-semibold text-xl mb-3">Not another movement. The thing movements are missing.</p>
          <p className="text-body mb-3">PHIERS doesn't replace the movements you already believe in.<br />It gives them the one thing they don't have — leverage that lasts after the cameras leave.</p>
          <p className="text-body mb-3">PHIERS doesn't disappear when the moment passes.<br />District by district. Name by name. On the record.</p>
          <p className="font-condensed font-bold text-white text-2xl my-4">Congress isn't waiting it out.<br />They're sitting it out.</p>
          <p className="font-condensed font-bold text-green text-xl mb-3">PHIERS changes that.</p>
          <p className="text-sm text-gray-500 mt-2">Built by a systems architect who's been working on this since 2009.</p>
          <p className="font-condensed font-bold text-2xl text-green text-center my-6 leading-tight">A way to make Congress do their job —<br />or we replace them.</p>
          <p className="font-condensed font-bold text-sm text-gray-500 mt-2">Designed for this moment.</p>
        </section>

        <hr className="border-green/20" />

        {/* How It Works */}
        <section className="container section" id="how-it-works">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">How It Works</span>
          <p className="text-white font-semibold text-lg mb-3">Here's what that looks like in practice:</p>
          <div className="space-y-5 max-w-[600px] mx-auto">
            <div className="flex gap-4"><div className="w-11 h-11 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-black text-xl flex-shrink-0">1</div><div><p className="font-condensed font-bold text-xl text-white mb-1">You add your name</p><p className="text-body text-sm">Not symbolic. Not a petition that disappears. It's how real people are counted — by district.</p></div></div>
            <div className="flex gap-4"><div className="w-11 h-11 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-black text-xl flex-shrink-0">2</div><div><p className="font-condensed font-bold text-xl text-white mb-1">We organize by district</p><p className="text-body text-sm">Your name becomes part of a coordinated pressure block tied directly to your representative — based on what people in your district actually want.</p></div></div>
            <div className="flex gap-4"><div className="w-11 h-11 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-black text-xl flex-shrink-0">3</div><div><p className="font-condensed font-bold text-xl text-white mb-1">When enough people are organized</p><p className="text-body text-sm">The pressure becomes public and visible inside the district — creating a moment where your representative has to respond, in front of the people they represent.</p></div></div>
            <div className="flex gap-4"><div className="w-11 h-11 rounded-full bg-red text-white flex items-center justify-center font-condensed font-black text-xl flex-shrink-0">4</div><div><p className="font-condensed font-bold text-xl text-red-500 mb-1">And when leaders ignore it</p><p className="text-body text-sm">They either respond — or they have to explain why they won't, publicly, on the record.</p></div></div>
          </div>
          <p className="font-condensed font-bold text-center text-green text-lg mt-4">That's the leverage.</p>
          <p className="font-condensed font-bold text-center text-white text-base mt-2">And once it exists, they can't ignore it.</p>
          <p className="text-sm text-gray-500 text-center mt-3">When enough constituents organize in a district, elected officials have to respond. Every time.</p>
          <p className="font-condensed font-bold text-center text-white text-base mt-3">This isn't theory. It's pressure applied in the one place they can't ignore.</p>
          <div className="text-center mt-6"><Button href="/petition" variant="secondary">✍ Add Your Name →</Button><p className="text-xs text-gray-500 mt-2">It takes less than a minute.</p></div>
        </section>

        <hr className="border-green/20" />

        {/* Credibility Bridge */}
        <section className="container section-sm text-center"><p className="font-condensed font-bold text-gray-500 text-base">Before you decide what this is — know this:</p></section>

        {/* Cascade Video */}
        <section className="container section">
          <div className="max-w-[760px] mx-auto text-center mb-6">
            <p className="font-condensed font-bold text-xl text-white mb-2">You are not powerless.</p>
            <p className="text-sm text-gray-500 mt-2">This isn't theory. It's already in motion.</p>
            <p className="text-body text-base mb-3">People speak up. They show up. They demand change.<br />And still — nothing happens.</p>
            <p className="text-body text-base mb-3">Not because people don't care.<br /><strong className="text-white">Because there's nothing forcing Congress to respond.</strong></p>
            <p className="font-condensed font-bold text-green text-base mb-3">That's what PHIERS does.</p>
            <div className="h-2.5"></div>
            <p className="text-body text-base mb-3">Around 1,500 people per district — across the country —<br />hits hundreds of members of Congress at the same time.</p>
            <p className="font-condensed font-bold text-green text-base mb-3">That's all it takes.</p>
            <p className="font-condensed font-bold text-white text-base mb-2">That's enough to force Congress to respond to their constituents.</p>
            <p className="font-condensed font-bold text-red-500 text-base mb-3">Not later. Immediately.</p>
            <p className="text-body text-base mb-2">Congress can act now.</p>
            <p className="text-body text-base mb-2">The only thing missing is enough organized people to make that unavoidable.</p>
            <p className="font-condensed font-bold text-green text-base mb-4">That's what your name does.</p>
            <p className="text-sm text-gray-500 text-center mb-3">This is how we make it impossible for them not to respond.</p>
            <div className="text-center my-4"><Button href="/petition" variant="secondary">✍ Add Your Name — Help Make Congress Do Its Job</Button></div>
            <p className="font-condensed font-bold text-white text-base mb-2">Step one: Make Congress do its job.</p>
            <p className="font-condensed text-gray-500 text-sm">This is how action starts — right now.</p>
          </div>
          <div className="video-container max-w-[800px] mx-auto"><div id="wrap-cascade" className="video-wrapper cursor-pointer group" onClick={() => playVideo('cascade', 'https://www.youtube.com/embed/jMU6LKEBzbs?autoplay=1&rel=0')}><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/jMU6LKEBzbs/hqdefault.jpg')" }}><div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all"><div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div></div></div></div><div className="bg-bg-card p-4 border-x border-b border-green/20 rounded-b-xl text-center"><div className="font-display text-xl text-green mb-1">🎥 How Pressure Builds — And Why Congress Can't Ignore It</div><div className="font-condensed text-gray-400 text-sm">Why Congress can't ignore organized people — and what happens when pressure builds in one place.</div></div></div>
        </section>

        <hr className="border-green/20" />

        {/* 3.5% Proof */}
        <section className="bg-bg-dark border-y border-green/10 section"><div className="container text-center"><span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Tipping Point Is Smaller Than You Think</span><h2 className="font-display text-3xl md:text-4xl text-white mb-3">Around 3.5% — organized and sustained — is enough to tip the balance.</h2><p className="text-body mb-3">The most successful nonviolent movements in modern history crossed this threshold.</p><p className="text-body mb-3">It doesn't take everyone.<br />Just enough people, acting together in the same place.</p><p className="font-condensed font-bold text-2xl text-green my-3">12 million Americans. That's the line.</p><p className="font-condensed font-bold text-white">PHIERS is how we coordinate that — on purpose.</p><div className="max-w-[380px] mx-auto mt-6"><div onClick={() => setChenowethModalOpen(true)} className="cursor-pointer"><Image src="/images/3.5pct_Erica_Chenoweth.jpg" alt="3.5% — Chenoweth Research" width={380} height={250} className="rounded-lg border border-white/10 hover:scale-[1.02] transition-transform mx-auto" /></div><p className="text-xs text-gray-500 mt-2">Harvard researcher Erica Chenoweth. The data is ironclad. Click to enlarge.</p></div></div></section>

        <hr className="border-green/20" />

        {/* Transition to The-Teeth */}
        <section className="container section text-center py-12"><div className="max-w-[560px] mx-auto"><p className="font-condensed font-bold text-xl text-white mb-2">You understand the problem. Now see the power.</p><p className="text-gray-400 text-base mb-4">The energy is real. The anger is justified. Here's what we do with it.</p><Button href="/the-teeth" variant="secondary">See What Makes This Unavoidable →</Button><div className="h-12"></div></div></section>

        <hr className="border-green/20" />

        {/* Go Deeper */}
        <section className="container section max-w-[640px] mx-auto"><p className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Go Deeper</p><p className="text-gray-400 mb-6">Choose the path you want to understand first.</p><div className="mb-6"><p className="font-condensed font-bold text-xl text-white mb-2">⚡ The Leverage</p><p className="text-gray-400 mb-3">How organized people become impossible to ignore — and why Congress has no choice once the pressure is real.</p><Link href="/leverage" className="font-condensed font-bold text-green no-underline border-b border-green/30 pb-0.5 hover:border-green">Show me the Leverage →</Link></div><div><p className="font-condensed font-bold text-xl text-white mb-2">📖 The Healthcare Proof</p><p className="text-gray-400 mb-3">Why fixing healthcare is the first domino — and the evidence that makes the leverage unavoidable.</p><Link href="/full-story" className="font-condensed font-bold text-green no-underline border-b border-green/30 pb-0.5 hover:border-green">Explore the Deep Dive →</Link></div></section>

        <hr className="border-green/20" />

        {/* Closing Statement */}
        <section className="container section text-center pt-12"><p className="font-condensed font-bold text-base text-gray-400 leading-relaxed">PHIERS is built for one purpose:<br />giving the public the leverage we've always deserved.</p><p className="font-condensed font-bold text-white mt-2">Now it's organized.</p></section>
      </main>

      <Footer />

      {chenowethModalOpen && (<div className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center p-4" onClick={() => setChenowethModalOpen(false)}><div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}><button onClick={() => setChenowethModalOpen(false)} className="absolute -top-10 right-0 text-white text-3xl cursor-pointer hover:text-green transition-colors">✕</button><Image src="/images/3.5pct_Erica_Chenoweth.jpg" alt="3.5% — Chenoweth Research" width={800} height={600} className="rounded-xl" /></div></div>)}

      <button onClick={scrollToTop} className="back-to-top" id="back-to-top" aria-label="Back to top">↑</button>

      <style jsx global>{`
        .back-to-top { position: fixed; bottom: 24px; right: 24px; background: var(--green); color: var(--bg-deep); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; opacity: 0; visibility: hidden; transition: all 150ms ease; z-index: 999; border: none; }
        .back-to-top.visible { opacity: 1; visibility: visible; }
        .back-to-top:hover { background: #2ab568; transform: translateY(-2px); }
        @keyframes firePulse { 0%,100% { box-shadow: 0 0 40px rgba(230,57,70,0.25), inset 0 0 40px rgba(230,57,70,0.08); } 50% { box-shadow: 0 0 70px rgba(230,57,70,0.45), inset 0 0 60px rgba(230,57,70,0.15); } }
        .animate-\\[firePulse_2\\.5s_ease-in-out_infinite\\] { animation: firePulse 2.5s ease-in-out infinite; }
        .video-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; border: 2px solid rgba(61, 220, 132, 0.2); box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5); }
        .video-wrapper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: pointer; }
      `}</style>

      <script dangerouslySetInnerHTML={{ __html: `window.addEventListener('scroll', function() { var btt = document.getElementById('back-to-top'); if (btt) { if (window.scrollY > 400) { btt.classList.add('visible'); } else { btt.classList.remove('visible'); } } });` }} />
    </>
  )
}