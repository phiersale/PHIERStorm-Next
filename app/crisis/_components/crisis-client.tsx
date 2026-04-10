'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/animated-section'
import { PageHero } from '@/components/page-hero'
import { AlertTriangle, ChevronRight } from 'lucide-react'

const dimensions = [
  {
    title: 'War',
    body: 'Unauthorized escalation now threatens every system your family depends on. Oil chokepoints, shipping lanes, fertilizer, refrigeration, and medicine all move together. When war risk rises, everything gets more expensive at once.',
  },
  {
    title: 'Healthcare',
    body: 'Healthcare was already broken. War volatility and supply disruption push medicine and equipment costs even higher. Families get squeezed from both sides — premiums up, care delayed, outcomes worse.',
  },
  {
    title: 'Economy',
    body: 'Wages lag while essentials surge. The same households carrying debt are now carrying geopolitical risk in every grocery bill, utility bill, and prescription refill.',
  },
  {
    title: 'Politics',
    body: 'Congress sits near 12% approval while incumbents keep winning around 92% of the time. That gap is not democracy functioning — it is accountability failing in plain sight.',
  },
  {
    title: 'Peace',
    body: 'The peace dividend gets replaced by permanent instability when executive overreach goes unchecked. If Congress does not reassert war powers, escalation becomes the default setting.',
  },
]

const hormuzChain = [
  'Military escalation threatens the Strait of Hormuz, the most critical oil chokepoint on earth.',
  'Energy prices spike immediately across transport, manufacturing, food, and healthcare.',
  'Food costs climb as fertilizer, diesel, refrigeration, and freight all rise together.',
  'Medicine gets scarcer and more expensive as pharmaceutical and cold-chain costs surge.',
  'Healthcare systems absorb higher input costs and pass them to patients and employers.',
  'Supply chains fracture where communities are already most vulnerable.',
]

export function CrisisClient() {
  return (
    <div>
      <PageHero
        icon={AlertTriangle}
        title="The 5D Crisis"
        subtitle="Five dimensions. One system. Every piece feeding the others — each failure making the next one worse. That's why nothing ever gets fixed. And that's exactly what PHIERS was built to interrupt."
      />

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto space-y-14">
          <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {dimensions.map((item, index) => (
              <div key={item.title} className="bg-white/5 rounded-xl p-5 border border-white/10 h-full">
                <p className="text-xs text-[#3ddc84] tracking-[0.18em] uppercase">Dimension {index + 1}</p>
                <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
              <p className="text-red-200 text-sm uppercase tracking-[0.18em] mb-3">Strait of Hormuz Chain Reaction</p>
              <div className="grid md:grid-cols-2 gap-3">
                {hormuzChain.map((step) => (
                  <div key={step} className="text-sm text-red-100 bg-black/20 border border-red-400/20 rounded-lg p-3">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-[#3ddc84] text-sm uppercase tracking-[0.18em] mb-3">The Spiral Pattern</p>
              <p className="text-gray-300 leading-relaxed">
                War pressure raises costs. Rising costs destabilize healthcare and household finances.
                Economic insecurity fuels political extremism. Extremism increases escalation risk.
                Then the loop repeats — faster and harsher.
              </p>
              <p className="text-white font-semibold mt-4">PHIERStorm is the pattern interrupt.</p>
              <p className="text-gray-400 mt-2">
                One organized lever changes the incentives in Congress and the market at the same time.
                That is how the loop breaks.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center">
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Protest without leverage gets a news cycle. Leverage gets outcomes. Congress returns April 14.
              What they hear before then determines everything after.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/petition" className="px-6 py-3 rounded-xl bg-[#3ddc84] text-[#080d1a] font-bold hover:bg-[#63e29c] transition-colors">
                Be Counted
              </Link>
              <Link href="/leverage" className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors">
                How It Works
              </Link>
              <Link href="/no-war" className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors">
                End the Unauthorized War
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm text-[#3ddc84]">
              <Link href="/solutions" className="inline-flex items-center gap-1 hover:text-[#63e29c]">Solutions <ChevronRight className="w-4 h-4" /></Link>
              <Link href="/organizers" className="inline-flex items-center gap-1 hover:text-[#63e29c]">Organize <ChevronRight className="w-4 h-4" /></Link>
              <Link href="/simple-math" className="inline-flex items-center gap-1 hover:text-[#63e29c]">Simple Math <ChevronRight className="w-4 h-4" /></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
