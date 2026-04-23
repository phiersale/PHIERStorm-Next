// FILE: app/slides/page.tsx
// VERSION: 1.2.0 – guard to enforce funnel order

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import PreHomepage from '@/components/PreHomepage'

export default function SlidesPage() {
  const router = useRouter()

  // Guard: only allow access if stage is 'slides', 'credibility', or 'main'
  useEffect(() => {
    const stage = sessionStorage.getItem('phiers_stage')
    if (stage !== 'slides' && stage !== 'credibility' && stage !== 'main') {
      router.replace('/')
    }
  }, [router])

  const handleComplete = () => {
    sessionStorage.setItem('phiers_stage', 'credibility')
    router.replace('/credibility')
  }

  const handleSkip = () => {
    sessionStorage.setItem('phiers_stage', 'credibility')
    router.replace('/credibility')
  }

  return (
    <PreHomepage
      onGoToHomepage={handleComplete}
      onGoToPetition={() => router.push('/petition')}
      onSkip={handleSkip}
    />
  )
}