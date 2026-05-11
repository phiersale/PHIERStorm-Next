// FILE: components/Prophecy/Accordion.tsx
// VERSION: 1.0.0
// Collapsible accordion for "The full story" sections

'use client';

import { useState } from 'react';

interface AccordionProps {
  triggerLabel: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  subtleHint?: string;
}

export default function Accordion({ triggerLabel, children, defaultOpen = false, subtleHint }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-4 border-t border-gray-200 pt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 text-sm uppercase tracking-wider hover:text-white transition flex items-center gap-2"
      >
        {isOpen ? '−' : '+'} {triggerLabel}
      </button>
      {subtleHint && <p className="text-gray-500 text-xs mt-1">{subtleHint}</p>}
      {isOpen && <div className="mt-3 text-black space-y-2">{children}</div>}
    </div>
  );
}
// END FILE: components/Prophecy/Accordion.tsx