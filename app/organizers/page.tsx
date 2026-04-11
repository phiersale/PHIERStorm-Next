// app/organizers/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function OrganizersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [willModalOpen, setWillModalOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white text-center py-3 px-6 font-condensed font-bold text-base z-50 relative">
        <span className="inline-block bg-black/25 rounded px-2 py-0.5 mr-2 text-xs tracking-wide">URGENT</span>
        Congress is home through April 14. Trump threatened to destroy a civilization. The 25th Amendment is on the table.
        <strong className="mx-1">This is the window. Your members need to act before Congress returns to DC.</strong>
        <Link href="/petition" className="text-white underline font-black ml-1">→ Add Your Name Now</Link>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/95 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">PHIERS.org</Link>
        <div className="flex items-center gap-4">
          <Link href="/petition" className="hidden md:inline-block px-5 py-2 bg-red-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-red-700 transition-all">✍ Be Counted</Link>
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl p-2 border border-white/20 rounded-lg">{mobileMenuOpen ? '✕' : '☰'}</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="fixed top-16 left-0 right-0 bg-[#0d1525] border-b border-[#3ddc84]/20 z-40 p-5 max-h-[calc(100vh-64px)] overflow-y-auto" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="space-y-4">
              <Link href="/no-war" className="block p-4 bg-red-500/10
