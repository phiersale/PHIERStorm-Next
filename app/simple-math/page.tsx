'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function SimpleMathPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">The math Congress doesn't want you to see.</h1>
          
          <div className="text-center my-12">
            <p className="font-display text-5xl text-[#ffd60a]">$10,000</p>
            <p className="text-gray-400 mb-4">per person</p>
            <p className="font-display text-3xl text-gray-500">vs.</p>
            <p className="font-display text-5xl text-[#3ddc84] mt-4">$600</p>
            <p className="text-gray-400 mb-8">per person</p>
            <p className="font-condensed text-lg text-white font-bold">Same care. Congress could authorize the difference tomorrow.<br />They haven't had to — until now.</p>
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Core Comparison</h2>
          <p className="text-gray-400 mb-3">Replace a $10,000 per year insurance product with a $600 per year telehealth-first plan.</p>
          <p className="text-gray-400 mb-3">The savings fund:</p>
          <p className="text-gray-400 mb-2">→ Universal access</p>
          <p className="text-gray-400 mb-2">→ Millions of healthcare jobs</p>
          <p className="text-gray-400 mb-6">→ Massive system-wide savings</p>
          <p className="font-condensed text-lg text-[#3ddc84] font-bold">All using existing law. No new taxes. No new bureaucracy. Just math.</p>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-4">The Cascade</h2>
          <p className="text-gray-400 mb-3">One conversion funds twelve more.</p>
          <p className="text-gray-400 mb-3">Twelve fund 148.</p>
          <p className="text-gray-400 mb-6">148 fund 1,825.</p>
          <p className="font-condensed text-lg text-white font-bold mb-4">The cascade doesn't slow — it accelerates.</p>
          <p className="text-gray-400 mb-3">Because each person freed from a $10,000 plan saves enough to cover twelve people at $600.</p>
          <p className="text-gray-400 mb-3">Those twelve cover 148.</p>
          <p className="text-gray-400 mb-3">Those 148 cover 1,825.</p>
          <p className="text-gray-400 mb-3">In nine iterations: 234 million Americans covered.</p>
          <p className="text-gray-400 mb-6">In 8–13 months.</p>
          <p className="font-condensed text-xl text-[#ffd60a] font-bold mb-8">That's not a campaign promise. That's arithmetic.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">Why We Start with Medicaid</h2>
          <p className="text-gray-400 mb-3">Medicaid is the ignition point.</p>
          <p className="text-gray-400 mb-3">It's where the savings are largest, the vulnerability is highest, and the proof is undeniable.</p>
          <p className="text-gray-400 mb-3">CMS pays $8,000+ per person per year.</p>
          <p className="text-gray-400 mb-3">80% of those people need $600 of telehealth.</p>
          <p className="text-gray-400 mb-3">$7,400 freed per person.</p>
          <p className="text-gray-400 mb-6">12 more covered per conversion. The cascade starts here.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Expansion Path</h2>
          <div className="space-y-4 mb-8">
            <div><p className="font-condensed font-bold text-white">Step 1 — Medicaid (120M people)</p><p className="text-gray-400 text-sm">Highest cost. Largest savings. Most vulnerable protected first. Result: $888 billion saved annually.</p></div>
            <div><p className="font-condensed font-bold text-white">Step 2 — ACA Marketplace (~14M people)</p><p className="text-gray-400 text-sm">Same math. Same savings. Result: $103 billion additional.</p></div>
            <div><p className="font-condensed font-bold text-white">Step 3 — Private Insurance (~150M people)</p><p className="text-gray-400 text-sm">Voluntary. Employers and workers both save. Result: $1.1 trillion+ additional.</p></div>
            <div><p className="font-condensed font-bold text-white">Step 4 — The Uninsured (~27M people)</p><p className="text-gray-400 text-sm">By this point, $600 is easily affordable. No one left behind. Result: True universal coverage.</p></div>
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The 3.5% Factor</h2>
          <div className="max-w-[380px] mx-auto mb-6">
            <Image src="/images/3.5pct_Erica_Chenoweth.jpg" alt="3.5% — Chenoweth Research" width={380} height={250} className="rounded-lg border border-white/10 mx-auto" />
          </div>
          <p className="text-gray-400 mb-3">Harvard researcher Erica Chenoweth studied 323 campaigns from 1900–2006.</p>
          <p className="font-condensed text-lg text-white font-bold mb-4">Finding: NO campaign where 3.5% participated in sustained organized action ever failed.</p>
          <p className="text-gray-400 mb-3">3.5% of America = 11.6 million people.</p>
          <p className="text-gray-400 mb-6">We have 100M+ affected by this crisis. That's 9x the threshold.</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-8">The math is inevitable. We just need to organize.</p>
          
          <div className="bg-[#0a1628] border-l-4 border-[#ffd60a] p-6 my-8">
            <p className="text-gray-400 text-lg mb-3">Nothing changes until ignoring people costs more than responding to them.</p>
            <p className="font-condensed text-xl text-[#3ddc84] font-bold">The math makes that cost undeniable. Congress knows it. Now you do too.</p>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/petition" className="inline-block px-8 py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ ADD MY NAME</Link>
            <Link href="/solutions" className="block text-[#3ddc84] text-sm font-condensed font-bold hover:underline mt-4">→ See 5D Solutions</Link>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
