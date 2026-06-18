// FILE: app/Prophecy/page.tsx
// v85 — Added LEver picture and note above video best expereinced from the beginning

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProphecyPage() {
  const [videoStarted, setVideoStarted] = useState(false);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* STICKY HEADER */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-start">
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

      {/* VIDEO HERO — FADE IN */}
      <div id="video-section" className="mt-8 sm:mt-12 opacity-0 animate-prophecyFadeIn">
        {/* QUIET CUE — sets expectation without breaking the spell */}
        <p className="text-gray-400/60 text-xs tracking-wide text-center mb-3 mt-2">
          Best experienced from the beginning.
        </p>
        <div className="text-center mt-4 mb-1">
          <p className="text-gray-500/50 text-[10px] sm:text-xs tracking-wide italic">
            Watch this first
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


      {/* HERO TITLE — DELAYED FADE */}
      <div className="text-center pt-2 md:pt-4 pb-1 px-4 opacity-0 animate-prophecyFadeInDelay">
        <p className="text-gray-500 text-[10px] sm:text-xs tracking-[0.25em] uppercase mt-8 mb-1">
          Gateway to the PHIERS Trilogy
        </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold break-words whitespace-normal max-w-full px-4 leading-tight">
            Black Men<span className="inline-block">…</span> Welcome
          </h1>
        <p className="text-green-400 text-base sm:text-lg md:text-xl font-semibold mt-2 tracking-wide">
          For Us. By Us.
        </p>
      </div>

      {/* GEAR SHIFT CUE */}
      <div className="text-center mt-2 mb-2">
        <p className="text-gray-400/60 text-[9px] sm:text-xs italic tracking-wide">
          Let that land.
        </p>
      </div>

      {/* INTRO SEQUENCE */}
      <div id="breath-section" className="text-center mt-24 md:mt-32 mb-10 px-6">
        <h3 className="text-[clamp(2.2rem,8vw,3.5rem)] leading-[1.05] font-light text-gray-200 italic">
          Take A Knee.
        </h3>
        <div className="mt-8 space-y-3 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
          <p>We've been carrying weight a long time.</p>
          <p>Nobody's coming to save us.</p>
        </div>
      </div>


      <div className="text-center mt-12 mb-6 px-6">
        <div className="text-gray-400 text-lg md:text-xl space-y-3">
          <p>We learned something from that.</p>
          <p>Power doesn't come from shouting louder.</p>
          <p>It comes from enough disciplined people moving together.</p>
        </div>
      </div>


      {/* THREE DOORS */}
      <div className="max-w-4xl mx-auto px-3 sm:px-6 mt-16 mb-16">
        <div className="text-center mb-10">
          <p className="text-white text-xl md:text-2xl leading-relaxed font-light">
            So we got organized and built something of our own.

            Not a protest.
            Not a political party.

            A structure.

            A structure that helps men get whole, build leverage, and solve problems together.
          </p>
          <p className="text-white text-xl md:text-2xl leading-relaxed font-light mt-4">
            When we get whole, everybody wins.
          </p>
       <p className="balanced-text text-green-400 text-lg md:text-xl font-semibold mt-8">
          And it doesn't start with millions. It starts with the first fifteen hundred.
        </p>

        <p className="balanced-text text-green-400 text-lg md:text-xl font-semibold mt-2">
          There are three doors.
        </p>

        <p className="text-gray-400 text-sm mt-3">
          Choose the one that speaks to you.
        </p>

        <p className="text-gray-500 text-xs mt-2 italic">
          No wrong door.
        </p>

        {/* TRUST CUE — QUIET, HUMAN, NON‑CORPORATE */}
        <p className="text-gray-600 text-[11px] mt-3">
          Your choices stay yours. Nothing you do on this page is tracked.
        </p>

        {/* LEVER IMAGE — FADE‑IN ANIMATION */}
        <div className="w-full flex justify-center mt-10 mb-10">
          <img
            src="/images/OUR_Lever_PHIERS_Can_Move_the_World.jpg"
            alt="PHIERS leverage illustration"
            className="
              w-full max-w-2xl rounded-lg shadow-lg shadow-green-400/10
              opacity-0 animate-prophecyFadeIn
            "
          />
        </div>

        </div>

        {/* THREE DOORS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-6">
          <a
            href="/Prophecy/prophecy"
            className="w-full sm:flex-1 sm:min-w-[160px] bg-[#0a1628]/80 border-2 border-green-400/40 rounded-xl py-4 sm:py-5 px-3 text-center shadow-lg shadow-green-400/10 hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
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
                WHY we're here
              </div>
            </div>
          </a>

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
                WHAT we do
              </div>
            </div>
          </a>

          {/* DOOR 3 — LEVERAGE -> PHIERS.org */}
          <a
            href="https://phiers.org"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 sm:min-w-[160px] bg-[#0a1628]/80 border-2 border-green-400/40 rounded-xl py-4 sm:py-5 px-3 text-center shadow-lg shadow-green-400/10 hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src="/images/PHIERS_Logo_BW.png"
                alt="PHIERS Logo"
                className="h-12 w-auto mb-3 opacity-90 brightness-110 mix-blend-screen"
                style={{ aspectRatio: 'auto', transform: 'scaleX(1.08)' }}
              />
              <div className="text-green-400 text-sm sm:text-base md:text-lg font-black tracking-wide">
                THE SOLUTION
              </div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">
                HOW we build
              </div>
            </div>
          </a>

        </div>
      </div>

      {/* MOBILE‑ONLY FADE‑IN DIVIDER — clean boundary after the threshold */}
      <div className="sm:hidden w-full flex justify-center my-12 opacity-0 animate-fadeInDivider">
        <div className="w-24 h-px bg-gray-800/70"></div>
      </div>

      {/* INCLUSIVE WELCOME NOTE */}
      <div className="max-w-2xl mx-auto px-6 text-center mt-10 mb-16">
        <p className="text-gray-500 text-sm leading-relaxed italic">
          If you are not a Black man, you are still welcome here.
          Just hold that in mind as we recover and repair —
          and show respect for the healing that needs to happen.
          When we get whole, everybody wins.
        </p>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm mt-20">
        <p>A gift from Foundational Black American men to humanity. Built by Black men.</p>
        <div className="w-16 h-px bg-gray-700 mx-auto my-4" />
        <a
          href="https://phiers.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition"
        >
          <img src="/images/PHIERS_Logo_BW.png" alt="PHIERS" className="w-8 h-auto" />
          <span className="text-xs hover:text-white transition">PHIERS.org →</span>
        </a>
        <p className="mt-4 text-gray-600 text-xs">
          Participation is voluntary. PHIERS is a peaceful civic engagement effort.
        </p>
      </footer>
    </div>
  );
}

// FILE: app/Prophecy/page.tsx