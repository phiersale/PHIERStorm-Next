// FILE: app/real-stories/page.tsx
// REAL STORIES PAGE - Complete with design system

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function RealStoriesPage() {
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    story: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Story submitted:', formData)
    alert('Thank you for sharing your story. It will help others decide to act.')
    setFormData({ name: '', state: '', story: '' })
  }

  const stories = [
    { name: 'Maria', location: 'Healthcare worker, TX', story: 'My family member can\'t afford insurance. PHIERS gives us hope AND a plan. This is how we win.', image: '/images/Telehealth_Benefits.jpg' },
    { name: 'James', location: 'Small business owner, OH', story: 'I was skeptical at first. Then I saw the math. $600 vs $10,000. That\'s not politics. That\'s survival.', image: '/images/Telehealth_tech.jpg' },
    { name: 'Aisha', location: 'Union organizer, NY', story: 'The math is undeniable. When 12 million of us get organized, Congress has no choice.', image: '/images/Online_Petition.jpg' },
    { name: 'Tom', location: 'Veteran, CA', story: 'The VA left my brothers behind. PHIERS won\'t.', image: '/images/A_Peaceful_Warrior.jpg' },
    { name: 'Rosa', location: 'Parent, AZ', story: 'I signed for my kids. They deserve a country that works.', image: '/images/Telehealth_Benefits.jpg' },
    { name: 'Derek', location: 'Teacher, IL', story: 'Healthcare costs were eating my paycheck. PHIERS changes that.', image: '/images/Telehealth_tech.jpg' },
    { name: 'Lena', location: 'Student, FL', story: 'This is the first thing that actually makes sense.', image: '/images/Online_Petition.jpg' },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Banner */}
        <div className="relative w-full h-[200px] md:h-[250px]">
          <Image
            src="/images/We_Are_The_TEETH_Original.jpg"
            alt="We Are The TEETH — Insurance failed. Telehealth saved."
            fill
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-white font-display text-2xl md:text-3xl text-center px-4">Insurance failed.<br /><span className="text-green">Telehealth saved.</span></p>
          </div>
        </div>

        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Real people.<br /><span className="text-green">Real pressure.</span><br />Real change.</h1>
          <p className="text-gray-400 max-w-[700px] mx-auto">These aren't talking points. These are people — in districts across the country — who signed because they ran out of reasons not to. Every story strengthens the district count.</p>
        </section>

        <hr className="border-green/20" />

        {/* Stories Grid */}
        <section className="container section">
          <div className="space-y-4">
            {stories.map((story, idx) => (
              <div key={idx} className="bg-bg-card border border-green/20 rounded-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-[100px] h-[100px] relative">
                    <Image src={story.image} alt={story.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-4">
                    <p className="font-condensed font-bold text-white">{story.name}</p>
                    <p className="text-gray-500 text-sm mb-2">{story.location}</p>
                    <p className="text-body text-sm">{story.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Submit Your Story */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white text-center mb-3">Your Story Belongs Here.</h2>
          <p className="text-gray-400 text-center mb-6">What you faced. Why you signed. What you want Congress to do. Submit below. Your words become the reason the next person signs.</p>
          
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-condensed mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white focus:outline-none focus:border-green"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-condensed mb-1">State / District</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                  className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white focus:outline-none focus:border-green"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-condensed mb-1">Your story — 2 to 3 sentences</label>
                <textarea
                  rows={4}
                  value={formData.story}
                  onChange={(e) => setFormData({...formData, story: e.target.value})}
                  className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white focus:outline-none focus:border-green"
                  required
                />
              </div>
              <Button type="submit" variant="primary" fullWidth>SUBMIT YOUR STORY</Button>
            </form>
          </div>
          
          <div className="text-center mt-8">
            <p className="font-condensed text-lg text-gray-400 mb-4">Every story is a brick. Every district that hits 1,500 forces a public response.</p>
            <Button href="/petition" variant="primary">✍ ADD MY NAME</Button>
          </div>
        </section>
      </main>

      <Footer />

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

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
