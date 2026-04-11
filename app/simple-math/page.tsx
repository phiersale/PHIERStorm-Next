// app/simple-math/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function SimpleMathPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState('')
  const [modalImageAlt, setModalImageAlt] = useState('')
  const [willModalOpen, setWillModalOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const openModal = (src: string, alt: string) => {
    setModalImageSrc(src)
    setModalImageAlt(alt)
    setImageModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setImageModalOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/95 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">PHIERS.org</Link>
        <div className="flex items-center gap-4">
          <Link href="/petition" className="hidden md:inline-block px-5 py-2 bg-red-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl p-2 border border-white/20 rounded-lg">{mobileMenuOpen ? '✕' : '☰'}</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="fixed top-16 left-0 right-0 bg-[#0d1525] border-b border-[#3ddc84]/20 z-40 p-5 max-h-[calc(100vh-64px)] overflow-y-auto" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="space-y-4">
              <Link href="/no-war" className="block p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 font-condensed font-bold text-center" onClick={() => setMobileMenuOpen(false)}>🕊 END THE WAR / NO DRAFT</Link>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Understand the Fight</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/crisis" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🚨 The Crisis</Link><Link href="/simple-math" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📊 Simple Math</Link><Link href="/how-it-works" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>⚡ The Leverage</Link><Link href="/solutions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🔬 5D Solutions</Link><Link href="/telecare" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💡 TeleCARE</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Who We're For</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/organizers" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>✊ For Organizers</Link><Link href="/veterans" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🎖 Veterans</Link><Link href="/unions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💪 Union Strategy</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Resources</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/resources" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📚 Resource Hub</Link><Link href="/faq" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>❓ FAQ</Link><Link href="/about" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📖 About</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Take Action</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/petition" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📋 Sign the Petition</Link><Link href="/donate" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💚 Donate</Link><Link href="/action" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📣 Take Action</Link></div>
              </details>
              <Link href="/petition" className="block w-full py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-center rounded-lg mt-4" onClick={() => setMobileMenuOpen(false)}>✍ Sign Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Home Link */}
      <div className="pt-20 px-6"><Link href="/" className="font-condensed text-[#3ddc84] text-sm hover:underline">← PHIERS.org</Link></div>

      <main className="pb-16 max-w-[860px] mx-auto px-6">
        {/* HERO */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="opacity-85" /></div>
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Simple Math</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-4">The Math Congress<br /><span className="text-[#3ddc84]">Doesn't Want You to Know.</span></h1>
          <p className="text-gray-400 max-w-[620px] mx-auto">$10,000 per person. $600 per person. The same care. Congress has the authority to authorize the difference tomorrow. They haven't had to — until now.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6"><Link href="/petition" className="px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link><Link href="/solutions" className="px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">→ See the 5D Solutions</Link></div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* CORE COMPARISON */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Core Comparison</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">$10,000 vs <span className="text-[#3ddc84]">$600.</span></h2><p className="text-gray-400 mb-3">Replace a <strong className="text-white">$10,000/year insurance product</strong> with a <strong className="text-white">$600/year telehealth-first plan</strong>, and the savings fund:</p><ul className="list-disc pl-6 text-gray-400 mb-3"><li>Universal access</li><li>Millions of healthcare jobs</li><li>Massive system-wide savings</li></ul><p className="text-gray-400"><strong className="text-white">All using existing law. No new taxes. No new bureaucracy. Just math.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* CASCADE */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Cascade</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">One Conversion Funds <span className="text-[#3ddc84]">12–19 More.</span></h2><div className="my-6 text-center"><button onClick={() => openModal('/images/SIMPLE_MATH.png', 'The Math: One conversion funds exponential coverage')} className="cursor-pointer"><Image src="/images/SIMPLE_MATH.png" alt="The Math: One conversion funds exponential coverage" width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" /></button><p className="text-gray-500 text-sm italic mt-2">The Exponential Foundation</p></div><p className="text-gray-400 mb-4"><strong className="text-white">Here's the part Congress doesn't want you to understand:</strong></p><div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6 my-6 text-gray-300 space-y-2"><p>• One person switches from <strong className="text-white">$10,000 insurance</strong> to <strong className="text-white">$600 telehealth</strong></p><p>• That saves <strong className="text-white">$9,400</strong></p><p>• That $9,400 funds <strong className="text-white">15 more people</strong> at $600 each</p><p>• Those 15 save $141,000 combined</p><p>• That funds <strong className="text-white">235 more</strong></p></div><p className="text-center font-bold text-[#3ddc84] text-lg">It snowballs. Fast. And they know it.</p><p className="text-gray-400 mt-4">And as premiums rise higher — $12,000, $15,000, $18,000 — <strong className="text-white">the cascade accelerates</strong>.</p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* MATHEMATICAL CASCADE */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Mathematical Cascade</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">234 Million Covered.<br /><span className="text-[#ffd60a]">9 Iterations.</span></h2><div className="my-6 text-center"><button onClick={() => openModal('/images/CORE_MATH_for_234M.png', 'Core Math: How $600 telehealth unlocks 234 million covered')} className="cursor-pointer"><Image src="/images/CORE_MATH_for_234M.png" alt="Core Math: How $600 telehealth unlocks 234 million covered" width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" /></button><p className="text-gray-500 text-sm italic mt-2">The Endpoint: Universal Coverage for 234M Americans</p></div><p className="text-gray-400 mb-6">Iteration by iteration, the savings multiply:</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6"><div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 text-center"><div className="font-display text-3xl text-[#3ddc84]">9</div><div className="text-gray-500 text-sm">Iterations</div></div><div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 text-center"><div className="font-display text-3xl text-[#3ddc84]">234M</div><div className="text-gray-500 text-sm">Americans Covered</div></div><div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 text-center"><div className="font-display text-3xl text-[#ffd60a]">$2.73T</div><div className="text-gray-500 text-sm">Annual Savings</div></div><div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 text-center"><div className="font-display text-3xl text-[#3ddc84]">15x+</div><div className="text-gray-500 text-sm">Growth Rate</div></div></div><p className="text-center text-gray-400"><strong className="text-white">This isn't theory. It's arithmetic.</strong></p><p className="text-center text-[#3ddc84] mt-4">The math doesn't stall. It doesn't negotiate. It doesn't care about lobbyists.<br /><strong className="text-white">It just keeps going — until everyone is covered.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* MEDICAID LEVERAGE */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Maximum Leverage</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Why We Start With <span className="text-[#3ddc84]">Medicaid.</span></h2><p className="text-gray-400 mb-3">Most reforms fail because they try to fix everything at once. PHIERS starts where:</p><ul className="list-disc pl-6 text-gray-400 mb-3"><li><strong className="text-white">The savings are largest</strong></li><li><strong className="text-white">The vulnerability is highest</strong></li><li><strong className="text-white">The proof is undeniable</strong></li></ul><p className="text-gray-400 mb-3">Medicaid costs $8,000 per person. Telehealth costs $600. That's <strong className="text-white">$7,400 in savings</strong> per conversion — enough to fund 12 more.</p><p className="text-gray-400 mb-3"><strong className="text-white">Medicaid is the pressure point.</strong> Once it converts, the rest of the system follows — ACA, private insurance, and the uninsured.</p><p className="text-[#3ddc84]"><strong>Not because Congress wants it. Because the math forces it.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* 3.5% RULE */}
        <div className="mb-12 text-center"><div className="my-6"><button onClick={() => openModal('/images/3.5pct_Means_Change.png', '3.5% Means Guaranteed Change - March 28, 2026')} className="cursor-pointer"><Image src="/images/3.5pct_Means_Change.png" alt="3.5% Means Guaranteed Change - March 28, 2026" width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" /></button><p className="text-gray-500 text-sm italic mt-2">Click to enlarge</p></div><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The 3.5% Rule</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Why Congress <span className="text-red-500">Is Scared.</span></h2><div className="bg-[#3ddc84]/5 border border-[#3ddc84]/20 rounded-lg p-6 my-6"><p className="text-white font-bold mb-3">Harvard research shows that no movement with sustained participation above 3.5% has ever failed.</p><p className="text-gray-400">When 3.5% of Americans take coordinated action, governments either comply or collapse. Over <strong className="text-white">100 million</strong> are already affected by this crisis.</p><p className="text-[#3ddc84] font-bold mt-3">Congress knows the math. Now you do too.</p></div></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* FINAL CTA */}
        <div className="text-center mb-12"><h2 className="font-display text-3xl md:text-4xl text-white mb-3">They Fear the Math.<br /><span className="text-[#3ddc84]">Be Part of It.</span></h2><p className="text-gray-400 mb-6">Sign the petition. Do the math. Force Congress to answer.</p><Link href="/petition" className="inline-block px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link></div>

        {/* PAGE NAVIGATION */}
        <div className="flex justify-between pt-8 mt-8 border-t border-[#3ddc84]/20"><Link href="/crisis" className="font-condensed font-bold text-[#3ddc84]">← Back to The Crisis</Link><Link href="/solutions" className="font-condensed font-bold text-[#3ddc84]">Next: 5D Solutions →</Link></div>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-12 px-6 border-t border-[#3ddc84]/10 bg-[#0d1525]"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-70" /><div className="font-condensed font-bold text-gray-400 mb-1">PHIERS is a people's movement — not a company, not a product.</div><div className="text-sm text-gray-500 mb-4">Built by regular people who are done waiting.</div><div className="max-w-[500px] mx-auto mb-6"><p className="font-condensed text-gray-400">Energy without power fails.<br />PHIERStorm is the power.<br /><span className="text-gray-500">PHIERS.org — a catalyst for the change we've been waiting for.</span><br /><span className="text-gray-500">The only thing missing is you.</span></p></div><div className="max-w-[560px] mx-auto p-5 border border-[#3ddc84]/15 rounded-lg mb-6"><p className="font-condensed text-gray-500 text-xs uppercase tracking-wide mb-2">Built by</p><p className="font-condensed font-bold text-white">Will Price | Founder &amp; Chief Solutions Architect</p><p className="font-condensed text-gray-400 text-sm mb-3">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending and built the lever to fix it. Building this since 2009.</p><button onClick={() => setWillModalOpen(true)} className="font-condensed text-[#3ddc84] text-sm border-b border-[#3ddc84]/30">👤 Meet the Architect →</button></div><div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-6"><Link href="/crisis" className="text-gray-500 text-sm hover:text-[#3ddc84]">The Crisis</Link><Link href="/simple-math" className="text-gray-500 text-sm hover:text-[#3ddc84]">Simple Math</Link><Link href="/solutions" className="text-gray-500 text-sm hover:text-[#3ddc84]">5D Solutions</Link><Link href="/telecare" className="text-gray-500 text-sm hover:text-[#3ddc84]">Telehealth</Link><Link href="/no-war" className="text-gray-500 text-sm hover:text-[#3ddc84]">No War / No Draft</Link><Link href="/organizers" className="text-gray-500 text-sm hover:text-[#3ddc84]">Organizers</Link><Link href="/unions" className="text-gray-500 text-sm hover:text-[#3ddc84]">Unions</Link><Link href="/donate" className="text-gray-500 text-sm hover:text-[#3ddc84]">Donate</Link><Link href="/faq" className="text-gray-500 text-sm hover:text-[#3ddc84]">FAQ</Link><Link href="/about" className="text-gray-500 text-sm hover:text-[#3ddc84]">About</Link></div><div className="text-xs text-gray-600">Not built for profit. Not built for power. Built for We the People — by people who refused to stop.<br />📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a> · 📞 (916) 306-8967<br />© PHIERS.org — Original Concept Since 2009. All Rights Reserved.<br /><span className="text-[0.7rem]">PHIERS™ · PHIERSale™ · PHIERWorks™ · PHIERPlace™ — Protected marks established 2009–2025.</span></div></footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>

      {/* Image Modal */}
      <AnimatePresence>{imageModalOpen && (<motion.div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}><button className="absolute top-5 right-7 text-white text-3xl cursor-pointer bg-black/50 border border-white/20 w-10 h-10 rounded-full" onClick={closeModal}>✕</button><img src={modalImageSrc} alt={modalImageAlt} className="max-w-[90vw] max-h-[90vh] rounded-lg border border-[#3ddc84]/20" /></motion.div>)}</AnimatePresence>

      {/* Will Price Modal */}
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
