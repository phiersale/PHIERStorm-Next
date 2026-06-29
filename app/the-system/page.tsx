// FILE: app/the-system/page.tsx
// VERSION: 4.1 – PHIER-Powered Solutions CTA cleanup, overview download, duplicate CTA removed

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

  const openVideoModal = (videoUrl: string, title: string) => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', `Video: ${title}`);
    
    const modalContent = document.createElement('div');
    modalContent.className = 'relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl border border-green/30';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'absolute top-3 right-3 z-10 text-white/80 text-xl bg-black/60 rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-200';
    closeBtn.innerHTML = '✕';
    closeBtn.setAttribute('aria-label', 'Close video');
    closeBtn.onclick = () => {
      if (modal && modal.parentNode) {
        document.body.removeChild(modal);
      }
      document.body.style.overflow = '';
    };
    
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.title = title;
    iframe.className = 'w-full aspect-video';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(iframe);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (modal && modal.parentNode) {
          document.body.removeChild(modal);
        }
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
    
    modal.onclick = (e) => {
      if (e.target === modal) {
        if (modal && modal.parentNode) {
          document.body.removeChild(modal);
        }
        document.body.style.overflow = '';
      }
    };
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get('from');
    if (from === 'prophecy') {
      setReturnUrl('/Prophecy');
    } else if (from === 'credibility') {
      setReturnUrl('/?credibility=true');
    } else if (from === 'homepage') {
      setReturnUrl('/');
    } else {
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
      {/* Sticky Header - centered logo, left back, right forward */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/?credibility=true" className="text-gray-500 text-sm hover:text-gray-300 transition px-3 py-1.5">
            ← Back to Credibility
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image
                src="/images/PHIERS_Logo.png"
                alt="PHIERS"
                width={72}
                height={72}
                className="w-18 h-auto md:w-20 opacity-70 hover:opacity-90 transition"
                priority
              />
            </Link>
          </div>
          <Link href="/home" className="text-gray-500 text-sm hover:text-gray-300 transition px-3 py-1.5">
            Main Homepage →
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="relative flex items-center justify-center max-w-7xl w-full max-h-[95vh]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white text-3xl hover:text-gray-300 transition"
            >
              ✕
            </button>
            <div className="relative w-auto h-auto max-w-6xl max-h-[90vh]">
              <Image
                src={modalImage.src}
                alt={modalImage.alt}
                width={1200}
                height={900}
                className="object-contain w-auto h-auto max-w-6xl max-h-[90vh]"
                priority
              />
            </div>
            <p className="text-gray-400 text-xs text-center mt-4 absolute bottom-2 left-1/2 -translate-x-1/2 w-full">
              Click anywhere or press ESC to close
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">

          {/* HERO */}
          <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-xs tracking-[0.25em] text-green-400/70 uppercase">America's Implementation Strategy</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">PHIER-Powered Solutions</h1>
              <p className="text-lg md:text-xl text-gray-300 font-medium">Affordable solutions. Organized districts. Public accountability.</p>

<div className="mt-6">
  <a
    href="/downloads/PHIER-Powered-Solutions-Overview.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 rounded-lg font-bold text-sm md:text-base transition"
    style={{
      backgroundColor: '#F5C542',
      color: '#1a1a1a',
      boxShadow: '0 0 20px rgba(245,197,66,0.25)'
    }}
  >
    Download the PHIER-Powered Solutions Overview
  </a>
  <p className="text-gray-500 text-xs mt-2">A five-minute introduction to the PHIERS framework.</p>
</div>
              <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                <p className="text-gray-200 font-medium">Every movement has priorities. PHIERS helps make them affordable, organized, and actionable.</p>
                <p>Most solutions fail because they attack symptoms one at a time.</p>
                <p>Healthcare.<br />Employment.<br />Congress.</p>
                <p className="mt-4 text-center">Each is treated as a separate problem.</p>
                
                {/* Rubik's Cube - centered */}
                <div className="flex justify-center my-6">
                  <div className="relative w-40 h-40 md:w-56 md:h-56 cursor-pointer group" onClick={() => openModal('/images/5D_Solutions_Rubiks_Cube.jpg', 'The Rubik\'s Cube of Accountability - Every piece affects every other piece')}>
                    <Image src="/images/5D_Solutions_Rubiks_Cube.jpg" alt="Rubik's Cube of Accountability" width={224} height={224} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" priority />
                    <p className="text-gray-500 text-xs mt-3 text-center opacity-70 group-hover:opacity-100 transition">Click to enlarge</p>
                  </div>
                </div>
                
                <p className="text-center">They are not separate problems.</p>
                <p>They are one system — and systems move as a whole.</p>
                <p className="mt-4">PHIERS does not add another program.</p>
                 <p>It connects the pieces — and that is the difference.</p>
                <p className="mt-4 text-green-400/80">Move the center, and everything else begins to change.</p>
              </div>
            </div>
          </header>

          {/* ONE NAME, THREE LAYERS */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">One Name. Three Layers.</h2>
            <p className="text-gray-400 text-sm mb-6">PHIERS has evolved across 22 years of building. The same letters describe three layers of the same system — not three competing names.</p>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
              <div className="bg-green/5 border border-green/20 rounded-lg p-5">
                <p className="text-green-400 text-xs font-mono uppercase tracking-widest mb-2">The Solution</p>
                <p className="text-white font-semibold mb-2">People's Health Insurance Endowment and Referral Service</p>
                <p className="text-gray-400 text-sm">What gets delivered — affordable care, coordinated benefits, real savings.</p>
              </div>
              <div className="bg-green/5 border border-green/20 rounded-lg p-5">
                <p className="text-green-400 text-xs font-mono uppercase tracking-widest mb-2">The Mechanism</p>
                <p className="text-white font-semibold mb-2">Power Held In Every Representative's Seat</p>
                <p className="text-gray-400 text-sm">How it gets enforced — organized districts holding elected officials accountable.</p>
              </div>
              <div className="bg-green/5 border border-green/20 rounded-lg p-5">
                <p className="text-green-400 text-xs font-mono uppercase tracking-widest mb-2">The Technology</p>
                <p className="text-white font-semibold mb-2">Public Health Information Exchange and Reporting System</p>
                <p className="text-gray-400 text-sm">What runs underneath — the data and coordination infrastructure.</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-6 text-center max-w-2xl mx-auto">Same work. Same letters. Different layer, depending on what you're looking at.</p>
          </section>

          {/* SECTION 1: THE FIFTEEN HUNDRED */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">The Center Piece</h2>
            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>Everything begins here.</p>
              <p>Not with Congress. Not with healthcare. Not with technology.</p>
              <p>With people.</p>
              <p className="mt-4">Fifteen Hundred verified constituents inside one district create a force elected officials cannot ignore.</p>
              <div className="pl-4 border-l border-green-400/30 space-y-2 mt-4">
                <p>Organized attention.</p>
                <p>Coordinated demand.</p>
                <p>Sustained pressure.</p>
                <p>Accountability made structural.</p>
              </div>
              <p className="mt-4">Representatives respond to incentives.</p>
              <p>Organized constituents change those incentives.</p>
              <p>The moment Fifteen Hundred people begin moving together, every other part of this system becomes possible.</p>
              <p className="mt-4 text-green-400/80 font-semibold">You are not supporting the mechanism.</p>
              <p className="text-green-400/80 font-semibold">You are the mechanism.</p>
            </div>
          </section>

          {/* SECTION 2: FOUR FACES INTRO + FIREWALL IMAGE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Four Faces. One System.</h2>
            <p className="text-gray-400 text-sm mb-6">Each face solves a different pressure point. Together, they create the leverage the system has always lacked.</p>
            
            {/* Firewall Image - moved from bottom */}
            <div className="mt-6 mb-8 flex justify-center cursor-zoom-in" onClick={() => openModal('/images/phiers-system-firewall-mini.jpg', 'PHIERS system firewall - four connected faces')}>
              <Image src="/images/phiers-system-firewall-mini.jpg" alt="PHIERS system firewall - four connected faces" width={300} height={300} className="rounded-xl object-contain border border-green-400/30 hover:border-green-400/60 transition-all duration-300 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
            </div>
            <p className="text-gray-500 text-xs text-center opacity-70 mb-6">Click to enlarge</p>
          </section>

          {/* SECTION 3: PHIERSALE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">PHIERSale</h2>
            <p className="text-green-400/80 font-medium mb-4">Economic Coordination Infrastructure</p>
            <p className="text-gray-400 text-sm mb-6">Most people cannot organize around abstract principles. They organize around survival.</p>
            
            {/* Healthcare Cost Image - large, strongest evidence */}
            <div className="mt-6 mb-4 flex justify-center cursor-zoom-in" onClick={() => openModal('/images/healthcare-cost-contrast-10k-600.jpg', 'Healthcare cost contrast: $10,000 vs $600')}>
              <Image src="/images/healthcare-cost-contrast-10k-600.jpg" alt="Healthcare cost contrast: $10,000 vs $600" width={900} height={500} className="rounded-xl object-contain w-full max-w-2xl" />
            </div>
            <p className="text-gray-500 text-xs text-center opacity-70 mb-6">Click to enlarge</p>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>PHIERSale removes the survival pressure.</p>
              <p className="font-semibold text-white mt-4">How it works:</p>
              <div className="pl-4 border-l border-green-400/30 space-y-2">
                <p>✓ Telehealth costs $40-50 per month</p>
                <p>✓ Most medications cost 40-50% less through cooperative purchasing at VA-level pricing</p>
                <p>✓ Preventative care becomes affordable before crisis hits</p>
              </div>
              <p className="mt-4 font-semibold text-white">The result:</p>
              <p>Individuals gain $9,400+ annually in breathing room.</p>
              <p className="text-green-400/80">That breathing room is not just comfort. It is capacity.</p>
              <p>When someone is not choosing between medicine and rent, they can show up. They can think clearly. They can participate. They can hold their representative accountable.</p>
              <p className="italic mt-4">Healthcare is not the destination.</p>
              <p className="italic">It is the first pressure that must be removed for the Fifteen Hundred to move.</p>
            </div>
          </section>

          {/* SECTION 4: PHIERWORKS */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">PHIERWorks</h2>
            <p className="text-green-400/80 font-medium mb-4">Employment Infrastructure</p>
            <p className="text-gray-400 text-sm mb-6">Breathing room alone is not enough. People need income that outpaces costs.</p>
            
            {/* PHIERWorks Jobs Icon - illustrative */}
            <div className="mt-6 mb-4 flex justify-center cursor-zoom-in" onClick={() => openModal('/images/phierworks-jobs-icon.jpg', 'PHIERWorks connects real demand, real people, and real pathways')}>
              <Image src="/images/phierworks-jobs-icon.jpg" alt="PHIERWorks jobs icon" width={400} height={400} className="rounded-xl object-contain border border-green-400/30 hover:border-green-400/60 transition-all duration-300 w-96 h-96 sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem]" />
            </div>
            <p className="text-gray-500 text-xs text-center opacity-70 mb-6">Click to enlarge</p>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>PHIERWorks connects three things that rarely speak to one another:</p>
              <div className="pl-4 border-l border-green-400/30 space-y-2">
                <p>✓ Real demand from employers who need workers</p>
                <p>✓ Real people who need stable work</p>
                <p>✓ Real pathways that get them there</p>
              </div>
              <p className="mt-4">A person earning $31,200 annually cannot carry a $10,000 healthcare burden. But with PHIERSale reducing that to $600-800, that person can build stability.</p>
              <p>Stability means they stay engaged. Engaged people hold their representatives accountable.</p>
              <p className="text-green-400/80 font-semibold mt-4">This is not charity.</p>
              <p className="text-green-400/80 font-semibold">This is how you make the Fifteen Hundred durable enough to sustain pressure.</p>
            </div>
          </section>

          {/* SECTION 5: PHIERPLACE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">PHIERPlace</h2>
            <p className="text-green-400/80 font-medium mb-4">Resource Coordination Infrastructure</p>
            <p className="text-gray-400 text-sm mb-6">Housing assistance exists. Food programs exist. Transportation support exists. Childcare subsidies exist. Training programs exist.</p>
            <p className="text-gray-400 text-sm mb-6">They do not exist as one system. They exist as separate bureaucracies that rarely communicate.</p>
            
            {/* PHIERPlace Resources Icon - larger, with "Safety Net" as subheading (not overlay) */}
            <div className="mt-6 mb-2 flex justify-center cursor-zoom-in" onClick={() => openModal('/images/phierplace-resources-icon.jpg', 'PHIERPlace connects fragmented resources into one coordinated system')}>
              <Image src="/images/phierplace-resources-icon.jpg" alt="PHIERPlace resources icon" width={400} height={400} className="rounded-xl object-contain border border-green-400/30 hover:border-green-400/60 transition-all duration-300 w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96" />
            </div>
            <p className="text-green-400 text-sm font-semibold text-center mt-2">Safety Net</p>
            <p className="text-gray-500 text-xs text-center opacity-70 mb-6">Click to enlarge</p>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>PHIERPlace is the interoperability layer that connects them.</p>
              <div className="pl-4 border-l border-green-400/30 space-y-2 mt-4">
                <p>✓ One entry</p>
                <p>✓ One screening</p>
                <p>✓ Shared visibility across all participating organizations</p>
              </div>
              <p className="mt-4 font-semibold text-white">The result:</p>
              <p>What was fragmented becomes coordinated.</p>
              <p>What was invisible becomes accessible.</p>
              <p>What once helped individuals becomes infrastructure that strengthens communities.</p>
              <p className="text-green-400/80 mt-4">Your Fifteen Hundred will know what resources exist, where to access them, and how to navigate them without falling through gaps.</p>
              <p className="italic">Stability compounds. Engagement deepens.</p>
            </div>
          </section>

          {/* SECTION 6: CONGRESSIONAL AUTHORIZATION */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Congressional Authorization</h2>
            <p className="text-green-400/80 font-medium mb-4">The Scaling Mechanism</p>
            <p className="text-gray-400 text-sm mb-6">Telehealth is already legal. But Congress has not authorized insurance companies to offer it competitively.</p>
            
            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>Direct pharmaceutical pricing works. But Congress has not authorized bypassing middleman markups for cooperative groups.</p>
              <p>Resource coordination is possible. But Congress has not funded interoperability infrastructure.</p>
              <p className="mt-4 font-semibold text-white">The barriers are not technological. They are political.</p>
              <p className="text-green-400/80">And political barriers move when constituents organize.</p>
              <p className="mt-4">When your Fifteen Hundred walks into their representative's office with data, evidence, and organized demand, that representative will move.</p>
              <p className="italic">Not because they suddenly agree with you.</p>
              <p className="italic">Because the mathematics of re‑election change.</p>
              <p className="mt-4 font-semibold text-white">You are no longer abstract constituents.</p>
              <p className="font-semibold text-white">You are Fifteen Hundred verified people asking for one thing.</p>
            </div>

            {/* Leverage Hub Diagram - second largest image */}
            <p className="text-gray-400 text-sm mb-4 text-center mt-8">This is the pressure point — where coordination becomes power.</p>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto cursor-zoom-in group" onClick={() => openModal('/images/congress-leverage-hub-diagram.jpg', 'Congress leverage hub diagram: 1,500 constituents to Representative to Vote to Result')}>
                <Image src="/images/congress-leverage-hub-diagram.jpg" alt="Congress leverage hub diagram" fill className="object-contain rounded-xl" />
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center opacity-70 group-hover:opacity-100 transition">Click to enlarge</p>
            </div>
          </section>

          {/* SECTION 7: CASCADE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Every Piece Moves the Next</h2>
            
            <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p className="font-semibold text-white">This is not four separate initiatives.</p>
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
              <p className="mt-4 text-green-400/80 font-semibold">Move one piece, and the entire system turns.</p>
            </div>

            {/* Cascade Diagram - shows whole machine, third largest */}
            <p className="text-gray-400 text-sm mb-4 text-center mt-8">Every part of the system enables the next. This is the cascade.</p>
            <div className="mt-4 flex justify-center">
              <div className="cursor-zoom-in group" onClick={() => openModal('/images/phiers-cascade-affordability-to-leverage.jpg', 'PHIERS cascade: Affordability to breathing room to capacity to participation to 1,500 constituents to political pressure to congressional authorization to national scale')}>
                <Image src="/images/phiers-cascade-affordability-to-leverage.jpg" alt="PHIERS cascade" width={600} height={338} className="rounded-xl object-contain border border-green-400/30 hover:border-green-400/60 transition-all duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md group-hover:scale-105" />
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-2 text-center opacity-70 group-hover:opacity-100 transition">Click to enlarge</p>
          </section>

          {/* SECTION 8: EVIDENCE */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Why This Actually Works</h2>
            <div className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>Telehealth models are already operating at scale. Cost structures are proven.</p>
              <p>Direct-to-consumer pharmaceuticals like Mark Cuban Cost Plus Drugs and VA-style group purchasing show 40-50%+ savings, confirmed by GAO and peer-reviewed research.</p>
              <p>Civic pressure research from Ralph Nader and Erica Chenoweth documents how organized participation moves systems.</p>
              <p className="text-green-400/80 mt-4">Nothing here is hypothetical. The pieces already exist. PHIERS integrates them.</p>
              <p className="text-gray-300 mt-4">PHIERS does not ask you to trust PHIERS. It asks you to look at the public record and decide for yourself.</p>
              <p className="text-gray-400 mt-4">
                This integration work isn't new for the person who built it — 20 years inside VA enrollment systems, EHR modernization, and state healthcare policy.{' '}
                <Link href="/?credibility=true" className="text-green hover:underline">
                  See the full record →
                </Link>
              </p>
            </div>

            {/* 2016 Single Payer & Sustainable Jobs Video — dated proof of concept */}
            <div className="max-w-2xl mx-auto mt-10">
              <div className="bg-[#0a1628] rounded-xl p-4 md:p-6 border border-green/25 shadow-xl shadow-green/5">
                <div className="text-center mb-4">
                  <span className="text-[10px] font-mono bg-green/10 text-green px-2 py-0.5 rounded border border-green/20 uppercase tracking-widest">Recorded 2016</span>
                  <h3 className="text-lg font-bold text-white mt-2">Single Payer & Sustainable Jobs — Years Ahead</h3>
                </div>
                <div
                  className="relative aspect-video max-w-2xl mx-auto cursor-pointer group rounded-lg overflow-hidden border border-black shadow-inner"
                  onClick={() => openVideoModal('https://www.youtube.com/embed/IJlXoYOnSJU?autoplay=1', 'Single Payer & Sustainable Jobs Plan — 2016')}
                >
                  <img src="https://img.youtube.com/vi/IJlXoYOnSJU/maxresdefault.jpg" alt="Single Payer & Sustainable Jobs Plan thumbnail" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300" onError={(e)=>{e.currentTarget.src='https://img.youtube.com/vi/IJlXoYOnSJU/mqdefault.jpg'}} />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20">
                    <div className="text-white text-5xl font-bold drop-shadow-lg group-hover:scale-110 transition-transform">▶</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                  Uploaded September 26, 2016, this video lays out a near-term path to the core benefits of single-payer — better outcomes, lower costs, universal access — by training under-employed health and social workers to coordinate care for high-risk patients. The plan: a shared health information exchange, a community referral system, and a membership rewards program, generating enough savings to fund living-wage jobs and expand access — without new taxes or legislation.
                </p>
                <p className="text-gray-400 text-xs mt-3">
                  This is the same coordinated-care, cost-savings, jobs-funding logic the rest of this page describes. The difference is the date.
                </p>
                <p className="text-center mt-3">
                  <a href="https://youtu.be/IJlXoYOnSJU" target="_blank" rel="noopener noreferrer" className="text-green-500/70 hover:text-green-400 text-xs underline">
                    Watch the original 2016 recording →
                  </a>
                </p>
              </div>
            </div>

            {/* Evidence Strip */}
            <p className="text-gray-400 text-sm mb-4 text-center mt-8">The proof is already in motion.</p>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative w-full aspect-[16/5] max-w-5xl mx-auto cursor-zoom-in group" onClick={() => openModal('/images/evidence-strip-telehealth-costplus-research.jpg', 'Evidence strip: Telehealth at scale, Cost Plus Drugs 60%+ savings, Nader 1,500 constituents, Chenoweth 3.5% participation')}>
                <Image src="/images/evidence-strip-telehealth-costplus-research.jpg" alt="Evidence strip" fill className="object-contain rounded-lg" />
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center opacity-70 group-hover:opacity-100 transition">Click to enlarge</p>
            </div>
          </section>

          {/* SECTION 9: FINAL THESIS */}
          <section className="mt-24 md:mt-28 border-t border-white/5 pt-12 pb-10 opacity-95 hover:opacity-100 transition-opacity duration-700">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">What This Means</h2>
            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center">
              <p>You organized the Fifteen Hundred.</p>
              <p>Now you control four faces of a system that Congress cannot ignore.</p>
              <div className="space-y-2 mt-4">
                <p>Affordable healthcare creates the breathing room for participation.</p>
                <p>Stable employment creates the foundation for sustained engagement.</p>
                <p>Resource coordination creates the infrastructure that prevents collapse.</p>
                <p>Congressional pressure creates the authorization that makes scale possible.</p>
              </div>
              <p className="mt-4 text-green-400/80 font-semibold">Each piece strengthens the others.</p>
              <p className="mt-4">You do not need Congress to agree with you.</p>
              <p>You need them to authorize the mechanisms that already work.</p>
              <div className="space-y-2 mt-4">
                <p><span className="font-semibold">Mark Cuban</span> proved direct pricing works.</p>
                <p><span className="font-semibold">Telehealth platforms</span> prove affordable care works.</p>
                <p><span className="font-semibold">Community organizations</span> prove resource coordination works.</p>
                <p><span className="font-semibold">Erica Chenoweth</span> proved that 3.5% organized participation creates measurable political change.</p>
              </div>
              <p className="mt-4 italic">Nothing here is theoretical. Everything here is mechanically sound.</p>
              <p className="font-semibold text-white mt-4">The only missing piece was organization.</p>
              <p className="font-semibold text-white">PHIERS was built to provide it.</p>
              <p className="text-green-400/80 font-semibold mt-6">When the Fifteen Hundred begin, accountability returns — and PHIERS.org leads the rising as we rebuild the inclusive, moral economy this country deserves.</p>
            </div>

            {/* Thesis lines */}
            <div className="text-center mt-12 space-y-2">
              <p className="text-gray-400 text-base">This is the architecture of accountability.</p>
              <p className="text-gray-400 text-base">This is the system.</p>
              <p className="text-green-400/80 font-semibold text-base">This is what you control.</p>
            </div>

            <div className="h-px bg-white/10 my-8"></div>

            {/* CTA BUTTONS - primary action restored per funnel audit */}
            <div className="mt-4 flex flex-col items-center justify-center gap-4">
              <button
                onClick={() => window.open('https://phiers.abacusai.app/petition/fifteen-hundred', '_blank')}
                className="px-8 py-3 rounded-lg font-bold text-base transition"
                style={{
                  backgroundColor: '#F5C542',
                  color: '#1a1a1a',
                  boxShadow: '0 0 20px rgba(245,197,66,0.25)'
                }}
              >
                ✍ Sign the Petition
              </button>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
                <Link href="/?credibility=true" className="text-gray-500 text-sm hover:text-gray-300 transition px-5 py-2">
                  ← Back to Credibility
                </Link>
                <Link href="/home" className="text-gray-500 text-sm hover:text-gray-300 transition px-5 py-2">
                  → Enter PHIERS.org
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

// FILE: app/the-system/page.tsx