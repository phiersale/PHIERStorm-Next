// FILE: app/4daBros/trilogy/page.tsx
// VERSION: 2.0.0 – Empowering tone, focuses on pride & action

import Image from 'next/image'
import Link from 'next/link'

export default function TrilogyLanding() {
  return (
    <div className="min-h-screen bg-[#050b19] text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">

        {/* PHIERS Logo */}
        <div className="mb-6">
          <Image
            src="/images/PHIERS_Logo.png"
            alt="PHIERS"
            width={120}
            height={120}
            className="w-16 h-auto opacity-80"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Dear Black Man</h1>
        <p className="text-green text-lg mb-8">
          This page will give you a reason to be more hopeful for the future — when all seems dark and you feel lost.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
          <p>There’s a lot happening right now. Wars escalating. Voting rights shrinking. Our communities under pressure.</p>
          <p>But here’s the truth they don’t want you to remember:<br />
          <span className="text-green font-semibold">We are good at what we do.</span> We’ve always been.</p>
          <p>This isn’t about venting. This is about a proven method that will change the way the world sees Black men — from this day forward.<br />
          Because all is not lost.</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">What follows is the proof</h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-10">
          <p>The only reason the nation is headed the way it is — is because Congress isn’t doing its job.<br />
          We can change that.</p>
          <p>To get leverage over Congress, you hold them accountable for NOT trying to kill you.<br />
          To make that happen, hold them accountable for ending the war.<br />
          To end the war, you need leverage over Congress.<br />
          To restore and protect voting rights, you need the same.</p>
          <p className="text-green font-bold">PHIERS delivers that.<br />
          PHIERS = <span className="italic">Power Held In Every Representative’s Seat</span>.</p>
        </div>

        <Image
          src="/images/trilogy/trilogy-1.jpg"
          alt="Black men in conversation"
          width={800}
          height={500}
          className="w-full h-auto rounded-2xl my-10"
        />

        <h2 className="text-2xl font-semibold mb-4">The Trilogy</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Three short letters. Each one speaks to a different part of you:
        </p>
        <div className="space-y-2 mb-12">
          <p><span className="font-bold text-green">UNFORGETTABLE</span> — what the world tries to erase (and why you should be proud)</p>
          <p><span className="font-bold text-green">UNBREAKABLE</span> — what carried you this far</p>
          <p><span className="font-bold text-green">UNSTOPPABLE</span> — what still moves you forward</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/4daBros/unforgettable" className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">Read UNFORGETTABLE</Link>
          <Link href="/4daBros/unbreakable" className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">Read UNBREAKABLE</Link>
          <Link href="/4daBros/unstoppable" className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">Read UNSTOPPABLE</Link>
        </div>

        <div className="bg-[#0a1628] border border-green/30 rounded-xl p-8 mb-16">
          <h3 className="text-xl font-bold mb-4">This doesn’t stop at reading</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            This is a plan. A mechanism. A way to turn our historical excellence into present‑day power.
          </p>
          <Link href="/4daBros/leverage" className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-full text-lg shadow-md hover:bg-green-700 transition">
            👉 LEVERAGE
          </Link>
          <div className="mt-3">
            <Link href="/4daBros/leverage" className="text-green text-sm underline hover:text-green-300">See how 1,500 signatures give us control over Congress →</Link>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What PHIERS stands for</h2>
          <div className="space-y-3 text-gray-300 text-base">
            <p><span className="font-semibold text-green">P — Persevering</span><br />We keep going even when the world expects us not to.</p>
            <p><span className="font-semibold text-green">H — Hopeful (Active)</span><br />We build toward something better even when nothing guarantees it.</p>
            <p><span className="font-semibold text-green">I — Innovative</span><br />We create answers where none were offered.</p>
            <p><span className="font-semibold text-green">E — Enduring</span><br />We remain after what was meant to remove us.</p>
            <p><span className="font-semibold text-green">R — Resilient</span><br />We bend, but we do not break.</p>
            <p><span className="font-semibold text-green">S — Steadfast</span><br />We do not lose ourselves while moving through the storm.</p>
          </div>
          <p className="text-green text-lg font-semibold mt-6">
            And when we move like this — with presence, ingenuity, resilience, and structure — we don’t just survive. We stabilize everything around us.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>This space is for us. Move through it with the same dignity you deserve.</p>
        </div>
      </div>
    </div>
  )
}

// FILE: app/4daBros/trilogy/page.tsx