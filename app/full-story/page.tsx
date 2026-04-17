// app/full-story/page.tsx
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function FullStoryPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      const btt = document.getElementById('back-to-top')
      if (btt) {
        if (window.scrollY > 400) btt.classList.add('visible')
        else btt.classList.remove('visible')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Video thumbnail + embed
  const videoThumbnail = 'https://img.youtube.com/vi/2j-dF3hgdeE/hqdefault.jpg'
  const videoEmbedSrc = 'https://www.youtube.com/embed/2j-dF3hgdeE?autoplay=1&rel=0'

  const handlePlayVideo = () => setVideoPlaying(true)

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
          <div className="text-green text-sm font-condensed tracking-wide mb-1">The Full Story</div>
          <h1 className="mb-4">
            <span className="hero-white">You've seen the idea.</span>
            <br />
            <span className="hero-green">This is the proof.</span>
          </h1>
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

        <hr className="border-green/20" />

        {/* Section 1: Intro Video (React-friendly) */}
        <section className="container section">
          <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-6">
            <h2 className="font-display text-2xl md:text-3xl text-blue-400 text-center mb-4">The 60-Second PHIERS Brief</h2>
            <div className="video-container max-w-[800px] mx-auto">
              {!videoPlaying ? (
                <div
                  className="video-wrapper cursor-pointer group"
                  onClick={handlePlayVideo}
                  style={{
                    backgroundImage: `url(${videoThumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                  </div>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={videoEmbedSrc}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px' }}
                />
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-5">
              <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform?usp=header" variant="secondary">📋 Take the Survey</Button>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Section 2: What Is PHIERS */}
        <section className="container section">
          <div className="bg-blue-500/10 border-2 border-blue-500/30 border-l-4 border-l-blue-500 rounded-xl p-6">
            <p className="font-display text-2xl md:text-3xl text-green font-bold mb-3">Politicians respond to organized power.<br />PHIERS organizes the public.</p>
            <p className="text-body mb-3"><strong className="text-white">PHIERS isn't a policy campaign.</strong> It's a way for regular Americans to give Congress documented direction — and replace the ones who ignore it.</p>
            <p className="text-body mb-3">When millions of people say the same thing — on the record — Congress has to act. We don't ask people to yell louder. We help them line up behind one clear demand.</p>
            <p className="text-body">We use <strong className="text-green">math and collective power</strong> to force Congress to stabilize healthcare, protect coverage, and stop using people's lives as bargaining chips.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Anchor Line */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Section 3: Telehealth Benefits Graphic */}
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

        {/* Section 4: Telehealth Section */}
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

        {/* Section 5: Bridge Section */}
        <div className="bg-bg-card border-l-4 border-gold rounded-lg p-6 mx-auto max-w-[800px] my-8 text-center">
          <p className="text-gold text-lg font-bold mb-2">Fixing healthcare generates the savings to solve everything else.</p>
          <p className="text-body">$2.7 trillion a year — freed from a broken system — is the fuel for the five connected problems facing this country. PHIERS is built to solve all five. Healthcare is where we start.</p>
        </div>

        <hr className="border-green/20" />

        {/* Section 6: Start Where You Are Grid */}
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

        {/* Section 7: How PHIERS Works */}
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

        {/* Section 8: Research Proves 3.5% */}
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

        {/* Section 9: Final CTA */}
        <section className="container section text-center">
          <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-8">
            <h2 className="font-display text-2xl md:text-3xl text-red-500 mt-0 mb-4">The Only Thing Missing Is You</h2>
            <p className="text-body text-lg mb-6"><strong className="text-white">PHIERS is a public-interest movement</strong> — not a company, not a product. It works when people participate.</p>

            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Button href="/action" variant="primary">✊ Take Action</Button>
              <Button href="/petition" variant="secondary">✍ Sign the Petition</Button>
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

      {/* Back-to-top button */}
      <button
        onClick={scrollToTop}
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
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </>
  )
}