// FILE: app/Prophecy/trilogy/page.tsx
// VERSION: 3.0.0 – Best UX with fluid typography, balanced wrapping, proper spacing

import Link from 'next/link';
import Image from 'next/image';

export default function TrilogyLanding() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* PHIERS Logo – top left */}
      <div className="absolute top-4 left-4 z-20 md:top-6 md:left-6">
        <a href="https://phiers.org" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/PHIERS_Logo_BW.png"
            alt="PHIERS"
            className="w-16 h-auto md:w-20 opacity-80 hover:opacity-100 transition"
          />
        </a>
      </div>

      {/* Grounding image – quiet, not cinematic */}
      <div className="absolute top-24 right-4 md:top-32 md:right-8 opacity-40 pointer-events-none z-0">
        <img
          src="/images/trilogy/quiet-man.jpg"
          alt=""
          className="w-24 h-auto md:w-32 rounded-full shadow-lg"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Opening – three emotional beats with responsive line breaks */}
        <div className="text-center mb-20">
          <p className="text-2xl md:text-3xl font-light leading-tight text-balance max-w-2xl mx-auto">
            This is a private room.<br className="hidden sm:block" />
            No cameras. No performance.<br className="hidden sm:block" />
            <span className="inline-block mt-2">No explaining yourself to people who&apos;ve never had to carry what you carry.</span>
          </p>
          <p className="text-white text-xl md:text-2xl font-semibold mt-12 text-balance">
            Just Black men — seeing the pattern clearly,<br className="hidden sm:block" />
            maybe for the first time without apology.
          </p>
          <p className="text-gray-300 text-lg md:text-xl mt-12 text-balance">
            What has been done to us is real.<br />
            What has <span className="text-white font-bold">NOT</span> been taken from us is more real.
          </p>
        </div>

        {/* Orientation sentence – what the Trilogy is */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            The Trilogy moves in three chapters — what was done to us, what we did with it, and what comes next.
          </p>
          <p className="text-gray-400 text-sm mt-2">Start with UNFORGETTABLE. The chapters build on each other.</p>
        </div>

        {/* Sticky instruction block */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-16 text-center max-w-md mx-auto">
          <p className="text-gray-300 text-sm uppercase tracking-wide">
            Start with UNFORGETTABLE.<br />The chapters build on each other.
          </p>
        </div>

        {/* Three cards – responsive grid, proper spacing */}
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          <Card
            title="UNFORGETTABLE"
            subtitle="The Pattern"
            description="What's been done to us is documented and real."
            link="/Prophecy/unforgettable"
            buttonLabel="→ Start here"
          />
          <Card
            title="UNBREAKABLE"
            subtitle="The Response"
            description="What our people did with it is the record."
            link="/Prophecy/unbreakable"
            buttonLabel="→ Continue"
          />
          <Card
            title="UNSTOPPABLE"
            subtitle="The Shift"
            description="What comes next — and what we do with it."
            link="/Prophecy/unstoppable"
            buttonLabel="→ The bridge"
          />
        </div>

        {/* Footer – PHIERS identity block (separate from emotional flow) */}
        <footer className="border-t border-gray-800 mt-24 pt-10 text-center text-gray-500 text-sm">
          <p>Built on PHIERS — Persevering. Hopeful. Innovative. Enduring. Resilient. Strategic.</p>
          <p className="mt-2">
            <a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              PHIERS.org →
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

function Card({ title, subtitle, description, link, buttonLabel }: {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  buttonLabel: string;
}) {
  return (
    <div className="bg-white text-black rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col h-full">
      <h2 className="text-2xl md:text-3xl font-bold leading-tight break-words">{title}</h2>
      <p className="text-gray-600 text-sm uppercase tracking-wide mt-2">{subtitle}</p>
      <p className="text-gray-800 mt-3 text-base leading-relaxed flex-grow">{description}</p>
      <Link
        href={link}
        className="inline-block mt-5 text-black font-semibold underline hover:no-underline self-start"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}