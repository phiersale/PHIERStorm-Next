// FILE: app/unstoppable/page.tsx
// UNSTOPPABLE PAGE - The Movement We Build Together

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function UnstoppablePage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="bg-gradient-to-b from-[#0a0f1a] to-bg-deep text-center pt-32 pb-16 px-6">
          <div className="relative h-[250px] w-auto mx-auto mb-4 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={250}
              height={100}
              className="opacity-90 max-w-[250px] w-full h-auto"
            />
          </div>
          <div className="text-gray-500 text-base italic mb-4">UNBREAKABLE was the proof. UNSTOPPABLE is the plan.</div>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-[6px] mb-4">UNSTOPPABLE</h1>
          <div className="text-gray-500 text-sm tracking-wide mb-4">The movement we build together.</div>
          <p className="font-condensed text-lg text-green font-bold max-w-[700px] mx-auto">
            Black men built this.<br />
            Millions of us make it unstoppable.
          </p>
          <p className="text-gray-600 text-xs italic mt-4">This page is not persuasion. It is measurement.</p>
        </div>

        <hr className="border-green/20" />

        {/* 1 — The Movement */}
        <section className="bg-bg-dark section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-xs uppercase tracking-[2.5px] block mb-2">1 — The Movement</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">We Built This. Together We Make It Unstoppable.</h2>

            <p className="text-white text-xl font-bold mb-2">UNSTOPPABLE is the moment when integrity becomes momentum.</p>
            <p className="text-white text-xl font-bold mb-2">When clarity becomes power.</p>
            <p className="text-white text-xl font-bold mb-6">When a national solution becomes a national movement.</p>

            <p className="text-body mb-3">UNBREAKABLE documented how PHIERS was built under pressure.<br />
            UNSTOPPABLE documents what happens next —<br />
            when millions of people move together with purpose, math, and undeniable democratic force.</p>

            <p className="text-body mb-3">We are not drifting.</p>
            <p className="text-body mb-3">We are choosing.</p>

            <p className="text-body mb-2"><strong className="text-white">We choose to turn:</strong></p>
            <ul className="list-disc list-inside text-body mb-6">
              <li>Signatures into leverage</li>
              <li>Math into momentum</li>
              <li>Clarity into change</li>
              <li>One solution into a national standard</li>
            </ul>

            <p className="text-green text-lg font-bold mb-6">
              This is what democracy looks like<br />
              when the people who built it<br />
              decide to use it.
            </p>

            <div className="border-t border-b border-green/30 py-6 my-6 text-center">
              <p className="text-white text-xl italic mb-2">"PHIERS is no longer just a model.<br />
              It is a blueprint for how millions of people<br />
              can move together — peacefully, measurably,<br />
              and with undeniable democratic force."</p>
              <span className="text-gray-500 text-sm">— Will Price, PHIERS Founders</span>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 2 — The Math */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-xs uppercase tracking-[2.5px] block mb-2">2 — The Math</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Power Is Measurable. Here Are the Numbers.</h2>

          <p className="text-white text-xl font-bold mb-4">
            Harvard researcher Erica Chenoweth studied 323 political campaigns
            across 106 years. Her finding:
          </p>

          <div className="bg-gold-glow border-l-4 border-l-gold rounded-r-lg p-5 mb-6">
            <p className="text-white text-lg font-bold mb-2">
              No sustained, nonviolent campaign with 3.5% participation has ever failed.
            </p>
            <p className="text-body">That is 11.6 million people. We are building toward 100 million.</p>
          </div>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/The_3_5__Threshold_jpg.png')} className="cursor-pointer">
              <Image
                src="/images/The_3_5__Threshold_jpg.png"
                alt="The 3.5% Threshold"
                width={500}
                height={350}
                className="w-full h-auto rounded-lg border-2 border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-center text-gray-500 text-xs italic mt-2">The 3.5% threshold: 11.6 million organized people. No nonviolent campaign at this scale has ever failed.</p>
          </div>

          <p className="text-body mb-3">This is not protest math. This is leverage math.</p>
          <p className="text-body mb-4">When 11.6 million organized people move in the same direction, Congress has two choices:</p>

          <div className="bg-bg-card border border-green/20 rounded-lg p-3 mb-2">✅ Align with the clear will of their constituents</div>
          <div className="bg-bg-card border border-green/20 rounded-lg p-3 mb-6">📢 Or explain publicly — on the record — why they refused</div>

          <p className="text-body mb-4"><strong className="text-white">That accountability is the weapon. That accountability is the point.</strong></p>

          <h3 className="font-condensed font-bold text-gold text-xl mb-3">The Cascade</h3>
          <div className="bg-bg-card border border-green/20 rounded-lg p-3 mb-2">💡 One conversion from a $10,000 insurance plan to a $600 telehealth plan frees enough savings to fund <strong className="text-white">12 more people.</strong></div>
          <div className="bg-bg-card border border-green/20 rounded-lg p-3 mb-2">📈 Those 12 fund <strong className="text-white">148.</strong> Those 148 fund <strong className="text-white">1,825.</strong></div>
          <div className="bg-bg-card border border-green/20 rounded-lg p-3 mb-6">🎯 At 3.5% — the cascade becomes self-sustaining.</div>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/CASCADE_Ladder.png')} className="cursor-pointer">
              <Image
                src="/images/CASCADE_Ladder.png"
                alt="The Cascade Effect"
                width={500}
                height={350}
                className="w-full h-auto rounded-lg border-2 border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-center text-gray-500 text-xs italic mt-2">One household shifts from $10,000 insurance to $600 telehealth — and the cascade begins.</p>
          </div>

          <div className="text-center mt-4">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 3 — The Moment */}
        <section className="bg-bg-dark section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-xs uppercase tracking-[2.5px] block mb-2">3 — The Moment</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Three Acts. One Story. One Outcome.</h2>

            <div className="bg-green-glow border border-green/20 rounded-lg p-5 mb-4">
              <h3 className="font-condensed font-bold text-green text-xl mb-2">Act One — 3.5% Before March 28, 2026</h3>
              <p className="text-body">March 28 is the No Kings Rally. If we reach 3.5% before that date, the rally becomes a reckoning — not just a demonstration, but documented, measurable, organized proof that the people are ahead of their government.</p>
            </div>

            <div className="bg-green-glow border border-green/20 rounded-lg p-5 mb-4">
              <h3 className="font-condensed font-bold text-green text-xl mb-2">Act Two — 100 Million Before July 4, 2026</h3>
              <p className="text-body">July 4, 2026 is the 250th anniversary of America's founding documents. One hundred million signatures is not rebellion. It is patriotism — peaceful, organized, undeniable.</p>
            </div>

            <div className="bg-gold-glow border border-gold/30 rounded-lg p-5 mb-6">
              <h3 className="font-condensed font-bold text-gold text-xl mb-2">⭐ Act Three — November 2026: The Midterm Realignment</h3>
              <p className="text-body">By November 2026, all 435 congressional districts will have candidates seeking PHIERS endorsement — not because of party loyalty, but because the people in their district have spoken.</p>
            </div>

            <div className="text-center mt-4">
              <Button href="/action" variant="primary">✊ Take Action</Button>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 4 — The Mission */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-xs uppercase tracking-[2.5px] block mb-2">4 — The Mission</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">What We Are Demanding. Specifically.</h2>

          <p className="text-body mb-3"><strong className="text-white">We are demanding:</strong></p>
          <ul className="list-disc list-inside text-body mb-6">
            <li>Affordable telehealth added to the ACA Exchange</li>
            <li>Access extended to CMS, VA, Tri-Care, and Indian Health Service beneficiaries</li>
            <li>Monthly cost-of-living relief when the cascade reaches critical mass</li>
            <li>Job creation and small business support funded by redirected healthcare savings</li>
          </ul>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5">
            <p className="text-body"><strong className="text-white">We are not asking for special treatment.</strong><br />
            We are asking Congress to adopt a solution that already works — or stand before their constituents and explain, on the record, why they won't.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 5 — The Proof */}
        <section className="bg-bg-dark section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-xs uppercase tracking-[2.5px] block mb-2">5 — The Proof</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Validation That Came Before the Silence</h2>

            <div className="bg-gold-glow border-l-4 border-l-gold rounded-r-lg p-5 mb-6">
              <p className="text-body italic mb-2">"If you weren't legit, we wouldn't risk putting our name behind yours."</p>
              <p className="text-gray-500 text-sm">— Pathos Communications, Global PR firm listed on the London Stock Exchange</p>
            </div>

            <div className="border-t border-b border-green/30 py-6 my-6 text-center">
              <p className="text-white text-xl italic mb-2">"Different institution.<br />
              Same pattern. Same silence.<br />
              Same discomfort with Black excellence<br />
              that disrupts the status quo."</p>
              <span className="text-gray-500 text-sm">— Will Price, PHIERS Founders</span>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 6 — The Resistance */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-xs uppercase tracking-[2.5px] block mb-2">6 — The Resistance</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">What It Cost. The Record of Endurance.</h2>

          <p className="text-white text-xl font-bold mb-4">Pressure didn't break us. It revealed us.</p>
          <p className="text-body mb-6">PHIERS was built under sustained pressure — the kind that reveals who people truly are.</p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
            <div className="text-center">
              <button onClick={() => openModal('/images/Power_Concedes_Nothing_TEETH.png')} className="cursor-pointer">
                <Image
                  src="/images/Power_Concedes_Nothing_TEETH.png"
                  alt="Power concedes nothing without a demand"
                  width={280}
                  height={200}
                  className="rounded-lg border border-green/20 hover:scale-[1.02] transition-transform mx-auto"
                />
              </button>
              <p className="text-gray-500 text-xs italic mt-2">"Power concedes nothing without a demand." — Frederick Douglass</p>
            </div>
            <div className="text-center">
              <button onClick={() => openModal('/images/We_Gotz_Teeth_for_No_Kings.jpg')} className="cursor-pointer">
                <Image
                  src="/images/We_Gotz_Teeth_for_No_Kings.jpg"
                  alt="We've got teeth — no kings"
                  width={280}
                  height={200}
                  className="rounded-lg border border-green/20 hover:scale-[1.02] transition-transform mx-auto"
                />
              </button>
              <p className="text-gray-500 text-xs italic mt-2">We've got teeth. No kings.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 7 — The Invitation */}
        <section className="bg-bg-dark section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-xs uppercase tracking-[2.5px] block mb-2">7 — The Invitation</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Your Role. Right Now.</h2>

            <div className="bg-bg-card border border-green/20 rounded-lg p-5 mb-4">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">Supporters — share and sign</h3>
              <ul className="list-disc list-inside text-body">
                <li>Sign the petition and complete the survey</li>
                <li>Share PHIERS with people you trust</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-green/20 rounded-lg p-5 mb-4">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">Volunteers — organize locally</h3>
              <ul className="list-disc list-inside text-body">
                <li>Lead signature drives in your community</li>
                <li>Help manage online channels and social sharing</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-green/20 rounded-lg p-5 mb-6">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">Organizers — build district teams</h3>
              <ul className="list-disc list-inside text-body">
                <li>Coordinate district-level efforts toward 1,500 verified signatures</li>
                <li>Train volunteers and build local teams</li>
              </ul>
            </div>

            <div className="text-center">
              <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
              <div className="mt-3">
                <Button href="/donate" variant="secondary">Support the Work</Button>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 8 — The Declaration */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-xs uppercase tracking-[2.5px] block mb-2">8 — The Declaration</span>

          <div className="border-t border-b border-green/30 py-6 my-6 text-center">
            <p className="text-white text-xl italic mb-2">"PHIERS is the blueprint.<br />
            The movement is the engine.<br />
            And when enough of us move together,<br />
            we are unstoppable."</p>
            <span className="text-gray-500 text-sm">— Will Price, PHIERS Founders</span>
          </div>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/100Mil_Americans_jpg.png')} className="cursor-pointer">
              <Image
                src="/images/100Mil_Americans_jpg.png"
                alt="100 Million Americans"
                width={500}
                height={350}
                className="w-full h-auto rounded-lg border-2 border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-center text-gray-500 text-xs italic mt-2">100 million Americans.<br />July 4, 2026.<br />The destination.</p>
          </div>

          <div className="text-center pt-6">
            <Button href="/action" variant="primary">✊ Make Your Voice Count</Button>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <Button href="/petition" variant="secondary">✍ Sign the Petition</Button>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform?usp=header" variant="secondary">📊 Take the Survey</Button>
            </div>
          </div>

          <div className="text-center mt-12 pt-6 border-t border-green/20">
            <Link href="/" className="text-green font-bold text-base hover:underline">
              Read UNBREAKABLE: The Solution They Couldn't Stop →
            </Link>
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
        .bg-gold-glow {
          background: rgba(245, 200, 66, 0.08);
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

// END FILE: app/unstoppable/page.tsx
