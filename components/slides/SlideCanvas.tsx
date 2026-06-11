// FILE: components/slides/SlideCanvas.tsx
// VERSION: 1.0 – Viewport enforcement system
// SUMMARY: Single layout wrapper that ensures ALL slides fit viewport. No slide ever controls layout again. Forces vertical centering, max width, no overflow.

export default function SlideCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh w-full flex items-center justify-center bg-[#050b19] text-white overflow-hidden">
      <div className="w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center gap-6">
        {children}
      </div>
    </div>
  )
}

// FILE: components/slides/SlideCanvas.tsx