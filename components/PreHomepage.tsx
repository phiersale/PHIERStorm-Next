// FILE: components/PreHomepage.tsx
// VERSION: 1.0.0
// PURPOSE: 18-slide sequence teaching the mechanism (split economic engine, back button, grounding stat)

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const slides = [
  { title: "Congress can fix most of what's broken.", body: ["It just doesn't have to."] },
  { title: "Not because they can't.", body: ["Because nothing forces them to."] },
  { title: "Opinions don't force action.", body: ["Outrage doesn't force action.", "Noise doesn't force action."] },
  { title: "Only pressure works.", body: ["But only if it's organized in the right place."] },
  { title: "We track how many people in each congressional district", body: ["have gone on record."] },
  { title: "Alone, you're easy to ignore.", body: ["1,500 people in your district are not."] },
  { title: "That's the tipping point.", body: ["Just enough people — in the right place."] },
  {
    title: "1,500 people per district.",
    body: ["Across 435 districts, that's about 650,000 people.", "That's enough to force response nationwide."]
  },
  {
    title: "When 1,500 people are on record,",
    body: ["representatives must respond in public.", "Or they get replaced."]
  },
  { title: "That's leverage.", body: ["Not opinion.", "Not noise.", "Consequence that can't be ignored."] },
  { title: "PHIERS", body: ["Power Held In Every Representative's Seat"] },
  // SPLIT: concrete healthcare savings
  {
    title: "When people stop overpaying for healthcare,",
    body: ["the savings don't disappear.", "They fund more people.", "And the system grows on its own."]
  },
  // SPLIT: abstract mechanism
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
    body: ["“I agree”", "to", "“I’m on record”", "", "Congress has to act.", "Or gets replaced."]
  }
]

export default function PreHomepage({ onGoToHomepage, onGoToPetition }: any) {
  const [index, setIndex] = useState(0)
  const slide = slides[index]

  const next = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1)
    } else {
      onGoToHomepage()
    }
  }

  const prev = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <div className="min-h-screen bg-[#050b19] text-white flex flex-col items-center justify-center px-6 pt-16">
      {/* Logo – not clickable, centered with top spacing */}
      <div className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none">
        <Image src="/images/PHIERS_Logo.png" alt="logo" width={50} height={50} className="opacity-80" />
      </div>

      {/* Clickable content area only */}
      <div onClick={next} className="cursor-pointer text-center max-w-2xl w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-light mb-6">{slide.title}</h1>
            <div className="space-y-3">
              {slide.body.map((line, idx) => (
                <p key={idx} className="text-lg md:text-xl text-gray-300">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-6 flex flex-col items-center gap-3">
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
          {index === slides.length - 1 && (
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
      </div>
    </div>
  )
}
// END FILE: components/PreHomepage.tsx