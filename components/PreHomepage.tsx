'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Props = {
  onGoToHomepage: () => void
  onGoToPetition: () => void
}

const slides = [
  {
    title: "Congress can fix most of what's broken.",
    body: ["It just doesn't have to."]
  },
  {
    title: "Not because people don't care.",
    body: ["Because nothing forces them to."]
  },
  {
    title: "Opinions don't force action.",
    body: ["Outrage doesn't force action.", "Noise doesn't force action."]
  },
  {
    title: "Only pressure works.",
    body: ["But only if it's organized", "in the right place."]
  },
  {
    title: "We track how many people in each congressional district",
    body: ["have gone on record and filled out the survey."]
  },
  {
    title: "Alone, you're easy to ignore.",
    body: ["1,500 people in your district are not."]
  },
  {
    title: "That's the tipping point.",
    body: ["Not millions.", "Not a national wave.", "Just enough people — in the right place."]
  },
  {
    title: "When 1,500 people in a congressional district are on record,",
    body: ["representatives have to respond in public.", "Or risk being replaced."]
  },
  {
    title: "That's leverage.",
    body: []
  },
  {
    title: "Savings create growth.",
    body: ["Growth creates pressure.", "Pressure creates results."]
  },
  {
    title: "When people stop overpaying for healthcare,",
    body: ["the savings don't disappear.", "They fund more people.", "And the system grows on its own."]
  },
  {
    title: "PHIERS",
    body: ["Power Held In Every Representative's Seat"]
  },
  {
    title: "This doesn't run on donations.",
    body: ["It runs on coordination.", "And accountable representatives."]
  },
  {
    title: "If enough people move from",
    body: ["“I agree”", "to", "“I’m on record”", "everything changes."]
  }
]

export default function PreHomepage({ onGoToHomepage, onGoToPetition }: Props) {
  const [index, setIndex] = useState(0)

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

  const slide = slides[index]

  return (
    <div
      className="min-h-screen bg-[#050b19] text-white flex flex-col items-center justify-center px-6 text-center cursor-pointer font-sans"
      onClick={next}
    >
      <div className="absolute top-6">
        <Image
          src="/images/PHIERS_Logo.png"
          alt="PHIERS"
          width={50}
          height={50}
          className="opacity-80"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <h1 className="text-3xl md:text-5xl font-light mb-6">
            {slide.title}
          </h1>
          <div className="space-y-3">
            {slide.body.map((line, i) => (
              <p key={i} className="text-lg md:text-xl text-gray-300">
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 flex flex-col items-center gap-3">
        <p className="text-gray-500 text-sm">
          Click to continue • {index + 1}/{slides.length}
        </p>
        <div className="flex gap-4">
          {index > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="text-gray-500 text-sm underline"
            >
              Back
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