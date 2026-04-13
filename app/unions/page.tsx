// FILE: app/unions/page.tsx
// UNIONS PAGE - Collective Power Strategy

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function UnionsPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[80px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={80}
              height={80}
              className="opacity-90"
            />
          </div>

          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">PHIERS for Unions</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Unions built the middle class.<br /><span className="text-green">PHIERS gives unions the leverage to rebuild it.</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[700px] mx-auto mb-6">
            Unions know how to organize. PHIERS gives that organizing district-level political power Congress cannot ignore. This is not a petition. This is a pressure system.
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
            <Button href="/leverage" variant="secondary">→ See How Leverage Works</Button>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Video Section - Mamdani */}
        <section className="container section text-center">
          <div className="bg-bg-card border border-green/20 rounded-xl p-6 max-w-[800px] mx-auto">
            <h2 className="font-display text-2xl text-gold mb-3">🎥 Funding Mamdani's Agenda: Why Unions Will Win This Fight (5:55)</h2>
            <p className="text-gray-400 text-sm mb-4">Watch NYC Mayor Zohran Mamdani explain how organized workers force systemic change — and why PHIERS amplifies what unions already do.</p>
            <div className="video-container max-w-[640px] mx-auto">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-green/20">
                <iframe
                  src="https://player.vimeo.com/video/1157760069"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Why PHIERS-Powered Unions Will Win"
                />
              </div>
            </div>
            <p className="text-green text-sm mt-3">Understanding union power, collective organizing, and why PHIERS solves what workers are striking for.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Moment */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Moment</span>
            <p className="text-body mb-3">Workers are striking for the same reason across every industry:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-[500px] mx-auto mb-4">
              <div className="bg-bg-card border border-green/20 rounded-lg p-2 text-center text-body text-sm">→ Healthcare costs are crushing families</div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-2 text-center text-body text-sm">→ Staffing shortages are burning out professions</div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-2 text-center text-body text-sm">→ Wages can't keep up with cost of living</div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-2 text-center text-body text-sm">→ Employers claim "we can't afford it" while profits rise</div>
            </div>
            <p className="text-body mb-3">Unions are fighting these battles one contract at a time.</p>
            <p className="text-body mb-3">The crisis is national, structural, and political.</p>
            <p className="font-condensed text-xl text-green font-bold text-center">PHIERS is the mechanism that makes it national.</p>

            <div className="max-w-[500px] mx-auto my-6">
              <button onClick={() => openModal('/images/When Unions are Strong, America is Strong.jpg')} className="cursor-pointer w-full">
                <Image
                  src="/images/When Unions are Strong, America is Strong.jpg"
                  alt="When Unions are Strong, America is Strong"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
                />
              </button>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Why PHIERS is Built FOR Unions */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Why PHIERS is Built FOR Unions</span>
          <p className="text-body mb-4">Unions are the only mechanism that reliably organizes workers across industries. PHIERS doesn't compete with unions—it amplifies them.</p>
          
          <h3 className="font-condensed font-bold text-gold text-lg mb-3">What Unions Actually Need</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div className="bg-bg-card border border-green/20 rounded-lg p-3">
              <p className="text-green font-bold text-sm mb-1">Healthcare security</p>
              <p className="text-body text-xs">Members can afford coverage ($600/year telehealth vs $8K+ traditional)</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3">
              <p className="text-green font-bold text-sm mb-1">Economic security</p>
              <p className="text-body text-xs">Freed healthcare savings fund wages, benefits, and job creation</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3">
              <p className="text-green font-bold text-sm mb-1">Bargaining leverage</p>
              <p className="text-body text-xs">11.6M+ organized (3.5% threshold) = Congress forced to listen</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3">
              <p className="text-green font-bold text-sm mb-1">Job protection</p>
              <p className="text-body text-xs">8-14M AI-resistant jobs created through cascade savings</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 md:col-span-2">
              <p className="text-green font-bold text-sm mb-1">Dignity</p>
              <p className="text-body text-xs">Universal healthcare means no union member loses coverage due to job loss</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Union Math */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Union Math</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why This Works</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[600px] mx-auto mb-6">
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-2xl text-green">10.5M</div>
                <p className="text-body text-xs">Union members</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-2xl text-green">50M+</div>
                <p className="text-body text-xs">Union reach (families + networks)</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-2xl text-gold">3.5%</div>
                <p className="text-body text-xs">Critical mass threshold</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-2xl text-green">100M+</div>
                <p className="text-body text-xs">PHIERS coalition (9x threshold)</p>
              </div>
            </div>

            <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5 mb-6">
              <p className="text-body text-center"><strong className="text-white">Erica Chenoweth's Harvard research:</strong> 3.5% of the population organized = GUARANTEED systemic change.</p>
              <p className="text-body text-center mt-2"><strong className="text-green">Unions + PHIERS = 100M+ Americans = 9x the threshold</strong></p>
            </div>

            <h3 className="font-condensed font-bold text-gold text-lg mb-3">Union Member Benefits</h3>
            <div className="bg-bg-card border border-green/20 rounded-lg p-4 mb-4">
              <p className="text-white font-bold mb-2">Single Union Member:</p>
              <ul className="list-disc list-inside text-body text-sm space-y-1">
                <li>Healthcare: $600/year (vs $8K+ traditional) = <strong className="text-green">$7,400 annual savings</strong></li>
                <li>Union stays intact: Healthcare no longer a wage negotiation issue</li>
                <li>Bargaining focus: Fight for WAGES instead of healthcare coverage</li>
                <li>Economic security: Freed money = rent, food, childcare, education</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-green/20 rounded-lg p-4">
              <p className="text-white font-bold mb-2">Union Family of 4:</p>
              <ul className="list-disc list-inside text-body text-sm space-y-1">
                <li>Annual savings: <strong className="text-green">$29,600</strong> in freed healthcare spending</li>
                <li>Plus cascade jobs: Family members get AI-resistant work ($15-20/hour)</li>
                <li>Plus monthly assistance: UBI from government savings when critical mass reached</li>
                <li>Plus supply chain: Better prices on everything through PHIERS marketplace</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Math That Ends the Argument */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Math That Ends the Argument</span>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[600px] mx-auto mb-6">
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
              <div className="font-display text-xl text-red-500">$24,000+</div>
              <p className="text-body text-xs">Family insurance premium</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
              <div className="font-display text-xl text-red-500">$12,000+</div>
              <p className="text-body text-xs">Per-worker burden</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
              <div className="font-display text-xl text-green">$600</div>
              <p className="text-body text-xs">PHIERS telehealth cost</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
              <div className="font-display text-xl text-green">$11,400+</div>
              <p className="text-body text-xs">Freed per worker</p>
            </div>
          </div>

          <p className="font-display text-3xl text-gold text-center mb-2">$45,600+</p>
          <p className="text-body text-center mb-6">per family of four</p>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/99_to_1_-_Great_Odds.jpg')} className="cursor-pointer w-full">
              <Image
                src="/images/99_to_1_-_Great_Odds.jpg"
                alt="Union savings — 99 to 1 odds"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
          </div>

          <p className="font-condensed text-lg text-white font-bold text-center mb-3">What $11,400 per worker buys for a 10,000-person hospital system:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-[500px] mx-auto mb-6">
            <div className="bg-green-glow border border-green/20 rounded-lg p-2 text-center text-body text-sm">✓ $35,000+ raise for every nurse</div>
            <div className="bg-green-glow border border-green/20 rounded-lg p-2 text-center text-body text-sm">✓ 800 additional nurses hired</div>
            <div className="bg-green-glow border border-green/20 rounded-lg p-2 text-center text-body text-sm">✓ Safe staffing restored</div>
            <div className="bg-green-glow border border-green/20 rounded-lg p-2 text-center text-body text-sm">✓ Guaranteed portable benefits</div>
            <div className="bg-green-glow border border-green/20 rounded-lg p-2 text-center text-body text-sm md:col-span-2">✓ A fully funded pension</div>
          </div>

          <p className="font-condensed text-xl text-green font-bold text-center">This isn't theory. It's arithmetic.</p>
        </section>

        <hr className="border-green/20" />

        {/* NYC Nurse Strike Example */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The NYC Nurse Strike Example</span>
            <p className="text-body mb-3">On January 12, 2026, 15,000 nurses walked out — the largest nurse strike in NYC history. They demanded healthcare benefits, safe staffing, wage increases, and workplace safety.</p>
            <p className="text-body mb-3"><strong className="text-white">Hospital response:</strong> "We can't afford it."</p>
            <p className="text-body mb-4"><strong className="text-white">The reality:</strong> NewYork-Presbyterian's CEO made $26.3 million in 2024. Three major hospital systems had over $1.6 billion in cash reserves.</p>

            <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">Here's Where PHIERS Changes Everything</h3>
              <p className="text-body mb-2"><strong className="text-white">NewYork-Presbyterian (single hospital):</strong> 10,000+ employees</p>
              <p className="text-body mb-3"><strong className="text-white">Freed healthcare spending with PHIERS:</strong> <span className="text-green font-bold">$79,000,000 annually</span></p>
              <p className="text-body mb-2"><strong className="text-white">That's enough to:</strong></p>
              <ul className="list-disc list-inside text-body text-sm space-y-1">
                <li>Increase every nurse's salary by $25,000+</li>
                <li>Hire 500+ additional nurses (better ratios)</li>
                <li>Guarantee healthcare benefits for life</li>
                <li>Fund a pension system</li>
                <li>STILL have money left over</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What PHIERS Gives Unions */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What PHIERS Gives Unions That No Contract Can</span>
          
          <div className="space-y-4 mb-6">
            <div className="bg-bg-card border border-green/20 rounded-lg p-4">
              <p className="font-condensed font-bold text-white text-lg mb-1">Healthcare off the table — permanently</p>
              <p className="text-body text-sm">When healthcare becomes a national guarantee, unions redirect all bargaining power to wages, staffing, job security, and pensions. This is the largest expansion of union leverage in 50 years.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-4">
              <p className="font-condensed font-bold text-white text-lg mb-1">A national leverage mechanism</p>
              <p className="text-body text-sm">Unions already know how to organize. PHIERS gives them a constitutional, peaceful tool that forces Congress to act. No shutdowns. No disruption. Just organized people applying pressure where it matters most.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-4">
              <p className="font-condensed font-bold text-white text-lg mb-1">8–14 million AI-resistant jobs</p>
              <p className="text-body text-sm">PHIERS cascade savings create millions of new, stable, human-centered jobs — exactly the kind unions are built to organize.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The 3.5% Is Already Met */}
        <section className="bg-bg-dark border-y border-green/10 section text-center">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The 3.5% Is Already Met</span>
            <p className="text-body mb-4">Harvard's Chenoweth: no nonviolent movement that reached 3.5% sustained participation has ever failed.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[600px] mx-auto mb-6">
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-xl text-green">12M</div>
                <p className="text-body text-xs">3.5% of America</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-xl text-green">16M</div>
                <p className="text-body text-xs">Union members alone</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-xl text-gold">50M+</div>
                <p className="text-body text-xs">Union families and networks</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-xl text-green">100M+</div>
                <p className="text-body text-xs">Affected by healthcare crisis</p>
              </div>
            </div>

            <p className="font-condensed text-2xl text-green font-bold">Unions already exceed the threshold. PHIERS gives them the mechanism to use it.</p>

            <div className="max-w-[500px] mx-auto my-6">
              <button onClick={() => openModal('/images/3.5pct_Means_Change.jpg')} className="cursor-pointer w-full">
                <Image
                  src="/images/3.5pct_Means_Change.jpg"
                  alt="3.5% Means Change — Three phases to victory"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
                />
              </button>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Three Phases to Victory */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Three Phases to Victory</span>
          
          <div className="space-y-4 mb-6">
            <div className="bg-bg-card border border-green/20 rounded-lg p-4">
              <p className="font-condensed font-bold text-gold text-lg mb-1">Phase 1 — Mobilize</p>
              <p className="text-body text-sm">Send every member the petition link. Issue the primary threat publicly: any representative who refuses faces a union-backed challenger.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-4">
              <p className="font-condensed font-bold text-gold text-lg mb-1">Phase 2 — Nationalize</p>
              <p className="text-body text-sm">50%+ of membership signs. Healthcare stories become evidence delivered to every member of Congress. One national message: Workers are united. Act now.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-lg p-4">
              <p className="font-condensed font-bold text-gold text-lg mb-1">Phase 3 — Enforce</p>
              <p className="text-body text-sm">If Congress passes PHIERS: shift to organizing the new economy. If Congress refuses: activate the full electoral apparatus. Primary the refusers. Show that ignoring organized labor means losing your job.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What Unions Can Do RIGHT NOW */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What Unions Can Do RIGHT NOW</span>
            <p className="text-body mb-3"><strong className="text-white">Union leadership:</strong> You can call your members to action RIGHT NOW. Send them the petition. Explain the benefits. Demand your Congressional representative pass PHIERS.</p>
            <p className="text-body mb-4">Or wait for the next healthcare crisis and negotiate Band-Aid solutions again.</p>
            <p className="font-condensed text-xl text-green font-bold text-center mb-6">This is the choice. This is the moment.</p>

            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Button href="/petition" variant="primary">✍ Sign Petition</Button>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform?usp=header" variant="secondary">📝 Fill Survey</Button>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Closing Statement */}
        <section className="container section">
          <div className="bg-gold-glow border-l-4 border-l-gold rounded-r-lg p-6 max-w-[600px] mx-auto mb-6">
            <p className="text-body mb-3">Every major labor victory happened when workers stopped asking and started forcing.</p>
            <p className="text-body mb-2">The 40-hour week. The weekend. Child labor laws. Social Security. Medicare.</p>
            <p className="text-body mb-4">None came from generosity. All came from leverage.</p>
            <p className="font-condensed text-xl text-green font-bold text-center">Unions don't need permission. They already have the power. PHIERS gives them the switch.</p>
          </div>

          <div className="flex flex-col gap-3 max-w-md mx-auto">
            <Button href="/petition" variant="primary" fullWidth>✍ ADD MY NAME</Button>
            <Button href="/leverage" variant="secondary" fullWidth>→ See How Leverage Works</Button>
            <Button href="/organizers" variant="secondary" fullWidth>→ For Organizers</Button>
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

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 12px;
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

// END FILE: app/unions/page.tsx
