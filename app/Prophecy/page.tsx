// FILE: app/Prophecy/page.tsx
// VERSION: 5.0.0 – Full rewrite with components, hero image, expanded accordion, unique value

'use client';

import Link from 'next/link';
import { useState } from 'react';
// import removed

export default function ProphecyPage() {
  const [invitationOpen, setInvitationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
        {/* Hero Image */}
        <div className="w-full bg-black animate-fadeInSlow">
          <img
            src="/images/trilogy/You_Are_Not_Powerless_Bro.jpg"
            alt="You are not powerless"
            className="w-full object-cover min-h-[40vh] md:min-h-[50vh]"
            fetchPriority="high"
          />
        </div>

        {/* Opening lines */}
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <p className="text-2xl md:text-3xl font-bold text-black">You are not alone.</p>
        </div>

        {/* Invitation section */}
        <div className="max-w-3xl mx-auto px-6 py-8 bg-white">
          <p className="text-gray-800 text-lg leading-relaxed">
            This space was built for Black men.<br />
            Not to perform. Not to protest. Not to explain ourselves to anyone.<br />
            To remember. To see clearly. To move with purpose.
          </p>
          <p className="text-gray-600 mt-4">
            If this is your lived experience — you belong here.<br />
            If it isn't — read with care and respect.
          </p>
        </div>

        {/* Prophecy section */}
        <div className="max-w-3xl mx-auto px-6 py-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            Four hundred years.<br />
            That was the word.<br />
            A people taken to a foreign land. Enslaved. Scattered. Stripped of name, language, and inheritance. Told they were nothing. Treated as property. Blamed for surviving.
          </p>
          <div className="italic text-gray-700 border-l-4 border-gray-400 pl-4 my-6">
            <p>“Know certainly that your descendants will be strangers in a land that is not theirs, and will serve them, and they will afflict them four hundred years… and afterward they shall come out with great substance.”</p>
            <p className="text-sm text-gray-500 mt-2">— Genesis 15:13–14</p>
          </div>

          {/* 400 Years: Sentence Served image – full width, darkened edges, gentle fade in */}
          <div className="relative my-8 -mx-6 md:mx-0 animate-fadeInSlow">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/trilogy/400-years-prophesy_sentence-served.jpg"
                alt="400 Years: Sentence Served – a chain breaking, sparks flying"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Edge darkening overlay */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-3 uppercase tracking-wide">The prophecy fulfilled.</p>
          </div>

          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            The sentence is served. Now the work begins.<br />
            This is not the end of our story, though.<br />
            This is the beginning of our response.
          </p>
        </div>

        {/* Pull Quote */}
        <div className="max-w-3xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-800 italic text-xl">
            The last becoming first doesn't happen by accident.<br />
            It happens because those who survived the fire<br />
            learned something the comfortable never had to learn.<br />
            We learned the game.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            — As it is written: “The last will be first, and the first last.” (Matthew 20:16)
          </p>
        </div>

        {/* Accordion with expanded lived experiences */}
        <div className="max-w-3xl mx-auto px-6 py-8">
          <button
            onClick={() => setInvitationOpen(!invitationOpen)}
            className="text-gray-500 text-sm uppercase tracking-wider hover:text-black transition flex items-center gap-2"
          >
            {invitationOpen ? '−' : '+'} What we've been carrying
          </button>
          {invitationOpen && (
            <div className="mt-4 p-6 bg-gray-100 rounded-lg text-gray-800 text-base leading-relaxed space-y-3">
              <p>The Voting Rights Act — won with blood on the Edmund Pettus Bridge — gutted by the Supreme Court in 2013. Within 24 hours, states were redrawing maps to erase Black representation.</p>
              <p>The school-to-prison pipeline targeting Black boys before they're teenagers. Same behavior. Different punishment. Documented.</p>
              <p>Convict leasing — slavery by another name — ran in most Southern states until 1941. Nearly 80 years after emancipation.</p>
              <p>Redlining. Federal policy that blocked Black families from the housing wealth that built the white middle class. By design.</p>
              <p>The GI Bill. Black veterans came home from WWII and found the benefits administered by local officials who refused to give them to Black men. By design.</p>
              <p><strong>The crack epidemic and the war on drugs</strong> — engineered to criminalize us, destroy our families, and lock us away for generations. Mass incarceration was the sequel.</p>
              <p><strong>Kicked out of our own homes</strong> — tossed from the marital house, treated as disposable fathers, blamed for the very structures collapsing around us.</p>
              <p><strong>Scapegoated and hated</strong> — by people who should have been allies. Pushed aside, demonized, made into the face of every problem while being excluded from every solution.</p>
              <p><strong>Straight Black men</strong> — deemed by a gynocratic, misandric society to be a cancer on humanity. Not because of what we did. Because we exist. Because we won't disappear.</p>
              <p>Blamed for everything. Credited for nothing. Still here. Still building.</p>
            </div>
          )}
        </div>

        {/* Unique value statement */}
        <div className="max-w-3xl mx-auto px-6 py-4 text-center">
          <p className="text-gray-700 text-lg leading-relaxed italic">
            Despite all of that — the crack epidemic, the war on drugs, the kicked‑out doors, the scapegoating, the society that calls us a cancer —<br />
            <strong className="text-black not-italic">we continue to offer unique value that will outlast every attack.</strong><br />
            Not because we're perfect. Because we survived what they designed to break us. And we learned the game.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-6 py-8 text-center">
          <Link
            href="/Prophecy/movement"
            className="inline-block bg-black text-white font-bold text-xl py-4 px-12 rounded-full shadow-lg hover:bg-gray-800 transition"
          >
            → Enter the Trilogy
          </Link>
        </div>

        <footer className="border-t border-gray-200 mt-16 pt-8 pb-12 text-center text-gray-500 text-sm">
          <p>Built on PHIERS — Persevering. Hopeful. Innovative. Enduring. Resilient. Strategic.</p>
          <p className="mt-2">
            <a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
              PHIERS.org — The Full Architecture →
            </a>
          </p>
        </footer>
      </div>
  );
} 
// FILE: app/Prophecy/page.tsx