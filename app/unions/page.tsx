// FILE: app/unions/page.tsx
// UNIONS PAGE - Complete with design system

'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import StatBlock from '@/components/StatBlock'

export default function UnionsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Image */}
        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src="/images/0123_Strong_Union_Nurses_Veterans_hero.jpg"
            alt="Strong Union — Nurses and Veterans"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Unions built the middle class.<br /><span className="text-green">PHIERS gives unions the leverage to rebuild it.</span></h1>
          <p className="text-gray-400 max-w-[700px] mx-auto">Unions know how to organize. PHIERS gives that organizing district-level political power Congress cannot ignore. This is not a petition. This is a pressure system.</p>
        </section>

        <hr className="border-green/20" />

        {/* The Moment */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Moment</span>
            <p className="text-body mb-3">Workers are striking for the same reason across every industry:</p>
            <div className="grid grid-cols-2 gap-2 max-w-[400px] mx-auto mb-4">
              <p className="text-body text-sm">→ Healthcare costs are crushing families</p>
              <p className="text-body text-sm">→ Staffing shortages are burning out professions</p>
              <p className="text-body text-sm">→ Wages can't keep up with cost of living</p>
              <p className="text-body text-sm">→ Employers claim "we can't afford it" while profits rise</p>
            </div>
            <p className="text-body mb-3">Unions are fighting these battles one contract at a time.</p>
            <p className="text-body mb-3">The crisis is national, structural, and political.</p>
            <p className="font-condensed text-xl text-green font-bold">PHIERS is the mechanism that makes it national.</p>
            
            <div className="max-w-[500px] mx-auto my-4">
              <Image
                src="/images/When Unions are Strong, America is Strong.jpg"
                alt="When Unions are Strong, America is Strong"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20"
              />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Math That Ends the Argument */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Math That Ends the Argument</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[600px] mx-auto mb-4">
            <StatBlock number="$24,000+" label="Family insurance premium" />
            <StatBlock number="$12,000+" label="Per-worker burden" />
            <StatBlock number="$600" label="PHIERS telehealth cost" />
            <StatBlock number="$11,400+" label="Freed per worker" />
          </div>
          <p className="font-display text-2xl text-gold font-bold my-3">$45,600+</p>
          <p className="text-body mb-4">per family of four</p>
          
          <div className="max-w-[500px] mx-auto my-4">
            <Image
              src="/images/99_to_1_-_Great_Odds.jpg"
              alt="Union savings — 99 to 1 odds"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
          
          <p className="font-condensed text-lg text-white font-bold mb-3">What $11,400 per worker buys for a 10,000-person hospital system:</p>
          <div className="grid grid-cols-2 gap-2 max-w-[400px] mx-auto mb-4 text-left">
            <p className="text-body text-sm">✓ $35,000+ raise for every nurse</p>
            <p className="text-body text-sm">✓ 800 additional nurses hired</p>
            <p className="text-body text-sm">✓ Safe staffing restored</p>
            <p className="text-body text-sm">✓ Guaranteed portable benefits</p>
            <p className="text-body text-sm">✓ A fully funded pension</p>
          </div>
          <p className="font-condensed text-xl text-green font-bold">This isn't theory. It's arithmetic.</p>
        </section>

        <hr className="border-green/20" />

        {/* What PHIERS Gives Unions */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What PHIERS Gives Unions That No Contract Can</span>
            <div className="space-y-4">
              <div>
                <p className="font-condensed text-lg text-white font-bold">Healthcare off the table — permanently</p>
                <p className="text-body">When healthcare becomes a national guarantee, unions redirect all bargaining power to wages, staffing, job security, and pensions. This is the largest expansion of union leverage in 50 years.</p>
              </div>
              <div>
                <p className="font-condensed text-lg text-white font-bold">A national leverage mechanism</p>
                <p className="text-body">Unions already know how to organize. PHIERS gives them a constitutional, peaceful tool that forces Congress to act. No shutdowns. No disruption. Just organized people applying pressure where it matters most.</p>
              </div>
              <div>
                <p className="font-condensed text-lg text-white font-bold">8–14 million AI-resistant jobs</p>
                <p className="text-body">PHIERS cascade savings create millions of new, stable, human-centered jobs — exactly the kind unions are built to organize.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The 3.5% Is Already Met */}
        <section className="container section text-center">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The 3.5% Is Already Met</span>
          <p className="text-body mb-3">Harvard's Chenoweth: no nonviolent movement that reached 3.5% sustained participation has ever failed.</p>
          <div className="grid grid-cols-2 gap-3 max-w-[400px] mx-auto mb-4">
            <StatBlock number="12M" label="3.5% of America" />
            <StatBlock number="16M" label="Union members alone" />
            <StatBlock number="50M+" label="Union families and networks" />
            <StatBlock number="100M+" label="Affected by healthcare crisis" />
          </div>
          <p className="font-condensed text-2xl text-green font-bold">Unions already exceed the threshold. PHIERS gives them the mechanism to use it.</p>
          
          <div className="max-w-[500px] mx-auto my-4">
            <Image
              src="/images/3.5pct_Means_Change.jpg"
              alt="3.5% Means Change — Three phases to victory"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Three Phases to Victory */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Three Phases to Victory</span>
            <div className="space-y-4">
              <div><p className="font-condensed font-bold text-white">Phase 1 — Mobilize</p><p className="text-body text-sm">Send every member the petition link. Issue the primary threat publicly: any representative who refuses faces a union-backed challenger.</p></div>
              <div><p className="font-condensed font-bold text-white">Phase 2 — Nationalize</p><p className="text-body text-sm">50%+ of membership signs. Healthcare stories become evidence delivered to every member of Congress. One national message: Workers are united. Act now.</p></div>
              <div><p className="font-condensed font-bold text-white">Phase 3 — Enforce</p><p className="text-body text-sm">If Congress passes PHIERS: shift to organizing the new economy. If Congress refuses: activate the full electoral apparatus. Primary the refusers. Show that ignoring organized labor means losing your job.</p></div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Closing Statement */}
        <section className="container section">
          <div className="bg-bg-card border-l-4 border-gold p-5 max-w-[600px] mx-auto">
            <p className="text-body mb-3">Every major labor victory happened when workers stopped asking and started forcing.</p>
            <p className="text-body mb-2">The 40-hour week. The weekend. Child labor laws. Social Security. Medicare.</p>
            <p className="text-body mb-4">None came from generosity. All came from leverage.</p>
            <p className="font-condensed text-xl text-green font-bold">Unions don't need permission. They already have the power. PHIERS gives them the switch.</p>
          </div>
          
          <div className="flex flex-col gap-3 max-w-md mx-auto mt-6">
            <Button href="/petition" variant="primary" fullWidth>✍ ADD MY NAME</Button>
            <Button href="/leverage" variant="secondary" fullWidth>→ See How Leverage Works</Button>
            <Button href="/organizers" variant="secondary" fullWidth>→ For Organizers</Button>
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
