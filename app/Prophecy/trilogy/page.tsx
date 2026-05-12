// FILE: app/Prophecy/trilogy/page.tsx
// VERSION: 5.0.0 – Full rewrite using existing components, collapsible Accordion, three cards

import Link from 'next/link';
import Accordion from '../components/Accordion';

export default function TrilogyLanding() {
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

      <div className="sticky-header-offset min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          {/* ALWAYS VISIBLE INTRO */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-light leading-tight">This is a private room.</p>
            <p className="text-2xl md:text-3xl font-light leading-tight mt-4">No cameras. No performance.</p>
            <p className="text-white text-xl md:text-2xl font-semibold mt-6">No explaining yourself to anybody who hasn't lived this.</p>
            <p className="text-white text-xl md:text-2xl font-semibold mt-8">Just Black men. Seeing it clearly. Finally.</p>
            <p className="text-gray-300 text-lg md:text-xl mt-8">
              We're not hurting because we're fragile.<br />
              We're hurting because we're angry —<br />
              and we've earned that anger.
            </p>
            <p className="text-gray-300 text-lg md:text-xl mt-8">
              But here's what nobody says out loud.<br />
              We've been here before.<br />
              And we beat this before.
            </p>
            <p className="text-gray-300 text-lg md:text-xl mt-8">
              That's Sankofa — not nostalgia. Strategy.<br />
              We come from men who refused to disappear.<br />
              Now it's our turn again.
            </p>
          </div>

          {/* COLLAPSIBLE using Accordion component */}
          <div className="max-w-2xl mx-auto my-12">
            <Accordion triggerLabel="Read the full story">
              <div className="text-gray-300 text-base leading-relaxed space-y-3 mt-2">
                <p>Let's talk straight.</p>
                <p>Black men aren't hurting because we're fragile. We're hurting because we're angry — and we're angry because we've been treated like the most unwanted, most blamed, most locked-out men in this country.</p>
                <p>For most of us — outside the Talented Tenth, outside the acceptable circles — it's been no protection, no safety net, no respect, and no real reason to believe anything changes.</p>
                <p><strong>We lived through the crack epidemic and the war on drugs</strong> — manufactured crises that filled prisons and emptied neighborhoods. We were kicked out of our own marital homes, scapegoated as deadbeats while the system made survival impossible. We've been hated by people who should have been our allies — told we're the problem while they took the rungs we built.</p>
                <p><strong>Straight Black men</strong> — called a cancer by a society that blames masculinity itself for every wound. A gynocratic, misandric culture that lectures us while erasing our pain. But we're still here.</p>
                <p>After slavery, they took everything — land, rights, dignity. Black men rebuilt.</p>
                <p>After Reconstruction, they burned our towns, rewrote the laws, and locked us out again. Black men rebuilt.</p>
                <p>After Jim Crow. After COINTELPRO. After every system designed to erase us — Black men rebuilt.</p>
                <p>Every. Single. Time.</p>
                <p>That's not myth. That's not luck. That's Sankofa — not nostalgia, strategy.</p>
                <p>We look back because we are the continuation of men who rebuilt under pressure when disappearing would've been easier.</p>
                <p>And now it's our turn again.</p>
                <p>This isn't a think tank. This isn't a debate. This isn't a safe space.</p>
                <p>This is a plan — built by us, for us — that gives Black men a reason to be more hopeful than we've been in a long time.</p>
                <p>Not because someone's coming to save us. Because we finally built something that works.</p>
                <p>When we move with discipline, unity, and purpose, we don't just change our situation — we solve problems the whole country has been stuck on.</p>
                <p>Rural families. The uninsured. The ignored. The discarded. Every community this system used up and threw away.</p>
                <p>We built the solution. Without permission. Without applause. Without waiting to be validated.</p>
                <p>From us. By us. Word of mouth.</p>
                <p>A lot of brothers stopped believing anything could change. After everything we've seen — who could blame us.</p>
                <p>But walk through these three chapters. Then tell me you don't feel something shift.</p>
                <p>Because now there's a path forward. And you're needed in it.</p>
                <p><strong>And despite everything — the crack epidemic, the war on drugs, the kicked‑out doors, the scapegoating, the society that calls us a cancer — we continue to offer unique value that will outlast every attack.</strong> That's not bravado. That's the record. We've done it before. We'll do it again.</p>
              </div>
            </Accordion>
          </div>

          {/* ORIENTATION SENTENCE */}
          <div className="text-center max-w-2xl mx-auto my-8">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              The Trilogy moves in three chapters —<br />
              what was done to us, what we did with it, and what we're about to do next.
            </p>
          </div>

          {/* THREE CARDS */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card title="UNFORGETTABLE" subtitle="The Pattern" description="Documented. Deliberate. Older than any of us." buttonLabel="→ Start here" link="/Prophecy/unforgettable" />
            <Card title="UNBREAKABLE" subtitle="The Response" description="The resilience. The brilliance. The receipts. The part they never teach." buttonLabel="→ Continue" link="/Prophecy/unbreakable" />
            <Card title="UNSTOPPABLE" subtitle="The Shift" description="What happens when we move with strategy, discipline, and purpose — together." buttonLabel="→ The bridge" link="/Prophecy/unstoppable" />
          </div>

          {/* INSTRUCTION */}
          <div className="text-center mt-12 text-gray-400 text-sm italic">
            Start with UNFORGETTABLE. The chapters build on each other.
          </div>

          {/* COLLAPSIBLE DISCLAIMER – protects the space */}
          <div className="max-w-2xl mx-auto my-12">
            <details className="text-center text-gray-500 text-xs cursor-pointer">
              <summary className="hover:text-gray-300 transition">A note about this space</summary>
              <p className="mt-3 text-gray-400 leading-relaxed">
                This space speaks directly to Black men. Not to divide — but because we're the ones carrying the weight first and hardest.
                If you're reading this from outside the experience, read with care and respect.
              </p>
            </details>
          </div>

          {/* FOOTER */}
          <footer className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-500 text-sm">
            <p>Built on PHIERS</p>
            <p className="mt-1"><a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">PHIERS.org →</a></p>
          </footer>
        </div>
      </div>
    </>
  );
}

function Card({ title, subtitle, description, buttonLabel, link }: {
  title: string;
  subtitle: string;
  description: string;
  buttonLabel: string;
  link: string;
}) {
  return (
    <div className="flex-1 bg-white text-black rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col trilogy-card">
      <h2 className="text-2xl md:text-3xl font-bold leading-tight">{title}</h2>
      <p className="text-gray-600 text-sm uppercase tracking-wide mt-2">{subtitle}</p>
      <p className="text-[#111111] mt-3 text-base leading-relaxed flex-grow">{description}</p>
      <Link href={link} className="inline-block mt-5 text-black font-semibold underline hover:no-underline self-start">{buttonLabel}</Link>
    </div>
  );
}
// FILE: app/Prophecy/trilogy/page.tsx