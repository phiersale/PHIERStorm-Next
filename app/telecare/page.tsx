'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function TelecarePage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          
          {/* HERO IMAGE */}
          <div className="relative w-full h-[250px] md:h-[300px] mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/Telehealth_Benefits.jpg"
              alt="TeleCARE — Healthcare doesn't need to be expensive"
              fill
              className="object-cover"
            />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Healthcare doesn't need to be expensive.<br /><span className="text-[#3ddc84]">It needs to be organized.</span></h1>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Problem</h2>
          <p className="text-gray-400 mb-3">America spends more on healthcare than any country in history.</p>
          <p className="text-gray-400 mb-3">$10,000 per person. $4.3 trillion total. And outcomes keep getting worse.</p>
          <p className="text-gray-400 mb-6">Not because care is expensive — because the system is. Middlemen. Billing layers. Administrative waste. Profit extraction. The care is fine. The system is broken.</p>
          
          {/* COST COMPARISON GRAPHIC */}
          <div className="my-8 max-w-[500px] mx-auto">
            <Image
              src="/images/80-20_Healthcare_Model_-PHIERS_v_Insurance_Cost.jpg"
              alt="$600 vs $10,000 — PHIERS vs Insurance Cost"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-[#3ddc84]/20"
            />
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The 80/20 Truth</h2>
          <p className="text-gray-400 mb-3">80% of healthcare is simple, predictable, and telehealth-ready.</p>
          <p className="text-gray-400 mb-6">80% of insured Americans never use hospitalization or specialty care.</p>
          
          {/* 80/20 DIAGRAM */}
          <div className="my-8 max-w-[500px] mx-auto">
            <Image
              src="/images/80-20_Truth_About_Healthcare.jpg"
              alt="80/20 Truth About Healthcare"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-[#3ddc84]/20"
            />
          </div>
          
          <p className="font-condensed text-lg text-white font-bold mb-3">This is the 80% people actually need:</p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            <p className="text-gray-400 text-sm">→ Primary care</p>
            <p className="text-gray-400 text-sm">→ Urgent care</p>
            <p className="text-gray-400 text-sm">→ Mental health</p>
            <p className="text-gray-400 text-sm">→ Chronic care</p>
            <p className="text-gray-400 text-sm">→ Prescriptions</p>
            <p className="text-gray-400 text-sm">→ Preventive care</p>
            <p className="text-gray-400 text-sm">→ Dental and vision</p>
            <p className="text-gray-400 text-sm">→ Care navigation</p>
          </div>
          <p className="text-gray-400 mb-6">The remaining 20% is rare — but expensive: Hospitalizations. Surgeries. Specialists. Emergency trauma. Insurance bundles the 80% and the 20% and charges $10,000+ for the whole thing — even though most people never use the expensive part.</p>
          
          {/* TELECARE VS INSURANCE DIAGRAM */}
          <div className="my-8 max-w-[500px] mx-auto">
            <Image
              src="/images/80-20_TeleCARE_EXPLAINER.jpg"
              alt="TeleCARE vs Insurance — 80/20 Explainer"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-[#3ddc84]/20"
            />
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Fix</h2>
          <p className="text-gray-400 mb-3">Separate everyday care from catastrophic protection.</p>
          <p className="text-gray-400 mb-3">TeleCARE handles the 80%.</p>
          <p className="text-gray-400 mb-6">Insurance handles the 20%.</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-8">Telehealth delivers 80% of healthcare at one-sixteenth the cost. That's it.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">What TeleCARE Is</h2>
          <p className="text-gray-400 mb-3">A statewide, open telehealth network that delivers the care most people need — without the insurance middlemen.</p>
          <p className="font-condensed text-lg text-white font-bold mb-3">What it includes:</p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            <p className="text-gray-400 text-sm">→ Primary care</p>
            <p className="text-gray-400 text-sm">→ Urgent care</p>
            <p className="text-gray-400 text-sm">→ Mental health</p>
            <p className="text-gray-400 text-sm">→ Chronic care management</p>
            <p className="text-gray-400 text-sm">→ Prescriptions</p>
            <p className="text-gray-400 text-sm">→ Dental and vision</p>
            <p className="text-gray-400 text-sm">→ Preventive care</p>
            <p className="text-gray-400 text-sm">→ Care navigation</p>
          </div>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-3">What it costs: ~$600 per year.</p>
          <p className="text-gray-400 mb-6">No claims. No networks. No prior authorization. Just care.</p>
          
          {/* CARE ICONS */}
          <div className="my-8 max-w-[500px] mx-auto">
            <Image
              src="/images/Telehealth_tech.jpg"
              alt="Telehealth technology — care delivery"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-[#3ddc84]/20"
            />
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">What Insurance Becomes</h2>
          <p className="text-gray-400 mb-6">Insurance goes back to what it was always meant to be: Protection — not the front door. It covers hospitalizations, surgeries, catastrophic events, high-cost specialty care. Rare. But necessary.</p>
          
          <h2
