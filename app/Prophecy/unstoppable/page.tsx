// FILE: app/Prophecy/unstoppable/page.tsx
// VERSION: 5.2.0 – Fixed duplicate export, added strategic response block

'use client';

import ImageThumbnail from '../components/ImageThumbnail';
import Accordion from '../components/Accordion';
import PullQuote from '../components/PullQuote';
import StatCard from '../components/StatCard';
import CTASection from '../components/CTASection';
import Link from 'next/link';

export default function UnstoppablePage() {
  return (
    <>
      <div className="sticky-header">
        <a href="https://phiers.org" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/PHIERS_Logo_BW.png"
            alt="PHIERS"
            className="w-14 h-auto md:w-16 opacity-60 hover:opacity-80 transition"
          />
        </a>
      </div>
      <div className="sticky-header-offset min-h-screen bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-12">

          {/* Opening */}
          <div className="bg-black text-white p-8 rounded-lg mb-12 text-center">
            <p className="text-xl font-bold">The pressure is real.</p>
            <p className="text-xl font-bold mt-2">The attacks are real.</p>
            <p className="text-xl font-bold mt-2">They are not accidents.</p>
          </div>

          {/* SECTION 1 – THE STRUCTURE */}
          <div className="flex flex-col md:flex-row gap-6 items-start my-12">
            <ImageThumbnail src="/images/trilogy/unstoppable-1.jpg" alt="Voting rights & redistricting" className="md:w-1/3" />
            <div className="flex-1">
              <p className="text-lg font-semibold mb-2">
                What's happening to Black men right now is not random.<br />
                It is policy. It is strategy. It is documented.
              </p>
              <Accordion triggerLabel="The full story">
                <p>The Voting Rights Act — won with blood on the Edmund Pettus Bridge — gutted by the Supreme Court. Within 24 hours, states were redrawing maps to erase Black representation.</p>
                <p className="mt-2">The school-to-prison pipeline moves Black boys from classrooms into cells at rates no other group faces. Same behavior. Judged differently. Punished harder.</p>
                <p className="mt-2">The grants, the contracts, the jobs, the opportunity narratives — they went to everyone else first. Every group that arrived after us got handed rungs on a ladder that Black men built and still aren't allowed to fully climb.</p>
                <p className="mt-2">And when things go wrong — when communities struggle, when systems fail, when the foundation cracks — the blame lands on us. Not on the policy. Not on the pipeline. On us.</p>
              </Accordion>
            </div>
          </div>

          {/* 🔴 NEW STRATEGIC RESPONSE – May 2026 */}
          <div className="my-12 p-6 bg-gray-900 text-white rounded-lg">
            <p className="text-sm font-bold text-yellow-400 uppercase tracking-wide">NEW — May 2026</p>
            <p className="mt-2">They made it harder to vote them out.</p>
            <p className="mt-2">So we don't wait for elections.</p>
            <p className="mt-2">PHIERS works between elections. It works in every district. It works with 1,500 people on record — because a member of Congress doesn't need a clean election to feel pressure.</p>
            <p className="mt-2 font-semibold">This is how we move now. This is how we protect ourselves. This is how we protect everybody else.</p>
          </div>

          <PullQuote>
            We know what it is.<br />
            We know who benefits from keeping us scattered, blamed, and silent.<br />
            We learned the game.
          </PullQuote>

          {/* SECTION 2 – THE MECHANISM */}
          <div className="flex flex-col md:flex-row gap-6 items-start my-12">
            <ImageThumbnail src="/images/trilogy/unstoppable-2.jpg" alt="District‑level organizing" className="md:w-1/3" />
            <div className="flex-1">
              <p className="text-lg font-semibold mb-2">
                States control voting laws.<br />
                States control redistricting.<br />
                The battlefield is not Washington — it's your state capitol.
              </p>
              <Accordion triggerLabel="The full story">
                <p>The maps that erase us are drawn at the state capitol — not Washington. The representatives who draw those maps only answer to one thing: losing their seat.</p>
                <p className="mt-2">1,500 organized people in one district can make that seat become genuinely uncertain before election day. Not violence. Not chaos. Not noise. Structure. Peaceful. Lawful. The way democracy works when people actually mean it.</p>
                <p className="mt-2">Representatives don't fear random anger. They fear organized people who show up — at primaries, at town halls, at the polls, and in the public record.</p>
              </Accordion>
            </div>
          </div>

          <StatCard>
            1,500 people. One district.<br />
            A seat that goes from safe to uncertain.<br />
            A congressman who suddenly returns calls.<br />
            That's not theory. That's math.
          </StatCard>

          {/* SECTION 3 – WHAT WE BUILT */}
          <div className="flex flex-col md:flex-row gap-6 items-start my-12">
            <ImageThumbnail src="/images/trilogy/unstoppable-3.jpg" alt="Black men building" className="md:w-1/3" />
            <div className="flex-1">
              <p className="text-lg font-semibold mb-2">
                We didn't wait for a savior.<br />
                We didn't ask permission.<br />
                We built the solution.
              </p>
              <Accordion triggerLabel="The full story">
                <p>The same way our people have always built. From the ground up. With what we had. Without their approval.</p>
                <p className="mt-2">And here's what that solution does for people who've dismissed us for generations: Rural families whose congressman ignores them. The uninsured. Immigrants watching their rights get stripped. The middle class watching its ground shift. The unheard everywhere this system has used up and discarded.</p>
                <p className="mt-2">They will all benefit from what Black men built. Not because we owe them. Because we're built different. And now the whole country is about to find out.</p>
              </Accordion>
            </div>
          </div>

          {/* CLOSING */}
          <div className="bg-black text-white p-8 rounded-lg my-12 text-center">
            <p className="text-xl font-bold">That is not coincidence.</p>
            <p className="text-3xl font-bold mt-4">That is prophecy.</p>
            <p className="text-gray-300 mt-4">
              They gutted the VRA. They drew the maps. They took the seats.
            </p>
            <p className="text-gray-300 mt-2">
              But they forgot one thing: <strong className="text-white">We the people still have the final say.</strong>
            </p>
            <p className="text-gray-300 mt-2">
              PHIERS is the mechanism. The petition is the voice. The survey is the map.
            </p>
            <p className="text-gray-300 mt-2">
              And a brand new Congress is closer than they think.
            </p>
          </div>

          <CTASection href="/Prophecy/leverage" label="→ See How Leverage Works" />

          <div className="text-center mt-4">
            <Link href="/Prophecy/trilogy" className="text-gray-500 text-sm hover:text-black">← Back to Trilogy</Link>
          </div>

          {/* Footer citations */}
          <div className="text-center text-gray-500 text-sm mt-8">
            <p>Sources: Shelby County v. Holder, 570 U.S. 529 (2013) · Children's Defense Fund · Economic Policy Institute · Katznelson, When Affirmative Action Was White (2005)</p>
          </div>
        </div>
      </div>
    </>
  );
}
// FILE: app/Prophecy/unstoppable/page.tsx