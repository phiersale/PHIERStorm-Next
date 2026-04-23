// FILE: components/PathosCredibility.tsx
// VERSION: 1.1.0 – viewport‑triggered fade + scale, respects reduced motion

'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function PathosCredibility() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = (e: MediaQueryListEvent | MediaQueryList) => setPrefersReducedMotion(e.matches)
    update(media)
    if (media.addEventListener) media.addEventListener('change', update)
    else media.addListener(update)
    return () => {
      if (media.removeEventListener) media.removeEventListener('change', update)
      else media.removeListener(update)
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      controls.set({ opacity: 1, scale: 1 })
      return
    }
    if (isInView) {
      controls.start({ opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } })
    }
  }, [isInView, controls, prefersReducedMotion])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={controls}
      className="w-full py-20 px-6 md:px-12 border-y border-neutral-800"
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
    </motion.section>
  )
}

// FILE: components/PathosCredibility.tsx (end)
// VERSION: 1.1.0