// FILE: app/Prophecy/page.tsx
v78.2 — leaner prophecy flow, removed over-explanation, third door points to phiers.org

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Accordion from './components/Accordion';

// import PHIERStormModal from '@/components/PHIERStormModal'; // removed - trust modal handles CTA

export default function ProphecyPage() {
  const [videoStarted, setVideoStarted] = useState(true);
  // const [showModal, setShowModal] = useState(false); // removed - trust modal handles CTA
  const [showTrustModal, setShowTrustModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById('video-section');
      const breathSection = document.getElementById('breath-section');
      if (videoSection && breathSection) {
        const videoBottom = videoSection.getBoundingClientRect().bottom;
        if (videoBottom < 100) {
          breathSection.classList.add('sticky-top');
        } else {
          breathSection.classList.remove('sticky-top');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* TRUST & PARTICIPATION MODAL – fires when visitor clicks Ask a Question */}
      {showTrustModal && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowTrustModal(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setShowTrustModal(false);
          }}
        >
          <div className="relative max-w-2xl w-full bg-[#0d0d0d] border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            <p className="text-amber-400 text-sm font-semibold mb-4">
              Before we go further — we used to lead with a petition. We don't anymore.
            </p>
            
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Too many brothers said the same thing:
            </p>
            
            <p className="text-white italic text-lg mb-4">
              "Before I sign anything, I need to know exactly what you're doing with my information."
            </p>
            
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              They were right to ask. So here it is — plain language, no fine print.
            </p>

            <div className="space-y-4 text-gray-300 text-base leading-relaxed mb-6">
              <p>
                <span className="text-amber-400 font-bold">1.</span> Nothing you share is public. Not your name. Not your email. Not your answers. We don't post it. We don't sell it. We don't pass it around.
              </p>
              <p>
                <span className="text-amber-400 font-bold">2.</span> Your email is optional. Want updates? Leave it. Don't? Leave it blank. You're still welcome here either way.
              </p>
              <p>
                <span className="text-amber-400 font-bold">3.</span> If an elected official ever asks whether Black men in their district are paying attention — we give them a number, not a list. A headcount, not identities. That's it.
              </p>
              <p>
                <span className="text-amber-400 font-bold">4.</span> This is not surveillance. We're not tracking you. We're not building profiles. This is a peaceful, lawful, transparent effort to help regular people get the accountability we've been denied for generations.
              </p>
              <p>
                <span className="text-amber-400 font-bold">5.</span> If anything feels off — ask. Push back. Challenge it. You deserve straight answers. You do not need to agree with PHIERS to participate.
              </p>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Only engage when you feel fully comfortable with what we're doing and why.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              And if you're never comfortable — that's okay too. This only works if it's real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-lg transition text-center"
              >
                I'm ready — ask me →
              </a>
              <button
                onClick={() => setShowTrustModal(false)}
                className="inline-block bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-semibold py-3 px-8 rounded-lg transition"
              >
                Not yet
              </button>
            </div>

          </div>
        </div>
      )}

      {/* STICKY HEADER */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-star">
          <Link href="/Prophecy">
            <Image
              src="/images/PHIERS_Logo_BW.png"
              alt="PHIERS"
              width={48}
              height={48}
              className="w-10 h-auto md:w-12 opacity-70 hover:opacity-90 transition"
              priority
            />
          </Link>
        </div>
      </div>

      {/* HERO TITLE - LARGE WORDS */}
      <div className="text-center pt-2 md:pt-4 pb-1">
        <p className="text-gray-500 text-[10px] sm:text-xs tracking-[0.25em] uppercase mt-8 mb-1">
          Part I of the PHIERS Trilogy
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-white tracking-tight leading-[1.1]">
          The Prophecy
        </h1>
        <p className="text-green-400 text-base sm:text-lg md:text-xl font-semibold mt-2 tracking-wide">
          For Us. By Us.
        </p>
      </div>

      {/* VIDEO HERO - DELAYED APPEARANCE */}
      <div id="video-section" className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        {/* Cinematic cue - quiet orientation */}
        <div className="text-center mt-4 mb-1">
          <p className="text-gray-500/50 text-[10px] sm:text-xs tracking-wide italic">
            Best experienced from the beginning.
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto overflow-hidden">
          <div className="w-full h-[25vh] sm:h-[30vh] md:h-[40vh] bg-black relative rounded-xl overflow-hidden">
            {!videoStarted ? (
              <button
                type="button"
                onClick={() => setVideoStarted(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label="Play Why we do what we do video"
              >
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://img.youtube.com/vi/GwfhH8yDZQo/hqdefault.jpg")',
                    backgroundSize: 'cover',
                  }}
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Image
                    src="/images/trilogy/Youtube_Play_Button.png"
                    alt=""
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20 group-hover:opacity-80 transition"
                  />
                  <span className="text-gray-300 text-[10px] md:text-xs tracking-wide mt-2 opacity-80">
                    tap to play
                  </span>
                </div>
              </button>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/GwfhH8yDZQo?autoplay=1&start=382&modestbranding=1&controls=0&rel=0&showinfo=0&iv_load_policy=3&color=white&autohide=1"
                title="Why we do what we do"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>

      {/* Spacer after video */}
      <div className="h-20 md:h-28" />

      {/* GEAR SHIFT CUE */}
      <div className="text-center mt-2 mb-2">
        <p className="text-gray-400/60 text-[9px] sm:text-xs italic tracking-wide">
          Let that land.
        </p>
      </div>

      {/* INTRO SEQUENCE – PRIMARY THRESHOLD */}
      <div id="breath-section" className="text-center mt-24 md:mt-32 mb-10 px-6">
        <h3 className="text-[clamp(2.2rem,8vw,3.5rem)] leading-[1.05] font-light text-gray-200 italic">
          Take a knee for a minute.
        </h3>
        <div className="mt-8 space-y-3 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
          <p>We've been carrying weight a long time.</p>
          <p>Nobody's coming to save us.</p>
        </div>
      </div>

      {/* THREE DOORS — CHOICE POINT */}
      <div className="max-w-4xl mx-auto px-3 sm:px-6 mt-16 mb-16">
        
           <div className="text-center mb-10">
          <p className="text-white text-xl md:text-2xl leading-relaxed font-light">
            So we got organized and built something of our own —
            a structure that heals the men holding the weight,
            and solves the problems nobody can solve without us.
          </p>

          <p className="text-white text-xl md:text-2xl leading-relaxed font-light mt-4">
            When we get whole, everybody wins.
          </p>

          <p className="text-green-400 text-lg md:text-xl font-semibold mt-8">
            There are three doors.
          </p>

          <p className="text-gray-400 text-sm mt-3">
            Choose the one that speaks to you.
          </p>
          <p className="text-gray-500 text-xs mt-2 italic">
            No wrong door.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
          
        {/* DOOR 1 — PROPHECY */}
          <button
            onClick={() => {
              document.getElementById('prophecy-content')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:flex-1 sm:min-w-[160px] bg-[#0a1628]/80 border-2 border-green-400/40 rounded-xl py-4 sm:py-5 px-3 text-center shadow-lg shadow-green-400/10 hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <img
                src="/images/trilogy/Prophecy_Eye.png"
                alt="Prophecy Icon"
                className="w-10 h-10 mb-3 opacity-90"
              />
              <div className="text-green-400 text-sm sm:text-base md:text-lg font-black tracking-wide">
                THE PROPHECY
              </div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">
                Why we're here
              </div>
            </div>
          </button>


          {/* DOOR 2 — MOVEMENT */}
          <a
            href="/Prophecy/movement"
            className="w-full sm:flex-1 sm:min-w-[160px] bg-[#0a1628]/80 border-2 border-green-400/40 rounded-xl py-4 sm:py-5 px-3 text-center shadow-lg shadow-green-400/10 hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src="/images/trilogy/Movement_Phalanx.png"
                alt="Movement Icon"
                className="w-10 h-10 mb-3 opacity-90"
              />
              <div className="text-green-400 text-sm sm:text-base md:text-lg font-black tracking-wide">
                THE MOVEMENT
              </div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">
                Who's showing up
              </div>
            </div>
          </a>

            {/* DOOR 3 — LEVERAGE */}
          <a
            href="https://phiers.org"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 sm:min-w-[160px] bg-[#0a1628]/80 border-2 border-green-400/40 rounded-xl py-4 sm:py-5 px-3 text-center shadow-lg shadow-green-400/10 hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src="/images/trilogy/PHIERS_Logo_BW.png"
                alt="PHIERS Logo"
                className="h-12 w-auto mb-3 opacity-90 brightness-110 mix-blend-screen"
                style={{ aspectRatio: 'auto', transform: 'scaleX(1.08)' }}
              />



              <div className="text-green-400 text-sm sm:text-base md:text-lg font-black tracking-wide">
                PHIERS.org
              </div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">
                The Solution
              </div>
            </div>
          </a>

        </div>
      </div>

      {/* OPENING SECTION – BLACK MEN HAVE WAITED LONG ENOUGH */}
      <div id="prophecy-content" className="max-w-3xl mx-auto px-6 text-center mt-32 md:mt-48 scroll-mt-20" style={{ scrollMarginTop: '80px' }}>
        <h1 className="text-[clamp(2.2rem,8vw,4rem)] font-bold leading-[1.05] tracking-tight">
          Black Men Have Waited Long Enough.
        </h1>
      </div>

      {/* STRATEGIC RECONSTRUCTION */}
      <div className="max-w-5xl mx-auto px-6 text-center mt-16">
        <div className="w-full max-w-[680px] md:max-w-3xl lg:max-w-4xl mx-auto my-16 md:my-24 px-4">
          <Image
            src="/images/trilogy/Strategic_Brotha_Playing_Chess-Manhattan_Project.jpg"
            alt="Strategic brother playing chess"
            width={1600}
            height={900}
            className="w-full rounded-lg object-cover shadow-md brightness-110 contrast-105"
            priority
          />
        </div>
        <h2 className="text-[clamp(2rem,7vw,3rem)] font-bold leading-[1.08]">
          We Need To Build Again.
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
          Not noise. Not drifting. Not looking busy.
        </p>
        <p className="text-white text-xl md:text-2xl font-bold mt-8">
          Not symbolism. <span className="text-green-400">REAL solutions.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-3xl mx-auto">
          <div className="bg-[#1a2a3a]/80 border border-green-400/30 rounded-md px-3 py-1 shadow-sm hover:border-green-400/60 transition-all duration-300">
            <p className="text-green-400 text-base md:text-lg font-bold">Discipline</p>
          </div>
          <div className="bg-[#1a2a3a]/80 border border-green-400/30 rounded-md px-3 py-1 shadow-sm hover:border-green-400/60 transition-all duration-300">
            <p className="text-green-400 text-base md:text-lg font-bold">Brotherhood</p>
          </div>
          <div className="bg-[#1a2a3a]/80 border border-green-400/30 rounded-md px-3 py-1 shadow-sm hover:border-green-400/60 transition-all duration-300">
            <p className="text-green-400 text-base md:text-lg font-bold">Coordination</p>
          </div>
          <div className="bg-[#1a2a3a]/80 border border-green-400/30 rounded-md px-3 py-1 shadow-sm hover:border-green-400/60 transition-all duration-300">
            <p className="text-green-400 text-base md:text-lg font-bold">Accountability</p>
          </div>
          <div className="bg-[#1a2a3a]/80 border border-green-400/30 rounded-md px-3 py-1 shadow-sm hover:border-green-400/60 transition-all duration-300">
            <p className="text-green-400 text-base md:text-lg font-bold">Structure</p>
          </div>
          <div className="bg-[#1a2a3a]/80 border border-green-400/30 rounded-md px-3 py-1 shadow-sm hover:border-green-400/60 transition-all duration-300">
            <p className="text-green-400 text-base md:text-lg font-bold">Leverage</p>
          </div>
        </div>
        <p className="text-white text-xl md:text-2xl font-light mt-10 max-w-3xl mx-auto leading-relaxed">
          This is where we stop reacting.<br />
          We are building tight enough and clean enough,<br />
          that "those folks" will have to rethink<br />
          everything they thought they knew about us.
        </p>
      </div>

      {/* PROPHECY — SCRIPTURE SEQUENCE */}

      {/* Prophecy Eye Icon */}
      <div className="flex justify-center mt-28 md:mt-36">
        <img
          src="/images/trilogy/Prophecy_Eye.png"
          alt="Prophecy Eye"
          className="w-24 h-24 md:w-32 md:h-32 opacity-70"
        />
      </div>

      {/* Framing line - plain text, no box */}
      <div className="max-w-4xl mx-auto px-6 mt-6 text-center">
        <p className="text-gray-100 text-base sm:text-lg md:text-xl font-medium tracking-wide">
          The prophecy wasn't metaphor. It was a timeline.
        </p>
      </div>

      {/* Scripture block - plain text, no box */}
      <div className="max-w-4xl mx-auto px-6 mt-12 mb-8 text-center">
        <p className="text-amber-500/70 text-xs sm:text-sm mb-6 tracking-widest uppercase font-mono">
          Genesis 15:13–14
        </p>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-100 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
            “Know for certain<br />
            that your descendants will be strangers<br />
            in a land not their own…<br /><br />
            where they will be enslaved<br />
            and mistreated<br />
            for four hundred years.<br /><br />
            But afterward,<br />
            they will leave<br />
            with great substance.”
          </p>
        </div>
      </div>

      {/* Interpretation line - plain text, no box */}
      <div className="max-w-4xl mx-auto px-6 mt-12 mb-8 text-center">
        <p className="text-green-400/90 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
          Substance becomes leverage. Leverage becomes respect.
        </p>
      </div>

      {/* 400 Years image — fulfillment */}
      <div className="w-full max-w-[680px] md:max-w-3xl lg:max-w-4xl mx-auto my-16 md:my-24 px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-400/10">
          <Image
            src="/images/trilogy/400-years-prophesy_sentence-served.jpg"
            alt="400 years — sentence served"
            width={1400}
            height={850}
            className="w-full rounded-2xl object-cover transition-all duration-700 hover:scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Continuation - plain text, no box */}
      <div className="max-w-3xl mx-auto px-6 mt-8 mb-16 text-center">
        <p className="text-gray-400 text-sm italic tracking-wide">
          Four hundred years is a long time to carry a burden.
        </p>
        <div className="w-16 h-px bg-green-400/30 mx-auto my-6" />
        <p className="text-white text-2xl md:text-3xl font-semibold">
          We carried it anyway.
        </p>
        <p className="text-white text-xl md:text-2xl font-light mt-6">
          Now, we're here.
        </p>
        <div className="w-12 h-px bg-green-400/20 mx-auto my-8" />
        <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          <p>Endurance turned into structure.</p>
          <p>Memory turned into coordination.</p>
          <p>Pressure turned into leverage.</p>
          <p className="text-green-400/80 font-semibold">Survival turned into forward motion.</p>
        </div>
      </div>

      {/* Spacer before the next section */}
      <div className="h-16 md:h-24" />

      {/* WHY BLACK MEN */}
      <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
        <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
          Why Black men?
        </h2>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          Because we carried weight nobody else was asked to carry.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          Used.<br />
          Feared.<br />
          Hated.<br />
          Disposable when convenient.<br />
          And somehow we still built.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          That leaves marks.<br />
          It also leaves wisdom.
        </p>
      </div>

      {/* PRESSURE FORGED */}
      <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
        <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
          Pressure didn't just hurt us — it sharpened us.
        </h2>
        
        <section className="my-8">
          <img
            src="/images/trilogy/forged-under-pressure.jpg"
            alt="Men working in an industrial workshop welding and building with precision and teamwork"
            className="w-full mx-auto rounded-lg object-cover shadow-lg"
          />
        </section>
        
        <ul className="list-disc pl-6 mt-6 space-y-3 text-gray-300 text-base md:text-lg leading-relaxed">
          <li>To think under strain.</li>
          <li>To build without help.</li>
          <li>To read danger early.</li>
          <li>To protect what matters.</li>
          <li>To improvise when things change.</li>
          <li>To endure what should've ended us.</li>
        </ul>
        <p className="text-base md:text-lg text-gray-300 mt-6 leading-relaxed">
          That's not glorifying pain.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-2 leading-relaxed">
          It's saying pain didn't get the last word.
        </p>
        <p className="text-xl text-white mt-8 leading-relaxed">
          Something got forged anyway.
        </p>

      <p className="text-center text-green-400/70 text-sm md:text-base tracking-wide my-16 md:my-20">
        THIS IS WHERE STRUCTURE BEGINS.
      </p>
      </div>

      {/* HEALING IS STRATEGIC */}
      <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
        <div className="w-full max-w-[680px] md:max-w-3xl lg:max-w-4xl mx-auto my-16 md:my-24 px-4">
          <Image
            src="/images/trilogy/healing-is-strategic-reflection.jpg"
            alt="Reflective stillness — Healing Is Strategic"
            width={1600}
            height={900}
            className="w-full h-auto object-cover rounded-lg animate-fadeInSlow"
            priority
          />
        </div>
        <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
          Healing Is Strategic
        </h2>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          Broken men get played.<br />
          Disconnected men drift.<br />
          Unhealed men react.<br />
          Grounded men build.<br />
          Disciplined men coordinate.<br />
          Clear men carry weight.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-6 leading-relaxed">
          That's why healing matters.<br />
          Not as self-help.<br />
          As infrastructure.
        </p>
        <p className="text-base md:text-lg text-green-400/60 mt-8 leading-relaxed italic text-center">
          And infrastructure gets built.
        </p>
      </div>

      {/* SANKOFA – MOVED DOWN */}
      <div className="max-w-3xl mx-auto px-6 mt-24 md:mt-32">
        <p className="text-sm tracking-[0.3em] text-gray-400">SANKOFA</p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-bold mt-3 leading-[1.2] text-balance">
          We don't look back to stay stuck.<br />We look back to grab what they tried to take.
        </h2>
        <div className="mt-8 max-w-xs mx-auto">
          <Image
            src="/images/trilogy/sankofa.jpg"
            alt="Sankofa symbol"
            width={400}
            height={400}
            className="w-full rounded-lg object-contain opacity-90"
          />
          <p className="text-center text-gray-500 text-xs mt-2 italic">Look back to move forward.</p>
        </div>
        <div className="mt-8 space-y-5 text-gray-300 leading-relaxed">
          <p>After Reconstruction, they burned what we built.</p>
          <p>We built again.</p>
          <p>
            After Jim Crow.<br />
            After convict leasing.<br />
            After COINTELPRO.<br />
            After every system meant to erase us —<br />
            we built again.
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold text-center py-4">
            Every. Single. Time.
          </p>
          <div className="w-full max-w-[680px] md:max-w-3xl lg:max-w-4xl mx-auto my-16 md:my-24 px-4">
            <Image
              src="/images/trilogy/ancestral-lineage-black-men.jpg"
              alt="Generational lineage — Every. Single. Time."
              width={1600}
              height={900}
              className="w-full h-auto object-cover rounded-lg animate-fadeInSlow"
              loading="lazy"
            />
          </div>
          <p>That's not myth.</p>
          <p>That's inheritance.</p>
          <p>We're the continuation of them.</p>
          <div className="mt-10 text-center">
            <p className="text-gray-200 text-base md:text-lg italic max-w-2xl mx-auto leading-relaxed">
              “In the lineage of Kwanzaa we find our compass — unity, purpose, collective will. Without it, we don't survive.”
            </p>
          </div>
        </div>
      </div>

      {/* PHIERS seed — names the structure before the reveal */}
      <div className="max-w-2xl mx-auto px-6 text-center mb-0">
        <p className="text-gray-500 text-sm tracking-widest uppercase">
          That structure has a name.
        </p>
      </div>

      {/* Breathing pause */}
      <div className="py-20 text-center">
        <div className="w-full max-w-[680px] md:max-w-3xl lg:max-w-4xl mx-auto my-16 md:my-24 px-4">
          <Image
            src="/images/trilogy/modern-african-american-strategy-session.jpg"
            alt="Modern coordination — Now the Work Begins"
            width={1600}
            height={900}
            className="w-full h-auto object-cover rounded-lg animate-fadeInSlow"
            loading="lazy"
          />
        </div>
        <p className="text-3xl md:text-5xl font-bold text-white">Now the work begins.</p>
      </div>


      {/* WHY PHIERS */}
      <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
        <section className="mb-12">
          <img
            src="/images/trilogy/organized-men-future.jpg"
            alt="Black men gathered around a table reviewing maps and data screens in a strategic planning session"
            className="w-full md:w-11/12 mx-auto rounded-lg object-cover shadow-lg"
          />
        </section>
        
        <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
          Why PHIERS
        </h2>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          PHIERS ain't built on outrage.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-2 leading-relaxed">
          Ain't built on performance.<br />
          Ain't built on begging.<br />
          Ain't built on waiting for permission.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          Scattered men get ignored.
        </p>
        <p className="text-xl font-semibold text-white mt-4">
          Organized men change outcomes.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-6 leading-relaxed">
          Not men who agree on everything —
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-2 leading-relaxed">
          men disciplined enough to build anyway.
        </p>
        <p className="text-xl font-light text-green-400 mt-8 leading-relaxed">
          Too coordinated to ignore.<br />
          Too aligned to dismiss.
        </p>
        <p className="text-2xl font-bold text-white mt-6">Power Held In Every Rep's Seat.</p>

      </div>


      {/* RECORD ACCORDION - TEMPORARILY COMMENTED OUT per feedback (already established historical weight elsewhere) */}
      {/*
      <div className="max-w-3xl mx-auto px-6 mt-16 md:mt-20">
        <section className="mb-8">
          <img
            src="/images/trilogy/documentary-record-wall.jpg"
            alt="Historical documents, maps, and newspapers arranged on a table representing archival record"
            className="w-full md:w-4/5 mx-auto rounded-lg object-cover shadow-md"
          />
        </section>
        
        <Accordion
          triggerLabel="THE RECORD THEY THOUGHT TIME WOULD ERASE"
          subtleHint="We know the record. We are not trapped in it."
          className="w-full text-left border border-gray-800 bg-[#0d0d0d] px-5 md:px-6 py-4 md:py-5 rounded-xl hover:border-gray-600 transition"
        >
          <div className="space-y-4 text-gray-300 leading-relaxed pt-4 pb-2">
            <p>We know the record. We're not trapped in it.</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-300 text-sm mt-2">
              <div>Redlining.</div><div>Convict leasing.</div>
              <div>Jim Crow.</div><div>COINTELPRO.</div>
              <div>Mass incarceration.</div><div>VRA gutted.</div>
              <div>Economic abandonment.</div><div>School segregation.</div>
              <div>Media scapegoating.</div><div>Land theft.</div>
              <div>Family destabilization.</div><div>Political disposability.</div>
              <div>Erasure of contribution.</div><div>Still here.</div>
            </div>
          </div>
        </Accordion>
      </div>
      */}

      {/* LINEAGE IMAGE */}
      <section className="mt-32 mb-32 max-w-4xl mx-auto px-6">
        <img
          src="/images/trilogy/black-men-builders-lineage.jpg"
          alt="Composite portrait of generations of Black builders, craftsmen, and mentors across eras"
          className="w-full md:w-3/4 mx-auto rounded-lg object-cover shadow-md"
        />
      </section>

      {/* THIRD RECONSTRUCTION */}
      <div className="max-w-4xl mx-auto px-6 mt-24 md:mt-32 text-center">
        <div className="w-full max-w-[680px] md:max-w-3xl lg:max-w-4xl mx-auto my-16 md:my-24 px-4">
          <Image
            src="/images/trilogy/third-reconstruction-modern-builders.jpg"
            alt="Modern builders — Third Reconstruction"
            width={1600}
            height={900}
            className="w-full h-auto object-cover rounded-lg animate-fadeInSlow"
            loading="lazy"
          />
        </div>
        <p className="uppercase tracking-[0.35em] text-gray-500 text-sm mb-6">THE THIRD RECONSTRUCTION</p>
        <h2 className="text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.06] text-balance">
          They tried to erase the record.<br />
          The work is still standing.
        </h2>
        <div className="mt-10 space-y-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <p>We built rail lines. Roads. Bridges. Ports. Cities.</p>
          <p>We kept this country running while being told we were worth less.</p>
          <p className="text-white font-semibold">Buried ain't gone.</p>
          <p>Now the country's unstable. AI taking jobs. Institutions losing trust. Communities breaking apart.</p>
          <p>And folks are finally realizing:</p>
          <p className="text-xl md:text-2xl text-green-400 font-semibold">survival without structure ain't enough.</p>
          <p>That's why PHIERS exists.</p>
        </div>
        <p className="text-gray-300 text-lg font-semibold mb-4 mt-8">Coordination. Political leverage. Community stabilization. Brotherhood. Economic alignment. Mutual accountability. Long‑term reconstruction.</p>
        <div className="mt-10 space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
          <p className="text-white font-semibold">
            We're building something so useful, so disciplined, so effective —
            that the world has to rethink who Black men are.
          </p>
          <p>Not with slogans. Through results.</p>
          <p className="text-2xl md:text-3xl font-light text-green-400 pt-2">
            The Third Reconstruction starts with FBA men.
          </p>
        </div>
      </div>

      {/* RECONSTRUCTION BUILDERS IMAGE */}
      <section className="mt-36 mb-36 max-w-4xl mx-auto px-6">
        <img
          src="/images/trilogy/third-reconstruction-builders.jpg"
          alt="Historic black-and-white photo of Black industrial workers standing on a bridge structure"
          className="w-full mx-auto rounded-lg object-cover shadow-lg"
        />
      </section>

      {/* BRIDGE: INEVITABILITY FRAMING – Not explanation, just carried forward */}
      <div className="max-w-3xl mx-auto px-6 mt-40 md:mt-48">
        <div className="space-y-8 text-center">
          <p className="text-gray-400 text-sm italic tracking-wide">
            What you've been feeling has a name.
          </p>

          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              Not a movement.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              Not a philosophy.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              A structure.
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Built by men who felt the same pressure you feel.
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            To turn that pressure into something that doesn't break.
          </p>

          <div className="w-12 h-px bg-green-400/20 mx-auto mt-8 mb-8" />

          <p className="text-sm text-gray-500 tracking-widest uppercase">
            What comes next is the blueprint.
          </p>
        </div>
      </div>

      <div className="h-12 md:h-16" />

      {/* NEW THRESHOLD – PHIERS REVEAL */}
      <div className="max-w-2xl mx-auto px-6 mt-24 md:mt-28 text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/PHIERS_Logo_BW.png"
            alt="PHIERS"
            width={64}
            height={64}
            className="w-16 h-16 opacity-80"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-4">
          We built something.
        </h2>
        
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
          It has a name.
        </p>

        <p className="text-4xl md:text-5xl font-bold text-green-400 mb-8">
          PHIERS
        </p>

        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
          What you've read explains why.
        </p>

        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
          What comes next explains how.
        </p>

        <a
          href="https://phiers.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-500 text-black font-bold py-3 px-8 rounded-lg transition text-lg"
        >
          → Enter PHIERS
        </a>
      </div>

      <div className="h-12 md:h-16" />

      {/* FOUNDER CREDIBILITY ACCORDION - MOVED HERE */}
      <div className="max-w-3xl mx-auto px-6 mt-24 md:mt-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">WHY THIS IS NOT THEORY</h2>
        <p className="text-gray-400 mb-4 italic">
          This ain't theory.
        </p>
        <p className="text-gray-400 mb-4 italic">
          It was built under pressure —<br />
          real pressure.<br />
          Years of trying to build something serious<br />
          while folks tried to bury it, derail it, or steal it.
        </p>
        <Accordion
          triggerLabel="Open to read the fuller story"
          className="w-full text-left border border-gray-800 bg-[#0d0d0d] px-5 md:px-6 py-4 md:py-5 rounded-xl hover:border-gray-600 transition"
        >
          <div className="space-y-4 text-gray-300 leading-relaxed pt-4 pb-2">
            <p>That taught two things:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Serious solutions need structure.</li>
              <li>Truth without organized force gets buried.</li>
            </ul>
            <p>PHIERS is built with that in mind.</p>
            <p>It solves multiple p`roblems at once for people with the same unmet needs.</p>
            <p className="italic">Power Held In Every Rep's Seat isn't a slogan. It's a structural fix.</p>
          </div>
        </Accordion>
      </div>

      {/* THRESHOLD with inheritance line */}
      <div className="h-20" />
      <div className="max-w-2xl mx-auto px-6 mt-28 md:mt-36 text-center">
        <p className="text-[clamp(1.5rem,5vw,2rem)] text-gray-200 font-light leading-[1.25] mb-8">
          What you've read so far is the inheritance.<br />
          What comes next is the forge.
        </p>
        <div className="gold-divider mb-8" />
        <p className="uppercase tracking-[0.28em] text-gray-500 text-xs md:text-sm">FROM INHERITANCE TO FORGE</p>

        <div className="mt-12 mb-16">
          <p className="text-amber-400 font-semibold text-lg md:text-xl leading-relaxed">
            Not branding. Not mythology.
          </p>
          <p className="text-amber-400 font-semibold text-lg md:text-xl leading-relaxed mt-1">
            The pressure that produced the structure.
          </p>
        </div>

        {/* BOTTOM NAVIGATION - MOVEMENT + LEVERAGE ONLY */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <a
            href="/Prophecy/movement"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition text-base whitespace-nowrap"
          >
            ← THE MOVEMENT
          </a>
          <a
            href="https://phiers.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition border border-gray-500 text-base whitespace-nowrap"
          >
            VISIT PHIERS.ORG →
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 my-12"></div>

      {/* FINAL STRUCTURE INVITE + QUESTION CTA */}
      <div className="max-w-3xl mx-auto px-6 mt-8 text-center">
        <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl px-6 py-12 md:px-12 md:py-16">
          <p className="text-xl md:text-2xl text-gray-300 font-semibold">
            If you want to see how this becomes structure —<br />
            the code, the coordination, the accountability —<br />
            start here.
          </p>
          <p className="text-md text-gray-400 mt-6">We're not asking for commitment. Just curiosity.</p>
          <button
            onClick={() => setShowTrustModal(true)}
            className="inline-block bg-white text-black font-bold text-xl md:text-2xl py-4 px-12 rounded-full hover:bg-gray-200 transition shadow-lg whitespace-nowrap mt-8 mx-auto cursor-pointer"
          >
            → Ask a question
          </button>
        </div>
      </div>

      <div className="text-center mt-8 mb-16 md:mb-20 px-6">
        <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
          Not to look backward. To prepare for what's next.
        </p>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>A gift from Foundational Black American men to humanity. Built by Black men.</p>
        <p>
          <a
            href="https://phiers.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            PHIERS.org →
          </a>
        </p>
        <p className="mt-3 text-gray-600 text-xs">Participation is voluntary. PHIERS is a peaceful civic engagement effort.</p>
        {/* Version ID - visible but subtle */}
        <p className="mt-4 text-gray-700/40 text-[9px] tracking-wide">
          v78.0 — images wrapped + responsive + prophecy sequence
        </p>
      </footer>

      {/* PHIERStorm Modal removed – trust modal handles survey CTA */}

      {/* INLINE STYLES */}
      <style>{`
        .sticky-top {
          position: sticky;
          top: 80px;
          background: linear-gradient(to bottom, #000000 0%, #000000 80%, transparent 100%);
          z-index: 30;
          padding-top: 1rem;
          margin-top: 0 !important;
        }
        .sticky-top h3 {
          font-size: clamp(2rem, 8vw, 3.25rem);
        }
        @keyframes fadeInModal {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInSlow {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInSlow {
          animation: fadeInSlow 0.9s ease-out both;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </div>
  );
}

// FILE: app/Prophecy/page.tsx