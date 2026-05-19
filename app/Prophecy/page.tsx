// FILE: app/Prophecy/page.tsx
// VERSION: 51.0 – Mid‑page Zoom CTA removed; quiet footer link added; no other deletions

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Accordion from './components/Accordion';

export default function ProphecyPage() {
  // Video play handler – robust version with createElement
  useEffect(() => {
    const videoArea = document.getElementById('video-click-area');
    if (!videoArea) return;
    let clicked = false;
    const handleClick = () => {
      if (clicked) return;
      clicked = true;
      const container = document.getElementById('video-container');
      const thumb = document.getElementById('video-thumbnail');
      const playBtn = document.getElementById('play-button');
      if (container && !container.hasChildNodes()) {
        const iframe = document.createElement('iframe');
        iframe.className = 'w-full h-full';
        iframe.src = 'https://www.youtube.com/embed/GwfhH8yDZQo?si=Up2Frm-uFcU2L1SW&autoplay=1&start=382';
        iframe.title = 'Why we do what we do';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
        if (thumb) thumb.style.display = 'none';
        if (playBtn) playBtn.style.display = 'none';
      }
    };
    videoArea.addEventListener('click', handleClick);
    return () => videoArea.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* TOP SECTION: LOGO + "For Us. By Us." */}
      <div className="text-center pt-8 pb-6 md:pt-10 md:pb-8">
        <div className="flex justify-center mb-4 relative">
          <div className="absolute inset-0 bg-green-400 rounded-full blur-3xl opacity-20 scale-110"></div>
          <img
            src="/images/trilogy/BW_PHIERS_Logo_NO_Words.png"
            alt="PHIERS Logo"
            className="w-24 h-auto md:w-32 relative z-10"
          />
        </div>
        <p className="text-sm md:text-lg tracking-[0.28em] md:tracking-[0.35em] uppercase text-gray-300 font-semibold">
          For Us. By Us.
        </p>
      </div>

      {/* VIDEO HERO – mobile‑optimized height */}
      <div className="w-full max-w-full overflow-hidden mt-2 md:mt-4">
        <div className="text-center mb-4 px-6">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-green-400 font-semibold">WATCH THIS FIRST</p>
        </div>
        <div className="w-full h-[34vh] sm:h-[42vh] md:h-[70vh] bg-black relative cursor-pointer group rounded-xl overflow-hidden" id="video-click-area">
          <div
            id="video-thumbnail"
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://img.youtube.com/vi/GwfhH8yDZQo/hqdefault.jpg")',
              backgroundSize: 'cover'
            }}
          />
          <div id="play-button" className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <img
              src="/images/Youtube_Play_Button.png"
              alt="Play video"
              className="w-16 h-16 md:w-20 md:h-20 cursor-pointer pointer-events-auto hover:opacity-80 transition mb-1"
              onClick={(e) => {
                e.stopPropagation();
                const area = document.getElementById('video-click-area');
                if (area) area.click();
              }}
            />
            <span className="text-gray-400 text-[10px] md:text-xs tracking-wide pointer-events-auto mt-1 opacity-70">
              tap to play
            </span>
          </div>
          <div id="video-container" className="absolute inset-0 w-full h-full"></div>
        </div>
        <div className="text-center mt-2"></div>
      </div>

      {/* INTRO SEQUENCE – isolated beat line */}
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
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mt-8 leading-relaxed">
          We know what we’ve survived. Yet we persist.
        </p>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mt-2 leading-relaxed">
          The systems that held us down are weaker than they look.
        </p>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mt-2 leading-relaxed">
          The pressure designed to break us made us stronger.
        </p>
        <p className="text-2xl md:text-3xl font-bold text-green-400 mt-8">
          Nobody is coming to save us.
        </p>
        <p className="text-lg text-gray-400 mt-6">
          So we breathe deep.<br />
          We remember who we are.<br />
          Then we move.
        </p>
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
          Power Held In Every Rep’s Seat.
        </p>

        <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
          The Founders said Congress answers to the people.<br />
          PHIERS is about making that true again.
        </p>

        <p className="text-md text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          In a democracy, pressure means organized voters,<br />
          visible communities, coordinated action —<br />
          and elected officials knowing they can be replaced.
        </p>

        <p className="text-xl font-light text-gray-200 mt-8">
          That’s it. Peaceful. Lawful. Achievable.
        </p>

        <p className="text-xl md:text-2xl font-semibold text-green-400 mt-5">
          With PHIERS, it’s inevitable.
        </p>

        <p className="text-md text-gray-400 mt-2 italic">
          Say it again. Let it land.
        </p>

        <p className="text-2xl font-bold text-white mt-2">
          Power Held In Every Rep’s Seat.
        </p>
      </div>

      {/* SANKOFA (hinge) */}
      <div className="max-w-3xl mx-auto px-6 mt-24 md:mt-32">
        <p className="text-sm tracking-[0.3em] text-gray-400">SANKOFA</p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-bold mt-3 leading-[1.2] text-balance">
          We don’t look back to stay there.<br />We look back to bring something forward.
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
          <p>After Reconstruction, they burned what we built. We rebuilt.</p>
          <p>After Jim Crow. After Convict Leasing and COINTELPRO.<br />After every system designed to make us disappear – we rebuilt.</p>
          <p className="text-xl md:text-2xl text-white font-semibold text-center py-4">
            Every. Single. Time.
          </p>
          <p>That’s not myth.<br />That’s inheritance.</p>
          <p>
            We are not disconnected from those men.<br />
            We are the continuation of them.<br />
            And what they forged under pressure – we carry forward now.
          </p>

          {/* Kwanzaa lineage – alluded, not explained */}
          <div className="mt-10 text-center">
            <p className="text-gray-200 text-base md:text-lg italic max-w-2xl mx-auto leading-relaxed">
              “In the lineage of Kwanzaa we find our compass – an inheritance of unity, purpose, and collective will. Without it, we do not survive.”
            </p>
          </div>
        </div>
      </div>

      {/* MANHATTAN PROJECT with chess image */}
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
          A Manhattan Project for Reconstruction.
        </h2>
        <p className="text-gray-400 uppercase tracking-[0.2em] text-xs md:text-sm mt-4">
          A disciplined rebuild
        </p>
        <p className="text-gray-300 mt-4 text-center leading-relaxed">
          Not noise. Not drift. Not performance.<br />A disciplined, long‑view build.<br />Brotherhood. Coordination. Structure. Proof.
        </p>
        <p className="text-gray-300 mt-6 text-center leading-relaxed">
          Most movements frame themselves around grievance.<br />Around opposition. Around moral accusation.
        </p>
        <p className="text-gray-300 mt-4 text-center leading-relaxed">This is different.</p>
        <p className="text-xl font-semibold text-white mt-4 text-center leading-relaxed">
          We will build so effectively that the world is forced to reevaluate us.<br />Not because we asked them to.<br />Because we left them no other choice.
        </p>
        <p className="text-2xl md:text-3xl font-light text-green-400 mt-10 leading-snug">
          We survived long enough to become dangerous again.
        </p>
        <p className="text-md text-gray-400 mt-4 text-center italic">
          This is what it looks like when survival becomes strategy.
        </p>
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
        <p className="text-gray-400 text-sm mt-2">Not forgotten. Not erased. Served.</p>
        <p className="text-lg md:text-xl text-gray-300 mt-10 max-w-2xl mx-auto leading-relaxed">
          If “substance” means anything,<br />
          it means more than survival.<br />
          It means carrying something out of that fire<br />
          that still matters now.
        </p>
        <p className="text-xl font-light text-white mt-8">
          Endurance into structure.<br />
          Memory into coordination.<br />
          Pressure into leverage.<br />
          Survival into forward motion.
        </p>
      </section>

      {/* WHY BLACK MEN */}
      <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
        <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
          Why Black men are centered here.
        </h2>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          Because history put a distinct weight on us.<br />
          Burdened. Extracted from. Blamed. Feared. Discarded.<br />
          And still expected to carry what others depended on.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          We carried labor, invention, service, discipline, rhythm, courage, and force<br />
          through conditions meant to erase all of it.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          And still – we built.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          That matters.<br />
          Not because we need permission to say it.<br />
          Because it is true.
        </p>
      </div>

      {/* WHAT PRESSURE FORGED */}
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
          This does not glorify suffering.<br />
          It means suffering did not get the last word.<br />
          Something was forged anyway.
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
        <p className="text-xl md:text-2xl font-semibold text-white mt-8 text-center">
          Healing is not softness. It is preparation.
        </p>
      </div>

      {/* WHY PHIERS – before Zoom CTA */}
      <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
        <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
          Why PHIERS
        </h2>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          PHIERS is not built on outrage for its own sake.<br />
          Not performance. Not begging.<br />
          Not waiting for respect to be handed over.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          Stay quiet. Stay divided. Stay tired.<br />
          That’s what they expect.
        </p>
        <p className="text-xl font-semibold text-white mt-5">Scattered men get ignored.<br />Organized men change outcomes.</p>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          Not men who agree on every sentence.<br />
          Not men who never question anything.
        </p>
        <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
          Men serious enough to sharpen a path together –<br />
          and disciplined enough to move once they see it clearly.
        </p>
        <p className="text-xl font-light text-green-400 mt-5 leading-relaxed">
          We are becoming too organized,<br />
          too disciplined,<br />
          and too useful to ignore.
        </p>
        <p className="text-2xl font-bold text-white mt-6">Power Held In Every Rep’s Seat.</p>
      </div>

      {/* PRIMARY CTA: ZOOM – REMOVED (mid‑page CTA deleted) */}

      {/* FOUNDER CREDIBILITY ACCORDION */}
      <div className="max-w-3xl mx-auto px-6 mt-24 md:mt-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">WHY THIS IS NOT THEORY</h2>
        <p className="text-gray-400 mb-4 italic">
          PHIERS was not conceived in theory. It was forged under pressure — in the years when one man 
          was building structure while powerful people, organizations and institutions tried to break him for telling the truth.
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
            <p className="italic">That is part of what makes Power Held In Every Rep’s Seat so important: it is not a narrow fix, but a structural one.</p>
          </div>
        </Accordion>
      </div>

      {/* RECORD ACCORDION (receipts) */}
      <div className="max-w-3xl mx-auto px-6 mt-16 md:mt-20">
        <Accordion
          triggerLabel="THE RECORD THEY THOUGHT TIME WOULD ERASE"
          subtleHint="We know the record. We are not trapped in it."
          className="w-full text-left border border-gray-800 bg-[#0d0d0d] px-5 md:px-6 py-4 md:py-5 rounded-xl hover:border-gray-600 transition"
        >
          <div className="space-y-4 text-gray-300 leading-relaxed pt-4 pb-2">
            <p>We know what was weakened, stripped, distorted, criminalized, scapegoated, and forgotten.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Voting protections weakened</li><li>Districts redrawn</li><li>Economic abandonment</li><li>Media scapegoating</li>
              <li>Family destabilization</li><li>Criminalization patterns</li><li>Political disposability</li><li>Erasure of contribution</li>
            </ul>

            {/* Chronological catalog */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-gray-300 font-semibold mb-3">No other group in America had to survive:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Black Codes (1865–1866)</li>
                <li>Convict leasing (post‑13th Amendment – 1941)</li>
                <li>Jim Crow laws (1877–1960s)</li>
                <li>Redlining (1930s–1968)</li>
                <li>Sundown towns (late 19th century – present)</li>
                <li>COINTELPRO (1956–1971)</li>
                <li>Assassinations of leaders (e.g., Medgar Evers, Malcolm X, MLK, Fred Hampton)</li>
                <li>Crack epidemic (1980s) – CIA‑linked allegations</li>
                <li>Mass incarceration (1980s–present)</li>
                <li>School segregation (de jure then de facto)</li>
                <li>Destruction of 60+ Black towns (late 19th – early 20th century)</li>
                <li>GI Bill exclusion (1944–1946)</li>
                <li>FHA loan denial (1930s–1960s)</li>
                <li>Police lynchings (post‑Reconstruction – present)</li>
                <li>Media demonization (19th century – present)</li>
                <li>Land theft from Black farmers (20th century)</li>
              </ul>
            </div>
            <p className="mt-3 italic text-gray-400">We know the record. We are not trapped in it.</p>
          </div>
        </Accordion>
      </div>

      {/* THIRD RECONSTRUCTION BRIDGE – thesis chamber */}
      <div className="max-w-4xl mx-auto px-6 mt-24 md:mt-32 text-center">
        <p className="uppercase tracking-[0.35em] text-gray-500 text-sm mb-6">THE THIRD RECONSTRUCTION</p>
        <h2 className="text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.06] text-balance">
          They tried to erase the record.<br />
          But the work is still standing.
        </h2>
        <div className="mt-10 space-y-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <p>
            We built rail lines.<br />
            Roads. Bridges. Ports. Cities.<br />
            We laid track, poured steel, moved freight, cleaned streets,
            engineered systems, designed machines, raised skylines,
            fought wars, built industries, and kept America running
            while being told we were worth less than everyone else.
          </p>
          <p>And when the history got rewritten, much of that contribution got buried with it.</p>
          <p className="text-white font-semibold">But buried is not the same thing as gone.</p>
          <p>
            The proof is everywhere.<br />
            In the infrastructure.<br />
            In the culture.<br />
            In the inventions.<br />
            In the endurance.<br />
            In us.
          </p>
          <p>Now the country is entering another period of instability.</p>
          <p>
            AI is replacing jobs.<br />
            Institutions are losing trust.<br />
            Communities are fragmenting.<br />
            The systems many people depended on are beginning to fail the very people who believed in them most.
          </p>
          <p>And for the first time in a long time, millions of people are starting to realize:</p>
          <p className="text-xl md:text-2xl text-green-400 font-semibold">
            survival without structure is not enough.
          </p>
          <p>That is why PHIERS exists.</p>
          <p>
            PHIERS is not a protest movement.<br />
            It is an ecosystem designed to solve multiple problems at once:
          </p>
        </div>

        <div className="mt-8 inline-block text-left">
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>coordination</li>
            <li>political leverage</li>
            <li>community stabilization</li>
            <li>brotherhood</li>
            <li>economic alignment</li>
            <li>mutual accountability</li>
            <li>long-term reconstruction</li>
          </ul>
        </div>

        <div className="mt-10 space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
          <p>This is not about asking to be seen.</p>
          <p className="text-white font-semibold">
            This is about building something so useful, so disciplined, and so effective
            that the world has to reevaluate who Black men really are.
          </p>
          <p>Not through slogans.<br />Through results.</p>
          <p className="text-2xl md:text-3xl font-light text-green-400 pt-2">
            The Third Reconstruction starts with organized men and durable structure.
          </p>
          <p className="text-lg text-gray-400 italic">Join the Zoom call to learn what comes next.</p>
        </div>
      </div>

      {/* THRESHOLD: FROM INHERITANCE TO FORGE */}
      <div className="max-w-2xl mx-auto px-6 mt-28 md:mt-36 text-center">
        <div className="gold-divider mb-8" />
        <p className="uppercase tracking-[0.28em] text-gray-500 text-xs md:text-sm">
          FROM INHERITANCE TO FORGE
        </p>

        <p className="text-[clamp(1.5rem,5vw,2rem)] text-gray-200 font-light leading-[1.25] mt-6">
          What you have read so far is the inheritance.<br />
          What comes next is the forge.
        </p>

        <p className="text-base md:text-lg text-gray-400 leading-relaxed mt-6 max-w-xl mx-auto">
          Not branding. Not mythology.<br />
          The pressure that produced the structure.
        </p>
      </div>

      {/* MOVED ZOOM CALL VIDEO (now at bottom) – THIS SECTION REMAINS */}
      <div className="max-w-3xl mx-auto px-6 mt-16 md:mt-20 text-center">
        <div className="gold-divider" />
        <h2 className="text-2xl md:text-3xl font-bold mt-8">Join the Zoom Call</h2>
        <div className="gold-divider mt-10" />
      </div>

      {/* SECONDARY CTA – JOIN FOUNDING 1500 (quieter) */}
      <div className="max-w-3xl mx-auto px-6 mt-16 md:mt-20 text-center">
        <p className="text-xl text-gray-200 mb-2">If this makes sense to you, step closer.</p>
        <a
          href="/zoom"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-full transition shadow-md whitespace-nowrap mt-4"
        >
          JOIN THE FOUNDING 1500
        </a>
      </div>

      {/* TERTIARY CTA – MOVEMENT (the build) */}
      <div className="max-w-3xl mx-auto px-6 mt-28 md:mt-36 text-center">
        <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl px-6 py-12 md:px-12 md:py-16">
          <p className="text-xl md:text-2xl text-gray-300 font-semibold">
            If you want to see how this becomes structure –<br />
            the code, the coordination, the accountability –<br />
            enter the Movement.
          </p>
          <p className="text-md text-gray-400 mt-6">The Movement is the build.</p>
          <Link
            href="/Prophecy/movement"
            className="inline-block bg-white text-black font-bold text-xl md:text-2xl py-4 px-12 rounded-full hover:bg-gray-200 transition shadow-lg whitespace-nowrap mt-8 mx-auto"
          >
            → Enter the Movement
          </Link>
        </div>
      </div>

      {/* FINAL LINE – closing beat */}
      <div className="text-center mt-20 md:mt-24 mb-20 md:mb-24 px-6">
        <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
          If you’re serious – step forward.
        </p>
      </div>

      {/* FOOTER – with quiet Zoom link added */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <div className="mb-4">
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Step into the room</p>
          <Link
            href="/Prophecy/join"
            className="text-green-400 text-sm underline hover:text-green-300 transition inline-block"
          >
            Join the public working session →
          </Link>
        </div>
        <p>Built by Black men. For everyone this country has failed to protect.</p>
        <p className="mt-2">PHIERS.org →</p>
      </footer>
    </div>
  );
}
// END OF FILE: app/Prophecy/page.tsx