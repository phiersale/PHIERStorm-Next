// FILE: app/page.tsx
// VERSION: 2.8 – 

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PreHomepage from '@/components/PreHomepage'
import MainHomePage from '@/components/MainHomePage'
import PathosCredibility from '@/components/PathosCredibility'

function PhasedText({ onComplete }: { onComplete: () => void }) {
  const [subphase, setSubphase] = useState<'pause' | 'breath' | 'description'>('pause')

  useEffect(() => {
    const t1 = setTimeout(() => setSubphase('breath'), 400)
    const t2 = setTimeout(() => setSubphase('description'), 800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Space') {
        e.preventDefault()
        onComplete()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onComplete])

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 pt-6 pb-12 text-center">
      <div className="w-full max-w-md mx-auto">
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
          <Image
            src="/images/PHIERS-Pause.png"
            alt="PHIERS - Pause"
            width={240}
            height={72}
            className="mx-auto w-auto max-w-[80%] h-auto"
            priority
          />
        </motion.div>
      </div>

      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: subphase === 'breath' ? 1 : 1 }}
          transition={{ duration: 0.6 }}
          className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          Take a deep breath.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: subphase === 'description' ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 text-gray-300 text-base sm:text-lg md:text-xl max-w-md mx-auto"
        >
          <p>What you’re about to see is simple.</p>
          <p>It changes the balance of power... to you.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: subphase === 'description' ? 1 : 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full flex justify-center my-4"
        >
          <Image
            src="/images/Congress-Is_Anybody_Home.jpg"
            alt="Congress Is Anybody Home"
            width={380}
            height={231}
            className="w-4/5 max-w-[340px] h-auto rounded-md shadow-lg"
            priority
          />
        </motion.div>

        <motion.button
          animate={{ opacity: subphase === 'description' ? 1 : 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          onClick={onComplete}
          className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition text-lg"
        >
          Continue →
        </motion.button>
      </div>
    </div>
  )
}

export default function Page() {
  const router = useRouter()
  const [stage, setStage] = useState<'entry' | 'image' | 'reading' | 'prehome' | 'credibility' | 'main'>('entry')
  const [skipFirstImage, setSkipFirstImage] = useState(true)
  const [readingVisibleCount, setReadingVisibleCount] = useState(0)
  const [readingComplete, setReadingComplete] = useState(false)

  const readingLines = [
    { type: 'image' },
    { type: 'spacer' },
    { type: 'text', content: "Things are moving fast." },
    { type: 'text', content: "Three minutes can change that." },
    { type: 'spacer' },
    { type: 'text', content: "Congress doesn't respond to voters." },
    {
      type: 'text',
      content: "It responds to pressure.",
      isPressureLine: true
    },
    { type: 'spacer' },
    { type: 'text', content: "PHIERS puts you on record." },
    { type: 'text', content: "Records become leverage." },
    { type: 'text', content: "Leverage becomes pressure." },
    { type: 'text', content: "Pressure forces action." },
    { type: 'spacer' },
    { type: 'text', content: "Here's how it works." }
  ]

  useEffect(() => {
    if (stage !== 'reading') return
    setReadingVisibleCount(0)
    setReadingComplete(false)

    const interval = setInterval(() => {
      setReadingVisibleCount(prev => {
        if (prev < readingLines.length) return prev + 1
        clearInterval(interval)
        setReadingComplete(true)
        return prev
      })
    }, 250) // faster reveal, similar to slide rhythm

    return () => clearInterval(interval)
  }, [stage])

  useEffect(() => {
    if (stage === 'image') {
      const el = document.getElementById('powerless-screen')
      if (el) el.focus()
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
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center p-2">
        <div className="w-full max-w-md h-full max-h-screen overflow-hidden">
          <PhasedText onComplete={() => setStage('image')} />
        </div>
      </div>
    )
  }

  if (stage === 'image') {
    return (
      <div
        id="powerless-screen"
        className="fixed inset-0 bg-black flex items-center justify-center outline-none"
        tabIndex={0}
        autoFocus
        onClick={() => setStage('reading')}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
            e.preventDefault()
            setStage('reading')
          }
        }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Image
            src="/images/You_Are_Not_Powerless.jpg"
            alt="You Are Not Powerless"
            width={1200}
            height={800}
            className="w-[95%] max-w-[95%] h-auto object-contain md:h-full mx-auto"
            priority
          />
        </motion.div>
        <p className="absolute bottom-10 text-gray-500 text-sm text-center w-full">
          Press space or enter →
        </p>
      </div>
    )
  }

  if (stage === 'reading') {
    return (
      <div
        className="fixed inset-0 bg-black flex items-center justify-center px-6 text-center"
        onClick={() => {
          if (!readingComplete) {
            setReadingVisibleCount(readingLines.length)
            setReadingComplete(true)
          } else {
            setStage('prehome')
          }
        }}
      >
        <div className="max-w-xl space-y-1.5 md:space-y-2 w-full">
          {readingLines.map((line, i) => {
            if (i >= readingVisibleCount) return null

            if (line.type === 'image') {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mb-3"
                >
                  <Image
                    src="/images/PHIERS_Things_Changing_Fast.png"
                    alt="Things Changing Fast"
                    width={220}
                    height={220}
                    className="mx-auto w-[75%] h-auto"
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
            const isFinalLine = line.content === "Here’s how it works"

            let className = "text-[0.95rem] md:text-lg text-gray-400 leading-tight"
            if (isPressureLine) {
              className = "text-gray-200 text-lg md:text-xl font-semibold"
            } else if (isFinalLine) {
              className = "text-[1.15rem] md:text-xl text-white font-semibold mt-2"
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
          setSkipFirstImage(true)
          setStage('credibility')
        }}
        onGoToPetition={() => router.push('/petition')}
      />
    )
  }

if (stage === 'credibility') {
  return (
    <div className="min-h-screen bg-[#050b19] flex flex-col">
      <PathosCredibility />
      <div id="credibility-buttons" className="flex justify-center gap-4 pb-12">
        <button
          onClick={() => {
            setSkipFirstImage(false)
            setStage('prehome')
          }}
          className="px-6 py-2 border border-green/40 text-green rounded-md hover:bg-green/10 transition"
        >
          ← Back to Slides
        </button>
        <button
          onClick={() => setStage('main')}
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
        >
          Continue to Main Site →
        </button>
      </div>
    </div>
  )
}

  return <MainHomePage />
}

// FILE: app/page.tsx