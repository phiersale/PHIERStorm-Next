// FILE: app/veterans/page.tsx
// VETERANS PAGE - Complete with design system

'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import StatBlock from '@/components/StatBlock'

export default function VeteransPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/images/Veterans_Deserve_Better_NOW.jpg"
            alt="Veterans Deserve Better NOW"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">You served the country.<br /><span className="text-green">Now the country needs your leverage.</span></h1>
          <p className="text-gray-400 max-w-[700px] mx-auto">Veterans know something most Americans don't: Systems don't change because people complain. They change because people organize. PHIERS gives veterans the mechanism to force Congress to act — district by district, on the record, with consequences they cannot ignore.</p>
        </section>

        <hr className="border-green/20" />

        {/* Key Numbers */}
        <section className="container section text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatBlock number="20M+" label="Veterans with little or no meaningful VA support" />
            <StatBlock number="30,000" label="VA staff being cut" />
            <StatBlock number="&lt;10%" label="Veterans with 100% VA coverage" />
            <StatBlock number="$600" label="Per year for telehealth that covers 80% of what veterans actually need" />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Problem */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Problem</span>
            <p className="text-body mb-3">Veterans face:</p>
            <div className="grid grid-cols-2 gap-2 max-w-[400px] mx-auto mb-4">
              <p className="text-body text-sm">→ Delayed care</p>
              <p className="text-body text-sm">→ Denied claims</p>
              <p className="text-body text-sm">→ Impossible paperwork</p>
              <p className="text-body text-sm">→ Understaffed clinics</p>
              <p className="text-body text-sm">→ Rising costs</p>
              <p className="text-body text-sm">→ Political promises with no follow-through</p>
            </div>
            <p className="font-condensed text-lg text-white font-bold">Not because solutions don't exist — but because Congress doesn't feel pressure from the people who earned the right to demand better.</p>
            
            <div className="max-w-[500px] mx-auto my-4">
              <Image
                src="/images/veterans_from_back.jpg"
                alt="Veterans — from behind"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20"
              />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Betrayal by the Numbers */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Betrayal by the Numbers</span>
          <p className="font-condensed text-lg text-white font-bold mb-3">What they say vs. what the numbers show:</p>
          <p className="text-body mb-3"><strong className="text-white">"The VA serves veterans."</strong> The VA serves fewer than 9 million of 20+ million. If you're not in that 9 million, you get nothing.</p>
          <p className="text-body mb-3"><strong className="text-white">"No cuts to veteran benefits."</strong> They already tried to cut disability benefits for veterans whose medication was working. They backed off. The rule is still on the books.</p>
          <p className="text-body mb-4"><strong className="text-white">"We're making the VA more efficient."</strong> Cutting 30,000 staff to pre-PACT Act levels means longer waits, denied claims, veterans falling through the cracks.</p>
          
          <div className="max-w-[500px] mx-auto my-4">
            <Image
              src="/images/Veterans_for_Peace.jpg"
              alt="Veterans for Peace"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Why Will Price Quit the VA */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Why Will Price Quit the VA</span>
            <p className="text-body mb-3">20+ years inside the VA system. Senior Analyst, Electronic Health Records. Registration, Eligibility, and Enrollment. One of five civilians in the VA's first enterprise-wide reengineering initiative.</p>
            <p className="text-body mb-4">He saw how the system actually worked. And who it left behind. He quit to build the alternative.</p>
            
            <div className="bg-bg-card border-l-4 border-green p-4 my-4 italic">
              <p className="text-gray-300">"The VA was designed to serve a fraction of veterans. Even at its best, it leaves more than half behind. I didn't leave because the VA was being cut — I left because the architecture was never built to serve all veterans in the first place. PHIERS is the architecture that does."</p>
              <p className="text-green text-sm mt-2">— Will Price, Chief Solutions Architect</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What PHIERS Delivers */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What PHIERS Delivers</span>
          <p className="font-condensed text-lg text-white font-bold mb-3">For every veteran. No exceptions.</p>
          <p className="text-body mb-2"><strong className="text-white">Covers all 20M+ veterans</strong> — Not just the 9 million the VA serves.</p>
          <p className="text-body mb-2"><strong className="text-white">No medication trap</strong> — Your coverage isn't tied to your disability rating. Taking medication that works doesn't reduce your benefits.</p>
          <p className="text-body mb-2"><strong className="text-white">Mental health on demand</strong> — $600/year covers unlimited telehealth for PTSD, depression, anxiety — without the VA waitlist.</p>
          <p className="text-body mb-4"><strong className="text-white">Not dependent on VA staffing</strong> — 30,000 VA layoffs don't touch it. Budget cuts don't touch it. Which party controls Congress doesn't touch it.</p>
        </section>

        <hr className="border-green/20" />

        {/* The Dimension They Never Discuss */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Dimension They Never Discuss</span>
            <p className="text-body mb-4">The largest military buildup in the Middle East since the 2003 Iraq invasion is creating a new generation of veterans. They'll come home to a VA that no longer exists. PHIERS links health, jobs, and economic security to peace — deliberately. Healthy, secure people don't need endless war economies to function. That's not ideology. That's math.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <p className="font-condensed text-lg text-white font-bold mb-4">Your service built this country. Your leverage can fix it.</p>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>✍ SIGN FOR EVERY VETERAN</Button>
              <Button href="/leverage" variant="secondary" fullWidth>→ See How It Works</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

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
