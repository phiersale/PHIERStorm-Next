// FILE: app/about/page.tsx
// ABOUT PAGE - Complete with design system

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function AboutPage() {
  const [willModalOpen, setWillModalOpen] = useState(false)

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
            src="/images/PHIERStorm_the_Movement.png"
            alt="PHIERStorm — The Movement"
            fill
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">A country that works<br /><span className="text-green">because people organize.</span></h1>
          <p className="text-gray-400 max-w-[700px] mx-auto">PHIERS is a district-level pressure system built since 2009 to solve the oldest problem in American politics: Congress doesn't respond to people. It responds to pressure. PHIERS organizes that pressure exactly where Congress cannot ignore it.</p>
          <div className="bg-bg-card border-l-4 border-green p-5 my-6 max-w-[600px] mx-auto">
            <p className="text-gray-300 italic">This has been building for 16 years. This is the moment it becomes real.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Architect */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Architect</span>
          <h2 className="font-display text-3xl text-white mb-4">Who Built <span className="text-green">This</span></h2>
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-[200px] h-[250px] relative rounded-xl overflow-hidden">
              <Image
                src="/images/Will_Price.jpg"
                alt="Will Price — Founder & Chief Solutions Architect"
                fill
                className="object-cover object-[55%_top]"
              />
            </div>
            <div className="flex-1">
              <p className="font-condensed font-bold text-white text-xl">Will Price | Chief Solutions Architect</p>
              <p className="text-gray-400 text-sm mb-3">Not a politician. Not a lobbyist. A systems architect who spent 20+ years inside the VA — Senior Analyst, Electronic Health Records, Registration, Eligibility, and Enrollment. One of five civilians selected for the VA's first enterprise-wide reengineering initiative. He saw how the system worked. He saw who it left behind. He built the alternative.</p>
              <button onClick={() => setWillModalOpen(true)} className="text-green text-sm font-condensed font-bold border-b border-green/30 pb-1">👤 Meet the Architect →</button>
            </div>
          </div>

          {/* Origin Story Video */}
          <div className="video-container mx-auto my-6">
            <div className="video-wrapper">
              <div className="video-wrap" id="wrap-origin" style={{ position: 'relative', width: '100%', height: '100%' }}>
                <div className="absolute inset-0 bg-cover bg-center cursor-pointer flex items-center justify-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/bEUyDVAYwpk/hqdefault.jpg')" }} onClick={() => playVideo('origin', 'https://www.youtube.com/embed/bEUyDVAYwpk?autoplay=1&rel=0')}>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-5xl text-white/90 cursor-pointer">▶</div>
                </div>
              </div>
            </div>
            <div className="bg-bg-card p-4 border-x border-b border-green/20 rounded-b-xl text-center">
              <div className="font-display text-xl text-green mb-1">🎥 The Origin Story — Why PHIERS Exists</div>
              <div className="font-condensed text-gray-400 text-sm">Built from lived experience. Ready for this moment.</div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Origin */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Origin</span>
          <p className="text-body mb-3">2009. Healthcare workers without healthcare. SureSafe Pharma — cooperative pharmaceutical distribution without markups or middlemen. The proof of concept that costs could fall.</p>
          <p className="text-body">The threats came. Legal pressure from pharmaceutical interests. Market disruptions. Blacklisting. We waited. Not because the idea was wrong — because timing matters.</p>
        </section>

        <hr className="border-green/20" />

        {/* What Happened While We Waited */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What Happened While We Waited</span>
            <p className="text-body mb-3">Others succeeded with concepts we pioneered.</p>
            <p className="text-body mb-2"><strong className="text-white">Mark Cuban (2022):</strong> Cost Plus Drugs validates the pharmaceutical model. 7 million customers. 80–90% savings.</p>
            <p className="text-body mb-2"><strong className="text-white">ZORTT Elite Medical:</strong> Cooperative telemedicine validates the delivery model.</p>
            <p className="text-body mb-4"><strong className="text-white">Telehealth expansion:</strong> Became mainstream during COVID. Our vision, confirmed.</p>
            <p className="font-condensed text-lg text-green font-bold">These weren't competitors. They were proof.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Validation */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Validation</span>
          <p className="text-body italic mb-6">Each of the following independently validates a different part of the system. They were not coordinated. They arrived separately. That's what makes them credible.</p>
          
          <div className="space-y-6">
            {/* Congressional Support */}
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">CONGRESSIONAL SUPPORT — SINCE 2009</p>
              <div className="my-3 max-w-[500px]">
                <Image src="/images/VanHollen_Letter_of_Support.png" alt="Letter of Support from Congressman Chris Van Hollen" width={500} height={400} className="w-full h-auto rounded-lg border border-green/20" />
              </div>
              <p className="text-body text-sm">Congressman Chris Van Hollen (MD): "PHIERS.org has the potential to become a vital part of the health care system."</p>
              <div className="my-3 max-w-[500px]">
                <Image src="/images/KJ_Sacramento_Support_Letter.png" alt="Letter of Support from Mayor Kevin Johnson" width={500} height={400} className="w-full h-auto rounded-lg border border-green/20" />
              </div>
              <p className="text-body text-sm">Mayor Kevin Johnson, Sacramento: "I strongly support the PHIERS approach... PHIERS could be readily adapted throughout California as a flagship community health care approach."</p>
              <p className="text-body text-sm mt-2">This support goes back 16 years. Before telehealth was mainstream. Before Cost Plus Drugs existed. The idea was right then. The moment is now.</p>
            </div>

            {/* Pathos */}
            <div className="border-l-4 border-gold pl-4">
              <p className="font-condensed font-bold text-white">PATHOS COMMUNICATIONS</p>
              <p className="text-body text-sm">Fortune 500 — London Stock Exchange listed. Kevin Harrington — original Shark Tank investor. Pathos reviewed PHIERS. They confirmed the mechanism works. They confirmed media interest from International Business Times, Forbes, and USA Today. Kevin Harrington staked his firm's public reputation on PHIERS. That's a verdict, not an endorsement.</p>
              <div className="video-container mx-auto my-3 max-w-[500px]">
                <div className="video-wrapper">
                  <div className="video-wrap" id="wrap-pathos" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <div className="absolute inset-0 bg-cover bg-center cursor-pointer flex items-center justify-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/KLu7USN_dao/hqdefault.jpg')" }} onClick={() => playVideo('pathos', 'https://www.youtube.com/embed/KLu7USN_dao?autoplay=1&rel=0')}>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-5xl text-white/90 cursor-pointer">▶</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-green text-sm font-condensed">▶ Watch: Why Pathos Chose PHIERS — 7:11</p>
            </div>

            {/* DotCom */}
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">DOTCOM MAGAZINE — 2022</p>
              <p className="text-body text-sm">Kevin O'Leary's Platform. Will Price was interviewed by DotCom Magazine — the platform promoted by Kevin O'Leary, original Shark Tank co-founder. Kevin Harrington validated PHIERS through Pathos. Kevin O'Leary's platform validated it through DotCom Magazine. Two original Sharks. Two independent validations. Neither coordinated with the other. That doesn't happen by accident.</p>
              <div className="video-container mx-auto my-3 max-w-[500px]">
                <div className="video-wrapper">
                  <div className="video-wrap" id="wrap-dotcom" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <div className="absolute inset-0 bg-cover bg-center cursor-pointer flex items-center justify-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/pUdlWukaLLY/hqdefault.jpg')" }} onClick={() => playVideo('dotcom', 'https://www.youtube.com/embed/pUdlWukaLLY?autoplay=1&rel=0')}>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-5xl text-white/90 cursor-pointer">▶</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-green text-sm font-condensed">▶ Watch: DotCom Magazine Teaser</p>
              <Link href="https://youtu.be/FwFq87VqZys" target="_blank" className="text-green text-sm font-condensed hover:underline block mt-1">▶ Watch: Full Interview (27 mins)</Link>
            </div>

            {/* Cost Plus Drugs */}
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">MARK CUBAN'S COST PLUS DRUGS</p>
              <p className="text-body text-sm">7 million customers. 80–90% prescription savings. 200+ retail pharmacies. The PHIERSale model — already running at scale. We didn't copy it. We predicted it. Cuban built the proof. PHIERS scales it to 234 million people.</p>
            </div>

            {/* Harvard */}
            <div className="border-l-4 border-green pl-4">
              <p className="font-condensed font-bold text-white">HARVARD KENNEDY SCHOOL</p>
              <div className="max-w-[300px] my-3">
                <Image src="/images/3.5pct_Erica_Chenoweth.jpg" alt="3.5% — Chenoweth Research" width={300} height={200} className="w-full h-auto rounded-lg border border-white/10" />
              </div>
              <p className="text-body text-sm">Erica Chenoweth — 323 campaigns, 1900–2006. Finding: NO campaign where 3.5% of the population participated in sustained, organized action ever failed. Not one. In 323 campaigns. That's the math PHIERS is built on.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 5D Architecture */}
        <section className="container section text-center">
          <div className="max-w-[500px] mx-auto">
            <Image src="/images/5D_Solutions_Rubiks_Cube.png" alt="5D Solutions — Rubik's Cube visual" width={500} height={400} className="w-full h-auto rounded-lg border border-green/20" />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Timeline */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Timeline</span>
            <div className="space-y-3 max-w-[600px] mx-auto">
              <div><p className="font-condensed font-bold text-white">▸ NOW</p><p className="text-body text-sm">The window is open. Congress is accessible. Organized constituents have maximum leverage right now.</p></div>
              <div><p className="font-condensed font-bold text-white">▸ CONGRESS RETURNS</p><p className="text-body text-sm">What organized people demand before they return determines what's possible after.</p></div>
              <div><p className="font-condensed font-bold text-white">▸ SPRING / SUMMER 2026</p><p className="text-body text-sm">Districts hit thresholds. Town halls triggered. Cascade begins.</p></div>
              <div><p className="font-condensed font-bold text-white">▸ NOVEMBER 2026</p><p className="text-body text-sm">Every seat on the ballot. Organized people keeping score. Representatives who acted get protected. Those who didn't get replaced.</p></div>
              <div><p className="font-condensed font-bold text-white">▸ 8–13 MONTHS POST-AUTHORIZATION</p><p className="text-body text-sm">Universal coverage for 234 million Americans. Not a promise. Arithmetic.</p></div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Mission */}
        <section className="container section text-center">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Mission</span>
          <p className="text-body mb-6">To coordinate enough districts at the same time to make congressional inaction more expensive than action. Peaceful. Democratic. Immediate.</p>
          
          <div className="flex flex-col gap-3 max-w-md mx-auto">
            <Button href="/petition" variant="primary" fullWidth>✍ ADD MY NAME</Button>
            <Button href="/organizers" variant="secondary" fullWidth>✊ I ORGANIZE</Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Will Price Modal */}
      {willModalOpen && (
        <div className="fixed inset-0 bg-bg-deep z-[99998] flex items-center justify-center p-4" onClick={() => setWillModalOpen(false)}>
          <div className="relative max-w-[720px] w-full bg-bg-deep/97 border-2 border-green/35 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setWillModalOpen(false)} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-bg-card text-green border-2 border-green flex items-center justify-center text-xl hover:bg-green hover:text-bg-card transition-all z-10">✕</button>
            <div className="flex flex-wrap">
              <div className="w-full md:w-[240px] min-h-[280px] overflow-hidden">
                <Image src="/images/Will_Price.jpg" alt="Will Price" width={240} height={280} className="w-full h-full min-h-[260px] object-cover object-[55%_top]" />
              </div>
              <div className="flex-1 min-w-[240px] p-6 flex flex-col justify-center">
                <p className="font-condensed text-xs text-green uppercase tracking-[3px] mb-2">The Architect</p>
                <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1">Will Price</h3>
                <p className="font-condensed text-sm text-gold font-bold mb-3">Founder &amp; Chief Solutions Architect, PHIERS</p>
                <p className="text-body text-sm">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending — and built the lever to redirect it toward healthcare, jobs, and a monthly check for every American. Building this since 2009.</p>
              </div>
            </div>
          </div>
        </div>
      )}

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
