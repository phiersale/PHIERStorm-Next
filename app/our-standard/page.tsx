'use client';

// FILE: app/our-standard/page.tsx
// VERSION: 1.0 — Split out of evidence-archive/page.tsx Vision & Values section

import Link from 'next/link';
import Image from 'next/image';

export default function OurStandardPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* STICKY HEADER */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/PHIERS_Logo_BW.png"
              alt="PHIERS"
              width={48}
              height={48}
              className="w-10 h-auto md:w-12 opacity-70 hover:opacity-90 transition"
              priority
            />
          </Link>
          <Link href="/credibility" className="text-gray-400 text-xs sm:text-sm hover:text-white transition whitespace-nowrap">
            ← Back to Credibility
          </Link>
        </div>
      </div>

      <div className="sticky-header-offset max-w-4xl mx-auto px-4 pt-24 pb-16">

        {/* TITLE */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            What PHIERS Stands For
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Not the evidence. Not the documentation. The standard we hold ourselves to.
          </p>
        </div>

        {/* TOP CROSS-LINK */}
        <div className="text-center mb-10">
          <Link href="/evidence-archive" className="text-green-400 text-xs sm:text-sm hover:underline">
            Looking for the documentation instead? View the Evidence Archive →
          </Link>
        </div>

        {/* MABSHA */}
        <section className="mb-8">
          <div className="bg-[#0a1628]/40 rounded-lg p-6 border border-gray-800">
            <h2 className="text-2xl font-bold text-green mb-3">Our Standard: MABSHA</h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-400 text-2xl">⭐</span>
              <p className="text-green-400 font-semibold italic">Make America Better: Healthier, Safer, Affordable</p>
            </div>
            <div className="bg-[#0a1628] rounded-lg p-4 space-y-2 text-gray-300 text-sm">
              <p>✓ Healthcare doesn't bankrupt families.</p>
              <p>✓ Work provides dignity and opportunity.</p>
              <p>✓ Elected officials abide the will of the voters.</p>
              <p>✓ Government serves the People, not elites.</p>
              <p>✓ Solutions paid by rescinding tax breaks for the wealthy.</p>
              <p>✓ Public servants held accountable.</p>
              <p>✓ We rise from the ashes like the Phoenix.</p>
            </div>
          </div>
        </section>

        {/* PATRIOTIC HOMECOMING */}
        <section className="mb-8">
          <div className="bg-[#0a1628]/40 rounded-lg p-6 border border-gray-800">
            <h2 className="text-2xl font-bold text-green mb-3">A Patriotic Homecoming for American Democracy</h2>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="text-center py-3 bg-[#0a1628] rounded-lg">
                <p>Not through violence. Not through chaos. Through organization. Through accountability. Through participation.</p>
              </div>
              <p>The First Reconstruction rebuilt the Union. The Second expanded civil rights. <strong>The Third rebuilds accountability.</strong></p>
              <p className="text-green-400 font-semibold">Fifteen Hundred is not the destination. It is the proof.</p>
            </div>
          </div>
        </section>

        {/* FOR AMERICANS */}
        <section className="mb-12">
          <div className="bg-[#0a1628]/40 rounded-lg p-6 border border-gray-800">
            <h2 className="text-2xl font-bold text-green mb-3">For Americans Who Were Promised Change</h2>
            <p className="text-gray-300 text-sm">MAGA promised change. It didn't deliver — because the people making promises don't have the structure to build it.</p>
            <div className="bg-[#0a1628] border border-green/20 rounded-lg p-3 my-3">
              <p className="text-white font-semibold">PHIERS is the structure they should have built.</p>
            </div>
            <p className="text-gray-300 text-sm">Not left or right. Just organized citizens holding elected officials accountable.</p>
          </div>
        </section>

        {/* COOPERATIVE PRINCIPLES LINK */}
        <div className="text-center mb-10">
          <p className="text-gray-400 text-sm mb-3">How we govern ourselves, in writing, before launch.</p>
          <Link href="/our-principles" className="text-green hover:underline font-semibold">
            The Seven Cooperative Principles →
          </Link>
        </div>

        {/* CROSS-LINK TO EVIDENCE ARCHIVE */}
        <div className="text-center pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-3">Want the documentation behind these commitments?</p>
          <Link href="/evidence-archive" className="text-green hover:underline font-semibold">
            View the Evidence Archive →
          </Link>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm mt-12">
          <p>PHIERS — Make America Better: Healthier, Safer, Affordable.</p>
          <p className="mt-2"><Link href="/credibility" className="text-green hover:text-white transition">← Back to Credibility</Link></p>
        </footer>
      </div>
    </div>
  );
}