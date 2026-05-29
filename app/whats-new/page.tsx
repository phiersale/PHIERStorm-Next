// src/app/whats-new/page.tsx
import Link from 'next/link';
import entriesData from '@/data/whatsnew/entries.json';

export const metadata = {
  title: 'What’s New – PHIERS',
  description: 'Current events connected to the PHIERS framework. Updated as events develop.',
};

const pillColorClasses = {
  red: 'bg-red-900/40 text-red-300 border-red-500/40',
  amber: 'bg-amber-900/40 text-amber-300 border-amber-500/40',
  teal: 'bg-teal-900/40 text-teal-300 border-teal-500/40',
  blue: 'bg-blue-900/40 text-blue-300 border-blue-500/40',
};

export default function WhatsNewPage() {
  const { lastUpdated, entries } = entriesData;

  return (
    <>
      {/* Background matching main site dark theme */}
      <div className="min-h-screen bg-[#0a0f1a] text-gray-200 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10 pb-4 border-b border-gray-800">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
              WHAT&apos;S NEW
            </h1>
            <div className="text-teal-400 font-mono text-sm mb-3">
              Last updated: {lastUpdated}
            </div>
            <div className="text-gray-400 text-sm space-y-1">
              <p>This page tracks the pressures PHIERS was built to help communities navigate.</p>
              <p>Updated as events develop.</p>
              <p className="text-gray-500 text-xs">Not commentary. The record.</p>
            </div>
          </div>

          {/* Entries */}
          <div className="space-y-10">
            {entries.map((entry, idx) => (
              <div key={idx} className="border-b border-gray-800/60 pb-8 last:border-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <time className="text-teal-400 font-mono text-xs tracking-wide">{entry.date}</time>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold border ${pillColorClasses[entry.pillColor as keyof typeof pillColorClasses]}`}>
                    {entry.tag}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mt-1 mb-3 leading-tight">
                  {entry.headline}
                </h2>
                <div className="text-gray-300 text-sm md:text-base space-y-3">
                  <p>{entry.whatHappened}</p>
                  <div>
                    <span className="text-teal-400 text-xs font-semibold uppercase tracking-wide">Why it matters:</span>
                    <p className="mt-1 text-gray-300">{entry.whyItMatters}</p>
                  </div>
                  {entry.sources && entry.sources.length > 0 && (
                    <div className="pt-2 space-y-1">
                      {entry.sources.map((src, sidx) => (
                        <a
                          key={sidx}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-teal-400 text-xs hover:underline"
                        >
                          → {src.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm border-t border-teal-500/30 py-3 text-center z-50">
        <div className="text-sm md:text-base">
          <span className="text-teal-400 font-bold">1,500 organized people.</span>
          <span className="text-white"> One district. Real civic power. </span>
          <Link href="/Prophecy/join" className="text-teal-400 font-semibold hover:underline ml-1">
            → Join the Zoom
          </Link>
        </div>
      </div>
    </>
  );
}

// src/app/whats-new/page.tsx