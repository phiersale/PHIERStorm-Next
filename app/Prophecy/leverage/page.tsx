// FILE: app/Prophecy/leverage/page.tsx
// VERSION: 2.0.0
// The Mechanism – concrete, district‑level leverage, 1,500 math

'use client';

import ImageThumbnail from '@/components/Prophecy/ImageThumbnail';
import Accordion from '@/components/Prophecy/Accordion';
import StatCard from '@/components/Prophecy/StatCard';
import PullQuote from '@/components/Prophecy/PullQuote';
import CTASection from '@/components/Prophecy/CTASection';
import Link from 'next/link';

export default function LeveragePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Hero thumbnail */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
          <ImageThumbnail
            src="/images/trilogy/leverage-hero.jpg"
            alt="People at a town hall, district map, or community organizing image"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-xl font-semibold">You are not powerless.</p>
            <p className="text-lg text-gray-700 mt-2">Real leverage starts where real power lives — at the district level.</p>
          </div>
        </div>

        {/* Opening section – always expanded */}
        <div className="mb-12">
          <p className="text-gray-800 leading-relaxed">
            This isn't about parties.<br />
            This isn't about candidates.<br />
            It's about the people who already hold power over your life — and what happens when they know you are organized, watching, and not going anywhere.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            Redistricting is decided at the state level.<br />
            Regulations are set at the state level.<br />
            Voting laws are written at the state level.<br />
            Policies that determine whether your family survives the next decade — all state level.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            Representatives make those decisions. And representatives only fear one thing: losing their seat.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            The petition and survey tell Congress exactly what we demand — in writing, by district, with names attached.<br />
            Primary threats are real. Investigations are real. Accountability is real.
          </p>
          <p className="text-black font-bold text-xl mt-4">
            That is leverage. That is peaceful, lawful democracy when the people mean it.
          </p>
        </div>

        <StatCard>
          1,500 people. One district.<br />
          A seat that goes from safe to uncertain.<br />
          A congressman who suddenly returns calls.<br />
          A vote that goes differently.<br />
          That's not theory. That's math.
        </StatCard>

        {/* Accordion – Why does 1,500 matter? */}
        <div className="my-12">
          <Accordion triggerLabel="▼ Why does 1,500 matter?">
            <p>Most people are taught that ordinary citizens have no real influence. That's exactly what they want you to believe.</p>
            <p className="mt-2">
              Political researchers and organizers — including work studied at institutions like Harvard — have shown for decades that small, organized, coordinated blocs of constituents create outsized political influence at the district level. Ralph Nader demonstrated it. Community organizers have lived it for generations.
            </p>
            <p className="mt-2">
              Representatives don't fear random anger. They fear organized people who show up — at primaries, at town halls, at the polls, and in the public record.
            </p>
            <p className="mt-2">
              1,500 aligned constituents in a single congressional district can flip a primary, elevate a challenger, force public accountability, and make a sitting representative's career genuinely uncertain before election day.
            </p>
            <p className="mt-2">
              The full architecture lives at PHIERS.org. Short version: organized people are the leverage Congress cannot ignore.
            </p>
          </Accordion>
        </div>

        {/* CLOSING – always expanded */}
        <div className="bg-black text-white p-8 rounded-lg my-12 text-center">
          <p className="text-xl leading-relaxed">We built this.</p>
          <p className="text-gray-300 mt-4">
            Without asking permission. Without waiting for funding. Without needing their approval.
          </p>
          <p className="text-gray-300 mt-2">
            Black men built a solution that will benefit every ignored, unheard, discarded constituency in this country — not because we were asked, but because we could see clearly what others refused to look at.
          </p>
          <p className="text-white font-bold text-xl mt-6">
            That is what happens when you survive what we survived. You learn the game. You see the structure. You build the answer.
          </p>
          <PullQuote>
            That is not coincidence.<br />
            That is prophecy.
          </PullQuote>
        </div>

        <CTASection href="https://phiers.org" label="→ Go to PHIERS.org — The Full Architecture" />

        {/* Secondary navigation */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          <Link href="/Prophecy/trilogy" className="hover:text-black">Return to Trilogy</Link>
          <span className="mx-2">·</span>
          <Link href="/Prophecy/unforgettable" className="hover:text-black">UNFORGETTABLE</Link>
          <span className="mx-2">·</span>
          <Link href="/Prophecy/unbreakable" className="hover:text-black">UNBREAKABLE</Link>
          <span className="mx-2">·</span>
          <Link href="/Prophecy/unstoppable" className="hover:text-black">UNSTOPPABLE</Link>
        </div>

        <footer className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>Built on PHIERS — Persevering. Hopeful. Innovative. Enduring. Resilient. Strategic.</p>
        </footer>
      </div>
    </div>
  );
}
// END FILE: app/Prophecy/leverage/page.tsx