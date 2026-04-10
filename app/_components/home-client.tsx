'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/animated-section'
import { AlertTriangle, ChevronRight, Sparkles } from 'lucide-react'

const evolutionTimeline = [
  {
    year: '2009',
    title: 'Public Health Information Exchange & Reporting System',
    body: 'Backbone infrastructure to coordinate care, reduce waste, and protect communities the system abandoned.',
  },
  {
    year: 'Phase 2',
    title: "People's Health Insurance Endowment & Referral Service",
    body: 'Healthcare access and affordability at scale using legal authority that already exists.',
  },
  {
    year: 'Phase 3',
    title: 'Safety net for the safety net',
    body: 'Built to stabilize jobs, supply chains, food, housing, and healthcare when they break together.',
  },
  {
    year: 'Now',
    title: "Power Held In Every Representative's Seat",
    body: 'A constitutional mechanism that gives organized people leverage over Congress and the market.',
  },
]

const spiralItems = [
  'Military escalation drives oil shocks and tighter supply chains.',
  'Healthcare costs surge as medicine and equipment costs rise.',
  'Workers get sicker, poorer, and easier to push to the edge.',
  'Economic pressure grows while wages stall and instability spreads.',
  'Political extremism grows in the vacuum, raising escalation risk again.',
  'Loop repeats — each cycle harder to break than the last.',
]

const powerBlocks = [
  {
    title: 'Political Power',
    body: '1,500 organized constituents triggers a mandatory public town hall. If they refuse, they get a primary challenge. Documented. Coordinated. Real.',
  },
  {
    title: 'Economic Power',
    body: '$2.73 trillion in annual waste can be redirected from insurance overhead to people. The money already exists. We force the pivot.',
  },
  {
    title: 'Consumer Power',
    body: 'PHIERSale cuts out middlemen and sends savings back to members. No extraction model. No profit skimming. No fake reform.',
  },
]

export function HomeClient() {
  return (
    <div className="min-h-screen pt-14">
      <section className="px-4 py-4 bg-red-500/10 border-y border-red-500/30">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <p className="text-sm md:text-base text-red-100">
            <span className="font-semibold">⚠️ Congress is home through April 14.</span>{' '}
            A president who threatened to destroy a civilization has no authorization for this war.
            Your name in your district is the leverage that changes that.
          </p>
          <Link href="/petition" className="inline-flex items-center gap-2 text-sm font-semibold text-red-50 hover:text-white">
            Be Counted Now <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="relative px-4 pt-14 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3ddc84]/10 via-transparent to-transparent" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <p className="text-[#3ddc84] uppercase text-xs tracking-[0.24em] mb-4">PHIERStorm</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.08]">
              Everyone knows the nation is in free fall. Tariffs, war, broken healthcare, a Congress that won't act.
              <br className="hidden md:block" />
              The only question is: do you have a plan that works when everything else fails?
              <br className="hidden md:block" />
              We do. We built it over 16 years. It's shovel-ready. And it starts with your name in your district.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-14">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-4">
          <Link href="/petition" className="rounded-2xl border border-[#3ddc84]/40 bg-[#3ddc84]/15 p-6 hover:bg-[#3ddc84]/20 transition-colors">
            <p className="text-xl font-bold">✍ I&apos;m ready to be counted — add my name</p>
            <p className="text-sm text-gray-300 mt-2">30 seconds · name, email, zip · counted in your district</p>
          </Link>
          <Link href="/organizers" className="rounded-2xl border border-amber-400/50 bg-amber-500/10 p-6 hover:bg-amber-500/15 transition-colors">
            <p className="text-xl font-bold">✊ I bring people — show me what PHIERS does for them</p>
            <p className="text-sm text-gray-300 mt-2">Organizers · unions · coalitions · movement builders</p>
          </Link>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">or scroll to understand the full picture ↓</p>
      </section>

      <section className="px-4 py-16 bg-[#0a1020]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8 items-start">
          <AnimatedSection>
            <p className="text-red-300 text-sm uppercase tracking-[0.18em] mb-3">This Is Not a Foreign Policy Story</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">This Is Your Kitchen Table. Your Medicine Cabinet. Your Kids.</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              There is no part of your life that doesn&apos;t run on oil. Food, medicine, transport, hospital supplies — all of it.
              When the Strait of Hormuz is threatened, inflation doesn&apos;t inch up. It detonates across every chain at once.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Congress never authorized this war. No vote. No debate. No exit strategy.
              Congress won&apos;t fix this. The corporations won&apos;t fix this. You will. We can. PHIERS gives us the mechanism.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 space-y-3">
              {[
                'Military escalation threatens the most critical oil chokepoint on earth.',
                'Energy prices spike across every sector tied to fuel.',
                'Food and medicine costs climb at the same time.',
                'Healthcare spikes on top of already broken healthcare costs.',
                'Supply chains fracture exactly where families are most exposed.',
                'People least able to absorb the shock get hit first and hardest.',
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-red-50">
                  <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/no-war" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#3ddc84] hover:text-[#63e29c]">
              End the Unauthorized War — see how PHIERS forces Congress to act <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <p className="text-[#3ddc84] text-sm uppercase tracking-[0.18em] mb-3">Sixteen Years in the Making</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">It Didn&apos;t Start Here. But It Was Always Heading Here.</h2>
            <p className="text-gray-300 max-w-3xl">
              This isn&apos;t a reaction. It&apos;s a system built for this moment. Legal. Funded. Ready.
              We use the ACA&apos;s own authority against the people who gutted it.
            </p>
          </AnimatedSection>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {evolutionTimeline.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">{step.year}</p>
                  <h3 className="font-semibold text-lg mt-1">{step.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-[#0a1020]">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-7">
            <p className="text-blue-200 uppercase text-sm tracking-[0.18em] mb-2">Global Union Block</p>
            <h2 className="text-3xl font-bold mb-3">Workers Built This Country. Workers Will Rebuild It.</h2>
            <p className="text-gray-200 leading-relaxed">
              Broken supply chains didn&apos;t happen by accident. They were built on workers being undercut, outsourced, and burned out.
              PHIERS connects labor, mutual aid, cooperative marketplaces, and district-level pressure so recovery is coordinated — not chaotic.
              The system is designed to bleed you dry. PHIERS cuts out middlemen and puts the savings back in your pocket.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <p className="text-amber-300 text-sm uppercase tracking-[0.18em] mb-3">Why This Is Credible</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Theory. Already Proven at Scale.</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[
              'Mark Cuban\'s Cost Plus Drugs proved direct buying can slash costs 80–90%.',
              'Harvard Kennedy School (Chenoweth): sustained 3.5% participation drives systemic change.',
              'A Fortune 500 PR firm reviewed PHIERS and confirmed the mechanism is viable.',
              'Congressional support letters date back to 2009 — this is documented, not improvised.',
              'ACA authority already exists. Congress can act now without new legislation.',
              '16 years of prior art across healthcare, logistics, and district-level accountability.',
            ].map((point, i) => (
              <AnimatedSection key={point} delay={i * 0.06}>
                <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-gray-300 h-full">
                  {point}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-[#0a1020]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8">
          <AnimatedSection>
            <p className="text-[#3ddc84] text-sm uppercase tracking-[0.18em] mb-2">The 5D System</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Five Crises. One Spiral. One Way Out.</h2>
            <p className="text-gray-300 mb-4">
              We were taught to fight separate battles. That fragmentation is why nothing gets fixed.
              PHIERStorm is the pattern interrupt.
            </p>
            <Link href="/crisis" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3ddc84] hover:text-[#63e29c]">
              See the full 5D crisis breakdown <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
              {spiralItems.map((item) => (
                <div key={item} className="flex gap-3 text-sm text-gray-300">
                  <Sparkles className="w-4 h-4 mt-0.5 text-[#3ddc84] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <p className="text-[#3ddc84] text-sm uppercase tracking-[0.18em] mb-2">Three Kinds of Power</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Most Movements Only Have One. PHIERS Gives You All Three.</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {powerBlocks.map((block, i) => (
              <AnimatedSection key={block.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 h-full">
                  <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
                  <p className="text-sm text-gray-300">{block.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-[#0a1020]">
        <div className="max-w-[900px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Five Crises. One Lever. Your Name Starts It.</h2>
            <p className="text-gray-300 leading-relaxed mb-7">
              This is your name, your district, your demand — on the record.
              Counted. Delivered. Impossible to ignore.
              Built for the hard years. Ready for the crisis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/petition" className="px-6 py-3 rounded-xl bg-amber-400 text-[#080d1a] font-bold hover:bg-amber-300 transition-colors">
                ✍ BE COUNTED — 30 SECONDS
              </Link>
              <Link href="/organizers" className="px-6 py-3 rounded-xl bg-[#3ddc84] text-[#080d1a] font-bold hover:bg-[#63e29c] transition-colors">
                ✊ I Bring People — Show Me the Mechanism
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-3">
              <Link href="/no-war" className="px-5 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/10 transition-colors">⚠️ End the Unauthorized War</Link>
              <Link href="/leverage" className="px-5 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/10 transition-colors">⚡ See How the Leverage Works</Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              We built this before the crisis hit. The crisis is here. Now we use it. The only thing missing is you.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
