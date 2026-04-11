// app/no-war/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function NoWarPage() {
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
        {/* HERO */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="opacity-85" /></div>
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">End the War · Stop the Draft</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-4"><span className="text-red-500">End the Unauthorized War.</span><br /><span className="text-[#3ddc84] text-3xl md:text-4xl">One coordinated action creates the leverage to force Congress to do its job.</span></h1>
          <p className="text-gray-400 text-lg">Congress Never Voted For This. Your Kids Shouldn't Have To Fight In It.</p>
          <p className="text-white font-semibold text-xl mt-3"><strong>PHIERStorm is how we stop it.</strong></p>
          <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 border-l-4 border-l-[#3ddc84] rounded-r-lg p-5 mt-6"><p className="font-condensed font-bold text-[#3ddc84] text-base leading-relaxed">The same coordinated action builds the leverage to stop this war — and fix healthcare at the same time.<br />Not later. Not separately. The same pressure forces both.</p></div>
        </div>

        {/* CONTEXT BLOCK */}
        <div className="bg-[#ffd60a]/10 border-l-4 border-[#ffd60a] rounded-r-lg p-6 my-6">
          <p className="font-condensed text-lg text-[#ffd60a] font-bold mb-3">⚖️ Here's what's actually happening:</p>
          <p className="text-white mb-3">The President is pushing us deeper into war — without a congressional vote. <strong>Congress is funding it anyway.</strong></p>
          <p className="text-gray-400 mb-3">The Constitution is clear: <strong>Congress declares war.</strong> Not the President. Not the Pentagon. Not defense contractors. Your representatives have the power to stop this — but they won't, until we give them a reason to fear the consequences.</p>
          <p className="font-condensed font-bold text-[#3ddc84] mt-3">PHIERS is that reason.</p>
        </div>

        {/* URGENT BANNER */}
        <div className="bg-red-500/20 border-l-4 border-red-500 rounded-r-lg p-6 my-6">
          <p className="font-condensed text-xl text-white font-bold mb-2">⚠️ URGENT: War escalation is the biggest threat to everything, everywhere, all at once.</p>
          <p className="text-gray-300">If the war spirals, nothing else matters. The draft isn't a conspiracy — it's being discussed in the Pentagon right now. We stop it now, or we may never get the chance. <span className="text-red-500 font-bold">This is the priority.</span></p>
        </div>

        {/* STAT CARDS */}
        <div className="grid gap-5 my-8">
          <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6 text-center">
            <div className="font-display text-4xl text-red-500">$1B+</div>
            <p className="text-gray-400 text-sm">Every single day. That's what the unauthorized war costs American taxpayers — with no congressional approval, no exit strategy, and no end in sight.</p>
          </div>
          <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6 text-center">
            <div className="font-display text-2xl text-red-500">Stop the Draft</div>
            <p className="text-gray-400 text-sm">They're floating it. No vote to start the war — no vote should send your kids to fight in it. Stop it before it starts.</p>
          </div>
          <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6 text-center">
            <div className="font-display text-4xl text-red-500">0</div>
            <p className="text-gray-400 text-sm">Congressional declarations of war. Not one vote. Not one debate. Just a blank check your representatives signed with your money and your children's futures.</p>
          </div>
          <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6 text-center">
            <div className="font-display text-3xl text-red-500">5,000+</div>
            <p className="text-gray-400 text-sm">U.S. troops deployed to the Middle East as of March 2026 — with more on the way. None of them sent there by a vote of Congress. All of them someone's kid.</p>
          </div>
        </div>

        <div className="bg-red-500/10 border-2 border-red-500/40 rounded-lg p-6 my-6 text-center">
          <p className="font-condensed font-black text-xl text-white">The only thing that stops a draft is people who organized before it happened.</p>
        </div>

        <div className="bg-red-500/10 border-l-4 border-red-500 rounded-r-lg p-5 my-6">
          <p className="text-gray-400 text-sm">The ripple effects are already hitting your grocery bill, your gas prices, and your electric bill. Unauthorized wars don't stay in the Middle East — they come home through every supply chain connected to oil. <Link href="/crisis" className="text-red-500 font-bold">→ See the full economic picture on the Crisis page</Link></p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* SOLDIERS IMAGE */}
        <div className="max-w-[700px] mx-auto my-8">
          <button onClick={() => openModal('/images/veterans_from_back.jpg')} className="cursor-pointer w-full">
            <Image src="/images/veterans_from_back.jpg" alt="Soldiers — someone's kids, someone's neighbors, someone's family" width={700} height={400} className="w-full h-auto rounded-xl border-2 border-red-500/30 shadow-2xl hover:scale-[1.01] transition-transform" />
          </button>
          <p className="font-condensed font-bold text-xs text-red-500 text-center uppercase tracking-wide mt-3">These are someone's kids. Someone's neighbors. Someone's family.<br />Congress sent them without a vote.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* THE WAR NOBODY AUTHORIZED */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The War Nobody Authorized — <span className="text-red-500">And Now They Want Your Kids</span></h2>
          <p className="text-gray-400 mb-3">Congress never voted to authorize this war. Not once. No debate. No mandate. No exit strategy. The Constitution is unambiguous — Congress declares war. Not the President. Not a defense contractor. <strong className="text-white">Your Congress member.</strong> The one you elected. The one you can replace.</p>
          <p className="text-gray-400 mb-3">They didn't do their job. And now — with the conflict escalating and supply lines under attack — the word nobody wanted to hear is back on the table.<br /><span className="text-red-500 font-bold text-xl">Draft.</span></p>
          <p className="text-gray-400 mb-3">Your kids. Sent to fight in a war your representatives were too cowardly to put their names on. A war that costs over <strong className="text-white">$1 billion of your money every single day.</strong> A war that's already driving up your gas, your groceries, your electric bill — because when oil tankers get attacked in the Middle East, your kitchen table pays the price.</p>
          <p className="text-gray-400"><strong className="text-white">Nothing they wanted. Everything they feared.</strong> Not because their voices don't matter — but because they had no <em>leverage</em>.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* WHY PROTEST ALONE WON'T STOP A DRAFT */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why Protest Alone <span className="text-red-500">Won't Stop a Draft</span></h2>
          <div className="bg-red-500/5 border border-red-500/30 rounded-lg p-6">
            <p className="text-gray-400 mb-3">Congress ignores protests because protests don't threaten their jobs.</p>
            <p className="text-gray-400 mb-3">The only thing that reliably moves Congress is <strong className="text-white">organized people — district by district, names on the record, with documented electoral consequences.</strong> When a politician sees that 1,500 verified constituents in their district are aligned on an issue — and that those constituents will vote accordingly — the math changes.</p>
            <p className="text-white font-bold mb-3">No leverage means no change. That's the lesson of every failed movement.</p>
            <p className="text-gray-400 mb-3">Leverage doesn't come from one issue.<br />It comes from coordinated people acting together.</p>
            <p className="text-[#3ddc84] font-bold">PHIERS builds the leverage — by organizing people around one winnable demand.<br />That same leverage applies everywhere immediately.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* STOPPING THE WAR IS THE PRIORITY */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Stopping the War <span className="text-red-500">Is the Priority</span> — <span className="text-[#3ddc84]">Here's How PHIERS Does It</span></h2>
          <p className="text-gray-400 mb-3">War escalation makes everything else impossible. The draft would tear families apart. Congress keeps funding it because they face <span className="text-red-500">no consequence</span> — until we give them one.</p>
          <p className="text-[#ffd60a] font-bold mb-4">PHIERS is the mechanism that creates that consequence. Here's how it works:</p>
          <p className="text-gray-400 mb-6">This is one coordinated action — and how it creates leverage across all demands at the same time.</p>

          <div className="space-y-5 mb-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="font-condensed font-bold text-lg text-white mb-1">Organize around one winnable demand — healthcare.</h3>
                <p className="text-gray-400 text-sm">$600 telehealth on the ACA Exchange — one specific, verifiable demand that saves $2.7 trillion a year and covers 234 million Americans. This is how we prove organized people can force results — fast.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="font-condensed font-bold text-lg text-white mb-1">Reach 3.5% — and nationwide leverage is real.</h3>
                <p className="text-gray-400 text-sm">11.6 million people. Every district affected. Every seat becomes competitive. Congress must respond — or face replacement. Harvard research proved it: No sustained campaign that reached 3.5% participation has failed.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="font-condensed font-bold text-lg text-white mb-1">Lock in savings and political power simultaneously.</h3>
                <p className="text-gray-400 text-sm">$2.7 trillion a year redirected from insurance to people — wages, veterans' care, and an economy that works. <Link href="/simple-math" className="text-[#3ddc84] font-bold">→ See the math</Link></p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-lg flex-shrink-0">4</div>
              <div>
                <h3 className="font-condensed font-bold text-lg text-white mb-1">That same leverage forces war accountability and stops the draft.</h3>
                <p className="text-gray-400 text-sm">The moment Congress sees this level of organized leverage, the same force that compels healthcare reform compels war accountability — no more blank checks, no more undeclared conflicts.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#3ddc84]/10 border-l-4 border-[#3ddc84] rounded-r-lg p-5">
            <p className="font-bold text-[#3ddc84]">Build leverage once.<br />That same leverage forces healthcare reform, war accountability, and stops the draft.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        <p className="font-condensed text-sm text-gray-500 mb-4">→ <Link href="/solutions" className="text-[#3ddc84]">See how this fixes wages, jobs, and stability: 5D Solutions</Link></p>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* STOP THE WAR SECTION */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Stop the War. <span className="text-red-500">Stop the Draft.</span> <span className="text-[#ffd60a]">Make Congress Do Its Job.</span></h2>
          <div className="bg-[#ffd60a]/10 border-l-4 border-[#ffd60a] rounded-r-lg p-6">
            <p className="text-gray-400 mb-3">The energy in the streets is real. The anger is justified. But energy without mechanism is frustration that fades. And frustration that fades is exactly what they're counting on.</p>
            <p className="text-white font-bold text-lg mb-3">PHIERS is that mechanism. Healthcare builds the leverage. That same leverage forces accountability — including ending the unauthorized war and stopping the draft.</p>
            <p className="text-gray-400 mb-3">Not instead of protest. In addition to it.</p>
            <p className="text-[#3ddc84] font-bold">With teeth.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* FINAL CTA */}
        <div className="text-center my-10">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">PHIERS Can Deliver. <span className="text-[#3ddc84]">Now Is the Time.</span></h2>
          <p className="text-lg text-gray-400 max-w-[700px] mx-auto mb-4">One coordinated action creates leverage.<br />That leverage forces results — across every issue at once.<br />That same pressure forces Congress to end the war and stop the draft.</p>
          <p className="text-lg text-gray-400 max-w-[700px] mx-auto mb-8">Your name on the record isn't just about a $600 healthcare plan. It's proof that you showed up. That you were counted. That when the moment came — you didn't wait for someone else to fix it.</p>
          <div className="flex flex-col items-center gap-4 max-w-[320px] mx-auto">
            <Link href="/petition" className="w-full px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg text-center hover:bg-red-700 transition-all">⚠️ SIGN TO STOP THE WAR</Link>
            <Link href="/action" className="w-full px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">→ See How It Works</Link>
            <Link href="/crisis" className="w-full px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">← Back to the Crisis</Link>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* WHERE YOU GO NEXT */}
        <div className="bg-[#0d1525] rounded-xl p-8 my-8">
          <h2 className="font-display text-2xl text-white text-center mb-6">Where You Go Next</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/crisis" className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-5 hover:border-[#3ddc84] transition-all">
              <div className="text-3xl mb-2">🚨</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">Crisis</h3>
              <p className="text-gray-400 text-sm mb-3">The full picture — healthcare, economy, war, and why it's all connected.</p>
              <span className="text-[#3ddc84] font-bold">→ Explore →</span>
            </Link>
            <Link href="/telecare" className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-5 hover:border-[#3ddc84] transition-all">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">Telehealth vs Insurance</h3>
              <p className="text-gray-400 text-sm mb-3">$600 replaces $10,000 — the fix that starts the sequence.</p>
              <span className="text-[#3ddc84] font-bold">→ Learn More →</span>
            </Link>
            <Link href="/leverage" className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-5 hover:border-[#3ddc84] transition-all">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">Leverage</h3>
              <p className="text-gray-400 text-sm mb-3">1,500 signatures in your district forces a mandatory Congressional response.</p>
              <span className="text-[#3ddc84] font-bold">→ See the Math →</span>
            </Link>
            <Link href="/solutions" className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-5 hover:border-[#3ddc84] transition-all">
              <div className="text-3xl mb-2">🔬</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">5D Solutions</h3>
              <p className="text-gray-400 text-sm mb-3">Healthcare, jobs, economy, politics, peace — connected problems, one answer.</p>
              <span className="text-[#3ddc84] font-bold">→ Discover →</span>
            </Link>
            <Link href="/simple-math" className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-5 hover:border-[#3ddc84] transition-all">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">Simple Math</h3>
              <p className="text-gray-400 text-sm mb-3">The numbers that make this undeniable — $2.7 trillion in savings.</p>
              <span className="text-[#3ddc84] font-bold">→ Crunch the Numbers →</span>
            </Link>
            <Link href="/action" className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-5 border-t-3 border-t-red-500 hover:border-[#3ddc84] transition-all">
              <div className="text-3xl mb-2">🌊</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">Take Action</h3>
              <p className="text-gray-400 text-sm mb-3">Put your name on the record. This is where it counts.</p>
              <span className="text-[#3ddc84] font-bold">→ Take Action →</span>
            </Link>
          </div>
        </div>

        <div className="text-center text-[#3ddc84] font-display text-2xl my-8">#PHIERdUpNow</div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* LEGAL CASE SECTION */}
        <div className="border-t border-[#3ddc84]/15 pt-10 mt-4">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Legal Case</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Two Sets of Laws.<br /><span className="text-[#3ddc84]">Both Say No.</span></h2>
          <p className="text-gray-400 mb-3">Most people know the constitutional argument. Congress declares war — not the President, not the Pentagon, not a defense contractor. Article I, Section 8. Written clearly. The President commands the military. Congress authorizes its use. That separation exists because the people who send others to war should be the people most directly accountable to those doing the dying.</p>
          <p className="text-gray-400 mb-3">Military action without a clear congressional authorization vote bypasses that accountability entirely. Members of Congress get to benefit from the action politically — or distance themselves from it — without ever having to put their names on it publicly.</p>
          <p className="text-gray-400 mb-3">That's the constitutional wall. What fewer people know is that there's a second one.</p>

          <div className="bg-[#ffd60a]/10 border-l-4 border-[#ffd60a] rounded-r-lg p-5 my-6">
            <p className="font-condensed font-bold text-[#ffd60a] text-lg mb-2">The international framework America built also says no.</p>
            <p className="text-gray-400">The United Nations Charter — the framework America championed after World War II precisely to prevent nations from making unilateral decisions to use military force — is explicit. Article 2(4) prohibits the threat or use of force against another nation's territorial integrity. Article 25 obligates member states to act in accordance with Security Council decisions.</p>
          </div>

          <p className="text-gray-400 mb-6">Military action without UN authorization doesn't just raise constitutional questions. It breaks the rules America wrote, signed, and spent decades insisting every other nation follow.</p>

          <h3 className="font-condensed font-bold text-xl text-white mb-4">This matters in three concrete ways.</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-[#111d35] rounded-lg p-5 border-l-4 border-l-red-500">
              <p className="font-condensed font-bold text-white mb-2">First: it removes every justification.</p>
              <p className="text-gray-400 text-sm">You cannot credibly claim self-defense while initiating offensive military action. You cannot invoke American leadership to bypass the framework America built to hold every nation — including itself — accountable. The moment America exempts itself from the rules it wrote, it surrenders the moral standing to demand anyone else follow them.</p>
            </div>
            <div className="bg-[#111d35] rounded-lg p-5 border-l-4 border-l-[#3ddc84]">
              <p className="font-condensed font-bold text-white mb-2">Second: it creates conditions for de-escalation.</p>
              <p className="text-gray-400 text-sm">The Strait of Hormuz stays open when the legal framework protecting it is one every party has standing to invoke. De-escalation requires a door both sides can walk through with dignity. Consistently applied international law is that door. An open strait means oil flows — and your grocery bill, your gas, your medicine, and your heat don't absorb a shock nobody voted for.</p>
            </div>
            <div className="bg-[#111d35] rounded-lg p-5 border-l-4 border-l-[#ffd60a]">
              <p className="font-condensed font-bold text-white mb-2">Third: it builds the widest possible coalition.</p>
              <p className="text-gray-400 text-sm">People who care about international law find standing here. People who care about sovereignty and rules that bind everyone equally find standing here. People who believe America should lead by example rather than by exemption find standing here. People who were promised an end to foreign entanglements find standing here. This is not a left argument or a right argument. It's a "we built these rules for a reason and that reason is right now" argument.</p>
            </div>
          </div>

          <div className="bg-[#080d1a]/80 border border-white/10 rounded-xl p-6 my-6">
            <p className="font-condensed font-bold text-xs text-gray-500 uppercase tracking-wide mb-3">The kitchen table version</p>
            <p className="text-gray-400 mb-3">After World War II, America helped build a set of international rules. The whole point was simple: no more unilateral decisions to use military force. Because when powerful nations bypass the process, other powerful nations start bypassing it too. And when everyone bypasses it, the rules disappear. And when the rules disappear, what's left is whoever has the most weapons and the least restraint.</p>
            <p className="text-white font-semibold">We built those rules because we saw what the world looks like without them. Those rules are available right now. They belong to every American who wants to use them.</p>
          </div>

          <div className="text-center mt-6">
            <p className="font-condensed font-bold text-lg text-white mb-4">Make Congress invoke them.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/petition" className="px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Add Your Name</Link>
              <Link href="/crisis" className="px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">→ The Full 5D Crisis</Link>
            </div>
          </div>
        </div>

        {/* PREV/NEXT */}
        <div className="flex justify-between items-center pt-8 mt-8 border-t border-[#3ddc84]/20">
          <Link href="/veterans" className="font-condensed font-bold text-gray-500 text-sm px-4 py-2 border border-white/10 rounded-md hover:text-white hover:border-white/30 transition-all">← Veterans</Link>
          <Link href="/leverage" className="font-condensed font-bold text-[#3ddc84] text-sm px-4 py-2 border border-[#3ddc84]/30 rounded-md hover:bg-[#3ddc84]/10 transition-all">The Leverage →</Link>
        </div>

        {/* EXPLORER GRID */}
        <div className="bg-[#0d1525] p-8 text-center rounded-lg mt-12 -mx-6">
          <p className="font-condensed font-bold text-[#3ddc84] text-xs uppercase tracking-wider mb-2">Everything You Need</p>
          <h2 className="font-display text-2xl text-white tracking-wide mb-2">Explore the Full System.</h2>
          <p className="text-gray-500 text-sm mb-6">One place. Everything connected.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[720px] mx-auto">
            {['/crisis','/simple-math','/solutions','/telecare','/organizers','/veterans','/unions','/resources','/action','/donate','/faq','/about'].map((href,i)=> (
              <Link key={i} href={href} className="block px-4 py-3 bg-[#111d35] border border-[#3ddc84]/15 rounded-full text-gray-300 text-sm font-semibold text-center hover:border-[#3ddc84] hover:bg-[#3ddc84]/10 transition-all">
                {['🚨 The Crisis','📊 Simple Math','🔬 5D Solutions','💡 TeleCARE','🤝 For Organizers','🎖 Veterans','💪 Union Strategy','📦 Resource Hub','📣 Take Action','💚 Donate','❓ FAQ','📖 About'][i]}
              </Link>
            ))}
          </div>
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
            <img src={modalImageSrc} alt="" className="max-w-[90vw] max-h-[90vh] rounded-lg border border-[#3ddc84]/20" />
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
