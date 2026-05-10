// FILE: app/4daBros/unforgettable/page.tsx
// VERSION: 2.0.0 – Historical pride + leverage explanation + call to action

import Image from 'next/image'
import Link from 'next/link'

export default function UnforgettablePage() {
  return (
    <div className="min-h-screen bg-[#050b19] text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">

        {/* Glowing PHIERS Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-60 animate-pulse"></div>
            <Image src="/images/PHIERS_Logo.png" alt="PHIERS" width={120} height={120} className="w-16 h-auto relative z-10" />
          </div>
        </div>

        <div className="mb-8">
          <Link href="/4daBros/trilogy" className="text-gray-500 text-sm underline hover:text-gray-300">← Back to Trilogy</Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">UNFORGETTABLE</h1>

        {/* INTRO – REASON FOR HOPE */}
        <p className="text-green text-xl font-semibold mb-6">Black man, this page will give you a reason to be more hopeful for the future, when all seems dark and you feel lost.</p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">This is more than a feeling. It is a proven method that will change the way the world sees Black men, from this day forward.<br />That should be enough to raise your spirits — because all is not lost.</p>

        {/* HISTORICAL PROOF – PRIDE SECTION */}
        <h2 className="text-2xl font-semibold mb-4 mt-10">What follows is the proof</h2>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
          <p><span className="font-bold text-green">Unforgettable:</span> The Tuskegee Airmen, the original Black Panthers (761st Tank Battalion), and many other Black soldiers – men and women – served valiantly and impacted the outcome of the war in ways that put to shame their less melanated counterparts.</p>
          <p>For this, we can feel <span className="font-bold text-white">proud</span>.</p>
          <p>In addition to playing a major role in the defeat of Hitler, and liberating many of the Jews who went on to form the state of Israel… <span className="text-green">they owe us their lives</span>. Israel wouldn’t exist but for Black excellence in the skies, on land, and sea.</p>
          <p>We are good at what we do. And we can end current wars too – by gaining control over Congress.</p>
        </div>

        <Image src="/images/trilogy/unforgettable-1.jpg" alt="Tuskegee Airmen / Black excellence" width={800} height={500} className="w-full h-auto rounded-2xl my-10" />

        {/* LEVERAGE EXPLANATION */}
        <h2 className="text-2xl font-semibold mb-4">The Plan – Leverage over Congress</h2>
        <div className="space-y-5 text-gray-300 text-lg leading-relaxed mb-10">
          <p>It’s no secret that the ONLY reason the nation is headed the way it is, is because Congress isn’t doing its job. We can change that.</p>
          <p>To get leverage over Congress, you hold them accountable for NOT trying to kill you. To make that happen, hold them accountable for ending the war. To end the war, you need leverage over Congress. To restore and protect Voting Rights, you need the same.</p>
          <p><span className="text-green font-semibold">PHIERS delivers that.</span> Power Held In Every Representative’s Seat.</p>
          <p>This plan can end the wars by making Congress do its job under threat of investigations for corruption and violating the trust of constituents – resulting in their resignation in the near term. End the war, impeach crooked politicians who refuse to step aside immediately.</p>
          <p>We can end the wars, assess the damage, and chart a path to a future that won’t be as bad as it will be if the masses don’t follow our lead.</p>
        </div>

        <Image src="/images/trilogy/unforgettable-2.jpg" alt="Black soldiers / historical legacy" width={800} height={500} className="w-full h-auto rounded-2xl my-10" />

        {/* WHY BLACK MEN SHOULD WALK TALL */}
        <div className="bg-[#0a1628] p-6 rounded-xl my-10">
          <p className="text-white text-xl font-bold mb-3">This should give you, FBA man, a reason to be more hopeful for the future than you’ve been in a really long while.</p>
          <p className="text-gray-300 text-lg leading-relaxed">Because the world will soon know we are essential to their well-being – which means they have to either protect and respect us, or we all perish.</p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">This plan will restore and protect our vote. War is being escalated despite everyone in the world agreeing it’s wrong and wanting it to stop. To make it stop, we have to have leverage over Congress. To get leverage, we need to be able to outperform them – to justify our decisions over their constituents.</p>
          <p className="text-green text-xl font-bold mt-6">That’s what PHIERS is about: Power Held In Every Representative’s Seat.</p>
        </div>

        <Image src="/images/trilogy/unforgettable-3.jpg" alt="Modern Black men organizing" width={800} height={500} className="w-full h-auto rounded-2xl my-10" />

        {/* CLOSING CALL – PETITION + PROOF */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
          <p>Once we get control over Congress, we can make them end the wars, restore voting protections, and prevent ICE violence from spreading and eventually targeting FBA and other melanated groups in the US.</p>
          <p>We can get all this – and more – when enough people sign the petition at PHIERS.org.</p>
          <p><span className="text-green font-bold">If enough Black men sign the petition first, we will control the agenda… and have tremendous say over Congress.</span></p>
          <p>The plan has been vetted, is evidence‑based, verifiably true, and legitimized by some of the best.</p>
          <p>If you agree that this plan makes sense, please sign the petition and spread the word.</p>
          <p className="text-white">And as proof that we were ahead of the curve regarding the wars and what’s coming next – something that WE can stop, that the world will appreciate and benefit from – once our plan goes live, in addition to ending the wars, we can get the Strait of Hormuz open without further escalation and humiliation for the US.</p>
          <p>This plan can result in the US leading the impeachment effort against the current administration.</p>
          <p>Check it out. If you have questions, let’s have our own town hall to answer anything you may have.</p>
        </div>

        {/* BUTTONS: LEVERAGE (primary) + other pages */}
        <div className="border-t border-gray-800 mt-16 pt-10 text-center">
          <div className="flex flex-col items-center gap-3">
            <Link href="/4daBros/leverage" className="inline-block bg-green-600 text-white font-semibold px-8 py-2 rounded-lg hover:bg-green-700 transition text-base">
              👉 LEVERAGE – Sign the Petition
            </Link>
            <Link href="/4daBros/unbreakable" className="inline-block bg-gray-700 text-white font-semibold px-5 py-1 rounded-lg hover:bg-gray-600 transition text-sm">Unbreakable</Link>
            <Link href="/4daBros/unstoppable" className="inline-block bg-gray-700 text-white font-semibold px-5 py-1 rounded-lg hover:bg-gray-600 transition text-sm">Unstoppable</Link>
            <Link href="/4daBros/legacy" className="inline-block bg-gray-700 text-white font-semibold px-5 py-1 rounded-lg hover:bg-gray-600 transition text-sm">Legacy – Full Receipts</Link>
          </div>
          <div className="mt-6">
            <a href="https://phiers.org/petition" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              ✍ Sign the Petition at PHIERS.org
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-10 text-center text-gray-400 text-sm">
          <p>We are inferior to no one. Join us.</p>
        </div>
      </div>
    </div>
  )
}

// FILE: app/4daBros/unforgettable/page.tsx