'use client'

// FILE: components/PathosCredibility.tsx
// VERSION: 18.0 – Streamlined Tier 1 Credibility Highlights
// SUMMARY: Removed: MABSHA, Patriotic Homecoming, For Americans, Public Record deep dive, emotional anchors.
// KEPT: Validators, timeline (collapsed), Shark Tank, CTA, 2013 video, three validator videos.
// ADDED: "View the Evidence Archive" button linking to /evidence-archive

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import StatusInterrupt from '@/components/system/StatusInterrupt'
import TransitionModal from '@/components/TransitionModal'

// Type for MediaQueryListEvent
type MediaQueryListEvent = {
  matches: boolean
}

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
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [showShortcutToast, setShowShortcutToast] = useState(false)
  const [showInterrupt, setShowInterrupt] = useState(false)
  const [showTransitionModal, setShowTransitionModal] = useState(false)
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

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches
    }
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const smoothScrollToElement = (elementId: string) => {
    const element = document.querySelector(elementId)
    if (!element) return
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - 80
    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion.current ? 'auto' : 'smooth'
    })
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', elementId)
    }
  }

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
      if (modal && modal.parentNode) {
        document.body.removeChild(modal);
      }
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
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (modal && modal.parentNode) {
          document.body.removeChild(modal);
        }
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
    
    modal.onclick = (e) => {
      if (e.target === modal) {
        if (modal && modal.parentNode) {
          document.body.removeChild(modal);
        }
        document.body.style.overflow = '';
      }
    };
  }

  return (
    <>
      {/* Sticky Banner - Home (restarts journey), Logo, Skip */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/5 py-1 px-4">
        <div className="flex justify-between items-center">
          <Link href="https://phiers.org" className="text-gray-400 text-[10px] sm:text-xs hover:text-white transition">
            Home
          </Link>
          <Link href="https://phiers.org" className="opacity-40 hover:opacity-70 transition">
            <Image
              src="/images/PHIERS_Logo_BW.png"
              alt="PHIERS"
              width={16}
              height={16}
              className="w-3 h-3 sm:w-4 sm:h-4"
            />
          </Link>
          <button
            onClick={() => onOpenTransitionModal?.()}
            className="text-gray-400 text-[10px] sm:text-xs hover:text-white transition"
          >
            Skip
          </button>
        </div>
      </div>

      {showSkipAhead && (
        <div className="fixed bottom-5 right-5 z-50">
          <div className="relative">
            <button
              onClick={() => setShowInterrupt(true)}
              className="bg-[#0f1725]/90 border border-green/20 text-gray-200 text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 pr-6 md:pr-8 rounded-full shadow-lg shadow-green/30 backdrop-blur-sm hover:border-green/40 hover:text-white hover:-translate-y-0.5 hover:shadow-green/40 transition-all duration-300 whitespace-nowrap"
            >
              Continue to Solutions →
            </button>
            <button
              onClick={() => setShowSkipAhead(false)}
              className="absolute -top-2 -right-2 w-5 h-5 md:w-3 md:h-3 rounded-full bg-gray-700/90 border border-gray-500 text-gray-300 hover:bg-red-600/80 hover:border-red-400 hover:text-white transition-all duration-200 flex items-center justify-center text-[10px] md:text-[6px] font-bold"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 h-1/2 w-[2px] bg-green/20 z-30 transition-opacity duration-700" style={{ opacity: showSideMenu ? 1 : 0 }} />
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-3 text-[11px] text-gray-500 z-40 transition-all duration-700" style={{ opacity: showSideMenu ? 1 : 0, transform: showSideMenu ? 'translateY(-50%)' : 'translateY(-45%)' }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); smoothScrollToElement('#top'); }} className="hover:text-green transition-colors">Top</a>
        <a href="#videos" onClick={(e) => { e.preventDefault(); smoothScrollToElement('#videos'); }} className="hover:text-green transition-colors">Validation</a>
        <a href="#timeline" onClick={(e) => { e.preventDefault(); smoothScrollToElement('#timeline'); }} className="hover:text-green transition-colors">Timeline</a>
        <a href="#shark" onClick={(e) => { e.preventDefault(); smoothScrollToElement('#shark'); }} className="hover:text-green transition-colors">Shark Tank</a>
        <a href="#cta" onClick={(e) => { e.preventDefault(); smoothScrollToElement('#cta'); }} className="hover:text-green transition-colors">Next</a>
      </div>

      <motion.div id="top" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }} className="w-full max-w-4xl mx-auto px-3 sm:px-4 pt-2 pb-32 md:pb-6 overflow-x-hidden">
        
        <motion.div variants={sectionFade} className="flex justify-center mb-4">
          <img src="/images/PHIERS_Logo.png" alt="PHIERS" className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-50" />
        </motion.div>

        <motion.div variants={sectionFade} className="text-center px-4 mt-16 md:mt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            What Makes Us Credible
          </h1>
          <p className="text-gray-400 text-base md:text-lg text-center mt-3 leading-relaxed">
            Three independent validators. One public record. Zero hype.
          </p>
        </motion.div>

        <div className="mt-10 md:mt-14"></div>

        <motion.div variants={sectionFade} className="max-w-2xl mx-auto my-12">
          <div className="bg-[#0a1628] rounded-xl p-4 md:p-6 border border-green/25 shadow-2xl shadow-black/60">
            <p className="text-green text-sm font-semibold mb-3 tracking-wide text-center">THE PURPOSE OF PHIERS — 2013</p>
            <div className="relative w-full max-w-2xl mx-auto cursor-pointer group rounded-lg overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]" style={{ paddingBottom: '28.125%' }} onClick={() => openVideoModal('https://player.vimeo.com/video/59460323?autoplay=1&title=0&byline=0&portrait=0', 'Purpose of PHIERS - 2013')}>
              <img src="https://vumbnail.com/59460323.jpg" alt="2013 PHIERS overview video thumbnail" className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-110 transition" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all">
                <svg className="w-12 h-12 text-white drop-shadow-lg group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <p className="text-gray-400 text-xs italic mt-3 text-center">A short, direct overview of PHIERS — healthcare, coordinated care, jobs, and leverage (2013)</p>
          </div>
        </motion.div>

        <motion.div variants={sectionFade} className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-gray-300 text-base leading-relaxed">A reasonable question comes first:</p>
          <p className="text-green text-xl font-semibold italic mt-3">Why should anyone take this seriously?</p>
        </motion.div>

        <div className="h-6" />

        <motion.div variants={sectionFade} className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            Over the last six years, four of the world's most powerful thought leadership accelerators
            and PR firms tried to champion PHIERS. They believed in it enough to stake their reputations
            on it. Sabotage stopped them every time. What you're about to see is what is finally breaking
            through.
          </p>
        </motion.div>

        <div className="h-8" />

        <motion.div variants={sectionFade} className="mb-4">
          <p className="text-green text-xs tracking-widest text-center mb-2 opacity-70">INDEPENDENT VALIDATION</p>
        </motion.div>

        <motion.div id="videos" variants={sectionFade} className="flex flex-col gap-8 mb-12">
          
          <div className="w-full mx-auto bg-[#0a1628] rounded-xl p-4 sm:p-6 md:p-8 border border-green/25 shadow-2xl shadow-black/60">
            <div className="mb-4">
              <p className="text-green text-xl md:text-2xl font-bold mb-1">PATHOS Communications</p>
              <p className="text-gray-400 text-sm">Global PR Firm · London Stock Exchange Listed</p>
            </div>
            <div className="video-aspect-box relative w-full cursor-pointer group rounded-xl overflow-hidden mb-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]" onClick={() => openVideoModal('https://www.youtube.com/embed/KLu7USN_dao?autoplay=1', 'Pathos Communications on PHIERS')}>
              <img src="/images/pathos-thumbnail.jpg" className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-110 transition" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all">
                <svg className="w-12 h-12 text-white drop-shadow-lg group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <p className="text-green text-lg font-semibold italic mb-2">"If you weren't legit, we wouldn't risk our name."</p>
            <p className="text-gray-500 text-xs">Pathos · February 2026</p>
          </div>

          <div className="w-full mx-auto bg-[#0a1628] rounded-xl p-4 sm:p-6 md:p-8 border border-green/25 shadow-2xl shadow-black/60">
            <div className="mb-4">
              <p className="text-green text-2xl md:text-2xl font-bold mb-1">Voices of Accountability</p>
              <p className="text-gray-400 text-base md:text-sm">National Media · Cultural Leadership</p>
            </div>
            <div className="video-aspect-box relative w-full cursor-pointer group rounded-xl overflow-hidden mb-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]" onClick={() => openVideoModal('https://www.youtube.com/embed/qxcRP8lx9dc?autoplay=1', 'Trusted Voices on PHIERS')}>
              <img src="/images/BigC_ THUMBNAIL_w_Karen_Trevor_n_Ralph.jpg" className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-110 transition" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all">
                <svg className="w-12 h-12 text-white drop-shadow-lg group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <p className="text-green text-xl md:text-lg font-semibold italic mb-2">"This isn't left or right. This is people trying to survive."</p>
            <p className="text-gray-500 text-sm md:text-xs">Curry, Nader, Noah, Hunter · May 2026</p>
          </div>

          <div className="w-full mx-auto bg-[#0a1628] rounded-xl p-4 sm:p-6 md:p-8 border border-green/25 shadow-2xl shadow-black/60">
            <div className="mb-4">
              <p className="text-green text-2xl md:text-2xl font-bold mb-1">DotCom Magazine</p>
              <p className="text-gray-400 text-base md:text-sm">Entrepreneur Spotlight · National Media</p>
            </div>
            <div className="video-aspect-box relative w-full cursor-pointer group rounded-xl overflow-hidden mb-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]" onClick={() => openVideoModal('https://www.youtube.com/embed/pUdlWukaLLY?autoplay=1', 'DotCom Magazine Interview')}>
              <img src="/images/dotcom-thumbnail.jpg" className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-110 transition" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all">
                <svg className="w-12 h-12 text-white drop-shadow-lg group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <p className="text-green text-xl md:text-lg font-semibold italic mb-2">"A serious, credible framework."</p>
            <p className="text-gray-500 text-sm md:text-xs">DotCom Magazine · July 2022</p>
          </div>
        </motion.div>

        <section id="timeline" className="w-full max-w-4xl mx-auto px-6 mt-12 md:mt-16">
          <div className="text-center mb-4">
            <p className="text-green text-sm font-mono tracking-wider">THE RECORD</p>
            <p className="text-gray-500 text-[11px]">22 years of documented public record</p>
          </div>
          <details className="group border border-green/20 rounded-lg bg-[#0a1628]/40 overflow-hidden">
            <summary className="cursor-pointer list-none p-6">
              <div className="flex items-center justify-between mb-6">
                <p className="text-white font-semibold">View Full Timeline</p>
                <span className="text-green transition-transform duration-300 group-open:rotate-90">▶</span>
              </div>
              <div className="overflow-x-auto pb-2">
                <div className="min-w-full sm:min-w-[700px] flex items-center justify-between relative">
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-green/20" />
                  {['2004', '2007', '2009', '2011', '2013', '2014', '2022', '2026', 'Now'].map((year) => (
                    <div key={year} className="relative flex flex-col items-center z-10">
                      <div className="w-4 h-4 rounded-full bg-green border-2 border-[#0a1628]" />
                      <span className="text-[11px] text-gray-400 mt-2">{year}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-500 text-xs italic mt-5 text-center">22 years of public documentation. Click to expand.</p>
            </summary>
            <div className="px-6 pb-6 border-t border-green/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3"><span className="text-green text-sm font-bold w-12">2004</span><span className="text-gray-300 text-sm">Earliest documented PHIERS record</span></div>
                  <div className="flex items-start gap-3"><span className="text-green text-sm font-bold w-12">2007</span><span className="text-gray-300 text-sm">First recorded video — PHIERS documented framework</span></div>
                  <div className="flex items-start gap-3"><span className="text-green text-sm font-bold w-12">2009</span><span className="text-gray-300 text-sm">PHIERS.org partners with SureSafe Pharma</span></div>
                  <div className="flex items-start gap-3"><span className="text-green text-sm font-bold w-12">2011</span><span className="text-gray-300 text-sm">Archived platform snapshot — health reform coalition</span></div>
                  <div className="flex items-start gap-3"><span className="text-green text-sm font-bold w-12">2013</span><span className="text-gray-300 text-sm">First comprehensive articulation of PHIERS mission</span></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3"><span className="text-green text-sm font-bold w-12">2014</span><span className="text-gray-300 text-sm">Operational proposals, named partnerships, dated documents</span></div>
                  <div className="flex items-start gap-3"><span className="text-green text-sm font-bold w-12">2022</span><span className="text-gray-300 text-sm">DotCom Magazine Entrepreneur Spotlight</span></div>
                  <div className="flex items-start gap-3"><span className="text-green text-sm font-bold w-12">2026</span><span className="text-gray-300 text-sm">Pathos Communications — London Stock Exchange listed</span></div>
                  <div className="flex items-start gap-3"><span className="text-green text-sm font-bold w-12">2026</span><span className="text-gray-300 text-sm">BigC interview — framework discussed</span></div>
                  <div className="flex items-start gap-3"><span className="text-green text-sm font-bold w-12">Now</span><span className="text-gray-300 text-sm">District organizing model — active</span></div>
                </div>
              </div>
            </div>
          </details>
        </section>

        <div className="mt-12 md:mt-16"></div>

        <motion.details id="shark" variants={sectionFade} className="group mb-8 bg-[#0a1628]/40 border border-green/20 rounded-lg p-4">
          <summary className="cursor-pointer text-xl md:text-2xl font-bold text-green mb-2 list-none flex items-center py-2">
            <span className="mr-3 group-open:rotate-90 transition-transform">▶</span>
            Shark Tank Connection — Why This Matters Now
          </summary>
          <div className="mt-2 text-gray-400 text-sm mb-4">Pathos. DotCom. Kevin Harrington. Kevin O'Leary. Mark Cuban. All roads lead here.</div>
          <div className="mt-4 space-y-6 relative pl-3 border-l-2 border-green/20">
            <div className="flex flex-col items-center gap-6 max-w-xs sm:max-w-sm mx-auto w-full">
              <div className="text-center w-full">
                <img src="/images/Mark_Cuban_Disrupts_Drug_Pricing.jpg" alt="Mark Cuban" className="w-full rounded-lg border border-green/30" />
                <p className="text-gray-400 text-[10px] md:text-xs mt-1">Mark Cuban · Cost Plus Drugs</p>
              </div>
              <div className="text-center w-full">
                <img src="/images/Kevin_O_Leary_DotComMag.jpg" alt="Kevin O'Leary" className="w-full rounded-lg border border-green/30" />
                <p className="text-gray-400 text-[10px] md:text-xs mt-1">Kevin O'Leary · Original Shark · DotCom Magazine</p>
              </div>
              <div className="text-center w-full">
                <img src="/images/Kevin_Harrington_Pathos.jpg" alt="Kevin Harrington" className="w-full rounded-lg border border-green/30" />
                <p className="text-gray-400 text-[10px] md:text-xs mt-1">Kevin Harrington · Original Shark · Pathos Communications</p>
              </div>
            </div>
          </div>
        </motion.details>

        {/* Grand Tuhon Video - inserted before "You've seen the record" */}
        <motion.div variants={sectionFade} className="max-w-2xl mx-auto my-12">
          <div className="bg-[#0a1628] rounded-xl p-4 md:p-6 border border-green/30 shadow-xl shadow-green/5">
            <div className="text-center mb-4">
              <span className="text-[10px] font-mono bg-green/10 text-green px-2 py-0.5 rounded border border-green/20 uppercase tracking-widest">Spiritual & Tactical Validation</span>
              <h2 className="text-xl font-bold text-white mt-2">The Grand Tuhon Supremo Blessing</h2>
            </div>
            <div
              className="relative aspect-video max-w-2xl mx-auto cursor-pointer group rounded-lg overflow-hidden border border-black shadow-inner"
              onClick={() => openVideoModal('https://www.youtube.com/embed/hB3teGHp1ss?autoplay=1', 'Grand Tuhon Supremo Blessing & PHIERSale Blueprint')}
            >
              <img src="https://img.youtube.com/vi/hB3teGHp1ss/maxresdefault.jpg" alt="Grand Tuhon Supremo" className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition duration-300" onError={(e)=>{e.currentTarget.src='https://img.youtube.com/vi/hB3teGHp1ss/mqdefault.jpg'}} />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20">
                <div className="text-white text-5xl font-bold drop-shadow-lg group-hover:scale-110 transition-transform animate-pulse">▶</div>
              </div>
            </div>
            <div className="mt-4 space-y-3 text-xs md:text-sm text-gray-300 px-2 leading-relaxed">
              <p>
                <strong className="text-green">The Blessing & The Laws of Nature:</strong> Grand Tuhon Supremo gives PHIERS his blessing because the system works the same way nature works — straight lines, no tricks, no shortcuts. When something is built clean, it balances out the dirty parts of the world automatically.
              </p>
              <p className="italic text-gray-400 border-l border-green/40 pl-3 text-xs">
                This document ties together what people have been doing for generations: standing up in the streets, calling out racism for what it is, and building real solutions that actually help families. And at the end, it shows something nobody saw coming — a simple way for whole groups to get cheaper prescription drugs, the same way big companies already do.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={sectionFade} className="max-w-md mx-auto text-center my-8">
          <div className="bg-[#0a1628] border border-green/30 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <img src="/images/PHIERS_Logo.png" alt="PHIERS" className="w-20 h-20 object-contain opacity-70" />
            </div>
            <p className="text-white text-base font-semibold mb-2">You've seen the record.</p>
            <p className="text-green text-lg font-bold mb-5">Now go on record yourself.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-6 rounded-lg font-bold text-sm transition mb-3 text-center inline-block whitespace-nowrap" style={{ backgroundColor: '#3ddc84', color: '#080d1a' }}>→ Ask a Question</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" className="w-full py-2 px-6 rounded-lg text-xs font-medium border border-green/30 text-green hover:bg-green/10 transition text-center inline-block whitespace-nowrap">Sign Up for Updates →</a>
          </div>
        </motion.div>

        {/* Self-funded / Donate ask */}
        <motion.div variants={sectionFade} className="max-w-md mx-auto text-center my-8">
          <div className="bg-[#0a1628] border border-green/30 rounded-lg p-6">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              PHIERS has been entirely self‑funded from day one — no donor influence, no financial obligations to anyone but the membership. That independence is also why progress has been slow. If you believe in what PHIERS is building, you can help carry it forward.
            </p>
            <a
              href="https://www.phiers.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0a1628] border border-green/40 text-green font-semibold text-sm px-6 py-3 rounded-full hover:border-green hover:text-white transition"
            >
              → Support PHIERS
            </a>
          </div>
        </motion.div>

        <motion.div id="cta" variants={sectionFade} className="text-center pt-1 pb-6">
          <div className="max-w-md mx-auto bg-[#0a1628] border border-green/20 rounded-lg p-6">
            <p className="text-green text-base font-semibold mb-4">You've seen the evidence. Now see what it builds.</p>
            <button onClick={() => setShowInterrupt(true)} className="w-full py-3 px-6 rounded-lg font-bold text-sm transition mb-3 whitespace-nowrap" style={{ backgroundColor: '#3ddc84', color: '#080d1a' }}>→ Continue to the main homepage</button>
          </div>
        </motion.div>
      </motion.div>

      {showShortcutToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-2 rounded-full shadow-xl z-50 animate-fadeIn">
          ⌨️ Shortcuts: T=Top, C=Continue, ?=Help
        </div>
      )}

      {showInterrupt && (
        <StatusInterrupt
          onComplete={() => {
            setShowInterrupt(false)
            setShowTransitionModal(true)
          }}
        />
      )}

      {showTransitionModal && (
        <TransitionModal
          onShowFramework={() => {
            window.location.href = '/the-system'
          }}
          onSkipVideo={() => {
            setShowTransitionModal(false)
          }}
          onSignPetition={() => {
            window.open('https://forms.gle/WrpNNbwdGQG7Ton47', '_blank')
          }}
        />
      )}
    </>
  )
}

// FILE: components/PathosCredibility.tsx (end)