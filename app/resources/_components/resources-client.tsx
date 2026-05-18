'use client'

import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { BookOpen, FileText, Download, ExternalLink, Share2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const resources = [
  { title: 'The 3.5% Rule Research', desc: 'Erica Chenoweth\u2019s Harvard research on nonviolent movements and the threshold for success.', type: 'Research' },
  { title: 'PHIERS Solutions Overview', desc: 'Complete breakdown of TeleCARE, PHIERSale, PHIERWorks, and supporting systems.', type: 'Document' },
  { title: 'District Organizing Guide', desc: 'Step-by-step guide for collecting signatures and building district-level teams.', type: 'Guide' },
  { title: 'Town Hall Toolkit', desc: 'How to demand, organize, and run a productive town hall with your representative.', type: 'Toolkit' },
  { title: 'The Math Behind $2.73T', desc: 'Detailed breakdown of identified savings across all PHIERS programs.', type: 'Analysis' },
  { title: 'Share Kit', desc: 'Graphics, talking points, and social media templates to spread the word.', type: 'Media' },
]

export function ResourcesClient() {
  return (
    <div>
      <PageHero
        icon={BookOpen}
        title="Resources"
        subtitle="Everything you need to understand, organize, and act. Knowledge is leverage."
      />

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources?.map((r: any, i: number) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#3ddc84]/30 transition-all h-full flex flex-col">
                  <span className="text-xs text-[#3ddc84] font-semibold uppercase tracking-wider mb-2">{r?.type}</span>
                  <h3 className="font-bold mb-2">{r?.title}</h3>
                  <p className="text-sm text-gray-400 flex-1">{r?.desc}</p>
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <span className="text-sm text-gray-500">Coming soon</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-gray-400 mb-6">The most important resource is your signature.</p>
            <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
              Sign Now <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
