// FILE: app/Prophecy/movement/page.tsx
// VERSION: 17.0 – Fixed syntax, added Manhattan & Reconstruction images

// FILE: app/Prophecy/movement/page.tsx
// VERSION: 18.0 – Added five new images, removed duplicates, corrected paths

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

export default function MovementPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-black text-white"
    >
      <div className="sticky-header">
        <Link href="/Prophecy">
          <img
            src="/images/PHIERS_Logo_BW.png"
            alt="PHIERS"
            className="w-14 h-auto md:w-16 opacity-60 hover:opacity-80 transition cursor-pointer"
          />
        </Link>
      </div>
      <div className="sticky-header-offset min-h-screen overflow-x-hidden">
        {/* HERO IMAGE – Capitol */}
        <div className="w-full">
          <img
            src="/images/trilogy/You_Are_Not_Powerless_Bro-NO_Words.jpg"
            alt="Black men united in front of the Capitol"
            className="w-full h-auto max-h-[70vh] object-cover"
          />
        </div>

        {/* Hero headline */}
        <div className="max-w-4xl mx-auto px-5 pt-12 pb-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            WE'RE DONE SURVIVING.<br />NOW WE'RE ORGANIZING.
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            For too long, survival got mistaken for strategy. Stay quiet. Stay divided. Stay tired. Carry everything. Ask for nothing.
          </p>
          <p className="text-2xl font-bold mt-4">That era is over. So now we organize.</p>
        </div>

        {/* This Isn't a Protest */}
        <section className="max-w-4xl mx-auto px-5 py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            THIS ISN'T A PROTEST. THIS IS A POWER MOVE.
          </h2>
          {/* Image 1: Collective strength */}
          <section className="mt-8 mb-12">
            <img
              src="/images/trilogy/Organized_men_change_outcomes.jpg"
              alt="Black men walking in formation through industrial hallway under banner reading Building Stronger Together"
              className="w-full rounded-lg object-cover shadow-lg"
            />
          </section>
          <p className="text-lg text-gray-300 mb-4">Scattered men get ignored. Organized men change the equation.</p>
          <p className="text-lg text-gray-300">
            PHIERS is not a slogan or another room full of frustration. It's structure. A way for Black men to stop moving like isolated individuals and start moving together with purpose.
          </p>
        </section>

        {/* Why the Old Model Fails */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">Why the Old Model Fails</h2>
          <p className="text-lg text-gray-300 mb-4">
            Too many of the systems around us got weaker, hollowed out, or redirected. And when systems fail, Black men usually feel it first.
          </p>
          <p className="text-lg text-gray-300"><strong>Waiting has not protected us. We need a stronger approach.</strong></p>
        </section>

        {/* WHY STRUCTURE MATTERS */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">WHY STRUCTURE MATTERS</h2>
          {/* Image 2: Technical precision */}
          <section className="my-8">
            <img
              src="/images/trilogy/Structure_matters.jpg"
              alt="Hands drafting blueprints with hammer and books nearby"
              className="w-full md:w-4/5 mx-auto rounded-lg object-cover shadow-md"
            />
          </section>
          <p className="text-lg text-gray-300 mb-4">
            Scattered men get ignored. Talented men without coordination get exhausted. Angry men without direction get used. Wounded men without healing get manipulated.
          </p>
          <p className="text-lg text-gray-300">
            Structure is what turns seriousness into force. That is what PHIERS is trying to build.
          </p>
        </section>

        {/* Image 3: Moral foundation – before the code */}
        <section className="my-16 max-w-4xl mx-auto px-5">
          <img
            src="/images/trilogy/The_PHIERS_Code.jpg"
            alt="Close-up of clasped hands with Local 773 Brotherhood shirt"
            className="w-full md:w-3/4 mx-auto rounded-lg object-cover shadow-md"
          />
        </section>

        {/* THE PHIERS CODE */}
        <section className="max-w-4xl mx-auto px-5 py-20 border border-gray-800 rounded-2xl bg-[#0b0b0b]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">THE PHIERS CODE</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>We do not drift.</li>
            <li>We do not build on fantasy.</li>
            <li>We do not confuse outrage with strategy.</li>
            <li>We do not mistake noise for power.</li>
            <li>We do not abandon each other under pressure.</li>
            <li>We tell the truth plainly.</li>
            <li>We move with discipline when the path is clear.</li>
            <li>We build what can outlast us.</li>
          </ul>
          <p className="text-lg text-gray-300 mt-4"><strong>This is our bond. This is our standard.</strong></p>
        </section>

        {/* THE FIFTEEN HUNDRED */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">THE FIFTEEN HUNDRED</h2>
          {/* Image 4: Visible unity */}
          <section className="my-8">
            <img
              src="/images/trilogy/The_Fifteen_Hundred.jpg"
              alt="Large group of Black men standing in formation at sunrise, facing forward toward city skyline"
              className="w-full rounded-lg object-cover shadow-lg"
            />
          </section>
          <p className="text-lg text-gray-300 mb-4">
            Fifteen Hundred is not just a number. It's a standard. It means Black men are no longer carrying pressure alone and in silence.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
            <li>discipline</li><li>structure</li><li>coordination</li><li>visible presence</li><li>accountability</li>
          </ul>
          <p className="text-lg text-gray-300">
            <strong>When fifteen hundred disciplined men move together in a district, the political equation changes.</strong>
          </p>
          <div className="mt-10">
            <Image
              src="/images/trilogy/fifteen-hundred.jpg"
              alt="Fifteen Hundred disciplined men"
              width={1200}
              height={700}
              className="w-full rounded-xl object-cover"
            />
          </div>
        </section>

        {/* WHAT PHIERS BUILDS */}
        <section className="max-w-4xl mx-auto px-5 py-20 border border-gray-800 rounded-2xl bg-[#0b0b0b]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">What PHIERS Builds</h2>
          <p className="text-lg text-gray-300 mb-4">
            We are building disciplined local brotherhood. Not endless talk. Not online outrage. Real structure that helps men:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>disciplined local brotherhood that can coordinate services, infrastructure, and mutual aid</li>
            <li>a moral economy rooted in shared usefulness, not charity or dependency</li>
            <li>a structure that makes organized people harder to ignore and harder to divide</li>
            <li>men who grow stronger, think clearer, and build trust locally</li>
          </ul>
          <p className="text-lg text-gray-300">
            We already know how to survive pressure. <strong>Now we organize what that pressure built in us.</strong>
          </p>
        </section>

        {/* PERCEPTION SHIFT IMAGE BLOCK (Manhattan.png) */}
        <div className="mt-24 mb-20 max-w-4xl mx-auto px-5">
          <p className="text-sm tracking-wide text-gray-400 uppercase mb-4">
            THE MOMENT THE WORLD SEES WHAT WE BUILT
          </p>
          <p className="text-base text-gray-300 mb-8">
            Recognition isn’t requested. It’s earned through structure, discipline, and visible contribution.
          </p>
          <img
            src="/images/trilogy/Manhattan.png"
            alt="The world turning toward the light Black men built"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* HOW THE FIX WORKS */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">HOW THE FIX WORKS</h2>
          <p className="text-lg text-gray-300 mb-4">
            PHIERS is built around a simple idea: when disciplined people are organized around shared material interests, they become harder to ignore, harder to divide, and harder to manage through distraction.
          </p>
          <p className="text-lg text-gray-300">
            The point is not endless complaint. The point is to turn clarity into alignment, alignment into structure, and structure into leverage. That is how pressure becomes response — and how organized men change outcomes.
          </p>
        </section>

        {/* RECONSTRUCTION AGAIN IMAGE */}
        <div className="mt-24 mb-24 max-w-4xl mx-auto px-5 text-center">
          <p className="text-sm tracking-wide text-gray-400 uppercase mb-6">
            RECONSTRUCTION AGAIN
          </p>
          <img
            src="/images/trilogy/Reconstruction_Again.png"
            alt="Reconstruction – then. Now. Same fight. Same brilliance. Same build."
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-base text-gray-300 mt-6">
            Then. Now. Same fight. Same brilliance. Same build.<br />
            This time, we finish the job.
          </p>
        </div>

        {/* WHY THIS IS NOT A SINGLE-ISSUE PLAN */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">WHY THIS IS NOT A SINGLE-ISSUE PLAN</h2>
          <p className="text-lg text-gray-300 mb-4">
            Most people are taught to think in fragments. One issue here. Another issue there. One audience over here. Another audience over there.
          </p>
          <p className="text-lg text-gray-300">
            But real pressure does not arrive in fragments. It stacks. PHIERS is built around the belief that one serious structure can answer multiple unmet needs at once when those needs share the same underlying failures of power, coordination, and accountability. That is part of what makes this worth building.
          </p>
        </section>

        {/* THE PRESSURES WE FACE accordion */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">THE PRESSURES WE FACE</h2>
          <Accordion
            triggerLabel="Voting power gutted (VRA destroyed 2026)"
            className="w-full text-left border border-gray-800 bg-[#0d0d0d] px-6 py-5 rounded-xl hover:border-gray-600 transition mb-4"
          >
            <p className="text-gray-300"><strong>Pressure:</strong> The Voting Rights Act was completely gutted in 2026. Districts continue to be reshaped around us. Political leverage disappears.</p>
            <p className="text-gray-300 mt-2"><strong>Consequence:</strong> Communities become easier to ignore. Fragmentation increases. Power no longer has to listen.</p>
            <p className="text-gray-300 mt-2"><strong>Response:</strong> Organized men create leverage where isolated frustration cannot. Discipline and coordination restore pressure that redistricting cannot erase.</p>
          </Accordion>

          <Accordion
            triggerLabel="Economic abandonment"
            className="w-full text-left border border-gray-800 bg-[#0d0d0d] px-6 py-5 rounded-xl hover:border-gray-600 transition mb-4"
          >
            <p className="text-gray-300"><strong>Pressure:</strong> Jobs leave. Resources move elsewhere. People are told to survive alone.</p>
            <p className="text-gray-300 mt-2"><strong>Consequence:</strong> Households weaken. Neighborhoods lose confidence. Drift becomes the norm.</p>
            <p className="text-gray-300 mt-2"><strong>Response:</strong> Structure creates the ability to identify shared needs, coordinate local pressure, and push toward practical repair.</p>
          </Accordion>

          <Accordion
            triggerLabel="Information distortion & scapegoating"
            className="w-full text-left border border-gray-800 bg-[#0d0d0d] px-6 py-5 rounded-xl hover:border-gray-600 transition mb-4"
          >
            <p className="text-gray-300"><strong>Pressure:</strong> People are flooded with noise, distraction, and narratives designed to keep them reactive.</p>
            <p className="text-gray-300 mt-2"><strong>Consequence:</strong> Reactive people are easier to divide. Anger gets turned inward or sideways.</p>
            <p className="text-gray-300 mt-2"><strong>Response:</strong> Disciplined men learn to separate signal from noise and align around what actually serves the common good. Truth without organized force gets buried.</p>
          </Accordion>

          <Accordion
            triggerLabel="Criminalization & overpolicing"
            className="w-full text-left border border-gray-800 bg-[#0d0d0d] px-6 py-5 rounded-xl hover:border-gray-600 transition mb-4"
          >
            <p className="text-gray-300"><strong>Pressure:</strong> Black men are policed more, charged more, sentenced more, and released less — for the same behaviors.</p>
            <p className="text-gray-300 mt-2"><strong>Consequence:</strong> Families destabilize. Trust in justice disappears. Men learn to hide instead of lead.</p>
            <p className="text-gray-300 mt-2"><strong>Response:</strong> Coordinated, disciplined presence creates accountability. When enough men show up organized, the calculation changes — for courts, for police, for everyone.</p>
          </Accordion>

          <Accordion
            triggerLabel="Erasure of contribution & history"
            className="w-full text-left border border-gray-800 bg-[#0d0d0d] px-6 py-5 rounded-xl hover:border-gray-600 transition mb-4"
          >
            <p className="text-gray-300"><strong>Pressure:</strong> What Black men built, invented, served, and died for gets buried, distorted, or forgotten.</p>
            <p className="text-gray-300 mt-2"><strong>Consequence:</strong> Younger men grow up without memory of their own inheritance. Pride becomes harder to sustain.</p>
            <p className="text-gray-300 mt-2"><strong>Response:</strong> We carry the record ourselves. We teach it. We build from it. We do not wait for permission to remember.</p>
          </Accordion>
        </section>

        {/* He ain't heavy image */}
        <div className="max-w-sm mx-auto px-5 py-10">
          <Image
            src="/images/trilogy/He_aint_heavy.webp"
            alt="Brotherhood and responsibility"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl object-contain"
          />
        </div>

        {/* Accountability Is the Bond */}
        <section className="max-w-4xl mx-auto px-5 py-20 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">ACCOUNTABILITY IS THE BOND</h2>
          <p className="text-xl text-gray-200">
            We expect accountability from leadership. But we practice it with each other first. Without accountability, pain turns into drift. With accountability, pain turns into structure.
          </p>
        </section>

        {/* What We Expect */}
        <section className="max-w-4xl mx-auto px-5 py-20 border border-gray-800 rounded-2xl bg-[#0b0b0b]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">What We Expect</h2>
          <p className="text-2xl font-bold mb-4">Discipline. Purpose. Brotherhood. Accountability.</p>
          <p className="text-lg text-gray-300 mb-4">We do not need everybody. We need men ready to:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
            <li>build</li><li>lead</li><li>protect each other</li><li>move with intention</li><li>hold the line</li>
          </ul>
          <p className="text-xl font-semibold mt-6">The future belongs to organized men.</p>
        </section>

        {/* Closing CTA with final image */}
        <section className="text-center py-20">
          {/* Image 5: Forward motion */}
          <section className="my-12">
            <img
              src="/images/trilogy/Final_CTA_image.jpg"
              alt="Single Black man walking forward toward sunrise and city skyline, symbolizing disciplined forward motion"
              className="w-full md:w-4/5 mx-auto rounded-lg object-cover shadow-lg"
            />
          </section>
          <Link
            href="/Prophecy/trilogy"
            className="inline-block bg-white text-black font-bold text-xl py-4 px-12 rounded-full hover:bg-gray-200 transition shadow-lg whitespace-nowrap"
          >
            ENTER THE TRILOGY →
          </Link>
          <p className="text-gray-400 mt-4">Three chapters. One mission. A future we refuse to leave unguarded.</p>
          <p className="text-gray-500 text-sm mt-2">Or <a href="#" className="underline hover:text-white">join the Zoom first</a>.</p>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
          <p>A gift from FBA men to humanity</p>
          <p className="mt-2">
            <a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              PHIERS.org →
            </a>
          </p>
        </footer>
      </div>
    </motion.div>
  );
}

// END OF FILE: app/Prophecy/movement/page.tsx