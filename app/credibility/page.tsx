'use client'

import Link from 'next/link'
export default function PathosCredibility() {
  return (
    <div className="max-w-2xl mx-auto p-4">
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
        <Link 
          href="/credibility"
          className="inline-block bg-[#0a1628] border border-green/40 text-green font-semibold text-sm px-6 py-3 rounded-full hover:border-green hover:text-white transition"
        >
          → View Full Credibility Highlights
        </Link>
      </div>
    </div>
  )
}