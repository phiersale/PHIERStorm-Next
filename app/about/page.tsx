// FILE: app/about/page.tsx - START
// ABOUT PAGE - The Origin Story

'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function AboutPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [willModalOpen, setWillModalOpen] = useState(false)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  // scrollToTop function with useCallback
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // playVideo wrapped in useCallback
  const playVideo = useCallback((videoId: string, src: string) => {
    const wrap = document.getElementById('wrap-' + videoId)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }, [])

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[100px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={100}
              height={100}
              className="opacity-90"
            />
          </div>
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Origin Story</span>
          {/* Two-tone H1 - FIXED */}
          <h1 className="mb-4">
            <span className="hero-white">About PHIERS:</span>
            <br />
            <span className="hero-green">Built from Lived Experience</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[700px] mx-auto">
            This wasn't designed in a boardroom. It was built by people who refused to stop.
          </p>
        </div>

        {/* Video Section */}
        <section className="container section">
          <div className="bg-bg-card2 border-2 border-green/20 rounded-xl p-6 max-w-[800px] mx-auto">
            <h2 className="font-display text-2xl text-green text-center mb-4">PHIERStorm: The Movement to Fix Healthcare</h2>
            <div className="video-container mx-auto">
              <div id="wrap-phierstorm" className="video-wrapper cursor-pointer group" onClick={() => playVideo('phierstorm', 'https://www.youtube.com/embed/bEUyDVAYwpk?autoplay=1&rel=0')}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/bEUyDVAYwpk/hqdefault.jpg')" }}>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-green font-bold text-sm mt-3">The movement your support fuels. The change we're building together.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Who Built This */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Architect</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Who Built <span className="text-green">This</span></h2>

          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-6 mb-6">
            <h3 className="font-condensed font-bold text-green text-xl mb-2">Will Price | Chief Solutions Architect</h3>
            <p className="text-body mb-3"><strong className="text-white">Background:</strong> 15+ years perfecting 5D solutions and business models through systems architecture, intelligence analysis, and AI-driven complex adaptive systems. Specialized in identifying leverage points that others miss.</p>
            <p className="text-body mb-3"><strong className="text-white">The AI Story:</strong> Decades of experience in tech strategy culminated in using AI tools to map interconnections across healthcare, economics, jobs, politics, and peace. The result: PHIERS — a solution that solves five crises simultaneously because they're all connected.</p>
            <p className="text-body mb-3"><strong className="text-white">Why PHIERS:</strong> Not a politician. Not a lobbyist. Just someone who saw the mathematical opportunity everyone else missed—and built the blueprint to execute it. December 11, 2024 wasn't the origin — it was the validation of 15+ years of work.</p>
            <p className="text-body"><strong className="text-white">Contact:</strong> (916) 306-8967 | <Link href="mailto:info@phiers.org" className="text-green">info@phiers.org</Link></p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Anchor Line - ADDED after Who Built This section */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* The Breakthrough */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Moment</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Breakthrough:<br /><span className="text-green">December 11, 2024</span></h2>

            <div className="bg-gold-glow border-l-4 border-l-gold rounded-r-lg p-5">
              <p className="text-body mb-2"><strong className="text-gold">The moment:</strong> Congress rejected both healthcare plans. 22 million Americans about to lose coverage. Everyone said, "There's nothing we can do."</p>
              <p className="text-body mb-2"><strong className="text-white">But there was a pattern no one was seeing.</strong></p>
              <p className="text-body mb-2">CMS pays $8,000/year per person for traditional insurance. 80% don't need hospitalization—they'd be fine with $600/year telehealth. That's $7,400 freed per person. Enough to pay for 12 others.</p>
              <p className="font-condensed text-xl text-green font-bold text-center mt-3">One conversion funds 12. Those 12 fund 148. 148 fund 1,825. Exponential. Unstoppable.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Why This Works */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Mechanics</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why This Works<br /><span className="text-green">When Others Fail</span></h2>

          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-5 mb-4">
            <h3 className="font-condensed font-bold text-green text-lg mb-2">1. Self-Funding Mechanism</h3>
            <p className="text-body text-sm">Every conversion generates $7,400+ in freed government savings. That money pays for the next 12 conversions. The system funds itself through exponential compounding. Congress can't "defund" something that literally generates money through efficiency.</p>
          </div>
          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-5 mb-4">
            <h3 className="font-condensed font-bold text-green text-lg mb-2">2. Mathematical Inevitability</h3>
            <p className="text-body text-sm">3.5% of Americans organized = guaranteed systemic change (Harvard research, Erica Chenoweth). We're targeting 100M+ = 9x the threshold. This isn't hope—it's mechanics.</p>
          </div>
          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-5 mb-4">
            <h3 className="font-condensed font-bold text-green text-lg mb-2">3. Cooperative Structure</h3>
            <p className="text-body text-sm">Members control their own healthcare choices. No corporate middlemen. No profit extraction. 100M+ organized = largest pharmaceutical buyer in the nation = market dominance through pure purchasing power.</p>
          </div>
          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-5 mb-4">
            <h3 className="font-condensed font-bold text-green text-lg mb-2">4. Solves 5 Crises Simultaneously</h3>
            <p className="text-body text-sm">Healthcare + Jobs + Economy + Politics + Peace. Each dimension strengthens the others. Block one, the system adapts. This is systems thinking applied to national transformation.</p>
            <Link href="/solutions" className="text-green text-sm font-condensed font-bold mt-2 inline-block">→ See 5D Solutions</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Letters of Support */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Validation</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Letters of <span className="text-green">Support</span></h2>

            <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-5 mb-6">
              <h3 className="font-condensed font-bold text-gold text-lg mb-2">Congressman Chris Van Hollen — Maryland</h3>
              <div className="max-w-[500px] mx-auto my-3">
                <button onClick={() => openModal('/images/VanHollen_Letter_of_Support.png')} className="cursor-pointer">
                  <Image
                    src="/images/VanHollen_Letter_of_Support.png"
                    alt="Letter of Support from Congressman Chris Van Hollen"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
                  />
                </button>
                <p className="text-center text-xs text-gray-500 mt-1">Click to enlarge</p>
              </div>
              <div className="border-l-3 border-l-green pl-4 my-3 bg-green-glow rounded-r-lg">
                <p className="text-white italic">"PHIERS.org has the potential to become a vital part of the health care system."</p>
                <p className="text-green text-sm mt-1">— Chris Van Hollen, Member of Congress</p>
              </div>
            </div>

            <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-5 mb-6">
              <h3 className="font-condensed font-bold text-gold text-lg mb-2">Mayor Kevin Johnson — Sacramento, California</h3>
              <div className="max-w-[500px] mx-auto my-3">
                <button onClick={() => openModal('/images/KJ_Sacramento_Support_Letter.png')} className="cursor-pointer">
                  <Image
                    src="/images/KJ_Sacramento_Support_Letter.png"
                    alt="Letter of Support from Mayor Kevin Johnson"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
                  />
                </button>
                <p className="text-center text-xs text-gray-500 mt-1">Click to enlarge</p>
              </div>
              <div className="border-l-3 border-l-green pl-4 my-3 bg-green-glow rounded-r-lg">
                <p className="text-white italic">"I strongly support the PHIERS approach... PHIERS could be readily adapted throughout California as a flagship community health care approach."</p>
                <p className="text-green text-sm mt-1">— Kevin Johnson, Mayor, City of Sacramento (2009)</p>
              </div>
              <p className="text-body text-sm mt-2">This support goes back to 2009. <Link href="/our-origins" className="text-green">The full story →</Link></p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Independent Validations */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Credibility</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Four Independent <span className="text-green">Validations</span></h2>

          {/* Pathos */}
          <div className="bg-bg-card border-l-4 border-l-gold rounded-r-lg p-5 mb-4">
            <h3 className="font-condensed font-bold text-gold text-lg mb-2">Pathos Communications (Fortune 500 PR Firm)</h3>
            <p className="text-body text-sm mb-3">Top-tier PR firm verified PHIERS and confirmed interest from major outlets: <strong className="text-white">International Business Times, Forbes, and USA Today.</strong></p>
            <p className="text-body text-sm mb-3">Pathos stands behind Will Price personally and professionally. <strong className="text-white">When a Fortune 500 PR firm publicly stakes their reputation on your movement, you know it's credible.</strong></p>
            <div className="bg-green-glow border-2 border-green rounded-xl p-4">
              <h4 className="font-condensed font-bold text-green text-center mb-3">Watch: Why Pathos Chose PHIERS (7:11)</h4>
              <div className="video-container max-w-[560px] mx-auto">
                <div id="wrap-pathos" className="video-wrapper cursor-pointer group" onClick={() => playVideo('pathos', 'https://www.youtube.com/embed/KLu7USN_dao?autoplay=1&rel=0')}>
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/KLu7USN_dao/hqdefault.jpg')" }}>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-green text-xs mt-2">"This is not a pitch video. It's a statement of confidence." — Pathos Communications</p>
            </div>
          </div>

          {/* DotCom */}
          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-5 mb-4">
            <h3 className="font-condensed font-bold text-green text-lg mb-2">DotCom Magazine — Industry Validation</h3>
            <p className="text-body text-sm mb-3">Will Price interviewed by DotCom Magazine — the same platform promoted by Shark Tank co-founders Kevin Harrington and Kevin O'Leary. This interview establishes years of credibility in the healthcare space.</p>
            <div className="video-container max-w-[560px] mx-auto mb-2">
              <div id="wrap-dotcom" className="video-wrapper cursor-pointer group" onClick={() => playVideo('dotcom', 'https://www.youtube.com/embed/pUdlWukaLLY?autoplay=1&rel=0')}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/pUdlWukaLLY/hqdefault.jpg')" }}>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs">DotCom Magazine — promoted by Shark Tank co-founders Kevin Harrington and Kevin O'Leary</p>
          </div>

          {/* Cost Plus Drugs */}
          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-5 mb-4">
            <h3 className="font-condensed font-bold text-green text-lg mb-2">Mark Cuban's Cost Plus Drugs</h3>
            <p className="text-body text-sm">7 million customers. 80-90% prescription savings. 200+ retail pharmacies operational. <strong className="text-white">Proves cooperative pharmaceutical buying works at scale.</strong></p>
          </div>

          {/* ZORTT */}
          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-5 mb-4">
            <h3 className="font-condensed font-bold text-green text-lg mb-2">ZORTT Elite Medical</h3>
            <p className="text-body text-sm">Cooperative healthcare delivery model. Operational 2+ years. <strong className="text-white">Proves member-controlled healthcare works.</strong></p>
          </div>

          {/* Harvard */}
          <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-5 mb-4">
            <h3 className="font-condensed font-bold text-green text-lg mb-2">Erica Chenoweth (Harvard Kennedy School)</h3>
            <div className="max-w-[300px] mx-auto my-3">
              <button onClick={() => openModal('/images/3.5pct_Erica_Chenoweth.jpg')} className="cursor-pointer">
                <Image
                  src="/images/3.5pct_Erica_Chenoweth.jpg"
                  alt="3.5% — Chenoweth Research"
                  width={300}
                  height={200}
                  className="rounded-lg border border-white/10 hover:scale-[1.01] transition-transform mx-auto"
                />
              </button>
            </div>
            <p className="text-body text-sm">Studied 323 political campaigns from 1900-2006. <strong className="text-white">Finding: NO campaign where 3.5% of the population participated in sustained, organized action ever failed.</strong></p>
            <p className="text-body text-sm mt-2">Translation: Systemic change isn't just possible—it's guaranteed once we reach and sustain 3.5% organized participation.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What Makes PHIERS Different */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Difference</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">What Makes PHIERS <span className="text-green">Different</span></h2>

            <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5">
              <p className="text-body mb-2"><strong className="text-white">Most healthcare plans require Congress to spend more money.</strong></p>
              <p className="text-body mb-2">PHIERS saves Congress $2.73 TRILLION annually by replacing expensive insurance with efficient telehealth.</p>
              <p className="text-green font-bold text-center my-2"><strong>We're not asking them to do something hard. We're showing them the math that makes it easy.</strong></p>
              <p className="text-white font-bold text-center">Congress will choose the path of least resistance. We're making PHIERS that path.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Timeline */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Plan</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Timeline to <span className="text-green">Victory</span></h2>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/PHIERS_SequenceRoadmap_v1.png')} className="cursor-pointer">
              <Image
                src="/images/PHIERS_SequenceRoadmap_v1.png"
                alt="PHIERS Implementation Timeline"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-center text-xs text-gray-500 mt-1">Click to enlarge • From Petition to Universal Coverage</p>
          </div>

          <div className="space-y-3 max-w-[500px] mx-auto">
            <div className="flex items-start gap-2">
              <span className="text-gold font-bold">▸</span>
              <p className="text-body text-sm"><strong className="text-gold">NOW:</strong> Build petition pressure (targeting 3.5% = 11.6M signatures)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gold font-bold">▸</span>
              <p className="text-body text-sm"><strong className="text-gold">March 28, 2026:</strong> No Kings III — We give teeth to the demands of the people</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gold font-bold">▸</span>
              <p className="text-body text-sm"><strong className="text-gold">Spring 2026:</strong> 3.5% threshold reached → Cascade begins</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gold font-bold">▸</span>
              <p className="text-body text-sm"><strong className="text-gold">July 4, 2026:</strong> 100M+ members = Independence Day from corporate control</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gold font-bold">▸</span>
              <p className="text-body text-sm"><strong className="text-gold">8-13 months:</strong> Universal coverage for 234M of the 99%</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Join the <span className="text-green">Movement</span></h2>
          <p className="text-body text-lg max-w-[600px] mx-auto mb-6">This is how 234 million Americans get coverage. This is how we force Congress to act. This is how we reclaim our government.</p>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button href="https://forms.gle/euJkZxjUserFVCPK8" variant="primary">⚡ JOIN FIRST WAVE</Button>
            <Button href="/action" variant="secondary">All Actions →</Button>
            <Button href="https://discord.gg/narhDKJY" variant="secondary">Join Discord</Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white text-3xl cursor-pointer hover:text-green transition-colors"
              >
                ✕
              </button>
              <Image
                src={modalImage}
                alt="Enlarged view"
                width={800}
                height={600}
                className="rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Will Price Modal */}
      <AnimatePresence>
        {willModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[99998] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setWillModalOpen(false)}
          >
            <div className="relative max-w-[720px] w-full bg-bg-dark/97 border-2 border-green/35 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setWillModalOpen(false)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-bg-card text-green border-2 border-green flex items-center justify-center text-xl hover:bg-green hover:text-bg-card transition-all z-10"
              >
                ✕
              </button>
              <div className="flex flex-wrap">
                <div className="w-full md:w-[240px] min-h-[280px] overflow-hidden">
                  <Image
                    src="/images/Will_Price.png"
                    alt="Will Price — Founder & Chief Solutions Architect, PHIERS"
                    width={240}
                    height={280}
                    className="w-full h-full min-h-[260px] object-cover object-[55%_top]"
                  />
                </div>
                <div className="flex-1 min-w-[240px] p-6 flex flex-col justify-center">
                  <p className="font-condensed text-xs text-green uppercase tracking-[3px] mb-2">The Architect</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1">Will Price</h3>
                  <p className="font-condensed text-sm text-gold font-bold mb-3">Founder &amp; Chief Solutions Architect, PHIERS</p>
                  <p className="text-body text-sm">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending — and built the lever to redirect it toward healthcare, jobs, and a monthly check for every American. Building this since 2009.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back-to-top button - FIXED to use scrollToTop */}
      <button 
        onClick={scrollToTop}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

      <style jsx global>{`
        .back-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--green);
          color: var(--bg-deep);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 150ms ease;
          z-index: 999;
          border: none;
        }
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        .back-to-top:hover {
          background: #2ab568;
          transform: translateY(-2px);
        }
        .bg-green-glow {
          background: rgba(61, 220, 132, 0.06);
        }
        .bg-gold-glow {
          background: rgba(245, 200, 66, 0.08);
        }
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          border: 2px solid rgba(61, 220, 132, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }
        .video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      `}</style>

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

// END FILE: app/about/page.tsx
