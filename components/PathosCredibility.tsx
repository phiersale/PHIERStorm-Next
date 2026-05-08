// FILE: components/PathosCredibility.tsx
// VERSION: 7.11 - added step-by-step pressure summary box

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

type Props = {
  onBackToSlides?: () => void
}

export default function PathosCredibility({ onBackToSlides }: Props) {
  const [showTopButtons, setShowTopButtons] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide top buttons when scrolling down past 100px, show when scrolling up or near top
      if (currentScrollY > 100 && (lastScrollY.current === undefined || currentScrollY > lastScrollY.current)) {
        setShowTopButtons(false)
      } else if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        setShowTopButtons(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top buttons container – fades out on scroll down */}
      <div
        className={`fixed top-2 left-0 right-0 z-50 flex justify-between px-4 transition-opacity duration-300 ${
          showTopButtons ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Back to Slides button - left side */}
        {onBackToSlides && (
          <button
            onClick={onBackToSlides}
            className="text-gray-500 text-sm underline transition hover:text-gray-300"
            style={{ opacity: 0.6 }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
          >
            ← Back
          </button>
        )}

        {/* Skip button - right side */}
        <button
          onClick={() => {
            const buttons = document.getElementById('credibility-buttons');
            if (buttons) buttons.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-gray-500 text-sm underline transition hover:text-gray-300"
          style={{ opacity: 0.6 }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
        >
          Skip
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-4 py-6"
      >
        {/* Page Title */}
        <h1 className="text-xl md:text-2xl font-bold text-center mb-4">
          <span className="text-white">Third‑Party Validation:</span><br />
          <span className="text-green text-lg md:text-xl">Why Pathos Communications Staked Its Reputation on PHIERS</span>
        </h1>

        {/* Click‑to‑play video thumbnail */}
        <div className="text-center mb-8">
          <div
            className="relative w-full max-w-lg mx-auto mb-4 cursor-pointer group rounded-xl shadow-md overflow-hidden"
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
              className="absolute top-0 left-0 w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/KLu7USN_dao/maxresdefault.jpg"
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
              <div className="w-14 h-14 rounded-full bg-black/70 flex items-center justify-center border-2 border-white/60 group-hover:scale-110 transition shadow-lg">
                <span className="text-white text-2xl ml-1">▶</span>
              </div>
            </div>
          </div>
          <p className="text-green text-lg md:text-xl font-semibold italic">
            “If you weren’t legit, we wouldn’t risk putting our name behind yours.”
          </p>
          <p className="text-gray-400 text-sm">— Pathos Communications</p>
          <p className="text-gray-300 text-center text-xs mt-3">
            Pathos Communications — a global research and PR agency listed on the London Stock Exchange — conducted hours of interviews with Will Price and publicly explained on video why they chose to represent PHIERS.
          </p>
        </div> 

        {/* Why this holds up */}
        <div className="mt-2 mb-8 text-center max-w-2xl mx-auto">
          <h3 className="text-white text-lg font-semibold mb-2">
            Why this holds up
          </h3>
          <div className="text-gray-300 space-y-2 text-xs md:text-sm">
            <p>Real people. Verified. District‑level.</p>
            <p>Not one moment — patterns over time.</p>
            <p>Fully transparent. No black boxes.</p>
            <p>We publish what we find. What happens next is up to voters, the press, and the democratic process.</p>
          </div>
        </div>

        {/* HOW PHIERS ACTUALLY CREATES PRESSURE – step by step */}
        <div className="mb-8 bg-[#0a1628] border border-green/20 rounded-lg p-4 max-w-2xl mx-auto">
          <h3 className="text-green text-base font-bold mb-2 text-center">How PHIERS creates pressure (step by step)</h3>
          <ol className="list-decimal list-inside text-gray-300 text-xs md:text-sm space-y-1">
            <li>1,500 verified people in a district go on record.</li>
            <li>Representative is called to a public town hall.</li>
            <li>If they refuse or give a corrupt answer → public investigation launched.</li>
            <li>We publish findings: votes, donors, ties to war profiteers.</li>
            <li>Representative either resigns under pressure or faces a PHIERS‑backed primary challenger who pre‑commits to the district’s demands.</li>
          </ol>
          <p className="text-gray-400 text-xs mt-2 text-center">No recall needed. Just transparency + voting power.</p>
        </div>

        {/* SECTION: What We Know Works */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-green mb-3">What We Know Works</h2>
          <div className="mb-3">
            <p className="text-white font-bold text-sm md:text-base mb-1">Harvard Kennedy School</p>
            <p className="text-gray-400 text-xs md:text-sm">
              Research shows that when about 3.5% of people get involved, things change. Governments move. Congress listens.
            </p>
          </div>
          <div className="mb-3">
            <p className="text-white font-bold text-sm md:text-base mb-1">Ralph Nader</p>
            <p className="text-gray-400 text-xs md:text-sm">
              Decades of work inside Congress point to a clear number: When 1,500 people in a district speak up together, a representative can’t ignore them.
            </p>
          </div>
          <p className="text-gray-300 text-sm italic mt-2">These aren’t theories.<br />They’re patterns that repeat.</p>
        </div>

        {/* SECTION: Independent Validation. Real‑World Confirmation. */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-green mb-4">Independent Validation. Real‑World Confirmation.</h2>

          <div className="mb-3">
            <p className="text-white font-bold text-sm md:text-base mb-1">Pathos Communications</p>
            <p className="text-gray-400 text-xs md:text-sm">
              A global research and PR firm listed on the London Stock Exchange. After hours of interviews with Will Price, they publicly staked their professional reputation on PHIERS — on video.
            </p>
          </div>

          <p className="text-gray-300 text-sm mb-4">
            Years later, the real world independently confirmed what the model predicted — without knowing PHIERS existed.
          </p>

          <div className="mb-4 pl-3 border-l-2 border-green/30">
            <p className="text-white font-bold text-sm md:text-base mb-1">Mark Cuban's Cost Plus Drugs</p>
            <p className="text-gray-400 text-xs md:text-sm">
              In 2022, Cuban launched direct‑to‑consumer pharmaceuticals at cost, no middlemen. PHIERS documented this exact model in 2009. He built it thirteen years later. Seven million customers proved it works.
            </p>
            <p className="text-green text-xs font-semibold mt-1">We didn't need his endorsement. He built our proof.</p>
          </div>

          <div className="mb-4 pl-3 border-l-2 border-green/30">
            <p className="text-white font-bold text-sm md:text-base mb-1">Telehealth Industry — Teladoc, Zocdoc, Zortt and others</p>
            <p className="text-gray-400 text-xs md:text-sm">
              The entire telehealth industry is built on the delivery model PHIERS designed over a decade before it went mainstream. The math was always there. The industry eventually caught up.
            </p>
            <p className="text-green text-xs font-semibold mt-1">The model was right in 2009. The market confirmed it in 2020.</p>
          </div>

          <div className="mt-3 p-3 bg-green/5 border border-green/20 rounded-lg">
            <p className="text-white text-xs font-semibold">The pattern is clear:</p>
            <p className="text-gray-400 text-xs mt-1">
              Every major validation of the PHIERS model came from institutions and entrepreneurs who arrived at the same conclusions independently — without knowing PHIERS existed. That's not coincidence. That's what being a decade early looks like.
            </p>
          </div>
        </div>

        {/* SECTION: Built for Everyone */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-green mb-3">Built for Everyone</h2>
          <p className="text-gray-300 text-sm md:text-base">
            PHIERS isn't left or right.<br />
            It's not red or blue.<br />
            It's neighbors, workers, parents, veterans, small‑business owners — anyone tired of being ignored.
          </p>
          <p className="text-gray-400 text-base md:text-lg mt-2 italic">Your district.<br />Your voice.<br />Your leverage.</p>
        </div>
      </motion.div>

      {/* Petition Button – safe, visible style */}
      <div className="text-center py-6">
        <button
          onClick={() => window.location.href = '/petition'}
          className="px-8 py-3 bg-green text-black font-bold rounded-lg shadow-md hover:bg-green-dim transition text-center text-base"
          style={{ backgroundColor: '#3ddc84', color: '#080d1a' }}
        >
          ✍ Continue to Petition
        </button>
      </div>

    </>
  )
}

// FILE: components/PathosCredibility.tsx