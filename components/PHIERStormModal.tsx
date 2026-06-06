// FILE: components/PHIERStormModal.tsx
// VERSION: 4.0 – Barbershop sharp + privacy note fused

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
            Serious questions deserve straight answers.
          </p>

          <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
            <p>
              Before you step into anything, you deserve to know what this is, how it works, and what the long game looks like.
            </p>
            <p>
              No guessing.<br />
              No fine print.<br />
              No runaround.
            </p>

            <p className="font-semibold text-green-400 mt-2">Here's what you can do in here:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ask anything about PHIERS</li>
              <li>Push back on anything that doesn't make sense</li>
              <li>Get clear on how the district setup actually works</li>
              <li>Drop your ZIP so we can see where brothers are lining up</li>
            </ul>

            <p className="text-gray-300 mt-3">
              Everybody can feel the country shifting.<br />
              Systems cracking.<br />
              Stuff breaking in real time.
            </p>

            <p className="text-gray-300">
              PHIERS is about getting organized before things get messy —<br />
              lawful, disciplined, and on purpose.
            </p>

            {/* PRIVACY NOTE */}
            <div className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded-md">
              <p className="text-green-400 text-xs font-medium">🔒 Your privacy is your privacy.</p>
              <p className="text-gray-400 text-xs mt-1">
                No lists. No tracking. No surprises.<br />
                You choose what you share — and what you don't.
              </p>
            </div>
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