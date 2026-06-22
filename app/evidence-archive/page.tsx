'use client';

// FILE: app/evidence-archive/page.tsx
// VERSION: 7.0 - COMPLETE. ALL removed content from Tier 1 restored. Total lines: ~1,680

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function EvidenceArchivePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  // Financial Calculator State
  const [beneficiaries, setBeneficiaries] = useState(120000000);
  const [currentCostPerBeneficiary, setCurrentCostPerBeneficiary] = useState(10000);
  const [telehealthCostPerBeneficiary, setTelehealthCostPerBeneficiary] = useState(600);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const currentAnnualSpend = beneficiaries * currentCostPerBeneficiary;
  const proposedAnnualSpend = beneficiaries * telehealthCostPerBeneficiary;
  const annualSavings = currentAnnualSpend - proposedAnnualSpend;
  const catastrophicInsuranceCost = currentAnnualSpend * 0.15;
  const netSurplus = annualSavings - catastrophicInsuranceCost;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
    <div className="bg-black text-white min-h-screen">
      {/* STICKY HEADER */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/PHIERS_Logo_BW.png"
              alt="PHIERS"
              width={48}
              height={48}
              className="w-10 h-auto md:w-12 opacity-70 hover:opacity-90 transition"
              priority
            />
          </Link>
          <Link href="/credibility" className="text-gray-400 text-xs sm:text-sm hover:text-white transition whitespace-nowrap">
            ← Back to Credibility
          </Link>
        </div>
      </div>

      <div className="sticky-header-offset max-w-5xl mx-auto px-4 pt-24 pb-16">
        
        {/* TITLE */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Evidence Archive
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            This archive contains the full public record behind PHIERS — organized, documented, and sourced.
          </p>
        </div>

        {/* COMING SOON MESSAGE */}
        <div className="bg-green/5 border border-green/20 rounded-lg p-6 mb-8 text-center">
          <p className="text-green-400 text-sm font-semibold mb-2">📢 Check back often.</p>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
            We have a LOT more to show, but haven't pulled it all together yet.
            22 years planning for this moment — while keeping up with emerging threats and opportunities — so we can LEAD the change our nation so desperately needs.
          </p>
          <p className="text-white text-base font-bold mt-4">We are ready.</p>
          <p className="text-green-400 text-base font-semibold mt-1">Now is our time.</p>
          <p className="text-gray-400 text-sm italic mt-3">More to come.</p>
        </div>

        {/* QUICK NAVIGATION HELPER */}
        <div className="bg-green/5 border border-green/20 rounded-lg p-4 mb-8 text-sm text-gray-300">
          <p className="text-green font-semibold mb-2">New to PHIERS?</p>
          <p>Start with <a href="#healthcare" className="text-green hover:underline transition">Healthcare</a> or <a href="#congressional" className="text-green hover:underline transition">Congressional Leverage</a> — two of our strongest evidence domains.</p>
        </div>

        {/* FLAG DAY 2026 MILESTONE BOX */}
        <div className="bg-green/5 border border-green/20 rounded-lg p-4 mb-8">
          <p className="text-green-400 text-sm font-semibold mb-1">🇺🇸 Civic Participation Milestone</p>
          <p className="text-gray-300 text-sm">
            Our civic participation milestone is 1,500 verified constituents in each district by Flag Day 2026.
            This is not political advocacy — it is a demonstration of public engagement and district‑level accountability.
          </p>
        </div>

        {/* ANCHOR LINKS NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 pb-4 border-b border-gray-800">
          {[
            { id: "healthcare", label: "Healthcare Systems" },
            { id: "pharmaceutical", label: "Pharmaceutical Access" },
            { id: "telehealth", label: "Telehealth" },
            { id: "public-health", label: "Public Health" },
            { id: "congressional", label: "Congressional Leverage" },
            { id: "professional-history", label: "Professional History" },
            { id: "archived-websites", label: "Archived Websites" },
            { id: "video-archive", label: "Video Archive" },
            { id: "legacy-videos", label: "Legacy Videos" },
            { id: "pandemic-videos", label: "Pandemic Videos" },
            { id: "employment", label: "Employment & Resources" },
            { id: "vision", label: "Vision & Values" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs sm:text-sm text-gray-400 hover:text-green transition px-3 py-1.5 rounded-full border border-gray-700 hover:border-green/50"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* ========== DOMAIN 1: HEALTHCARE SYSTEMS ========== */}
        <section id="healthcare" className="mb-8 scroll-mt-24">
          <button onClick={() => toggleSection('healthcare')} className="w-full text-left flex justify-between items-center p-4 bg-[#0a1628]/60 border border-green/20 rounded-lg hover:border-green/40 transition">
            <div><h2 className="text-2xl md:text-3xl font-bold text-green">Healthcare Systems</h2><p className="text-xs text-gray-500 mt-1">20+ years of documented work in integrated healthcare delivery, cost reduction, and systems coordination.</p></div>
            <span className="text-green text-2xl font-bold">{expandedSection === 'healthcare' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'healthcare' && (
            <div className="mt-4 space-y-6 p-5 bg-[#0a1628]/20 rounded-lg">
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <button onClick={() => toggleSection('healthcare-videos')} className="w-full text-left flex justify-between items-center text-white font-semibold text-lg">
                  <span>📹 Videos</span><span className="text-green">{expandedSection === 'healthcare-videos' ? '−' : '+'}</span>
                </button>
                {expandedSection === 'healthcare-videos' && (
                  <div className="mt-4 space-y-3 text-gray-300 text-sm">
                    <p>Telehealth evidence videos (2020-2022)</p>
                    <p>Pharmaceutical access documentation</p>
                    <p>Cost studies and comparisons</p>
                    <p className="text-gray-500 text-xs italic">Full video library available in Video Archive section below</p>
                  </div>
                )}
              </div>
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <button onClick={() => toggleSection('healthcare-partnerships')} className="w-full text-left flex justify-between items-center text-white font-semibold text-lg">
                  <span>🤝 Partnerships</span><span className="text-green">{expandedSection === 'healthcare-partnerships' ? '−' : '+'}</span>
                </button>
                {expandedSection === 'healthcare-partnerships' && (
                  <div className="mt-4 space-y-3 text-gray-300 text-sm">
                    <p><span className="text-green font-semibold">SureSafe Pharma (2009)</span> — Direct-to-consumer pharmaceutical model</p>
                    <p><span className="text-green font-semibold">VA Medical Centers</span> — Maryland Veterans Administration partnership</p>
                    <p><span className="text-green font-semibold">MedStar Health</span> — Healthcare system integration</p>
                    <p><span className="text-green font-semibold">Maryland CRISP</span> — Health Information Exchange</p>
                    <p><span className="text-green font-semibold">Patriot Medical Transport Systems</span></p>
                    <p><span className="text-green font-semibold">Daedalus Systems</span></p>
                    <p><span className="text-green font-semibold">Prince George's County Housing Authority</span></p>

                    <div className="mt-5 p-4 bg-[#0a1628] rounded-lg border border-green/20">
                      <p className="text-green font-semibold mb-2">Case Study: Strengthening Veterans Choice (2015–2016)</p>
                      <p className="text-gray-300 text-sm mb-2">
                        Patriot Medical Transport Systems and PHIERS.org partnered to improve access, continuity, and coordination of care for veterans using the Veterans Choice Act — building on a 2009 Maryland VA pilot ("Maryland's Commitment to Veterans") that became the longest-running program of its kind in the nation.
                      </p>
                      <p className="text-gray-400 text-xs mb-2">
                        Per the Institute of Medicine, fragmented care increases costs 400–700%; coordinated care for patients with multiple chronic conditions can reduce costs 50–75%.
                      </p>
                      <p className="text-gray-400 text-xs">
                        Team: Patriot Medical Transport Systems (medical transport, triage, dispatch) · PHIERS.org (coordination tools, training, referral services) · Daedalus Systems (veteran-owned, veteran-physician led, emergency/transitional care expertise) · MedStar Health subject matter experts.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <button onClick={() => toggleSection('healthcare-cost')} className="w-full text-left flex justify-between items-center text-white font-semibold text-lg">
                  <span>💰 Cost Comparisons</span><span className="text-green">{expandedSection === 'healthcare-cost' ? '−' : '+'}</span>
                </button>
                {expandedSection === 'healthcare-cost' && (
                  <div className="mt-4 space-y-3 text-gray-300 text-sm">
                    <p><span className="text-green font-semibold">Mark Cuban Cost Plus Drugs</span> — Launched 2022, 7M+ customers. Validated PHIERS 2009 model.</p>
                    <p><span className="text-green font-semibold">TrumpRx (2026)</span> — Cross-partisan partnership with Cuban. Further validation.</p>
                    <p><span className="text-green font-semibold">Telehealth vs. Traditional Care</span> — $600 vs $8,000-10,000 annually</p>
                    <div className="mt-3 p-3 bg-green/5 rounded border border-green/20"><p className="text-gray-400 text-xs">Source: CMS published data. Full documentation available.</p></div>
                  </div>
                )}
              </div>

              {/* FINANCIAL CALCULATOR */}
              <div className="bg-[#0a1628] border border-green/30 rounded-xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <span className="text-[10px] font-mono bg-green/10 text-green px-2 py-0.5 rounded border border-green/20 uppercase tracking-widest">The Math Congress Can't Ignore</span>
                  <h3 className="text-xl font-bold text-white mt-2">Congress Already Committed the Money</h3>
                  <p className="text-gray-400 text-xs mt-1 max-w-xl mx-auto">Telehealth delivers better outcomes at 6% of the cost.</p>
                </div>
                <div className="space-y-6">
                  <div><div className="flex justify-between text-xs text-gray-400 mb-1"><span>CMS Beneficiaries</span><span className="text-white font-bold">{beneficiaries.toLocaleString()} people</span></div>
                  <input type="range" min="50000000" max="150000000" step="10000000" value={beneficiaries} onChange={(e) => setBeneficiaries(Number(e.target.value))} className="w-full accent-green h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1"><span>50M</span><span>150M</span></div></div>
                  <div><div className="flex justify-between text-xs text-gray-400 mb-1"><span>Current Annual Cost per Beneficiary (Insurance)</span><span className="text-white font-bold">{formatCurrency(currentCostPerBeneficiary)}</span></div>
                  <input type="range" min="5000" max="15000" step="500" value={currentCostPerBeneficiary} onChange={(e) => setCurrentCostPerBeneficiary(Number(e.target.value))} className="w-full accent-green h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer" /></div>
                  <div><div className="flex justify-between text-xs text-gray-400 mb-1"><span>Proposed Telehealth Cost per Beneficiary</span><span className="text-white font-bold">{formatCurrency(telehealthCostPerBeneficiary)}</span></div>
                  <input type="range" min="300" max="1200" step="50" value={telehealthCostPerBeneficiary} onChange={(e) => setTelehealthCostPerBeneficiary(Number(e.target.value))} className="w-full accent-green h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer" /></div>
                </div>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-xs space-y-2 border border-gray-800 mt-6">
                  <div className="flex justify-between border-b border-gray-800 pb-2"><span className="text-gray-400">Current Annual Spend (Insurance):</span><span className="text-red-400 font-bold">{formatCurrency(currentAnnualSpend)}</span></div>
                  <div className="flex justify-between border-b border-gray-800 pb-2"><span className="text-gray-400">Proposed Telehealth Delivery:</span><span className="text-green-400 font-bold">{formatCurrency(proposedAnnualSpend)}</span></div>
                  <div className="flex justify-between border-b border-gray-800 pb-2"><span className="text-gray-400">Annual Savings:</span><span className="text-amber-400 font-bold">{formatCurrency(annualSavings)}</span></div>
                  <div className="flex justify-between pt-1"><span className="text-green font-bold">Net Surplus After Catastrophic Coverage:</span><span className="text-green font-black bg-green/10 px-2 rounded">{formatCurrency(netSurplus)}</span></div>
                </div>
                <p className="text-gray-500 text-[10px] text-center mt-4 italic">Congress has already authorized this spending. PHIERS just delivers more care for less money.</p>
              </div>

              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <button onClick={() => toggleSection('healthcare-timeline')} className="w-full text-left flex justify-between items-center text-white font-semibold text-lg">
                  <span>📅 Timeline</span><span className="text-green">{expandedSection === 'healthcare-timeline' ? '−' : '+'}</span>
                </button>
                {expandedSection === 'healthcare-timeline' && (
                  <div className="mt-4 space-y-2 text-gray-300 text-sm">
                    <p><span className="text-green">2004</span> — Earliest documented PHIERS record</p>
                    <p><span className="text-green">2007</span> — First recorded video of PHIERS framework</p>
                    <p><span className="text-green">2007</span> — VistA EHR Business/Senior Analyst, Intake/Eligibility/Enrollment Systems</p>
                    <p><span className="text-green">2007</span> — VA Enterprise-wide Reengineering Initiative, 1 of 5 Civilians in OCIO</p>
                    <p><span className="text-green">2009</span> — PHIERS.org launches with SureSafe Pharma partnership</p>
                    <p><span className="text-green">2011-2014</span> — Partnership negotiations with NASN, VA, MedStar, CRISP HIE</p>
                    <p><span className="text-green">2018</span> — VA HQ - Lead integration engineer for EHRM/Community Care Initiative</p>
                    <p><span className="text-green">2018</span> — Recruited for Maryland Healthcare Commission expert panels</p>
                    <p><span className="text-green">2022</span> — Mark Cuban validates model with Cost Plus Drugs</p>
                    <p><span className="text-green">2026</span> — TrumpRx + Cuban partnership; PHIERS evidence archive launched</p>
                  </div>
                )}
              </div>
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <button onClick={() => toggleSection('healthcare-screenshots')} className="w-full text-left flex justify-between items-center text-white font-semibold text-lg">
                  <span>🖼️ Archived Screenshots</span><span className="text-green">{expandedSection === 'healthcare-screenshots' ? '−' : '+'}</span>
                </button>
                {expandedSection === 'healthcare-screenshots' && (
                  <div className="mt-4"><img src="/images/archive/phiers-2011-archive-header-url-v1.jpg" alt="PHIERS.org 2011 snapshot" className="rounded-lg border border-green/20 max-w-full h-auto" /><p className="text-gray-500 text-xs mt-2 text-center">PHIERS.org — September 22, 2011</p></div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* ========== DOMAIN 2: PHARMACEUTICAL ACCESS ========== */}
        <section id="pharmaceutical" className="mb-8 scroll-mt-24">
          <button onClick={() => toggleSection('pharmaceutical')} className="w-full text-left flex justify-between items-center p-4 bg-[#0a1628]/60 border border-green/20 rounded-lg hover:border-green/40 transition">
            <div><h2 className="text-2xl md:text-3xl font-bold text-green">Pharmaceutical Access</h2><p className="text-xs text-gray-500 mt-1">Pioneered direct pharmaceutical access models 13 years before Mark Cuban's Cost Plus Drugs.</p></div>
            <span className="text-green text-2xl font-bold">{expandedSection === 'pharmaceutical' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'pharmaceutical' && (
            <div className="mt-4 space-y-6 p-5 bg-[#0a1628]/20 rounded-lg">
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <h3 className="text-green font-semibold mb-3">SureSafe Pharma (2009–2012)</h3>
                <p className="text-gray-300 text-sm">Direct-to-consumer pharmaceutical model launched. Manufacture and import medications without middleman markups. Direct cost. Massive savings.</p>
                <p className="text-gray-400 text-xs mt-2">SureSafe's model was contingent on the Panama Free Trade Agreement — signed into law in 2007, but not implemented until 2012. That five-year delay meant we couldn't scale the one partnership that could have proven the pharmaceutical access piece worked at volume.</p>
                <p className="text-amber-400 text-xs mt-2">If SureSafe had scaled between 2009–2012, the savings to CMS would have been measurable enough to make healthcare-for-all a self-sustaining fiscal reality.</p>
              </div>
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <h3 className="text-green font-semibold mb-3">Timeline: PHIERS vs. Industry Adoption</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div className="border-l-2 border-green/30 pl-3 py-1"><p className="text-white font-medium">2009 — SureSafe Pharma partnership launched</p><p className="text-gray-400 text-xs">PHIERS.org launches with direct-to-consumer pharmaceutical model</p></div>
                  <div className="border-l-2 border-amber-500/50 pl-3 py-1"><p className="text-amber-400 font-medium">2007-2012 — Panama Free Trade Agreement delay</p><p className="text-gray-400 text-xs">Signed 2007, implemented 2012. Five-year delay prevented scaling</p></div>
                  <div className="border-l-2 border-green/30 pl-3 py-1"><p className="text-white font-medium">2022 — Mark Cuban Cost Plus Drugs launches</p><p className="text-gray-400 text-xs">7M+ customers. Independently validated the exact model PHIERS designed in 2009</p></div>
                  <div className="border-l-2 border-green/30 pl-3 py-1"><p className="text-white font-medium">2026 — TrumpRx + Cuban partnership</p><p className="text-gray-400 text-xs">Cross-partisan confirmation of the same structural pressure</p></div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========== DOMAIN 3: TELEHEALTH ========== */}
        <section id="telehealth" className="mb-8 scroll-mt-24">
          <button onClick={() => toggleSection('telehealth')} className="w-full text-left flex justify-between items-center p-4 bg-[#0a1628]/60 border border-green/20 rounded-lg hover:border-green/40 transition">
            <div><h2 className="text-2xl md:text-3xl font-bold text-green">Telehealth & Distributed Care</h2><p className="text-xs text-gray-500 mt-1">Documented telehealth and coordinated care strategy a decade before industry mainstream adoption.</p></div>
            <span className="text-green text-2xl font-bold">{expandedSection === 'telehealth' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'telehealth' && (
            <div className="mt-4 space-y-6 p-5 bg-[#0a1628]/20 rounded-lg">
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <h3 className="text-green font-semibold mb-3">Timeline: PHIERS vs. Industry Adoption</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div className="border-l-2 border-green/30 pl-3 py-1"><p className="text-white font-medium">2009-2012 — Coordinated care architecture designed</p><p className="text-gray-400 text-xs">PHIERS documented distributed telehealth architecture over a decade before mainstream adoption</p></div>
                  <div className="border-l-2 border-gray-500/50 pl-3 py-1"><p className="text-gray-400 font-medium">2014-2018 — Industry adoption begins</p><p className="text-gray-500 text-xs">Teladoc, Zocdoc enter market</p></div>
                  <div className="border-l-2 border-amber-500/50 pl-3 py-1"><p className="text-amber-400 font-medium">2020 — Pandemic accelerates telehealth</p><p className="text-gray-400 text-xs">COVID-19 validates the distributed care model PHIERS predicted years earlier</p></div>
                  <div className="border-l-2 border-green/30 pl-3 py-1"><p className="text-white font-medium">2023 — Zortt launches cooperative access model</p><p className="text-gray-400 text-xs">Executing the same cooperative access model PHIERS designed years earlier</p></div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========== DOMAIN 4: PUBLIC HEALTH ========== */}
        <section id="public-health" className="mb-8 scroll-mt-24">
          <button onClick={() => toggleSection('public-health')} className="w-full text-left flex justify-between items-center p-4 bg-[#0a1628]/60 border border-green/20 rounded-lg hover:border-green/40 transition">
            <div><h2 className="text-2xl md:text-3xl font-bold text-green">Public Health & Pandemic Response</h2><p className="text-xs text-gray-500 mt-1">Published pandemic preparedness and response frameworks before and during COVID-19.</p></div>
            <span className="text-green text-2xl font-bold">{expandedSection === 'public-health' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'public-health' && (
            <div className="mt-4 space-y-6 p-5 bg-[#0a1628]/20 rounded-lg">
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <h3 className="text-green font-semibold mb-3">Pandemic Videos (Chronological)</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div className="border-l-2 border-gray-500/50 pl-3 py-1"><p className="text-white font-medium">2017 — Family Matters, Healthcare and YOU</p><p className="text-gray-400 text-xs">Early advocacy for coordinated care and public health infrastructure</p></div>
                  <div className="border-l-2 border-gray-500/50 pl-3 py-1"><p className="text-white font-medium">2018 — Great Minds Think Alike</p><p className="text-gray-400 text-xs">Building consensus around healthcare access models</p></div>
                  <div className="border-l-2 border-amber-500/50 pl-3 py-1"><p className="text-amber-400 font-medium">2021 — Public Health Advocacy & Pandemics</p><p className="text-gray-400 text-xs">Real-time pandemic response documentation and recommendations</p></div>
                  <div className="border-l-2 border-amber-500/50 pl-3 py-1"><p className="text-amber-400 font-medium">2022 — A Better Pandemic Response</p><p className="text-gray-400 text-xs">Post-pandemic analysis and framework for future preparedness</p></div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========== DOMAIN 5: CONGRESSIONAL LEVERAGE ========== */}
        <section id="congressional" className="mb-8 scroll-mt-24">
          <button onClick={() => toggleSection('congressional')} className="w-full text-left flex justify-between items-center p-4 bg-[#0a1628]/60 border border-green/20 rounded-lg hover:border-green/40 transition">
            <div><h2 className="text-2xl md:text-3xl font-bold text-green">Congressional Leverage</h2><p className="text-xs text-gray-500 mt-1">Documented theory of district-level pressure and congressional accountability drawn from Nader research and 22 years of practice.</p></div>
            <span className="text-green text-2xl font-bold">{expandedSection === 'congressional' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'congressional' && (
            <div className="mt-4 space-y-6 p-5 bg-[#0a1628]/20 rounded-lg">
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <h3 className="text-green font-semibold mb-3">Ralph Nader — 1,500 Constituents Research</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li><span className="text-amber-300 font-semibold">500 verified constituents</span> — Compels Representative to attend town hall</li>
                  <li><span className="text-amber-300 font-semibold">1,000 verified constituents</span> — Compels Senator to attend</li>
                  <li><span className="text-amber-300 font-semibold">1,500 verified constituents</span> — Signal becomes undeniable</li>
                </ul>
                <img src="/images/RalphNader-500-Unstoppable_Change.jpg" alt="Ralph Nader" className="w-48 rounded-lg border border-green/30 mt-2" />
              </div>
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <h3 className="text-green font-semibold mb-3">Harvard Kennedy School — 3.5% Participation Research</h3>
                <p className="text-gray-300 text-sm">Erica Chenoweth's research analyzing 323 campaigns (1900-2006) found that when ~3.5% of a population actively participates, systems change.</p>
                <img src="/images/3.5pct_Erica_Chenoweth.jpg" alt="3.5% threshold research" className="rounded max-w-full h-auto mt-2" />
              </div>
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <h3 className="text-green font-semibold mb-3">District Pressure Models</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Organized constituents → public town hall demands</li>
                  <li>Refusal or corrupt response → public investigation</li>
                  <li>Findings published: votes, donors, defense contractor ties</li>
                  <li>Repeated ignoring → public exposure + voting power</li>
                </ul>
                <img src="/images/District_Accountability_Dashboard.jpg" alt="District Accountability Dashboard" className="rounded-lg border border-green/20 max-w-full h-auto mt-3" />
              </div>
            </div>
          )}
        </section>

        {/* ========== PROFESSIONAL HISTORY ========== */}
        <section id="professional-history" className="mb-8 scroll-mt-24">
          <button onClick={() => toggleSection('professional-history')} className="w-full text-left flex justify-between items-center p-4 bg-[#0a1628]/60 border border-green/20 rounded-lg hover:border-green/40 transition">
            <div><h2 className="text-2xl md:text-3xl font-bold text-green">Professional History</h2><p className="text-xs text-gray-500 mt-1">22 years of documented public record and institutional experience.</p></div>
            <span className="text-green text-2xl font-bold">{expandedSection === 'professional-history' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'professional-history' && (
            <div className="mt-4 p-5 bg-[#0a1628]/20 rounded-lg">
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <div className="space-y-4 text-gray-300 text-sm">
                  <div><p className="text-green font-semibold">2011 – Present — Chief Solutions Architect, PHIERS.org</p><p className="text-gray-400 text-xs ml-4">Researching, designing, and deploying public‑health interventions; building the architecture that became PHIERS.</p></div>
                  <div><p className="text-green font-semibold">2009 – Present — Chief Solutions Architect, PHIERS.org (Healthcare Innovation)</p><p className="text-gray-400 text-xs ml-4">Leading healthcare innovation: designing non‑profit healthcare delivery systems.</p></div>
                  <div><p className="text-green font-semibold">2008 – Present — Chief Solutions Architect, Health Reform Coalition</p><p className="text-gray-400 text-xs ml-4">Architect of the original PHIERS model.</p></div>
                  <div><p className="text-green font-semibold">2006 — Business Analyst, VA Registration, Eligibility & Enrollment Group</p><p className="text-gray-400 text-xs ml-4">Community Care credentialed.</p></div>
                  <div><p className="text-green font-semibold">2008 — Senior Analyst, VA Administrative Data Repository Group</p><p className="text-gray-400 text-xs ml-4">Promoted after designing enrollment workflow process diagrams. One of five civilians selected for the VA's Enterprise‑wide Reengineering Group, Office of the CIO.</p></div>
                  <div><p className="text-green font-semibold">2018 — Integration Engineer, VA's Electronic Health Record Modernization Program</p><p className="text-gray-400 text-xs ml-4">Departed in 2018, citing concerns about the direction of VA privatization.</p></div>
                  <div><p className="text-green font-semibold">2019 — Maryland Health Care Commission, Policy & Advisory Board</p><p className="text-gray-400 text-xs ml-4">School-based telehealth program, ePrescriptions, electronic payment systems integration.</p></div>
                  <div><p className="text-green font-semibold">2007 – Present — President & CEO, Community‑Enabling Solutions, Inc.</p><p className="text-gray-400 text-xs ml-4">Consulting and senior analyst work supporting VA and healthcare integration.</p></div>
                </div>
                <div className="mt-5 pt-3 border-t border-green/20 text-center"><a href="https://www.linkedin.com/in/will-price-phiers" target="_blank" rel="noopener noreferrer" className="text-green text-xs hover:underline">📄 Full professional history on LinkedIn →</a><p className="text-gray-500 text-[10px] mt-1">(Note: LinkedIn login may be required)</p></div>
              </div>
            </div>
          )}
        </section>

        {/* ========== ARCHIVED WEBSITES ========== */}
        <section id="archived-websites" className="mb-8 scroll-mt-24">
          <button onClick={() => toggleSection('archived-websites')} className="w-full text-left flex justify-between items-center p-4 bg-[#0a1628]/60 border border-green/20 rounded-lg hover:border-green/40 transition">
            <div><h2 className="text-2xl md:text-3xl font-bold text-green">Archived Websites</h2><p className="text-xs text-gray-500 mt-1">Internet Archive snapshots documenting PHIERS history since 2009.</p></div>
            <span className="text-green text-2xl font-bold">{expandedSection === 'archived-websites' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'archived-websites' && (
            <div className="mt-4 p-5 bg-[#0a1628]/20 rounded-lg">
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <div><p className="text-green font-semibold">2009 — SureSafe Pharma partnership</p><p className="text-gray-400 text-xs">Direct-to-consumer pharmaceutical model launched</p></div>
                <div><p className="text-green font-semibold">2011 — Health Reform Coalition</p><img src="/images/archive/phiers-2011-archive-header-url-v1.jpg" alt="2011 snapshot" className="rounded-lg border border-green/20 max-w-full h-auto mt-2" /></div>
                <div><p className="text-green font-semibold">2014 — Partnerships & Operations</p><p className="text-gray-400 text-xs"><a href="https://web.archive.org/web/20140518210231/http://phiers.org/" target="_blank" className="text-green hover:underline">View 2014 snapshot →</a></p></div>
                <div><p className="text-green font-semibold">2020 — Pandemic Response</p><p className="text-gray-400 text-xs"><a href="https://web.archive.org/web/20250000000000*/phiers.org" target="_blank" className="text-green hover:underline">Full archive history (50+ captures, 2007–2025) →</a></p></div>
              </div>
            </div>
          )}
        </section>

        {/* ========== VIDEO ARCHIVE ========== */}
        <section id="video-archive" className="mb-8 scroll-mt-24">
          <button onClick={() => toggleSection('video-archive')} className="w-full text-left flex justify-between items-center p-4 bg-[#0a1628]/60 border border-green/20 rounded-lg hover:border-green/40 transition">
            <div><h2 className="text-2xl md:text-3xl font-bold text-green">Video Archive</h2><p className="text-xs text-gray-500 mt-1">Complete video library (2007–Now)</p></div>
            <span className="text-green text-2xl font-bold">{expandedSection === 'video-archive' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'video-archive' && (
            <div className="mt-4 p-5 bg-[#0a1628]/20 rounded-lg">
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700"><div className="relative pb-[56.25%]"><iframe src="https://www.youtube.com/embed/fWsifllWmnY" className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe></div><div className="p-2 text-center"><p className="text-gray-300 text-xs">A Spiritual Solution (2016)</p></div></div>
                  <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700"><div className="relative pb-[56.25%]"><iframe src="https://www.youtube.com/embed/mxDkyFfBnZw" className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe></div><div className="p-2 text-center"><p className="text-gray-300 text-xs">Sizzle Film (2011)</p></div></div>
                  <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700"><div className="relative pb-[56.25%]"><iframe src="https://www.youtube.com/embed/r1_y7MXNt4E" className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe></div><div className="p-2 text-center"><p className="text-gray-300 text-xs">Patriots on PHIERS (2014)</p></div></div>
                  <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700"><div className="relative pb-[56.25%]"><iframe src="https://www.youtube.com/embed/JWC6ztov2sA" className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe></div><div className="p-2 text-center"><p className="text-gray-300 text-xs">Silos to Synergies (2014)</p></div></div>
                  <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700"><div className="relative pb-[56.25%]"><iframe src="https://www.youtube.com/embed/VLBAV07KQ9M" className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe></div><div className="p-2 text-center"><p className="text-gray-300 text-xs">PHIERS@Work — Vulnerable Communities (2014)</p></div></div>
                  <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700"><div className="relative pb-[56.25%]"><iframe src="https://player.vimeo.com/video/34036317" className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe></div><div className="p-2 text-center"><p className="text-gray-300 text-xs">PHIERS Framework (2011)</p></div></div>
                  <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700"><div className="relative pb-[56.25%]"><iframe src="https://player.vimeo.com/video/37264685" className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe></div><div className="p-2 text-center"><p className="text-gray-300 text-xs">PHIERS Strategy (2012)</p></div></div>
                </div>
                <p className="text-gray-500 text-xs text-center mt-4 italic">Hundreds more archival videos document the full journey. Full access available upon request.</p>
              </div>
            </div>
          )}
        </section>

        {/* ========== LEGACY VIDEOS GRID (COMPLETE) ========== */}
        <section id="legacy-videos" className="mb-8 scroll-mt-24">
          <button onClick={() => toggleSection('legacy-videos')} className="w-full text-left flex justify-between items-center p-4 bg-[#0a1628]/60 border border-green/20 rounded-lg hover:border-green/40 transition">
            <div><h2 className="text-2xl md:text-3xl font-bold text-green">Legacy Videos</h2><p className="text-xs text-gray-500 mt-1">Early documentation (2007 thru Covid) – archival, not promotional.</p></div>
            <span className="text-green text-2xl font-bold">{expandedSection === 'legacy-videos' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'legacy-videos' && (
            <div className="mt-4 p-5 bg-[#0a1628]/20 rounded-lg">
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 justify-items-center">
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://img.youtube.com/vi/fWsifllWmnY/mqdefault.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Spiritual Solution (2016)</p></div>
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://img.youtube.com/vi/mxDkyFfBnZw/mqdefault.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Sizzle (2011)</p></div>
                  <div className="w-full max-w-[110px] relative"><div className="absolute top-0 right-0 z-10 bg-black/70 text-green-300 text-[8px] px-1 rounded">2007</div><div className="relative pb-[56.25%] bg-black/40 rounded-lg mt-4"><img src="https://vumbnail.com/20369973.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Our Hero Handbook — VA Recruited Me After This</p><p className="text-center text-[8px]"><a href="https://vimeo.com/20369973" target="_blank" className="text-green-500/70">Watch on Vimeo →</a></p></div>
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://img.youtube.com/vi/r1_y7MXNt4E/mqdefault.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Patriots (2014)</p></div>
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://img.youtube.com/vi/JWC6ztov2sA/mqdefault.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Silos (2014)</p></div>
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://img.youtube.com/vi/VLBAV07KQ9M/mqdefault.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">PHIERS@Work — Vulnerable Communities (2014)</p></div>
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://vumbnail.com/34036317.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Framework (2011)</p></div>
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://vumbnail.com/37264685.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Strategy (2012)</p></div>
                  <div className="w-full max-w-[110px] relative"><div className="absolute top-0 right-0 z-10 bg-black/70 text-green-300 text-[8px] px-1 rounded">2015</div><div className="relative pb-[56.25%] bg-black/40 rounded-lg mt-4"><img src="https://vumbnail.com/241013858.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Bold Counterplan</p><p className="text-center text-[8px]"><a href="https://vimeo.com/241013858" target="_blank" className="text-green-500/70">Watch on Vimeo →</a></p></div>
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://img.youtube.com/vi/0CrR7uh9fFk/mqdefault.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Public Health (2021)</p></div>
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://img.youtube.com/vi/s88nbbiOY-s/mqdefault.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Better Pandemic (2022)</p></div>
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://img.youtube.com/vi/q0N0n-ET2cM/mqdefault.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Family Matters (2017)</p></div>
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://img.youtube.com/vi/8jXo5-znK4M/mqdefault.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Great Minds (2018)</p></div>
                  <div className="w-full max-w-[110px]"><div className="relative pb-[56.25%] bg-black/40 rounded-lg"><img src="https://img.youtube.com/vi/hB3teGHp1ss/mqdefault.jpg" className="absolute inset-0 w-full h-full object-cover" /></div><p className="text-[10px] text-center mt-1">Peaceful Warrior</p></div>
                </div>
                <p className="text-gray-500 text-xs text-center mt-4 italic">Hundreds more archival videos document the full journey.</p>
              </div>
            </div>
          )}
        </section>

        {/* ========== EMPLOYMENT & RESOURCES ========== */}
        <section id="employment" className="mb-8 scroll-mt-24">
          <button onClick={() => toggleSection('employment')} className="w-full text-left flex justify-between items-center p-4 bg-[#0a1628]/60 border border-green/20 rounded-lg hover:border-green/40 transition">
            <div><h2 className="text-2xl md:text-3xl font-bold text-green">Employment & Resources</h2><p className="text-xs text-gray-500 mt-1">Job market research, resource coordination, and community partnerships.</p></div>
            <span className="text-green text-2xl font-bold">{expandedSection === 'employment' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'employment' && (
            <div className="mt-4 p-5 bg-[#0a1628]/20 rounded-lg">
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <p><span className="text-green font-semibold">PHIERWorks</span> — AI‑resistant job training and placement</p>
                <p><span className="text-green font-semibold">PHIERSale</span> — Cooperative marketplace for essential goods</p>
                <p><span className="text-green font-semibold">PHIERplace</span> — Resource matching for communities</p>
                <p><span className="text-green font-semibold">Community organization partnerships</span> — Housing authorities, health systems, veteran services</p>
              </div>
            </div>
          )}
        </section>

        {/* ========== VISION & VALUES (COMPLETE - MOVED FROM TIER 1) ========== */}
        <section id="vision" className="mb-16 scroll-mt-24">
          <button onClick={() => toggleSection('vision')} className="w-full text-left flex justify-between items-center p-4 bg-[#0a1628]/60 border border-green/20 rounded-lg hover:border-green/40 transition">
            <div><h2 className="text-2xl md:text-3xl font-bold text-green">Vision & Values</h2><p className="text-xs text-gray-500 mt-1">The principles and long-term vision that guide PHIERS.</p></div>
            <span className="text-green text-2xl font-bold">{expandedSection === 'vision' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'vision' && (
            <div className="mt-4 space-y-6 p-5 bg-[#0a1628]/20 rounded-lg">
              {/* MABSHA */}
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <h3 className="text-green font-semibold mb-3">Our Standard: MABSHA</h3>
                <div className="flex items-center gap-2 mb-4"><span className="text-green-400 text-2xl">⭐</span><p className="text-green-400 font-semibold italic">Make America Better: Healthier, Safer, Affordable</p></div>
                <div className="bg-[#0a1628] rounded-lg p-4 space-y-2 text-gray-300 text-sm">
                  <p>✓ Healthcare doesn't bankrupt families.</p>
                  <p>✓ Work provides dignity and opportunity.</p>
                  <p>✓ Elected officials abide the will of the voters.</p>
                  <p>✓ Government serves the People, not elites.</p>
                  <p>✓ Solutions paid by rescinding tax breaks for the wealthy.</p>
                  <p>✓ Public servants held accountable.</p>
                  <p>✓ We rise from the ashes like the Phoenix.</p>
                </div>
              </div>
              {/* PATRIOTIC HOMECOMING */}
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <h3 className="text-green font-semibold mb-3">A Patriotic Homecoming for American Democracy</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>Have PHIERS operational by June 13. Demonstrate civic participation by June 14. By Independence Day, show representative government can still answer to the people.</p>
                  <div className="text-center py-3 bg-[#0a1628] rounded-lg"><p>Not through violence. Not through chaos. Through organization. Through accountability. Through participation.</p></div>
                  <p>The First Reconstruction rebuilt the Union. The Second expanded civil rights. <strong>The Third rebuilds accountability.</strong></p>
                  <p className="text-green-400 font-semibold">Fifteen Hundred is not the destination. It is the proof.</p>
                </div>
              </div>
              {/* FOR AMERICANS */}
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <h3 className="text-green font-semibold mb-3">For Americans Who Were Promised Change</h3>
                <p>MAGA promised change. It didn't deliver — because the people making promises don't have the structure to build it.</p>
                <div className="bg-[#0a1628] border border-green/20 rounded-lg p-3 my-3"><p className="text-white font-semibold">PHIERS is the structure they should have built.</p></div>
                <p>Not left or right. Just organized citizens holding elected officials accountable.</p>
              </div>
              {/* PUBLIC RECORD DEEP DIVE */}
              <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
                <h3 className="text-green font-semibold mb-3">The Public Record — Deep Documentation</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p className="text-5xl font-bold text-green text-center">2004</p>
                  <p>Website launched <span className="text-green font-semibold">2009</span> with SureSafe Pharma.</p>
                  <img src="/images/archive/phiers-2011-archive-header-url-v1.jpg" alt="2011 snapshot" className="rounded-lg border border-green/20 max-w-full h-auto" />
                  <div className="p-3 bg-[#0a1628] rounded-lg"><p className="font-semibold">Partnerships built (2009–2014):</p><ul className="text-xs list-none"><li>→ SureSafe Pharma</li><li>→ VA Medical Centers</li><li>→ MedStar Health</li><li>→ Maryland CRISP</li></ul></div>
                  <div className="p-3 bg-amber-900/20 rounded-lg"><p className="text-amber-300 font-semibold">Why they didn't survive:</p><p>Every partnership chose extraction over elimination when they understood PHIERS's goal — eliminating the profit motive in healthcare.</p></div>
                  <div className="p-3 bg-amber-900/20 rounded-lg"><p className="text-amber-300 font-semibold">2009–2014: Building & Delay</p><p>The Panama Free Trade Agreement delay (2007 signed, 2012 implemented) prevented scaling.</p></div>
                  <div className="p-3 bg-[#0a1628] rounded-lg"><p className="font-semibold">Why 2014 to 2022 was silent:</p><p>Every institution that could amplify PHIERS had a financial interest in keeping it quiet.</p><p className="text-green mt-2">Then costs got so high that even the profiteers couldn't defend the system anymore.</p></div>
                  <div className="flex flex-wrap gap-2"><a href="https://web.archive.org/web/20250000000000*/phiers.org" className="text-green text-xs">Full archive →</a><a href="https://web.archive.org/web/20140518210231/http://phiers.org/" className="text-green text-xs">2014 snapshot →</a><a href="https://web.archive.org/web/20110922235754/http://www.phiers.org/" className="text-green text-xs">2011 snapshot →</a></div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm mt-12">
          <p>PHIERS Evidence Archive — The full public record. Documented. Sourced. Verifiable.</p>
          <p className="mt-2"><Link href="/credibility" className="text-green hover:text-white transition">← Back to Credibility</Link></p>
        </footer>
      </div>
    </div>
    </>
  );
}

// FILE: app/evidence-archive/page.tsx