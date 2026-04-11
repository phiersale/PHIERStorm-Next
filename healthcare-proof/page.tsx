// app/healthcare-proof/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function HealthcareProofPage() {
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
                <div className="space-y-2 pl-4 mt-2"><Link href="/resources" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📚 Resource Hub</Link><Link href="/real-stories" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💬 Real Stories</Link><Link href="/healthcare-proof" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📖 The Full Story</Link><Link href="/faq" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>❓ FAQ</Link><Link href="/about" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📖 About</Link></div>
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
        {/* Back Link */}
        <Link href="/" className="inline-block font-condensed text-[#3ddc84] text-sm border border-[#3ddc84]/30 rounded-full px-4 py-2 mb-6 hover:bg-[#3ddc84]/10 transition-all">← Back to PHIERS.org</Link>

        {/* Hero Section */}
        <div className="text-center bg-gradient-to-br from-[#0f3460]/90 to-[#16213e]/90 rounded-xl border border-red-500/30 p-8 md:p-12 mb-10">
          <div className="flex justify-center mb-4"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={100} height={100} className="opacity-90" /></div>
          <div className="text-[#3ddc84] text-sm font-condensed tracking-wide mb-1">MABAH — Making America Better And Healthier</div>
          <div className="text-[#ffd60a] text-base font-condensed font-bold italic mb-4">Sounds Like MAGA, But A Lot Bettah</div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-red-500 mt-2 mb-4">You've seen the idea. This is the proof.</h1>
          <p className="text-gray-300 max-w-[720px] mx-auto mb-3">The healthcare system isn't failing because solutions don't exist.<br />It's failing because the incentives are broken — and Congress has no reason to fix them.<br />PHIERS changes that by organizing people around a solution that already works today.</p>
          <p className="text-gray-300 max-w-[720px] mx-auto mb-3">The $600 model isn't theoretical. It's based on real telehealth systems already delivering care today — covering the majority of what people actually use, at a fraction of the cost.</p>
          <p className="text-[#a5d6a7] italic max-w-[720px] mx-auto">What matters isn't just that it works. It's that it works well enough to prove we don't need Congress to fix it — and that's what creates the leverage to force them to act — whether they want to or not.</p>
        </div>

        {/* Intro Video */}
        <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-6 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-blue-400 text-center mb-4">The 60-Second PHIERS Brief</h2>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/2j-dF3hgdeE" title="PHIERS Introduction" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            <Link href="/petition" className="px-6 py-2 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform" target="_blank" rel="noopener noreferrer" className="text-[#3ddc84] font-condensed font-bold hover:underline">📋 Take the Survey</a>
          </div>
        </div>

        {/* What Is PHIERS */}
        <div className="bg-blue-500/10 border-2 border-blue-500/30 border-l-4 border-l-blue-500 rounded-lg p-6 my-8">
          <p className="text-2xl md:text-3xl text-[#3ddc84] font-bold mb-3">Politicians respond to organized power.<br />PHIERS organizes the public.</p>
          <p className="text-gray-300 mb-3"><strong className="text-white">PHIERS isn't a policy campaign.</strong> It's a way for regular Americans to give Congress documented direction — and replace the ones who ignore it.</p>
          <p className="text-gray-300 mb-3">When millions of people say the same thing — on the record — Congress has to act. We don't ask people to yell louder. We help them line up behind one clear demand.</p>
          <p className="text-gray-300">We use <strong className="text-[#3ddc84]">math and collective power</strong> to force Congress to stabilize healthcare, protect coverage, and stop using people's lives as bargaining chips.</p>
        </div>

        {/* Telehealth Benefits Graphic */}
        <div className="text-center my-8">
          <button onClick={() => openModal('/images/Telehealth_Benefits.jpg')} className="cursor-pointer">
            <Image src="/images/Telehealth_Benefits.jpg" alt="Telehealth Benefits: 24/7 doctors, fast prescriptions, no waiting rooms, mental health support, zero surprise bills — under $50/mo" width={600} height={400} className="max-w-full h-auto mx-auto rounded-lg border-2 border-[#3ddc84]/20 hover:scale-[1.01] transition-transform" />
          </button>
          <p className="text-gray-500 text-sm italic mt-2">Everything you actually need — under $50/month. No waiting rooms. No surprise bills. No gatekeepers.</p>
        </div>

        {/* Telehealth Section */}
        <div className="bg-[#3ddc84]/10 border-2 border-[#3ddc84]/35 border-l-4 border-l-[#3ddc84] rounded-lg p-6 md:p-8 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mt-0 mb-4">Telehealth Is the Answer to the Affordability Crisis</h2>
          <p className="text-white text-lg font-semibold mb-4">$600 telehealth replaces $10,000 insurance.<br />That's not a slogan — it's the math Congress doesn't want you to know.</p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center"><div className="text-[#3ddc84] font-bold text-2xl">80%</div><p className="text-gray-400 text-sm">of Americans never use hospitalization. They're paying $10,000/year for protection they don't need.</p></div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center"><div className="text-[#3ddc84] font-bold text-2xl">$600/yr</div><p className="text-gray-400 text-sm">Telehealth delivers 80% of healthcare needs — 24/7 access, no denials — at 1/14th the cost.</p></div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center"><div className="text-[#3ddc84] font-bold text-2xl">8–13 mo.</div><p className="text-gray-400 text-sm">From Congressional authorization to universal coverage. Congress can do this tomorrow.</p></div>
          </div>
          <p className="text-gray-300 mb-3"><strong className="text-white">Telehealth is care. Insurance is protection.</strong> Most Americans are paying for catastrophic coverage they never use — while skipping routine care they can't afford. PHIERS fixes the system by separating the two: <strong className="text-[#3ddc84]">$600 telehealth for the 80%. Insurance as the backstop for the rest.</strong></p>
          <p className="text-gray-300 mb-4">Our one demand to Congress: <strong className="text-[#ffd60a]">add $600 telehealth as a covered benefit under the ACA Exchange and CMS.</strong> That single change stabilizes costs for 234 million Americans — and saves roughly $2.7 trillion a year.</p>
          <Link href="/telecare" className="inline-block bg-gradient-to-r from-[#3ddc84] to-[#2ab568] text-[#080d1a] font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all">📱 See the Full Telehealth Case →</Link>
        </div>

        {/* Bridge Section */}
        <div className="bg-[#1a1a2e] border-l-4 border-[#ffd60a] rounded-lg p-6 my-8 text-center">
          <p className="text-[#ffd60a] text-lg font-bold mb-2">Fixing healthcare generates the savings to solve everything else.</p>
          <p className="text-gray-300">$2.7 trillion a year — freed from a broken system — is the fuel for the five connected problems facing this country. PHIERS is built to solve all five. Healthcare is where we start.</p>
        </div>

        {/* Start Where You Are Grid */}
        <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/25 rounded-xl p-8 my-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white mt-0 mb-4">Start Where You Are</h2>
          <p className="text-gray-300 mb-6">Pick the page that fits your question right now.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[700px] mx-auto">
            <Link href="/crisis" className="bg-gradient-to-r from-[#3ddc84] to-[#2ab568] text-[#080d1a] font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">🚨 The Crisis</Link>
            <Link href="/telecare" className="bg-gradient-to-r from-[#1b5e20] to-[#2e7d32] text-white font-bold p-4 rounded-lg text-center border-2 border-[#ffd60a] hover:opacity-90 transition-all">📱 The Fix: Telehealth</Link>
            <Link href="/simple-math" className="bg-gradient-to-r from-[#3ddc84] to-[#2ab568] text-[#080d1a] font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">📊 The Math</Link>
            <Link href="/solutions" className="bg-gradient-to-r from-[#3ddc84] to-[#2ab568] text-[#080d1a] font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">🔧 The Solution</Link>
            <Link href="/leverage" className="bg-gradient-to-r from-[#3ddc84] to-[#2ab568] text-[#080d1a] font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">⚡ The Leverage</Link>
            <Link href="/no-war" className="bg-gradient-to-r from-[#f44336] to-[#b71c1c] text-white font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">⚔️ End the War</Link>
            <Link href="/action" className="bg-gradient-to-r from-[#ffd60a] to-[#e0a800] text-black font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">✊ Take Action</Link>
          </div>
        </div>

        {/* How PHIERS Works */}
        <div className="bg-[#3ddc84]/10 border-2 border-[#3ddc84] border-l-4 border-l-[#3ddc84] rounded-lg p-6 my-8">
          <p className="text-lg font-bold text-white mb-4">Four steps. No ideology. Just your voice on record.</p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start"><span className="text-[#3ddc84] text-2xl font-bold min-w-[40px]">1.</span><p className="text-gray-300"><strong className="text-[#3ddc84]">Sign the petition + take the survey</strong> — Your name, your position, on the public record.</p></div>
            <div className="flex gap-4 items-start"><span className="text-[#3ddc84] text-2xl font-bold min-w-[40px]">2.</span><p className="text-gray-300"><strong className="text-[#3ddc84]">1,500 signatures in YOUR DISTRICT</strong> — Forces a mandatory town hall. Congress can't ignore it.</p></div>
            <div className="flex gap-4 items-start"><span className="text-[#3ddc84] text-2xl font-bold min-w-[40px]">3.</span><p className="text-gray-300"><strong className="text-[#3ddc84]">3.5% participation (11.6M people)</strong> — No campaign in history has ever failed after hitting this number.</p></div>
            <div className="flex gap-4 items-start"><span className="text-red-500 text-2xl font-bold min-w-[40px]">4.</span><p className="text-gray-300"><strong className="text-red-500">Replace elected officials who refuse</strong> — No exceptions.</p></div>
          </div>
        </div>

        {/* No Kings Rally Timing */}
        <div className="bg-gradient-to-br from-red-500/15 to-[#ffd60a]/10 border-2 border-[#ffd60a] rounded-xl p-6 my-8 text-center">
          <p className="text-[#ffd60a] text-xl font-bold mb-2">⚡ Perfect timing — the No Kings Rally is March 28th.</p>
          <p className="text-gray-300 mb-4">If you want to turn that energy into lasting change, document your direction before you march. Protests create visibility. PHIERS creates leverage. You need both.</p>
          <Link href="/action" className="inline-block bg-gradient-to-r from-[#ffd60a] to-[#e0a800] text-black font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-all">✊ Take Action Before the Rally →</Link>
        </div>

        {/* Pathos Video */}
        <div className="max-w-[640px] mx-auto my-10">
          <p className="text-center text-[#3ddc84] italic mb-2">A global PR leader listed on the London Stock Exchange explains why they put their name behind this movement:</p>
          <p className="text-center text-[#ffd60a] font-bold mb-4">Pathos Communications: Why They Put Their Reputation Behind PHIERS (7:11)</p>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/UD8svoGU7ZU" title="Pathos Communications" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
          </div>
        </div>

        {/* Research Proves 3.5% */}
        <div className="bg-red-500/10 border border-red-500/25 border-l-4 border-l-red-500 rounded-lg p-6 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-red-500 mt-0 mb-4">Research Proves That Congress Can't Ignore 3.5%</h2>
          <p className="text-gray-300 mb-4"><strong className="text-white">At that level of alignment:</strong> Every district is affected, every election becomes competitive, every party must respond.</p>
          <div className="bg-[#3ddc84]/15 border-2 border-[#3ddc84] rounded-lg p-5">
            <p className="text-[#3ddc84] text-xl font-bold mb-2">Once we hit critical mass, universal healthcare becomes inevitable — and free.</p>
            <p className="text-gray-300">The savings already exist. The math already works. The only thing missing is organized public pressure. That's exactly what 3.5% delivers.</p>
          </div>
        </div>

        {/* 30-Second Explainer */}
        <div className="bg-[#ffd60a]/10 border border-[#ffd60a]/30 rounded-lg p-6 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#ffd60a] mt-0 mb-4">💬 Explain PHIERS in 30 Seconds</h2>
          <div className="bg-black/25 border-l-4 border-[#ffd60a] p-4 rounded-md">
            <p className="text-gray-300">Healthcare is broken because politicians can ignore us. PHIERS unites millions behind one demand: add $600 telehealth to the ACA Exchange and CMS. That fix saves trillions — and once 3.5% align, Congress must act.</p>
          </div>
        </div>

        {/* Unions Video */}
        <div className="max-w-[640px] mx-auto my-10">
          <p className="text-center text-[#3ddc84] italic mb-2">Why organized labor is the engine behind PHIERS:</p>
          <p className="text-center text-[#ffd60a] font-bold mb-4">Why PHIERS-Powered Unions Will Win (5:55)</p>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <iframe src="https://player.vimeo.com/video/1157760069" title="Why PHIERS-Powered Unions Will Win" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
          </div>
        </div>

        {/* War Section */}
        <div className="bg-red-500/10 border-2 border-red-500/30 border-l-4 border-l-red-500 rounded-lg p-6 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-red-500 mt-0 mb-4">Healthcare Is Where We Get the Leverage. War Is Why We Can't Wait.</h2>
          <p className="text-gray-300 mb-4">Unauthorized wars are costing the United States <strong className="text-red-500">over $1 billion every single day</strong> — with no declaration, no mandate, and no end in sight. Most economists agree: prolonged military conflicts of this scale, layered on top of existing debt and global instability, carry a real risk of triggering global economic collapse.</p>
          <div className="bg-black/25 border-l-4 border-[#ffd60a] rounded-lg p-4 my-4"><p className="text-[#ffd60a] font-bold mb-2">Stage 1 — Fix healthcare.</p><p className="text-gray-300 mb-3">Prove PHIERS works. Generate $2.7 trillion in savings. Show Congress that organized constituents cannot be ignored.</p><p className="text-[#ffd60a] font-bold mb-2">Stage 2 — Transfer that leverage.</p><p className="text-gray-300">Use the same organized, documented, district-by-district pressure to demand Congress end the unauthorized wars.</p></div>
          <p className="text-gray-300 mb-4">Protest without leverage gets nothing. <strong className="text-white">PHIERS builds the leverage.</strong> Healthcare first — because that's the proof of concept that opens every door that follows.</p>
          <Link href="/no-war" className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all">⚡ See the Full Plan to End the War →</Link>
        </div>

        {/* Final CTA */}
        <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-8 my-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-red-500 mt-0 mb-4">The Only Thing Missing Is You</h2>
          <p className="text-gray-300 text-lg mb-6"><strong className="text-white">PHIERS is a public-interest movement</strong> — not a company, not a product. It works when people participate.</p>
          <Link href="/action" className="inline-block bg-gradient-to-r from-[#ffd60a] to-[#e0a800] text-black font-bold text-xl px-10 py-4 rounded-lg hover:opacity-90 transition-all">✊ Take Action</Link>
          <div className="flex flex-wrap justify-center gap-4 mt-6"><Link href="/petition" className="px-6 py-2 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link><Link href="/donate" className="px-6 py-2 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">Support the Movement</Link></div>
          <div className="font-display text-2xl text-[#3ddc84] text-center mt-6">#PHIERdUpNow</div>
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
