'use client'

import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { Info, Clock, Target, Zap, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function AboutClient() {
  return (
    <div>
      <PageHero
        icon={Info}
        title="About PHIERS"
        subtitle="A 16-year solutions engine built to manage America\u2019s decline and make it better."
      />

      <section className="pb-20 px-4">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <div className="bg-white/5 rounded-xl p-8 border border-white/5 mb-8">
              <h2 className="text-2xl font-bold mb-4">The <span className="text-[#3ddc84]">Origin</span></h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>PHIERS was founded by Will Price 16 years ago with a simple observation: America is in decline, and no one in power has any incentive to fix it.</p>
                <p>Congress doesn\u2019t work for constituents. They work for donors. The system isn\u2019t broken \u2014 it\u2019s working exactly as designed. For someone else.</p>
                <p>So PHIERS spent 16 years engineering solutions. Not proposals. Not white papers. Complete systems with the math already done. Healthcare at $600/year. 2.3 million jobs. Cooperative commerce. Food security. Housing. Trade.</p>
                <p>But solutions mean nothing without the power to implement them. That\u2019s why <span className="text-[#3ddc84] font-medium">leverage comes first</span>.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="bg-white/5 rounded-xl p-8 border border-white/5 mb-8">
              <h2 className="text-2xl font-bold mb-4">The <span className="text-[#3ddc84]">Philosophy</span></h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>PHIERS doesn\u2019t pretend America can be \u201Csaved.\u201D That ship sailed. What we can do is <span className="text-white font-medium">manage the decline and make it better</span>.</p>
                <p>That means practical solutions. Math that works. Systems that scale. Not ideology. Not partisanship. Not hope \u2014 engineering.</p>
                <p>The hierarchy is clear: leverage over Congress first. Then everything else becomes possible. Without leverage, you\u2019re just shouting into the void.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Clock, label: '16 Years', desc: 'Building the solutions engine' },
                { icon: Target, label: '1 Goal', desc: 'Leverage over Congress' },
                { icon: Zap, label: '6 Solutions', desc: 'Ready to implement' },
              ].map((item: any, i: number) => {
                const Icon = item?.icon
                return (
                  <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/5 text-center">
                    {Icon && <Icon className="w-6 h-6 text-[#3ddc84] mx-auto mb-2" />}
                    <div className="font-bold text-lg">{item?.label}</div>
                    <div className="text-xs text-gray-500">{item?.desc}</div>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-[#0f1729] rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-2xl font-bold mb-2">Contact</h2>
              <p className="text-gray-400 mb-4">Will Price, Founder</p>
              <a href="mailto:will@phiers.org" className="inline-flex items-center gap-2 text-[#3ddc84] hover:underline">
                <Mail className="w-4 h-4" /> will@phiers.org
              </a>
              <div className="mt-6">
                <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
                  Join the Movement <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
