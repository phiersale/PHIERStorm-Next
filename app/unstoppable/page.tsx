// app/unstoppable/page.tsx
// UNSTOPPABLE – The Movement. The Math. The Mechanism.
'use client'

import { useState } from 'react'
import Image from 'next/image'
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

          {/* Hero image – collective momentum */}
          <div className="relative w-full max-w-4xl mx-auto my-8 rounded-xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img src="/images/Forward_Walking_Crowd.jpg" alt="A crowd walking forward – unstoppable together" className="w-full h-auto object-cover" />
          </div>
          <div className="text-gray-400">The movement we build together.</div>
          <p className="max-w-2xl mx-auto mt-6 text-green-400 font-bold">Black men built this.<br />Millions of us make it unstoppable.</p>
          <p className="text-xs text-gray-500 italic mt-2">This page is not persuasion. It is a plan.</p>
        </div>

        {/* Top CTA */}
        <div className="text-center mt-8 mb-8">
          <Button href="/petition" variant="primary">✍ Ready now? Sign the petition →</Button>
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
            <p className="text-gray-400 mb-3">UNSTOPPABLE documents what happens next — when enough people move together with purpose, math, and undeniable democratic force.</p>
            <p className="text-gray-400 mb-2">We are not drifting. We are choosing.</p>
            <p className="text-gray-400 mb-2">We choose to turn signatures into leverage. Math into momentum. Clarity into change. One solution into a national standard.</p>
            <div className="blockquote-pull my-6">
              <p>“PHIERS is no longer just a model. It is a blueprint for how millions of people can move together — peacefully, measurably, and with undeniable democratic force.”</p>
              <div className="attr">— Will Price, PHIERS Founders</div>
            </div>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* Why Marches Alone Don't Work – new section */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-white mb-4">Why marches alone don't work</h2>
          <p className="text-gray-300 text-lg mb-3">On March 28, 2026, hundreds of thousands of people marched across America. The energy was real. The presence was undeniable. The speeches were powerful. Congress went back to work on Monday like nothing happened.</p>
          <p className="text-gray-300 text-lg mb-3">Not because the people were wrong. Not because the cause wasn't just. Because the march had no teeth.</p>
          <p className="text-gray-400 mb-3">No verified count by district. No specific demands on record. No consequence for ignoring the crowd. No mechanism to force a response. A rally without a mechanism is a photo opportunity.</p>
          <p className="text-green-400 font-bold text-xl mt-4">PHIERS is the mechanism.</p>
        </section>

        <hr className="border-green/20 my-8" />

        {/* The Tool That Gives Movements Teeth }}
        <section className="max-w-4xl mx-auto px-6 py-8 bg-[#0d1525] rounded-xl">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">The Mechanism</span>
          <h2 className="text-3xl font-bold text-white mt-4 mb-6">Here is exactly how it works</h2>
          <div className="space-y-5 text-gray-300 text-lg">
            <p><strong className="text-white">Step 1 — The Petition</strong><br />People go on record in their congressional district. Real names. Real zip codes. Verified and counted by district. Not a national headcount — a district-by-district evidence base.</p>
            <p><strong className="text-white">Step 2 — The Survey</strong><br />Specific questions. Verified responses. Published results. Should Congress end the unauthorized Iran War? Yes or no. Should everyone have access to affordable healthcare? Yes or no. Should executive orders that harm constituents be reversed? Yes or no. Real questions. Real answers. A documented record of exactly what the people in that district demand.</p>
            <p><strong className="text-white">Step 3 — The Town Hall</strong><br />When a district hits 1,500 verified signatures, a mandatory town hall is triggered. The representative must show up — in public, on the record — and respond to the specific demands their constituents documented. Not talking points. Not press releases. The actual questions their constituents asked.</p>
            <p><strong className="text-white">Step 4 — The Consequence</strong><br />They can agree. They can disagree. They can explain themselves. But they have to show up. Refusing to show up is its own answer. And that answer — documented, published, on the record — becomes the basis for what comes next.</p>
            <p><strong className="text-white">Step 5 — The Replacement</strong><br />If the investigation of their record finds they have betrayed the public trust — if they refuse the town hall, or fail to respond to verified constituent demands — we organize their constituents around that documented failure and push for their replacement. Legally. Democratically. Before the next election if necessary. That is not a threat. That is democracy working the way it was designed to.</p>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* The Math */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">The Math</span>
          <h2 className="text-3xl font-bold text-white mt-4 mb-6">Power is measurable</h2>
          <p className="text-gray-300 text-lg mb-4">Harvard researcher Erica Chenoweth studied 323 political campaigns across 106 years. Her finding: no sustained, nonviolent campaign with 3.5% participation has ever failed. That is 11.6 million people. We are building toward 100 million.</p>
          <p className="text-gray-300 text-lg mb-4">This is not protest math. This is leverage math. When 11.6 million organized people move in the same direction, Congress has two choices:</p>
          <div className="fact-row bg-[#141414] border border-green-500/20 rounded-lg p-3 my-2">✅ Align with the clear will of their constituents.</div>
          <div className="fact-row bg-[#141414] border border-green-500/20 rounded-lg p-3 my-2">📢 Or explain publicly — on the record — why they refused.</div>
          <p className="text-white font-bold mt-4 mb-6">That accountability is the weapon. That accountability is the point.</p>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Cascade</h3>
          <div className="space-y-3">
            <div className="bg-[#141414] border border-green-500/20 rounded-lg p-3 text-gray-400">💡 One conversion from a $10,000 insurance plan to a $600 telehealth plan frees enough savings to fund <strong className="text-white">12 more people.</strong></div>
            <div className="bg-[#141414] border border-green-500/20 rounded-lg p-3 text-gray-400">📈 Those 12 fund <strong className="text-white">148.</strong> Those 148 fund <strong className="text-white">1,825.</strong></div>
            <div className="bg-[#141414] border border-green-500/20 rounded-lg p-3 text-gray-400">🎯 At 3.5% — the cascade becomes self-sustaining.</div>
          </div>
          <p className="text-gray-300 text-lg mt-4">One household shifts. Then twelve. Then thousands. Then millions. Not charity. Not donations. Savings that fund the next layer. That's not a theory. That's arithmetic.</p>

          <div className="graphic-container my-12 text-center">
            <img src="/images/The_3_5__Threshold_jpg.png" alt="3.5% Threshold" className="max-w-[90%] mx-auto rounded-lg border border-green-500/30 cursor-pointer" onClick={() => openModal('/images/The_3_5__Threshold_jpg.png')} />
            <p className="text-green-400 text-base italic mt-3">3.5% organized participation – no nonviolent campaign at this scale has ever failed.</p>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* The Timeline */}
        <section className="max-w-4xl mx-auto px-6 py-8 bg-[#0d1525] rounded-xl">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">The Timeline</span>
          <h2 className="text-3xl font-bold text-white mt-4 mb-6">Now through July 4, 2026</h2>
          <p className="text-gray-300 text-lg mb-4">July 4 is the 250th anniversary of America's founding documents. One hundred million signatures is not rebellion. It is patriotism — peaceful, organized, undeniable. If we reach 3.5% before July 4, Independence Day becomes a reckoning — not just a celebration. The most patriotic act in modern American history: citizens organized by district, presenting verified demands to their representatives, forcing a public response.</p>
          <h3 className="text-xl font-bold text-white mt-6 mb-3">November 2026 — The Midterm Realignment</h3>
          <p className="text-gray-300 text-lg">By November 2026, every congressional district will have candidates on record regarding PHIERS demands — not because of party loyalty, but because the people in their district have spoken and documented it. Representatives who refused the town hall. Representatives who failed to respond to verified constituent demands. Representatives whose donor records show they chose their funders over their constituents. All of it on the record. All of it published. All of it available to every voter in their district. That is the midterm realignment.</p>
        </section>

        <hr className="border-green/20 my-8" />

        {/* What We Are Demanding */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">The Mission</span>
          <h2 className="text-3xl font-bold text-white mt-4 mb-6">What We Are Demanding. Specifically.</h2>
          <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
            <li>End the unauthorized Iran War — Congress never approved it</li>
            <li>Affordable telehealth added to the ACA Exchange</li>
            <li>Access extended to CMS, VA, Tri-Care, and Indian Health Service beneficiaries</li>
            <li>Reversal of executive orders that harm constituents without Congressional approval</li>
            <li>Monthly cost-of-living relief when the cascade reaches critical mass</li>
            <li>Job creation and small business support funded by redirected healthcare savings</li>
          </ul>
          <div className="bg-[#0d1525] border-l-4 border-green-500 p-6">
            <p className="text-gray-300"><strong className="text-white">We are not asking for special treatment.</strong><br />We are asking Congress to adopt solutions that already work — or stand before their constituents and explain, on the record, why they won't.</p>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* Your Role Right Now */}
        <section className="max-w-4xl mx-auto px-6 py-8 bg-[#0d1525] rounded-xl">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">Your Role</span>
          <h2 className="text-3xl font-bold text-white mt-4 mb-6">Right Now</h2>
          <div className="tier-block bg-[#111d35] p-5 rounded-lg border border-green-500/20 mb-6">
            <h3 className="text-green-400 text-xl font-bold">Supporters — sign and share</h3>
            <ul className="list-disc list-inside text-gray-400"><li>Sign the petition and complete the survey</li><li>Share PHIERS with people you trust</li><li>Be counted in your district</li></ul>
          </div>
          <div className="tier-block bg-[#111d35] p-5 rounded-lg border border-green-500/20 mb-6">
            <h3 className="text-green-400 text-xl font-bold">Volunteers — organize locally</h3>
            <ul className="list-disc list-inside text-gray-400"><li>Lead signature drives in your community</li><li>Help manage online channels and social sharing</li></ul>
          </div>
          <div className="tier-block bg-[#111d35] p-5 rounded-lg border border-green-500/20 mb-6">
            <h3 className="text-green-400 text-xl font-bold">Organizers — build district teams</h3>
            <ul className="list-disc list-inside text-gray-400"><li>Coordinate district-level efforts toward 1,500 verified signatures</li><li>Train volunteers and build local teams</li><li>Call the town hall when you hit 1,500</li></ul>
          </div>
          <div className="text-center mt-8">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* The Declaration and final images */}
        <section className="max-w-4xl mx-auto px-6 py-8 text-center">
          <span className="text-green-400 text-xs uppercase tracking-wider font-bold">The Declaration</span>
          <div className="blockquote-pull my-6">
            <p>“PHIERS is the blueprint. The movement is the engine. And when enough of us move together, we are unstoppable.”</p>
            <div className="attr">— Will Price, PHIERS Founders</div>
          </div>
          <div className="graphic-container my-12">
            <img src="/images/100Mil_Americans_jpg.png" alt="100 Million Americans" className="max-w-[90%] mx-auto rounded-lg border border-green-500/30 cursor-pointer" onClick={() => openModal('/images/100Mil_Americans_jpg.png')} />
            <p className="text-green-400 text-lg font-bold italic mt-3">100 million Americans. July 4, 2026. The destination.</p>
          </div>
          <div className="flex justify-center my-12">
            <img src="/images/Hikers_Helping_Hand.jpg" alt="We rise together" className="rounded-xl w-full max-w-3xl mx-auto shadow-md" />
          </div>
          <div className="my-8">
            <p className="text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-8">
              UNBREAKABLE.<br />UNSTOPPABLE.<br /><span className="text-green-400">UNFORGETTABLE.</span>
            </p>
            <Button href="/action" variant="primary">✊ Make Your Voice Count</Button>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <Button href="/petition" variant="secondary">✍ Sign the Petition</Button>
            </div>
          </div>
        </section>

        {/* Trilogy continuation links */}
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

      <style jsx global>{`
        .back-to-top { position: fixed; bottom: 24px; right: 24px; background: #3ddc84; color: #0a1022; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; opacity: 0; visibility: hidden; transition: all 150ms ease; z-index: 999; border: none; }
        .back-to-top.visible { opacity: 1; visibility: visible; }
        .back-to-top:hover { background: #2ab568; transform: translateY(-2px); }
        .video-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; border: 2px solid rgba(61, 220, 132, 0.2); box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5); }
        .video-wrapper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: pointer; }
        .blockquote-pull { font-size: 1.25rem; font-style: italic; border-left: 4px solid #3ddc84; padding-left: 1.5rem; margin: 2rem 0; color: #e5e7eb; }
        .blockquote-pull .attr { font-size: 0.875rem; color: #9ca3af; margin-top: 0.5rem; font-style: normal; }
      `}</style>
      <script dangerouslySetInnerHTML={{
        __html: `window.addEventListener('scroll', function() { var btt = document.getElementById('back-to-top'); if (btt) { if (window.scrollY > 400) { btt.classList.add('visible'); } else { btt.classList.remove('visible'); } } });`
      }} />
    </>
  )
}