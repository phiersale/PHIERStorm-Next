// app/unstoppable/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function UnstoppablePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState('')
  const [willModalOpen, setWillModalOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const openModal = (src: string) => {
    setModalImageSrc(src)
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
                <div className="space-y-2 pl-4 mt-2"><Link href="/organizers" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>✊ For Organizers</Link><Link href="/veterans" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🎖 Veterans</Link><Link href="/no-war" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🕊 No War / No Draft</Link><Link href="/unions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💪 Union Strategy</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Resources</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/resources" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📚 Resource Hub</Link><Link href="/real-stories" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💬 Real Stories</Link><Link href="/faq" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>❓ FAQ</Link><Link href="/about" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📖 About</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Take Action</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/petition" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📋 Sign the Petition</Link><Link href="/donate" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💚 Donate</Link><Link href="/action" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📣 Take Action</Link></div>
              </details>
              <Link href="/petition" className="block w-full py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-center rounded-lg mt-4" onClick={() => setMobileMenuOpen(false)}>✍ Sign Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <div className="text-center pt-28 pb-12 px-6 bg-gradient-to-b from-[#0a0f1a] to-[#080d1a]">
          <div className="flex justify-center mb-4"><Image src="/images/PHIERS_Logo.png" alt="PHIERS Logo" width={200} height={200} className="max-w-[250px] w-full" /></div>
          <div className="text-gray-500 text-sm italic mb-4">UNBREAKABLE was the proof. UNSTOPPABLE is the plan.</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-3 font-black tracking-[6px] uppercase">UNSTOPPABLE</h1>
          <div className="text-gray-500 text-base tracking-wide mb-4">The movement we build together.</div>
          <p className="text-[#3ddc84] text-lg font-bold max-w-[700px] mx-auto">Black men built this.<br />Millions of us make it unstoppable.</p>
          <p className="text-gray-600 text-xs italic mt-4">This page is not persuasion. It is measurement.</p>
        </div>

        <hr className="border-[#3ddc84]/20" />

        {/* Section 1 - The Movement */}
        <div className="bg-[#0d1525] py-12 px-6">
          <div className="max-w-[860px] mx-auto">
            <span className="text-[#3ddc84] text-xs font-bold tracking-[2.5px] uppercase">1 — The Movement</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">We Built This. Together We Make It Unstoppable.</h2>
            <p className="text-white text-xl font-bold mb-2">UNSTOPPABLE is the moment when integrity becomes momentum.</p>
            <p className="text-white text-xl font-bold mb-2">When clarity becomes power.</p>
            <p className="text-white text-xl font-bold mb-4">When a national solution becomes a national movement.</p>
            <p className="text-gray-400 mb-3">UNBREAKABLE documented how PHIERS was built under pressure.<br />UNSTOPPABLE documents what happens next —<br />when millions of people move together with purpose, math, and undeniable democratic force.</p>
            <p className="text-gray-400 mb-3">We are not drifting.</p>
            <p className="text-gray-400 mb-3">We are choosing.</p>
            <p className="text-gray-400 mb-3">We choose to turn:</p>
            <ul className="list-disc pl-6 text-gray-400 mb-4"><li>Signatures into leverage</li><li>Math into momentum</li><li>Clarity into change</li><li>One solution into a national standard</li></ul>
            <p className="text-[#3ddc84] text-lg font-bold mt-4">This is what democracy looks like<br />when the people who built it<br />decide to use it.</p>
            <div className="border-y border-[#3ddc84]/30 py-6 my-6 text-center"><p className="text-[#3ddc84] text-xl font-bold italic">"PHIERS is no longer just a model.<br />It is a blueprint for how millions of people<br />can move together — peacefully, measurably,<br />and with undeniable democratic force."</p><span className="text-gray-500 text-xs">— Will Price, PHIERS Founders</span></div>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20" />

        {/* Section 2 - The Math */}
        <div className="py-12 px-6">
          <div className="max-w-[860px] mx-auto">
            <span className="text-[#3ddc84] text-xs font-bold tracking-[2.5px] uppercase">2 — The Math</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Power Is Measurable. Here Are the Numbers.</h2>
            <p className="text-white text-lg font-bold mb-4">Harvard researcher Erica Chenoweth studied 323 political campaigns across 106 years. Her finding:</p>
            <div className="bg-[#ffd60a]/10 border-l-4 border-[#ffd60a] rounded-r-lg p-5 my-6"><p className="text-white text-lg font-bold">No sustained, nonviolent campaign with 3.5% participation has ever failed.</p><p className="text-gray-400">That is 11.6 million people. We are building toward 100 million.</p></div>
            <div className="text-center my-8"><button onClick={() => openModal('/images/The_3_5__Threshold_jpg.png')} className="cursor-pointer"><Image src="/images/The_3_5__Threshold_jpg.png" alt="The 3.5% Threshold" width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border-2 border-[#3ddc84]/30 hover:scale-[1.01] transition-transform" /></button><p className="text-[#3ddc84] text-sm italic mt-2">The 3.5% threshold: 11.6 million organized people. No nonviolent campaign at this scale has ever failed.</p></div>
            <p className="text-gray-400 mb-3">This is not protest math. This is leverage math.</p>
            <p className="text-gray-400 mb-4">When 11.6 million organized people move in the same direction, Congress has two choices:</p>
            <div className="bg-white/5 border border-[#3ddc84]/20 rounded-lg p-4 my-2">✅ Align with the clear will of their constituents</div>
            <div className="bg-white/5 border border-[#3ddc84]/20 rounded-lg p-4 my-2">📢 Or explain publicly — on the record — why they refused</div>
            <p className="text-white font-bold mt-4 mb-4">That accountability is the weapon. That accountability is the point.</p>
            <h3 className="text-white text-xl font-bold mt-6 mb-3">The Cascade</h3>
            <div className="bg-white/5 border border-[#3ddc84]/20 rounded-lg p-4 my-2">💡 One conversion from a $10,000 insurance plan to a $600 telehealth plan frees enough savings to fund <strong className="text-white">12 more people.</strong></div>
            <div className="bg-white/5 border border-[#3ddc84]/20 rounded-lg p-4 my-2">📈 Those 12 fund <strong className="text-white">148.</strong> Those 148 fund <strong className="text-white">1,825.</strong></div>
            <div className="bg-white/5 border border-[#3ddc84]/20 rounded-lg p-4 my-2">🎯 At 3.5% — the cascade becomes self-sustaining.</div>
            <div className="text-center my-8"><button onClick={() => openModal('/images/CASCADE_Ladder.png')} className="cursor-pointer"><Image src="/images/CASCADE_Ladder.png" alt="The Cascade Effect" width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border-2 border-[#3ddc84]/30 hover:scale-[1.01] transition-transform" /></button><p className="text-[#3ddc84] text-sm italic mt-2">One household shifts from $10,000 insurance to $600 telehealth — and the cascade begins.</p></div>
            <div className="text-center mt-6"><Link href="/petition" className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link></div>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20" />

        {/* Section 3 - The Moment */}
        <div className="bg-[#0d1525] py-12 px-6">
          <div className="max-w-[860px] mx-auto">
            <span className="text-[#3ddc84] text-xs font-bold tracking-[2.5px] uppercase">3 — The Moment</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-6">Three Acts. One Story. One Outcome.</h2>
            <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-6 mb-4"><h3 className="text-[#3ddc84] text-lg font-bold mb-2">Act One — 3.5% Before March 28, 2026</h3><p className="text-gray-400">March 28 is the No Kings Rally. If we reach 3.5% before that date, the rally becomes a reckoning — not just a demonstration, but documented, measurable, organized proof that the people are ahead of their government.</p></div>
            <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-6 mb-4"><h3 className="text-[#3ddc84] text-lg font-bold mb-2">Act Two — 100 Million Before July 4, 2026</h3><p className="text-gray-400">July 4, 2026 is the 250th anniversary of America's founding documents. One hundred million signatures is not rebellion. It is patriotism — peaceful, organized, undeniable.</p></div>
            <div className="bg-[#ffd60a]/10 border border-[#ffd60a]/30 rounded-lg p-6"><h3 className="text-[#ffd60a] text-lg font-bold mb-2">⭐ Act Three — November 2026: The Midterm Realignment</h3><p className="text-gray-400">By November 2026, all 435 congressional districts will have candidates seeking PHIERS endorsement — not because of party loyalty, but because the people in their district have spoken.</p></div>
            <div className="text-center mt-6"><Link href="/action" className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all">✊ Take Action</Link></div>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20" />

        {/* Section 4 - The Mission */}
        <div className="py-12 px-6">
          <div className="max-w-[860px] mx-auto">
            <span className="text-[#3ddc84] text-xs font-bold tracking-[2.5px] uppercase">4 — The Mission</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">What We Are Demanding. Specifically.</h2>
            <p className="text-gray-400 mb-3">We are demanding:</p>
            <ul className="list-disc pl-6 text-gray-400 mb-4"><li>Affordable telehealth added to the ACA Exchange</li><li>Access extended to CMS, VA, Tri-Care, and Indian Health Service beneficiaries</li><li>Monthly cost-of-living relief when the cascade reaches critical mass</li><li>Job creation and small business support funded by redirected healthcare savings</li></ul>
            <div className="bg-[#3ddc84]/10 border-l-4 border-[#3ddc84] rounded-r-lg p-5 my-6"><p><strong className="text-white">We are not asking for special treatment.</strong><br />We are asking Congress to adopt a solution that already works — or stand before their constituents and explain, on the record, why they won't.</p></div>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20" />

        {/* Section 5 - The Proof */}
        <div className="bg-[#0d1525] py-12 px-6">
          <div className="max-w-[860px] mx-auto">
            <span className="text-[#3ddc84] text-xs font-bold tracking-[2.5px] uppercase">5 — The Proof</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-6">The Validation That Came Before the Silence</h2>
            <div className="bg-[#ffd60a]/10 border-l-4 border-[#ffd60a] rounded-r-lg p-5 mb-6"><p className="text-white italic">"If you weren't legit, we wouldn't risk putting our name behind yours."</p><p className="text-gray-400">— Pathos Communications, Global PR firm listed on the London Stock Exchange</p></div>
            <div className="border-y border-[#3ddc84]/30 py-6 my-6 text-center"><p className="text-[#3ddc84] text-lg italic font-bold">"Different institution.<br />Same pattern. Same silence.<br />Same discomfort with Black excellence<br />that disrupts the status quo."</p><span className="text-gray-500 text-xs">— Will Price, PHIERS Founders</span></div>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20" />

        {/* Section 6 - The Resistance */}
        <div className="py-12 px-6">
          <div className="max-w-[860px] mx-auto">
            <span className="text-[#3ddc84] text-xs font-bold tracking-[2.5px] uppercase">6 — The Resistance</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">What It Cost. The Record of Endurance.</h2>
            <p className="text-white text-lg font-bold mb-4">Pressure didn't break us. It revealed us.</p>
            <p className="text-gray-400 mb-6">PHIERS was built under sustained pressure — the kind that reveals who people truly are.</p>
            <div className="text-center my-6"><button onClick={() => openModal('/images/Power_Concedes_Nothing_TEETH.png')} className="cursor-pointer"><Image src="/images/Power_Concedes_Nothing_TEETH.png" alt="Power concedes nothing without a demand" width={280} height={200} className="max-w-[280px] h-auto mx-auto rounded-lg border border-[#3ddc84]/30 hover:scale-[1.02] transition-transform" /></button><p className="text-gray-500 text-xs italic mt-2">"Power concedes nothing without a demand." — Frederick Douglass</p></div>
            <div className="text-center my-6"><button onClick={() => openModal('/images/We_Gotz_Teeth_for_No_Kings.jpg')} className="cursor-pointer"><Image src="/images/We_Gotz_Teeth_for_No_Kings.jpg" alt="We've got teeth — no kings" width={280} height={200} className="max-w-[280px] h-auto mx-auto rounded-lg border border-[#3ddc84]/30 hover:scale-[1.02] transition-transform" /></button><p className="text-gray-500 text-xs italic mt-2">We've got teeth. No kings.</p></div>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20" />

        {/* Section 7 - The Invitation */}
        <div className="bg-[#0d1525] py-12 px-6">
          <div className="max-w-[860px] mx-auto">
            <span className="text-[#3ddc84] text-xs font-bold tracking-[2.5px] uppercase">7 — The Invitation</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-6">Your Role. Right Now.</h2>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 mb-4"><h3 className="text-[#3ddc84] text-lg font-bold mb-2">Supporters — share and sign</h3><ul className="list-disc pl-6 text-gray-400"><li>Sign the petition and complete the survey</li><li>Share PHIERS with people you trust</li></ul></div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 mb-4"><h3 className="text-[#3ddc84] text-lg font-bold mb-2">Volunteers — organize locally</h3><ul className="list-disc pl-6 text-gray-400"><li>Lead signature drives in your community</li><li>Help manage online channels and social sharing</li></ul></div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 mb-6"><h3 className="text-[#3ddc84] text-lg font-bold mb-2">Organizers — build district teams</h3><ul className="list-disc pl-6 text-gray-400"><li>Coordinate district-level efforts toward 1,500 verified signatures</li><li>Train volunteers and build local teams</li></ul></div>
            <div className="text-center"><Link href="/petition" className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all mr-3">✍ Sign the Petition</Link><Link href="/donate" className="inline-block px-6 py-4 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-semibold hover:bg-[#3ddc84]/10 transition-all">Support the Work</Link></div>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20" />

        {/* Section 8 - The Declaration */}
        <div className="py-12 px-6">
          <div className="max-w-[860px] mx-auto">
            <span className="text-[#3ddc84] text-xs font-bold tracking-[2.5px] uppercase">8 — The Declaration</span>
            <div className="border-y border-[#3ddc84]/30 py-6 my-6 text-center"><p className="text-[#3ddc84] text-xl font-bold italic">"PHIERS is the blueprint.<br />The movement is the engine.<br />And when enough of us move together,<br />we are unstoppable."</p><span className="text-gray-500 text-xs">— Will Price, PHIERS Founders</span></div>
            <div className="text-center my-8"><button onClick={() => openModal('/images/100Mil_Americans_jpg.png')} className="cursor-pointer"><Image src="/images/100Mil_Americans_jpg.png" alt="100 Million Americans" width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border-2 border-[#3ddc84]/30 hover:scale-[1.01] transition-transform" /></button><p className="text-[#3ddc84] text-sm italic mt-2">100 million Americans.<br />July 4, 2026.<br />The destination.</p></div>
            <div className="text-center my-8"><Link href="/action" className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all">✊ Make Your Voice Count</Link><div className="mt-4"><Link href="/petition" className="inline-block px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-semibold hover:bg-[#3ddc84]/10 transition-all mr-2">✍ Sign the Petition</Link><a href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-semibold hover:bg-[#3ddc84]/10 transition-all">📊 Take the Survey</a></div></div>
            <div className="text-center pt-8 mt-8 border-t border-[#3ddc84]/20"><Link href="/unbreakable" className="text-[#3ddc84] font-bold text-lg hover:underline">Read UNBREAKABLE: The Solution They Couldn't Stop →</Link></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-12 px-6 border-t border-[#3ddc84]/10 bg-[#0d1525]">
        <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-70" />
        <div className="font-condensed font-bold text-gray-400 mb-1">PHIERS is a people's movement — not a company, not a product.</div>
        <div className="text-sm text-gray-500 mb-4">Built by regular people who are done waiting.</div>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-6">
          <Link href="/crisis" className="text-gray-500 text-sm hover:text-[#3ddc84]">The Crisis</Link>
          <Link href="/simple-math" className="text-gray-500 text-sm hover:text-[#3ddc84]">Simple Math</Link>
          <Link href="/solutions" className="text-gray-500 text-sm hover:text-[#3ddc84]">5D Solutions</Link>
          <Link href="/telecare" className="text-gray-500 text-sm hover:text-[#3ddc84]">Telehealth</Link>
          <Link href="/no-war" className="text-gray-500 text-sm hover:text-[#3ddc84]">No War / No Draft</Link>
          <Link href="/organizers" className="text-gray-500 text-sm hover:text-[#3ddc84]">Organizers</Link>
          <Link href="/unions" className="text-gray-500 text-sm hover:text-[#3ddc84]">Unions</Link>
          <Link href="/donate" className="text-gray-500 text-sm hover:text-[#3ddc84]">Donate</Link>
          <Link href="/faq" className="text-gray-500 text-sm hover:text-[#3ddc84]">FAQ</Link>
          <Link href="/about" className="text-gray-500 text-sm hover:text-[#3ddc84]">About</Link>
        </div>
        <div className="text-xs text-gray-600">
          Not built for profit. Not built for power. Built for We the People — by people who refused to stop.<br />
          📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a> · 📞 (916) 306-8967<br />
          © PHIERS.org — Original Concept Since 2009. All Rights Reserved.<br />
          <span className="text-[0.7rem]">PHIERS™ · PHIERSale™ · PHIERWorks™ · PHIERPlace™ — Protected marks established 2009–2025.</span>
        </div>
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>

      {/* Image Modal */}
      <AnimatePresence>
        {imageModalOpen && (
          <motion.div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <button className="absolute top-5 right-7 text-white text-3xl cursor-pointer bg-black/50 border border-white/20 w-10 h-10 rounded-full" onClick={closeModal}>✕</button>
            <img src={modalImageSrc} alt="" className="max-w-[92vw] max-h-[82vh] rounded-lg border-2 border-[#3ddc84]" />
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
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-condensed { font-family: 'Barlow Condensed', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }
        details summary { list-style: none; }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  )
}
