// app/_components/unions-client.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Users, TrendingUp, Shield, ChevronRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'

export function UnionsClient() {
  const [willModalOpen, setWillModalOpen] = useState(false)

  return (
    <>
      <div className="pb-20 px-4">
        <div className="max-w-[880px] mx-auto">

          {/* Hero Section */}
          <AnimatedSection>
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="opacity-85" />
              </div>
              <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Union Power × PHIERS</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-4 leading-tight">Unions Built the Middle Class.<br /><span className="text-[#3ddc84]">Now They Can Rebuild the Social Contract.</span></h1>
              <p className="font-condensed text-lg text-gray-400 max-w-[700px] mb-4">16 million members. 50 million connected voters. The organized infrastructure Congress fears most. PHIERS is the switch that turns that power on.</p>
              <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-6 my-6">
                <strong className="text-white">PHIERS doesn't replace unions.</strong> It removes healthcare from the bargaining table permanently — and redirects that power toward wages, staffing, pensions, and the political pressure that forces Congress to act. This is not a policy. It is a leverage mechanism.
              </div>
            </div>
          </AnimatedSection>

          {/* The Moment */}
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Moment</h2>
            <p className="text-gray-400 mb-3">Across the country, workers are striking for the same reason:</p>
            <ul className="list-disc pl-6 text-gray-400 mb-4 space-y-1">
              <li>▸ Healthcare costs are crushing families</li>
              <li>▸ Staffing shortages are burning out entire professions</li>
              <li>▸ Wages can't keep up with the cost of living</li>
              <li>▸ Employers claim "we can't afford it" while profits rise</li>
            </ul>
            <p className="text-gray-400 mb-3">Unions are fighting these battles one contract at a time. But the crisis is national, structural, and political.</p>
            <p className="text-gray-400 mb-4"><strong className="text-white">Executives aren't fighting because it's impossible. They're fighting because PHIERS proves they've been lying.</strong></p>
            <div className="border-l-4 border-red-500 bg-red-500/5 rounded-r-lg p-5 my-5">
              <p className="text-white italic">"The fact that the people who provide healthcare need to be asking for healthcare is ironic and infuriating."<br />— NY State Assembly Member Alex Bores, on the NYC nurse strike</p>
            </div>
            <p className="text-gray-400 mb-3">NewYork-Presbyterian's CEO made $26.3 million last year — $72,000 per day — while 15,000 nurses fought for basic benefits. The money is there. It's just not going to the people who deserve it.</p>
            <p className="text-[#3ddc84] font-bold">PHIERS is the mechanism that redirects it.</p>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* The Math That Ends the Argument */}
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Math That Ends the Argument</h2>
            <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-lg p-6 my-6">
              <div className="flex justify-between border-b border-white/10 py-3"><span className="text-white font-semibold">Average family insurance premium (employer + worker)</span><span className="text-[#3ddc84] font-bold">$24,000+</span></div>
              <div className="flex justify-between border-b border-white/10 py-3"><span className="text-white font-semibold">Per-worker burden (family coverage split)</span><span className="text-[#3ddc84] font-bold">$12,000+</span></div>
              <div className="flex justify-between border-b border-white/10 py-3"><span className="text-white font-semibold">PHIERS telehealth cost</span><span className="text-[#3ddc84] font-bold">$600/year</span></div>
              <div className="flex justify-between py-3"><span className="text-white font-semibold">Freed per worker</span><span className="text-[#ffd60a] font-bold text-xl">$11,400+ / year</span></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center"><div className="font-display text-2xl text-[#3ddc84]">$11,400+</div><div className="text-gray-500 text-xs">per union member</div></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center"><div className="font-display text-2xl text-[#3ddc84]">$45,600+</div><div className="text-gray-500 text-xs">family of four</div></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center"><div className="font-display text-2xl text-[#3ddc84]">$114M+</div><div className="text-gray-500 text-xs">hospital system (10k workers)</div></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center"><div className="font-display text-2xl text-[#3ddc84]">$800M+</div><div className="text-gray-500 text-xs">nationwide rail workers</div></div>
            </div>

            <div className="bg-[#3ddc84]/10 border-l-4 border-[#3ddc84] rounded-r-lg p-5 my-5">
              <p className="font-bold text-white mb-2">What $114 million buys for a single hospital system:</p>
              <p className="text-gray-300 text-sm">✓ $35,000+ raise for every nurse</p>
              <p className="text-gray-300 text-sm">✓ 800 additional nurses hired — safe staffing restored</p>
              <p className="text-gray-300 text-sm">✓ Guaranteed portable healthcare benefits for life</p>
              <p className="text-gray-300 text-sm">✓ A fully funded pension system</p>
              <p className="text-gray-300 text-sm">✓ Millions left over for community investment</p>
            </div>

            <p className="text-[#ffd60a] text-center text-lg my-4">This isn't theory. It's arithmetic — and it's even more devastating than we thought.</p>
            <p className="text-white text-center text-xl"><strong>Stop negotiating with people who claim they can't pay you. Fix the math and force the system to pay you.</strong></p>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* What PHIERS Gives Unions */}
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">What PHIERS Gives Unions <span className="text-[#3ddc84]">That No Contract Can</span></h2>
            <div className="grid md:grid-cols-2 gap-5 my-6">
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-lg text-white mb-2">Healthcare off the table — permanently</h3><p className="text-gray-400 text-sm">When healthcare becomes a national guarantee at $600/year, unions redirect all bargaining power to wages, staffing, job security, pensions, and safety. This is the largest expansion of union leverage in 50 years.</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-lg text-white mb-2">A national leverage mechanism — no strikes required</h3><p className="text-gray-400 text-sm">Unions already know how to organize. PHIERS gives them a constitutional, peaceful economic pressure tool that forces Congress to act. No shutdowns. No disruption. Just organized people applying pressure where it matters most.</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-lg text-white mb-2">A path to 8–14 million AI-resistant jobs</h3><p className="text-gray-400 text-sm">PHIERS cascade savings create millions of new, stable, human-centered jobs — exactly the kind unions are built to organize.</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-lg text-white mb-2">Control of a $2.73 trillion marketplace</h3><p className="text-gray-400 text-sm">When 100M+ members organize through PHIERS, they control distribution, set wages, and enforce workplace standards across the entire supply chain.</p></div>
            </div>
          </AnimatedSection>

          {/* The Strategic Fit */}
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Strategic Fit</h2>
            <div className="grid md:grid-cols-2 gap-5 my-6">
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-lg text-white mb-3">Unions Already Have</h3><ul className="space-y-2 text-gray-400 text-sm"><li>• Direct member communication networks</li><li>• Organizing infrastructure</li><li>• Political credibility and voter mobilization</li><li>• Large-scale campaign experience</li><li>• Deep community roots</li></ul></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-lg text-white mb-3">PHIERS Adds</h3><ul className="space-y-2 text-gray-400 text-sm"><li>• Healthcare off the table forever</li><li>• $11,400+ per member per year freed</li><li>• 8–14M new jobs to organize</li><li>• Congressional leverage that can't be ignored</li><li>• A plan that benefits every worker in every industry</li></ul></div>
            </div>
            <p className="text-white font-semibold text-center mt-4"><strong>Together, they form the only coalition in America capable of forcing Congress to act on behalf of working people.</strong></p>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* The 3.5% Threshold */}
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The 3.5% Threshold <span className="text-[#3ddc84]">Is Already Met</span></h2>
            <p className="text-gray-400 mb-4">Harvard researcher Erica Chenoweth studied 323 movements across a century. Her finding: <strong className="text-white">no nonviolent movement that reached 3.5% sustained participation has ever failed.</strong></p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center"><div className="font-display text-2xl text-[#3ddc84]">12M</div><div className="text-gray-500 text-xs">3.5% of America</div></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center"><div className="font-display text-2xl text-[#3ddc84]">16M</div><div className="text-gray-500 text-xs">union members alone</div></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center"><div className="font-display text-2xl text-[#3ddc84]">50M+</div><div className="text-gray-500 text-xs">union families &amp; networks</div></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-4 text-center"><div className="font-display text-2xl text-[#3ddc84]">100M+</div><div className="text-gray-500 text-xs">affected by healthcare crisis</div></div>
            </div>
            <p className="text-white text-center text-xl my-4">We are <span className="text-[#3ddc84]">9× the threshold</span>. We just haven't moved together yet.</p>
            <div className="bg-[#0a1628] border-l-4 border-[#ffd60a] rounded-r-lg p-5"><p className="text-gray-300">Unions already exceed the 3.5%. PHIERS gives them the mechanism to use it.</p></div>
          </AnimatedSection>

          {/* Three Phases to Victory */}
          <AnimatedSection>
            <div className="bg-[#0d1525] border-l-4 border-[#ffd60a] rounded-r-lg p-5 my-6"><p className="text-gray-300">Unions already have the numbers. What they've been missing is a mechanism that turns those numbers into leverage Congress can feel. PHIERS is that mechanism. These three phases show exactly how.</p></div>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Three Phases to Victory</h2>
            <div className="space-y-4 my-6">
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-xl text-[#ffd60a] mb-2">Phase 1 — Mobilize</h3><p className="text-gray-400"><strong className="text-white">Now through March 28:</strong> Send every member the petition link. Frame it simply: "Tell Congress to stop the lies and fund our demands." Flood town halls. Issue the primary threat publicly: any representative who refuses faces a union-backed challenger.</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-xl text-[#ffd60a] mb-2">Phase 2 — Nationalize</h3><p className="text-gray-400"><strong className="text-white">March 28 through July 4:</strong> 50%+ of membership signs. Healthcare stories become evidence delivered to every member of Congress. Union leaders go on air together. One national message: Workers are united. Pass PHIERS now.</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-xl text-[#ffd60a] mb-2">Phase 3 — Enforce</h3><p className="text-gray-400"><strong className="text-white">November 2026:</strong> If Congress passes PHIERS: shift immediately to organizing the new economy. Set industry-wide standards through the PHIERS marketplace. If Congress refuses: activate the full electoral apparatus. Primary the refusers. Show that ignoring organized labor means losing your job.</p></div>
            </div>
          </AnimatedSection>

          {/* Final Power Section */}
          <AnimatedSection>
            <div className="bg-[#0d1525] border border-[#3ddc84]/30 rounded-xl p-8 text-center my-10">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">This Is Not About Politics.<br /><span className="text-[#3ddc84]">It's About Power.</span></h2>
              <p className="text-gray-400 mb-3">Every major labor victory in American history happened when workers stopped asking and started forcing: The 40-hour week. The weekend. Child labor laws. Social Security. Medicare.</p>
              <p className="text-gray-400 mb-3">None of it came from generosity. It came from leverage.</p>
              <p className="text-white font-bold text-lg my-4"><strong>Unions don't need permission. They already have the power. PHIERS gives them the switch.</strong></p>
              <p className="text-gray-400 mb-2">This isn't about politicians. It's about organized people demanding what they deserve — no more excuses.</p>
              <p className="text-[#3ddc84] font-bold">You built the power. This is the mechanism that makes it unstoppable.</p>
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 my-8">
              <Link href="/petition" className="px-8 py-4 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all text-lg">✍ Sign the Petition</Link>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all text-lg">📋 Take the Survey</a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/leverage" className="px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">→ See How Leverage Works</Link>
              <Link href="/organizers" className="px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">→ For Organizers</Link>
            </div>
            <div className="text-center text-[#3ddc84] font-display text-2xl my-8">#PHIERdUpNow</div>
          </AnimatedSection>

        </div>
      </div>

      {/* Will Price Modal */}
      <AnimatePresence>
        {willModalOpen && (
          <motion.div className="fixed inset-0 bg-black/90 z-[99998] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setWillModalOpen(false)}>
            <div className="relative max-w-[720px] w-full bg-[#080d1a]/97 border-2 border-[#3ddc84]/35 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setWillModalOpen(false)} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#111d35] text-[#3ddc84] border-2 border-[#3ddc84] flex items-center justify-center text-xl hover:bg-[#3ddc84] hover:text-[#111d35] transition-all z-10">✕</button>
              <div className="flex flex-wrap">
                <div className="w-full md:w-[240px] min-h-[280px] overflow-hidden"><img src="/images/Will_Price.png" alt="Will Price" className="w-full h-full min-h-[260px] object-cover object-[55%_top]" /></div>
                <div className="flex-1 min-w-[240px] p-7 flex flex-col justify-center">
                  <p className="font-condensed text-xs text-[#3ddc84] uppercase tracking-[3px] mb-2">The Architect</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1">Will Price</h3>
                  <p className="font-condensed text-sm text-[#ffd60a] font-bold mb-4">Founder &amp; Chief Solutions Architect, PHIERS</p>
                  <p className="font-body text-sm text-[#c8d8c8] leading-relaxed">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending — and built the lever to redirect it toward healthcare, jobs, and a monthly check for every American. Building this since 2009.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-condensed { font-family: 'Barlow Condensed', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }
      `}</style>
    </>
  )
}
