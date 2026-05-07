// FILE: app/petition/page.tsx
// VERSION: 1.3.0 – collapsible “What is this?” (optional, friction‑free)

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
  const [explainerOpen, setExplainerOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (honeypot) {
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

    setSubmitted(true)

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
      }).catch(() => {})
    } catch {}

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
      }).catch(() => {})
    }

    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050b19] text-white flex items-center justify-center p-4">
        <div className="text-center max-w-sm w-full">
          <h1 className="text-3xl font-bold text-green mb-3">You're On The Record.</h1>
          <p className="text-gray-300 mb-5">
            Your name has been added. We'll notify you when your district reaches 1,500.
          </p>
          <div className="flex flex-col gap-2 items-stretch">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green text-black font-semibold py-1.5 px-3 rounded-md hover:bg-green-600 transition text-sm text-center"
            >
              📋 TAKE THE SURVEY
            </a>
            <a
              href="/action"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white font-semibold py-1.5 px-3 rounded-md hover:bg-blue-600 transition text-sm text-center"
            >
              ⚡ TAKE ACTION
            </a>
          </div>
          <button
            onClick={() => router.push('/?skip=slides')}
            className="block w-full text-gray-400 text-xs underline mt-5"
          >
            ← Back to homepage
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050b19] text-white py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo + Acronym */}
        <div className="flex flex-col items-center mb-4">
          <img
            src="/images/PHIERS_Logo.png"
            alt="PHIERS"
            className="w-20 h-auto opacity-80 mb-1"
          />
          <p className="text-xs text-gray-400 tracking-wide text-center">
            Power Held In Every Representative's Seat
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-2xl font-bold text-center mb-2">Your Name Is Leverage.</h1>

        {/* Collapsible explainer – tiny, optional, friction‑free */}
        <div className="text-center mb-4">
          <button
            onClick={() => setExplainerOpen(!explainerOpen)}
            className="text-xs text-gray-400 underline cursor-pointer hover:text-gray-300 transition"
          >
            {explainerOpen ? '− What is this?' : '+ What is this?'}
          </button>
        </div>

        {explainerOpen && (
          <div className="text-gray-300 text-sm space-y-2 mb-5 leading-relaxed bg-[#0a1022]/50 p-3 rounded-md">
            <p>This takes 10 seconds. You add your name, ZIP, and email so we can verify your district.</p>
            <p><strong>What this is:</strong> A public count of people in your district who want Congress held to a basic standard.</p>
            <p><strong>What this isn’t:</strong> Not a contract. Not a commitment. Not a donation. Just your name added to a district‑level count.</p>
            <p>You’ll get one confirmation email. That’s it.</p>
          </div>
        )}

        {/* Form – same as before */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-[#0a1022] border border-gray-700 rounded-md p-2.5 text-white"
            required
          />

          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-[#0a1022] border border-gray-700 rounded-md p-2.5 text-white"
            required
          />

          <input
            id="zipCode"
            name="zipCode"
            type="text"
            placeholder="ZIP Code *"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full bg-[#0a1022] border border-gray-700 rounded-md p-2.5 text-white"
            required
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#0a1022] border border-gray-700 rounded-md p-2.5 text-white"
            required
          />

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-md transition disabled:opacity-50"
          >
            {loading ? 'Submitting...' : '✍ ADD MY NAME'}
          </button>
        </form>

        <button
          onClick={() => router.push('/?skip=slides')}
          className="block w-full text-gray-400 text-xs underline mt-3"
        >
          ← Back to homepage
        </button>

        <p className="text-gray-500 text-xs text-center mt-5">
          We don't sell or share your data. Used only for district verification and updates.
        </p>
      </div>
    </div>
  )
}
// FILE: app/petition/page.tsx (end)