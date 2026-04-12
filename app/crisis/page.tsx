'use client'

import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function CrisisPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wider block text-center mb-4">This Is What Existential Looks Like</span>
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-6">Five crises. One system.<br /><span className="text-[#3ddc84]">Every piece feeding the others — each failure making the next one worse.</span></h1>
          <p className="text-gray-400 text-center mb-12">That's why nothing ever gets fixed. And that's exactly what PHIERS was built to interrupt.</p>
          
          <p className="text-gray-400 mb-8">We've been taught to treat these as separate problems. That's exactly why nothing gets fixed. They're not separate. They're one system. And right now every dimension is at or near a breaking point — simultaneously.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">DIMENSION 1 — WAR</h2>
          <p className="text-gray-400 mb-3">Congress has not authorized this war. Not once. No vote. No debate. No exit strategy.</p>
          <p className="text-gray-400 mb-3">There is no part of your life that doesn't run on oil.</p>
          <p className="text-gray-400 mb-3">Your food. Your medicine. Your hospital. Your house. Everything moves on oil or is made from it.</p>
          <p className="text-gray-400 mb-3">The Strait of Hormuz carries 30% of the world's seaborne oil. When that corridor is threatened, inflation doesn't tick up — it detonates across every supply chain simultaneously.</p>
          <p className="text-gray-400 mb-6">This is not a foreign policy story. It's a kitchen table story. A medicine cabinet story. A "how do I pay this month's bills" story.</p>
          <p className="font-condensed text-lg text-white font-bold mb-3">The Constitution is clear: Congress declares war. Not the President. Not the Pentagon. Not defense contractors.</p>
          <p className="text-gray-400 mb-6">Your representatives. The ones you elected. The ones you can replace.</p>
          <Link href="/no-war" className="text-[#3ddc84] text-sm font-condensed font-bold hover:underline">→ See the full case: No War / No Draft</Link>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-4">DIMENSION 2 — HEALTHCARE</h2>
          <p className="text-gray-400 mb-3">CMS pays $8,000 per person per year under traditional insurance.</p>
          <p className="text-gray-400 mb-3">80% of healthcare needs can be met through telehealth at $600 per person per year.</p>
          <p className="text-gray-400 mb-3">$8,000 — what we pay</p>
          <p className="text-gray-400 mb-3">$600 — what we need</p>
          <p className="text-gray-400 mb-6">$7,400 — freed per person, per year</p>
          <p className="text-gray-400 mb-6">Multiplied across the population: $2.73 trillion annually. Not profit from care. Overhead, admin cost, and margin extracted by a system designed around payment processing, not health outcomes.</p>
          <p className="font-condensed text-lg text-white font-bold mb-6">The healthcare crisis and the war aren't parallel emergencies. They're the same emergency feeding each other.</p>
          <Link href="/simple-math" className="text-[#3ddc84] text-sm font-condensed font-bold hover:underline">→ See the math</Link>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-4">DIMENSION 3 — ECONOMY</h2>
          <p className="text-gray-400 mb-3">Real wages have been effectively flat for decades.</p>
          <p className="text-gray-400 mb-6">Not because workers became less productive — because the gains went somewhere else.</p>
          <p className="text-gray-400 mb-3">The healthcare conversion changes that directly. Every $7,400 freed per person is capital that stays in the community instead of flowing to shareholders.</p>
          <p className="font-condensed text-lg text-white font-bold mb-6">PHIERWorks is the employment engine inside the healthcare engine. One powers the other.</p>
          <Link href="/solutions" className="text-[#3ddc84] text-sm font-condensed font-bold hover:underline">→ See 5D Solutions</Link>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-4">DIMENSION 4 — POLITICS</h2>
          <p className="text-gray-400 mb-3">12% — Congressional approval rating</p>
          <p className="text-gray-400 mb-3">92% — Congressional reelection rate</p>
          <p className="text-gray-400 mb-6">3.5% — Participation threshold that forces change</p>
          <p className="text-gray-400 mb-6">That 12% vs 92% gap isn't dysfunction. It's a system working exactly as designed — for the people inside it, not the people it's supposed to represent.</p>
          <p className="font-condensed text-lg text-white font-bold mb-6">The only thing that reliably changes a politician's behavior is organized people in their specific district — names on the record, with documented electoral consequences.</p>
          <Link href="/leverage" className="text-[#3ddc84] text-sm font-condensed font-bold hover:underline">→ See the leverage</Link>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-4">DIMENSION 5 — PEACE</h2>
          <p className="text-gray-400 mb-3">Peace isn't naive. Peace is the precondition for everything else on this list.</p>
          <p className="text-gray-400 mb-3">You cannot redirect $2.73 trillion from insurance overhead to people if the economy is in freefall.</p>
          <p className="text-gray-400 mb-3">You cannot build 12 million living-wage jobs if the workforce is being drawn into military service.</p>
          <p className="text-gray-400 mb-6">Every dollar spent on an unauthorized war is a dollar not spent on healthcare, wages, infrastructure, or the future.</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-6">Peace isn't the last ring. Peace is what makes every other ring functional.</p>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-4">THE SPIRAL — HOW THEY FEED EACH OTHER</h2>
          <p className="text-gray-400 mb-3">Military escalation → oil price shock → Every supply chain tightens → Healthcare more expensive → Workers sicker, under more pressure → Economy contracts, wages fall → Desperation rises → More escalation risk → Loop repeats</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold my-8">PHIERStorm is the pattern interrupt. One lever. Every dimension turns.</p>
          
          <div className="text-center mt-8">
            <Link href="/petition" className="inline-block px-8 py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ ADD MY NAME</Link>
            <Link href="/simple-math" className="block text-[#3ddc84] text-sm font-condensed font-bold hover:underline mt-4">→ See the Math</Link>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
