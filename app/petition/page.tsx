// FILE: app/petition/page.tsx - NEW (Tiers 1-7 applied)

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function PetitionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zip: ''
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')
    
    // In production, this would send to a backend
    console.log('Petition signed:', formData)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', zip: '' })
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
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
            Power Held In Every Representative's Seat. When 1,500 people in your district sign, a mandatory town hall is triggered — and your representative must show up, answer publicly, and respond under real electoral pressure.
          </p>
          
          {/* District counts note */}
          <div className="bg-green-glow border-l-4 border-l-green rounded-r-lg p-4 max-w-[600px] mx-auto mb-6">
            <p className="text-green font-bold text-sm">District counts begin compiling immediately.</p>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Petition Form */}
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
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white focus:outline-none focus:border-green transition-all"
                  required
                />
              </div>
              <Button type="submit" variant="primary" fullWidth>
                {submitStatus === 'success' ? '✓ SIGNATURE COUNTED' : '✍ ADD MY NAME'}
              </Button>
            </form>
            
            {/* Privacy note */}
            <p className="text-gray-500 text-xs text-center mt-4">Used only to count you in your district. No spam. No selling. Your information is never shared.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Anchor Line */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Final CTA */}
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

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

      <style jsx global>{`
        .back-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--green);
          color: var(--bg-deep);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 150ms ease;
          z-index: 999;
          border: none;
        }
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        .back-to-top:hover {
          background: #2ab568;
          transform: translateY(-2px);
        }
        .bg-green-glow {
          background: rgba(61, 220, 132, 0.06);
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            var btt = document.getElementById('back-to-top');
            if (btt) {
              if (window.scrollY > 400) {
                btt.classList.add('visible');
              } else {
                btt.classList.remove('visible');
              }
            }
          });
        `
      }} />
    </>
  )
}

// END FILE: app/petition/page.tsx - TIERS 1-7 COMPLETE
