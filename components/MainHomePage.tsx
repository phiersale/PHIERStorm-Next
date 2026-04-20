'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function MainHomePage() {
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const openModal = (src: string) => {
    setModalImageSrc(src)
    document.body.style.overflow = 'hidden'
  }
  const closeModal = () => {
    setModalImageSrc(null)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    if (!modalImageSrc) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [modalImageSrc])

  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [])
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToMechanism = () =>
    document.getElementById('mechanism')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className="bg-amber-600 text-black text-center py-2 text-sm font-bold">
        🚧 Site under construction – <Link href="/join" className="underline font-extrabold">Join us → now hiring</Link>
      </div>

      <AnimatePresence>
        {modalImageSrc && (
          <motion.div
            className="fixed inset-0 bg-black z-[99999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative w-screen h-screen flex items-center justify-center cursor-pointer">
              <Image
                src={modalImageSrc}
                alt="Enlarged view"
                width={1920}
                height={1080}
                className="w-full h-auto max-h-screen object-contain"
              />
              <p className="absolute bottom-4 text-gray-400 text-sm">
                Tap anywhere or press Enter to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />

      <main id="main-content" className="font-sans">
        {/* HERO */}
        <section className="container text-center pt-8 pb-6">
          <h1 className="text-2xl md:text-4xl mb-4">
            <span className="hero-white">CONGRESS CAN FIX MOST OF WHAT'S BROKEN.</span>
            <br />
            <span className="hero-green">IT JUST DOESN'T HAVE TO.</span>
          </h1>

          <p className="text-white text-lg font-semibold">Alone, you're easy to ignore.</p>
          <p className="text-green text-lg mb-4">1,500 people in your congressional district are not.</p>

          <p className="text-gray-300 mb-2">We don't ask Congress to care.</p>
          <p className="text-gray-300 mb-4">
            We make ignoring constituents{' '}
            <span className="text-green font-semibold">politically impossible without consequence</span>.
          </p>

          <p className="text-white font-bold">That's the leverage.</p>

          <div className="mt-6 flex justify-center">
            <div
              className="w-[70%] md:w-[45%] cursor-pointer"
              onClick={() => openModal('/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg')}
            >
              <Image
                src="/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg"
                alt="Leverage visual"
                width={954}
                height={648}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* ACT NOW */}
        <section className="container text-center pb-10">
          <p className="text-white text-lg font-bold">You've seen the reality.</p>
          <p className="text-gray-300 mb-4">This is where it becomes real.</p>

          <div className="flex flex-col md:flex-row gap-3 justify-center max-w-md mx-auto">
            <Button href="/petition" variant="primary" fullWidth>
              ✍ BE COUNTED
            </Button>
            <Button onClick={scrollToMechanism} variant="secondary" fullWidth>
              🤝 SEE HOW IT WORKS
            </Button>
          </div>

          <p className="text-gray-400 text-sm mt-2">Your district. Your number. On record.</p>
        </section>

        {/* WHY THIS BECOMES UNSTOPPABLE */}
        <section className="container section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            WHY THIS BECOMES UNSTOPPABLE
          </h2>

          <p className="text-gray-300 mb-3">
            Once a small percentage of the population is organized — a threshold proven in civic movements —
            the dynamics change:
          </p>

          <ul className="text-gray-300 space-y-2 mb-4">
            <li>The system funds itself</li>
            <li>Growth accelerates</li>
            <li>Pressure compounds</li>
            <li className="text-green font-semibold">Political resistance breaks</li>
          </ul>

          <p className="text-gray-300">No donations. No wealthy backers. No corporate strings.</p>
          <p className="text-green font-bold mt-2">Just math.</p>
        </section>

        {/* WHY THIS WORKS + EVIDENCE PARAGRAPH */}
        <section className="container section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">WHY THIS WORKS</h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-4">
            Research on civic movements — including work by Erica Chenoweth at Harvard Kennedy School —
            shows that when participation reaches a critical threshold (around 3.5% of a population),
            systems don't debate — they respond.
          </p>

          <div className="max-w-2xl mx-auto p-4 bg-bg-card border border-green/20 rounded-lg text-left text-gray-300 text-sm">
            <p className="font-bold text-green mb-2">📌 Everything here is verifiable</p>
            <p className="mb-1">• The $8,000–$10,000 vs. $600 healthcare cost comparison comes from CMS published data.</p>
            <p className="mb-1">• The 3.5% tipping point is from Erica Chenoweth's study of 323 campaigns (1900–2006).</p>
            <p className="mb-1">• The cascade math is arithmetic — run it yourself.</p>
            <p className="mb-1">• The congressional authorization gap for undeclared wars is public record.</p>
            <p>Nothing here requires you to take anyone's word for it. Primary sources are on the Full Story and About pages.</p>
          </div>
        </section>

        {/* FINAL CLOSE */}
        <section className="container section text-center">
          <p className="text-white text-xl font-bold mb-4">
            Nothing changes until ignoring people costs more than responding.
          </p>

          <p className="text-gray-300 mb-4">This is how you change that.</p>

          <p className="text-green text-2xl font-bold mb-6">
            The only variable left is you.
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-center max-w-md mx-auto">
            <Button href="/petition" variant="primary" fullWidth>
              ✍ BE COUNTED
            </Button>
            <Button onClick={scrollToMechanism} variant="secondary" fullWidth>
              🤝 SEE HOW IT WORKS
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-green text-black w-12 h-12 rounded-full transition-opacity ${
          showBackToTop ? 'opacity-100' : 'opacity-0'
        }`}
      >
        ↑
      </button>
    </>
  )
}