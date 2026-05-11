// FILE: app/Prophecy/unforgettable/page.tsx
// VERSION: 2.0.0
// The Pattern – convict leasing, redlining, GI Bill, VRA

'use client';

import ImageThumbnail from '../components/ImageThumbnail';
import Accordion from '../components/Accordion';
import StatCard from '../components/StatCard';
import PullQuote from '../components/PullQuote';
import CTASection from '../components/CTASection';
import Link from 'next/link';

export default function UnforgettablePage() {
  return (
    <div className="relative min-h-screen bg-white text-black">
      {/* PHIERS Logo */}
      <div className="absolute top-4 left-4 z-20 md:top-6 md:left-6">
        <a href="https://phiers.org" target="_blank" rel="noopener noreferrer">
          <img src="/images/PHIERS_Logo_BW.png" alt="PHIERS" className="w-16 h-auto md:w-20 opacity-80 hover:opacity-100 transition" />
        </a>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Hero Section – thumbnail + hook */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
          <ImageThumbnail
            src="/images/trilogy/unforgettable-1.jpg"
            alt="Reflective Black man, looking out window or into mirror"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              What you are living through is not random.<br />
              It's not bad luck. It's not a character flaw. It's not something you brought on yourself.<br />
              It's a structure. And it's been running for a long time.
            </p>
          </div>
        </div>

        <StatCard>
          Too many Black boys met the prison system<br />
          before they ever met an opportunity.
        </StatCard>

        {/* SECTION 1 – CONVICT LEASING */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail
            src="/images/trilogy/convict_leasing.jpg"
            alt="Convict leasing – chain gang, post‑emancipation South"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">Slavery ended on paper in 1865.<br />The labor never stopped.</p>
            <Accordion triggerLabel="▼ The full story">
              <p>
                In most Southern states, Black men were immediately re‑arrested after emancipation — on charges like vagrancy, "idleness," or looking at someone wrong — and leased back to plantations and mines as convict labor.
              </p>
              <p className="mt-2">
                The 13th Amendment allowed it. It ran until 1941 in some states. Nearly 80 years after freedom was declared.
              </p>
              <p className="mt-2">
                The men who lived through this were not criminals. They were a workforce — re‑enslaved by another name, documented and legal.
              </p>
            </Accordion>
          </div>
        </div>

        {/* SECTION 2 – REDLINING AND THE GI BILL */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail
            src="/images/trilogy/unforgettable-3.jpg"
            alt="Redlining map – federal housing policy, mid‑20th century"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              The white middle class was built on a bill Black veterans were cut out of. By design.
            </p>
            <Accordion triggerLabel="▼ The full story">
              <p>
                Redlining was federal policy. Banks and the U.S. government drew maps blocking Black families from buying homes in neighborhoods where wealth was being built. Not an accident. Signed and stamped.
              </p>
              <p className="mt-2">
                Then came the GI Bill. Black veterans fought in World War II and came home to find the benefits — college tuition, housing loans, business startup funds — administered by local white officials who simply refused to distribute them to Black men.
              </p>
              <p className="mt-2">
                The wealth gap between Black and white families in America today is a direct mathematical result of those two policies operating together. That gap did not happen. It was built.
              </p>
            </Accordion>
          </div>
        </div>

        {/* SECTION 3 – VOTING RIGHTS */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail
            src="/images/trilogy/vra-collapse.png"
            alt="Voting rights – Shelby County v. Holder, 2013"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              The Voting Rights Act was won with blood on the Edmund Pettus Bridge.<br />
              It was gutted by the Supreme Court in 2013.<br />
              States started redrawing maps within 24 hours.
            </p>
            <Accordion triggerLabel="▼ The full story">
              <p>
                Shelby County v. Holder removed the enforcement mechanism of the Voting Rights Act — the requirement that states with a history of voter suppression get federal approval before changing voting laws.
              </p>
              <p className="mt-2">
                Within 24 hours of that ruling, Texas announced new voter ID laws. Other states followed immediately.
              </p>
              <p className="mt-2">
                Polling places were closed in Black neighborhoods. Districts were redrawn to split Black communities into multiple majority‑white districts — diluting the vote without technically banning it. The strategy is surgical. The result is the same.
              </p>
              <p className="mt-2">
                Both parties watched it happen. Neither fixed it.
              </p>
            </Accordion>
          </div>
        </div>

        <PullQuote>
          We became the floor everyone else stood on —<br />
          while being told we were the problem beneath it.
        </PullQuote>

        {/* CLOSING – always expanded */}
        <div className="my-12 text-center">
          <p className="text-gray-800 text-lg leading-relaxed">
            Once you see the structure, something shifts.<br />
            You stop blaming yourself.<br />
            You stop shrinking.<br />
            You stop carrying weight that was never yours.<br />
            And you start seeing your own life differently.
          </p>
        </div>

        <CTASection href="/Prophecy/unbreakable" label="→ UNBREAKABLE" />

        {/* Footer citations */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>Sources: Shelby County v. Holder, 570 U.S. 529 (2013) · Douglas Blackmon, Slavery by Another Name (2008) · Richard Rothstein, The Color of Law (2017) · Ira Katznelson, When Affirmative Action Was White (2005) · ACLU School‑to‑Prison Pipeline Report</p>
          <Link href="/Prophecy/trilogy" className="block mt-4 hover:text-black">← Back to Trilogy</Link>
        </div>
      </div>
    </div>
  );
}
// END FILE: app/Prophecy/unforgettable/page.tsx