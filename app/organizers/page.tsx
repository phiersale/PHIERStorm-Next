// FILE: app/organizers/page.tsx - COMPLETE REWRITE (Tiers 1-7)

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function OrganizersPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[80px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={80}
              height={80}
              className="opacity-90"
            />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            You built the movement.<br /><span className="text-green">PHIERS gives it teeth.</span>
          </h1>
          <div className="max-w-[700px] mx-auto space-y-4">
            <p className="text-gray-400">Every movement needs people on the ground — not as volunteers. As partners in a district-level pressure system Congress cannot ignore.</p>
            <p className="text-gray-400">You already know what's missing. It's not people. It's not energy. It's the mechanism that converts that energy into something Congress can't wait out.</p>
            <p className="font-condensed text-xl text-green font-bold">You fill their cup. PHIERS is what they do with the energy the morning after the rally.</p>
          </div>
          
          <div className="max-w-[500px] mx-auto my-6">
            <button onClick={() => openModal('/images/We_Gotz_Teeth_for_No_Kings.jpg')} className="cursor-pointer">
              <Image
                src="/images/We_Gotz_Teeth_for_No_Kings.jpg"
                alt="We Got Teeth for No Kings — Power concedes nothing without a demand"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
              />
            </button>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Anchor Line */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Your Role - Stat Grid */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Your Role</span>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-condensed font-bold text-xl text-gold mb-2">DISTRICT CAPTAIN</h3>
              <p className="text-body text-sm">Lead the district-level pressure block. Coordinate signature collection. Build your team. Hit the 1,500 threshold that forces your representative to respond publicly — on the record.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="text-3xl mb-2">🏛️</div>
              <h3 className="font-condensed font-bold text-xl text-gold mb-2">TOWN HALL COORDINATOR</h3>
              <p className="text-body text-sm">Plan and execute the accountability event. Secure the venue. Coordinate media. Create the moment where your representative must answer to the people they represent. No spin. No escape. On the record.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="text-3xl mb-2">📝</div>
              <h3 className="font-condensed font-bold text-xl text-gold mb-2">SIGNATURE COLLECTOR</h3>
              <p className="text-body text-sm">Go door-to-door. Attend community events. Gather the names that build district leverage. Every signature moves the needle. Every district closer to the threshold.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-condensed font-bold text-xl text-gold mb-2">DIGITAL ORGANIZER</h3>
              <p className="text-body text-sm">Spread the message. Build awareness. Connect people who already care but haven't been counted yet. Your network is the cascade.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What Your Organization Gets */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What Your Organization Gets</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[800px] mx-auto">
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-2xl text-green">$9,400+</div>
                <p className="text-body text-xs">Annual savings per member (climbing as war drives up costs)</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-2xl text-green">1,500</div>
                <p className="text-body text-xs">Signatures triggers mandatory public town hall — less than 0.5% of most districts</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-2xl text-green">$0</div>
                <p className="text-body text-xs">Cost to partner with PHIERS</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-3 text-center">
                <div className="font-display text-2xl text-green">3.5%</div>
                <p className="text-body text-xs">The threshold that has never failed in 323 campaigns</p>
              </div>
            </div>
            
            <div className="max-w-[500px] mx-auto my-6">
              <button onClick={() => openModal('/images/Power of the People Stronger than People in Power.jpg')} className="cursor-pointer">
                <Image
                  src="/images/Power of the People Stronger than People in Power.jpg"
                  alt="Power of the People Stronger than People in Power"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg border border-green/20 hover:scale-[1.01] transition-transform"
                />
              </button>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Ask */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Ask — Three Things</span>
          <div className="space-y-4 max-w-[600px] mx-auto">
            <div className="flex gap-4 items-start">
              <div className="font-display text-3xl text-green min-w-[50px]">01</div>
              <div><p className="text-white font-bold">Send your members the petition link.</p><p className="text-body text-sm">One email. You know how to reach them.</p></div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="font-display text-3xl text-green min-w-[50px]">02</div>
              <div><p className="text-white font-bold">Tell them why in your words.</p><p className="text-body text-sm">Your credibility is what they trust. The math does the rest.</p></div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="font-display text-3xl text-green min-w-[50px]">03</div>
              <div><p className="text-white font-bold">Reach out so we can coordinate.</p><p className="text-body text-sm">When your district hits the threshold, your members need to be in the room.</p></div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <p className="font-condensed text-lg text-gold font-bold mb-3">District counts begin compiling immediately.</p>
            <p className="text-body mb-4">Start building your district. Add your name. Check "I'm willing to organize." We'll connect you directly with your district team.</p>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>ADD MY NAME + VOLUNTEER</Button>
            </div>
            <p className="text-gray-500 text-sm mt-4">📧 info@phiers.org · 📞 (916) 306-8967<br />We respond to every organizer inquiry.</p>
          </div>
        </section>
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

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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

// END FILE: app/organizers/page.tsx - TIERS 1-7 COMPLETE
