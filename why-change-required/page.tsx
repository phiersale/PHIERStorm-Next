// app/why-change-required/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhyChangeRequiredPage() {
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

      <main className="pt-20 pb-16 max-w-[880px] mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="opacity-85" /></div>
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Case for Systemic Replacement</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-4">Why Change <span className="text-red-500">Is Required</span></h1>
          <p className="text-gray-400 text-lg max-w-[700px] mx-auto">The system isn't "broken." It's working exactly as designed — and that design is failing us.</p>
          <div className="mt-6">
            <button onClick={() => openModal('/images/Opportunity_Knocks_.png')} className="cursor-pointer">
              <Image src="/images/Opportunity_Knocks_.png" alt="Opportunity Knocks" width={400} height={300} className="max-w-[60%] h-auto mx-auto rounded-lg border border-[#3ddc84]/30 hover:scale-[1.02] transition-transform" />
            </button>
            <p className="text-gray-500 text-xs italic mt-2">Click to enlarge</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Systemic Design Failure */}
        <div className="mb-8">
          <p className="text-gray-300 text-lg mb-4">America isn't suffering from a series of isolated crises. We're suffering from a systemic design failure — a structure that produces:</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 my-6">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center text-sm">Unaffordable care</div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center text-sm">Unstable incomes</div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center text-sm">Disappearing jobs</div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center text-sm">Rising authoritarian risk</div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center text-sm">Political paralysis</div>
          </div>
          <p className="text-gray-300 mb-4">...not by accident, but by <strong className="text-white">architecture</strong>.</p>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/30 border-l-4 border-l-[#3ddc84] rounded-r-lg p-6">
            <p className="text-white text-lg font-bold">This movement exists because the old design can't be patched anymore. It must be replaced — intelligently, peacefully, and at scale.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Congress Has the Power */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Truth: <span className="text-[#3ddc84]">Congress Has the Power.</span> They Just Refuse to Use It.</h2>
          <p className="text-gray-300 mb-4">Every crisis we're living through — healthcare, economic instability, job insecurity, political division — is solvable with the authority Congress already has.</p>
          <p className="text-white font-bold mb-3">They could:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#111d35] rounded-lg p-4">
              <ul className="space-y-2 text-gray-300 list-none">
                <li className="before:content-['▸'] before:text-[#3ddc84] before:mr-2">Authorize universal telehealth</li>
                <li className="before:content-['▸'] before:text-[#3ddc84] before:mr-2">Lower costs overnight</li>
                <li className="before:content-['▸'] before:text-[#3ddc84] before:mr-2">Redirect waste into UBI</li>
              </ul>
            </div>
            <div className="bg-[#111d35] rounded-lg p-4">
              <ul className="space-y-2 text-gray-300 list-none">
                <li className="before:content-['▸'] before:text-[#3ddc84] before:mr-2">Stabilize people</li>
                <li className="before:content-['▸'] before:text-[#3ddc84] before:mr-2">Create millions of jobs</li>
                <li className="before:content-['▸'] before:text-[#3ddc84] before:mr-2">Protect democracy</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-500/10 border-l-4 border-red-500 rounded-r-lg p-5 text-center my-5">
            <p className="text-white text-xl font-bold">They simply choose not to.</p>
            <p className="text-gray-300 mt-3">Not because it's impossible. But because the current system rewards inaction.</p>
          </div>
          <p className="text-[#3ddc84] font-bold text-center text-2xl">That's why change is required.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* December Failure */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">When Congress Failed in December <span className="text-red-500">Wasn't the Cause — It Was the Reveal</span></h2>
          <p className="text-gray-300 mb-3">When Congress let healthcare subsidies expire in December, it didn't "cause" the crisis. It <strong className="text-white">exposed</strong> it.</p>
          <p className="text-gray-300 mb-3">It showed the country that:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>The safety net is fragile</li>
            <li>The system is reactive, not proactive</li>
            <li>Millions can lose care overnight</li>
            <li>Political incentives don't align with human needs</li>
          </ul>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/30 border-l-4 border-l-[#3ddc84] rounded-r-lg p-5">
            <p className="text-gray-300">The December failure was the moment the mask slipped. The crisis we're solving is the one unfolding now.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* One-Dimensional Government */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Real Problem: <span className="text-red-500">A One-Dimensional Government</span> in a Multi-Dimensional World</h2>
          <p className="text-gray-300 mb-3">Congress still tries to solve 2026 problems with 1950 tools:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>One bill for one issue</li>
            <li>One committee for one crisis</li>
            <li>One hearing for one symptom</li>
          </ul>
          <p className="text-gray-300 mb-3"><strong className="text-white">But our crises are interconnected:</strong></p>
          <div className="grid grid-cols-2 gap-2 my-4">
            <div className="bg-[#111d35] p-3 rounded-md text-center text-sm">Healthcare affects income</div>
            <div className="bg-[#111d35] p-3 rounded-md text-center text-sm">Income affects jobs</div>
            <div className="bg-[#111d35] p-3 rounded-md text-center text-sm">Jobs affect stability</div>
            <div className="bg-[#111d35] p-3 rounded-md text-center text-sm">Stability affects democracy</div>
            <div className="bg-[#111d35] p-3 rounded-md text-center text-sm col-span-2">Democracy affects healthcare</div>
          </div>
          <div className="bg-red-500/10 border-l-4 border-red-500 rounded-r-lg p-5 text-center">
            <p className="text-white text-xl font-bold">You can't fix a 5-dimensional problem with a 1-dimensional mindset.</p>
          </div>
          <p className="text-[#3ddc84] font-bold text-center text-2xl mt-5">That's why change is required.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* 5D Problem-Solving */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Solution: <span className="text-[#3ddc84]">5D Problem-Solving</span></h2>
          <p className="text-gray-300 mb-3">5D Solutions work because they:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#111d35] rounded-lg p-4">
              <ul className="space-y-2 text-gray-300 list-none">
                <li className="before:content-['▸'] before:text-[#3ddc84] before:mr-2">Solve multiple problems at once</li>
                <li className="before:content-['▸'] before:text-[#3ddc84] before:mr-2">Reinforce each other</li>
                <li className="before:content-['▸'] before:text-[#3ddc84] before:mr-2">Use minimum wasted motion</li>
              </ul>
            </div>
            <div className="bg-[#111d35] rounded-lg p-4">
              <ul className="space-y-2 text-gray-300 list-none">
                <li className="before:content-['▸'] before:text-[#3ddc84] before:mr-2">Redirect existing resources</li>
                <li className="before:content-['▸'] before:text-[#3ddc84] before:mr-2">Stabilize the system from the inside out</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/30 border-l-4 border-l-[#3ddc84] rounded-r-lg p-5">
            <p className="text-white text-lg font-bold">This is not a wishlist. This is a systems upgrade.</p>
          </div>
          <p className="text-gray-300 mt-4">And it starts with the first domino: <strong className="text-white">universal telehealth authorization</strong>.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Can't Wait for Politics as Usual */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why We Can't Wait for <span className="text-red-500">"Politics as Usual"</span></h2>
          <p className="text-gray-300 mb-3">The old political cycle is too slow:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Years of hearings</li>
            <li>Years of gridlock</li>
            <li>Years of delay</li>
            <li>Years of suffering</li>
          </ul>
          <p className="text-gray-300 mb-3"><strong className="text-white">Meanwhile:</strong></p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#111d35] rounded-lg p-3 text-center text-sm">Costs rise</div>
            <div className="bg-[#111d35] rounded-lg p-3 text-center text-sm">Jobs disappear</div>
            <div className="bg-[#111d35] rounded-lg p-3 text-center text-sm">People collapse</div>
            <div className="bg-[#111d35] rounded-lg p-3 text-center text-sm">Authoritarianism grows</div>
          </div>
          <div className="bg-red-500/10 border-l-4 border-red-500 rounded-r-lg p-5 text-center">
            <p className="text-white text-2xl font-bold">We don't have years. We have now.</p>
          </div>
          <p className="text-[#3ddc84] font-bold text-center text-2xl mt-5">That's why change is required.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* 3.5% Path Forward */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why <span className="text-[#ffd60a]">3.5%</span> Is the Only Path Forward</h2>
          <p className="text-gray-300 mb-4">Harvard research shows that when 3.5% of a population organizes, systemic change becomes:</p>
          <div className="flex flex-wrap justify-center gap-3 my-6">
            <span className="bg-[#111d35] border border-[#3ddc84] rounded-full px-5 py-2">Guaranteed</span>
            <span className="bg-[#111d35] border border-[#3ddc84] rounded-full px-5 py-2">Peaceful</span>
            <span className="bg-[#111d35] border border-[#3ddc84] rounded-full px-5 py-2">Non-negotiable</span>
            <span className="bg-[#111d35] border border-[#3ddc84] rounded-full px-5 py-2">Inevitable</span>
          </div>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/30 border-l-4 border-l-[#3ddc84] rounded-r-lg p-5 text-center">
            <p className="text-white text-xl font-bold">This isn't theory. It's history.</p>
            <p className="text-gray-300 mt-3">3.5% is the ignition point — the moment Congress loses the ability to ignore the people.</p>
          </div>
          <p className="text-[#3ddc84] font-bold text-center text-2xl mt-5">That's why change is required.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Why This Movement Is Different */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why This Movement <span className="text-[#3ddc84]">Is Different</span></h2>
          <p className="text-gray-300 mb-3">We're not asking Congress to "care." We're not asking them to "do better." We're not asking them to "listen."</p>
          <p className="text-white text-xl text-center my-6"><strong>We're forcing them to act — or be replaced.</strong></p>
          <p className="text-gray-300 mb-3">Not with violence. Not with chaos. But with organized, district-level, unstoppable civic pressure.</p>
          <p className="text-[#3ddc84] font-bold text-center text-2xl">This is how real change happens.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Why Now - Why Us */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why Now — <span className="text-[#3ddc84]">And Why Us</span></h2>
          <p className="text-gray-300 mb-4">Because the crisis is here. Because the system is failing. Because the future is unstable. Because the stakes are rising. Because no one else is coming.</p>
          <p className="text-gray-300 mb-3"><strong className="text-white">And because we have:</strong></p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-5">
            <div className="bg-[#111d35] p-3 rounded-md text-center">The math</div>
            <div className="bg-[#111d35] p-3 rounded-md text-center">The mechanism</div>
            <div className="bg-[#111d35] p-3 rounded-md text-center">The movement</div>
            <div className="bg-[#111d35] p-3 rounded-md text-center">The moment</div>
          </div>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/30 border-l-4 border-l-[#3ddc84] rounded-r-lg p-5 text-center">
            <p className="text-white text-lg font-bold">This is the first time in decades that a peaceful, scalable, intelligent solution has been possible.</p>
          </div>
          <p className="text-[#3ddc84] font-bold text-center text-2xl mt-5">That's why change is required.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Next Step CTA */}
        <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg p-8 text-center my-8">
          <h2 className="font-display text-2xl md:text-3xl text-blue-500 mb-3">Next Step → <span className="text-white">What We Demand</span></h2>
          <p className="text-gray-300 text-lg mb-4">We've shown the harm. We've shown the bottleneck. We've shown the necessity.</p>
          <p className="text-gray-300 mb-6">Now it's time to show the blueprint.</p>
          <Link href="/solutions" className="inline-block px-8 py-3 bg-blue-500 text-white font-condensed font-bold rounded-lg hover:bg-blue-600 transition-all">Continue to 5D Solutions →</Link>
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
        </div>
        <div className="text-xs text-gray-600">
          PHIERS is a people's movement — not a company, not a product. Built by regular people who are done waiting for Congress to do its job. The only thing missing is you.<br />
          📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a><br />
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
