// FILE: app/telecare/page.tsx
// TELECARE PAGE - The 80/20 Care Engine

'use client'

import { useState, useCallback } from 'react'  // ✓ Added useCallback
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function TelecarePage() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  // ✓ Added scrollToTop function
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[100px] w-auto mb-5 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={100}
              height={100}
              className="opacity-90"
            />
          </div>
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">⚕️ T E L E C A R E ⚕️</span>
          {/* ✓ Fixed two-tone H1 */}
          <h1 className="mb-4">
            <span className="hero-white">THE SYSTEM IS RIGGED.</span>
            <br />
            <span className="hero-green">THE FIX IS SIMPLE.</span>
          </h1>
          <p className="font-condensed text-xl md:text-2xl text-white max-w-[700px] mx-auto mt-4">
            Built for the people who've been paying too much for too little — for far too long.
          </p>
        </div>

        {/* Anchor Image - 80/20 Truth */}
        <div className="max-w-[900px] mx-auto mb-12 px-5">
          <div className="relative">
            <button onClick={() => openModal('/images/80-20_Truth_About_Healthcare.png')} className="cursor-pointer w-full">
              <Image
                src="/images/80-20_Truth_About_Healthcare.png"
                alt="The 80/20 Truth About Healthcare"
                width={900}
                height={500}
                className="w-full h-auto rounded-xl border border-green/20 shadow-2xl hover:scale-[1.01] transition-transform"
              />
            </button>
            <div className="absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-green to-gold via-gold rounded-full" />
          </div>
          <p className="text-center font-condensed text-sm text-white font-semibold mt-3">
            <span className="text-green">80% everyday care</span> · <span className="text-gold">20% catastrophic protection</span>
          </p>
          <p className="text-center font-condensed text-xs text-gray-500 mt-1">The system is built wrong. The fix is simple.</p>
        </div>

        <hr className="border-green/20" />

        {/* The System Is Rigged */}
        <section className="container section border-l-4 border-l-red-500">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">⚡ THE SYSTEM IS RIGGED. THE FIX IS SIMPLE.</span>
          <p className="text-body mb-3">People are paying <strong className="text-white font-bold">$10,000+ a year</strong> for health insurance they can't even use.</p>
          <p className="text-body mb-2"><strong className="text-white">Here's what that looks like in real life:</strong></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            <div className="bg-red-500/5 p-3 rounded-md border-l-3 border-l-red-500 text-body text-sm">❌ Deductibles so high they might as well not exist</div>
            <div className="bg-red-500/5 p-3 rounded-md border-l-3 border-l-red-500 text-body text-sm">❌ Copays that punish people for getting help</div>
            <div className="bg-red-500/5 p-3 rounded-md border-l-3 border-l-red-500 text-body text-sm">❌ Networks that shrink every year</div>
            <div className="bg-red-500/5 p-3 rounded-md border-l-3 border-l-red-500 text-body text-sm">❌ Bills that show up months later</div>
            <div className="bg-red-500/5 p-3 rounded-md border-l-3 border-l-red-500 text-body text-sm">❌ Denied claims</div>
            <div className="bg-red-500/5 p-3 rounded-md border-l-3 border-l-red-500 text-body text-sm">❌ Endless paperwork</div>
          </div>
          <p className="text-body mb-3"><strong className="text-white">A system designed to delay, deny, and exhaust people until they give up.</strong></p>
          <p className="text-body mb-3">People are angry — and they're right to be.<br />The system is failing families, workers, students, elders, and small businesses.</p>
          <p className="text-body mb-3"><strong className="text-white">This system wasn't built for you.<br />It was built to protect profits.</strong></p>
          <p className="font-display text-3xl text-green mt-6">TeleCARE is the alternative.</p>
        </section>

        <hr className="border-green/20" />

        {/* ✓ Anchor line added */}
        <div className="container py-8 my-4 border-t-2 border-b-2 border-green/30 text-center">
          <p className="font-display text-xl md:text-2xl text-white font-extrabold">
            Nothing changes until ignoring people costs more than responding to them.<br />
            <span className="text-green">PHIERS is how we raise that cost.</span>
          </p>
        </div>

        <hr className="border-green/20" />

        {/* What TeleCARE Is Not */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">🚫 CLARITY</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> What TeleCARE Is Not</h2>
          <p className="text-body mb-4">To avoid confusion, here's what TeleCARE is not:</p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <span className="bg-white/5 border border-green/20 rounded-full px-4 py-2 text-sm"><strong className="text-gold">Not</strong> insurance</span>
            <span className="bg-white/5 border border-green/20 rounded-full px-4 py-2 text-sm"><strong className="text-gold">Not</strong> a government program</span>
            <span className="bg-white/5 border border-green/20 rounded-full px-4 py-2 text-sm"><strong className="text-gold">Not</strong> a pilot</span>
            <span className="bg-white/5 border border-green/20 rounded-full px-4 py-2 text-sm"><strong className="text-gold">Not</strong> a new bureaucracy</span>
            <span className="bg-white/5 border border-green/20 rounded-full px-4 py-2 text-sm"><strong className="text-gold">Not</strong> a replacement for hospitals</span>
            <span className="bg-white/5 border border-green/20 rounded-full px-4 py-2 text-sm"><strong className="text-gold">Not</strong> a telehealth company</span>
          </div>
          <p className="text-body"><strong className="text-white">TeleCARE is the care layer people should've had all along.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* The 80/20 Truth About Healthcare */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">📊 80/20 TRUTH</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> The 80/20 Truth About Healthcare</h2>
          <p className="text-body mb-3">Here's the part insurance companies don't want people to understand:</p>
          <p className="text-body mb-2"><strong className="text-white">80% of healthcare is simple, predictable, and telehealth-ready.</strong><br />
          <strong className="text-white">80% of insured Americans never use hospitalization or specialty care.</strong></p>
          <p className="text-body mb-2"><strong className="text-white">This is the care people actually need most of the time:</strong></p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            <div className="bg-green/5 p-2 rounded text-sm text-body">✓ Primary care</div>
            <div className="bg-green/5 p-2 rounded text-sm text-body">✓ Urgent care</div>
            <div className="bg-green/5 p-2 rounded text-sm text-body">✓ Mental health</div>
            <div className="bg-green/5 p-2 rounded text-sm text-body">✓ Chronic care</div>
            <div className="bg-green/5 p-2 rounded text-sm text-body">✓ Prescriptions</div>
            <div className="bg-green/5 p-2 rounded text-sm text-body">✓ Preventive care</div>
            <div className="bg-green/5 p-2 rounded text-sm text-body">✓ Dental & vision</div>
            <div className="bg-green/5 p-2 rounded text-sm text-body">✓ Care navigation</div>
          </div>
          <p className="text-body italic mb-3">This is the 80% — the part that should be easy and affordable.</p>
          <p className="text-body mb-2"><strong className="text-white">The remaining 20% is different — rare, but expensive:</strong></p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gold/5 border border-gold/20 rounded-full px-3 py-1 text-sm text-body">→ Hospitalizations</span>
            <span className="bg-gold/5 border border-gold/20 rounded-full px-3 py-1 text-sm text-body">→ Surgeries</span>
            <span className="bg-gold/5 border border-gold/20 rounded-full px-3 py-1 text-sm text-body">→ Specialists</span>
            <span className="bg-gold/5 border border-gold/20 rounded-full px-3 py-1 text-sm text-body">→ Emergency trauma</span>
            <span className="bg-gold/5 border border-gold/20 rounded-full px-3 py-1 text-sm text-body">→ Advanced imaging</span>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Problem */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">⚠️ THE PROBLEM</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> The Problem</h2>
          <p className="text-body mb-2"><strong className="text-white">Insurance bundles the 80% and the 20% together…<br />…and charges people <strong className="text-red-500 font-bold">$10,000+ a year</strong> for the whole thing.</strong></p>
          <p className="text-body mb-3">Even though most people never use the expensive part.</p>
          <p className="text-body mb-3">You're paying <strong className="text-red-500 font-bold">$10,000 a year for protection you rarely use</strong> — instead of <strong className="text-green font-bold">$600 for care you need every day.</strong></p>
          <p className="text-body mb-2"><strong className="text-white">That's why:</strong></p>
          <div className="grid grid-cols-2 gap-2 max-w-[300px] mb-3">
            <span className="text-body text-sm">→ Care gets delayed</span>
            <span className="text-body text-sm">→ Problems get worse</span>
            <span className="text-body text-sm">→ ER visits go up</span>
            <span className="text-body text-sm">→ Costs explode</span>
          </div>
          <p className="text-body"><strong className="text-white">The system is working exactly as designed — just not for you.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* The Simple Fix */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">🔧 THE SIMPLE FIX</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> The Simple Fix</h2>
          <p className="text-body mb-3"><strong className="text-white">The solution is straightforward:</strong></p>
          <p className="font-display text-xl text-center mb-4">Separate everyday care from catastrophic protection.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
            <div className="bg-green text-bg-deep px-6 py-4 rounded-full font-bold text-lg text-center">TeleCARE handles the 80%</div>
            <div className="bg-gold text-bg-deep px-6 py-4 rounded-full font-bold text-lg text-center">Insurance handles the 20%</div>
          </div>
          <p className="text-center text-body text-lg mb-2">Telehealth delivers 80% of healthcare at a fraction of the cost — roughly <strong className="text-green font-bold">1/14th</strong>.</p>
          <p className="text-center text-2xl font-display text-white mt-4">That's it.</p>
        </section>

        <hr className="border-green/20" />

        {/* What TeleCARE Is */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">🏥 WHAT TeleCARE IS</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> What TeleCARE Is</h2>
          <p className="text-body mb-3">TeleCARE is a statewide, open telehealth network that delivers the care most people need — without the insurance middlemen.</p>
          <p className="text-body mb-2"><strong className="text-white">Here's what TeleCARE includes:</strong></p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            <div className="bg-green/10 p-2 rounded text-sm text-body">Primary care</div>
            <div className="bg-green/10 p-2 rounded text-sm text-body">Urgent care</div>
            <div className="bg-green/10 p-2 rounded text-sm text-body">Mental health</div>
            <div className="bg-green/10 p-2 rounded text-sm text-body">Chronic care</div>
            <div className="bg-green/10 p-2 rounded text-sm text-body">Prescriptions</div>
            <div className="bg-green/10 p-2 rounded text-sm text-body">Dental & vision</div>
            <div className="bg-green/10 p-2 rounded text-sm text-body">Preventive care</div>
            <div className="bg-green/10 p-2 rounded text-sm text-body">Care navigation</div>
          </div>
          <p className="text-body mb-2"><strong className="text-white">And here's what it costs:</strong><br />
          <span className="font-display text-4xl text-green">~$600 per year</span> — not $10,000+.</p>
          <p className="text-body">No claims<br />No networks<br />No prior authorization<br /><strong className="text-white">Just care.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* What Insurance Becomes */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">🛡️ WHAT INSURANCE BECOMES</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> What Insurance Becomes</h2>
          <p className="text-body mb-2">Insurance goes back to what it was always meant to be:</p>
          <p className="text-body mb-2"><strong className="text-white">Protection — not the front door.</strong></p>
          <p className="text-body mb-2"><strong className="text-white">It covers:</strong></p>
          <ul className="list-disc list-inside text-body mb-3">
            <li>Hospitalizations</li>
            <li>Surgeries</li>
            <li>Catastrophic events</li>
            <li>High-cost specialty care</li>
          </ul>
          <p className="text-body italic">Rare — but necessary.</p>
        </section>

        <hr className="border-green/20" />

        {/* The 80/20 Care Engine */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">⚙️ THE 80/20 CARE ENGINE</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> The 80/20 Care Engine</h2>
          <div className="bg-green-glow border-l-4 border-l-green p-5 rounded-r-lg mb-4">
            <p className="text-body text-lg"><strong className="text-green font-bold">TeleCARE handles the 80%.</strong><br /><strong className="text-gold font-bold">Insurance handles the 20%.</strong><br /><strong className="text-green font-bold">TeleCARE generates the savings that make the 20% affordable.</strong></p>
          </div>
          <p className="text-body"><strong className="text-white">This is how we finally make universal care possible.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* Why This Works Financially */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">💰 WHY THIS WORKS FINANCIALLY</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> Why This Works Financially</h2>
          <p className="text-body mb-3">When TeleCARE handles everyday care, the entire system gets cheaper.</p>
          <p className="text-body mb-2"><strong className="text-white">Here's what drops:</strong></p>
          <div className="grid grid-cols-2 gap-2 max-w-[400px] mb-4">
            <span className="text-body text-sm">→ ER visits</span>
            <span className="text-body text-sm">→ Hospitalizations</span>
            <span className="text-body text-sm">→ Readmissions</span>
            <span className="text-body text-sm">→ Insurance claims</span>
            <span className="text-body text-sm">→ Premiums</span>
            <span className="text-body text-sm">→ Medicaid costs</span>
            <span className="text-body text-sm">→ Medicare costs</span>
            <span className="text-body text-sm">→ ACA subsidies</span>
          </div>
          <p className="text-body mb-2"><strong className="text-white">And here's what stabilizes:</strong></p>
          <ul className="list-disc list-inside text-body mb-3">
            <li>Private insurance</li>
            <li>Public budgets</li>
            <li>Employer costs</li>
          </ul>
          <p className="text-body mb-2">Healthy people cost less.<br />Simple systems scale.</p>
          <p className="text-body mb-3">Telehealth shrinks the cost of the entire system.<br />Insurance protects against the worst events.</p>
          <p className="text-body mb-2"><strong className="text-white">Together, they create a system that is:</strong></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-green/5 border border-green/20 rounded-lg p-3 text-center"><strong className="text-green block text-lg">Affordable</strong>80% cost reduction + cascading savings</div>
            <div className="bg-green/5 border border-green/20 rounded-lg p-3 text-center"><strong className="text-green block text-lg">Scalable</strong>Works for 234 million Americans</div>
            <div className="bg-green/5 border border-green/20 rounded-lg p-3 text-center"><strong className="text-green block text-lg">Defensible</strong>Market‑based, not government‑mandated</div>
            <div className="bg-green/5 border border-green/20 rounded-lg p-3 text-center"><strong className="text-green block text-lg">Universal</strong>Accessible to everyone</div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Why the Current System Is So Expensive */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">🏦 WHY IT'S SO EXPENSIVE</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> Why the Current System Is So Expensive</h2>
          <p className="text-body mb-2">Insurance companies profit when:</p>
          <div className="grid grid-cols-2 gap-2 max-w-[400px] mb-3">
            <span className="text-body text-sm">→ People avoid care</span>
            <span className="text-body text-sm">→ People delay care</span>
            <span className="text-body text-sm">→ People get confused</span>
            <span className="text-body text-sm">→ Claims get denied</span>
            <span className="text-body text-sm">→ Costs shift to patients</span>
          </div>
          <p className="text-body"><strong className="text-white">The system is working exactly as designed — just not for you.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* TeleCARE Flips the Incentives */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">🔄 FLIPS THE INCENTIVES</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> TeleCARE Flips the Incentives</h2>
          <p className="text-body mb-2"><strong className="text-white">TeleCARE is built for people, not profits.</strong></p>
          <p className="text-body mb-2"><strong className="text-white">We want:</strong></p>
          <div className="grid grid-cols-2 gap-2 max-w-[400px] mb-3">
            <span className="text-body text-sm">→ People to get care early</span>
            <span className="text-body text-sm">→ Problems solved before they escalate</span>
            <span className="text-body text-sm">→ Stability, not crisis</span>
            <span className="text-body text-sm">→ Access, not barriers</span>
          </div>
          <p className="text-body"><strong className="text-white">This is how care should work.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* Who TeleCARE Helps */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">👥 WHO IT HELPS</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> Who TeleCARE Helps</h2>
          <p className="text-body mb-3"><strong className="text-white">TeleCARE is built for everyone who's been left behind:</strong></p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-3 text-center text-body">Workers</div>
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-3 text-center text-body">Students</div>
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-3 text-center text-body">Parents</div>
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-3 text-center text-body">Elders</div>
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-3 text-center text-body">Veterans</div>
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-3 text-center text-body">Small business owners</div>
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-3 text-center text-body">Gig workers</div>
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-3 text-center text-body">People between jobs</div>
            <div className="col-span-2 bg-gold/5 border border-gold/20 rounded-lg p-3 text-center text-body">People with insurance they can't afford to use</div>
          </div>
          <p className="text-body"><strong className="text-white">This is a system for all of us.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* TeleCARE Supports Providers */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">👩‍⚕️ SUPPORTS PROVIDERS</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> TeleCARE Supports Providers — It Doesn't Replace Them</h2>
          <p className="text-body mb-3">TeleCARE is the backbone, not another telehealth app.</p>
          <p className="text-body mb-2"><strong className="text-white">Here's what providers get:</strong></p>
          <div className="grid grid-cols-2 gap-2 max-w-[400px] mb-3">
            <span className="text-body text-sm">→ More patients</span>
            <span className="text-body text-sm">→ More stability</span>
            <span className="text-body text-sm">→ Less admin burden</span>
            <span className="text-body text-sm">→ Better coordination</span>
            <span className="text-body text-sm">→ A shared system of record</span>
            <span className="text-body text-sm">→ A statewide network</span>
          </div>
          <p className="text-body">At scale, TeleCARE can even cover the monthly cost of care access.</p>
        </section>

        <hr className="border-green/20" />

        {/* One Network */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">🔗 ONE NETWORK</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> One Network. One System. One Entry Point.</h2>
          <p className="text-body mb-3"><strong className="text-white">TeleCARE connects the entire care ecosystem:</strong></p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-white/5 p-2 rounded text-center text-body text-sm">Clinics</div>
            <div className="bg-white/5 p-2 rounded text-center text-body text-sm">Telehealth providers</div>
            <div className="bg-white/5 p-2 rounded text-center text-body text-sm">Schools</div>
            <div className="bg-white/5 p-2 rounded text-center text-body text-sm">Senior centers</div>
            <div className="bg-white/5 p-2 rounded text-center text-body text-sm">Churches</div>
            <div className="bg-white/5 p-2 rounded text-center text-body text-sm">Shelters</div>
            <div className="bg-white/5 p-2 rounded text-center text-body text-sm">Food banks</div>
            <div className="bg-white/5 p-2 rounded text-center text-body text-sm">Campuses</div>
            <div className="bg-white/5 p-2 rounded text-center text-body text-sm">County programs</div>
          </div>
          <p className="text-body mb-2">People can enter from anywhere.</p>
          <p className="text-body"><strong className="text-white">One coordinated system instead of fragmentation.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* Why TeleCARE Matters Now */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">⏰ WHY NOW</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> Why TeleCARE Matters Now</h2>
          <p className="text-body mb-2"><strong className="text-white">People are losing:</strong></p>
          <div className="grid grid-cols-2 gap-2 max-w-[300px] mb-3">
            <span className="text-body text-sm">→ Care</span>
            <span className="text-body text-sm">→ Housing</span>
            <span className="text-body text-sm">→ Food</span>
            <span className="text-body text-sm">→ Income</span>
            <span className="text-body text-sm">→ Stability</span>
          </div>
          <p className="text-body mb-2"><strong className="text-white">Meanwhile:</strong></p>
          <ul className="list-disc list-inside text-body mb-3">
            <li>Cities are overwhelmed</li>
            <li>Public health systems are stretched</li>
            <li>Providers are disconnected</li>
          </ul>
          <p className="text-body mb-2"><strong className="text-white">TeleCARE creates the missing layer:</strong></p>
          <ul className="list-disc list-inside text-body">
            <li>One open network</li>
            <li>One shared system</li>
            <li>One affordable entry point</li>
            <li>One statewide safety net</li>
          </ul>
        </section>

        <hr className="border-green/20" />

        {/* What Makes It PHIER-Powered */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">⚡ PHIER-POWERED</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> What Makes It PHIER‑Powered</h2>
          <p className="text-body mb-2"><strong className="text-white">TeleCARE is the care layer.<br />PHIERS is the power layer.</strong></p>
          <p className="text-body mb-2"><strong className="text-white">Together they add:</strong></p>
          <ul className="list-disc list-inside text-body mb-3">
            <li><strong className="text-green">PHIERSale</strong> — Lower cost of living</li>
            <li><strong className="text-green">PHIERWorks</strong> — Income + job pathways</li>
            <li><strong className="text-green">PHIERPlace</strong> — Referral + access system</li>
            <li><strong className="text-green">Shared Case Management</strong> — One system across organizations</li>
          </ul>
          <p className="text-body">Care + stability + economic support — all connected.</p>
        </section>

        <hr className="border-green/20" />

        {/* Built to Scale */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">📈 BUILT TO SCALE</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> Built to Scale</h2>
          <p className="text-body mb-3"><strong className="text-white">TeleCARE can be deployed:</strong></p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <span className="bg-green/10 border border-green/20 rounded-full px-4 py-2 text-sm">Statewide</span>
            <span className="bg-green/10 border border-green/20 rounded-full px-4 py-2 text-sm">Countywide</span>
            <span className="bg-green/10 border border-green/20 rounded-full px-4 py-2 text-sm">Citywide</span>
            <span className="bg-green/10 border border-green/20 rounded-full px-4 py-2 text-sm">Campus‑wide</span>
            <span className="bg-green/10 border border-green/20 rounded-full px-4 py-2 text-sm">Regionally</span>
            <span className="bg-green/10 border border-green/20 rounded-full px-4 py-2 text-sm">Nationally</span>
          </div>
          <p className="text-body"><strong className="text-white">Any system can adopt it.</strong></p>
        </section>

        <hr className="border-green/20" />

        {/* The One-Sentence Version */}
        <section className="container section border-l-4 border-l-gold">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">🎯 IN ONE SENTENCE</span>
          <h2 className="font-display text-3xl text-white mb-4"><span className="text-gold">⭐</span> The One‑Sentence Version</h2>
          <div className="bg-gold/5 rounded-xl p-6 text-center">
            <p className="text-body text-lg leading-relaxed"><strong className="text-white">TeleCARE is the PHIER‑powered, people‑first care engine that delivers the 80% of healthcare people actually use for ~$600/year — while insurance covers the rare 20% — cutting costs, expanding access, and finally making universal care possible.</strong></p>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center mb-20">
          <h2 className="font-display text-3xl text-green mb-4">Congress could authorize this tomorrow.</h2>
          <p className="font-display text-2xl text-gold mb-3">They just haven't had to.</p>
          <p className="text-body text-lg max-w-[600px] mx-auto mb-4">Once you separate care from catastrophe, the math becomes simple — and universal coverage becomes possible.</p>
          <p className="text-body text-xl font-bold mb-6">Sign the petition. Make them listen.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
            <Button href="/simple-math" variant="secondary">📊 SEE THE MATH</Button>
          </div>
        </section>

        {/* Page Navigation */}
        <div className="container flex justify-between items-center py-6 border-t border-green/20 mt-8">
          <Link href="/solutions" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            ← Back to 5D Solutions
          </Link>
          <Link href="/donate" className="font-condensed font-bold text-green text-sm hover:text-green-dim transition-colors">
            Donate →
          </Link>
        </div>
      </main>

      <Footer />

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white text-3xl cursor-pointer hover:text-green transition-colors"
              >
                ✕
              </button>
              <Image
                src={modalImage}
                alt="Enlarged view"
                width={800}
                height={600}
                className="rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✓ Updated back-to-top button to use scrollToTop */}
      <button 
        onClick={scrollToTop}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

      <style jsx global>{`
        .back-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--green);
          color: var(--bg-deep);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 150ms ease;
          z-index: 999;
          border: none;
        }
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        .back-to-top:hover {
          background: #2ab568;
          transform: translateY(-2px);
        }
        .bg-green-glow {
          background: rgba(61, 220, 132, 0.08);
        }
      `}</style>

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

// END FILE: app/telecare/page.tsx
