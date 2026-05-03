// app/unbreakable/page.tsx
// UNBREAKABLE – The Pattern. The Pressure. The Proof.
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
          <Image
            src="/images/PHIERS_Logo.png"
            alt="PHIERS Logo"
            width={200}
            height={80}
            className="opacity-70 mx-auto mb-4"
          />
          <div className="text-gray-500 text-xs uppercase tracking-wider mb-3">The Pattern. The Pressure. The Proof.</div>
          <div className="text-gray-600 text-base italic mb-4">When they dissed us, we built anyway.</div>
          <div className="text-green-400 text-sm font-mono uppercase tracking-wider mb-2">Part II · UNBREAKABLE</div>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-[6px] mb-4">UNBREAKABLE</h1>
          <div className="text-gray-500 text-sm tracking-wide">The pattern. The pressure. The proof.</div>
        </div>

        {/* Top CTA */}
        <div className="text-center mt-8 mb-8">
          <Button href="/petition" variant="primary">✍ Ready now? Sign the petition →</Button>
        </div>

        {/* Purpose Box */}
        <div className="bg-[#141414] border-t border-b border-[#222] py-5 px-8 text-center my-8">
          <p className="text-gray-500 text-sm italic">
            UNBREAKABLE exists to document the pattern, the pressure, and the proof — so the country understands what PHIERS survived to exist. And so Black men across this nation understand the invitation being extended to them right now.
          </p>
        </div>

        <hr className="border-green/20 my-8" />

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

        <hr className="border-green/20 my-8" />

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

        <hr className="border-green/20 my-8" />

        {/* The Receipts – new detailed section */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">The Receipts</h2>
          <p className="text-gray-400 mb-4">This is not history for history's sake. This is the pattern — documented, repeated, undeniable.</p>

          <div className="space-y-6 text-gray-400">
            <div>
              <p className="text-white font-semibold mb-1">They built the government — then were removed by force.</p>
              <p>During Reconstruction, Black men were elected to Congress, to state legislatures, to city councils across the South. They built public schools. They built infrastructure. They wrote laws. They governed. They weren't removed because they failed. They were removed because they succeeded — and that success threatened people who needed Black men to stay beneath them. The work was real. The disruption was external. Remember that distinction.</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">They fought Hitler's best — and won.</p>
              <p>The 332nd Fighter Group — the Tuskegee Airmen — flew over 15,000 combat missions in World War II. They escorted bombers deep into Nazi-controlled Europe. Over Berlin. Over Romania. Over the most dangerous airspace in the war. They never lost a single bomber they were escorting to enemy fighters. Not one. While the Luftwaffe was destroying other Allied escort groups, the Red Tails held the line. They protected the bombing runs that destroyed the Daimler-Benz tank factories. They took out the oil refineries that fueled Hitler's armies. They flew missions that broke the Nazi war machine's ability to manufacture and resupply. Black men flew those missions. Black men are part of the reason Hitler started losing the war. The 761st Tank Battalion — the Black Panthers — were the first Black armored unit to see combat. They fought through six European countries. They liberated Gunskirchen concentration camp in Austria. Black men opened those gates. Black men were among the first faces Jewish survivors saw as free people. Then those same men came home to a country that still wouldn't let them vote.</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">They built Greenwood — and watched it burn.</p>
              <p>Greenwood, Oklahoma. 1921. Black Wall Street. Black men and women had built one of the most prosperous communities in America. Banks. Law firms. Hotels. Theaters. Hospitals. A self-sustaining economic ecosystem built entirely by and for Black people. It was destroyed in 18 hours. Not by failure. By arson. By bullets. By the organized violence of people who could not tolerate Black excellence existing independently. They rebuilt anyway.</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">They built the foundation of American culture — without credit.</p>
              <p>The music the world listens to. The athletic achievements that define American identity. The language, the style, the innovation that gets adopted globally and credited everywhere except at its source. Black men built the foundation of American cultural power. Often without ownership. Often without recognition. Always without adequate protection. The world copies what we create. The world rarely credits where it came from.</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">They built PHIERS — from the front seat of a car.</p>
              <p>While being blacklisted. While being poisoned. While being made homeless. While being sabotaged by people who understood exactly what this solution could do if it reached scale. No funding. No institutional backing. No protection. Just the work. And the refusal to stop doing it. A Fortune 500 PR firm staked their professional reputation on it. A London Stock Exchange-listed communications firm reviewed it and called it legitimate. Members of Congress signed letters of support before telehealth was mainstream, before Cost Plus Drugs existed, before the pandemic proved every assumption the model was built on. The model was right. The man who built it was right. The only thing that kept it from launching sooner was the same thing that has always kept Black excellence from reaching its full impact — organized resistance from people who benefit from our silence. And still. He kept building.</p>
            </div>
          </div>

          <div className="bg-[#161616] border-l-4 border-l-gray-500 rounded-r-lg p-5 my-6">
            <p className="text-gray-300">The pattern is the same every time. Black men build something real. It works. It threatens the people who need us to stay beneath them. They try to destroy it — by force, by law, by sabotage, by silence. We rebuild anyway. That is not a coincidence. That is a pattern.</p>
          </div>

          <div className="blockquote-pull my-8">
            <p>“This country doesn't just include us. It depends on us.”</p>
          </div>

          <div className="text-center mt-6">
            <Button href="/petition" variant="primary">✍ Ready now? Sign the petition →</Button>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* The Response (original) */}
        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
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
                <Image src="/images/fba_men_bonding.webp" alt="Brotherhood, strength, purpose" width={220} height={220} className="rounded-lg border border-[#222] grayscale mx-auto hover:scale-[1.02] transition-transform" />
              </button>
              <p className="text-gray-600 text-xs italic mt-2">Brotherhood. Strength. Purpose. Built under pressure.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* The Philosophy Behind UNBREAKABLE */}
        <section className="container section">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">The Philosophy Behind UNBREAKABLE</h2>
            <p className="text-gray-400 mb-3">We speak about race for one reason: because Black men are dismissed until we deliver something so exceptional that the world can no longer pretend not to see us.</p>
            <p className="text-gray-400 mb-3">Not to antagonize. Not to accuse. Not to divide.</p>
            <p className="text-gray-400 mb-6">But to document the pattern — and then transcend it.</p>
            <div className="border-t border-b border-[#222] py-6 my-6 text-center">
              <p className="text-white text-base italic mb-2">
                “Black men have been disrespected globally, yet we consistently deliver solutions that uplift everyone — even when no one uplifts us.<br />
                That is not pain. That is capacity.<br />
                That is not grievance. That is character.<br />
                That is the record.”
              </p>
              <span className="text-gray-600 text-sm">— Will Price, PHIERS Founders</span>
            </div>
            <p className="text-gray-400 mb-3">Black excellence is not a performance for the world's approval.</p>
            <p className="text-gray-400 mb-3">It is a public service — delivered whether or not the world is paying attention, whether or not institutions protect us, whether or not the stage is fair.</p>
            <p className="text-gray-400 mt-5 mb-3">Respect demanded rarely lasts.</p>
            <p className="text-gray-400 mb-5">Respect earned through contribution becomes permanent.</p>
            <div className="bg-[#161616] border-l-4 border-l-gray-300 rounded-r-lg p-5 mt-6">
              <p className="text-gray-300 mb-2"><strong className="text-white">Structural excellence forces institutions to confront their own biases — without us ever raising our voices.</strong></p>
              <p className="text-gray-400">That is the moral high ground.</p>
              <p className="text-gray-400">That is the leverage.</p>
              <p className="text-gray-400">That is PHIERS.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* PHIERS: Built Without Permission. Built for Everyone. */}
        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">PHIERS: Built Without Permission. Built for Everyone.</h2>
            <p className="text-gray-400 mb-3">PHIERS is a citizen-powered movement. Mathematically sound. Nationally scalable. Globally relevant.</p>
            <p className="text-gray-400 mb-4">A solution built by Black men that improves the lives of people who may never stand up for us. And we built it anyway.</p>
            <div className="space-y-2 mb-6">
              <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-3 text-gray-400 text-sm">💡 One conversion from a $10,000 insurance plan to a $600 telehealth plan frees enough savings to fund <strong className="text-white">12 more people.</strong></div>
              <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-3 text-gray-400 text-sm">📈 Those 12 fund <strong className="text-white">148.</strong> Those 148 fund <strong className="text-white">1,825.</strong></div>
              <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-3 text-gray-400 text-sm">🎯 At <strong className="text-white">3.5% of the country</strong> — just 11.6 million people — the cascade becomes self-sustaining.</div>
              <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-3 text-gray-400 text-sm">🏛 At that threshold, we hold Congress accountable — or we replace them.</div>
              <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-3 text-gray-400 text-sm">🌍 The impact reaches people across the US, the UK, and countries around the world.</div>
            </div>
            <p className="text-gray-400 mb-4"><strong className="text-white">This is not ideology. This is arithmetic.</strong></p>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* The Validation Before the Silence */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">The Validation Before the Silence</h2>
          <p className="text-gray-400 mb-3">A Fortune 500 PR firm reviewed PHIERS and staked their reputation on it.</p>
          <div className="bg-[#161616] border-l-4 border-l-gray-500 rounded-r-lg p-5 my-4">
            <p className="text-gray-400 mb-2">“If we're talking to you right now, there is an available editorial window.”</p>
            <p className="text-gray-400 mb-2">“If you weren't legit, we wouldn't risk putting our name behind yours.”</p>
            <p className="text-gray-400">“Major outlets are interested — Forbes, USA Today, International Business Times.”</p>
          </div>
          <p className="text-gray-400 mb-3">Nothing changed about PHIERS. Not after hours of interviews. Not after a second review from a UK-based PR firm traded on the London Stock Exchange.</p>
          <p className="text-gray-400 mb-4">What changed was their understanding of who built it — and what it was built to disrupt.</p>
          <p className="text-gray-400">That endurance is not a tragedy. It is the proof of concept. If PHIERS could be built under those conditions — it can survive anything.</p>
        </section>

        <hr className="border-green/20 my-8" />

        {/* The Mirror (BAFTA incident) */}
        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <p className="text-gray-600 text-sm italic mb-3">The pattern didn't stop at home — it showed up globally.</p>
            <h2 className="font-display text-3xl text-white mb-4">The Mirror</h2>
            <p className="text-gray-400 mb-3">The BAFTA incident is not the story. It is the mirror.</p>
            <p className="text-gray-400 mt-4 mb-3">A global stage gave two Black men visibility. Then failed to protect their dignity.</p>
            <p className="text-gray-400 mb-3">The N-word was shouted at them. More than once.</p>
            <p className="text-gray-400 mt-4 mb-3">BAFTA had a tape delay. The BBC had editors. Warner Bros. immediately requested the slur be removed.</p>
            <div className="bg-[#161616] border-l-4 border-l-gray-500 rounded-r-lg p-5 my-6">
              <p className="text-gray-300 mb-2"><strong className="text-white">What was removed from the broadcast?</strong> A joke about “corrupt leaders.” A filmmaker saying “Free Palestine.”</p>
              <p className="text-gray-400 mt-2"><strong className="text-white">What was not removed?</strong> The racial slur directed at two Black men on a global stage.</p>
            </div>
            <p className="text-gray-400 mb-3">That same week, a UK-based PR firm shifted direction after warm, collaborative conversations about PHIERS. The energy changed. They backed out of a signed contract. No questions asked.</p>
            <div className="border-t border-b border-[#222] py-6 my-6 text-center">
              <p className="text-white text-base italic mb-2">“Different institution. Same pattern. Same silence. Same discomfort with Black excellence that disrupts the status quo.”</p>
              <span className="text-gray-600 text-sm">— Will Price, on what he observed</span>
            </div>
            <p className="text-gray-400">Our response is not retaliation. Our response is solutions that make silence indefensible.</p>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* Why Black Men Should Walk Tall */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">Why Black Men Should Walk Tall</h2>
          <p className="text-gray-400 mb-3">Not because the world treats us well. But because we keep building anyway.</p>
          <p className="text-gray-400 mt-4 mb-3">When institutions fail to protect us — we still protect others.</p>
          <p className="text-gray-400 mb-3">When institutions refuse to support us — we still support others.</p>
          <p className="text-gray-400 mb-3">When institutions underestimate us — we still outperform them.</p>
          <div className="bg-[#161616] border-l-4 border-l-gray-300 rounded-r-lg p-5 my-6">
            <p className="text-gray-300 text-base mb-2"><strong>We improve the lives of everyone else<br />more than they can improve ours without us.</strong></p>
            <p className="text-gray-400 mt-3">That is why we stand tall. That is why we speak with dignity. That is why we are unbreakable.</p>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* The Invitation – March 28 framing */}
        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">The Invitation</h2>
            <p className="text-gray-400 mb-3">On March 28, 2026, hundreds of thousands of people marched across America. They had energy. They had presence. They had speeches. Congress went back to work on Monday like nothing happened.</p>
            <p className="text-gray-400 mb-3">That is not a failure of the people who showed up. That is a failure of the tool. You cannot move Congress with a march that has no mechanism. No verified count by district. No specific demands on record. No consequence for ignoring the crowd.</p>
            <p className="text-gray-400 mb-3"><span className="font-bold text-green-300">PHIERS is what the march was missing.</span></p>
            <p className="text-gray-400 mb-3">And now we're inviting 1,500 Black men per congressional district to be the ones who deliver it. We present the verified demands. We call the mandatory town hall. We make Congress answer — publicly, on the record. Or we document their refusal and begin the process of replacing them.</p>
            <p className="text-gray-400 mb-3">We will be the ones credited with ending a war that had no Congressional authorization. We will be the ones credited with forcing healthcare access for millions. We will be the ones who showed the world that the people it spent centuries trying to erase — were the ones who saved it.</p>
            <p className="text-green-300 font-semibold">A gift to humanity. From the people humanity forgot to protect.</p>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* The Call to Pride */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">The Call to Pride</h2>
          <p className="text-gray-400 mb-3">To every Foundational Black American man who has been dismissed, sabotaged, blacklisted, or written off: See what we built anyway.</p>
          <div className="my-6 space-y-1">
            <p className="text-gray-400">We have been sabotaged. Betrayed. Disrupted. Blacklisted. Homeless. Erased.</p>
            <p className="text-white font-bold text-base mt-4">And we built anyway.</p>
          </div>
          <p className="text-gray-400 mb-3">They gutted DEI. We kept building. They dismantled federal protections. We kept building. They stole the ballot. We kept building. They started a war nobody asked for. We already had the peace plan.</p>
          <p className="text-gray-400 mb-3">PHIERS is what building anyway looks like at scale. UNBREAKABLE is not a complaint. It is not a performance. It is not a reaction. It is proof.</p>
          <div className="border-t border-b border-[#222] py-6 my-6 text-center">
            <p className="text-white text-base italic mb-2">“PHIERS is the proof of what happens when Black men build with integrity under pressure. And the world is better for it.”</p>
            <span className="text-gray-600 text-sm">— Will Price, PHIERS Founders</span>
          </div>
          <p className="text-white text-lg text-center font-bold tracking-wide leading-loose">
            If not this, what?<br />
            If not now, when?<br />
            If not us, who?
          </p>
        </section>

        <hr className="border-green/20 my-8" />

        {/* Pathos Video (original) */}
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

        <hr className="border-green/20 my-8" />

        {/* This Cannot Be Erased */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">This Cannot Be Erased</h2>
          <p className="text-gray-400 mb-4">This page permanently establishes:</p>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
            <li>The legitimacy of the PHIERS model</li>
            <li>The integrity of its founders under sustained pressure</li>
            <li>The systemic pattern of resistance they survived</li>
            <li>The validation from a Fortune 500 PR firm — before the silence</li>
            <li>The proof that Black men flew the missions that turned World War II</li>
            <li>The proof that Black men liberated concentration camps</li>
            <li>The proof that Black men built governments during Reconstruction — and were removed by force, not by failure</li>
            <li>The inevitability of PHIERS' national impact</li>
            <li>The strength and excellence of a Black-led solution built for everyone</li>
          </ul>
          <div className="bg-[#161616] border-l-4 border-l-gray-300 rounded-r-lg p-5">
            <p className="text-gray-300"><strong className="text-white">PHIERS is not a pitch. PHIERS is not a protest. PHIERS is the future — built by people who were unbreakable when it mattered most.</strong></p>
          </div>
        </section>

        <hr className="border-green/20 my-8" />

        {/* Final CTA Block */}
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

        {/* Trilogy continuation links */}
        <div className="border-t border-gray-800 py-8 mt-16 text-center">
          <p className="text-gray-400 text-sm mb-3">Now that you see the pattern… see how it works.</p>
          <a href="/unstoppable" className="text-green-400 hover:underline">→ UNSTOPPABLE — the movement &amp; math</a>
        </div>
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
              <button onClick={closeModal} className="absolute -top-10 right-0 text-white text-3xl cursor-pointer hover:text-green transition-colors">✕</button>
              <Image src={modalImage} alt="Enlarged view" width={800} height={600} className="rounded-xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top" id="back-to-top" aria-label="Back to top">↑</button>

      <style jsx global>{`
        .back-to-top { position: fixed; bottom: 24px; right: 24px; background: #3ddc84; color: #0a1022; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; opacity: 0; visibility: hidden; transition: all 150ms ease; z-index: 999; border: none; }
        .back-to-top.visible { opacity: 1; visibility: visible; }
        .back-to-top:hover { background: #2ab568; transform: translateY(-2px); }
        .video-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; border: 2px solid rgba(61, 220, 132, 0.2); box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5); }
        .video-wrapper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: pointer; }
        .blockquote-pull { font-size: 1.25rem; font-style: italic; border-left: 4px solid #3ddc84; padding-left: 1.5rem; margin: 2rem 0; color: #e5e7eb; }
        .blockquote-pull .attr { font-size: 0.875rem; color: #9ca3af; margin-top: 0.5rem; font-style: normal; }
        .section-spacing { margin-top: 5rem; margin-bottom: 5rem; }
      `}</style>
      <script dangerouslySetInnerHTML={{
        __html: `window.addEventListener('scroll', function() { var btt = document.getElementById('back-to-top'); if (btt) { if (window.scrollY > 400) { btt.classList.add('visible'); } else { btt.classList.remove('visible'); } } });`
      }} />
    </>
  )
}