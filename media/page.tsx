// app/media/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function MediaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [willModalOpen, setWillModalOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const videos = [
    { title: 'The Bipartisan Solution', duration: '11:11', url: 'https://youtu.be/bEUyDVAYwpk', desc: 'Complete framework' },
    { title: 'The Math Congress Doesn\'t Want You to See', duration: '1:11', url: 'https://youtu.be/2j-dF3hgdeE', desc: 'Core concept explained' },
    { title: 'The Mechanism', duration: '3:33', url: 'https://youtu.be/jMU6LKEBzbs', desc: 'How $2.73T savings work' },
    { title: 'The Moment', duration: '2:22', url: 'https://youtu.be/eE-TxvI0d4Q', desc: 'Why Congress created this crisis' },
    { title: 'The Vision', duration: '4:44', url: 'https://youtu.be/xy3F9ZWbgS8', desc: 'What happens after we win' },
    { title: 'Union Power - Mamdani Strategy', duration: '9:15', url: 'https://vimeo.com/1157760069', desc: 'Why unions will win this fight' },
    { title: 'Pathos Communications Validation', duration: 'DRAFT', url: 'https://youtu.be/KLu7USN_dao', desc: 'Why major media outlets want this story' },
  ]

  const infographics = [
    '$2.73T Savings Infographic — All dimensions connected',
    'PHIERS Rubik\'s Cube (Symbols) — 5D interconnection visual',
    'PHIERS Operating System (Firewall) — Protection against extraction',
    '80/20 Healthcare Model — Telehealth vs Insurance costs',
    'Drug Development Costs (Academic vs Big Pharma) — Why alternatives work',
    'Power of the People (Leverage) — Congressional pressure math',
    'Guaranteed Change (Map) — 3.5% = 11.6M signatures',
    'Healthcare Crisis — 22M losing coverage',
  ]

  const guides = [
    { title: 'National PHIERS Initiative', desc: '$2.73T savings' },
    { title: 'California PHIERS Initiative', desc: '$110B+ annual savings' },
    { title: 'Maryland PHIERS Initiative', desc: '$17B+ annual savings' },
    { title: 'NYC PHIERS Initiative', desc: '$55B+ annual savings' },
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/95 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">PHIERS.org</Link>
        <div className="flex items-center gap-4">
          <Link href="/petition" className="hidden md:inline-block px-5 py-2 bg-red-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl p-2 border border-white/20 rounded-lg">{mobileMenuOpen ? '✕' : '☰'}</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="fixed top-16 left-0 right-0 bg-[#0d1525] border-b border-[#3ddc84]/20 z-40 p-5 max-h-[calc(100vh-64px)] overflow-y-auto" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="space-y-4">
              <Link href="/no-war" className="block p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 font-condensed font-bold text-center" onClick={() => setMobileMenuOpen(false)}>🕊 END THE WAR / NO DRAFT</Link>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Understand the Fight</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/crisis" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🚨 The Crisis</Link><Link href="/simple-math" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📊 Simple Math</Link><Link href="/how-it-works" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>⚡ The Leverage</Link><Link href="/solutions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🔬 5D Solutions</Link><Link href="/telecare" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💡 TeleCARE</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Who We're For</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/organizers" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>✊ For Organizers</Link><Link href="/veterans" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>🎖 Veterans</Link><Link href="/unions" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💪 Union Strategy</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Resources</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/resources" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📚 Resource Hub</Link><Link href="/real-stories" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💬 Real Stories</Link><Link href="/media" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📺 Media</Link><Link href="/faq" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>❓ FAQ</Link><Link href="/about" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📖 About</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Take Action</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/petition" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📋 Sign the Petition</Link><Link href="/donate" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💚 Donate</Link><Link href="/action" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📣 Take Action</Link></div>
              </details>
              <Link href="/petition" className="block w-full py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-center rounded-lg mt-4" onClick={() => setMobileMenuOpen(false)}>✍ Sign Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20 pb-16 max-w-[900px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4"><Link href="/"><Image src="/images/PHIERS_Logo.png" alt="PHIERS Logo" width={100} height={100} className="opacity-90" /></Link></div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#3ddc84] mb-3">Media Library: All Resources in One Place</h1>
          <p className="text-gray-400 text-lg">Videos, infographics, state guides, and validation documents</p>
        </div>

        {/* Video Section */}
        <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-6 my-8">
          <h2 className="font-display text-2xl md:text-3xl text-blue-400 text-center mb-4">The Math Congress Doesn't Want You to See</h2>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/2j-dF3hgdeE" title="The Math Congress Fears — PHIERS Explainer" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
          </div>
          <p className="text-center text-blue-400 font-bold mt-4">1 minute 11 seconds. This is why they're terrified.</p>
        </div>

        {/* Core Videos */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-6">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">Core Videos</h2>
          <div className="space-y-3">
            {videos.map((video, i) => (
              <div key={i} className="border-b border-white/10 pb-2 last:border-0">
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-[#3ddc84] hover:underline font-semibold">{video.title} ({video.duration})</a>
                <p className="text-gray-400 text-sm">{video.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Infographics */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-6">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">Key Infographics</h2>
          <p className="text-gray-400 mb-4">All graphics available in project repository. Links to full collection:</p>
          <ul className="space-y-2">
            {infographics.map((item, i) => (
              <li key={i} className="text-gray-300 text-sm before:content-['•'] before:text-[#3ddc84] before:mr-2">{item}</li>
            ))}
          </ul>
        </div>

        {/* State Implementation Guides */}
        <div className="bg-[#111d35]/90 border-l-4 border-[#3ddc84] rounded-r-lg p-6 md:p-8 my-6">
          <h2 className="font-display text-2xl md:text-3xl text-[#3ddc84] mb-4">State Implementation Guides</h2>
          <ul className="space-y-2 mb-4">
            {guides.map((guide, i) => (
              <li key={i} className="text-gray-300"><strong className="text-white">{guide.title}</strong> — {guide.desc}</li>
            ))}
          </ul>
          <Link href="/resources" className="text-[#3ddc84] hover:underline">→ Access all white papers</Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-12 px-6 border-t border-[#3ddc84]/10 bg-[#0d1525]">
        <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-70" />
        <div className="font-condensed font-bold text-gray-400 mb-1">PHIERS is a people's movement — not a company, not a product.</div>
        <div className="text-sm text-gray-500 mb-4">Built by regular people who are done waiting.</div>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-6">
          <Link href="/crisis" className="text-gray-500 text-sm hover:text-[#3ddc84]">The Crisis</Link>
          <Link href="/simple-math" className="text-gray-500 text-sm hover:text-[#3ddc84]">Simple Math</Link>
          <Link href="/solutions" className="text-gray-500 text-sm hover:text-[#3ddc84]">5D Solutions</Link>
          <Link href="/telecare" className="text-gray-500 text-sm hover:text-[#3ddc84]">Telehealth</Link>
          <Link href="/no-war" className="text-gray-500 text-sm hover:text-[#3ddc84]">No War / No Draft</Link>
          <Link href="/organizers" className="text-gray-500 text-sm hover:text-[#3ddc84]">Organizers</Link>
          <Link href="/unions" className="text-gray-500 text-sm hover:text-[#3ddc84]">Unions</Link>
          <Link href="/donate" className="text-gray-500 text-sm hover:text-[#3ddc84]">Donate</Link>
          <Link href="/faq" className="text-gray-500 text-sm hover:text-[#3ddc84]">FAQ</Link>
          <Link href="/about" className="text-gray-500 text-sm hover:text-[#3ddc84]">About</Link>
        </div>
        <div className="text-xs text-gray-600">
          PHIERS is a public-interest movement — not a company, not a product. The only thing missing is you.<br />
          📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a> · 📞 (916) 306-8967<br />
          © PHIERS.org — Original Concept Since 2009
        </div>
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>

      {/* Will Price Modal */}
      <AnimatePresence>
        {willModalOpen && (
          <motion.div className="fixed inset-0 bg-black/90 z-[99998] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setWillModalOpen(false)}>
            <div className="relative max-w-[720px] w-full bg-[#080d1a]/97 border-2 border-[#3ddc84]/35 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setWillModalOpen(false)} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#111d35] text-[#3ddc84] border-2 border-[#3ddc84] flex items-center justify-center text-xl hover:bg-[#3ddc84] hover:text-[#111d35] transition-all z-10">✕</button>
              <div className="flex flex-wrap">
                <div className="w-full md:w-[240px] min-h-[280px] overflow-hidden"><img src="/images/Will_Price.png" alt="Will Price" className="w-full h-full min-h-[260px] object-cover object-[55%_top]" /></div>
                <div className="flex-1 min-w-[240px] p-7 flex flex-col justify-center">
                  <p className="font-condensed text-xs text-[#3ddc84] uppercase tracking-[3px] mb-2">The Architect</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1">Will Price</h3>
                  <p className="font-condensed text-sm text-[#ffd60a] font-bold mb-4">Founder &amp; Chief Solutions Architect, PHIERS</p>
                  <p className="font-body text-sm text-[#c8d8c8] leading-relaxed">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending — and built the lever to redirect it toward healthcare, jobs, and a monthly check for every American. Building this since 2009.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-condensed { font-family: 'Barlow Condensed', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }
        details summary { list-style: none; }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  )
}
