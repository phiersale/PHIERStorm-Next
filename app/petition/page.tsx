'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function PetitionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zip: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with your backend
    console.log('Form submitted:', formData)
    alert('Thank you! Your name has been counted in your district.')
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Your Name. Your District. On the Record.</h1>
          <p className="font-condensed text-xl text-gray-400 text-center mb-8">1,500 people in your district forces a mandatory public town hall.<br />Your representative answers on the record — before the next election.</p>
          
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8">
            <p className="font-condensed text-lg text-[#ffd60a] font-bold text-center mb-6">District counts begin compiling immediately.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-condensed mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 rounded-lg bg-[#111d35] border border-[#3ddc84]/30 text-white focus:outline-none focus:border-[#3ddc84]"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-condensed mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 rounded-lg bg-[#111d35] border border-[#3ddc84]/30 text-white focus:outline-none focus:border-[#3ddc84]"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-condensed mb-2">ZIP Code</label>
                <input
                  type="text"
                  value={formData.zip}
                  onChange={(e) => setFormData({...formData, zip: e.target.value})}
                  className="w-full p-3 rounded-lg bg-[#111d35] border border-[#3ddc84]/30 text-white focus:outline-none focus:border-[#3ddc84]"
                  required
                />
              </div>
              <button type="submit" className="w-full py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ ADD MY NAME — 30 SECONDS</button>
            </form>
            
            <p className="text-gray-500 text-sm text-center mt-6">Your information is used only to count you in your congressional district. Nothing else. No spam. No selling. Ever.</p>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">Not ready to sign?</p>
            <Link href="/leverage" className="text-[#3ddc84] text-sm font-condensed font-bold hover:underline">📘 See how it works →</Link>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
