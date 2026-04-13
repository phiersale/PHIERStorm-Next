'use client'

import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function DonatePage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Congress responds to pressure — not promises.<br /><span className="text-[#3ddc84]">Your support builds the pressure.</span></h1>
          
          <p className="text-gray-400 text-center mb-8">The window is open right now. Every dollar builds district-level pressure before Congress goes back to Washington.</p>
          
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8 mb-8">
            <p className="text-gray-400 mb-4">Your support funds:</p>
            <p className="text-gray-400 mb-2">→ Organizing</p>
            <p className="text-gray-400 mb-2">→ Outreach</p>
            <p className="text-gray-400 mb-2">→ Media</p>
            <p className="text-gray-400 mb-6">→ District coordination</p>
            <p className="font-condensed text-lg text-white font-bold mb-6">That turns signatures into town halls and town halls into accountability.</p>
          </div>
          
          <div className="text-center my-8">
            <p className="font-condensed text-xl text-[#ffd60a] font-bold mb-2">One dollar from a million people is a million dollars.</p>
            <p className="text-gray-400">A movement funded by the people belongs to the people.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">$25</div>
              <p className="text-gray-500 text-xs">Outreach to 100 people in your district</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">$50</div>
              <p className="text-gray-500 text-xs">Funds a district team for a week</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">$100</div>
              <p className="text-gray-500 text-xs">Reaches an organizer network in your state</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">$500</div>
              <p className="text-gray-500 text-xs">Funds media that reaches 10,000+ people</p>
            </div>
          </div>
          
              <div className="mt-6 mb-8">
                <p className="text-gray-400 text-sm mb-2 text-center">Other amount</p>
                <input 
                  type="number" 
                  placeholder="$"
                  className="w-full max-w-[200px] mx-auto block p-3 rounded-lg bg-[#111d35] border border-[#3ddc84]/30 text-white text-center focus:outline-none focus:border-[#3ddc84]"
                />
              </div>
              
              <div className="bg-[#0a1628] border-2 border-[#3ddc84] rounded-xl p-8 text-center">
            <h2 className="font-display text-3xl text-[#3ddc84] mb-6">DONATE NOW</h2>
            <div className="space-y-3 text-gray-400">
              <p><strong className="text-white">Venmo:</strong> @Will4PHIERS</p>
              <p><strong className="text-white">PayPal:</strong> will@phiers.org</p>
              <p><strong className="text-white">Zelle:</strong> <a href="tel:3019190970" className="hover:text-[#3ddc84] transition-colors">(301) 919-0970</a> <span className="text-xs text-gray-500">[Zelle only]</span></p>
              <p className="mt-4"><Link href="https://gofund.me/9361cad3d" className="text-[#3ddc84] font-condensed font-bold hover:underline">GoFundMe Campaign →</Link></p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">Can't donate right now? Your name matters as much as your dollar.</p>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Link href="/petition" className="px-6 py-3 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">✍ SIGN THE PETITION</Link>
              <Link href="/action" className="px-6 py-3 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">📣 SHARE THE MESSAGE</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
