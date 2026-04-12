// app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ValidatedBy from '@/components/validated-by'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [willModalOpen, setWillModalOpen] = useState(false)

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('entryModalShown')
    if (!hasSeen) {
      setModalOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }, [])

  const closeEntryModal = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
    sessionStorage.setItem('entryModalShown', '1')
  }

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const playVideo = (which: string, src: string) => {
    const wrap = document.getElementById('wrap-' + which)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }

  return (
    <>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-[#080d1a] z-[99999] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEntryModal}
          >
            <motion.div
              className="max-w-[1000px] w-full text-center"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/Congress_Doesnt_Listen_to_You-3-Backpack.jpg"
                  alt="Congress doesn't have to listen to you. This is how you make them."
                  fill
                  className="object-cover"
                />
              </div>
              <button
                onClick={closeEntryModal}
                className="inline-block mt-4 px-7 py-2 bg-transparent text-[#3ddc84] border border-[#3ddc84]/70 rounded-full font-condensed font-semibold text-base tracking-wide hover:border-[#3ddc84] hover:bg-[#3ddc84]/10 transition-all"
              >
                Be Heard →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/95 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">PHIERS.org</Link>
          <div className="hidden md:block text-xs text-[#3ddc84] italic">When Americans coordinate, Congress has no choice.</div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/petition" className="hidden md:inline-block px-5 py-2 bg-red-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl p-2 border border-white/20 rounded-lg">{mobileMenuOpen ? '✕' : '☰'}</button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-16 left-0 right-0 bg-[#0d1525] border-b border-[#3ddc84]/20 z-40 p-5 max-h-[calc(100vh-64px)] overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="space-y-4">
              <Link href="/no-war" className="block p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 font-condensed font-bold text-center" onClick={() => setMobileMenuOpen(false)}>🕊 END THE WAR / NO DRAFT</Link>
              <details className="border-b border-white/10 pb-2">
                <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Understand the Fight</summary>
                <div className="space-y-2 pl-4 mt-2">
                  <Link href="/crisis" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🚨 The Crisis</Link>
                  <Link href="/simple-math" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📊 Simple Math</Link>
                  <Link href="/how-it-works" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>⚡ The Leverage</Link>
                  <Link href="/solutions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🔬 5D Solutions</Link>
                  <Link href="/telecare" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💡 TeleCARE</Link>
                </div>
              </details>
              <details className="border-b border-white/10 pb-2">
                <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Who We're For</summary>
                <div className="space-y-2 pl-4 mt-2">
                  <Link href="/organizers" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>✊ For Organizers</Link>
                  <Link href="/veterans" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🎖 Veterans</Link>
                  <Link href="/unions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💪 Union Strategy</Link>
                </div>
              </details>
              <details className="border-b border-white/10 pb-2">
                <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Resources</summary>
                <div className="space-y-2 pl-4 mt-2">
                  <Link href="/resources" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📚 Resource Hub</Link>
                  <Link href="/real-stories" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💬 Real Stories</Link>
                  <Link href="/faq" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>❓ FAQ</Link>
                  <Link href="/about" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📖 About</Link>
                </div>
              </details>
              <details className="border-b border-white/10 pb-2">
                <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Take Action</summary>
                <div className="space-y-2 pl-4 mt-2">
                  <Link href="/petition" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📋 Sign the Petition</Link>
                  <Link href="/donate" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💚 Donate</Link>
                  <Link href="/action" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📣 Take Action</Link>
                </div>
              </details>
              <Link href="/petition" className="block w-full py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-center rounded-lg mt-4" onClick={() => setMobileMenuOpen(false)}>✍ Sign Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 pb-16">
        <section className="relative pt-20 pb-12 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#3ddc84]/5 via-transparent to-transparent" />
          <div className="max-w-[900px] mx-auto relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex justify-center mb-6">
                <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={130} height={130} className="opacity-85" />
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-red-400">The Crisis Is Now</span>
              </span>
              <h1 className="mb-6">
                <span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-3">America Isn't Facing Five Crises.</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-[#3ddc84] tracking-tight">It's Facing One System That's Failing All of Them.</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
                Because Congress isn't doing its job — and nothing forces them to.<br />
                Healthcare. Wages. The economy. Politics. War.<br />
                They don't break separately. They break together.
              </p>
              <div className="max-w-[680px] mx-auto space-y-4 text-gray-500">
                <p>What looks like five different problems is one system — each piece feeding the others, each failure making the next one worse.</p>
                <p>And right now, that system is destabilizing — fast. When one part breaks, the consequences don't stay contained — they cascade.</p>
                <p>Congress isn't fixing it — not because it can't, but because it doesn't have to.</p>
              </div>
              <Link href="/how-it-works" className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-full font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">
                See How It Works →
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-12 max-w-[720px] mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-5 font-condensed">Choose Your Path</h3>
            <div className="max-w-[200px] mx-auto mb-6">
              <Image src="/images/fork_in_road_decision.jpg" alt="A fork in the road - choose your path" width={200} height={150} className="rounded-xl opacity-90" />
            </div>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Link href="/petition" className="w-full px-6 py-3 bg-white text-[#0a5c2e] border-2 border-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">I'm an individual — add my name</Link>
              <Link href="/organizers" className="w-full px-6 py-3 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">I represent a group or organization</Link>
            </div>
            <p className="text-gray-500 text-sm mt-4">Or keep scrolling to learn more.</p>
          </div>
        </section>

        <section className="px-4 py-8 max-w-[720px] mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-5 font-condensed">Before You Sign</h3>
            <div className="space-y-3 text-gray-400">
              <p><strong className="text-white">What this petition is:</strong> An online count of people in your district who want to participate in a coordinated civic effort.</p>
              <p><strong className="text-white">What you provide:</strong> Just your email and ZIP code.</p>
              <p><strong className="text-white">Why ZIP code matters:</strong> It connects you to your congressional district so your name is counted where it has real impact.</p>
              <p><strong className="text-white">How long it takes:</strong> About 10 seconds.</p>
              <p><strong className="text-white">What happens next:</strong> You'll receive a confirmation email and optional next steps. There is no obligation beyond being counted.</p>
              <p><strong className="text-white">Your district goal:</strong> 1,500 people. Your signature adds to your district's count.</p>
            </div>
            <div className="mt-6 text-center">
              <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#0a5c2e] border-2 border-[#0a5c2e] rounded-lg font-condensed font-bold hover:bg-gray-100 transition-all">✍ Ready to add your name? →</Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 max-w-[900px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-condensed">You are not powerless.</h2>
            <p className="text-xl text-gray-400 mb-8 font-medium">You just haven't had the right leverage yet.</p>
            <div className="max-w-[720px] mx-auto space-y-5 text-gray-400">
              <p className="text-lg">Congress ignores the public — <span className="text-red-500 font-semibold">because it can.</span></p>
              <p className="text-2xl text-white font-semibold">PHIERStorm is how we force that to change.</p>
              <p className="text-lg">PHIERStorm turns people into coordinated pressure Congress <span className="text-[#3ddc84] font-semibold">can't ignore</span> — <span className="text-red-500 font-semibold">or survive.</span></p>
              <p className="text-xl font-medium">This is how we force change.</p>
              <p className="text-[#8899bb] text-xl font-condensed">This will make sense in under 3 minutes.<br />Stay with it.</p>
            </div>
          </motion.div>
        </section>

        <section className="px-4 py-8 text-center">
          <p className="font-condensed font-bold text-gray-400 text-sm uppercase tracking-wide mb-4">If you watch one thing — watch this.</p>
          <div className="max-w-[480px] mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#3ddc84]/20 shadow-lg">
              <iframe src="https://www.youtube.com/embed/C2mMIx5yoyw?rel=0" title="How PHIERS Forces Congress to Respond" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
            </div>
            <p className="font-condensed text-gray-400 mt-3">1,500 people per district. 657,000 total. Built over 16 years.<br /><span className="text-[#3ddc84] font-bold">This is how we make Congress do its job.</span></p>
          </div>
        </section>

        <section className="px-4 py-16 max-w-[760px] mx-auto">
          <p className="font-condensed text-sm text-[#ffd60a] text-center tracking-wide mb-4">Built over 16 years. Proven math. Zero ideology.</p>
          <div className="text-center mb-10">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">How it works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Four steps. No ideology. Just power.</h2>
          </div>
          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center flex-shrink-0 font-condensed font-black text-xl">1</div>
              <div><div className="font-condensed font-bold text-xl text-white mb-1">People sign</div><div className="text-gray-400">Adding your name isn't symbolic. It's how we organize pressure.</div></div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center flex-shrink-0 font-condensed font-black text-xl">2</div>
              <div><div className="font-condensed font-bold text-xl text-white mb-1">We coordinate by district</div><div className="text-gray-400">Real people. Real numbers. Tied to the representatives who have to respond.</div></div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center flex-shrink-0 font-condensed font-black text-xl">3</div>
              <div><div className="font-condensed font-bold text-xl text-white mb-1">Pressure becomes unavoidable</div><div className="text-gray-400">When enough people act together, ignoring them becomes more dangerous than responding.</div></div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 font-condensed font-black text-xl">4</div>
              <div><div className="font-condensed font-bold text-xl text-red-500 mb-1">Congress responds — or gets replaced</div><div className="text-gray-400">That's how leverage works.</div></div>
            </div>
          </div>
          <p className="font-condensed font-bold text-center text-white text-xl mt-10">This is not theory. This is how change has always worked.</p>
          <div className="text-center mt-8">
            <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#0a5c2e] border-2 border-[#0a5c2e] rounded-lg font-condensed font-extrabold hover:bg-gray-100 transition-all">✍ Add Your Name →</Link>
          </div>
        </section>

        <section className="px-4 py-16 bg-[#0a1628] border-y border-[#3ddc84]/10">
          <div className="max-w-[760px] mx-auto text-center">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The math is proven</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">1,500 people × 438 congressional districts = ~650,000 people.</h2>
            <p className="text-xl text-white font-semibold mb-4">That's not millions. That's not everyone. That's enough people — in the right places — at the same time.</p>
            <p className="text-gray-400 mb-4">History shows something powerful: you don't need everyone to create change.</p>
            <p className="font-condensed font-bold text-[#3ddc84] text-xl mb-4">Around 3.5% of a population — organized and sustained — has consistently been enough to tip the balance.</p>
            <p className="text-gray-400 mb-4">But here's the difference:</p>
            <p className="font-condensed font-bold text-2xl text-white mb-4">PHIERS doesn't try to organize the whole country at once.</p>
            <p className="text-gray-400 mb-4">It organizes people where power actually lives: inside each congressional district.</p>
            <p className="font-condensed font-bold text-[#3ddc84] text-xl mb-4">Around 1,500 people in a district is enough to create pressure a representative cannot ignore.</p>
            <p className="text-gray-400 mb-4">Not because it's a national percentage — but because it hits them exactly where they are accountable.</p>
            <p className="font-condensed font-bold text-white text-lg mb-4">Same principle.<br />More precise execution.<br />Faster results.</p>
            <p className="font-condensed font-bold text-[#3ddc84] text-lg mb-4">You don't need everyone.<br />Just enough people — organized in the same place.</p>
            <p className="text-gray-400 text-sm mb-4">This isn't about reaching everyone. It's about reaching the point where ignoring you is no longer an option.</p>
            <p className="font-condensed font-bold text-gray-400">Eight million people showed up for No Kings — and Congress waited it out. No district organization. No specific demands. Nothing changed. PHIERS converts that same energy into pressure they can't survive. With a fraction of the people.</p>
            <div className="mt-8 max-w-[380px] mx-auto">
              <Image src="/images/3.5pct_Erica_Chenoweth.jpg" alt="3.5% — Chenoweth Research" width={380} height={250} className="rounded-lg border border-white/10 cursor-pointer hover:scale-[1.02] transition-transform" />
              <p className="text-gray-500 text-xs mt-2">Harvard researcher Erica Chenoweth. The data is ironclad.</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 max-w-[800px] mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-[#3ddc84]/20">
            <div className="video-wrap" id="wrap-cascade" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <div className="absolute inset-0 bg-cover bg-center cursor-pointer flex items-center justify-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/jMU6LKEBzbs/hqdefault.jpg')" }} onClick={() => playVideo('cascade', 'https://www.youtube.com/embed/jMU6LKEBzbs?autoplay=1&rel=0')}>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-5xl text-white/90 cursor-pointer">▶</div>
              </div>
            </div>
          </div>
          <div className="bg-[#0a1020] p-5 border-x border-b border-[#3ddc84]/20 rounded-b-xl text-center">
            <div className="font-display text-xl text-[#3ddc84] mb-1">🎥 The Cascade Mechanism</div>
            <div className="font-condensed text-gray-400">Why Congress can't ignore PHIERS. One person saves $50 → funds 148 → $1.1B cascade.</div>
          </div>
        </section>

        <section className="px-4 py-16 text-center">
          <div className="max-w-[680px] mx-auto">
            <Image src="/images/PHIERStorm_the_Movement.png" alt="PHIERStorm — The Movement" width={200} height={120} className="mx-auto mb-6 opacity-85" />
            <p className="font-display text-3xl font-extrabold text-white mb-4">When people are organized, everything changes.</p>
            <p className="text-gray-400 text-lg">The same leverage that fixes healthcare<br />can end wars Congress never voted on<br />and force real accountability.</p>
            <p className="font-condensed font-bold text-[#3ddc84] text-xl mt-4">Same people. Same pressure. Same outcome.</p>
            <div className="mt-8">
              <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#0a5c2e] border-2 border-[#0a5c2e] rounded-lg font-condensed font-extrabold hover:bg-gray-100 transition-all">✍ Add Your Name →</Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 text-center">
          <div className="max-w-[720px] mx-auto">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Why this is different</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Why this hasn't worked before</h2>
            <p className="text-gray-400 text-lg mb-3"><strong className="text-white">Protests create attention.</strong> Petitions create signals.</p>
            <p className="text-gray-400 text-lg"><strong className="text-white">PHIERS creates leverage.</strong></p>
            <p className="text-gray-400 text-lg mt-4">Because it doesn't just express frustration — it organizes it into something Congress can't ignore.</p>
          </div>
        </section>

        <section className="px-4 py-16 text-center">
          <div className="max-w-[600px] mx-auto">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">What signing actually does</span>
            <p className="text-xl text-white font-semibold mt-3 mb-4">Your name gets counted in your district. Not as a comment. Not as a like. As a number tied to your representative.</p>
            <p className="text-gray-400">When 1,500 people in your district sign, your representative gets called out — publicly. They show up and answer for it, or they face the consequences at the ballot box.</p>
            <p className="font-condensed font-bold text-[#3ddc84] text-xl mt-4">You're not signing a petition. You're pulling a lever.</p>
          </div>
        </section>

        <section className="px-4 py-16 bg-[#0a1628] border-y border-[#3ddc84]/10">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-12">
              <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Three kinds of power</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Three kinds of power.<br /><span className="text-[#3ddc84]">Working together.</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-7 h-full border-t-4 border-t-red-500">
                <div className="text-3xl mb-3">⚡</div>
                <div className="font-display text-2xl text-white mb-1">Political Power</div>
                <div className="text-gray-400 text-sm mb-3">Make Congress respond</div>
                <p className="text-gray-400 text-sm mb-3">When enough people act together, Congress has two choices: respond — or get replaced.</p>
                <div className="font-condensed font-bold text-[#3ddc84] text-sm pt-3 border-t border-white/10 mt-3">PHIERStorm creates that pressure.</div>
              </div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-7 h-full border-t-4 border-t-[#ffd60a]">
                <div className="text-3xl mb-3">💰</div>
                <div className="font-display text-2xl text-white mb-1">Economic Power</div>
                <div className="text-gray-400 text-sm mb-3">Make the math work</div>
                <p className="text-gray-400 text-sm mb-3">The system is already wasting trillions. Redirecting that money changes everything.</p>
                <div className="font-condensed font-bold text-[#3ddc84] text-sm pt-3 border-t border-white/10 mt-3">The math is undeniable. Congress knows it.</div>
              </div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-7 h-full border-t-4 border-t-[#3ddc84]">
                <div className="text-3xl mb-3">🛒</div>
                <div className="font-display text-2xl text-white mb-1">Consumer Power</div>
                <div className="text-gray-400 text-sm mb-3">Make the market respond</div>
                <p className="text-gray-400 text-sm mb-3">We don't just boycott. We organize how we spend — and outcompete broken systems.</p>
                <div className="font-condensed font-bold text-[#3ddc84] text-sm pt-3 border-t border-white/10 mt-3">That's how pressure becomes permanent.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pathos Endorsement Video - Restored */}
        <section className="px-4 py-16 max-w-[800px] mx-auto">
          <div className="text-center mb-8">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Watch This</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Why This Movement Matters</h2>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-[#3ddc84]/20">
            <div className="video-wrap" id="wrap-pathos" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <div className="absolute inset-0 bg-cover bg-center cursor-pointer flex items-center justify-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/KLu7USN_dao/hqdefault.jpg')" }} onClick={() => playVideo('pathos', 'https://www.youtube.com/embed/KLu7USN_dao?autoplay=1&rel=0')}>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-5xl text-white/90 cursor-pointer">▶</div>
              </div>
            </div>
          </div>
          <div className="bg-[#0a1020] p-5 border-x border-b border-[#3ddc84]/20 rounded-b-xl text-center">
            <div className="font-display text-xl text-[#3ddc84] mb-1">🎥 Pathos — "This changes everything"</div>
            <div className="font-condensed text-gray-400">The endorsement that proves PHIERS is the real deal.</div>
          </div>
        </section>

        <ValidatedBy defaultExpanded={true} />
        
        <section className="px-4 py-16 text-center">
          <div className="max-w-[600px] mx-auto bg-[#3ddc84]/5 border border-[#3ddc84]/20 rounded-xl p-6">
            <p className="font-condensed font-bold text-[#3ddc84] text-lg mb-2">What signing does</p>
            <p className="text-gray-400">Your name is counted in your congressional district.<br />When enough people sign, it creates visible pressure your representatives can't ignore.</p>
          </div>
        </section>

        <section className="px-4 py-16 text-center">
          <div className="max-w-[800px] mx-auto">
            <div className="font-display text-3xl text-white">You're already part of this.<br />You just didn't have a name for it.</div>
            <p className="text-gray-400 text-lg mt-4">PHIERS connects people who already care — and turns that energy into real leverage.</p>
            <p className="text-gray-400 text-lg mt-4">If you've protested, organized, boycotted, or felt like nothing works…<br />you're already part of this.</p>
            <p className="text-gray-400 text-lg mt-4">PHIERStorm is what gives that energy power.</p>
            <p className="font-condensed font-bold text-[#3ddc84] text-2xl mt-6">Energy without power fails.<br />PHIERStorm is the power.</p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-[600px] mx-auto border-2 border-[#3ddc84] rounded-xl p-10 text-center bg-gradient-to-br from-[#3ddc84]/5 to-transparent">
            <div className="font-display text-4xl text-white mb-6">This is how it starts.</div>
            <p className="text-xl text-gray-300">Your name.<br />Your district.<br />On the record.</p>
            <p className="text-gray-400 mt-4 mb-2">Counted. Delivered. Impossible to ignore.</p>
            <p className="text-white font-medium mb-8">This only works if we act together.</p>
            <p className="font-condensed text-[#8899bb] text-sm mb-6">We're just getting started. Your name isn't one of millions —<br />it's one of the first. That matters more.</p>
            <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#0a5c2e] border-2 border-[#0a5c2e] rounded-lg font-condensed font-extrabold hover:bg-gray-100 transition-all">✍ Sign the Petition →</Link>
          </div>
        </section>

        <section className="px-4 py-16 text-center">
          <div className="max-w-[1000px] mx-auto">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Go deeper</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Choose your next step.</h2>
            <p className="text-gray-400 mb-10">Start where you're most curious.</p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/how-it-works" className="block max-w-[260px] w-full p-6 rounded-xl bg-[#3ddc84]/10 border-2 border-[#3ddc84]/70 hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-condensed font-bold text-xl text-white mb-1">The Leverage</div>
                <div className="text-gray-300">How organized people become impossible to ignore.</div>
              </Link>
              <Link href="/telecare" className="block max-w-[260px] w-full p-6 rounded-xl bg-[#3ddc84]/10 border-2 border-[#3ddc84]/60 hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-2">💡</div>
                <div className="font-condensed font-bold text-xl text-white mb-1">The Solution</div>
                <div className="text-gray-300">See how PHIER-powered systems fix healthcare and fund everything.</div>
              </Link>
              <Link href="/no-war" className="inline-flex items-center gap-3 px-8 py-5 bg-red-600 text-white font-condensed font-bold text-xl rounded-xl hover:bg-red-700 transition-all">
                <span className="text-2xl">⚠️</span> ACT NOW — STOP THE WAR
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 text-center bg-[#0a1628]">
          <div className="max-w-[800px] mx-auto">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide opacity-70">Everything you need</span>
            <h2 className="text-3xl text-white opacity-85 mb-3">Explore the full system.</h2>
            <p className="text-gray-400 mb-2">If you want the full picture, it's all here.</p>
            <p className="text-gray-400 mb-8 opacity-80">One place. Everything connected.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['/crisis','/simple-math','/solutions','/telecare','/organizers','/veterans','/unions','/resources','/action','/donate','/faq','/about'].map((href,i)=>(
                <Link key={i} href={href} className="block px-4 py-3 bg-[#111d35] border border-[#3ddc84]/15 rounded-full text-gray-300 text-sm font-semibold text-center hover:border-[#3ddc84] hover:bg-[#3ddc84]/10 transition-all">
                  {['🚨 The Crisis','📊 Simple Math','🔬 5D Solutions','💡 TeleCARE','✊ For Organizers','🎖 Veterans','💪 Union Strategy','📚 Resource Hub','📣 Take Action','💚 Donate','❓ FAQ','📖 About'][i]}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

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

      <AnimatePresence>
        {willModalOpen && (
          <motion.div className="fixed inset-0 bg-[#080d1a] z-[99998] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setWillModalOpen(false)}>
            <div className="relative max-w-[720px] w-full bg-[#080d1a]/97 border-2 border-[#3ddc84]/35 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setWillModalOpen(false)} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#111d35] text-[#3ddc84] border-2 border-[#3ddc84] flex items-center justify-center text-xl hover:bg-[#3ddc84] hover:text-[#111d35] transition-all z-10">✕</button>
              <div className="flex flex-wrap">

            <div className="w-full md:w-[240px] min-h-[280px] overflow-hidden">
              <Image
                src="/images/Will_Price.jpg"
                alt="Will Price"
                width={240}
                height={280}
                className="w-full h-full min-h-[260px] object-cover object-[55%_top]"
              />
            </div>
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
