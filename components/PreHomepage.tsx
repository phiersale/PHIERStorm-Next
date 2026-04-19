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
    title: "This is not complicated.",
    body: [
      "You already understand how this works.",
      "You just haven’t seen it all in one place."
    ]
  },
  {
    title: "Congress can act.",
    body: [
      "They have the authority.",
      "They have the information.",
      "They have the capacity.",
      "And yet — most of what matters doesn’t change."
    ]
  },
  {
    title: "That’s not confusion.",
    body: [
      "And it’s not because people don’t care.",
      "Most people are paying attention.",
      "They’re speaking up.",
      "They’re trying."
    ]
  },
  {
    title: "But they’re doing it alone.",
    body: [
      "And alone, people don’t create pressure.",
      "They create noise."
    ]
  },
  {
    title: "And noise doesn’t force action.",
    body: [
      "Savings create growth.",
      "Growth creates pressure.",
      "Pressure creates results."
    ],
    highlight: true
  },
  {
    title: "This is how decisions actually get made.",
    body: [
      "Not by opinions.",
      "Not by outrage.",
      "Not by attention.",
      "By coordinated pressure that can’t be ignored."
    ]
  },
  {
    title: "And pressure is local.",
    body: [
      "Representatives respond to their congressional district.",
      "Not the country.",
      "Not the internet.",
      "Their district."
    ]
  },
  {
    title: "It doesn’t take millions.",
    body: [
      "About 1,500 people",
      "in a single congressional district",
      "is enough to create real risk.",
      "That’s the tipping point."
    ],
    highlight: true
  },
  {
    title: "That’s the part most people never see.",
    body: [
      "It’s not about size.",
      "It’s about placement."
    ]
  },
  {
    title: "So the question isn’t “do people care?”",
    body: [
      "It’s whether they are:",
      "Counted",
      "Organized",
      "Visible"
    ]
  },
  {
    title: "That’s what this does.",
    body: [
      "We track how many people",
      "in each congressional district",
      "have gone on record.",
      "Not “I agree.”",
      "“I’m counted.”"
    ]
  },
  {
    title: "We don’t ask Congress to care.",
    body: [
      "We make it impossible to ignore their constituents",
      "without consequences."
    ]
  },
  {
    title: "Because when enough people are on record—",
    body: [
      "Representatives have to respond publicly.",
      "Or face recall, replacement, or a primary challenge."
    ]
  },
  {
    title: "That’s power.",
    body: [
      "Power Held In Every Representative’s Seat."
    ],
    highlight: true
  },
  {
    title: "And it doesn’t stop at one issue.",
    body: [
      "The same leverage that can end a war",
      "can also:",
      "Defend democratic processes",
      "Block authoritarian overreach",
      "Force real oversight and reform",
      "Solve the affordability crisis"
    ]
  },
  {
    title: "You don’t have to start anything new.",
    body: [
      "If you’re already organizing, speaking out, or involved—",
      "keep doing that.",
      "This just makes it count."
    ]
  },
  {
    title: "Because this changes one thing:",
    body: [
      "From:",
      "“I agree”",
      "To:",
      "“I’m on record”"
    ],
    highlight: true
  },
  {
    title: "And that’s what creates pressure.",
    body: [
      "1,500 people can make Congress act.",
      "Or we replace them."
    ]
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
      className="min-h-screen bg-[#050b19] text-white flex flex-col items-center justify-center px-6 text-center cursor-pointer"
      onClick={next}
    >
      {/* Logo */}
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
              <p
                key={i}
                className={`text-lg md:text-xl ${
                  slide.highlight
                    ? 'text-green font-semibold'
                    : 'text-gray-300'
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-6 flex flex-col items-center gap-3">
        <p className="text-gray-500 text-sm">
          Click to continue • {index + 1}/{slides.length}
        </p>

        <div className="flex gap-4">
          {index > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="text-gray-500 text-sm underline"
            >
              Back
            </button>
          )}

          {index === slides.length - 1 && (
            <div className="flex gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onGoToPetition()
                }}
                className="bg-green text-black px-4 py-2 rounded-md font-bold"
              >
                ✍ BE COUNTED
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onGoToHomepage()
                }}
                className="border border-green px-4 py-2 rounded-md"
              >
                See Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}