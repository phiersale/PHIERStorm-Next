// FILE: components/TrilogyDisclaimer.tsx
// VERSION: 2.0.0 – popup modal (auto‑open, smaller text, dismissible)

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TrilogyDisclaimer() {
  const [isOpen, setIsOpen] = useState(false)

  // Auto-open modal when page loads
  useEffect(() => {
    setIsOpen(true)
  }, [])

  const closeModal = () => setIsOpen(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal} // click outside to close
        >
          <motion.div
            className="relative max-w-lg w-full bg-[#0d0f14] border border-green/30 rounded-xl shadow-2xl p-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl leading-none focus:outline-none"
              aria-label="Close disclaimer"
            >
              ✕
            </button>

            {/* Content – smaller font text */}
            <div className="text-xs md:text-sm text-gray-300 space-y-3 leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
              <p className="font-semibold text-white text-sm md:text-base">A note before you read:</p>
              <p>
                This page talks about race, laws, courts, and political changes affecting Black communities and the country as a whole.
              </p>
              <p className="text-gray-400">
                It is intended for a specific audience and is not designed for broad public distribution without context.
              </p>
              <hr className="border-gray-700 my-3" />
              <p>Not to divide people.</p>
              <p>
                But because race has been a central factor in how access, opportunity, representation, and historical narrative have been shaped in America.
              </p>
              <p>These effects are not felt evenly.</p>
              <p>
                Some communities experience them earlier, more sharply, and more often than others.
              </p>
              <p>That’s what this page is describing.</p>
              <p>Not to assign blame.</p>
              <p>
                But to be honest about reality so people can respond with clarity, protect what matters, and move with each other instead of in isolation.
              </p>
              <hr className="border-gray-700 my-3" />
              <p className="text-gray-400">
                This page is designed primarily for trust-based sharing within communities it directly speaks to.
              </p>
              <p className="text-gray-400">
                If it is shared outside of that context, it may be misunderstood or stripped of the framing it relies on to be interpreted accurately.
              </p>
              <p className="text-gray-400">
                It is not optimized for mass public consumption without context.
              </p>
            </div>

            {/* Acknowledge button */}
            <div className="mt-6 text-center">
              <button
                onClick={closeModal}
                className="px-5 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition"
              >
                I understand, continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}