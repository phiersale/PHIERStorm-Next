// app/overview/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function OverviewPage() {
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

      <main className="pt-20 pb-16 max-w-[1000px] mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center bg-gradient-to-br from-[#0f3460]/90 to-[#16213e]/90 rounded-xl border border-[#3ddc84]/30 p-8 md:p-12 mb-10">
          <div className="flex justify-center mb-4"><Image src="/images/PHIERS_Logo.png" alt="PHIERS Logo" width={100} height={100} className="opacity-90" /></div>
          <div className="font-condensed text-[#3ddc84] text-sm uppercase tracking-wide mb-2">THE MABAH MOVEMENT</div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#3ddc84] mb-3">Make America Better and Healthier</h1>
          <p className="text-gray-300 text-lg mb-4"><strong className="text-white">PHIERS</strong> — People's Health Insurance Endowment & Referral Service</p>
          <button onClick={() => openModal('/images/Power_Concedes_Nothing_without_TEETH.jpg')} className="cursor-pointer">
            <Image src="/images/Power_Concedes_Nothing_without_TEETH.jpg" alt="Power Concedes Nothing Without a Demand" width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border-2 border-[#3ddc84]/20 my-4 hover:scale-[1.01] transition-transform" />
          </button>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/petition" className="px-8 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
            <Link href="#how-it-works" className="px-8 py-3 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">How It Works</Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-6 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-blue-400 text-center mb-4">The Math Congress Doesn't Want You to See</h2>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/2j-dF3hgdeE" title="The Math Congress Fears — PHIERS Explainer" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
          </div>
          <p className="text-center text-blue-400 font-bold mt-4">1 minute 11 seconds. This is why they're terrified.</p>
        </div>

        {/* Overview Section */}
        <section className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">Congress Won't Fix Healthcare. Organized Citizens Will.</h2>
          <p className="text-gray-300 mb-4">PHIERS is a public-interest movement building coordinated citizen pressure across every congressional district — with real leverage and a real plan.</p>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84] rounded-lg p-5 mt-4">
            <h3 className="font-condensed text-lg text-white mb-3">This isn't a petition. It's a pressure system.</h3>
            <ul className="space-y-2 text-gray-300 list-disc pl-5">
              <li>Your name is counted by congressional district</li>
              <li>District participation builds measurable political leverage</li>
              <li>Leverage escalates publicly toward key milestones</li>
              <li>Power responds when pressure becomes unavoidable</li>
            </ul>
            <p className="text-center text-gray-400 italic mt-4">History shows that when 3.5% of the population organizes, systems are forced to change.</p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">The PHIERS Timeline</h2>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84] rounded-lg p-5 mb-4">
            <h3 className="font-condensed text-lg text-[#ffa726] mb-2">March 28, 2026 — No Kings Rally</h3>
            <p><strong className="text-white">3.5% participation = 11.6 million signatures</strong><br />We bring organized citizen leverage to a national moment of visibility and accountability.</p>
            <p className="mt-3 text-gray-400">What happens before March 28 determines what power must respond to after.</p>
          </div>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84] rounded-lg p-5">
            <h3 className="font-condensed text-lg text-[#3ddc84] mb-2">July 4, 2026 — Economic Independence Day</h3>
            <p><strong className="text-white">100 Million Americans coordinated</strong><br />Independence Day becomes the day we declare economic independence from corporate control.</p>
            <p className="mt-3 text-gray-400">When 100 million Americans coordinate around healthcare reform, Congress has no choice but to act.</p>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">The PHIERS Strategy — At a Glance</h2>
          <h3 className="font-condensed text-lg text-white mt-4 mb-2">Critical Mass</h3>
          <p className="text-gray-300 mb-3">3.5% participation has repeatedly triggered systemic change across history — from civil rights movements to democratic transitions worldwide.</p>
          <h3 className="font-condensed text-lg text-white mt-4 mb-2">District-Level Pressure</h3>
          <p className="text-gray-300 mb-3">Members of Congress don't fear "the nation." They fear their own district. PHIERS applies pressure locally, where representatives are most vulnerable.</p>
          <h3 className="font-condensed text-lg text-white mt-4 mb-2">Replacement Threat</h3>
          <p className="text-gray-300 mb-3">When enough voters in a district coordinate around a single demand, incumbents move — or lose. We help recruit and support replacements who will act.</p>
          <h3 className="font-condensed text-lg text-white mt-4 mb-2">Existing Law</h3>
          <p className="text-gray-300 mb-3">We're not waiting for a miracle bill. We're using authority that already exists under the ACA to force telehealth coverage.</p>
          <h3 className="font-condensed text-lg text-white mt-4 mb-2">The Math Works</h3>
          <p className="text-gray-300"><strong className="text-[#3ddc84]">$600 per person per year</strong> via telehealth covers 80% of healthcare needs for 234 million Americans — without new taxes and without killing private insurance.</p>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">How It Works — The Telehealth Cascade</h2>
          <button onClick={() => openModal('/images/How_It_Works.png')} className="cursor-pointer w-full">
            <Image src="/images/How_It_Works.png" alt="PHIERS Telehealth Cascade Process Diagram" width={600} height={400} className="max-w-full h-auto mx-auto rounded-lg border border-[#3ddc84]/20 my-4 hover:scale-[1.01] transition-transform" />
          </button>
          <h3 className="font-condensed text-lg text-white mt-4 mb-2">The Exponential Mechanism</h3>
          <p className="text-gray-300 mb-4">Congress allows telehealth through the ACA exchange immediately. One person's $600 annual savings funds 12 others. Those 12 fund 148. Exponential. Unstoppable.</p>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84] rounded-lg p-5">
            <h3 className="font-condensed text-lg text-white mb-3">The Nine Iterations to 234 Million</h3>
            <ol className="space-y-1 text-gray-300 list-decimal pl-5">
              <li>Iteration 1: 1 → 12 (12 people covered)</li>
              <li>Iteration 2: 12 → 148 (148 people covered)</li>
              <li>Iteration 3: 148 → 1,825 (1,825 people covered)</li>
              <li>Iteration 4: 1,825 → 22,500 (22,500 people covered)</li>
              <li>Iteration 5: 22,500 → 277K (277,000 people covered)</li>
              <li>Iteration 6: 277K → 3.4M (3.4 million people covered)</li>
              <li>Iteration 7: 3.4M → 42M (42 million people covered)</li>
              <li>Iteration 8: 42M → 520M (full U.S. population exceeded)</li>
              <li>Iteration 9: Mathematical overshoot proves universal coverage capacity</li>
            </ol>
            <p className="text-center text-[#3ddc84] font-bold mt-4">Each iteration takes 1-3 months. Full cascade: 9-27 months to universal coverage.</p>
          </div>
          <h3 className="font-condensed text-lg text-white mt-4 mb-2">The 3.5% Rule</h3>
          <p className="text-gray-300 mb-2">Harvard researcher Erica Chenoweth's research shows that when 3.5% of a population actively engages in sustained nonviolent resistance, success becomes inevitable.</p>
          <p className="text-gray-300">For the United States, 3.5% = <strong className="text-[#3ddc84]">11.6 million people</strong>. PHIERS is building toward that critical mass by March 28, 2026.</p>
        </section>

        {/* What Signing Does */}
        <section className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">What Joining the First Wave Actually Does</h2>
          <p className="text-gray-300 mb-4">Your signature is not a "like." It's a <strong className="text-white">coordination signal</strong> that lets us map where pressure already exists — district by district — and where we need to grow.</p>
          <ol className="space-y-2 text-gray-300 list-decimal pl-5 mb-4">
            <li><strong className="text-white">Step 1:</strong> You join the First Wave with your district information or zip code</li>
            <li><strong className="text-white">Step 2:</strong> Your district is added to the PHIERS pressure map</li>
            <li><strong className="text-white">Step 3:</strong> When enough people in your district sign, we trigger local escalation: coordinated calls, media pressure, and candidate commitments</li>
            <li><strong className="text-white">Step 4:</strong> If your member of Congress refuses to move, we help recruit and support a replacement who will</li>
          </ol>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84] rounded-lg p-5 text-center">
            <p className="text-gray-300"><strong className="text-white">No spam. No selling. No gimmicks.</strong><br />Just organized citizens building real leverage.</p>
          </div>
        </section>

        {/* Identity Section */}
        <section className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">We Are the TEETH</h2>
          <button onClick={() => openModal('/images/Power_Concedes_Nothing_TEETH.png')} className="cursor-pointer w-full">
            <Image src="/images/Power_Concedes_Nothing_TEETH.png" alt="Power concedes nothing without a demand that has teeth. We are the TEETH." width={500} height={300} className="max-w-full h-auto mx-auto rounded-lg border border-[#3ddc84]/20 my-4 hover:scale-[1.01] transition-transform" />
          </button>
          <p className="text-center text-white text-lg italic my-4">Power concedes nothing without a demand.</p>
          <p className="text-gray-300 mb-4">PHIERS gives citizens the TEETH — organized, strategic, collective force — to make that demand unavoidable.</p>
          <h3 className="font-condensed text-lg text-white mt-4 mb-2">What PHIERS Is</h3>
          <ul className="list-disc pl-5 text-gray-300 mb-4">
            <li>A public-interest movement</li>
            <li>Citizen-driven and non-corporate</li>
            <li>Strategy-based, not vibes-based</li>
            <li>Built for accountability</li>
          </ul>
          <h3 className="font-condensed text-lg text-white mt-4 mb-2">What PHIERS Is NOT</h3>
          <ul className="list-disc pl-5 text-gray-300">
            <li>A company</li>
            <li>An insurance product</li>
            <li>A political party</li>
            <li>A fundraising scheme</li>
          </ul>
        </section>

        {/* Complete Plan Section */}
        <section className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">Explore the Complete Plan</h2>
          <p className="text-gray-300 mb-6">We've mapped the legal authority, the telehealth math, and the district-level strategy into a concrete plan. If you're the kind of person who needs to see the receipts before you move, that's exactly who we built this for.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            <Link href="/quickstart" className="text-[#3ddc84] text-center p-3 bg-[#3ddc84]/10 rounded-lg hover:bg-[#3ddc84]/20 transition-all">Quick Start</Link>
            <Link href="/crisis" className="text-[#3ddc84] text-center p-3 bg-[#3ddc84]/10 rounded-lg hover:bg-[#3ddc84]/20 transition-all">The Crisis</Link>
            <Link href="/simple-math" className="text-[#3ddc84] text-center p-3 bg-[#3ddc84]/10 rounded-lg hover:bg-[#3ddc84]/20 transition-all">The Math</Link>
            <Link href="/solutions" className="text-[#3ddc84] text-center p-3 bg-[#3ddc84]/10 rounded-lg hover:bg-[#3ddc84]/20 transition-all">5D Solutions</Link>
            <Link href="/leverage" className="text-[#3ddc84] text-center p-3 bg-[#3ddc84]/10 rounded-lg hover:bg-[#3ddc84]/20 transition-all">The Leverage</Link>
            <Link href="/faq" className="text-[#3ddc84] text-center p-3 bg-[#3ddc84]/10 rounded-lg hover:bg-[#3ddc84]/20 transition-all">FAQ</Link>
          </div>
          <div className="text-center"><Link href="/petition" className="inline-block px-8 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link></div>
        </section>
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
