// FILE: components/PHIERStormModal.tsx
// VERSION: 3.4 – Final tone: disciplined, confident, structurally serious

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function PHIERStormModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          className="w-full max-w-2xl bg-gray-950 border border-gray-700 rounded-xl p-6 text-white"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-2">
            Got questions? Start here.
          </h2>

          <p className="text-gray-300 text-sm mb-4">
            Serious questions deserve serious answers.
          </p>

          <div className="space-y-3 text-gray-200 text-sm leading-relaxed">
            <p>
              Before engaging with the district structure, people deserve clarity
              about what PHIERS is, how it works, and what the long-term goals actually are.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Ask anything about PHIERS</li>
              <li>Challenge assumptions</li>
              <li>Understand how the district structure works</li>
              <li>Share your ZIP code to help map district coordination</li>
            </ul>

            <p className="text-gray-300">
              Communities across the country can feel systems breaking down in real time.
            </p>

            <p className="text-gray-400 text-xs italic">
              PHIERS was built to create lawful, organized civic leverage before crisis forces reaction.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-center py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Ask a question →
            </Link>

            <button
              onClick={onClose}
              className="text-gray-400 text-sm hover:text-white transition"
            >
              Maybe later
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// FILE: components/PHIERStormModal.tsx
