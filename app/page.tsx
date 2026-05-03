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
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Background subtle zoom */}
      <div className="absolute inset-0 bg-black animate-slowZoom"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <img
          src="/images/PHIERS_Logo.png"
          alt="PHIERS Logo"
          className="w-20 opacity-80 mb-6"
          style={{ opacity: 0, animation: "fadeIn 0.8s ease forwards" }}
        />

        {/* Title */}
        <h1
          className="text-white text-4xl font-semibold tracking-tight mb-6"
          style={{ opacity: 0, animation: "fadeIn 1.2s ease forwards" }}
        >
          Pause.
        </h1>

        {/* Text block */}
        <div
          className="text-white/90 text-lg leading-relaxed space-y-3 max-w-md"
          style={{ opacity: 0, animation: "fadeIn 1.8s ease forwards" }}
        >
          <p>Take a deep breath.</p>
          <p className="text-white/70">What you're about to see is simple.</p>
          <p className="text-white font-medium">
            It shifts the balance of power — back to you.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onComplete}
          className="mt-12 text-xl font-medium transition-colors duration-300"
          style={{
            opacity: 0,
            color: '#3ddc84',
            animation: "fadeIn 2.6s ease forwards"
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#2ab568'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#3ddc84'}
        >
          Continue →
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.02); }
        }

        .animate-slowZoom {
          animation: slowZoom 12s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  )
}

          export default function Page() {
            const router = useRouter()
            const [stage, setStage] = useState<'entry' | 'image' | 'reading' | 'prehome' | 'credibility' | 'main'>('entry')
            const [skipFirstImage, setSkipFirstImage] = useState(true)

            useEffect(() => {
              window.scrollTo({ top: 0, behavior: 'instant' })
            }, [stage])
            const [readingVisibleCount, setReadingVisibleCount] = useState(0)
            const [readingComplete, setReadingComplete] = useState(false)

            // In app/page.tsx, replace the readingLines declaration
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
                <PhasedText 
                  onComplete={() => setStage('image')} 
                />
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
                  {/* Skip button – goes to slideshow (prehome) */}
                  <button
                    onClick={() => {
                      localStorage.setItem('phiers_intro_seen', 'true');
                      setStage('prehome');
                    }}
                    className="absolute top-6 right-6 text-white/40 hover:text-white/70 text-sm transition-opacity duration-300 z-50"
                  >
                    Skip intro →
                  </button>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <Image
                      src="/images/You_Are_Not_Powerless.jpg"
                      alt="You Are Not Powerless"
                      width={1200}
                      height={800}
                      className="w-[80%] md:w-[60%] max-w-2xl h-auto object-contain mx-auto"
                      priority
                    />
                  </motion.div>
                  <p className="absolute bottom-10 text-gray-500 text-sm text-center w-full">
                    Tap anywhere, or press space/enter →
                  </p>
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
                      const isFinalLine = line.content === "Here’s how it works"

                      let className = "text-[0.95rem] md:text-lg text-gray-400 leading-tight"
                      if (isPressureLine) {
                        className = "text-gray-200 text-lg md:text-xl font-semibold"
                      } else if (isFinalLine) {
                        className = "text-[1.15rem] md:text-xl text-white font-semibold mt-0"
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
                  onBackToReading={() => setStage('reading')}
                />
              )
            }

          if (stage === 'credibility') {
            return (
              <div className="min-h-screen bg-[#050b19] flex flex-col">
                <PathosCredibility onBackToSlides={() => {
                  setSkipFirstImage(false);
                  setStage('prehome');
                }} />
                <div id="credibility-buttons" className="flex justify-center gap-4 pb-12">
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
                    className="px-6 py-2 text-base bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition"
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