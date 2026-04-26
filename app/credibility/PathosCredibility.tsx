// FILE: components/PathosCredibility.tsx
// TEST VERSION – only video and quote

'use client'

export default function PathosCredibility() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-green mb-6">
        Why Pathos Chose to Represent PHIERS
      </h2>

      {/* SIMPLE IFRAME – NO FANCY WRAPPER */}
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/KLu7USN_dao?rel=0"
        title="Pathos Communications discusses PHIERS"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-xl border border-green/20 shadow-lg mb-6"
      ></iframe>

      <div className="text-center mt-8 mb-6">
        <p className="text-green text-xl md:text-2xl font-semibold italic">
          “If you weren’t legit, we wouldn’t risk putting our name behind yours.”
        </p>
        <p className="text-gray-400 text-base mt-2">— Pathos Communications</p>
      </div>
    </div>
  )
}