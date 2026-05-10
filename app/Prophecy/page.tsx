// FILE: app/Prophecy/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProphecyPage() {
  const [invitationOpen, setInvitationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO – using your actual image */}
      <div className="relative w-full py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/images/trilogy/You_Are_Not_Powerless_Bro.jpg"
              alt="You are not powerless"
              className="w-full h-[45vh] md:h-[55vh] object-cover object-center"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* Hero text */}
      <div className="max-w-3xl mx-auto px-6 text-center mb-12">
        <p className="text-white text-3xl md:text-5xl font-semibold leading-tight">
          You are not alone.
        </p>
        <p className="text-gray-300 text-xl md:text-2xl mt-4">
          And you are not powerless.
        </p>
      </div>

      {/* Prophecy text (same as approved) */}
      <div className="max-w-3xl mx-auto px-6 py-8 border-l-4 border-white/20 bg-white/5 rounded-r-lg">
        <p className="text-gray-300 text-lg leading-relaxed">
          Four hundred years. That was the word.<br />
          A people taken to a foreign land – enslaved, scattered, stripped of name, language, and inheritance. Told they were nothing. Treated as less than human.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4 italic">
          “Know certainly that your descendants will be strangers in a land that is not theirs, and will serve them, and they will afflict them four hundred years… and afterward they shall come out with great substance.”<br />
          — Genesis 15:13–14
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          That time has run its course.<br />
          This is not the end of our story.<br />
          This is the beginning of our answer.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          The last becoming first doesn’t happen by accident.<br />
          It happens because those who survived the fire learned something the comfortable never had to learn.<br />
          <span className="text-white font-semibold">We learned the architecture.</span><br />
          And now we’re ready to use it.
        </p>
      </div>

      {/* Collapsible invitation */}
      <div className="max-w-3xl mx-auto px-6 my-12">
        <button
          onClick={() => setInvitationOpen(!invitationOpen)}
          className="text-gray-400 text-sm uppercase tracking-wider hover:text-white transition flex items-center gap-2"
        >
          {invitationOpen ? '−' : '+'} Why this space exists
        </button>
        {invitationOpen && (
          <div className="mt-4 p-6 bg-white/5 border-l-4 border-white/20 rounded-r-lg text-gray-300 text-base leading-relaxed space-y-3">
            <p>
              This space was built for Black men. Not to perform. Not to protest. Not to explain ourselves to anyone.
              To remember. To see clearly. To rise with intention.
            </p>
            <p>
              If this is your lived experience – you belong here.<br />
              If it isn’t – read with care and respect.
            </p>
          </div>
        )}
      </div>

      {/* Single CTA */}
      <div className="max-w-3xl mx-auto px-6 text-center pb-20">
        <Link
          href="/Prophecy/trilogy"
          className="inline-block bg-white text-black font-bold text-xl py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          → Enter the Trilogy
        </Link>
        <p className="text-gray-500 text-sm mt-3">A private journey. No pressure. Just clarity.</p>
      </div>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>Built on PHIERS — Persevering. Hopeful. Innovative. Enduring. Resilient. Strategic.</p>
        <p className="mt-2"><a href="https://phiers.org" className="hover:text-white transition">PHIERS.org – The Full Architecture →</a></p>
      </footer>
    </div>
  );
}

// FILE: app/Prophecy/page.tsx