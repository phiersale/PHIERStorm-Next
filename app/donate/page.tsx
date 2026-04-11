// app/donate/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function DonatePage() {
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

      <main className="pt-20 pb-16 max-w-[880px] mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="opacity-85" /></div>
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Fuel the Movement</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-4">Your Dollar Is <span className="text-[#3ddc84]">Leverage.</span></h1>
          <p className="text-gray-400 text-lg max-w-[700px] mx-auto">A movement funded by the people belongs to the people. One dollar from a million people is a million dollars.</p>

          {/* Urgency Banner */}
          <div className="bg-red-500/10 border-l-4 border-red-500 rounded-r-lg p-6 my-8 text-left">
            <p className="text-white font-bold mb-2">CRITICAL WINDOW: Build Leverage Before March 28 No Kings Rally</p>
            <p className="text-gray-300">Every dollar strengthens the organized, district-level pressure that gives the March 28 No Kings rally real TEETH — transforming it from symbolic gathering into a force Congress cannot ignore.</p>
            <p className="text-[#3ddc84] font-bold mt-3">Your support helps millions stand together with power, not just presence.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Donation Methods */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-4">Donate <span className="text-[#3ddc84]">Now</span></h2>
          <p className="text-center text-gray-400 mb-8">Every dollar builds leverage before March 28.</p>

          {/* Venmo */}
          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-6 mb-6">
            <div className="font-display text-2xl text-[#3ddc84] mb-2">Venmo</div>
            <p className="text-white font-bold mb-3">@Will4PHIERS</p>
            <div className="flex justify-center">
              <button onClick={() => openModal('/images/Venmo.png')} className="cursor-pointer">
                <Image src="/images/Venmo.png" alt="Venmo QR Code" width={180} height={180} className="rounded-lg border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" />
              </button>
            </div>
          </div>

          {/* PayPal */}
          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-6 mb-6">
            <div className="font-display text-2xl text-[#3ddc84] mb-2">PayPal</div>
            <p className="text-white font-bold mb-3"><a href="mailto:will@phiers.org" className="text-white hover:text-[#3ddc84]">will@phiers.org</a></p>
            <div className="flex justify-center">
              <button onClick={() => openModal('/images/PayPal.png')} className="cursor-pointer">
                <Image src="/images/PayPal.png" alt="PayPal QR Code" width={180} height={180} className="rounded-lg border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" />
              </button>
            </div>
          </div>

          {/* Zelle */}
          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-6 mb-6">
            <div className="font-display text-2xl text-[#3ddc84] mb-2">Zelle</div>
            <p className="text-white font-bold mb-3">(301) 919-0970</p>
            <div className="flex justify-center">
              <button onClick={() => openModal('/images/Zelle.png')} className="cursor-pointer">
                <Image src="/images/Zelle.png" alt="Zelle QR Code" width={180} height={180} className="rounded-lg border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" />
              </button>
            </div>
          </div>

          {/* GoFundMe */}
          <div className="text-center mt-8">
            <a href="https://www.gofundme.com/f/homeless-but-hopeful-affordable-healthcare-good-jobs-ubi" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">GoFundMe Campaign →</a>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Other Ways to Build Leverage */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-4">Can't Donate? <span className="text-[#3ddc84]">Other Ways to Build Leverage</span></h2>
          <p className="text-center text-gray-400 mb-8">Can't contribute financially right now? You can still build leverage before March 28:</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/petition" className="px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold rounded-lg hover:bg-[#34c474] transition-all">📋 Fill Survey</a>
            <Link href="/action" className="px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">See All Actions</Link>
          </div>

          <p className="text-center text-gray-400 mb-6">Every signature, every survey response, every share builds the 3.5% threshold that forces change.</p>

          {/* Forward to Chapter */}
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-6 text-center">
            <p className="font-condensed text-gray-400 mb-4">Part of an Indivisible chapter or local group? Forward this site to them.</p>
            <a href="mailto:?subject=A%20solution%20your%20chapter%20needs%20to%20see%20%E2%80%94%20PHIERS.org&body=Hi%2C%0A%0AI%20just%20signed%20the%20PHIERS%20petition%20and%20wanted%20to%20share%20it%20with%20your%20chapter.%0A%0APHIERS%20is%20organizing%20Americans%20district%20by%20district%20around%20one%20clear%20demand%20%E2%80%94%20%24600%20telehealth%20through%20the%20ACA%20Exchange%20%E2%80%94%20saving%20%242.7%20trillion%20and%20covering%20234%20million%20Americans.%20The%20same%20organized%20leverage%20ends%20the%20unauthorized%20wars%20and%20stops%20the%20draft.%0A%0A1%2C500%20signatures%20in%20a%20district%20triggers%20a%20mandatory%20town%20hall.%20July%204%2C%202026%20is%20our%20north%20star.%0A%0ALearn%20more%20and%20sign%3A%20https%3A//phiers.org%0A%0AThis%20is%20the%20teeth%20behind%20every%20demand%20being%20made%20in%20the%20streets.%20Worth%20sharing%20with%20your%20members." className="inline-block px-7 py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold rounded-lg hover:bg-[#34c474] transition-all">✉ Forward to Your Chapter →</a>
            <p className="font-condensed text-gray-500 text-xs mt-3">Opens a pre-written email — you decide whether to send it.</p>
          </div>
        </div>

        {/* Page Navigation */}
        <div className="flex justify-between pt-8 mt-8 border-t border-[#3ddc84]/20">
          <Link href="/action" className="font-condensed font-bold text-[#3ddc84]">← Back to Take Action</Link>
          <Link href="/resources" className="font-condensed font-bold text-[#3ddc84]">Resource Hub →</Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-12 px-6 border-t border-[#3ddc84]/10 bg-[#0d1525]">
        <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-70" />
        <div className="font-condensed font-bold text-gray-400 mb-1">PHIERS is a people's movement — not a company, not a product.</div>
        <div className="text-sm text-gray-500 mb-4">Built by regular people who are done waiting.</div>
        <div className="max-w-[500px] mx-auto mb-6">
          <p className="font-condensed text-gray-400">Energy without power fails.<br />PHIERStorm is the power.<br /><span className="text-gray-500">PHIERS.org — a catalyst for the change we've been waiting for.</span><br /><span className="text-gray-500">The only thing missing is you.</span></p>
        </div>
        <div className="max-w-[560px] mx-auto p-5 border border-[#3ddc84]/15 rounded-lg mb-6">
          <p className="font-condensed text-gray-500 text-xs uppercase tracking-wide mb-2">Built by</p>
          <p className="font-condensed font-bold text-white">Will Price | Founder &amp; Chief Solutions Architect</p>
          <p className="font-condensed text-gray-400 text-sm mb-3">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending and built the lever to fix it. Building this since 2009.</p>
          <button onClick={() => setWillModalOpen(true)} className="font-condensed text-[#3ddc84] text-sm border-b border-[#3ddc84]/30">👤 Meet the Architect →</button>
        </div>
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
