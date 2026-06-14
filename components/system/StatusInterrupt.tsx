// FILE: components/system/StatusInterrupt.tsx
// VERSION: 1.1 – Fixed loading spinner animation

'use client'

import { useEffect, useState } from 'react'

export default function StatusInterrupt({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Fade in immediately
    requestAnimationFrame(() => setVisible(true))

    // Hold for 3 seconds, then complete
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onComplete, 250)
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex flex-col items-center justify-center
        transition-opacity duration-200
        ${visible ? 'opacity-100' : 'opacity-0'}
        bg-black
      `}
    >
      <div className="text-green-400 font-mono tracking-wider text-sm opacity-0 animate-fadeInSlow mb-4">
        STATUS UPDATE — ONE MOMENT…
      </div>
      {/* Loading spinner - explicitly styled to spin */}
      <div className="opacity-0 animate-fadeInSlow" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        <div
          style={{
            width: '24px',
            height: '24px',
            border: '2px solid rgba(61, 220, 132, 0.3)',
            borderTopColor: '#3ddc84',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite'
          }}
        />
      </div>
    </div>
  )
}

// FILE: components/system/StatusInterrupt.tsx