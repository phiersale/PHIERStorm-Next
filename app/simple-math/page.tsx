// FILE: app/simple-math/page.tsx
// SIMPLE MATH PAGE - Complete with design system

'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import StatBlock from '@/components/StatBlock'

export default function SimpleMathPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">The math Congress doesn't want you to see.</h1>
          
          <div className="max-w-[500px] mx-auto my-8">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <StatBlock number="$10,000" label="per person (current)" />
              <StatBlock number="$600" label="per person (TeleCARE)" />
            </div>
            <p className="font-condensed text-lg text-white font-bold">Same care. Congress could authorize the difference tomorrow.<br />They haven't had to — until now.</p>
          </div>
          
          <div className="border-t border-green/20 pt-6 mt-6">
            <h2 className="font-display text-3xl text-white mb-3">The Core Comparison</h2>
            <p className="text-body mb-3">Replace a $10,000 per year insurance product with a $600 per year telehealth-first plan.</p>
            <p className="text-body mb-2">The savings fund:</p>
            <p className="text-body mb-1">→ Universal access</p>
            <p className="text-body mb-1">→ Millions of healthcare jobs</p>
            <p className="text-body mb-4">→ Massive system-wide savings</p>
            <p className="font-condensed text-lg text-green font-bold">All using existing law. No new taxes. No new bureaucracy. Just math.</p>
          </div>
          
          <div className="max-w-[500px] mx-auto my-6">
            <Image
              src="/images/80-20_Healthcare_Model_-PHIERS_v_Insurance_Cost.jpg"
              alt="PHIERS vs Insurance Cost Comparison"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
          
          <div className="border-t border-green/20 pt-6 mt-6">
            <h2 className="font-display text-3xl text-white mb-3">The Cascade</h2>
            <p className="text-white text-lg mb-2">One conversion funds twelve more.</p>
            <p className="text-white text-lg mb-2">Twelve fund 148.</p>
            <p className="text-white text-lg mb-3">148 fund 1,825.</p>
            <p className="font-condensed text-lg text-white font-bold mb-3">The cascade doesn't slow — it accelerates.</p>
            <p className="text-body mb-2">In nine iterations: 234 million Americans covered.</p>
            <p className="text-body mb-4">In 8–13 months.</p>
            <p className="font-condensed text-xl text-gold font-bold mb-6">That's not a campaign promise. That's arithmetic.</p>
            
            <div className="max-w-[500px] mx-auto my-6">
              <Image
                src="/images/Cascade_Math.jpg"
                alt="Cascade Math — One becomes twelve"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20"
              />
            </div>
          </div>
          
          <div className="border-t border-green/20 pt-6 mt-6">
            <h2 className="font-display text-3xl text-white mb-3">Why We Start with Medicaid</h2>
            <p className="text-body mb-2">Medicaid is the ignition point.</p>
            <p className="text-body mb-2">It's where the savings are largest, the vulnerability is highest, and the proof is undeniable.</p>
            <p className="text-body mb-2">CMS pays $8,000+ per person per year.</p>
            <p className="text-body mb-2">80% of those people need $600 of telehealth.</p>
            <p className="text-body mb-3">$7,400 freed per person.</p>
            <p className="text-body mb-4">12 more covered per conversion. The cascade starts here.</p>
          </div>
          
          <div className="border-t border-green/20 pt-6 mt-6">
            <h2 className="font-display text-3xl text-white mb-3">The Expansion Path</h2>
            <div className="space-y-3 mb-6 text-left max-w-[500px] mx-auto">
              <div><p className="font-condensed font-bold text-white">Step 1 — Medicaid (120M people)</p><p className="text-body text-sm">Highest cost. Largest savings. Most vulnerable protected first. Result: $888 billion saved annually.</p></div>
              <div><p className="font-condensed font-bold text-white">Step 2 — ACA Marketplace (~14M people)</p><p className="text-body text-sm">Same math. Same savings. Result: $103 billion additional.</p></div>
              <div><p className="font-condensed font-bold text-white">Step 3 — Private Insurance (~150M people)</p><p className="text-body text-sm">Voluntary. Employers and workers both save. Result: $1.1 trillion+ additional.</p></div>
              <div><p className="font-condensed font-bold text-white">Step 4 — The Uninsured (~27M people)</p><p className="text-body text-sm">By this point, $600 is easily affordable. No one left behind. Result: True universal coverage.</p></div>
            </div>
          </div>
          
          <div className="border-t border-green/20 pt-6 mt-6">
            <h2 className="font-display text-3xl text-white mb-3">The 3.5% Factor</h2>
            <div className="max-w-[380px] mx-auto mb-4">
              <Image
                src="/images/3.5pct_Erica_Chenoweth.jpg"
                alt="3.5% — Chenoweth Research"
                width={380}
                height={250}
                className="rounded-lg border border-white/10 mx-auto"
              />
            </div>
            <p className="text-body text-sm mb-3">Harvard researcher Erica Chenoweth studied 323 campaigns from 1900–2006.</p>
            <p className="font-condensed text-lg text-white font-bold mb-3">Finding: NO campaign where 3.5% participated in sustained organized action ever failed.</p>
            <p className="text-body mb-2">3.5% of America = 11.6 million people.</p>
            <p className="text-body mb-4">We have 100M+ affected by this crisis. That's 9x the threshold.</p>
            <p className="font-condensed text-2xl text-green font-bold mb-6">The math is inevitable. We just need to organize.</p>
          </div>
          
          <div className="bg-bg-card border-l-4 border-gold p-5 my-6 text-left max-w-[600px] mx-auto">
            <p className="text-body text-base mb-2">Nothing changes until ignoring people costs more than responding to them.</p>
            <p className="font-condensed text-xl text-green font-bold">The math makes that cost undeniable. Congress knows it. Now you do too.</p>
          </div>
          
          <div className="flex flex-col gap-3 max-w-md mx-auto mt-6">
            <Button href="/petition" variant="primary" fullWidth>✍ ADD MY NAME</Button>
            <Button href="/solutions" variant="secondary" fullWidth>→ See 5D Solutions</Button>
          </div>
        </section>
      </main>
      <Footer />
      
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>
      
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
