// app/join/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function JoinPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center bg-[#0f3460]/80 rounded-lg border border-green-500/30 p-8 mb-12">
            <div className="flex justify-center mb-4">
              <Image src="/images/PHIERS_Logo.png" alt="PHIERS Logo" width={100} height={100} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-2">🚀 Join the Movement</h1>
            <p className="text-green-300 text-lg">Organize. Build. Change Everything.</p>

            {/* Urgency box */}
            <div className="mt-6 bg-red-500/20 border-l-4 border-red-500 p-5 rounded text-left">
              <p><strong>⏰ CRITICAL WINDOW: Congress home Dec 16-31</strong></p>
              <p>Insurance premiums DOUBLE Dec 31. Shutdown deadline forces vote Jan 30. This 46-day window will NOT come again.</p>
              <p><strong>After Jan 31, Congress returns to DC and the pressure window closes.</strong></p>
              <p className="mt-2 text-red-300"><strong>This is not a drill. This is the moment.</strong></p>
            </div>
          </div>

          {/* Commitment Levels */}
          <section className="bg-[#1a1a2e]/90 border-l-4 border-green-500 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-green-400 border-b border-green-500 pb-2 mb-6">💪 Three Commitment Levels</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Level 1 */}
              <div className="bg-green-500/10 border border-green-500 rounded-lg p-5">
                <h3 className="text-xl font-bold text-green-400">🟢 LEVEL 1: SUPPORTER</h3>
                <p className="text-sm text-green-300 mb-3">1–3 hours/week</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Sign the petition</li>
                  <li>Fill out the survey</li>
                  <li>Share with your network</li>
                  <li>Donate if able</li>
                  <li>Attend one town hall</li>
                </ul>
                <p className="mt-4 text-green-300 text-sm"><strong>You're the documented base Congress can't ignore.</strong></p>
              </div>
              {/* Level 2 */}
              <div className="bg-green-500/10 border border-green-500 rounded-lg p-5">
                <h3 className="text-xl font-bold text-green-400">🟡 LEVEL 2: VOLUNTEER</h3>
                <p className="text-sm text-green-300 mb-3">3–10 hours/week</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Lead signature drives</li>
                  <li>Manage social media</li>
                  <li>Make calls to constituents</li>
                  <li>Recruit other volunteers</li>
                  <li>Coordinate events</li>
                </ul>
                <p className="mt-4 text-green-300 text-sm"><strong>You're building visible momentum.</strong></p>
              </div>
              {/* Level 3 */}
              <div className="bg-green-500/10 border border-green-500 rounded-lg p-5">
                <h3 className="text-xl font-bold text-green-400">🔴 LEVEL 3: ORGANIZER</h3>
                <p className="text-sm text-green-300 mb-3">10+ hours/week</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Lead district organizing</li>
                  <li>Coordinate volunteer teams</li>
                  <li>Drive strategy execution</li>
                  <li>Train other organizers</li>
                  <li>Be the face Congress sees</li>
                </ul>
                <p className="mt-4 text-green-300 text-sm"><strong>You're the organizing force.</strong></p>
              </div>
            </div>
          </section>

          {/* Impact Stats */}
          <section className="bg-[#1a1a2e]/90 border-l-4 border-green-500 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-green-400 border-b border-green-500 pb-2 mb-6">📊 What Happens When You Organize</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">1,500</div>
                <div className="text-sm">Signatures per district = forced town halls</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">$1.95B</div>
                <div className="text-sm">Economic leverage per district</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">100M+</div>
                <div className="text-sm">Americans = 9x proven threshold</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">230:1</div>
                <div className="text-sm">Advantage over pharma lobbying</div>
              </div>
            </div>
            <p className="text-center text-green-300 mt-4"><strong>Your organizing creates unstoppable pressure.</strong></p>
          </section>

          {/* Call to Action */}
          <section className="bg-[#1a1a2e]/90 border-l-4 border-green-500 rounded-lg p-6 mb-12 text-center">
            <h2 className="text-2xl font-bold text-green-400 mb-4">✍️ Ready to Join?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/petition" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition">✏️ Sign Petition</Link>
              <Link href="/survey" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition">📋 Fill Survey</Link>
              <a href="https://phiersale.github.io/PHIERS-Concept/Donate.html" target="_blank" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition">💰 Support Mission</a>
            </div>
            <div className="mt-8 bg-green-500/20 border border-green-500 p-6 rounded-lg">
              <p className="text-green-400 text-lg font-bold">Congress Failed Dec 11.</p>
              <p className="text-green-300 text-md"><strong>We're Taking Over Dec 31–Jan 30.</strong></p>
            </div>
          </section>

          {/* Footer (internal) */}
          <footer className="border-t border-green-500/30 pt-6 text-center text-sm text-gray-400">
            <p><strong>PHIERS Movement | Make America Better And Healthier (MABAH)</strong></p>
            <p>Will Price | Chief Solutions Architect | 916-306-8967 | <a href="mailto:info@phiers.org" className="text-green-400">info@phiers.org</a></p>
            <p className="mt-2">
              <Link href="/" className="text-green-400 mx-1">Main Site</Link> |
              <a href="https://phiersale.github.io/PHIERS-Concept/Donate.html" className="text-green-400 mx-1">Donate</a> |
              <Link href="/media" className="text-green-400 mx-1">Media Library</Link>
            </p>
            <p className="mt-4">© PHIERS.org - People's Health Insurance Endowment and Referral Service | Prior art documented since 2014</p>
          </footer>
        </div>
      </main>
      <Footer />

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-600/95 border-t-2 border-green-400 p-3 flex flex-wrap gap-2 justify-center z-50">
        <Link href="/petition" className="bg-white text-green-800 font-bold px-4 py-2 rounded-lg text-sm hover:bg-gray-100">✏️ SIGN PETITION</Link>
        <Link href="/survey" className="bg-white text-green-800 font-bold px-4 py-2 rounded-lg text-sm hover:bg-gray-100">📋 FILL SURVEY</Link>
      </div>
    </>
  )
}