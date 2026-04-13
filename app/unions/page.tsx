'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function UnionsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          
          {/* HERO IMAGE */}
          <div className="relative w-full h-[250px] md:h-[300px] mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/0123_Strong_Union_Nurses_Veterans_hero.jpg"
              alt="Strong Union — Nurses and Veterans"
              fill
              className="object-cover"
            />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Unions built the middle class.<br /><span className="text-[#3ddc84]">PHIERS gives unions the leverage to rebuild it.</span></h1>
          
          <p className="text-gray-400 mb-8">Unions know how to organize. PHIERS gives that organizing district-level political power Congress cannot ignore. This is not a petition. This is a pressure system.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Moment</h2>
          <p className="text-gray-400 mb-3">Workers are striking for the same reason across every industry:</p>
          <p className="text-gray-400 mb-2">→ Healthcare costs are crushing families</p>
          <p className="text-gray-400 mb-2">→ Staffing shortages are burning out professions</p>
          <p className="text-gray-400 mb-2">→ Wages can't keep up with cost of living</p>
          <p className="text-gray-400 mb-6">→ Employers claim "we can't afford it" while profits rise</p>
          <p className="text-gray-400 mb-3">Unions are fighting these battles one contract at a time.</p>
          <p className="text-gray-400 mb-3">The crisis is national, structural, and political.</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-8">PHIERS is the mechanism that makes it national.</p>
          
          {/* WHEN UNIONS ARE STRONG IMAGE */}
          <div className="my-8 max-w-[500px] mx-auto">
            <Image
              src="/images/When Unions are Strong, America is Strong.jpg"
              alt="When Unions are Strong, America is Strong"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-[#3ddc84]/20"
            />
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Math That Ends the Argument</h2>
          <p className="text-gray-400 mb-3">Average family insurance premium: $24,000+</p>
          <p className="text-gray-400 mb-3">Per-worker burden: $12,000+</p>
          <p className="text-gray-400 mb-3">PHIERS telehealth cost: $600/year</p>
          <p className="font-display text-3xl text-[#ffd60a] font-bold my-4">$11,400+ freed per worker</p>
          <p className="text-gray-400 mb-6">$45,600+ per family of four</p>
          
          {/* SAVINGS INFOGRAPHIC */}
          <div className="my-8 max-w-[500px] mx-auto">
            <Image
              src="/images/99_to_1_-_Great_Odds.jpg"
              alt="Union savings — 99 to 1 odds"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-[#3ddc84]/20"
            />
          </div>
          
          <p className="font-condensed text-lg text-white font-bold mb-3">What $11,400 per worker buys for a 10,000-person hospital system:</p>
          <p className="text-gray-400 mb-2">✓ $35,000+ raise for every nurse</p>
          <p className="text-gray-400 mb-2">✓ 800 additional nurses hired</p>
          <p className="text-gray-400 mb-2">✓ Safe staffing restored</p>
          <p className="text-gray-400 mb-2">✓ Guaranteed portable benefits</p>
          <p className="text-gray-400 mb-6">✓ A fully funded pension</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-8">This isn't theory. It's arithmetic.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">What PHIERS Gives Unions That No Contract Can</h2>
          <p className="font-condensed text-lg text-white font-bold mb-3">Healthcare off the table — permanently</p>
          <p className="text-gray-400 mb-6">When healthcare becomes a national guarantee, unions redirect all bargaining power to wages, staffing, job security, and pensions. This is the largest expansion of union leverage in 50 years.</p>
          <p className="font-condensed text-lg text-white font-bold mb-3">A national leverage mechanism</p>
          <p className="text-gray-400 mb-6">Unions already know how to organize. PHIERS gives them a constitutional, peaceful tool that forces Congress to act. No shutdowns. No disruption. Just organized people applying pressure where it matters most.</p>
          <p className="font-condensed text-lg text-white font-bold mb-3">8–14 million AI-resistant jobs</p>
          <p className="text-gray-400 mb-6">PHIERS cascade savings create millions of new, stable, human-centered jobs — exactly the kind unions are built to organize.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The 3.5% Is Already Met</h2>
          <p className="text-gray-400 mb-3">Harvard's Chenoweth: no nonviolent movement that reached 3.5% sustained participation has ever failed.</p>
          <p className="text-gray-400 mb-2">12M — 3.5% of America</p>
          <p className="text-gray-400 mb-2">16M — Union members alone</p>
          <p className="text-gray-400 mb-2">50M+ — Union families and networks</p>
          <p className="text-gray-400 mb-6">100M+ — Affected by the healthcare crisis</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-8">Unions already exceed the threshold. PHIERS gives them the mechanism to use it.</p>
          
          {/* 3-PHASE VICTORY DIAGRAM */}
          <div className="my-8 max-w-[500px] mx-auto">
            <Image
              src="/images/3.5pct_Means_Change.jpg"
              alt="3.5% Means Change — Three phases to victory"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-[#3ddc84]/20"
            />
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">Three Phases to Victory</h2>
          <div className="space-y-4 mb-8">
            <div><p className="font-condensed font-bold text-white">Phase 1 — Mobilize</p><p className="text-gray-400 text-sm">Send every member the petition link. Issue the primary threat publicly: any representative who refuses faces a union-backed challenger.</p></div>
            <div><p className="font-condensed font-bold text-white">Phase 2 — Nationalize</p><p className="text-gray-400 text-sm">50%+ of membership signs. Healthcare stories become evidence delivered to every member of Congress. One national message: Workers are united. Act now.</p></div>
            <div><p className="font-condensed font-bold text-white">Phase 3 — Enforce</p><p className="text-gray-400 text-sm">If Congress passes PHIERS: shift to organizing the new economy. If Congress refuses: activate the full electoral apparatus. Primary the refusers. Show that ignoring organized labor means losing your job.</p></div>
          </div>
          
          <div className="bg-[#0a1628] border-l-4 border-[#ffd60a] p-6 my-8">
            <p className="text-gray-400 mb-3">Every major labor victory happened when workers stopped asking and started forcing.</p>
            <p className="text-gray-400 mb-2">The 40-hour week. The weekend. Child labor laws. Social Security. Medicare.</p>
            <p className="text-gray-400 mb-6">None came from generosity. All came from leverage.</p>
            <p className="font-condensed text-xl text-[#3ddc84] font-bold">Unions don't need permission. They already have the power. PHIERS gives them the switch.</p>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/petition" className="inline-block px-6 py-3 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ ADD MY NAME</Link>
            <Link href="/leverage" className="block text-[#3ddc84] text-sm font-condensed font-bold hover:underline mt-4">→ See How Leverage Works</Link>
            <Link href="/organizers" className="block text-[#3ddc84] text-sm font-condensed font-bold hover:underline mt-2">→ For Organizers</Link>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
