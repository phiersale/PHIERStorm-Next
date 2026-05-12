// FILE: app/Prophecy/unstoppable/page.tsx
// VERSION: 5.0.0 – Full rewrite with expanded VRA strategy, crack/war on drugs, erasure, "end them"

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
            <p className="text-xl font-bold mt-2">None of it is an accident.</p>
          </div>

          {/* SECTION 1 – THE GUTTING (Voting Rights) */}
          <div className="flex flex-col md:flex-row gap-6 items-start my-12">
            <ImageThumbnail src="/images/trilogy/unstoppable-1.jpg" alt="Voting rights & redistricting" className="md:w-1/3" />
            <div className="flex-1">
              <p className="text-lg font-semibold mb-2">
                The Voting Rights Act was won with blood on the Edmund Pettus Bridge.<br />
                Gutted by the Supreme Court in 2013.<br />
                Within 24 hours, southern states began redrawing lines to eliminate Black representation.
              </p>
              <Accordion triggerLabel="The full story">
                <p>Shelby County v. Holder removed the enforcement mechanism of the Voting Rights Act — the requirement that states with a history of voter suppression get federal approval before changing voting laws.</p>
                <p className="mt-2">Within 24 hours, Texas announced new voter ID laws. North Carolina, Alabama, Georgia, and Mississippi followed immediately. Polling places were closed in Black neighborhoods. Districts were redrawn to split Black communities into multiple majority‑white districts — diluting the vote without technically banning it.</p>
                <p className="mt-2">The result: Black representation collapsed in state after state. And it's only going to get worse. The recent SCOTUS ruling on redistricting has strengthened what we call Trump‑Crow — Jim Crow after Project 2025. The cheating is now baked into the system.</p>
                <p className="mt-2 font-bold">But here is what the parties don't want you to know: <strong>The will of the people, as articulated in the PHIERS petition and survey, changes the game entirely.</strong></p>
                <p className="mt-2">Because when you organize around what people actually need — not around party loyalty, not around money, not around gerrymandered lines — you create a different kind of power. The kind that says: <em>The only candidates who win, regardless of district lines, are the ones we the people want to remain in office.</em></p>
                <p className="mt-2">That is how we overcome the devastating impact of the gutted VRA. Not by playing their game. By changing the game. Focus on the interests of the people, not the parties.</p>
                <p className="mt-2 font-bold">And here's the strategic advantage no one else sees: <strong>We can have a brand new Congress long before the midterm election.</strong> Everyone else is focused on the midterms. That means they're playing on their timeline. We're playing on ours.</p>
                <p className="mt-2">The petition and survey identify the candidates who answer to us — district by district. Then we hold them accountable. Not every two years. Every single day.</p>
                <p className="mt-2">That is leverage. That is how you beat money. That is how you beat cheating. That is how you win.</p>
              </Accordion>
            </div>
          </div>

          <PullQuote>
            We know what this is.<br />
            We know who benefits when we're scattered, blamed, and silent.<br />
            We learned the game. Now we're rewriting the rules.
          </PullQuote>

          {/* SECTION 2 – THE MECHANISM (1,500 math) */}
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
            That's not theory.<br />
            That's math.
          </StatCard>

          {/* SECTION 3 – THE CRACK EPIDEMIC, WAR ON DRUGS, MARITAL HOME, SCAPEGOATING, "CANCER" (NEW) */}
          <div className="flex flex-col md:flex-row gap-6 items-start my-12">
            <ImageThumbnail src="/images/trilogy/unstoppable-1.jpg" alt="War on drugs impact" className="md:w-1/3" />
            <div className="flex-1">
              <p className="text-lg font-semibold mb-2">They didn't just gerrymander us. They jailed us. Blamed us. And called us a cancer.</p>
              <Accordion triggerLabel="The crack epidemic & the war on drugs">
                <p><strong>The crack epidemic and the war on drugs</strong> — engineered to criminalize us, destroy our families, and lock us away for generations. Mass incarceration was the sequel.</p>
                <p className="mt-2"><strong>Kicked out of our own homes</strong> — tossed from the marital house, treated as disposable fathers, blamed for the very structures collapsing around us.</p>
                <p className="mt-2"><strong>Scapegoated and hated</strong> — by people who should have been allies. Pushed aside, demonized, made into the face of every problem while being excluded from every solution.</p>
                <p className="mt-2"><strong>Straight Black men</strong> — deemed by a gynocratic, misandric society to be a cancer on humanity. Not because of what we did. Because we exist. Because we won't disappear.</p>
                <p className="mt-2">But despite all of that, we are still here. And we are building the mechanism to end this.</p>
              </Accordion>
            </div>
          </div>

          {/* SECTION 4 – WHAT WE BUILT & ERASURE / END THEM */}
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
                <p className="mt-2">And here's what that solution does for people who've dismissed us for generations: Rural families whose congressman ignores them. The uninsured. Immigrants watching their rights get stripped. The middle class watching its ground shift beneath it. The unheard everywhere this system has used up and discarded.</p>
                <p className="mt-2">They will all benefit from what Black men built. Not because we owe them. Because we're built different. And now the whole country is about to find out.</p>
                <p className="mt-2 font-bold">And here is what they are doing while we organize: shutting down truth, erasing our history, removing our heroes from the record. Crispus Attucks. The Black Patriots. The men who fought in every war. They want us to forget that we were here first — fighting, building, dying for a country that still won't fully claim us.</p>
                <p className="mt-2 font-bold">No more. We are going to sit this one down and end them once and for all. Not with violence. With structure. With leverage. With PHIERS.</p>
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

          <CTASection href="/Prophecy/leverage" label="→ How Leverage Works (PHIERS)" />

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