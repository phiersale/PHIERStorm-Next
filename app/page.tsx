// FILE: app/page.tsx
// VERSION: 4.0 – PHIERS-Pause.png, top‑right skip only - REBUILD

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PreHomepage from '@/components/PreHomepage'
import MainHomePage from '@/components/MainHomePage'
import PathosCredibility from '@/components/PathosCredibility'

function PhasedText({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault()
        onComplete()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">

      {/* Background subtle zoom */}
      <div className="absolute inset-0 bg-black animate-slowZoom"></div>

      {/* TOP‑RIGHT SKIP INTRO */}
      <a
        href="/mainhomepage"
        className="absolute top-4 right-4 z-20 text-gray-500/60 text-xs underline hover:text-gray-300 transition"
        style={{ opacity: 0, animation: "fadeIn 0.5s ease forwards" }}
      >
        Skip Intro
      </a> 

      {/* Cinematic gradient fade (adds depth) */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full">

        {/* Logo – responsive top padding */}
        <div className="pt-12 lg:pt-10 pb-4">
          <div className="relative inline-block mx-auto">
            {/* Gentle green glow behind the logo */}
            <div className="absolute inset-0 rounded-full blur-2xl bfg-green/10 scale-110"></div>
            <img
              src="/images/PHIERS-Pause.png"
              alt="PHIERS Pause"
              className="relative w-[55%] sm:w-[40%] md:w-[33%] max-w-sm h-auto mx-auto opacity-100"
              style={{
                opacity: 0,
                animation: "fadeInScale 1.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards"
              }}
            />
          </div>
        </div>

        {/* TEXT BLOCK – responsive bottom padding */}
        <div className="max-w-2xl mx-auto pt-2 pb-10 lg:pb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-relaxed tracking-wide text-gray-100 mb-4"
              style={{ opacity: 0, animation: "fadeIn 1.8s ease forwards" }}>
            Take a deep breath.
          </h1>
          <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-300 mt-4 sm:mt-6"
             style={{ opacity: 0, animation: "fadeIn 2.5s ease forwards" }}>
            What you're about to see is simple.<br />
            It shifts the balance of power — back to you.
          </p>
        </div>

        {/* CONTINUE BUTTON */}
        <button
          onClick={onComplete}
          className="mt-2 lg:mt-3 text-xl font-medium transition-colors duration-300"
            style={{
              opacity: 0,
              color: '#3ddc84',
              animation: "fadeIn 3.5s ease forwards"
            }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#2ab568'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#3ddc84'}
        >
          Continue →
        </button>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}


export default function Page() {
  const router = useRouter()
  const [stage, setStage] = useState<'entry' | 'image' | 'reading' | 'prehome' | 'credibility' | 'main'>('image')
  const [skipFirstImage, setSkipFirstImage] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [stage])
  const [readingVisibleCount, setReadingVisibleCount] = useState(0)
  const [readingComplete, setReadingComplete] = useState(false)

  const readingLines = [
    { type: 'image' },
    { type: 'spacer' },
    { type: 'spacer' },
    { type: 'spacer' },
    { type: 'spacer' },
    { type: 'text', content: "Congress doesn't respond to voters." },
    { type: 'text', content: "They respond to pressure.", isPressureLine: true },
    { type: 'spacer' },
    { type: 'html', content: "<strong class='text-green'>PHIERS creates that pressure.</strong>" },
    { type: 'spacer' },
    { type: 'spacer' },
    { type: 'html', content: "<p class='text-white font-semibold text-lg mt-4 mb-8'>Here's how.</p>" },
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

  if (stage === 'entry') {
    return <PhasedText onComplete={() => setStage('reading')} />
  }

  if (stage === 'image') {
    return (
      <div
        id="powerless-screen"
        className="fixed inset-0 bg-black flex items-center justify-center outline-none"
        tabIndex={0}
        autoFocus
        onClick={() => setStage('entry')}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
            e.preventDefault()
            setStage('entry')
          }
        }}
      >
        {/* TOP‑RIGHT NEXT BUTTON */}
        <button
          onClick={() => setStage('entry')}
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

        {/* LOCAL KEYFRAMES FOR BUTTON FADEIN */}
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

            if (line.type === 'image') {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  className="mb-1 mt-[60px]"
                >
                  <Image
                    src="/images/PHIERS_Things_Changing_Fast.png"
                    alt="Things Changing Fast"
                    width={120}
                    height={120}
                    className="mx-auto w-[90%] sm:w-[65%] h-auto"
                  />
                </motion.div>
              )
            }

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
      <PreHomepage
        skipFirstImageSlide={skipFirstImage}
        onGoToHomepage={() => {
          setSkipFirstImage(false)
          setStage('credibility')
        }}
        onGoToPetition={() => router.push('/petition')}
        onBackToReading={() => setStage('image')}
      />
    )
  }

  if (stage === 'credibility') {
    return (
      <div className="min-h-screen bg-[#050b19] flex flex-col">
        <PathosCredibility onBackToSlides={() => {
          setSkipFirstImage(false)
          setStage('prehome')
        }} />
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
            onClick={() => setStage('main')}
            className="px-6 py-2 text-base font-bold rounded-lg transition"
            style={{
              backgroundColor: '#F5C542',
              color: 'black',
              boxShadow: '0 0 20px rgba(245,197,66,0.35)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E0B032'
              e.currentTarget.style.color = 'black'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F5C542'
              e.currentTarget.style.color = 'black'
            }}
          >
            Continue to Main Site →
          </button>
        </div>
      </div>
    )
  }

  return <MainHomePage onBackToEntry={() => setStage('entry')} />
}
          // FILE: app/page.tsx
