// FILE: app/4daBros/unbreakable/page.tsx
// VERSION: 1.0.1 – Added PHIERS logo header, stacked vertical buttons

import Image from 'next/image'
import Link from 'next/link'

export default function UnbreakablePage() {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-8">UNBREAKABLE</h1>

        {/* First section */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A lot of people are feeling pressure right now.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Like things are getting tighter.<br />
          Like support is getting thinner.<br />
          Like the ground is shifting under their feet.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          For us, that pressure hits different.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Because we’ve carried it before.
        </p>

        {/* IMAGE 1 */}
        <Image
          src="/images/trilogy/unbreakable-1.jpg"
          alt="Resilience"
          width={800}
          height={500}
          className="w-full h-auto rounded-2xl my-10"
        />

        {/* Pattern block */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          That’s why this moment matters.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Because when support fades,<br />
          we don’t just feel it —<br />
          we absorb it.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          And when we absorb it,<br />
          we adapt.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          We always have.
        </p>

        {/* IMAGE 2 */}
        <Image
          src="/images/trilogy/unbreakable-2.jpg"
          alt="Pattern of endurance"
          width={800}
          height={500}
          className="w-full h-auto rounded-2xl my-10"
        />

        {/* Final section */}
        <div className="space-y-6 mb-12">
          <p className="text-gray-300 text-lg leading-relaxed">
            You deserve rest.<br />
            You deserve safety.<br />
            You deserve a future that isn’t built on struggle alone.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            And you’re not carrying this moment by yourself.<br />
            Not anymore.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-8">
            You made it through all that.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            So what now?
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Same thing we’ve always done.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We don’t fold.<br />
            We don’t break.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We build.
          </p>
          <p className="text-green text-xl font-bold">
            And this time — we build leverage.
          </p>
        </div>

        {/* IMAGE 3 */}
        <Image
          src="/images/trilogy/unbreakable-3.jpg"
          alt="Standing together"
          width={800}
          height={500}
          className="w-full h-auto rounded-2xl my-10"
        />

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
              href="/4daBros/unstoppable"
              className="inline-block bg-gray-700 text-white font-semibold px-5 py-1 rounded-lg hover:bg-gray-600 transition text-sm"
            >
              Unstoppable
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

// FILE: app/unbreakable/page.tsx