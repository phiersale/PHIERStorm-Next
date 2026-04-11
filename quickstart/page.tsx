// app/quickstart/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function QuickstartPage() {
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
          <div className="flex justify-center mb-4"><Link href="/"><Image src="/images/PHIERS_Logo.png" alt="PHIERS Logo" width={100} height={100} className="opacity-90" /></Link></div>
          <h1 className="font-display text-3xl md:text-4xl text-[#3ddc84] mb-3">Quick Start: 30 Seconds to Understand</h1>
          <p className="text-gray-400 text-lg mb-3">New here? This is everything you need to know in under a minute.</p>
          <div className="inline-block bg-gradient-to-r from-[#3ddc84] to-[#2e7d32] text-white px-5 py-2 rounded-full text-sm font-bold">30 seconds to join. 90 days to win.</div>
          <p className="text-white text-lg mt-5">This isn't a protest — it's a cooperative intelligence project.</p>
        </div>

        {/* Video Section */}
        <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-6 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-blue-400 text-center mb-4">Learn in 71 Seconds</h2>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/jMU6LKEBzbs" title="The Math Congress Fears — PHIERS Explainer" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
          </div>
          <p className="text-center text-blue-400 font-bold mt-4">1 minute 11 seconds. This is why they're terrified.</p>
        </div>

        {/* Core Math Image */}
        <div className="text-center my-8">
          <button onClick={() => openModal('/images/CORE_MATH_for_234M.png')} className="cursor-pointer">
            <Image src="/images/CORE_MATH_for_234M.png" alt="THE CORE MATH - How $600 telehealth unlocks 234 million covered" width={600} height={400} className="max-w-full h-auto mx-auto rounded-lg border-2 border-[#3ddc84]/30 hover:scale-[1.01] transition-transform" />
          </button>
          <p className="text-gray-500 text-sm italic mt-2">The Complete Story in One Image — Click to expand</p>
        </div>

        {/* Why $600 Telehealth Beats $10K Insurance */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">Why $600 Telehealth Beats $10K Insurance</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-red-500/10 border-2 border-red-500/30 rounded-lg p-5"><h3 className="font-condensed text-xl text-red-400 mb-3">Status Quo Insurance ($10K)</h3><ul className="space-y-2 text-red-200 list-disc pl-4"><li>Delays care (prior authorization)</li><li>Denies coverage (claim rejections)</li><li>Limited network access</li><li>High out-of-pocket costs</li></ul></div>
            <div className="bg-[#3ddc84]/10 border-2 border-[#3ddc84] rounded-lg p-5"><h3 className="font-condensed text-xl text-[#3ddc84] mb-3">PHIERS Telehealth ($600)</h3><ul className="space-y-2 text-green-200 list-disc pl-4"><li>Instant access (no wait times)</li><li>Zero denials (direct care)</li><li>Anywhere, anytime coverage</li><li>Minimal out-of-pocket costs</li></ul></div>
          </div>
          <div className="bg-[#3ddc84]/15 p-4 rounded-lg"><p className="text-white"><strong className="text-[#3ddc84]">Important:</strong> Telehealth isn't a replacement for insurance — it completes what insurance leaves undone. For the 80% who don't need hospitalization, $600/year telehealth provides the care they need.</p></div>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84] rounded-lg p-5 mt-5 text-center"><p className="text-white text-lg font-bold mb-3">If Congress authorizes telehealth through the ACA, one conversion funds 12 more. Those 12 fund 148.</p><p className="text-[#3ddc84] text-xl font-bold">Exponential. Unstoppable. Universal healthcare in 90 days to critical mass.</p></div>
        </div>

        {/* Universal Care is PAID FOR */}
        <div className="bg-[#3ddc84]/10 border-2 border-[#3ddc84] rounded-lg p-6 my-8 text-center">
          <p className="text-white text-lg font-bold mb-3">Universal care is PAID FOR: Free for those who can't pay. $600/year for those who can.</p>
          <p className="text-gray-300">Government savings from efficient telehealth cover everyone who can't afford it. Those who can pay $600/year help fund the system. Everyone covered. No one left behind.</p>
        </div>

        {/* Prescription Drug Strategy */}
        <div className="bg-[#3ddc84]/10 border-l-4 border-[#3ddc84] rounded-r-lg p-6 my-8"><h3 className="font-condensed text-xl text-[#3ddc84] mb-2">Prescription Drug Strategy</h3><p className="text-gray-300">Safer, more effective, and cheaper alternatives to specialty and blockbuster drugs exist. PHIERS will raise awareness about these alternatives and purchase them in collaboration with <strong className="text-white">Mark Cuban's Cost Plus Drugs</strong>, which is guaranteed to generate the savings needed to pay Medicare, Medicaid, and the VA to provide coverage for all.</p></div>

        {/* Get Started in 3 Steps */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">Get Started in 3 Steps</h2>
          <div className="space-y-5"><div className="border border-[#3ddc84]/30 rounded-lg p-5"><div className="inline-block w-8 h-8 bg-[#3ddc84] text-[#080d1a] rounded-full text-center leading-8 font-bold mr-2">1</div><h3 className="inline font-condensed text-lg text-[#3ddc84]">Sign the Petition (30 seconds)</h3><p className="text-gray-300 mt-3 ml-10">Add your name to force Congress to hold mandatory town halls. 1,500 signatures per district = they must face you.</p><div className="mt-4 ml-10"><Link href="/petition" className="inline-block px-5 py-2 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link></div></div><div className="border border-[#3ddc84]/30 rounded-lg p-5"><div className="inline-block w-8 h-8 bg-[#3ddc84] text-[#080d1a] rounded-full text-center leading-8 font-bold mr-2">2</div><h3 className="inline font-condensed text-lg text-[#3ddc84]">Share the Cascade (2 minutes)</h3><p className="text-gray-300 mt-3 ml-10">Every share reaches 10-100 more people. Each person who signs multiplies the pressure. This is exponential leverage.</p></div><div className="border border-[#3ddc84]/30 rounded-lg p-5"><div className="inline-block w-8 h-8 bg-[#3ddc84] text-[#080d1a] rounded-full text-center leading-8 font-bold mr-2">3</div><h3 className="inline font-condensed text-lg text-[#3ddc84]">Watch It Spread (Exponential)</h3><p className="text-gray-300 mt-3 ml-10">1 person → 12 people → 148 people → millions. The cascade can't be stopped once it starts. That's the power of mechanical leverage.</p></div></div>
        </div>

        {/* The Math That Makes It Work */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">The Math That Makes It Work</h2>
          <div className="text-center my-6"><button onClick={() => openModal('/images/PHIERS_Cascade_Leverage_Visual_v1.png')} className="cursor-pointer"><Image src="/images/PHIERS_Cascade_Leverage_Visual_v1.png" alt="PHIERS Cascade Leverage Visual" width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border-2 border-[#3ddc84]/30 hover:scale-[1.01] transition-transform" /></button><p className="text-gray-500 text-sm italic mt-2">This is how the system works when we connect the pieces — Click for full breakdown</p></div>
          <p className="text-center text-[#3ddc84] text-base my-4">The math that makes universal coverage inevitable:</p>
          <div className="text-center my-6"><button onClick={() => openModal('/images/SIMPLE_MATH_Pyramid_Universal_Coverage.png')} className="cursor-pointer"><Image src="/images/SIMPLE_MATH_Pyramid_Universal_Coverage.png" alt="Universal Coverage Pyramid" width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border-2 border-[#3ddc84]/30 hover:scale-[1.01] transition-transform" /></button><p className="text-gray-500 text-sm italic mt-2">Medicaid → Medicare → ACA → 234M Americans Covered — Click to see the progression</p></div>
          <p className="text-center text-gray-300 text-base">These programs already exist — and <strong className="text-white">when we connect them</strong>, they cover everyone.</p>
        </div>

        {/* Final CTA */}
        <div className="bg-[#3ddc84]/10 border-2 border-[#3ddc84] rounded-xl p-8 text-center my-10">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-3">Want to understand the full 5D leverage mechanism?</h2>
          <p className="text-gray-300 text-lg mb-6">Ready to see how healthcare unlocks jobs, economy, politics, and peace?</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/solutions" className="px-6 py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold rounded-lg hover:bg-[#34c474] transition-all">See 5D Solutions</Link><Link href="/overview#how-it-works" className="px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">How It Works</Link><Link href="/crisis" className="px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">The Crisis</Link></div>
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
          PHIERS is a public-interest movement - not a company, not a product. The only thing missing is you.<br />
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
