// FILE: app/4daBros/page.tsx
// VERSION: 3.0.0 – Voice‑first, collapsible context, Start Here cards, footer credit

'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Homepage() {
  const [contextOpen, setContextOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* SECTION 1 – OPENING STATEMENT (FULL WIDTH, VOICE FIRST) */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          For Da Bros
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          A private space for Black men navigating pressure, uncertainty, responsibility,
          and the feeling that our voice is shrinking in the places shaping the future.
        </p>
        <p className="text-gray-400 mt-6 text-lg">
          This space is not for performance.<br />
          Not for headlines.<br />
          Not for outrage.<br />
          Not for algorithms.
        </p>
        <p className="text-white text-xl font-semibold mt-8">
          It’s for us.
        </p>
        <p className="text-gray-400 mt-4 italic">
          Because some conversations hit different when you know people already understand
          the weight without needing a footnote.
        </p>
      </div>

      {/* SECTION 2 – COLLAPSIBLE CONTEXT / DISCLAIMER */}
      <div className="max-w-3xl mx-auto px-6 mb-16">
        <button
          onClick={() => setContextOpen(!contextOpen)}
          className="text-gray-400 text-sm uppercase tracking-wider hover:text-white transition flex items-center gap-2"
        >
          {contextOpen ? '−' : '+'} Why this space exists
        </button>
        {contextOpen && (
          <div className="mt-4 p-6 bg-white/5 border-l-4 border-white/20 rounded-r-lg text-gray-300 text-base leading-relaxed space-y-3">
            <p>
              This space speaks directly to Black men because our experiences with pressure, representation,
              erasure, responsibility, and resilience are often discussed publicly but processed privately.
            </p>
            <p>
              The goal is not separation from others. The goal is clarity with each other.
            </p>
            <p>
              This space exists to encourage reflection, dignity, civic participation, constructive action,
              and long‑term thinking during a moment many people experience as uncertain and destabilizing.
            </p>
            <p>
              Some language here may feel more direct than what appears on public‑facing platforms because
              this space was built for honest conversation among people with shared lived experience.
            </p>
            <p className="text-gray-400">
              The larger PHIERS mission remains focused on solutions that strengthen participation,
              stability, representation, and opportunity for everyone.
            </p>
          </div>
        )}
      </div>

      {/* SECTION 3 – START HERE */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-semibold text-white mb-4">Start Here</h2>
        <p className="text-gray-400 mb-8 text-lg">
          This space unfolds in stages. Not because everybody’s journey is the same —
          but because some things need to be felt before they can be built.
        </p>

        <div className="space-y-6">
          {/* TRILOGY CARD */}
          <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
            <h3 className="text-2xl font-bold text-white mb-2">TRILOGY</h3>
            <p className="text-gray-300 mb-4">
              A message to Black men about memory, pressure, dignity, survival, and hope.
            </p>
            <Link
              href="/4daBros/trilogy"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-6 rounded-full transition"
            >
              Enter Trilogy →
            </Link>
          </div>

          {/* LEVERAGE CARD */}
          <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
            <h3 className="text-2xl font-bold text-white mb-2">LEVERAGE</h3>
            <p className="text-gray-300 mb-4">
              How collective civic participation becomes lawful, peaceful influence
              that can shape representation and outcomes. What comes after despair.
            </p>
            <Link
              href="/4daBros/leverage"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-6 rounded-full transition"
            >
              Explore Leverage →
            </Link>
          </div>

          {/* LEGACY CARD */}
          <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
            <h3 className="text-2xl font-bold text-white mb-2">LEGACY</h3>
            <p className="text-gray-300 mb-4">
              What remains when we refuse to disappear, disengage, or stop building for the future.
              Why this work matters long term.
            </p>
            <Link
              href="/4daBros/legacy"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-6 rounded-full transition"
            >
              Explore Legacy →
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER – Built on PHIERS */}
      <div className="border-t border-gray-800 mt-20 pt-8 pb-12 text-center text-gray-500 text-sm">
        <p>Built on PHIERS — Persevering. Hopeful. Innovative. Enduring. Resilient. Steady under pressure.</p>
        <p className="mt-2">
          <a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            Go to PHIERS.org →
          </a>
        </p>
      </div>
    </div>
  );
}

// FILE: app/4daBros/page.tsx