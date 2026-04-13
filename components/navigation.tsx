'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/95 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">PHIERS.org</Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/crisis" className="text-gray-400 text-sm hover:text-[#3ddc84] transition-colors">Crisis</Link>
          <Link href="/homepage-teeth" className="text-gray-400 text-sm hover:text-[#3ddc84] transition-colors">How It Works</Link>
          <Link href="/solutions" className="text-gray-400 text-sm hover:text-[#3ddc84] transition-colors">Solutions</Link>
          <Link href="/organizers" className="text-gray-400 text-sm hover:text-[#3ddc84] transition-colors">Organize</Link>
          <Link href="/petition" className="px-5 py-2 bg-red-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-red-700 transition-all">✍ Sign Now</Link>
        </div>
        
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl p-2 border border-white/20 rounded-lg">{mobileMenuOpen ? '✕' : '☰'}</button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-16 left-0 right-0 bg-[#0d1525] border-b border-[#3ddc84]/20 z-40 p-5 max-h-[calc(100vh-64px)] overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="space-y-6">
              <details className="border-b border-white/10 pb-2">
                <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Understand the Fight</summary>
                <div className="space-y-2 pl-4 mt-2">
                  <Link href="/crisis" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ The Crisis</Link>
                  <Link href="/homepage-teeth" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ How It Works</Link>
                  <Link href="/simple-math" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ Simple Math</Link>
                  <Link href="/solutions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ 5D Solutions</Link>
                  <Link href="/telecare" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ TeleCARE</Link>
                </div>
              </details>
              
              <details className="border-b border-white/10 pb-2">
                <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Who We're For</summary>
                <div className="space-y-2 pl-4 mt-2">
                  <Link href="/organizers" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ For Organizers</Link>
                  <Link href="/veterans" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ Veterans</Link>
                  <Link href="/unions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ Union Strategy</Link>
                  <Link href="/no-war" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ No War / No Draft</Link>
                </div>
              </details>
              
              <details className="border-b border-white/10 pb-2">
                <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Resources</summary>
                <div className="space-y-2 pl-4 mt-2">
                  <Link href="/real-stories" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ Real Stories</Link>
                  <Link href="/full-story" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ Full Story</Link>
                  <Link href="/resources" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ Resource Hub</Link>
                  <Link href="/faq" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ FAQ</Link>
                  <Link href="/about" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ About</Link>
                </div>
              </details>
              
              <details className="border-b border-white/10 pb-2">
                <summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Take Action</summary>
                <div className="space-y-2 pl-4 mt-2">
                  <Link href="/petition" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ Sign the Petition</Link>
                  <Link href="/donate" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ Donate</Link>
                  <Link href="/action" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>→ Take Action</Link>
                </div>
              </details>
              
              <Link href="/petition" className="block w-full py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-center rounded-lg mt-4" onClick={() => setMobileMenuOpen(false)}>✍ Sign Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
