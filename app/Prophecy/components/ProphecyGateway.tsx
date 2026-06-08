// FILE: app/Prophecy/components/ProphecyGateway.tsx
// VERSION: GATEWAY-FINAL — Full gateway modal containing all pre-prophecy content

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Props = {
  onSelectProphecy: () => void;
};

export default function ProphecyGateway({ onSelectProphecy }: Props) {
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-sm overflow-y-auto p-6 flex justify-center">
      <div className="max-w-3xl w-full pb-20">

        {/* VIDEO */}
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
              >
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://img.youtube.com/vi/GwfhH8yDZQo/maxresdefault.jpg")',
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
                allowFullScreen
              />
            )}
          </div>
        </div>

        <div className="h-10 md:h-16" />

        {/* HERO TITLE */}
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

        <div className="text-center mt-2 mb-2">
          <p className="text-gray-400/60 text-[9px] sm:text-xs italic tracking-wide">
            Let that land.
          </p>
        </div>

        {/* INTRO */}
        <div className="text-center mt-24 md:mt-32 mb-10 px-6">
          <h3 className="text-[clamp(2.2rem,8vw,3.5rem)] leading-[1.05] font-light text-gray-200 italic">
            Take a knee for a minute.
          </h3>
          <div className="mt-8 space-y-3 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
            <p>We've been carrying weight a long time.</p>
            <p>Nobody's coming to save us.</p>
          </div>
        </div>

        {/* THREE DOORS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          {/* Door 1 */}
          <button
            onClick={onSelectProphecy}
            className="bg-[#0a1628]/80 border-2 border-green-400/40 rounded-xl p-6 text-center hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center">
              <img src="/images/trilogy/Prophecy_Eye.png" className="w-12 h-12 mb-3 opacity-90" />
              <div className="text-green-400 text-xl font-black tracking-wide">THE PROPHECY</div>
              <div className="text-gray-400 text-sm mt-2">Why we're here</div>
              <div className="text-gray-500 text-xs mt-1 opacity-0 group-hover:opacity-100 transition">
                begin the journey →
              </div>
            </div>
          </button>

          {/* Door 2 */}
          <a
            href="/Prophecy/movement"
            className="bg-[#0a1628]/80 border-2 border-green-400/40 rounded-xl p-6 text-center hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300 group block"
          >
            <div className="flex flex-col items-center">
              <img src="/images/trilogy/Movement_Phalanx.png" className="w-12 h-12 mb-3 opacity-90" />
              <div className="text-green-400 text-xl font-black tracking-wide">THE MOVEMENT</div>
              <div className="text-gray-400 text-sm mt-2">For us. By us.</div>
              <div className="text-gray-500 text-xs mt-1 opacity-0 group-hover:opacity-100 transition">
                enter →
              </div>
            </div>
          </a>

          {/* Door 3 */}
          <a
            href="https://phiers.org"
            target="_blank"
            className="bg-[#0a1628]/80 border-2 border-green-400/40 rounded-xl p-6 text-center hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300 group block"
          >
            <div className="flex flex-col items-center">
              <img src="/images/trilogy/BW_PHIERS_Logo_NO_Words.png" className="w-12 h-12 mb-3 opacity-90" />
              <div className="text-green-400 text-xl font-black tracking-wide">THE LEVERAGE</div>
              <div className="text-gray-400 text-sm mt-2">How power works</div>
              <div className="text-gray-500 text-xs mt-1 opacity-0 group-hover:opacity-100 transition">
                visit phiers.org →
              </div>
            </div>
          </a>

        </div>

        <p className="text-gray-500 text-xs text-center mt-10">
          No wrong choice. You can always explore the others later.
        </p>

      </div>
    </div>
  );
}


// FILE: app/Prophecy/components/ProphecyGateway.tsx