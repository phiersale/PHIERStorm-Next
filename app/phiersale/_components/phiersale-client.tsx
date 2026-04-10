'use client'

import { PageHero } from '@/components/page-hero'
import { AnimatedSection } from '@/components/animated-section'
import { ShoppingCart, Users, TrendingDown, Package, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function PhiersaleClient() {
  return (
    <div>
      <PageHero
        icon={ShoppingCart}
        title="PHIERSale"
        subtitle="A cooperative marketplace. Producer to consumer. No corporate middlemen extracting profit from every transaction."
      />

      <section className="pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: TrendingDown, title: '40% Savings', desc: 'Average retail markup eliminated. Prices drop for consumers.' },
              { icon: Users, title: 'Member-Owned', desc: 'Cooperative structure. Profits return to members, not shareholders.' },
              { icon: Package, title: 'Direct Supply', desc: 'Producers connect directly to buyers. No warehouse markups.' },
              { icon: Shield, title: 'Quality First', desc: 'Community-verified products. Real reviews from real members.' },
            ].map((item: any, i: number) => {
              const Icon = item?.icon
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#3ddc84]/30 transition-all h-full">
                    {Icon && <Icon className="w-8 h-8 text-[#3ddc84] mb-3" />}
                    <h3 className="font-bold mb-2">{item?.title}</h3>
                    <p className="text-sm text-gray-400">{item?.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="bg-[#0f1729] rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">How It <span className="text-[#3ddc84]">Works</span></h2>
              <div className="space-y-4 text-gray-400">
                <p>Traditional retail adds 40-100% markup to products. That money goes to shareholders, CEOs, and corporate infrastructure that doesn\u2019t benefit anyone making or buying the product.</p>
                <p>PHIERSale is a cooperative marketplace. Producers list directly. Buyers purchase directly. The platform takes a minimal fee to cover operations. Everything else stays with the people who made the product and the people who buy it.</p>
                <p>This isn\u2019t a startup pitch. It\u2019s a cooperative structure that\u2019s been proven for over 100 years. We\u2019re scaling it with modern technology.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-12">
            <Link href="/petition" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-xl hover:bg-[#34c474] transition-all">
              Support Cooperative Commerce <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
