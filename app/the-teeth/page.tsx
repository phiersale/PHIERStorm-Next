// app/the-teeth/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function TheTeethPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [teethModalOpen, setTeethModalOpen] = useState(false)
  const [willModalOpen, setWillModalOpen] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const loadPathosVideo = () => {
    if (videoLoaded) return
    const container = document.getElementById('pathos-video-container')
    if (container) {
      container.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/UD8svoGU7ZU?autoplay=1&rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
      setVideoLoaded(true)
    }
  }

  return (
    <>
      <div className="pt-4 pb-2 text-center"><span className="font-condensed text-sm text-gray-500 tracking-wide uppercase">Step 3 of 3 — The Teeth Behind the Demands</span><p className="font-condensed text-xs text-gray-600 opacity-65 mt-1">Three short pages. Enough to understand the whole system.</p></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/95 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">PHIERS.org</Link>
        <div className="flex items-center gap-4">
          <Link href="/petition" className="hidden md:inline-block px-5 py-2 bg-red-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl p-2 border border-white/20 rounded-lg">{mobileMenuOpen ? '✕' : '☰'}</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>{mobileMenuOpen && (<motion.div className="fixed top-16 left-0 right-0 bg-[#0d1525] border-b border-[#3ddc84]/20 z-40 p-5" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}><div className="space-y-4"><Link href="/no-war" className="block p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 font-condensed font-bold text-center" onClick={() => setMobileMenuOpen(false)}>🕊 END THE WAR / NO DRAFT</Link><details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Understand the Fight</summary><div className="space-y-2 pl-4 mt-2"><Link href="/crisis" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🚨 The Crisis</Link><Link href="/simple-math" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📊 Simple Math</Link><Link href="/how-it-works" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>⚡ The Leverage</Link><Link href="/solutions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🔬 5D Solutions</Link><Link href="/telecare" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💡 TeleCARE</Link></div></details><details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Who We're For</summary><div className="space-y-2 pl-4 mt-2"><Link href="/organizers" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>✊ For Organizers</Link><Link href="/veterans" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🎖 Veterans</Link><Link href="/unions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💪 Union Strategy</Link></div></details><details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Resources</summary><div className="space-y-2 pl-4 mt-2"><Link href="/resources" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📚 Resource Hub</Link><Link href="/faq" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>❓ FAQ</Link><Link href="/about" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📖 About</Link></div></details><details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Take Action</summary><div className="space-y-2 pl-4 mt-2"><Link href="/petition" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📋 Sign the Petition</Link><Link href="/donate" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💚 Donate</Link><Link href="/action" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📣 Take Action</Link></div></details><Link href="/petition" className="block w-full py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-center rounded-lg mt-4" onClick={() => setMobileMenuOpen(false)}>✍ Sign Now</Link></div></motion.div>)}</AnimatePresence>

      <main>
        {/* THE TEETH HERO */}
        <section className="py-20 px-6 text-center bg-[#0a1628]"><div className="max-w-[800px] mx-auto"><div className="flex justify-center mb-6"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="opacity-90" /></div><p className="font-condensed text-[#3ddc84] text-lg mt-3">PHIERS — Power Held In Every Representative's Seat.</p><p className="font-condensed text-gray-500 text-sm mt-2">16 years in the making. This is the moment it was built for.</p><h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight my-8 max-w-[700px] mx-auto">Power concedes nothing without a demand —<br />a demand that has <span className="text-red-500">teeth.</span></h1><p className="text-gray-400 mb-3">Leaders can fire people up.<br />Movements can bring people together.</p><p className="text-white font-semibold text-lg mb-3">But only organized people make Congress move.</p><p className="text-gray-400 mb-3">Speeches fade.<br />Rallies fade.<br />The news cycle fades.</p><p className="font-condensed font-bold text-2xl text-[#3ddc84] mb-6">Pressure doesn't.</p><p className="font-display text-2xl md:text-3xl text-[#3ddc84] my-6">PHIERS gives real bite to the demands people are already making.</p><p className="font-condensed font-bold text-[#3ddc84] text-lg">Not for a moment. For as long as it takes.</p><div className="max-w-[420px] mx-auto mt-8"><button onClick={() => setTeethModalOpen(true)} className="cursor-pointer"><Image src="/images/We_Gotz_Teeth_for_No_Kings.jpg" alt="Power concedes nothing without a demand that has teeth" width={420} height={300} className="w-full h-auto rounded-xl border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" /></button><p className="text-xs text-[#8899bb] mt-2">click to enlarge</p></div></div></section>

        <hr className="border-[#3ddc84]/20" />

        {/* SIMPLE IDEA */}
        <section className="py-16 px-6 max-w-[760px] mx-auto text-center"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Simple Idea. Already Built.</span><p className="text-xl text-white font-semibold mt-4 mb-4">The idea's simple: people in every district, speaking with one voice, with real expectations — and real consequences when Congress drags its feet.</p><p className="font-condensed font-bold text-[#3ddc84] text-xl">It's already built. And it works.</p><p className="text-sm text-gray-500 mt-2">It's already being used — district by district.</p></section>

        <hr className="border-[#3ddc84]/20" />

        {/* PATHOS VALIDATION */}
        <section className="py-16 px-6"><div className="max-w-[800px] mx-auto bg-[#111d35]/60 rounded-2xl p-8 border border-[#3ddc84]/15"><div className="max-w-[700px] mx-auto text-center"><p className="font-condensed text-xs text-[#3ddc84] uppercase tracking-wider mb-3">Independent Validation</p><div className="font-condensed text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">"If you weren't legit, we wouldn't risk putting our name behind yours."</div><div className="font-condensed text-sm text-gray-500 mb-4">— <a href="https://www.pathoscommunications.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">Pathos Communications</a> · Global PR firm (London Stock Exchange)</div><div className="font-condensed text-sm text-[#3ddc84] font-bold mb-5">We passed their test — and chose to stay grassroots.</div><p className="font-condensed font-bold text-gray-500 text-sm uppercase tracking-wide mb-3">Watch how this works in real life.</p><div id="pathos-video-container" className="relative w-full max-w-[560px] mx-auto aspect-video overflow-hidden rounded-xl cursor-pointer bg-black" onClick={loadPathosVideo}>{!videoLoaded && (<><img src="https://img.youtube.com/vi/UD8svoGU7ZU/hqdefault.jpg" alt="Watch the video" className="w-full h-full object-cover" /><div className="absolute inset-0 flex items-center justify-center bg-black/30"><div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-3xl text-white">▶</div></div></>)}</div><p className="font-condensed text-xs text-gray-500 uppercase tracking-wide mt-3">Watch the Validation</p><p className="font-body text-xs text-gray-500 mt-2">Click to play — video loads here</p></div></div></section>

        <hr className="border-[#3ddc84]/20" />

        {/* FINAL CTA */}
        <section className="py-16 px-6"><div className="max-w-[600px] mx-auto text-center border-2 border-[#3ddc84] rounded-xl p-10"><p className="text-sm text-gray-500 mb-3">If you're waiting for someone else to fix this — they won't.</p><div className="font-display text-3xl text-white mb-6">Add your name. Be counted. Make Congress do its job.</div><p className="text-lg text-gray-300 leading-relaxed">Your name isn't just a gesture.<br />It goes straight to your representative.<br />They can't ignore it anymore.<br />That's pressure they can't outlast.</p><p className="font-condensed font-bold text-[#3ddc84] text-lg mt-4">This is how we make it impossible for them not to respond.</p><Link href="/petition" className="inline-block mt-8 bg-transparent text-[#3ddc84] border border-[#3ddc84]/50 px-8 py-3 rounded-full font-body font-semibold hover:bg-[#3ddc84]/10 transition-all">✍ Sign the Petition →</Link></div></section>

        <hr className="border-[#3ddc84]/20" />

        <section className="py-12 px-6 text-center"><p className="font-condensed text-sm text-gray-500 mb-4">Want the full breakdown?</p><Link href="/leverage" className="font-condensed font-bold text-[#3ddc84] text-base border-b border-[#3ddc84]/30 pb-0.5">See How It Works →</Link></section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-12 px-6 border-t border-[#3ddc84]/10"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-70" /><div className="font-condensed font-bold text-gray-400 mb-1">PHIERS is a people's movement — not a company, not a product.</div><div className="text-sm text-gray-500 mb-4">Built by regular people who are done waiting.</div><div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-6"><Link href="/crisis" className="text-gray-500 text-sm hover:text-[#3ddc84]">The Crisis</Link><Link href="/simple-math" className="text-gray-500 text-sm hover:text-[#3ddc84]">Simple Math</Link><Link href="/solutions" className="text-gray-500 text-sm hover:text-[#3ddc84]">5D Solutions</Link><Link href="/telecare" className="text-gray-500 text-sm hover:text-[#3ddc84]">Telehealth</Link><Link href="/no-war" className="text-gray-500 text-sm hover:text-[#3ddc84]">No War / No Draft</Link><Link href="/organizers" className="text-gray-500 text-sm hover:text-[#3ddc84]">Organizers</Link><Link href="/unions" className="text-gray-500 text-sm hover:text-[#3ddc84]">Unions</Link><Link href="/donate" className="text-gray-500 text-sm hover:text-[#3ddc84]">Donate</Link><Link href="/faq" className="text-gray-500 text-sm hover:text-[#3ddc84]">FAQ</Link><Link href="/about" className="text-gray-500 text-sm hover:text-[#3ddc84]">About</Link></div><div className="text-xs text-gray-600">Not built for profit. Not built for power. Built for We the People — by people who refused to stop.<br />📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a> · 📞 (916) 306-8967<br />© PHIERS.org — Original Concept Since 2009. All Rights Reserved.<br /><span className="text-[0.7rem]">PHIERS™ · PHIERSale™ · PHIERWorks™ · PHIERPlace™ — Protected marks established 2009–2025.</span></div></footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>

      {/* Modals */}
      <AnimatePresence>{teethModalOpen && (<motion.div className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setTeethModalOpen(false)}><img src="/images/We_Gotz_Teeth_for_No_Kings.jpg" alt="Power concedes nothing" className="max-w-[90vw] max-h-[85vh] rounded-xl" /></motion.div>)}</AnimatePresence>
      <AnimatePresence>{willModalOpen && (<motion.div className="fixed inset-0 bg-black/90 z-[99998] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setWillModalOpen(false)}><div className="relative max-w-[720px] w-full bg-[#080d1a]/97 border-2 border-[#3ddc84]/35 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}><button onClick={() => setWillModalOpen(false)} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#111d35] text-[#3ddc84] border-2 border-[#3ddc84] flex items-center justify-center text-xl hover:bg-[#3ddc84] hover:text-[#111d35] transition-all z-10">✕</button><div className="flex flex-wrap"><div className="w-full md:w-[240px] min-h-[280px] overflow-hidden"><img src="/images/Will_Price.png" alt="Will Price" className="w-full h-full min-h-[260px] object-cover object-[55%_top]" /></div><div className="flex-1 min-w-[240px] p-7 flex flex-col justify-center"><p className="font-condensed text-xs text-[#3ddc84] uppercase tracking-[3px] mb-2">The Architect</p><h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1">Will Price</h3><p className="font-condensed text-sm text-[#ffd60a] font-bold mb-4">Founder &amp; Chief Solutions Architect, PHIERS</p><p className="font-body text-sm text-[#c8d8c8] leading-relaxed">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending — and built the lever to redirect it toward healthcare, jobs, and a monthly check for every American. Building this since 2009.</p></div></div></div></motion.div>)}</AnimatePresence>

      <style jsx global>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-condensed { font-family: 'Barlow Condensed', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }
        details summary { list-style: none; }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  )
}
