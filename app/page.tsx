// FILE: app/page.tsx – entry modal or main homepage, with Suspense boundary

import { Suspense } from 'react'
import MainHomePage from '@/components/MainHomePage'

// Client component that reads searchParams and decides what to render
function EntryOrMain() {
  'use client'
  import { useRouter, useSearchParams } from 'next/navigation'
  import { motion } from 'framer-motion'
  import Image from 'next/image'

  const router = useRouter()
  const searchParams = useSearchParams()
  const showMain = searchParams.get('show') === 'main'

  if (showMain) {
    return <MainHomePage />
  }

  const proceed = () => router.push('/slides')

  return (
    <motion.div
      className="fixed inset-0 bg-[#050b19] z-[99999] flex flex-col items-center justify-center cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={proceed}
    >
      <div className="text-center max-w-xl mx-auto px-4">
        <h2 className="text-white text-4xl md:text-5xl font-light mb-3">
          Take a deep breath.
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-1">
          What you’re about to learn is simple.
        </p>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          It changes how power actually works.
        </p>
        <div className="mt-8 mb-6 flex justify-center">
          <Image
            src="/images/You_Are_Not_Powerless.jpg"
            alt="YOU ARE NOT POWERLESS"
            width={350}
            height={175}
            priority
          />
        </div>
        <p className="text-gray-300 text-base md:text-lg mb-6">
          That’s the first thing to remember.
        </p>
        <p className="text-gray-500 text-sm">Click anywhere to continue</p>
      </div>
    </motion.div>
  )
}

// Wrap the client component in Suspense to avoid prerendering bailout
export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050b19]" />}>
      <EntryOrMain />
    </Suspense>
  )
}