'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import WhyNow from '@/components/WhyNow'

export default function HomePage() {
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Open modal with any image
  const openModal = (src: string) => {
    setModalImageSrc(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImageSrc(null)
    document.body.style.overflow = ''
  }

  // Show entry modal immediately on page load (only once per browser session)
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('entryModalShown')
    if (!hasSeenModal) {
      openModal('/images/You_Are_Not_Powerless.jpg')
      sessionStorage.setItem('entryModalShown', '1')
    }
  }, [])

  // Auto-close modal after 5 seconds and close on Enter key
  useEffect(() => {
    if (!modalImageSrc) return

    const autoTimer = setTimeout(() => {
      closeModal()
    }, 5000)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(autoTimer)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [modalImageSrc])

  // Escape key also closes
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalImageSrc) closeModal()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [modalImageSrc])

  // Scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const btt = document.getElementById('back-to-top')
      if (btt) {
        if (window.scrollY > 400) btt.classList.add('visible')
        else btt.classList.remove('visible')
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // New video (cascade / zoom)
  const videoThumbnail = 'https://img.youtube.com/vi/C2mMIx5yoyw/hqdefault.jpg'
  const videoEmbedSrc = 'https://www.youtube.com/embed/C2mMIx5yoyw?autoplay=1&rel=0'

  const playVideo = () => setVideoPlaying(true)

  return (
    <>
      {/* Under construction banner */}
      <div className="bg-amber-600 text-black text-center py-2 text-sm font-bold">
        🚧 Site under construction – <Link href="/join" className="underline font-extrabold">Join us → now hiring</Link>
      </div>

      {/* Unified Modal – full screen width */}
      <AnimatePresence>
        {modalImageSrc && (
          <motion.div
            className="fixed inset-0 bg-black z-[99999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div
              className="relative w-screen h-screen flex items-center justify-center cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={modalImageSrc}
                alt="Enlarged view"
                width={1920}
                height={1080}
                className="w-full h-auto max-h-screen object-contain"
              />
              <p className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-sm">Tap anywhere or press Enter to close</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />

      <main>
        {/* Hero Image - centered, 45% width, clickable */}
        <section className="relative bg-[#050b19] pt-8 md:pt-12 pb-4">
          <div className="container">
            <div className="flex justify-center">
              <div
                className="w-[45%] cursor-pointer"
                onClick={() => openModal('/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg')}
              >
                <div className="overflow-hidden rounded-2xl border border-green/30 shadow-[0_16px_60px_rgba(0,0,0,0.55)]">
                  <Image
                    src="/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg"
                    alt="Congress Ignores You"
                    width={954}
                    height={648}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080d1a] to-transparent" />
        </section>

        {/* Purpose Section with final copy */}
        <section className="container section text-center">
          <h1 className="mb-4">
            <span className="hero-white">CONGRESS CAN FIX MOST OF WHAT'S BROKEN.</span>
            <br />
            <span className="hero-green">IT JUST DOESN'T HAVE TO.</span>
          </h1>
          <div className="max-w-[760px] mx-auto mt-8">
            <p className="text-white text-lg md:text-xl font-semibold mb-2">ALONE, YOU'RE EASY TO IGNORE.</p>
            <p className="text-green text-base md:text-lg font-medium mb-6">1,500 PEOPLE IN YOUR DISTRICT CHANGES THAT.</p>
            <p className="text-gray-300 text-base mb-4">Because representatives respond to organized pressure inside their own district.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 justify-center max-w-md mx-auto">
            <Button href="/petition" variant="primary" fullWidth>✍ BE COUNTED</Button>
            <Button href="/organizers" variant="secondary" fullWidth>🤝 GET CONNECTED</Button>
          </div>

          {/* Organized Fish Image - centered, 50% width, clickable */}
          <div className="flex justify-center mt-8">
            <div
              className="w-[50%] cursor-pointer"
              onClick={() => openModal('/images/This_is_what_leverage_looks_like.jpg')}
            >
              <div className="overflow-hidden rounded-2xl border border-green/30 shadow-md">
                <Image
                  src="/images/This_is_what_leverage_looks_like.jpg"
                  alt="This is what leverage looks like - organized fish"
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-center text-gray-400 text-sm italic mt-2">This is what leverage looks like</p>
            </div>
          </div>

          <div className="mt-8 max-w-[600px] mx-auto">
            <p className="text-gray-300 text-base mb-4">Adding your name isn't symbolic — it's how scattered people become coordinated pressure Congress can't ignore, and is what they fear most: accountability.</p>
            <p className="text-white text-base font-bold mb-2">This only works if enough people act together.</p>
            <p className="text-gold text-base font-bold mb-8">Not eventually. Not theoretically. Now.</p>
          </div>
          <div className="mt-4 max-w-[600px] mx-auto">
            <p className="text-gray-500 text-sm italic">By adding your name, you help us hold Congress accountable for better decisions long before the upcoming election.</p>
          </div>
        </section>

        {/* PHIERS Acronym Visual - centered, 45% width, clickable */}
        <div className="container py-6">
          <div className="flex justify-center">
            <div
              className="w-[45%] cursor-pointer"
              onClick={() => openModal('/images/PHIERS-Power_Held_In_Every_Reps_Seat.jpg')}
            >
              <div className="overflow-hidden rounded-2xl border border-green/30 shadow-md">
                <Image
                  src="/images/PHIERS-Power_Held_In_Every_Reps_Seat.jpg"
                  alt="PHIERS: Power Held In Every Representative's Seat"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* WHAT'S GOING ON / WHY NOTHING CHANGES */}
        <section className="container section">
          <div className="max-w-[760px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">WHAT'S GOING ON</h2>
            <p className="text-gray-300 text-base mb-6">People feel it every day — at the grocery store, at the gas pump, at home.</p>
            <p className="text-gray-300 text-base mb-3">Costs go up. Stress goes up. Nothing seems to change.</p>
            <p className="text-gray-300 text-base mb-3">That's not random. And it's not because people don't care.</p>
            <p className="text-gray-300 text-base mb-6">It's because the pressure is scattered.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8">WHY NOTHING CHANGES</h2>
            <p className="text-gray-300 text-base mb-3">Most people are doing what they can — they're just doing it alone.</p>
            <p className="text-gray-300 text-base mb-3">And alone, people don't create enough pressure to force action.</p>
            <p className="text-gray-300 text-base mb-3">That's not failure. That's how the system works.</p>
            <p className="text-gray-300 text-base">Scattered pressure doesn't land anywhere. It just evaporates.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* THE LEVERAGE */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="mb-6">
              <span className="section-white">THE LEVERAGE</span>
            </h2>
            <div className="max-w-[760px] mx-auto">
              <p className="text-white text-xl font-bold mb-4">THIS IS WHAT ACTUALLY WORKS.</p>
              <p className="text-gray-300 text-base mb-3">A representative responds to one thing — organized people inside their own district.</p>
              <p className="text-gray-300 text-base mb-2">Not noise. Not posts. Not opinions.</p>
              <p className="text-green text-2xl font-extrabold my-4">Just pressure.</p>
              <p className="text-gray-300 text-base mb-2">Not millions. Not someday.</p>
              <p className="text-white text-lg font-semibold mb-2">1,500 people in one district — organized and consistent — is enough to force a response.</p>
              <p className="text-green text-xl font-bold my-4">That's the tipping point.</p>
              <p className="text-gray-300 text-base mb-4">Because this isn't about size. It's about placement.</p>
              <p className="text-white text-lg font-semibold">PHIERS creates consequences. It turns attention into leverage.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* HOW IT WORKS */}
        <section className="container section">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-6">HOW IT WORKS</h2>
          <div className="max-w-[600px] mx-auto space-y-5 text-left">
            <div>
              <p className="text-white text-lg font-bold">1. You add your name</p>
              <p className="text-gray-400 text-sm">A real person. In a real district. Counted.</p>
            </div>
            <div>
              <p className="text-white text-lg font-bold mt-3">2. We organize by district</p>
              <p className="text-gray-400 text-sm">Not noise — numbers. Not vibes — leverage.</p>
            </div>
            <div>
              <p className="text-white text-lg font-bold mt-3">3. Pressure becomes unavoidable</p>
              <p className="text-gray-400 text-sm">When enough people move together, ignoring them becomes risky.</p>
            </div>
            <div>
              <p className="text-white text-lg font-bold mt-3">4. Congress responds — or gets replaced</p>
              <p className="text-gray-400 text-sm">That's how this has always worked.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

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
            <div className="bg-bg-card border border-green/20 rounded-xl p-6 h-full border-t-4 border-t-gold">
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

        {/* WHY THIS SPREADS */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">WHY THIS SPREADS</h2>
            <div className="max-w-[760px] mx-auto">
              <p className="text-gray-300 text-base mb-3">It doesn't start big.</p>
              <p className="text-gray-300 text-base mb-3">It starts with a few people talking — at a kitchen table, in a union hall, at local events.</p>
              <p className="text-gray-300 text-base mb-3">Then it grows. District by district.</p>
              <p className="text-white text-xl font-bold mt-4">That's how real change happens.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* HEALTHCARE + ECONOMIC ENGINE */}
        <section className="container section">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">HEALTHCARE + THE ECONOMIC ENGINE</h2>
            <p className="text-green text-xl font-semibold">HERE'S WHERE THE MONEY COMES FROM.</p>
          </div>
          <div className="max-w-[760px] mx-auto">
            <p className="text-gray-300 text-base mb-3">Right now, we're paying $8,000–$10,000 per person each year for healthcare.</p>
            <p className="text-gray-300 text-base mb-3">But most of the care people actually use — at a fraction of the cost — can be delivered for about $600 through telehealth.</p>
            <p className="text-gray-300 text-base mb-3">That gap — multiplied across the country — is trillions in wasted money.</p>
            <p className="text-green text-xl font-bold my-4">That's not a theory. That's math.</p>
          </div>

          {/* Tablet image - centered, 50% width, clickable */}
          <div className="flex justify-center mt-8">
            <div
              className="w-[50%] cursor-pointer"
              onClick={() => openModal('/images/PHIERS_Tablet__Firewall.png')}
            >
              <Image
                src="/images/PHIERS_Tablet__Firewall.png"
                alt="Telehealth tablet - PHIERS powered solutions"
                width={500}
                height={400}
                className="mx-auto rounded-lg border border-green/20"
              />
              <div className="mt-4 space-y-1 text-gray-400 text-sm font-light text-center">
                <div>Funded by TeleCARE</div>
                <div>Sponsored Telehealth Placement</div>
              </div>
            </div>
          </div>

          <div className="max-w-[760px] mx-auto mt-8">
            <h3 className="text-2xl font-bold text-white mb-3">THE CASCADE</h3>
            <p className="text-gray-300 text-base mb-2">One person switching saves enough to cover 12 more.</p>
            <p className="text-gray-300 text-base mb-2">12 become 148. 148 become 1,825.</p>
            <p className="text-gray-300 text-base mb-3">The system scales itself forward.</p>
            <div className="bg-bg-card border border-green/20 rounded-xl p-4 my-4 text-center">
              <p className="text-white font-mono text-lg">In nine rounds: • 234 million people covered • 8–13 months</p>
            </div>
            <p className="text-green text-lg font-bold mb-3">Not a promise. Arithmetic.</p>
            <p className="text-gray-300 text-base">It works because savings fund the next layer. The same system that lowers costs is what funds continued growth and coordination.</p>
          </div>

          <div className="max-w-[760px] mx-auto mt-8">
            <h3 className="text-2xl font-bold text-white mb-3">WHAT THAT UNLOCKS</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Lower costs</li>
              <li>Access to care</li>
              <li>Real economic relief</li>
              <li>Investment where it's actually needed</li>
            </ul>
            <p className="text-gray-300 text-base mt-3">The money is already there. This is about changing where it goes.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* SELF-SUSTAINING */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">WHY IT BECOMES SELF‑SUSTAINING</h2>
            <div className="max-w-[760px] mx-auto">
              <p className="text-gray-300 text-base mb-3">This system is designed to fund itself.</p>
              <p className="text-gray-300 text-base mb-2">The savings created in the first wave fund the next.</p>
              <p className="text-gray-300 text-base mb-2">Each wave funds the next.</p>
              <p className="text-gray-300 text-base mb-3">The system accelerates instead of slowing.</p>
              <p className="text-gray-300 text-base mb-3">At scale, growth and coordination are supported by the same savings the system creates.</p>
              <p className="text-green text-xl font-bold my-4">No donations. No grants. No dependence on outside funding.</p>
              <p className="text-gray-300 text-base">The math that reduces costs is the same math that keeps the system running.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* AFFORDABILITY CREATES LEVERAGE */}
        <section className="container section">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHY AFFORDABILITY CREATES LEVERAGE</h2>
          </div>
          <div className="max-w-[760px] mx-auto">
            <p className="text-gray-300 text-base mb-3">Affordability isn't a side benefit. It's what makes sustained pressure possible.</p>
            <p className="text-gray-300 text-base mb-3">When people aren't overwhelmed by basic costs, they gain something critical:</p>
            <div className="bg-green-glow border border-green/20 rounded-xl p-4 my-4 text-center">
              <p className="text-white font-bold">Time. Stability. The ability to stay engaged.</p>
            </div>
            <p className="text-gray-300 text-base mb-3">And when people stay engaged together — by district — pressure doesn't fade. It builds.</p>
            <p className="text-gray-300 text-base mb-3">That's what changes outcomes. Not attention. Not awareness.</p>
            <p className="text-white text-lg font-bold mb-2">Sustained, organized pressure from people who can't be ignored.</p>
            <p className="text-green text-xl font-bold my-4">Affordability → capacity → sustained pressure → response. That's what leverage is.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHY THIS WORKS + CREDIBILITY */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">WHY THIS WORKS</h2>
            <div className="max-w-[760px] mx-auto">
              <p className="text-gray-300 text-base mb-3">This isn't guesswork.</p>
              <p className="text-gray-300 text-base mb-3">Harvard researcher Erica Chenoweth studied 323 civic movements across more than a century.</p>
              <p className="text-white text-lg font-bold mb-4">When participation reached a critical threshold, the system responded.</p>
            </div>
            <div className="max-w-[760px] mx-auto mt-8 border-t border-green/20 pt-6">
              <h3 className="text-2xl font-bold text-white mb-4">INDEPENDENT VALIDATION</h3>
              <p className="text-gray-300 text-base mb-3">Different parts of this model have already been proven — separately:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                <li>Telehealth cost models (operating today)</li>
                <li>Direct‑to‑consumer pharmaceuticals (no middlemen)</li>
                <li>Political response to coordinated pressure (historical record)</li>
              </ul>
              <p className="text-gray-300 text-base">They weren't built together. They arrived at the same conclusions independently. That's what makes it credible.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHAT THIS IS NOT */}
        <section className="container section">
          <div className="text-center max-w-[760px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">WHAT THIS IS NOT</h2>
            <p className="text-gray-300 text-base mb-2">This isn't a protest.</p>
            <p className="text-gray-300 text-base mb-2">This isn't a petition.</p>
            <p className="text-gray-300 text-base mb-4">This isn't a campaign.</p>
            <p className="text-green text-xl font-bold">This is coordinated leverage — district by district.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHAT HAPPENS AFTER YOU SIGN */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">WHAT HAPPENS AFTER YOU SIGN</h2>
            <div className="max-w-[600px] mx-auto text-left space-y-3">
              <p className="text-gray-300 text-base">• You're counted in your district</p>
              <p className="text-gray-300 text-base">• You see your district total grow</p>
              <p className="text-gray-300 text-base">• You see when it reaches the tipping point</p>
              <p className="text-gray-300 text-base">• You see when pressure is applied</p>
            </div>
            <p className="text-white text-lg font-bold mt-6">This isn't abstract. It's visible.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* CLOSING */}
        <section className="container section text-center">
          <div className="max-w-[760px] mx-auto">
            <p className="text-white text-xl font-bold mb-4">Nothing changes until ignoring people costs more than responding.</p>
            <p className="text-gray-300 text-base mb-3">That's what this does.</p>
            <p className="text-green text-2xl font-bold mb-4">Your name. Your district. Counted.</p>
            <p className="text-gray-300 text-base mb-2">Affordability gives this movement its fuel.</p>
            <p className="text-gray-300 text-base mb-2">Organization gives it structure.</p>
            <p className="text-gray-300 text-base mb-4">Sustained pressure gives it results.</p>
            <p className="text-white text-lg font-bold mb-6">And at scale, it keeps going on its own.</p>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>✍ BE COUNTED</Button>
              <Button href="/organizers" variant="secondary" fullWidth>🤝 GET CONNECTED</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <button
        onClick={scrollToTop}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

      <style jsx global>{`
        .back-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--green);
          color: var(--bg-deep);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 150ms ease;
          z-index: 999;
          border: none;
        }
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        .back-to-top:hover {
          background: #2ab568;
          transform: translateY(-2px);
        }
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          border: 2px solid rgba(61, 220, 132, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }
        .video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
          background-size: cover;
          background-position: center;
        }
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .bg-green-glow {
          background: rgba(61, 220, 132, 0.06);
        }
        @media (max-width: 768px) {
          nav .menu-items {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  )
}