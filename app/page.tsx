// app/page.tsx
// HOMEPAGE - Complete with design system, modals, and original content

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import AnchorLine from '@/components/AnchorLine'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [congressModalOpen, setCongressModalOpen] = useState(false)

  useEffect(() => {
    const hasSeenFirst = sessionStorage.getItem('entryModalShown')
    const hasSeenCongress = sessionStorage.getItem('congressModalShown')
    
    if (!hasSeenFirst) {
      setModalOpen(true)
      document.body.style.overflow = 'hidden'
    } else if (!hasSeenCongress) {
      setCongressModalOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }, [])

  const closeEntryModal = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
    sessionStorage.setItem('entryModalShown', '1')
    
    const hasSeenCongress = sessionStorage.getItem('congressModalShown')
    if (!hasSeenCongress) {
      setCongressModalOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const closeCongressModal = () => {
    setCongressModalOpen(false)
    document.body.style.overflow = ''
    sessionStorage.setItem('congressModalShown', '1')
  }

  const playVideo = (videoId: string, src: string) => {
    const wrap = document.getElementById('wrap-' + videoId)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }

  return (
    <>
      {/* Modal 1 - Entry Modal */}
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
              <Button onClick={closeEntryModal}>Be Heard →</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="text-center pt-[100px] pb-12 px-6 max-w-[900px] mx-auto">
          <div className="relative h-[70px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={70}
              height={70}
              className="opacity-85"
            />
          </div>

          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">
            The Crisis Is Now
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            America Isn't Facing Five Crises.<br />
            It's Facing One System That's Failing All of Them.
          </h1>

          <p className="font-condensed text-xl text-gray-300 mb-5 max-w-[680px] mx-auto">
            Because Congress isn't doing its job — and nothing forces them to.<br />
            Healthcare. Wages. The economy. Politics. War.<br />
            They don't break separately. They break together.
          </p>

          <div className="max-w-[680px] mx-auto">
            <p className="text-body mb-4">
              What looks like five different problems is one system — each piece feeding the others, each failure making the next one worse.
            </p>

            <p className="text-body mb-6">
              And right now, that system is destabilizing — fast.<br />
              When one part breaks, the consequences don't stay contained — they cascade.
            </p>

            <p className="text-body mb-5">
              Congress isn't fixing it — not because it can't, but because it doesn't have to.
            </p>
          </div>

          <Button href="/homepage-teeth" variant="secondary" className="inline-block mt-4">
            See How It Works →
          </Button>
        </section>

        {/* Section 2 — Emotional Turn */}
        <section className="text-center py-20 px-6 max-w-[900px] mx-auto">
          <h2 className="font-condensed font-bold text-3xl md:text-4xl text-white mb-4">
            You are not powerless.
          </h2>

          <p className="text-xl text-gray-400 mb-8 font-medium">
            You just haven't had the right leverage yet.
          </p>

          <div className="max-w-[720px] mx-auto">
            <p className="text-lg text-gray-400 mb-4">
              Congress ignores the public — <span className="text-red font-semibold">because it can.</span>
            </p>

            <p className="text-xl text-white font-semibold mb-4">
              PHIERStorm is how we force that to change.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              PHIERStorm turns people into coordinated pressure Congress{' '}
              <span className="text-green font-semibold">can't ignore</span> —{' '}
              <span className="text-red font-semibold">or survive.</span>
            </p>

            <p className="text-base text-gray-400 mb-3 font-medium">
              This is how we force change.
            </p>

            <p className="font-condensed text-xl text-[#8899bb] mb-8 leading-relaxed">
              This will make sense in under 3 minutes.<br />Stay with it.
            </p>
          </div>
        </section>

        {/* Section 1B — Hero Video */}
        <section className="container section pt-0 text-center">
          <p className="font-condensed font-bold text-base text-gray-400 tracking-wider uppercase mb-4">
            If you watch one thing — watch this.
          </p>
          <div className="max-w-[480px] mx-auto">
            <div className="video-container">
              <div id="wrap-hero-video" className="video-wrapper cursor-pointer group" onClick={() => playVideo('hero-video', 'https://www.youtube.com/embed/C2mMIx5yoyw?autoplay=1&rel=0')}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/C2mMIx5yoyw/hqdefault.jpg')" }}>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-condensed text-sm text-gray-400 mt-3 leading-relaxed">
              1,500 people per district. 657,000 total. Built over 16 years.<br />
              <span className="text-green font-bold">This is how we make Congress do its job.</span>
            </p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Section 2 — How It Works */}
        <section className="container section" id="how-it-works">
          <span className="eyebrow">How it works</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Four steps. No ideology. Just power.</h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="font-display text-3xl text-green min-w-[50px]">1</div>
              <div>
                <div className="font-condensed text-xl text-white font-bold">People sign</div>
                <div className="text-body">Adding your name isn't symbolic. It's how we organize pressure.</div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="font-display text-3xl text-green min-w-[50px]">2</div>
              <div>
                <div className="font-condensed text-xl text-white font-bold">We coordinate by district</div>
                <div className="text-body">Real people. Real numbers. Tied to the representatives who have to respond.</div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="font-display text-3xl text-green min-w-[50px]">3</div>
              <div>
                <div className="font-condensed text-xl text-white font-bold">Pressure becomes unavoidable</div>
                <div className="text-body">When enough people act together, ignoring them becomes more dangerous than responding.</div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="font-display text-3xl text-red min-w-[50px]">4</div>
              <div>
                <div className="font-condensed text-xl text-white font-bold">Congress responds — or gets replaced</div>
                <div className="text-body">That's how leverage works.</div>
              </div>
            </div>
          </div>

          <p className="font-condensed font-bold text-center mt-8 text-white">
            This is not theory. This is how change has always worked.
          </p>
        </section>

        <hr className="border-green/20" />

        {/* Section 3 — Proof (3.5%) */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="eyebrow">The math is proven</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">1,500 people × 438 congressional districts = ~650,000 people.</h2>

            <p className="text-lg text-white font-semibold mb-4">
              That's not millions. That's not everyone.
              That's enough people — in the right places — at the same time.
            </p>

            <p className="text-body mb-4">History shows something powerful: you don't need everyone to create change.</p>

            <p className="font-condensed font-bold text-green text-xl my-4">
              Around 3.5% of a population — organized and sustained — has consistently been enough to tip the balance.
            </p>

            <p className="text-body mb-4">But here's the difference:</p>

            <p className="font-condensed font-bold text-2xl text-white my-4">
              PHIERS doesn't try to organize the whole country at once.
            </p>

            <p className="text-body mb-4">It organizes people where power actually lives: inside each congressional district.</p>

            <p className="font-condensed font-bold text-green text-xl my-4">
              Around 1,500 people in a district is enough to create pressure a representative cannot ignore.
            </p>

            <p className="text-body mb-4">Not because it's a national percentage — but because it hits them exactly where they are accountable.</p>

            <p className="font-condensed font-bold text-white text-lg my-4">
              Same principle.<br />
              More precise execution.<br />
              Faster results.
            </p>

            <p className="font-condensed font-bold text-green text-lg my-4">
              You don't need everyone.<br />
              Just enough people — organized in the same place.
            </p>

            <p className="text-sm text-gray-400 mt-3">
              This isn't about reaching everyone. It's about reaching the point where ignoring you is no longer an option.
            </p>

            <p className="font-condensed font-bold text-gray-400 mt-4">
              Eight million people showed up for No Kings — and Congress waited it out. No district organization. No specific demands. Nothing changed. PHIERS converts that same energy into pressure they can't survive. With a fraction of the people.
            </p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Section 7 — Video */}
        <section className="container section">
          <div className="video-container max-w-[800px] mx-auto">
            <div id="wrap-cascade" className="video-wrapper cursor-pointer group" onClick={() => playVideo('cascade', 'https://www.youtube.com/embed/jMU6LKEBzbs?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/jMU6LKEBzbs/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
            <div className="bg-bg-dark/95 p-4 border border-green/20 border-t-0 rounded-b-xl text-center">
              <div className="font-display text-xl text-green mb-1">🎥 The Cascade Mechanism</div>
              <div className="font-condensed text-gray-400 text-base">Why Congress can't ignore PHIERS. One person saves $50 → funds 148 → $1.1B cascade.</div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Section 4 — Bridge */}
        <section className="container section">
          <div className="max-w-[680px] mx-auto text-center">
            <div className="relative h-[120px] w-auto mb-5 flex justify-center">
              <Image
                src="/images/PHIERStorm_the_Movement.png"
                alt="PHIERStorm — The Movement"
                width={400}
                height={120}
                className="opacity-85"
              />
            </div>

            <p className="font-display text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-wide">
              When people are organized, everything changes.
            </p>

            <p className="text-body leading-relaxed">
              The same leverage that fixes healthcare<br />
              can end wars Congress never voted on<br />
              and force real accountability.
            </p>

            <p className="font-condensed font-bold text-green mt-4">
              Same people. Same pressure. Same outcome.
            </p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Section 5 — Why This Is Different */}
        <section className="container section">
          <span className="eyebrow">Why this is different</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why this hasn't worked before</h2>
          
          <div className="max-w-[720px] mx-auto text-left">
            <p className="text-body mb-2"><strong className="text-white">Protests create attention.</strong> Petitions create signals.</p>
            <p className="text-body mb-4"><strong className="text-white">PHIERS creates leverage.</strong></p>
            <p className="text-body mt-4">Because it doesn't just express frustration — it organizes it into something Congress can't ignore.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What signing actually does */}
        <section className="container section">
          <div className="max-w-[600px] mx-auto text-center">
            <span className="eyebrow">What signing actually does</span>
            <p className="text-lg text-white font-semibold mb-4">
              Your name gets counted in your district. Not as a comment. Not as a like. As a number tied to your representative.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When 1,500 people in your district sign, your representative gets called out — publicly. They show up and answer for it, or they face the consequences at the ballot box.
            </p>
            <p className="font-condensed font-bold text-green text-lg mt-4">
              You're not signing a petition. You're pulling a lever.
            </p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Section 8 — Three Kinds of Power */}
        <section className="bg-bg-dark border-y border-green/10 section" id="three-levers">
          <div className="container">
            <span className="eyebrow">Three kinds of power</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Three kinds of power.<br /><span className="text-green">Working together.</span></h2>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-bg-card border border-green/20 rounded-xl p-6 border-t-4 border-t-red">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-display text-2xl text-white mb-1">Political Power</div>
                <div className="text-gray-400 text-base mb-2">Make Congress respond</div>
                <p className="text-body text-sm">When enough people act together, Congress has two choices: respond — or get replaced.</p>
                <p className="text-body text-sm mt-3">PHIERStorm creates that pressure.</p>
              </div>

              <div className="bg-bg-card border border-green/20 rounded-xl p-6 border-t-4 border-t-gold">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-display text-2xl text-white mb-1">Economic Power</div>
                <div className="text-gray-400 text-base mb-2">Make the math work</div>
                <p className="text-body text-sm">The system is already wasting trillions. Redirecting that money changes everything.</p>
                <p className="text-body text-sm mt-3">The math is undeniable. Congress knows it.</p>
              </div>

              <div className="bg-bg-card border border-green/20 rounded-xl p-6 border-t-4 border-t-green">
                <div className="text-3xl mb-2">🛒</div>
                <div className="font-display text-2xl text-white mb-1">Consumer Power</div>
                <div className="text-gray-400 text-base mb-2">Make the market respond</div>
                <p className="text-body text-sm">We don't just boycott. We organize how we spend — and outcompete broken systems.</p>
                <p className="text-body text-sm mt-3">That's how pressure becomes permanent.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Section 6 — What Is PHIERS */}
        <section className="container section">
          <div className="max-w-[600px] mx-auto p-5 border border-green/20 rounded-xl bg-green/5 text-center">
            <p className="font-condensed font-bold text-green mb-3">
              What signing does
            </p>
            <p className="text-gray-400 leading-relaxed">
              Your name is counted in your congressional district.<br />
              When enough people sign, it creates visible pressure
              your representatives can't ignore.
            </p>
          </div>
        </section>

        <hr className="border-green/20" />

        <div id="learn-more"></div>
        <section className="container section" id="what-is-phiers">
          <div className="text-center max-w-[800px] mx-auto">
            <div className="font-display text-2xl md:text-3xl text-white">
              You're already part of this.<br />You just didn't have a name for it.
            </div>
            <p className="text-body mt-4">
              PHIERS connects people who already care — and turns that energy into real leverage.
            </p>
            <p className="text-body mt-4">
              If you've protested, organized, boycotted, or felt like nothing works…<br />
              you're already part of this.
            </p>
            <p className="text-body mt-4">
              PHIERStorm is what gives that energy power.
            </p>
            <p className="font-condensed font-bold text-green text-xl mt-6">
              Energy without power fails.<br />PHIERStorm is the power.
            </p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Section 9 — Final CTA */}
        <section className="container section" id="sign">
          <div className="text-center max-w-[600px] mx-auto">
            <div className="font-display text-3xl md:text-4xl text-white mb-6">This is how it starts.</div>
            
            <p className="text-lg leading-relaxed">
              Your name.<br />
              Your district.<br />
              On the record.
            </p>
            
            <p className="text-gray-400 my-4">
              Counted. Delivered. Impossible to ignore.
            </p>
            
            <p className="text-white my-4 font-medium">
              This only works if we act together.
            </p>

            <p className="font-condensed text-sm text-[#8899bb] mb-6">
              We're just getting started. Your name isn't one of millions —<br />it's one of the first. That matters more.
            </p>
            
            <Button href="/petition" variant="secondary" fullWidth>✍ Sign the Petition →</Button>
          </div>
        </section>

        <div className="h-[60px]"></div>
        <hr className="border-green/20" />

        {/* Go Deeper Section */}
        <section className="container section text-center">
          <span className="eyebrow">Go deeper</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Choose your next step.</h2>

          <p className="text-gray-400 mt-3">
            Start where you're most curious.
          </p>
        
          <div className="flex flex-wrap justify-center gap-5 mt-8">
            <Link href="/homepage-teeth" className="bg-green/10 border-2 border-green/70 rounded-xl p-5 max-w-[200px] text-center hover:bg-green/15 transition-all">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-condensed font-bold text-white text-lg">The Leverage</div>
              <div className="text-sm text-white/85">How organized people become impossible to ignore.</div>
            </Link>

            <Link href="/full-story" className="bg-green/10 border-2 border-green/60 rounded-xl p-5 max-w-[200px] text-center hover:bg-green/15 transition-all">
              <div className="text-3xl mb-2">💡</div>
              <div className="font-condensed font-bold text-white text-lg">The Solution</div>
              <div className="text-sm text-white/85">See how PHIER-powered systems fix healthcare and fund everything.</div>
            </Link>

            <Link href="/no-war" className="bg-red/10 border-2 border-red/70 rounded-xl p-5 max-w-[200px] text-center hover:bg-red/15 transition-all">
              <div className="text-3xl mb-2">🕊</div>
              <div className="font-condensed font-bold text-white text-lg">Stop the War</div>
              <div className="text-sm text-white/85">Congress funded a war nobody voted for. Here's how we stop it.</div>
            </Link>
          </div>
        </section>

        <hr className="border-green/20 max-w-[200px] mx-auto my-8" />

        {/* All Resources Grid */}
        <section className="container section text-center">
          <span className="eyebrow opacity-70">Everything you need</span>
          <h2 className="font-display text-2xl md:text-3xl text-white opacity-85 mb-4">Explore the full system.</h2>
          
          <p className="text-gray-400 mb-8">
            If you want the full picture, it's all here.
          </p>
          
          <p className="text-gray-400 mb-8 opacity-80">
            One place. Everything connected.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-[800px] mx-auto opacity-90">
            <Link href="/crisis" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">🚨 The Crisis</Link>
            <Link href="/simple-math" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">📊 Simple Math</Link>
            <Link href="/solutions" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">🔬 5D Solutions</Link>
            <Link href="/telecare" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">💡 TeleCARE</Link>
            <Link href="/organizers" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">✊ For Organizers</Link>
            <Link href="/veterans" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">🎖 Veterans</Link>
            <Link href="/unions" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">💪 Union Strategy</Link>
            <Link href="/resources" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">📚 Resource Hub</Link>
            <Link href="/action" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">📣 Take Action</Link>
            <Link href="/donate" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">💚 Donate</Link>
            <Link href="/faq" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">❓ FAQ</Link>
            <Link href="/about" className="block py-3 px-4 bg-bg-card border border-green/20 rounded-full text-sm font-semibold text-white text-center hover:border-green hover:bg-green/10 transition-all">📖 About</Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Will Price Modal */}
      <div id="will-modal" onClick={(e) => { if (e.target === e.currentTarget) document.getElementById('will-modal')?.style.setProperty('display', 'none') }} style={{ display: 'none' }} className="fixed inset-0 bg-black/88 z-[99998] flex items-center justify-center p-4">
        <div className="relative max-w-[720px] w-full bg-bg-dark/97 border-2 border-green/35 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
          <button onClick={() => document.getElementById('will-modal')?.style.setProperty('display', 'none')} aria-label="Close" className="absolute top-3 right-3 bg-[#111d35] text-green border-2 border-green rounded-full w-10 h-10 text-xl cursor-pointer flex items-center justify-center z-10 transition-all hover:bg-green hover:text-[#111d35]">
            ✕
          </button>

          <div className="flex flex-wrap items-stretch">
            <div className="flex-0 min-w-[240px] w-full max-w-full min-h-[280px] overflow-hidden md:max-w-[240px]">
              <Image src="/images/Will_Price.png" alt="Will Price — Founder & Chief Solutions Architect, PHIERS" width={240} height={260} className="w-full h-full min-h-[260px] object-cover object-[55%_top] block" />
            </div>
            <div className="flex-1 min-w-[240px] p-7 flex flex-col justify-center">
              <p className="font-condensed text-xs text-green uppercase tracking-[3px] mb-2">The Architect</p>
              <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1 tracking-wide">Will Price</h3>
              <p className="font-condensed text-sm text-gold font-bold mb-4 leading-tight">Founder &amp; Chief Solutions Architect, PHIERS</p>
              <p className="font-body text-sm text-[#c8d8c8] leading-relaxed">
                Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending — and built the lever to redirect it toward healthcare, jobs, and a monthly check for every American. Building this since 2009.
              </p>
            </div>
          </div>
          <div className="px-6 pb-7">
            <p className="font-condensed text-xs text-green uppercase tracking-[3px] mb-3">Why Pathos Communications Chose PHIERS</p>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg border border-green/20">
              <iframe
                src="https://www.youtube.com/embed/KLu7USN_dao?rel=0"
                title="Pathos Communications — Why We Stand Behind PHIERS"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="font-condensed text-sm text-[#8899bb] mt-3 leading-relaxed">A Fortune 500 PR firm — listed on the London Stock Exchange — publicly staking their reputation on PHIERS. That's not a pitch. That's a verdict.</p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

      <style jsx global>{`
        .back-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--green);
          color: var(--bg-deep);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 150ms ease;
          z-index: 999;
          border: none;
        }
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        .back-to-top:hover {
          background: #2ab568;
          transform: translateY(-2px);
        }

        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          border: 2px solid rgba(61, 220, 132, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }
        .video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .video-facade {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            var btt = document.getElementById('back-to-top');
            if (btt) {
              if (window.scrollY > 400) {
                btt.classList.add('visible');
              } else {
                btt.classList.remove('visible');
              }
            }
          });
        `
      }} />
    </>
  )
}
