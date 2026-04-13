// FILE: app/full-story/page.tsx
// FULL STORY / HEALTHCARE PROOF PAGE - The Math Congress Fears

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function FullStoryPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [willModalOpen, setWillModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
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
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[100px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={100}
              height={100}
              className="opacity-90"
            />
          </div>
          <div className="text-green text-sm font-condensed tracking-wide mb-1">MABAH — Making America Better And Healthier</div>
          <div className="text-gold text-base font-condensed font-bold italic mb-4">Sounds Like MAGA, But A Lot Bettah</div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-red-500 mb-4">You've seen the idea. This is the proof.</h1>
          <p className="text-body text-base max-w-[720px] mx-auto mb-3">
            The healthcare system isn't failing because solutions don't exist.<br />
            It's failing because the incentives are broken — and Congress has no reason to fix them.<br />
            PHIERS changes that by organizing people around a solution that already works today.
          </p>
          <p className="text-body text-base max-w-[720px] mx-auto mb-3">
            The $600 model isn't theoretical. It's based on real telehealth systems already delivering care today — covering the majority of what people actually use, at a fraction of the cost.
          </p>
          <p className="text-gray-400 italic max-w-[720px] mx-auto">
            What matters isn't just that it works. It's that it works well enough to prove we don't need Congress to fix it — and that's what creates the leverage to force them to act — whether they want to or not.
          </p>
        </div>

        {/* Intro Video */}
        <section className="container section">
          <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-6">
            <h2 className="font-display text-2xl md:text-3xl text-blue-400 text-center mb-4">The 60-Second PHIERS Brief</h2>
            <div className="video-container max-w-[800px] mx-auto">
              <div id="wrap-intro" className="video-wrapper cursor-pointer group" onClick={() => playVideo('intro', 'https://www.youtube.com/embed/2j-dF3hgdeE?autoplay=1&rel=0')}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/2j-dF3hgdeE/hqdefault.jpg')" }}>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-5">
              <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform" target="_blank" rel="noopener noreferrer" className="text-green font-condensed font-bold hover:underline">📋 Take the Survey</a>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What Is PHIERS */}
        <section className="container section">
          <div className="bg-blue-500/10 border-2 border-blue-500/30 border-l-4 border-l-blue-500 rounded-xl p-6">
            <p className="font-display text-2xl md:text-3xl text-green font-bold mb-3">Politicians respond to organized power.<br />PHIERS organizes the public.</p>
            <p className="text-body mb-3"><strong className="text-white">PHIERS isn't a policy campaign.</strong> It's a way for regular Americans to give Congress documented direction — and replace the ones who ignore it.</p>
            <p className="text-body mb-3">When millions of people say the same thing — on the record — Congress has to act. We don't ask people to yell louder. We help them line up behind one clear demand.</p>
            <p className="text-body">We use <strong className="text-green">math and collective power</strong> to force Congress to stabilize healthcare, protect coverage, and stop using people's lives as bargaining chips.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Telehealth Benefits Graphic */}
        <section className="container section text-center">
          <button onClick={() => openModal('/images/Telehealth_Benefits.jpg')} className="cursor-pointer">
            <Image
              src="/images/Telehealth_Benefits.jpg"
              alt="Telehealth Benefits: 24/7 doctors, fast prescriptions, no waiting rooms, mental health support, zero surprise bills — under $50/mo"
              width={600}
              height={400}
              className="max-w-full h-auto mx-auto rounded-lg border-2 border-green/20 hover:scale-[1.01] transition-transform"
            />
          </button>
          <p className="text-gray-500 text-sm italic mt-2">Everything you actually need — under $50/month. No waiting rooms. No surprise bills. No gatekeepers.</p>
        </section>

        <hr className="border-green/20" />

        {/* Telehealth Section */}
        <section className="container section">
          <div className="bg-green/10 border-2 border-green/35 border-l-4 border-l-green rounded-xl p-6">
            <h2 className="font-display text-2xl md:text-3xl text-green mt-0 mb-4">Telehealth Is the Answer to the Affordability Crisis</h2>
            <p className="text-white text-lg font-semibold mb-4">$600 telehealth replaces $10,000 insurance.<br />That's not a slogan — it's the math Congress doesn't want you to know.</p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="bg-bg-card border border-green/20 rounded-lg p-4 text-center">
                <div className="text-green font-bold text-2xl">80%</div>
                <p className="text-gray-400 text-sm">of Americans never use hospitalization. They're paying $10,000/year for protection they don't need.</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-4 text-center">
                <div className="text-green font-bold text-2xl">$600/yr</div>
                <p className="text-gray-400 text-sm">Telehealth delivers 80% of healthcare needs — 24/7 access, no denials — at 1/14th the cost.</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-4 text-center">
                <div className="text-green font-bold text-2xl">8–13 mo.</div>
                <p className="text-gray-400 text-sm">From Congressional authorization to universal coverage. Congress can do this tomorrow.</p>
              </div>
            </div>

            <p className="text-body mb-3"><strong className="text-white">Telehealth is care. Insurance is protection.</strong> Most Americans are paying for catastrophic coverage they never use — while skipping routine care they can't afford. PHIERS fixes the system by separating the two: <strong className="text-green">$600 telehealth for the 80%. Insurance as the backstop for the rest.</strong></p>
            <p className="text-body mb-4">Our one demand to Congress: <strong className="text-gold">add $600 telehealth as a covered benefit under the ACA Exchange and CMS.</strong> That single change stabilizes costs for 234 million Americans — and saves roughly $2.7 trillion a year.</p>

            <Link href="/telecare" className="inline-block bg-gradient-to-r from-green to-green-dim text-bg-deep font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all">📱 See the Full Telehealth Case →</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Bridge Section */}
        <div className="bg-bg-card border-l-4 border-gold rounded-lg p-6 mx-auto max-w-[800px] my-8 text-center">
          <p className="text-gold text-lg font-bold mb-2">Fixing healthcare generates the savings to solve everything else.</p>
          <p className="text-body">$2.7 trillion a year — freed from a broken system — is the fuel for the five connected problems facing this country. PHIERS is built to solve all five. Healthcare is where we start.</p>
        </div>

        <hr className="border-green/20" />

        {/* Start Where You Are Grid */}
        <section className="container section">
          <div className="bg-green/10 border border-green/25 rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-white mt-0 mb-4">Start Where You Are</h2>
            <p className="text-body mb-6">Pick the page that fits your question right now.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[700px] mx-auto">
              <Link href="/crisis" className="bg-gradient-to-r from-green to-green-dim text-bg-deep font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">🚨 The Crisis</Link>
              <Link href="/telecare" className="bg-gradient-to-r from-[#1b5e20] to-[#2e7d32] text-white font-bold p-4 rounded-lg text-center border-2 border-gold hover:opacity-90 transition-all">📱 The Fix: Telehealth</Link>
              <Link href="/simple-math" className="bg-gradient-to-r from-green to-green-dim text-bg-deep font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">📊 The Math</Link>
              <Link href="/solutions" className="bg-gradient-to-r from-green to-green-dim text-bg-deep font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">🔧 The Solution</Link>
              <Link href="/leverage" className="bg-gradient-to-r from-green to-green-dim text-bg-deep font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">⚡ The Leverage</Link>
              <Link href="/no-war" className="bg-gradient-to-r from-red-600 to-red-800 text-white font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">⚔️ End the War</Link>
              <Link href="/action" className="bg-gradient-to-r from-gold to-[#e0a800] text-black font-bold p-4 rounded-lg text-center hover:opacity-90 transition-all">✊ Take Action</Link>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* How PHIERS Works */}
        <section className="container section">
          <div className="bg-green/10 border-2 border-green border-l-4 border-l-green rounded-xl p-6">
            <p className="text-lg font-bold text-white mb-4">Four steps. No ideology. Just your voice on record.</p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start"><span className="text-green text-2xl font-bold min-w-[40px]">1.</span><p className="text-body"><strong className="text-green">Sign the petition + take the survey</strong> — Your name, your position, on the public record.</p></div>
              <div className="flex gap-4 items-start"><span className="text-green text-2xl font-bold min-w-[40px]">2.</span><p className="text-body"><strong className="text-green">1,500 signatures in YOUR DISTRICT</strong> — Forces a mandatory town hall. Congress can't ignore it.</p></div>
              <div className="flex gap-4 items-start"><span className="text-green text-2xl font-bold min-w-[40px]">3.</span><p className="text-body"><strong className="text-green">3.5% participation (11.6M people)</strong> — No campaign in history has ever failed after hitting this number.</p></div>
              <div className="flex gap-4 items-start"><span className="text-red-500 text-2xl font-bold min-w-[40px]">4.</span><p className="text-body"><strong className="text-red-500">Replace elected officials who refuse</strong> — No exceptions.</p></div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* No Kings Rally Timing */}
        <div className="bg-gradient-to-br from-red-500/15 to-gold/10 border-2 border-gold rounded-xl p-6 mx-auto max-w-[800px] my-8 text-center">
          <p className="text-gold text-xl font-bold mb-2">⚡ Perfect timing — the No Kings Rally is March 28th.</p>
          <p className="text-body mb-4">If you want to turn that energy into lasting change, document your direction before you march. Protests create visibility. PHIERS creates leverage. You need both.</p>
          <Link href="/action" className="inline-block bg-gradient-to-r from-gold to-[#e0a800] text-black font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-all">✊ Take Action Before the Rally →</Link>
        </div>

        <hr className="border-green/20" />

        {/* Pathos Video */}
        <section className="container section text-center">
          <p className="text-green italic mb-2">A global PR leader listed on the London Stock Exchange explains why they put their name behind this movement:</p>
          <p className="text-gold font-bold mb-4">Pathos Communications: Why They Put Their Reputation Behind PHIERS (7:11)</p>
          <div className="video-container max-w-[640px] mx-auto">
            <div id="wrap-pathos" className="video-wrapper cursor-pointer group" onClick={() => playVideo('pathos', 'https://www.youtube.com/embed/UD8svoGU7ZU?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/UD8svoGU7ZU/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Research Proves 3.5% */}
        <section className="container section">
          <div className="bg-red-500/10 border border-red-500/25 border-l-4 border-l-red-500 rounded-xl p-6">
            <h2 className="font-display text-2xl md:text-3xl text-red-500 mt-0 mb-4">Research Proves That Congress Can't Ignore 3.5%</h2>
            <p className="text-body mb-4"><strong className="text-white">At that level of alignment:</strong> Every district is affected, every election becomes competitive, every party must respond.</p>
            <div className="bg-green/15 border-2 border-green rounded-lg p-5">
              <p className="text-green text-xl font-bold mb-2">Once we hit critical mass, universal healthcare becomes inevitable — and free.</p>
              <p className="text-body">The savings already exist. The math already works. The only thing missing is organized public pressure. That's exactly what 3.5% delivers.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 30-Second Explainer */}
        <section className="container section">
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-6">
            <h2 className="font-display text-2xl md:text-3xl text-gold mt-0 mb-4">💬 Explain PHIERS in 30 Seconds</h2>
            <div className="bg-black/25 border-l-4 border-gold p-4 rounded-md">
              <p className="text-body">Healthcare is broken because politicians can ignore us. PHIERS unites millions behind one demand: add $600 telehealth to the ACA Exchange and CMS. That fix saves trillions — and once 3.5% align, Congress must act.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Unions Video */}
        <section className="container section text-center">
          <p className="text-green italic mb-2">Why organized labor is the engine behind PHIERS:</p>
          <p className="text-gold font-bold mb-4">Why PHIERS-Powered Unions Will Win (5:55)</p>
          <div className="video-container max-w-[640px] mx-auto">
            <div id="wrap-unions" className="video-wrapper cursor-pointer group" onClick={() => playVideo('unions', 'https://player.vimeo.com/video/1157760069?autoplay=1')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.vimeocdn.com/video/1234567890')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* War Section */}
        <section className="container section">
          <div className="bg-red-500/10 border-2 border-red-500/30 border-l-4 border-l-red-500 rounded-xl p-6">
            <h2 className="font-display text-2xl md:text-3xl text-red-500 mt-0 mb-4">Healthcare Is Where We Get the Leverage. War Is Why We Can't Wait.</h2>
            <p className="text-body mb-4">Unauthorized wars are costing the United States <strong className="text-red-500">over $1 billion every single day</strong> — with no declaration, no mandate, and no end in sight. Most economists agree: prolonged military conflicts of this scale, layered on top of existing debt and global instability, carry a real risk of triggering global economic collapse.</p>

            <div className="bg-black/25 border-l-4 border-gold rounded-lg p-4 my-4">
              <p className="text-gold font-bold mb-2">Stage 1 — Fix healthcare.</p>
              <p className="text-body mb-3">Prove PHIERS works. Generate $2.7 trillion in savings. Show Congress that organized constituents cannot be ignored.</p>
              <p className="text-gold font-bold mb-2">Stage 2 — Transfer that leverage.</p>
              <p className="text-body">Use the same organized, documented, district-by-district pressure to demand Congress end the unauthorized wars.</p>
            </div>

            <p className="text-body mb-4">Protest without leverage gets nothing. <strong className="text-white">PHIERS builds the leverage.</strong> Healthcare first — because that's the proof of concept that opens every door that follows.</p>

            <Link href="/no-war" className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all">⚡ See the Full Plan to End the War →</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-8">
            <h2 className="font-display text-2xl md:text-3xl text-red-500 mt-0 mb-4">The Only Thing Missing Is You</h2>
            <p className="text-body text-lg mb-6"><strong className="text-white">PHIERS is a public-interest movement</strong> — not a company, not a product. It works when people participate.</p>

            <Link href="/action" className="inline-block bg-gradient-to-r from-gold to-[#e0a800] text-black font-bold text-xl px-10 py-4 rounded-lg hover:opacity-90 transition-all">✊ Take Action</Link>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
              <Button href="/donate" variant="secondary">Support the Movement</Button>
            </div>

            <div className="font-display text-2xl text-green text-center mt-6">#PHIERdUpNow</div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white text-3xl cursor-pointer hover:text-green transition-colors"
              >
                ✕
              </button>
              <Image
                src={modalImage}
                alt="Enlarged view"
                width={800}
                height={600}
                className="rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Will Price Modal */}
      <AnimatePresence>
        {willModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[99998] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setWillModalOpen(false)}
          >
            <div className="relative max-w-[720px] w-full bg-bg-dark/97 border-2 border-green/35 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setWillModalOpen(false)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-bg-card text-green border-2 border-green flex items-center justify-center text-xl hover:bg-green hover:text-bg-card transition-all z-10"
              >
                ✕
              </button>
              <div className="flex flex-wrap">
                <div className="w-full md:w-[240px] min-h-[280px] overflow-hidden">
                  <Image
                    src="/images/Will_Price.png"
                    alt="Will Price — Founder & Chief Solutions Architect, PHIERS"
                    width={240}
                    height={280}
                    className="w-full h-full min-h-[260px] object-cover object-[55%_top]"
                  />
                </div>
                <div className="flex-1 min-w-[240px] p-7 flex flex-col justify-center">
                  <p className="font-condensed text-xs text-green uppercase tracking-[3px] mb-2">The Architect</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1">Will Price</h3>
                  <p className="font-condensed text-sm text-gold font-bold mb-4">Founder &amp; Chief Solutions Architect, PHIERS</p>
                  <p className="text-body text-sm">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending — and built the lever to redirect it toward healthcare, jobs, and a monthly check for every American. Building this since 2009.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

// END FILE: app/full-story/page.tsx
