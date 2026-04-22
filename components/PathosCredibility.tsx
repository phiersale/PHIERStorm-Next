// FILE: components/PathosCredibility.tsx
// VERSION: 1.0.0 (fade‑in credibility block, exact copy)

'use client'

import { useEffect, useState } from 'react'

export default function PathosCredibility() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className={`
        w-full py-20 px-6 md:px-12 border-y border-neutral-800
        transition-opacity duration-1000 ease-out
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
          Independently reviewed
        </p>

        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-4 text-white">
          “If you weren’t legit, we wouldn’t risk putting our name behind yours.”
        </blockquote>

        <p className="text-base text-neutral-400 mb-4">
          — Pathos Communications
        </p>

        <p className="text-sm text-neutral-500">
          A national PR firm reviewed PHIERS and confirmed the strategy holds up.
        </p>
      </div>
    </section>
  )
}