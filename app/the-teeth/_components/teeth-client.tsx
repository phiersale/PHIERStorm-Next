'use client'

import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { Scale, Vote, Megaphone, Users, MapPin, TrendingDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function TeethClient() {
  return (
    <div>
      <PageHero
        icon={Scale}
        title="The Teeth"
        subtitle={`Leverage without consequences is just noise. Here\u2019s the enforcement mechanism that makes Congress listen.`}
      />

      {/* We Are The Teeth hero image */}
      <section className="pb-12 px-4">
        <div className="max-w-[800px] mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
            <Image src="/images/We_Gotz_Teeth_-_WE_Are_The_Teeth.jpg" alt="We are the TEETH — No Kings rally" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Vote, title: 'Primary Challenges', desc: 'Every member who refuses to hold a town hall or act on demands gets a primary challenger. We fund them. We organize for them. We replace the incumbent.' },
              { icon: Megaphone, title: 'Public Accountability', desc: 'Town hall footage goes everywhere. Every dodge, every lie, every refusal is documented and distributed. No more hiding behind press releases.' },
              { icon: Users, title: 'District Organizing', desc: 'Organized blocks of 1,500+ constituents become permanent political infrastructure. They don\u2019t go away after one election. This is sustained pressure.' },
              { icon: MapPin, title: 'Cascade Effect', desc: 'When the first 10 districts succeed, the next 50 follow. When 50 succeed, 200 more join. Congress members see their colleagues fall and fall in line.' },
            ].map((item: any, i: number) => {
              const Icon = item?.icon
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white/5 rounded-xl p-8 border border-white/5 hover:border-[#3ddc84]/30 transition-all h-full">
                    {Icon && <Icon className="w-8 h-8 text-[#3ddc84] mb-4" />}
                    <h3 className="text-xl font-bold mb-3">{item?.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item?.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="bg-[#0f1729] rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">The <span className="text-[#3ddc84]">Timeline</span></h2>
              <div className="space-y-6">
                {[
                  { date: 'Now \u2013 April 14', action: 'Collect signatures while Congress is home', status: 'ACTIVE' },
                  { date: 'April 15', action: 'Force town halls in every district', status: 'UPCOMING' },
                  { date: 'April 16 \u2013 June', action: 'Document responses, identify primary targets', status: 'PLANNED' },
                  { date: 'July 4, 2026', action: 'America\u2019s 250th: Replace or reform deadline', status: 'DEADLINE' },
                ].map((item: any, i: number) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#3ddc84] mt-2 flex-shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{item?.date}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          item?.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' :
                          item?.status === 'UPCOMING' ? 'bg-yellow-500/20 text-yellow-400' :
                          item?.status === 'DEADLINE' ? 'bg-red-500/20 text-red-400' :
                          'bg-white/10 text-gray-400'
                        }`}>{item?.status}</span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{item?.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-12">
            <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
              Add Your Signature <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}