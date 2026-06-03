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
          <p>Fifteen Hundred is not the goal. It is the <strong className="text-amber-300">signal</strong>.</p>
          <p>The question is not whether fifteen hundred people can change the country. The question is whether fifteen hundred people can demonstrate that coordinated civic action is still possible.</p>
          <p>When people organize around shared interests and shared solutions, elected officials pay attention. Not because of the number itself. Because organization scales.</p>
          <p className="text-amber-400 font-semibold pt-2">Fifteen Hundred is simply the first visible proof that something larger can be built.</p>
          <p className="text-gray-400 text-xs pt-2">This is not the finish line. It is the starting signal.</p>
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