'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/crisis', label: 'Crisis' },
  { href: '/leverage', label: 'How It Works' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/organizers', label: 'Organize' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/images/PHIERS_Logo.png" alt="PHIERS Logo" width={36} height={36} className="group-hover:scale-110 transition-transform" />
          <span className="text-lg font-bold tracking-wider text-white">PHIERS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-gray-400 hover:text-[#3ddc84] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/petition"
            className="ml-3 px-4 py-2 bg-[#3ddc84] text-[#080d1a] text-sm font-semibold rounded-lg hover:bg-[#34c474] transition-colors"
          >
            Sign Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a1020] border-t border-white/5 overflow-hidden"
          >
            <div className="max-w-[1200px] mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/petition"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-4 py-3 bg-[#3ddc84] text-[#080d1a] font-semibold rounded-lg mt-2"
              >
                Sign Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
