// FILE: components/PathosCredibility.tsx
// VERSION: 6.3 – added floating Back to Top button

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PathosCredibility() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Skip button - fixed top-right */}
      <div className="fixed top-16 right-4 z-50">
        <button
          onClick={() => {
            const buttons = document.getElementById('credibility-buttons');
            if (buttons) buttons.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-4 py-2 text-sm bg-green/80 hover:bg-green text-black font-semibold rounded-full shadow-lg backdrop-blur-sm transition"
        >
          Skip
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-4 py-12"
      >
        {/* Page Title */}

      <h1 className="text-3xl md:text-4xl font-bold text-green text-center mb-8">
          Third‑Party Validation:<br />
          Why Pathos Communications Staked Its Reputation on PHIERS
        </h1>

        {/* Click‑to‑play video thumbnail */}
        <div className="text-center mb-12">
          <div
            className="relative w-full max-w-xl mx-auto mb-6 cursor-pointer group"
            style={{ paddingBottom: '56.25%' }}
            onClick={(e) => {
              const container = e.currentTarget;
              const iframe = document.createElement('iframe');
              iframe.src = 'https://www.youtube.com/embed/KLu7USN_dao?autoplay=1';
              iframe.title = 'Pathos Communications explains why they represent PHIERS';
              iframe.className = 'absolute top-0 left-0 w-full h-full';
              iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
              iframe.allowFullscreen = true;
              container.innerHTML = '';
              container.appendChild(iframe);
            }}
          >
            <img
              src="/images/Pathos_Interview_Thumbnail.png"
              alt="Play video: Pathos Communications on PHIERS"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
              <div className="w-16 h-16 rounded-full bg-black/70 flex items-center justify-center border-2 border-white/60 group-hover:scale-110 transition">
                <span className="text-white text-2xl ml-1">▶</span>
              </div>
            </div>
          </div>
          <p className="text-green text-xl md:text-2xl font-semibold italic">
            “If you weren’t legit, we wouldn’t risk putting our name behind yours.”
          </p>
          <p className="text-gray-400 text-base">— Pathos Communications</p>
          <p className="text-gray-300 text-center text-sm mt-4">
            Pathos Communications — a global research and PR agency listed on the London Stock Exchange — conducted multiple multi‑hour interviews with Will Price and publicly explained on video why they chose to represent PHIERS.
          </p>
        </div>

        {/* SECTION: What We Know Works */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4">What We Know Works</h2>
          <p className="text-gray-300 text-base mb-3">
            <span className="font-bold text-white">Harvard Kennedy School</span><br />
            Research shows that when about 3.5% of people get involved, things change. Governments move. Congress listens.
          </p>
          <p className="text-gray-300 text-base mb-3">
            <span className="font-bold text-white">Ralph Nader</span><br />
            Decades of work inside Congress point to a clear number: When 1,500 people in a district speak up together, a representative can’t ignore them.
          </p>
          <p className="text-gray-300 text-base italic mt-2">These aren’t theories.<br />They’re patterns that repeat.</p>
        </div>

        {/* SECTION: Who’s Backed the Strategy */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4">Who’s Backed the Strategy</h2>
          <p className="text-gray-300 text-base">
            <span className="font-bold text-white">PATHOS</span><br />
            PHIERS’ strategy and message structure have been reviewed and supported by PATHOS, a respected communications firm that handles tough fights, crisis moments, and high‑stakes public influence.
          </p>
          <p className="text-gray-300 text-base mt-2">They don’t sign off on nonsense.<br />Their support means the model is solid.</p>
        </div>

        {/* SECTION: Built for Everyone */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4">Built for Everyone</h2>
          <p className="text-gray-300 text-base">
            PHIERS isn’t left or right.<br />
            It’s not red or blue.<br />
            It’s neighbors, workers, parents, veterans, small‑business owners — anyone tired of being ignored.
          </p>
          <p className="text-gray-400 text-lg mt-3 italic">Your district.<br />Your voice.<br />Your leverage.</p>
        </div>

        {/* SECTION: How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4">How It Works</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>You go on the record with your name, email, and ZIP code</li>
            <li>You’re counted in your district</li>
            <li>When your district hits 1,500 people, your rep has to respond</li>
            <li>If they don’t, they risk losing their seat</li>
          </ul>
          <p className="text-green font-semibold mt-3">Not noise.<br />Not outrage.<br />Accountability.</p>
        </div>

        {/* SECTION: Why It Works */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4">Why It Works</h2>
          <p className="text-gray-300 text-base">
            Congress doesn’t fear opinions.<br />
            They fear organized people in their own district.
          </p>
          <p className="text-gray-300 text-base mt-3">
            PHIERS gives regular people the same kind of leverage lobbyists use — without money, access, or backroom deals.
          </p>
          <p className="text-gray-300 text-base mt-2">Just numbers.<br />Just neighbors.<br />Just pressure they can’t ignore.</p>
        </div>

        {/* OPTIONAL: Three Pillars Block */}
        <div className="mt-10 pt-6 border-t border-green/20">
          <h3 className="text-xl md:text-2xl font-bold text-green mb-3">The Three Things That Make Leverage Real</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Show up in the district</li>
            <li>Make it public</li>
            <li>Do it together</li>
          </ul>
          <p className="text-gray-400 text-sm mt-2">Works no matter who you voted for — leverage doesn’t care about parties</p>
        </div>
      </motion.div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-green text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer transition-all duration-150 hover:bg-[#2ab568] hover:-translate-y-0.5 z-[999] border-none shadow-lg ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  )
}