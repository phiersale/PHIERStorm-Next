// FILE: app/unbreakable/page.tsx - UPDATED (Tiers 1-7)

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function UnbreakablePage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
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
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[250px] w-auto mx-auto mb-4 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={250}
              height={100}
              className="opacity-70 max-w-[250px] w-full h-auto grayscale brightness-75"
            />
          </div>
          <div className="text-gray-500 text-xs uppercase tracking-wider mb-3">The Pattern. The Pressure. The Proof.</div>
          <div className="text-gray-600 text-base italic mb-4">When they dissed us, we built anyway.</div>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-[6px] mb-4">UNBREAKABLE</h1>
          <div className="text-gray-500 text-sm tracking-wide">The pattern. The pressure. The proof.</div>
        </div>

        {/* Purpose Box */}
        <div className="bg-[#141414] border-t border-b border-[#222] py-5 px-8 text-center my-8">
          <p className="text-gray-500 text-sm italic">UNBREAKABLE exists to document the pattern, the pressure, and the proof — so the country understands what PHIERS survived to exist.</p>
        </div>

        <hr className="border-green/20" />

        {/* Anchor Line */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Video */}
        <section className="container section">
          <div className="video-container max-w-[720px] mx-auto">
            <div id="wrap-unbreakable" className="video-wrapper cursor-pointer group" onClick={() => playVideo('unbreakable', 'https://www.youtube.com/embed/Ypuu2gOeSOs?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/Ypuu2gOeSOs/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Pattern */}
        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">The Pattern</h2>
            <p className="text-gray-400 mb-3">Black men are disrespected globally.</p>
            <p className="text-gray-400 mb-3">Not because we lack talent, discipline, or contribution.</p>
            <p className="text-gray-400 mb-3">Because excellence disrupts institutions built to underestimate us.</p>
            <p className="text-gray-400 mt-5 mb-3">We are celebrated when our brilliance is convenient.</p>
            <p className="text-gray-400 mb-3">Ignored when our dignity requires protection.</p>
            <p className="text-gray-400 mb-5">Resisted when our solutions threaten the status quo.</p>

            <div className="bg-[#161616] border-l-4 border-l-gray-500 rounded-r-lg p-5 my-6">
              <p className="text-gray-300 mb-2"><strong className="text-white">This is not grievance. This is a record.</strong></p>
              <p className="text-gray-400">And the record shows something remarkable: every time the pattern tried to stop us, we built something instead.</p>
            </div>

            <p className="text-gray-400 mb-3">We name the pattern not to dwell in pain — but to document it.</p>
            <p className="text-gray-400 mb-3">Because documented patterns become undeniable evidence.</p>
            <p className="text-gray-400">And undeniable evidence is the foundation of change.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Response */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">The Response</h2>
          <p className="text-gray-400 mb-3">Despite the pattern, Black men do something extraordinary.</p>
          <p className="text-gray-400 mb-6">We respond to disrespect with solutions that uplift everyone.</p>

          <div className="my-6">
            <p className="text-gray-400 mb-1">We don't retaliate.</p>
            <p className="text-gray-400 mb-1">We don't shrink.</p>
            <p className="text-gray-400 mb-4">We don't break.</p>
            <p className="font-display text-3xl text-white tracking-[3px] my-3">WE BUILD.</p>
          </div>

          <p className="text-gray-400 mb-2">We build systems that stabilize nations.</p>
          <p className="text-gray-400 mb-2">We build culture that moves the world.</p>
          <p className="text-gray-400 mb-2">We build solutions institutions could not create —</p>
          <p className="text-gray-500 mb-4 pl-5">and often tried to stop.</p>
          <p className="text-gray-400 mt-4">PHIERS is one of those solutions.</p>

          <div className="text-center my-8">
            <button onClick={() => openModal('/images/fba_men_bonding.webp')} className="cursor-pointer">
              <Image
                src="/images/fba_men_bonding.webp"
                alt="FBA men — brotherhood, strength, purpose"
                width={220}
                height={220}
                className="rounded-lg border border-[#222] grayscale mx-auto hover:scale-[1.02] transition-transform"
              />
            </button>
            <p className="text-gray-600 text-xs italic mt-2">Brotherhood. Strength. Purpose. Built under pressure.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Philosophy Behind UNBREAKABLE */}
        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">The Philosophy Behind UNBREAKABLE</h2>
            <p className="text-gray-400 mb-3">We speak about race for one reason: because Black men are dismissed until we deliver something so exceptional that the world can no longer pretend not to see us.</p>
            <p className="text-gray-400 mb-3">Not to antagonize. Not to accuse. Not to divide.</p>
            <p className="text-gray-400 mb-6">But to document the pattern — and then transcend it.</p>

            <div className="border-t border-b border-[#222] py-6 my-6 text-center">
              <p className="text-white text-base italic mb-2">"Black men have been disrespected globally, yet we consistently deliver solutions that uplift everyone — even when no one uplifts us.<br />
              That is not pain. That is capacity.<br />
              That is not grievance. That is character.<br />
              That is the record."</p>
              <span className="text-gray-600 text-sm">— Will Price, PHIERS Founders</span>
            </div>

            <p className="text-gray-400 mb-3">Black excellence is not a performance for the world's approval.</p>
            <p className="text-gray-400 mb-3">It is a public service — delivered whether or not the world is paying attention, whether or not institutions protect us, whether or not the stage is fair.</p>
            <p className="text-gray-400 mt-5 mb-3">Respect demanded rarely lasts.</p>
            <p className="text-gray-400 mb-5">Respect earned through contribution becomes permanent.</p>
            <p className="text-gray-400 mt-5 mb-3">UNBREAKABLE exists for one reason.</p>
            <p className="text-gray-400 mb-3">To show what dignity looks like under pressure.</p>
            <p className="text-gray-400 mb-3">And what happens when people who were never supposed to build anything this powerful —</p>
            <p className="text-white font-semibold mb-5 pl-5">build it anyway.</p>

            <div className="bg-[#161616] border-l-4 border-l-gray-300 rounded-r-lg p-5 mt-6">
              <p className="text-gray-300 mb-2"><strong className="text-white">Structural excellence forces institutions to confront their own biases — without us ever raising our voices.</strong></p>
              <p className="text-gray-400">That is the moral high ground.</p>
              <p className="text-gray-400">That is the leverage.</p>
              <p className="text-gray-400">That is PHIERS.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Mid-Page Anchor */}
        <div className="text-center py-8 my-4 border-t border-b border-[#1e1e1e]">
          <p className="text-gray-500 text-sm">This is what the pattern produced.</p>
          <p className="text-white text-xl font-extrabold tracking-[4px] mt-2">STRUCTURE.</p>
        </div>

        <hr className="border-green/20" />

        {/* PHIERS Built */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">PHIERS: Built Without Permission. Built for Everyone.</h2>
          <p className="text-gray-400 mb-3">PHIERS is a citizen-powered healthcare movement.</p>
          <p className="text-gray-400 mb-3">Mathematically sound. Nationally scalable. Globally relevant.</p>
          <p className="text-gray-400 mt-4 mb-4">A solution built by Black men that improves the lives of people who may never stand up for us.</p>
          <p className="text-gray-400 mb-6">And we built it anyway.</p>

          <div className="space-y-2 mb-6">
            <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-3 text-gray-400 text-sm">💡 One conversion from a $10,000 insurance plan to a $600 telehealth plan frees enough savings to fund <strong className="text-white">12 more people.</strong></div>
            <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-3 text-gray-400 text-sm">📈 Those 12 fund <strong className="text-white">148.</strong> Those 148 fund <strong className="text-white">1,825.</strong></div>
            <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-3 text-gray-400 text-sm">🎯 At <strong className="text-white">3.5% of the country</strong> — just 11.6 million people — the cascade becomes self-sustaining. Telehealth becomes free. Monthly relief checks follow. Jobs follow.</div>
            <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-3 text-gray-400 text-sm">🏛 At that threshold, we hold Congress accountable: pass laws making telehealth available through ACA exchanges — or explain publicly why they won't adopt a solution that saves taxpayers trillions.</div>
            <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-3 text-gray-400 text-sm">🌍 The impact reaches people across the US, the UK, and countries around the world. This is not a domestic policy tweak. This is a global model.</div>
          </div>

          <p className="text-gray-400 mb-4"><strong className="text-white">This is not ideology. This is arithmetic.</strong></p>
          <p className="text-gray-400 mb-6">PHIERS solves a problem Congress could not solve — and gives citizens the leverage to demand they adopt it, or justify publicly why they won't.</p>

          <h3 className="font-condensed font-bold text-gray-300 text-lg mb-3">What It Was Built Without</h3>
          <ul className="list-disc list-inside text-gray-400 mb-6">
            <li>Without institutional protection</li>
            <li>Without corporate backing</li>
            <li>Without political shelter</li>
          </ul>
          <p className="text-gray-500 italic mb-8">Under pressure designed to break us.</p>

          <h3 className="font-condensed font-bold text-gray-300 text-lg mb-3">What It Cost — The Receipts</h3>
          <p className="text-gray-500 italic mb-4">These are not grievances. These are the conditions under which the work continued.</p>

          <p className="text-gray-300 font-semibold mt-4 mb-2">Financial &amp; Legal Pressure</p>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>Rejected hush money tied to a hold-harmless affidavit</li>
            <li>Refused to legitimize those who stole property</li>
            <li>Endured identity theft, credit damage, and financial ruin</li>
            <li>Survived blacklisting and blocked opportunities</li>
          </ul>

          <p className="text-gray-300 font-semibold mt-4 mb-2">Physical &amp; Personal</p>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>Survived threats.</li>
            <li>Survived assault.</li>
            <li>Survived being poisoned.</li>
            <li>Became homeless rather than compromise the truth</li>
            <li>Survived smear campaigns and forced relocation</li>
            <li>Protected an elder impacted by exploitation</li>
          </ul>

          <p className="text-gray-300 font-semibold mt-4 mb-2">The Response</p>
          <ul className="list-disc list-inside text-gray-400 mb-6">
            <li>Built PHIERS from the front seat of a car — and refused to stop</li>
          </ul>

          <div className="bg-[#161616] border-l-4 border-l-gray-500 rounded-r-lg p-5 my-6">
            <p className="text-gray-300"><strong className="text-white">Every threat was an opportunity to go into survival mode.</strong> Every time, the answer was the same: keep building. Not despite the pressure — through it. That is not suffering. That is the architecture of a movement. And it proves, beyond any reasonable doubt, that we are inferior to no one.</p>
          </div>

          <h3 className="font-condensed font-bold text-gray-300 text-lg mb-3">The Validation Before the Silence</h3>
          <p className="text-gray-400 mb-3">A Fortune 500 PR firm reviewed PHIERS and staked their reputation on it.</p>
          <div className="bg-[#161616] border-l-4 border-l-gray-500 rounded-r-lg p-5 my-4">
            <p className="text-gray-400 mb-2">"If we're talking to you right now, there is an available editorial window."</p>
            <p className="text-gray-400 mb-2">"If you weren't legit, we wouldn't risk putting our name behind yours."</p>
            <p className="text-gray-400">"Major outlets are interested — Forbes, USA Today, International Business Times."</p>
          </div>
          <p className="text-gray-400 mb-3">Nothing changed about PHIERS.</p>
          <p className="text-gray-400 mb-3">Not after hours of interviews.</p>
          <p className="text-gray-400 mb-3">Not after a second review from a UK-based PR firm traded on the London Stock Exchange.</p>
          <p className="text-gray-400 mt-4 mb-3">The math didn't change. The architecture didn't change. The national impact didn't change.</p>
          <p className="text-gray-400 mb-4">What changed was their understanding of who built it — and what it was built to disrupt.</p>
          <p className="text-gray-400 mb-4">This solution was built by Black men who showed up for each other — as fathers, sons, brothers, uncles, friends, and allies — when every institution they approached either went silent or pushed back.</p>
          <p className="text-gray-400">That endurance is not a tragedy. It is the proof of concept.</p>
        </section>

        <hr className="border-green/20" />

        {/* The Mirror */}
        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <p className="text-gray-600 text-sm italic mb-3">The pattern didn't stop at home — it showed up globally.</p>
            <h2 className="font-display text-3xl text-white mb-4">The Mirror</h2>
            <p className="text-gray-400 mb-3">The BAFTA incident is not the story. It is the mirror.</p>
            <p className="text-gray-400 mt-4 mb-3">A global stage gave two Black men visibility.</p>
            <p className="text-gray-400 mb-5">Then failed to protect their dignity.</p>
            <p className="text-gray-400 mt-4 mb-3">The N-word was shouted at them.</p>
            <p className="text-gray-400 mb-3">More than once.</p>
            <p className="text-gray-400 mt-4 mb-3">BAFTA had a tape delay. The BBC had editors. Warner Bros. immediately requested the slur be removed.</p>

            <div className="bg-[#161616] border-l-4 border-l-gray-500 rounded-r-lg p-5 my-6">
              <p className="text-gray-300 mb-2"><strong className="text-white">What was removed from the broadcast?</strong> A joke about "corrupt leaders." A filmmaker saying "Free Palestine."</p>
              <p className="text-gray-400 mt-2"><strong className="text-white">What was not removed?</strong> The racial slur directed at two Black men on a global stage.</p>
            </div>

            <p className="text-gray-400 mb-3">Delroy Lindo said afterward he wished "someone from BAFTA had spoken to us." No one did.</p>
            <p className="text-gray-400 mt-4 mb-3">That same week, a UK-based PR firm traded on the London Stock Exchange shifted direction after warm, collaborative conversations about PHIERS. The energy changed. They backed out of a signed contract. No questions asked.</p>
            <p className="text-gray-400 mb-5">The reader can connect the same dots he connected.</p>

            <div className="border-t border-b border-[#222] py-6 my-6 text-center">
              <p className="text-white text-base italic mb-2">"Different institution. Same pattern. Same silence. Same discomfort with excellence that disrupts the status quo."</p>
              <span className="text-gray-600 text-sm">— Will Price, on what he observed</span>
            </div>

            <p className="text-gray-400">Our response is not retaliation.</p>
            <p className="text-gray-400">Our response is solutions that make silence indefensible.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Why Black Men Should Walk Tall */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">Why Black Men Should Walk Tall</h2>
          <p className="text-gray-400 mb-3">Not because the world treats us well. But because we keep building anyway.</p>
          <p className="text-gray-400 mt-4 mb-3">When institutions fail to protect us — we still protect others.</p>
          <p className="text-gray-400 mb-3">When institutions refuse to support us — we still support others.</p>
          <p className="text-gray-400 mb-3">When institutions underestimate us —</p>
          <p className="text-white font-semibold mb-5 pl-5">we still outperform them.</p>
          <p className="text-gray-400 mt-4 mb-4">Black men are unbreakable not because life is easy — but because we build under pressure, without applause, without protection, for people who may never stand up for us.</p>

          <div className="bg-[#161616] border-l-4 border-l-gray-300 rounded-r-lg p-5 my-6">
            <p className="text-gray-300 text-base mb-2"><strong>We improve the lives of everyone else<br />more than they can improve ours without us.</strong></p>
            <p className="text-gray-400 mt-3">That is why we stand tall. That is why we speak with dignity. That is why we are unbreakable.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Call to Pride */}
        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">The Call to Pride</h2>

            <div className="text-center my-8">
              <button onClick={() => openModal('/images/i_am_a_man.jpg')} className="cursor-pointer">
                <Image
                  src="/images/i_am_a_man.jpg"
                  alt="I AM A MAN — Memphis, 1968"
                  width={260}
                  height={260}
                  className="rounded-lg border border-[#222] grayscale mx-auto hover:scale-[1.02] transition-transform"
                />
              </button>
              <p className="text-gray-600 text-xs italic mt-2">"I AM A MAN" — Memphis, 1968. They marched for dignity then. We build it now.</p>
            </div>

            <p className="text-gray-400 mb-3">To every Foundational Black American man who has been dismissed, sabotaged, blacklisted, or written off:</p>
            <p className="text-gray-300 font-semibold text-base mb-5">See what we built anyway.</p>

            <div className="my-6">
              <p className="text-gray-400 mb-1">We have been sabotaged.</p>
              <p className="text-gray-400 mb-1">Betrayed.</p>
              <p className="text-gray-400 mb-1">Disrupted.</p>
              <p className="text-gray-400 mb-1">Blacklisted.</p>
              <p className="text-gray-400 mb-1">Homeless.</p>
              <p className="text-gray-400 mb-4">Erased.</p>
              <p className="text-white font-bold text-base mt-4 mb-4">And we built anyway.</p>
            </div>

            <p className="text-gray-400 mb-3">UNBREAKABLE is not a complaint.</p>
            <p className="text-gray-400 mb-3">It is not a performance.</p>
            <p className="text-gray-400 mb-3">It is not a reaction.</p>
            <p className="text-white font-extrabold text-lg mt-4 mb-5">It is proof.</p>

            <p className="text-gray-500 italic mb-5">UNBREAKABLE is not about the past — it's about the structure we built anyway.</p>

            <div className="border-t border-b border-[#222] py-6 my-6 text-center">
              <p className="text-white text-base italic mb-2">"PHIERS is the proof of what happens when Black men build with integrity under pressure.<br />And the world is better for it."</p>
              <span className="text-gray-600 text-sm">— Will Price, PHIERS Founders</span>
            </div>

            <p className="text-white text-lg text-center font-bold tracking-wide leading-loose">
              If not this, what?<br />
              If not now, when?<br />
              If not us, who?
            </p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Pathos Video */}
        <section className="container section text-center">
          <p className="text-gray-500 font-semibold text-sm mb-3">Pathos Communications: Why They Put Their Reputation Behind PHIERS (7:11)</p>
          <div className="video-container max-w-[640px] mx-auto">
            <div id="wrap-pathos2" className="video-wrapper cursor-pointer group" onClick={() => playVideo('pathos2', 'https://www.youtube.com/embed/UD8svoGU7ZU?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/UD8svoGU7ZU/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-xs italic mt-2">Third-party credibility. A Fortune 500 PR firm explains why they backed this movement.</p>
        </section>

        <hr className="border-green/20" />

        {/* This Cannot Be Erased */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">This Cannot Be Erased</h2>
          <p className="text-gray-400 mb-4">This page permanently establishes:</p>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
            <li>The legitimacy of the PHIERS model</li>
            <li>The integrity of its founders under sustained pressure</li>
            <li>The systemic pattern of resistance they survived</li>
            <li>The validation from a Fortune 500 PR firm — before the silence</li>
            <li>The inevitability of PHIERS' national impact</li>
            <li>The strength and excellence of a Black-led solution built for everyone</li>
          </ul>

          <div className="bg-[#161616] border-l-4 border-l-gray-300 rounded-r-lg p-5">
            <p className="text-gray-300"><strong className="text-white">PHIERS is not a pitch. PHIERS is not a protest. PHIERS is the future — built by people who were unbreakable when it mattered most.</strong></p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* CTA Block */}
        <section className="container section text-center">
          <div className="bg-[#111] border border-[#222] rounded-lg p-8 my-8">
            <p className="text-gray-500 text-base mb-5">The movement needs your direction on the record.</p>
            <Button href="/action" variant="primary">✊ Take Action</Button>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <Button href="/petition" variant="secondary">✍ SIGN THE PETITION</Button>
              <Button href="/unstoppable" variant="secondary">Read UNSTOPPABLE →</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white text-3xl cursor-pointer hover:text-green transition-colors"
              >
                ✕
              </button>
              <Image
                src={modalImage}
                alt="Enlarged view"
                width={800}
                height={600}
                className="rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

      <style jsx global>{`
        .back-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--green);
          color: var(--bg-deep);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 150ms ease;
          z-index: 999;
          border: none;
        }
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        .back-to-top:hover {
          background: #2ab568;
          transform: translateY(-2px);
        }
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          border: 2px solid rgba(61, 220, 132, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }
        .video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      `}</style>

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

// END FILE: app/unbreakable/page.tsx - TIERS 1-7 COMPLETE
