// FILE: app/Prophecy/leverage/page.tsx
// VERSION: 5.0.0 – Full rewrite with components, petition/survey reference, no subtitle prop

'use client';

import ImageThumbnail from '../components/ImageThumbnail';
import Accordion from '../components/Accordion';
import StatCard from '../components/StatCard';
import CTASection from '../components/CTASection';
import Link from 'next/link';

export default function LeveragePage() {
  return (
    <>
      <div className="sticky-header">
        <a href="https://phiers.org" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/PHIERS_Logo_BW.png"
            alt="PHIERS"
            className="w-14 h-auto md:w-16 opacity-60 hover:opacity-80 transition"
          />
        </a>
      </div>
      <div className="sticky-header-offset min-h-screen bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-12">

          {/* Hero thumbnail */}
          <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
            <ImageThumbnail src="/images/trilogy/leverage-hero.jpg" alt="People at a town hall, district map" className="md:w-1/3" />
            <div className="flex-1">
              <p className="text-xl font-semibold">You are not powerless.</p>
              <p className="text-lg text-gray-700 mt-2">Real leverage starts where real power lives: <strong>the district</strong>.</p>
            </div>
          </div>

          {/* Opening section */}
          <div className="mb-12">
            <p className="text-gray-800 leading-relaxed">This isn't about parties. Or candidates.</p>
            <p className="text-gray-800 leading-relaxed mt-4">It's about the people who already hold power over your life — and what happens when they know you're organized, watching, and not going anywhere.</p>
            <p className="text-gray-800 leading-relaxed mt-4">Redistricting, voting laws, regulations — all decided at the state level. Policies that determine whether your family survives the next decade: state level.</p>
            <p className="text-gray-800 leading-relaxed mt-4">Representatives make those decisions. They only fear one thing: losing their seat.</p>
            <p className="text-gray-800 leading-relaxed mt-4">The petition and survey tell Congress exactly what we demand — by district, with names attached. Primary threats are real. Investigations are real. Accountability is real.</p>
            <p className="text-black font-bold text-xl mt-4">That is leverage. Peaceful, lawful democracy when the people mean it.</p>
            <p className="text-gray-800 leading-relaxed mt-4"><strong>The PHIERS petition and survey are how we find those 1,500 people in every district — and how we make sure every representative knows we're watching.</strong></p>
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
            <Accordion triggerLabel="Why does 1,500 matter?">
              <p>Most people are taught that ordinary citizens have no real influence. That's exactly what they want you to believe.</p>
              <p className="mt-2">The truth: small, organized, coordinated blocs of constituents create outsized political power at the district level. Community organizers have known this for generations.</p>
              <p className="mt-2">Representatives don't fear random anger. They fear organized people who show up — at primaries, town halls, the polls, and in the public record.</p>
              <p className="mt-2">1,500 aligned constituents in a single congressional district can flip a primary, force public accountability, and make a sitting representative's career genuinely uncertain before election day.</p>
              <p className="mt-2">The full architecture lives at PHIERS.org. Short version: organized people are the leverage Congress cannot ignore.</p>
            </Accordion>
          </div>

          {/* CLOSING */}
          <div className="bg-black text-white p-8 rounded-lg my-12 text-center">
            <p className="text-xl leading-relaxed">We built this.</p>
            <p className="text-gray-300 mt-4">Without asking permission. Without waiting for funding. Without their approval.</p>
            <p className="text-gray-300 mt-2">Black men built a solution that will benefit every ignored, unheard constituency in this country — not because we were asked, but because we could see clearly what others refused to look at.</p>
            <p className="text-gray-300 mt-2">That is what happens when you survive what we survived. You learn the game. You see the structure. You build the answer.</p>
            <p className="text-white font-bold text-xl mt-4">That is not coincidence. That is prophecy.</p>
          </div>

          <CTASection href="https://phiers.org" label="→ Enter PHIERS – The Full Architecture" />

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
    </>
  );
}
// FILE: app/Prophecy/leverage/page.tsx