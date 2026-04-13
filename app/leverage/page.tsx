'use client'

import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function LeveragePage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Congress doesn't respond to passion.<br /><span className="text-[#3ddc84]">It responds to consequences.</span></h1>
          <p className="font-condensed text-lg text-gray-400 text-center mb-12">PHIERS creates those consequences — district by district, right now, not after the next election.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Truth</h2>
          <p className="text-gray-400 mb-6">For decades, Congress has ignored what people want — even when 80–90% of the country agrees.</p>
          <p className="text-gray-400 mb-3">Why?</p>
          <p className="text-gray-400 mb-6">Because the pressure is scattered. Uncoordinated. Easy to ignore.</p>
          <p className="font-condensed text-xl text-white font-bold mb-6">Congress doesn't fear outrage. It fears organized constituents inside its own district.</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-12">That's the leverage.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Math of Power</h2>
          <p className="text-gray-400 mb-3">Lobbyists spend $8.5 million per member of Congress to keep the system exactly where it is.</p>
          <p className="text-gray-400 mb-3">Constituents have $1.95 billion in spending power in every district.</p>
          <p className="font-display text-4xl text-[#ffd60a] font-bold my-6">230 to 1.</p>
          <p className="font-condensed text-xl text-white font-bold mb-6">230:1 is not a fight. It's a mismatch.</p>
          
          <div className="bg-[#0a1628] border-l-4 border-[#ffd60a] p-6 my-8">
            <p className="text-gray-400 text-lg mb-3">Nothing changes until ignoring people costs more than responding to them.</p>
            <p className="font-condensed text-xl text-[#3ddc84] font-bold">At 230:1, the math is not close.</p>
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Tipping Point</h2>
          <p className="text-gray-400 mb-6">You don't need millions. You don't need a national movement. You don't need to flip Congress.</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-4">You need 1,500 people in a single district.</p>
          <p className="text-gray-400 mb-3">That's the threshold where:</p>
          <p className="text-gray-400 mb-2">→ media pays attention</p>
          <p className="text-gray-400 mb-2">→ staffers panic</p>
          <p className="text-gray-400 mb-2">→ donors call</p>
          <p className="text-gray-400 mb-2">→ lobbyists lose control</p>
          <p className="text-gray-400 mb-6">→ representatives respond</p>
          <p className="font-condensed text-lg text-white font-bold">Not because they want to. Because they have to.</p>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-4">How PHIERS Creates Leverage</h2>
          <div className="space-y-4 mb-12">
            <div><p className="font-condensed font-bold text-white">1. You add your name</p><p className="text-gray-400 text-sm">A verified count tied to your representative.</p></div>
            <div><p className="font-condensed font-bold text-white">2. We organize by district</p><p className="text-gray-400 text-sm">Real people. Real numbers. No bots. No noise. Just unavoidable pressure.</p></div>
            <div><p className="font-condensed font-bold text-white">3. The threshold is reached</p><p className="text-gray-400 text-sm">1,500 constituents = mandatory public response.</p></div>
            <div><p className="font-condensed font-bold text-white">4. Accountability becomes immediate</p><p className="text-gray-400 text-sm">Town hall. On the record. No spin. No escape.</p></div>
          </div>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold text-center mb-12">This is not symbolic. This is structural.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">Why It Works Every Time</h2>
          <p className="text-gray-400 mb-6">Harvard's analysis of 323 campaigns across a century found:</p>
          <p className="font-condensed text-lg text-white font-bold mb-4">When even a small percentage of people act together in a coordinated, sustained way — systems respond.</p>
          <p className="text-gray-400 mb-3">Every time.</p>
          <p className="text-gray-400 mb-3">Zero failures.</p>
          <p className="text-gray-400 mb-6">Not once.</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-12">PHIERS is that coordination.</p>
          
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8 text-center">
            <p className="font-condensed text-lg text-[#ffd60a] font-bold mb-4">District counts begin compiling immediately.</p>
            <p className="text-gray-400 mb-4">Your name — counted in your district — is where the pressure starts.</p>
            <p className="text-gray-400 mb-4">When enough districts organize simultaneously, the pressure becomes impossible to outlast.</p>
            <p className="font-condensed text-lg text-white font-bold mb-6">Peaceful. Democratic. Immediate. We are not waiting for November.</p>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Link href="/petition" className="px-6 py-3 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">✍ ADD MY NAME — 30 SECONDS</Link>
              <Link href="/organizers" className="px-8 py-4 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">✊ ORGANIZE YOUR DISTRICT</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
