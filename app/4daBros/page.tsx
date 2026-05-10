// FILE: app/4daBros/page.tsx
// VERSION: 2.2.0
// Homepage – clean hero image, scripture below, primary path to Trilogy

'use client';

import Link from 'next/link';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO — 400 Years Sentence Served (clean image, no overlay text) */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        <img
          src="/images/trilogy/400-years-prophesy_sentence-served.jpg"
          alt="American flag with broken chain symbolizing liberation after four hundred years"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Subtle dark gradient for cinematic depth (no text) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </div>

      {/* Scripture Block (beneath the image) */}
      <div className="max-w-3xl mx-auto px-5 py-12 text-center">
        <div className="text-yellow-400 text-sm tracking-wider mb-4">⭐ Genesis 15:13–14</div>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p className="italic">
            “And He said unto Abram, Know of a surety that thy seed shall be a stranger in a land that is not theirs, and shall serve them; and they shall afflict them four hundred years;
          </p>
          <p className="italic">
            And also that nation, whom they shall serve, will I judge: and afterward shall they come out with great substance.”
          </p>
        </div>
        <div className="mt-8 text-white/40 text-sm tracking-[0.25em] uppercase animate-pulse">
          ↓ Continue
        </div>
      </div>

      {/* Main content – primary entry to the Trilogy */}
      <div className="max-w-[800px] mx-auto px-5 py-12 md:py-16">

        {/* Glowing PHIERS Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-60 animate-pulse"></div>
            <img src="/images/PHIERS_Logo.png" alt="PHIERS" className="w-20 h-auto relative z-10" />
          </div>
        </div>

        {/* Primary CTA – begin the Trilogy (the contained experience) */}
        <div className="text-center mb-16">
          <Link
            href="/4daBros/trilogy"
            className="inline-block bg-white text-black font-bold text-xl py-4 px-12 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Begin the Trilogy
          </Link>
          <p className="text-gray-400 text-sm mt-3">A cinematic journey of restoration.</p>
        </div>

        {/* Secondary exploration cards (optional early access) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">
            Explore further
          </h2>
          <Card
            title="✊ A MESSAGE FOR BLACK AMERICA"
            description="Historical proof of Black capability, endurance, and leadership."
            link="https://phiers.org"
            external
          />
          <Card
            title="🌐 FIVE CRISES, ONE SOLUTION"
            description="Healthcare, corruption, voting rights, economic instability, war."
            link="https://phiersale.github.io/PHIERS-Concept/"
            external
          />
          <Card
            title="🏥 THE HEALTHCARE SOLUTION"
            description="The mechanism, the numbers, the cascade – proof of concept."
            link="https://phiersale.github.io/PHIERS-Concept/healthcare-proof.html"
            external
          />
        </div>

        {/* Early exit link to PHIERS.org (subtle, not primary) */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
            Visit PHIERS.org for the full movement →
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          This space is for us. Move through it with the same dignity you deserve.
        </div>
      </div>
    </div>
  );
}

function Card({ title, description, link, external }) {
  const commonClasses = "block p-6 bg-neutral-900 rounded-xl border border-gray-700 hover:border-gray-500 transition";
  const content = (
    <>
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </>
  );
  if (external) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={commonClasses}>
        {content}
      </a>
    );
  }
  return (
    <Link href={link} className={commonClasses}>
      {content}
    </Link>
  );
}

// END FILE: app/4daBros/page.tsx