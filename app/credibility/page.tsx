// FILE: app/credibility/page.tsx


'use client'

import Link from 'next/link'
export default function PathosCredibility() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-green/10 border border-green/30 rounded-lg px-4 py-3 mb-6 text-center">
        <Link href="/evidence-archive" className="text-green-400 text-sm md:text-base font-semibold hover:text-white transition">
          NEW: Deep Dive into Credibility-Building Evidence →
        </Link>
      </div>
      <div className="aspect-video mb-4">
        <iframe
          src="https://www.youtube.com/embed/KLu7USN_dao"
          title="Pathos Communications explains why they want to represent PHIERS"
          className="w-full h-full"
          allowFullScreen
        />
      </div>
      <p className="text-green text-center text-lg italic">
        “If you weren’t legit, we wouldn’t risk putting our name behind yours.”
      </p>
      <p className="text-gray-400 text-center">— Pathos Communications</p>
      <p className="text-gray-300 text-center text-sm mt-4">
        Pathos Communications — a global research and PR agency listed on the London Stock Exchange — conducted multiple multi‑hour interviews with Will Price and publicly explained on video why they chose to represent PHIERS.
      </p>

      <div className="mt-8 text-center border-t border-gray-700 pt-8">

  <div className="mb-8">
    <a
      href="/downloads/PHIER-Powered-Solutions-Overview.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#F5C542] text-[#111] font-bold px-7 py-3 rounded-full hover:scale-[1.02] transition"
    >
      📄 Download the PHIER-Powered Solutions Overview
    </a>

    <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
      Prefer reading offline? Download the illustrated overview of the complete PHIERS framework.
    </p>
  </div>
        <p className="text-gray-300 text-sm max-w-lg mx-auto mb-6">
          We were working on affordability, sustainable jobs, care coordination, and public accountability years before these issues became national campaign slogans.
        </p>
        <Link
          href="/the-system"
          className="inline-block bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-sm px-6 py-3 rounded-full hover:bg-white transition mb-3"
        >
         Explore PHIER-Powered Solutions →
        </Link>
        <div>
          <Link 
            href="/?credibility=true"
            className="inline-block bg-[#0a1628] border border-green/40 text-green font-semibold text-sm px-6 py-3 rounded-full hover:border-green hover:text-white transition mt-2"
          >
            → View Full Credibility Highlights
          </Link>
        </div>
      </div>
    </div>
  )
}

// FILE: app/credibility/page.tsx