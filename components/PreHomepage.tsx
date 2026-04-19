// FILE: components/PreHomepage.tsx (START)
// VERSION: 1.5.0 (PHIERS slide with large logo + optional modal)

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Add a modal for the PHIERS acronym image (reuse existing modal logic)
// I'll integrate it simply: when logo is clicked, open modal.

const slides = [
  { title: "Congress can fix most of what's broken.", body: ["It just doesn't have to."] },
  { title: "Not because they can't.", body: ["Because nothing forces them to."] },
  { title: "Opinions don't force action.", body: ["Outrage doesn't force action.", "Noise doesn't force action."] },
  { title: "Only pressure works.", body: ["But only if it's organized in the right place."] },
  { 
    title: "We track how many people in each congressional district", 
    body: [
      "have gone on record.",
      "Not opinions — real people, counted."
    ] 
  },
  { title: "Alone, you're easy to ignore.", body: ["1,500 people in your district are not."] },
  { title: "That's the tipping point.", body: ["Just enough people — in the right place."] },
  {
    title: "1,500 people per district.",
    body: [
      "Across 435 districts, that's about 650,000 people.",
      "That's all it takes to force response nationwide."
    ]
  },
  {
    title: "When 1,500 people are on record,",
    body: [
      "representatives are forced to respond in public.",
      "Or they risk being replaced."
    ]
  },
  { title: "That's leverage.", body: ["Not opinion.", "Not noise.", "Consequence that can't be ignored."] },
  // SLIDE 11 – PHIERS with large logo
  { 
    title: "PHIERS", 
    body: ["Power Held In Every Representative's Seat"],
    showLogo: true  // new flag
  },
  {
    title: "When people stop overpaying for healthcare,",
    body: ["the savings don't disappear.", "They fund more people.", "And the system grows on its own."]
  },
  {
    title: "That's how this works.",
    body: ["Savings create growth.", "Growth creates pressure.", "Pressure creates results."]
  },
  {
    title: "This doesn't run on donations.",
    body: ["It runs on coordination.", "And accountability.", "Representatives respond — or they get replaced."]
  },
  {
    title: "If enough people move from",
    body: ["“I agree”", "to", "“I’m on record”", "", "Congress acts.", "Or gets replaced."]
  }
]

export default function PreHomepage({ onGoToHomepage, onGoToPetition }: any) {
  const [index, setIndex] = useState(0)
  const [flash, setFlash] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)  // for acronym image modal
  const slide = slides[index]

  const next = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1)
    } else {
      onGoToHomepage()
    }
    triggerFlash()
  }

  const prev = () => {
    if (index > 0) setIndex(index - 1)
    triggerFlash()
  }

  const triggerFlash = () => {
    setFlash(true)
    setTimeout(() => setFlash(false), 150)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        next()
        triggerFlash()
      }
      if (e.key === 'ArrowLeft') {
        prev()
        triggerFlash()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index])

  const isLastSlide = index === slides.length - 1

  return (
    <div className="relative min-h-screen bg-[#050b19] text-white flex flex-col font-sans overflow-hidden">
      {/* Whole‑screen flash overlay */}
      <AnimatePresence>
        {flash && (
          <motion.div
            className="fixed inset-0 bg-white/20 pointer-events-none z-[99998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        )}
      </AnimatePresence>

      {/* Modal for acronym image (full screen) */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-[99999] flex items-center justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <div className="relative max-w-4xl max-h-full p-4">
              <Image
                src="/images/PHIERS-Power_Held_In_Every_Reps_Seat.jpg"
                alt="PHIERS acronym explanation"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                onError={(e) => console.error('Acronym image failed to load')}
              />
              <p className="text-gray-400 text-sm text-center mt-4">Tap anywhere to close</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top bar: logo + SKIP button */}
      <div className="relative pt-4 px-4 flex justify-between items-center z-10">
        <div className="w-10 h-10">
          <Image src="/images/PHIERS_Logo.png" alt="logo" width={40} height={40} className="opacity-80" />
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onGoToHomepage(); }}
          className="text-gray-500 text-sm underline hover:text-gray-300"
        >
          SKIP
        </button>
      </div>

      {/* Main content – clickable area for next */}
      <div
        onClick={next}
        className="flex-grow flex flex-col justify-center px-6 py-8 cursor-pointer z-10"
      >
        <div className="text-center max-w-2xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Show large logo if slide has showLogo flag */}
              {slide.showLogo && (
                <div 
                  className="flex justify-center mb-6 cursor-pointer"
                  onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
                >
                  <Image
                    src="/images/PHIERS_Logo.png"
                    alt="PHIERS Logo"
                    width={100}
                    height={100}
                    className="opacity-90 hover:opacity-100 transition"
                  />
                </div>
              )}
              <h1 className="text-3xl md:text-5xl font-light mb-6">{slide.title}</h1>
              <div className="space-y-3">
                {slide.body.map((line, idx) => (
                  <p key={idx} className="text-base md:text-xl text-gray-300">
                    {line}
                  </p>
                ))}
              </div>
              {/* Optional hint to click logo for more info */}
              {slide.showLogo && (
                <p className="text-gray-500 text-xs mt-4">(Click logo to see full acronym explanation)</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="pb-6 pt-2 flex flex-col items-center gap-2 z-10">
        <p className="text-gray-500 text-sm">
          {index + 1} / {slides.length}
        </p>
        <div className="flex gap-4">
          {index > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="text-gray-500 text-sm underline hover:text-gray-300"
            >
              ← Back
            </button>
          )}
          {isLastSlide && (
            <div className="flex gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); onGoToPetition(); }}
                className="bg-green text-black px-4 py-2 rounded-md font-bold"
              >
                ✍ BE COUNTED
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onGoToHomepage(); }}
                className="border border-green px-4 py-2 rounded-md"
              >
                → SEE HOW IT WORKS
              </button>
            </div>
          )}
        </div>
        {index === 0 && (
          <p className="text-gray-600 text-xs mt-2">
            ← → keys or click to continue
          </p>
        )}
      </div>
    </div>
  )
}
// FILE: components/PreHomepage.tsx (END)