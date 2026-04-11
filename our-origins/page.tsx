// app/our-origins/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function OurOriginsPage() {
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

      <main className="pt-20 pb-16 max-w-[900px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4"><Link href="/"><Image src="/images/PHIERS_Logo.png" alt="PHIERS Logo" width={90} height={90} className="opacity-90" /></Link></div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#3ddc84] mb-3">Our Origins: The Full Story</h1>
          <p className="font-condensed text-white text-lg mt-2">PHIERS means Power Held In Every Representative's Seat.</p>
          <p className="text-gray-400 text-sm mt-1">Not a slogan. A solution. Something real.</p>
          <p className="text-[#3ddc84] text-base mt-3">Making America Better And Healthier</p>
        </div>

        {/* Intelligent Glue */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-6">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">⚡ We Are "Intelligent Glue" — Not Another Healthcare Startup</h2>
          <p className="text-gray-300 mb-4">PHIERS isn't here to compete with ZORTT, Mark Cuban's Cost Plus Drugs, or anyone else building healthcare solutions.</p>
          <div className="bg-[#3ddc84]/10 border-2 border-[#3ddc84] rounded-lg p-5 text-center"><p className="text-white text-lg font-bold">We're the connective infrastructure that makes existing solutions work better together.</p></div>
          <p className="text-white font-bold mt-5">What "Intelligent Glue" means:</p>
          <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1"><li>We connect telehealth platforms → more patients reach them</li><li>We amplify Cost Plus Drugs → 234M people get their pricing</li><li>We organize worker power → unions get healthcare leverage</li><li>We build political pressure → Congress forced to implement solutions</li><li>We create economic cascade → savings fund jobs, UBI, and universal coverage</li></ul>
          <p className="text-[#3ddc84] font-bold mt-5">Everything we build is 100% owned, operated by, and accountable to We the People — not corporations, not shareholders, not founders.</p>
        </div>

        {/* 16 Years Journey */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-6">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">🔍 16 Years of Pioneering (2009-2025)</h2>
          <h3 className="font-condensed text-lg text-[#3ddc84] mt-3 mb-2">The Beginning</h3><p className="text-gray-300 mb-2">The name came later — once the system was clear.</p><p className="text-gray-300 mb-3">PHIERS — Power Held In Every Representative's Seat — is what the system became.</p><p className="text-gray-300 mb-3">PHIERS emerged from a real crisis: healthcare workers without access to healthcare. Al Wilson and Bill Wiggins founded SureSafe Pharma (2007), pioneering pharmaceutical distribution WITHOUT markups or middlemen. This wasn't theoretical — it proved cost reduction works at scale.</p>
          <h3 className="font-condensed text-lg text-[#3ddc84] mt-4 mb-2">The Threats & Pivots</h3><p className="text-gray-300 mb-3">We faced opposition. Legal threats from established pharmaceutical interests. Market disruptions from the Panama Free Trade Agreement (signed 2007, implemented 2012). Blacklisting. Sabotage. We had to pause, reassess, and wait for the right moment.</p>
          <p className="text-white font-bold mb-2">Why we waited 16 years:</p><p className="text-gray-300 mb-3">Timing matters. We could have launched in 2015. But:</p><ul className="list-disc pl-5 text-gray-300 mb-3"><li>Congress didn't recognize healthcare as a national crisis yet</li><li>Telehealth wasn't proven or accessible</li><li>No one had validated our pharmaceutical model</li><li>The political moment hadn't arrived</li></ul>
          <h3 className="font-condensed text-lg text-[#3ddc84] mt-4 mb-2">What Happened While We Waited</h3><p className="text-gray-300 mb-2">Others succeeded with concepts we pioneered — and we celebrated them:</p><ul className="list-disc pl-5 text-gray-300 mb-3"><li><strong className="text-white">Mark Cuban (2022):</strong> Cost Plus Drugs validates our pharmaceutical model. 7 million customers. 80-90% savings.</li><li><strong className="text-white">ZORTT Elite Medical:</strong> Cooperative telemedicine marketplace proves our delivery model works.</li><li><strong className="text-white">Telehealth expansion:</strong> Became mainstream during COVID, proving our vision correct.</li></ul>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84] rounded-lg p-5"><p className="text-white font-bold">These weren't competitors. They were PROOF our concepts worked.</p><p className="text-gray-300 mt-2">We're not upset about that — we're grateful. Their success validates 16 years of work and gives us the foundation to build on.</p></div>
        </div>

        {/* Honoring Partners */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-6">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">🤝 How We Honor Our Partners</h2>
          <h3 className="font-condensed text-lg text-[#3ddc84] mt-3 mb-2">ZORTT (Healthcare Innovation Leaders)</h3><p className="text-gray-300 mb-3">ZORTT pioneered cooperative healthcare delivery. We don't compete — we amplify their reach by funneling members to their platform through our cooperative structure.</p>
          <h3 className="font-condensed text-lg text-[#3ddc84] mt-4 mb-2">Mark Cuban & Cost Plus Drugs</h3><p className="text-gray-300 mb-3">Mark proved pharmaceutical cost reduction works in practice. We integrate his model into a federal system covering 234 million people. His work becomes the RX backbone of PHIERS.</p>
          <h3 className="font-condensed text-lg text-[#3ddc84] mt-4 mb-2">Al Wilson & The Co-Architecture</h3><p className="text-gray-300 mb-3">Al originated the pharmaceutical cost-reduction model 16 years ago. He proved it works. He fought through every threat and pivot. PHIERS succeeds because Al's vision stood the test of time.</p>
          <h3 className="font-condensed text-lg text-[#3ddc84] mt-4 mb-2">Congressional Partners</h3><p className="text-gray-300">When Congress implements PHIERS, they become the partners who deliver healthcare to 234 million Americans. We're not replacing them — we're giving them the framework to finally solve the crisis.</p>
        </div>

        {/* Why Now */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-6">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">🔥 Why Now (February 2025)</h2>
          <p className="text-white font-bold mb-3">Everything is aligned:</p>
          <ul className="list-disc pl-5 text-gray-300 mb-4 space-y-1"><li><strong className="text-white">Congress recognizes the crisis:</strong> Healthcare spending is unsustainable, 22M losing coverage</li><li><strong className="text-white">Proof points exist:</strong> Telehealth works. Cost Plus Drugs works. Cooperative models scale.</li><li><strong className="text-white">Workers are demanding it:</strong> Union strikes demand healthcare + wages + dignity (PHIERS delivers all three)</li><li><strong className="text-white">The math is irrefutable:</strong> $2.73 trillion in annual savings too big to ignore</li><li><strong className="text-white">Political leverage:</strong> March 28, 2026 — we control the narrative with 3.5% organized</li><li><strong className="text-white">Democratic power mobilizing:</strong> 16M+ union workers. 50M+ union voters. 100M+ affected by healthcare crisis.</li></ul>
          <div className="bg-[#3ddc84]/10 border-2 border-[#3ddc84] rounded-lg p-5 text-center"><p className="text-white text-xl font-bold">We waited because timing matters. The time is now.</p></div>
        </div>

        {/* The Power of 3.5% */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-6">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">💪 The Power of 3.5%: Democratic Leverage</h2>
          <p className="text-gray-300 mb-4">Harvard researcher Erica Chenoweth analyzed 323 social movements and found one undeniable truth:</p>
          <div className="bg-[#3ddc84]/10 border-2 border-[#3ddc84] rounded-lg p-5 text-center"><p className="text-white text-lg font-bold">When 3.5% of the population is actively organized, systemic change becomes mathematically inevitable.</p></div>
          <p className="text-gray-300 mt-4">That's 11.6 million Americans. We have 100M+ affected by healthcare crisis. <strong className="text-white">We exceed the 3.5% threshold by 9x.</strong></p>
          <p className="text-gray-300 mt-2">This isn't about begging Congress. It's about <strong className="text-white">forcing them</strong> through organized constituent power. That's what democracy looks like when it actually works.</p>
        </div>

        {/* Movement Not Startup */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-6">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">⚔️ Movement, Not Startup</h2>
          <p className="text-gray-300 mb-3">PHIERS isn't a company trying to make a profit. It's a movement building democratic power to force systemic change.</p>
          <p className="text-gray-300 mb-3"><strong className="text-white">We're funded by solidarity, not venture capital.</strong> Our success is measured in laws passed, not valuations. Our competitors are the forces resisting change, not healthcare innovators.</p>
          <div className="bg-[#3ddc84]/10 border-2 border-[#3ddc84] rounded-lg p-5"><p className="text-white font-bold">When Congress implements PHIERS, we win.</p><p className="text-gray-300 mt-2">When workers get healthcare, we win.</p><p className="text-gray-300 mt-2">When the savings cascade reaches every American, we win.</p></div>
          <p className="text-gray-300 mt-4">That's why we honor our partners instead of competing with them. That's why we waited 16 years. That's why now is the moment.</p>
        </div>

        {/* Origins Image */}
        <div className="text-center my-8">
          <button onClick={() => openModal('/images/healthcarereformorig.jpg')} className="cursor-pointer">
            <Image src="/images/healthcarereformorig.jpg" alt="The origins of healthcare reform in America" width={400} height={300} className="max-w-[50%] h-auto mx-auto rounded-lg border border-[#3ddc84]/30 hover:scale-[1.01] transition-transform" />
          </button>
          <p className="text-[#3ddc84] text-sm italic mt-2">The long road to healthcare reform — and why PHIERS is different</p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-[#3ddc84]/20 to-[#3ddc84]/10 border-l-4 border-[#3ddc84] rounded-r-lg p-8 text-center my-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4 border-none">Join the Movement</h2>
          <p className="text-white text-lg mb-4">16 years of preparation. The moment has arrived. The power is ours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://forms.gle/euJkZxjUserFVCPK8" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold rounded-lg hover:bg-[#34c474] transition-all">⚡ JOIN FIRST WAVE</a>
            <Link href="/" className="px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">Back to Homepage</Link>
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
          PHIERS is a public-interest movement — not a company, not a product. The only thing missing is you.<br />
          📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a> · 📞 (916) 306-8967<br />
          © PHIERS.org — Original Concept Since 2009
        </div>
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>

      {/* Image Modal */}
      <AnimatePresence>
        {imageModalOpen && (
          <motion.div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <button className="absolute top-5 right-7 text-white text-3xl cursor-pointer bg-black/50 border border-white/20 w-10 h-10 rounded-full" onClick={closeModal}>✕</button>
            <img src={modalImageSrc} alt="" className="max-w-[90vw] max-h-[90vh] rounded-lg border-2 border-[#3ddc84]" />
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
