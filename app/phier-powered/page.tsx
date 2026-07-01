// FILE: app/phier-powered/page.tsx
// VERSION: 1.3.0 — Section reorder (Mission+Impact before Different Missions), conversational subtitle, closing line

'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function PhierPoweredPage() {
  return (
    <div className="relative bg-neutral-100">
      {/* Faint grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] pointer-events-none"></div>

      <div className="relative px-6 md:px-12 lg:px-24 py-16">

        {/* ===== HERO ===== */}
        {/* Improvement 3: Headline before image — gives reader immediate context in first 3–5 seconds */}
        <section className="max-w-4xl mx-auto mb-16">

          <div className="flex justify-center mb-6 md:mb-8">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              width={112}
              height={112}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
              priority
            />
          </div>

          {/* Headline first — before image */}
          <div className="mb-8 md:mb-10">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight mb-3">
              Your Mission.<br />PHIER-Powered.
            </h1>
            <p className="text-xl text-neutral-600">
              Helping organizations accomplish more of the mission they already have.
            </p>
          </div>

          {/* Image after headline */}
          <div className="mb-8 md:mb-12">
            <Image
              src="/images/phier-powered/community-meeting-district-grid.jpg"
              alt="Community meeting with district grid overlay"
              width={960}
              height={540}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="space-y-3 md:space-y-4 text-lg leading-relaxed text-neutral-700 max-w-3xl">
            <p>
              Organizations don't fail because they lack good ideas. They struggle because implementation is difficult.
            </p>
            <p>
              PHIER-Powered Solutions helps organizations turn the priorities they already share into measurable results.
            </p>
            <p className="font-semibold">
              PHIERS isn't an advocacy organization. It's an implementation strategy.
            </p>

            {/* Improvement 5: Proof moment — one sentence, one link */}
            <div className="mt-6 pt-5 border-t border-neutral-300">
              <p className="text-base text-neutral-500">
                Built on 20+ years of work in healthcare coordination, VA modernization, and public systems design.{' '}
                <Link href="/credibility" className="underline hover:text-neutral-700 transition-colors">
                  See the record →
                </Link>
              </p>
            </div>

            <p className="text-3xl md:text-4xl font-semibold text-neutral-800 mt-6 leading-tight">
              Implementation is the missing layer.
              <br />
              PHIER-Powered Solutions provides it.
            </p>
          </div>
        </section>

        {/* ===== YOU DON'T NEED ANOTHER MOVEMENT ===== */}
        {/* Improvement 1: Large H2 — high importance section */}
        <section className="max-w-4xl mx-auto my-16">
          <div className="mb-8">
            <Image
              src="/images/phier-powered/priorities-grid-you-dont-need-another-movement.jpg"
              alt="Grid of shared priorities: healthcare, housing, wages, safety, accountability, opportunity, veterans, education, justice, food security"
              width={960}
              height={540}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">
            You Don't Need Another Movement
          </h2>

          <p className="text-lg leading-relaxed text-neutral-700 mb-4">
            Most organizations already know what they're fighting for.
          </p>

          <div className="text-lg leading-relaxed text-neutral-700 mb-6 font-medium columns-2">
            <p>Affordable healthcare.</p>
            <p>Affordable housing.</p>
            <p>Living wages.</p>
            <p>Safe communities.</p>
            <p>Government accountability.</p>
            <p>Economic opportunity.</p>
            <p>Veterans.</p>
            <p>Education.</p>
            <p>Justice.</p>
            <p>Food security.</p>
          </div>

          <p className="text-lg leading-relaxed text-neutral-700 font-semibold">
            Those aren't the problem. The challenge isn't agreement. It's implementation.
          </p>
        </section>

        {/* ===== STAYS YOURS ===== */}
        {/* Medium H2 */}
        <section className="max-w-4xl mx-auto my-16">
          <div className="mb-8">
            <Image
              src="/images/phier-powered/stays-yours-identity-protection.jpg"
              alt="Identity protection checklist: mission, board, leadership, members, identity, priorities"
              width={960}
              height={540}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-neutral-900">
            We Don't Ask Organizations To Become PHIERS
          </h2>

          <p className="text-lg leading-relaxed text-neutral-700 mb-4">
            We invite them to become <strong>PHIER-Powered</strong>.
          </p>

          <p className="text-lg leading-relaxed text-neutral-700 mb-4">
            Organizations don't become PHIER-Powered because they need a new mission.
            They become PHIER-Powered because they want to accomplish more of the mission they already have.
          </p>

          <p className="text-lg leading-relaxed text-neutral-700 mb-6">
            That means… Your mission stays yours. Your board stays yours. Your leadership stays yours. Your members stay yours. Your identity stays yours. Your priorities stay yours.
          </p>

          <p className="text-lg leading-relaxed text-neutral-700 font-semibold">
            Partnership doesn't change who you are. It changes what becomes possible.
          </p>

          <p className="text-lg leading-relaxed text-neutral-700 mt-4">
            Everything that makes your organization unique stays intact.<br />
            Everything that makes implementation difficult becomes easier.
          </p>
        </section>

        {/* ===== EVERY ORGANIZATION ALREADY HAS STRENGTHS ===== */}
        {/* Medium H2 */}
        <section className="max-w-4xl mx-auto my-16">
          <div className="mb-8">
            <Image
              src="/images/phier-powered/your-strengths-network-diagram.jpg"
              alt="Network diagram showing interconnected strengths: Trust, Relationships, Organizing, Problem Identification, Community Knowledge"
              width={960}
              height={540}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-neutral-900">
            Every Organization Already Has Strengths
          </h2>

          <div className="space-y-3 md:space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>
              You understand your community. You've earned trust. You've built relationships. You've organized people. You've identified important problems.
            </p>
            <p>
              PHIER-Powered Solutions doesn't replace those strengths. It builds upon them.
            </p>
            <p className="font-semibold">
              Your strengths become more powerful when they're connected to shared infrastructure.
            </p>
            {/* Improvement 4: Bridge sentence between Strengths and Shared Infrastructure */}
            <p className="text-neutral-500 italic">
              The question isn't whether organizations have strengths. It's how those strengths become easier to scale.
            </p>
          </div>
        </section>

        {/* ===== WHAT PHIER-POWERED ADDS ===== */}
        {/* Improvement 1: Large H2 — high importance section */}
        <section className="max-w-4xl mx-auto my-16">
          <div className="mb-8">
            <Image
              src="/images/phier-powered/implementation-stack-infrastructure.jpg"
              alt="Implementation infrastructure stack: District Organization, Affordability, Coordination, Shared Services, Accountability, Implementation"
              width={960}
              height={540}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">
            What PHIER-Powered Solutions Adds
          </h2>

          <p className="text-lg leading-relaxed text-neutral-700 mb-6">
            Instead of asking organizations to solve every problem independently…
          </p>

          <p className="text-lg leading-relaxed text-neutral-700 mb-6">
            PHIER-Powered Solutions provides shared implementation capacity.
          </p>

          <div className="space-y-4 md:space-y-6 text-lg leading-relaxed text-neutral-700">
            <div>
              <strong>District Organization</strong><br />
              Building measurable relationships inside every congressional district.
            </div>
            <div>
              <strong>Affordability</strong><br />
              Helping communities reduce healthcare costs and redirect savings toward higher priorities.
            </div>
            <div>
              <strong>Coordination</strong><br />
              Connecting organizations that already serve the same people.
            </div>
            <div>
              <strong>Shared Services</strong><br />
              Reducing duplication while increasing community impact.
            </div>
            <div>
              <strong>Accountability</strong><br />
              Helping organizations communicate constituent priorities in organized, measurable ways.
            </div>
            <div>
              <strong>Implementation</strong><br />
              Turning priorities into repeatable systems.
            </div>
          </div>
        </section>

        {/* ===== SHARED INFRASTRUCTURE NETWORK ===== */}
        {/* Medium H2 */}
        <section className="max-w-4xl mx-auto my-16">
          <div className="mb-8">
            <Image
              src="/images/phier-powered/shared-infrastructure-network.jpg"
              alt="Network diagram showing cities, labor, community organizations, healthcare, veterans, faith communities, and schools connected to shared infrastructure"
              width={960}
              height={540}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-neutral-900">
            Shared Infrastructure
          </h2>

          <p className="text-lg leading-relaxed text-neutral-700 max-w-3xl">
            Different organizations share the same implementation challenges.
            PHIER-Powered Solutions connects them to the shared implementation capacity they need to succeed —
            without changing who they are or what they do.
          </p>
        </section>

        {/* ===== MISSION + PHIER-POWERED = IMPACT ===== */}
        {/* Medium H2 */}
        <section className="max-w-4xl mx-auto my-16">
          <div className="mb-8">
            <Image
              src="/images/phier-powered/mission-plus-phier-powered-equals-impact.jpg"
              alt="Diagram showing Your Mission plus PHIER-Powered Solutions equals Greater Community Impact"
              width={960}
              height={540}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-neutral-900">
            Your Mission + PHIER-Powered Solutions = Greater Community Impact
          </h2>

          <p className="text-lg leading-relaxed text-neutral-700 max-w-3xl">
            When your mission connects with PHIER-Powered infrastructure, the result is measurable, scalable community impact.
          </p>
        </section>

        {/* ===== DIFFERENT MISSIONS ===== */}
        {/* Medium H2 */}
        <section className="max-w-4xl mx-auto my-16">
          <div className="mb-8">
            <Image
              src="/images/phier-powered/sector-grid-shared-infrastructure.jpg"
              alt="Sector grid showing cities, labor unions, community organizations, healthcare, veterans, faith communities, schools connected to shared infrastructure"
              width={960}
              height={540}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-neutral-900">
            Different Missions. Shared Infrastructure.
          </h2>

          <p className="text-lg leading-relaxed text-neutral-700 mb-6">
            Every organization is different. But the implementation challenges are remarkably similar.
          </p>

          <div className="space-y-2 md:space-y-3 text-lg leading-relaxed text-neutral-700 mb-6">
            <p><strong>Cities</strong> — Need affordable public services.</p>
            <p><strong>Labor Unions</strong> — Need stronger member value and organizing capacity.</p>
            <p><strong>Community Organizations</strong> — Need sustainable implementation.</p>
            <p><strong>Healthcare Organizations</strong> — Need affordable delivery models.</p>
            <p><strong>Veterans Organizations</strong> — Need better coordination and navigation.</p>
            <p><strong>Faith Communities</strong> — Need stronger community support systems.</p>
            <p><strong>Schools</strong> — Need healthier students and stronger families.</p>
          </div>

          <p className="text-lg leading-relaxed text-neutral-700 font-semibold">
            Different missions. One implementation framework. Different priorities. One way to make them possible.
          </p>
        </section>

        {/* ===== WHY ORGANIZATIONS BECOME PHIER-POWERED ===== */}
        {/* Medium H2 */}
        <section className="max-w-4xl mx-auto my-16">
          <div className="mb-8">
            <Image
              src="/images/phier-powered/cost-impact-diagram.jpg"
              alt="Cost to impact diagram showing implementation cost reduction and impact increase"
              width={960}
              height={540}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-neutral-900">
            Why Organizations Become PHIER-Powered
          </h2>

          <div className="space-y-3 md:space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>
              Organizations don't partner with PHIERS because they need another cause.
            </p>
            <p>
              They partner because implementation is expensive. Coordination is difficult. Resources are limited. Communities deserve better.
            </p>
            <p className="font-semibold">
              PHIER-Powered Solutions provides a practical framework organizations can adapt to their own mission, leadership, and priorities. It reduces the cost of implementation while increasing the impact of your mission.
            </p>
          </div>
        </section>

        {/* ===== THE GOAL ===== */}
        {/* Improvement 1: Large H2 — closing thesis, high importance */}
        <section className="relative max-w-4xl mx-auto my-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <Image
              src="/images/phier-powered/district-map-background.jpg"
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
            />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">
              The Goal
            </h2>

            <p className="text-lg leading-relaxed text-neutral-700 mb-4 font-semibold">
              Not more organizations. Better outcomes.
            </p>

            <p className="text-lg leading-relaxed text-neutral-700 mb-6">
              PHIER-Powered organizations remain completely independent. They simply gain access to tools, strategies, and shared infrastructure that help them accomplish more of what they already exist to do.
            </p>

            <p className="text-lg leading-relaxed text-neutral-700 mb-8 md:mb-12 font-medium">
              Independence stays intact. Outcomes get stronger.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-neutral-900">
              Ready To Explore What's Possible?
            </h3>

            <div className="space-y-3 md:space-y-4 text-lg leading-relaxed text-neutral-700 mb-8 md:mb-12">
              <p>Implementation is the missing layer. PHIER-Powered Solutions provides it.</p>
              <p>
                Whether you're a nonprofit, a labor union, a veterans organization, a city, a healthcare provider, a faith community, or a neighborhood coalition…
              </p>
              <p className="font-semibold">
                We'd welcome the opportunity to explore what becoming PHIER-Powered could look like for your organization.
              </p>
            </div>

            {/* Improvement 2: CTA hierarchy — one clear primary, one secondary, one tertiary */}
            {/* Primary: Review the System (most useful next step for an evaluating organization) */}
            {/* Secondary: Explore Organizers Guide */}
            {/* Tertiary: See the Evidence */}
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Link
                href="/the-system"
                className="block w-full text-center bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-semibold min-h-[52px] flex items-center justify-center"
              >
                Review the PHIER-Powered System →
              </Link>
              <Link
                href="/organizers"
                className="block w-full text-center border border-black py-3 rounded-lg hover:bg-black hover:text-white transition-colors text-base font-medium min-h-[48px] flex items-center justify-center"
              >
                Explore the Organizers Guide →
              </Link>
              <Link
                href="/credibility"
                className="block w-full text-center text-neutral-500 hover:text-neutral-800 transition-colors py-2 text-base underline min-h-[44px] flex items-center justify-center"
              >
                See Why Organizations Trust PHIERS →
              </Link>
            </div>

            <p className="text-center text-neutral-500 text-base mt-6 italic">
              Different missions. Shared infrastructure. Better outcomes.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}

// FILE: app/phier-powered/page.tsx
// VERSION: 1.3.0
