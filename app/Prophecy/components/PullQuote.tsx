// FILE: components/Prophecy/PullQuote.tsx
// VERSION: 1.0.0
// Large centered pull quote with dark background

interface PullQuoteProps {
  children: React.ReactNode;
}

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <div className="bg-black text-white py-12 my-12 text-center">
      <div className="max-w-3xl mx-auto px-6 text-2xl md:text-3xl font-semibold leading-relaxed">
        {children}
      </div>
    </div>
  );
}
// END FILE: components/Prophecy/PullQuote.tsx