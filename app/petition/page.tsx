// FILE: app/petition/page.tsx
// VERSION: 1.2.0

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function PetitionPage() {
  const [formData, setFormData] = useState({ name: '', email: '', zip: '' })
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [signatureCount, setSignatureCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/petition')
      .then(res => res.json())
      .then(data => setSignatureCount(data.total))
      .catch(console.error)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitState('submitting')
    setErrorMessage('')

    if (!/^\d{5}$/.test(formData.zip)) {
      setErrorMessage('ZIP code must be 5 digits')
      setSubmitState('error')
      return
    }

    try {
      const res = await fetch('/api/petition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error || 'Submission failed')
      }

      setSubmitState('success')
      // Update total count
      const countRes = await fetch('/api/petition')
      const countData = await countRes.json()
      setSignatureCount(countData.total)
      // Do NOT clear the form or auto-reset – let the user see the success message
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
      setSubmitState('error')
    }
  }

  // If already succeeded, show thank you and action buttons
  if (submitState === 'success') {
    return (
      <>
        <Navigation />
        <main className="container pt-24 pb-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-bg-dark border border-green/20 rounded-xl p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-green mb-4">✓ You’re on the record.</h1>
              <p className="text-white text-xl mb-4">Thank you for adding your name.</p>
              <p className="text-gray-300 mb-6">
                You are now counted in your district. Every signature brings us closer to the 1,500-person tipping point that forces Congress to respond.
              </p>
              <div className="border-t border-green/20 pt-6 mt-4">
                <p className="text-white font-semibold mb-4">What’s next?</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link href="/survey" className="inline-block bg-green text-black font-bold py-3 px-6 rounded-lg hover:bg-green-dim transition text-center">
                    📋 Take the Survey
                  </Link>
                  <Link href="/action" className="inline-block bg-transparent border-2 border-green text-green font-bold py-3 px-6 rounded-lg hover:bg-green/10 transition text-center">
                    🚀 Go to Action Page
                  </Link>
                </div>
                <p className="text-gray-500 text-sm mt-6">
                  The survey helps us understand what matters most in your district.<br />
                  The action page shows you how to multiply the count.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Otherwise show the form
  return (
    <>
      <Navigation />
      <main className="container pt-24 pb-32">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Add Your Name</h1>
          <p className="text-green text-xl font-semibold mb-2">Your name is leverage.</p>
          <p className="text-gray-300">When enough people in your district organize, your representative faces direct, coordinated pressure to respond — or face replacement.</p>
          {signatureCount !== null && (
            <p className="text-green mt-2 text-sm">{signatureCount.toLocaleString()} people have already signed.</p>
          )}
        </div>

        <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[500px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-condensed mb-1">Full Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white"
                required
                disabled={submitState === 'submitting'}
              />
            </div>
            <div>
              <label className="block text-white font-condensed mb-1">Email (optional)</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white"
                disabled={submitState === 'submitting'}
              />
              <p className="text-gray-500 text-xs mt-1">Only used for district milestone alerts. Unsubscribe anytime.</p>
            </div>
            <div>
              <label className="block text-white font-condensed mb-1">ZIP Code *</label>
              <input
                type="text"
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value.replace(/[^0-9]/g, '').slice(0,5) })}
                className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white"
                maxLength={5}
                required
                disabled={submitState === 'submitting'}
              />
            </div>
            {submitState === 'error' && <p className="text-red-400 text-sm">{errorMessage}</p>}
            <button
              type="submit"
              disabled={submitState === 'submitting'}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg disabled:opacity-50"
            >
              {submitState === 'submitting' ? 'SUBMITTING...' : '✍ ADD MY NAME'}
            </button>
          </form>
          <p className="text-gray-500 text-xs text-center mt-4">
            Used to count you in your district and build coordinated constituent pressure. Your information is never shared.
          </p>
        </div>
      </main>

      {/* Sticky CTA for mobile (only visible if form is not success) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-bg-dark border-t border-green/20 md:hidden z-50">
        <button
          form="petition-form"
          type="submit"
          disabled={submitState === 'submitting'}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full disabled:opacity-50"
        >
          ✍ ADD MY NAME
        </button>
      </div>

      <Footer />
    </>
  )
}