// FILE: app/simple-math/page.tsx - UPDATED (Tiers 1-7)

'use client'

import { useState, useCallback } from 'react'  // ✓ Added useCallback
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function SimpleMathPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  // ✓ Added scrollToTop function
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  // ✓ Wrapped playVideo in useCallback
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
          <div className="relative h-[80px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={80}
              height={80}
              className="opacity-90"
            />
          </div>
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Simple Math</span>
          {/* ✓ Fixed two-tone H1 */}
          <h1 className="mb-4">
            <span className="hero-white">The Math Congress</span>
            <br />
            <span className="hero-green">Doesn't Want You to Know.</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[620px] mx-auto mb-6">
            $10,000 per person. $600 per person. The same care. Congress has the authority to authorize the difference tomorrow. They haven't had to — until now.
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
            <Button href="/solutions" variant="secondary">→ See the 5D Solutions</Button>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Core Comparison */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Core Comparison</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">$10,000 vs <span className="text-green">$600.</span></h2>
          <p className="text-body mb-4">Replace a <strong className="text-white">$10,000/year insurance product</strong> with a <strong className="text-white">$600/year telehealth-first plan</strong>, and the savings fund:</p>
          <ul className="list-disc list-inside text-body mb-4 space-y-1">
            <li>Universal access</li>
            <li>Millions of healthcare jobs</li>
            <li>Massive system-wide savings</li>
          </ul>
          <p className="text-body"><strong className="text-white">All using existing law. No new taxes. No new bureaucracy. Just math.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* The Cascade */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Cascade</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">One Conversion Funds <span className="text-green">12 More.</span></h2>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/SIMPLE_MATH.png')} className="cursor-pointer">
              <Image
                src="/images/SIMPLE_MATH.png"
                alt="The Math: One conversion funds exponential coverage"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">The Exponential Foundation</p>
          </div>

          <p className="text-body mb-4"><strong className="text-white">Here's the part Congress doesn't want you to understand:</strong></p>

          <div className="bg-bg-card border border-green/20 rounded-xl p-5 space-y-2 text-body mb-6">
            <p>• One person switches from <strong className="text-white">$10,000 insurance</strong> to <strong className="text-white">$600 telehealth</strong></p>
            <p>• That saves <strong className="text-white">$9,400</strong></p>
            <p>• That $9,400 funds <strong className="text-white">15 more people</strong> at $600 each</p>
            <p>• Those 15 save <strong className="text-white">$141,000</strong> combined</p>
            <p>• That funds <strong className="text-white">235 more</strong></p>
          </div>

          <p className="font-condensed text-lg text-green font-bold text-center">It snowballs. Fast. And they know it.</p>
          <p className="text-body text-center mt-4">And as premiums rise higher — $12,000, $15,000, $18,000 — <strong className="text-white">the cascade accelerates</strong>.</p>
        </section>

        <hr className="border-green/20" />

        {/* ✓ Anchor line added */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Mathematical Cascade */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Mathematical Cascade</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">234 Million Covered.<br /><span className="text-gold">9 Iterations.</span></h2>

          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/CORE_MATH_for_234M.png')} className="cursor-pointer">
              <Image
                src="/images/CORE_MATH_for_234M.png"
                alt="Core Math: How $600 telehealth unlocks 234 million covered"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">The Endpoint: Universal Coverage for 234M Americans</p>
          </div>

          <p className="text-body mb-4">Iteration by iteration, the savings multiply:</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[600px] mx-auto mb-6">
            <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
              <div className="font-display text-3xl text-green">9</div>
              <div className="text-xs text-gray-500">Iterations</div>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
              <div className="font-display text-3xl text-green">234M</div>
              <div className="text-xs text-gray-500">Americans Covered</div>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
              <div className="font-display text-3xl text-gold">$2.73T</div>
              <div className="text-xs text-gray-500">Annual Savings</div>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
              <div className="font-display text-3xl text-green">12×</div>
              <div className="text-xs text-gray-500">Growth Rate</div>
            </div>
          </div>

          <p className="text-center text-body"><strong className="text-white">This isn't theory. It's arithmetic.</strong></p>
          <p className="text-center text-body mt-4 text-green">The math doesn't stall. It doesn't negotiate. It doesn't care about lobbyists.<br /><strong className="text-white">It just keeps going — until everyone is covered.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* Medicaid Leverage - UPDATED */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Maximum Leverage</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why We Start With <span className="text-green">Medicaid.</span></h2>

          <p className="text-body mb-4">Most reforms fail because they try to fix everything at once. PHIERS starts where:</p>
          <ul className="list-disc list-inside text-body mb-4 space-y-1">
            <li><strong className="text-white">The savings are largest</strong></li>
            <li><strong className="text-white">The vulnerability is highest</strong></li>
            <li><strong className="text-white">The proof is undeniable</strong></li>
          </ul>

          <p className="text-body mb-4">Medicaid costs $8,000 per person. Telehealth costs $600. That's <strong className="text-white">$7,400 in savings</strong> per conversion — enough to fund 12 more.</p>
          <p className="text-body mb-4"><strong className="text-white">Medicaid is the pressure point.</strong> Once it converts, the rest of the system follows — ACA, private insurance, and the uninsured.</p>
          <p className="text-body text-green"><strong>Not because Congress wants it. Because the math forces it.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* 3.5% Rule */}
        <section className="container section text-center">
          <div className="max-w-[400px] mx-auto my-6">
            <button onClick={() => openModal('/images/3.5pct_Means_Change.png')} className="cursor-pointer">
              <Image
                src="/images/3.5pct_Means_Change.png"
                alt="3.5% Means Guaranteed Change"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">Click to enlarge</p>
          </div>

          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The 3.5% Rule</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why Congress <span className="text-red-500">Is Scared.</span></h2>

          <div className="bg-green-glow border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <p className="text-body mb-3"><strong className="text-white">Harvard research shows that no movement with sustained participation above 3.5% has ever failed.</strong></p>
            <p className="text-body mb-3">When 3.5% of Americans take coordinated action, governments either comply or collapse. Over <strong className="text-white">100 million</strong> are already affected by this crisis.</p>
            <p className="text-body text-green font-bold">Congress knows the math. Now you do too.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">They Fear the Math.<br /><span className="text-green">Be Part of It.</span></h2>
          <p className="text-body mb-6">Sign the petition. Do the math. Force Congress to answer.</p>
          <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
        </section>

        {/* Page Navigation */}
        <div className="container flex justify-between items-center py-6 border-t border-green/20 mt-8">
          <Link href="/crisis" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            ← Back to The Crisis
          </Link>
          <Link href="/solutions" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            Next: 5D Solutions →
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

      {/* ✓ Updated back-to-top button to use scrollToTop */}
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

// END FILE: app/simple-math/page.tsx - TIERS 1-7 COMPLETE
