// FILE: components/navigation.tsx
// VERSION: 2.1.0 – No opacity/visibility transitions, slide‑in/out, fully opaque

'use client'

import { useState } from 'react'
import Link from 'next/link'

// ------------------------------
// Custom Accordion Component (no background transparency)
// ------------------------------
function MenuSection({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10 pb-2">
      <button
        onClick={(e) => {
          e.stopPropagation() // prevent any parent event interference
          setIsOpen(!isOpen)
        }}
        className="w-full text-left font-condensed font-bold text-white py-2 cursor-pointer flex justify-between items-center"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span
          className="text-green text-lg transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          ▶
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-2 pl-4 mt-2 pb-2">{children}</div>
      </div>
    </div>
  )
}

// ------------------------------
// Main Navigation Component
// ------------------------------
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Prevent background scroll when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const closeMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        id="main-nav"
        className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/95 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">
            PHIERS.org
          </Link>
          <div className="hidden md:block text-[#3ddc84] text-xs italic">
            When Americans coordinate, Congress has no choice.
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/petition"
            className="hidden md:inline-block px-5 py-2 bg-red-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-red-700 transition-all"
          >
            ✍ Sign the Petition
          </Link>
          <Link
            href="/join"
            className="hidden md:inline-block px-5 py-2 bg-green-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-green-700 transition-all ml-2"
          >
            🤝 Join
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl p-2 border border-white/20 rounded-lg"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu – always in DOM, toggled with transform (no opacity/visibility flash) */}
      <div
        className={`
          fixed top-16 left-0 right-0 bg-[#0d1525] border-b border-[#3ddc84]/20
          z-40 p-5 max-h-[calc(100vh-64px)] overflow-y-auto
          transition-transform duration-300 ease-out
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{
          // Force fully opaque background, no backdrop blur that could show through
          backgroundColor: '#0d1525',
          boxShadow: '0 8px 20px rgba(0,0,0,0.5)'
        }}
      >
        <div className="space-y-4">
          {/* END THE WAR CTA */}
          <Link
            href="/no-war"
            className="block p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 font-condensed font-bold text-center"
            onClick={closeMenu}
          >
            🕊 END THE WAR / NO DRAFT
          </Link>

          <MenuSection title="Understand the Fight">
            <Link href="/crisis" className="block text-gray-400 py-1" onClick={closeMenu}>
              🚨 The Crisis
            </Link>
            <Link href="/simple-math" className="block text-gray-400 py-1" onClick={closeMenu}>
              📊 Simple Math
            </Link>
            <Link href="/leverage" className="block text-gray-400 py-1" onClick={closeMenu}>
              ⚡ The Leverage
            </Link>
            <Link href="/solutions" className="block text-gray-400 py-1" onClick={closeMenu}>
              🔬 5D Solutions
            </Link>
            <Link href="/telecare" className="block text-gray-400 py-1" onClick={closeMenu}>
              💡 TeleCARE
            </Link>
            <Link href="/buying-power" className="block text-gray-400 py-1" onClick={closeMenu}>
              💪 Buying Power
            </Link>
          </MenuSection>

          <MenuSection title="Who We're For">
            <Link href="/organizers" className="block text-gray-400 py-1" onClick={closeMenu}>
              ✊ For Organizers
            </Link>
            <Link href="/veterans" className="block text-gray-400 py-1" onClick={closeMenu}>
              🎖 Veterans
            </Link>
            <Link href="/unions" className="block text-gray-400 py-1" onClick={closeMenu}>
              💪 Union Strategy
            </Link>
          </MenuSection>

          <MenuSection title="Resources">
            <Link href="/resources" className="block text-gray-400 py-1" onClick={closeMenu}>
              📚 Resource Hub
            </Link>
            <Link href="/real-stories" className="block text-gray-400 py-1" onClick={closeMenu}>
              💬 Real Stories
            </Link>
            <Link href="/faq" className="block text-gray-400 py-1" onClick={closeMenu}>
              ❓ FAQ
            </Link>
            <Link href="/about" className="block text-gray-400 py-1" onClick={closeMenu}>
              📖 About
            </Link>
          </MenuSection>

          <MenuSection title="Take Action">
            <Link href="/petition" className="block text-gray-400 py-1" onClick={closeMenu}>
              📋 Sign the Petition
            </Link>
            <Link href="/donate" className="block text-gray-400 py-1" onClick={closeMenu}>
              💚 Donate
            </Link>
            <Link href="/action" className="block text-gray-400 py-1" onClick={closeMenu}>
              📣 Take Action
            </Link>
          </MenuSection>

          <Link
            href="/petition"
            className="block w-full py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-center rounded-lg mt-4"
            onClick={closeMenu}
          >
            ✍ Sign Now
          </Link>
          <Link
            href="/join"
            className="block w-full py-3 bg-green-600 text-white font-condensed font-bold text-center rounded-lg mt-2"
            onClick={closeMenu}
          >
            🤝 Join the Movement
          </Link>
        </div>
      </div>
    </>
  )
}

// FILE: components/navigation.tsx
// VERSION: 2.1.0