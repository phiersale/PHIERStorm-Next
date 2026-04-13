// FILE: app/faq/page.tsx
// FAQ PAGE - Complete with design system

'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import StatBlock from '@/components/StatBlock'

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
      <main>
        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Questions people ask.<br /><span className="text-green">Answers that matter.</span></h1>
        </section>

        <hr className="border-green/20" />

        {/* Math Video */}
        <section className="container section text-center">
          <div className="video-container mx-auto">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/jMU6LKEBzbs?rel=0"
                title="The Math Behind the Answers — Cascade Mechanism"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="bg-bg-card p-4 border-x border-b border-green/20 rounded-b-xl text-center">
              <div className="font-display text-xl text-green mb-1">🎥 The Math Behind the Answers</div>
              <div className="font-condensed text-gray-400 text-sm">Why Congress can't ignore organized people — and what happens when pressure builds.</div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* FAQ List */}
        <section className="container section">
          <div className="space-y-6 max-w-[700px] mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-green/20 pb-5">
                <p className="font-condensed font-bold text-white text-lg mb-2">Q: {faq.q}</p>
                <p className="text-body">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-green/20" />

        {/* 3.5% Diagram */}
        <section className="container section text-center">
          <div className="max-w-[300px] mx-auto">
            <Image
              src="/images/3.5pct_Erica_Chenoweth.jpg"
              alt="3.5% — Chenoweth Research"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg border border-white/10"
            />
          </div>
          
          <div className="max-w-[500px] mx-auto my-4">
            <Image
              src="/images/80-20_Healthcare_Model_-PHIERS_v_Insurance_Cost.jpg"
              alt="TeleCARE pays for itself — PHIERS vs Insurance Cost"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="bg-bg-dark border-l-4 border-green p-6 max-w-[600px] mx-auto">
            <p className="font-condensed text-lg text-gold font-bold mb-2">3.5% organized = unstoppable change.</p>
            <p className="text-body mb-3">12 million Americans. That's the line.</p>
            <p className="font-condensed text-lg text-green font-bold mb-4">Energy without power fails. PHIERStorm is the power.</p>
            
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button href="/petition" variant="primary" fullWidth>✍ ADD MY NAME</Button>
              <Button href="/organizers" variant="secondary" fullWidth>🌊 ORGANIZE YOUR DISTRICT</Button>
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
