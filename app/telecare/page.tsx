// app/telecare/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function TelecarePage() {
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

      <main className="pt-20 pb-16 max-w-[1000px] mx-auto px-6">
        {/* HERO */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={100} height={100} className="opacity-85" /></div>
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">⚕️ T E L E C A R E ⚕️</span>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-2 mb-0 uppercase leading-tight">THE SYSTEM IS RIGGED.<br /><span className="text-[#3ddc84]">THE FIX IS SIMPLE.</span></h1>
          <p className="font-condensed text-2xl text-white max-w-[700px] mx-auto mt-5">Built for the people who've been paying too much for too little — for far too long.</p>
        </div>

        {/* Hero Image */}
        <div className="max-w-[900px] mx-auto mb-12">
          <button onClick={() => openModal('/images/80-20_Truth_About_Healthcare.png')} className="cursor-pointer w-full">
            <Image src="/images/80-20_Truth_About_Healthcare.png" alt="The 80/20 Truth About Healthcare" width={800} height={500} className="w-full h-auto rounded-xl border-2 border-[#3ddc84]/20 shadow-2xl hover:scale-[1.01] transition-transform" />
          </button>
          <p className="text-center font-condensed text-white text-sm font-semibold mt-3"><span className="text-[#3ddc84]">80% everyday care</span> · <span className="text-[#ffd60a]">20% catastrophic protection</span></p>
          <p className="text-center font-condensed text-gray-500 text-sm mt-1">The system is built wrong. The fix is simple.</p>
        </div>

        {/* THE SYSTEM IS RIGGED */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">⚡ THE SYSTEM IS RIGGED. THE FIX IS SIMPLE.</span><p className="text-gray-400 mb-3">People are paying <strong className="text-white">$10,000+ a year</strong> for health insurance they can't even use.</p><p className="text-gray-400 mb-3"><strong className="text-white">Here's what that looks like in real life:</strong></p><div className="grid md:grid-cols-2 gap-2 mb-4"><div className="bg-red-500/5 border-l-3 border-red-500 p-3 rounded">❌ Deductibles so high they might as well not exist</div><div className="bg-red-500/5 border-l-3 border-red-500 p-3 rounded">❌ Copays that punish people for getting help</div><div className="bg-red-500/5 border-l-3 border-red-500 p-3 rounded">❌ Networks that shrink every year</div><div className="bg-red-500/5 border-l-3 border-red-500 p-3 rounded">❌ Bills that show up months later</div><div className="bg-red-500/5 border-l-3 border-red-500 p-3 rounded">❌ Denied claims</div><div className="bg-red-500/5 border-l-3 border-red-500 p-3 rounded">❌ Endless paperwork</div></div><p className="text-gray-400 mb-3"><strong className="text-white">A system designed to delay, deny, and exhaust people until they give up.</strong></p><p className="text-gray-400 mb-3">People are angry — and they're right to be.<br />The system is failing families, workers, students, elders, and small businesses.</p><p className="text-gray-400 mb-3"><strong className="text-white">This system wasn't built for you.<br />It was built to protect profits.</strong></p><p className="text-[#3ddc84] font-display text-3xl mt-8">TeleCARE is the alternative.</p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* WHAT TeleCARE IS NOT */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">🚫 CLARITY</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> What TeleCARE Is Not</h2><p className="text-gray-400 mb-4">To avoid confusion, here's what TeleCARE is not:</p><div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4"><div className="bg-white/5 border border-[#3ddc84]/20 rounded-full py-2 px-4 text-center font-condensed text-gray-400 text-sm"><strong className="text-[#ffd60a]">Not</strong> insurance</div><div className="bg-white/5 border border-[#3ddc84]/20 rounded-full py-2 px-4 text-center font-condensed text-gray-400 text-sm"><strong className="text-[#ffd60a]">Not</strong> a government program</div><div className="bg-white/5 border border-[#3ddc84]/20 rounded-full py-2 px-4 text-center font-condensed text-gray-400 text-sm"><strong className="text-[#ffd60a]">Not</strong> a pilot</div><div className="bg-white/5 border border-[#3ddc84]/20 rounded-full py-2 px-4 text-center font-condensed text-gray-400 text-sm"><strong className="text-[#ffd60a]">Not</strong> a new bureaucracy</div><div className="bg-white/5 border border-[#3ddc84]/20 rounded-full py-2 px-4 text-center font-condensed text-gray-400 text-sm"><strong className="text-[#ffd60a]">Not</strong> a replacement for hospitals</div><div className="bg-white/5 border border-[#3ddc84]/20 rounded-full py-2 px-4 text-center font-condensed text-gray-400 text-sm"><strong className="text-[#ffd60a]">Not</strong> a telehealth company</div></div><p className="text-gray-400"><strong className="text-white">TeleCARE is the care layer people should've had all along.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* THE 80/20 TRUTH */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">📊 80/20 TRUTH</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> The 80/20 Truth About Healthcare</h2><p className="text-gray-400 mb-3">Here's the part insurance companies don't want people to understand:</p><p className="text-gray-400 mb-3"><strong className="text-white">80% of healthcare is simple, predictable, and telehealth‑ready.</strong><br /><strong className="text-white">80% of insured Americans never use hospitalization or specialty care.</strong></p><p className="text-gray-400 mb-3"><strong className="text-white">This is the care people actually need most of the time:</strong></p><div className="grid md:grid-cols-2 gap-2 mb-4"><div className="bg-[#3ddc84]/5 p-2 rounded">✓ Primary care</div><div className="bg-[#3ddc84]/5 p-2 rounded">✓ Urgent care</div><div className="bg-[#3ddc84]/5 p-2 rounded">✓ Mental health</div><div className="bg-[#3ddc84]/5 p-2 rounded">✓ Chronic care</div><div className="bg-[#3ddc84]/5 p-2 rounded">✓ Prescriptions</div><div className="bg-[#3ddc84]/5 p-2 rounded">✓ Preventive care</div><div className="bg-[#3ddc84]/5 p-2 rounded">✓ Dental & vision</div><div className="bg-[#3ddc84]/5 p-2 rounded">✓ Care navigation</div></div><p className="text-gray-400 italic mb-3">This is the 80% — the part that should be easy and affordable.</p><p className="text-gray-400 mb-3"><strong className="text-white">The remaining 20% is different — rare, but expensive:</strong></p><div className="grid md:grid-cols-2 gap-2"><div className="bg-[#ffd60a]/5 p-2 rounded">→ Hospitalizations</div><div className="bg-[#ffd60a]/5 p-2 rounded">→ Surgeries</div><div className="bg-[#ffd60a]/5 p-2 rounded">→ Specialists</div><div className="bg-[#ffd60a]/5 p-2 rounded">→ Emergency trauma</div><div className="bg-[#ffd60a]/5 p-2 rounded">→ Advanced imaging</div></div></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* THE PROBLEM */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">⚠️ THE PROBLEM</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> The Problem</h2><p className="text-gray-400 mb-3"><strong className="text-white">Insurance bundles the 80% and the 20% together…<br />…and charges people <strong className="text-red-500">$10,000+ a year</strong> for the whole thing.</strong></p><p className="text-gray-400 mb-3">Even though most people never use the expensive part.</p><p className="text-gray-400 mb-3">You're paying <strong className="text-red-500">$10,000 a year for protection you rarely use</strong> — instead of <strong className="text-[#3ddc84]">$600 for care you need every day.</strong></p><p className="text-gray-400 mb-3">That's why:</p><ul className="list-disc pl-6 text-gray-400 mb-4 columns-2"><li>Care gets delayed</li><li>Problems get worse</li><li>ER visits go up</li><li>Costs explode</li></ul><p className="text-gray-400"><strong className="text-white">The system is working exactly as designed — just not for you.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* THE SIMPLE FIX */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">🔧 THE SIMPLE FIX</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> The Simple Fix</h2><p className="text-gray-400 mb-3"><strong className="text-white">The solution is straightforward:</strong></p><p className="text-2xl font-display text-white text-center mb-6">Separate everyday care from catastrophic protection.</p><div className="flex flex-wrap justify-center gap-5 mb-8"><div className="bg-[#3ddc84] text-[#080d1a] px-8 py-5 rounded-full font-bold text-xl">TeleCARE handles the 80%</div><div className="bg-[#ffd60a] text-[#080d1a] px-8 py-5 rounded-full font-bold text-xl">Insurance handles the 20%</div></div><p className="text-center text-gray-400 text-xl">Telehealth delivers 80% of healthcare at a fraction of the cost — roughly <strong className="text-[#3ddc84]">1/14th</strong>.</p><p className="text-center text-2xl text-white mt-5">That's it.</p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* WHAT TeleCARE IS */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">🏥 WHAT TeleCARE IS</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> What TeleCARE Is</h2><p className="text-gray-400 mb-3">TeleCARE is a statewide, open telehealth network that delivers the care most people need — without the insurance middlemen.</p><p className="text-gray-400 mb-3"><strong className="text-white">Here's what TeleCARE includes:</strong></p><div className="grid md:grid-cols-2 gap-2 mb-4"><div className="bg-[#3ddc84]/10 p-2 rounded">Primary care</div><div className="bg-[#3ddc84]/10 p-2 rounded">Urgent care</div><div className="bg-[#3ddc84]/10 p-2 rounded">Mental health</div><div className="bg-[#3ddc84]/10 p-2 rounded">Chronic care</div><div className="bg-[#3ddc84]/10 p-2 rounded">Prescriptions</div><div className="bg-[#3ddc84]/10 p-2 rounded">Dental & vision</div><div className="bg-[#3ddc84]/10 p-2 rounded">Preventive care</div><div className="bg-[#3ddc84]/10 p-2 rounded">Care navigation</div></div><p className="text-gray-400 mb-3"><strong className="text-white">And here's what it costs:</strong><br /><span className="font-display text-4xl text-[#3ddc84]">~$600 per year</span> — not $10,000+.</p><p className="text-gray-400">No claims<br />No networks<br />No prior authorization<br /><strong className="text-white">Just care.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* WHAT INSURANCE BECOMES */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">🛡️ WHAT INSURANCE BECOMES</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> What Insurance Becomes</h2><p className="text-gray-400 mb-3">Insurance goes back to what it was always meant to be:</p><p className="text-gray-400 mb-3"><strong className="text-white">Protection — not the front door.</strong></p><p className="text-gray-400 mb-3"><strong className="text-white">It covers:</strong></p><ul className="list-disc pl-6 text-gray-400 mb-4"><li>Hospitalizations</li><li>Surgeries</li><li>Catastrophic events</li><li>High‑cost specialty care</li></ul><p className="text-gray-400 italic">Rare — but necessary.</p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* THE 80/20 CARE ENGINE */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">⚙️ THE 80/20 CARE ENGINE</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> The 80/20 Care Engine</h2><div className="bg-[#3ddc84]/10 border-l-4 border-[#3ddc84] p-6 rounded-r-lg mb-4"><p className="text-xl"><strong className="text-[#3ddc84]">TeleCARE handles the 80%.</strong><br /><strong className="text-[#ffd60a]">Insurance handles the 20%.</strong><br /><strong className="text-[#3ddc84]">TeleCARE generates the savings that make the 20% affordable.</strong></p></div><p className="text-gray-400"><strong className="text-white">This is how we finally make universal care possible.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* WHY THIS WORKS FINANCIALLY */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">💰 WHY THIS WORKS FINANCIALLY</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> Why This Works Financially</h2><p className="text-gray-400 mb-3">When TeleCARE handles everyday care, the entire system gets cheaper.</p><p className="text-gray-400 mb-3"><strong className="text-white">Here's what drops:</strong></p><div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"><div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed">ER visits</div><div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed">Hospitalizations</div><div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed">Readmissions</div><div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed">Insurance claims</div><div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed">Premiums</div><div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed">Medicaid costs</div><div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed">Medicare costs</div><div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed">ACA subsidies</div></div><p className="text-gray-400 mb-3"><strong className="text-white">And here's what stabilizes:</strong></p><ul className="list-disc pl-6 text-gray-400 mb-4"><li>Private insurance</li><li>Public budgets</li><li>Employer costs</li></ul><p className="text-gray-400 mb-3">Healthy people cost less.<br />Simple systems scale.</p><p className="text-gray-400 mb-3">Telehealth shrinks the cost of the entire system.<br />Insurance protects against the worst events.</p><p className="text-gray-400 mb-3"><strong className="text-white">Together, they create a system that is:</strong></p><div className="grid md:grid-cols-2 gap-4"><div className="bg-[#3ddc84]/5 border border-[#3ddc84]/20 rounded-lg p-4 text-center"><strong className="text-[#3ddc84] text-lg block">Affordable</strong>80% cost reduction + cascading savings</div><div className="bg-[#3ddc84]/5 border border-[#3ddc84]/20 rounded-lg p-4 text-center"><strong className="text-[#3ddc84] text-lg block">Scalable</strong>Works for 234 million Americans</div><div className="bg-[#3ddc84]/5 border border-[#3ddc84]/20 rounded-lg p-4 text-center"><strong className="text-[#3ddc84] text-lg block">Defensible</strong>Market‑based, not government‑mandated</div><div className="bg-[#3ddc84]/5 border border-[#3ddc84]/20 rounded-lg p-4 text-center"><strong className="text-[#3ddc84] text-lg block">Universal</strong>Accessible to everyone</div></div></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* WHY THE CURRENT SYSTEM IS SO EXPENSIVE */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">🏦 WHY IT'S SO EXPENSIVE</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> Why the Current System Is So Expensive</h2><p className="text-gray-400 mb-3">Insurance companies profit when:</p><ul className="list-disc pl-6 text-gray-400 mb-4 columns-2"><li>People avoid care</li><li>People delay care</li><li>People get confused</li><li>Claims get denied</li><li>Costs shift to patients</li></ul><p className="text-gray-400"><strong className="text-white">The system is working exactly as designed — just not for you.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* TeleCARE FLIPS THE INCENTIVES */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">🔄 FLIPS THE INCENTIVES</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> TeleCARE Flips the Incentives</h2><p className="text-gray-400 mb-3"><strong className="text-white">TeleCARE is built for people, not profits.</strong></p><p className="text-gray-400 mb-3"><strong className="text-white">We want:</strong></p><ul className="list-disc pl-6 text-gray-400 mb-4 columns-2"><li>People to get care early</li><li>Problems solved before they escalate</li><li>Stability, not crisis</li><li>Access, not barriers</li></ul><p className="text-gray-400"><strong className="text-white">This is how care should work.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* WHO TeleCARE HELPS */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">👥 WHO IT HELPS</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> Who TeleCARE Helps</h2><p className="text-gray-400 mb-4"><strong className="text-white">TeleCARE is built for everyone who's been left behind:</strong></p><div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4"><div className="bg-[#ffd60a]/5 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed text-white">Workers</div><div className="bg-[#ffd60a]/5 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed text-white">Students</div><div className="bg-[#ffd60a]/5 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed text-white">Parents</div><div className="bg-[#ffd60a]/5 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed text-white">Elders</div><div className="bg-[#ffd60a]/5 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed text-white">Veterans</div><div className="bg-[#ffd60a]/5 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed text-white">Small business owners</div><div className="bg-[#ffd60a]/5 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed text-white">Gig workers</div><div className="bg-[#ffd60a]/5 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed text-white">People between jobs</div><div className="col-span-2 bg-[#ffd60a]/5 border border-[#3ddc84]/20 rounded-lg p-3 text-center font-condensed text-white">People with insurance they can't afford to use</div></div><p className="text-gray-400"><strong className="text-white">This is a system for all of us.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* SUPPORTS PROVIDERS */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">👩‍⚕️ SUPPORTS PROVIDERS</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> TeleCARE Supports Providers — It Doesn't Replace Them</h2><p className="text-gray-400 mb-3">TeleCARE is the backbone, not another telehealth app.</p><p className="text-gray-400 mb-3"><strong className="text-white">Here's what providers get:</strong></p><ul className="list-disc pl-6 text-gray-400 mb-4 columns-2"><li>More patients</li><li>More stability</li><li>Less admin burden</li><li>Better coordination</li><li>A shared system of record</li><li>A statewide network</li></ul><p className="text-gray-400">At scale, TeleCARE can even cover the monthly cost of care access.</p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* ONE NETWORK */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">🔗 ONE NETWORK</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> One Network. One System. One Entry Point.</h2><p className="text-gray-400 mb-4"><strong className="text-white">TeleCARE connects the entire care ecosystem:</strong></p><div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4"><div className="bg-white/5 p-2 rounded text-center text-gray-400">Clinics</div><div className="bg-white/5 p-2 rounded text-center text-gray-400">Telehealth providers</div><div className="bg-white/5 p-2 rounded text-center text-gray-400">Schools</div><div className="bg-white/5 p-2 rounded text-center text-gray-400">Senior centers</div><div className="bg-white/5 p-2 rounded text-center text-gray-400">Churches</div><div className="bg-white/5 p-2 rounded text-center text-gray-400">Shelters</div><div className="bg-white/5 p-2 rounded text-center text-gray-400">Food banks</div><div className="bg-white/5 p-2 rounded text-center text-gray-400">Campuses</div><div className="bg-white/5 p-2 rounded text-center text-gray-400">County programs</div></div><p className="text-gray-400 mb-3">People can enter from anywhere.</p><p className="text-gray-400"><strong className="text-white">One coordinated system instead of fragmentation.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* WHY NOW */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">⏰ WHY NOW</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> Why TeleCARE Matters Now</h2><p className="text-gray-400 mb-3"><strong className="text-white">People are losing:</strong></p><ul className="list-disc pl-6 text-gray-400 mb-4 columns-2"><li>Care</li><li>Housing</li><li>Food</li><li>Income</li><li>Stability</li></ul><p className="text-gray-400 mb-3"><strong className="text-white">Meanwhile:</strong></p><ul className="list-disc pl-6 text-gray-400 mb-4"><li>Cities are overwhelmed</li><li>Public health systems are stretched</li><li>Providers are disconnected</li></ul><p className="text-gray-400 mb-3"><strong className="text-white">TeleCARE creates the missing layer:</strong></p><ul className="list-disc pl-6 text-gray-400"><li>One open network</li><li>One shared system</li><li>One affordable entry point</li><li>One statewide safety net</li></ul></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* PHIER-POWERED */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">⚡ PHIER-POWERED</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> What Makes It PHIER‑Powered</h2><p className="text-gray-400 mb-3"><strong className="text-white">TeleCARE is the care layer.<br />PHIERS is the power layer.</strong></p><p className="text-gray-400 mb-3"><strong className="text-white">Together they add:</strong></p><ul className="list-disc pl-6 text-gray-400 mb-4"><li><strong className="text-[#3ddc84]">PHIERSale</strong> — Lower cost of living</li><li><strong className="text-[#3ddc84]">PHIERWorks</strong> — Income + job pathways</li><li><strong className="text-[#3ddc84]">PHIERPlace</strong> — Referral + access system</li><li><strong className="text-[#3ddc84]">Shared Case Management</strong> — One system across organizations</li></ul><p className="text-gray-400">Care + stability + economic support — all connected.</p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* BUILT TO SCALE */}
        <div className="mb-12"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">📈 BUILT TO SCALE</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> Built to Scale</h2><p className="text-gray-400 mb-4"><strong className="text-white">TeleCARE can be deployed:</strong></p><div className="flex flex-wrap justify-center gap-3 mb-4"><span className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-full px-5 py-2 font-condensed text-gray-300">Statewide</span><span className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-full px-5 py-2 font-condensed text-gray-300">Countywide</span><span className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-full px-5 py-2 font-condensed text-gray-300">Citywide</span><span className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-full px-5 py-2 font-condensed text-gray-300">Campus‑wide</span><span className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-full px-5 py-2 font-condensed text-gray-300">Regionally</span><span className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-full px-5 py-2 font-condensed text-gray-300">Nationally</span></div><p className="text-gray-400"><strong className="text-white">Any system can adopt it.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* ONE SENTENCE VERSION */}
        <div className="mb-12 text-center"><span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">🎯 IN ONE SENTENCE</span><h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4"><span className="text-[#ffd60a]">⭐</span> The One‑Sentence Version</h2><p className="text-xl leading-relaxed max-w-[800px] mx-auto bg-[#ffd60a]/5 p-8 rounded-xl text-gray-300"><strong className="text-white">TeleCARE is the PHIER‑powered, people‑first care engine that delivers the 80% of healthcare people actually use for ~$600/year — while insurance covers the rare 20% — cutting costs, expanding access, and finally making universal care possible.</strong></p></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* FINAL CTA */}
        <div className="text-center my-16"><h2 className="text-[#3ddc84] text-3xl md:text-4xl font-display">Congress could authorize this tomorrow.</h2><p className="text-2xl text-[#ffd60a] font-display my-5">They just haven't had to.</p><p className="text-lg text-gray-400 max-w-[600px] mx-auto mb-6">Once you separate care from catastrophe, the math becomes simple — and universal coverage becomes possible.</p><p className="text-xl text-white font-bold mb-8">Sign the petition. Make them listen.</p><div className="flex flex-wrap justify-center gap-5"><Link href="/petition" className="px-8 py-4 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all text-lg">✍ Sign the Petition</Link><Link href="/simple-math" className="px-8 py-4 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all text-lg">📊 SEE THE MATH</Link></div></div>

        {/* PAGE NAVIGATION */}
        <div className="flex justify-between mt-8 pt-8 border-t border-[#3ddc84]/20"><Link href="/solutions" className="font-condensed font-bold text-[#3ddc84]">← Back to 5D Solutions</Link><Link href="/donate" className="font-condensed font-bold text-[#3ddc84]">Donate →</Link></div>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-12 px-6 border-t border-[#3ddc84]/10 bg-[#0d1525]"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-70" /><div className="font-condensed font-bold text-gray-400 mb-1">PHIERS is a people's movement — not a company, not a product.</div><div className="text-sm text-gray-500 mb-4">Built by regular people who are done waiting.</div><div className="max-w-[500px] mx-auto mb-6"><p className="font-condensed text-gray-400">Energy without power fails.<br />PHIERStorm is the power.<br /><span className="text-gray-500">PHIERS.org — a catalyst for the change we've been waiting for.</span><br /><span className="text-gray-500">The only thing missing is you.</span></p></div><div className="max-w-[560px] mx-auto p-5 border border-[#3ddc84]/15 rounded-lg mb-6"><p className="font-condensed text-gray-500 text-xs uppercase tracking-wide mb-2">Built by</p><p className="font-condensed font-bold text-white">Will Price | Founder &amp; Chief Solutions Architect</p><p className="font-condensed text-gray-400 text-sm mb-3">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending and built the lever to fix it. Building this since 2009.</p><button onClick={() => setWillModalOpen(true)} className="font-condensed text-[#3ddc84] text-sm border-b border-[#3ddc84]/30">👤 Meet the Architect →</button></div><div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-6"><Link href="/crisis" className="text-gray-500 text-sm hover:text-[#3ddc84]">The Crisis</Link><Link href="/simple-math" className="text-gray-500 text-sm hover:text-[#3ddc84]">Simple Math</Link><Link href="/solutions" className="text-gray-500 text-sm hover:text-[#3ddc84]">5D Solutions</Link><Link href="/telecare" className="text-gray-500 text-sm hover:text-[#3ddc84]">Telehealth</Link><Link href="/no-war" className="text-gray-500 text-sm hover:text-[#3ddc84]">No War / No Draft</Link><Link href="/organizers" className="text-gray-500 text-sm hover:text-[#3ddc84]">Organizers</Link><Link href="/unions" className="text-gray-500 text-sm hover:text-[#3ddc84]">Unions</Link><Link href="/donate" className="text-gray-500 text-sm hover:text-[#3ddc84]">Donate</Link><Link href="/faq" className="text-gray-500 text-sm hover:text-[#3ddc84]">FAQ</Link><Link href="/about" className="text-gray-500 text-sm hover:text-[#3ddc84]">About</Link></div><div className="text-xs text-gray-600">Not built for profit. Not built for power. Built for We the People — by people who refused to stop.<br />📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a> · 📞 (916) 306-8967<br />© PHIERS.org — Original Concept Since 2009. All Rights Reserved.<br /><span className="text-[0.7rem]">PHIERS™ · PHIERSale™ · PHIERWorks™ · PHIERPlace™ — Protected marks established 2009–2025.</span></div></footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>

      {/* Image Modal */}
      <AnimatePresence>{imageModalOpen && (<motion.div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}><button className="absolute top-5 right-7 text-white text-3xl cursor-pointer bg-black/50 border border-white/20 w-10 h-10 rounded-full" onClick={closeModal}>✕</button><img src={modalImageSrc} alt="" className="max-w-[90vw] max-h-[90vh] rounded-lg border border-[#3ddc84]/20" /></motion.div>)}</AnimatePresence>

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
