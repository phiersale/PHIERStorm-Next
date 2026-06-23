// FILE: app/petition/status/page.tsx
// VERSION: 1.0.0 – Launch Rally Page (no signature count)

'use client'

import { useRouter } from 'next/navigation'

export default function PetitionStatusPage() {
  const router = useRouter()
  const surveyURL =
    'https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform'

  const shareText = encodeURIComponent(
    'I just signed the PHIERS petition. Congress needs to do its job — and we have the plan to make it happen. Add your name: https://www.phiers.org/petition'
  )

  return (
    <div className="min-h-screen bg-[#050b19] text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center space-y-8">

        {/* Badge */}
        <div className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
          🚀 Official Launch — Now Active
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Decades in the Making.<br />
          <span className="text-red-500">The Moment Is Now.</span>
        </h1>

        {/* Body */}
        <p className="text-gray-300 text-lg leading-relaxed">
          PHIERS isn't a protest. It's a <strong className="text-white">solutions engine</strong> — 
          built from VA research, BIR validation, and decades of civic systems work. 
          We've mapped the problem. We've built the fix. 
          Now we need Congress to act — and your name is the leverage that makes them.
        </p>

        <p className="text-gray-400 text-base leading-relaxed">
          We are in the earliest days of a grassroots launch. 
          Every signature matters more right now than it ever will again. 
          <strong className="text-white"> Early signers are the foundation</strong> — 
          the ones who were here before it went viral.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-700 w-24 mx-auto" />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/petition"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition text-center"
          >
            ✍ Sign the Petition
          </a>
          <a
            href={surveyURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition text-center"
          >
            📋 Take the Survey
          </a>
        </div>

        {/* Share */}
        <div className="space-y-3">
          <p className="text-gray-500 text-sm uppercase tracking-widest">Share the Launch</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white font-semibold py-2 px-6 rounded-lg transition text-center"
            >
              Share on X / Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://www.phiers.org/petition`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold py-2 px-6 rounded-lg transition text-center"
            >
              Share on Facebook
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('https://www.phiers.org/petition')
                alert('Link copied!')
              }}
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition text-center"
            >
              📋 Copy Link
            </button>
          </div>
        </div>

        {/* Back */}
        <button
          onClick={() => router.push('/')}
          className="text-gray-500 text-sm underline mt-4"
        >
          ← Back to homepage
        </button>

      </div>
    </div>
  )
}
// FILE: app/petition/status/page.tsx (end)