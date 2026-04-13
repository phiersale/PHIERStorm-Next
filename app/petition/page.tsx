'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function PetitionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zip: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Handle form submission - integrate with your backend
    console.log('Form submitted:', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    
    alert('Thank you! Your name has been counted in your district.')
    setFormData({ name: '', email: '', zip: '' })
    setIsSubmitting(false)
  }

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const playVideo = (videoId: string, src: string) => {
    const wrap = document.getElementById('wrap-' + videoId)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          
          {/* SUBTLE HERO IMAGE */}
          <div className="relative w-full h-[200px] md:h-[250px] mb-8 rounded-xl overflow-hidden opacity-70">
            <Image
              src="/images/Online_Petition.jpg"
              alt="Online Petition — Add your name"
              fill
              className="object-cover"
            />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Your Name. Your District. On the Record.</h1>
          <p className="font-condensed text-xl text-gray-400 text-center mb-8">1,500 people in your district forces a mandatory public town hall.<br />Your representative answers on the record — before the next election.</p>

          {/* VIDEO: See why your signature matters */}
          <div className="max-w-[500px] mx-auto mb-6">
            <div id="wrap-signature-matters" className="relative aspect-video rounded-xl overflow-hidden border border-[#3ddc84]/20 cursor-pointer group" onClick={() => playVideo('signature-matters', 'https://www.youtube.com/embed/C2mMIx5yoyw?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/C2mMIx5yoyw/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
            <p className="font-condensed text-[#3ddc84] text-xs text-center mt-2">See why your signature matters</p>
          </div>
          
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8">
            <p className="font-condensed text-lg text-[#ffd60a] font-bold text-center mb-6">District counts begin compiling immediately.</p>
            
            {/* DISTRICT COUNT VISUAL */}
            <div className="my-6 max-w-[300px] mx-auto">
              <Image
                src="/images/99_to_1_-_Great_Odds.jpg"
                alt="District counts — 1,500 people per district"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg border border-[#3ddc84]/20 opacity-60"
              />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-condensed mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 rounded-lg bg-[#111d35] border border-[#3ddc84]/30 text-white focus:outline-none focus:border-[#3ddc84]"
                  required
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  pattern="[0-9]{5}"
                  title="Please enter a 5-digit ZIP code"
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : '✍ ADD MY NAME — 30 SECONDS'}
              </button>
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
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  )
}
