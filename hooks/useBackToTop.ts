// FILE: hooks/useBackToTop.ts
// VERSION: 1.0.0

import { useEffect } from 'react'

export default function useBackToTop() {
  useEffect(() => {
    const handler = () => {
      const btt = document.getElementById('back-to-top')
      if (!btt) return
      if (window.scrollY > 400) btt.classList.add('visible')
      else btt.classList.remove('visible')
    }

    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
}