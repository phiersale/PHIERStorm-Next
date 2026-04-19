'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import PreHomepage from '@/components/PreHomepage'
import MainHomePage from '@/components/MainHomePage'

export default function Page() {
  const router = useRouter()
  const [showMain, setShowMain] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem('entrySequence')
    if (seen) {
      setShowMain(true)
    }
  }, [])

  if (!showMain) {
    return (
      <PreHomepage
        onGoToHomepage={() => {
          localStorage.setItem('entrySequence', '1')
          setShowMain(true)
        }}
        onGoToPetition={() => router.push('/petition')}
      />
    )
  }

  return <MainHomePage />
}