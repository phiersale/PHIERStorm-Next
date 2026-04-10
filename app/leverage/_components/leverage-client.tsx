'use client'

import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { CountUp } from '@/components/count-up'
import { Zap, Target, Users, Calendar, ArrowRight, TrendingUp, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function LeverageClient() {
  return (
    <div>
      <PageHero
        icon={Zap}
        title="Leverage"
        subtitle="Without leverage over Congress, nothing changes. With it, everything becomes possible. This is the key to the entire PHIERS system."
      />

      {/* Key visuals */}
      <section className="pb-12 px-4">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-6">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#0d1525]">
            <Image src="/images/3.5pct_Erica_Chenoweth.jpg" alt="The 3.5% Rule — Erica Chenoweth's research on organized minorities" fill className="object-cover" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#0d1525]">
            <Image src="/images/District_Accountability_Dashboard.jpg" alt="District Accountability Dashboard — tracking congressional pressure" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* The 3.5% Rule */}
          <AnimatedSection className="max-w-3xl mx-auto mb-16">
            <div className="bg-[#0f1729] rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">The <span className="text-[#3ddc84]">3.5% Rule</span></h2>
              <p className="text-gray-400 mb-4">
                Harvard research by Erica Chenoweth proved that no government has survived a challenge
                from 3.5% of its population. In America, that\u2019s roughly 11.5 million people.
              </p>
              <p className="text-gray-400 mb-6">
                But we don\u2019t need 11.5 million to start. We need <span className="text-[#3ddc84] font-bold">1,500 per Congressional district</span>.
                That\u2019s the threshold where a member of Congress can no longer ignore constituents.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3ddc84]"><CountUp end={1500} /></div>
                  <div className="text-xs text-gray-500">Per District</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3ddc84]"><CountUp end={435} /></div>
                  <div className="text-xs text-gray-500">Districts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3ddc84]"><CountUp end={652500} /></div>
                  <div className="text-xs text-gray-500">Total Needed</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* How It Works */}
          <AnimatedSection className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">How <span className="text-[#3ddc84]">Leverage</span> Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, step: '01', title: 'Signatures', desc: 'Collect 1,500 verified signatures per district. Map them. Organize them.' },
                { icon: Calendar, step: '02', title: 'Town Halls', desc: 'April 15th. Force every member to face constituents. No more hiding.' },
                { icon: Target, step: '03', title: 'Demands', desc: 'End war. Article 25. Investigations. Clear, non-negotiable demands.' },
                { icon: TrendingUp, step: '04', title: 'Replace', desc: 'July 4th deadline. Those who refuse to act get primaried. No exceptions.' },
              ].map((item: any, i: number) => {
                const Icon = item?.icon
                return (
                  <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#3ddc84]/30 transition-all">
                    {Icon && <Icon className="w-6 h-6 text-[#3ddc84] mb-3" />}
                    <span className="text-[#3ddc84] font-mono text-xs">{item?.step}</span>
                    <h3 className="text-lg font-bold mt-1 mb-2">{item?.title}</h3>
                    <p className="text-sm text-gray-400">{item?.desc}</p>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>

          {/* Why This Works */}
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Why This <span className="text-[#3ddc84]">Works</span></h2>
            <div className="space-y-4">
              {[
                'Congress members care about re-election above all else',
                '1,500 organized constituents is an existential threat to any incumbent',
                'Town halls create public accountability that can\'t be spun',
                'Primary challenges are the one thing incumbents truly fear',
                'The cascade effect: once a few districts succeed, others follow',
              ].map((point: string, i: number) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-[#3ddc84] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-12">
            <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
              Be One of the 1,500 <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
