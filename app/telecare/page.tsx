// FILE: app/telecare/page.tsx
// TELECARE PAGE - Complete with design system

'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import StatBlock from '@/components/StatBlock'

export default function TelecarePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Image */}
        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src="/images/Telehealth_Benefits.jpg"
            alt="TeleCARE — Healthcare doesn't need to be expensive"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Healthcare doesn't need to be expensive.<br /><span className="text-green">It needs to be organized.</span></h1>
        </section>

        <hr className="border-green/20" />

        {/* The Problem */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Problem</span>
          <p className="text-body mb-3">America spends more on healthcare than any country in history.</p>
          <div className="grid grid-cols-2 gap-3 max-w-[400px] mx-auto my-4">
            <StatBlock number="$10,000" label="per person" />
            <StatBlock number="$4.3T" label="total" />
          </div>
          <p className="text-body mb-4">And outcomes keep getting worse. Not because care is expensive — because the system is. Middlemen. Billing layers. Administrative waste. Profit extraction. The care is fine. The system is broken.</p>
          
          <div className="max-w-[500px] mx-auto my-4">
            <Image
              src="/images/80-20_Healthcare_Model_-PHIERS_v_Insurance_Cost.jpg"
              alt="$600 vs $10,000 — PHIERS vs Insurance Cost"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The 80/20 Truth */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The 80/20 Truth</span>
            <p className="text-body mb-3">80% of healthcare is simple, predictable, and telehealth-ready.</p>
            <p className="text-body mb-4">80% of insured Americans never use hospitalization or specialty care.</p>
            
            <div className="max-w-[500px] mx-auto my-4">
              <Image
                src="/images/80-20_Truth_About_Healthcare.jpg"
                alt="80/20 Truth About Healthcare"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20"
              />
            </div>
            
            <p className="font-condensed text-lg text-white font-bold mb-3">This is the 80% people actually need:</p>
            <div className="grid grid-cols-2 gap-2 max-w-[400px] mx-auto mb-4 text-left">
              <p className="text-body text-sm">→ Primary care</p>
              <p className="text-body text-sm">→ Urgent care</p>
              <p className="text-body text-sm">→ Mental health</p>
              <p className="text-body text-sm">→ Chronic care</p>
              <p className="text-body text-sm">→ Prescriptions</p>
              <p className="text-body text-sm">→ Preventive care</p>
              <p className="text-body text-sm">→ Dental and vision</p>
              <p className="text-body text-sm">→ Care navigation</p>
            </div>
            <p className="text-body">The remaining 20% is rare — but expensive: Hospitalizations. Surgeries. Specialists. Emergency trauma. Insurance bundles the 80% and the 20% and charges $10,000+ for the whole thing — even though most people never use the expensive part.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Fix */}
        <section className="container section text-center">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Fix</span>
          <p className="text-body mb-3">Separate everyday care from catastrophic protection.</p>
          <p className="text-body mb-2">TeleCARE handles the 80%.</p>
          <p className="text-body mb-4">Insurance handles the 20%.</p>
          <p className="font-condensed text-2xl text-green font-bold">Telehealth delivers 80% of healthcare at one-sixteenth the cost. That's it.</p>
          
          <div className="max-w-[500px] mx-auto my-4">
            <Image
              src="/images/80-20_TeleCARE_EXPLAINER.jpg"
              alt="TeleCARE vs Insurance — 80/20 Explainer"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What TeleCARE Is */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What TeleCARE Is</span>
            <p className="text-body mb-3">A statewide, open telehealth network that delivers the care most people need — without the insurance middlemen.</p>
            <p className="font-condensed text-lg text-white font-bold mb-3">What it includes:</p>
            <div className="grid grid-cols-2 gap-2 max-w-[400px] mx-auto mb-4">
              <p className="text-body text-sm">→ Primary care</p>
              <p className="text-body text-sm">→ Urgent care</p>
              <p className="text-body text-sm">→ Mental health</p>
              <p className="text-body text-sm">→ Chronic care management</p>
              <p className="text-body text-sm">→ Prescriptions</p>
              <p className="text-body text-sm">→ Dental and vision</p>
              <p className="text-body text-sm">→ Preventive care</p>
              <p className="text-body text-sm">→ Care navigation</p>
            </div>
            <p className="font-condensed text-2xl text-green font-bold mb-2">What it costs: ~$600 per year.</p>
            <p className="text-body">No claims. No networks. No prior authorization. Just care.</p>
            
            <div className="max-w-[500px] mx-auto my-4">
              <Image
                src="/images/Telehealth_tech.jpg"
                alt="Telehealth technology — care delivery"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20"
              />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What Insurance Becomes */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What Insurance Becomes</span>
          <p className="text-body">Insurance goes back to what it was always meant to be: Protection — not the front door. It covers hospitalizations, surgeries, catastrophic events, high-cost specialty care. Rare. But necessary.</p>
        </section>

        <hr className="border-green/20" />

        {/* Why It Works Financially */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Why It Works Financially</span>
            <p className="text-body mb-3">When TeleCARE handles everyday care, the entire system gets cheaper.</p>
            <p className="font-condensed text-lg text-white font-bold mb-3">What drops:</p>
            <div className="grid grid-cols-2 gap-2 max-w-[400px] mx-auto mb-4">
              <p className="text-body text-sm">→ ER visits</p>
              <p className="text-body text-sm">→ Hospitalizations</p>
              <p className="text-body text-sm">→ Insurance claims</p>
              <p className="text-body text-sm">→ Premiums</p>
              <p className="text-body text-sm">→ Medicaid costs</p>
            </div>
            <p className="font-condensed text-lg text-white font-bold mb-3">What stabilizes:</p>
            <div className="grid grid-cols-2 gap-2 max-w-[400px] mx-auto mb-4">
              <p className="text-body text-sm">→ Private insurance</p>
              <p className="text-body text-sm">→ Public budgets</p>
              <p className="text-body text-sm">→ Employer costs</p>
            </div>
            <p className="font-condensed text-xl text-green font-bold">Telehealth shrinks the cost of the entire system.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Math */}
        <section className="container section text-center">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Math</span>
          <div className="grid grid-cols-2 gap-3 max-w-[400px] mx-auto my-4">
            <StatBlock number="$10,000" label="per person today" />
            <StatBlock number="$600" label="per person with TeleCARE" />
          </div>
          <p className="font-display text-3xl text-gold font-bold my-3">$2.73 trillion</p>
          <p className="font-condensed text-lg text-green font-bold mb-3">in annual savings</p>
          <p className="font-condensed text-lg text-white font-bold mb-3">That's not a projection. That's arithmetic.</p>
          <p className="font-condensed text-lg text-white font-bold mb-6">That's not a campaign promise. That's arithmetic.</p>
          
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <p className="text-body mb-3">Congress could authorize this tomorrow. They just haven't had to — until now.</p>
            <p className="text-body mb-4">The war is making everything more expensive. Healthcare inputs. Pharmaceutical supply chains. Medical equipment. All of it.</p>
            <p className="font-condensed text-lg text-gold font-bold mb-4">The case for TeleCARE gets stronger every week the war continues.</p>
            
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>✍ ADD MY NAME</Button>
              <Button href="/simple-math" variant="secondary" fullWidth>📊 SEE THE MATH</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            var btt = document.getElementById('back-to-top');
            if (btt) {
              if (window.scrollY > 400) {
                btt.classList.add('visible');
              } else {
                btt.classList.remove('visible');
              }
            }
          });
        `
      }} />
    </>
  )
}
