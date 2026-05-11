// FILE: app/Prophecy/unstoppable/page.tsx
// VERSION: 2.0.0
// The Shift – structural pressure, mechanism, stat card, what we built

'use client';

import ImageThumbnail from '../components/ImageThumbnail';
import Accordion from '../components/Accordion';
import PullQuote from '../components/PullQuote';
import StatCard from '../components/StatCard';
import CTASection from '../components/CTASection';
import Link from 'next/link';

export default function UnstoppablePage() {
  return (
    <div className="relative min-h-screen bg-white text-black">
      {/* PHIERS Logo */}
      <div className="absolute top-4 left-4 z-20 md:top-6 md:left-6">
        <a href="https://phiers.org" target="_blank" rel="noopener noreferrer">
          <img src="/images/PHIERS_Logo_BW.png" alt="PHIERS" className="w-16 h-auto md:w-20 opacity-80 hover:opacity-100 transition" />
        </a>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* OPENING – always expanded */}
        <div className="bg-black text-white p-8 rounded-lg mb-12 text-center">
          <p className="text-xl font-bold">The pressure is real.</p>
          <p className="text-xl font-bold mt-2">The attacks are real.</p>
          <p className="text-xl font-bold mt-2">And they are not accidents.</p>
        </div>

        {/* SECTION 1 – THE STRUCTURE */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail
            src="/images/trilogy/unstoppable-1.jpg"
            alt="Structural pressure – voting, redistricting, policy"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              What's happening to Black men right now is not random.<br />
              It is policy. It is strategy. It is documented.
            </p>
            <Accordion triggerLabel="▼ The full story">
              <p>
                The Voting Rights Act — won with blood on the Edmund Pettus Bridge — was gutted by the Supreme Court in 2013. Within 24 hours, states were redrawing maps to erase Black representation.
              </p>
              <p className="mt-2">
                The school‑to‑prison pipeline moves Black boys from classrooms into cells at rates no other group faces. Same behavior. Judged differently. Punished harder.
              </p>
              <p className="mt-2">
                The grants, the contracts, the jobs, the opportunity narratives — they went to everyone else first. Every group that arrived after us got handed rungs on a ladder that Black men built and still aren't allowed to fully climb.
              </p>
              <p className="mt-2">
                And when things go wrong — when communities struggle, when systems fail, when the foundation cracks — the blame lands on us. Not on the policy. Not on the pipeline. Not on the deliberate decisions made in rooms we weren't invited into. On us.
              </p>
            </Accordion>
          </div>
        </div>

        <PullQuote>
          We know what it is.<br />
          We know who benefits from keeping us scattered, blamed, and silent.<br />
          We learned the game.
        </PullQuote>

        {/* SECTION 2 – THE MECHANISM */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail
            src="/images/trilogy/unstoppable-2.jpg"
            alt="District‑level organizing – civic leverage"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              States control voting laws.<br />
              States control redistricting.<br />
              The battlefield is not Washington — it's your state capitol.
            </p>
            <Accordion triggerLabel="▼ The full story">
              <p>
                The maps that erase us are drawn at the state capitol — not Washington. The representatives who draw those maps only answer to one thing: losing their seat.
              </p>
              <p className="mt-2">
                1,500 organized people in one district can make that seat feel genuinely at risk before election day. Not violence. Not chaos. Not noise. Structure. Peaceful. Lawful. The way democracy works when people actually mean it.
              </p>
              <p className="mt-2">
                Representatives don't fear random anger. They fear organized people who show up — at primaries, at town halls, at the polls, and in the public record.
              </p>
            </Accordion>
          </div>
        </div>

        <StatCard>
          1,500 people. One district.<br />
          A seat that goes from safe to uncertain.<br />
          A congressman who suddenly returns calls.<br />
          That's not theory.<br />
          That's math.
        </StatCard>

        {/* SECTION 3 – WHAT WE BUILT */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail
            src="/images/trilogy/unstoppable-3.jpg"
            alt="Black men building – community, solutions, future"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              We didn't wait for a savior.<br />
              We didn't ask permission.<br />
              We built the solution.
            </p>
            <Accordion triggerLabel="▼ The full story">
              <p>
                The same way our people have always built. From the ground up. With what we had. Without their approval.
              </p>
              <p className="mt-2">
                And here's what that solution does for people who've dismissed us for generations: Rural families whose congressman ignores them. The uninsured. Immigrants watching their rights get stripped. The middle class watching its ground shift beneath it. The unheard everywhere this system has used up and discarded.
              </p>
              <p className="mt-2">
                They will all benefit from what Black men built. Not because we owe them. Because we're built different — and now the whole country is about to find out.
              </p>
            </Accordion>
          </div>
        </div>

        {/* CLOSING – always expanded */}
        <div className="bg-black text-white p-8 rounded-lg my-12 text-center">
          <p className="text-xl font-bold">That is not coincidence.</p>
          <p className="text-3xl font-bold mt-4">That is prophecy.</p>
        </div>

        <CTASection href="/Prophecy/leverage" label="→ See How Leverage Works" />

        <div className="text-center mt-4">
          <Link href="/Prophecy/trilogy" className="text-gray-500 text-sm hover:text-black">← Back to Trilogy</Link>
        </div>

        {/* Footer citations */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>Sources: Shelby County v. Holder, 570 U.S. 529 (2013) · Children's Defense Fund, "The School‑to‑Prison Pipeline" · Economic Policy Institute, "Redlining and the racial wealth gap" · The GI Bill and Black veterans, Katznelson, When Affirmative Action Was White (2005)</p>
        </div>
      </div>
    </div>
  );
}

// END FILE: app/Prophecy/unstoppable/page.tsx