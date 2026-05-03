// app/unstoppable/page.tsx
// UNSTOPPABLE – The Movement. The Math. The Milestones.

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function UnstoppablePage() {
  const [modalSrc, setModalSrc] = useState<string | null>(null)
  const openModal = (src: string) => {
    setModalSrc(src)
    document.body.style.overflow = 'hidden'
  }
  const closeModal = () => {
    setModalSrc(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <Navigation />
      <main className="bg-[#080d1a] text-gray-300 font-barlow">
        {/* Hero */}
        <div className="text-center pt-32 pb-16">
          <Image src="/images/PHIERS_Logo.png" alt="PHIERS Logo" width={180} height={70} className="mx-auto mb-4 opacity-80" />
          <div className="text-gray-500 text-sm italic">UNBREAKABLE was the proof. UNSTOPPABLE is the plan.</div>
          <div className="text-green-400 text-sm font-mono uppercase tracking-wider mb-2">Part III · UNSTOPPABLE</div>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-[6px] my-4">UNSTOPPABLE</h1>
          <div className="text-gray-400">The movement we build together.</div>
          <p className="max-w-2xl mx-auto mt-6 text-green-400 font-bold">Black men built this.<br />Millions of us make it unstoppable.</p>
          <p className="text-xs text-gray-500 italic mt-2">This page is not persuasion. It is measurement.</p>
        </div>

        <hr className="border-green/20 my-8" />

        {/* 1 — The Movement */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <div className="bg-[#0d1525] p-8 rounded-xl border border-green-500/20">
            <span className="text-green-400 text-xs uppercase tracking-wider font-bold">1 — The Movement</span>
            <h2 className="text-3xl font-bold text-white mt-4 mb-4">We Built This. Together We Make It Unstoppable.</h2>
            <p className="text-gray-300 text-lg font-semibold mb-2">UNSTOPPABLE is the moment when integrity becomes momentum.</p>
            <p className="text-gray-300 text-lg font-semibold mb-2">When clarity becomes power.</p>
            <p className="text-gray-300 text-lg font-semibold mb-6">When a national solution becomes a national movement.</p>
            <p className="text-gray-400 mb-3">UNBREAKABLE documented how PHIERS was built under pressure.</p>
            <p className="text-gray-400 mb-3">UNSTOPPABLE documents what happens next — when millions of people move together with purpose, math, and undeniable democratic force.</p>
            <p className="text-gray-400 mb-2">We are not drifting. We are choosing.</p>
            <p className="text-gray-400 mb-2">We choose to turn signatures into leverage, math into momentum, clarity into change, one solution into a national standard.</p>
            <p className="text-green-400 text-xl font-bold my-4">This is what democracy looks like when the people who built it decide to use it.</p>
            <div className="quote-pull border-t border-b border-green-500/30 py-6 my-6 text-center">
              <p className="text-white text-base italic">“PHIERS is no longer just a model. It is a blueprint for how millions of people can move together — peacefully, measurably, and with undeniable democratic force.”</p>
              <p className="text-gray-500 text-sm mt-2">— Will Price, PHIERS Founders</p>
            </div>
          </div>
        </section>

        {/* 2 — The Math */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">2 — The Math</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-6">Power Is Measurable. Here Are the Numbers.</h2>
          <p className="text-gray-300 text-lg font-semibold mb-4">Harvard researcher Erica Chenoweth studied 323 political campaigns across 106 years. Her finding:</p>
          <div className="bg-[#0d1525] border-l-4 border-yellow-400 p-5 my-4">
            <p className="text-white text-xl font-bold">No sustained, nonviolent campaign with 3.5% participation has ever failed.</p>
            <p className="text-gray-400">That is 11.6 million people. We are building toward 100 million.</p>
          </div>
          <div className="graphic-container my-6 text-center">
            <img src="/images/The_3_5__Threshold_jpg.png" alt="3.5% Threshold" className="max-w-[80%] mx-auto rounded-lg border border-green-500/30 cursor-pointer" onClick={() => openModal('/images/The_3_5__Threshold_jpg.png')} />
            <p className="text-green-400 text-sm italic mt-2">3.5% organized participation – no nonviolent campaign at this scale has ever failed.</p>
          </div>
          <p className="text-gray-400 mb-3">This is not protest math. This is leverage math.</p>
          <p className="text-gray-400 mb-3">When 11.6 million organized people move in the same direction, Congress has two choices:</p>
          <div className="fact-row bg-[#141414] border border-green-500/20 rounded-lg p-3 my-2">✅ Align with the clear will of their constituents</div>
          <div className="fact-row bg-[#141414] border border-green-500/20 rounded-lg p-3 my-2">📢 Or explain publicly — on the record — why they refused</div>
          <p className="text-white font-bold mt-4 mb-6">That accountability is the weapon. That accountability is the point.</p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">The Cascade</h3>
          <div className="space-y-2">
            <div className="bg-[#141414] border border-green-500/20 rounded-lg p-3 text-gray-400">💡 One conversion from a $10,000 insurance plan to a $600 telehealth plan frees enough savings to fund <strong className="text-white">12 more people.</strong></div>
            <div className="bg-[#141414] border border-green-500/20 rounded-lg p-3 text-gray-400">📈 Those 12 fund <strong className="text-white">148.</strong> Those 148 fund <strong className="text-white">1,825.</strong></div>
            <div className="bg-[#141414] border border-green-500/20 rounded-lg p-3 text-gray-400">🎯 At 3.5% — the cascade becomes self-sustaining.</div>
          </div>
          <div className="graphic-container my-6 text-center">
            <img src="/images/CASCADE_Ladder.png" alt="Cascade Effect" className="max-w-[80%] mx-auto rounded-lg border border-green-500/30 cursor-pointer" onClick={() => openModal('/images/CASCADE_Ladder.png')} />
            <p className="text-green-400 text-sm italic mt-2">One household shifts from $10,000 insurance to $600 telehealth — and the cascade begins.</p>
          </div>
          <div className="text-center my-8">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
          </div>
        </section>

        {/* 3 — The Moment */}
        <section className="max-w-4xl mx-auto px-6 py-8 bg-[#0d1525] rounded-xl my-12">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">3 — The Moment</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-6">Three Acts. One Story. One Outcome.</h2>
          <div className="act-block bg-[#111d35] p-6 rounded-lg border border-green-500/20 mb-6">
            <h3 className="text-green-400 text-xl font-bold">Act One — 3.5% Before March 28, 2026</h3>
            <p className="text-gray-400">March 28 is the No Kings Rally. If we reach 3.5% before that date, the rally becomes a reckoning — not just a demonstration, but documented, measurable, organized proof that the people are ahead of their government.</p>
          </div>
          <div className="act-block bg-[#111d35] p-6 rounded-lg border border-green-500/20 mb-6">
            <h3 className="text-green-400 text-xl font-bold">Act Two — 100 Million Before July 4, 2026</h3>
            <p className="text-gray-400">July 4, 2026 is the 250th anniversary of America's founding documents. One hundred million signatures is not rebellion. It is patriotism — peaceful, organized, undeniable.</p>
          </div>
          <div className="act-block bg-[#111d35] p-6 rounded-lg border border-yellow-500/30 mb-6">
            <h3 className="text-yellow-400 text-xl font-bold">⭐ Act Three — November 2026: The Midterm Realignment</h3>
            <p className="text-gray-400">By November 2026, all 435 congressional districts will have candidates seeking PHIERS endorsement — not because of party loyalty, but because the people in their district have spoken.</p>
          </div>
          <div className="text-center mt-6">
            <Button href="/action" variant="primary">✊ Take Action</Button>
          </div>
        </section>

        {/* 4 — The Mission */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">4 — The Mission</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">What We Are Demanding. Specifically.</h2>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
            <li>Affordable telehealth added to the ACA Exchange</li>
            <li>Access extended to CMS, VA, Tri-Care, and Indian Health Service beneficiaries</li>
            <li>Monthly cost‑of‑living relief when the cascade reaches critical mass</li>
            <li>Job creation and small business support funded by redirected healthcare savings</li>
          </ul>
          <div className="bg-[#0d1525] border-l-4 border-green-500 p-5">
            <p className="text-gray-300"><strong className="text-white">We are not asking for special treatment.</strong><br />We are asking Congress to adopt a solution that already works — or stand before their constituents and explain, on the record, why they won't.</p>
          </div>
        </section>

        {/* 5 — The Proof */}
        <section className="max-w-4xl mx-auto px-6 py-8 bg-[#0d1525] rounded-xl my-12">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">5 — The Proof</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">The Validation That Came Before the Silence</h2>
          <div className="bg-[#111d35] border-l-4 border-yellow-400 p-5 my-4">
            <p className="text-gray-300 italic">“If you weren't legit, we wouldn't risk putting our name behind yours.”</p>
            <p className="text-gray-500 text-sm mt-2">— Pathos Communications, Global PR firm listed on the London Stock Exchange</p>
          </div>
          <div className="quote-pull border-t border-b border-green-500/30 py-6 my-6 text-center">
            <p className="text-white text-base italic">“Different institution. Same pattern. Same silence. Same discomfort with Black excellence that disrupts the status quo.”</p>
            <p className="text-gray-500 text-sm mt-2">— Will Price, PHIERS Founders</p>
          </div>
        </section>

        {/* 6 — The Resistance */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">6 — The Resistance</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">What It Cost. The Record of Endurance.</h2>
          <p className="text-gray-300 text-lg font-semibold mb-4">Pressure didn't break us. It revealed us.</p>
          <p className="text-gray-400 mb-6">PHIERS was built under sustained pressure — the kind that reveals who people truly are.</p>
          <div className="text-center my-6">
            <img src="/images/Power_Concedes_Nothing_TEETH.png" alt="Frederick Douglass quote" className="max-w-[260px] mx-auto rounded-lg border border-green-500/30 cursor-pointer" onClick={() => openModal('/images/Power_Concedes_Nothing_TEETH.png')} />
            <p className="text-gray-500 text-xs italic mt-2">“Power concedes nothing without a demand.” — Frederick Douglass</p>
          </div>
          <div className="text-center my-6">
            <img src="/images/We_Gotz_Teeth_for_No_Kings.jpg" alt="No Kings" className="max-w-[260px] mx-auto rounded-lg border border-green-500/30 cursor-pointer" onClick={() => openModal('/images/We_Gotz_Teeth_for_No_Kings.jpg')} />
            <p className="text-gray-500 text-xs italic mt-2">We've got teeth. No kings.</p>
          </div>
        </section>

        {/* 7 — The Invitation */}
        <section className="max-w-4xl mx-auto px-6 py-8 bg-[#0d1525] rounded-xl my-12">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">7 — The Invitation</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">Your Role. Right Now.</h2>
          <div className="tier-block bg-[#111d35] p-5 rounded-lg border border-green-500/20 mb-4">
            <h3 className="text-green-400 text-xl font-bold">Supporters — share and sign</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Sign the petition and complete the survey</li>
              <li>Share PHIERS with people you trust</li>
            </ul>
          </div>
          <div className="tier-block bg-[#111d35] p-5 rounded-lg border border-green-500/20 mb-4">
            <h3 className="text-green-400 text-xl font-bold">Volunteers — organize locally</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Lead signature drives in your community</li>
              <li>Help manage online channels and social sharing</li>
            </ul>
          </div>
          <div className="tier-block bg-[#111d35] p-5 rounded-lg border border-green-500/20 mb-4">
            <h3 className="text-green-400 text-xl font-bold">Organizers — build district teams</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Coordinate district-level efforts toward 1,500 verified signatures</li>
              <li>Train volunteers and build local teams</li>
            </ul>
          </div>
          <div className="text-center mt-6">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
          </div>
        </section>

        {/* 8 — The Declaration */}
        <section className="max-w-4xl mx-auto px-6 py-8 text-center">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">8 — The Declaration</span>
          <div className="quote-pull border-t border-b border-green-500/30 py-6 my-6">
            <p className="text-white text-base italic">“PHIERS is the blueprint. The movement is the engine. And when enough of us move together, we are unstoppable.”</p>
            <p className="text-gray-500 text-sm mt-2">— Will Price, PHIERS Founders</p>
          </div>
          <div className="graphic-container my-6">
            <img src="/images/100Mil_Americans_jpg.png" alt="100 Million Americans" className="max-w-[80%] mx-auto rounded-lg border border-green-500/30 cursor-pointer" onClick={() => openModal('/images/100Mil_Americans_jpg.png')} />
            <p className="text-green-400 text-sm italic mt-2">100 million Americans. July 4, 2026. The destination.</p>
          </div>
          <div className="my-8">
            <Button href="/action" variant="primary">✊ Make Your Voice Count</Button>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <Button href="/petition" variant="secondary">✍ Sign the Petition</Button>
            </div>
          </div>
        </section>

        {/* Continue to the rest of the trilogy */}
        <div className="border-t border-gray-800 py-8 mt-16 text-center">
          <p className="text-gray-400 text-sm mb-3">This started with something deeper:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/unforgettable" className="text-green-400 hover:underline">→ UNFORGETTABLE — why it matters</a>
            <a href="/unbreakable" className="text-green-400 hover:underline">→ UNBREAKABLE — what we’ve proven</a>
          </div>
        </div>
      </main>

      <Footer />

      {/* Modal for images */}
      {modalSrc && (
        <div className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button onClick={closeModal} className="absolute -top-10 right-0 text-white text-3xl">✕</button>
            <img src={modalSrc} alt="Full view" className="rounded-xl max-w-full max-h-full" />
          </div>
        </div>
      )}

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-green-500 text-black w-12 h-12 rounded-full text-2xl border-none shadow-md hover:bg-green-400 transition-all z-[999]">↑</button>
    </>
  )
}

// app/unstoppable/page.tsx
