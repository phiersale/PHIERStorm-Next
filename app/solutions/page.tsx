'use client'

import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function SolutionsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Five systems.<br /><span className="text-[#3ddc84]">One mechanism.</span><br />A country that works.</h1>
          <p className="text-gray-400 text-center mb-12">Congress keeps patching symptoms. PHIERS fixes the system that creates them.</p>
          
          <p className="text-gray-400 mb-8">Five crises. One interconnected solution. Each dimension unlocking the next. This isn't a policy list. It's survival architecture.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Philosophy</h2>
          <p className="text-gray-400 mb-6">America's problems are not separate. They are stacked. PHIERS solves them the same way: stacked, coordinated, accelerating.</p>
          <p className="text-gray-400 mb-3">Healthcare crisis → unlocks jobs → unlocks safety net → unlocks opportunity → unlocks guardrails</p>
          <p className="font-condensed text-lg text-[#3ddc84] font-bold mb-8">Each dimension reinforces the others.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The First Domino</h2>
          <p className="text-gray-400 mb-6">Telehealth is the first domino — the one Congress refuses to touch. Because once telehealth falls, everything else becomes possible. That's what they know. That's why they've ignored it. Until now.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">DIMENSION 1 — TELECARE FOR EVERYONE</h2>
          <p className="text-gray-400 mb-6">Congress must authorize $600 of telehealth coverage for every American, immediately. Cheaper. Faster. More accessible. Already working. No new legislation required. This is the entry point to universal care — not in theory, but in practice. Once telehealth is authorized, the entire 5D cascade becomes possible. This is the lever.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">DIMENSION 2 — FULL COVERAGE IN UNDER A YEAR</h2>
          <p className="text-gray-400 mb-6">Telehealth is the on-ramp. Universal care is the destination. Once everyone has access to basic care, the cost of full coverage drops dramatically. Universal healthcare is no longer a 10-year dream. It becomes an 8–13 month inevitability. This isn't ideology. It's math.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">DIMENSION 3 — A MONTHLY CHECK</h2>
          <p className="text-gray-400 mb-6">Not from new taxes. From the $2.73 trillion we're already wasting. This isn't spending. It's redirecting waste into stability. The money exists. We're just using it wrong.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">DIMENSION 4 — MILLIONS OF AI-RESISTANT JOBS</h2>
          <p className="text-gray-400 mb-6">Stability creates capacity. Capacity creates opportunity. When people have healthcare, income stability, and breathing room, they retrain, relocate, start businesses, fill essential roles, build new industries. This is how we rebuild the middle class.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">DIMENSION 5 — DEMOCRACY WITH TEETH</h2>
          <p className="text-gray-400 mb-6">Economic stability is political stability. When people are secure, they're harder to manipulate, harder to divide, harder to radicalize. This is how we defend democracy — with material stability, not speeches.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Loop — Self-Reinforcing</h2>
          <p className="text-gray-400 mb-3">✓ Healthcare savings fund stability</p>
          <p className="text-gray-400 mb-3">✓ Stability fuels job creation</p>
          <p className="text-gray-400 mb-3">✓ Job creation stabilizes democracy</p>
          <p className="text-gray-400 mb-3">✓ Democracy strengthens accountability</p>
          <p className="text-gray-400 mb-6">✓ Accountability reduces costs further</p>
          <p className="font-condensed text-lg text-[#3ddc84] font-bold mb-8">Self-reinforcing progress — the opposite of the downward spiral we're in now.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Cascade</h2>
          <p className="font-display text-2xl text-[#ffd60a] mb-2">1 → 12 → 148 → 1,825 → 21,312 → 255,744 → 3,068,928 → 36,827,136 → 442,000,000+</p>
          <p className="font-condensed text-lg text-white font-bold mb-8">This is how systems scale. This is why Congress is terrified.</p>
          
          <div className="text-center mt-8">
            <Link href="/petition" className="inline-block px-8 py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ ADD MY NAME</Link>
            <Link href="/simple-math" className="block text-[#3ddc84] text-sm font-condensed font-bold hover:underline mt-4">→ See the Simple Math</Link>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
