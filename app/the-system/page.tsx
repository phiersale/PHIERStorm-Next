// FILE: app/the-system/page.tsx
// VERSION: 3.0 – Rubik's Cube system, mechanism-focused copy, authority tone

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PhiersSystemPage() {
  const [returnUrl, setReturnUrl] = useState('/');
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    // Read ?from= parameter to determine where "Back" button goes
    const params = new URLSearchParams(window.location.search);
    const from = params.get('from');
    if (from === 'prophecy') {
      setReturnUrl('/Prophecy');
    } else if (from === 'credibility') {
      setReturnUrl('/?credibility=true');
    } else if (from === 'homepage') {
      setReturnUrl('/');
    } else {
      // Default to homepage if no valid from parameter
      setReturnUrl('/');
    }
  }, []);

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Sticky Header - matching Prophecy page */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/PHIERS_Logo_BW.png"
              alt="PHIERS"
              width={40}
              height={40}
              className="w-10 h-auto md:w-12 opacity-70 hover:opacity-90 transition"
              priority
            />
          </Link>
          <Link 
            href={returnUrl}
            className="text-gray-400 text-sm hover:text-white transition"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition"
            >
              ✕
            </button>
            <div className="relative w-full aspect-[16/9]">
              {modalImage && (
                <Image
                  src={modalImage.src}
                  alt={modalImage.alt}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <p className="text-gray-400 text-xs text-center mt-4">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}

      {/* Main Content - offset for sticky header */}
      <div className="pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">

          {/* HERO */}
          <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-xs tracking-[0.25em] text-green-400/70 uppercase">
                The PHIERS System
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                How It All Works Together
              </h1>

              <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                <p>You have organized the Fifteen Hundred.</p>
                <p>Now here's what becomes possible.</p>

                <p className="mt-4 text-gray-200">
                  Every piece of this system affects every other piece.
                </p>

                <p className="mt-4">
                  You cannot solve healthcare without affecting employment.
                  You cannot solve employment without affecting resource access.
                  You cannot affect resource access without affecting congressional priorities.
                  You cannot change congressional priorities without the leverage you now hold.
                </p>

                <p className="mt-4 text-green-400/80">
                  This is not four separate programs. This is one mechanism. Move the center, and everything else resolves.
                </p>
              </div>
            </div>

            {/* Rubik's Cube - clickable with modal */}
            <div className="md:pt-4 flex md:justify-center">
              <div 
                className="relative w-40 h-40 md:w-56 md:h-56 cursor-pointer group"
                onClick={() => openModal(
                  '/images/5D_Solutions_Rubiks_Cube.jpg',
                  'The Rubik\'s Cube of Accountability - Every piece affects every other piece'
                )}
              >
                <Image
                  src="/images/5D_Solutions_Rubiks_Cube.jpg"
                  alt="Rubik's Cube of Accountability"
                  width={224}
                  height={224}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  priority
                />
                <p className="text-gray-500 text-xs mt-3 text-center opacity-70 group-hover:opacity-100 transition">
                  Click to enlarge
                </p>
              </div>
            </div>
          </header>

          {/* Scroll cue */}
          <div className="text-center text-gray-500 text-xs mt-8 animate-pulse">
            Scroll to see the system ↓
          </div>

          {/* SECTION 1: THE CENTER PIECE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              The Fifteen Hundred Organized
            </h2>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>You are the mechanism.</p>

              <p>Fifteen hundred verified constituents in a single congressional district represent something Congress cannot ignore:</p>

              <div className="pl-4 border-l border-green-400/30 space-y-2">
                <p>Organized attention.</p>
                <p>Coordinated demand.</p>
                <p>Sustained pressure.</p>
                <p>Accountability made structural.</p>
              </div>

              <p>Representatives answer to voters. Voters with organized leverage become impossible to dismiss.</p>

              <p>When Fifteen Hundred of you move together on a single issue, your representative faces a binary choice:</p>

              <p className="italic">Respond to your demand, or explain to their district why they didn't.</p>

              <p className="mt-4 text-green-400/80">
                This is not a threat. This is mathematics.
              </p>

              <p className="font-semibold text-white">
                Everything else in this system exists because you now have this lever.
              </p>
            </div>
          </section>

          {/* SECTION 2: THE FIRST FACE — PHIERSALE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Healthcare: The Entry Point</h2>

            <div className="mt-6 flex justify-center cursor-zoom-in"
                onClick={() => openModal('/images/healthcare-cost-contrast-10k-600.jpg', 'Healthcare cost contrast: $10,000 vs $600')}>
              <Image
                src="/images/healthcare-cost-contrast-10k-600.jpg"
                alt="Healthcare cost contrast: $10,000 vs $600"
                width={900}
                height={500}
                className="rounded-xl object-contain"
              />
            </div>
            <p className="text-gray-500 text-xs mt-2 text-center opacity-70">Click to enlarge</p>

            <p className="text-gray-400 text-sm mb-6">
              Most people cannot organize around abstract principles. They organize around survival.
            </p>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
            <Image
                  src="/images/phiersale-healthcare-icon.jpg"
                  alt="PHIERSale healthcare icon"
                  width={90}
                  height={90}
                  className="opacity-80"
                />
              </div>

              <p>PHIERSale removes the survival pressure.</p>

              <p className="font-semibold text-white">How it works:</p>

              <div className="pl-4 border-l border-green-400/30 space-y-2">
                <p>Telehealth costs $40-50 per month.</p>
                <p>Most medications cost 60-80% less through cooperative purchasing than through traditional insurance.</p>
                <p>Preventative care becomes affordable, which means people use it before crisis hits.</p>
              </div>

              <p className="mt-4 font-semibold text-white">The result:</p>

              <p>Families gain $7,400+ annually in breathing room.</p>

              <p className="text-green-400/80">
                That breathing room is not just comfort. It is capacity.
              </p>

              <p>When someone is not choosing between medicine and rent, they can show up. They can think clearly. They can participate. They can hold their representative accountable.</p>

              <p className="italic">This is why healthcare comes first — not because it is the most important problem, but because it is the permission structure for everything else.</p>

              <p className="font-semibold text-white mt-4">
                Your Fifteen Hundred will have the resources to be engaged. That changes everything.
              </p>
            </div>
          </section>

          {/* SECTION 3: THE SECOND FACE — PHIERWORKS */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Employment: The Stability Engine</h2>

            <p className="text-gray-400 text-sm mb-6">
              Breathing room created by affordable healthcare is not enough. People need income that outpaces costs.
            </p>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
            <Image
                src="/images/phierworks-jobs-icon.jpg"
                alt="PHIERWorks jobs icon"
                width={90}
                height={90}
                className="opacity-80"
              />
            </div>

          <p>PHIERWorks connects three things that rarely speak to one another:</p>

              <div className="pl-4 border-l border-green-400/30 space-y-2">
                <p>Real demand from employers who need workers</p>
                <p>Real people who need stable work</p>
                <p>Real pathways that get them there</p>
              </div>

              <p className="mt-4">
                Most job platforms treat employment as a transaction. PHIERWorks treats it as part of your system.
              </p>

              <p>
                A person earning $31,200 annually cannot carry a $10,000 healthcare burden. But with PHIERSale reducing that to $600-800, that person can build stability. Stability means they stay engaged. Engaged people hold their representatives accountable.
              </p>

              <p className="text-green-400/80 font-semibold">
                This is not charity. This is how you make fifteen hundred people durable enough to sustain pressure on Congress.
              </p>
            </div>
          </section>

          {/* SECTION 4: THE THIRD FACE — PHIERPLACE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Resources: The Coordination Engine</h2>

            <p className="text-gray-400 text-sm mb-6">
              Housing assistance exists. Food programs exist. Transportation support exists. Childcare subsidies exist. Training programs exist. They do not exist as one system.
            </p>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
          <Image
                src="/images/phierplace-resources-icon.jpg"
                alt="PHIERPlace resources icon"
                width={90}
                height={90}
                className="opacity-80"
              />
            </div>

            <p>
              They exist as separate bureaucracies that rarely communicate.
            </p>

              <p className="font-semibold text-white">PHIERPlace is the interoperability layer that connects them.</p>

              <div className="pl-4 border-l border-green-400/30 space-y-2">
                <p>One entry.</p>
                <p>One screening.</p>
                <p>Shared visibility across all participating organizations.</p>
              </div>

              <p className="mt-4 font-semibold text-white">The result:</p>

              <p>
                What was fragmented becomes coordinated. What was invisible becomes accessible. What was designed to help individuals becomes infrastructure that strengthens communities.
              </p>

              <p className="text-green-400/80">
                Your Fifteen Hundred will know what resources exist, where to access them, and how to navigate them without falling through gaps. Stability multiplies. Engagement deepens.
              </p>
            </div>
          </section>

          {/* MECHANISM ANCHOR */}
          <div className="my-24 md:my-32 py-12 border-y border-green-400/20">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-green-400/80 text-lg md:text-xl italic tracking-wide">
                "Every piece moves the next. Move one face, and the entire cube rotates."
              </p>
              <p className="text-gray-500 text-xs mt-4 uppercase tracking-wider">
                — The System
              </p>
            </div>
          </div>

          {/* SECTION 5: THE AUTHORIZATION POINT */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Congress: Why It Has to Be Them</h2>

            <p className="text-gray-400 text-sm mb-6">
              Telehealth is already legal. But Congress has not authorized insurance companies to offer it competitively.
            </p>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>Direct pharmaceutical pricing works. But Congress has not authorized bypassing middleman markups for cooperative groups.</p>

              <p>Resource coordination is possible. But Congress has not funded interoperability infrastructure for community organizations.</p>

              <p className="mt-4 font-semibold text-white">The barriers are not technological. They are political.</p>

              <p className="text-green-400/80">
                And political barriers move when constituents organize.
              </p>

              <p>
                When your Fifteen Hundred walks into their representative's office with data, evidence, and organized demand, that representative will move.
              </p>

              <p className="italic">Not because they suddenly agree with you. Because the mathematics of re-election change.</p>

              <p className="font-semibold text-white">
                You are no longer abstract constituents. You are Fifteen Hundred verified people asking for one thing.
              </p>

              <p className="text-green-400/80">
                Congress responds to that.
              </p>
            </div>

            {/* Leverage Hub Diagram - full-width with click-to-expand */}
            <p className="text-gray-400 text-sm mb-4 text-center mt-8">
              This is the pressure point — where coordination becomes power.
            </p>
            <div className="mt-4 flex flex-col items-center">
              <div 
                className="relative w-full aspect-[16/9] max-w-5xl mx-auto cursor-zoom-in group"
                onClick={() => openModal(
                  '/images/congress-leverage-hub-diagram.jpg',
                  'Congress leverage hub diagram: 1,500 constituents to Representative to Vote to Result'
                )}
              >
                <Image
                  src="/images/congress-leverage-hub-diagram.jpg"
                  alt="Congress leverage hub diagram: 1,500 constituents to Representative to Vote to Result"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center opacity-70 group-hover:opacity-100 transition">
                Click to enlarge
              </p>
            </div>
          </section>

          {/* SECTION 6: THE MECHANISM */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Every Piece Moves the Next
            </h2>

            <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p className="font-semibold text-white">
                This is not four separate initiatives.
              </p>

              <div className="pl-4 border-l border-green-400/30 space-y-2 mt-4">
                <p>Affordable healthcare creates capacity.</p>
                <p>Capacity creates stability.</p>
                <p>Stability creates engagement.</p>
                <p>Engagement sustains the Fifteen Hundred.</p>
                <p>The Fifteen Hundred creates congressional pressure.</p>
                <p>Congressional pressure creates authorization.</p>
                <p>Authorization scales the system.</p>
                <p>Scaled systems reduce costs further.</p>
                <p>Lower costs strengthen the network.</p>
                <p>Stronger networks sustain more pressure.</p>
                <p>More pressure creates better outcomes.</p>
                <p>Better outcomes strengthen communities.</p>
              </div>

              <p className="mt-4 text-green-400/80 font-semibold">
                Move one piece, and the entire cube rotates.
              </p>
            </div>

            {/* Cascade Flow - full-width with click-to-expand */}
            <p className="text-gray-400 text-sm mb-4 text-center mt-8">
              Every part of the system enables the next. This is the cascade.
            </p>
            <div className="mt-4 flex flex-col items-center">
              <div 
                className="relative w-full aspect-[16/9] max-w-5xl mx-auto cursor-zoom-in group"
                onClick={() => openModal(
                  '/images/phiers-cascade-affordability-to-leverage.jpg',
                  'PHIERS cascade: Affordability to breathing room to capacity to participation to 1,500 constituents to political pressure to congressional authorization to national scale'
                )}
              >
                <Image
                  src="/images/phiers-cascade-affordability-to-leverage.jpg"
                  alt="PHIERS cascade: Affordability to breathing room to capacity to participation to 1,500 constituents to political pressure to congressional authorization to national scale"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center opacity-70 group-hover:opacity-100 transition">
                Click to enlarge
              </p>
            </div>
          </section>

          {/* SECTION 7: EVIDENCE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Why This Actually Works</h2>

            <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>Telehealth models are already operating at scale. Cost structures are proven.</p>
              <p>Direct-to-consumer pharmaceuticals like Mark Cuban Cost Plus Drugs show 60%+ savings.</p>
              <p>Civic pressure research from Ralph Nader and Erica Chenoweth documents how organized participation moves systems.</p>
              <p className="text-green-400/80">
                Nothing here is hypothetical. The pieces already exist. PHIERS integrates them.
              </p>
            </div>

            {/* Evidence Strip - full-width with click-to-expand */}
            <p className="text-gray-400 text-sm mb-4 text-center mt-8">
              The proof is already in motion.
            </p>
            <div className="mt-4 flex flex-col items-center">
              <div 
                className="relative w-full aspect-[16/5] max-w-5xl mx-auto cursor-zoom-in group"
                onClick={() => openModal(
                  '/images/evidence-strip-telehealth-costplus-research.jpg',
                  'Evidence strip: Telehealth at scale, Cost Plus Drugs 60%+ savings, Nader 1,500 constituents, Chenoweth 3.5% participation'
                )}
              >
                <Image
                  src="/images/evidence-strip-telehealth-costplus-research.jpg"
                  alt="Evidence strip: Telehealth at scale, Cost Plus Drugs 60%+ savings, Nader 1,500 constituents, Chenoweth 3.5% participation"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center opacity-70 group-hover:opacity-100 transition">
                Click to enlarge
              </p>
            </div>
          </section>

          {/* SECTION 8: WHAT THIS MEANS + CTA */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 pb-10 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
              What This Means
            </h2>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center">
              <p>You organized the Fifteen Hundred.</p>

              <p>Now you control four faces of a system that Congress cannot ignore.</p>

              <div className="space-y-2 mt-4">
                <p>Affordable healthcare creates the breathing room for participation.</p>
                <p>Stable employment creates the foundation for sustained engagement.</p>
                <p>Resource coordination creates the infrastructure that prevents collapse.</p>
                <p>Congressional pressure creates the authorization that makes scale possible.</p>
              </div>

              <p className="mt-4 text-green-400/80 font-semibold">
                Each piece strengthens the others.
              </p>

              <p className="mt-4">
                You do not need Congress to agree with you philosophically. You need them to authorize the mechanisms that already work.
              </p>

              <div className="space-y-2 mt-4">
                <p><span className="font-semibold">Mark Cuban</span> proved direct pricing works.</p>
                <p><span className="font-semibold">Telehealth platforms</span> prove affordable care works.</p>
                <p><span className="font-semibold">Community organizations</span> prove resource coordination works.</p>
                <p><span className="font-semibold">Erica Chenoweth</span> proved that 3.5% organized participation creates measurable political change.</p>
              </div>

              <p className="mt-4 italic">
                Nothing here is theoretical. Everything here is mechanically sound.
              </p>

              <p className="font-semibold text-white">
                The only missing piece was organization. You now have that.
              </p>
            </div>

            {/* Thesis lines */}
            <div className="text-center mt-12 space-y-2">
              <p className="text-gray-400 text-base">
                This is the architecture of accountability.
              </p>
              <p className="text-gray-400 text-base">
                This is the system.
              </p>
              <p className="text-green-400/80 font-semibold text-base">
                This is what you control.
              </p>
            </div>

            <div className="flex justify-center my-10">
            <Image
                src="/images/phiers-system-firewall-mini.jpg"
                alt="PHIERS mini icon"
                width={120}
                height={120}
                className="opacity-70"
              />
            </div>

            <div className="h-px bg-white/10 my-8"></div>

            {/* CTA BUTTONS */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={returnUrl}
                className="w-full sm:w-auto px-5 py-3 rounded-full border border-white/20 text-sm font-medium text-gray-200 hover:bg-white/5 transition text-center"
              >
                ← Back to where you came from
              </Link>

              <a
                href="https://phiers.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-green-500 text-black text-sm font-semibold hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 text-center"
              >
                → Enter PHIERS.org
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

// FILE: app/the-system/page.tsx