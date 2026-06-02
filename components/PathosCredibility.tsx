// FILE: components/PathosCredibility.tsx
// VERSION: 16.0 – Leads with Independent Validation, structural + tone polish

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type Props = {
  onBackToSlides?: () => void
  onOpenTransitionModal?: () => void
}

export default function PathosCredibility({ onBackToSlides, onOpenTransitionModal }: Props) {
  const [showSkipAhead, setShowSkipAhead] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0
      setShowSkipAhead(scrollPercent > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goToMainHomepage = () => {
    window.location.href = '/?main=true'
  }

  return (
    <>
      {/* Floating skip button – opens transition modal */}
      {showSkipAhead && (
        <button
          onClick={() => onOpenTransitionModal?.()}
          className="fixed bottom-5 right-5 z-50 bg-[#0f1725]/90 border border-green/20 text-gray-200 text-sm px-4 py-2 rounded-full shadow-lg backdrop-blur-sm hover:border-green/40 hover:text-white transition-all duration-300"
        >
          Continue to Solutions →
        </button>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-4 pt-2 pb-6"
      >
        {/* Documentary seal */}
        <div className="flex justify-center mb-2">
          <img
            src="/images/PHIERS_Logo.png"
            alt="PHIERS"
            className="w-32 h-32 md:w-40 md:h-40 object-contain opacity-90"
          />
        </div>

        {/* Bridge paragraph before credibility */}
        <div className="text-center max-w-2xl mx-auto mb-8 border-b border-green/20 pb-6">
          <p className="text-gray-300 text-sm leading-relaxed">
            Before exploring what PHIERS proposes, a reasonable question comes first:
          </p>
          <p className="text-green text-lg font-semibold italic mt-2">
            Why should anyone take this seriously?
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mt-2">
            This section exists to answer that question.
          </p>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
          The Public Record
        </h1>
        <p className="text-center text-gray-400 text-sm mb-4 max-w-2xl mx-auto">
          Why reasonable people took PHIERS seriously — and you can verify it yourself.
        </p>
        <p className="text-center text-green text-sm font-semibold mb-8 max-w-2xl mx-auto">
          Before you explore the solutions layer, here's why serious people took PHIERS seriously.
        </p>

{/* ========== LAYER 1: INDEPENDENT VALIDATION (LEAD SECTION) ========== */}
<div className="mb-16">

  <h2 className="text-2xl md:text-3xl font-bold text-green text-center mb-6">
    Independent Validation
  </h2>

  {/* Why This Matters intro block */}
  <div className="max-w-2xl mx-auto text-center mb-10">
    <p className="text-gray-300 text-sm mb-4">
      Over the years, PHIERS has been evaluated by people across industries — including Fortune 500 companies, institutions, and government agencies.
    </p>
    <p className="text-gray-300 text-sm mb-4">
      Many initially wanted to work with us, until they understood our goal: reducing the influence of profit over people.
    </p>
    <p className="text-gray-300 text-sm mb-4">
      Separately, leaders in PR, media, and entrepreneurship also approached PHIERS because they believed the idea was serious and nationally relevant.
    </p>
    <p className="text-green text-sm font-semibold italic mt-4">
      PHIERS does not ask for trust — only that you look at the public record and see who believed in it enough to help amplify it.
    </p>
  </div>

  {/* Shark-linked firms strip */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-6 border-t border-green/20 mb-2">
    <div className="flex flex-col items-center">
      <img
        src="/images/Kevin_Harrington_Pathos.jpg"
        alt="Kevin Harrington — Pathos Communications"
        className="h-24 w-auto rounded-md grayscale opacity-80 border border-green/20"
      />
      <p className="text-[10px] text-gray-400 mt-1">Kevin Harrington — Pathos</p>
    </div>

    <div className="flex flex-col items-center">
      <img
        src="/images/Kevin_O'Leary_DotComMag.jpg"
        alt="Kevin O'Leary — DotCom Magazine"
        className="h-24 w-auto rounded-md grayscale opacity-80 border border-green/20"
      />
      <p className="text-[10px] text-gray-400 mt-1">Kevin O'Leary — DotCom Magazine</p>
    </div>
  </div>

  {/* Bridge explanation */}
  <p className="text-center text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
    Kevin Harrington and Kevin O'Leary are each connected to the PR firms that publicly validated PHIERS — 
    Pathos Communications and DotCom Magazine. The interviews below show how those firms chose to feature and 
    help amplify the idea because they believed in its credibility and national relevance.
  </p>

  {/* Three validation videos */}
  <div className="flex flex-col md:flex-row gap-4 md:gap-3 items-stretch mb-10">

    {/* 1. PATHOS */}
    <div className="flex-1 bg-[#0a1628]/60 rounded-lg p-4 border border-green/20 hover:border-green/40 hover:-translate-y-[2px] transition-all duration-300">
      <p className="text-green text-xs sm:text-sm font-semibold mb-2">PATHOS — Global PR</p>
      <p className="text-gray-300 text-[11px] sm:text-xs mb-3 leading-relaxed">
        A global PR firm powerful enough to be listed on the London Stock Exchange. Pathos evaluated PHIERS, believed in its
        <span className="font-medium"> global impact</span>, and secured interest from multiple A‑list publications who wanted to help spread it.
      </p>

      <div
        className="relative w-full cursor-pointer group rounded-md overflow-hidden mb-3"
        style={{ paddingBottom: '56.25%' }}
        onClick={(e) => {
          const container = e.currentTarget
          const iframe = document.createElement('iframe')
          iframe.src = 'https://www.youtube.com/embed/KLu7USN_dao?autoplay=1'
          iframe.title = 'Pathos Communications on PHIERS'
          iframe.className = 'absolute top-0 left-0 w-full h-full'
          iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          iframe.allowFullscreen = true
          container.innerHTML = ''
          container.appendChild(iframe)
        }}
      >
        <img src="/images/pathos-thumbnail.jpg" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>

      <p className="text-green text-[11px] sm:text-sm font-semibold italic">“If you weren't legit, we wouldn't risk our name.”</p>
      <p className="text-gray-400 text-[9px] sm:text-[10px] mt-1">Pathos · Feb 2026</p>
    </div>

    {/* 2. CULTURE */}
    <div className="flex-1 bg-[#0a1628]/60 rounded-lg p-4 border border-green/20 hover:border-green/40 hover:-translate-y-[2px] transition-all duration-300">
      <p className="text-green text-xs sm:text-sm font-semibold mb-2">CULTURE — Media & People</p>
      <p className="text-gray-300 text-[11px] sm:text-xs mb-3 leading-relaxed">
        A nationally syndicated cultural voice amplified PHIERS because the mechanism made sense to ordinary people. 
        He connected PHIERS to the frustrations millions feel every day.
      </p>

      <div
        className="relative w-full cursor-pointer group rounded-md overflow-hidden mb-3"
        style={{ paddingBottom: '56.25%' }}
        onClick={(e) => {
          const container = e.currentTarget
          const iframe = document.createElement('iframe')
          iframe.src = 'https://www.youtube.com/embed/qxcRP8lx9dc?autoplay=1'
          iframe.title = 'Trusted Voices on PHIERS'
          iframe.className = 'absolute top-0 left-0 w-full h-full'
          iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          iframe.allowFullscreen = true
          container.innerHTML = ''
          container.appendChild(iframe)
        }}
      >
        <img src="/images/BigC_ THUMBNAIL_w_Karen_Trevor_n_Ralph.jpg" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>

      <p className="text-green text-[11px] sm:text-sm font-semibold italic">“This isn't left or right. This is people trying to survive.”</p>
      <p className="text-gray-400 text-[9px] sm:text-[10px] mt-1">Curry, Nader, Noah, Hunter · May 2026</p>
    </div>

    {/* 3. DOTCOM */}
    <div className="flex-1 bg-[#0a1628]/60 rounded-lg p-4 border border-green/20 hover:border-green/40 hover:-translate-y-[2px] transition-all duration-300">
      <p className="text-green text-xs sm:text-sm font-semibold mb-2">MEDIA — Entrepreneur Spotlight</p>
      <p className="text-gray-300 text-[11px] sm:text-xs mb-3 leading-relaxed">
        DotCom Magazine selected PHIERS because the idea met their threshold for “this deserves national attention.” 
        They spotlight founders whose work is serious, timely, and structurally sound.
      </p>

      <div
        className="relative w-full cursor-pointer group rounded-md overflow-hidden mb-3"
        style={{ paddingBottom: '56.25%' }}
        onClick={(e) => {
          const container = e.currentTarget
          const iframe = document.createElement('iframe')
          iframe.src = 'https://www.youtube.com/embed/pUdlWukaLLY?autoplay=1'
          iframe.title = 'DotCom Magazine Interview'
          iframe.className = 'absolute top-0 left-0 w-full h-full'
          iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          iframe.allowFullscreen = true
          container.innerHTML = ''
          container.appendChild(iframe)
        }}
      >
        <img src="/images/dotcom-thumbnail.jpg" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>

      <p className="text-green text-[11px] sm:text-sm font-semibold italic">“A serious, credible framework.”</p>
      <p className="text-gray-400 text-[9px] sm:text-[10px] mt-1">DotCom Magazine · July 2022</p>
    </div>

  </div>

  {/* Sharks archival image — moved BELOW the videos */}
  <div className="mt-4 flex justify-center">
    <img
      src="/images/archive/3_Original_Sharks_Vouch_PATHOS_n_DotCom.jpg"
      alt="Original Shark Tank investors — Cuban, O'Leary, Harrington"
      className="rounded-md border border-green/20 shadow-sm w-2/3 sm:w-1/2 md:w-2/5 grayscale opacity-70"
    />
  </div>

  {/* Updated caption */}
  <p className="text-center text-gray-500 text-[10px] italic mt-2 mb-6 max-w-md mx-auto">
    Each of these men is connected to PR firms or companies that stand to benefit from what PHIERS makes possible — structurally, civically, or economically.
  </p>

</div>


        {/* ========== LAYER 2: OPEN NARRATIVE & MECHANISM ========== */}

        {/* Established teaser - credibility upfront */}
        <div className="text-center mb-4">
          <p className="text-green text-sm font-mono tracking-wider">FIRST RECORDED VIDEO 2007</p>
          <p className="text-gray-500 text-[11px]">18+ years of documented public record</p>
        </div>

        {/* Enemy system definition */}
        <div className="mt-6 mb-4 text-center max-w-2xl mx-auto">
          <p className="text-gray-200 text-sm italic leading-relaxed border-l-2 border-green/30 pl-3">
            PHIERS exists because too many Americans — left, right, and independent — believe government now responds more consistently to concentrated money than to ordinary people.
          </p>
        </div>

        {/* Emotional anchor 1 */}
        <div className="mb-8 text-center max-w-2xl mx-auto bg-[#0a1628]/40 p-4 rounded-lg border-l-2 border-green/30">
          <p className="text-gray-200 text-sm leading-relaxed">
            Most people are not policy experts.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mt-2">
            They are trying to afford groceries, care for aging parents, survive medical bills, and keep their families intact.
          </p>
          <p className="text-green text-base font-semibold mt-3">PHIERS starts there.</p>
        </div>

        {/* Why PHIERS built quietly */}
        <div className="mb-10 max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-green mb-3">
            Why PHIERS built quietly for years
          </h2>
          <p className="text-gray-400 text-sm mb-3">
            Most movements launch before they are ready. PHIERS did the opposite.
          </p>
          <p className="text-gray-400 text-sm mb-3">
            People already knew the system was broken. The problem was this: ordinary people had no organized leverage against billionaires, lobbyists, and political machines.
          </p>
          <p className="text-gray-400 text-sm mb-3">
            PHIERS waited — not because the problems were unclear, but because peaceful, lawful, district‑level pressure had to be real before anyone was asked to trust it.
          </p>
          <p className="text-green text-sm font-semibold">
            Now the pieces fit. This is the first time the mechanism can actually work.
          </p>
        </div>

        {/* Emotional anchor 2 */}
        <div className="mb-8 max-w-2xl mx-auto text-center">
          <p className="text-gray-300 text-sm italic">
            “People already knew the system was broken.<br />
            The problem was simple: ordinary people had no organized leverage against billionaires, lobbyists, and political machines.”
          </p>
        </div>

        {/* Timeline teaser */}
        <div className="text-center my-6">
          <p className="text-gray-500 text-xs">↓ 22 years of documented public record ↓</p>
        </div>

        {/* Mechanism section */}
        <div
          id="mechanism"
          className="mb-8 bg-[#0a1628] border border-green/20 rounded-lg p-4 max-w-2xl mx-auto"
        >
          <h3 className="text-green text-base font-bold mb-2 text-center">
            How PHIERS creates pressure (step by step)
          </h3>
          <ol className="list-decimal list-inside text-gray-300 text-xs md:text-sm space-y-1">
            <li>1,500 verified people in a district go on record.</li>
            <li>Representative is called to a public town hall.</li>
            <li>If they refuse or give a corrupt answer → public investigation launched.</li>
            <li>We publish findings: votes, donors, ties to defense contractors.</li>
            <li>
              Representatives who repeatedly ignore verified district concerns are publicly exposed — and voters decide what happens next.
            </li>
          </ol>
          <div className="mt-6 pt-4 pb-2 text-center bg-green/5 rounded-lg border border-green/20">
            <p className="text-green text-xl md:text-2xl font-bold italic tracking-wide">
              No recall needed. Just transparency + voting power.
            </p>
          </div>
        </div>

        {/* What We Know Works */}
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
              Decades of work inside Congress point to a clear number: When 1,500 people in a district speak up together, a representative can't ignore them.
            </p>
          </div>
          <p className="text-gray-300 text-sm italic mt-2">
            These aren't theories.<br />
            They're patterns that repeat.
          </p>
          <p className="text-green text-sm font-bold mt-3">
            History changes when ordinary people become organized enough that power can no longer ignore them.
          </p>
        </div>

        {/* Emotional grounding line */}
        <div className="my-6 text-center max-w-2xl mx-auto">
          <p className="text-gray-300 text-sm italic">
            “People are tired of being told nothing can change.<br />
            That's usually what power says when it doesn't want to be challenged.”
          </p>
        </div>

        {/* Built for Everyone */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-green mb-3">Built for Everyone</h2>
          <p className="text-gray-300 text-sm md:text-base">
            PHIERS isn't left or right.<br />
            It isn't red or blue.<br />
            It's neighbors, workers, parents, veterans, caregivers, and small‑business owners — anyone tired of being ignored by systems that were supposed to serve them.
          </p>
          <p className="text-gray-400 text-base md:text-lg mt-2 italic">
            Your district.<br />
            Your voice.<br />
            Your leverage.
          </p>
        </div>

        {/* ========== LAYER 3: RECEIPTS (VIDEOS) ========== */}
        <div className="mb-12 mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-green mb-2">Legacy Videos</h2>
          <p className="text-gray-400 text-sm mb-4">
            Early documentation (2007–2014) – archival, not promotional
          </p>
          <div className="flex flex-wrap justify-center items-start gap-4 max-w-3xl mx-auto">
            {/* 2007 video */}
            <div className="w-28 sm:w-36 relative">
              <div className="absolute -top-2 left-2 z-10 bg-green/80 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-sm">
                FIRST RECORDING
              </div>
              <div
                className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40"
                style={{ paddingBottom: '56.25%' }}
                onClick={(e) => {
                  const container = e.currentTarget
                  const iframe = document.createElement('iframe')
                  iframe.src = 'https://player.vimeo.com/video/11995433?autoplay=1'
                  iframe.className = 'absolute top-0 left-0 w-full h-full'
                  iframe.allow = 'autoplay; fullscreen'
                  iframe.allowFullscreen = true
                  container.innerHTML = ''
                  container.appendChild(iframe)
                }}
              >
                <img
                  src="https://vumbnail.com/11995433.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-500 text-[10px] mt-1">Intro (2007)</p>
            </div>

            {/* Sizzle Film 2011 */}
            <div className="w-28 sm:w-36">
              <div
                className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40"
                style={{ paddingBottom: '56.25%' }}
                onClick={(e) => {
                  const container = e.currentTarget
                  const iframe = document.createElement('iframe')
                  iframe.src = 'https://www.youtube.com/embed/mxDkyFfBnZw?autoplay=1'
                  iframe.className = 'absolute top-0 left-0 w-full h-full'
                  iframe.allow =
                    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  iframe.allowFullscreen = true
                  container.innerHTML = ''
                  container.appendChild(iframe)
                }}
              >
                <img
                  src="https://img.youtube.com/vi/mxDkyFfBnZw/mqdefault.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-500 text-[10px] mt-1">Sizzle (c.2011)</p>
            </div>

            {/* Patriots on PHIERS 2014 */}
            <div className="w-28 sm:w-36">
              <div
                className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40"
                style={{ paddingBottom: '56.25%' }}
                onClick={(e) => {
                  const container = e.currentTarget
                  const iframe = document.createElement('iframe')
                  iframe.src = 'https://www.youtube.com/embed/r1_y7MXNt4E?autoplay=1'
                  iframe.className = 'absolute top-0 left-0 w-full h-full'
                  iframe.allow =
                    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  iframe.allowFullscreen = true
                  container.innerHTML = ''
                  container.appendChild(iframe)
                }}
              >
                <img
                  src="https://img.youtube.com/vi/r1_y7MXNt4E/mqdefault.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-500 text-[10px] mt-1">Patriots on PHIERS (c.2014)</p>
            </div>

            {/* Silos to Synergies 2014 */}
            <div className="w-28 sm:w-36">
              <div
                className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40"
                style={{ paddingBottom: '56.25%' }}
                onClick={(e) => {
                  const container = e.currentTarget
                  const iframe = document.createElement('iframe')
                  iframe.src = 'https://www.youtube.com/embed/JWC6ztov2sA?autoplay=1'
                  iframe.className = 'absolute top-0 left-0 w-full h-full'
                  iframe.allow =
                    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  iframe.allowFullscreen = true
                  container.innerHTML = ''
                  container.appendChild(iframe)
                }}
              >
                <img
                  src="https://img.youtube.com/vi/JWC6ztov2sA/mqdefault.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-500 text-[10px] mt-1">
                Silos to Synergies (c.2014)
              </p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs italic mt-4">
            Hundreds more archival videos document the full journey.
          </p>
        </div>

        {/* Convergence */}
        <details className="group mb-8">
          <summary className="cursor-pointer text-xl md:text-2xl font-bold text-green mb-2 list-none flex items-center">
            <span className="mr-2 group-open:rotate-90 transition-transform">▶</span>
            Convergence: How independent systems arrived at the same conclusions
          </summary>
          <div className="mt-4 space-y-4 relative pl-3 border-l-2 border-green/20">
            <div className="pl-3 border-l-2 border-green/30">
              <p className="text-white font-bold text-sm mb-1">
                Mark Cuban, TrumpRx & Direct‑to‑Consumer Pharma
              </p>
              <p className="text-gray-400 text-xs">
                PHIERS documented this model with SureSafe Pharma in 2009. Cuban launched Cost Plus Drugs in 2022. Seven million customers later, the savings model is proven. TrumpRx joined with Cuban in 2026 — cross‑partisan confirmation of the same structural pressure.
              </p>
              <p className="text-green text-xs font-semibold mt-2">
                Cuban/TrumpRx validate the model. PHIERS completes it.
              </p>
            </div>
            <div className="pl-3 border-l-2 border-green/30">
              <p className="text-white font-bold text-sm mb-1">
                Telehealth Industry — Teladoc, Zocdoc, Zortt
              </p>
              <p className="text-gray-400 text-xs">
                PHIERS documented distributed telehealth and coordinated care architecture over a decade before industry mainstream adoption. Zortt launched three years ago — executing the same cooperative access model PHIERS designed years earlier.
              </p>
              <p className="text-green text-xs font-semibold mt-2">
                The significance is not branding. It's documented convergence.
              </p>
            </div>
            <div className="mt-3 p-3 bg-green/5 border border-green/20 rounded-lg">
              <p className="text-white text-xs font-semibold">The pattern is clear:</p>
              <p className="text-gray-400 text-xs mt-1">
                Every major validation came from institutions and entrepreneurs who arrived at the same conclusions independently — without knowing PHIERS existed. That's not coincidence.
              </p>
            </div>
          </div>
        </details>

        {/* Public Record */}
        <details className="group mb-8" open>
          <summary className="cursor-pointer text-xl md:text-2xl font-bold text-green mb-2 list-none flex items-center">
            <span className="mr-2 group-open:rotate-90 transition-transform">▶</span>
            The Public Record
          </summary>
          <div className="mt-4 space-y-4">
            <div className="text-center py-4 mb-2">
              <p className="text-5xl font-bold text-green">2004</p>
              <p className="text-gray-400 text-sm mt-1">Earliest documented PHIERS record</p>
            </div>
            <p className="text-gray-300 text-sm">
              The website launched in{' '}
              <span className="text-green font-semibold">2009</span> in collaboration with Al Wilson's
              SureSafe Pharma — a direct‑to‑consumer pharmaceutical model.
            </p>
            <p className="text-gray-300 text-sm">
              The <span className="text-green font-semibold">September 2011 snapshot</span> (below) was
              captured two years after launch, showing a fully operational platform addressing health
              reform, coordinated care, and structural economic pressures.
            </p>
            <div className="flex justify-center">
              <img
                src="/images/archive/phiers-2011-archive-header-url-v1.jpg"
                alt="Archived PHIERS.org page from September 22, 2011"
                className="rounded-md border border-green/20 shadow-md max-w-full md:max-w-2xl"
              />
            </div>
            <p className="text-gray-500 text-xs italic text-center">
              Archived PHIERS.org page — September 22 2011.
            </p>
            <div className="mt-4 p-4 bg-[#0a1628] border border-green/20 rounded-lg">
              <p className="text-white text-xs font-semibold mb-3">
                Contemporaneous partnerships (on record):
              </p>
              <ul className="text-gray-400 text-xs space-y-1 list-none">
                <li>→ SureSafe Pharma (Al Wilson)</li>
                <li>→ VA Medical Centers & Maryland Veterans Administration</li>
                <li>→ Patriot Medical Transport Systems</li>
                <li>→ Daedalus Systems</li>
                <li>→ MedStar Health</li>
                <li>→ Prince George's County Housing Authority</li>
                <li>→ Maryland CRISP Health Information Exchange</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://web.archive.org/web/20250000000000*/phiers.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green text-xs hover:underline"
              >
                Full archive history (50+ captures, 2004–2025) →
              </a>
              <a
                href="https://web.archive.org/web/20140518210231/http://phiers.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green text-xs hover:underline"
              >
                2014 snapshot →
              </a>
              <a
                href="https://web.archive.org/web/20110922235754/http://www.phiers.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green text-xs hover:underline"
              >
                2011 snapshot →
              </a>
            </div>
            <div className="mt-4 border border-green/10 rounded-lg p-4 bg-[#0a1628]">
              <p className="text-white text-xs font-semibold mb-3">Timeline</p>
              <div className="space-y-2">
                {[
                  ['2007', 'First recorded video — PHIERS documented framework'],
                  ['2007', 'First recorded video — archival'],
                  ['2009', 'PHIERS.org launches with SureSafe Pharma'],
                  ['2011', 'Archived platform snapshot — health reform coalition'],
                  ['2014', 'Operational proposals, named partnerships, dated documents'],
                  ['2022', 'DotCom Magazine Entrepreneur Spotlight'],
                  ['2026', 'Pathos Communications — London Stock Exchange listed'],
                  ['Now', 'District organizing model — active'],
                ].map(([year, label]) => (
                  <div key={year} className="flex items-start gap-3">
                    <span className="text-green text-xs font-bold w-10 shrink-0">{year}</span>
                    <span className="text-gray-400 text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-xs italic mt-4">
              The point is not retroactive credit. It's that structural pressure recognition, when
              documented publicly and early, eventually becomes its own form of evidence.
            </p>
          </div>
        </details>

        {/* Momentum & Close */}
        <div className="max-w-xl mx-auto text-center my-8">
          <p className="text-gray-300 text-sm italic">
            For years, most of this remained archival.
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Not anymore. Costs are rising. Trust is collapsing. People are organizing again.
          </p>
          <p className="text-green text-sm font-bold mt-2">
            The conditions that once made this impossible are disappearing.
          </p>
        </div>

        {/* Emotional anchor 3 */}
        <div className="max-w-xl mx-auto text-center mb-6">
          <div className="bg-[#0a1628] p-4 rounded-lg border border-green/20">
            <p className="text-gray-200 text-sm leading-relaxed">
              A lot of people are angry.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              About rising costs. About endless wars. About corruption. About watching communities collapse while wealth concentrates at the top.
            </p>
            <p className="text-green text-sm font-semibold mt-2">
              PHIERS exists to turn that frustration into organized, peaceful, democratic pressure.
            </p>
          </div>
        </div>

        {/* Killer closer */}
        <div className="max-w-xl mx-auto text-center my-10">
          <div className="bg-[#0a1628] p-5 rounded-lg border border-green/20">
            <p className="text-gray-200 text-sm leading-relaxed">
              Twenty-two years of public record. Independent validation. A transparent mechanism.
            </p>
            <p className="text-gray-200 text-sm leading-relaxed mt-2">
              No violence. No revolution. No special interests.
            </p>
            <p className="text-green text-sm font-semibold mt-3">
              Just organized citizens applying peaceful democratic pressure.
            </p>
            <p className="text-gray-400 text-sm mt-3">
              If that interests you, keep exploring.
            </p>
          </div>
        </div>

        {/* So what? block */}
        <div className="max-w-xl mx-auto text-center mb-6">
          <p className="text-gray-400 text-sm leading-relaxed">
            What does this mean for you?
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Nothing — unless you choose it.
          </p>
          <p className="text-gray-400 text-sm mt-1">
            PHIERS is a tool, not a demand.
          </p>
          <p className="text-gray-400 text-sm mt-1">
            The record is public. The mechanism is transparent. The next step is yours.
          </p>
        </div>

        {/* Question form CTA */}
        <div className="text-center pt-1 pb-6" id="credibility-buttons">
          <div className="max-w-md mx-auto bg-[#0a1628] border border-green/20 rounded-lg p-6">
            <p className="text-gray-300 text-sm mb-3">
              We're collecting questions, feedback, and input from people who are still learning, still deciding, or simply curious.
            </p>
            <p className="text-gray-400 text-xs mb-4">
              Your input helps shape what we build next.
            </p>
            <p className="text-gray-400 text-xs mb-4">
              We're not asking for commitment. Just curiosity.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-green text-black font-bold rounded-lg hover:bg-green-dim transition text-sm"
              style={{ backgroundColor: '#3ddc84', color: '#080d1a' }}
            >
              → Ask a question
            </a>
          </div>
        </div>
      </motion.div>
    </>
  )
}

// FILE: components/PathosCredibility.tsx