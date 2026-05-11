// FILE: app/Prophecy/trilogy/page.tsx
// VERSION: 6.0.0 – Final: orientation sentence, centered cards, ideal copy

import Link from 'next/link';

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

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Opening – three-beat cinematic sequence */}
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl font-light leading-tight text-balance max-w-2xl mx-auto">
            This is a private room.<br />
            No cameras. No performance.
          </p>
          <p className="text-white text-xl md:text-2xl font-semibold mt-6 text-balance max-w-2xl mx-auto">
            No explaining yourself to people who&apos;ve never had to carry what you carry.
          </p>
          <p className="text-white text-xl md:text-2xl font-semibold mt-8 text-balance max-w-2xl mx-auto">
            Just Black men — seeing the pattern clearly,<br />
            maybe for the first time without apology.
          </p>
          <p className="text-gray-300 text-lg md:text-xl mt-10 text-balance max-w-2xl mx-auto">
            What has been done to us is real.<br />
            What has <span className="text-white font-bold">not</span> been taken from us is more real.
          </p>
        </div>

        {/* Orientation sentence – fixes the UX gap */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed text-balance">
            The Trilogy moves in three chapters — the pattern, the response, and the shift.
          </p>
        </div>

        {/* Three cards – stacked vertically, centered */}
        <div className="flex flex-col items-center gap-10 max-w-2xl mx-auto">
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

        {/* Sticky instruction block – guidance, not menu */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm uppercase tracking-wide">
            Start with UNFORGETTABLE.<br />The chapters build on each other.
          </p>
        </div>

        {/* Footer – PHIERS as institutional signature, not emotional flow */}
        <footer className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-500 text-sm">
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
    <div className="w-full bg-white text-black rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl md:text-3xl font-bold leading-tight text-balance">{title}</h2>
      <p className="text-gray-600 text-sm uppercase tracking-wide mt-2">{subtitle}</p>
      <p className="text-[#111111] mt-3 text-base leading-relaxed text-balance">{description}</p>
      <Link
        href={link}
        className="inline-block mt-5 text-black font-semibold underline hover:no-underline"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}