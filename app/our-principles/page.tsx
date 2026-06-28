// FILE: app/our-principles/page.tsx
// VERSION: 1.0 — Seven Cooperative Principles, formal commitment at launch

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function OurPrinciplesPage() {
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

      <div className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            The Seven Cooperative Principles
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            22 years of identifying as a cooperative. Now we're stating it formally, in writing, before launch.
          </p>
        </div>

        <div className="bg-green/5 border border-green/20 rounded-lg p-6 mb-10">
          <p className="text-green-400 text-sm font-semibold mb-2">A documented record, not a new claim</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            As far back as 2014, PHIERS.org described itself publicly as a <strong className="text-white">cooperative venture</strong> and a <strong className="text-white">collaborative organization</strong> — language preserved in the Internet Archive's Wayback Machine. The site also linked directly to Cooperative Development Services, whose own materials point to the International Co-operative Alliance's principles as the standard that guides co-op practice.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mt-3">
            We have not formally launched. For 22 years we have been documenting who we are and how we think, without backing away from anything we've claimed. Before launch, we're putting these principles in writing — not as something new, but as proof that we're launching with the same values we started with.
          </p>
        </div>

        <div className="space-y-6">
          <div className="border border-gray-800 rounded-lg p-5">
            <h2 className="text-green font-bold text-lg mb-2">1. Voluntary and Open Membership</h2>
            <p className="text-gray-300 text-sm leading-relaxed">Open to anyone able to use our services and willing to accept the responsibilities of membership — without discrimination of any kind.</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-5">
            <h2 className="text-green font-bold text-lg mb-2">2. Democratic Member Control</h2>
            <p className="text-gray-300 text-sm leading-relaxed">Members set policy and make decisions. One member, one vote.</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-5">
            <h2 className="text-green font-bold text-lg mb-2">3. Members' Economic Participation</h2>
            <p className="text-gray-300 text-sm leading-relaxed">Members contribute to and democratically control the cooperative's capital. Surplus benefits members, strengthens the cooperative, and supports activities the membership approves.</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-5">
            <h2 className="text-green font-bold text-lg mb-2">4. Autonomy and Independence</h2>
            <p className="text-gray-300 text-sm leading-relaxed">Self-help, member-controlled. Any outside agreement — government or otherwise — is entered into on terms that preserve democratic control and our independence.</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-5">
            <h2 className="text-green font-bold text-lg mb-2">5. Education, Training, and Information</h2>
            <p className="text-gray-300 text-sm leading-relaxed">Members, representatives, and the public deserve to understand how this works and why — not just what to do.</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-5">
            <h2 className="text-green font-bold text-lg mb-2">6. Cooperation Among Cooperatives</h2>
            <p className="text-gray-300 text-sm leading-relaxed">We strengthen the broader cooperative movement by working with other cooperatives at every level — local to international.</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-5">
            <h2 className="text-green font-bold text-lg mb-2">7. Concern for Community</h2>
            <p className="text-gray-300 text-sm leading-relaxed">We work for the sustainable development of our communities, through policies our membership approves.</p>
          </div>
        </div>

        <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-6 mt-10">
          <p className="text-amber-400 text-sm font-semibold mb-2">Still being formalized</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Principles 2 and 3 specifically depend on governance structures — bylaws, voting mechanisms, capital control — that are being built out as PHIERS approaches launch. We're naming the standard now, in writing, before claiming to have fully met it. That's the same integrity standard we're asking Congress to meet.
          </p>
        </div>

        <div className="text-center mt-10 pt-6 border-t border-gray-800">
          <p className="text-gray-300 text-sm mb-4">Want to help build this? Tell us in the survey.</p>
          <Link href="/credibility" className="text-green hover:underline font-semibold">
            Back to Credibility →
          </Link>
        </div>
      </div>
    </div>
  );
}

// FILE: app/our-principles/page.tsx