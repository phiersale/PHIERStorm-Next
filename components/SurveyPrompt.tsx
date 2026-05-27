// FILE: components/SurveyPrompt.tsx
// VERSION: 1.0 – One-time modal + persistent banner for survey-first strategy

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SURVEY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform?usp=sharing';
const MODAL_SEEN_KEY = 'phiers_survey_modal_seen';
const BANNER_DISMISSED_KEY = 'phiers_survey_banner_dismissed';

export default function SurveyPrompt() {
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check localStorage for modal state
    const modalSeen = localStorage.getItem(MODAL_SEEN_KEY);
    const bannerDismissed = localStorage.getItem(BANNER_DISMISSED_KEY);
    
    // Show modal only once per browser, never again
    if (!modalSeen) {
      setShowModal(true);
    }
    
    // Show banner only if not dismissed
    if (!bannerDismissed) {
      setShowBanner(true);
    }
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
    localStorage.setItem(MODAL_SEEN_KEY, 'true');
  };

  const handleModalTakeSurvey = () => {
    window.open(SURVEY_URL, '_blank');
    setShowModal(false);
    localStorage.setItem(MODAL_SEEN_KEY, 'true');
  };

  const handleBannerDismiss = () => {
    setShowBanner(false);
    localStorage.setItem(BANNER_DISMISSED_KEY, 'true');
  };

  const handleBannerClick = () => {
    window.open(SURVEY_URL, '_blank');
  };

  if (!mounted) return null;

  return (
    <>
      {/* MODAL - One-time for returning visitors */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) handleModalClose();
            }}
          >
            <motion.div
              className="relative max-w-md w-full bg-gray-950 border border-gray-700 rounded-xl p-6 text-white"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Close X button */}
              <button
                onClick={handleModalClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-300 transition text-xl leading-none"
                aria-label="Close"
              >
                ✕
              </button>

              <h2 className="text-xl md:text-2xl font-bold mb-3 pr-6">
                We changed how we're doing this.
              </h2>

              <p className="text-gray-300 text-sm mb-3">
                We were asking for your signature before earning your trust. That's backwards.
              </p>

              <p className="text-gray-300 text-sm mb-4">
                Now: <span className="text-green font-semibold">survey first. Petition second.</span>
              </p>

              <p className="text-gray-400 text-sm mb-6">
                Tell us what matters to you. Ask us anything. We respond personally.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleModalTakeSurvey}
                  className="w-full bg-green text-black font-bold py-2.5 px-4 rounded-md hover:bg-green/90 transition text-center"
                >
                  Take the survey →
                </button>
                <button
                  onClick={handleModalClose}
                  className="w-full bg-transparent border border-gray-600 text-gray-300 font-medium py-2.5 px-4 rounded-md hover:bg-gray-800 transition text-center"
                >
                  Maybe later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BANNER - Persistent, dismissible */}
      {showBanner && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-green/90 text-black py-2 px-4 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap">
            <button
              onClick={handleBannerClick}
              className="text-sm md:text-base font-medium hover:underline text-left flex-1 min-w-[200px]"
            >
              📋 New: We're listening first. Take the survey →
            </button>
            <button
              onClick={handleBannerDismiss}
              className="text-black/60 hover:text-black transition text-xl leading-none"
              aria-label="Dismiss banner"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// FILE: components/SurveyPrompt.tsx
