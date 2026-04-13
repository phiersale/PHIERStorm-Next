// FILE: app/full-story/page.tsx
// FULL STORY PAGE - Complete with design system

'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function FullStoryPage() {
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
        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">For anyone who needs to see<br /><span className="text-green">the receipts before they move.</span></h1>
          <p className="text-gray-400 max-w-[700px] mx-auto">If you're the kind of person who needs the full case before you act — this is where it lives. The math. The law. The proof. The letters. The videos. The 16-year arc. Start anywhere. It all connects.</p>
        </section>

        <hr className="border-green/20" />

        {/* The Problem */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Problem</span>
          <p className="text-body">CMS — the federal agency that administers Medicare and Medicaid — pays roughly $8,000 per person per year under traditional insurance. 80% of everyday healthcare needs can be met through telehealth at $600 per person per year. That gap — $7,400 per person, per year — multiplied across the American population represents $2.73 trillion annually. Not profit from care. Overhead, admin cost, and margin extracted by a system designed around payment processing, not health outcomes.</p>
          
          <div className="max-w-[500px] mx-auto my-4">
            <Image
              src="/images/80-20_Truth_About_Healthcare.jpg"
              alt="80/20 Truth About Healthcare"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Legal Authority */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Legal Authority</span>
            <p className="text-body">Congress doesn't need new legislation to expand telehealth through the ACA Exchange. The authority already exists. The demand is already legal. The only missing ingredient is organized people forcing them to use it.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Cascade Math */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Cascade Math</span>
          <p className="text-body mb-2">One conversion funds twelve more.</p>
          <p className="text-body mb-2">Twelve fund 148.</p>
          <p className="text-body mb-3">148 fund 1,825.</p>
          <p className="text-body mb-3">In nine iterations: 234 million Americans covered. In 8–13 months.</p>
          <p className="font-condensed text-xl text-gold font-bold mb-4">That's not a campaign promise. That's arithmetic.</p>
          
          <div className="max-w-[500px] mx-auto my-4">
            <Image
              src="/images/Cascade_Math.jpg"
              alt="Cascade Math — One becomes twelve"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Proof Points */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Proof Points</span>
            <div className="space-y-3">
              <div><p className="font-condensed font-bold text-white">Mark Cuban's Cost Plus Drugs</p><p className="text-body text-sm">The PHIERSale model — running at scale. 7 million customers. 80–90% savings.</p></div>
              <div><p className="font-condensed font-bold text-white">ZORTT Elite Medical</p><p className="text-body text-sm">Cooperative healthcare delivery. Operational. Proven.</p></div>
              <div><p className="font-condensed font-bold text-white">Erica Chenoweth / Harvard Kennedy School</p><p className="text-body text-sm">323 campaigns. Zero failures at 3.5%.</p></div>
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
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Letters */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Letters</span>
          <div className="space-y-4">
            <div className="bg-bg-card border border-green/20 rounded-xl p-4">
              <Image src="/images/VanHollen_Letter_of_Support.png" alt="Congressman Chris Van Hollen letter" width={500} height={400} className="w-full h-auto rounded-lg mb-2" />
              <p className="text-white italic text-sm">"PHIERS.org has the potential to become a vital part of the health care system."</p>
              <p className="text-green text-xs mt-1">— Congressman Chris Van Hollen</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4">
              <Image src="/images/KJ_Sacramento_Support_Letter.png" alt="Mayor Kevin Johnson letter" width={500} height={400} className="w-full h-auto rounded-lg mb-2" />
              <p className="text-white italic text-sm">"I strongly support the PHIERS approach... PHIERS could be readily adapted throughout California as a flagship community health care approach."</p>
              <p className="text-green text-xs mt-1">— Mayor Kevin Johnson, Sacramento</p>
            </div>
            <p className="text-body text-sm">This support goes back to 2009. Before any of the proof points arrived. The idea was right then. The moment is now.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Validation Videos */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Validation Videos</span>
            
            {/* Pathos */}
            <div className="bg-bg-card border border-green/20 rounded-xl p-4 mb-4">
              <p className="font-condensed font-bold text-white mb-2">Pathos Communications</p>
              <p className="text-body text-sm mb-3">Kevin Harrington — original Shark Tank investor. Fortune 500 PR firm.</p>
              <div className="video-container mx-auto">
                <div className="video-wrapper">
                  <div className="video-wrap" id="wrap-pathos" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <div className="absolute inset-0 bg-cover bg-center cursor-pointer flex items-center justify-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/KLu7USN_dao/hqdefault.jpg')" }} onClick={() => playVideo('pathos', 'https://www.youtube.com/embed/KLu7USN_dao?autoplay=1&rel=0')}>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-5xl text-white/90 cursor-pointer">▶</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-green text-sm font-condensed mt-2">▶ Why Pathos Chose PHIERS — 7:11</p>
            </div>

            {/* DotCom */}
            <div className="bg-bg-card border border-green/20 rounded-xl p-4">
              <p className="font-condensed font-bold text-white mb-2">DotCom Magazine</p>
              <p className="text-body text-sm mb-3">Kevin O'Leary's platform. Interviewed Will Price in 2022.</p>
              <div className="video-container mx-auto">
                <div className="video-wrapper">
                  <div className="video-wrap" id="wrap-dotcom" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <div className="absolute inset-0 bg-cover bg-center cursor-pointer flex items-center justify-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/pUdlWukaLLY/hqdefault.jpg')" }} onClick={() => playVideo('dotcom', 'https://www.youtube.com/embed/pUdlWukaLLY?autoplay=1&rel=0')}>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-5xl text-white/90 cursor-pointer">▶</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-green text-sm font-condensed">▶ DotCom Magazine Teaser</p>
              <Link href="https://youtu.be/FwFq87VqZys" target="_blank" className="text-green text-sm font-condensed hover:underline block mt-1">▶ Watch: Full Interview (27 mins)</Link>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The 16-Year Arc */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The 16-Year Arc</span>
          <div className="space-y-1 text-body text-sm">
            <p>2009 — SureSafe Pharma proves the model.</p>
            <p>2014 — Prior art documented.</p>
            <p>2022 — DotCom Magazine validation.</p>
            <p>2022 — Cost Plus Drugs proves the market.</p>
            <p>2024 — Pathos Communications validation.</p>
            <p>2025 — Telehealth mainstream. Model confirmed.</p>
            <p>2026 — The moment the system was built for.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="bg-bg-dark border-2 border-green rounded-xl p-6 max-w-[500px] mx-auto">
            <p className="font-condensed text-xl text-gold font-bold mb-4">You've seen the receipts. Now be counted.</p>
            <Button href="/petition" variant="primary" fullWidth>✍ ADD MY NAME</Button>
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
