// FILE: app/Prophecy/trilogy/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

export default function TrilogyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-5 py-12 md:py-20">

        {/* Intro */}
        <div className="mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">
            This is a private room. No cameras. No performance. No explaining yourself.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Just Black men – seeing the pattern clearly, maybe for the first time without apology.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            What has been done to us is real.<br />
            What has <span className="text-white font-semibold">not</span> been taken from us is more real.
          </p>
          <p className="text-white text-xl font-semibold mt-8">
            The Trilogy restores what the last four hundred years tried to erase.
          </p>
        </div>

        {/* UNFORGETTABLE */}
        <FadeIn>
          <div className="border-t border-gray-800 pt-12 mt-8">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Chapter 1 of 3</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">UNFORGETTABLE</h2>
            <img
              src="/images/trilogy/unforgettable-1.jpg"
              alt="Historical memory"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg my-6"
            />
            <p className="text-gray-300 text-lg leading-relaxed">
              What you are living through is not random. It is not a failure of character. It is not bad luck. It is not your fault.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              It is a <span className="text-white font-semibold">structure</span> – one that has operated for four hundred years.
              Voting rights gutted. Districts redrawn to erase us. Policies shifting quietly in ways that hit us first and hardest.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Once you see the structure, something shifts. You stop blaming yourself. You stop shrinking.
              You stop carrying weight that was never yours.
            </p>
            <p className="text-white font-semibold text-xl mt-6">
              And you start to see your own life differently.
            </p>
            <div className="mt-8 text-center">
              <Link href="#unbreakable" className="inline-block bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-6 rounded-full transition">
                → UNBREAKABLE
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* UNBREAKABLE */}
        <FadeIn>
          <div id="unbreakable" className="border-t border-gray-800 pt-12 mt-12">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Chapter 2 of 3</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">UNBREAKABLE</h2>
            <img
              src="/images/trilogy/unbreakable-1.jpg"
              alt="Resilience"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg my-6"
            />
            <p className="text-gray-300 text-lg leading-relaxed">
              Greenwood burned. They rebuilt it.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              The 761st Tank Battalion fought through six European countries for a nation that wouldn’t let them vote when they came home. They kept going anyway.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              The Tuskegee Airmen flew into the most dangerous airspace in the war – for an Air Force that doubted their humanity – and never lost a single bomber.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Black men liberated concentration camps. Jewish survivors’ first sight of freedom was a Black face. Then those same men came home to Jim Crow.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              They didn’t break. Neither did you.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              You come from people who refused to disappear. Who rebuilt every time the world tried to erase them. Who carried systems that would not carry them back.
            </p>
            <p className="text-white font-semibold text-xl mt-6">
              That strength is not behind you. It is in you. Right now. It never left.
            </p>
            <div className="mt-8 text-center">
              <Link href="#unstoppable" className="inline-block bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-6 rounded-full transition">
                → UNSTOPPABLE
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* UNSTOPPABLE */}
        <FadeIn>
          <div id="unstoppable" className="border-t border-gray-800 pt-12 mt-12">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Chapter 3 of 3</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">UNSTOPPABLE</h2>
            <img
              src="/images/trilogy/unstoppable-1.jpg"
              alt="Forward movement"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg my-6"
            />
            <p className="text-gray-300 text-lg leading-relaxed">
              The pressure is real. The attacks are real.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Redistricting. Policy rollbacks. Economic pressure. Quiet decisions made in rooms we’re not invited into.
              These are not accidents. They are strategies. And strategies can be countered.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              And they are designed to make you feel like there is nothing you can do.
            </p>
            <p className="text-white text-xl font-semibold mt-6">
              There is something you can do. Not noise. Not outrage. Not performance. <span className="text-yellow-400">Structure.</span>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              States control voting laws. States control redistricting. The battlefield is not Washington – it is your state capitol.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              And <span className="text-white font-bold">1,500 organized people</span> in a single district can make a representative’s seat feel genuinely at risk – before election day.
              That’s not a theory. That’s leverage. Peaceful. Lawful. Democracy.
            </p>
            <div className="mt-10 text-center">
              <Link
                href="/Prophecy/leverage"
                className="inline-block bg-[#F5C542] text-black font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-400 transition text-lg"
              >
                → See How Leverage Works
              </Link>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm space-x-4">
              <Link href="#unforgettable" className="hover:text-white transition">← UNFORGETTABLE</Link>
              <span>·</span>
              <Link href="#unbreakable" className="hover:text-white transition">← UNBREAKABLE</Link>
              <span>·</span>
              <a href="https://phiers.org" className="hover:text-white transition">PHIERS.org →</a>
            </div>
          </div>
        </FadeIn>

        <footer className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-500 text-sm">
          <p>Built on PHIERS — Persevering. Hopeful. Innovative. Enduring. Resilient. Strategic.</p>
          <p className="mt-2"><a href="https://phiers.org" className="hover:text-white transition">Go to PHIERS.org →</a></p>
        </footer>
      </div>
    </div>
  );
}

// FILE: app/Prophecy/trilogy/page.tsx