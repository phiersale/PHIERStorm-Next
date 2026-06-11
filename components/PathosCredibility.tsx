  // FILE: components/PathosCredibility.tsx
  // VERSION: 17.4 – Fixed duplicate keys, removed unused imports

  'use client'

  import { useState, useEffect, useRef } from 'react'
  import { motion } from 'framer-motion'

  type Props = {
    onBackToSlides?: () => void
    onOpenTransitionModal?: () => void
    onOpenPrivacyModal?: (url: string) => void
  }

  const sectionFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  export default function PathosCredibility({ onBackToSlides, onOpenTransitionModal, onOpenPrivacyModal }: Props) {
    const [showSkipAhead, setShowSkipAhead] = useState(false)
  const [showSideMenu, setShowSideMenu] = useState(false)
  const [copiedMessage, setCopiedMessage] = useState('')
  const [readingTime, setReadingTime] = useState<number | null>(null)
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [showShortcutToast, setShowShortcutToast] = useState(false)
  const prefersReducedMotion = useRef(false)

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0
        setShowSkipAhead(scrollPercent > 10)
        setShowSideMenu(scrollPercent > 25)
        setScrollPercentage(scrollPercent)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Calculate reading time
    useEffect(() => {
      const timer = setTimeout(() => {
        const mainContent = document.querySelector('#top')?.innerText || ''
        const wordCount = mainContent.split(/\s+/).length
        const minutes = Math.ceil(wordCount / 200)
        setReadingTime(minutes)
      }, 500)
      
      return () => clearTimeout(timer)
    }, [])

    // Improved details element UX - prevents closing when clicking inside content
    useEffect(() => {
      const handleDetailsToggle = (e: MouseEvent) => {
        const detail = (e.target as Element).closest('details')
        if (!detail) return
        
        const isSummary = (e.target as Element).closest('summary')
        const isInteractive = (e.target as Element).closest('a, button, [onclick], [role="button"], .cursor-pointer')
        
        if (!isSummary && !isInteractive && e.target !== detail) {
          e.preventDefault()
        }
      }
      
      document.addEventListener('click', handleDetailsToggle)
      return () => document.removeEventListener('click', handleDetailsToggle)
    }, [])

    // Keyboard shortcuts
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
          e.preventDefault()
          setShowShortcutToast(true)
          setTimeout(() => setShowShortcutToast(false), 3000)
        }
        if (e.key === 't' && !e.ctrlKey && !e.metaKey) {
          e.preventDefault()
          smoothScrollToElement('#top')
        }
        if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
          e.preventDefault()
          onOpenTransitionModal?.()
        }
      }
      
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onOpenTransitionModal])

    // Check for reduced motion preference
    useEffect(() => {
      prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      const handler = (e: MediaQueryListEvent) => {
        prefersReducedMotion.current = e.matches
      }
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }, [])

    // Smooth scroll with offset for fixed header
    const smoothScrollToElement = (elementId: string) => {
      const element = document.querySelector(elementId)
      if (!element) return
      
      // Close any open mobile keyboard if present
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
      
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - 80
      
      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion.current ? 'auto' : 'smooth'
      })
      
      // Update URL hash without jumping
      if (window.history && window.history.pushState) {
        window.history.pushState({}, '', elementId)
      }
    }

    // Load video with loading state
    const loadVideo = (container: HTMLElement, videoUrl: string, title: string) => {
      const loadingDiv = document.createElement('div')
      loadingDiv.className = 'absolute inset-0 flex items-center justify-center bg-black/80 z-10'
      loadingDiv.innerHTML = `
        <div class="flex flex-col items-center gap-2">
          <div class="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <span class="text-green-400 text-xs">Loading video...</span>
        </div>
      `
      container.appendChild(loadingDiv)
      
      setTimeout(() => {
        const iframe = document.createElement('iframe')
        iframe.src = videoUrl
        iframe.title = title
        iframe.className = 'absolute top-0 left-0 w-full h-full'
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        iframe.allowFullscreen = true
        container.innerHTML = ''
        container.appendChild(iframe)
      }, 250)
    }

    // Open video in larger modal
    const openVideoModal = (videoUrl: string, title: string) => {
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', `Video: ${title}`);
      
      const modalContent = document.createElement('div');
      modalContent.className = 'relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl border border-green/30';
      
      const closeBtn = document.createElement('button');
      closeBtn.className = 'absolute top-3 right-3 z-10 text-white/80 text-xl bg-black/60 rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-200';
      closeBtn.innerHTML = '✕';
      closeBtn.setAttribute('aria-label', 'Close video');
      closeBtn.onclick = () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
      };
      
      const iframe = document.createElement('iframe');
      iframe.src = videoUrl;
      iframe.title = title;
      iframe.className = 'w-full aspect-video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      
      modalContent.appendChild(closeBtn);
      modalContent.appendChild(iframe);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';
      
      // Close on Escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeBtn.onclick?.(new MouseEvent('click'));
          document.removeEventListener('keydown', handleEscape);
        }
      };
      document.addEventListener('keydown', handleEscape);
      
      // Close on backdrop click
      modal.onclick = (e) => {
        if (e.target === modal) {
          closeBtn.onclick?.(new MouseEvent('click'));
        }
      };
    }

    // goToMainHomepage removed - unused
    return (
      <>

        {/* Floating skip button – opens transition modal */}
        {showSkipAhead && (
          <div className="fixed bottom-5 right-5 z-50">
            <div className="relative">
              <button
                onClick={() => onOpenTransitionModal?.()}
                className="bg-[#0f1725]/90 border border-green/20 text-gray-200 text-sm px-4 py-2 pr-8 rounded-full shadow-lg shadow-green/30 backdrop-blur-sm hover:border-green/40 hover:text-white hover:-translate-y-0.5 hover:shadow-green/40 transition-all duration-300 whitespace-nowrap"
              >
                Continue to Solutions →
              </button>
              <button
                onClick={() => setShowSkipAhead(false)}
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-700/90 border border-gray-500 text-gray-300 hover:bg-red-600/80 hover:border-red-400 hover:text-white transition-all duration-200 flex items-center justify-center text-[10px] font-bold"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Scroll progress ring */}
        {showSkipAhead && (
          <div className="fixed bottom-5 left-5 z-50">
            <div className="relative w-10 h-10">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(61,220,132,0.2)" strokeWidth="2"/>
                <circle 
                  cx="18" cy="18" r="16" fill="none" 
                  stroke="#3ddc84" strokeWidth="2" 
                  strokeDasharray={`${scrollPercentage * 1.005} 100.5`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[10px] text-green-400">
                {Math.round(scrollPercentage)}%
              </span>
            </div>
          </div>
        )}

        {/* Optional left spine + anchor nav (desktop only) - fades in after 1/3 of page */}
        <div className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 h-1/2 w-[2px] bg-green/20 z-30 transition-opacity duration-700" style={{ opacity: showSideMenu ? 1 : 0 }} />
        <div 
          className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-3 text-[11px] text-gray-500 z-40 transition-all duration-700"
          style={{ opacity: showSideMenu ? 1 : 0, transform: showSideMenu ? 'translateY(-50%)' : 'translateY(-45%)' }}
        >
          <a 
            href="#top" 
            onClick={(e) => { e.preventDefault(); smoothScrollToElement('#top'); }}
            className="hover:text-green transition-colors"
          >
            Top
          </a>
          <a 
            href="#videos" 
            onClick={(e) => { e.preventDefault(); smoothScrollToElement('#videos'); }}
            className="hover:text-green transition-colors"
          >
            Validation
          </a>
          <a 
            href="#layer2" 
            onClick={(e) => { e.preventDefault(); smoothScrollToElement('#layer2'); }}
            className="hover:text-green transition-colors"
          >
            Narrative
          </a>
          <a 
            href="#legacy" 
            onClick={(e) => { e.preventDefault(); smoothScrollToElement('#legacy'); }}
            className="hover:text-green transition-colors"
          >
            Legacy
          </a>
          <a 
            href="#record" 
            onClick={(e) => { e.preventDefault(); smoothScrollToElement('#record'); }}
            className="hover:text-green transition-colors"
          >
            Record
          </a>
          <a 
            href="/situation"
            className="hover:text-green transition-colors"
          >
            News
          </a>
          <a 
            href="#cta" 
            onClick={(e) => { e.preventDefault(); smoothScrollToElement('#cta'); }}
            className="hover:text-green transition-colors"
          >
            Next
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
          className="w-full max-w-4xl mx-auto px-3 sm:px-4 pt-2 pb-20 md:pb-6 overflow-x-hidden"
        >
          {/* [1] LOGO — small anchor, not hero */}
          <motion.div variants={sectionFade} className="flex justify-center mb-4">
            <img
              src="/images/PHIERS_Logo.png"
              alt="PHIERS"
              className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-50"
            />
          </motion.div>

          {/* PAGE TITLE - HUGE */}
          <motion.div
            variants={sectionFade}
            className="text-center px-4 mt-16 md:mt-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              What Makes Us Credible
            </h1>

            <p className="text-gray-400 text-base md:text-lg text-center mt-3 leading-relaxed">
              Three independent validators. One public record. Zero hype.
            </p>
          </motion.div>

          {/* Spacer before validators */}
          <div className="mt-10 md:mt-14"></div>


          {/* Reading time indicator */}
          {readingTime && (
            <motion.div variants={sectionFade} className="text-center">
              <div className="text-gray-500 text-xs mb-4">
                📖 {readingTime} min read • Updated 09 June, 2026  
              </div>
            </motion.div>
          )}

          {/* 30-Second Overview: The Purpose of PHIERS (50% size - archival context, not spectacle) */}
          <motion.div variants={sectionFade} className="max-w-2xl mx-auto my-12">
            <div className="bg-[#0a1628] rounded-xl p-4 md:p-6 border border-green/25 shadow-2xl shadow-black/60">
              <p className="text-green text-sm font-semibold mb-3 tracking-wide text-center">
                THE PURPOSE OF PHIERS — 2013
              </p>
              <div
                className="relative w-full max-w-2xl mx-auto cursor-pointer group rounded-lg overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                style={{ paddingBottom: '28.125%' }}
                onClick={() => openVideoModal('https://player.vimeo.com/video/59460323?autoplay=1&title=0&byline=0&portrait=0', 'Purpose of PHIERS - 2013')}
              >
                <img
                  src="https://vumbnail.com/59460323.jpg"
                  alt="2013 PHIERS overview video thumbnail"
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
              <p className="text-gray-400 text-xs italic mt-3 text-center">
                A short, direct overview of PHIERS — healthcare, coordinated care, jobs, and leverage (2013)
              </p>
            </div>
          </motion.div>

          {/* Timeline moved below validation videos */}

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

          {/* [6] PAGE TITLE + SUBTITLE — removed (redundant) */}

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
            <div className="w-full mx-auto bg-[#0a1628] rounded-xl p-4 sm:p-6 md:p-8 border border-green/25 shadow-2xl shadow-black/60">
              <div className="mb-4">
                <p className="text-green text-xl md:text-2xl font-bold mb-1">
                  PATHOS Communications
                </p>
                <p className="text-gray-400 text-sm">
                  Global PR Firm · London Stock Exchange Listed
                </p>
              </div>

              <div
                className="video-aspect-box relative w-full cursor-pointer group rounded-xl overflow-hidden mb-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                onClick={() => openVideoModal('https://www.youtube.com/embed/KLu7USN_dao?autoplay=1', 'Pathos Communications on PHIERS')}
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
            <div className="w-full mx-auto bg-[#0a1628] rounded-xl p-4 sm:p-6 md:p-8 border border-green/25 shadow-2xl shadow-black/60">
              <div className="mb-4">
                <p className="text-green text-2xl md:text-2xl font-bold mb-1">
                  Voices of Accountability
                </p>
                <p className="text-gray-400 text-base md:text-sm">
                  National Media · Cultural Leadership
                </p>
              </div>

              <div
                className="video-aspect-box relative w-full cursor-pointer group rounded-xl overflow-hidden mb-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                onClick={() => openVideoModal('https://www.youtube.com/embed/qxcRP8lx9dc?autoplay=1', 'Trusted Voices on PHIERS')}
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

              <p className="text-green text-xl md:text-lg font-semibold italic mb-2">
                "This isn't left or right. This is people trying to survive."
              </p>
              <p className="text-gray-500 text-sm md:text-xs">Curry, Nader, Noah, Hunter · May 2026</p>
            </div>

            {/* VIDEO CARD 3 - DOTCOM */}
            <div className="w-full mx-auto bg-[#0a1628] rounded-xl p-4 sm:p-6 md:p-8 border border-green/25 shadow-2xl shadow-black/60">
              <div className="mb-4">
                <p className="text-green text-2xl md:text-2xl font-bold mb-1">
                  DotCom Magazine
                </p>
                <p className="text-gray-400 text-base md:text-sm">
                  Entrepreneur Spotlight · National Media
                </p>
              </div>

              <div
                className="video-aspect-box relative w-full cursor-pointer group rounded-xl overflow-hidden mb-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                onClick={() => openVideoModal('https://www.youtube.com/embed/pUdlWukaLLY?autoplay=1', 'DotCom Magazine Interview')}
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

              <p className="text-green text-xl md:text-lg font-semibold italic mb-2">
                "A serious, credible framework."
              </p>
              <p className="text-gray-500 text-sm md:text-xs">DotCom Magazine · July 2022</p>
            </div>

          {/* TRANSITION SENTENCE + VALIDATOR DROPDOWN */}
          <div className="max-w-3xl mx-auto my-8 text-center">
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              Three organizations. Three different audiences. Three independent validations.
            </p>
            <p className="text-gray-400 text-xs mb-4">
              For readers unfamiliar with them:
            </p>
          </div>

          <details className="group mb-12 bg-[#0a1628]/40 border border-green/20 rounded-lg p-4 max-w-3xl mx-auto">
            <summary className="cursor-pointer text-lg font-semibold text-green mb-2 list-none flex items-center justify-between">
              <span>Who are these organizations?    </span>
              <span className="group-open:rotate-90 transition-transform">▶</span>
            </summary>
            <div className="mt-4 space-y-4 text-gray-300 text-sm">
              <div className="border-l-2 border-green/30 pl-3">
                <p className="text-white font-bold flex items-center gap-1">⭐ Pathos Communications</p>
                <p className="text-gray-400 text-xs">A London Stock Exchange–listed global PR firm known for vetting legitimacy before taking on any client. Their on‑camera statement — <span className="text-green-300 italic">"If you weren't legit, we wouldn't risk our name"</span> — became part of the public record validating PHIERS' structural credibility.</p>
              </div>
              <div className="border-l-2 border-green/30 pl-3">
                <p className="text-white font-bold flex items-center gap-1">⭐ DotCom Magazine</p>
                <p className="text-gray-400 text-xs">A national business media platform recognized for in‑depth interviews with founders and innovators. Their segment on PHIERS wasn't promotional — it was a rigorous, unscripted examination of the model that documented how it holds up under direct questioning.</p>
              </div>
              <div className="border-l-2 border-green/30 pl-3">
                <p className="text-white font-bold flex items-center gap-1">⭐ Big C Sports</p>
                <p className="text-gray-400 text-xs">A national iHeartRadio show hosted by former NFL player Charlton Curry, known for blending sports, culture, news, and civic responsibility. His interview with PHIERS sparked the deeper exploration that led to a composite credibility video featuring aligned commentary from Ralph Nader, Trevor Noah, and Karen Hunter.</p>
              </div>
              <div className="mt-3 pt-2 border-t border-green/20">
                <p className="text-green text-xs font-semibold">Three different audiences. Three independent validations. One public record.</p>
              </div>
            </div>
          </details>
          </motion.div>

          {/* ========== COLLAPSIBLE TIMELINE — INSTITUTIONAL RECEIPTS ========== */}
          <section className="w-full max-w-4xl mx-auto px-6 mt-12 md:mt-16">
            <div className="text-center mb-4">
              <p className="text-green text-sm font-mono tracking-wider">THE RECORD</p>
              <p className="text-gray-500 text-[11px]">22 years of documented public record</p>
            </div>

            <details className="group border border-green/20 rounded-lg bg-[#0a1628]/40 overflow-hidden">
              
              {/* CLOSED VIEW */}
              <summary className="cursor-pointer list-none p-6">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-white font-semibold">
                    View Full Timeline
                  </p>
                  <span className="text-green transition-transform duration-300 group-open:rotate-90">
                    ▶
                  </span>
                </div>

                {/* Horizontal timeline */}
                <div className="overflow-x-auto pb-2">
                  <div className="min-w-full sm:min-w-[700px] flex items-center justify-between relative">
                    
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-green/20" />

                    {[
                      '2004',
                      '2007',
                      '2009',
                      '2011',
                      '2013',
                      '2014',
                      '2022',
                      '2026',
                      'Now'
                    ].map((year) => (
                      <div
                        key={year}
                        className="relative flex flex-col items-center z-10"
                      >
                        <div className="w-4 h-4 rounded-full bg-green border-2 border-[#0a1628]" />
                        <span className="text-[11px] text-gray-400 mt-2">
                          {year}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-500 text-xs italic mt-5 text-center">
                  22 years of public documentation. Click to expand.
                </p>
              </summary>

              {/* EXPANDED VIEW */}
              <div className="px-6 pb-6 border-t border-green/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-6">

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-green text-sm font-bold w-12 shrink-0">2004</span>
                      <span className="text-gray-300 text-sm">Earliest documented PHIERS record</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-green text-sm font-bold w-12 shrink-0">2007</span>
                      <span className="text-gray-300 text-sm">First recorded video — PHIERS documented framework</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-green text-sm font-bold w-12 shrink-0">2009</span>
                      <span className="text-gray-300 text-sm">PHIERS.org partners with SureSafe Pharma</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-green text-sm font-bold w-12 shrink-0">2011</span>
                      <span className="text-gray-300 text-sm">Archived platform snapshot — health reform coalition</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-green text-sm font-bold w-12 shrink-0">2013</span>
                      <span className="text-gray-300 text-sm">First comprehensive articulation of PHIERS mission</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-green text-sm font-bold w-12 shrink-0">2014</span>
                      <span className="text-gray-300 text-sm">Operational proposals, named partnerships, dated documents</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-green text-sm font-bold w-12 shrink-0">2022</span>
                      <span className="text-gray-300 text-sm">DotCom Magazine Entrepreneur Spotlight</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-green text-sm font-bold w-12 shrink-0">2026</span>
                      <span className="text-gray-300 text-sm">Pathos Communications — London Stock Exchange listed</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-green text-sm font-bold w-12 shrink-0">2026</span>
                      <span className="text-gray-300 text-sm">BigC interview — framework discussed by media, culture, and movement leaders</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-green text-sm font-bold w-12 shrink-0">Now</span>
                      <span className="text-gray-300 text-sm">District organizing model — active</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 text-xs italic mt-6 text-center">
                  The point is not retroactive credit. It's that structural pressure recognition,
                  when documented publicly and early, eventually becomes its own form of evidence.
                </p>
              </div>
            </details>
          </section>

          <div className="mt-12 md:mt-16"></div>

          {/* ========== SHARK TANK CONNECTION (COLLAPSIBLE) ========== */}
          <motion.details
            variants={sectionFade}
            className="group mb-8 bg-[#0a1628]/40 border border-green/20 rounded-lg p-4"
          >
            <summary className="cursor-pointer text-xl md:text-2xl font-bold text-green mb-2 list-none flex items-center py-2">
              <span className="mr-3 group-open:rotate-90 transition-transform">▶</span>
              Shark Tank Connection — Why This Matters Now
            </summary>
            <div className="mt-2 text-gray-400 text-sm mb-4">Pathos. DotCom. Kevin Harrington. Kevin O'Leary. Mark Cuban. All roads lead here.</div>
            
            <div className="mt-4 space-y-6 relative pl-3 border-l-2 border-green/20">
              
              {/* BLOCK 1 — Sharks stacked vertically: Cuban → O'Leary → Harrington */}
              <div className="flex flex-col items-center gap-6 max-w-xs sm:max-w-sm mx-auto w-full">
                {/* Mark Cuban - Top */}
                <div className="text-center w-full">
                  <img
                    src="/images/Mark_Cuban_Disrupts_Drug_Pricing.jpg"
                    alt="Mark Cuban — Disrupting drug pricing for good"
                    className="w-full rounded-lg border border-green/30"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; }}
                  />
                  <p className="text-gray-400 text-[10px] md:text-xs mt-1">Mark Cuban · Cost Plus Drugs · Disrupting drug pricing for good</p>
                </div>
                
                {/* Kevin O'Leary - Middle */}
                <div className="text-center w-full">
                  <img
                    src="/images/Kevin_O_Leary_DotComMag.jpg"
                    alt="Kevin O'Leary — Original Shark — DotCom Magazine"
                    className="w-full rounded-lg border border-green/30"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; }}
                  />
                  <p className="text-gray-400 text-[10px] md:text-xs mt-1">Kevin O'Leary · Original Shark · DotCom Magazine</p>
                </div>
                
                {/* Kevin Harrington - Bottom */}
                <div className="text-center w-full">
                  <img
                    src="/images/Kevin_Harrington_Pathos.jpg"
                    alt="Kevin Harrington — Original Shark — Pathos Communications"
                    className="w-full rounded-lg border border-green/30"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; }}
                  />
                  <p className="text-gray-400 text-[10px] md:text-xs mt-1">Kevin Harrington · Original Shark · Pathos Communications</p>
                </div>
              </div>
              
              <div className="text-center">
                <img
                  src="/images/3_Original_Sharks_Vouch_PATHOS_n_DotCom.jpg"
                  alt="Three Original Sharks"
                  className="w-full max-w-md mx-auto rounded-lg border border-green/30 my-2"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; }}
                />
                <p className="text-green text-xs italic">Three Sharks. Two validated PHIERS. One is building exactly what PHIERS designed in 2009.</p>
              </div>

              {/* BLOCK 2 — The Connection */}
              <div className="pl-3 border-l-2 border-green/30">
                <p className="text-white font-bold text-sm mb-1">How We Got Here</p>
                <p className="text-gray-400 text-xs">
                  Pathos Communications — who told us on camera "if you weren't legit, we wouldn't risk our name" — is championed by founding Sharks who did the first season of Shark Tank alongside Mark Cuban.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  DotCom Magazine — whose Kevin O'Leary connection brought Will Price to national attention in 2022 — runs in the same founding Shark ecosystem.
                </p>
                <p className="text-green text-xs font-semibold mt-2">This is not name-dropping. These are documented relationships between the people who validated PHIERS and the people who built Shark Tank.</p>
              </div>

              {/* BLOCK 3 — The Cuban Opportunity */}
              <div className="pl-3 border-l-2 border-amber-500/50">
                <p className="text-white font-bold text-sm mb-1">Mark Cuban Wants to Grow. PHIERS Is the Best Path.</p>
                <ul className="text-gray-400 text-xs space-y-1 list-disc pl-4">
                  <li>Cuban's Cost Plus Drugs has 7 million customers. TrumpRx is his latest partnership. But neither reaches the full market — Medicare, Medicaid, ACA, uninsured, unemployed.</li>
                  <li>PHIERS co-op marketplace (founded 2009 model) is a not-for-profit buying cooperative built specifically for that audience. Everyone the current model misses.</li>
                  <li>SIICDARE will help Cuban compete on specialty drugs — the highest-margin, most underserved category in pharmaceutical access.</li>
                  <li>The DotCom Magazine interview is documented proof that we identified this opportunity and built toward it years before Cuban's current partners were in the picture.</li>
                </ul>
                <p className="text-green text-xs font-semibold mt-2">PHIERS can help Mark Cuban grow faster than the TrumpRx deal — and serve people TrumpRx will never reach.</p>
              </div>

              {/* Mark Cuban disrupts drug pricing image */}
              <div className="my-4">
                <img
                  src="/images/MarkCuban_Disrupts_Drug_Pricing.jpg"
                  alt="Mark Cuban disrupts drug pricing for good"
                  className="w-full max-w-md mx-auto rounded-lg border border-amber-500/30"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; }}
                />
                <p className="text-center text-gray-500 text-[10px] mt-1">Mark Cuban — disrupting drug pricing for good</p>
              </div>

              {/* Trump-Cuban partnership image */}
              <div className="my-4">
                <img
                  src="/images/trump-cuban-trumprx.jpg"
                  alt="Trump and Mark Cuban join forces to reduce drug costs"
                  className="w-full max-w-md mx-auto rounded-lg border border-amber-500/30"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; }}
                />
                <p className="text-center text-gray-500 text-[10px] mt-1">Trump + Cuban · TrumpRx · 2026 — "Republicans, Independents, Democrats all want cheaper drugs"</p>
              </div>

              {/* BLOCK 4 — The Bigger Picture */}
              <div className="mt-3 p-3 bg-green/5 border border-green/20 rounded-lg">
                <p className="text-white text-xs font-semibold">What This Becomes</p>
                <p className="text-gray-400 text-xs mt-1">
                  A not-for-profit cooperative marketplace with no profit motive competing with Amazon and Walmart — and passing every dollar of savings directly to members.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  Save taxpayers enough to fund healthcare for all. 100% self-sustaining. No government subsidy required.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  This is a viable business opportunity for Shark Tank to evaluate. Kevin Harrington, Kevin O'Leary, and Mark Cuban can each decide independently whether to support it. The record is public. The model is documented. The timing is now.
                </p>
                <p className="text-amber-400 text-xs italic mt-2">"We've been preparing for this moment all our lives. Read on."</p>
              </div>

              {/* BLOCK 5 — CTA */}
              <div className="text-center mt-2">
                <a
                  href="/homepage-teeth"
                  className="text-green text-xs hover:underline inline-flex items-center gap-1"
                >
                  → Learn more about PHIERSale and the cooperative marketplace
                </a>
              </div>
            </div>
          </motion.details>

          {/* ========== VISION & VALUES SECTIONS ========== */}
          
          {/* SECTION: PATRIOTIC HOMECOMING */}
          <motion.details
            variants={sectionFade}
            className="group mb-12 bg-[#0a1628]/40 border border-green/20 rounded-lg p-4 max-w-3xl mx-auto"
          >
            <summary className="cursor-pointer text-xl md:text-2xl font-bold text-white mb-2 list-none flex items-center py-2">
              <span className="mr-3 group-open:rotate-90 transition-transform">▶</span>
              A Patriotic Homecoming for American Democracy
            </summary>

            <div className="mt-6 space-y-5 text-gray-300 leading-relaxed max-w-3xl mx-auto pl-3 border-l-2 border-green/30">
              <p>The goal is simple.</p>

              <p>Have PHIERS fully operational by June 13.</p>

              <p>Demonstrate organized civic participation by June 14.</p>

              <p>
                And by Independence Day, show that representative government
                can still answer to the people.
              </p>

              <div className="text-center py-4 space-y-2 font-semibold bg-[#0a1628] rounded-lg px-4 my-4">
                <p>Not through violence.</p>
                <p>Not through chaos.</p>
                <p>Through organization.</p>
                <p>Through accountability.</p>
                <p>Through participation.</p>
              </div>

              <p>The First Reconstruction rebuilt the Union.</p>

              <p>The Second Reconstruction expanded civil rights.</p>

              <p className="font-semibold text-white">
                The Third Reconstruction rebuilds accountability between
                citizens and government.
              </p>

              <p>PHIERS is not asking Americans to agree on everything.</p>

              <p>
                We're asking Americans to remember that elected officials
                work for the people—not the other way around.
              </p>

              <p className="font-semibold text-green-400">
                Fifteen Hundred is not the destination.
                It is the proof.
              </p>

              <p>Proof that ordinary people can still organize.</p>
              <p>Proof that citizens can still be heard.</p>
              <p>Proof that democracy still belongs to the people.</p>

              <p className="text-center text-xl font-bold text-white pt-4">
                A patriotic homecoming for American democracy.
              </p>

              <p className="text-center text-white font-semibold">
                The beginning of a Third Reconstruction.
              </p>

              <p className="text-center text-sm text-gray-500 mt-4">
                Every contribution helps move PHIERS toward full operational readiness.
              </p>
            </div>
          </motion.details>

          {/* SECTION: MABSHA VALUES */}
          <motion.details
            variants={sectionFade}
            className="group mb-12 bg-[#0a1628]/40 border border-green/20 rounded-lg p-4 max-w-3xl mx-auto"
          >
            <summary className="cursor-pointer text-xl md:text-2xl font-bold text-white mb-2 list-none flex items-center py-2">
              <span className="mr-3 group-open:rotate-90 transition-transform">▶</span>
              Our Standard: MABSHA
            </summary>

            <div className="mt-6 space-y-3 text-gray-300 pl-3 border-l-2 border-green/30">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green-400 text-2xl">⭐</span>
                <p className="text-green-400 text-base md:text-lg font-semibold italic">Make America Better: Healthier, Safer, Affordable</p>
              </div>

              <p className="text-gray-400 text-sm mb-4">
                Not a slogan. A standard.
              </p>

              <div className="bg-[#0a1628] rounded-lg p-4 space-y-2">
                <p>✓ A country where healthcare doesn't bankrupt people.</p>
                <p>✓ A country where work provides dignity and opportunity.</p>
                <p>✓ A country where elected officials abide the will of the voters.</p>
                <p>✓ A country where our government serves the People, not the elites.</p>
                <p>✓ A country where solutions are paid for cutting tax breaks for the wealthy.</p>
                <p>✓ A country where public servants are held accountable.</p>
                <p>✓ A country where we rise from the ashes victorious, like the Phoenix.</p>
              </div>

              <p className="text-white font-semibold mt-4">
                That's why we're here. That's what we're building.
              </p>

              <p className="text-gray-400 text-sm italic">
                While others are talking — we're doing the work.
              </p>

              <p className="text-gray-400 text-sm mt-4">
                If this is the country you believe in too, you can support the work at{' '}
                <a
                  href="/donate"
                  className="text-green hover:text-white underline transition-colors"
                >
                  phiers.org/donate
                </a>.
              </p>
            </div>
          </motion.details>

          {/* SECTION: FOR THOSE WHO CAME LOOKING FOR CHANGE */}
          <motion.details
            variants={sectionFade}
            className="group mb-12 bg-[#0a1628]/40 border border-green/20 rounded-lg p-4 max-w-3xl mx-auto"
          >
            <summary className="cursor-pointer text-xl md:text-2xl font-bold text-white mb-2 list-none flex items-center py-2">
              <span className="mr-3 group-open:rotate-90 transition-transform">▶</span>
              For Americans Who Were Promised Change
            </summary>

            <div className="mt-6 space-y-4 text-gray-300 leading-relaxed pl-3 border-l-2 border-amber-600/50">
              <p>
                MAGA promised change.
              </p>

              <p>
                It didn't deliver — because the people making those promises don't have the structure to build it.
              </p>

              <div className="bg-[#0a1628] border border-green-400/20 rounded-lg p-4 my-4">
                <p className="text-white font-semibold text-base">
                  PHIERS is the structure they should have built.
                </p>
              </div>

              <p>
                Not left or right. Not Democrat or Republican.
              </p>

              <p>
                Just organized citizens holding elected officials accountable, and building economic resilience when they won't.
              </p>

              <p className="text-white font-semibold mt-4">
                If you're looking for the real thing — not the slogan, the mechanism — you're in the right place.
              </p>

              <p className="text-green-400 text-sm italic mt-4 bg-green/5 p-3 rounded-lg border border-green/20">
                Your support funds the team that will actually deliver what was promised.
              </p>
            </div>
          </motion.details>

          {/* EARLY CTA - after Shark section */}
          <motion.div variants={sectionFade} className="max-w-md mx-auto text-center my-8">
            <div className="bg-[#0a1628] border border-green/30 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/PHIERS_Logo.png"
                  alt="PHIERS"
                  className="w-20 h-20 object-contain opacity-70"
                />
              </div>
              <p className="text-white text-base font-semibold mb-2">
                You've seen the record.
              </p>
              <p className="text-green text-lg font-bold mb-5">
                Now go on record yourself.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-lg font-bold text-sm transition mb-3 text-center inline-block whitespace-nowrap"
                style={{ backgroundColor: '#3ddc84', color: '#080d1a' }}
              >
                → Ask a Question
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-6 rounded-lg text-xs font-medium border border-green/30 text-green hover:bg-green/10 transition text-center inline-block whitespace-nowrap"
              >
                Sign Up for Updates →
              </a>
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

            {/* FIRST RECORDED VIDEO 2007 - Intro (2007) with Modal */}
            <div className="max-w-2xl mx-auto my-6">
              <div
                className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02] shadow-xl"
                style={{ paddingBottom: '56.25%' }}
                onClick={() => openVideoModal('https://player.vimeo.com/video/11995433?autoplay=1&title=1&byline=1&portrait=1&fullscreen=1', 'First PHIERS recording - 2007')}
              >
                <img
                  src="https://vumbnail.com/11995433.jpg"
                  alt="First PHIERS recording - 2007"
                  className="absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all">
                  <div className="w-16 h-16 rounded-full bg-green/30 border border-green/60 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-xs italic mt-2 text-center">
                The earliest recorded articulation of PHIERS — 2007
              </p>
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

            {/* WHAT THIS MEANS FOR YOU */}
            <div className="mt-8 max-w-2xl mx-auto text-center bg-[#0a1628]/40 p-5 rounded-lg border border-green/20">
              <p className="text-green text-sm font-bold mb-2">What This Means For You</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-2">
                Nothing — unless you choose it.
              </p>
              <p className="text-gray-400 text-xs">
                PHIERS is a tool. Your district. Your leverage. Your call.
              </p>
            </div>

            {/* What We Know Works */}
            <div className="mt-24 mb-8">
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
              Early documentation (2007 thru Covid) – archival, not promotional.  Hundreds more exist.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 justify-items-center max-w-5xl mx-auto px-1">

              {/* A Spiritual Solution to Every Problem - Intro Only (2016) */}
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://www.youtube.com/embed/fWsifllWmnY?autoplay=1', 'A Spiritual Solution to Every Problem - Intro Only')}
                >
                  <img
                    src="https://img.youtube.com/vi/fWsifllWmnY/mqdefault.jpg"
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
                <p className="text-center text-gray-500 text-[10px] mt-1">A Spiritual Solution to Every Problem (2016)</p>
              </div>

              {/* Sizzle Film 2011 */}
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://www.youtube.com/embed/mxDkyFfBnZw?autoplay=1', 'PHIERS Sizzle Film 2011')}
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
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://www.youtube.com/embed/r1_y7MXNt4E?autoplay=1', 'Patriots on PHIERS 2014')}
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
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://www.youtube.com/embed/JWC6ztov2sA?autoplay=1', 'Silos to Synergies 2014')}
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

              {/* PHIERS Early Framework (Vimeo 34036317) */}
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://player.vimeo.com/video/34036317?autoplay=1&title=0&byline=0&portrait=0', 'PHIERS Framework 2011')}
                >
                  <img
                    src="https://vumbnail.com/34036317.jpg"
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
                <p className="text-center text-gray-500 text-[10px] mt-1">PHIERS Framework (c.2011)</p>
              </div>

              {/* PHIERS Strategy (Vimeo 37264685) */}
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://player.vimeo.com/video/37264685?autoplay=1&title=0&byline=0&portrait=0', 'PHIERS Strategy 2012')}
                >
                  <img
                    src="https://vumbnail.com/37264685.jpg"
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
                <p className="text-center text-gray-500 text-[10px] mt-1">PHIERS Strategy (c.2012)</p>
              </div>

              {/* PHIERS Structure (Vimeo 37891922) */}
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://player.vimeo.com/video/37891922?autoplay=1&title=0&byline=0&portrait=0', 'PHIERS Structure 2012')}
                >
                  <img
                    src="https://vumbnail.com/37891922.jpg"
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
                <p className="text-center text-gray-500 text-[10px] mt-1">School-based Solutions (c.2012)</p>
              </div>

              {/* A Bold Counterplan — How to Combat Disaster Capitalism (2015) */}
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto relative">
                {/* Timestamp badge */}
                <div className="absolute top-1 right-1 z-10 bg-black/70 text-green-300 text-[8px] font-mono px-1 py-0.5 rounded shadow-md">
                  2015
                </div>
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://player.vimeo.com/video/241013858?autoplay=1&title=0&byline=0&portrait=0&dnt=1', 'A Bold Counterplan 2015')}
                >
                  <img
                    src="https://vumbnail.com/241013858.jpg"
                    className="absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder-video.jpg';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-500 text-[10px] mt-1">A Bold Counterplan (2015)</p>
                {/* Helpful link to bypass verification screen */}
                <p className="text-center text-[8px] mt-0.5">
                  <a 
                    href="https://vimeo.com/241013858" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-500/70 hover:text-green-400 transition"
                  >
                    Watch on Vimeo →
                  </a>
                </p>
                <p className="text-center text-gray-600 text-[7px] mt-0.5">
                  If Vimeo asks, just click "Continue"
                </p>
              </div>

              {/* Pandemic Video 1 */}
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://www.youtube.com/embed/0CrR7uh9fFk?autoplay=1', 'On Pandemics (1)')}
                >
                  <img
                    src="https://img.youtube.com/vi/0CrR7uh9fFk/mqdefault.jpg"
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
                <p className="text-center text-gray-500 text-[10px] mt-1">Public Health Advocacy & Pandemics (2021)</p>
              </div>

              {/* Pandemic Video 2 */}
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://www.youtube.com/embed/s88nbbiOY-s?autoplay=1', 'On Pandemics (2)')}
                >
                  <img
                    src="https://img.youtube.com/vi/s88nbbiOY-s/mqdefault.jpg"
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
                <p className="text-center text-gray-500 text-[10px] mt-1">A Better Pandemic Response (2022)</p>
              </div>

              {/* Pandemic Video 4 */}
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://www.youtube.com/embed/q0N0n-ET2cM?autoplay=1', 'On Pandemics (4)')}
                >
                  <img
                    src="https://img.youtube.com/vi/q0N0n-ET2cM/mqdefault.jpg"
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
                <p className="text-center text-gray-500 text-[10px] mt-1">Family Matters, Healthcare and YOU (2017)</p>
              </div>

              {/* Pandemic Video 5 */}
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://www.youtube.com/embed/8jXo5-znK4M?autoplay=1', 'On Pandemics (5)')}
                >
                  <img
                    src="https://img.youtube.com/vi/8jXo5-znK4M/mqdefault.jpg"
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
                <p className="text-center text-gray-500 text-[10px] mt-1">Great Minds Think Alike (2018)</p>
              </div>

              {/* Pandemic Video 6 */}
              <div className="w-full max-w-[110px] sm:max-w-[128px] mx-auto">
                <div
                  className="relative cursor-pointer group rounded-lg overflow-hidden bg-black/40 border-2 border-green/40 transition-transform hover:scale-[1.02]"
                  style={{ paddingBottom: '56.25%' }}
                  onClick={() => openVideoModal('https://www.youtube.com/embed/hB3teGHp1ss?autoplay=1', 'On Pandemics (6)')}
                >
                  <img
                    src="https://img.youtube.com/vi/hB3teGHp1ss/mqdefault.jpg"
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
                <p className="text-center text-gray-500 text-[10px] mt-1">A Peaceful Warrior: On Health & Race</p>
              </div>

            </div>
            <p className="text-center text-gray-500 text-xs italic mt-4">
              Hundreds more archival videos document the full journey.
            </p>
          </motion.div>

          {/* CHAPTER MARKER */}
          <div className="h-[1px] w-full bg-green/10 my-10" />

          {/* ========== WHAT WE BUILT FROM PRESSURE - INTEGRATED SYSTEM ========== */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-20 md:mt-24">
            <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
              What We Built From That Pressure
            </h2>

            <div className="mt-8 space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>We learned to think under strain.</p>
              <p>To see danger before it arrived.</p>
              <p>To protect what mattered.</p>
              <p>To adapt when circumstances changed.</p>
              <p>To build when nobody was coming to help.</p>

              <div className="h-4" />

              <p className="text-green-400 font-semibold text-lg">Over time, those experiences taught us something larger.</p>

              <p>Most problems don't exist alone.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="border-l-2 border-green-400/40 pl-4">
                  <p className="text-gray-200">Healthcare affects employment.</p>
                </div>
                <div className="border-l-2 border-green-400/40 pl-4">
                  <p className="text-gray-200">Employment affects housing.</p>
                </div>
                <div className="border-l-2 border-green-400/40 pl-4">
                  <p className="text-gray-200">Housing affects education.</p>
                </div>
                <div className="border-l-2 border-green-400/40 pl-4">
                  <p className="text-gray-200">Education affects opportunity.</p>
                </div>
              </div>

              <p className="text-center text-white text-xl font-semibold my-4">
                Everything is connected.
              </p>

              <p>The challenge isn't finding isolated solutions.</p>
              <p>The challenge is understanding how the systems themselves fit together.</p>

              <div className="bg-[#0a1628]/60 border border-green-400/20 rounded-xl p-6 my-8 text-center">
                <p className="text-green-400 text-2xl font-bold mb-2">That's what PHIERS became.</p>
                <p className="text-gray-300">Not a single program. Not a single issue.</p>
                <p className="text-gray-200 font-semibold mt-2">
                  A framework for understanding how problems connect — and how leverage can be used to solve them.
                </p>
              </div>
            </div>

            {/* That's Where Congress Comes In */}
            <div className="mt-12">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-5">
                That's Where Congress Comes In
              </h3>
              <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                <p>
                  The United States already possesses many of the tools needed to improve the lives of the American people, it just chooses not to.  Things like ending wars, homelessness, hunger and healthcare profiteering and rationing can become a thing of the past. 
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Congress can authorize change.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Congress can remove barriers.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Congress can end corruption.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Congress can put Constituent's interests FIRST.</span>
                  </div>
                </div>
                <p className="text-white font-semibold text-center py-4 border-t border-b border-green-400/20 my-5">
                  The obstacle is rarely a lack of solutions.<br />
                  The obstacle is a lack of political pressure.
                </p>
              </div>
            </div>

            {/* Why 1,500 Matters */}
            <div className="mt-12 bg-gradient-to-r from-green-400/5 to-transparent border-l-4 border-green-400 pl-6 py-5 rounded-r-xl">
              <h3 className="text-green-400 text-2xl md:text-3xl font-bold mb-4">
                Why 1,500 Matters
              </h3>
              <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed">
                <p>A single voter is easy to ignore.</p>
                <p className="font-semibold text-white">An organized district is not.</p>
                <p>
                  When 1,500 verified constituents go on record together, representatives know those voters
                  are paying attention.
                </p>
                <p>
                  When those voters stay organized and engaged, the political calculation changes.
                </p>
                <div className="bg-[#0a1628]/60 rounded-lg p-5 mt-4 text-center">
                  <p className="text-green-400 text-xl font-bold">That's the leverage.</p>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-3 text-gray-400 text-sm">
                    <span>✗ Not violence</span>
                    <span>✗ Not chaos</span>
                    <span>✗ Not partisan warfare</span>
                  </div>
                  <p className="text-white font-semibold mt-3">
                    Organized citizens making it politically costly to ignore them.
                  </p>
                </div>
              </div>
            </div>

            {/* Why It Had To Be Built This Way */}
            <div className="mt-12">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-5">
                Why It Had To Be Built This Way
              </h3>
              <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                <p>
                  PHIERS was never built to become another organization asking people to trust it.
                </p>
                <p className="text-green-400 font-semibold text-xl italic">
                  It was built to help ordinary people create leverage of their own.
                </p>
                <p>
                  Because once people regain leverage, solutions that seemed impossible suddenly become
                  politically possible.
                </p>
                <div className="h-px bg-green-400/20 my-6" />
                <p className="text-white text-xl font-semibold text-center">
                  And that's where the real work begins.
                </p>
              </div>
            </div>

            {/* Spacer before next section */}
            <div className="h-16 md:h-24" />
          </div>

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
                  className="rounded-md border border-green/20 shadow-md max-w-full h-auto"
                />
              </div>
              <p className="text-gray-500 text-xs italic text-center">
                Archived PHIERS.org page — September 22 2011.
              </p>
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-[#0a1628] border border-green/20 rounded-lg">
                  <p className="text-white text-xs font-semibold mb-3">
                    Partnerships that were built (2009–2014):
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

                <div className="p-4 bg-amber-900/20 border border-amber-600/30 rounded-lg">
                  <p className="text-amber-300/80 text-xs font-semibold mb-2">
                    Why they didn't survive:
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    These partnerships worked. They proved the model — coordinated care, direct pharmaceutical pricing, integrated resource access. But they failed for one reason: the moment these organizations understood PHIERS's actual goal — eliminating the profit motive in healthcare — they faced a choice.
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed mt-2">
                    Continue building a system that removes profit from the equation, or return to a system that extracts it.
                  </p>
                  <p className="text-amber-300/80 text-xs font-semibold mt-2">
                    Every partnership chose extraction over elimination.
                  </p>
                  <p className="text-gray-400 text-xs italic mt-2">
                    This is not failure. This is evidence. The profiteers understood what we were building — and they couldn't allow it to scale.
                  </p>
                </div>

                <div className="p-4 bg-amber-900/20 border border-amber-600/30 rounded-lg">
                  <p className="text-amber-300/80 text-xs font-semibold mb-2">
                    2009–2014: Building & Delay
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    SureSafe Pharma (2009) operated on the same principle Mark Cuban would validate 13 years later with Cost Plus Drugs: manufacture and import medications without middleman markups. Direct cost. Massive savings.
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed mt-2">
                    SureSafe's model was contingent on the Panama Free Trade Agreement — signed into law in 2007, but not implemented until 2012. That five-year delay meant we couldn't scale the one partnership that could have proven the pharmaceutical access piece worked at volume.
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed mt-2">
                    If SureSafe had scaled between 2009–2012, the savings to CMS would have been measurable enough to make healthcare-for-all a self-sustaining fiscal reality. Profiteers understood this. The policy delay gave them time to reposition.
                  </p>
                  <p className="text-amber-300/80 text-xs font-semibold mt-2">
                    When Mark Cuban launched Cost Plus Drugs in 2022 — thirteen years later — he proved the model worked. We had already proven it. We just couldn't say it out loud.
                  </p>
                </div>

                <div className="p-4 bg-[#0a1628] border border-green/20 rounded-lg">
                  <p className="text-white text-xs font-semibold mb-2">
                    Why 2014 to 2022 was silent:
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Eight years passed. Not because the model was wrong. Because every institution that had the reach to amplify it had a financial interest in keeping it quiet.
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed mt-2">
                    Hospitals. Insurance companies. Pharmaceutical middlemen. Government agencies tangled with lobbyists. All of them benefit from the current system.
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed mt-2">
                    But silence didn't mean inaction. We developed a spirit of resilience. We kept finding new ways to create value-adding solutions — testing assumptions, building without permission, preparing infrastructure that would eventually become viable when the moment was right.
                  </p>
                  <p className="text-green text-xs font-semibold mt-2">
                    Then costs got so high that even the people profiting from them couldn't defend the system anymore.
                  </p>
                </div>
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

              <p className="text-gray-500 text-xs italic mt-4">
                The point is not retroactive credit. It's that structural pressure recognition, when
                documented publicly and early, eventually becomes its own form of evidence.
              </p>
            </div>
          </motion.details>

          {/* CHAPTER MARKER */}
          <div className="h-[1px] w-full bg-green/10 my-10" />

          {/* IN THE NEWS — teaser + link to /situation */}
          <motion.div variants={sectionFade} className="max-w-2xl mx-auto text-center my-10">
            <p className="text-green text-xs tracking-widest font-mono mb-2">IN THE NEWS</p>
            <p className="text-white text-xl font-bold mb-3">The world is catching up.</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-lg mx-auto">
              Medicaid work requirements. TrumpRx. The Iran war. Screwworm. Congressional walkouts. PHIERS identified every one of these pressure points years ago. We track the news and show you exactly why PHIERS is the proper response.
            </p>
            
              href="/situation"
              className="inline-block bg-[#0a1628] border border-green/40 text-green font-semibold text-sm px-6 py-3 rounded-full hover:border-green hover:text-white transition"
            >
              Read THE SITUATION → Check back often.
            </a>
          </motion.div>

          {/* NEWSLETTER SIGNUP */}
          <motion.div variants={sectionFade} className="max-w-md mx-auto text-center my-8">
            <div className="bg-[#0a1628] border border-green/20 rounded-xl p-6">
              <p className="text-white font-semibold mb-1">Stay informed.</p>
              <p className="text-gray-400 text-sm mb-4">Get THE PHIERS BRIEF — updates on what organized constituents need to know.</p>
              
                href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-2 px-6 rounded-lg text-sm font-semibold border border-green/30 text-green hover:bg-green/10 transition text-center"
              >
                Sign up for updates →
              </a>
            </div>
          </motion.div>

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
                Three different audiences. Three independent validations. One public record.
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

          {/* Petition / Survey CTAs */}
          <motion.div
            variants={sectionFade}
            className="text-center pt-1 pb-2"
          >
            <div className="max-w-md mx-auto bg-[#0a1628] border border-green/30 rounded-lg p-6 mb-6">
              <p className="text-white text-base font-semibold mb-2">
                You've read the record.
              </p>
              <p className="text-green text-lg font-bold mb-5">
                Now go on record yourself.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-lg font-bold text-sm transition mb-3 text-center inline-block whitespace-nowrap"
                style={{ backgroundColor: '#3ddc84', color: '#080d1a' }}
              >
                → Ask a Question
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-6 rounded-lg text-xs font-medium border border-green/30 text-green hover:bg-green/10 transition text-center inline-block whitespace-nowrap"
              >
                Sign Up for Updates →
              </a>
            </div>
          </motion.div>

          {/* Journey-forward CTA */}
          <motion.div
            id="cta"
            variants={sectionFade}
            className="text-center pt-1 pb-6"
          >
            <div className="max-w-md mx-auto bg-[#0a1628] border border-green/20 rounded-lg p-6">
              <p className="text-green text-base font-semibold mb-4">
                You've seen the evidence. Now see what it builds.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                The Credibility page shows you who validated PHIERS and why. The main homepage shows you
                how it works — the mechanism, the leverage, and what happens when 1,500 people in a
                district go on record together.
              </p>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Read that first. Then tell us what questions you still have. Your questions will help us
                build a FAQ that answers what real people actually want to know.
              </p>
              <button
                onClick={() => onOpenTransitionModal?.()}
                className="w-full py-3 px-6 rounded-lg font-bold text-sm transition mb-3 whitespace-nowrap"
                style={{ backgroundColor: '#3ddc84', color: '#080d1a' }}
              >
                → Continue to the main homepage
              </button>
              <button
                onClick={() => onOpenTransitionModal?.()}
                className="w-full py-2 px-6 rounded-lg text-xs font-medium border border-green/30 text-green hover:bg-green/10 transition whitespace-nowrap"
              >
                Sign up for updates →
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile bottom navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-green/20 z-50 py-2 px-4">
          <div className="flex justify-around items-center">
            {[
              { id: '#top', label: 'Top', icon: '↑' },
              { id: '#videos', label: 'Videos', icon: '▶' },
              { id: '#layer2', label: 'About', icon: 'ℹ' },
              { id: '#record', label: 'Record', icon: '📋' },
              { id: '#cta', label: 'Act', icon: '⚡' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => smoothScrollToElement(item.id)}
                className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-green transition-colors py-1 px-3 rounded-lg active:bg-green/10"
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-[10px]">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Shortcut toast */}
        {showShortcutToast && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-2 rounded-full shadow-xl z-50 animate-fadeIn">
            ⌨️ Shortcuts: T=Top, C=Continue, ?=Help
          </div>
        )}
      </>
    )
  }

  // FILE: components/PathosCredibility.tsx (end)