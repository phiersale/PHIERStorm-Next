// FILE: app/Prophecy/components/FloatingActNow.tsx
// VERSION: 1.1 — switched anchor tags to buttons to avoid build error

'use client';
import { useState } from 'react';

export default function FloatingActNow() {
  const [expanded, setExpanded] = useState(false);

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
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
      <button
        onClick={() => setExpanded(!expanded)}
        className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm px-6 py-3 rounded-full shadow-2xl transition whitespace-nowrap"
        aria-label="Act now"
        aria-expanded={expanded}
      >
        {expanded ? 'Close' : 'Act Now'}
      </button>
    </div>
  );
}

// FILE: app/Prophecy/components/FloatingActNow.tsx
// VERSION: 1.1