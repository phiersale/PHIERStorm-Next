'use client';

// FILE: app/evidence-archive/page.tsx
// VERSION: 2.0 - COMPLETE restoration. All content from two-tier agreement.

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function EvidenceArchivePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {  
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
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
            { id: "healthcare", label: "Healthcare" },
            { id: "congressional", label: "Congressional Leverage" },
            { id: "professional-history", label: "Professional History" },
            { id: "public-health", label: "Public Health" },
            { id: "archived-websites", label: "Archived Websites" },
            { id: "video-archive", label: "Video Archive" },
            { id: "employment", label: "Employment & Resources" }
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

        {/* ========== HEALTHCARE ========== */}
        <section id="healthcare" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4 border-l-4 border-green pl-3">
            Healthcare
          </h2>
          <div className="space-y-6">
            
            {/* Videos */}
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <button
                onClick={() => toggleSection('healthcare-videos')}
                className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>📹 Videos</span>
                <span className="text-green">{expandedSection === 'healthcare-videos' ? '−' : '+'}</span>
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

            {/* Partnerships */}
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <button
                onClick={() => toggleSection('healthcare-partnerships')}
                className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>🤝 Partnerships</span>
                <span className="text-green">{expandedSection === 'healthcare-partnerships' ? '−' : '+'}</span>
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
                </div>
              )}
            </div>

            {/* Cost Comparisons */}
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <button
                onClick={() => toggleSection('healthcare-cost')}
                className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>💰 Cost Comparisons</span>
                <span className="text-green">{expandedSection === 'healthcare-cost' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'healthcare-cost' && (
                <div className="mt-4 space-y-3 text-gray-300 text-sm">
                  <p><span className="text-green font-semibold">Mark Cuban Cost Plus Drugs</span> — Launched 2022, 7M+ customers. Validated PHIERS 2009 model.</p>
                  <p><span className="text-green font-semibold">TrumpRx (2026)</span> — Cross-partisan partnership with Cuban. Further validation.</p>
                  <p><span className="text-green font-semibold">Telehealth vs. Traditional Care</span> — $600 vs $8,000-10,000 annually</p>
                  <div className="mt-3 p-3 bg-green/5 rounded border border-green/20">
                    <p className="text-gray-400 text-xs">Source: CMS published data. Full documentation available.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Timeline */}
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <button
                onClick={() => toggleSection('healthcare-timeline')}
                className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>📅 Timeline</span>
                <span className="text-green">{expandedSection === 'healthcare-timeline' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'healthcare-timeline' && (
                <div className="mt-4 space-y-2 text-gray-300 text-sm">
                  <p><span className="text-green">2004</span> — Earliest documented PHIERS record</p>
                  <p><span className="text-green">2007</span> — First recorded video of PHIERS framework</p>
                  <p><span className="text-green">2007</span> — VistA EHR Business/Senior Analyst, Intake/Eligibility/Enrollment Systems </p>
                  <p><span className="text-green">2007</span> — VA Enterprise-wide Reengineering Initiative, 1 of 5 Civilians in OCIO</p>
                  <p><span className="text-green">2009</span> — PHIERS.org launches with SureSafe Pharma partnership</p>
                  <p><span className="text-green">2011-2014</span> — Partnership negotiations with NASN, VA, MedStar, CRISP HIE</p>
                  <p><span className="text-green">2018</span> — VA HQ - Lead integration engineed for EHRM/Community Care Initiative</p>
                  <p><span className="text-green">2018</span> — Recruited for Maryland Healthcare Commission expert panels</p>
                  <p><span className="text-green">2022</span> — Mark Cuban validates model with Cost Plus Drugs</p>
                  <p><span className="text-green">2026</span> — TrumpRx + Cuban partnership; PHIERS evidence archive launched</p>
                </div>
              )}
            </div>

            {/* Archived Screenshots */}
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <button
                onClick={() => toggleSection('healthcare-screenshots')}
                className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>🖼️ Archived Screenshots</span>
                <span className="text-green">{expandedSection === 'healthcare-screenshots' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'healthcare-screenshots' && (
                <div className="mt-4">
                  <img
                    src="/images/archive/phiers-2011-archive-header-url-v1.jpg"
                    alt="PHIERS.org 2011 snapshot"
                    className="rounded-lg border border-green/20 max-w-full h-auto"
                  />
                  <p className="text-gray-500 text-xs mt-2 text-center">PHIERS.org — September 22, 2011</p>
                </div>
              )}
            </div>
        </section>

        {/* ========== CONGRESSIONAL LEVERAGE ========== */}
        <section id="congressional" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4 border-l-4 border-green pl-3">
            Congressional Leverage
          </h2>
          
          {/* FRAMING PARAGRAPH */}
          <p className="text-gray-400 text-sm mb-6">
            This archive contains the full public record behind PHIERS — organized by domain, documented, and sourced.
            It includes examples of how verified constituent participation interacts with congressional procedures,
            illustrating what becomes possible when 1,500 people in a district are on the record.
          </p>
          
          <div className="space-y-6">
            
            {/* Ralph Nader Research */}
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <button
                onClick={() => toggleSection('nader')}
                className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>📊 Ralph Nader — 1,500 Constituents Research</span>
                <span className="text-green">{expandedSection === 'nader' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'nader' && (
                <div className="mt-4 space-y-3 text-gray-300 text-sm">
                  <p>Decades of documented work inside Congress:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="text-amber-300 font-semibold">500 verified constituents</span> — Compels Representative to attend town hall</li>
                    <li><span className="text-amber-300 font-semibold">1,000 verified constituents</span> — Compels Senator to attend</li>
                    <li><span className="text-amber-300 font-semibold">1,500 verified constituents</span> — Signal becomes undeniable</li>
                  </ul>
                  <div className="mt-3 flex justify-center">
                    <img
                      src="/images/RalphNader-500-Unstoppable_Change.jpg"
                      alt="Ralph Nader — Unstoppable Change"
                      className="w-48 rounded-lg border border-green/30 cursor-pointer hover:opacity-90 transition"
                      onClick={() => {
                        const modal = document.createElement('div');
                        modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 cursor-pointer';
                        modal.onclick = () => document.body.removeChild(modal);
                        const img = document.createElement('img');
                        img.src = '/images/RalphNader-500-Unstoppable_Change.jpg';
                        img.alt = 'Ralph Nader – Unstoppable Change';
                        img.className = 'max-w-[95vw] max-h-[95vh] rounded-xl shadow-2xl';
                        modal.appendChild(img);
                        document.body.appendChild(modal);
                      }}
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-2">Source: Ralph Nader, documented in multiple civic campaigns and congressional testimony.</p>
                </div>
              )}
            </div>

            {/* Erica Chenoweth Research */}
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <button
                onClick={() => toggleSection('chenoweth')}
                className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>📈 Erica Chenoweth — 3.5% Participation Research</span>
                <span className="text-green">{expandedSection === 'chenoweth' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'chenoweth' && (
                <div className="mt-4 space-y-3 text-gray-300 text-sm">
                  <p>Harvard Kennedy School research analyzing 323 campaigns (1900-2006):</p>
                  <p>When ~3.5% of a population actively participates, systems change. Governments respond. Congress listens.</p>
                  <div className="mt-3 p-3 bg-green/5 rounded border border-green/20">
                    <img
                      src="/images/3.5pct_Erica_Chenoweth.jpg"
                      alt="3.5% threshold research"
                      className="rounded max-w-full h-auto"
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-2">Source: Chenoweth, E. & Stephan, M. (2011). Why Civil Resistance Works.</p>
                </div>
              )}
            </div>

            {/* District Pressure Models */}
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <button
                onClick={() => toggleSection('district')}
                className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>🗺️ District Pressure Models</span>
                <span className="text-green">{expandedSection === 'district' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'district' && (
                <div className="mt-4 space-y-3 text-gray-300 text-sm">
                  <p>PHIERS district-level organizing documentation:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Organized constituents → public town hall demands</li>
                    <li>Refusal or corrupt response → public investigation</li>
                    <li>Findings published: votes, donors, defense contractor ties</li>
                    <li>Repeated ignoring → public exposure + voting power</li>
                  </ul>
                  <div className="mt-3">
                    <img
                      src="/images/District_Accountability_Dashboard.jpg"
                      alt="District Accountability Dashboard"
                      className="rounded-lg border border-green/20 max-w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* DISTRICT OUTCOMES — The Power of Being Counted */}
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <details className="group">
                <summary className="cursor-pointer text-lg font-semibold text-green-400 list-none flex items-center justify-between">
                  <span>🎯 District Outcomes — The Power of Being Counted</span>
                  <span className="group-open:rotate-90 transition-transform">▶</span>
                </summary>
                <div className="mt-4 space-y-4 text-gray-300 text-sm">
                  <p>
                    This video explains how district-level civic participation interacts with congressional
                    procedures. It focuses on institutional mechanics, not political advocacy, and demonstrates
                    how constituent engagement can shape outcomes within established rules.
                  </p>
                  <p className="text-green-300 text-xs font-semibold">
                    "The Power of Being Counted" — A clear explanation of how 500, 1,000, and 1,500 verified
                    constituents can force Congress to show up, answer questions, and act. This is the structure
                    that turns public attention into real leverage — and why PHIERS exists.
                  </p>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-700">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/EWWzHhS1is4"
                      title="The Power of Being Counted"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-xs text-gray-500">
                    Note: This example is provided for civic education and structural understanding only.
                    It does not advocate for or against any individual or political outcome.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ========== PROFESSIONAL HISTORY ========== */}
        <section id="professional-history" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4 border-l-4 border-green pl-3">
            Professional History
          </h2>
          <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
            <div className="space-y-4 text-gray-300 text-sm">
              
              <div>
                <p className="text-green font-semibold">2011 – Present — Chief Solutions Architect, PHIERS.org</p>
                <p className="text-gray-400 text-xs ml-4">Researching, designing, and deploying public‑health interventions; supporting frontline workers; expanding access to coordinated care; building the architecture that became PHIERS.</p>
              </div>

              <div>
                <p className="text-green font-semibold">2009 – Present — Chief Solutions Architect, PHIERS.org (Healthcare Innovation)</p>
                <p className="text-gray-400 text-xs ml-4">Leading healthcare innovation: designing non‑profit healthcare delivery systems, coordinating trusted supplier networks, converting cost savings into community economic development.</p>
              </div>

              <div>
                <p className="text-green font-semibold">2008 – Present — Chief Solutions Architect, Health Reform Coalition</p>
                <p className="text-gray-400 text-xs ml-4">Architect of the original PHIERS model (Public Health Information Exchange & Referral Service).</p>
              </div>

              <div>
                <p className="text-green font-semibold">2007 – 2018 — U.S. Department of Veterans Affairs (multiple assignments)</p>
                <p className="text-gray-400 text-xs ml-4">Business Analyst → Senior Business Analyst, Registration, Eligibility & Enrollment Systems Group. Focus on community‑based care integration. One of five civilians selected for the VA's Enterprise‑wide reengineering initiative. Later served as Integration Engineer / EHR Consultant supporting VistA Evolution and EHR Modernization (EHRM).</p>
              </div>

              <div>
                <p className="text-green font-semibold">2007 – Present — President & CEO, Community‑Enabling Solutions, Inc.</p>
                <p className="text-gray-400 text-xs ml-4">Consulting and senior analyst work supporting U.S. Department of Veterans Affairs and other healthcare integration initiatives.</p>
              </div>

            </div>
            
            {/* LinkedIn Link */}
            <div className="mt-5 pt-3 border-t border-green/20 text-center">
              <a 
                href="https://www.linkedin.com/in/will-price-phiers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green text-xs hover:underline inline-flex items-center gap-1"
              >
                📄 Full professional history on LinkedIn →
              </a>
              <p className="text-gray-500 text-[10px] mt-1">(Note: LinkedIn login may be required)</p>
            </div>
          </div>
        </section>

        {/* ========== PUBLIC HEALTH ========== */}
        <section id="public-health" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4 border-l-4 border-green pl-3">
            Public Health
          </h2>
          <div className="space-y-6">
            
            {/* Pandemic Videos */}
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <button
                onClick={() => toggleSection('pandemic')}
                className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>🦠 Pandemic Videos (2020-2022)</span>
                <span className="text-green">{expandedSection === 'pandemic' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'pandemic' && (
                <div className="mt-4 space-y-2 text-gray-300 text-sm">
                  <p>Public health advocacy and pandemic response documentation:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Public Health Advocacy & Pandemics (2021)</li>
                    <li>A Better Pandemic Response (2022)</li>
                    <li>Family Matters, Healthcare and YOU (2017)</li>
                    <li>Great Minds Think Alike (2018)</li>
                    <li>A Peaceful Warrior: On Health & Race</li>
                  </ul>
                  <p className="text-gray-500 text-xs mt-2">Full video library available in Video Archive section below.</p>
                </div>
              )}
            </div>

            {/* Telehealth Adoption Timeline */}
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <button
                onClick={() => toggleSection('telehealth')}
                className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>📱 Telehealth Adoption Timeline</span>
                <span className="text-green">{expandedSection === 'telehealth' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'telehealth' && (
                <div className="mt-4 space-y-2 text-gray-300 text-sm">
                  <p>PHIERS documented distributed telehealth architecture over a decade before mainstream adoption:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>2009-2012 — Coordinated care architecture designed</li>
                    <li>2014-2018 — Industry adoption begins</li>
                    <li>2020 — Pandemic accelerates telehealth</li>
                    <li>2023 — Zortt launches cooperative access model</li>
                  </ul>
                  <p className="text-gray-500 text-xs mt-2">Teladoc, Zocdoc, and Zortt now execute models PHIERS designed years earlier.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========== ARCHIVED WEBSITES ========== */}
        <section id="archived-websites" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4 border-l-4 border-green pl-3">
            Archived Websites
          </h2>
          <div className="space-y-6">
            
            <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
              <button
                onClick={() => toggleSection('archives')}
                className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>📦 Internet Archive Snapshots</span>
                <span className="text-green">{expandedSection === 'archives' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'archives' && (
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-green font-semibold">2009 — SureSafe Pharma partnership</p>
                    <p className="text-gray-400 text-xs">Direct-to-consumer pharmaceutical model launched</p>
                  </div>
                  <div>
                    <p className="text-green font-semibold">2011 — Health Reform Coalition</p>
                    <img
                      src="/images/archive/phiers-2011-archive-header-url-v1.jpg"
                      alt="2011 snapshot"
                      className="rounded-lg border border-green/20 max-w-full h-auto mt-2"
                    />
                  </div>
                  <div>
                    <p className="text-green font-semibold">2014 — Partnerships & Operations</p>
                    <p className="text-gray-400 text-xs">
                      <a href="https://web.archive.org/web/20140518210231/http://phiers.org/" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">
                        View 2014 snapshot →
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-green font-semibold">2020 — Pandemic Response</p>
                    <p className="text-gray-400 text-xs">
                      <a href="https://web.archive.org/web/20250000000000*/phiers.org" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">
                        Full archive history (50+ captures, 2007–2025) →
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========== VIDEO ARCHIVE (COMPLETE LIBRARY) ========== */}
        <section id="video-archive" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4 border-l-4 border-green pl-3">
            Video Archive
          </h2>
          <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
            <button
              onClick={() => toggleSection('videos')}
              className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
              >
                <span>📹 Complete Video Library (2007–Now)</span>
                <span className="text-green">{expandedSection === 'videos' ? '−' : '+'}</span>
              </button>
              {expandedSection === 'videos' && (
                <div className="mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    
                    {/* Video 1 */}
                    <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700">
                      <div className="relative pb-[56.25%]">
                        <iframe
                          src="https://www.youtube.com/embed/fWsifllWmnY"
                          title="A Spiritual Solution to Every Problem"
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-2 text-center">
                        <p className="text-gray-300 text-xs">A Spiritual Solution to Every Problem (2016)</p>
                      </div>
                    </div>

                    {/* Video 2 */}
                    <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700">
                      <div className="relative pb-[56.25%]">
                        <iframe
                          src="https://www.youtube.com/embed/mxDkyFfBnZw"
                          title="PHIERS Sizzle Film"
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-2 text-center">
                        <p className="text-gray-300 text-xs">Sizzle Film (2011)</p>
                      </div>
                    </div>

                    {/* Video 3 */}
                    <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700">
                      <div className="relative pb-[56.25%]">
                        <iframe
                          src="https://www.youtube.com/embed/r1_y7MXNt4E"
                          title="Patriots on PHIERS"
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-2 text-center">
                        <p className="text-gray-300 text-xs">Patriots on PHIERS (2014)</p>
                      </div>
                    </div>

                    {/* Video 4 */}
                    <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700">
                      <div className="relative pb-[56.25%]">
                        <iframe
                          src="https://www.youtube.com/embed/JWC6ztov2sA"
                          title="Silos to Synergies"
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-2 text-center">
                        <p className="text-gray-300 text-xs">Silos to Synergies (2014)</p>
                      </div>
                    </div>

                    {/* Video 5 */}
                    <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700">
                      <div className="relative pb-[56.25%]">
                        <iframe
                          src="https://player.vimeo.com/video/34036317"
                          title="PHIERS Framework"
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-2 text-center">
                        <p className="text-gray-300 text-xs">PHIERS Framework (2011)</p>
                      </div>
                    </div>

                    {/* Video 6 */}
                    <div className="bg-[#0a1628] rounded-lg overflow-hidden border border-gray-700">
                      <div className="relative pb-[56.25%]">
                        <iframe
                          src="https://player.vimeo.com/video/37264685"
                          title="PHIERS Strategy"
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-2 text-center">
                        <p className="text-gray-300 text-xs">PHIERS Strategy (2012)</p>
                      </div>
                    </div>

                  </div>
                  <p className="text-gray-500 text-xs text-center mt-4 italic">Hundreds more archival videos document the full journey. Full access available upon request for researchers and journalists.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========== EMPLOYMENT & RESOURCES ========== */}
        <section id="employment" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green mb-4 border-l-4 border-green pl-3">
            Employment & Resources
          </h2>
          <div className="bg-[#0a1628]/40 rounded-lg p-5 border border-gray-800">
            <button
              onClick={() => toggleSection('employment-details')}
              className="w-full text-left flex justify-between items-center text-white font-semibold text-lg"
            >
              <span>💼 Job Market Research & Resource Coordination</span>
              <span className="text-green">{expandedSection === 'employment-details' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'employment-details' && (
              <div className="mt-4 space-y-3 text-gray-300 text-sm">
                <p><span className="text-green font-semibold">PHIERWorks</span> — AI‑resistant job training and placement</p>
                <p><span className="text-green font-semibold">PHIERSale</span> — Cooperative marketplace for essential goods</p>
                <p><span className="text-green font-semibold">PHIERplace</span> — Resource matching for communities</p>
                <p><span className="text-green font-semibold">Community organization partnerships</span> — Documented collaborations with housing authorities, health systems, and veteran services</p>
                <p className="text-gray-500 text-xs mt-3">Full documentation available in the Public Record section above.</p>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm mt-12">
          <p>PHIERS Evidence Archive — The full public record. Documented. Sourced. Verifiable.</p>
          <p className="mt-2">
            <Link href="/credibility" className="text-green hover:text-white transition">
              ← Back to Credibility
            </Link>
          </p>
        </footer>
      </div>
    </div>
    </>
  );
}

// FILE: app/evidence-archive/page.tsx