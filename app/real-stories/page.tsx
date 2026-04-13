'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

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

  // Sample stories - replace with your original testimonials
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
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          
          {/* HERO BANNER */}
          <div className="relative w-full h-[200px] md:h-[250px] mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/We_Are_The_TEETH_Original.jpg"
              alt="We Are The TEETH — Insurance failed. Telehealth saved."
              fill
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <p className="text-white font-display text-2xl md:text-3xl text-center px-4">Insurance failed.<br /><span className="text-[#3ddc84]">Telehealth saved.</span></p>
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Real people.<br /><span className="text-[#3ddc84]">Real pressure.</span><br />Real change.</h1>
          <p className="text-gray-400 text-center mb-12">These aren't talking points. These are people — in districts across the country — who signed because they ran out of reasons not to. Every story strengthens the district count.</p>
          
          <div className="space-y-8 mb-12">
            {stories.map((story, idx) => (
              <div key={idx} className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-[120px] h-[120px] relative">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <p className="font-condensed font-bold text-white">{story.name}</p>
                    <p className="text-gray-500 text-sm mb-3">{story.location}</p>
                    <p className="text-gray-400">{story.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="font-display text-3xl text-white text-center mt-12 mb-6">Your Story Belongs Here.</h2>
          <p className="text-gray-400 text-center mb-8">What you faced. Why you signed. What you want Congress to do. Submit below. Your words become the reason the next person signs.</p>
          
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-condensed mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 rounded-lg bg-[#111d35] border border-[#3ddc84]/30 text-white focus:outline-none focus:border-[#3ddc84]"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-condensed mb-2">State / District</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                  className="w-full p-3 rounded-lg bg-[#111d35] border border-[#3ddc84]/30 text-white focus:outline-none focus:border-[#3ddc84]"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-condensed mb-2">Your story — 2 to 3 sentences</label>
                <textarea
                  rows={4}
                  value={formData.story}
                  onChange={(e) => setFormData({...formData, story: e.target.value})}
                  className="w-full p-3 rounded-lg bg-[#111d35] border border-[#3ddc84]/30 text-white focus:outline-none focus:border-[#3ddc84]"
                  required
                />
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">SUBMIT YOUR STORY</button>
            </form>
          </div>
          
          <div className="text-center mt-12">
            <p className="font-condensed text-lg text-gray-400 mb-4">Every story is a brick. Every district that hits 1,500 forces a public response.</p>
            <Link href="/petition" className="inline-block px-6 py-3 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ ADD MY NAME</Link>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
