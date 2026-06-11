// FILE: components/FifteenHundredModal.tsx
// VERSION: 1.3.0

'use client';

import { useEffect, useRef } from 'react';

export default function FifteenHundredModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dialogRef.current && e.target === dialogRef.current) {
        dialogRef.current.close();
      }
    };
    
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      if (dialog) {
        dialog.removeEventListener('click', handleClickOutside);
      }
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      id="fifteen-hundred-modal"
      className="rounded-lg bg-[#2a2a2a] text-white p-0 max-w-md backdrop:bg-black/80 open:animate-fadeInScale"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-400 mb-3">Why Fifteen Hundred?</h3>
        <div className="space-y-3 text-gray-300 text-sm leading-relaxed">

          {/* SOURCE */}
          <p>
            Ralph Nader — one of the most effective civic organizers in American history — documented
            a clear pattern from decades of work inside Congress:
          </p>

          {/* BOOK COVER VISUAL CREDIBILITY ANCHOR */}
          <div className="flex justify-center">
            <img
              src="/images/RalphNader-500-Unstoppable_Change.jpg"
              alt="Ralph Nader – Unstoppable Change"
              className="w-40 sm:w-48 mx-auto rounded opacity-80 mb-2 cursor-pointer hover:opacity-100 transition"
              onClick={() => {
                const modal = document.createElement('div');
                modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 cursor-pointer';
                modal.onclick = () => document.body.removeChild(modal);
                const img = document.createElement('img');
                img.src = '/images/RalphNader-500-Unstoppable_Change.jpg';
                img.alt = 'Ralph Nader – Unstoppable Change';
                img.className = 'max-w-[95vw] max-h-[95vh] rounded-xl shadow-2xl';
                modal.appendChild(img);
                document.body.appendChild(modal);
              }}
            />
          </div>

          {/* THE LADDER */}
          <div className="bg-black/30 border border-amber-500/30 rounded-lg p-4 space-y-2">
            <p>
              <span className="text-amber-300 font-bold">500 verified constituents</span> will compel
              a Representative to attend a town hall meeting.
            </p>
            <p>
              <span className="text-amber-300 font-bold">1,000 verified constituents</span> will compel
              a Senator to attend.
            </p>
            <p>
              <span className="text-amber-300 font-bold">1,500</span> is where the signal becomes
              undeniable.
            </p>
          </div>

          {/* WHY IT MATTERS */}
          <p>
            Not because of the number itself — but because of what it represents. If 1,500 people in
            a single congressional district are organized enough to go on record, they almost certainly
            speak for the <strong className="text-white">majority of active voters</strong> in that district.
          </p>

          {/* WHAT THE REP UNDERSTANDS */}
          <p>
            That means the Representative knows something important:{' '}
            <strong className="text-amber-300">there are far more where they came from.</strong>
          </p>
          <p className="text-gray-400">
            Far more who will show up to vote. Far more who can back a primary challenge. Far more who
            can investigate, expose, and replace a rep who ignores them.
          </p>

          {/* WHAT HAPPENS AT THE TOWN HALL */}
          <p>
            The town hall is where we present the results of their constituents' survey — so the
            Representative knows exactly what people demand in exchange for their votes.
          </p>

          {/* REFRAME */}
          <p className="text-amber-400 font-semibold pt-1">
            1,500 is not the finish line. It is the starting gun.
          </p>
          <p className="text-gray-400 text-xs">
            The tip of the spear. Because if 1,500 organized people can move a Representative,
            imagine what happens when they bring ten times that to the polls.
          </p>

        </div>
        <button
          onClick={() => dialogRef.current?.close()}
          className="mt-5 w-full py-2 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-md transition"
        >
          Close
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.2s ease-out;
        }
      `}</style>
    </dialog>
  );
}

// FILE: components/FifteenHundredModal.tsx (end)