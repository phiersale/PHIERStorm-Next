'use client'

import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function NoWarPage() {
  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white text-center py-3 px-6 font-condensed font-bold text-base z-50 relative">
        <span className="inline-block bg-black/25 rounded px-2 py-0.5 mr-2 text-xs tracking-wide">URGENT</span>
        Congress is home right now. A president who threatened to destroy a civilization has no congressional authorization for this war.
        <strong className="mx-1">The window is open. Your name is leverage.</strong>
        <Link href="/petition" className="text-white underline font-black ml-1">→ BE COUNTED</Link>
      </div>
      
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">War without authorization<br /><span className="text-[#3ddc84]">is not democracy.</span><br />It's danger.</h1>
          
          <p className="text-gray-400 mb-8">Congress alone has the constitutional authority to declare war. When a president threatens to destroy a civilization without that authorization, the only mechanism that can force accountability is district-level pressure. PHIERS is that mechanism.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Reality</h2>
          <p className="text-gray-400 mb-3">There is no part of your life that doesn't run on oil.</p>
          <p className="text-gray-400 mb-3">Your food. Your medicine. Your hospital. Your heat. Everything you buy, eat, wear, or need to stay alive moves on oil or is made from it.</p>
          <p className="text-gray-400 mb-3">The Strait of Hormuz carries 30% of the world's seaborne oil.</p>
          <p className="text-gray-400 mb-3">When military escalation threatens that corridor, inflation doesn't tick up — it detonates across every supply chain simultaneously.</p>
          <p className="text-gray-400 mb-6">Healthcare costs spike on top of already broken healthcare costs. Food prices climb. The economy contracts. This is not a foreign policy story. It's a kitchen table story.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Constitutional Case</h2>
          <p className="text-gray-400 mb-3">The Constitution is unambiguous. Article I, Section 8: Congress declares war.</p>
          <p className="text-gray-400 mb-3">Not the President. Not the Pentagon. Not defense contractors.</p>
          <p className="text-gray-400 mb-6">Your representatives. The ones you elected. The ones you can replace.</p>
          <p className="text-gray-400 mb-3">Military action without a congressional vote bypasses that accountability entirely.</p>
          <p className="text-gray-400 mb-6">Members of Congress get to benefit from the action politically — or distance themselves from it — without ever having to put their names on it.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The International Case</h2>
          <p className="text-gray-400 mb-6">The United Nations Charter — the framework America championed after World War II — also says no. Article 2(4) prohibits the threat or use of force against another nation's territorial integrity. Military action without UN authorization doesn't just raise constitutional questions. It breaks the rules America wrote, signed, and spent decades demanding every other nation follow.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Draft Risk</h2>
          <p className="text-gray-400 mb-3">When wars escalate without congressional authorization, without exit strategies, without public mandates — pressure to expand the fighting force builds.</p>
          <p className="text-gray-400 mb-3">History is consistent on this.</p>
          <p className="text-gray-400 mb-3">The people who bear that cost are the ones who had no vote in creating it.</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-8">The only thing that stops a draft is people who organized before it happened.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">Why Protest Alone Won't Stop It</h2>
          <p className="text-gray-400 mb-6">Congress ignores protests because protests don't threaten their jobs. The only thing that reliably moves Congress is organized people — district by district, names on the record, with documented electoral consequences. No leverage means no change. That's the lesson of every failed movement.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">How PHIERS Stops It</h2>
          <p className="text-gray-400 mb-3">Build leverage once. That same leverage forces healthcare reform, war accountability, and stops the draft.</p>
          <p className="text-gray-400 mb-3">Step 1 — Organize around one winnable demand. $600 telehealth — specific, verifiable, achievable.</p>
          <p className="text-gray-400 mb-3">Step 2 — Reach the threshold. 1,500 per district. Every seat becomes competitive.</p>
          <p className="text-gray-400 mb-6">Step 3 — Force accountability. No more blank checks. No more undeclared conflicts.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Demand</h2>
          <p className="text-gray-400 mb-6">Congress must: Assert its constitutional authority. Block unauthorized military action. Force public accountability. Require a vote before any escalation. This is not partisan. This is constitutional.</p>
          
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8 text-center">
            <p className="text-gray-400 mb-4">Your name on the record isn't just about healthcare. It's proof you showed up. That you were counted. That when the moment came — you didn't wait for someone else to fix it.</p>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Link href="/petition" className="px-8 py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ SIGN TO STOP THE WAR</Link>
              <Link href="/leverage" className="px-8 py-4 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">→ See How It Works</Link>
              <Link href="/crisis" className="text-[#3ddc84] text-sm font-condensed font-bold hover:underline">← Back to the Crisis</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
