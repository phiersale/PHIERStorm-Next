'use client'

import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function TelecarePage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Healthcare doesn't need to be expensive.<br /><span className="text-[#3ddc84]">It needs to be organized.</span></h1>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Problem</h2>
          <p className="text-gray-400 mb-3">America spends more on healthcare than any country in history.</p>
          <p className="text-gray-400 mb-3">$10,000 per person. $4.3 trillion total. And outcomes keep getting worse.</p>
          <p className="text-gray-400 mb-6">Not because care is expensive — because the system is. Middlemen. Billing layers. Administrative waste. Profit extraction. The care is fine. The system is broken.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The 80/20 Truth</h2>
          <p className="text-gray-400 mb-3">80% of healthcare is simple, predictable, and telehealth-ready.</p>
          <p className="text-gray-400 mb-6">80% of insured Americans never use hospitalization or specialty care.</p>
          <p className="font-condensed text-lg text-white font-bold mb-3">This is the 80% people actually need:</p>
          <p className="text-gray-400 mb-2">→ Primary care</p>
          <p className="text-gray-400 mb-2">→ Urgent care</p>
          <p className="text-gray-400 mb-2">→ Mental health</p>
          <p className="text-gray-400 mb-2">→ Chronic care</p>
          <p className="text-gray-400 mb-2">→ Prescriptions</p>
          <p className="text-gray-400 mb-2">→ Preventive care</p>
          <p className="text-gray-400 mb-2">→ Dental and vision</p>
          <p className="text-gray-400 mb-6">→ Care navigation</p>
          <p className="text-gray-400 mb-6">The remaining 20% is rare — but expensive: Hospitalizations. Surgeries. Specialists. Emergency trauma. Insurance bundles the 80% and the 20% and charges $10,000+ for the whole thing — even though most people never use the expensive part.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Fix</h2>
          <p className="text-gray-400 mb-3">Separate everyday care from catastrophic protection.</p>
          <p className="text-gray-400 mb-3">TeleCARE handles the 80%.</p>
          <p className="text-gray-400 mb-6">Insurance handles the 20%.</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-8">Telehealth delivers 80% of healthcare at one-sixteenth the cost. That's it.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">What TeleCARE Is</h2>
          <p className="text-gray-400 mb-3">A statewide, open telehealth network that delivers the care most people need — without the insurance middlemen.</p>
          <p className="font-condensed text-lg text-white font-bold mb-3">What it includes:</p>
          <p className="text-gray-400 mb-2">→ Primary care</p>
          <p className="text-gray-400 mb-2">→ Urgent care</p>
          <p className="text-gray-400 mb-2">→ Mental health</p>
          <p className="text-gray-400 mb-2">→ Chronic care management</p>
          <p className="text-gray-400 mb-2">→ Prescriptions</p>
          <p className="text-gray-400 mb-2">→ Dental and vision</p>
          <p className="text-gray-400 mb-2">→ Preventive care</p>
          <p className="text-gray-400 mb-6">→ Care navigation</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-3">What it costs: ~$600 per year.</p>
          <p className="text-gray-400 mb-6">No claims. No networks. No prior authorization. Just care.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">What Insurance Becomes</h2>
          <p className="text-gray-400 mb-6">Insurance goes back to what it was always meant to be: Protection — not the front door. It covers hospitalizations, surgeries, catastrophic events, high-cost specialty care. Rare. But necessary.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">Why It Works Financially</h2>
          <p className="text-gray-400 mb-3">When TeleCARE handles everyday care, the entire system gets cheaper.</p>
          <p className="font-condensed text-lg text-white font-bold mb-3">What drops:</p>
          <p className="text-gray-400 mb-2">→ ER visits</p>
          <p className="text-gray-400 mb-2">→ Hospitalizations</p>
          <p className="text-gray-400 mb-2">→ Insurance claims</p>
          <p className="text-gray-400 mb-2">→ Premiums</p>
          <p className="text-gray-400 mb-6">→ Medicaid costs</p>
          <p className="font-condensed text-lg text-white font-bold mb-3">What stabilizes:</p>
          <p className="text-gray-400 mb-2">→ Private insurance</p>
          <p className="text-gray-400 mb-2">→ Public budgets</p>
          <p className="text-gray-400 mb-6">→ Employer costs</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-8">Telehealth shrinks the cost of the entire system.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Math</h2>
          <p className="text-gray-400 mb-3">$10,000 per person today.</p>
          <p className="text-gray-400 mb-3">$600 per person with TeleCARE.</p>
          <p className="font-display text-3xl text-[#ffd60a] font-bold my-4">$2.73 trillion in annual savings.</p>
          <p className="font-condensed text-xl text-[#3ddc84] font-bold mb-8">That's not a projection. That's arithmetic.</p>
          
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8 text-center">
            <p className="text-gray-400 mb-4">Congress could authorize this tomorrow. They just haven't had to — until now.</p>
            <p className="text-gray-400 mb-6">The war is making everything more expensive. Healthcare inputs. Pharmaceutical supply chains. Medical equipment. All of it.</p>
            <p className="font-condensed text-lg text-[#ffd60a] font-bold mb-6">The case for TeleCARE gets stronger every week the war continues.</p>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Link href="/petition" className="px-8 py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ ADD MY NAME</Link>
              <Link href="/simple-math" className="px-8 py-4 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">📊 SEE THE MATH</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
