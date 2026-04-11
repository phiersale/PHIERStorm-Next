// app/solutions/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function SolutionsPage() {
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

      <main className="pt-20 pb-16 max-w-[860px] mx-auto px-6">
        {/* HERO */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6"><Image src="/images/5D_Solutions_Rubiks_Cube.png" alt="PHIERS 5D Solutions Rubik's Cube" width={120} height={120} className="opacity-85" /></div>
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">5D Solutions</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-4">Real Reform Requires<br /><span className="text-[#3ddc84]">5-Dimensional Strategy.</span></h1>
          <p className="text-gray-400 max-w-[680px] mx-auto">Congress keeps patching symptoms. One bill here. One program there. That's why nothing changes. PHIERS fixes the system that creates them.</p>
          <div className="bg-[#111d35] border border-[#3ddc84]/20 border-l-4 border-l-[#3ddc84] rounded-r-lg p-4 my-6 max-w-[680px] mx-auto text-left text-gray-400">PHIERS is a citizen coalition using collective leverage to force Congress to fix healthcare — or replace them.</div>
          <div className="flex flex-wrap justify-center gap-4 mt-4"><Link href="/petition" className="px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link></div>
          <p className="text-gray-500 text-sm italic mt-4">One movement. Five interconnected solutions. Zero wasted motion.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* HOW IT WORKS IMAGE */}
        <div className="text-center my-8"><button onClick={() => openModal('/images/How_It_Works.png', 'How PHIERS 5D Solutions Work')} className="cursor-pointer"><Image src="/images/How_It_Works.png" alt="How PHIERS 5D Solutions Work" width={600} height={400} className="max-w-full h-auto mx-auto rounded-lg border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" /></button></div>

        {/* CASCADE VIDEO */}
        <div className="my-12"><h3 className="font-display text-xl text-[#3ddc84] text-center mb-2">CASCADE MECHANISM</h3><p className="text-gray-500 text-center mb-4">Why Congress Can't Ignore PHIERS (3:33)</p><div className="relative aspect-video rounded-xl overflow-hidden border border-[#3ddc84]/20"><iframe src="https://www.youtube.com/embed/jMU6LKEBzbs" title="CASCADE MECHANISM" allowFullScreen className="absolute inset-0 w-full h-full"></iframe></div><p className="text-gray-500 text-sm text-center mt-2">The exponential cascade that makes universal coverage inevitable.</p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* PHILOSOPHY */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Philosophy</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">We Don't Fix One Crisis at a Time.<br /><span className="text-[#3ddc84]">We Fix the System That Creates Them.</span></h2><p className="text-gray-400 mb-3">Congress patches problems. One bill here. One program there. That's why nothing changes.</p><p className="text-gray-400 mb-3"><strong className="text-white">PHIERS solves all five crises simultaneously.</strong></p><p className="text-gray-400 mb-3">Healthcare crisis → unlocks jobs → unlocks safety net → unlocks opportunity → unlocks guardrails. Each dimension reinforces the others.</p><p className="text-white text-lg my-6"><strong>This isn't a policy list. This is survival architecture.</strong></p><p className="text-gray-400">And it starts with one domino.</p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* FIRST DOMINO */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The First Domino</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-2">Telehealth for <span className="text-[#3ddc84]">All.</span></h2><h3 className="font-condensed text-xl text-white mb-4">The fastest, cheapest, most scalable way to deliver care — today.</h3><p className="text-gray-400 mb-3">Telehealth already delivers:</p><ul className="list-disc pl-6 text-gray-400 mb-3"><li>Faster care</li><li>Cheaper care</li><li>Fewer denials</li><li>Broader access</li><li>Better outcomes</li></ul><p className="text-gray-400 mb-3">Congress could authorize $600 of telehealth coverage right now — instantly lowering costs for millions.</p><p className="text-red-500 font-bold mb-2">They refuse to.</p><p className="text-[#3ddc84] font-bold mb-3">So we're forcing the issue.</p><p className="text-gray-400">Once telehealth is authorized, everything else becomes possible.</p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* THE CASCADE */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Cascade</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">How One Fix Unlocks <span className="text-[#3ddc84]">Everything Else.</span></h2><p className="text-white text-lg mb-4"><strong>This is why Congress is terrified:</strong></p><div className="bg-[#3ddc84]/5 border border-[#3ddc84]/20 rounded-lg p-6 my-4"><p className="text-white text-center text-lg"><strong>Fix healthcare → unlock jobs → unlock safety net → unlock opportunity → unlock guardrails.</strong></p><p className="text-gray-400 text-center mt-3">No new taxes. No new bureaucracy. Just one domino falling forward.</p></div></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* FIVE DEMANDS */}
        <div className="mb-12" id="what-we-demand"><span className="font-condensed font-bold text-blue-500 text-sm uppercase tracking-wide">What We Demand</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Five Dimensions.<br /><span className="text-blue-500">One Unified Movement.</span></h2><p className="text-gray-400 mb-3">We're not here to beg Congress for scraps. We're here to force the only intelligent, interconnected, minimum-wasted-motion plan that solves multiple national crises at once.</p><p className="text-gray-400 mb-3"><strong className="text-white">These aren't random policies. These are five dimensions of the same solution</strong> — each one unlocking the next, each one reinforcing the others.</p><p className="text-[#3ddc84] font-bold mb-6">This is the 5D Blueprint for a stable, healthy, prosperous America.</p>

          <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6 mb-6"><h3 className="font-display text-2xl text-[#3ddc84] mb-2">1. Telehealth for everyone — right now</h3><p className="text-gray-500 text-sm mb-3">The first domino. The fastest fix. The ignition point.</p><p className="text-gray-400 mb-2"><strong className="text-white">Congress must authorize $600 of telehealth coverage for every American, immediately.</strong></p><p className="text-gray-400 mb-2"><strong className="text-white">Why?</strong> Because telehealth is cheaper, faster, more accessible, less bureaucratic, less corruptible, and already working.</p><p className="text-[#3ddc84] font-bold mb-2">This is the entry point to universal care — not in theory, but in practice.</p><p className="text-gray-400">Once telehealth is authorized, the entire 5D cascade becomes possible. <strong className="text-white">This is the lever.</strong></p></div>

          <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6 mb-6"><h3 className="font-display text-2xl text-[#3ddc84] mb-2">2. Full coverage — in under a year</h3><p className="text-gray-500 text-sm mb-3">Telehealth is the on-ramp. Universal care is the destination.</p><p className="text-gray-400 mb-2">Once everyone has access to basic care, the cost of full coverage drops dramatically.</p><p className="text-[#3ddc84] font-bold mb-2">Universal healthcare is no longer a 10-year dream. It becomes an 8–13 month inevitability.</p><p className="text-gray-400">This isn't ideology. It's math. And it's the foundation for everything that comes next.</p></div>

          <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6 mb-6"><h3 className="font-display text-2xl text-[#3ddc84] mb-2">3. A monthly check — funded by savings, not taxes</h3><p className="text-gray-500 text-sm mb-3">Funded by the $2.73 trillion we're already wasting.</p><p className="text-gray-400 mb-2">The $2.73T isn't "new spending." It's the money we're already losing to administrative waste, denials, inflated drug prices, middlemen, profit extraction, and inefficiency baked into the system.</p><p className="text-gray-400 mb-2"><strong className="text-white">We're not asking Congress to raise taxes.</strong> We're asking them to stop burning money and redirect the savings into:</p><ul className="list-disc pl-6 text-gray-400 mb-2"><li>A national UBI</li><li>Economic stability</li><li>Entrepreneurship</li><li>Resilience</li><li>Dignity</li></ul><p className="text-[#3ddc84] font-bold">This is how we stabilize people — permanently.</p></div>

          <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6 mb-6"><h3 className="font-display text-2xl text-[#3ddc84] mb-2">4. Millions of AI-Resistant Jobs</h3><p className="text-gray-500 text-sm mb-3">Stability creates capacity. Capacity creates opportunity.</p><p className="text-gray-400 mb-2">When people have healthcare, income stability, and breathing room, they can retrain, relocate, start businesses, fill essential roles, and build new industries.</p><p className="text-[#3ddc84] font-bold">This is how we create millions of jobs that automation can't erase. This is how we rebuild the middle class.</p></div>

          <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6 mb-6"><h3 className="font-display text-2xl text-[#3ddc84] mb-2">5. Stop presidents from acting like kings</h3><p className="text-gray-500 text-sm mb-3">Economic stability is political stability.</p><p className="text-gray-400 mb-2">When people are healthy, housed, fed, stable, and secure, they are harder to manipulate, harder to divide, harder to radicalize, and harder to control.</p><p className="text-[#3ddc84] font-bold mb-2">Economic stability is the strongest defense against authoritarian drift.</p><p className="text-gray-400">This is how we protect democracy — not with speeches, but with material stability.</p></div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* 5D LOOP */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The 5D Loop</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">A Loop, <span className="text-[#3ddc84]">Not a Line.</span></h2><div className="my-6 text-center"><button onClick={() => openModal('/images/PHIERS_5D_Solutions.png', 'PHIERS 5D Solutions Framework')} className="cursor-pointer"><Image src="/images/PHIERS_5D_Solutions.png" alt="PHIERS 5D Solutions Framework" width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" /></button><p className="text-gray-500 text-sm italic mt-2">Fundamentals • Distribution • Digital • Demand • Direct Pay → Affordable Healthcare</p></div><div className="bg-[#3ddc84]/5 border border-[#3ddc84]/20 rounded-lg p-6"><ul className="space-y-2 text-gray-400 list-none"><li>✓ Healthcare savings fund UBI</li><li>✓ UBI fuels job creation</li><li>✓ Job creation stabilizes democracy</li><li>✓ Stability strengthens healthcare</li><li>✓ Healthcare reduces costs further</li></ul><p className="text-center text-[#3ddc84] font-bold mt-5"><strong>Self-reinforcing progress — the opposite of the downward spiral we're in now.</strong></p></div><p className="text-center text-white text-lg mt-6"><strong>This is the soul of the movement.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* DRUG COSTS */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">On Drug Costs</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">$2.73T Savings →<br /><span className="text-[#3ddc84]">Universal Basic Income.</span></h2><p className="text-gray-400 mb-6">Once healthcare stops draining people, employers, and government budgets, the savings become the fuel for economic stability, entrepreneurship, resilience, and dignity.</p><div className="my-6 text-center"><button onClick={() => openModal('/images/Drug_DEV_Costs__UAEM.png', 'Drug Development Cost Comparison - Academic vs Big Pharma')} className="cursor-pointer"><Image src="/images/Drug_DEV_Costs__UAEM.png" alt="Drug Development Cost Comparison" width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" /></button><p className="text-gray-500 text-sm italic mt-2">Academic labs develop drugs at 1/24th the cost. Big Pharma just charges more.</p></div><p className="text-[#3ddc84] font-bold">This isn't charity. It's returning the value we're already creating.</p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* TIMELINE */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Timeline</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">From 3.5% to <span className="text-[#ffd60a]">July 4.</span></h2><p className="text-gray-400 mb-6">We're not asking for miracles. We're following the math.</p><div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 mb-4"><div className="font-condensed font-bold text-[#3ddc84] text-lg mb-2">Step 1 — 3.5% Threshold Reached</div><p className="text-gray-400">This forces Congress to authorize the telehealth cascade.</p></div><div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 mb-4"><div className="font-condensed font-bold text-[#3ddc84] text-lg mb-2">Step 2 — Authorization → Exponential Growth</div><p className="text-gray-400 mb-2">Once authorized, the cascade grows automatically:</p><div className="font-mono text-sm text-[#3ddc84] text-center p-3 bg-[#0a1020] rounded-lg mb-2 break-all">1 → 12 → 148 → 1,776 → 21,312 → 255,744 → 3,068,928 → 36,827,136 → 442,000,000+</div><p className="text-gray-400">This is how systems scale.</p></div><div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><div className="font-condensed font-bold text-[#3ddc84] text-lg mb-2">Step 3 — 100 Million Members by July 4</div><p className="text-gray-400 mb-2">Not because of hope. Because of math.</p><p className="text-[#3ddc84] font-bold">Independence Day becomes the day America becomes independent from corporate healthcare.</p></div><p className="text-center text-white text-lg mt-6"><strong>That's the arc. That's the meaning. That's the movement.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* FINAL CTA */}
        <div className="text-center my-12 p-8 border border-[#3ddc84]/30 rounded-xl bg-gradient-to-br from-[#3ddc84]/5 to-transparent"><h2 className="font-display text-3xl md:text-4xl text-white mb-3">Congress Ignored All Five Dimensions.<br /><span className="text-blue-500">We're Fixing Them Anyway.</span></h2><p className="text-gray-400 mb-4">The cascade starts when you act:</p><div className="bg-white/5 p-4 rounded-lg my-5"><p className="text-white font-bold text-center">Sign → Force Telehealth → Trigger 5D Cascade → 234M Covered → System Fixed</p></div><p className="text-gray-400 mb-6">This is survival math. And it starts with you.</p><div className="flex flex-wrap justify-center gap-4"><Link href="/action" className="px-6 py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold rounded-lg hover:bg-[#34c474] transition-all">Force Congress to Act</Link><Link href="/petition" className="px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link></div></div>

        {/* PAGE NAVIGATION */}
        <div className="flex justify-between pt-8 mt-8 border-t border-[#3ddc84]/20"><Link href="/simple-math" className="font-condensed font-bold text-[#3ddc84]">← Back to Simple Math</Link><Link href="/telecare" className="font-condensed font-bold text-[#3ddc84]">Next: Telehealth & Insurance →</Link></div>
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
