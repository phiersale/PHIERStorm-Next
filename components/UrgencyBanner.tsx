// FILE: components/UrgencyBanner.tsx
// VERSION: 1.0 – Site-wide urgency banner

'use client'

import Link from 'next/link'

export default function UrgencyBanner() {
  return (
    <div className="bg-red-700 text-white text-center py-2 px-4 text-xs sm:text-sm font-semibold z-50 relative">
      <span>⚡ Congress is home through June 22.</span>
      {' '}Organizers are working to reach 500 signatures per district.
      <Link
        href="/organizers"
        className="underline ml-1 sm:ml-2 hover:text-gray-200 transition"
      >
        Learn More →
      </Link>
    </div>
  )
}