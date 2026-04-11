// app/_components/veterans-client.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Heart, Briefcase, Home, Award, ChevronRight, X } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'

export function VeteransClient() {
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState('')
  const [willModalOpen, setWillModalOpen] = useState(false)

  const openModal = (src: string) => {
    setModalImageSrc(src)
    setImageModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setImageModalOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <div className="pb-20 px-4">
        <div className="max-w-[880px] mx-auto">

          {/* Hero Section */}
          <AnimatedSection>
            <div className="mb-8">
              <div className="max-w-[660px] mx-auto mb-6">
                <button onClick={() => openModal('/images/veterans_from_back.jpg')} className="cursor-pointer w-full">
                  <Image src="/images/veterans_from_back.jpg" alt="Veterans — someone's kids, someone's neighbors, someone's family" width={660} height={400} className="w-full h-auto rounded-xl border-2 border-red-500/30 shadow-2xl hover:scale-[1.01] transition-transform" />
                </button>
                <p className="font-condensed font-bold text-xs text-red-500 text-center uppercase tracking-wide mt-3">They served. They were promised something. Then they came home.</p>
              </div>
              <span className="font-condensed font-bold text-[#ffd60a] text-xs uppercase tracking-wide">For Every Veteran Who Served — Then Got Left Behind</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-4 leading-tight">You Served.<br />You Were Promised Care.<br /><span className="text-red-500">The System Doesn't Deliver It.</span></h1>
              <p className="font-condensed text-lg text-gray-400 max-w-[680px] mb-3">More than half of America's 20+ million veterans receive limited or inconsistent support from the VA system they were promised. PHIERS is built to fix that — regardless of eligibility, location, or politics.</p>
              <p className="font-condensed font-bold text-gray-500">This isn't about politics. It's about whether the system you were promised actually shows up when you need it.</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/petition" className="px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg font-condensed font-bold hover:border-[#3ddc84] hover:text-[#3ddc84] transition-all">📋 Take the Survey</a>
                <Link href="/donate" className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg font-condensed font-bold hover:border-[#3ddc84] hover:text-[#3ddc84] transition-all">💚 Donate</Link>
              </div>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* The Access Problem */}
          <AnimatedSection>
            <span className="font-condensed font-bold text-[#ffd60a] text-xs uppercase tracking-wide">The Access Problem</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Rural Veterans Drive Hours for Care.<br /><span className="text-red-500">Urban Clinics Are Already Overwhelmed.</span></h2>
            <p className="text-gray-400 mb-4">Now the system is being cut even further. When 30,000 VA staff positions disappear, access disappears with them — front-line clinicians, mental health providers, the people who actually see patients. Gone.</p>
            <p className="text-gray-400 mb-4">PHIERS changes the math. A $600 telehealth model stabilizes both rural hospitals and urban clinics by increasing patient volume, reducing uncompensated care, restoring predictable revenue, preventing closures, and keeping local providers employed. The result is surplus funding that strengthens the safety net — including veterans' care.</p>
            <div className="bg-[#3ddc84]/10 border-l-4 border-[#3ddc84] rounded-r-lg p-5"><strong className="text-[#3ddc84]">PHIERS fills the gaps the VA is leaving behind</strong> — and it works regardless of your VA eligibility, your zip code, or which party controls Congress.</div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* Stat Row */}
          <AnimatedSection>
            <div className="grid md:grid-cols-4 gap-4 my-8">
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 text-center"><div className="font-display text-3xl text-red-500">20M+</div><p className="text-gray-400 text-xs">Veterans who receive little or no meaningful VA support — more than half of all who served</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 text-center"><div className="font-display text-3xl text-red-500">30,000</div><p className="text-gray-400 text-xs">VA staff being cut — the people who process your claims and schedule your care</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 text-center"><div className="font-display text-3xl text-red-500">&lt;10%</div><p className="text-gray-400 text-xs">Veterans with 100% VA coverage. Everyone else pays, waits, or goes without.</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 text-center"><div className="font-display text-3xl text-[#3ddc84]">$600</div><p className="text-gray-400 text-xs">Per year for telehealth that covers 80% of what veterans actually need</p></div>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* The Betrayal */}
          <AnimatedSection>
            <span className="font-condensed font-bold text-[#ffd60a] text-xs uppercase tracking-wide">What's Changing — And Why It Matters Now</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">While You Were Serving,<br /><span className="text-red-500">The System Was Already Failing.</span></h2>
            <p className="text-gray-400 mb-4">The same people beating the drums of war are quietly dismantling the only system meant to care for you when you come home.</p>
            <div className="bg-red-500/10 border-l-4 border-red-500 rounded-r-lg p-6 my-6"><p className="text-gray-300 mb-3">The VA just tried to slip a rule into the Federal Register — effective immediately, no public notice — that would have cut disability benefits for veterans who take medication. A veteran with 100% PTSD rating could have dropped to 30% <em>simply because their medication was working.</em></p><p className="text-white font-semibold mt-3">They backed off after 10,000+ public comments in 60 hours. <strong className="text-red-500">But the rule is still on the books. They can reinstate it any time.</strong></p></div>
            <p className="text-gray-400 mb-3">30,000 VA staff are being cut — the people who process your claims, schedule your appointments, answer your calls. Front-line workers. Gone.</p>
            <p className="text-gray-400 mb-3">Nursing homes closing. Mental health positions eliminated. Rural clinics shutting down. Urban clinics so overwhelmed they're turning away non-emergency care.</p>
            <p className="text-gray-400">And while they gut the VA, they're building up for the largest military deployment since Iraq. Two carrier strike groups. Hundreds of fighter jets. A new generation of Americans about to be sent into combat. They'll come home to a VA that no longer exists.</p>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* The Math Table */}
          <AnimatedSection>
            <span className="font-condensed font-bold text-[#ffd60a] text-xs uppercase tracking-wide">The Math They Don't Want Veterans to Know</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">What They Tell You.<br /><span className="text-red-500">What the Numbers Show.</span></h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse my-6 text-sm">
                <thead><tr className="border-b border-[#3ddc84]/20"><th className="text-left py-3 px-4 font-condensed text-gray-500 text-xs uppercase tracking-wide">What They Tell You</th><th className="text-left py-3 px-4 font-condensed text-gray-500 text-xs uppercase tracking-wide">The Truth</th></tr></thead>
                <tbody>
                  <tr className="border-b border-white/10"><td className="py-3 px-4 text-gray-500 italic">"The VA serves veterans."</td><td className="py-3 px-4 text-white">The VA serves fewer than 9 million of 20+ million veterans. If you're not in that 9 million, you get nothing.</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 px-4 text-gray-500 italic">"Disabled veterans get full coverage."</td><td className="py-3 px-4 text-white">Fewer than 10% of veterans have 100% VA coverage. Everyone else pays, waits, or goes without.</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 px-4 text-gray-500 italic">"We're making the VA more efficient."</td><td className="py-3 px-4 text-white">Cutting 30,000 staff to pre-PACT Act levels means longer waits, denied claims, and veterans falling through the cracks.</td></tr>
                  <tr><td className="py-3 px-4 text-gray-500 italic">"No cuts to veteran benefits."</td><td className="py-3 px-4 text-white">They already tried to cut benefits for veterans whose medication works. They'll try again.</td></tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* Will's Story */}
          <AnimatedSection>
            <span className="font-condensed font-bold text-[#ffd60a] text-xs uppercase tracking-wide">Why the Founder of PHIERS Left the VA</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Will Price — <span className="text-[#3ddc84]">Chief Solutions Architect</span></h2>
            <p className="text-gray-400 mb-3">Twenty years inside the VA system — Senior Analyst on Electronic Health Records, Registration, Eligibility, and Enrollment. VistA. The actual machinery that determines whether veterans receive care or fall through the cracks. One of five civilians selected for the VA's first enterprise-wide reengineering initiative.</p>
            <p className="text-gray-400 mb-6">He saw how the system actually worked, and who it left behind. He quit to build the alternative.</p>
            <div className="border-l-4 border-[#ffd60a] bg-[#ffd60a]/10 rounded-r-lg p-5 my-5"><p className="text-white italic">"The VA was designed to serve a fraction of veterans. Even at its best, it leaves more than half behind. I didn't leave because the VA was being cut — I left because the architecture was never built to serve all veterans in the first place. PHIERS is the architecture that does."</p></div>
            <div className="border-l-4 border-[#ffd60a] bg-[#ffd60a]/10 rounded-r-lg p-5"><p className="text-white italic">"When I saw them trying to cut benefits for veterans whose medication was working — that's when I knew we couldn't wait anymore. They're not just cutting the VA. They're cutting veterans. PHIERS is the only plan that makes your health coverage independent of their budget cuts."</p><p className="text-[#ffd60a] text-sm mt-3">— Will Price, Chief Solutions Architect, PHIERS Movement</p></div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* What PHIERS Delivers */}
          <AnimatedSection>
            <span className="font-condensed font-bold text-[#ffd60a] text-xs uppercase tracking-wide">What PHIERS Delivers</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">For Every Veteran.<br /><span className="text-[#3ddc84]">No Exceptions.</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-[#3ddc84] text-base mb-2">🇺🇸 Covers Every Veteran</h3><p className="text-gray-400 text-sm">Not just the 9 million the VA serves. All 20+ million. Every veteran who served gets the same coverage — period.</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-[#3ddc84] text-base mb-2">💊 No Medication Trap</h3><p className="text-gray-400 text-sm">Your health coverage isn't tied to your disability rating. Taking medication that works doesn't punish you. Your benefits stay.</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-[#3ddc84] text-base mb-2">🧠 Mental Health On Demand</h3><p className="text-gray-400 text-sm">$600/year covers unlimited telehealth for PTSD, depression, anxiety — without the VA waitlist, without prior authorization.</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-[#3ddc84] text-base mb-2">🛡 Not Dependent on the VA</h3><p className="text-gray-400 text-sm">30,000 VA layoffs don't touch it. Budget cuts don't touch it. Which party controls Congress doesn't touch it. It's yours.</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-[#3ddc84] text-base mb-2">🏔 Rural &amp; Urban Coverage</h3><p className="text-gray-400 text-sm">Works everywhere. Rural veterans don't drive hours for care. Urban clinics don't turn people away. Same coverage. Same cost.</p></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5"><h3 className="font-condensed font-bold text-[#3ddc84] text-base mb-2">📈 The Math That Scales</h3><p className="text-gray-400 text-sm">One veteran switching saves enough to cover 12 more. Those 12 cover 148. The cascade becomes unstoppable.</p></div>
            </div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* The Math */}
          <AnimatedSection>
            <span className="font-condensed font-bold text-[#ffd60a] text-xs uppercase tracking-wide">The Math That Changes Everything</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">$600 vs $10,000+</h2>
            <p className="text-gray-400">$600 per year covers primary care, mental health, prescriptions, and chronic condition management — the majority of what most veterans actually use. Traditional insurance costs $10,000+ for the same care. That difference creates a cascade that funds universal coverage for every American in 8–13 months. <Link href="/simple-math" className="text-[#3ddc84] font-bold">→ See the math</Link></p>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* Peace & War Connection */}
          <AnimatedSection>
            <p className="font-condensed font-bold text-gray-500 mb-6">This isn't separate from what's happening next. It's part of the same system.</p>
            <span className="font-condensed font-bold text-[#ffd60a] text-xs uppercase tracking-wide">The Dimension They Never Discuss</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Peace.<br /><span className="text-red-500">And Why It's Connected to Everything.</span></h2>
            <p className="text-gray-400 mb-3">Right now, the United States has the largest military buildup in the Middle East since the 2003 Iraq invasion. Two carrier strike groups. Hundreds of fighter jets. A new generation of Americans is about to be sent into combat.</p>
            <p className="text-gray-400 mb-4">Those Americans will come home to a VA that is being dismantled in real time.</p>
            <div className="bg-red-500/10 border-l-4 border-red-500 rounded-r-lg p-5 my-5"><p className="text-gray-300">The unauthorized war is already hitting your grocery bill, your gas prices, and your electric bill. And they're about to ask your kids to fight in it — with no congressional vote, no mandate, no exit strategy. <Link href="/no-war" className="text-red-500 font-bold">→ See the full economic cascade on the No War page</Link></p></div>
            <p className="text-gray-400 mb-3">The $1 billion+ per day spent on undeclared wars could fund healthcare for every veteran who's ever served, mental health support for every service member coming home, and job training, education, and housing — the things veterans actually need.</p>
            <p className="text-gray-400"><strong className="text-white">PHIERS was built with peace as one of its five core dimensions — not as idealism, but as systems thinking.</strong> Nations that provide genuine economic security, real healthcare, and stable employment don't need endless war economies to function. <strong className="text-white">Ending the unauthorized war isn't separate from fixing veterans' healthcare. It's the same fight.</strong></p>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* 3.5% */}
          <AnimatedSection>
            <span className="font-condensed font-bold text-[#ffd60a] text-xs uppercase tracking-wide">The Only Thing That Stops Them</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">3.5%.<br /><span className="text-[#3ddc84]">The Number That Changes Everything.</span></h2>
            <p className="text-gray-400 mb-3">Harvard researcher Erica Chenoweth studied 323 social movements across a century. The finding: no nonviolent movement that reached 3.5% sustained participation has ever failed.</p>
            <p className="text-gray-400 mb-3">3.5% of America is 11.6 million people. Veterans alone are 20+ million — already nearly double the threshold. <strong className="text-white">Organized together, you're not a voting bloc. You're a deciding force.</strong> Add families and everyone affected by the healthcare crisis, and we're at 100+ million. We just haven't moved together yet.</p>
            <div className="bg-[#ffd60a]/10 border-l-4 border-[#ffd60a] rounded-r-lg p-5"><strong className="text-[#ffd60a]">March 28, 2026 is the No Kings Rally.</strong> It's also the deadline for Congress to act on telehealth. If we're organized by then, they have no choice. They sent you to war. Now you send them a message.</div>
          </AnimatedSection>

          <hr className="border-[#3ddc84]/20 my-8" />

          {/* Three Actions */}
          <AnimatedSection>
            <span className="font-condensed font-bold text-[#ffd60a] text-xs uppercase tracking-wide">Three Actions. One Outcome.</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">You Served.<br /><span className="text-[#ffd60a]">Here's How You Fight Back.</span></h2>
            <div className="space-y-4 my-6">
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 flex gap-4"><div className="font-display text-2xl text-red-500 min-w-[40px]">1</div><div><h3 className="font-condensed font-bold text-white text-lg mb-1">Sign the Petition</h3><p className="text-gray-400 text-sm">Every signature tells Congress: veterans are watching, veterans are organized, and veterans vote. Put your name on the record.</p></div></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 flex gap-4"><div className="font-display text-2xl text-red-500 min-w-[40px]">2</div><div><h3 className="font-condensed font-bold text-white text-lg mb-1">Take the Survey</h3><p className="text-gray-400 text-sm">Tell us what's hitting hardest — healthcare access, mental health, disability ratings, the medication trap. Your answers get delivered to your representatives.</p></div></div>
              <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 flex gap-4"><div className="font-display text-2xl text-red-500 min-w-[40px]">3</div><div><h3 className="font-condensed font-bold text-white text-lg mb-1">Share With Every Veteran You Know</h3><p className="text-gray-400 text-sm">This isn't a partisan issue. This isn't left or right. This is every veteran who was promised something and got nothing. Share it.</p></div></div>
            </div>
          </AnimatedSection>

          {/* Final CTA */}
          <AnimatedSection>
            <div className="text-center bg-red-500/10 border border-red-500/30 rounded-xl p-10 my-12">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">You Served.<br /><span className="text-[#3ddc84]">Now Make Them Deliver.</span></h2>
              <p className="text-gray-400 max-w-[560px] mx-auto mb-6">Not as charity. Not as a benefit they can cut. As something you built with every day you spent away from your family. PHIERS is a people's movement — not a company, not a product. The only thing missing is you.</p>
              <div className="flex flex-wrap justify-center gap-4"><Link href="/petition" className="px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link><a href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg font-condensed font-bold hover:border-[#3ddc84] hover:text-[#3ddc84] transition-all">📋 Take the Survey</a></div>
              <div className="flex flex-wrap justify-center gap-4 mt-3"><Link href="/action" className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg font-condensed font-bold hover:border-[#3ddc84] hover:text-[#3ddc84] transition-all">📣 Take Action</Link><Link href="/donate" className="px-6 py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold rounded-lg hover:bg-[#34c474] transition-all">💚 Support the Movement</Link></div>
              <p className="text-gray-500 text-sm mt-6">March 28 is the line. Everything after that is leverage.</p>
            </div>
          </AnimatedSection>

        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {imageModalOpen && (
          <motion.div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <button className="absolute top-5 right-7 text-white text-3xl cursor-pointer bg-black/50 border border-white/20 w-10 h-10 rounded-full" onClick={closeModal}>✕</button>
            <img src={modalImageSrc} alt="" className="max-w-[90vw] max-h-[90vh] rounded-lg border border-[#3ddc84]/20" />
          </motion.div>
        )}
      </AnimatePresence>

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
    </>
  )
}
