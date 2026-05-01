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
              <div className="flex flex-col items-center justify-center h-full w-full px-4 py-2" onClick={onComplete}>
                <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center space-y-2 text-center" style={{ maxHeight: '90vh', paddingTop: '5vh' }}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Image
                      src="/images/PHIERS-Pause.png"
                      alt="PHIERS - Pause"
                      width={140}
                      height={42}
                      className="mx-auto w-auto max-w-[50%] h-auto"
                      priority
                    />
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: subphase === 'breath' ? 1 : 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-sm sm:text-base md:text-lg font-semibold"
                  >
                    Take a deep breath.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: subphase === 'description' ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 text-gray-300 text-sm sm:text-base max-w-xs mx-auto"
                  >
                    <p>What you’re about to see is simple.</p>
                    <p>It changes the balance of power... to you.</p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: subphase === 'description' ? 1 : 0 }}
                    transition={{ delay: 2.2, duration: 0.6 }}
                    onClick={onComplete}
                    className="text-green/80 underline hover:text-green transition text-sm mt-10"
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

            useEffect(() => {
              window.scrollTo({ top: 0, behavior: 'instant' })
            }, [stage])
            const [readingVisibleCount, setReadingVisibleCount] = useState(0)
            const [readingComplete, setReadingComplete] = useState(false)

            const readingLines = [
              { type: 'image' },
              { type: 'spacer' },
              { type: 'html', content: "<div class='text-center'><div class='text-xl md:text-2xl font-bold text-green mb-0.5'>Less than 3 minutes</div><div class='text-lg md:text-xl text-gray-300'>can create leverage.</div></div>" },
              { type: 'spacer' },
              { type: 'text', content: "Congress doesn’t respond to voters." },
              { type: 'text', content: "They respond to pressure.", isPressureLine: true },
              { type: 'spacer' },
              { type: 'html', content: "<strong class='text-green'>PHIERS creates that pressure.</strong>" },
              { type: 'spacer' },
              { type: 'html', content: "<p class='text-gray-400 text-base'>And if they still won't respond?</p><p class='text-white font-semibold text-lg mt-2'>We replace them. Legally. Before the next election.</p>" },
              { type: 'spacer' },
              { type: 'html', content: "<p class='text-gray-500 text-sm italic'>That's not a threat.</p><p class='text-gray-500 text-sm italic'>That's democracy working the way it was designed to.</p>" },
              { type: 'spacer' },
              { type: 'html', content: "<p class='text-white font-semibold text-lg mt-8 mb-12'>Here's how it works.</p>" },
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
                <div className="fixed inset-0 bg-black overflow-y-auto">
                  <div className="w-full max-w-md mx-auto pt-2">
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
                  <div className="max-w-xl space-y-0.5 w-full text-center">
                    {readingLines.map((line, i) => {
                      if (i >= readingVisibleCount) return null

                      if (line.type === 'image') {
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mb-1"
                          >
                            <Image
                              src="/images/PHIERS_Things_Changing_Fast.png"
                              alt="Things Changing Fast"
                              width={120}
                              height={120}
                              className="mx-auto w-[75%] sm:w-[45%] h-auto"
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