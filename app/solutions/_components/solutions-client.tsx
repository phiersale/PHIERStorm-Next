'use client'

import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { CountUp } from '@/components/count-up'
import { Lightbulb, Heart, ShoppingCart, Briefcase, Wheat, Home as HomeIcon, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  { icon: Heart, title: 'TeleCARE', href: '/telecare', stat: '$600', statLabel: 'per year', desc: 'Universal healthcare at a fraction of current costs. Telemedicine-first, cooperative model. Eliminates insurance middlemen entirely.', color: 'border-red-500/30' },
  { icon: ShoppingCart, title: 'PHIERSale', href: '/phiersale', stat: '40%', statLabel: 'savings', desc: 'Cooperative marketplace connecting producers directly to consumers. Cuts out retail markups. Member-owned infrastructure.', color: 'border-blue-500/30' },
  { icon: Briefcase, title: 'PHIERWorks', href: '/phierworks', stat: '2.3M', statLabel: 'jobs', desc: 'Infrastructure rebuilding program. Roads, bridges, broadband, renewable energy. Real jobs, real wages, real work.', color: 'border-yellow-500/30' },
]

export function SolutionsClient() {
  return (
    <div>
      <PageHero
        icon={Lightbulb}
        title="The Solutions"
        subtitle="16 years of engineering. These aren\u2019t proposals \u2014 they\u2019re complete systems with the math already done."
      />

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Primary Solutions */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {solutions?.map((s: any, i: number) => {
              const Icon = s?.icon
              return (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <Link href={s?.href ?? '#'} className="block group h-full">
                    <div className={`bg-white/5 rounded-xl p-8 border border-white/5 hover:${s?.color} transition-all h-full`}>
                      {Icon && <Icon className="w-10 h-10 text-[#3ddc84] mb-4" />}
                      <div className="text-3xl font-bold text-[#3ddc84] mb-1">{s?.stat}</div>
                      <div className="text-xs text-gray-500 mb-4">{s?.statLabel}</div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-[#3ddc84] transition-colors">{s?.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{s?.desc}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm text-[#3ddc84] opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>

          {/* Secondary Solutions */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-center mb-8">Supporting <span className="text-[#3ddc84]">Systems</span></h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6" id="food">
            <AnimatedSection delay={0.1}>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5" id="food">
                <Wheat className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-lg font-bold mb-2">Food Security</h3>
                <p className="text-sm text-gray-400">Buy failed farms before corporations do. Fertile soil belongs to communities. Eliminate food deserts through direct distribution networks.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5" id="housing">
                <HomeIcon className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold mb-2">Affordable Housing</h3>
                <p className="text-sm text-gray-400">Pre-fabricated housing at 40% of traditional construction costs. Factory-built, community-placed. Scale to meet demand nationwide.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5" id="trade">
                <Globe className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-bold mb-2">International Trade</h3>
                <p className="text-sm text-gray-400">Fair trade frameworks that protect workers here and abroad. Negotiate from strength, not corporate interest. Rebuild manufacturing base.</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-16">
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              All of these solutions require one thing first: <span className="text-[#3ddc84] font-semibold">leverage over Congress</span>.
              Sign the petition. Build the pressure. Make them act.
            </p>
            <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
              Sign the Petition <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
