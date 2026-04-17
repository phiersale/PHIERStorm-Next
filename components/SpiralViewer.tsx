// components/SpiralViewer.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import CrisisSpiral from './CrisisSpiral'

export default function SpiralViewer() {
  const [mode, setMode] = useState<'text' | 'image'>('text')

  useEffect(() => {
    const saved = localStorage.getItem('spiralViewMode')
    if (saved === 'image' || saved === 'text') setMode(saved)
  }, [])

  const toggleMode = () => {
    const newMode = mode === 'text' ? 'image' : 'text'
    setMode(newMode)
    localStorage.setItem('spiralViewMode', newMode)
  }

  return (
    <div className="my-6">
      <div className="flex justify-end mb-3">
        <button
          onClick={toggleMode}
          className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-full transition"
        >
          {mode === 'text' ? '🖼️ Switch to Diagram' : '📝 Switch to Text'}
        </button>
      </div>

      {mode === 'text' ? (
        <CrisisSpiral />
      ) : (
        <div className="rounded-xl border border-green-500/30 bg-[#0a0a1a] p-4 flex justify-center">
          <Image
            src="/images/crisis-spiral.png"
            alt="The spiral of interconnected crises – war leads to oil shock, healthcare costs, worker pressure, economic contraction, political extremism, then back to war"
            width={800}
            height={800}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      )}
    </div>
  )
}