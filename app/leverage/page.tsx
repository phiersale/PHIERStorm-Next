// FILE: app/leverage/page.tsx - START

'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function LeveragePage() {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  // Scroll to top function with useCallback
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  // playVideo wrapped in useCallback
  const playVideo = useCallback((videoId: string, src: string) => {
    const wrap = document.getElementById('wrap-' + videoId)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }, [])

  const loadVideo = (videoId: string) => {
    if (videoLoaded) return
    const container = document.getElementById('video-container-' + videoId)
    if (container) {
      container.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xy3F9ZWbgS8?autoplay=1&rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
      setVideoLoaded(true)
    }
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[120px] w-auto mb-5 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={120}
              height={120}
              className="opacity-90"
            />
          </div>
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Congressional Leverage</span>
          {/* Two-tone H1 - FIXED */}
          <h1 className="mb-4">
            <span className="hero-white">When People Organize,</span>
            <br />
            <span className="hero-green">Congress Has No Choice.</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[680px] mx-auto">
            The anger is justified. This is what you do with it.<br />
            A small, organized group can force Congress to act — peacefully, democratically, and fast.<br />
            This is already building — district by district across the country. Organizers are already building toward thresholds in early districts.<br />
            War abroad. Economic pressure at home. And Congress still isn't responding.<br />
            We can't wait for the next election. Organized constituents are the only thing that makes Congress act now — not later.
          </p>
        </div>

        <hr className="border-green/20" />

        {/* How It Works */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Organized People Are <span className="text-green">Impossible to Ignore.</span></h2>
          <p className="text-body mb-4">Congress doesn't respond to passion alone. They respond to political consequences inside their own districts.<br />
          That's the only thing that has ever moved them. And it's exactly what PHIERS is built to create — right now, not after the next election.</p>
          <p className="font-condensed font-bold text-green text-lg mb-3">Here's the mechanics:</p>

          <div className="bg-bg-card border border-green/20 rounded-r-lg p-6 mb-4 border-l-4 border-l-green">
            <h3 className="font-condensed font-bold text-green text-xl mb-2">1. Your name gets counted — in your district</h3>
            <p className="text-body">A real, on-the-record count tied directly to your representative — not a symbolic petition that vanishes.</p>
          </div>

          <div className="bg-bg-card border border-green/20 rounded-r-lg p-6 mb-4 border-l-4 border-l-green">
            <h3 className="font-condensed font-bold text-green text-xl mb-2">2. When 1,500 people in a district are organized</h3>
            <p className="text-body">A public town hall is triggered. Your representative is required to show up — and answer, on the record, in front of the people they represent. In the coming weeks — not after the next election.</p>
          </div>

          <div className="bg-bg-card border border-green/20 rounded-r-lg p-6 mb-4 border-l-4 border-l-green">
            <h3 className="font-condensed font-bold text-green text-xl mb-2">3. When hundreds of districts hit this at the same time</h3>
            <p className="text-body">Congress faces coordinated constituent pressure at a scale they cannot ignore without immediate democratic consequences — not theoretical future ones.</p>
          </div>

          <div className="bg-bg-card border border-red-500/20 rounded-r-lg p-6 mb-4 border-l-4 border-l-red-500">
            <h3 className="font-condensed font-bold text-red-500 text-xl mb-2">4. Representatives who don't do what their constituents want</h3>
            <p className="text-body">Get replaced by someone who will. In the coming weeks — not after the next election. We are not waiting.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Teeth Image */}
        <section className="container section text-center">
          <div className="max-w-[500px] mx-auto">
            <button onClick={() => openModal('/images/Power_Concedes_Nothing_TEETH.png')} className="cursor-pointer">
              <Image
                src="/images/Power_Concedes_Nothing_TEETH.png"
                alt="Power concedes nothing without a demand that has teeth"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-sm text-gray-500 mt-2">Power concedes nothing without a demand that has teeth.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Video Section */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3 text-center">In Practice</span>
          <p className="font-condensed font-bold text-white text-lg text-center mb-4">Watch what happens when pressure becomes impossible to ignore:</p>
          
          <div className="max-w-[720px] mx-auto">
            <div
              id="video-container-xy3F9ZWbgS8"
              className="relative w-full aspect-video cursor-pointer rounded-xl overflow-hidden border-2 border-green/20 shadow-xl"
              onClick={() => loadVideo('xy3F9ZWbgS8')}
            >
              {!videoLoaded && (
                <>
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/They_Dont_Have_To_Listen_UNTIL_THIS-Part3.png')" }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/45 flex items-center justify-center">
                      <div className="w-[70px] h-[70px] rounded-full bg-green/90 flex items-center justify-center text-3xl text-black">
                        ▶
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <p className="text-center text-blue-500 font-bold mt-3">Congress: Get Out of the Way, Or Step Aside — 4:44</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Research + 3.5% */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3 text-center">The Research</span>
          <p className="text-center text-gray-400 text-base mb-4">This isn't theory. It's a pattern that repeats every time people organize at scale.</p>
          <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-4">The Tipping Point Is <span className="text-green">Smaller Than You Think.</span></h2>

          <div className="text-center my-8">
            <div className="font-display text-6xl md:text-8xl text-green">3.5%</div>
            <p className="font-condensed text-gray-400">That's the threshold. The point where organized people become impossible to stop.</p>
          </div>

          <p className="text-body mb-4">Harvard researcher Erica Chenoweth studied 323 social movements over more than a century and found one pattern that never broke:</p>
          
          <div className="bg-green-glow border border-green/20 rounded-r-lg p-6 mb-4 border-l-4 border-l-green">
            <p className="font-condensed font-bold text-white text-lg mb-2">When 3.5% of the population is actively organized and sustained, systemic change becomes historically inevitable.</p>
            <p className="text-body">No campaign that crossed this threshold — ever — failed.</p>
          </div>

          <p className="text-body mb-3">3.5% of the United States is 11.6 million people.<br />
          We're targeting 100 million — people furious about the war, healthcare costs, jobs, veterans, wages, a government that stopped listening and won't stop spending their money on everything except them.</p>
          
          <p className="text-center font-condensed font-bold text-2xl text-green my-4">That's 9 times the threshold.</p>
          <p className="text-center text-body">Historically, movements at this scale don't get stopped. And they don't wait.</p>

          <div className="max-w-[400px] mx-auto mt-6">
            <button onClick={() => openModal('/images/3.5pct_Erica_Chenoweth.jpg')} className="cursor-pointer">
              <Image
                src="/images/3.5pct_Erica_Chenoweth.jpg"
                alt="Harvard researcher Erica Chenoweth"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">Harvard researcher Erica Chenoweth. 323 campaigns studied. The data is ironclad. Click to enlarge.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Civic Reality + Binary Choice */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3 text-center">The Civic Reality</span>
          <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-4">Every Representative <span className="text-green">Faces the Same Choice. Now.</span></h2>
          <p className="text-body text-center mb-6">
            This is a peaceful movement. The power isn't in anger alone — it's in organized anger with a mechanism behind it.<br />
            And that mechanism has a deadline.<br />
            We are not waiting for the next election cycle to end a war, prepare for economic depression, or force Congress to do the job they were elected to do.<br />
            When enough constituents organize inside a district, their representative has two options — and they need to choose now:
          </p>

          <div className="grid md:grid-cols-2 gap-5 max-w-[700px] mx-auto">
            <div className="bg-green/10 border-2 border-green rounded-xl p-6 text-center">
              <h3 className="font-condensed font-bold text-green text-xl mb-2">DO WHAT YOUR CONSTITUENTS WANT</h3>
              <p className="text-body text-sm">Show up. Answer the questions. End the war. Address the crisis. Lead.<br />Be remembered as someone who acted when it mattered.</p>
            </div>
            <div className="bg-red-500/10 border-2 border-red-500 rounded-xl p-6 text-center">
              <h3 className="font-condensed font-bold text-red-500 text-xl mb-2">DON'T</h3>
              <p className="text-body text-sm">Refuse. Stay silent. Ignore the organized pressure inside your own district.<br />Get replaced by someone who will. We are not waiting.</p>
            </div>
          </div>

          <p className="font-condensed font-bold text-white text-lg text-center mt-6">They do what their constituents want — or they get replaced by someone who will.</p>
          <p className="text-center text-gray-500 text-sm mt-2">That's not a campaign tactic. That's a civic requirement. And it's happening now.</p>
        </section>

        <hr className="border-green/20" />

        {/* Anchor Line */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* 230:1 Advantage */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3 text-center">The Advantage</span>
          <p className="text-center text-white font-medium mb-2">And when that organization happens, something else becomes clear:</p>
          <h2 className="font-display text-5xl md:text-6xl text-white text-center mb-4">230 to 1.</h2>
          <p className="text-body text-center mb-4">The average congressional district has roughly $1.95 billion in constituent pressure potential — organized voters, organized wallets, organized voices.<br />
          The average corporate lobbying budget: $8.5 million.</p>
          <p className="text-center font-condensed font-bold text-2xl text-green my-4">230:1. That's the constituent advantage when people coordinate.</p>
          <p className="text-center text-body mb-4">That's why organized people always win when they coordinate. And why Congress knows it.</p>

          <div className="max-w-[500px] mx-auto">
            <button onClick={() => openModal('/images/LEVERAGE_Pwr_of_the_People.png')} className="cursor-pointer">
              <Image
                src="/images/LEVERAGE_Pwr_of_the_People.png"
                alt="Power of the People — 100M+ organized constituents"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">Power of the People — what 100M+ organized constituents looks like against corporate lobbying.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Ready to <span className="text-green">Make Congress Respond?</span></h2>
          <p className="text-body text-center max-w-[600px] mx-auto mb-6">
            The anger is real. The cause is right. The mechanism is built. And the clock is running.<br />
            Your name — counted in your district — is where the pressure starts.<br />
            When enough districts organize at the same time, the pressure becomes impossible to outlast. Peaceful. Democratic. Immediate.<br />
            We are not waiting for November.
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button href="/petition" variant="primary">✍ Add Your Name →</Button>
            <Button href="/action" variant="secondary">All Actions →</Button>
          </div>
          <p className="text-xs text-gray-500 mt-3">It takes less than a minute.</p>
        </section>

        {/* Page Navigation */}
        <div className="container flex justify-between items-center py-6 border-t border-green/20 mt-8">
          <Link href="/solutions" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            ← Back to 5D Solutions
          </Link>
          <Link href="/organizers" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            Next: For Organizers →
          </Link>
        </div>
      </main>

      <Footer />

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white text-3xl cursor-pointer hover:text-green transition-colors"
              >
                ✕
              </button>
              <Image
                src={modalImage}
                alt="Enlarged view"
                width={800}
                height={600}
                className="rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back-to-top button - FIXED to use scrollToTop */}
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
        .bg-green-glow {
          background: rgba(61, 220, 132, 0.06);
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            var btt = document.getElementById('back-to-top');
            if (btt) {
              if (window.scrollY > 400) {
                btt.classList.add('visible');
              } else {
                btt.classList.remove('visible');
              }
            }
          });
        `
      }} />
    </>
  )
}

// END FILE: app/leverage/page.tsx
