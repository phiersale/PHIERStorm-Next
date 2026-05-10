// FILE: app/4daBros/trilogy/page.tsx
// VERSION: 2.1.0
// Cinematic sequence – Collapse → Mechanism → Rebirth → Invitation

'use client';

import Link from 'next/link';
import { ImageSection } from '@/components/ImageSection';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Fifteen Hundred image component (click‑to‑enlarge)
const FifteenHundredImage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto my-12 w-[80%] md:w-[50%] cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src="/images/trilogy/Group_of_BlackMen_Talking.jpg"
          alt="Black professionals lifting a platform that supports a podium"
          className="rounded-lg shadow-lg object-cover w-full h-auto"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg" />
        <p className="absolute bottom-4 right-5 text-white/55 text-sm md:text-base font-medium tracking-[0.18em] uppercase">
          Fifteen Hundred Lift One Seat.
        </p>
      </motion.div>
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/trilogy/Group_of_BlackMen_Talking.jpg"
            alt="Collective leverage"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.5 }}
  >
    {children}
  </motion.div>
);

export default function TrilogyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0]">
      <div className="max-w-[800px] mx-auto px-5 py-12 md:py-20">

        {/* Glowing PHIERS Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-60 animate-pulse"></div>
            <img src="/images/PHIERS_Logo.png" alt="PHIERS" className="w-20 h-auto relative z-10" />
          </div>
        </div>

        {/* Brief prophecy reminder */}
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-gray-400 italic max-w-2xl mx-auto">
              “And afterward they will come out with great substance.”
            </p>
          </div>
        </FadeIn>

        {/* Opening – Dear Black Man */}
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Dear Black Man. Dear Black Woman. Dear Black Family.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              They didn't break the system. They rebuilt it — without us in mind.
            </p>
            <p className="text-gray-400 mt-4">
              The Voting Rights Act has been gutted. Districts across the South have been redrawn to erase Black representation — deliberately, strategically, and without shame.
            </p>
            <p className="text-gray-400 mt-2">
              Both parties see the imbalance. Both parties are adjusting to it. Neither is fixing it.
            </p>
            <p className="text-white font-bold text-2xl mt-6">
              This is not the end of our story. This is the beginning of our answer.
            </p>
          </div>
        </FadeIn>

        {/* Historical continuity */}
        <FadeIn>
          <div className="my-12">
            <h2 className="text-2xl font-bold text-white mb-4">This moment is not new.</h2>
            <p className="text-gray-300 leading-relaxed">
              Greenwood burned. The 761st fought for a nation that wouldn't fight for them. The Tuskegee Airmen flew with excellence for an Air Force that doubted their humanity.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Every time they tried to erase us, we rebuilt.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              This time is no different — except this time, we're not just rebuilding for ourselves. We're building something the entire country needs, and we're the only ones who could see it clearly enough to build it.
            </p>
          </div>
        </FadeIn>

        {/* Historical grid */}
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <ImageSection src="/images/trilogy/tuskegee.jpg" alt="Tuskegee Airmen" aspectRatio="4/3" />
            <ImageSection src="/images/trilogy/761st.jpg" alt="761st Tank Battalion" aspectRatio="4/3" />
            <ImageSection src="/images/trilogy/greenwood.jpg" alt="Greenwood before 1921" aspectRatio="4/3" />
          </div>
        </FadeIn>

        {/* COLLAPSE – VRA image */}
        <ImageSection
          src="/images/trilogy/vra-collapse.png"
          alt="Cracked American flag revealing a ballot underneath"
          overlayText="The System Isn't Broken. It's Been Unbuilt."
          overlayPosition="top-left"
        />

        {/* MECHANISM – Why 1,500 works */}
        <FadeIn>
          <div className="my-12">
            <h2 className="text-2xl font-bold text-white mb-4">Why the 1,500 is the answer.</h2>
            <p className="text-gray-300 leading-relaxed">
              Here is what most people miss: <strong className="text-white">states control voting laws. States control redistricting.</strong> The attacks on our political power are not coming from Washington. They are coming from your state capitol.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              1,500 aligned people in a single congressional district can <strong>force meetings, shape primaries, hold incumbents accountable, and make a representative's seat feel genuinely at risk</strong> — before election day, at the level where the maps are drawn and the rules are written.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              PHIERS is not a response to Congress. PHIERS is a response to your statehouse — the real battlefield.
            </p>
            <p className="text-white font-semibold mt-4">
              The Fifteen Hundred was built for the exact level where power is now being concentrated: the states.
            </p>
          </div>
        </FadeIn>

        {/* Who built this */}
        <FadeIn>
          <div className="my-12">
            <h2 className="text-2xl font-bold text-white mb-4">Who built this.</h2>
            <p className="text-gray-300 leading-relaxed">Black men did.</p>
            <p className="text-gray-300 leading-relaxed mt-2">
              Not because anyone funded us. Not because anyone believed in us. Not because we were invited.
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              We built it because when every door is locked, you learn the architecture.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              We built a solution that will benefit rural white families, immigrants, the uninsured, the unheard — everyone this system has used up and discarded. <strong>We built it without asking for help from those who hate and oppress us.</strong> We built it without waiting for their approval.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              That is not a coincidence. The suffering was foretold. The judgment was promised.
            </p>
          </div>
        </FadeIn>

        {/* Fifteen Hundred image */}
        <FifteenHundredImage />

        {/* POSSIBILITY – Great Substance quote */}
        <FadeIn>
          <div className="my-16 text-center">
            <div className="text-4xl md:text-5xl font-bold text-white leading-tight">
              “And the people came out with great substance.”
            </div>
            <div className="text-gray-400 mt-4 text-lg">
              That line is the movement. Everything else is the explanation.
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="my-6">
            <p className="text-gray-300 leading-relaxed">
              FBAs built something that will benefit all of humanity. We did it ourselves. We did it without apology. And the world will be forced to see us not through stereotypes, not through fear — but through contribution, through discipline, through solutions.
            </p>
          </div>
        </FadeIn>

        {/* What PHIERS is */}
        <FadeIn>
          <div className="my-12">
            <h2 className="text-2xl font-bold text-white mb-4">What PHIERS is.</h2>
            <p className="text-xl font-bold text-yellow-400">Power Held In Every Representative's Seat.</p>
            <p className="text-gray-300 leading-relaxed mt-4">
              The problem has never been that we don't have a voice. The problem is that our voices are scattered — and scattered voices are easy to ignore.
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              1,500 aligned people per district. Organized. Coordinated. Unignorable.
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              District by district. Seat by seat. Across the entire country.
            </p>
          </div>
        </FadeIn>

        {/* REBIRTH triptych */}
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-4 my-12">
            <ImageSection src="/images/trilogy/rebirth1.jpg" alt="Civic renewal" aspectRatio="4/3" />
            <ImageSection src="/images/trilogy/rebirth2.jpg" alt="Community organizing" aspectRatio="4/3" />
            <div className="relative">
              <ImageSection
                src="/images/trilogy/rebirth3.jpg"
                alt="Three-panel collage: Greenwood, modern leader, rural family"
                aspectRatio="4/3"
                overlayText="The Reconstruction Begins With Those Forced To Survive The Collapse."
                overlayPosition="bottom-center"
              />
            </div>
          </div>
        </FadeIn>

        {/* ACTION – Decompression line + CTA buttons (Trilogy navigation) */}
        <FadeIn>
          <div className="my-20 text-center max-w-3xl mx-auto">
            <p className="text-white text-2xl md:text-4xl font-semibold leading-tight mb-4">
              Structure changes outcomes.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Choose where you want to continue.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Link href="/4daBros/unforgettable" className="bg-white text-black font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition text-center">
                UNFORGETTABLE
              </Link>
              <Link href="/4daBros/unstoppable" className="bg-white text-black font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition text-center">
                UNSTOPPABLE
              </Link>
              <Link href="/4daBros/unbreakable" className="bg-white text-black font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition text-center">
                UNBREAKABLE
              </Link>
            </div>
            <div>
              <Link href="/4daBros/leverage" className="inline-block bg-[#F5C542] text-black font-bold py-3 px-8 rounded-lg shadow-[0_0_20px_rgba(245,197,66,0.35)] hover:shadow-[0_0_30px_rgba(245,197,66,0.5)] transition text-lg">
                How 1,500 Signatures Actually Work →
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* FINAL INVITATION – after completing the Trilogy sequence */}
        <div className="my-16 text-center border-t border-gray-700 pt-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            The Sentence Is Over. The Work Begins.
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            You have walked through the collapse, the mechanism, and the rebirth. Now step into the full PHIERS movement — the architecture, the coalition, and the solution‑proper.
          </p>
          <a
            href="https://phiers.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Visit PHIERS.org for the Full Experience
          </a>
        </div>

        {/* Early‑exit link (already in sidebar, but repeated for convenience) */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
            Already ready? Go to PHIERS.org →
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

// END FILE: app/4daBros/trilogy/page.tsx