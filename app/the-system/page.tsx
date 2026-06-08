// FILE: app/the-system/page.tsx
// VERSION: 2.0 – Cinematic layout, full-width images, click-to-expand modals, centered content

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

              {/* Prophecy visitor acknowledgment */}
              <p className="text-gray-500 text-sm italic">
                If you came from the Prophecy — this is what we built.
              </p>

              <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                <p>You can't solve healthcare without solving jobs.</p>
                <p>You can't solve jobs without solving the economy.</p>
                <p>You can't solve the economy without congressional action.</p>
                <p>You can't get congressional action without constituent pressure.</p>

                <p className="mt-4 text-gray-200">
                  They're not separate problems. They're the same problem with different masks.
                </p>

                <p className="mt-4 text-green-400/80">
                  PHIERS is not a healthcare program, a jobs program, or a political campaign.
                  It is a leverage system designed to make solutions possible by restoring accountability
                  between constituents and Congress.
                </p>
              </div>
            </div>

            {/* Hero Hub Icon - clickable with modal */}
            <div className="md:pt-4 flex md:justify-center">
              <div 
                className="w-40 h-40 md:w-48 md:h-48 cursor-pointer group bg-gradient-to-br from-green-900/30 to-black rounded-full border border-green-500/30 flex flex-col items-center justify-center p-3 hover:scale-105 transition-transform duration-300 hover:border-green-400/60"
                onClick={() => openModal(
                  '/images/phiers-system-hub-icon.jpg',
                  'PHIERS System Hub - Healthcare, Jobs, and Resources connected to PHIERS'
                )}
              >
                <p className="text-green-400 text-[10px] md:text-xs font-bold tracking-wide">HEALTHCARE</p>
                <p className="text-white text-base md:text-xl font-black tracking-wider my-1">PHIERS</p>
                <div className="flex gap-3 mt-1">
                  <p className="text-green-300 text-[10px] md:text-xs font-semibold">JOBS</p>
                  <p className="text-green-300 text-[10px] md:text-xs font-semibold">RESOURCES</p>
                </div>
              </div>
            </div>
          </header>

          {/* Scroll cue */}
          <div className="text-center text-gray-500 text-xs mt-8 animate-pulse">
            Scroll to see the system ↓
          </div>

          {/* SECTION 1: WHY ONE SYSTEM */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Why It Had to Be One System
            </h2>

            <div className="md:flex md:items-center md:gap-10 md:justify-center">
              <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                <p>Americans spend $10,000 per year on health insurance with gaps in coverage.</p>
                <p>Most of what people actually use costs about $600 per year through telehealth.</p>
                <p>That $7,400 gap drains families. And when families are drained, they can't organize or apply pressure.</p>
                <p className="text-green-400/80">
                  Affordability isn't a side benefit. It's the engine that makes participation possible.
                </p>
              </div>

              {/* Cost Contrast Graphic - fixed with fill + aspect-ratio */}
              <div className="mt-10 md:mt-0 md:w-80">
                <div className="relative w-full aspect-[4/3] max-w-sm mx-auto">
                  <Image
                    src="/images/healthcare-cost-contrast-10k-600.jpg"
                    alt="Healthcare cost comparison: $10,000 vs $600"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: PHIERSALE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <p className="text-gray-400 text-sm mb-4">
              Healthcare should be a tool, not a trap.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div 
                className="relative w-12 h-12 flex-shrink-0 cursor-zoom-in group"
                onClick={() => openModal(
                  '/images/phiersale-healthcare-icon.jpg',
                  'PHIERSale Icon - Healthcare: The Capacity Engine'
                )}
              >
                <Image
                  src="/images/phiersale-healthcare-icon.jpg"
                  alt="PHIERSale Icon"
                  fill
                  className="object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 max-w-2xl">
                <h2 className="text-xl md:text-2xl font-semibold">Healthcare: The Capacity Engine</h2>
                <p className="text-sm uppercase tracking-[0.2em] text-green-400/70">
                  PHIERSale — Affordable Care at Cost
                </p>
                <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed">
                  <p>Mark Cuban's Cost Plus Drugs proved the model. 60%+ savings. 7 million customers.</p>
                  <p>Telehealth platforms already deliver primary care at a fraction of traditional cost.</p>
                  <p className="text-green-400/80">
                    PHIERSale delivers what people actually use — at cost.
                  </p>
                  <p>Families save $7,400+ per year. Breathing room becomes capacity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: PHIERWORKS */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <p className="text-gray-400 text-sm mb-4">
              Stability is impossible when survival costs exceed wages.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div 
                className="relative w-12 h-12 flex-shrink-0 cursor-zoom-in group"
                onClick={() => openModal(
                  '/images/phierworks-jobs-icon.jpg',
                  'PHIERWorks Icon - Jobs: The Stability Engine'
                )}
              >
                <Image
                  src="/images/phierworks-jobs-icon.jpg"
                  alt="PHIERWorks Icon"
                  fill
                  className="object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 max-w-2xl">
                <h2 className="text-xl md:text-2xl font-semibold">Jobs: The Stability Engine</h2>
                <p className="text-sm uppercase tracking-[0.2em] text-green-400/70">
                  PHIERWorks — Real Matching for Real Demand
                </p>
                <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed">
                  <p>Jobs exist. But a person earning $31,200/year can't carry a $10,000 healthcare burden.</p>
                  <p className="text-green-400/80">
                    PHIERWorks connects real demand with real supply — paired with affordable care so the math works.
                  </p>
                  <p>Stability follows. People can plan. People can participate.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: PHIERPLACE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <p className="text-gray-400 text-sm mb-4">
              Access only works when it's unified.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div 
                className="relative w-12 h-12 flex-shrink-0 cursor-zoom-in group"
                onClick={() => openModal(
                  '/images/phierplace-resources-icon.jpg',
                  'PHIERPlace Icon - Resources: The Access Engine'
                )}
              >
                <Image
                  src="/images/phierplace-resources-icon.jpg"
                  alt="PHIERPlace Icon"
                  fill
                  className="object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 max-w-2xl">
                <h2 className="text-xl md:text-2xl font-semibold">Resources: The Access Engine</h2>
                <p className="text-sm uppercase tracking-[0.2em] text-green-400/70">
                  PHIERPlace — One Entry, Unified Access
                </p>
                <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed">
                  <p>Services exist — housing, food, childcare, mental health, training — but they're fragmented.</p>
                  <p className="text-green-400/80">
                    PHIERPlace unifies resource access. One entry. One screening. One coordinated path.
                  </p>
                  <p>People get what they qualify for. Prevention becomes real.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CINEMATIC ANCHOR - System Hub Quote */}
          <div className="my-24 md:my-32 py-12 border-y border-green-400/20">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-green-400/80 text-lg md:text-xl italic tracking-wide">
                “Every piece enables the next. None of them work alone.”
              </p>
              <p className="text-gray-500 text-xs mt-4 uppercase tracking-wider">
                — The PHIERS Cascade
              </p>
            </div>
          </div>

          {/* SECTION 5: CONGRESS / LEVERAGE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Congress: The Leverage Point</h2>
            <p className="text-sm uppercase tracking-[0.2em] text-green-400/70 mb-6">
              Why Congressional Authorization Matters
            </p>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>Congress must authorize telehealth, direct-to-consumer pricing, and removal of middleman markup requirements.</p>
              <p>They have this power today. They don't use it because the current system generates billions in lobbying revenue.</p>
              <p className="text-green-400/80">
                Money talks. Congress listens to money. Unless something else talks louder.
              </p>
              <p className="font-semibold text-white">
                When 1,500 verified constituents in a district make the same demand, the representative faces a binary choice.
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

          {/* SECTION 6: CASCADE (VISUAL TREATMENT) */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Why These Pieces Form One System
            </h2>

            <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>They're not separate programs. They're one mechanism where each part enables the next.</p>
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

          {/* SECTION 8: CLOSING + CTA */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 pb-10 opacity-95 hover:opacity-100 transition-opacity duration-700">
            {/* Final Mini Icon - fixed with fill + aspect-ratio */}
            <div className="flex justify-center mb-8">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/phiers-system-firewall-mini.jpg"
                  alt="PHIERS System"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
              So Here's What This Means
            </h2>

            <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center">
              <p>Affordability creates capacity. Capacity creates participation. Participation creates pressure. Pressure creates results.</p>
              <p>The system scales because it funds itself. It works because the pieces are connected.</p>
              <p className="text-green-400/80">
                This is why PHIERS had to be built as one system — not a slogan, not a movement, not a request for permission.
              </p>
            </div>

            {/* Thesis line */}
            <p className="text-gray-400 text-sm text-center mt-12 mb-8">
              This is the architecture of accountability.
            </p>

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