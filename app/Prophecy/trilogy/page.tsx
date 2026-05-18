// FILE: app/Prophecy/trilogy/page.tsx
// VERSION: 15.0 – Dark background, no caption, added legacy image, consistent visual world

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

function Card({ title, subtitle, description, buttonLabel, link }: { title: string; subtitle: string; description: string; buttonLabel: string; link: string }) {
  return (
    <div className="flex-1 bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition flex flex-col">
      <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">{title}</h2>
      <p className="text-gray-400 text-sm uppercase tracking-wide mt-2">{subtitle}</p>
      <p className="text-gray-300 mt-3 text-base leading-relaxed flex-grow">{description}</p>
      <Link href={link} className="inline-block mt-5 text-white font-semibold underline hover:no-underline self-start">{buttonLabel}</Link>
    </div>
  );
}

export default function TrilogyLanding() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="bg-black text-white">
      <div className="sticky-header"><Link href="/Prophecy"><img src="/images/PHIERS_Logo_BW.png" alt="PHIERS" className="w-14 h-auto md:w-16 opacity-60 hover:opacity-80 transition cursor-pointer" /></Link></div>
      <div className="sticky-header-offset min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="uppercase tracking-widest text-gray-500 text-sm mb-8">The Trilogy</p>

          {/* Hero */}
          <div className="py-20 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">THIS IS WHERE THE FOG LIFTS.</h1>
            <p className="text-gray-400 text-xl mt-4">Not slogans. Not performance. Not recycled outrage.</p>
            <p className="text-white text-2xl font-semibold mt-6">Clarity.</p>
            <p className="text-gray-400 text-md mt-2 italic">This is not a history lesson. It’s preparation.</p>
            <div className="space-y-2 mt-6 text-lg text-gray-300">
              <p>Shows the pattern.</p>
              <p>Recovers the inheritance.</p>
              <p>Prepares the move.</p>
            </div>
            <p className="text-gray-300 mt-6">This is not about staying stuck in pain. <strong className="text-white">It's about seeing clearly enough to move forward.</strong></p>
          </div>

          {/* Accordion – short, plain language */}
          <div className="py-12 max-w-2xl mx-auto">
            <Accordion triggerLabel="THE RECORD THEY EXPECTED US TO FORGET">
              <div className="text-gray-300 text-lg leading-loose space-y-3">
                <p>Let's talk plain.</p>
                <p>Black men are not carrying this weight because we are weak. We are carrying it because this country has depended on what Black men build while too often treating Black men like we are disposable.</p>
                <p>And still, we rebuilt. After slavery — rebuilt. After Reconstruction — rebuilt. After Jim Crow — rebuilt. Every time.</p>
                <p>That matters. Because we are the continuation of men who kept building under pressure.</p>
              </div>
            </Accordion>
          </div>

          {/* Primary anchor image: Tuskegee Airmen – no caption */}
          <div className="py-12 max-w-3xl mx-auto">
            <Image src="/images/trilogy/tuskegee.jpg" alt="Tuskegee Airmen – disciplined excellence under pressure" width={1200} height={800} className="w-full rounded-xl object-cover" />
          </div>

          {/* Three Cards */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl mx-auto py-12">
            <Card title="UNFORGETTABLE" subtitle="See the pattern" description="What happened. What kept repeating. What confusion protected for too long. Not to stay trapped in the past. To finally see clearly." buttonLabel="Start Here →" link="/Prophecy/unforgettable" />
            <Card title="UNBREAKABLE" subtitle="Recover the inheritance" description="How pressure built discipline. How survival created insight. How strength survived even when support did not. Not to glorify struggle. To recognize what still lives in us." buttonLabel="Recover the Inheritance →" link="/Prophecy/unbreakable" />
            <Card title="UNSTOPPABLE" subtitle="Prepare the move" description="What changes when Black men stop moving alone. When clarity becomes structure. When structure becomes trust. When trust becomes momentum." buttonLabel="Prepare the Move →" link="/Prophecy/unstoppable" />
          </div>

          {/* Legacy image – warmth before healing */}
          <div className="max-w-2xl mx-auto my-12">
            <Image
              src="/images/trilogy/legacy-2.jpg"
              alt="Brotherhood and continuity"
              width={1000}
              height={700}
              className="w-full rounded-xl object-cover"
            />
          </div>

          {/* Healing frame */}
          <div className="py-16 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">HEALING IS PART OF THE SHIFT</h2>
            <p className="text-gray-300 text-lg">Some of what Black men carry should never have been ours to carry. But the fact that we are still here matters. Not just because of what happened to us. <strong className="text-white">Because of what survived in us.</strong></p>
            <p className="text-gray-300 text-lg mt-2">Healing is not retreat. It’s preparation.</p>
          </div>

          {/* Final Questions */}
          <div className="py-16 max-w-2xl mx-auto text-center border-t border-gray-800">
            <p className="text-gray-400 text-lg">Who stays clear when everybody else panics?</p>
            <p className="text-white text-xl font-bold mt-2">Who stays disciplined when others drift?</p>
            <p className="text-white text-xl font-bold mt-2">Who keeps building when support falls away?</p>
            <p className="text-gray-300 text-xl font-semibold mt-8">That is who this space is for.</p>
          </div>

          {/* Final CTA */}
          <div className="text-center py-12">
            <Link href="/Prophecy/unforgettable" className="inline-block bg-white text-black font-bold text-xl py-4 px-12 rounded-full hover:bg-gray-200 transition shadow-lg">
              START THE TRILOGY →
            </Link>
            <p className="text-gray-400 mt-4">Not to look backward. To prepare for what comes next.</p>
          </div>

          {/* Disclaimer – moved to footer area as subtle details, but keeping minimal */}
          <details className="text-center text-gray-500 text-xs mt-12 cursor-pointer">
            <summary className="hover:text-gray-400 transition">A note about this space</summary>
            <p className="mt-3 text-gray-400 leading-relaxed">This space speaks directly to Black men. Not to divide — but because we're the ones carrying the weight first and hardest. If you're reading this from outside the experience, read with care and respect.</p>
          </details>

          {/* Footer */}
          <footer className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-500 text-sm">
            <p>A gift from FBA men to humanity</p>
            <p className="mt-2"><a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">PHIERS.org →</a></p>
          </footer>
        </div>
      </div>
    </motion.div>
  );
}

// FILE: app/Prophecy/trilogy/page.tsx