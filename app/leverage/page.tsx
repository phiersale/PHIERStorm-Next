// app/leverage/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function LeveragePage() {
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

  const loadVideo = (videoId: string) => {
    const container = document.getElementById('video-container')
    if (container && !container.querySelector('iframe')) {
      const iframe = document.createElement('iframe')
      iframe.setAttribute('frameBorder', '0')
      iframe.setAttribute('allowFullScreen', '')
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
      iframe.className = 'absolute inset-0 w-full h-full rounded-xl'
      container.innerHTML = ''
      container.appendChild(iframe)
    }
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

      <main className="pt-20 pb-16 max-w-[860px] mx-auto px-6">
        {/* HERO */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={120} height={120} className="opacity-85" /></div>
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Congressional Leverage</span>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mt-3 mb-4">When People Organize,<br /><span className="text-[#3ddc84]">Congress Has No Choice.</span></h1>
          <p className="text-lg text-gray-400 max-w-[680px] mx-auto">
            The anger is justified. This is what you do with it.<br />
            A small, organized group can force Congress to act — peacefully, democratically, and fast.<br />
            This is already building — district by district across the country. Organizers are already building toward thresholds in early districts.<br />
            War abroad. Economic pressure at home. And Congress still isn't responding.<br />
            We can't wait for the next election. Organized constituents are the only thing that makes Congress act now — not later.
          </p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* HOW IT WORKS */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Organized People Are <span className="text-[#3ddc84]">Impossible to Ignore.</span></h2>
          <p className="text-gray-400 mb-4">Congress doesn't respond to passion alone. They respond to political consequences inside their own districts.<br />
          That's the only thing that has ever moved them. And it's exactly what PHIERS is built to create — right now, not after the next election.</p>
          <p className="font-bold text-[#3ddc84] mb-4">Here's the mechanics:</p>

          <div className="bg-[#111d35] border border-[#3ddc84]/20 border-l-4 border-l-[#3ddc84] rounded-r-lg p-7 mb-4">
            <h3 className="font-condensed font-bold text-xl text-white mb-2">1. Your name gets counted — in your district</h3>
            <p className="text-gray-400">A real, on-the-record count tied directly to your representative — not a symbolic petition that vanishes.</p>
          </div>
          <div className="bg-[#111d35] border border-[#3ddc84]/20 border-l-4 border-l-[#3ddc84] rounded-r-lg p-7 mb-4">
            <h3 className="font-condensed font-bold text-xl text-white mb-2">2. When 1,500 people in a district are organized</h3>
            <p className="text-gray-400">A public town hall is triggered. Your representative is required to show up — and answer, on the record, in front of the people they represent. In the coming weeks — not after the next election.</p>
          </div>
          <div className="bg-[#111d35] border border-[#3ddc84]/20 border-l-4 border-l-[#3ddc84] rounded-r-lg p-7 mb-4">
            <h3 className="font-condensed font-bold text-xl text-white mb-2">3. When hundreds of districts hit this at the same time</h3>
            <p className="text-gray-400">Congress faces coordinated constituent pressure at a scale they cannot ignore without immediate democratic consequences — not theoretical future ones.</p>
          </div>
          <div className="bg-[#111d35] border border-[#3ddc84]/20 border-l-4 border-l-red-500 rounded-r-lg p-7">
            <h3 className="font-condensed font-bold text-xl text-red-500 mb-2">4. Representatives who don't do what their constituents want</h3>
            <p className="text-gray-400">Get replaced by someone who will. In the coming weeks — not after the next election. We are not waiting.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* TEETH IMAGE */}
        <div className="text-center my-10">
          <button onClick={() => openModal('/images/Power_Concedes_Nothing_TEETH.png')} className="cursor-pointer">
            <Image
              src="/images/Power_Concedes_Nothing_TEETH.png"
              alt="Power concedes nothing without a demand that has teeth"
              width={500}
              height={300}
              className="max-w-[60%] h-auto mx-auto rounded-lg border-2 border-[#3ddc84]/20 hover:scale-[1.02] transition-transform"
            />
          </button>
          <p className="text-gray-500 text-sm italic mt-2">Power concedes nothing without a demand that has teeth.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* VIDEO SECTION */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">In Practice</span>
          <div className="font-condensed text-lg text-white text-center mb-4 font-bold">Watch what happens when pressure becomes impossible to ignore:</div>

          <div className="cursor-pointer" onClick={() => loadVideo('xy3F9ZWbgS8')}>
            <div id="video-container" className="relative aspect-video rounded-xl overflow-hidden bg-black max-w-[720px] mx-auto">
              <img
                src="/images/They_Dont_Have_To_Listen_UNTIL_THIS-Part3.png"
                alt="Watch: Congress: Get Out of the Way, Or Step Aside"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                <div className="w-[70px] h-[70px] rounded-full bg-[#3ddc84]/90 flex items-center justify-center text-3xl text-black">
                  ▶
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-blue-500 font-bold mt-4">Congress: Get Out of the Way, Or Step Aside — 4:44</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* RESEARCH + 3.5% */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Research</span>
          <p className="text-center text-gray-500 text-lg mb-4">This isn't theory. It's a pattern that repeats every time people organize at scale.</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">The Tipping Point Is <span className="text-[#3ddc84]">Smaller Than You Think.</span></h2>

          <div className="text-center my-10">
            <div className="font-display text-6xl md:text-8xl text-[#3ddc84] leading-tight mb-2">3.5%</div>
            <div className="font-condensed text-gray-500">That's the threshold. The point where organized people become impossible to stop.</div>
          </div>

          <p className="text-gray-400 mb-4">Harvard researcher Erica Chenoweth studied 323 social movements over more than a century and found one pattern that never broke:</p>
          <div className="bg-[#3ddc84]/5 border border-[#3ddc84]/20 border-l-4 border-l-[#3ddc84] rounded-r-lg p-6 my-6">
            <p className="font-bold text-white mb-2">When 3.5% of the population is actively organized and sustained, systemic change becomes historically inevitable.</p>
            <p className="text-gray-400">No campaign that crossed this threshold — ever — failed.</p>
          </div>

          <p className="text-gray-400 mb-4">3.5% of the United States is 11.6 million people.<br />
          We're targeting 100 million — people furious about the war, healthcare costs, jobs, veterans, wages, a government that stopped listening and won't stop spending their money on everything except them.</p>

          <p className="text-center font-bold text-[#3ddc84] text-2xl my-6">That's 9 times the threshold.</p>
          <p className="text-center text-gray-400">Historically, movements at this scale don't get stopped. And they don't wait.</p>

          <div className="text-center mt-8">
            <button onClick={() => openModal('/images/3.5pct_Erica_Chenoweth.jpg')} className="cursor-pointer">
              <Image
                src="/images/3.5pct_Erica_Chenoweth.jpg"
                alt="Harvard researcher Erica Chenoweth"
                width={400}
                height={250}
                className="max-w-[60%] h-auto mx-auto rounded-lg border-2 border-[#3ddc84]/20 hover:scale-[1.02] transition-transform"
              />
            </button>
            <p className="text-gray-500 text-sm italic mt-2">Harvard researcher Erica Chenoweth. 323 campaigns studied. The data is ironclad. Click to enlarge.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* CIVIC REALITY + BINARY CHOICE */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Civic Reality</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Every Representative <span className="text-[#3ddc84]">Faces the Same Choice. Now.</span></h2>
          <p className="text-gray-400 mb-4">This is a peaceful movement. The power isn't in anger alone — it's in organized anger with a mechanism behind it.<br />
          And that mechanism has a deadline.<br />
          We are not waiting for the next election cycle to end a war, prepare for economic depression, or force Congress to do the job they were elected to do.<br />
          When enough constituents organize inside a district, their representative has two options — and they need to choose now:</p>

          <div className="grid md:grid-cols-2 gap-5 my-8">
            <div className="bg-[#3ddc84]/10 border-2 border-[#3ddc84] rounded-lg p-6 text-center">
              <h3 className="font-condensed font-bold text-2xl text-[#3ddc84] mb-3">DO WHAT YOUR CONSTITUENTS WANT</h3>
              <p className="text-gray-300">Show up. Answer the questions. End the war. Address the crisis. Lead.<br />Be remembered as someone who acted when it mattered.</p>
            </div>
            <div className="bg-red-500/10 border-2 border-red-500 rounded-lg p-6 text-center">
              <h3 className="font-condensed font-bold text-2xl text-red-500 mb-3">DON'T</h3>
              <p className="text-gray-300">Refuse. Stay silent. Ignore the organized pressure inside your own district.<br />Get replaced by someone who will. We are not waiting.</p>
            </div>
          </div>

          <p className="text-center font-condensed font-bold text-white text-lg">They do what their constituents want — or they get replaced by someone who will.</p>
          <p className="text-center text-gray-500">That's not a campaign tactic. That's a civic requirement. And it's happening now.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* 230:1 ADVANTAGE */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Advantage</span>
          <p className="font-medium text-white mb-2">And when that organization happens, something else becomes clear:</p>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4">230 to 1.</h2>
          <p className="text-gray-400 mb-4">The average congressional district has roughly $1.95 billion in constituent pressure potential — organized voters, organized wallets, organized voices.<br />
          The average corporate lobbying budget: $8.5 million.</p>
          <p className="text-center font-bold text-[#3ddc84] text-2xl my-6">230:1. That's the constituent advantage when people coordinate.</p>
          <p className="text-center font-medium text-gray-300">That's why organized people always win when they coordinate. And why Congress knows it.</p>

          <div className="text-center mt-8">
            <button onClick={() => openModal('/images/LEVERAGE_Pwr_of_the_People.png')} className="cursor-pointer">
              <Image
                src="/images/LEVERAGE_Pwr_of_the_People.png"
                alt="Power of the People — 100M+ organized constituents"
                width={500}
                height={300}
                className="max-w-[60%] h-auto mx-auto rounded-lg border-2 border-[#3ddc84]/20 hover:scale-[1.02] transition-transform"
              />
            </button>
            <p className="text-gray-500 text-sm italic mt-2">Power of the People — what 100M+ organized constituents looks like against corporate lobbying.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* FINAL CTA */}
        <div className="text-center my-12">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Ready to <span className="text-[#3ddc84]">Make Congress Respond?</span></h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto mb-6">
            The anger is real. The cause is right. The mechanism is built. And the clock is running.<br />
            Your name — counted in your district — is where the pressure starts.<br />
            When enough districts organize at the same time, the pressure becomes impossible to outlast. Peaceful. Democratic. Immediate.<br />
            We are not waiting for November.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/petition" className="inline-block px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">
              ✍ Add Your Name →
            </Link>
            <Link href="/action" className="inline-block px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">
              All Actions →
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-3">It takes less than a minute.</p>
        </div>

        {/* PAGE NAVIGATION */}
        <div className="flex justify-between pt-8 mt-8 border-t border-[#3ddc84]/20">
          <Link href="/solutions" className="font-condensed font-bold text-[#3ddc84]">← Back to 5D Solutions</Link>
          <Link href="/organizers" className="font-condensed font-bold text-[#3ddc84]">Next: For Organizers →</Link>
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
