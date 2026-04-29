// FILE: components/MainHomePage.tsx
// VERSION: 7.0.3 – added PHIERS logo at top of main content

'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import JumpToFooter from '@/components/JumpToFooter'

// Helper component for video cards (used inside modal)
function VideoCard({ id, title }: { id: string; title: string }) {
  return (
    <div className="bg-bg-card/80 rounded-xl border border-green/20 overflow-hidden hover:border-green/50 transition-all">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src={`https://www.youtube.com/embed/${id}?rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <div className="p-2 text-center">
        <p className="text-gray-300 text-sm font-medium">{title}</p>
      </div>
    </div>
  )
}

export default function MainHomePage() {
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showArchitectModal, setShowArchitectModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const prefersReducedMotionRef = useRef(false)

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const closeModal = useCallback(() => {
    setModalImageSrc(null)
    document.body.style.overflow = ''
    if (previousFocusRef.current) {
      previousFocusRef.current.focus()
      previousFocusRef.current = null
    }
  }, [])

  const openModal = useCallback((src: string) => {
    previousFocusRef.current = document.activeElement as HTMLElement
    setModalImageSrc(src)
    document.body.style.overflow = 'hidden'
  }, [])

  useEffect(() => {
    if (!modalImageSrc) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    if (modalRef.current) modalRef.current.focus()
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalImageSrc, closeModal])

  useEffect(() => {
    if (!modalImageSrc || !modalRef.current) return
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }
    window.addEventListener('keydown', handleTab)
    return () => window.removeEventListener('keydown', handleTab)
  }, [modalImageSrc])

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detect reduced motion preference
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => { prefersReducedMotionRef.current = media.matches }
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotionRef.current ? 'auto' : 'smooth' })
  }, [])

  const scrollToMechanism = useCallback(() => {
    document.getElementById('mechanism')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const makeKeyboardClickable = (handler: () => void) => {
    return (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handler()
      }
    }
  }

  return (
    <div className="min-h-screen">
      <div className="bg-amber-600 text-black text-center py-2 text-sm font-bold">
        🚧 Site under construction – <Link href="/join" className="underline font-extrabold">Join us → now hiring</Link>
      </div>

      <AnimatePresence>
        {modalImageSrc && (
          <motion.div
            ref={modalRef}
            id="image-modal-container"
            className="fixed inset-0 bg-black z-[99999] flex items-center justify-center outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
            aria-label="Image enlarged view"
          >
            <div className="relative w-screen h-screen flex items-center justify-center cursor-pointer">
              <Image
                src={modalImageSrc}
                alt="Enlarged view"
                width={1920}
                height={1080}
                className="w-full h-auto max-h-screen object-contain"
                sizes="100vw"
                onError={(e) => console.error('Modal image failed to load:', modalImageSrc)}
              />
              <p className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-sm">
                Click anywhere or press Escape to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />

      <main className="font-sans pt-20 md:pt-0">
        {/* PHIERS Logo at the top of the main content */}
        <div className="flex justify-center mt-4 mb-6">
          <Image
            src="/images/PHIERS_Logo.png"
            alt="PHIERS – Power Held In Every Representative's Seat"
            width={160}
            height={160}
            className="w-32 sm:w-40 md:w-48 h-auto"
            priority
          />
        </div>

        {/* HERO */}
        <section className="container text-center pt-8 md:pt-12 pb-4">
          <h1 className="mb-8 md:mb-10 text-center">
            <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              CONGRESS CAN FIX MOST OF WHAT'S BROKEN.
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl font-bold text-green mt-2 leading-tight">
              IT JUST DOESN'T HAVE TO.
            </span>
          </h1>
          <div className="max-w-[760px] mx-auto mt-4">
            <p className="text-white text-lg md:text-xl font-semibold mb-2">Alone, you're easy to ignore.</p>
            <p className="text-green text-base md:text-lg font-medium mb-4">1,500 people in your congressional district are not.</p>
            <p className="text-gray-300 text-base mb-2">We don't ask Congress to care.</p>
            <p className="text-gray-300 text-base mb-4">
              We make ignoring constituents <span className="text-green font-semibold">politically costly</span>.
            </p>
            <p className="text-white text-lg font-bold mt-2">That's the leverage.</p>
          </div>

          {/* Two intro videos – stacked on mobile, side by side on larger screens */}
          <div className="max-w-4xl mx-auto mt-8 mb-6 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <div className="relative pb-[40%] sm:pb-[56.25%] h-0 overflow-hidden rounded-lg border border-green/20 shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/SFW9fhUBEwE?rel=0"
                    title="PHIERS – The Movement That Forces Congress to Respond"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
                <p className="text-center text-gray-400 text-xs sm:text-sm mt-1">How leverage works</p>
              </div>
              <div>
                <div className="relative pb-[40%] sm:pb-[56.25%] h-0 overflow-hidden rounded-lg border border-green/20 shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/ihTa_2CLmvk?rel=0"
                    title="Short Intro to PHIERS"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
                <p className="text-center text-gray-400 text-xs sm:text-sm mt-1">The PHIERS framework</p>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4 animate-pulse">
              ↓ Scroll down for the full vision ↓
            </p>
          </div>

          {/* WAR / LEVERAGE / 1,500 / RECALL BLOCK */}
          <div className="max-w-3xl mx-auto mt-8 p-6 bg-red-500/10 border border-red-500/30 rounded-xl text-center">
            <p className="text-white text-2xl md:text-3xl font-bold mb-2">Congress can end the wars. Right now.</p>
            <p className="text-gray-300 text-base mb-2">They have the power. They’ve always had it.</p>
            <p className="text-green text-xl font-bold mb-3">They just don’t have the pressure.</p>
            <p className="text-gray-300 text-base mb-2">That’s where leverage comes in.</p>
            <p className="text-white text-lg font-semibold mb-2">1,500 people in your district – on record – forces their hand.</p>
            <p className="text-green text-xl font-bold mb-3">That’s the tipping point.</p>
            <p className="text-gray-300 text-base mb-2">If they don’t end the wars immediately,<br />we primary or replace them before July 4th – Independence Day.</p>
            <p className="text-white text-lg font-bold mt-2">That’s how we make Congress do its job.</p>
          </div>

          {/* Why 1,500 Matters */}
          <div className="max-w-3xl mx-auto mt-8 p-6 bg-bg-card border border-green/20 rounded-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Why 1,500 Matters</h3>
            <p className="text-gray-300 text-base mb-3">
              Congress doesn't respond to national percentages — it responds to pressure inside each district.
            </p>
            <p className="text-gray-500 text-xs mt-2">— Ralph Nader, proven in civic campaigns</p>
            <p className="text-gray-300 text-base mb-3">
              When 1,500 people in a district go on record with the same demand,
              the representative is <span className="text-green font-semibold">forced to respond publicly</span> — or <span className="text-green font-semibold">risks losing their seat</span>.
            </p>
            <p className="text-gray-300 text-base">That's the leverage PHIERS organizes.</p>

            <div
              className="my-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
              onClick={() => openModal('/images/District_Accountability_Dashboard.jpg')}
              onKeyDown={makeKeyboardClickable(() => openModal('/images/District_Accountability_Dashboard.jpg'))}
              role="button"
              tabIndex={0}
              aria-label="Enlarge dashboard image"
            >
              <Image
                src="/images/District_Accountability_Dashboard.jpg"
                alt="District Accountability Dashboard"
                width={600}
                height={400}
                className="mx-auto rounded-lg border border-green/20"
                sizes="(max-width: 768px) 90vw, 600px"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
              />
            </div>
          </div>

          <div className="max-w-[600px] mx-auto mt-8">
            <p className="text-white text-lg font-bold mb-2">You've seen the reality.</p>
            <p className="text-gray-300 text-base mb-4">This is where it becomes real.</p>
            <div className="flex flex-col md:flex-row gap-3 justify-center max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>✍ SIGN THE PETITION</Button>
              <Button href="/homepage-teeth" variant="secondary" fullWidth>🤝 SEE HOW IT WORKS</Button>
            </div>
            <p className="text-gray-400 text-sm mt-2">Your district. Your number. On record.</p>
          </div>
        </section>

        {/* THE MECHANISM */}
        <section id="mechanism" className="container section scroll-mt-24 mb-12">
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-green mb-3">THE MECHANISM</h2>
            <p className="text-gray-300 text-base mb-3">Congress doesn't respond to opinion.</p>
            <p className="text-gray-300 text-base mb-4">Congress responds to pressure it can't ignore.</p>
            <p className="text-white text-lg font-semibold mb-3">Pressure becomes unavoidable when:</p>
            <div className="bg-green-glow border border-green/20 rounded-xl p-6 my-4">
              <p className="text-green text-xl font-bold">Savings create growth.</p>
              <p className="text-green text-xl font-bold my-2">Growth creates pressure.</p>
              <p className="text-green text-xl font-bold">Pressure creates results.</p>
            </div>
            <p className="text-white text-lg font-bold mt-2">That's the engine.</p>
          </div>
          <div className="flex justify-center mt-8">
            <div
              className="w-[45%] cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
              onClick={() => openModal('/images/PHIERS_Tablet__Firewall.png')}
              onKeyDown={makeKeyboardClickable(() => openModal('/images/PHIERS_Tablet__Firewall.png'))}
              role="button"
              tabIndex={0}
              aria-label="Enlarge PHIERS mechanism image"
            >
              <Image
                src="/images/PHIERS_Tablet__Firewall.png"
                alt="PHIERS mechanism"
                width={500}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 768px) 90vw, 500px"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
              />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* HOW IT WORKS */}
        <section className="container section">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-6">HOW IT WORKS</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <div><p className="text-white text-lg font-bold">1. You go on record</p><p className="text-gray-400 text-sm">Not "I agree." You're counted.</p></div>
              <div><p className="text-white text-lg font-bold mt-3">2. We organize by congressional district</p><p className="text-gray-400 text-sm">Not noise — numbers. Not vibes — leverage.</p></div>
              <div><p className="text-white text-lg font-bold mt-3">3. Representatives are forced to respond publicly</p><p className="text-gray-400 text-sm">Or face primary challenge or replacement.</p></div>
              <div><p className="text-white text-lg font-bold mt-3">4. Congress acts — or gets replaced</p><p className="text-gray-400 text-sm">Not later. Now. Before the next election.</p></div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-full md:w-[80%] bg-bg-card rounded-xl border border-green/20 p-4 text-center">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/xEA5zVium58?rel=0"
                    title="How district‑level organization works"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-gray-400 text-xs mt-2">How district‑level organization works</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHY 1,500 PEOPLE MATTER */}
        <section className="container section">
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHY 1,500 PEOPLE MATTER</h2>
            <p className="text-green text-xl font-semibold mb-3">1,500 people in one congressional district is the tipping point.</p>
            <p className="text-gray-300 text-base mb-2">Not millions. Not a national wave.</p>
            <p className="text-gray-300 text-base mb-2">Just enough people — in the right place — at the same time.</p>
            <p className="text-gray-300 text-base mb-3">Because it's not about size. It's about placement.</p>
            <p className="text-white text-lg font-bold">It turns attention into leverage.</p>
          </div>
          <div className="flex justify-center mt-8">
            <div
              className="w-[45%] cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
              onClick={() => openModal('/images/This_is_what_leverage_looks_like.jpg')}
              onKeyDown={makeKeyboardClickable(() => openModal('/images/This_is_what_leverage_looks_like.jpg'))}
              role="button"
              tabIndex={0}
              aria-label="Enlarge leverage visual"
            >
              <Image
                src="/images/This_is_what_leverage_looks_like.jpg"
                alt="Leverage visual"
                width={800}
                height={500}
                className="w-full h-auto rounded-lg border border-green/20"
                sizes="(max-width: 768px) 90vw, 800px"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
              />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* MID-PAGE ACTION */}
        <section className="container py-8 text-center">
          <div className="max-w-[600px] mx-auto bg-bg-card border border-green/20 rounded-xl p-6">
            <p className="text-white text-lg font-bold mb-2">If your district reaches 1,500, your representative has to respond.</p>
            <p className="text-gray-300 text-base mb-4">Or they risk losing their seat.</p>
            <Button href="/petition" variant="primary" fullWidth>✍ BE COUNTED</Button>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* ECONOMIC ENGINE */}
        <section className="container section">
          <div className="max-w-[760px] mx-auto">
            <div className="text-center mb-6"><span className="text-green text-sm font-condensed font-bold tracking-wider">THE ECONOMIC ENGINE</span></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 text-base mb-3">Right now, the country spends $8,000–$10,000 per person each year on healthcare.</p>
                <p className="text-gray-300 text-base mb-3">But most of the care people actually use — at a fraction of the cost — can be delivered for about $600 through telehealth.</p>
                <p className="text-gray-300 text-base mb-3">That gap represents <span className="text-green font-semibold">trillions in potential savings</span>.</p>
                <p className="text-green text-xl font-bold mt-2">That's not a theory. That's math.</p>
              </div>
              <div className="flex justify-center">
                <div
                  className="w-[80%] md:w-[90%] cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
                  onClick={() => openModal('/images/80-20_Healthcare_Model_-PHIERS_v_Insurance_Cost.jpg')}
                  onKeyDown={makeKeyboardClickable(() => openModal('/images/80-20_Healthcare_Model_-PHIERS_v_Insurance_Cost.jpg'))}
                  role="button"
                  tabIndex={0}
                  aria-label="Enlarge cost comparison image"
                >
                  <Image
                    src="/images/80-20_Healthcare_Model_-PHIERS_v_Insurance_Cost.jpg"
                    alt="Cost comparison"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 90vw, 500px"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* THE CASCADE */}
        <section className="container section">
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">THE CASCADE</h2>
            <p className="text-gray-300 text-base mb-2">One person switching creates enough savings to cover 12 more.</p>
            <p className="text-gray-300 text-base mb-3">Then it compounds:</p>
            <p className="text-green text-lg font-mono font-bold mb-4 break-words">1 → 12 → 148 → 1,825 → 22,000 → 260,000 → 3.1M → 37M → 450M</p>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4 my-4"><p className="text-white font-mono text-lg">In nine rounds: • 234 million people covered • 8–13 months</p></div>
            <p className="text-green text-lg font-bold mb-3">Not a promise. Math.</p>
            <p className="text-gray-300 text-base">It works because savings fund the next layer.</p>
          </div>
          <div className="flex justify-center mt-8">
            <div
              className="w-[55%] cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
              onClick={() => openModal('/images/Cascade_Math.jpg')}
              onKeyDown={makeKeyboardClickable(() => openModal('/images/Cascade_Math.jpg'))}
              role="button"
              tabIndex={0}
              aria-label="Enlarge cascade math diagram"
            >
              <Image
                src="/images/Cascade_Math.jpg"
                alt="Cascade math"
                width={600}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 768px) 90vw, 600px"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
              />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        <div className="flex justify-center mt-8 mb-8">
          <div
            className="w-[70%] md:w-[45%] max-w-[600px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
            onClick={() => openModal('/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg')}
            onKeyDown={makeKeyboardClickable(() => openModal('/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg'))}
            role="button"
            tabIndex={0}
            aria-label="Enlarge hero image"
          >
            <Image
              src="/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg"
              alt="Congress Ignores You"
              width={954}
              height={648}
              priority
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 90vw, 600px"
              onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
            />
          </div>
        </div>

        {/* THREE KINDS OF POWER */}
        <section className="container section">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">THREE KINDS OF POWER</h2>
            <p className="text-gray-300 text-lg">Three ways this changes things — all at once.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            <div className="bg-bg-card border border-green/20 rounded-xl p-6 h-full border-t-4 border-t-red-500">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-display text-2xl text-white mb-1">Political Power</div>
              <p className="text-gray-400 text-sm">1,500 constituents on the record forces a choice: act, or face replacement.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-6 h-full border-t-4 border-t-yellow-400">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-display text-2xl text-white mb-1">Economic Power</div>
              <p className="text-gray-400 text-sm">We're already spending the money — it's just being wasted. Redirecting it changes outcomes.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-6 h-full border-t-4 border-t-green">
              <div className="text-3xl mb-2">🛒</div>
              <div className="font-display text-2xl text-white mb-1">Market Power</div>
              <p className="text-gray-400 text-sm">People buying together can get the basics — groceries, medicine, everyday essentials — at cost, without middlemen driving up prices.</p>
            </div>
          </div>
          <p className="font-condensed text-xl text-green font-bold text-center">None of this works alone. It works when people move together.</p>
        </section>

        <hr className="border-green/20" />

        {/* WHY THIS BECOMES UNSTOPPABLE */}
        <section className="container section">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHY THIS BECOMES UNSTOPPABLE</h2>
              <p className="text-gray-300 text-base mb-3">Once ~12 million people (~3.5%) are organized by congressional district:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                <li>The system funds itself</li>
                <li>Growth accelerates</li>
                <li>Pressure compounds</li>
                <li><span className="text-green font-semibold">Political resistance becomes harder to sustain</span></li>
              </ul>
              <p className="text-gray-300 text-base mb-2">No donations. No wealthy backers. No corporate strings.</p>
              <p className="text-green text-lg font-bold">Just math.</p>
              <p className="text-gray-300 text-base mt-2">The same math that reduces costs is what powers the system.</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div
                className="w-[80%] md:w-[90%] cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
                onClick={() => openModal('/images/3.5pct_Erica_Chenoweth.jpg')}
                onKeyDown={makeKeyboardClickable(() => openModal('/images/3.5pct_Erica_Chenoweth.jpg'))}
                role="button"
                tabIndex={0}
                aria-label="Enlarge 3.5% threshold image"
              >
                <Image
                  src="/images/3.5pct_Erica_Chenoweth.jpg"
                  alt="3.5% threshold"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 90vw, 400px"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHY AFFORDABILITY = LEVERAGE */}
        <section className="container section">
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHY AFFORDABILITY = LEVERAGE</h2>
            <p className="text-gray-300 text-base mb-3">Affordability isn't a side benefit. It's the power source.</p>
            <p className="text-gray-300 text-base mb-3">When people can afford their lives again, they gain:</p>
            <div className="flex flex-wrap justify-center gap-6 my-4">
              <span className="bg-green-glow px-4 py-2 rounded-full text-white font-bold">Stability</span>
              <span className="bg-green-glow px-4 py-2 rounded-full text-white font-bold">Time</span>
              <span className="bg-green-glow px-4 py-2 rounded-full text-white font-bold">Capacity</span>
              <span className="bg-green-glow px-4 py-2 rounded-full text-white font-bold">Staying power</span>
            </div>
            <p className="text-gray-300 text-base mb-3">And staying power is what makes pressure durable.</p>
            <p className="text-green text-xl font-bold my-4">Affordability → capacity → sustained pressure → response.</p>
            <p className="text-white text-lg font-bold">That's leverage.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* REALITY ANCHOR */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <div className="max-w-[760px] mx-auto">
              <span className="text-green text-sm font-condensed font-bold tracking-wider">🧠 REALITY ANCHOR</span>
              <p className="text-white text-xl font-bold mt-2">This isn't hypothetical.</p>
              <p className="text-gray-300 text-base mt-2">
                Congress already has the power to fix most of what's broken.
                That changes when enough people move from <span className="text-green font-semibold">"I agree"</span> → <span className="text-green font-semibold">"I'm on record."</span>
              </p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHAT THIS UNLOCKS */}
        <section className="container section">
          <div className="text-center max-w-[760px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">WHAT THIS UNLOCKS</h2>
            <p className="text-gray-300 text-base mb-4">The same leverage that can end wars can also be used to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 text-left max-w-md mx-auto">
              <li>End policies people never voted for</li>
              <li>Force public accountability from representatives</li>
              <li>Protect access to healthcare and basic needs</li>
              <li>Ensure decisions reflect the people they represent</li>
            </ul>
            <p className="text-green text-xl font-bold">Power Held In Every Representative's Seat.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHY THIS WORKS – logos only */}
        <section className="container section">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHY THIS WORKS</h2>
            <p className="text-gray-300 text-base max-w-[760px] mx-auto">
              Research on civic movements — including work by Erica Chenoweth — shows: When participation reaches a critical threshold, systems respond.
            </p>
          </div>
          <div className="max-w-[900px] mx-auto">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
                <p className="text-white font-bold">Telehealth cost models</p>
                <p className="text-gray-400 text-sm">Operating today</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
                <p className="text-white font-bold">Direct‑to‑consumer pharma</p>
                <p className="text-gray-400 text-sm">No middlemen</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center">
                <p className="text-white font-bold">Coordinated civic pressure</p>
                <p className="text-gray-400 text-sm">Documented responses</p>
              </div>
            </div>
            <p className="text-gray-300 text-base text-center italic mb-6">
              They weren't built together. They arrived at the same conclusions independently. That's what makes this credible.
            </p>

            <div className="space-y-4 text-left">
              <div className="bg-bg-card/60 rounded-xl p-4 border-l-4 border-green">
                <p className="text-white font-bold">DotCom Magazine</p>
                <p className="text-gray-400 text-sm">Associated with Kevin O'Leary (original Shark). Independently interviewed Will Price in 2022 after their team evaluated the model as serious enough for national attention.</p>
              </div>
              <div className="bg-bg-card/60 rounded-xl p-4 border-l-4 border-green">
                <p className="text-white font-bold">Mark Cuban's Cost Plus Drugs</p>
                <p className="text-gray-400 text-sm">Independently built what PHIERS designed in 2009: direct-to-consumer pharmaceuticals at cost, no middlemen. It works. Seven million customers. The model is proven.</p>
              </div>
              <div className="bg-bg-card/60 rounded-xl p-4 border-l-4 border-green">
                <p className="text-white font-bold">Congressional support since 2009</p>
                <p className="text-gray-400 text-sm">Before telehealth was mainstream. Before Cost Plus existed. The framework was right then. The moment is now.</p>
              </div>
            </div>
          </div>

          {/* Logo row */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div
              className="w-24 h-auto opacity-70 grayscale cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
              onClick={() => openModal('/images/Harvard_Logo.png')}
              onKeyDown={makeKeyboardClickable(() => openModal('/images/Harvard_Logo.png'))}
              role="button"
              tabIndex={0}
              aria-label="Enlarge Harvard logo"
            >
              <Image
                src="/images/Harvard_Logo.png"
                alt="Harvard University logo"
                width={100}
                height={40}
                className="w-full h-auto"
                sizes="100px"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
              />
            </div>
            <div
              className="w-24 h-auto opacity-70 grayscale cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
              onClick={() => openModal('/images/Mark_Cuban_Cost_Plus_Drug.png')}
              onKeyDown={makeKeyboardClickable(() => openModal('/images/Mark_Cuban_Cost_Plus_Drug.png'))}
              role="button"
              tabIndex={0}
              aria-label="Enlarge Cost Plus Drugs logo"
            >
              <Image
                src="/images/Mark_Cuban_Cost_Plus_Drug.png"
                alt="Mark Cuban Cost Plus Drugs logo"
                width={100}
                height={40}
                className="w-full h-auto"
                sizes="100px"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
              />
            </div>
            <div
              className="w-24 h-auto opacity-70 grayscale cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
              onClick={() => openModal('/images/DotComMag_Logo.png')}
              onKeyDown={makeKeyboardClickable(() => openModal('/images/DotComMag_Logo.png'))}
              role="button"
              tabIndex={0}
              aria-label="Enlarge DotCom Magazine logo"
            >
              <Image
                src="/images/DotComMag_Logo.png"
                alt="DotCom Magazine logo"
                width={100}
                height={40}
                className="w-full h-auto"
                sizes="100px"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
              />
            </div>
            <div
              className="w-24 h-auto opacity-70 grayscale cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
              onClick={() => openModal('/images/Pathos_Logo.png')}
              onKeyDown={makeKeyboardClickable(() => openModal('/images/Pathos_Logo.png'))}
              role="button"
              tabIndex={0}
              aria-label="Enlarge Pathos Communications logo"
            >
              <Image
                src="/images/Pathos_Logo.png"
                alt="Pathos Communications logo"
                width={100}
                height={40}
                className="w-full h-auto"
                sizes="100px"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
              />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHAT THIS IS NOT – ARCHITECT + CREDIBILITY */}
        <section className="container section text-center">
          <div className="max-w-[760px] mx-auto">
            {/* Architect portrait */}
            <div className="flex justify-center mb-4">
              <div
                className="w-32 h-32 rounded-full overflow-hidden border-2 border-green/30 shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setShowArchitectModal(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShowArchitectModal(true); }}
              >
                <Image
                  src="/images/Will_Price.png"
                  alt="Will Price – Architect"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover object-[55%_top]"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHAT THIS IS NOT</h2>

            <p className="text-gray-300 text-base mb-2">This isn't a protest.</p>
            <p className="text-gray-300 text-base mb-2">This isn't a petition that disappears into a database.</p>
            <p className="text-gray-300 text-base mb-5">This isn't a campaign.</p>

            <p className="text-green text-xl font-bold mb-8">
              This is coordinated civic leverage — built district by district.<br />
              A counted signal tied to real representation.
            </p>

            {/* ARCHITECT DESCRIPTION */}
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 md:p-6 text-left mb-6">
              <p className="text-white text-base mb-3">
                This didn’t start as a campaign. It started because I didn’t see anything addressing this in a way that felt direct enough to match what’s actually happening.
              </p>
              <p className="text-gray-300 text-base mb-3">
                So I built it.
              </p>
              <p className="text-gray-300 text-base mb-3">
                It’s designed to work through direct public participation — not institutions, not commentary, not abstraction.
              </p>
              <p className="text-gray-300 text-base mb-3">
                If people engage, it scales. If they don’t, it stays small. Either way, it stays grounded in real participation.
              </p>
              <p className="text-white text-base font-semibold mt-3">
                Action first. Everything else follows from that.
              </p>
            </div>

            {/* PATHOS COMMUNICATIONS BLOCK */}
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 md:p-6 text-left mb-6">
              <p className="text-green font-bold text-lg mb-2">Pathos Communications</p>
              <p className="text-gray-300 text-base mb-3">
                A London Stock Exchange–associated communications firm involved in shaping narrative structure and strategic messaging for this initiative.
              </p>
              <p className="text-gray-300 text-base mb-3">
                Their role centers on refining message clarity, positioning, and preparing the story for broader media visibility.
              </p>
              <p className="text-white text-base font-semibold">
                Focus: translating public participation into a message that can carry into national and international media spaces.
              </p>
            </div>

            {/* PATHOS VIDEO CTA */}
            <div className="bg-black/50 border border-green/30 rounded-xl p-4 mb-6">
              <p className="text-green font-bold mb-3">
                Pathos Communications – Narrative & Strategy Overview
              </p>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.youtube.com/embed/KLu7USN_dao?rel=0"
                  title="Pathos Communications Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Communications and narrative strategy context.
              </p>
            </div>

            {/* CTA BUTTON */}
            <button
              onClick={() => setShowArchitectModal(true)}
              className="text-green underline hover:text-green-dim transition-colors mt-2 text-lg focus:outline-none focus:ring-2 focus:ring-green rounded px-2"
            >
              Meet the architect →
            </button>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHAT HAPPENS AFTER YOU SIGN */}
        <section className="container section">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHAT HAPPENS AFTER YOU SIGN</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>You're counted in your district</li>
                <li>You see your district total grow</li>
                <li>You see when it reaches the tipping point</li>
                <li>You see when your representative is notified</li>
              </ul>
              <p className="text-white text-lg font-bold mt-6">This isn't abstract. It's visible.</p>
            </div>
            <div className="flex justify-center">
              <div
                className="w-[80%] cursor-pointer focus:outline-none focus:ring-2 focus:ring-green rounded"
                onClick={() => openModal('/images/PHIERS_Logo.png')}
                onKeyDown={makeKeyboardClickable(() => openModal('/images/PHIERS_Logo.png'))}
                role="button"
                tabIndex={0}
                aria-label="Enlarge PHIERS logo"
              >
                <Image
                  src="/images/PHIERS_Logo.png"
                  alt="PHIERS logo – Power Held In Every Representative's Seat"
                  width={400}
                  height={300}
                  className="w-full h-auto border border-green/20 rounded-lg"
                  sizes="(max-width: 768px) 80vw, 400px"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; console.error('Dashboard image missing') }}
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* EVIDENCE FOOTER */}
        <section className="container section bg-bg-dark rounded-xl border border-green/20 p-6 my-6">
          <div className="max-w-[900px] mx-auto">
            <h3 className="text-green text-lg font-bold mb-3">📌 Everything here is verifiable</h3>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              <li>The $8,000–$10,000 vs. $600 healthcare cost comparison comes from CMS published data.</li>
              <li>The 3.5% tipping point is from Erica Chenoweth's study of 323 campaigns (1900–2006).</li>
              <li>The cascade math is arithmetic — run it yourself.</li>
              <li>The congressional authorization gap for undeclared wars is public record.</li>
              <li>Pathos Communications and DotCom Magazine endorsements are documented and on video.</li>
              <li>Will Price's 20-year work history inside the VA system is documented.</li>
            </ul>
            <p className="text-gray-500 text-sm mt-3">
              Nothing here requires you to take anyone's word for it. Primary sources and full documentation are on the Full Story and About pages.
            </p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* FINAL CLOSE */}
        <section className="container section text-center">
          <div className="max-w-[760px] mx-auto">
            <p className="text-white text-xl font-bold mb-4">Nothing changes until ignoring people costs more than responding.</p>
            <p className="text-gray-300 text-base mb-3">This is how you change that.</p>
            <div className="bg-green-glow border border-green/20 rounded-xl p-6 my-6">
              <p className="text-gray-300 text-base mb-2">Affordability gives the system its fuel.</p>
              <p className="text-gray-300 text-base mb-2">Organization gives it structure.</p>
              <p className="text-gray-300 text-base mb-4">Sustained pressure gives it results.</p>
              <p className="text-white text-lg font-semibold">And once it reaches scale — it sustains itself.</p>
            </div>
            <p className="text-green text-2xl font-bold mb-6">The only variable is you.</p>
            <div className="mt-6">
              <Link
                href="/homepage-teeth"
                className="inline-block px-8 py-3 bg-green/20 border-2 border-green text-green font-bold rounded-lg hover:bg-green/30 transition text-center text-lg shadow-md"
              >
                Next: How It Works →
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-3 justify-center max-w-md mx-auto mt-6">
              <Button href="/petition" variant="primary" fullWidth>✍ BE HEARD</Button>
            </div>
          </div>
        </section>
      </main>

      <JumpToFooter />

      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-green text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer transition-all duration-150 hover:bg-[#2ab568] hover:-translate-y-0.5 z-[999] border-none ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* ARCHITECT MODAL – full video library */}
      <AnimatePresence>
        {showArchitectModal && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowArchitectModal(false)}
            aria-hidden="true"
          >
            <div
              className="relative max-w-4xl w-full bg-[#0a1628] border-2 border-green/35 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Will Price – architect modal with video library"
            >
              <button
                onClick={() => setShowArchitectModal(false)}
                className="absolute top-3 right-3 bg-[#111d35] text-green border-2 border-green rounded-full w-10 h-10 flex items-center justify-center hover:bg-green hover:text-[#111d35] transition-all z-10 focus:outline-none focus:ring-2 focus:ring-green"
                aria-label="Close architect modal"
              >
                ✕
              </button>

              <div className="flex flex-wrap items-stretch border-b border-green/20">
                <div className="flex-0 w-full max-w-[240px] min-h-[280px] overflow-hidden">
                  <Image
                    src="/images/Will_Price.png"
                    alt="Will Price — Founder & Chief Solutions Architect, PHIERS"
                    width={240}
                    height={280}
                    className="w-full h-full object-cover object-[55%_top]"
                  />
                </div>
                <div className="flex-1 min-w-[240px] p-6 flex flex-col justify-center">
                  <p className="font-condensed text-xs text-green uppercase tracking-[3px] mb-1">The Architect</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-0">Will Price</h3>
                  <p className="font-condensed text-sm text-[#ffd60a] font-bold mt-1 mb-3">Founder & Chief Solutions Architect, PHIERS</p>
                  <p className="text-body text-sm leading-relaxed">
                    Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending — and built the lever to redirect it toward healthcare, jobs, and a monthly check for every American. Building this since 2009... AFTER ending the wars.
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="font-condensed text-xs text-green uppercase tracking-[3px] mb-4">The Vision – Over 20 years of recorded talks</p>

                {/* Short Intros to PHIERS */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-green mb-3 border-l-4 border-green pl-3">Short Intros to PHIERS</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <VideoCard id="ihTa_2CLmvk" title="Intro – The Framework" />
                    <VideoCard id="2j-dF3hgdeE" title="Intro – The Leverage" />
                  </div>
                </div>

                {/* Current Wars & Congress */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-green mb-3 border-l-4 border-green pl-3">Current Wars & Congress</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <VideoCard id="D3RPVoJ93BU" title="The Wars – Congress Must Act" />
                  </div>
                </div>

                {/* Healthcare Reform */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-green mb-3 border-l-4 border-green pl-3">Healthcare Reform</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <VideoCard id="jMU6LKEBzbs" title="The Healthcare Cascade" />
                    <VideoCard id="kd6kTJM_SuM" title="Telehealth Solution" />
                    <VideoCard id="bEUyDVAYwpk" title="Cost Savings" />
                    <VideoCard id="xy3F9ZWbgS8" title="Why $600 Works" />
                    <VideoCard id="453Hf3rgymY" title="Fixing the System" />
                  </div>
                </div>

                {/* Tackling Fascism, Authoritarianism and Nazis */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-green mb-3 border-l-4 border-green pl-3">Tackling Fascism and Nazis</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <VideoCard id="h1AqunGaAA0" title="Confronting Authoritarianism" />
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-green mb-3 border-l-4 border-green pl-3">Public Health</h4>
                  <p className="text-gray-400 text-sm italic ml-4">More videos coming soon</p>
                </div>
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-green mb-3 border-l-4 border-green pl-3">Veterans and Unions</h4>
                  <p className="text-gray-400 text-sm italic ml-4">More videos coming soon</p>
                </div>
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-green mb-3 border-l-4 border-green pl-3">Mission Oriented</h4>
                  <p className="text-gray-400 text-sm italic ml-4">More videos coming soon</p>
                </div>
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-green mb-3 border-l-4 border-green pl-3">Foundational</h4>
                  <p className="text-gray-400 text-sm italic ml-4">More videos coming soon</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// FILE: components/MainHomePage.tsx