// FILE: components/SurveyBanner.tsx
// VERSION: 1.0 – Persistent top banner, session dismissal

'use client';

import { useState, useEffect } from 'react';

const FORM_1_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform';

interface SurveyBannerProps {
  storagePrefix?: string; // 'phiers_' or 'prophecy_'
}

export default function SurveyBanner({ storagePrefix = 'phiers_' }: SurveyBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (storagePrefix === 'phiers_' && window.location.pathname.startsWith('/Prophecy')) {
      return;
    }
    const dismissed = sessionStorage.getItem(`${storagePrefix}bannerDismissed`);
    if (!dismissed) {
      setIsVisible(true);
    }
  }, [storagePrefix]);

  const handleDismiss = () => {
    sessionStorage.setItem(`${storagePrefix}bannerDismissed`, 'true');
    setIsVisible(false);
  };

  if (!isMounted || !isVisible) return null;

  return (
    <div className="relative z-40 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <a
            href={FORM_1_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center sm:text-left text-zinc-300 text-sm hover:text-white transition-colors"
          >
            <span className="font-medium">New:</span> We're listening before we ask. A headcount, not identities.{' '}
            <span className="underline">Take the survey →</span>
          </a>
          <button
            onClick={handleDismiss}
            className="text-zinc-500 hover:text-zinc-300 transition-colors text-xl leading-none px-2"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

// FILE: components/SurveyBanner.tsx