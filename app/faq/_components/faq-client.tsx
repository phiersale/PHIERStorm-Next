'use client'

import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'What is PHIERS?', a: 'PHIERS is a 16-year-old solutions engine designed to give citizens leverage over Congress and implement real solutions: $600/year healthcare (TeleCARE), 2.3 million jobs (PHIERWorks), cooperative marketplace (PHIERSale), food security, affordable housing, and fair trade.' },
  { q: 'Why 1,500 signatures per district?', a: '1,500 organized constituents represent a credible political threat to any incumbent. It\u2019s enough to swing a primary election and enough to demand a town hall that can\u2019t be ignored. It\u2019s based on the 3.5% rule scaled to Congressional district level.' },
  { q: 'What is the 3.5% rule?', a: 'Harvard researcher Erica Chenoweth proved that no government has withstood a challenge from 3.5% of its population in a sustained, nonviolent movement. In the US, that\u2019s about 11.5 million people. We start smaller \u2014 1,500 per district \u2014 and build from there.' },
  { q: 'What happens on April 15th?', a: 'Congress is home until April 14th. On April 15th, we demand town halls in every district where we\u2019ve hit the 1,500 signature threshold. Members face their constituents or face primary challenges.' },
  { q: 'Why July 4th, 2026?', a: 'America\u2019s 250th birthday. The founding generation risked everything for self-governance. We\u2019re asking Congress to do their job or be replaced. The symbolism matters. The deadline creates urgency.' },
  { q: 'How does TeleCARE cost only $600/year?', a: 'By eliminating insurance companies (20-30% overhead), using telemedicine for 80% of visits, operating as a member-owned cooperative, and focusing on preventive care. The math: 330 million Americans \u00d7 $600 = $198B. Current spending: $4.3 trillion. That\u2019s $1.8 trillion in savings.' },
  { q: 'Is this partisan?', a: 'No. Congress\u2019s failure is bipartisan. Both parties have failed to end wars, fix healthcare, create jobs, or hold anyone accountable. PHIERS targets Congressional inaction regardless of party.' },
  { q: 'What is Article 25?', a: 'Section 4 of the 25th Amendment allows the Vice President and a majority of the Cabinet to declare the President unable to fulfill their duties. Congress can also create a body to make this determination. We demand they use it.' },
  { q: 'Who founded PHIERS?', a: 'Will Price. 16 years of building this solutions engine. Contact: will@phiers.org' },
  { q: 'How is my data used?', a: 'Your signature verifies district residency. Your survey answers shape the agenda for town halls. We don\u2019t sell data. We don\u2019t share it with campaigns. It\u2019s used solely for organizing purposes.' },
]

export function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      <PageHero
        icon={HelpCircle}
        title="FAQ"
        subtitle="Common questions about PHIERS, the petition, and what comes next."
      />

      <section className="pb-20 px-4">
        <div className="max-w-[800px] mx-auto space-y-3">
          {faqs?.map((faq: any, i: number) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-white/5 rounded-xl border border-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-bold text-white pr-4">{faq?.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180 text-[#3ddc84]' : ''
                  }`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq?.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  )
}
