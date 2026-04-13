// FILE: app/donate/page.tsx
// DONATE PAGE - Complete with design system

'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import StatBlock from '@/components/StatBlock'

export default function DonatePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Image */}
        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src="/images/DONATE no PHIERS LOGO.jpg"
            alt="Donate — Support the movement"
            fill
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Congress responds to pressure — not promises.<br /><span className="text-green">Your support builds the pressure.</span></h1>
          <p className="text-gray-400 max-w-[700px] mx-auto">The window is open right now. Every dollar builds district-level pressure before Congress goes back to Washington.</p>
        </section>

        <hr className="border-green/20" />

        {/* What Your Support Funds */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <div className="bg-bg-card border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto mb-6">
              <p className="text-body mb-3">Your support funds:</p>
              <div className="grid grid-cols-2 gap-2 max-w-[300px] mx-auto">
                <p className="text-body text-sm">→ Organizing</p>
                <p className="text-body text-sm">→ Outreach</p>
                <p className="text-body text-sm">→ Media</p>
                <p className="text-body text-sm">→ District coordination</p>
              </div>
              <p className="font-condensed text-lg text-white font-bold mt-4">That turns signatures into town halls and town halls into accountability.</p>
            </div>
            
            <div className="max-w-[500px] mx-auto my-4">
              <Image
                src="/images/SUPPORT no PHIERS LOGO.jpg"
                alt="Your support builds the movement"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20"
              />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* One Dollar */}
        <section className="container section text-center">
          <p className="font-condensed text-xl text-gold font-bold mb-2">One dollar from a million people is a million dollars.</p>
          <p className="text-body">A movement funded by the people belongs to the people.</p>
        </section>

        <hr className="border-green/20" />

        {/* Donation Tiers */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatBlock number="$25" label="Outreach to 100 people in your district" />
              <StatBlock number="$50" label="Funds a district team for a week" />
              <StatBlock number="$100" label="Reaches an organizer network in your state" />
              <StatBlock number="$500" label="Funds media that reaches 10,000+ people" />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Donation Methods */}
        <section className="container section text-center">
          <div className="bg-bg-dark border-2 border-green rounded-xl p-6 max-w-[500px] mx-auto">
            <h2 className="font-display text-3xl text-green mb-4">DONATE NOW</h2>
            <div className="space-y-3 text-left max-w-[300px] mx-auto">
              <p><strong className="text-white">Venmo:</strong> @Will4PHIERS</p>
              <p><strong className="text-white">PayPal:</strong> will@phiers.org</p>
              <p><strong className="text-white">Zelle:</strong> (301) 919-0970 <span className="text-xs text-gray-500">[Zelle only]</span></p>
              <p className="mt-3"><Link href="#" className="text-green font-condensed font-bold hover:underline">GoFundMe Campaign →</Link></p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-400 mb-4">Can't donate right now? Your name matters as much as your dollar.</p>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>✍ SIGN THE PETITION</Button>
              <Button href="/action" variant="secondary" fullWidth>📣 SHARE THE MESSAGE</Button>
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
