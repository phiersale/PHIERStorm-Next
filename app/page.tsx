// FILE: app/page.tsx
// VERSION: 5.1 – Fixed critical syntax error, added privacy modal to credibility stage

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import UnifiedPreHomepage from '@/components/UnifiedPreHomepage'
import MainHomePage from '@/components/MainHomePage'
import PathosCredibility from '@/components/PathosCredibility'
import TransitionModal from '@/components/TransitionModal'
import FifteenHundredModal from '@/components/FifteenHundredModal'

function CongressIsHomeBanner() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('congress-home-banner-dismissed')
    if (dismissed === 'true') setVisible(false)
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem('congress-home-banner-dismissed', 'true')
  }

  if (!visible) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[80] bg-[#0b1220]/95 backdrop-blur-md border-b border-green/20 text-gray-200 animate-fadeIn"
      role="banner"
      aria-label="Congress is home announcement"
    >
      <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between gap-3 min-h-[44px]">
        <p className="text-xs sm:text-sm font-medium leading-tight flex-1 min-w-0">
          <span className="text-green font-bold">Congress is home until July 13th.</span>
          {' '}Representatives are reachable.{' '}
          <button
            type="button"
            onClick={() => window.open('https://phiers.abacusai.app/survey', '_blank', 'noopener,noreferrer')}
            className="underline font-bold hover:no-underline whitespace-nowrap bg-transparent border-none cursor-pointer p-0 text-green text-xs sm:text-sm"
          >
            Help yours organize →
          </button>
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition text-gray-400 hover:text-white font-bold text-lg leading-none"
          aria-label="Dismiss banner"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default function Page() {
  const [stage, setStage] = useState<'image' | 'prehome' | 'credibility' | 'transition' | 'main'>('image')
  const [skipFirstImage, setSkipFirstImage] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [stage])

  // Check URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('credibility') === 'true') {
      setStage('credibility');
      window.history.replaceState({}, '', window.location.pathname);
    } else if (params.get('reset') === 'true') {
      setStage('image');
      setSkipFirstImage(true);
      window.history.replaceState({}, '', window.location.pathname);
    } else if (params.get('main') === 'true') {
      setStage('main');
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [])

  const handleGoToPetition = () => {
    setStage('credibility')
  }

  const handleGoToSurvey = () => {
    window.open('https://phiers.abacusai.app/survey', '_blank')
  }

  if (stage === 'image') {
    return (
      <div
        id="powerless-screen"
        className="fixed inset-0 bg-black flex items-center justify-center outline-none"
        tabIndex={0}
        autoFocus
        onClick={() => setStage('prehome')}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
            e.preventDefault()
            setStage('prehome')
          }
        }}
      >
        <button
          onClick={() => setStage('prehome')}
          className="fixed top-4 right-4 z-30 text-gray-400/60 text-xs underline hover:text-gray-300 transition"
          style={{ opacity: 0, animation: "fadeIn 0.5s ease forwards" }}
        >
          Continue →
        </button>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src="/images/You_Are_Not_Powerless.jpg"
            alt="You Are Not Powerless"
            width={1200}
            height={800}
            className="w-[94vw] md:w-[72vw] max-w-5xl h-auto object-contain mx-auto"
            priority
          />
        </motion.div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    )
  }

  if (stage === 'prehome') {
    return (
      <>
        <CongressIsHomeBanner />
        <UnifiedPreHomepage
          onGoToHomepage={() => {
            setSkipFirstImage(false)
            setStage('credibility')
          }}
          onGoToCredibility={() => {
            setSkipFirstImage(false)
            setStage('credibility')
          }}
          onBackToReading={() => setStage('image')}
          skipFirstImageSlide={skipFirstImage}
          onGoToPetition={handleGoToPetition}
        />
      </>
    )
  }

  if (stage === 'credibility') {
    return (
      <div className="min-h-screen bg-[#050b19] flex flex-col">
        <CongressIsHomeBanner />
        <PathosCredibility 
          onBackToSlides={() => {
            setSkipFirstImage(false)
            setStage('prehome')
          }}
          onOpenTransitionModal={() => setStage('transition')}
        />
        <div id="credibility-buttons" className="flex justify-center gap-2 pb-2 -mt-4">
          <button
            onClick={() => {
              setSkipFirstImage(false)
              setStage('prehome')
            }}
            className="px-4 py-2 text-sm min-h-[44px] border border-green/40 text-green rounded-md hover:bg-green/10 transition"
          >
            ← Back to Slides
          </button>
          <button
            onClick={() => setStage('transition')}
            className="px-6 py-2 text-base min-h-[44px] font-semibold rounded-lg transition"
            style={{
              backgroundColor: '#F5C542',
              color: '#1a1a1a',
              boxShadow: '0 0 20px rgba(245,197,66,0.25)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E0B032'
              e.currentTarget.style.boxShadow = '0 0 25px rgba(245,197,66,0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F5C542'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(245,197,66,0.25)'
            }}
          >
            Explore the framework →
          </button>
        </div>
      </div>
    )
  }

  if (stage === 'transition') {
    return (
      <>
        <CongressIsHomeBanner />
        <TransitionModal
          onShowFramework={() => { window.location.href = '/the-system' }}
          onSkipVideo={() => setStage('credibility')}
          onSignPetition={() => {
            window.open('https://phiers.abacusai.app/petition/fifteen-hundred', '_blank')
          }}
        />
      </>
    )
  }

  return (
    <>
      <CongressIsHomeBanner />
      <MainHomePage 
        onBackToEntry={() => setStage('image')} 
        onGoToPetition={handleGoToPetition}
        onGoToSurvey={handleGoToSurvey}
      />
      <FifteenHundredModal />
    </>
  )
}

// FILE: app/page.tsx