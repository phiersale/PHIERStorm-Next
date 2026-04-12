'use client'

import { useState } from 'react'
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

  // Sample stories - replace with your original 7 testimonials
  const stories = [
    { name: 'Maria', location: 'Healthcare worker, TX', story: 'My family member can\'t afford insurance. PHIERS gives us hope AND a plan. This is how we win.' },
    { name: 'James', location: 'Small business owner, OH', story: 'I was skeptical at first. Then I saw the math. $600 vs $10,000. That\'s not politics. That\'s survival.' },
    { name: 'Aisha', location: 'Union organizer, NY', story: 'The math is undeniable. When 12 million of us get organized, Congress has no choice.' },
    { name: 'Tom', location: 'Veteran, CA', story: 'The VA left my brothers behind. PHIERS won\'t.' },
    { name: 'Rosa', location: 'Parent, AZ', story: 'I signed for my kids. They deserve a country that works.' },
    { name: 'Derek', location: 'Teacher, IL', story: 'Healthcare costs were eating my paycheck. PHIERS changes that.' },
    { name: 'Lena', location: 'Student, FL', story: 'This is the first thing that actually makes sense.' },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Real people.<br /><span className="text-[#3ddc84]">Real pressure.</span><br />Real change.</h1>
          <p className="text-gray-400 text-center mb-12">These aren't talking points. These are people — in districts across the country — who signed because they ran out of reasons not to. Every story strengthens the district count.</p>
          
          <div className="space-y-6 mb-12">
            {stories.map((story, idx) => (
              <div key={idx} className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6">
                <p className="font-condensed font-bold text-white">{story.name}</p>
                <p className="text-gray-500 text-sm mb-3">{story.location}</p>
                <p className="text-gray-400">{story.story}</p>
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
              <button type="submit" className="w-full py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">SUBMIT YOUR STORY</button>
            </form>
          </div>
          
          <div className="text-center mt-12">
            <p className="font-condensed text-lg text-gray-400 mb-4">Every story is a brick. Every district that hits 1,500 forces a public response.</p>
            <Link href="/petition" className="inline-block px-8 py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ ADD MY NAME</Link>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
