// app/resources/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function ResourcesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [willModalOpen, setWillModalOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  // Video data
  const videos = [
    { title: 'The Bipartisan Solution', duration: '11:11', url: 'https://youtu.be/bEUyDVAYwpk' },
    { title: 'The Math Congress Fears', duration: '1:11', url: 'https://youtu.be/2j-dF3hgdeE' },
    { title: 'The Mechanism', duration: '3:33', url: 'https://youtu.be/jMU6LKEBzbs' },
    { title: 'The Moment', duration: '2:22', url: 'https://youtu.be/eE-TxvI0d4Q' },
    { title: 'The Vision', duration: '4:44', url: 'https://youtu.be/xy3F9ZWbgS8' },
    { title: 'Union Power – Mamdani Strategy', duration: '9:15', url: 'https://vimeo.com/1157760069' },
    { title: 'Pathos Communications Validation', duration: 'DRAFT', url: 'https://youtu.be/KLu7USN_dao' },
    { title: 'A Bold Counterplan — Erica Chenoweth', duration: '3.5% Rule', url: 'https://youtu.be/faF7-En6NWU?si=2IJKzxBfdE0DUD3p&t=312', desc: 'Harvard researcher explains why 3.5% organized is all it takes.' },
    { title: 'The Right Thing at the Right Time', duration: 'Why this moment matters', url: 'https://youtu.be/5KE0JV5hQcs?si=_EoEvzR9K9gU4PnG' },
  ]

  const guides = [
    { title: 'National PHIERS Initiative', desc: '$2.73 trillion annual savings. Complete national framework and Fight Club strategy.', url: 'https://docs.google.com/document/d/1LBnU4KCgnWEuc7fLYU9nYAAtlpZ6wYSm880INmey4NI/edit?usp=sharing' },
    { title: 'California PHIERS Initiative', desc: '$110+ billion annual savings. Bicoastal leadership with Maryland.', url: 'https://docs.google.com/document/d/17abpDTOkbqLjE4BYVye33K7degdkurJBd8Wy--U37jo/edit?usp=sharing' },
    { title: 'Maryland PHIERS Initiative', desc: '$17+ billion annual savings. Congressman Van Hollen\'s vision.', url: 'https://docs.google.com/document/d/1IQdyc4g-PAO50pb_MZOdaTrmsIp7XbxIZjQN_-xHShY/edit?usp=sharing' },
    { title: 'NYC PHIERS Initiative', desc: '$55+ billion annual savings. Urban proof-of-concept.', url: 'https://docs.google.com/document/d/1yMl0kHRmxSCCGdmR8NweSJ6oJS3KPYIjqogmQ4PbSk8/edit?usp=sharing' },
  ]

  const letters = [
    { title: 'Grassroots Organizers', audience: 'Indivisible · No Kings · MoveOn', desc: 'PHIERS gives your organizing infrastructure economic backing. 9 crises solved simultaneously.' },
    { title: 'Union Leaders', audience: 'AFL-CIO · SEIU · AFSCME · IBEW', desc: 'Strengthens union power. $7,900+ saved per member, 2M new union-eligible jobs.' },
    { title: 'Elected Officials', audience: 'Senators · House members · Governors', desc: 'At 3.5%, $1.95B+ per district leverage — 230:1 advantage over corporate lobbying.' },
    { title: 'Civic Law Centers', audience: 'ACLU · NAACP Legal Defense Fund', desc: 'Legal partnership for trademark defense, cooperative structure, civil rights integration.' },
    { title: 'State & Local Leaders', audience: 'Treasurers · Mayors · City councils', desc: 'States can implement without Congress. California + Maryland bicoastal pilot.' },
    { title: 'Healthcare Innovators', audience: 'Telemedicine · Health systems · Tech', desc: 'Your platforms validated at scale. Cooperative partnership, not competition.' },
  ]

  const visuals = [
    { title: '$2.73T Savings Infographic', desc: 'All dimensions connected. Annual savings breakdown.' },
    { title: 'PHIERS Rubik\'s Cube', desc: '5-dimensional interconnection visual.' },
    { title: '80/20 Healthcare Model', desc: 'Telehealth vs Insurance cost comparison.' },
    { title: 'Drug Development Costs', desc: 'Academic vs Big Pharma — why alternatives work.' },
    { title: 'Power of the People', desc: 'Congressional pressure math. 230:1 advantage.' },
    { title: 'Guaranteed Change Map', desc: '3.5% = 11.6M signatures.' },
  ]

  const faqs = [
    { q: 'Is this realistic?', a: 'Yes — because it\'s based on math, not hope. Telehealth is already cheaper and faster. Universal healthcare already saves $2.73T. UBI is funded by redirecting waste, not raising taxes.' },
    { q: 'Why telehealth first?', a: 'Because it\'s the first domino. Telehealth is 10x cheaper, instantly scalable, already working, already nationwide. Once telehealth is authorized, the entire 5D cascade becomes possible.' },
    { q: 'Why 3.5%?', a: 'Harvard research (Erica Chenoweth) shows that when 3.5% of a population organizes, systemic change becomes guaranteed, peaceful, and inevitable. For the U.S., that\'s 11.6 million people.' },
    { q: 'Is this partisan?', a: 'No. Healthcare, stability, jobs, and democracy are not partisan issues. They\'re human issues. This movement includes conservatives, liberals, independents, and apolitical Americans.' },
    { q: 'How is this funded?', a: 'Through the $2.73 trillion we\'re already wasting. No new taxes. No new agencies. Just redirecting money from insurance profits to universal coverage.' },
    { q: 'What if Congress still refuses?', a: 'Then we replace them — peacefully, legally, and at scale. Primaries, general elections, district-level mobilization. No violence. Just organized civic power.' },
  ]

  const toolkits = [
    { title: 'Talking Points by Audience', desc: 'Customize PHIERS messaging for organizers, unions, elected officials, media.' },
    { title: 'Social Media Toolkit', desc: 'Pre-written posts for LinkedIn, Facebook, Twitter. Graphics & hashtags included.' },
    { title: 'Partnership Framework', desc: 'How to collaborate with PHIERS. Governance, benefit-sharing, legal integration.' },
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
                <div className="space-y-2 pl-4 mt-2"><Link href="/resources" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📚 Resource Hub</Link><Link href="/faq" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>❓ FAQ</Link><Link href="/about" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📖 About</Link></div>
              </details>
              <details className="border-b border-white/10 pb-2"><summary className="font-condensed font-bold text-white py-2 cursor-pointer list-none">Take Action</summary>
                <div className="space-y-2 pl-4 mt-2"><Link href="/petition" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📋 Sign the Petition</Link><Link href="/donate" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💚 Donate</Link><Link href="/action" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📣 Take Action</Link></div>
              </details>
              <Link href="/petition" className="block w-full py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold text-center rounded-lg mt-4" onClick={() => setMobileMenuOpen(false)}>✍ Sign Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20 pb-16 max-w-[1000px] mx-auto px-6">
        {/* HERO */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6"><Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="opacity-85" /></div>
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">One place. Everything you need.</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-4">PHIERS <span className="text-[#3ddc84]">Resource Hub</span></h1>
          <p className="text-gray-400 text-lg max-w-[700px] mx-auto">State guides, audience letters, videos, infographics, FAQ — all in one place. Download, share, organize.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* VIDEO LIBRARY */}
        <section className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 border-b-2 border-[#3ddc84]/30 pb-3">🎥 <span className="text-[#3ddc84]">Video Library</span></h2>
          <details className="bg-[#0d1525] border border-[#3ddc84]/20 rounded-lg mb-3">
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-[#3ddc84]/5 rounded-lg">Core explainers & deep dives <span className="bg-[#3ddc84]/15 text-[#3ddc84] text-xs font-semibold px-2 py-0.5 rounded-full ml-2">{videos.length} videos</span></summary>
            <div className="p-5">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((video, i) => (
                  <div key={i} className="bg-[#0a1628] rounded-lg p-4 border border-[#3ddc84]/10">
                    <div className="font-bold text-white mb-0.5">{video.title}</div>
                    <div className="text-gray-500 text-xs mb-2">{video.duration}</div>
                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-[#3ddc84] text-sm font-semibold">Watch →</a>
                    {video.desc && <p className="text-gray-500 text-xs mt-2">{video.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        {/* IMPLEMENTATION GUIDES */}
        <section className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 border-b-2 border-[#3ddc84]/30 pb-3">📋 <span className="text-[#3ddc84]">Implementation Guides</span></h2>
          <details className="bg-[#0d1525] border border-[#3ddc84]/20 rounded-lg mb-3">
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-[#3ddc84]/5 rounded-lg">State & national white papers <span className="bg-[#3ddc84]/15 text-[#3ddc84] text-xs font-semibold px-2 py-0.5 rounded-full ml-2">4 guides</span></summary>
            <div className="p-5">
              <div className="grid md:grid-cols-2 gap-5">
                {guides.map((guide, i) => (
                  <div key={i} className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 hover:border-[#3ddc84] transition-all">
                    <h4 className="font-condensed font-bold text-xl text-[#3ddc84] mb-2">{guide.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{guide.desc}</p>
                    <a href={guide.url} target="_blank" rel="noopener noreferrer" className="text-[#3ddc84] font-semibold">Read White Paper →</a>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        {/* AUDIENCE LETTERS */}
        <section className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 border-b-2 border-[#3ddc84]/30 pb-3">✍️ <span className="text-[#3ddc84]">Audience-Specific Letters</span></h2>
          <p className="text-gray-400 text-sm mb-4">Tailored explanations of PHIERS for different constituencies. Each letter emphasizes our 5-dimensional approach.</p>
          <details className="bg-[#0d1525] border border-[#3ddc84]/20 rounded-lg mb-3">
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-[#3ddc84]/5 rounded-lg">Download letters by audience <span className="bg-[#3ddc84]/15 text-[#3ddc84] text-xs font-semibold px-2 py-0.5 rounded-full ml-2">6 templates</span></summary>
            <div className="p-5">
              <div className="grid md:grid-cols-2 gap-4">
                {letters.map((letter, i) => (
                  <div key={i} className="bg-[#111d35] border-l-3 border-l-[#3ddc84] rounded-r-lg p-4">
                    <h5 className="font-condensed font-bold text-lg text-white mb-1">{letter.title}</h5>
                    <div className="text-[#3ddc84] text-xs uppercase tracking-wide mb-2">{letter.audience}</div>
                    <p className="text-gray-400 text-sm mb-3">{letter.desc}</p>
                    <a href="mailto:info@phiers.org" className="text-[#3ddc84] font-semibold text-sm">Request letter →</a>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        {/* VISUAL RESOURCES */}
        <section className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 border-b-2 border-[#3ddc84]/30 pb-3">🖼️ <span className="text-[#3ddc84]">Visual Resources</span></h2>
          <details className="bg-[#0d1525] border border-[#3ddc84]/20 rounded-lg mb-3">
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-[#3ddc84]/5 rounded-lg">Infographics & shareable assets <span className="bg-[#3ddc84]/15 text-[#3ddc84] text-xs font-semibold px-2 py-0.5 rounded-full ml-2">6 assets</span></summary>
            <div className="p-5">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {visuals.map((visual, i) => (
                  <div key={i} className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 hover:border-[#3ddc84] transition-all">
                    <h4 className="font-condensed font-bold text-lg text-[#3ddc84] mb-2">{visual.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{visual.desc}</p>
                    <a href="mailto:info@phiers.org" className="text-[#3ddc84] font-semibold">Request →</a>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 border-b-2 border-[#ffd60a]/30 pb-3">❓ <span className="text-[#ffd60a]">Frequently Asked Questions</span></h2>
          <details className="bg-[#0d1525] border border-[#3ddc84]/20 rounded-lg mb-3">
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-[#3ddc84]/5 rounded-lg">Clear answers. No jargon. <span className="bg-[#ffd60a]/15 text-[#ffd60a] text-xs font-semibold px-2 py-0.5 rounded-full ml-2">6 Q&amp;A</span></summary>
            <div className="p-5">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-[#111d35] border-l-3 border-l-[#ffd60a] rounded-r-lg p-4 mb-3">
                  <div className="font-condensed font-bold text-lg text-white mb-1">{faq.q}</div>
                  <p className="text-gray-400 text-sm">{faq.a}</p>
                </div>
              ))}
              <p className="text-right mt-4"><Link href="/faq" className="text-[#3ddc84]">View full FAQ →</Link></p>
            </div>
          </details>
        </section>

        {/* ADDITIONAL TOOLKITS */}
        <section className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 border-b-2 border-[#3ddc84]/30 pb-3">📚 <span className="text-[#3ddc84]">Additional Toolkits</span></h2>
          <details className="bg-[#0d1525] border border-[#3ddc84]/20 rounded-lg mb-3" open>
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-[#3ddc84]/5 rounded-lg">Resources for deeper organizing <span className="bg-[#3ddc84]/15 text-[#3ddc84] text-xs font-semibold px-2 py-0.5 rounded-full ml-2">3 toolkits</span></summary>
            <div className="p-5">
              <div className="grid md:grid-cols-3 gap-4">
                {toolkits.map((toolkit, i) => (
                  <div key={i} className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 hover:border-[#3ddc84] transition-all">
                    <h4 className="font-condensed font-bold text-lg text-[#3ddc84] mb-2">{toolkit.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{toolkit.desc}</p>
                    <a href="mailto:info@phiers.org" className="text-[#3ddc84] font-semibold">Request →</a>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* FINAL CTA */}
        <div className="text-center my-12">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 border-none">You have the tools.<br /><span className="text-[#3ddc84]">Now organize your district.</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/petition" className="px-8 py-4 bg-red-600 text-white font-condensed font-bold rounded-lg hover:bg-red-700 transition-all">✍ Sign the Petition</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold hover:bg-[#3ddc84]/10 transition-all">📋 Take the Survey</a>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-12 px-6 border-t border-[#3ddc84]/10 bg-[#0d1525]">
        <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-70" />
        <div className="font-condensed font-bold text-gray-400 mb-1">PHIERS is a people's movement — not a company, not a product.</div>
        <div className="text-sm text-gray-500 mb-4">Built by regular people who are done waiting.</div>
        <div className="max-w-[500px] mx-auto mb-6">
          <p className="font-condensed text-gray-400">Energy without power fails.<br />PHIERStorm is the power.<br /><span className="text-gray-500">PHIERS.org — a catalyst for the change we've been waiting for.</span><br /><span className="text-gray-500">The only thing missing is you.</span></p>
        </div>
        <div className="max-w-[560px] mx-auto p-5 border border-[#3ddc84]/15 rounded-lg mb-6">
          <p className="font-condensed text-gray-500 text-xs uppercase tracking-wide mb-2">Built by</p>
          <p className="font-condensed font-bold text-white">Will Price | Founder &amp; Chief Solutions Architect</p>
          <p className="font-condensed text-gray-400 text-sm mb-3">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending and built the lever to fix it. Building this since 2009.</p>
          <button onClick={() => setWillModalOpen(true)} className="font-condensed text-[#3ddc84] text-sm border-b border-[#3ddc84]/30">👤 Meet the Architect →</button>
        </div>
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
          Not built for profit. Not built for power. Built for We the People — by people who refused to stop.<br />
          📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a> · 📞 (916) 306-8967<br />
          © PHIERS.org — Original Concept Since 2009. All Rights Reserved.<br />
          <span className="text-[0.7rem]">PHIERS™ · PHIERSale™ · PHIERWorks™ · PHIERPlace™ — Protected marks established 2009–2025.</span>
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
