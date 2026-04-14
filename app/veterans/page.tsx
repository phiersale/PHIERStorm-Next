// FILE: app/veterans/page.tsx - START

'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function VeteransPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

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

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[72px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={72}
              height={72}
              className="opacity-90"
            />
          </div>

          {/* Veterans Image */}
          <div className="max-w-[660px] mx-auto mb-8">
            <button onClick={() => openModal('/images/veterans_from_back.jpg')} className="cursor-pointer w-full">
              <Image
                src="/images/veterans_from_back.jpg"
                alt="Veterans — someone's kids, someone's neighbors, someone's family"
                width={660}
                height={400}
                className="w-full h-auto rounded-xl border-2 border-red-500/30 shadow-2xl hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="font-condensed font-bold text-xs text-red-500 text-center tracking-wider uppercase mt-3">
              They served. They were promised something. Then they came home.
            </p>
          </div>

          <span className="font-condensed font-bold text-gold text-xs uppercase tracking-wider block mb-3">For Every Veteran Who Served — Then Got Left Behind</span>
          {/* Two-tone H1 - FIXED */}
          <h1 className="mb-4">
            <span className="hero-white">You Served. You Were Promised Care.</span>
            <br />
            <span className="hero-green">The System Doesn't Deliver It.</span>
          </h1>
          <p className="font-condensed text-lg text-white max-w-[680px] mx-auto mb-3">
            More than half of America's 20+ million veterans receive limited or inconsistent support from the VA system they were promised. PHIERS is built to fix that — regardless of eligibility, location, or politics.
          </p>
          <p className="font-condensed text-base text-gray-500 max-w-[600px] mx-auto mb-6">
            This isn't about politics. It's about whether the system you were promised actually shows up when you need it.
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform?usp=header" variant="secondary">📋 Take the Survey</Button>
            <Button href="/donate" variant="secondary">💚 Donate</Button>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* The Access Problem */}
        <section className="container section">
          <span className="font-condensed font-bold text-gold text-xs uppercase tracking-wider block mb-3">The Access Problem</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Rural Veterans Drive Hours for Care.<br /><span className="text-red-500">Urban Clinics Are Already Overwhelmed.</span></h2>

          <p className="text-body mb-4">Now the system is being cut even further. When 30,000 VA staff positions disappear, access disappears with them — front-line clinicians, mental health providers, the people who actually see patients. Gone.</p>

          <p className="text-body mb-4">PHIERS changes the math. A $600 telehealth model stabilizes both rural hospitals and urban clinics by increasing patient volume, reducing uncompensated care, restoring predictable revenue, preventing closures, and keeping local providers employed. The result is surplus funding that strengthens the safety net — including veterans' care.</p>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5">
            <strong className="text-green">PHIERS fills the gaps the VA is leaving behind</strong> — and it works regardless of your VA eligibility, your zip code, or which party controls Congress.
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Anchor Line - ADDED */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[900px] mx-auto my-8 px-4">
          <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
            <div className="font-display text-3xl text-red-500">20M+</div>
            <p className="text-body text-xs mt-2">Veterans who receive little or no meaningful VA support — more than half of all who served</p>
          </div>
          <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
            <div className="font-display text-3xl text-red-500">30,000</div>
            <p className="text-body text-xs mt-2">VA staff being cut — the people who process your claims and schedule your care</p>
          </div>
          <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
            <div className="font-display text-3xl text-red-500">&lt;10%</div>
            <p className="text-body text-xs mt-2">Veterans with 100% VA coverage. Everyone else pays, waits, or goes without.</p>
          </div>
          <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
            <div className="font-display text-3xl text-green">$600</div>
            <p className="text-body text-xs mt-2">Per year for telehealth that covers 80% of what veterans actually need</p>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* The Betrayal */}
        <section className="container section">
          <span className="font-condensed font-bold text-gold text-xs uppercase tracking-wider block mb-3">What's Changing — And Why It Matters Now</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">While You Were Serving,<br /><span className="text-red-500">The System Was Already Failing.</span></h2>

          <p className="text-body mb-4">The same people beating the drums of war are quietly dismantling the only system meant to care for you when you come home.</p>

          <div className="bg-red-500/10 border-l-4 border-l-red-500 rounded-r-lg p-5 mb-4">
            <p className="text-body mb-2">The VA just tried to slip a rule into the Federal Register — effective immediately, no public notice — that would have cut disability benefits for veterans who take medication. A veteran with 100% PTSD rating could have dropped to 30% <em>simply because their medication was working.</em></p>
            <p className="text-body">They backed off after 10,000+ public comments in 60 hours. <strong className="text-white">But the rule is still on the books. They can reinstate it any time.</strong></p>
          </div>

          <p className="text-body mb-3">30,000 VA staff are being cut — the people who process your claims, schedule your appointments, answer your calls. Front-line workers. Gone.</p>
          <p className="text-body mb-3">Nursing homes closing. Mental health positions eliminated. Rural clinics shutting down. Urban clinics so overwhelmed they're turning away non-emergency care.</p>
          <p className="text-body mb-4">And while they gut the VA, they're building up for the largest military deployment since Iraq. Two carrier strike groups. Hundreds of fighter jets. A new generation of Americans about to be sent into combat. They'll come home to a VA that no longer exists.</p>
        </section>

        <hr className="border-green/20" />

        {/* The Math Table */}
        <section className="container section">
          <span className="font-condensed font-bold text-gold text-xs uppercase tracking-wider block mb-3">The Math They Don't Want Veterans to Know</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">What They Tell You.<br /><span className="text-red-500">What the Numbers Show.</span></h2>

          <div className="space-y-3">
            <div className="border-b border-green/20 pb-3">
              <p className="text-gray-500 italic text-sm mb-1">What They Tell You:</p>
              <p className="text-white font-semibold">"The VA serves veterans."</p>
              <p className="text-green text-sm mt-1">The Truth:</p>
              <p className="text-body text-sm">The VA serves fewer than 9 million of 20+ million veterans. If you're not in that 9 million, you get nothing.</p>
            </div>
            <div className="border-b border-green/20 pb-3">
              <p className="text-gray-500 italic text-sm mb-1">What They Tell You:</p>
              <p className="text-white font-semibold">"Disabled veterans get full coverage."</p>
              <p className="text-green text-sm mt-1">The Truth:</p>
              <p className="text-body text-sm">Fewer than 10% of veterans have 100% VA coverage. Everyone else pays, waits, or goes without.</p>
            </div>
            <div className="border-b border-green/20 pb-3">
              <p className="text-gray-500 italic text-sm mb-1">What They Tell You:</p>
              <p className="text-white font-semibold">"We're making the VA more efficient."</p>
              <p className="text-green text-sm mt-1">The Truth:</p>
              <p className="text-body text-sm">Cutting 30,000 staff to pre-PACT Act levels means longer waits, denied claims, and veterans falling through the cracks.</p>
            </div>
            <div className="border-b border-green/20 pb-3">
              <p className="text-gray-500 italic text-sm mb-1">What They Tell You:</p>
              <p className="text-white font-semibold">"No cuts to veteran benefits."</p>
              <p className="text-green text-sm mt-1">The Truth:</p>
              <p className="text-body text-sm">They already tried to cut benefits for veterans whose medication works. They'll try again.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Will's Story */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-gold text-xs uppercase tracking-wider block mb-3">Why the Founder of PHIERS Left the VA</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Will Price — <span className="text-green">Chief Solutions Architect</span></h2>

            <p className="text-body mb-4">Twenty years inside the VA system — Senior Analyst on Electronic Health Records, Registration, Eligibility, and Enrollment. VistA. The actual machinery that determines whether veterans receive care or fall through the cracks. One of five civilians selected for the VA's first enterprise-wide reengineering initiative.</p>
            <p className="text-body mb-6">He saw how the system actually worked, and who it left behind. He quit to build the alternative.</p>

            <div className="bg-gold-glow border-l-4 border-l-gold rounded-r-lg p-5 mb-4">
              <p className="text-white italic mb-2">"The VA was designed to serve a fraction of veterans. Even at its best, it leaves more than half behind. I didn't leave because the VA was being cut — I left because the architecture was never built to serve all veterans in the first place. PHIERS is the architecture that does."</p>
            </div>

            <div className="bg-gold-glow border-l-4 border-l-gold rounded-r-lg p-5">
              <p className="text-white italic mb-2">"When I saw them trying to cut benefits for veterans whose medication was working — that's when I knew we couldn't wait anymore. They're not just cutting the VA. They're cutting veterans. PHIERS is the only plan that makes your health coverage independent of their budget cuts."</p>
              <p className="text-gold text-sm mt-2">— Will Price, Chief Solutions Architect, PHIERS Movement</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What PHIERS Delivers */}
        <section className="container section">
          <span className="font-condensed font-bold text-gold text-xs uppercase tracking-wider block mb-3">What PHIERS Delivers</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">For Every Veteran.<br /><span className="text-green">No Exceptions.</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-bg-card border border-green/20 rounded-xl p-4">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">🇺🇸 Covers Every Veteran</h3>
              <p className="text-body text-sm">Not just the 9 million the VA serves. All 20+ million. Every veteran who served gets the same coverage — period.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">💊 No Medication Trap</h3>
              <p className="text-body text-sm">Your health coverage isn't tied to your disability rating. Taking medication that works doesn't punish you. Your benefits stay.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">🧠 Mental Health On Demand</h3>
              <p className="text-body text-sm">$600/year covers unlimited telehealth for PTSD, depression, anxiety — without the VA waitlist, without prior authorization.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">🛡 Not Dependent on the VA</h3>
              <p className="text-body text-sm">30,000 VA layoffs don't touch it. Budget cuts don't touch it. Which party controls Congress doesn't touch it. It's yours.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">🏔 Rural & Urban Coverage</h3>
              <p className="text-body text-sm">Works everywhere. Rural veterans don't drive hours for care. Urban clinics don't turn people away. Same coverage. Same cost.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4">
              <h3 className="font-condensed font-bold text-green text-lg mb-2">📈 The Math That Scales</h3>
              <p className="text-body text-sm">One veteran switching saves enough to cover 12 more. Those 12 cover 148. The cascade becomes unstoppable.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Math */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-gold text-xs uppercase tracking-wider block mb-3">The Math That Changes Everything</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">$600 vs $10,000+</h2>

            <p className="text-body mb-4">$600 per year covers primary care, mental health, prescriptions, and chronic condition management — the majority of what most veterans actually use. Traditional insurance costs $10,000+ for the same care. That difference creates a cascade that funds universal coverage for every American in 8–13 months.</p>

            <Link href="/simple-math" className="text-green font-bold hover:text-green-dim transition-colors">→ See the math</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* War Cascade */}
        <section className="container section">
          <p className="font-condensed font-bold text-gray-500 text-base mb-6">This isn't separate from what's happening next. It's part of the same system.</p>

          <span className="font-condensed font-bold text-gold text-xs uppercase tracking-wider block mb-3">The Dimension They Never Discuss</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Peace.<br /><span className="text-red-500">And Why It's Connected to Everything.</span></h2>

          <p className="text-body mb-4">Right now, the United States has the largest military buildup in the Middle East since the 2003 Iraq invasion. Two carrier strike groups. Hundreds of fighter jets. A new generation of Americans is about to be sent into combat.</p>
          <p className="text-body mb-4">Those Americans will come home to a VA that is being dismantled in real time.</p>

          <div className="bg-red-500/10 border-l-4 border-l-red-500 rounded-r-lg p-5 mb-4">
            <p className="text-body mb-2">The unauthorized war is already hitting your grocery bill, your gas prices, and your electric bill. And they're about to ask your kids to fight in it — with no congressional vote, no mandate, no exit strategy.</p>
            <Link href="/no-war" className="text-red-500 font-bold hover:text-red-400 transition-colors">→ See the full economic cascade on the No War page</Link>
          </div>

          <p className="text-body mb-4">The $1 billion+ per day spent on undeclared wars could fund healthcare for every veteran who's ever served, mental health support for every service member coming home, and job training, education, and housing — the things veterans actually need.</p>

          <p className="text-body">PHIERS was built with peace as one of its five core dimensions — not as idealism, but as systems thinking. Nations that provide genuine economic security, real healthcare, and stable employment don't need endless war economies to function. <strong className="text-white">Ending the unauthorized war isn't separate from fixing veterans' healthcare. It's the same fight.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* 3.5% */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-gold text-xs uppercase tracking-wider block mb-3">The Only Thing That Stops Them</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">3.5%.<br /><span className="text-green">The Number That Changes Everything.</span></h2>

            <p className="text-body mb-4">Harvard researcher Erica Chenoweth studied 323 social movements across a century. The finding: no nonviolent movement that reached 3.5% sustained participation has ever failed.</p>
            <p className="text-body mb-4">3.5% of America is 11.6 million people. Veterans alone are 20+ million — already nearly double the threshold. <strong className="text-white">Organized together, you're not a voting bloc. You're a deciding force.</strong> Add families and everyone affected by the healthcare crisis, and we're at 100+ million. We just haven't moved together yet.</p>

            <div className="bg-gold-glow border-l-4 border-l-gold rounded-r-lg p-5">
              <strong className="text-gold">District counts begin compiling immediately.</strong> 1,500 in your district triggers a mandatory town hall.
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Three Actions */}
        <section className="container section">
          <span className="font-condensed font-bold text-gold text-xs uppercase tracking-wider block mb-3">Three Actions. One Outcome.</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">You Served.<br /><span className="text-gold">Here's How You Fight Back.</span></h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-bg-card border border-green/20 rounded-xl p-5">
              <div className="font-display text-3xl text-red-500 min-w-[40px]">1</div>
              <div>
                <h3 className="font-condensed font-bold text-white text-lg mb-1">Sign the Petition</h3>
                <p className="text-body text-sm">Every signature tells Congress: veterans are watching, veterans are organized, and veterans vote. Put your name on the record.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-bg-card border border-green/20 rounded-xl p-5">
              <div className="font-display text-3xl text-red-500 min-w-[40px]">2</div>
              <div>
                <h3 className="font-condensed font-bold text-white text-lg mb-1">Take the Survey</h3>
                <p className="text-body text-sm">Tell us what's hitting hardest — healthcare access, mental health, disability ratings, the medication trap. Your answers get delivered to your representatives.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-bg-card border border-green/20 rounded-xl p-5">
              <div className="font-display text-3xl text-red-500 min-w-[40px]">3</div>
              <div>
                <h3 className="font-condensed font-bold text-white text-lg mb-1">Share With Every Veteran You Know</h3>
                <p className="text-body text-sm">This isn't a partisan issue. This isn't left or right. This is every veteran who was promised something and got nothing. Share it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - UPDATED */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 max-w-[700px] mx-auto my-12 text-center">
          <h2 className="font-display text-3xl text-white mb-3">You Served.<br /><span className="text-green">Now Make Them Deliver.</span></h2>
          <p className="text-body max-w-[560px] mx-auto mb-6">Not as charity. Not as a benefit they can cut. As something you built with every day you spent away from your family. PHIERS is a people's movement — not a company, not a product. The only thing missing is you.</p>
          <div className="flex flex-col md:flex-row gap-3 justify-center mb-3">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform?usp=header" variant="secondary">📋 Take the Survey</Button>
          </div>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button href="/action" variant="secondary">📣 Take Action</Button>
            <Button href="/donate" variant="primary">💚 Support the Movement</Button>
          </div>
        </div>
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

// END FILE: app/veterans/page.tsx
