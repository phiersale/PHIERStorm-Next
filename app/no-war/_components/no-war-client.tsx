'use client'

import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { CountUp } from '@/components/count-up'
import { Shield, DollarSign, Heart, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function NoWarClient() {
  return (
    <div>
      <PageHero
        icon={Shield}
        title="No War"
        subtitle="End it. Now. Every day of war costs lives and trillions. The money exists for healthcare, jobs, and rebuilding."
      />

      {/* No War hero image */}
      <section className="pb-12 px-4">
        <div className="max-w-[800px] mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
            <Image src="/images/NoWar.png" alt="No War — End unauthorized wars now" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-12 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: DollarSign, label: 'Cost of War (est.)', value: 8000, prefix: '$', suffix: 'B+', color: 'text-red-400' },
              { icon: Heart, label: 'Lives Lost', value: 900000, prefix: '', suffix: '+', color: 'text-red-400' },
              { icon: Users, label: 'Displaced People', value: 38000000, prefix: '', suffix: '+', color: 'text-orange-400' },
            ].map((stat: any, i: number) => {
              const Icon = stat?.icon
              return (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <div className="bg-white/5 rounded-xl p-6 text-center border border-white/5">
                    {Icon && <Icon className={`w-8 h-8 mx-auto mb-3 ${stat?.color}`} />}
                    <div className="text-3xl font-bold text-white">
                      <CountUp end={stat?.value ?? 0} prefix={stat?.prefix} suffix={stat?.suffix} />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{stat?.label}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="bg-[#0f1729] rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">The <span className="text-[#3ddc84]">Demand</span></h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#3ddc84]/20 text-[#3ddc84] flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <span>Immediate cessation of all offensive military operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#3ddc84]/20 text-[#3ddc84] flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <span>Full Congressional investigation into war authorization and spending</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#3ddc84]/20 text-[#3ddc84] flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <span>Redirect war spending to domestic infrastructure, healthcare, and jobs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#3ddc84]/20 text-[#3ddc84] flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <span>Diplomatic solutions prioritized over military force</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-12">
            <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
              Sign the Petition <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}