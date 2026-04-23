// FILE: app/slides/page.tsx
// VERSION: 1.0.4 – redirects to /credibility on skip

'use client'

import { useRouter } from 'next/navigation'
import PreHomepage from '@/components/PreHomepage'

export default function SlidesPage() {
  const router = useRouter()

  const handleComplete = () => {
    router.push('/credibility')
  }

  const handleSkip = () => {
    router.push('/credibility')
  }

  return (
    <PreHomepage
      onGoToHomepage={handleComplete}
      onGoToPetition={() => router.push('/petition')}
      onSkip={handleSkip}
    />
  )
}