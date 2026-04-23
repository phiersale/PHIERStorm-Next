// FILE: app/credibility/page.tsx
// VERSION: 1.0.0

'use client'

import PathosCredibility from '@/components/PathosCredibility'

export default function CredibilityPage() {
  const goToMain = () => {
    window.location.href = '/main'
  }

  return (
    <div className="min-h-screen bg-[#050b19] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-neutral-500 text-base md:text-lg max-w-xl mx-auto mb-8">
          If this feels different, it’s because it is.
        </p>

        <PathosCredibility />

        <div className="max-w-3xl mx-auto w-full mt-6">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-green/20 shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/KLu7USN_dao?rel=0"
              title="Pathos Communications endorsement video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-3">
            A Fortune 500 PR firm publicly staking their reputation on PHIERS.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={goToMain}
            type="button"
            className="bg-green/60 text-black text-sm md:text-base font-semibold py-2 px-6 rounded-md hover:bg-green/70 transition focus:outline-none focus:ring-2 focus:ring-green"
          >
            Continue to site →
          </button>
        </div>
      </div>
    </div>
  )
}