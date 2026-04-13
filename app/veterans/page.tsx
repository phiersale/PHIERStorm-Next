'use client'

import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function VeteransPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">You served the country.<br /><span className="text-[#3ddc84]">Now the country needs your leverage.</span></h1>
          
          <p className="text-gray-400 mb-8">Veterans know something most Americans don't: Systems don't change because people complain. They change because people organize. PHIERS gives veterans the mechanism to force Congress to act — district by district, on the record, with consequences they cannot ignore.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">20M+</div>
              <p className="text-gray-500 text-xs">Veterans who receive little or no meaningful VA support</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">30,000</div>
              <p className="text-gray-500 text-xs">VA staff being cut — the people who process claims and schedule care</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">&lt;10%</div>
              <p className="text-gray-500 text-xs">Veterans with 100% VA coverage</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">$600</div>
              <p className="text-gray-500 text-xs">Per year for telehealth that covers 80% of what veterans actually need</p>
            </div>
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Problem</h2>
          <p className="text-gray-400 mb-3">Veterans face:</p>
          <p className="text-gray-400 mb-2">→ Delayed care</p>
          <p className="text-gray-400 mb-2">→ Denied claims</p>
          <p className="text-gray-400 mb-2">→ Impossible paperwork</p>
          <p className="text-gray-400 mb-2">→ Understaffed clinics</p>
          <p className="text-gray-400 mb-2">→ Rising costs</p>
          <p className="text-gray-400 mb-6">→ Political promises with no follow-through</p>
          <p className="font-condensed text-lg text-white font-bold mb-6">Not because solutions don't exist — but because Congress doesn't feel pressure from the people who earned the right to demand better.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Betrayal by the Numbers</h2>
          <p className="font-condensed text-lg text-white font-bold mb-3">What they say vs. what the numbers show:</p>
          <p className="text-gray-400 mb-3"><strong className="text-white">"The VA serves veterans."</strong> The VA serves fewer than 9 million of 20+ million. If you're not in that 9 million, you get nothing.</p>
          <p className="text-gray-400 mb-3"><strong className="text-white">"No cuts to veteran benefits."</strong> They already tried to cut disability benefits for veterans whose medication was working. They backed off. The rule is still on the books.</p>
          <p className="text-gray-400 mb-6"><strong className="text-white">"We're making the VA more efficient."</strong> Cutting 30,000 staff to pre-PACT Act levels means longer waits, denied claims, veterans falling through the cracks.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">Why Will Price Quit the VA</h2>
          <p className="text-gray-400 mb-3">20+ years inside the VA system. Senior Analyst, Electronic Health Records. Registration, Eligibility, and Enrollment. One of five civilians in the VA's first enterprise-wide reengineering initiative.</p>
          <p className="text-gray-400 mb-6">He saw how the system actually worked. And who it left behind. He quit to build the alternative.</p>
          <div className="bg-[#0a1628] border-l-4 border-[#3ddc84] p-6 my-8 italic">
            <p className="text-gray-300">"The VA was designed to serve a fraction of veterans. Even at its best, it leaves more than half behind. I didn't leave because the VA was being cut — I left because the architecture was never built to serve all veterans in the first place. PHIERS is the architecture that does."</p>
            <p className="text-[#3ddc84] text-sm mt-3">— Will Price, Chief Solutions Architect</p>
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">What PHIERS Delivers</h2>
          <p className="font-condensed text-lg text-white font-bold mb-3">For every veteran. No exceptions.</p>
          <p className="text-gray-400 mb-3"><strong className="text-white">Covers all 20M+ veterans</strong> — Not just the 9 million the VA serves.</p>
          <p className="text-gray-400 mb-3"><strong className="text-white">No medication trap</strong> — Your coverage isn't tied to your disability rating. Taking medication that works doesn't reduce your benefits.</p>
          <p className="text-gray-400 mb-3"><strong className="text-white">Mental health on demand</strong> — $600/year covers unlimited telehealth for PTSD, depression, anxiety — without the VA waitlist.</p>
          <p className="text-gray-400 mb-6"><strong className="text-white">Not dependent on VA staffing</strong> — 30,000 VA layoffs don't touch it. Budget cuts don't touch it. Which party controls Congress doesn't touch it.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Dimension They Never Discuss</h2>
          <p className="text-gray-400 mb-6">The largest military buildup in the Middle East since the 2003 Iraq invasion is creating a new generation of veterans. They'll come home to a VA that no longer exists. PHIERS links health, jobs, and economic security to peace — deliberately. Healthy, secure people don't need endless war economies to function. That's not ideology. That's math.</p>
          
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8 text-center">
            <p className="font-condensed text-lg text-white font-bold mb-6">Your service built this country. Your leverage can fix it.</p>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Link href="/petition" className="px-6 py-3 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">✍ SIGN FOR EVERY VETERAN</Link>
              <Link href="/leverage" className="px-6 py-3 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">→ See How It Works</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
