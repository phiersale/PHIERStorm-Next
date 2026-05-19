// app/situation/page.tsx
// Merged page: What's New entries + Newsflash sections, chronological (latest first)

import entriesData from '@/data/whatsnew/entries.json';

export const metadata = {
  title: 'THE SITUATION – PHIERS | Latest Developments & Analysis',
  description: 'Real‑time updates on voting rights, wars, healthcare, and how PHIERS responds – merged in one chronological briefing.',
};

export default function SituationPage() {
  // Extract What's New entries (already sorted by date descending? We'll sort to be safe)
  const whatsNewEntries = [...entriesData.entries].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Newsflash sections (treated as "Analysis" pieces with date "May 2026" or "Ongoing")
  // We'll put them after the latest entries but before older ones if needed.
  // For simplicity, place them after all What's New entries, but with a clear separator.
  const analysisSections = [
    {
      date: "MAY 2026 — ONGOING",
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
      date: "MAY 2026 — ONGOING",
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
      date: "MAY 2026 — ONGOING",
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
      date: "MAY 2026 — ONGOING",
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
      date: "MAY 2026 — ONGOING",
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
      date: "MAY 2026 — ONGOING",
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
      date: "MAY 2026 — ONGOING",
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

  // Fetterman proof of concept (special block)
  const fettermanBlock = {
    date: "MAY 2026 — ONGOING",
    tag: "PROOF OF CONCEPT",
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
  };

  // Combine all entries: What's New first (already sorted), then analysis, then fetterman
  const allItems = [
    ...whatsNewEntries.map(entry => ({
      type: 'entry',
      date: entry.date,
      tag: entry.tag,
      pillColor: entry.pillColor,
      headline: entry.headline,
      whatHappened: <p>{entry.whatHappened}</p>,
      whyItMatters: entry.whyItMatters,
      sources: entry.sources || []
    })),
    ...analysisSections.map(section => ({
      type: 'analysis',
      date: section.date,
      tag: section.tag,
      pillColor: section.pillColor,
      headline: section.headline,
      whatHappened: section.whatHappened,
      whyItMatters: section.whyItMatters,
      sources: section.sources
    })),
    {
      type: 'fetterman',
      date: fettermanBlock.date,
      tag: fettermanBlock.tag,
      pillColor: fettermanBlock.pillColor,
      headline: fettermanBlock.headline,
      whatHappened: fettermanBlock.whatHappened,
      whyItMatters: "",
      sources: []
    }
  ];

  // Helper to get pill color class
  const pillClass = (color: string) => {
    switch(color) {
      case 'red': return 'bg-red-100 text-red-800';
      case 'amber': return 'bg-amber-100 text-amber-800';
      case 'teal': return 'bg-teal-100 text-teal-800';
      case 'blue': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                THE SITUATION
              </h1>
              <p className="text-sm text-gray-600 mt-1">Developments shaping the moment.</p>
            </div>
            <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">
              as of {entriesData.lastUpdated}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {allItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="p-5 sm:p-6">
                {/* Date & tag */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-gray-500">{item.date}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${pillClass(item.pillColor)}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {item.headline}
                </h2>

                {/* What happened */}
                <div className="prose prose-sm max-w-none text-gray-700 space-y-3">
                  {item.whatHappened}
                </div>

                {/* Why it matters */}
                {item.whyItMatters && (
                  <div className="mt-4 p-3 bg-teal-50 border-l-4 border-teal-500 rounded-r">
                    <p className="text-sm text-teal-800 font-medium">Why it matters:</p>
                    <p className="text-sm text-teal-700 mt-1">{item.whyItMatters}</p>
                  </div>
                )}

                {/* Sources */}
                {item.sources && item.sources.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500 font-semibold mb-1">Sources:</p>
                    <ul className="space-y-1">
                      {item.sources.map((src: any, i: number) => (
                        <li key={i}>
                          <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
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

        {/* CTA Footer */}
        <div className="mt-12 text-center">
          <a
            href="https://phiers-civic-engagem-vopm05.abacusai.app/petition/fifteen-hundred"
            className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            ✍ Sign the PHIERS Petition – 1,500 per district
          </a>
          <p className="text-xs text-gray-500 mt-4">Organized leverage. The kind Congress already fears.</p>
        </div>
      </div>
    </div>
  );
}

// app/situation/page.tsx
