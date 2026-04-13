// FILE: app/crisis/page.tsx
// CRISIS PAGE - Complete with design system

'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import StatBlock from '@/components/StatBlock'

export default function CrisisPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/images/Congress_Dont_Work_4U-WEre_changing_that-BIG.jpg"
            alt="Congress doesn't work for you. We're changing that."
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <section className="container section text-center">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">This Is What Existential Looks Like</span>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Five crises. One system.<br /><span className="text-green">Every piece feeding the others — each failure making the next one worse.</span></h1>
          <p className="text-gray-400 max-w-[700px] mx-auto">That's why nothing ever gets fixed. And that's exactly what PHIERS was built to interrupt.</p>
        </section>

        <hr className="border-green/20" />

        {/* Introduction */}
        <section className="container section">
          <p className="text-body mb-4">We've been taught to treat these as separate problems. That's exactly why nothing gets fixed. They're not separate. They're one system. And right now every dimension is at or near a breaking point — simultaneously.</p>
        </section>

        <hr className="border-green/20" />

        {/* Dimension 1 - War */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">DIMENSION 1 — WAR</span>
            <p className="text-body mb-3">Congress has not authorized this war. Not once. No vote. No debate. No exit strategy.</p>
            <p className="text-body mb-3">There is no part of your life that doesn't run on oil.</p>
            <p className="text-body mb-3">Your food. Your medicine. Your hospital. Your house. Everything moves on oil or is made from it.</p>
            <p className="text-body mb-3">The Strait of Hormuz carries 30% of the world's seaborne oil. When that corridor is threatened, inflation doesn't tick up — it detonates across every supply chain simultaneously.</p>
            <p className="text-body mb-4">This is not a foreign policy story. It's a kitchen table story. A medicine cabinet story. A "how do I pay this month's bills" story.</p>
            <p className="font-condensed text-lg text-white font-bold mb-2">The Constitution is clear: Congress declares war. Not the President. Not the Pentagon. Not defense contractors.</p>
            <p className="text-body mb-4">Your representatives. The ones you elected. The ones you can replace.</p>
            <Link href="/no-war" className="text-green text-sm font-condensed font-bold hover:underline">→ See the full case: No War / No Draft</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Dimension 2 - Healthcare */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">DIMENSION 2 — HEALTHCARE</span>
          <p className="text-body mb-3">CMS pays $8,000 per person per year under traditional insurance.</p>
          <p className="text-body mb-3">80% of healthcare needs can be met through telehealth at $600 per person per year.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[500px] mx-auto my-4">
            <StatBlock number="$8,000" label="what we pay" />
            <StatBlock number="$600" label="what we need" />
            <StatBlock number="$7,400" label="freed per person" />
          </div>
          <div className="max-w-[500px] mx-auto my-4">
            <Image
              src="/images/80-20_Truth_About_Healthcare.jpg"
              alt="80/20 Truth About Healthcare"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
          <p className="text-body mb-4">Multiplied across the population: $2.73 trillion annually. Not profit from care. Overhead, admin cost, and margin extracted by a system designed around payment processing, not health outcomes.</p>
          <p className="font-condensed text-lg text-white font-bold mb-4">The healthcare crisis and the war aren't parallel emergencies. They're the same emergency feeding each other.</p>
          <Link href="/simple-math" className="text-green text-sm font-condensed font-bold hover:underline">→ See the math</Link>
        </section>

        <hr className="border-green/20" />

        {/* Dimension 3 - Economy */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">DIMENSION 3 — ECONOMY</span>
            <p className="text-body mb-3">Real wages have been effectively flat for decades.</p>
            <p className="text-body mb-4">Not because workers became less productive — because the gains went somewhere else.</p>
            <p className="text-body mb-3">The healthcare conversion changes that directly. Every $7,400 freed per person is capital that stays in the community instead of flowing to shareholders.</p>
            <p className="font-condensed text-lg text-white font-bold mb-4">PHIERWorks is the employment engine inside the healthcare engine. One powers the other.</p>
            <Link href="/solutions" className="text-green text-sm font-condensed font-bold hover:underline">→ See 5D Solutions</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Dimension 4 - Politics */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">DIMENSION 4 — POLITICS</span>
          <div className="grid grid-cols-3 gap-3 max-w-[400px] mx-auto my-4">
            <StatBlock number="12%" label="approval rating" />
            <StatBlock number="92%" label="reelection rate" />
            <StatBlock number="3.5%" label="threshold for change" />
          </div>
          <div className="max-w-[300px] mx-auto my-4">
            <Image
              src="/images/3.5pct_Erica_Chenoweth.jpg"
              alt="3.5% — Chenoweth Research"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg border border-white/10"
            />
          </div>
          <p className="text-body mb-4">That 12% vs 92% gap isn't dysfunction. It's a system working exactly as designed — for the people inside it, not the people it's supposed to represent.</p>
          <p className="font-condensed text-lg text-white font-bold mb-4">The only thing that reliably changes a politician's behavior is organized people in their specific district — names on the record, with documented electoral consequences.</p>
          <Link href="/leverage" className="text-green text-sm font-condensed font-bold hover:underline">→ See the leverage</Link>
        </section>

        <hr className="border-green/20" />

        {/* Dimension 5 - Peace */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">DIMENSION 5 — PEACE</span>
            <p className="text-body mb-3">Peace isn't naive. Peace is the precondition for everything else on this list.</p>
            <p className="text-body mb-3">You cannot redirect $2.73 trillion from insurance overhead to people if the economy is in freefall.</p>
            <p className="text-body mb-3">You cannot build 12 million living-wage jobs if the workforce is being drawn into military service.</p>
            <p className="text-body mb-4">Every dollar spent on an unauthorized war is a dollar not spent on healthcare, wages, infrastructure, or the future.</p>
            <p className="font-condensed text-xl text-green font-bold mb-4">Peace isn't the last ring. Peace is what makes every other ring functional.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Spiral */}
        <section className="container section text-center">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">THE SPIRAL — HOW THEY FEED EACH OTHER</span>
          <p className="text-body max-w-[600px] mx-auto mb-6">Military escalation → oil price shock → Every supply chain tightens → Healthcare more expensive → Workers sicker, under more pressure → Economy contracts, wages fall → Desperation rises → More escalation risk → Loop repeats</p>
          <p className="font-condensed text-2xl text-green font-bold">PHIERStorm is the pattern interrupt. One lever. Every dimension turns.</p>
          
          <div className="flex flex-col gap-3 max-w-md mx-auto mt-8">
            <Button href="/petition" variant="primary" fullWidth>✍ ADD MY NAME</Button>
            <Button href="/simple-math" variant="secondary" fullWidth>→ See the Math</Button>
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
