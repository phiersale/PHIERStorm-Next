'use client'

import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { CountUp } from '@/components/count-up'
import { Heart, DollarSign, Smartphone, Users, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function TelecareClient() {
  return (
    <div>
      <PageHero
        icon={Heart}
        title="TeleCARE"
        subtitle="$600 per year. Full healthcare. No insurance companies. No middlemen. Just care."
      />

      {/* Key visual */}
      <section className="pb-12 px-4">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-6">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#0d1525]">
            <Image src="/images/80-20_Healthcare_Model_-PHIERS_v_Insurance_Cost.png" alt="The 80/20 Healthcare Model — Everyday care vs catastrophic insurance" fill className="object-contain" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#0d1525]">
            <Image src="/images/How_It_Works.png" alt="How universal coverage works — from uninsured to 234M covered" fill className="object-contain" />
          </div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Comparison */}
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/5 rounded-xl p-8 border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-4">Current System</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-red-400">\u2717</span> $12,500 average per person per year</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">\u2717</span> Insurance companies take 20-30% off the top</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">\u2717</span> Deductibles, copays, surprise bills</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">\u2717</span> Worst outcomes among developed nations</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">\u2717</span> Medical bankruptcy is the #1 cause</li>
                </ul>
              </div>
              <div className="bg-[#3ddc84]/5 rounded-xl p-8 border border-[#3ddc84]/20">
                <h3 className="text-xl font-bold text-[#3ddc84] mb-4">TeleCARE</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#3ddc84] mt-0.5 flex-shrink-0" /> $600 per year \u2014 flat rate, no surprises</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#3ddc84] mt-0.5 flex-shrink-0" /> No insurance middlemen</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#3ddc84] mt-0.5 flex-shrink-0" /> Telemedicine-first for 80% of visits</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#3ddc84] mt-0.5 flex-shrink-0" /> Cooperative model \u2014 member-owned</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#3ddc84] mt-0.5 flex-shrink-0" /> Preventive care reduces long-term costs</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* How */}
          <AnimatedSection className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">How <span className="text-[#3ddc84]">TeleCARE</span> Works</h2>
            <div className="space-y-6">
              {[
                { icon: Smartphone, title: 'Telemedicine First', desc: '80% of medical consultations can happen remotely. No waiting rooms. No travel. Immediate access to care.' },
                { icon: Users, title: 'Cooperative Model', desc: 'Members own the system. No shareholders extracting profit. Every dollar goes to care delivery.' },
                { icon: Shield, title: 'Catastrophic Coverage', desc: 'For the 20% that needs in-person care, pooled cooperative funds cover it. No deductibles. No copays.' },
                { icon: DollarSign, title: 'The Math', desc: '330 million Americans \u00d7 $600 = $198 billion. Current spending: $4.3 trillion. Savings: $1.8 trillion per year.' },
              ].map((item: any, i: number) => {
                const Icon = item?.icon
                return (
                  <div key={i} className="flex items-start gap-4 bg-white/5 rounded-xl p-6 border border-white/5">
                    {Icon && <Icon className="w-6 h-6 text-[#3ddc84] mt-1 flex-shrink-0" />}
                    <div>
                      <h3 className="font-bold mb-1">{item?.title}</h3>
                      <p className="text-sm text-gray-400">{item?.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center">
            <div className="bg-[#0f1729] rounded-2xl p-8 border border-[#3ddc84]/20 inline-block mb-8">
              <p className="text-sm text-gray-500 mb-2">Annual savings per American</p>
              <div className="text-5xl font-bold text-[#3ddc84]">$<CountUp end={11900} /></div>
              <p className="text-gray-500 mt-1">($12,500 \u2013 $600)</p>
            </div>
            <br />
            <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
              Demand Better Healthcare <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
