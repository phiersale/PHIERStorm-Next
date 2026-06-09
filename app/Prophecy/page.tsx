// FILE: app/Prophecy/page.tsx
// v81 — The Gateway page with Three Doors linking to For_Black_Men

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProphecyPage() {
  const [videoStarted, setVideoStarted] = useState(false);
  const [showTrustModal, setShowTrustModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-black text-white">
      {/* TRUST & PARTICIPATION MODAL */}
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
              <p><span className="text-amber-400 font-bold">1.</span> Nothing you share is public. Not a name. Not your email. Not your answers. We don't post it. We don't sell it. We don't pass it around.</p>
              <p><span className="text-amber-400 font-bold">2.</span> Your email is optional. Want updates? Leave it. Don't? Leave it blank. You're still welcome here either way.</p>
              <p><span className="text-amber-400 font-bold">3.</span> If an elected official ever asks whether Black men in their district are paying attention — we give them a number, not a list. A headcount, not identities. That's it.</p>
              <p><span className="text-amber-400 font-bold">4.</span> This is not surveillance. We're not tracking you. We're not building profiles. This is a peaceful, lawful, transparent effort to help regular people get the accountability we've been denied for generations.</p>
              <p><span className="text-amber-400 font-bold">5.</span> If anything feels off — ask. Push back. Challenge it. You deserve straight answers. You do not need to agree with PHIERS to participate.</p>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Only engage when you feel fully comfortable with what we're doing and why.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              And if you're never comfortable — that's okay too. This only works if it's real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowTrustModal(false)}
                className="inline-block bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-semibold py-3 px-8 rounded-lg transition whitespace-nowrap text-sm sm:text-base"
              >
                Not yet
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-lg transition text-center whitespace-nowrap text-sm sm:text-base"
              >
                I'm ready — ask me →
              </a>
            </div>
          </div>
        </div>
      )}

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

      {/* VIDEO HERO */}
      <div id="video-section" className="mt-4">
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

      {/* Spacer after video */}
      <div className="h-10 md:h-16" />

      {/* HERO TITLE */}
      <div className="text-center pt-2 md:pt-4 pb-1">
        <p className="text-gray-500 text-[10px] sm:text-xs tracking-[0.25em] uppercase mt-8 mb-1">
          Gateway to the PHIERS Trilogy
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-white tracking-tight leading-[1.1]">
          FBA Men... Welcome
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
        <p className="text-gray-400 text-lg md:text-xl">
          We learned something from that.

          Power doesn't come from shouting louder.
          It comes from enough disciplined people moving together.
        </p>
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
          <p className="text-green-400 text-lg md:text-xl font-semibold mt-8">
            And it doesn't start with millions.
            It starts with the first fifteen hundred.
          </p>
          <p className="text-green-400 text-lg md:text-xl font-semibold mt-2">
            There are three doors.
          </p>
          <p className="text-gray-400 text-sm mt-3">
            Choose the one that speaks to you.
          </p>
          <p className="text-gray-500 text-xs mt-2 italic">
            No wrong door.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          
          {/* DOOR 1 — PROPHECY -> For_Black_Men */}
          <a
            href="/Prophecy/For_Black_Men"
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

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm mt-16">
        <p>A gift from Foundational Black American men to humanity. Built by Black men.</p>
        <p>
          <a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            PHIERS.org →
          </a>
        </p>
        <p className="mt-3 text-gray-600 text-xs">Participation is voluntary. PHIERS is a peaceful civic engagement effort.</p>
      </footer>
    </div>
  );
}

// FILE: app/Prophecy/page.tsx