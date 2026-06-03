  // FILE: app/Prophecy/page.tsx
  // VERSION: 60.0 – Record accordion shortened + breathing pauses + tone cleanup

  'use client';

  import { useState } from 'react';
  import Link from 'next/link';
  import Image from 'next/image';
  import Accordion from './components/Accordion';
  import PhiersAcronymBreak from '@/components/PhiersAcronymBreak';
  import PHIERStormModal from '@/components/PHIERStormModal';

  export default function ProphecyPage() {
    const [videoStarted, setVideoStarted] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showTrustModal, setShowTrustModal] = useState(true);
    return (
    <div className="bg-black text-white">
       {/* TRUST & PARTICIPATION MODAL – appears on load */}
      {showTrustModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#2a2a2a] rounded-lg shadow-xl flex flex-col">
            {/* Header */}
            <div className="sticky top-0 bg-[#2a2a2a] border-b border-gray-600 px-6 py-4 rounded-t-lg">
              <h2 className="text-gray-100 text-lg font-medium">About your privacy</h2>
              <p className="text-gray-400 text-sm mt-1">How we handle your information</p>
            </div>
            
            {/* Scrollable content */}
            <div className="overflow-y-auto px-6 py-4 space-y-3 text-gray-300 text-sm leading-relaxed">
              <p className="text-amber-400 text-sm font-medium mb-2">First things first — we used to lead with a petition. We don't anymore.</p>
              <p>We changed strategies because too many brothers told us the same thing:</p>
              <p className="italic text-gray-200">"Before I sign anything, I need to know exactly what you're doing with my information."</p>
              <p>And they were right to ask.</p>
              <p>So let's be clear in plain language — no legalese, no fine print, no surprises.</p>
              
              <div className="space-y-3 mt-2">
                <p><span className="font-bold text-amber-400">1.</span> Nothing you share here is public. Not your name. Not your email. Not your answers. Not your business. We don't post it. We don't sell it. We don't hand it around.</p>
                <p><span className="font-bold text-amber-400">2.</span> Your email is optional. If you want updates or conversation, cool. If not, leave it blank. You're still welcome here.</p>
                <p><span className="font-bold text-amber-400">3.</span> If an elected official ever asks whether Black men in their district are paying attention… We give them a number, not a list. A headcount, not identities. That's it.</p>
                <p><span className="font-bold text-amber-400">4.</span> This space is for clarity, not surveillance. We're not tracking you. We're not building profiles on you. We're not trying to pull people into something they don't understand. This is a peaceful, lawful, transparent effort to help regular people — including us — get the accountability we've been denied for generations.</p>
                <p><span className="font-bold text-amber-400">5.</span> If anything feels off, ask. Push back. Challenge it. You deserve straight answers.<br />
                <span className="text-gray-400 text-xs">You do not need to agree with PHIERS to participate.</span></p>
              </div>
              
              <div className="mt-4 pt-2 border-t border-gray-600">
                <p className="text-gray-300">Take the survey only when you feel fully comfortable with what we're doing and why we're doing it.</p>
                <p className="text-gray-400 text-sm mt-2">And if you're never comfortable with it — that's okay too. This only works if it's real.</p>
              </div>
            </div>
            
            {/* Footer with buttons */}
            <div className="sticky bottom-0 bg-[#2a2a2a] border-t border-gray-600 px-6 py-4 rounded-b-lg flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => {
                  console.log('Continue clicked');
                  setShowTrustModal(false);
                }}
                className="px-5 py-2 text-gray-300 hover:text-white text-sm font-medium transition cursor-pointer"
                type="button"
              >
                Continue to site
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium rounded transition text-center"
              >
                Take the survey →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* STICKY HEADER */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-star">
          <Link href="/Prophecy">
            <img
              src="/images/PHIERS_Logo_BW.png"
              alt="PHIERS"
              className="w-10 h-auto md:w-12 opacity-70 hover:opacity-90 transition"
            />
          </Link>
        </div>
      </div>

      {/* Skip to Movement - quiet top-right link */}
      <div className="px-6 pt-4">
        <div className="w-full flex justify-end">
          <a
            href="/Prophecy/movement"
            className="text-xs sm:text-sm opacity-60 hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-gray-200"
          >
            Skip to the Movement
          </a>
        </div>
      </div>

      {/* TOP SECTION */}
      <div className="text-center pt-8 pb-6 md:pt-12 md:pb-8">
        <p className="text-sm md:text-lg tracking-[0.28em] md:tracking-[0.35em] uppercase text-gray-300 font-semibold">
          For Us. By Us.
        </p>
      </div>

      {/* VIDEO HERO – unchanged */}
        <div className="w-full max-w-full overflow-hidden mt-2 md:mt-4">
          <div className="w-full h-[34vh] sm:h-[42vh] md:h-[70vh] bg-black relative rounded-xl overflow-hidden">
            {!videoStarted ? (
              <button
                type="button"
                onClick={() => setVideoStarted(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label="Play Why we do what we do video"
              >
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://img.youtube.com/vi/GwfhH8yDZQo/hqdefault.jpg")',
                    backgroundSize: 'cover',
                  }}
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Image
                    src="/images/trilogy/Youtube_Play_Button.png"
                    alt=""
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20 group-hover:opacity-80 transition"
                  />
                  <span className="text-gray-300 text-[10px] md:text-xs tracking-wide mt-2 opacity-80">
                    tap to play
                  </span>
                </div>
              </button>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/GwfhH8yDZQo?si=Up2Frm-uFcU2L1SW&autoplay=1&start=382"
                title="Why we do what we do"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* INTRO SEQUENCE */}
        <div className="text-center mt-20 md:mt-24 mb-10 px-6">
          <h3 className="text-[clamp(2rem,8vw,3.25rem)] leading-[1.05] font-light text-gray-300 italic">
            Take a deep breath.
          </h3>
          <div className="mt-8 space-y-3 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
            <p>We know what we've survived.</p>
            <p>We know nobody is coming to save us.</p>
            <p>So we built something.</p>
          </div>
        </div>

        {/* OPENING SECTION */}
        <div className="max-w-3xl mx-auto px-6 mt-16 text-center">
          <h1 className="text-[clamp(2.2rem,8vw,4rem)] font-bold leading-[1.05] tracking-tight">
            Black Men Have Waited Long Enough.
          </h1>
          
                    {/* Doorway to Movement - cinematic portal */}
          <div className="mt-6 animate-fadeInSlow">
            <a
              href="/Prophecy/movement"
              className="inline-block text-lg font-medium
                         text-orange-300/90 hover:text-orange-300
                         bg-orange-300/25 hover:bg-orange-300/30
                         px-4 py-2 rounded-md
                         shadow-[0_0_14px_rgba(217,119,6,0.22)]
                         hover:shadow-[0_0_18px_rgba(217,119,6,0.28)]
                         backdrop-blur-[1px]
                         transition-all duration-300 ease-out
                         hover:-translate-y-[1px]"
            >
              Skip ahead to the Movement →
            </a>
          </div>
          
          <div className="mt-12">
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We know what we survived.
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mt-2 leading-relaxed">
              We know what this country took.
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mt-2 leading-relaxed">
              Nobody is coming to save us.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-green-400 mt-8">
              So we built something.
            </p>
          </div>
        </div>

        {/* THESIS REVEAL */}
        <div className="max-w-3xl mx-auto px-6 mt-24 md:mt-28 text-center">
          <div className="gold-divider mt-8 mb-6" />
          <div className="flex justify-center mt-6 mb-4">
            <img
              src="/images/trilogy/BW_PHIERS_Logo_NO_Words.png"
              alt="PHIERS"
              className="w-16 h-auto md:w-20 opacity-80"
            />
          </div>
          <p className="text-xl sm:text-2xl md:text-4xl font-black tracking-[0.22em] md:tracking-[0.3em] text-green-400 mt-6">
            P · H · I · E · R · S
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-3 leading-relaxed">
            Power Held In Every Rep's Seat.
          </p>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            The Founders said Congress answers to the people.
          </p>
          <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto leading-relaxed">
            PHIERS is about making that true again.
          </p>
          <p className="text-md text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Organized voters.<br />
            Visible communities.<br />
            Coordinated action.<br />
            Elected officials who understand they can be replaced.
          </p>
          <p className="text-xl font-light text-gray-200 mt-8">
            Peaceful. Lawful. Achievable.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-green-400 mt-5">
            With PHIERS, it becomes real.
          </p>
          <p className="text-md text-gray-400 mt-2 italic">
            Say it again. Let it land.
          </p>
          <p className="text-2xl font-bold text-white mt-2">
            Power Held In Every Rep's Seat.
          </p>
        </div>

        {/* Breathing pause */}
        <div className="py-20 text-center">
          <p className="text-3xl md:text-5xl font-bold text-white">We survived.</p>
        </div>

        {/* SANKOFA */}
        <div className="max-w-3xl mx-auto px-6 mt-24 md:mt-32">
          <p className="text-sm tracking-[0.3em] text-gray-400">SANKOFA</p>
          <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-bold mt-3 leading-[1.2] text-balance">
            We don't look back to stay there.<br />We look back to bring something forward.
          </h2>
          <div className="mt-8 max-w-xs mx-auto">
            <Image
              src="/images/trilogy/sankofa.jpg"
              alt="Sankofa symbol"
              width={400}
              height={400}
              className="w-full rounded-lg object-contain opacity-90"
            />
            <p className="text-center text-gray-500 text-xs mt-2 italic">Look back to move forward.</p>
          </div>
          <div className="mt-8 space-y-5 text-gray-300 leading-relaxed">
            <p>After Reconstruction, they burned what we built.</p>
            <p>We rebuilt.</p>
            <p>
              After Jim Crow.<br />
              After Convict Leasing.<br />
              After COINTELPRO.<br />
              After every system designed to erase us — we rebuilt.
            </p>
            <p className="text-xl md:text-2xl text-white font-semibold text-center py-4">
              Every. Single. Time.
            </p>
            <p>That is not myth.</p>
            <p>That is inheritance.</p>
            <p>We are the continuation of them.</p>
            <div className="mt-10 text-center">
              <p className="text-gray-200 text-base md:text-lg italic max-w-2xl mx-auto leading-relaxed">
                “In the lineage of Kwanzaa we find our compass – an inheritance of unity, purpose, and collective will. Without it, we do not survive.”
              </p>
            </div>
          </div>
        </div>

        {/* STRATEGIC RECONSTRUCTION */}
        <div className="max-w-5xl mx-auto px-6 mt-24 md:mt-32 text-center">
          <div className="mb-10 w-full max-w-3xl mx-auto">
            <Image
              src="/images/trilogy/Strategic_Brotha_Playing_Chess-Manhattan_Project.jpg"
              alt="Strategic brother playing chess"
              width={1600}
              height={900}
              className="w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <h2 className="text-[clamp(2rem,7vw,3rem)] font-bold leading-[1.08]">
            A Strategic Reconstruction.
          </h2>
          <p className="text-gray-400 uppercase tracking-[0.2em] text-xs md:text-sm mt-4">
            A disciplined rebuild
          </p>
          <section className="mt-24 mb-24">
            <img
              src="/images/trilogy/organized-men-future.jpg"
              alt="Black men gathered around a table reviewing maps and data screens in a strategic planning session"
              className="w-full md:w-11/12 mx-auto rounded-lg object-cover shadow-lg"
            />
          </section>
          <p className="text-gray-300 mt-4 text-center leading-relaxed">
            Not noise.<br />
            Not drift.<br />
            Not performance.
          </p>
          <p className="text-xl text-white mt-8 leading-relaxed">
            Discipline.<br />
            Brotherhood.<br />
            Coordination.<br />
            Structure.
          </p>
          <p className="text-xl font-semibold text-white mt-8 text-center leading-relaxed">
            We will build so effectively<br />
            the world is forced to reevaluate us.
          </p>
        {/* Breathing pause */}
        <div className="py-20 text-center">
          <p className="text-3xl md:text-5xl font-bold text-white">This is where we build.</p>
        </div>
        <div className="text-center mt-0 mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/Prophecy/movement"
              className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-lg transition text-base"
            >
              ← THE MOVEMENT
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition border border-gray-500 text-base"
            >
              Ask a question →
            </button>
          </div>
        </div>
        </div>

        {/* 400 YEARS / GENESIS */}
        <section className="max-w-5xl mx-auto px-6 mt-28 md:mt-36 text-center">
          <div className="mb-12">
            <Image
              src="/images/trilogy/400-years-prophesy_sentence-served.jpg"
              alt="400 years — sentence served"
              width={1400}
              height={850}
              className="w-full rounded-xl object-cover shadow-2xl"
              priority
            />
          </div>
          <div className="mt-10 mb-6">
            <p className="uppercase tracking-[0.3em] text-gray-300 text-sm mb-6 mt-2">
              Genesis 15:13–14
            </p>
            <div className="max-w-3xl mx-auto border-y border-gray-800 py-12 md:py-14">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-100 font-light">
                “Know for certain<br />
                that your descendants will be strangers<br />
                in a land not their own…<br /><br />
                where they will be enslaved<br />
                and mistreated<br />
                for four hundred years.<br /><br />
                But afterward,<br />
                they will leave<br />
                with great substance.”
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-6 italic">The sentence was served.</p>
          <p className="text-lg md:text-xl text-gray-300 mt-10 max-w-2xl mx-auto leading-relaxed">
            Endurance into structure.<br />
            Memory into coordination.<br />
            Pressure into leverage.<br />
            Survival into forward motion.
          </p>
        </section>

        {/* WHY BLACK MEN – observational */}
        <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
          <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
            Why Black men are centered here.
          </h2>
          <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
            Because history placed a distinct burden on Black men.
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
            Extracted from.<br />
            Criminalized.<br />
            Feared.<br />
            Discarded.
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
            And still expected to carry what others depended on.
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
            And still — we built.
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
            That history produced something:<br />
            endurance, adaptability, discipline,<br />
            and the ability to build under pressure.
          </p>
        </div>

        <div className="h-12" />

        {/* PRESSURE FORGED */}
        <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
          <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
            Pressure did not only wound us. It trained us.
          </h2>
          <ul className="list-disc pl-6 mt-6 space-y-3 text-gray-300 text-base md:text-lg leading-relaxed">
            <li>To think under strain.</li>
            <li>To build without support.</li>
            <li>To read danger early.</li>
            <li>To protect what matters.</li>
            <li>To improvise under constraint.</li>
            <li>To endure what should have ended us.</li>
          </ul>
          <p className="text-base md:text-lg text-gray-300 mt-6 leading-relaxed">
            This does not glorify suffering.
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-2 leading-relaxed">
            It means suffering did not get the final word.
          </p>
          <p className="text-xl text-white mt-8 leading-relaxed">
            Something was forged anyway.
          </p>
          <section className="mt-32 mb-32">
            <img
              src="/images/trilogy/forged-under-pressure.jpg"
              alt="Men working in an industrial workshop welding and building with precision and teamwork"
              className="w-full mx-auto rounded-lg object-cover shadow-lg"
            />
          </section>

          {/* Micro-threshold */}
          <p className="text-center text-green-400/70 text-sm md:text-base tracking-wide my-16 md:my-20">
            THIS IS WHERE STRUCTURE BEGINS.
          </p>
        </div>

        {/* HEALING IS STRATEGIC */}
        <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
          <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
            Healing Is Strategic
          </h2>
          <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
            Broken men can be manipulated.<br />
            Disconnected men drift.<br />
            Unhealed men react.<br />
            Isolated men forget themselves.
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
            But grounded men can build.<br />
            Disciplined men can coordinate.<br />
            Clear men can carry weight without collapsing under it.
          </p>
          <p className="text-center text-gray-300 italic mt-12">
            Silence has been the tax on survival long enough.
          </p>
        </div>

        {/* Breathing pause */}
        <div className="py-20 text-center">
          <p className="text-3xl md:text-5xl font-bold text-white">Now the work begins.</p>
        </div>

        {/* PHIERS ACRONYM BREAK */}
        <PhiersAcronymBreak />

        {/* WHY PHIERS */}
        <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
          <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
            Why PHIERS
          </h2>
          <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
            PHIERS is not built on outrage.
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-2 leading-relaxed">
            Not performance.<br />
            Not begging.<br />
            Not waiting for permission.
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
            Scattered men get ignored.
          </p>
          <p className="text-xl font-semibold text-white mt-4">
            Organized men change outcomes.
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-6 leading-relaxed">
            Not men who agree on everything.
          </p>
          <p className="text-base md:text-lg text-gray-300 mt-2 leading-relaxed">
            Men disciplined enough to build together anyway.
          </p>
          <p className="text-xl font-light text-green-400 mt-8 leading-relaxed">
            Too coordinated to ignore.<br />
            Too aligned to dismiss.
          </p>
          <p className="text-2xl font-bold text-white mt-6">Power Held In Every Rep's Seat.</p>
        </div>

        {/* QUIET FUNCTIONAL SECTION – contrast to mythic */}
        <section className="max-w-3xl mx-auto px-6 my-12">
          <div className="border-l-2 border-green-400/30 pl-6">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">What this means for you, tomorrow</p>
            <p className="text-gray-300 text-base leading-relaxed">
              You explore the framework. You ask questions. You decide for yourself. That's it. No pledge. No pressure. Just clarity.
            </p>
          </div>
        </section>

        {/* PRACTICAL REALISM */}
        <section className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl px-6 py-10 md:px-8 md:py-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What does this mean in practice?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-300 text-base">
              <div>• Local organization</div>
              <div>• Economic coordination</div>
              <div>• Civic pressure</div>
              <div>• Mentorship</div>
              <div>• Shared infrastructure</div>
              <div>• Mutual accountability</div>
              <div>• Political literacy</div>
              <div>• Long‑term institution building</div>
            </div>
            <p className="text-gray-400 mt-6 italic">Not theory. Not branding. A rebuild you can touch.</p>
          </div>
        </section>

        {/* MIDPOINT CTA */}
        <section className="max-w-3xl mx-auto px-6 mt-20 md:mt-24 text-center">
          <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl px-6 py-10 md:px-10 md:py-12">
            <p className="text-xl md:text-2xl text-gray-200 font-semibold">
              If you’ve been waiting for structure, this is the threshold. You don’t have to wait to finish reading.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="inline-block bg-transparent border border-gray-600 text-white font-bold py-3 px-8 rounded-full hover:border-gray-400 transition cursor-pointer"
              >
                Ask a question →
              </button>
            </div>
          </div>
        </section>

        {/* FOUNDER CREDIBILITY ACCORDION */}
        <div className="max-w-3xl mx-auto px-6 mt-24 md:mt-28">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">WHY THIS IS NOT THEORY</h2>
          <p className="text-gray-400 mb-4 italic">
            PHIERS was not conceived in theory. It was forged under pressure — through years of building
            structure while encountering resistance, suppression, and repeated attempts to derail serious work.
          </p>
          <Accordion
            triggerLabel="Open to read the fuller story"
            className="w-full text-left border border-gray-800 bg-[#0d0d0d] px-5 md:px-6 py-4 md:py-5 rounded-xl hover:border-gray-600 transition"
          >
            <div className="space-y-4 text-gray-300 leading-relaxed pt-4 pb-2">
              <p>I have been part of a real-world effort to help bring forward high-impact solutions under extreme pressure.</p>
              <p>I have seen breakthrough work delayed, buried, captured, stripped from the people who built it, and sabotaged.</p>
              <p>That taught me two things:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>serious solutions require disciplined structure</li>
                <li>truth without organized force gets buried</li>
              </ul>
              <p>PHIERS is built with that lesson in mind.</p>
              <p>It is designed to solve multiple problems at once for different audiences with shared unmet needs.</p>
              <p className="italic">That is part of what makes Power Held In Every Rep's Seat so important: it is not a narrow fix, but a structural one.</p>
            </div>
          </Accordion>
          <section className="mt-28 mb-28">
            <img
              src="/images/trilogy/documentary-record-wall.jpg"
              alt="Historical documents, maps, and newspapers arranged on a table representing archival record"
              className="w-full md:w-4/5 mx-auto rounded-lg object-cover shadow-md"
            />
          </section>
        </div>

        {/* RECORD ACCORDION – shortened, rhythmic */}
        <div className="max-w-3xl mx-auto px-6 mt-16 md:mt-20">
          <Accordion
            triggerLabel="THE RECORD THEY THOUGHT TIME WOULD ERASE"
            subtleHint="We know the record. We are not trapped in it."
            className="w-full text-left border border-gray-800 bg-[#0d0d0d] px-5 md:px-6 py-4 md:py-5 rounded-xl hover:border-gray-600 transition"
          >
            <div className="space-y-4 text-gray-300 leading-relaxed pt-4 pb-2">
              <p>We know what was weakened, stripped, distorted, criminalized, scapegoated, and forgotten.</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-300 text-sm mt-2">
                <div>Redlining.</div><div>Convict leasing.</div>
                <div>Jim Crow.</div><div>COINTELPRO.</div>
                <div>Mass incarceration.</div><div>VRA gutted.</div>
                <div>Economic abandonment.</div><div>School segregation.</div>
                <div>Media scapegoating.</div><div>Land theft.</div>
                <div>Family destabilization.</div><div>Political disposability.</div>
                <div>Erasure of contribution.</div><div>Still here.</div>
              </div>
              <p className="mt-3 italic text-gray-400">We know the record. We are not trapped in it.</p>
            </div>
          </Accordion>
        </div>

        {/* LINEAGE IMAGE */}
        <section className="mt-32 mb-32 max-w-4xl mx-auto px-6">
          <img
            src="/images/trilogy/black-men-builders-lineage.jpg"
            alt="Composite portrait of generations of Black builders, craftsmen, and mentors across eras"
            className="w-full md:w-3/4 mx-auto rounded-lg object-cover shadow-md"
          />
        </section>

        {/* THIRD RECONSTRUCTION */}
        <div className="max-w-4xl mx-auto px-6 mt-24 md:mt-32 text-center">
          <p className="uppercase tracking-[0.35em] text-gray-500 text-sm mb-6">THE THIRD RECONSTRUCTION</p>
          <h2 className="text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.06] text-balance">
            They tried to erase the record.<br />
            But the work is still standing.
          </h2>
          <div className="mt-10 space-y-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <p>We built rail lines. Roads. Bridges. Ports. Cities.</p>
            <p>We kept America running while being told we were worth less than everyone else.</p>
            <p className="text-white font-semibold">But buried is not the same thing as gone.</p>
            <p>Now the country is entering another period of instability.<br />
              AI is replacing jobs. Institutions are losing trust.<br />
              Communities are fragmenting.</p>
            <p>And for the first time in a long time, millions of people are starting to realize:</p>
            <p className="text-xl md:text-2xl text-green-400 font-semibold">survival without structure is not enough.</p>
            <p>That is why PHIERS exists.</p>
          </div>
          <p className="text-gray-300 text-lg font-semibold mb-4 mt-8">PHIERS is built around seven structural commitments:</p>
          <div className="mt-4 inline-block text-left">
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>coordination</li><li>political leverage</li><li>community stabilization</li>
              <li>brotherhood</li><li>economic alignment</li><li>mutual accountability</li>
              <li>long-term reconstruction</li>
            </ul>
          </div>
          <div className="mt-10 space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
            <p className="text-white font-semibold">
              This is about building something so useful, so disciplined, and so effective
              that the world has to reevaluate who Black men really are.
            </p>
            <p>Not through slogans. Through results.</p>
            <p className="text-2xl md:text-3xl font-light text-green-400 pt-2">
              The Third Reconstruction begins with FBA men.
            </p>
          </div>
        </div>

        {/* RECONSTRUCTION BUILDERS IMAGE */}
        <section className="mt-36 mb-36 max-w-4xl mx-auto px-6">
          <img
            src="/images/trilogy/third-reconstruction-builders.jpg"
            alt="Historic black-and-white photo of Black industrial workers standing on a bridge structure"
            className="w-full mx-auto rounded-lg object-cover shadow-lg"
          />
        </section>

        {/* THRESHOLD with inheritance line */}
        <div className="h-20" />
        <div className="max-w-2xl mx-auto px-6 mt-28 md:mt-36 text-center">
          <p className="text-[clamp(1.5rem,5vw,2rem)] text-gray-200 font-light leading-[1.25] mb-8">
            What you have read so far is the inheritance.<br />
            What comes next is the forge.
          </p>
          <div className="gold-divider mb-8" />
          <p className="uppercase tracking-[0.28em] text-gray-500 text-xs md:text-sm">FROM INHERITANCE TO FORGE</p>
          
          {/* Highlighted text - cleaner styling */}
          <div className="mt-12 mb-16">
            <p className="text-amber-400 font-semibold text-lg md:text-xl leading-relaxed">
              Not branding. Not mythology.
            </p>
            <p className="text-amber-400 font-semibold text-lg md:text-xl leading-relaxed mt-1">
              The pressure that produced the structure.
            </p>
          </div>

          {/* MOVEMENT BUTTON - refined */}
          <div className="flex flex-col items-center justify-center">
            <a
              href="/Prophecy/movement"
              className="bg-amber-600 hover:bg-amber-500 text-white font-semibold tracking-tight px-8 py-3 rounded-md transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_0_12px_rgba(217,119,6,0.6)] active:opacity-80"
            >
              ← GO TO THE MOVEMENT
            </a>
            <p className="text-gray-500 text-sm mt-3 opacity-70">
              Built from pressure.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 my-12"></div>

        <div className="max-w-3xl mx-auto px-6 mt-8 text-center">
          <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl px-6 py-12 md:px-12 md:py-16">
            <p className="text-xl md:text-2xl text-gray-300 font-semibold">
              If you want to see how this becomes structure –<br />
              the code, the coordination, the accountability –<br />
              start here.
            </p>
            <p className="text-md text-gray-400 mt-6">We're not asking for commitment. Just curiosity.</p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-block bg-white text-black font-bold text-xl md:text-2xl py-4 px-12 rounded-full hover:bg-gray-200 transition shadow-lg whitespace-nowrap mt-8 mx-auto cursor-pointer"
            >
              → Ask a question
            </button>
          </div>
        </div>

        <div className="text-center mt-8 mb-16 md:mb-20 px-6">
          <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
            Not to look backward. To prepare for what comes next.
          </p>
        </div>

       <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>A gift from Foundational Black American men to humanity. Built by Black men.</p>
         <p><a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">PHIERS.org →</a></p>
        <p className="mt-3 text-gray-600 text-xs">Participation is voluntary. PHIERS is a peaceful civic engagement effort.</p>
      </footer>

      {/* PHIERStorm Modal */}
      <PHIERStormModal open={showModal} onClose={() => setShowModal(false)} />

      <style>{`
        @keyframes fadeInModal {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInSlow {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInSlow {
          animation: fadeInSlow 0.9s ease-out both;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </div>
  );
}
  // END OF FILE: app/Prophecy/page.tsx