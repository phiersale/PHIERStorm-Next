'use client'

import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { Shield, Heart, Home as HomeIcon, Briefcase, Medal, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function VeteransClient() {
  return (
    <div>
      <PageHero
        icon={Medal}
        title="Veterans"
        subtitle="Those who served deserve more than lip service. PHIERS solutions directly address veteran needs."
      />

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: Shield, title: 'End the Wars', desc: 'No more sending service members into conflicts without clear purpose or Congressional authorization. End the wars that keep creating new veterans with new trauma.' },
              { icon: Heart, title: 'TeleCARE for Veterans', desc: 'The VA is broken. TeleCARE provides immediate telemedicine access. No wait times. No bureaucracy. $600/year covers everything.' },
              { icon: Briefcase, title: 'PHIERWorks Priority', desc: 'Veterans get priority placement in the 2.3 million infrastructure jobs. Real work. Real wages. Skills that transfer from service.' },
              { icon: HomeIcon, title: 'Housing Solutions', desc: 'Pre-fab housing at 40% of traditional costs. Veterans shouldn\u2019t be homeless. Period. PHIERS housing makes that possible.' },
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
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              Veterans understand duty, sacrifice, and the failure of leadership better than anyone. Join the fight to hold Congress accountable.
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
