// FILE: app/page.tsx
// VERSION: 4.0 – PHIERS-Pause.png, top‑right skip only - REBUILD

'use client'
export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PreHomepage from '@/components/PreHomepage'
import MainHomePage from '@/components/MainHomePage'
import PathosCredibility from '@/components/PathosCredibility'
// import OrientationVideo from '@/components/OrientationVideo'
import TransitionModal from '@/components/TransitionModal'
import FifteenHundredModal from '@/components/FifteenHundredModal'

// PhasedText component removed - flow simplified from image directly to prehome


export default function Page() {
  const router = useRouter()
  const [stage, setStage] = useState<'image' | 'reading' | 'prehome' | 'credibility' | 'transition' | 'main'>('image')
  const [skipFirstImage, setSkipFirstImage] = useState(true)
  const [showTransitionModal, setShowTransitionModal] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [stage])

  // Check URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('credibility') === 'true') {
      setStage('credibility');
    } else if (params.get('reset') === 'true') {
      setStage('image');
      setSkipFirstImage(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [])
  const [readingVisibleCount, setReadingVisibleCount] = useState(0)
  const [readingComplete, setReadingComplete] = useState(false)

  const readingLines = [
    { type: 'spacer' },
    { type: 'spacer' },
    { type: 'spacer' },
    { type: 'spacer' },
    { type: 'spacer' },
    { type: 'text', content: "Most people assume Congress listens to voters." },
    { type: 'text', content: "But historically, they've responded more to organized pressure.", isPressureLine: true },
    { type: 'spacer' },
    { type: 'html', content: "<strong class='text-green'>PHIERS is exploring what that could look like.</strong>" },
    { type: 'spacer' },
    { type: 'spacer' },
    { type: 'html', content: "<p class='text-white font-semibold text-lg mt-4 mb-8'>Here's what we've learned so far.</p>" },
  ]

  useEffect(() => {
    if (stage !== 'reading') return
    setReadingVisibleCount(0)
    setReadingComplete(false)

    let intervalId: NodeJS.Timeout | null = null
    let timeoutId: NodeJS.Timeout | null = null

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setReadingVisibleCount(prev => {
          if (prev < readingLines.length) return prev + 1
          if (intervalId) clearInterval(intervalId)
          setReadingComplete(true)
          return prev
        })
      }, 400)
    }, 200)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [stage])



  useEffect(() => {
    if (stage !== 'reading') return

    const handler = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Space') {
        e.preventDefault()
        if (!readingComplete) {
          setReadingVisibleCount(readingLines.length)
          setReadingComplete(true)
        } else {
          setStage('prehome')
        }
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [stage, readingComplete])

  // 'entry' stage removed - flow goes directly from image to prehome

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
        {/* TOP‑RIGHT NEXT BUTTON */}
        <button
          onClick={() => setStage('prehome')}
          className="fixed top-4 right-4 z-30 text-gray-500/60 text-xs underline hover:text-gray-300 transition"
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

  if (stage === 'reading') {
    return (
      <div
        className="fixed inset-0 bg-black flex flex-col items-center justify-start overflow-y-auto px-6 py-2"
        onClick={() => {
          if (!readingComplete) {
            setReadingVisibleCount(readingLines.length)
            setReadingComplete(true)
          } else {
            setStage('prehome')
          }
        }}
      >
        <div className="max-w-xl space-y-1 w-full text-center">
          {readingLines.map((line, i) => {
            if (i >= readingVisibleCount) return null

            if (line.type === 'spacer') {
              return <div key={i} className="h-1" />
            }

            if (line.type === 'html') {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-[1.05rem] md:text-lg text-gray-300 leading-tight"
                  dangerouslySetInnerHTML={{ __html: line.content }}
                />
              )
            }

            const isPressureLine = line.isPressureLine === true
            let className = "text-[0.95rem] md:text-lg text-gray-400 leading-tight"
            if (isPressureLine) {
              className = "text-gray-200 text-lg md:text-xl font-semibold"
            }

            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={className}
              >
                {line.content}
              </motion.p>
            )
          })}
        </div>
      </div>
    )
  }

  if (stage === 'prehome') {
    return (
      <>
        <PreHomepage
          onGoToHomepage={() => {
            setSkipFirstImage(false)
            setStage('credibility')
          }}
          onBackToReading={() => setStage('image')}
        />
      </>
    )
  }

  if (stage === 'credibility') {
    return (
      <div className="min-h-screen bg-[#050b19] flex flex-col">
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
            className="px-4 py-1.5 text-sm border border-green/40 text-green rounded-md hover:bg-green/10 transition"
          >
            ← Back to Slides
          </button>
          <button
            onClick={() => setStage('transition')}
            className="px-6 py-2 text-base font-semibold rounded-lg transition"
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
    return <TransitionModal onContinue={() => setStage('main')} />
  }

  return (
  <>
    {(() => {
      // Mark that the user has completed the intro when main page loads
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('phiers-intro-complete', 'true');
      }
      return null;
    })()}

        {/* Navigation to Movement and Trilogy */}
    <div className="bg-black py-12 px-6 text-center border-t border-gray-800">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/Prophecy/movement" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition border border-gray-700">
            ← THE MOVEMENT
          </a>
          <a href="/Prophecy/trilogy" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition border border-gray-700">
            THE TRILOGY →
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-4">Understand the pattern. Recover the inheritance. Prepare the move.</p>
      </div>
    </div>
    
    <MainHomePage onBackToEntry={() => setStage('image')} />
    
    <FifteenHundredModal />
  </>
)
}
// FILE: app/page.tsx