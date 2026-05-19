// FILE: app/zoom/page.tsx
// VERSION: 1.2 – Video embed fixed

export default function PublicZoomPage() {
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

        {/* VIDEO – fixed embed */}
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

        {/* Rest of the page remains unchanged */}
        <div className="mt-16 space-y-5 text-center text-gray-300">
          <p>Some of you are coming to this with your arms crossed.<br />Good. You may be exactly who needs to be in the room.</p>
          <p>This is a working session — not a performance.</p>
          <p>Bring your questions. Bring your doubts. Bring your best shot.</p>
          <p>If the logic breaks, point to it. If the numbers don’t work, bring your receipts. If there’s a flaw, put it on the table.</p>
          <p className="text-white font-semibold text-xl">Pressure sharpens solutions.</p>
          <p>Better to test the structure in the room than talk outside about what should have been done.</p>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 mt-16">
          <p className="text-green-400 text-sm uppercase tracking-[0.3em] mb-6 text-center">WHAT YOU'LL GET</p>
          <div className="space-y-3 text-gray-300">
            <p>— The PHIERS mechanism — pressure, leverage, 1,500 per district</p>
            <p>— Receipts from a real healthcare project built under pressure — not a whiteboard exercise</p>
            <p>— The real‑time threats — VRA gutted, redistricting, economic abandonment — and how this structure answers them</p>
            <p>— Direct Q&A — no filter, no deflection, no script</p>
          </div>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 mt-10">
          <p className="text-green-400 text-sm uppercase tracking-[0.3em] mb-4 text-center">WHAT WE ASK</p>
          <p className="text-gray-300 text-center">Come serious.<br /><br />If the plan holds, help build it.<br />If it needs sharpening, sharpen it.<br /><br />Either way — move the work forward.</p>
        </div>

         <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 md:p-10 mt-16 text-center">
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
        <div className="text-center mt-16 mb-20">
          <p className="text-xl text-green-400 font-semibold">If you’re serious, step into the room.</p>
        </div>

        <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
          <p>Built to solve. For everyone this country has failed to protect.</p>
          <p className="mt-2">PHIERS.org →</p>
        </footer>
      </div>
    </div>
  );
}