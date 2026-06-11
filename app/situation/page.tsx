// app/situation/page.tsx
// Dark theme, interleaved analysis & What's New, sorted newest first

import entriesData from '@/data/whatsnew/entries.json';

export const metadata = {
  title: 'THE SITUATION – PHIERS | Latest Developments & Analysis',
  description: 'Real‑time updates on voting rights, wars, healthcare, and how PHIERS responds – merged in one chronological briefing.',
};

function parseDate(dateStr: string): Date {
  const clean = dateStr.split(' —')[0];
  return new Date(clean);
}

export default function SituationPage() {
  const whatsNewEntries = [...entriesData.entries];

  const analysisSections = [
    // ANCHOR for modal
    {
      date: "",
      tag: "",
      pillColor: "",
      headline: "",
      whatHappened: <div id="trust-update" />,
      whyItMatters: "",
      sources: []
    },
    // NEW STORY 0 – MAY 2026: Trust & participation update
    {
      date: "MAY 2026",
      tag: "UPDATE",
      pillColor: "teal",
      headline: "A change in how we're asking for your participation",
      whatHappened: (
        <>
          <p>PHIERS has been pushing hard for petition signatures. We're pulling back on that — not because the petition doesn't matter, but because we got the sequence wrong.</p>
          <p>Signatures mean more when the people signing them understand what they're signing and feel genuinely heard. So we're flipping the order: survey first, petition second.</p>
          <p>We've also corrected language on the petition page that was imprecise about privacy. Your name is never made public. We share only district‑level counts with elected officials who request verification that real constituents in their district are paying attention. Your email is optional. Nothing is sold or shared.</p>
          <p>If you have questions, the survey is the place to ask them. We respond personally, three nights a week.</p>
        </>
      ),
      whyItMatters: "",
      sources: []
    },
    // NEW STORY 1 – May 21, 2026: Congress walked out
    {
      date: "MAY 21, 2026",
      tag: "ANALYSIS",
      pillColor: "red",
      headline: "Congress walked out to avoid a vote on the Epstein files",
      whatHappened: (
        <>
          <p>In July 2025, House Speaker Mike Johnson sent lawmakers home early for the August recess to avoid Republicans being forced to vote on releasing the Jeffrey Epstein files. The House floor was paralyzed for days, and they left with tight deadlines on major legislation when they returned in September. A bipartisan resolution co-sponsored by nine Democrats and eleven Republicans would have forced the complete release of the government's Epstein files — Johnson blocked the vote entirely.</p>
          <p>Your rep took a five‑week vacation rather than cast a vote. Not on a hard issue — on whether to release information the president himself promised to release. Bipartisan agreement wasn't enough. The Speaker simply closed the building.</p>
        </>
      ),
      whyItMatters: "This is exactly what 1,500 organized constituents per district changes. When your rep knows that a coordinated, visible, accountable voter bloc is watching every procedural move — not just election day — walking out of town becomes a career calculation, not a free escape. Scattered frustration lets them leave. Organized pressure makes them stay.",
      sources: [
        { name: "CNBC", url: "https://www.cnbc.com/2025/07/22/epstein-files-house-vote-blocked.html" },
        { name: "NPR", url: "https://www.npr.org/2025/07/23/epstein-files-johnson-recess" },
        { name: "The Guardian", url: "https://www.theguardian.com/us-news/2025/jul/22/epstein-files-congress-recess" },
      ]
    },
    // NEW STORY 2 – May 21, 2026: DOJ corruption unit gutted
    {
      date: "MAY 21, 2026",
      tag: "ANALYSIS",
      pillColor: "amber",
      headline: "The unit that prosecuted corrupt officials was gutted",
      whatHappened: (
        <>
          <p>The DOJ's Public Integrity Section — created after Watergate specifically to investigate and prosecute corrupt politicians — had around 40 full‑time attorneys when Trump returned to office in January 2025. It has since dropped to just two. The section was handling 175–200 open corruption cases when Trump returned to office. That number has plummeted to around 20. Simultaneously, at least 15 former elected officials charged with or convicted of corruption offenses have been pardoned by Trump since he returned to office.</p>
          <p>The one federal unit built to hold elected officials accountable for crimes has been reduced from 40 prosecutors to 2. Corruption cases against politicians are being dropped or handed off and quietly buried. The people who were supposed to be prosecuted are being pardoned instead.</p>
        </>
      ),
      whyItMatters: "When the watchdog gets defunded, the only remaining check is organized constituents who track their rep's votes, public statements, and financial relationships — and show up with that information at town halls, in district offices, and at the ballot box. The 1,500 model creates that local accountability layer where the federal one no longer exists.",
      sources: [
        { name: "NPR", url: "https://www.npr.org/2026/05/21/doj-public-integrity-section-gutted" },
        { name: "KPBS", url: "https://www.kpbs.org/news/politics/2026/05/21/doj-corruption-unit" },
        { name: "Sen. Whitehouse's office", url: "https://www.whitehouse.senate.gov/news/releases/2026/05/doj-pardon-abuse" },
      ]
    },
    // NEW STORY 3 – May 21, 2026: U.S. went to war without a vote
    {
      date: "MAY 21, 2026",
      tag: "ANALYSIS",
      pillColor: "teal",
      headline: "The U.S. went to war without a Congressional vote",
      whatHappened: (
        <>
          <p>In late February 2026, the United States and Israel launched coordinated military strikes against Iran without a single Congressional vote authorizing the use of force. The strikes targeted nuclear facilities and military installations, escalating a conflict that has already drawn in regional allies and pushed the global economy toward recession. Congress was not consulted, and the administration cited an expansive interpretation of the 2001 AUMF — a law written to authorize the war in Afghanistan.</p>
          <p>For the third time in a generation, American soldiers were sent into combat without a declaration of war, without a public debate, and without the consent of the people they are supposed to represent. The president's lawyers found a loophole. Congress did nothing to close it.</p>
        </>
      ),
      whyItMatters: "The PHIERS petition doesn't ask — it tells your representative exactly where you stand on war powers. When 1,500 people in a district go on record saying 'no more undeclared wars,' that representative must respond or face a coordinated primary challenge. That's how you restore congressional war powers without waiting for the courts.",
      sources: [
        { name: "Council on Foreign Relations", url: "https://www.cfr.org/blog/2026/03/iran-strikes-congressional-authorization" },
        { name: "Associated Press", url: "https://apnews.com/article/iran-us-strikes-2026-congress-8237fgh" },
      ]
    },
    // NEW STORY 4 — Screwworm / Food Safety
    {
      date: "JUNE 3, 2026",
      tag: "ANALYSIS",
      pillColor: "amber",
      headline: "Flesh-eating screwworm returns to U.S. for first time since the 1960s",
      whatHappened: (
        <>
          <p>USDA confirmed New World screwworm in Texas cattle on June 3, 2026 — the first domestic detection since the parasite was eradicated decades ago. Parasitologists warn it likely signals reestablishment, not an isolated case, with potentially hundreds to thousands of flies already present. Canada immediately restricted livestock imports from affected areas.</p>
          <p>The pest spreads through living tissue of warm-blooded animals and can be fatal without treatment. USDA says the food supply is safe — but the livestock industry, already strained, faces a new threat with no quick fix. Ramping sterile-fly production to full capacity could take 18 months to two years.</p>
        </>
      ),
      whyItMatters: "Food safety, livestock health, and supply chain stability are not separate from healthcare and economic security — they are the same system. PHIERPlace exists to connect communities to early warning systems before crises compound. Congress has the tools to fund preparedness infrastructure. Organized constituents are the pressure that makes them use those tools.",
      sources: [
        { name: "USDA APHIS", url: "https://www.aphis.usda.gov/news/agency-announcements/usda-confirms-presence-new-world-screwworm-united-states" },
        { name: "CNBC", url: "https://www.cnbc.com/2026/06/08/texas-screwworm-cases-food-supply-brooke-rollins.html" },
        { name: "U.S. News", url: "https://www.usnews.com/news/national-news/articles/2026-06-04/the-flesh-eating-screwworm-fly-is-back-heres-what-officials-are-doing-about-it" },
      ]
    },
    // NEW STORY 5 — TrumpRx / Cuban / PHIERSale
    {
      date: "MAY 18, 2026",
      tag: "ANALYSIS",
      pillColor: "teal",
      headline: "Trump and Mark Cuban partner on TrumpRx — but 5 million Medicaid patients are still left out",
      whatHappened: (
        <>
          <p>The White House announced a major TrumpRx expansion with Cuban's Cost Plus Drugs, Amazon Pharmacy, and GoodRx — adding 600 generic medications at transparent cash prices. Cuban, who endorsed Kamala Harris in 2024, stood beside Trump at the White House because the goal of lowering drug prices transcends politics.</p>
          <p>Analysts note the model still doesn't reach Medicare, Medicaid, ACA, or uninsured populations fully. At least 350 branded medications saw price increases at the start of 2026 even as the administration struck deals with individual manufacturers.</p>
        </>
      ),
      whyItMatters: "PHIERS documented this exact model with SureSafe Pharma in 2009 — 13 years before Cuban launched Cost Plus Drugs. PHIERSale is the cooperative marketplace built specifically for the populations TrumpRx still misses: Medicaid, Medicare, ACA, uninsured, unemployed. Cuban's model proves the savings work. PHIERSale completes it for everyone else.",
      sources: [
        { name: "Fortune", url: "https://fortune.com/2026/05/19/trump-rx-mark-cuban-prescription-prices-drugs-medicine/" },
        { name: "AJMC", url: "https://www.ajmc.com/view/trumprx-expands-generic-drug-offerings-with-mark-cuban-partnership-amazon-pharmacy-support" },
        { name: "American Thinker", url: "https://www.americanthinker.com/blog/2026/05/the_trumprx_expansion_and_the_mark_cuban_partnership.html" },
      ]
    },
    // NEW STORY 6 — Medicaid Work Requirements
    {
      date: "MAY 1, 2026",
      tag: "ANALYSIS",
      pillColor: "red",
      headline: "Medicaid work requirements begin — 5 million projected to lose coverage",
      whatHappened: (
        <>
          <p>New federal requirements under the One Big Beautiful Bill Act mandate 80 hours per month of work, community service, or education for Medicaid expansion enrollees. Nebraska became the first state to enforce them on May 1, 2026. Montana, Arkansas, and Iowa follow later this year. All states must comply by January 2027.</p>
          <p>Health researchers and the Congressional Budget Office project more than 5 million people could lose coverage by 2034 — and most of those people are already working. The requirement adds bureaucratic burden without increasing employment.</p>
        </>
      ),
      whyItMatters: "PHIERWorks was designed exactly for this moment — connecting people to verified employment, training, and community service opportunities that satisfy these requirements while building real economic stability. The people most at risk are the people PHIERS was built to serve. This is not a future problem. It is happening now.",
      sources: [
        { name: "GoodRx", url: "https://www.goodrx.com/insurance/medicaid/medicaid-work-requirements" },
        { name: "KFF", url: "https://www.kff.org/medicaid/an-early-look-at-policy-decisions-as-states-get-ready-to-implement-work-requirements/" },
        { name: "CBPP", url: "https://www.cbpp.org/research/health/states-need-more-time-to-prepare-for-medicaid-work-requirement" },
      ]
    },
    // NEW STORY 7 — 25th Amendment / Iran War
    {
      date: "APRIL 8, 2026",
      tag: "ANALYSIS",
      pillColor: "red",
      headline: "70+ lawmakers called for Trump's removal after he threatened to wipe out 'a whole civilization'",
      whatHappened: (
        <>
          <p>After Trump posted on Truth Social that "a whole civilization will die tonight" if Iran didn't open the Strait of Hormuz by 8 p.m., more than 70 congressional Democrats called for invoking the 25th Amendment or beginning impeachment proceedings. Sen. Chris Murphy called the behavior "completely, utterly unhinged." Rep. Diana DeGette said "25th Amendment proceedings must begin immediately."</p>
          <p>Republicans in both chambers took no action. The 25th Amendment has never been invoked under Section 4, and doing so would require Vance, a majority of the Cabinet, and ultimately two-thirds of Congress.</p>
        </>
      ),
      whyItMatters: "This is exactly what happens when Congress has no organized constituent pressure. Representatives stay silent because silence has no cost. When 1,500 verified constituents per district go on record demanding their representative act — silence becomes politically impossible. PHIERS is the mechanism that raises the cost of inaction.",
      sources: [
        { name: "NBC News", url: "https://www.nbcnews.com/politics/congress/democrats-trump-removal-iran-threats-impeachment-25th-amendment-rcna267194" },
        { name: "The Hill", url: "https://thehill.com/homenews/house/5819669-democrats-trump-removal-25-amendment-impeachment/" },
        { name: "Time", url: "https://time.com/article/2026/04/06/25th-amendment-constitution-trump-war-iran-threat-insanity/" },
      ]
    },
    // Existing analysis sections follow (kept as they were)
    {
      date: "APRIL 29, 2026",
      tag: "ANALYSIS",
      pillColor: "teal",
      headline: "The Voting Rights Act is gone. Now what?",
      whatHappened: (
        <>
          <p>The Supreme Court's ruling in <em>Louisiana v. Callais</em> didn't just gut one provision. It cleared the way for states to redraw every congressional district, state legislature, county commission, city council, and school board in America — with no requirement to prove they aren't targeting Black voters.</p>
          <p>Tennessee is eliminating the majority-Black Memphis congressional district. Florida eliminated a near-majority Black South Florida district. Louisiana threw out votes already cast to eliminate New Orleans's Black congressional district. The pattern is not subtle.</p>
          <p>As Justice Kagan wrote in dissent: this ruling "threatens a half-century's worth of gains in voting equality."</p>
        </>
      ),
      whyItMatters: "District-level organizing doesn't depend on Section 2 or the courts. 1,500 organized constituents make a representative's seat uncertain — before election day, regardless of how the maps are drawn. That's leverage no court ruling can touch.",
      sources: []
    },
    {
      date: "MAY 13, 2026",
      tag: "ANALYSIS",
      pillColor: "amber",
      headline: "Fetterman: what accountability looks like",
      whatHappened: (
        <>
          <p>Senator John Fetterman was the only Democrat to vote against ending the war — putting the interests of a foreign government above the survival of his own constituents. That vote is documented. His district knows it.</p>
          <p>PHIERS can hold him accountable through a formal, organized, district-level process — and turn it into a replicable model. Any elected official who votes against the people they represent faces the same organized, documented consequence. That's not protest. That's leverage.</p>
        </>
      ),
      whyItMatters: "",
      sources: []
    },
    {
      date: "MAY 18, 2026",
      tag: "ANALYSIS",
      pillColor: "red",
      headline: "End the wars. Rebuild the country.",
      whatHappened: (
        <>
          <p>Senate Republicans have now blocked an Iran War Powers resolution six times — preventing Congress from reining in military strikes being conducted without a single Congressional vote authorizing them. The Pentagon has struck nearly 200 people in the Caribbean and Pacific, claiming without evidence they were all carrying drugs.</p>
          <p>Trillions spent on foreign wars. Zero spent on the communities those soldiers came from. This is not idealism — ending wars is the economic prerequisite for everything else on this list.</p>
        </>
      ),
      whyItMatters: "The petition tells your representative exactly where you stand — in writing, by district, with your name attached. Representatives who ignore it face organized primary challenges and public accountability. That's how we change Congress without waiting two years.",
      sources: []
    },
    {
      date: "MAY 18, 2026",
      tag: "ANALYSIS",
      pillColor: "teal",
      headline: "Healthcare: the math Congress can't ignore",
      whatHappened: (
        <>
          <p>$600 per year covers telehealth for 234 million Americans. No new legislation required. No tax increase. No deficit spending. Collective buying power — the same leverage corporations use against us, turned around.</p>
          <p>Lower drug prices. Living-wage jobs. A safety net that actually holds. Funded by savings we create together — not by waiting for Congress to act.</p>
        </>
      ),
      whyItMatters: "The survey tells Congress what constituents demand. The petition backs it with names. 1,500 people per district turns a demand into a consequence.",
      sources: []
    },
    {
      date: "MAY 18, 2026",
      tag: "ANALYSIS",
      pillColor: "amber",
      headline: "Housing, wages & the cost of staying alive",
      whatHappened: (
        <>
          <p>Corporate landlords are buying up neighborhoods. Fair housing enforcement is being gutted under the cover of "eliminating DEI." Wages haven't kept pace with rent, food, or medicine in a decade.</p>
          <p>These are not separate problems. They are one problem: the needs of the few being put ahead of the survival of the many. The same communities losing voting power are the same communities losing housing access. That's not coincidence. That's strategy.</p>
        </>
      ),
      whyItMatters: "",
      sources: []
    },
    {
      date: "MAY 18, 2026",
      tag: "ANALYSIS",
      pillColor: "blue",
      headline: "Surveillance, civil liberties & the rule of law",
      whatHappened: (
        <>
          <p>42 Democrats joined House Republicans to expand warrantless surveillance powers — handing the Trump administration sweeping spy authority that has already been used against Black Lives Matter protesters, journalists, and members of Congress.</p>
          <p>ICE has hired private security accused of torture to track undocumented children. The FEC has been deliberately left understaffed so campaign finance laws can't be enforced. Press freedom is under executive threat. The tools being used against Black and immigrant communities today will be used against everyone else tomorrow.</p>
        </>
      ),
      whyItMatters: "PHIERS' district-by-district model is built to overcome redistricting and voter suppression at the ground level — where the decisions are made and where the consequences land.",
      sources: []
    },
    {
      date: "MAY 18, 2026",
      tag: "ANALYSIS",
      pillColor: "teal",
      headline: "Protect public institutions before they're gone",
      whatHappened: (
        <>
          <p>Privatizing the Post Office hits rural, Black, elderly, and low-income communities hardest — cutting access to medicine, ballots, and economic lifelines. Data centers are being placed in low-income communities with massive environmental cost and zero community benefit.</p>
          <p>Public goods exist to serve people. Not to extract from them. Not to be sold to the highest bidder while the communities that need them most get nothing.</p>
        </>
      ),
      whyItMatters: "",
      sources: []
    },
    {
      date: "MAY 18, 2026",
      tag: "ANALYSIS",
      pillColor: "red",
      headline: "Stop the authoritarian drift — before it's too late",
      whatHappened: (
        <>
          <p>Trump has stated publicly that he doesn't care if we survive his policies. Conflicts of interest, self-dealing, and the corporate capture of government are not governing — they are looting. The FEC is understaffed on purpose. The courts have been packed. The Voting Rights Act is gone.</p>
          <p>Fascism always lands hardest on Black, immigrant, disabled, and poor communities first. It always has. Name it. Fight it. Don't normalize it. And don't wait for someone else to stop it.</p>
        </>
      ),
      whyItMatters: "",
      sources: []
    }
  ];

  // Combine all items
  const allItems: Array<{
    date: string;
    tag: string;
    pillColor: string;
    headline: string;
    whatHappened: React.ReactNode;
    whyItMatters: string;
    sources: any[];
  }> = [
    ...whatsNewEntries.map(entry => ({
      date: entry.date,
      tag: entry.tag,
      pillColor: entry.pillColor,
      headline: entry.headline,
      whatHappened: <p>{entry.whatHappened}</p>,
      whyItMatters: entry.whyItMatters,
      sources: entry.sources || []
    })),
    ...analysisSections
  ];

  // Sort newest first
  const sortedItems = allItems.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const pillClass = (color: string) => {
    switch(color) {
      case 'red': return 'bg-red-900/50 text-red-200 border border-red-800';
      case 'amber': return 'bg-amber-900/50 text-amber-200 border border-amber-800';
      case 'teal': return 'bg-teal-900/50 text-teal-200 border border-teal-800';
      case 'blue': return 'bg-blue-900/50 text-blue-200 border border-blue-800';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header – dark */}
      <div className="border-b border-gray-800 bg-card sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                THE SITUATION
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Developments shaping the moment.</p>
            </div>
            <div className="text-xs bg-gray-800 px-3 py-1 rounded-full text-muted-foreground self-start">
              as of {entriesData.lastUpdated}
            </div>
          </div>
        </div>
      </div>

      {/* Content – dark cards */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-8" id="after-trust">
          {sortedItems.map((item, idx) => (
            <div key={idx} className="bg-card rounded-xl shadow-md overflow-hidden border border-gray-800">
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-muted-foreground">{item.date}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${pillClass(item.pillColor)}`}>
                    {item.tag}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {item.headline}
                </h2>

                <div className="prose prose-sm prose-invert max-w-none text-muted-foreground space-y-3">
                  {item.whatHappened}
                </div>

                {item.whyItMatters && (
                  <div className="mt-4 p-3 bg-teal-950/40 border-l-4 border-teal-500 rounded-r">
                    <p className="text-sm text-teal-300 font-medium">Why it matters:</p>
                    <p className="text-sm text-teal-200/80 mt-1">{item.whyItMatters}</p>
                  </div>
                )}

                {item.sources && item.sources.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-800">
                    <p className="text-xs text-muted-foreground font-semibold mb-1">Sources:</p>
                    <ul className="space-y-1">
                      {item.sources.map((src: any, i: number) => (
                        <li key={i}>
                          <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 hover:underline">
                            {src.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// app/situation/page.tsx