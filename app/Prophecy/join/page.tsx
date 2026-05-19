// FILE: app/Prophecy/join/page.tsx
// VERSION: 2.0 – Final V2 copy, rhythm, sharper challenge, clean CTA

'use client';

import Link from 'next/link';

export default function ZoomJoinPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* FLOATING SIGN UP BUTTON – translucent, fixed, top right */}
      <div className="fixed top-24 right-4 z-50 md:top-28 md:right-6">
        <Link
          href="/Prophecy/register"
          className="inline-block bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm md:text-base font-semibold py-2 px-4 rounded-full hover:bg-white/20 transition shadow-lg"
        >
          Sign up here →
        </Link>
      </div>

      {/* Header with logo (same as main site) */}
      <div className="text-center pt-8 pb-4">
        <div className="flex justify-center mb-4">
          <img
            src="/images/PHIERS_Logo_BW.png"
            alt="PHIERS Logo"
            className="w-24 h-auto md:w-32 opacity-80"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        {/* Hero – minimal threshold */}
        <div className="text-center mt-8 mb-12">
          <p className="uppercase tracking-[0.35em] text-green-400 text-sm mb-4">
            WATCH THIS FIRST
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Don’t take my word for it.<br />
            Test the plan.
          </h1>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            This is not a rally. This is a working session.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Watch this first. Then decide whether to step in.
          </p>
        </div>

        {/* Video – centered, full‑width on mobile */}
        <div className="mt-8">
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2i8zcMZoTZk"
              title="Zoom call invitation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Challenge / framing section – rhythmic, direct */}
        <div className="mt-16 space-y-5 text-center text-gray-300">
          <p>Some of you are coming to this with your arms crossed.<br />Good. You may be exactly who needs to be in the room.</p>
          <p>This is a working session — not a performance.</p>
          <p>
            Bring your questions.<br />
            Bring your doubts.<br />
            Bring your best shot.
          </p>
          <p>
            If the logic breaks, point to it.<br />
            If the numbers don’t work, bring your receipts.<br />
            If there’s a flaw, put it on the table.
          </p>
          <p className="text-white font-semibold text-xl">Iron sharpens iron.</p>
          <p>
            Better to test the structure in the room<br />
            than talk outside the room about what should have been done.
          </p>
        </div>

        {/* What you’ll get – clean dash bullets */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 mt-16">
          <p className="text-green-400 text-sm uppercase tracking-[0.3em] mb-6 text-center">
            WHAT YOU'LL GET
          </p>
          <div className="space-y-3 text-gray-300">
            <p>— The PHIERS mechanism — pressure, leverage, 1,500 per district</p>
            <p>— Receipts from a real healthcare project built under pressure — not a whiteboard exercise</p>
            <p>— The real‑time threats — VRA gutted, redistricting, economic abandonment — and how this structure answers them</p>
            <p>— Direct Q&A — no filter, no deflection, no script</p>
          </div>
        </div>

        {/* What I ask – compact card */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 mt-10">
          <p className="text-green-400 text-sm uppercase tracking-[0.3em] mb-4 text-center">
            WHAT I ASK
          </p>
          <p className="text-gray-300 text-center">
            Come serious.<br /><br />
            If the plan holds, help build it.<br />
            If it needs sharpening, sharpen it.<br /><br />
            Either way — move the work forward.
          </p>
        </div>

        {/* Primary CTA – chamber */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 md:p-10 mt-16 text-center">
          <p className="text-green-400 text-xs uppercase tracking-[0.35em] mb-2">
            LIVE DISCUSSION · OPEN Q&A · CONSTRUCTIVE CRITICISM WELCOME
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The plan is ready. The room is open.</h2>
          <p className="text-gray-300 mb-2">The time is soon. The Zoom is free.</p>
          <p className="text-gray-300 mb-6">If you’re serious enough to test it, step in.</p>
          <Link
            href="/Prophecy/register"
            className="inline-block bg-white text-black font-bold text-lg md:text-xl py-3.5 px-10 rounded-full hover:bg-gray-200 transition shadow-lg w-full sm:w-auto mx-auto"
          >
            → Join the Zoom
          </Link>
          <p className="text-gray-400 text-sm mt-4 italic">
            You’ll get the date and time by email when it’s scheduled.
          </p>
        </div>

        {/* Closing line – single beat */}
        <div className="text-center mt-16 mb-20">
          <p className="text-xl text-green-400 font-semibold">
            If you’re serious, step into the room.
          </p>
        </div>

        {/* Footer – minimal, same as main site */}
        <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
          <p>Built by Black men. For everyone this country has failed to protect.</p>
          <p className="mt-2">PHIERS.org →</p>
        </footer>
      </div>
    </div>
  );
}
// END OF FILE: app/Prophecy/join/page.tsx