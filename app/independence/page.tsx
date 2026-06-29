// FILE: app/independence/page.tsx
// VERSION: 1.0 — July 4th: real independence, real accountability, real rebuild

'use client';

import Link from 'next/link';

export default function IndependencePage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <Link href="/home" className="text-gray-500 text-xs sm:text-sm hover:text-white transition">
            ← PHIERS.org
          </Link>
          <span className="text-amber-400/70 text-xs tracking-widest uppercase">July 4, 2026</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">

        {/* HERO */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            250 years of independence
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Independence was never finished.<br />
            <span className="text-green-400">It's a fight every generation has to win again.</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            This year, that fight has a name: an unauthorized war draining the country dry,
            a president who told Americans to their face he doesn't think about their financial
            situation, and the receipts to prove where the money actually went.
          </p>
        </div>

        {/* SECTION 1: THE WAR */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-green-400 mb-4">An unauthorized war, with a real cost</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Since February 2026, the United States and Israel have been at war with Iran without
            a single congressional vote authorizing it. A formal impeachment resolution — H.Res.537 —
            calls it exactly that: a war started in violation of the Constitution's War Powers Clause.
            Multiple sitting members of Congress have said so publicly. One filed formal articles of impeachment.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Whatever you believe about the war's justification, the bill has already arrived for every
            American household. Iran's blockade of the Strait of Hormuz choked off a fifth of the world's
            oil supply. Gas prices climbed past $4.49 a gallon. Inflation hit its highest level in three years.
          </p>
          <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-5">
            <p className="text-gray-200 leading-relaxed">
              Asked directly about it, on camera, the president said:
              <span className="text-white font-semibold"> "I love the inflation."</span> Two weeks earlier:
              <span className="text-white font-semibold"> "I don't think about Americans' financial situation."</span>
            </p>
          </div>
        </section>

        {/* SECTION 2: THE MONEY */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-green-400 mb-4">While the bill comes due, someone is getting richer</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The president's net worth has nearly tripled in his second term, reaching an estimated
            $6.5 billion. Congressional oversight has tracked over $2 billion in realized profits from
            foreign payments alone — a figure that climbs past $9 billion counting digital assets.
          </p>
          <p className="text-gray-300 leading-relaxed">
            A former member of his own administration has publicly alleged a specific $400 million
            trading pattern tied to market activity in the hour before a major Iran announcement.
            This isn't speculation about motive. It's documented, on the record, by people who were in the room.
          </p>
        </section>

        {/* SECTION 3: THE PEOPLE PAYING */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-green-400 mb-4">This isn't what anyone voted for</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Homelessness criminalized instead of housed. Public health and safety gutted while
            premiums climb past $9,000 a year for a single person. Working families falling behind
            on credit card bills while gas alone eats $400 a year more than it did last summer.
          </p>
          <p className="text-gray-300 leading-relaxed">
            None of that is a side effect nobody could have predicted. It's the predictable result of
            a government answering to donors and markets instead of the people who elected it.
          </p>
        </section>

        {/* SECTION 4: PHIERSWORKS */}
        <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-8 mb-14">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What comes after accountability
          </p>
          <h2 className="text-2xl font-bold mb-4">Introducing PHIERSWorks</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Accountability isn't the finish line — it's what clears the way to actually rebuild.
            PHIERSWorks is the jobs, safety net, and marketplace infrastructure PHIERS has been
            building toward: connecting people to verified employment and training, strengthening
            the safety net for families who've been falling through it, and a cooperative marketplace
            that keeps savings with the people who need them instead of the middlemen who don't.
          </p>
          <p className="text-gray-300 leading-relaxed">
            It's built for anyone who wants to help rebuild — whether you're out of work, underpaid,
            watching your community's hospital close, or just done watching the bill get handed to
            everyone except the people sending it.
          </p>
        </div>

        {/* CLOSING */}
        <section className="text-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            250 years ago, independence meant refusing to keep paying for a government that didn't
            answer to the people it governed. That fight isn't finished. It's due again — this year,
            in your district.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.open('https://phiers.abacusai.app/petition/fifteen-hundred', '_blank')}
              className="px-8 py-4 rounded-lg font-bold text-base transition"
              style={{
                backgroundColor: '#F5C542',
                color: '#1a1a1a',
                boxShadow: '0 0 24px rgba(245,197,66,0.3)'
              }}
            >
              ✍ Sign the Petition
            </button>
            <Link
              href="/home"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Explore PHIERS →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

// FILE: app/independence/page.tsx