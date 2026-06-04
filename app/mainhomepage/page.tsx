// FILE: app/mainhomepage/page.tsx
// VERSION: 2.0.0 – Redirects to canonical entry point

'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function MainHomepageRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/')
  }, [router])
  return null
}

// FILE: app/mainhomepage/page.tsx (end)