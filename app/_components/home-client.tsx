'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/animated-section'
import { CountUp } from '@/components/count-up'
import {
  Zap, AlertTriangle, Shield, Heart, ShoppingCart, Briefcase,
  Wheat, Home, Globe, ChevronRight, Users, Target, Scale, FileText
} from 'lucide-react'

const solutions = [
  { icon: Heart, title: 'TeleCARE', desc: '$600/year healthcare for every American', href: '/telecare', color: 'text-red-400' },
  { icon: ShoppingCart, title: 'PHIERSale', desc: 'Cooperative marketplace cutting out middlemen', href: '/phiersale', color: 'text-blue-400' },
  { icon: Briefcase, title: 'PHIERWorks', desc: '2.3 million jobs rebuilding America', href: '/phierworks', color: 'text-yellow-400' },
  { icon: Wheat, title: 'Food Security', desc: 'Buy failed farms. Fertile soil. Feed people.', href: '/solutions#food', color: 'text-green-400' },
  { icon: Home, title: 'Housing', desc: 'Low-cost pre-fab housing at scale', href: '/solutions#housing', color: 'text-purple-400' },
  { icon: Globe, title: 'International Trade', desc: 'Fair trade that works for workers', href: '/solutions#trade', color: 'text-cyan-400' },
]

const exploreLinks = [
  { icon: AlertTriangle, title: 'The Crisis', desc: 'Why this moment matters', href: '/crisis' },
  { icon: Target, title: 'Leverage', desc: 'The key to everything', href: '/leverage' },
  { icon: Scale, title: 'The Teeth', desc: 'How we force action', href: '/the-teeth' },
  { icon: FileText, title: 'Simple Math', desc: '$2.73 trillion in savings', href: '/simple-math' },
  { icon: Shield, title: 'No War', desc: 'End it now', href: '/no-war' },
  { icon: Users, title: 'Organize', desc: 'Find your role', href: '/organizers' },
]

export function HomeClient() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3ddc84]/5 via-transparent to-transparent" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-8"
          >
            <Image src="/images/PHIERS_Logo.png" alt="PHIERS — Power Held In Every Representative's Seat" width={80} height={80} className="mx-auto mb-6" priority />

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-red-400">URGENT: Congress is home until April 14th</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-white">Demand Town Halls.</span>
              <br />
              <span className="text-[#3ddc84] text-glow">April 15th.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4">
              1,500 signatures per district. That&apos;s all it takes to force every member of Congress
              to face their constituents. End the war. Invoke Article 25. Launch investigations.
            </p>

            <p className="text-sm text-gray-500 mb-8">
              This is America&apos;s <span className="text-[#3ddc84] font-semibold">250th year</span>. Replace Congress before July 4th if they won&apos;t act.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/petition"
                className="px-8 py-4 bg-[#3ddc84] text-[#080d1a] font-bold text-lg rounded-xl hover:bg-[#34c474] hover:scale-105 transition-all shadow-lg shadow-[#3ddc84]/20"
              >
                Sign the Petition
              </Link>
              <Link
                href="/leverage"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-all"
              >
                How This Works
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Signatures Needed', value: 1500, suffix: '/district' },
              { label: 'Congressional Districts', value: 435, suffix: '' },
              { label: 'Savings Identified', value: 2730, prefix: '$', suffix: 'B' },
              { label: 'Jobs Created', value: 2300000, suffix: '' },
            ].map((stat: any, i: number) => (
              <div key={i} className="bg-white/5 rounded-xl p-5 text-center border border-white/5">
                <div className="text-2xl md:text-3xl font-bold text-[#3ddc84]">
                  <CountUp end={stat?.value ?? 0} prefix={stat?.prefix ?? ''} suffix={stat?.suffix ?? ''} />
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat?.label ?? ''}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LEVERAGE FIRST */}
      <section className="py-20 px-4 bg-[#0a1020]">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <Zap className="w-8 h-8 text-[#3ddc84] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leverage <span className="text-[#3ddc84]">First</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Without leverage over Congress, nothing changes. With it, everything becomes possible.
              Healthcare. Jobs. Food security. Housing. Trade. All of it flows from one thing:
              making Congress do their job.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Sign & Survey', desc: '1,500 per district. We map the pressure.' },
              { step: '02', title: 'Force Town Halls', desc: 'April 15th. Every district. No hiding.' },
              { step: '03', title: 'Replace or Reform', desc: 'July 4th deadline. Act or be replaced.' },
            ].map((item: any, i: number) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#3ddc84]/30 hover:shadow-lg hover:shadow-[#3ddc84]/5 transition-all duration-300">
                  <span className="text-[#3ddc84] font-mono text-sm">{item?.step}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{item?.title}</h3>
                  <p className="text-gray-400 text-sm">{item?.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* YOU ARE NOT POWERLESS */}
      <section className="py-12 px-4">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
              <Image src="/images/YOU_ARE_NOT_POWERLESS.jpg" alt="You are not powerless — the 3.5% rule proves it" fill className="object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* REAL PURPOSE */}
      <section className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Real <span className="text-[#3ddc84]">Purpose</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              PHIERS has spent 16 years building a solutions engine. Not to save America from decline —
              that ship has sailed — but to <span className="text-white font-medium">manage the decline and make it better</span>.
            </p>
            <p className="text-gray-500">
              $600/year healthcare. 2.3 million jobs. Cooperative marketplaces. Food security.
              Affordable housing. Fair trade. These aren&apos;t dreams. They&apos;re math. And the math works.
            </p>
          </AnimatedSection>

          {/* Key graphics */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#0d1525]">
                <Image src="/images/Guaranteed_Change_THUMBNAIL.jpg" alt="Guaranteed Change — 3.5% = 11.6M signatures" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#0d1525]">
                <Image src="/images/Congress_Dont_Work_4U-WEre_changing_that-BIG.jpg" alt="Congress doesn't work for you — we're changing that" fill className="object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-20 px-4 bg-[#0a1020]">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">The <span className="text-[#3ddc84]">Solutions</span></h2>
            <p className="text-gray-500 mt-2">Once we have leverage, everything else becomes possible.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions?.map((s: any, i: number) => {
              const Icon = s?.icon
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <Link href={s?.href ?? '#'} className="block group">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#3ddc84]/30 hover:bg-white/[0.07] transition-all duration-300 h-full">
                      {Icon && <Icon className={`w-8 h-8 mb-3 ${s?.color ?? 'text-white'}`} />}
                      <h3 className="text-lg font-bold mb-1 group-hover:text-[#3ddc84] transition-colors">{s?.title ?? ''}</h3>
                      <p className="text-sm text-gray-400">{s?.desc ?? ''}</p>
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* EMBEDDED PETITION CTA */}
      <section className="py-20 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to <span className="text-[#3ddc84]">Act</span>?</h2>
            <p className="text-gray-400 mb-8">
              Sign the petition. Take the survey. Tell us what matters to you.
              1,500 signatures per district changes everything.
            </p>
            <Link
              href="/petition"
              className="inline-block px-10 py-4 bg-[#3ddc84] text-[#080d1a] font-bold text-lg rounded-xl hover:bg-[#34c474] hover:scale-105 transition-all shadow-lg shadow-[#3ddc84]/20"
            >
              Sign the Petition & Take the Survey
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* EXPLORE DEEPER */}
      <section className="py-20 px-4 bg-[#0a1020]">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Explore <span className="text-[#3ddc84]">Deeper</span></h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {exploreLinks?.map((link: any, i: number) => {
              const Icon = link?.icon
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <Link href={link?.href ?? '#'} className="block group">
                    <div className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/5 hover:border-[#3ddc84]/30 transition-all duration-300">
                      {Icon && <Icon className="w-6 h-6 text-[#3ddc84] mt-0.5 flex-shrink-0" />}
                      <div>
                        <h3 className="font-bold group-hover:text-[#3ddc84] transition-colors">{link?.title ?? ''}</h3>
                        <p className="text-sm text-gray-500">{link?.desc ?? ''}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-600 mt-1 ml-auto flex-shrink-0 group-hover:text-[#3ddc84] transition-colors" />
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
