// FILE: app/For_Black_Men/page.tsx
// VERSION: 3.0 — Structured with micro-headers, consistent image sizing, mobile-optimized

'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Accordion from '@/app/Prophecy/components/Accordion';
import ProphecyImage from '@/app/Prophecy/components/ProphecyImage';
import QuietZone from '@/app/Prophecy/components/QuietZone';

export default function ForBlackMenPage() {
  const startRef = useRef<HTMLDivElement>(null);
  const [showTrustModal, setShowTrustModal] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* STICKY HEADER */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/Prophecy">
            <Image
              src="/images/trilogy/PHIERS_Logo_BW.png"
              alt="PHIERS"
              width={48}
              height={48}
              className="w-10 h-auto md:w-12 opacity-70 hover:opacity-90 transition"
              priority
            />
          </Link>
          <Link href="/Prophecy" className="text-gray-400 text-sm hover:text-white transition">
            ← Back to doors
          </Link>
        </div>
      </div>

      {/* TRUST & PARTICIPATION MODAL */}
      {showTrustModal && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowTrustModal(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setShowTrustModal(false);
          }}
        >
          <div className="relative max-w-2xl w-full bg-[#0d0d0d] border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <p className="text-amber-400 text-sm font-semibold mb-4">
              Before we go further — we used to lead with a petition. We don't anymore.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Too many brothers said the same thing:
            </p>
            <p className="text-white italic text-lg mb-4">
              "Before I sign anything, I need to know exactly what you're doing with my information."
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              They were right to ask. So here it is — plain language, no fine print.
            </p>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed mb-6">
              <p><span className="text-amber-400 font-bold">1.</span> Nothing you share is public. Not your name. Not your email. Not your answers. We don't post it. We don't sell it. We don't pass it around.</p>
              <p><span className="text-amber-400 font-bold">1a.</span> You can participate anonymously if you choose.</p>
              <p><span className="text-amber-400 font-bold">2.</span> Your email is optional. Want updates? Leave it. Don't? Leave it blank. You're still welcome here either way.</p>
              <p><span className="text-amber-400 font-bold">3.</span> If an elected official ever asks whether Black men in their district are paying attention — we give them a number, not a list. A headcount, not identities. That's it.</p>
              <p><span className="text-amber-400 font-bold">4.</span> This is not surveillance. We're not tracking you. We're not building profiles. This is a peaceful, lawful, transparent effort to help regular people get the accountability we've been denied for generations.</p>
              <p><span className="text-amber-400 font-bold">5.</span> If anything feels off — ask. Push back. Challenge it. You deserve straight answers. You do not need to agree with PHIERS to participate.</p>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Only engage when you feel fully comfortable with what we're doing and why.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              And if you're never comfortable — that's okay too. This only works if it's real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-lg transition text-center"
              >
                I'm ready — ask me →
              </a>
              <button
                onClick={() => setShowTrustModal(false)}
                className="inline-block bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-semibold py-3 px-8 rounded-lg transition"
              >
                Not yet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========== SECTION 1: OPENING ========== */}
      <div ref={startRef} className="max-w-3xl mx-auto px-6 text-center mt-32 scroll-mt-20 pt-16">
        <div className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-4">🜂 THE OPENING</div>
        <h1 className="text-[clamp(2.2rem,8vw,4rem)] font-bold leading-[1.05] tracking-tight">
          Black Men Have Waited Long Enough.
        </h1>
      </div>

      {/* Image 1 - Strategic Brother */}
      <ProphecyImage 
        src="/images/trilogy/Strategic_Brotha_Playing_Chess-Manhattan_Project.jpg" 
        alt="Strategic brother playing chess" 
        priority 
        tier="medium"
      />
      <QuietZone />

      {/* "We Need To Build Again" - now under the image */}
      <div className="max-w-3xl mx-auto px-6 text-center mt-8">
        <h2 className="text-[clamp(1.8rem,6vw,2.8rem)] font-bold leading-[1.1]">
          We Need To Build Again.
        </h2>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Not noise. Not drifting. Not looking busy.
        </p>
        <p className="text-white text-xl md:text-2xl font-bold mt-6">
          Not symbolism. <span className="text-green-400">REAL solutions.</span>
        </p>
        
        {/* Tag cloud - mobile friendly */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 max-w-3xl mx-auto">
          {['Discipline', 'Brotherhood', 'Coordination', 'Accountability', 'Structure', 'Leverage'].map((item) => (
            <div key={item} className="bg-[#1a2a3a]/80 border border-green-400/30 rounded-md px-3 py-1.5 md:px-4 md:py-1.5">
              <p className="text-green-400 text-sm md:text-base font-bold">{item}</p>
            </div>
          ))}
        </div>
        
        <p className="text-white text-lg md:text-xl font-light mt-10 max-w-3xl mx-auto leading-relaxed">
          This is where we stop reacting.<br />
          We are building tight enough and clean enough<br />
          that "those folks" will have to rethink<br />
          everything they thought they knew about us.
        </p>
      </div>

      {/* Divider */}
      <ProphecyImage 
        src="/images/trilogy/Prophecy_Eye.png" 
        alt="Prophecy Eye" 
        tier="small"
        className="max-w-[100px] mx-auto my-12"
      />
      <QuietZone height="h-4 md:h-6" />

      {/* ========== SECTION 2: THE PROPHECY ========== */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-3">🜂 THE PROPHECY WASN'T METAPHOR</div>
        <p className="text-gray-100 text-base sm:text-lg md:text-xl font-medium tracking-wide">
          It was a timeline.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-10 mb-8 text-center">
        <p className="text-amber-500/70 text-xs sm:text-sm mb-6 tracking-widest uppercase font-mono">
          Genesis 15:13–14
        </p>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-100 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
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

      <div className="max-w-4xl mx-auto px-6 mt-6 mb-8 text-center">
        <p className="text-green-400/90 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
          Substance becomes leverage. Leverage becomes respect.
        </p>
      </div>

      {/* Image 2 - 400 Years */}
      <ProphecyImage 
        src="/images/trilogy/400-years-prophesy_sentence-served.jpg" 
        alt="400 years — sentence served" 
        tier="small"
      />
      <QuietZone />

      <div className="max-w-3xl mx-auto px-6 mt-6 mb-12 text-center">
        <p className="text-gray-400 text-sm italic tracking-wide">
          Four hundred years is a long time to carry a burden.
        </p>
        <div className="w-16 h-px bg-green-400/30 mx-auto my-6" />
        <p className="text-white text-2xl md:text-3xl font-semibold">
          We carried it anyway.
        </p>
        <p className="text-white text-xl md:text-2xl font-light mt-6">
          Now, we're here.
        </p>
        <div className="w-12 h-px bg-green-400/20 mx-auto my-8" />
        <div className="space-y-2 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          <p>Endurance turned into structure.</p>
          <p>Memory turned into coordination.</p>
          <p>Pressure turned into leverage.</p>
          <p className="text-green-400/80 font-semibold">Survival turned into forward motion.</p>

          <div className="w-12 h-px bg-green-400/20 mx-auto my-8" />
          <p className="text-white text-xl md:text-2xl font-light italic">
            Not all at once.
          </p>
          <p className="text-white text-xl md:text-2xl font-light italic">
            One disciplined man at a time.
          </p>
          <p className="text-green-400 text-xl md:text-2xl font-semibold mt-2">
            Then fifteen hundred.
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-300 text-base md:text-lg italic">The question is what we do with it.</p>
          <p className="text-gray-300 text-base md:text-lg">History gave us endurance.</p>
          <p className="text-green-400 text-base md:text-lg font-semibold">The future requires coordination.</p>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-12 md:h-16" />

      {/* ========== SECTION 3: WHY BLACK MEN ========== */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-3">🜂 WHY BLACK MEN</div>
        <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
          Because we carried weight nobody else was asked to carry.
        </h2>
        <div className="mt-6 space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
          <p>Used. Feared. Hated. Disposable when convenient.</p>
          <p>And somehow we still built.</p>
          <p>That leaves marks. It also leaves wisdom.</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <ProphecyImage 
          src="/images/trilogy/sankofa.jpg" 
          alt="Sankofa symbol" 
          tier="tiny"
          className="max-w-[200px] mx-auto"
        />
        <p className="text-center text-gray-500 text-xs mt-0 italic">Sankofa — Look back to move forward.</p>
      </div>
      <QuietZone />

      {/* ========== SECTION 4: PRESSURE SHARPENED US ========== */}
      <div className="max-w-3xl mx-auto px-6 mt-16 md:mt-20">
        <div className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-3">🜂 PRESSURE DIDN'T JUST HURT US</div>
        <h2 className="text-[clamp(1.8rem,6.5vw,2.75rem)] font-bold leading-[1.1] text-balance">
          It sharpened us.
        </h2>
        
        {/* Image 3 - Forged Under Pressure */}
        <ProphecyImage 
          src="/images/trilogy/forged-under-pressure.jpg" 
          alt="Men working in an industrial workshop welding and building with precision and teamwork" 
          tier="hero"
        />
              
        <ul className="list-disc pl-5 mt-6 space-y-2 text-gray-300 text-base md:text-lg leading-relaxed">
          <li>To think under strain.</li>
          <li>To build without help.</li>
          <li>To read danger early.</li>
          <li>To protect what matters.</li>
          <li>To improvise when things change.</li>
          <li>To endure what should've ended us.</li>
        </ul>
        
        <p className="text-base md:text-lg text-gray-300 mt-6 leading-relaxed">
          That's not glorifying pain. It's saying pain didn't get the last word.
        </p>
        <p className="text-xl md:text-2xl text-white mt-6 leading-relaxed">
          Something got forged anyway.
        </p>
          <QuietZone />

        
        <div className="text-center my-12 md:my-16">
          <p className="text-green-400/60 text-sm md:text-base tracking-wide">🜂 THIS IS WHERE STRUCTURE BEGINS</p>
        </div>
      </div>

      {/* ========== SECTION 5: HEALING IS STRATEGIC ========== */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-3">🜂 HEALING IS STRATEGIC</div>
        
                {/* Image 4 - Healing Is Strategic */}
        <ProphecyImage 
          src="/images/trilogy/healing-is-strategic-reflection.jpg" 
          alt="Reflective stillness — Healing Is Strategic" 
          tier="tiny"
          priority 
          className="w-[33%]"
        />
        
      <div className="space-y-3 text-base md:text-lg text-gray-300 leading-relaxed">
        <p>Broken men get played.</p>
        <p>Disconnected men drift.</p>
        <p>Unhealed men react.</p>

        <p className="mt-4">Grounded men respond.</p>
        <p>Disciplined men coordinate.</p>
        <p>Accountable men stay aligned.</p>
        <p>Clear men carry weight.</p>
      </div>

        
        <p className="text-base md:text-lg text-gray-300 mt-8 leading-relaxed">
          That's why healing matters. Not as self-help. As infrastructure.
        </p>
        <p className="text-base md:text-lg text-green-400/60 mt-4 leading-relaxed italic text-center">
          And infrastructure gets built.
        </p>
      </div>

      {/* ========== SECTION 6: SANKOFA ========== */}
      <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-24">
        <div className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-3">🜂 SANKOFA</div>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-bold leading-[1.2] text-balance">
          We don't look back to stay stuck.<br />We look back to grab what they tried to take.
        </h2>
        
        <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
          <p>After Reconstruction, they burned what we built. We built again.</p>
          <p>After Jim Crow. After convict leasing. After COINTELPRO. After every system meant to erase us — we built again.</p>
          <p className="text-xl md:text-2xl text-white font-semibold text-center py-4">
            Every. Single. Time.
          </p>
        </div>
        
        {/* Image 6 - Ancestral Lineage */}
        <ProphecyImage 
          src="/images/trilogy/ancestral-lineage-black-men.jpg" 
          alt="Generational lineage — Every. Single. Time." 
          tier="small"
        />
        <QuietZone />
        
        <div className="space-y-3 text-gray-300 leading-relaxed">
          <p>That's not myth. That's inheritance.</p>
          <p>We're the continuation of them.</p>
        </div>
        
  <QuietZone />


        <div className="mt-10 text-center">
          <p className="text-gray-200 text-base md:text-lg italic max-w-2xl mx-auto leading-relaxed">
            “In the lineage of Kwanzaa we find our compass — unity, purpose, collective will.  
            Without that compass, we do not survive.”

          </p>
        </div>
      </div>

      {/* Divider to "Now the work begins" */}
      <div className="max-w-2xl mx-auto px-6 text-center mt-12">
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          That structure has a name.
        </p>
      </div>

      {/* Image 7 - Modern Coordination */}
      <ProphecyImage 
        src="/images/trilogy/modern-african-american-strategy-session.jpg" 
        alt="Modern coordination — Now the Work Begins" 
        tier="small"
      />
      <QuietZone />

      <div className="text-center mb-12">
        <p className="text-3xl md:text-5xl font-bold text-white">Now the work begins.</p>
      </div>

      {/* ========== SECTION 7: WHY PHIERS ========== */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-3">🜂 WHY PHIERS</div>
        
        <div className="space-y-3 text-base md:text-lg text-gray-300 leading-relaxed">
          <p>PHIERS isn't built on outrage.</p>
          <p>It isn't built on performance, begging or waiting for permission.</p>
          <p className="mt-4">Scattered men get ignored.</p>
          <p className="text-xl font-semibold text-white mt-2">Organized men change outcomes.</p>
          <p className="text-green-400 text-base md:text-lg font-medium mt-3">
            Fifteen hundred organized men can change outcomes that fifteen thousand scattered men cannot.
          </p>
          <p className="mt-4">Not men who agree on everything — men disciplined enough to build anyway.</p>
          <p className="text-xl font-light text-green-400 mt-6 leading-relaxed">
            Too coordinated to ignore.<br />Too aligned to dismiss.
          </p>
          <p className="text-2xl font-bold text-white mt-4">Power Held In Every Rep's Seat.</p>
          <p className="text-gray-300 text-base md:text-lg mt-3 leading-relaxed">
            That's the idea. Not domination. Accountability.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Elected officials should know when fifteen hundred engaged men in their district are paying attention.
          </p>
        </div>
      </div>

      {/* Image 8 - Organized Men */}
      <ProphecyImage 
        src="/images/trilogy/organized-men-future.jpg" 
        alt="Black men gathered around a table reviewing maps and data screens" 
        tier="small"
      />
      <QuietZone />

      {/* ========== SECTION 8: THE THIRD RECONSTRUCTION ========== */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-3">🜂 THE EVIDENCE THEY FEARED</div>
        
      <h2 className="text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.06] text-balance">
        They tried to erase the record.<br /><br />
        <span className="block text-[clamp(1.4rem,5vw,2.4rem)] font-semibold whitespace-nowrap">
          Our work is still standing.
        </span>
      </h2>

        
        <div className="mt-8 space-y-4 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <p>We built rail lines. Roads. Bridges. Ports. Cities.</p>
          <p>We kept this country running while being told we were worthless.</p>
          <p className="text-white font-semibold">Buried isn't gone.</p>
          <p>Now the country's unstable. AI taking jobs. Institutions losing trust. Communities breaking apart.</p>
          <p>And folks are finally realizing:</p>
          <p className="text-xl md:text-2xl text-green-400 font-semibold">survival without structure isn't enough.</p>
          <p>That's why PHIERS exists.</p>
          <div className="mt-4 space-y-2 text-green-400/80 text-base md:text-lg">
            <p>To turn our pain into focus.</p>
            <p>To turn attention into coordination.</p>
            <p>Coordination into leverage.</p>
            <p>And leverage into results.</p>
          </div>
        </div>
        
        <p className="text-gray-300 text-base md:text-lg font-semibold mb-4 mt-8">
          Coordination. Political leverage. Community stabilization. Brotherhood. Economic alignment. Mutual accountability. Long‑term reconstruction.
        </p>
        
        <div className="mt-8 space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
          <p className="text-white font-semibold">
            We're building something so useful, so disciplined, so effective — that the world has to rethink who Black men are.
          </p>
          <p>Not with slogans. Through results.</p>
          <p className="text-2xl md:text-3xl font-light text-green-400 pt-4">
            The Third Reconstruction starts with FBA men.
          </p>
        </div>
      </div>

      {/* Image 10 - Third Reconstruction Modern */}

      {/* Image 9 - Builders Lineage */}
      <ProphecyImage 
        src="/images/trilogy/black-men-builders-lineage.jpg" 
        alt="Composite portrait of generations of Black builders" 
        tier="medium"
      />
      <QuietZone />

      {/* ========== SECTION 9: WHAT YOU'VE BEEN FEELING ========== */}
      <div className="max-w-3xl mx-auto px-6 mt-12 md:mt-16 text-center">
        <div className="space-y-6">
          <p className="text-gray-400 text-sm italic tracking-wide">
            What you've been feeling has a name.
          </p>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-gray-300 font-light">Not a movement.</p>
            <p className="text-xl md:text-2xl text-gray-300 font-light">Not a philosophy.</p>
            <p className="text-xl md:text-2xl text-gray-300 font-light">A structure.</p>
          </div>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mt-4">
            Built by men who felt the same pressure you feel. To turn that pressure into something that doesn't break.
          </p>
          <div className="w-12 h-px bg-green-400/20 mx-auto mt-8" />
          <p className="text-xs text-gray-500 tracking-widest uppercase mt-6">
            What comes next is the blueprint.
          </p>
        </div>
      </div>

      {/* ========== SECTION 10: WE BUILT SOMETHING ========== */}
      <div className="max-w-2xl mx-auto px-6 mt-16 md:mt-20 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/PHIERS_Logo_BW.png"
            alt="PHIERS"
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16 opacity-80"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-3">
          We built something.
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-4">
          It has a name.
        </p>
        <div className="mb-4">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">The first goal is simple:</p>
          <p className="text-green-400 text-xl md:text-2xl font-semibold">Build the first fifteen hundred.</p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">Everything else grows from there.</p>
        </div>
        <p className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          PHIERS
        </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-2">
            What you've read explains why.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-4">
            What comes next explains how fifteen hundred becomes a force multiplier.
          </p>
        <div className="flex justify-center mt-2">
          <a
            href="https://phiers.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#16a34a', color: 'white', fontWeight: 'bold', padding: '12px 32px', borderRadius: '8px', display: 'inline-block', textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#22c55e'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
          >
            → Enter PHIERS
          </a>
        </div>  
      </div>
      <QuietZone />
      {/* ========== SECTION 11: WHY THIS IS NOT THEORY ========== */}
      <div className="max-w-3xl mx-auto px-6 mt-16 md:mt-20">
        <div className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-3">🜂 WHY THIS IS NOT THEORY</div>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          This isn't theory. It was built under pressure — real pressure. Years of trying to build something serious while folks tried to bury it, derail it, or steal it.
        </p>
        <div className="mt-6">
          <Accordion
            triggerLabel="Open to read the fuller story"
            className="w-full text-left border border-gray-800 bg-[#0d0d0d] px-5 md:px-6 py-4 md:py-5 rounded-xl hover:border-gray-600 transition"
          >
            <div className="space-y-4 text-gray-300 leading-relaxed pt-4 pb-2">
              <p>That taught two things:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Serious solutions need structure.</li>
                <li>Truth without organized force gets buried.</li>
              </ul>
              <p>PHIERS is built with that in mind.</p>
              <p>It solves multiple problems at once for people with the same unmet needs.</p>
              <p className="italic">Power Held In Every Rep's Seat isn't a slogan. It's a structural fix.</p>
            </div>
          </Accordion>
        </div>
      </div>

      {/* ========== SECTION 12: INHERITANCE TO FORGE ========== */}
      <div className="max-w-2xl mx-auto px-6 mt-16 md:mt-20 text-center">
        <p className="text-[clamp(1.3rem,4.5vw,1.8rem)] text-gray-200 font-light leading-[1.25] mb-6">
          What you've read so far is the inheritance.<br />What comes next is the forge.
        </p>
        <div className="w-16 h-px bg-gray-700 mx-auto my-6" />
        <p className="uppercase tracking-[0.28em] text-gray-500 text-xs">FROM INHERITANCE TO FORGE</p>
        <div className="mt-8 mb-10">
          <p className="text-amber-400 font-semibold text-base md:text-lg leading-relaxed">
            Not branding. Not mythology.
          </p>
          <p className="text-amber-400 font-semibold text-base md:text-lg leading-relaxed mt-1">
            The pressure that produced the structure.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/Prophecy/movement"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-lg transition text-sm whitespace-nowrap"
          >
            ← THE MOVEMENT
          </a>
          <a
            href="https://phiers.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition border border-gray-500 text-sm whitespace-nowrap"
          >
            Enter PHIERS →
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 my-10 md:my-12"></div>

      {/* ========== SECTION 13: ASK A QUESTION ========== */}
      <div className="max-w-3xl mx-auto px-6 mt-6 text-center">
        <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl px-5 py-10 md:px-10 md:py-14">
          <p className="text-lg md:text-xl text-gray-300 font-semibold">
            If you want to see how this becomes structure — the code, the coordination, the accountability — start here.
          </p>
          <p className="text-sm text-gray-400 mt-4">We're not asking for blind trust. Just enough curiosity to see how the structure works.</p>
          <button
            onClick={() => setShowTrustModal(true)}
            className="inline-block bg-white text-black font-bold text-xl md:text-2xl py-3 px-10 rounded-full hover:bg-gray-200 transition shadow-lg mt-6 mx-auto cursor-pointer"
          >
            → Ask a question
          </button>
        </div>
      </div>

      <div className="text-center mt-8 mb-12 md:mb-16 px-6">
        <p className="text-xl md:text-2xl font-bold text-white leading-snug">
          Not to look backward. To prepare for what's next.
        </p>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>A gift from Foundational Black American men to humanity. Built by Black men.</p>
        <p>
          <a href="https://phiers.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            PHIERS.org →
          </a>
        </p>
        <p className="mt-3 text-gray-600 text-xs">Participation is voluntary. PHIERS is a peaceful civic engagement effort.</p>
        <p className="mt-4 text-amber-500/50 text-[9px] tracking-wide font-mono">
            v3.2 — Tiered images • Quiet zones • Height-disciplined
        </p>
      </footer>
    </div>
  );
}
     
// FILE: app/For_Black_Men/page.tsx