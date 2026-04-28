'use client'

import { useState, useEffect } from 'react'

export default function JumpToFooter() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setShow(scrollPercent > 0.6)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  if (!show) return null

  return (
    <button
      onClick={scrollToBottom}
      className="fixed bottom-24 right-6 z-40 bg-green text-black w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-green-600 transition-all hover:scale-105"
      aria-label="Jump to page bottom (next button)"
    >
      ↓↓
    </button>
  )
}