// app/action/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function ActionPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(true)
  const [willModalOpen, setWillModalOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeBanner = () => setBannerVisible(false)

  // Adjust nav position when banner is closed
  useEffect(() => {
    const nav = document.getElementById('main-nav')
    if (nav && !bannerVisible) {
      nav.classList.add('banner-hidden')
    }
  }, [bannerVisible])

  return (
    <>
      {/* Sticky Banner */}
      {bannerVisible && (
        <div className="fixed top-0 left-0 right-0 z-[1100] bg-red-600 text-white text-center py-2 px-12 font-condensed font-bold text-sm tracking-wide">
          ⚡ March 28 — No Kings III. Show Congress the public is coordinating.
          <button onClick={closeBanner} className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-white text-lg cursor-pointer px-2">✕</button>
        </div>
      )}

      {/* Navigation */}
      <nav id="main-nav" className={`fixed left-0 right-0 z-[1000] bg-[#080d1a]/95 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between transition-all duration-300 ${bannerVisible ? 'top-9' : 'top-0'}`}>
        <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">PHIERS.org</Link>
        <div className="flex items-center gap-4">
          <Link href="/petition" className="hidden md:inline-block px-5 py-2 bg-red-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl p-2 border border-white/20 rounded-lg">{mobileMenuOpen ? '✕' : '☰'}</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className={`fixed left-0 right-0 bg-[#0d1525] border-b border-[#3ddc84]/20 z-40 p-5 max-h-[calc(100vh-64px)] overflow-y-auto ${bannerVisible ? 'top-[100px]' : 'top-16'}`} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
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

      <main className={`max-w-[760px] mx-auto px-6 pb-16 ${bannerVisible ? 'pt-40' : 'pt-28'}`}>
        {/* Hero Section */}
        <div className="mb-12">
          <div className="mb-4"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="inline-block" /></div>
          <div className="font-condensed font-bold text-sm text-gray-500 uppercase tracking-wide mb-4">PHIERS — Your Name. Your District. On the Record.</div>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-4">Your Name Is<br /><span className="text-[#3ddc84]">Leverage.</span><br />Add It.</h1>
          <p className="font-condensed font-bold text-lg text-[#ffd60a] tracking-wide mb-4">One action. Three moves. Real leverage.</p>
          <p className="text-gray-400 mb-2">This is where your signature becomes leverage.</p>
          <p className="text-gray-400 mb-4">Everything here turns public frustration into coordinated leverage.</p>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-md p-4 my-4"><p className="font-condensed font-bold text-[#3ddc84] text-base">One coordinated action — done by millions —<br />creates leverage Congress cannot ignore.</p></div>
          <p className="text-gray-400 mt-4">Systems don't change because people yell.<br />They change when people organize behind the same demand.</p>
          <p className="text-gray-400">Real people. Real districts. Names on the record — in a way elected officials cannot ignore.</p>
          <div className="bg-[#3ddc84]/5 border-l-4 border-l-[#3ddc84] rounded-r-md p-4 mt-5"><p className="font-condensed font-bold text-[#3ddc84]">Here's how you take part.</p></div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        <p className="font-condensed font-bold text-white text-lg text-center mb-5">This is one coordinated action — done in three quick moves.</p>

        {/* Step 1 - Sign Petition */}
        <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6 md:p-8 mb-5 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#3ddc84] before:rounded-l-lg">
          <div className="flex items-center gap-3 mb-5"><div className="font-display text-3xl text-[#3ddc84]">1</div><div className="font-condensed font-bold text-xs text-gray-500 uppercase tracking-wide">Step 1 — Start the Action</div></div>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-3">Sign the Petition</h2>
          <p className="text-gray-400 mb-2">A signature isn't symbolic — it counts. It shows exactly how many people in your district want the same fix.</p>
          <p className="text-gray-400 mb-3">When your name is on the record, they can't pretend they didn't hear you. When enough neighbors sign, the pressure becomes real.</p>
          <div className="bg-[#0a1628] border-l-3 border-l-[#3ddc84] rounded-r-md p-4 my-4"><p className="font-condensed font-bold text-white"><strong className="text-[#3ddc84]">When 1,500 people in your district sign,</strong> a mandatory town hall is triggered — and your representative must show up, answer publicly, and respond under real electoral pressure.</p></div>
          <p className="text-gray-400 mb-2">Researchers studying hundreds of movements found that when about 3.5% of a population acts together — roughly 12 million Americans — governments historically have to respond.</p>
          <p className="text-gray-500 italic text-sm mb-4">Thirty seconds. That's where leverage begins.</p>
          <Link href="/petition" className="inline-block px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
        </div>

        {/* Step 2 - Take Survey */}
        <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6 md:p-8 mb-5 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#3ddc84] before:rounded-l-lg">
          <div className="flex items-center gap-3 mb-5"><div className="font-display text-3xl text-[#3ddc84]">2</div><div className="font-condensed font-bold text-xs text-gray-500 uppercase tracking-wide">Step 2 — Strengthen the Signal</div></div>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-3">Take the Survey</h2>
          <p className="text-gray-400 mb-1">Tell us what's hitting your family the hardest. Tell us what you want fixed first.</p>
          <p className="font-condensed font-bold text-gray-500 text-sm mb-3">Because if it's not written down, it gets ignored.</p>
          <p className="font-condensed font-bold text-white text-lg mb-3">Healthcare. Wages. Housing. Peace. Stability.</p>
          <p className="text-gray-400 mb-3">Your answers get compiled with everyone else in your district and delivered directly to your representative — showing them what their constituents need, not what their donors want.</p>
          <div className="bg-[#0a1628] border-l-3 border-l-[#3ddc84] rounded-r-md p-4 my-4"><p><strong className="text-white">When your rep walks into that town hall, they'll be holding your district's priorities. Not a talking point. Yours.</strong></p></div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold rounded-lg hover:bg-[#34c474] transition-all">📋 Tell Us What Matters →</a>
        </div>

        {/* Step 3 - Grow Movement */}
        <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6 md:p-8 mb-5 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#3ddc84] before:rounded-l-lg">
          <div className="flex items-center gap-3 mb-5"><div className="font-display text-3xl text-[#3ddc84]">3</div><div className="font-condensed font-bold text-xs text-gray-500 uppercase tracking-wide">Step 3 — Multiply the Pressure</div></div>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-3">Grow the Movement</h2>
          <p className="text-gray-400 mb-2">You know people who are angry and don't know where to put it. Send them here.</p>
          <p className="text-gray-400 mb-2">Every person who signs increases the pressure in your district. Every survey adds to the evidence Congress cannot ignore. Every share brings us closer to the number history says governments have to respond to.</p>
          <p className="text-gray-400 mb-3"><strong className="text-white">Share it with people in your district first — that's where the pressure counts.</strong></p>
          <p className="text-gray-500 italic mb-4">This isn't about going viral. It's about coordination.</p>
          <div className="bg-[#0a1628] border-l-3 border-l-[#3ddc84] rounded-r-md p-4 my-4"><p><strong className="text-white">Share this with five people. That's how movements grow.</strong></p></div>
          <Link href="/action" className="inline-block px-6 py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold rounded-lg hover:bg-[#34c474] transition-all">📣 Share This With 5 People in Your District →</Link>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Why Your Action Matters */}
        <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-lg p-6 md:p-8 mb-5">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Why Your Action Matters</span>
          <p className="font-condensed font-bold text-white text-lg mb-4">All of these problems persist for the same reason:<br /><span className="text-[#3ddc84]">Congress isn't under enough pressure to act.</span></p>
          <ul className="space-y-2 mb-4">
            <li className="bg-[#111d35] border-l-3 border-l-red-500 rounded-r-md p-3 text-gray-400 text-sm">Healthcare costs are rising. Housing costs are rising. Groceries cost more every week.</li>
            <li className="bg-[#111d35] border-l-3 border-l-red-500 rounded-r-md p-3 text-gray-400 text-sm">Families are working harder than ever — and still falling behind.</li>
            <li className="bg-[#111d35] border-l-3 border-l-red-500 rounded-r-md p-3 text-gray-400 text-sm">Unauthorized wars are draining over <strong className="text-white">$1 billion every single day</strong> — no vote, no mandate, no end in sight.</li>
          </ul>
          <p className="text-gray-400 mb-2">These problems are connected — because the cause is the same.</p>
          <p className="text-gray-400 mb-2">And so is the solution: one coordinated public action that creates enough pressure to force Congress to act — on healthcare, war, and the cost of living — at the same time.</p>
          <p className="text-gray-400 mb-4">Healthcare is the clearest proof the system works — and the fastest way to build the leverage that applies to everything else. The same organized pressure that forces healthcare reform forces war accountability, economic justice, and every demand that follows.</p>
          <p className="font-condensed font-bold text-white text-lg mb-2">Moments like this go one of two ways. Systems break. Or systems realign.</p>
          <p className="text-gray-400">Realignment doesn't happen by itself. It takes people moving together.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* What Happens Next */}
        <div className="mb-5">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">What Happens Next</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">District by District.<br /><span className="text-[#ffd60a]">Step by Step.</span></h2>
          <p className="text-gray-400 mb-6">As more people join, results are organized district by district and delivered directly to Congress.</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><div className="font-condensed font-bold text-sm text-[#3ddc84] mb-3">When your district hits 1,500</div><ul className="space-y-1"><li className="text-gray-400 text-sm list-none before:content-['→'] before:text-[#3ddc84] before:mr-2">A public town hall is organized</li><li className="text-gray-400 text-sm list-none before:content-['→'] before:text-[#3ddc84] before:mr-2">Your rep gets the data and must answer publicly</li><li className="text-gray-400 text-sm list-none before:content-['→'] before:text-[#3ddc84] before:mr-2">Local media starts asking questions</li><li className="text-gray-400 text-sm list-none before:content-['→'] before:text-[#3ddc84] before:mr-2">Neighbors start talking</li></ul></div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><div className="font-condensed font-bold text-sm text-[#3ddc84] mb-3">When we reach 12 million</div><ul className="space-y-1"><li className="text-gray-400 text-sm list-none before:content-['→'] before:text-[#3ddc84] before:mr-2">Congress is forced to respond — not to one issue, but to the same organized public applying pressure across all of them</li><li className="text-gray-400 text-sm list-none before:content-['→'] before:text-[#3ddc84] before:mr-2">That's what 3.5% does. One lever. Multiple outcomes.</li></ul></div>
          </div>

          <div className="space-y-1 my-5">
            <div className="font-condensed font-bold text-white py-2 border-b border-white/10">One district creates <span className="text-[#3ddc84]">attention.</span></div>
            <div className="font-condensed font-bold text-white py-2 border-b border-white/10">Many districts create <span className="text-[#3ddc84]">pressure.</span></div>
            <div className="font-condensed font-bold text-white py-2">Enough districts create <span className="text-[#3ddc84]">obligation.</span></div>
          </div>

          <p className="text-gray-400 mt-4"><strong className="text-white">On Election Day 2026, every voter will know exactly who showed up — and who didn't.</strong></p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Final CTA */}
        <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-8 text-center">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Make Your Voice Heard</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">When enough Americans stand behind the same demand, Congress has two choices:</h2>
          <div className="mb-6"><div className="font-display text-5xl md:text-6xl text-[#3ddc84]">Act.</div><div className="font-display text-3xl md:text-4xl text-gray-500 mt-2">Or face voters who will replace them<br />with someone who will.</div></div>
          <p className="text-white font-bold text-lg mb-2">Congress won't fix itself. But we will fix it for them.</p>
          <p className="font-condensed font-bold text-white text-lg mb-6">One action starts it.<br />Three moves build it.<br />3.5% forces it.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/petition" className="px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">📋 Tell Us What Matters</a>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Closing */}
        <div className="text-center py-8">
          <p className="font-condensed font-bold text-gray-400 text-lg leading-relaxed">
            <span className="text-[#3ddc84]">Direction</span> brings people together.<br />
            People together create <span className="text-[#3ddc84]">pressure.</span><br />
            Pressure creates <span className="text-[#3ddc84]">change.</span>
          </p>
          <p className="text-gray-500 text-sm mt-5">Your name. Your district. Your priorities.<br /><em>That's how leverage starts.</em></p>
          <div className="font-display text-3xl text-gray-500 text-center mt-6">#PHIERdUpNow</div>
        </div>
      </main>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-[998] opacity-0 transition-opacity duration-300" id="float-cta">
        <Link href="/petition" className="block px-5 py-3 bg-red-600 text-white font-condensed font-bold text-sm rounded-full shadow-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
      </div>

      {/* Back to Top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 left-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40 opacity-0 transition-opacity duration-300" id="back-to-top">↑</button>

      {/* Footer */}
      <footer className="text-center py-12 px-6 border-t border-[#3ddc84]/10 bg-[#0d1525]">
        <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-70" />
        <div className="font-condensed font-bold text-gray-400 mb-1">PHIERS is a people's movement — not a company, not a product.</div>
        <div className="text-sm text-gray-500 mb-4">Built by regular people who are done waiting.</div>
        <div className="max-w-[500px] mx-auto mb-6"><p className="font-condensed text-gray-400">Energy without power fails.<br />PHIERStorm is the power.<br /><span className="text-gray-500">PHIERS.org — a catalyst for the change we've been waiting for.</span><br /><span className="text-gray-500">The only thing missing is you.</span></p></div>
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

      {/* Floating CTA Visibility Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            var f = document.getElementById('float-cta');
            var btt = document.getElementById('back-to-top');
            if (f) f.classList.toggle('visible', window.scrollY > 400);
            if (btt) btt.classList.toggle('visible', window.scrollY > 400);
          });
        `
      }} />

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
        .visible { opacity: 1 !important; pointer-events: auto !important; }
        .banner-hidden { top: 0 !important; }
      `}</style>
    </>
  )
}
