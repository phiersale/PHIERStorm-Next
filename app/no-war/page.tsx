// FILE: app/no-war/page.tsx
// NO WAR PAGE - Complete with design system

'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function NoWarPage() {
  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red text-white text-center py-3 px-4 font-condensed font-bold text-sm z-50 relative">
        <span className="inline-block bg-black/25 rounded px-2 py-0.5 mr-2 text-xs tracking-wide">URGENT</span>
        Congress is home right now. A president who threatened to destroy a civilization has no congressional authorization for this war.
        <strong className="mx-1">The window is open. Your name is leverage.</strong>
        <Link href="/petition" className="text-white underline font-black ml-1">→ BE COUNTED</Link>
      </div>

      <Navigation />
      <main>
        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/images/NoWar.jpg"
            alt="No War — Congress must authorize"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">War without authorization<br /><span className="text-green">is not democracy.</span><br />It's danger.</h1>
          <p className="text-gray-400 max-w-[700px] mx-auto">Congress alone has the constitutional authority to declare war. When a president threatens to destroy a civilization without that authorization, the only mechanism that can force accountability is district-level pressure. PHIERS is that mechanism.</p>
        </section>

        <hr className="border-green/20" />

        {/* The Reality */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Reality</span>
            <p className="text-body mb-3">There is no part of your life that doesn't run on oil.</p>
            <p className="text-body mb-3">Your food. Your medicine. Your hospital. Your heat. Everything you buy, eat, wear, or need to stay alive moves on oil or is made from it.</p>
            <p className="text-body mb-3">The Strait of Hormuz carries 30% of the world's seaborne oil.</p>
            <p className="text-body mb-3">When military escalation threatens that corridor, inflation doesn't tick up — it detonates across every supply chain simultaneously.</p>
            <p className="text-body mb-4">Healthcare costs spike on top of already broken healthcare costs. Food prices climb. The economy contracts. This is not a foreign policy story. It's a kitchen table story.</p>
            
            <div className="max-w-[500px] mx-auto my-4">
              <Image
                src="/images/Congress_Dont_Work_4U-WEre_changing_that-sm.jpg"
                alt="Congress vs President vs People"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20"
              />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Constitutional Case */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Constitutional Case</span>
          <p className="text-body mb-3">The Constitution is unambiguous. Article I, Section 8: Congress declares war.</p>
          <p className="text-body mb-3">Not the President. Not the Pentagon. Not defense contractors.</p>
          <p className="text-body mb-4">Your representatives. The ones you elected. The ones you can replace.</p>
          <p className="text-body mb-3">Military action without a congressional vote bypasses that accountability entirely.</p>
          <p className="text-body mb-4">Members of Congress get to benefit from the action politically — or distance themselves from it — without ever having to put their names on it.</p>
        </section>

        <hr className="border-green/20" />

        {/* The International Case */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The International Case</span>
            <p className="text-body">The United Nations Charter — the framework America championed after World War II — also says no. Article 2(4) prohibits the threat or use of force against another nation's territorial integrity. Military action without UN authorization doesn't just raise constitutional questions. It breaks the rules America wrote, signed, and spent decades demanding every other nation follow.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Draft Risk */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Draft Risk</span>
          <p className="text-body mb-3">When wars escalate without congressional authorization, without exit strategies, without public mandates — pressure to expand the fighting force builds.</p>
          <p className="text-body mb-3">History is consistent on this.</p>
          <p className="text-body mb-3">The people who bear that cost are the ones who had no vote in creating it.</p>
          <p className="font-condensed text-xl text-green font-bold mb-4">The only thing that stops a draft is people who organized before it happened.</p>
        </section>

        <hr className="border-green/20" />

        {/* Why Protest Alone Won't Stop It */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Why Protest Alone Won't Stop It</span>
            <p className="text-body">Congress ignores protests because protests don't threaten their jobs. The only thing that reliably moves Congress is organized people — district by district, names on the record, with documented electoral consequences. No leverage means no change. That's the lesson of every failed movement.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* How PHIERS Stops It */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">How PHIERS Stops It</span>
          <p className="text-body mb-3">Build leverage once. That same leverage forces healthcare reform, war accountability, and stops the draft.</p>
          <p className="text-body mb-2">Step 1 — Organize around one winnable demand. $600 telehealth — specific, verifiable, achievable.</p>
          <p className="text-body mb-2">Step 2 — Reach the threshold. 1,500 per district. Every seat becomes competitive.</p>
          <p className="text-body mb-4">Step 3 — Force accountability. No more blank checks. No more undeclared conflicts.</p>
        </section>

        <hr className="border-green/20" />

        {/* The Demand */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Demand</span>
            <p className="text-body mb-4">Congress must: Assert its constitutional authority. Block unauthorized military action. Force public accountability. Require a vote before any escalation. This is not partisan. This is constitutional.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <p className="text-body mb-4">Your name on the record isn't just about healthcare. It's proof you showed up. That you were counted. That when the moment came — you didn't wait for someone else to fix it.</p>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>✍ SIGN TO STOP THE WAR</Button>
              <Button href="/leverage" variant="secondary" fullWidth>→ See How It Works</Button>
              <Link href="/crisis" className="text-green text-sm font-condensed font-bold hover:underline text-center">← Back to the Crisis</Link>
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
