// FILE: app/Prophecy/page.tsx
// VERSION: 2.0.0
// Doorway page – hero, invitation, prophecy, accordion, CTA

'use client';

import Link from 'next/link';
import ImageThumbnail from './components/ImageThumbnail';
import Accordion from './components/Accordion';
import PullQuote from './components/PullQuote';
import CTASection from './components/CTASection';

export default function ProphecyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Image – quiet, no overlay text */}
      <div className="w-full bg-black">
        <img
          src="/images/trilogy/You_Are_Not_Powerless_Bro.jpg"
          alt="Black man, quiet dignity, eyes forward"
          className="w-full object-cover max-h-[70vh]"
          fetchPriority="high"
        />
      </div>

      {/* Opening lines – first words on page */}
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <p className="text-2xl md:text-3xl font-bold text-black">You are not alone.</p>
      </div>

      {/* Invitation section – before Genesis */}
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
        <p className="text-gray-800 text-lg leading-relaxed mt-4">
          That time has run its course.<br />
          This is not the end of our story.<br />
          This is the beginning of our answer.
        </p>
      </div>

      <PullQuote>
        The last becoming first doesn't happen by accident.<br />
        It happens because those who survived the fire<br />
        learned something the comfortable never had to learn.<br />
        We learned the game.
      </PullQuote>

      {/* Accordion – What we've been carrying */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <Accordion
          triggerLabel="▼ What we've been carrying"
          subtleHint="You don't have to open this to understand the message. But you should know it's real."
        >
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-base">
            <li>The Voting Rights Act — won with blood on the Edmund Pettus Bridge — gutted by the Supreme Court in 2013. Within 24 hours, states were redrawing maps to erase Black representation.</li>
            <li>The school-to-prison pipeline targeting Black boys before they're teenagers. Same behavior. Different punishment. Documented.</li>
            <li>Convict leasing — slavery by another name — ran in most Southern states until 1941. Nearly 80 years after emancipation.</li>
            <li>Redlining. Federal policy that blocked Black families from the housing wealth that built the white middle class. By design.</li>
            <li>The GI Bill. Black veterans came home from WWII and found the benefits — college, housing loans, business funds — administered by local officials who refused to give them to Black men. By design.</li>
            <li>Blamed for everything. Credited for nothing. Still here. Still building.</li>
          </ul>
        </Accordion>
      </div>

      <CTASection href="/Prophecy/trilogy" label="→ Enter the Trilogy" />

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
// END FILE: app/Prophecy/page.tsx