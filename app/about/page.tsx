// app/about/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ValidatedBy from '@/components/validated-by'

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState('')
  const [willModalOpen, setWillModalOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

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
      {/* Navigation */}
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/95 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">PHIERS.org</Link>
        <div className="hidden md:block text-xs text-[#3ddc84] italic">MABAH — Making America Better And Healthier<br />Sounds like MAGA. But a lot bettah.</div>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/videos" className="hidden md:inline-block text-gray-400 text-sm hover:text-[#3ddc84] transition-colors">Videos</Link>
        <a href="https://forms.gle/euJkZxjUserFVCPK8" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block px-4 py-1.5 text-sm text-[#3ddc84] border border-[#3ddc84]/30 rounded-full font-condensed font-semibold hover:bg-[#3ddc84]/10 transition-all">JOIN FIRST WAVE</a>
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl p-2 border border-white/20 rounded-lg">{mobileMenuOpen ? '✕' : '☰'}</button>
      </div>
    </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="fixed top-16 left-0 right-0 bg-[#0d1525] border-b border-[#3ddc84]/20 z-40 p-5 max-h-[calc(100vh-64px)] overflow-y-auto" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="space-y-4">
              <Link href="/no-war" className="block p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 font-condensed font-bold text-center" onClick={() => setMobileMenuOpen(false)}>🕊 END THE WAR / NO DRAFT</Link>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Understand the Fight</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/crisis" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🚨 The Crisis</Link><Link href="/simple-math" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📊 Simple Math</Link><Link href="/how-it-works" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>⚡ The Leverage</Link><Link href="/solutions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🔬 5D Solutions</Link><Link href="/telecare" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💡 TeleCARE</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Who We're For</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/organizers" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>✊ For Organizers</Link><Link href="/veterans" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🎖 Veterans</Link><Link href="/unions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💪 Union Strategy</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Resources</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/resources" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📚 Resource Hub</Link><Link href="/real-stories" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💬 Real Stories</Link><Link href="/faq" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>❓ FAQ</Link><Link href="/about" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📖 About</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Take Action</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/petition" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📋 Sign the Petition</Link><Link href="/donate" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💚 Donate</Link><Link href="/action" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📣 Take Action</Link></div>
              </details>
              <Link href="/petition" className="block w-full py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-center rounded-lg mt-4" onClick={() => setMobileMenuOpen(false)}>✍ Sign Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20 pb-16 max-w-[880px] mx-auto px-6">
        {/* HERO */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={100} height={100} className="opacity-85" /></div>
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Origin Story</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-4">About PHIERS:<br /><span className="text-[#3ddc84]">Built from Lived Experience</span></h1>
          <p className="text-gray-400 text-lg max-w-[700px] mx-auto">This wasn't designed in a boardroom. It was built by people who refused to stop.</p>
        </div>

        {/* Video Section */}
        <div className="bg-[#0a1628] border-2 border-[#3ddc84]/20 rounded-xl p-8 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] text-center mb-4">PHIERStorm: The Movement to Fix Healthcare</h2>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-[#3ddc84]/20">
            <iframe src="https://www.youtube.com/embed/bEUyDVAYwpk" title="PHIERStorm: The Movement to Fix Healthcare" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
          </div>
          <p className="text-center text-[#3ddc84] font-bold mt-4">The movement your support fuels. The change we're building together.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* THE ARCHITECT */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Architect</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Who Built <span className="text-[#3ddc84]">This</span></h2>
          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7">
            <h3 className="font-condensed font-bold text-xl text-white mb-2">Will Price | Chief Solutions Architect</h3>
            <p className="text-gray-400 mb-3"><strong className="text-white">Background:</strong> 15+ years perfecting 5D solutions and business models through systems architecture, intelligence analysis, and AI-driven complex adaptive systems. Specialized in identifying leverage points that others miss.</p>
            <p className="text-gray-400 mb-3"><strong className="text-white">The AI Story:</strong> Decades of experience in tech strategy culminated in using AI tools to map interconnections across healthcare, economics, jobs, politics, and peace. The result: PHIERS — a solution that solves five crises simultaneously because they're all connected.</p>
            <p className="text-gray-400 mb-3"><strong className="text-white">Why PHIERS:</strong> Not a politician. Not a lobbyist. Just someone who saw the mathematical opportunity everyone else missed—and built the blueprint to execute it. December 11, 2024 wasn't the origin — it was the validation of 15+ years of work.</p>
            <p className="text-gray-400"><strong className="text-white">Contact:</strong> (916) 306-8967 | <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a></p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* THE BREAKTHROUGH */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Moment</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">The Breakthrough:<br /><span className="text-[#3ddc84]">December 11, 2024</span></h2>
          <div className="bg-[#3ddc84]/5 border border-[#3ddc84]/20 border-l-4 border-l-[#3ddc84] rounded-r-lg p-6">
            <p className="text-gray-400 mb-3"><strong className="text-[#ffd60a]">The moment:</strong> Congress rejected both healthcare plans. 22 million Americans about to lose coverage. Everyone said, "There's nothing we can do."</p>
            <p className="text-gray-400 mb-3"><strong className="text-white">But there was a pattern no one was seeing.</strong></p>
            <p className="text-gray-400 mb-3">CMS pays $8,000/year per person for traditional insurance. 80% don't need hospitalization—they'd be fine with $600/year telehealth. That's $7,400 freed per person. Enough to pay for 12 others.</p>
            <p className="text-xl text-[#3ddc84] font-bold">One conversion funds 12. Those 12 fund 148. 148 fund 1,825. Exponential. Unstoppable.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* WHY THIS WORKS */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Mechanics</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Why This Works<br /><span className="text-[#3ddc84]">When Others Fail</span></h2>

          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7 mb-4">
            <h3 className="font-condensed font-bold text-lg text-white mb-2">1. Self-Funding Mechanism</h3>
            <p className="text-gray-400">Every conversion generates $7,400+ in freed government savings. That money pays for the next 12 conversions. The system funds itself through exponential compounding. Congress can't "defund" something that literally generates money through efficiency.</p>
          </div>

          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7 mb-4">
            <h3 className="font-condensed font-bold text-lg text-white mb-2">2. Mathematical Inevitability</h3>
            <p className="text-gray-400">3.5% of Americans organized = guaranteed systemic change (Harvard research, Erica Chenoweth). We're targeting 100M+ = 9x the threshold. This isn't hope—it's mechanics.</p>
          </div>

          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7 mb-4">
            <h3 className="font-condensed font-bold text-lg text-white mb-2">3. Cooperative Structure</h3>
            <p className="text-gray-400">Members control their own healthcare choices. No corporate middlemen. No profit extraction. 100M+ organized = largest pharmaceutical buyer in the nation = market dominance through pure purchasing power.</p>
          </div>

          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7">
            <h3 className="font-condensed font-bold text-lg text-white mb-2">4. Solves 5 Crises Simultaneously</h3>
            <p className="text-gray-400 mb-2">Healthcare + Jobs + Economy + Politics + Peace. Each dimension strengthens the others. Block one, the system adapts. This is systems thinking applied to national transformation.</p>
            <p className="mt-3"><Link href="/solutions" className="text-[#3ddc84] underline">→ See 5D Solutions</Link></p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* LETTERS OF SUPPORT */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Validation</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Letters of <span className="text-[#3ddc84]">Support</span></h2>

          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7 mb-6">
            <h3 className="font-condensed font-bold text-lg text-white mb-3">Congressman Chris Van Hollen — Maryland</h3>
            <button onClick={() => openModal('/images/VanHollen_Letter_of_Support.png')} className="cursor-pointer">
              <Image src="/images/VanHollen_Letter_of_Support.png" alt="Letter of Support from Congressman Chris Van Hollen" width={500} height={400} className="max-w-full h-auto mx-auto rounded-lg border border-[#3ddc84]/20 mb-2" />
            </button>
            <p className="text-gray-500 text-sm italic text-center mb-3">Click to enlarge</p>
            <div className="border-l-3 border-[#3ddc84] bg-[#3ddc84]/10 p-4 rounded-r-md">
              <p className="text-white italic">"PHIERS.org has the potential to become a vital part of the health care system."</p>
              <p className="text-[#3ddc84] text-sm mt-2">— Chris Van Hollen, Member of Congress</p>
            </div>
          </div>

          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7">
            <h3 className="font-condensed font-bold text-lg text-white mb-3">Mayor Kevin Johnson — Sacramento, California</h3>
            <button onClick={() => openModal('/images/KJ_Sacramento_Support_Letter.png')} className="cursor-pointer">
              <Image src="/images/KJ_Sacramento_Support_Letter.png" alt="Letter of Support from Mayor Kevin Johnson" width={500} height={400} className="max-w-full h-auto mx-auto rounded-lg border border-[#3ddc84]/20 mb-2" />
            </button>
            <p className="text-gray-500 text-sm italic text-center mb-3">Click to enlarge</p>
            <div className="border-l-3 border-[#3ddc84] bg-[#3ddc84]/10 p-4 rounded-r-md">
              <p className="text-white italic">"I strongly support the PHIERS approach... PHIERS could be readily adapted throughout California as a flagship community health care approach."</p>
              <p className="text-[#3ddc84] text-sm mt-2">— Kevin Johnson, Mayor, City of Sacramento (2009)</p>
            </div>
            <p className="text-gray-500 text-sm mt-3">This support goes back to 2009. <Link href="/our-origins" className="text-[#3ddc84]">The full story →</Link></p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* INDEPENDENT VALIDATIONS */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Credibility</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Four Independent <span className="text-[#3ddc84]">Validations</span></h2>

          <div className="bg-[#111d35] border-l-4 border-[#ffd60a] rounded-r-lg p-7 mb-6">
            <h3 className="font-condensed font-bold text-lg text-white mb-2">Pathos Communications (Fortune 500 PR Firm)</h3>
            <p className="text-gray-400 mb-2">Top-tier PR firm verified PHIERS and confirmed interest from major outlets: <strong className="text-white">International Business Times, Forbes, and USA Today.</strong></p>
            <p className="text-gray-400 mb-4">Pathos stands behind Will Price personally and professionally. <strong className="text-white">When a Fortune 500 PR firm publicly stakes their reputation on your movement, you know it's credible.</strong></p>

            <div className="bg-[#3ddc84]/10 border-2 border-[#3ddc84] rounded-lg p-5 mt-4">
              <h4 className="text-[#3ddc84] text-center mb-3">Watch: Why Pathos Chose PHIERS (7:11)</h4>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe src="https://www.youtube.com/embed/KLu7USN_dao" title="Pathos Communications - Why We Stand Behind PHIERS" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
              </div>
              <p className="text-center text-[#3ddc84] text-sm mt-2">"This is not a pitch video. It's a statement of confidence." — Pathos Communications</p>
            </div>
          </div>

          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7 mb-6">
            <h3 className="font-condensed font-bold text-lg text-white mb-2">DotCom Magazine — Industry Validation</h3>
            <p className="text-gray-400 mb-3">Will Price interviewed by DotCom Magazine — the same platform promoted by Shark Tank co-founders Kevin Harrington and Kevin O'Leary. This interview establishes years of credibility in the healthcare space.</p>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <iframe src="https://www.youtube.com/embed/pUdlWukaLLY" title="PHIERS — DotCom Magazine Interview" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
            </div>
            <p className="text-gray-500 text-sm italic text-center mt-2">DotCom Magazine — promoted by Shark Tank co-founders Kevin Harrington and Kevin O'Leary</p>
          </div>

          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7 mb-4">
            <h3 className="font-condensed font-bold text-lg text-white mb-2">Mark Cuban's Cost Plus Drugs</h3>
            <p className="text-gray-400">7 million customers. 80-90% prescription savings. 200+ retail pharmacies operational. <strong className="text-white">Proves cooperative pharmaceutical buying works at scale.</strong></p>
          </div>

          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7 mb-4">
            <h3 className="font-condensed font-bold text-lg text-white mb-2">ZORTT Elite Medical</h3>
            <p className="text-gray-400">Cooperative healthcare delivery model. Operational 2+ years. <strong className="text-white">Proves member-controlled healthcare works.</strong></p>
          </div>

          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7">
            <h3 className="font-condensed font-bold text-lg text-white mb-2">Erica Chenoweth (Harvard Kennedy School)</h3>
            <p className="text-gray-400 mb-2">Studied 323 political campaigns from 1900-2006. <strong className="text-white">Finding: NO campaign where 3.5% of the population participated in sustained, organized action ever failed.</strong></p>
            <p className="text-gray-400">Translation: Systemic change isn't just possible—it's guaranteed once we reach and sustain 3.5% organized participation.</p>
          </div>
        </div>

        {/* Integrated Credibility Block */}
         <ValidatedBy defaultExpanded={true} />

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* WHAT MAKES PHIERS DIFFERENT */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Difference</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">What Makes PHIERS <span className="text-[#3ddc84]">Different</span></h2>
          <div className="bg-[#3ddc84]/5 border border-[#3ddc84]/20 border-l-4 border-l-[#3ddc84] rounded-r-lg p-6">
            <p className="text-gray-400 mb-3"><strong className="text-white">Most healthcare plans require Congress to spend more money.</strong></p>
            <p className="text-gray-400 mb-3">PHIERS saves Congress $2.73 TRILLION annually by replacing expensive insurance with efficient telehealth.</p>
            <p className="text-[#3ddc84] font-bold mb-3"><strong>We're not asking them to do something hard. We're showing them the math that makes it easy.</strong></p>
            <p className="text-white font-bold">Congress will choose the path of least resistance. We're making PHIERS that path.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* THE TIMELINE */}
        <div className="mb-12">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Plan</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">The Timeline to <span className="text-[#3ddc84]">Victory</span></h2>

          <button onClick={() => openModal('/images/PHIERS_SequenceRoadmap_v1.png')} className="cursor-pointer w-full">
            <Image src="/images/PHIERS_SequenceRoadmap_v1.png" alt="PHIERS Implementation Timeline" width={600} height={400} className="max-w-full h-auto mx-auto rounded-lg border border-[#3ddc84]/20 hover:scale-[1.02] transition-transform" />
          </button>
          <p className="text-gray-500 text-sm italic text-center mb-6">Click to enlarge • From Petition to Universal Coverage</p>

          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-7">
            <ul className="space-y-3 text-gray-400">
              <li><strong className="text-[#ffd60a]">▸ NOW:</strong> Build petition pressure (targeting 3.5% = 11.6M signatures)</li>
              <li><strong className="text-[#ffd60a]">▸ March 28, 2026:</strong> No Kings III — We give teeth to the demands of the people</li>
              <li><strong className="text-[#ffd60a]">▸ Spring 2026:</strong> 3.5% threshold reached → Cascade begins</li>
              <li><strong className="text-[#ffd60a]">▸ July 4, 2026:</strong> 100M+ members = Independence Day from corporate control</li>
              <li><strong className="text-[#ffd60a]">▸ 8-13 months:</strong> Universal coverage for 234M of the 99%</li>
            </ul>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* FINAL CTA */}
        <div className="text-center py-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Join the <span className="text-[#3ddc84]">Movement</span></h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto mb-6">This is how 234 million Americans get coverage. This is how we force Congress to act. This is how we reclaim our government.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://forms.gle/euJkZxjUserFVCPK8" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 text-sm text-[#3ddc84] border border-[#3ddc84]/30 rounded-full font-condensed font-semibold hover:bg-[#3ddc84]/10 transition-all">⚡ JOIN FIRST WAVE</a>
            <Link href="/action" className="px-5 py-2 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">All Actions →</Link>
            <a href="https://discord.gg/narhDKJY" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">Join Discord</a>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-12 px-6 border-t border-[#3ddc84]/10 bg-[#0d1525]">
        <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-70" />
        <div className="font-condensed font-bold text-gray-400 mb-1">PHIERS is a people's movement — not a company, not a product.</div>
        <div className="text-sm text-gray-500 mb-4">Built by regular people who are done waiting.</div>
        <div className="max-w-[500px] mx-auto mb-6">
          <p className="font-condensed text-gray-400">Energy without power fails.<br />PHIERStorm is the power.<br /><span className="text-gray-500">PHIERS.org — a catalyst for the change we've been waiting for.</span><br /><span className="text-gray-500">The only thing missing is you.</span></p>
        </div>
        <div className="max-w-[560px] mx-auto p-5 border border-[#3ddc84]/15 rounded-lg mb-6">
          <p className="font-condensed text-gray-500 text-xs uppercase tracking-wide mb-2">Built by</p>
          <p className="font-condensed font-bold text-white">Will Price | Founder &amp; Chief Solutions Architect</p>
          <p className="font-condensed text-gray-400 text-sm mb-3">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending and built the lever to fix it. Building this since 2009.</p>
          <button onClick={() => setWillModalOpen(true)} className="font-condensed text-[#3ddc84] text-sm border-b border-[#3ddc84]/30">👤 Meet the Architect →</button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-6">
          <Link href="/crisis" className="text-gray-500 text-sm hover:text-[#3ddc84]">The Crisis</Link>
          <Link href="/simple-math" className="text-gray-500 text-sm hover:text-[#3ddc84]">Simple Math</Link>
          <Link href="/solutions" className="text-gray-500 text-sm hover:text-[#3ddc84]">5D Solutions</Link>
          <Link href="/telecare" className="text-gray-500 text-sm hover:text-[#3ddc84]">Telehealth</Link>
          <Link href="/no-war" className="text-gray-500 text-sm hover:text-[#3ddc84]">No War / No Draft</Link>
          <Link href="/organizers" className="text-gray-500 text-sm hover:text-[#3ddc84]">Organizers</Link>
          <Link href="/unions" className="text-gray-500 text-sm hover:text-[#3ddc84]">Unions</Link>
          <Link href="/donate" className="text-gray-500 text-sm hover:text-[#3ddc84]">Donate</Link>
          <Link href="/faq" className="text-gray-500 text-sm hover:text-[#3ddc84]">FAQ</Link>
          <Link href="/about" className="text-gray-500 text-sm hover:text-[#3ddc84]">About</Link>
        </div>
        <div className="text-xs text-gray-600">
          Not built for profit. Not built for power. Built for We the People — by people who refused to stop.<br />
          📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a> · 📞 (916) 306-8967<br />
          © PHIERS.org — Original Concept Since 2009. All Rights Reserved.<br />
          <span className="text-[0.7rem]">PHIERS™ · PHIERSale™ · PHIERWorks™ · PHIERPlace™ — Protected marks established 2009–2025.</span>
        </div>
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>

      {/* Image Modal */}
      <AnimatePresence>
        {imageModalOpen && (
          <motion.div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <button className="absolute top-5 right-7 text-white text-3xl cursor-pointer bg-black/50 border border-white/20 w-10 h-10 rounded-full" onClick={closeModal}>✕</button>
            <img src={modalImageSrc} alt="" className="max-w-[90vw] max-h-[90vh] rounded-lg border-2 border-[#3ddc84]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Will Price Modal */}
      <AnimatePresence>
        {willModalOpen && (
         <motion.div className="fixed inset-0 bg-[#080d1a] z-[99998] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setWillModalOpen(false)}>
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
        details summary { list-style: none; }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  )
}
