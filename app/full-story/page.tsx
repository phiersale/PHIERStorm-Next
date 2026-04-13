'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function FullStoryPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">For anyone who needs to see<br /><span className="text-[#3ddc84]">the receipts before they move.</span></h1>
          <p className="text-gray-400 text-center mb-12">If you're the kind of person who needs the full case before you act — this is where it lives. The math. The law. The proof. The letters. The videos. The 16-year arc. Start anywhere. It all connects.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Problem</h2>
          <p className="text-gray-400 mb-6">CMS — the federal agency that administers Medicare and Medicaid — pays roughly $8,000 per person per year under traditional insurance. 80% of everyday healthcare needs can be met through telehealth at $600 per person per year. That gap — $7,400 per person, per year — multiplied across the American population represents $2.73 trillion annually. Not profit from care. Overhead, admin cost, and margin extracted by a system designed around payment processing, not health outcomes.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Legal Authority</h2>
          <p className="text-gray-400 mb-6">Congress doesn't need new legislation to expand telehealth through the ACA Exchange. The authority already exists. The demand is already legal. The only missing ingredient is organized people forcing them to use it.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Cascade Math</h2>
          <p className="text-gray-400 mb-3">One conversion funds twelve more.</p>
          <p className="text-gray-400 mb-3">Twelve fund 148.</p>
          <p className="text-gray-400 mb-3">148 fund 1,825.</p>
          <p className="text-gray-400 mb-6">In nine iterations: 234 million Americans covered. In 8–13 months.</p>
          <p className="font-condensed text-xl text-[#ffd60a] font-bold mb-8">That's not a campaign promise. That's arithmetic.</p>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Proof Points</h2>
          <div className="space-y-4 mb-8">
            <div><p className="font-condensed font-bold text-white">Mark Cuban's Cost Plus Drugs</p><p className="text-gray-400 text-sm">The PHIERSale model — running at scale. 7 million customers. 80–90% savings.</p></div>
            <div><p className="font-condensed font-bold text-white">ZORTT Elite Medical</p><p className="text-gray-400 text-sm">Cooperative healthcare delivery. Operational. Proven.</p></div>
            <div><p className="font-condensed font-bold text-white">Erica Chenoweth / Harvard Kennedy School</p><p className="text-gray-400 text-sm">323 campaigns. Zero failures at 3.5%.</p></div>
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Letters</h2>
          <div className="space-y-6 mb-8">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6">
              <Image src="/images/VanHollen_Letter_of_Support.png" alt="Congressman Chris Van Hollen letter" width={500} height={400} className="w-full h-auto rounded-lg mb-3" />
              <p className="text-white italic">"PHIERS.org has the potential to become a vital part of the health care system."</p>
              <p className="text-[#3ddc84] text-sm mt-2">— Congressman Chris Van Hollen</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6">
              <Image src="/images/KJ_Sacramento_Support_Letter.png" alt="Mayor Kevin Johnson letter" width={500} height={400} className="w-full h-auto rounded-lg mb-3" />
              <p className="text-white italic">"I strongly support the PHIERS approach... PHIERS could be readily adapted throughout California as a flagship community health care approach."</p>
              <p className="text-[#3ddc84] text-sm mt-2">— Mayor Kevin Johnson, Sacramento</p>
            </div>
            <p className="text-gray-400 text-sm">This support goes back to 2009. Before any of the proof points arrived. The idea was right then. The moment is now.</p>
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The Validation Videos</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6">
              <p className="font-condensed font-bold text-white mb-2">Pathos Communications</p>
              <p className="text-gray-400 text-sm mb-3">Kevin Harrington — original Shark Tank investor. Fortune 500 PR firm.</p>
              <Link href="https://youtu.be/KLu7USN_dao" target="_blank" className="text-[#3ddc84] text-sm font-condensed font-bold hover:underline">▶ Why Pathos Chose PHIERS — 7:11</Link>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6">
              <p className="font-condensed font-bold text-white mb-2">DotCom Magazine</p>
              <p className="text-gray-400 text-sm mb-3">Kevin O'Leary's platform. Interviewed Will Price in 2022.</p>
              <Link href="https://youtu.be/pUdlWukaLLY" target="_blank" className="text-[#3ddc84] text-sm font-condensed font-bold hover:underline">▶ DotCom Magazine Teaser</Link>
            </div>
          </div>
          
          <h2 className="font-display text-3xl text-white mt-8 mb-4">The 16-Year Arc</h2>
          <div className="space-y-2 text-gray-400 mb-8">
            <p>2009 — SureSafe Pharma proves the model.</p>
            <p>2014 — Prior art documented.</p>
            <p>2022 — DotCom Magazine validation.</p>
            <p>2022 — Cost Plus Drugs proves the market.</p>
            <p>2024 — Pathos Communications validation.</p>
            <p>2025 — Telehealth mainstream. Model confirmed.</p>
            <p>2026 — The moment the system was built for.</p>
          </div>
          
          <div className="bg-[#0a1628] border-2 border-[#3ddc84] rounded-xl p-8 text-center">
            <p className="font-condensed text-xl text-[#ffd60a] font-bold mb-4">You've seen the receipts. Now be counted.</p>
            <Link href="/petition" className="inline-block px-8 py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ ADD MY NAME</Link>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
