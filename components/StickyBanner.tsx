// FILE: components/StickyBanner.tsx
// VERSION: 1.0 – Sticky top banner with Home, Logo, Skip

'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function StickyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm border-b border-white/10 py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Home link */}
        <Link 
          href="/" 
          className="text-gray-300 text-xs sm:text-sm hover:text-white transition"
        >
          Home
        </Link>

        {/* Tiny PHIERS logo */}
        <Link href="/" className="opacity-70 hover:opacity-100 transition">
          <Image
            src="/images/PHIERS_Logo_BW.png"
            alt="PHIERS"
            width={24}
            height={24}
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </Link>

        {/* Skip link */}
        <button
          onClick={() => {
            // Skip to main content - find main element or scroll to top
            const mainContent = document.querySelector('main') || document.body
            mainContent.scrollIntoView({ behavior: 'smooth' })
          }}
          className="text-gray-300 text-xs sm:text-sm hover:text-white transition"
        >
          Skip
        </button>
      </div>
    </div>
  )
}

// FILE: components/StickyBanner.tsx