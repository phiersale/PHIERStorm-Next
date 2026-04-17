// FILE: app/crisis/page.tsx - START

'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import SectionImage from '@/components/SectionImage'
import SpiralViewer from '@/components/SpiralViewer'

export default function CrisisPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const btt = document.getElementById('back-to-top')
      if (btt) {
        if (window.scrollY > 400) btt.classList.add('visible')
        else btt.classList.remove('visible')
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navigation />

      <main>
        {/* HEADER IMAGE - ADDED */}
        <div className="container pt-8">
          <SectionImage 
           src="/images/5D_Solutions_Rubiks_Cube_sm.png" 
           alt="5D Solutions Cube – The interconnected crisis" 
           priority 
         />
        </div>

        {/* Hero */}
        <div className="container section text-center pt-8">
          <div className="relative h-[80px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={80}
              height={80}
              className="opacity-90"
              sizes="80px"
            />
          </div>
          <span className="font-condensed font-bold text-red-500 text-sm uppercase tracking-wider block mb-3">This Is What Existential Looks Like</span>
          <h1 className="mb-4">
            <span className="hero-white">The 5D Crisis.</span>
            <br />
            <span className="hero-green">One Spiral. One Way Out.</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[680px] mx-auto mb-6">
            Five dimensions. One system. Every piece feeding the others — each failure making the next one worse.
            That's why nothing ever gets fixed. And that's exactly what PHIERS was built to interrupt.
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
            <Button href="/simple-math" variant="secondary">→ See the Math</Button>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Anchor Line */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Jump Navigation - keep as is */}
        <div className="container py-4 my-2">
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="#war" className="px-3 py-1.5 bg-bg-card border border-red-500/30 rounded-full text-red-400 text-xs font-condensed font-bold hover:bg-red-500/20 transition-all">🔥 War</Link>
            <Link href="#healthcare" className="px-3 py-1.5 bg-bg-card border border-green/30 rounded-full text-green text-xs font-condensed font-bold hover:bg-green/10 transition-all">💊 Healthcare</Link>
            <Link href="#economy" className="px-3 py-1.5 bg-bg-card border border-gold/30 rounded-full text-gold text-xs font-condensed font-bold hover:bg-gold/10 transition-all">🔨 Economy</Link>
            <Link href="#politics" className="px-3 py-1.5 bg-bg-card border border-green/30 rounded-full text-green text-xs font-condensed font-bold hover:bg-green/10 transition-all">⚖️ Politics</Link>
            <Link href="#peace" className="px-3 py-1.5 bg-bg-card border border-green/30 rounded-full text-green text-xs font-condensed font-bold hover:bg-green/10 transition-all">✊ Peace</Link>
            <Link href="#spiral" className="px-3 py-1.5 bg-bg-card border border-red-500/30 rounded-full text-red-400 text-xs font-condensed font-bold hover:bg-red-500/20 transition-all">🌀 The Spiral</Link>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Intro */}
        <section className="container section">
          <p className="text-body text-lg max-w-[720px] mx-auto">
            We've been taught to think about these as separate problems — each with its own experts, its own advocates, its own hashtag.
            Healthcare people work on healthcare. Peace people work on peace. Labor people work on labor.
          </p>
          <p className="text-body text-lg max-w-[720px] mx-auto mt-6">
            <strong className="text-white">That's exactly why nothing gets fixed.</strong>
          </p>
          <p className="text-body text-lg max-w-[720px] mx-auto mt-4">
            These aren't separate problems. They're one system. And right now every dimension of that system
            is at or near a breaking point — simultaneously. That's not politics. That's not hyperbole.
            That's the situation. Here's how it actually works.
          </p>
        </section>

        <hr className="border-green/20" />

        {/* DIMENSION 1: WAR */}
        <section id="war" className="container section scroll-mt-24">
          <span className="font-condensed font-bold text-red-500 text-sm uppercase tracking-wider block mb-3">Dimension 1</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-2">🔥 War — <span className="text-red-500">The Front Edge</span></h2>
          <p className="font-condensed text-sm text-gray-500 mb-6">What has to stop first</p>

          <p className="text-body mb-4">Congress has not issued a clear authorization vote for the current military conflict. Not one. No formal debate. No mandate. No exit strategy. Unilateral action — funded by your money, carried out by your neighbors' kids, with consequences that reach every American whether they support it or not.</p>

          <div className="bg-red-500/10 border-l-4 border-l-red-500 rounded-r-lg p-5 my-6">
            <p className="font-condensed font-bold text-xl text-white mb-3">
              There is no part of your life that doesn't run on oil.
            </p>
            <p className="text-body">Your food is grown with petrochemical fertilizers and moved by diesel. Your medicine is synthesized from petroleum compounds, stored in plastic, kept cold by refrigeration that runs on fuel. Your hospital — every disposable glove, every IV bag, every piece of equipment — shipped on diesel, made from oil derivatives. Your house. Your clothes. Your phone. Everything you buy, eat, wear, or need to stay alive moves on oil or is made from it.</p>
          </div>

          <p className="text-body mb-4">The Strait of Hormuz carries roughly 30% of the world's seaborne oil. When military escalation threatens that corridor, inflation doesn't tick up — it spreads across every supply chain simultaneously. Healthcare costs spike on top of already broken healthcare costs. Food prices climb. The economy contracts. The people least able to absorb the shock absorb it first and hardest.</p>

          <p className="text-body mb-4"><strong className="text-white">This is not a foreign policy story. It's a kitchen table story. A medicine cabinet story. A "how do I pay this month's bills" story.</strong></p>

          <h3 className="font-condensed font-bold text-gold text-xl mt-6 mb-3">Two Sets of Laws Say No.</h3>
          <p className="text-body mb-3">The Constitution is clear: Congress declares war. Article I, Section 8. The President commands the military — Congress authorizes its use. That separation exists because the people who send others to war should be the people most directly accountable to those doing the dying.</p>
          <p className="text-body mb-3">What fewer people know is there's a second wall. The United Nations Charter — the framework America championed after World War II — also says no. Article 2(4) prohibits the threat or use of force against another nation's territorial integrity. Article 25 obligates member states to act in accordance with Security Council decisions.</p>
          <p className="text-body mb-4">Military action without UN authorization doesn't just raise constitutional questions. It breaks the rules America wrote, signed, and spent decades demanding other nations follow. This matters across every political line — left, right, and anyone who was promised an end to foreign entanglements.</p>

          <div className="bg-gold/10 border-l-4 border-l-gold rounded-r-lg p-4 my-6">
            <p className="font-condensed font-bold text-gold mb-2">The downstream risk is real.</p>
            <p className="text-body">When wars escalate without congressional authorization, without exit strategies, without public mandates — pressure to expand the fighting force builds. History is consistent on this. The people who bear that cost are the ones who had no vote in creating it. The only way to stop it is organized people — before it happens, not after.</p>
          </div>

          <div className="text-right">
            <Link href="/no-war" className="font-condensed font-bold text-red-500 text-sm hover:text-red-400 transition-colors">→ Full breakdown: No War / No Draft page</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* DIMENSION 2: HEALTHCARE */}
        <section id="healthcare" className="container section scroll-mt-24">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Dimension 2</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">💊 Healthcare — <span className="text-red-500">The Largest Structural Inefficiency in the American Economy</span></h2>

          <p className="text-body mb-4">CMS — the federal agency that administers Medicare and Medicaid — pays roughly $8,000 per person per year under traditional insurance models. Research consistently shows that approximately 80% of everyday healthcare needs can be met through telehealth and preventative care at roughly $600 per person per year.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
              <div className="font-display text-3xl text-green">$8,000</div>
              <p className="text-xs text-gray-500">What CMS pays per person under traditional insurance — every year</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
              <div className="font-display text-3xl text-green">$600</div>
              <p className="text-xs text-gray-500">What 80% of people actually need — telehealth, prevention, affordable care</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
              <div className="font-display text-3xl text-green">$7,400</div>
              <p className="text-xs text-gray-500">Freed per person, per year — redirected from overhead to people</p>
            </div>
          </div>

          <p className="text-body mb-4">That gap — $7,400 per person, per year — multiplied across the American population represents <strong className="text-green font-bold">$2.73 trillion annually</strong>. Not profit from providing care. Overhead, administrative cost, and margin extracted by a system designed around payment processing rather than health outcomes.</p>
          <p className="text-body mb-4">The $600 telehealth model covers approximately 80% of healthcare needs — not 100%. Emergencies, complex procedures, and acute care still require the full system. But 80% of what people actually need, they need regularly, predictably, and affordably. That's the part that's broken. That's the part PHIERS fixes first. And that's the part that funds everything inside this ring.</p>
          <p className="text-body mb-4">When military escalation threatens oil supply chains, pharmaceutical costs rise. Medical equipment costs rise. Every input to the healthcare system gets more expensive simultaneously. <strong className="text-white">The healthcare crisis and the escalation risk aren't parallel emergencies. They're the same emergency feeding each other.</strong></p>

          <div className="text-right">
            <Link href="/simple-math" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">→ See the Simple Math</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* SPIRAL VIEWER (toggle between text and diagram) */}
          <div className="container py-6">
            <SpiralViewer />
          </div>

        <hr className="border-green/20" />

        {/* DIMENSION 3: ECONOMY */}
        <section id="economy" className="container section scroll-mt-24">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Dimension 3</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">🔨 Economy &amp; Jobs — <span className="text-red-500">The Floor Is Gone</span></h2>

          <p className="text-body mb-4">Real wages in America have been effectively flat for decades — not because workers became less productive, but because the gains from their productivity went somewhere else. That's documented in federal wage and productivity data going back to the 1970s.</p>
          <p className="text-body mb-4">The standard response is to treat this as a tax policy problem or a minimum wage problem. It's neither. It's a power problem. Workers don't have enough of it. The healthcare conversion changes that directly — not through legislation, but through the reallocation of existing resources.</p>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-5 my-6">
            <p className="font-condensed font-bold text-green text-lg mb-3">12 million jobs. Built from savings, not promises.</p>
            <p className="text-body">Every $7,400 freed per person per year is capital that stays in the community instead of flowing to shareholders. Every telehealth navigator is a living-wage job. Every cooperative hub is a local employer. Every community health worker is a union-eligible role in a district that needs it. Funded directly from the savings. In the communities where the savings happen. The moment the conversion begins.</p>
          </div>

          <p className="text-body mb-4">PHIERWorks is the employment engine inside the healthcare engine. One powers the other. Both are powered by the organized constituent leverage in Ring 1.</p>

          <div className="text-right">
            <Link href="/solutions" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">→ See 5D Solutions</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* DIMENSION 4: POLITICS */}
        <section id="politics" className="container section scroll-mt-24">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Dimension 4</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">⚖️ Politics — <span className="text-red-500">They Ignore You Because They Can</span></h2>

          <div className="grid grid-cols-3 gap-3 max-w-[400px] mx-auto my-6">
            <div className="bg-bg-card border border-green/20 rounded-xl p-3 text-center">
              <div className="font-display text-2xl text-green">12%</div>
              <p className="text-xs text-gray-500">Congressional approval rating</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-3 text-center">
              <div className="font-display text-2xl text-green">92%</div>
              <p className="text-xs text-gray-500">Congressional reelection rate</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-3 text-center">
              <div className="font-display text-2xl text-green">3.5%</div>
              <p className="text-xs text-gray-500">Participation threshold that forces change — every time</p>
            </div>
          </div>

          <p className="text-body mb-4">That 12% vs 92% gap isn't dysfunction. It's a system working exactly as designed — for the people inside it, not the people it's supposed to represent.</p>
          <p className="text-body mb-4">Protests don't change it. Hashtags don't change it. Petitions without electoral consequences don't change it. The only thing that reliably changes a politician's behavior is organized people in their specific district — names on the record, verified by zip code, with documented intent to vote accordingly.</p>
          <p className="text-body mb-4">Harvard researcher Erica Chenoweth's analysis of 323 civic campaigns across a century of political history found that movements achieving and sustaining 3.5% participation succeeded in creating significant political change — every time. That's 12 million Americans organized by district, names on the record, with teeth.</p>
          <p className="text-body mb-4"><strong className="text-white">The same lever that forces action on healthcare forces action on war powers. You don't build separate movements. You build one movement with enough organized mass to move everything.</strong></p>

          <div className="text-right">
            <Link href="/leverage" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">→ See the Leverage</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* DIMENSION 5: PEACE */}
        <section id="peace" className="container section scroll-mt-24">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Dimension 5</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">✊ Peace — <span className="text-green">Not a Position. A Prerequisite.</span></h2>

          <p className="text-body mb-4">Peace isn't naive. Peace isn't a bumper sticker. Peace is the precondition for everything else on this list.</p>
          <p className="text-body mb-4">You cannot redirect $2.73 trillion from insurance overhead to people if the economy is in freefall because military escalation just spread across every supply chain. You cannot build 12 million living-wage jobs if the workforce is being drawn into military service. You cannot restore political accountability if the precedent has been set that the most consequential decisions a government makes don't require the branch accountable to voters.</p>
          <p className="text-body mb-4">Every dollar spent on an unauthorized military engagement is a dollar not spent on healthcare, wages, infrastructure, or the future. Every family disrupted by deployment is a family not building something. Every nation destabilized is a trading partner lost, a supply chain broken, a crisis funded by people who had no vote in creating it.</p>

          <div className="bg-green-glow border border-green/20 rounded-xl p-6 my-6 text-center">
            <p className="font-condensed font-bold text-xl text-white">
              Peace isn't the last ring.<br />Peace is what makes every other ring functional.
            </p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* THE SPIRAL - Visual */}
        <section id="spiral" className="container section text-center scroll-mt-24">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Pattern</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">The Spiral — <span className="text-red-500">How They Feed Each Other Right Now</span></h2>

          <div className="max-w-[640px] mx-auto text-left space-y-0">
            <div className="bg-red-500/15 border-l-4 border-l-red-500 p-3 rounded-r mb-0.5 font-condensed font-bold text-white">Military escalation → oil price shock</div>
            <div className="bg-red-500/10 border-l-4 border-l-red-500/60 p-3 rounded-r mb-0.5 font-condensed font-bold text-white">→ Every supply chain tightens</div>
            <div className="bg-red-500/8 border-l-4 border-l-red-500/40 p-3 rounded-r mb-0.5 font-condensed font-bold text-white">→ Healthcare more expensive</div>
            <div className="bg-gold/10 border-l-4 border-l-gold/40 p-3 rounded-r mb-0.5 font-condensed font-bold text-white">→ Workers sicker, under more financial pressure</div>
            <div className="bg-gold/8 border-l-4 border-l-gold/30 p-3 rounded-r mb-0.5 font-condensed font-bold text-white">→ Economy contracts, wages fall</div>
            <div className="bg-green/8 border-l-4 border-l-green/30 p-3 rounded-r mb-0.5 font-condensed font-bold text-white">→ Desperation rises, political extremism grows</div>
            <div className="bg-red-500/15 border-l-4 border-l-red-500 p-3 rounded-r font-condensed font-bold text-red-500">→ More escalation risk. Loop repeats.</div>
          </div>

          <div className="bg-green-glow border-2 border-green/25 rounded-xl p-6 my-8 max-w-[620px] mx-auto">
            <p className="font-condensed font-bold text-2xl text-green mb-3">PHIERStorm is the pattern interrupt.</p>
            <p className="text-body">The same organized constituent leverage that forces Congress to act on healthcare forces them to act on war powers. The same $2.73 trillion in recovered efficiency funds the jobs that stabilize the economy that de-escalates the politics that reduces the conditions for the next conflict. <strong className="text-white">One lever. Every dimension turns.</strong></p>
          </div>

          <div className="flex flex-col md:flex-row gap-3 justify-center mt-6">
            <Button href="/petition" variant="primary">✍ Add Your Name</Button>
            <Button href="/simple-math" variant="secondary">→ See the Math</Button>
          </div>
          <p className="font-condensed text-sm text-gray-500 mt-4">The only thing missing is you.</p>
        </section>

        {/* Page Navigation */}
        <div className="container flex justify-between items-center py-6 border-t border-green/20 mt-8">
          <Link href="/homepage-teeth" className="font-condensed font-bold text-gray-500 text-sm hover:text-white transition-colors">
            ← How It Works
          </Link>
          <Link href="/simple-math" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            Simple Math →
          </Link>
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
                aria-label="Close"
              >
                ✕
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={modalImage}
                  alt="Enlarged view"
                  fill
                  className="object-contain rounded-xl"
                  sizes="90vw"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back-to-top button */}
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
      `}</style>
    </>
  )
}

// END FILE: app/crisis/page.tsx