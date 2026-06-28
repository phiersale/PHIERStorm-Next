// FILE: app/mamdani/page.tsx
// VERSION: 1.0 — Pattern recognition: documented the model before the validation

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function MamdaniPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/PHIERS_Logo_BW.png"
              alt="PHIERS"
              width={48}
              height={48}
              className="w-10 h-auto md:w-12 opacity-70 hover:opacity-90 transition"
              priority
            />
          </Link>
          <Link href="/credibility" className="text-gray-400 text-xs sm:text-sm hover:text-white transition whitespace-nowrap">
            ← Back to Credibility
          </Link>
        </div>
      </div>

      <div className="sticky-header-offset max-w-3xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            We Said This Before It Was Proven
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Documented. Dated. Public. Before the partnerships caught up to it.
          </p>
        </div>

        <div className="bg-green/5 border border-green/20 rounded-lg p-6 mb-10">
          <p className="text-green-400 text-sm font-semibold mb-2">December 27, 2025</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Before Mark Cuban's Cost Plus Drugs partnered with TrumpRx. Before affordability became the defining issue of New York's mayoral race. We posted a video laying out the same core mechanism PHIERS has documented for over a decade: telehealth as primary coverage for the 80% who don't need hospitalization, non-profit drug purchasing without markups or middlemen, and the savings redirected toward the priorities people actually voted for.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mt-3">
            Since then, the gap has only widened. Average marketplace premiums climbed to roughly $9,000 a year for an individual in 2026 — a 21% jump in a single year — while average family premiums through employer coverage are now approaching $27,000 a year. The $600-a-year telehealth comparison isn't holding steady against a stable baseline. The baseline keeps climbing, which makes the model more valuable every year Congress doesn't act, not less.
          </p>
        </div>

        <div className="bg-green/5 border border-green/20 rounded-lg p-6 mb-10">
          <p className="text-green-400 text-sm font-semibold mb-2">January 16, 2026</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            At the time this video posted, Mamdani's affordability agenda was still proposals — tax increases on the wealthy, expanded benefits, a rent freeze that doesn't take effect until next year. Real commitments, but ones that require legislation, implementation timelines, and political fights still ahead. We laid out how PHIERS funds the same outcomes — affordability, relief, redirected savings — now, without waiting on any of that to pass.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/VdeniYs1QsQ"
              title="Funding Mamdani's Agenda for a Stronger Future (a National strategy)"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green mb-3">What We Actually Said</h2>
          <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
            <p>Telehealth at $600 a year instead of roughly $8,000 for traditional coverage — for the large majority of people who don't need hospitalization or specialty care.</p>
            <p>Non-profit prescription purchasing, the same model Mark Cuban's Cost Plus Drugs proved works at scale, without markup or middlemen.</p>
            <p>Savings redirected toward what constituents are actually asking for — affordability, transportation, housing — instead of disappearing into profit margins.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green mb-3">Why the Timing Matters</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Mamdani's affordability agenda is real, and it's the right fight. But most of what it promises takes time to build — new housing, new transit infrastructure, new public systems take years to stand up, even with full political will behind them.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Congress can act on what we're proposing immediately. Telehealth reclassification and non-profit drug purchasing don't require new construction or new agencies — they require Congress to stop protecting the markup. That's a faster lever, sitting right alongside the longer-term work, not a replacement for it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green mb-3">Sacramento DSA</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            The Sacramento DSA chapter held a meeting at our workplace, and we sat in. Afterward, we walked them through this model directly. They asked sharp, serious questions — about public banking, about governance, about who actually benefits — and we answered them honestly. We don't agree with every position in DSA's platform, and we don't expect them to agree with every position of ours. What we share is a real, specific overlap: strengthening the USPS, including its historical role in postal banking, and building economic infrastructure that doesn't depend on extracting profit from people who have the least room to absorb it. They're now looking into PHIERS further on their own.
          </p>
        </section>

        <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-6 mb-10">
          <p className="text-amber-400 text-sm font-semibold mb-2">What we're not claiming</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            We're not claiming PHIERS can fund any single politician's entire platform, in New York or anywhere else. Savings at the scale we're describing depend on participation reaching real numbers first — they're not a blank check sitting somewhere waiting to be spent. What we are saying is that the mechanism is sound, it's documented years before the partnerships that have since validated pieces of it, and it's available to any city, county, or state serious about affordability now, not eventually.
          </p>
        </div>

        <div className="text-center pt-6 border-t border-gray-800">
          <Link href="/credibility" className="text-green hover:underline font-semibold">
            See the Full Record →
          </Link>
        </div>
      </div>
    </div>
  );
}

// FILE: app/mamdani/page.tsx