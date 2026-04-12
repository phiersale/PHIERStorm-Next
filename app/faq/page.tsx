'use client'

import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function FAQPage() {
  const faqs = [
    { q: "Is this realistic?", a: "Yes — because it's funded by math, not hope. Telehealth pays for itself within months. The entire solution becomes self-sustaining in under a year because the savings generated exceed the cost of everything PHIERS provides." },
    { q: "Is this a petition?", a: "No. Petitions create signals. PHIERS creates consequences. When your district hits 1,500, your representative gets a mandatory public town hall — not a form letter response." },
    { q: "Why 1,500 people?", a: "It's the tipping point where representatives cannot ignore their own district. It's less than 0.5% of most districts. And it's the threshold that triggers public accountability — before the next election, not after." },
    { q: "Why telehealth first?", a: "Because it's the first domino — and the one that pays for the rest. The savings from TeleCARE fund every other benefit after the first year." },
    { q: "Is this partisan?", a: "No. Pressure is not ideological. It's mathematical. Healthcare, stability, jobs, and democracy are not partisan issues — they're human ones. This movement includes conservatives, liberals, independents, and people who've never voted." },
    { q: "Is this socialism?", a: "No. Nothing is nationalized. Nothing is government-run. PHIERS is a cooperative marketplace — owned, operated, and accountable to members. Market-efficient. Cost-reducing. Freedom-expanding." },
    { q: "How does this get funded?", a: "By saving money — not spending more. TeleCARE on the ACA exchange becomes a lower-cost option for CMS. No new taxes. No new bureaucracy. Just redirecting waste into solutions that work." },
    { q: "What do I have to give?", a: "Name, email, ZIP code. Used only to verify your district and count you accurately. Nothing else. No spam. No selling." },
    { q: "What happens after I sign?", a: "Three things: (1) Your count joins your district's total. (2) Your representative becomes accountable to your district's documented pressure. (3) When the threshold is reached, you're connected to the accountability event in your district." },
    { q: "What if Congress still refuses?", a: "Then we replace them — peacefully, legally, and at scale. Primary challenges. General elections. District-level mobilization. No violence. No chaos. Just organized civic power." },
    { q: "Why now?", a: "Because waiting makes everything worse. An unauthorized war is burning $1B+ a day. Supply chains are under pressure. Healthcare costs climb with every escalation. The mechanism is built. The math works. The moment is now." },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">Questions people ask.<br /><span className="text-[#3ddc84]">Answers that matter.</span></h1>
          
          <div className="space-y-8 mt-12">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#3ddc84]/20 pb-6">
                <p className="font-condensed font-bold text-white text-lg mb-3">Q: {faq.q}</p>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-[#0a1628] border-l-4 border-[#3ddc84] p-6 my-12 text-center">
            <p className="font-condensed text-lg text-[#ffd60a] font-bold mb-2">3.5% organized = unstoppable change.</p>
            <p className="text-gray-400 mb-4">12 million Americans. That's the line.</p>
            <p className="font-condensed text-lg text-[#3ddc84] font-bold mb-4">Energy without power fails. PHIERStorm is the power.</p>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Link href="/petition" className="px-8 py-4 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">✍ ADD MY NAME</Link>
              <Link href="/organizers" className="px-8 py-4 bg-transparent text-[#3ddc84] border-2 border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">🌊 ORGANIZE YOUR DISTRICT</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
