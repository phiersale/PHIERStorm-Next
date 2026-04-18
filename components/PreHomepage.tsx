'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    title: "CONGRESS RESPONDS TO PRESSURE.",
    subtitle: "NOT OPINION."
  },
  {
    title: "ALONE, YOU'RE EASY TO IGNORE.",
    subtitle: "1,500 PEOPLE IN YOUR DISTRICT IS NOT."
  },
  {
    title: "THIS DOESN'T RUN ON DONATIONS.",
    subtitle: "IT RUNS ON MATH.",
    small: "Savings create growth. Growth creates pressure. Pressure creates results."
  },
  {
    title: "THIS IS HOW PRESSURE BECOMES UNAVOIDABLE.",
    subtitle: "YOU'RE NOT JOINING AN IDEA. YOU'RE JOINING MOMENTUM."
  }
]

export default function PreHomepage({
  onGoToHomepage,
  onGoToPetition
}: {
  onGoToHomepage: () => void
  onGoToPetition: () => void
}) {
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(false)
  const hasChecked = useRef(false)

  useEffect(() => {
    if (hasChecked.current) return
    hasChecked.current = true
    const seen = sessionStorage.getItem('preHomepageSeen')
    if (!seen) {
      setVisible(true)
    } else {
      onGoToHomepage()
    }
  }, [onGoToHomepage])

  const next = () => {
    if (step < slides.length - 1) {
      setStep(step + 1)
    }
  }

  const finish = (destination: 'homepage' | 'petition') => {
    sessionStorage.setItem('preHomepageSeen', '1')
    setVisible(false)
    setTimeout(() => {
      if (destination === 'homepage') onGoToHomepage()
      else onGoToPetition()
    }, 300)
  }

  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] bg-[#050b19] flex flex-col justify-between p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Skip button */}
        <div className="flex justify-end">
          <button
            onClick={() => finish('homepage')}
            className="text-gray-400 text-sm hover:text-white transition"
          >
            Skip →
          </button>
        </div>

        {/* Content */}
        <div
          className="flex flex-col items-center justify-center text-center flex-1 cursor-pointer"
          onClick={step < slides.length - 1 ? next : undefined}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-[700px]"
            >
              <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 leading-tight">
                {slides[step].title}
              </h1>
              <h2 className="text-green text-xl md:text-3xl font-extrabold mb-4">
                {slides[step].subtitle}
              </h2>
              {slides[step].small && (
                <p className="text-gray-400 text-sm mt-2">
                  {slides[step].small}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {step < slides.length - 1 && (
            <p className="text-gray-500 text-xs mt-10">
              Tap anywhere to continue
            </p>
          )}
        </div>

        {/* Bottom navigation */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === step ? 'bg-green' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          {step === slides.length - 1 && (
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
              <button
                onClick={() => finish('petition')}
                className="bg-green text-black font-bold py-3 rounded-lg"
              >
                ✍ BE COUNTED
              </button>
              <button
                onClick={() => finish('homepage')}
                className="border border-green text-green font-bold py-3 rounded-lg"
              >
                See how it works →
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}