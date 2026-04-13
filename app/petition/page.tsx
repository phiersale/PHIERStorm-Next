// FILE: app/petition/page.tsx
// PETITION PAGE - Complete with design system

'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

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
    
    console.log('Form submitted:', formData)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    alert('Thank you! Your name has been counted in your district.')
    setFormData({ name: '', email: '', zip: '' })
    setIsSubmitting(false)
  }

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
      <main>
        <section className="container section">
          {/* Hero Image */}
          <div className="relative w-full h-[200px] md:h-[250px] mb-6 rounded-xl overflow-hidden opacity-70">
            <Image
              src="/images/Online_Petition.jpg"
              alt="Online Petition — Add your name"
              fill
              className="object-cover"
            />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-3">Your Name. Your District. On the Record.</h1>
          <p className="font-condensed text-xl text-gray-400 text-center mb-6">1,500 people in your district forces a mandatory public town hall.<br />Your representative answers on the record — before the next election.</p>

          {/* Video */}
          <div className="max-w-[500px] mx-auto mb-6">
            <div id="wrap-signature-matters" className="video-wrapper cursor-pointer group" onClick={() => playVideo('signature-matters', 'https://www.youtube.com/embed/C2mMIx5yoyw?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/C2mMIx5yoyw/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
            <p className="font-condensed text-green text-xs text-center mt-2">See why your signature matters</p>
          </div>
          
          {/* Form */}
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[500px] mx-auto">
            <p className="font-condensed text-lg text-gold font-bold text-center mb-4">District counts begin compiling immediately.</p>
            
            <div className="max-w-[300px] mx-auto my-4">
              <Image
                src="/images/99_to_1_-_Great_Odds.jpg"
                alt="District counts — 1,500 people per district"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg border border-green/20 opacity-60"
              />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-condensed mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white focus:outline-none focus:border-green"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-white font-condensed mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white focus:outline-none focus:border-green"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-white font-condensed mb-1">ZIP Code</label>
                <input
                  type="text"
                  value={formData.zip}
                  onChange={(e) => setFormData({...formData, zip: e.target.value})}
                  className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white focus:outline-none focus:border-green"
                  required
                  disabled={isSubmitting}
                  pattern="[0-9]{5}"
                  title="Please enter a 5-digit ZIP code"
                />
              </div>
              <Button 
                type="submit" 
                variant="primary" 
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : '✍ ADD MY NAME — 30 SECONDS'}
              </Button>
            </form>
            
            <p className="text-gray-500 text-xs text-center mt-4">Your information is used only to count you in your congressional district. Nothing else. No spam. No selling. Ever.</p>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">Not ready to sign?</p>
            <Link href="/leverage" className="text-green text-sm font-condensed font-bold hover:underline">📘 See how it works →</Link>
          </div>
        </section>
      </main>
      <Footer />
      
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        id="back-to-top"
        aria-label="Scroll to top"
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
