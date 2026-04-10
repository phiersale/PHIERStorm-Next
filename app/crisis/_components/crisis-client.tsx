'use client'

import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { AlertTriangle, TrendingDown, DollarSign, Users, Skull, ShieldAlert } from 'lucide-react'
import Link from 'next/link'

const crises = [
  { icon: Skull, title: 'Endless War', desc: 'Trillions spent on wars that make us less safe. Every dollar spent on bombs is a dollar stolen from healthcare, jobs, and infrastructure.' },
  { icon: ShieldAlert, title: 'Executive Overreach', desc: 'A president acting without Congressional oversight. Article 25 exists for exactly this scenario. Congress refuses to use it.' },
  { icon: DollarSign, title: 'Economic Collapse', desc: 'The middle class is gone. Cost of living skyrockets while wages stagnate. $2.73 trillion in identified waste could fund real solutions.' },
  { icon: TrendingDown, title: 'Healthcare Crisis', desc: 'Americans pay more for healthcare than any nation on Earth and get worse outcomes. $600/year could cover everyone. The math exists.' },
  { icon: Users, title: 'Congressional Failure', desc: '535 members of Congress. Zero accountability. They work for donors, not constituents. The approval rating proves it.' },
  { icon: AlertTriangle, title: 'The 250th Year', desc: 'America turns 250 in 2026. The founders would not recognize what we\u2019ve become. This is the moment to demand better.' },
]

export function CrisisClient() {
  return (
    <div>
      <PageHero
        icon={AlertTriangle}
        title="The Crisis"
        subtitle="America is in managed decline. The question is: who manages it? Congress, who created the mess? Or us?"
      />

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crises?.map((item: any, i: number) => {
              const Icon = item?.icon
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-red-500/30 transition-all duration-300 h-full">
                    {Icon && <Icon className="w-8 h-8 text-red-400 mb-3" />}
                    <h3 className="text-lg font-bold mb-2">{item?.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item?.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="mt-16 text-center">
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              The crisis isn\u2019t that things are bad. It\u2019s that Congress has no incentive to fix them.
              PHIERS changes that equation. Leverage first. Solutions second.
            </p>
            <Link
              href="/leverage"
              className="inline-block px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all"
            >
              See How Leverage Works
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
