// FILE: app/solutions/page.tsx
// SOLUTIONS / 5D PAGE - Complete with design system

'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import StatBlock from '@/components/StatBlock'

export default function SolutionsPage() {
  const playVideo = (videoId: string, src: string) => {
    const wrap = document.getElementById('wrap-' + videoId)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Image */}
        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src="/images/5D_Solutions_Rubiks_Cube.png"
            alt="5D Solutions — Rubik's Cube visual"
            fill
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Five systems.<br /><span className="text-green">One mechanism.</span><br />A country that works.</h1>
          <p className="text-gray-400 max-w-[700px] mx-auto">Congress keeps patching symptoms. PHIERS fixes the system that creates them.</p>
        </section>

        {/* Blueprint Video */}
        <section className="container section text-center">
          <div className="video-container mx-auto">
            <div id="wrap-blueprint" className="video-wrapper cursor-pointer group" onClick={() => playVideo('blueprint', 'https://www.youtube.com/embed/xEA5zVium58?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/xEA5zVium58/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
            <p className="font-condensed text-green text-sm text-center mt-2">Prelude to COMPLETE Gubment Solution – RAW/Unedited</p>
            <p className="text-gray-500 text-xs text-center">A deep-dive into leverage, war powers, healthcare savings, and long-term structural fixes</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Philosophy */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Philosophy</span>
          <p className="text-body mb-4">Five crises. One interconnected solution. Each dimension unlocking the next. This isn't a policy list. It's survival architecture.</p>
          <p className="text-body mb-4">America's problems are not separate. They are stacked. PHIERS solves them the same way: stacked, coordinated, accelerating.</p>
          <p className="font-condensed text-lg text-green font-bold mb-2">Healthcare crisis → unlocks jobs → unlocks safety net → unlocks opportunity → unlocks guardrails</p>
          <p className="font-condensed text-lg text-green font-bold">Each dimension reinforces the others.</p>
        </section>

        <hr className="border-green/20" />

        {/* First Domino */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The First Domino</span>
          <p className="text-body">Telehealth is the first domino — the one Congress refuses to touch. Because once telehealth falls, everything else becomes possible. That's what they know. That's why they've ignored it. Until now.</p>
        </section>

        <hr className="border-green/20" />

        {/* Dimension 1 */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">DIMENSION 1</span>
          <h2 className="font-display text-3xl text-white mb-3">TELECARE FOR EVERYONE</h2>
          <p className="text-body mb-4">Congress must authorize $600 of telehealth coverage for every American, immediately. Cheaper. Faster. More accessible. Already working. No new legislation required.</p>
          <p className="text-body">This is the entry point to universal care — not in theory, but in practice. Once telehealth is authorized, the entire 5D cascade becomes possible. This is the lever.</p>
          
          <div className="max-w-[500px] mx-auto my-6">
            <Image
              src="/images/PHIERS_Tablet__Firewall.png"
              alt="PHIERS Tablet — Firewall to Dysfunction"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Dimension 2 */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">DIMENSION 2</span>
          <h2 className="font-display text-3xl text-white mb-3">FULL COVERAGE IN UNDER A YEAR</h2>
          <p className="text-body">Telehealth is the on-ramp. Universal care is the destination. Once everyone has access to basic care, the cost of full coverage drops dramatically. Universal healthcare is no longer a 10-year dream. It becomes an 8–13 month inevitability. This isn't ideology. It's math.</p>
        </section>

        <hr className="border-green/20" />

        {/* Dimension 3 */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">DIMENSION 3</span>
          <h2 className="font-display text-3xl text-white mb-3">A MONTHLY CHECK</h2>
          <p className="text-body">Not from new taxes. From the $2.73 trillion we're already wasting. This isn't spending. It's redirecting waste into stability. The money exists. We're just using it wrong.</p>
          
          <div className="max-w-[500px] mx-auto my-6">
            <Image
              src="/images/Cascade_Math.jpg"
              alt="Cascade Math — 1 → 12 → 148 → 1,825 → ..."
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Dimension 4 */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">DIMENSION 4</span>
          <h2 className="font-display text-3xl text-white mb-3">MILLIONS OF AI-RESISTANT JOBS</h2>
          <p className="text-body">Stability creates capacity. Capacity creates opportunity. When people have healthcare, income stability, and breathing room, they retrain, relocate, start businesses, fill essential roles, build new industries. This is how we rebuild the middle class.</p>
        </section>

        <hr className="border-green/20" />

        {/* Dimension 5 */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">DIMENSION 5</span>
          <h2 className="font-display text-3xl text-white mb-3">DEMOCRACY WITH TEETH</h2>
          <p className="text-body">Economic stability is political stability. When people are secure, they're harder to manipulate, harder to divide, harder to radicalize. This is how we defend democracy — with material stability, not speeches.</p>
        </section>

        <hr className="border-green/20" />

        {/* Self-Reinforcing Loop */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Loop — Self-Reinforcing</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[600px] mx-auto mb-6">
              <StatBlock number="✓" label="Healthcare savings fund stability" />
              <StatBlock number="✓" label="Stability fuels job creation" />
              <StatBlock number="✓" label="Job creation stabilizes democracy" />
              <StatBlock number="✓" label="Democracy strengthens accountability" />
              <StatBlock number="✓" label="Accountability reduces costs further" className="md:col-span-2" />
            </div>
            <p className="font-condensed text-lg text-green font-bold">Self-reinforcing progress — the opposite of the downward spiral we're in now.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Timeline */}
        <section className="container section text-center">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Timeline</span>
          <div className="max-w-[500px] mx-auto">
            <Image
              src="/images/100M_by_July_4.png"
              alt="100M by July 4 — Timeline to Victory"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Cascade */}
        <section className="container section text-center">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Cascade</span>
          <p className="font-display text-2xl text-gold mb-4">1 → 12 → 148 → 1,825 → 21,312 → 255,744 → 3,068,928 → 36,827,136 → 442,000,000+</p>
          <p className="font-condensed text-lg text-white font-bold">This is how systems scale. This is why Congress is terrified.</p>
          
          <div className="flex flex-col gap-3 max-w-md mx-auto mt-8">
            <Button href="/petition" variant="primary" fullWidth>✍ ADD MY NAME</Button>
            <Button href="/simple-math" variant="secondary" fullWidth>→ See the Simple Math</Button>
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
