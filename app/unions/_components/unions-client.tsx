'use client'

import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { Users, Handshake, ShoppingCart, Briefcase, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function UnionsClient() {
  return (
    <div>
      <PageHero
        icon={Handshake}
        title="Unions"
        subtitle="Organized labor built the middle class. PHIERS solutions strengthen workers at every level."
      />

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: Briefcase, title: 'PHIERWorks = Union Jobs', desc: '2.3 million infrastructure jobs. Prevailing wage requirements. Project labor agreements. These are union jobs by design.' },
              { icon: ShoppingCart, title: 'PHIERSale Supports Workers', desc: 'Cooperative marketplace means worker-owned production. No corporate extraction of labor value. Workers keep what they earn.' },
              { icon: Shield, title: 'Healthcare Freedom', desc: 'TeleCARE at $600/year means healthcare is no longer tied to employment. Workers can organize without fear of losing coverage.' },
              { icon: Users, title: 'Collective Power', desc: 'PHIERS\u2019 organizing model is built on collective action principles. Unions know how to organize. This is the biggest organizing opportunity in decades.' },
            ].map((item: any, i: number) => {
              const Icon = item?.icon
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white/5 rounded-xl p-8 border border-white/5 hover:border-[#3ddc84]/30 transition-all h-full">
                    {Icon && <Icon className="w-8 h-8 text-[#3ddc84] mb-4" />}
                    <h3 className="text-xl font-bold mb-2">{item?.title}</h3>
                    <p className="text-gray-400">{item?.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="text-center">
            <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
              Stand With Workers <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
