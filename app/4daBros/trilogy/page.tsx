// FILE: app/4daBros/trilogy/page.tsx (or app/4daBros/page.tsx)
// Dark theme, hero image, historical images, VRA callout, diagram, rebirth collage, grid acronym

import Image from 'next/image'
import Link from 'next/link'

export default function TrilogyLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0]">
      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <img
          src="/images/trilogy/trilogy-hero.jpg"
          alt="Black man in quiet dignity"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-10 left-6 md:left-12 text-white">
          <p className="text-sm tracking-wide uppercase opacity-80">4daBros · A Private Space</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">Dear Black Man</h1>
          <p className="text-lg md:text-xl opacity-90 mt-2">The system isn’t broken. It’s been unbuilt.</p>
        </div>
      </div>

      {/* Main content container */}
      <div className="max-w-[800px] mx-auto px-5 py-12 md:py-16">

        {/* ===== ENTRYWAY LETTER ===== */}
        <div className="space-y-6 text-[#e0e0e0] text-lg leading-relaxed">

          <p>Bills keep coming.<br />Pressure keeps building.<br />Life doesn’t slow down for us.</p>

          <p>And a lot of us are carrying all of that while being told we’re the problem at the same time.</p>

          <p>We live in a country where Black men are too often treated like a threat before we’re ever seen as human beings trying to survive, provide, think, build, protect, and love our people.</p>

          <p>That weight is real.</p>

          <p>And after a while, if nobody reminds you who you are, you can start forgetting it yourself.</p>

          <p>But here’s the truth:</p>

          <p>We have always carried more than people gave us credit for.</p>

          {/* Image: Tuskegee Airmen */}
          <div className="my-6">
            <img
              src="/images/trilogy/tuskegee.jpg"
              alt="Tuskegee Airmen"
              className="w-full md:w-1/3 float-left mr-6 mb-4 rounded-lg"
            />
            <p>From the Tuskegee Airmen… to the 761st Tank Battalion… to Black Wall Streets like Greenwood that rose from nothing—<br />Black men have stepped into some of the darkest moments in modern history and still performed at the highest levels under pressure.</p>
            <div className="clear-both"></div>
          </div>

          <p>Not because America loved us.<br />Not because we were treated fairly.<br />But because when everything around us became unstable…</p>

          <p>we still found a way to adapt, solve, build, and overcome.</p>

          <p>That matters right now.</p>

          <p>Because the world is unstable again.</p>

          {/* VRA Callout Block */}
          <div className="bg-neutral-900 border-l-4 border-yellow-500 p-6 md:p-8 my-10 rounded-r-lg">
            <img
              src="/images/trilogy/vra-collapse.jpg"
              alt="Voting Rights Act collapse"
              className="w-full mb-4 rounded"
            />
            <p className="text-neutral-200 text-lg leading-relaxed">
              The Voting Rights Act — the law that once forced fairness in elections — has been gutted to the point where it can no longer reliably protect people from discriminatory maps or political manipulation. That means districts can be reshaped faster than protections can respond. Representation can be engineered instead of earned. The rules that once created guardrails are no longer functioning the same way. This is not theoretical. This is happening right now. And both parties are responding the only way they know how — by trying to win inside the new imbalance instead of fixing it.
            </p>
          </div>

          <p>That is the opening.</p>

          <p>Because when the guardrails disappear, what fills the gap is not justice.</p>

          <p>It’s leverage.</p>

          <p>And maybe that’s the part nobody saw coming:</p>

          <p>That Black men — the very people so often stereotyped, dismissed, criminalized, fragmented, and pushed to the margins — might be the ones who identified a structural answer to a problem neither party has been able to solve.</p>

          <p>Not through violence.<br />Not through chaos.<br />Not through begging somebody to save us.</p>

          <p>Through organization.<br />Through coordination.<br />Through leverage.</p>

          <p className="font-bold text-white">That is what PHIERS is.<br />Power Held In Every Representative’s Seat.</p>

          <p>PHIERS is built around one core realization:</p>

          <p>The problem is not that ordinary people have no voice.<br />The problem is that our voices are scattered.</p>

          <p>Scattered voices are easy to ignore.<br />Organized voices change outcomes.</p>

          {/* Fifteen Hundred Diagram + list */}
          <div className="my-12 grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/trilogy/1500-diagram.png"
              alt="1,500 signatures per district diagram"
              className="w-full rounded"
            />
            <ul className="space-y-3 text-lg">
              <li>✓ force meetings</li>
              <li>✓ force town halls</li>
              <li>✓ shape primaries</li>
              <li>✓ pressure media narratives</li>
              <li>✓ create accountability</li>
              <li>✓ make independents viable</li>
            </ul>
          </div>

          <p>District by district.<br />Seat by seat.<br />Across the entire country.</p>

          <p>And at a moment when voting protections are being stripped away and district maps are being aggressively reshaped across America…</p>

          <p>that kind of organized leverage matters more than ever.</p>

          <p>Because the parties are fighting over the map.<br />PHIERS is organizing the people on it.</p>

          <p>This is bigger than left versus right.</p>

          <p>This is about whether ordinary people still have meaningful influence over the systems governing their lives.</p>

          <p>And if enough people move together — they do.</p>

          <p>But there’s another layer to this too.</p>

          {/* Rebirth Collage */}
          <div className="my-12 grid md:grid-cols-3 gap-4">
            <img src="/images/trilogy/rebirth1.jpg" alt="Greenwood before 1921" className="rounded" />
            <img src="/images/trilogy/rebirth2.jpg" alt="Modern Black entrepreneur" className="rounded" />
            <img src="/images/trilogy/rebirth3.jpg" alt="Rural white working-class family" className="rounded" />
          </div>

          <p>Because if Black men help build a solution capable of fixing our healthcare system and helping America to manage its rebirth — as we rise from the ashes to rebuild yet again, as we have every time they erased a pillar of Black excellence — in Greenwood, and other Black Wall Streets across the nation…</p>

          <p>Now it’s time to do it again, this time with poor whites as allies, instead of enemies.</p>

          <p>This is how we can win the new Civil War — starting by responding to the gutting of the Voting Rights Act with a viable solution that can make things better, not worse. Because our solutions will bring everybody together around one simple thing:</p>

          <p className="font-bold text-white text-xl">Fifteen Hundred is what it takes to make Congress responsive to We the People’s needs.</p>

          <p>…then the world will be forced to see us differently.</p>

          <p>Not through stereotypes.<br />Not through fear.<br />Not through propaganda.</p>

          <p>Through contribution.<br />Through discipline.<br />Through leadership.<br />Through solutions.</p>

          <p>Not because we screamed the loudest.<br />Because we solved something nobody else could figure out how to solve.</p>

          <p>And maybe that changes something inside us too.</p>

          <p>Maybe it reminds Black men who we’ve always been underneath all the pressure, division, noise, and conditioning.</p>

          <p>Capable.<br />Strategic.<br />Resilient.<br />Builders.<br />Problem solvers.</p>

          <p>Same thing we’ve always done.</p>

          <p>We adapt.<br />We solve.<br />We build.<br />We overcome.</p>

          <p className="font-bold text-2xl text-white mt-8">Welcome to the Trilogy.<br />Welcome to PHIERS.</p>
        </div>

        {/* Trilogy Buttons (3, stronger) */}
        <div className="grid md:grid-cols-3 gap-6 my-16">
          <Link
            href="/4daBros/unforgettable"
            className="bg-white text-black font-semibold py-4 rounded-lg shadow-md hover:shadow-lg transition text-center"
          >
            UNFORGETTABLE
          </Link>
          <Link
            href="/4daBros/unbreakable"
            className="bg-white text-black font-semibold py-4 rounded-lg shadow-md hover:shadow-lg transition text-center"
          >
            UNBREAKABLE
          </Link>
          <Link
            href="/4daBros/unstoppable"
            className="bg-white text-black font-semibold py-4 rounded-lg shadow-md hover:shadow-lg transition text-center"
          >
            UNSTOPPABLE
          </Link>
        </div>

        {/* Leverage Button (yellow, prominent) */}
        <div className="my-8 text-center">
          <Link
            href="/4daBros/leverage"
            className="inline-block bg-[#F5C542] text-black font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(245,197,66,0.35)] hover:shadow-[0_0_30px_rgba(245,197,66,0.5)] transition text-lg"
          >
            LEVERAGE · How 1,500 Signatures Work
          </Link>
        </div>

        {/* PHIERS Acronym Grid */}
        <div className="grid md:grid-cols-3 gap-6 my-20 text-center">
          <div className="p-4 bg-neutral-900 rounded-lg">
            <p className="font-bold text-white">P — Persevering</p>
            <p className="text-sm text-gray-400">We keep going even when the world expects us not to.</p>
          </div>
          <div className="p-4 bg-neutral-900 rounded-lg">
            <p className="font-bold text-white">H — Holistic</p>
            <p className="text-sm text-gray-400">We heal the whole person, the whole community, the whole society.</p>
          </div>
          <div className="p-4 bg-neutral-900 rounded-lg">
            <p className="font-bold text-white">I — Innovative</p>
            <p className="text-sm text-gray-400">We create answers where none were offered.</p>
          </div>
          <div className="p-4 bg-neutral-900 rounded-lg">
            <p className="font-bold text-white">E — Enduring</p>
            <p className="text-sm text-gray-400">We remain after what was meant to remove us.</p>
          </div>
          <div className="p-4 bg-neutral-900 rounded-lg">
            <p className="font-bold text-white">R — Resilient</p>
            <p className="text-sm text-gray-400">We bend, but we do not break.</p>
          </div>
          <div className="p-4 bg-neutral-900 rounded-lg">
            <p className="font-bold text-white">S — Steadfast</p>
            <p className="text-sm text-gray-400">We do not lose ourselves while moving through the storm.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          This space is for us. Move through it with the same dignity you deserve.
        </div>
      </div>
    </div>
  )
}