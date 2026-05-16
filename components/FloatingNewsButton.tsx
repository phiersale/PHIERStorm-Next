/* FILE: components/FloatingNewsButton.tsx */
/* VERSION: 3.0.0 – no dismiss, always visible */

'use client';

import Link from 'next/link';

export default function FloatingNewsButton() {
  return (
    <Link
      href="/newsflash"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full px-5 py-3 shadow-lg flex items-center gap-2 transition-all text-sm font-bold"
    >
      📰 NEWSFLASH
    </Link>
  );
}
/* FILE: components/FloatingNewsButton.tsx */