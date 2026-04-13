'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function BuyingPowerPage() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      {/* Orientation Panel */}
      <div className="bg-[#0f172a] text-[#e5e7eb] px-5 py-3 border-b border-[#1e293b] sticky top-0 z-[999]">
        <strong className="text-white">Buying Power: We're turning wasted premiums into direct care and political leverage.</strong>
        <span className="block mt-1 text-[#cbd5f5] text-sm">
          100M+ organized = largest pharmaceutical buyer in the nation. 
          We undercut Big Pharma through pure market dominance.
        </span>
      </div>

      <Navigation />

      <main className="pt-4 pb-16">
        <div className="max-w-[900px] mx-auto px-5 py-5">
          
          {/* Header */}
          <header className="text-center py-10 px-5 bg-gradient-to-br from-[rgba(15,52,96,0.8)] to-[rgba(22,33,62,0.8)] rounded-xl border-2 border-[#4caf50]/30 mb-8">
            <div className="flex justify-center mb-5">
              <Image 
                src="/images/PHIERS_Logo.jpg" 
                alt="PHIERS Logo" 
                width={120} 
                height={120} 
                className="h-[120px] w-auto"
              />
            </div>
            <h1 className="text-[#4caf50] text-3xl md:text-4xl mb-4">💪 Cooperative Purchasing Power: The Nuclear Option</h1>
            <p className="text-[#81c784] text-lg">We're turning wasted premiums into direct care and political leverage.</p>
          </header>

          {/* What Most People Don't Understand */}
          <section>
            <h2 className="text-[#4caf50] text-2xl mt-10 mb-5">What Most People Don't Understand</h2>
            <div className="bg-[#4caf50]/10 border-2 border-[#4caf50] p-6 my-6 rounded-lg">
              <p className="text-white font-bold text-lg mb-4">
                When 100+ million people organize as a cooperative buying group, we become something 
                unprecedented in history.
              </p>
            </div>
          </section>

          {/* The Market Reality */}
          <section>
            <h2 className="text-[#4caf50] text-2xl mt-10 mb-5">📊 The Market Reality</h2>
            
            <div className="text-center my-10">
              <Image
                src="https://raw.githubusercontent.com/phiersale/PHIERS-Concept/main/90pct_of_US_Meds_are_Imports.png"
                alt="90% of US Medications are Imports"
                width={500}
                height={300}
                className="max-w-full md:max-w-[50%] h-auto rounded-lg border-2 border-[#4caf50]/30 cursor-pointer hover:scale-105 transition-transform mx-auto"
              />
              <p className="text-[#81c784] text-sm italic mt-2">Click to enlarge • US imports 90% of its medications - this gives us massive leverage</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
              <div className="bg-[#4caf50]/10 border-2 border-[#4caf50] p-6 rounded-lg">
                <h3 className="text-[#4caf50] text-xl mb-4">🌍 Import Reality</h3>
                <p className="text-[#c8e6c9]">US imports 90% of its medications from global manufacturers</p>
              </div>
              
              <div className="bg-[#4caf50]/10 border-2 border-[#4caf50] p-6 rounded-lg">
                <h3 className="text-[#4caf50] text-xl mb-4">💪 Market Dominance</h3>
                <p className="text-[#c8e6c9]">100M+ cooperative members = LARGEST PHARMACEUTICAL BUYER IN THE NATION</p>
              </div>
              
              <div className="bg-[#4caf50]/10 border-2 border-[#4caf50] p-6 rounded-lg">
                <h3 className="text-[#4caf50] text-xl mb-4">💰 Cost Advantage</h3>
                <p className="text-[#c8e6c9]">Buying cooperatively (no markups, no middlemen) = UNDERCUTS ENTIRE US PHARMA MARKET</p>
              </div>
              
              <div className="bg-[#4caf50]/10 border-2 border-[#4caf50] p-6 rounded-lg">
                <h3 className="text-[#4caf50] text-xl mb-4">🎯 Result</h3>
                <p className="text-[#c8e6c9]">Drug costs 10x lower without any government negotiation</p>
              </div>
            </div>
          </section>

          {/* We Already Know How to Cut Drug Costs */}
          <section>
            <h2 className="text-[#4caf50] text-2xl mt-10 mb-5">💊 We Already Know How to Cut Drug Costs 80-90%</h2>
            
            <div className="bg-[#4caf50]/10 border-2 border-[#4caf50] p-6 my-6 rounded-lg">
              <h3 className="text-[#4caf50] text-xl mt-0 mb-4">Proof we can deliver:</h3>
              <ul className="pl-5 space-y-3">
                <li className="text-[#c8e6c9]">
                  <strong className="text-white">Cost Plus Drugs:</strong> 80-90% savings, 7M customers, operational now
                </li>
                <li className="text-[#c8e6c9]">
                  <strong className="text-white">Academic R&D:</strong> Universities produce drugs at 1/24th Big Pharma cost
                </li>
                <li className="text-[#c8e6c9]">
                  <strong className="text-white">Direct supply:</strong> 175M members = buying power to eliminate middlemen
                </li>
              </ul>
              <p className="mt-5 text-lg">
                This isn't theory. These models are working right now. PHIERS scales them to 234M Americans.
              </p>
            </div>
          </section>

          {/* Alternative Drug Development Models */}
          <section>
            <h2 className="text-[#4caf50] text-2xl mt-10 mb-5">🔬 Alternative Drug Development Models</h2>
            
            <div className="text-center my-10">
              <Image
                src="https://raw.githubusercontent.com/phiersale/PHIERS-Concept/main/Drug_DEV_Costs__UAEM.png"
                alt="Drug Development Costs - Academic vs Big Pharma"
                width={500}
                height={350}
                className="max-w-full md:max-w-[50%] h-auto rounded-lg border-2 border-[#4caf50]/30 cursor-pointer hover:scale-105 transition-transform mx-auto"
              />
              <p className="text-[#81c784] text-sm italic mt-2">Click to enlarge • Alternative R&D Models Produce New Drugs at 1/24th the Cost of Big Pharma</p>
            </div>

            <p className="text-center text-lg my-8">Universities and Nonprofits Are Already Proving This Works</p>
          </section>

          {/* Why This Is Unstoppable */}
          <section>
            <h2 className="text-[#4caf50] text-2xl mt-10 mb-5">🚀 Why This Is Unstoppable</h2>
            
            <div className="bg-[#4caf50]/10 border-2 border-[#4caf50] p-6 my-6 rounded-lg">
              <p className="mb-4">
                <strong className="text-white">Trump's plan:</strong> Negotiate drug prices. Big Pharma fights back. Political gridlock.
              </p>
              <p className="mb-4">
                <strong className="text-[#4caf50]">PHIERS approach:</strong> We don't negotiate. We just buy direct from global manufacturers at bulk rates.
              </p>
              <p className="mt-5 text-white font-bold text-lg">
                Result: We undercut Big Pharma not through law, but through pure market dominance and purchasing power.
              </p>
            </div>
          </section>

          {/* This Is Why 100M+ Organized People Literally Cannot Be Stopped */}
          <section>
            <h2 className="text-[#4caf50] text-2xl mt-10 mb-5">⚡ This Is Why 100M+ Organized People Literally Cannot Be Stopped</h2>
            
            <div className="bg-[#4caf50]/10 border-2 border-[#4caf50] p-6 my-6 rounded-lg">
              <p className="text-white font-bold text-lg mb-4">
                We have THREE forms of power simultaneously:
              </p>
              <ul className="pl-5 space-y-3">
                <li className="text-[#c8e6c9]">
                  <strong className="text-white">Financial power:</strong> Largest pharma buyer in the nation
                </li>
                <li className="text-[#c8e6c9]">
                  <strong className="text-white">Political power:</strong> 3.5% systemic change threshold (Chenoweth proven)
                </li>
                <li className="text-[#c8e6c9]">
                  <strong className="text-white">Structural power:</strong> Everyone benefits → impossible to divide us
                </li>
              </ul>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center my-12">
            <h2 className="text-[#4caf50] text-2xl mt-10 mb-5">Ready to Join the Buying Power?</h2>
            <p className="text-lg my-5">
              Sign the petition. Become part of the largest cooperative pharmaceutical buyer in American history.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap my-8">
              <Link href="/petition" className="inline-block bg-gradient-to-r from-[#4caf50] to-[#2e7d32] text-white px-8 py-3.5 text-lg font-bold border-2 border-[#4caf50] rounded-lg hover:from-[#66bb6a] hover:to-[#388e3c] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#4caf50]/30">
                ✏️ Sign Petition Now
              </Link>
              <Link href="/solutions" className="inline-block bg-gradient-to-r from-[#4caf50]/20 to-[#4caf50]/10 text-white px-8 py-3.5 text-lg font-bold border-2 border-[#4caf50] rounded-lg hover:from-[#4caf50]/30 hover:to-[#4caf50]/20 transition-all">
                🧩 See 5D Solutions →
              </Link>
            </div>
          </section>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 my-10 pt-8 border-t-2 border-[#4caf50]/30">
            <Link href="/leverage" className="flex-1 text-center bg-gradient-to-r from-[#4caf50]/20 to-[#4caf50]/10 text-white px-4 py-3 font-bold border-2 border-[#4caf50] rounded-lg hover:from-[#4caf50]/30 hover:to-[#4caf50]/20 transition-all">
              ← Back: Leverage
            </Link>
            <Link href="/solutions" className="flex-1 text-center bg-gradient-to-r from-[#4caf50]/20 to-[#4caf50]/10 text-white px-4 py-3 font-bold border-2 border-[#4caf50] rounded-lg hover:from-[#4caf50]/30 hover:to-[#4caf50]/20 transition-all">
              Next: 5D Solutions →
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  )
}
