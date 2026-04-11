// app/unbreakable/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function UnbreakablePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState('')
  const [willModalOpen, setWillModalOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const openModal = (src: string) => {
    setModalImageSrc(src)
    setImageModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setImageModalOpen(false)
    document.body.style.overflow = ''
  }

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
                <div className="space-y-2 pl-4 mt-2"><Link href="/resources" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📚 Resource Hub</Link><Link href="/real-stories" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>💬 Real Stories</Link><Link href="/faq" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>❓ FAQ</Link><Link href="/about" className="block text-gray-400 py-1" onClick={() => setMobileMenuOpen(false)}>📖 About</Link></div>
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
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4"><Link href="/"><Image src="/images/PHIERS_Logo.png" alt="PHIERS Logo" width={200} height={200} className="max-w-[200px] w-full opacity-75" /></Link></div>
          <div className="text-gray-500 text-xs tracking-wide mb-2">MABAH — Making America Better And Healthier</div>
          <div className="text-gray-600 text-sm italic mb-4">When they dissed us, we built anyway.</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-3 font-black tracking-[6px] uppercase">UNBREAKABLE</h1>
          <div className="text-gray-500 text-base tracking-wide">The pattern. The pressure. The proof.</div>
          <div className="bg-[#141414] border-y border-[#222] py-5 px-6 my-6 text-center"><p className="text-gray-500 text-sm italic">UNBREAKABLE exists to document the pattern, the pressure, and the proof — so the country understands what PHIERS survived to exist.</p></div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Video Section */}
        <div className="my-8 max-w-[720px] mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800">
            <iframe src="https://www.youtube.com/embed/Ypuu2gOeSOs" title="PHIERS — Built Under Pressure" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* The Pattern */}
        <div className="bg-[#111] py-12 px-6 -mx-6 my-8">
          <div className="max-w-[860px] mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Pattern</h2>
            <p className="text-gray-400 mb-3">Black men are disrespected globally.</p>
            <p className="text-gray-400 mb-3">Not because we lack talent, discipline, or contribution.</p>
            <p className="text-gray-400 mb-3">Because excellence disrupts institutions built to underestimate us.</p>
            <p className="text-gray-400 mb-3">We are celebrated when our brilliance is convenient.</p>
            <p className="text-gray-400 mb-3">Ignored when our dignity requires protection.</p>
            <p className="text-gray-400 mb-3">Resisted when our solutions threaten the status quo.</p>
            <div className="bg-[#161616] border-l-4 border-gray-500 rounded-r-lg p-5 my-6"><p className="text-white font-bold mb-2">This is not grievance. This is a record.</p><p className="text-gray-400">And the record shows something remarkable: every time the pattern tried to stop us, we built something instead.</p></div>
            <p className="text-gray-400 mb-3">We name the pattern not to dwell in pain — but to document it.</p>
            <p className="text-gray-400 mb-3">Because documented patterns become undeniable evidence.</p>
            <p className="text-gray-400">And undeniable evidence is the foundation of change.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* The Response */}
        <div className="my-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Response</h2>
          <p className="text-gray-400 mb-3">Despite the pattern, Black men do something extraordinary.</p>
          <p className="text-gray-400 mb-6">We respond to disrespect with solutions that uplift everyone.</p>
          <div className="my-6"><p className="text-gray-400">We don't retaliate.</p><p className="text-gray-400">We don't shrink.</p><p className="text-gray-400">We don't break.</p><div className="text-white text-2xl font-black tracking-[3px] my-3">WE BUILD.</div></div>
          <p className="text-gray-400 mb-3">We build systems that stabilize nations.</p>
          <p className="text-gray-400 mb-3">We build culture that moves the world.</p>
          <p className="text-gray-400 mb-3">We build solutions institutions could not create —</p>
          <p className="text-gray-500 italic mb-4">and often tried to stop.</p>
          <p className="text-gray-400">PHIERS is one of those solutions.</p>
          <div className="text-center my-6"><button onClick={() => openModal('/images/fba_men_bonding.webp')} className="cursor-pointer"><Image src="/images/fba_men_bonding.webp" alt="FBA men — brotherhood, strength, purpose" width={220} height={200} className="max-w-[220px] h-auto mx-auto rounded-lg border border-gray-800 hover:scale-[1.02] transition-transform" /></button><p className="text-gray-600 text-xs italic mt-2">Brotherhood. Strength. Purpose. Built under pressure.</p></div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* The Philosophy Behind UNBREAKABLE */}
        <div className="bg-[#111] py-12 px-6 -mx-6 my-8">
          <div className="max-w-[860px] mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Philosophy Behind UNBREAKABLE</h2>
            <p className="text-gray-400 mb-3">We speak about race for one reason: because Black men are dismissed until we deliver something so exceptional that the world can no longer pretend not to see us.</p>
            <p className="text-gray-400 mb-3">Not to antagonize. Not to accuse. Not to divide.</p>
            <p className="text-gray-400 mb-6">But to document the pattern — and then transcend it.</p>
            <div className="border-y border-[#3ddc84]/20 py-6 my-6 text-center"><p className="text-[#3ddc84] text-lg italic font-bold">"Black men have been disrespected globally, yet we consistently deliver solutions that uplift everyone — even when no one uplifts us.<br />That is not pain. That is capacity.<br />That is not grievance. That is character.<br />That is the record."</p><span className="text-gray-600 text-xs">— Will Price, PHIERS Founders</span></div>
            <p className="text-gray-400 mb-3">Black excellence is not a performance for the world's approval.</p>
            <p className="text-gray-400 mb-3">It is a public service — delivered whether or not the world is paying attention, whether or not institutions protect us, whether or not the stage is fair.</p>
            <p className="text-gray-400 mb-3">Respect demanded rarely lasts.</p>
            <p className="text-gray-400 mb-3">Respect earned through contribution becomes permanent.</p>
            <p className="text-gray-400 mb-3">UNBREAKABLE exists for one reason.</p>
            <p className="text-gray-400 mb-3">To show what dignity looks like under pressure.</p>
            <p className="text-gray-400 mb-3">And what happens when people who were never supposed to build anything this powerful —</p>
            <p className="text-white font-semibold mb-4">build it anyway.</p>
            <div className="bg-[#161616] border-l-4 border-gray-300 rounded-r-lg p-5"><p className="text-white font-bold mb-2">Structural excellence forces institutions to confront their own biases — without us ever raising our voices.</p><p className="text-gray-400 mb-1">That is the moral high ground.</p><p className="text-gray-400 mb-1">That is the leverage.</p><p className="text-gray-400">That is PHIERS.</p></div>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Mid-Page Anchor */}
        <div className="text-center py-8 my-4 border-t border-b border-[#1e1e1e]"><p className="text-gray-500 text-sm">This is what the pattern produced.</p><span className="text-white text-xl font-extrabold tracking-[4px] block mt-2">STRUCTURE.</span></div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* PHIERS: Built Without Permission */}
        <div className="my-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">PHIERS: Built Without Permission. Built for Everyone.</h2>
          <p className="text-gray-400 mb-3">PHIERS is a citizen-powered healthcare movement.</p>
          <p className="text-gray-400 mb-3">Mathematically sound. Nationally scalable. Globally relevant.</p>
          <p className="text-gray-400 mb-3">A solution built by Black men that improves the lives of people who may never stand up for us.</p>
          <p className="text-gray-400 mb-6">And we built it anyway.</p>
          <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-4 my-2">💡 One conversion from a $10,000 insurance plan to a $600 telehealth plan frees enough savings to fund <strong className="text-white">12 more people.</strong></div>
          <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-4 my-2">📈 Those 12 fund <strong className="text-white">148.</strong> Those 148 fund <strong className="text-white">1,825.</strong></div>
          <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-4 my-2">🎯 At <strong className="text-white">3.5% of the country</strong> — just 11.6 million people — the cascade becomes self-sustaining. Telehealth becomes free. Monthly relief checks follow. Jobs follow.</div>
          <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-4 my-2">🏛 At that threshold, we hold Congress accountable: pass laws making telehealth available through ACA exchanges — or explain publicly why they won't adopt a solution that saves taxpayers trillions.</div>
          <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-4 my-4">🌍 The impact reaches people across the US, the UK, and countries around the world. This is not a domestic policy tweak. This is a global model.</div>
          <p className="text-white font-bold my-4">This is not ideology. This is arithmetic.</p>
          <p className="text-gray-400 mb-6">PHIERS solves a problem Congress could not solve — and gives citizens the leverage to demand they adopt it, or justify publicly why they won't.</p>

          <h3 className="text-gray-300 text-xl font-semibold mt-6 mb-3">What It Was Built Without</h3>
          <ul className="list-disc pl-6 text-gray-400 mb-4"><li>Without institutional protection</li><li>Without corporate backing</li><li>Without political shelter</li></ul>
          <p className="text-gray-500 italic mb-6">Under pressure designed to break us.</p>

          <h3 className="text-gray-300 text-xl font-semibold mt-6 mb-3">What It Cost — The Receipts</h3>
          <p className="text-gray-400 mb-3">These are not grievances.</p>
          <p className="text-gray-400 mb-4">These are the conditions under which the work continued.</p>
          <p className="text-white font-bold mb-2">Financial & Legal Pressure</p>
          <ul className="list-disc pl-6 text-gray-400 mb-4"><li>Rejected hush money tied to a hold-harmless affidavit</li><li>Refused to legitimize those who stole property</li><li>Endured identity theft, credit damage, and financial ruin</li><li>Survived blacklisting and blocked opportunities</li></ul>
          <p className="text-white font-bold mb-2">Physical & Personal</p>
          <div className="space-y-1 text-gray-400 mb-3"><p>• Survived threats.</p><p>• Survived assault.</p><p>• Survived being poisoned.</p></div>
          <ul className="list-disc pl-6 text-gray-400 mb-4"><li>Became homeless rather than compromise the truth</li><li>Survived smear campaigns and forced relocation</li><li>Protected an elder impacted by exploitation</li></ul>
          <p className="text-white font-bold mb-2">The Response</p>
          <ul className="list-disc pl-6 text-gray-400 mb-4"><li>Built PHIERS from the front seat of a car — and refused to stop</li></ul>
          <div className="bg-[#161616] border-l-4 border-gray-500 rounded-r-lg p-5 my-6"><p className="text-white font-bold mb-2">Every threat was an opportunity to go into survival mode.</p><p className="text-gray-400">Every time, the answer was the same: keep building. Not despite the pressure — through it. That is not suffering. That is the architecture of a movement. And it proves, beyond any reasonable doubt, that we are inferior to no one.</p></div>

          <h3 className="text-gray-300 text-xl font-semibold mt-6 mb-3">The Validation Before the Silence</h3>
          <p className="text-gray-400 mb-3">A Fortune 500 PR firm reviewed PHIERS and staked their reputation on it.</p>
          <div className="bg-[#161616] border-l-4 border-gray-500 rounded-r-lg p-5 my-4"><p className="text-gray-300 italic">"If we're talking to you right now, there is an available editorial window."</p><p className="text-gray-300 italic mt-2">"If you weren't legit, we wouldn't risk putting our name behind yours."</p><p className="text-gray-300 italic mt-2">"Major outlets are interested — Forbes, USA Today, International Business Times."</p></div>
          <p className="text-gray-400 mb-2">Nothing changed about PHIERS.</p>
          <p className="text-gray-400 mb-2">Not after hours of interviews.</p>
          <p className="text-gray-400 mb-2">Not after a second review from a UK-based PR firm traded on the London Stock Exchange.</p>
          <p className="text-gray-400 mb-3">The math didn't change. The architecture didn't change. The national impact didn't change.</p>
          <p className="text-gray-400 mb-3">What changed was their understanding of who built it — and what it was built to disrupt.</p>
          <p className="text-gray-400 mb-3">This solution was built by Black men who showed up for each other — as fathers, sons, brothers, uncles, friends, and allies — when every institution they approached either went silent or pushed back.</p>
          <p className="text-gray-400 mb-4">That endurance is not a tragedy. It is the proof of concept.</p>
          <p className="text-white font-bold">If PHIERS could be built under those conditions — it can survive anything.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* The Mirror */}
        <div className="bg-[#111] py-12 px-6 -mx-6 my-8">
          <div className="max-w-[860px] mx-auto">
            <p className="text-gray-500 text-sm italic mb-2">The pattern didn't stop at home — it showed up globally.</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Mirror</h2>
            <p className="text-gray-400 mb-3">The BAFTA incident is not the story. It is the mirror.</p>
            <p className="text-gray-400 mb-3">A global stage gave two Black men visibility.</p>
            <p className="text-gray-400 mb-3">Then failed to protect their dignity.</p>
            <p className="text-gray-400 mb-3">The N-word was shouted at them.</p>
            <p className="text-gray-400 mb-3">More than once.</p>
            <p className="text-gray-400 mb-3">BAFTA had a tape delay. The BBC had editors. Warner Bros. immediately requested the slur be removed.</p>
            <div className="bg-[#161616] border-l-4 border-gray-500 rounded-r-lg p-5 my-4"><p className="text-gray-300"><strong className="text-white">What was removed from the broadcast?</strong> A joke about "corrupt leaders." A filmmaker saying "Free Palestine."</p><p className="text-gray-300 mt-2"><strong className="text-white">What was not removed?</strong> The racial slur directed at two Black men on a global stage.</p></div>
            <p className="text-gray-400 mb-3">Delroy Lindo said afterward he wished "someone from BAFTA had spoken to us." No one did.</p>
            <p className="text-gray-400 mb-4">That same week, a UK-based PR firm traded on the London Stock Exchange shifted direction after warm, collaborative conversations about PHIERS. Will had shared the SOTU Pre-sponse — evidence that PHIERS could address the global instability driving us toward a war nobody asked for. The energy changed. They backed out of a signed contract. No questions asked.</p>
            <p className="text-gray-400 mb-4">The reader can connect the same dots he connected.</p>
            <div className="border-y border-[#3ddc84]/20 py-6 my-6 text-center"><p className="text-[#3ddc84] text-lg italic font-bold">"Different institution. Same pattern. Same silence. Same discomfort with Black excellence that disrupts the status quo."</p><span className="text-gray-600 text-xs">— Will Price, on what he observed</span></div>
            <p className="text-gray-400 mb-3">Our response is not retaliation.</p>
            <p className="text-gray-400">Our response is solutions that make silence indefensible.</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Why Black Men Should Walk Tall */}
        <div className="my-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why Black Men Should Walk Tall</h2>
          <p className="text-gray-400 mb-4">Not because the world treats us well. But because we keep building anyway.</p>
          <p className="text-gray-400 mb-3">When institutions fail to protect us — we still protect others.</p>
          <p className="text-gray-400 mb-3">When institutions refuse to support us — we still support others.</p>
          <p className="text-gray-400 mb-3">When institutions underestimate us —</p>
          <p className="text-white font-semibold mb-4">we still outperform them.</p>
          <p className="text-gray-400 mb-4">Black men are unbreakable not because life is easy — but because we build under pressure, without applause, without protection, for people who may never stand up for us.</p>
          <div className="bg-[#161616] border-l-4 border-gray-300 rounded-r-lg p-5"><p className="text-white text-lg font-bold mb-2">We improve the lives of everyone else<br />more than they can improve ours without us.</p><p className="text-gray-400 mt-2">That is why we stand tall. That is why we speak with dignity. That is why we are unbreakable.</p></div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* The Call to Pride */}
        <div className="bg-[#111] py-12 px-6 -mx-6 my-8">
          <div className="max-w-[860px] mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Call to Pride</h2>
            <div className="text-center my-6"><button onClick={() => openModal('/images/i_am_a_man.jpg')} className="cursor-pointer"><Image src="/images/i_am_a_man.jpg" alt="I AM A MAN — Memphis, 1968" width={260} height={200} className="max-w-[260px] h-auto mx-auto rounded-lg border border-gray-800 hover:scale-[1.02] transition-transform" /></button><p className="text-gray-600 text-xs italic mt-2">"I AM A MAN" — Memphis, 1968. They marched for dignity then. We build it now.</p></div>
            <p className="text-gray-400 mb-3">To every Foundational Black American man who has been dismissed, sabotaged, blacklisted, or written off:</p>
            <p className="text-white text-lg font-semibold mb-4">See what we built anyway.</p>
            <div className="my-6"><p className="text-gray-400">We have been sabotaged.</p><p className="text-gray-400">Betrayed.</p><p className="text-gray-400">Disrupted.</p><p className="text-gray-400">Blacklisted.</p><p className="text-gray-400">Homeless.</p><p className="text-gray-400">Erased.</p><p className="text-white font-bold text-lg mt-4">And we built anyway.</p></div>
            <p className="text-gray-400 mb-2">UNBREAKABLE is not a complaint.</p>
            <p className="text-gray-400 mb-2">It is not a performance.</p>
            <p className="text-gray-400 mb-2">It is not a reaction.</p>
            <p className="text-white font-extrabold text-xl mb-4">It is proof.</p>
            <p className="text-gray-500 italic mb-6">UNBREAKABLE is not about the past — it's about the structure we built anyway.</p>
            <div className="border-y border-[#3ddc84]/20 py-6 my-6 text-center"><p className="text-[#3ddc84] text-lg italic font-bold">"PHIERS is the proof of what happens when Black men build with integrity under pressure.<br />And the world is better for it."</p><span className="text-gray-600 text-xs">— Will Price, PHIERS Founders</span></div>
            <p className="text-white text-xl font-bold text-center tracking-wide leading-relaxed">If not this, what?<br />If not now, when?<br />If not us, who?</p>
          </div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* Pathos Video */}
        <div className="my-8 max-w-[640px] mx-auto">
          <p className="text-center text-gray-500 font-semibold mb-3 text-sm">Pathos Communications: Why They Put Their Reputation Behind PHIERS (7:11)</p>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800">
            <iframe src="https://www.youtube.com/embed/UD8svoGU7ZU" title="Pathos Communications: Why They Put Their Reputation Behind PHIERS" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
          </div>
          <p className="text-center text-gray-600 text-xs italic mt-3">Third-party credibility. A Fortune 500 PR firm explains why they backed this movement.</p>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* This Cannot Be Erased */}
        <div className="my-8">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">This Cannot Be Erased</h2>
          <p className="text-gray-400 mb-4">This page permanently establishes:</p>
          <ul className="list-disc pl-6 text-gray-400 mb-4"><li>The legitimacy of the PHIERS model</li><li>The integrity of its founders under sustained pressure</li><li>The systemic pattern of resistance they survived</li><li>The validation from a Fortune 500 PR firm — before the silence</li><li>The inevitability of PHIERS' national impact</li><li>The strength and excellence of a Black-led solution built for everyone</li></ul>
          <div className="bg-[#161616] border-l-4 border-gray-300 rounded-r-lg p-5"><p className="text-white font-bold">PHIERS is not a pitch. PHIERS is not a protest. PHIERS is the future — built by people who were unbreakable when it mattered most.</p></div>
        </div>

        <hr className="border-[#3ddc84]/20 my-8" />

        {/* CTA Section */}
        <div className="bg-[#111] border border-[#222] rounded-lg p-10 text-center my-10">
          <p className="text-gray-500 text-lg mb-5">The movement needs your direction on the record.</p>
          <Link href="/action" className="inline-block px-10 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all text-lg">✊ Take Action</Link>
          <div className="mt-4"><a href="https://forms.gle/euJkZxjUserFVCPK8" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 text-gray-400 border border-gray-600 rounded-md text-sm hover:border-gray-400 hover:text-gray-300 transition-all mx-1">⚡ JOIN FIRST WAVE</a><Link href="/unstoppable" className="inline-block px-6 py-2 text-gray-400 border border-gray-600 rounded-md text-sm hover:border-gray-400 hover:text-gray-300 transition-all mx-1">Read UNSTOPPABLE →</Link></div>
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
          Not built for profit. Not built for power. Built for We the People — by people who refused to stop.<br />
          📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a> · 📞 (916) 306-8967<br />
          © PHIERS.org — Original Concept Since 2009. All Rights Reserved.<br />
          <span className="text-[0.7rem]">PHIERS™ · PHIERSale™ · PHIERWorks™ · PHIERPlace™ — Protected marks established 2009–2025.</span>
        </div>
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>

      {/* Image Modal */}
      <AnimatePresence>
        {imageModalOpen && (
          <motion.div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <button className="absolute top-5 right-7 text-white text-3xl cursor-pointer bg-black/50 border border-white/20 w-10 h-10 rounded-full" onClick={closeModal}>✕</button>
            <img src={modalImageSrc} alt="" className="max-w-[92vw] max-h-[82vh] rounded-lg border-2 border-[#3ddc84]" />
          </motion.div>
        )}
      </AnimatePresence>

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
