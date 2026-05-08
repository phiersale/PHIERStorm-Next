// FILE: components/navigation.tsx
// VERSION: 2.3.0 – Instant close + dark overlay, no background peek

'use client'

import { useState } from 'react'
import Link from 'next/link'

function MenuSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10 pb-2">
      <button
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
        className="w-full text-left font-condensed font-bold text-white py-2 cursor-pointer flex justify-between items-center"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="text-green text-lg transition-transform duration-200" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          ▶
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-2 pl-4 mt-2 pb-2">{children}</div>
      </div>
    </div>
  )
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  // Close menu instantly – no transition, no animation
  const closeMenuInstantly = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* Desktop Navbar (unchanged) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/95 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">PHIERS.org</Link>
          <div className="hidden md:block text-[#3ddc84] text-xs italic">When Americans coordinate, Congress has no choice.</div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/petition" className="hidden md:inline-block px-5 py-2 bg-red-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
          <Link href="/join" className="hidden md:inline-block px-5 py-2 bg-green-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-green-700 transition-all ml-2">🤝 Join</Link>
          <button onClick={toggleMenu} className="text-white text-2xl p-2 border border-white/20 rounded-lg" aria-label="Menu" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Dark overlay – fully black, no transparency */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black z-40"
          onClick={closeMenuInstantly}
        />
      )}

      {/* Mobile Menu – compact dropdown on desktop, full width on mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed top-16 z-50 p-2 overflow-y-auto max-h-[calc(100vh-64px)] left-0 right-0 md:left-auto md:right-4 md:w-80 md:max-h-[80vh]"
          style={{
            backgroundColor: '#0d1525',
            boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
            borderBottom: '1px solid rgba(61,220,132,0.2)'
          }}
        >
          <div className="space-y-2">
            <Link href="/no-war" className="block p-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 font-condensed font-bold text-sm text-center" onClick={closeMenuInstantly}>🕊 END THE WAR / NO DRAFT</Link>

            <MenuSection title="Understand the Fight">
              <Link href="/crisis" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>🚨 The Crisis</Link>
              <Link href="/simple-math" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>📊 Simple Math</Link>
              <Link href="/leverage" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>⚡ The Leverage</Link>
              <Link href="/solutions" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>🔬 5D Solutions</Link>
              <Link href="/telecare" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>💡 TeleCARE</Link>
              <Link href="/buying-power" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>💪 Buying Power</Link>
            </MenuSection>

            <MenuSection title="Who We're For">
              <Link href="/organizers" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>✊ For Organizers</Link>
              <Link href="/veterans" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>🎖 Veterans</Link>
              <Link href="/unions" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>💪 Union Strategy</Link>
            </MenuSection>

            <MenuSection title="Resources">
              <Link href="/resources" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>📚 Resource Hub</Link>
              <Link href="/real-stories" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>💬 Real Stories</Link>
              <Link href="/faq" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>❓ FAQ</Link>
              <Link href="/about" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>📖 About</Link>
            </MenuSection>

            <MenuSection title="Take Action">
              <Link href="/petition" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>📋 Sign the Petition</Link>
              <Link href="/donate" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>💚 Donate</Link>
              <Link href="/action" className="block text-gray-400 text-sm py-0.5" onClick={closeMenuInstantly}>📣 Take Action</Link>
            </MenuSection>

            <Link href="/petition" className="block w-full py-2 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-sm text-center rounded-lg mt-2" onClick={closeMenuInstantly}>✍ Sign Now</Link>
            <Link href="/join" className="block w-full py-2 bg-green-600 text-white font-condensed font-bold text-sm text-center rounded-lg mt-1" onClick={closeMenuInstantly}>🤝 Join the Movement</Link>
          </div>
        </div>
      )}
    </>
  )
}

// FILE: components/navigation.tsx
// VERSION: 2.3.0