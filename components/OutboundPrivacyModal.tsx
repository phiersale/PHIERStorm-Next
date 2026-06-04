// FILE: components/OutboundPrivacyModal.tsx
// VERSION: 1.0.0

'use client';

import { useEffect, useRef } from 'react';

type OutboundPrivacyModalProps = {
  open: boolean;
  destinationUrl: string;
  onClose: () => void;
};

export default function OutboundPrivacyModal({ open, destinationUrl, onClose }: OutboundPrivacyModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dialogRef.current && e.target === dialogRef.current) {
        onClose();
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
  }, [onClose]);

  const handleConfirm = () => {
    window.open(destinationUrl, '_blank');
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="rounded-lg bg-[#2a2a2a] text-white p-0 max-w-md backdrop:bg-black/80 open:animate-fadeInScale"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-400 mb-3">Before you go</h3>
        <p className="text-gray-300 text-sm mb-4">Here's what we do with your information:</p>
        
        <ul className="space-y-2 text-gray-300 text-sm mb-6">
          <li className="flex items-start gap-2">✓ Your name and email are never published, sold, or shared</li>
          <li className="flex items-start gap-2">✓ Representatives only see a headcount — not a list of names</li>
          <li className="flex items-start gap-2">✓ Your zip code is used only to identify your congressional district</li>
          <li className="flex items-start gap-2">✓ You can ask us to remove your entry at any time</li>
        </ul>
        
        <p className="text-gray-400 text-xs mb-4 italic">
          — Based on Ralph Nader's documented findings: 500 compels a Representative, 1,000 compels a Senator. 
          We give them a number, not a list.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleConfirm}
            className="flex-1 py-2 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-md transition"
          >
            I'm in — take me there →
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition"
          >
            Not right now
          </button>
        </div>
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

// FILE: components/OutboundPrivacyModal.tsx (end)