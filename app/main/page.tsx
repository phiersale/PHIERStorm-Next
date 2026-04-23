// FILE: app/main/page.tsx
// VERSION: 1.1.0 – locks phiers_stage to 'main'

'use client'

import { useEffect } from 'react'
import MainHomePage from '@/components/MainHomePage'

export default function MainPage() {
  // Ensure the user is permanently marked as having reached main
  useEffect(() => {
    sessionStorage.setItem('phiers_stage', 'main')
  }, [])

  return <MainHomePage />
}