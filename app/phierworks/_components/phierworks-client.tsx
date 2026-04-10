'use client'

import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { CountUp } from '@/components/count-up'
import { Briefcase, HardHat, Zap, Wifi, Truck, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const sectors = [
  { icon: Truck, title: 'Roads & Bridges', jobs: 600000, desc: 'Rebuild crumbling infrastructure. Every dollar invested returns $1.80 in economic activity.' },
  { icon: Zap, title: 'Renewable Energy', jobs: 500000, desc: 'Solar, wind, grid modernization. Energy independence and jobs in every state.' },
  { icon: Wifi, title: 'Broadband', jobs: 300000, desc: 'Universal high-speed internet. Digital infrastructure for the 21st century economy.' },
  { icon: Wrench, title: 'Manufacturing', jobs: 400000, desc: 'Rebuild domestic manufacturing. Pre-fab housing, medical equipment, technology.' },
  { icon: HardHat, title: 'Public Works', jobs: 500000, desc: 'Water systems, schools, hospitals. The basics that every community deserves.' },
]

export function PhierworksClient() {
  return (
    <div>
      <PageHero
        icon={Briefcase}
        title="PHIERWorks"
        subtitle="2.3 million real jobs rebuilding America. Not temporary. Not make-work. Infrastructure that pays for itself."
      />

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="bg-[#0f1729] rounded-2xl p-8 border border-[#3ddc84]/20 inline-block">
              <p className="text-sm text-gray-500 mb-2">Total Jobs Created</p>
              <div className="text-5xl md:text-6xl font-bold text-[#3ddc84] text-glow">
                <CountUp end={2300000} duration={2500} />
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-4 max-w-3xl mx-auto">
            {sectors?.map((sector: any, i: number) => {
              const Icon = sector?.icon
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#3ddc84]/20 transition-all">
                    <div className="flex items-start gap-4">
                      {Icon && <Icon className="w-8 h-8 text-[#3ddc84] flex-shrink-0" />}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold">{sector?.title}</h3>
                          <span className="text-[#3ddc84] font-bold"><CountUp end={sector?.jobs ?? 0} /> jobs</span>
                        </div>
                        <p className="text-sm text-gray-400">{sector?.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
              Demand Real Jobs <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
