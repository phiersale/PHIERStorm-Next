/* FILE: components/FloatingNewsButton.tsx */
/* VERSION: 8.0.0 – only show on /mainhomepage and other non-root pages */

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FloatingNewsButton() {
  const pathname = usePathname();
  const [isDismissed, setIsDismissed] = useState(false);
  const [dismissEnabled, setDismissEnabled] = useState(false);
  const [isMainSite, setIsMainSite] = useState(false);

  useEffect(() => {
    // Only show on main site pages (exclude root path which is the intro)
    setIsMainSite(pathname !== '/' && pathname !== '/newsflash');
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setDismissEnabled(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!dismissEnabled) return;
    setIsDismissed(true);
  };

  if (!isMainSite || isDismissed) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-[9999] group"
      style={{ animation: 'none', opacity: 1, visibility: 'visible', display: 'block' }}
    >
      <Link
        href="/newsflash"
        className="bg-green-600/70 hover:bg-green-600 text-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 transition-all text-sm font-medium backdrop-blur-sm"
        style={{ animation: 'none', opacity: 1 }}
      >
        <span className="text-base">📰</span>
        <span>Newsflash</span>
      </Link>
      {dismissEnabled && (
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-5 h-5 bg-gray-700/80 hover:bg-gray-600 rounded-full text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Hide news button"
        >
          ×
        </button>
      )}
    </div>
  );
}