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
  const [userDistrict, setUserDistrict] = useState<string | null>(null)
  const [districtCount, setDistrictCount] = useState<number | null>(null)

  // Simulate district detection (replace with actual API)
  useEffect(() => {
    const storedDistrict = sessionStorage.getItem('userDistrict')
    if (storedDistrict) {
      setUserDistrict(storedDistrict)
      setDistrictCount(342) // placeholder
    } else {
      setUserDistrict(null)
    }
  }, [])

  const openModal = (src: string) => {
    setModalImageSrc(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImageSrc(null)
    document.body.style.overflow = ''
  }

  // Keyboard handler for image modal
  useEffect(() => {
    if (!modalImageSrc) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    const modalContainer = document.getElementById('image-modal-container')
    if (modalContainer) modalContainer.focus()
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [modalImageSrc])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToMechanism = () => {
    document.getElementById('mechanism')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Under construction banner */}
      <div className="bg-amber-600 text-black text-center py-2 text-sm font-bold">
        🚧 Site under construction – <Link href="/join" className="underline font-extrabold">Join us → now hiring</Link>
      </div>

      {/* Image modal (for all clickable images) */}
      <AnimatePresence>
        {modalImageSrc && (
          <motion.div
            id="image-modal-container"
            className="fixed inset-0 bg-black z-[99999] flex items-center justify-center outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <div className="relative w-screen h-screen flex items-center justify-center cursor-pointer">
              <Image
                src={modalImageSrc}
                alt="Enlarged view"
                width={1920}
                height={1080}
                className="w-full h-auto max-h-screen object-contain"
                onError={(e) => console.error('Modal image failed to load:', modalImageSrc)}
              />
              <p className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-sm">
                Tap anywhere or press Enter to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="container text-center pt-8 md:pt-12 pb-4">
          <h1 className="mb-4">
            <span className="hero-white">CONGRESS CAN END THE WAR NOW.</span>
            <br />
            <span className="hero-green">THEY WON'T — unless We the People can make them.</span>
          </h1>
          <div className="max-w-[760px] mx-auto mt-4">
            <p className="text-white text-lg md:text-xl font-semibold mb-2">Alone, you're easy to ignore.</p>
            <p className="text-green text-base md:text-lg font-medium mb-4">1,500 people in your congressional district are not.</p>
            <p className="text-gray-300 text-base mb-2">
              Representatives respond to organized pressure inside their own district —
              not opinions, not outrage, not noise.
            </p>
            <p className="text-white text-lg font-bold mt-4">That's the leverage.</p>
          </div>

          {/* Hero Image – 45% desktop, 70% mobile */}
          <div className="flex justify-center mt-8 mb-8">
            <div className="w-[70%] md:w-[45%] max-w-[600px] cursor-pointer"
                 onClick={() => openModal('/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg')}>
              <Image
                src="/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg"
                alt="Congress Ignores You"
                width={954}
                height={648}
                priority
                className="w-full h-auto object-contain"
                onError={(e) => console.error('Hero image failed to load')}
              />
            </div>
          </div>

          {/* Why 1,500 Matters + District Counter + Dashboard Image */}
          <div className="max-w-3xl mx-auto mt-8 p-6 bg-bg-card border border-green/20 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Why 1,500 Matters</h3>
            <p className="text-gray-300 text-base mb-3">
              Congress doesn't respond to national percentages — it responds to pressure inside each district.<br />
              When 1,500 people in a district go on record with the same demand, the representative must respond or face replacement.<br />
              That's the leverage PHIERS organizes.
            </p>
            <div className="my-4 cursor-pointer" onClick={() => openModal('/images/District_Accountability_Dashboard.jpg')}>
              <Image
                src="/images/District_Accountability_Dashboard.jpg"
                alt="District Accountability Dashboard"
                width={600}
                height={400}
                className="mx-auto rounded-lg border border-green/20"
                onError={(e) => console.error('Dashboard image missing')}
              />
            </div>
            <div className="mt-4 p-4 bg-green-glow border border-green/30 rounded-lg">
              {userDistrict ? (
                <>
                  <p className="text-white font-bold">Your District: {userDistrict}</p>
                  <p className="text-green text-2xl font-bold">{districtCount ?? '?'} / 1,500</p>
                  <p className="text-gray-400 text-sm">{districtCount ? 1500 - districtCount : '?'} more to reach tipping point.</p>
                </>
              ) : (
                <>
                  <p className="text-white font-bold">Find Your District</p>
                  <p className="text-gray-400 text-sm">Enter your ZIP code to see your district's progress.</p>
                  <div className="flex mt-2">
                    <input type="text" placeholder="ZIP Code" className="bg-bg-dark border border-green/30 rounded-l px-3 py-2 text-white w-32" />
                    <button className="bg-green text-black px-4 py-2 rounded-r font-bold">Check</button>
                  </div>
                </>
              )}
              <p className="text-gray-500 text-xs mt-2">Congress responds at the district level. That's why 1,500 matters.</p>
            </div>
          </div>

          {/* ACT NOW block */}
          <div className="max-w-[600px] mx-auto mt-8">
            <p className="text-white text-lg font-bold mb-2">You've seen the reality.</p>
            <p className="text-gray-300 text-base mb-4">This is where it becomes real.</p>
            <div className="flex flex-col md:flex-row gap-3 justify-center max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>✍ BE COUNTED</Button>
              <Button onClick={scrollToMechanism} variant="secondary" fullWidth>🤝 SEE HOW IT WORKS</Button>
            </div>
            <p className="text-gray-400 text-sm mt-2">Your district. Your number. On record.</p>
          </div>
        </section>

        {/* LIVE MOVEMENT STATUS */}
        <section className="container py-8 border-t border-b border-green/20 my-6">
          <div className="max-w-[760px] mx-auto text-center">
            <span className="text-green text-sm font-condensed font-bold tracking-wider">⭐ LIVE MOVEMENT STATUS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">THIS IS ALREADY IN MOTION</h2>
            <p className="text-gray-300 text-base mb-4">We track how many people in each congressional district have gone on record and completed the survey. People aren't waiting. They're organizing — district by district.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-bg-card rounded-xl p-6 border border-green/20">
              <div><p className="text-gray-400 text-sm">Districts Activated</p><p className="text-green text-3xl font-bold">12</p></div>
              <div><p className="text-gray-400 text-sm">People Counted</p><p className="text-green text-3xl font-bold">4,382</p></div>
              <div><p className="text-gray-400 text-sm">Closest to 1,500</p><p className="text-white text-lg font-semibold">PA-07 (1,203)</p></div>
              <div><p className="text-gray-400 text-sm">Next District to Reach Threshold</p><p className="text-white text-lg font-semibold">3–5 days</p></div>
            </div>
            <p className="text-gray-400 text-sm mt-4">Visible by design. When a district hits 1,500, it can't be ignored.</p>
          </div>
        </section>

        {/* THE MECHANISM */}
        <section id="mechanism" className="container section scroll-mt-24">
          <div className="max-w-[760px] mx-auto text-center">
            <span className="text-green text-sm font-condensed font-bold tracking-wider">THE MECHANISM</span>
            <p className="text-gray-300 text-base mb-3">Congress doesn't respond to opinion.</p>
            <p className="text-gray-300 text-base mb-4">Congress responds to pressure it can't ignore.</p>
            <p className="text-white text-lg font-semibold mb-3">We don't ask Congress to care. We make it impossible to ignore constituents without being replaced.</p>
            <p className="text-white text-lg font-semibold mb-2">And pressure becomes unavoidable when:</p>
            <div className="bg-green-glow border border-green/20 rounded-xl p-6 my-4">
              <p className="text-green text-xl font-bold">Savings create growth.</p>
              <p className="text-green text-xl font-bold my-2">Growth creates pressure.</p>
              <p className="text-green text-xl font-bold">Pressure creates results.</p>
            </div>
            <p className="text-white text-lg font-bold mt-2">That's the engine.</p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="w-[45%] cursor-pointer" onClick={() => openModal('/images/PHIERS_Tablet__Firewall.png')}>
              <Image src="/images/PHIERS_Tablet__Firewall.png" alt="PHIERS mechanism" width={500} height={400} className="w-full h-auto" onError={(e) => console.error('Tablet image missing')} />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="container section scroll-mt-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-6">HOW IT WORKS</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <div><p className="text-white text-lg font-bold">1. You go on record</p><p className="text-gray-400 text-sm">Not "I agree." You're counted.</p></div>
              <div><p className="text-white text-lg font-bold mt-3">2. We organize by congressional district</p><p className="text-gray-400 text-sm">Not noise — numbers. Not vibes — leverage.</p></div>
              <div><p className="text-white text-lg font-bold mt-3">3. Representatives are forced to respond publicly</p><p className="text-gray-400 text-sm">Or face recall, replacement, or primary challenge.</p></div>
              <div><p className="text-white text-lg font-bold mt-3">4. Congress acts — or gets replaced</p><p className="text-gray-400 text-sm">Not eventually. Before it's too late.</p></div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-full md:w-[80%] bg-bg-card rounded-xl border border-green/20 p-4 text-center">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Video: How district‑level organization works</p>
                </div>
                <p className="text-gray-400 text-xs mt-2">(Explainer video – controls on)</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHY 1,500 PEOPLE MATTER (with leverage image) */}
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
            <div className="w-[45%] cursor-pointer" onClick={() => openModal('/images/This_is_what_leverage_looks_like.jpg')}>
              <Image src="/images/This_is_what_leverage_looks_like.jpg" alt="Leverage visual" width={800} height={500} className="w-full h-auto rounded-lg border border-green/20" onError={(e) => console.error('Leverage image missing')} />
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

        {/* THE ECONOMIC ENGINE */}
        <section className="container section">
          <div className="max-w-[760px] mx-auto">
            <div className="text-center mb-6"><span className="text-green text-sm font-condensed font-bold tracking-wider">THE ECONOMIC ENGINE</span></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 text-base mb-3">Right now, the country spends $8,000–$10,000 per person each year on healthcare.</p>
                <p className="text-gray-300 text-base mb-3">But most of the care people actually use — at a fraction of the cost — can be delivered for about $600 through telehealth.</p>
                <p className="text-gray-300 text-base mb-3">That gap is trillions in wasted money.</p>
                <p className="text-green text-xl font-bold mt-2">That's not a theory. That's math.</p>
              </div>
              <div className="flex justify-center">
                <div className="w-[80%] md:w-[90%] cursor-pointer" onClick={() => openModal('/images/80-20_Healthcare_Model_-PHIERS_v_Insurance_Cost.jpg')}>
                  <Image src="/images/80-20_Healthcare_Model_-PHIERS_v_Insurance_Cost.jpg" alt="Cost comparison" width={500} height={300} className="w-full h-auto" onError={(e) => console.error('Cost comparison missing')} />
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
            <p className="text-green text-lg font-bold mb-3">Not a promise. Arithmetic.</p>
            <p className="text-gray-300 text-base">It works because savings fund the next layer.</p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="w-[55%] cursor-pointer" onClick={() => openModal('/images/Cascade_Math.jpg')}>
              <Image src="/images/Cascade_Math.jpg" alt="Cascade math" width={600} height={400} className="w-full h-auto" onError={(e) => console.error('Cascade diagram missing')} />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHY THIS BECOMES UNSTOPPABLE */}
        <section className="container section">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHY THIS BECOMES UNSTOPPABLE</h2>
              <p className="text-gray-300 text-base mb-3">Once ~12 million people (~3.5%) are organized by congressional district:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4"><li>The system funds itself</li><li>Growth accelerates</li><li>Pressure compounds</li><li>Excuses disappear</li></ul>
              <p className="text-gray-300 text-base mb-2">No donations. No wealthy backers. No corporate strings.</p>
              <p className="text-green text-lg font-bold">Just math.</p>
              <p className="text-gray-300 text-base mt-2">The same math that reduces costs is what powers the system.</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-[80%] md:w-[90%] cursor-pointer" onClick={() => openModal('/images/3.5pct_Erica_Chenoweth.jpg')}>
                <Image src="/images/3.5pct_Erica_Chenoweth.jpg" alt="3.5% threshold" width={400} height={300} className="w-full h-auto" onError={(e) => console.error('3.5% image missing')} />
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
              <p className="text-gray-300 text-base mt-2">Congress already has the power to fix most of what's broken. They are paid not to. That changes when enough people move from "I agree" → "I'm on record."</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHAT THIS UNLOCKS (new section) */}
        <section className="container section">
          <div className="text-center max-w-[760px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">WHAT THIS UNLOCKS</h2>
            <p className="text-gray-300 text-base mb-4">The same leverage that can end a war can also be used to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Defend democratic processes</li>
              <li>Block authoritarian power grabs</li>
              <li>Force real oversight and reform</li>
              <li>Solve the affordability crisis</li>
            </ul>
            <p className="text-green text-xl font-bold">Power Held In Every Representative's Seat.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* CREDIBILITY */}
        <section className="container section">
          <div className="text-center mb-6"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHY THIS WORKS</h2><p className="text-gray-300 text-base max-w-[760px] mx-auto">Research on civic movements — including work by Erica Chenoweth — shows: When participation reaches a critical threshold, systems respond.</p></div>
          <div className="max-w-[900px] mx-auto"><div className="grid md:grid-cols-3 gap-4 mb-6"><div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center"><p className="text-white font-bold">Telehealth cost models</p><p className="text-gray-400 text-sm">Operating today</p></div><div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center"><p className="text-white font-bold">Direct-to-consumer pharma</p><p className="text-gray-400 text-sm">No middlemen</p></div><div className="bg-bg-card border border-green/20 rounded-xl p-4 text-center"><p className="text-white font-bold">Coordinated civic pressure</p><p className="text-gray-400 text-sm">Documented responses</p></div></div><p className="text-gray-300 text-base text-center italic">They weren't built together. They arrived at the same conclusions independently. That's what makes this credible.</p></div>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="w-24 h-auto opacity-70 grayscale cursor-pointer" onClick={() => openModal('/images/Harvard_Logo.png')}><Image src="/images/Harvard_Logo.png" alt="Harvard" width={100} height={40} className="w-full h-auto" onError={(e) => console.error('Logo missing')} /></div>
            <div className="w-24 h-auto opacity-70 grayscale cursor-pointer" onClick={() => openModal('/images/Mark_Cuban_Cost_Plus_Drug.png')}><Image src="/images/Mark_Cuban_Cost_Plus_Drug.png" alt="Cost Plus Drugs" width={100} height={40} className="w-full h-auto" onError={(e) => console.error('Logo missing')} /></div>
            <div className="w-24 h-auto opacity-70 grayscale cursor-pointer" onClick={() => openModal('/images/DotComMag_Logo.png')}><Image src="/images/DotComMag_Logo.png" alt="DotCom Magazine" width={100} height={40} className="w-full h-auto" onError={(e) => console.error('Logo missing')} /></div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* WHAT THIS IS NOT */}
        <section className="container section text-center"><div className="max-w-[760px] mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">WHAT THIS IS NOT</h2><p className="text-gray-300 text-base mb-2">This isn't a protest.</p><p className="text-gray-300 text-base mb-2">This isn't a petition.</p><p className="text-gray-300 text-base mb-4">This isn't a campaign.</p><p className="text-green text-xl font-bold">This is coordinated civic leverage — district by district.</p></div></section>

        <hr className="border-green/20" />

        {/* WHAT HAPPENS AFTER YOU SIGN */}
        <section className="container section">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHAT HAPPENS AFTER YOU SIGN</h2><ul className="list-disc list-inside text-gray-300 space-y-2"><li>You're counted in your district</li><li>You see your district total grow</li><li>You see when it reaches the tipping point</li><li>You see when your representative is notified</li></ul><p className="text-white text-lg font-bold mt-6">This isn't abstract. It's visible.</p></div>
            <div className="flex justify-center"><div className="w-[80%] cursor-pointer" onClick={() => openModal('/images/PHIERS_Logo.png')}><Image src="/images/PHIERS_Logo.png" alt="Movement visual" width={400} height={300} className="w-full h-auto border border-green/20 rounded-lg" onError={(e) => console.error('Visual missing')} /></div></div>
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
            <div className="flex flex-col md:flex-row gap-3 justify-center max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>✍ BE COUNTED</Button>
              <Button onClick={scrollToMechanism} variant="secondary" fullWidth>🤝 SEE HOW IT WORKS</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <button onClick={scrollToTop} className={`back-to-top ${showBackToTop ? 'visible' : ''}`} aria-label="Back to top">↑</button>

      <style jsx global>{`
        .back-to-top { position: fixed; bottom: 24px; right: 24px; background: var(--green); color: var(--bg-deep); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; opacity: 0; visibility: hidden; transition: all 150ms ease; z-index: 999; border: none; }
        .back-to-top.visible { opacity: 1; visibility: visible; }
        .back-to-top:hover { background: #2ab568; transform: translateY(-2px); }
        .bg-green-glow { background: rgba(61, 220, 132, 0.06); }
        .btn { padding: 0.5rem 1.25rem; height: auto; line-height: 1.5; font-size: 0.9rem; }
        @media (max-width: 640px) { .btn { padding: 0.4rem 1rem; font-size: 0.85rem; } }
      `}</style>
    </>
  )
}