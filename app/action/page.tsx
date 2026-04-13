'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function ActionPage() {
  const [copySuccess, setCopySuccess] = useState(false)

  const copyPetitionLink = () => {
    navigator.clipboard.writeText('https://phiers.org/petition')
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  const shareText = "I just added my name to PHIERS — a district-level pressure system that forces Congress to respond. Add your name: https://phiers.org/petition"

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://phiers.org/petition')}&quote=${encodeURIComponent(shareText)}`, '_blank')
  }

  const shareOnX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank')
  }

  const shareViaText = () => {
    window.open(`sms:?body=${encodeURIComponent(shareText)}`, '_blank')
  }

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=I just added my name to PHIERS&body=${encodeURIComponent(shareText)}`
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Your Name Is Leverage.<br /><span className="text-[#3ddc84]">Here's What To Do With It.</span></h1>
          
          <p className="text-gray-400 text-center mb-6">Not everyone organizes. Not everyone donates.</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold text-center mb-8">Everyone can multiply pressure.</p>
          
          <p className="text-gray-400 text-center mb-3">You don't need millions of people.</p>
          <p className="text-gray-400 text-center mb-3">You need enough people — in the same place — at the same time.</p>
          <p className="text-gray-400 text-center mb-6">That's how pressure forms. That's how Congress responds.</p>
          
          <div className="border-t border-[#3ddc84]/20 my-8 pt-8 text-center">
            <p className="text-gray-400 text-lg mb-3">Nothing changes until ignoring people costs more than responding to them.</p>
            <p className="font-condensed text-2xl text-[#3ddc84] font-bold">This is how you raise that cost.</p>
          </div>
          
          {/* STEP 1 — BE COUNTED */}
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8 my-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-lg">1</div>
              <h2 className="font-display text-2xl text-white">BE COUNTED</h2>
            </div>
            <p className="text-gray-400 mb-3">Add your name to your district.</p>
            <p className="text-gray-400 mb-3">Not symbolic. Not a comment.</p>
            <p className="text-gray-400 mb-6">A number tied to your representative. That's where pressure starts.</p>
            <Link href="/petition" className="inline-block px-8 py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ ADD MY NAME</Link>
          </div>
          
          {/* STEP 2 — MULTIPLY THE COUNT */}
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8 my-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-lg">2</div>
              <h2 className="font-display text-2xl text-white">MULTIPLY THE COUNT</h2>
            </div>
            <p className="text-gray-400 mb-3">One person becomes twelve.</p>
            <p className="text-gray-400 mb-6">Most people already agree. They just haven't been counted yet.</p>
            <p className="font-condensed text-lg text-white font-bold mb-4">Every share brings your district closer to the 1,500-person tipping point Congress cannot ignore.</p>
            
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6 my-6">
              <p className="text-gray-300 text-sm mb-4">Share this:</p>
              <div className="bg-[#080d1a] p-3 rounded-lg mb-3">
                <p className="text-gray-400 text-xs">I just added my name to PHIERS — a district-level pressure system that forces Congress to respond.</p>
                <p className="text-[#3ddc84] text-xs mt-1">Add your name: https://phiers.org/petition</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button onClick={copyPetitionLink} className="px-4 py-2 bg-[#3ddc84] text-[#080d1a] rounded-lg font-condensed font-bold text-sm hover:bg-[#2ab568] transition-all">
                  📣 {copySuccess ? 'Copied!' : 'Copy Link'}
                </button>
                <button onClick={shareOnFacebook} className="px-4 py-2 bg-[#1877f2] text-white rounded-lg font-condensed font-bold text-sm hover:opacity-90 transition-all">Facebook</button>
                <button onClick={shareOnX} className="px-4 py-2 bg-black text-white rounded-lg font-condensed font-bold text-sm hover:bg-gray-800 transition-all">X</button>
                <button onClick={shareViaText} className="px-4 py-2 bg-[#34b7f1] text-white rounded-lg font-condensed font-bold text-sm hover:opacity-90 transition-all">Text</button>
                <button onClick={shareViaEmail} className="px-4 py-2 bg-gray-600 text-white rounded-lg font-condensed font-bold text-sm hover:bg-gray-500 transition-all">Email</button>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">Send to:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-xs text-gray-500 bg-[#111d35] px-3 py-1 rounded-full">→ Friends</span>
              <span className="text-xs text-gray-500 bg-[#111d35] px-3 py-1 rounded-full">→ Family</span>
              <span className="text-xs text-gray-500 bg-[#111d35] px-3 py-1 rounded-full">→ Coworkers</span>
              <span className="text-xs text-gray-500 bg-[#111d35] px-3 py-1 rounded-full">→ Group chats</span>
              <span className="text-xs text-gray-500 bg-[#111d35] px-3 py-1 rounded-full">→ Anyone tired of nothing changing</span>
            </div>
            <p className="text-gray-500 text-xs mt-4">Not to convince them. To count them.</p>
          </div>
          
          {/* STEP 3 — ORGANIZE YOUR DISTRICT */}
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8 my-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-lg">3</div>
              <h2 className="font-display text-2xl text-white">ORGANIZE YOUR DISTRICT</h2>
            </div>
            <p className="text-gray-400 mb-3">Sharing builds momentum. Organization converts it into pressure.</p>
            <p className="text-gray-400 mb-6">Every district needs people turning names into accountability. That's how 1,500 happens. That's how representatives are forced to respond.</p>
            <p className="font-condensed text-lg text-[#3ddc84] font-bold mb-4">If you're willing to step up — we'll connect you directly.</p>
            <Link href="/organizers" className="inline-block px-8 py-4 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">✊ ORGANIZE YOUR DISTRICT</Link>
          </div>
          
          {/* WHAT HAPPENS NEXT */}
          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-xl p-6 my-8">
            <h2 className="font-display text-2xl text-white mb-4">What Happens Next</h2>
            <p className="text-gray-400 mb-2">As district counts grow:</p>
            <p className="text-gray-400 mb-2">→ Thresholds get hit</p>
            <p className="text-gray-400 mb-2">→ Representatives get called out</p>
            <p className="text-gray-400 mb-2">→ Public accountability events get triggered</p>
            <p className="text-gray-400 mb-4">→ Pressure becomes unavoidable</p>
            <p className="font-condensed text-lg text-[#3ddc84] font-bold">This is not awareness. This is coordination.</p>
          </div>
          
          {/* THE CASCADE */}
          <div className="text-center my-12">
            <p className="font-display text-2xl text-[#ffd60a] mb-3">One becomes twelve.</p>
            <p className="font-display text-2xl text-[#ffd60a] mb-3">Twelve become 148.</p>
            <p className="font-display text-2xl text-[#ffd60a] mb-6">148 become 1,825.</p>
            <p className="text-gray-400 mb-3">It doesn't spread randomly. It builds where it matters.</p>
            <p className="font-condensed text-xl text-white font-bold mb-2">District by district.</p>
            <p className="font-condensed text-lg text-[#3ddc84] font-bold">That's why it works.</p>
          </div>
          
          {/* FINAL CTA */}
          <div className="bg-[#0a1628] border-2 border-[#3ddc84] rounded-xl p-8 text-center mt-8">
            <p className="font-condensed text-lg text-[#ffd60a] font-bold mb-4">District counts begin compiling immediately.</p>
            <p className="text-white text-lg mb-2">Your name.</p>
            <p className="text-white text-lg mb-2">Your district.</p>
            <p className="text-white text-lg mb-6">On the record.</p>
            <p className="text-gray-400 mb-6">Counted. Delivered. Impossible to ignore.</p>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Link href="/petition" className="px-8 py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ BE COUNTED</Link>
              <Link href="/organizers" className="px-8 py-4 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">✊ I ORGANIZE</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
