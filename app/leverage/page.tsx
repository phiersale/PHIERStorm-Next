// FILE: app/leverage/page.tsx
// HOW IT WORKS / LEVERAGE PAGE - Complete with design system

'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import AnchorLine from '@/components/AnchorLine'
import StatBlock from '@/components/StatBlock'

export default function LeveragePage() {
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
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/images/Change_Anchor_Image.jpg"
            alt="Change Anchor — This is how pressure builds"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Congress doesn't respond to passion.<br /><span className="text-green">It responds to consequences.</span></h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[700px] mx-auto">PHIERS creates those consequences — district by district, right now, not after the next election.</p>
        </section>

        <hr className="border-green/20" />

        {/* The Truth */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Truth</span>
          <p className="text-body mb-4">For decades, Congress has ignored what people want — even when 80–90% of the country agrees.</p>
          <p className="text-body mb-2">Why?</p>
          <p className="text-body mb-4">Because the pressure is scattered. Uncoordinated. Easy to ignore.</p>
          <p className="font-condensed text-2xl text-white font-bold mb-3">Congress doesn't fear outrage. It fears organized constituents inside its own district.</p>
          <p className="font-condensed text-2xl text-green font-bold">That's the leverage.</p>
        </section>

        <hr className="border-green/20" />

        {/* Video */}
        <section className="container section text-center">
          <div className="video-container mx-auto">
            <div id="wrap-enough-people" className="video-wrapper cursor-pointer group" onClick={() => playVideo('enough-people', 'https://www.youtube.com/embed/C2mMIx5yoyw?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/C2mMIx5yoyw/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
            <p className="font-condensed text-green text-sm text-center mt-2">When Enough People Organize, Congress Must Respond</p>
            <p className="text-body text-xs text-center">Harvard 3.5% rule · district-by-district math · coordinated pressure</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Math of Power */}
        <section className="container section text-center">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Math of Power</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[600px] mx-auto mb-6">
            <StatBlock number="$8.5M" label="per member of Congress (lobbying)" />
            <StatBlock number="$1.95B" label="constituent spending power per district" />
          </div>
          
          <p className="font-display text-5xl text-gold font-bold my-4">230 to 1</p>
          <p className="font-condensed text-xl text-white font-bold mb-4">230:1 is not a fight. It's a mismatch.</p>
          
          <div className="max-w-[400px] mx-auto my-6">
            <Image
              src="/images/99_to_1_-_Great_Odds.jpg"
              alt="99 to 1 — Great Odds"
              width={400}
              height={240}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
          
          <AnchorLine />
        </section>

        <hr className="border-green/20" />

        {/* The Tipping Point */}
        <section className="container section text-center">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Tipping Point</span>
          <p className="text-body mb-4">You don't need millions. You don't need a national movement. You don't need to flip Congress.</p>
          <p className="font-condensed text-3xl text-green font-bold mb-4">You need 1,500 people in a single district.</p>
          
          <div className="text-left max-w-[500px] mx-auto mb-6">
            <p className="text-body mb-2">That's the threshold where:</p>
            <p className="text-body mb-1">→ media pays attention</p>
            <p className="text-body mb-1">→ staffers panic</p>
            <p className="text-body mb-1">→ donors call</p>
            <p className="text-body mb-1">→ lobbyists lose control</p>
            <p className="text-body mb-3">→ representatives respond</p>
          </div>
          <p className="font-condensed text-lg text-white font-bold">Not because they want to. Because they have to.</p>
          
          <div className="max-w-[500px] mx-auto my-6">
            <Image
              src="/images/How_It_Works.jpg"
              alt="How It Works — 4-step mechanism"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* How PHIERS Creates Leverage */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">How PHIERS Creates Leverage</span>
          
          <div className="space-y-5 max-w-[600px] mx-auto mb-6">
            <div>
              <p className="text-white text-lg font-bold">1. You add your name</p>
              <p className="text-body text-sm">A verified count tied to your representative.</p>
            </div>
            <div>
              <p className="text-white text-lg font-bold mt-3">2. We organize by district</p>
              <p className="text-body text-sm">Real people. Real numbers. No bots. No noise. Just unavoidable pressure.</p>
            </div>
            <div>
              <p className="text-white text-lg font-bold mt-3">3. The threshold is reached</p>
              <p className="text-body text-sm">1,500 constituents = mandatory public response.</p>
            </div>
            <div>
              <p className="text-white text-lg font-bold mt-3">4. Accountability becomes immediate</p>
              <p className="text-body text-sm">Town hall. On the record. No spin. No escape.</p>
            </div>
          </div>
          
          <p className="font-condensed text-xl text-green font-bold text-center mb-6">This is not symbolic. This is structural.</p>
          
          <div className="max-w-[500px] mx-auto my-6">
            <Image
              src="/images/PHIERS_Tablet__Firewall.png"
              alt="Protests vs Petitions vs PHIERS"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Why It Works Every Time */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Why It Works Every Time</span>
            <p className="text-body mb-4">Harvard's analysis of 323 campaigns across a century found:</p>
            <p className="font-condensed text-lg text-white font-bold mb-3">When even a small percentage of people act together in a coordinated, sustained way — systems respond.</p>
            
            <div className="grid grid-cols-3 gap-3 max-w-[300px] mx-auto mb-4">
              <StatBlock number="323" label="campaigns" />
              <StatBlock number="3.5%" label="participation" />
              <StatBlock number="0" label="failures" />
            </div>
            
            <div className="max-w-[300px] mx-auto my-4">
              <Image
                src="/images/3.5pct_Erica_Chenoweth.jpg"
                alt="3.5% — Chenoweth Research"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg border border-white/10"
              />
            </div>
            
            <p className="font-condensed text-2xl text-green font-bold mt-4">PHIERS is that coordination.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <p className="font-condensed text-lg text-gold font-bold mb-3">District counts begin compiling immediately.</p>
            <p className="text-body mb-3">Your name — counted in your district — is where the pressure starts.</p>
            <p className="text-body mb-4">When enough districts organize simultaneously, the pressure becomes impossible to outlast.</p>
            <p className="font-condensed text-lg text-white font-bold mb-6">Peaceful. Democratic. Immediate. We are not waiting for November.</p>
            
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>✍ ADD MY NAME — 30 SECONDS</Button>
              <Button href="/organizers" variant="secondary" fullWidth>✊ ORGANIZE YOUR DISTRICT</Button>
            </div>
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
