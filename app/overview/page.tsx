// FILE: app/overview/page.tsx - UPDATED (Tiers 1-7)

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function OverviewPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

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
          <div className="relative h-[120px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={120}
              height={120}
              className="opacity-90"
            />
          </div>
          <div className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">THE MOVEMENT</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Make America <span className="text-green">Better and Healthier</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[800px] mx-auto">
            PHIERS — People's Health Insurance Economic Recovery Service
          </p>

          <div className="max-w-[600px] mx-auto my-6">
            <button onClick={() => openModal('/images/Power_Concedes_Nothing_without_TEETH.jpg')} className="cursor-pointer">
              <Image
                src="/images/Power_Concedes_Nothing_without_TEETH.jpg"
                alt="Power Concedes Nothing Without a Demand"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
            <Button href="#how-it-works" variant="secondary">How It Works</Button>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Constitutional Video Block */}
        <section className="container section">
          <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-6">
            <h2 className="font-display text-2xl text-blue-400 text-center mb-4">The Math Congress Doesn't Want You to See</h2>
            <div className="video-container max-w-[800px] mx-auto">
              <div id="wrap-math" className="video-wrapper cursor-pointer group" onClick={() => playVideo('math', 'https://www.youtube.com/embed/2j-dF3hgdeE?autoplay=1&rel=0')}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/2j-dF3hgdeE/hqdefault.jpg')" }}>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-blue-400 font-bold text-sm mt-3">1 minute 11 seconds. This is why they're terrified.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Overview Section */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">Congress Won't Fix Healthcare. Organized Citizens Will.</h2>
          <p className="text-body mb-4">PHIERS is a public-interest movement building coordinated citizen pressure across every congressional district — with real leverage and a real plan.</p>

          <div className="bg-green-glow border-2 border-green rounded-xl p-6">
            <h3 className="font-condensed font-bold text-green text-xl mb-3">This isn't a petition. It's a pressure system.</h3>
            <ul className="list-disc list-inside text-body space-y-2">
              <li>Your name is counted by congressional district</li>
              <li>District participation builds measurable political leverage</li>
              <li>Leverage escalates publicly toward key milestones</li>
              <li>Power responds when pressure becomes unavoidable</li>
            </ul>
            <p className="text-center text-gray-400 italic mt-4">History shows that when 3.5% of the population organizes, systems are forced to change.</p>
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

        {/* Timeline Section - UPDATED (no March 28/July 4) */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">The PHIERS Timeline</h2>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5 mb-4">
            <h3 className="font-condensed font-bold text-gold text-xl mb-2">Critical Mass Achieved</h3>
            <p className="text-body"><strong>3.5% participation = 11.6 million signatures</strong><br />We bring organized citizen leverage to a national moment of visibility and accountability.</p>
          </div>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5">
            <h3 className="font-condensed font-bold text-green text-xl mb-2">Universal Coverage Achieved</h3>
            <p className="text-body"><strong>234 Million Americans coordinated</strong><br />When millions of Americans coordinate around healthcare reform, Congress has no choice but to act.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Strategy Section */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white mb-4">The PHIERS Strategy — At a Glance</h2>

            <div className="space-y-4">
              <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-4">
                <h3 className="font-condensed font-bold text-green text-lg mb-1">Critical Mass</h3>
                <p className="text-body text-sm">3.5% participation has repeatedly triggered systemic change across history — from civil rights movements to democratic transitions worldwide.</p>
              </div>
              <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-4">
                <h3 className="font-condensed font-bold text-green text-lg mb-1">District-Level Pressure</h3>
                <p className="text-body text-sm">Members of Congress don't fear "the nation." They fear their own district. PHIERS applies pressure locally, where representatives are most vulnerable.</p>
              </div>
              <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-4">
                <h3 className="font-condensed font-bold text-green text-lg mb-1">Replacement Threat</h3>
                <p className="text-body text-sm">When enough voters in a district coordinate around a single demand, incumbents move — or lose. We help recruit and support replacements who will act.</p>
              </div>
              <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-4">
                <h3 className="font-condensed font-bold text-green text-lg mb-1">Existing Law</h3>
                <p className="text-body text-sm">We're not waiting for a miracle bill. We're using authority that already exists under the ACA to force telehealth coverage.</p>
              </div>
              <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-4">
                <h3 className="font-condensed font-bold text-green text-lg mb-1">The Math Works</h3>
                <p className="text-body text-sm"><strong>$600 per person per year</strong> via telehealth covers 80% of healthcare needs for 234 million Americans — without new taxes and without killing private insurance.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* How It Works - The Telehealth Cascade */}
        <section id="how-it-works" className="container section scroll-mt-24">
          <h2 className="font-display text-3xl text-white mb-4">How It Works — The Telehealth Cascade</h2>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/How_It_Works.png')} className="cursor-pointer">
              <Image
                src="/images/How_It_Works.png"
                alt="PHIERS Telehealth Cascade Process Diagram"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
          </div>

          <h3 className="font-condensed font-bold text-gold text-xl mb-3">The Exponential Mechanism</h3>
          <p className="text-body mb-4">Congress allows telehealth through the ACA exchange immediately. One person's $600 annual savings funds 12 others. Those 12 fund 148. Exponential. Unstoppable.</p>

          <div className="bg-green-glow border-2 border-green rounded-xl p-6">
            <h3 className="font-condensed font-bold text-green text-lg mb-3">The Nine Iterations to 234 Million</h3>
            <ol className="list-decimal list-inside text-body text-sm space-y-1">
              <li><strong className="text-white">Iteration 1:</strong> 1 → 12 (12 people covered)</li>
              <li><strong className="text-white">Iteration 2:</strong> 12 → 148 (148 people covered)</li>
              <li><strong className="text-white">Iteration 3:</strong> 148 → 1,825 (1,825 people covered)</li>
              <li><strong className="text-white">Iteration 4:</strong> 1,825 → 22,500 (22,500 people covered)</li>
              <li><strong className="text-white">Iteration 5:</strong> 22,500 → 277K (277,000 people covered)</li>
              <li><strong className="text-white">Iteration 6:</strong> 277K → 3.4M (3.4 million people covered)</li>
              <li><strong className="text-white">Iteration 7:</strong> 3.4M → 42M (42 million people covered)</li>
              <li><strong className="text-white">Iteration 8:</strong> 42M → 520M (full U.S. population exceeded)</li>
              <li><strong className="text-white">Iteration 9:</strong> Mathematical overshoot proves universal coverage capacity</li>
            </ol>
            <p className="text-center text-gray-400 text-sm mt-3">Each iteration takes 1-3 months. Full cascade: 9-27 months to universal coverage.</p>
          </div>

          <h3 className="font-condensed font-bold text-gold text-xl mt-6 mb-3">The 3.5% Rule</h3>
          <p className="text-body">Harvard researcher Erica Chenoweth's research shows that when 3.5% of a population actively engages in sustained nonviolent resistance, success becomes inevitable.</p>
          <p className="text-body mt-2">For the United States, 3.5% = <strong className="text-white">11.6 million people</strong>. PHIERS is building toward that critical mass.</p>
        </section>

        <hr className="border-green/20" />

        {/* What Signing Does */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white mb-4">What Joining Actually Does</h2>
            <p className="text-body mb-4">Your signature is not a "like." It's a <strong className="text-white">coordination signal</strong> that lets us map where pressure already exists — district by district — and where we need to grow.</p>

            <ol className="list-decimal list-inside text-body space-y-2 mb-6">
              <li><strong className="text-white">Step 1:</strong> You join with your district information or zip code</li>
              <li><strong className="text-white">Step 2:</strong> Your district is added to the PHIERS pressure map</li>
              <li><strong className="text-white">Step 3:</strong> When enough people in your district sign, we trigger local escalation: coordinated calls, media pressure, and candidate commitments</li>
              <li><strong className="text-white">Step 4:</strong> If your member of Congress refuses to move, we help recruit and support a replacement who will</li>
            </ol>

            <div className="bg-green-glow border-2 border-green rounded-xl p-6 text-center">
              <p className="text-green font-bold text-lg">No spam. No selling. No gimmicks.<br />Just organized citizens building real leverage.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* We Are the TEETH */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">We Are the TEETH</h2>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/Power_Concedes_Nothing_TEETH.png')} className="cursor-pointer">
              <Image
                src="/images/Power_Concedes_Nothing_TEETH.png"
                alt="Power concedes nothing without a demand that has teeth. We are the TEETH."
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
          </div>

          <p className="text-center text-green text-lg font-bold mb-6">Power concedes nothing without a demand.</p>
          <p className="text-body mb-4">PHIERS gives citizens the TEETH — organized, strategic, collective force — to make that demand unavoidable.</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-bg-card border border-green/20 rounded-lg p-4">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">What PHIERS Is</h3>
              <ul className="list-disc list-inside text-body text-sm">
                <li>A public-interest movement</li>
                <li>Citizen-driven and non-corporate</li>
                <li>Strategy-based, not vibes-based</li>
                <li>Built for accountability</li>
              </ul>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-4">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">What PHIERS Is NOT</h3>
              <ul className="list-disc list-inside text-body text-sm">
                <li>A company</li>
                <li>An insurance product</li>
                <li>A political party</li>
                <li>A fundraising scheme</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Explore the Complete Plan */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="font-display text-3xl text-white mb-4">Explore the Complete Plan</h2>
            <p className="text-body mb-6">We've mapped the legal authority, the telehealth math, and the district-level strategy into a concrete plan. If you're the kind of person who needs to see the receipts before you move, that's exactly who we built this for.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[600px] mx-auto mb-6">
              <Link href="/quickstart" className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-green hover:border-green transition-all">Quick Start</Link>
              <Link href="/crisis" className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-green hover:border-green transition-all">The Crisis</Link>
              <Link href="/simple-math" className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-green hover:border-green transition-all">The Math</Link>
              <Link href="/solutions" className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-green hover:border-green transition-all">5D Solutions</Link>
              <Link href="/leverage" className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-green hover:border-green transition-all">The Leverage</Link>
              <Link href="/faq" className="bg-bg-card border border-green/20 rounded-lg p-3 text-center text-green hover:border-green transition-all">FAQ</Link>
            </div>

            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
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
        .bg-green-glow {
          background: rgba(61, 220, 132, 0.06);
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

// END FILE: app/overview/page.tsx - TIERS 1-7 COMPLETE
