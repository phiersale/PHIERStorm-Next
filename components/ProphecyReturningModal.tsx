// FILE: components/ProphecyReturningModal.tsx
// VERSION: 1.1 – Fixed modal dismiss + navigation conflict

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FORM_1_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform';
const SITUATION_URL = '/situation#trust-update';

export default function ProphecyReturningModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const modalDismissed = localStorage.getItem('prophecy_modalSeen');
    
    if (modalDismissed === 'true') {
      return;
    }

    const firstVisit = localStorage.getItem('prophecy_firstVisit');
    
    if (!firstVisit) {
      localStorage.setItem('prophecy_firstVisit', Date.now().toString());
    } else {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('prophecy_modalSeen', 'true');
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const handleReadWhatChanged = () => {
    handleDismiss();
    router.push(SITUATION_URL);
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleDismiss}
        >
          <motion.div
            className="relative bg-[#0d0d0d] border border-amber-500/30 rounded-2xl max-w-[90vw] sm:max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleDismiss}
              className="sticky top-0 float-right z-10 text-gray-500 hover:text-gray-300 transition-colors text-2xl w-10 h-10 flex items-center justify-center bg-[#0d0d0d] rounded-full ml-2"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="clear-both px-6 pb-6 pt-2">
              {/* PHIERS Logo */}
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/PHIERS_Logo_BW.png"
                  alt="PHIERS"
                  width={100}
                  height={100}
                  className="w-20 h-auto opacity-80"
                />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center">
                We've shifted our approach — and we want you to know why.
              </h2>

              <div className="space-y-3 text-gray-300 text-sm sm:text-base">
                <p>
                  We've been asking for signatures before earning trust. That's backwards.
                </p>
                <p>
                  Before we ask for anything, we want to hear from people first — their concerns, questions, and priorities.
                </p>
                <p>
                  The petition still matters. But the survey comes first now.
                </p>
                <p className="text-amber-400 font-semibold">
                  A headcount, not identities. That's all we ever share.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={FORM_1_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3 px-4 rounded-lg transition active:scale-95 touch-manipulation"
                >
                  Take the survey →
                </a>
                <button
                  onClick={handleReadWhatChanged}
                  className="w-full text-center bg-transparent border border-gray-600 hover:border-gray-400 text-gray-300 font-semibold py-3 px-4 rounded-lg transition active:scale-95 touch-manipulation"
                >
                  Read what's changed
                </button>
                <button
                  onClick={handleDismiss}
                  className="w-full text-center text-gray-500 text-sm py-3 hover:text-gray-400 transition touch-manipulation"
                >
                  Got it
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// FILE: components/ProphecyReturningModal.tsx