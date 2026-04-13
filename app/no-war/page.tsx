// FILE: app/no-war/page.tsx
// NO WAR PAGE - End the Unauthorized War, Stop the Draft

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function NoWarPage() {
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
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white text-center py-3 px-4 font-condensed font-bold text-sm z-50 relative">
        <span className="inline-block bg-black/25 rounded px-2 py-0.5 mr-2 text-xs tracking-wide">URGENT</span>
        Congress is home right now. A president who threatened to destroy a civilization has no congressional authorization for this war.
        <strong className="mx-1">The window is open. Your name is leverage.</strong>
        <Link href="/petition" className="text-white underline font-black ml-1">→ BE COUNTED</Link>
      </div>

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
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">End the War · Stop the Draft</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            <span className="text-red-500">End the Unauthorized War.</span><br />
            <span className="text-green">One coordinated action creates the leverage to force Congress to do its job.</span>
          </h1>
          <p className="font-condensed text-xl text-white mb-2">Congress Never Voted For This. Your Kids Shouldn't Have To Fight In It.</p>
          <p className="font-condensed text-lg text-green font-bold mb-4"><strong>PHIERStorm is how we stop it.</strong></p>

          <div className="bg-green-glow border border-green/20 rounded-r-lg p-5 my-6 border-l-4 border-l-green text-left">
            <p className="font-condensed font-bold text-green text-base">
              The same coordinated action builds the leverage to stop this war — and fix healthcare at the same time.<br />
              Not later. Not separately. The same pressure forces both.
            </p>
          </div>
        </div>

        {/* Context: Who's Responsible */}
        <div className="bg-gold/10 border-l-4 border-l-gold p-6 mx-auto max-w-[900px] mb-8 rounded-r-lg">
          <p className="font-condensed font-bold text-gold text-lg mb-3">
            ⚖️ Here's what's actually happening:
          </p>
          <p className="text-body text-base mb-3 text-white">
            The President is pushing us deeper into war — without a congressional vote. <strong>Congress is funding it anyway.</strong>
          </p>
          <p className="text-body text-base">
            The Constitution is clear: <strong>Congress declares war.</strong> Not the President. Not the Pentagon. Not defense contractors.
            Your representatives have the power to stop this — but they won't, until we give them a reason to fear the consequences.
          </p>
          <p className="font-condensed font-bold text-green text-sm mt-4">
            PHIERS is that reason.
          </p>
        </div>

        {/* URGENT BANNER */}
        <div className="bg-red-500/20 border-l-6 border-l-red-600 p-6 mx-auto max-w-[900px] mb-8 rounded-r-lg">
          <p className="font-condensed font-bold text-xl text-white mb-2">
            ⚠️ URGENT: War escalation is the biggest threat to everything, everywhere, all at once.
          </p>
          <p className="text-body text-sm">
            If the war spirals, nothing else matters. The draft isn't a conspiracy — it's being discussed in the Pentagon right now.
            We stop it now, or we may never get the chance. <span className="text-red-500 font-bold">This is the priority.</span>
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto my-8 px-4">
          <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center">
            <div className="font-display text-4xl text-red-500">$1B+</div>
            <p className="text-body text-sm mt-2">Every single day. That's what the unauthorized war costs American taxpayers — with no congressional approval, no exit strategy, and no end in sight.</p>
          </div>
          <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center">
            <div className="font-display text-3xl text-gold">Stop the Draft</div>
            <p className="text-body text-sm mt-2">They're floating it. No vote to start the war — no vote should send your kids to fight in it. Stop it before it starts.</p>
          </div>
          <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center">
            <div className="font-display text-4xl text-red-500">0</div>
            <p className="text-body text-sm mt-2">Congressional declarations of war. Not one vote. Not one debate. Just a blank check your representatives signed with your money and your children's futures.</p>
          </div>
          <div className="bg-bg-card border border-green/20 rounded-xl p-5 text-center">
            <div className="font-display text-4xl text-gold">5,000+</div>
            <p className="text-body text-sm mt-2">U.S. troops deployed to the Middle East as of March 2026 — with more on the way. None of them sent there by a vote of Congress. All of them someone's kid.</p>
          </div>
        </div>

        {/* Draft Warning */}
        <div className="bg-red-500/10 border-2 border-red-500/40 rounded-xl p-6 mx-auto max-w-[700px] my-8 text-center">
          <p className="font-condensed font-bold text-xl text-white">The only thing that stops a draft is people who organized before it happened.</p>
        </div>

        {/* Supply Chain Impact */}
        <div className="bg-red-500/10 border-l-4 border-l-red-500 p-5 mx-auto max-w-[800px] my-6 rounded-r-lg">
          <p className="text-body text-sm">The ripple effects are already hitting your grocery bill, your gas prices, and your electric bill. Unauthorized wars don't stay in the Middle East — they come home through every supply chain connected to oil. <Link href="/crisis" className="text-red-500 font-bold hover:text-red-400">→ See the full economic picture on the Crisis page</Link></p>
        </div>

        <hr className="border-green/20" />

        {/* Soldiers Image */}
        <div className="max-w-[700px] mx-auto my-8 px-4">
          <button onClick={() => openModal('/images/veterans_from_back.jpg')} className="cursor-pointer w-full">
            <Image
              src="/images/veterans_from_back.jpg"
              alt="Soldiers — someone's kids, someone's neighbors, someone's family"
              width={700}
              height={400}
              className="w-full h-auto rounded-xl border-2 border-red-500/30 shadow-2xl hover:scale-[1.01] transition-transform"
            />
          </button>
          <p className="font-condensed font-bold text-xs text-red-500 text-center tracking-wider uppercase mt-3">
            These are someone's kids. Someone's neighbors. Someone's family.<br />
            Congress sent them without a vote.
          </p>
        </div>

        <hr className="border-green/20" />

        {/* The War Nobody Authorized */}
        <section className="container section">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The War Nobody Authorized — <span className="text-red-500">And Now They Want Your Kids</span></h2>
          <p className="text-body mb-4">Congress never voted to authorize this war. Not once. No debate. No mandate. No exit strategy. The Constitution is unambiguous — Congress declares war. Not the President. Not a defense contractor. <strong className="text-white">Your Congress member.</strong> The one you elected. The one you can replace.</p>
          <p className="text-body mb-4">They didn't do their job. And now — with the conflict escalating and supply lines under attack — the word nobody wanted to hear is back on the table.<br /><span className="text-red-500 font-bold text-xl">Draft.</span></p>
          <p className="text-body mb-4">Your kids. Sent to fight in a war your representatives were too cowardly to put their names on. A war that costs over <strong className="text-white">$1 billion of your money every single day.</strong> A war that's already driving up your gas, your groceries, your electric bill — because when oil tankers get attacked in the Middle East, your kitchen table pays the price.</p>
          <p className="text-body"><strong className="text-white">Nothing they wanted. Everything they feared.</strong> Not because their voices don't matter — but because they had no <em>leverage</em>.</p>
        </section>

        <hr className="border-green/20" />

        {/* Why Protest Alone Won't Stop a Draft */}
        <section className="container section">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Why Protest Alone <span className="text-red-500">Won't Stop a Draft</span></h2>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
            <p className="text-body mb-3">Congress ignores protests because protests don't threaten their jobs.</p>
            <p className="text-body mb-3">The only thing that reliably moves Congress is <strong className="text-white">organized people — district by district, names on the record, with documented electoral consequences.</strong> When a politician sees that 1,500 verified constituents in their district are aligned on an issue — and that those constituents will vote accordingly — the math changes.</p>
            <p className="text-body font-bold mb-3">No leverage means no change. That's the lesson of every failed movement.</p>
            <p className="text-body mb-3">Leverage doesn't come from one issue.<br />It comes from coordinated people acting together.</p>
            <p className="text-green font-bold">PHIERS builds the leverage — by organizing people around one winnable demand.<br />That same leverage applies everywhere immediately.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Stopping the War - How PHIERS Does It */}
        <section className="container section">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Stopping the War <span className="text-red-500">Is the Priority</span> — <span className="text-green">Here's How PHIERS Does It</span></h2>
          <p className="text-body mb-3">War escalation makes everything else impossible. The draft would tear families apart. Congress keeps funding it because they face <span className="text-red-500">no consequence</span> — until we give them one.</p>
          <p className="font-condensed font-bold text-gold text-lg mb-4">PHIERS is the mechanism that creates that consequence. Here's how it works:</p>
          <p className="text-body mb-6">This is one coordinated action — and how it creates leverage across all demands at the same time.</p>

          <div className="space-y-4 mb-6">
            <div className="bg-bg-card border border-green/20 rounded-xl p-5">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-black text-lg">1</div>
                <h3 className="font-condensed font-bold text-xl text-white">Organize around one winnable demand — healthcare.</h3>
              </div>
              <p className="text-body text-sm pl-12">$600 telehealth on the ACA Exchange — one specific, verifiable demand that saves $2.7 trillion a year and covers 234 million Americans. This is how we prove organized people can force results — fast.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-black text-lg">2</div>
                <h3 className="font-condensed font-bold text-xl text-white">Reach 3.5% — and nationwide leverage is real.</h3>
              </div>
              <p className="text-body text-sm pl-12">11.6 million people. Every district affected. Every seat becomes competitive. Congress must respond — or face replacement. Harvard research proved it: No sustained campaign that reached 3.5% participation has failed.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-black text-lg">3</div>
                <h3 className="font-condensed font-bold text-xl text-white">Lock in savings and political power simultaneously.</h3>
              </div>
              <p className="text-body text-sm pl-12">$2.7 trillion a year redirected from insurance to people — wages, veterans' care, and an economy that works. <Link href="/simple-math" className="text-green font-bold hover:text-green-dim">→ See the math</Link></p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-green text-bg-deep flex items-center justify-center font-condensed font-black text-lg">4</div>
                <h3 className="font-condensed font-bold text-xl text-white">That same leverage forces war accountability and stops the draft.</h3>
              </div>
              <p className="text-body text-sm pl-12">The moment Congress sees this level of organized leverage, the same force that compels healthcare reform compels war accountability — no more blank checks, no more undeclared conflicts.</p>
            </div>
          </div>

          <div className="bg-green-glow border border-green/20 rounded-xl p-4 text-center">
            <p className="font-condensed font-bold text-green text-lg">Build leverage once.<br />That same leverage forces healthcare reform, war accountability, and stops the draft.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        <div className="text-right max-w-[800px] mx-auto px-4 mb-4">
          <Link href="/solutions" className="font-condensed font-bold text-green text-sm hover:text-green-dim">→ See how this fixes wages, jobs, and stability: 5D Solutions</Link>
        </div>

        <hr className="border-green/20" />

        {/* Stop the War - Final Call */}
        <section className="container section">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Stop the War. <span className="text-red-500">Stop the Draft.</span> <span className="text-gold">Make Congress Do Its Job.</span></h2>
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-6">
            <p className="text-body mb-3">The energy in the streets is real. The anger is justified. But energy without mechanism is frustration that fades. And frustration that fades is exactly what they're counting on.</p>
            <p className="text-body font-bold text-lg mb-3">PHIERS is that mechanism. Healthcare builds the leverage. That same leverage forces accountability — including ending the unauthorized war and stopping the draft.</p>
            <p className="text-body mb-3">Not instead of protest. In addition to it.</p>
            <p className="text-green font-bold">With teeth.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">PHIERS Can Deliver. <span className="text-green">Now Is the Time.</span></h2>
          <p className="text-body text-lg max-w-[700px] mx-auto mb-4">
            One coordinated action creates leverage.<br />
            That leverage forces results — across every issue at once.<br />
            That same pressure forces Congress to end the war and stop the draft.
          </p>
          <p className="text-body text-lg max-w-[700px] mx-auto mb-6">Your name on the record isn't just about a $600 healthcare plan. It's proof that you showed up. That you were counted. That when the moment came — you didn't wait for someone else to fix it.</p>

          <div className="flex flex-col items-center gap-3 max-w-[320px] mx-auto">
            <Button href="/petition" variant="primary" fullWidth>⚠️ SIGN TO STOP THE WAR</Button>
            <Button href="/action" variant="secondary" fullWidth>→ See How It Works</Button>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform?usp=header" variant="secondary" fullWidth>📋 Take the Survey</Button>
            <Link href="/crisis" className="text-green text-sm font-condensed font-bold hover:text-green-dim text-center">← Back to the Crisis</Link>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Where You Go Next */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white text-center mb-6">Where You Go Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/crisis" className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="text-3xl mb-2">🚨</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">Crisis</h3>
              <p className="text-body text-sm">The full picture — healthcare, economy, war, and why it's all connected.</p>
              <span className="text-green text-sm font-condensed font-bold mt-2 inline-block">→ Explore →</span>
            </Link>
            <Link href="/telecare" className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">Telehealth vs Insurance</h3>
              <p className="text-body text-sm">$600 replaces $10,000 — the fix that starts the sequence.</p>
              <span className="text-green text-sm font-condensed font-bold mt-2 inline-block">→ Learn More →</span>
            </Link>
            <Link href="/leverage" className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">Leverage</h3>
              <p className="text-body text-sm">1,500 signatures in your district forces a mandatory Congressional response.</p>
              <span className="text-green text-sm font-condensed font-bold mt-2 inline-block">→ See the Math →</span>
            </Link>
            <Link href="/solutions" className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="text-3xl mb-2">🔬</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">5D Solutions</h3>
              <p className="text-body text-sm">Healthcare, jobs, economy, politics, peace — connected problems, one answer.</p>
              <span className="text-green text-sm font-condensed font-bold mt-2 inline-block">→ Discover →</span>
            </Link>
            <Link href="/simple-math" className="bg-bg-card border border-green/20 rounded-xl p-5 text-center hover:border-green transition-all">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">Simple Math</h3>
              <p className="text-body text-sm">The numbers that make this undeniable — $2.7 trillion in savings.</p>
              <span className="text-green text-sm font-condensed font-bold mt-2 inline-block">→ Crunch the Numbers →</span>
            </Link>
            <Link href="/action" className="bg-bg-card border border-red-500 rounded-xl p-5 text-center border-t-4 border-t-red-500 hover:border-red-500 transition-all">
              <div className="text-3xl mb-2">🌊</div>
              <h3 className="font-condensed font-bold text-xl text-white mb-2">Take Action</h3>
              <p className="text-body text-sm">Put your name on the record. This is where it counts.</p>
              <span className="text-green text-sm font-condensed font-bold mt-2 inline-block">→ Take Action →</span>
            </Link>
          </div>
        </section>

        <div className="text-center my-8">
          <div className="font-display text-2xl text-green">#PHIERdUpNow</div>
        </div>

        <hr className="border-green/20" />

        {/* Article 25 / Two Sets of Laws */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Legal Case</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Two Sets of Laws.<br /><span className="text-green">Both Say No.</span></h2>

          <p className="text-body mb-4">Most people know the constitutional argument. Congress declares war — not the President, not the Pentagon, not a defense contractor. Article I, Section 8. Written clearly. The President commands the military. Congress authorizes its use. That separation exists because the people who send others to war should be the people most directly accountable to those doing the dying.</p>

          <p className="text-body mb-4">Military action without a clear congressional authorization vote bypasses that accountability entirely. Members of Congress get to benefit from the action politically — or distance themselves from it — without ever having to put their names on it publicly.</p>

          <p className="text-body mb-4">That's the constitutional wall. What fewer people know is that there's a second one.</p>

          <div className="bg-gold/10 border-l-4 border-l-gold rounded-r-lg p-5 my-6">
            <p className="font-condensed font-bold text-gold text-lg mb-2">The international framework America built also says no.</p>
            <p className="text-body">The United Nations Charter — the framework America championed after World War II precisely to prevent nations from making unilateral decisions to use military force — is explicit. Article 2(4) prohibits the threat or use of force against another nation's territorial integrity. Article 25 obligates member states to act in accordance with Security Council decisions.</p>
          </div>

          <p className="text-body mb-6">Military action without UN authorization doesn't just raise constitutional questions. It breaks the rules America wrote, signed, and spent decades insisting every other nation follow.</p>

          <h3 className="font-condensed font-bold text-xl text-white mb-4">This matters in three concrete ways.</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-bg-card rounded-lg p-5 border-l-4 border-l-red-500">
              <p className="font-condensed font-bold text-white mb-2">First: it removes every justification.</p>
              <p className="text-body text-sm">You cannot credibly claim self-defense while initiating offensive military action. You cannot invoke American leadership to bypass the framework America built to hold every nation — including itself — accountable. The moment America exempts itself from the rules it wrote, it surrenders the moral standing to demand anyone else follow them.</p>
            </div>
            <div className="bg-bg-card rounded-lg p-5 border-l-4 border-l-green">
              <p className="font-condensed font-bold text-white mb-2">Second: it creates conditions for de-escalation.</p>
              <p className="text-body text-sm">The Strait of Hormuz stays open when the legal framework protecting it is one every party has standing to invoke. De-escalation requires a door both sides can walk through with dignity. Consistently applied international law is that door. An open strait means oil flows — and your grocery bill, your gas, your medicine, and your heat don't absorb a shock nobody voted for.</p>
            </div>
            <div className="bg-bg-card rounded-lg p-5 border-l-4 border-l-gold">
              <p className="font-condensed font-bold text-white mb-2">Third: it builds the widest possible coalition.</p>
              <p className="text-body text-sm">People who care about international law find standing here. People who care about sovereignty and rules that bind everyone equally find standing here. People who believe America should lead by example rather than by exemption find standing here. People who were promised an end to foreign entanglements find standing here. This is not a left argument or a right argument. It's a "we built these rules for a reason and that reason is right now" argument.</p>
            </div>
          </div>

          <div className="bg-bg-dark border border-white/10 rounded-xl p-6 my-6">
            <p className="font-condensed font-bold text-gray-500 text-xs uppercase tracking-wider mb-3">The kitchen table version</p>
            <p className="text-body text-sm mb-3">After World War II, America helped build a set of international rules. The whole point was simple: no more unilateral decisions to use military force. Because when powerful nations bypass the process, other powerful nations start bypassing it too. And when everyone bypasses it, the rules disappear. And when the rules disappear, what's left is whoever has the most weapons and the least restraint.</p>
            <p className="text-body text-sm font-bold text-white">We built those rules because we saw what the world looks like without them. Those rules are available right now. They belong to every American who wants to use them.</p>
          </div>

          <div className="text-center mt-6">
            <p className="font-condensed font-bold text-white text-lg mb-4">Make Congress invoke them.</p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Button href="/petition" variant="primary">✍ Add Your Name</Button>
              <Button href="/crisis" variant="secondary">→ The Full 5D Crisis</Button>
            </div>
          </div>
        </section>

        {/* Prev/Next Navigation */}
        <div className="container flex justify-between items-center py-6 border-t border-green/20 mt-8">
          <Link href="/veterans" className="font-condensed font-bold text-gray-500 text-sm hover:text-white transition-colors">
            ← Veterans
          </Link>
          <Link href="/leverage" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            The Leverage →
          </Link>
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

// END FILE: app/no-war/page.tsx
