// FILE: components/Prophecy/CTASection.tsx
// VERSION: 1.0.0
// Primary CTA button with optional back link

import Link from 'next/link';

interface CTASectionProps {
  href: string;
  label: string;
  backLink?: { href: string; label: string };
}

export default function CTASection({ href, label, backLink }: CTASectionProps) {
  return (
    <div className="text-center my-12">
      <Link
        href={href}
        className="inline-block bg-white text-black font-bold text-lg py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        {label}
      </Link>
      {backLink && (
        <div className="mt-4">
          <Link href={backLink.href} className="text-gray-400 text-sm hover:text-white transition">
            ← {backLink.label}
          </Link>
        </div>
      )}
    </div>
  );
}
// END FILE: components/Prophecy/CTASection.tsx