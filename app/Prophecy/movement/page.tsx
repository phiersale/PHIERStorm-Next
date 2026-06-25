// FILE: app/Prophecy/movement/page.tsx
// VERSION: 20.0 – Tightened "Old Model Fails" + breathing pause + copy polish

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Accordion from '../components/Accordion';

export default function MovementPage() {
  const [showNaderModal, setShowNaderModal] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="bg-black text-white">
      {showNaderModal && (
  <div
    className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
    onClick={() => setShowNaderModal(false)}
  >
    <img
      src="/images/RalphNader-500-Unstoppable_Change.jpg"
      alt="Ralph Nader – Unstoppable Change"
      className="max-w-[95vw] max-h-[95vh] rounded-xl shadow-2xl"
    />
  </div>
)}

<div className="sticky-header">
        <Link href="/Prophecy">
          <img src="/images/PHIERS_Logo_BW.png" alt="PHIERS" className="w-14 h-auto md:w-16 opacity-60 hover:opacity-80 transition cursor-pointer" />
        </Link>
      </div>
      <div className="sticky-header-offset min-h-screen overflow-x-hidden">
        {/* HERO IMAGE */}
        <div className="w-full">
          <img src="/images/trilogy/You_Are_Not_Powerless_Bro-NO_Words.jpg" alt="Black men united in front of the Capitol" className="w-full h-auto max-h-[70vh] object-cover" />
        </div>

        {/* Hero headline */}
        <div className="max-w-4xl mx-auto px-5 pt-12 pb-8 text-center">
          <h1 className="text-center font-black leading-[1.05]">
            <span className="block text-[clamp(1.8rem,7vw,2.6rem)] md:text-[clamp(3.2rem,4.5vw,5rem)]">
              SURVIVING ISN'T ENOUGH
            </span>
            <span className="block text-[clamp(1.4rem,6vw,2.2rem)] md:text-[clamp(2.6rem,3.8vw,4rem)]">
              NOW WE’RE MOVING IN FORMATION.
            </span>
          </h1>

          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">For too long, survival got mistaken for strategy. Stay quiet. Stay divided. Stay tired. Carry everything. Ask for nothing.</p>
          <p className="text-2xl font-bold mt-4">That era is over. So now we organize.</p>
        </div>

        {/* This Isn't a Protest */}
        <section className="max-w-4xl mx-auto px-5 py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">THIS ISN'T A PROTEST. THIS IS A POWER MOVE.</h2>
          <section className="my-8">
            <img src="/images/trilogy/Organized_men_change_outcomes.jpg" alt="Black men walking in formation" className="w-full rounded-lg object-cover shadow-lg max-w-full h-auto" />
          </section>
          <p className="text-lg text-gray-300 mb-4">Alone you're noise. Together you're leverage.</p>
          <p className="text-lg text-gray-300">PHIERS is not a slogan or another room full of frustration. It's structure. A way for Black men to stop moving like isolated individuals and start moving together with purpose.</p>
        </section>

        {/* Why the Old Model Fails – tightened */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">Why the Old Model Fails</h2>
          <p className="text-lg text-gray-300 mb-4">The systems promised protection they no longer provide. Schools. Jobs. Justice. Voting. Safety.</p>
          <p className="text-lg text-gray-300">When they fail, Black men feel it first. <strong>Waiting hasn't protected us. Structure will.</strong></p>
        </section>

        {/* WHY STRUCTURE MATTERS */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">WHY STRUCTURE MATTERS</h2>
          <p className="text-lg text-gray-300 mb-4">Disconnected men drift. Talented men without coordination get exhausted. Angry men without direction get used. Wounded men without healing get manipulated.</p>
          <p className="text-lg text-gray-300">Structure is what turns seriousness into force. That is what PHIERS is trying to build.</p>
        </section>

        {/* Observational block */}
        <section className="max-w-4xl mx-auto px-5 py-12 border-t border-gray-800">
          <p className="text-gray-300 text-lg italic text-center">What men actually do here:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-gray-300">
            <div>• They check on each other.</div><div>• They share information.</div>
            <div>• They stay reachable.</div><div>• They learn districts.</div>
            <div>• They build trust slowly enough to survive pressure.</div>
          </div>
        </section>

        {/* Breathing pause */}
        <div className="py-16 text-center">
          <p className="text-2xl md:text-3xl font-light text-green-400/80">That's the difference.</p>
        </div>

        <section className="my-16 max-w-4xl mx-auto px-5">
          <img src="/images/trilogy/The_PHIERS_Code.jpg" alt="Clasped hands" className="w-full md:w-3/4 mx-auto rounded-lg object-cover shadow-md max-w-full h-auto" />
        </section>

        <div className="h-16" />
        <section className="max-w-4xl mx-auto px-5 py-20 border border-gray-800 rounded-2xl bg-[#0b0b0b]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">THE PHIERS CODE</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>We do not drift.</li><li>We do not build on fantasy.</li><li>We do not confuse outrage with strategy.</li>
            <li>We do not mistake noise for power.</li><li>We do not abandon each other under pressure.</li>
            <li>We tell the truth plainly.</li><li>We move with discipline when the path is clear.</li><li>We build what can outlast us.</li>
          </ul>
          <p className="text-lg text-gray-300 mt-4"><strong>This is our bond. This is our standard.</strong></p>
        </section>

        {/* THE FIFTEEN HUNDRED */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">THE FIFTEEN HUNDRED</h2>
          <section className="my-8">
            <img src="/images/trilogy/The_Fifteen_Hundred.jpg" alt="Group of men at sunrise" className="w-full rounded-lg object-cover shadow-lg max-w-full h-auto" />
          </section>
          <p className="text-lg text-gray-300 mb-4">Fifteen Hundred is not just a number. It's a standard. It means Black men are no longer carrying pressure alone and in silence.</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6"><li>discipline</li><li>structure</li><li>coordination</li><li>visible presence</li><li>accountability</li></ul>
          <p className="text-lg text-gray-300"><strong>When fifteen hundred disciplined men move together in a district, the political equation changes.</strong></p>
          
          {/* Clarification: 1500 is a signal, not the solution */}
          <div className="mt-8 p-6 border-l-4 border-amber-500/50 bg-amber-500/5 rounded-r-lg">
            <p className="text-amber-400 font-semibold mb-3">A signal, not the solution.</p>
              
            {/* Image ABOVE text on mobile, side-by-side on desktop */}
            <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
              <img
                src="/images/RalphNader-500-Unstoppable_Change.jpg"
                alt="Ralph Nader – Unstoppable Change"
                onClick={() => setShowNaderModal(true)}
                className="w-32 md:w-44 rounded opacity-90 shrink-0 cursor-zoom-in hover:opacity-100 transition mx-auto md:mx-0"
                loading="eager"
                fetchPriority="high"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Ralph Nader documented this from decades inside Congress:
                <span className="block mt-2 text-gray-300">
                  <strong className="text-amber-300">500 constituents</strong> compels a Representative to attend a town hall.<br />
                  <strong className="text-amber-300">1,000</strong> compels a Senator.<br />
                  <strong className="text-amber-300">1,500</strong> is where the signal becomes undeniable.
                </span>
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              If fifteen hundred disciplined men in a district go on record, they almost certainly 
              speak for the majority of active voters. The representative knows there are far more 
              where they came from — more who will show up to vote, back a primary, or demand answers.
            </p>
            <p className="text-amber-400 font-semibold mt-3">
              Fifteen hundred gets us to the table. What we bring to that table is the real work.
            </p>
          </div>
          
          <div className="mt-10">
            <Image src="/images/trilogy/fifteen-hundred.jpg" alt="Fifteen Hundred" width={1200} height={700} className="w-full rounded-xl object-cover" />
          </div>
        </section>

        {/* BIG C VIDEO SECTION — HUMAN PROOF AFTER THE FIFTEEN HUNDRED, BEFORE WHAT PHIERS BUILDS */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            A real conversation about power, accountability, and what people are feeling right now.
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            Big C brings together respected voices — Ralph Nader, Trevor Noah, and Karen Hunter — to talk about the exact leverage PHIERS operationalizes.
            It's funny at moments, but the content is serious. It's the conversation millions of people have been waiting for:
            why everything feels broken, and what ordinary people can actually do about it.
          </p>

          <h3 className="text-green-400 font-semibold text-lg md:text-xl mb-2">
            The conversation that connects the mechanism to real life.
          </h3>

          <p className="text-gray-400 text-sm italic mb-6">
            Trusted voices. Real frustration. Real solutions. This is what leverage sounds like when people finally talk honestly.
          </p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-green-30">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/qxcRP8lx9dc"
              title="Big C Interview — Ralph Nader, Trevor Noah, Karen Hunter on PHIERS"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-gray-500 text-xs mt-3 text-center">
            Big C · May 2026 · Ralph Nader, Trevor Noah, Karen Hunter
          </p>
        </section>

        {/* WHAT PHIERS BUILDS */}
        <section className="max-w-4xl mx-auto px-5 py-20 border border-gray-800 rounded-2xl bg-[#0b0b0b]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">What PHIERS Builds</h2>
          <p className="text-lg text-gray-300 mb-4">We are building disciplined local brotherhood. Not endless talk. Not online outrage. Real structure that helps men:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>disciplined local brotherhood that can coordinate services, infrastructure, and mutual aid</li>
            <li>a moral economy rooted in shared usefulness, not charity or dependency</li>
            <li>a structure that makes organized people harder to ignore and harder to divide</li>
            <li>men who grow stronger, think clearer, and build trust locally</li>
          </ul>
          <p className="text-lg text-gray-300">We already know how to survive pressure. <strong>Now we organize what that pressure built in us.</strong></p>
        </section>

        {/* PERCEPTION SHIFT */}
        <div className="mt-24 mb-20 max-w-4xl mx-auto px-5">
          <p className="text-sm tracking-wide text-gray-400 uppercase mb-4">THE MOMENT THE WORLD SEES WHAT WE BUILT</p>
          <p className="text-base text-gray-300 mb-8">Recognition isn’t requested. It’s earned through structure, discipline, and visible contribution.</p>
          <img src="/images/trilogy/Manhattan.png" alt="The world turning" className="w-full h-auto rounded-lg shadow-lg" />

          <div className="mt-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">THE MANHATTAN PROJECT</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              An announcement, years in the making: a coordinated effort to restore and redeem the image of Black men on a global stage — not through grievance, but through real solutions and a real record.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              In this video, Jesse — Al "Dad" Wilson's longtime handyman of decades — introduces the man behind it: over 30 years of military service, and a life that's changed people around the world.
            </p>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-green-30">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/v2V5H_P7aNo"
                title="The Manhattan Project — PHIERS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-6">
              This isn't a slogan. It's the start of a project built the way everything else here is built — person by person, relationship by relationship, proof by proof.
            </p>
          </div>
        </div>

        {/* HOW THE FIX WORKS */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">HOW THE FIX WORKS</h2>
          <p className="text-lg text-gray-300 mb-4">PHIERS is built around a simple idea: when disciplined people are organized around shared material interests, they become harder to ignore, harder to divide, and harder to manage through distraction.</p>
          <p className="text-lg text-gray-300">The point is not endless complaint. The point is to turn clarity into alignment, alignment into structure, and structure into leverage. That is how pressure becomes response — and how organized men change outcomes.</p>
        </section>

        {/* RECONSTRUCTION AGAIN */}
        <div className="mt-24 mb-24 max-w-4xl mx-auto px-5 text-center">
          <p className="text-sm tracking-wide text-gray-400 uppercase mb-6">RECONSTRUCTION AGAIN</p>
          <img src="/images/trilogy/Reconstruction_Again.png" alt="Reconstruction" className="w-full h-auto rounded-lg shadow-lg" />
          <p className="text-base text-gray-300 mt-6">Then. Now. Same fight. Same brilliance. Same build.<br />This time, we finish the job.</p>
        </div>

        {/* WHY THIS IS NOT A SINGLE-ISSUE PLAN */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">WHY THIS IS NOT A SINGLE-ISSUE PLAN</h2>
          <p className="text-lg text-gray-300 mb-4">Most people are taught to think in fragments. One issue here. Another issue there. One audience over here. Another audience over there.</p>
          <p className="text-lg text-gray-300">But real pressure does not arrive in fragments. It stacks. PHIERS is built around the belief that one serious structure can answer multiple unmet needs at once when those needs share the same underlying failures of power, coordination, and accountability. That is part of what makes this worth building.</p>
        </section>

        {/* PRESSURES WE FACE */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">THE PRESSURES WE FACE</h2>

          <Accordion triggerLabel="Voting power gutted" className="...">
            <p className="text-gray-300"><strong>Pressure:</strong> The Voting Rights Act was completely gutted in 2026. Districts continue to be reshaped around us. Political leverage disappears.</p>
            <p className="text-gray-300 mt-2"><strong>Consequence:</strong> Communities become easier to ignore. Fragmentation increases. Power no longer has to listen.</p>
            <p className="text-gray-300 mt-2"><strong>Response:</strong> Organized men create leverage where isolated frustration cannot. Discipline and coordination restore pressure that redistricting cannot erase.</p>
          </Accordion>

          <Accordion triggerLabel="Black engineers, erased again" className="...">
            <p className="text-gray-300">In the late 1980s, Palin Johnson Associates — a Black-owned engineering firm — partnered with IBM to modernize TRACON, the system that keeps planes safe on approach and departure. They proved it could run on cheaper, general-purpose computers. It worked. It kept skies safe for decades.</p>
            <p className="text-gray-300 mt-2">Nobody remembers that. But when a Black mayor's bridge got hit, the conversation turned to race overnight. Watch, then judge for yourself.</p>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-green-30 mt-4">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dih6P3gpGJ4"
                title="Black Engineers Modernized Air Traffic Control"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Accordion>

          <Accordion triggerLabel="Reconstruction's reversal" className="...">
            <p className="text-gray-300">Black Codes made unemployment and "insolence" a crime — pretext to arrest freedmen.</p>
            <p className="text-gray-300 mt-2">Convict leasing fed those arrests straight back into forced labor. No ownership stake in keeping a man alive made it deadlier than slavery.</p>
            <p className="text-gray-300 mt-2">1877. Federal troops pulled out of the South. Protection ended.</p>
          </Accordion>

          <Accordion triggerLabel="Jim Crow's machinery" className="...">
            <p className="text-gray-300">Legal segregation. Poll taxes. Literacy tests. Grandfather clauses. White primaries.</p>
            <p className="text-gray-300 mt-2">Lynching enforced all of it. Near-total impunity.</p>
            <p className="text-gray-300 mt-2">Sharecropping ran on debt built so you could never settle the account and leave.</p>
          </Accordion>

          <Accordion triggerLabel="Locked out of the New Deal" className="...">
            <p className="text-gray-300">1935. Social Security excluded agricultural and domestic workers — the two largest Black job categories at the time.</p>
            <p className="text-gray-300 mt-2">Redlining marked our neighborhoods uninsurable. No federally-backed mortgages.</p>
            <p className="text-gray-300 mt-2">The GI Bill, administered locally, denied Black veterans the same housing and education benefits white veterans got.</p>
            <p className="text-gray-300 mt-2">Urban renewal and the interstate highways were routed straight through thriving Black neighborhoods. Overtown. Rondo. Demolished, city by city.</p>
          </Accordion>

          <Accordion triggerLabel="The backlash" className="...">
            <p className="text-gray-300">Nixon's own aide, John Ehrlichman, admitted on record the War on Drugs was built to target us. The 100:1 crack-to-powder sentencing gap followed.</p>
            <p className="text-gray-300 mt-2">Incarceration in this country roughly quintupled from the 1970s to the 2000s. We're locked up at about 5 times the rate of white Americans.</p>
            <p className="text-gray-300 mt-2">Zero-tolerance school discipline. Same pipeline, younger.</p>
            <p className="text-gray-300 mt-2">2008. Subprime lenders steered us into higher-cost loans even when we qualified for better. We took the foreclosures hardest.</p>
            <p className="text-gray-300 mt-2">Felon disenfranchisement. Same function as the poll tax. Different paperwork.</p>
            <p className="text-gray-300 mt-2">Shelby County v. Holder gutted the Voting Rights Act in 2013. This year's ruling went further.</p>
          </Accordion>

          <Accordion triggerLabel="Guns flowed in. We didn't make them." className="...">
            <p className="text-gray-300">We don't manufacture firearms. Law enforcement calls it the Iron Pipeline — guns bought cheap in states with weak laws, run up I-95, sold at markup in our cities.</p>
            <p className="text-gray-300 mt-2">Two-thirds of the guns recovered in Baltimore come from out of state. Same pattern in New York, Chicago, L.A.</p>
            <p className="text-gray-300 mt-2">A market built the pipeline. We took the gang wars.</p>
          </Accordion>

          <Accordion triggerLabel="What happened to the music" className="...">
            <p className="text-gray-300">Conscious rap was here first. Public Enemy. Queen Latifah. De La Soul. The Fugees.</p>
            <p className="text-gray-300 mt-2">Then the labels found what sold harder. After the L.A. riots, conscious rappers stopped getting signed. Gangster rap took the airwaves.</p>
            <p className="text-gray-300 mt-2">Charlie Braxton, who covered it from inside the industry, asked the question plainly: "Do you think that's an accident?"</p>
            <p className="text-gray-300 mt-2">Kim Osorio, who ran The Source, said it too: "I believe that there was an agenda."</p>
            <p className="text-gray-300 mt-2">We watched what got pushed and what got buried. We know what we saw.</p>
          </Accordion>

          <Accordion triggerLabel="What they don't have a name for — until now" className="...">
            <p className="text-gray-300">Legal scholar Tommy J. Curry gave it a name: anti-Black misandry. Not a side effect of racism. Its own distinct thing.</p>
            <p className="text-gray-300 mt-2">Researchers have documented it directly — Black men stereotyped as inherently dangerous, hypersexual, criminal by nature, placed under constant surveillance on campuses, in classrooms, in public space, just for existing.</p>
            <p className="text-gray-300 mt-2">Curry's work goes further: the belief that it's acceptable — even justified — to kill a Black male has been treated as a social and cultural right in this country, not just a crime that sometimes happens.</p>
            <p className="text-gray-300 mt-2">We've felt this without always having the word for it. Now we have the word. And the word means it's real, it's documented, and it's not just us being "too sensitive."</p>
          </Accordion>
        </section>

        {/* ACCOUNTABILITY IS THE BOND with moved image */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">ACCOUNTABILITY IS THE BOND</h2>
          <p className="text-xl text-gray-200">We expect accountability from leadership. But we practice it with each other first. Without accountability, pain turns into drift. With accountability, pain turns into structure.</p>
          <div className="max-w-sm mx-auto my-10">
            <Image src="/images/trilogy/He_aint_heavy.webp" alt="Brotherhood" width={800} height={600} className="w-full h-auto rounded-xl object-contain" />
          </div>
        </section>

        {/* What We Expect */}
        <section className="max-w-4xl mx-auto px-5 py-20 border border-gray-800 rounded-2xl bg-[#0b0b0b]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">What We Expect</h2>
          <p className="text-2xl font-bold mb-4">Discipline. Purpose. Brotherhood. Accountability.</p>
          <p className="text-lg text-gray-300 mb-4">We do not need everybody. We need men ready to:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6"><li>build</li><li>lead</li><li>protect each other</li><li>move with intention</li><li>hold the line</li></ul>
          <p className="text-xl font-semibold mt-6">The future belongs to organized men.</p>
        </section>

        {/* Closing CTA */}
        <section className="text-center py-20">
          <section className="my-12">
            <img src="/images/trilogy/Final_CTA_image.jpg" alt="Man walking toward sunrise" className="w-full md:w-4/5 mx-auto rounded-lg object-cover shadow-lg" />
          </section>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/Prophecy" className="inline-block bg-transparent border border-gray-600 text-white font-bold text-base sm:text-lg md:text-xl py-3 sm:py-4 px-6 sm:px-12 rounded-full hover:bg-white/10 transition shadow-lg whitespace-nowrap">
              ← BACK TO PROPHECY
            </Link>
            <Link href="/Prophecy/trilogy" className="inline-block bg-white text-black font-bold text-base sm:text-lg md:text-xl py-3 sm:py-4 px-6 sm:px-12 rounded-full hover:bg-gray-200 transition shadow-lg whitespace-nowrap">
              ENTER THE TRILOGY →
            </Link>
          </div>
          <p className="text-gray-400 mt-4">Three chapters. One mission. A future we refuse to leave unguarded.</p>
          <p className="text-gray-500 text-sm mt-2">Or <a href="/zoom" className="underline hover:text-white">join the Zoom first</a>.</p>
        </section>

        <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
          <p>A gift from Foundational Black American men to humanity</p>
          <p className="mt-2"><a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">PHIERS.org →</a></p>
        </footer>
      </div>
    </motion.div>
  );
}
// END OF FILE: app/Prophecy/movement/page.tsx