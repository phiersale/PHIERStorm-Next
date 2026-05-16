/* FILE: app/newsflash/ClientNewsflash.tsx */
/* VERSION: 2.1.0 – client component with accordion */

'use client';

import { useState } from 'react';
import './newsflash.css';

export default function ClientNewsflash() {
  const [openSections, setOpenSections] = useState<boolean[]>([
    false, false, false, false, false, false, false
  ]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => prev.map((v, i) => i === index ? !v : v));
  };

  const CollapsibleSection = ({ 
    index, icon, title, pillText, pillClass, children, note 
  }: any) => {
    const isOpen = openSections[index];
    return (
      <div className="nf-section">
        <div 
          className="nf-section-header cursor-pointer select-none flex justify-between items-center"
          onClick={() => toggleSection(index)}
        >
          <div className="flex items-center gap-3">
            {icon}
            <h2>{title}</h2>
          </div>
          <span className="text-gray-500 text-xl font-bold">
            {isOpen ? '−' : '+'}
          </span>
        </div>
        {isOpen && (
          <div className="mt-3">
            <span className={`nf-pill ${pillClass}`}>{pillText}</span>
            {children}
            {note && <div className="nf-phiers-note">{note}</div>}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="nf-wrap">
      <div className="nf-header">
        <div className="flex items-center gap-3">
          <a href="/">
            <img src="/images/PHIERS-Pause.png" alt="PHIERS logo" className="h-10 w-auto" />
          </a>
          <div className="nf-logo">PHIERS<span>.org</span> News Flash</div>
        </div>
        <div className="nf-tagline">Organized leverage. The kind Congress already fears.</div>
        <div className="nf-dateline">May 2026 &nbsp;·&nbsp; Issue #2</div>
      </div>

      {/* Breaking banner */}
      <div className="nf-breaking">
        <span className="nf-breaking-label">Breaking</span>
        <p><strong>The Supreme Court just gutted the Voting Rights Act.</strong> The 6-3 ruling in <em>Louisiana v. Callais</em> eliminated Section 2 — the last major protection against racially discriminatory redistricting. Tennessee, Florida, and Louisiana were already redrawing maps within 48 hours. This is Reconstruction all over again. Here's why PHIERS is the only plan built for this moment.</p>
      </div>

      {/* Lede */}
      <div className="nf-lede">
        <p><strong>They finished the job on the Voting Rights Act.</strong></p>
        <p>States moved immediately — redrawing districts to erase Black political representation at every level: Congress, state legislatures, city councils, school boards. No guardrails left. Both parties watched. Neither stopped it.</p>
        <p>The courts are done protecting us. Washington isn't coming. We're not waiting for the midterms.</p>
        <p>1,500 organized people per district. That's the lever. That's the plan. Here's what's at stake — and what we do about it.</p>
      </div>

      {/* Fetterman card */}
      <div className="nf-fetterman">
        <h2>⚠️ Proof of concept: what accountability looks like</h2>
        <p>Senator John Fetterman was the only Democrat to vote against ending the war — putting the interests of a foreign government above the survival of his own constituents. That vote is documented. His district knows it.</p>
        <p>PHIERS can hold him accountable through a formal, organized, district-level process — and turn it into a replicable model. Any elected official who votes against the people they represent faces the same organized, documented consequence. That's not protest. That's leverage.</p>
      </div>

      {/* Collapsible sections */}
      <CollapsibleSection
        index={0}
        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>}
        title="The Voting Rights Act is gone. Now what?"
        pillText="Most urgent — act now"
        pillClass="pill-red"
        note="What PHIERS does about it: District-level organizing doesn't depend on Section 2 or the courts. 1,500 organized constituents make a representative's seat uncertain — before election day, regardless of how the maps are drawn. That's leverage no court ruling can touch."
      >
        <p>The Supreme Court's ruling in <em>Louisiana v. Callais</em> didn't just gut one provision. It cleared the way for states to redraw every congressional district, state legislature, county commission, city council, and school board in America — with no requirement to prove they aren't targeting Black voters.</p>
        <p>Tennessee is eliminating the majority-Black Memphis congressional district. Florida eliminated a near-majority Black South Florida district. Louisiana threw out votes already cast to eliminate New Orleans's Black congressional district. The pattern is not subtle.</p>
        <p>As Justice Kagan wrote in dissent: this ruling "threatens a half-century's worth of gains in voting equality."</p>
      </CollapsibleSection>

      <CollapsibleSection
        index={1}
        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
        title="End the wars. Rebuild the country."
        pillText="Survival issue #2"
        pillClass="pill-red"
        note="What PHIERS does about it: The petition tells your representative exactly where you stand — in writing, by district, with your name attached. Representatives who ignore it face organized primary challenges and public accountability. That's how we change Congress without waiting two years."
      >
        <p>Senate Republicans have now blocked an Iran War Powers resolution six times — preventing Congress from reining in military strikes being conducted without a single Congressional vote authorizing them. The Pentagon has struck nearly 200 people in the Caribbean and Pacific, claiming without evidence they were all carrying drugs.</p>
        <p>Trillions spent on foreign wars. Zero spent on the communities those soldiers came from. This is not idealism — ending wars is the economic prerequisite for everything else on this list.</p>
      </CollapsibleSection>

      <CollapsibleSection
        index={2}
        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
        title="Healthcare: the math Congress can't ignore"
        pillText="The PHIERS core solution"
        pillClass="pill-teal"
        note="What PHIERS does about it: The survey tells Congress what constituents demand. The petition backs it with names. 1,500 people per district turns a demand into a consequence."
      >
        <p>$600 per year covers telehealth for 234 million Americans. No new legislation required. No tax increase. No deficit spending. Collective buying power — the same leverage corporations use against us, turned around.</p>
        <p>Lower drug prices. Living-wage jobs. A safety net that actually holds. Funded by savings we create together — not by waiting for Congress to act.</p>
      </CollapsibleSection>

      <CollapsibleSection
        index={3}
        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M3 9l9-6 9 6v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
        title="Housing, wages & the cost of staying alive"
        pillText="Economic justice"
        pillClass="pill-amber"
      >
        <p>Corporate landlords are buying up neighborhoods. Fair housing enforcement is being gutted under the cover of "eliminating DEI." Wages haven't kept pace with rent, food, or medicine in a decade.</p>
        <p>These are not separate problems. They are one problem: the needs of the few being put ahead of the survival of the many. The same communities losing voting power are the same communities losing housing access. That's not coincidence. That's strategy.</p>
      </CollapsibleSection>

      <CollapsibleSection
        index={4}
        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>}
        title="Surveillance, civil liberties & the rule of law"
        pillText="Everyone's fight"
        pillClass="pill-blue"
        note="What PHIERS does about it: PHIERS' district-by-district model is built to overcome redistricting and voter suppression at the ground level — where the decisions are made and where the consequences land."
      >
        <p>42 Democrats joined House Republicans to expand warrantless surveillance powers — handing the Trump administration sweeping spy authority that has already been used against Black Lives Matter protesters, journalists, and members of Congress.</p>
        <p>ICE has hired private security accused of torture to track undocumented children. The FEC has been deliberately left understaffed so campaign finance laws can't be enforced. Press freedom is under executive threat. The tools being used against Black and immigrant communities today will be used against everyone else tomorrow.</p>
      </CollapsibleSection>

      <CollapsibleSection
        index={5}
        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M3 9l9-6 9 6v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
        title="Protect public institutions before they're gone"
        pillText="Public goods"
        pillClass="pill-teal"
      >
        <p>Privatizing the Post Office hits rural, Black, elderly, and low-income communities hardest — cutting access to medicine, ballots, and economic lifelines. Data centers are being placed in low-income communities with massive environmental cost and zero community benefit.</p>
        <p>Public goods exist to serve people. Not to extract from them. Not to be sold to the highest bidder while the communities that need them most get nothing.</p>
      </CollapsibleSection>

      <CollapsibleSection
        index={6}
        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>}
        title="Stop the authoritarian drift — before it's too late"
        pillText="Accountability"
        pillClass="pill-red"
      >
        <p>Trump has stated publicly that he doesn't care if we survive his policies. Conflicts of interest, self-dealing, and the corporate capture of government are not governing — they are looting. The FEC is understaffed on purpose. The courts have been packed. The Voting Rights Act is gone.</p>
        <p>Fascism always lands hardest on Black, immigrant, disabled, and poor communities first. It always has. Name it. Fight it. Don't normalize it. And don't wait for someone else to stop it.</p>
      </CollapsibleSection>

      {/* CTA */}
      <div className="nf-cta">
        <h2>The courts won't save us. The maps are already being redrawn.</h2>
        <p>One plan. 1,500 signatures per district. Addresses the voting rights crisis, the wars, the healthcare gap, the housing collapse — without waiting for midterms, without waiting for courts, without asking permission.</p>
        <span className="sig-count">1,500</span>
        <span className="sig-label">signatures to get the ball rolling</span>
        <br />
        <a className="nf-btn" href="https://phiers.org">Sign the petition at PHIERS.org →</a>
        <p style={{ marginTop: '1rem', fontSize: '13px', color: '#9FE1CB' }}>Tell us the issues you want addressed. This plan gets stronger when more people shape it.</p>
      </div>

      <div className="nf-footer">
        <p>PHIERS.org — Organized people, by district, with real consequences. <a href="https://phiers.org">phiers.org</a></p>
        <p>Not protest. Leverage. &nbsp;·&nbsp; Forward this to five people who are ready to stop watching and start acting.</p>
      </div>
    </div>
  );
}
/* FILE: app/newsflash/ClientNewsflash.tsx */