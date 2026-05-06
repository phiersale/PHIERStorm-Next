// FILE: app/petition/page.tsx
// VERSION: 1.0.9 – sends zipCode (matches API & DB)

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SHEETS_WEBHOOK_URL = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL || ''

export default function PetitionPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    zipCode: '',
    email: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [honeypot, setHoneypot] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (honeypot) {
      // Silent drop for bots – show success so they don't retry
      setSubmitted(true)
      setLoading(false)
      return
    }

    const { firstName, lastName, zipCode, email } = formData
    if (!firstName || !lastName || !zipCode || !email) {
      setError('Please fill in all fields.')
      setLoading(false)
      return
    }
    if (!/^\d{5}/.test(zipCode)) {
      setError('Enter a valid 5‑digit ZIP code.')
      setLoading(false)
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.')
      setLoading(false)
      return
    }

    // Show success immediately
    setSubmitted(true)

    // --- BACKGROUND WRITE TO NEON (via Prisma) ---
    try {
      fetch('/api/signature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          zipCode: formData.zipCode,
          district: '',
        }),
      })
        .then(async (res) => {
          if (!res.ok) {
            const text = await res.text().catch(() => '')
            console.error('Server write failed:', res.status, text)
          }
        })
        .catch((err) => {
          console.error('Fetch to /api/signature failed:', err)
        })
    } catch (err) {
      console.error('Background write error:', err)
    }

    // Background webhook (if configured)
    if (SHEETS_WEBHOOK_URL) {
      const payload = {
        timestamp: new Date().toISOString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        zipCode: formData.zipCode,
        email: formData.email,
      }
      fetch(SHEETS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(err => console.error('Webhook failed:', err))
    }

    setLoading(false)
  }

  // --- SUCCESS SCREEN with two thin buttons (vertical) ---
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050b19] text-white flex items-center justify-center p-4">
        <div className="text-center max-w-sm w-full">
          <h1 className="text-3xl font-bold text-green mb-4">You're On The Record.</h1>
          <p className="text-gray-300 mb-6">
            Your name has been added. We'll notify you when your district reaches 1,500.
          </p>

          <div className="flex flex-col gap-3 items-stretch">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green text-black font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition text-center whitespace-nowrap"
            >
              📋 TAKE THE SURVEY
            </a>

            <a
              href="/action"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition text-center whitespace-nowrap"
            >
              ⚡ TAKE ACTION
            </a>
          </div>

          <button
            onClick={() => router.push('/?skip=slides')}
            className="block w-full text-gray-400 text-sm underline mt-6"
          >
            ← Back to homepage
          </button>
        </div>
      </div>
    )
  }

  // --- PETITION FORM ---
  return (
    <div className="min-h-screen bg-[#050b19] text-white py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Your Name Is Leverage.</h1>
        <p className="text-center text-gray-300 mb-8">Add your name. Make Congress do its job.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-[#0a1022] border border-gray-700 rounded-lg p-3 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-[#0a1022] border border-gray-700 rounded-lg p-3 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="zipCode" className="sr-only">ZIP Code</label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              placeholder="ZIP Code *"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full bg-[#0a1022] border border-gray-700 rounded-lg p-3 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#0a1022] border border-gray-700 rounded-lg p-3 text-white"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? 'Submitting...' : '✍ ADD MY NAME'}
          </button>
        </form>

        <p className="text-gray-500 text-xs text-center mt-6">
          We don't sell or share your data. Used only for district verification and updates.
        </p>
      </div>
    </div>
  )
}

// FILE: app/petition/page.tsx (end)
// VERSION: 1.0.9