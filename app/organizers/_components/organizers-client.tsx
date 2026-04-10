'use client'

import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { Users, MapPin, Megaphone, ClipboardList, MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const roles = [
  { icon: MapPin, title: 'District Captain', desc: 'Lead signature collection in your Congressional district. Coordinate volunteers. Hit the 1,500 target.' },
  { icon: Megaphone, title: 'Town Hall Coordinator', desc: 'Plan and execute the April 15th town hall demand. Work with local venues, media, and community leaders.' },
  { icon: ClipboardList, title: 'Signature Collector', desc: 'Go door-to-door, attend community events, collect signatures. Every signature moves the needle.' },
  { icon: MessageCircle, title: 'Digital Organizer', desc: 'Spread the word online. Share the petition. Create content. Build awareness in your community.' },
]

export function OrganizersClient() {
  return (
    <div>
      <PageHero
        icon={Users}
        title="Organizers"
        subtitle="Every movement needs people on the ground. Here\u2019s how you can lead in your district."
      />

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {roles?.map((role: any, i: number) => {
              const Icon = role?.icon
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white/5 rounded-xl p-8 border border-white/5 hover:border-[#3ddc84]/30 transition-all h-full">
                    {Icon && <Icon className="w-8 h-8 text-[#3ddc84] mb-4" />}
                    <h3 className="text-xl font-bold mb-2">{role?.title}</h3>
                    <p className="text-gray-400">{role?.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="bg-[#0f1729] rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Ready to <span className="text-[#3ddc84]">Lead</span>?</h2>
              <p className="text-gray-400 mb-6">Sign the petition first, check \u201CI\u2019m willing to organize\u201D, and we\u2019ll connect you with your district team.</p>
              <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
                Sign & Volunteer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
