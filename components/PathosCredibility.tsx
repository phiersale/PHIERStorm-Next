  // FILE: components/PathosCredibility.tsx
  // VERSION: 16.1 → 17.0 – Proof‑First, Cinematic UX, No Copy Changes

  'use client'

  import { useState, useEffect, useRef } from 'react'
  import { motion } from 'framer-motion'

  type Props = {
    onBackToSlides?: () => void
    onOpenTransitionModal?: () => void
  }

  const sectionFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  export default function PathosCredibility({ onBackToSlides, onOpenTransitionModal }: Props) {
    const [showSkipAhead, setShowSkipAhead] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0
        setShowSkipAhead(scrollPercent > 10)
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
            className="fixed bottom-5 right-5 z-50 bg-[#0f1725]/90 border border-green/20 text-gray-200 text-sm px-4 py-2 rounded-full shadow-lg shadow-green/30 backdrop-blur-sm hover:border-green/40 hover:text-white hover:-translate-y-0.5 hover:shadow-green/40 transition-all duration-300"
          >
            Continue to Solutions →
          </button>
        )}

        {/* Optional left spine + anchor nav (desktop only) */}
        <div className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 h-1/2 w-[2px] bg-green/20 z-30" />
        <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-3 text-[11px] text-gray-500 z-40">
          <a href="#top" className="hover:text-green transition-colors">
            Top
          </a>
          <a href="#videos" className="hover:text-green transition-colors">
            Validation
          </a>
          <a href="#layer2" className="hover:text-green transition-colors">
            Narrative
          </a>
          <a href="#legacy" className="hover:text-green transition-colors">
            Legacy
          </a>
          <a href="#record" className="hover:text-green transition-colors">
            Record
          </a>
          <a href="#cta" className="hover:text-green transition-colors">
            Questions
          </a>
        </div>

        <motion.div
          id="top"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14 } }
          }}
          className="max-w-4xl mx-auto px-4 pt-2 pb-6"
        >
          {/* [1] LOGO — identifier only */}
          <motion.div variants={sectionFade} className="flex justify-center mb-6">
            <img
              src="/images/PHIERS_Logo.png"
              alt="PHIERS"
              className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-80"
            />
          </motion.div>

          {/* [2] QUESTION — sets up skepticism */}
          <motion.div variants={sectionFade} className="text-center max-w-2xl mx-auto mb-6">
            <p className="text-gray-300 text-base leading-relaxed">
              A reasonable question comes first:
            </p>
            <p className="text-green text-xl font-semibold italic mt-3">
              Why should anyone take this seriously?
            </p>
          </motion.div>

          {/* [3] BREATHING ROOM #1 */}
          <div className="h-6" />

          {/* [4] FRAMING LINE — bridges skepticism → proof */}
          <motion.div variants={sectionFade} className="text-center max-w-2xl mx-auto mb-6">
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Over the last six years, four of the world's most powerful thought leadership accelerators
              and PR firms tried to champion PHIERS. They believed in it enough to stake their reputations
              on it. Sabotage stopped them every time. What you're about to see is what is finally breaking
              through.
            </p>
          </motion.div>

          {/* [5] BREATHING ROOM #2 — bigger pause before big reveal */}
          <div className="h-8" />

          {/* [6] PAGE TITLE + SUBTITLE — announce the page */}
          <motion.div variants={sectionFade} className="text-center max-w-3xl mx-auto mb-6">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              The Public Record
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Three independent validations.<br />
              On video. On the record.
            </p>
          </motion.div>

          {/* [7] SECTION LABEL + BREATHING ROOM #3 */}
          <motion.div variants={sectionFade} className="mb-4">
            <p className="text-green text-xs tracking-widest text-center mb-2 opacity-70">
              INDEPENDENT VALIDATION
            </p>
          </motion.div>

          {/* ========== LAYER 1: HERO VALIDATION VIDEOS (PROOF FIRST) ========== */}
          <motion.div
            id="videos"
            variants={sectionFade}
            className="flex flex-col gap-8 mb-12"
          >
            {/* VIDEO CARD 1 - PATHOS */}
            <div className="w-full bg-[#0a1628] rounded-xl p-8 border border-green/25 shadow-2xl shadow-black/60">
              <div className="mb-4">
                <p className="text-green text-xl md:text-2xl font-bold mb-1">
                  PATHOS Communications
                </p>
                <p className="text-gray-400 text-sm">
                  Global PR Firm · London Stock Exchange Listed
                </p>
              </div>

              <div
                className="relative w-full cursor-pointer group rounded-xl overflow-hidden mb-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                style={{ paddingBottom: '56.25%' }}
                onClick={(e) => {
                  const container = e.currentTarget
                  const iframe = document.createElement('iframe')
                  iframe.src = 'https://www.youtube.com/embed/KLu7USN_dao?autoplay=1'
                  iframe.title = 'Pathos Communications on PHIERS'
                  iframe.className = 'absolute top-0 left-0 w-full h-full'
                  iframe.allow =
                    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  iframe.allowFullscreen = true
                  container.innerHTML = ''
                  container.appendChild(iframe)
                }}
              >
                <img
                  src="/images/pathos-thumbnail.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-110 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all">
                  <div className="w-16 h-16 rounded-full bg-green/30 border border-green/60 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <p className="text-green text-lg font-semibold italic mb-2">
                "If you weren't legit, we wouldn't risk our name."
              </p>
              <p className="text-gray-500 text-xs">Pathos · February 2026</p>
            </div>

            {/* VIDEO CARD 2 - BIGC */}
            <div className="w-full bg-[#0a1628] rounded-xl p-8 border border-green/25 shadow-2xl shadow-black/60">
              <div className="mb-4">
                <p className="text-green text-xl md:text-2xl font-bold mb-1">
                  Voices of Accountability
                </p>
                <p className="text-gray-400 text-sm">
                  National Media · Cultural Leadership
                </p>
              </div>

              <div
                className="relative w-full cursor-pointer group rounded-xl overflow-hidden mb-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                style={{ paddingBottom: '56.25%' }}
                onClick={(e) => {
                  const container = e.currentTarget
                  const iframe = document.createElement('iframe')
                  iframe.src = 'https://www.youtube.com/embed/qxcRP8lx9dc?autoplay=1'
                  iframe.title = 'Trusted Voices on PHIERS'
                  iframe.className = 'absolute top-0 left-0 w-full h-full'
                  iframe.allow =
                    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  iframe.allowFullscreen = true
                  container.innerHTML = ''
                  container.appendChild(iframe)
                }}
              >
                <img
                  src="/images/BigC_ THUMBNAIL_w_Karen_Trevor_n_Ralph.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-110 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all">
                  <div className="w-16 h-16 rounded-full bg-green/30 border border-green/60 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <p className="text-green text-lg font-semibold italic mb-2">
                "This isn't left or right. This is people trying to survive."
              </p>
              <p className="text-gray-500 text-xs">Curry, Nader, Noah, Hunter · May 2026</p>
            </div>

            {/* VIDEO CARD 3 - DOTCOM */}
            <div className="w-full bg-[#0a1628] rounded-xl p-8 border border-green/25 shadow-2xl shadow-black/60">
              <div className="mb-4">
                <p className="text-green text-xl md:text-2xl font-bold mb-1">
                  DotCom Magazine
                </p>
                <p className="text-gray-400 text-sm">
                  Entrepreneur Spotlight · National Media
                </p>
              </div>

              <div
                className="relative w-full cursor-pointer group rounded-xl overflow-hidden mb-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                style={{ paddingBottom: '56.25%' }}
                onClick={(e) => {
                  const container = e.currentTarget
                  const iframe = document.createElement('iframe')
                  iframe.src = 'https://www.youtube.com/embed/pUdlWukaLLY?autoplay=1'
                  iframe.title = 'DotCom Magazine Interview'
                  iframe.className = 'absolute top-0 left-0 w-full h-full'
                  iframe.allow =
                    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  iframe.allowFullscreen = true
                  container.innerHTML = ''
                  container.appendChild(iframe)
                }}
              >
                <img
                  src="/images/dotcom-thumbnail.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-110 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all">
                  <div className="w-16 h-16 rounded-full bg-green/30 border border-green/60 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <p className="text-green text-lg font-semibold italic mb-2">
                "A serious, credible framework."
              </p>
              <p className="text-gray-500 text-xs">DotCom Magazine · July 2022</p>
            </div>
          </motion.div>

          {/* CHAPTER MARKER */}
          <div className="h-[1px] w-full bg-green/10 my-10" />

          {/* [9] EXPLANATION SECTION (what you just saw) */}
          <motion.div
            variants={sectionFade}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Over the years, PHIERS has been evaluated by people across industries — including Fortune
              500 companies, institutions, and government agencies.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Many initially wanted to work with us, until they understood our goal: reducing the influence
              of profit over people.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              What you just saw on video — three independent sources choosing to amplify PHIERS because they
              believed in it — that's proof in action.
            </p>
            <p className="text-green text-lg font-semibold italic">
              This is what credibility looks like when it's earned, not claimed.
            </p>
          </motion.div>

          {/* CHAPTER MARKER */}
          <div className="h-[1px] w-full bg-green/10 my-10" />

          {/* ========== LAYER 2: OPEN NARRATIVE & MECHANISM ========== */}
          <motion.div id="layer2" variants={sectionFade}>
            {/* Established teaser - credibility upfront */}
            <div className="text-center mb-4">
              <p className="text-green text-sm font-mono tracking-wider">FIRST RECORDED VIDEO 2007</p>
              <p className="text-gray-500 text-[11px]">18+ years of documented public record</p>
            </div>

            {/* Enemy system definition */}
            <div className="mt-6 mb-4 text-center max-w-2xl mx-auto">
              <p className="text-gray-200 text-sm italic leading-relaxed border-l-2 border-green/30 pl-3">
                PHIERS exists because too many Americans — left, right, and independent — believe government
                now responds more consistently to concentrated money than to ordinary people.
              </p>
            </div>

            {/* Emotional anchor 1 */}
            <div className="mb-8 text-center max-w-2xl mx-auto bg-[#0a1628]/40 p-4 rounded-lg border-l-2 border-green/30">
              <p className="text-gray-200 text-sm leading-relaxed">
                Most people are not policy experts.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mt-2">
                They are trying to afford groceries, care for aging parents, survive medical bills, and keep
                their families intact.
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
                People already knew the system was broken. The problem was this: ordinary people had no
                organized leverage against billionaires, lobbyists, and political machines.
              </p>
              <p className="text-gray-400 text-sm mb-3">
                PHIERS waited — not because the problems were unclear, but because peaceful, lawful,
                district‑level pressure had to be real before anyone was asked to trust it.
              </p>
              <p className="text-green text-sm font-semibold">
                Now the pieces fit. This is the first time the mechanism can actually work.
              </p>
            </div>

            {/* Emotional anchor 2 */}
            <div className="mb-8 max-w-2xl mx-auto text-center">
              <p className="text-gray-300 text-sm italic">
                “People already knew the system was broken.<br />
                The problem was simple: ordinary people had no organized leverage against billionaires,
                lobbyists, and political machines.”
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
                  Representatives who repeatedly ignore verified district concerns are publicly exposed — and
                  voters decide what happens next.
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
                  Research shows that when about 3.5% of people get involved, things change. Governments move.
                  Congress listens.
                </p>
              </div>
              <div className="mb-3">
                <p className="text-white font-bold text-sm md:text-base mb-1">Ralph Nader</p>
                <p className="text-gray-400 text-xs md:text-sm">
                  Decades of work inside Congress point to a clear number: When 1,500 people in a district
                  speak up together, a representative can't ignore them.
                </p>
              </div>
              <p className="text-gray-300 text-sm italic mt-2">
                These aren't theories.<br />
                They're patterns that repeat.
              </p>
              <p className="text-green text-sm font-bold mt-3">
                History changes when ordinary people become organized enough that power can no longer ignore
                them.
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
                It's neighbors, workers, parents, veterans, caregivers, and small‑business owners — anyone
                tired of being ignored by systems that were supposed to serve them.
              </p>
              <p className="text-gray-400 text-base md:text-lg mt-2 italic">
                Your district.<br />
                Your voice.<br />
                Your leverage.
              </p>
            </div>
          </motion.div>

          {/* CHAPTER MARKER */}
          <div className="h-[1px] w-full bg-green/10 my-10" />

          {/* ========== LAYER 3: RECEIPTS (VIDEOS) ========== */}
          <motion.div
            id="legacy"
            variants={sectionFade}
            className="mb-12 mt-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-green mb-2">Legacy Videos</h2>
            <p className="text-gray-400 text-sm mb-4">
              Early documentation (2007–2014) – archival, not promotional
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center max-w-3xl mx-auto">
              {/* 2007 video */}
              <div className="w-28 sm:w-36 relative">
                <div className="absolute -top-2 left-2 z-10 bg-green/80 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-sm">
                  FIRST RECORDING
                </div>
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
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
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-500 text-[10px] mt-1">Intro (2007)</p>
              </div>

              {/* Sizzle Film 2011 */}
              <div className="w-28 sm:w-36">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 transition-transform hover:scale-[1.02]"
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
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-500 text-[10px] mt-1">Sizzle (c.2011)</p>
              </div>

              {/* Patriots on PHIERS 2014 */}
              <div className="w-28 sm:w-36">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 transition-transform hover:scale-[1.02]"
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
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-500 text-[10px] mt-1">Patriots on PHIERS (c.2014)</p>
              </div>

              {/* Silos to Synergies 2014 */}
              <div className="w-28 sm:w-36">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 transition-transform hover:scale-[1.02]"
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
                        <path d="M8 5v14l11-7z" />
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
          </motion.div>

          {/* CHAPTER MARKER */}
          <div className="h-[1px] w-full bg-green/10 my-10" />

          {/* Convergence */}
          <motion.details
            variants={sectionFade}
            className="group mb-8 bg-[#0a1628]/40 border border-green/20 rounded-lg p-4"
          >
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
                  PHIERS documented this model with SureSafe Pharma in 2009. Cuban launched Cost Plus Drugs
                  in 2022. Seven million customers later, the savings model is proven. TrumpRx joined with
                  Cuban in 2026 — cross‑partisan confirmation of the same structural pressure.
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
                  PHIERS documented distributed telehealth and coordinated care architecture over a decade
                  before industry mainstream adoption. Zortt launched three years ago — executing the same
                  cooperative access model PHIERS designed years earlier.
                </p>
                <p className="text-green text-xs font-semibold mt-2">
                  The significance is not branding. It's documented convergence.
                </p>
              </div>
              <div className="mt-3 p-3 bg-green/5 border border-green/20 rounded-lg">
                <p className="text-white text-xs font-semibold">The pattern is clear:</p>
                <p className="text-gray-400 text-xs mt-1">
                  Every major validation came from institutions and entrepreneurs who arrived at the same
                  conclusions independently — without knowing PHIERS existed. That's not coincidence.
                </p>
              </div>
            </div>
          </motion.details>

          {/* CHAPTER MARKER */}
          <div className="h-[1px] w-full bg-green/10 my-10" />

          {/* Public Record */}
          <motion.details
            id="record"
            open
            variants={sectionFade}
            className="group mb-8 bg-[#0a1628]/40 border border-green/20 rounded-lg p-4"
          >
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
                  Full archive history (50+ captures, 2007–2025) →
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
                    ['2009', 'PHIERS.org partners with SureSafe Pharma'],
                    ['2011', 'Archived platform snapshot — health reform coalition'],
                    ['2014', 'Operational proposals, named partnerships, dated documents'],
                    ['2022', 'DotCom Magazine Entrepreneur Spotlight'],
                    ['2026', 'Pathos Communications — London Stock Exchange listed'],
                    ['2026', 'BigC interview — framework discussed by media, culture, and movement leaders'],
                    ['Now', 'District organizing model — active']
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
          </motion.details>

          {/* CHAPTER MARKER */}
          <div className="h-[1px] w-full bg-green/10 my-10" />

          {/* Momentum & Close */}
          <motion.div
            variants={sectionFade}
            className="max-w-xl mx-auto text-center my-8"
          >
            <p className="text-gray-300 text-sm italic">
              For years, most of this remained archival.
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Not anymore. Costs are rising. Trust is collapsing. People are organizing again.
            </p>
            <p className="text-green text-sm font-bold mt-2">
              The conditions that once made this impossible are disappearing.
            </p>
          </motion.div>

          {/* Emotional anchor 3 */}
          <motion.div
            variants={sectionFade}
            className="max-w-xl mx-auto text-center mb-6"
          >
            <div className="bg-[#0a1628] p-4 rounded-lg border border-green/20">
              <p className="text-gray-200 text-sm leading-relaxed">
                A lot of people are angry.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mt-2">
                About rising costs. About endless wars. About corruption. About watching communities collapse
                while wealth concentrates at the top.
              </p>
              <p className="text-green text-sm font-semibold mt-2">
                PHIERS exists to turn that frustration into organized, peaceful, democratic pressure.
              </p>
            </div>
          </motion.div>

          {/* Killer closer */}
          <motion.div
            variants={sectionFade}
            className="max-w-xl mx-auto text-center my-10"
          >
            <div className="bg-[#0a1628] p-5 rounded-lg border border-green/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]">
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
          </motion.div>

          {/* So what? block */}
          <motion.div
            variants={sectionFade}
            className="max-w-xl mx-auto text-center mb-6"
          >
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
          </motion.div>

          {/* Question form CTA */}
          <motion.div
            id="cta"
            variants={sectionFade}
            className="text-center pt-1 pb-6"
          >
            <div className="max-w-md mx-auto bg-[#0a1628] border border-green/20 rounded-lg p-6">
              <p className="text-gray-300 text-sm mb-3">
                We're collecting questions, feedback, and input from people who are still learning, still
                deciding, or simply curious.
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
          </motion.div>
        </motion.div>
      </>
    )
  }

  // FILE: components/PathosCredibility.tsx
