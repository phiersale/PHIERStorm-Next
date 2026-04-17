// app/petition/page.tsx (same as previous, but I'll re‑paste for completeness)
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import PressureForm from '@/components/PressureForm'
import WhyNow from '@/components/WhyNow'
import SectionImage from '@/components/SectionImage'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export default function PetitionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zip: '',
  })

  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitState('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/petition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          zipCode: formData.zip,
          canContact: true,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Unable to submit petition right now.')
      }

      const data = await response.json()
      console.log('API Response:', data)

      if (!data.id) {
        console.error('No id in response:', data)
        throw new Error('Server did not return a signature ID')
      }

      window.location.href = `/thank-you?signatureId=${data.id}`
    } catch (error: any) {
      setSubmitState('error')
      setErrorMessage(error?.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <Navigation />

      <main>
        <div className="container pt-8">
          <SectionImage src="/images/petition-header.jpg" alt="People signing the petition" priority />
        </div>

        <div className="container section text-center pt-8">
          <div className="relative h-[80px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org logo"
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

        {/* QUICK PRESSURE FORM */}
        <section className="container py-6">
          <div className="text-center mb-4">
            <p className="text-white text-lg font-semibold">Before I sign — add my name + ZIP</p>
            <p className="text-gray-400 text-sm">No email required. Just your district on the record.</p>
          </div>
          <PressureForm />
        </section>

        <hr className="border-green/20" />

        {/* FULL PETITION FORM */}
        <section className="container section">
          <div className="text-center mb-4">
            <p className="text-white text-lg font-semibold">Or commit fully — add my name, email, and ZIP</p>
            <p className="text-gray-400 text-sm">We’ll email you when your district reaches 500, 1,000, and 1,500.</p>
          </div>
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
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      zip: e.target.value.replace(/[^0-9]/g, '').slice(0, 5),
                    })
                  }
                  className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white focus:outline-none focus:border-green transition-all"
                  pattern="[0-9]{5}"
                  maxLength={5}
                  required
                />
              </div>

              {submitState === 'error' && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={submitState === 'submitting'}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitState === 'submitting' ? 'Submitting…' : '✍ ADD MY NAME'}
              </button>
            </form>

            <p className="text-gray-500 text-xs text-center mt-4">
              Used only to count you in your district. No spam. No selling. Your information is never shared.
            </p>
          </div>
        </section>

        <div className="container py-6">
          <SectionImage src="/images/1_500_tipping_point.jpg" alt="1,500 people = tipping point" />
        </div>

        <hr className="border-green/20" />

        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        <WhyNow />

        <section className="container section text-center">
          <div className="bg-bg-card border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <p className="font-condensed text-lg text-white font-bold mb-3">Already signed?</p>
            <p className="text-body mb-4">Share this with 5 people in your district.</p>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button href="/action" variant="secondary" fullWidth>
                📣 SHARE THE MOVEMENT
              </Button>
              <Button href="/organizers" variant="secondary" fullWidth>
                ✊ I WANT TO ORGANIZE
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}