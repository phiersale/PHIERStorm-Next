'use client'

import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { CountUp } from '@/components/count-up'
import { Calculator, DollarSign, Heart, Briefcase, Wheat, Home as HomeIcon, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const savings = [
  { category: 'Healthcare Reform (TeleCARE)', amount: 1800, unit: 'B', desc: 'Eliminate insurance middlemen. $600/yr per person vs $12,500 average.' },
  { category: 'Military Spending Reduction', amount: 400, unit: 'B', desc: 'End wars. Close redundant bases. Audit the Pentagon.' },
  { category: 'Cooperative Commerce (PHIERSale)', amount: 280, unit: 'B', desc: 'Cut retail markups. Direct producer-to-consumer marketplace.' },
  { category: 'Jobs Program (PHIERWorks)', amount: 150, unit: 'B', desc: '2.3M jobs rebuilding infrastructure. Self-funding through productivity.' },
  { category: 'Food Security', amount: 60, unit: 'B', desc: 'Buy failed farms. Eliminate food deserts. Feed people directly.' },
  { category: 'Housing (Pre-fab)', amount: 40, unit: 'B', desc: 'Factory-built housing at 40% of traditional cost. Scale nationally.' },
]

export function SimpleMathClient() {
  return (
    <div>
      <PageHero
        icon={Calculator}
        title="Simple Math"
        subtitle="$2.73 trillion in identified savings and redirected spending. This isn\u2019t ideology. It\u2019s arithmetic."
      />

      {/* Key visuals */}
      <section className="pb-12 px-4">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-6">
          <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-[#0d1525]">
            <Image src="/images/SIMPLE_MATH_Pyramid_Universal_Coverage.png" alt="The Simple Math — TeleHealth pyramid to universal coverage (234M)" fill className="object-contain" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-[#0d1525]">
            <Image src="/images/SIMPLE_MATH.png" alt="From one conversion to 234 million covered — the cascade effect" fill className="object-contain" />
          </div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Total */}
          <AnimatedSection className="text-center mb-16">
            <div className="bg-[#0f1729] rounded-2xl p-10 border border-[#3ddc84]/20 inline-block">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Total Identified Savings</p>
              <div className="text-5xl md:text-7xl font-bold text-[#3ddc84] text-glow">
                $<CountUp end={2730} duration={2500} />B
              </div>
              <p className="text-gray-500 mt-2">per year</p>
            </div>
          </AnimatedSection>

          {/* Breakdown */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {savings?.map((item: any, i: number) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#3ddc84]/20 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-white">{item?.category}</h3>
                      <p className="text-sm text-gray-400 mt-1">{item?.desc}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-2xl font-bold text-[#3ddc84]">
                        $<CountUp end={item?.amount ?? 0} />{item?.unit}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#3ddc84]/40 rounded-full"
                      style={{ width: `${((item?.amount ?? 0) / 1800) * 100}%` }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              These numbers are conservative. The actual savings are likely higher.
              But even the conservative math funds every solution PHIERS proposes.
            </p>
            <Link href="/solutions" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
              See the Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}