// FILE: app/Prophecy/leverage/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LeveragePage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-5 py-12 md:py-20">

        {/* Hero */}
        <div className="mb-12">
          <img
            src="/images/trilogy/leverage-diagram.png"
            alt="Leverage diagram"
            className="w-full h-auto rounded-xl shadow-2xl mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">You are not powerless.</h1>
          <p className="text-gray-300 text-xl">Real leverage starts where real power is concentrated – at the district level.</p>
        </div>

        {/* Leverage explanation – same text as approved */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            This isn’t about parties. This isn’t about candidates. It’s about the people who already hold power over your life – and what happens when they know you are organized, watching, and unmovable.
          </p>
          <p>
            Redistricting is decided at the state level. Regulations are set at the state level. Policies that determine whether your family makes it through the next decade – all state level.
          </p>
          <p>
            Representatives make those decisions. And representatives only fear one thing: <span className="text-white font-semibold">losing their seat.</span>
          </p>
          <p>
            The petition and survey tell Congress exactly what we demand – in writing, by district, with names attached. Primary threats are real. Accountability is real.
          </p>
          <p className="text-white text-xl font-semibold">
            That is leverage. That is peaceful, lawful democracy when the people mean it.
          </p>
        </div>

        {/* 1,500 dropdown */}
        <div className="border-t border-gray-800 my-12 pt-8">
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-yellow-400">1,500 people.</div>
            <div className="text-2xl font-bold text-white">One district.</div>
            <div className="text-xl text-gray-300">Real leverage.</div>
          </div>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full text-left text-gray-400 text-sm uppercase tracking-wider hover:text-white transition flex items-center justify-between py-3 border-b border-gray-700"
          >
            <span>{dropdownOpen ? '−' : '+'} Why does 1,500 matter?</span>
          </button>
          {dropdownOpen && (
            <div className="mt-4 p-5 bg-white/5 border-l-4 border-yellow-400/50 rounded-r-lg text-gray-300 text-base leading-relaxed space-y-3">
              <p>Most people assume ordinary citizens have no real influence. That’s exactly what they want you to believe.</p>
              <p>Political researchers, organizers, and strategists – including work examined at institutions like Harvard – have shown for decades that small, organized, coordinated blocs of constituents create outsized political influence. Ralph Nader demonstrated it. Community organizers proved it.</p>
              <p>Representatives don’t fear noise. They fear organized people who show up – at primaries, at town halls, at the polls, and in the public record.</p>
              <p>1,500 aligned constituents in a single congressional district can flip a primary, elevate a challenger, force public accountability, and make a sitting representative’s career genuinely uncertain.</p>
              <p>The full architecture lives at PHIERS.org. But the short version is this: <span className="text-white font-semibold">the power of organized people is the leverage Congress cannot ignore.</span></p>
            </div>
          )}
        </div>

        {/* Closing */}
        <div className="border-t border-gray-800 my-12 pt-8 text-center space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            We built this. Without asking permission. Without waiting for funding. Without needing their approval.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Black men built a solution that will benefit every ignored, unheard, discarded constituency in this country – not because we were asked, but because we could see what others refused to.
          </p>
          <p className="text-white text-xl font-semibold">That is not coincidence. That is prophecy.</p>
        </div>

        <div className="text-center my-12">
          <a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition">
            → Go to PHIERS.org – The Full Architecture
          </a>
        </div>

        <div className="text-center text-gray-500 text-sm space-x-4">
          <Link href="/Prophecy/trilogy" className="hover:text-white transition">Return to Trilogy</Link>
          <span>·</span>
          <Link href="/Prophecy/trilogy#unforgettable" className="hover:text-white transition">UNFORGETTABLE</Link>
          <span>·</span>
          <Link href="/Prophecy/trilogy#unbreakable" className="hover:text-white transition">UNBREAKABLE</Link>
          <span>·</span>
          <Link href="/Prophecy/trilogy#unstoppable" className="hover:text-white transition">UNSTOPPABLE</Link>
        </div>

        <footer className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>Built on PHIERS — Persevering. Hopeful. Innovative. Enduring. Resilient. Strategic.</p>
          <p className="mt-2"><a href="https://phiers.org" className="hover:text-white transition">PHIERS.org →</a></p>
        </footer>
      </div>
    </div>
  );
}