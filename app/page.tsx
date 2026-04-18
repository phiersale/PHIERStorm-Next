'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PreHomepage from '@/components/PreHomepage'
import MainHomePage from '@/components/MainHomePage'

export default function Page() {
  const router = useRouter()
  const [showMain, setShowMain] = useState(false)

  if (!showMain) {
    return (
      <PreHomepage
        onGoToHomepage={() => setShowMain(true)}
        onGoToPetition={() => router.push('/petition')}
      />
    )
  }

  return <MainHomePage />
}