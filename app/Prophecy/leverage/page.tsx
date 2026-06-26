// FILE: app/Prophecy/leverage/page.tsx
// VERSION: 7.1.0 — Added arrival modal with Sankofa image, dark theme conversion

'use client';

import { useState, useEffect } from 'react';
import Accordion from '../components/Accordion';
import StatCard from '../components/StatCard';
import CTASection from '../components/CTASection';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LeveragePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
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
            <p className="text-amber-400 font-bold text-4xl sm:text-5xl tracking-wide mb-6">LEVERAGE</p>
            <div className="max-w-md mx-auto mb-8">
              <img
                src="/images/trilogy/hand-on-the-lever.jpg"
                alt="A hand gripping the lever, mid-motion"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-2xl font-semibold text-white">You are not powerless.</p>
            <p className="text-lg text-gray-300 mt-3 max-w-xl mx-auto">You've felt it. The exhaustion of carrying weight nobody else carries. The quiet voice that says none of it matters anyway.</p>
            <p className="text-white text-xl font-semibold mt-4">That voice was lying to you.</p>
          </div>

          {/* Opening section */}
          <div className="mb-8 max-w-xl mx-auto text-center">
            <img
              src="/images/trilogy/sankofa-icon.png"
              alt="Sankofa — the bird looking back while moving forward"
              className="w-16 h-16 mx-auto mb-4 opacity-90"
            />
            <p className="text-amber-400/80 text-xs tracking-[0.25em] uppercase">Sankofa</p>
            <p className="text-gray-300 leading-[1.7] mt-2">Look back. Take what still works. Carry it forward.</p>
            <p className="text-gray-300 leading-[1.7] mt-2">That's not just how we heal. That's how we win.</p>
            <p className="text-gray-300 leading-[1.7] mt-4"><strong className="text-white">Umoja</strong> — unity. Not 1,500 different voices. One.</p>
            <p className="text-gray-300 leading-[1.7] mt-4">You've already seen the rest. <strong className="text-white">Kujichagulia</strong> — building without asking permission. <strong className="text-white">Ujima</strong> — the Fifteen Hundred, carrying it together. <strong className="text-white">Kuumba</strong> — building something new from what we inherited.</p>
            <p className="text-gray-300 leading-[1.7] mt-4">None of it was new when we started, and none of it stopped being ours.</p>
            <p className="text-amber-400 font-semibold leading-[1.7] mt-4">This is Sankofa, finished: looked back, took what works, carried it all the way here.</p>

            <div className="max-w-md mx-auto my-8">
              <img
                src="/images/trilogy/sankofa-arrival.jpg"
                alt="A man looking forward, the road behind him"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <p className="text-gray-300 leading-[1.7] mt-4">We didn't carry all of that just to feel good about it.</p>
            <p className="text-amber-400 font-semibold leading-[1.7] mt-2">We carried it to build something — a system, not a slogan. PHIERS.</p>
          </div>

          <div className="border-t border-amber-500/20 max-w-xs mx-auto mb-8" />

          <div className="text-center mb-12">
            <p className="text-amber-400/80 text-xs tracking-[0.25em] uppercase mb-2">— Sankofa, Carried Forward —</p>
            <p className="text-white font-bold text-2xl sm:text-3xl tracking-wide">The Next Chapter</p>
          </div>

          <div className="mb-12 max-w-xl mx-auto">
            <p className="text-gray-300 leading-[1.7] text-center">Real leverage doesn't start in Washington.</p>
            <p className="text-white font-semibold text-lg leading-[1.7] text-center mt-2">It starts inside your head, your heart — and your district.</p>
          </div>

          <div className="border-t border-gray-800 max-w-xs mx-auto mb-12" />

          <div className="space-y-8 mb-12 max-w-xl mx-auto">
            <div>
              <p className="text-amber-400 font-bold text-sm tracking-wide uppercase mb-2">Inside Your Head</p>
              <p className="text-gray-300 leading-[1.7]">Knowing the system isn't as untouchable as it wants you to believe.</p>
            </div>

            <div>
              <p className="text-amber-400 font-bold text-sm tracking-wide uppercase mb-2">Inside Your Heart</p>
              <p className="text-gray-300 leading-[1.7]">Refusing to settle for being ignored.</p>
            </div>

            <div>
              <p className="text-amber-400 font-bold text-sm tracking-wide uppercase mb-2">In Your District</p>
              <p className="text-gray-300 leading-[1.7]">Where the actual decisions get made — redistricting, voting laws, regulations, the policies that determine whether your family survives the next decade.</p>
              <div className="mt-6 rounded-lg overflow-hidden border border-gray-800">
                <img
                  src="/images/District_Accountability_Dashboard.jpg"
                  alt="District Accountability Dashboard showing verified signatures, endorsements, and progress toward the 1,500 threshold"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 max-w-xs mx-auto mb-12" />

          <div className="space-y-5 mb-12 max-w-xl mx-auto">
            <p className="text-gray-300 leading-[1.7]">This isn't about parties. Or candidates. It's about the people who already hold power over your life — and what happens the moment they know you're organized, watching, and not going anywhere.</p>
            <p className="text-gray-300 leading-[1.7]">Representatives make those decisions. They only fear one thing: losing their seat.</p>
            <p className="text-gray-300 leading-[1.7]">The petition and survey tell Congress exactly what we demand — by district, with names attached. Primary threats are real. Investigations are real. Accountability is real.</p>
          </div>

          <div className="bg-amber-500/5 border-l-4 border-amber-500/50 rounded-r-lg p-6 max-w-xl mx-auto mb-12">
            <p className="text-white font-bold text-xl leading-[1.5]">That is leverage. Peaceful, lawful democracy when the people mean it.</p>
            <p className="text-gray-300 leading-[1.7] mt-4"><strong className="text-white">The PHIERS petition and survey are how we find those 1,500 people in every district — and how we make sure every representative knows we're watching.</strong></p>
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
            <p className="text-amber-400/80 text-xs tracking-[0.25em] uppercase mb-3">Kujichagulia — Self-Determination</p>
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
            <Link href="/Prophecy/movement" className="hover:text-white transition">Back to The Movement</Link>
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
// VERSION: 7.1.0