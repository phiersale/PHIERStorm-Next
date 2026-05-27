// FILE: app/zoom/page.tsx
// VERSION: 1.2 – Video embed fixed

'use client';

import { useState, useEffect } from 'react';

export default function PublicZoomPage() {
  const [videoStarted, setVideoStarted] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    footer: false,
  });

  // Show sections one by one after thumbnail loads
  useEffect(() => {
    if (!textVisible) return;

    const sections = ['section1', 'section2', 'section3', 'section4', 'section5', 'footer'];
    sections.forEach((section, index) => {
      setTimeout(() => {
        setVisibleSections(prev => ({ ...prev, [section]: true }));
      }, index * 500); // 0.5s delay between each section
    });
  }, [textVisible]);

  // Fallback: show text after 2 seconds even if onLoad doesn't fire
  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
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
        <div className="text-center mt-8 mb-12">
          <p className="uppercase tracking-[0.35em] text-green-400 text-sm mb-4">
            JOIN THE ZOOM
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Don’t take our word for it.<br />
            Test the plan.
          </h1>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            This is not a rally. This is a working session for people who want to build solutions that work for everyone.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Watch this first. Then decide whether to step in.
          </p>
        </div>

        {/* VIDEO – thumbnail loads first */}
        <div className="mt-8">
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl relative cursor-pointer group">
            {!videoStarted ? (
              <button
                type="button"
                onClick={() => setVideoStarted(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label="Play Zoom invitation video"
              >
                <img
                  src="https://img.youtube.com/vi/2i8zcMZoTZk/maxresdefault.jpg"
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                  onLoad={() => setTextVisible(true)}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/70 flex items-center justify-center border-2 border-white/60 group-hover:scale-110 transition shadow-lg">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                  <span className="text-gray-300 text-xs md:text-sm tracking-wide mt-3 opacity-80">
                    tap to play
                  </span>
                </div>
              </button>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2i8zcMZoTZk?autoplay=1"
                title="Zoom call invitation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Rest of the page – fades in after thumbnail loads */}
        <div
          id="section1"
          className="mt-16 space-y-5 text-center text-gray-300 transition-opacity duration-500"
          style={{ opacity: visibleSections.section1 ? 1 : 0 }}
        >
          <p>Some of you are coming to this with your arms crossed.<br />Good. You may be exactly who needs to be in the room.</p>
          <p>This is a working session — not a performance.</p>
          <p>Bring your questions. Bring your doubts. Bring your best shot.</p>
          <p>If the logic breaks, point to it. If the numbers don’t work, bring your receipts. If there’s a flaw, put it on the table.</p>
          <p className="text-white font-semibold text-xl">Pressure sharpens solutions.</p>
          <p>Better to test the structure in the room than talk outside about what should have been done.</p>
        </div>

        <div
          id="section2"
          className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 mt-16 transition-opacity duration-500"
          style={{ opacity: visibleSections.section2 ? 1 : 0 }}
        >
          <p className="text-green-400 text-sm uppercase tracking-[0.3em] mb-6 text-center">WHAT YOU'LL GET</p>
          <div className="space-y-3 text-gray-300">
            <p>— The PHIERS mechanism — pressure, leverage, 1,500 per district</p>
            <p>— Receipts from a real healthcare project built under pressure — not a whiteboard exercise</p>
            <p>— The real‑time threats — VRA gutted, redistricting, economic abandonment — and how this structure answers them</p>
            <p>— Direct Q&A — no filter, no deflection, no script</p>
          </div>
        </div>

        <div
          id="section3"
          className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 mt-10 transition-opacity duration-500"
          style={{ opacity: visibleSections.section3 ? 1 : 0 }}
        >
          <p className="text-green-400 text-sm uppercase tracking-[0.3em] mb-4 text-center">WHAT WE ASK</p>
          <p className="text-gray-300 text-center">Come serious.<br /><br />If the plan holds, help build it.<br />If it needs sharpening, sharpen it.<br /><br />Either way — move the work forward.</p>
        </div>

        <div
          id="section4"
          className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 mt-16 transition-opacity duration-500"
          style={{ opacity: visibleSections.section4 ? 1 : 0 }}
        >
          <p className="text-green-400 text-xs uppercase tracking-[0.35em] mb-2">
            LIVE DISCUSSION · OPEN Q&A
          </p>
          <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
            A public working session on the PHIERS framework —<br />
            open to anyone who wants to understand the structure, ask questions, or examine the model directly.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The room is open. The plan is on the table.</h2>
          <p className="text-gray-300 mb-6">If you want to see how it works — and test it for yourself — step in.</p>
          <a
            href="https://forms.gle/kqAdfo2dohDaCLuR8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold text-lg md:text-xl py-3.5 px-10 rounded-full hover:bg-gray-200 transition shadow-lg w-full sm:w-auto mx-auto"
          >
            → Join the Zoom
          </a>
          <p className="text-gray-400 text-sm mt-4 italic">
            You’ll receive the date and time by email.
          </p>
        </div>
        <div
          id="section5"
          className="text-center mt-16 mb-20 transition-opacity duration-500"
          style={{ opacity: visibleSections.section5 ? 1 : 0 }}
        >
          <p className="text-xl text-green-400 font-semibold">If you’re serious, step into the room.</p>
        </div>

        <footer
          id="footer"
          className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm transition-opacity duration-500"
          style={{ opacity: visibleSections.footer ? 1 : 0 }}
        >
          <p>Built to solve. For everyone this country has failed to protect.</p>
          <p className="mt-2">PHIERS.org →</p>
        </footer>
      </div>
    </div>
  );
}

// FILE: app/zoom/page.tsx