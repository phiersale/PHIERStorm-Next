// FILE: app/petition/page.tsx
// VERSION: 1.0.0
// PURPOSE: Petition with district feedback after submission (shows district, count, remaining)

'use client'

import { useState } from 'react'
import Link from 'next/link'

// Mock function – replace with real ZIP → district lookup + count
function getDistrictFromZip(zip: string): { district: string; currentCount: number } {
  const mock: Record<string, { district: string; count: number }> = {
    '90210': { district: 'CA-33', count: 1203 },
    '10001': { district: 'NY-12', count: 876 },
    '60601': { district: 'IL-07', count: 1450 },
  }
  return mock[zip] || { district: 'Unknown', currentCount: 342 }
}

export default function PetitionPage() {
  const [submitted, setSubmitted] = useState(false)
  const [userDistrict, setUserDistrict] = useState<string | null>(null)
  const [currentCount, setCurrentCount] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const zip = formData.get('zip') as string
    const { district, currentCount: count } = getDistrictFromZip(zip)
    setUserDistrict(district)
    setCurrentCount(count + 1)
    setSubmitted(true)
  }

  if (submitted && userDistrict && currentCount !== null) {
    const remaining = 1500 - currentCount
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050b19] text-white text-center px-6">
        <div className="max-w-md">
          <h1 className="text-4xl mb-4">You're on record.</h1>
          <p className="text-green text-2xl font-bold mb-2">{userDistrict}</p>
          <p className="text-gray-300 text-lg">Current total: <span className="text-white font-bold">{currentCount}</span> / 1,500</p>
          <p className="text-gray-400 mb-6">{remaining} more to reach the tipping point.</p>
          <p className="text-gray-400 text-sm mb-4">You just moved your district closer.</p>
          <Link
            href="/"
            className="inline-block bg-green text-black px-6 py-3 rounded-md font-bold hover:bg-green/90"
          >
            ← See your district progress
          </Link>
        </div>
      </div>
    )
  }

  if (submitted) {
    // fallback (if district lookup failed)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050b19] text-white text-center px-6">
        <div>
          <h1 className="text-4xl mb-4">You're on record.</h1>
          <p className="text-gray-400 mb-6">Your district count just increased.</p>
          <Link href="/" className="text-green underline">← See district progress</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050b19] text-white flex flex-col items-center px-6 py-16">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl mb-4 text-center">Be counted in your congressional district</h1>
        <p className="text-gray-400 text-center mb-8">
          This is not a petition that disappears.<br />
          Your name is counted toward your district total.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Full Name" required className="w-full p-3 bg-black border border-gray-700 rounded" />
          <input name="email" type="email" placeholder="Email" required className="w-full p-3 bg-black border border-gray-700 rounded" />
          <input name="zip" placeholder="ZIP Code" required className="w-full p-3 bg-black border border-gray-700 rounded" />
          <button type="submit" className="w-full bg-green text-black py-3 font-bold rounded">
            Add My Name
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-6 text-center">
          Your information is only used to verify district counts.
        </p>
      </div>
    </div>
  )
}
// END FILE: app/petition/page.tsx