// FILE: app/Prophecy/trilogy/page.tsx
// VERSION: 2.0.0
// Restoration Landing – three cards, no hero image

import Link from 'next/link';
import CTASection from '../components/CTASection';

export default function TrilogyLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            This is a private room.<br />
            No cameras. No performance. No explaining yourself to people who've never had to carry what you carry.<br />
            Just Black men — seeing the pattern clearly, maybe for the first time without apology.
          </p>
          <p className="text-white font-semibold text-xl mt-6">What has been done to us is real.</p>
          <p className="text-gray-300">What has NOT been taken from us is more real.</p>
        </div>

        {/* Three cards */}
        <div className="grid md:grid-cols-3 gap-8">
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

        <p className="text-center text-gray-500 text-sm mt-12">Start with UNFORGETTABLE. The chapters build on each other.</p>

        <footer className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
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

function Card({ title, subtitle, description, link, buttonLabel }) {
  return (
    <div className="bg-white text-black rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600 text-sm uppercase tracking-wide mt-1">{subtitle}</p>
      <p className="text-gray-800 mt-4">{description}</p>
      <Link href={link} className="inline-block mt-6 text-black font-semibold underline hover:no-underline">
        {buttonLabel}
      </Link>
    </div>
  );
}
// END FILE: app/Prophecy/trilogy/page.tsx