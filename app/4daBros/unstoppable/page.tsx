// FILE: app/4daBros/unstoppable/page.tsx
// VERSION: 1.0.1 – Added PHIERS logo header, stacked vertical buttons

import Image from 'next/image'
import Link from 'next/link'

export default function UnstoppablePage() {
  return (
    <div className="min-h-screen bg-[#050b19] text-white px-6 py-16 md:px-12 lg:px-24">

      <div className="max-w-3xl mx-auto">

         {/* Glowing PHIERS Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-60 animate-pulse"></div>
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS"
              width={120}
              height={120}
              className="w-16 h-auto relative z-10"
            />
          </div>
        </div>

        {/* Back link */}
        <div className="mb-8">
          <Link href="/4daBros/trilogy" className="text-gray-500 text-sm underline hover:text-gray-300">
            ← Back to Trilogy
          </Link>
        </div>

        {/* SCOTUS UPDATE – The Pressure Is Real */}
        <div className="my-8 p-5 border-l-4 border-yellow-400 bg-yellow-400/5 rounded-r-lg">
          <span className="text-xs uppercase tracking-wider text-yellow-400 font-bold">NEW — May 3, 2026</span>
          <p className="text-white text-lg font-semibold mt-2">The Pressure Is Real — And We Move Anyway</p>
          <p className="text-gray-300 mt-2">
            The Supreme Court gutted the Voting Rights Act. That’s the pressure. This is the response:
            <strong className="text-white"> 1,500 people per district</strong>, organized, lawful, and unignorable.
            We adapt. We build. We move.
          </p>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">UNSTOPPABLE</h1>

        {/* Opening */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Right now, a lot of people feel stuck.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Like their voice doesn’t reach.<br />
          Like nothing they do changes anything.<br />
          Like the system just keeps moving without them.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          But we know better.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          We’ve seen what happens<br />
          when people move together.
        </p>

        {/* IMAGE 1 */}
        <Image
          src="/images/trilogy/unstoppable-1.jpg"
          alt="People moving together"
          width={800}
          height={500}
          className="w-full h-auto rounded-2xl my-10"
        />

        {/* Build block */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          That’s why this matters.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Because when people move with purpose,<br />
          things shift.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          When people participate,<br />
          systems stabilize.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          When people feel heard,<br />
          they invest in what comes next.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          That’s not theory.<br />
          That’s how this works.
        </p>

        {/* IMAGE 2 */}
        <Image
          src="/images/trilogy/unstoppable-2.jpg"
          alt="Building together"
          width={800}
          height={500}
          className="w-full h-auto rounded-2xl my-10"
        />

        {/* Who benefits */}
        <div className="space-y-4 mb-12">
          <p className="text-gray-300 text-lg leading-relaxed">
            And let’s be clear:
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            When we rise, everybody rises.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            When we build, everybody benefits.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            When we stabilize ourselves,<br />
            we stabilize the system around us.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            That’s always been true.
          </p>
        </div>

        {/* IMAGE 3 */}
        <Image
          src="/images/trilogy/unstoppable-3.jpg"
          alt="Forward movement"
          width={800}
          height={500}
          className="w-full h-auto rounded-2xl my-10"
        />

        {/* Final section */}
        <div className="space-y-6 mb-12">
          <p className="text-gray-300 text-lg leading-relaxed">
            We’ve always built the future from the ground up.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            And we’re doing it again.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-8">
            So what now?
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We don’t just feel this.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We use it.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We turn it into something structured.<br />
            Something real.<br />
            Something that moves.
          </p>
          <p className="text-green text-xl font-bold">
            We build leverage.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            And we move forward together.
          </p>
        </div>

        {/* STACKED BUTTONS: LEVERAGE on top, then the other two UN pages */}
        <div className="border-t border-gray-800 mt-16 pt-10 text-center">
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/4daBros/leverage"
              className="inline-block bg-green-600 text-white font-semibold px-5 py-1 rounded-lg hover:bg-green-700 transition text-sm"
            >
              LEVERAGE
            </Link>
            <Link
              href="/4daBros/unforgettable"
              className="inline-block bg-gray-700 text-white font-semibold px-5 py-1 rounded-lg hover:bg-gray-600 transition text-sm"
            >
              Unforgettable
            </Link>
            <Link
              href="/4daBros/unbreakable"
              className="inline-block bg-gray-700 text-white font-semibold px-5 py-1 rounded-lg hover:bg-gray-600 transition text-sm"
            >
              Unbreakable
            </Link>
          </div>
        </div>

        {/* FOOTER CREDIT */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>Built on PHIERS — Persevering. Hopeful. Innovative. Enduring. Resilient. Steady under pressure.</p>
          <p className="mt-2"><a href="https://phiers.org" className="hover:text-white transition">Go to PHIERS.org →</a></p>
        </div>

      </div>
    </div>
  )
}

// FILE: app/unstoppable/page.tsx