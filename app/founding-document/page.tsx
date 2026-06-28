// FILE: app/founding-document/page.tsx
// VERSION: 1.0 — Landing page for The Prophecy founding document PDF

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FoundingDocumentPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      {/* STICKY HEADER */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/Prophecy">
            <Image
              src="/images/PHIERS_Logo_BW.png"
              alt="PHIERS"
              width={48}
              height={48}
              className="w-10 h-auto md:w-12 opacity-70 hover:opacity-90 transition"
              priority
            />
          </Link>
          <Link href="/Prophecy" className="text-gray-500 text-xs sm:text-sm hover:text-white transition">
            ← Back to Prophecy
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 max-w-2xl mx-auto">
        <p className="text-amber-400/80 text-xs sm:text-sm tracking-[0.25em] uppercase mb-6">
          First Edition
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          The Prophecy
        </h1>

        <p className="text-gray-400 text-sm sm:text-base mb-10 italic">
          The Founding Document of PHIERS
        </p>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
          For Us. By Us. A gift from Foundational Black American men to humanity —
          the timeline, the inheritance, and the structure built from it.
        </p>

        
          href="/documents/the-prophecy-founding-document.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-lg font-bold text-base sm:text-lg transition"
          style={{
            backgroundColor: '#F5C542',
            color: '#1a1a1a',
            boxShadow: '0 0 24px rgba(245,197,66,0.3)'
          }}
        >
          Read the Founding Document →
        </a>

        <p className="text-gray-600 text-xs mt-6">
          22 pages. Opens in a new tab.
        </p>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>A gift from Foundational Black American men to humanity. Built by Black men.</p>
        <div className="w-16 h-px bg-gray-700 mx-auto my-4" />
        <Link
          href="/Prophecy"
          className="inline-flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition"
        >
          <Image src="/images/PHIERS_Logo_BW.png" alt="PHIERS" width={32} height={32} className="w-8 h-auto" />
          <span className="text-xs hover:text-white transition">Back to Prophecy →</span>
        </Link>
      </footer>
    </div>
  );
}

// FILE: app/founding-document/page.tsx