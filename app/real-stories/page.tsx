// FILE: app/real-stories/page.tsx - RESTORED (Tiers 1-7)

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function RealStoriesPage() {
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    story: ''
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')
    
    // In production, this would send to a backend
    console.log('Story submitted:', formData)
    setSubmitStatus('success')
    setFormData({ name: '', state: '', story: '' })
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  // 7 Testimonials
  const stories = [
    {
      name: "Maria",
      location: "Phoenix, AZ",
      title: '"I had insurance. I still couldn\'t afford care."',
      story: "I was paying $780 a month for insurance through my job. When my daughter needed an MRI, the insurer denied it twice. The hospital told me it would be $3,400 out of pocket. I ended up driving her to urgent care three times because it was all I could afford. We weren't uninsured. We were just unprotected."
    },
    {
      name: "James",
      location: "Columbus, OH",
      title: '"Telehealth saved my life — literally."',
      story: "I had chest pain at 2 AM. I didn't want to go to the ER because of the cost. I opened my telehealth app and a doctor told me to get to the hospital immediately. It turned out to be a mild heart attack. If I had waited, I might not be here. That call cost me $35. The ambulance cost me $1,900."
    },
    {
      name: "Aisha",
      location: "Atlanta, GA",
      title: '"Insurance denied my cancer scan. Telehealth didn\'t."',
      story: "My oncologist ordered a follow-up scan. Insurance denied it as 'not medically necessary.' A telehealth doctor reviewed my case and approved it in 12 minutes. The scan found early recurrence. Insurance almost killed me. Telehealth saved me."
    },
    {
      name: "Tom",
      location: "Milwaukee, WI",
      title: '"I lost my job. I lost my insurance. I didn\'t lose my doctor."',
      story: "When the factory downsized, I lost my insurance overnight. My telehealth provider kept me on for $49 a month. I still had access to my doctor, my prescriptions, and mental health support. If I had relied on insurance, I'd have been cut off."
    },
    {
      name: "Rosa",
      location: "San Antonio, TX",
      title: '"My son\'s asthma was getting worse. Telehealth finally listened."',
      story: "For two years, insurance kept denying the inhaler my son needed. A telehealth doctor reviewed his history and approved it immediately. No hoops. No appeals. No waiting. Just care."
    },
    {
      name: "Derek",
      location: "Sacramento, CA",
      title: '"Insurance said no. Telehealth said yes. My job depends on it."',
      story: "I drive for a living. When I needed a medical clearance after an injury, insurance told me it would take 3–6 weeks. Telehealth cleared me in 24 hours. That difference meant I kept my job."
    },
    {
      name: "Lena",
      location: "Brooklyn, NY",
      title: '"Telehealth is the only reason I can afford therapy."',
      story: "My insurance plan only covers therapy after a $2,000 deductible. Telehealth gives me weekly sessions for $40. Without it, I'd be on my own."
    }
  ]

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
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Voices Congress Ignores</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Real Stories.<br /><span className="text-green">Real People.</span> <span className="text-red-500">Real Stakes.</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[700px] mx-auto">
            These aren't anecdotes. They're evidence. Insurance failed. Telehealth saved. This is why we fight.
          </p>
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

        {/* 7 Stories */}
        <section className="container section">
          <div className="space-y-5 max-w-[800px] mx-auto">
            {stories.map((story, idx) => (
              <div key={idx} className="bg-bg-card border border-green/20 rounded-r-xl border-l-4 border-l-green p-6 hover:border-green transition-all">
                <h3 className="font-condensed font-bold text-xl text-white mb-1">{story.title}</h3>
                <div className="text-gray-500 text-sm mb-3 font-condensed italic">{story.name}, {story.location}</div>
                <p className="text-body text-base italic">{story.story}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-green/20" />

        {/* CTA Block */}
        <section className="container section">
          <div className="bg-green-glow border-2 border-green rounded-xl p-8 text-center max-w-[700px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">These Stories Are <span className="text-green">Why We Fight</span></h2>
            <p className="text-body text-lg max-w-[600px] mx-auto mb-6">
              Congress has the power to authorize $600 telehealth through the ACA.<br />
              They refuse. We're forcing them to act.
            </p>
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
          </div>
        </section>

        {/* Back Link */}
        <div className="text-center mb-8">
          <Link href="/crisis" className="font-condensed font-bold text-green text-base hover:text-green-dim transition-colors">
            ← Back to The Crisis
          </Link>
        </div>

        <hr className="border-green/20" />

        {/* Submit Your Story Section */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <h2 className="font-display text-3xl text-white text-center mb-3">Your Story Belongs Here.</h2>
            <p className="text-gray-400 text-center mb-6 max-w-[600px] mx-auto">What you faced. Why you signed. What you want Congress to do. Submit below. Your words become the reason the next person signs.</p>

            <div className="bg-bg-card border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white font-condensed mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-lg bg-bg-dark border border-green/30 text-white focus:outline-none focus:border-green transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-condensed mb-1">State / District</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full p-3 rounded-lg bg-bg-dark border border-green/30 text-white focus:outline-none focus:border-green transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-condensed mb-1">Your story — 2 to 3 sentences</label>
                  <textarea
                    rows={4}
                    value={formData.story}
                    onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                    className="w-full p-3 rounded-lg bg-bg-dark border border-green/30 text-white focus:outline-none focus:border-green transition-all"
                    required
                  />
                </div>
                <Button type="submit" variant="primary" fullWidth>
                  {submitStatus === 'success' ? '✓ STORY SUBMITTED' : 'SUBMIT YOUR STORY'}
                </Button>
              </form>
            </div>

            <div className="text-center mt-8">
              <p className="font-condensed text-lg text-gray-400 mb-4">Every story is a brick. Every district that hits 1,500 forces a public response.</p>
              <Button href="/petition" variant="primary">✍ ADD MY NAME</Button>
            </div>
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

// END FILE: app/real-stories/page.tsx - TIERS 1-7 COMPLETE
