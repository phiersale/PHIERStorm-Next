// FILE: components/navigation.tsx - UPDATED with Buying Power

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <>
      <nav id="main-nav" className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/95 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">PHIERS.org</Link>
          <div className="hidden md:block text-[#3ddc84] text-xs italic">When Americans coordinate, Congress has no choice.</div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/petition" className="hidden md:inline-block px-5 py-2 bg-red-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl p-2 border border-white/20 rounded-lg">{mobileMenuOpen ? '✕' : '☰'}</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-[#0d1525] border-b border-[#3ddc84]/20 z-40 p-5 max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="space-y-4">
            <Link href="/no-war" className="block p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 font-condensed font-bold text-center" onClick={() => setMobileMenuOpen(false)}>🕊 END THE WAR / NO DRAFT</Link>
            
            <details className="border-b border-white/10 pb-2">
              <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Understand the Fight</summary>
              <div className="space-y-2 pl-4 mt-2">
                <Link href="/crisis" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🚨 The Crisis</Link>
                <Link href="/simple-math" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📊 Simple Math</Link>
                <Link href="/leverage" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>⚡ The Leverage</Link>
                <Link href="/solutions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🔬 5D Solutions</Link>
                <Link href="/telecare" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💡 TeleCARE</Link>
                <Link href="/buying-power" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💪 Buying Power</Link>
              </div>
            </details>
            
            <details className="border-b border-white/10 pb-2">
              <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Who We're For</summary>
              <div className="space-y-2 pl-4 mt-2">
                <Link href="/organizers" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>✊ For Organizers</Link>
                <Link href="/veterans" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🎖 Veterans</Link>
                <Link href="/unions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💪 Union Strategy</Link>
              </div>
            </details>
            
            <details className="border-b border-white/10 pb-2">
              <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Resources</summary>
              <div className="space-y-2 pl-4 mt-2">
                <Link href="/resources" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📚 Resource Hub</Link>
                <Link href="/real-stories" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💬 Real Stories</Link>
                <Link href="/faq" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>❓ FAQ</Link>
                <Link href="/about" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📖 About</Link>
              </div>
            </details>
            
            <details className="border-b border-white/10 pb-2">
              <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Take Action</summary>
              <div className="space-y-2 pl-4 mt-2">
                <Link href="/petition" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📋 Sign the Petition</Link>
                <Link href="/donate" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💚 Donate</Link>
                <Link href="/action" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📣 Take Action</Link>
              </div>
            </details>
            
            <Link href="/petition" className="block w-full py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-center rounded-lg mt-4" onClick={() => setMobileMenuOpen(false)}>✍ Sign Now</Link>
          </div>
        </div>
      )}
    </>
  )
}
