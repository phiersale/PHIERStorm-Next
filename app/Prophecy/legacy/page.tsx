// FILE: app/4daBros/legacy/page.tsx
// VERSION: 1.0.0 – The receipts: Tuskegee, 761st, liberators, and why we are essential

import Image from 'next/image'
import Link from 'next/link'

export default function LegacyPage() {
  return (
    <div className="min-h-screen bg-[#050b19] text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">

        <div className="mb-6">
          <Image src="/images/PHIERS_Logo.png" alt="PHIERS" width={120} height={120} className="w-16 h-auto opacity-80" />
        </div>

        <div className="mb-8">
          <Link href="/4daBros/trilogy" className="text-gray-500 text-sm underline hover:text-gray-300">← Back to Trilogy</Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">Legacy of Excellence</h1>
        <p className="text-green text-xl mb-8">The receipts that prove we are essential to the survival of nations.</p>

        <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Tuskegee Airmen – 332nd Fighter Group</h2>
            <p>Over 15,000 combat missions. They escorted bombers deep into Nazi‑controlled Europe – over Berlin, over Romania, over the most dangerous airspace in the war. They never lost a single bomber they were escorting to enemy fighters. Not one. While other escort groups were being torn apart, the Red Tails held the line.</p>
            <p className="mt-2">They destroyed the Daimler‑Benz tank factories. They took out the oil refineries that fueled Hitler’s armies. Black men are part of the reason Hitler started losing the war.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">761st Tank Battalion – The Original Black Panthers</h2>
            <p>The first Black armored unit to see combat. They fought through six European countries. They liberated Gunskirchen concentration camp in Austria. Black men opened those gates. Black men were among the first faces Jewish survivors saw as free people.</p>
            <p className="mt-2">Then those same men came home to a country that still wouldn’t let them vote.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Liberators of Israel</h2>
            <p>Many of the Jews who went on to form the state of Israel owe their lives to Black American soldiers who risked everything to free them from concentration camps. That debt has never been acknowledged at the level it deserves.</p>
            <p className="text-green font-bold mt-2">We are good at what we do. And we can end current wars too – by gaining control over Congress.</p>
          </div>

          <div className="bg-[#0a1628] p-6 rounded-xl my-8">
            <p className="text-white text-xl font-bold">This legacy is not ancient history.<br />It is a blueprint for what we can do again – right now.</p>
            <p className="mt-4">The same excellence that defeated Hitler can end today’s unauthorized wars, stop invasions, and force accountability from a corrupt Congress. The tool is PHIERS. The lever is 1,500 signatures per district.</p>
            <div className="mt-6">
              <Link href="/4daBros/leverage" className="text-green underline font-semibold">See how the lever works →</Link>
            </div>
          </div>

          <p className="text-white text-center text-xl font-bold mt-8">We are inferior to no one. And the world is about to remember why they need us.</p>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-10 text-center text-gray-500 text-sm">
          <p>Built on PHIERS — Persevering. Hopeful. Innovative. Enduring. Resilient. Steady under pressure.</p>
          <p className="mt-2"><a href="https://phiers.org" className="hover:text-white transition">Go to PHIERS.org →</a></p>
        </div>
      </div>
    </div>
  )
}

// FILE: app/4daBros/legacy/page.tsx