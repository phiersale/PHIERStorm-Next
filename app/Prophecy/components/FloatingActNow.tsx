// FILE: app/Prophecy/components/FloatingActNow.tsx
// VERSION: 1.2 — dismissible, fades to translucent after being seen

'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FloatingActNow() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      const scrolledFraction = window.scrollY / scrollableHeight;
      if (scrolledFraction > 0.2) setFaded(true);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const timer = setTimeout(() => setFaded(true), 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDismiss = () => {
    setDismissed(true);
  };

  if (dismissed) return null;
  if (pathname === '/Prophecy') return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 transition-opacity duration-500 ${
        faded && !expanded ? 'opacity-40 active:opacity-100' : 'opacity-100'
      }`}
    >
      {expanded && (
        <div className="flex flex-col gap-2 mb-1">
          <button
            onClick={() => openLink('https://phiers.abacusai.app/petition/fifteen-hundred')}
            className="bg-white text-black font-bold text-sm px-5 py-2.5 rounded-full shadow-lg hover:bg-gray-200 transition whitespace-nowrap"
          >
            Sign the Petition
          </button>
          <button
            onClick={() => openLink('https://phiers.abacusai.app/survey')}
            className="bg-green-600 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-lg hover:bg-green-500 transition whitespace-nowrap"
          >
            Take the Survey
          </button>
          <button
            onClick={() => openLink('https://phiers.org')}
            className="bg-transparent border border-white/40 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg hover:bg-white/10 transition whitespace-nowrap"
          >
            See the Solution
          </button>
        </div>
      )}

      <div className="relative inline-flex items-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className={`bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full shadow-2xl transition whitespace-nowrap ${
            faded && !expanded ? 'text-xs px-4 py-2' : 'text-sm px-6 py-3'
          }`}
          aria-label="Act now"
          aria-expanded={expanded}
        >
          {expanded ? 'Close' : 'Act Now'}
        </button>
        {!expanded && (
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 text-white font-bold text-base leading-none transition hover:text-gray-300"
            aria-label="Dismiss"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

// FILE: app/Prophecy/components/FloatingActNow.tsx
// VERSION: 1.2