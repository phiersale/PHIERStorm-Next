// FILE: app/page.tsx
// VERSION: 7.0.0 – final dispatcher, fallback, returns null

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootDispatcher() {
  const router = useRouter()

  useEffect(() => {
    // Fallback to 'entry' if sessionStorage is blocked or empty
    const stage = sessionStorage.getItem('phiers_stage') || 'entry'

    if (stage === 'main') {
      router.replace('/main')
    } else if (stage === 'credibility') {
      router.replace('/credibility')
    } else if (stage === 'slides') {
      router.replace('/slides')
    } else {
      router.replace('/entry')
    }
  }, [router])

  return null // never renders anything
}