// FILE: app/4daBros/leverage/page.tsx
// VERSION: 1.0.1 – Added PHIERS logo header

import Link from 'next/link'
import Image from 'next/image'

export default function LeveragePage() {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Leverage</h1>
        <p className="text-green text-xl mb-8">A simple way to turn your voice into something that carries weight.</p>

        {/* Opening */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          There’s a reason a lot of people feel stuck right now.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Like their voice doesn’t reach.<br />
          Like decisions get made without them.<br />
          Like nothing they do actually moves anything.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          That feeling is real.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          And it’s not just about frustration.<br />
          It’s about structure.
        </p>

        {/* Structure */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Most systems don’t respond to individuals.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          They respond to patterns.<br />
          To volume.<br />
          To coordination.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          To signals they can’t ignore.
        </p>

        {/* Leverage definition */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          That’s where leverage comes in.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Not loud.<br />
          Not chaotic.<br />
          Not performative.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Structured.<br />
          Repeatable.<br />
          Measurable.
        </p>
        <p className="text-green text-xl font-bold mb-12">
          Leverage is what happens when individual voices move together in a way the system has to recognize.
        </p>

        {/* Why this matters */}
        <h2 className="text-2xl font-semibold mb-4">Why this matters</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          When people feel unheard, they disengage.<br />
          When they disengage, systems get unstable.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          When more people participate in a real way,<br />
          things get steadier.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          More balanced.<br />
          More responsive.<br />
          More accountable.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          This isn’t about forcing anything.<br />
          It’s about being counted.
        </p>

        {/* How it works */}
        <h2 className="text-2xl font-semibold mb-4">How it works (simple version)</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A small action<br />
          done by one person<br />
          doesn’t carry much weight.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The same action<br />
          done by thousands of people<br />
          at the same time<br />
          becomes something different.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          It becomes a signal.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          That signal creates pressure.<br />
          That pressure creates response.
        </p>
        <p className="text-green text-xl font-bold mb-12">
          That’s leverage.
        </p>

        {/* Why this is different */}
        <h2 className="text-2xl font-semibold mb-4">Why this is different</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          This isn’t about parties.<br />
          This isn’t about candidates.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          This isn’t about arguing online<br />
          or shouting into the void.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          This is about:<br />
          Participation<br />
          Coordination<br />
          Consistency
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          A way to move<br />
          without losing yourself in the noise.
        </p>

        {/* Why us */}
        <h2 className="text-2xl font-semibold mb-4">Why us</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          We’ve seen what happens<br />
          when voices get ignored.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          We’ve lived through moments<br />
          where showing up didn’t feel like enough.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          We’ve carried systems<br />
          that didn’t always carry us back.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          So when we move,<br />
          we move with intention.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          We move with clarity.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          We move with purpose.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          And when we do that,<br />
          it doesn’t just affect us.<br />
          It stabilizes everything around us.
        </p>

        {/* What now */}
        <h2 className="text-2xl font-semibold mb-4">What now</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          You’ve seen the pattern.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          You’ve felt the pressure.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          You already know something needs to shift.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          This is one way to do it.<br />
          Calm.<br />
          Clear.<br />
          Structured.
        </p>

        {/* Primary CTA */}
        <div className="text-center mt-8 mb-12">
          <Link
            href="/petition"
            className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-full text-lg shadow-md hover:bg-green-700 transition"
          >
            👉 See how it works
          </Link>
        </div>

        {/* Secondary navigation */}
        <div className="text-center space-y-2 mb-12">
          <p className="text-gray-500">Or go back:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/4daBros/unforgettable" className="text-green hover:underline">UNFORGETTABLE</Link>
            <Link href="/4daBros/unbreakable" className="text-green hover:underline">UNBREAKABLE</Link>
            <Link href="/4daBros/unstoppable" className="text-green hover:underline">UNSTOPPABLE</Link>
          </div>
        </div>

        {/* Footer trust block */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>This is not about parties.</p>
          <p>This is not about candidates.</p>
          <p className="mt-2">This is about participation.<br />Representation.<br />Stability.</p>
          <p className="mt-2">Peaceful.<br />Lawful.<br />Structured.</p>
          <p className="mt-2">A way to be seen.<br />A way to be counted.<br />A way to matter.</p>
        </div>

      </div>
    </div>
  )
}

// FILE: app/4daBros/leverage/page.tsx