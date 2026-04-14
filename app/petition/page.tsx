'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export default function PetitionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zip: '',
  })

  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [districtResult, setDistrictResult] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitState('submitting')
    setErrorMessage('')
    setDistrictResult('')

    try {
      const response = await fetch('/api/petition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          zipCode: formData.zip,
          topConcerns: [],
          endWar: '',
          article25: '',
          investigations: '',
          solutions: [],
          willOrganize: false,
          canContact: true,
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || 'Unable to submit petition right now.')
      }

      setSubmitState('success')
      setDistrictResult(data?.district || '')
      setFormData({ name: '', email: '', zip: '' })
    } catch (error: any) {
      setSubmitState('error')
      setErrorMessage(error?.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <Navigation />

      <main>
        <div className="container section text-center pt-32">
          <div className="relative h-[80px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={80}
              height={80}
              className="opacity-90"
            />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Your Name. <span className="text-green">Your District.</span><br />On the Record.
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[700px] mx-auto mb-6">
            Power Held In Every Representative&apos;s Seat. When 1,500 people in your district sign, a mandatory town hall is triggered — and your representative must show up, answer publicly, and respond under real electoral pressure.
          </p>

          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-4 max-w-[600px] mx-auto mb-6">
            <p className="text-green font-bold text-sm">District counts begin compiling immediately.</p>
          </div>
        </div>

        <hr className="border-green/20" />

        <section className="container section">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[500px] mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-condensed mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white focus:outline-none focus:border-green transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-condensed mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white focus:outline-none focus:border-green transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-condensed mb-1">ZIP Code</label>
                <input
                  type="text"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value.replace(/[^0-9]/g, '').slice(0, 5) })}
                  className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white focus:outline-none focus:border-green transition-all"
                  pattern="[0-9]{5}"
                  maxLength={5}
                  required
                />
              </div>

              {submitState === 'error' && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}

              {submitState === 'success' && (
                <div className="bg-green/10 border border-green/40 rounded-lg p-3">
                  <p className="text-green font-bold text-sm">✓ Signature counted successfully.</p>
                  {districtResult && <p className="text-green/90 text-xs mt-1">District detected: {districtResult}</p>}
                </div>
              )}

              <Button type="submit" variant="primary" fullWidth>
                {submitState === 'submitting' ? 'Submitting...' : '✍ ADD MY NAME'}
              </Button>
            </form>

            <p className="text-gray-500 text-xs text-center mt-4">Used only to count you in your district. No spam. No selling. Your information is never shared.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        <section className="container section text-center">
          <div className="bg-bg-card border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <p className="font-condensed text-lg text-white font-bold mb-3">Already signed?</p>
            <p className="text-body mb-4">Share this with 5 people in your district.</p>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button href="/action" variant="secondary" fullWidth>📣 SHARE THE MOVEMENT</Button>
              <Button href="/organizers" variant="secondary" fullWidth>✊ I WANT TO ORGANIZE</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
