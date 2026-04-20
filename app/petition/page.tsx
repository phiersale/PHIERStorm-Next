'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function PetitionPage() {
  const [formData, setFormData] = useState({ name: '', email: '', zip: '' })
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

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
      // TODO: replace with real API
      console.log('Signature:', formData)
      const signatures = JSON.parse(localStorage.getItem('phiers_signatures') || '[]')
      signatures.push({ ...formData, timestamp: new Date().toISOString() })
      localStorage.setItem('phiers_signatures', JSON.stringify(signatures))
      setSubmitState('success')
      setFormData({ name: '', email: '', zip: '' })
      setTimeout(() => setSubmitState('idle'), 3000)
    } catch (err) {
      setErrorMessage('Something went wrong. Please try again.')
      setSubmitState('error')
    }
  }

  return (
    <>
      <Navigation />
      <main id="main-content" className="container pt-24 pb-32">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Add Your Name</h1>
          <p className="text-green text-xl font-semibold mb-2">Your name is leverage.</p>
          <p className="text-gray-300">When 1,500 people in your district sign, your representative must respond — or face replacement.</p>
        </div>

        <div className="text-center mb-4">
          <p className="text-white text-lg font-semibold">Add your name, ZIP, and optional email</p>
          <p className="text-gray-400 text-sm">Email optional – for updates, events, etc. No spam. No sharing.</p>
        </div>

        <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[500px] mx-auto">
          <form id="petition-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-condensed mb-1">Full Name *</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white" required />
            </div>
            <div>
              <label className="block text-white font-condensed mb-1">Email (optional)</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white" />
              <p className="text-gray-500 text-xs mt-1">Only used for district milestone alerts. Unsubscribe anytime.</p>
            </div>
            <div>
              <label className="block text-white font-condensed mb-1">ZIP Code *</label>
              <input type="text" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value.replace(/[^0-9]/g, '').slice(0,5) })} className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white" pattern="[0-9]{5}" maxLength={5} required />
            </div>
            {submitState === 'error' && <p className="text-red-400 text-sm">{errorMessage}</p>}
            {submitState === 'success' && <p className="text-green-400 text-sm">✓ You've been counted in your district.</p>}
            <button type="submit" disabled={submitState === 'submitting'} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg disabled:opacity-50">
              {submitState === 'submitting' ? 'SUBMITTING...' : '✍ ADD MY NAME'}
            </button>
          </form>
          <p className="text-gray-500 text-xs text-center mt-4">Used only to count you in your district. Your information is never shared.</p>
        </div>
      </main>

      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-bg-dark border-t border-green/20 md:hidden z-50">
        <button form="petition-form" type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full">
          ✍ ADD MY NAME
        </button>
      </div>

      <Footer />
    </>
  )
}