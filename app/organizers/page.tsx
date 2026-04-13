// FILE: app/organizers/page.tsx
// ORGANIZERS PAGE - For Movement Organizers

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function OrganizersPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[80px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={80}
              height={80}
              className="opacity-90"
            />
          </div>

          <p className="font-condensed text-gray-500 italic text-base mb-4">To every organizer, coordinator, and grassroots leader who has been fighting for accountability:</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            You Built<br />The Movement.<br /><span className="text-green">PHIERS.org</span><br />Gives It Teeth.
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[680px] mx-auto mb-6">
            The No Kings Rally will be the largest protest in American history. But without a mechanism to hold Congress accountable after March 28 — it becomes a photo op. PHIERS.org is that mechanism.
          </p>

          <div className="bg-red-500/10 border-l-4 border-l-red-500 rounded-r-lg p-6 max-w-[680px] mx-auto mb-8 text-left">
            <p className="text-body mb-2">We don't ask you to change your message.<br />We don't ask you to change your mission.<br />We don't ask you to join an organization.</p>
            <p className="text-white font-bold mt-3"><strong>We give your demands the one thing they're missing: teeth.</strong></p>
          </div>

          {/* Anchor Image */}
          <div className="max-w-[700px] mx-auto mb-8">
            <button onClick={() => openModal('/images/Congress_Dont_Work_4U-WEre_changing_that.jpg')} className="cursor-pointer w-full">
              <Image
                src="/images/Congress_Dont_Work_4U-WEre_changing_that.jpg"
                alt="Congress Doesn't Work For You — We're Changing That"
                width={700}
                height={400}
                className="w-full h-auto rounded-xl border-2 border-green/25 shadow-2xl hover:scale-[1.01] transition-transform"
              />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button href="#finalcall" variant="primary">→ Partner With PHIERS.org</Button>
            <Button href="/petition" variant="secondary">✍ Sign the Petition</Button>
          </div>
        </div>

        <hr className="border-green/20" />

        {/* Indivisible / 50501 Direct Address */}
        <section className="bg-bg-card2 border-t-4 border-t-gold section">
          <div className="container">
            <p className="font-condensed font-bold text-gold text-xs uppercase tracking-wider block mb-3">A Direct Message to Indivisible, 50501, and Every Org Building This Movement</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">You Said It Yourself.<br /><span className="text-green">Now Here's the Mechanism.</span></h2>

            <div className="bg-bg-card border-l-4 border-l-gold rounded-r-lg p-6 mb-6">
              <p className="font-condensed text-xs text-gold uppercase tracking-wider mb-3">Leah Greenberg, Co-Founder &amp; Co-Director, Indivisible — March 2026</p>
              <p className="text-white italic text-base mb-3">"The goal is to get that 11 million not just out, but sustainably engaged in the kinds of resistance that is actually capable of changing the course of this country."</p>
              <p className="text-gray-500 text-sm">— Interview, one week before NoKings III, March 28, 2026</p>
            </div>

            <p className="text-body mb-3">We heard you. And we agree with everything you said.</p>
            <p className="text-body mb-3">The rallies are working. The energy is real. The geographic spread — 3,000 events in almost every congressional district — is extraordinary. The fact that people are showing up in deeply red and rural areas where progressives were told they didn't exist? That's proof that this is bigger than any one party or ideology.</p>
            <p className="text-body mb-3">But you named the gap yourself: <strong className="text-white">sustained engagement in resistance that actually changes the course of this country.</strong></p>
            <p className="text-body mb-3">That's the piece that's been missing. Not the people. Not the energy. Not the courage.</p>
            <p className="font-condensed font-bold text-xl text-white mb-6">The mechanism.</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5">
                <p className="font-condensed font-bold text-red-500 text-base mb-2">❌ Without a mechanism</p>
                <p className="text-body text-sm">People march. Feel solidarity. Go home. Congress waits it out. The dopamine fades. Exhaustion sets in. The moment passes. The same people who showed up have to be re-motivated for the next rally.</p>
              </div>
              <div className="bg-green-glow border border-green/30 rounded-lg p-5">
                <p className="font-condensed font-bold text-green text-base mb-2">✅ With PHIERS as the mechanism</p>
                <p className="text-body text-sm">People march. Then they add their name to the district record. 1,500 names triggers a mandatory town hall. Their representative has to show up, answer, and comply — or face a primary challenge before the next election. The energy converts into documented, permanent leverage.</p>
              </div>
            </div>

            <p className="text-body mb-6">You're already doing the hardest part — getting people in the door and keeping them engaged. PHIERS is what they do <em>with</em> that engagement the morning after the rally.</p>

            <div className="bg-bg-card border-2 border-green rounded-xl p-6 text-center mb-8">
              <p className="font-display text-2xl text-green mb-3">You fill their cup.<br />PHIERS is what they do with the energy.</p>
              <p className="text-body text-sm max-w-[560px] mx-auto">We're not asking you to change your message, your mission, or your movement. We're asking you to point your people to the mechanism that makes everything you've already built impossible to ignore.</p>
            </div>

            {/* Three Demands */}
            <div>
              <p className="font-condensed font-bold text-white text-lg mb-4">The three demands PHIERS makes possible — starting with what you're already calling for:</p>
              <div className="space-y-3">
                <div className="flex gap-4 items-start p-4 bg-bg-dark border border-green/20 rounded-lg">
                  <span className="text-2xl">⚔️</span>
                  <div>
                    <p className="font-condensed font-bold text-red-500 mb-1">Stop the War. Prevent the Draft.</p>
                    <p className="text-body text-sm">You said it in your interview: "We are in need of the kind of large people-powered broad-based protest in every community in the country that sends a real signal particularly to Republicans that their constituents are not going to back them on this horrifying escalation of war." PHIERS makes that signal impossible to ignore — because it's on the public record, district by district, with electoral consequences attached.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-bg-dark border border-green/20 rounded-lg">
                  <span className="text-2xl">🏥</span>
                  <div>
                    <p className="font-condensed font-bold text-green mb-1">Open TeleCARE Through the ACA Exchange.</p>
                    <p className="text-body text-sm">$600 replaces $10,000. Congress already has the authority. The savings fund universal healthcare, a jobs guarantee, and a monthly check for every American. This is the first domino — and it generates the resources to solve everything that comes after it.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-bg-dark border border-green/20 rounded-lg">
                  <span className="text-2xl">🗳️</span>
                  <div>
                    <p className="font-condensed font-bold text-gold mb-1">Restore Democracy. Replace Those Who Refuse.</p>
                    <p className="text-body text-sm">1,500 signatures in a district forces a mandatory town hall. Representatives who comply get protected. Representatives who don't face organized primary challenges — guaranteed to win — before November 2026. A Congress that listens is a Congress worth keeping. A Congress that doesn't gets replaced by one that will.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-bg-card border border-gold rounded-xl p-6 text-center mt-8">
              <p className="font-condensed font-bold text-gold text-lg mb-3">We're reaching out directly.</p>
              <p className="text-body text-sm max-w-[540px] mx-auto mb-4">An email is on its way to Indivisible, 50501, and allied organizations. If you're a leader or organizer in one of these groups — or if you want to be part of the conversation — reach out now. We respond to every inquiry.</p>
              <div className="flex flex-wrap gap-3 justify-center mb-3">
                <Link href="mailto:info@phiers.org" className="text-green hover:text-green-dim">info@phiers.org</Link>
                <Link href="tel:+19163068967" className="font-condensed font-bold text-gold border-2 border-gold px-6 py-2 rounded hover:bg-gold/10 transition-colors">📞 (916) 306-8967</Link>
              </div>
              <p className="text-gray-500 text-xs">Or share this page directly: <strong className="text-green">phiers.org/organizers</strong></p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* We See What You've Built */}
        <section className="container section">
          <p className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">We See What You've Built</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">You've Done <span className="text-green">The Hard Part.</span></h2>
          <div className="space-y-4 max-w-[720px]">
            <p className="text-body">You organized the marches. You built the coalitions. You got people off their couches and into the streets.</p>
            <p className="text-body">That energy is real. That anger is justified. That demand for accountability is the most American impulse there is.</p>
            <p className="text-body">And you know better than anyone what happens next.</p>
            <p className="text-body">People march. Speeches are made. Photos are taken. Congress waits it out. And nothing changes.</p>
            <p className="text-body">Not because the movement failed. Because protest alone has never been enough.</p>
          </div>

          <div className="border-t-2 border-b-2 border-green py-8 my-8 text-center">
            <p className="font-display text-2xl md:text-3xl text-white">Power concedes nothing without<br />a demand that has <span className="text-green">TEETH.</span></p>
          </div>

          <div className="space-y-4 max-w-[720px]">
            <p className="text-body">The movements that changed history didn't just march. They marched <em>and</em> they organized. They created visibility <em>and</em> leverage. They demanded change <em>and</em> enforced consequences.</p>
            <p className="text-body">PHIERS.org is the enforcement mechanism your movement has been building toward.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Gap Every Movement Faces */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <p className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Gap Every Movement Faces</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Visibility Without Accountability<br />Is Just <span className="text-red-500">Noise.</span></h2>

            <div className="bg-bg-card border-l-4 border-l-red-500 rounded-r-lg p-5 mb-6">
              <p className="font-condensed font-bold text-xl text-white">Congress ignores protests because protests don't threaten their jobs.</p>
            </div>

            <p className="text-body mb-3">Politicians calculate the cost of responding versus the cost of waiting it out. Most of the time — waiting wins.</p>
            <p className="text-body mb-6">The only thing that reliably moves Congress is organized constituent pressure with documented electoral consequences. When a politician sees that 1,500 verified constituents in their own district are aligned on a specific demand — and that those constituents will act on it — the math changes.</p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">📸</div>
                <h3 className="font-condensed font-bold text-red-500 text-lg mb-2">Protest Alone</h3>
                <p className="text-body text-sm">Creates visibility. Generates news coverage. Signals public sentiment. But has no mechanism to force response. Congress waits it out. The moment fades.</p>
              </div>
              <div className="bg-green-glow border border-green/30 rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-condensed font-bold text-green text-lg mb-2">Protest + PHIERS.org</h3>
                <p className="text-body text-sm">Creates visibility AND documented leverage. Turns public sentiment into constituent demands on the record. Forces response or triggers organized consequences. The moment becomes permanent.</p>
              </div>
            </div>

            <p className="font-condensed font-bold text-white text-lg"><strong>No leverage = no change.</strong> That's the lesson of every protest movement that faded. The ones that didn't fade had a mechanism. PHIERS.org is the mechanism.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What PHIERS.org Adds */}
        <section className="container section">
          <p className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What PHIERS.org Adds</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Protests Create Visibility.<br />PHIERS.org Creates <span className="text-green">Leverage.</span><br />The Movement Needs Both.</h2>
          <p className="text-body mb-8">PHIERS.org is a citizen coordination system built to turn public energy into documented political pressure — district by district, representative by representative. Here's what it adds to everything you've already built:</p>

          <div className="space-y-3">
            <div className="flex gap-4 items-start bg-bg-dark border border-green/20 rounded-lg p-4 hover:border-green transition-colors">
              <div className="text-2xl">🎯</div>
              <div>
                <h3 className="font-condensed font-bold text-green text-lg mb-1">A Specific, Winnable First Demand</h3>
                <p className="text-body text-sm">$600 telehealth on the ACA Exchange. The math is undeniable. Congress has the authority under the ACA to act tomorrow. They've simply refused — because nobody has made the cost of refusal higher than the cost of compliance. Until now.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-bg-dark border border-green/20 rounded-lg p-4 hover:border-green transition-colors">
              <div className="text-2xl">📋</div>
              <div>
                <h3 className="font-condensed font-bold text-green text-lg mb-1">A Documented Public Record</h3>
                <p className="text-body text-sm">Every signature. Every survey response. Every constituent priority — on the public record, by district, delivered directly to elected officials. Not a hashtag. Not a rally photo. A documented demand Congress cannot claim it never received.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-bg-dark border border-green/20 rounded-lg p-4 hover:border-green transition-colors">
              <div className="text-2xl">🗺️</div>
              <div>
                <h3 className="font-condensed font-bold text-green text-lg mb-1">A District-by-District Pressure Mechanism</h3>
                <p className="text-body text-sm">When 1,500 constituents in a single district sign the petition and complete the survey, their representative is summoned to a town hall — where they must respond publicly, on the record, to their own constituents' documented demands.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-bg-dark border border-green/20 rounded-lg p-4 hover:border-green transition-colors">
              <div className="text-2xl">⚖️</div>
              <div>
                <h3 className="font-condensed font-bold text-green text-lg mb-1">Electoral Consequences</h3>
                <p className="text-body text-sm">Representatives who refuse face organized primary challenges, special elections, and constituent campaigns — before November 2026. We do not wait for the midterms. We do not negotiate with indifference.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-bg-dark border border-green/20 rounded-lg p-4 hover:border-green transition-colors">
              <div className="text-2xl">🔄</div>
              <div>
                <h3 className="font-condensed font-bold text-green text-lg mb-1">A Permanent Accountability System</h3>
                <p className="text-body text-sm">As new threats arise, we update the survey. The mechanism doesn't fade after March 28. It builds toward July 4th, toward November 2026, and beyond — until we have a government that is for, by, and accountable to We the People.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What Partnership Looks Like */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <p className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What Partnership Looks Like</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">We Don't Ask You To Become PHIERS.org.<br />We Ask You To <span className="text-green">Point Your People Toward It.</span></h2>

            <p className="font-display text-4xl text-green text-center my-6">Tell your people to sign<br />the petition before March 28.</p>

            <p className="text-body mb-6">That's it. Every signature your network generates becomes documented leverage. Every survey response becomes constituent direction Congress must answer. Every share gets us closer to the 12 million that history shows cannot be ignored.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              <div className="bg-bg-card border border-green/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <strong className="text-white block mb-1">Winnable First Demand</strong>
                <p className="text-body text-xs">Specific, undeniable, achievable — the proof of concept that opens every door.</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📊</div>
                <strong className="text-white block mb-1">District-Level Data</strong>
                <p className="text-body text-xs">Where your members are, what they want, documented and delivered.</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🗓️</div>
                <strong className="text-white block mb-1">Three Deadlines</strong>
                <p className="text-body text-xs">March 28 → July 4th → November 2026. A movement with a calendar.</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏛️</div>
                <strong className="text-white block mb-1">15 Years of Work</strong>
                <p className="text-body text-xs">Validated by Pathos Communications, Mark Cuban's Cost Plus Drugs, Harvard Kennedy School research.</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <strong className="text-white block mb-1">Permanent Mechanism</strong>
                <p className="text-body text-xs">Doesn't fade after the rally. Builds and grows until Congress responds.</p>
              </div>
              <div className="bg-bg-card border border-green/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">✊</div>
                <strong className="text-white block mb-1">Constitutional Power</strong>
                <p className="text-body text-xs">Peaceful. Legal. Unstoppable. The founders built this mechanism in — we're using it.</p>
              </div>
            </div>

            <div className="bg-bg-card border-2 border-green rounded-xl p-6">
              <h3 className="font-condensed font-bold text-green text-2xl mb-4">What We Ask of You</h3>
              <ul className="space-y-2">
                <li className="text-body text-sm pl-6 relative"><span className="absolute left-0 text-green">✓</span> Share the petition link with your network before March 28</li>
                <li className="text-body text-sm pl-6 relative"><span className="absolute left-0 text-green">✓</span> Encourage your members to complete the PHIERS.org survey</li>
                <li className="text-body text-sm pl-6 relative"><span className="absolute left-0 text-green">✓</span> Use <strong className="text-gold">#PHIERdUpNow</strong> to connect the movements publicly</li>
                <li className="text-body text-sm pl-6 relative"><span className="absolute left-0 text-green">✓</span> Join the coalition of organizers giving the No Kings movement permanent teeth</li>
                <li className="text-body text-sm pl-6 relative"><span className="absolute left-0 text-green">✓</span> Reach out directly to coordinate how we amplify each other's work</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Why This Moment Is Different */}
        <section className="container section">
          <p className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Why This Moment Is Different</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The 250th Anniversary <span className="text-green">Changes Everything.</span></h2>
          <p className="text-body mb-6">July 4, 2026 marks 250 years since Americans declared independence from a government that stopped representing them. We have three deadlines and one mission:</p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 hover:border-green transition-colors">
              <div className="inline-block bg-green text-bg-deep font-condensed font-bold text-xs px-3 py-1 rounded-full mb-3">📅 March 28</div>
              <p className="font-condensed font-bold text-white text-lg mb-2">No Kings III</p>
              <p className="text-body text-sm">Every organizer who partners with PHIERS.org before March 28 helps turn the largest protest in American history into the beginning of permanent change. Don't let the energy fade. Give it a mechanism today.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 hover:border-green transition-colors">
              <div className="inline-block bg-green text-bg-deep font-condensed font-bold text-xs px-3 py-1 rounded-full mb-3">📅 July 4th</div>
              <p className="font-condensed font-bold text-white text-lg mb-2">The Second Declaration</p>
              <p className="text-body text-sm">12 million signatures. 250 years later. A peaceful, constitutional, undeniable demand for a government that is for, by, and accountable to We the People.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5 hover:border-green transition-colors">
              <div className="inline-block bg-green text-bg-deep font-condensed font-bold text-xs px-3 py-1 rounded-full mb-3">📅 November 2026</div>
              <p className="font-condensed font-bold text-white text-lg mb-2">The Realignment</p>
              <p className="text-body text-sm">Every candidate in every district knows the public is organized and keeping score. The only people elected are those who publicly commit to the will of their constituents. Corruption loses its grip.</p>
            </div>
          </div>

          <p className="text-body text-center">This is how we make the No Kings movement permanent. Not just a moment — a mandate.</p>
        </section>

        <hr className="border-green/20" />

        {/* Final Call */}
        <section id="finalcall" className="bg-gradient-to-b from-bg-deep to-[#050a14] border-t-2 border-t-green section">
          <div className="container text-center">
            <p className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Ask</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">You've Given Everything<br />To Build This Movement.<br /><span className="text-green">Give It One More Thing.</span></h2>

            <p className="text-body max-w-[600px] mx-auto mb-6">
              PHIERS.org has been building this mechanism since 2009 — forged under pressure, validated by people who know the difference, ready to deploy the moment the movement is ready to use it.<br /><br />
              That moment is now.<br /><br />
              The No Kings Rally showed what's possible when people organize.<br />
              PHIERS.org shows what's possible when that organization has a mechanism behind it.<br /><br />
              Together — the rally becomes the spark. PHIERS.org becomes the fire.
            </p>

            <div className="my-6">
              <p className="font-display text-3xl text-white">PHIERS.org — pronounced "fires."<br /><span className="text-green">As in transformation.</span></p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 justify-center mb-8">
              <Button href="#finalcall" variant="primary">→ Partner With PHIERS.org Now</Button>
              <Button href="/petition" variant="secondary">✍ Sign the Petition</Button>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform?usp=header" variant="secondary">📋 Take the Survey</Button>
            </div>

            <div className="bg-bg-card border border-green/20 rounded-xl p-6 max-w-[500px] mx-auto text-left mb-6">
              <h3 className="font-condensed font-bold text-green text-xl mb-3">Ready to coordinate directly?</h3>
              <p className="text-body text-sm mb-2">Reach out to discuss how PHIERS.org can amplify your coalition's work before March 28.</p>
              <p className="text-body text-sm mb-1">📧 Email: <Link href="mailto:info@phiers.org" className="text-green hover:text-green-dim">info@phiers.org</Link></p>
              <p className="text-gray-500 text-xs mt-3">We respond to every organizer inquiry. This movement belongs to all of us.</p>
            </div>

            <div className="bg-bg-card border border-green/20 rounded-xl p-5 max-w-[500px] mx-auto mb-6">
              <p className="text-body text-sm mb-2">The biggest protest in American history deserves a mechanism. Send this page to every organizer you know.</p>
              <div className="font-display text-2xl text-green">#PHIERdUpNow</div>
            </div>

            <div className="bg-bg-card border-l-4 border-l-green rounded-r-lg p-6 max-w-[560px] mx-auto">
              <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mb-4" />
              <h4 className="font-condensed font-bold text-white text-lg mb-2">📬 Get Notified When We Reach Critical Mass</h4>
              <p className="text-body text-sm mb-4">Be the first to know when PHIERS.org benefits become available and when it's time to act in your district.</p>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform?usp=header" variant="primary">→ Join the Newsletter</Button>
              <p className="text-gray-500 text-xs mt-3">No spam. No fundraising. Just the signal when it matters. · <Link href="mailto:info@phiers.org" className="text-green">info@phiers.org</Link></p>
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
        .bg-green-glow {
          background: rgba(61, 220, 132, 0.06);
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

// END FILE: app/organizers/page.tsx
