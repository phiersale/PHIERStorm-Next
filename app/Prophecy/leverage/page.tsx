// FILE: app/Prophecy/leverage/page.tsx
// VERSION: 7.0.0 — Converted to dark theme to match site, removed broken image reference

'use client';

import { useState, useEffect } from 'react';
import Accordion from '../components/Accordion';
import StatCard from '../components/StatCard';
import CTASection from '../components/CTASection';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LeveragePage() {
  const [showArrival, setShowArrival] = useState(false);

  useEffect(() => {
    setShowArrival(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {showArrival && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowArrival(false);
          }}
        >
          <div className="relative max-w-md w-full bg-[#0a0a0a] border border-amber-500/40 rounded-2xl p-8 text-center shadow-2xl">
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">You made it this far</p>
            <h2 className="text-3xl font-bold text-white mb-4">Congratulations, Black Man.</h2>
            <p className="text-gray-300 leading-relaxed mb-6">This is where the reward for your effort resides.</p>
            <p className="text-5xl font-bold text-amber-400 mb-8">LEVERAGE</p>
            <button
              onClick={() => setShowArrival(false)}
              className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Claim it →
            </button>
          </div>
        </div>
      )}

      <div className="sticky-header">
        <a href="https://phiers.org" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/PHIERS_Logo_BW.png"
            alt="PHIERS"
            className="w-14 h-auto md:w-16 opacity-60 hover:opacity-80 transition"
          />
        </a>
      </div>
      <div className="sticky-header-offset min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="max-w-md mx-auto mb-8">
              <img
                src="/images/OUR_Lever_PHIERS_Can_Move_the_World.jpg"
                alt="PHIERS leverage artwork"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-2xl font-semibold text-white">You are not powerless.</p>
            <p className="text-lg text-gray-300 mt-3 max-w-xl mx-auto">You've felt it. The exhaustion of carrying weight nobody else carries. The quiet voice that says none of it matters anyway.</p>
            <p className="text-white text-xl font-semibold mt-4">That voice was lying to you.</p>
          </div>

          {/* Opening section */}
          <div className="mb-12">
            <p className="text-gray-300 leading-relaxed">Real leverage doesn't start in Washington. It starts inside your head, your heart — and your district.</p>
            <p className="text-gray-300 leading-relaxed mt-4">Inside your head: knowing the system isn't as untouchable as it wants you to believe.</p>
            <p className="text-gray-300 leading-relaxed mt-4">Inside your heart: refusing to settle for being ignored.</p>
            <p className="text-gray-300 leading-relaxed mt-4">And in your district: where the actual decisions get made — redistricting, voting laws, regulations, the policies that determine whether your family survives the next decade.</p>
            <p className="text-gray-300 leading-relaxed mt-4">This isn't about parties. Or candidates. It's about the people who already hold power over your life — and what happens the moment they know you're organized, watching, and not going anywhere.</p>
            <p className="text-gray-300 leading-relaxed mt-4">Representatives make those decisions. They only fear one thing: losing their seat.</p>
            <p className="text-gray-300 leading-relaxed mt-4">The petition and survey tell Congress exactly what we demand — by district, with names attached. Primary threats are real. Investigations are real. Accountability is real.</p>
            <p className="text-white font-bold text-xl mt-4">That is leverage. Peaceful, lawful democracy when the people mean it.</p>
            <p className="text-gray-300 leading-relaxed mt-4"><strong className="text-white">The PHIERS petition and survey are how we find those 1,500 people in every district — and how we make sure every representative knows we're watching.</strong></p>
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
              <p className="text-gray-300">Most people are taught that ordinary citizens have no real influence. That's exactly what they want you to believe.</p>
              <p className="mt-2 text-gray-300">The truth: small, organized, coordinated blocs of constituents create outsized political power at the district level. Community organizers have known this for generations.</p>
              <p className="mt-2 text-gray-300">Representatives don't fear random anger. They fear organized people who show up — at primaries, town halls, the polls, and in the public record.</p>
              <p className="mt-2 text-gray-300">1,500 aligned constituents in a single congressional district can flip a primary, force public accountability, and make a sitting representative's career genuinely uncertain before election day.</p>
              <p className="mt-2 text-gray-300">The full architecture lives at PHIERS.org. Short version: organized people are the leverage Congress cannot ignore.</p>
            </Accordion>
          </div>

          {/* CLOSING */}
          <div className="bg-[#0b0b0b] border border-gray-800 text-white p-8 rounded-lg my-12 text-center">
            <p className="text-xl leading-relaxed">We built this.</p>
            <p className="text-gray-300 mt-4">Without asking permission. Without waiting for funding. Without their approval.</p>
            <p className="text-gray-300 mt-2">Black men built a solution that will benefit every ignored, unheard constituency in this country — not because we were asked, but because we could see clearly what others refused to look at.</p>
            <p className="text-gray-300 mt-2">That is what happens when you survive what we survived. You learn the game. You see the structure. You build the answer.</p>
            <p className="text-white font-bold text-xl mt-4">That is not coincidence. That is prophecy.</p>
          </div>

          <div className="text-center max-w-xl mx-auto py-6">
            <p className="text-gray-400 text-base">You've seen what we built and why.</p>
            <p className="text-white text-lg font-semibold mt-2">Now it's time to move.</p>
          </div>

          <CTASection href="https://phiers.org" label="→ Enter PHIERStorm: The Movement" />

          {/* Secondary navigation */}
          <div className="text-center mt-6 text-gray-500 text-sm">
            <Link href="/Prophecy/trilogy" className="hover:text-white transition">Return to Trilogy</Link>
            <span className="mx-2">·</span>
            <Link href="/Prophecy/unforgettable" className="hover:text-white transition">UNFORGETTABLE</Link>
            <span className="mx-2">·</span>
            <Link href="/Prophecy/unbreakable" className="hover:text-white transition">UNBREAKABLE</Link>
            <span className="mx-2">·</span>
            <Link href="/Prophecy/unstoppable" className="hover:text-white transition">UNSTOPPABLE</Link>
          </div>

          <footer className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>Built on PHIERS — Persevering. Hopeful. Innovative. Enduring. Resilient. Strategic.</p>
          </footer>
        </div>
      </div>
    </motion.div>
  );
}

// FILE: app/Prophecy/leverage/page.tsx
// VERSION: 7.0.0